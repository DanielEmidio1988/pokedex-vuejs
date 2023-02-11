<template>
    <main>
        <section>
            <h1>Contato</h1>
            <p>Olá! Agradeço por ter acompanhado meu projeto. Se quiser conhecer um pouco mais do meu trabalho, fique a vontade para me chamar.</p>
            <p>@: <a href="emidio.daniel@hotmail.com">emidio.daniel@hotmail.com</a></p>
            <p>T: 11 98231-4853</p>
            <div>
                <a href="https://www.linkedin.com/in/danielemidio1988" target="_blank"><img src="@/assets/logo-linkedin.svg" alt="link-linkedin"/></a>
                <a href="https://github.com/DanielEmidio1988" target="_blank"><img src="@/assets/logo-github.svg" alt="link-github"/></a>
            </div>
        </section>
        
    </main>
</template>

<script>

export default{
    name: 'ContactPage',
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
    margin-right: 2vw;
    width: 40px;
    transition: transform .3s;
}

img:hover{
    transform: scale(1.2);
}

</style>