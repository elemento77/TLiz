import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found in environment variables.');
}

/** Mesmo e-mail das políticas RLS "Admin testimonials *" no Supabase (opcional; impede login com outra conta na interface). */
export const adminEmailEnv =
  typeof import.meta.env.VITE_ADMIN_EMAIL === 'string'
    ? import.meta.env.VITE_ADMIN_EMAIL.trim().toLowerCase()
    : '';

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '', {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
