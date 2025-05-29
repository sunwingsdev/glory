import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  FaChessBoard,
  FaMoneyBill,
  FaPlaneDeparture,
  FaPlay,
  FaRocket,
  FaStar,
} from "react-icons/fa";
import {
  PiNumberSeven,
  PiPokerChipBold,
  PiShieldStarFill,
} from "react-icons/pi";
import { TbBrandAirtable } from "react-icons/tb";
import {
  GiCard8Diamonds,
  GiCardJackClubs,
  GiCardJoker,
  GiPokerHand,
} from "react-icons/gi";
import { FaClover } from "react-icons/fa6";
import { BiSolidGame } from "react-icons/bi";

const menuItems = [
  { id: 1, label: "Popular", icon: <BsFire />, path: "/" },
  { id: 2, label: "Favorites", icon: <FaStar />, path: "/" },
  { id: 3, label: "Slots", icon: <PiNumberSeven />, path: "/slots" },
  { id: 4, label: "Crash games", icon: <FaPlaneDeparture />, path: "/" },
  { id: 5, label: "Table Games", icon: <TbBrandAirtable />, path: "/" },
  { id: 6, label: "Lottery", icon: <FaMoneyBill />, path: "/" },
  { id: 7, label: "Video Poker", icon: <FaPlay />, path: "/" },
  { id: 8, label: "Roulette", icon: <PiPokerChipBold />, path: "/" },
  { id: 9, label: "Black Jack", icon: <GiCardJackClubs />, path: "/" },
  { id: 10, label: "Scratch cards", icon: <GiCardJoker />, path: "/" },
  { id: 11, label: "Poker", icon: <GiPokerHand />, path: "/" },
  { id: 12, label: "Bingo", icon: <GiCard8Diamonds />, path: "/" },
  { id: 13, label: "Baccara", icon: <PiShieldStarFill />, path: "/" },
  { id: 14, label: "Arcade", icon: <BiSolidGame />, path: "/" },
  { id: 15, label: "Keno", icon: <FaChessBoard />, path: "/" },
  { id: 16, label: "Instant games", icon: <FaRocket />, path: "/" },
  { id: 17, label: "Other", icon: <FaClover />, path: "/" },
];
const SidebarMenu = () => {
  return (
    <div className="">
      {menuItems.map((item) => (
        <Link key={item.id} to={item.path}>
          <div className="w-full h-full py-2 px-4 text-black  hover:bg-[#CBD2ED40] duration-300 flex gap-3 items-center rounded-md">
            <div className="text-gray-400 text-lg">{item.icon}</div>
            <p className="text-base">{item.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
// bg-[#CBD2ED]

export default SidebarMenu;
