<template>
    <div>
      <h5>Contratos</h5>
      <div class="d-flex justify-content-between">

     
      <router-link class="btn btn-primary" :to="{name:'contratos',query:{leadId_like:1}}">LeadId=1</router-link>
      <router-link class="btn btn-primary" to="/home/vendas/contratos?servicoId_like=2">ServicoId=1</router-link>

      <router-link class="btn btn-success" :to="{name:'contratos',query:{leadId_like:1, servicoId_like:2 }}">LeadId=1 e ServicoId=2</router-link>
      <router-link class="btn btn-success" to="/home/vendas/contratos?servicoId_like=2&leadId_like=2">ServicoId=1</router-link>
    </div>
      <table class="table table-hover">
          <thead>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">LEAD</th>
                  <th scope="col">SERVICO</th>
                  <th scope="col">DATA INICIO</th>
                  <th scope="col">DATA FIM</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="dado in dados" :key="dado.id">
                  <td>{{dado.id}}</td>
                  <td>{{dado.lead.nome}}</td>
                  <td>{{dado.servico.servico}}</td>
                  <td>{{dado.data_inicio}}</td>
                  <td>{{dado.data_fim}}</td>
                  
              </tr>
          </tbody>
      </table>
      <!-- {{ dados }} -->
    </div>
  </template>
  <script>
    import ApiMixin from '@/mixins/ApiMixin';
  export default {
    name: "Contratos",
    data: ()=>({
        parametrosDeRelacionamento:'_expand=lead&_expand=servico'
    }),
    mixins:[ApiMixin],
    created() {
      this.getDadosApi(`http://localhost:3000/contratos?${this.parametrosDeRelacionamento}`);
    },
    beforeRouteUpdate(to, from, next){
        
        const queryParams = new URLSearchParams(to.query).toString();
        const url = `http://localhost:3000/contratos?${this.parametrosDeRelacionamento}&${queryParams}`;
        
        this.getDadosApi(url);

        next();
    }
  };
  </script>