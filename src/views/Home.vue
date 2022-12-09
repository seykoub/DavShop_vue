<template>
  <main >
  <!--Section 1-->
  <section>
    <!--Titre de mon site avec description-->
    <div class="">
      <h1 class="text-left text-2xl mt-0 pt-0">vous pouvez vendre votre produit, acheter ou donner tout simplement!</h1>
      <h4 class="text-left text-2xl mt-0 pt-0">Ensemble Donnons une second vie à vos produit !!!</h4>
    </div>
    <br>
    <!--Carroussel-->
    <div class="object-cover ">
      <hooper :settings="hooperSettings"  style="height: 600px" >
        <slide v-for="post in latestPost" :key="post.id">
         <Annonce :item="post"/>
        </slide>

      </hooper>
    </div>
  </section>
  <!--Card étapes-->
  <section>
    <div></div>
  </section>

  </main>

</template>
<script>

import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import { posts } from '../Data';
import Annonce from "@/components/Card/Annonce";


export default {
    name : 'Home',
  components: {
    Annonce,
    Hooper,
    Slide
  },
  computed: {
    latestPost() {
      let latest = posts.length + 1;
      return posts.slice(latest - 9, latest)
    }
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 3,
        progress: true,
        autoPlay: true,
        playSpeed: 3000,
        vertical: false,
        infiniteScroll:true,

        breakpoints: {

          400: {
            itemsToShow: 1
          },
          900: {
            itemsToShow: 2
          },
          1000: {
            itemsToShow: 3,
          }
        }
      }
    }
  }
};

</script>
<style lang="">


    
</style>