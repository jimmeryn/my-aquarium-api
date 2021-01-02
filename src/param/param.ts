import { PrismaClient } from '@prisma/client';
import express from 'express';

export function paramRoutes(app: express.Application, prisma: PrismaClient) {
    app.get(`/aquarium/:id/params`, async (req, res) => {
        const { id } = req.params;
        const params = await prisma.param.findMany({
            where: {
                aquariumId: Number(id),
            }
        })
        res.json(params);
    });
    
    app.get(`/aquarium/:id/filterParams`, async (req, res) => {
        const { id } = req.params;
        const { name }: { name?: string } = req.query
        console.log(name)
        const params = await prisma.param.findMany({
            where: {
                aquariumId: Number(id),
                name: name
            }
        })
        res.json(params);
    });
    
    app.post(`/aquarium/:id`, async (req, res) => {
        const { value, name, date } = req.body;
        const aquariumId = req.params.id;
        const result = await prisma.param.create({
            data: {
                name,
                value,
                date,
                aquarium: { connect: { id: parseInt(aquariumId) } }
            }
        })
        res.json(result);
    });
}
