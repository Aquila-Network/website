"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6048],{6048:function(t,e,r){r.r(e),r.d(e,{scopeCss:function(){return B}});var n=r(655),s="-shadowcsshost",c="-shadowcssslotted",o="-shadowcsscontext",i=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",u=new RegExp("(-shadowcsshost"+i,"gim"),a=new RegExp("(-shadowcsscontext"+i,"gim"),l=new RegExp("(-shadowcssslotted"+i,"gim"),f="-shadowcsshost-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,p=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,m=/::slotted/gim,v=/:host-context/gim,_=/\/\*\s*[\s\S]*?\*\//g,x=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,S="%BLOCK%",O=function(t,e){var r=W(t),n=0;return r.escapedString.replace(w,(function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];var c=t[2],o="",i=t[4],u="";i&&i.startsWith("{%BLOCK%")&&(o=r.blocks[n++],i=i.substring(S.length+1),u="{");var a={selector:c,content:o},l=e(a);return""+t[1]+l.selector+t[3]+u+l.content+i}))},W=function(t){for(var e=t.split(b),r=[],n=[],s=0,c=[],o=0;o<e.length;o++){var i=e[o];"}"===i&&s--,s>0?c.push(i):(c.length>0&&(n.push(c.join("")),r.push(S),c=[]),r.push(i)),"{"===i&&s++}return c.length>0&&(n.push(c.join("")),r.push(S)),{escapedString:r.join(""),blocks:n}},k=function(t,e,r){return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var n=t[2].split(","),s=[],c=0;c<n.length;c++){var o=n[c].trim();if(!o)break;s.push(r(f,o,t[3]))}return s.join(",")}return f+t[3]}))},E=function(t,e,r){return t+e.replace(s,"")+r},j=function(t,e,r){return e.indexOf(s)>-1?E(t,e,r):t+e+r+", "+e+" "+t+r},C=function(t,e){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e).test(t)},R=function(t,e,r){for(var n,s="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]}))),c=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(f)>-1)n=function(t,e,r){if(g.lastIndex=0,g.test(t)){var n="."+r;return t.replace(h,(function(t,e){return e.replace(/([^:]*)(:*)(.*)/,(function(t,e,r,s){return e+n+r+s}))})).replace(g,n+" ")}return e+" "+t}(t,e,r);else{var c=t.replace(g,"");if(c.length>0){var o=c.match(/([^:]*)(:*)(.*)/);o&&(n=o[1]+s+o[2]+o[3])}}return n},o=function(t){var e=[],r=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var s="__ph-"+r+"__";return e.push(n),r++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,s){var c="__ph-"+r+"__";return e.push(s),r++,n+c})),placeholders:e}}(t),i="",u=0,a=/( |>|\+|~(?!=))\s*/g,l=!((t=o.content).indexOf(f)>-1);null!==(n=a.exec(t));){var p=n[1],d=t.slice(u,n.index).trim();i+=((l=l||d.indexOf(f)>-1)?c(d):d)+" "+p+" ",u=a.lastIndex}var m=t.substring(u);return i+=(l=l||m.indexOf(f)>-1)?c(m):m,function(t,e){return e.replace(/__ph-(\d+)__/g,(function(e,r){return t[+r]}))}(o.placeholders,i)},L=function(t,e,r,n,s){return O(t,(function(t){var s=t.selector,c=t.content;return"@"!==t.selector[0]?s=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():C(t,e)?R(t,e,r).trim():t.trim()})).join(", ")}(t.selector,e,r,n):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(c=L(t.content,e,r,n)),{selector:s.replace(/\s{2,}/g," ").trim(),content:c}}))},T=function(t,e,r,n,i){var h=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(l,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var s=t[2].trim(),c=t[3],o=r+s+c,i="",u=t[4]-1;u>=0;u--){var a=t[5][u];if("}"===a||","===a)break;i=a+i}var l=i+o,h=""+i.trimRight()+o.trim();if(l.trim()!==h.trim()){var p=h+", "+l;n.push({orgSelector:l,updatedSelector:p})}return o}return f+t[3]})),{selectors:n,cssText:t}}(t=function(t){return k(t,a,j)}(t=function(t){return k(t,u,E)}(t=function(t){return t.replace(v,o).replace(d,s).replace(m,c)}(t))),n);return t=function(t){return p.reduce((function(t,e){return t.replace(e," ")}),t)}(t=h.cssText),e&&(t=L(t,e,r,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+r)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:h.selectors}},B=function(t,e,r){var s=e+"-h",c=e+"-s",o=function(t){return t.match(x)||[]}(t);t=function(t){return t.replace(_,"")}(t);var i=[];if(r){var u=function(t){var e="/*!@___"+i.length+"___*/",r="/*!@"+t.selector+"*/";return i.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=O(t,(function(t){return"@"!==t.selector[0]?u(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=O(t.content,u),t):t}))}var a=T(t,e,s,c);return t=(0,n.ev)([a.cssText],o).join("\n"),r&&i.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),a.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);