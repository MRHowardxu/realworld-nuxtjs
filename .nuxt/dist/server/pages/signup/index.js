exports.ids = [11];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/**
 * 基于axios封装的请求模块 
 */

const apiHost = 'https://conduit.productionready.io';
const request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: apiHost
}); //  请求拦截器
//  永不消逝的电波

request.interceptors.request.use(function (config) {
  console.log('123');
  config.headers.Authorization = `Token `;
  return config;
}, function (error) {});
/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/signup/index.vue?vue&type=template&id=3677f254&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">Sign up</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\"><li>That email is already taken</li></ul> <form><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button type=\"button\" class=\"btn btn-lg btn-primary pull-xs-right\">\n            Sign up\n          </button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/signup/index.vue?vue&type=template&id=3677f254&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signup/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var signupvue_type_script_lang_js_ = ({
  name: 'SignupIndex',

  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      }
    };
  },

  methods: {
    async submit() {
      console.log('submit');
      const {
        data
      } = await Object(request["a" /* default */])({
        method: 'POST',
        url: '/api/users',
        data: {
          user: this.user
        }
      });
      console.log('%c⧭', 'color: #ff0000', data);

      if (data) {
        this.$router.replace('/');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/signup/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_signupvue_type_script_lang_js_ = (signupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/signup/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_signupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2faf44bf"
  
)

/* harmony default export */ var signup = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map