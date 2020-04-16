--CREATE TABLE "category" (
--    "id" SERIAL PRIMARY KEY,
--    "name" VARCHAR (100) NOT NULL
--);
--
---- Default categories. You may change them :)
--INSERT INTO "category" ("name")
--VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

CREATE TABLE "favorite"(
	"id" SERIAL PRIMARY KEY,
	"URL" VARCHAR (255) NOT NULL,
	"category" VARCHAR(100)
	);
INSERT INTO favorite ("URL", "category") 
VALUES ('https://tumblr.4gifs.com/post/84766399414/cat-shaq-wiggles' , 'funny');
	