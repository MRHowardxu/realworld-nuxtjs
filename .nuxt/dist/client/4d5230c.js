(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{185:function(t,e,n){"use strict";n.d(e,"e",(function(){return c})),n.d(e,"g",(function(){return o})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"i",(function(){return v})),n.d(e,"b",(function(){return h})),n.d(e,"h",(function(){return C}));var r=n(61),c=function(t){return Object(r.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(r.b)({method:"GET",url:"/api/articles/feed",params:t})},m=function(t){return Object(r.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},l=function(t){return Object(r.b)({method:"GET",url:"/api/articles/".concat(t)})},d=function(t){return Object(r.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},f=function(data){return Object(r.b)({method:"POST",url:"/api/articles",data:data})},v=function(t,data){return Object(r.b)({method:"PUT",url:"/api/articles/".concat(t),data:data})},h=function(t,data){return Object(r.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},C=function(t){return Object(r.b)({method:"GET",url:"/api/tags",params:t})}},202:function(t,e,n){"use strict";n.r(e);n(37);var r=n(3),article=n(185),c={name:"ArticleComments",props:{article:{type:Object,required:!0},user:{type:Object}},data:function(){return{comments:[],body:"",pending:!1}},methods:{onPostComment:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pending=!0,e.prev=1,e.next=4,Object(article.b)(t.article.slug,{comment:{body:body}});case 4:n=e.sent,data=n.data,console.log("%c⧭","color: #007300",data),t.comments.push(data.comment),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:t.pending=!1;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},loadComments:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("this.article: ",t.article),e.next=3,Object(article.f)(t.article.slug);case 3:n=e.sent,data=n.data,t.comments=data.comments;case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.loadComments()}},o=n(27),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"card comment-form"},[n("div",{staticClass:"card-block"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],staticClass:"form-control",attrs:{placeholder:"Write a comment",rows:"3"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"card-footer"},[n("img",{staticClass:"comment-author-img",attrs:{src:t.user.image}}),t._v(" "),n("button",{staticClass:"btn btn-sm btn-primary",attrs:{disabled:t.pending},on:{click:t.onPostComment}},[t._v("\n           Post Comment\n          ")])])]),t._v(" "),t._l(t.comments,(function(e){return n("div",{key:e.id,staticClass:"card"},[n("div",{staticClass:"card-block"},[n("p",{staticClass:"card-text"},[t._v(t._s(e.body))])]),t._v(" "),n("div",{staticClass:"card-footer"},[n("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[n("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v(" "),n("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v("\n            "+t._s(e.author.username)+"\n          ")]),t._v("\n           \n          "),n("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(e.createdAt,"MMM DD, YYYY")))])],1)])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);