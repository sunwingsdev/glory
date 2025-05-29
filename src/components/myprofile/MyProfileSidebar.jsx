import { Link, useLocation } from "react-router-dom";
import { FaBold, FaUserAlt } from "react-icons/fa";
import { TbDeviceGamepad3 } from "react-icons/tb";
import { BiDollarCircle } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { MdOutlineLogin } from "react-icons/md";

const menuItems = [
  { id: 1, label: "My Profile", icon: <FaUserAlt />, path: "/profile" },
  {
    id: 2,
    label: "Transaction History",
    icon: <BiDollarCircle />,
    path: "transactions",
  },
  {
    id: 3,
    label: "Game History",
    icon: <TbDeviceGamepad3 />,
    path: "gamehistory",
  },
  { id: 4, label: "My Bonuses", icon: <FaBold />, path: "mybonuses" },
  { id: 5, label: "Support Chat", icon: <TiMessages />, path: "" },
];

const MyProfileSidebar = () => {
  const location = useLocation();

  return (
    <div className="">
      {menuItems.map((item) => {
        const isActive =
          location.pathname === item.path || item.label === "My Profile"; // My Profile always active

        return (
          <Link key={item.id} to={item.path}>
            <div
              className={`w-full h-full py-2 px-4 duration-300 flex gap-3 items-center rounded-md ${
                isActive
                  ? "bg-[#a6b4ea75] text-blue-600"
                  : "text-black hover:bg-[#CBD2ED40]"
              }`}
            >
              <div
                className={`text-base ${
                  isActive ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {item.icon}
              </div>
              <p className="text-sm">{item.label}</p>
            </div>
          </Link>
        );
      })}

      <div className="border-t border-gray-300 mt-14 pt-1">
        <Link>
          <div className="w-full h-full py-2 px-4 text-black hover:text-blue-600 duration-300 flex gap-3 items-center rounded-md">
            <div className="text-gray-400 text-base">
              <MdOutlineLogin />
            </div>
            <p className="text-sm">Log out</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MyProfileSidebar;
