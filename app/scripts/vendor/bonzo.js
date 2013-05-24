/*!
  * Bonzo: DOM Utility (c) Dustin Diaz 2012
  * https://github.com/ded/bonzo
  * License MIT
  */
(function(e,t,n){typeof module!="undefined"&&module.exports?module.exports=n():typeof define=="function"&&define.amd?define(n):t[e]=n()})("bonzo",this,function(){function D(e){return e&&e.nodeName&&(e.nodeType==1||e.nodeType==11)}function P(e,t,n){var r,i,s;if(typeof e=="string")return et.create(e);D(e)&&(e=[e]);if(n){s=[];for(r=0,i=e.length;r<i;r++)s[r]=Q(t,e[r]);return s}return e}function H(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function B(e,t,n,r){var i,s=0,o=e.length;for(;s<o;s++)i=r?e.length-s-1:s,t.call(n||e[i],e[i],i,e);return e}function j(e,t,n){for(var r=0,i=e.length;r<i;r++)D(e[r])&&(j(e[r].childNodes,t,n),t.call(n||e[r],e[r],r,e));return e}function F(e){return e.replace(/-(.)/g,function(e,t){return t.toUpperCase()})}function I(e){return e?e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():e}function q(e){e[x]("data-node-uid")||e[S]("data-node-uid",++y);var t=e[x]("data-node-uid");return g[t]||(g[t]={})}function R(e){var t=e[x]("data-node-uid");t&&delete g[t]}function U(e){var t;try{return e===null||e===undefined?undefined:e==="true"?!0:e==="false"?!1:e==="null"?null:(t=parseFloat(e))==e?t:e}catch(n){}return undefined}function z(e,t,n){for(var r=0,i=e.length;r<i;++r)if(t.call(n||null,e[r],r,e))return!0;return!1}function W(e){return e=="transform"&&(e=N.transform)||/^transform-?[Oo]rigin$/.test(e)&&(e=N.transform+"Origin")||e=="float"&&(e=N.cssFloat),e?F(e):null}function X(e,t,n,r){var i=0,s=t||this,o=[],u=O&&typeof e=="string"&&e.charAt(0)!="<"?O(e):e;return B(P(u),function(e,t){B(s,function(r){n(e,o[i++]=t>0?Q(s,r):r)},null,r)},this,r),s.length=i,B(o,function(e){s[--i]=e},null,!r),s}function V(e,t,n){var r=et(e),i=r.css("position"),s=r.offset(),o="relative",u=i==o,a=[parseInt(r.css("left"),10),parseInt(r.css("top"),10)];i=="static"&&(r.css("position",o),i=o),isNaN(a[0])&&(a[0]=u?0:e.offsetLeft),isNaN(a[1])&&(a[1]=u?0:e.offsetTop),t!=null&&(e.style.left=t-s.left+a[0]+E),n!=null&&(e.style.top=n-s.top+a[1]+E)}function $(e,t){return typeof t=="function"?t(e):t}function J(t,n,r){var i=this[0];return i?t==null&&n==null?(G(i)?Y():{x:i.scrollLeft,y:i.scrollTop})[r]:(G(i)?e.scrollTo(t,n):(t!=null&&(i.scrollLeft=t),n!=null&&(i.scrollTop=n)),this):this}function K(e){this.length=0;if(e){e=typeof e!="string"&&!e.nodeType&&typeof e.length!="undefined"?e:[e],this.length=e.length;for(var t=0;t<e.length;t++)this[t]=e[t]}}function Q(e,t){var n=t.cloneNode(!0),r,i,s;if(e.$&&typeof e.cloneEvents=="function"){e.$(n).cloneEvents(t),r=e.$(n).find("*"),i=e.$(t).find("*");for(s=0;s<i.length;s++)e.$(r[s]).cloneEvents(i[s])}return n}function G(t){return t===e||/^(?:body|html)$/i.test(t.tagName)}function Y(){return{x:e.pageXOffset||n.scrollLeft,y:e.pageYOffset||n.scrollTop}}function Z(e){var t=document.createElement("script"),n=e.match(o);return t.src=n[1],t}function et(e){return new K(e)}var e=window,t=e.document,n=t.documentElement,r="parentNode",i=/^(checked|value|selected|disabled)$/i,s=/^(select|fieldset|table|tbody|tfoot|td|tr|colgroup)$/i,o=/\s*<script +src=['"]([^'"]+)['"]>/,u=["<table>","</table>",1],a=["<table><tbody><tr>","</tr></tbody></table>",3],f=["<select>","</select>",1],l=["_","",0,1],c={thead:u,tbody:u,tfoot:u,colgroup:u,caption:u,tr:["<table><tbody>","</tbody></table>",2],th:a,td:a,col:["<table><colgroup>","</colgroup></table>",2],fieldset:["<form>","</form>",1],legend:["<form><fieldset>","</fieldset></form>",2],option:f,optgroup:f,script:l,style:l,link:l,param:l,base:l},h=/^(checked|selected|disabled)$/,p=/msie/i.test(navigator.userAgent),d,v,m,g={},y=0,b=/^-?[\d\.]+$/,w=/^data-(.+)$/,E="px",S="setAttribute",x="getAttribute",T="getElementsByTagName",N=function(){var e=t.createElement("p");return e.innerHTML='<a href="#x">x</a><table style="float:left;"></table>',{hrefExtended:e[T]("a")[0][x]("href")!="#x",autoTbody:e[T]("tbody").length!==0,computedStyle:t.defaultView&&t.defaultView.getComputedStyle,cssFloat:e[T]("table")[0].style.styleFloat?"styleFloat":"cssFloat",transform:function(){var t=["transform","webkitTransform","MozTransform","OTransform","msTransform"],n;for(n=0;n<t.length;n++)if(t[n]in e.style)return t[n]}(),classList:"classList"in e,opasity:function(){return typeof t.createElement("a").style.opacity!="undefined"}()}}(),C=/(^\s*|\s*$)/g,k=/\s+/,L=String.prototype.toString,A={lineHeight:1,zoom:1,zIndex:1,opacity:1,boxFlex:1,WebkitBoxFlex:1,MozBoxFlex:1},O=t.querySelectorAll&&function(e){return t.querySelectorAll(e)},M=String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(C,"")},_=N.computedStyle?function(e,n){var r=null,i=t.defaultView.getComputedStyle(e,"");return i&&(r=i[n]),e.style[n]||r}:!p||!n.currentStyle?function(e,t){return e.style[t]}:function(e,t){var n,r;if(t=="opacity"&&!N.opasity){n=100;try{n=e.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(i){try{n=e.filters("alpha").opacity}catch(s){}}return n/100}return r=e.currentStyle?e.currentStyle[t]:null,e.style[t]||r};return N.classList?(d=function(e,t){return e.classList.contains(t)},v=function(e,t){e.classList.add(t)},m=function(e,t){e.classList.remove(t)}):(d=function(e,t){return H(t).test(e.className)},v=function(e,t){e.className=M(e.className+" "+t)},m=function(e,t){e.className=M(e.className.replace(H(t)," "))}),K.prototype={get:function(e){return this[e]||null},each:function(e,t){return B(this,e,t)},deepEach:function(e,t){return j(this,e,t)},map:function(e,t){var n=[],r,i;for(i=0;i<this.length;i++)r=e.call(this,this[i],i),t?t(r)&&n.push(r):n.push(r);return n},html:function(e,t){var r=t?n.textContent===undefined?"innerText":"textContent":"innerHTML",i=this,o=function(t,n){B(P(e,i,n),function(e){t.appendChild(e)})},u=function(n,i){try{if(t||typeof e=="string"&&!s.test(n.tagName))return n[r]=e}catch(u){}o(n,i)};return typeof e!="undefined"?this.empty().each(u):this[0]?this[0][r]:""},text:function(e){return this.html(e,!0)},append:function(e){var t=this;return this.each(function(n,r){B(P(e,t,r),function(e){n.appendChild(e)})})},prepend:function(e){var t=this;return this.each(function(n,r){var i=n.firstChild;B(P(e,t,r),function(e){n.insertBefore(e,i)})})},appendTo:function(e,t){return X.call(this,e,t,function(e,t){e.appendChild(t)})},prependTo:function(e,t){return X.call(this,e,t,function(e,t){e.insertBefore(t,e.firstChild)},1)},before:function(e){var t=this;return this.each(function(n,i){B(P(e,t,i),function(e){n[r].insertBefore(e,n)})})},after:function(e){var t=this;return this.each(function(n,i){B(P(e,t,i),function(e){n[r].insertBefore(e,n.nextSibling)},null,1)})},insertBefore:function(e,t){return X.call(this,e,t,function(e,t){e[r].insertBefore(t,e)})},insertAfter:function(e,t){return X.call(this,e,t,function(e,t){var n=e.nextSibling;n?e[r].insertBefore(t,n):e[r].appendChild(t)},1)},replaceWith:function(e){return et(P(e)).insertAfter(this),this.remove()},clone:function(e){var t=[],n,r;for(r=0,n=this.length;r<n;r++)t[r]=Q(e||this,this[r]);return et(t)},addClass:function(e){return e=L.call(e).split(k),this.each(function(t){B(e,function(e){e&&!d(t,$(t,e))&&v(t,$(t,e))})})},removeClass:function(e){return e=L.call(e).split(k),this.each(function(t){B(e,function(e){e&&d(t,$(t,e))&&m(t,$(t,e))})})},hasClass:function(e){return e=L.call(e).split(k),z(this,function(t){return z(e,function(e){return e&&d(t,e)})})},toggleClass:function(e,t){return e=L.call(e).split(k),this.each(function(n){B(e,function(e){e&&(typeof t!="undefined"?t?!d(n,e)&&v(n,e):m(n,e):d(n,e)?m(n,e):v(n,e))})})},show:function(e){return e=typeof e=="string"?e:"",this.each(function(t){t.style.display=e})},hide:function(){return this.each(function(e){e.style.display="none"})},toggle:function(e,t){return t=typeof t=="string"?t:"",typeof e!="function"&&(e=null),this.each(function(n){n.style.display=n.offsetWidth||n.offsetHeight?"none":t,e&&e.call(n)})},first:function(){return et(this.length?this[0]:[])},last:function(){return et(this.length?this[this.length-1]:[])},next:function(){return this.related("nextSibling")},previous:function(){return this.related("previousSibling")},parent:function(){return this.related(r)},related:function(e){return et(this.map(function(t){t=t[e];while(t&&t.nodeType!==1)t=t[e];return t||0},function(e){return e}))},focus:function(){return this.length&&this[0].focus(),this},blur:function(){return this.length&&this[0].blur(),this},css:function(n,r){function o(e,t,n){for(var r in s)if(s.hasOwnProperty(r)){n=s[r],(t=W(r))&&b.test(n)&&!(t in A)&&(n+=E);try{e.style[t]=$(e,n)}catch(i){}}}var i,s=n;return r===undefined&&typeof n=="string"?(r=this[0],r?r===t||r===e?(i=r===t?et.doc():et.viewport(),n=="width"?i.width:n=="height"?i.height:""):(n=W(n))?_(r,n):null:null):(typeof n=="string"&&(s={},s[n]=r),p&&s.opacity&&(s.filter="alpha(opacity="+s.opacity*100+")",s.zoom=n.zoom||1,delete s.opacity),this.each(o))},offset:function(e,n){if(!e||typeof e!="object"||typeof e.top!="number"&&typeof e.left!="number"){if(typeof e=="number"||typeof n=="number")return this.each(function(t){V(t,e,n)});if(!this[0])return{top:0,left:0,height:0,width:0};var r=this[0],i=r.ownerDocument.documentElement,s=r.getBoundingClientRect(),o=Y(),u=r.offsetWidth,a=r.offsetHeight,f=s.top+o.y-Math.max(0,i&&i.clientTop,t.body.clientTop),l=s.left+o.x-Math.max(0,i&&i.clientLeft,t.body.clientLeft);return{top:f,left:l,height:a,width:u}}return this.each(function(t){V(t,e.left,e.top)})},dim:function(){if(!this.length)return{height:0,width:0};var e=this[0],t=e.nodeType==9&&e.documentElement,n=!t&&!!e.style&&!e.offsetWidth&&!e.offsetHeight?function(t){var n={position:e.style.position||"",visibility:e.style.visibility||"",display:e.style.display||""};return t.first().css({position:"absolute",visibility:"hidden",display:"block"}),n}(this):null,r=t?Math.max(e.body.scrollWidth,e.body.offsetWidth,t.scrollWidth,t.offsetWidth,t.clientWidth):e.offsetWidth,i=t?Math.max(e.body.scrollHeight,e.body.offsetHeight,t.scrollHeight,t.offsetHeight,t.clientHeight):e.offsetHeight;return n&&this.first().css(n),{height:i,width:r}},attr:function(e,t){var n=this[0],r;if(typeof e=="string"||e instanceof String)return typeof t=="undefined"?n?i.test(e)?h.test(e)&&typeof n[e]=="string"?!0:n[e]:e!="href"&&e!="src"||!N.hrefExtended?n[x](e):n[x](e,2):null:this.each(function(n){i.test(e)?n[e]=$(n,t):n[S](e,$(n,t))});for(r in e)e.hasOwnProperty(r)&&this.attr(r,e[r]);return this},removeAttr:function(e){return this.each(function(t){h.test(e)?t[e]=!1:t.removeAttribute(e)})},val:function(e){return typeof e=="string"?this.attr("value",e):this.length?this[0].value:null},data:function(e,t){var n=this[0],r,i;return typeof t=="undefined"?n?(r=q(n),typeof e=="undefined"?(B(n.attributes,function(e){(i=(""+e.name).match(w))&&(r[F(i[1])]=U(e.value))}),r):(typeof r[e]=="undefined"&&(r[e]=U(this.attr("data-"+I(e)))),r[e])):null:this.each(function(n){q(n)[e]=t})},remove:function(){return this.deepEach(R),this.detach()},empty:function(){return this.each(function(e){j(e.childNodes,R);while(e.firstChild)e.removeChild(e.firstChild)})},detach:function(){return this.each(function(e){e[r]&&e[r].removeChild(e)})},scrollTop:function(e){return J.call(this,null,e,"y")},scrollLeft:function(e){return J.call(this,e,null,"x")}},et.setQueryEngine=function(e){O=e,delete et.setQueryEngine},et.aug=function(e,t){for(var n in e)e.hasOwnProperty(n)&&((t||K.prototype)[n]=e[n])},et.create=function(e){return typeof e=="string"&&e!==""?function(){if(o.test(e))return[Z(e)];var n=e.match(/^\s*<([^\s>]+)/),i=t.createElement("div"),s=[],u=n?c[n[1].toLowerCase()]:null,a=u?u[2]+1:1,f=u&&u[3],l=r,h=N.autoTbody&&u&&u[0]=="<table>"&&!/<tbody/i.test(e);i.innerHTML=u?u[0]+e+u[1]:e;while(a--)i=i.firstChild;f&&i&&i.nodeType!==1&&(i=i.nextSibling);do(!n||i.nodeType==1)&&(!h||i.tagName&&i.tagName!="TBODY")&&s.push(i);while(i=i.nextSibling);return B(s,function(e){e[l]&&e[l].removeChild(e)}),s}():D(e)?[e.cloneNode(!0)]:[]},et.doc=function(){var e=et.viewport();return{width:Math.max(t.body.scrollWidth,n.scrollWidth,e.width),height:Math.max(t.body.scrollHeight,n.scrollHeight,e.height)}},et.firstChild=function(e){for(var t=e.childNodes,n=0,r=t&&t.length||0,i;n<r;n++)t[n].nodeType===1&&(i=t[r=n]);return i},et.viewport=function(){return{width:p?n.clientWidth:self.innerWidth,height:p?n.clientHeight:self.innerHeight}},et.isAncestor="compareDocumentPosition"in n?function(e,t){return(e.compareDocumentPosition(t)&16)==16}:"contains"in n?function(e,t){return e!==t&&e.contains(t)}:function(e,t){while(t=t[r])if(t===e)return!0;return!1},et})