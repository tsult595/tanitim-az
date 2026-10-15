CREATE TABLE `products` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `name` text NOT NULL,
  `description` text DEFAULT '' NOT NULL,
  `button_text` text DEFAULT '' NOT NULL,
  `href` text DEFAULT '' NOT NULL,
  `accent` text DEFAULT 'from-slate-100 to-white' NOT NULL,
  `image_url` text DEFAULT '' NOT NULL,
  `sort_order` integer DEFAULT 0 NOT NULL,
  `is_active` integer DEFAULT true NOT NULL,
  `created_at` text NOT NULL,
  `updated_at` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `products` (`name`, `description`, `button_text`, `href`, `accent`, `image_url`, `sort_order`, `created_at`, `updated_at`)
VALUES
  ('INFLUENCER.AZ', 'Azərbaycanın ən böyük və funksional influenser bazası. Kampaniyalarınızı planlaşdırın, uyğun influenserləri tapın və nəticələri real vaxtda izləyin.', 'ƏTRAFLI BAX', 'https://influencer.az', 'from-rose-100 via-orange-50 to-white', '/influencerpng.png', 1, datetime('now'), datetime('now')),
  ('UTM.AZ', 'Kampaniyalarınızın effektivliyini ölçmək üçün mükəmməl analitika aləti. Linklərinizi qısaldın, izləyin və auditoriyanızı daha yaxşı anlayın.', 'PLATFORMAYA KEÇİD', 'https://utm.az', 'from-emerald-100 via-green-50 to-white', '/utm.az.png', 2, datetime('now'), datetime('now'));
