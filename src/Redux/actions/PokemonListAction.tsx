import { PokemonListActions } from 'Redux/slices/PokemonListSlice';
import { baseURL } from 'Config/AppConfig';

const updatePokemonList = (quantity:number) => (dispatch) => {
  dispatch(PokemonListActions.changeLoading(true));
  fetch(`${baseURL}pokemon?limit=${quantity}`)
    .then((response) => response.json())
    .then((response) => dispatch(PokemonListActions.setPokemonList(response.results)))
    .catch(() => dispatch(PokemonListActions.errorPokemonList()));
};

const something = '';

export {
  updatePokemonList,
  something,
};
