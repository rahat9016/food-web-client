import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Common/Button";
import Input from "../../Components/Common/Input";
import Layout from "../../Components/Layout/Layout";

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  mobile: 0,
};
const Signup = () => {
  const [values, setValues] = useState(initialValue);
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {};
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
                className="mb-4 p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 w-full "
                placeholder="First Name"
                type="text"
                name="firstName"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                Last Name
              </label>
              <Input
                className="mb-4 p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 w-full  "
                placeholder="Last Name"
                type="text"
                name="lastName"
                onChange={handleChange}
              />
            </div>
          </div>
          <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
            Email
          </label>
          <Input
            className="mb-4 p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 "
            placeholder="E-mail"
            type="email"
            name="email"
            onChange={handleChange}
          />

          <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
            Password
          </label>

          <Input
            className="mb-4 p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 "
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
            Number
          </label>

          <Input
            className="mb-4 p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 "
            placeholder="Number"
            type="Number"
            name="mobile"
            onChange={handleChange}
          />
          <Button className="w-full bg-primary text-white py-2 rounded-md font-nunito font-bold">
            Sign Up
          </Button>

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
            // onClick={navigate("/")}
          >
            Login
          </Button>
        </div>
      </form>
    </Layout>
  );
};

export default Signup;
