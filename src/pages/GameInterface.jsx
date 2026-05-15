import React from 'react'
import '../App.css'
import { IoMdArrowRoundBack } from "react-icons/io"
import { useNavigate } from 'react-router-dom'
import HistoryCard from '../components/cards/HistoryCard'
import GameArea from '../components/GameArea'

function GameInterface() {

    const navigate = useNavigate()

    return (
        <main id='mahjong-table' className='w-full h-screen flex flex-col text-on-surface'>

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

                            136

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
                            0
                        </div>
                    </div>

                </div>

                {/* SCORE */}
                <div className='text-center'>
                    <p className='text-sm text-on-surface-variant'>Score</p>
                    <h1 className='text-5xl font-bold text-primary drop-shadow-[0_0_10px_rgba(130,219,111,0.3)]'>
                        0
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
                    Make your move: Bet Higher or Lower
                </div>
            </section>

            {/* GAME AREA */}
            <section className='flex-1 flex items-center justify-center'>
                <div className='text-on-surface-variant'>
                    <GameArea />
                </div>
            </section>

            {/* HISTORY */}
            <section className='px-10 pb-6'>
                <h2 className='text-sm text-on-surface-variant mb-3'>History</h2>

                <div className='flex flex-col justify-center items-center gap-3'>
                    <HistoryCard />
                    <HistoryCard />
                    <HistoryCard />
                </div>
            </section>

        </main>
    )
}

export default GameInterface