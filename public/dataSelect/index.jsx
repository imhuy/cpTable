const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

const listGenre = [
  "Action",
  "Adventure",
  "AR",
  "Arcade",
  "Auto Battler",
  "Base Building",
  "Battle Royale",
  "Brawler",
  "Breeding",
  "Card Game",
  "Casual",
  "City Building",
  "Collectible",
  "Combat",
  "DeFi",
  "Fantasy",
  "Fighting",
  "Football Game",
  "FPS",
  "Frontier defense",
  "Horror Game",
  "Idle Game",
  "Metaverse",
  "Minigame",
  "Mining",
  "MMO",
  "MMORPG",
  "MOBA",
  "Move To Earn",
  "Puzzle",
  "PVP",
  "Racing",
  "RNG",
  "RPG",
  "Sci-Fi",
  "Shooter",
  "Simulation",
  "Space Game",
  "Sports",
  "Strategy",
  "Survival",
  "Tower Defense",
  "Turn-based Strategy",
  "Virtual-World",
  "VR",
  "Other",
];

const listBlockchain = [
  "Hive",
  "WAX",
  "EOS",
  "BNB Chain",
  "Polygon",
  "Ethereum",
  "Immutable-X",
  "Solana",
  "TRON",
  "NEO",
  "Flow",
  "Enjin",
  "NEAR",
  "Avalanche",
  "Vulcan Forged",
  "Harmony",
  "OKExChain",
  "IOST",
  "HECO",
  "Gala Games",
  "Terra",
  "Aurora",
  "Cardano",
  "Elrond",
  "Celo",
  "VeChain",
  "Fantom",
  "Qtum",
  "Klaytn",
  "Algorand",
  "Cronos",
  "DEAP Coin",
  "Moonbeam",
  "Moonriver",
  "Oasis Network",
  "Polkadot",
  "Xaya",
  "Phantasma",
  "WEMIX",
  "Myria",
  "Huobi ECO Chain Mainnet",
  "Wanchain",
  "Arbitrum One",
  "BNB Sidechain",
  "Dogechain",
  "MEVerse",
  "Aptos",
  "Other",
];

const listPlatform = [
  "Android",
  "iOS",
  "Windows",
  "Browser",
  "Mac",
  "Linux",
  "PC",
  "Mobile",
];

const objectGenre = [];
const objectPlatform = [];
const objectBlockchain = [];

const objectChange = (arr, object) => {
    arr.map((_, index) => {
        object.push({Name: arr[index], Code: kebabCase(arr[index])})
    })
}

objectChange(listGenre, objectGenre);
objectChange(listPlatform, objectPlatform);
objectChange(listBlockchain, objectBlockchain);


export {
        objectGenre,
        objectPlatform,
        objectBlockchain
} 



