import React from "react";
import Chart from "react-apexcharts";

export default function Donut() {
  const state = {
    options: {
      labels: ["Equipos", "Local", "Tramites", "Patente"],
      legend: {
        position: "top",
      },
    },
    series: [44, 55, 41, 17],
  };

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        width="350"
      />
    </div>
  );
}
