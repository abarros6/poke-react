

/*
#,Name,Type 1,Type 2,Total,HP,Attack,Defense,Sp. Atk,Sp. Def,Speed,Generation,Legendary
1,Bulbasaur,Grass,Poison,318,45,49,49,65,65,45,1,False
[id,name,type1,type2,total,hp,attack,defense,spatk,spdef,speed,generation,legendary]
[0---1----2-----3-----4----5----6------7-------8-----9----10------11---------12----]
*/

const Pokemon = ({pokemon, setCurrentPokemon, currentPokemon, image}) => {
    return (
        <div className="card bg-base-300 w-auto shadow-xl p-4">
            <figure>
                <img
                src= {image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center">
                    {pokemon[currentPokemon][1]}
                    <div className="badge badge-accent text-white">{pokemon[currentPokemon][2]}</div>
                    {
                        pokemon[currentPokemon][3] && 
                        <div className="badge badge-secondary">{pokemon[currentPokemon][3]}</div>
                    }
                </h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Stat</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr> 
                                <td>HP</td>
                                <td>{pokemon[currentPokemon][5]}</td>
                            </tr>
                            <tr>
                                <td>Attack</td>
                                <td>{pokemon[currentPokemon][6]}</td>
                            </tr>
                            <tr>
                                <td>Defense</td>
                                <td>{pokemon[currentPokemon][7]}</td>
                            </tr>
                            <tr> 
                                <td>Sp. Atk</td>
                                <td>{pokemon[currentPokemon][8]}</td>
                            </tr>
                            <tr>
                                <td>Sp. Def</td>
                                <td>{pokemon[currentPokemon][9]}</td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>{pokemon[currentPokemon][10]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Pokemon