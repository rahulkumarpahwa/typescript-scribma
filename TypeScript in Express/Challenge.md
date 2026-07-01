1. CHALLENGE: Set up an Express+TypeScript environment
    1. Initialise Node project with `npm init -y`
    2. Install `express` as a dependency
    3. Install `typescript` and `@types/express` as dev dependencies
    4. Create and set up tsconfig.json
        a. Install and extend `@tsconfig/node20`
        b. Add compiler options: `rootDir` and `outDir`

2. CHALLENGE: Build a basic Express app using vanilla JavaScript
    1. Import Express and create an app instance.
    2. Listen on port 8000.
    3. When the server starts, log: "Listening on port 8000"
   
    You won't need to create any endpoints or routes yet

3. MINI CHALLENGE: Add some types  
    1. Use the `Express` type where it makes sense
    2. Add a `void` return type where it makes sense

4. CHALLENGE: Send back a response
    1. Add a GET route for `/` that responds with an empty JSON object.
    2. Compile the app with `npx tsc`
    3. Run the compiled JavaScript with `node dist/index.js`
    (Ignore any TypeScript warning for now)

5. 