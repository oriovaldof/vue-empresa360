<template>
  <div>
    <h5>Leads</h5>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">NOME</th>
                <th scope="col">TELEFONE</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="dado in dados" :key="dado.id">
                <td>{{dado.id}}</td>
                <td>{{dado.nome}}</td>
                <td>{{dado.telefone}}</td>
                <td>
                   <!-- <router-link :to="`/home/vendas/leads/${dado.id}`" class="btn btn-sm btn-primary">
                        <i class="bi bi-pencil-square" style="cursor:pointer"></i>
                    </router-link> -->
                  
                    <router-link :to="{name:'lead', params:{id: dado.id,outroParametro:`teste_${dado.id}`}}" class="btn btn-sm btn-primary">
                        <i class="bi bi-pencil-square" style="cursor:pointer"></i>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- {{ dados }} -->
  </div>
</template>
<script>
  import ApiMixin from '@/mixins/ApiMixin';
export default {
  name: "Leads",
  mixins:[ApiMixin],
  created() {
    this.getDadosApi("http://localhost:3000/leads");
  },
  //Guardas de Componanete
  /*
      beforeRouteEnter - executado antes de nvagear na rota de destino - recebe 'to','from', 'next'
      obs.: executado antes do proprio componente ser instanciado, ou seja não acessa nenhum atributo
      to = Destino;
      from = Origim;
      next = continua 
  */
  // beforeRouteEnter(to, from, next){
  beforeRouteEnter(){
    console.log('Guarda de componente beforeRouteEnter');
  },
    /*
      beforeRouteLeave - executado antes de deixar a rota de origem - recebe 'to','from', 'next'
      obs.: executado antes do proprio componente ser instanciado, ou seja não acessa nenhum atributo
      to = Destino;
      from = Origim;
      next = continua 
  */
  // beforeRouteLeave(to, from, next){
  beforeRouteLeave(){
    console.log('Guarda de componente beforeRouteLeave');
  }
};
</script>