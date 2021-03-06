import { request } from '@/plugins/request';

export const getArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}
// getFeedArticles
export const getFeedArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        params
    })
}

export const addFavorite = slug => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`,
    })
}

export const deleteFavorite = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`,
    })
}
// 获取文章详情
export const getArticle = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`
    })
}

export const getComments = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`
    })
}

export const addArticle = data => {
    return request({
        method: 'POST',
        url: '/api/articles',
        data
    })
}

export const updateArticle = (slug, data) => {
    return request({
        method: 'PUT',
        url: `/api/articles/${slug}`,
        data
    })
}

export const addComments = (slug, data) => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/comments`,
        data
    })
}
export const getTags = params => {
    return request({
        method: 'GET',
        url: '/api/tags',
        params
    })
}