<template>
  <div>
    <h>{{title}}</h>
  </div>
</template>

<script>

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

  export default {
    name: 'PlayerConsole',
    props: {
      title: String,
    }
  }

</script>

<style scoped>
h {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    /* border: 10px solid rgb(255, 255, 255); */
    background-color: slateblue;
    padding:0px;
    width:640px;
    padding:2px 8px 0 8px;
    margin:0px;
}
</style>
