<template>
    <div class="main">
        <h1>Dashboard</h1>
        <div class="d-flex flex-wrap">
            <div class="d-flex col-12 m-0 p-0">
                <InfoWidget title="TOTAL INCOME" value="40.545" percentage="5.7" unit="AUD"></InfoWidget>
                <InfoWidget title="PURE INCOME" value="11.400" percentage="3.2" unit="AUD"></InfoWidget>
                <InfoWidget title="USERS" value="17" percentage="2.7%" unit="customers"></InfoWidget>
                <InfoWidget title="TOTAL ORDERS" unit="orders" value="337" percentage="1.7"></InfoWidget>
            </div>
            <div class="py-5 d-flex flex-wrap">
                <TrendingTableWidget></TrendingTableWidget>
                <div class="col-11 mt-3 bg-purple px-3 py-3 text-main d-flex flex-wrap" style="width:fit-content; border-radius: 7px; opacity: .9;">
                   <DiscountProductCard v-for="product in products" :stars="4" :discount="product.discount" :title="product.title" :percentage="product.percentage" :key="product.id"></DiscountProductCard>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import InfoWidget from '../../../components/dashboard/widgets/InfoWidget.vue'
import TrendingTableWidget from '../../../components/dashboard/widgets/TrendingTableWidget.vue'
import DiscountProductCard from '../../../components/reusable/ProductSuperDiscountCard.vue'
export default{
    components: {
        InfoWidget,
        TrendingTableWidget,
        DiscountProductCard
    },
    data: ()=>{
        return{
            params: {},
            products: [
                {
                    id:1,
                    title: 'hoodie cool',
                    percentage: '5.6',
                    discount: 20,
                    stars: 4,
                },
                {
                    id:2,
                    title: 'hoodie cool',
                    percentage: '5.6',
                    discount: 20,
                    stars: 4,
                },
                {
                    id:3,
                    title: 'hoodie cool',
                    percentage: '5.6',
                    discount: 20,
                    stars: 4,
                },
                {
                    id:4,
                    title: 'hoodie cool',
                    percentage: '5.6',
                    discount: 20,
                    stars: 4,
                },
                
            ]
        }
    },
    methods: {
        request(){
            this.params.amount = parseInt(this.params.amount)
            this.params.categoryId = parseInt(this.params.categoryId);
            this.params.price = parseInt(this.params.price);
            this.axios.post('/create-checkout-session', this.params).then(res=>console.log(res)).catch(err=>console.log(err))
        }
    },
}
</script>

<style scoped>
.main{
    overflow-y:scroll;
    max-height: 100vh;
    padding: 30px;
}
</style>