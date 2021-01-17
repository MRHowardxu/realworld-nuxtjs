exports.ids = [3];
exports.modules = {

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=73225631&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
          name: 'profile-username',
          params: {
            username: _vm.article.author.username
          }
        }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
          name: 'profile-username',
          params: {
            username: _vm.article.author.username
          }
        }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" "),(_vm.article.author.username == _vm.user.username)?[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{
              name: 'editor-slug',
              params: {
                slug: _vm.article.slug
              }
            }}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n        ")]),_vm._ssrNode(" <button class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> Delete Article\n        </button>")]:_vm._ssrNode("<button class=\"btn btn-sm btn-outline-secondary\"><i class=\"ion-plus-round\"></i>\n           \n          Follow Eric Simons <span class=\"counter\">(10)</span></button>\n          \n        <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
            active: _vm.article.favorited
          }))+"><i class=\"ion-heart\"></i>\n           \n          Favorite Post <span class=\"counter\">(29)</span></button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=73225631&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
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
    async deleteArticle() {
      console.log('deleteArticle');
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "10378348"
  
)

/* harmony default export */ var article_meta = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=article-meta.js.map