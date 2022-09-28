<template>
    <div>
      <h5>Contratos</h5>
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
    mixins:[ApiMixin],
    created() {
      this.getDadosApi("http://localhost:3000/contratos?_expand=lead&_expand=servico");
    },
  };
  </script>