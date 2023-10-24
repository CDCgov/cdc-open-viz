import { c as Se, g as Ie } from "./storybook-c5d32002.es.js";
var Oe = function() {
  if (typeof Map < "u")
    return Map;
  function r(n, o) {
    var s = -1;
    return n.some(function(p, g) {
      return p[0] === o ? (s = g, !0) : !1;
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
        var s = r(this.__entries__, o), p = this.__entries__[s];
        return p && p[1];
      }, n.prototype.set = function(o, s) {
        var p = r(this.__entries__, o);
        ~p ? this.__entries__[p][1] = s : this.__entries__.push([o, s]);
      }, n.prototype.delete = function(o) {
        var s = this.__entries__, p = r(s, o);
        ~p && s.splice(p, 1);
      }, n.prototype.has = function(o) {
        return !!~r(this.__entries__, o);
      }, n.prototype.clear = function() {
        this.__entries__.splice(0);
      }, n.prototype.forEach = function(o, s) {
        s === void 0 && (s = null);
        for (var p = 0, g = this.__entries__; p < g.length; p++) {
          var S = g[p];
          o.call(s, S[1], S[0]);
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
  var o = !1, s = !1, p = 0;
  function g() {
    o && (o = !1, r()), s && j();
  }
  function S() {
    Me(g);
  }
  function j() {
    var c = Date.now();
    if (o) {
      if (c - p < Le)
        return;
      s = !0;
    } else
      o = !0, s = !1, setTimeout(S, n);
    p = c;
  }
  return j;
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
      var o = n.propertyName, s = o === void 0 ? "" : o, p = Pe.some(function(g) {
        return !!~s.indexOf(g);
      });
      p && this.refresh();
    }, r.getInstance = function() {
      return this.instance_ || (this.instance_ = new r()), this.instance_;
    }, r.instance_ = null, r;
  }()
), Re = function(r, n) {
  for (var o = 0, s = Object.keys(n); o < s.length; o++) {
    var p = s[o];
    Object.defineProperty(r, p, {
      value: n[p],
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
  return n.reduce(function(s, p) {
    var g = r["border-" + p + "-width"];
    return s + le(g);
  }, 0);
}
function je(r) {
  for (var n = ["top", "right", "bottom", "left"], o = {}, s = 0, p = n; s < p.length; s++) {
    var g = p[s], S = r["padding-" + g];
    o[g] = le(S);
  }
  return o;
}
function We(r) {
  var n = r.getBBox();
  return pe(0, 0, n.width, n.height);
}
function Be(r) {
  var n = r.clientWidth, o = r.clientHeight;
  if (!n && !o)
    return Ce;
  var s = se(r).getComputedStyle(r), p = je(s), g = p.left + p.right, S = p.top + p.bottom, j = le(s.width), c = le(s.height);
  if (s.boxSizing === "border-box" && (Math.round(j + g) !== n && (j -= ke(s, "left", "right") + g), Math.round(c + S) !== o && (c -= ke(s, "top", "bottom") + S)), !Ne(r)) {
    var Y = Math.round(j + g) - n, W = Math.round(c + S) - o;
    Math.abs(Y) !== 1 && (j -= Y), Math.abs(W) !== 1 && (c -= W);
  }
  return pe(p.left, p.top, j, c);
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
  return me ? He(r) ? We(r) : Be(r) : Ce;
}
function Ge(r) {
  var n = r.x, o = r.y, s = r.width, p = r.height, g = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, S = Object.create(g.prototype);
  return Re(S, {
    x: n,
    y: o,
    width: s,
    height: p,
    top: o,
    right: n + s,
    bottom: p + o,
    left: n
  }), S;
}
function pe(r, n, o, s) {
  return { x: r, y: n, width: o, height: s };
}
var $e = (
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
), Qe = (
  /** @class */
  function() {
    function r(n, o) {
      var s = Ge(o);
      Re(this, { target: n, contentRect: s });
    }
    return r;
  }()
), Ve = (
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
        o.has(n) || (o.set(n, new $e(n)), this.controller_.addObserver(this), this.controller_.refresh());
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
          return new Qe(s.target, s.broadcastRect());
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
      var o = Ue.getInstance(), s = new Ve(n, o, this);
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
var Xe = function() {
  return typeof de.ResizeObserver < "u" ? de.ResizeObserver : Ae;
}(), Te = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(r, n) {
  (function(o, s) {
    r.exports = s();
  })(Se, function o() {
    var s = typeof self < "u" ? self : typeof window < "u" ? window : s !== void 0 ? s : {}, p = !s.document && !!s.postMessage, g = s.IS_PAPA_WORKER || !1, S = {}, j = 0, c = { parse: function(t, e) {
      var i = (e = e || {}).dynamicTyping || !1;
      if (b(i) && (e.dynamicTypingFunction = i, i = {}), e.dynamicTyping = i, e.transform = !!b(e.transform) && e.transform, e.worker && c.WORKERS_SUPPORTED) {
        var a = function() {
          if (!c.WORKERS_SUPPORTED)
            return !1;
          var v = (z = s.URL || s.webkitURL || null, C = o.toString(), c.BLOB_URL || (c.BLOB_URL = z.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", C, ")();"], { type: "text/javascript" })))), _ = new s.Worker(v), z, C;
          return _.onmessage = De, _.id = j++, S[_.id] = _;
        }();
        return a.userStep = e.step, a.userChunk = e.chunk, a.userComplete = e.complete, a.userError = e.error, e.step = b(e.step), e.chunk = b(e.chunk), e.complete = b(e.complete), e.error = b(e.error), delete e.worker, void a.postMessage({ input: t, config: e, workerId: a.id });
      }
      var h = null;
      return c.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(v) {
        return v.charCodeAt(0) === 65279 ? v.slice(1) : v;
      }(t), h = e.download ? new ue(e) : new oe(e)) : t.readable === !0 && b(t.read) && b(t.on) ? h = new fe(e) : (s.File && t instanceof File || t instanceof Object) && (h = new he(e)), h.stream(t);
    }, unparse: function(t, e) {
      var i = !1, a = !0, h = ",", v = `\r
`, _ = '"', z = _ + _, C = !1, f = null, A = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || c.BAD_DELIMITERS.filter(function(u) {
            return e.delimiter.indexOf(u) !== -1;
          }).length || (h = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (i = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (C = e.skipEmptyLines), typeof e.newline == "string" && (v = e.newline), typeof e.quoteChar == "string" && (_ = e.quoteChar), typeof e.header == "boolean" && (a = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0)
              throw new Error("Option columns is empty");
            f = e.columns;
          }
          e.escapeChar !== void 0 && (z = e.escapeChar + _), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (A = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var l = new RegExp(ae(_), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0]))
          return G(null, t, C);
        if (typeof t[0] == "object")
          return G(f || Object.keys(t[0]), t, C);
      } else if (typeof t == "object")
        return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || f), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), G(t.fields || [], t.data || [], C);
      throw new Error("Unable to serialize unrecognized input");
      function G(u, k, q) {
        var x = "";
        typeof u == "string" && (u = JSON.parse(u)), typeof k == "string" && (k = JSON.parse(k));
        var F = Array.isArray(u) && 0 < u.length, M = !Array.isArray(k[0]);
        if (F && a) {
          for (var L = 0; L < u.length; L++)
            0 < L && (x += h), x += P(u[L], L);
          0 < k.length && (x += v);
        }
        for (var d = 0; d < k.length; d++) {
          var m = F ? u.length : k[d].length, O = !1, I = F ? Object.keys(k[d]).length === 0 : k[d].length === 0;
          if (q && !F && (O = q === "greedy" ? k[d].join("").trim() === "" : k[d].length === 1 && k[d][0].length === 0), q === "greedy" && F) {
            for (var w = [], U = 0; U < m; U++) {
              var T = M ? u[U] : U;
              w.push(k[d][T]);
            }
            O = w.join("").trim() === "";
          }
          if (!O) {
            for (var E = 0; E < m; E++) {
              0 < E && !I && (x += h);
              var $ = F && M ? u[E] : E;
              x += P(k[d][$], E);
            }
            d < k.length - 1 && (!q || 0 < m && !I) && (x += v);
          }
        }
        return x;
      }
      function P(u, k) {
        if (u == null)
          return "";
        if (u.constructor === Date)
          return JSON.stringify(u).slice(1, 25);
        var q = !1;
        A && typeof u == "string" && A.test(u) && (u = "'" + u, q = !0);
        var x = u.toString().replace(l, z);
        return (q = q || i === !0 || typeof i == "function" && i(u, k) || Array.isArray(i) && i[k] || function(F, M) {
          for (var L = 0; L < M.length; L++)
            if (-1 < F.indexOf(M[L]))
              return !0;
          return !1;
        }(x, c.BAD_DELIMITERS) || -1 < x.indexOf(h) || x.charAt(0) === " " || x.charAt(x.length - 1) === " ") ? _ + x + _ : x;
      }
    } };
    if (c.RECORD_SEP = String.fromCharCode(30), c.UNIT_SEP = String.fromCharCode(31), c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !p && !!s.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = ve, c.ParserHandle = ye, c.NetworkStreamer = ue, c.FileStreamer = he, c.StringStreamer = oe, c.ReadableStreamStreamer = fe, s.jQuery) {
      var Y = s.jQuery;
      Y.fn.parse = function(t) {
        var e = t.config || {}, i = [];
        return this.each(function(v) {
          if (!(Y(this).prop("tagName").toUpperCase() === "INPUT" && Y(this).attr("type").toLowerCase() === "file" && s.FileReader) || !this.files || this.files.length === 0)
            return !0;
          for (var _ = 0; _ < this.files.length; _++)
            i.push({ file: this.files[_], inputElem: this, instanceConfig: Y.extend({}, e) });
        }), a(), this;
        function a() {
          if (i.length !== 0) {
            var v, _, z, C, f = i[0];
            if (b(t.before)) {
              var A = t.before(f.file, f.inputElem);
              if (typeof A == "object") {
                if (A.action === "abort")
                  return v = "AbortError", _ = f.file, z = f.inputElem, C = A.reason, void (b(t.error) && t.error({ name: v }, _, z, C));
                if (A.action === "skip")
                  return void h();
                typeof A.config == "object" && (f.instanceConfig = Y.extend(f.instanceConfig, A.config));
              } else if (A === "skip")
                return void h();
            }
            var l = f.instanceConfig.complete;
            f.instanceConfig.complete = function(G) {
              b(l) && l(G, f.file, f.inputElem), h();
            }, c.parse(f.file, f.instanceConfig);
          } else
            b(t.complete) && t.complete();
        }
        function h() {
          i.splice(0, 1), a();
        }
      };
    }
    function W(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(e) {
        var i = _e(e);
        i.chunkSize = parseInt(i.chunkSize), e.step || e.chunk || (i.chunkSize = null), this._handle = new ye(i), (this._handle.streamer = this)._config = i;
      }).call(this, t), this.parseChunk = function(e, i) {
        if (this.isFirstChunk && b(this._config.beforeFirstChunk)) {
          var a = this._config.beforeFirstChunk(e);
          a !== void 0 && (e = a);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var h = this._partialLine + e;
        this._partialLine = "";
        var v = this._handle.parse(h, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var _ = v.meta.cursor;
          this._finished || (this._partialLine = h.substring(_ - this._baseIndex), this._baseIndex = _), v && v.data && (this._rowCount += v.data.length);
          var z = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (g)
            s.postMessage({ results: v, workerId: c.WORKER_ID, finished: z });
          else if (b(this._config.chunk) && !i) {
            if (this._config.chunk(v, this._handle), this._handle.paused() || this._handle.aborted())
              return void (this._halted = !0);
            v = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(v.data), this._completeResults.errors = this._completeResults.errors.concat(v.errors), this._completeResults.meta = v.meta), this._completed || !z || !b(this._config.complete) || v && v.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), z || v && v.meta.paused || this._nextChunk(), v;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        b(this._config.error) ? this._config.error(e) : g && this._config.error && s.postMessage({ workerId: c.WORKER_ID, error: e, finished: !1 });
      };
    }
    function ue(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = c.RemoteChunkSize), W.call(this, t), this._nextChunk = p ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(i) {
        this._input = i, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished)
          this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), p || (e.onload = Z(this._chunkLoaded, this), e.onerror = Z(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !p), this._config.downloadRequestHeaders) {
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
          } catch (v) {
            this._chunkError(v.message);
          }
          p && e.status === 0 && this._chunkError();
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
          var v = Math.min(this._start + this._config.chunkSize, this._input.size);
          h = i.call(h, this._start, v);
        }
        var _ = e.readAsText(h, this._config.encoding);
        a || this._chunkLoaded({ target: { result: _ } });
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
        } catch (v) {
          this._streamError(v);
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
      var e, i, a, h = Math.pow(2, 53), v = -h, _ = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, z = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, C = this, f = 0, A = 0, l = !1, G = !1, P = [], u = { data: [], errors: [], meta: {} };
      if (b(t.step)) {
        var k = t.step;
        t.step = function(d) {
          if (u = d, F())
            x();
          else {
            if (x(), u.data.length === 0)
              return;
            f += d.data.length, t.preview && f > t.preview ? i.abort() : (u.data = u.data[0], k(u, C));
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
          function d(O, I) {
            b(t.transformHeader) && (O = t.transformHeader(O, I)), P.push(O);
          }
          if (Array.isArray(u.data[0])) {
            for (var m = 0; F() && m < u.data.length; m++)
              u.data[m].forEach(d);
            u.data.splice(0, 1);
          } else
            u.data.forEach(d);
        }(), function() {
          if (!u || !t.header && !t.dynamicTyping && !t.transform)
            return u;
          function d(O, I) {
            var w, U = t.header ? {} : [];
            for (w = 0; w < O.length; w++) {
              var T = w, E = O[w];
              t.header && (T = w >= P.length ? "__parsed_extra" : P[w]), t.transform && (E = t.transform(E, T)), E = M(T, E), T === "__parsed_extra" ? (U[T] = U[T] || [], U[T].push(E)) : U[T] = E;
            }
            return t.header && (w > P.length ? L("FieldMismatch", "TooManyFields", "Too many fields: expected " + P.length + " fields but parsed " + w, A + I) : w < P.length && L("FieldMismatch", "TooFewFields", "Too few fields: expected " + P.length + " fields but parsed " + w, A + I)), U;
          }
          var m = 1;
          return !u.data.length || Array.isArray(u.data[0]) ? (u.data = u.data.map(d), m = u.data.length) : u.data = d(u.data, 0), t.header && u.meta && (u.meta.fields = P), A += m, u;
        }();
      }
      function F() {
        return t.header && P.length === 0;
      }
      function M(d, m) {
        return O = d, t.dynamicTypingFunction && t.dynamicTyping[O] === void 0 && (t.dynamicTyping[O] = t.dynamicTypingFunction(O)), (t.dynamicTyping[O] || t.dynamicTyping) === !0 ? m === "true" || m === "TRUE" || m !== "false" && m !== "FALSE" && (function(I) {
          if (_.test(I)) {
            var w = parseFloat(I);
            if (v < w && w < h)
              return !0;
          }
          return !1;
        }(m) ? parseFloat(m) : z.test(m) ? new Date(m) : m === "" ? null : m) : m;
        var O;
      }
      function L(d, m, O, I) {
        var w = { type: d, code: m, message: O };
        I !== void 0 && (w.row = I), u.errors.push(w);
      }
      this.parse = function(d, m, O) {
        var I = t.quoteChar || '"';
        if (t.newline || (t.newline = function(T, E) {
          T = T.substring(0, 1048576);
          var $ = new RegExp(ae(E) + "([^]*?)" + ae(E), "gm"), B = (T = T.replace($, "")).split("\r"), Q = T.split(`
`), V = 1 < Q.length && Q[0].length < B[0].length;
          if (B.length === 1 || V)
            return `
`;
          for (var H = 0, R = 0; R < B.length; R++)
            B[R][0] === `
` && H++;
          return H >= B.length / 2 ? `\r
` : "\r";
        }(d, I)), a = !1, t.delimiter)
          b(t.delimiter) && (t.delimiter = t.delimiter(d), u.meta.delimiter = t.delimiter);
        else {
          var w = function(T, E, $, B, Q) {
            var V, H, R, D;
            Q = Q || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var re = 0; re < Q.length; re++) {
              var y = Q[re], ie = 0, J = 0, ne = 0;
              R = void 0;
              for (var X = new ve({ comments: B, delimiter: y, newline: E, preview: 10 }).parse(T), ee = 0; ee < X.data.length; ee++)
                if ($ && q(X.data[ee]))
                  ne++;
                else {
                  var te = X.data[ee].length;
                  J += te, R !== void 0 ? 0 < te && (ie += Math.abs(te - R), R = te) : R = te;
                }
              0 < X.data.length && (J /= X.data.length - ne), (H === void 0 || ie <= H) && (D === void 0 || D < J) && 1.99 < J && (H = ie, V = y, D = J);
            }
            return { successful: !!(t.delimiter = V), bestDelimiter: V };
          }(d, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          w.successful ? t.delimiter = w.bestDelimiter : (a = !0, t.delimiter = c.DefaultDelimiter), u.meta.delimiter = t.delimiter;
        }
        var U = _e(t);
        return t.preview && t.header && U.preview++, e = d, i = new ve(U), u = i.parse(e, m, O), x(), l ? { meta: { paused: !0 } } : u || { meta: { paused: !1 } };
      }, this.paused = function() {
        return l;
      }, this.pause = function() {
        l = !0, i.abort(), e = b(t.chunk) ? "" : e.substring(i.getCharIndex());
      }, this.resume = function() {
        C.streamer._halted ? (l = !1, C.streamer.parseChunk(e, !0)) : setTimeout(C.resume, 3);
      }, this.aborted = function() {
        return G;
      }, this.abort = function() {
        G = !0, i.abort(), u.meta.aborted = !0, b(t.complete) && t.complete(u), e = "";
      };
    }
    function ae(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function ve(t) {
      var e, i = (t = t || {}).delimiter, a = t.newline, h = t.comments, v = t.step, _ = t.preview, z = t.fastMode, C = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (C = t.escapeChar), (typeof i != "string" || -1 < c.BAD_DELIMITERS.indexOf(i)) && (i = ","), h === i)
        throw new Error("Comment character same as delimiter");
      h === !0 ? h = "#" : (typeof h != "string" || -1 < c.BAD_DELIMITERS.indexOf(h)) && (h = !1), a !== `
` && a !== "\r" && a !== `\r
` && (a = `
`);
      var f = 0, A = !1;
      this.parse = function(l, G, P) {
        if (typeof l != "string")
          throw new Error("Input must be a string");
        var u = l.length, k = i.length, q = a.length, x = h.length, F = b(v), M = [], L = [], d = [], m = f = 0;
        if (!l)
          return N();
        if (t.header && !G) {
          var O = l.split(a)[0].split(i), I = [], w = {}, U = !1;
          for (var T in O) {
            var E = O[T];
            b(t.transformHeader) && (E = t.transformHeader(E, T));
            var $ = E, B = w[E] || 0;
            for (0 < B && (U = !0, $ = E + "_" + B), w[E] = B + 1; I.includes($); )
              $ = $ + "_" + B;
            I.push($);
          }
          if (U) {
            var Q = l.split(a);
            Q[0] = I.join(i), l = Q.join(a);
          }
        }
        if (z || z !== !1 && l.indexOf(e) === -1) {
          for (var V = l.split(a), H = 0; H < V.length; H++) {
            if (d = V[H], f += d.length, H !== V.length - 1)
              f += a.length;
            else if (P)
              return N();
            if (!h || d.substring(0, x) !== h) {
              if (F) {
                if (M = [], ne(d.split(i)), ce(), A)
                  return N();
              } else
                ne(d.split(i));
              if (_ && _ <= H)
                return M = M.slice(0, _), N(!0);
            }
          }
          return N();
        }
        for (var R = l.indexOf(i, f), D = l.indexOf(a, f), re = new RegExp(ae(C) + ae(e), "g"), y = l.indexOf(e, f); ; )
          if (l[f] !== e)
            if (h && d.length === 0 && l.substring(f, f + x) === h) {
              if (D === -1)
                return N();
              f = D + q, D = l.indexOf(a, f), R = l.indexOf(i, f);
            } else if (R !== -1 && (R < D || D === -1))
              d.push(l.substring(f, R)), f = R + k, R = l.indexOf(i, f);
            else {
              if (D === -1)
                break;
              if (d.push(l.substring(f, D)), te(D + q), F && (ce(), A))
                return N();
              if (_ && M.length >= _)
                return N(!0);
            }
          else
            for (y = f, f++; ; ) {
              if ((y = l.indexOf(e, y + 1)) === -1)
                return P || L.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: M.length, index: f }), ee();
              if (y === u - 1)
                return ee(l.substring(f, y).replace(re, e));
              if (e !== C || l[y + 1] !== C) {
                if (e === C || y === 0 || l[y - 1] !== C) {
                  R !== -1 && R < y + 1 && (R = l.indexOf(i, y + 1)), D !== -1 && D < y + 1 && (D = l.indexOf(a, y + 1));
                  var ie = X(D === -1 ? R : Math.min(R, D));
                  if (l.substr(y + 1 + ie, k) === i) {
                    d.push(l.substring(f, y).replace(re, e)), l[f = y + 1 + ie + k] !== e && (y = l.indexOf(e, f)), R = l.indexOf(i, f), D = l.indexOf(a, f);
                    break;
                  }
                  var J = X(D);
                  if (l.substring(y + 1 + J, y + 1 + J + q) === a) {
                    if (d.push(l.substring(f, y).replace(re, e)), te(y + 1 + J + q), R = l.indexOf(i, f), y = l.indexOf(e, f), F && (ce(), A))
                      return N();
                    if (_ && M.length >= _)
                      return N(!0);
                    break;
                  }
                  L.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: M.length, index: f }), y++;
                }
              } else
                y++;
            }
        return ee();
        function ne(K) {
          M.push(K), m = f;
        }
        function X(K) {
          var Ee = 0;
          if (K !== -1) {
            var ge = l.substring(y + 1, K);
            ge && ge.trim() === "" && (Ee = ge.length);
          }
          return Ee;
        }
        function ee(K) {
          return P || (K === void 0 && (K = l.substring(f)), d.push(K), f = u, ne(d), F && ce()), N();
        }
        function te(K) {
          f = K, ne(d), d = [], D = l.indexOf(a, f);
        }
        function N(K) {
          return { data: M, errors: L, meta: { delimiter: i, linebreak: a, aborted: A, truncated: !!K, cursor: m + (G || 0) } };
        }
        function ce() {
          v(N()), M = [], L = [];
        }
      }, this.abort = function() {
        A = !0;
      }, this.getCharIndex = function() {
        return f;
      };
    }
    function De(t) {
      var e = t.data, i = S[e.workerId], a = !1;
      if (e.error)
        i.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var h = { abort: function() {
          a = !0, be(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: we, resume: we };
        if (b(i.userStep)) {
          for (var v = 0; v < e.results.data.length && (i.userStep({ data: e.results.data[v], errors: e.results.errors, meta: e.results.meta }, h), !a); v++)
            ;
          delete e.results;
        } else
          b(i.userChunk) && (i.userChunk(e.results, h, e.file), delete e.results);
      }
      e.finished && !a && be(e.workerId, e.results);
    }
    function be(t, e) {
      var i = S[t];
      b(i.userComplete) && i.userComplete(e), i.terminate(), delete S[t];
    }
    function we() {
      throw new Error("Not implemented.");
    }
    function _e(t) {
      if (typeof t != "object" || t === null)
        return t;
      var e = Array.isArray(t) ? [] : {};
      for (var i in t)
        e[i] = _e(t[i]);
      return e;
    }
    function Z(t, e) {
      return function() {
        t.apply(e, arguments);
      };
    }
    function b(t) {
      return typeof t == "function";
    }
    return g && (s.onmessage = function(t) {
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
const Ye = /* @__PURE__ */ Ie(Je);
async function et(r, n = "") {
  try {
    r = new URL(r);
    const o = r.pathname;
    return /(?:\.([^.]+))?$/.exec(o)[1] === "csv" ? await fetch(r.href).then((g) => g.text()).then((g) => (g = g.replace(/(".*?")|,/g, (...j) => j[1] || "|"), g = g.replace(/["]+/g, ""), Ye.parse(g, {
      //quotes: "true",  // dont need these
      //quoteChar: "'",  // has no effect that I can tell
      header: !0,
      skipEmptyLines: !0,
      delimiter: "|",
      // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
      dynamicTyping: !1
    }).data)) : await fetch(r.href).then((g) => g.json());
  } catch {
    try {
      return await (await fetch(r)).json();
    } catch {
      console.error(`Cannot parse URL: ${r}`);
    }
  }
}
function tt(r) {
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
export {
  Ye as P,
  et as f,
  tt as g,
  Xe as i
};
