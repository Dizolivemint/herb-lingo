export interface ChatGPTRequest {
  topic: string;
  outcome: string;
  questionType: string;
}

interface Choice {
  text: string;
  answer: string;
}

interface Question {
  question: string;
  answer: string;
  topic: string;
  outcome: string;
  questionType: string;
}

export class ChatGPTClient {
  private apiKey: string;
  private apiEndpoint: string;

  constructor() {
    this.apiKey = process.env.CHATGPT_API_KEY || '';
    this.apiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  }

  private checkKey() {
    if (this.apiKey === '') {
      throw new Error('No API key provided');
    }
  }

  async generateQuestionsAndAnswers(request: ChatGPTRequest): Promise<Question[]> {
    this.checkKey();

    const { topic, outcome, questionType } = request;
    const prompt = `Generate ${questionType} questions and their answers about the topic ${topic} related to the outcome ${outcome}.`;

    const requestBody = {
      prompt: prompt,
      max_tokens: 100,
      n: 5,
      stop: null,
      temperature: 0.7,
    };
    
    const response = await fetch(this.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    const questions: Question[] = data.choices.map((choice: Choice, index: number) => ({
      question: choice.text.trim(),
      answer: choice.answer.trim(),
      topic,
      outcome,
      questionType
    }));

    return questions;
  }
}
