export function calculateTotal(hand) {
    return hand.reduce((sum, tile) => sum + tile.value, 0);
}