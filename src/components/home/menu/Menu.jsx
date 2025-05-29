import { BsFire } from "react-icons/bs";
import {
  FaChessBoard,
  FaMoneyBill,
  FaPalette,
  FaPlaneDeparture,
  FaPlay,
  FaRocket,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
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

const menuItems = [
  { id: 1, label: "Popular", icon: <BsFire />, path: "/" },
  { id: 2, label: "Favorites", icon: <FaStar />, path: "/" },
  { id: 3, label: "Slots", icon: <PiNumberSeven />, path: "/" },
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
  { id: 14, label: "Arcade", icon: <FaPalette />, path: "/" },
  { id: 15, label: "Keno", icon: <FaChessBoard />, path: "/" },
  { id: 16, label: "Instant games", icon: <FaRocket />, path: "/" },
  { id: 17, label: "Other", icon: <FaClover />, path: "/" },
];

const Menu = () => {
  return (
    <div className="w-full max-w-5xl mx-auto overflow-x-auto hide-scrollbar lg:hidden">
      <div className="flex gap-2 min-w-max">
        {menuItems.map((item) => (
          <Link key={item.id} to={item.path}>
            <div className="flex flex-col items-center gap-0.5 min-w-[100px] py-2 md:py-2.5 px-2 text-xs font-semibold text-[#8C94B2] bg-white border border-[#8C94B2] rounded-lg">
              <div className="text-xl">{item.icon}</div>
              <p className="text-center whitespace-nowrap">{item.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
