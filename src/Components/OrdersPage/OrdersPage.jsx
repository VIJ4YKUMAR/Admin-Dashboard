import React from "react";
import { Typography, Stack, Grid } from "@mui/material";
import Layout from "../Layout/Layout";

import OrderTable from "../OrderLists/OrderListsTable";

const OrdersPage = () => {
  return (
    <Layout>
      <Grid container sx={{ height: '100%', width: '100%', marginBottom: "100px" }}>
        <Grid item xs={12} sx={{ height: '100%', width: '100%' }} >
          <OrderTable />
        </Grid>
      </Grid>
    </Layout>
  )
};

export default OrdersPage;