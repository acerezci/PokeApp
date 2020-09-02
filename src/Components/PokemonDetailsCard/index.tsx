import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from 'Core/Theme/colors';

interface PropTypes {
  types: [{type: {name: string}}];
  abilities: [{ability: {name: string}}];
}

const PokemonDetailsCard = (props: PropTypes) => (
  <>
    <View style={styles.itemContainer}>
      <Text style={styles.title}>Types</Text>
      <View style={styles.skillsContainer}>
        {props.types.map((item, index) => (
          <View key={index.toString()} style={styles.skillItemContainer}>
            <Text style={styles.text}>{item.type.name}</Text>
          </View>
        ))}
      </View>
    </View>
    <View style={styles.itemContainer}>
      <Text style={styles.title}>Abilities</Text>
      <View style={styles.skillsContainer}>
        {props.abilities.map((ability, index) => (
          <View style={styles.skillItemContainer}>
            <Text style={styles.text} key={index.toString()}>
              {ability.ability.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  itemContainer: {
    marginBottom: 16,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItemContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.gray200,
    backgroundColor: colors.gray50,
    marginRight: 6,
    marginTop: 6,
  },
  text: {
    fontSize: 16,
    padding: 4,
    textTransform: 'capitalize',
  },
});

export default PokemonDetailsCard;
