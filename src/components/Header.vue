<template>
  <div>
    <h>{{title}}</h>
  </div>
</template>

<script>

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

  export default {
    name: 'Header',
    props: {
      title: {
        type:String,
        default:"no value passed to header.vue",
      }
    },
    components:{
    } 
  }

</script>

<style scoped>
h {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: black;

  border-bottom : 2px solid blue;
  margin-bottom: 10px;
}
</style>
