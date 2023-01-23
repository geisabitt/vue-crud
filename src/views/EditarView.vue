<template>
  <h1>Editar cliente {{ this.$route.params._id }} </h1>
  <div class="ajust">
    <form class="container"> 

      <div class="form-group">
        <label for="exampleInputEmail1">Nome:</label>
        <input class="form-control" id="nome" v-model="nome" type="text"
        name="nome"
        placeholder="Digite um nome">
      </div> 

      <div class="form-group">
        <label for="exampleInputEmail1">Sobrenome:</label>
        <input class="form-control" id="sobrenome" v-model="sobrenome" type="text"
        name="sobrenome"
        placeholder="Digite um sobrenome">
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Cpf:</label>
        <input class="form-control" id="cpf" v-model="cpf" type="text"
        name="cpf"
        placeholder="Digite um cpf">
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Data nascimento:</label>
        <input class="form-control" id="data_nascimento" v-model="data_nascimento" type="date"
        name="data_nascimento"
        placeholder="Digite uma data nascimento">
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Cep:</label>
        <input class="form-control" id="cep" v-model="cep" type="text"
        name="cep"
        placeholder="Digite um cep">
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Endereco:</label>
        <input class="form-control" id="endereco" v-model="endereco" type="text"
        name="endereco"
        placeholder="Digite um endereco">
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Numero:</label>
        <input class="form-control" id="numero" v-model="numero" type="text"
        name="numero"
        placeholder="Digite um numero">
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Complemento:</label>
        <input class="form-control" id="complemento" v-model="complemento" type="text"
        name="complemento"
        placeholder="Digite um complemento">
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Cidade:</label>
        <input class="form-control" id="cidade" v-model="cidade" type="text"
        name="cidade"
        placeholder="Digite um cidade">
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Estado:</label>
        <input class="form-control" id="estado" v-model="estado" type="text"
        name="estado"
        placeholder="Digite um estado">
      </div>

      <button @click="exibirPessoa()"  type="button" class="btn btn-success">Salvar</button>
    </form>
  </div>

</template>

<script>

export default {
name: 'EditarView',data() {
      return {
        pessoas: [],
        nome: '',
        sobrenome: '',
        data_nascimento: '',
        cpf: '',
        cep: '',
        endereco: '',
        numero: '',
        complemento: '',
        cidade: '',
        estado: '',
      }
    },
    methods: {

   async exibirPessoa() {
      let id = this.$route.params._id
   await fetch(`/api/cliente/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((result) => {console.log(result)
        this.nome = result.data.nome
        this.sobrenome = result.data.sobrenome
        this.data_nascimento = result.data.data_nascimento
        this.cpf = result.data.cpf
        this.cep = result.data.cep
        this.endereco = result.data.endereco
        this.numero = result.data.numero
        this.complemento = result.data.complemento
        this.cidade = result.data.cidade
        this.estado = result.data.estado})
      //.then(this.getPessoa())
      .catch((error) => console.log("error", error));
  }
    },
    mounted () {
    this.exibirPessoa()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
form{
max-width: 500px;
text-align: left;
}
.form-group{
margin-bottom: 10px;
}
.ajust{
margin: 20px;
}

</style>
