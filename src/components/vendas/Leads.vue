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
                    <router-link :to="`/home/vendas/leads/${dado.id}`" class="btn btn-sm btn-primary">
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
export default {
  name: "Leads",
  data: () => ({
    dados: null,
  }),
  methods: {
    getDadosApi() {
      fetch("http://localhost:3000/leads")
        .then((response) => response.json())
        .then((response) => {
          // console.log(response)
          this.dados = response;
        });
    },
  },
  created() {
    this.getDadosApi();
  },
};
</script>