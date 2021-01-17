exports.ids = [7];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getFeedArticles; });
/* unused harmony export addFavorite */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getTags; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // getFeedArticles

const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
};
const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};
const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};
const addArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
};
const updateArticle = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data
  });
};
const addComments = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  });
};
const getTags = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/tags',
    params
  });
};

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("7725bf04", content, true, context)
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b455fde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b455fde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b455fde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b455fde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b455fde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page-md[data-v-3b455fde]{margin-right:4px;margin-bottom:4px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=3b455fde&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-3b455fde><div class=\"container\" data-v-3b455fde><h1 class=\"logo-font\" data-v-3b455fde>conduit</h1> <p data-v-3b455fde>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-3b455fde>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-3b455fde>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-3b455fde>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-3b455fde>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-3b455fde>","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\" data-v-3b455fde>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'your_feed'
                },attrs:{"exact":"","to":{
                path: '/',
                query: {
                  tab: 'your_feed'
                }
              }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-3b455fde>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'global_feed'
                },attrs:{"exact":"","to":{
                path: '/',
                query: {
                  tab: 'global_feed'
                }
              }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "+((_vm.$route.query.tag)?("<li class=\"nav-item\" data-v-3b455fde><a href class=\"nav-link active\" data-v-3b455fde>"+_vm._ssrEscape("# "+_vm._s(_vm.$route.query.tag))+"</a></li>"):"<!---->"))],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-3b455fde>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-3b455fde>","</div>",[_c('nuxt-link',{attrs:{"to":{
              name: 'profile-username',
              params: {
                username: article.author.username
              }
            }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-3b455fde>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                name: 'profile-username',
                params: {
                  username: article.author.username
                }
              }}},[_vm._v("\n                "+_vm._s(article.author.username)+"\n              ")]),_vm._ssrNode(" <span class=\"date\" data-v-3b455fde>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.author.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                active: article.favorited
              }))+" data-v-3b455fde><i class=\"ion-heart\" data-v-3b455fde></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount || 0)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article-slug',
              params: {
                slug: article.slug
              }
            }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-3b455fde>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-3b455fde>","</ul>",_vm._l((_vm.totalPage),function(key){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{active: key == _vm.page}))+" data-v-3b455fde>","</li>",[_c('nuxt-link',{staticClass:"page-link page-md",attrs:{"to":{ path: '/', query: { page: key, tag: _vm.$route.query.tag }}}},[_vm._v(_vm._s(key))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-3b455fde>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-3b455fde>","</div>",[_vm._ssrNode("<p data-v-3b455fde>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-3b455fde>","</div>",_vm._l((_vm.tags),function(tag){return _c('nuxt-link',{key:tag,staticClass:"tag-pill tag-default",attrs:{"exact":"","to":{
                path: '/',
                query: {
                  tab: 'tag',
                  tag: tag,
                  page: 1
                }
              }}},[_vm._v("\n              "+_vm._s(tag)+"\n            ")])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=3b455fde&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'HomePage',

  data() {
    return {
      articles: [],
      articlesCount: 0
    };
  },

  async asyncData({
    query,
    store
  }) {
    const page = Number(query.page || 1);
    const limit = 10;
    const {
      tab = 'global_feed'
    } = query;
    const loadArticles = tab === 'your_feed' && store.state.user ? api_article["g" /* getFeedArticles */] : api_article["e" /* getArticles */];
    const [articleRes, tagRes] = await Promise.all([loadArticles({
      limit,
      offset: (page - 1) * limit
    }), Object(api_article["h" /* getTags */])()]);
    const {
      data
    } = articleRes;
    const {
      data: {
        tags
      }
    } = tagRes;
    return {
      articles: data.articles.map(item => {
        item.favoriteDisabled = false;
        return item;
      }),
      articlesCount: data.articlesCount,
      limit,
      page,
      tags: tags.filter(t => !/\u200c/.test(t)),
      tab
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  watchQuery: ['page', 'tag', 'tab'],
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true;

      if (article.favorited) {
        await Object(api_article["c" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        await Object(api_article["c" /* deleteFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3b455fde",
  "50613d5e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map