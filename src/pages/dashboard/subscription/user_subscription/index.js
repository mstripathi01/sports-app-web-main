"use client";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { DataTable } from "@/components/dataTable";
import Iconify from "@/components/iconify/Iconify";
import {
  Box,
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
import MenuPopover from "@/components/menu-popover";
import Link from "next/link";

const rows = [
  {
    id: 1,
    user_name: "Snow Jon",
    email: "snowjon@gmail.com",
    role: "admin",
    status: true,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    days: "31",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
  {
    id: 2,
    user_name: "Lannister Cersei",
    email: "lannistercersei@gmail.com",
    role: "admin",
    status: true,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    days: "31",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
  {
    id: 3,
    user_name: "Lannister Jaime",
    email: "lannisterjaime@gmail.com",
    role: "admin",
    status: true,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    days: "31",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
  {
    id: 4,
    user_name: "Stark Arya",
    email: "starkarya@gmail.com",
    role: "admin",
    status: true,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    days: "31",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
  {
    id: 5,
    user_name: "Targaryen Daenerys",
    email: "targaryendaenerys@gmail.com",
    role: "admin",
    status: true,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    days: "31",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
  {
    id: 6,
    user_name: "Clifford Ferrara",
    email: "cliffordferrara@gmail.com",
    role: "admin",
    status: false,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    days: "31",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
  {
    id: 7,
    user_name: "Frances Rossini",
    email: "francesrossini@gmail.com",
    role: "admin",
    status: false,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    days: "31",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
  {
    id: 8,
    user_name: "Roxie Harvey",
    email: "roxieharvey@gmail.com",
    role: "admin",
    status: false,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    days: "31",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
];

const UserSubscription = () => {
  const { push } = useRouter();
  const [status, setStatus] = React.useState(1);
  const title = "User Subscription";
  const DASHBOARD_TITLE = "Dashboard";
  const formUrl = `${PATH_DASHBOARD.subscription.user_subscription}/form`;
  const detailUrl = `${PATH_DASHBOARD.subscription.user_subscription}/detail`;
  const actionUrl = "#";

  const [openPopover, setOpenPopover] = React.useState(null);

  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const columns = [];

  columns.push({
    field: "user_name",
    headerName: "Name",
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
  });

  columns.push({
    field: "email",
    headerName: "Email",
    width: "230",
  });

  columns.push({
    field: "days",  headerName: "Days",  width: "100",
    renderCell: ({ row }) => {
      return (
        <Label variant="soft" color={"success"} sx={{ cursor: "pointer" }}>
          {row?.days}
    </Label>
      );
    },
  });

  columns.push({
    field: "subscription_type",
    headerName: "Subscription Type",
    width: "180",
  });

  columns.push({
    field: "subscription_end_date",
    headerName: "Subscription End Date",
    width: "180",
  });

  columns.push({
    field: "status",
    type: "boolean",
    headerName: "Status",
    width: "100",
    renderCell: ({ row }) => {
      let color = "error";
      if (status == 1) {
        color = "success";
      } else if (status == 2) {
        color = "info";
      } else {
        color = "error";
      }
      return (
        <Label
          variant="soft"
          color={color || "success"}
          onClick={() => {
            if (status !== 3) {
              setStatus(status + 1);
            } else {
              setStatus(1);
            }
          }}
          sx={{ cursor: "pointer" }}
        >
          {status === 1 ? "Active" : status === 2 ? "InActive" : "About to end"}
        </Label>
      );
    },
  });

  columns.push({
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
            <Iconify icon="material-symbols:edit" />
            Edit
          </MenuItem>
          <MenuItem>
            <Iconify icon="pepicons-pop:send" />
            Send Notification
          </MenuItem>
        </MenuPopover>
      </React.Fragment>,
    ],
  });

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
          // action={
          //   <Button
          //     component={NextLink}
          //     href={`${formUrl}/new`}
          //     variant="contained"
          //     startIcon={<Iconify icon="eva:plus-fill" />}
          //   >
          //     Add
          //   </Button>
          // }
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
UserSubscription.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default UserSubscription;
