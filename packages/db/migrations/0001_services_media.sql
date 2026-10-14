ALTER TABLE `services` ADD `image_url` text DEFAULT '' NOT NULL;
--> statement-breakpoint
ALTER TABLE `services` ADD `variant` text DEFAULT 'gray' NOT NULL;
