<template>

  <div id="table" >
    <div>
      <div id="table-heading">
        <div class="cliente-id">#:</div>
        <div>Nome:</div>
        <div>CPF:</div>
        <div>Data de Nascimento:</div>
        <div>Endereço:</div>
        <div>Ações:</div>
      </div>
    </div>
    <div id="table-rows">
      <div class="table-row" v-for="pessoa in pessoas" :key="pessoa._id">
        <div class="cliente-number">{{ pessoa._id }}</div>
        <div>{{pessoa.nome }} {{pessoa.sobrenome }} </div>
        <div>{{pessoa.cpf }}</div>
        <div>{{pessoa.data_nascimento }}</div>
        <div>{{pessoa.endereco }}, {{pessoa.numero }} / {{pessoa.complemento }} - {{pessoa.cidade }}/{{pessoa.estado }} - {{pessoa.cep }}
        </div>
        <div>          
          <router-link :to="{name:'editar', params:{_id:pessoa._id}}"><button type="button" class="editar btn btn-primary">Editar</button></router-link>
          <button type="button" class="deletar btn btn-danger" @click="removePessoa(pessoa._id)" >Deletar</button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: "ConsultaView",
    data() {
      return {
        pessoas: [],
      }
    },
    methods: {


  async getPessoa() {
      let requestOptions = {
      method: 'GET',
      redirect: 'follow'
};

await fetch("/api/cliente", requestOptions)
  .then(response => response.json())
  .then(result => {this.pessoas = result
  console.log(result)})
  .catch(error => console.log('error', error));
      },
      async removePessoa(id) {
       
          await fetch(`/api/cliente/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((result) => console.log(result))
      .then(this.getPessoa())
      .catch((error) => console.log("error", error));
        
        setTimeout(() => {
          window.location.reload()
        },1000)
      
  }
    },
    mounted () {
    this.getPessoa()
    }
  }
</script>

<style scoped>


  #table {
    max-width: 1200px;
    margin: 0 auto;
  }

  #table-heading,
  #table-rows,
  .table-row {
    display: flex;
    flex-wrap: wrap;
  }

  #table-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
  }

  .table-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #CCC;
  }

  #table-heading div,
  .table-row div {
    width: 19%;
  }

  #table-heading .cliente-id,
  .table-row .cliente-number {
    display: none;
  }

</style>