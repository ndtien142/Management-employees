import {
  Container,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import CardEmployee from "../components/UI/Card";
import Navbar from "../components/UI/Navbar";
import EmployeeContext from "../context/EmployeeContext";

function Home() {
  const { employees } = useContext(EmployeeContext);
  const [mode, setMode] = useState("light");
  const customerTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={customerTheme}>
      <Navbar
        variantButton="home"
        changeMode={(data) => setMode(data)}
        mode={mode}
      ></Navbar>
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
    </ThemeProvider>
  );
}

export default Home;
