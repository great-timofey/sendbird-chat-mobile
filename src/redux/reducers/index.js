import { combineReducers } from 'redux';
import nav from './navigation';
import counter from './counter';

const rootReducer = combineReducers({
  nav,
  counter
});

export default rootReducer;
