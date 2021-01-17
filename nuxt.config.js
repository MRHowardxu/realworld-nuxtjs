module.exports = {
    router: {
        linkActiveClass: 'active'
    },
    server: {
        host: '0.0.0.0',
        port: 3000
    },
    plugins: [
        '~/plugins/request.js',
        '~/plugins/dayjs.js'
    ]
}