import React from "react";
import { Line } from "react-chartjs-2"; // Assuming you're using react-chartjs-2
import PropTypes from "prop-types";

const LineChart = ({ data }) => {
  // Define the chart data and options
  const chartData = {
    labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6"],
    datasets: [
      {
        label: "Data",
        data: data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
};

LineChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default LineChart;
