-- Supabase Demo Data 演示数据脚本
-- 使用方法：
-- 1. 登录 Supabase 控制台 (https://app.supabase.com)
-- 2. 进入你的项目 -> SQL Editor
-- 3. 点击 "New Query"，粘贴此脚本内容
-- 4. 点击 "Run" 执行
-- 5. 刷新页面即可看到演示项目数据

-- 此脚本可重复运行（使用 ON CONFLICT 避免重复插入）

-- ============================================
-- 1. 创建演示用户Profile（使用固定UUID作为占位符）
-- 用户创建账号后，可将此UUID替换为真实用户ID
-- ============================================
INSERT INTO public.profiles (id, username, user_role)
VALUES ('00000000-0000-0000-0000-000000000001', 'demo_user', 'requester')
ON CONFLICT (id) DO UPDATE SET
  username = EXCLUDED.username,
  user_role = EXCLUDED.user_role;

-- ============================================
-- 2. 创建演示项目数据
-- ============================================
INSERT INTO public.projects (title, description, budget, deadline, contact, status, requester_id)
VALUES
  (
    '网站UI界面设计',
    '设计一个简洁大方的企业官网首页，包括轮播图、产品展示区、新闻动态栏。要求现代感强、响应式布局。',
    '¥3,000 - ¥5,000',
    '2026-06-15',
    '微信: design_master',
    'open',
    '00000000-0000-0000-0000-000000000001'
  ),
  (
    'Python数据爬虫开发',
    '需要爬取多个电商平台的商品价格数据，支持定时任务和数据导出功能。',
    '¥2,000 - ¥4,000',
    '2026-05-30',
    '邮箱: spider@demo.com',
    'open',
    '00000000-0000-0000-0000-000000000001'
  ),
  (
    '移动端App UI原型设计',
    '设计一款健身记录App的UI原型，包含首页、运动记录、社区、我的 四个Tab页面。',
    '¥5,000 - ¥8,000',
    '2026-06-20',
    '微信: app_design2026',
    'in_progress',
    '00000000-0000-0000-0000-000000000001'
  ),
  (
    '企业宣传视频剪辑',
    '需要将一段15分钟的活动视频剪辑成3分钟的精华版，配字幕和背景音乐。',
    '¥1,500 - ¥2,500',
    '2026-05-25',
    '手机: 138****8888',
    'completed',
    '00000000-0000-0000-0000-000000000001'
  )
ON CONFLICT DO NOTHING;

-- 如果需要清理演示数据，注释掉上面的INSERT，运行以下语句：
-- DELETE FROM public.projects WHERE requester_id = '00000000-0000-0000-0000-000000000001';
-- DELETE FROM public.profiles WHERE id = '00000000-0000-0000-0000-000000000001';