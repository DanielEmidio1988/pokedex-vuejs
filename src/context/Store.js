import Vue from 'vue';
import basePokemon from '@/constants/BASE_URL';

const store = new Vue({
  data: {
    pokemons: []
  },
  mounted (){
    basePokemon.get("/pokemon/?limit=150").then((response) => {
      this.pokemons = response.data.results
      console.log("pokemons", this.pokemons)
    });
    },
});

export default store;