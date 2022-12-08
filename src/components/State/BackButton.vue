<template>
    <div>
     <button class="bg-cyan-500 p-2 my-5 text-black" @click="back">Retour </button>
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