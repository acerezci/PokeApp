import React from 'react';
import {
  Image, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import colors from 'Core/Theme/colors';

interface PropTypes {
  pokemonImage: string;
  pokemonName: string;
  onPress: () => void;
}

const PokemonListItem = (props: PropTypes) => (
  <TouchableOpacity
    style={styles.container}
    onPress={props.onPress}
    activeOpacity={0.8}
  >
    <Image
      resizeMode="contain"
      style={styles.image}
      source={{ uri: props.pokemonImage }}
    />
    <Text style={styles.name}>{props.pokemonName}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderColor: colors.gray100,
    borderBottomWidth: 1,
  },
  image: {
    width: 96,
    height: 96,
  },
  name: {
    fontSize: 24,
    marginLeft: 8,
    textTransform: 'capitalize',
  },
});

export default PokemonListItem;
