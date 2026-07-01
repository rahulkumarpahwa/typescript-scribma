/*
CHALLENGE: Figure out why `cors` is cors-ing an error...
           and fix it!
*/
import express from "express";
import cors, { type CorsOptions } from "cors";
import type { Express, Request, Response } from "express";
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

app.get("/", (req: Request, res: Response): void => {
    res.status(200).json({ pets })
})

const server = app.listen(process.env.PORT, (): void => {
    console.log(`Listening on port ${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}`)
})

server.setTimeout(50000);