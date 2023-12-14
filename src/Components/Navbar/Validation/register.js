import * as Yup from "yup";

export const registerInitialValues = {
  floating_email: "",
  floating_password: "",
  floating_user_name: "",
  floating_phone: "",
};

export const registerValidationSchema = Yup.object({
  floating_user_name: Yup.string().required("Kullanıcı adı zorunludur"),
  floating_email: Yup.string()
    .required("E-posta zorunludur")
    .email("Geçerli bir e-posta adresi giriniz"),
  floating_password: Yup.string().required("Şifre zorunludur"),
  floating_phone: Yup.number().required("Telefon numarası zorunludur"),
});
