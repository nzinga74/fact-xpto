import Chart from "react-apexcharts";

const ColumnChart = () => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    colors: ["#FF9800"],

    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
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
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height={"350px"}
      />
    </>
  );
};
export default ColumnChart;
