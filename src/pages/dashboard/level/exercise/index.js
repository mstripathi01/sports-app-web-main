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

const Exercise = () => {
    const { push } = useRouter();
    const title = "Exercise";
    const DASHBOARD_TITLE = "Dashboard";
    const formUrl = `${PATH_DASHBOARD.level.levels}/form`;
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
            exercise_name: "Exercise 1",
            level_name: "Level 1",
        },
        {
            id: 2,
            exercise_name: "Exercise 2",
            level_name: "Level 2",
        },
        {
            id: 3,
            exercise_name: "Exercise 3",
            level_name: "Level 3",
        },
        {
            id: 4,
            exercise_name: "Exercise 4",
            level_name: "Level 4",
        },
        {
            id: 5,
            exercise_name: "Exercise 5",
            level_name: "Level 5",
        },
        {
            id: 6,
            exercise_name: "Exercise 6",
            level_name: "Level 6",
        },
    ];

    const columns = [
        {
            field: "exercise_name",
            headerName: "Exercise Name",
            width: "100",
        },
        {
            field: "level_name",
            headerName: "Level Name",
            width: "100",
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
Exercise.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Exercise;
