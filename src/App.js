import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import store from './redux/store';
import Navigator from './navigation';
import Spinner from './components/Spinner';

export default function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <StatusBar barStyle="light-content" />
        <Spinner />
        <Navigator />
      </Fragment>
    </Provider>
  );
}
