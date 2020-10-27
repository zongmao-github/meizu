import {apiUrl} from '@/common/js/common'
import vue from '@/main'
import axios from 'axios'
import Cookie from 'js-cookie'
import { debounce } from '@/common/js/debounce';
import {Message} from 'element-ui';
import el from "element-ui/src/locale/lang/el";

axios.defaults.baseURL = apiUrl;
axios.defaults.timeout = 15 *  1000;
axios.defaults.headers['Content-type'] = 'application/json';
axios.defaults.headers['token'] = Cookie.get('mz_token');

//防止重复提交
let peddingArr = [];
let CancelToken = axios.CancelToken;

let peddingHandler = (flag, cancelFn)=>{
    if (peddingArr.indexOf(flag) > -1){
        if (cancelFn){
            cancelFn();
        }else {
            peddingArr.splice(peddingArr.indexOf(flag), 1);
        }
    }else{
        if (cancelFn){
            peddingArr.push(flag);
        }
    }
}

//添加请求拦截器
axios.interceptors.request.use(function (config){
    if (vue.$route.path !== '/login' && !Cookie.get('mz_token')){
        vue.$router.push('/login');
    }

    config.cancelToken = new CancelToken(cancelFn => {
        peddingHandler(config.url + '&' + config.method, cancelFn);
    });

    return config;
},function (error){
    return Promise.reject(error);
})

//添加响应拦截器
axios.interceptors.response.use(res =>{
    peddingHandler(res.config.url + '&' + res.config.method);
    const data = res.data;
    return data;
},error => {
    peddingArr = [];
    return Promise.reject(error);
})

//输出方法
export default function request(url, data = {}, method = 'POST', type){
    return new Promise((resolve, reject) => {
        const options = {
            url,
            method,
        }
        if (method.toLowerCase() === 'get'){
            options.params = data;
        }else {
            options.data = data;
        }
        if (type){
            options.responseType = 'blob';
        }

        return debounce(axios(options).then(res=>{
            if (res.data.status === -2){
                if (Cookie.get('mz_token')){
                    Message.closeAll();
                    Message({
                        showClose: true,
                        type: 'error',
                        message: '登录失效，请重新登录'
                    })
                    vue.$router.push('/login');
                }
            }else{
                resolve(res);
            }
        }).catch(error=>{
            if(JSON.stringify(error).includes('401')){
                Message.closeAll();
                Message({
                    showClose: true,
                    type: 'error',
                    message: '登录失效，请重新登录'
                })
                vue.$router.push('/login');
            }else if(axios.isCancel(error)){
                //重复调用接口取消
            }else {
                Message.closeAll();
                Message({
                    showClose: true,
                    type: 'error',
                    message: '接口错误'
                })
            }
            reject();
        }), 500, true)
    })
}

