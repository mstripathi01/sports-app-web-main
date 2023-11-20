"use client";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { DataTable } from "@/components/dataTable";
import Iconify from "@/components/iconify/Iconify";
import {
  Button,
  Chip,
  IconButton,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import NextLink from "next/link";
import { ContainerComponent } from "@/components/container";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { PATH_DASHBOARD } from "@/routes/paths";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import Label from "@/components/label";
import { Router } from "next/router";
import MenuPopover from "@/components/menu-popover";
import Link from "next/link";
import { Edit, Send } from "@mui/icons-material";
import AddNotification from "@/sections/dashboard/notification/addNotification";

const Notification = () => {
  const { push } = useRouter();
  const title = "Notification";
  const DASHBOARD_TITLE = "Dashboard";
  const formUrl = `${PATH_DASHBOARD.notification.notifications}/form`;
  const detailUrl = `${PATH_DASHBOARD.notification.notifications}/detail`;
  const actionUrl = "#";
  const [openPopover, setOpenPopover] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const rows = [
    {
      id: 1,
      title: "Snow Jon",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "Lannister Cersei",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      title: "Lannister Jaime",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      title: "Stark Arya",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 5,
      title: "Targaryen Daenerys",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 6,
      title: "Clifford Ferrara",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 7,
      title: "Frances Rossini",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 8,
      title: "Roxie Harvey",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const columns = [
    {
      field: "title",
      headerName: "Title",
      width: "200",
      renderCell: ({ row }) => {
        return (
          <Typography
            component="p"
            variant="body2"
            onClick={() => push(`${detailUrl}/${row.id}`)}
            sx={{ cursor: "pointer" }}
          >
            {row.title}
          </Typography>
        );
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: "300",
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
            <MenuItem component={Link} href={`${formUrl}/${params?.id}`}>
              <Send fontSize="small" />
              <Typography component="p" variant="body2">
                Send Notification
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
              href={``}
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
              onClick={() => setOpen(true)}
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

        <AddNotification open={open} handleClose={() => setOpen(false)} />
      </ContainerComponent>
    </>
  );
};
Notification.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Notification;
