import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const TransactionHistory = () => {
  const [activeTab, setActiveTab] = useState("deposit");
  // আগের পেজে ফেরত যায়
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="pt-2 pb-6 px-6 h-screen">
      <div className="relative flex items-center justify-center lg:justify-start mb-4">
        <button onClick={handleBack} className="absolute left-0 lg:hidden">
          <IoIosArrowBack size={20} />
        </button>
        <h2 className="text-xl lg:text-2xl font-semibold lg:font-bold">
          Transaction History
        </h2>
      </div>

      {/* Top Controls */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 mb-6">
        {/* Filter Dropdown */}
        <div className="w-full flex items-center gap-2">
          <span className="text-sm">Show:</span>
          <select className="w-full md:w-auto text-blue-600 font-medium border-none focus:outline-none">
            <option>All transactions</option>
            <option>Payment methods</option>
            <option>Bonuses for a friend</option>
            <option>Bonuses</option>
          </select>
        </div>

        {/* Tab Buttons */}
        <div className="w-full text-sm bg-[#f2f4fd] rounded-md flex">
          <button
            onClick={() => setActiveTab("deposit")}
            className={`w-full px-6 py-2 font-normal rounded-md ${
              activeTab === "deposit"
                ? "bg-blue-600 text-white shadow"
                : "text-black"
            }`}
          >
            DEPOSIT
          </button>
          <button
            onClick={() => setActiveTab("withdraw")}
            className={`w-full px-6 py-2 font-normal rounded-md ${
              activeTab === "withdraw"
                ? "bg-blue-600 text-white shadow"
                : "text-black"
            }`}
          >
            WITHDRAW
          </button>
        </div>
      </div>

      {/* Table Headers */}
      <div className="overflow-x-auto hidden md:block">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-gray-400 font-normal text-sm whitespace-nowrap">
              <th className="py-2 px-4">Payment method</th>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Creation date</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* No data yet */}
            <tr>
              <td colSpan="5" className="py-8 text-center text-gray-400">
                No transaction found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
