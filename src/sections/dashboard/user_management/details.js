import { DragDrop, TextBox } from "@/components/form";
import Label from "@/components/label";
import { Grid, Typography } from "@mui/material";
import React from "react";

const UserManagementDetailSection = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={4} md={4} sm={4} xs={6}>
        <Typography variant="h6" component="h6">
          User Name
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={8} xs={6}>
        Snow Jon
      </Grid>
      <Grid item lg={4} md={4} sm={4} xs={6}>
        <Typography variant="h6" component="h6">
          Email
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={8} xs={6}>
        snowjon@gmail.com
      </Grid>
      <Grid item lg={4} md={4} sm={4} xs={6}>
        <Typography variant="h6" component="h6">
          Role
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={8} xs={6}>
        Admin
      </Grid>
      <Grid item lg={4} md={4} sm={4} xs={6}>
        <Typography variant="h6" component="h6">
          Status
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={8} xs={6}>
        <Label variant="soft" color={"error"}>
          Active
        </Label>
      </Grid>
      <Grid item lg={4} md={4} sm={4} xs={6}>
        <Typography variant="h6" component="h6">
        App Use Time
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={8} xs={6}>
       2
      </Grid>
      <Grid item lg={4} md={4} sm={4} xs={6}>
        <Typography variant="h6" component="h6">
        Connection
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={8} xs={6}>
       2
      </Grid>
      <Grid item lg={4} md={4} sm={4} xs={6}>
        <Typography variant="h6" component="h6">
        Contact Number
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={8} xs={6}>
       28985625333
      </Grid>
    </Grid>
  );
};

export default UserManagementDetailSection;
