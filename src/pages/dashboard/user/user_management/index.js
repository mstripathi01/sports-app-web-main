"use client";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { DataTable } from "@/components/dataTable";
import Iconify from "@/components/iconify/Iconify";
import {
  Button,
  Chip,
  Divider,
  IconButton,
  Menu,
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
import SelectBox from "@/components/form/select";
import { MoreVert } from "@mui/icons-material";
import MenuPopover from "@/components/menu-popover";
import Link from "next/link";

const filterList = [
  {
    value: "user_management",
    label: "User Management",
  },
  {
    value: "leader_board",
    label: "Leader Board",
  },
  {
    value: "influencer",
    label: "Influencer",
  },
];
const UserManagement = () => {
  const router = useRouter();
  const { push } = useRouter();
  const [state, setState] = React.useState("user_management");
  const [status, setStatus] = React.useState(false);
  const title = "User Management";
  const DASHBOARD_TITLE = "Dashboard";
  const formUrl = `${PATH_DASHBOARD.user.user_management}/form`;
  const rewardUrl = `${PATH_DASHBOARD.user.reward}`;
  const progressUrl = `${PATH_DASHBOARD.user.progress}`;
  const videoPostsUrl = `${PATH_DASHBOARD.user.video_posts}`;
  const detailUrl = `${PATH_DASHBOARD.user.user_management}/detail`;
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
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
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
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
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
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
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
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
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
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
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
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
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
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
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
      time: "1",
      connection: "5",
      number: "8754854855",
      user_id: "xyz55",
      video_post: "5",
    },
  ];
  const columns = [];

  if (state === "user_management") {
    columns.push({
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
    });

    columns.push({
      field: "email",
      headerName: "Email",
      width: "250",
    });

    columns.push({
      field: "use_time",
      headerName: "App Use Time",
      width: "100",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => row.time || "N/A",
    });

    columns.push({
      field: "connection",
      headerName: "Connection",
      width: "80",
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => row.connection || "N/A",
    });

    columns.push({
      field: "contact_number",
      headerName: "Contact Number",
      width: "150",
      renderCell: ({ row }) => row.number || "N/A",
    });

    columns.unshift({
      field: "user_id",
      headerName: "User Id",
      width: "80",
      renderCell: ({ row }) => row.user_id || "N/A",
    });
    columns.push({
      field: "video_post",
      headerName: "Video Posted",
      align: "center",
      headerAlign: "center",
      width: "80",
      renderCell: ({ row }) => (
        <Label
          color="success"
          variant="soft"
          component={Link}
          href={`${videoPostsUrl}/${row.id}`}
          sx={{ cursor: "pointer" }}
        >
          {row.video_post || "N/A"}
        </Label>
      ),
    });

    columns.push({
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
            sx={{ width: 160 }}
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
            <MenuItem component={Link} href={`${rewardUrl}/${params?.id}`}>
              <Iconify icon="material-symbols:rewarded-ads-rounded" />
              Reward
            </MenuItem>
            <MenuItem component={Link} href={`${progressUrl}/${params?.id}`}>
              <Iconify icon="material-symbols:progress-activity" />
              Progress
            </MenuItem>
            <MenuItem component={Link} href={`${PATH_DASHBOARD.influencer.influencers}`}>
              <Iconify icon="material-symbols:edit" />
              Influencer
            </MenuItem>

          </MenuPopover>
        </React.Fragment>,
      ],
    });
  }
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
          // addFilter={
          //   <SelectBox
          //     fullWidth
          //     label="Choose Type"
          //     name="state"
          //     options={filterList}
          //     value={state}
          //     onChange={(e) => setState(e.target.value)}
          //     required
          //     formSx={{ mb: 0 }}
          //   />
          // }
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
UserManagement.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default UserManagement;
