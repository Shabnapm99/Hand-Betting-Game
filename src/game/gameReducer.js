import { calculateTotal } from "../utils/calculateTotal.js";
import { drawHand } from "../utils/drawHand.js";
import { generateDeck } from "../utils/generateDeck.js";
import { updateDeckTileValues } from '../utils/updateTilevalues.js'

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

        case "BET_LOWER": {
            const { hand: nextHand, updatedDeck } = drawHand(state.deck, 4);

            const currentValue = calculateTotal(state.hand);
            const nextValue = calculateTotal(nextHand);

            const isWin = nextValue < currentValue;
            const result = isWin ? "WIN" : "LOSE";

            // update the value of deck 
            const updatedFullDeck = updateDeckTileValues(updatedDeck, nextHand, result);

            const newHistoryEntry = {
                type: "BET_LOWER",
                previousHand: state.hand,
                nextHand,
                currentValue,
                nextValue,
                result,
            };

            return {
                ...state,
                hand: nextHand,
                deck: updatedFullDeck,
                score: isWin ? state.score + 10 : state.score,
                discardPile: [...state.discardPile, ...state.hand],
                history: [...state.history, newHistoryEntry],
            };
        }

        case "BET_HIGHER": {
            const { hand: nextHand, updatedDeck } = drawHand(state.deck, 4);

            const currentValue = calculateTotal(state.hand);
            const nextValue = calculateTotal(nextHand);

            const isWin = nextValue > currentValue;
            const result = isWin ? "WIN" : "LOSE";

            // update the value of deck 
            const updatedFullDeck = updateDeckTileValues(updatedDeck, nextHand, result);
            const newHistoryEntry = {
                type: "BET_HIGHER",
                previousHand: state.hand,
                nextHand,
                currentValue,
                nextValue,
                result,
            };
            return {
                ...state,
                hand: nextHand,
                deck: updatedFullDeck,
                score: isWin ? state.score + 10 : state.score,
                discardPile: [...state.discardPile, ...state.hand],
                history: [...state.history, newHistoryEntry],
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