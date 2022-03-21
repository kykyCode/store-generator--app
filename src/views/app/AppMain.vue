<template>
    <div class="d-flex"> 
        <NavigationBar class="col-2"></NavigationBar>
        <div class="col-10 p-0 m-0 bg-purple-light text-main">
            <router-view v-slot="{Component}">
                <transition name="route" mode="out-in">
                    <component :is="Component"></component>
                </transition>
            </router-view>
        </div>
        <UserPanel></UserPanel>
    </div>
</template>

<script>
import NavigationBar from '../../components/dashboard/NavigationBar.vue'
import UserPanel from '../../components/user panel/UserPanel.vue'
import {mapActions} from 'vuex'
export default {
    components: {
        NavigationBar,
        UserPanel
    },
    methods:{
        ...mapActions(['setActiveUser'])
    },
    data: ()=>{
        return{
        
        }
    },
    created(){
        this.setActiveUser();
    }
}
</script>
<style scoped>

.route-enter-from{
    transform: translateY(50px);
    opacity: 0;
}
.route-enter-active{
    transition: all .5s ease;
}
.route-leave-to{
    transform: translateY(50px);
    opacity: 0;
}
.route-leave-active{
    transition: all .5s ease;
}
.top-container{
    display: flex;
    width: 100%;
    padding: 35px 50px;
}
.hamburger{
    font-size: 24px;
    opacity: .7;
    transition: .2s ease;
    cursor: pointer;
}
.hamburger:hover{
    transform: scaleX(1.2);
    opacity: 1;
}
</style>