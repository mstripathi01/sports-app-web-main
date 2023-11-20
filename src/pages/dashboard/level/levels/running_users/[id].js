"use client";
import { ContainerComponent } from "@/components/container";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import Iconify from "@/components/iconify/Iconify";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { PATH_DASHBOARD } from "@/routes/paths";
import LikesList from "@/sections/dashboard/reels/like_list";
import ViewsList from "@/sections/dashboard/reels/view_list";
import VideoPost from "@/sections/dashboard/user_management/videoPost";
import RunningUsersDetail from "@/sections/dashboard/videos/level/runningUsersDetail";
import VideoCount from "@/sections/dashboard/videos/level/videoCount";
import {
    Button
} from "@mui/material";
import Head from "next/head";
import { default as NextLink } from "next/link";
import { useRouter } from "next/navigation";


const RunningUsersDetailPage = () => {
  const router = useRouter();
  const { push } = useRouter();

  const title = "Running Users";
  const DASHBOARD_TITLE = "User Management";
  
  const backUrl = `${PATH_DASHBOARD.videos.levels}`;
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

       <RunningUsersDetail/>
      </ContainerComponent>
    </>
  );
};
RunningUsersDetailPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default RunningUsersDetailPage;
