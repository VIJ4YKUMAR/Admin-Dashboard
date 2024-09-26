import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { useTheme } from "@mui/material";

import "../BarChart/barchart.css";

const Barchart = () => {
  const theme = useTheme();

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
        toolbar: {
          show: false
        },
        background: "transparent"
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
          borderRadius: 7,
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: "last",
          columnWidth: "30%"
        },
      },
      colors: seriesData.map(series => colorMapping[series.name]),
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + "M";
          },
          style: {
            colors: [theme.palette.text.primary],
          },
        },
        tickAmount: 7,
        min: 0,
        max: 70,
      },
      title: {
        text: "Projections vs Actuals",
        align: "left"
      },
      theme: {
        mode: theme.palette.mode,
      },
      tooltip: {
        theme: theme.palette.mode,
      },
      legend: {
        show: false,
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
    <div style={{ background: theme.palette.background.secondary }} ref={chartRef} id="barchart"></div>
  );
};

export default Barchart;
