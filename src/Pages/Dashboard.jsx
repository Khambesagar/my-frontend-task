import React, { useEffect, useState } from "react";

import AddProduct from "../Components/AddProduct";
import UpdateProduct from "../Components/UpdateProduct";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false); //for Add data modal

  const [editingProduct, setEditingProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [sortData, setSortData] = useState("");

  const [products, setProducts] = useState(() => {
    const getProducts = JSON.parse(localStorage.getItem("products"));
    return getProducts
      ? getProducts
      : [
          //  get static Data
          { id: 1, name: "Car Insurance", price: 500, category: "Vehicle" },
          { id: 2, name: "Health Insurance", price: 3000, category: "Health" },
          { id: 3, name: "Travel Insurance", price: 2000, category: "Travel" },
        ];
  });

  // Save products in LocalStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Add product..
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Update product..
  const handleUpdate = (updatedProduct) => {
    const updateData = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    console.log(updateData);
    setProducts(updateData);
    setEditingProduct(null);
  };

  //Delete product..
  const handledelete = (p) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Data?"
    );

    if (confirmDelete) {
      const deleteData = products.filter((value) => value.id !== p);
      console.log(deleteData);
      setProducts(deleteData);
    }
  };

  // Search & Sort Product..
  const finalProduct = [...products]
    .filter(
      (value) =>
        value.name.toLowerCase().includes(search.trim().toLowerCase()) ||
        value.category.toLowerCase().includes(search.trim().toLowerCase())
    )
    .sort((a, b) => {
      if (sortData === "price-asc") return a.price - b.price; // Accending order
      if (sortData === "price-desc") return b.price - a.price; // Decending order
      if (sortData === "name-asc") return a.name.localeCompare(b.name); // A to Z
      if (sortData === "name-desc") return b.name.localeCompare(a.name); // Z to A
      return 0;
    });

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-fuchsia-400 via-pink-200 to-blue-500">
        {/* Dashboard */}
        <div className="justify-center items-center p-10">
          <div className="flex justify-center ">
            <h1 className="text-2xl font-bold border-b-3">Dashboard</h1>
          </div>

          {/* Search bar */}
          <div className="flex justify-center my-4">
            <div className="p-[3px] rounded-lg bg-gradient-to-r from-green-500 via-purple-500 to-blue-500">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-64 px-3 py-2 rounded-lg outline-none bg-amber-100 text-black"
                placeholder="Search by Name or Category.."
              />
            </div>
          </div>

          {/*Add button & Sort buttons  */}
          <div className="flex justify-between items-center my-4">
            {/* Add button*/}
            <span>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-500 text-white py-2 px-5 m-2 rounded cursor-pointer"
              >
                Add New
              </button>
            </span>

            {/* Sort Buttons */}
            <span className="bg-blue-500 p-2 rounded ">
              <select
                onChange={(e) => setSortData(e.target.value)}
                className="outline-none rounded text-white bg-violet-950 cursor-pointer"
              >
                <option value="" className="text-white">
                  Sort-Data By
                </option>
                <option value="price-asc">Price (Low → High)</option>
                <option value="price-desc">Price (High → Low)</option>
                <option value="name-asc">Name (A → Z)</option>
                <option value="name-desc">Name (Z → A)</option>
              </select>
            </span>
          </div>

          {/* Form update */}
          {editingProduct && (
            <UpdateProduct product={editingProduct} onUpdate={handleUpdate} />
          )}

          {/* Table Data */}
          <table className="w-full text-center border border-gray-500 rounded border-collapse">
            <thead className="bg-gray-400">
              <tr>
                <th className="border border-gray-500 px-2 py-1">Sr.No</th>
                <th className="border border-gray-500 px-2 py-1">Name</th>
                <th className="border border-gray-500 px-2 py-1">Price</th>
                <th className="border border-gray-500 px-2 py-1">Category</th>
                <th className="border border-gray-500 px-2 py-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {finalProduct.length > 0 ? (
                finalProduct.map((value, index) => (
                  <tr
                    key={value.id}
                    className="odd:bg-white even:bg-gray-100 hover:bg-amber-400 hover:text-bold"
                  >
                    <td className="border border-gray-500 px-2 py-1">
                      {index + 1}
                    </td>
                    <td className="border border-gray-500 px-2 py-1">
                      {value.name}
                    </td>
                    <td className="border border-gray-500 px-2 py-1">
                      {value.price}
                    </td>
                    <td className="border border-gray-500 px-2 py-1">
                      {value.category}
                    </td>
                    <td className="border border-gray-500 px-2 py-1 space-x-2">
                      <button
                        onClick={() => setEditingProduct(value)}
                        className="bg-green-500 text-white px-2 py-1 rounded cursor-pointer"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handledelete(value.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-red-500 font-bold py-4 border border-gray-500"
                  >
                    Data Not Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Add Product Modal */}
        {isOpen && (
          <div className="fixed bg-zinc-600/60 inset-0 flex justify-center items-center z-50">
            {/* Modal Box */}
            <div className="bg-green-500 p-6 rounded-lg w-96 relative shadow-xl shadow-black">
              <h2 className="flex text-xl font-bold mb-4 justify-center">
                Add New Data
              </h2>

              {/* Form */}
              <AddProduct onAdd={handleAddProduct} />

              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 font-bold cursor-pointer text-lg"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
