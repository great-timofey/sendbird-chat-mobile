import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { navigatoinMiddleware } from '../../utils/redux';


import reducers from '../reducers';

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware, navigatoinMiddleware];

  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middleware), global.reduxNativeDevTools ? global.reduxNativeDevTools({ name: 'MyApp' }) : nope => nope)
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore({});
