exports.ids = [9];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/**
 * 基于axios封装的请求模块 
 */

const apiHost = 'https://conduit.productionready.io';
const request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: apiHost
});
/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* unused harmony export register */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateUser; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


function login(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'POST',
    url: '/api/users/login',
    data: data
  });
}
function register(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    method: 'POST',
    url: '/api/users',
    data: data
  });
}
function updateUser(data) {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_1__[/* request */ "b"]({
    method: 'PUT',
    url: '/api/user',
    data: data
  });
}

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=370b8863&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">Login</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[_c('nuxt-link',{attrs:{"to":"/signup"}},[_vm._v("Create an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(messages,filed){return ((_vm._ssrList((messages),function(message,index){return ("<li>"+_vm._ssrEscape("\n              "+_vm._s(filed)+" "+_vm._s(message)+"\n            ")+"</li>")})))}))+"</ul> <form><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button type=\"button\" class=\"btn btn-lg btn-primary pull-xs-right\">\n            Login\n          </button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=370b8863&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(29);

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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


const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'noAuthenticated',
  name: 'LoginIndex',

  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      errors: {}
    };
  },

  methods: {
    async submit() {
      console.log('submit');

      try {
        const {
          data
        } = await Object(user["a" /* login */])({
          user: this.user
        });
        console.log('%c⧭', 'color: #ff0000', data);

        if (data) {
          // 保存用户的登录状态
          this.$store.commit('setUser', data.user); // 用户数据持久化

          Cookie.set('user', data.user); // 跳转到首页

          this.$router.replace('/');
        }
      } catch (err) {
        console.log('%c⧭', 'color: #00e600', err);
        this.errors = err.response.data.errors;
      }
    },

    async resetPassword() {
      console.log('resetPassword');
      const {
        data
      } = Object(user["b" /* updateUser */])(this.user);

      if (data) {
        this.$router.replace('/');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "28e67b38"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map