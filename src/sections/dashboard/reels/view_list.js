import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

const ViewsList = () => {
  return (
    <>
      <Grid container spacing={2}>
        {[...Array(9)].map((elem, index) => {
          return (
            <Grid key={index} item md={12} sm={12} xs={12}>
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
                
                <ListItem >
                  {index + 1}. {Math.floor(Math.random() * 100)} Views
                </ListItem>
              </List>
              <Divider />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ViewsList;
