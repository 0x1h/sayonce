-- CreateTable
CREATE TABLE "PostReaction" (
    "id" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "postId" INTEGER,

    CONSTRAINT "PostReaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PostReactionToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostReactionToUser_AB_unique" ON "_PostReactionToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PostReactionToUser_B_index" ON "_PostReactionToUser"("B");

-- AddForeignKey
ALTER TABLE "PostReaction" ADD CONSTRAINT "PostReaction_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostReactionToUser" ADD CONSTRAINT "_PostReactionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "PostReaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostReactionToUser" ADD CONSTRAINT "_PostReactionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
