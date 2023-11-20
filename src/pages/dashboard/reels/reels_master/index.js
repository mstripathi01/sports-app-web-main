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
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { Button, IconButton, MenuItem, Typography } from "@mui/material";
import Head from "next/head";
import { default as Link, default as NextLink } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ReelsMaster = () => {
  const { push } = useRouter();
  const title = "Reels Master";
  const DASHBOARD_TITLE = "Dashboard";
  const formUrl = `${PATH_DASHBOARD.reels.reels_master}/form`;
  const detailUrl = `${PATH_DASHBOARD.reels.reels_master}/detail`;
  const likeListUrl = `${PATH_DASHBOARD.reels.like_list}`;
  const viewListUrl = `${PATH_DASHBOARD.reels.view_list}`;
  const commentListUrl = `${PATH_DASHBOARD.reels.comment_list}`;
  const shareListUrl = `${PATH_DASHBOARD.reels.share_list}`;
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
      comment: 21,
      view: 500,
      like: 210,
      file: "asdf",
      share: 140,
      description: "description ...",
      date: "2021-10-10",
      createdBy: "admin",
    },
    {
      id: 2,
      comment: 21,
      view: 500,
      like: 210,
      file: "asdf",
      share: 140,
      description: "description ...",
      date: "2021-10-10",
      createdBy: "admin",
    },
    {
      id: 3,
      comment: 21,
      view: 500,
      like: 210,
      file: "asdf",
      share: 140,
      description: "description ...",
      date: "2021-10-10",
      createdBy: "admin",
    },
    {
      id: 4,
      comment: 21,
      view: 500,
      like: 210,
      file: "asdf",
      share: 140,
      description: "description ...",
      date: "2021-10-10",
      createdBy: "admin",
    },
    {
      id: 5,
      comment: 21,
      view: 500,
      like: 210,
      file: "asdf",
      share: 140,
      description: "description ...",
      date: "2021-10-10",
      createdBy: "admin",
    },
    {
      id: 6,
      comment: 21,
      view: 500,
      like: 210,
      file: "asdf",
      share: 140,
      description: "description ...",
      date: "2021-10-10",
      createdBy: "user",
    },
    {
      id: 7,
      comment: 21,
      view: 500,
      like: 210,
      file: "asdf",
      share: 140,
      description: "description ...",
      date: "2021-10-10",
      createdBy: "user",
    },
    {
      id: 8,
      comment: 21,
      view: 500,
      like: 210,
      file: "asdf",
      share: 140,
      description: "description ...",
      date: "2021-10-10",
      createdBy: "admin",
    },
  ];

  const columns = [
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
      field: "description",
      headerName: "Description",
      width: "150",
    },
    {
      field: "view",
      headerName: "View",
      width: "80",
      renderCell: ({ row }) => (
        <Label
          color="success"
          variant="soft"
          component={Link}
          href={`${viewListUrl}/${row.id}`}
          sx={{ cursor: "pointer", textDecoration: "none" }}
        >
          {row.view || "N/A"}
        </Label>
      ),
    },
    {
      field: "like",
      headerName: "Like",
      width: "80",
      renderCell: ({ row }) => (
        <Label
          color="success"
          variant="soft"
          component={Link}
          href={`${likeListUrl}/${row.id}`}
          sx={{ cursor: "pointer", textDecoration: "none" }}
        >
          {row.like || "N/A"}
        </Label>
      ),
    },
    {
      field: "comment",
      headerName: "Comment",
      width: "80",
      renderCell: ({ row }) => (
        <Label
          color="success"
          variant="soft"
          component={Link}
          href={`${commentListUrl}/${row.id}`}
          sx={{ cursor: "pointer", textDecoration: "none" }}
        >
          {row.comment || "N/A"}
        </Label>
      ),
    },
    {
      field: "share",
      headerName: "Share",
      width: "80",
      renderCell: ({ row }) => (
        <Label
          color="success"
          variant="soft"
          component={Link}
          href={`${shareListUrl}/${row.id}`}
          sx={{ cursor: "pointer", textDecoration: "none" }}
        >
          {row.share || "N/A"}
        </Label>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      width: "120",
    },
    {
      field: "createdBy",
      headerName: "Created By",
      width: "80",
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

            <MenuItem
              component={Link}
              href={`${PATH_DASHBOARD.videos.popular_videos}`}
            >
              <VideoCameraBackIcon fontSize="small" />
              <Typography component="p" variant="body2">
                Popular Video
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
ReelsMaster.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default ReelsMaster;
