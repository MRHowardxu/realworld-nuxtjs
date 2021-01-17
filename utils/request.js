/**
 * 基于axios封装的请求模块 
 */
 import axios from 'axios'
 const apiHost = 'https://conduit.productionready.io'
 const request = axios.create({
    baseURL: apiHost
 })
 export default request