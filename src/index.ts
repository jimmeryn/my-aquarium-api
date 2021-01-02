import { PrismaClient } from '@prisma/client'
import * as bodyParser from 'body-parser'
import express from 'express'

import { aquariumRoutes } from './aquarium/aquarium';
import { paramRoutes } from './param/param';

export const prisma = new PrismaClient()
export const app = express()

app.use(bodyParser.json())

app.get(`/`, (_req, res) => {
    res.send("ok");
});

aquariumRoutes(app, prisma);
paramRoutes(app, prisma);

// TODO: Get port from .env
const server = app.listen(3000, () =>
  console.log(
    "http://localhost:3000\n",
  ),
);