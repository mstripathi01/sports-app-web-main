"use client";
import { ContainerComponent } from "@/components/container";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { DataTable } from "@/components/dataTable";
import SelectBox from "@/components/form/select";
import Iconify from "@/components/iconify/Iconify";
import Label from "@/components/label";
import MenuPopover from "@/components/menu-popover";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { PATH_DASHBOARD } from "@/routes/paths";
import Progress from "@/sections/dashboard/user_management/progress";
import Reward from "@/sections/dashboard/user_management/reward";
import { MoreVert } from "@mui/icons-material";
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
import { GridActionsCellItem } from "@mui/x-data-grid";
import Head from "next/head";
import { default as Link, default as NextLink } from "next/link";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React from "react";


const ProgressPage = () => {
  const router = useRouter();
  const { push } = useRouter();

  const title = "User Progress";
  const DASHBOARD_TITLE = "User Managment";
  const backUrl = `${PATH_DASHBOARD.user.user_management}`;
  const actionUrl = "#";


  
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
              href: PATH_DASHBOARD.user.user_management,
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
              href={`${backUrl}`}
              variant="contained"
              startIcon={<Iconify icon="ri:skip-back-line" />}
            >
              Back
            </Button>
          }
        />

       <Progress/>
      </ContainerComponent>
    </>
  );
};
ProgressPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default ProgressPage;
