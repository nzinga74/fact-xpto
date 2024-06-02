import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../components/Layout";
import Statistic from "../pages/Statistic";
import { Product } from "../pages/Product";

export default function Router() {
  let element = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    {
      element: <Layout />,
      children: [
        {
          path: "/statistic",
          element: <Statistic />,
        },
        {
          path: "/product",
          element: <Product />,
        },
      ],
    },
  ]);
  return element;
}
