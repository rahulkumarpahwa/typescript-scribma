/*
CHALLENGE: Build a basic Express app using vanilla JavaScript
1. Import Express and create an app instance.
2. Listen on port 8000.
3. When the server starts, log: "Listening on port 8000"
   
You won't need to create any endpoints or routes yet
*/

/*
MINI CHALLENGE: Add some types  
1. Use the `Express` type where it makes sense
2. Add a `void` return type where it makes sense
*/

import express from "express";
import type { Express } from "express";

const app: Express = express();

const server = app.listen(process.env.PORT, (): void => {
    console.log(`Listening on port ${process.env.PORT}`)
})

server.setTimeout(50000);