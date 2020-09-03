import React from 'react';
import PokemonFeatures from 'Components/PokemonFeature';
import PokemonPhysicalFeature from 'Components/PokemonPhysicalFeature';

interface PropTypes {
  types: any[];
  abilities: any[];
  stats: any[];
  weight: number;
  height: number;
  baseExperience: number;
}

const PokemonDetailsCard = (props: PropTypes) => (
  <>
    <PokemonFeatures items={props.types} title="Types" feature="type" />
    <PokemonFeatures
      items={props.abilities}
      title="Abilities"
      feature="ability"
    />
    <PokemonFeatures items={props.stats} title="Stats" feature="stat" />
    <PokemonPhysicalFeature
      title="Physical Properties"
      weight={props.weight}
      height={props.height}
      baseExperience={props.baseExperience}
    />
  </>
);

export default PokemonDetailsCard;
