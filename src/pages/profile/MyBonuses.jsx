import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import img from "../../assets/profile/download.webp";

const MyBonuses = () => {
  // আগের পেজে ফেরত যায়
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="pt-2 pb-6 px-6">
      <div className="relative flex items-center justify-center lg:justify-start mb-4">
        <button onClick={handleBack} className="absolute left-0 lg:hidden">
          <IoIosArrowBack size={20} />
        </button>
        <h2 className="text-xl lg:text-2xl font-semibold lg:font-bold">
          My Bonuses
        </h2>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:mb-1">
        <h2 className="text-lg font-semibold text-gray-400 mb-4 md:mb-0">
          Available bonuses
        </h2>
        <div className="flex items-center gap-2 mb-6 md:mb-0">
          <input
            type="text"
            placeholder="Enter the promo code"
            className="w-full border rounded-lg px-4 py-2 pr-10 text-gray-500 bg-white focus:outline-none"
          />
          <Button className="bg-pink-600 hover:bg-pink-700 text-white">
            Apply
          </Button>
        </div>
      </div>

      <Card className="w-full m-auto md:m-0 max-w-sm bg-blue-50">
        <div className="">
          <div className="flex justify-between items-center px-3 py-2 bg-blue-200 rounded-t-md">
            <h3 className="font-semibold text-sm">Welcome Bonus</h3>
            <Link className="text-blue-600 text-sm font-medium">info</Link>
          </div>

          <div className="px-3 pt-3 pb-5">
            <div className="flex items-start gap-3">
              <img
                src={img}
                alt="Welcome Bonus"
                className="w-16 h-16 rounded"
              />
              <div className="flex-1">
                <p className="mt-2 text-sm text-gray-800">
                  <span className="font-bold">100%</span>{" "}
                  <a href="#" className="text-blue-600 font-semibold">
                    +250 Free Spins
                  </a>
                  <br />
                  for the first deposit from ৳ 500
                </p>
              </div>
            </div>
            <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white">
              GET
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MyBonuses;
