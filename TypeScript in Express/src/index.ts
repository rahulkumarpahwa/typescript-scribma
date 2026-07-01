
/*
CHALLENGE: Use the newly imported Request and Response types 
           to type the `req` and `res` parameters
*/
import express from "express";
import type { Express, Request, Response } from "express";
import { env as loadEnv } from "custom-env";
import { pets } from "./data/pets.ts";
const app: Express = express();
loadEnv();

app.get("/", (req: Request, res: Response) : void => {
    res.status(200).json({ pets })
})

const server = app.listen(process.env.PORT, (): void => {
    console.log(`Listening on port ${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}`)
})

server.setTimeout(50000);