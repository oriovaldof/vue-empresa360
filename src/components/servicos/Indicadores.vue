<template>
    <div>
        <h5>Componente Indicadores</h5>
        <p>Poderíamos recupear os indicadores do servico id {{id}}</p>
    </div>
</template>
<script>
    export default{
        name:'Indicadores',
        props:['id'],
        created(){
            // console.log('Indicadores', this.$route.params.id);
            // console.log('Indicadores parametro via props', this.id);
        }
    }
</script>