import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const GameCard = ({ title = "HOT GAMES", games = [] }) => {
  return (
    <div className="max-w-5xl mx-auto py-3 lg:py-4">
      <h2 className="text-lx lg:text-2xl font-bold text-black mb-4 hidden lg:block">
        {title}
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2 md:gap-3">
        {games.map((game, index) => (
          <SwiperSlide key={index}>
            <div className="relative group overflow-hidden rounded-lg xl:rounded-xl shadow-md">
              {/* Game Image */}
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-auto rounded-lg"
              />

              {/* Heart Icon */}
              {game.showHeart && (
                <Link to={game.heartLink || "#"}>
                  <div className="absolute top-2 right-2 bg-[#ffffff45] bg-opacity-80 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                   2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 
                   2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 
                   5.42 22 8.5c0 3.78-3.4 6.86-8.55 
                   11.54L12 21.35z"
                      />
                    </svg>
                  </div>
                </Link>
              )}

              {/* Hover Overlay */}
              <div className="w-full absolute inset-0 flex flex-col items-center justify-center bg-blue-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 uppercase">
                <div className="w-[90%] flex flex-col gap-2 text-white">
                  {/* Play Button */}
                  {game.playLink && (
                    <Link to={game.playLink}>
                      <div className="w-full py-2.5 text-sm font-bold bg-blue-600 rounded-lg text-center">
                        {game.playText || "PLAY"}
                      </div>
                    </Link>
                  )}

                  {/* Trial Button (Optional) */}
                  {game.trialLink && (
                    <Link to={game.trialLink}>
                      <div className="w-full py-2.5 text-sm font-bold border rounded-lg text-center">
                        {game.trialText || "Demo"}
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
      <button className="mt-4 lg:mt-8 mb-2 lg:mb-4 w-full p-3 text-sm font-semibold text-white bg-blue-600 rounded-lg uppercase">
        More
      </button>
    </div>
  );
};

export default GameCard;
