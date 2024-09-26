import React from "react";
import { Typography, Stack, Grid, useTheme } from "@mui/material";
import Layout from "../Layout/Layout";

import OrderTable from "../OrderLists/OrderListsTable";

const OrdersPage = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Grid style={{ background: theme.palette.background.default }} container sx={{ marginBottom: "100px" }}>
        <Grid item xs={12} >
          <OrderTable />
        </Grid>
      </Grid>
    </Layout>
  )
};

export default OrdersPage;