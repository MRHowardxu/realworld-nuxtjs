<template>
  <div class="article-meta">
        <nuxt-link :to="{
            name: 'profile-username',
            params: {
              username: article.author.username
            }
          }"><img :src="article.author.image" /></nuxt-link>
        <div class="info">
          <nuxt-link :to="{
            name: 'profile-username',
            params: {
              username: article.author.username
            }
          }"
          class="author"
          >{{ article.author.username }}</nuxt-link>
          <span class="date">{{ article.createdAt | date('MMM DD, YYYY')}}</span>
        </div>
        <template v-if="article.author.username == user.username">
          <nuxt-link class="btn btn-outline-secondary btn-sm"
            :to="{
                name: 'editor-slug',
                params: {
                  slug: article.slug
                }
              }"
          >
            <i class="ion-edit"></i> Edit Article
          </nuxt-link>

          <button class="btn btn-outline-danger btn-sm" @click="deleteArticle">
            <i class="ion-trash-a"></i> Delete Article
          </button>
        </template>
        <template v-else>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow Eric Simons <span class="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button
            class="btn btn-sm btn-outline-primary"
            :class="{
              active: article.favorited
            }"
          >
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post <span class="counter">(29)</span>
          </button>
        </template>
      </div>

</template>

<script>
export default {
    name: 'ArticleMeta',
    props: {
      article: {
        type: Object,
        require: true
      },
      user: {
        type: Object
      }
    },
    methods: {
      async deleteArticle(){
        console.log('deleteArticle')
      }
    }
}
</script>

<style>

</style>