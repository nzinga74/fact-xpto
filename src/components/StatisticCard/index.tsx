import { LuListMusic } from "react-icons/lu";

const StatisticCard = () => {
  return (
    <>
      <div className="p-4 bg-c-gray-200 shadow rounded flex items-center justify-between">
        <div>
          <h2 className="text-c-gray-300 text-s">Numero de Música</h2>
          <h2 className="text-white mt-2">45.000</h2>
        </div>
        <div>
          <LuListMusic className="text-c-gray-300 text-xl" />
        </div>
      </div>
    </>
  );
};

export default StatisticCard;
