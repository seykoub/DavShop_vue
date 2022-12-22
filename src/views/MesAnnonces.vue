<template>
    <main>
        <div class="row">
            <div class=' my-15  gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4' v-if="Myproducts.length > 0">
                <Annonce v-for="item in Myproducts" :key="item.id" :item="item" 
                
                />
               
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
                .then((res) => this.Myproducts = res.data)
                .catch((e) => console.log(e))
                .finally(() => this.loading = false)
        },
        changePage(dir) {
            this.page += dir;
            this.getAnnonces()
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