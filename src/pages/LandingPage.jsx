import React, { useState } from 'react'
import { GrCaretNext } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard';
import { AnimatePresence } from 'framer-motion';

function LandingPage() {

    const navigate = useNavigate();
    const [showLeaderboard, setShowLeaderboard] = useState(false);

    return (
        <main className='w-full h-screen bg-no-repeat bg-cover bg-center relative flex justify-center items-center'
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEgq2o2yQ80eCCKt6xy5opK0k9Ce6bywvI7FafzHsZjH2ZEc7Arx9KSdkhBpA-sF26xzucw-L07TxeyjCpyyCFOSshYo6lS7Rkc6je88W5mvPM-zz_vtmPQdYZ3tvOUUd6B30qnX2doJF-x7ihUkK5Cf0NGZhzz1z4P0OXJCdxAsAfkBXX9z4mfHGEHb1ve0zs-6YAIcOs-ZXnnBMfOHf30FtHHwtamEI73LSXvwNUgfWnPKN68Z__-ftCGsLRo7w7Y9v_BkTDv3s')" }}>

            {/* overlay div */}

            <div className='w-full h-screen bg-black/50 absolute'></div>

            {/* Hero section */}

            <section className='flex flex-col gap-6 pt-4 z-50'>

                <div className='text-center'>
                    <h2 className="text-on-surface font-bold text-4xl md:text-6xl tracking-tight leading-tight">
                        Mahjong <br />
                        <span className="text-primary italic">Hand Betting game</span>
                    </h2>
                </div>

                <p className="text-[15px] md:text-[18px] text-on-surface-variant max-w-xl mx-auto text-center">
                    Bet <span className='font-bold'>Higher</span> or <span className='font-bold'>Lower</span> on the next hand's total. Non-number tiles grow stronger with wins - and weaker with losses.
                </p>

                {/* Buttons */}

                <div className='flex flex-col md:flex-row justify-center items-center gap-6 pt-4 text-sm md:text-base'>
                    <button
                        className='px-12 py-3 rounded-lg text-on-primary-container bg-primary-container hover:scale-110 transition-all shadow-[0_0_25px_rgba(130,219,111,0.45)] font-medium flex justify-center gap-3 items-center'
                        onClick={() => navigate('/game')}>
                        New Game
                        <GrCaretNext />
                    </button>

                    <button
                        className='px-12 py-3 border border-outline-variant/50 rounded-lg text-on-surface hover:bg-surface-variant transition-all font-medium'
                        onClick={() => setShowLeaderboard(true)}>LeaderBoard</button>
                </div>

            </section>
            <AnimatePresence>
                {/* To make exit animation work, wrap inside AnimatePresence */}
                {
                    showLeaderboard && <Leaderboard onClose={() => setShowLeaderboard(false)} />
                }
            </AnimatePresence>


        </main>
    )
}

export default LandingPage