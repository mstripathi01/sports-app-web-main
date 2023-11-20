import { Box, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";

const CompleteExerciseVideo = () => {
  return (
    <>
     <Grid container spacing={2}>
        {[...Array(9)].map((elem, index) => {
          return (
            <Grid key={index} item md={4} sm={6} xs={12}>
              <List>
                <video
                  width="250"
                  height="150"
                  controls={false}
                  autoPlay={true}
                  muted
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
               
              </List>
              <Divider />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CompleteExerciseVideo;
