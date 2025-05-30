import GameFilterBar from "@/components/home/gameCard/GameFilterBar";
import PopularGame from "../../../components/home/All Game/PopularGame";
import BannerSlider from "../../../components/home/bannerSlider/BannerSlider";
import { useState } from "react";
import Menu from "@/components/home/menu/Menu";
import TopMenu from "@/components/home/menu/TopMenu";

const Home = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  const handleSearch = (text) => {
    const filtered = games.filter((g) =>
      g.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  const handleSortChange = (sortType) => {
    let sorted = [...filteredGames];
    switch (sortType) {
      case "az":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "new":
        sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "popular":
        sorted.sort((a, b) => b.popularity - a.popularity);
        break;
    }
    setFilteredGames(sorted);
  };

  return (
    <div className="px-3 sm:px-4">
      <TopMenu />
      <BannerSlider />
      <Menu />
      <GameFilterBar onSearch={handleSearch} onSortChange={handleSortChange} />
      <PopularGame />
    </div>
  );
};

export default Home;
