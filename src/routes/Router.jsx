import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Casino from "../pages/home/casino/Casino";
import Slot from "../pages/home/slot/Slot";
import TableGames from "@/pages/home/tableGames/TableGames";
import SportsBook from "@/pages/home/sportsBook/SportsBook";
import Fishing from "@/pages/home/fishing/Fishing";
import Crash from "@/pages/home/crash/Crash";
import Promotion from "@/pages/home/promotion/Promotion";

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
      {
        path: "/table-games",
        element: <TableGames />,
      },
      {
        path: "/sports-book",
        element: <SportsBook />,
      },
      {
        path: "/fishing",
        element: <Fishing />,
      },
      {
        path: "/crash",
        element: <Crash />,
      },
      {
        path: "/promotion",
        element: <Promotion />,
      },
    ],
  },
]);

export default router;
