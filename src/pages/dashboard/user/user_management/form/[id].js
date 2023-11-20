"use client";
import { ContainerComponent } from "@/components/container";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { PATH_DASHBOARD } from "@/routes/paths";
import { UserManagementFormSection } from "@/sections/dashboard/user_management";
import axiosInstance from "@/utils/axios";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";

const UserForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { query } = useRouter();
  const { id } = query;
  const title = "User Management";
  const DASHBOARD_TITLE = "Dashboard";
  const backUrl = `${PATH_DASHBOARD.user.user_management}`;
  const actionUrl = "admin/user/users";

  const formik = useFormik({
    initialValues: {
      user_name: "",
      email: "",
      role: "Admin",
      status: "",
      description: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.user_name) {
        errors.user_name = "User name is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      // if (!values.role) {
      //   errors.role = "Role is required";
      // }
      if (!values.status) {
        errors.status = "Status is required";
      }
      if (!values.description) {
        errors.description = "Description is required";
      } else if (values.description.length > 100) {
        errors.description = "description is no longer than 100 characters";
      }
      return errors;
    },
    onSubmit: async (values) => {
      // Create a string with all form information
      const formInfoString = Object.entries(values)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

      // Show a single toast with all form information
      enqueueSnackbar(`Form Information:\n${formInfoString}`, {
        variant: "info",
        style: { whiteSpace: "pre-line" }, // Preserve line breaks
      });
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
            enqueueSnackbar(
              `User ${id === "new" ? "created" : "updated"} successfully`,
              {
                variant: "success",
              }
            );
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
        <UserManagementFormSection formik={formik} />
        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={formik?.isSubmitting}
          >
            {id === "new" ? "Create User" : "Update User"}
          </LoadingButton>
        </Stack>
      </form>
    </ContainerComponent>
  );
};
UserForm.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default UserForm;
