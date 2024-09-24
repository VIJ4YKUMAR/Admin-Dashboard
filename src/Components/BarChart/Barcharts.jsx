import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

import "../BarChart/barchart.css";

const Barchart = () => {

  const chartRef = useRef(null);

  useEffect(() => {

    const colorMapping = {
      Projections: "#6c91ac",
      Actuals: "#c0ddf2",
    };

    const seriesData = [
      {
        name: "Projections",
        data: [18, 21, 19, 22, 17, 21]
      },
      {
        name: "Actuals",
        data: [21, 27, 22, 29, 19, 27]
      }
    ];

    const data = {
      series: seriesData,
      chart: {
        type: "bar",
        height: 300,
        width: 550,
        stacked: true,
        stackedType: "100%",
      },
      responsive: [{
        breakpoint: 480,
      }],
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
        },
      },
      colors: seriesData.map(series => colorMapping[series.name]),
      xaxis: {
        title: {
          text: "Months"
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      yaxis: {
        title: {
          text: "Revenue",
        },
        labels: {
          formatter: function (value) {
            return value + "M";
          },
          style: {
            colors: ['#000'],
          },
        },
        tickAmount: 7,
        min: 0,
        max: 70,
      },
      fill: {
        opacity: 1
      }
    };
    const chart = new ApexCharts(document.querySelector("#barchart"), data);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div ref={chartRef} id="barchart"></div>
  );
};

export default Barchart;
