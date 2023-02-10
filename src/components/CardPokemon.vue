<template>
    <section>  
        <div class="BoxFilterPokemon">
          <input v-model="searchPokemonByName" placeholder="Informe o Nome ou Id do Pokemon"/>        
        </div> 

        <div class="BoxListPokemons">
          <div class="CardPokemon" v-for="pokemon in filterPokemon" :key="pokemon.name">
              
              <div class="CardPokemonTop">                
                <h3>#{{ getIdPokemon(pokemon) }} - {{ pokemon.name }}</h3>
                <img 
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIdPokemon(pokemon)}.png`" 
                :alt="pokemon.name"
                class="ImgPokemonCard"/>
              </div>
              <div class="CardPokemonBottom">               
                <button class="buttonDetails">DETALHES</button>
              </div>
          </div>
        </div>

        <!-- <div></div> -->
    </section>
</template>

<script>

import basePokemon from '@/constants/BASE_URL'


export default{
    name: 'CardPokemon',

    data() {
    return{
      pokemons: [],
      pokemonsSpecies: [],
      searchPokemonByName: "",
      showPokemon: false,
      selectedPokemon: null,
    }
    },
    mounted (){
    basePokemon.get("/pokemon/?limit=150").then((response) => {
      this.pokemons = response.data.results
      console.log("pokemons", this.pokemons)
    });
    },
    methods: {
      getIdPokemon(pokemon){
        return Number(pokemon.url.split("/")[6])
      }
    }, 

    computed:{
      filterPokemon(){
        return this.pokemons.filter((pokemon)=>{
          return pokemon.name.includes(this.searchPokemonByName) || pokemon.url.split("/")[6].includes(this.searchPokemonByName)
        })
      }     
    }

}

</script>

<style scoped>

section{
    margin-top: 4vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.BoxFilterPokemon{
  width: 100%;
  display: flex;
  justify-content: center;
}

input{
        background-color: #483838;
        color: #F5CF6B;
        border: none;
        border-radius: 8px;
        height: 6vh;
        width: 90%;
        text-align: center;
        font-size: 16px;
    }

.BoxListPokemons{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    margin-top: 4vh;
}

.CardPokemon{
    width: 200px;
    height: 240px;
    border-radius: 16px;
    border: 4px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #535353;
    text-transform: capitalize;
    background-color: #70B873;
    background-image: url("@/assets/pngwing.svg");
    background-size: 80% auto;
    background-repeat: no-repeat;
    background-position: top center;
    box-shadow: 0.5px 0.5px 4px #BE9584;
}

.CardPokemonTop{
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  border-radius: 12px 12px 0 0;
  cursor: default;
}

h3{
  font-weight: lighter;
}

.CardPokemonBottom{
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px 16px 8px 8px;
  background-color: white;
  cursor: default;
}

.buttonDetails{
  width: 90%;
  height: 30px;
  font-weight: bold;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: #70B873;
  font-size: 16px;
  transition: opacity .2s;
}

.buttonDetails:hover{
  cursor: pointer;
  opacity: 0.8;
}

.ImgPokemonCard{
  height: 80%;
}

</style>