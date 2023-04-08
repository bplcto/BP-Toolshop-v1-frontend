import { combineReducers } from 'redux';
import auth from './auth';
import rdps from './rdps';
import alert from './alert'

const rootReducer = combineReducers({
  auth,
  rdps,
  alert
});

export default rootReducer;