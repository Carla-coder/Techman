/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `comentario` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `comentario` DROP FOREIGN KEY `Comentario_usuarioId_fkey`;

-- AlterTable
ALTER TABLE `comentario` DROP COLUMN `usuarioId`;
