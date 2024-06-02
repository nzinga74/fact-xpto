import Chart from "react-apexcharts";

const AreaChart = () => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    curve: "smooth",
    colors: ["#FF9800"],

    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    tools: {
      download: false,
      selection: false,
      zoom: false,
      zoomin: false,
      zoomout: false,
      pan: false,
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];
  return (
    <>
      <Chart options={options} series={series} type="area" width="100%" />
    </>
  );
};
export default AreaChart;
