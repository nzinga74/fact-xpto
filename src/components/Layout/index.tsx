import { Outlet } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";

const Layout = () => {
  return (
    <>
      <div className="w-full h-20 z-30 bg-c-gray-100">
        <div className="fixed w-full z-[1000]">
          <Header />
        </div>
      </div>
      <div className="flex  space-x-8">
        <div className="w-1/4 min-h-full  bg-c-blue-100 ">
          <div className="fixed min-h-full">
            <SideBar />
          </div>
        </div>
        <div className="w-3/4 pr-11 py-4 pl-4 min-h-screen ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
