import React from "react";
import Chart from "react-apexcharts";

export default function MultyCircle() {
  const state = {
    series: [44, 55, 67],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249000;
              },
            },
          },
        },
      },
      labels: ["Payroll", "Electric Service", "Internet"],
    },
  };

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={350}
      />
    </div>
  );
}
