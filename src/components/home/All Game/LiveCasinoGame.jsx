import GameCard from "../gameCard/GameCard";

const games = [
  {
    name: "Super Ace",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/crazy-time-evolution-f5477233821dcbe2367df4237f18fbac5b506b84-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "Super Elements",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/monopoly-live-evolution-ff771a90b7b1f70b99bab999f1d28971faf0709e-1.webp",
    playLink: "/",
  },
  {
    name: "lucky",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/mega-wheel-pragmaticplaylive-3767449285304828b177deb6995bdecc-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/sweet-bonanza-candyland-pragmaticplaylive-35eba85f4e674ac9a4cdf828db13af0d-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/live-roulette-european-platipus-live-c6bad6d5c797413ea8ba54241454e5d3-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/funky-time-evolution-c65d0ada7bd9700f29af036c402622d61dcfff53-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/live-roulette-european-vip-platipus-live-cc8e1936ff704ee8b002e312da240ecc-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/fortune-roulette-pragmaticplaylive-3f0d18883e9e47169f851bdb70620c2a-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/lucky-6-roulette-pragmaticplaylive-3aaab2536d8a4cc380db9d804b822c85-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/immersive-roulette-deluxe-pragmaticplaylive-58ec5b61cf4f36365f4bebcfd1dc7a8fcaf8d078-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/monopoly-big-baller-evolution-39e4443647b2dd86bd26699297e6583d189e46e3-1.webp",
    playLink: "/",
    trialLink: "/",
  },
  {
    name: "lucky",
    image:
      "https://diswdgcu9cfva.cloudfront.net/covers2/auto-roulette-evolution-5ea95af91adde51c37106baf92ad0829e1e22036-1.webp",
    playLink: "/",
    trialLink: "/",
  },
];

const LiveCasinoGame = () => {
  return (
    <div>
      <GameCard
        title="Play and win in Evolution, PragmaticPlayLive, Ezugi"
        games={games}
        moreLink=""
      />
    </div>
  );
};

export default LiveCasinoGame;
