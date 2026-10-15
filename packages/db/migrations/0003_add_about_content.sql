CREATE TABLE `about_content` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `title` text DEFAULT 'Biz Kimik?' NOT NULL,
  `description` text DEFAULT '' NOT NULL,
  `button_text` text DEFAULT 'Xidmətlərimiz' NOT NULL,
  `images` text DEFAULT '[]' NOT NULL,
  `updated_at` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `about_content` (`id`, `title`, `description`, `button_text`, `images`, `updated_at`)
VALUES (
  1,
  'Biz Kimik?',
  'Yaradıcılıq, strategiya və yenilikçi yanaşmanı bir araya gətirərək, markalar üçün rəqəmsal dünyada yeni imkanlar yaradırıq. Tanıtım.az olaraq hər brendin özünəməxsus hekayəsi olduğuna inanır və bu hekayəni doğru auditoriyaya çatdırmaq üçün fərqli ideyalar üzərində çalışırıq. Məqsədimiz sadəcə görünürlük yaratmaq deyil, markalarla auditoriya arasında yadda qalan və uzunmüddətli əlaqələr qurmaqdır. Hər layihəyə fərdi yanaşaraq, ideyadan nəticəyə qədər markanın yanında oluruq. Tanıtım.az ilə markanızın növbəti hekayəsini birlikdə yazaq.',
  'Xidmətlərimiz',
  '[{"src":"/aboutUs/btl.png","alt":"Görüş"},{"src":"/aboutUs/Content_Creation.png","alt":"Content creation"},{"src":"/aboutUs/Digital_Marketing.png","alt":"Digital marketing"},{"src":"/aboutUs/Event_Org.png","alt":"Event organization"},{"src":"/aboutUs/influecncer.png","alt":"Influencer marketing"},{"src":"/aboutUs/Mail_Marketing.png","alt":"Mail marketing"},{"src":"/aboutUs/Outdoor.png","alt":"Outdoor marketing"}]',
  datetime('now')
);
