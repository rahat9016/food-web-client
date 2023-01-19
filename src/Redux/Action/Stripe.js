import axiosInstance from "../../utility/axios";

export const _stripe = (id) => {
  return axiosInstance.post("/payment", { id });
};
export const _stripe_update = (id, paymentIntent) => {
  return axiosInstance.put("/payment", { id, paymentIntent });
};
