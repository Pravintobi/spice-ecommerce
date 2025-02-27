/*
  # Create products table

  1. New Tables
    - `products`
      - `id` (text, primary key)
      - `name` (text)
      - `price` (numeric)
      - `description` (text)
      - `category` (text)
      - `images` (text array)
      - `weight_options` (text array)
      - `rating` (numeric)
      - `reviews_count` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS products (
  id text PRIMARY KEY,
  name text NOT NULL,
  price numeric NOT NULL,
  description text,
  category text,
  images text[] NOT NULL DEFAULT '{}',
  weight_options text[] NOT NULL DEFAULT '{"250gm", "500gm", "1kg"}',
  rating numeric DEFAULT 0,
  reviews_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON products
  FOR SELECT
  TO public
  USING (true);