import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import "../TotalSales/totalSaleChart.css";
import { List, ListItem, ListItemText, Typography, Stack, useTheme } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const salesData = [
  { name: 'Direct', value: '$300.56', color: '#1C1C1C' },
  { name: 'Affiliate', value: '$135.18', color: '#A5D6A7' },
  { name: 'Sponsored', value: '$154.02', color: '#90CAF9' },
  { name: 'E-mail', value: '$48.96', color: '#FFCDD2' },
];

const SalesList = () => {
  return (
    <List>
      {salesData.map((item, index) => (
        <ListItem key={index} sx={{ padding: "5px 30px", gap: "5px" }}>
          <CircleIcon sx={{ fontSize: "10px" }} style={{ color: item.color }} />
          <ListItemText sx={{ color: "text.primary" }} primary={item.name} />
          <Typography color="text.primary" variant="body2" fontWeight="bold">
            {item.value}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};

const TotalSaleChart = () => {
  const theme = useTheme();

  const chartRef = useRef(null);

  const seriesData = [300.56, 135.18, 154.02, 48.96];

  useEffect(() => {
    var options = {
      series: seriesData,
      chart: {
        type: 'donut',
      },
      colors: ["#1C1C1C", "#BAEDBD", "#95A4FC", "#B1E3FF"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: "100%"
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      }
    };

    var chart = new ApexCharts(document.querySelector("#pie-chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };

  }, []);

  return (
    <Stack sx={{ background: theme.palette.background.secondary }} className="totalsales-chart">
      <Typography color="text.primary" variant="h6" fontWeight="bold" gutterBottom>
        Total Sales
      </Typography>
      <div ref={chartRef} id="pie-chart"></div>
      <SalesList />
    </Stack>
  );
};

export default TotalSaleChart;