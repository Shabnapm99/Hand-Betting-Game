import React from 'react'

function ScoreCard({ score = 0, date = "2026-05-15", rank = 1 }) {
    return (
        <div className='
      flex items-center justify-between
      p-3 rounded-xl
      bg-white/5 backdrop-blur-md
      border border-white/10
      hover:bg-white/10
      transition-all duration-300
    '>

            {/* Rank */}
            <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full flex items-center justify-center bg-primary-container/10 border
                             border-primary-container text-on-primary-container font-bold text-sm'>
                    {rank}
                </div>

                {/* Score */}
                <div>
                    <h4 className='text-white font-semibold text-lg'>
                        {score}
                    </h4>
                    <p className='text-xs text-gray-400'>
                        Score
                    </p>
                </div>
            </div>

            {/* Date */}
            <div className='text-right'>
                <p className='text-sm text-gray-300'>
                    {date}
                </p>
                {/* <p className='text-xs text-gray-500'>
          Completed
        </p> */}
            </div>

        </div>
    )
}

export default ScoreCard