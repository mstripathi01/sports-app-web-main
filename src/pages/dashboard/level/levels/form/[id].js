"use client";
import { ContainerComponent } from "@/components/container";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { PATH_DASHBOARD } from "@/routes/paths";
import { VideoLevelFormSection } from "@/sections/dashboard/videos/level";
import axiosInstance from "@/utils/axios";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import { useFormik } from "formik";
import { reject } from "lodash";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";

const VideoLevel = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { query } = useRouter();
  const { id } = query;
  const title = "Level";
  const DASHBOARD_TITLE = "Dashboard";
  const backUrl = `${PATH_DASHBOARD.videos.levels}`;
  const actionUrl = "#";

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.title) {
        errors.title = "Title is required";
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

  // const addVideoLevel = () => {
  //   formik.setFieldValue("video_levels", [
  //     ...formik.values.video_levels,
  //     defaultValue,
  //   ]);
  // };

  // const removeVideoLevel = (index) => {
  //   const removeEmail = formik.values.video_levels.splice(index, 1);
  //   formik.setFieldValue(
  //     "video_levels",
  //     reject(formik.values.video_levels, removeEmail)
  //   );
  // };

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
    if (id && id !== "new") {
      bindData(id);
    }
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
            href: backUrl,
          },
          { name: `${title} Form` },
        ]}
      />
      <form noValidate onSubmit={formik.handleSubmit}>
        <VideoLevelFormSection formik={formik} />
        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={formik?.isSubmitting}
          >
            {id === "new" ? "Add level" : "Edit level"}
          </LoadingButton>
        </Stack>
      </form>
    </ContainerComponent>
  );
};
VideoLevel.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default VideoLevel;
