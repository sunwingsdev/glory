import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.svg";

// Casino
const helpLinks = [
  { label: "Live-Dealer", link: "/liveCasino" },
  { label: "Aviator", link: "/" },
  { label: "Welcome Bonus", link: "/" },
  { label: "Tournaments", link: "/tournaments" },
];
// Game center
const gameLinks = [
  { label: "Company", link: "/" },
  { label: "T&C", link: "/" },
  { label: "KYC & AML Policy", link: "/" },
  { label: "Privacy & Security", link: "/" },
  { label: "Responsible Gambling", link: "/" },
  { label: "Cookie policy", link: "/" },
];
const vendorLogos = ["JL-COLOR.png", "SPB-COLOR.png"];

const Footer = () => {
  return (
    <div className="bg-[#EEF0F8]">
      <div className="w-full max-w-5xl mx-auto py-6 px-4 lg:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-4 text-[#3156EB] border-b border-slate-300">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to={"/"}>
              <img className="w-20 md:w-28" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Casino */}
          <div className="col-span-1">
            <h2 className="text-sm lg:text-base font-bold text-black">
              Casino
            </h2>
            <ul className="flex flex-col mt-1 text-xs sm:text-sm">
              {helpLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#8C94B2] after:transition-all after:duration-300 hover:after:w-full hover:text-[#8C94B2]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-1">
            <h2 className="text-sm lg:text-base font-bold text-black">
              Information
            </h2>
            <ul className="flex flex-col mt-1 text-xs sm:text-sm">
              {gameLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#8C94B2] after:transition-all after:duration-300 hover:after:w-full hover:text-[#8C94B2]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Networks */}
          <div className="hidden md:block">
            <h2 className="mb-2 text-base font-bold text-black">
              Social Networks
            </h2>
            <div className="flex gap-2">
              <Link className="flex items-center justify-center w-8 h-8 text-lg rounded-full text-white bg-blue-400">
                <FaTelegramPlane />
              </Link>
              <Link className="flex items-center justify-center w-8 h-8 text-lg rounded-full text-white bg-red-400">
                <FaInstagram />
              </Link>
              <Link className="flex items-center justify-center w-8 h-8 text-lg rounded-full text-white bg-blue-700">
                <FaFacebookF />
              </Link>
            </div>
          </div>
        </div>

        {/* payment */}
        <div className="flex justify-center gap-6 border-b border-slate-300 py-5 lg:py-6">
          {vendorLogos.map((logo, index) => (
            <img
              key={index}
              className="w-14"
              src={`https://images.185949949.com/TCG_PROD_IMAGES/RNG_LIST_VENDOR/${logo}`}
              alt={`Vendor ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4 py-4 lg:py-6">
          {vendorLogos.map((logo, index) => (
            <img
              key={index}
              className="w-14"
              src={`https://images.185949949.com/TCG_PROD_IMAGES/RNG_LIST_VENDOR/${logo}`}
              alt={`Vendor ${index + 1}`}
            />
          ))}
        </div>
        <p className="text-center text-xs text-[#8C94B2] mb-20 lg:mb-6">
          Bettor IO N.V. is licensed and authorized by the Government of Curacao
          and operates under the Master License of Gaming Services Provider,
          N.V. #365/JAZ as an Information Service Provider. Bettor IO N.V.
          registration number is 157065 and its Business address: Abraham de
          Veerstraat, 9, Willemstad, Curaçao. Mailing address: P.O. Box 3421,
          Abraham de Veerstraat, 9, Willemstad, Curaçao. Bettor IO N.V. is
          licensed and authorized by the Government of Curacao and operates
          under the Master License of Gaming Services Provider, N.V. #365/JAZ as
          an Information Service Provider. Bettor IO N.V. registration number is
          157065 and its Business address: Abraham de Veerstraat, 9, Willemstad,
          Curaçao. Mailing address: P.O. Box 3421, Abraham de Veerstraat, 9,
          Willemstad, Curaçao.
        </p>
      </div>
    </div>
  );
};

export default Footer;
