(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{203:function(t,e,n){"use strict";n.r(e);n(37);var r=n(3),l={name:"ArticleMeta",props:{article:{type:Object,require:!0},user:{type:Object}},methods:{deleteArticle:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("deleteArticle");case 1:case"end":return t.stop()}}),t)})))()}}},c=n(27),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-meta"},[n("nuxt-link",{attrs:{to:{name:"profile-username",params:{username:t.article.author.username}}}},[n("img",{attrs:{src:t.article.author.image}})]),t._v(" "),n("div",{staticClass:"info"},[n("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile-username",params:{username:t.article.author.username}}}},[t._v(t._s(t.article.author.username))]),t._v(" "),n("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),t.article.author.username==t.user.username?[n("nuxt-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:{name:"editor-slug",params:{slug:t.article.slug}}}},[n("i",{staticClass:"ion-edit"}),t._v(" Edit Article\n        ")]),t._v(" "),n("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:t.deleteArticle}},[n("i",{staticClass:"ion-trash-a"}),t._v(" Delete Article\n        ")])]:[t._m(0),t._v("\n          \n        "),n("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited}},[n("i",{staticClass:"ion-heart"}),t._v("\n           \n          Favorite Post "),n("span",{staticClass:"counter"},[t._v("(29)")])])]],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-sm btn-outline-secondary"},[e("i",{staticClass:"ion-plus-round"}),this._v("\n           \n          Follow Eric Simons "),e("span",{staticClass:"counter"},[this._v("(10)")])])}],!1,null,null,null);e.default=component.exports}}]);