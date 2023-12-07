<template>
  <h1>Cadastrar cliente</h1>

  <div class="ajust">
    <form class="container">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input class="form-control" id="nome" v-model="nome" type="text" name="nome" placeholder="Digite um nome" />
      </div>

      <div class="form-group">
        <label for="sobrenome">Sobrenome:</label>
        <input class="form-control" id="sobrenome" v-model="sobrenome" type="text" name="sobrenome" placeholder="Digite um sobrenome" />
      </div>

      <div class="form-group">
        <label for="cpf">Cpf:</label>
        <input class="form-control" id="cpf" v-model="cpf" type="text" name="cpf" placeholder="Digite um cpf" />
      </div>

      <div class="form-group">
        <label for="data_nascimento">Data nascimento:</label>
        <input class="form-control" id="data_nascimento" v-model="data_nascimento" type="date" name="data_nascimento" placeholder="Digite uma data nascimento" />
      </div>

      <div class="form-group">
        <label for="cep">Cep:</label>
        <input class="form-control" id="cep" v-model="cep" type="text" name="cep" placeholder="Digite um cep" />
      </div>

      <div class="form-group">
        <label for="endereco">Endereco:</label>
        <input class="form-control" id="endereco" v-model="endereco" type="text" name="endereco" placeholder="Digite um endereco" />
      </div>

      <div class="form-group">
        <label for="numero">Numero:</label>
        <input class="form-control" id="numero" v-model="numero" type="text" name="numero" placeholder="Digite um numero" />
      </div>

      <div class="form-group">
        <label for="complemento">Complemento:</label>
        <input class="form-control" id="complemento" v-model="complemento" type="text" name="complemento" placeholder="Digite um complemento" />
      </div>

      <div class="form-group">
        <label for="cidade">Cidade:</label>
        <input class="form-control" id="cidade" v-model="cidade" type="text" name="cidade" placeholder="Digite um cidade" />
      </div>

      <div class="form-group">
        <label for="estado">Estado:</label>
        <input class="form-control" id="estado" v-model="estado" type="text" name="estado" placeholder="Digite um estado" />
      </div>

      <button id="btn-cadastrar" @click="enviarForm()" type="button" class="btn btn-success">Cadastrar</button>
    </form>

    <div id="msgDanger" v-show="msgDanger" class="alert alert-danger" role="alert">
      {{ msgDanger }}
    </div>
    <div id="msgSuccess" v-show="msgSuccess" class="alert alert-sucess" role="alert">
      {{ msgSuccess }}
    </div>
  </div>
</template>

<script>
import {v4 as uuidv4} from "uuid";

export default {
  name: "FormItem",
  data() {
    return {
      msgDanger: "",
      msgSuccess: "",
    };
  },
  methods: {
    async enviarForm() {
      const id = uuidv4();
      const cliente = {
        id,
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
      };

      // Verificar se algum atributo do cliente está vazio ou não foi preenchido
      for (const key in cliente) {
        if (!cliente[key] || cliente[key].trim() === "") {
          this.msgDanger = "Erro ao cadastrar: Preencha todos os campos";
          setTimeout(() => (this.msgDanger = ""), 3000);
          return; // Interrompe o envio do formulário
        }
      }

      try {
        // Tentativa de obter os dados existentes do localStorage
        const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
        clientes.push(cliente);
        localStorage.setItem("clientes", JSON.stringify(clientes));

        // Limpar os campos do formulário após o cadastro
        this.nome = "";
        this.sobrenome = "";
        this.data_nascimento = "";
        this.cpf = "";
        this.cep = "";
        this.endereco = "";
        this.numero = "";
        this.complemento = "";
        this.cidade = "";
        this.estado = "";
        // Limpar outros campos do formulário conforme necessário

        // Exibir mensagem de sucesso
        this.msgSuccess = "Dados salvos com sucesso!";
        setTimeout(() => (this.msgSuccess = ""), 3000);
      } catch (error) {
        console.error("Erro ao salvar os dados:", error);
        this.msgDanger = "Erro ao salvar os dados. Tente novamente mais tarde.";
        setTimeout(() => (this.msgDanger = ""), 3000);
      }
    },
  },
};
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
form {
  max-width: 500px;
  text-align: left;
}
#msgDanger {
  position: fixed;
  top: 80%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 500px;
  height: 60px;
}
#msgSuccess {
  position: fixed;
  top: 80%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 500px;
  height: 60px;
}
.form-group {
  margin-bottom: 10px;
}
.ajust {
  margin: 20px;
}
</style>
