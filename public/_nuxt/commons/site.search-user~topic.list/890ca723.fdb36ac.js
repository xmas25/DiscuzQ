(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{526:function(t,e,o){},527:function(t,e,o){},538:function(t,e,o){},564:function(t,e,o){"use strict";o.r(e);var r=o(561),n={name:"Advertising",data:function(){return{qrcode:null,site_name:""}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},watch:{forums:{handler:function(t){t&&t.set_site&&(this.site_name=t.set_site.site_name?t.set_site.site_name:"Discuz! Q")},deep:!0}},mounted:function(){this.site_name=this.forums&&this.forums.set_site&&this.forums.set_site.site_name?this.forums.set_site.site_name:"Discuz! Q",this.createQrcode(window.location.href)},destroyed:function(){this.qrcode=null},methods:{createQrcode:function(link){var t=this;this.qrcode=null,this.$nextTick((function(){t.qrcode=new r(t.$refs.qrcode,{width:70,height:70,text:link})}))}}},c=(o(568),o(13)),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"adv-container"},[e("div",{ref:"qrcode",staticClass:"qrcode"}),this._v(" "),e("div",{staticClass:"adv-info"},[e("div",{staticClass:"adv-title"},[this._v(" 扫一扫，访问移动端")]),this._v("\n    "+this._s(this.site_name)+"\n  ")])])}),[],!1,null,"038d2a1a",null);e.default=component.exports},565:function(t,e,o){"use strict";o.r(e);var r={name:"Copyright",data:function(){return{year:"2019",site_record_code:""}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},mounted:function(){var t=window.currentTime||new Date;this.year=t.getFullYear()}},n=(o(569),o(13)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"copyright"},[o("div",{staticClass:"info"},[o("span",[t._v("Powered By")]),t._v(" "),o("a",{staticClass:"site",attrs:{href:"https://discuz.com",target:"_blank"}},[t._v("Discuz! Q")]),t._v(" "),o("span",{staticClass:"block"},[t._v("© "+t._s(t.year))])]),t._v(" "),t.forums&&t.forums.set_site&&(t.forums.set_site.site_record||t.forums.set_site.site_record_code)?o("div",{staticClass:"id"},[o("div",{staticClass:"site-record-code"},[o("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v(t._s(t.forums.set_site?t.forums.set_site.site_record:""))])]),t._v(" "),t.forums&&t.forums.set_site&&t.forums.set_site.site_record_code?o("div",{staticClass:"site-record-code"},[o("a",{attrs:{href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode="+(t.forums&&t.forums.set_site&&t.forums.set_site.site_record_code.replace(/[^0-9]/gi,"")),target:"_blank"}},[t._v(t._s(t.forums.set_site.site_record_code))])]):t._e()]):t._e()])}),[],!1,null,"68b79e04",null);e.default=component.exports},568:function(t,e,o){"use strict";var r=o(526);o.n(r).a},569:function(t,e,o){"use strict";var r=o(527);o.n(r).a},589:function(t,e,o){"use strict";o.r(e);var r={name:"UserItem",props:{item:{type:Object,default:function(){}},show:{type:String,default:"all"},isFollow:{type:Boolean,default:!1}},data:function(){return{}},methods:{toUser:function(){this.$router.push("/user/".concat(this.item.id))}}},n=(o(596),o(13)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"user-item-container",class:{simple:"simple"===t.show}},[o("div",{staticClass:"flex user-item",on:{click:function(e){return e.stopPropagation(),t.toUser(e)}}},[o("avatar",{attrs:{user:t.item,size:"simple"===t.show?40:45}}),t._v(" "),o("div",{staticClass:"info"},[o("div",{staticClass:"flex"},[o("span",{staticClass:"name text-hidden"},[t._v(t._s(t.item.username))]),t._v(" "),"all"===t.show&&t.item.groupName?o("span",{staticClass:"role"},[t._v(t._s(t.item.groupName))]):t._e()]),t._v(" "),o("div",{staticClass:"flex count"},["all"===t.show?o("div",{staticClass:"count-item"},[t._v(t._s(t.$t("profile.topic"))+" "+t._s(t.item.threadCount||0))]):t._e(),t._v(" "),"all"===t.show?o("div",{staticClass:"count-item"},[t._v(t._s(t.$t("profile.following"))+" "+t._s(t.item.followCount||0))]):t._e(),t._v(" "),o("div",{staticClass:"count-item"},[t._v(t._s(t.$t("profile.followers"))+" "+t._s(t.item.fansCount||0))])])])],1),t._v(" "),t.isFollow?o("el-button",{staticClass:"follow",attrs:{type:"text"}},[t._v("\n    "+t._s(t.$t("profile.following"))+"\n  ")]):t._e()],1)}),[],!1,null,"5777916a",null);e.default=component.exports;installComponents(component,{Avatar:o(252).default})},596:function(t,e,o){"use strict";var r=o(538);o.n(r).a}}]);