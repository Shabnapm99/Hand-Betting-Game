import { tileDefinition } from "../data/tilesData.js";

export function generateDeck() {
  const deck = [];

  tileDefinition.forEach((tile, index) => {
    for (let i = 0; i < 4; i++) {
      deck.push({
        ...tile,
        id: `${tile.suit}-${tile.symbol}-${i}-${index}`, // unique id
      });
    }
  });

  return shuffleDeck(deck);
}

// shuffle function
function shuffleDeck(deck) {
  const arr = [...deck];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}