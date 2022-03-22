<template>
    <div class="px-3 py-3 container-main">
        <h3 class="o-5">Store Creation</h3>
        <div class="d-flex justify-content-center shadow">
            <div class="mt-3 bg-purple px-5 py-5 form-style rounded shadow">
                <div v-if="step == 1">
                    <div class="fs-28 fw-500 o-5 text-center">Welcome To Store Creation Process</div>
                    <div class="fs-16 mt-2 fw-400 o-5 text-center">In this short process you have to fill necessery data to make creation of your store possible.</div>
                    <div class="fs-16 mt-2 mb-4 fw-400 o-5 text-center">So, first things first:</div>
                    <div class="ml-1 fs-16 o-5" style="margin-top:100px">Store name</div>
                    <input v-model="params.name" class="text-field__style-creation" type="text">
                    <div class="mt-4 ml-1 fs-16 o-5">Domain</div>
                    <input v-model="params.domain" class="text-field__style-creation" type="text">
                    <div class="d-flex justify-content-end">
                        <button @click="step=2" style="margin-top:100px" class="fs-18 local-btn shadow o-5">Next step</button>
                    </div>
                </div>
                <div v-if="step == 2">
                    <p class="fs-22 mt-2 fw-500 o-5 text-center">Now, we need store address</p>
                    <div class="fs-16 mt-2 fw-400 o-5 text-center">Remember that, it is a store address. User address form</div>
                    <div class="fs-16 fw-400 o-5 text-center"> is available in app dashboard</div>
                    <div class="ml-1 fs-16 o-5 mt-2">Street</div>
                    <input v-model="address.street" class="text-field__style-creation" type="text">
                    <div class="ml-1 fs-16 o-5 mt-2">Flat Number</div>
                    <input v-model="address.flat_number" class="text-field__style-creation" type="text">
                    <div class="d-flex justify-content-between">
                        <div style="width:48.5%">
                             <div class="mt-2 ml-1 fs-16 o-5">City</div>
                            <input v-model="address.city" class="text-field__style-creation" type="text">  
                        </div>
                        <div style="width:48.5%">
                            <div class="mt-2 ml-1 fs-16 o-5">Country</div>
                            <input v-model="address.country" class="text-field__style-creation" type="text"> 
                        </div>
                    </div>
                    <div class="mt-2 ml-1 fs-16 o-5">Postal code</div>
                    <input v-model="address.postal_code" class="text-field__style-creation" type="text">
                    <div class="mt-2 ml-1 fs-16 o-5">State</div>
                    <input v-model="address.state" class="text-field__style-creation" type="text">
                    <div class="d-flex justify-content-between mt-4">
                        <button @click="step=1" class="fs-18 local-btn shadow o-5">Previous step</button>
                        <button @click="step=3" class="fs-18 local-btn shadow o-5">Next step</button>
                    </div>
                </div>

                <div v-if="step == 3">
                    <p class="fs-22 mt-2 fw-500 o-5 text-center">It's almost done. </p>
                    <div class="fs-16 mt-2 fw-400 o-5 text-center">There is just contact info left.</div>
                    <div class="ml-1 fs-16 o-5 mt-5">Store Phone number</div>
                    <input v-model="params.phone" class="text-field__style-creation" type="text">
                    <div class="mt-4 ml-1 fs-16 o-5">Store email (optional)</div>
                    <input v-model="params.email" class="text-field__style-creation" type="text">
                    <div class="d-flex justify-content-between mt-5" v-if="loading == false"> 
                        <button @click="step=2" class="fs-18 local-btn shadow o-5">Previous step</button>
                        <button @click="saveAndGoToDesignEditor" class="fs-18 local-btn shadow o-5">Go to design editor</button>
                    </div>
                    <div class="text-center fs-18 mt-5 text-main o-5" v-if="loading">Loading...</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import StepOne from './StepOne.vue'
import StepTwo from './StepTwo.vue'

export default {
    component: {
        StepOne,
        StepTwo
    },
    data(){
        return{
            loading: false,
            step: 1,
            params: {},
            address:{
                type: 'store'
            }
        }
    },
    methods: {
        saveAndGoToDesignEditor(){
            this.loading = true;
            this.axios.post('/api/addresses', this.address).then(res=>{
                this.params.addressId = res.data.id;
                this.axios.post('/api/customizations').then(res=>{  
                    this.params.customizationId = res.data.id;
                    this.params.userId = this.$store.getters.userData.id
                    this.axios.post('/api/stores', this.params).then(res=>{
                        this.loading = false;
                        this.$router.push('/app/creator');
                        })
                })
            }).catch(err=>console.log(err))
        },
    }
}
</script>
<style scoped>
 .container-main{
     position: fixed;
     width: 100%;
     height: 100%;
     top:0;
     left:0;
     background-color: rgba(0,0,0,1)
 }
 .form-style{
     height: fit-content;
     width:50vw;
 }
 .local-btn{
     border:none;
     outline:none;
     color: white;
     background-color:#251b63;
     margin: 20px 0;
     padding: 10px 30px;
     border-radius: 7px;
     transition: all .2s ease;
     cursor: pointer;
 }
 .local-btn:hover{
     opacity: 1;
 }
</style>
    