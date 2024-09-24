import React from "react";

import InfoCards from "../InfoCards/InfoCards";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";

import { Link } from 'react-router-dom';

const ecommerceData = [
  {
    bgColor: "#E3F5FF",
    infoName: "Customers",
    infoDetail: "3,781",
    infoGrowth: "+11.01%",
    hasRisen: true
  },
  {
    bgColor: "#F7F9FB",
    infoName: "Orders",
    infoDetail: "1219",
    infoGrowth: "-0.03%",
    hasRisen: false
  },
  {
    bgColor: "#F7F9FB",
    infoName: "Revenue",
    infoDetail: "$695",
    infoGrowth: "+15.03%",
    hasRisen: true
  },
  {
    bgColor: "#E5ECF6",
    infoName: "Growth",
    infoDetail: "30.1%",
    infoGrowth: "+6.08%",
    hasRisen: true
  }
]

const Ecommerce = () => {
  return (
    <Stack textAlign="left" gap={4} sx={{ marginBottom: "30px" }}>
      <Typography fontWeight="600">eCommerce</Typography>
      < Grid
        maxWidth={600}
        container
        spacing={5}
        wrap="wrap"
      >
        {
          ecommerceData.map((item) => (
            <Grid item xs={6} sm={6} md={4} lg={6} key={item.infoName}>
              {item.infoName === "Orders" ?
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/orders">
                  <InfoCards item={item} />
                </Link>
                :
                <InfoCards item={item} />
              }
            </Grid>
          ))
        }
      </Grid >
    </Stack>
  );
};

export default Ecommerce;