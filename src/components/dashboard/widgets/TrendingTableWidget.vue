<template>
    <div class="bg-purple table__container">
        <h4 class="px-5 fs-14" style="opacity: .8">{{title}}</h4>
        <div class="bg-purple-soft my-3 header__container">
            <div class="d-flex px-5" style="opacity: .9">
                <div class="header__element fw-500 fs-18">Name</div>
                <div class="header__element fw-500 fs-18">Sizes</div>
                <div class="header__element fw-500 fs-18">Price</div>
                <div class="header__element fw-500 fs-18">Photo</div>
            </div>
        </div>
        <div v-for="(product,index) in collection" :key="product.id" class="d-flex px-5" style="position: relative; opacity: .8">
            <div style="position: absolute; left:20px;top:10px; width:30px;" class="fw-500">{{index+1}}.</div>
            <div class="row__element">{{product.name}}</div>
            <div class="row__element">{{product.availibleSizes}}</div>
            <div class="row__element">{{product.price}} $</div>
            <div class="row__element">{{product.photo}} </div>
        </div>
        <div class="bg-purple-light px-3 py-3 mx-3 mt-3 shadow fs-18 text-center" style="width:300px; border-radius: 7px">Pagination component</div>
    </div>
</template>
<script>
export default {
    props: ['title', 'collection', 'show', 'price', 'availibleSizes'],
    data:()=>{
        return{
            
        }
    }
}
</script>
<style scoped>
    .table__container{
        border-radius: 6px;
        padding: 20px 0;
        opacity: .9;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 6px 12px -2px, rgba(0, 0, 0, 0.4) 0px 3px 7px -3px;
        transition: all .2s ease;
    }
    .table__container:hover{
        opacity: 1;
        transform: scale(1.008);
    }
    .header__element{
        width:250px;
    }
    .row__element{
        padding: 10px 0;
        width:250px;
        border-bottom: 1px solid #251b63;
        
    }
    .header__container{
        border-radius: 6px;
        margin: 0 3px;
        border-left:1px solid #171049;
        border-right:1px solid #171049;
    }
</style>