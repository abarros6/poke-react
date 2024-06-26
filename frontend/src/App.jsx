import Filters from './components/Filters.jsx'
import Carousel from './components/Carousel.jsx'
import useImage from './hooks/useImage.js'

import { useState, useEffect } from 'react'

import PokemonLogo from './assets/PokemonLogo.png'

const App = () => {
    const [pokemon, setPokemon] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPokemon, setCurrentPokemon] = useState(1)

    const {loading , error, image} = useImage(currentPokemon)

    useEffect(() => {
        const getPokemon = async () => {
            setIsLoading(true)
    
            let response = await fetch(('/api/pokemon'), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
    
            let data = await response.json()
            setPokemon(data)
            setIsLoading(false)
        }

        getPokemon()
    }, [])

    const incrementPokemon = () => {
        if (currentPokemon < pokemon.length) {
            setCurrentPokemon(currentPokemon + 1)
        }
    }

    const decrementPokemon = () => {
        if (currentPokemon > 1) {
            setCurrentPokemon(currentPokemon - 1)
        }
    }

    return (
        <div className="lg:h-screen h-auto gap-8 flex flex-col text-center text-white items-center justify-center p-8 bg-repeat bg-poke-pattern">
            <div className='flex flex-col lg:flex-row gap-8 '>
                <div className='flex flex-col gap-8'>
                    <img
                        src= {PokemonLogo}
                        alt="Pokemon Logo" 
                        className=''
                    />
                    <Filters/>  
                    <button  className='btn btn-primary'>try</button>
                </div>
                {
                    isLoading && <div>Loading...</div>
                }
                {
                    !isLoading && <Carousel
                    incrementPokemon={incrementPokemon}
                    decrementPokemon={decrementPokemon}
                    pokemon={pokemon}
                    currentPokemon={currentPokemon}
                    setCurrentPokemon={setCurrentPokemon}
                    image={image}
                    />
                }
                
            </div>
        </div>
    )
}

export default App