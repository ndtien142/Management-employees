import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h5" sx={{ flexGrow: 1 }} align="left">
          Management Employees
        </Typography>
        <Button color="inherit" variant="outlined">
          Home
        </Button>
        <Button color="inherit">Create</Button>
        <Button color="inherit">Edit</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
