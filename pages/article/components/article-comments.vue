<template>
  <div>
      <form class="card comment-form">
          <div class="card-block">
            <textarea v-model="body" class="form-control" placeholder="Write a comment" rows="3"></textarea>
          </div>
          <div class="card-footer">
            <img :src="user.image" class="comment-author-img" />
            <button class="btn btn-sm btn-primary" @click="onPostComment" :disabled="pending">
             Post Comment
            </button>
          </div>
        </form>
        
        <div
            class="card"
            v-for="comment in comments"
            :key="comment.id"
        >
          <div class="card-block">
            <p class="card-text">{{ comment.body }}</p>
          </div>
          <div class="card-footer">
            <nuxt-link :to="{
                name: 'profile',
                params: {
                    username: comment.author.username
                }
            }" class="comment-author">
              <img :src="comment.author.image" class="comment-author-img" />
              
            </nuxt-link>
            <nuxt-link :to="{
                name: 'profile',
                params: {
                    username: comment.author.username
                }
            }" class="comment-author">
              {{ comment.author.username }}
            </nuxt-link>
            &nbsp;
            <span class="date-posted">{{ comment.createdAt | date('MMM DD, YYYY')}}</span>
          </div>
        </div>

        <!-- <div class="card">
          <div class="card-block">
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <a href="" class="comment-author">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            </a>
            &nbsp;
            <a href="" class="comment-author">Jacob Schmidt</a>
            <span class="date-posted">Dec 29th</span>
            <span class="mod-options">
              <i class="ion-edit"></i>
              <i class="ion-trash-a"></i>
            </span>
          </div>
        </div> -->
  </div>
</template>

<script>
import { getComments, addComments } from '@/api/article'
export default {
    name: 'ArticleComments',
    props: {
        article: {
            type: Object,
            required: true
        },
        user: {
          type: Object
        }
    },
    data(){
        return {
            comments: [],
            body: '',
            pending: false
        }
    },
    methods: {
      async onPostComment(){
        this.pending = true
        try {
          const { data } = await addComments(this.article.slug, { comment: { body }})
          console.log('%c⧭', 'color: #007300', data)
          this.comments.push(data.comment)
        } catch (error) {
          
        }
        this.pending = false
      },
      async loadComments(){
        console.log('this.article: ', this.article)
        const { data } = await getComments(this.article.slug)
        this.comments = data.comments

      }
    },
    mounted(){
      this.loadComments()
    }
}
</script>

<style>

</style>