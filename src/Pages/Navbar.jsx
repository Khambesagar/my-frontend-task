import React from "react";
import { useNavigate } from "react-router-dom";
//Add toaster
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("dummyUser");
    // Add Toaster..
    toast.success("Logout Successfully!", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
      transition: Bounce,
    });
    navigate("/"); // Navigate to Login
  };
  return (
    <div className="flex justify-between py-4 px-6 bg-purple-950 text-yellow-400 text-bold">
      <div>
        <h1 className="text-2xl">Butter Insurance Task</h1>
      </div>
      <div>
        <button onClick={handleLogout} className="text-lg cursor-pointer">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
