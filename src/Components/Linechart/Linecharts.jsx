import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { useTheme } from "@mui/material";
import "../Linechart/linecharts.css";

const Linechart = () => {
  const chartRef = useRef(null);
  const theme = useTheme();

  const colorMapping = {
    "Current Week $58,211": "#A8C5DA",
    "Previous Week $68,768": "#1C1C1C",
  };

  const seriesData = [
    {
      name: "Current Week $58,211",
      data: [18, 21, 9, 22, 17, 21],
    },
    {
      name: "Previous Week $68,768",
      data: [21, 2, 22, 9, 29, 27],
    },
  ];

  useEffect(() => {
    const data = {
      chart: {
        height: "100%",
        width: "100%",
        type: "line",
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        background: "transparent",
      },
      legend: {
        show: true,
        posiion: "top",
      },
      forecastDataPoints: {
        count: 2,
      },
      series: seriesData,
      stroke: {
        width: 3,
        curve: "smooth",
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
        },
        tickAmount: 3,
        min: 0,
        max: 30,
      },
      theme: {
        mode: theme.palette.mode,
      },
      tooltip: {
        theme: theme.palette.mode,
      },
      title: {
        text: "Revenue",
        align: "left",
        style: {
          fontSize: "14px",
          fontWeight: "600",
        },
      },
    };

    const chart = new ApexCharts(chartRef.current, data);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [theme]);

  return <div style={{ background: theme.palette.background.secondary }} ref={chartRef} id="linechart"></div>;
};

export default Linechart;
