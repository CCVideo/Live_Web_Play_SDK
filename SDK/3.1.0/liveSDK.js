!function (i) {
  var n = {}

  function o(e) {
    if (n[e]) return n[e].exports
    var t = n[e] = {i: e, l: !1, exports: {}}
    return i[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
  }

  o.m = i, o.c = n, o.d = function (e, t, i) {
    o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
  }, o.r = function (e) {
    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0})
  }, o.t = function (t, e) {
    if (1 & e && (t = o(t)), 8 & e) return t
    if (4 & e && 'object' == typeof t && t && t.__esModule) return t
    var i = Object.create(null)
    if (o.r(i), Object.defineProperty(i, 'default', {
      enumerable: !0,
      value: t
    }), 2 & e && 'string' != typeof t) for (var n in t) o.d(i, n, function (e) {
      return t[e]
    }.bind(null, n))
    return i
  }, o.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e['default']
    } : function () {
      return e
    }
    return o.d(t, 'a', t), t
  }, o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, o.p = '', o(o.s = 0)
}([function (e, t) {
  !function i() {
    var r = '3.1.0'
    !function () {
      function o(e) {
        console.log && console.log(e)
      }

      function a(e) {
        console.warn && console.warn(e)
      }

      function s(e, t) {
        for (var i = e.split('.'), n = t.split('.'), o = 0, a = i.length, s = !1; o < a - 1;) {
          var r = parseInt(i[o]), c = parseInt(n[o])
          if (c < r) {
            s = !0
            break
          }
          if (r < c) {
            s = !1
            break
          }
          o++
        }
        return s
      }

      var e = '//view.csslcloud.net/version/version.json?v=' + (new Date).getTime(), t = null
      try {
        window.XMLHttpRequest ? t = new XMLHttpRequest : window.ActiveXObject && (t = new ActiveXObject('Microsoft.XMLHTTP')), t && (t.open('GET', e, !0), t.onreadystatechange = function () {
          if (4 === t.readyState && 200 === t.status) {
            var e = JSON.parse(t.responseText)
            e && !function n(e) {
              var t = e.h5 ? e.h5 : {}
              if (t.lowyerVersion && s(t.lowyerVersion.v, r)) {
                t.lowyerVersion.expiration
                var i = t.errorMsg
                if (o(i), Error) throw new Error(i)
                a(i)
              } else if (t.latestVersion && s(t.latestVersion.v, r)) return void a(t.notify)
            }(e)
          }
        }, t.send())
      } catch (i) {
        o('访问版本信息失败')
      }
    }()
    var o = function (e, t, i) {
      $.ajax({
        url: e, type: 'GET', dataType: 'jsonp', data: t, xhrFields: {withCredentials: !0}, success: function (e) {
          'function' == typeof i ? i && i(e) : console.log && console.log('onQuestionnairePublish is undefined')
        }, error: function (e) {
          'function' == typeof i ? i({
            errorCode: 1,
            msg: 'request error',
            result: e
          }) : console.log && console.log('onQuestionnairePublish is undefined')
        }
      })
    }, I = {
      DocModeType: {NormalMode: 0, FreeMode: 1}, isDPReady: !1, dpc: {}, fastMode: !0, init: function () {
        this.dpc = new Dpc
      }, appendDrawPanel: function () {
        var e = '<iframe id="dpa" allow-scripts allowfullscreen allowusermedia frameborder="0" style="width: 100%;height:100%;"></iframe>'
        'isMobile' == L.isMobile() && (e = '<iframe id="dpa" allow-scripts allowfullscreen allowusermedia frameborder="0" style="width: 100%;height:100%;pointer-events: none;"></iframe>'), $('#drawPanel').parent().append(e), 'function' == typeof window.on_cc_live_db_flip && window.on_cc_live_db_flip()
      }, destroy: function () {
        this.dpc && this.dpc.dispose && this.dpc.dispose(), $('#dpa').remove()
      }, pageChange: function (e) {
        this.isDPReady && this.fastMode && this.dpc.pageChange(e)
      }, animationChange: function (e) {
        this.isDPReady && this.fastMode && this.dpc.animationChange(e)
      }, history: function (e) {
        this.isDPReady && this.fastMode && this.dpc.history(e)
      }, draw: function (e) {
        this.isDPReady && this.fastMode && this.dpc.draw(e)
      }, clear: function () {
        this.isDPReady && this.fastMode && this.dpc.clear()
      }, reload: function () {
        this.isDPReady && this.fastMode && this.dpc.reload()
      }, setDocMode: function (e) {
        this.isDPReady && this.fastMode && this.dpc.setFreeDocMode(e)
      }, getDocs: function (e) {
        this.isDPReady && this.fastMode && this.dpc.getDocs(S.roomid, S.userid, e)
      }, changePageTo: function (e, t) {
        this.isDPReady && this.fastMode && this.dpc.changePageTo(e, t)
      }, showMarquee: function (e) {
        this.isDPReady && this.fastMode && this.dpc.openMarquee(e)
      }, closeMarquee: function () {
        this.isDPReady && this.fastMode && this.dpc.closeMarquee()
      }, openBarrage: function (e) {
        this.isDPReady && this.fastMode && this.dpc.openBarrage()
      }, insertBarrage: function (e) {
        if (this.isDPReady && this.fastMode) {
          var t
          try {
            t = JSON.parse(e)
          } catch (i) {
            t = {type: 'text', content: e}
          }
          this.dpc.insertBarrage(t)
        }
      }, closeBarrage: function () {
        this.isDPReady && this.fastMode && this.dpc.closeBarrage()
      }, docAdapt: function (e) {
        if (this.isDPReady && this.fastMode) {
          var t = e ? '1' : '2'
          this.dpc.setDisplayMode(t)
        }
      }
    }
    window.isRequesting = !1

    function t(e) {
      try {
        window.PeerConnection = window.PeerConnection || window.webkitPeerConnection00 || window.webkitRTCPeerConnection || window.mozRTCPeerConnection, window.URL = window.URL || window.webkitURL || window.msURL || window.oURL, window.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, window.nativeRTCIceCandidate = window.mozRTCIceCandidate || window.RTCIceCandidate, window.nativeRTCSessionDescription = window.mozRTCSessionDescription || window.RTCSessionDescription
      } catch (t) {
      }
      this.usersPcs = {length: 0}, this.local = {
        type: {video: !1, audio: !1},
        video: {},
        audio: {}
      }, this.isRequesting = !1, this.client = null, this.localStream = null, this.initAgoraRTC = function (e) {
        if (AgoraRTC.checkSystemRequirements() || AgoraRTC.Logger.error('Your browser does not support WebRTC!'), AgoraRTC && AgoraRTC.Logger.setLogLevel(AgoraRTC.Logger.ERROR), window.atob) {
          var t = S.userid, i = S.roomid, n = S.sessionId, o = e.channelId, a = window.atob(this.hex2str(e.appId)),
            s = e.viewToken, r = e.videosize, c = {
              agora: {appId: a, viewToken: s, channelId: o, type: this.local.type, ui: 0, videoSize: r},
              tokens: {accountId: t, roomId: i, sessionId: n, channelId: o, ui: 0}
            }
          this.joinAgoraRTC(c)
        }
      }, this.hex2str = function (e) {
        var t, i = e.trim(), n = '0x' === i.substr(0, 2).toLowerCase() ? i.substr(2) : i, o = n.length
        if (o % 2 != 0) return alert('Illegal Format ASCII Code!'), ''
        for (var a = [], s = 0; s < o; s += 2) t = parseInt(n.substr(s, 2), 16), a.push(String.fromCharCode(t))
        return a.join('')
      }, this.joinAgoraRTC = function (i) {
        AgoraRTC.checkSystemRequirements() || AgoraRTC.Logger.error('Your browser does not support WebRTC!')
        var n = this
        AgoraRTC.Logger.enableLogUpload(), n.client = AgoraRTC.createClient({
          mode: 'live',
          codec: 'h264'
        }), n.client.init(i.agora.appId, function () {
          n.client.join(i.agora.viewToken, i.agora.channelId, i.agora.uid, function (e) {
            n.localStream = AgoraRTC.createStream({
              streamID: e,
              video: i.agora.type.video,
              audio: i.agora.type.audio,
              cameraId: n.cameraId,
              microphoneId: n.microphoneId,
              screen: !1
            })
            var t = i.agora.videoSize.split('x')
            n.localStream.setVideoEncoderConfiguration({
              resolution: {
                width: parseInt(t[0]),
                height: parseInt(t[1])
              }
            }), n.localStream.on('accessAllowed', function () {
            }), n.localStream.on('accessDenied', function () {
            }), n.localStream.on('player-status-change', function (e) {
              'video' == e.mediaType && 'aborted' == e.status && n.localStream.close()
            }), n.localStream.init(function () {
              $('#agora_local').length || $('#interactionLocalVideo').after('<div id="agora_local"></div>'), n.localStream.play('agora_local'), n.client.publish(n.localStream, function (e) {
              }), n.client.on('stream-published', function (e) {
              })
            }, function (e) {
            })
          }, function (e) {
          })
        }, function (e) {
        }), n.client.on('stream-added', function (e) {
          var t = e.stream
          n.client.subscribe(t, function (e) {
          })
        }), n.client.on('stream-subscribed', function (e) {
          var t = e.stream
          $('#videoInteractions').append('<div id="interactionRemoteVideo' + t.getId() + '" style="height: 100%; width: 100%;" autoplay></div>'), t.play('interactionRemoteVideo' + t.getId(), {fit: 'contain'})
        }), n.client.on('first-video-frame-decode', function (e) {
          'function' == typeof window.on_cc_live_interaction_remote_media && window.on_cc_live_interaction_remote_media(n.local.type), $('#agora_local').hide(), $('#livePlayer').replaceWith('<div id="livePlayer"></div>'), window.isRequesting = !1
        })
      }, this.leaveAgoraRTC = function () {
        var e = this
        e.client && (S.livePlayerInit(), e.localStream && e.localStream.close(), e.client && (e.client.leave(function () {
          $('#videoInteractions').empty(), $('#audioInteractions').empty(), $('#interactionLocalVideo')[0].src = '', $('#agora_local').html('')
        }, function (e) {
        }), window.isRequesting = !1))
      }, this.cameraId = '', this.microphoneId = '', this.getDevices = function () {
        var n = this
        AgoraRTC.getDevices(function (e) {
          for (var t = 0; t !== e.length; ++t) {
            var i = e[t]
            'audioinput' !== i.kind || n.microphoneId || (n.microphoneId = i.deviceId), 'videoinput' !== i.kind || n.cameraId || (n.cameraId = i.deviceId)
          }
        })
      }, this.requestInteraction = function (t, i) {
        l('Interaction', '请求互动'), window.isSpeakThirdParty && this.getDevices(), this.local.type = t, this.isRequesting = !0, this.setRequestTimeoutTimer(), this.createLocalMedia(function (e) {
          e ? 'function' == typeof window.on_cc_live_interaction_error && window.on_cc_live_interaction_error(d.interaction.local.type, e, '创建音视频信息出错') : M.requestInteraction(t, i)
        })
      }, this.setCallingTimer = function () {
        d.interaction.interactionTime = 0, d.interaction.interactionTimeInterval = setInterval(function () {
          if (++d.interaction.interactionTime, 'function' == typeof window.on_cc_live_interaction_interval) {
            var e = d.interaction.local.type, t = d.interaction.interactionTime
            window.on_cc_live_interaction_interval(e, t)
          }
        }, 1e3)
      }, this.clearCallingTimer = function () {
        d.interaction.interactionTime = 0, clearInterval(d.interaction.interactionTimeInterval)
      }, this.setRequestTimeoutTimer = function () {
        d.interaction.REQUEST_INTERACTION_TIMEOUT = setTimeout(function () {
          d.interaction.REQUEST_INTERACTION_TIMEOUT = -1, d.interaction.hangupInteraction(S.viewerid), d.interaction.stopLocalStream(), d.interaction.isRequesting = !1, $('#interactionLocalVideo')[0] && ($('#interactionLocalVideo')[0].src = ''), 'function' == typeof window.on_cc_live_interaction_request_timeout && window.on_cc_live_interaction_request_timeout(d.interaction.local.type)
        }, 6e4), window.isRequesting = !1
      }, this.clearRequestTimeoutTimer = function () {
        0 < d.interaction.REQUEST_INTERACTION_TIMEOUT && (clearTimeout(d.interaction.REQUEST_INTERACTION_TIMEOUT), d.interaction.REQUEST_INTERACTION_TIMEOUT = -1)
      }, this.stopLocalStream = function () {
        if (d.interaction.local.video.stream) try {
          d.interaction.local.video.stream.getTracks().forEach(function (e) {
            e.stop()
          })
        } catch (t) {
        }
        if (d.interaction.local.audio.stream) try {
          d.interaction.local.audio.stream.getTracks().forEach(function (e) {
            e.stop()
          })
        } catch (t) {
        }
      }, this.cancelInteraction = function () {
        d.interaction.isRequesting = !1, 'function' == typeof window.on_cc_live_interaction_cancal && window.on_cc_live_interaction_cancal(d.interaction.local.type)
      }, this.disconnectInteraction = function (o) {
        S.openSound(), this.clearRequestTimeoutTimer(), o == S.viewerid ? $.each(d.interaction.usersPcs, function (e, t) {
          var i = t.pc
          if (null == i) return !0
          if (i.close(), i = null, d.interaction.usersPcs[e]) {
            delete d.interaction.usersPcs[e]
            var n = d.interaction.usersPcs.length - 1
            d.interaction.usersPcs.length = n < 0 ? 0 : n
          }
        }) : $.each(d.interaction.usersPcs, function (e, t) {
          var i = t.pc
          if (!i) return !0
          if (e != o) return !0
          if (i.close(), i = null, d.interaction.usersPcs[e]) {
            delete d.interaction.usersPcs[e]
            var n = d.interaction.usersPcs.length - 1
            d.interaction.usersPcs.length = n < 0 ? 0 : n
          }
        }), 0 == d.interaction.usersPcs.length && this.stopLocalStream(), d.interaction.isInteractioning = !1, d.interaction.isRequesting = !1
      }, this.createLocalAudioAndVideoMedia = function (t) {
        var i = this
        getUserMedia.call(navigator, {video: !0, audio: !0}, function (e) {
          i.local.video.stream = e, t && 'function' == typeof t && t(e)
        }, function (e) {
          l('Interaction', 'getUserMedia error: ' + e), t && 'function' == typeof t && t(e)
        })
      }, this.createLocalAudioMedia = function (t) {
        var i = this
        getUserMedia.call(navigator, {video: !1, audio: !0}, function (e) {
          i.local.audio.stream = e, t && 'function' == typeof t && t(e)
        }, function (e) {
          l('Interaction', 'getUserMedia error: ' + e), t && 'function' == typeof t && t(e)
        })
      }, this.createLocalMedia = function (i) {
        var n = this, o = n.local.type
        getUserMedia.call(navigator, o, function (e) {
          o.video ? n.local.video.stream = e : n.local.audio.stream = e
          var t = $('#interactionLocalVideo')[0]
          t && (t.srcObject = e, t.volume = 0), 'function' == typeof window.on_cc_live_interaction_local_media && window.on_cc_live_interaction_local_media(o, e), i && 'function' == typeof i && i()
        }, function (e) {
          l('Interaction', 'getUserMedia error: ' + e), i && 'function' == typeof i && i(e)
        })
      }, this.iceServers = {
        iceServers: [{
          url: 'stun:turn.csslcloud.net:3478',
          credential: 'bokecc',
          username: 'cc'
        }, {url: 'turn:turn.csslcloud.net:3478', credential: 'bokecc', username: 'cc'}]
      }, this.createAnswerPeerConnection = function (t) {
        var i = new PeerConnection(this.iceServers)
        'audio' == t.type ? (d.interaction.local.audio.stream || this.createLocalAudioMedia(), i.addStream(d.interaction.local.audio.stream)) : (d.interaction.local.video.stream || this.createLocalAudioAndVideoMedia(), i.addStream(d.interaction.local.video.stream)), i.onaddstream = function (e) {
          'function' == typeof window.on_cc_live_interaction_remote_media_self && window.on_cc_live_interaction_remote_media_self(d.interaction.local.type, t, e.stream)
        }, i.createAnswer(function (e) {
          i.setLocalDescription(e), S.sendInteractionMessage(d.interaction.local.type, t.id, 'answer', e)
        }, function (e) {
          l('Interaction', 'Failure callback: ' + e)
        }), i.onicecandidate = function (e) {
          null !== e.candidate && S.sendInteractionMessage(d.interaction.local.type, t.id, '', e.candidate)
        }, d.interaction.usersPcs[t.id] = {pc: i, user: t}, d.interaction.usersPcs.length += 1
      }, this.createOfferPeerConnection = function (t) {
        var i = new PeerConnection(this.iceServers), n = d.interaction.local.type
        n.video ? i.addStream(d.interaction.local.video.stream) : i.addStream(d.interaction.local.audio.stream), i.onaddstream = function (e) {
          'function' == typeof window.on_cc_live_interaction_remote_media_self && window.on_cc_live_interaction_remote_media_self(d.interaction.local.type, t, e.stream)
        }, i.oniceconnectionstatechange = function (e) {
          l('Interaction', 'iceConnectionState ...' + i.iceConnectionState), 'failed' == i.iceConnectionState && (l('Interaction', 'iceConnectionState failed'), d.interaction.hangupInteraction(), 'function' == typeof window.on_cc_live_interaction_disconnect_self && window.on_cc_live_interaction_disconnect_self({disconnectid: S.viewerid}))
        }, i.createOffer(function (e) {
          i.setLocalDescription(e), S.sendInteractionMessage(n, t.id, 'offer', e)
        }, function (e) {
          'function' == typeof window.on_cc_live_interaction_error && window.on_cc_live_interaction_error(d.interaction.local.type, e, 'createOfferPeerConnection')
        }), i.onicecandidate = function (e) {
          null !== e.candidate && S.sendInteractionMessage(n, t.id, '', e.candidate)
        }, d.interaction.usersPcs[t.id] = {pc: i, user: t}, d.interaction.usersPcs.length += 1
      }, this.id = e.interaction.id, this.isSupportInteraction = function () {
        return window.isSpeakThirdParty ? !!AgoraRTC.checkSystemRequirements() || (AgoraRTC.Logger.error('Your browser does not support WebRTC!'), !1) : 'https:' === window.location.protocol && !!(PeerConnection && URL && getUserMedia && nativeRTCIceCandidate && nativeRTCSessionDescription)
      }, this.hangupInteraction = function (e) {
        this.isInteractioning ? M.hangupInteraction(this.type, e) : (this.isRequesting && M.cancelRequestInteraction(this.type, e), this.stopLocalStream(), this.cancelInteraction())
      }
    }

    var S = {
      DocModeType: {NormalMode: 0, FreeMode: 1},
      MediaScaleMode: {scale43: '4:3', scale169: '16:9', scaleFull: 'full', scaleNormal: 'normal'},
      init: function (e) {
        void 0 === e && (e = {}), this.userid = $.trim(e.userid), this.roomid = $.trim(e.roomid), this.groupid = $.trim(e.groupid), this.viewername = $.trim(e.viewername), this.viewertoken = $.trim(e.viewertoken), this.forcibly = $.trim(e.forcibly), this.viewercustomua = $.trim(e.viewercustomua), this.language = $.trim(e.language), this.viewercustominfo = $.trim(e.viewercustominfo), this.ua = $.trim(e.ua), this.viewerid = $.trim(e.viewerid), this.upid = $.trim(e.upid), 'string' == typeof e.fastMode ? 'false' === e.fastMode ? this.fastMode = !1 : this.fastMode = !0 : 'boolean' == typeof e.fastMode ? this.fastMode = e.fastMode : this.fastMode = !0, I.fastMode = this.fastMode, this.forceNew = !1, 'boolean' == typeof e.forceNew && (this.forceNew = e.forceNew)
        var t = this, i = ['//static.csslcloud.net/js/socket.io.js', '//static.csslcloud.net/js/report.js']
        0 <= navigator.appVersion.indexOf('MSIE') || i.push('//static.csslcloud.net/js/AgoraRTCSDK-2.7.1.js')
        var n = document.getElementById('drawPanel')
        if (I.fastMode && n && i.push('//image.csslcloud.net/live/1.0.1/sdk/js/dpc.js?v=' + (new Date).getTime()), 'isMobile' == L.isMobile()) 0 < $('#drawPanel').length && (I.fastMode || i.push('//static.csslcloud.net/js/module/drawingBoard-2.0.0.js')) else {
          if (!function c() {
            var e = !0
            if (0 <= navigator.appVersion.indexOf('MSIE')) try {
              new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
            } catch (t) {
              e = !1
            } else navigator.plugins['Shockwave Flash'] || (e = !1)
            return e
          }() && ('function' == typeof S.onNotSupportFlash && S.onNotSupportFlash(), '18452D400D6B81D5' == this.userid)) {
            var o = $('#' + P.id).parent().height(), a = $('#' + P.id).parent().width()
            $('#' + P.id).append('<div style="z-index: 999999;"><p style="color: #0e0e0e; width: 260px;">您还没有安装flash播放器,请点击<a href="http://www.adobe.com/go/getflash" style="color: red;" target="_blank">这里</a>安装</p></div>').parent().css('z-index', '999999')
            var s = $($('#' + P.id + ' div p')[0]).height(), r = $($('#' + P.id + ' div p')[0]).width()
            $('#' + P.id + ' div').css({
              'margin-left': (a - r - 60) / 2 + 'px',
              'margin-top': (o - s) / 2 + 'px'
            }), setInterval(function () {
              $('#' + P.id).parent().show()
            }, 3e3)
          }
          i.push('//static.csslcloud.net/js/swfobject.js', '//static.csslcloud.net/js/json3.min.js')
        }
        t.loadScript(i, function () {
          if (t.login(function e() {
            t.history = new u
          }), 'isMobile' == L.isMobile() && $.DrawingBoard) {
            $('#drawPanel').parent().append('<canvas id="drawPanel" width="1200" height="1200" style="position: absolute;z-index:2;top:0;left: 0"></canvas><iframe id="dpa" src="" frameborder="0" style="position: absolute;top:0;left: 0"></iframe>'), $('div#drawPanel').remove(), $.DrawingBoard.config()
          }
        })
      },
      login: function (b) {
        $.ajax({
          url: '//view.csslcloud.net/api/room/login',
          type: 'GET',
          dataType: 'jsonp',
          data: {
            roomid: this.roomid,
            userid: this.userid,
            groupid: this.groupid,
            viewername: this.viewername,
            viewertoken: this.viewertoken,
            forcibly: this.forcibly,
            viewercustomua: this.viewercustomua,
            viewercustominfo: this.viewercustominfo,
            version: r,
            service: 2,
            client: 4
          },
          success: function (e) {
            if (e.success) {
              var t = 'https:' === window.location.protocol, i = e.datas.pusherNode.primary
              if (t && i && i.indexOf(':')) {
                var n = i.split(':')
                if (2 == n.length) {
                  var o = parseInt(n[1])
                  if (!isNaN(o)) {
                    var a = o + 400
                    i = n[0] + ':' + a
                  }
                }
              }
              var s = document.location.protocol + '//' + i + '/' + e.datas.pusher.nsp, r = e.datas.viewer.key
              M.options.pusherUrl = s, M.options.key = r, S.viewerid = e.datas.viewer.id, S.sessionId = e.datas.viewer.key, S.viewername = e.datas.viewer.name, S.isBan = e.datas.room.isBan, S.liveId = e.datas.liveId, S.upid = e.datas.upId, S.multiQuality = e.datas.room.multiQuality, S.documentDisplayMode = e.datas.room.documentDisplayMode, S.isBarrage = e.datas.room.barrage, S.liveCountdown = e.datas.room.liveCountdown, S.groupId = e.datas.viewer.groupId
              var c = document.getElementById('drawPanel')
              I.fastMode && c && ($('#documentDisplayMode').val(S.documentDisplayMode), I.isDPReady = !0, I.appendDrawPanel(), I.init(), window.on_hdLive_drawPanel_complete && window.on_hdLive_drawPanel_complete()), b()
              var u = e.datas.room.delayTime, d = e.datas.room.foreignPublish;
              (P.delay = u) <= 0 && 5e3, P.foreignPublish = d, P.openHostMode = e.datas.room.openHostMode, P.dvr = e.datas.room.dvr, P.barrageData = e.datas.room.barrage, P.warmVideoId = e.datas.room.encryptWarmVideoId, P.viewerid = e.datas.viewer.id
              var l = e.datas.room.playerBackgroundImageUri
              if (l) (t = 'https:' === window.location.protocol) && (l = l.replace(/http:/g, 'https:')) else l = ''
              P.backgroundImageUri = l, 'function' == typeof S.playerBackgroundImageUri && S.playerBackgroundImageUri(l)
              var f = e.datas.room.playerBackgroundHint
              f || (f = ''), P.backgroundHint = f, 'function' == typeof S.playerBackgroundHint && S.playerBackgroundHint(f)
              var h = e.datas.announcement
              'function' == typeof S.onAnnouncementShow && h && S.onAnnouncementShow(h)
              var p = e.datas.room.desc
              'function' == typeof S.onLiveDesc && S.onLiveDesc(p)
              var w = e.datas.room.showUserCount
              'function' == typeof S.showUserCount && S.showUserCount(w)
              var g = e.datas.viewer.marquee
              if ('function' == typeof S.getMarquee && S.getMarquee(g), 'function' == typeof S.onLoginSuccess) {
                var v = {
                    desc: e.datas.template.desc,
                    type: e.datas.template.type,
                    name: e.datas.template.name,
                    id: e.datas.template.id
                  }, m = {id: e.datas.viewer.id, groupId: e.datas.viewer.groupId, name: e.datas.viewer.name},
                  y = {live: e.datas.live, template: v, viewer: m}
                S.onLoginSuccess(y)
              }
              var _ = e.datas.live
              switch ('function' == typeof S.onLiveTime && S.onLiveTime(_), M.init(), 'isMobile' == L.isMobile() ? L.init() : P.init(), e.datas.template.type) {
                case 6:
                  R.init(), S.sendPublicChatMsg = S.sendPrivateChatMsg = function () {
                    return !1
                  }
                  break
                case 5:
                  C.init(), R.init(), k.init()
                  break
                case 4:
                  C.init(), k.init(), S.sendQuestionMsg = function () {
                    return !1
                  }
                  break
                case 3:
                  C.init(), S.sendQuestionMsg = function () {
                    return !1
                  }
                  break
                case 2:
                  C.init(), R.init()
                  break
                default:
                  C.init(), R.init(), k.init()
              }
            } else 'function' == typeof S.onLoginError && S.onLoginError(e)
          }
        })
      },
      logout: function (n) {
        n && ($.ajax({
          url: '//view.csslcloud.net/api/live/logout',
          type: 'GET',
          dataType: 'jsonp',
          timeout: 5e3,
          xhrFields: {withCredentials: !0},
          success: function (e) {
            'function' == typeof n.success && n.success(e)
          },
          error: function (e, t, i) {
            'function' == typeof n.error && n.error({errorcode: '100', msg: '退出失败', info: i})
          }
        }), M.socket && M.socket.disconnect())
      },
      getScript: function (e, t) {
        var i = !1, n = document.createElement('script')
        n.src = e, n.onload = n.onreadystatechange = function () {
          i || this.readyState && 'loaded' != this.readyState && 'complete' != this.readyState || (i = !0, t && t())
        }, document.body.appendChild(n)
      },
      loadScript: function (e, t) {
        if ('string' == typeof e) {
          var i = e;
          (e = []).push(i)
        }
        var n = this, o = function (e, t) {
          n.getScript(e.shift(), function () {
            e.length ? o(e, t) : t && t()
          })
        }
        o(e, t)
      },
      changeNickname: function (e) {
        if (!e || 'string' != typeof e || 20 < e.length) return !1
        M.socket.emit('change_nickname', e)
      },
      destroy: function () {
        I && I.destroy(), M && M.destroy(), d.interaction && d.interaction.disconnectInteraction(a.viewerId), P && P.isReady && P.destroy(), window.live && window.live.interaction && (window.live.interaction.hangupInteraction && window.live.interaction.hangupInteraction(), window.live.interaction.leaveAgoraRTC()), i(window)
      },
      sendPublicChatMsg: function (e) {
        !e || 300 < e.length || M.socket.emit('chat_message', e)
      },
      sendPrivateChatMsg: function (e, t, i) {
        var n = (new Date).getHours(), o = (new Date).getMinutes(), a = (new Date).getSeconds()
        o = 9 < o ? o : '0' + o, a = 9 < a ? a : '0' + a
        var s = {
          fromuserid: this.viewerid,
          fromusername: this.viewername,
          touserid: e,
          tousername: t,
          msg: $.trim(i),
          time: n + ':' + o + ':' + a
        }
        M.socket.emit('private_chat', JSON.stringify(s))
      },
      sendQuestionMsg: function (e) {
        if (e && !(300 < e.length)) {
          var t = {action: 'question', value: {userId: this.viewerid, userName: this.viewername, content: e}}
          try {
            M.socket.emit('question', JSON.stringify(t))
          } catch (i) {
          }
        }
      },
      barrage: function (e, t) {
        if ('isMobile' != L.isMobile()) {
          var i = $.trim(e)
          i && (i = e.replace(/\[em2?_([0-9]*)\]/g, ''), P.barrage({txt: i, color: null == t ? 16777215 : t}))
        }
      },
      getLine: function () {
        return 'isMobile' != L.isMobile() ? P.getLine() : L.src
      },
      changeLine: function (e) {
        'isMobile' == L.isMobile() ? L.changeLine(e) : P.changeLine(e)
      },
      onlyAudio: function () {
        'isMobile' == L.isMobile() ? L.onlyAudio() : P.onlyAudio()
      },
      changeVideoScale: function (e) {
        'isMobile' != L.isMobile() && P.changeVideoScale(e)
      },
      setSound: function (e) {
        'isMobile' != L.isMobile() && P.setSound(e)
      },
      answerRollcall: function (e, t) {
        var i = {rollcallId: e, userId: this.viewerid, userName: this.viewername, publisherId: t}
        M.socket.emit('answer_rollcall', JSON.stringify(i))
      },
      replyVote: function (e, t, i) {
        var n = {voteId: e, voteOption: t, publisherId: i}
        M.socket.emit('reply_vote', JSON.stringify(n))
      },
      docBarrage: function (e, t) {
        $.trim(e) && k.barrage({txt: e, color: null == t ? 16777215 : t})
      },
      openBarrage: function (e) {
        P.openBarrage(e)
      },
      openDocBarrage: function (e) {
        'isMobile' != L.isMobile() && I.fastMode && I.openBarrage(e)
      },
      insertDocBarrage: function (e) {
        'isMobile' != L.isMobile() && I.fastMode && I.insertBarrage(e)
      },
      closeDocBarrage: function () {
        'isMobile' != L.isMobile() && I.fastMode && I.closeBarrage()
      },
      showControl: function (e) {
        'isMobile' == L.isMobile() ? L.showControl(e) : P.showControl(e)
      },
      livePlayerInit: function () {
        P.init()
      },
      openSound: function () {
        P.openSound()
      },
      closeSound: function () {
        P.closeSound()
      },
      docAdapt: function (e) {
        I.fastMode ? I.docAdapt(e) : d.adapt = e
      },
      requestInteraction: function (e) {
        window.isRequesting || (window.isRequesting = !0, 0 <= navigator.appVersion.indexOf('MSIE') || d.interaction.requestInteraction(e))
      },
      hangupInteraction: function () {
        d.interaction.hangupInteraction()
      },
      enterInteractionRoom: function (e) {
        var t = undefined
        try {
          M.socket.emit('speak_enter')
        } catch (i) {
          t = i
        } finally {
          'function' == typeof e && e(t)
        }
      },
      sendInteractionMessage: function (e, t, i, n, o) {
        var a = 'audio'
        e.video && (a = 'audiovideo')
        var s = {
          type: a,
          fromname: this.viewername,
          fromid: this.viewerid,
          fromrole: 'student',
          toid: t,
          event: i,
          data: JSON.stringify(n)
        }, r = undefined
        try {
          M.socket.emit('speak_message', JSON.stringify(s))
        } catch (c) {
          r = c
        } finally {
          'function' == typeof o && o(r)
        }
      },
      showMarquee: function (e) {
        P.showMarquee(e)
      },
      closeMarquee: function () {
        P.closeMarquee()
      },
      showMarqueeDoc: function (e) {
        I.fastMode ? I.showMarquee(e) : k.showMarquee(e)
      },
      closeMarqueeDoc: function () {
        I.fastMode && I.closeMarquee()
      },
      setDocMode: function (e) {
        I.fastMode && I.setDocMode(e)
      },
      getDocs: function (e) {
        I.fastMode && I.getDocs(e)
      },
      changePageTo: function (e, t) {
        I.fastMode && I.changePageTo(e, t)
      },
      submitQuestionnaire: function (e, n) {
        if (e) {
          var t = {questionnaireid: e.questionnaireId, answers: JSON.stringify({subjectsAnswer: e.subjectsAnswer})}
          $.ajax({
            url: '//eva.csslcloud.net/api/questionnaire/submit',
            type: 'GET',
            dataType: 'jsonp',
            timeout: 5e3,
            data: t,
            xhrFields: {withCredentials: !0},
            success: function (e) {
              n ? n(e) : console.log && console.log('no callback')
            },
            error: function (e, t, i) {
              n && n({errorCode: 1, msg: 'request was aborted', result: i})
            }
          })
        }
      },
      getPublishingQuestionnaire: function () {
        o('//eva.csslcloud.net/api/questionnaire/info', {}, S.onQuestionnairePublish)
      },
      getPracticeInfo: function (e, t) {
        var i = {practiceId: e, sessionId: M.options.key}
        o('//eva.csslcloud.net/api/practice/info', i, t)
      },
      getPracticeInfomation: function (e, t) {
        var i = {practiceId: e, sessionId: M.options.key, mark: 1}
        o('//eva.csslcloud.net/api/practice/info', i, t)
      },
      submitPracticeInfo: function (e, t, i) {
        var n = {practiceId: e, options: t, sessionId: M.options.key}
        o('//eva.csslcloud.net/api/practice/submit', n, i)
      },
      getPracticeStatisInfo: function (e, t) {
        var i = {practiceId: e, sessionId: M.options.key}
        o('//eva.csslcloud.net/api/practice/statis', i, t)
      },
      getPracticeRanking: function (e, t) {
        var i = {practiceId: e, sessionId: M.options.key}
        o('//eva.csslcloud.net/api/practice/ranking', i, t)
      },
      getHdInquirePunchInformation: function (t) {
        this.httpRequest({
          url: '//view.csslcloud.net/servlet/punch/viewer',
          data: {sessionId: M.options.key},
          success: function (e) {
            'function' == typeof t && t(e)
          },
          error: function (e) {
            t && t(e)
          }
        })
      },
      hdCommitPunch: function (e, t) {
        this.httpRequest({
          url: '//view.csslcloud.net/servlet/punch/commit',
          data: {punchId: e, sessionId: M.options.key},
          success: function (e) {
            t && t(e)
          },
          error: function (e) {
            t && t(e)
          }
        })
      },
      httpRequest: function (t) {
        $.ajax({
          url: t.url || '',
          data: t.data || {},
          type: t.type || 'GET',
          dataType: t.dataType || 'json',
          timeout: t.timeout || 5e3,
          success: function (e) {
            'function' == typeof t.success && t.success(e)
          },
          error: function (e) {
            'function' == typeof t.error && t.error(e)
          },
          fail: function (e) {
            'function' == typeof t.fail && t.fail(e)
          }
        })
      }
    }, a = {
      init: function () {
        this.userId = S.userid, this.roomId = S.roomid, this.groupId = S.groupId, this.liveId = S.liveId, this.viewerId = S.viewerid, this.upId = S.upid
      }
    }, M = {
      options: {
        pusherUrl: '',
        key: '',
        maxMessageCount: 300,
        userId: '',
        roomId: '',
        livePlayerId: '',
        drawPanel: ''
      }, drawjson: [], pagechangedata: [], publishStreamTimer: 0, endStreamTimer: 0, init: function () {
        var e = 'isMobile' == L.isMobile() ? 1 : 0
        this.timeIntervalID = -1, S.forceNew ? (this.socket = io.connect(this.options.pusherUrl + '?sessionid=' + M.options.key + '&platform=1&terminal=' + e, {forceNew: !0}), l('forceNew: true')) : (this.socket = io.connect(this.options.pusherUrl, {
          query: {
            sessionid: M.options.key,
            platform: 1,
            terminal: e
          }
        }), l('forceNew: false')), this.bind()
      }, destroy: function () {
        this.hangupInteraction(), this.cancelRequestInteraction(), this.socket && this.socket.disconnect(), -1 != this.timeIntervalID && clearInterval(this.timeIntervalID)
      }, bind: function () {
        var i = !1
        this.socket.on('connect', function () {
          'function' == typeof window.onSocketConnect && window.onSocketConnect()
        }), this.socket.on('disconnect', function () {
          'function' == typeof window.onSocketDisconnect && window.onSocketDisconnect(), window.isRequesting = !1
        }), this.socket.on('page_change', function (e) {
          if (e && 'string' == typeof e && M.pagechangedata.push(JSON.parse(e)), 'function' == typeof window.on_cc_live_dw_page_change && window.on_cc_live_dw_page_change(e), 'function' == typeof S.onPageChange) {
            var t = JSON.parse(e), i = {
              docId: t.value.docid,
              docName: t.value.fileName,
              docTotalPage: t.value.totalPage,
              pageNum: t.value.page
            }
            S.onPageChange(i)
          }
        }), this.socket.on('change_nickname', function (e) {
          S.viewername = e, 'function' == typeof S.onChangeNickname && S.onChangeNickname(e)
        }), this.socket.on('animation_change', function (e) {
          'function' == typeof window.on_cc_live_dw_animation_change && window.on_cc_live_dw_animation_change(e)
        }), this.socket.on('draw', function (e) {
          e && 'string' == typeof e && M.drawjson.push(JSON.parse(e)), 'function' == typeof window.on_cc_live_dw_draw && window.on_cc_live_dw_draw(e)
        }), this.socket.on('room_user_count', function (e) {
          'function' == typeof S.onUserCountMessage && S.onUserCountMessage(e)
        }), this.socket.on('publish_stream', function (e) {
          this.publishStreamTimer && clearTimeout(this.publishStreamTimer), this.publishStreamTimer = setTimeout(function () {
            P && (P.isPublishing = 1), P && P.start && P.start(), 'function' == typeof S.onLiveStart && S.onLiveStart(e)
          }, n())
        }), this.socket.on('end_stream', function (e) {
          this.endStreamTimer && clearTimeout(this.endStreamTimer), this.endStreamTimer = setTimeout(function () {
            P && (P.isPublishing = 0), P && P.end && P.end(), k && k.clear && k.clear(), I.clear(), 'function' == typeof S.onLiveEnd && S.onLiveEnd(e)
          }, n())
        }), this.socket.on('kick_out', function (e) {
          M.socket.disconnect(), 'function' == typeof S.onKickOut && S.onKickOut(e), L.isIPad() || L.isIPhone() || L.isAndroid() || L.isWindowsPhone() || P.getFlash()._kickOff()
        }), this.socket.on('announcement', function (e) {
          'release' == (e = f(e)).action ? 'function' == typeof S.onAnnouncementRelease && S.onAnnouncementRelease(e.announcement) : 'remove' == e.action && 'function' == typeof S.onAnnouncementRemove && S.onAnnouncementRemove(e)
        }), this.socket.on('start_rollcall', function (e) {
          e = f(e), 'function' == typeof S.onStartRollCall && S.onStartRollCall(e)
        }), this.socket.on('start_punch', function (e) {
          e = f(e), 'function' == typeof S.onHdLiveStartPunch && S.onHdLiveStartPunch(e)
        }), this.socket.on('stop_punch', function (e) {
          e = f(e), 'function' == typeof S.onHdLiveStopPunch && S.onHdLiveStopPunch(e)
        }), this.socket.on('start_lottery', function (e) {
          e = f(e), 'function' == typeof S.onStartLottery && S.onStartLottery(e)
        }), this.socket.on('win_lottery', function (e) {
          e = f(e), 'function' == typeof S.onWinLottery && S.onWinLottery(e)
        }), this.socket.on('stop_lottery', function (e) {
          e = f(e), 'function' == typeof S.onStopLottery && S.onStopLottery(e)
        }), this.socket.on('start_vote', function (e) {
          e = f(e), 'function' == typeof S.onStartVote && S.onStartVote(e)
        }), this.socket.on('stop_vote', function (e) {
          e = f(e), 'function' == typeof S.onStopVote && S.onStopVote(e)
        }), this.socket.on('vote_result', function (e) {
          e = f(e), 'function' == typeof S.onVoteResult && S.onVoteResult(e)
        }), this.socket.on('ban_stream', function (e) {
          e = f(e), S.isBan = 1, 'isMobile' == L.isMobile() ? L.ban() : P.banLive(), 'function' == typeof S.onBanStream && S.onBanStream(e)
        }), this.socket.on('unban_stream', function (e) {
          e = f(e), S.isBan = 0, 'isMobile' == L.isMobile() ? L.unban() : P.unbanLive(), 'function' == typeof S.onUnBanStream && S.onUnBanStream(e)
        }), window.isSpeakThirdParty = !1, this.socket.on('room_setting', function (e) {
          if (e = f(e), 'function' == typeof S.onRoomSetting && (window.allowSpeakThirdParty = e.allow_speak_third_party, 'true' == e.allow_speak_interaction && (window.isSpeakThirdParty = !1), 'true' == window.allowSpeakThirdParty.status && (window.isSpeakThirdParty = !0, e.allow_speak_interaction = 'true'), window.isSpeakThirdParty, S.onRoomSetting(e)), e.layout_video_main != i) {
            var t = e.layout_video_main
            'function' == typeof S.onSwitchVideoDoc && S.onSwitchVideoDoc(t), i = t
          }
        }), this.socket.on('silence_user_chat_message', function (e) {
          'function' == typeof S.onSilenceUserChatMessage && S.onSilenceUserChatMessage(f(e))
        }), this.socket.on('accept_speak', function (e) {
          'function' == typeof window.on_cc_live_accept_interaction && window.on_cc_live_accept_interaction(f(e))
        }), this.socket.on('speak_message', function (e) {
          window.isSpeakThirdParty || 'function' != typeof window.on_cc_live_interaction_message || window.on_cc_live_interaction_message(f(e))
        }), this.socket.on('speak_peer_list', function (e) {
          'function' == typeof window.on_cc_live_interaction_chatusers && window.on_cc_live_interaction_chatusers(f(e))
        }), this.socket.on('speak_disconnect', function (e) {
          'function' == typeof window.on_cc_live_interaction_disconnect_self && window.on_cc_live_interaction_disconnect_self(f(e))
        }), this.socket.on('speak_disconnect_third_party', function (e) {
          'function' == typeof window.on_cc_live_interaction_disconnect_self && window.on_cc_live_interaction_disconnect_self(f(e))
        }), this.socket.on('broadcast_msg', function (e) {
          'function' == typeof S.onBroadcastMsg && S.onBroadcastMsg(f(e).value)
        }), this.socket.on('publish_question', function (e) {
          'function' == typeof S.onQaPublish && S.onQaPublish(f(e))
        }), this.socket.on('questionnaire_publish', function (e) {
          e = f(e), 'function' == typeof S.onQuestionnairePublish && S.onQuestionnairePublish(e)
        }), this.socket.on('questionnaire_publish_stop', function (e) {
          e = f(e), 'function' == typeof S.onQuestionnairePublishStop && S.onQuestionnairePublishStop(e)
        }), this.socket.on('practice_publish', function (e) {
          e = f(e), 'function' == typeof S.onPracticePublish && S.onPracticePublish(e)
        }), this.socket.on('practice_stop', function (e) {
          e = f(e), 'function' == typeof S.onPracticePublishStop && S.onPracticePublishStop(e)
        }), this.socket.on('practice_close', function (e) {
          e = f(e), 'function' == typeof S.onPracticeClose && S.onPracticeClose(e)
        }), this.socket.on('prize_send', function (e) {
          e = f(e), 'function' == typeof S.onPrizeSend && S.onPrizeSend(e)
        }), this.socket.on('questionnaire_publish_statis', function (e) {
          e = f(e), 'function' == typeof S.onQuestionnairePublishStatis && S.onQuestionnairePublishStatis(e)
        }), this.socket.on('room_teachers', function (e) {
          'function' == typeof S.onOnlineTeachers && S.onOnlineTeachers(f(e))
        }), this.socket.on('external_questionnaire_publish', function (e) {
          'function' == typeof S.onExternalQuestionnairePublish && S.onExternalQuestionnairePublish(f(e))
        }), this.socket.on('ban_chat', function (e) {
          'function' == typeof S.onBanChat && S.onBanChat(f(e))
        }), this.socket.on('unban_chat', function (e) {
          'function' == typeof S.onUnBanChat && S.onUnBanChat(f(e))
        }), this.socket.on('switch_source', function (e) {
          'function' == typeof S.onSwitchSource && S.onSwitchSource(e)
        })
        var t = this
        setTimeout(function () {
          try {
            t.socket.emit('room_user_count')
          } catch (e) {
          }
          try {
            t.socket.emit('room_teachers')
          } catch (e) {
          }
        }, 1500), this.timeIntervalID = setInterval(function () {
          try {
            t.socket.emit('room_user_count')
          } catch (e) {
          }
          try {
            t.socket.emit('room_teachers')
          } catch (e) {
          }
        }, 15e3)
      }, requestInteraction: function (e, t) {
        var i = 'audio'
        e.video && (i += 'video')
        var n = {viewerId: S.viewerid, viewerName: S.viewername, type: i}, o = undefined
        try {
          this.socket.emit('request_speak', JSON.stringify(n))
        } catch (a) {
          o = a
        } finally {
          'function' == typeof t && t(o)
        }
      }, cancelRequestInteraction: function (e, t) {
        var i = {viewerId: S.viewerid, viewerName: S.viewername, type: window.live.interaction.local.type}
        l('interaction', '取消申请：' + JSON.stringify(i))
        var n = undefined
        try {
          this.socket.emit('cancel_request_speak', JSON.stringify(i))
        } catch (o) {
          n = o
        } finally {
          'function' == typeof t && t(n)
        }
      }, hangupInteraction: function (e, t) {
        var i = {viewerId: S.viewerid, viewerName: S.viewername, type: e}
        l('interaction', '挂断事件：' + JSON.stringify(i))
        var n = undefined
        try {
          window.isSpeakThirdParty ? this.socket.emit('hangup_interaction_third_party', JSON.stringify(i)) : this.socket.emit('hangup_interaction', JSON.stringify(i))
        } catch (o) {
          n = o
        } finally {
          'function' == typeof t && t(n)
        }
      }
    }, P = {
      id: 'livePlayer',
      swfUrl: '//zeus.csslcloud.net/flash/Player.swf',
      isReady: !1,
      isPublishing: 0,
      delay: '',
      foreignPublish: '',
      init: function () {
        var e = {
          userid: S.userid,
          roomid: S.roomid,
          foreignPublish: this.foreignPublish,
          warmvideoid: this.warmVideoId,
          openhostmode: this.openHostMode,
          dvr: this.dvr,
          barrage: this.barrageData,
          backgroundImageUri: this.backgroundImageUri,
          backgroundHint: this.backgroundHint,
          countDownTime: S.liveCountdown,
          openMultiQuality: S.multiQuality,
          language: S.language || '',
          type: 'liveplayer',
          upid: S.upid,
          viewerid: this.viewerid,
          ua: 1
        }, t = this.delay
        0 < t && (e.buffer = t)
        swfobject.embedSWF(this.swfUrl, this.id, '100%', '100%', '10.0.0', '/flash/expressInstall.swf', e, {
          allowFullscreen: 'true',
          allowScriptAccess: 'always',
          wmode: 'transparent'
        })
      },
      getFlash: function () {
        if ('undefined' != typeof swfobject && swfobject && swfobject.getObjectById) return swfobject.getObjectById(this.id)
      },
      getPlayerTime: function () {
        var e = parseInt('function' == typeof this.getFlash()._time ? this.getFlash()._time() : 0)
        return isNaN(e) || e < 0 ? 0 : e
      },
      start: function () {
        if ('isMobile' == L.isMobile()) {
          if (S.isBan) return $('#livePlayer').css({
            'text-align': 'center',
            color: 'white',
            'font-size': '18px',
            'line-height': '232px'
          }), void $('#livePlayer').html('<p>直播已封禁，请联系管理员</p>')
          L.init()
        } else {
          if (!this.getFlash()) return
          this.isPublishing = 1, this.getFlash()._streamStart()
        }
      },
      end: function () {
        if ('isMobile' == L.isMobile()) L.end() else {
          if (!this.getFlash()) return
          this.isPublishing = 0, this.getFlash()._streamEnd && this.getFlash()._streamEnd()
        }
      },
      barrage: function (e) {
        e && this.getFlash() && this.getFlash()._jsTOASbarrage && this.getFlash()._jsTOASbarrage(e)
      },
      destroy: function () {
        this.end(), $(this.id).remove()
      },
      getLine: function () {
        var e = this.getFlash().getLine ? this.getFlash().getLine() : 0
        return e && (e = JSON.parse(e)), e
      },
      changeLine: function (e) {
        this.getFlash().changeLine && this.getFlash().changeLine(e)
      },
      changeVideoScale: function (e) {
        this.getFlash()._showScreenScale && this.getFlash()._showScreenScale(e)
      },
      onlyAudio: function () {
        this.getFlash()._onlyAudio && this.getFlash()._onlyAudio()
      },
      setSound: function (e) {
        this.getFlash()._SetSound && this.getFlash()._SetSound(e)
      },
      openSound: function () {
        this.getFlash() && this.getFlash && this.getFlash()._onSound()
      },
      closeSound: function () {
        this.getFlash() && this.getFlash && this.getFlash()._unSound()
      },
      openBarrage: function (e) {
        this.getFlash() && this.getFlash()._barrage && this.getFlash()._barrage(e)
      },
      showControl: function (e) {
        this.getFlash() && this.getFlash()._ShowControl && this.getFlash()._ShowControl(e)
      },
      banLive: function () {
        this.getFlash() && this.getFlash()._banLive && this.getFlash()._banLive()
      },
      unbanLive: function () {
        this.getFlash() && this.getFlash()._unbanLive && this.getFlash()._unbanLive()
      },
      showMarquee: function (e) {
        e && this.getFlash() && this.getFlash()._showMarqueePlugin && this.getFlash()._showMarqueePlugin(e)
      },
      closeMarquee: function () {
        this.getFlash() && this.getFlash()._closeMarqueePlugin && this.getFlash()._closeMarqueePlugin({name: 'PluginForMarquee'})
      }
    }
    var k = {
      id: 'drawPanel', isReady: !(window._onStart = function () {
        P.isReady = !0
      }), isProcessing: !1, getWidth: function () {
        return '100%'
      }, getHeight: function () {
        return '100%'
      }, swfUrl: '//zeus.csslcloud.net/flash/Player.swf', init: function () {
        L.isIPad() || L.isIPhone() || L.isAndroid() || L.isWindowsPhone() || I.fastMode || swfobject.embedSWF(this.swfUrl, this.id, this.getWidth(), this.getHeight(), '10.0.0', '/flash/expressInstall.swf', {type: 'drawpanel'}, {
          allowFullscreen: 'true',
          allowScriptAccess: 'always',
          wmode: 'transparent'
        }, {})
      }, getSwf: function () {
        if (this.isReady) return swfobject.getObjectById(this.id)
      }, clear: function () {
        var e = this.getSwf()
        e && (e._streamEnd(), M.pagechangedata = [], M.drawjson = [])
      }, draw: function (e) {
        var t = this.getSwf()
        t && t.draw(e)
      }, draws: function (e) {
        var t, i = this.getSwf()
        i && (t = e, setTimeout(function () {
          i.drawList(t)
        }))
      }, filp: function (e) {
        var t = this.getSwf()
        if (t) {
          var i = S.documentDisplayMode
          this.displayMode = 1 == i ? 'auto' : 2 == i ? 'width' : 'auto', d.adapt !== undefined && (this.displayMode = d.adapt ? 'auto' : 'width')
          var n = JSON.parse(e), o = n.url
          'https:' === window.location.protocol && (n.url = o.replace(/http:/g, 'https:')), t.filp(JSON.stringify(n), this.displayMode)
        }
      }, animationFilp: function (e) {
        var t = this.getSwf()
        t && t.animation(e)
      }, barrage: function (e) {
        e && this.getSwf() && this.getSwf()._jsTOASbarrage && this.getSwf()._jsTOASbarrage(e)
      }, showMarquee: function (e) {
        e && this.getSwf() && this.getSwf().showMarqueeLight(e)
      }
    }, y = [], _ = [], b = [], T = !1, u = function () {
      $.ajax({
        url: '//view.csslcloud.net/api/view/info?userid=' + S.userid + '&roomid=' + S.roomid,
        type: 'GET',
        dataType: 'jsonp',
        success: function (e) {
          if (e.success && e.datas) {
            var t = e.datas.meta
            if (t && (P.isPublishing = t.isPublishing, 1 == t.isPublishing)) {
              for (var i = t.answer ? t.answer : [], n = t.question ? t.question : [], o = t.broadcast ? t.broadcast : [], a = 0; a < i.length; a++) for (var s = i[a], r = 0; r < n.length; r++) {
                (c = n[r]).encryptId == s.encryptId && (s.questionUserId = c.questionUserId)
              }
              if (n && n.length) for (a = 0; a < n.length; a++) {
                var c = n[a]
                'function' == typeof S.onQuestion && S.onQuestion(JSON.stringify({
                  action: 'question',
                  value: {
                    id: c.encryptId,
                    content: c.content,
                    userId: c.questionUserId,
                    groupId: c.groupId,
                    userName: c.questionUserName,
                    isPublish: c.isPublish,
                    triggerTime: c.triggerTime,
                    userAvatar: c.userAvatar
                  }
                }))
              }
              if (i && i.length) for (a = 0; a < i.length; a++) {
                s = i[a]
                'function' == typeof S.onAnswer && S.onAnswer(JSON.stringify({
                  action: 'answer',
                  value: {
                    questionId: s.encryptId,
                    isPrivate: s.isPrivate,
                    content: s.content,
                    userId: s.answerUserId,
                    groupId: s.groupId,
                    userName: s.answerUserName,
                    questionUserId: s.questionUserId,
                    triggerTime: s.triggerTime,
                    userAvatar: s.userAvatar
                  }
                }))
              }
              if (o && o.length) for (a = 0; a < o.length; a++) {
                var u = o[a]
                'function' == typeof S.onBroadcastMsg && S.onBroadcastMsg({content: u.content, time: u.time})
              }
              'isMobile' == L.isMobile() && $.DrawingBoard && $.DrawingBoard.history(t), I.history(t)
              var d = t.chatLog
              if (d && d.length) {
                var l = []
                for (a = 0; a < d.length; a++) {
                  var f = d[a]
                  l.push({
                    userid: f.userId,
                    username: f.userName,
                    userrole: f.userRole,
                    useravatar: f.userAvatar,
                    groupId: f.groupId,
                    msg: f.content,
                    time: f.time,
                    chatId: f.chatId,
                    status: f.status,
                    usercustommark: f.userCustomMark
                  })
                }
                if ('function' == typeof S.onPublicChatMessage) for (var h = 0; h < l.length; h++) S.onPublicChatMessage(JSON.stringify(l[h]))
              }
              if (!I.fastMode) {
                var p = t.pageChange
                if (p && p.length) {
                  p.sort(function (e, t) {
                    return parseInt(e.time) - parseInt(t.time)
                  })
                  var w = p.pop()
                  _.push(JSON.stringify({
                    fileName: w.docName,
                    totalPage: w.docTotalPage,
                    docid: w.encryptDocId,
                    url: w.url,
                    page: w.pageNum,
                    time: w.time,
                    useSDK: w.useSDK
                  }))
                }
                var g = t.animation
                if (g && g.length) {
                  g.sort(function (e, t) {
                    return parseInt(e.time) - parseInt(t.time)
                  })
                  var v = g.pop()
                  b.push(JSON.stringify({
                    fileName: v.docName,
                    totalPage: v.docTotalPage,
                    docid: v.encryptDocId,
                    url: v.url,
                    page: v.pageNum,
                    time: v.time,
                    step: v.step
                  }))
                }
                var m = t.draw
                if (m && m.length) for (a = 0; a < m.length; a++) y.push(m[a].data)
              }
              T = !0
            }
          }
        }
      })
    }, d = new function (e) {
      this.interaction = new t(e)
    }({interaction: {id: 'interactionPlayer', width: '100%', height: '100%'}})
    window.on_drampanel_ready = function () {
      k.isReady = !0, setTimeout(function () {
        !function o() {
          if (T) {
            if (!I.fastMode && (y.length && (k.draws(y), y = []), _.length)) {
              var e = _.pop()
              if (!e) return
              if (k.filp(e), b.length) {
                var t = b.pop(), i = f(t), n = f(e)
                n.docid == i.docid && n.time <= i.time && k.animationFilp(t)
              }
              _ = []
            }
          } else setTimeout(function () {
            o()
          }, 3e3)
        }()
      }, 1500)
    }, window.on_cc_live_dw_draw = function (t) {
      setTimeout(function () {
        I.draw(t)
      }, e()), setTimeout(function () {
        var e = f(t)
        k.draw(JSON.stringify(e.value.data))
      }, e()), 'isMobile' == L.isMobile() && setTimeout(function () {
        $.DrawingBoard && $.DrawingBoard.db(t)
      }, e())
    }, window.on_cc_live_dw_page_change = function (t) {
      setTimeout(function () {
        I.pageChange(t)
      }, e()), setTimeout(function () {
        var e = f(t)
        k.filp(JSON.stringify(e.value))
      }, e()), 'isMobile' == L.isMobile() && setTimeout(function () {
        $.DrawingBoard && $.DrawingBoard.db(t)
      }, e())
    }, window.on_cc_live_dw_animation_change = function (t) {
      setTimeout(function () {
        I.animationChange(t)
      }, e()), setTimeout(function () {
        var e = f(t)
        k.animationFilp(JSON.stringify(e.value))
      }, e()), 'isMobile' == L.isMobile() && setTimeout(function () {
        $.DrawingBoard && $.DrawingBoard.db(t)
      }, e())
    }
    var C = {
      init: function () {
        M.socket.on('chat_message', function (e) {
          'function' == typeof S.onPublicChatMessage && S.onPublicChatMessage(e)
        }), M.socket.on('chat_log_manage', function (e) {
          'function' == typeof S.onPublicChatLogManage && S.onPublicChatLogManage(e)
        }), M.socket.on('notification', function (e) {
          'function' == typeof S.onNotification && S.onNotification(e)
        }), M.socket.on('information', function (e) {
          'function' == typeof S.onInformation && S.onInformation(e)
        }), M.socket.on('private_chat_self', function (e) {
          'function' == typeof S.onPrivateChatMessage && S.onPrivateChatMessage(e)
        }), M.socket.on('private_chat', function (e) {
          'function' == typeof S.onPrivateAnswer && S.onPrivateAnswer(e)
        }), M.socket.on('room_context', function (e) {
        }), M.socket.on('custom_message', function (e) {
          'function' == typeof S.onCustomChatMessage && S.onCustomChatMessage(e)
        })
      }
    }, R = {
      init: function () {
        M.socket.on('question', function (e) {
          'function' == typeof S.onQuestion && S.onQuestion(e), 'function' == typeof S.onQuestionSend && S.onQuestionSend(e)
        }), M.socket.on('answer', function (e) {
          'function' == typeof S.onAnswer && S.onAnswer(e), 'function' == typeof S.onAnswerSend && S.onAnswerSend(e)
        })
      }
    }, s = {
      addEvents: function (e, t, i) {
        document.addEventListener ? s.addEvents = function (e, t, i) {
          e.addEventListener(t, i, !1)
        } : s.addEvents = function (e, t, i) {
          e.attachEvent('on' + t, function () {
            i.call(e, arguments)
          })
        }, s.addEvents(e, t, i)
      }
    }, L = {
      src: '', audio: !1, line: 0, controls: !0, init: function () {
        var o = this
        $.ajax({
          url: '//zeus.csslcloud.net/api/hls/play',
          type: 'GET',
          dataType: 'json',
          data: {roomid: S.roomid, userid: S.userid},
          success: function (e) {
            if (0 == e.live.status) {
              o.m3u8 = e.live.m3u8, o.src = e.live.m3u8, o.secureHosts = e.live.secureHosts || [], o.audioM3u8 = e.live.audioM3u8 || [], o.audioSecureHosts = e.live.audioSecureHosts || [], o.isHttps = 'https:' === window.location.protocol, a.init(), a.liveId = e.live.liveId, window.liveStart_s && window.liveStart_s(a.liveId), o.isHttps && o.secureHosts && o.secureHosts.length && (o.m3u8 = o.secureHosts), o.appendVideo(o.m3u8[0]), 'function' == typeof S.onLiveStarting && S.onLiveStarting()
              var t = $('#livePlayer>video')[0], i = 0, n = function () {
                3 <= i ? t.removeEventListener('error', n) : (t.removeEventListener('error', n), setTimeout(function () {
                  i++, t.src = t.src, s.addEvents(t, 'error', n, !1)
                }, 1e3))
              }
              s.addEvents(t, 'error', n, !1)
            } else if (S.isBan) return $('#livePlayer').css({
              'text-align': 'center',
              color: 'white',
              'font-size': '18px',
              'line-height': '232px'
            }), void $('#livePlayer').html('<p>直播已封禁，请联系管理员</p>')
          }
        })
      }, appendVideo: function (e) {
        var t = '<video id="player_live" webkit-playsinline x5-video-player-type="h5-page" playsinline controls autoplay x-webkit-airplay="allow" x5-playsinline width="100%" height="100%" src="' + e + '"></video>'
        this.controls || (t = '<video id="player_live" webkit-playsinline x5-video-player-type="h5-page" playsinline autoplay x-webkit-airplay="allow" x5-playsinline width="100%" height="100%" src="' + e + '"></video>'), $('#' + P.id).html(t)
        var i = document.getElementById('player_live')
        S.onPlayerLoad && S.onPlayerLoad(i), S.onKickOut = function () {
          $('#' + P.id).html('')
        }, this.report = new ReportLog(a, 1, 11, i, !0)
      }, showControl: function (e) {
        this.controls = e
      }, ban: function () {
        $('#livePlayer').css({
          'text-align': 'center',
          color: 'white',
          'font-size': '18px',
          'line-height': '232px'
        }), $('#livePlayer').html('<p>直播已封禁，请联系管理员</p>')
      }, unban: function () {
        $('#livePlayer').css({'text-align': '', color: '', 'font-size': '', 'line-height': ''}), this.init()
      }, end: function () {
        $('#' + P.id).html(''), this.report.stopTimer()
      }, appendDoc: function (e) {
        'https:' === window.location.protocol && (e = e.replace(/http:/g, 'https:'))
        var t = '<img src="' + e + '" />'
        $('#' + k.id).html(t)
      }, changeLine: function (e) {
        $('#' + P.id).find('video').attr('src', this.m3u8[e]), this.line = e, L.audio && (audio.src = '', audio.src = this.m3u8[this.line], audio.play())
      }, onlyAudio: function () {
        var e = $('#' + P.id).find('video')
        L.audio = !L.audio, L.audio ? (this.isHttps && this.audioSecureHosts && this.audioSecureHosts.length ? this.m3u8 = this.audioSecureHosts : this.m3u8 = this.audioM3u8, audio = new Audio, audio.src = this.m3u8[this.line], audio.play()) : (this.isHttps && this.secureHosts && this.secureHosts.length ? this.m3u8 = this.secureHosts : this.m3u8 = this.src, audio.src = '', e.attr('src', this.m3u8[this.line]))
      }, isMobile: function () {
        if (this.isIPad() || this.isIPhone() || this.isAndroid() || this.isWindowsPhone()) return 'isMobile'
      }, isIPad: function () {
        return null != navigator.userAgent.match(/iPad/i)
      }, isIPhone: function () {
        return null != navigator.userAgent.match(/iPhone/i)
      }, isAndroid: function () {
        return null != navigator.userAgent.match(/Android/i)
      }, isWindowsPhone: function () {
        return null != navigator.userAgent.match(/Windows Phone/i)
      }
    }
    window.on_cc_live_accept_interaction = function (e) {
      !window.isSpeakThirdParty && d && d.livePlayer && d.livePlayer.closeSound(), d.interaction.clearRequestTimeoutTimer(), window.isSpeakThirdParty && d.interaction.initAgoraRTC(e), S.enterInteractionRoom(), d.interaction.isInteractioning = !0, d.interaction.setCallingTimer(), 'function' == typeof window.on_cc_live_interaction_accept && window.on_cc_live_interaction_accept(d.interaction.local.type, f(e))
    }, window.on_cc_live_interaction_disconnect_self = function (e) {
      if (window.isSpeakThirdParty) {
        d.interaction.leaveAgoraRTC()
        var t = d.interaction.local.type
        'function' == typeof window.on_cc_live_interaction_disconnect && window.on_cc_live_interaction_disconnect(e, t)
      }
      var i = e.disconnectid, n = !!d.interaction.usersPcs[i]
      if (i == S.viewerid || n) {
        if (i != S.viewerid && n && S.hangupInteraction(), d.interaction.clearCallingTimer(), d.interaction.disconnectInteraction(i), i == S.viewerid || 0 == d.interaction.usersPcs.length) {
          d.interaction.stopLocalStream()
          t = d.interaction.local.type
          $('#videoInteractions').empty(), $('#audioInteractions').empty(), $('#interactionLocalVideo')[0] && ($('#interactionLocalVideo')[0].src = ''), t.video && S.livePlayerInit(), window.isSpeakThirdParty || 'function' != typeof window.on_cc_live_interaction_disconnect || window.on_cc_live_interaction_disconnect(e, t)
        }
        window.isRequesting = !1
      }
    }, window.on_cc_live_interaction_remote_media_self = function (e, t, i) {
      if ('function' == typeof window.on_cc_live_interaction_remote_media && window.on_cc_live_interaction_remote_media(e, t, i), window.isRequesting = !1, e.video) {
        $('#livePlayer').replaceWith('<div id="livePlayer"></div>')
        var n = 'interactionRemoteVideo' + t.id
        $('#' + n).length < 1 && ($('#videoInteractions').append('<video cc-data="0" id="' + n + '" style="height: 100%; width: 100%;" autoplay></video>'), $('#' + n)[0].srcObject = i)
      } else {
        n = 'interactionRemoteAudio' + t.id
        $('#' + n).length < 1 && ($('#audioInteractions').append('<audio cc-data="2" id="' + n + '" autoplay controls></audio>'), $('#' + n)[0].srcObject = i)
      }
    }, window.on_cc_live_interaction_chatusers = function (e) {
      e = f(e), $.each(e, function (e, t) {
        return t.id == S.viewerid || ('publisher' == t.role && !t.isMainSpeaker || void d.interaction.createOfferPeerConnection(t))
      })
    }, window.on_cc_live_interaction_message = function (e) {
      e = f(e)
      l('Interaction', 'rtc互动信息:' + JSON.stringify(e))
      var t = e.toid, i = e.fromid, n = e.fromname, o = e.type, a = e.data
      'string' == typeof a && (a = JSON.parse(a))
      var s = e.event
      if ('offer' === s) {
        if (a.type = s, d.interaction.createAnswerPeerConnection({
          id: i,
          name: n,
          type: o
        }), !(r = d.interaction.usersPcs[i].pc)) return
        r.setRemoteDescription(new nativeRTCSessionDescription(a)), r.createAnswer(function () {
        }, function (e) {
          l('Interaction', 'Failure callback: ' + e)
        })
      } else if ('answer' === s) {
        if (!(r = d.interaction.usersPcs[i].pc)) return
        a.type = s, l('Interaction', 'answer spark_message信息:' + a), r.setRemoteDescription(new nativeRTCSessionDescription(a)), r.receivedAnswer = !0, !r.hasAddIce && r.RTCICE && r.addIceCandidate(r.RTCICE)
      } else {
        var r, c = d.interaction.usersPcs[i]
        if (c || (c = d.interaction.usersPcs[t]), !(r = c ? c.pc : null)) return
        var u = new RTCIceCandidate(a)
        r.receivedAnswer ? (r.hasAddIce = !0, r.addIceCandidate(u)) : (r.hasAddIce = !1, r.RTCICE = u)
      }
    }, window.isDebug = !1
    var l = function (e, t) {
      window.isDebug && console && 'function' == typeof console.log && console.log(e, t)
    }

    function f(e) {
      if ('string' == typeof e) try {
        return JSON.parse(e)
      } catch (t) {
        return {}
      }
      return e
    }

    function e() {
      var e = P.delay
      return (isNaN(e) || e < 0) && (e = 0), e *= 1e3, 'isMobile' == L.isMobile() ? 0 === e ? 5e3 : 1e4 : 0 === e ? 1300 : 3e3
    }

    function n() {
      var e = P.delay
      return (isNaN(e) || e < 0) && (e = 0), 'isMobile' == L.isMobile() ? 0 === e ? 5e3 : 1e4 : 0 === e ? 1300 : 3e3
    }

    window.DWLive = S, window.live = d, S.isSupportInteraction = window.live.interaction.isSupportInteraction, window.onunload = function () {
      window.live.interaction.hangupInteraction()
    }, window.onbeforeunload = function () {
      window.live.interaction.hangupInteraction()
    }, window._swfInit = function () {
      'function' == typeof window.on_cc_live_player_ready && window.on_cc_live_player_ready()
    }, window._swfOk = function (e) {
      'function' == typeof window.on_cc_swf_loading_completed && window.on_cc_swf_loading_completed(e)
    }
  }(window)
}])