(function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/participantsList/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1018:function(t,e,n){},"4ab9":function(t,e,n){t.exports=n.p+"img/tick.c4852a4f.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Body")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("span",{staticClass:"tip"},[t._v("Left until the draw")]),n("span",{staticClass:"date"},[t._v(t._s(t.timeLeft))])])},c=[],s=(n("99af"),{name:"Header",data:function(){return{timeLeft:"Loading...",timerInterval:0}},watch:{timeLeft:function(t){0===t&&this.onTimesUp()}},mounted:function(){this.startTimer()},methods:{onTimesUp:function(){clearInterval(this.timerInterval)},startTimer:function(){var t=this,e=function(){var e=(new Date).setHours(23,59,59,999)-(new Date).getTime();t.timeLeft="".concat(Math.floor(e/36e5%24),"H ").concat(Math.floor(e/6e4%60),"M ").concat(Math.floor(e/1e3%60),"S")};this.timerInterval=setInterval(e,1e3)}}}),u=s,l=(n("5d7e"),n("2877")),p=Object(l["a"])(u,o,c,!1,null,"99f17ab8",null),f=p.exports,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[t._m(0),t.fetching?r("div",{staticClass:"loader"}):r("div",t._l(t.participantList,(function(t){return r("div",{key:t.id},[r("Participant",{attrs:{participant:t}})],1)})),0),r("div",{directives:[{name:"show",rawName:"v-show",value:t.scrolledToBottom,expression:"scrolledToBottom"}],staticClass:"loader"}),t.participantList.length>=50?r("footer",[r("img",{attrs:{src:n("4ab9"),alt:"tick"}}),r("span",[t._v("All users loaded")])]):t._e()])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("span",[t._v("Participant")]),n("span",[t._v("Work email")]),n("span",[t._v("Signed up")])])}],h=n("2909"),v=n("1da1"),g=(n("96cf"),n("d3b7"),n("d81d"),n("b0c0"),function(t){return t.map((function(t){return{id:t.login.uuid,avatar:t.picture.medium,fullName:t.name.first+" "+t.name.last,email:t.email,signUp:t.registered.date}}))}),w=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=function(t){var e=(new Date).getTime()-t.getTime();return e<6e4?"just now":e<36e5?"".concat(Math.floor(e/6e4%60),"m ago"):e<864e5?"".concat(Math.floor(e/36e5%24),"h ago"):e<1728e5?"yesterday":"unknown date"},_=function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://randomuser.me/api/?results=20");case 3:return e=t.sent,t.next=6,e.json();case 6:return n=t.sent,t.abrupt("return",g(n.results));case 10:t.prev=10,t.t0=t["catch"](0),alert("Something went wrong while getting participant list. ".concat(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("img",{attrs:{alt:"avatar",src:t.participant.avatar}}),n("div",[t._v(t._s(t.participant.fullName))]),n("div",[t._v(t._s(t.participant.email))]),n("span",[t._v(t._s(t.signUp))])])},T=[],O={name:"Participant",props:["participant"],data:function(){return{signUp:"Loading..."}},mounted:function(){this.startTimer()},methods:{startTimer:function(){var t=this,e=new Date(this.participant.signUp);if((new Date).getTime()-e.getTime()>=1728e5){var n=e.getUTCDate(),r=w[e.getUTCMonth()],a=e.getUTCFullYear();(new Date).getUTCFullYear()===a?this.signUp=n+" "+r:this.signUp=n+" "+r+" "+a}else{var i=function(){t.signUp=b(e)};setInterval(i,1e3)}}}},j=O,x=(n("8b41"),Object(l["a"])(j,y,T,!1,null,"622fd892",null)),M=x.exports,L={name:"Body",components:{Participant:M},data:function(){return{participantList:[{id:0,avatar:"",fullName:"",email:"",signUp:""}],fetching:!0,scrolledToBottom:!1}},watch:{scrolledToBottom:function(t){t&&this.getMoreParticipants()}},mounted:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.scroll(),e.next=3,_();case 3:t.participantList=e.sent,t.fetching=!1;case 5:case"end":return e.stop()}}),e)})))()},methods:{scroll:function(){var t=this;window.onscroll=function(){var e=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.offsetHeight;e&&t.participantList.length<50&&(t.scrolledToBottom=!0)}},getMoreParticipants:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:n=e.sent,t.participantList=[].concat(Object(h["a"])(t.participantList),Object(h["a"])(n)),t.scrolledToBottom=!1,t.scroll();case 6:case"end":return e.stop()}}),e)})))()}}},U=L,P=(n("cd28"),Object(l["a"])(U,d,m,!1,null,"add4b154",null)),k=P.exports,B={name:"App",components:{Header:f,Body:k}},S=B,C=(n("034f"),Object(l["a"])(S,a,i,!1,null,null,null)),D=C.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(D)}}).$mount("#app")},"5d7e":function(t,e,n){"use strict";n("e3c4")},"85ec":function(t,e,n){},"8b41":function(t,e,n){"use strict";n("1018")},a2c0:function(t,e,n){},cd28:function(t,e,n){"use strict";n("a2c0")},e3c4:function(t,e,n){}});
//# sourceMappingURL=app.b451e5ee.js.map