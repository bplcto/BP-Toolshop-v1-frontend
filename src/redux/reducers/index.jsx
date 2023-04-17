import { combineReducers } from 'redux';
import app from "./app";
import auth from './auth';
import alert from './alert'
import user from './user';
import rdps from './rdps';
import vps from './vps';
import cpanel from './cpanel';

const rootReducer = combineReducers({
  app,
  auth,
  alert,
  user,
  rdps,
  vps,
  cpanel
});

export default rootReducer;
