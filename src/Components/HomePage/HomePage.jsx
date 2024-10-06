import React from "react";
import { Typography, Stack, Grid, Box } from "@mui/material";
import Ecommerce from "../Ecommerce/Ecommerce";
import Barchart from "../BarChart/Barcharts";
import Linechart from "../Linechart/Linecharts";
import RevenueMap from "../Geographies/Geography";
import TopSellingProducts from "../TopSellingProducts/TopSellingProducts";
import TotalSaleChart from "../TotalSales/TotalSaleChart";
import Layout from "../Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Box>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Ecommerce />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Barchart />
          </Grid>
          <Grid item xs={12} md={9} lg={5} xl={6}>
            <Linechart />
          </Grid>
          <Grid item xs={12} md={3} lg={3} xl={2}>
            <RevenueMap />
          </Grid>
          <Grid item xs={12} md={8} lg={5} xl={6}>
            <TopSellingProducts />
          </Grid>
          <Grid item xs={12} md={4} lg={3} xl={2}>
            <TotalSaleChart />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
};

export default HomePage;