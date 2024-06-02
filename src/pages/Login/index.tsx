import PlayOne from "../../assets/playOne.png";
import Logo from "../../assets/logo.png";
import { Field, Form, Formik } from "formik";

import "./style.css";
const Login = () => {
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
              <div className="mt-5">
                <button className="px-4 py-3 text-lt text-white bg-c-orange-100 rounded-full">
                  Download playstore
                </button>
                <button className=" box-border ml-3 px-4 py-3 text-lt text-white border-2 rounded-full	border-white">
                  Download Appstore
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex justify-center items-center ">
                <Formik
                  initialValues={{ email: "", password: "" }}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className="h-500  w-4/5 px-11 rounded py-9 ">
                      <div className="bg-c-gray-100 shadow-md w-20 h-20 rounded-full mx-auto flex justify-center items-center">
                        <img src={Logo} />
                      </div>
                      <div className="w-full bg-c-gray-100 mt-6 rounded">
                        <Field
                          name="email"
                          placeholder="Insira Email"
                          className="bg-c-gray-100 text-c-gray-300 px-3 text-lt py-4 w-full outline-none"
                        />
                      </div>
                      <div className="w-full bg-c-gray-100 mt-2 rounded">
                        <Field
                          name="password"
                          text-c-gray-300
                          placeholder="Insira Password"
                          className="bg-c-gray-100 text-lt px-3 py-4  w-full outline-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="rounded font-medium text-sm mt-7 bg-c-orange-100 px-2 py-3 text-white w-full"
                      >
                        Login
                      </button>
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

export default Login;
