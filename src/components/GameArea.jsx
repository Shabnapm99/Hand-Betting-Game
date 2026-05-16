import React, { useEffect, useReducer } from 'react'
import Tile from './cards/Tile'
import { generateDeck } from '../utils/generateDeck.js';
import { drawHand } from '../utils/drawHand.js'
import { calculateTotal } from '../utils/calculateTotal.js';
import { FaAnglesUp } from "react-icons/fa6";
import { FaAnglesDown } from "react-icons/fa6";

function GameArea({ hand, dispatch }) {

    const totalValue = calculateTotal(hand);

    return (
        <div className="flex flex-col gap-8 items-center p-8 rounded-2xl bg-primary-container/10 border border-outline-variant shadow-2xl max-w-2xl mx-auto backdrop-blur-md">

            {/* Total Score Badge */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-primary rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative px-6 py-2.5 border border-outline-variant rounded-full bg-surface-variant text-on-surface shadow-xl flex items-center gap-2">
                    <span className="text-sm uppercase tracking-wider text-on-surface-variant">Total: </span>
                    <span className="text-xl font-black text-primary animate-pulse">
                        {totalValue}
                    </span>
                </div>
            </div>

            {/* Hand Container */}
            <div className="w-full flex justify-center gap-4 p-6 bg-[#181817]/30 border border-outline-variant/40 rounded-xl shadow-inner min-h-40 items-center">
                {hand.length === 0 ? (
                    <p className="text-on-surface-variant italic text-sm">No cards drawn yet...</p>
                ) : (
                    hand.map((tile) => (
                        <div key={tile.id} className="transform hover:-translate-y-2 transition-transform duration-200 ease-out cursor-pointer">
                            <Tile tile={tile} />
                        </div>
                    ))
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-6 w-full max-w-md">
                {/* Bet Higher Button */}
                <button
                    onClick={() => dispatch({ type: 'BET_HIGHER' })}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wide
           text-black bg-primary hover:bg-[#97f284] active:scale-95 shadow-[0_4px_20px_rgba(130,219,111,0.25)] 
           hover:shadow-[0_4px_25px_rgba(130,219,111,0.4.5)] transition-all duration-150 cursor-pointer"
                >
                    <FaAnglesUp className="text-base" />
                    Bet Higher
                </button>

                {/* Bet Lower Button */}
                <button
                    onClick={() => dispatch({ type: 'BET_LOWER' })}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wide 
          text-[#5e1811] bg-secondary hover:bg-[#ffc7c1] active:scale-95 shadow-[0_4px_20px_rgba(255,180,172,0.15)] 
          hover:shadow-[0_4px_25px_rgba(255,180,172,0.3)] transition-all duration-150 cursor-pointer"
                >
                    <FaAnglesDown className="text-base" />
                    Bet Lower
                </button>
            </div>

        </div>


    )
}

export default GameArea