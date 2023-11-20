import { TextBox } from "@/components/form";
import { Grid } from "@mui/material";
import React from "react";

const HelpAndSupportFormSection = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Call Us"
          name="call_us"
          value={formik?.values?.call_us}
          onChange={(e) => {
            formik.setFieldValue("call_us", e.target.value.trimStart());
          }}
          error={formik.touched.call_us && formik.errors.call_us}
          helperText={formik.touched.call_us && formik.errors.call_us}
          required
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Email"
          name="email"
          value={formik?.values?.email}
          onChange={(e) => {
            formik.setFieldValue("email", e.target.value.trimStart());
          }}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
          required
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Receiver Recover Email"
          name="receiver_recover_email"
          value={formik?.values?.receiver_recover_email}
          onChange={(e) => {
            formik.setFieldValue("receiver_recover_email", e.target.value.trimStart());
          }}
          error={formik.touched.receiver_recover_email && formik.errors.receiver_recover_email}
          helperText={formik.touched.receiver_recover_email && formik.errors.receiver_recover_email}
          required
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Address"
          name="address"
          value={formik?.values?.address}
          onChange={(e) => {
            formik.setFieldValue("address", e.target.value.trimStart());
          }}
          error={formik.touched.address && formik.errors.address}
          helperText={formik.touched.address && formik.errors.address}
          required
        />
      </Grid>
    </Grid>
  );
};

export default HelpAndSupportFormSection;
