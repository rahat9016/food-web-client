import { offersConstance } from "../constnace";

const initialState = {
  loading: false,
  offers: [],
  message: "",
  error: "",
};
function offers_reducers(state = initialState, action) {
  switch (action.type) {
    case offersConstance.CREATE_OFFERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case offersConstance.CREATE_OFFERS_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        error: "",
      };
    case offersConstance.CREATE_OFFERS_FAILURE:
      return {
        ...state,
        loading: false,
        message: "",
        error: action.payload.error,
      };
    case offersConstance.GET_OFFERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case offersConstance.GET_OFFERS_SUCCESS:
      return {
        ...state,
        offers: action.payload.offers,
        loading: false,
      };
    default:
      return state;
  }
}
export default offers_reducers;
