<template>
  <div class="card shadow p-3 mb-5 mt-3 bg-body rounded border-dark" style ="width : 18rem;">
    <div class="container">
      <div class="submit-form">
        <div v-if="currentPersonne">
          <input type="text" class="table table-secondary" id="id" v-model="currentPersonne.id"/>
          <input type="text" class="table table-secondary" id="name" v-model="currentPersonne.name"/>
          <input type="text" class="table table-secondary" id="surname" v-model="currentPersonne.surname"/>
          <input type="text" class="table table-secondary" id="phone" v-model="currentPersonne.phone"/>
          <input type="text" class="table table-secondary" id="city" v-model="currentPersonne.city"/>
          

          <button class="badge badge-danger mr-2"
          @click="deletePersonne"
          >
          Supprimer
          </button>

          <button type="submit" class="badge badge-success"
          @click="updatePersonne"
          >
          Modifier
          </button>
          <p>{{ message }}</p>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
  import PersonneDataService from "../services/PersonneDataService";

  export default {
    name: "personne",
    data() {
      return {
        currentPersonne: null,
        message: ''
      };
    },
    methods: {
      getPersonne(id) {

      PersonneDataService.get(id)          //Ajout du getPersonne, on fait appel au service pour afficher la vue
      .then(response => {
        this.currentPersonne = response.data;
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    },


    updatePersonne() {
      PersonneDataService.update(this.currentPersonne)
      .then(response => {
        this.message = 'Personne modifiée avec succès!';
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });

    },

    deletePersonne() {
      PersonneDataService.delete(this.currentPersonne.id)
      .then(response =>  {
        this.message = 'Personne supprimée avec succès!';
        
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });

    }
  },
  mounted() {
    this.message = '';
    this.getPersonne(this.$route.params.id);
  }
};
</script>

<style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
</style>
