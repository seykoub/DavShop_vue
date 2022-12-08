<template>
  <div id="app" class="bg-emerald-50">

    <div class="flex flex-col justify-between">
  
    
  



         <!-- MENU -->
    <Header :titre="siteTitre" />

    </div>

    <div class="container mx-auto">
      <router-view>
      </router-view>

    </div>
    
  
    <div class="flex flex-col">
      <Footer/>
    </div>
    

       
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data () {
    return{
      siteTitre: "DAVshop"
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
