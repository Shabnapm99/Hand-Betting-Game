export function drawHand(deck, handSize = 4) {

  const hand = deck.slice(0, handSize);

  const updatedDeck = deck.slice(handSize);

  return {
    hand,
    updatedDeck
  };
}