/*
  Warnings:

  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `level` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `xp` INTEGER NOT NULL DEFAULT 0,
    MODIFY `role` ENUM('ADMIN', 'TEACHER', 'PRINCIPAL', 'ASSISTANTPRINCIPAL', 'STUDENT') NOT NULL DEFAULT 'STUDENT';

-- CreateTable
CREATE TABLE `highlights` (
    `id` VARCHAR(191) NOT NULL,
    `type` ENUM('MEDAL') NOT NULL,
    `userId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `highlights` ADD CONSTRAINT `highlights_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
