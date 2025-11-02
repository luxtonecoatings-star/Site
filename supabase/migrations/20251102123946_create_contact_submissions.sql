/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the person submitting
      - `email` (text) - Email address for follow-up
      - `phone` (text) - Phone number for contact
      - `service` (text) - Type of service interested in
      - `message` (text) - Detailed message from the customer
      - `created_at` (timestamptz) - Timestamp when submission was created
      - `status` (text) - Current status of the inquiry (pending, contacted, completed)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting new submissions (public access)
    - Add policy for reading submissions (authenticated admin only)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read all submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);
