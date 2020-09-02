import { createSelector } from '@reduxjs/toolkit';
import STATE_NAMES from 'Redux/helpers/SliceTypes';

const pokemonDetailsName = STATE_NAMES.POKEMON_DETAILS;

export const pokemonDetailsLoadingSelector = createSelector(
  (state) => state[pokemonDetailsName].pokemonDetailsLoading,
  (pokemonDetailsLoading) => pokemonDetailsLoading,
);

export const pokemonDetailsSelector = createSelector(
  (state) => state[pokemonDetailsName].pokemonDetails,
  (pokemonDetails) => pokemonDetails,
);

export const pokemonDetailsErrorSelector = createSelector(
  (state) => state[pokemonDetailsName].pokemonDetailsError,
  (pokemonDetailsError) => pokemonDetailsError,
);
