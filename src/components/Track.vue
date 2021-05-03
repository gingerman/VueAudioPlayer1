<template>
    <div class="trackContainer" v-bind="track" v-on:click=clickTrack() >
        <div class="track-date">{{ getDate() }}</div>
        <div class="track-progress-bar" v-if=getInProgressStatus()><TrackProgressBar/></div>
        <div class="track-title">{{  getTitle() }}</div>
    </div>
</template>

<script>
    import TrackProgressBar from './TrackProgressBar.vue'
    import {Howl, Howler} from 'howler'

    export default {
        name: 'Track',
        data() {
            return {
                inProgress:false,
                sound:Howl,
                loadmp3:String,
            }
        },
        props:{
            track:Object,
        },
        created: function(){
            this.loadmp3 = this.track.track;
        },
        methods:{
            clickTrack(){ 
                if ( !this.getInProgressStatus() ){
                    this.loadmp3 = this.track.path;
                    this.sound = new Howl({
                        src: [ this.loadmp3 ],
                        html5:true,
                    });
                    this.sound.play();
                } else {
                    this.sound.stop();
                    this.sound.seek(0);
                };
                this.inProgress = !this.getInProgressStatus();
            },
            getDate(){ return this.track.date },
            getTitle(){ return this.track.title },
            getTrack(){ return this.track.track },
            getInProgressStatus(){
                return this.inProgress;
            }
        },
        components: {
            TrackProgressBar,Howl, Howler,
        }
    }
</script>

<style scoped>
    .trackContainer{
        width:100%;
        overflow: hidden;
        cursor:pointer;
        background-color:transparent;
    }
    .trackContainer:hover{
        background-color: rgb(0, 255, 0);
    }
    .track-date {
        color:rgb(255, 255, 255);
        text-align: left;
        font-size: 0.6em;
        font-weight: normal;        
        width:47px;
        padding: 3px 2px 0 3px;
        height:auto;
        margin-bottom: 0px;
        background-color: rgb(0, 0, 0);
    }
    .track-title {
        border: 2px solid black;
        text-align: left;
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.75em;
        font-weight: normal;
        background-color: black;
        color:White;
        padding: 3px 2px 0 3px;
    }
     .track-title:hover{
        /* border-bottom: red 2px solid; */ 
        white-space:normal;

     }
     .track-progress-bar{
         height:30px;
         /* padding: 2px; */
         /* background-color: tomato; */
     }

</style>