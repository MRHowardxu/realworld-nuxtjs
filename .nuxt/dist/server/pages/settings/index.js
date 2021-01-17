exports.ids = [11];
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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=768b3e3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-6 offset-md-3 col-xs-12\"><h1 class=\"text-xs-center\">Your Settings</h1> <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.user.image)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\">"+_vm._ssrEscape(_vm._s(_vm.user.bio))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button type=\"button\" class=\"btn btn-lg btn-primary pull-xs-right\">\n                Update Settings\n              </button></fieldset></form> <hr> <button type=\"button\" class=\"btn btn-outline-danger\">\n          Or click here to logout.\n        </button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=768b3e3e&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(30);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
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


const Cookie =  false ? undefined : undefined;
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  name: 'SettingsPage',
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    onLogout() {
      console.log('logout');
      this.$store.commit('setUser', {}); // 用户数据持久化

      Cookie.set('user', null); // 跳转到首页

      this.$router.push('/');
    },

    async onUpdate() {
      try {
        const {
          data
        } = await Object(user["b" /* updateUser */])({
          user: this.user
        });

        if (data) {
          this.$store.commit('setUser', data.user); // 用户数据持久化

          Cookie.set('user', data.user); // 跳转到首页

          this.$router.replace(`/profile/${data.user.username}`);
        }
      } catch (error) {
        console.log('%c⧭', 'color: #00b300', error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "043e0b0a"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map