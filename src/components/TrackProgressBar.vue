<template>
    <div>
        <div id="currTime" v-bind:playTime="playTime" >{{playTime}}</div>
        <div id="lb" class="loadedpc"></div>
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
        },
        playTime: {
        },
    },
    data(){
        return{
            
        }
    },
    methods:{
        update( pc, ti ){
            // this.loadedpc.style.width = "50%"
            //    loadedpc.style.width = "50%"
            //getElementById( this.xxx ).style.width = "50%"

            this.playTime = ti;
            // console.log( "ti = " + ti );
            // console.log( "TrackProgressBar update() = " + Math.round(pc));

            this.setLoaderBar( Math.ceil(pc) );
            this.setCurrTime( ti );

        },
        getLoadedPercent(){
            return this.loadedPercent;
        },
        setLoaderBar(la){
            var loadedBar = document.getElementById( "lb" );
            // console.log( `loaderBar = ${loadedBar}` );
            if ( loadedBar ){
                loadedBar.style.width = la+"%";
            }
        },
        setCurrTime(ti){
            var cTime = document.getElementById( "currTime" );
            if ( cTime ){
                cTime.innerHTML = ti;
            }
        },
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
        width:0%;
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