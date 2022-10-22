import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CardEmployee from "../components/UI/Card";
import Navbar from "../components/UI/Navbar";

function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/employees");
      const responseJson = await response.json();

      setEmployees(responseJson);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Navbar></Navbar>
      <Box>
        <Typography mt={5}>This is home page</Typography>
        <Grid container p={5} rowGap={5} columnGap={2} alignItems="stretch">
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
  );
}

export default Home;
