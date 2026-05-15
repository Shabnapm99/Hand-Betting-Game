import React from 'react'
import Tile from './cards/Tile'
import {generateDeck} from '../utils/generateDeck.js'

function GameArea() {
    return (
        <div>
            {/* Value section */}
            <div className='px-4 py-2 border rounded-full w-fit '>
                <p>Total:</p>
            </div>
            {/* Hand tiles */}
            <div className='flex'>
                {
                    generateDeck().map((tile) => {
                        return (

                            <Tile key={tile.id} tile={tile} />

                        )
                    })
                }
            </div>
        </div>


    )
}

export default GameArea