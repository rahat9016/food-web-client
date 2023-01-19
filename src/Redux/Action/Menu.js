import axiosInstance from "../../utility/axios";
import { menuConstance } from "../constnace";

export const _menu = (value) => {
  return async (dispatch) => {
    dispatch({
      type: menuConstance.CREATE_MENU_REQUEST,
    });
    await axiosInstance
      .post("/menu", value)
      .then((res) => {
        if (res.status === 201) {
          dispatch({
            type: menuConstance.CREATE_MENU_SUCCESS,
            payload: {
              message: res.data.message,
            },
          });
        }
      })
      .catch((error) => {
        const _error = error.response;
        if (_error.status === 400) {
          dispatch({
            type: menuConstance.CREATE_MENU_FAILURE,
            payload: {
              message: _error.data.message,
            },
          });
        }
      });
  };
};
export const _get_menu = () => {
  return async (dispatch) => {
    dispatch({
      type: menuConstance.GET_MENU_REQUEST,
    });
    await axiosInstance.get("/menu").then((res) => {
      if (res.status === 200) {
        dispatch({
          type: menuConstance.GET_MENU_SUCCESS,
          payload: {
            menu: res.data.menu,
          },
        });
      }
    });
  };
};

export const _delete_menu = (id) => {
  return async (dispatch) => {
    dispatch({
      type: menuConstance.DELETE_MENU_REQUEST,
    });
    await axiosInstance.delete(`/menu/${id}`).then((res) => {
      if (res.status === 200) {
        dispatch({
          type: menuConstance.DELETE_MENU_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
      }
    });
  };
};
export const _get_category_food_by_id = (id) => {
  return async (dispatch) => {
    dispatch({
      type: menuConstance.GET_FOOD_BY_MENU_ID_REQUEST,
    });
    axiosInstance
      .post(`/category_food/${id}`)
      .then((res) => {
        dispatch({
          type: menuConstance.GET_FOOD_BY_MENU_ID_SUCCESS,
          payload: {
            foodByMenuId: "",
          },
        });
      })
      .catch((error) => {});
  };
};
