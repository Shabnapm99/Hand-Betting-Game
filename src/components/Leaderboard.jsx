import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { IoCloseSharp } from "react-icons/io5";
import ScoreCard from './cards/ScoreCard';

function Leaderboard({ onClose }) {

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-100 flex justify-end"
      onClick={onClose}>

      <motion.section
        className='w-75 h-full bg-[#132418]/90 p-2 bg-cover relative'
        style={{ backgroundImage: 'url(/images/leaderboardBg.jpg)' }}

        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* inner overlay layer */}
        <div className="absolute inset-0 bg-black/80"></div>
        {/* content layer */}
        <div className='z-10 relative text-white'>

          {/* close button */}

          <div className="flex items-center justify-end p-2">
            <button
              onClick={onClose}
              className="p-2 rounded hover:bg-white/10 hover:text-primary-container transition-all"
            >
              <IoCloseSharp size={22} />
            </button>
          </div>
          <div className='px-2'>
            <h3 className='font-bold text-2xl text-on-surface mb-4'>Top 5 Scores</h3>
            <div className='flex flex-col gap-4'>
              <ScoreCard />
              <ScoreCard />
              <ScoreCard />
              <ScoreCard />
              <ScoreCard />
            </div>
          </div>
        </div>


      </motion.section>

    </div>
  )
}

export default Leaderboard