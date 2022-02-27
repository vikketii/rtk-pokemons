import React, { useState } from 'react'
import logo from '../../logo.svg'
import { useGetPokemonByNameQuery } from '../../app/api'

function Pokemon() {
    const [pokemonName, setPokemonName] = useState('bulbasaur')

    const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName)

    if (error) console.log(error)
    
    return (
        <>
            {isLoading && <img src={logo} className="App-logo" alt="logo" />}
            {data && (
                <div>
                    <img src={data.sprites.front_default} />
                    <div>
                        {data.name}
                    </div>
                </div>
            ) }

        </>
    )
}

export default Pokemon
