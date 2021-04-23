<template>
    <div>
        <div class="loadedpc"></div>
        <div class="remainingpc"></div>
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