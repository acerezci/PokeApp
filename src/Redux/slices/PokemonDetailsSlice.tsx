import { createSlice } from '@reduxjs/toolkit';
import SliceTypes from 'Redux/helpers/SliceTypes';

const INITIAL_STATE = {
  pokemonDetailsLoading: false,
  pokemonDetails: {},
  pokemonDetailsError: false,
};

const PokemonDetailsSlice = createSlice({
  name: SliceTypes.POKEMON_DETAILS,
  initialState: INITIAL_STATE,
  reducers: {
    changeLoading(state, action) {
      state.pokemonDetailsLoading = action.payload;
    },
    setPokemonDetails(state, action) {
      state.pokemonDetailsLoading = false;
      state.pokemonDetails = action.payload;
      state.pokemonDetailsError = false;
    },
    errorPokemonDetails(state) {
      state.pokemonDetailsLoading = false;
      state.pokemonDetails = {};
      state.pokemonDetailsError = true;
    },
  },
});

const {
  changeLoading,
  setPokemonDetails,
  errorPokemonDetails,
} = PokemonDetailsSlice.actions;

export const PokemonDetailsActions = {
  changeLoading,
  setPokemonDetails,
  errorPokemonDetails,
};

export default PokemonDetailsSlice.reducer;
