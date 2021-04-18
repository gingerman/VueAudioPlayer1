<template>
    <div><Header title="MASHER AUDIO PLAYER"/></div><br>
    <div><PlayerConsole/></div>
</template>

<script>
import Header from './Header.vue'
import PlayerConsole from './PlayerConsole.vue'

export default {
  name: 'AudioAppContainer', 
  components: {
  Header, PlayerConsole
  }}
</script>

<style>
</style>
