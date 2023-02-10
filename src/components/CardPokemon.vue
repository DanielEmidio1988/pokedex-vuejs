<template>
    <section>   
        <div class="CardPokemon" v-for="pokemon in pokemons" :key="pokemon.name">
            <h1>{{ pokemon.name }}</h1>
        </div>
    </section>
</template>

<script>

// import axios from 'axios'
import basePokemon from '@/constants/BASE_URL'
// console.log("getPokemons", this.pokemons)

export default{
    name: 'CardPokemon',
    data() {
    return{
      pokemons: [],
    }
    },
    mounted (){
    basePokemon.get("/pokemon/?limit=150").then((response) => {
      this.pokemons = response.data.results
      console.log("pokemons", this.pokemons)
    });
  }
}



</script>

<style scoped>

section{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    margin-top: 4vh;
}

.CardPokemon{
    width: 250px;
    height: 300px;
    border-radius: 8px;
    border: 1px solid black;
}

</style>