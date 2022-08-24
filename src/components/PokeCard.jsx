import React from 'react'
import './PokeCard.css'

const PokeCard = ({pokemon}) => {
  return (
    <div>

        {pokemon !== null ? (
            <div className='pokemon_container'>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
            </div>): (<h2>Choose Pokemon</h2>)
        }
    </div>
  )
}

export default PokeCard