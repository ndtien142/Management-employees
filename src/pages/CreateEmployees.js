import {
  Button,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Snackbar,
  Alert,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useContext, useState } from "react";
import { Box } from "@mui/system";
import Navbar from "../components/UI/Navbar";
import EmployeeContext from "../context/EmployeeContext";

const initialState = {
  name: "",
  details: "",
  type: "",
  gender: "",
};

function CreateEmployees() {
  const [employee, setEmployee] = useState(initialState);
  const [nameError, setNameError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const { createEmployee } = useContext(EmployeeContext);
  const [snackbar, setSnackbar] = useState(false);

  const [mode, setMode] = useState("light");
  const customerTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, details, gender, type } = employee;
    console.log(employee);
    if (name && details && gender && type) {
      console.log(name, details);
      createEmployee({ name, details, gender, type });
      setEmployee(initialState);
      setSnackbar(true);
      setNameError(false);
      detailsError(false);
    }
    if (name === "" || name.trim().length === 0) {
      setNameError(true);
    }
    if (details === "" || details.trim().length === 0) {
      setDetailsError(true);
    }
  };
  const handleCloseSnackbar = () => {
    setSnackbar(false);
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    if (name === "name") {
      setNameError(false);
    } else {
      setDetailsError(false);
    }
    if (name && value) {
      setEmployee({
        ...employee,
        [name]: value,
      });
    }
  };
  return (
    <ThemeProvider theme={customerTheme}>
      <Navbar
        variantButton="create"
        changeMode={(data) => setMode(data)}
        mode={mode}
      ></Navbar>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Create a new Employees
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Box sx={{ mb: 5 }}>
            <TextField
              label="Name"
              variant="standard"
              name="name"
              fullWidth
              required
              sx={{ mt: 5 }}
              onChange={handleChangeInput}
              error={nameError}
              value={employee.name}
            />
            <TextField
              label="Details"
              name="details"
              variant="standard"
              fullWidth
              required
              sx={{ mt: 5 }}
              multiline
              rows={3}
              onChange={handleChangeInput}
              value={employee.details}
              error={detailsError}
            />
            <RadioGroup
              row
              value={employee.type}
              onChange={handleChangeInput}
              name="type"
            >
              <FormControlLabel
                value="part-time"
                control={<Radio />}
                label="PartTime"
              />
              <FormControlLabel
                value="fulltime"
                control={<Radio />}
                label="Fulltime"
              />
            </RadioGroup>
            <RadioGroup
              row
              value={employee.gender}
              onChange={handleChangeInput}
              name="gender"
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </Box>
          <Button variant="contained" type="submit" startIcon={<SendIcon />}>
            <Typography variant="span">Submit</Typography>
          </Button>
        </form>
        <Snackbar
          open={snackbar}
          onClose={handleCloseSnackbar}
          autoHideDuration={1500}
        >
          <Alert severity="success">Created new employee successfully!</Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}

export default CreateEmployees;
