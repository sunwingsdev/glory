import { FaPlaneDeparture } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { Link } from "react-router-dom";
import { SiGamedeveloper } from "react-icons/si";
import { TbLivePhoto } from "react-icons/tb";

const menuItems = [
  { id: 14, label: "Crazy Time", icon: <MdTimer />, path: "/" },
  { id: 15, label: "Aviator", icon: <FaPlaneDeparture />, path: "/" },
  { id: 16, label: "Live-Casino", icon: <TbLivePhoto />, path: "/" },
  { id: 17, label: "Glory Games", icon: <SiGamedeveloper />, path: "/" },
];

const TopMenu = () => {
  return (
    <div className="w-full max-w-5xl mx-auto lg:hidden mb-3">
      <div className="flex gap-2 w-full">
        {menuItems.map((item) => (
          <Link key={item.id} to={item.path} className="flex-1">
            <div className="flex flex-col items-center gap-0.5 w-full py-1.5 md:py-2.5 px-2 font-semibold text-blue-600 bg-white border border-blue-600 rounded-lg">
              <div className="text-4xl">{item.icon}</div>
              <p className="text-xs text-center whitespace-nowrap">
                {item.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopMenu;
