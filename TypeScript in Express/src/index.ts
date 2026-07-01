/*
CHALLENGE: Complete the `/:id` route!
1. Type req, res, and callback's return value
2. Pull the `id` from the path params
3. Find the pet that matches said `id`
4. Send back said pet with `res.json()`
       
Don't worry about non-existent IDs or other TypeScript yet
*/
import express from "express";
import cors, { type CorsOptions } from "cors";
import type { Express, Request, Response } from "express";
import type { Pet } from "./types/pet.ts";
import { env as loadEnv } from "custom-env";
import { pets } from "./data/pets.ts";
const app: Express = express();
loadEnv();

const corsOptions: CorsOptions = {
    origin: "http://localhost",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response<Pet[]>): void => {
    res.status(200).json(pets)
})

app.get('/:id', (req: Request<{ id: string }>, res: Response<{ id: string, pet: Pet } | { message: string }>): void => {
    const id: string = req.params.id;
    const pet: Pet | undefined = pets.find(p => p.id.toString() === id);
    if (pet) {
        res.status(200).json({ id: id, pet: pet });
        return;
    }
    res.status(404).json({ message: "pet not found!" })
})


app.use((req: Request, res: Response<{ message: string }>): void => {
    res.status(404).json({ message: "Endpoint not found" })
})

const server = app.listen(process.env.PORT, (): void => {
    console.log(`Listening on port ${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}`)
})

server.setTimeout(50000);