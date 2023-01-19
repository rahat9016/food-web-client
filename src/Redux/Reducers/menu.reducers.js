import { menuConstance } from "../constnace";

const initialState = {
  message: null,
  loading: false,
  menu: [],
};
function menu_reducers(state = initialState, action) {
  switch (action.type) {
    case menuConstance.CREATE_MENU_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case menuConstance.CREATE_MENU_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case menuConstance.CREATE_MENU_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case menuConstance.GET_MENU_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case menuConstance.GET_MENU_SUCCESS:
      return {
        ...state,
        loading: false,
        menu: action.payload.menu,
      };
    default:
      return state;
  }
}

export default menu_reducers;
