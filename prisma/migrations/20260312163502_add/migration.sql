-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('BREAKFAST', 'LUNCH', 'DINNER', 'SNACK', 'DESSERT', 'DRINK', 'APPETIZER', 'SANDWICH');

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "tags" "Tag"[];
