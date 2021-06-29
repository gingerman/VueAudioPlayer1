<template>
	<div>
    <AudioAppContainer/>
    <Tracks :tracks="tracks" />
	</div>
</template>

<script>
	import AudioAppContainer from './components/AudioAppContainer.vue'
	import Tracks from './components/Tracks.vue'
	// import tracksJson from './data/data.json'
	import axios from 'axios'

	const tracks = [];

	export default{
		data() {
			return{
				tracks: tracks,
			}
		},
		props: {
    		title: String,
  		},
		components:{
    		AudioAppContainer, Tracks
  		},
  		mounted() {
    
  		},
		created(){

			//console.log( "mounted >> this = " + tracks );

			axios(
					{
					method: 'get',
					url: './data.json',
					responseType: 'json'
					}
				)
				.then(

					response => (this.tracks = response.data)

					// this.tracks = function (response) {
					// 	console.log("RESPONSE\n++++++++++\n");//+response.data);
					// 	console.log(response.status);
					// 	console.log(response.statusText);
					// 	console.log(response.headers);
					// 	console.log(response.config);

					// 	if ( response.data.length > 0 ){

					// 		console.log("if RESPONSE length ++++++++++ Data Length "+response.data.length );
					// 		//console.log( "this = " + this.data );
					// 		return response.data;

					// 	}
					// }

					
					//response => console.log( "\n\nRESPONSE\n+AAA+++++++++\n" + JSON.stringify(  response.data) ),
					//response => this.data.tracks = JSON.stringify( response.data )[0],
					//console.log( "\n\nRESPONSE\n+BBB+++++++++\n" + this.tracks ),
				)
			}
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