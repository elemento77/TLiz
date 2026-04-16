-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  service TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending' NOT NULL CHECK (status IN ('pending', 'approved', 'rejected')),
  consent BOOLEAN DEFAULT false NOT NULL
);

-- Enable Row Level Security
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for the feedback page)
CREATE POLICY "Allow public insert" ON testimonials
  FOR INSERT WITH CHECK (true);

-- Create policy to allow anyone to read approved testimonials (for the home page)
CREATE POLICY "Allow public read approved" ON testimonials
  FOR SELECT USING (status = 'approved');

-- Admin: só a conta autorizada (mesmo e-mail no Auth e nas políticas abaixo). Ver pasta supabase/migrations/.
DROP POLICY IF EXISTS "Allow admin all" ON testimonials;

CREATE POLICY "Admin testimonials select all" ON testimonials
  FOR SELECT TO authenticated
  USING (lower((auth.jwt() ->> 'email')) = lower('mentinho7@hotmail.com'));

CREATE POLICY "Admin testimonials update" ON testimonials
  FOR UPDATE TO authenticated
  USING (lower((auth.jwt() ->> 'email')) = lower('mentinho7@hotmail.com'))
  WITH CHECK (lower((auth.jwt() ->> 'email')) = lower('mentinho7@hotmail.com'));

CREATE POLICY "Admin testimonials delete" ON testimonials
  FOR DELETE TO authenticated
  USING (lower((auth.jwt() ->> 'email')) = lower('mentinho7@hotmail.com'));
