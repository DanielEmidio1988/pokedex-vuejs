<template>
    <header>
        <nav class="container">
           <a href="/"><img src="../assets/logo-pokemon.svg" alt="logo-pokemon" class="logo-pkm"/></a>
           <img v-on:click="openMenu" src="../assets/menu.svg" alt="filtro" class="filter-menu"/>
        
           <div v-on:click="closeMenu" class="menu-overlay" v-if="menuOpen"></div>

           <!-- Daniel: menu hamburger, só será exibido quando a largura da tela for abaixo de 700px -->
            <div class="menu-hamburguer" :class="{active:menuOpen}">
                <h1 class="text-menu">Pokedex</h1>
                <p class="text-menu">Encontre informações sobre seu Pokemon preferido em nossa Pokedex.</p>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
                <h3 v-on:click="closeMenu" class="text-menu">X</h3>
            </div>  
        </nav>
       
    </header>
</template>

<script>

export default {
    name:'PkmHeader',
    data(){
        return{
        menuOpen: false
        }
    },
    methods:{
        // Daniel: será responsável por abrir o menu hamburguer
        openMenu: function(){
            this.menuOpen = true;
        },
        // Daniel: será responsável por fechar o menu hamburguer
        closeMenu: function(){
            this.menuOpen = false;
        }
    }
}

</script>

<style scoped>
    header{
        background-color:  #EE6030;       
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0 0 8px 8px;
    }

    .logo-pkm{
        width: 130px;
    }

    .menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: #000000;
        opacity: 0.8;
    }

    .menu-hamburguer{
        width: 60%;
        height: 100vh;
        padding-top: 4vh;
        position: fixed;
        top:0;
        right: 0;
        background-color:  #EE6030;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 2vh;
        text-align: center;
    }

    .menu-hamburguer.active{
        display: flex;
    }

    h3:hover{
        cursor: pointer;
    }

    nav{
        display: flex;
        justify-content: space-between;
    }

    @media (min-width: 700px){

        .menu-overlay, .filter-menu, .text-menu{
            display: none;
        }
        .menu-hamburguer{
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        .menu-hamburguer{
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            padding-top: 0;       
        }

        ul{
            display: flex;
            height: 60px;
            align-items: center;
            gap: 14px;
            transition: color .3s;
        }

        input{
            height: 4vh;
            width: 20vw;
        }
    }

</style>