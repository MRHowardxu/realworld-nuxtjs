import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _26dde350 = () => interopDefault(import('../pages/article/index.vue' /* webpackChunkName: "pages/article/index" */))
const _25b38b1e = () => interopDefault(import('../pages/layout/index.vue' /* webpackChunkName: "pages/layout/index" */))
const _4000c2cb = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _7f6d3697 = () => interopDefault(import('../pages/settings/index.vue' /* webpackChunkName: "pages/settings/index" */))
const _084420e8 = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _6575f134 = () => interopDefault(import('../pages/article/create.vue' /* webpackChunkName: "pages/article/create" */))
const _0124a66c = () => interopDefault(import('../pages/article/components/article-comments.vue' /* webpackChunkName: "pages/article/components/article-comments" */))
const _3e3d435b = () => interopDefault(import('../pages/article/components/article-meta.vue' /* webpackChunkName: "pages/article/components/article-meta" */))
const _2a4b25e0 = () => interopDefault(import('../pages/article/_slug.vue' /* webpackChunkName: "pages/article/_slug" */))
const _39515859 = () => interopDefault(import('../pages/editor/_slug.vue' /* webpackChunkName: "pages/editor/_slug" */))
const _0d7b96ae = () => interopDefault(import('../pages/profile/_username.vue' /* webpackChunkName: "pages/profile/_username" */))
const _873d219e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/article",
    component: _26dde350,
    name: "article"
  }, {
    path: "/layout",
    component: _25b38b1e,
    name: "layout"
  }, {
    path: "/login",
    component: _4000c2cb,
    name: "login"
  }, {
    path: "/settings",
    component: _7f6d3697,
    name: "settings"
  }, {
    path: "/signup",
    component: _084420e8,
    name: "signup"
  }, {
    path: "/article/create",
    component: _6575f134,
    name: "article-create"
  }, {
    path: "/article/components/article-comments",
    component: _0124a66c,
    name: "article-components-article-comments"
  }, {
    path: "/article/components/article-meta",
    component: _3e3d435b,
    name: "article-components-article-meta"
  }, {
    path: "/article/:slug",
    component: _2a4b25e0,
    name: "article-slug"
  }, {
    path: "/editor/:slug?",
    component: _39515859,
    name: "editor-slug"
  }, {
    path: "/profile/:username?",
    component: _0d7b96ae,
    name: "profile-username"
  }, {
    path: "/",
    component: _873d219e,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
