import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignIn from '../scenes/SignIn';
import SignUp from '../scenes/SignUp';

export const AppNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
});
export default function Navigator() {
  return <AppNavigator />;
}
