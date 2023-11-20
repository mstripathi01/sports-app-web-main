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

const CommentsList = () => {
  return (
    <>
      <Grid container spacing={2}>
        {[...Array(9)].map((elem, index) => {
          return (
            <Grid key={index} item md={12} sm={12} xs={12}>
              <List>
                <ListItem>
                  {index + 1}. cccf{Math.floor(Math.random() * 200)}{" "}
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

export default CommentsList;
