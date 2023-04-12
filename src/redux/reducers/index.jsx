import { combineReducers } from 'redux';
import app from "./app";
import auth from './auth';
import rdps from './rdps';
import alert from './alert'
import user from './user';

const rootReducer = combineReducers({
  app,
  auth,
  rdps,
  alert,
  user
});

export default rootReducer;
