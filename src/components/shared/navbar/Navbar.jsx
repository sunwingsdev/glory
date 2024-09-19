import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      {/* Start top navbar */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* manu icon */}
          <div className="md:hidden">
            <IoMenuOutline size={30} />
          </div>
          {/* logo */}
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
            {/* sign up */}
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
            {/* language */}
            <ul>
              <Link>
                <li className="text-sm lg:text-base font-semibold px-2 py-1 rounded-lg bg-[#d6d6d6] hover:bg-[#c2c2c2] transition-all duration-500">
                  <div className="flex items-center">
                    <div className="w-6 md:w-7">
                      <img
                        src={
                          "https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-bangladesh-flag-icon-in-modern-neomorphism-style-png-image_4872074.png"
                        }
                        alt=""
                      />
                    </div>
                    <FaCaretDown />
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/* End top navbar */}

      {/* start bottom navbar */}
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
              <Link>
                <li className="px-5 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  টেবিল গেম
                </li>
              </Link>
              <Link>
                <li className="px-5 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  খেলার বই
                </li>
              </Link>
              <Link>
                <li className="px-5 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  মাছ ধরা
                </li>
              </Link>
              <Link>
                <li className="px-5 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  ক্র্যাশ
                </li>
              </Link>
              <Link>
                <li className="px-5 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  প্রমোশন
                </li>
              </Link>
              <Link>
                <li className="px-4 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  বেটিং পাস
                </li>
              </Link>
              <Link>
                <li className="px-4 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  সুপারিশ
                </li>
              </Link>
              <Link>
                <li className="px-4 py-4 text-sm whitespace-nowrap lg:text-base font-semibold text-white hover:text-[#FFCD03] hover:bg-[#424242] transition-all duration-500">
                  অধিভুক্ত
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
      {/* end bottom navbar */}
    </div>
  );
};

export default Navbar;
