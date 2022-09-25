<template>
  <div>
    <nav class="navbar navbar-light bg-light menu-superior">
      <div class="container">
        <a class="navbar-brand" href="#">Empresa 360</a>
        <div class="navbar-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Voltar</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="row mt-5">
      <div class="col-6 offset-3">
        <div class="card">
          <p class="card-header">Entrar</p>
          <div class="card-body">
            <div class="mb-3">
              <input type="email" class="form-control" placeholder="E-mail" />
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" placeholder="Senha" />
            </div>
            <button class="btn btn-primary" @click="navegarPara">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    navegarPara() {
      // console.log(this.$router) //objeto de roteamento


        //coletar os dados de e-mail e senha
        //realizar um requisicao http de autenticacao
        //receber o token de autorizacao


      //Push aidiciona um nova rota ao hisotrico de navegação
      this.$router.push("/home"); //passando string direto
      //   this.$router.push({ path: "/home",});//passadno em forma de objeto

      //Replace substitui a rota atual ao hisotrico de navegação
      // this.$router.replace('/home'); //passando string direto
      // this.$router.replace({ path: "/home",});//passadno em forma de objeto

      // this.$router.forward(); //forward avançar no historico de rotas no navegador
      //   this.$router.back(); //retornar no historico de rotas do naagador
      // this.$router.go(2); //avançar ou retornar no historio de rotas do navagador (valores positivos avança)
      // this.$router.go(-2); //avançar ou retornar no historio de rotas do navagador (valores negativos retorna)
    },
  },
};
</script>