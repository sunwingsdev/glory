import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const TournamentCard = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 10,
    minutes: 48,
    seconds: 24,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.days * 86400 +
          prev.hours * 3600 +
          prev.minutes * 60 +
          prev.seconds -
          1;
        if (totalSeconds < 0) {
          clearInterval(countdown);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="py-2 flex items-center gap-3"
      >
        <IoIosArrowBack size={20} />
        <h1 className="text-2xl">Tournaments</h1>
      </button>
      <div className="text-gray-400 font-medium">Active</div>

      <div className="mt-3 mb-8 w-full sm:w-80 bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="https://diswdgcu9cfva.cloudfront.net/tournaments/glory/allindeluxe/632x400.webp"
          alt="Roulette"
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center bg-blue-50">
          <h2 className="text-base font-semibold text-blue-700">
            All-In Deluxe
          </h2>
          <p className="text-2xl font-bold text-blue-600 mt-1">€ 4000</p>
          <p className="text-sm text-gray-500">Prize fund</p>

          <div className="flex justify-center gap-4 mt-4 text-center">
            {["days", "hours", "minutes", "seconds"].map((unit, i) => (
              <div key={i}>
                <p className="text-base font-semibold">
                  {String(timeLeft[unit]).padStart(2, "0")}
                </p>
                <p className="text-xs text-gray-500 capitalize">{unit}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Until the end of the tournament
          </p>

          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg">
            PARTICIPATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
