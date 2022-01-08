<template>

  <div class="card shadow p-3 mb-5 mt-3 bg-body rounded border-dark" style ="width : 18rem;">
    <div v-if="!submitted">
      Ajoute tes coordonnées

      <input type="text" class="table table-secondary" id="id" required v-model="personne.id" name="id" disabled />
      <input type="text" class="table table-secondary" id="name" required v-model="personne.name" name="name"/>
      <input type="text" class="table table-secondary" id="surname" required v-model="personne.surname" name="surname"/>
      <input type="text" class="table table-secondary" id="phone" required v-model="personne.phone" name="phone"/>
      <input type="text" class="table table-secondary" id="city" required v-model="personne.city" name="city"/>

      <button @click="creerPersonne" class="mt-3 btn btn-success">Ajouter</button>
      
    </div>

    <div v-else>
      <h4>Personne ajoutée avec succès!</h4>
      <button class="btn btn-success" @click="resetForm">Ajouter une nouvelle personne</button>
    </div>
  </div>
  
</template>

<script>
  import PersonneDataService from "../services/PersonneDataService";

  export default {
    name: "add-personne",
    data() {
      return {
        personne: {
          id: null,
          name: "name",
          surname: "surname",
          phone: "phone",
          city: "city"
        },
        submitted: false
      };
    },
    methods: {
      creerPersonne() {
        var data = {
          id: this.personne.id,
          name: this.personne.name,
          surname: this.personne.surname,
          phone: this.personne.phone,
          city: this.personne.city
        };


        PersonneDataService.create(data)
        .then(response => {
          this.message = 'Personne créee avec succès!';
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },

      resetForm() {
        this.submitted = false;
        this.personne = {};
      }
    }
  };
</script>

<style>
  .submit-form {
    max-width: 300px;
    margin: auto;
    color: red;
  }
</style>
