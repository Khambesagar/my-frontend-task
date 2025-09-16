import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Dashboard from "./Pages/Dashboard";
import AddProduct from "./Components/AddProduct";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage";
import PrivateRoute from "./Components/PrivateRoute";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* private routes */}
        <Route path="/dashboard" element={ <PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/add-new" element={<PrivateRoute> <AddProduct /> </PrivateRoute>} />
        {/* public routes */}
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
