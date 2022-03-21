<template>
    <div class="widget-container">
        <div style="opacity: .8" class="mb-3 fw-400 fs-14">{{title}}</div>
        <div class="mb-4 fw-500 fs-24">{{value}} {{unit}}</div>
        <div class="percentage"><fa icon="rocket" /><span class="ml-2 fw-600">{{percentage}}%</span></div>
        <div style="opacity: .4" class="fs-14 fw-400">compared to last week</div>
    </div>
</template>
<script>
export default {
    props: ['title', 'value', 'percentage', 'unit'],
    data: ()=>{
        return{
           
        }
    }
}
</script>
<style scoped>
.widget-container{
    opacity: .85;
    margin-right: 20px;
    background-color: #171049;
    width:300px;
    padding: 20px 30px;
    border-radius: 2px;
    box-shadow: rgba(0,0,0,.35) 0px 6px 12px -2px, rgba(0, 0, 0, 0.35) 0px 3px 7px -3px; 
    transition: all .2s ease;   
}
.widget-container:hover{
    opacity: 1;
    color: white;
    transform: scale(1.02);
}
.percentage{
    color: #3ec250;
}
</style>