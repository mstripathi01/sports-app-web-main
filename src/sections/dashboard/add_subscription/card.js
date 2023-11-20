"use client";
import Iconify from "@/components/iconify/Iconify";
import {
  Box,
  Button,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";

const CardSub = ({ loadingCard, data, hover, setHover }) => {
  return (
    <>
      <Card>
        <CardContent>
          <Box sx={{ width: "100%" }}>
            <Box>
              <Container>
                <Box pb={6}>
                  <Grid container justifyContent="left" spacing={6}>
                    {loadingCard ? (
                      <Box mt={4}>
                        <Container maxWidth>
                          <Grid container spacing={4}>
                            {[...Array(3)].map((index) => {
                              return (
                                <>
                                  <Grid item md={4}>
                                    <Card>
                                      <CardContent>
                                        <Skeleton
                                          variant="text"
                                          sx={{ fontSize: "1rem" }}
                                        />

                                        <Skeleton
                                          variant="circular"
                                          width={40}
                                          height={40}
                                        />
                                        <Skeleton
                                          variant="rectangular"
                                          width={210}
                                          height={60}
                                        />
                                        <Skeleton
                                          variant="rounded"
                                          width={210}
                                          height={60}
                                        />
                                      </CardContent>
                                    </Card>
                                  </Grid>
                                </>
                              );
                            })}
                          </Grid>
                        </Container>
                      </Box>
                    ) : (
                      <>
                        {!loadingCard && data.length <= 0 && (
                          <Grid container justifyContent="center">
                            <Grid item md={12}>
                              <Stack
                                alignItems="center"
                                justifyContent="center"
                                py={5}
                              >
                                <Typography variant="h4" textAlign="center">
                                  There is no plan type subscription
                                </Typography>
                              </Stack>
                            </Grid>
                          </Grid>
                        )}
                        {data &&
                          data.length > 0 &&
                          data.map((elem, index) => {
                            return (
                              <Grid item md={4} key={index}>
                                <Card
                                  sx={{
                                    borderRadius: "5px",
                                  }}
                                  onMouseOver={() => setHover(index)}
                                  onMouseOut={() => setHover(false)}
                                >
                                  <Box
                                    sx={{
                                      textAlign: "center",
                                      py: 5,
                                      color: (theme) =>
                                        hover === index
                                          ? theme.palette.common.white
                                          : "",
                                      cursor: "pointer",
                                      background: (theme) =>
                                        hover === index
                                          ? theme.palette.primary.main
                                          : alpha(
                                              theme.palette.primary.lighter,
                                              0.2
                                            ),
                                    }}
                                  >
                                    <Box>
                                      <Typography variant="h4">
                                        {elem.name}
                                      </Typography>
                                    </Box>
                                    <Stack
                                      direction="row"
                                      spacing={0.6}
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      <Iconify icon="bi:currency-pound" />
                                      <Typography variant="h3">
                                        {elem.price}
                                      </Typography>
                                      <Typography
                                        fontSize={12}
                                        fontWeight={700}
                                        sx={{ cursor: "pointer" }}
                                      >
                                        PER MONTH
                                      </Typography>
                                    </Stack>
                                  </Box>
                                  <CardContent>
                                    <Stack spacing={1}>
                                      <Box>
                                        <Box textAlign="center">
                                          <List>
                                            <ListItem>
                                              <ListItemIcon>
                                                <Iconify
                                                  icon="charm:square-tick"
                                                  color={(theme) =>
                                                    theme.palette.success.main
                                                  }
                                                />
                                              </ListItemIcon>
                                              <ListItemText primary="Online System" />
                                            </ListItem>
                                            <ListItem>
                                              <ListItemIcon>
                                                <Iconify
                                                  icon="charm:square-tick"
                                                  color={(theme) =>
                                                    theme.palette.success.main
                                                  }
                                                />
                                              </ListItemIcon>
                                              <ListItemText primary=" Free apps" />
                                            </ListItem>
                                            <ListItem>
                                              <ListItemIcon>
                                                <Iconify
                                                  icon="system-uicons:cross"
                                                  color="red"
                                                />
                                              </ListItemIcon>
                                              <ListItemText primary=" Free apps" />
                                            </ListItem>
                                            <ListItem>
                                              <ListItemIcon>
                                                <Iconify
                                                  icon="charm:square-tick"
                                                  color={(theme) =>
                                                    theme.palette.success.main
                                                  }
                                                />
                                              </ListItemIcon>
                                              <ListItemText primary="live preview" />
                                            </ListItem>
                                            <ListItem>
                                              <ListItemIcon>
                                                <Iconify
                                                  icon="system-uicons:cross"
                                                  color="red"
                                                />
                                              </ListItemIcon>
                                              <ListItemText primary="Support unlimited" />
                                            </ListItem>
                                          </List>
                                        </Box>
                                      </Box>

                                      <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        spacing={2}
                                      >
                                        <Button
                                          fullWidth
                                          // disabled
                                          variant="success"
                                          onClick={() => {
                                            // update status
                                            updateStatus(elem.id, elem?.status);
                                          }}
                                          style={
                                            elem?.status
                                              ? {
                                                  // green
                                                  backgroundColor:
                                                    "rgb(12 168 48)",
                                                  opacity: "0.7",
                                                  color: "#fff",
                                                  borderColor: "#28a745",
                                                  fontSize: "12px",
                                                  lineHeight: "1.5",
                                                }
                                              : {
                                                  // grey
                                                  backgroundColor: "#6c757d",
                                                  opacity: "0.7",
                                                  color: "#fff",
                                                  borderColor: "#6c757d",
                                                  fontSize: "12px",
                                                  lineHeight: "1.5",
                                                }
                                          }
                                        >
                                          {elem?.status ? "ACTIVE" : "INACTIVE"}
                                        </Button>
                                        <Button
                                          // disabled
                                          fullWidth
                                          variant="success"
                                          onClick={() => {
                                            // update status
                                            updateDefaultStatus(
                                              elem.id,
                                              elem?.create_for
                                            );
                                          }}
                                          style={
                                            elem?.default
                                              ? {
                                                  // green
                                                  backgroundColor:
                                                    "rgb(12 168 48)",
                                                  opacity: "0.7",
                                                  color: "#fff",
                                                  borderColor: "#28a745",
                                                  fontSize: "12px",
                                                  lineHeight: "1.5",
                                                }
                                              : {
                                                  // grey
                                                  backgroundColor: "#6c757d",
                                                  opacity: "0.7",
                                                  color: "#fff",
                                                  borderColor: "#6c757d",
                                                  fontSize: "12px",
                                                  lineHeight: "1.5",
                                                }
                                          }
                                        >
                                          {elem?.default
                                            ? "DEFAULT"
                                            : "NON-DEFAULT"}
                                        </Button>
                                      </Stack>
                                      <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        spacing={2}
                                      >
                                        <Button
                                          variant="outlined"
                                          fullWidth
                                          onClick={() => {
                                            navigate(
                                              `/master/subscription/subscriptions/${value}/${elem.id}`
                                            );
                                          }}
                                        >
                                          Edit
                                        </Button>
                                        <Button
                                          variant="contained"
                                          color="error"
                                          fullWidth
                                          onClick={() => handleDelete(elem.id)}
                                        >
                                          Delete
                                        </Button>
                                      </Stack>
                                      <Button
                                        variant="contained"
                                        color="secondary"
                                        fullWidth
                                        onClick={() => handleDelete(elem.id)}
                                      >
                                        Send Notification
                                      </Button>
                                    </Stack>
                                  </CardContent>
                                </Card>
                              </Grid>
                            );
                          })}
                      </>
                    )}
                  </Grid>
                </Box>
              </Container>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default CardSub;
