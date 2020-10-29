import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import request from '@/common/js/axios';
import Cookie from 'js-cookie';
import store from '@/store/index';
Vue.prototype.$http = request;
Vue.prototype.Cookie = Cookie;
Vue.config.productionTip = false
Vue.use(ElementUI)


// 使用钩子函数对权限设置跳转
// 必须在new Vue前面
router.beforeEach((to, from, next)=>{
    const token = Cookie.get('mz_token');
    if (!token && ['/order' , '/shopCar'].indexOf(to.path) != -1 ){
        next('/login');
    }else if (false){
        next('403');
    }else {
        next();
    }
})
let vue = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

export default vue;