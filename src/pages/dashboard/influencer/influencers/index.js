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
import Head from "next/head";
import { PATH_DASHBOARD } from "@/routes/paths";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import MenuPopover from "@/components/menu-popover";
import Link from "next/link";

const Influencer = () => {
  const title = "Influencer";
  const DASHBOARD_TITLE = "Dashboard";
  const formUrl = `${PATH_DASHBOARD.influencer.influencers}/form`;
  const detailUrl = `${PATH_DASHBOARD.influencer.influencers}/detail`;
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
      user_name: "Snow Jon",
      email: "snowjon@gmail.com",
      role: "admin",
      status: true,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      star : "1",
      conactions : "1",
      videos : "1",
    },
    {
      id: 2,
      user_name: "Lannister Cersei",
      email: "lannistercersei@gmail.com",
      role: "admin",
      status: true,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      star : "1",
      conactions : "1",
      videos : "1",
    },
    {
      id: 3,
      user_name: "Lannister Jaime",
      email: "lannisterjaime@gmail.com",
      role: "admin",
      status: true,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      star : "1",
      conactions : "1",
      videos : "1",
    },
    {
      id: 4,
      user_name: "Stark Arya",
      email: "starkarya@gmail.com",
      role: "admin",
      status: true,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      star : "1",
      conactions : "1",
      videos : "1",
    },
    {
      id: 5,
      user_name: "Targaryen Daenerys",
      email: "targaryendaenerys@gmail.com",
      role: "admin",
      status: true,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      star : "1",
      conactions : "1",
      videos : "1",
    },
    {
      id: 6,
      user_name: "Clifford Ferrara",
      email: "cliffordferrara@gmail.com",
      role: "admin",
      status: false,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      star : "1",
      conactions : "1",
      videos : "1",
    },
    {
      id: 7,
      user_name: "Frances Rossini",
      email: "francesrossini@gmail.com",
      role: "admin",
      status: false,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      star : "1",
      conactions : "1",
      videos : "1",
    },
    {
      id: 8,
      user_name: "Roxie Harvey",
      email: "roxieharvey@gmail.com",
      role: "admin",
      status: false,
      closed_issue: "20",
      completed_project: "45",
      hours: "45",
      avg_score: "45",
      phone_number: "0123456789",
      rank: "1",
      star : "1",
      conactions : "1",
      videos : "1",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "User Id",
      width: "80",
    },
    {
      field: "user_name",
      headerName: "User Name",
      width: "180",
      renderCell: ({ row }) => {
        return (
          <Typography
            component="p"
            variant="body2"
            onClick={() => push(`${detailUrl}/${row.id}`)}
            sx={{ cursor: "pointer" }}
          >
            {row.user_name}
          </Typography>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: "230",
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      width: "150",
    },
    {
      field: "rank",
      headerName: "Rank",
      width: "100",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "star",
      headerName: "Star",
      width: "80",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "conactions",
      headerName: "Conactions",
      width: "80",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "videos",
      headerName: "Videos",
      width: "80",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: "80",
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
              <Iconify icon="material-symbols:edit" />
              Edit
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
Influencer.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Influencer;
