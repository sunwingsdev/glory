import LiveCasinoGame from "@/components/home/All Game/LiveCasinoGame";
import BannerSlider from "@/components/home/bannerSlider/BannerSlider";
import GameFilterBar from "@/components/home/gameCard/GameFilterBar";
import Menu from "@/components/home/menu/Menu";
import TopMenu from "@/components/home/menu/TopMenu";
import { useState } from "react";

const LiveCasino = () => {
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
      <LiveCasinoGame />
    </div>
  );
};

export default LiveCasino;
