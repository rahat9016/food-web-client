import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Common/Button";
import Input from "../../Components/Common/Input";
import Layout from "../../Components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { _signup } from "../../Redux/Action/Auth";
const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  mobile: 0,
};
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValue);
  // Auth Error check
  const { message } = useSelector((state) => state.auth);
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(_signup(values));
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-[500px] mx-auto my-24 bg-white px-4 py-6 rounded-md shadow-sm">
          <h1 className="text-xl mb-4 font-nunito font-bold text-center">
            Account Create
          </h1>
          <div className="flex flex-row gap-2">
            <div>
              <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                First Name
              </label>
              <Input
                className=" p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 w-full "
                placeholder="First Name"
                type="text"
                name="firstName"
                onChange={handleChange}
              />
              <p
                className={`text-rose-600 my-1 ${
                  message?.firstName ? "block" : "hidden"
                }`}
              >
                {message?.firstName && message.firstName?.msg}
              </p>
            </div>
            <div>
              <label className="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500">
                Last Name
              </label>
              <Input
                className=" p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 w-full  "
                placeholder="Last Name"
                type="text"
                name="lastName"
                onChange={handleChange}
              />
              <p
                className={`text-rose-600 my-1 ${
                  message?.lastName ? "block" : "hidden"
                }`}
              >
                {message?.lastName && message.lastName?.msg}
              </p>
            </div>
          </div>
          <label className="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500">
            Email
          </label>
          <Input
            className=" p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 "
            placeholder="E-mail"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <p
            className={`text-rose-600 my-1 ${
              message?.email ? "block" : "hidden"
            }`}
          >
            {message?.email && message.email?.msg}
          </p>
          <label className="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500">
            Password
          </label>
          <Input
            className=" p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 "
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <p
            className={`text-rose-600 my-1 ${
              message?.password ? "block" : "hidden"
            }`}
          >
            {message?.password && message.password?.msg}
          </p>
          <label className="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500">
            Number
          </label>
          <Input
            className=" p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 "
            placeholder="Number"
            type="Number"
            name="mobile"
            onChange={handleChange}
          />

          <p
            className={`text-rose-600 my-1 ${
              message?.mobile ? "block" : "hidden"
            }`}
          >
            {message?.mobile && message.mobile?.msg}
          </p>
          <Button
            className="mt-4 w-full bg-primary text-white py-2 rounded-md font-nunito font-bold"
            type="submit"
          >
            Sign Up
          </Button>
          {message && message === "User create successful!" ? (
            <div
              className={` w-full bg-green-200 text-green-500 p-2 text-center font-nunito font-bold mt-4 rounded-md ${
                message === "User create successful!" ? "block" : "hidden"
              }`}
            >
              {message && message}
            </div>
          ) : (
            <div
              className={`w-full bg-red-200 text-red-500 p-2 text-center font-nunito font-bold mt-4 rounded-md ${
                message === "Already registered!" ? "block" : "hidden"
              }`}
            >
              {message && message}
            </div>
          )}
          <span className="flex justify-end my-3">
            <Link className="text-primary hover:underline">
              Forgotten Password?
            </Link>
          </span>
          <p className="text-center border-b-[1px] border-[#eee] h-[11px]  mb-8">
            <span className="bg-white px-2 text-textGray">
              Already have an account?
            </span>
          </p>
          <Button
            className="w-full border transition duration-500 border-btnBlue hover:bg-primary text-primary hover:text-white py-2 rounded-md font-nunito font-bold"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>
      </form>
    </Layout>
  );
};

export default Signup;
