<template>
    <div class="main-section">
        <NavigationLand></NavigationLand>
        <main class="main-container-section">
            <div class="first-section">
                <div class="container">
                    <div class="d-flex justify-content-lg-center text-center" style="align-items: center; height: 85vh">
                        <div class="w-100">
                            <div style="color:#212121;line-height: 65px;" class="fs-70 fw-700 text-center ls-0">The freedom <br/>to create and explore.</div>                
                            <p class="fs-22 fw-500 mb-0 mt-3">Create high-quality 3D illustrations, device mockups and other 3D</p>
                            <p class="fs-22 fw-500">content in a quick and engaging way. All in your browser.</p>
                            <div class="mt-5">
                                <button class="button-landing">Get started, it's free</button>
                                <button class="button-landing secondary-btn">Pricing</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="second-section">
                <div class="container py-5">
                    <div class="d-flex flex-wrap">
                        <div @click="goToApp" style="height:620px" class="big-card py-5 px-5 bg-black info-card col-md-12 col-lg-6">
                            <div class="fs-48 text-white" style="line-height: 50px;">
                                <div class="fw-600 mb-4">Explore our<br/>intuitive dashboard</div>
                                <p style="line-height: 26px;" class="fs-18 my-0">Create awesome products with a beautiful,</p>
                                <p style="line-height: 26px;" class="fs-18 my-0">perfectly designed dashboard.</p>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div style="height:300px; line-height: 28px;" class="mt-5 mt-lg-0 col-12 text-deep-white purple-card bg-purple info-card fs-28">
                                <div class="fw-600 mb-4">Illustration <br/>Constructor</div>
                                <p style="line-height: 26px;" class="fs-18 my-0">Create awesome 3D scenes with a huge</p>
                                <p style="line-height: 26px;" class="fs-18 my-0">library of illustrations. All in your browser.</p>
                            </div>
                            <div style="height:300px; line-height: 28px;" class="mt-5 mt-lg-3 col-12 white-card text-deep-black info-card fs-28">
                                <div class="fw-600 mb-4">Chuj wie random<br/>text coś innego</div>
                                <p style="line-height: 23px;" class="fs-18 my-0">Najedź na mnie to tak</p>
                                <p style="line-height: 23px;" class="fs-18 my-0">fajnie ziumm zrobi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <FooterLand></FooterLand>
    </div>
</template>


<script>
import FooterLand from '../../components/landing/FooterLand.vue'
import NavigationLand from '../../components/landing/NavigationLand.vue'
export default {
    name: 'LandingMain',
    components: {
        FooterLand,
        NavigationLand
    },
    methods:{
        goToApp(){
            this.$router.push('/register');
        }
    }
}
</script>

<style>
.main-section{
    overflow-y: scroll;
    max-height: 100vh;
}
.first-section{
    background-image: url('../../assets/images/main_bg.png');
}

@keyframes slideInFromTop {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.big-card{
    background-image: url('../../assets/images/landing_bg1.png');
    background-repeat: no-repeat;
    background-size: 200%;
    background-position-x:-200px;
}
.big-card:hover{
    background-size: 205%;
    background-position-x:-200px;
}
.purple-card{
    background-image: url('../../assets/images/landing_bg2.png');
    background-repeat: no-repeat;
    background-size: 110%;
    background-position-x:0px;
}
.purple-card:hover{
    background-size: 115%;
}
.white-card{
    background-image: url('../../assets/images/landing-bg3.png');
    background-position: center;
    background-repeat: no-repeat;
    background-position-y: 0px;
    background-position-x: 160px;
    background-size: 80%;
}
.white-card:hover{
    background-size: 85%;
    background-position-x: 140px;
    background-position-y: 5px;
}
.second-section{
    background-image: linear-gradient(to bottom right, #fefefe, white);
}
</style>