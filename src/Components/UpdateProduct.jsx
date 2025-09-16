import React, { useState, useEffect } from "react";
//Add toaster
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateProduct({ product, onUpdate }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);

  useEffect(() => {
    setName(product.name);  // Update state when product prop changes
    setPrice(product.price);
    setCategory(product.category);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...product, name, price, category });

    // Add toaster
     toast.success('Data Updated!', {
                                position: "top-right",
                                autoClose: 1500,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                                transition: Bounce,
                            });
  };

  return (
    <div className="flex mb-3 justify-center">
      <form onSubmit={handleSubmit} className=" flex space-x-2">
        {/* Name */}
        <div>
          <label className="me-2 font-bold text-lg text-red-700">
           Name: 
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" border rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-yellow-100"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="me-2 font-bold text-lg text-red-700">
            Price:
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-yellow-100"
            placeholder="Enter product price"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="me-2 font-bold text-lg text-red-700">
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-yellow-100"
            placeholder="Enter category"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className=" bg-gradient-to-r from-blue-500 to-purple-600 text-white py-1 px-3 ms-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300 shadow-md"
        >
          Update Data
        </button>
      </form>
    </div>
  );
}
