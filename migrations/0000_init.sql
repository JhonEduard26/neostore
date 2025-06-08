CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"category" text NOT NULL,
	"description" text NOT NULL,
	"images" text[],
	"rating" numeric(3, 2),
	"brand" text NOT NULL,
	"stock" integer,
	"num_reviews" integer DEFAULT 0,
	"is_featured" boolean DEFAULT false,
	"banner" text,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "products_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE UNIQUE INDEX "product_slug_idx" ON "products" USING btree ("slug");