import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//Add toaster
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // validation
    if (!username.trim()) {
      setError("Please Enter UserName");
      return;
    }
    if (!password.trim()) {
      setError("Enter Password");
      return;
    }

    // check user from localStorage
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (
      registeredUser &&
      registeredUser.username === username &&
      registeredUser.password === password
    ) {
      localStorage.setItem("dummyUser", "true"); // login flag
      // Add Toaster..
      toast.success("Login Successfully!", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
        transition: Bounce,
      });
      navigate("/dashboard");
    } else {
      setError("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center p-6">
      <div className="bg-violet-200/90 backdrop-blur-sm rounded-2xl shadow-2xl max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* image section*/}
        <div className="p-6 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="../../public/img.png"
              alt="illustration"
              className="object-cover h-80 md:h-96"
            />
          </div>
        </div>

        {/* content form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Login here!
          </h1>{" "}
          <br />
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-gray-800">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                </svg>
                <span>Username:</span>
              </div>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 w-full border-2 border-purple-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </label>

            <label className="block text-sm font-medium text-gray-800">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 8h-1V6c0-2.8-2.2-5-5-5S6 3.2 6 6v2H5C3.9 8 3 8.9 3 10v9c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zM9 6c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V6z" />
                </svg>
                <span>Password:</span>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full border-2 border-purple-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </label>
            {/*Show error */}
            {error && <p className="text-sm text-red-600">{error}</p>}
            {/* Login button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full md:w-1/2 bg-gradient-to-r from-sky-400 to-teal-400 text-gray-900 font-semibold py-2 rounded-xl shadow-md hover:scale-105 transform transition cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>
          {/* Register link */}
          <div className="mt-6 text-center text-gray-700">
            New user?{" "}
            <Link to="/signup">
              <a href="#" className="text-blue-700 underline">
                Register here
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
