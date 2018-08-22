import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignIn from '../scenes/SignIn';

export const AppNavigator = createStackNavigator({
  Home: {
    screen: SignIn,
  },
});
export default function Navigator() {
  return <AppNavigator />;
}
