<template>

  <div class ="card shadow p-3 mb-5 mt-3 bg-body rounded border-dark" style="width: 18rem;">
    <ul class = "list-group list-group-flush">
      <li class="list-group-item"
      :class="{ active: id == currentIndex }"
      v-for="(personne, id) in personnes"
      :key="id"
      @click="setActivePersonne(personne, id)"
      >
      {{ personne.surname }} {{ personne.name }}
      </li>
    </ul>
  </div>
  <div v-if="currentPersonne">
    <input type="text" class="table table-secondary" id="id" v-model="currentPersonne.id"/>
    <input type="text" class="table table-secondary" id="name" v-model="currentPersonne.name"/>
    <input type="text" class="table table-secondary" id="surname" v-model="currentPersonne.surname"/>
    <input type="text" class="table table-secondary" id="phone" v-model="currentPersonne.phone"/>
    <input type="text" class="table table-secondary" id="city" v-model="currentPersonne.city"/>


  <router-link :to="'/personnes/' + currentPersonne.id" class="badge badge-warning">Modifier</router-link>

  </div>
  <div v-else>
    <br />
    <p>Cliquez sur une des personnes pour afficher les détails.</p>
  </div>

</template>

<script>
  import PersonneDataService from "../services/PersonneDataService";

  export default {
    name: "personnes",
    data() {
      return {
        personnes: [],
        currentPersonne: null,
        currentIndex: -1,
      };
    },
    methods: {
      getPersonnes() {
        PersonneDataService.getAll()
        .then(response => {
          this.personnes = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },

      setActivePersonne(personne, index) {
        this.currentPersonne = personne;
        this.currentIndex = personne ? index : -1;
      },
    },
    mounted() {
      this.getPersonnes();
    }
  };
</script>
