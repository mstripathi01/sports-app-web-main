import { TextBox } from "@/components/form";
import { Grid } from "@mui/material";
import React from "react";

const LeaderFormSection = ({ formik }) => {
  return (
    <Grid container spacing={2}>
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
          label="Closed Issues"
          name="closed_issue"
          value={formik?.values?.closed_issue}
          onChange={(e) => {
            formik.setFieldValue("closed_issue", e.target.value.trimStart());
          }}
          error={formik.touched.closed_issue && formik.errors.closed_issue}
          helperText={formik.touched.closed_issue && formik.errors.closed_issue}
          required
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Hours"
          name="hours"
          value={formik?.values?.hours}
          onChange={(e) => {
            formik.setFieldValue("hours", e.target.value.trimStart());
          }}
          error={formik.touched.hours && formik.errors.hours}
          helperText={formik.touched.hours && formik.errors.hours}
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

export default LeaderFormSection;
