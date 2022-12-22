<template>
    <main>
        

        <main class="relative">
            <!-- Modal ajouter d'annonce -->
          <form
              class="z-40 absolute top-10 bg-white w-full p-10"
              v-show="modalOpen"
              @submit.prevent="handleSubmit">
            <div>
              <button
                  @click.prevent="toggleModal()"
                  class="p-2 text-xl font-bold text-white box-shadow-green bg-orange-400 hover:bg-green-900 absolute right-5 top-5">X</button>
            </div>
            <h2 class="text-3xl text-center mb-5 font-bold">Ajouter un article</h2>
            <div class="flex flex-col mb-4">
              <label for="" class="text-lg font-semibold">Titre de l'article</label>
              <input
                  v-model="newItem.title"
                  type="text"
                  placeholder="Mon super titre"
                  class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-green-50">
            </div>

            <div class="flex flex-col mb-4">
              <label for="" class="text-lg font-semibold">Sommaire</label>
              <input
                  v-model="newItem.summary"
                  type="text"
                  placeholder=""
                  class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-green-50">
            </div>
            <div class="flex flex-col mb-4">
              <label for="" class="text-lg font-semibold">Contenu de l'article</label>
              <textarea
                  v-model="newItem.content"
                  type="text"
                  rows="13"
                  placeholder=""
                  class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-green-50"></textarea>
            </div>

            <div class="flex flex-col mb-4">
              <label for="" class="text-lg font-semibold">Categorie</label>
              <select
                  v-model="newItem.category"
                  class="leading-none text-gray-800 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-green-50">
                <option value="Informatique" selected> Informatique</option>
                <option value="Vetement"> Vetement</option>
                <option value="Voiture"> Voiture</option>
                <option value="Outillages"> Outillage</option>
              </select>
            </div>

            <div class="flex flex-col mb-4">
              <label for="" class="text-lg font-semibold">Image</label>
              <input
                  v-model="newItem.image"
                  type="text" placeholder="copier l'url de l'image"
                  class="leading-none text-slate-900 py-3 focus:outline-none focus:border-indigo-500 mt-4 border-b-2 border-slate-900 bg-green-50">
            </div>

            <button class="bg-orange-400 p-4 my-5 text-white" type="submit">Valider</button>
          </form>
            <!-- Fin de formulaire  -->


            <!-- Intro -->
           <div class="my-10 lg:flex justify-between items-center block mb-0">
                <div>
                    <h2 class="text-2xl font-semibold mb-2 text-black border-b-4 border-orange-400 rounded">Tous nos annonces</h2>
                </div>

                <button  @click="toggleModal"
                    class="text-xl py-2 px-3 bg-orange-400 hover:bg-green-900  :active: box-shadow-green-900 mt-5 font-semibold text-white mb-7 lg:mt-0 mt-3 ">
                    Ajouter une annoce
                </button>
            </div>

        </main>


        <div class="row">
            <div class=' my-15  gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4' v-if="Myproducts.length > 0">
                <Annonce v-for="item in Myproducts" :key="item.id" :item="item" />
            </div>   
        </div>
        
        <p class="pagination">
            <button @click="changePage(-1)"
                class="bg-orange-400 :active: box-shadox-green-900 w-20 focus:outline-none focus:ring focus:ring-green-900 mr-2">
                Previous
            </button>
            {{ page }}
            <button @click="changePage(1)"
                class="bg-orange-400 :active: box-shadox-green-900 w-20 min-width-full focus:outline-none focus:ring focus:ring-green-900 ml-2">
                Next
            </button>
        </p>

    </main>


</template>
 
<script>
import Annonce from '../components/Card/Annonce.vue';
//import Annonce from '../components/Card/Annonce.vue';
import axios from 'axios'
export default {

    name: 'MesAnnonces',

    components: { Annonce },

    data() {

        return {
            Myproducts: [],
            page: 1,
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

        }
    },
    mounted() {
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
        async getAnnonces() {
            this.loading = true
            await axios.get(`http://localhost:3000/posts?author=${this.currentUser.nom}&_page=${this.page}&_limit=8`)
                .then((res) => {
                    this.Myproducts = res.data
                    console.log(res.data)
                })
                .catch((e) => console.log(e))
                .finally(() => this.loading = false)
        },
        changePage(dir) {
            this.page += dir;
            this.getAnnonces()
        },

        async handleSubmit() {
            this.loading = true
            
            this.newItem.date = Date.now()
            this.newItem.author = this.currentUser.nom
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
                  date: ''
                }
              })
              .then(()=> this.$router.push({name: 'MesAnnonces'}))
        },
    },

    computed: {
        currentUser() {
            return this.$store.state.user
        }
    }

}
</script>
 
<style scoped >
.pagination {
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    color: #eee;
    font: inherit;
    box-shadow: 4px 4px darkgreen;
    transition: all 0.2s ease;
}
</style>