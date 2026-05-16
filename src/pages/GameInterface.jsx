import React, { useEffect, useReducer } from 'react'
import '../App.css'
import { IoMdArrowRoundBack } from "react-icons/io"
import { useNavigate } from 'react-router-dom'
import HistoryCard from '../components/cards/HistoryCard'
import GameArea from '../components/GameArea'
import { initialState } from '../game/initialState.js'
import { gameReducer } from '../game/gameReducer.js'
import { calculateTotal } from '../utils/calculateTotal.js'

function GameInterface() {

    const [state, dispatch] = useReducer(gameReducer, initialState);
    const totalValue = calculateTotal(state.hand);
    const reversedHistory = [...state.history].reverse().slice(0,6);//show only 6 history entries
    const navigate = useNavigate()

    // Initialize game once
    useEffect(() => {
        dispatch({ type: "INIT_GAME" });
    }, []);
    
    return (
        <main id='mahjong-table' className='w-full flex flex-col justify-center gap-4 text-on-surface'>

            {/* HEADER */}
            <header className='flex justify-between items-center px-6 py-4 border-b border-outline-variant/30'>

                {/* Back button */}
                <button
                    className='flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 border border-primary 
                    hover:bg-primary/20 transition-colors'
                    onClick={() => navigate('/')}>
                    <IoMdArrowRoundBack />
                    Back
                </button>

                {/* Title */}
                {/* <h1 className='text-lg font-semibold tracking-wide text-on-surface-variant'>
                    Mahjong Betting Game
                </h1> */}

                {/* Rules */}
                <button className='px-4 py-2 rounded-md border border-outline-variant/50 hover:bg-white/5 transition-colors'>
                    Rules of Play
                </button>

            </header>

            {/* TOP SECTION */}
            <section className='flex justify-between items-center px-10 py-6'>

                {/* Piles */}
                <div className='flex gap-6'>

                    {/* Draw Pile */}
                    <div className='flex flex-col items-center gap-2'>
                        <p className='text-sm text-on-surface-variant'>Draw Pile</p>

                        <div className='relative w-15 h-15 rounded-lg bg-primary-container/20 border border-primary-container
                            flex items-center justify-center text-xl font-bold'>

                            {state.deck.length}

                            {/* Notification pulse */}
                            <span className='absolute -top-1 -right-1 h-3 w-3 rounded-full bg-yellow-300 animate-ping'></span>
                            <span className='absolute -top-1 -right-1 h-3 w-3 rounded-full bg-yellow-400'></span>

                        </div>
                    </div>

                    {/* Discard */}
                    <div className='flex flex-col items-center gap-2'>
                        <p className='text-sm text-on-surface-variant'>Discard</p>

                        <div className='w-15 h-15 rounded-lg
                            bg-surface-container border border-outline-variant
                            flex items-center justify-center text-xl font-bold'>
                            {state.discardPile.length}
                        </div>
                    </div>

                </div>

                {/* SCORE */}
                <div className='text-center'>
                    <p className='text-sm text-on-surface-variant'>Score</p>
                    <h1 className='text-5xl font-bold text-primary drop-shadow-[0_0_10px_rgba(130,219,111,0.3)]'>
                        {state.score}
                    </h1>
                </div>

                {/* Placeholder right */}
                <div className='w-40'></div>

            </section>

            {/* FEEDBACK BANNER */}
            <section className='px-10'>
                <div className='w-full py-2 text-sm px-4 rounded-md
                    bg-primary/10 border border-primary/30
                    text-on-primary-container text-center'>
                    {!state.result && "Make your move: Bet Higher or Lower"}

                    {state.result === "WIN" && "🎯 Correct Guess!"}

                    {state.result === "LOSE" && "❌ Wrong Guess!"}

                </div>
            </section>

            {/* GAME AREA */}
            <section className='flex-1 flex items-center justify-center'>
                <div className='text-on-surface-variant'>
                    <GameArea hand={state.hand} dispatch={dispatch} />
                </div>
            </section>

            {/* HISTORY */}
            <section className='px-10 pb-6 border'>
                <h2 className='text-sm text-on-surface-variant mb-3'>History</h2>

                <div className='flex flex-col justify-center items-center gap-3'>
                    {
                        reversedHistory.map((entry, index) => {
                            return (<HistoryCard key={index} entry={entry} />)
                        })
                    }
                </div>
            </section>

        </main>
    )
}

export default GameInterface