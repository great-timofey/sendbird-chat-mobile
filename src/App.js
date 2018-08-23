import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigator from './navigation';
import Spinner from './components/Spinner';

export default function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Spinner />
        <Navigator />
      </Fragment>
    </Provider>
  );
}
