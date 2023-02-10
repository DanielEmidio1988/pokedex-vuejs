import axios from "axios";

const basePokemon = axios.create({
    baseURL:'https://pokeapi.co/api/v2'
})

export default basePokemon