export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      competencies: {
        Row: {
          compentency: string | null
          id: string
          inserted_at: string
          updated_at: string
        }
        Insert: {
          compentency?: string | null
          id?: string
          inserted_at?: string
          updated_at?: string
        }
        Update: {
          compentency?: string | null
          id?: string
          inserted_at?: string
          updated_at?: string
        }
      }
      outcomes: {
        Row: {
          id: string
          inserted_at: string
          outcome: string
          updated_at: string
        }
        Insert: {
          id?: string
          inserted_at?: string
          outcome: string
          updated_at?: string
        }
        Update: {
          id?: string
          inserted_at?: string
          outcome?: string
          updated_at?: string
        }
      }
      outcomes_competencies: {
        Row: {
          competency_id: string
          inserted_at: string
          outcome_id: string
          updated_at: string
        }
        Insert: {
          competency_id: string
          inserted_at?: string
          outcome_id: string
          updated_at?: string
        }
        Update: {
          competency_id?: string
          inserted_at?: string
          outcome_id?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          display_name: string | null
          id: string
        }
        Insert: {
          avatar_url?: string | null
          display_name?: string | null
          id: string
        }
        Update: {
          avatar_url?: string | null
          display_name?: string | null
          id?: string
        }
      }
      questions: {
        Row: {
          correct_answer: string
          created_at: string
          distractors: string[] | null
          id: string
          image_url: string | null
          sound_url: string | null
          text: string
          updated_at: string
        }
        Insert: {
          correct_answer: string
          created_at?: string
          distractors?: string[] | null
          id: string
          image_url?: string | null
          sound_url?: string | null
          text: string
          updated_at?: string
        }
        Update: {
          correct_answer?: string
          created_at?: string
          distractors?: string[] | null
          id?: string
          image_url?: string | null
          sound_url?: string | null
          text?: string
          updated_at?: string
        }
      }
      quiz: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          id: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          title?: string
          updated_at?: string
        }
      }
      quiz_questions: {
        Row: {
          created_at: string
          id: string
          outcome_ids: string[] | null
          published: boolean | null
          question_id: string
          question_type: string
          quiz_id: string
          updated_at: string
          user_id: string[] | null
        }
        Insert: {
          created_at?: string
          id: string
          outcome_ids?: string[] | null
          published?: boolean | null
          question_id: string
          question_type: string
          quiz_id: string
          updated_at?: string
          user_id?: string[] | null
        }
        Update: {
          created_at?: string
          id?: string
          outcome_ids?: string[] | null
          published?: boolean | null
          question_id?: string
          question_type?: string
          quiz_id?: string
          updated_at?: string
          user_id?: string[] | null
        }
      }
      subjects: {
        Row: {
          id: string
          inserted_at: string
          subject: string | null
          updated_at: string
        }
        Insert: {
          id?: string
          inserted_at?: string
          subject?: string | null
          updated_at?: string
        }
        Update: {
          id?: string
          inserted_at?: string
          subject?: string | null
          updated_at?: string
        }
      }
      subjects_competencies: {
        Row: {
          competency_id: string
          inserted_at: string
          subject_id: string
          updated_at: string
        }
        Insert: {
          competency_id: string
          inserted_at?: string
          subject_id: string
          updated_at?: string
        }
        Update: {
          competency_id?: string
          inserted_at?: string
          subject_id?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      question_layout:
        | "single-choice"
        | "essay"
        | "multiple-choice"
        | "fill-in-the-blank"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
