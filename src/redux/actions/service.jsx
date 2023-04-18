import axios from "axios";
import { SERVICE } from "./types";

export const service = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/service/");
    dispatch({
      type: SERVICE,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
