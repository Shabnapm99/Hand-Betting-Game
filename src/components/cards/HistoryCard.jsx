import React from "react";
import Tile from "./Tile";

function HistoryCard({ entry }) {
    const isWin = entry.result === "WIN";

    return (
        <div className="w-full flex items-center justify-between px-4 py-3 
                        bg-surface-container rounded-lg border border-outline-variant">

            {/* WIN/LOSE ICON */}
            <div className="text-xl w-10 flex justify-center">
                {isWin ? (
                    <span className="text-green-400 font-bold">✔</span>
                ) : (
                    <span className="text-red-400 font-bold">✖</span>
                )}
            </div>

            {/* TILES */}
            <div className="flex gap-2 flex-1 justify-center">
                {entry.previousHand.map((tile) => (
                    // <div
                    //     key={index}
                    //     className="w-10 h-14 flex flex-col items-center justify-center 
                    //                rounded border border-outline-variant bg-surface"
                    // >
                    //     <span className="text-xs text-primary">
                    //         {tile.value}
                    //     </span>
                    //     <span className="text-lg font-bold">
                    //         {tile.symbol}
                    //     </span>
                    // </div>
                    <Tile key={tile.id} tile={tile}/>
                ))}
            </div>

            {/* SCORE & ARROW */}
            <div className="flex items-center gap-2 w-24 justify-end">
                <span className="text-lg font-semibold text-on-surface">
                    {entry.currentValue}
                </span>

                <span className={`text-sm ${isWin ? "text-green-400" : "text-red-400"}`}>
                    {isWin ? "▲" : "▼"}
                </span>
            </div>
        </div>
    );
}

export default HistoryCard;