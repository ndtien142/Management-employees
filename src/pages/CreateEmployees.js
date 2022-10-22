import {
  Button,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { Box } from "@mui/system";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, details } = employee;
    console.log(employee);
    if (name && details) {
      console.log(name, details);
    }
    if (name === "" || name.trim().length === 0) {
      setNameError(true);
    }
    if (details === "" || details.trim().length === 0) {
      setDetailsError(true);
    }
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
              value="full-time"
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
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </Box>
        <Button variant="contained" type="submit" startIcon={<SendIcon />}>
          <Typography variant="span">Submit</Typography>
        </Button>
      </form>
    </Container>
  );
}

export default CreateEmployees;
