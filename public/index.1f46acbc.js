var e,n,t=globalThis,r={},a={},o=t.parcelRequire94c2;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){a[e]=n},t.parcelRequire94c2=o),(0,o.register)("27Lyk",function(e,n){Object.defineProperty(e.exports,"register",{get:()=>t,set:e=>t=e,enumerable:!0,configurable:!0});var t,r=new Map;t=function(e,n){for(var t=0;t<n.length-1;t+=2)r.set(n[t],{baseUrl:e,path:n[t+1]})}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["jYEaB","index.1f46acbc.js","DW8Y8","super_mario__power_star_2d_by_joshuat1306_dcn2u2d-fullview.e1e8a058.png"]'));var i={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},u={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},s=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],c={CSS:{},springs:{}};function f(e,n,t){return Math.min(Math.max(e,n),t)}function l(e,n){return e.indexOf(n)>-1}function d(e,n){return e.apply(null,n)}var p={arr:function(e){return Array.isArray(e)},obj:function(e){return l(Object.prototype.toString.call(e),"Object")},pth:function(e){return p.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||p.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return p.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return p.hex(e)||p.rgb(e)||p.hsl(e)},key:function(e){return!i.hasOwnProperty(e)&&!u.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function h(e){var n=/\(([^)]+)\)/.exec(e);return n?n[1].split(",").map(function(e){return parseFloat(e)}):[]}function v(e,n){var t=h(e),r=f(p.und(t[0])?1:t[0],.1,100),a=f(p.und(t[1])?100:t[1],.1,100),o=f(p.und(t[2])?10:t[2],.1,100),i=f(p.und(t[3])?0:t[3],.1,100),u=Math.sqrt(a/r),s=o/(2*Math.sqrt(a*r)),l=s<1?u*Math.sqrt(1-s*s):0,d=s<1?(s*u+-i)/l:-i+u;function v(e){var t=n?n*e/1e3:e;return(t=s<1?Math.exp(-t*s*u)*(+Math.cos(l*t)+d*Math.sin(l*t)):(1+d*t)*Math.exp(-t*u),0===e||1===e)?e:1-t}return n?v:function(){var n=c.springs[e];if(n)return n;for(var t=1/6,r=0,a=0;;)if(1===v(r+=t)){if(++a>=16)break}else a=0;var o=r*t*1e3;return c.springs[e]=o,o}}function g(e){return void 0===e&&(e=10),function(n){return Math.ceil(f(n,1e-6,1)*e)*(1/e)}}var m=function(){function e(e,n,t){return(((1-3*t+3*n)*e+(3*t-6*n))*e+3*n)*e}function n(e,n,t){return 3*(1-3*t+3*n)*e*e+2*(3*t-6*n)*e+3*n}return function(t,r,a,o){if(0<=t&&t<=1&&0<=a&&a<=1){var i=new Float32Array(11);if(t!==r||a!==o)for(var u=0;u<11;++u)i[u]=e(.1*u,t,a);return function(u){return t===r&&a===o||0===u||1===u?u:e(function(r){for(var o=0,u=1;10!==u&&i[u]<=r;++u)o+=.1;var s=o+(r-i[--u])/(i[u+1]-i[u])*.1,c=n(s,t,a);return c>=.001?function(t,r,a,o){for(var i=0;i<4;++i){var u=n(r,a,o);if(0===u)break;var s=e(r,a,o)-t;r-=s/u}return r}(r,s,t,a):0===c?s:function(n,t,r,a,o){var i,u,s=0;do(i=e(u=t+(r-t)/2,a,o)-n)>0?r=u:t=u;while(Math.abs(i)>1e-7&&++s<10)return u}(r,o,o+.1,t,a)}(u),r,o)}}}}(),y=(e={linear:function(){return function(e){return e}}},n={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Expo:function(){return function(e){return e?Math.pow(2,10*e-10):0}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var n,t=4;e<((n=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*n-2)/22-e,2)}},Elastic:function(e,n){void 0===e&&(e=1),void 0===n&&(n=.5);var t=f(e,1,10),r=f(n,.1,2);return function(e){return 0===e||1===e?e:-t*Math.pow(2,10*(e-1))*Math.sin(2*Math.PI*(e-1-r/(2*Math.PI)*Math.asin(1/t))/r)}}},["Quad","Cubic","Quart","Quint"].forEach(function(e,t){n[e]=function(){return function(e){return Math.pow(e,t+2)}}}),Object.keys(n).forEach(function(t){var r=n[t];e["easeIn"+t]=r,e["easeOut"+t]=function(e,n){return function(t){return 1-r(e,n)(1-t)}},e["easeInOut"+t]=function(e,n){return function(t){return t<.5?r(e,n)(2*t)/2:1-r(e,n)(-2*t+2)/2}},e["easeOutIn"+t]=function(e,n){return function(t){return t<.5?(1-r(e,n)(1-2*t))/2:(r(e,n)(2*t-1)+1)/2}}}),e);function b(e,n){if(p.fnc(e))return e;var t=e.split("(")[0],r=y[t],a=h(e);switch(t){case"spring":return v(e,n);case"cubicBezier":return d(m,a);case"steps":return d(g,a);default:return d(r,a)}}function w(e){try{return document.querySelectorAll(e)}catch(e){return}}function x(e,n){for(var t=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<t;o++)if(o in e){var i=e[o];n.call(r,i,o,e)&&a.push(i)}return a}function M(e){return e.reduce(function(e,n){return e.concat(p.arr(n)?M(n):n)},[])}function O(e){return p.arr(e)?e:(p.str(e)&&(e=w(e)||e),e instanceof NodeList||e instanceof HTMLCollection)?[].slice.call(e):[e]}function k(e,n){return e.some(function(e){return e===n})}function _(e){var n={};for(var t in e)n[t]=e[t];return n}function C(e,n){var t=_(e);for(var r in e)t[r]=n.hasOwnProperty(r)?n[r]:e[r];return t}function D(e,n){var t=_(e);for(var r in n)t[r]=p.und(e[r])?n[r]:e[r];return t}function P(e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(n)return n[1]}function E(e,n){return p.fnc(e)?e(n.target,n.id,n.total):e}function I(e,n){return e.getAttribute(n)}function B(e,n,t){if(k([t,"deg","rad","turn"],P(n)))return n;var r=c.CSS[n+t];if(!p.und(r))return r;var a=document.createElement(e.tagName),o=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+t;var i=100/a.offsetWidth;o.removeChild(a);var u=i*parseFloat(n);return c.CSS[n+t]=u,u}function T(e,n,t){if(n in e.style){var r=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[n]||getComputedStyle(e).getPropertyValue(r)||"0";return t?B(e,a,t):a}}function F(e,n){return p.dom(e)&&!p.inp(e)&&(!p.nil(I(e,n))||p.svg(e)&&e[n])?"attribute":p.dom(e)&&k(s,n)?"transform":p.dom(e)&&"transform"!==n&&T(e,n)?"css":null!=e[n]?"object":void 0}function S(e){if(p.dom(e)){for(var n,t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;n=r.exec(t);)a.set(n[1],n[2]);return a}}function L(e,n,t,r){switch(F(e,n)){case"transform":var a,o;return a=l(n,"scale")?1:0+(l(n,"translate")||"perspective"===n?"px":l(n,"rotate")||l(n,"skew")?"deg":void 0),o=S(e).get(n)||a,r&&(r.transforms.list.set(n,o),r.transforms.last=n),t?B(e,o,t):o;case"css":return T(e,n,t);case"attribute":return I(e,n);default:return e[n]||0}}function A(e,n){var t=/^(\*=|\+=|-=)/.exec(e);if(!t)return e;var r=P(e)||0,a=parseFloat(n),o=parseFloat(e.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function N(e,n){if(p.col(e)){var t,r,a,o;return t=e,p.rgb(t)?(r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t))?"rgba("+r[1]+",1)":t:p.hex(t)?(a=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,n,t,r){return n+n+t+t+r+r}),"rgba("+parseInt((o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))[1],16)+","+parseInt(o[2],16)+","+parseInt(o[3],16)+",1)"):p.hsl(t)?function(e){var n,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),o=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function c(e,n,t){return(t<0&&(t+=1),t>1&&(t-=1),t<1/6)?e+(n-e)*6*t:t<.5?n:t<2/3?e+(n-e)*(2/3-t)*6:e}if(0==i)n=t=r=u;else{var f=u<.5?u*(1+i):u+i-u*i,l=2*u-f;n=c(l,f,o+1/3),t=c(l,f,o),r=c(l,f,o-1/3)}return"rgba("+255*n+","+255*t+","+255*r+","+s+")"}(t):void 0}if(/\s/g.test(e))return e;var i=P(e),u=i?e.substr(0,e.length-i.length):e;return n?u+n:u}function j(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function H(e){for(var n,t=e.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);a>0&&(r+=j(n,o)),n=o}return r}function q(e){var n;if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return 2*Math.PI*I(e,"r");case"rect":return 2*I(e,"width")+2*I(e,"height");case"line":return j({x:I(e,"x1"),y:I(e,"y1")},{x:I(e,"x2"),y:I(e,"y2")});case"polyline":return H(e);case"polygon":return n=e.points,H(e)+j(n.getItem(n.numberOfItems-1),n.getItem(0))}}function R(e,n){var t=n||{},r=t.el||function(e){for(var n=e.parentNode;p.svg(n)&&p.svg(n.parentNode);)n=n.parentNode;return n}(e),a=r.getBoundingClientRect(),o=I(r,"viewBox"),i=a.width,u=a.height,s=t.viewBox||(o?o.split(" "):[0,0,i,u]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:i,h:u,vW:s[2],vH:s[3]}}function V(e,n){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=N(p.pth(e)?e.totalLength:e,n)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:p.str(e)||n?r.split(t):[]}}function W(e){return x(e?M(p.arr(e)?e.map(O):O(e)):[],function(e,n,t){return t.indexOf(e)===n})}function $(e){var n=W(e);return n.map(function(e,t){return{target:e,id:t,total:n.length,transforms:{list:S(e)}}})}var U={css:function(e,n,t){return e.style[n]=t},attribute:function(e,n,t){return e.setAttribute(n,t)},object:function(e,n,t){return e[n]=t},transform:function(e,n,t,r,a){if(r.list.set(n,t),n===r.last||a){var o="";r.list.forEach(function(e,n){o+=n+"("+e+") "}),e.style.transform=o}}};function Y(e,n){$(e).forEach(function(e){for(var t in n){var r=E(n[t],e),a=e.target,o=P(r),i=L(a,t,o,e),u=A(N(r,o||P(i)),i);U[F(a,t)](a,t,u,e.transforms,!0)}})}function X(e,n){var t=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,e.map(function(e){return r(e)+e.duration})):n.duration,a.delay=t?Math.min.apply(Math,e.map(function(e){return r(e)+e.delay})):n.delay,a.endDelay=t?a.duration-Math.max.apply(Math,e.map(function(e){return r(e)+e.duration-e.endDelay})):n.endDelay,a}var Z=0,G=[],Q=function(){var e;function n(t){for(var r=G.length,a=0;a<r;){var o=G[a];o.paused?(G.splice(a,1),r--):(o.tick(t),a++)}e=a>0?requestAnimationFrame(n):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){J.suspendWhenDocumentHidden&&(z()?e=cancelAnimationFrame(e):(G.forEach(function(e){return e._onDocumentVisibility()}),Q()))}),function(){e||z()&&J.suspendWhenDocumentHidden||!(G.length>0)||(e=requestAnimationFrame(n))}}();function z(){return!!document&&document.hidden}function J(e){void 0===e&&(e={});var n,t,r,a,o,s,c,l,d,h=0,g=0,m=0,y=0,w=null;function O(e){var n=window.Promise&&new Promise(function(e){return w=e});return e.finished=n,n}var k=(t=C(i,n=e),a=function(e,n){var t=[],r=n.keyframes;for(var a in r&&(n=D(function(e){for(var n=x(M(e.map(function(e){return Object.keys(e)})),function(e){return p.key(e)}).reduce(function(e,n){return 0>e.indexOf(n)&&e.push(n),e},[]),t={},r=0;r<n.length;r++)!function(r){var a=n[r];t[a]=e.map(function(e){var n={};for(var t in e)p.key(t)?t==a&&(n.value=e[t]):n[t]=e[t];return n})}(r);return t}(r),n)),n)p.key(a)&&t.push({name:a,tweens:function(e,n){var t=_(n);if(/^spring/.test(t.easing)&&(t.duration=v(t.easing)),p.arr(e)){var r=e.length;2!==r||p.obj(e[0])?p.fnc(n.duration)||(t.duration=n.duration/r):e={value:e}}var a=p.arr(e)?e:[e];return a.map(function(e,t){var r=p.obj(e)&&!p.pth(e)?e:{value:e};return p.und(r.delay)&&(r.delay=t?0:n.delay),p.und(r.endDelay)&&(r.endDelay=t===a.length-1?n.endDelay:0),r}).map(function(e){return D(e,t)})}(n[a],e)});return t}(r=C(u,n),n),c=X(s=x(M((o=$(n.targets)).map(function(e){return a.map(function(n){return function(e,n){var t=F(e.target,n.name);if(t){var r,a=n.tweens.map(function(t){var a=function(e,n){var t={};for(var r in e){var a=E(e[r],n);p.arr(a)&&1===(a=a.map(function(e){return E(e,n)})).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(t,e),o=a.value,i=p.arr(o)?o[1]:o,u=P(i),s=L(e.target,n.name,u,e),c=r?r.to.original:s,f=p.arr(o)?o[0]:c,l=P(f)||P(s),d=u||l;return p.und(i)&&(i=c),a.from=V(f,d),a.to=V(A(i,f),d),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=b(a.easing,a.duration),a.isPath=p.pth(o),a.isPathTargetInsideSVG=a.isPath&&p.svg(e.target),a.isColor=p.col(a.from.original),a.isColor&&(a.round=1),r=a,a}),o=a[a.length-1];return{type:t,property:n.name,animatable:e,tweens:a,duration:o.end,delay:a[0].delay,endDelay:o.endDelay}}}(e,n)})})),function(e){return!p.und(e)}),r),l=Z,Z++,D(t,{id:l,children:[],animatables:o,animations:s,duration:c.duration,delay:c.delay,endDelay:c.endDelay}));function I(){var e=k.direction;"alternate"!==e&&(k.direction="normal"!==e?"normal":"reverse"),k.reversed=!k.reversed,d.forEach(function(e){return e.reversed=k.reversed})}function B(e){return k.reversed?k.duration-e:e}function T(){h=0,g=B(k.currentTime)*(1/J.speed)}function S(e,n){n&&n.seek(e-n.timelineOffset)}function N(e){for(var n=0,t=k.animations,r=t.length;n<r;){var a=t[n],o=a.animatable,i=a.tweens,u=i.length-1,s=i[u];u&&(s=x(i,function(n){return e<n.end})[0]||s);for(var c=f(e-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(c)?1:s.easing(c),d=s.to.strings,p=s.round,h=[],v=s.to.numbers.length,g=void 0,m=0;m<v;m++){var y=void 0,b=s.to.numbers[m],w=s.from.numbers[m]||0;y=s.isPath?function(e,n,t){function r(t){void 0===t&&(t=0);var r=n+t>=1?n+t:0;return e.el.getPointAtLength(r)}var a=R(e.el,e.svg),o=r(),i=r(-1),u=r(1),s=t?1:a.w/a.vW,c=t?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*s;case"y":return(o.y-a.y)*c;case"angle":return 180*Math.atan2(u.y-i.y,u.x-i.x)/Math.PI}}(s.value,l*b,s.isPathTargetInsideSVG):w+l*(b-w),p&&!(s.isColor&&m>2)&&(y=Math.round(y*p)/p),h.push(y)}var M=d.length;if(M){g=d[0];for(var O=0;O<M;O++){d[O];var _=d[O+1],C=h[O];isNaN(C)||(_?g+=C+_:g+=C+" ")}}else g=h[0];U[a.type](o.target,a.property,g,o.transforms),a.currentValue=g,n++}}function j(e){k[e]&&!k.passThrough&&k[e](k)}function H(e){var n=k.duration,t=k.delay,r=n-k.endDelay,a=B(e);k.progress=f(a/n*100,0,100),k.reversePlayback=a<k.currentTime,d&&function(e){if(k.reversePlayback)for(var n=y;n--;)S(e,d[n]);else for(var t=0;t<y;t++)S(e,d[t])}(a),!k.began&&k.currentTime>0&&(k.began=!0,j("begin")),!k.loopBegan&&k.currentTime>0&&(k.loopBegan=!0,j("loopBegin")),a<=t&&0!==k.currentTime&&N(0),(a>=r&&k.currentTime!==n||!n)&&N(n),a>t&&a<r?(k.changeBegan||(k.changeBegan=!0,k.changeCompleted=!1,j("changeBegin")),j("change"),N(a)):k.changeBegan&&(k.changeCompleted=!0,k.changeBegan=!1,j("changeComplete")),k.currentTime=f(a,0,n),k.began&&j("update"),e>=n&&(g=0,k.remaining&&!0!==k.remaining&&k.remaining--,k.remaining?(h=m,j("loopComplete"),k.loopBegan=!1,"alternate"===k.direction&&I()):(k.paused=!0,!k.completed&&(k.completed=!0,j("loopComplete"),j("complete"),!k.passThrough&&"Promise"in window&&(w(),O(k)))))}return O(k),k.reset=function(){var e=k.direction;k.passThrough=!1,k.currentTime=0,k.progress=0,k.paused=!0,k.began=!1,k.loopBegan=!1,k.changeBegan=!1,k.completed=!1,k.changeCompleted=!1,k.reversePlayback=!1,k.reversed="reverse"===e,k.remaining=k.loop,y=(d=k.children).length;for(var n=y;n--;)k.children[n].reset();(k.reversed&&!0!==k.loop||"alternate"===e&&1===k.loop)&&k.remaining++,N(k.reversed?k.duration:0)},k._onDocumentVisibility=T,k.set=function(e,n){return Y(e,n),k},k.tick=function(e){m=e,h||(h=m),H((m+(g-h))*J.speed)},k.seek=function(e){H(B(e))},k.pause=function(){k.paused=!0,T()},k.play=function(){k.paused&&(k.completed&&k.reset(),k.paused=!1,G.push(k),T(),Q())},k.reverse=function(){I(),k.completed=!k.reversed,T()},k.restart=function(){k.reset(),k.play()},k.remove=function(e){ee(W(e),k)},k.reset(),k.autoplay&&k.play(),k}function K(e,n){for(var t=n.length;t--;)k(e,n[t].animatable.target)&&n.splice(t,1)}function ee(e,n){var t=n.animations,r=n.children;K(e,t);for(var a=r.length;a--;){var o=r[a],i=o.animations;K(e,i),i.length||o.children.length||r.splice(a,1)}t.length||r.length||n.pause()}J.version="3.2.1",J.speed=1,J.suspendWhenDocumentHidden=!0,J.running=G,J.remove=function(e){for(var n=W(e),t=G.length;t--;)ee(n,G[t])},J.get=L,J.set=Y,J.convertPx=B,J.path=function(e,n){var t=p.str(e)?w(e)[0]:e,r=n||100;return function(e){return{property:e,el:t,svg:R(t),totalLength:q(t)*(r/100)}}},J.setDashoffset=function(e){var n=q(e);return e.setAttribute("stroke-dasharray",n),n},J.stagger=function(e,n){void 0===n&&(n={});var t=n.direction||"normal",r=n.easing?b(n.easing):null,a=n.grid,o=n.axis,i=n.from||0,u="first"===i,s="center"===i,c="last"===i,f=p.arr(e),l=f?parseFloat(e[0]):parseFloat(e),d=f?parseFloat(e[1]):0,h=P(f?e[1]:e)||0,v=n.start||0+(f?l:0),g=[],m=0;return function(e,n,p){if(u&&(i=0),s&&(i=(p-1)/2),c&&(i=p-1),!g.length){for(var y=0;y<p;y++){if(a){var b=s?(a[0]-1)/2:i%a[0],w=s?(a[1]-1)/2:Math.floor(i/a[0]),x=y%a[0],M=Math.floor(y/a[0]),O=b-x,k=w-M,_=Math.sqrt(O*O+k*k);"x"===o&&(_=-O),"y"===o&&(_=-k),g.push(_)}else g.push(Math.abs(i-y));m=Math.max.apply(Math,g)}r&&(g=g.map(function(e){return r(e/m)*m})),"reverse"===t&&(g=g.map(function(e){return o?e<0?-1*e:-e:Math.abs(m-e)}))}return v+(f?(d-l)/m:l)*(Math.round(100*g[n])/100)+h}},J.timeline=function(e){void 0===e&&(e={});var n=J(e);return n.duration=0,n.add=function(t,r){var a=G.indexOf(n),o=n.children;function i(e){e.passThrough=!0}a>-1&&G.splice(a,1);for(var s=0;s<o.length;s++)i(o[s]);var c=D(t,C(u,e));c.targets=c.targets||e.targets;var f=n.duration;c.autoplay=!1,c.direction=n.direction,c.timelineOffset=p.und(r)?f:A(r,f),i(n),n.seek(c.timelineOffset);var l=J(c);i(l),o.push(l);var d=X(o,e);return n.delay=d.delay,n.endDelay=d.endDelay,n.duration=d.duration,n.seek(0),n.reset(),n.autoplay&&n.play(),n},n},J.easing=b,J.penner=y,J.random=function(e,n){return Math.floor(Math.random()*(n-e+1))+e};const en=document.createElement("img");document.body.append(en);var et={};et=new URL("super_mario__power_star_2d_by_joshuat1306_dcn2u2d-fullview.e1e8a058.png",import.meta.url).toString();const er=new URL(et);en.src=er.href,J({targets:en,rotate:360,duration:8e3,loop:!0});
//# sourceMappingURL=index.1f46acbc.js.map
