import React, { useState, useEffect } from "react";
import GraficoBarra from "../GraficoBarra";
import axios from "axios";
import constants from "@/constants";

const GraficoInsigniasConquistadas = () => {
  const [chartData, setChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);
  console.log("out");
  useEffect(() => {
    console.log("in");
    axios
      .get(constants.endpoints.insigniasConquistadas)
      .then((response) => {
        console.log(response.data);
        setChartData(response.data.map((insignia) => insignia.quantidade));
        setChartLabels(response.data.map((insignia) => insignia.nome));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <GraficoBarra
        chartData={chartData}
        chartLabels={chartLabels}
        title={"Insígnias conquistadas"}
      />
    </div>
  );
};

export default GraficoInsigniasConquistadas;
