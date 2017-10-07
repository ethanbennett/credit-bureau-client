import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import bureau from './bureau';

const root = combineReducers({
  bureau,
  router: routerReducer,
});

export default root;
