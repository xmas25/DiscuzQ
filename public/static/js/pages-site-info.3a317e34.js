(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-site-info"],{"0459":function(e,t,i){"use strict";var n=i("3012");i.d(t,"a",(function(){return n.a})),i.d(t,"b",(function(){return n.b})),i.d(t,"c",(function(){return n.c}))},"04cd":function(e,t,i){var n=i("d741");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i("4f06").default)("23efce62",n,!0,{sourceMap:!1,shadowMode:!1})},"06a1":function(e,t,i){"use strict";i("99af"),i("4160"),i("b64b"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.getCurUrl=void 0;t.getCurUrl=function(){var e=getCurrentPages(),t=e[e.length-1].route,i=e[e.length-1].options,n="";return Object.keys(i).forEach((function(e){n="".concat(n,"&").concat(e,"=").concat(i[e])})),n.length>0&&(n="?".concat(n.substr(1))),"/".concat(t).concat(n)}},"185d":function(e,t,i){e.exports=i.p+"static/img/auth.bac1d347.svg"},"1cb5":function(e,t,i){e.exports=i.p+"static/img/yihuida.4252644e.svg"},"245f":function(e,t,i){"use strict";(function(t){var n=i("4ea4"),s=n(i("6f74")),a=i("b95e"),o=n(i("4c82"));e.exports={mixins:[s.default,o.default],methods:{getForum:function(){var e=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(i){i&&(t.log("forum",i),e.forum=i)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.redirectTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){o.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var e=this;uni.login({success:function(i){if("login:ok"===i.errMsg){var n=i.code;uni.getUserInfo({success:function(t){var i={data:{attributes:{js_code:n,iv:t.iv,encryptedData:t.encryptedData}}};e.$store.dispatch("session/setParams",i)},fail:function(e){t.log(e)}})}},fail:function(e){t.log(e)}})},mpLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",e),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",e),uni.setStorageSync("rebind",t),uni.setStorageSync("h5_wechat_login",1),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(e,t){var i=e;if(""===e.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===e.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var n=uni.getStorageSync("token");""!==n&&(i.data.attributes.token=n),this.login(i,t)}},getLoginBindParams:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var n=e;if(""===e.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===e.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===i&&(n.data.attributes.rebind=1);var s=uni.getStorageSync("token");""!==s&&(n.data.attributes.token=s),this.login(n,t)}},login:function(e,i){var n=this;this.$store.dispatch("session/h5Login",e).then((function(e){if(e&&e.data&&e.data.data&&e.data.data.id&&(n.logind(),n.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(e){e&&e.set_site&&e.set_site.site_mode!==a.SITE_PAY&&uni.getStorage({key:"page",success:function(e){t.log("resData",e),uni.redirectTo({url:e.data})}}),e&&e.set_site&&e.set_site.site_mode===a.SITE_PAY&&n.user&&!n.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:i,duration:2e3})),e&&e.data&&e.data.errors){if("401"===e.data.errors[0].status||"402"===e.data.errors[0].status||"500"===e.data.errors[0].status){var s=n.i18n.t("core.".concat(e.data.errors[0].code));uni.showToast({icon:"none",title:s,duration:2e3})}if("403"===e.data.errors[0].status||"422"===e.data.errors[0].status){var o=n.i18n.t(e.data.errors[0].detail[0]);uni.showToast({icon:"none",title:o,duration:2e3})}}})).catch((function(e){return t.log(e)}))}}}}).call(this,i("5a52").default)},"26ad":function(e,t,i){"use strict";i.r(t);var n=i("0459"),s=i("87fc");for(var a in s)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(a);i("28a6");var o=i("f0c5"),r=Object(o.a)(s.default,n.b,n.c,!1,null,"df81857e",null,!1,n.a,void 0);t.default=r.exports},"28a6":function(e,t,i){"use strict";var n=i("04cd");i.n(n).a},3012:function(e,t,i){"use strict";(function(e){var n;i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));try{n={quiPage:i("29c4").default,quiSiteThread:i("d6c1").default,quiButton:i("8397").default,quiLoginOut:i("8edf").default,quiPay:i("35fd").default,uniPopup:i("1c89").default,quiIcon:i("895d").default,quiToast:i("2039").default}}catch(t){if(-1===t.message.indexOf("Cannot find module")||-1===t.message.indexOf(".vue"))throw t;e.error(t.message),e.error("1. 排查组件名称拼写是否正确"),e.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),e.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("qui-page",{staticClass:"site",attrs:{"data-qui-theme":e.theme,header:!1}},[i("qui-site-thread",{attrs:{"share-url":"pages/site/info"}}),i("v-uni-view",{staticClass:"site-invite"},[e.isLogin?i("v-uni-view",{staticClass:"site-invite__detail"},[i("v-uni-text",[e._v(e._s(""+e.i18n.t("user.dear")+(e.user&&e.user.username)+" ,"))]),i("v-uni-text",[e._v(e._s(e.i18n.t("site.onelaststepjoinnow")))]),i("v-uni-text",{staticClass:"site-invite__detail__bold"},[e._v(e._s(e.forums.set_site&&e.forums.set_site.site_name))]),i("v-uni-text",[e._v(e._s(e.i18n.t("site.site")))])],1):e._e()],1),i("v-uni-view",{staticClass:"site-submit"},[i("v-uni-view",[i("v-uni-view",{staticClass:"site-submit__price"},[e._v(e._s("¥"+(e.forums.set_site&&e.forums.set_site.site_price||0)))]),i("v-uni-view",{staticClass:"site-submit__expire"},[e._v(e._s(e.forums.set_site&&e.forums.set_site.site_expire?e.i18n.t("site.periodvalidity")+" "+(e.forums.set_site&&e.forums.set_site.site_expire)+" "+e.i18n.t("site.day"):e.i18n.t("site.permanent")))])],1),e.isLogin?i("v-uni-view",{staticClass:"site-submit__btn"},[i("qui-login-out"),i("qui-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPay.apply(void 0,arguments)}}},[e._v(e._s(e.i18n.t("user.paytojion")))])],1):i("v-uni-view",{staticClass:"site-submit__btn"},[2!==e.register_type?i("qui-button",{attrs:{size:"small"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit("login")}}},[e._v(e._s(e.i18n.t("user.loginnow")))]):e._e(),2!==e.register_type?i("qui-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit("register")}}},[e._v(e._s(e.i18n.t("user.registertojoin")))]):e._e(),2===e.register_type?i("qui-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v(e._s(e.i18n.t("site.join")+e.i18n.t("site.site")))]):e._e()],1)],1),e.payShowStatus?i("v-uni-view",[i("qui-pay",{ref:"payShow",attrs:{money:e.forums.set_site&&parseFloat(e.forums.set_site.site_price),"wallet-status":!0,balance:10,"current-pay-type":0,"pay-type-data":e.payTypeData},on:{radioMyHead:function(t){arguments[0]=t=e.$handleEvent(t),e.radioMyHead.apply(void 0,arguments)},onInput:function(t){arguments[0]=t=e.$handleEvent(t),e.onInput.apply(void 0,arguments)},paysureShow:function(t){arguments[0]=t=e.$handleEvent(t),e.paysureShow.apply(void 0,arguments)}}})],1):e._e(),i("uni-popup",{ref:"codePopup",staticClass:"code-popup-box",attrs:{type:"center"}},[e.qrcodeShow?i("v-uni-view",{staticClass:"code-content"},[i("v-uni-view",{staticClass:"code-title"},[e._v(e._s(e.pay.payNow))]),i("v-uni-view",{staticClass:"code-pay-money"},[i("v-uni-view",{staticClass:"code-yuan"},[e._v("￥")]),e._v(e._s(e.forums.set_site&&e.forums.set_site.site_price))],1),i("v-uni-view",{staticClass:"code-type-box"},[i("v-uni-view",{staticClass:"code-type-tit"},[e._v(e._s(e.pay.payType))]),i("v-uni-view",{staticClass:"code-type"},[i("qui-icon",{staticClass:"code-type-icon",attrs:{name:"icon-wxPay",size:"36",color:"#09bb07"}}),i("v-uni-view",{staticClass:"code-type-text"},[e._v(e._s(e.pay.wxPay))])],1)],1),i("v-uni-image",{staticClass:"code-img",attrs:{src:e.codeUrl}}),i("v-uni-view",{staticClass:"code-tip"},[e._v(e._s(e.pay.wechatIdentificationQRcode))])],1):e._e()],1),i("uni-popup",{ref:"wechatPopup",attrs:{type:"center"}},[i("uni-popup-dialog",{attrs:{type:"warn",content:e.wechatTip,"before-close":!0},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.handleWechatClickCancel.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.handleWechatClickOk.apply(void 0,arguments)}}})],1),i("qui-toast",{ref:"toast"})],1)},a=[]}).call(this,i("5a52").default)},"35ab":function(e,t,i){"use strict";i("d3b7"),i("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,i=0;i<e.length;i++)t+=e.charCodeAt(i);var n=function(e,t,i){var n,s,a,o=Math.floor(6*e),r=6*e-o,u=i*(1-t),c=i*(1-r*t),d=i*(1-(1-r)*t);switch(o%6){case 0:n=i,s=d,a=u;break;case 1:n=c,s=i,a=u;break;case 2:n=u,s=i,a=d;break;case 3:n=u,s=c,a=i;break;case 4:n=d,s=u,a=i;break;case 5:n=i,s=u,a=c}return{r:Math.floor(255*n),g:Math.floor(255*s),b:Math.floor(255*a)}}(t%360/360,.3,.9);return""+n.r.toString(16)+n.g.toString(16)+n.b.toString(16)}},"368d":function(e,t,i){e.exports=i.p+"static/img/msg-warning.0c78a551.svg"},"5b5f":function(e,t,i){"use strict";var n=i("4ea4");i("99af"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),i("1276");var s=n(i("53ca")),a=i("b95e"),o=i("ce40");e.exports={methods:{wxShare:function(e){var t=this.getUrl(),i=this.$store.getters["jv/get"]("forums/1");i.passport&&!i.passport.offiaccount_close||this.$store.dispatch("jv/get",["offiaccount/jssdk?url=".concat(encodeURIComponent(t)),{}]).then((function(n){var s=n.appId,a=n.nonceStr,r=n.signature,u=n.timestamp;o.config({debug:!1,appId:s,timestamp:u,nonceStr:a,signature:r,jsApiList:["updateAppMessageShareData","updateTimelineShareData","hideMenuItems","showMenuItems"]}),o.ready((function(){var n={title:e.title||"Discuz!Q",desc:e.desc||i.set_site.site_introduction,link:t,imgUrl:e.logo||i.set_site.site_favicon};o.updateAppMessageShareData(n),o.updateTimelineShareData(n)}))}))},h5Share:function(e){var t="";switch((0,s.default)(e)){case"undefined":t="Discuz!Q";break;case"string":t=e;break;default:t=e.title||"Discuz!Q"}var i=e.id?"?id=".concat(e.id):"",n="".concat(a.DISCUZ_REQUEST_HOST).concat(e.url).concat(i),o=document.createElement("input");t=(t=(t=(t=t.toString().replace(/<img(?:.|\s)*?>/g,"")).toString().replace(/(<\/?br.*?>)/gi,"")).toString().replace(/(<\/?p.*?>)/gi,"")).toString().replace(/\s+/g,""),t="".concat(t.substring(0,17)),o.value="".concat(t,"  ").concat(n),document.body.appendChild(o),o.select(),o.readOnly=!0,o.id="copyInp",document.execCommand("Copy"),o.setAttribute("onfocus",this.copyFocus(o)),o.className="oInput",o.style.display="none",uni.showToast({icon:"none",title:"分享链接已复制成功"})},copyFocus:function(e){e.blur(),document.body.removeChild(e)},getUrl:function(){var e=/iPad|iPhone|iPod/.test(navigator.userAgent),t=window.location.href.split("#")[0];return e&&window.entryUrl&&!/wechatdevtools/.test(navigator.userAgent)&&(t=window.entryUrl),t}}}},"5df8":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAYAAADbCvnoAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAJKADAAQAAAABAAAAKgAAAAC29n+nAAAEUUlEQVRYCe1YS4gUSRB9mVU1qKjbCLr+wB1BBBk/oAheZEb8I0sj4llc15OHOaws+IEWLwMiDB50/BxmLl482B4Eb7ONehE/BxXxIK7gF12dGT+g3VVpRHZ3TVZNdlV179BeDOiuyIisiFcvoyKzW8CQAiC7crlzv/f0/GGY26mWpJntV2Dgv7GxHaat3XoI6DRwgpL/2W4A8XwaEIHpE8BfceePGLtngAIl/vtHJLflJGKiUs7nu5UQw1Fr20bRom5b2oREYVEnzGmrqyVAcudOiOXLE4Gy3zlwIHGOzdkcINfVMeT69RCLF1fjSXsIsWABZHd3dU4T39UMGW5w9u8HlIJ//vz4bALonT0L//JlODti/XTaNOr7Et7AwPj8mlY+dAh4/36CnQ2ZAalnz+Ds3g3/woUwkFizBpgxA8GdO8DYWGhnRaxcCWbIv3gxYteDz58n2moWO9+W6cGtW0AuB7FsWeh1aOnU3bvAq1dQr19DVSrhB76vGTVtWqcHw9evYYy4kpkhfPgA9eQJJLNCIqZOhVi9GpWTJ/WY2ZBr12pdf02ZopfM3bt33Eaaf+0amO1G0lxjnDsXePsWLoEIhoeh7t2DevGCshAbMZFbt8LZtw/lXbtinsRhKTNDcsMGYOZMHU3QVXZ1IRACYtUqYGQEctOmSCYxa1aVoePHI3Ye+FeuQN2+PcHOhsyAxIoVEPPm0VoRqVxLixZBMkCqG39oCAGxlVnevWs4NTMgv79fBxHr1sE9eBD+1asI6ElDKZcBBpwi6sGDCW+keUtmQPWbnHpNdHQAs2frmmKf3LgRcssW4OPH+tTo1XGA6dNROXoU6uHDqM8YNQWI3ypeKnz6BGfbNjibN6N85Ajw5o0OqZ4/R6W31whvqAsXwjt1yjDY1aYAMTvB9esQnZ0IbtyApLryjh1D+fBh3XPEnDlwiQGrcBtgoW6fJJkbI2+WYskS+JcuVeNRzVT6+qCoyTFbWkgPHj+2ftTTp0k4Ql9mhjQ7N28CL1+GN+PLF1R4yahuuOfwOCiVxv2GJqiHye3bDYtdzQaINkmunYq5sdbjmUVMb5l3hg7F/0OyAQqC6hZBRZso5Nc7uWWSmD8fLi1xmmQDRFHU/ftpsaAIOL+BWjyP2i6Fr22kYulSbVajo4lxMgNKjGJx8vHD5XMPCwOlZdeFzXtfgrQESNH5h3uOKQE1O2EcutSjR/Dp8FYXxUcU7tIp0txunxJsEtw/fwalkpi5U6dGmqQJPwGlETmZDJWEUj2eUp20ow9R4uQO2ABZS30oEouSU+8Y9IrFfwz7HpXP574BvUIIPiD9YvgS1db7EAGhzaEgisV/kzI0CazUPKCMQOIgGRiduvfQf0+9lJSOnVbJDGhUKdVPp+jBNEasaWLGb/k8AytYgKX+LqsD6ScgI7G4LQ87isVBunnQBqzRkhVrjEwqkEZPUPsbsWD181pbHW0wUu7fvgOL85EkK3XjYwAAAABJRU5ErkJggg=="},"6f74":function(e,t,i){"use strict";var n=i("b95e");e.exports={computed:{user:function(){var e=this.$store.getters["session/get"]("userId");return e?this.$store.getters["jv/get"]("users/".concat(e)):{}}},methods:{getUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(new Date).getTime(),i=uni.getStorageSync(n.STORGE_GET_USER_TIME);if(e||(t-i)/1e3>60){var s={include:"groups,wechat"},a=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:a}}),this.$store.dispatch("jv/get",["users/".concat(a),{params:s}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(n.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var e=this,t=this.$store.getters["session/get"]("userId");if(t){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(t),{params:{include:"groups,wechat"}}]).then((function(t){e.$u.event.$emit("logind",t)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},"864e":function(e,t,i){"use strict";var n=i("4ea4");i("99af"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(i("9558")),a={topic:function(e){var t=(0,s.default)(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="topic"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return e&&e.replace(t,(function(e){return e.replace(t,(function(e,t,i){var n="/pages/topic/content?id=".concat(t);return'<a href="'.concat(n,'" class="content-topic">').concat(i,"</a> ")}))}))},usermention:function(e){var t=(0,s.default)(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="member"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return e&&e.replace(t,(function(e){return e.replace(t,(function(e,t,i){var n="/pages/profile/index?userId=".concat(t);return'<a href="'.concat(n,'" class="content-member">').concat(i,"</a> ")}))}))},attachment:function(e,t){return e&&e.replace(/\[attach\](.*?)\[\/attach\]/g,(function(e,i){var n=t.$store.getters["jv/get"]("attachments/".concat(i));return n.url&&(e='<a href="'.concat(n.url,'" class="content-attachment">').concat(n.attachment,"</a>")),e}))}};var o={parse:function(e,t){if(e){for(var i in a)e=a[i](e,t);return e}}};t.default=o},"87fc":function(e,t,i){"use strict";i.r(t);var n=i("bbf7"),s=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t.default=s.a},"913c":function(e,t){e.exports="data:image/png;base64,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"},b469:function(e,t){e.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},bbf7:function(e,t,i){"use strict";(function(e){var n=i("4ea4");i("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(i("b469")),a=n(i("245f")),o=n(i("840a")),r=n(i("4c82")),u=i("b95e"),c=i("06a1"),d=null,p={components:{uniPopupDialog:o.default},mixins:[s.default,a.default,r.default],data:function(){return{payShowStatus:!0,codeUrl:"",shareShow:!1,isAnonymous:"0",qrcodeShow:!1,isWeixin:"",isPhone:!1,wxRes:"",browser:0,payStatus:!1,orderSn:"",isLogin:this.$store.getters["session/get"]("isLogin"),wechatTip:this.i18n.t("discuzq.wechatBind"),payTypeData:[{name:this.i18n.t("pay.wxPay"),icon:"icon-wxPay",color:"#09bb07",value:"0"}]}},computed:{pay:function(){return this.i18n.t("pay")},userId:function(){return this.$store.getters["session/get"]("userId")},user:function(){return this.$store.getters["jv/get"]("users/".concat(this.userId))},register_type:function(){var e=this.forums.set_reg&&this.forums.set_reg.register_type;return this.isWeixin||2!==e||(e=0),e}},created:function(){this.$u.event.$on("refresh",(function(){window.location.reload()}))},onLoad:function(){this.$u.event.$on("logind",(function(e){e.paid&&uni.redirectTo({url:"/pages/home/index"})})),this.isWeixin=r.default.isWeixin().isWeixin,this.isPhone=r.default.isWeixin().isPhone,this.browser=1,this.userId&&this.userInfo()},onUnload:function(){clearInterval(d)},onShareAppMessage:function(e){return e.from,{title:this.forums.set_site.site_name}},onShareTimeline:function(){return{title:this.forums.set_site.site_name,query:""}},methods:{userInfo:function(){this.$store.dispatch("jv/get",["users/".concat(this.userId),{params:{include:"groups"}}]).then((function(e){e.paid&&(window.location.href="/pages/home/index")}))},radioMyHead:function(e){this.isAnonymous=e},onInput:function(e){this.value=e,this.creatOrder(this.forums.set_site.site_price,1,e)},handleWechatClickOk:function(){this.isWeixin?this.wxh5Login(0,0):uni.showToast({icon:"none",title:this.i18n.t("user.unLogin"),duration:2e3})},handleWechatClickCancel:function(){this.$refs.wechatPopup.close()},paysureShow:function(){uni.setStorage({key:"page",data:"/pages/site/info"}),!0!==this.isWeixin||void 0!==this.user.wechat?!0===this.isWeixin&&this.user.wechat&&""===this.user.wechat.mp_openid?this.$refs.wechatPopup.open():this.creatOrder(this.forums.set_site.site_price,1,this.value):this.$refs.wechatPopup.open()},creatOrder:function(e,t,i){var n=this,s={_jv:{type:"orders"},type:t,amount:e,is_anonymous:this.isAnonymous};this.$store.dispatch("jv/post",s).then((function(e){n.orderSn=e.order_sn,0===n.browser?n.orderPay(13,i,n.orderSn,"0"):n.isWeixin&&n.isPhone?n.orderPay(12,i,n.orderSn,"1"):n.isPhone?n.orderPay(11,i,n.orderSn,"2"):n.orderPay(10,i,n.orderSn,"3")}))},orderPay:function(e,t,i,n){var s,a=this;s={_jv:{type:"trade/pay/order/".concat(i)},payment_type:e},this.$store.dispatch("jv/post",s).then((function(e){if(a.wxRes=e,"0"===n)a.wechatPay(e.wechat_js.timeStamp,e.wechat_js.nonceStr,e.wechat_js.package,e.wechat_js.signType,e.wechat_js.paySign);else if("1"===n)"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",a.onBridgeReady(e),!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",a.onBridgeReady(e)),document.attachEvent("onWeixinJSBridgeReady",a.onBridgeReady(e))):a.onBridgeReady(e);else if("2"===n){var t=encodeURI("".concat(u.DISCUZ_REQUEST_HOST,"pages/site/payH5"));window.location.href="".concat(e.wechat_h5_link,"&redirect_url=").concat(t)}else"3"===n&&e&&(a.codeUrl=e.wechat_qrcode,a.payShowStatus=!1,a.$refs.codePopup.open(),a.qrcodeShow=!0,d=setInterval((function(){1!==a.payStatus?(a.getOrderStatus(a.orderSn,n),uni.hideLoading()):clearInterval(d)}),3e3))}))},getOrderStatus:function(e,t){var i=this;this.$store.dispatch("jv/get",["orders/".concat(e),{custom:{loading:!1}}]).then((function(e){i.payStatus=e.status,1===i.payStatus&&(i.payShowStatus=!1,i.coverLoading=!1,"3"===t&&(i.$refs.codePopup.close(),i.qrcodeShow=!1),window.location.href="/pages/home/index",i.$refs.toast.show({message:i.p.paySuccess}))})).catch((function(){i.coverLoading=!1,i.$refs.toast.show({message:i.pay.payFail})}))},onBridgeReady:function(e){var t=this;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e.wechat_js.appId,timeStamp:e.wechat_js.timeStamp,nonceStr:e.wechat_js.nonceStr,package:e.wechat_js.package,signType:"MD5",paySign:e.wechat_js.paySign},(function(e){"get_brand_wcpay_request:ok"===e.err_msg?window.location.href="/pages/home/index":("get_brand_wcpay_request:cancel"===e.err_msg||"get_brand_wcpay_request:fail"===e.err_msg)&&clearInterval(d)})),d=setInterval((function(){1!==t.payStatus?t.getOrderStatus(t.orderSn,"1"):clearInterval(d)}),3e3)},wechatPay:function(t,i,n,s,a){uni.requestPayment({provider:"wxpay",timeStamp:t,nonceStr:i,package:n,signType:s,paySign:a,success:function(){uni.redirectTo({url:"/pages/home/index"})},fail:function(t){e.log("fail:".concat(JSON.stringify(t)))}})},submit:function(e){var t=this.register_type;if(uni.setStorage({key:"page",data:(0,c.getCurUrl)()}),2===t)this.h5LoginMode();else if(1===t)uni.navigateTo({url:"/pages/user/phone-login-register"});else{var i="";"login"===e&&(i="/pages/user/login"),"register"===e&&(i="/pages/user/register"),uni.navigateTo({url:i})}},toPay:function(){var e=this;this.payStatus=!1,this.payShowStatus=!0,this.$nextTick((function(){e.$refs.payShow.payClickShow()}))},close:function(){this.$refs.auth.close()}}};t.default=p}).call(this,i("5a52").default)},cadb:function(e,t,i){"use strict";i("99af"),i("e25e"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.timestamp2day=t.time2DateAndHM=t.time2MinuteOrHour=void 0;t.time2MinuteOrHour=function(e){var t=new Date-new Date(e);return parseInt(parseInt(t/1e3,0)/60,0)<60?"".concat(Math.ceil(t/1e3/60),"分钟前"):parseInt(parseInt(parseInt(t/1e3,0)/60,0)/60,0)<16?"".concat(Math.ceil(t/1e3/60/60),"小时前"):e.replace(/T/," ").replace(/Z/,"").substring(0,16)};t.time2DateAndHM=function(e){var t=e.replace(/T/," ").replace(/Z/,"");return"".concat(t.substring(0,10)," ").concat(t.substring(11,16))};t.timestamp2day=function(e){var t=e-Math.round(new Date/1e3);return parseInt(t/86400,0)}},d741:function(e,t,i){(t=i("24fb")(!1)).push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.site[data-v-df81857e] .popup-pay .pay-title,\n.site[data-v-df81857e] .popup-pay .pay-radio{display:none}.site[data-v-df81857e] .popup-pay .pay-btn{margin-top:%?40?%;margin-bottom:%?40?%}.site[data-v-df81857e] .popup-pay-type{padding-top:%?40?%}.site[data-v-df81857e] .popup-pay-type .pay-title{display:none}.site[data-v-df81857e] .popup-pay-type .pay-tip{display:none}.site[data-v-df81857e] .popup-pay-type .pay-type-chi{margin-bottom:%?40?%}.site[data-v-df81857e] .header{height:auto;margin-bottom:%?30?%;background:var(--qui-BG-2);border-bottom:%?2?% solid var(--qui-BOR-ED)}.site[data-v-df81857e] .header .circleDet{padding:%?60?% %?30?%;opacity:1}.site[data-v-df81857e] .header .circleDet-txt{color:var(--qui-FC-34);opacity:.49}.site[data-v-df81857e] .header .logo{height:%?75?%;padding-top:%?71?%}.site[data-v-df81857e] .header .circleDet-num,\n.site[data-v-df81857e] .header .circleDet-share{color:var(--qui-FC-333)}.site[data-v-df81857e] .themeCount .themeItem__footer{display:none}.site[data-v-df81857e] .themeCount .addAsk{top:0}.site[data-v-df81857e] .themeCount .themeItem{padding-left:0;margin:0;border-top:none}.site[data-v-df81857e] .site-theme__last .themeItem{border-bottom:none}[data-v-df81857e] .qui-button--button{margin-left:%?20?%;font-size:%?30?%}.code-content[data-v-df81857e]{position:fixed;top:10%;left:11%;z-index:22;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:78%;padding:%?40?%;background:var(--qui-BG-FFF);border-radius:%?16?%;box-sizing:border-box}.code-content .code-title[data-v-df81857e]{text-align:center}.code-content .code-pay-money[data-v-df81857e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:%?36?%;padding-bottom:%?36?%;font-size:%?70?%}.code-content .code-pay-money .code-yuan[data-v-df81857e]{font-size:%?48?%;line-height:%?66?%}.code-type-box[data-v-df81857e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?24?% 0 %?34?%;line-height:%?36?%;border-top:1px solid var(--qui-BG-ED)}.code-type-box .code-type-tit[data-v-df81857e]{color:var(--qui-FC-AAA)}.code-type-box .code-type[data-v-df81857e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.code-type-box .code-type .code-type-icon[data-v-df81857e]{font-size:%?36?%}.code-type-box .code-type .code-type-text[data-v-df81857e]{padding-left:%?12?%}.code-img[data-v-df81857e]{-webkit-align-self:center;align-self:center;width:%?380?%;height:%?380?%}.code-tip[data-v-df81857e]{padding:%?14?% 0 %?20?%}.site-invite[data-v-df81857e]{padding:%?30?% %?60?%;padding-bottom:%?160?%;text-align:center}.site-invite__detail__bold[data-v-df81857e]{margin:0 %?5?%;font-weight:700}.site-invite__detail[data-v-df81857e]{width:90%;font-size:%?30?%}.site-submit[data-v-df81857e]{position:fixed;bottom:0;z-index:100;width:100%;height:%?130?%;padding:%?20?% %?24?%;background:var(--qui-BG-2);box-shadow:%?0?% %?-3?% %?6?% rgba(0,0,0,.05);box-sizing:border-box}.site-submit__price[data-v-df81857e]{margin-top:%?10?%;font-size:%?36?%;color:var(--qui-BG-FF)}.site-submit__expire[data-v-df81857e]{font-size:%?26?%;color:var(--qui-FC-333)}.site-submit__btn[data-v-df81857e]{position:absolute;top:%?20?%;right:%?24?%}',""]),e.exports=t},e972:function(e,t,i){e.exports=i.p+"static/img/msg-404.e11dc2d7.svg"}}]);