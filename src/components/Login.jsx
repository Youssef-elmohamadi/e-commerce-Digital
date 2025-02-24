import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    console.log(email, password);
  };
  return (
    <>
      <div className="py-4 my-4 bg-banner bg-auto bg-no-repeat flex flex-col justify-center items-center h-40 w-full text-white font-semibold">
        Customer Login
      </div>
      <div>
        <div className="bg-gray-50 xl:w-3/4 md:w-5/6 mx-auto my-8 container py-3">
          <h1 className="text-center my-4 border-b pb-2 text-lg font-semibold">
            Registered Customers
          </h1>
          <p className="text-center my-4 text-gray-500">
            If you have an account, sign in with your email address.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="my-6 flex flex-wrap gap-4 items-center md:justify-center ">
              <label className="md:min-w-[200px] flex items-center md:justify-end font-semibold text-gray-600">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full md:w-5/12 border"
                type="email"
              />
            </div>
            <div className="my-6 flex flex-wrap gap-4 items-center md:justify-center ">
              <label className="md:min-w-[200px] flex items-center md:justify-end font-semibold text-gray-600">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full md:w-5/12 border"
                type="password"
              />
            </div>
            <div className="my-6 flex flex-wrap gap-4 items-center md:ml-[40%] ">
              <input type="checkbox" id="show-password" />
              <label htmlFor="show-password">Show Password</label>
            </div>
            <div className="my-6 flex flex-wrap gap-4 items-center md:ml-[41%] ">
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-md"
              >
                Sign In
              </button>
              <Link to="/forgot" className="text-gray-600 hover:text-primary">
                Forgot Your Password?
              </Link>
            </div>
          </form>
          <h1 className="text-center my-4 border-b pb-2 text-lg font-semibold">
            New Customers
          </h1>
          <p className="text-center my-4 text-gray-500">
            Creating an account has many benefits: check out faster , keep more
            than one address,
            <br /> track orders and more.
          </p>
          <div className="my-6 flex flex-wrap gap-4 items-center md:justify-center">
            <Link
              to="/register"
              className="bg-primary text-white py-2 px-4 rounded-md"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
