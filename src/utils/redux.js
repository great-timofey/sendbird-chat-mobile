import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

const navigatoinMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation,
);
const addListener = createReduxBoundAddListener('root');

export {
  navigatoinMiddleware,
  addListener,
};
