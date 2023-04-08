import { ADD_RDPSDATA, EDIT_RDPSDATA, FETCH_RDPSDATA, LOADING, FETCH_RDPSSELECTOPTIONS } from '../actions/types';

const initialState = {
  rdpsOptionValue: {},
  rdps: [],
  rdp: {},
  loading: false
}

const rdpsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_RDPSSELECTOPTIONS:
      return {
        ...state,
        rdpsOptionValue: payload,
        loading: false
      };
    case FETCH_RDPSDATA:
      return {
        ...state,
        rdps: payload,
        loading: false
      };
    case ADD_RDPSDATA:
      return {
        ...state,
        rdps: [payload, ...state.rdps],
        loading: false
      };
    case EDIT_RDPSDATA:
      return {
        ...state,
        rdps: state.rdps.map((rdp) =>
          rdp._id === payload.id ? payload.rdp : rdp
        ),
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
};

export default rdpsReducer;
