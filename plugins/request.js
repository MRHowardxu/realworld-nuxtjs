/**
 * 基于axios封装的请求模块 
 */
import axios from 'axios'
const apiHost = 'https://conduit.productionready.io'
const request = axios.create({
   baseURL: apiHost
})
export default function plugin({ store }) {
    //  请求拦截器
    request.interceptors.request.use(function(config){
        console.log('123');
        const { user } = store.state
        if(user && user.token){
            config.headers.Authorization = `Token ${user.token}`

        }
        return config;
    }, function(error){
        console.error(error)
    })
}
export { request }