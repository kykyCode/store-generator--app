<template>
    <div class="d-flex main-container bg-purple" style="align-items:center; justify-content: space-between">
        <div class="d-flex">
            <img src="../../assets/images/landing-bg3.png" style="width:50px; height: 50px; border-radius:50%" class="bg-purple-primary"/>
            <div>
                <div class="ml-3 text-main fw-500 fs-16">{{activeUser.first_name + " " + activeUser.last_name}}</div>
                <div class="ml-3 text-main fs-12 fw-400" style="opacity: .5">additional info</div>
            </div>
        </div>
        <div class="d-flex">
            <router-link :to="'users/admin'"><fa class="mx-2 icon-style text-main fs-18" icon="sliders-h"/></router-link>
            <fa @click="logoutHandler" class="mx-2 icon-style text-main fs-18" icon="power-off"/>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return{
            user: null
        }
    },
    computed: mapGetters(['activeUser']),
    methods: {
        logoutHandler(){
            this.logout();
            setTimeout(()=>{
                this.$router.push('/login')
            }, 500)
            
        },
        ...mapActions(['logout', 'setActiveUser'])},
    created(){
        this.setActiveUser()
    }
}
</script>
<style scoped>
    .main-container{
        width: 300px;
        border-radius: 7px;
        padding: 10px;
        position:absolute;
        top:20px;
        right: 20px;
        box-shadow: rgba(0, 0, 0, 0.35) 1.95px 1.95px 2.6px;
        opacity: .7;    
        transition: all .1s ease;
}
    .main-container:hover{
        transform: scale(1.02);
        opacity: 1;
        color:white !important;
    }
    .icon-style:hover{
        cursor: pointer;
    }
</style>