import React from "react";

const Login = () => {
  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="card bg-base-300 w-96 shadow-xl p-10">
        <h2 className="text-center font-bold">Login</h2>
        <div className="flex justify-center">
          <form action="" className="w-full">
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
                placeholder="Enter your password"
                className="input input-bordered w-full mt-2 p-3"
                required
              />
            </div>
            <div className="card-actions justify-center my-4 mt-10">
              <button type="submit" className="btn btn-primary w-full p-3">
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
