<template lang="">
      <form @submit.prevent="updatedPost" >
       <input class="form-control" type="text" placeholder="title" aria-label="default input example" v-model="currentAnnonce.title" >
       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description" v-model="currentAnnonce.content"  ></textarea>
       <input class="form-control" type="text" placeholder="image" aria-label="default input example" v-model="currentAnnonce.image" >
      <div class="alert alert-success" v-if="messageUpdate">{{messageUpdate}}</div>
       <button class="btn btn-success text-black" type="submit">Modifier</button>
      </form>
</template>
<script>
import axios from 'axios'
export default {
    
    name: 'UpdateAnnonce',
    data() {
        return {
           currentAnnonce: null,
           messageUpdate:''

        }
    },
    methods: {
        async getTheAnnonces () {
    
      await axios.get(
        "http://localhost:3000/posts/" + this.$route.params.id
      )
      .then((res)=>{
        this.currentAnnonce= res.data
      })



        },
       async updatedPost() {
      await axios.patch("http://localhost:3000/posts/" + this.currentAnnonce.id ,this.currentAnnonce).
        then((res) => {
      this.currentAnnonce = res.data
      this.$router.push("/ItemDetails/" + this.currentAnnonce.id)
      })    

        },

    },
    mounted() {
        this.getTheAnnonces()
    },
    

    
}
</script>
<style lang="">
    
</style>