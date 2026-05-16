import React from "react";
import Tile from "./Tile";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";

function HistoryCard({ entry }) {
    const isWin = entry.result === "WIN";
    const bet = entry.type === "BET_HIGHER";

    return (
        <div className="w-full flex items-center justify-between px-3 py-2
                        bg-surface-container/50 rounded-lg border border-outline-variant">

            {/* WIN/LOSE ICON */}
            <div className="text-xl w-10 flex justify-center">
                {isWin ? (
                    <span className="text-green-400 font-bold"><TiTick /></span>
                ) : (
                    <span className="text-red-400 font-bold"><RiCloseLine /></span>
                )}
            </div>

            {/* TILES */}
            <div className="flex gap-1 flex-1 justify-center">
                {entry.previousHand.map((tile) => (

                    <div className="scale-75">
                        <Tile tile={tile} />
                    </div>

                ))}
            </div>

            {/* SCORE & ARROW */}
            <div className="flex items-center gap-2 w-24 justify-end">
                <span className="text-lg font-semibold text-on-surface">
                    {entry.currentValue}
                </span>

                <span className='text-sm' >
                    {bet ? <FaAnglesUp className="text-base text-green-400" />
                        : <FaAnglesDown className="text-base text-red-400" />}
                </span>
            </div>
        </div>
    );
}

export default HistoryCard;