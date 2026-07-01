/*
CHALLENGE: Send back a response
1. Add a GET route for `/` that responds with an empty JSON object.
2. Compile the app with `npx tsc`
3. Run the compiled JavaScript with `node dist/index.js`
   
(Ignore any TypeScript warning for now)
*/

import express from "express";
import type { Express, Request, Response } from "express";
import { env as loadEnv } from "custom-env";
const app: Express = express();

loadEnv();

app.get("/", (req : Request, res : Response) =>{
    res.status(200).json({})
})








const server = app.listen(process.env.PORT, (): void => {
    console.log(`Listening on port ${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}`)
})

server.setTimeout(50000);