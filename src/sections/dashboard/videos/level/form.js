import { TextBox } from "@/components/form";
import DragDrop from "@/components/form/dragDrop";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import React from "react";

const VideoLevelFormSection = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Title"
          name="title"
          value={formik?.values?.title}
          onChange={(e) => {
            formik.setFieldValue("title", e.target.value.trimStart());
          }}
          error={formik.touched.title && formik.errors.title}
          helperText={formik.touched.title && formik.errors.title}
          required
        />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography fontSize={12} mb={0.5}>
          Background Video
        </Typography>
        <DragDrop
          fullWidth={true}
          title="Background Video"
          label="Upload or Drop a Video file right here"
          name={`bg_file`}
          url="api/upload/image"
          value={formik.values.bg_file}
          onChange={(e) => {
            formik.setFieldValue(`bg_file`, e);
          }}
        />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Weeks"
          name={`title_weeks`}
          value={formik?.values?.title_weeks}
          onChange={(e) => {
            formik.setFieldValue(`title_weeks`, e.target.value.trimStart());
          }}
          error={formik.touched.title_weeks && formik.errors.title_weeks}
          helperText={formik.touched.title_weeks && formik.errors.title_weeks}
          required
        />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Gym Equipments"
          name={`title_gym_equipments`}
          value={formik?.values?.title_gym_equipments}
          onChange={(e) => {
            formik.setFieldValue(
              `title_gym_equipments`,
              e.target.value.trimStart()
            );
          }}
          error={
            formik.touched.title_gym_equipments &&
            formik.errors.title_gym_equipments
          }
          helperText={
            formik.touched.title_gym_equipments &&
            formik.errors.title_gym_equipments
          }
          required
        />
      </Grid>
      {/* <Grid item lg={12} md={12} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Other"
          name={`title_other`}
          value={formik?.values?.title_other}
          onChange={(e) => {
            formik.setFieldValue(`title_other`, e.target.value.trimStart());
          }}
          error={formik.touched.title_other && formik.errors.title_other}
          helperText={formik.touched.title_other && formik.errors.title_other}
        />
      </Grid> */}
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Description"
          name={`title_description`}
          value={formik?.values?.title_description}
          onChange={(e) => {
            formik.setFieldValue(
              `title_description`,
              e.target.value.trimStart()
            );
          }}
          multiline={true}
          rows="3"
          error={
            formik.touched.title_description && formik.errors.title_description
          }
          helperText={
            formik.touched.title_description && formik.errors.title_description
          }
        />
      </Grid>

      
    </Grid>
  );
};

export default VideoLevelFormSection;
