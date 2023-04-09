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
      essay_questions: {
        Row: {
          created_at: string
          id: string
          text: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          text: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          text?: string
          updated_at?: string
        }
      }
      multiple_choice_questions: {
        Row: {
          correct_answer: string
          created_at: string
          id: string
          options: Json
          text: string
          updated_at: string
        }
        Insert: {
          correct_answer: string
          created_at?: string
          id: string
          options: Json
          text: string
          updated_at?: string
        }
        Update: {
          correct_answer?: string
          created_at?: string
          id?: string
          options?: Json
          text?: string
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
          question_id: string
          question_type: string
          quiz_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          question_id: string
          question_type: string
          quiz_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          question_id?: string
          question_type?: string
          quiz_id?: string
          updated_at?: string
        }
      }
      short_answer_questions: {
        Row: {
          correct_answer: string
          created_at: string
          id: string
          text: string
          updated_at: string
        }
        Insert: {
          correct_answer: string
          created_at?: string
          id: string
          text: string
          updated_at?: string
        }
        Update: {
          correct_answer?: string
          created_at?: string
          id?: string
          text?: string
          updated_at?: string
        }
      }
      true_false_questions: {
        Row: {
          correct_answer: boolean
          created_at: string
          id: string
          text: string
          updated_at: string
        }
        Insert: {
          correct_answer: boolean
          created_at?: string
          id: string
          text: string
          updated_at?: string
        }
        Update: {
          correct_answer?: boolean
          created_at?: string
          id?: string
          text?: string
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
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
