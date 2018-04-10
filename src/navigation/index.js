import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { addListener } from '../utils/redux';
import Home from '../scenes/Home';
import Counter from '../scenes/Counter';

export const AppNavigator = StackNavigator({
  Home: {
    screen: Home,
  },
  Counter: {
    path: 'counter',
    screen: Counter,
  },
});

type Props = {
  navigation: Object,
  dispatch: Function
}
function Navigator(props: Props) {
  const { dispatch, navigation: state } = props;
  return (
    <AppNavigator
      navigation={
        addNavigationHelpers({
          dispatch,
          state,
          addListener
        })
      }
    />
  );
}
export default connect(state => ({ navigation: state.navigation }))(Navigator);
