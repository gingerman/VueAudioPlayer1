<template>
    <div><AudioAppHeader title="MASHER AUDIO PLAYER"/></div><br> 
    <div><PlayerConsole title="Brozone Player Dev"/></div>
</template>

<script>

  import AudioAppHeader from './AudioAppHeader.vue'
  import PlayerConsole from './PlayerConsole.vue'

  export default {
    name: 'AudioAppContainer', 
    components: {
      PlayerConsole,AudioAppHeader,
    }
  }
</script>

<style>
</style>
