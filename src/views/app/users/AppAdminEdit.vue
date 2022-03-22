<template>
    <div class="px-5 py-5 d-flex main-container-scrollable">
        <div class="col-3">
            <!--<ul class="list__container">
                <li class="list__element">
                    <fa class=" col-1 mx-2 icon-style text-main fs-18" icon="power-off"/>
                    <div class="col-11">GENERAL</div>
                </li>
                <li class="list__element">
                    <fa class="mx-2 icon-style text-main fs-18 col-1" icon="info"/>
                    <div class="col-11">ADDITIONAL INFORMATIONS</div>
                </li>
                <li class="list__element">
                    <fa class="col-1 mx-2 icon-style text-main fs-18" icon="address-card"/>
                    <div class="col-11">ADDRESSES</div>
                </li>
                <li class="list__element">
                    <fa class="col-1 mx-2 icon-style text-main fs-18" icon="power-off"/>
                    <div class="col-11" >CHANGE PASSWORD</div>
                </li>
                <li class="list__element">
                    <fa class="col-1 mx-2 icon-style text-main fs-18" icon="power-off"/>
                    <div class="col-11">PAYMENT METHODS</div>
                </li>
            </ul>-->
        </div>
        <div class="col-8">
            <div class="col-8">
                <h2 class="mb-4 o-5">Edit information</h2>
                <div class="d-flex" style="align-items:end">
                    <img src="../../../assets/images/landing-bg3.png" class="shadow" style="background-color:#4f49bf; border-radius:4px; height:250px; width:200px"/>
                    <div class="ml-4">
                        <button style="height:40px; width:230px;" class="mb-2 app-button bg-purple-primary box-shadow-none">Change your avatar</button>
                        <div class="o-5 fs-12" style="text-align:center">Your photo should be png, <br/>jpg or svg file. Maximum size 10MB</div>
                    </div>
                </div>
                <h4 class="mt-4 o-5">General information</h4>
                <div v-if="currentUser.first_name" class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">First Name</div>
                    <input v-model="currentUser.first_name" class="text-field__style col-7" type="text">
                </div>
                <div v-if="currentUser.last_name" class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">Last Name</div>
                    <input v-model="currentUser.last_name" class="text-field__style col-7" type="text">
                </div>
                <div v-if="currentUser.email" class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">E-mail</div>
                    <input v-model="currentUser.email" class="text-field__style col-7" type="text">
                </div>
                <div v-if="currentUser.Address">
                <h4 class="mt-5 o-5">Change password</h4>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">Old password</div>
                    <input class="text-field__style col-7" type="password">
                </div>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">New password</div>
                    <input class="text-field__style col-7" type="password">
                </div>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">Confirm password</div>
                    <input class="text-field__style col-7" type="password">
                </div>

                <h4 class="mt-5 o-5">Address</h4>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">Street</div>
                    <input v-model="currentUser.Address.street" class="text-field__style col-7" type="text">
                </div>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">Flat number</div>
                    <input v-model="currentUser.Address.flat_number" class="text-field__style col-7" type="text">
                </div>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">City</div>
                    <input v-model="currentUser.Address.city" class="text-field__style col-7" type="text">
                </div>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">Postal Code</div>
                    <input v-model="currentUser.Address.postal_code"  class="text-field__style col-7" type="text">
                </div>
                <div  class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">Country</div>
                    <input v-model="currentUser.Address.country" class="text-field__style col-7" type="text">
                </div>
                <div  class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">State (optional)</div>
                    <input v-model="currentUser.Address.state" class="text-field__style col-7" type="text">
                </div>
                </div>
                <h4 class="mt-5 o-5 mb-3">Payment methods</h4>
                <div class="d-flex">
                    <div class="payment_card mx-2"><img style="width:200px;" src="../../../assets/images/stripe.png" alt=""/></div>
                    <div class="payment_card mx-2"><img style="width:200px;" src="../../../assets/images/paypal.png" alt=""/></div>        
                </div>
                <button @click="saveChanges" class="app-button box-shadow-none my-4 bg-purple-primary o-5">Save Changes</button>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    data: ()=>{
        return{
            currentUser: {
                Address: {
                    type: 'user'
                }
            },
        }
    },
    methods: {
       setUser(){
           return this.$store.getters.userData
       },
       saveChanges(){
           !this.currentUser.addressId ? this.createAddress() : this.changeAddress();
       },
       saveUser(addressId){
           this.currentUser.addressId = addressId
           let tempUser = {...this.currentUser}
           delete tempUser.Address
           this.axios.put('/api/users/'+this.currentUser.id, tempUser).then(res=>{
               console.log(res);
           }).catch(error=>{
               console.log(error);
           })
       },
       createAddress(){
            this.axios.post('/api/addresses', this.currentUser.Address).then(res=>{
                this.saveUser(res.data.id)
                this.currentUser.Address = res.data
            }).catch(error=>{
                console.log(error);
            })  
       },
       changeAddress(){
            this.axios.put('/api/addresses/'+this.currentUser.Address.id, this.currentUser.Address).then(res=>{
                this.saveUser(res.data.id)
                this.currentUser.Address = res.data
            }).catch(error=>{
                console.log(error);
            }) 
       },
    },
    created(){
        this.currentUser = this.$store.getters.userData
    }
}
</script>

<style scoped>
    .payment_card{
        padding: 15px;
        outline: 3px solid #4f49bf;
        border-radius: 7px;
    }   
    .main-container-scrollable{
        overflow-y: scroll;
        max-height: 100vh;
    }
    .list__element{
        margin: 30px 0;
        opacity: .7;
        display: flex;
        align-items: center;
        transition: all .1s ease;
    }
    .list__element:hover{
        opacity: 1;
        cursor: pointer;
    }
</style>