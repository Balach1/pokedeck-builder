require('dotenv-safe').config();

import express from 'express';
import bodyParser from 'body-parser';

import PokemonDecksController from './controllers/PokemonDecksController';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = parseInt(process.env.PORT as string) || 3000;

// Add the `body-parser` middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount the WelcomeController at the /welcome route
app.use('/decks', PokemonDecksController);

// Serve the application at the given port
app.listen(port, () => {
  // Success callback
  console.log(`Listening at http://localhost:${port}/`);
});