import fs from 'fs'

function formatPokemon() {
    let result = [];
    let final = [];
    
    fs.readFile('Pokemon.csv', 'utf8', function (err, data) {
        if (err) throw err

        let arr = data.split(/[,]|[\n]/)
        let pokemon = []

        for (let i = 0; i < arr.length; i++) {
            pokemon.push(arr[i])
            if (pokemon.length === 13) {
                result.push(pokemon)
                pokemon = []
            }
        }

        for (let i = 0; i < result.length; i++) {
            
            if (i > 0 && result[i][0] === result[i-1][0]) {
                continue
            } else {
                final.push(result[i])
            }
        }
    });

    return final 
}

export default formatPokemon()