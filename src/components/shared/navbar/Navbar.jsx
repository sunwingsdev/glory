import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import Modal from "../modal/Modal";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet"; // Shadcn sheet

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Start top navbar */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Mobile menu icon */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <button>
                  <IoMenuOutline size={30} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="p-4 bg-slate-50 text-gray-600 w-64"
              >
                <SheetClose asChild className="border-b-2 pb-2">
                  <div className="w-40">
                    <Link>
                      <img
                        src={
                          "https://www.babu88.app/static/svg/bb88_logo_animation2.gif"
                        }
                        alt=""
                      />
                    </Link>
                  </div>
                </SheetClose>
                <ul className="space-y-4 overflow-y-auto h-[92%]">
                  <SheetClose asChild>
                    <Link to={"/promotion"}>
                      <li className="flex gap-4 mt-4 text-sm font-medium px-3 py-2 hover:bg-slate-200 rounded-lg">
                        <img
                          src="https://www.babu88.app/static/svg/mobileMenu/promotion.svg"
                          alt=""
                        />
                        প্রমোশন
                      </li>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to={"/promotion"}>
                      <li className="flex gap-4 mt-1 text-sm font-medium px-3 py-2 hover:bg-slate-200 rounded-lg">
                        <img
                          src="https://www.babu88.app/static/svg/mobileMenu/rewards.svg"
                          alt=""
                        />
                        পুরস্কার
                      </li>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to={"/promotion"}>
                      <li className="flex gap-4 mt-1 text-sm font-medium px-3 py-2 hover:bg-slate-200 rounded-lg">
                        <img
                          src="https://www.babu88.app/static/svg/mobileMenu/referAndEarn.svg"
                          alt=""
                        />
                        রেফারেল প্রোগ্রাম
                      </li>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to={""}>
                      <li className="flex gap-4 mt-1 text-sm font-medium px-3 py-2 hover:bg-slate-200 rounded-lg">
                        <img
                          src="https://www.babu88.app/static/svg/mobileMenu/bettingPass.svg"
                          alt=""
                        />
                        বেটিং পাস
                      </li>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to={""}>
                      <li className="flex gap-4 mt-1 text-sm font-medium px-3 py-2 hover:bg-slate-200 rounded-lg">
                        <img
                          src="https://www.babu88.app/static/svg/mobileMenu/agentAff.svg"
                          alt=""
                        />
                        অধিভুক্ত
                      </li>
                    </Link>
                  </SheetClose>
                  <div className="border-b-2 pb-2">
                    <p className="text-sm">Games</p>
                  </div>
                  <SheetClose asChild>
                    <Link to={"/casino"}>
                      <li className="flex gap-4 mt-1 text-sm font-medium px-3 py-2 hover:bg-slate-200 rounded-lg">
                        <img
                          src="https://www.babu88.app/static/svg/mobileMenu/cricket.svg"
                          alt=""
                        />
                        ক্রিকেট
                      </li>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to={"/casino"}>
                      <li className="flex gap-4 mt-1 text-sm font-medium px-3 py-2 hover:bg-slate-200 rounded-lg">
                        <img
                          src="https://www.babu88.app/static/svg/mobileMenu/ld.svg"
                          alt=""
                        />
                        ক্যাসিনো
                      </li>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to={"/slot"}>
                      <li className="flex gap-4 mt-1 text-sm font-medium px-3 py-2 hover:bg-slate-200 rounded-lg">
                        <img
                          src="https://www.babu88.app/static/svg/mobileMenu/rng.svg"
                          alt=""
                        />
                        স্লট গেম
                      </li>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to={"/table-games"}>
                      <li className="flex gap-4 mt-1 text-sm font-medium px-3 py-2 hover:bg-slate-200 rounded-lg">
                        <img
                          src="https://www.babu88.app/static/svg/mobileMenu/table.svg"
                          alt=""
                        />
                        টেবিল গেম
                      </li>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to={"/sports-book"}>
                      <li className="flex gap-4 mt-1 text-sm font-medium px-3 py-2 hover:bg-slate-200 rounded-lg">
                        <img
                          src="https://www.babu88.app/static/svg/mobileMenu/sb.svg"
                          alt=""
                        />
                        খেলার বই
                      </li>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to={"/fishing"}>
                      <li className="flex gap-4 mt-1 text-sm font-medium px-3 py-2 hover:bg-slate-200 rounded-lg">
                        <img
                          src="https://www.babu88.app/static/svg/mobileMenu/fishing.svg"
                          alt=""
                        />
                        মাছ ধরা
                      </li>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to={"/crash"}>
                      <li className="flex gap-4 mt-1 text-sm font-medium px-3 py-2 hover:bg-slate-200 rounded-lg">
                        <img
                          className="w-4"
                          src="https://www.babu88.app/static/svg/mobileMenu/crash.svg"
                          alt=""
                        />
                        ক্র্যাশ
                      </li>
                    </Link>
                  </SheetClose>
                  {/* Add other menu items as needed */}
                </ul>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="w-52 sm:w-56 md:w-72">
            <Link>
              <img
                src={
                  "https://www.babu88.app/static/svg/bb88_logo_animation2.gif"
                }
                alt=""
              />
            </Link>
          </div>

          <div className="flex gap-3">
            {/* Sign up */}
            <ul className="md:flex items-center gap-4 hidden">
              <Link to={"/login"}>
                <li className="text-sm font-semibold px-3 py-2 rounded-lg bg-[#FFCD03] hover:bg-[#e5be22] transition-all duration-500">
                  প্রবেশ করুন
                </li>
              </Link>
              <Link to={"/registration"}>
                <li className="text-sm font-semibold px-3 py-2 rounded-lg text-white bg-[#0083FB] hover:bg-[#2f9bff] transition-all duration-500">
                  এখনি যোগদিন
                </li>
              </Link>
            </ul>

            {/* Language */}
            <ul>
              <li
                onClick={handleModalOpen}
                className="cursor-pointer text-sm lg:text-base font-semibold px-2 py-1 rounded-lg bg-[#d6d6d6] hover:bg-[#c2c2c2] transition-all duration-500"
              >
                <div className="flex items-center">
                  <div className="w-6 md:w-7">
                    <img
                      src={
                        "https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-bangladesh-flag-icon-in-modern-neomorphism-style-png-image_4872074.png"
                      }
                      alt="BD flag"
                    />
                  </div>
                  <FaCaretDown />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom navbar */}
      <div className="bg-[#333] md:flex hidden">
        <div className="container mx-auto px-4">
          <div className="">
            <ul className="flex overflow-x-auto">
              <Link>
                <li className="px-5 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  ক্রিকেট
                </li>
              </Link>
              <Link to={"/casino"}>
                <li className="px-5 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  ক্যাসিনো
                </li>
              </Link>
              <Link to={"/slot"}>
                <li className="px-5 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  স্লট গেম
                </li>
              </Link>
              <Link to={"/table-games"}>
                <li className="px-5 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  টেবিল গেম
                </li>
              </Link>
              <Link to={"/sports-book"}>
                <li className="px-5 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  খেলার বই
                </li>
              </Link>
              <Link to={"/fishing"}>
                <li className="px-5 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  মাছ ধরা
                </li>
              </Link>
              <Link to={"/crash"}>
                <li className="px-5 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  ক্র্যাশ
                </li>
              </Link>
              <Link to={"/promotion"}>
                <li className="px-5 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  প্রমোশন
                </li>
              </Link>
              <Link>
                <li className="px-4 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  বেটিং পাস
                </li>
              </Link>
              <Link to={"/referral"}>
                <li className="px-4 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  সুপারিশ
                </li>
              </Link>
              <Link>
                <li className="px-4 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  পুরস্কার
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onOpenChange={handleModalClose}
        title={"Currency and Language"}
      >
        <div className="space-y-4">
          <div className="flex gap-2 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2 w-full">
              <img
                className="w-10"
                src="https://www.babu88.app/static/image/country/BDT.svg"
                alt="BDT"
              />
              <p className="text-sm md:text-base font-semibold text-gray-400">
                ৳ BDT
              </p>
            </div>
            <button className="w-full px-3 py-2 text-sm md:text-base font-semibold text-gray-500 hover:text-yellow-300 hover:bg-red-50 border border-gray-300 rounded">
              ENGLISH
            </button>
            <button className="w-full px-3 py-2 text-sm md:text-base font-semibold text-gray-500 hover:text-yellow-300 hover:bg-red-50 border border-gray-300 rounded">
              BENGALI
            </button>
          </div>
          <div className="flex gap-2 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2 w-full">
              <img
                className="w-10"
                src="https://www.babu88.app/static/image/country/INR.svg"
                alt=""
              />
              <p className="text-sm md:text-base font-semibold text-gray-400">
                ৳ INR
              </p>
            </div>
            <button className="w-full px-3 py-2 text-sm md:text-base font-semibold text-gray-500 hover:text-yellow-300 hover:bg-red-50 border border-gray-300 rounded">
              ENGLISH
            </button>
            <button className="w-full px-3 py-2 text-sm md:text-base font-semibold text-gray-500 hover:text-yellow-300 hover:bg-red-50 border border-gray-300 rounded">
              HINDI
            </button>
          </div>
          <div className="flex gap-2 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2 w-full">
              <img
                className="w-10"
                src="https://www.babu88.app/static/image/country/NPR.svg"
                alt=""
              />
              <p className="text-sm md:text-base font-semibold text-gray-400">
                ৳ NPR
              </p>
            </div>
            <button className="w-full px-3 py-2 text-sm md:text-base font-semibold text-gray-500 hover:text-yellow-300 hover:bg-red-50 border border-gray-300 rounded">
              ENGLISH
            </button>
            <button className="w-full px-3 py-2 text-sm md:text-base font-semibold text-gray-500 hover:text-yellow-300 hover:bg-red-50 border border-gray-300 rounded">
              NEPALESE
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
