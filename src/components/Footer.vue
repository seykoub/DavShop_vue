<template >

    <footer class="fixed bottom-0 w-full -z-50 p-3 border-b-2 border-slate-900 text-slate-900 bg-green-900">
        <p class="text-center text-white uppercase"> DAVshop- {{date}} - CopyRight - Tous droits reservé</p>
   </footer>
</template>
<script>
export default {
    name: "Footer",
     data () {
        return {
            date : new Date().getFullYear()
        }
    }
    
}
</script>
<style >
    
</style>

//