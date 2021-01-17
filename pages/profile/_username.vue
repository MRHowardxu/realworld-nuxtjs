<template>
  <div class="profile-page">

  <div class="user-info">
    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <img :src="profile.image" class="user-img" />
          <h4>{{ profile.username }}</h4>
          <p>
            {{ profile.bio}}
          </p>
          <button class="btn btn-sm btn-outline-secondary action-btn">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{ profile.username }}
          </button>
        </div>

      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">

      <div class="col-xs-12 col-md-10 offset-md-1">
        <div class="articles-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <a class="nav-link active" href="">My Articles</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Favorited Articles</a>
            </li>
          </ul>
        </div>
<div
          class="article-preview"
          v-for="article in articles"
          :key="article.slug"
        >
          <div class="article-meta">
            <nuxt-link :to="{
              name: 'profile-username',
              params: {
                username: article.author.username
              }
            }">
              <img :src="article.author.image"/>
              </nuxt-link>
            <div class="info">
              <nuxt-link :to="{
                name: 'profile-username',
                params: {
                  username: article.author.username
                }
              }" class="author">
                {{ article.author.username }}
              </nuxt-link>
              <span class="date">{{ article.author.createdAt | date('MMM DD, YYYY') }}</span>
            </div>
            <button
              class="btn btn-outline-primary btn-sm pull-xs-right"
              :class="{
                active: article.favorited
              }"
              @click="onFavorite(article)"
              :disabled="article.favoriteDisabled"
            >
              <i class="ion-heart"></i> {{ article.favoritesCount || 0 }}
            </button>
          </div>
          <nuxt-link :to="{
              name: 'article-slug',
              params: {
                slug: article.slug
              }
            }" class="preview-link">
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
            <span>Read more...</span>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>

</div>

</template>

<script>
import { getProfile } from '@/api/profile'
import { getArticles } from '@/api/article'
export default {
  middleware: 'authenticated',
  name: 'profileName',
  data() {
    return {
      profile: {},
      articles: []
    }
  },
  async asyncData({ params, store }){
    try {
      const { data } = await getProfile(params.username)
      console.log('%c⧭', 'color: #f200e2', data)
      return {
        profile: data.profile
      }
    } catch (error) {
      console.log('%c⧭', 'color: #731d1d', error)
    }
  },
  methods: {
    async loadArtiles(body){
      try {
        const { data } = await getArticles(body)
        console.log('%c articles', 'color: #000', data)
        this.articles = data.articles
      } catch (error) {
        console.log('%c⧭', 'color: #731d1d', error)
      }
    }
  },
  mounted(){
    const body = {
      author: this.$route.params.username,
      limit: 5,
      offset: 0
    }
    this.loadArtiles(body)
  }
}
</script>

<style>

</style>