import GameCard from "../gameCard/GameCard";

const games = [
  {
    name: "Super Ace",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/thunder-coins--hold-and-win-playson-4a3e883803392867bdf0e3c7586053d0215c9a0a-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "Super Elements",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/coin-volcano-threeoaks-f3840f26f909450e83f1f5da1427a4c7-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/coin-up--hot-fire-threeoaks-7925d4c8b4aa44a1929abd608d1ff874-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/coin-strike--hold-and-win-playson-dc2a86ac6099406291abe438bfb79c23-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/mriya-netgame-a054edc2ec93ab0000ba3a4f2e07c7a5846a0c07-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image: "https://images.3138722.com/TCG_GAME_ICONS/rx2/JL/EN/JL0045.png",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image: "https://images.185949949.com/TCG_GAME_ICONS/rx2/JL/EN/JL0044.png",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image: "https://images.185949949.com/TCG_GAME_ICONS/rx2/U9W/EN/U9W004.png",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image:
      "https://images.185949949.com/TCG_GAME_ICONS/rx2/EG4/EN/EG4326.png?t=1747293678550",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image: "https://images.185949949.com/TCG_GAME_ICONS/rx2/BT/EN/BT0085.png",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image: "https://images.185949949.com/TCG_GAME_ICONS/rx2/MG/EN/MG0416.png",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image: "https://images.185949949.com/TCG_GAME_ICONS/rx2/PG/EN/PG0066.png",
    playLink: "/",
    trialLink: "/",
  },
];

const PopularGame = () => {
  return (
    <div>
      <GameCard title="Popular" games={games} moreLink="" />
    </div>
  );
};

export default PopularGame;
