(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"3ntJ":function(e,t,a){"use strict";a.r(t);var r=a("Hx4s"),n=a.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(s);t.default=n.a},EY1w:function(e,t,a){"use strict";a.r(t);var r=a("L1/4"),n=a("3ntJ");for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);var i=a("KHd+"),o=Object(i.a)(n.default,r.a,r.b,!1,null,null,null);t.default=o.exports},Hx4s:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(a("QbLZ"));a("lL+3");var n=s(a("QMoF"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.default)({name:"report-processed-view"},n.default)},"KHd+":function(e,t,a){"use strict";function r(e,t,a,r,n,s,i,o){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),r&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):n&&(l=o?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:c}}a.d(t,"a",(function(){return r}))},"L1/4":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"report-manage-box"},[a("div",{staticClass:"report-manage-header"},[a("div",{staticClass:"report-manage-header__section"},[a("span",{staticClass:"report-manage-header__section-title"},[e._v("举报人：")]),e._v(" "),a("el-input",{attrs:{size:"medium",clearable:""},model:{value:e.searchData.userName,callback:function(t){e.$set(e.searchData,"userName",t)},expression:"searchData.userName"}})],1),e._v(" "),a("div",{staticClass:"report-manage-header__section"},[a("span",{staticClass:"report-manage-header__section-title"},[e._v("举报类型：")]),e._v(" "),a("el-select",{attrs:{clearable:"",size:"medium"},model:{value:e.searchData.reportType,callback:function(t){e.$set(e.searchData,"reportType",t)},expression:"searchData.reportType"}},e._l(e.reportTypeData,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),a("div",{staticClass:"report-manage-header__section"},[a("span",{staticClass:"report-manage-header__section-title time-title"},[e._v("举报时间范围：")]),e._v(" "),a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange",align:"right","unlink-panels":"",size:"medium","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.searchData.reportTime,callback:function(t){e.$set(e.searchData,"reportTime",t)},expression:"searchData.reportTime"}})],1),e._v(" "),a("div",{staticClass:"report-manage-header__section"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.searchClick}},[e._v("搜索")])],1)]),e._v(" "),a("div",{staticClass:"report-manage-content"},[a("div",{staticClass:"report-manage-content__header"},[a("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}}),e._v(" "),a("p",{staticClass:"report-manage-content__header-title"},[e._v("举报列表")])],1),e._v(" "),e._l(e.reportList,(function(t){return a("ContArrange",{key:t._data.id,staticClass:"report-manage-content__table",attrs:{establish:t.user?t.user._data.username:"该用户被删除",userId:t.user?t.user._data.id:"该用户被删除",time:e.formatDate(t._data.created_at),type:e.getType(t._data.type)}},[a("div",{staticClass:"report-manage-content__table-side",attrs:{slot:"side"},slot:"side"},[a("el-checkbox",{attrs:{label:t._data.id},on:{change:function(t){return e.handleCheckedCitiesChange()}},model:{value:e.checkedReport,callback:function(t){e.checkedReport=t},expression:"checkedReport"}})],1),e._v(" "),a("div",{staticClass:"report-manage-content__table-main",attrs:{slot:"main"},slot:"main"},[a("p",[e._v("\n\t\t\t\t\t\t页面地址：\n\t\t\t\t\t\t"),a("a",{staticStyle:{color:"#3E4043"},attrs:{href:e.getUrl(t.user._data.id,t._data.thread_id,t._data.post_id).href,target:"_blank"}},[e._v("\n\t\t\t\t\t\t\t"+e._s(e.getUrl(t.user._data.id,t._data.thread_id,t._data.post_id).url)+"\n\t\t\t\t\t\t")])]),e._v(" "),a("p",[e._v("举报时间："+e._s(e.formatDate(t._data.updated_at)))]),e._v(" "),a("p",[e._v("举报理由：")]),e._v(" "),a("p",[e._v(e._s(t._data.reason))])]),e._v(" "),a("div",{staticClass:"report-manage-content__table-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.deleteOperation(1,t._data.id)}}},[e._v("删除")])],1)])})),e._v(" "),a("tableNoList",{directives:[{name:"show",rawName:"v-show",value:e.reportList.length<1,expression:"reportList.length < 1"}]}),e._v(" "),e.pageData.pageCount>1?a("Page",{attrs:{"current-page":e.pageData.pageNumber,"page-size":e.pageData.pageSize,total:e.pageData.pageTotal},on:{"current-change":e.handleCurrentChange}}):e._e()],2),e._v(" "),a("div",{staticClass:"report-manage-footer"},[a("el-button",{attrs:{size:"small",type:"primary",loading:e.subLoading},on:{click:function(t){return e.deleteOperation(2)}}},[e._v("全部删除")])],1)])},n=[]},QMoF:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a("Dt3C")),n=o(a("rWG0")),s=o(a("7qpD")),i=o(a("VVfg"));function o(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{isIndeterminate:!1,checkAll:!1,reportListAll:[],checkedReport:[],reportList:[],pageData:{pageSize:10,pageCount:1,pageNumber:1,pageTotal:0},searchData:{userName:"",reportType:null,reportTime:["",""],status:0},reportTypeData:[{name:"主题",id:1},{name:"评论/回复",id:2}],subLoading:!1}},methods:{handleCheckAllChange:function(e){this.checkedReport=e?this.reportListAll:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(){var e=this.checkedReport.length;this.checkAll=e===this.reportListAll.length,this.isIndeterminate=e>0&&e<this.reportListAll.length},formatDate:function(e){return this.$dayjs(e).format("YYYY-MM-DD HH:mm")},getType:function(e){return 0===e?"个人主页":1===e?"主题":2===e?"评论/回复":void 0},getUrl:function(e,t,a){var r="";return{href:r=0===a?0===t?"/pagthreadIDes/profile/index?userId="+e:"/topic/index?id="+t:"/pages/topic/comment?threadId="+t+"&commentId="+a,url:window.origin+r}},searchClick:function(){this.searchData.reportTime=null==this.searchData.reportTime?["",""]:this.searchData.reportTime,this.searchData.reportType=""===this.searchData.reportType?null:this.searchData.reportType,this.pageData.pageNumber=1,this.getReportList(1)},getReportList:function(e){var t=this,a=this.searchData;this.appFetch({url:"reports",method:"get",data:{"filter[username]":a.userName,"filter[status]":1,"filter[type]":a.reportType,"filter[start_time]":a.reportTime[0],"filter[end_time]":a.reportTime[1],"page[number]":e,"page[limit]":this.pageData.pageSize}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):(t.reportList=e.readdata,t.pageData.pageTotal=e.meta.total,t.pageData.pageCount=e.meta.pageCount,t.reportListAll=[],t.reportList.forEach((function(e){t.reportListAll.push(e._data.id)})))}))},handleCurrentChange:function(e){this.checkedReport=[],this.pageData.pageNumber=e,this.getReportList(e)},deleteOperation:function(e,t){var a=this,r="";if(1===e)r=t;else{if(this.checkedReport.length<1)return void this.$message({showClose:!0,message:"操作举报列表为空，请选择举报信息",type:"warning"});this.subLoading=!0,r=this.checkedReport.toString()}this.appFetch({url:"reportsBatch",splice:"/"+r,method:"delete"}).then((function(e){}));setTimeout((function(){a.subLoading=!1,a.$message({message:"删除成功",type:"success"}),1!==e&&(a.checkAll=!1),a.getReportList(Number(i.default.getLItem("pageNumber"))||1)}),300)},getCreated:function(e){e?this.getReportList(1):this.getReportList(Number(i.default.getLItem("pageNumber"))||1)}},created:function(){this.getUrl()},beforeDestroy:function(){i.default.setLItem("pageNumber",1)},beforeRouteEnter:function(e,t,a){a((function(a){e.name!==t.name&&null!==t.name?a.getCreated(!0):a.getCreated(!1)}))},components:{ContArrange:r.default,Page:n.default,tableNoList:s.default}}}}]);