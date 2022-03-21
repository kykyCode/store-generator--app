<template>
    <div class="main-container bg-purple">
        <div class="form-container bg-purple-dark">
            <h2 class="mb-5 text-main" style="opacity: .8">Store Management App</h2>
            <div>
                <form ref="register-form">
                    <div class="label">EMAIL</div>
                    <div><input v-model="params.email" class="input-style text-main" type="email"></div>
                    <div class="label">FIRST NAME</div>
                    <div><input v-model="params.first_name" class="input-style text-main" type="text"></div>
                    <div class="label">LAST NAME</div>
                    <div><input v-model="params.last_name" class="input-style text-main" type="text"></div>
                    <div class="label">PASSWORD</div>
                    <div><input v-model="params.password" class="input-style text-main" type="password"></div>
                    <div class="d-flex" style="justify-content: center;">
                        <button type="button" @click="register" class="mt-5 bg-purple-primary text-main login-btn">Sign up</button>
                    </div>
                    <div class="text-main" v-if="errors.length !== 0">{{errors[0]}}</div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: ()=>{
        return{
            params: {},
            errors: []
        }
    },
    methods: {
        /*formCheck(){
                this.errors = [];
                if(this.params.email && this.params.firs_name && this.params.last_name && this.params.password){
                    if(this.params.password === this.params.password_confirmation){
                        this.register();
                    }else{
                        this.errors.push('Password does not match')
                    }
                }
                if(!this.params.email) this.errors.push('Please, fill an email field');
                if(!this.params.first_name) this.errors.push('Please, fill a first name field');
                if(!this.params.last_name) this.errors.push('Please, fill a last name field');
                if(!this.params.password) this.errors.push('Please, fill a password field');
            },
            register(){
                console.log("registration dziala!");
        }*/
        register(){
            this.axios.post('/api/register', this.params).then(res=>{
                this.$router.push('/login');
            }).catch(err=>console.log(err));
        }
    }
}
</script>
<style scoped>
    .main-container{
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form-container{
        padding: 35px 100px;
        border-radius: 7px;
        box-shadow: rgba(0, 0, 0, 0.36) 0px 10px 36px 0px, rgba(0, 0, 0, 0.36) 0px 0px 0px 1px;
    }
    .input-style{
        margin-top:5px;
        padding: 10px;
        width: 350px;
        background-color: #171049;
        outline: none;
        border: 1px solid #0e0730;
        border-radius: 7px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        font-size: 18px;
    }
    .label{
        margin-top:15px;
        color: whitesmoke;
        opacity: .5;
        font-size: 14px;
    }
    .login-btn{
        border: none;
        outline: none;
        border-radius: 7px;
        padding: 8px 55px;
        cursor: pointer;
    }
</style>