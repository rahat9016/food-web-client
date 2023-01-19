import { cartConstance } from "../constnace";

export const _add_to_cart = (id, name, img, price, qty, type) => {
  return async (dispatch, getState) => {
    dispatch({
      type: cartConstance.ADD_TO_CART,
      payload: {
        food_id: id,
        food_name: name,
        food_img: img,
        food_price: price,
        food_qty: qty,
        food_type: type,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};

export const _remove_to_cart = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: cartConstance.REMOVE_TO_CART,
      payload: {
        food_id: id,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};
export const _delete_cart_item = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: cartConstance.DELETE_CART_ITEM,
    });
    localStorage.removeItem("cartItems");
  };
};
