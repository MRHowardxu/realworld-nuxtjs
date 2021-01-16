/**
 * 基于axios封装的请求模块 
 */
 import axios from 'axios'
 const apiHost = 'https://conduit.productionready.io'
 const request = axios.create({
    baseURL: apiHost
 })

//  请求拦截器
//  永不消逝的电波
 request.interceptors.request.use(function(config){
     console.log('123');
     config.headers.Authorization = `Token `
     return config;
 }, function(error){

 })
 export default request