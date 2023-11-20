"use client";
import { ContainerComponent } from "@/components/container";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import Iconify from "@/components/iconify/Iconify";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { PATH_DASHBOARD } from "@/routes/paths";
import ViewsList from "@/sections/dashboard/reels/view_list";
import VideoPost from "@/sections/dashboard/user_management/videoPost";
import {
    Button
} from "@mui/material";
import Head from "next/head";
import { default as NextLink } from "next/link";
import { useRouter } from "next/navigation";


const ViewList = () => {
  const router = useRouter();
  const { push } = useRouter();

  const title = "View List";
  const DASHBOARD_TITLE = "User Management";
  
  const backUrl = `${PATH_DASHBOARD.reels.reels_master}`;
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

       <ViewsList/>
      </ContainerComponent>
    </>
  );
};
ViewList.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default ViewList;
