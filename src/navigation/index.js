import React from 'react';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import Auth from '../scenes/Auth';
import Chat from '../scenes/Chat';
import Chats from '../scenes/Chats';
import NewChat from '../scenes/NewChat';
import {
  HomeScene, ChatsScene, ChatScene, NewChatScene,
} from './scenes';

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
  [NewChatScene]: {
    screen: NewChat,
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
