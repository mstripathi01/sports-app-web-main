import Iconify from "@/components/iconify";
import Scrollex from "@/components/scrollvideo";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";

const VideoGallery = () => {
  const [open, setOpen] = React.useState(false);
  const [starFav, setStarFav] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        {[...Array(12)].map((elem, index) => {
          return (
            <Grid item md={3} key={index}>
              <Box sx={{ position: "relative", cursor: "pointer" }}>
                <video
                  width="100%"
                  controls={false}
                  autoPlay={true}
                  muted
                  onClick={handleClickOpen}
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Box
                  sx={{
                    position: "absolute",
                    top: 5,
                    left: 10,
                    cursor: "pointer",
                  }}
                >
                  {starFav ? (
                    <Iconify
                      icon="fluent:star-12-filled"
                      color="yellow"
                      onClick={() => setStarFav(false)}
                    />
                  ) : (
                    <Iconify icon="ph:star" onClick={() => setStarFav(true)} />
                  )}
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: 5,
                    right: 10,
                    cursor: "pointer",
                  }}
                >
                  <IconButton
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    onClick={handleClickMenu}
                  >
                    <Iconify icon="eva:more-vertical-fill" />
                  </IconButton>
                  <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={openMenu}
                    onClose={handleCloseMenu}
                    TransitionComponent={Fade}
                    sx={{
                      "& .MuiPaper-root": {
                        boxShadow: "none",
                      },
                    }}
                  >
                    <MenuItem onClick={handleCloseMenu}>Active</MenuItem>
                    <MenuItem onClick={handleCloseMenu}>Inactive</MenuItem>
                  </Menu>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box>
        <Dialog open={open} onClose={handleClose}>
          <Scrollex />
        </Dialog>
      </Box>
    </>
  );
};

export default VideoGallery;
