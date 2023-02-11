<template>
    <section>  
        <div class="BoxFilterPokemon">
          <input v-model="searchPokemonByName" placeholder="Informe o Nome ou Id do Pokemon"/>        
        </div> 

        <!-- Daniel: 'box' que exibe todos os 151 pokemons -->
        <div class="BoxListPokemons">
          <div class="CardPokemon" v-for="pokemon in filterPokemon" :key="pokemon.name" :style="{backgroundColor: getFirstTypePokemon(pokemon?.name)}">
              <div class="CardPokemonTop">                
                <h3>#{{ getIdPokemon(pokemon) }} - {{ pokemon.name }}</h3>
                <img 
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIdPokemon(pokemon)}.png`" 
                :alt="pokemon.name"
                class="ImgPokemonCard"/>
              </div>
              <div class="CardPokemonBottom">               
                <button @click="show_pokemon(getIdPokemon(pokemon))" class="buttonDetails">DETALHES</button>
              </div>
          </div>
        </div>

        <!-- Daniel: menu overlay da tela, só será exibido ao clicar em detalhes do Card do Pokemon-->
        <div @click="close_pokemon()" class="menu-overlay" v-if="showBoxPokemon"></div>
        
        <!-- Daniel: menu detalhes do pokemon, só será exibido ao clicar em detalhes -->
        <div @click="close_pokemon()" class="BoxListPokemonsDetails" :style="{backgroundColor: getTypeColor(selectedPokemon.types[0].type.name)}" v-if="showBoxPokemon">           
          <div class="BoxListPokemonsDetailsInfo">
              <img 
              :src="`${selectedPokemon.sprites?.other['official-artwork'].front_default}`"
              class="ImgPokemonDetails"/>
              <h1>{{ selectedPokemon.name }}</h1>
              
              <div class="BoxListPokemonsDetailsType">
                <div class="typeName" v-for="typePokemon in selectedPokemon.types" :key="typePokemon.slot">
                  {{ typePokemon.type.name }}
                </div>
              </div>
            </div>
            <div class="BoxListPokemonsDetailsInfoBattle">
              <div class="BoxPokemonsDetails">
                  <h1>About</h1>
                  <p>{{ getSpeciesPokemon(selectedPokemon.id) }} {{ aboutPokemon }}</p>
              </div>
              <div class="BoxPokemonsDetails">
                  <h1>Base Stats</h1>
                  <div v-for="baseStatusPokemon in selectedPokemon.stats" :key="baseStatusPokemon.stat.name">
                      {{ baseStatusPokemon.stat.name }}: {{ baseStatusPokemon.base_stat }}
                  </div>
                </div>
              <div class="BoxPokemonsDetails">
                  <h1>Moves</h1>
                  <div v-for="moves in filter4Moves" :key="moves.move.name">
                    {{ moves.move.name }}
                  </div>
              </div>
            </div>           
        </div>

    </section>
</template>

<script>

import basePokemon from '@/constants/BASE_URL'

export default{
    name: 'CardPokemon',
    data() {
    return{
      pokemons: [], // Daniel: será responsavel por armazenar todas as informações da lista pokemons
      pokemonsSpecies: [], // Daniel: será responsavel por armazenar todas os itens do endpoint species que contém informações como: sobre, linha evolutiva, etc...
      searchPokemonByName: "", //Daniel: será responsável por armazenar a informação do Id ou nome do pokemon filtrado
      showBoxPokemon: false, //Daniel: será responsável pela condicional se o modal de detalhes aparecera ou não
      selectedPokemon: null, //Daniel: será responsável por armazenar as informações do pokemon especifico
      aboutPokemon: "", //Daniel: será responsavel por armazenar informações "Sobre" (about) o pokemon
    }
    },
    mounted (){
    basePokemon.get("/pokemon/?limit=151").then((response) => {
      this.pokemons = response.data.results
    });
    },
    methods: {
      // Daniel: será responsável por buscar a ID do pokemon
      getIdPokemon(pokemon){
        return Number(pokemon.url.split("/")[6])
      },
      // Daniel: será responsável por exibir o modal do pokemon
      show_pokemon(id){
        basePokemon.get(`/pokemon/${id}`).then((response)=>{
          this.selectedPokemon = response.data
          console.log("pokemon", response.data)
        })
        this.showBoxPokemon = true
      },
      // Daniel: será responsável por buscar as informações "about" do pokemon
      getSpeciesPokemon(id){
      basePokemon.get(`/pokemon-species/${id}`).then((response)=>{
          this.aboutPokemon = response.data.flavor_text_entries[0].flavor_text
          console.log("Species", response.data.flavor_text_entries[0].flavor_text)
          return this.aboutPokemon})
      },
      // Daniel: será responsável por fechar o modal de detalhes do pokemon
      close_pokemon(){
        this.showBoxPokemon = false
      },
      // Daniel: será responsável por definir as cores do fundo dos cards de pokemon
      getTypeColor(type){
        switch (type) {
            case 'grass':
            return '#70B873'  
            case 'fire': 
            return '#FF9D55'
            case 'water':
            return '#33A4F5'  
            case 'poison':
            return '#AD61AE'  
            case 'flying':
            return '#6892B0'   
            case 'bug':
            return '#91C12F'  
            case 'normal':
            return '#919AA2' 
            case 'dark':
            return '#5C5365'   
            case 'dragon':
            return '#0A6CBF'   
            case 'ghost':
            return '#8B4E8C'   
            case 'electric':
            return '#F8D030'   
            case 'ground':
            return '#E0C068'   
            case 'fairy':
            return '#EE99AC' 
            case 'ice':
            return '#98D8D8'            
            case 'steel':
            return '#B8B8D0' 
            case 'fighting':
            return '#CE4069'  
            case 'psychic':
            return '#F85888' 
            case 'rock':
            return '#729F92'                         
            default:
            return '#000000'
        }
      },
      // Daniel: será responsável pelas cores do pokemon na página inicial 
      //Daniel: atualmente não está funcionando corretamente, apesar da função retornar os valores do metodo getTypeColor
      getFirstTypePokemon(pokemonName){   
        basePokemon.get(`/pokemon/${pokemonName}`).then((response)=>{
        this.color = this.getTypeColor(response?.data?.types[0]?.type?.name)          
        })                       
      }
    }, 
    computed:{
      // Daniel: será responsável por filtrar os pokemons por nome ou id
      filterPokemon(){
        return this.pokemons.filter((pokemon)=>{
          return pokemon.name.includes(this.searchPokemonByName) || pokemon.url.split("/")[6].includes(this.searchPokemonByName)
        })
      },
      // Daniel: será responsável por listar os movimentos do pokemon
      // Daniel: defini 4 movimentos para que a página ficasse mais 'enxuta', sem sobrecarregar o usuário de informações
      filter4Moves(){
        return this.selectedPokemon.moves.filter((pokemon,i)=>{
          return i < 4
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

.menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #000000;
        opacity: 0.8;
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

.BoxListPokemonsDetails{
  width: 90%;
  height: 90vh;
  position: fixed;
  top:4%;
  left: 4%;
  border-radius: 16px;
  display: flex;
}

.BoxListPokemonsDetailsInfo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  text-transform: capitalize;
  cursor: default;
  background-image: url('@/assets/pngwing.svg');
  background-size: 90% auto;
  background-repeat: no-repeat;
  background-position: top center;
}

.ImgPokemonDetails{
  width: 60%;
}

.BoxListPokemonsDetailsType{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  text-transform: capitalize;
  cursor: default;
}

.typeName{
  background-color: #483838;
  padding: 4px;
  color: white;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 8px;
  margin-top: 2vh;

}

.BoxListPokemonsDetailsInfoBattle{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  height: 100%;
  text-transform: capitalize;
  cursor: default;
  background-color: white;
  border-radius: 16px;
  padding: 2vh 0 0 2vw;
}

.BoxPokemonsDetails{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;
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

@media (max-width: 700px) {
  .BoxListPokemonsDetails{
    flex-direction: column;
    height: 100vh;
  }

  .BoxListPokemonsDetailsInfo{
    width: 100%;
    height: 44%;
  }

  .BoxListPokemonsDetailsInfoBattle{
    width: 100%;
    height: 56%;
  }

  .ImgPokemonDetails{
  width: 34%;
  min-width: 150px;
}

h1{
  font-size: 20px;
}

div{
  font-size: 14px;
}

}

</style>