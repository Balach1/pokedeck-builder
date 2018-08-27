import { PokemonType } from 'pokemontcgsdk';

interface CreateDeckOptions {
  name: string;
  cardIds: string[];
  types: PokemonType[];
}

interface UpdateDeckOptions {
  name?: string;
  cardIds?: string[];
  types?: PokemonType[];
}

interface DeleteDeckOptions {
  name: string;
}