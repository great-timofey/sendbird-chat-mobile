import React from 'react';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import Auth from '../scenes/Auth';
import Chat from '../scenes/Chat';
import Chats from '../scenes/Chats';
import { HomeScene, ChatsScene, ChatScene } from './scenes';

export const AppNavigator = createStackNavigator({
  [HomeScene]: {
    screen: Auth,
  },
  [ChatsScene]: {
    screen: Chats,
    navigationOptions: {
      gesturesEnabled: false,
      headerLeft: null,
    },
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
