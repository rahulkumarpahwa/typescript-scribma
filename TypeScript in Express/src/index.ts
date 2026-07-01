/* 
CHALLENGE: Create a 404 catch-all after the `/` route
           Don’t forget to type annotate everything!
           (there are 3 places)
           
HINT: In `hint.md`
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

app.use((req: Request, res: Response): void => {
    res.status(404).json({ message: "Endpoint not found" })
})

const server = app.listen(process.env.PORT, (): void => {
    console.log(`Listening on port ${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}`)
})

server.setTimeout(50000);