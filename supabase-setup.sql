-- Connect Platform Supabase Database Setup

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  user_role TEXT DEFAULT 'requester' CHECK (user_role IN ('requester', 'receiver')),
  wechat_qr_url TEXT,
  alipay_qr_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.projects (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  budget TEXT,
  deadline TEXT,
  contact TEXT,
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'completed')),
  requester_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  receiver_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS profiles_select ON public.profiles;
CREATE POLICY profiles_select ON public.profiles FOR SELECT USING (true);

DROP POLICY IF EXISTS profiles_update ON public.profiles;
CREATE POLICY profiles_update ON public.profiles FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS projects_select ON public.projects;
CREATE POLICY projects_select ON public.projects FOR SELECT USING (true);

DROP POLICY IF EXISTS projects_insert ON public.projects;
CREATE POLICY projects_insert ON public.projects FOR INSERT WITH CHECK (auth.uid() = requester_id);

DROP POLICY IF EXISTS projects_update ON public.projects;
CREATE POLICY projects_update ON public.projects FOR UPDATE USING (
  auth.uid() = requester_id OR auth.uid() = receiver_id
);

INSERT INTO storage.buckets (id, name, public) VALUES ('qr-codes', 'qr-codes', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS qr_upload ON storage.objects;
CREATE POLICY qr_upload ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'qr-codes' AND auth.role() = 'authenticated');

DROP POLICY IF EXISTS qr_select ON storage.objects;
CREATE POLICY qr_select ON storage.objects FOR SELECT
  USING (bucket_id = 'qr-codes');

DROP POLICY IF EXISTS qr_delete ON storage.objects;
CREATE POLICY qr_delete ON storage.objects FOR DELETE
  USING (bucket_id = 'qr-codes' AND auth.uid() = owner);