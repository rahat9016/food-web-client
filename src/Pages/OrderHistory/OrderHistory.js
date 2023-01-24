import React, { useEffect } from "react";
import { BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Components/Layout/Layout";
import OrderItem from "../../Components/Order/OrderItem";
import { _get_order } from "../../Redux/Action/Order";

const OrderHistory = () => {
  const { auth, orders } = useSelector((state) => state);
  const { firstName, lastName } = auth.user;
  // console.log(orders.orders);
  const orderItems = orders.orders;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(_get_order());
  }, [dispatch]);
  return (
    <Layout>
      <div className="px-2 md:px-20">
        <div className="flex gap-2 items-center my-10">
          <BiUser className="text-4xl	" />
          <div>
            <h1 className="text-secondary font-fira">Hello,</h1>
            <h2 className="font-fira text-xl">{firstName + " " + lastName}</h2>
          </div>
        </div>
        <div className="my-3 text-3xl font-medium	font-fira">
          <h1>Order History</h1>
        </div>
        <div className="flex flex-col gap-2 ">
          {orderItems &&
            orderItems.map((order, index) => {
              return <OrderItem order={order} key={index}></OrderItem>;
            })}
        </div>
      </div>
    </Layout>
  );
};

export default OrderHistory;
