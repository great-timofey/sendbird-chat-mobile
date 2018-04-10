import { combineReducers } from 'redux';
import navigation from './navigation';
import counter from './counter';

const rootReducer = combineReducers({
  navigation,
  counter
});

export default rootReducer;
