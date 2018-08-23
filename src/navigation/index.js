import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Auth from '../scenes/Auth';

export const AppNavigator = createStackNavigator({
  Home: {
    screen: Auth,
  },
});
export default function Navigator() {
  return <AppNavigator />;
}
