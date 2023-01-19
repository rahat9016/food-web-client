import axiosInstance from "../../utility/axios";
import { offersConstance } from "../constnace";

export const _offers = (form) => {
  return async (dispatch) => {
    dispatch({
      type: offersConstance.CREATE_OFFERS_REQUEST,
    });
    await axiosInstance
      .post("/offers", form)
      .then((res) => {
        if (res.status === 201) {
          dispatch({
            type: offersConstance.CREATE_OFFERS_SUCCESS,
            payload: {
              message: res.data.message,
            },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: offersConstance.CREATE_OFFERS_FAILURE,
          payload: {
            error: error.response.data.message,
          },
        });
      });
  };
};
export const _get_offers = () => {
  return async (dispatch) => {
    dispatch({
      type: offersConstance.GET_OFFERS_REQUEST,
    });
    await axiosInstance.get("/offers").then((res) => {
      if (res.status === 200) {
        dispatch({
          type: offersConstance.GET_OFFERS_SUCCESS,
          payload: {
            offers: res.data.offers,
          },
        });
      }
    });
  };
};
