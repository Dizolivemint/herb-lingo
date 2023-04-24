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
      outcomes: {
        Row: {
          data: Json | null
          id: string
          inserted_at: string
          outcome: string | null
          subject: string | null
          updated_at: string
        }
        Insert: {
          data?: Json | null
          id?: string
          inserted_at?: string
          outcome?: string | null
          subject?: string | null
          updated_at?: string
        }
        Update: {
          data?: Json | null
          id?: string
          inserted_at?: string
          outcome?: string | null
          subject?: string | null
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
          id: string
          image_url: string | null
          options: Json
          question_layout: Database["public"]["Enums"]["question_layout"] | null
          sound_url: string | null
          text: string
          updated_at: string
        }
        Insert: {
          correct_answer: string
          created_at?: string
          id: string
          image_url?: string | null
          options: Json
          question_layout?:
            | Database["public"]["Enums"]["question_layout"]
            | null
          sound_url?: string | null
          text: string
          updated_at?: string
        }
        Update: {
          correct_answer?: string
          created_at?: string
          id?: string
          image_url?: string | null
          options?: Json
          question_layout?:
            | Database["public"]["Enums"]["question_layout"]
            | null
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
