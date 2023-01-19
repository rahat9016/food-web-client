import { cartConstance } from "../constnace";

let initiateState = {
  cartItems: [],
};
export const cartReducers = (state = initiateState, action) => {
  switch (action.type) {
    case cartConstance.ADD_TO_CART:
      const item = action.payload;
      const isItemsExit = state.cartItems.find(
        (i) => i.food_id === item.food_id
      );
      if (isItemsExit) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.food_id === isItemsExit.food_id ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case cartConstance.REMOVE_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (i) => i.food_id !== action.payload.food_id
        ),
      };
    case cartConstance.DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
