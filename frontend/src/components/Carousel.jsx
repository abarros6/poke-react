import Pokemon from './Pokemon.jsx'

const Carousel = ({
    pokemon, setCurrentPokemon, currentPokemon, 
    image, incrementPokemon, decrementPokemon}) => {
    return (
        <div className='flex flex-col items-center'>
            <Pokemon 
                pokemon={pokemon} 
                setCurrentPokemon={setCurrentPokemon} 
                currentPokemon={currentPokemon}
                image={image}
            />
            <div className='mt-4 flex flex-row'>
                <button 
                    className="btn btn-accent btn-circle btn-outline mr-8"
                    onClick={decrementPokemon}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#FFFFFF" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                    <path d="M19 12H6M12 5l-7 7 7 7"/>
                    </svg>
                </button>
                <button 
                    className="btn btn-accent btn-circle btn-outline ml-8"
                    onClick={incrementPokemon}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#FFFFFF" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h13M12 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Carousel