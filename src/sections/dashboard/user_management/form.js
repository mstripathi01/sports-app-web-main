import { TextBox } from "@/components/form";
import SelectBox from "@/components/form/select";
import { Grid } from "@mui/material";
import React from "react";

const UserManagementFormSection = ({ formik }) => {
  const status = [
    {
      value: "active",
      label: "Active",
    },
    {
      value: "inactive",
      label: "InActive",
    },
    // {
    //   value: "about_to_end",
    //   label: "About to end",
    // },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Name"
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
          onChange={formik.handleChange}
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
          onChange={formik.handleChange}
          error={formik.touched.phone_number && formik.errors.phone_number}
          helperText={formik.touched.phone_number && formik.errors.phone_number}
          required
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <SelectBox
          fullWidth
          label="Status"
          name="status"
          options={status}
          value={formik?.values?.status}
          onChange={formik.handleChange}
          error={formik.touched.status && formik.errors.status}
          helperText={formik.touched.status && formik.errors.status}
          required
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
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
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Description"
          name="description"
          value={formik?.values?.description}
          onChange={(e) => {
            formik.setFieldValue("description", e.target.value.trimStart());
          }}
          error={formik.touched.description && formik.errors.description}
          helperText={formik.touched.description && formik.errors.description}
          required
        />
      </Grid>
    </Grid>
  );
};

export default UserManagementFormSection;
