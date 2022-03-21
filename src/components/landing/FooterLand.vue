<template>
    <footer class="footer-box">
        <div class="container d-flex flex-wrap">
            <div class="col-12 col-lg-3 text-center text-lg-left">
                <div style="margin-bottom: 12px;" class="fs-24 fw-500">
                    JAKIES_JEBANE_LOGO
                </div>
                <p style="line-height: 24px;" class="fs-14">description 3D design and technology platform that crates high-quality branding and markeitn</p>
            </div>
            <div class="col-md-4 col-lg-2 mt-2 mt-lg-0 text-center text-lg-left">
                <div class="fs-15 fw-500">STUDIO</div>
                <ul class="fs-14">
                    <li>MESH</li>
                    <li>THINGS</li>
                    <li>QLO</li>
                </ul>
            </div>
            <div class="col-md-4 col-lg-2 mt-2 mt-lg-0 text-center text-lg-left">
                <div class="fs-15 fw-500">RESOURCES</div>
                <ul class="fs-14">
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Collections</li>
                    <li>What's new</li>
                    <li>Device mockups</li>
                    <li>Dashboard</li>
                </ul>
            </div>
            <div class="col-md-4 col-lg-2 mt-2 mt-lg-0 text-center text-lg-left">
                <div class="fs-15 fw-500">INFORIATMION</div>
                <ul class="fs-14">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>License</li>
                    <li>About Brand</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div class="fs-18 fw-500 col-12 col-lg-3 d-flex justify-content-center mt-5 mt-lg-0">
                <fa class="fa-style facebook" :icon="[ 'fab', 'facebook' ]" />
                <fa class="fa-style youtube" :icon="[ 'fab', 'youtube' ]" />
                <fa class="fa-style tiktok" :icon="[ 'fab', 'tiktok' ]" />
                <fa class="fa-style instagram" :icon="[ 'fab', 'instagram' ]" />
            </div>
            <div style="height: 1px; width:100%; background-color: #b3b3b3; margin:35px 0;"></div>
            <div class="fs-12">© Copyright {{currentYear}} Morflax. All Rights Reserved.</div>
        </div>
    </footer>
</template>
<script>
export default{
    computed: {
        currentYear(){
            return new Date().getFullYear();
        }
    }
}

</script>

<style scoped>
    .footer-box{
        width: 100%;
        padding: 40px 0;
        background-color: black;
        color: #e3e3e3;
    }
    .fa-style{
        margin: 0 10px;
        transition: .1s ease-in;
        cursor: pointer;
    }
    .logo-resizer{
        max-width: 200px;
    }
    @media screen and (max-width:991px) {
        .logo-resizer{
            max-width: 350px;
        }
    }
    li{
        margin: 9px 0;
    }
</style>