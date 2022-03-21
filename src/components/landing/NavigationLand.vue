<template>
    <nav style="align-items:center; background-color:white; padding:10px 0;" class="nav-box">
        <div class="container d-flex justify-content-between h-100">
            <div class="d-flex h-100" style="align-items:center;">
                <div class="fs-24 fw-600">Loguwa</div>
                <ul class="d-flex">
                    <li class="nav_element">Studio</li>
                    <li class="nav_element">Resources</li>
                    <li class="nav_element">Pricing</li>
                </ul>
            </div>
            <div class="d-flex" style="align-items:center;">
                <button class="button-landing secondary-btn">Sign in</button>
                <button class="button-landing">Get started</button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
   
}
</script>
<style scoped>
    .nav-box{
        position: relative;
        z-index: 5;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 1px 0px, rgba(60, 64, 67, 0.15) 2px 2px 6px 1px;    
    }
    .logo-resizer{
        max-width: 250px;
        margin-right: 20px;
    }
    .nav_element{
        margin: 0 20px;
    }
</style>
