import { AppBar, Button, Switch, Toolbar, Typography } from "@mui/material";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const handleSwitchMode = () => {
    let mode = props.mode;
    console.log(mode + "From");
    props.changeMode(mode === "light" ? "dark" : "light");
  };
  return (
    <AppBar position="static" sx={{ mb: 5 }}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h5" sx={{ flexGrow: 1 }} align="left">
          Management Employees
        </Typography>
        <Button startIcon={<Brightness6Icon />} color="inherit" sx={{ mr: 5 }}>
          <Switch onClick={handleSwitchMode} />
          Dark Mode
        </Button>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Button
            color="inherit"
            variant={props.variantButton === "home" ? "outlined" : "standard"}
          >
            Home
          </Button>
        </Link>
        <Link
          to="/create-user"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Button
            color="inherit"
            variant={props.variantButton === "create" ? "outlined" : "standard"}
          >
            Create
          </Button>
        </Link>
        <Button color="inherit">Edit</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
