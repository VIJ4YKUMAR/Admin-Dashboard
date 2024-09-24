import React from "react";
import Stack from "@mui/material/Stack";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import "../Geographies/geography.css";
import { Typography } from "@mui/material";

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
    <Stack width={160}>
      <Stack direction="row" justifyContent="space-between">
        <Typography>{item.place}</Typography>
        <Typography>{item.revenue}K</Typography>
      </Stack>
      <progress className="progress-bar" value={item.value} max="100"></progress>
    </Stack>
  );
};

const RevenueMap = () => {
  return (
    <Stack className="revenue-map" textAlign="left" gap={3}>
      <Typography fontSize="14px" fontWeight="600" sx={{ paddingLeft: "15px" }}>Revenue by Location</Typography>
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
      <Stack gap={1} alignItems="center">
        {
          revenueData.map((data) => (
            <ProgressBar key={data.place} item={data} />
          ))
        }
      </Stack>
    </Stack>
  );
};

export default RevenueMap;