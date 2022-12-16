<template >
    <div>
        
        <main class="flex justify-center" v-if="loading && !annonces">
            <Spinner />
        </main>

        <main class="relative" v-else>

            <div v-show="success" class="flex justify-between items-center bg-emerald-600 w-1/5 p-5">
                <p class="text-white text-xl"> Votre annonce est bien été ajouté !!</p>
                <button class="text-white font-bold font-bold p-2" @click="toggleSuccess">X</button>
            </div>


            <!-- Modal ajouter d'annonce -->
          <form
              class="absolute top-10 bg-indigo-100 w-full p-10"
              v-show="modalOpen"
              @submit.prevent="handleSubmit">
            <div>
              <button
                  @click.prevent="toggleModal()"
                  class="p-2 text-xl font-bold text-indigo-500 absolute right-5 top-5">X</button>
            </div>
            <h2 class="text-3xl text-center mb-5 font-bold">Ajouter un article</h2>
            <div class="flex flex-col mb-4">
              <label for="" class="text-lg font-semibold">Titre de l'article</label>
              <input
                  v-model="newItem.title"
                  type="text"
                  placeholder="Mon super titre"
                  class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
            </div>

            <div class="flex flex-col mb-4">
              <label for="" class="text-lg font-semibold">Sommaire</label>
              <input
                  v-model="newItem.summary"
                  type="text"
                  placeholder="Mon super titre"
                  class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
            </div>
            <div class="flex flex-col mb-4">
              <label for="" class="text-lg font-semibold">Contenu de l'article</label>
              <textarea
                  v-model="newItem.content"
                  type="text"
                  rows="13"
                  placeholder="Mon super titre"
                  class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100"></textarea>
            </div>

            <div class="flex flex-col mb-4">
              <label for="" class="text-lg font-semibold">Categorie</label>
              <select
                  v-model="newItem.category"
                  class="leading-none text-gray-800 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
                <option value="Informatique" selected> Informatique</option>
                <option value="Vetement"> Vetement</option>
                <option value="Voiture"> Voiture</option>
                <option value="Outillages"> Outillage</option>
              </select>
            </div>

            <div class="flex flex-col mb-4">
              <label for="" class="text-lg font-semibold">Auteur</label>
              <input
                  v-model="newItem.author"
                  type="text" placeholder="Mon super titre"
                  class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
            </div>

            <div class="flex flex-col mb-4">
              <label for="" class="text-lg font-semibold">Image</label>
              <input
                  v-model="newItem.image"
                  type="text" placeholder="copier l'url de l'image"
                  class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-indigo-100">
            </div>

            <button class="bg-slate-800 p-4 my-5 text-white" type="submit">Valider</button>
          </form>
            <!-- Fin de formulaire  -->


            <!-- Intro -->
            <div class="my-10 lg:flex justify-between items-center block">
                <div>
                    <h2 class="text-2xl font-semibold mb-2 text-black border-b-4 border-orange-400 rounded">Tous nos annonces</h2>
                </div>

                <button v-if="currentUser" @click="toggleModal"
                    class="text-xl py-3 px-5 bg-green-900 mt-5 font-semibold text-white mb-7 lg:mt-0 mt-3 ">
                    Ajouter une annoce
                </button>
            </div>
            <!--Formuaire de recherche -->

            <form>
                <div class="lg:flex items-center block gap-6">
                    <input v-model="search"
                         class="flex gap-10 mt-2 border-gray-300 text-black m-8 border-2 focus:border-orange-400 focus:outline-none lg:w-1/5 w-full px-8 py-1 rounded"
                        type="text" placeholder="Tapez votre recherche..">
                       
                    

                    <select v-model="categoryFilter"
                         class=" flex gap-10 mt-2 border-gray-300 m-8 border-2 focus:border-orange-400 focus:outline-none lg:w-1/5 text-gray-800 w-full px-8 py-1 rounded">
                        <option value="" selected disabled default class= "text-gray-800">Selectionner une categorie</option>
                        <option value="Informatique" selected> Informatique</option>
                        <option value="Vetement"> Vétement</option>
                        <option value="Programmning" selected> Informatique</option>
                        <option value="Vetement"> Véement</option>
                        <option value="Outillages"> Outillages</option>
                        <option value="Voiture"> Voiture</option>
                    </select>
                    <button v-if="search.length > 0 || categoryFilter.length > 0"
                        class="bg-green-800 text-black text-xl font-bold" @click.prevent="btnResetForm">Retour</button>
                </div>
            </form>

            <!-- Tout les articles -->
            <p v-show="filteredAnnonces.length > 0" class="text-lg font-semibold text-center my-0 text-black">Résultats : <span
                    class="">{{ filteredAnnonces.length }}</span></p>
            <div class=' my-20  gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4' v-if="filteredAnnonces.length > 0">
                <Annonce v-for="item in filteredAnnonces" :key="item.id" :item="item" />
            </div>

            <h3 v-else class="text-center text-black text-2xl my-10">Pas de résultat</h3>
        </main>

    </div>
</template>
<script>
import Annonce from '../components/Card/Annonce.vue';
import Spinner from '../components/Spinner.vue';
import axios from 'axios'

export default {
    name: 'Annonces',
    components: { Annonce, Spinner },
    data() {
        return {
            annonces: [],
            search: "",
            categoryFilter: "",
            modalOpen: false,
            newItem: {
                id: 0,
                title: '',
                summary: '',
                content: '',
                image: '',
                author: '',
                category: '',
                date: '12/02/23'

            },
            success: false,
            loading: false
        }
    },
  mounted(){
      this.getAnnonces()
  },
    methods: {
        btnResetForm() {
            this.search = '';
            this.categoryFilter = '';
        },
        toggleModal() {
            this.modalOpen = !this.modalOpen
        },
        toggleSuccess() {
            this.success = !this.success
        },
      async getAnnonces(){
          this.loading = true
        await axios.get("http://localhost:3000/posts")
        .then((res) => this.annonces = res.data)
        .catch((e) => console.log(e))
        .finally(() => this.loading= false)
      },
        async handleSubmit() {
            this.loading = true
          await axios.post("http://localhost:3000/posts", this.newItem)
              .then(() => {
                this.toggleModal()
                this.success = true
                this.loading = false
                this.newItem = {
                  id: Math.floor(Math.random() * 100),
                  title: '',
                  summary: '',
                  content: '',
                  image: '',
                  author: '',
                  category: '',
                  date: '12/02/23'
                }
              })

            /*setTimeout(() => {
                this.annonces.push(this.newItem)


            }, 2000)*/

        }
    },

    computed: {
        filteredAnnonces() {
            let allAnnonces = [...this.annonces];
            if (this.categoryFilter.length > 0) {
                const result = this.annonces.filter((p) => {
                    return p.category.match(this.categoryFilter);
                });
                allAnnonces = result;
            }

            if (this.search.length > 0) {
                const result = allAnnonces.filter((p) => {
                    return (
                        p.title.toLowerCase().match(this.search.toLowerCase()) ||
                        p.content.match(this.search.toLowerCase()));
                });
                allAnnonces = result;
            }
            return allAnnonces;
        },
      currentUser(){
        return this.$store.state.user
      }
    },
}
</script>
<style >
.modal {
  box-shadow: 0 0 0 50vmax rgba(0,0,0,.5);
}
</style>