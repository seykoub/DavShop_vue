<template>
    <main>
       <div class="mt-16" v-if="currentItem">
        <h2 class="text-5xl font-semibold text-green-900">{{ currentItem.title}}</h2>
        <h3 class="text-xl font-semibold text-green-900 my-4">{{ currentItem.category}}</h3>
        <img v-if="currentItem.image" :src="currentItem.image" :alt="currentItem.title">
        <p class="text-green-900">{{currentItem.summary}}</p>
        <div class="my-8">
         <p class="font-thin text-green-900">{{currentItem.content}}</p>
        </div>
        <div>
         <p class="text-green-900">Ecrit par : {{currentItem.author}} le {{currentItem.date | date}}</p>
        </div>
        <button class="text-xl py-2 mb-2 px-5 bg-orange-400 hover:bg-green-900 mt-5 font-semibold text-white mb-7 lg:mb-0" >
                    <router-link to="contact">contact vendeur</router-link>
                </button>

                <BackButton />
     </div>  
     <div v-else>
         une erreur est survenu
     </div>
   </main>
 </template>
<script>
import BackButton from '../components/State/BackButton.vue'
import axios from 'axios'

export default {
    name: "ItemDetails",
    components: {
        BackButton
    },
    data() {
        return {
            currentItem: null
        }
    },
    async mounted() {
        const { id } = this.$route.params
        axios.get("http://localhost:3000/posts/"+id)
        .then(({data}) => {
        console.log(data)
            this.currentItem = data;
        })
        
    },
    filters: {
    date(dateToBeFormatted) {
        if(typeof dateToBeFormatted === 'string') {
            return dateToBeFormatted;
        }
        const date = new Date(dateToBeFormatted);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}

}
</script>
<style>

</style>