(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"10pL":function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return n}));var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{staticClass:"index-container-box"},[i("el-header",{staticClass:"index-header",attrs:{height:"80px"}},[i("h1",{staticClass:"index-header__icon"},[i("a",{attrs:{href:"/admin/home"}},[i("img",{attrs:{src:"/static-admin/images/admin-logo-x2.png",alt:"Logo"}})])]),e._v(" "),i("div",{staticClass:"index-header__nav"},[i("ul",{staticClass:"menu-demo"},e._l(e.navList,(function(t,s){return i("li",{key:s,staticClass:"menu-item",class:e.navSelect===t.name?"is-active":"",on:{click:function(i){return e.menuClick(t)}}},[e._v("\n          "+e._s(t.title)+"\n        ")])})),0)]),e._v(" "),i("div",{staticClass:"index-header__info-menu"},[i("span",[e._v("您好，"+e._s(e.userName))]),e._v(" "),i("span",{on:{click:e.quitClick}},[e._v(" [退出]")]),e._v(" "),i("span",{style:{marginLeft:"20px"},on:{click:e.clearCache}},[e._v("清空缓存")]),e._v(" "),i("span",{staticClass:"site-home"},[i("a",{attrs:{href:e.appConfig.baseUrl,target:"_blank"}},[e._v(" "+e._s(e.$t("admin.siteHome")))])])])]),e._v(" "),i("el-container",{staticClass:"index-main-con"},[i("el-aside",{staticClass:"index-main-con__side",attrs:{width:"256px"}},[i("div",{staticClass:"index-main-con__side-title"},[i("span",[e._v(e._s(e.sideTitle))])]),e._v(" "),i("div",{staticClass:"index-main-con__side-list"},[i("ul",{staticClass:"index-side-ul"},e._l(e.sideList,(function(t){return i("li",{staticClass:"index-side-li",class:e.sideSelect===t.name?"is-active":"",on:{click:function(i){return e.sideClick(t)}}},[i("span",{staticClass:"iconfont",class:t.icon}),e._v(" "),i("span",[e._v(e._s(t.title))])])})),0)]),e._v(" "),i("div",{staticClass:"index-main-con__side-footer"},[i("p",[e._v("Powered by Discuz! Q")])])]),e._v(" "),i("el-main",{ref:"indexMainCon",staticClass:"index-main-con__main"},[i("div",{staticClass:"index-main-con__main-title"},[i("h1",[e._v(e._s(e.indexTitle))]),e._v(" "),i("div",{staticClass:"index-main-con__main-title__class"},[e.sideSubmenu.length>0?i("i"):e._e(),e._v(" "),e._l(e.sideSubmenu,(function(t,s){return i("span",{key:s,class:t.title===e.sideSubmenuSelect?"is-active":"",on:{click:function(i){return e.sideSubmenuClick(t.title)}}},[e._v(e._s(t.title))])}))],2)]),e._v(" "),i("div",{staticClass:"router-con"},[i("router-view")],1)])],1)],1)},n=[]},"2b24":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(i("QbLZ"));i("L5x9");var n=a(i("L/az"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=(0,s.default)({name:"adminIndex"},n.default)},Elsq:function(e,t,i){"use strict";i.r(t);var s=i("2b24"),n=i.n(s);for(var a in s)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(a);t.default=n.a},"KHd+":function(e,t,i){"use strict";function s(e,t,i,s,n,a,u,r){var h,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),s&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),u?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},c._ssrRegister=h):n&&(h=r?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),h)if(c.functional){c._injectStyles=h;var o=c.render;c.render=function(e,t){return h.call(t),o(e,t)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,h):[h]}return{exports:e,options:c}}i.d(t,"a",(function(){return s}))},"L/az":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(i("VVfg")),n=a(i("y0A3"));function a(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{indexTitle:"管理中心首页",sideTitle:"首页",navList:[{id:0,title:"首页",name:"home",submenu:[{id:0,title:"管理中心首页",name:"controlCenter",icon:"iconshouye"}]},{id:1,title:"全局",name:"global",submenu:[{id:0,title:"站点设置",name:"siteSet",icon:"iconzhandianshezhi"},{id:1,title:"注册与登录设置",name:"signUpSet",icon:"iconzhuceshezhi"},{id:2,title:"第三方登录设置",name:"worthMentioningSet",icon:"icondisanfangdenglushezhi"},{id:3,title:"支付设置",name:"paySet",icon:"iconzhifushezhi"},{id:4,title:"附件设置",name:"annexSet",icon:"iconfujianshezhi"},{id:5,title:"水印设置",name:"waterMarkSet",icon:"iconwatermark"},{id:6,title:"内容过滤设置",name:"contentFilteringSet",icon:"iconneirongguolvshezhi"},{id:7,title:"腾讯云设置",name:"tencentCloudSet",icon:"icontengxunyun"},{id:8,title:"通知设置",name:"noticeSet",icon:"icontongzhi",submenu:[{id:81,title:"系统通知",name:"noticeSet",icon:"icontongzhi"},{id:82,title:"微信通知",name:"noticeSet",icon:"icontongzhi"}]},{id:9,title:"其他服务设置",name:"otherServiceSet",icon:"iconqitafuwushezhi"}]},{id:2,title:"用户",name:"user",submenu:[{id:20,title:"用户管理",name:"userManage",icon:"iconyonghuguanli"},{id:21,title:"用户角色",name:"userRol",icon:"iconjiaoseguanli"},{id:22,title:"用户审核",name:"userReview",icon:"iconyonghushenhe"}]},{id:3,title:"内容",name:"cont",submenu:[{id:0,title:"内容分类",name:"contClass",icon:"iconneirongfenlei"},{id:1,title:"内容管理",name:"contManage",icon:"iconneirongguanli",submenu:[{id:11,title:"最新主题",name:"contManage",icon:"iconneirongguanli"},{id:13,title:"最新回复",name:"contManage",icon:"iconneirongguanli"}]},{id:2,title:"内容审核",name:"contReview",icon:"iconneirongshenhe",submenu:[{id:21,title:"主题审核",name:"contReview",icon:"iconneirongshenhe"},{id:22,title:"回复审核",name:"contReview",icon:"iconneirongshenhe"}]},{id:3,title:"话题管理",name:"topicManagement",icon:"icontopicmanagement"},{id:4,title:"举报管理",name:"reportManage",icon:"iconjubaoguanli",submenu:[{id:41,title:"最新举报",name:"reportManage",icon:"iconjubaoguanli"},{id:42,title:"已处理记录",name:"reportManage",icon:"iconjubaoguanli"}]},{id:5,title:"回收站",name:"recycleBin",icon:"iconhuishouzhan",submenu:[{id:51,title:"主题",name:"recycleBin",icon:"iconhuishouzhan"},{id:52,title:"回复",name:"recycleBin",icon:"iconhuishouzhan"}]}]},{id:4,title:"财务",name:"finance",submenu:[{id:40,title:"资金明细",name:"fundDetails",icon:"iconzijinmingxi"},{id:41,title:"订单记录",name:"orderRecord",icon:"icondingdanjilu"},{id:42,title:"提现管理",name:"withdrawMange",icon:"icontixianguanli",submenu:[{id:421,title:"提现申请",name:"withdrawMange",icon:"icontixianguanli"},{id:422,title:"提现设置",name:"withdrawMange",icon:"icontixianguanli"}]},{id:43,title:"财务统计",name:"financialStatistics",icon:"iconcaiwutongji"}]}],navSelect:"",sideList:[],sideSelect:"",sideSubmenu:[],sideSubmenuSelect:"",userName:""}},methods:{clearCache:function(){var e=this;this.appFetch({url:"clearCache",method:"delete",data:{}}).then((function(t){t.errors?t.errors[0].detail?e.$message.error(t.errors[0].code+"\n"+t.errors[0].detail[0]):e.$message.error(t.errors[0].code):e.$message({message:"缓存清空完毕",type:"success"})})).catch((function(e){}))},menuClick:function(e){switch(this.sideTitle=e.title,this.navSelect=e.name,e.name){case"home":this.sideList=this.navList[0].submenu,this.sideSelect=this.navList[0].submenu[0].name,this.indexTitle=this.navList[0].submenu[0].title,this.sideSubmenu=void 0===this.navList[0].submenu[0].submenu?[]:this.navList[0].submenu[0].submenu,this.$router.push({path:"/admin/home"});break;case"global":this.sideList=this.navList[1].submenu,this.sideSelect=this.navList[1].submenu[0].name,this.indexTitle=this.navList[1].submenu[0].title,this.sideSubmenu=void 0===this.navList[0].submenu[0].submenu?[]:this.navList[0].submenu[0].submenu,this.$router.push({path:"/admin/site-set"});break;case"user":this.sideList=this.navList[2].submenu,this.sideSelect=this.navList[2].submenu[0].name,this.indexTitle=this.navList[2].submenu[0].title,this.sideSubmenu=void 0===this.navList[2].submenu[0].submenu?[]:this.navList[0].submenu[0].submenu,this.$router.push({path:"/admin/user-manage"});break;case"cont":this.sideList=this.navList[3].submenu,this.sideSelect=this.navList[3].submenu[0].name,this.indexTitle=this.navList[3].submenu[0].title,this.sideSubmenu=void 0===this.navList[0].submenu[0].submenu?[]:this.navList[0].submenu[0].submenu,this.$router.push({path:"/admin/cont-class"});break;case"finance":this.sideList=this.navList[4].submenu,this.sideSelect=this.navList[4].submenu[0].name,this.indexTitle=this.navList[4].submenu[0].title,this.sideSubmenu=void 0===this.navList[0].submenu[0].submenu?[]:this.navList[0].submenu[0].submenu,this.$router.push({path:"/admin/fund-details"});break;default:this.sideList=[]}},sideClick:function(e){switch(this.sideSelect=e.name,this.indexTitle=e.title,this.sideSubmenu=[],e.name){case"controlCenter":this.$router.push({path:"/admin/home"});break;case"siteSet":this.$router.push({path:"/admin/site-set",query:{name:"站点设置"}});break;case"signUpSet":this.$router.push({path:"/admin/sign-up-set"});break;case"worthMentioningSet":this.$router.push({path:"/admin/worth-mentioning-set"});break;case"paySet":this.$router.push({path:"/admin/pay-set"});break;case"annexSet":this.$router.push({path:"/admin/annex-set"});break;case"waterMarkSet":this.$router.push({path:"/admin/water-mark-set"});break;case"contentFilteringSet":this.$router.push({path:"/admin/content-filter-set"});break;case"tencentCloudSet":this.$router.push({path:"/admin/tencent-cloud-set"});break;case"noticeSet":this.sideSubmenu=this.navList[1].submenu[8].submenu,this.sideSubmenuSelect=this.navList[1].submenu[8].submenu[0].title,this.$router.push({path:"/admin/system-notice"});break;case"adminUserManage":this.$router.push({path:"/admin/user-manage-set"});break;case"adminRoleManage":this.$router.push({path:"/admin/role-manage-set"});break;case"userManage":this.$router.push({path:"/admin/user-manage"});break;case"userRol":this.$router.push({path:"/admin/user-rol"});break;case"userReview":this.$router.push({path:"/admin/user-review"});break;case"contClass":this.$router.push({path:"/admin/cont-class"});break;case"contManage":this.sideSubmenu=this.navList[3].submenu[1].submenu,this.sideSubmenuSelect=this.navList[3].submenu[1].submenu[0].title,this.$router.push({path:"/admin/cont-manage"});break;case"contReview":this.sideSubmenu=this.navList[3].submenu[2].submenu,this.sideSubmenuSelect=this.navList[3].submenu[2].submenu[0].title,this.$router.push({path:"/admin/cont-review"});break;case"recycleBin":this.sideSubmenu=this.navList[3].submenu[4].submenu,this.sideSubmenuSelect=this.navList[3].submenu[4].submenu[0].title,this.$router.push({path:"/admin/recycle-bin"});break;case"topicManagement":this.$router.push({path:"/admin/topic-management"});break;case"reportManage":this.sideSubmenu=this.navList[3].submenu[4].submenu,this.sideSubmenuSelect=this.navList[3].submenu[4].submenu[0].title,this.$router.push({path:"/admin/report-manage"});break;case"fundDetails":this.$router.push({path:"/admin/fund-details"});break;case"orderRecord":this.$router.push({path:"/admin/order-record"});break;case"withdrawMange":this.sideSubmenu=this.navList[4].submenu[2].submenu,this.sideSubmenuSelect=this.navList[4].submenu[2].submenu[0].title,this.$router.push({path:"/admin/withdrawal-application"});break;case"financialStatistics":this.$router.push({path:"/admin/financial-statistics"});break;case"otherServiceSet":this.$router.push({path:"/admin/other-service-set"})}},jumpIndex:function(){n.default.baseUrl,this.$router.push({path:"/admin"})},sideSubmenuClick:function(e){switch(e){case"系统通知":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/system-notice"});break;case"微信通知":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/wx-notice"});break;case"最新主题":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/cont-manage"});break;case"最新回复":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/latest-reply"});break;case"主题审核":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/cont-review"});break;case"回复审核":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/reply-review"});break;case"最新举报":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/report-manage"});break;case"已处理记录":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/report-processed"});break;case"主题":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/recycle-bin"});break;case"回复":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/recycle-bin-reply"});break;case"提现申请":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/withdrawal-application"});break;case"提现设置":this.sideSubmenuSelect=e,this.$router.push({path:"/admin/withdrawal-setting"});break;default:this.$message.error("没有当前页面，跳转404页面")}},setDataStatus:function(){var e=this.$router.history.current.meta.attribution,t=this.$router.history.current.meta.name,i=this.$router.history.current.meta.title;switch(e){case"首页":this.navSelect=this.navList[0].name,this.indexTitle=i,this.sideTitle=e,this.sideSelect=t,this.sideList=this.navList[0].submenu;break;case"全局":this.navSelect=this.navList[1].name,this.indexTitle=i,this.sideTitle=e,this.sideSelect=t,this.sideList=this.navList[1].submenu;break;case"用户":this.navSelect=this.navList[2].name,this.indexTitle=i,this.sideTitle=e,this.sideSelect=t,this.sideList=this.navList[2].submenu;break;case"内容":this.navSelect=this.navList[3].name,this.indexTitle=i,this.sideTitle=e,this.sideSelect=t,this.sideList=this.navList[3].submenu;break;case"财务":this.navSelect=this.navList[4].name,this.indexTitle=i,this.sideTitle=e,this.sideSelect=t,this.sideList=this.navList[4].submenu;break;default:this.$message.error("获取菜单出错")}var s=this.$router.history.current.meta.alias;if(s)switch(s){case"系统通知":this.sideSubmenu=this.navList[1].submenu[8].submenu,this.sideSubmenuSelect=this.navList[1].submenu[8].submenu[0].title;break;case"微信通知":this.sideSubmenu=this.navList[1].submenu[8].submenu,this.sideSubmenuSelect=this.navList[1].submenu[8].submenu[1].title;break;case"最新主题":this.sideSubmenu=this.navList[3].submenu[1].submenu,this.sideSubmenuSelect=this.navList[3].submenu[1].submenu[0].title;break;case"最新回复":this.sideSubmenu=this.navList[3].submenu[1].submenu,this.sideSubmenuSelect=this.navList[3].submenu[1].submenu[1].title;break;case"主题审核":this.sideSubmenu=this.navList[3].submenu[2].submenu,this.sideSubmenuSelect=this.navList[3].submenu[2].submenu[0].title;break;case"回复审核":this.sideSubmenu=this.navList[3].submenu[2].submenu,this.sideSubmenuSelect=this.navList[3].submenu[2].submenu[1].title;break;case"最新举报":this.sideSubmenu=this.navList[3].submenu[4].submenu,this.sideSubmenuSelect=this.navList[3].submenu[4].submenu[0].title;break;case"已处理记录":this.sideSubmenu=this.navList[3].submenu[4].submenu,this.sideSubmenuSelect=this.navList[3].submenu[4].submenu[1].title;break;case"主题":this.sideSubmenu=this.navList[3].submenu[5].submenu,this.sideSubmenuSelect=this.navList[3].submenu[5].submenu[0].title;break;case"回复":this.sideSubmenu=this.navList[3].submenu[5].submenu,this.sideSubmenuSelect=this.navList[3].submenu[5].submenu[1].title;break;case"提现申请":this.sideSubmenu=this.navList[4].submenu[2].submenu,this.sideSubmenuSelect=this.navList[4].submenu[2].submenu[0].title;break;case"提现设置":this.sideSubmenu=this.navList[4].submenu[2].submenu,this.sideSubmenuSelect=this.navList[4].submenu[2].submenu[1].title;break;default:this.sideSubmenu=[],this.$message.error("当下没有侧边栏子菜单")}},quitClick:function(){localStorage.clear(),this.$router.push({path:"/admin/login"})}},created:function(){this.setDataStatus(),this.userName=s.default.getLItem("username")},watch:{$route:function(){this.setDataStatus()}}}},L5x9:function(e,t,i){},VzPW:function(e,t,i){"use strict";i.r(t);var s=i("10pL"),n=i("Elsq");for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);var u=i("KHd+"),r=Object(u.a)(n.default,s.a,s.b,!1,null,null,null);t.default=r.exports}}]);