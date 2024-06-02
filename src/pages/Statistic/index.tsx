import { LuListMusic } from "react-icons/lu";
import StatisticCard from "../../components/StatisticCard";
import ColumnChart from "../../components/Charts/ColumnChart";
import PieChart from "../../components/Charts/PieChart";
import AreaChart from "../../components/Charts/AreaChart";

const Statistic = () => {
  return (
    <>
      <div className="flex space-x-2 grid grid-cols-4">
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
      </div>

      <div className="bg-c-gray-200 p-4 mt-4 rounded">
        <ColumnChart />
      </div>

      <div className="flex mt-4 space-x-3">
        <div className="w-2/5 p-4 bg-c-gray-200">
          <PieChart />
        </div>
        <div className="w-3/5 p-4 bg-c-gray-200">
          <AreaChart />
        </div>
      </div>
    </>
  );
};

export default Statistic;
