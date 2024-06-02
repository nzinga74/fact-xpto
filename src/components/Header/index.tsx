import Logo from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";
const Header = () => {
  return (
    <>
      <div className=" bg-c-blue-100">
        <div className="py-4 shadow-lg  ">
          <div className="px-11 flex justify-between ">
            <div className="flex items-center">
              <div className="bg-c-gray-400 shadow-md w-10 h-10 rounded-full flex justify-center items-center">
                <img src={Logo} />
              </div>
              <div className="ml-14 rounded-full bg-c-gray-400 py-3 px-9">
                <input
                  className="bg-c-gray-400 text-lt w-64 outline-none text-c-gray-300"
                  placeholder="Pesquisa artistas, músicas, albuns"
                />
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-white text-sm ">nzingaantonio</button>
              <div className="w-11 h-11 flex justify-center items-center rounded-full ml-4 border-white border">
                <img src={Avatar} className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
