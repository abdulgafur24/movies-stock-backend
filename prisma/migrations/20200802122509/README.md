# Migration `20200802122509`

This migration has been generated by Abdulgafur at 8/2/2020, 12:25:09 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Movie" (
"id" SERIAL,
"name" text  NOT NULL ,
"collectionId" integer  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Collection" (
"id" SERIAL,
"name" text  NOT NULL ,
PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "Collection.name" ON "public"."Collection"("name")

ALTER TABLE "public"."Movie" ADD FOREIGN KEY ("collectionId")REFERENCES "public"."Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200802122509
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,21 @@
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Movie {
+  id              Int @id @default(autoincrement())
+  name            String 
+  collection      Collection  @relation(fields: [collectionId], references: [id])
+  collectionId    Int
+}
+
+model Collection {
+  id              Int @id @default(autoincrement())
+  name            String @unique
+  movies          Movie[]
+}
```


