(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d61b81ac"],{"27e7":function(t,e,c){},3174:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a={class:"container"},o={key:1,class:"row"};function r(t,e,c,r,i,s){var d=Object(n["x"])("Loader"),b=Object(n["x"])("StationItem");return Object(n["q"])(),Object(n["d"])("div",a,[s.loading?(Object(n["q"])(),Object(n["d"])(d,{key:0})):(Object(n["q"])(),Object(n["d"])("div",o,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(s.data,(function(t){return Object(n["q"])(),Object(n["d"])(b,{key:t.id,station:t},null,8,["station"])})),128))]))])}c("b0c0");var i={class:"col-md-4"},s={class:"card"},d={class:"card-body"},b={class:"card-title"},u=Object(n["g"])("Detail");function l(t,e,c,a,o,r){var l=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["d"])("div",i,[Object(n["h"])("div",s,[Object(n["h"])("div",d,[Object(n["h"])("h4",b,Object(n["z"])(c.station.name),1),Object(n["h"])(l,{class:"btn btn-success",to:"/station/".concat(c.station._id)},{default:Object(n["D"])((function(){return[u]})),_:1},8,["to"])])])])}var j={props:["station"]};j.render=l;var O=j,f=c("555f"),v=c("ae22"),h={components:{StationItem:O,Loader:f["a"]},created:function(){this.$store.dispatch(v["a"])},computed:{loading:function(){return console.log("Station page"),this.$store.state.station.loading},data:function(){return this.$store.state.station.data}}};h.render=r;e["default"]=h},"555f":function(t,e,c){"use strict";var n=c("7a23"),a={class:"loader"};function o(t,e,c,o,r,i){return Object(n["q"])(),Object(n["d"])("div",a)}var r={};c("aebc");r.render=o;e["a"]=r},aebc:function(t,e,c){"use strict";c("27e7")},b0c0:function(t,e,c){var n=c("83ab"),a=c("9bf2").f,o=Function.prototype,r=o.toString,i=/^\s*function ([^ (]*)/,s="name";n&&!(s in o)&&a(o,s,{configurable:!0,get:function(){try{return r.call(this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-d61b81ac.7178a83e.js.map