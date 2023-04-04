import axios from 'axios'
import * as types from './types.jsx'

export const login = (email, password) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/login', { email, password });
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.LOGIN_FAILURE,
      payload: err.response.data.msg
    });
  }
};
