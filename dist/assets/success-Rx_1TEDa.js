import{d as c2,r as E,f as l2,o as u2,U as d2,I as K,J as t2,M as e,E as D,N as b,R as f2,O as Q,Q as i2,a as v2,L as _2,V as h2,S as p2}from"./index-Dl1quLRK.js";import{x as C2,y as g2,l as m2,t as e2,q as F,n as W,m as y2,v as w2,A as b2}from"./util-B21Hed98.js";const x2="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1734190369231'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='9297'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='128'%20height='128'%3e%3cpath%20d='M729.6%20931.2l-416-425.6%20416-416c9.6-9.6%209.6-25.6%200-35.2-9.6-9.6-25.6-9.6-35.2%200l-432%20435.2c-9.6%209.6-9.6%2025.6%200%2035.2l432%20441.6c9.6%209.6%2025.6%209.6%2035.2%200C739.2%20956.8%20739.2%20940.8%20729.6%20931.2z'%20p-id='9298'%20fill='%23ffffff'%3e%3c/path%3e%3c/svg%3e";var s2={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(o2,X){(function(s,L){o2.exports=L()})(C2,function(){return function(){var A={686:function(h,c,t){t.d(c,{default:function(){return Y}});var l=t(279),u=t.n(l),_=t(370),m=t.n(_),p=t(817),w=t.n(p);function f(a){try{return document.execCommand(a)}catch{return!1}}var g=function(n){var o=w()(n);return f("cut"),o},C=g;function v(a){var n=document.documentElement.getAttribute("dir")==="rtl",o=document.createElement("textarea");o.style.fontSize="12pt",o.style.border="0",o.style.padding="0",o.style.margin="0",o.style.position="absolute",o.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return o.style.top="".concat(r,"px"),o.setAttribute("readonly",""),o.value=a,o}var y=function(n,o){var r=v(n);o.container.appendChild(r);var i=w()(r);return f("copy"),r.remove(),i},H=function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=y(n,o):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=y(n.value,o):(r=w()(n),f("copy")),r},Z=H;function M(a){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?M=function(o){return typeof o}:M=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},M(a)}var j=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=n.action,r=o===void 0?"copy":o,i=n.container,d=n.target,x=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(d!==void 0)if(d&&M(d)==="object"&&d.nodeType===1){if(r==="copy"&&d.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(d.hasAttribute("readonly")||d.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(x)return Z(x,{container:i});if(d)return r==="cut"?C(d):Z(d,{container:i})},B=j;function S(a){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(o){return typeof o}:S=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},S(a)}function U(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function N(a,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}function I(a,n,o){return n&&N(a.prototype,n),o&&N(a,o),a}function P(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),n&&O(a,n)}function O(a,n){return O=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},O(a,n)}function V(a){var n=J();return function(){var r=T(a),i;if(n){var d=T(this).constructor;i=Reflect.construct(r,arguments,d)}else i=r.apply(this,arguments);return q(this,i)}}function q(a,n){return n&&(S(n)==="object"||typeof n=="function")?n:z(a)}function z(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function J(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function T(a){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},T(a)}function R(a,n){var o="data-clipboard-".concat(a);if(n.hasAttribute(o))return n.getAttribute(o)}var G=function(a){P(o,a);var n=V(o);function o(r,i){var d;return U(this,o),d=n.call(this),d.resolveOptions(i),d.listenClick(r),d}return I(o,[{key:"resolveOptions",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof i.action=="function"?i.action:this.defaultAction,this.target=typeof i.target=="function"?i.target:this.defaultTarget,this.text=typeof i.text=="function"?i.text:this.defaultText,this.container=S(i.container)==="object"?i.container:document.body}},{key:"listenClick",value:function(i){var d=this;this.listener=m()(i,"click",function(x){return d.onClick(x)})}},{key:"onClick",value:function(i){var d=i.delegateTarget||i.currentTarget,x=this.action(d)||"copy",k=B({action:x,container:this.container,target:this.target(d),text:this.text(d)});this.emit(k?"success":"error",{action:x,text:k,trigger:d,clearSelection:function(){d&&d.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(i){return R("action",i)}},{key:"defaultTarget",value:function(i){var d=R("target",i);if(d)return document.querySelector(d)}},{key:"defaultText",value:function(i){return R("text",i)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(i){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return Z(i,d)}},{key:"cut",value:function(i){return C(i)}},{key:"isSupported",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],d=typeof i=="string"?[i]:i,x=!!document.queryCommandSupported;return d.forEach(function(k){x=x&&!!document.queryCommandSupported(k)}),x}}]),o}(u()),Y=G},828:function(h){var c=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function l(u,_){for(;u&&u.nodeType!==c;){if(typeof u.matches=="function"&&u.matches(_))return u;u=u.parentNode}}h.exports=l},438:function(h,c,t){var l=t(828);function u(p,w,f,g,C){var v=m.apply(this,arguments);return p.addEventListener(f,v,C),{destroy:function(){p.removeEventListener(f,v,C)}}}function _(p,w,f,g,C){return typeof p.addEventListener=="function"?u.apply(null,arguments):typeof f=="function"?u.bind(null,document).apply(null,arguments):(typeof p=="string"&&(p=document.querySelectorAll(p)),Array.prototype.map.call(p,function(v){return u(v,w,f,g,C)}))}function m(p,w,f,g){return function(C){C.delegateTarget=l(C.target,w),C.delegateTarget&&g.call(p,C)}}h.exports=_},879:function(h,c){c.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},c.nodeList=function(t){var l=Object.prototype.toString.call(t);return t!==void 0&&(l==="[object NodeList]"||l==="[object HTMLCollection]")&&"length"in t&&(t.length===0||c.node(t[0]))},c.string=function(t){return typeof t=="string"||t instanceof String},c.fn=function(t){var l=Object.prototype.toString.call(t);return l==="[object Function]"}},370:function(h,c,t){var l=t(879),u=t(438);function _(f,g,C){if(!f&&!g&&!C)throw new Error("Missing required arguments");if(!l.string(g))throw new TypeError("Second argument must be a String");if(!l.fn(C))throw new TypeError("Third argument must be a Function");if(l.node(f))return m(f,g,C);if(l.nodeList(f))return p(f,g,C);if(l.string(f))return w(f,g,C);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function m(f,g,C){return f.addEventListener(g,C),{destroy:function(){f.removeEventListener(g,C)}}}function p(f,g,C){return Array.prototype.forEach.call(f,function(v){v.addEventListener(g,C)}),{destroy:function(){Array.prototype.forEach.call(f,function(v){v.removeEventListener(g,C)})}}}function w(f,g,C){return u(document.body,f,g,C)}h.exports=_},817:function(h){function c(t){var l;if(t.nodeName==="SELECT")t.focus(),l=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var u=t.hasAttribute("readonly");u||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),u||t.removeAttribute("readonly"),l=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var _=window.getSelection(),m=document.createRange();m.selectNodeContents(t),_.removeAllRanges(),_.addRange(m),l=_.toString()}return l}h.exports=c},279:function(h){function c(){}c.prototype={on:function(t,l,u){var _=this.e||(this.e={});return(_[t]||(_[t]=[])).push({fn:l,ctx:u}),this},once:function(t,l,u){var _=this;function m(){_.off(t,m),l.apply(u,arguments)}return m._=l,this.on(t,m,u)},emit:function(t){var l=[].slice.call(arguments,1),u=((this.e||(this.e={}))[t]||[]).slice(),_=0,m=u.length;for(_;_<m;_++)u[_].fn.apply(u[_].ctx,l);return this},off:function(t,l){var u=this.e||(this.e={}),_=u[t],m=[];if(_&&l)for(var p=0,w=_.length;p<w;p++)_[p].fn!==l&&_[p].fn._!==l&&m.push(_[p]);return m.length?u[t]=m:delete u[t],this}},h.exports=c,h.exports.TinyEmitter=c}},s={};function L(h){if(s[h])return s[h].exports;var c=s[h]={exports:{}};return A[h](c,c.exports,L),c.exports}return function(){L.n=function(h){var c=h&&h.__esModule?function(){return h.default}:function(){return h};return L.d(c,{a:c}),c}}(),function(){L.d=function(h,c){for(var t in c)L.o(c,t)&&!L.o(h,t)&&Object.defineProperty(h,t,{enumerable:!0,get:c[t]})}}(),function(){L.o=function(h,c){return Object.prototype.hasOwnProperty.call(h,c)}}(),L(686)}().default})})(s2);var L2=s2.exports;const E2=g2(L2),S2={class:"success"},M2={class:"goods_title"},T2=e("div",{class:"arrow"},[e("img",{src:x2})],-1),k2=e("div",{class:"arrow_text"},"订单详情",-1),A2=[T2,k2],Z2={class:"goods_title-box"},O2={class:"goods_title-left"},R2={class:"state_img"},N2=["src"],D2={class:"state_text"},F2=["src"],H2={class:"jiaji_text"},j2={class:"goods_content"},B2=e("div",{class:"content_bc-img"},null,-1),U2={class:"goods_info goods_box"},I2={class:"goods_info-details"},P2={class:"goods_info-img"},V2=["src"],q2={class:"goods_info-right"},z2={class:"right_name"},J2={class:"right_name-text"},G2={class:"right_name-price"},Y2={class:"price_num"},Q2={class:"right_title"},W2={class:"yugujia"},X2=e("div",{class:"yugujia_text"},"预估返",-1),$2={class:"yugujia_price"},K2={class:"yugujia_order_num"},t0={class:"goods_info-count"},e0={class:"count_top"},o0=e("div",{class:"count_title"},"商品总价",-1),n0={class:"count_price"},r0={class:"count_price-num"},i0={class:"count_bottom"},s0={class:"count_bottom-num"},a0={class:"num_blod"},c0={class:"goods_order goods_box"},l0={class:"order_num"},u0=e("div",{class:"left_name"},"订单编号",-1),d0={class:"right_info"},f0={class:"num_code"},v0=e("div",{class:"opear copy-btn"},"复制",-1),_0={class:"order_num"},h0=e("div",{class:"left_name"},"商品名称",-1),p0={class:"right_info"},C0={class:"order_num"},g0=e("div",{class:"left_name"},"下单时间",-1),m0={class:"right_info"},y0={key:0},w0={class:"order_num"},b0=e("div",{class:"left_name"},"游戏系统",-1),x0={class:"right_info"},L0={class:"order_num"},E0=e("div",{class:"left_name"},"游戏大区",-1),S0={class:"right_info"},M0={class:"order_num"},T0=e("div",{class:"left_name"},"游戏昵称",-1),k0={class:"right_info"},A0={class:"order_num"},Z0=e("div",{class:"left_name"},"游戏余额",-1),O0={class:"right_info"},R0={class:"num_code"},N0=e("div",{class:"quan_num"},"点券",-1),D0={class:"order_num"},F0=e("div",{class:"left_name"},"下单时间",-1),H0={class:"right_info"},j0={key:1,class:"order_num"},B0=e("div",{class:"left_name"},"完成时间",-1),U0={class:"right_info"},V0=c2({__name:"success",setup(o2){const X=E(new URL(""+new URL("loading-CbFDklgh.gif",import.meta.url).href,import.meta.url).href);m2(["card","code"]);const A=h2();E();const s=E(),L=E(!1),h=E("加载中...."),c=E(new URL("data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%2020.4284C9.72642%2020.4284%208.49258%2020.1795%207.33023%2019.6871C6.20759%2019.2131%205.1988%2018.5327%204.333%2017.6668C3.46719%2016.801%202.78672%2015.7923%202.31278%2014.6696C1.8203%2013.5073%201.57141%2012.2708%201.57141%2010.9999C1.57141%209.72895%201.8203%208.49246%202.31278%207.3301C2.78672%206.20747%203.46719%205.19868%204.333%204.33287C5.1988%203.46706%206.20759%202.7866%207.33023%202.31265C8.49258%201.82018%209.72907%201.57129%2011%201.57129C12.2709%201.57129%2013.5074%201.82018%2014.6697%202.31265C15.7924%202.7866%2016.8012%203.46706%2017.667%204.33287C18.5328%205.19868%2019.2132%206.20747%2019.6872%207.3301C20.1797%208.49246%2020.4286%209.72895%2020.4286%2010.9999C20.4286%2012.2708%2020.1797%2013.5073%2019.6872%2014.6696C19.2132%2015.7923%2018.5328%2016.801%2017.667%2017.6668C16.8012%2018.5327%2015.7924%2019.2131%2014.6697%2019.6871C13.5074%2020.1795%2012.2735%2020.4284%2011%2020.4284ZM11%203.15993C8.90563%203.15993%206.93836%203.97543%205.45563%205.45551C3.9729%206.93559%203.16005%208.90551%203.16005%2010.9999C3.16005%2013.0942%203.97555%2015.0615%205.45563%2016.5442C6.93571%2018.0269%208.90563%2018.8398%2011%2018.8398C13.0943%2018.8398%2015.0616%2018.0243%2016.5443%2016.5442C18.0271%2015.0641%2018.8399%2013.0942%2018.8399%2010.9999C18.8399%208.90551%2018.0244%206.93824%2016.5443%205.45551C15.0643%203.97278%2013.0943%203.15993%2011%203.15993Z'%20fill='%23FE6426'/%3e%3cpath%20d='M10.2143%2012.5714C9.77954%2012.5714%209.42859%2012.1997%209.42859%2011.7392V6.33226C9.42859%205.87174%209.77954%205.5%2010.2143%205.5C10.6491%205.5%2011%205.87174%2011%206.33226V11.7392C11%2012.1997%2010.6491%2012.5714%2010.2143%2012.5714Z'%20fill='%23FE6426'/%3e%3cpath%20d='M14.8368%2012.5714H10.3061C9.82053%2012.5714%209.42859%2012.2205%209.42859%2011.7857C9.42859%2011.351%209.82053%2011%2010.3061%2011H14.8368C15.3224%2011%2015.7143%2011.351%2015.7143%2011.7857C15.7143%2012.2205%2015.3224%2012.5714%2014.8368%2012.5714Z'%20fill='%23FE6426'/%3e%3c/svg%3e",import.meta.url).href),t=E("商家正在准备充值，请稍后再次查询"),l=E(new URL("data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.0001%201.83093C7.73077%201.83093%201.83105%207.73065%201.83105%2014.9999C1.83105%2022.2692%207.73077%2028.1689%2015.0001%2028.1689C22.2693%2028.1689%2028.1691%2022.2692%2028.1691%2014.9999C28.1691%207.73065%2022.2693%201.83093%2015.0001%201.83093ZM22.4609%2013.3615L13.1457%2023.2888L15.1217%2016.7652H7.50015L16.8153%206.83789L14.8394%2013.3615H22.4609Z'%20fill='%23B8B8B8'/%3e%3c/svg%3e",import.meta.url).href),u=E("加急"),_=l2(()=>v=>{let y="";switch(v){case 1:y="充值成功",c.value=new URL("data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.68516%2014.9058C9.50898%2014.9058%209.33281%2014.8392%209.19961%2014.7039L5.96899%2011.4732C5.70044%2011.2046%205.70044%2010.7685%205.96899%2010.5C6.23755%2010.2314%206.67368%2010.2314%206.94224%2010.5L9.6873%2013.2451L14.9323%208C15.2009%207.73145%2015.637%207.73145%2015.9056%208C16.1741%208.26855%2016.1741%208.70469%2015.9056%208.97324L10.1729%2014.706C10.0375%2014.8392%209.86133%2014.9058%209.68516%2014.9058Z'%20fill='%2348C434'/%3e%3cpath%20d='M11%2020.5434C9.71309%2020.5434%208.4627%2020.292%207.28535%2019.7936C6.14883%2019.3123%205.12832%2018.6248%204.25176%2017.7483C3.3752%2016.8717%202.6877%2015.8512%202.20645%2014.7147C1.70801%2013.5373%201.45664%2012.2869%201.45664%2011C1.45664%209.71311%201.70801%208.46272%202.20645%207.28538C2.6877%206.14885%203.3752%205.12834%204.25176%204.25178C5.12832%203.37522%206.14883%202.68772%207.28535%202.20647C8.4627%201.70803%209.71309%201.45667%2011%201.45667C12.2869%201.45667%2013.5373%201.70803%2014.7147%202.20647C15.8512%202.68772%2016.8717%203.37522%2017.7482%204.25178C18.6248%205.12834%2019.3123%206.14885%2019.7936%207.28538C20.292%208.46272%2020.5434%209.71311%2020.5434%2011C20.5434%2012.2869%2020.292%2013.5373%2019.7936%2014.7147C19.3123%2015.8512%2018.6248%2016.8717%2017.7482%2017.7483C16.8717%2018.6248%2015.8512%2019.3123%2014.7147%2019.7936C13.5373%2020.2899%2012.2869%2020.5434%2011%2020.5434ZM11%202.83167C8.81934%202.83167%206.76758%203.6803%205.225%205.22288C3.68242%206.76545%202.83164%208.81936%202.83164%2011C2.83164%2013.1807%203.68027%2015.2324%205.22285%2016.775C6.76543%2018.3176%208.81934%2019.1684%2011%2019.1684C13.1807%2019.1684%2015.2324%2018.3198%2016.775%2016.7772C18.3176%2015.2346%2019.1684%2013.1807%2019.1684%2011C19.1684%208.81936%2018.3197%206.7676%2016.7772%205.22502C15.2346%203.68245%2013.1807%202.83167%2011%202.83167Z'%20fill='%2348C434'/%3e%3c/svg%3e",import.meta.url).href,t.value="商家已经充值成功，请查询是否到账";break;case 2:y="正在充值",c.value=new URL("data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%2020.4286C9.72642%2020.4286%208.49258%2020.1797%207.33023%2019.6872C6.20759%2019.2132%205.1988%2018.5328%204.333%2017.667C3.46719%2016.8012%202.78672%2015.7924%202.31278%2014.6697C1.8203%2013.5074%201.57141%2012.2709%201.57141%2011C1.57141%209.72907%201.8203%208.49258%202.31278%207.33023C2.78672%206.20759%203.46719%205.1988%204.333%204.33299C5.1988%203.46719%206.20759%202.78672%207.33023%202.31278C8.49258%201.8203%209.72907%201.57141%2011%201.57141C12.2709%201.57141%2013.5074%201.8203%2014.6697%202.31278C15.7924%202.78672%2016.8012%203.46719%2017.667%204.33299C18.5328%205.1988%2019.2132%206.20759%2019.6872%207.33023C20.1797%208.49258%2020.4286%209.72907%2020.4286%2011C20.4286%2012.2709%2020.1797%2013.5074%2019.6872%2014.6697C19.2132%2015.7924%2018.5328%2016.8012%2017.667%2017.667C16.8012%2018.5328%2015.7924%2019.2132%2014.6697%2019.6872C13.5074%2020.1797%2012.2735%2020.4286%2011%2020.4286ZM11%203.16005C8.90563%203.16005%206.93836%203.97555%205.45563%205.45563C3.9729%206.93571%203.16005%208.90563%203.16005%2011C3.16005%2013.0943%203.97555%2015.0616%205.45563%2016.5443C6.93571%2018.0271%208.90563%2018.8399%2011%2018.8399C13.0943%2018.8399%2015.0616%2018.0244%2016.5443%2016.5443C18.0271%2015.0642%2018.8399%2013.0943%2018.8399%2011C18.8399%208.90563%2018.0244%206.93836%2016.5443%205.45563C15.0643%203.9729%2013.0943%203.16005%2011%203.16005Z'%20fill='black'/%3e%3cpath%20d='M10.2143%2012.5714C9.77954%2012.5714%209.42859%2012.1997%209.42859%2011.7392V6.33226C9.42859%205.87174%209.77954%205.5%2010.2143%205.5C10.6491%205.5%2011%205.87174%2011%206.33226V11.7392C11%2012.1997%2010.6491%2012.5714%2010.2143%2012.5714Z'%20fill='black'/%3e%3cpath%20d='M14.8368%2012.5714H10.3061C9.82053%2012.5714%209.42859%2012.2205%209.42859%2011.7857C9.42859%2011.351%209.82053%2011%2010.3061%2011H14.8368C15.3224%2011%2015.7143%2011.351%2015.7143%2011.7857C15.7143%2012.2205%2015.3224%2012.5714%2014.8368%2012.5714Z'%20fill='black'/%3e%3c/svg%3e",import.meta.url).href,t.value="商家正在准备充值，请稍后再次查询";break;case 3:y="充值失败",c.value=new URL("data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.0107%202.75427C12.1258%202.75427%2013.2064%202.97126%2014.2227%203.4031C15.2045%203.81775%2016.0875%204.41287%2016.8459%205.17126C17.6043%205.92966%2018.1994%206.81267%2018.6141%207.79451C19.0438%208.81072%2019.2629%209.89138%2019.2629%2011.0064C19.2629%2012.1215%2019.0459%2013.2021%2018.6141%2014.2183C18.1994%2015.2002%2017.6043%2016.0832%2016.8459%2016.8416C16.0875%2017.6%2015.2045%2018.1951%2014.2227%2018.6097C13.2064%2019.0394%2012.1258%2019.2586%2011.0107%2019.2586C9.8957%2019.2586%208.81504%2019.0373%207.79883%2018.6076C6.81699%2018.1929%205.93398%2017.5978%205.17559%2016.8394C4.41719%2016.081%203.82207%2015.198%203.40742%2014.2162C2.97773%2013.2%202.75859%2012.1193%202.75859%2011.0043C2.75859%209.88923%202.97559%208.80857%203.40742%207.79236C3.82207%206.81052%204.41719%205.92752%205.17559%205.16912C5.93398%204.41072%206.81699%203.8156%207.79883%203.40095C8.81504%202.97341%209.8957%202.75427%2011.0107%202.75427ZM11.0107%201.37927C5.69551%201.37927%201.38574%205.68904%201.38574%2011.0043C1.38574%2016.3195%205.69551%2020.6293%2011.0107%2020.6293C16.326%2020.6293%2020.6357%2016.3195%2020.6357%2011.0043C20.6357%205.68904%2016.326%201.37927%2011.0107%201.37927Z'%20fill='%23F61818'/%3e%3cpath%20d='M9.93652%2015.849C9.93652%2016.1339%2010.0497%2016.4071%2010.2512%2016.6086C10.4526%2016.81%2010.7258%2016.9232%2011.0107%2016.9232C11.2956%2016.9232%2011.5689%2016.81%2011.7703%2016.6086C11.9718%2016.4071%2012.085%2016.1339%2012.085%2015.849C12.085%2015.5641%2011.9718%2015.2909%2011.7703%2015.0894C11.5689%2014.888%2011.2956%2014.7748%2011.0107%2014.7748C10.7258%2014.7748%2010.4526%2014.888%2010.2512%2015.0894C10.0497%2015.2909%209.93652%2015.5641%209.93652%2015.849Z'%20fill='%23F61818'/%3e%3cpath%20d='M12.3857%206.46248C12.3857%205.70193%2011.7691%205.08533%2011.0107%205.08533C10.2523%205.08533%209.63574%205.70193%209.63574%206.46033V6.46248L10.1514%2012.9422C10.1621%2013.4062%2010.5424%2013.7801%2011.0107%2013.7801C11.4791%2013.7801%2011.8572%2013.4062%2011.8701%2012.9422L12.3857%206.46248Z'%20fill='%23F61818'/%3e%3c/svg%3e",import.meta.url).href,t.value="商家已经充值失败，请联系客服咨询";break;case 4:y="准备充值",c.value=new URL("data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%2020.4284C9.72642%2020.4284%208.49258%2020.1795%207.33023%2019.6871C6.20759%2019.2131%205.1988%2018.5327%204.333%2017.6668C3.46719%2016.801%202.78672%2015.7923%202.31278%2014.6696C1.8203%2013.5073%201.57141%2012.2708%201.57141%2010.9999C1.57141%209.72895%201.8203%208.49246%202.31278%207.3301C2.78672%206.20747%203.46719%205.19868%204.333%204.33287C5.1988%203.46706%206.20759%202.7866%207.33023%202.31265C8.49258%201.82018%209.72907%201.57129%2011%201.57129C12.2709%201.57129%2013.5074%201.82018%2014.6697%202.31265C15.7924%202.7866%2016.8012%203.46706%2017.667%204.33287C18.5328%205.19868%2019.2132%206.20747%2019.6872%207.3301C20.1797%208.49246%2020.4286%209.72895%2020.4286%2010.9999C20.4286%2012.2708%2020.1797%2013.5073%2019.6872%2014.6696C19.2132%2015.7923%2018.5328%2016.801%2017.667%2017.6668C16.8012%2018.5327%2015.7924%2019.2131%2014.6697%2019.6871C13.5074%2020.1795%2012.2735%2020.4284%2011%2020.4284ZM11%203.15993C8.90563%203.15993%206.93836%203.97543%205.45563%205.45551C3.9729%206.93559%203.16005%208.90551%203.16005%2010.9999C3.16005%2013.0942%203.97555%2015.0615%205.45563%2016.5442C6.93571%2018.0269%208.90563%2018.8398%2011%2018.8398C13.0943%2018.8398%2015.0616%2018.0243%2016.5443%2016.5442C18.0271%2015.0641%2018.8399%2013.0942%2018.8399%2010.9999C18.8399%208.90551%2018.0244%206.93824%2016.5443%205.45551C15.0643%203.97278%2013.0943%203.15993%2011%203.15993Z'%20fill='%23FE6426'/%3e%3cpath%20d='M10.2143%2012.5714C9.77954%2012.5714%209.42859%2012.1997%209.42859%2011.7392V6.33226C9.42859%205.87174%209.77954%205.5%2010.2143%205.5C10.6491%205.5%2011%205.87174%2011%206.33226V11.7392C11%2012.1997%2010.6491%2012.5714%2010.2143%2012.5714Z'%20fill='%23FE6426'/%3e%3cpath%20d='M14.8368%2012.5714H10.3061C9.82053%2012.5714%209.42859%2012.2205%209.42859%2011.7857C9.42859%2011.351%209.82053%2011%2010.3061%2011H14.8368C15.3224%2011%2015.7143%2011.351%2015.7143%2011.7857C15.7143%2012.2205%2015.3224%2012.5714%2014.8368%2012.5714Z'%20fill='%23FE6426'/%3e%3c/svg%3e",import.meta.url).href,t.value="商家正在准备充值，请稍后再次查询";break;default:y="准备充值",c.value=new URL("data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%2020.4284C9.72642%2020.4284%208.49258%2020.1795%207.33023%2019.6871C6.20759%2019.2131%205.1988%2018.5327%204.333%2017.6668C3.46719%2016.801%202.78672%2015.7923%202.31278%2014.6696C1.8203%2013.5073%201.57141%2012.2708%201.57141%2010.9999C1.57141%209.72895%201.8203%208.49246%202.31278%207.3301C2.78672%206.20747%203.46719%205.19868%204.333%204.33287C5.1988%203.46706%206.20759%202.7866%207.33023%202.31265C8.49258%201.82018%209.72907%201.57129%2011%201.57129C12.2709%201.57129%2013.5074%201.82018%2014.6697%202.31265C15.7924%202.7866%2016.8012%203.46706%2017.667%204.33287C18.5328%205.19868%2019.2132%206.20747%2019.6872%207.3301C20.1797%208.49246%2020.4286%209.72895%2020.4286%2010.9999C20.4286%2012.2708%2020.1797%2013.5073%2019.6872%2014.6696C19.2132%2015.7923%2018.5328%2016.801%2017.667%2017.6668C16.8012%2018.5327%2015.7924%2019.2131%2014.6697%2019.6871C13.5074%2020.1795%2012.2735%2020.4284%2011%2020.4284ZM11%203.15993C8.90563%203.15993%206.93836%203.97543%205.45563%205.45551C3.9729%206.93559%203.16005%208.90551%203.16005%2010.9999C3.16005%2013.0942%203.97555%2015.0615%205.45563%2016.5442C6.93571%2018.0269%208.90563%2018.8398%2011%2018.8398C13.0943%2018.8398%2015.0616%2018.0243%2016.5443%2016.5442C18.0271%2015.0641%2018.8399%2013.0942%2018.8399%2010.9999C18.8399%208.90551%2018.0244%206.93824%2016.5443%205.45551C15.0643%203.97278%2013.0943%203.15993%2011%203.15993Z'%20fill='%23FE6426'/%3e%3cpath%20d='M10.2143%2012.5714C9.77954%2012.5714%209.42859%2012.1997%209.42859%2011.7392V6.33226C9.42859%205.87174%209.77954%205.5%2010.2143%205.5C10.6491%205.5%2011%205.87174%2011%206.33226V11.7392C11%2012.1997%2010.6491%2012.5714%2010.2143%2012.5714Z'%20fill='%23FE6426'/%3e%3cpath%20d='M14.8368%2012.5714H10.3061C9.82053%2012.5714%209.42859%2012.2205%209.42859%2011.7857C9.42859%2011.351%209.82053%2011%2010.3061%2011H14.8368C15.3224%2011%2015.7143%2011.351%2015.7143%2011.7857C15.7143%2012.2205%2015.3224%2012.5714%2014.8368%2012.5714Z'%20fill='%23FE6426'/%3e%3c/svg%3e",import.meta.url).href,t.value="商家正在准备充值，请稍后再次查询";break}return y}),m=()=>{const v=new E2(".copy-btn",{text(){var y;return(y=s.value)==null?void 0:y.orders}});v.on("success",()=>{F({message:"复制成功",duration:1500})}),v.on("error",()=>{})};let p=null;const w=()=>{w2(),p2.push({path:"/",query:{card:localStorage.getItem("cardId")??""}})},f=E(!1),g=()=>{!f.value&&s.value.order_urgent==2&&b2(()=>{e2.urgentOrder({orders:A.query.order}).then(y=>{y.code==200?(f.value=!0,u.value="加急中",l.value=new URL("data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2017L17%206.5L15.5%2013H23L12.5%2024.5L14.5%2017H7Z'%20fill='%23FCDC91'/%3e%3cpath%20d='M15.0001%201.83105C7.73077%201.83105%201.83105%207.73077%201.83105%2015.0001C1.83105%2022.2693%207.73077%2028.1691%2015.0001%2028.1691C22.2693%2028.1691%2028.1691%2022.2693%2028.1691%2015.0001C28.1691%207.73077%2022.2693%201.83105%2015.0001%201.83105ZM22.4609%2013.3617L13.1457%2023.2889L15.1217%2016.7653H7.50015L16.8153%206.83801L14.8394%2013.3617H22.4609Z'%20fill='%23FEA98D'/%3e%3c/svg%3e",import.meta.url).href,F({message:y.msg,duration:1500})):F({message:y.msg,duration:1500})}).catch()})},C=()=>{p=setInterval(()=>{e2.getOrder({orders:A.query.order}).then(v=>{v.code==200?(s.value=v.data,s.value.order_urgent==1&&(f.value=!0,u.value="加急中",l.value=new URL("data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2017L17%206.5L15.5%2013H23L12.5%2024.5L14.5%2017H7Z'%20fill='%23FCDC91'/%3e%3cpath%20d='M15.0001%201.83105C7.73077%201.83105%201.83105%207.73077%201.83105%2015.0001C1.83105%2022.2693%207.73077%2028.1691%2015.0001%2028.1691C22.2693%2028.1691%2028.1691%2022.2693%2028.1691%2015.0001C28.1691%207.73077%2022.2693%201.83105%2015.0001%201.83105ZM22.4609%2013.3617L13.1457%2023.2889L15.1217%2016.7653H7.50015L16.8153%206.83801L14.8394%2013.3617H22.4609Z'%20fill='%23FEA98D'/%3e%3c/svg%3e",import.meta.url).href),(v.data.order_status==1||v.data.order_status===3)&&(clearInterval(p),p=null)):(F({message:v.msg,duration:200}),setTimeout(()=>{w()},250),clearInterval(p))}).catch(v=>{clearInterval(p),p=null,w()})},5e3)};return u2(()=>{m(),localStorage.getItem("ordersData")&&(s.value=JSON.parse(localStorage.getItem("ordersData"))),e2.getOrder({orders:A.query.order}).then(v=>{setTimeout(()=>{L.value=!1},1e3),v.code==200?(s.value=v.data,localStorage.setItem("ordersData",JSON.stringify(v.data)),s.value.order_urgent==1&&(f.value=!0,u.value="加急中",l.value=new URL("data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2017L17%206.5L15.5%2013H23L12.5%2024.5L14.5%2017H7Z'%20fill='%23FCDC91'/%3e%3cpath%20d='M15.0001%201.83105C7.73077%201.83105%201.83105%207.73077%201.83105%2015.0001C1.83105%2022.2693%207.73077%2028.1691%2015.0001%2028.1691C22.2693%2028.1691%2028.1691%2022.2693%2028.1691%2015.0001C28.1691%207.73077%2022.2693%201.83105%2015.0001%201.83105ZM22.4609%2013.3617L13.1457%2023.2889L15.1217%2016.7653H7.50015L16.8153%206.83801L14.8394%2013.3617H22.4609Z'%20fill='%23FEA98D'/%3e%3c/svg%3e",import.meta.url).href),v.data.order_status!=1&&v.data.order_status!=3&&C()):(F({message:v.msg,duration:200}),setTimeout(()=>{w()},250))}).catch(v=>{w()})}),d2(()=>{clearInterval(p)}),(v,y)=>{var H,Z,M,j,B,S,U,N,I,P,O,V,q,z,J,T,R,G,Y,a,n,o,r,i,d,x,k,$,n2,r2;return K(),t2(_2,null,[e("div",S2,[e("div",M2,[e("div",{class:"back_title",onClick:w},A2),e("div",Z2,[e("div",O2,[e("div",R2,[e("img",{src:c.value},null,8,N2),D(" "+b(_.value((H=s.value)==null?void 0:H.order_status)),1)]),e("div",D2,b(t.value),1)]),e("div",{class:f2(["goods_title-right",f.value?"":"jiaji_fail"])},[e("div",{class:"right_box",onClick:g},[e("img",{src:l.value},null,8,F2),e("div",H2,b(u.value),1)])],2)])]),e("div",j2,[B2,e("div",U2,[e("div",I2,[e("div",P2,[e("img",{src:(Z=s.value)==null?void 0:Z.productImg},null,8,V2)]),e("div",q2,[e("div",z2,[e("div",J2,b((M=s.value)==null?void 0:M.short_goods_name),1),e("div",G2,[D(" ￥"),e("span",Y2,b(Q(W)(Number((j=s.value)==null?void 0:j.productCurrent_price))?(B=s.value)==null?void 0:B.productCurrent_price:((S=s.value)==null?void 0:S.productCurrent_price)+".00"),1)])]),e("div",Q2,[e("div",W2,[X2,e("div",$2,b(Q(W)(Number((U=s.value)==null?void 0:U.productBack_price))?"￥"+((N=s.value)==null?void 0:N.productBack_price):"￥"+((I=s.value)==null?void 0:I.productBack_price)+".00"),1)]),e("div",K2,"x"+b(((P=s.value)==null?void 0:P.num)||1),1)])])]),e("div",t0,[e("div",e0,[o0,e("div",n0,[D(" ￥"),e("span",r0,b(Q(W)(Number((O=s.value)==null?void 0:O.productCurrent_price))?(V=s.value)==null?void 0:V.productCurrent_price:((q=s.value)==null?void 0:q.productCurrent_price)+".00"),1)])]),e("div",i0,[D(" 实付款 "),e("span",s0,[D("￥"),e("span",a0,b(Q(W)(Number((z=s.value)==null?void 0:z.productCurrent_price)*((J=s.value)==null?void 0:J.count))?Number((T=s.value)==null?void 0:T.productCurrent_price)*((R=s.value)==null?void 0:R.count):Number((G=s.value)==null?void 0:G.productCurrent_price)*((Y=s.value)==null?void 0:Y.count)+".00"),1)])])])]),e("div",c0,[e("div",l0,[u0,e("div",d0,[e("div",f0,b((a=s.value)==null?void 0:a.orders),1),v0])]),e("div",_0,[h0,e("div",p0,b((n=s.value)==null?void 0:n.productName),1)]),e("div",C0,[g0,e("div",m0,b((o=s.value)==null?void 0:o.create_time),1)]),((r=s.value)==null?void 0:r.game)==="王者荣耀"?(K(),t2("div",y0,[e("div",w0,[b0,e("div",x0,b((i=s.value)==null?void 0:i.game_system),1)]),e("div",L0,[E0,e("div",S0,b((d=s.value)==null?void 0:d.zone_name),1)]),e("div",M0,[T0,e("div",k0,b(decodeURIComponent(((x=s.value)==null?void 0:x.role_name)||"")),1)]),e("div",A0,[Z0,e("div",O0,[e("div",R0,b((k=s.value)==null?void 0:k.game_balance),1),N0])]),e("div",D0,[F0,e("div",H0,b(($=s.value)==null?void 0:$.orders_time),1)])])):i2("",!0),((n2=s.value)==null?void 0:n2.order_status)==4?(K(),t2("div",j0,[B0,e("div",U0,b((r2=s.value)==null?void 0:r2.finished_time),1)])):i2("",!0)])])]),v2(y2,{loading:L.value,"loading-text":h.value,src:X.value,"onUpdate:src":y[0]||(y[0]=a2=>X.value=a2)},null,8,["loading","loading-text","src"])],64)}}});export{V0 as default};
