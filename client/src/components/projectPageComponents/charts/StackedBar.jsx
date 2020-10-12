import React from "react";
import Chart from "react-apexcharts";

export default function StackedBar() {
  const state = {
    series: [
      {
        name: "Sales",
        data: [190000, 0],
      },
      {
        name: "Taxes",
        data: [0, 12000],
      },
      {
        name: "Fixed Cost",
        data: [0, 50000],
      },
      {
        name: "Sales Cost",
        data: [0, 80000],
      },
      {
        name: "Net Income",
        data: [0, 0, 80000],
      },
    ],
    options: {
      chart: {
        type: "bar",
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },

      xaxis: {
        categories: ["Income", "Expense", "Net Income"],
        labels: {
          formatter: function (val) {
            return null;
          },
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$RD" + val;
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 50,
      },
    },
  };

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="500"
        height="200"
      />
    </div>
  );
}
