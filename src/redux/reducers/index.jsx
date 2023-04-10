import { combineReducers } from 'redux';
import app from "./app";
import auth from './auth';
import rdps from './rdps';
import alert from './alert'

const rootReducer = combineReducers({
  app,
  auth,
  rdps,
  alert
});

export default rootReducer;
