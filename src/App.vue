<template>

  <div id="app" class="bg-emerald-50 ">

    <div class="flex flex-col justify-between">
         <!-- MENU -->
    <Header :titre="siteTitre" />
    </div>

    <div class="container mx-auto min-vh-100">
      <router-view>
      </router-view>
    </div>
      <Footer/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { mapActions, mapGetters } from 'vuex';

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
    ...mapActions(['storeCurrent']),
    
  },
  mounted(){
    console.log(localStorage.getItem('userId'));
    console.log(this.currentUser);
    if(localStorage.getItem('userId') != null)
    
    {
      console.log("if");
      this.storeCurrent()}

    },
    computed:{
      ...mapGetters(['currentUser'])
    }
  
}
</script>

<style>

</style>
