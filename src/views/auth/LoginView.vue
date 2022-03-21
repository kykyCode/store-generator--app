<template>
    <div class="main-container bg-purple">
        <div class="form-container px-5 py-5 bg-purple-dark">
            <h2 class="mb-5 text-main" style="opacity: .8">Store Management App</h2>
            <div>
                <div class="label">EMAIL</div>
                <div><input v-model="params.email" class="input-style text-main" type="email"></div>
                <div class="label">PASSWORD</div>
                <div><input v-model="params.password" class="input-style text-main" type="password"></div>
                <div class="d-flex" style="justify-content: center;">
                    <button type="button" @click="login" class="mt-5 bg-purple-primary text-main login-btn">Log in</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: mapGetters(['activeUserToken','activeUser']),
    data: ()=>{
        return{
            params: {},
            user: {}
        }
    },
    methods: {
        ...mapActions(['setActiveUserToken', 'setActiveUser']),
        login(){
            this.axios.post('/api/login', this.params).then(res=>{
                this.setActiveUser();
                this.setActiveUserToken(res.data.accessToken);
                this.$router.push('/app/dashboard')
                }).catch(err=>console.log(err));
        },
    },
    created(){
        this.setActiveUser();
        if(this.$store.getters['activeUser'].first_name){
            this.$router.push('/app/dashboard')
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