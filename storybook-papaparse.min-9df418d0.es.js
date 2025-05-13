import { c as me, g as ye } from "./storybook-_commonjsHelpers-c5d32002.es.js";
var ce = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
(function(pe, ve) {
  ((oe, R) => {
    pe.exports = R();
  })(me, function oe() {
    var R = typeof self < "u" ? self : typeof window < "u" ? window : R !== void 0 ? R : {}, J, $ = !R.document && !!R.postMessage, ie = R.IS_PAPA_WORKER || !1, V = {}, _e = 0, h = {};
    function N(e) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(t) {
        var r = se(t);
        r.chunkSize = parseInt(r.chunkSize), t.step || t.chunk || (r.chunkSize = null), this._handle = new he(r), (this._handle.streamer = this)._config = r;
      }).call(this, e), this.parseChunk = function(t, r) {
        var n = parseInt(this._config.skipFirstNLines) || 0;
        if (this.isFirstChunk && 0 < n) {
          let f = this._config.newline;
          f || (i = this._config.quoteChar || '"', f = this._handle.guessLineEndings(t, i)), t = [...t.split(f).slice(n)].join(f);
        }
        this.isFirstChunk && y(this._config.beforeFirstChunk) && (i = this._config.beforeFirstChunk(t)) !== void 0 && (t = i), this.isFirstChunk = !1, this._halted = !1;
        var n = this._partialLine + t, i = (this._partialLine = "", this._handle.parse(n, this._baseIndex, !this._finished));
        if (!this._handle.paused() && !this._handle.aborted()) {
          if (t = i.meta.cursor, n = (this._finished || (this._partialLine = n.substring(t - this._baseIndex), this._baseIndex = t), i && i.data && (this._rowCount += i.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), ie)
            R.postMessage({ results: i, workerId: h.WORKER_ID, finished: n });
          else if (y(this._config.chunk) && !r) {
            if (this._config.chunk(i, this._handle), this._handle.paused() || this._handle.aborted())
              return void (this._halted = !0);
            this._completeResults = i = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(i.data), this._completeResults.errors = this._completeResults.errors.concat(i.errors), this._completeResults.meta = i.meta), this._completed || !n || !y(this._config.complete) || i && i.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), n || i && i.meta.paused || this._nextChunk(), i;
        }
        this._halted = !0;
      }, this._sendError = function(t) {
        y(this._config.error) ? this._config.error(t) : ie && this._config.error && R.postMessage({ workerId: h.WORKER_ID, error: t, finished: !1 });
      };
    }
    function ee(e) {
      var t;
      (e = e || {}).chunkSize || (e.chunkSize = h.RemoteChunkSize), N.call(this, e), this._nextChunk = $ ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(r) {
        this._input = r, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished)
          this._chunkLoaded();
        else {
          if (t = new XMLHttpRequest(), this._config.withCredentials && (t.withCredentials = this._config.withCredentials), $ || (t.onload = K(this._chunkLoaded, this), t.onerror = K(this._chunkError, this)), t.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !$), this._config.downloadRequestHeaders) {
            var r, n = this._config.downloadRequestHeaders;
            for (r in n)
              t.setRequestHeader(r, n[r]);
          }
          var i;
          this._config.chunkSize && (i = this._start + this._config.chunkSize - 1, t.setRequestHeader("Range", "bytes=" + this._start + "-" + i));
          try {
            t.send(this._config.downloadRequestBody);
          } catch (f) {
            this._chunkError(f.message);
          }
          $ && t.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        t.readyState === 4 && (t.status < 200 || 400 <= t.status ? this._chunkError() : (this._start += this._config.chunkSize || t.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((r) => (r = r.getResponseHeader("Content-Range")) !== null ? parseInt(r.substring(r.lastIndexOf("/") + 1)) : -1)(t), this.parseChunk(t.responseText)));
      }, this._chunkError = function(r) {
        r = t.statusText || r, this._sendError(new Error(r));
      };
    }
    function te(e) {
      (e = e || {}).chunkSize || (e.chunkSize = h.LocalChunkSize), N.call(this, e);
      var t, r, n = typeof FileReader < "u";
      this.stream = function(i) {
        this._input = i, r = i.slice || i.webkitSlice || i.mozSlice, n ? ((t = new FileReader()).onload = K(this._chunkLoaded, this), t.onerror = K(this._chunkError, this)) : t = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var i = this._input, f = (this._config.chunkSize && (f = Math.min(this._start + this._config.chunkSize, this._input.size), i = r.call(i, this._start, f)), t.readAsText(i, this._config.encoding));
        n || this._chunkLoaded({ target: { result: f } });
      }, this._chunkLoaded = function(i) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(i.target.result);
      }, this._chunkError = function() {
        this._sendError(t.error);
      };
    }
    function G(e) {
      var t;
      N.call(this, e = e || {}), this.stream = function(r) {
        return t = r, this._nextChunk();
      }, this._nextChunk = function() {
        var r, n;
        if (!this._finished)
          return r = this._config.chunkSize, t = r ? (n = t.substring(0, r), t.substring(r)) : (n = t, ""), this._finished = !t, this.parseChunk(n);
      };
    }
    function re(e) {
      N.call(this, e = e || {});
      var t = [], r = !0, n = !1;
      this.pause = function() {
        N.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        N.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(i) {
        this._input = i, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        n && t.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : r = !0;
      }, this._streamData = K(function(i) {
        try {
          t.push(typeof i == "string" ? i : i.toString(this._config.encoding)), r && (r = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
        } catch (f) {
          this._streamError(f);
        }
      }, this), this._streamError = K(function(i) {
        this._streamCleanUp(), this._sendError(i);
      }, this), this._streamEnd = K(function() {
        this._streamCleanUp(), n = !0, this._streamData("");
      }, this), this._streamCleanUp = K(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function he(e) {
      var t, r, n, i, f = Math.pow(2, 53), C = -f, F = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, j = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, l = this, E = 0, a = 0, T = !1, u = !1, c = [], s = { data: [], errors: [], meta: {} };
      function x(p) {
        return e.skipEmptyLines === "greedy" ? p.join("").trim() === "" : p.length === 1 && p[0].length === 0;
      }
      function S() {
        if (s && n && (z("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + h.DefaultDelimiter + "'"), n = !1), e.skipEmptyLines && (s.data = s.data.filter(function(o) {
          return !x(o);
        })), A()) {
          let o = function(b, O) {
            y(e.transformHeader) && (b = e.transformHeader(b, O)), c.push(b);
          };
          if (s)
            if (Array.isArray(s.data[0])) {
              for (var p = 0; A() && p < s.data.length; p++)
                s.data[p].forEach(o);
              s.data.splice(0, 1);
            } else
              s.data.forEach(o);
        }
        function g(o, b) {
          for (var O = e.header ? {} : [], m = 0; m < o.length; m++) {
            var k = m, _ = o[m], _ = ((M, d) => ((v) => (e.dynamicTypingFunction && e.dynamicTyping[v] === void 0 && (e.dynamicTyping[v] = e.dynamicTypingFunction(v)), (e.dynamicTyping[v] || e.dynamicTyping) === !0))(M) ? d === "true" || d === "TRUE" || d !== "false" && d !== "FALSE" && (((v) => {
              if (F.test(v) && (v = parseFloat(v), C < v && v < f))
                return 1;
            })(d) ? parseFloat(d) : j.test(d) ? new Date(d) : d === "" ? null : d) : d)(k = e.header ? m >= c.length ? "__parsed_extra" : c[m] : k, _ = e.transform ? e.transform(_, k) : _);
            k === "__parsed_extra" ? (O[k] = O[k] || [], O[k].push(_)) : O[k] = _;
          }
          return e.header && (m > c.length ? z("FieldMismatch", "TooManyFields", "Too many fields: expected " + c.length + " fields but parsed " + m, a + b) : m < c.length && z("FieldMismatch", "TooFewFields", "Too few fields: expected " + c.length + " fields but parsed " + m, a + b)), O;
        }
        var w;
        s && (e.header || e.dynamicTyping || e.transform) && (w = 1, !s.data.length || Array.isArray(s.data[0]) ? (s.data = s.data.map(g), w = s.data.length) : s.data = g(s.data, 0), e.header && s.meta && (s.meta.fields = c), a += w);
      }
      function A() {
        return e.header && c.length === 0;
      }
      function z(p, g, w, o) {
        p = { type: p, code: g, message: w }, o !== void 0 && (p.row = o), s.errors.push(p);
      }
      y(e.step) && (i = e.step, e.step = function(p) {
        s = p, A() ? S() : (S(), s.data.length !== 0 && (E += p.data.length, e.preview && E > e.preview ? r.abort() : (s.data = s.data[0], i(s, l))));
      }), this.parse = function(p, g, w) {
        var o = e.quoteChar || '"', o = (e.newline || (e.newline = this.guessLineEndings(p, o)), n = !1, e.delimiter ? y(e.delimiter) && (e.delimiter = e.delimiter(p), s.meta.delimiter = e.delimiter) : ((o = ((b, O, m, k, _) => {
          var M, d, v, W;
          _ = _ || [",", "	", "|", ";", h.RECORD_SEP, h.UNIT_SEP];
          for (var H = 0; H < _.length; H++) {
            for (var P, Y = _[H], D = 0, U = 0, I = 0, L = (v = void 0, new ne({ comments: k, delimiter: Y, newline: O, preview: 10 }).parse(b)), B = 0; B < L.data.length; B++)
              m && x(L.data[B]) ? I++ : (P = L.data[B].length, U += P, v === void 0 ? v = P : 0 < P && (D += Math.abs(P - v), v = P));
            0 < L.data.length && (U /= L.data.length - I), (d === void 0 || D <= d) && (W === void 0 || W < U) && 1.99 < U && (d = D, M = Y, W = U);
          }
          return { successful: !!(e.delimiter = M), bestDelimiter: M };
        })(p, e.newline, e.skipEmptyLines, e.comments, e.delimitersToGuess)).successful ? e.delimiter = o.bestDelimiter : (n = !0, e.delimiter = h.DefaultDelimiter), s.meta.delimiter = e.delimiter), se(e));
        return e.preview && e.header && o.preview++, t = p, r = new ne(o), s = r.parse(t, g, w), S(), T ? { meta: { paused: !0 } } : s || { meta: { paused: !1 } };
      }, this.paused = function() {
        return T;
      }, this.pause = function() {
        T = !0, r.abort(), t = y(e.chunk) ? "" : t.substring(r.getCharIndex());
      }, this.resume = function() {
        l.streamer._halted ? (T = !1, l.streamer.parseChunk(t, !0)) : setTimeout(l.resume, 3);
      }, this.aborted = function() {
        return u;
      }, this.abort = function() {
        u = !0, r.abort(), s.meta.aborted = !0, y(e.complete) && e.complete(s), t = "";
      }, this.guessLineEndings = function(b, o) {
        b = b.substring(0, 1048576);
        var o = new RegExp(Z(o) + "([^]*?)" + Z(o), "gm"), w = (b = b.replace(o, "")).split("\r"), o = b.split(`
`), b = 1 < o.length && o[0].length < w[0].length;
        if (w.length === 1 || b)
          return `
`;
        for (var O = 0, m = 0; m < w.length; m++)
          w[m][0] === `
` && O++;
        return O >= w.length / 2 ? `\r
` : "\r";
      };
    }
    function Z(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function ne(e) {
      var t = (e = e || {}).delimiter, r = e.newline, n = e.comments, i = e.step, f = e.preview, C = e.fastMode, F = null, j = !1, l = e.quoteChar == null ? '"' : e.quoteChar, E = l;
      if (e.escapeChar !== void 0 && (E = e.escapeChar), (typeof t != "string" || -1 < h.BAD_DELIMITERS.indexOf(t)) && (t = ","), n === t)
        throw new Error("Comment character same as delimiter");
      n === !0 ? n = "#" : (typeof n != "string" || -1 < h.BAD_DELIMITERS.indexOf(n)) && (n = !1), r !== `
` && r !== "\r" && r !== `\r
` && (r = `
`);
      var a = 0, T = !1;
      this.parse = function(u, c, s) {
        if (typeof u != "string")
          throw new Error("Input must be a string");
        var x = u.length, S = t.length, A = r.length, z = n.length, p = y(i), g = [], w = [], o = [], b = a = 0;
        if (!u)
          return D();
        if (C || C !== !1 && u.indexOf(l) === -1) {
          for (var O = u.split(r), m = 0; m < O.length; m++) {
            if (o = O[m], a += o.length, m !== O.length - 1)
              a += r.length;
            else if (s)
              return D();
            if (!n || o.substring(0, z) !== n) {
              if (p) {
                if (g = [], W(o.split(t)), U(), T)
                  return D();
              } else
                W(o.split(t));
              if (f && f <= m)
                return g = g.slice(0, f), D(!0);
            }
          }
          return D();
        }
        for (var k = u.indexOf(t, a), _ = u.indexOf(r, a), M = new RegExp(Z(E) + Z(l), "g"), d = u.indexOf(l, a); ; )
          if (u[a] === l)
            for (d = a, a++; ; ) {
              if ((d = u.indexOf(l, d + 1)) === -1)
                return s || w.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: g.length, index: a }), P();
              if (d === x - 1)
                return P(u.substring(a, d).replace(M, l));
              if (l === E && u[d + 1] === E)
                d++;
              else if (l === E || d === 0 || u[d - 1] !== E) {
                k !== -1 && k < d + 1 && (k = u.indexOf(t, d + 1));
                var v = H((_ = _ !== -1 && _ < d + 1 ? u.indexOf(r, d + 1) : _) === -1 ? k : Math.min(k, _));
                if (u.substr(d + 1 + v, S) === t) {
                  o.push(u.substring(a, d).replace(M, l)), u[a = d + 1 + v + S] !== l && (d = u.indexOf(l, a)), k = u.indexOf(t, a), _ = u.indexOf(r, a);
                  break;
                }
                if (v = H(_), u.substring(d + 1 + v, d + 1 + v + A) === r) {
                  if (o.push(u.substring(a, d).replace(M, l)), Y(d + 1 + v + A), k = u.indexOf(t, a), d = u.indexOf(l, a), p && (U(), T))
                    return D();
                  if (f && g.length >= f)
                    return D(!0);
                  break;
                }
                w.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: g.length, index: a }), d++;
              }
            }
          else if (n && o.length === 0 && u.substring(a, a + z) === n) {
            if (_ === -1)
              return D();
            a = _ + A, _ = u.indexOf(r, a), k = u.indexOf(t, a);
          } else if (k !== -1 && (k < _ || _ === -1))
            o.push(u.substring(a, k)), a = k + S, k = u.indexOf(t, a);
          else {
            if (_ === -1)
              break;
            if (o.push(u.substring(a, _)), Y(_ + A), p && (U(), T))
              return D();
            if (f && g.length >= f)
              return D(!0);
          }
        return P();
        function W(I) {
          g.push(I), b = a;
        }
        function H(I) {
          var L = 0;
          return L = I !== -1 && (I = u.substring(d + 1, I)) && I.trim() === "" ? I.length : L;
        }
        function P(I) {
          return s || (I === void 0 && (I = u.substring(a)), o.push(I), a = x, W(o), p && U()), D();
        }
        function Y(I) {
          a = I, W(o), o = [], _ = u.indexOf(r, a);
        }
        function D(I) {
          if (e.header && !c && g.length && !j) {
            var L = g[0], B = {}, ae = new Set(L);
            let fe = !1;
            for (let Q = 0; Q < L.length; Q++) {
              let q = L[Q];
              if (B[q = y(e.transformHeader) ? e.transformHeader(q, Q) : q]) {
                let X, le = B[q];
                for (; X = q + "_" + le, le++, ae.has(X); )
                  ;
                ae.add(X), L[Q] = X, B[q]++, fe = !0, (F = F === null ? {} : F)[X] = q;
              } else
                B[q] = 1, L[Q] = q;
              ae.add(q);
            }
            fe && console.warn("Duplicate headers found and renamed."), j = !0;
          }
          return { data: g, errors: w, meta: { delimiter: t, linebreak: r, aborted: T, truncated: !!I, cursor: b + (c || 0), renamedHeaders: F } };
        }
        function U() {
          i(D()), g = [], w = [];
        }
      }, this.abort = function() {
        T = !0;
      }, this.getCharIndex = function() {
        return a;
      };
    }
    function ge(e) {
      var t = e.data, r = V[t.workerId], n = !1;
      if (t.error)
        r.userError(t.error, t.file);
      else if (t.results && t.results.data) {
        var i = { abort: function() {
          n = !0, ue(t.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: de, resume: de };
        if (y(r.userStep)) {
          for (var f = 0; f < t.results.data.length && (r.userStep({ data: t.results.data[f], errors: t.results.errors, meta: t.results.meta }, i), !n); f++)
            ;
          delete t.results;
        } else
          y(r.userChunk) && (r.userChunk(t.results, i, t.file), delete t.results);
      }
      t.finished && !n && ue(t.workerId, t.results);
    }
    function ue(e, t) {
      var r = V[e];
      y(r.userComplete) && r.userComplete(t), r.terminate(), delete V[e];
    }
    function de() {
      throw new Error("Not implemented.");
    }
    function se(e) {
      if (typeof e != "object" || e === null)
        return e;
      var t, r = Array.isArray(e) ? [] : {};
      for (t in e)
        r[t] = se(e[t]);
      return r;
    }
    function K(e, t) {
      return function() {
        e.apply(t, arguments);
      };
    }
    function y(e) {
      return typeof e == "function";
    }
    return h.parse = function(e, t) {
      var r = (t = t || {}).dynamicTyping || !1;
      if (y(r) && (t.dynamicTypingFunction = r, r = {}), t.dynamicTyping = r, t.transform = !!y(t.transform) && t.transform, !t.worker || !h.WORKERS_SUPPORTED)
        return r = null, h.NODE_STREAM_INPUT, typeof e == "string" ? (e = ((n) => n.charCodeAt(0) !== 65279 ? n : n.slice(1))(e), r = new (t.download ? ee : G)(t)) : e.readable === !0 && y(e.read) && y(e.on) ? r = new re(t) : (R.File && e instanceof File || e instanceof Object) && (r = new te(t)), r.stream(e);
      (r = (() => {
        var n;
        return !!h.WORKERS_SUPPORTED && (n = (() => {
          var i = R.URL || R.webkitURL || null, f = oe.toString();
          return h.BLOB_URL || (h.BLOB_URL = i.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", f, ")();"], { type: "text/javascript" })));
        })(), (n = new R.Worker(n)).onmessage = ge, n.id = _e++, V[n.id] = n);
      })()).userStep = t.step, r.userChunk = t.chunk, r.userComplete = t.complete, r.userError = t.error, t.step = y(t.step), t.chunk = y(t.chunk), t.complete = y(t.complete), t.error = y(t.error), delete t.worker, r.postMessage({ input: e, config: t, workerId: r.id });
    }, h.unparse = function(e, t) {
      var r = !1, n = !0, i = ",", f = `\r
`, C = '"', F = C + C, j = !1, l = null, E = !1, a = ((() => {
        if (typeof t == "object") {
          if (typeof t.delimiter != "string" || h.BAD_DELIMITERS.filter(function(c) {
            return t.delimiter.indexOf(c) !== -1;
          }).length || (i = t.delimiter), typeof t.quotes != "boolean" && typeof t.quotes != "function" && !Array.isArray(t.quotes) || (r = t.quotes), typeof t.skipEmptyLines != "boolean" && typeof t.skipEmptyLines != "string" || (j = t.skipEmptyLines), typeof t.newline == "string" && (f = t.newline), typeof t.quoteChar == "string" && (C = t.quoteChar), typeof t.header == "boolean" && (n = t.header), Array.isArray(t.columns)) {
            if (t.columns.length === 0)
              throw new Error("Option columns is empty");
            l = t.columns;
          }
          t.escapeChar !== void 0 && (F = t.escapeChar + C), t.escapeFormulae instanceof RegExp ? E = t.escapeFormulae : typeof t.escapeFormulae == "boolean" && t.escapeFormulae && (E = /^[=+\-@\t\r].*$/);
        }
      })(), new RegExp(Z(C), "g"));
      if (typeof e == "string" && (e = JSON.parse(e)), Array.isArray(e)) {
        if (!e.length || Array.isArray(e[0]))
          return T(null, e, j);
        if (typeof e[0] == "object")
          return T(l || Object.keys(e[0]), e, j);
      } else if (typeof e == "object")
        return typeof e.data == "string" && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || l), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : typeof e.data[0] == "object" ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || typeof e.data[0] == "object" || (e.data = [e.data])), T(e.fields || [], e.data || [], j);
      throw new Error("Unable to serialize unrecognized input");
      function T(c, s, x) {
        var S = "", A = (typeof c == "string" && (c = JSON.parse(c)), typeof s == "string" && (s = JSON.parse(s)), Array.isArray(c) && 0 < c.length), z = !Array.isArray(s[0]);
        if (A && n) {
          for (var p = 0; p < c.length; p++)
            0 < p && (S += i), S += u(c[p], p);
          0 < s.length && (S += f);
        }
        for (var g = 0; g < s.length; g++) {
          var w = (A ? c : s[g]).length, o = !1, b = A ? Object.keys(s[g]).length === 0 : s[g].length === 0;
          if (x && !A && (o = x === "greedy" ? s[g].join("").trim() === "" : s[g].length === 1 && s[g][0].length === 0), x === "greedy" && A) {
            for (var O = [], m = 0; m < w; m++) {
              var k = z ? c[m] : m;
              O.push(s[g][k]);
            }
            o = O.join("").trim() === "";
          }
          if (!o) {
            for (var _ = 0; _ < w; _++) {
              0 < _ && !b && (S += i);
              var M = A && z ? c[_] : _;
              S += u(s[g][M], _);
            }
            g < s.length - 1 && (!x || 0 < w && !b) && (S += f);
          }
        }
        return S;
      }
      function u(c, s) {
        var x, S;
        return c == null ? "" : c.constructor === Date ? JSON.stringify(c).slice(1, 25) : (S = !1, E && typeof c == "string" && E.test(c) && (c = "'" + c, S = !0), x = c.toString().replace(a, F), (S = S || r === !0 || typeof r == "function" && r(c, s) || Array.isArray(r) && r[s] || ((A, z) => {
          for (var p = 0; p < z.length; p++)
            if (-1 < A.indexOf(z[p]))
              return !0;
          return !1;
        })(x, h.BAD_DELIMITERS) || -1 < x.indexOf(i) || x.charAt(0) === " " || x.charAt(x.length - 1) === " ") ? C + x + C : x);
      }
    }, h.RECORD_SEP = String.fromCharCode(30), h.UNIT_SEP = String.fromCharCode(31), h.BYTE_ORDER_MARK = "\uFEFF", h.BAD_DELIMITERS = ["\r", `
`, '"', h.BYTE_ORDER_MARK], h.WORKERS_SUPPORTED = !$ && !!R.Worker, h.NODE_STREAM_INPUT = 1, h.LocalChunkSize = 10485760, h.RemoteChunkSize = 5242880, h.DefaultDelimiter = ",", h.Parser = ne, h.ParserHandle = he, h.NetworkStreamer = ee, h.FileStreamer = te, h.StringStreamer = G, h.ReadableStreamStreamer = re, R.jQuery && ((J = R.jQuery).fn.parse = function(e) {
      var t = e.config || {}, r = [];
      return this.each(function(f) {
        if (!(J(this).prop("tagName").toUpperCase() === "INPUT" && J(this).attr("type").toLowerCase() === "file" && R.FileReader) || !this.files || this.files.length === 0)
          return !0;
        for (var C = 0; C < this.files.length; C++)
          r.push({ file: this.files[C], inputElem: this, instanceConfig: J.extend({}, t) });
      }), n(), this;
      function n() {
        if (r.length === 0)
          y(e.complete) && e.complete();
        else {
          var f, C, F, j, l = r[0];
          if (y(e.before)) {
            var E = e.before(l.file, l.inputElem);
            if (typeof E == "object") {
              if (E.action === "abort")
                return f = "AbortError", C = l.file, F = l.inputElem, j = E.reason, void (y(e.error) && e.error({ name: f }, C, F, j));
              if (E.action === "skip")
                return void i();
              typeof E.config == "object" && (l.instanceConfig = J.extend(l.instanceConfig, E.config));
            } else if (E === "skip")
              return void i();
          }
          var a = l.instanceConfig.complete;
          l.instanceConfig.complete = function(T) {
            y(a) && a(T, l.file, l.inputElem), i();
          }, h.parse(l.file, l.instanceConfig);
        }
      }
      function i() {
        r.splice(0, 1), n();
      }
    }), ie && (R.onmessage = function(e) {
      e = e.data, h.WORKER_ID === void 0 && e && (h.WORKER_ID = e.workerId), typeof e.input == "string" ? R.postMessage({ workerId: h.WORKER_ID, results: h.parse(e.input, e.config), finished: !0 }) : (R.File && e.input instanceof File || e.input instanceof Object) && (e = h.parse(e.input, e.config)) && R.postMessage({ workerId: h.WORKER_ID, results: e, finished: !0 });
    }), (ee.prototype = Object.create(N.prototype)).constructor = ee, (te.prototype = Object.create(N.prototype)).constructor = te, (G.prototype = Object.create(G.prototype)).constructor = G, (re.prototype = Object.create(N.prototype)).constructor = re, h;
  });
})(ce);
var ke = ce.exports;
const we = /* @__PURE__ */ ye(ke);
export {
  we as P
};
