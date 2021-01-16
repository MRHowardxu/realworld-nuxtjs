<template>
<div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item" v-if="user">
              <nuxt-link class="nav-link"
                :class="{
                  active: tab === 'your_feed'
                }"
                exact
                :to="{
                path: '/',
                query: {
                  tab: 'your_feed'
                }
              }">Your Feed</nuxt-link>
            </li>
            <li class="nav-item" >
              <nuxt-link class="nav-link"
                :class="{
                  active: tab === 'global_feed'
                }"
                exact
                :to="{
                path: '/',
                query: {
                  tab: 'global_feed'
                }
              }">Global Feed</nuxt-link>
            </li>
             
            <template v-if="$route.query.tag">
              <li class="nav-item">
                <a class="nav-link active" href=""># {{$route.query.tag}}</a>
              </li>
            </template>
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
        <nav>
          <ul class="pagination">
            <li class="page-item" :class="{active: key == page}" v-for="key in totalPage" :key="key">
              <nuxt-link class="page-link page-md" :to="{ path: '/', query: { page: key, tag: $route.query.tag }}">{{ key }}</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <nuxt-link
              v-for="tag in tags" :key="tag"
              exact
              :to="{
                path: '/',
                query: {
                  tab: 'tag',
                  tag: tag,
                  page: 1
                }
              }"
              class="tag-pill tag-default"
            >
              {{ tag }}
            </nuxt-link>
            <!-- <a href="" class="tag-pill tag-default">javascript</a>
            <a href="" class="tag-pill tag-default">emberjs</a>
            <a href="" class="tag-pill tag-default">angularjs</a>
            <a href="" class="tag-pill tag-default">react</a>
            <a href="" class="tag-pill tag-default">mean</a>
            <a href="" class="tag-pill tag-default">node</a>
            <a href="" class="tag-pill tag-default">rails</a> -->
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>
<style scoped>
  .page-md{
    margin-right: 4px;
    margin-bottom: 4px;
  }
</style>
<script>
import { getFeedArticles, getArticles, addFavorite, deleteFavorite, getTags } from '@/api/article'
import { mapState } from 'vuex'
export default {
    name: 'HomePage',
    data(){
      return {
        articles: [],
        articlesCount: 0
      }
    },
    async asyncData({ query, store }){
      const page = Number(query.page || 1)
      const limit = 10
      const { tab='global_feed' } = query
      const loadArticles = tab === 'your_feed' && store.state.user ? getFeedArticles : getArticles
      const [ articleRes, tagRes ] = await Promise.all([
          loadArticles({
          limit,
          offset: (page - 1)* limit
        }),
        getTags()
      ])
      const { data } = articleRes
      const { data: { tags }} = tagRes
      return {
        articles: data.articles.map(item => {item.favoriteDisabled = false; return item }),
        articlesCount: data.articlesCount,
        limit,
        page,
        tags: tags.filter(t => !/\u200c/.test(t)),
        tab
      }
    },
    computed: {
      ...mapState(['user']),
      totalPage(){
        return Math.ceil(this.articlesCount / this.limit)
      }
    },
    watchQuery: ['page','tag', 'tab'],
    methods: {
      async onFavorite(article){
        article.favoriteDisabled = true
        if(article.favorited){
          await deleteFavorite(article.slug)
          article.favorited = false
          article.favoritesCount += -1
        }else{
          await deleteFavorite(article.slug)
          article.favorited = true
          article.favoritesCount += 1
        }
        article.favoriteDisabled = false
      }
    }
}
</script>

<style>

</style>