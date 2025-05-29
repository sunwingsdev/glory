import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const [phone, setPhone] = useState("");

  // আগের পেজে ফেরত যায়
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-5xl mx-auto pt-2 pb-6 px-6">
      <div className="relative flex items-center justify-center lg:justify-start mb-4">
        <button onClick={handleBack} className="absolute left-0 lg:hidden">
          <IoIosArrowBack size={20} />
        </button>
        <h2 className="text-xl lg:text-2xl font-semibold lg:font-bold">
          Personal data
        </h2>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Country */}
        <div className="relative">
          <label className="text-sm text-gray-500">Country</label>
          <input
            type="text"
            value="Bangladesh"
            readOnly
            className="w-full border rounded-lg px-4 py-2 pr-10 text-gray-500 bg-white 
               focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
          <FaRegEdit className="absolute right-3 top-9 text-gray-400 cursor-pointer" />
        </div>

        {/* Time Zone */}
        <div className="relative">
          <label className="text-sm text-gray-500">Time Zone</label>
          <input
            type="text"
            value="(GMT +6:00)"
            readOnly
            className="w-full border rounded-lg px-4 py-2 pr-10 text-gray-500 bg-white 
               focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
          <FaRegEdit className="absolute right-3 top-9 text-gray-400 cursor-pointer" />
        </div>

        {/* Currency */}
        <div className="relative">
          <label className="text-sm text-gray-500">Currency</label>
          <input
            type="text"
            value="BDT"
            readOnly
            className="w-full border rounded-lg px-4 py-2 pr-10 text-gray-500 bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
          <FaRegEdit className="absolute right-3 top-9 text-gray-400 cursor-pointer" />
        </div>

        {/* ID */}
        <div>
          <label className="text-sm text-gray-500">ID</label>
          <input
            type="text"
            value="1176132658"
            readOnly
            className="w-full border rounded-lg px-4 py-2 pr-10 text-gray-500 bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>

        {/* Name */}
        <div>
          <label className="text-sm text-gray-500">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-lg px-4 py-2 pr-10 text-gray-500 bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>

        {/* Birth date */}
        <div>
          <label className="text-sm text-gray-500">Birth date</label>
          <input
            type="date"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <label className="text-sm text-gray-500">E-mail</label>
          <input
            type="email"
            value="sunwingsdev@gmail.com"
            readOnly
            className="w-full border rounded-lg px-4 py-2 pr-10 text-gray-500 bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
          <FaRegEdit className="absolute right-3 top-9 text-gray-400 cursor-pointer" />
        </div>

        {/* Phone number */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Phone number
          </label>
          <PhoneInput
            country={"bd"}
            value={phone}
            onChange={setPhone}
            inputClass="!w-full !py-2 !pl-12 !pr-4 !text-gray-700 !border !rounded-md !focus:ring-2 !focus:ring-blue-600 !outline-none"
            buttonClass="!border-none"
            dropdownClass="!z-50"
            enableSearch={true}
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="text-sm text-gray-500">Password</label>
          <input
            type="password"
            value="mypassword"
            readOnly
            className="w-full border rounded-lg px-4 py-2 pr-10 text-gray-500 bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
          <FaRegEdit className="absolute right-3 top-9 text-gray-400 cursor-pointer" />
        </div>

        <button className="bg-blue-600 text-white p-3 rounded-xl font-semibold uppercase">
          Save
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
