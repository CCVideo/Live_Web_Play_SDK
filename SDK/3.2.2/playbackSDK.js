!function(a){var i={};function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=a,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([,function(e,t){!function u(D,M,C){var h="3.2.2";!function(){function r(e){console.log&&console.log(e)}function s(e){console.warn&&console.warn(e)}function n(e,t){for(var a=e.split("."),i=t.split("."),r=0,s=a.length,n=!1;r<s-1;){var o=parseInt(a[r]),l=parseInt(i[r]);if(l<o){n=!0;break}if(o<l){n=!1;break}r++}return n}var e="//view.csslcloud.net/version/version.json?v="+(new Date).getTime(),t=null;try{M.XMLHttpRequest?t=new XMLHttpRequest:M.ActiveXObject&&(t=new ActiveXObject("Microsoft.XMLHTTP")),t&&(t.open("GET",e,!0),t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){var e=JSON.parse(t.responseText);e&&!function i(e){var t=e.h5?e.h5:{};if(t.lowyerVersion&&n(t.lowyerVersion.v,h)){t.lowyerVersion.expiration;var a=t.errorMsg;if(r(a),Error)throw new Error(a);s(a)}else if(t.latestVersion&&n(t.latestVersion.v,h))return void s(t.notify)}(e)}},t.send())}catch(a){r("获取版本信息失败")}}();function t(e){this.isReady=!1,this.isPublishing=0,this.id=e.callbackPlayer.id;var t={userid:e.userId,videoid:e.videoId,recordid:e.recordId,isShowBar:e.isShowBar,upid:e.upId,viewerid:e.viewerId,roomid:e.roomId,ua:"1"},a={allowFullscreen:"true",allowScriptAccess:"always",wmode:"transparent"};this.flashPlayerInit=function(){if(swfobject.embedSWF("//player.csslcloud.net/platform/live/CallbackPlayer.swf",e.callbackPlayer.id,e.callbackPlayer.width,e.callbackPlayer.height,"10.0.0","/flash/expressInstall.swf",t,a),"isMobile"!=O.isMobile())new ReportLog(e,0,1,null,!1)},A.isH5play||this.flashPlayerInit(),this.destroy=function(){A.isH5play&&O&&O.destroy()},this.getFlash=function(){return swfobject.getObjectById(this.id)},this.playbackRate=function(e){if(A.isH5play||"isMobile"===O.isMobile()){e=parseFloat(e);this.getH5player().playbackRate=e}},this.seek=function(e){if(!(e<0))if(A.isH5play||"isMobile"==O.isMobile())this.getH5player().currentTime=e;else{var t=this.getFlash();if(!t)return;t.seek(e)}},this.getFlash=function(){return swfobject.getObjectById(this.id)},this.getH5player=function(){return D("#playbackVideo")[0]},this.getPlayerTime=function(){return this.isReady?(e=A.isH5play||"isMobile"==O.isMobile()?this.getH5player().currentTime:parseInt("function"==typeof this.getFlash().getPosition?this.getFlash().getPosition():0,10),isNaN(e)||e<0?0:e):0;var e},this.getDuration=function(){if(A.isH5play||"isMobile"==O.isMobile())return this.getH5player().duration;var e=this.getFlash();return e?e.getDuration?e.getDuration():0:void 0},this.getBuffer=function(){if(A.isH5play||"isMobile"==O.isMobile()){if(!this.getH5player()||!this.getH5player().buffered||!this.getH5player().buffered.end(0))return 0;for(var e=0,t=this.getH5player().buffered,a=0;a<t.length;a++)e+=t.end(a)-t.start(a);return e}var i=this.getFlash();if(i)return i.getBufferLength?i.getBufferLength():0},this.setVolume=function(e){if(!A.isH5play&&"isMobile"!=O.isMobile()){var t=this.getFlash();if(!t)return;return t.setVolume?t.setVolume(e):0}this.getH5player().volume=parseFloat(e)},this.getVolume=function(){if(A.isH5play||"isMobile"==O.isMobile())return this.getH5player().volume;var e=this.getFlash();return e?e.getVolume?e.getVolume():0:void 0},this.play=function(){if(!A.isH5play&&"isMobile"!=O.isMobile()){var e=this.getFlash();if(!e)return;return e.isPlay?e.isPlay():0}O.pauseState?this.getH5player().play():this.getH5player().pause()},this.setZScale=function(e){var t=this.getFlash();if(t)return t.setZScale(e)},this.getZScale=function(){var e=this.getFlash();if(e)return e.getZScale()},this.setScale=function(e){var t=this.getFlash();if(t)return t.setScale(e)},this.getScale=function(){var e=this.getFlash();if(e)return e.getScale()},this.openSettingPanel=function(){var e=this.getFlash();if(e)return e.openSettingPanel()}}function x(e){var t="https:"===M.location.protocol,a=e.chat.host;if(t&&a&&a.indexOf(":")){var i=a.split(":");if(2==i.length){var r=parseInt(i[1]);if(!isNaN(r)){var s=r+400;a=i[0]+":"+s}}}var n=0;if("isMobile"==O.isMobile()&&(n=1),A.forceNew){var o=io.connect(C.location.protocol+"//"+a+"/replay?roomid="+e.roomId+"&sessionid="+e.viewer.sessionId+"&platform=1&terminal="+n,{forceNew:!0});m.log("{forceNew: true}")}else o=io.connect(C.location.protocol+"//"+a+"/replay",{query:{roomid:e.roomId,sessionid:e.viewer.sessionId,platform:1,terminal:n}}),m.log("{forceNew: false}");this.destroy=function(){o&&o.disconnect()}}function a(e,t){this.isReady=!1,E.fastMode||swfobject.embedSWF("//zeus.csslcloud.net/flash/Player.swf",e.drawPanel.id,e.drawPanel.width,e.drawPanel.height,"10.0.0","/flash/expressInstall.swf",{type:"drawpanel"},{allowFullscreen:"true",allowScriptAccess:"always",wmode:"transparent"},{}),this.getFlash=function(){if(this.isReady)return swfobject.getObjectById(e.drawPanel.id)},this.clear=function(){E.clear();var e=this.getFlash();e&&e.clear()},this.draw=function(e){E.draw(e);var t=this.getFlash();t&&t.draw(e)},this.draws=function(e){var t,a=this.getFlash();a&&(t=e,setTimeout(function(){a.drawList(t)}))},this.filp=function(e){E.pageChange(e);var t=this.getFlash();if(t){var a=JSON.parse(e),i=a.url;"https:"===M.location.protocol&&(a.url=i.replace(/http:/g,"https:")),y.adapt?t.filp(JSON.stringify(a),"auto"):t.filp(JSON.stringify(a))}},this.animation=function(e){E.animationChange(e);var t=this.getFlash();t&&t.animation(e)},this.intervalNum=0,this.interval=function(){var e=0;try{e=N.callbackPlayer.getPlayerTime()}catch(n){}if(!(e<0)){d&&(c=e,2.5<=Math.abs(c-l)&&seekComplete&&seekComplete(),l=e),N.isRequestDraws&&N.drawsInfoRequestPool.isHttpRequestCurrentDraws(e,function(e){N.draws=e});try{if(N.animations&&0<N.animations.length)if(N.animationIndex<N.animations.length)if(0<=(r=N.pageChangeIndex)){var t=N.pageChanges[r],a=N.animations[N.animationIndex+1];t&&a&&t.encryptDocId==a.encryptDocId&&e>=a.time&&t.time<=a.time&&(E.fastMode?this.animation(a):this.animation(JSON.stringify({fileName:a.docName,totalPage:a.docTotalPage,docid:a.encryptDocId,url:a.url,page:a.pageNum,step:a.step})),N.animationIndex=N.animationIndex+1)}}catch(n){}try{if(N.pageChanges&&0<N.pageChanges.length)if(N.pageChangeIndex<N.pageChanges.length)if(e>=(t=N.pageChanges[N.pageChangeIndex+1]).time){"function"==typeof M.on_cc_callback_page_change&&M.on_cc_callback_page_change(t),"function"==typeof M.on_cc_request_snapshoot&&M.on_cc_request_snapshoot(t),E.fastMode?this.filp(t):this.filp(JSON.stringify({fileName:t.docName,totalPage:t.docTotalPage,docid:t.encryptDocId,url:t.url,page:t.pageNum,useSDK:t.useSDK})),N.pageChangeIndex=N.pageChangeIndex+1;var i={};i.docId=t.docId,i.docName=t.docName,i.docTotalPage=t.docTotalPage,i.pageNum=t.pageNum,"function"==typeof M.on_cc_callback_pagechange&&M.on_cc_callback_pagechange(i)}}catch(n){}try{var r;if(N.animations&&0<N.animations.length)if(N.animationIndex<N.animations.length)if(0<=(r=N.pageChangeIndex)){t=N.pageChanges[r],a=N.animations[N.animationIndex+1];t&&a&&t.encryptDocId==a.encryptDocId&&e>=a.time&&t.time<=a.time&&(E.fastMode?this.animation(a):this.animation(JSON.stringify({fileName:a.docName,totalPage:a.docTotalPage,docid:a.encryptDocId,url:a.url,page:a.pageNum,step:a.step})),N.animationIndex=N.animationIndex+1)}}catch(n){}try{if(N.draws&&0<N.draws.length&&N.drawIndex<N.draws.length)for(var s=N.draws[N.drawIndex+1];e>=s.time;)E.fastMode?this.draw(s):this.draw(s.data),N.drawIndex=N.drawIndex+1,s=N.draws[N.drawIndex+1]}catch(n){}}},this.destroy=function(){-1!=N.drawPanel.intervalNum&&clearInterval(N.drawPanel.intervalNum)},this.intervalPainting=function(e){e.drawPanel.intervalNum=setInterval(function(){e.drawPanel.interval(e)},1e3)}}function f(i){D.ajax({url:i.url,type:"GET",data:i.data,tryCount:0,retryLimit:3,timeout:5e3,dataType:"jsonp",success:function(e){i.done(e)},error:function(e,t,a){if("timeout"==t)return this.tryCount++,this.tryCount<this.retryLimit?void D.ajax(this):void("function"==typeof i.fn&&i.fn(t));e.status}})}var p=function(){this.requestState=!1,this.result=0,this.startTime=0,this.endTime=0,this.key=0,this.index=0,this.ajax={},this.states=[],this.snapshoot=[],this.drawsAlready=0,this.roomId=y.roomId,this.userId=y.userId,this.recordId=y.recordId,this.liveId=y.liveId,this.drawRequestTime=y.drawRequestTime,this.setSnapshoot=function(e,t){this.snapshoot[e]=t},this.getSnapshoot=function(){return this.snapshoot},this.init=function(e){for(var t=0;t<this.drawRequestTime;t++){var a={requestState:!1,result:0,startTime:e.startTime,endTime:e.endTime,key:t};e.startTime=e.startTime+e.blockTime,e.endTime=e.startTime+e.blockTime,this.setState(a)}},this.httpRequest=function(e,t){var i=this;i.requestState=!0,this.ajax=D.ajax({url:e.url,type:"GET",data:e.param,tryCount:0,retryLimit:3,timeout:M.TIMEOUT,dataType:"jsonp",success:function(e){(i.result=e).success?(t(e),i.requestState=!1):m.log("data.success",e.success)},error:function(e,t,a){if("timeout"==t)return this.tryCount++,this.tryCount<this.retryLimit?(D.ajax(this),void m.log("ajax["+i.key+"] try again tryCount",this.tryCount)):(m.log("数据请求失败且重试多次"),void(i.requestState=!1));e.status}})},this.abort=function(){this.ajax.abort(),this.requestState=!1},this.setState=function(e){if("object"==typeof e){var t=e.key||this.index++;e.key&&!isNaN(e.key)&&(this.index=parseInt(e.key)+1);var a=new p;a.requestState=e.requestState||this.requestState,a.result=e.result||this.result,a.startTime=e.startTime||this.startTime,a.endTime=e.endTime||this.endTime,a.ajax=e.ajax||this.ajax,a.snapshoot=e.snapshoot||this.snapshoot,a.key=t,this.states[t]=a}},this.getState=function(e){return this.states[e]},this.getStates=function(){return this.states},this.getCurrentStateIndex=function(e){for(var t=0,a=0;a<this.states.length;a++)if(e>this.states[a].startTime&&e<=this.states[a].endTime){t=a;break}return t},this.isDrawsAlready=function(){return parseInt(this.drawRequestTime,10)===parseInt(this.drawsAlready,10)}},g=function(d,u){function h(e,t){var a=e.concat(t),i=[],r={};for(var s in a)r[JSON.stringify(a[s])]||(i.push(a[s]),r[JSON.stringify(a[s])]=1);return i}this.state=d,this.requestNumber=2,this.httpRequestPool=[],this.draws=[],this.preState={},this.isHttpRequestCurrentDraws=function(e,t){if(d.drawRequestTime){var a=d.isDrawsAlready();if(a)m.log("画笔数据加载完毕，不在预加载某一段数据");else{var i=d.getStates(),r=d.getCurrentStateIndex(e),s=i[r];if(this.preState!=s&&this.preState.requestState&&(m.log("发现新的预加载请求，中断上一个预加载请求;index="+this.preState.key),this.preState.abort()),this.preState=s,a||s.result||s.requestState)m.log("预加载过这段数据或已有数据;index="+r);else{m.log("预加载数据",r);var n={index:r,states:i};this.httpRequestCurrentDraws(n,t)}}}},this.httpRequestCurrentDraws=function(e,a){var i=this,t=e.states,r=e.index,s=t[r],n={url:"//view.csslcloud.net/api/view/replay/v2/draw/range",param:{starttime:s.startTime,endtime:s.endTime,userid:s.userId,recordid:s.recordId,liveid:s.liveId}};s.httpRequest(n,function(e){var t=e.datas.meta.draw;m.log("*** 预加载成功 callback.draws["+r+"] ***",t),i.draws=h(i.draws,t),i.draws.sort(function(e,t){return parseInt(e.time)-parseInt(t.time)}),a(i.draws),N.state.drawsAlready++})},this.httpRequestStream=function(r){var s=this;if(s.state.isDrawsAlready())return m.log("httpRequestStream draws already",s.draws),m.log("callback.state",N.state),void m.log("snapshoot",u);for(var e=s.state.getStates(),t=0;t<e.length;t++){if(!(i=e[t]).result&&!i.requestState){if(!(s.httpRequestPool.length<s.requestNumber))break;s.httpRequestPool.push(i)}}for(var a=0;a<s.httpRequestPool.length;a++){var i;(i=s.httpRequestPool[a]).result||i.requestState||function(i){var e={url:"//view.csslcloud.net/api/view/replay/v2/draw/range",param:{starttime:i.startTime,endtime:i.endTime,userid:i.userId,recordid:i.recordId,liveid:i.liveId}};i.httpRequest(e,function(e){var t=e.datas.meta.draw;m.log("请求流 draw["+i.key+"]",t),N.isRequestDraws?s.draws=h(s.draws,t):s.draws=s.draws.concat(t),s.draws.sort(function(e,t){return parseInt(e.time)-parseInt(t.time)}),r(s.draws);for(var a=0;a<s.httpRequestPool.length;a++)if(s.httpRequestPool[a].key==i.key){s.httpRequestPool.splice(a,1);break}N.state.drawsAlready++,s.httpRequestStream(r)})}(i)}},this.httpRequestSnapshoot=function(a,e,i){var r=this;if(d.isDrawsAlready())m.log("画笔数据请求完整，不在请求快照数据");else{var t=d.getStates(),s=(e=e,d.getCurrentStateIndex(e)),n=t[s];if(n){var o=u.getSnapshoot(),l=o[a.docId+"_"+a.pageNum+"_"+a.url];if(n.result||l)m.log("当前时间段存在数据或存在快照",s+"");else{m.log("_snapshoot.getSnapshoot()",o),u.requestState&&u.abort();var c={url:"//view.csslcloud.net/api/view/replay/v2/draw/snapshot",param:{docid:a.docId,currentpage:a.pageNum,userid:u.userId,recordid:u.recordId}};u.httpRequest(c,function(e){if(u.setSnapshoot(a.docId+"_"+a.pageNum+"_"+a.url,e),n.result)m.log("快照请求成功，当前时间段数据存在，丢弃快照"+s);else{N.isRequestDraws=!0;var t=e.datas.meta.draw;m.log("*** 快照 callback.draws["+a.docId+"_"+a.pageNum+"_"+a.url+"] ***",t),r.draws=h(r.draws,t),r.draws.sort(function(e,t){return parseInt(e.time)-parseInt(t.time)}),i(r.draws)}})}}}}};M.ListenerDuration=function(){if(on_cc_limit_request_draws){var e=setInterval(function(){parseInt(N.callbackPlayer.getDuration())&&(m.log("ListenerDuration"),on_cc_limit_request_draws&&on_cc_limit_request_draws(),clearInterval(e))},50);M.ListenerDuration=null}},M.on_cc_limit_request_draws=function(){if(y.drawRequestTime){m.log("分页请求画笔数据",y.drawRequestTime);var e=N.callbackPlayer.getDuration()+1;m.log("duration",e+"");var t=Math.ceil(e/y.drawRequestTime),a={blockTime:t,startTime:0,endTime:0+t};N.state.init(a),m.log("callback.state",N.state),N.drawsInfoRequestPool.httpRequestStream(function(e){N.draws=e,N.isHistoryReady=!0,N.drawPanel.isReady=!0}),setTimeout(function(){L()},1500),M.on_cc_limit_request_draws=null}},M.on_cc_request_snapshoot=function(e){if(y.drawRequestTime){m.log("pageChange",e);var t=N.callbackPlayer.getPlayerTime();N.drawsInfoRequestPool.httpRequestSnapshoot(e,t,function(e){N.draws=e,N.isHistoryReady=!0,N.drawPanel.isReady=!0})}};function i(q,k){!function(e,t){var o={roomid:e.roomId,userid:e.userId,liveid:e.liveId,upid:e.upId,groupid:e.groupId,recordid:e.recordId,viewertoken:e.viewertoken,viewername:e.viewername,forcibly:e.forcibly},l={globalData:{},requestLoginData:!1,requestInfoData:!1,requestDrawData:!1,requestChatqaData:!1,allRequests:0};o.version=h,o.service=3,o.client=4,f({url:"//view.csslcloud.net/api/room/replay/login",data:o,fn:M.on_cc_login_error,done:function(e){if(!c(e,M.on_cc_login_error))return!1;if(e.success){y.drawRequestTime=parseInt(e.datas.drawRequestTime)||1,M.TIMEOUT=M.TIMEOUT+1e3*y.drawRequestTime,E.fastMode||(y.drawRequestTime=""),m.log("options",y),N.state=new p;var t=new p;N.drawsInfoRequestPool=new g(N.state,t)}if(d(l.globalData,e),l.requestLoginData=!0,l.requestInfoData=!1,l.requestDrawData=!1,l.requestChatqaData=!1,l.allRequests++,u(l),"function"==typeof M.on_cc_login_success){var a=e.datas,i={type:a.template.type,desc:a.template.desc,name:a.template.name},r={name:a.viewer.name,id:a.viewer.id,groupId:a.viewer.groupId},s={desc:a.room.desc,liveStartTime:a.room.liveStartTime,name:a.room.name,documentDisplayMode:a.room.documentDisplayMode,barrage:a.room.barrage},n={startTime:a.live.endTime,endTime:a.live.endTime};M.on_cc_login_success({template:i,viewer:r,room:s,live:n})}y.drawRequestTime||f({url:"//view.csslcloud.net/api/view/replay/draw/info",data:o,fn:M.on_cc_request_draw_error,done:function(e){if(!c(e))return!1;d(l.globalData,e),l.requestLoginData=!1,l.requestInfoData=!1,l.requestDrawData=!0,l.requestChatqaData=!1,l.allRequests++,u(l)}}),f({url:"//view.csslcloud.net/api/view/replay/v2/chatqa/info",data:o,fn:M.on_cc_request_chatqa_error,done:function(e){if(!c(e,M.on_cc_request_chatqa_error))return!1;d(l.globalData,e),l.requestLoginData=!1,l.requestInfoData=!1,l.requestDrawData=!1,l.requestChatqaData=!0,l.allRequests++,u(l)}}),f({url:"//view.csslcloud.net/api/view/replay/v2/info",data:o,fn:M.on_cc_request_info_error,done:function(e){if(!c(e,M.on_cc_request_info_error))return!1;d(l.globalData,e),l.requestLoginData=!1,l.requestInfoData=!0,l.requestDrawData=!1,l.requestChatqaData=!1,l.allRequests++,u(l)}})}});var c=function(e,t){return e.success?!!e.datas:("function"==typeof t&&t(e),!1)},d=function(e,t){a(e,t),e.datas.meta||(e.datas.meta={}),a(e.datas.meta,t.datas.meta)},a=function(e,t){for(var a in t)t.hasOwnProperty(a)&&!e.hasOwnProperty(a)&&(e[a]=t[a])},u=function(e){t(e)}}(q,function R(e){var t=e.globalData;if(e.requestLoginData){var a=C.getElementById("playbackPanel");if(E.fastMode&&a){D("#documentDisplayMode").length<=0&&D("body").append("<input id='documentDisplayMode' type='hidden' value=''>"),D("#documentDisplayMode").val(t.datas.room.documentDisplayMode);var i=C.createElement("script");i.src="//image.csslcloud.net/live/1.0.4/web/js/dpc.js?v="+Math.floor(1e6*Math.random()),i.onload=function(){E.appendDrawPanel(),E.init({roomId:q.roomId,acountId:q.userId,type:2,token:t.datas.sessionId,isOpenWaterMark:parseInt(t.datas.fileProcess,10),recordId:q.recordId}),E.isDPReady=!0,M.on_hdLive_drawPanel_complete&&M.on_hdLive_drawPanel_complete()},C.body.appendChild(i)}q.chat={host:t.datas.pusherNode.primary},q.viewer.sessionId=t.datas.sessionId,q.liveId=t.datas.encryptLiveId,q.upId=t.datas.upId,q.viewerId=t.datas.viewer.id,k.socket=new x(q),D.DW.groupId=t.datas.viewer.groupId,"function"==typeof M.on_cc_callback_player&&M.on_cc_callback_player(t.datas),q.recordId||(q.recordId=t.datas.encryptRecordId),A.isH5play?O.init(q):"isMobile"==O.isMobile()&&O.init(q)}var r=t.datas.meta;if(!r)return;if(e.requestInfoData){var s=r.pageChange;if(s){for(var n=0;n<s.length;n++){var o=s[n].url,l="https:"===M.location.protocol;0<o.indexOf("//")&&l&&(o=o.replace("http:","https:"),s[n].url=o)}"function"==typeof M.on_cc_callback_pages&&M.on_cc_callback_pages(s)}var c=r.pageChange;if(c&&c.length){c.sort(function(e,t){return e.serverTime-t.serverTime}),c.sort(function(e,t){return parseInt(e.time)-parseInt(t.time)});for(var d=c.length,u=-1,s=[],n=0;n<d;n++){var h=c[n];h.time==u?s[s.length-1]=h:s.push(h),u=h.time}k.pageChanges=s}k.pageChanges&&k.pageChanges.length&&k.drawPanel.filp(k.pageChanges[0]);var f=r.animation;f&&f.length&&(f.sort(function(e,t){return parseInt(e.time)-parseInt(t.time)}),k.animations=f);var p=r.broadcast;if(M.chatLogs=r.broadcast,p&&p.length){p.sort(function(e,t){return parseInt(e.time)-parseInt(t.time)});for(var n=0;n<p.length;n++){var g=p[n];"function"==typeof M.on_cc_live_broadcast_msg&&M.on_cc_live_broadcast_msg({content:g.content,time:g.time})}k.broadcasts=p}}if(e.requestChatqaData){var m=r.question;if(m&&m.length){m.sort(function(e,t){return parseInt(e.time)-parseInt(t.time)}),k.questions=m;for(var n=0;n<k.questions.length;n++){var y=m[n];"function"==typeof M.on_cc_live_qa_question&&M.on_cc_live_qa_question({action:"question",value:{id:y.encryptId,content:y.content,groupId:y.groupId,userId:y.questionUserId,userName:y.questionUserName,userAvatar:y.questionUserAvatar,isPublish:y.isPublish}})}}var v=r.answer;if(v&&v.length){v.sort(function(e,t){return parseInt(e.time)-parseInt(t.time)}),k.answers=v;for(var n=0;n<k.answers.length;n++){var w=v[n];"function"==typeof M.on_cc_live_qa_answer&&M.on_cc_live_qa_answer({action:"answer",value:{questionId:w.encryptId,content:w.content,userId:w.answerUserId,isPrivate:w.isPrivate,groupId:w.groupId,userName:w.answerUserName,userAvatar:w.answerUserAvatar,userRole:w.answerUserRole}})}}var _=r.chatLog;if(M.chatLogs=r.chatLog,_&&_.length){_.sort(function(e,t){return parseInt(e.time)-parseInt(t.time)});for(var n=0;n<_.length;n++){var I=_[n];"function"==typeof M.on_cc_live_chat_msg&&M.on_cc_live_chat_msg({userid:I.userId,username:I.userName,time:I.time,msg:I.content,groupId:I.groupId,chatId:I.chatId,status:I.status,useravatar:I.userAvatar,userRole:I.userRole,usercustommark:I.userCustomMark,role:I.role})}k.chatLogs=_}M.chatLogs&&M.chatLogs.length&&(M.CHATLOGS=M.chatLogs,function P(){-1!=H&&clearInterval(H);H=setInterval(function(){var e=0;try{e=parseInt(D("#playbackVideo")[0].currentTime,10)}catch(i){}if(!(e<=0)&&M.CHATLOGS.length)for(var t=M.CHATLOGS[0];t.time<=e;){var a=M.CHATLOGS.shift();if(N.chatMessageCache.push({userid:a.userId,username:a.userName,time:a.time,msg:a.content,groupId:a.groupId,useravatar:a.userAvatar,userRole:a.userRole,chatId:t.chatId,status:t.status,usercustommark:a.userCustomMark,role:a.role}),!M.CHATLOGS.length)break;t=M.CHATLOGS[0]}},1e3)}()),M.broadcasts&&M.broadcasts.length&&(M.BROADCASTS=M.broadcasts,function T(){-1!=j&&clearInterval(j);j=setInterval(function(){var e=0;try{e=parseInt(D("#playbackVideo")[0].currentTime,10)}catch(i){}if(!(e<=0)&&M.BROADCASTS.length)for(var t=M.BROADCASTS[0];t.time<=e;){var a=M.BROADCASTS.shift();if(N.broadcastCache.push({content:a.content,time:a.time}),!M.BROADCASTS.length)break;t=M.BROADCASTS[0]}},1e3)}())}if(e.requestDrawData){var b=r.draw;b&&b.length&&(k.draws=b),k.isHistoryReady=!0,k.drawPanel.isReady=!0,setTimeout(function(){L()},1500)}M.on_cc_h5_player_load=function(){if(k.callbackPlayer.isReady=!0,!S){S=!0;var e=C.getElementById("drawPanel");e&&D.Callback.config({playerId:"playbackVideo"},r)}}});var S=!1}function r(){this.cache=[],this.lastTimeRefresh=(new Date).getTime(),this.INTERVAL_TIME=setInterval(function(){N.broadcastCache&&N.broadcastCache.refresh&&N.broadcastCache.refresh()},80),this.push=function(e){5e3<this.cache.length||this.cache.push(e)},this.destroy=function(){-1!=this.INTERVAL_TIME&&clearInterval(this.INTERVAL_TIME)},this.ableRefresh=function(){var e=(new Date).getTime();return 0!=this.cache.length&&80<=e-this.lastTimeRefresh},this.refresh=function(){if(this.ableRefresh()){clearInterval(this.INTERVAL_TIME);for(var e=[],t=Math.min(this.cache.length,10),a=0;a<t;a++)e.push(this.cache.shift());"function"==typeof M.on_cc_live_broadcast_msg_sync&&M.on_cc_live_broadcast_msg_sync(e),this.lastTimeRefresh=(new Date).getTime(),this.INTERVAL_TIME=setInterval(function(){N.broadcastCache.refresh()},80)}}}function s(){this.cache=[],this.lastTimeRefresh=(new Date).getTime(),this.INTERVAL_TIME=setInterval(function(){N.chatMessageCache.refresh()},80),this.destroy=function(){-1!=this.INTERVAL_TIME&&clearInterval(this.INTERVAL_TIME)},this.push=function(e){5e3<this.cache.length||this.cache.push(e)},this.ableRefresh=function(){var e=(new Date).getTime();return 0!=this.cache.length&&80<=e-this.lastTimeRefresh},this.refresh=function(){if(this.ableRefresh()){clearInterval(this.INTERVAL_TIME);for(var e=[],t=Math.min(this.cache.length,10),a=0;a<t;a++)e.push(this.cache.shift());"function"==typeof M.on_cc_live_chat_msg_sync&&M.on_cc_live_chat_msg_sync(e),this.lastTimeRefresh=(new Date).getTime(),this.INTERVAL_TIME=setInterval(function(){N.chatMessageCache.refresh()},80)}}}function n(e){this.chatLogs=[],this.broadcasts=[],this.draws=[],this.pageChanges=[],this.isHistoryReady=!1,this.questions=[],this.answers=[],this.pageChanges=[],this.draws=[],this.animations=[],this.pageChangeIndex=-1,this.drawIndex=-1,this.animationIndex=-1,this.isRequestDraws=!1,this.drawPanel=new a(e,this),this.history=new i(e,this),this.chatMessageCache=new s,this.broadcastCache=new r,this.destroy=function(){this.chatLogs=[],this.broadcasts=[],this.draws=[],this.pageChanges=[],this.isHistoryReady=!1,this.questions=[],this.answers=[],this.pageChanges=[],this.draws=[],this.animations=[],this.pageChangeIndex=-1,this.drawIndex=-1,this.animationIndex=-1,this.isRequestDraws=!1,this.history=null,this.drawPanel&&(this.drawPanel.destroy(),this.drawPanel=null),this.chatMessageCache&&(this.chatMessageCache.destroy(),this.chatMessageCache=null),this.broadcastCache&&(this.broadcastCache.destroy(),this.broadcastCache=null)}}var N={};M.isDebug=!1;var m={isDebug:M.isDebug,log:function(e,t){M.isDebug&&M.console&&"function"==typeof console.log&&(t?console.log(e+" => ",t):console.log(e))},isIE:function(){return-1<navigator.userAgent.indexOf("compatible")&&-1<navigator.userAgent.indexOf("MSIE")?(-1<navigator.userAgent.indexOf("MSIE 9.0")||navigator.userAgent.indexOf("MSIE 10.0"),!0):-1<navigator.userAgent.indexOf("Trident")&&-1<navigator.userAgent.indexOf("rv:11.0")},isMp4:function(e){var t=e.split("?")[0];return".mp4"===t.slice(t.length-4)}};M.TIMEOUT=5e3;var y={userId:D("#userId").val(),roomId:D("#roomId").val(),liveId:D("#liveId").val(),recordId:D("#recordId").val(),videoId:D("#videoId").val(),adapt:!1,isShowBar:0,viewerId:D("#viewerId").val(),upId:D("#upId").val(),viewer:{id:D("#viewerId").val(),name:D("#viewerName").val(),role:D("#viewerRole").val(),sessionId:D("#sessionId").val()},callbackPlayer:{id:"playbackPlayer",width:"100%",height:"100%"},drawPanel:{id:"playbackPanel",width:"100%",height:"100%"}},E={isDPReady:!1,dpc:{},fastMode:!0,init:function(e){this.dpc=new Dpc(e)},appendDrawPanel:function(){var e='<iframe id="dpa" allow-scripts allowfullscreen allowusermedia frameborder="0" style="width: 100%;height:100%;"></iframe>';"isMobile"==O.isMobile()&&(e='<iframe id="dpa" allow-scripts allowfullscreen allowusermedia frameborder="0" style="width: 100%;height:100%;pointer-events: none;"></iframe>'),D("#playbackPanel").parent().append(e),"function"==typeof M.on_cc_live_db_flip&&M.on_cc_live_db_flip()},destroy:function(){this.clear(),this.dpc.dispose(),this.dpc.resetDpc(),D("#dpa").remove()},pageChange:function(e){this.isDPReady&&this.fastMode&&this.dpc.pageChange(e)},animationChange:function(e){this.isDPReady&&this.fastMode&&this.dpc.animationChange(e)},history:function(e){this.isDPReady&&this.fastMode&&this.dpc.history(e)},draw:function(e){this.isDPReady&&this.fastMode&&this.dpc.draw(e)},clear:function(){this.isDPReady&&this.fastMode&&this.dpc.clear()},docAdapt:function(e){if(this.isDPReady&&this.fastMode){var t=e?"1":"2";this.dpc.setDisplayMode(t)}}};var A={isH5play:!0,fastMode:!0,forceNew:!1,setFastMode:function(e){"string"==typeof e.fastMode?"false"===e.fastMode?this.fastMode=!1:this.fastMode=!0:"boolean"==typeof e.fastMode?this.fastMode=e.fastMode:this.fastMode=!0},config:function(e){if(!function i(){{if(C.createElement("video").canPlayType){var e=C.createElement("video"),t=e.canPlayType('video/ogg; codecs="theora, vorbis"');if(t)return"probably"==t;var a=e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');return!!a&&"probably"==a}return!1}}()?this.isH5play=!1:e.isH5play+""=="false"?this.isH5play=!1:this.isH5play=!0,!e.recordId)throw new Error("未传入有效的recordId");this.setFastMode(e),E.fastMode=this.fastMode;var t=["//static.csslcloud.net/js/socket.io.js","//static.csslcloud.net/js/swfobject.js","//static.csslcloud.net/js/json3.min.js","//static.csslcloud.net/js/module/drawingBoard-2.0.0.js","//static.csslcloud.net/js/module/drawingBoardPlayback.js","//static.csslcloud.net/js/report.js"];E.fastMode&&t.splice(3,2),this.loadScript(t,function(){!function t(e){y.viewerId=e.viewerid,y=D.extend(y,e),N=new n(y)}(e),"isMobile"==O.isMobile()&&D.DrawingBoard&&!E.fastMode&&A.appendDrawPanel()}),"boolean"==typeof e.forceNew&&(this.forceNew=e.forceNew)},appendDrawPanel:function(){D("#playbackPanel").parent().append('<canvas id="drawPanel" width="1200" height="1200" style="position: absolute;z-index:2;top:0;left: 0"></canvas><iframe id="dpa" src="" frameborder="0" style="position: absolute;top:0;left: 0"></iframe>'),D("div#playbackPanel").hide()},logout:function(i){D.ajax({url:"//view.csslcloud.net/api/callback/logout",type:"GET",dataType:"jsonp",timeout:5e3,xhrFields:{withCredentials:!0},success:function(e){i&&i.success&&i.success(e)},error:function(e,t,a){i&&i.error&&i.error(e,t,a)}})},getScript:function(e,t){var a=!1,i=C.createElement("script");i.src=e,i.onload=i.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,t&&t())},C.body.appendChild(i)},loadScript:function(e,t){if("string"==typeof e){var a=e;(e=[]).push(a)}var i=this,r=function(e,t){i.getScript(e.shift(),function(){e.length?r(e,t):t&&t()})};r(e,t)},playbackRate:function(e){N.callbackPlayer.playbackRate(e)},seek:function(e){clearInterval(N.drawPanel.intervalNum),N.callbackPlayer.seek(e)},getPlayerTime:function(){return N.callbackPlayer.getPlayerTime()},destroy:function(){N&&(N.destroy(),N.socket&&N.socket.destroy(),N.callbackPlayer&&N.callbackPlayer.destroy()),E&&E.destroy(),function e(){-1!=H&&clearInterval(H);-1!=j&&clearInterval(j)}(),u&&u(jQuery,M,C,undefined)},getDuration:function(){return A.isH5play?O.getDuration():"isMobile"==O.isMobile()?O.getDuration():N.callbackPlayer.getDuration()},docAdapt:function(e){E.fastMode&&E.docAdapt(e),y.adapt=e},isShowBar:function(e){y.isShowBar=e},getBuffer:function(){return N.callbackPlayer.getBuffer()},setVolume:function(e){return N.callbackPlayer.setVolume(e)},getVolume:function(){return N.callbackPlayer.getVolume()},play:function(){return N.callbackPlayer.play()},setZScale:function(e){return N.callbackPlayer.setZScale(e)},getZScale:function(){return N.callbackPlayer.getZScale()},setScale:function(e){return N.callbackPlayer.setScale(e)},getScale:function(){return N.callbackPlayer.getScale()},openSettingPanel:function(){return N.callbackPlayer.openSettingPanel()},getReplayPractice:function(){e.getReplayPracticeInfo({recordId:y.recordId})},clipVideoImage:function(){if(!(D("#"+playbackPlayer.id+" video").length<=0)){var e=C.createElement("canvas"),t=e.getContext("2d"),a=C.querySelector("#playbackVideo");return a?(e.width=a.videoWidth,e.height=a.videoHeight,t.drawImage(a,0,0,a.videoWidth,a.videoHeight),e.toDataURL()):""}}};function L(){N.isHistoryReady?function e(){N.callbackPlayer.isReady?N.drawPanel.intervalPainting(N):setTimeout(function(){e()},500)}():setTimeout(function(){L()},300)}D.extend({DW:A}),M.on_cc_callback_player=function(e){y.videoId=e.live.encryptRecordvideoId,y.recordId=e.encryptRecordId,N.callbackPlayer=new t(y)};var H=-1,j=-1;M.on_cc_live_player_init=function(){N.callbackPlayer.isReady=!0;try{N.callbackPlayer.getFlash().start()}catch(a){}(-1!=H&&clearInterval(H),-1!=j&&clearInterval(j),H=setInterval(function(){var e=0;try{e=N.callbackPlayer.getPlayerTime()}catch(a){}if(!(e<=0)&&N.chatLogs.length)for(var t=N.chatLogs[0];t.time<=e&&(t=N.chatLogs.shift(),N.chatMessageCache.push({userid:t.userId,username:t.userName,time:t.time,msg:t.content,groupId:t.groupId,chatId:t.chatId,status:t.status,useravatar:t.userAvatar,userRole:t.userRole,usercustommark:t.userCustomMark,role:t.role}),N.chatLogs.length);)t=N.chatLogs[0]},1e3),j=setInterval(function(){var e=0;try{e=N.callbackPlayer.getPlayerTime()}catch(a){}if(!(e<=0)&&N.broadcasts.length)for(var t=N.broadcasts[0];t.time<=e&&(t=N.broadcasts.shift(),N.broadcastCache.push({content:t.content,time:t.time}),N.broadcasts.length);)t=N.broadcasts[0]},1e3),"function"==typeof M.on_cc_live_player_load&&M.on_cc_live_player_load(),on_cc_limit_request_draws)&&(parseInt(N.callbackPlayer.getDuration())?on_cc_limit_request_draws&&on_cc_limit_request_draws():ListenerDuration&&ListenerDuration())},M.on_drampanel_ready=function(){N.drawPanel.isReady=!0,setTimeout(function(){L()},1500)},M.seekStart=function(){clearInterval(N.drawPanel.intervalNum)},M.seekComplete=function(){N.drawPanel.clear();var e=N.callbackPlayer.getPlayerTime();e<0&&(e=0),N.pageChangeIndex=-1,N.drawIndex=-1,N.animationIndex=-1;var t={pageChange:[],animation:[],draw:[]};if(N.pageChanges&&0<N.pageChanges.length){for(var a=0;a<N.pageChanges.length;a++){e>=(i=N.pageChanges[a]).time&&(N.pageChangeIndex=a)}if(0<=N.pageChangeIndex){var i=N.pageChanges[N.pageChangeIndex];"function"==typeof M.on_cc_callback_page_change&&M.on_cc_callback_page_change(i),"function"==typeof M.on_cc_request_snapshoot&&M.on_cc_request_snapshoot(i),E.fastMode?N.drawPanel.filp(i):N.drawPanel.filp(JSON.stringify({fileName:i.docName,totalPage:i.docTotalPage,docid:i.encryptDocId,url:i.url,page:i.pageNum,useSDK:i.useSDK})),t.pageChange.push(i)}}if(N.animations&&0<N.animations.length){for(a=0;a<N.animations.length;a++){e>=(s=N.animations[a]).time&&(N.animationIndex=a)}if(0<=N.animationIndex){var r=N.pageChangeIndex;if(0<=r){i=N.pageChanges[r];var s=N.animations[N.animationIndex];i&&s&&i.encryptDocId==s.encryptDocId&&e>=s.time&&i.time<=s.time&&(N.drawPanel.animation(JSON.stringify({fileName:s.docName,totalPage:s.docTotalPage,docid:s.encryptDocId,url:s.url,page:s.pageNum,step:s.step})),t.animation.push(s))}}}if(N.draws&&0<N.draws.length){for(a=0;a<N.draws.length;a++){(l=N.draws[a])&&e>=l.time&&(N.drawIndex=a)}var n=N.draws.slice(0,N.drawIndex+1);if(0<n.length){var o=[];for(a=0;a<n.length;a++){var l=n[a];o.push(l.data),t.draw.push(l)}N.drawPanel.draws(o)}}E.history(t),-1!=N.drawPanel.intervalNum&&clearInterval(N.drawPanel.intervalNum),N.drawPanel.intervalNum=setInterval(function(){N.drawPanel.interval()},1e3)};var o={};o.addEvents=function(e,t,a){C.addEventListener?o.addEvents=function(e,t,a){e.addEventListener(t,a,!1)}:o.addEvents=function(e,t,a){e.attachEvent("on"+t,function(){a.call(e,arguments)})},o.addEvents(e,t,a)};var l=0,c=0,d=!0,O={pauseState:!1,useHls:!1,init:function(e){var s=this;function t(r){D.ajax({url:"//view.csslcloud.net/api/vod/v2/play/h5",type:"GET",dataType:"jsonp",data:{userid:r.userId,roomid:r.roomId,recordid:r.recordId,mp4:a},success:function(e){if("false"===e.isValid)A.isH5play=!1,N.callbackPlayer.flashPlayerInit();else if(e&&e.video&&0<e.video.length){var t=e.video[0],a=t.playurl,i=t.secureplayurl;"https:"===M.location.protocol&&i&&(a=i),s.appendVideo(a,r)}else M.on_cc_live_player_load_fail&&M.on_cc_live_player_load_fail()}})}var a=0;if(!O.isMobile()&&A.isH5play){if(m.log("浏览器版本是否是IE",m.isIE()),m.isIE())return a=1,this.useHls=!1,void t(e);a=0,this.useHls=!0;var i=C.createElement("script");return i.src="//static.csslcloud.net/js/hls.js?v="+parseInt(2e3*Math.random(),10),i.onload=function(){t(e)},void C.body.appendChild(i)}t(e)},destroy:function(){this.hls&&(this.hls.destroy(),this.hls=null),D("#playbackVideo").remove()},appendVideo:function(e,t){var a=this,i='<video id="playbackVideo" x5-video-player-type="h5-page" crossOrigin="anonymous" webkit-playsinline playsinline controls autoplay x-webkit-airplay="deny" x5-playsinline width="100%" height="100%" src="'+e+'"></video>';D("#"+playbackPlayer.id).html(i);C.getElementById(playbackPlayer.id);var r=C.getElementById("playbackVideo");this.useHls&&!m.isMp4(e)?Hls.isSupported()&&(a.hls=new Hls,a.hls.attachMedia(r),a.hls.on(Hls.Events.MEDIA_ATTACHED,function(){a.hls.loadSource(e)})):D("#playbackVideo").attr("src",e),t.isShowBar&&r.removeAttribute("controls");var s=0,n=1;"isMobile"==O.isMobile()&&(s=1,n=11);new ReportLog(t,s,n,r,!1);this.isAndroid()||(this.pauseState=!0),o.addEvents(r,"canplay",function(){("isMobile"==O.isMobile()?(M.on_cc_live_player_load&&M.on_cc_live_player_load(),M.on_cc_h5_player_load&&M.on_cc_h5_player_load()):A.isH5play&&M.on_cc_live_player_init&&M.on_cc_live_player_init(),on_cc_limit_request_draws)&&(parseInt(N.callbackPlayer.getDuration())?on_cc_limit_request_draws&&on_cc_limit_request_draws():ListenerDuration&&ListenerDuration())},!1),o.addEvents(r,"playing",function(){a.pauseState=!1,M.on_player_start&&on_player_start(),M.on_spark_player_resume&&on_spark_player_resume()},!1),o.addEvents(r,"pause",function(){a.pauseState=!0,M.on_spark_player_pause&&on_spark_player_pause()},!1),o.addEvents(r,"ended",function(){M.on_spark_player_end&&on_spark_player_end()},!1),o.addEvents(r,"seeking",function(){d=!1,seekStart&&seekStart()},!1),o.addEvents(r,"seeked",function(){d=!1,seekComplete&&seekComplete()},!1)},getDuration:function(){var e=C.getElementById("playbackVideo");if(e)return Math.floor(e.duration)},getPlayerTime:function(){var e=C.getElementById("playbackVideo");if(e)return Math.floor(e.currentTime)},end:function(){D("#"+playbackPlayer.id).html("end")},appendDoc:function(e){var t='<img src="'+e+'" />';D("#"+playbackPanel.id).append(t)},isMobile:function(){if(this.isIPad()||this.isIPhone()||this.isAndroid()||this.isWindowsPhone())return"isMobile"},isIPad:function(){return null!=navigator.userAgent.match(/iPad/i)},isIPhone:function(){return null!=navigator.userAgent.match(/iPhone/i)},isAndroid:function(){return null!=navigator.userAgent.match(/Android/i)},isWindowsPhone:function(){return null!=navigator.userAgent.match(/Windows Phone/i)}},e={getReplayPracticeInfo:function(e){D.ajax({url:"//eva.csslcloud.net/api/v1/practice/replay/info",data:e,type:y.type||"GET",dataType:y.dataType||"jsonp",timeout:y.timeout||5e3,success:function(e){M.on_hdReplay_practice_info&&M.on_hdReplay_practice_info(e)},error:function(e){M.on_hdReplay_practice_info&&M.on_hdReplay_practice_info(e)}})}}}(jQuery,window,document,undefined)}]);