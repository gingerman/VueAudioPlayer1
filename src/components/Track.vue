<template>
    <div v-bind="track">
        <track-date>{{ getDate() }}</track-date> <track-title>{{track.title}}</track-title>
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
    }
}
</script>

<style scoped>
    track-title {
        border: 1px solid snow;
        text-align: left;
        font-size: 0.75em;
        font-weight: normal;
        margin-left:10px;
        margin-right:10px;
        background-color:  darkolivegreen;
        color:White;
    }
    track-date {
        text-align: left;
        font-size: 0.5em;
        font-weight: normal;
        margin-left:10px;
        margin-right:10px;
    }
</style>