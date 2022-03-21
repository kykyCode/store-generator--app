<template>
    <div class="bg-purple table__container">
        <h4 class="px-5 fs-14" style="opacity: .8">TOP SELLING PRODUCTS</h4>
        <div class="bg-purple-soft my-3 header__container">
            <div class="d-flex px-5" style="opacity: .9">
                <div class="header__element fw-500 fs-18">Name</div>
                <div class="header__element fw-500 fs-18">Price</div>
                <div class="header__element fw-500 fs-18">Quantity</div>
                <div class="header__element fw-500 fs-18">Income</div>
            </div>
        </div>
        <div v-for="(product,index) in products" :key="product.id" class="d-flex px-5" style="position: relative; opacity: .8">
            <div style="position: absolute; left:20px;top:10px; width:30px;" class="fw-500">{{index+1}}.</div>
            <div class="row__element">{{product.name}}</div>
            <div class="row__element">{{product.qty}}</div>
            <div class="row__element">{{product.price}} {{product.unit}}</div>
            <div class="row__element">{{product.income}} {{product.unit}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>{
        return{
            products: [
                {
                    id: 1,
                    name: 'Koszulka Polo ze stujko',
                    price: '19.99',
                    unit: 'AUD',
                    qty: '13',
                    income: '700.00'
                },
                {
                    id: 2,
                    name: 'Polar cieply',
                    price: '79.99',
                    unit: 'AUD',
                    qty: '4',
                    income: '830.00'
                },
                {
                    id: 3,
                    name: 'Bluza hoodie',
                    price: '29.99',
                    unit: 'AUD',
                    qty: '3',
                    income: '666.75'
                },
                {
                    id: 4,
                    name: 'Spdonie cieple',
                    price: '19.99',
                    unit: 'AUD',
                    qty: '13',
                    income: '700.99'
                },
                {
                    id: 5,
                    name: 'Czapka z  daszmkiem',
                    price: '15.49',
                    unit: 'AUD',
                    qty: '2',
                    income: '30.50'
                }
            ]
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