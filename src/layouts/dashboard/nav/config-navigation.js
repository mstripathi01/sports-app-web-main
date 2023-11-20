// routes
import { PATH_DASHBOARD } from "@/routes/paths";
// components
import Label from "@/components/label";
import Iconify from "@/components/iconify";
import SvgColor from "@/components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  blog: icon("ic_blog"),
  cart: icon("ic_cart"),
  chat: icon("ic_chat"),
  mail: icon("ic_mail"),
  user: icon("ic_user"),
  file: icon("ic_file"),
  lock: icon("ic_lock"),
  label: icon("ic_label"),
  blank: icon("ic_blank"),
  kanban: icon("ic_kanban"),
  folder: icon("ic_folder"),
  banking: icon("ic_banking"),
  booking: icon("ic_booking"),
  invoice: icon("ic_invoice"),
  calendar: icon("ic_calendar"),
  disabled: icon("ic_disabled"),
  external: icon("ic_external"),
  menuItem: icon("ic_menu_item"),
  ecommerce: icon("ic_ecommerce"),
  analytics: icon("ic_analytics"),
  dashboard: icon("ic_dashboard"),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    // subheader: "Dashboard",
    items: [
      {
        title: "Dashboard",
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.dashboard,
      },
      {
        title: "User Management",
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          {
            title: "User Management",
            path: PATH_DASHBOARD.user.user_management,
          },
          {
            title: "Popular Users",
            path: PATH_DASHBOARD.user.popular_users,
          },
          {
            title: "Influencer",
            path: PATH_DASHBOARD.influencer.influencers,
          }
        ],
      },
      {
        title: "Notification",
        path: PATH_DASHBOARD.notification.notifications,
        icon: ICONS.label,
      },
      {
        title: "Leader Board",
        path: PATH_DASHBOARD.leader.leader_board,
        icon: <Iconify icon="material-symbols:social-leaderboard-rounded" />,
      },
      // {
      //   title: "Influencer",
      //   path: PATH_DASHBOARD.influencer.influencers,
      //   icon: <Iconify icon="mdi:user-network" width={30} />,
      // },
      // {
      //   title: "Reels Master",
      //   path: PATH_DASHBOARD.reels.reels_master,
      //   icon: <Iconify icon="bi:camera-reels-fill" />,
      // },
      {
        title: "Learn & Practice",
        path: PATH_DASHBOARD.learn.learn_practice,
        icon: <Iconify icon="eos-icons:machine-learning" />,
      },
      // { 
      //   title: "Levels",
      //   path: PATH_DASHBOARD.level.levels,
      //   icon: <Iconify icon="mdi:format-list-numbered" />,
      // },
      {
        title: "Level",
        path: PATH_DASHBOARD.level.root,
        icon: <Iconify icon="mdi:format-list-numbered" />,
        children: [
          {
            title: "Levels",
            path: PATH_DASHBOARD.level.levels,
          },
          {
            title: "Exercise",
            path: PATH_DASHBOARD.level.exercise,
          },
        ],
      },
      {
        title: "Videos",
        path: PATH_DASHBOARD.videos.root,
        icon: <Iconify icon="mingcute:video-fill" />,
        children: [
          {
            title: "Popular Videos",
            path: PATH_DASHBOARD.videos.popular_videos,
          },
          {
            title: "Video Management",
            path: PATH_DASHBOARD.video.video_managment,
          },
          {
            title: "Reels Master",
            path: PATH_DASHBOARD.reels.reels_master,
          }
        ],
      },
      {
        title: "Subscription",
        path: PATH_DASHBOARD.subscription.root,
        icon: ICONS.kanban,
        children: [
          {
            title: "User Subscription",
            path: PATH_DASHBOARD.subscription.user_subscription,
          },
          {
            title: "Add Subscription",
            path: PATH_DASHBOARD.subscription.add_subscription,
          },
        ],
      },
      {
        title: "Help and support",
        path: PATH_DASHBOARD.help_support.support,
        icon: ICONS.analytics,
      },
      // {
      //   title: "Video Management",
      //   path: PATH_DASHBOARD.video.video_managment,
      //   icon: <Iconify icon="gridicons:video" />,
      // },
    ],
  },
];

export default navConfig;
