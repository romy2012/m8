!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VuejsPaginate=t():e.VuejsPaginate=t()}(this,function(){return function(e){function t(s){if(n[s])return n[s].exports;var i=n[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var i=n(1),r=s(i);e.exports=r.default},function(e,t,n){n(2);var s=n(6)(n(7),n(8),"data-v-82963a40",null);e.exports=s.exports},function(e,t,n){var s=n(3);"string"==typeof s&&(s=[[e.id,s,""]]);n(5)(s,{});s.locals&&(e.exports=s.locals)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"a[data-v-82963a40]{cursor:pointer}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(s[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&s[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function s(e,t){for(var n=0;n<e.length;n++){var s=e[n],i=d[s.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](s.parts[r]);for(;r<s.parts.length;r++)i.parts.push(c(s.parts[r],t))}else{for(var a=[],r=0;r<s.parts.length;r++)a.push(c(s.parts[r],t));d[s.id]={id:s.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},s=0;s<e.length;s++){var i=e[s],r=i[0],a=i[1],o=i[2],c=i[3],l={css:a,media:o,sourceMap:c};n[r]?n[r].parts.push(l):t.push(n[r]={id:r,parts:[l]})}return t}function r(e,t){var n=h(),s=x[x.length-1];if("top"===e.insertAt)s?s.nextSibling?n.insertBefore(t,s.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function o(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function c(e,t){var n,s,i;if(t.singleton){var r=v++;n=g||(g=o(t)),s=l.bind(null,n,r,!1),i=l.bind(null,n,r,!0)}else n=o(t),s=u.bind(null,n),i=function(){a(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else i()}}function l(e,t,n,s){var i=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function u(e,t){var n=t.css,s=t.media,i=t.sourceMap;if(s&&e.setAttribute("media",s),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return s(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var o=n[a],c=d[o.id];c.refs--,r.push(c)}if(e){var l=i(e);s(l,t)}for(var a=0;a<r.length;a++){var c=r[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete d[c.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,s){var i,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,r=e.default);var o="function"==typeof r?r.options:r;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),n&&(o._scopeId=n),s){var c=o.computed||(o.computed={});Object.keys(s).forEach(function(e){var t=s[e];c[e]=function(){return t}})}return{esModule:i,exports:r,options:o}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{pageCount:{type:Number,required:!0},initialPage:{type:Number,default:0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"‹"},nextText:{type:String,default:"›"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String}},data:function(){return{selected:this.initialPage}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{pages:function(){var e={};if(this.pageCount<=this.pageRange)for(var t=0;t<this.pageCount;t++){var n={index:t,content:t+1,selected:t===this.selected};e[t]=n}else{var s=this.pageRange/2,i=this.pageRange-s;this.selected<s?(s=this.selected,i=this.pageRange-s):this.selected>this.pageCount-this.pageRange/2&&(i=this.pageCount-this.selected,s=this.pageRange-i);for(var r=0;r<this.pageCount;r++){var a={index:r,content:r+1,selected:r===this.selected};if(r<=this.marginPages-1||r>=this.pageCount-this.marginPages)e[r]=a;else{var o={content:"...",disabled:!0};this.selected-s>this.marginPages&&e[this.marginPages]!==o&&(e[this.marginPages]=o),this.selected+i<this.pageCount-this.marginPages-1&&e[this.pageCount-this.marginPages-1]!==o&&(e[this.pageCount-this.marginPages-1]=o);var c=this.selected+i-this.pageCount+1;c>0&&r===this.selected-s-c&&(e[r]=a),r>=this.selected-s&&r<=this.selected+i&&(e[r]=a)}}}return e}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.selected=e,this.clickHandler(this.selected+1))},prevPage:function(){this.selected<=0||(this.selected--,this.clickHandler(this.selected+1))},nextPage:function(){this.selected>=this.pageCount-1||(this.selected++,this.clickHandler(this.selected+1))},firstPageSelected:function(){return 0===this.selected},lastPageSelected:function(){return this.selected===this.pageCount-1}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{class:e.containerClass},[n("li",{class:[e.prevClass,{disabled:e.firstPageSelected()}]},[n("a",{class:e.prevLinkClass,attrs:{tabindex:"0"},on:{click:function(t){e.prevPage()},keyup:function(t){e._k(t.keyCode,"enter",13)||e.prevPage()}}},[e._v(e._s(e.prevText))])]),e._v(" "),e._l(e.pages,function(t){return n("li",{class:[e.pageClass,{active:t.selected,disabled:t.disabled}]},[t.disabled?n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index)},keyup:function(n){e._k(n.keyCode,"enter",13)||e.handlePageSelected(t.index)}}},[e._v(e._s(t.content))])])}),e._v(" "),n("li",{class:[e.nextClass,{disabled:e.lastPageSelected()}]},[n("a",{class:e.nextLinkClass,attrs:{tabindex:"0"},on:{click:function(t){e.nextPage()},keyup:function(t){e._k(t.keyCode,"enter",13)||e.nextPage()}}},[e._v(e._s(e.nextText))])])],2)},staticRenderFns:[]}}])});
