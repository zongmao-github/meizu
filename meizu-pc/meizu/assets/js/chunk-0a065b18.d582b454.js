(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a065b18"],{"0150":function(t,e,s){"use strict";var i=s("4053"),a=s.n(i);a.a},4053:function(t,e,s){},"4d62":function(t,e,s){"use strict";var i=s("ade9"),a=s.n(i);a.a},"634a":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-container"},[s("div",{staticClass:"order-content"},[s("div",{staticClass:"column-box"},[s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-1","unique-opened":""},on:{open:t.handleOpen,close:t.handleClose}},[s("el-submenu",{attrs:{index:"1"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-document"}),s("span",[t._v("订单中心")])]),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"1-1"}},[t._v("我的订单")]),s("el-menu-item",{attrs:{index:"1-2"}},[t._v("我的回购单")])],1)],2),s("el-submenu",{attrs:{index:"2"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-user"}),s("span",[t._v("个人中心")])]),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"2-1"}},[t._v("地址管理")]),s("el-menu-item",{attrs:{index:"2-2"}},[t._v("我的收藏")]),s("el-menu-item",{attrs:{index:"2-3"}},[t._v("消息提醒")]),s("el-menu-item",{attrs:{index:"2-4"}},[t._v("建议反馈")])],1)],2),s("el-submenu",{attrs:{index:"3"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-wallet"}),s("span",[t._v("资产中心")])]),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"3-1"}},[t._v("我的优惠券")]),s("el-menu-item",{attrs:{index:"3-2"}},[t._v("我的红包")]),s("el-menu-item",{attrs:{index:"3-3"}},[t._v("我的回购金")])],1)],2),s("el-submenu",{attrs:{index:"4"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-service"}),s("span",[t._v("服务中心")])]),s("el-menu-item-group",[s("el-menu-item",{attrs:{index:"4-1"}},[t._v("退款/退换货跟踪")]),s("el-menu-item",{attrs:{index:"4-2"}},[t._v("以旧换新")])],1)],2)],1)],1),s("div",{staticClass:"show-order-box"},[s("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"全部订单",name:"first"}}),s("el-tab-pane",{attrs:{label:"待发货",name:"second"}}),s("el-tab-pane",{attrs:{label:"已发货",name:"third"}}),s("el-tab-pane",{attrs:{label:"其他",name:"fourth"}})],1),s("div",{staticClass:"show-order-detail"},[s("div",{staticClass:"show-order-title"},[s("ul",{staticClass:"common-ul"},[s("li",{staticClass:"one"},[s("el-select",{staticStyle:{width:"135px"},attrs:{size:"mini",placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),s("li",{staticClass:"two"},[t._v("订单明细")]),s("li",{staticClass:"three"},[t._v("售后")]),s("li",{staticClass:"four"},[t._v("金额")]),s("li",{staticClass:"five"},[t._v("状态")]),s("li",{staticClass:"six"},[t._v("操作")])])]),t._l(t.orderData,(function(e,i){return s("div",{key:i,staticClass:"one-order-detail"},[s("div",{staticClass:"one-order-top"},[s("ul",{staticClass:"common-ul"},[s("li",{staticClass:"two"},[s("span",{staticStyle:{color:"#8c8c8c"}},[t._v("下单时间：")]),s("span",{staticStyle:{"margin-right":"20px"}},[t._v(t._s(e.buyTime))]),s("span",{staticStyle:{color:"#8c8c8c"}},[t._v("订单号：")]),s("span",[t._v(t._s(e.orderNumber))])]),t._m(0,!0),s("li",{staticClass:"four"}),s("li",{staticClass:"five"}),s("li",{staticClass:"six"})])]),s("div",{staticClass:"one-order-content"},[s("ul",{staticClass:"common-ul"},[s("li",{staticClass:"one"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.shopInfo.img,expression:"item.shopInfo.img"}],attrs:{alt:e.shopInfo.content}})]),s("li",{staticClass:"two"},[s("p",[t._v(t._s(e.shopInfo.content))]),s("p",[t._v("￥"+t._s(e.shopInfo.price.toFixed(2))+"x"+t._s(e.shopInfo.num))])]),s("li",{staticClass:"four"},[s("p",[t._v("￥"+t._s(e.price.toFixed(2)))])]),s("li",{staticClass:"five"},[s("p",[t._v(t._s(0===e.state?"已取消":1===e.state?"进行中":"已完成"))])]),s("li",{staticClass:"six"},[s("el-link",{attrs:{underline:!1},on:{click:function(){t.showDialog=!0}}},[t._v("查看详情")])],1)])])])}))],2),s("div",{staticStyle:{"text-align":"right","margin-top":"10px"}},[s("el-pagination",{attrs:{background:"","page-size":3,layout:"total, prev, pager, next",total:10*t.orderData.length}})],1)],1)]),s("m-footer"),s("order-detail",{attrs:{"show-dialog":t.showDialog},on:{"update:showDialog":function(e){t.showDialog=e},"update:show-dialog":function(e){t.showDialog=e}}})],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"three",staticStyle:{cursor:"pointer",color:"#008cff"}},[s("i",{staticClass:"el-icon-service"},[t._v("联系客服")])])}],l=s("f71e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"orderDetail-container"},[s("el-dialog",{staticClass:"common-dialog",attrs:{title:"订单详情",visible:t.showDialog,width:"50%","before-close":t.handleClose},on:{"update:visible":function(e){t.showDialog=e}}},[s("div",[s("el-steps",{attrs:{active:4,"align-center":""}},[s("el-step",{attrs:{icon:"el-icon-success",title:"提交订单",description:"2017-11-01 12:53:45"}}),s("el-step",{attrs:{icon:"el-icon-success",title:"买家已付款",description:"2017-11-01 12:54:00"}}),s("el-step",{attrs:{icon:"el-icon-success",title:"发货中",description:"2017-11-01 13:48:45"}}),s("el-step",{attrs:{icon:"el-icon-success",title:"交易成功",description:"2017-11-02 14:54:07"}})],1)],1),s("div",{staticClass:"gaishu"},[s("p",{staticClass:"gaishu-title"},[t._v("订单状态: "),s("span",[t._v("订单完成")])]),s("p",{staticClass:"gaishu-content"},[s("i",{staticClass:"el-icon-s-promotion"}),t._v("百城速递 "),s("span",[t._v("订单已交易完成，欢迎再次光临魅族商城。")])])]),s("p",{staticStyle:{"margin-top":"20px"}},[t._v("物流信息")]),s("el-divider"),s("div",{staticClass:"wuliu-box"},[s("p",{staticClass:"orderNumber"},[t._v("顺丰：782453647788")]),s("p",{staticClass:"wuliu-tip"},[t._v("* 物流信息仅供参考，准确信息可前往该物流官网查询。")])]),s("div",{staticClass:"timeline-box"},[s("el-timeline",t._l(t.activities,(function(e,i){return s("el-timeline-item",{key:i,attrs:{placement:"top",icon:e.icon,type:e.type,color:e.color,size:e.size,timestamp:e.timestamp}},[s("div",{staticClass:"show-time-detail"},t._l(e.content,(function(e,i){return s("p",{key:i},[s("span",{staticClass:"time"},[t._v(t._s(e.time))]),s("span",{staticClass:"content"},[t._v(t._s(e.content))])])})),0)])})),1)],1),s("el-divider"),s("div",{staticClass:"zhifu-box"},[s("p",{staticClass:"orderNumber"},[t._v("订单号：3142536475686978")]),s("p",{staticClass:"zhifu-type"},[t._v("支付方式：支付宝")])]),t._l(t.orderData,(function(e,i){return s("div",{key:i,staticClass:"one-order-detail"},[s("div",{staticClass:"one-order-top"},[s("ul",{staticClass:"common-ul"},[s("li",{staticClass:"two"},[t._v("供应商：魅族")]),s("li",{staticClass:"three",staticStyle:{cursor:"pointer",color:"#008cff"}},[s("i",{staticClass:"el-icon-service"},[t._v("联系客服")])]),s("li",{staticClass:"four"},[t._v("单价")]),s("li",{staticClass:"five"},[t._v("数量")]),s("li",{staticClass:"six"},[t._v("小计")])])]),s("div",{staticClass:"one-order-content"},[s("ul",{staticClass:"common-ul"},[s("li",{staticClass:"one"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.shopInfo.img,expression:"item.shopInfo.img"}],attrs:{alt:e.shopInfo.content}})]),s("li",{staticClass:"two"},[s("p",[t._v(t._s(e.shopInfo.content))])]),s("li",{staticClass:"four"},[s("p",[t._v("￥"+t._s(e.price.toFixed(2)))])]),s("li",{staticClass:"five"},[s("p",[t._v(t._s(e.shopInfo.num))])]),s("li",{staticClass:"six"},[s("p",[t._v("￥"+t._s(e.shopInfo.price.toFixed(2)))])])])]),s("div",{staticClass:"one-order-footer"},[s("p",{staticStyle:{"margin-right":"15px"}},[t._v("发票类型：电子发票 "),s("el-tooltip",{attrs:{content:t.fpContent,placement:"bottom",effect:"light"}},[s("i",{staticClass:"el-icon-question"})])],1),s("p",[t._v("发票抬头：彭于晏")])])])})),s("div",{staticClass:"all-info-box"},[s("p",{staticClass:"one-line"},[s("span",{staticClass:"miaoshu"},[t._v("商品总计")]),s("span",{staticClass:"money"},[t._v("￥1679.00")])]),s("p",{staticClass:"one-line"},[s("span",{staticClass:"miaoshu"},[t._v("回购金抵扣")]),s("span",{staticClass:"money",staticStyle:{color:"red"}},[t._v("-￥0.00")])]),s("p",{staticClass:"one-line"},[s("span",{staticClass:"miaoshu"},[t._v("礼品卡抵扣")]),s("span",{staticClass:"money",staticStyle:{color:"red"}},[t._v("-￥0.00")])]),s("p",{staticClass:"one-line"},[s("span",{staticClass:"miaoshu"},[t._v("运费")]),s("span",{staticClass:"money"},[t._v("￥0.00")])]),s("p",{staticClass:"one-line",staticStyle:{"margin-top":"20px"}},[s("span",{staticClass:"miaoshu"},[t._v("商品总计")]),s("span",{staticClass:"money",staticStyle:{color:"red"}},[t._v("￥1679.00")])])]),s("el-divider"),s("div",{staticClass:"receiver-info-box"},[s("h2",[t._v("收货人信息")]),s("p",[t._v("收货人：彭于晏")]),s("p",[t._v("地址：浙江省杭州市江干区下沙街道浙江水利水电学院生活区")]),s("p",[t._v("电话：13888888888")]),s("p",[t._v("邮编：310016")])]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:t.handleClose}},[t._v("确 定")])],1)],2)],1)},n=[],c={props:{showDialog:{default:!1}},data:function(){return{fpContent:"为什么要选择电子发票？电子发票是纳税义务人通过互联网录入数据，然后开具给客户。电子发票获取更便捷，可重复下载，避免丢失，方便查验，售后维权更有保障。发货效率更高，退换货更方便！电子发票低碳环保，节能减排，符合加强环境保护的国家策略。选择电子发票，省力省心，更能为环境保护贡献一份力。",activities:[{content:[{time:"15:28:02",content:"已签收,感谢使用顺丰,期待再次为您服务"},{time:"12:28:02",content:"快件在【杭州下沙中转场】装车，已发往下一站"},{time:"10:28:02",content:"快件到达 【上海浦江集散中心】"},{time:"09:28:02",content:"快件在【上海浦江集散中心】装车，已发往下一站"}],timestamp:"2017-11-02 15:28:47",color:"#00c3f5"},{content:[{time:"15:28:02",content:"已签收,感谢使用顺丰,期待再次为您服务"},{time:"12:28:02",content:"快件在【杭州下沙中转场】装车，已发往下一站"},{time:"10:28:02",content:"快件到达 【上海浦江集散中心】"},{time:"09:28:02",content:"快件在【上海浦江集散中心】装车，已发往下一站"}],timestamp:"2017-11-01 20:43:08"}],orderData:[{buyTime:"2017-11-01 12:53:45",orderNumber:"213243546",price:1679,shopInfo:{img:s("d0123"),content:"魅族17 全网通公开版 孔雀青 8GB+128GB",price:1699,num:1}},{buyTime:"2020-06-01 10:53:45",orderNumber:"213345688",price:2699,shopInfo:{img:s("d0123"),content:"魅族17Pro 全网通公开版 AG渣渣灰 8GB+256GB",price:2699,num:1}}]}},methods:{handleClose:function(){this.$emit("update:showDialog",!1)}}},r=c,u=(s("4d62"),s("2877")),p=Object(u["a"])(r,o,n,!1,null,null,null),m=p.exports,d={components:{mFooter:l["a"],orderDetail:m},data:function(){return{showDialog:!1,options:[{value:"全部订单",label:"全部订单"},{value:"三个月以内订单",label:"三个月以内订单"}],value:"全部订单",activeName:"",orderData:[{buyTime:"2017-11-01 12:53:45",orderNumber:"213243546",price:1679,shopInfo:{img:s("d0123"),content:"魅族17 全网通公开版 孔雀青 8GB+128GB",price:1699,num:1},state:0},{buyTime:"2020-06-01 10:53:45",orderNumber:"213345688",price:2345,shopInfo:{img:s("d0123"),content:"魅族17Pro 全网通公开版 AG梦幻独角兽 8GB+256GB",price:2399,num:1},state:2},{buyTime:"2020-06-01 10:53:45",orderNumber:"213345688",price:2699,shopInfo:{img:s("d0123"),content:"魅族17Pro 全网通公开版 AG渣渣灰 8GB+256GB",price:2699,num:1},state:1}]}},watch:{isLogin:function(t){t||this.$router.go(0)}},computed:{isLogin:function(){return this.$store.state.isLogin}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},handleClick:function(){}}},v=d,C=(s("0150"),Object(u["a"])(v,i,a,!1,null,null,null));e["default"]=C.exports},ade9:function(t,e,s){},d0123:function(t,e,s){t.exports=s.p+"assets/img/meizu_17_1.c1a7f19f.png"}}]);
//# sourceMappingURL=chunk-0a065b18.d582b454.js.map