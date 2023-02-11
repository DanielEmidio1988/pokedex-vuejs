<template>
    <main>
        <section>
            <h1>Sobre</h1>
            <p>A Pokedex-VueJS é uma aplicação web da Pokedex com informações dos pokemons consumindo a API <a href="https://pokeapi.co/" target="_blank">PokeAPi</a>, que possui informações detalhadas de todos os pokemons existentes.</p>
            <p>Este é o meu primeiro projeto desenvolvido em VueJs, onde me concentrei em assimilar os conceitos e as diferenças entre ReactJs x VueJs.</p>
            <p>Aproveitem o projeto!</p>
            <img src="@/assets/Pikachu.gif" alt="pikachu-correndo"/>

        </section>
    </main>
</template>

<script>

export default{
    name: 'AboutPage',
}

</script>

<style scoped>

main{
    display: flex;
    justify-content: center;
    align-items: center;
}

section{
    background-color: white;
    color: #535353;
    box-shadow: 0.5px 0.5px 4px #BE9584;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    padding: 4vh;
    width: 90%;
    height: 64vh;
    gap: 2vh;
}

a{
    color: #483838;
}

a:hover{
   color: #EE6030 ;
}

h1{
    font-size: 8vh;
    margin-bottom: 4vh;
}

div{
    margin-top: 4vh;
}

img{
    
    width: 100px;
   
}


</style>