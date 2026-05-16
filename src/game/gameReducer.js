import { drawHand } from "../utils/drawHand";
import { generateDeck } from "../utils/generateDeck";

// Reducer function
export function gameReducer(state, action) {
    switch (action.type) {
        case "INIT_GAME": {
            const newDeck = generateDeck();
            const tilesInDeck = 4;
            const { hand, updatedDeck } = drawHand(newDeck, tilesInDeck);
            return {
                ...state,
                deck: updatedDeck,
                hand,
            };
        }

        case "DRAW_NEXT_HAND": {
            const newHand = drawHand(state.deck, 4);
            const newDeck = state.deck.slice(4);

            return {
                ...state,
                hand: newHand,
                deck: newDeck,
                discardPile: [...state.discardPile, state.hand],
            };
        }

        case "UPDATE_SCORE": {
            return {
                ...state,
                score: state.score + action.payload,
            };
        }

        case "GAME_OVER": {
            return {
                ...state,
                gameOver: true,
            };
        }

        default:
            return state;
    }
}