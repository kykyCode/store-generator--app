import AppMain from '../../views/app/AppMain'
import AppDashboard from '../../views/app/dashboard/AppDashboard'
import AppStore from '../../views/app/store/AppStore'
import AppUsers from '../../views/app/users/AppUsers'
import AppOrders from '../../views/app/orders/AppOrders'
import AppProducts from '../../views/app/products/AppProducts'
import AppCreator from '../../views/app/creator/CreatorView'
import AppAdminEdit from '../../views/app/users/AppAdminEdit'
import store from '../../store/store'



const dashboard = {
    path: '/app',
    name: 'Dashboard',
    component: AppMain,
    
    beforeEnter: (to, from, next) => {
        if(!store.getters['activeUser'].first_name){
            return next({
                path:'/login'
            })
        }else{
            next()
        }
    },
    children: [
        {
            path: "dashboard",
            name: "dashboard",
            component: AppDashboard
        },
        {
            path: "store",
            name: "store",
            component: AppStore
        },
        {
            path: "products",
            name: "products",
            component: AppProducts
        },
        {
            path: "orders",
            name: "orders",
            component: AppOrders
        },
        {
            path: "users",
            name: "users",
            component: AppUsers
        },
        {
            path: "users/admin",
            name: "admin",
            component: AppAdminEdit
        },
        {
            path: "creator",
            name: "creator",
            component: AppCreator
        }
    ]
    
};
export default dashboard;