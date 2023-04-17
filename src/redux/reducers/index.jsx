import { combineReducers } from 'redux';
import app from "./app";
import auth from './auth';
import alert from './alert'
import user from './user';
import rdps from './rdps';
import vps from './vps';
import cpanel from './cpanel';
import shell from './shell';
import smtp from './smtp';

const rootReducer = combineReducers({
  app,
  auth,
  alert,
  user,
  rdps,
  vps,
  cpanel,
  shell,
  smtp
});

export default rootReducer;
