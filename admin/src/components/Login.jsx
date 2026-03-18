import axios from "axios";
import React from "react";
import { useState } from "react";
import { backendUrl } from "../App";
import { ToastContainer, toast } from "react-toastify";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + '/api/user/admin',{email,password});
      if(response.data.success){
        setToken(response.data.token);
      }else{

      }


    } catch (error) {}
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-grey-700 mb-2">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none "
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-grey-700 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none "
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-neutral-950 px-5 py-2.5 text-white duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
