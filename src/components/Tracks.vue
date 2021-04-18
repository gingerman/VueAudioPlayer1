<template>
    <div v-for="track in tracks" v-bind:key="track">
        <h3><Track :track="track" /></h3>
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
    }
}
</script>

<style scoped>
    h3 {
        border: 1px solid black;
        text-align: left;
        font-size: 1.2em;
        font-weight: bold;
        background-color: white;
        margin:1px;
    }
</style>