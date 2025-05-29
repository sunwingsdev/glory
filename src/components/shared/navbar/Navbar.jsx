import Modal from "@/components/home/modal/Modal";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Login from "../login/Login";
import RegistrationModal from "../login/RegistrationModal";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.svg";
import { FaPlus, FaUserCircle } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { IoFootballOutline } from "react-icons/io5";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import DepositModal from "@/components/home/modal/DepositModal";

const Navbar = ({
  onMenuClick,
  isSidebarOpen,
  showDepositModal,
  setShowDepositModal,
}) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Casino
  const helpLinks = [
    { label: "CASINO", link: "/" },
    { label: "LIVE-CASINO", link: "/LiveCasino" },
    { label: "TOurnaments", link: "/tournaments" },
    { label: "glory games", link: "/gloryGame" },
  ];

  return (
    <>
      <div className="bg-[#EEF0F8] fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="flex justify-between items-center px-3 sm:px-4 py-2 md:py-2.5 gap-2">
          <div className="flex items-center gap-2 sm:gap-5 md:gap-8 text-lg">
            <button
              className="p-2 text-black outline-none hidden lg:block"
              onClick={onMenuClick}
            >
              <IoIosArrowForward
                className={`text-xl sm:text-2xl transform transition-transform duration-300 ${
                  isSidebarOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <Link to={"/"}>
              <img className="w-20 md:w-24" src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="hidden lg:block">
            <ul className="flex text-sm font-medium gap-5">
              {helpLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-600 uppercase"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex gap-2 lg:gap-4 items-center font-bold text-sm ">
            <div className="flex items-center gap-2 hidden">
              <button onClick={() => setShowLoginModal(true)}>
                <div className="px-4 sm:px-8 py-2 md:py-3 text-white bg-[#3156EB] hover:bg-blue-700 rounded-md uppercase duration-300">
                  Sign In
                </div>
              </button>
              <button onClick={() => setShowRegisterModal(true)}>
                <div className="px-4 sm:px-8 py-2 md:py-3 text-white bg-gradient-to-r from-red-500 to-blue-600 hover:bg-blue-700 rounded-md uppercase duration-300">
                  Sign Up
                </div>
              </button>
            </div>

            <div className="flex items-center gap-2 lg:gap-2.5">
              <button
                onClick={() => setShowDepositModal(true)}
                className="flex items-center justify-center p-0.5 text-blue-600 bg-white rounded-md"
              >
                <div className="px-3">
                  <div className="flex gap-0.5 items-center text-black">
                    <FaBangladeshiTakaSign size={8} />
                    <span className="text-xs">0</span>
                  </div>
                  <div className="flex gap-0.5 items-center">
                    <IoFootballOutline size={8} />
                    <span className="text-xs text-black">0</span>
                  </div>
                </div>
                <div className="hidden md:block p-3 text-white bg-blue-600 rounded-md">
                  <FaPlus />
                </div>
              </button>

              <Link className="hidden md:block">
                <div className="flex items-center justify-center w-10 h-10 text-blue-600 bg-white rounded-md">
                  <TiMessages size={22} />
                </div>
              </Link>

              <Link to={"/profile"}>
                <div className="flex items-center justify-center w-10 h-10 text-gray-500 bg-white rounded-full">
                  <FaUserCircle size={22} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
        <Login
          onClose={() => setShowLoginModal(false)}
          onRegisterClick={() => {
            setShowLoginModal(false);
            setShowRegisterModal(true);
          }}
        />
      </Modal>

      {/* Register Modal */}
      <Modal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
      >
        <RegistrationModal
          onClose={() => setShowRegisterModal(false)}
          openLogin={() => {
            setShowRegisterModal(false);
            setShowLoginModal(true);
          }}
        />
      </Modal>

      {/* Deposit Modal */}
      <Modal
        isOpen={showDepositModal}
        onClose={() => setShowDepositModal(false)}
      >
        <DepositModal onClose={() => setShowDepositModal(false)} />
      </Modal>
    </>
  );
};

export default Navbar;
