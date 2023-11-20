"use client";
import { ContainerComponent } from "@/components/container";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { DataTable } from "@/components/dataTable";
import Iconify from "@/components/iconify/Iconify";
import MenuPopover from "@/components/menu-popover";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { PATH_DASHBOARD } from "@/routes/paths";
import { Edit } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, MenuItem, Typography } from "@mui/material";
import Head from "next/head";
import { default as Link, default as NextLink } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Video = () => {
  const { push } = useRouter();
  const title = "Popular Videos";
  const DASHBOARD_TITLE = "Dashboard";
  const formUrl = `${PATH_DASHBOARD.videos.popular_videos}/form`;
  const detailUrl = `${PATH_DASHBOARD.videos.popular_videos}/detail`;
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
    },
    {
      id: 2,
      title: "Snow Man",
      file: "asdf",
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
    },
    {
      id: 3,
      title: "Snow Man",
      file: "asdf",
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
    },
    {
      id: 4,
      title: "Snow Man",
      file: "asdf",
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
    },
    {
      id: 5,
      title: "Snow Man",
      file: "asdf",
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
    },
    {
      id: 6,
      title: "Snow Man",
      file: "asdf",
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
    },
    {
      id: 7,
      title: "Snow Man",
      file: "asdf",
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
    },
    {
      id: 8,
      title: "Snow Man",
      file: "asdf",
      weeks: "5",
      gym_equipments: "weight",
      // others: "other objects",
      description: "description ...",
    },
  ];

  const columns = [
    {
      field: "title",
      headerName: "Title",
      width: "100",
    },
    {
      field: "weeks",
      headerName: "Week",
      width: "100",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "gym_equipments",
      headerName: "Gym Equipment",
      width: "180",
    },
    // {
    //   field: "others",
    //   headerName: "Other",
    //   width: "100",
    // },
    {
      field: "description",
      headerName: "Description",
      width: "180",
    },
    {
      field: "title",
      headerName: "Title",
      width: "150",
    },
    //  {
    //   field: "bg_file",
    //   headerName: "Background Video",
    //   width: "150",
    //   renderCell: ({ row }) => {
    //     return (
    //       <>
    //         <video
    //           width="120"
    //           height="120"
    //           controls={false}
    //           autoPlay={true}
    //           muted
    //         >
    //           <source src="/video.mp4" type="video/mp4" />
    //           Your browser does not support the video tag.
    //         </video>
    //       </>
    //     );
    //   },
    // },
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
Video.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Video;
