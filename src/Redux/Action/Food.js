import axiosInstance from "../../utility/axios";
import { foodConstance } from "../constnace";

export const _food = (form) => {
  return async (dispatch) => {
    dispatch({
      type: foodConstance.CREATE_FOOD_REQUEST,
    });
    await axiosInstance
      .post("/food", form)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        dispatch({
          type: foodConstance.CREATE_FOOD_FAILURE,
          payload: {
            message: error.response.data.message,
          },
        });
        console.log(error);
      });
  };
};
export const _get_food = () => {
  return async (dispatch) => {
    dispatch({
      type: foodConstance.GET_FOOD_REQUEST,
    });
    await axiosInstance.get("/food").then((res) => {
      if (res.status === 200) {
        dispatch({
          type: foodConstance.GET_FOOD_SUCCESS,
          payload: {
            foods: res.data.food,
          },
        });
      }
    });
  };
};
export const _get_foods_by_sort = (sort, order) => {
  return async (dispatch) => {
    dispatch({
      type: foodConstance.GET_FOOD_BY_SORT_REQUEST,
    });
    await axiosInstance.post("/foods", { sort, order }).then((res) => {
      if (res.status === 200) {
        dispatch({
          type: foodConstance.GET_FOOD_BY_SORT_SUCCESS,
          payload: {
            foods: res.data.foods,
          },
        });
      }
    });
  };
};
