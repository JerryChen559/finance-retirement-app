-- CREATE TABLE "Auth0" (
-- 	"user_id" serial NOT NULL,
-- 	"email" TEXT NOT NULL,
-- 	CONSTRAINT Auth0_pk PRIMARY KEY ("user_id")
-- ) WITH (
--   OIDS=FALSE
-- );



-- CREATE TABLE "nestEgg" (
-- 	"user_id" integer NOT NULL,
-- 	"timestamp" DATE NOT NULL,
-- 	"depositemergency" FLOAT NOT NULL,
-- 	"depositeretirement" FLOAT NOT NULL,
-- 	"flowercount" integer NOT NULL
-- ) WITH (
--   OIDS=FALSE
-- );



-- CREATE TABLE "purchaseCards" (
-- 	"user_id" integer NOT NULL,
-- 	"purchasecardid" serial NOT NULL,
-- 	"itemname" TEXT NOT NULL,
-- 	"price" FLOAT NOT NULL,
-- 	"importance" integer NOT NULL,
-- 	"note" VARCHAR(255) NOT NULL
-- ) WITH (
--   OIDS=FALSE
-- );



-- CREATE TABLE "appUsers" (
-- 	"user_id" integer NOT NULL,
-- 	"salary" FLOAT NOT NULL,
-- 	"federaltax" FLOAT NOT NULL,
-- 	"statetax" FLOAT NOT NULL,
-- 	"sideincome" FLOAT NOT NULL,
-- 	"rent" FLOAT NOT NULL,
-- 	"mortgage" FLOAT NOT NULL,
-- 	"car" FLOAT NOT NULL,
-- 	"gas" FLOAT NOT NULL,
-- 	"water" FLOAT NOT NULL,
-- 	"healthcare" FLOAT NOT NULL,
-- 	"school" FLOAT NOT NULL,
-- 	"food" FLOAT NOT NULL,
-- 	"restaurants" FLOAT NOT NULL,
-- 	"clothes" FLOAT NOT NULL,
-- 	"gym" FLOAT NOT NULL,
-- 	"entertainment" FLOAT NOT NULL,
-- 	"travel" FLOAT NOT NULL
-- ) WITH (
--   OIDS=FALSE
-- );




-- ALTER TABLE "nestEgg" ADD CONSTRAINT "nestEgg_fk0" FOREIGN KEY ("user_id") REFERENCES "Auth0"("user_id");

-- ALTER TABLE "purchaseCards" ADD CONSTRAINT "purchaseCards_fk0" FOREIGN KEY ("user_id") REFERENCES "Auth0"("user_id");

-- ALTER TABLE "appUsers" ADD CONSTRAINT "appUsers_fk0" FOREIGN KEY ("user_id") REFERENCES "Auth0"("user_id");

