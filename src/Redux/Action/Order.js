import axiosInstance from "../../utility/axios";
import { orderConstance } from "../constnace";

export const _order = (foodValues) => {
  return async (dispatch) => {
    await axiosInstance.post("/order", foodValues);
  };
};
export const _get_order = () => {
  return async (dispatch) => {
    dispatch({
      type: orderConstance.GET_ORDER_REQUEST,
    });
    await axiosInstance.get("/order").then((res) => {
      dispatch({
        type: orderConstance.GET_ORDER_SUCCESS,
        payload: {
          orders: res.data.orderArray,
        },
      });
    });
  };
};
