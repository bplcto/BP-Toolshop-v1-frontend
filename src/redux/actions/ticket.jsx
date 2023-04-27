import api from '../../utils/api';
import { releaseLoading, setLoading } from "./app";
import { toast } from "react-toastify";
import {
  FETCH_TICKET,
  GET_TICKET,
  ADD_TICKET,
  REPLY_TICKET,
  FETCH_TICKET_BY_USER,
  TICKET_LOADING
} from "./types";

const autoClose = 3000;

export const get_ticket = (ticket) => (dispatch) => {
  dispatch({
    type: GET_TICKET,
    payload: ticket,
  });
};

export const fetch_tickets = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await api.get("/ticket/");
    await dispatch({
      type: FETCH_TICKET,
      payload: res.data,
    });
    dispatch(releaseLoading());
  } catch (err) {
    dispatch(releaseLoading());
    console.error(err);
    toast.error(err.response.data.msg, { autoClose });
  }
};

export const fetch_tickets_by_user = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await api.post("/ticket/user");
    await dispatch({
      type: FETCH_TICKET_BY_USER,
      payload: res.data,
    });
    dispatch(releaseLoading());
  } catch (err) {
    dispatch(releaseLoading());
    console.error(err);
    toast.error(err.response.data.msg, { autoClose });
  }
};

export const place_ticket = (data) => async (dispatch) => {
  try {
    dispatch(ticketLoading());
    const res = await api.post("/ticket/", data);
    dispatch({
      type: ADD_TICKET,
      payload: res.data,
    });
    toast.success("Submitted successfully!", { autoClose });
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};

export const reply_ticket = (id, replyTxt) => async (dispatch) => {
  try {
    // dispatch(setLoading());
    const res = await api.post(`/ticket/reply/${id}`, {replyTxt});

    dispatch({
      type: REPLY_TICKET,
      payload: { id, ticket:res.data },
    });

    // dispatch(releaseLoading());
    toast.success("Updated successfully!");
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};

const ticketLoading = () => dispatch => {
  dispatch({
    type: TICKET_LOADING
  })
}
