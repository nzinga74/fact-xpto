import { useState } from "react";
import { BiSolidPlaylist } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [selectedMenu, setSelectedMenu] = useState("_feed");
  const navigate = useNavigate();
  const onSelectMenu = (key: string, link: string) => {
    setSelectedMenu(key);
    navigate(link);
  };
  const menus = [
    {
      key: "products",
      title: "Produtos",
      Icon: <BiSolidPlaylist className="text-lg" />,
      link: "/product",
    },
    {
      key: "_estatística",
      title: "Estatística",
      Icon: <IoIosStats className="text-lg" />,
      link: "/statistic",
    },
  ];
  return (
    <div>
      {menus.map(({ key, Icon, title, link }) => (
        <>
          <button
            onClick={() => onSelectMenu(key, link)}
            className={`w-full flex items-center ${
              key == selectedMenu ? "border-l-2 border-white" : ""
            } text-white text-xs px-4 py-3`}
          >
            {Icon}
            <p className="p-0 m-0 ml-4">{title}</p>
          </button>
        </>
      ))}
    </div>
  );
};
export default SideBar;
