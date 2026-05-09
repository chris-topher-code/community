-- Group messages table for country+identity based group chat
CREATE TABLE public.group_messages (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  user_id uuid NOT NULL,
  country_code text NOT NULL,
  identity text NOT NULL,
  content text NOT NULL,
  image_url text,
  CONSTRAINT group_messages_pkey PRIMARY KEY (id),
  CONSTRAINT group_messages_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE
);

-- Index for faster queries on group chat
CREATE INDEX idx_group_messages_country_identity ON public.group_messages(country_code, identity, created_at DESC);

-- Enable RLS
ALTER TABLE public.group_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.group_messages FORCE ROW LEVEL SECURITY;

-- RLS policies
-- Anyone can read group messages (public group chat)
CREATE POLICY "Anyone can read group messages" ON public.group_messages
  FOR SELECT USING (true);

-- Authenticated users can insert messages
CREATE POLICY "Users can send group messages" ON public.group_messages
  FOR INSERT WITH CHECK (auth.uid() = user_id);
