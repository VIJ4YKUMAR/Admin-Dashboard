import React from "react";

import InfoCards from "../InfoCards/InfoCards";
import Grid from "@mui/material/Grid";
import { Stack, Typography, useTheme } from "@mui/material";

import { Link } from 'react-router-dom';


const Ecommerce = () => {
  const theme = useTheme();
  const themeMode = theme?.palette?.mode;

  const ecommerceData = [
    {
      bgColor: "#E3F5FF",
      infoName: "Customers",
      infoDetail: "3,781",
      infoGrowth: "+11.01%",
      hasRisen: true,
      textColor: "black"
    },
    {
      bgColor: themeMode == "light" ? "#F7F9FB" : "#404040",
      infoName: "Orders",
      infoDetail: "1219",
      infoGrowth: "-0.03%",
      hasRisen: false,
      textColor: ""
    },
    {
      bgColor: themeMode == "light" ? "#F7F9FB" : "#404040",
      infoName: "Revenue",
      infoDetail: "$695",
      infoGrowth: "+15.03%",
      hasRisen: true,
      textColor: ""
    },
    {
      bgColor: "#E5ECF6",
      infoName: "Growth",
      infoDetail: "30.1%",
      infoGrowth: "+6.08%",
      hasRisen: true,
      textColor: "black",
    }
  ]

  return (
    <Stack textAlign="left" gap={4} sx={{ marginBottom: "30px" }}>
      <Typography color="text.primary" fontWeight="600">eCommerce</Typography>
      < Grid
        maxWidth={600}
        container
        spacing={4}
        wrap="wrap"
        alignSelf="center"
      >
        {
          ecommerceData.map((item) => (
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={item.infoName}>
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