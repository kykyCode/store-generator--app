<template>
    <div class="px-4 py-4 main">
        <h1 class="o-5 mt-3 mb-3">Products</h1>
        <div class="mt-1 bg-purple px-1 py-1 m-0 text-main " style="width:fit-content; border-radius: 7px; opacity: .9;">
            <div class="o-5 fs-18 my-2 ml-3">Discounts</div> 
            <div class="d-flex flex-wrap" >
                <DiscountProductCard v-for="product in discounts" :stars="4" :discount="product.discount" :title="product.title" :percentage="product.percentage" :key="product.id"></DiscountProductCard>
            </div>
        </div>
        <TableComponent class="mt-5" :show="5" :title="'PRODUCTS'" :collection="this.products"></TableComponent>
        
    </div>
</template>

<script>
import TableComponent from '../../../components/dashboard/widgets/TrendingTableWidget.vue'
import DiscountProductCard from '../../../components/reusable/ProductSuperDiscountCard.vue'
export default {
    components: {
        TableComponent,
        DiscountProductCard
    },
    data: ()=>{
        return{
            discounts: [
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
                
            ],
            products: [
            {
                id:1,
                name: 'bluska',
                rate: 4,
                price: 99.99,
                availibleSizes: ['XS', 'L', 'XXL'],
                photo: 'bluska.png'
            },
            {
                id:2,
                name: 'czapka',
                rate: 4,
                price: 39.99,
                availibleSizes: ['XS', 'L', 'XXL'],
                photo: 'bluska.png'
            },
            {
                id:3,
                name: 'spodzien',
                rate: 4,
                price: 19.99,
                availibleSizes: ['XS', 'L', 'XXL'],
                photo: 'bluska.png'
            }
            ]
        }
    }
}
</script>

<style scoped>
    .main{
        max-height: 100vh;
        overflow-y: scroll;
    }
</style>