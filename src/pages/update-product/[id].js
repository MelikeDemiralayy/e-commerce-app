import { useFormik } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import {
  updateProductFormInitialValue,
  updateProductValidationSchema,
} from "@/Components/Navbar/Validation/updateProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
  let product = {};
  const router = useRouter();
  const { id } = router.query;
  const formik = useFormik({
    initialValues: updateProductFormInitialValue,
    validationSchema: updateProductValidationSchema,
    onSubmit: async (values) => {
      product = productDetail(values);
      try {
        const rest = await axios.put(
          `http://localhost:3001/products/${id}`,
          product
        );
        router.push("/Products");
        return rest.data;
      } catch (error) {
        console.error("An error occurred while updating the product", error);
      }
    },
  });

  const productDetail = (values) => {
    return {
      title: values.title || "",
      description: values.description || "",
      price: values.price || 0,
      category: values.category || "",
      imageUrl: values.imageUrl || "",
    };
  };

  return (
    <>
      <form
        className="mt-6 max-w-md mx-auto flex flex-col h-screen justify-between"
        onSubmit={formik.handleSubmit}
      >
        <div className="my-1">
          <label className="block text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            name="title"
            placeholder="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </div>
        <div className="my-1">
          <label className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            name="description"
            placeholder="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </div>
        <div className="my-1">
          <label className="block text-sm font-medium text-gray-700">
            Price:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            name="price"
            type="number"
            placeholder="Price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
        </div>
        <div className="my-1">
          <label className="block text-sm font-medium text-gray-700">
            Category:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            name="category"
            placeholder="Category"
            value={formik.values.category}
            onChange={formik.handleChange}
          />
        </div>
        <div className="my-1">
          <label className="block text-sm font-medium text-gray-700">
            Image URL:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            name="imageUrl"
            placeholder="Image URL"
            value={formik.values.imageUrl}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-grey rounded-md focus:outline-none hover:bg-grey"
          >
            Update Product
          </button>
          <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
      </form>
    </>
  );
};

export default UpdateProduct;
