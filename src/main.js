import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/global.css'
import './assets/grid.min.css'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Store from './store/store'
library.add(fas, fab);
createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(VueAxios, axios)
    .use(Store)
    .use(router).mount('#app')

