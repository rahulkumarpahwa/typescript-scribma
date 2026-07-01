/*
CHALLENGE: Respond with more data!

1.  Rename `pet` to `pets`
2. Change `pets` to be an array with 2+ pets
3. Adjust the type of `pets`
4. Change out the res.json to send back the new variable
*/

import express from "express";
import type { Express, Request, Response } from "express";
import { env as loadEnv } from "custom-env";
import type { Pet } from "./types/pet.ts";
const app: Express = express();

loadEnv();

const pets: Pet[] = [{
    name: "Scooby",
    species: "Dog",
    adopted: true,
    age: 2
},{
    name: "Mau",
    species: "Cat",
    adopted: false,
    age: 2
}]

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ pets })
})








const server = app.listen(process.env.PORT, (): void => {
    console.log(`Listening on port ${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}`)
})

server.setTimeout(50000);