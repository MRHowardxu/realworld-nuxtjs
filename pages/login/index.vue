<template>
  <div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Login</h1>
        <p class="text-xs-center">
          <nuxt-link to="/signup">Create an account?</nuxt-link>
        </p>

        <ul class="error-messages">
          <template v-for="(messages, filed) in errors">
            <li v-for="(message, index) in messages" :key="index">
              {{ filed }} {{ message }}
            </li>
          </template>
        </ul>

        <form>
          <fieldset class="form-group">
            <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email">
          </fieldset>
          <fieldset class="form-group">
            <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password">
          </fieldset>
          <button :disabled="pending" type="button" class="btn btn-lg btn-primary pull-xs-right" @click="submit">
            Login
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import request from '@/utils/request'
import { login, updateUser } from '@/api/user'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
    middleware: 'noAuthenticated',
    name: 'LoginIndex',
    data(){
      return {
        pending: false,
        user: {
          email: '',
          password: ''
        },
        errors:{}
      }
    },
    methods: {
      async submit(){
        this.pending = true
        console.log('submit')
        try {
          const { data } = await login({ user: this.user })
          console.log('%c⧭', 'color: #ff0000', data)
          if(data){
            // 保存用户的登录状态
            this.$store.commit('setUser', data.user)
            // 用户数据持久化
            Cookie.set('user', data.user)
            // 跳转到首页
            this.$router.replace('/')
          }
        } catch (err) {
          console.log('%c⧭', 'color: #00e600', err)
          this.errors = err.response.data.errors
          
        }
        this.pending = false
      },
      async resetPassword(){
        console.log('resetPassword')
        const { data } = await updateUser(this.user)
        if(data){
          this.$router.replace('/')
        }
      }
    }

}
</script>

<style>

</style>