import React, { useContext } from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EmployeeContext from "../../context/EmployeeContext";
import EmployeeModal from "./EmployeeModal";

function CardEmployee({ employee }) {
  const { deleteEmployee } = useContext(EmployeeContext);
  const stringAvatar = (name) => {
    return { children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}` };
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Avatar
        sx={{ bgcolor: "green", m: 1 }}
        {...stringAvatar(employee.name)}
      />
      <CardHeader
        title={employee.name}
        action={
          <IconButton
            onClick={() => {
              deleteEmployee(employee.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent
        paragraph
        align="justify"
        sx={{
          my: 0,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography>{employee.details}</Typography>
        <EmployeeModal employee={employee}></EmployeeModal>
      </CardContent>
    </Card>
  );
}

export default CardEmployee;
