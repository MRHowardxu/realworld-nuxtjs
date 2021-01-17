/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{186:function(e,t,r){"use strict";var n=r(78),o=r.n(n).a.create({baseURL:"https://conduit.productionready.io"});t.a=o},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l}));var n=r(186),o=r(61);function c(data){return Object(n.a)({method:"POST",url:"/api/users/login",data:data})}function l(data){return o.b({method:"PUT",url:"/api/user",data:data})}},188:function(e,t,r){var n,o;!function(c){if(void 0===(o="function"==typeof(n=c)?n.call(t,r,t,e):n)||(e.exports=o),!0,e.exports=c(),!!0){var l=window.Cookies,d=window.Cookies=c();d.noConflict=function(){return window.Cookies=l,d}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var r in t)e[r]=t[r]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function o(){}function c(t,r,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(r);/^[\{\[]/.test(l)&&(r=l)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var d="";for(var f in c)c[f]&&(d+="; "+f,!0!==c[f]&&(d+="="+c[f].split(";")[0]));return document.cookie=t+"="+r+d}}function l(e,r){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),d=l.slice(1).join("=");r||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var f=t(l[0]);if(d=(n.read||n)(d,f)||t(d),r)try{d=JSON.parse(d)}catch(e){}if(o[f]=d,e===f)break}catch(e){}}return e?o[e]:o}}return o.set=c,o.get=function(e){return l(e,!1)},o.getJSON=function(e){return l(e,!0)},o.remove=function(t,r){c(t,"",e(r,{expires:-1}))},o.defaults={},o.withConverter=r,o}((function(){}))}))},267:function(e,t,r){"use strict";r.r(t);r(62),r(37);var n=r(3),o=(r(186),r(187)),c=r(188),l={middleware:"noAuthenticated",name:"LoginIndex",data:function(){return{user:{email:"",password:""},errors:{}}},methods:{submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("submit"),t.prev=1,t.next=4,Object(o.a)({user:e.user});case 4:r=t.sent,data=r.data,console.log("%c⧭","color: #ff0000",data),data&&(e.$store.commit("setUser",data.user),c.set("user",data.user),e.$router.replace("/")),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log("%c⧭","color: #00e600",t.t0),e.errors=t.t0.response.data.errors;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},resetPassword:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("resetPassword"),r=Object(o.b)(e.user),r.data&&e.$router.replace("/");case 3:case"end":return t.stop()}}),t)})))()}}},d=r(27),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("Login")]),e._v(" "),r("p",{staticClass:"text-xs-center"},[r("nuxt-link",{attrs:{to:"/signup"}},[e._v("Create an account?")])],1),e._v(" "),r("ul",{staticClass:"error-messages"},[e._l(e.errors,(function(t,n){return e._l(t,(function(t,o){return r("li",{key:o},[e._v("\n              "+e._s(n)+" "+e._s(t)+"\n            ")])}))}))],2),e._v(" "),r("form",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",attrs:{type:"button"},on:{click:e.submit}},[e._v("\n            Login\n          ")])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);