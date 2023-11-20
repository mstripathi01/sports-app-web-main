import { TextBox } from "@/components/form";
import DragDrop from "@/components/form/dragDrop";
import { Grid, Typography } from "@mui/material";
import React from "react";

const ReelsFormSection = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <DragDrop
          fullWidth={true}
          title="Image"
          label="Upload or Drop a Video file right here"
          name="file"
          url="api/upload/image"
          value={formik.values.file}
          onChange={(e) => {
            formik.setFieldValue("file", e);
          }}
        />
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Description"
          name="description"
          value={formik?.values?.description}
          onChange={(e) => {
            formik.setFieldValue("description", e.target.value.trimStart());
          }}
          multiline={true}
          rows="3"
          error={formik.touched.description && formik.errors.description}
          helperText={formik.touched.description && formik.errors.description}
        />
      </Grid>
    </Grid>
  );
};

export default ReelsFormSection;
