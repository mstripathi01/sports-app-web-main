import Label from "@/components/label";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const CompleteUsersDetail = () => {
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

export default CompleteUsersDetail;
