import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function CardEmployee({ employee }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader
        title={employee.name}
        action={
          <IconButton>
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent paragraph align="justify">
        <Typography>{employee.details}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardEmployee;
