<template>
  <div>
    <h>{{title}}</h>
  </div>
</template>

<script>

  export default {
    name: 'AudioAppHeader',
    props: {
      title: {
        type:String,
        default:"no value passed to header.vue",
      }
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