"use client";
import { ContainerComponent } from "@/components/container";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { DataTable } from "@/components/dataTable";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { PATH_DASHBOARD } from "@/routes/paths";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Label from "@/components/label";
import React from "react";
import { IconButton, MenuItem } from "@mui/material";
import Iconify from "@/components/iconify/Iconify";
import MenuPopover from "@/components/menu-popover";
import { Edit } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import { default as Link, default as NextLink } from "next/link";
import { Typography } from "@mui/material";


const LearnUsers = () => {
  const { push } = useRouter();
  const [openPopover, setOpenPopover] = React.useState(null);
  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };
  const title = "User View List";
  const DASHBOARD_TITLE = "Dashboard";

  const rows = [
    {
      id: 1,
      user_name: "Snow Man",
      file: "asdf",
      email: "snowjon@gmail.com",
      role: "admin",
      status: true,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
    },
    {
      id: 2,
      user_name: "Snow Man",
      file: "asdf",
      email: "snowjon@gmail.com",
      role: "admin",
      status: true,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
    },
    {
      id: 3,
      user_name: "Snow Man",
      file: "asdf",
      email: "snowjon@gmail.com",
      role: "admin",
      status: true,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
    },
    {
      id: 4,
      user_name: "Snow Man",
      file: "asdf",
      email: "snowjon@gmail.com",
      role: "admin",
      status: true,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
    },
    {
      id: 5,
      user_name: "Snow Man",
      file: "asdf",
      email: "snowjon@gmail.com",
      role: "admin",
      status: true,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
    },
    {
      id: 6,
      user_name: "Snow Man",
      file: "asdf",
      email: "snowjon@gmail.com",
      role: "admin",
      status: true,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
    },
    {
      id: 7,
      user_name: "Snow Man",
      file: "asdf",
      email: "snowjon@gmail.com",
      role: "admin",
      status: true,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
    },
    {
      id: 8,
      user_name: "Snow Man",
      file: "asdf",
      email: "snowjon@gmail.com",
      role: "admin",
      status: true,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
    },
  ];

  const columns = [
    {
      field: "user_id",
      headerName: "User Id",
      width: "80",
      renderCell: ({ row }) => row.user_id || "N/A",
    },
    {
      field: "user_name",
      headerName: "User Name",
      width: "150",
    },
    {
      field: "email",
      headerName: "Email",
      width: "200",
    },
    {
      field: "use_time",
      headerName: "App Use Time",
      width: "100",
      align: "center",
      renderCell: ({ row }) => row.time || "N/A",
    },
    {
      field: "connection",
      headerName: "Connection",
      width: "80",
      align: "center",
      renderCell: ({ row }) => row.connection || "N/A",
    },
    {
      field: "contact_number",
      headerName: "Contact Number",
      width: "150",
      renderCell: ({ row }) => row.number || "N/A",
    },
    {
      field: "file",
      headerName: "Video",
      headerAlign: "center",
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
      field: "status",
      type: "boolean",
      headerName: "Status",
      width: "80",
      renderCell: ({ row }) => {
        let color = "error";
        if (status) {
          color = "success";
        } else {
          color = "error";
        }
        return (
          <Label
            variant="soft"
            color={color || "success"}
            onClick={() => {
              setStatus(!status);
            }}
            sx={{ cursor: "pointer" }}
          >
            {status ? "Active" : "InActive"}
          </Label>
        );
      },
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
            <MenuItem component={Link} href={``}>
              <Edit fontSize="small" />
              <Typography component="p" variant="body2">
                Edit
              </Typography>
            </MenuItem>

            <MenuItem
              component={Link}
              href={``}
            >
              <DeleteIcon fontSize="small" />
              <Typography component="p" variant="body2">
                Delete
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
              name: 'Learn',
              // href: "#",
            },
            {
              name: "List",
            },
          ]}
        />

        <DataTable
          rowsData={rows}
          title={title}
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
LearnUsers.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default LearnUsers;
