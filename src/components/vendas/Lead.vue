<template>
  <div>
    <h5>Detalhes da Lead: {{ dados.id }} - {{ dados.nome }}</h5>
    <!-- {{ dados }} -->
    <div class="mb-m row">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          :value="dados.id"
        />
      </div>
    </div>
    <div class="mb-m row">
      <label class="col-sm-2 col-form-label">Nome</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" :value="dados.nome" />
      </div>
    </div>
    <div class="mb-m row">
      <label class="col-sm-2 col-form-label">Telefone</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" :value="dados.telefone" />
      </div>
    </div>
    <div class="mb-m row">
      <div class="col-md-6">
        <router-link class="btn btn-danger" to="/home/vendas/leads"
          >Fechar</router-link
        >
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-primary">Atualizar</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Lead",
  data: () => ({
    dados: {},
  }),
  methods: {
    getDadosApi() {
      fetch(`http://localhost:3000/leads/${this.$route.params.id}`)
        .then((response) => response.json())
        .then((response) => {
          // console.log(response)
          this.dados = response;
        });
    },
  },

  created() {
    // console.log(this.$route.params);
    this.getDadosApi();
  },
};
</script>