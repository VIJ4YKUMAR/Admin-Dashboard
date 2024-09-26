import React from "react";
import { Typography, Stack, Grid } from "@mui/material";
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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Ecommerce />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Barchart />
        </Grid>
        <Grid item xs={12} md={9} lg={9} xl={9}>
          <Linechart />
        </Grid>
        <Grid item xs={12} md={3} lg={3} xl={3}>
          <RevenueMap />
        </Grid>
        <Grid item xs={12} md={9} lg={9} xl={9}>
          <TopSellingProducts />
        </Grid>
        <Grid item xs={12} md={3} lg={3} xl={3}>
          <TotalSaleChart />
        </Grid>
      </Grid>
    </Layout>
  )
};

export default HomePage;