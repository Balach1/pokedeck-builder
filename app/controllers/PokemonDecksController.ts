import { Router, Request, Response } from 'express';
import mongoose from 'mongoose';

import Deck from '../models/Deck';
import { CreateDeckOptions } from '../types/types';

mongoose.connect(process.env.MONGODB_URL as string, { useNewUrlParser: true });

const router: Router = Router();

router.post('/', (req: Request, res: Response) => {
  const body: CreateDeckOptions = req.body;

  // First get full card info for each `cardId`


  // Then save information back to DB
  const newDeck = new Deck(body);

  newDeck.save()
    .then(() => {
      res.send(newDeck);
    });
});

router.get('/:deckName', (req: Request, res: Response) => {

  Deck.findOne({ name: req.params.deckName })
    .then((deck) => {
      res.send(deck);
    })
    .catch((error) => {
      console.error(error);
    });
});

router.delete('/:deckName', (req: Request, res: Response) => {

  Deck.deleteOne({ name: req.params.deckName })
    .then(() => {
      res.send({});
    })
    .catch((error) => {
      console.error(error);
    });
});

// Export the express.Router() instance to be used by server.ts
const PokemonDecksController: Router = router;
export default PokemonDecksController;