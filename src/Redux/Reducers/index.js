import { combineReducers } from "redux";
import auth_reducers from "./auth.reducers";
import { cartReducers } from "./cart.reducers";
import food_reducers from "./food.reducers";
import menu_reducers from "./menu.reducers";
import offers_reducers from "./offers.reducers";
import order_reducers from "./order.reducers";

const rootReducer = combineReducers({
  auth: auth_reducers,
  menu: menu_reducers,
  foods: food_reducers,
  offers: offers_reducers,
  cart: cartReducers,
  orders: order_reducers,
});

export default rootReducer;
