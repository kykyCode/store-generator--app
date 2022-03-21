<template>
    <div @click="toggler=!toggler" class="main-container bg-purple-primary">
        <div class="circle" v-bind:class="toggler? 'circle-active':''"></div>
    </div>
</template>

<script>
export default {
    data: ()=>{
        return{
            toggler: false
        }
    }
}
</script>

<style scoped>
    .main-container{
        width: 50px;
        border-radius: 40px;
        height: 30px;
        opacity: .8;
        transition: all .2s ease;
        cursor: pointer;
    }
    .main-container:hover{
        opacity: 1;
    }
    
    .circle{
        height: 20px;
        width: 20px;
        background-color:#0b072b;
        border-radius: 20px;
        transform: translateX(-60%);
        transition: all .1s ease-out;
        opacity: .7;
    }
    
    .circle-active{
        transform: translateX(60%) !important;
        opacity: 1!important;
    }
    
</style>