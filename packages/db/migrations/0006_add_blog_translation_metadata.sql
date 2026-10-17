ALTER TABLE `blogs` ADD COLUMN `translation_key` text NOT NULL DEFAULT '';
--> statement-breakpoint
ALTER TABLE `blogs` ADD COLUMN `seo_title` text NOT NULL DEFAULT '';
--> statement-breakpoint
ALTER TABLE `blogs` ADD COLUMN `seo_description` text NOT NULL DEFAULT '';
--> statement-breakpoint
CREATE INDEX `blogs_translation_key_lang_idx` ON `blogs` (`translation_key`, `lang`);
