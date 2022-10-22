import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useContext } from "react";
import CardEmployee from "../components/UI/Card";
import Navbar from "../components/UI/Navbar";
import EmployeeContext from "../context/EmployeeContext";

function Home() {
  const { employees } = useContext(EmployeeContext);

  return (
    <Fragment>
      <Navbar variantButton="home"></Navbar>
      <Container>
        <Box>
          <Typography mt={2} variant="h3" align="center">
            All employees in your company
          </Typography>
          <Grid container p={5} spacing={2}>
            {employees &&
              employees.map((employee) => {
                return (
                  <Grid item key={employee.id} xs={4}>
                    <CardEmployee employee={employee} />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
}

export default Home;
