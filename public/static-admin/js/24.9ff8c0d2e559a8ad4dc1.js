(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"0p7B":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=n(e("QbLZ")),i=n(e("ohWj"));function n(t){return t&&t.__esModule?t:{default:t}}e("lpfh"),a.default=(0,r.default)({name:"water-mark-set-view"},i.default)},"1xrn":function(t,a,e){"use strict";e.d(a,"a",(function(){return r})),e.d(a,"b",(function(){return i}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"site-set-box"},[e("Card",{attrs:{header:"开启水印："}},[e("CardRow",{attrs:{description:"是否开启水印"}},[e("el-switch",{attrs:{"active-color":"#336699","inactive-color":"#bbbbbb"},model:{value:t.switchBtn,callback:function(a){t.switchBtn=a},expression:"switchBtn"}})],1)],1),t._v(" "),e("Card",{attrs:{header:"图片："}},[e("CardRow",{attrs:{description:"请选择图片（.png格式）进行上传"}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","http-request":t.uploaderLogo,"show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload},on:{change:t.handleFile}},[t.imageUrl?e("div",{staticClass:"avatar"},[e("img",{staticClass:"avatar-LogoImage",attrs:{src:t.imageUrl}})]):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),e("el-button",{style:{opacity:t.deleteBtn?"1":"0",cursor:t.deleteBtn?"pointer":"auto"},attrs:{type:"text"},on:{click:t.deleteImage}},[t._v("删除")])],1)],1),t._v(" "),e("Card",{attrs:{header:"水印位置："}},[e("CardRow",{attrs:{description:"请选择水印所在的位置"}},[e("div",{staticClass:"posi-list"},t._l(t.posiList,(function(a,r){return e("span",{key:r,staticClass:"posi-child",class:{posiactive:r==t.posiCurrent},on:{click:function(e){return t.posiClick(a.val,r)}}},[t._v(t._s(a.name))])})),0)])],1),t._v(" "),e("Card",{attrs:{header:"边距："}},[e("CardRow",{attrs:{description:"请选择水印距离图片的边距"}},[e("div",{staticClass:"proportion-box"},[e("span",[t._v("垂直")]),t._v(" "),e("el-input",{attrs:{size:"small",type:"number"},nativeOn:{"!blur":function(a){return t.onblurFun(a)}},model:{value:t.verticalSpacing,callback:function(a){t.verticalSpacing=a},expression:"verticalSpacing"}}),t._v(" "),e("span",{staticClass:"marL10"},[t._v("PX")])],1),t._v(" "),e("div",{staticClass:"proportion-box"},[e("span",[t._v("水平")]),t._v(" "),e("el-input",{attrs:{size:"small",type:"number"},nativeOn:{"!blur":function(a){return t.onblurFun(a)}},model:{value:t.horizontalSpacing,callback:function(a){t.horizontalSpacing=a},expression:"horizontalSpacing"}}),t._v(" "),e("span",{staticClass:"marL10"},[t._v("PX")])],1)])],1),t._v(" "),e("Card",{staticClass:"footer-btn"},[e("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.submi}},[t._v("提交")])],1)],1)},i=[]},"2Ebl":function(t,a,e){"use strict";e.r(a);var r=e("0p7B"),i=e.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(n);a.default=i.a},G17p:function(t,a,e){"use strict";e("lIJ1")},PPjN:function(t,a,e){"use strict";e.r(a);var r=e("1xrn"),i=e("2Ebl");for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);e("G17p");var s=e("KHd+"),o=Object(s.a)(i.default,r.a,r.b,!1,null,null,null);a.default=o.exports},lIJ1:function(t,a,e){},ohWj:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=n(e("4gYi")),i=n(e("pNQN"));function n(t){return t&&t.__esModule?t:{default:t}}a.default={data:function(){return{switchBtn:!1,deleteBtn:!1,imageUrl:"",imgWidth:0,imgHeight:0,posiCurrent:-1,posiList:[{name:"左上",val:1},{name:"中上",val:2},{name:"右上",val:3},{name:"左中",val:4},{name:"居中",val:5},{name:"右中",val:6},{name:"左下",val:7},{name:"中下",val:8},{name:"右下",val:9}],waterMarkPosi:0,verticalSpacing:0,horizontalSpacing:0}},created:function(){this.waterMarkSet()},methods:{waterMarkSet:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(a){a.errors?t.$message.error(a.errors[0].code):(t.switchBtn=a.readdata._data.watermark.watermark,t.imageUrl=a.readdata._data.watermark.watermark_image,""!==t.imageUrl&&null!=t.imageUrl&&(t.deleteBtn=!0),""!==a.readdata._data.watermark.position&&null!=a.readdata._data.watermark.position&&0!==a.readdata._data.watermark.position&&(t.posiCurrent=a.readdata._data.watermark.position-1,t.waterMarkPosi=a.readdata._data.watermark.position),t.verticalSpacing=a.readdata._data.watermark.vertical_spacing,t.horizontalSpacing=a.readdata._data.watermark.horizontal_spacing)}))},submi:function(){var t=this,a=/^[0-9]*$/;if(this.switchBtn){if(!this.imageUrl)return void this.$message.error("请上传水印图片");if(!this.waterMarkPosi)return void this.$message.error("请选择水印位置");if(a.test(this.verticalSpacing)>9999)return void this.$message.error("请输入正确格式的垂直边距值");if(a.test(this.horizontalSpacing)>9999)return void this.$message.error("请输入正确格式的水平边距值");if(this.verticalSpacing>9999)return void this.$message.error("垂直边距值不能超过9999");if(this.horizontalSpacing>9999)return void this.$message.error("水平边距值不能超过9999")}this.appFetch({url:"settings",method:"post",data:{data:[{attributes:{key:"watermark",value:this.switchBtn,tag:"watermark"}},{attributes:{key:"position",value:this.waterMarkPosi,tag:"watermark"}},{attributes:{key:"vertical_spacing",value:this.verticalSpacing,tag:"watermark"}},{attributes:{key:"horizontal_spacing",value:this.horizontalSpacing,tag:"watermark"}}]}}).then((function(a){a.errors?t.$message.error(a.errors[0].code):(t.$message({message:"提交成功",type:"success"}),t.annexSet())})).catch((function(t){}))},beforeAvatarUpload:function(t){var a="image/png"===t.type,e=t.size/1024/1024<2;return a?e?a&&e:(this.$message.warning("上传头像图片大小不能超过 2MB!"),e):(this.$message.warning("上传水印图片只能是 PNG 格式!"),a)},uploaderLogo:function(t){var a=this,e=new FormData;e.append("logo",t.file),e.append("type","watermark_image"),this.appFetch({url:"logo",method:"post",data:e}).then((function(t){t.errors?a.$message.error(t.errors[0].code):(a.imageUrl=t.readdata._data.default.logo,a.$message({message:"上传成功",type:"success"}),a.deleteBtn=!0)})).catch((function(t){}))},deleteImage:function(t,a){var e=this;!1!==this.deleteBtn&&(this.imageUrl="",this.appFetch({url:"logo",method:"delete",data:{type:"watermark_image"}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.$message("删除成功"),e.deleteBtn=!1)})).catch((function(t){})))},handleAvatarSuccess:function(t,a){},handleFile:function(){},posiClick:function(t,a){this.posiCurrent=a,this.waterMarkPosi=t}},components:{Card:r.default,CardRow:i.default}}}}]);