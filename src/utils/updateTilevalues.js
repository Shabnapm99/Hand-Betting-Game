// export function updateDeckTileValues(deck, result) {
//   return deck.map(tile => {
//     if (tile.type === "number") return tile;

//     return {
//       ...tile,
//       value:
//         result === "WIN"
//           ? tile.value + 1
//           : tile.value - 1,
//     };
//   });
// }


export function updateDeckTileValues(deck, nextHand, result) {
  // Get unique names of non number tiles in the hand
  const affectedTiles = nextHand
    .filter(tile => tile.type !== "number")
    .map(tile => tile.name)

  //If no non-number tiles in hand, return deck as is
  if (affectedTiles.length === 0) return deck

  // Update value of matching tiles in deck
  return deck.map(tile => {
    if (tile.type !== "number" && affectedTiles.includes(tile.name)) {
      const newValue = result === "WIN" 
        ? tile.value + 1 
        : tile.value - 1

      return { ...tile, value: newValue }
    }
    return tile
  })
}