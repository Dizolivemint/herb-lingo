import { Database } from '@/lib/database.types';

type QuizQuestion = Database['public']['Tables']['questions']['Row'];

type Choice = {
  text: string;
  index: number;
  logprobs: null;
  finish_reason: string;
}

type ChatGPTResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: {
    prompt_tokens: number;
    total_tokens: number;
  };
}

export class ChatGPTClient {
  private apiKey: string;
  private apiEndpoint: string;

  constructor() {
    this.apiKey = process.env.CHATGPT_API_KEY || '';
    this.apiEndpoint = 'https://api.openai.com/v1/completions';
  }

  private checkKey() {
    if (this.apiKey === '') {
      throw new Error('No API key provided');
    }
  }

  async generateQuizQuestions(request: string): Promise<QuizQuestion[]> {
    this.checkKey();

    const { topic, outcome, questionType } = JSON.parse(request);
    console.log('request', request)
    console.log('topic', topic)

    const prompt = `Generate a ${questionType} question, answer, and three distractors about the topic ${topic} related to the outcome ${outcome}. Provide the question leading with Q:, the answer with A:, and the distractors with D:`;

    console.log('prompt', prompt)

    const requestBody = {
      "model": "text-davinci-003",
      "prompt": prompt,
      "max_tokens": 1000,
      "stream": false,
      "logprobs": null
    };

    console.log('requestBody', requestBody)
    
    const response = await fetch(this.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok || !response.body) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const uint8ArrayResponseBody = await response.arrayBuffer(); // Get response body as Uint8Array
    const responseBody = JSON.parse(new TextDecoder().decode(uint8ArrayResponseBody)); // Parse the JSON response
    console.log('response', responseBody)

    const questions: QuizQuestion[] = responseBody.choices.map((choice: Choice, index: number) => {
      const textParts = choice.text.trim().split(/Q: |A: |D: /); // Split text by "Q: ", "A: " or "D: "
      return {
        text: textParts[1].trim(), // Take the second part as the question
        correct_answer: textParts[2].trim(), // Take the third part as the answer,
        distractors: textParts.slice(3).map((distractor: string) => distractor.trim()), // Take the rest as distractors
      };
    });

    return questions;
  }
}
