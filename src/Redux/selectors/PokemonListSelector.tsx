import { createSelector } from '@reduxjs/toolkit';
import STATE_NAMES from 'Redux/helpers/SliceTypes';

const pokemonListName = STATE_NAMES.POKEMON_LIST;

export const pokemonListLoadingSelector = createSelector(
  (state) => state[pokemonListName].pokemonListLoading, (pokemonListLoading) => pokemonListLoading,
);

export const pokemonListSelector = createSelector(
  (state) => state[pokemonListName].pokemonList, (pokemonList) => pokemonList,
);

export const pokemonListErrorSelector = createSelector(
  (state) => state[pokemonListName].pokemonListError, (pokemonListError) => pokemonListError,
);
