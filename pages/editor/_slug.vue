<template>
  <div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form>
          <fieldset>
            <fieldset class="form-group">
                <input v-model="article.title" type="text" class="form-control form-control-lg" placeholder="Article Title">
            </fieldset>
            <fieldset class="form-group">
                <input v-model="article.description" type="text" class="form-control" placeholder="What's this article about?">
            </fieldset>
            <fieldset class="form-group">
                <textarea v-model="article.body" class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input v-model="article.tagText" type="text" class="form-control" placeholder="Enter tags"><div class="tag-list"></div>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="onPublish">
                Publish Article
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { getArticle, updateArticle } from '@/api/article'
import MarkdownIt from 'markdown-it'

export default {
  middleware: 'authenticated',
  name: 'articleCreate',
  data(){
    return {
      article: {
        'title': '',
        'body': '',
        'description': '',
        'tagList': [],
        'tagText': ''
      }
    }
  },
  async asyncData({ params }){
    const { data } = await getArticle(params.slug)
    console.log('%c⧭', 'color: #d90000', data)
    const md = new MarkdownIt()
    const { article } = data
    article.tagText = article.tagList.join(' ')
    // article.body = md.render(article.body)
    return {
      article
    }
  },
  methods: {
    async onPublish(){
      try {
        this.article.tagList = this.article.tagText.split(' ')
        const { data } = await updateArticle(this.article.slug, {article: this.article})
        console.log('%c⧭', 'color: #f200e2', data)
        this.$router.push(`/article/${data.article.slug}`)
      } catch (error) {
        console.log('%c⧭', 'color: #731d1d', error)
      }
    }
  }
}
</script>

<style>

</style>