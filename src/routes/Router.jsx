import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/home/Home";
import LiveCasino from "@/pages/LiveCasino";
import Glory from "@/pages/Glory";
import Tournaments from "@/pages/Tournaments";
import ProfileLayout from "@/layout/ProfileLayout";
import MyProfile from "@/pages/profile/MyProfile";
import TransactionHistory from "@/pages/profile/TransactionHistory";
import GameHistory from "@/pages/profile/GameHistory";
import MyBonuses from "@/pages/profile/MyBonuses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/LiveCasino", element: <LiveCasino /> },
      { path: "/tournaments", element: <Tournaments /> },
      { path: "/gloryGame", element: <Glory /> },
    ],
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
    children: [
      {
        path: "",
        element: <MyProfile />,
      },
      {
        path: "transactions",
        element: <TransactionHistory />,
      },
      {
        path: "gamehistory",
        element: <GameHistory />,
      },
      {
        path: "mybonuses",
        element: <MyBonuses />,
      },
    ],
  },
]);

export default router;
