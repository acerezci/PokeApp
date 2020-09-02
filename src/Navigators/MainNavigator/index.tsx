import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from 'Screens/HomeScreen';
import colors from 'Core/Theme/colors';
import PokemonDetailsScreen from 'Screens/PokemonDetailsScreen';

const options: object = {
  ...TransitionPresets.SlideFromRightIOS,
  headerTintColor: colors.white,
  headerStyle: {
    backgroundColor: colors.red100,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

type RootStackParamList = {
  HomeScreen: undefined;
  PokemonDetailsScreen: {
    pokemonUrl: string;
    name: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        options={{ ...options, title: 'POKEMONS' }}
        component={HomeScreen}
        name="HomeScreen"
      />
      <Stack.Screen
        options={({ route }) => ({
          ...options,
          title: route.params.name,
          headerBackTitleVisible: false,
        })}
        component={PokemonDetailsScreen}
        name="PokemonDetailsScreen"
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
