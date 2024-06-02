import Chart from "react-apexcharts";

const PieChart = () => {
  const options = {
    labels: ["Apple", "Mango", "Orange", "Watermelon"],
    legend: {
      show: false,
    },
    stroke: {
      colors: ["#000"],
    },
  };
  const series = [44, 55, 13, 33];
  return (
    <>
      <Chart options={options} type="donut" series={series} width={"100%"} />
    </>
  );
};

export default PieChart;
