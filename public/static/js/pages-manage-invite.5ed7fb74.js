(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-manage-invite"],{"0004":function(t,e,i){"use strict";var n=i("e036");i.n(n).a},"156b":function(t,e,i){"use strict";(function(t){var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));try{n={quiPage:i("29c4").default,quiTabs:i("9978").default,quiLoadMore:i("51e5").default,quiNoData:i("dd95").default,uniPopup:i("1c89").default,quiIcon:i("895d").default}}catch(e){if(-1===e.message.indexOf("Cannot find module")||-1===e.message.indexOf(".vue"))throw e;t.error(e.message),t.error("1. 排查组件名称拼写是否正确"),t.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),t.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("qui-page",{attrs:{"data-qui-theme":t.theme}},[i("v-uni-scroll-view",{staticClass:"invite",style:0===t.current?"bottom: 150rpx;":"bottom: 0rpx;",attrs:{"scroll-y":!0,"scroll-with-animation":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.pullDown.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"invite-tabs"},[i("qui-tabs",{staticClass:"invite-tabs-h",attrs:{current:t.current,values:t.tabList},on:{clickItem:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickItem.apply(void 0,arguments)}}}),i("v-uni-view",[t._v(t._s(t.role))]),i("v-uni-view",[0===t.current?i("v-uni-view",{staticClass:"items"},[t.allInviteList&&t.allInviteList.length>0?i("v-uni-view",[i("qui-invite",{attrs:{total:t.total,status:t.status,list:t.allInviteList},on:{setInvalid:function(e){arguments[0]=e=t.$handleEvent(e),t.setInvalid.apply(void 0,arguments)},share:function(e){arguments[0]=e=t.$handleEvent(e),t.share.apply(void 0,arguments)}}}),i("qui-load-more",{attrs:{status:t.loadingType}})],1):i("qui-no-data",{attrs:{tips:t.i18n.t("manage.noContent")}})],1):t._e(),1===t.current?i("v-uni-view",{staticClass:"items"},[t.allInviteList&&t.allInviteList.length>0?i("v-uni-view",[i("qui-invite",{attrs:{total:t.total,status:t.status,list:t.allInviteList}}),i("qui-load-more",{attrs:{status:t.loadingType}})],1):i("qui-no-data",{attrs:{tips:t.i18n.t("manage.noContent")}})],1):t._e(),2===t.current?i("v-uni-view",{staticClass:"items"},[t.allInviteList&&t.allInviteList.length>0?i("v-uni-view",[i("qui-invite",{attrs:{total:t.total,status:t.status,list:t.allInviteList}}),i("qui-load-more",{attrs:{status:t.loadingType}})],1):i("qui-no-data",{attrs:{tips:t.i18n.t("manage.noContent")}})],1):t._e(),3===t.current?i("v-uni-view",{staticClass:"items"},[t.allInviteList&&t.allInviteList.length>0?i("v-uni-view",[i("qui-invite",{attrs:{total:t.total,status:t.status,list:t.allInviteList}}),i("qui-load-more",{attrs:{status:t.loadingType}})],1):i("qui-no-data",{attrs:{tips:t.i18n.t("manage.noContent")}})],1):t._e()],1)],1)],1),0===t.current?i("v-uni-view",{staticClass:"invite-button"},[i("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.generate.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.t("manage.generateInvitationUrl")))])],1):t._e(),i("uni-popup",{ref:"popup",attrs:{type:"bottom"}},[i("v-uni-scroll-view",{staticStyle:{"max-height":"968rpx"},attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"popup-wrap"},[i("v-uni-view",{staticClass:"popup-wrap-con"},t._l(t.groupList,(function(e){return i("v-uni-view",{key:e._jv.id},[i("v-uni-view",{staticClass:"popup-wrap-con-text",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.generateUrl(e)}}},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"popup-wrap-con-line"})],1)})),1),i("v-uni-view",{staticClass:"popup-wrap-space"}),i("v-uni-text",{staticClass:"popup-wrap-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelModify.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.t("home.cancel")))])],1)],1)],1),i("uni-popup",{ref:"popupShare",attrs:{type:"bottom"}},[i("v-uni-view",{staticClass:"popup-share"},[i("v-uni-view",{staticClass:"popup-share-content",staticStyle:{"box-sizing":"border-box"}},[i("v-uni-button",{staticClass:"popup-share-button__center",attrs:{"open-type":"share"}}),t._l(t.bottomData,(function(e,n){return i("v-uni-view",{key:n,staticClass:"popup-share-content-box"},[i("v-uni-view",{staticClass:"popup-share-content-image"},[i("v-uni-view",{staticClass:"popup-share-box"},[i("qui-icon",{staticClass:"content-image",attrs:{name:e.icon,size:"46",color:"#777"}})],1)],1),i("v-uni-text",{staticClass:"popup-share-content-text"},[t._v(t._s(e.text))])],1)}))],2),i("v-uni-view",{staticClass:"popup-share-content-space"}),i("v-uni-text",{staticClass:"popup-share-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelShare("share")}}},[t._v(t._s(t.i18n.t("home.cancel")))])],1)],1)],1)},a=[]}).call(this,i("5a52").default)},"245f":function(t,e,i){"use strict";(function(e){var n=i("4ea4"),s=n(i("6f74")),a=i("b95e"),r=n(i("4c82"));t.exports={mixins:[s.default,r.default],methods:{getForum:function(){var t=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(i){i&&(e.log("forum",i),t.forum=i)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.redirectTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){r.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var t=this;uni.login({success:function(i){if("login:ok"===i.errMsg){var n=i.code;uni.getUserInfo({success:function(e){var i={data:{attributes:{js_code:n,iv:e.iv,encryptedData:e.encryptedData}}};t.$store.dispatch("session/setParams",i)},fail:function(t){e.log(t)}})}},fail:function(t){e.log(t)}})},mpLogin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",t),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",t),uni.setStorageSync("rebind",e),uni.setStorageSync("h5_wechat_login",1),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(t,e){var i=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var n=uni.getStorageSync("token");""!==n&&(i.data.attributes.token=n),this.login(i,e)}},getLoginBindParams:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var n=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===i&&(n.data.attributes.rebind=1);var s=uni.getStorageSync("token");""!==s&&(n.data.attributes.token=s),this.login(n,e)}},login:function(t,i){var n=this;this.$store.dispatch("session/h5Login",t).then((function(t){if(t&&t.data&&t.data.data&&t.data.data.id&&(n.logind(),n.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(t){t&&t.set_site&&t.set_site.site_mode!==a.SITE_PAY&&uni.getStorage({key:"page",success:function(t){e.log("resData",t),uni.redirectTo({url:t.data})}}),t&&t.set_site&&t.set_site.site_mode===a.SITE_PAY&&n.user&&!n.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:i,duration:2e3})),t&&t.data&&t.data.errors){if("401"===t.data.errors[0].status||"402"===t.data.errors[0].status||"500"===t.data.errors[0].status){var s=n.i18n.t("core.".concat(t.data.errors[0].code));uni.showToast({icon:"none",title:s,duration:2e3})}if("403"===t.data.errors[0].status||"422"===t.data.errors[0].status){var r=n.i18n.t(t.data.errors[0].detail[0]);uni.showToast({icon:"none",title:r,duration:2e3})}}})).catch((function(t){return e.log(t)}))}}}}).call(this,i("5a52").default)},"368d":function(t,e,i){t.exports=i.p+"static/img/msg-warning.0c78a551.svg"},"3a6d":function(t,e,i){"use strict";i.r(e);var n=i("405f"),s=i("411f");for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("0004");var r=i("f0c5"),o=Object(r.a)(s.default,n.b,n.c,!1,null,"0e885bea",null,!1,n.a,void 0);e.default=o.exports},"405f":function(t,e,i){"use strict";var n=i("156b");i.d(e,"a",(function(){return n.a})),i.d(e,"b",(function(){return n.b})),i.d(e,"c",(function(){return n.c}))},"411f":function(t,e,i){"use strict";i.r(e);var n=i("f934"),s=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=s.a},"5b5f":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),i("1276");var s=n(i("53ca")),a=i("b95e"),r=i("ce40");t.exports={methods:{wxShare:function(t){var e=this.getUrl(),i=this.$store.getters["jv/get"]("forums/1");i.passport&&!i.passport.offiaccount_close||this.$store.dispatch("jv/get",["offiaccount/jssdk?url=".concat(encodeURIComponent(e)),{}]).then((function(n){var s=n.appId,a=n.nonceStr,o=n.signature,u=n.timestamp;r.config({debug:!1,appId:s,timestamp:u,nonceStr:a,signature:o,jsApiList:["updateAppMessageShareData","updateTimelineShareData","hideMenuItems","showMenuItems"]}),r.ready((function(){var n={title:t.title||"Discuz!Q",desc:t.desc||i.set_site.site_introduction,link:e,imgUrl:t.logo||i.set_site.site_favicon};r.updateAppMessageShareData(n),r.updateTimelineShareData(n)}))}))},h5Share:function(t){var e="";switch((0,s.default)(t)){case"undefined":e="Discuz!Q";break;case"string":e=t;break;default:e=t.title||"Discuz!Q"}var i=t.id?"?id=".concat(t.id):"",n="".concat(a.DISCUZ_REQUEST_HOST).concat(t.url).concat(i),r=document.createElement("input");e=(e=(e=(e=e.toString().replace(/<img(?:.|\s)*?>/g,"")).toString().replace(/(<\/?br.*?>)/gi,"")).toString().replace(/(<\/?p.*?>)/gi,"")).toString().replace(/\s+/g,""),e="".concat(e.substring(0,17)),r.value="".concat(e,"  ").concat(n),document.body.appendChild(r),r.select(),r.readOnly=!0,r.id="copyInp",document.execCommand("Copy"),r.setAttribute("onfocus",this.copyFocus(r)),r.className="oInput",r.style.display="none",uni.showToast({icon:"none",title:"分享链接已复制成功"})},copyFocus:function(t){t.blur(),document.body.removeChild(t)},getUrl:function(){var t=/iPad|iPhone|iPod/.test(navigator.userAgent),e=window.location.href.split("#")[0];return t&&window.entryUrl&&!/wechatdevtools/.test(navigator.userAgent)&&(e=window.entryUrl),e}}}},"6f74":function(t,e,i){"use strict";var n=i("b95e");t.exports={computed:{user:function(){var t=this.$store.getters["session/get"]("userId");return t?this.$store.getters["jv/get"]("users/".concat(t)):{}}},methods:{getUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(new Date).getTime(),i=uni.getStorageSync(n.STORGE_GET_USER_TIME);if(t||(e-i)/1e3>60){var s={include:"groups,wechat"},a=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:a}}),this.$store.dispatch("jv/get",["users/".concat(a),{params:s}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(n.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var t=this,e=this.$store.getters["session/get"]("userId");if(e){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(e),{params:{include:"groups,wechat"}}]).then((function(e){t.$u.event.$emit("logind",e)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},a3ba:function(t,e,i){(e=i("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.invite[data-v-0e885bea]{position:fixed;top:%?0?%;right:%?0?%;left:%?0?%;margin-top:44px;font-size:%?30?%}.invite-tabs[data-v-0e885bea] .qui-tabs__item--active .qui-tabs__item__title{font-size:%?30?%}.invite-button[data-v-0e885bea]{position:fixed;right:0;bottom:%?40?%;left:0;width:%?670?%;height:%?90?%;margin:auto}.invite-button .btn[data-v-0e885bea]{font-size:%?30?%;line-height:%?90?%;color:var(--qui-FC-333);background:var(--qui-BG-2)}.popup-wrap[data-v-0e885bea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background:var(--qui-BG-2);border-radius:%?10?% %?10?% %?0?% %?0?%}.popup-wrap-con[data-v-0e885bea]{border-radius:%?10?% %?10?% %?0?% %?0?%}.popup-wrap-con-text[data-v-0e885bea]{width:100%;height:%?100?%;font-size:%?36?%;line-height:%?100?%;text-align:center}.popup-wrap-con-line[data-v-0e885bea]{border:%?2?% solid var(--qui-BG-ED)}.popup-wrap-space[data-v-0e885bea]{border:%?8?% solid var(--qui-BG-ED)}.popup-wrap-btn[data-v-0e885bea]{width:100%;height:%?100?%;font-size:%?30?%;line-height:%?100?%;text-align:center}',""]),t.exports=e},b469:function(t,e){t.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},cadb:function(t,e,i){"use strict";i("99af"),i("e25e"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.timestamp2day=e.time2DateAndHM=e.time2MinuteOrHour=void 0;e.time2MinuteOrHour=function(t){var e=new Date-new Date(t);return parseInt(parseInt(e/1e3,0)/60,0)<60?"".concat(Math.ceil(e/1e3/60),"分钟前"):parseInt(parseInt(parseInt(e/1e3,0)/60,0)/60,0)<16?"".concat(Math.ceil(e/1e3/60/60),"小时前"):t.replace(/T/," ").replace(/Z/,"").substring(0,16)};e.time2DateAndHM=function(t){var e=t.replace(/T/," ").replace(/Z/,"");return"".concat(e.substring(0,10)," ").concat(e.substring(11,16))};e.timestamp2day=function(t){var e=t-Math.round(new Date/1e3);return parseInt(e/86400,0)}},e036:function(t,e,i){var n=i("a3ba");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("4f06").default)("85113808",n,!0,{sourceMap:!1,shadowMode:!1})},e972:function(t,e,i){t.exports=i.p+"static/img/msg-404.e11dc2d7.svg"},f934:function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("99af"),i("b64b"),i("d3b7"),i("e25e"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("2909")),a=i("cadb"),r=n(i("31f2")),o=n(i("b469")),u=n(i("5b5f")),c=n(i("4c82")),p={components:{quiInvite:r.default},mixins:[o.default,u.default,c.default],data:function(){return{current:0,total:0,tabList:[{id:1,title:this.i18n.t("manage.nouse"),status:1},{id:2,title:this.i18n.t("manage.used"),status:2},{id:3,title:this.i18n.t("manage.overdue"),status:3},{id:4,title:this.i18n.t("manage.invalid"),status:0}],role:"",status:1,bottomData:[{text:this.i18n.t("home.wxShare"),icon:"icon-wx-friends",name:"wx"}],navbarHeight:0,isWeixin:"",inviteList:[],loadingType:"more",pageNum:1,pageSize:20}},onLoad:function(){this.getInviteList(1),this.getGroupList(),this.isWeixin=c.default.isWeixin().isWeixin},onShareAppMessage:function(t){return t.from,{title:this.forums.set_site.site_name,path:"/pages/site/partner-invite?code=".concat(this.code)}},onShareTimeline:function(){return{title:this.forums.set_site.site_name,query:""}},computed:{currentLoginId:function(){var t=this.$store.getters["session/get"]("userId");return parseInt(t,10)},allInviteList:function(){var t=[],e=this.$store.getters["jv/get"]("groups"),i=Object.keys(this.inviteList),n=Object.keys(e);if(this.inviteList&&i.length>0)for(var s=0;s<i.length;s+=1){var r=this.inviteList[i[s]],o=(0,a.timestamp2day)(r.endtime);if(1===r.status?r.time=this.i18n.t("manage.remainDay",{day:o}):r.time=this.i18n.t("manage.remain0Day"),n&&n.length>0)for(var u=0;u<n.length;u+=1){var c=e[n[u]];r.group_id.toString()===c._jv.id.toString()&&(r.title=c.name)}t.push(r)}return t},groupList:function(){for(var t=this.$store.getters["jv/get"]("groups"),e=[],i=Object.keys(t),n=0;n<i.length;n+=1)e.push(t[i[n]]);return e},userInfos:function(){return this.$store.getters["jv/get"]("users/".concat(this.currentLoginId))}},methods:{getInviteList:function(t){var e=this,i={"filter[status]":t,"page[number]":this.pageNum,"page[limit]":this.pageSize};this.$store.commit("jv/clearRecords",{_jv:{type:"invite"}}),this.$store.dispatch("jv/get",["invite",{params:i}]).then((function(t){t&&t._jv&&t._jv.json&&t._jv.json.data&&(e.total=t._jv.json.meta.total,e.inviteList=[].concat((0,s.default)(e.inviteList),(0,s.default)(t)),e.loadingType=t.length===e.pageSize?"more":"nomore")}))},getGroupList:function(){this.$store.commit("jv/clearRecords",{_jv:{type:"groups"}}),this.$store.dispatch("jv/get",["groups",{params:{"filter[type]":"invite"}}])},onClickItem:function(t){t.currentIndex!==this.current&&(this.current=t.currentIndex,this.status=this.tabList[t.currentIndex].status,this.pageNum=1,this.inviteList=[],this.getInviteList(this.tabList[t.currentIndex].status))},generate:function(){this.$refs.popup.open()},generateUrl:function(e){var i=this,n={_jv:{type:"invite"},type:"invite",group_id:parseInt(e._jv.id,10)};this.userInfos&&this.userInfos.groups.length>0&&this.forums.other.can_create_invite?this.$store.dispatch("jv/post",n).then((function(t){t&&(i.$refs.popup.close(),i.inviteList=[],i.pageNum=1,i.getInviteList(1))})).catch((function(e){t.log(e)})):this.$store.dispatch("jv/post",{_jv:{type:"userInviteCode"}}).then((function(t){t&&(i.$refs.popup.close(),i.inviteList=[],i.pageNum=1,i.getInviteList(1))})).catch((function(e){t.log(e)}))},setInvalid:function(t){var e=this;this.$store.dispatch("jv/delete","invite/".concat(t)).then((function(t){t&&(e.inviteList=[],e.pageNum=1,e.getInviteList(e.status),uni.showToast({title:e.i18n.t("manage.invalidLink"),duration:2e3}))}))},share:function(t){this.code=t,this.h5Share({title:this.forums.set_site.site_name,url:"pages/site/partner-invite?code=".concat(this.code)})},cancelShare:function(){this.$refs.popupShare.close()},cancelModify:function(){this.$refs.popup.close()},pullDown:function(){"more"===this.loadingType&&(this.pageNum+=1,this.getInviteList(this.status))}}};e.default=p}).call(this,i("5a52").default)}}]);