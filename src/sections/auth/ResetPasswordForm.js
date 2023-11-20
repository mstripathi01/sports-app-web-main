import { useState } from "react";
import * as Yup from "yup";
// next
import NextLink from "next/link";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// routes
import { PATH_AUTH } from "@/routes/paths";
// auth
import { useAuthContext } from "@/auth/useAuthContext";
// components
import Iconify from "@/components/iconify";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------

export default function ResetPasswordForm() {

  const { push } = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "",
    password: "",
    re_password: "",
  };

  const methods = useForm({
    // resolver: yupResolver(ResetPasswordSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    push("/auth/login");
  };


  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="New Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField
          name="re_password"
          label="Re-Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack alignItems="flex-end" sx={{ my: 2 }}>
        <LoadingButton
          fullWidth
          color="primary"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitSuccessful || isSubmitting}
        >
          Submit
        </LoadingButton>
      </Stack>

    </FormProvider>
  );
}
