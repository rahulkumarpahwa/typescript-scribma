/*
CHALLENGE: Respond with some data!
1. Create an object called `pet` before the `/` route that includes:
   - name (string)
   - species (string)
   - adopted (boolean)
   - age (number)
2. Type your new pet object (inline or using a custom type)
3. Update your existing GET `/` route to return that pet object
4. Compile the TypeScript and run the resulting JavaScript to see it in action
*/

import express from "express";
import type { Express, Request, Response } from "express";
import { env as loadEnv } from "custom-env";
import type { Pet } from "./types/pet.ts";
const app: Express = express();

loadEnv();

const pet: Pet = {
    name: "Scooby",
    species: "Dog",
    adopted: true,
    age: 2
}

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ pet })
})








const server = app.listen(process.env.PORT, (): void => {
    console.log(`Listening on port ${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}`)
})

server.setTimeout(50000);