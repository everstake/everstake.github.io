(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33ffb81a"],{"0ad0":function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"coin-layout"},[s("b-container",[s("Header",{attrs:{isInternal:!0}})],1),s("main",{staticClass:"coin-layout__main"},[s("div",{class:{"coin-layout__stats":!0,"d-none":t.isNoStats}},[t._t("stats")],2),s("div",{staticClass:"coin-layout__main-info"},[s("b-container",[t._t("content")],2)],1)]),s("Footer",{attrs:{isInternal:!0}})],1)},i=[],o=s("0418"),e=s("4c03"),c={name:"CoinLayout",components:{Header:o["a"],Footer:e["a"]},props:{isNoStats:Boolean}},r=c,l=(s("b076"),s("2877")),_=Object(l["a"])(r,a,i,!1,null,"019752b8",null);n["a"]=_.exports},1218:function(t,n,s){},7761:function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"coin-stat"},[s("div",{staticClass:"coin-stat__top"},[t._t("top")],2),s("div",{staticClass:"coin-stat__bottom"},[t._t("bottom")],2)])},i=[],o={name:"CoinStat"},e=o,c=(s("faab"),s("2877")),r=Object(c["a"])(e,a,i,!1,null,"05142998",null);n["a"]=r.exports},"7c12":function(t,n,s){t.exports=s.p+"img/link.495fd3c2.svg"},"85cf":function(t,n,s){"use strict";s.r(n);var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("CoinLayout",[a("template",{slot:"stats"},[a("b-container",[a("b-row",[a("b-col",{staticClass:"mb-4 mb-lg-0 text-md-center"},[a("CoinStat",[a("template",{slot:"top"},[t._v("\n              "+t._s(t.total)+"\n            ")]),a("template",{slot:"bottom"},[t._v("\n              "+t._s(t.$t("coinPages.total"))+"\n            ")])],2)],1)],1)],1)],1),a("template",{slot:"content"},[a("div",{staticClass:"coin-info"},[a("div",{staticClass:"coin-info__top"},[a("div",{staticClass:"coin-info__card coin-info__card--pt"},[a("div",{staticClass:"coin-logo coin-logo--stub"},[a("div",{staticClass:"coin-logo__inner"},[a("img",{attrs:{src:s("1685"),alt:"IOST"}})])]),a("div",{staticClass:"coin-info__container text-center"},[a("div",{staticClass:"coin-info__intro"},[a("h1",{staticClass:"coin-info__title"},[t._v("IOST")]),a("p",{staticClass:"coin-info__subtitle"},[t._v(t._s(t.$t("coinPages.iost.youCanSupport")))])]),a("div",{staticClass:"coin-info__address"},[a("a",{staticClass:"coin-info__link break",attrs:{href:"https://iost.biss.com/#/nodedetail?id=64",target:"_blank"}},[t._v("\n                iost.biss.com/#/nodedetail?id=64\n              ")])])])])]),a("div",{staticClass:"coin-info__bottom"},[a("b-row",[a("b-col",{attrs:{lg:"6 mb-4 mb-lg-0"}},[a("div",{staticClass:"coin-info__card"},[a("img",{staticClass:"coin-info__link-img",attrs:{src:s("7c12"),alt:"Link"}}),a("a",{staticClass:"coin-info__link",attrs:{href:"https://medium.com/everstake/iost-telegram-bot-by-everstake-c1a689629d82",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                "+t._s(t.$t("coinPages.iost.iostTgBot"))+"\n              ")])])]),a("b-col",{attrs:{lg:"6"}},[a("div",{staticClass:"coin-info__card"},[a("img",{staticClass:"coin-info__link-img",attrs:{src:s("7c12"),alt:"Link"}}),a("a",{staticClass:"coin-info__link",attrs:{href:"https://medium.com/everstake/iost-voting-guide-how-to-vote-on-the-iostabc-explorer-using-the-iwallet-extension-2e0291c6958e",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                "+t._s(t.$t("coinPages.iost.delegationGuide"))+"\n              ")])])])],1)],1)])])],2)},i=[],o=(s("96cf"),s("3b8d")),e=(s("28a5"),s("0ad0")),c=s("7761"),r={name:"IOST",components:{CoinLayout:e["a"],CoinStat:c["a"]},data:function(){return{IOSTAddress:"cosmosvaloper1tflk30mq5vgqjdly92kkhhq3raev2hnz6eete3",IOSTHtml:null}},computed:{total:function(){if(!this.IOSTHtml)return 0;var t=this.IOSTHtml.getElementsByClassName("fz-14")[0].lastChild.data;return t.trim().split(" ")[0]}},methods:{getIostHtml:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$iostApi.getIostHtml();case 3:this.IOSTHtml=t.sent,n=new DOMParser,this.IOSTHtml=n.parseFromString(this.IOSTHtml.data,"text/html"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));function n(){return t.apply(this,arguments)}return n}()},mounted:function(){this.getIostHtml()}},l=r,_=s("2877"),u=Object(_["a"])(l,a,i,!1,null,"428ee3dc",null);n["default"]=u.exports},a84b:function(t,n,s){},b076:function(t,n,s){"use strict";var a=s("1218"),i=s.n(a);i.a},faab:function(t,n,s){"use strict";var a=s("a84b"),i=s.n(a);i.a}}]);