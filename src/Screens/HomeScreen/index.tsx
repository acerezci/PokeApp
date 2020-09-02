import React, { useEffect } from 'react';
import {
  FlatList, StyleSheet, SafeAreaView, Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  pokemonListSelector,
  pokemonListErrorSelector,
  pokemonListLoadingSelector,
} from 'Redux/selectors/PokemonListSelector';
import { updatePokemonList } from 'Redux/actions/PokemonListAction';
import PokemonListItem from 'Components/PokemonListItem';
import colors from 'Core/Theme/colors';
import Loading from 'Components/Loading';
import { useNavigation } from '@react-navigation/native';
import { pokemonImageBaseURL } from 'Config/AppConfig';

const HomeScreen = () => {
  const pokemonQuantity = 50;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const pokemonList = useSelector(pokemonListSelector);
  const pokemonListError = useSelector(pokemonListErrorSelector);
  const pokemonListLoading = useSelector(pokemonListLoadingSelector);

  useEffect(() => {
    dispatch(updatePokemonList(pokemonQuantity));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {pokemonListLoading && <Loading size="large" />}
      {pokemonListError && <Text style={styles.errorText}>Error</Text>}
      {(pokemonList && pokemonList.length > 0) && (
      <FlatList
        contentContainerStyle={styles.flatListContentContainer}
        showsVerticalScrollIndicator={false}
        data={pokemonList}
        renderItem={({ item }) => (
          <PokemonListItem
            pokemonName={item.name}
            pokemonImage={`${pokemonImageBaseURL}${item.name.toLowerCase()}.jpg`}
            onPress={() => navigation.navigate('PokemonDetailsScreen', {
              pokemonUrl: item.url,
              name: item.name.toUpperCase(),
            })}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      )}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  errorText: {
    fontSize: 26,
    textAlign: 'center',
    marginTop: 16,
  },
  flatListContentContainer: {
    paddingTop: 5,
  },
});

export default HomeScreen;
