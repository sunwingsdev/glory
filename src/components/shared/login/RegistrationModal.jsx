import { Link } from "react-router-dom";
import Select from "react-select";

const options = [
  { value: "BDT", label: "BDT" },
  { value: "UZS", label: "UZS" },
  { value: "INR", label: "INR" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #2684FF",
    borderRadius: "6px",
    padding: "2px",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
};

const RegistrationModal = ({ onClose, openLogin }) => {
  const handleChange = (selectedOption) => {
    console.log("Selected currency:", selectedOption);
  };
  return (
    <div className="w-full md:w-[360px] h-[500px] bg-white rounded-xl overflow-hidden relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 z-10 text-gray-400 text-xl"
      >
        ✕
      </button>

      {/* Right Side (Form) */}
      <div className="w-full px-4 py-6 flex flex-col justify-center">
        <h2 className="text-gray-600 text-center text-xl font-medium mb-4">
          Sign up
        </h2>

        <input
          type="text"
          placeholder="Email"
          className="text-black px-4 py-2 mb-3 border rounded-lg outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-black px-4 py-2 mb-3 border outline-none rounded-lg"
        />
        <div className="mb-4">
          <Select
            options={options}
            defaultValue={options[0]}
            onChange={handleChange}
            isSearchable
            styles={customStyles}
          />
        </div>
        <label className="flex items-center gap-1.5 text-sm text-black mb-2">
          <input type="checkbox" className="" /> I accept the{" "}
          <Link className="text-blue-500">Terms & Conditions</Link>
        </label>
        <label className="flex items-center gap-1.5 text-sm text-black mb-6">
          <input type="checkbox" className="" /> I am 18 years old
        </label>

        <button className="text-sm font-semibold bg-blue-600 text-white py-3 rounded-lg mb-6 uppercase">
          Sign up
        </button>

        <p className="text-sm mb-3 text-black text-center">
          Already have an account{" "}
          <span className="text-blue-500 cursor-pointer" onClick={openLogin}>
            Sign up
          </span>
        </p>
        <p className="text-sm  text-black text-center">
          Forgot your password?{" "}
          <span className="text-blue-500 cursor-pointer">Restore</span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationModal;
