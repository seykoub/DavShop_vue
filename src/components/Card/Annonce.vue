<template>
    <div class="flex w-96 flex-col justify-center bg-green-900  shadow-lg shadow-slate-300/60" @click="goToItem(item.id)">
    <!-- img -->
    <img
      class="aspect-video w-96 object-cover object-center"
      :src="item.image" />
    <!-- text information -->
    <div class="p-4">
      <small
       class="text-white text-lg">
       {{item.category}}</small>
      <h1 
      class="text-xl font-medium text-white pb-2 my-1">
      {{item.title}}</h1>
      <p 
      class="text-sm tracking-tight font-light text-white leading-6">
     {{ item.content| truncate(200) }}
     </p>
      <hr>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Annonce',
    props: ['item'],
    methods: {
      goToItem(id) {
        this.$router.push({name: 'ItemDetails', params: {id: id}})
      }
    },
    filters :{
    truncate(value, n) {
      if (value.length > n) {
        return value.slice(0, n - 4) + '...';
      } else {
        return value;
      }
    },
  }
    
}
</script>
<style>
    
</style>