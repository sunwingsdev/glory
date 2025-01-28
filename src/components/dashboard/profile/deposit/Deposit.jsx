import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import RightItem from "./RightItem";

const Deposit = () => {
  // Options data
  const options = [
    { id: 1, label: "স্পোর্টস 100% প্রথম ডিপোজিট বোনাস - 100.00%" },
    { id: 2, label: "100% স্লট প্রথম ডিপোজিট বোনাস - 100.00%" },
    { id: 3, label: "ক্র্যাশ গেম 50% প্রথম ডিপোজিট বোনাস - 50.00%" },
    { id: 4, label: "50% লাইভ ক্যাসিনো প্রথম আমানত বোনাস - 50.00%" },
    {
      id: 5,
      label: "সক্রিয় জুয়া খেলার ঘর থেকে সাপ্তাহিক ২০% আমানত বোনাস - 20.00%",
    },
    { id: 6, label: "সাপ্তাহিক স্লট ২০% আমানত বোনাস - 20.00%" },
    { id: 7, label: "আনলিমিটেড 5% রিলোড বোনাস (স্লট) - 5.00%" },
    { id: 8, label: "আনলিমিটেড 5% রিলোড বোনাস (ক্র্যাশ) - 3.00%" },
  ];

  // State for selected option
  const [selectedOption, setSelectedOption] = useState("");

  // Handle change
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("Selected Option:", event.target.value);
  };
  return (
    <div className="flex gap-4">
      <div className="w-full p-3 sm:p-4 lg:p-6 bg-white rounded-lg space-y-4">
        <h1 className="text-lg font-semibold">আমানত</h1>

        <div className="space-y-2">
          <h2 className="text-base">
            আমানত বিকল্প <span className="text-red-500">*</span>
          </h2>
          <div className="flex gap-4">
            <Link className="relative">
              <div className="p-4 px-4 w-full sm:w-24 h-16 flex items-center justify-center hover:bg-slate-200 duration-300 rounded-2xl border-2 border-yellow-400">
                <img
                  src="https://www.babu88h.com/static/svg/deposit-ewallet-nagad.svg"
                  alt=""
                />
              </div>
              <div className="p-1 absolute -top-1 -right-1 flex justify-center items-center text-[9px] text-white bg-blue-500 rounded-full">
                +3%
              </div>
            </Link>
            <Link className="relative">
              <div className="p-4 w-full sm:w-24 h-16 flex items-center justify-center hover:bg-slate-200 duration-300 rounded-2xl border-2 border-gray-300">
                <img
                  src="https://www.babu88h.com/static/svg/deposit-ewallet-bkash.svg"
                  alt=""
                />
              </div>
              <div className="p-1 absolute -top-1 -right-1 flex justify-center items-center text-[9px] text-white bg-blue-500 rounded-full">
                +3%
              </div>
            </Link>
            <Link className="relative">
              <div className="p-4 w-20 sm:w-24 h-16 flex items-center justify-center hover:bg-slate-200 duration-300 rounded-2xl border-2 border-gray-300">
                <img
                  src="https://www.babu88h.com/static/svg/deposit-ewallet-upay.svg"
                  alt=""
                />
              </div>
              <div className="p-1 absolute -top-1 -right-1 flex justify-center items-center text-[9px] text-white bg-blue-500 rounded-full">
                +3%
              </div>
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-base">
            আমানত চ্যানেল <span className="text-red-500">*</span>
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <Link>
              <div className="py-1.5 px-4 flex items-center justify-center hover:bg-slate-200 duration-300 rounded-lg border-2 border-yellow-400">
                SPEEDPAY
              </div>
            </Link>
            <Link>
              <div className="py-1.5 px-4 flex items-center justify-center hover:bg-slate-200 duration-300 rounded-lg border-2 border-gray-400">
                PAYTAKA
              </div>
            </Link>
            <Link>
              <div className="py-1.5 px-4 flex items-center justify-center hover:bg-slate-200 duration-300 rounded-lg border-2 border-gray-400">
                DPAY
              </div>
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 justify-between w-full sm:w-80">
            <h2 className="text-base">
              আমানত পরিমাণ <span className="text-red-500">*</span>
            </h2>
            <FaQuestionCircle />
          </div>
          <form action="">
            <input
              type="text"
              className="w-full sm:w-80 py-1.5 px-4 border-2 border-gray-300 outline-none rounded-xl"
              placeholder="200"
            />
          </form>
          <p className="text-xs font-mibold">
            ৳ 400.00 এর নিচে ডিপজিটে কোন বোনাস পাবেন না
          </p>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <Link>
              <div className="py-1.5 px-4 flex items-center justify-center hover:bg-slate-200 duration-300 rounded-lg border-2 border-yellow-400">
                200
              </div>
            </Link>
            <Link className="relative">
              <div className="py-1.5 px-4 flex items-center justify-center hover:bg-slate-200 duration-300 rounded-lg bg-gray-200">
                500
              </div>
              <div className="p-1 absolute -top-1 -right-1 flex justify-center items-center text-[9px] text-white bg-blue-500 rounded-full">
                +3%
              </div>
            </Link>
            <Link className="relative">
              <div className="py-1.5 px-4 flex items-center justify-center hover:bg-slate-200 duration-300 rounded-lg bg-gray-200">
                2000
              </div>
              <div className="p-1 absolute -top-1 -right-1 flex justify-center items-center text-[9px] text-white bg-blue-500 rounded-full">
                +3%
              </div>
            </Link>
            <Link className="relative">
              <div className="py-1.5 px-4 flex items-center justify-center hover:bg-slate-200 duration-300 rounded-lg bg-gray-200">
                5000
              </div>
              <div className="p-1 absolute -top-1 -right-1 flex justify-center items-center text-[9px] text-white bg-blue-500 rounded-full">
                +3%
              </div>
            </Link>
            <Link className="relative">
              <div className="py-1.5 px-4 flex items-center justify-center hover:bg-slate-200 duration-300 rounded-lg bg-gray-200">
                10000
              </div>
              <div className="p-1 absolute -top-1 -right-1 flex justify-center items-center text-[9px] text-white bg-blue-500 rounded-full">
                +3%
              </div>
            </Link>
            <Link className="relative">
              <div className="py-1.5 px-4 flex items-center justify-center hover:bg-slate-200 duration-300 rounded-lg bg-gray-200">
                20000
              </div>
              <div className="p-1 absolute -top-1 -right-1 flex justify-center items-center text-[9px] text-white bg-blue-500 rounded-full">
                +3%
              </div>
            </Link>
          </div>
          <h2 className="text-base">
            আমানত বিকল্প <span className="text-red-500">*</span>
          </h2>
          <div className="space-y-4 w-full sm:w-80">
            <select
              id="options"
              value={selectedOption}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <option value="">নো বোনাস সিলেক্ট করুন</option>
              {options.map((option) => (
                <option key={option.id} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button className="py-3 px-10 w-full sm:w-80 text-sm text-white bg-blue-500 hover:bg-blue-600 duration-300 rounded-full border">
            আমানত
          </button>
        </div>
      </div>
      <RightItem />
    </div>
  );
};

export default Deposit;
