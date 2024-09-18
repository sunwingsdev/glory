import BannerSlider from "../../../components/home/bannerSlider/BannerSlider";
import SecondaryBanner from "../../../components/home/secondaryBanner/SecondaryBanner";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <div className="container mx-auto px-4 sm:px-10 lg:px-24">
        <SecondaryBanner />
      </div>
    </div>
  );
};

export default Home;
