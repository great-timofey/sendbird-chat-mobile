import { combineReducers } from 'redux';
import user from './user/reducers';
import chat from './chat/reducers';
import common from './common/reducers';
import search from './search/reducers';

export default combineReducers({
  common,
  user,
  chat,
  search,
});
