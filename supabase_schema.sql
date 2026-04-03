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

-- Create policy for admin to manage all (you can restrict this later with auth)
CREATE POLICY "Allow admin all" ON testimonials
  FOR ALL USING (true);
