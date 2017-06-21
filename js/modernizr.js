/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-appearance-backgroundsize-bgsizecover-borderradius-boxshadow-boxsizing-cssanimations-csscalc-cssgradients-csstransforms-csstransitions-cssvhunit-cssvwunit-flexbox-flexboxlegacy-flexboxtweener-lastchild-mediaqueries-nthchild-opacity-rgba-svg-svgasimg-textshadow-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;for(var d in w)if(w.hasOwnProperty(d)){if(e=[],t=w[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),x.push((o?"":"no-")+a.join("-"))}}function i(e){var t=T.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?T.className.baseVal=t:T.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){if("object"==typeof e)for(var n in e)_(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function d(){var e=t.body;return e||(e=s(S?"svg":"body"),e.fake=!0),e}function l(e,n,r,o){var i,a,l,u,f="modernizr",c=s("div"),p=d();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:f+(r+1),c.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+f,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),a=n(c,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=u,T.offsetHeight):c.parentNode.removeChild(c),!!a}function u(e,t){return!!~(""+e).indexOf(t)}function f(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?f(o,n||t):o);return!1}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function h(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(h(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+h(t[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function m(e,t,o,i){function a(){l&&(delete A.style,delete A.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var d=g(e,o);if(!r(d,"undefined"))return d}for(var l,f,c,h,m,v=["modernizr","tspan","samp"];!A.style&&v.length;)l=!0,A.modElem=s(v.shift()),A.style=A.modElem.style;for(c=e.length,f=0;c>f;f++)if(h=e[f],m=A.style[h],u(h,"-")&&(h=p(h)),A.style[h]!==n){if(i||r(o,"undefined"))return a(),"pfx"==t?h:!0;try{A.style[h]=o}catch(y){}if(A.style[h]!=m)return a(),"pfx"==t?h:!0}return a(),!1}function v(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?m(a,t,o,i):(a=(e+" "+N.join(s+" ")+s).split(" "),c(a,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var x=[],w=[],b={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var T=t.documentElement,S="svg"===T.nodeName.toLowerCase();Modernizr.addTest("rgba",function(){var e=s("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var C=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=C,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=s("a");return n.style.cssText=e+C.join(t+e),!!n.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,i=C.length-1;i>o;o++)e=0===o?"to ":"",r+=t+C[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var a=s("a"),d=a.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=C.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var _;!function(){var e={}.hasOwnProperty;_=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),b._l={},b.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},b._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){b.addTest=a}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var z=b.testStyles=l;z("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),z("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5),z("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",r==n)}),z("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",r==n)});var k=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();b.mq=k,Modernizr.addTest("mediaqueries",k("only all"));var P="Moz O ms Webkit",E=b._config.usePrefixes?P.split(" "):[];b._cssomPrefixes=E;var N=b._config.usePrefixes?P.toLowerCase().split(" "):[];b._domPrefixes=N;var j={elem:s("modernizr")};Modernizr._q.push(function(){delete j.elem});var A={style:j.elem.style};Modernizr._q.unshift(function(){delete A.style});var O=b.testProp=function(e,t,r){return m([e],n,t,r)};Modernizr.addTest("textshadow",O("textShadow","1px 1px")),b.testAllProps=v,b.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("appearance",y("appearance")),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",y("backgroundSize","cover")),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",y("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransitions",y("transition","all",!0)),o(),i(x),delete b.addTest,delete b.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);
