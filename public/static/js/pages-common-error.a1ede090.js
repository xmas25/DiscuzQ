(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-common-error"],{"0e58":function(e,n,t){"use strict";var i=t("d8f5");t.n(i).a},1004:function(e,n,t){(n=t("24fb")(!1)).push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page-message[data-v-5f589ee2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.page-message--icon[data-v-5f589ee2]{height:%?140?%;margin:%?140?% 0 %?40?%}',""]),e.exports=n},9965:function(e,n,t){"use strict";(function(e){var i;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return i}));try{i={quiButton:t("8397").default}}catch(n){if(-1===n.message.indexOf("Cannot find module")||-1===n.message.indexOf(".vue"))throw n;e.error(n.message),e.error("1. 排查组件名称拼写是否正确"),e.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),e.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-uni-view",{staticClass:"page-message"},[i("v-uni-image",{staticClass:"page-message--icon",attrs:{src:t("e972"),mode:"aspectFit","lazy-load":!0}}),i("qui-button",{attrs:{size:"medium"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleClick.apply(void 0,arguments)}}},[e._v("返回上一页")])],1)},r=[]}).call(this,t("5a52").default)},a7b7:function(e,n,t){"use strict";t.r(n);var i=t("c174"),a=t.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(r);n.default=a.a},c174:function(e,n,t){"use strict";t("c975"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{}},methods:{handleClick:function(){var e=getCurrentPages();0===e.indexOf(e[e.length-1])?uni.redirectTo({url:"/pages/home/index"}):uni.navigateBack({delta:1})}}};n.default=i},d8f5:function(e,n,t){var i=t("1004");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t("4f06").default)("b9ea832e",i,!0,{sourceMap:!1,shadowMode:!1})},daf7:function(e,n,t){"use strict";var i=t("9965");t.d(n,"a",(function(){return i.a})),t.d(n,"b",(function(){return i.b})),t.d(n,"c",(function(){return i.c}))},e972:function(e,n,t){e.exports=t.p+"static/img/msg-404.e11dc2d7.svg"},fe78:function(e,n,t){"use strict";t.r(n);var i=t("daf7"),a=t("a7b7");for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t("0e58");var c=t("f0c5"),o=Object(c.a)(a.default,i.b,i.c,!1,null,"5f589ee2",null,!1,i.a,void 0);n.default=o.exports}}]);