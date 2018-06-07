import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { initializeListeners } from 'react-navigation-redux-helpers';
import { navigationPropConstructor } from '../utils/redux';
import Home from '../scenes/Home';
import Counter from '../scenes/Counter';

export const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Counter: {
    path: 'counter',
    screen: Counter,
  },
});

type Props = {
  nav: Object,
  dispatch: Function
}
class Navigator extends React.Component<Props> {
  componentDidMount() {
    initializeListeners('root', this.props.nav);
  }
  render() {
    const { dispatch, nav } = this.props;
    const navigation = navigationPropConstructor(dispatch, nav);
    return (
      <AppNavigator
        navigation={navigation}
      />
    );
  }
}
export default connect(state => ({ nav: state.nav }))(Navigator);
