import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminRoute from "./Components/PrivateRoute/AdminRoute";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AdminHome from "./Pages/Admin/AdminHome/AdminHome";
import Coupon from "./Pages/Admin/Coupon/Coupon";
import Food from "./Pages/Admin/Food/Food";
import HotOffers from "./Pages/Admin/HotOffers/HotOffers";
import Menu from "./Pages/Admin/Menu/Menu";
import Order from "./Pages/Admin/Order/Order";
import Signing from "./Pages/Auth/Signing";
import Signup from "./Pages/Auth/Signup";
import Checkout from "./Pages/Checkout/Checkout";
import FoodCategory from "./Pages/FoodCategory/FoodCategory";
import Home from "./Pages/Home/Home";
import Message from "./Pages/Message/Message";
import NotFound from "./Pages/NotFound/NotFound";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
import Payment from "./Pages/Payment/Payment";
import { _isLoggedIn } from "./Redux/Action/Auth";
import { _get_food } from "./Redux/Action/Food";
import { _get_menu } from "./Redux/Action/Menu";
import { _get_offers } from "./Redux/Action/Offers";
function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(_isLoggedIn());
    }
  }, [auth.authenticate, dispatch]);

  useEffect(() => {
    dispatch(_get_menu());
    dispatch(_get_food());
    dispatch(_get_offers());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Signing />}></Route>
        <Route path="/food_category" element={<FoodCategory />}></Route>
        <Route path="/*" element={<AdminRoute />}>
          <Route path="admin/menu" element={<Menu />}></Route>
          <Route path="admin/food" element={<Food />}></Route>
          <Route path="admin/coupon" element={<Coupon />}></Route>
          <Route path="admin/order" element={<Order />}></Route>
          <Route path="admin/hot-offers" element={<HotOffers />}></Route>
          <Route path="admin/home" element={<AdminHome />}></Route>
        </Route>
        <Route path="/*" element={<PrivateRoute />}>
          <Route path="message" element={<Message />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="payment" element={<Payment />}></Route>
          <Route path="order" element={<OrderHistory />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
