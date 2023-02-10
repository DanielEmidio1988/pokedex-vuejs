<template>
    <header>
        <nav class="container">
           <a href="/"><img src="../assets/logo-pokemon.svg" alt="logo-pokemon" class="logo-pkm"/></a>
           <img v-on:click="openMenu" src="../assets/filter.svg" alt="filtro" class="filter-menu"/>
        
           <div v-on:click="closeMenu" class="menu-overlay" v-if="menuOpen"></div>

            <div class="menu-filters" :class="{active:menuOpen}">
                <h1 class="text-menu">Pokedex</h1>
                <p class="text-menu">Encontre informações sobre seu Pokemon preferido em nossa Pokedex.</p>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
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
        openMenu: function(){
            this.menuOpen = true;
        },
        closeMenu: function(){
            this.menuOpen = false;
        }
    }
}

</script>

<style scoped>
    header{
        background-color:  #EE6030;       
        color:#ECECE2;
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

    .menu-filters{
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

    .menu-filters.active{
        display: flex;
    }

    h3:hover{
        cursor: pointer;
    }

    nav{
        display: flex;
        justify-content: space-between;
    }

    /* input{
        background-color: #483838;
        color: #F5CF6B;
        border: none;
        border-radius: 8px;
        height: 6vh;
        width: 50vw;
        text-align: center;

    } */

    @media (min-width: 700px){

        .menu-overlay, .filter-menu, .text-menu{
            display: none;
        }
        .menu-filters{
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        .menu-filters{
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

        li:hover{
            cursor: pointer;
            color: #483838;
        }

        input{
            height: 4vh;
            width: 20vw;
        }
    }

</style>