import { authConstance } from "../constnace";

const initialState = {
  message: null,
  loading: false,
  authenticate: false,
  authenticating: false,
  user: null,
  token: "",
  admin: false,
};
function auth_reducers(state = initialState, action) {
  switch (action.type) {
    case authConstance.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authConstance.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case authConstance.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case authConstance.SINING_REQUEST:
      return {
        ...state,
        loading: true,
        authenticating: true,
      };
    case authConstance.SINING_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticate: true,
        authenticating: false,
        user: action.payload.user,
        token: action.payload.token,
        admin: action.payload.user.role === "admin" ? true : false,
      };
    case authConstance.SINING_FAILURE:
      return {
        ...state,
        loading: false,
        authenticating: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
}

export default auth_reducers;
