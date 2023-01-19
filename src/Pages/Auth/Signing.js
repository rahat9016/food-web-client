import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../Components/Common/Button";
import Input from "../../Components/Common/Input";
import Layout from "../../Components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { _login } from "../../Redux/Action/Auth";
const initialValue = {
  email: "",
  password: "",
};
const Signing = () => {
  const [values, setValues] = useState(initialValue);
  const { message } = useSelector((state) => state.auth);
  const auth = useSelector((state) => state.auth);
  const location = useLocation();
  const locationState = location.state?.from;
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(_login(values));
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.authenticate && auth.admin === true) {
      if (locationState) {
        navigate(locationState.pathname);
      } else {
        navigate("/admin/home");
      }
    } else if (auth.authenticate) {
      if (locationState) {
        navigate(locationState.pathname);
      } else {
        navigate("/");
      }
    }
  }, [auth.authenticate, navigate, locationState, auth.admin]);
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-[500px] mx-auto my-24 bg-white px-4 py-6 rounded-md shadow-sm">
          <h1 className="text-xl mb-4 font-nunito font-bold text-center">
            Account Login
          </h1>
          <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
            Email
          </label>
          <Input
            className=" p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 "
            placeholder="E-mail"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <p
            className={`text-rose-600 my-1 ${
              message?.email ? "block" : "hidden"
            }`}
          >
            {message?.email && message.email?.msg}
          </p>
          <label className="mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">
            Password
          </label>

          <Input
            className=" p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 "
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <p
            className={`text-rose-600 my-1 ${
              message?.password ? "block" : "hidden"
            }`}
          >
            {message?.password && message.password?.msg}
          </p>
          <Button
            className="mt-4 w-full bg-primary text-white py-2 rounded-md font-nunito font-bold"
            type="submit"
          >
            Login
          </Button>

          <span className="flex justify-end my-3">
            <Link className="text-primary hover:underline">
              Forgotten Password?
            </Link>
          </span>
          <p className="text-center border-b-[1px] border-[#eee] h-[11px]  mb-8">
            <span className="bg-white px-2 text-textGray">
              Don't have an account?
            </span>
          </p>
          <Button
            className="w-full border transition duration-500 border-btnBlue hover:bg-primary text-primary hover:text-white py-2 rounded-md font-nunito font-bold"
            onClick={() => navigate("/signup")}
          >
            Create Your Account
          </Button>
        </div>
      </form>
    </Layout>
  );
};

export default Signing;
