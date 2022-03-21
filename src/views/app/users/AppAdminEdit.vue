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
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">First Name</div>
                    <input v-if="user.data.first_name" v-model="user.data.first_name" class="text-field__style col-7" type="text">
                </div>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">Last Name</div>
                    <input v-model="user.data.last_name" class="text-field__style col-7" type="text">
                </div>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">E-mail</div>
                    <input v-model="user.data.email" class="text-field__style col-7" type="text">
                </div>

                <h4 class="mt-5 o-5">Change password</h4>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">Old password</div>
                    <input v-model="user.data.old_password" class="text-field__style col-7" type="password">
                </div>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">New password</div>
                    <input v-model="user.data.new_password" class="text-field__style col-7" type="password">
                </div>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">Confirm password</div>
                    <input v-model="user.data.new_password_confirmation" class="text-field__style col-7" type="password">
                </div>

                <h4 class="mt-5 o-5">Address</h4>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">Street</div>
                    <input v-model="user.Address.street" class="text-field__style col-7" type="text">
                </div>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">Flat number</div>
                    <input v-model="user.Address.flat_number" class="text-field__style col-7" type="text">
                </div>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">City</div>
                    <input v-model="user.Address.city" class="text-field__style col-7" type="text">
                </div>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">Postal Code</div>
                    <input v-model="user.Address.postal_code" class="text-field__style col-7" type="text">
                </div>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">Country</div>
                    <input v-model="user.Address.country" class="text-field__style col-7" type="text">
                </div>
                <div class="d-flex mt-3 o-5" style="width:100%; align-items:center;">
                    <div class="col-5">State (optional)</div>
                    <input v-model="user.Address.state" class="text-field__style col-7" type="text">
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
            user:{
                data:{},
                Address:{
                    type:'admin_address'
                },
            }
        }
    },
    methods: {
        getUser(){
            this.axios.get('/api/users').then(res=>{
                this.user.data = res.data;
                this.user.Address = res.data.Address;
                console.log(res.data)
            }).catch(err=>{
                console.log(err);   
            })
        },
        saveChanges(){
                this.axios.post('/api/addresses', this.user.address).then(res=>{
                    this.user.data.addressId = res.data.id;
                    this.axios.put('/api/users', this.user.data).then(res=>console.log(res)).catch(err=>console.log(err));
                })
        }
    },
    created(){
        this.getUser(); 
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