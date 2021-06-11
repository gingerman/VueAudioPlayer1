<template>
    <div>
        <div v-for="(track, index) in tracks" v-bind:key="index">
            <h3>{{ index }}<Track :track="track" /></h3>
        </div>
    </div>
</template>

<script>
import Track from './Track.vue'


export default {
    name: 'Tracks',
    props:{
        tracks: {
            type:Array
        }
    },
    components:{
        Track
    },
    data() {
        return {
            currentlyPlayingTrackID: {
            type:Number,
            default:6,
        }}
    },
}
</script>

<style scoped>
    h3 {
        /* border: 1px solid black; */
        text-align: left;
        font-size: 1.2em;
        font-weight: bold;
        background-color: white;
        margin: 5px 1px 0px  1px;


    }
</style>