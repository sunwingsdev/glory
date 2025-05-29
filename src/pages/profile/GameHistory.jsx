import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import gameImg from "../../assets/profile/gameHistory.png";

const GameHistory = () => {
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
          Game history
        </h2>
      </div>

      <div className="w-full md:w-96 m-auto text-center mb-6">
        <img
          className="w-52 md:w-60 lg:w-72 m-auto"
          src={gameImg}
          alt="gameHistory"
        />
        <h2 className="text-sm font-semibold">Game history is empty</h2>
        <p className="text-sm text-blue-400 mb-4">
          The games you have visited will be displayed here
        </p>
        <button className="w-full p-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 duration-300 rounded-md uppercase">
          Play
        </button>
      </div>
    </div>
  );
};

export default GameHistory;
