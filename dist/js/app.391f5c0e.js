(function(t){function e(e){for(var a,c,u=e[0],i=e[1],l=e[2],d=0,s=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);h&&h(e);while(s.length)s.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},c={app:0},o={app:0},r=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-0a2f51cb":"7724c342","chunk-261c9239":"a55052e2","chunk-2d0b59e1":"3cbf8ce0","chunk-2d0cfc57":"f4c974a1","chunk-2d0e4c4f":"d297022f","chunk-358b8110":"379c4078","chunk-3efeb023":"2e6ad1f5","chunk-7b4769f5":"1594e662","chunk-a4d6bb44":"32314380","chunk-a6a67748":"4043ece3","chunk-d61b81ac":"7178a83e"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-0a2f51cb":1,"chunk-261c9239":1,"chunk-358b8110":1,"chunk-3efeb023":1,"chunk-7b4769f5":1,"chunk-a4d6bb44":1,"chunk-a6a67748":1,"chunk-d61b81ac":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0a2f51cb":"da3d3413","chunk-261c9239":"8a63aca6","chunk-2d0b59e1":"31d6cfe0","chunk-2d0cfc57":"31d6cfe0","chunk-2d0e4c4f":"31d6cfe0","chunk-358b8110":"f9bef709","chunk-3efeb023":"cee6617d","chunk-7b4769f5":"73c532cb","chunk-a4d6bb44":"cee6617d","chunk-a6a67748":"cee6617d","chunk-d61b81ac":"cee6617d"}[t]+".css",o=i.p+a,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var l=r[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===o))return e()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],d=l.getAttribute("data-href");if(d===a||d===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[t],h.parentNode.removeChild(h),n(r)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){c[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(t);var s=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",s.name="ChunkLoadError",s.type=a,s.request=c,n[1](s)}o[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var h=d;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(t,e,n,c,o,r){var u=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["d"])(u)}var o={created:function(){this.$store.dispatch("actTryLogin")}};n("9cdc");o.render=c;var r,u,i=o,l=(n("d3b7"),n("6c02")),d=n("1232"),s=[{path:"/:pathMatch(.*)*",component:n.e("chunk-0a2f51cb").then(n.bind(null,"01c5"))},{path:"/",component:n.e("chunk-261c9239").then(n.bind(null,"8435")),children:[{path:"/",component:function(){return n.e("chunk-2d0cfc57").then(n.bind(null,"64ad"))}},{path:"/about",component:function(){return n.e("chunk-2d0b59e1").then(n.bind(null,"1a50"))}},{path:"/station",component:function(){return n.e("chunk-d61b81ac").then(n.bind(null,"3174"))}},{path:"/station/:id",component:n.e("chunk-a6a67748").then(n.bind(null,"1608"))}]},{path:"/admin",redirect:"/admin/dashboard"},{path:"/admin",component:n.e("chunk-7b4769f5").then(n.bind(null,"3e1a")),beforeEnter:function(t,e,n){if(localStorage.getItem("token")){try{var a=Object(d["a"])(localStorage.getItem("token"));"member"===a.userType&&n()}catch(c){n("/admin/auth")}n()}else n("/admin/auth")},children:[{path:"/admin/dashboard",component:function(){return n.e("chunk-2d0e4c4f").then(n.bind(null,"9244"))}},{path:"/admin/stations",component:function(){return n.e("chunk-a4d6bb44").then(n.bind(null,"f7ec"))}},{path:"/admin/stations/:id/edit",component:function(){return n.e("chunk-3efeb023").then(n.bind(null,"eeb6"))}}]},{path:"/admin/auth",component:function(){return n.e("chunk-358b8110").then(n.bind(null,"db2e"))}}],h=Object(l["a"])({history:Object(l["b"])(),linkExactActiveClass:"active",routes:s}),f=h,p=n("5502"),b=n("ade3"),m=n("ae22"),g=n("bc3a"),k=n.n(g),v=k.a.create({baseURL:"http://localhost:5000"}),y={loading:!1,data:null,error:null},O=(r={},Object(b["a"])(r,m["c"],(function(t){t.loading=!0,t.data=null,t.error=null})),Object(b["a"])(r,m["d"],(function(t,e){t.loading=!1,t.data=e,t.error=null})),Object(b["a"])(r,m["b"],(function(t,e){t.loading=!1,t.data=null,t.error=e})),r),S=(u={},Object(b["a"])(u,m["a"],(function(t){var e=t.commit;e(m["c"]),v.get("api/beta/users/auth/login").then((function(t){console.log(t),e(m["d"],t.data)})).catch((function(t){console.log("kines"),e(m["b"],t)}))})),Object(b["a"])(u,"fetchDetailStation",(function(t,e){var n=t.commit;n(m["c"]),v.get("/api/stations/".concat(e)).then((function(t){n(m["d"],t.data)})).catch((function(t){n(m["b"],t)}))})),Object(b["a"])(u,"fetchDeleteStation",(function(t,e){var n=t.commit,a=t.dispatch;v.delete("/api/stations/".concat(e)).then((function(){a(m["a"])})).catch((function(t){n(m["b"],t)}))})),Object(b["a"])(u,"fetchUpdateStation",(function(t,e){var n=t.commit;n(m["c"]),v.put("api/stations/".concat(e.id),e).then((function(t){n(m["d"],t.data),console.log("Kien"),f.push("/admin/stations")})).catch((function(t){n(m["b"],t)}))})),u),j={state:y,mutations:O,actions:S},T=(n("ac1f"),n("5319"),function(t){t?v.defaults.headers.common["token"]=t:delete v.defaults.headers.common["token"]}),w=T,_={token:null,err:null,loading:!1},E={loginRequest:function(t){t.token=null,t.err=null,t.loading=!0},loginSuccess:function(t,e){t.token=e,t.err=null,t.loading=!1},loginFailed:function(t,e){t.token=null,t.err=e,t.loading=!1},clearAuth:function(t){t.token=null,t.err=null,t.loading=!1}},L={actLogin:function(t,e){var n=t.commit,a=t.dispatch;n("loginRequest"),v.post("api/users/login",{email:e.email,password:e.password}).then((function(t){if(console.log(t),404==t.data.status||400==t.data.status)return Promise.reject(t.data);n("loginSuccess",t.data.token);var e=Object(d["a"])(t.data.token),c=1e3*(e.exp-e.iat);localStorage.setItem("token",t.data.token),localStorage.setItem("exp",e.exp),a("setTimeoutLogout",c),w(e.token),f.replace("/admin/dashboard")})).catch((function(t){n("loginFailed",t)}))},actLogout:function(t){var e=t.commit;e("clearAuth"),localStorage.removeItem("token"),localStorage.removeItem("exp"),f.replace("/auth")},setTimeoutLogout:function(t,e){var n=t.dispatch;setTimeout((function(){n("actLogout")}),e)},actTryLogin:function(t){var e=t.commit,n=t.dispatch,a=localStorage.getItem("token");if(a){var c=localStorage.getItem("exp"),o=new Date;o.getTime()>1e3*c?n("actLogout"):(w(a),e("loginSuccess",a))}}},A={state:_,mutations:E,actions:L},I=Object(p["a"])({modules:{station:j,auth:A}});n("ab8b"),n("c5ec"),n("3e48");Object(a["c"])(i).use(I).use(f).mount("#app")},"9cdc":function(t,e,n){"use strict";n("c701")},ae22:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}));var a="station/M_STATION_REQUEST",c="station/M_STATION_SUCCESS",o="station/M_STATION_FAILED",r="station/A_FETCH_LIST_STATION"},c701:function(t,e,n){}});
//# sourceMappingURL=app.391f5c0e.js.map