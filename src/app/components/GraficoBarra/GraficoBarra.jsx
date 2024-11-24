import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import constants from "@/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const GraficoBarra = ({ chartLabels, chartData, title }) => {
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Qtde.",
        data: chartData,
        backgroundColor: constants.charts.backgroundColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  return (
    <div style={{ width: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraficoBarra;
