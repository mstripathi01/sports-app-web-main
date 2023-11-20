import { DateComponent } from "@/components/dataTable/date";
import { TextBox } from "@/components/form";
import DragDrop from "@/components/form/dragDrop";
import { Grid, Typography } from "@mui/material";
import React from "react";


const LearnFormSection = ({ formik }) => {
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
          title="Image"
          label="Upload or Drop a Video file right here"
          name="bg_file"
          url="api/upload/image"
          value={formik.values.bg_file}
          onChange={(e) => {
            formik.setFieldValue("bg_file", e);
          }}
        />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Weeks"
          name="weeks"
          value={formik?.values?.weeks}
          onChange={(e) => {
            formik.setFieldValue("weeks", e.target.value.trimStart());
          }}
          error={formik.touched.weeks && formik.errors.weeks}
          helperText={formik.touched.weeks && formik.errors.weeks}
          required
        />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <TextBox
          fullWidth
          label="Gym Equipments"
          name="gym_equipments"
          value={formik?.values?.gym_equipments}
          onChange={(e) => {
            formik.setFieldValue("gym_equipments", e.target.value.trimStart());
          }}
          error={formik.touched.gym_equipments && formik.errors.gym_equipments}
          helperText={
            formik.touched.gym_equipments && formik.errors.gym_equipments
          }
          required
        />
      </Grid>
      {/* // schedule date  */}
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography fontSize={12} mb={0.5}>
          Schedule Date
        </Typography>
        <TextBox
          fullWidth
          // label="Schedule Date"
          name="schedule_date"
          type="date"
          value={formik?.values?.schedule_date}
          onChange={(e) => {
            formik.setFieldValue("schedule_date", e.target.value.trimStart());
          }}
          error={formik.touched.schedule_date && formik.errors.schedule_date}
          helperText={
            formik.touched.schedule_date && formik.errors.schedule_date
          }
          required
        />
      </Grid>
      {/* <Grid item lg={12} md={12} sm={12} xs={12}>
      <TextBox
        fullWidth
        label="Other"
        name="other"
        value={formik?.values?.other}
        onChange={(e) => {
          formik.setFieldValue("other", e.target.value.trimStart());
        }}
        error={formik.touched.other && formik.errors.other}
        helperText={formik.touched.other && formik.errors.other}
      />
    </Grid> */}
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

export default LearnFormSection;
