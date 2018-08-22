import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignIn from '../scenes/SignIn';
import Counter from '../scenes/Counter';

export const AppNavigator = createStackNavigator({
  Home: {
    screen: SignIn,
  },
  // Counter: {
  // path: 'counter',
  // screen: Counter,
  // },
});
export default function Navigator() {
  return <AppNavigator />;
}
