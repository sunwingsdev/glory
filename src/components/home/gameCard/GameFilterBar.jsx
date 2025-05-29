import { useState } from "react";
import { FaSearch, FaSortAlphaDown } from "react-icons/fa";

const sortOptions = [
  { value: "az", label: "By alphabet A-Z" },
  { value: "za", label: "By alphabet Z-A" },
  { value: "new", label: "New" },
  { value: "popular", label: "By popularity" },
];

const GameFilterBar = ({ onSearch, onSortChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSortChange = (option) => {
    setSelectedSort(option.label);
    setSortOpen(false);
    onSortChange(option.value);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-row justify-between items-center gap-3 py-3">
      {/* Search Input */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Type game name"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full border border-slate-600 rounded-md py-1.5 lg:py-2 pl-10 pr-4 outline-none"
        />
        <FaSearch className="absolute left-4 top-3 lg:top-3.5 text-gray-500" />
      </div>

      {/* Sort Dropdown */}
      <div className="relative w-full md:w-1/4">
        <button
          onClick={() => setSortOpen(!sortOpen)}
          className="w-full flex items-center justify-between border border-blue-500 rounded-md px-4 py-1.5 lg:py-2 focus:outline-none"
        >
          <span className="text-gray-600">{selectedSort || "Sorting"}</span>
          <FaSortAlphaDown className="text-gray-500" />
        </button>

        {sortOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            {sortOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSortChange(option)}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selectedSort === option.label
                    ? "text-blue-600 font-semibold"
                    : ""
                }`}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameFilterBar;
