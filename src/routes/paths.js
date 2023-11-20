// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
  loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
  registerUnprotected: path(ROOTS_AUTH, "/register-unprotected"),
  verify: path(ROOTS_AUTH, "/verify"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  newPassword: path(ROOTS_AUTH, "/new-password"),
};

export const PATH_PAGE = {
  comingSoon: "/coming-soon",
  maintenance: "/maintenance",
  pricing: "/pricing",
  payment: "/payment",
  about: "/about-us",
  contact: "/contact-us",
  faqs: "/faqs",
  page403: "/403",
  page404: "/404",
  page500: "/500",
  components: "/components",
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  sales_management: path(ROOTS_DASHBOARD, "/sales_management"),
  kanban: path(ROOTS_DASHBOARD, "/kanban"),
  calendar: path(ROOTS_DASHBOARD, "/calendar"),
  fileManager: path(ROOTS_DASHBOARD, "/files-manager"),
  permissionDenied: path(ROOTS_DASHBOARD, "/permission-denied"),
  blank: path(ROOTS_DASHBOARD, "/blank"),
  general: {
    app: path(ROOTS_DASHBOARD, "/app"),
  },

  user: {
    root: path(ROOTS_DASHBOARD, "/user"),
    profile: path(ROOTS_DASHBOARD, "/user/profile"),
    user_management: path(ROOTS_DASHBOARD, "/user/user_management"),
    popular_users: path(ROOTS_DASHBOARD, "/user/popular_users"),
    video_posts: path(ROOTS_DASHBOARD, "/user/user_management/video_posts"),
    reward: path(ROOTS_DASHBOARD, "/user/user_management/reward"),
    progress: path(ROOTS_DASHBOARD, "/user/user_management/progress"),
  },
  notification: {
    root: path(ROOTS_DASHBOARD, "/notification"),
    notifications: path(ROOTS_DASHBOARD, "/notification/notifications"),
  },
  leader: {
    root: path(ROOTS_DASHBOARD, "/leader"),
    leader_board: path(ROOTS_DASHBOARD, "/leader/leader_board"),
  },
  influencer: {
    root: path(ROOTS_DASHBOARD, "/influencer"),
    influencers: path(ROOTS_DASHBOARD, "/influencer/influencers"),
  },
  help_support: {
    root: path(ROOTS_DASHBOARD, "/help_and_support"),
    support: path(ROOTS_DASHBOARD, "/help_and_support/help_and_supports"),
  },
  flow_chart: {
    root: path(ROOTS_DASHBOARD, "/chart"),
    chart: path(ROOTS_DASHBOARD, "/chart"),
  },
  subscription: {
    root: path(ROOTS_DASHBOARD, "/subscription"),
    user_subscription: path(ROOTS_DASHBOARD, "/subscription/user_subscription"),
    add_subscription: path(ROOTS_DASHBOARD, "/subscription/add_subscription"),
  },
  reels: {
    root: path(ROOTS_DASHBOARD, "/reels"),
    reels_master: path(ROOTS_DASHBOARD, "/reels/reels_master"),
    like_list: path(ROOTS_DASHBOARD, "/reels/reels_master/like_list"),
    comment_list: path(ROOTS_DASHBOARD, "/reels/reels_master/comment_list"),
    view_list: path(ROOTS_DASHBOARD, "/reels/reels_master/view_list"),
    share_list: path(ROOTS_DASHBOARD, "/reels/reels_master/share_list"),
  },
  learn: {
    root: path(ROOTS_DASHBOARD, "/learn"),
    learn_practice: path(ROOTS_DASHBOARD, "/learn/learn_practice"),
  },
  influencer: {
    root: path(ROOTS_DASHBOARD, "/influencer"),
    influencers: path(ROOTS_DASHBOARD, "/influencer/influencers"),
  },
  level: {
    root: path(ROOTS_DASHBOARD, "/level"),
    levels: path(ROOTS_DASHBOARD, "/level/levels"),
    exercise: path(ROOTS_DASHBOARD, "/level/exercise"),
    running_users: path(ROOTS_DASHBOARD, "/level/levels/running_users"),
    pending_exercise: path(ROOTS_DASHBOARD, "/level/levels/pending_exercise"),
    complete_users: path(ROOTS_DASHBOARD, "/level/levels/complete_users"),
  },
  videos: {
    root: path(ROOTS_DASHBOARD, "/videos"),
    popular_videos: path(ROOTS_DASHBOARD, "/videos/popular_videos"),
    // levels: path(ROOTS_DASHBOARD, "/videos/levels"),
    video_count: path(ROOTS_DASHBOARD, "/videos/levels/video_count"),
    running_users: path(ROOTS_DASHBOARD, "/videos/levels/running_users"),
    pending_exercise: path(ROOTS_DASHBOARD, "/videos/levels/pending_exercise"),
    complete_exercise: path(ROOTS_DASHBOARD, "/videos/levels/complete_exercise"),
    complete_users: path(ROOTS_DASHBOARD, "/videos/levels/complete_users"),
  },
  video: {
    root: path(ROOTS_DASHBOARD, "/video_management"),
    video_managment: path(ROOTS_DASHBOARD, "/video_management"),
  },
};

export const PATH_DOCS = {
  root: "#",
  changelog: "#",
};

export const PATH_ZONE_ON_STORE = "#";

export const PATH_FREE_VERSION = "#";

export const PATH_FIGMA_PREVIEW = "#";
