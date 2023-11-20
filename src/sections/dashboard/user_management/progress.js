import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Progress = () => {
  return (
    <>
      <Grid container spacing={3}>
        {[...Array(4)].map((elem, index) => {
          return (
            <Grid item md={6} sm={12} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Stack direction="row" spacing={3} alignItems="center">
                    <Box>
                      <Box
                        sx={{ borderRadius: "10px", objectFit: "cover" }}
                        component="img"
                        src="/football.png"
                        width="120px"
                        alt="football"
                      />
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <Box>
                        <Typography fontSize={18} fontWeight={500}>
                          Make yourself unmarkable
                        </Typography>
                      </Box>
                      <Box>
                        <Typography fontSize={14} fontWeight={400}>
                          30 Mins
                        </Typography>
                      </Box>
                      <Box sx={{ position: "relative", width: "100%" }}>
                        <LinearProgress
                          variant="determinate"
                          color="primary"
                          value={70}
                          sx={{ height: "20px" }}
                        />
                        <Box
                          sx={{ position: "absolute", top: "0%", right: "45%" }}
                        >
                          <Typography variant="p" color="common.white">
                            70 %
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Progress;
