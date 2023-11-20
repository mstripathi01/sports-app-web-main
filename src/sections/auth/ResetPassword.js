// next
import NextLink from "next/link";
// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from "@mui/material";
// auth
import { useAuthContext } from "@/auth/useAuthContext";
// layouts
import LoginLayout from "@/layouts/login/LoginLayout";
import ResetPasswordForm from "./ResetPasswordForm";
// routes

// ----------------------------------------------------------------------

export default function ResetPassword() {
  const { method } = useAuthContext();

  return (
    <LoginLayout>
      <Box sx={{ width: "100%" }}>
        <Stack sx={{ mb: 5, position: "relative", textAlign: "center" }}>
          <Typography variant="h4">Forgot Password</Typography>
        </Stack>
        <ResetPasswordForm />
      </Box>
    </LoginLayout>
  );
}
