<template>
    <div class="trackContainer" v-bind="track" v-on:click=clickTrack(track.id)>
        <span class="track-date">{{ getDate() }}</span>
        <span class="track-title">{{track.title}}</span>
    </div>
</template>

<script>
export default {
    name: 'Track',
    props:{
        track:Object
    },
    methods:{
        getDate(){ return this.track.date },
        clickTrack(t){ console.log("click " + t); },
    }
}
</script>

<style scoped>
    .trackContainer:hover{
        color:rgb(0, 0, 0);
        background-color: darkorange;
    }
    .track-date {
        text-align: left;
        font-size: 0.5em;
        font-weight: normal;
        padding-left: 10px;
        margin-left:10px;
        margin-right:20px;
        display:float;
    }
    .track-title {
        border: 1px solid snow;
        text-align: left;
        font-size: 0.75em;
        font-weight: normal;
        padding-left: 10px;
        margin-left:10px;
        margin-right:10px;
        background-color:  darkolivegreen;
        color:White;
    }

</style>