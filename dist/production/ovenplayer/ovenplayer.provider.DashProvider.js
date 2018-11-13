/*! For license information please see ovenplayer.provider.DashProvider.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{119:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getBrowser=function(){if(-1!=(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR")))return"opera";if(-1!=navigator.userAgent.indexOf("Chrome"))return"chrome";if(-1!=navigator.userAgent.indexOf("Safari"))return"safari";if(-1!=navigator.userAgent.indexOf("Firefox"))return"firefox";if(-1!=navigator.userAgent.indexOf("MSIE")){navigator.userAgent.indexOf("MSIE");return function(){for(var e=3,t=document.createElement("div"),r=t.getElementsByTagName("i");t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e",r[0];);return e>4?e:void 0}()<9?"oldIE":"modernIE"}return"unknown"}},278:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pickCurrentSource=t.errorTrigger=t.separateLive=t.extractVideoElement=void 0;var n=r(8),o=function(e){return e&&e.__esModule?e:{default:e}}(r(6));t.extractVideoElement=function(e){return o.default.isElement(e)?e:e.getVideoElement?e.getVideoElement():e.media?e.media:null},t.separateLive=function(e){return!!e.isDynamic&&e.isDynamic()},t.errorTrigger=function(e,t){t.setState(n.STATE_ERROR),t.pause(),t.trigger(n.ERROR,e)},t.pickCurrentSource=function(e,t,r){var n=Math.max(0,t);if(e)for(var o=0;o<e.length;o++)if(e[o].default&&(n=o),r.getSourceLabel()&&e[o].label===r.getSourceLabel())return o;return n}},279:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(119),o=r(8),a=function(e){return e&&e.__esModule?e:{default:e}}(r(280));t.default=function(e,t){var r={},i=e.getAttribute("data-parent-id"),u="",l=(0,n.getBrowser)();OvenPlayerConsole.log("MediaManager loaded. browserType : "+l);return r.create=function(){return OvenPlayerConsole.log("MediaManager createElement()"),u&&r.destroy(),function(){if(t!==o.PROVIDER_RTMP)(u=document.createElement("video")).setAttribute("disableRemotePlayback",""),u.setAttribute("webkit-playsinline",""),u.setAttribute("playsinline",""),e.appendChild(u);else{var r=void 0,n=void 0,s=void 0,c=void 0,d=void 0,f=void 0,g=void 0,E=void 0,v=void 0;(r=document.createElement("param")).setAttribute("name","movie"),r.setAttribute("value",a.default),(n=document.createElement("param")).setAttribute("name","flashvars"),n.setAttribute("value","playerId="+i),(s=document.createElement("param")).setAttribute("name","allowscriptaccess"),s.setAttribute("value","always"),(c=document.createElement("param")).setAttribute("name","allowfullscreen"),c.setAttribute("value","true"),(d=document.createElement("param")).setAttribute("name","quality"),d.setAttribute("value","height"),(f=document.createElement("param")).setAttribute("name","name"),f.setAttribute("value",i+"-flash"),(g=document.createElement("param")).setAttribute("name","menu"),g.setAttribute("value","false"),(E=document.createElement("param")).setAttribute("name","quality"),E.setAttribute("value","high"),(v=document.createElement("param")).setAttribute("name","bgcolor"),v.setAttribute("value","#000000"),(u=document.createElement("object")).setAttribute("id",i+"-flash"),u.setAttribute("name",i+"-flash"),u.setAttribute("width","100%"),u.setAttribute("height","100%"),"oldIE"!==l?(u.setAttribute("data",a.default),u.setAttribute("type","application/x-shockwave-flash")):(u.setAttribute("classid","clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"),u.appendChild(r)),u.appendChild(v),u.appendChild(E),u.appendChild(c),u.appendChild(s),u.appendChild(n),e.appendChild(u)}return u}()},r.destroy=function(){OvenPlayerConsole.log("MediaManager removeElement()"),e.removeChild(u),u=null},r}},280:function(e,t,r){e.exports=r.p+"OvenPlayerFlash.swf"},281:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(60)),o=u(r(282)),a=r(278),i=r(8);function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,r){OvenPlayerConsole.log("CORE loaded. ");var u={};(0,n.default)(u);var l=(0,o.default)(e.extendedElement,u),s=(0,a.extractVideoElement)(e.extendedElement),c=t.getConfig().image||"";s.playbackRate=s.defaultPlaybackRate=t.getDefaultPlaybackRate();var d=function(t){var n=e.sources[e.currentSource];if(r)r(n,t);else{OvenPlayerConsole.log("source loaded : ",n,"lastPlayPosition : "+t);var o=s.src,a=document.createElement("source");a.src=n.file,a.src!==o?(s.src=e.sources[e.currentSource].file,o&&s.load()):0===t&&s.currentTime>0&&u.seek(t),t>0&&(u.seek(t),u.play()),c&&(s.poster=c)}};return u.getName=function(){return e.name},u.canSeek=function(){return e.canSeek},u.setCanSeek=function(t){e.canSeek=t},u.isSeeking=function(){return e.seeking},u.setSeeking=function(t){e.seeking=t},u.setState=function(t){if(e.state!==t){var r=e.state;switch(t){case i.STATE_COMPLETE:u.trigger(i.PLAYER_COMPLETE);break;case i.STATE_PAUSED:u.trigger(i.PLAYER_PAUSE,{prevState:e.state});break;case i.STATE_PLAYING:u.trigger(i.PLAYER_PLAY,{prevState:e.state})}e.state=t,u.trigger(i.PLAYER_STATE,{prevstate:r,newstate:e.state})}},u.getState=function(){return e.state},u.setBuffer=function(t){e.buffer=t},u.getBuffer=function(){return e.buffer},u.getDuration=function(){return s.duration===1/0||(0,a.separateLive)(e.extendedElement)?1/0:s.duration},u.getPosition=function(){return s?s.currentTime:0},u.setVolume=function(e){if(!s)return!1;s.volume=e/100},u.getVolume=function(){return s?100*s.volume:0},u.setMute=function(e){return!!s&&(void 0===e?(s.muted=!s.muted,u.trigger(i.CONTENT_MUTE,{mute:s.muted})):(s.muted=e,u.trigger(i.CONTENT_MUTE,{mute:s.muted})),s.muted)},u.getMute=function(){return!!s&&s.muted},u.preload=function(r,n){return e.sources=r,e.currentSource=(0,a.pickCurrentSource)(r,e.currentSource,t),d(n||0),new Promise(function(e,t){e()})},u.load=function(r){e.sources=r,e.currentSource=(0,a.pickCurrentSource)(r,e.currentSource,t),d(e.sources.starttime||0)},u.play=function(){if(!s)return!1;if(u.getState()!==i.STATE_PLAYING){var e=s.play();void 0!==e&&e.then(function(e){}).catch(function(e){setTimeout(function(){u.play()},1e3)})}},u.pause=function(){if(!s)return!1;u.getState()===i.STATE_PLAYING&&s.pause()},u.seek=function(e){if(!s)return!1;s.currentTime=e},u.setPlaybackRate=function(e){return!!s&&(u.trigger(i.PLAYBACK_RATE_CHANGED,{playbackRate:e}),s.playbackRate=s.defaultPlaybackRate=e)},u.getPlaybackRate=function(){return s?s.playbackRate:0},u.getSources=function(){return s?e.sources.map(function(e,t){return{file:e.file,type:e.type,label:e.label,index:t}}):[]},u.getCurrentSource=function(){return e.currentSource},u.setCurrentSource=function(r,n){return e.currentQuality!==r&&(r>-1&&e.sources&&e.sources.length>r?(u.setState(i.STATE_IDLE),OvenPlayerConsole.log("source changed : "+r),e.currentSource=r,u.trigger(i.CONTENT_SOURCE_CHANGED,{currentSource:r}),t.setSourceLabel(e.sources[r].label),n&&d(s.currentTime||0),e.currentSource):void 0)},u.getQualityLevels=function(){return s?e.qualityLevels:[]},u.getCurrentQuality=function(){return s?e.currentQuality:null},u.setCurrentQuality=function(e,t){},u.stop=function(){if(!s)return!1;for(OvenPlayerConsole.log("CORE : stop() "),s.removeAttribute("preload"),s.removeAttribute("src");s.firstChild;)s.removeChild(s.firstChild);u.pause(),u.setState(i.STATE_IDLE)},u.destroy=function(){if(!s)return!1;u.stop(),l.destroy(),u.off(),OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied")},u.super=function(e){var t=u[e];return function(){return t.apply(u,arguments)}},u}},282:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(8),o=r(278);t.default=function(e,t){var r={};OvenPlayerConsole.log("EventListener loaded.",e,t);var a={},i=(0,o.extractVideoElement)(e);return r.canplay=function(){t.setCanSeek(!0),t.trigger(n.CONTENT_BUFFER_FULL),OvenPlayerConsole.log("EventListener : on canplay")},r.durationchange=function(){r.progress(),OvenPlayerConsole.log("EventListener : on durationchange")},r.ended=function(){OvenPlayerConsole.log("EventListener : on ended"),t.getState()!=n.STATE_IDLE&&t.getState()!=n.STATE_COMPLETE&&(t.trigger(n.CONTENT_COMPLETE),t.setState(n.STATE_COMPLETE))},r.loadeddata=function(){OvenPlayerConsole.log("EventListener : on loadeddata")},r.loadedmetadata=function(){var r=i.duration===1/0||(0,o.separateLive)(e),a=t.getSources(),u=t.getCurrentSource(),l=u>-1?a[u].type:"",s={duration:r?1/0:i.duration,type:l};OvenPlayerConsole.log("EventListener : on loadedmetadata",s),t.trigger(n.CONTENT_META,s)},r.pause=function(){return t.getState()!==n.STATE_COMPLETE&&t.getState()!==n.STATE_ERROR&&!i.ended&&!i.error&&i.currentTime!==i.duration&&(OvenPlayerConsole.log("EventListener : on pause"),void t.setState(n.STATE_PAUSED))},r.play=function(){i.paused||t.getState()===n.STATE_PLAYING||(OvenPlayerConsole.log("EventListener : on play"),t.setState(n.STATE_LOADING))},r.playing=function(){OvenPlayerConsole.log("EventListener : on playing"),t.setState(n.STATE_PLAYING)},r.progress=function(){var e=i.buffered;if(!e)return!1;var r=i.duration,o=i.currentTime,a=function(e,t,r){return Math.max(Math.min(e,r),t)}((e.length>0?e.end(e.length-1):0)/r,0,1);OvenPlayerConsole.log("EventListener : on progress",100*a),t.setBuffer(100*a),t.trigger(n.CONTENT_BUFFER,{bufferPercent:100*a,position:o,duration:r})},r.stalled=function(){OvenPlayerConsole.log("EventListener : on stall")},r.timeupdate=function(){var e=i.currentTime,r=i.duration;isNaN(r)||(t.isSeeking()||i.paused||t.setState(n.STATE_PLAYING),(t.getState()===n.STATE_PLAYING||t.isSeeking())&&t.trigger(n.CONTENT_TIME,{position:e,duration:r}))},r.resize=function(){OvenPlayerConsole.log("EventListener : on resize")},r.seeking=function(){t.setSeeking(!0),OvenPlayerConsole.log("EventListener : on seeking",i.currentTime),t.trigger(n.CONTENT_SEEK,{position:i.currentTime})},r.seeked=function(){t.isSeeking()&&(OvenPlayerConsole.log("EventListener : on seeked"),t.setSeeking(!1),t.trigger(n.CONTENT_SEEKED))},r.waiting=function(){OvenPlayerConsole.log("EventListener : on waiting",t.getState()),t.isSeeking()?t.setState(n.STATE_LOADING):t.getState()===n.STATE_PLAYING&&t.setState(n.STATE_STALLED)},r.volumechange=function(){OvenPlayerConsole.log("EventListener : on volumechange",Math.round(100*i.volume)),t.trigger(n.CONTENT_VOLUME,{volume:Math.round(100*i.volume),mute:i.muted})},r.error=function(){var e=i.error&&i.error.code||0,r={0:{code:n.PLAYER_UNKNWON_ERROR,reason:"Unknown html5 video error",message:"Unknown html5 video error"},1:{code:n.PLAYER_UNKNWON_OPERATION_ERROR,reason:"Unknown operation aborted",message:"Unknown operation aborted"},2:{code:n.PLAYER_UNKNWON_NEWWORK_ERROR,reason:"Unknown network error",message:"Unknown network error"},3:{code:n.PLAYER_UNKNWON_DECODE_ERROR,reason:"Unknown decode error",message:"Unknown decode error"},4:{code:n.PLAYER_FILE_ERROR,reason:"File could not be played",message:"File could not be played"}}[e]||0;r.error=i.error,OvenPlayerConsole.log("EventListener : on error",r),function(e){t.setState(n.STATE_ERROR),t.pause(),t.trigger(n.ERROR,e)}(r)},Object.keys(r).forEach(function(e){i.removeEventListener(e,r[e]),i.addEventListener(e,r[e])}),a.destroy=function(){OvenPlayerConsole.log("EventListener : destroy()"),Object.keys(r).forEach(function(e){i.removeEventListener(e,r[e])})},a}},64:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(279)),o=u(r(281)),a=r(278),i=r(8);function u(e){return e&&e.__esModule?e:{default:e}}var l="download",s="manifestError";t.default=function(e,t){var r={},u=null,c=null,d=0,f=!1,g=(0,n.default)(e,i.PROVIDER_DASH),E=g.create();try{(u=dashjs.MediaPlayer().create()).getDebug().setLogToBrowserConsole(!1),u.initialize(E,null,!1);var v={name:i.PROVIDER_DASH,extendedElement:u,listener:null,canSeek:!1,isLive:!1,seeking:!1,state:i.STATE_IDLE,buffer:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[]};r=(0,o.default)(v,t,function(e,t){OvenPlayerConsole.log("DASH : onExtendedLoad : ",e,"lastPlayPosition : "+t),u.attachSource(e.file),d=t}),c=r.super("destroy"),OvenPlayerConsole.log("DASH PROVIDER LOADED."),u.on(dashjs.MediaPlayer.events.ERROR,function(e){!e||f||e.error!==l&&e.error!==s||(f=!0,(0,a.errorTrigger)({code:i.PLAYER_UNKNWON_NEWWORK_ERROR,reason:"Unknown network error",message:"Unknown network error"},r))}),r.on(i.CONTENT_META,function(e){OvenPlayerConsole.log("GetStreamInfo  : ",u.getQualityFor("video"),u.getBitrateInfoListFor("video"),u.getBitrateInfoListFor("video")[u.getQualityFor("video")]);var t=u.getBitrateInfoListFor("video");v.currentQuality=u.getQualityFor("video");for(var n=0;n<t.length;n++)v.qualityLevels.push({bitrate:t[n].bitrate,height:t[n].height,width:t[n].width,index:t[n].qualityIndex,label:t[n].width+"x"+t[n].height+", "+t[n].bitrate});u.isDynamic()?r.play():d&&(u.seek(d),r.play())},r),r.setCurrentQuality=function(e){return u.setQualityFor("video",e),v.currentQuality=u.getQualityFor("video"),r.trigger(i.CONTENT_LEVEL_CHANGED,{currentQuality:v.currentQuality}),v.currentQuality},r.destroy=function(){u.reset(),g.destroy(),g=null,E=null,OvenPlayerConsole.log("DASH : PROVIDER DESTROYED."),c()}}catch(e){throw new Error(e)}return r}}}]);
//# sourceMappingURL=ovenplayer.provider.DashProvider.js.map