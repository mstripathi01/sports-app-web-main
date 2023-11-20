"use client";
import { ContainerComponent } from "@/components/container";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import Iconify from "@/components/iconify/Iconify";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { PATH_DASHBOARD } from "@/routes/paths";
import SharesList from "@/sections/dashboard/reels/share_list";
import {
    Button
} from "@mui/material";
import Head from "next/head";
import { default as NextLink } from "next/link";
import { useRouter } from "next/navigation";


const ShareList = () => {
  const router = useRouter();
  const { push } = useRouter();

  const title = "Share List";
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

       <SharesList/>
      </ContainerComponent>
    </>
  );
};
ShareList.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default ShareList;
