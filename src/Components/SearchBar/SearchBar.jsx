import React from "react";
import Stack from '@mui/material/Stack';
import Input from "@mui/material/Input";
import "../SearchBar/searchbar.css";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';

const SearchBar = ({ inNavbar }) => {
  return (
    <Stack id="searchbar" direction="row" gap={1} sx={{ textAlign: "center" }}>
      <SearchIcon className="searchglass" color="disabled" />
      <Input id="searchInput" disableUnderline placeholder="Search" />
      {inNavbar ?
        <Stack className="command-icon" direction="row" textAlign="center">
          <KeyboardCommandKeyIcon fontSize="small" /> /
        </Stack> : <></>
      }
    </Stack>
  );
};

export default SearchBar;