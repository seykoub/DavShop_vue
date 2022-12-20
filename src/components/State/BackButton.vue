<template>
    <div>
     <button class="bg-orange-400 hover:bg-green-900 p-2 my-5 text-white" @click="back">Retour </button>
    </div>
    </template>
    <script>
    export default {
        name: 'BackButton',
        methods: {
            back() {
                this.$router.go(-1)
            }
        }
        
    }
    </script>
    <style>
        
    </style>