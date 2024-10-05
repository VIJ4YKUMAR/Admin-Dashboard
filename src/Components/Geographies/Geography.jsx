import React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import "../Geographies/geography.css";
import { Typography, useTheme } from "@mui/material";

const revenueData = [
  {
    place: "New York",
    revenue: "72",
    value: "72"
  },
  {
    place: "San Fransico",
    revenue: "39",
    value: "39"
  },
  {
    place: "Sydney",
    revenue: "25",
    value: "25"
  },
  {
    place: "Singapore",
    revenue: "61",
    value: "61"
  }
];

const ProgressBar = ({ item }) => {

  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography color="text.primary">{item.place}</Typography>
        <Typography color="text.primary">{item.revenue}K</Typography>
      </Stack>
      <progress className="progress-bar" value={item.value} max="100"></progress>
    </Stack>
  );
};

const RevenueMap = () => {
  const theme = useTheme();

  return (
    <Stack className="revenue-map" sx={{ background: theme.palette.background.secondary }} textAlign="left" gap={3}>
      <Typography fontSize="14px" fontWeight="600" color="text.primary" sx={{ paddingLeft: "15px" }}>Revenue by Location</Typography>
      <ComposableMap>
        <Geographies fill="#c0ddf2" geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Marker coordinates={[-74.006, 40.7128]}>
          <circle r={8} fill="#000" />
        </Marker>
        <Marker coordinates={[-122.4194, 37.7749]}>
          <circle r={8} fill="#000" />
        </Marker>
        <Marker coordinates={[151.2093, -33.8688]}>
          <circle r={8} fill="#000" />
        </Marker>
        <Marker coordinates={[103.8198, 1.3521]}>
          <circle r={8} fill="#000" />
        </Marker>
      </ComposableMap>
      <Grid container spacing={2} justifyContent="center">
        {revenueData.map((data) => (
          <Grid item xs={6} sm={5} md={12} lg={12} key={data.place}>
            <ProgressBar item={data} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default RevenueMap;