import React from 'react';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import Auth from '../scenes/Auth';
import Chat from '../scenes/Chat';
import { HomeScene, ChatScene } from './scenes';

export const AppNavigator = createStackNavigator({
  [HomeScene]: {
    screen: Auth,
  },
  [ChatScene]: {
    screen: Chat,
  },
});

let navigatorRef;
export const navigate = (routeName, params) => {
  navigatorRef.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};

export default () => (
  <AppNavigator
    ref={(ref) => {
      navigatorRef = ref;
    }}
  />
);
