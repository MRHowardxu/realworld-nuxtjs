import request from '@/utils/request'

export function login(data){
    return request({
        method: 'POST',
        url: '/api/users/login',
        data: data
    })
}

export function register(data){
    return request({
        method: 'POST',
        url: '/api/users',
        data: data
    })
}
export function updateUser(data){
    return request({
        method: 'PUT',
        url: '/api/user',
        data: data
    })  
}