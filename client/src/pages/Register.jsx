import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/userSlice";
import { Link } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import { toast } from "react-toastify";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const { status, error: reduxError } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }


    setError(""); // Clear error state

    dispatch(registerUser({ name: username, email, password }))
      .unwrap()
      .then(() => {
        setPassword("");
        setEmail("");
        setUsername("");
        setConfirmPassword("")
        toast.success("Account created successfully!");
      })
      .catch(() => {
        setPassword("");
        setEmail("");
        setUsername("");
        setConfirmPassword("");
        toast.error("Error creating an account. Please try again later");
      });
  };

  return (
    <div className="h-[100vh] w-screen flex justify-center items-center">
      <div className="py-6 px-8 shadow-lg rounded-md w-[360px] md:w-[450px]">
        <h1 className="text-center font-platypi text-3xl">
          Welcome to{" "}
          <span className="text-orange-600 font-semibold">BLOGHUB!</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-14 flex flex-col gap-8">
          {/* {error && (
            <div className="text-red-600 mb-4">
              {error}
            </div>
          )}
          {reduxError && (
            <div className="text-red-600 mb-4">
              {reduxError}
            </div>
          )} */}
          <div className="flex gap-2 border-b-2 border-gray-600">
            <LuUser2 size="18" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full outline-none font-lora text-gray-700"
              placeholder="Username"
            />
          </div>
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
          <div className="flex gap-2 border-b-2 border-gray-600">
            <IoLockClosedOutline size="18" />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full outline-none font-lora text-gray-700"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="py-1 text-lg text-white rounded-3xl font-semibold font-platypi bg-orange-500 w-full"
            disabled={status === 'loading'}
          >
            Register
          </button>
        </form>
        <div className="w-full flex gap-1 justify-between items-center mt-2">
          <div className="h-[1px] bg-gray-600 w-full"></div>
          <p className="font-lora text-gray-600">OR</p>
          <div className="h-[1px] bg-gray-600 w-full"></div>
        </div>
        <div className="mt-2 flex flex-col gap-4">
          <button className="py-1 text-lg text-white rounded-3xl font-semibold font-platypi bg-blue-300 w-full">
            Signup with Google
          </button>
          <button className="py-1 text-lg text-white rounded-3xl font-semibold font-platypi bg-blue-300 w-full">
            Signup with Github
          </button>
        </div>
        <p className="mt-6 text-center">
          Account already exists?{" "}
          <Link className="text-orange-600" to="/login">Login Now</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
