import express from 'express'
import FormattedPokemon from './formatPokemon.js'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors({credentials: true , origin: 'http://localhost:3000'}))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/pokemon', (req, res) => {
  res.send(FormattedPokemon)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})