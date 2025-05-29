import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoFootballOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { GiTrophyCup } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import Modal from "@/components/home/modal/Modal";
import DepositModal from "@/components/home/modal/DepositModal";

const BottomNavMobile = ({ setShowDepositModal, showDepositModal }) => {
  const location = useLocation();

  const navItems = [
    {
      id: 1,
      to: "/menu",
      icon: <AiOutlineMenu className="w-6 h-6" />,
      label: "Menu",
    },
    {
      id: 2,
      to: "/",
      icon: <IoFootballOutline className="w-6 h-6" />,
      label: "Casino",
    },
    {
      id: 3,
      to: "/gloryGame",
      icon: <MdOutlinePayment className="w-6 h-6" />,
      label: "Deposit",
      onClick: () => setShowDepositModal(true),
    },
    {
      id: 4,
      to: "/tournaments",
      icon: <GiTrophyCup className="w-6 h-6" />,
      label: "Tournaments",
    },
    {
      id: 5,
      to: "/LiveCasino",
      icon: <TiMessages className="w-6 h-6" />,
      label: "Support",
    },
  ];

  return (
    <div className="grid grid-cols-5 fixed bottom-0 w-full bg-[rgba(238,240,248,0.95)] z-30 text-black border-t border-gray-200 lg:hidden">
      {navItems.map((item) => {
        const isDeposit = item.label === "Deposit";
        const isActive = location.pathname === item.to;

        return (
          <Link key={item.id} to={item.to}>
            <div
              className={`flex flex-col items-center justify-center text-xs gap-1 ${
                isDeposit ? "-mt-5" : "py-3"
              }`}
            >
              {/* Icon container */}
              <div
                onClick={item?.onClick}
                className={`flex items-center justify-center ${
                  isDeposit
                    ? "w-14 h-14 rounded-full bg-white p-[2px] shadow-md border border-transparent bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500"
                    : ""
                }`}
              >
                <div
                  className={`${
                    isDeposit
                      ? `w-full h-full flex items-center justify-center rounded-full bg-white ${
                          isActive ? "text-blue-600" : "text-gray-500"
                        }`
                      : `${isActive ? "text-blue-600" : "text-gray-500"}`
                  }`}
                >
                  {React.cloneElement(item.icon, {
                    className: `w-6 h-6 ${
                      isActive ? "text-blue-600" : "text-gray-500"
                    }`,
                  })}
                </div>
              </div>
              <p className="text-gray-800">{item.label}</p>
            </div>
          </Link>
        );
      })}

      {/* Deposit Modal */}
      <Modal
        isOpen={showDepositModal}
        onClose={() => setShowDepositModal(false)}
      >
        <DepositModal onClose={() => setShowDepositModal(false)} />
      </Modal>
    </div>
  );
};

export default BottomNavMobile;
