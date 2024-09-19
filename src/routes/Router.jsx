import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Casino from "../pages/home/casino/Casino";
import Slot from "../pages/home/slot/Slot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/casino",
        element: <Casino />,
      },
      {
        path: "/slot",
        element: <Slot />,
      },
    ],
  },
]);

export default router;
