import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const DepositModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("deposit");
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [amount, setAmount] = useState(400);

  const title =
    activeTab === "deposit"
      ? "Choose a payment method"
      : "Select a withdrawal method";

  const paymentMethods =
    activeTab === "deposit"
      ? [
          { name: "Nagad", logo: "/src/assets/deposit/ngot.svg" },
          { name: "Bkash", logo: "/src/assets/deposit/bkash.svg" },
        ]
      : [
          { name: "Bkash", logo: "/src/assets/deposit/bkash.svg" },
          { name: "Nagad", logo: "/src/assets/deposit/ngot.svg" },
          { name: "Upay", logo: "/src/assets/deposit/Upay.svg" },
        ];

  const presetAmounts = [400, 600, 800];

  return (
    <div className="w-full md:w-[360px] h-[500px] bg-white rounded-xl overflow-hidden relative">
      <h2 className="text-base font-semibold text-center p-3">Balance: ৳ 0</h2>
      <button
        onClick={onClose}
        className="absolute p-1 top-3 right-3 z-10 text-gray-400 hover:text-blue-600 duration-300 text-base"
      >
        <FaTimes />
      </button>

      <div className="w-full max-w-md mx-auto px-4 py-2 bg-white rounded-xl">
        {/* Tabs */}
        <div className="flex bg-gray-100 p-0.5 rounded-lg mb-4">
          <button
            onClick={() => {
              setActiveTab("deposit");
              setSelectedMethod(null);
            }}
            className={`flex-1 py-1.5 rounded-lg text-sm font-medium ${
              activeTab === "deposit"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
          >
            Deposit
          </button>
          <button
            onClick={() => {
              setActiveTab("withdraw");
              setSelectedMethod(null);
            }}
            className={`flex-1 py-1.5 rounded-lg text-sm font-medium ${
              activeTab === "withdraw"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
          >
            Withdraw
          </button>
        </div>

        {/* If payment method selected, show form */}
        {selectedMethod ? (
          <div className="flex flex-col gap-4">
            <div className="text-sm text-center">
              <img
                src={selectedMethod.logo}
                alt={selectedMethod.name}
                className="w-10 h-10 m-auto"
              />
              <p className="text-gray-500">{selectedMethod.name}</p>
            </div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter amount"
            />
            <div className="grid grid-cols-3 gap-2">
              {presetAmounts.map((a) => (
                <button
                  key={a}
                  onClick={() => setAmount(a)}
                  className={`w-full p-1.5 text-sm rounded-lg border border-gray-400 ${
                    amount === a
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-400"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
            <button className="w-full text-sm bg-blue-600 text-white py-2 rounded-lg font-semibold">
              CONTINUE
            </button>
          </div>
        ) : (
          <>
            {/* Payment Method Selection */}
            <p className="text-xs text-center text-black font-medium mb-3">
              {title}
            </p>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {paymentMethods.map((method, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedMethod(method)}
                  className="w-full h-[70px] bg-gray-100 rounded-md flex items-center justify-center flex-col shadow cursor-pointer transition border hover:border-blue-600"
                >
                  <img
                    src={method.logo}
                    alt={method.name}
                    className="w-8 h-8 mb-1 object-contain"
                  />
                  <span className="text-xs text-gray-400 font-semibold">
                    {method.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Partner Banner */}
            <div className="flex items-center justify-between bg-gray-100 rounded-xl p-4 shadow cursor-pointer">
              <div>
                <p className="text-sm font-semibold text-black">
                  Let&apos;s be partners →
                </p>
                <p className="text-xs text-gray-500">Accept payments with us</p>
              </div>
              <FaTelegramPlane className="text-blue-500 text-3xl" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DepositModal;
