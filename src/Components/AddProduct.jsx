//Add toaster
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Formik Yup
import { useFormik } from "formik";
import * as Yup from "yup";

function AddProduct({ onAdd }) {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [category, setCategory] = useState("");

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
      price: Yup.number()
        .typeError("Price must be a number")
        .positive("Price must be positive")
        .required("Price is required"),
      category: Yup.string().required("Category is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      onAdd({ id: Date.now(), ...values });
      // Add toaster..
      toast.success("Add Successfully!", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
        transition: Bounce,
      });
      resetForm();
    },
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   onAdd({id:Date.now(),name,price,category});
  //   setName("");
  //   setPrice("");
  //   setCategory("");

  // console.log('submitted');

  // };

  return (
    <>
      <div className="flex flex-col items-center bg-green-300 p-4 rounded shadow-lg shadow-black">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border outline rounded p-1 bg-green-200 focus:ring-2 focus:ring-orange-600 focus:outline-none"
          />
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-500">{formik.errors.name}</span>
          )}

          {/* Price */}
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border outline rounded p-1 bg-green-200 focus:ring-2 focus:ring-orange-600 focus:outline-none"
          />
          {formik.touched.price && formik.errors.price && (
            <span className="text-red-500">{formik.errors.price}</span>
          )}

          {/* Category */}
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border outline rounded p-1 bg-green-200 focus:ring-2 focus:ring-orange-600 focus:outline-none"
          />
          {formik.touched.category && formik.errors.category && (
            <span className="text-red-500">{formik.errors.category}</span>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 m-2 rounded cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
