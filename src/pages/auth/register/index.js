import { Formik } from "formik";

import {
  registerValidationSchema,
  registerInitialValues,
} from "@/pages/Validation/register";
import { useRouter } from "next/router";
import ErrorMessage from "@/Components/Navbar/ErrorMessage";

const RegisterForm = () => {
  // yönlendirmek için
  const router = useRouter();

  // formumun submit olması için
  const handleFormSubmit = (values) => {
    console.log("Kayıt formu gönderildi", values);
    router.push("/auth/login");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, setFieldValue, errors, handleSubmit }) => (
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-5">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                placeholder="Email address"
                value={values.floating_email}
                onChange={(event) =>
                  setFieldValue("floating_email", event.target.value)
                }
                required
              />
              {errors.floating_email && (
                <div className="text-red-500">{errors.floating_email}</div>
              )}
            </div>

            {/* Password */}
            <div className="mb-5">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                placeholder="Password"
                value={values.floating_password}
                onChange={(event) =>
                  setFieldValue("floating_password", event.target.value)
                }
                required
              />
              {errors.floating_password && (
                <div className="text-red-500">{errors.floating_password}</div>
              )}
            </div>

            {/* User Name */}
            <div className="grid grid-cols-2 gap-6">
              <div className="mb-5">
                <input
                  type="text"
                  name="floating_user_name"
                  id="floating_user_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                  placeholder="User Name"
                  value={values.floating_user_name}
                  onChange={(event) =>
                    setFieldValue("floating_user_name", event.target.value)
                  }
                  required
                />
                {errors.floating_user_name && (
                  <div className="text-red-500">
                    {errors.floating_user_name}
                  </div>
                )}
              </div>
            </div>

            {/* Phone Number */}
            <div className="grid grid-cols-2 gap-6">
              <div className="mb-5">
                <input
                  type="tel"
                  pattern="05[0-9]{9}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                  placeholder="Phone number (05*********)"
                  value={values.floating_phone}
                  onChange={(event) =>
                    setFieldValue("floating_phone", event.target.value)
                  }
                  required
                />
                {errors.floating_phone && (
                  <div className="text-red-500">{errors.floating_phone}</div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
