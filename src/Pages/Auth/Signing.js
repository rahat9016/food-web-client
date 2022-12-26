import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Common/Button";
import Input from "../../Components/Common/Input";
import Layout from "../../Components/Layout/Layout";
import { useNavigate } from "react-router-dom";
const initialValue = {
  email: "",
  password: "",
};
const Signing = () => {
  const [values, setValues] = useState(initialValue);
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {};
  const navigate = useNavigate();

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
            className="mb-4 p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 "
            placeholder="E-mail"
            name="email"
            type="email"
            onChange={handleChange}
          />

          <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
            Password
          </label>

          <Input
            className="mb-4 p-2 border border-gray rounded-md outline-none focus:border-gray invalid:border-red-500 "
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <Button className="w-full bg-primary text-white py-2 rounded-md font-nunito font-bold">
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
            onClick={navigate("/")}
          >
            Create Your Account
          </Button>
        </div>
      </form>
    </Layout>
  );
};

export default Signing;
