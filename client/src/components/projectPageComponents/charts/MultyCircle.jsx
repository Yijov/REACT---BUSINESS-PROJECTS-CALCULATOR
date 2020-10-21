import React from "react";
import Chart from "react-apexcharts";

export default function MultyCircle({ assets }) {
  let seriesArray = [];
  let labelsArray = [];
  assets.items.forEach((asetObject) => {
    seriesArray.push(
      ((asetObject.totalCost / assets.assetsTotalAmount) * 100).toFixed(2) //% of every asset cost in respec to the total
    );
    labelsArray.push(asetObject.name);
  });

  //in case values are more then 5 , reduce aoutput to 6 results (the fisst 5 biggest values and 1 value for others) to

  if (seriesArray.length > 5) {
    let assetsToDisplay = assets.items.sort(function (a, b) {
      return b.totalCost - a.totalCost;
    });

    let firstFiveValues = [];
    let firstFiveNames = [];

    for (let i = 0; i < 5; i++) {
      firstFiveValues.push(
        (
          (assetsToDisplay[i].totalCost / assets.assetsTotalAmount) *
          100
        ).toFixed(2)
      );
      firstFiveNames.push(assetsToDisplay[i].name);
    }
    let others =
      (assetsToDisplay
        .splice(5)
        .reduce((total, object) => total + object.totalCost, 0) /
        assets.assetsTotalAmount) *
      100;
    seriesArray = [...firstFiveValues, others.toFixed(2)];
    labelsArray = [...firstFiveNames, "Others"];
  }

  const state = {
    series: seriesArray,
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
                return "$" + assets.assetsTotalAmount;
              },
            },
          },
        },
      },
      labels: labelsArray,
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
