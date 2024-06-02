import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo Obrigatório")
    .min(4, "Deve ter pelo menos 4 digitos"),
  lastname: yup
    .string()
    .required()
    .min(4, "Deve ter pelo menos 4 digitos"),
  email: yup
    .string()
    .email("Deve ter formato de email incluindo @")
    .required("Campo Obrigatório"),
  password: yup
    .string()
    .required("Campo Obrigatório")
    .min(8, "Deve ter pelo menos 8 digitos"),
});
