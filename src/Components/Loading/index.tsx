import React from 'react';
import { ActivityIndicator } from 'react-native';

interface IProps {
  size: 'large'| 'small';
  color?: string;
}

const Loading = (props: IProps) => (
  <ActivityIndicator size={props.size} color={props.color} />
);

export default Loading;
