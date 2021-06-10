<template>
    <div>
        <div id="lb" v-bind:loadedPercent="loadedPercent" class="loadedpc">{{loadedPercent+"%"}}</div>
        <!-- <div class="remainingpc"></div> -->
        <!-- v-bind:artists="artists"/> -->
        <!-- <audio controls>
            <source src="horse.ogg" type="audio/ogg">
            <source src="horse.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio> -->
    </div>
</template>

<script>

    // import Track from './Track.vue'


export default {
    name: 'TrackProgressBar',
    props:{
        loadedPercent: {
            type:Number,
            default:6,
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        update(x){
        // this.loadedpc.style.width = "50%"
        //    loadedpc.style.width = "50%"
        //getElementById( this.xxx ).style.width = "50%"

        console.log( "TrackProgressBar update() = " + Math.round(x));

        this.setLoadedAmount( Math.round(x) );

        },
        getLoadedPercent(){
            return this.loadedPercent;
        },
        setLoadedAmount(la){
            var loadedBar = document.getElementById( "lb" );
            console.log( `loaderBar = ${loadedBar}` );
            loadedBar.style.width = la+"%";
        }
    },
    // created:{
    //     this.oldPercent.style.width = "50%",
    // },
}

</script>

<style scoped>
    .loadedpc {
        position:relative;
        top:0;
        width:90%;
        height:30px;
        background-color: rgb(255, 0, 0);
    }
    .remainingpc {
        position:relative;
        left: 1%;
        top:-30px;
        width:5%;
        height:30px;
        background-color: rgb(3, 172, 54);
    }
</style>