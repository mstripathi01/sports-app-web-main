"use client";
import { ContainerComponent } from "@/components/container";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { PATH_DASHBOARD } from "@/routes/paths";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React from "react";
import VideoGallery from "./video_gallery";

const VideoManagement = () => {
  const { push } = useRouter();
  const title = "Video Management";
  const DASHBOARD_TITLE = "Dashboard";

  const actionUrl = "#";
  const [openPopover, setOpenPopover] = React.useState(null);

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
          ]}
        />
        <VideoGallery />
      </ContainerComponent>
    </>
  );
};
VideoManagement.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default VideoManagement;
