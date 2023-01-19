import { foodConstance } from "../constnace";

const initialState = {
  message: null,
  loading: false,
  foods: [],
  soldFoods: [],
};
function food_reducers(state = initialState, action) {
  switch (action.type) {
    case foodConstance.CREATE_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case foodConstance.CREATE_FOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };

    case foodConstance.CREATE_FOOD_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };

    case foodConstance.GET_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case foodConstance.GET_FOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        foods: action.payload.foods,
      };
    case foodConstance.GET_FOOD_BY_SORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case foodConstance.GET_FOOD_BY_SORT_SUCCESS:
      return {
        ...state,
        loading: false,
        soldFoods: action.payload.foods,
      };
    default:
      return state;
  }
}

export default food_reducers;
