<template>
  <main>

    <section class="w-auto " @click="goToItem(item.id)">
      <img class="aspect-video  object-cover object-center" :src="item.image" />
      <h3 class="text-lg font-bold bg-gradient text-green-900  my-1"> {{ item.title }}</h3>
      <h4 class="text-green-900 text-xl mb-4 font-bold"> {{ item.category }}</h4>
      <p class="tracking-tight font-light text-green-900 leading-6 text-center"> {{ item.content | truncate(200) }}</p>
    </section>

    <div v-if="$route.path == '/MesAnnonces'">
      <button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none
                        focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300
                        dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Modifier</button>

      <button @click="deletePost(item.id)" type="button"
        class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4
                        focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
                        dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Supprimer</button>
    </div>


  </main>







</template>
<script>
import axios from "axios";
//import router from '../../router';

export default {
  name: 'Annonce',
  props: ['item'],
  data(){
    return{
      
    }
  },
  methods: {
    goToItem(id) {
      this.$router.push({ name: 'ItemDetails', params: { id: id } })
    },
    async deletePost(id) {
      this.loading=true
      await axios.delete(
        "http://localhost:3000/posts/" + id
      )
      .then()
      window.location.reload()
        .then()
      alert("Post deleted!");

    },

  },
  filters: {
    truncate(value, n) {
      if (value.length > n) {
        return value.slice(0, n - 4) + '...';
      } else {
        return value;
      }
    },
  },



}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;700&display=swap");

h1 {
  font-size: calc(1.5rem + 2vw);
  font-variation-settings: "wght" 600, "wdth" 80;
  line-height: 1;
}

h2 {
  width: 90%;
  font-size: calc(0.75rem + 2vw);
  font-variation-settings: "wght" 400, "wdth" 80;
  letter-spacing: 2px;
}

p {
  font-size: 1.25rem;

  width: 100%;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-height: 70vh;
  padding: 1em 0;
  border-radius: 0.35em;
  overflow: hidden;
  position: relative;
}





.button:hover i {
  animation: point 0.5s;
}

img {
  max-height: 240px;
  min-height: 80px;
  margin-bottom: 2em;
  filter: drop-shadow(10px 10px 10px rgba(90, 69, 1, 1));
  transition: 0.3s ease;
}

a:hover {
  text-decoration: underline;
  color: orange;
}
</style>