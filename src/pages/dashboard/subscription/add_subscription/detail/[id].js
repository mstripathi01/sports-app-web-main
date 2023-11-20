"use client";
import { ContainerComponent } from "@/components/container";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { PATH_DASHBOARD } from "@/routes/paths";
import { AddSubsriptionDetailSection } from "@/sections/dashboard/add_subscription";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";

const AddSubscriptionDetail = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { query } = useRouter();
  const { id } = query;
  const title = "Subscription";
  const DASHBOARD_TITLE = "Dashboard";
  const backUrl = `${PATH_DASHBOARD.subscription.add_subscription}`;
  const actionUrl = "#";
  const [data, setDate] = React.useState({});

  //   const getData = async (id) => {
  //     await axiosInstance.get(`${actionUrl}/${id}`).then((response) => {
  //       if (response.status === 200) {
  //         const { data } = response;
  //         // bind form data from server
  //         for (const [key] of Object.entries(formik.values)) {
  //           formik.setFieldValue([key], data[key]);
  //         }
  //       }
  //     });
  //   };

  //   React.useEffect(() => {
  //     if (id && id !== "new") {
  //       getData(id);
  //     }
  //   }, [id]);

  return (
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
            href: backUrl,
          },
          { name: `${title} Detail` },
        ]}
      />
      <AddSubsriptionDetailSection data={data} />
    </ContainerComponent>
  );
};
AddSubscriptionDetail.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default AddSubscriptionDetail;
