import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
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

@connect(
  state => ({ navigation: state.navigation })
)
export default class Navigator extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { dispatch, navigation: state } = this.props;

    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            dispatch,
            state
          })
        }
      />
    );
  }
}
