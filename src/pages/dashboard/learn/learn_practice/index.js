"use client";
import { ContainerComponent } from "@/components/container";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { DataTable } from "@/components/dataTable";
import Iconify from "@/components/iconify/Iconify";
import MenuPopover from "@/components/menu-popover";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { PATH_DASHBOARD } from "@/routes/paths";
import { Edit } from "@mui/icons-material";
import Label from "@/components/label";
import { Box, Button, IconButton, MenuItem, Typography } from "@mui/material";
import Head from "next/head";
import { default as Link, default as NextLink } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LearnPracticePage = () => {
  const { push } = useRouter();
  const title = "Learn & Practice";
  const DASHBOARD_TITLE = "Dashboard";
  const formUrl = `${PATH_DASHBOARD.learn.learn_practice}/form`;
  const detailUrl = `${PATH_DASHBOARD.learn.learn_practice}/detail`;
  const userListUrl = `${PATH_DASHBOARD.learn.learn_practice}/user`;
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
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
      view: "5",
      time: "5",
    },
    {
      id: 2,
      title: "Snow Man",
      file: "asdf",
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
      view: "5",
      time: "5",
    },
    {
      id: 3,
      title: "Snow Man",
      file: "asdf",
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
      view: "5",
      time: "5",
    },
    {
      id: 4,
      title: "Snow Man",
      file: "asdf",
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
      view: "5",
      time: "5",
    },
    {
      id: 5,
      title: "Snow Man",
      file: "asdf",
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
      view: "5",
      time: "5",
    },
    {
      id: 6,
      title: "Snow Man",
      file: "asdf",
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
      view: "5",
      time: "5",
    },
    {
      id: 7,
      title: "Snow Man",
      file: "asdf",
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
      view: "5",
      time: "5",
    },
    {
      id: 8,
      title: "Snow Man",
      file: "asdf",
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
      view: "5",
      time: "5",
    },
  ];

  const columns = [
    {
      field: "title",
      headerName: "Title",
      width: "120",
    },
    {
      field: "weeks",
      headerName: "Week",
      width: "80",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "gym_equipments",
      headerName: "Gym Equipment",
      width: "150",
    },
    // {
    //   field: "others",
    //   headerName: "Other",
    //   width: "100",
    // },
    {
      field: "description",
      headerName: "Description",
      width: "120",
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
      field: "view",
      headerName: "View",
      width: "80",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => (
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Label
            color="success"
            variant="soft"
            component={Link}
            href={`${userListUrl}/${row.id}`}
            sx={{ cursor: "pointer", textDecoration: "none" }}
          >
            {row.view || "0"}
          </Label>
        </Box>
      ),
    },
    {
      field: "time",
      headerName: "Time",
      width: "80",
      headerAlign: "center",
      align: "center",
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
            <Button
              component={NextLink}
              href={`${formUrl}/new`}
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add
            </Button>
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
LearnPracticePage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default LearnPracticePage;
