import {
  loginInitialValues,
  loginValidationSchema,
} from "@/Components/Navbar/Validation/login";
import { Formik } from "formik";
import ErrorMessage from "@/Components/Navbar/ErrorMessage";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const [initialValues, setInitialValues] = useState(loginInitialValues);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password"); // Doğru depolanan parolayı alın
    setInitialValues({ email: storedEmail, password: storedPassword });
  }, []);

  const handleFormSubmit = (values) => {
    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, setFieldValue, errors, handleSubmit }) => (
          <form className="max-w-md w-full px-4" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder="name@gmail.com"
                value={values.email}
                onChange={(e) => setFieldValue("email", e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="input-field"
                value={values.password}
                onChange={(e) => setFieldValue("password", e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-grey hover:bg-grey focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
