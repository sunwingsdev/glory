import BannerSlider from "../../../components/home/bannerSlider/BannerSlider";
import SecondaryBanner from "../../../components/home/secondaryBanner/SecondaryBanner";
import GameCard from "../../../components/shared/gameCard/GameCard";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <div className="container mx-auto px-4 sm:px-10 lg:px-24">
        <SecondaryBanner />
        <h2 className="py-2 text-[27px] font-medium">হট গেমস</h2>
        <div className="pb-10 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
