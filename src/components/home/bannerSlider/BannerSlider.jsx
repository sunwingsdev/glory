import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    img: "https://diswdgcu9cfva.cloudfront.net/banners/glory/aviator/aviator_desktop.webp",
    title: "ASTRONAUT",
    subtitle: "Gain altitude and grab the big win in time!",
    buttonText: "PLAY",
  },
  {
    img: "https://diswdgcu9cfva.cloudfront.net/banners/glory/glorygames/desktop.webp",
    title: "GLORY GAMES",
    subtitle: "Feel the thrill of the battlefield!",
    buttonText: "PLAY NOW",
  },
  {
    img: "https://diswdgcu9cfva.cloudfront.net/banners/glory/crazycoins/desktop.webp",
    title: "CRAZY COINS",
    subtitle: "Collect coins in this crazy adventure!",
    buttonText: "START",
  },
  {
    img: "https://diswdgcu9cfva.cloudfront.net/banners/glory/heiststakes/desktop.webp",
    title: "HEIST STAKES",
    subtitle: "Risk big, win bigger!",
    buttonText: "JOIN",
  },
  {
    img: "https://diswdgcu9cfva.cloudfront.net/banners/glory/bonuses/bonuses_desktop.webp",
    title: "BONUSES",
    subtitle: "Unlock exciting rewards daily!",
    buttonText: "CLAIM",
  },
];

const BannerSlider = () => {
  return (
    <div className="pb-3 w-full max-w-5xl mx-auto rounded-xl overflow-hidden">
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-40 sm:h-[320px]">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-xl overflow-hidden"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 text-black">
                <h2 className="text-2xl sm:text-4xl font-bold md:mb-2">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg mb-8 lg:mb-24">
                  {slide.subtitle}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded-md text-xs sm:text-base w-[50%] md:w-[30%]">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
