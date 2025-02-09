import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from "../utils/Constant";

const Login = () => {
  const [emailId, setEmailId] = useState("krish@gmail.com");
  const [password, setPassword] = useState("krish@A123");
  const dispatch = useDispatch(); //add data into redux-store
  const navigate = useNavigate(); //redirect into another route

  const handleSignin = async () => {
    try {  
      const res = await axios.post(BASE_URL+"/login", {
        emailId,
        password,
      },
      {
        withCredentials:true // Send cookies with the request
    }
    );

    dispatch(addUser(res.data)); //dispatch action
    return navigate("/"); 

    } catch (err) {
      if (err.response) {
        console.error("Response Error:", err.response.data);  // API error details
        console.error("Status Code:", err.response.status);
      } else if (err.request) {
        console.error("Request Error:", err.request);
      } else {
        console.error("Axios Error:", err.message);
      }
    }
  };
  
  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="card bg-base-300 w-96 shadow-xl p-10">
        <h2 className="text-center font-bold">Login</h2>
        <div className="flex justify-center">
          <form className="w-full">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white-200"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={emailId}
                onChange={(e)=>setEmailId(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered w-full mt-2 p-3"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white-200"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter your password"
                className="input input-bordered w-full mt-2 p-3"
                required
              />
            </div>
            <div className="card-actions justify-center my-4 mt-10">
              <button type="button" onClick={handleSignin} className="btn btn-primary w-full p-3">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
