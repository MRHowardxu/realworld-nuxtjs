<template>
    <div>
        <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link" to="/" exact="">Home</nuxt-link>
          </li>
          
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/article/create">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{
                name: 'profile-username',
                params: {
                  username: user.username
                }
              }">
                <img class="user-pic" :src="user.image" />
                {{ user.username }}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/signup">Sign Up</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <nuxt-child/>
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
        <a style="margin-left: 12px;color: #5cb85c;">
          
          Thanks Mylove <i class="ion-heart" style="color: red"></i> Oona ©˙∆∆˙©
        </a>
      </div>
    </footer>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'LayoutDefault',
    computed: {
      ...mapState(['user'])
    }

}
</script>

<style>

</style>