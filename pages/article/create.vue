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
import { addArticle, updateArticle } from '@/api/article'
export default {
  middleware: 'authenticated',
  name: 'articleCreate',
  data(){
    return {
      article: {
        'title': '平凡之路',
        'body':`我曾经跨过山和大海
也穿过人山人海
我曾经拥有着的一切
转眼都飘散如烟
我曾经失落失望失掉所有方向
直到看见平凡才是唯一的答案`,
        'description': '你要去哪 Via Via',
        'tagList': ['歌词'],
        'tagText': '歌词'
      }
    }
  },
  methods: {
    async onPublish(){
      console.log('%c⧭', 'color: #807160', 'onPublish')
      try {
        const { data } = await addArticle(this.article)
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