import {
  FETCH_TICKET,
  GET_TICKET,
  ADD_TICKET,
  REPLY_TICKET,
  FETCH_TICKET_BY_USER,
  TICKET_LOADING
} from "../actions/types";

const initialState = {
  totalTickets: {},
  cnt: 0,
  tickets: [],
  selected_ticket: {},
  loading: false
};

const leadReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TICKET:
      return {
        ...state,
        cnt: payload.cnt,
        totalTickets: payload,
      };
    case GET_TICKET:
      return {
        ...state,
        selected_ticket: payload,
      };
    case FETCH_TICKET_BY_USER:
      return {
        ...state,
        cnt: payload.cnt,
        tickets: payload.data,
      };
    case ADD_TICKET:
      return {
        ...state,
        tickets: [payload, ...state.tickets],
        loading: false
      };
    case REPLY_TICKET:
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket._id === payload.id ? payload.ticket : ticket
        ),
      };
    case TICKET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
};

export default leadReducer;
