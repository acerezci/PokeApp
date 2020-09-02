import { createSlice } from '@reduxjs/toolkit';
import SliceTypes from 'Redux/helpers/SliceTypes';

const INITIAL_STATE = {
  pokemonListLoading: false,
  pokemonList: [],
  pokemonListError: false,
};

const PokemonListSlice = createSlice({
  name: SliceTypes.POKEMON_LIST,
  initialState: INITIAL_STATE,
  reducers: {
    changeLoading(state, action) {
      state.pokemonListLoading = action.payload;
    },
    setPokemonList(state, action) {
      state.pokemonListLoading = false;
      state.pokemonList = action.payload;
      state.pokemonListError = false;
    },
    errorPokemonList(state) {
      state.pokemonListLoading = false;
      state.pokemonList = [];
      state.pokemonListError = true;
    },
  },
});

const {
  changeLoading,
  setPokemonList,
  errorPokemonList,
} = PokemonListSlice.actions;

export const PokemonListActions = {
  changeLoading,
  setPokemonList,
  errorPokemonList,
};

export default PokemonListSlice.reducer;
