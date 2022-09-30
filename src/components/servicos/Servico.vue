<template>
  <div class="card">
    <div class="card-header bg-primary text-white">
      {{ dados.servico }}
    </div>
    <div class="card-body">
      <p class="card-text">{{ dados.descricao }}</p>
    </div>
  </div>
</template>
  <script>
import ApiMixin from "@/mixins/ApiMixin";
export default {
  name: "Servico",
  mixins: [ApiMixin],
  props:['id'],
  created() {
    // console.log(this.$route.params);
    // console.log('Servico', this.$route.params.id);
    // this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`);

    // console.log('Servico via props', this.$props);
    this.getDadosApi(`http://localhost:3000/servicos/${this.id}`);
  },
  beforeRouteUpdate(to, from, next){
    //to= $route para onde estamos indo
    //from = $route de onde estamos vindo
    //next= faz com que o fluxo de navegação siga em frente
    // console.log(to.params.id)
    // console.log(from.params.id)
    if (to.params.id != undefined)
        this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`);
    next();
  }
  /*,
  watch: {
    $route(to) {
      //converção: to = novo valor, from = valor antigo
      if (to.params.id != undefined)
        this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`);
    },
  },*/
};
</script>