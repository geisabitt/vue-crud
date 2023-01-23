<template>
  <h1>Editar cliente</h1>
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
      <div id="msgSuccess" v-show="msgSuccess" class="alert alert-success" role="alert">
        {{msgSuccess}}
      </div>

      <button @click="enviarForm()"  type="button" class="btn btn-success">Salvar</button>
    </form>
  </div>

</template>

<script>

export default {
name: 'EditarView',
data() {
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
        msgSuccess:'',
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
        this.nome = result.nome
        this.sobrenome = result.sobrenome
        this.data_nascimento = result.data_nascimento
        this.cpf = result.cpf
        this.cep = result.cep
        this.endereco = result.endereco
        this.numero = result.numero
        this.complemento = result.complemento
        this.cidade = result.cidade
        this.estado = result.estado})
      //.then(this.getPessoa())
      .catch((error) => console.log("error", error));
  },
  async enviarForm(){
  let id = this.$route.params._id
  const data ={
  nome: this.nome,
  sobrenome: this.sobrenome,
  data_nascimento: this.data_nascimento,
  cpf: this.cpf,
  cep: this.cep,
  endereco: this.endereco,
  numero: this.numero,
  complemento: this.complemento,
  cidade: this.cidade,
  estado: this.estado,
  }
    const dataJson = JSON.stringify(data)
    console.log(dataJson)
    const req = await fetch(`/api/cliente/${id}`, {
      method: 'PATCH',
      headers:{"Content-Type": "application/json"},
      body: dataJson
    });
  
  const res = await req.text()
  console.log(res)
  this.msgSuccess = 'Alterações feitas com Sucesso'
  setTimeout(() => this.msgSuccess = '', 3000)
  
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
#msgSuccess{
  position: fixed;
	top: 80%; bottom: 0; 
	left: 0; right:0;
	margin: auto;
  width: 500px;
  height: 60px;
}
.form-group{
margin-bottom: 10px;
}
.ajust{
margin: 20px;
}

</style>
