import { Box, Grid, useTheme } from "@mui/material";
import React from "react";
import PieChart from "./pieChart";
import LinearGraph from "./linearGraph";
import AppWidget from "./widget";

const DashboardSection = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={4} sm={6} xs={12}>
          <AppWidget
            title="Conversion"
            total={38566}
            icon="eva:person-fill"
            chart={{
              series: 48,
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <AppWidget
            title="Applications"
            total={55566}
            icon="eva:email-fill"
            color="info"
            chart={{
              series: 75,
            }}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <AppWidget
            title="Applications"
            total={55566}
            icon="material-symbols:dashboard"
            color="warning"
            chart={{
              series: 75,
            }}
          />
        </Grid>
      </Grid>
      <Box mt={4}>
        <Grid container spacing={2}>
          <Grid item md={4} sm={12} xs={12}>
            <PieChart
              title="Metronic Total Data"
              chart={{
                colors: [
                  theme.palette.primary.main,
                  theme.palette.info.main,
                  theme.palette.error.main,
                  theme.palette.warning.main,
                ],
                series: [
                  { label: "Football", value: 12244 },
                  { label: "Cricket", value: 53345 },
                  { label: "Hockey", value: 44313 },
                ],
              }}
            />
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <LinearGraph
              title="Metronic Graph"
              subheader="(+43%) than last year"
              chart={{
                categories: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                ],
                series: [
                  {
                    year: "2019",
                    data: [
                      {
                        name: "Asia",
                        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                      },
                      {
                        name: "America",
                        data: [10, 34, 13, 56, 77, 88, 99, 77, 45],
                      },
                    ],
                  },
                  {
                    year: "2020",
                    data: [
                      {
                        name: "Asia",
                        data: [148, 91, 69, 62, 49, 51, 35, 41, 10],
                      },
                      {
                        name: "America",
                        data: [45, 77, 99, 88, 77, 56, 13, 34, 10],
                      },
                    ],
                  },
                ],
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default DashboardSection;
