import React from "react";

import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import "../InfoCards/infoCards.css";

const InfoCards = ({ item }) => {

  const { bgColor, infoName, infoDetail, infoGrowth, hasRisen } = item;

  return (
    <Stack sx={{ backgroundColor: bgColor }} className="info-container" gap={3}>
      <Typography fontSize="14px" fontWeight="600">{infoName}</Typography>
      <Stack direction="row" gap={3}>
        <Typography fontSize="24px" fontWeight="600">{infoDetail}</Typography>
        <Typography bgcolor="none">
          {infoGrowth}
          {
            hasRisen ? <TrendingUpIcon /> : <TrendingDownIcon />
          }
        </Typography>
      </Stack>

    </Stack>
  );
};

export default InfoCards;