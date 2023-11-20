import ProgressBar from "@/components/progress-bar/ProgressBar";
import SnackbarProvider from "@/components/snackbar";
// import "@/styles/globals.css";
import "@/styles/global.css";

import React from "react";
// @mui

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import PropTypes from "prop-types";
import ThemeProvider from "@/theme";
import { SettingsProvider, ThemeSettings } from "@/components/settings";
import { MotionLazyContainer } from "@/components/animate";
import { AuthProvider } from "@/auth/JwtContext";
import "reactflow/dist/style.css";
import Head from "next/head";

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  emotionCache: PropTypes.object,
};

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <React.Fragment>
      <Head>
        <title>Touch Master</title>
        <link rel="icon" href="/assets/header/logo.svg" type="image/x-icon" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SettingsProvider>
          <MotionLazyContainer>
            <AuthProvider>
              <ThemeProvider>
                <ThemeSettings>
                  <SnackbarProvider>
                    <ProgressBar />
                    {getLayout(<Component {...pageProps} />)}
                  </SnackbarProvider>
                </ThemeSettings>
              </ThemeProvider>
            </AuthProvider>
          </MotionLazyContainer>
        </SettingsProvider>
      </LocalizationProvider>
    </React.Fragment>
  );
}
