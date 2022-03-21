<template>
    <div class="main-container bg-purple-dark text-main py-4">
        <div class="ml-4 fs-28 fw-600">LOGUWA</div>
        <nav>
            <ul class="navigation__list mt-4 fs-16">
                <router-link :to="'/app/dashboard'" active-link="active"><li class="navigation__element"><fa class="fa-style" icon="tachometer-alt"/>Dashboard</li></router-link>
                <router-link :to="'/app/store'"><li class="navigation__element"><fa class="fa-style" icon="store"/>Store</li></router-link>
                <router-link :to="'/app/products'"><li class="navigation__element"><fa class="fa-style" icon="tshirt"/>Products</li></router-link>
                <router-link :to="'/app/orders'"><li class="navigation__element"><fa class="fa-style" icon="box-open"/>Orders</li></router-link>
                <router-link :to="'/app/users'"><li class="navigation__element"><fa class="fa-style" icon="users"/>Users</li></router-link>
            </ul>
            <ul class="navigation__list fs-16">
                <div class="section-header mb-2 fw-500 fs-14 text-main">STORE TOOLS</div>
                <router-link :to="'/app/creator'"><li class="navigation__element"><fa class="fa-style" icon="fill-drip"/>Design editor</li></router-link>
                <li class="navigation__element"><fa class="fa-style" icon="th"/>Section editor</li>
                <li class="navigation__element"><fa class="fa-style" icon="stream"/>Menu builder</li>
                <li class="navigation__element"><fa class="fa-style" icon="toggle-on"/>General settings</li>
            </ul>
            <ul class="navigation__list fs-16">
                <div class="section-header mb-3 fw-500 fs-14 text-main">MASTER ADMIN PANEL</div>
                <li class="navigation__element"><fa class="fa-style" icon="database"/>Database</li>
                <li class="navigation__element"><fa class="fa-style" icon="key"/>Permissions</li>
                <li class="navigation__element"><fa class="fa-style" icon="tools"/>App settings</li>
            </ul>
        </nav>
    </div>
</template>
<style scoped>
.main-container{
    height: 200vh;
    overflow-y: scroll;
}
.navigation__element{
    font-weight: 500;
    padding: 20px 23px;
    margin: 0 8px;
    height: 100%;
    display: flex;
    align-items: center;
    transition: .2s ease;
    cursor: pointer;
    opacity: .85;
}
.navigation__element:hover{
    color: white;
    opacity: 1;
    background-color: #171049;
}
.fa-style{
    font-size: 24px;
    margin-right: 15px;
}
.section-header{
    margin-top:40px;
    margin-left: 28px;
    opacity: .85;
}

</style>
