import * as Yup from "yup";

export const updateProductFormInitialValue = {
  title: "",
  description: "",
  price: 0,
  category: "",
  imageUrl: "",
};

export const updateProductValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Author is required"),
  price: Yup.number()
    .positive("Price must be a positive number")
    .required("Price is required"),
  category: Yup.string().required("Description is required"),
  imageUrl: Yup.string().url("ImageUrl must be a URL"),
});
