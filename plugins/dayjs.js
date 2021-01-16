import Vue from 'vue'
import dayjs from 'dayjs'
Vue.filter('date', (value, formate = 'YYYY-MM-DD') => {
    return dayjs(value).format(formate)
})