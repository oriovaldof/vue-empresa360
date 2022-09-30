<template>
   <div>
        <h5>Componente Opcoes</h5>
        <p>Poderíamos recupear as opções do servico id {{id}}</p>
    </div>
</template>
<script>
    export default{
        name:'Opcoes',
        props:['id'],
        created(){
            // console.log('Opcoes', this.$route.params.id);
            // console.log('Opcoes parametro via props', this.id);
        },
        //Guardas de Componanete
        /*
            beforeRouteUpdate - executado quando a rota sofre alteracao - recebe 'to','from', 'next'
            to = Destino;
            from = Origim;
            next = continua 
        */
        // beforeRouteUpdate(to, from, next){
        beforeRouteUpdate(){
            console.log("Guarda de componente beforeRouteUpdate");
        }
    } 
</script>