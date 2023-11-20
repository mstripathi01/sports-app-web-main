import Label from "@/components/label";
import { PATH_DASHBOARD } from "@/routes/paths";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const RunningUsersDetail = () => {
  const completedExerciseUrl = `${PATH_DASHBOARD.videos.complete_exercise}`;
  const pendingExerciseUrl = `${PATH_DASHBOARD.videos.pending_exercise}`;
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {[...Array(5)].map((elem, index) => {
            return (
              <Grid item md={6} sm={12} key={index}>
                <Card variant="outlined">
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={5} sm={3}>
                        <Typography>User Name</Typography>
                      </Grid>
                      <Grid item md={1} sm={2}>
                        <Typography>:</Typography>
                      </Grid>
                      <Grid item md={6} sm={7}>
                        <Typography>Snow Man</Typography>
                      </Grid>
                      <Grid item md={5} sm={3}>
                        <Typography>Email</Typography>
                      </Grid>
                      <Grid item md={1} sm={2}>
                        <Typography>:</Typography>
                      </Grid>
                      <Grid item md={6} sm={7}>
                        <Typography>Snow@cisj.com</Typography>
                      </Grid>
                      <Grid item md={5} sm={3}>
                        <Typography>Number</Typography>
                      </Grid>
                      <Grid item md={1} sm={2}>
                        <Typography>:</Typography>
                      </Grid>
                      <Grid item md={6} sm={7}>
                        <Typography>7894561235</Typography>
                      </Grid>
                      <Grid item md={5} sm={3}>
                        <Typography>User id</Typography>
                      </Grid>
                      <Grid item md={1} sm={2}>
                        <Typography>:</Typography>
                      </Grid>
                      <Grid item md={6} sm={7}>
                        <Typography>45</Typography>
                      </Grid>
                      <Grid item md={5} sm={3}>
                        <Typography>Complete Exercise</Typography>
                      </Grid>
                      <Grid item md={1} sm={2}>
                        <Typography>:</Typography>
                      </Grid>
                      <Grid item md={6} sm={7}>
                        <Label
                          color="success"
                          variant="soft"
                          component={Link}
                          href={`${completedExerciseUrl}/${1}`}
                          sx={{ cursor: "pointer", textDecoration: "none" }}
                        >
                          12
                        </Label>
                      </Grid>
                      <Grid item md={5} sm={3}>
                        <Typography>Pending Exercise</Typography>
                      </Grid>
                      <Grid item md={1} sm={2}>
                        <Typography>:</Typography>
                      </Grid>
                      <Grid item md={6} sm={7}>
                        <Label
                          color="success"
                          variant="soft"
                          component={Link}
                          href={`${pendingExerciseUrl}/${1}`}
                          sx={{ cursor: "pointer", textDecoration: "none" }}
                        >
                          24
                        </Label>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default RunningUsersDetail;
