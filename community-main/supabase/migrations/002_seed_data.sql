-- Seed data: 5 virtual users with profiles, posts, comments, and likes
-- Run this AFTER the initial migration script

-- Insert profiles for 5 virtual users
INSERT INTO public.profiles (id, name, country, country_code, avatar_url, created_at) VALUES
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Sarah from USA', 'United States', 'US', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', NOW() - INTERVAL '30 days'),
('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Takeshi Yamamoto', 'Japan', 'JP', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Takeshi', NOW() - INTERVAL '28 days'),
('c3d4e5f6-a7b8-9012-cdef-123456789012', 'Marie Dubois', 'France', 'FR', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marie', NOW() - INTERVAL '25 days'),
('d4e5f6a7-b8c9-0123-defa-234567890123', 'Hans Mueller', 'Germany', 'DE', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hans', NOW() - INTERVAL '22 days'),
('e5f6a7b8-c9d0-1234-efab-345678901234', 'Carlos from Brazil', 'Brazil', 'BR', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos', NOW() - INTERVAL '20 days');

-- Insert 22 posts from these users
INSERT INTO public.posts (user_id, content, category, city, created_at) VALUES
-- Sarah from USA (5 posts)
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Just discovered the most amazing street food stall in Chengdu! The owner has been making the same recipe for 40 years. Sometimes the best experiences are the ones you stumble upon randomly.', 'food', 'chengdu', NOW() - INTERVAL '2 hours'),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Working remotely from Shanghai for 6 months now. The coworking scene here is incredible! Met so many interesting people from different industries.', 'work', 'shanghai', NOW() - INTERVAL '1 day'),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'The HSR between Beijing and Shanghai never ceases to amaze me. 1,318 km in just 4.5 hours with impeccable service. As someone who grew up with American trains, this feels like the future!', 'travel', 'beijing', NOW() - INTERVAL '2 days'),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Just launched my tech startup in Guangzhou! The ecosystem here is incredibly supportive for entrepreneurs. Already secured our first round of funding.', 'business', 'guangzhou', NOW() - INTERVAL '4 days'),
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'The e-commerce infrastructure in China is 10 years ahead of anywhere else. Same-day delivery, super apps for everything, and cashless payments everywhere.', 'life', 'hangzhou', NOW() - INTERVAL '5 days'),

-- Takeshi Yamamoto (5 posts)
('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Finally got my residence permit renewed after some stressful weeks! Pro tip: start the renewal process at least 2 months before expiration.', 'life', 'beijing', NOW() - INTERVAL '3 hours'),
('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Quick review: The healthcare system in Shenzhen is excellent! Got a comprehensive checkup at a private clinic for a fraction of what it would cost in Japan.', 'life', 'shenzhen', NOW() - INTERVAL '8 hours'),
('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Photographer''s paradise! The karst landscape around Guilin is unlike anywhere else. Spent a week there and took over 2,000 photos.', 'travel', 'guangzhou', NOW() - INTERVAL '12 hours'),
('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Just completed my first semester at Peking University! The campus is beautiful and the professors are world-class. Learning Mandarin has been challenging but rewarding.', 'study', 'beijing', NOW() - INTERVAL '3 days'),
('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Cultural shock of the week: Got a marriage proposal from a Chinese friend''s parents. Apparently I''m "of good child-bearing age". Dating culture is quite different here!', 'study', 'shanghai', NOW() - INTERVAL '6 days'),

-- Marie Dubois (4 posts)
('c3d4e5f6-a7b8-9012-cdef-123456789012', 'As someone who grew up with French trains, the Beijing-Shanghai HSR feels like the future! And the food options on board are surprisingly good.', 'travel', 'shanghai', NOW() - INTERVAL '5 hours'),
('c3d4e5f6-a7b8-9012-cdef-123456789012', 'Learning to navigate Chinese bureaucracy as a foreigner. Today I successfully opened a bank account without speaking a word of Mandarin. Gestures work wonders!', 'life', 'beijing', NOW() - INTERVAL '1 day'),
('c3d4e5f6-a7b8-9012-cdef-123456789012', 'The dumpling street in Chengdu is a life-changing experience. 50 different varieties and each one incredible. My favorite: soup dumplings with crab roe.', 'food', 'chengdu', NOW() - INTERVAL '2 days'),
('c3d4e5f6-a7b8-9012-cdef-123456789012', 'Teaching French at a Beijing university. The students are so eager to learn and their accent improvement is remarkable. Also discovered they love croissant culture!', 'work', 'beijing', NOW() - INTERVAL '7 days'),

-- Hans Mueller (4 posts)
('d4e5f6a7-b8c9-0123-defa-234567890123', 'Germans love efficiency and order. Shenzhen''s tech parks remind me of Munich but with better weather and more entrepreneurial energy.', 'work', 'shenzhen', NOW() - INTERVAL '4 hours'),
('d4e5f6a7-b8c9-0123-defa-234567890123', 'Just bought my first e-scooter. The bike lanes in Guangzhou are so well organized! Much better than Berlin. Now I can explore the city freely.', 'life', 'guangzhou', NOW() - INTERVAL '10 hours'),
('d4e5f6a7-b8c9-0123-defa-234567890123', 'Discovered an amazing German-style brewery in Shanghai. They even have Weißbier! Perfect for homesick expats like me. Prost!', 'food', 'shanghai', NOW() - INTERVAL '3 days'),
('d4e5f6a7-b8c9-0123-defa-234567890123', 'The payment infrastructure here is mind-blowing. Haven''t used cash in 2 weeks. WeChat Pay and Alipay are years ahead of anything in Europe.', 'life', 'hangzhou', NOW() - INTERVAL '8 days'),

-- Carlos from Brazil (4 posts)
('e5f6a7b8-c9d0-1234-efab-345678901234', 'Missing Brazilian coffee but found an amazing specialty coffee shop in Shanghai! The owner even imports beans from Brazil. Small world.', 'food', 'shanghai', NOW() - INTERVAL '6 hours'),
('e5f6a7b8-c9d0-1234-efab-345678901234', 'The football culture in Guangzhou is incredible. Found a local futsal group that plays every weekend. Made some great friends already!', 'life', 'guangzhou', NOW() - INTERVAL '14 hours'),
('e5f6a7b8-c9d0-1234-efab-345678901234', 'Just got my Chinese driver''s license! The exam was in Mandarin but I passed on the first try. Now I can rent cars and explore more remote areas.', 'travel', 'beijing', NOW() - INTERVAL '4 days'),
('e5f6a7b8-c9d0-1234-efab-345678901234', 'Chinese startup culture reminds me of Brazil''s entrepreneurial energy but at a much larger scale. The ambition here is unmatched globally.', 'business', 'shenzhen', NOW() - INTERVAL '9 days');

-- Insert comments
INSERT INTO public.comments (post_id, user_id, content, created_at) VALUES
-- Comments on Sarah's posts
(2, 'b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Which coworking spaces would you recommend in Shanghai? I am thinking of moving there too!', NOW() - INTERVAL '18 hours'),
(2, 'c3d4e5f6-a7b8-9012-cdef-123456789012', 'Great to hear! I work remotely too and Shanghai is amazing for that.', NOW() - INTERVAL '16 hours'),
(3, 'd4e5f6a7-b8c9-0123-defa-234567890123', 'Agreed! The efficiency here is impressive. German engineering meets Chinese speed!', NOW() - INTERVAL '36 hours'),
(4, 'e5f6a7b8-c9d0-1234-efab-345678901234', 'Congrats on the funding! What sector is your startup in?', NOW() - INTERVAL '3 days'),
(5, 'b2c3d4e5-f6a7-8901-bcde-f12345678901', 'This is so true! Going back to Japan was a shock. We still use cash way too much.', NOW() - INTERVAL '4 days'),

-- Comments on Takeshi's posts
(6, 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Thanks for the tip! Currently going through the renewal process myself.', NOW() - INTERVAL '2 hours'),
(6, 'd4e5f6a7-b8c9-0123-defa-234567890123', 'Same here. The Beijing immigration office has gotten much better.', NOW() - INTERVAL '1 hour'),
(8, 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Those Guilin photos must be stunning! Planning to go there next month.', NOW() - INTERVAL '10 hours'),
(9, 'e5f6a7b8-c9d0-1234-efab-345678901234', 'How was the Mandarin learning curve? I am just starting out.', NOW() - INTERVAL '2 days'),

-- Comments on Marie's posts
(11, 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'I agree! The high-speed rail system is incredibly efficient.', NOW() - INTERVAL '4 hours'),
(12, 'b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Haha! I had a similar experience. Body language is truly universal.', NOW() - INTERVAL '20 hours'),
(13, 'e5f6a7b8-c9d0-1234-efab-345678901234', 'Soup dumplings with crab roe sound incredible! Will try that next time.', NOW() - INTERVAL '1 day'),

-- Comments on Hans's posts
(15, 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Great tip! Where did you buy the e-scooter? I want one too.', NOW() - INTERVAL '8 hours'),
(16, 'c3d4e5f6-a7b8-9012-cdef-123456789012', 'Wei?bier in Shanghai! The world really is getting smaller.', NOW() - INTERVAL '2 days'),
(17, 'e5f6a7b8-c9d0-1234-efab-345678901234', 'I still use cash back home in Brazil. Coming here felt like stepping into the future.', NOW() - INTERVAL '7 days'),

-- Comments on Carlos's posts
(19, 'c3d4e5f6-a7b8-9012-cdef-123456789012', 'Found one too! Brazilian coffee culture is alive even here.', NOW() - INTERVAL '5 hours'),
(20, 'b2c3d4e5-f6a7-8901-bcde-f12345678901', 'I play futsal too! Could you share the group info?', NOW() - INTERVAL '12 hours');

-- Insert likes
INSERT INTO public.likes (post_id, user_id, created_at) VALUES
-- Sarah's posts likes
(1, 'b2c3d4e5-f6a7-8901-bcde-f12345678901', NOW() - INTERVAL '1 hour'),
(1, 'c3d4e5f6-a7b8-9012-cdef-123456789012', NOW() - INTERVAL '1 hour'),
(2, 'b2c3d4e5-f6a7-8901-bcde-f12345678901', NOW() - INTERVAL '20 hours'),
(2, 'c3d4e5f6-a7b8-9012-cdef-123456789012', NOW() - INTERVAL '18 hours'),
(2, 'd4e5f6a7-b8c9-0123-defa-234567890123', NOW() - INTERVAL '16 hours'),
(3, 'b2c3d4e5-f6a7-8901-bcde-f12345678901', NOW() - INTERVAL '1 day'),
(3, 'e5f6a7b8-c9d0-1234-efab-345678901234', NOW() - INTERVAL '1 day'),
(4, 'c3d4e5f6-a7b8-9012-cdef-123456789012', NOW() - INTERVAL '3 days'),
(5, 'b2c3d4e5-f6a7-8901-bcde-f12345678901', NOW() - INTERVAL '4 days'),

-- Takeshi's posts likes
(6, 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', NOW() - INTERVAL '2 hours'),
(6, 'c3d4e5f6-a7b8-9012-cdef-123456789012', NOW() - INTERVAL '2 hours'),
(7, 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', NOW() - INTERVAL '7 hours'),
(7, 'd4e5f6a7-b8c9-0123-defa-234567890123', NOW() - INTERVAL '6 hours'),
(8, 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', NOW() - INTERVAL '10 hours'),
(8, 'd4e5f6a7-b8c9-0123-defa-234567890123', NOW() - INTERVAL '9 hours'),
(9, 'b2c3d4e5-f6a7-8901-bcde-f12345678901', NOW() - INTERVAL '2 days'),

-- Marie's posts likes
(11, 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', NOW() - INTERVAL '4 hours'),
(11, 'd4e5f6a7-b8c9-0123-defa-234567890123', NOW() - INTERVAL '4 hours'),
(11, 'e5f6a7b8-c9d0-1234-efab-345678901234', NOW() - INTERVAL '3 hours'),
(12, 'b2c3d4e5-f6a7-8901-bcde-f12345678901', NOW() - INTERVAL '18 hours'),
(13, 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', NOW() - INTERVAL '1 day'),
(14, 'b2c3d4e5-f6a7-8901-bcde-f12345678901', NOW() - INTERVAL '6 days'),

-- Hans's posts likes
(15, 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', NOW() - INTERVAL '7 hours'),
(15, 'e5f6a7b8-c9d0-1234-efab-345678901234', NOW() - INTERVAL '6 hours'),
(16, 'c3d4e5f6-a7b8-9012-cdef-123456789012', NOW() - INTERVAL '2 days'),
(17, 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', NOW() - INTERVAL '7 days'),

-- Carlos's posts likes
(19, 'c3d4e5f6-a7b8-9012-cdef-123456789012', NOW() - INTERVAL '5 hours'),
(20, 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', NOW() - INTERVAL '12 hours'),
(20, 'b2c3d4e5-f6a7-8901-bcde-f12345678901', NOW() - INTERVAL '11 hours'),
(21, 'd4e5f6a7-b8c9-0123-defa-234567890123', NOW() - INTERVAL '3 days'),
(22, 'b2c3d4e5-f6a7-8901-bcde-f12345678901', NOW() - INTERVAL '8 days');