-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `emailVerified` DATETIME(3) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `bio` TEXT NOT NULL DEFAULT 'null',
    `pp` VARCHAR(191) NOT NULL DEFAULT '/pp/default.svg',
    `banner` VARCHAR(191) NOT NULL DEFAULT '/banner/default.jpg',
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notifications` (
    `Id` VARCHAR(191) NOT NULL,
    `Text` VARCHAR(191) NOT NULL DEFAULT '',
    `New` BOOLEAN NOT NULL DEFAULT true,
    `Link` VARCHAR(191) NOT NULL DEFAULT '/',
    `Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Subject` VARCHAR(191) NOT NULL DEFAULT 'other',
    `userId` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Notifications` ADD CONSTRAINT `Notifications_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
