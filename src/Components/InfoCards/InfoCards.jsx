import React from "react";

import { Stack, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import "../InfoCards/infoCards.css";

const InfoCards = ({ item }) => {
  const theme = useTheme();

  const { bgColor, infoName, infoDetail, infoGrowth, hasRisen } = item;

  return (
    <Stack
      sx={{
        backgroundColor: bgColor,
        [theme.breakpoints.down("sm")]: {
          padding: "12px",
        },
      }}
      className="info-container"
      gap={1}
    >
      <Typography fontSize={{ xs: "12px", sm: "14px", lg: "16px" }} fontWeight="600">
        {infoName}
      </Typography>
      <Stack direction="row" gap={2}>
        <Typography fontSize={{ xs: "18px", sm: "18px", lg: "16px" }} fontWeight="600">
          {infoDetail}
        </Typography>
        <Typography bgcolor="none">
          {infoGrowth}
          {hasRisen ? (
            <TrendingUpIcon
              sx={{
                fontSize: { xs: "18px", sm: "24px", lg: "16px" },
              }}
            />
          ) : (
            <TrendingDownIcon
              sx={{
                fontSize: { xs: "18px", sm: "24px", lg: "16px" },
              }}
            />
          )}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default InfoCards;
