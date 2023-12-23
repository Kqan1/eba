-- AlterTable
ALTER TABLE `user` MODIFY `pp` VARCHAR(191) NOT NULL DEFAULT '/pp/default.svg',
    MODIFY `banner` VARCHAR(191) NOT NULL DEFAULT '/banner/default.jpg';
