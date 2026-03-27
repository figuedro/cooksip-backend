-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'USER';
