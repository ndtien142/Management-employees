import { Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/UI/Navbar";

function Home() {
  return (
    <Container>
      <Navbar></Navbar>
      <Typography mt={5}>This is home page</Typography>
    </Container>
  );
}

export default Home;
