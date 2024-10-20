// project import
import { Layout } from "../Layout";

import { Home, Chat, ImageProcess } from "../page";

// ==============================|| Kollab ROUTING ||============================== //

const AppRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/image-text",
      element: <ImageProcess />,
    },
  ],
};

export default AppRoutes;
