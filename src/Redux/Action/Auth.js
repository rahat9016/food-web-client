import axiosInstance from "../../utility/axios";
import { authConstance } from "../constnace";

export const _signup = (values) => {
  return async (dispatch) => {
    dispatch({
      type: authConstance.SIGNUP_REQUEST,
    });
    axiosInstance
      .post("/user/signup", values)
      .then((res) => {
        if (res.status === 201) {
          dispatch({
            type: authConstance.SIGNUP_SUCCESS,
            payload: {
              message: res.data.message,
            },
          });
        }
      })
      .catch((error) => {
        let _error = error.response;
        if (_error.status === 400) {
          dispatch({
            type: authConstance.SIGNUP_FAILURE,
            payload: {
              message: _error.data.message,
            },
          });
        } else if (_error.status === 500) {
          dispatch({
            type: authConstance.SIGNUP_FAILURE,
            payload: {
              message: _error.data.errors,
            },
          });
        }
      });
  };
};

export const _login = (values) => {
  return async (dispatch) => {
    dispatch({
      type: authConstance.SINING_REQUEST,
    });
    axiosInstance
      .post("/user/signing", values)
      .then((res) => {
        if (res.status === 200) {
          const { token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({
            type: authConstance.SINING_SUCCESS,
            payload: {
              user,
              token,
            },
          });
        }
      })
      .catch((error) => {
        let _error = error.response;
        if (_error.status === 400) {
          dispatch({
            type: authConstance.SINING_FAILURE,
            payload: {
              message: _error.data.error,
            },
          });
        } else if (_error.status === 500) {
          dispatch({
            type: authConstance.SINING_FAILURE,
            payload: {
              message: _error.data.errors,
            },
          });
        }
      });
  };
};

export const _isLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstance.SINING_SUCCESS,
        payload: {
          user,
          token,
        },
      });
    } else {
      dispatch({
        type: authConstance.SINING_FAILURE,
        payload: {
          message: "LOGIN Failed! ",
        },
      });
    }
  };
};

export const _logout = () => {
  return async (dispatch) => {
    dispatch({
      type: authConstance.LOGOUT_REQUEST,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
    dispatch({
      type: authConstance.LOGOUT_SUCCESS,
    });
  };
};
