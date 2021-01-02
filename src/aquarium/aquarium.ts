import { PrismaClient } from '@prisma/client';
import express from 'express';

export function aquariumRoutes(app: express.Application, prisma: PrismaClient) {
    app.get(`/aquarium`, async (_req, res) => {
        const aquariums = await prisma.aquarium.findMany();
        res.json(aquariums);
    });

    app.get(`/aquarium/:id`, async (req, res) => {
        const { id } = req.params;
        const aquarium = await prisma.aquarium.findUnique({
            where: { id: Number(id) },
            include: { params: true }
        })
        res.json(aquarium);
    });

    app.post(`/aquarium`, async (req, res) => {
        const result = await prisma.aquarium.create({
            data: {
                ...req.body
            }
        })
        res.json(result);
    });

    app.delete(`/aquarium/:id`, async (req, res) => {
        const { id } = req.params;
        await prisma.param.deleteMany({
            where: { aquariumId: Number(id) }
        })
        const aquarium = await prisma.aquarium.delete({
            where: { id: Number(id) }
        })
        res.json(aquarium);
    });
}
