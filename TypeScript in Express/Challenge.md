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

5. CHALLENGE: Respond with some data!
   1. Create an object called `pet` before the `/` route that includes:
   - name (string)
   - species (string)
   - adopted (boolean)
   - age (number)
   2. Type your new pet object (inline or using a custom type)
   3. Update your existing GET `/` route to return that pet object
   4. Compile the TypeScript and run the resulting JavaScript to see it in action

6. CHALLENGE:
   1. "Create a start script that",
   2. "Runs the TypeScript Compiler, then",
   3. "Runs the compiled app in 'dist/index.js'",
      HINT: "You can chain commands with &&"

7. CHALLENGE: Respond with more data!
   1. Rename `pet` to `pets`
   2. Change `pets` to be an array with 2+ pets
   3. Adjust the type of `pets`
   4. Change out the res.json to send back the new variable

8. CHALLENGE: Fix the Pet type!
   1. Look at the pet objects and note their properties
   2. Update the `Pet` type so it matches
   3. Decide which fields should be optional (compare #1 and #2)

   Hint: some fields might need unions, arrays, literals, `null`, or even a `Date`.
   Look them up if you’re not sure!

9. CHALLENGE: Use the newly imported Request and Response types
   to type the `req` and `res` parameters

10. CHALLENGE: Figure out why `cors` is cors-ing an error...
    and fix it!

11. CHALLENGE: Create a 404 catch-all after the `/` route
    Don’t forget to type annotate everything!
    (there are 3 places)
