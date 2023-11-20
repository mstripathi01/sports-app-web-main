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

const SharesList = () => {
  return (
    <>
      <Grid container spacing={2}>
        {[...Array(9)].map((elem, index) => {
          return (
            <Grid key={index} item md={6} sm={12} xs={12}>
              <List>
                <ListItem>
                  {index + 1}. cccf{Math.floor(Math.random() * 200)}dd
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

export default SharesList;
