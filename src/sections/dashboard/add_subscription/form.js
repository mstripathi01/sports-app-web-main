import { TextBox } from "@/components/form";
import SelectBox from "@/components/form/select";
import { Grid } from "@mui/material";
import React from "react";

const AddSubscriptionFormSection = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Plan Name"
          name="plan_name"
          value={formik?.values?.plan_name}
          onChange={(e) => {
            formik.setFieldValue("plan_name", e.target.value.trimStart());
          }}
          error={formik.touched.plan_name && formik.errors.plan_name}
          helperText={formik.touched.plan_name && formik.errors.plan_name}
          required
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Plan Price"
          name="plan_price"
          value={formik?.values?.plan_price}
          onChange={formik.handleChange}
          error={formik.touched.plan_price && formik.errors.plan_price}
          helperText={formik.touched.plan_price && formik.errors.plan_price}
          required
        />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Plan Duration"
          name="plan_duration"
          value={formik?.values?.plan_duration}
          onChange={formik.handleChange}
          error={formik.touched.plan_duration && formik.errors.plan_duration}
          helperText={
            formik.touched.plan_duration && formik.errors.plan_duration
          }
          required
        />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <TextBox
          fullWidth
          multiline
          rows={4}
          label="Plan Description"
          name="plan_description"
          value={formik?.values?.plan_description}
          onChange={formik.handleChange}
          error={
            formik.touched.plan_description && formik.errors.plan_description
          }
          helperText={
            formik.touched.plan_description && formik.errors.plan_description
          }
          required
        />
      </Grid>
    </Grid>
  );
};

export default AddSubscriptionFormSection;
