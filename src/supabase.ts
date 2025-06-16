import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for database tables
export interface BoardAndTrainApplication {
  id?: string;
  created_at?: string;

  // Owner Information
  owner_name: string;
  email: string;
  phone: string;
  address?: string;

  // Dog Information
  dog_name: string;
  breed: string;
  age: number;
  gender: "Male" | "Female";
  weight: number;
  neutered: boolean;
  dog_photo_url?: string;

  // Program Information
  program_id: string;
  start_date: string;
  special_requirements?: string;
  dietary_restrictions?: string;
  medications?: string;

  // Additional Services
  extra_grooming: boolean;
  advanced_training_tools: boolean;
  in_home_follow_up: boolean;

  // Status tracking
  status?: "pending" | "approved" | "rejected" | "in_progress" | "completed";
  notes?: string;
}
