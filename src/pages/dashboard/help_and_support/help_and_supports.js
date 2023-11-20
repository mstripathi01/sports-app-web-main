"use client";
import { ContainerComponent } from "@/components/container";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { PATH_DASHBOARD } from "@/routes/paths";
import { HelpAndSupportFormSection } from "@/sections/dashboard/help_and_support";
import axiosInstance from "@/utils/axios";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";

const NotificationForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { query } = useRouter();
  const { id } = query;
  const title = "Help And Support";
  const DASHBOARD_TITLE = "Dashboard";
  const actionUrl = "#";

  const formik = useFormik({
    initialValues: {
      user_name: "",
      email: "",
      phone_number: "",
      rank: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.user_name) {
        errors.user_name = "User name is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      }
      if (!values.phone_number) {
        errors.phone_number = "Phone number is required";
      }
      if (!values.rank) {
        errors.rank = "Rank is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      let method = "POST";
      let url = actionUrl;
      if (id != "new") {
        method = "PUT";
        url = `${actionUrl}/${id}`;
      }

      await axiosInstance
        .request({
          method: method,
          url: url,
          data: values,
        })
        .then((response) => {
          if (response.status === 200) {
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
          }
        })
        .catch((error) => {
          const { response } = error;
          // show error message
          enqueueSnackbar(response?.data?.message, {
            variant: "error",
          });

          // set server error
          if (response.status === 422) {
            // eslint-disable-next-line no-unused-vars
            for (const [key, value] of Object.entries(values)) {
              if (response.data.errors[key]) {
                setErrors({ [key]: response.data.errors[key][0] });
              }
            }
          }
        });
    },
  });

  const bindData = async (id) => {
    await axiosInstance.get(`${actionUrl}/${id}`).then((response) => {
      if (response.status === 200) {
        const { data } = response;
        // bind form data from server
        for (const [key] of Object.entries(formik.values)) {
          formik.setFieldValue([key], data[key]);
        }
      }
    });
  };

  React.useEffect(() => {
    // if (id && id !== "new") {
    //   bindData(id);
    // }
  }, [id]);

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
          },
        ]}
      />
      <form noValidate onSubmit={formik.handleSubmit}>
        <HelpAndSupportFormSection formik={formik} />
        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={formik?.isSubmitting}
          >
            Submit
          </LoadingButton>
        </Stack>
      </form>
    </ContainerComponent>
  );
};
NotificationForm.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);
export default NotificationForm;
