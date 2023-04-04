import axios from 'axios'
import {
  FETCH_RDPSDATA
} from './types'

export const fetch_rdps = () => async dispatch => {
  try {
    // const res = await axios.get('/api/rdps/');
    dispatch({
      type: FETCH_RDPSDATA,
      payload: res.data
    });
  } catch (err) {
    // dispatch({
    //   type: types.LOGIN_FAILURE,
    //   payload: err.response.data.msg
    // });
  }
}
