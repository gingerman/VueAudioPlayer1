<template>
    <div>
        <div class="loadedpc"></div>
        <div class="remainingpc"></div>
        <!-- <audio controls>
            <source src="horse.ogg" type="audio/ogg">
            <source src="horse.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio> -->
    </div>
</template>


<style scoped>
    .loadedpc {
        position:relative;
        top:0;
        width:1%;
        height:30px;
        background-color: rgb(255, 0, 0);
    }
    .remainingpc {
        position:relative;
        left: 1%;
        top:-30px;
        width:99%;
        height:30px;
        background-color: rgb(3, 172, 54);
    }
</style>