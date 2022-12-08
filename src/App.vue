<template>
  <div id="app">

    <div class="flex flex-col justify-between min-h-screen space-x-0">
  <div class="flex w-full">
    <img class="avshop-logo" alt="avshop logo" src="./assets/davLogo.jpg">
  



         <!-- MENU -->
    <Header :titre="siteTitre" />

    </div>

    <div class="container mx-auto">
      <router-view>
      </router-view>

    </div>
    
  
    
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#008037  ;
  margin-top: 60px;
}

.avshop-logo-wrapper {
  flex-shrink: 0;
}

.avshop-logo {
  height: 6rem;
  width: 9rem;
  top:0px;
  bottom:0px;
}
</style>
