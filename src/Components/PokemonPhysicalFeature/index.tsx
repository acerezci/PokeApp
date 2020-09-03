import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from 'Core/Theme/colors';

interface PropTypes {
    title:string;
    weight:number;
    height:number;
    baseExperience:number;
}

const PokemonPhysicalFeature = (props:PropTypes) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
    <View style={styles.featuresContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>
          Weight
          {' '}
          {props.weight}
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>
          Height
          {' '}
          {props.height}
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>
          Base Experience
          {' '}
          {props.baseExperience}
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.gray200,
    backgroundColor: colors.gray50,
    marginRight: 6,
    marginTop: 6,
  },
  itemText: {
    fontSize: 16,
    lineHeight: 19,
    padding: 4,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});

export default PokemonPhysicalFeature;
