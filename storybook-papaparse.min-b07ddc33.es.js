import { c as ye, g as ke } from "./storybook-_commonjsHelpers-c5d32002.es.js";
var ge = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(_e, Ee) {
  (function(fe, E) {
    _e.exports = E();
  })(ye, function fe() {
    var E = typeof self < "u" ? self : typeof window < "u" ? window : E !== void 0 ? E : {}, Y = !E.document && !!E.postMessage, ae = E.IS_PAPA_WORKER || !1, te = {}, me = 0, f = { parse: function(t, e) {
      var r = (e = e || {}).dynamicTyping || !1;
      if (p(r) && (e.dynamicTypingFunction = r, r = {}), e.dynamicTyping = r, e.transform = !!p(e.transform) && e.transform, e.worker && f.WORKERS_SUPPORTED) {
        var i = function() {
          if (!f.WORKERS_SUPPORTED)
            return !1;
          var h = (A = E.URL || E.webkitURL || null, k = fe.toString(), f.BLOB_URL || (f.BLOB_URL = A.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", k, ")();"], { type: "text/javascript" })))), d = new E.Worker(h), A, k;
          return d.onmessage = ve, d.id = me++, te[d.id] = d;
        }();
        return i.userStep = e.step, i.userChunk = e.chunk, i.userComplete = e.complete, i.userError = e.error, e.step = p(e.step), e.chunk = p(e.chunk), e.complete = p(e.complete), e.error = p(e.error), delete e.worker, void i.postMessage({ input: t, config: e, workerId: i.id });
      }
      var s = null;
      return f.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(h) {
        return h.charCodeAt(0) === 65279 ? h.slice(1) : h;
      }(t), s = e.download ? new re(e) : new V(e)) : t.readable === !0 && p(t.read) && p(t.on) ? s = new ne(e) : (E.File && t instanceof File || t instanceof Object) && (s = new ie(e)), s.stream(t);
    }, unparse: function(t, e) {
      var r = !1, i = !0, s = ",", h = `\r
`, d = '"', A = d + d, k = !1, a = null, w = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || f.BAD_DELIMITERS.filter(function(n) {
            return e.delimiter.indexOf(n) !== -1;
          }).length || (s = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (r = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (k = e.skipEmptyLines), typeof e.newline == "string" && (h = e.newline), typeof e.quoteChar == "string" && (d = e.quoteChar), typeof e.header == "boolean" && (i = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0)
              throw new Error("Option columns is empty");
            a = e.columns;
          }
          e.escapeChar !== void 0 && (A = e.escapeChar + d), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (w = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var u = new RegExp(ee(d), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0]))
          return U(null, t, k);
        if (typeof t[0] == "object")
          return U(a || Object.keys(t[0]), t, k);
      } else if (typeof t == "object")
        return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || a), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), U(t.fields || [], t.data || [], k);
      throw new Error("Unable to serialize unrecognized input");
      function U(n, m, S) {
        var b = "";
        typeof n == "string" && (n = JSON.parse(n)), typeof m == "string" && (m = JSON.parse(m));
        var T = Array.isArray(n) && 0 < n.length, O = !Array.isArray(m[0]);
        if (T && i) {
          for (var I = 0; I < n.length; I++)
            0 < I && (b += s), b += D(n[I], I);
          0 < m.length && (b += h);
        }
        for (var o = 0; o < m.length; o++) {
          var l = T ? n.length : m[o].length, v = !1, x = T ? Object.keys(m[o]).length === 0 : m[o].length === 0;
          if (S && !T && (v = S === "greedy" ? m[o].join("").trim() === "" : m[o].length === 1 && m[o][0].length === 0), S === "greedy" && T) {
            for (var g = [], L = 0; L < l; L++) {
              var C = O ? n[L] : L;
              g.push(m[o][C]);
            }
            v = g.join("").trim() === "";
          }
          if (!v) {
            for (var _ = 0; _ < l; _++) {
              0 < _ && !x && (b += s);
              var q = T && O ? n[_] : _;
              b += D(m[o][q], _);
            }
            o < m.length - 1 && (!S || 0 < l && !x) && (b += h);
          }
        }
        return b;
      }
      function D(n, m) {
        if (n == null)
          return "";
        if (n.constructor === Date)
          return JSON.stringify(n).slice(1, 25);
        var S = !1;
        w && typeof n == "string" && w.test(n) && (n = "'" + n, S = !0);
        var b = n.toString().replace(u, A);
        return (S = S || r === !0 || typeof r == "function" && r(n, m) || Array.isArray(r) && r[m] || function(T, O) {
          for (var I = 0; I < O.length; I++)
            if (-1 < T.indexOf(O[I]))
              return !0;
          return !1;
        }(b, f.BAD_DELIMITERS) || -1 < b.indexOf(s) || b.charAt(0) === " " || b.charAt(b.length - 1) === " ") ? d + b + d : b;
      }
    } };
    if (f.RECORD_SEP = String.fromCharCode(30), f.UNIT_SEP = String.fromCharCode(31), f.BYTE_ORDER_MARK = "\uFEFF", f.BAD_DELIMITERS = ["\r", `
`, '"', f.BYTE_ORDER_MARK], f.WORKERS_SUPPORTED = !Y && !!E.Worker, f.NODE_STREAM_INPUT = 1, f.LocalChunkSize = 10485760, f.RemoteChunkSize = 5242880, f.DefaultDelimiter = ",", f.Parser = oe, f.ParserHandle = de, f.NetworkStreamer = re, f.FileStreamer = ie, f.StringStreamer = V, f.ReadableStreamStreamer = ne, E.jQuery) {
      var X = E.jQuery;
      X.fn.parse = function(t) {
        var e = t.config || {}, r = [];
        return this.each(function(h) {
          if (!(X(this).prop("tagName").toUpperCase() === "INPUT" && X(this).attr("type").toLowerCase() === "file" && E.FileReader) || !this.files || this.files.length === 0)
            return !0;
          for (var d = 0; d < this.files.length; d++)
            r.push({ file: this.files[d], inputElem: this, instanceConfig: X.extend({}, e) });
        }), i(), this;
        function i() {
          if (r.length !== 0) {
            var h, d, A, k, a = r[0];
            if (p(t.before)) {
              var w = t.before(a.file, a.inputElem);
              if (typeof w == "object") {
                if (w.action === "abort")
                  return h = "AbortError", d = a.file, A = a.inputElem, k = w.reason, void (p(t.error) && t.error({ name: h }, d, A, k));
                if (w.action === "skip")
                  return void s();
                typeof w.config == "object" && (a.instanceConfig = X.extend(a.instanceConfig, w.config));
              } else if (w === "skip")
                return void s();
            }
            var u = a.instanceConfig.complete;
            a.instanceConfig.complete = function(U) {
              p(u) && u(U, a.file, a.inputElem), s();
            }, f.parse(a.file, a.instanceConfig);
          } else
            p(t.complete) && t.complete();
        }
        function s() {
          r.splice(0, 1), i();
        }
      };
    }
    function B(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(e) {
        var r = ue(e);
        r.chunkSize = parseInt(r.chunkSize), e.step || e.chunk || (r.chunkSize = null), this._handle = new de(r), (this._handle.streamer = this)._config = r;
      }).call(this, t), this.parseChunk = function(e, r) {
        if (this.isFirstChunk && p(this._config.beforeFirstChunk)) {
          var i = this._config.beforeFirstChunk(e);
          i !== void 0 && (e = i);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var s = this._partialLine + e;
        this._partialLine = "";
        var h = this._handle.parse(s, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var d = h.meta.cursor;
          this._finished || (this._partialLine = s.substring(d - this._baseIndex), this._baseIndex = d), h && h.data && (this._rowCount += h.data.length);
          var A = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (ae)
            E.postMessage({ results: h, workerId: f.WORKER_ID, finished: A });
          else if (p(this._config.chunk) && !r) {
            if (this._config.chunk(h, this._handle), this._handle.paused() || this._handle.aborted())
              return void (this._halted = !0);
            h = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(h.data), this._completeResults.errors = this._completeResults.errors.concat(h.errors), this._completeResults.meta = h.meta), this._completed || !A || !p(this._config.complete) || h && h.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), A || h && h.meta.paused || this._nextChunk(), h;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        p(this._config.error) ? this._config.error(e) : ae && this._config.error && E.postMessage({ workerId: f.WORKER_ID, error: e, finished: !1 });
      };
    }
    function re(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = f.RemoteChunkSize), B.call(this, t), this._nextChunk = Y ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(r) {
        this._input = r, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished)
          this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), Y || (e.onload = W(this._chunkLoaded, this), e.onerror = W(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !Y), this._config.downloadRequestHeaders) {
            var r = this._config.downloadRequestHeaders;
            for (var i in r)
              e.setRequestHeader(i, r[i]);
          }
          if (this._config.chunkSize) {
            var s = this._start + this._config.chunkSize - 1;
            e.setRequestHeader("Range", "bytes=" + this._start + "-" + s);
          }
          try {
            e.send(this._config.downloadRequestBody);
          } catch (h) {
            this._chunkError(h.message);
          }
          Y && e.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(r) {
          var i = r.getResponseHeader("Content-Range");
          return i === null ? -1 : parseInt(i.substring(i.lastIndexOf("/") + 1));
        }(e), this.parseChunk(e.responseText)));
      }, this._chunkError = function(r) {
        var i = e.statusText || r;
        this._sendError(new Error(i));
      };
    }
    function ie(t) {
      var e, r;
      (t = t || {}).chunkSize || (t.chunkSize = f.LocalChunkSize), B.call(this, t);
      var i = typeof FileReader < "u";
      this.stream = function(s) {
        this._input = s, r = s.slice || s.webkitSlice || s.mozSlice, i ? ((e = new FileReader()).onload = W(this._chunkLoaded, this), e.onerror = W(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var s = this._input;
        if (this._config.chunkSize) {
          var h = Math.min(this._start + this._config.chunkSize, this._input.size);
          s = r.call(s, this._start, h);
        }
        var d = e.readAsText(s, this._config.encoding);
        i || this._chunkLoaded({ target: { result: d } });
      }, this._chunkLoaded = function(s) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(s.target.result);
      }, this._chunkError = function() {
        this._sendError(e.error);
      };
    }
    function V(t) {
      var e;
      B.call(this, t = t || {}), this.stream = function(r) {
        return e = r, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var r, i = this._config.chunkSize;
          return i ? (r = e.substring(0, i), e = e.substring(i)) : (r = e, e = ""), this._finished = !e, this.parseChunk(r);
        }
      };
    }
    function ne(t) {
      B.call(this, t = t || {});
      var e = [], r = !0, i = !1;
      this.pause = function() {
        B.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        B.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(s) {
        this._input = s, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        i && e.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : r = !0;
      }, this._streamData = W(function(s) {
        try {
          e.push(typeof s == "string" ? s : s.toString(this._config.encoding)), r && (r = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
        } catch (h) {
          this._streamError(h);
        }
      }, this), this._streamError = W(function(s) {
        this._streamCleanUp(), this._sendError(s);
      }, this), this._streamEnd = W(function() {
        this._streamCleanUp(), i = !0, this._streamData("");
      }, this), this._streamCleanUp = W(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function de(t) {
      var e, r, i, s = Math.pow(2, 53), h = -s, d = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, A = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, k = this, a = 0, w = 0, u = !1, U = !1, D = [], n = { data: [], errors: [], meta: {} };
      if (p(t.step)) {
        var m = t.step;
        t.step = function(o) {
          if (n = o, T())
            b();
          else {
            if (b(), n.data.length === 0)
              return;
            a += o.data.length, t.preview && a > t.preview ? r.abort() : (n.data = n.data[0], m(n, k));
          }
        };
      }
      function S(o) {
        return t.skipEmptyLines === "greedy" ? o.join("").trim() === "" : o.length === 1 && o[0].length === 0;
      }
      function b() {
        return n && i && (I("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + f.DefaultDelimiter + "'"), i = !1), t.skipEmptyLines && (n.data = n.data.filter(function(o) {
          return !S(o);
        })), T() && function() {
          if (!n)
            return;
          function o(v, x) {
            p(t.transformHeader) && (v = t.transformHeader(v, x)), D.push(v);
          }
          if (Array.isArray(n.data[0])) {
            for (var l = 0; T() && l < n.data.length; l++)
              n.data[l].forEach(o);
            n.data.splice(0, 1);
          } else
            n.data.forEach(o);
        }(), function() {
          if (!n || !t.header && !t.dynamicTyping && !t.transform)
            return n;
          function o(v, x) {
            var g, L = t.header ? {} : [];
            for (g = 0; g < v.length; g++) {
              var C = g, _ = v[g];
              t.header && (C = g >= D.length ? "__parsed_extra" : D[g]), t.transform && (_ = t.transform(_, C)), _ = O(C, _), C === "__parsed_extra" ? (L[C] = L[C] || [], L[C].push(_)) : L[C] = _;
            }
            return t.header && (g > D.length ? I("FieldMismatch", "TooManyFields", "Too many fields: expected " + D.length + " fields but parsed " + g, w + x) : g < D.length && I("FieldMismatch", "TooFewFields", "Too few fields: expected " + D.length + " fields but parsed " + g, w + x)), L;
          }
          var l = 1;
          return !n.data.length || Array.isArray(n.data[0]) ? (n.data = n.data.map(o), l = n.data.length) : n.data = o(n.data, 0), t.header && n.meta && (n.meta.fields = D), w += l, n;
        }();
      }
      function T() {
        return t.header && D.length === 0;
      }
      function O(o, l) {
        return v = o, t.dynamicTypingFunction && t.dynamicTyping[v] === void 0 && (t.dynamicTyping[v] = t.dynamicTypingFunction(v)), (t.dynamicTyping[v] || t.dynamicTyping) === !0 ? l === "true" || l === "TRUE" || l !== "false" && l !== "FALSE" && (function(x) {
          if (d.test(x)) {
            var g = parseFloat(x);
            if (h < g && g < s)
              return !0;
          }
          return !1;
        }(l) ? parseFloat(l) : A.test(l) ? new Date(l) : l === "" ? null : l) : l;
        var v;
      }
      function I(o, l, v, x) {
        var g = { type: o, code: l, message: v };
        x !== void 0 && (g.row = x), n.errors.push(g);
      }
      this.parse = function(o, l, v) {
        var x = t.quoteChar || '"';
        if (t.newline || (t.newline = function(C, _) {
          C = C.substring(0, 1048576);
          var q = new RegExp(ee(_) + "([^]*?)" + ee(_), "gm"), F = (C = C.replace(q, "")).split("\r"), N = C.split(`
`), j = 1 < N.length && N[0].length < F[0].length;
          if (F.length === 1 || j)
            return `
`;
          for (var z = 0, y = 0; y < F.length; y++)
            F[y][0] === `
` && z++;
          return z >= F.length / 2 ? `\r
` : "\r";
        }(o, x)), i = !1, t.delimiter)
          p(t.delimiter) && (t.delimiter = t.delimiter(o), n.meta.delimiter = t.delimiter);
        else {
          var g = function(C, _, q, F, N) {
            var j, z, y, R;
            N = N || [",", "	", "|", ";", f.RECORD_SEP, f.UNIT_SEP];
            for (var $ = 0; $ < N.length; $++) {
              var c = N[$], Z = 0, K = 0, G = 0;
              y = void 0;
              for (var H = new oe({ comments: F, delimiter: c, newline: _, preview: 10 }).parse(C), Q = 0; Q < H.data.length; Q++)
                if (q && S(H.data[Q]))
                  G++;
                else {
                  var J = H.data[Q].length;
                  K += J, y !== void 0 ? 0 < J && (Z += Math.abs(J - y), y = J) : y = J;
                }
              0 < H.data.length && (K /= H.data.length - G), (z === void 0 || Z <= z) && (R === void 0 || R < K) && 1.99 < K && (z = Z, j = c, R = K);
            }
            return { successful: !!(t.delimiter = j), bestDelimiter: j };
          }(o, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          g.successful ? t.delimiter = g.bestDelimiter : (i = !0, t.delimiter = f.DefaultDelimiter), n.meta.delimiter = t.delimiter;
        }
        var L = ue(t);
        return t.preview && t.header && L.preview++, e = o, r = new oe(L), n = r.parse(e, l, v), b(), u ? { meta: { paused: !0 } } : n || { meta: { paused: !1 } };
      }, this.paused = function() {
        return u;
      }, this.pause = function() {
        u = !0, r.abort(), e = p(t.chunk) ? "" : e.substring(r.getCharIndex());
      }, this.resume = function() {
        k.streamer._halted ? (u = !1, k.streamer.parseChunk(e, !0)) : setTimeout(k.resume, 3);
      }, this.aborted = function() {
        return U;
      }, this.abort = function() {
        U = !0, r.abort(), n.meta.aborted = !0, p(t.complete) && t.complete(n), e = "";
      };
    }
    function ee(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function oe(t) {
      var e, r = (t = t || {}).delimiter, i = t.newline, s = t.comments, h = t.step, d = t.preview, A = t.fastMode, k = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (k = t.escapeChar), (typeof r != "string" || -1 < f.BAD_DELIMITERS.indexOf(r)) && (r = ","), s === r)
        throw new Error("Comment character same as delimiter");
      s === !0 ? s = "#" : (typeof s != "string" || -1 < f.BAD_DELIMITERS.indexOf(s)) && (s = !1), i !== `
` && i !== "\r" && i !== `\r
` && (i = `
`);
      var a = 0, w = !1;
      this.parse = function(u, U, D) {
        if (typeof u != "string")
          throw new Error("Input must be a string");
        var n = u.length, m = r.length, S = i.length, b = s.length, T = p(h), O = [], I = [], o = [], l = a = 0;
        if (!u)
          return M();
        if (t.header && !U) {
          var v = u.split(i)[0].split(r), x = [], g = {}, L = !1;
          for (var C in v) {
            var _ = v[C];
            p(t.transformHeader) && (_ = t.transformHeader(_, C));
            var q = _, F = g[_] || 0;
            for (0 < F && (L = !0, q = _ + "_" + F), g[_] = F + 1; x.includes(q); )
              q = q + "_" + F;
            x.push(q);
          }
          if (L) {
            var N = u.split(i);
            N[0] = x.join(r), u = N.join(i);
          }
        }
        if (A || A !== !1 && u.indexOf(e) === -1) {
          for (var j = u.split(i), z = 0; z < j.length; z++) {
            if (o = j[z], a += o.length, z !== j.length - 1)
              a += i.length;
            else if (D)
              return M();
            if (!s || o.substring(0, b) !== s) {
              if (T) {
                if (O = [], G(o.split(r)), se(), w)
                  return M();
              } else
                G(o.split(r));
              if (d && d <= z)
                return O = O.slice(0, d), M(!0);
            }
          }
          return M();
        }
        for (var y = u.indexOf(r, a), R = u.indexOf(i, a), $ = new RegExp(ee(k) + ee(e), "g"), c = u.indexOf(e, a); ; )
          if (u[a] !== e)
            if (s && o.length === 0 && u.substring(a, a + b) === s) {
              if (R === -1)
                return M();
              a = R + S, R = u.indexOf(i, a), y = u.indexOf(r, a);
            } else if (y !== -1 && (y < R || R === -1))
              o.push(u.substring(a, y)), a = y + m, y = u.indexOf(r, a);
            else {
              if (R === -1)
                break;
              if (o.push(u.substring(a, R)), J(R + S), T && (se(), w))
                return M();
              if (d && O.length >= d)
                return M(!0);
            }
          else
            for (c = a, a++; ; ) {
              if ((c = u.indexOf(e, c + 1)) === -1)
                return D || I.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: O.length, index: a }), Q();
              if (c === n - 1)
                return Q(u.substring(a, c).replace($, e));
              if (e !== k || u[c + 1] !== k) {
                if (e === k || c === 0 || u[c - 1] !== k) {
                  y !== -1 && y < c + 1 && (y = u.indexOf(r, c + 1)), R !== -1 && R < c + 1 && (R = u.indexOf(i, c + 1));
                  var Z = H(R === -1 ? y : Math.min(y, R));
                  if (u.substr(c + 1 + Z, m) === r) {
                    o.push(u.substring(a, c).replace($, e)), u[a = c + 1 + Z + m] !== e && (c = u.indexOf(e, a)), y = u.indexOf(r, a), R = u.indexOf(i, a);
                    break;
                  }
                  var K = H(R);
                  if (u.substring(c + 1 + K, c + 1 + K + S) === i) {
                    if (o.push(u.substring(a, c).replace($, e)), J(c + 1 + K + S), y = u.indexOf(r, a), c = u.indexOf(e, a), T && (se(), w))
                      return M();
                    if (d && O.length >= d)
                      return M(!0);
                    break;
                  }
                  I.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: O.length, index: a }), c++;
                }
              } else
                c++;
            }
        return Q();
        function G(P) {
          O.push(P), l = a;
        }
        function H(P) {
          var pe = 0;
          if (P !== -1) {
            var he = u.substring(c + 1, P);
            he && he.trim() === "" && (pe = he.length);
          }
          return pe;
        }
        function Q(P) {
          return D || (P === void 0 && (P = u.substring(a)), o.push(P), a = n, G(o), T && se()), M();
        }
        function J(P) {
          a = P, G(o), o = [], R = u.indexOf(i, a);
        }
        function M(P) {
          return { data: O, errors: I, meta: { delimiter: r, linebreak: i, aborted: w, truncated: !!P, cursor: l + (U || 0) } };
        }
        function se() {
          h(M()), O = [], I = [];
        }
      }, this.abort = function() {
        w = !0;
      }, this.getCharIndex = function() {
        return a;
      };
    }
    function ve(t) {
      var e = t.data, r = te[e.workerId], i = !1;
      if (e.error)
        r.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var s = { abort: function() {
          i = !0, le(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: ce, resume: ce };
        if (p(r.userStep)) {
          for (var h = 0; h < e.results.data.length && (r.userStep({ data: e.results.data[h], errors: e.results.errors, meta: e.results.meta }, s), !i); h++)
            ;
          delete e.results;
        } else
          p(r.userChunk) && (r.userChunk(e.results, s, e.file), delete e.results);
      }
      e.finished && !i && le(e.workerId, e.results);
    }
    function le(t, e) {
      var r = te[t];
      p(r.userComplete) && r.userComplete(e), r.terminate(), delete te[t];
    }
    function ce() {
      throw new Error("Not implemented.");
    }
    function ue(t) {
      if (typeof t != "object" || t === null)
        return t;
      var e = Array.isArray(t) ? [] : {};
      for (var r in t)
        e[r] = ue(t[r]);
      return e;
    }
    function W(t, e) {
      return function() {
        t.apply(e, arguments);
      };
    }
    function p(t) {
      return typeof t == "function";
    }
    return ae && (E.onmessage = function(t) {
      var e = t.data;
      if (f.WORKER_ID === void 0 && e && (f.WORKER_ID = e.workerId), typeof e.input == "string")
        E.postMessage({ workerId: f.WORKER_ID, results: f.parse(e.input, e.config), finished: !0 });
      else if (E.File && e.input instanceof File || e.input instanceof Object) {
        var r = f.parse(e.input, e.config);
        r && E.postMessage({ workerId: f.WORKER_ID, results: r, finished: !0 });
      }
    }), (re.prototype = Object.create(B.prototype)).constructor = re, (ie.prototype = Object.create(B.prototype)).constructor = ie, (V.prototype = Object.create(V.prototype)).constructor = V, (ne.prototype = Object.create(B.prototype)).constructor = ne, f;
  });
})(ge);
var be = ge.exports;
const Ce = /* @__PURE__ */ ke(be);
export {
  Ce as P
};
