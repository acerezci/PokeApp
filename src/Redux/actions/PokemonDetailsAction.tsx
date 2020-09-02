import { PokemonDetailsActions } from 'Redux/slices/PokemonDetailsSlice';

const setPokemonDetails = (pokemonDetailURL:string) => (dispatch) => {
  dispatch(PokemonDetailsActions.changeLoading(true));
  fetch(pokemonDetailURL)
    .then((response) => response.json())
    .then((response) => dispatch(PokemonDetailsActions.setPokemonDetails(response)))
    .catch(() => dispatch(PokemonDetailsActions.errorPokemonDetails()));
};

const something = '';

export {
  setPokemonDetails,
  something,
};
