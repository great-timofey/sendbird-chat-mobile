import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { middleware as navigatoinMiddleware } from '../../utils/redux';
import devTools from 'remote-redux-devtools';

import reducers from '../reducers';

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware, navigatoinMiddleware];

  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middleware), devTools({ name: 'MyApp' }))
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore({});
