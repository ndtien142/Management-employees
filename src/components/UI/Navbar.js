import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ variantButton }) {
  return (
    <AppBar position="static" sx={{ mb: 5 }}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h5" sx={{ flexGrow: 1 }} align="left">
          Management Employees
        </Typography>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Button
            color="inherit"
            variant={variantButton === "home" ? "outlined" : "standard"}
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
            variant={variantButton === "create" ? "outlined" : "standard"}
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
