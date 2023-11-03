import { c as De, g as Ie } from "./storybook-c5d32002.es.js";
var Oe = function() {
  if (typeof Map < "u")
    return Map;
  function r(n, o) {
    var s = -1;
    return n.some(function(_, k) {
      return _[0] === o ? (s = k, !0) : !1;
    }), s;
  }
  return (
    /** @class */
    function() {
      function n() {
        this.__entries__ = [];
      }
      return Object.defineProperty(n.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), n.prototype.get = function(o) {
        var s = r(this.__entries__, o), _ = this.__entries__[s];
        return _ && _[1];
      }, n.prototype.set = function(o, s) {
        var _ = r(this.__entries__, o);
        ~_ ? this.__entries__[_][1] = s : this.__entries__.push([o, s]);
      }, n.prototype.delete = function(o) {
        var s = this.__entries__, _ = r(s, o);
        ~_ && s.splice(_, 1);
      }, n.prototype.has = function(o) {
        return !!~r(this.__entries__, o);
      }, n.prototype.clear = function() {
        this.__entries__.splice(0);
      }, n.prototype.forEach = function(o, s) {
        s === void 0 && (s = null);
        for (var _ = 0, k = this.__entries__; _ < k.length; _++) {
          var I = k[_];
          o.call(s, I[1], I[0]);
        }
      }, n;
    }()
  );
}(), me = typeof window < "u" && typeof document < "u" && window.document === document, de = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Me = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(de) : function(r) {
    return setTimeout(function() {
      return r(Date.now());
    }, 1e3 / 60);
  };
}(), Le = 2;
function ze(r, n) {
  var o = !1, s = !1, _ = 0;
  function k() {
    o && (o = !1, r()), s && Q();
  }
  function I() {
    Me(k);
  }
  function Q() {
    var c = Date.now();
    if (o) {
      if (c - _ < Le)
        return;
      s = !0;
    } else
      o = !0, s = !1, setTimeout(I, n);
    _ = c;
  }
  return Q;
}
var Fe = 20, Pe = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], qe = typeof MutationObserver < "u", Ue = (
  /** @class */
  function() {
    function r() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = ze(this.refresh.bind(this), Fe);
    }
    return r.prototype.addObserver = function(n) {
      ~this.observers_.indexOf(n) || this.observers_.push(n), this.connected_ || this.connect_();
    }, r.prototype.removeObserver = function(n) {
      var o = this.observers_, s = o.indexOf(n);
      ~s && o.splice(s, 1), !o.length && this.connected_ && this.disconnect_();
    }, r.prototype.refresh = function() {
      var n = this.updateObservers_();
      n && this.refresh();
    }, r.prototype.updateObservers_ = function() {
      var n = this.observers_.filter(function(o) {
        return o.gatherActive(), o.hasActive();
      });
      return n.forEach(function(o) {
        return o.broadcastActive();
      }), n.length > 0;
    }, r.prototype.connect_ = function() {
      !me || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), qe ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, r.prototype.disconnect_ = function() {
      !me || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, r.prototype.onTransitionEnd_ = function(n) {
      var o = n.propertyName, s = o === void 0 ? "" : o, _ = Pe.some(function(k) {
        return !!~s.indexOf(k);
      });
      _ && this.refresh();
    }, r.getInstance = function() {
      return this.instance_ || (this.instance_ = new r()), this.instance_;
    }, r.instance_ = null, r;
  }()
), Re = function(r, n) {
  for (var o = 0, s = Object.keys(n); o < s.length; o++) {
    var _ = s[o];
    Object.defineProperty(r, _, {
      value: n[_],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return r;
}, se = function(r) {
  var n = r && r.ownerDocument && r.ownerDocument.defaultView;
  return n || de;
}, Ce = pe(0, 0, 0, 0);
function le(r) {
  return parseFloat(r) || 0;
}
function ke(r) {
  for (var n = [], o = 1; o < arguments.length; o++)
    n[o - 1] = arguments[o];
  return n.reduce(function(s, _) {
    var k = r["border-" + _ + "-width"];
    return s + le(k);
  }, 0);
}
function We(r) {
  for (var n = ["top", "right", "bottom", "left"], o = {}, s = 0, _ = n; s < _.length; s++) {
    var k = _[s], I = r["padding-" + k];
    o[k] = le(I);
  }
  return o;
}
function je(r) {
  var n = r.getBBox();
  return pe(0, 0, n.width, n.height);
}
function Be(r) {
  var n = r.clientWidth, o = r.clientHeight;
  if (!n && !o)
    return Ce;
  var s = se(r).getComputedStyle(r), _ = We(s), k = _.left + _.right, I = _.top + _.bottom, Q = le(s.width), c = le(s.height);
  if (s.boxSizing === "border-box" && (Math.round(Q + k) !== n && (Q -= ke(s, "left", "right") + k), Math.round(c + I) !== o && (c -= ke(s, "top", "bottom") + I)), !Ne(r)) {
    var Y = Math.round(Q + k) - n, W = Math.round(c + I) - o;
    Math.abs(Y) !== 1 && (Q -= Y), Math.abs(W) !== 1 && (c -= W);
  }
  return pe(_.left, _.top, Q, c);
}
var He = function() {
  return typeof SVGGraphicsElement < "u" ? function(r) {
    return r instanceof se(r).SVGGraphicsElement;
  } : function(r) {
    return r instanceof se(r).SVGElement && typeof r.getBBox == "function";
  };
}();
function Ne(r) {
  return r === se(r).document.documentElement;
}
function Ke(r) {
  return me ? He(r) ? je(r) : Be(r) : Ce;
}
function Ge(r) {
  var n = r.x, o = r.y, s = r.width, _ = r.height, k = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, I = Object.create(k.prototype);
  return Re(I, {
    x: n,
    y: o,
    width: s,
    height: _,
    top: o,
    right: n + s,
    bottom: _ + o,
    left: n
  }), I;
}
function pe(r, n, o, s) {
  return { x: r, y: n, width: o, height: s };
}
var Qe = (
  /** @class */
  function() {
    function r(n) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = pe(0, 0, 0, 0), this.target = n;
    }
    return r.prototype.isActive = function() {
      var n = Ke(this.target);
      return this.contentRect_ = n, n.width !== this.broadcastWidth || n.height !== this.broadcastHeight;
    }, r.prototype.broadcastRect = function() {
      var n = this.contentRect_;
      return this.broadcastWidth = n.width, this.broadcastHeight = n.height, n;
    }, r;
  }()
), Ve = (
  /** @class */
  function() {
    function r(n, o) {
      var s = Ge(o);
      Re(this, { target: n, contentRect: s });
    }
    return r;
  }()
), $e = (
  /** @class */
  function() {
    function r(n, o, s) {
      if (this.activeObservations_ = [], this.observations_ = new Oe(), typeof n != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = n, this.controller_ = o, this.callbackCtx_ = s;
    }
    return r.prototype.observe = function(n) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(n instanceof se(n).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var o = this.observations_;
        o.has(n) || (o.set(n, new Qe(n)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, r.prototype.unobserve = function(n) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(n instanceof se(n).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var o = this.observations_;
        o.has(n) && (o.delete(n), o.size || this.controller_.removeObserver(this));
      }
    }, r.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, r.prototype.gatherActive = function() {
      var n = this;
      this.clearActive(), this.observations_.forEach(function(o) {
        o.isActive() && n.activeObservations_.push(o);
      });
    }, r.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var n = this.callbackCtx_, o = this.activeObservations_.map(function(s) {
          return new Ve(s.target, s.broadcastRect());
        });
        this.callback_.call(n, o, n), this.clearActive();
      }
    }, r.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, r.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, r;
  }()
), xe = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Oe(), Ae = (
  /** @class */
  function() {
    function r(n) {
      if (!(this instanceof r))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var o = Ue.getInstance(), s = new $e(n, o, this);
      xe.set(this, s);
    }
    return r;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(r) {
  Ae.prototype[r] = function() {
    var n;
    return (n = xe.get(this))[r].apply(n, arguments);
  };
});
var Ze = function() {
  return typeof de.ResizeObserver < "u" ? de.ResizeObserver : Ae;
}();
function Xe(r) {
  let n = "lg";
  const o = {
    lg: 1200,
    md: 992,
    sm: 768,
    xs: 576,
    xxs: 350
  };
  if (r > 1200)
    return n;
  for (let s in o)
    r <= o[s] && (n = s);
  return n;
}
var Te = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(r, n) {
  (function(o, s) {
    r.exports = s();
  })(De, function o() {
    var s = typeof self < "u" ? self : typeof window < "u" ? window : s !== void 0 ? s : {}, _ = !s.document && !!s.postMessage, k = s.IS_PAPA_WORKER || !1, I = {}, Q = 0, c = { parse: function(t, e) {
      var i = (e = e || {}).dynamicTyping || !1;
      if (y(i) && (e.dynamicTypingFunction = i, i = {}), e.dynamicTyping = i, e.transform = !!y(e.transform) && e.transform, e.worker && c.WORKERS_SUPPORTED) {
        var a = function() {
          if (!c.WORKERS_SUPPORTED)
            return !1;
          var p = (z = s.URL || s.webkitURL || null, C = o.toString(), c.BLOB_URL || (c.BLOB_URL = z.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", C, ")();"], { type: "text/javascript" })))), v = new s.Worker(p), z, C;
          return v.onmessage = Se, v.id = Q++, I[v.id] = v;
        }();
        return a.userStep = e.step, a.userChunk = e.chunk, a.userComplete = e.complete, a.userError = e.error, e.step = y(e.step), e.chunk = y(e.chunk), e.complete = y(e.complete), e.error = y(e.error), delete e.worker, void a.postMessage({ input: t, config: e, workerId: a.id });
      }
      var h = null;
      return c.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(p) {
        return p.charCodeAt(0) === 65279 ? p.slice(1) : p;
      }(t), h = e.download ? new ue(e) : new oe(e)) : t.readable === !0 && y(t.read) && y(t.on) ? h = new fe(e) : (s.File && t instanceof File || t instanceof Object) && (h = new he(e)), h.stream(t);
    }, unparse: function(t, e) {
      var i = !1, a = !0, h = ",", p = `\r
`, v = '"', z = v + v, C = !1, f = null, A = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || c.BAD_DELIMITERS.filter(function(u) {
            return e.delimiter.indexOf(u) !== -1;
          }).length || (h = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (i = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (C = e.skipEmptyLines), typeof e.newline == "string" && (p = e.newline), typeof e.quoteChar == "string" && (v = e.quoteChar), typeof e.header == "boolean" && (a = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0)
              throw new Error("Option columns is empty");
            f = e.columns;
          }
          e.escapeChar !== void 0 && (z = e.escapeChar + v), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (A = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var l = new RegExp(ae(v), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0]))
          return K(null, t, C);
        if (typeof t[0] == "object")
          return K(f || Object.keys(t[0]), t, C);
      } else if (typeof t == "object")
        return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || f), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), K(t.fields || [], t.data || [], C);
      throw new Error("Unable to serialize unrecognized input");
      function K(u, E, q) {
        var x = "";
        typeof u == "string" && (u = JSON.parse(u)), typeof E == "string" && (E = JSON.parse(E));
        var F = Array.isArray(u) && 0 < u.length, M = !Array.isArray(E[0]);
        if (F && a) {
          for (var L = 0; L < u.length; L++)
            0 < L && (x += h), x += P(u[L], L);
          0 < E.length && (x += p);
        }
        for (var d = 0; d < E.length; d++) {
          var g = F ? u.length : E[d].length, O = !1, D = F ? Object.keys(E[d]).length === 0 : E[d].length === 0;
          if (q && !F && (O = q === "greedy" ? E[d].join("").trim() === "" : E[d].length === 1 && E[d][0].length === 0), q === "greedy" && F) {
            for (var b = [], U = 0; U < g; U++) {
              var T = M ? u[U] : U;
              b.push(E[d][T]);
            }
            O = b.join("").trim() === "";
          }
          if (!O) {
            for (var w = 0; w < g; w++) {
              0 < w && !D && (x += h);
              var G = F && M ? u[w] : w;
              x += P(E[d][G], w);
            }
            d < E.length - 1 && (!q || 0 < g && !D) && (x += p);
          }
        }
        return x;
      }
      function P(u, E) {
        if (u == null)
          return "";
        if (u.constructor === Date)
          return JSON.stringify(u).slice(1, 25);
        var q = !1;
        A && typeof u == "string" && A.test(u) && (u = "'" + u, q = !0);
        var x = u.toString().replace(l, z);
        return (q = q || i === !0 || typeof i == "function" && i(u, E) || Array.isArray(i) && i[E] || function(F, M) {
          for (var L = 0; L < M.length; L++)
            if (-1 < F.indexOf(M[L]))
              return !0;
          return !1;
        }(x, c.BAD_DELIMITERS) || -1 < x.indexOf(h) || x.charAt(0) === " " || x.charAt(x.length - 1) === " ") ? v + x + v : x;
      }
    } };
    if (c.RECORD_SEP = String.fromCharCode(30), c.UNIT_SEP = String.fromCharCode(31), c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !_ && !!s.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = _e, c.ParserHandle = ye, c.NetworkStreamer = ue, c.FileStreamer = he, c.StringStreamer = oe, c.ReadableStreamStreamer = fe, s.jQuery) {
      var Y = s.jQuery;
      Y.fn.parse = function(t) {
        var e = t.config || {}, i = [];
        return this.each(function(p) {
          if (!(Y(this).prop("tagName").toUpperCase() === "INPUT" && Y(this).attr("type").toLowerCase() === "file" && s.FileReader) || !this.files || this.files.length === 0)
            return !0;
          for (var v = 0; v < this.files.length; v++)
            i.push({ file: this.files[v], inputElem: this, instanceConfig: Y.extend({}, e) });
        }), a(), this;
        function a() {
          if (i.length !== 0) {
            var p, v, z, C, f = i[0];
            if (y(t.before)) {
              var A = t.before(f.file, f.inputElem);
              if (typeof A == "object") {
                if (A.action === "abort")
                  return p = "AbortError", v = f.file, z = f.inputElem, C = A.reason, void (y(t.error) && t.error({ name: p }, v, z, C));
                if (A.action === "skip")
                  return void h();
                typeof A.config == "object" && (f.instanceConfig = Y.extend(f.instanceConfig, A.config));
              } else if (A === "skip")
                return void h();
            }
            var l = f.instanceConfig.complete;
            f.instanceConfig.complete = function(K) {
              y(l) && l(K, f.file, f.inputElem), h();
            }, c.parse(f.file, f.instanceConfig);
          } else
            y(t.complete) && t.complete();
        }
        function h() {
          i.splice(0, 1), a();
        }
      };
    }
    function W(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(e) {
        var i = ve(e);
        i.chunkSize = parseInt(i.chunkSize), e.step || e.chunk || (i.chunkSize = null), this._handle = new ye(i), (this._handle.streamer = this)._config = i;
      }).call(this, t), this.parseChunk = function(e, i) {
        if (this.isFirstChunk && y(this._config.beforeFirstChunk)) {
          var a = this._config.beforeFirstChunk(e);
          a !== void 0 && (e = a);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var h = this._partialLine + e;
        this._partialLine = "";
        var p = this._handle.parse(h, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var v = p.meta.cursor;
          this._finished || (this._partialLine = h.substring(v - this._baseIndex), this._baseIndex = v), p && p.data && (this._rowCount += p.data.length);
          var z = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (k)
            s.postMessage({ results: p, workerId: c.WORKER_ID, finished: z });
          else if (y(this._config.chunk) && !i) {
            if (this._config.chunk(p, this._handle), this._handle.paused() || this._handle.aborted())
              return void (this._halted = !0);
            p = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(p.data), this._completeResults.errors = this._completeResults.errors.concat(p.errors), this._completeResults.meta = p.meta), this._completed || !z || !y(this._config.complete) || p && p.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), z || p && p.meta.paused || this._nextChunk(), p;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        y(this._config.error) ? this._config.error(e) : k && this._config.error && s.postMessage({ workerId: c.WORKER_ID, error: e, finished: !1 });
      };
    }
    function ue(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = c.RemoteChunkSize), W.call(this, t), this._nextChunk = _ ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(i) {
        this._input = i, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished)
          this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), _ || (e.onload = Z(this._chunkLoaded, this), e.onerror = Z(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !_), this._config.downloadRequestHeaders) {
            var i = this._config.downloadRequestHeaders;
            for (var a in i)
              e.setRequestHeader(a, i[a]);
          }
          if (this._config.chunkSize) {
            var h = this._start + this._config.chunkSize - 1;
            e.setRequestHeader("Range", "bytes=" + this._start + "-" + h);
          }
          try {
            e.send(this._config.downloadRequestBody);
          } catch (p) {
            this._chunkError(p.message);
          }
          _ && e.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(i) {
          var a = i.getResponseHeader("Content-Range");
          return a === null ? -1 : parseInt(a.substring(a.lastIndexOf("/") + 1));
        }(e), this.parseChunk(e.responseText)));
      }, this._chunkError = function(i) {
        var a = e.statusText || i;
        this._sendError(new Error(a));
      };
    }
    function he(t) {
      var e, i;
      (t = t || {}).chunkSize || (t.chunkSize = c.LocalChunkSize), W.call(this, t);
      var a = typeof FileReader < "u";
      this.stream = function(h) {
        this._input = h, i = h.slice || h.webkitSlice || h.mozSlice, a ? ((e = new FileReader()).onload = Z(this._chunkLoaded, this), e.onerror = Z(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var h = this._input;
        if (this._config.chunkSize) {
          var p = Math.min(this._start + this._config.chunkSize, this._input.size);
          h = i.call(h, this._start, p);
        }
        var v = e.readAsText(h, this._config.encoding);
        a || this._chunkLoaded({ target: { result: v } });
      }, this._chunkLoaded = function(h) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(h.target.result);
      }, this._chunkError = function() {
        this._sendError(e.error);
      };
    }
    function oe(t) {
      var e;
      W.call(this, t = t || {}), this.stream = function(i) {
        return e = i, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var i, a = this._config.chunkSize;
          return a ? (i = e.substring(0, a), e = e.substring(a)) : (i = e, e = ""), this._finished = !e, this.parseChunk(i);
        }
      };
    }
    function fe(t) {
      W.call(this, t = t || {});
      var e = [], i = !0, a = !1;
      this.pause = function() {
        W.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        W.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(h) {
        this._input = h, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        a && e.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : i = !0;
      }, this._streamData = Z(function(h) {
        try {
          e.push(typeof h == "string" ? h : h.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
        } catch (p) {
          this._streamError(p);
        }
      }, this), this._streamError = Z(function(h) {
        this._streamCleanUp(), this._sendError(h);
      }, this), this._streamEnd = Z(function() {
        this._streamCleanUp(), a = !0, this._streamData("");
      }, this), this._streamCleanUp = Z(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function ye(t) {
      var e, i, a, h = Math.pow(2, 53), p = -h, v = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, z = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, C = this, f = 0, A = 0, l = !1, K = !1, P = [], u = { data: [], errors: [], meta: {} };
      if (y(t.step)) {
        var E = t.step;
        t.step = function(d) {
          if (u = d, F())
            x();
          else {
            if (x(), u.data.length === 0)
              return;
            f += d.data.length, t.preview && f > t.preview ? i.abort() : (u.data = u.data[0], E(u, C));
          }
        };
      }
      function q(d) {
        return t.skipEmptyLines === "greedy" ? d.join("").trim() === "" : d.length === 1 && d[0].length === 0;
      }
      function x() {
        return u && a && (L("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), a = !1), t.skipEmptyLines && (u.data = u.data.filter(function(d) {
          return !q(d);
        })), F() && function() {
          if (!u)
            return;
          function d(O, D) {
            y(t.transformHeader) && (O = t.transformHeader(O, D)), P.push(O);
          }
          if (Array.isArray(u.data[0])) {
            for (var g = 0; F() && g < u.data.length; g++)
              u.data[g].forEach(d);
            u.data.splice(0, 1);
          } else
            u.data.forEach(d);
        }(), function() {
          if (!u || !t.header && !t.dynamicTyping && !t.transform)
            return u;
          function d(O, D) {
            var b, U = t.header ? {} : [];
            for (b = 0; b < O.length; b++) {
              var T = b, w = O[b];
              t.header && (T = b >= P.length ? "__parsed_extra" : P[b]), t.transform && (w = t.transform(w, T)), w = M(T, w), T === "__parsed_extra" ? (U[T] = U[T] || [], U[T].push(w)) : U[T] = w;
            }
            return t.header && (b > P.length ? L("FieldMismatch", "TooManyFields", "Too many fields: expected " + P.length + " fields but parsed " + b, A + D) : b < P.length && L("FieldMismatch", "TooFewFields", "Too few fields: expected " + P.length + " fields but parsed " + b, A + D)), U;
          }
          var g = 1;
          return !u.data.length || Array.isArray(u.data[0]) ? (u.data = u.data.map(d), g = u.data.length) : u.data = d(u.data, 0), t.header && u.meta && (u.meta.fields = P), A += g, u;
        }();
      }
      function F() {
        return t.header && P.length === 0;
      }
      function M(d, g) {
        return O = d, t.dynamicTypingFunction && t.dynamicTyping[O] === void 0 && (t.dynamicTyping[O] = t.dynamicTypingFunction(O)), (t.dynamicTyping[O] || t.dynamicTyping) === !0 ? g === "true" || g === "TRUE" || g !== "false" && g !== "FALSE" && (function(D) {
          if (v.test(D)) {
            var b = parseFloat(D);
            if (p < b && b < h)
              return !0;
          }
          return !1;
        }(g) ? parseFloat(g) : z.test(g) ? new Date(g) : g === "" ? null : g) : g;
        var O;
      }
      function L(d, g, O, D) {
        var b = { type: d, code: g, message: O };
        D !== void 0 && (b.row = D), u.errors.push(b);
      }
      this.parse = function(d, g, O) {
        var D = t.quoteChar || '"';
        if (t.newline || (t.newline = function(T, w) {
          T = T.substring(0, 1048576);
          var G = new RegExp(ae(w) + "([^]*?)" + ae(w), "gm"), j = (T = T.replace(G, "")).split("\r"), V = T.split(`
`), $ = 1 < V.length && V[0].length < j[0].length;
          if (j.length === 1 || $)
            return `
`;
          for (var B = 0, R = 0; R < j.length; R++)
            j[R][0] === `
` && B++;
          return B >= j.length / 2 ? `\r
` : "\r";
        }(d, D)), a = !1, t.delimiter)
          y(t.delimiter) && (t.delimiter = t.delimiter(d), u.meta.delimiter = t.delimiter);
        else {
          var b = function(T, w, G, j, V) {
            var $, B, R, S;
            V = V || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var re = 0; re < V.length; re++) {
              var m = V[re], ie = 0, J = 0, ne = 0;
              R = void 0;
              for (var X = new _e({ comments: j, delimiter: m, newline: w, preview: 10 }).parse(T), ee = 0; ee < X.data.length; ee++)
                if (G && q(X.data[ee]))
                  ne++;
                else {
                  var te = X.data[ee].length;
                  J += te, R !== void 0 ? 0 < te && (ie += Math.abs(te - R), R = te) : R = te;
                }
              0 < X.data.length && (J /= X.data.length - ne), (B === void 0 || ie <= B) && (S === void 0 || S < J) && 1.99 < J && (B = ie, $ = m, S = J);
            }
            return { successful: !!(t.delimiter = $), bestDelimiter: $ };
          }(d, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          b.successful ? t.delimiter = b.bestDelimiter : (a = !0, t.delimiter = c.DefaultDelimiter), u.meta.delimiter = t.delimiter;
        }
        var U = ve(t);
        return t.preview && t.header && U.preview++, e = d, i = new _e(U), u = i.parse(e, g, O), x(), l ? { meta: { paused: !0 } } : u || { meta: { paused: !1 } };
      }, this.paused = function() {
        return l;
      }, this.pause = function() {
        l = !0, i.abort(), e = y(t.chunk) ? "" : e.substring(i.getCharIndex());
      }, this.resume = function() {
        C.streamer._halted ? (l = !1, C.streamer.parseChunk(e, !0)) : setTimeout(C.resume, 3);
      }, this.aborted = function() {
        return K;
      }, this.abort = function() {
        K = !0, i.abort(), u.meta.aborted = !0, y(t.complete) && t.complete(u), e = "";
      };
    }
    function ae(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function _e(t) {
      var e, i = (t = t || {}).delimiter, a = t.newline, h = t.comments, p = t.step, v = t.preview, z = t.fastMode, C = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (C = t.escapeChar), (typeof i != "string" || -1 < c.BAD_DELIMITERS.indexOf(i)) && (i = ","), h === i)
        throw new Error("Comment character same as delimiter");
      h === !0 ? h = "#" : (typeof h != "string" || -1 < c.BAD_DELIMITERS.indexOf(h)) && (h = !1), a !== `
` && a !== "\r" && a !== `\r
` && (a = `
`);
      var f = 0, A = !1;
      this.parse = function(l, K, P) {
        if (typeof l != "string")
          throw new Error("Input must be a string");
        var u = l.length, E = i.length, q = a.length, x = h.length, F = y(p), M = [], L = [], d = [], g = f = 0;
        if (!l)
          return H();
        if (t.header && !K) {
          var O = l.split(a)[0].split(i), D = [], b = {}, U = !1;
          for (var T in O) {
            var w = O[T];
            y(t.transformHeader) && (w = t.transformHeader(w, T));
            var G = w, j = b[w] || 0;
            for (0 < j && (U = !0, G = w + "_" + j), b[w] = j + 1; D.includes(G); )
              G = G + "_" + j;
            D.push(G);
          }
          if (U) {
            var V = l.split(a);
            V[0] = D.join(i), l = V.join(a);
          }
        }
        if (z || z !== !1 && l.indexOf(e) === -1) {
          for (var $ = l.split(a), B = 0; B < $.length; B++) {
            if (d = $[B], f += d.length, B !== $.length - 1)
              f += a.length;
            else if (P)
              return H();
            if (!h || d.substring(0, x) !== h) {
              if (F) {
                if (M = [], ne(d.split(i)), ce(), A)
                  return H();
              } else
                ne(d.split(i));
              if (v && v <= B)
                return M = M.slice(0, v), H(!0);
            }
          }
          return H();
        }
        for (var R = l.indexOf(i, f), S = l.indexOf(a, f), re = new RegExp(ae(C) + ae(e), "g"), m = l.indexOf(e, f); ; )
          if (l[f] !== e)
            if (h && d.length === 0 && l.substring(f, f + x) === h) {
              if (S === -1)
                return H();
              f = S + q, S = l.indexOf(a, f), R = l.indexOf(i, f);
            } else if (R !== -1 && (R < S || S === -1))
              d.push(l.substring(f, R)), f = R + E, R = l.indexOf(i, f);
            else {
              if (S === -1)
                break;
              if (d.push(l.substring(f, S)), te(S + q), F && (ce(), A))
                return H();
              if (v && M.length >= v)
                return H(!0);
            }
          else
            for (m = f, f++; ; ) {
              if ((m = l.indexOf(e, m + 1)) === -1)
                return P || L.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: M.length, index: f }), ee();
              if (m === u - 1)
                return ee(l.substring(f, m).replace(re, e));
              if (e !== C || l[m + 1] !== C) {
                if (e === C || m === 0 || l[m - 1] !== C) {
                  R !== -1 && R < m + 1 && (R = l.indexOf(i, m + 1)), S !== -1 && S < m + 1 && (S = l.indexOf(a, m + 1));
                  var ie = X(S === -1 ? R : Math.min(R, S));
                  if (l.substr(m + 1 + ie, E) === i) {
                    d.push(l.substring(f, m).replace(re, e)), l[f = m + 1 + ie + E] !== e && (m = l.indexOf(e, f)), R = l.indexOf(i, f), S = l.indexOf(a, f);
                    break;
                  }
                  var J = X(S);
                  if (l.substring(m + 1 + J, m + 1 + J + q) === a) {
                    if (d.push(l.substring(f, m).replace(re, e)), te(m + 1 + J + q), R = l.indexOf(i, f), m = l.indexOf(e, f), F && (ce(), A))
                      return H();
                    if (v && M.length >= v)
                      return H(!0);
                    break;
                  }
                  L.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: M.length, index: f }), m++;
                }
              } else
                m++;
            }
        return ee();
        function ne(N) {
          M.push(N), g = f;
        }
        function X(N) {
          var Ee = 0;
          if (N !== -1) {
            var ge = l.substring(m + 1, N);
            ge && ge.trim() === "" && (Ee = ge.length);
          }
          return Ee;
        }
        function ee(N) {
          return P || (N === void 0 && (N = l.substring(f)), d.push(N), f = u, ne(d), F && ce()), H();
        }
        function te(N) {
          f = N, ne(d), d = [], S = l.indexOf(a, f);
        }
        function H(N) {
          return { data: M, errors: L, meta: { delimiter: i, linebreak: a, aborted: A, truncated: !!N, cursor: g + (K || 0) } };
        }
        function ce() {
          p(H()), M = [], L = [];
        }
      }, this.abort = function() {
        A = !0;
      }, this.getCharIndex = function() {
        return f;
      };
    }
    function Se(t) {
      var e = t.data, i = I[e.workerId], a = !1;
      if (e.error)
        i.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var h = { abort: function() {
          a = !0, be(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: we, resume: we };
        if (y(i.userStep)) {
          for (var p = 0; p < e.results.data.length && (i.userStep({ data: e.results.data[p], errors: e.results.errors, meta: e.results.meta }, h), !a); p++)
            ;
          delete e.results;
        } else
          y(i.userChunk) && (i.userChunk(e.results, h, e.file), delete e.results);
      }
      e.finished && !a && be(e.workerId, e.results);
    }
    function be(t, e) {
      var i = I[t];
      y(i.userComplete) && i.userComplete(e), i.terminate(), delete I[t];
    }
    function we() {
      throw new Error("Not implemented.");
    }
    function ve(t) {
      if (typeof t != "object" || t === null)
        return t;
      var e = Array.isArray(t) ? [] : {};
      for (var i in t)
        e[i] = ve(t[i]);
      return e;
    }
    function Z(t, e) {
      return function() {
        t.apply(e, arguments);
      };
    }
    function y(t) {
      return typeof t == "function";
    }
    return k && (s.onmessage = function(t) {
      var e = t.data;
      if (c.WORKER_ID === void 0 && e && (c.WORKER_ID = e.workerId), typeof e.input == "string")
        s.postMessage({ workerId: c.WORKER_ID, results: c.parse(e.input, e.config), finished: !0 });
      else if (s.File && e.input instanceof File || e.input instanceof Object) {
        var i = c.parse(e.input, e.config);
        i && s.postMessage({ workerId: c.WORKER_ID, results: i, finished: !0 });
      }
    }), (ue.prototype = Object.create(W.prototype)).constructor = ue, (he.prototype = Object.create(W.prototype)).constructor = he, (oe.prototype = Object.create(oe.prototype)).constructor = oe, (fe.prototype = Object.create(W.prototype)).constructor = fe, c;
  });
})(Te);
var Je = Te.exports;
const et = /* @__PURE__ */ Ie(Je);
export {
  et as P,
  Xe as g,
  Ze as i
};
