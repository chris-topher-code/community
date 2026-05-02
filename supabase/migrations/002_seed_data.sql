-- Seed data: Create demo user and 10 sample posts
-- Run this AFTER the migration script

-- Create a demo user (this creates both auth user and profile)
-- Note: You'll need to create this user through the Supabase Auth UI or API
-- For now, we'll insert posts with a placeholder user_id

-- First, let's create sample posts that will show up for everyone
-- These posts use a special 'system' approach - we'll insert them as a demo user

-- Insert demo profile (if no real users exist yet)
-- You can create a real user through the sign-up form, then run this to add sample posts

-- Sample posts (replace 'YOUR_USER_ID' with a real user's UUID after they sign up)
-- For now, these will be inserted without a user_id (visible to all, not deletable)

INSERT INTO public.posts (content, category, city, created_at) VALUES
('Just discovered the most amazing street food stall in Chengdu! The owner has been making the same recipe for 40 years. Sometimes the best experiences in China are the ones you stumble upon randomly.', 'food', 'chengdu', NOW() - INTERVAL '2 hours'),
('Working remotely from Shanghai for 6 months now. The coworking scene here is incredible! Met so many interesting people from different industries. Anyone else doing remote work in China?', 'work', 'shanghai', NOW() - INTERVAL '4 hours'),
('Finally got my residence permit renewed after some stressful weeks! Pro tip: start the renewal process at least 2 months before expiration. The immigration office in Beijing has gotten much more efficient.', 'life', 'beijing', NOW() - INTERVAL '6 hours'),
('The HSR between Beijing and Shanghai never ceases to amaze me. 1,318 km in just 4.5 hours with impeccable service. As someone who grew up with French trains, this feels like the future!', 'travel', 'beijing', NOW() - INTERVAL '8 hours'),
('Just completed my first semester at Peking University! The campus is beautiful and the professors are world-class. Learning Mandarin has been challenging but incredibly rewarding.', 'study', 'beijing', NOW() - INTERVAL '10 hours'),
('Photographer''s paradise! The karst landscape around Guilin is unlike anywhere else on Earth. Spent a week there and took over 2,000 photos. The morning mist over the Li River is pure magic.', 'travel', 'guangzhou', NOW() - INTERVAL '12 hours'),
('Just launched my tech startup in Guangzhou! The ecosystem here is incredibly supportive for entrepreneurs. Already secured our first round of funding. China is truly the land of opportunity.', 'business', 'guangzhou', NOW() - INTERVAL '14 hours'),
('Cultural shock of the week: Got a marriage proposal from my Chinese friend''s parents. Apparently I''m ''of good child-bearing age''. Dating culture is quite different here!', 'study', 'shanghai', NOW() - INTERVAL '16 hours'),
('Quick review: The healthcare system in Shenzhen is excellent! Got a comprehensive checkup at a private clinic for a fraction of what it would cost in Europe. Staff spoke perfect English too.', 'life', 'shenzhen', NOW() - INTERVAL '18 hours'),
('The e-commerce infrastructure in China is 10 years ahead of anywhere else. Same-day delivery, super apps for everything, and cashless payments everywhere. Going back home will be such a culture shock!', 'life', 'hangzhou', NOW() - INTERVAL '20 hours');
