import React, { useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  pokemonDetailsSelector,
  pokemonDetailsLoadingSelector,
  pokemonDetailsErrorSelector,
} from 'Redux/selectors/PokemonDetailsSelector';
import { setPokemonDetails } from 'Redux/actions/PokemonDetailsAction';
import Loading from 'Components/Loading';
import { pokemonImageBaseURL } from 'Config/AppConfig';
import colors from 'Core/Theme/colors';
import PokemonDetailsCard from 'Components/PokemonDetailsCard';

interface RouteParamsType {
  pokemonUrl: string;
}

const PokemonDetailsScreen = () => {
  const route = useRoute();
  const { pokemonUrl } = route.params as RouteParamsType;
  const dispacth = useDispatch();

  const pokemonDetails = useSelector(pokemonDetailsSelector);
  const pokemonDetailsLoading = useSelector(pokemonDetailsLoadingSelector);
  const pokemonDetailsError = useSelector(pokemonDetailsErrorSelector);

  const {
    name,
    abilities,
    types,
    height,
    weight,
    base_experience: baseExperience,
    stats,
  } = pokemonDetails;

  useEffect(() => {
    dispacth(setPokemonDetails(pokemonUrl));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {pokemonDetailsLoading && <Loading size="large" />}
      {pokemonDetailsError && <Text style={styles.errorText}>Error</Text>}
      {pokemonDetails && (
        <View style={styles.contentContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: `${pokemonImageBaseURL}${name.toLowerCase()}.jpg` }}
          />
          <Text style={styles.name}>{name}</Text>
          <PokemonDetailsCard
            abilities={abilities}
            types={types}
            height={height}
            weight={weight}
            baseExperience={baseExperience}
            stats={stats}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    padding: 16,
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 26,
    marginTop: 16,
  },
  image: {
    width: 164,
    height: 164,
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginVertical: 16,
  },
});

export default PokemonDetailsScreen;
