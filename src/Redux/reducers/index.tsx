import { combineReducers } from '@reduxjs/toolkit';
import PokemonListSlice from 'Redux/slices/PokemonListSlice';
import PokemonDetailsSlice from 'Redux/slices/PokemonDetailsSlice';

const reducers = combineReducers({
  PokemonListSlice,
  PokemonDetailsSlice,
});

export default reducers;
