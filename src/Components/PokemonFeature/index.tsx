import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from 'Core/Theme/colors';

type featureProp = 'type' | 'ability' | 'stat'

interface PropTypes {
    items:any[];
    title:string;
    feature:featureProp;
}

const PokemonFeature = (props:PropTypes) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
    <View style={styles.featuresContainer}>
      {props.items && props.items.map((item, index) => (
        <View key={index.toString()} style={styles.itemContainer}>
          <Text style={styles.itemText}>
            {item[props.feature].name}
            {' '}
            {props.feature === 'stat' && item.base_stat}
          </Text>
        </View>
      ))}
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

export default PokemonFeature;
