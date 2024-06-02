import { useState } from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";
import { Formik, Field, Form } from "formik";
import PlayOne from "../../assets/playOne.png";
import Logo from "../../assets/logo.png";
import { addUser } from "../../services/api/post";
import { IUser } from "../../models/IUser";
import { toast } from "react-toastify";
import { LoadingButton } from "../../components/ButtonLoading";
import "./style.css";
import { registerSchema } from "../../validators";
import { FormError } from "../../components/FormError";

const Register = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async (userData: IUser) => {
    setIsLoading(true);
    try {
      const user = await addUser(userData);
      toast.success("Usuário cadastrado com sucesso");
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };
  return (
    <>
      <div className="w-screen h-screen flex bg-c-gray-100 justify-center items-center">
        <div className="container w-10/12 ">
          <div className="flex shadow-sm  bg-c-gray-200 py-8 px-8 rounded">
            <div className="w-1/2 flex justify-center items-center flex-col">
              <img src={PlayOne} className="login-hero-image" />
              <h2 className="text-white text-2xl mt-5">
                SPEED <span className="text-c-orange-100">SOUND</span>
              </h2>
              <h2 className="text-white text-sm mt-5">
                O Seu Universo de Músicas
              </h2>
              <div className="mt-5 flex">
                <button className="px-4 py-3 text-lt text-white bg-c-orange-100 rounded-full flex items-center">
                  <BiLogoPlayStore className="text-lg" />
                  <p className="p-0 m-0 ml-1"> Download playstore</p>
                </button>
                <button className=" box-border ml-3 px-4 py-3 text-lt text-white border-2 rounded-full	border-white flex items-center">
                  <FaAppStore className="text-lg" />
                  <p className="p-0 m-0 ml-1"> Download Appstore</p>
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex justify-center items-center ">
                <Formik
                  validationSchema={registerSchema}
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    lastname: "",
                  }}
                  onSubmit={onSubmit}
                >
                  {({ errors, touched }) => (
                    <Form className="h-500 w-4/5 px-11  rounded py-9 ">
                      <div className="bg-c-gray-100 shadow-md w-20 h-20 rounded-full mx-auto flex justify-center items-center">
                        <img src={Logo} />
                      </div>
                      <div className="w-full bg-c-gray-100 mt-6 rounded">
                        <Field
                          placeholder="Insira Nome"
                          name="name"
                          className="bg-c-gray-100 text-c-gray-300 text-lt px-3 py-4  w-full outline-none"
                        />
                      </div>
                      <FormError error={errors.name} />
                      <div className="w-full bg-c-gray-100 mt-2 rounded">
                        <Field
                          placeholder="Insira Sobrenome"
                          name="lastname"
                          className="bg-c-gray-100 text-c-gray-300 text-lt px-3 py-4  w-full outline-none"
                        />
                      </div>
                      <FormError error={errors.lastname} />
                      <div className="w-full bg-c-gray-100 mt-2 rounded">
                        <Field
                          placeholder="Insira Email"
                          name="email"
                          className="bg-c-gray-100 text-c-gray-300 px-3 text-lt py-4 w-full outline-none"
                        />
                      </div>
                      <FormError error={errors.email} />
                      <div className="w-full bg-c-gray-100 mt-2 rounded">
                        <Field
                          placeholder="Insira Password"
                          name="password"
                          className="bg-c-gray-100 text-lt px-3 py-4 text-c-gray-300  w-full outline-none"
                        />
                      </div>
                      <FormError error={errors.password} />
                      <LoadingButton
                        isLoading={isLoading}
                        type="submit"
                        className="rounded font-medium text-sm mt-7 bg-c-orange-100 px-2 py-3 text-white w-full"
                      />
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
