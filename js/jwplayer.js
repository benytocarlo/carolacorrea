if(typeof jwplayer=="undefined"){var jwplayer=function(a){if(jwplayer.api){return jwplayer.api.selectPlayer(a)}};var $jw=jwplayer;jwplayer.version="5.8.2011";jwplayer.vid=document.createElement("video");jwplayer.audio=document.createElement("audio");jwplayer.source=document.createElement("source");(function(b){b.utils=function(){};b.utils.typeOf=function(d){var c=typeof d;if(c==="object"){if(d){if(d instanceof Array){c="array"}}else{c="null"}}return c};b.utils.extend=function(){var c=b.utils.extend["arguments"];if(c.length>1){for(var e=1;e<c.length;e  ){for(var d in c[e]){c[0][d]=c[e][d]}}return c[0]}return null};b.utils.clone=function(f){var c;var d=b.utils.clone["arguments"];if(d.length==1){switch(b.utils.typeOf(d[0])){case"object":c={};for(var e in d[0]){c[e]=b.utils.clone(d[0][e])}break;case"array":c=[];for(var e in d[0]){c[e]=b.utils.clone(d[0][e])}break;default:return d[0];break}}return c};b.utils.extension=function(c){if(!c){return""}c=c.substring(c.lastIndexOf("/") 1,c.length);c=c.split("?")[0];if(c.lastIndexOf(".")>-1){return c.substr(c.lastIndexOf(".") 1,c.length).toLowerCase()}return};b.utils.html=function(c,d){c.innerHTML=d};b.utils.wrap=function(c,d){if(c.parentNode){c.parentNode.replaceChild(d,c)}d.appendChild(c)};b.utils.ajax=function(g,f,c){var e;if(window.XMLHttpRequest){e=new XMLHttpRequest()}else{e=new ActiveXObject("Microsoft.XMLHTTP")}e.onreadystatechange=function(){if(e.readyState===4){if(e.status===200){if(f){if(!b.utils.exists(e.responseXML)){try{if(window.DOMParser){var h=(new DOMParser()).parseFromString(e.responseText,"text/xml");if(h){e=b.utils.extend({},e,{responseXML:h})}}else{h=new ActiveXObject("Microsoft.XMLDOM");h.async="false";h.loadXML(e.responseText);e=b.utils.extend({},e,{responseXML:h})}}catch(j){if(c){c(g)}}}f(e)}}else{if(c){c(g)}}}};try{e.open("GET",g,true);e.send(null)}catch(d){if(c){c(g)}}return e};b.utils.load=function(d,e,c){d.onreadystatechange=function(){if(d.readyState===4){if(d.status===200){if(e){e()}}else{if(c){c()}}}}};b.utils.find=function(d,c){return d.getElementsByTagName(c)};b.utils.append=function(c,d){c.appendChild(d)};b.utils.isIE=function(){return((! "\v1")||(typeof window.ActiveXObject!="undefined"))};b.utils.userAgentMatch=function(d){var c=navigator.userAgent.toLowerCase();return(c.match(d)!==null)};b.utils.isIOS=function(){return b.utils.userAgentMatch(/iP(hone|ad|od)/i)};b.utils.isIPad=function(){return b.utils.userAgentMatch(/iPad/i)};b.utils.isIPod=function(){return b.utils.userAgentMatch(/iP(hone|od)/i)};b.utils.isAndroid=function(){return b.utils.userAgentMatch(/android/i)};b.utils.isLegacyAndroid=function(){return b.utils.userAgentMatch(/android 2.[012]/i)};b.utils.isBlackberry=function(){return b.utils.userAgentMatch(/blackberry/i)};b.utils.isMobile=function(){return b.utils.isIOS()};b.utils.getFirstPlaylistItemFromConfig=function(c){var d={};var e;if(c.playlist&&c.playlist.length){e=c.playlist[0]}else{e=c}d.file=e.file;d.levels=e.levels;d.streamer=e.streamer;d.playlistfile=e.playlistfile;d.provider=e.provider;if(!d.provider){if(d.file&&(d.file.toLowerCase().indexOf("youtube.com")>-1||d.file.toLowerCase().indexOf("youtu.be")>-1)){d.provider="youtube"}if(d.streamer&&d.streamer.toLowerCase().indexOf("rtmp://")==0){d.provider="rtmp"}if(e.type){d.provider=e.type.toLowerCase()}}if(d.provider=="audio"){d.provider="sound"}return d};b.utils.getOuterHTML=function(c){if(c.outerHTML){return c.outerHTML}else{try{return new XMLSerializer().serializeToString(c)}catch(d){return""}}};b.utils.setOuterHTML=function(f,e){if(f.outerHTML){f.outerHTML=e}else{var g=document.createElement("div");g.innerHTML=e;var c=document.createRange();c.selectNodeContents(g);var d=c.extractContents();f.parentNode.insertBefore(d,f);f.parentNode.removeChild(f)}};b.utils.hasFlash=function(){if(typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]!="undefined"){return true}if(typeof window.ActiveXObject!="undefined"){try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return true}catch(c){}}return false};b.utils.getPluginName=function(c){if(c.lastIndexOf("/")>=0){c=c.substring(c.lastIndexOf("/") 1,c.length)}if(c.lastIndexOf("-")>=0){c=c.substring(0,c.lastIndexOf("-"))}if(c.lastIndexOf(".swf")>=0){c=c.substring(0,c.lastIndexOf(".swf"))}if(c.lastIndexOf(".js")>=0){c=c.substring(0,c.lastIndexOf(".js"))}return c};b.utils.getPluginVersion=function(c){if(c.lastIndexOf("-")>=0){if(c.lastIndexOf(".js")>=0){return c.substring(c.lastIndexOf("-") 1,c.lastIndexOf(".js"))}else{if(c.lastIndexOf(".swf")>=0){return c.substring(c.lastIndexOf("-") 1,c.lastIndexOf(".swf"))}else{return c.substring(c.lastIndexOf("-") 1)}}}return""};b.utils.getAbsolutePath=function(j,h){if(!b.utils.exists(h)){h=document.location.href}if(!b.utils.exists(j)){return undefined}if(a(j)){return j}var k=h.substring(0,h.indexOf("://") 3);var g=h.substring(k.length,h.indexOf("/",k.length 1));var d;if(j.indexOf("/")===0){d=j.split("/")}else{var e=h.split("?")[0];e=e.substring(k.length g.length 1,e.lastIndexOf("/"));d=e.split("/").concat(j.split("/"))}var c=[];for(var f=0;f<d.length;f  ){if(!d[f]||!b.utils.exists(d[f])||d[f]=="."){continue}else{if(d[f]==".."){c.pop()}else{c.push(d[f])}}}return k g "/" c.join("/")};function a(d){if(!b.utils.exists(d)){return}var e=d.indexOf("://");var c=d.indexOf("?");return(e>0&&(c<0||(c>e)))}b.utils.pluginPathType={ABSOLUTE:"ABSOLUTE",RELATIVE:"RELATIVE",CDN:"CDN"};b.utils.getPluginPathType=function(d){if(typeof d!="string"){return}d=d.split("?")[0];var e=d.indexOf("://");if(e>0){return b.utils.pluginPathType.ABSOLUTE}var c=d.indexOf("/");var f=b.utils.extension(d);if(e<0&&c<0&&(!f||!isNaN(f))){return b.utils.pluginPathType.CDN}return b.utils.pluginPathType.RELATIVE};b.utils.mapEmpty=function(c){for(var d in c){return false}return true};b.utils.mapLength=function(d){var c=0;for(var e in d){c  }return c};b.utils.log=function(d,c){if(typeof console!="undefined"&&typeof console.log!="undefined"){if(c){console.log(d,c)}else{console.log(d)}}};b.utils.css=function(d,g,c){if(b.utils.exists(d)){for(var e in g){try{if(typeof g[e]==="undefined"){continue}else{if(typeof g[e]=="number"&&!(e=="zIndex"||e=="opacity")){if(isNaN(g[e])){continue}if(e.match(/color/i)){g[e]="#" b.utils.strings.pad(g[e].toString(16),6)}else{g[e]=Math.ceil(g[e]) "px"}}}d.style[e]=g[e]}catch(f){}}}};b.utils.isYouTube=function(c){return(c.indexOf("youtube.com")>-1||c.indexOf("youtu.be")>-1)};b.utils.transform=function(e,d,c,g,h){if(!b.utils.exists(d)){d=1}if(!b.utils.exists(c)){c=1}if(!b.utils.exists(g)){g=0}if(!b.utils.exists(h)){h=0}if(d==1&&c==1&&g==0&&h==0){e.style.webkitTransform="";e.style.MozTransform="";e.style.OTransform=""}else{var f="scale(" d "," c ") translate(" g "px," h "px)";e.style.webkitTransform=f;e.style.MozTransform=f;e.style.OTransform=f}};b.utils.stretch=function(j,p,o,f,m,g){if(typeof o=="undefined"||typeof f=="undefined"||typeof m=="undefined"||typeof g=="undefined"){return}var d=o/m;var e=f/g;var l=0;var k=0;var c={};if(p.parentElement){p.parentElement.style.overflow="hidden"}b.utils.transform(p);switch(j.toUpperCase()){case b.utils.stretching.NONE:c.width=m;c.height=g;c.top=(f-c.height)/2;c.left=(o-c.width)/2;break;case b.utils.stretching.UNIFORM:if(d>e){c.width=m*e;c.height=g*e}else{c.width=m*d;c.height=g*d}c.top=(f-c.height)/2;c.left=(o-c.width)/2;break;case b.utils.stretching.FILL:if(d>e){c.width=m*d;c.height=g*d}else{c.width=m*e;c.height=g*e}c.top=(f-c.height)/2;c.left=(o-c.width)/2;break;case b.utils.stretching.EXACTFIT:c.width=m;c.height=g;var n=Math.round((m/2)*(1-1/d));var h=Math.round((g/2)*(1-1/e));b.utils.transform(p,d,e,n,h);c.top=c.left=0;break;default:break}b.utils.css(p,c)};b.utils.stretching={NONE:"NONE",FILL:"FILL",UNIFORM:"UNIFORM",EXACTFIT:"EXACTFIT"};b.utils.deepReplaceKeyName=function(h,e,c){switch(b.utils.typeOf(h)){case"array":for(var g=0;g<h.length;g  ){h[g]=b.utils.deepReplaceKeyName(h[g],e,c)}break;case"object":for(var f in h){var d=f.replace(new RegExp(e,"g"),c);h[d]=b.utils.deepReplaceKeyName(h[f],e,c);if(f!=d){delete h[f]}}break}return h};b.utils.isInArray=function(e,d){if(!(e)||!(e instanceof Array)){return false}for(var c=0;c<e.length;c  ){if(d===e[c]){return true}}return false};b.utils.exists=function(c){switch(typeof(c)){case"string":return(c.length>0);break;case"object":return(c!==null);case"undefined":return false}return true};b.utils.empty=function(c){if(typeof c.hasChildNodes=="function"){while(c.hasChildNodes()){c.removeChild(c.firstChild)}}};b.utils.parseDimension=function(c){if(typeof c=="string"){if(c===""){return 0}else{if(c.lastIndexOf("%")>-1){return c}else{return parseInt(c.replace("px",""),10)}}}return c};b.utils.getDimensions=function(c){if(c&&c.style){return{x:b.utils.parseDimension(c.style.left),y:b.utils.parseDimension(c.style.top),width:b.utils.parseDimension(c.style.width),height:b.utils.parseDimension(c.style.height)}}else{return{}}};b.utils.getElementWidth=function(c){if(!c){return null}else{if(c==document.body){return b.utils.parentNode(c).clientWidth}else{if(c.clientWidth>0){return c.clientWidth}else{if(c.style){return b.utils.parseDimension(c.style.width)}else{return null}}}}};b.utils.getElementHeight=function(c){if(!c){return null}else{if(c==document.body){return b.utils.parentNode(c).clientHeight}else{if(c.clientHeight>0){return c.clientHeight}else{if(c.style){return b.utils.parseDimension(c.style.height)}else{return null}}}}};b.utils.timeFormat=function(c){str="00:00";if(c>0){str=Math.floor(c/60)<10?"0" Math.floor(c/60) ":":Math.floor(c/60) ":";str =Math.floor(c`)<10?"0" Math.floor(c`):Math.floor(c`)}return str};b.utils.useNativeFullscreen=function(){return(navigator&&navigator.vendor&&navigator.vendor.indexOf("Apple")==0)};b.utils.parentNode=function(c){if(!c){return docuemnt.body}else{if(c.parentNode){return c.parentNode}else{if(c.parentElement){return c.parentElement}else{return c}}}};b.utils.getBoundingClientRect=function(c){if(typeof c.getBoundingClientRect=="function"){return c.getBoundingClientRect()}else{return{left:c.offsetLeft document.body.scrollLeft,top:c.offsetTop document.body.scrollTop,width:c.offsetWidth,height:c.offsetHeight}}}})(jwplayer);(function(a){a.events=function(){};a.events.COMPLETE="COMPLETE";a.events.ERROR="ERROR"})(jwplayer);(function(jwplayer){jwplayer.events.eventdispatcher=function(debug){var _debug=debug;var _listeners;var _globallisteners;this.resetEventListeners=function(){_listeners={};_globallisteners=[]};this.resetEventListeners();this.addEventListener=function(type,listener,count){try{if(!jwplayer.utils.exists(_listeners[type])){_listeners[type]=[]}if(typeof(listener)=="string"){eval("listener = " listener)}_listeners[type].push({listener:listener,count:count})}catch(err){jwplayer.utils.log("error",err)}return false};this.removeEventListener=function(type,listener){if(!_listeners[type]){return}try{for(var listenerIndex=0;listenerIndex<_listeners[type].length;listenerIndex  ){if(_listeners[type][listenerIndex].listener.toString()==listener.toString()){_listeners[type].splice(listenerIndex,1);break}}}catch(err){jwplayer.utils.log("error",err)}return false};this.addGlobalListener=function(listener,count){try{if(typeof(listener)=="string"){eval("listener = " listener)}_globallisteners.push({listener:listener,count:count})}catch(err){jwplayer.utils.log("error",err)}return false};this.removeGlobalListener=function(listener){if(!_globallisteners[type]){return}try{for(var globalListenerIndex=0;globalListenerIndex<_globallisteners.length;globalListenerIndex  ){if(_globallisteners[globalListenerIndex].listener.toString()==listener.toString()){_globallisteners.splice(globalListenerIndex,1);break}}}catch(err){jwplayer.utils.log("error",err)}return false};this.sendEvent=function(type,data){if(!jwplayer.utils.exists(data)){data={}}if(_debug){jwplayer.utils.log(type,data)}if(typeof _listeners[type]!="undefined"){for(var listenerIndex=0;listenerIndex<_listeners[type].length;listenerIndex  ){try{_listeners[type][listenerIndex].listener(data)}catch(err){jwplayer.utils.log("There was an error while handling a listener: " err.toString(),_listeners[type][listenerIndex].listener)}if(_listeners[type][listenerIndex]){if(_listeners[type][listenerIndex].count===1){delete _listeners[type][listenerIndex]}else{if(_listeners[type][listenerIndex].count>0){_listeners[type][listenerIndex].count=_listeners[type][listenerIndex].count-1}}}}}for(var globalListenerIndex=0;globalListenerIndex<_globallisteners.length;globalListenerIndex  ){try{_globallisteners[globalListenerIndex].listener(data)}catch(err){jwplayer.utils.log("There was an error while handling a listener: " err.toString(),_globallisteners[globalListenerIndex].listener)}if(_globallisteners[globalListenerIndex]){if(_globallisteners[globalListenerIndex].count===1){delete _globallisteners[globalListenerIndex]}else{if(_globallisteners[globalListenerIndex].count>0){_globallisteners[globalListenerIndex].count=_globallisteners[globalListenerIndex].count-1}}}}}}})(jwplayer);(function(a){var b={};a.utils.animations=function(){};a.utils.animations.transform=function(c,d){c.style.webkitTransform=d;c.style.MozTransform=d;c.style.OTransform=d;c.style.msTransform=d};a.utils.animations.transformOrigin=function(c,d){c.style.webkitTransformOrigin=d;c.style.MozTransformOrigin=d;c.style.OTransformOrigin=d;c.style.msTransformOrigin=d};a.utils.animations.rotate=function(c,d){a.utils.animations.transform(c,["rotate(",d,"deg)"].join(""))};a.utils.cancelAnimation=function(c){delete b[c.id]};a.utils.fadeTo=function(m,f,e,j,h,d){if(b[m.id]!=d&&a.utils.exists(d)){return}if(m.style.opacity==f){return}var c=new Date().getTime();if(d>c){setTimeout(function(){a.utils.fadeTo(m,f,e,j,0,d)},d-c)}if(m.style.display=="none"){m.style.display="block"}if(!a.utils.exists(j)){j=m.style.opacity===""?1:m.style.opacity}if(m.style.opacity==f&&m.style.opacity!==""&&a.utils.exists(d)){if(f===0){m.style.display="none"}return}if(!a.utils.exists(d)){d=c;b[m.id]=d}if(!a.utils.exists(h)){h=0}var k=(e>0)?((c-d)/(e*1000)):0;k=k>1?1:k;var l=f-j;var g=j (k*l);if(g>1){g=1}else{if(g<0){g=0}}m.style.opacity=g;if(h>0){b[m.id]=d h*1000;a.utils.fadeTo(m,f,e,j,0,b[m.id]);return}setTimeout(function(){a.utils.fadeTo(m,f,e,j,0,d)},10)}})(jwplayer);(function(a){a.utils.arrays=function(){};a.utils.arrays.indexOf=function(c,d){for(var b=0;b<c.length;b  ){if(c[b]==d){return b}}return -1};a.utils.arrays.remove=function(c,d){var b=a.utils.arrays.indexOf(c,d);if(b>-1){c.splice(b,1)}}})(jwplayer);(function(a){a.utils.extensionmap={"3gp":{html5:"video/3gpp",flash:"video"},"3gpp":{html5:"video/3gpp"},"3g2":{html5:"video/3gpp2",flash:"video"},"3gpp2":{html5:"video/3gpp2"},flv:{flash:"video"},f4a:{html5:"audio/mp4"},f4b:{html5:"audio/mp4",flash:"video"},f4v:{html5:"video/mp4",flash:"video"},mov:{html5:"video/quicktime",flash:"video"},m4a:{html5:"audio/mp4",flash:"video"},m4b:{html5:"audio/mp4"},m4p:{html5:"audio/mp4"},m4v:{html5:"video/mp4",flash:"video"},mp4:{html5:"video/mp4",flash:"video"},rbs:{flash:"sound"},aac:{html5:"audio/aac",flash:"video"},mp3:{html5:"audio/mp3",flash:"sound"},ogg:{html5:"audio/ogg"},oga:{html5:"audio/ogg"},ogv:{html5:"video/ogg"},webm:{html5:"video/webm"},m3u8:{html5:"audio/x-mpegurl"},gif:{flash:"image"},jpeg:{flash:"image"},jpg:{flash:"image"},swf:{flash:"image"},png:{flash:"image"},wav:{html5:"audio/x-wav"}}})(jwplayer);(function(e){e.utils.mediaparser=function(){};var g={element:{width:"width",height:"height",id:"id","class":"className",name:"name"},media:{src:"file",preload:"preload",autoplay:"autostart",loop:"repeat",controls:"controls"},source:{src:"file",type:"type",media:"media","data-jw-width":"width","data-jw-bitrate":"bitrate"},video:{poster:"image"}};var f={};e.utils.mediaparser.parseMedia=function(j){return d(j)};function c(k,j){if(!e.utils.exists(j)){j=g[k]}else{e.utils.extend(j,g[k])}return j}function d(n,j){if(f[n.tagName.toLowerCase()]&&!e.utils.exists(j)){return f[n.tagName.toLowerCase()](n)}else{j=c("element",j);var o={};for(var k in j){if(k!="length"){var m=n.getAttribute(k);if(e.utils.exists(m)){o[j[k]]=m}}}var l=n.style["#background-color"];if(l&&!(l=="transparent"||l=="rgba(0, 0, 0, 0)")){o.screencolor=l}return o}}function h(n,k){k=c("media",k);var l=[];var j=e.utils.selectors("source",n);for(var m in j){if(!isNaN(m)){l.push(a(j[m]))}}var o=d(n,k);if(e.utils.exists(o.file)){l[0]={file:o.file}}o.levels=l;return o}function a(l,k){k=c("source",k);var j=d(l,k);j.width=j.width?j.width:0;j.bitrate=j.bitrate?j.bitrate:0;return j}function b(l,k){k=c("video",k);var j=h(l,k);return j}f.media=h;f.audio=h;f.source=a;f.video=b})(jwplayer);(function(a){a.utils.loaderstatus={NEW:"NEW",LOADING:"LOADING",ERROR:"ERROR",COMPLETE:"COMPLETE"};a.utils.scriptloader=function(c){var d=a.utils.loaderstatus.NEW;var b=new a.events.eventdispatcher();a.utils.extend(this,b);this.load=function(){if(d==a.utils.loaderstatus.NEW){d=a.utils.loaderstatus.LOADING;var e=document.createElement("script");e.onload=function(f){d=a.utils.loaderstatus.COMPLETE;b.sendEvent(a.events.COMPLETE)};e.onerror=function(f){d=a.utils.loaderstatus.ERROR;b.sendEvent(a.events.ERROR)};e.onreadystatechange=function(){if(e.readyState=="loaded"||e.readyState=="complete"){d=a.utils.loaderstatus.COMPLETE;b.sendEvent(a.events.COMPLETE)}};document.getElementsByTagName("head")[0].appendChild(e);e.src=c}};this.getStatus=function(){return d}}})(jwplayer);(function(a){a.utils.selectors=function(b,e){if(!a.utils.exists(e)){e=document}b=a.utils.strings.trim(b);var c=b.charAt(0);if(c=="#"){return e.getElementById(b.substr(1))}else{if(c=="."){if(e.getElementsByClassName){return e.getElementsByClassName(b.substr(1))}else{return a.utils.selectors.getElementsByTagAndClass("*",b.substr(1))}}else{if(b.indexOf(".")>0){var d=b.split(".");return a.utils.selectors.getElementsByTagAndClass(d[0],d[1])}else{return e.getElementsByTagName(b)}}}return null};a.utils.selectors.getElementsByTagAndClass=function(e,h,g){var j=[];if(!a.utils.exists(g)){g=document}var f=g.getElementsByTagName(e);for(var d=0;d<f.length;d  ){if(a.utils.exists(f[d].className)){var c=f[d].className.split(" ");for(var b=0;b<c.length;b  ){if(c[b]==h){j.push(f[d])}}}}return j}})(jwplayer);(function(a){a.utils.strings=function(){};a.utils.strings.trim=function(b){return b.replace(/^\s*/,"").replace(/\s*$/,"")};a.utils.strings.pad=function(c,d,b){if(!b){b="0"}while(c.length<d){c=b c}return c};a.utils.strings.serialize=function(b){if(b==null){return null}else{if(b=="true"){return true}else{if(b=="false"){return false}else{if(isNaN(Number(b))||b.length>5||b.length==0){return b}else{return Number(b)}}}}};a.utils.strings.seconds=function(d){d=d.replace(",",".");var b=d.split(":");var c=0;if(d.substr(-1)=="s"){c=Number(d.substr(0,d.length-1))}else{if(d.substr(-1)=="m"){c=Number(d.substr(0,d.length-1))*60}else{if(d.substr(-1)=="h"){c=Number(d.substr(0,d.length-1))*3600}else{if(b.length>1){c=Number(b[b.length-1]);c =Number(b[b.length-2])*60;if(b.length==3){c =Number(b[b.length-3])*3600}}else{c=Number(d)}}}}return c};a.utils.strings.xmlAttribute=function(b,c){for(var d=0;d<b.attributes.length;d  ){if(b.attributes[d].name&&b.attributes[d].name.toLowerCase()==c.toLowerCase()){return b.attributes[d].value.toString()}}return""};a.utils.strings.jsonToString=function(f){var h=h||{};if(h&&h.stringify){return h.stringify(f)}var c=typeof(f);if(c!="object"||f===null){if(c=="string"){f='"' f.replace(/"/g,'\\"') '"'}else{return String(f)}}else{var g=[],b=(f&&f.constructor==Array);for(var d in f){var e=f[d];switch(typeof(e)){case"string":e='"' e.replace(/"/g,'\\"') '"';break;case"object":if(a.utils.exists(e)){e=a.utils.strings.jsonToString(e)}break}if(b){if(typeof(e)!="function"){g.push(String(e))}}else{if(typeof(e)!="function"){g.push('"' d '":' String(e))}}}if(b){return"[" String(g) "]"}else{return"{" String(g) "}"}}}})(jwplayer);(function(c){var d=new RegExp(/^(#|0x)[0-9a-fA-F]{3,6}/);c.utils.typechecker=function(g,f){f=!c.utils.exists(f)?b(g):f;return e(g,f)};function b(f){var g=["true","false","t","f"];if(g.toString().indexOf(f.toLowerCase().replace(" ",""))>=0){return"boolean"}else{if(d.test(f)){return"color"}else{if(!isNaN(parseInt(f,10))&&parseInt(f,10).toString().length==f.length){return"integer"}else{if(!isNaN(parseFloat(f))&&parseFloat(f).toString().length==f.length){return"float"}}}}return"string"}function e(g,f){if(!c.utils.exists(f)){return g}switch(f){case"color":if(g.length>0){return a(g)}return null;case"integer":return parseInt(g,10);case"float":return parseFloat(g);case"boolean":if(g.toLowerCase()=="true"){return true}else{if(g=="1"){return true}}return false}return g}function a(f){switch(f.toLowerCase()){case"blue":return parseInt("0000FF",16);case"green":return parseInt("00FF00",16);case"red":return parseInt("FF0000",16);case"cyan":return parseInt("00FFFF",16);case"magenta":return parseInt("FF00FF",16);case"yellow":return parseInt("FFFF00",16);case"black":return parseInt("000000",16);case"white":return parseInt("FFFFFF",16);default:f=f.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");if(f.length==3){f=f.charAt(0) f.charAt(0) f.charAt(1) f.charAt(1) f.charAt(2) f.charAt(2)}return parseInt(f,16)}return parseInt("000000",16)}})(jwplayer);(function(a){a.utils.parsers=function(){};a.utils.parsers.localName=function(b){if(!b){return""}else{if(b.localName){return b.localName}else{if(b.baseName){return b.baseName}else{return""}}}};a.utils.parsers.textContent=function(b){if(!b){return""}else{if(b.textContent){return b.textContent}else{if(b.text){return b.text}else{return""}}}}})(jwplayer);(function(a){a.utils.parsers.jwparser=function(){};a.utils.parsers.jwparser.PREFIX="jwplayer";a.utils.parsers.jwparser.parseEntry=function(c,d){for(var b=0;b<c.childNodes.length;b  ){if(c.childNodes[b].prefix==a.utils.parsers.jwparser.PREFIX){d[a.utils.parsers.localName(c.childNodes[b])]=a.utils.strings.serialize(a.utils.parsers.textContent(c.childNodes[b]))}if(!d.file&&String(d.link).toLowerCase().indexOf("youtube")>-1){d.file=d.link}}return d};a.utils.parsers.jwparser.getProvider=function(c){if(c.type){return c.type}else{if(c.file.indexOf("youtube.com/w")>-1||c.file.indexOf("youtube.com/v")>-1||c.file.indexOf("youtu.be/")>-1){return"youtube"}else{if(c.streamer&&c.streamer.indexOf("rtmp")==0){return"rtmp"}else{if(c.streamer&&c.streamer.indexOf("http")==0){return"http"}else{var b=a.utils.strings.extension(c.file);if(extensions.hasOwnProperty(b)){return extensions[b]}}}}}return""}})(jwplayer);(function(a){a.utils.parsers.mediaparser=function(){};a.utils.parsers.mediaparser.PREFIX="media";a.utils.parsers.mediaparser.parseGroup=function(d,f){var e=false;for(var c=0;c<d.childNodes.length;c  ){if(d.childNodes[c].prefix==a.utils.parsers.mediaparser.PREFIX){if(!a.utils.parsers.localName(d.childNodes[c])){continue}switch(a.utils.parsers.localName(d.childNodes[c]).toLowerCase()){case"content":if(!e){f.file=a.utils.strings.xmlAttribute(d.childNodes[c],"url")}if(a.utils.strings.xmlAttribute(d.childNodes[c],"duration")){f.duration=a.utils.strings.seconds(a.utils.strings.xmlAttribute(d.childNodes[c],"duration"))}if(a.utils.strings.xmlAttribute(d.childNodes[c],"start")){f.start=a.utils.strings.seconds(a.utils.strings.xmlAttribute(d.childNodes[c],"start"))}if(d.childNodes[c].childNodes&&d.childNodes[c].childNodes.length>0){f=a.utils.parsers.mediaparser.parseGroup(d.childNodes[c],f)}if(a.utils.strings.xmlAttribute(d.childNodes[c],"width")||a.utils.strings.xmlAttribute(d.childNodes[c],"bitrate")||a.utils.strings.xmlAttribute(d.childNodes[c],"url")){if(!f.levels){f.levels=[]}f.levels.push({width:a.utils.strings.xmlAttribute(d.childNodes[c],"width"),bitrate:a.utils.strings.xmlAttribute(d.childNodes[c],"bitrate"),file:a.utils.strings.xmlAttribute(d.childNodes[c],"url")})}break;case"title":f.title=a.utils.parsers.textContent(d.childNodes[c]);break;case"description":f.description=a.utils.parsers.textContent(d.childNodes[c]);break;case"keywords":f.tags=a.utils.parsers.textContent(d.childNodes[c]);break;case"thumbnail":f.image=a.utils.strings.xmlAttribute(d.childNodes[c],"url");break;case"credit":f.author=a.utils.parsers.textContent(d.childNodes[c]);break;case"player":var b=d.childNodes[c].url;if(b.indexOf("youtube.com")>=0||b.indexOf("youtu.be")>=0){e=true;f.file=a.utils.strings.xmlAttribute(d.childNodes[c],"url")}break;case"group":a.utils.parsers.mediaparser.parseGroup(d.childNodes[c],f);break}}}return f}})(jwplayer);(function(b){b.utils.parsers.rssparser=function(){};b.utils.parsers.rssparser.parse=function(f){var c=[];for(var e=0;e<f.childNodes.length;e  ){if(b.utils.parsers.localName(f.childNodes[e]).toLowerCase()=="channel"){for(var d=0;d<f.childNodes[e].childNodes.length;d  ){if(b.utils.parsers.localName(f.childNodes[e].childNodes[d]).toLowerCase()=="item"){c.push(a(f.childNodes[e].childNodes[d]))}}}}return c};function a(d){var e={};for(var c=0;c<d.childNodes.length;c  ){if(!b.utils.parsers.localName(d.childNodes[c])){continue}switch(b.utils.parsers.localName(d.childNodes[c]).toLowerCase()){case"enclosure":e.file=b.utils.strings.xmlAttribute(d.childNodes[c],"url");break;case"title":e.title=b.utils.parsers.textContent(d.childNodes[c]);break;case"pubdate":e.date=b.utils.parsers.textContent(d.childNodes[c]);break;case"description":e.description=b.utils.parsers.textContent(d.childNodes[c]);break;case"link":e.link=b.utils.parsers.textContent(d.childNodes[c]);break;case"category":if(e.tags){e.tags =b.utils.parsers.textContent(d.childNodes[c])}else{e.tags=b.utils.parsers.textContent(d.childNodes[c])}break}}e=b.utils.parsers.mediaparser.parseGroup(d,e);e=b.utils.parsers.jwparser.parseEntry(d,e);return new b.html5.playlistitem(e)}})(jwplayer);(function(a){var c={};var b={};a.plugins=function(){};a.plugins.loadPlugins=function(e,d){b[e]=new a.plugins.pluginloader(new a.plugins.model(c),d);return b[e]};a.plugins.registerPlugin=function(h,f,e){var d=a.utils.getPluginName(h);if(c[d]){c[d].registerPlugin(h,f,e)}else{a.utils.log("A plugin (" h ") was registered with the player that was not loaded. Please check your configuration.");for(var g in b){b[g].pluginFailed()}}}})(jwplayer);(function(a){a.plugins.model=function(b){this.addPlugin=function(c){var d=a.utils.getPluginName(c);if(!b[d]){b[d]=new a.plugins.plugin(c)}return b[d]}}})(jwplayer);(function(a){a.plugins.pluginmodes={FLASH:"FLASH",JAVASCRIPT:"JAVASCRIPT",HYBRID:"HYBRID"};a.plugins.plugin=function(b){var d="http://plugins.longtailvideo.com";var j=a.utils.loaderstatus.NEW;var k;var h;var l;var c=new a.events.eventdispatcher();a.utils.extend(this,c);function e(){switch(a.utils.getPluginPathType(b)){case a.utils.pluginPathType.ABSOLUTE:return b;case a.utils.pluginPathType.RELATIVE:return a.utils.getAbsolutePath(b,window.location.href);case a.utils.pluginPathType.CDN:var o=a.utils.getPluginName(b);var n=a.utils.getPluginVersion(b);var m=(window.location.href.indexOf("https://")==0)?d.replace("http://","https://secure"):d;return m "/" a.version.split(".")[0] "/" o "/" o (n!==""?("-" n):"") ".js"}}function g(m){l=setTimeout(function(){j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)},1000)}function f(m){j=a.utils.loaderstatus.ERROR;c.sendEvent(a.events.ERROR)}this.load=function(){if(j==a.utils.loaderstatus.NEW){if(b.lastIndexOf(".swf")>0){k=b;j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE);return}j=a.util