<template>
  <h1>Editar cliente</h1>
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
      <div id="msgSuccess" v-show="msgSuccess" class="alert alert-success" role="alert">
        {{ msgSuccess }}
      </div>

      <button id="btn-att-cadastro" @click="enviarForm()" type="button" class="btn btn-success">Salvar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditarView",
  data() {
    return {
      pessoas: [],
      nome: "",
      sobrenome: "",
      data_nascimento: "",
      cpf: "",
      cep: "",
      endereco: "",
      numero: "",
      complemento: "",
      cidade: "",
      estado: "",
      msgSuccess: "",
    };
  },
  methods: {
    async exibirPessoa() {
      let id = this.$route.params.id;

      try {
        // Obter os dados do localStorage
        const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

        // Encontrar o cliente com o ID correspondente
        const cliente = clientes.find((cliente) => cliente.id === id);

        // Verificar se o cliente foi encontrado e preencher os campos do formulário
        if (cliente) {
          this.nome = cliente.nome || "";
          this.sobrenome = cliente.sobrenome || "";
          this.data_nascimento = cliente.data_nascimento || "";
          this.cpf = cliente.cpf || "";
          this.cep = cliente.cep || "";
          this.endereco = cliente.endereco || "";
          this.numero = cliente.numero || "";
          this.complemento = cliente.complemento || "";
          this.cidade = cliente.cidade || "";
          this.estado = cliente.estado || "";
        } else {
          console.log("Cliente não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar cliente no localStorage:", error);
      }
    },
    async enviarForm() {
      let id = this.$route.params.id;
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

      try {
        // Obter os dados existentes do localStorage
        let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

        // Encontrar o índice do cliente pelo ID
        const clienteIndex = clientes.findIndex((cli) => cli.id === id);

        // Verificar se o cliente foi encontrado
        if (clienteIndex !== -1) {
          // Atualizar os dados do cliente no array local
          clientes[clienteIndex] = cliente;

          // Salvar os dados atualizados de volta no localStorage
          localStorage.setItem("clientes", JSON.stringify(clientes));

          // Exibir mensagem de sucesso
          this.msgSuccess = "Dados atualizados com sucesso!";
          setTimeout(() => (this.msgSuccess = ""), 3000);
        } else {
          console.log("Cliente não encontrado para edição");
        }
      } catch (error) {
        console.error("Erro ao salvar os dados:", error);
        this.msgDanger = "Erro ao salvar os dados. Tente novamente mais tarde.";
        setTimeout(() => (this.msgDanger = ""), 3000);
      }
    },
  },
  mounted() {
    this.exibirPessoa();
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
