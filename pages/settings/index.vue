<template>
  <div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>

        <form>
          <fieldset>
              <fieldset class="form-group">
                <input v-model="user.image" class="form-control" type="text" placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="user.bio" class="form-control form-control-lg" rows="8" placeholder="Short bio about you">
                  
                </textarea>
              </fieldset>
              <fieldset class="form-group">
                <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password">
              </fieldset>
              <button type="button" class="btn btn-lg btn-primary pull-xs-right" @click="onUpdate">
                Update Settings
              </button>
          </fieldset>
        </form>
        <hr />
        <button type="button" class="btn btn-outline-danger" @click="onLogout">
          Or click here to logout.
        </button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { updateUser } from '@/api/user'
import { mapState } from 'vuex'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
    name: 'SettingsPage',
    computed: {
      ...mapState(['user']),
    },
    methods: {
      onLogout(){
      console.log('logout')
      this.$store.commit('setUser', {})
      // 用户数据持久化
      Cookie.set('user', null)
      // 跳转到首页
      this.$router.push('/')
    },
    async onUpdate(){
        try {
          const { data } = await updateUser({ user: this.user })
          if(data){
            this.$store.commit('setUser', data.user)
            // 用户数据持久化
            Cookie.set('user', data.user)
            // 跳转到首页
            this.$router.replace(`/profile/${data.user.username}`)
          }
        } catch (error) {
          console.log('%c⧭', 'color: #00b300', error)
          
        }
      }
    },
    
}
</script>

<style>

</style>