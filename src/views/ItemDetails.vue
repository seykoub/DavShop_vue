<template>
    <main>
       <div class="mt-16" v-if="currentItem">
        <h2 class="text-5xl font-semibold text-green-900">{{ currentItem[0].title}}</h2>
        <h3 class="text-xl font-semibold text-green-900 my-4">{{ currentItem[0].category}}</h3>
        <img :src="currentItem[0].image" :alt="currentItem[0].title">
        <p class="text-green-900">{{currentItem[0].summary}}</p>
        <div class="my-8">
         <p class="font-thin text-green-900">{{currentItem[0].content}}</p>
        </div>
        <div>
         <p class="text-green-900">Ecrit par : {{currentItem[0].author}} le {{currentItem[0].date}}</p>
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

import { posts } from '../Data';
import BackButton from '../components/State/BackButton.vue'

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
        this.currentItem = posts.filter((p) => {
            return p.id === id;
        })
    }

}
</script>
<style>

</style>