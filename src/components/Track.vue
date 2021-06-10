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
                duration:Number,
                soundPlaying:false,
                // baseUrl:'http://www.brozoneradio.com/podcast_episodes/',
                baseUrl:'/',
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
                var self = this;

                if ( !this.getInProgressStatus() ){
                    this.loadmp3 = this.track.path;

                    const trackSource =`${this.baseUrl}`+`${this.loadmp3}`;
                    console.log('trackSource = ' + trackSource + "\n");

                    this.sound = new Howl({
                        src: [ trackSource ],
                        html5:true,
                        autoUnlock:true,
                        onplay: function(){
                            console.log('Playing!');
                            this.soundPlaying = true;
                            // Start upating the progress of the track.
                            requestAnimationFrame(self.step.bind(self));
                        },
                        onload: function(){
                            //this.duration =  this.sound.duration();
                            console.log( 'Sound Loaded event'  );
                        },
                        onend: function(){
                            console.log('Ended!');
                        },
                        onpause: function(){
                            console.log('Paused!');
                        },
                        onstop: function(){
                            console.log('Stopped!');
                        },
                        onseek: function(){
                            //Start upating the progress of the track.
                            console.log("onSeek")
                            requestAnimationFrame(self.step.bind(self))
                        },
                    });

                    this.sound.play();

                    this.sound.onplayerror =  function() {
                        sound.once('unlock', function() {
                        sound.play();
                        this.soundPlaying = true;
                        });
                    }

              
                } else {
                    console.log( 'this is at ' + this.sound.seek() );
                    this.sound.stop();
                    this.sound.seek(0);
                    this.soundPlaying = false;
                };
                this.inProgress = !this.getInProgressStatus();
            },
            getDate(){ 
                return this.track.date },
            getTitle(){ 
                return this.track.title },
            getTrack(){ 
                return this.track.track },
            getInProgressStatus(){
                return this.inProgress;
            },
            /**
             * Seek to a new position in the currently playing track.
             * @param  {Number} per Percentage through the song to skip.
             */
            seek: function(per) {
                var self = this;

                // Convert the percent into a seek position.
                if (this.sound.playing()) {
                    this.sound.seek(this.sound.duration() * per);
                }
                console.log( 'seek update ' + this.sound.duration() );
            },                    /**
                * The step called within requestAnimationFrame to update the playback position.
                */
            step: function() {
                var self = this;
                //console.log( 'step update dur ' + this.sound.duration() );
                //console.log( 'step update seek ' + this.sound.seek() );



                // Determine our current seek position.
                var seek = this.sound.seek() ;
                //timer.innerHTML = self.formatTime(Math.round(seek));
                // progress.style.width = (((seek / sound.duration()) * 100) || 0) + '%';

                var perc = ((( seek / this.sound.duration()) * 100) || 0) ;
                console.log( "percent = " + perc  +" -- " + seek)

                // TrackProgressBar.data.oldPercent = perc;
                // var pb = getElementsByClassName('.track-progress-bar');
                // pb.style.width = perc;               

                //console.log( "Track to TrackProgressBar = " + TrackProgressBar.methods.update() );
                // TrackProgressBar.data;
                TrackProgressBar.methods.update(perc)

                // If the sound is still playing, continue stepping.
                if (this.sound.playing()) {
                requestAnimationFrame(self.step.bind(self));
                }
            },



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