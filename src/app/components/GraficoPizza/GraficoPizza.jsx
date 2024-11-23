import React from "react";
import { Pie } from "react-chartjs-2";
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

const GraficoPizza = ({ chartLabels, chartData, title }) => {
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
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default GraficoPizza;
