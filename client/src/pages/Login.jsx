import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import { toast } from "react-toastify";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.user);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        toast.success("Login successful!");
        navigate("/profile")
      })
      .catch(() => {
        toast.error("Failed to login. Please try again.");
      });
  };

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <div className="py-6 px-8 shadow-lg rounded-md w-[360px] md:w-[450px]">
        <h1 className="text-center font-platypi text-3xl">
          WELCOME{" "}
          <span className="text-orange-600 font-semibold">BACK!</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-14 flex flex-col gap-8">
          {error && (
            <div className="text-red-600 mb-4">
              {error}
            </div>
          )}
          <div className="flex gap-2 border-b-2 border-gray-600">
            <IoMailOutline size="18" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none font-lora text-gray-700"
              placeholder="Email"
            />
          </div>
          <div className="flex gap-2 border-b-2 border-gray-600">
            <IoLockClosedOutline size="18" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none font-lora text-gray-700"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="py-1 text-lg text-white rounded-3xl font-semibold font-platypi bg-orange-500 w-full"
            disabled={status === 'loading'}
          >
            Login
          </button>
        </form>
        <div className="w-full flex gap-1 justify-between items-center mt-2">
          <div className="h-[1px] bg-gray-600 w-full"></div>
          <p className="font-lora text-gray-600">OR</p>
          <div className="h-[1px] bg-gray-600 w-full"></div>
        </div>
        <div className="mt-2 flex flex-col gap-4">
          <button className="py-1 text-lg text-white rounded-3xl font-semibold font-platypi bg-blue-300 w-full">
            Login with Google
          </button>
          <button className="py-1 text-lg text-white rounded-3xl font-semibold font-platypi bg-blue-300 w-full">
            Login with Github
          </button>
        </div>
        <p className="mt-6 text-center">
          Don't have an account?{" "}
          <Link className="text-orange-600" to="/register">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
