(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-topic-position"],{"06a1":function(t,e,n){"use strict";n("99af"),n("4160"),n("b64b"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.getCurUrl=void 0;e.getCurUrl=function(){var t=getCurrentPages(),e=t[t.length-1].route,n=t[t.length-1].options,i="";return Object.keys(n).forEach((function(t){i="".concat(i,"&").concat(t,"=").concat(n[t])})),i.length>0&&(i="?".concat(i.substr(1))),"/".concat(e).concat(i)}},"0d2c":function(t,e,n){"use strict";n.r(e);var i=n("c857"),s=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e.default=s.a},"185d":function(t,e,n){t.exports=n.p+"static/img/auth.bac1d347.svg"},"1cb5":function(t,e,n){t.exports=n.p+"static/img/yihuida.4252644e.svg"},"245f":function(t,e,n){"use strict";(function(e){var i=n("4ea4"),s=i(n("6f74")),o=n("b95e"),a=i(n("4c82"));t.exports={mixins:[s.default,a.default],methods:{getForum:function(){var t=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(n){n&&(e.log("forum",n),t.forum=n)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.redirectTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){a.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var t=this;uni.login({success:function(n){if("login:ok"===n.errMsg){var i=n.code;uni.getUserInfo({success:function(e){var n={data:{attributes:{js_code:i,iv:e.iv,encryptedData:e.encryptedData}}};t.$store.dispatch("session/setParams",n)},fail:function(t){e.log(t)}})}},fail:function(t){e.log(t)}})},mpLogin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",t),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",t),uni.setStorageSync("rebind",e),uni.setStorageSync("h5_wechat_login",1),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(t,e){var n=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var i=uni.getStorageSync("token");""!==i&&(n.data.attributes.token=i),this.login(n,e)}},getLoginBindParams:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var i=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===n&&(i.data.attributes.rebind=1);var s=uni.getStorageSync("token");""!==s&&(i.data.attributes.token=s),this.login(i,e)}},login:function(t,n){var i=this;this.$store.dispatch("session/h5Login",t).then((function(t){if(t&&t.data&&t.data.data&&t.data.data.id&&(i.logind(),i.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(t){t&&t.set_site&&t.set_site.site_mode!==o.SITE_PAY&&uni.getStorage({key:"page",success:function(t){e.log("resData",t),uni.redirectTo({url:t.data})}}),t&&t.set_site&&t.set_site.site_mode===o.SITE_PAY&&i.user&&!i.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:n,duration:2e3})),t&&t.data&&t.data.errors){if("401"===t.data.errors[0].status||"402"===t.data.errors[0].status||"500"===t.data.errors[0].status){var s=i.i18n.t("core.".concat(t.data.errors[0].code));uni.showToast({icon:"none",title:s,duration:2e3})}if("403"===t.data.errors[0].status||"422"===t.data.errors[0].status){var a=i.i18n.t(t.data.errors[0].detail[0]);uni.showToast({icon:"none",title:a,duration:2e3})}}})).catch((function(t){return e.log(t)}))}}}}).call(this,n("5a52").default)},"250a":function(t,e,n){"use strict";(function(t){var i;n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));try{i={quiPage:n("29c4").default,quiThreadItem:n("369a").default,quiLoadMore:n("51e5").default}}catch(e){if(-1===e.message.indexOf("Cannot find module")||-1===e.message.indexOf(".vue"))throw e;t.error(e.message),t.error("1. 排查组件名称拼写是否正确"),t.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),t.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("qui-page",{staticClass:"position",attrs:{"data-qui-theme":t.theme}},[n("v-uni-scroll-view",{staticClass:"scroll-y",attrs:{"scroll-y":"true","scroll-with-animation":"true","show-scrollbar":"false"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.pullDown.apply(void 0,arguments)}}},[t.address?n("v-uni-view",{staticClass:"position-head"},[n("v-uni-view",{staticClass:"position-head__name"},[t._v(t._s(t.location))]),n("v-uni-view",{staticClass:"position-head__address"},[t._v(t._s(t.address))])],1):t._e(),t.address?n("v-uni-view",{staticClass:"position-num"},[t._v(t._s(""+t.i18n.t("profile.nearBy")+t.i18n.t("profile.total")+" "+t.totalData+" "+t.i18n.t("profile.item")+t.i18n.t("core.content")))]):t._e(),n("v-uni-view",{staticClass:"position-content"},[t._l(t.data,(function(e,i){return n("v-uni-view",{key:i,staticClass:"position-content__item"},[n("qui-thread-item",{attrs:{currentindex:i,thread:e},on:{toTopic:function(e){arguments[0]=e=t.$handleEvent(e),t.toTopic.apply(void 0,arguments)},handleClickShare:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickShare.apply(void 0,arguments)}}})],1)})),t.loadingType?n("qui-load-more",{attrs:{status:t.loadingType,"show-icon":!1,"content-text":t.contentText}}):t._e()],2)],1)],1)},o=[]}).call(this,n("5a52").default)},"35ab":function(t,e,n){"use strict";n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=0,n=0;n<t.length;n++)e+=t.charCodeAt(n);var i=function(t,e,n){var i,s,o,a=Math.floor(6*t),r=6*t-a,u=n*(1-e),c=n*(1-r*e),d=n*(1-(1-r)*e);switch(a%6){case 0:i=n,s=d,o=u;break;case 1:i=c,s=n,o=u;break;case 2:i=u,s=n,o=d;break;case 3:i=u,s=c,o=n;break;case 4:i=d,s=u,o=n;break;case 5:i=n,s=u,o=c}return{r:Math.floor(255*i),g:Math.floor(255*s),b:Math.floor(255*o)}}(e%360/360,.3,.9);return""+i.r.toString(16)+i.g.toString(16)+i.b.toString(16)}},"368d":function(t,e,n){t.exports=n.p+"static/img/msg-warning.0c78a551.svg"},"3c8e":function(t,e,n){(e=n("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.scroll-y[data-v-42e55ab4]{max-height:100vh}.position[data-v-42e55ab4] .position-head{padding:%?30?%;background:var(--qui-BG-2);border-bottom:%?2?% solid var(--qui-BOR-ED)}.position[data-v-42e55ab4] .position-head__name{margin-bottom:%?40?%;font-size:%?42?%;font-weight:700}.position[data-v-42e55ab4] .position-head__address{font-size:%?28?%;color:var(--qui-FC-777)}.position[data-v-42e55ab4] .position-num{padding:%?20?% %?30?% 0;font-size:%?26?%;color:var(--qui-FC-7D7979)}',""]),t.exports=e},"495e":function(t,e,n){"use strict";var i=n("250a");n.d(e,"a",(function(){return i.a})),n.d(e,"b",(function(){return i.b})),n.d(e,"c",(function(){return i.c}))},"5b5f":function(t,e,n){"use strict";var i=n("4ea4");n("99af"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("1276");var s=i(n("53ca")),o=n("b95e"),a=n("ce40");t.exports={methods:{wxShare:function(t){var e=this.getUrl(),n=this.$store.getters["jv/get"]("forums/1");n.passport&&!n.passport.offiaccount_close||this.$store.dispatch("jv/get",["offiaccount/jssdk?url=".concat(encodeURIComponent(e)),{}]).then((function(i){var s=i.appId,o=i.nonceStr,r=i.signature,u=i.timestamp;a.config({debug:!1,appId:s,timestamp:u,nonceStr:o,signature:r,jsApiList:["updateAppMessageShareData","updateTimelineShareData","hideMenuItems","showMenuItems"]}),a.ready((function(){var i={title:t.title||"Discuz!Q",desc:t.desc||n.set_site.site_introduction,link:e,imgUrl:t.logo||n.set_site.site_favicon};a.updateAppMessageShareData(i),a.updateTimelineShareData(i)}))}))},h5Share:function(t){var e="";switch((0,s.default)(t)){case"undefined":e="Discuz!Q";break;case"string":e=t;break;default:e=t.title||"Discuz!Q"}var n=t.id?"?id=".concat(t.id):"",i="".concat(o.DISCUZ_REQUEST_HOST).concat(t.url).concat(n),a=document.createElement("input");e=(e=(e=(e=e.toString().replace(/<img(?:.|\s)*?>/g,"")).toString().replace(/(<\/?br.*?>)/gi,"")).toString().replace(/(<\/?p.*?>)/gi,"")).toString().replace(/\s+/g,""),e="".concat(e.substring(0,17)),a.value="".concat(e,"  ").concat(i),document.body.appendChild(a),a.select(),a.readOnly=!0,a.id="copyInp",document.execCommand("Copy"),a.setAttribute("onfocus",this.copyFocus(a)),a.className="oInput",a.style.display="none",uni.showToast({icon:"none",title:"分享链接已复制成功"})},copyFocus:function(t){t.blur(),document.body.removeChild(t)},getUrl:function(){var t=/iPad|iPhone|iPod/.test(navigator.userAgent),e=window.location.href.split("#")[0];return t&&window.entryUrl&&!/wechatdevtools/.test(navigator.userAgent)&&(e=window.entryUrl),e}}}},"5df8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAYAAADbCvnoAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAJKADAAQAAAABAAAAKgAAAAC29n+nAAAEUUlEQVRYCe1YS4gUSRB9mVU1qKjbCLr+wB1BBBk/oAheZEb8I0sj4llc15OHOaws+IEWLwMiDB50/BxmLl482B4Eb7ONehE/BxXxIK7gF12dGT+g3VVpRHZ3TVZNdlV179BeDOiuyIisiFcvoyKzW8CQAiC7crlzv/f0/GGY26mWpJntV2Dgv7GxHaat3XoI6DRwgpL/2W4A8XwaEIHpE8BfceePGLtngAIl/vtHJLflJGKiUs7nu5UQw1Fr20bRom5b2oREYVEnzGmrqyVAcudOiOXLE4Gy3zlwIHGOzdkcINfVMeT69RCLF1fjSXsIsWABZHd3dU4T39UMGW5w9u8HlIJ//vz4bALonT0L//JlODti/XTaNOr7Et7AwPj8mlY+dAh4/36CnQ2ZAalnz+Ds3g3/woUwkFizBpgxA8GdO8DYWGhnRaxcCWbIv3gxYteDz58n2moWO9+W6cGtW0AuB7FsWeh1aOnU3bvAq1dQr19DVSrhB76vGTVtWqcHw9evYYy4kpkhfPgA9eQJJLNCIqZOhVi9GpWTJ/WY2ZBr12pdf02ZopfM3bt33Eaaf+0amO1G0lxjnDsXePsWLoEIhoeh7t2DevGCshAbMZFbt8LZtw/lXbtinsRhKTNDcsMGYOZMHU3QVXZ1IRACYtUqYGQEctOmSCYxa1aVoePHI3Ye+FeuQN2+PcHOhsyAxIoVEPPm0VoRqVxLixZBMkCqG39oCAGxlVnevWs4NTMgv79fBxHr1sE9eBD+1asI6ElDKZcBBpwi6sGDCW+keUtmQPWbnHpNdHQAs2frmmKf3LgRcssW4OPH+tTo1XGA6dNROXoU6uHDqM8YNQWI3ypeKnz6BGfbNjibN6N85Ajw5o0OqZ4/R6W31whvqAsXwjt1yjDY1aYAMTvB9esQnZ0IbtyApLryjh1D+fBh3XPEnDlwiQGrcBtgoW6fJJkbI2+WYskS+JcuVeNRzVT6+qCoyTFbWkgPHj+2ftTTp0k4Ql9mhjQ7N28CL1+GN+PLF1R4yahuuOfwOCiVxv2GJqiHye3bDYtdzQaINkmunYq5sdbjmUVMb5l3hg7F/0OyAQqC6hZBRZso5Nc7uWWSmD8fLi1xmmQDRFHU/ftpsaAIOL+BWjyP2i6Fr22kYulSbVajo4lxMgNKjGJx8vHD5XMPCwOlZdeFzXtfgrQESNH5h3uOKQE1O2EcutSjR/Dp8FYXxUcU7tIp0txunxJsEtw/fwalkpi5U6dGmqQJPwGlETmZDJWEUj2eUp20ow9R4uQO2ABZS30oEouSU+8Y9IrFfwz7HpXP574BvUIIPiD9YvgS1db7EAGhzaEgisV/kzI0CazUPKCMQOIgGRiduvfQf0+9lJSOnVbJDGhUKdVPp+jBNEasaWLGb/k8AytYgKX+LqsD6ScgI7G4LQ87isVBunnQBqzRkhVrjEwqkEZPUPsbsWD181pbHW0wUu7fvgOL85EkK3XjYwAAAABJRU5ErkJggg=="},"6f74":function(t,e,n){"use strict";var i=n("b95e");t.exports={computed:{user:function(){var t=this.$store.getters["session/get"]("userId");return t?this.$store.getters["jv/get"]("users/".concat(t)):{}}},methods:{getUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(new Date).getTime(),n=uni.getStorageSync(i.STORGE_GET_USER_TIME);if(t||(e-n)/1e3>60){var s={include:"groups,wechat"},o=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:o}}),this.$store.dispatch("jv/get",["users/".concat(o),{params:s}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(i.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var t=this,e=this.$store.getters["session/get"]("userId");if(e){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(e),{params:{include:"groups,wechat"}}]).then((function(e){t.$u.event.$emit("logind",e)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},"864e":function(t,e,n){"use strict";var i=n("4ea4");n("99af"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("9558")),o={topic:function(t){var e=(0,s.default)(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="topic"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return t&&t.replace(e,(function(t){return t.replace(e,(function(t,e,n){var i="/pages/topic/content?id=".concat(e);return'<a href="'.concat(i,'" class="content-topic">').concat(n,"</a> ")}))}))},usermention:function(t){var e=(0,s.default)(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="member"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return t&&t.replace(e,(function(t){return t.replace(e,(function(t,e,n){var i="/pages/profile/index?userId=".concat(e);return'<a href="'.concat(i,'" class="content-member">').concat(n,"</a> ")}))}))},attachment:function(t,e){return t&&t.replace(/\[attach\](.*?)\[\/attach\]/g,(function(t,n){var i=e.$store.getters["jv/get"]("attachments/".concat(n));return i.url&&(t='<a href="'.concat(i.url,'" class="content-attachment">').concat(i.attachment,"</a>")),t}))}};var a={parse:function(t,e){if(t){for(var n in o)t=o[n](t,e);return t}}};e.default=a},"8f7a":function(t,e,n){"use strict";n.r(e);var i=n("495e"),s=n("0d2c");for(var o in s)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(o);n("94b1");var a=n("f0c5"),r=Object(a.a)(s.default,i.b,i.c,!1,null,"42e55ab4",null,!1,i.a,void 0);e.default=r.exports},"94b1":function(t,e,n){"use strict";var i=n("cb79");n.n(i).a},b469:function(t,e){t.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},c857:function(t,e,n){"use strict";var i=n("4ea4");n("99af"),n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("2909")),o=n("4b36"),a={mixins:i(n("b469")).default,props:{userId:{type:String,default:""}},data:function(){return{loadingType:"",data:[],totalData:0,pageSize:20,pageNum:1,editThreadId:"",nowThreadId:"",longitude:"",latitude:"",location:"",address:"",contentText:{contentnomore:this.i18n.t("topic.noMoreDataNearby")}}},mounted:function(){this.getList()},onLoad:function(t){this.longitude=t.longitude||"",this.latitude=t.latitude||""},onShow:function(){this.uploadItem()},onShareAppMessage:function(t){if("button"===t.from){var e=this.$store.getters["jv/get"]("/threads/".concat(this.nowThreadId));return{title:1===e.type?e.title:e.firstPost.summaryText,path:"/pages/position/index?id=".concat(this.nowThreadId)}}},onShareTimeline:function(){return{title:this.forums.set_site.site_name,query:"longitude=".concat(this.longitude,"&latitude=").concat(this.latitude)}},methods:{toTopic:function(t){this.editThreadId=t},handleClickShare:function(t){this.nowThreadId=t},getList:function(){var t=this;this.loadingType="loading";var e={"filter[isApproved]":1,"filter[isDeleted]":"no","page[number]":this.pageNum,"page[limit]":this.pageSize,"filter[location]":"".concat(this.longitude,",").concat(this.latitude),include:["user","user.groups","firstPost","firstPost.images","firstPost.postGoods","category","threadVideo","threadAudio","question","question.beUser","question.beUser.groups"]};o.status.run((function(){return t.$store.dispatch("jv/get",["threads",{params:e}])})).then((function(e){e._jv&&(t.totalData=e._jv.json.meta.threadCount,delete e._jv),!t.address&&e.length>0&&(t.address=e[0].address),!t.location&&e.length>0&&(t.location=e[0].location),t.loadingType=e.length===t.pageSize?"more":"nomore",t.data=[].concat((0,s.default)(t.data),(0,s.default)(e))}))},pullDown:function(){"more"===this.loadingType&&(this.pageNum+=1,this.getList())},uploadItem:function(){var t=this;if(this.editThreadId){var e=this.$store.getters["jv/get"]("threads/".concat(this.editThreadId));this.data.forEach((function(n,i){n._jv.id===t.editThreadId&&(t.editThreadId="",t.$set(t.data,i,e))}))}}}};e.default=a},cadb:function(t,e,n){"use strict";n("99af"),n("e25e"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.timestamp2day=e.time2DateAndHM=e.time2MinuteOrHour=void 0;e.time2MinuteOrHour=function(t){var e=new Date-new Date(t);return parseInt(parseInt(e/1e3,0)/60,0)<60?"".concat(Math.ceil(e/1e3/60),"分钟前"):parseInt(parseInt(parseInt(e/1e3,0)/60,0)/60,0)<16?"".concat(Math.ceil(e/1e3/60/60),"小时前"):t.replace(/T/," ").replace(/Z/,"").substring(0,16)};e.time2DateAndHM=function(t){var e=t.replace(/T/," ").replace(/Z/,"");return"".concat(e.substring(0,10)," ").concat(e.substring(11,16))};e.timestamp2day=function(t){var e=t-Math.round(new Date/1e3);return parseInt(e/86400,0)}},cb79:function(t,e,n){var i=n("3c8e");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("4f06").default)("5c54dcc2",i,!0,{sourceMap:!1,shadowMode:!1})},e972:function(t,e,n){t.exports=n.p+"static/img/msg-404.e11dc2d7.svg"}}]);