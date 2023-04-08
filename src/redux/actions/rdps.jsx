import axios from "axios";
import { toast } from "react-toastify";
import { ADD_RDPSDATA, EDIT_RDPSDATA, FETCH_RDPSDATA, FETCH_RDPSSELECTOPTIONS, LOADING } from "./types";

const autoClose = 3000;

export const fetch_select_options = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/rdps/");
    dispatch({
      type: FETCH_RDPSSELECTOPTIONS,
      payload: res.data
    })
  } catch (err) {
    console.error(err);
  }
  
}

export const fetch_rdps = (filter) => async (dispatch) => {
  console.log(filter);
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/rdps/", filter);
    dispatch({
      type: FETCH_RDPSDATA,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    // toast.error(err.response.data.msg, { autoClose });
  }
};

export const add_rdp = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/rdps/add", data);
    dispatch({
      type: ADD_RDPSDATA,
      payload: res.data,
    });
    toast.success("Added successfully!", { autoClose });
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};

export const edit_rdp = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post(`/api/rdps/edit/${id}`);

    dispatch({
      type: EDIT_RDPSDATA,
      payload: { id, rdp: res.data },
    });
    toast.success("Updated successfully!");
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};

const setLoading = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });
};
