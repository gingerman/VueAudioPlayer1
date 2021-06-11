<template>
	<div>
    <AudioAppContainer/>
    <Tracks :tracks="tracks" />
	</div>
</template>

<script>
import AudioAppContainer from './components/AudioAppContainer.vue'
import Tracks from './components/Tracks.vue'
import tracksJson from './data/data.json'

export default {
  name: 'App',
  data() {
    return{
      tracks: tracksJson
    }
  },
  props: {
    title: String,
  },
  components:{
    AudioAppContainer, Tracks
  },
  created() {
    
  }
  	//   mounted(){
	// 	getJSON('./assets/data.json', json => {
	//     this.tracks = json
	//   })
	//   },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #080c0f;
  margin: 0px;
  width:360px;
  max-height: 100%;
  min-height: 400px;
  /* background-color: lightblue; */
}
</style>
