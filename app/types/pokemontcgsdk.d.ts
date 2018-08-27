declare module 'pokemontcgsdk' {

  export type PokemonType = 'Normal'
    | 'Fire'
    | 'Fighting'
    | 'Water'
    | 'Flying'
    | 'Grass'
    | 'Poison'
    | 'Electric'
    | 'Ground'
    | 'Psychic'
    | 'Rock'
    | 'Ice'
    | 'Bug'
    | 'Dragon'
    | 'Ghost'
    | 'Dark'
    | 'Steel'
    | 'Fairy'
    | '???';

  export interface Trait {
    type: PokemonType;
    value: string;
  }

  export interface PokemonCard {
    id: string;
    name: string;
    nationalPokedexNumber: number;
    imageUrl: string;
    imageUrlHiRes: string;
    subtype: string;
    supertype: string;
    ability: {
      name: string;
      text: string;
      type: string;
    };
    ancientTrait: string;
    hp: string;
    number: string;
    artist: string;
    rarity: string;
    series: string;
    set: string;
    setCode: string;
    retreatCost: string[];
    text?: string;
    types: PokemonType[];
    attacks: {
      cost: PokemonType[];
      name: string;
      text: string;
      damage: string;
    }[];
    weaknesses: Trait[];
    resistances: Trait[];
  }

  export interface ApiResult {
    card: PokemonCard;
  }
}