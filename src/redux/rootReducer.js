import { combineReducers } from 'redux';
import user from './user/reducers';
import common from './common/reducers';

export default combineReducers({
  common,
  user,
});
