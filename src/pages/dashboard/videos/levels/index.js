"use client";
import { ContainerComponent } from "@/components/container";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { DataTable } from "@/components/dataTable";
import Iconify from "@/components/iconify/Iconify";
import Label from "@/components/label";
import MenuPopover from "@/components/menu-popover";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { PATH_DASHBOARD } from "@/routes/paths";
import { Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { default as Link, default as NextLink } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const VideoLevel = () => {
  const { push } = useRouter();
  const title = "Levels";
  const DASHBOARD_TITLE = "Dashboard";
  const formUrl = `${PATH_DASHBOARD.videos.levels}/form`;
  const exeriseFormUrl = `${PATH_DASHBOARD.videos.levels}/exercise_form`;
  const detailUrl = `${PATH_DASHBOARD.videos.levels}/detail`;
  const videoCountUrl = `${PATH_DASHBOARD.videos.video_count}`;
  const runningUsersUrl = `${PATH_DASHBOARD.videos.running_users}`;
  const completeUsersUrl = `${PATH_DASHBOARD.videos.complete_users}`;
  const actionUrl = "#";
  const [openPopover, setOpenPopover] = React.useState(null);

  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const rows = [
    {
      id: 1,
      title: "Snow Man",
      file: "asdf",
      video_count: "1",
    },
    {
      id: 2,
      title: "Snow Man",
      file: "asdf",
      video_count: "1",
    },
    {
      id: 3,
      title: "Snow Man",
      file: "asdf",
      video_count: "1",
    },
    {
      id: 4,
      title: "Snow Man",
      file: "asdf",
      video_count: "1",
    },
    {
      id: 5,
      title: "Snow Man",
      file: "asdf",
      video_count: "1",
    },
    {
      id: 6,
      title: "Snow Man",
      file: "asdf",
      video_count: "1",
    },
    {
      id: 7,
      title: "Snow Man",
      file: "asdf",
      video_count: "1",
    },
    {
      id: 8,
      title: "Snow Man",
      file: "asdf",
      video_count: "1",
    },
  ];

  const columns = [
    {
      field: "title",
      headerName: "Title",
      width: "100",
    },
    {
      field: "bg_file",
      headerName: "Background Video",
      width: "150",
      renderCell: ({ row }) => {
        return (
          <>
            <video
              width="120"
              height="120"
              controls={false}
              autoPlay={true}
              muted
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        );
      },
    },
    {
      field: "file",
      headerName: "Video",
      width: "120",
      renderCell: ({ row }) => {
        return (
          <>
            <video
              width="120"
              height="120"
              controls={false}
              autoPlay={true}
              muted
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        );
      },
    },
    {
      field: "video_count",
      headerName: "Exercise",
      width: "80",
      renderCell: ({ row }) => (
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Label
            color="success"
            variant="soft"
            component={Link}
            href={`${videoCountUrl}/${row.id}`}
            sx={{ cursor: "pointer", textDecoration: "none" }}
          >
            {row.video_count || "N/A"}
          </Label>
        </Box>
      ),
    },
    {
      field: "running_users",
      headerName: "Running Users",
      width: "150",
      renderCell: ({ row }) => (
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Label
            color="success"
            variant="soft"
            component={Link}
            href={`${runningUsersUrl}/${row.id}`}
            sx={{ cursor: "pointer", textDecoration: "none" }}
          >
            {row.video_count || "N/A"}
          </Label>
        </Box>
      ),
    },
    {
      field: "complete_users",
      headerName: "Complete Users",
      width: "150",
      renderCell: ({ row }) => (
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Label
            color="success"
            variant="soft"
            component={Link}
            href={`${completeUsersUrl}/${row.id}`}
            sx={{ cursor: "pointer", textDecoration: "none" }}
          >
            {row.video_count || "N/A"}
          </Label>
        </Box>
      ),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: "100",
      getActions: (params) => [
        <React.Fragment key={params?.id}>
          <IconButton
            color={openPopover ? "inherit" : "default"}
            onClick={handleOpenPopover}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
          <MenuPopover
            open={openPopover}
            onClose={handleClosePopover}
            arrow="top-center"
            sx={{ width: "auto" }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MenuItem component={Link} href={`${formUrl}/${params?.id}`}>
              <Edit fontSize="small" />
              <Typography component="p" variant="body2">
                Edit
              </Typography>
            </MenuItem>
          </MenuPopover>
        </React.Fragment>,
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>{title} List</title>
      </Head>
      <ContainerComponent>
        <CustomBreadcrumbs
          heading={title}
          links={[
            {
              name: DASHBOARD_TITLE,
              href: PATH_DASHBOARD.general.app,
            },
            {
              name: title,
              // href: "#",
            },
            {
              name: "List",
            },
          ]}
          action={
            <Stack spacing={1} direction="row">
              <Button
                component={NextLink}
                href={`${exeriseFormUrl}/new`}
                variant="contained"
                startIcon={<Iconify icon="eva:plus-fill" />}
              >
                Add Exercise
              </Button>
              <Button
                component={NextLink}
                href={`${formUrl}/new`}
                variant="contained"
                startIcon={<Iconify icon="eva:plus-fill" />}
              >
                Add Level
              </Button>
            </Stack>
          }
        />

        <DataTable
          rowsData={rows}
          title={title}
          actionUrl={actionUrl}
          defaultSortModel={[{ field: "updated_at", sort: "desc" }]}
          defaultFilterModel={{
            items: [],
          }}
          columns={columns}
          checkboxSelection={true}
          disableRowSelectionOnClick={true}
        />
      </ContainerComponent>
    </>
  );
};
VideoLevel.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default VideoLevel;
