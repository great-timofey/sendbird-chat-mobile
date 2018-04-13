import { combineReducers } from 'redux';
import searchResults from './searchResults';
import navigation from './navigation';
import counter from './counter';
import data from './data';
import modal from './modal';


const rootReducer = combineReducers({
  searchResults,
  navigation,
  counter,
  modal,
  data,
});

export default rootReducer;
