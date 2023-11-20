import { TextBox } from "@/components/form";
import DragDrop from "@/components/form/dragDrop";
import SelectBox from "@/components/form/select";
import {
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";

import React from "react";

const LevelExerciseFormSection = ({ formik }) => {
  const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const levels = [
    {
      label: "Level 1",
      value: "level1",
    },
    {
      label: "Level 2",
      value: "level2",
    },
    {
      label: "Level 3",
      value: "level3",
    },
  ];
  return (
    <Grid container spacing={2}>
    <Grid item lg={12} md={12} sm={12} xs={12}>
    <FormControl sx={{ width: "100%" }}>
    <Typography fontSize={12}>Select levels</Typography>

        <Select
          multiple
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={levels}
        >
          {levels.map((name,index) => (
            <MenuItem key={index} value={name.label}>
              <Checkbox checked={personName.indexOf(name.label) > -1} />
              <ListItemText primary={name.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
     
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
        <Typography fontSize={12} mb={0.5}>
          Upload Video
        </Typography>
        <DragDrop
          fullWidth={true}
          title="Upload Video"
          label="Upload or Drop a Video file right here"
          name={`upload_file`}
          url="api/upload/image"
          value={formik.values.upload_file}
          onChange={(e) => {
            formik.setFieldValue(`upload_file`, e);
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

export default LevelExerciseFormSection;
