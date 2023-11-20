import { TextBox } from "@/components/form";
import { Grid } from "@mui/material";
import React from "react";

const InfluencerFormSection = ({ formik }) => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="User Name"
          name="user_name"
          value={formik?.values?.user_name}
          onChange={(e) => {
            formik.setFieldValue("user_name", e.target.value.trimStart());
          }}
          error={formik.touched.user_name && formik.errors.user_name}
          helperText={formik.touched.user_name && formik.errors.user_name}
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
          label="Phone Number"
          name="phone_number"
          value={formik?.values?.phone_number}
          onChange={(e) => {
            formik.setFieldValue("phone_number", e.target.value.trimStart());
          }}
          error={formik.touched.phone_number && formik.errors.phone_number}
          helperText={formik.touched.phone_number && formik.errors.phone_number}
          required
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Rank"
          name="rank"
          value={formik?.values?.rank}
          onChange={(e) => {
            formik.setFieldValue("rank", e.target.value.trimStart());
          }}
          error={formik.touched.rank && formik.errors.rank}
          helperText={formik.touched.rank && formik.errors.rank}
          required
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Avg. Score"
          name="avg_score"
          value={formik?.values?.avg_score}
          onChange={(e) => {
            formik.setFieldValue("avg_score", e.target.value.trimStart());
          }}
          error={formik.touched.avg_score && formik.errors.avg_score}
          helperText={formik.touched.avg_score && formik.errors.avg_score}
          required
        />
      </Grid>
    </Grid>
  );
};

export default InfluencerFormSection;
