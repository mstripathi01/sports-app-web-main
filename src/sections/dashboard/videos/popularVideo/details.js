import { DragDrop, TextBox } from "@/components/form";
import Label from "@/components/label";
import { Grid, Typography } from "@mui/material";
import React from "react";

const VideoDetailSection = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={4} md={4} sm={4} xs={6}>
        <Typography variant="h6" component="h6">
          Title
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={8} xs={6}>
        Snow Jon
      </Grid>
      <Grid item lg={4} md={4} sm={4} xs={6}>
        <Typography variant="h6" component="h6">
          Description
        </Typography>
      </Grid>
      <Grid item lg={8} md={8} sm={8} xs={6}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry{"'"}s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Grid>
    </Grid>
  );
};

export default VideoDetailSection;
