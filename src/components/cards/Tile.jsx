import React from 'react'
import { getTileColor } from '../../utils/getTileColor';

function Tile({ tile }) {

    const colorClass = getTileColor(tile.suit);

    return (
        <div
            className={`relative w-24 h-36 bg-linear-to-b from-surface-variant to-[#1e1e1d] border border-outline-variant/60 
                rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.05)] flex flex-col justify-between p-3 
                select-none transform transition-all duration-300 ease-out hover:-translate-y-2 cursor-pointer group ${colorClass.glow}`}>
            {/* Tile Layer Effect */}
            <div className="absolute top-0 left-3 right-3 h-0.5 bg-linear-to-r from-transparent via-white/10 to-transparent rounded-full" />

            {/* Top Number Value & Mini suit */}
            <div className="flex justify-between items-center w-full">
                <span className="text-base font-black tracking-tighter text-on-surface drop-shadow">
                    {tile.value}
                </span>
                <span className={`text-xs font-semibold ${colorClass.text} opacity-80 group-hover:scale-110 transition-transform`}>
                    {tile.symbol}
                </span>
            </div>

            {/* Center Dynamic Graphic Area */}
            <div className="relative w-full flex flex-col items-center justify-center py-2 grow pointer-events-none">
                {/* Giant blurry background symbol for high-end look */}
                <span className={`absolute text-5xl font-bold blur-md opacity-10 ${colorClass.text}`}>
                    {tile.symbol}
                </span>

                {/* Center symbol */}
                <span className={`text-4xl font-extrabold tracking-normal drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] filter 
                    group-hover:scale-110 transition-transform duration-300 ${colorClass.text}`}>
                    {tile.symbol}
                </span>
            </div>

            {/* Bottom Suit Badge */}
            <div className={`mt-auto text-center py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest border transition-all 
                duration-300 ${colorClass.badge}`}>
                {tile.suit}
            </div>

        </div>
    )
}

export default Tile