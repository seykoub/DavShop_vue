<template>
  <div>
    <h1>Bienvenue{{currentUser}}</h1>
    <button v-if="currentUser" @click="toggleModal"
            class="text-xl py-2 px-3 bg-orange-400 hover:bg-green-900  :active: box-shadow-green-900 mt-5 font-semibold text-white mb-7 lg:mt-0 mt-3 ">
      Ajouter une annoce
    </button>
  </div>
</template>
<script>
import Profil from '../components/Profil.vue'
export default {
  name: 'Profil',
  component: {}
}
</script>
<style>

</style>