-- CreateTable
CREATE TABLE "Aquarium" (
"id" SERIAL,
    "name" TEXT,
    "size" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Param" (
"id" SERIAL,
    "date" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "aquariumId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Param.aquariumId_unique" ON "Param"("aquariumId");

-- AddForeignKey
ALTER TABLE "Param" ADD FOREIGN KEY("aquariumId")REFERENCES "Aquarium"("id") ON DELETE CASCADE ON UPDATE CASCADE;
