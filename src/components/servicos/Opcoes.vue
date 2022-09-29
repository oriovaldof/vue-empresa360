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
        }
    }
</script>