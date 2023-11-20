import Chart, { useChart } from "@/components/chart";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const Reward = () => {
  const theme = useTheme();

  const chartOptions = useChart({
    colors: [theme.palette["primary"].light],
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "80%",
        },
        track: {
          margin: 0,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 6,
            color: theme.palette.common.black,
            fontSize: theme.typography.subtitle2.fontSize,
          },
        },
      },
    },
  });
  return (
    <>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={3}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={3}
              >
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 100, height: 100 }}
                  />
                </Box>
                <Stack>
                  <Box>
                    <Typography variant="subtitle1">LEVEL 2</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4">Shashank</Typography>
                  </Box>
                  <Box>
                    <Typography variant="p">
                      Complete Challenges to get a Green tick
                    </Typography>
                  </Box>
                </Stack>
              </Stack>

              <Stack direction="row" spacing={3} justifyContent="center">
                <Box>
                  <Chart
                    type="radialBar"
                    series={[100]}
                    options={chartOptions}
                    width={120}
                    height={120}
                  />
                  <Typography variant="h5" textAlign="center">
                    Level 1
                  </Typography>
                </Box>
                <Box>
                  <Chart
                    type="radialBar"
                    series={[55]}
                    options={chartOptions}
                    width={120}
                    height={120}
                  />
                  <Typography variant="h5" textAlign="center">
                    Level 2
                  </Typography>
                </Box>
                <Box>
                  <Chart
                    type="radialBar"
                    series={[25]}
                    options={chartOptions}
                    width={120}
                    height={120}
                  />
                  <Typography variant="h5" textAlign="center">
                    Level 3
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
    </>
  );
};

export default Reward;
