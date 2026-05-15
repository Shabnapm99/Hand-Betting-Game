import React from 'react'

function Tile({ tile }) {
    return (
        <div className='w-20 h-28 bg-green-500 border border-amber-500/40 rounded-lg flex flex-col justify-center items-center gap-1'>
            {/* tile symbol */}
            <h2 className='text-3xl font-medium'>{tile.symbol}</h2>
            {/* Tile value */}
            <p className='text-xs'>{tile.value}</p>
        </div>
    )
}

export default Tile