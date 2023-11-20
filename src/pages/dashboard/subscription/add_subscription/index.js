"use client";
import { ContainerComponent } from "@/components/container";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import Iconify from "@/components/iconify/Iconify";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { PATH_DASHBOARD } from "@/routes/paths";
import { CardSub } from "@/sections/dashboard/add_subscription";
import { Button } from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";

const rows = [
  {
    id: 1,
    user_name: "Snow Jon",
    email: "snowjon@gmail.com",
    role: "admin",
    status: true,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    hours: "45",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
  {
    id: 2,
    user_name: "Lannister Cersei",
    email: "lannistercersei@gmail.com",
    role: "admin",
    status: true,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    hours: "45",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
  {
    id: 3,
    user_name: "Lannister Jaime",
    email: "lannisterjaime@gmail.com",
    role: "admin",
    status: true,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    hours: "45",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
  {
    id: 4,
    user_name: "Stark Arya",
    email: "starkarya@gmail.com",
    role: "admin",
    status: true,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    hours: "45",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
  {
    id: 5,
    user_name: "Targaryen Daenerys",
    email: "targaryendaenerys@gmail.com",
    role: "admin",
    status: true,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    hours: "45",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
  {
    id: 6,
    user_name: "Clifford Ferrara",
    email: "cliffordferrara@gmail.com",
    role: "admin",
    status: false,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    hours: "45",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
  {
    id: 7,
    user_name: "Frances Rossini",
    email: "francesrossini@gmail.com",
    role: "admin",
    status: false,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    hours: "45",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
  {
    id: 8,
    user_name: "Roxie Harvey",
    email: "roxieharvey@gmail.com",
    role: "admin",
    status: false,
    subscription_type: "Monthly",
    subscription_end_date: "4-10-2023",
    closed_issue: "20",
    completed_project: "45",
    hours: "45",
    avg_score: "45",
    phone_number: "0123456789",
    rank: "1",
  },
];

const AddSubscription = () => {
  const title = "Add Subscription";
  const DASHBOARD_TITLE = "Dashboard";
  const formUrl = `${PATH_DASHBOARD.subscription.add_subscription}/form`;
  const detailUrl = `${PATH_DASHBOARD.subscription.add_subscription}/detail`;
  const actionUrl = "#";

  const [loadingCard, setLoadingCard] = React.useState(false);
  const [data, setData] = React.useState(rows || []);
  const [hover, setHover] = React.useState(0);

  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

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
            {
              name: "List",
            },
          ]}
          action={
            <Button
              component={NextLink}
              href={`${formUrl}/new`}
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add Subscription
            </Button>
          }
        />
      </ContainerComponent>
      <CardSub
        loadingCard={loadingCard}
        data={data}
        hover={hover}
        setHover={setHover}
      />
    </>
  );
};
AddSubscription.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default AddSubscription;
