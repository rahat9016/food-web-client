const { orderConstance } = require("../constnace");

const initialState = {
  orders: [],
  loading: false,
};
function order_reducers(state = initialState, action) {
  switch (action.type) {
    case orderConstance.GET_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case orderConstance.GET_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload.orders,
      };
    default:
      return state;
  }
}
export default order_reducers;
