import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";

const SearchBar = ({ inNavbar }) => {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <Stack direction="row" gap={1} alignItems="center" sx={{ textAlign: "center" }}>
      {isMobile ? (
        <>
          <IconButton sx={{ padding: 0, marginBottom: 1 }} onClick={handleExpand}>
            <SearchIcon color="action" />
          </IconButton>

          {expanded && (
            <Paper
              elevation={3}
              sx={{
                position: "fixed",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "90%",
                maxWidth: "600px",
                zIndex: 1300,
                padding: "8px 16px",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Input
                id="searchInput"
                disableUnderline
                placeholder="Search"
                autoFocus
                fullWidth
              />
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Paper>
          )}
        </>
      ) : (
        <>
          <SearchIcon className="searchglass" color="disabled" />
          <Input id="searchInput" disableUnderline placeholder="Search" />
        </>
      )}
    </Stack>
  );
};

export default SearchBar;

