import GameVendorButton from "@/components/shared/gameVendorButton/GameVendorButton";

const GameVendorList = ({ buttons }) => {
  return (
    <div>
      <div className="md:container md:mx-auto px-0 md:px-4 sm:px-10 lg:px-24 mt-6">
        <div className="p-2 lg:p-4 bg-slate-100 rounded-lg">
          <div className="flex whitespace-nowrap md:grid xl:grid-cols-6 grid-cols-4 gap-4 overflow-x-auto md:overflow-visible">
            {buttons?.map((button, index) => (
              <GameVendorButton
                key={index}
                gameVendorText={button.text}
                gameVendorImg={button.image}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-10 lg:px-24 mt-6">
        <div className="flex justify-between mt-6 pb-6 border-b-4">
          <div className="hidden md:block">
            <form className="flex gap-4">
              <label
                htmlFor="countries"
                className="text-base block mb-2 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                গেমগুলি সাজান :
              </label>
              <select
                id="countries"
                className="bg-white border border-black text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>অনুসন্ধান বিভাগ</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>
          <form className="w-full md:max-w-80">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full pl-8 pr-4 py-2 ps-10 text-sm text-gray-900 border rounded-full border-black bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="খেলা অনুসন্ধান করুন"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GameVendorList;
