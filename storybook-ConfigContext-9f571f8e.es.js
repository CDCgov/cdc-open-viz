import { j as Cs, k as Wu, m as Hu, o as Kt, p as As, i as Ts, q as qu, G as Kn, c as zt } from "./storybook-linear-d485c82c.es.js";
import { c as jt } from "./storybook-index-80cf478c.es.js";
import { P as F } from "./storybook-index-43433e35.es.js";
import { r as O, R } from "./storybook-index-f2fed736.es.js";
import { a as _l, g as Yu } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { j as y, a as k, F as mt } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { l as Ku, _ as Re } from "./storybook-lodash-a4231e1c.es.js";
import { T as Xu } from "./storybook-Text-0ce4510d.es.js";
import { d as Ps, m as Zu, a as Xn } from "./storybook-Icon-e250778e.es.js";
import { S as mn, T as Is } from "./storybook-FootnotesStandAlone-282ea454.es.js";
import { T as Lt } from "./storybook-Tooltip-5b6ee371.es.js";
import { h as qo, f as Ju } from "./storybook-Filters-1bcf5dff.es.js";
import { r as Ri, R as Qu } from "./storybook-index-8cf78369.es.js";
import { _ as En } from "./storybook-extends-0a3e0827.es.js";
import { i as Rs } from "./storybook-tiny-invariant-9f3340e2.es.js";
import { M as ed } from "./storybook-MultiSelect-2a170cbd.es.js";
import "./storybook-InputSelect-4074d1ac.es.js";
var Ge = typeof globalThis < "u" && globalThis || typeof self < "u" && self || // eslint-disable-next-line no-undef
typeof global < "u" && global || {}, Qe = {
  searchParams: "URLSearchParams" in Ge,
  iterable: "Symbol" in Ge && "iterator" in Symbol,
  blob: "FileReader" in Ge && "Blob" in Ge && function() {
    try {
      return new Blob(), !0;
    } catch {
      return !1;
    }
  }(),
  formData: "FormData" in Ge,
  arrayBuffer: "ArrayBuffer" in Ge
};
function td(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (Qe.arrayBuffer)
  var nd = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], rd = ArrayBuffer.isView || function(e) {
    return e && nd.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function An(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function Mi(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function Li(e) {
  var t = {
    next: function() {
      var n = e.shift();
      return { done: n === void 0, value: n };
    }
  };
  return Qe.iterable && (t[Symbol.iterator] = function() {
    return t;
  }), t;
}
function Me(e) {
  this.map = {}, e instanceof Me ? e.forEach(function(t, n) {
    this.append(n, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    if (t.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
Me.prototype.append = function(e, t) {
  e = An(e), t = Mi(t);
  var n = this.map[e];
  this.map[e] = n ? n + ", " + t : t;
};
Me.prototype.delete = function(e) {
  delete this.map[An(e)];
};
Me.prototype.get = function(e) {
  return e = An(e), this.has(e) ? this.map[e] : null;
};
Me.prototype.has = function(e) {
  return this.map.hasOwnProperty(An(e));
};
Me.prototype.set = function(e, t) {
  this.map[An(e)] = Mi(t);
};
Me.prototype.forEach = function(e, t) {
  for (var n in this.map)
    this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
};
Me.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push(n);
  }), Li(e);
};
Me.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), Li(e);
};
Me.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push([n, t]);
  }), Li(e);
};
Qe.iterable && (Me.prototype[Symbol.iterator] = Me.prototype.entries);
function bo(e) {
  if (!e._noBody) {
    if (e.bodyUsed)
      return Promise.reject(new TypeError("Already read"));
    e.bodyUsed = !0;
  }
}
function Dl(e) {
  return new Promise(function(t, n) {
    e.onload = function() {
      t(e.result);
    }, e.onerror = function() {
      n(e.error);
    };
  });
}
function od(e) {
  var t = new FileReader(), n = Dl(t);
  return t.readAsArrayBuffer(e), n;
}
function id(e) {
  var t = new FileReader(), n = Dl(t), r = /charset=([A-Za-z0-9_-]+)/.exec(e.type), o = r ? r[1] : "utf-8";
  return t.readAsText(e, o), n;
}
function sd(e) {
  for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
    n[r] = String.fromCharCode(t[r]);
  return n.join("");
}
function Ms(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function Sl() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : Qe.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : Qe.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : Qe.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : Qe.arrayBuffer && Qe.blob && td(e) ? (this._bodyArrayBuffer = Ms(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : Qe.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || rd(e)) ? this._bodyArrayBuffer = Ms(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : Qe.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, Qe.blob && (this.blob = function() {
    var e = bo(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return Promise.resolve(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as blob");
    return Promise.resolve(new Blob([this._bodyText]));
  }), this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var e = bo(this);
      return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
        this._bodyArrayBuffer.buffer.slice(
          this._bodyArrayBuffer.byteOffset,
          this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
        )
      ) : Promise.resolve(this._bodyArrayBuffer));
    } else {
      if (Qe.blob)
        return this.blob().then(od);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var e = bo(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return id(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(sd(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, Qe.formData && (this.formData = function() {
    return this.text().then(cd);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var ad = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function ld(e) {
  var t = e.toUpperCase();
  return ad.indexOf(t) > -1 ? t : e;
}
function on(e, t) {
  if (!(this instanceof on))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var n = t.body;
  if (e instanceof on) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new Me(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !n && e._bodyInit != null && (n = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new Me(t.headers)), this.method = ld(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
    if ("AbortController" in Ge) {
      var i = new AbortController();
      return i.signal;
    }
  }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && n)
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(n), (this.method === "GET" || this.method === "HEAD") && (t.cache === "no-store" || t.cache === "no-cache")) {
    var r = /([?&])_=[^&]*/;
    if (r.test(this.url))
      this.url = this.url.replace(r, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
    else {
      var o = /\?/;
      this.url += (o.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
    }
  }
}
on.prototype.clone = function() {
  return new on(this, { body: this._bodyInit });
};
function cd(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(n) {
    if (n) {
      var r = n.split("="), o = r.shift().replace(/\+/g, " "), i = r.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(o), decodeURIComponent(i));
    }
  }), t;
}
function ud(e) {
  var t = new Me(), n = e.replace(/\r?\n[\t ]+/g, " ");
  return n.split("\r").map(function(r) {
    return r.indexOf(`
`) === 0 ? r.substr(1, r.length) : r;
  }).forEach(function(r) {
    var o = r.split(":"), i = o.shift().trim();
    if (i) {
      var s = o.join(":").trim();
      try {
        t.append(i, s);
      } catch (a) {
        console.warn("Response " + a.message);
      }
    }
  }), t;
}
Sl.call(on.prototype);
function Ct(e, t) {
  if (!(this instanceof Ct))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new Me(t.headers), this.url = t.url || "", this._initBody(e);
}
Sl.call(Ct.prototype);
Ct.prototype.clone = function() {
  return new Ct(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Me(this.headers),
    url: this.url
  });
};
Ct.error = function() {
  var e = new Ct(null, { status: 200, statusText: "" });
  return e.ok = !1, e.status = 0, e.type = "error", e;
};
var dd = [301, 302, 303, 307, 308];
Ct.redirect = function(e, t) {
  if (dd.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new Ct(null, { status: t, headers: { location: e } });
};
var en = Ge.DOMException;
try {
  new en();
} catch {
  en = function(t, n) {
    this.message = t, this.name = n;
    var r = Error(t);
    this.stack = r.stack;
  }, en.prototype = Object.create(Error.prototype), en.prototype.constructor = en;
}
function Ol(e, t) {
  return new Promise(function(n, r) {
    var o = new on(e, t);
    if (o.signal && o.signal.aborted)
      return r(new en("Aborted", "AbortError"));
    var i = new XMLHttpRequest();
    function s() {
      i.abort();
    }
    i.onload = function() {
      var c = {
        statusText: i.statusText,
        headers: ud(i.getAllResponseHeaders() || "")
      };
      o.url.indexOf("file://") === 0 && (i.status < 200 || i.status > 599) ? c.status = 200 : c.status = i.status, c.url = "responseURL" in i ? i.responseURL : c.headers.get("X-Request-URL");
      var d = "response" in i ? i.response : i.responseText;
      setTimeout(function() {
        n(new Ct(d, c));
      }, 0);
    }, i.onerror = function() {
      setTimeout(function() {
        r(new TypeError("Network request failed"));
      }, 0);
    }, i.ontimeout = function() {
      setTimeout(function() {
        r(new TypeError("Network request timed out"));
      }, 0);
    }, i.onabort = function() {
      setTimeout(function() {
        r(new en("Aborted", "AbortError"));
      }, 0);
    };
    function a(c) {
      try {
        return c === "" && Ge.location.href ? Ge.location.href : c;
      } catch {
        return c;
      }
    }
    if (i.open(o.method, a(o.url), !0), o.credentials === "include" ? i.withCredentials = !0 : o.credentials === "omit" && (i.withCredentials = !1), "responseType" in i && (Qe.blob ? i.responseType = "blob" : Qe.arrayBuffer && (i.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof Me || Ge.Headers && t.headers instanceof Ge.Headers)) {
      var l = [];
      Object.getOwnPropertyNames(t.headers).forEach(function(c) {
        l.push(An(c)), i.setRequestHeader(c, Mi(t.headers[c]));
      }), o.headers.forEach(function(c, d) {
        l.indexOf(d) === -1 && i.setRequestHeader(d, c);
      });
    } else
      o.headers.forEach(function(c, d) {
        i.setRequestHeader(d, c);
      });
    o.signal && (o.signal.addEventListener("abort", s), i.onreadystatechange = function() {
      i.readyState === 4 && o.signal.removeEventListener("abort", s);
    }), i.send(typeof o._bodyInit > "u" ? null : o._bodyInit);
  });
}
Ol.polyfill = !0;
Ge.fetch || (Ge.fetch = Ol, Ge.Headers = Me, Ge.Request = on, Ge.Response = Ct);
function m0(e, t) {
  let n, r;
  if (t === void 0)
    for (const o of e)
      o != null && (n === void 0 ? o >= o && (n = r = o) : (n > o && (n = o), r < o && (r = o)));
  else {
    let o = -1;
    for (let i of e)
      (i = t(i, ++o, e)) != null && (n === void 0 ? i >= i && (n = r = i) : (n > i && (n = i), r < i && (r = i)));
  }
  return [n, r];
}
function fd(e = Cs) {
  if (e === Cs)
    return xl;
  if (typeof e != "function")
    throw new TypeError("compare is not a function");
  return (t, n) => {
    const r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function xl(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
function Ls(e, t) {
  let n;
  if (t === void 0)
    for (const r of e)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let o of e)
      (o = t(o, ++r, e)) != null && (n < o || n === void 0 && o >= o) && (n = o);
  }
  return n;
}
function ks(e, t) {
  let n;
  if (t === void 0)
    for (const r of e)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let o of e)
      (o = t(o, ++r, e)) != null && (n > o || n === void 0 && o >= o) && (n = o);
  }
  return n;
}
function Nl(e, t, n = 0, r = 1 / 0, o) {
  if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r))
    return e;
  for (o = o === void 0 ? xl : fd(o); r > n; ) {
    if (r - n > 600) {
      const l = r - n + 1, c = t - n + 1, d = Math.log(l), u = 0.5 * Math.exp(2 * d / 3), f = 0.5 * Math.sqrt(d * u * (l - u) / l) * (c - l / 2 < 0 ? -1 : 1), p = Math.max(n, Math.floor(t - c * u / l + f)), h = Math.min(r, Math.floor(t + (l - c) * u / l + f));
      Nl(e, t, p, h, o);
    }
    const i = e[t];
    let s = n, a = r;
    for (Rn(e, n, t), o(e[r], i) > 0 && Rn(e, n, r); s < a; ) {
      for (Rn(e, s, a), ++s, --a; o(e[s], i) < 0; )
        ++s;
      for (; o(e[a], i) > 0; )
        --a;
    }
    o(e[n], i) === 0 ? Rn(e, n, a) : (++a, Rn(e, a, r)), a <= t && (n = a + 1), t <= a && (r = a - 1);
  }
  return e;
}
function Rn(e, t, n) {
  const r = e[t];
  e[t] = e[n], e[n] = r;
}
function g0(e, t, n) {
  if (e = Float64Array.from(Wu(e, n)), !(!(r = e.length) || isNaN(t = +t))) {
    if (t <= 0 || r < 2)
      return ks(e);
    if (t >= 1)
      return Ls(e);
    var r, o = (r - 1) * t, i = Math.floor(o), s = Ls(Nl(e, i).subarray(0, i + 1)), a = ks(e.subarray(i + 1));
    return s + (a - s) * (o - i);
  }
}
function v0(e, t, n = Hu) {
  if (!(!(r = e.length) || isNaN(t = +t))) {
    if (t <= 0 || r < 2)
      return +n(e[0], 0, e);
    if (t >= 1)
      return +n(e[r - 1], r - 1, e);
    var r, o = (r - 1) * t, i = Math.floor(o), s = +n(e[i], i, e), a = +n(e[i + 1], i + 1, e);
    return s + (a - s) * (o - i);
  }
}
var Yo = Math.PI, Ko = 2 * Yo, Xt = 1e-6, pd = Ko - Xt;
function Xo() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Cl() {
  return new Xo();
}
Xo.prototype = Cl.prototype = {
  constructor: Xo,
  moveTo: function(e, t) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(e, t) {
    this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
  },
  quadraticCurveTo: function(e, t, n, r) {
    this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
  },
  bezierCurveTo: function(e, t, n, r, o, i) {
    this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +o) + "," + (this._y1 = +i);
  },
  arcTo: function(e, t, n, r, o) {
    e = +e, t = +t, n = +n, r = +r, o = +o;
    var i = this._x1, s = this._y1, a = n - e, l = r - t, c = i - e, d = s - t, u = c * c + d * d;
    if (o < 0)
      throw new Error("negative radius: " + o);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (u > Xt)
      if (!(Math.abs(d * a - l * c) > Xt) || !o)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var f = n - i, p = r - s, h = a * a + l * l, m = f * f + p * p, g = Math.sqrt(h), _ = Math.sqrt(u), S = o * Math.tan((Yo - Math.acos((h + u - m) / (2 * g * _))) / 2), v = S / _, b = S / g;
        Math.abs(v - 1) > Xt && (this._ += "L" + (e + v * c) + "," + (t + v * d)), this._ += "A" + o + "," + o + ",0,0," + +(d * f > c * p) + "," + (this._x1 = e + b * a) + "," + (this._y1 = t + b * l);
      }
  },
  arc: function(e, t, n, r, o, i) {
    e = +e, t = +t, n = +n, i = !!i;
    var s = n * Math.cos(r), a = n * Math.sin(r), l = e + s, c = t + a, d = 1 ^ i, u = i ? r - o : o - r;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + l + "," + c : (Math.abs(this._x1 - l) > Xt || Math.abs(this._y1 - c) > Xt) && (this._ += "L" + l + "," + c), n && (u < 0 && (u = u % Ko + Ko), u > pd ? this._ += "A" + n + "," + n + ",0,1," + d + "," + (e - s) + "," + (t - a) + "A" + n + "," + n + ",0,1," + d + "," + (this._x1 = l) + "," + (this._y1 = c) : u > Xt && (this._ += "A" + n + "," + n + ",0," + +(u >= Yo) + "," + d + "," + (this._x1 = e + n * Math.cos(o)) + "," + (this._y1 = t + n * Math.sin(o))));
  },
  rect: function(e, t, n, r) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function Nr(e) {
  return function() {
    return e;
  };
}
var y0 = Math.abs, b0 = Math.atan2, E0 = Math.cos, w0 = Math.max, _0 = Math.min, D0 = Math.sin, S0 = Math.sqrt, O0 = 1e-12, to = Math.PI, js = to / 2, hd = 2 * to;
function x0(e) {
  return e > 1 ? 0 : e < -1 ? to : Math.acos(e);
}
function N0(e) {
  return e >= 1 ? js : e <= -1 ? -js : Math.asin(e);
}
const Al = {
  draw: function(e, t) {
    var n = Math.sqrt(t / to);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, hd);
  }
};
var Tl = Math.sqrt(1 / 3), md = Tl * 2;
const gd = {
  draw: function(e, t) {
    var n = Math.sqrt(t / md), r = n * Tl;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, vd = {
  draw: function(e, t) {
    var n = Math.sqrt(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
};
var Eo = Math.sqrt(3);
const yd = {
  draw: function(e, t) {
    var n = -Math.sqrt(t / (Eo * 3));
    e.moveTo(0, n * 2), e.lineTo(-Eo * n, -n), e.lineTo(Eo * n, -n), e.closePath();
  }
};
function no() {
  var e = Nr(Al), t = Nr(64), n = null;
  function r() {
    var o;
    if (n || (n = o = Cl()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), o)
      return n = null, o + "" || null;
  }
  return r.type = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Nr(o), r) : e;
  }, r.size = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Nr(+o), r) : t;
  }, r.context = function(o) {
    return arguments.length ? (n = o ?? null, r) : n;
  }, r;
}
function Bs(e, t) {
  let n;
  return (...r) => {
    window.clearTimeout(n), n = window.setTimeout(() => e(...r), t);
  };
}
function bd({ debounce: e, scroll: t, polyfill: n, offsetSize: r } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const o = n || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!o)
    throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [i, s] = O.useState({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), a = O.useRef({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: i, orientationHandler: null }), l = e ? typeof e == "number" ? e : e.scroll : null, c = e ? typeof e == "number" ? e : e.resize : null, d = O.useRef(!1);
  O.useEffect(() => (d.current = !0, () => void (d.current = !1)));
  const [u, f, p] = O.useMemo(() => {
    const _ = () => {
      if (!a.current.element)
        return;
      const { left: S, top: v, width: b, height: E, bottom: x, right: C, x: N, y: G } = a.current.element.getBoundingClientRect(), T = { left: S, top: v, width: b, height: E, bottom: x, right: C, x: N, y: G };
      a.current.element instanceof HTMLElement && r && (T.height = a.current.element.offsetHeight, T.width = a.current.element.offsetWidth), Object.freeze(T), d.current && !Dd(a.current.lastBounds, T) && s(a.current.lastBounds = T);
    };
    return [_, c ? Bs(_, c) : _, l ? Bs(_, l) : _];
  }, [s, r, l, c]);
  function h() {
    a.current.scrollContainers && (a.current.scrollContainers.forEach((_) => _.removeEventListener("scroll", p, !0)), a.current.scrollContainers = null), a.current.resizeObserver && (a.current.resizeObserver.disconnect(), a.current.resizeObserver = null), a.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", a.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", a.current.orientationHandler));
  }
  function m() {
    a.current.element && (a.current.resizeObserver = new o(p), a.current.resizeObserver.observe(a.current.element), t && a.current.scrollContainers && a.current.scrollContainers.forEach((_) => _.addEventListener("scroll", p, { capture: !0, passive: !0 })), a.current.orientationHandler = () => {
      p();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", a.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", a.current.orientationHandler));
  }
  const g = (_) => {
    !_ || _ === a.current.element || (h(), a.current.element = _, a.current.scrollContainers = Pl(_), m());
  };
  return wd(p, !!t), Ed(f), O.useEffect(() => {
    h(), m();
  }, [t, p, f]), O.useEffect(() => h, []), [g, i, u];
}
function Ed(e) {
  O.useEffect(() => {
    const t = e;
    return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
  }, [e]);
}
function wd(e, t) {
  O.useEffect(() => {
    if (t) {
      const n = e;
      return window.addEventListener("scroll", n, { capture: !0, passive: !0 }), () => void window.removeEventListener("scroll", n, !0);
    }
  }, [e, t]);
}
function Pl(e) {
  const t = [];
  if (!e || e === document.body)
    return t;
  const { overflow: n, overflowX: r, overflowY: o } = window.getComputedStyle(e);
  return [n, r, o].some((i) => i === "auto" || i === "scroll") && t.push(e), [...t, ...Pl(e.parentElement)];
}
const _d = ["x", "y", "top", "bottom", "left", "right", "width", "height"], Dd = (e, t) => _d.every((n) => e[n] === t[n]);
var tr = /* @__PURE__ */ function() {
  function e(n) {
    var r = n.x, o = r === void 0 ? 0 : r, i = n.y, s = i === void 0 ? 0 : i;
    this.x = 0, this.y = 0, this.x = o, this.y = s;
  }
  var t = e.prototype;
  return t.value = function() {
    return {
      x: this.x,
      y: this.y
    };
  }, t.toArray = function() {
    return [this.x, this.y];
  }, e;
}();
function Sd(e, t) {
  return new tr({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function Od(e, t) {
  return new tr({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: tr,
  subtractPoints: Od,
  sumPoints: Sd
}, Symbol.toStringTag, { value: "Module" }));
function Nd(e) {
  return !!e && e instanceof Element;
}
function Cd(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function Ad(e) {
  return !!e && "createSVGPoint" in e;
}
function Td(e) {
  return !!e && "getScreenCTM" in e;
}
function Pd(e) {
  return !!e && "changedTouches" in e;
}
function Id(e) {
  return !!e && "clientX" in e;
}
function Rd(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function Zn() {
  return Zn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Zn.apply(this, arguments);
}
var wo = {
  x: 0,
  y: 0
};
function Md(e) {
  if (!e)
    return Zn({}, wo);
  if (Pd(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : Zn({}, wo);
  if (Id(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : Zn({}, wo);
}
function Zo(e, t) {
  if (!e || !t)
    return null;
  var n = Md(t), r = Cd(e) ? e.ownerSVGElement : e, o = Td(r) ? r.getScreenCTM() : null;
  if (Ad(r) && o) {
    var i = r.createSVGPoint();
    return i.x = n.x, i.y = n.y, i = i.matrixTransform(o.inverse()), new tr({
      x: i.x,
      y: i.y
    });
  }
  var s = e.getBoundingClientRect();
  return new tr({
    x: n.x - s.left - e.clientLeft,
    y: n.y - s.top - e.clientTop
  });
}
function Ld(e, t) {
  if (Nd(e) && t)
    return Zo(e, t);
  if (Rd(e)) {
    var n = e, r = n.target;
    if (r)
      return Zo(r, n);
  }
  return null;
}
const kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: Ld,
  touchPoint: Zo
}, Symbol.toStringTag, { value: "Module" })), C0 = 18, jd = getComputedStyle(document.documentElement).getPropertyValue("--cool-gray-90").trim(), Jn = jd, A0 = 350;
var Vs = 180 / Math.PI, Jo = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Il(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Vs,
    skewX: Math.atan(l) * Vs,
    scaleX: s,
    scaleY: a
  };
}
var Cr;
function Bd(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Jo : Il(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Vd(e) {
  return e == null || (Cr || (Cr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Cr.setAttribute("transform", e), !(e = Cr.transform.baseVal.consolidate())) ? Jo : (e = e.matrix, Il(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Rl(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, u, f, p, h) {
    if (c !== u || d !== f) {
      var m = p.push("translate(", null, t, null, n);
      h.push({ i: m - 4, x: Kt(c, u) }, { i: m - 2, x: Kt(d, f) });
    } else
      (u || f) && p.push("translate(" + u + t + f + n);
  }
  function s(c, d, u, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: u.push(o(u) + "rotate(", null, r) - 2, x: Kt(c, d) })) : d && u.push(o(u) + "rotate(" + d + r);
  }
  function a(c, d, u, f) {
    c !== d ? f.push({ i: u.push(o(u) + "skewX(", null, r) - 2, x: Kt(c, d) }) : d && u.push(o(u) + "skewX(" + d + r);
  }
  function l(c, d, u, f, p, h) {
    if (c !== u || d !== f) {
      var m = p.push(o(p) + "scale(", null, ",", null, ")");
      h.push({ i: m - 4, x: Kt(c, u) }, { i: m - 2, x: Kt(d, f) });
    } else
      (u !== 1 || f !== 1) && p.push(o(p) + "scale(" + u + "," + f + ")");
  }
  return function(c, d) {
    var u = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, u, f), s(c.rotate, d.rotate, u, f), a(c.skewX, d.skewX, u, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, u, f), c = d = null, function(p) {
      for (var h = -1, m = f.length, g; ++h < m; )
        u[(g = f[h]).i] = g.x(p);
      return u.join("");
    };
  };
}
var $d = Rl(Bd, "px, ", "px)", "deg)"), Fd = Rl(Vd, ", ", ")", ")");
const Ml = 4.5, Gd = 3.5, T0 = (e, t) => {
  if (t) {
    if (jt.contrast(e, t) < Ml)
      switch (e) {
        case "#FFF":
          return Jn;
        case Jn:
          return "#FFF";
        default:
          return e;
      }
    return e;
  }
}, P0 = (e, t) => !jt.valid(e) || !jt.valid(t) ? !1 : jt.contrast(e, t) >= Gd, I0 = (e, t) => !jt.valid(e) || !jt.valid(t) ? !1 : jt.contrast(e, t), R0 = (e) => {
  const t = "#ffffff";
  return !jt.valid(e) || jt.contrast(Jn, e) >= Ml ? { textColor: Jn, strokeColor: t } : { textColor: t, strokeColor: Jn };
};
var zd = { value: () => {
} };
function Ll() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Lr(n);
}
function Lr(e) {
  this._ = e;
}
function Ud(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Lr.prototype = Ll.prototype = {
  constructor: Lr,
  on: function(e, t) {
    var n = this._, r = Ud(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; )
        if ((o = (e = r[i]).type) && (o = Wd(n[o], e.name)))
          return o;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type)
        n[o] = $s(n[o], e.name, t);
      else if (t == null)
        for (o in n)
          n[o] = $s(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new Lr(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0)
      for (var n = new Array(o), r = 0, o, i; r < o; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r)
      i[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o)
      r[o].value.apply(t, n);
  }
};
function Wd(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function $s(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = zd, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Qo = "http://www.w3.org/1999/xhtml";
const Fs = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Qo,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ro(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Fs.hasOwnProperty(t) ? { space: Fs[t], local: e } : e;
}
function Hd(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Qo && t.documentElement.namespaceURI === Qo ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function qd(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function kl(e) {
  var t = ro(e);
  return (t.local ? qd : Hd)(t);
}
function Yd() {
}
function ki(e) {
  return e == null ? Yd : function() {
    return this.querySelector(e);
  };
}
function Kd(e) {
  typeof e != "function" && (e = ki(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new dt(r, this._parents);
}
function Xd(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Zd() {
  return [];
}
function jl(e) {
  return e == null ? Zd : function() {
    return this.querySelectorAll(e);
  };
}
function Jd(e) {
  return function() {
    return Xd(e.apply(this, arguments));
  };
}
function Qd(e) {
  typeof e == "function" ? e = Jd(e) : e = jl(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new dt(r, o);
}
function Bl(e) {
  return function() {
    return this.matches(e);
  };
}
function Vl(e) {
  return function(t) {
    return t.matches(e);
  };
}
var ef = Array.prototype.find;
function tf(e) {
  return function() {
    return ef.call(this.children, e);
  };
}
function nf() {
  return this.firstElementChild;
}
function rf(e) {
  return this.select(e == null ? nf : tf(typeof e == "function" ? e : Vl(e)));
}
var of = Array.prototype.filter;
function sf() {
  return Array.from(this.children);
}
function af(e) {
  return function() {
    return of.call(this.children, e);
  };
}
function lf(e) {
  return this.selectAll(e == null ? sf : af(typeof e == "function" ? e : Vl(e)));
}
function cf(e) {
  typeof e != "function" && (e = Bl(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new dt(r, this._parents);
}
function $l(e) {
  return new Array(e.length);
}
function uf() {
  return new dt(this._enter || this._groups.map($l), this._parents);
}
function Fr(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Fr.prototype = {
  constructor: Fr,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function df(e) {
  return function() {
    return e;
  };
}
function ff(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Fr(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function pf(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, u = i.length, f = new Array(d), p;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = p = s.call(l, l.__data__, a, t) + "", c.has(p) ? o[a] = l : c.set(p, l));
  for (a = 0; a < u; ++a)
    p = s.call(e, i[a], a, i) + "", (l = c.get(p)) ? (r[a] = l, l.__data__ = i[a], c.delete(p)) : n[a] = new Fr(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function hf(e) {
  return e.__data__;
}
function mf(e, t) {
  if (!arguments.length)
    return Array.from(this, hf);
  var n = t ? pf : ff, r = this._parents, o = this._groups;
  typeof e != "function" && (e = df(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], u = o[c], f = u.length, p = gf(e.call(d, d && d.__data__, c, r)), h = p.length, m = a[c] = new Array(h), g = s[c] = new Array(h), _ = l[c] = new Array(f);
    n(d, u, m, g, _, p, t);
    for (var S = 0, v = 0, b, E; S < h; ++S)
      if (b = m[S]) {
        for (S >= v && (v = S + 1); !(E = g[v]) && ++v < h; )
          ;
        b._next = E || null;
      }
  }
  return s = new dt(s, r), s._enter = a, s._exit = l, s;
}
function gf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function vf() {
  return new dt(this._exit || this._groups.map($l), this._parents);
}
function yf(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function bf(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], u = c.length, f = a[l] = new Array(u), p, h = 0; h < u; ++h)
      (p = c[h] || d[h]) && (f[h] = p);
  for (; l < o; ++l)
    a[l] = n[l];
  return new dt(a, this._parents);
}
function Ef() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function wf(e) {
  e || (e = _f);
  function t(u, f) {
    return u && f ? e(u.__data__, f.__data__) : !u - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new dt(o, this._parents).order();
}
function _f(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Df() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Sf() {
  return Array.from(this);
}
function Of() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s)
        return s;
    }
  return null;
}
function xf() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function Nf() {
  return !this.node();
}
function Cf(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Af(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Tf(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Pf(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function If(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Rf(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Mf(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Lf(e, t) {
  var n = ro(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Tf : Af : typeof t == "function" ? n.local ? Mf : Rf : n.local ? If : Pf)(n, t));
}
function Fl(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function kf(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function jf(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Bf(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Vf(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? kf : typeof t == "function" ? Bf : jf)(e, t, n ?? "")) : wn(this.node(), e);
}
function wn(e, t) {
  return e.style.getPropertyValue(t) || Fl(e).getComputedStyle(e, null).getPropertyValue(t);
}
function $f(e) {
  return function() {
    delete this[e];
  };
}
function Ff(e, t) {
  return function() {
    this[e] = t;
  };
}
function Gf(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function zf(e, t) {
  return arguments.length > 1 ? this.each((t == null ? $f : typeof t == "function" ? Gf : Ff)(e, t)) : this.node()[e];
}
function Gl(e) {
  return e.trim().split(/^|\s+/);
}
function ji(e) {
  return e.classList || new zl(e);
}
function zl(e) {
  this._node = e, this._names = Gl(e.getAttribute("class") || "");
}
zl.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Ul(e, t) {
  for (var n = ji(e), r = -1, o = t.length; ++r < o; )
    n.add(t[r]);
}
function Wl(e, t) {
  for (var n = ji(e), r = -1, o = t.length; ++r < o; )
    n.remove(t[r]);
}
function Uf(e) {
  return function() {
    Ul(this, e);
  };
}
function Wf(e) {
  return function() {
    Wl(this, e);
  };
}
function Hf(e, t) {
  return function() {
    (t.apply(this, arguments) ? Ul : Wl)(this, e);
  };
}
function qf(e, t) {
  var n = Gl(e + "");
  if (arguments.length < 2) {
    for (var r = ji(this.node()), o = -1, i = n.length; ++o < i; )
      if (!r.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Hf : t ? Uf : Wf)(n, t));
}
function Yf() {
  this.textContent = "";
}
function Kf(e) {
  return function() {
    this.textContent = e;
  };
}
function Xf(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Zf(e) {
  return arguments.length ? this.each(e == null ? Yf : (typeof e == "function" ? Xf : Kf)(e)) : this.node().textContent;
}
function Jf() {
  this.innerHTML = "";
}
function Qf(e) {
  return function() {
    this.innerHTML = e;
  };
}
function ep(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function tp(e) {
  return arguments.length ? this.each(e == null ? Jf : (typeof e == "function" ? ep : Qf)(e)) : this.node().innerHTML;
}
function np() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function rp() {
  return this.each(np);
}
function op() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ip() {
  return this.each(op);
}
function sp(e) {
  var t = typeof e == "function" ? e : kl(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ap() {
  return null;
}
function lp(e, t) {
  var n = typeof e == "function" ? e : kl(e), r = t == null ? ap : typeof t == "function" ? t : ki(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function cp() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function up() {
  return this.each(cp);
}
function dp() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function fp() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function pp(e) {
  return this.select(e ? fp : dp);
}
function hp(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function mp(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function gp(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function vp(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function yp(e, t, n) {
  return function() {
    var r = this.__on, o, i = mp(t);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function bp(e, t, n) {
  var r = gp(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, c = a.length, d; l < c; ++l)
        for (o = 0, d = a[l]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = t ? yp : vp, o = 0; o < i; ++o)
    this.each(a(r[o], t, n));
  return this;
}
function Hl(e, t, n) {
  var r = Fl(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Ep(e, t) {
  return function() {
    return Hl(this, e, t);
  };
}
function wp(e, t) {
  return function() {
    return Hl(this, e, t.apply(this, arguments));
  };
}
function _p(e, t) {
  return this.each((typeof t == "function" ? wp : Ep)(e, t));
}
function* Dp() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var ql = [null];
function dt(e, t) {
  this._groups = e, this._parents = t;
}
function pr() {
  return new dt([[document.documentElement]], ql);
}
function Sp() {
  return this;
}
dt.prototype = pr.prototype = {
  constructor: dt,
  select: Kd,
  selectAll: Qd,
  selectChild: rf,
  selectChildren: lf,
  filter: cf,
  data: mf,
  enter: uf,
  exit: vf,
  join: yf,
  merge: bf,
  selection: Sp,
  order: Ef,
  sort: wf,
  call: Df,
  nodes: Sf,
  node: Of,
  size: xf,
  empty: Nf,
  each: Cf,
  attr: Lf,
  style: Vf,
  property: zf,
  classed: qf,
  text: Zf,
  html: tp,
  raise: rp,
  lower: ip,
  append: sp,
  insert: lp,
  remove: up,
  clone: pp,
  datum: hp,
  on: bp,
  dispatch: _p,
  [Symbol.iterator]: Dp
};
function Yl(e) {
  return typeof e == "string" ? new dt([[document.querySelector(e)]], [document.documentElement]) : new dt([[e]], ql);
}
function Op(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function M0(e, t) {
  if (e = Op(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const ei = { capture: !0, passive: !1 };
function ti(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function L0(e) {
  var t = e.document.documentElement, n = Yl(e).on("dragstart.drag", ti, ei);
  "onselectstart" in t ? n.on("selectstart.drag", ti, ei) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function k0(e, t) {
  var n = e.document.documentElement, r = Yl(e).on("dragstart.drag", null);
  t && (r.on("click.drag", ti, ei), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var _n = 0, Hn = 0, Mn = 0, Kl = 1e3, Gr, qn, zr = 0, sn = 0, oo = 0, nr = typeof performance == "object" && performance.now ? performance : Date, Xl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Bi() {
  return sn || (Xl(xp), sn = nr.now() + oo);
}
function xp() {
  sn = 0;
}
function Ur() {
  this._call = this._time = this._next = null;
}
Ur.prototype = Zl.prototype = {
  constructor: Ur,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Bi() : +n) + (t == null ? 0 : +t), !this._next && qn !== this && (qn ? qn._next = this : Gr = this, qn = this), this._call = e, this._time = n, ni();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ni());
  }
};
function Zl(e, t, n) {
  var r = new Ur();
  return r.restart(e, t, n), r;
}
function Np() {
  Bi(), ++_n;
  for (var e = Gr, t; e; )
    (t = sn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --_n;
}
function Gs() {
  sn = (zr = nr.now()) + oo, _n = Hn = 0;
  try {
    Np();
  } finally {
    _n = 0, Ap(), sn = 0;
  }
}
function Cp() {
  var e = nr.now(), t = e - zr;
  t > Kl && (oo -= t, zr = e);
}
function Ap() {
  for (var e, t = Gr, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Gr = n);
  qn = e, ni(r);
}
function ni(e) {
  if (!_n) {
    Hn && (Hn = clearTimeout(Hn));
    var t = e - sn;
    t > 24 ? (e < 1 / 0 && (Hn = setTimeout(Gs, e - nr.now() - oo)), Mn && (Mn = clearInterval(Mn))) : (Mn || (zr = nr.now(), Mn = setInterval(Cp, Kl)), _n = 1, Xl(Gs));
  }
}
function zs(e, t, n) {
  var r = new Ur();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Tp = Ll("start", "end", "cancel", "interrupt"), Pp = [], Jl = 0, Us = 1, ri = 2, kr = 3, Ws = 4, oi = 5, jr = 6;
function io(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s)
    e.__transition = {};
  else if (n in s)
    return;
  Ip(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Tp,
    tween: Pp,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Jl
  });
}
function Vi(e, t) {
  var n = St(e, t);
  if (n.state > Jl)
    throw new Error("too late; already scheduled");
  return n;
}
function At(e, t) {
  var n = St(e, t);
  if (n.state > kr)
    throw new Error("too late; already running");
  return n;
}
function St(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function Ip(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Zl(i, 0, n.time);
  function i(c) {
    n.state = Us, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, u, f, p;
    if (n.state !== Us)
      return l();
    for (d in r)
      if (p = r[d], p.name === n.name) {
        if (p.state === kr)
          return zs(s);
        p.state === Ws ? (p.state = jr, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[d]) : +d < t && (p.state = jr, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[d]);
      }
    if (zs(function() {
      n.state === kr && (n.state = Ws, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = ri, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ri) {
      for (n.state = kr, o = new Array(f = n.tween.length), d = 0, u = -1; d < f; ++d)
        (p = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++u] = p);
      o.length = u + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = oi, 1), u = -1, f = o.length; ++u < f; )
      o[u].call(e, d);
    n.state === oi && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = jr, n.timer.stop(), delete r[t];
    for (var c in r)
      return;
    delete e.__transition;
  }
}
function Rp(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > ri && r.state < oi, r.state = jr, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Mp(e) {
  return this.each(function() {
    Rp(this, e);
  });
}
function Lp(e, t) {
  var n, r;
  return function() {
    var o = At(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function kp(e, t, n) {
  var r, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var i = At(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, l = 0, c = o.length; l < c; ++l)
        if (o[l].name === t) {
          o[l] = a;
          break;
        }
      l === c && o.push(a);
    }
    i.tween = o;
  };
}
function jp(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = St(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Lp : kp)(n, e, t));
}
function $i(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = At(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return St(o, r).value[t];
  };
}
function Ql(e, t) {
  var n;
  return (typeof t == "number" ? Kt : t instanceof As ? Ts : (n = As(t)) ? (t = n, Ts) : qu)(e, t);
}
function Bp(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Vp(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function $p(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Fp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Gp(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function zp(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Up(e, t) {
  var n = ro(e), r = n === "transform" ? Fd : Ql;
  return this.attrTween(e, typeof t == "function" ? (n.local ? zp : Gp)(n, r, $i(this, "attr." + e, t)) : t == null ? (n.local ? Vp : Bp)(n) : (n.local ? Fp : $p)(n, r, t));
}
function Wp(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Hp(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function qp(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Hp(e, i)), n;
  }
  return o._value = t, o;
}
function Yp(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Wp(e, i)), n;
  }
  return o._value = t, o;
}
function Kp(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var r = ro(e);
  return this.tween(n, (r.local ? qp : Yp)(r, t));
}
function Xp(e, t) {
  return function() {
    Vi(this, e).delay = +t.apply(this, arguments);
  };
}
function Zp(e, t) {
  return t = +t, function() {
    Vi(this, e).delay = t;
  };
}
function Jp(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Xp : Zp)(t, e)) : St(this.node(), t).delay;
}
function Qp(e, t) {
  return function() {
    At(this, e).duration = +t.apply(this, arguments);
  };
}
function eh(e, t) {
  return t = +t, function() {
    At(this, e).duration = t;
  };
}
function th(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Qp : eh)(t, e)) : St(this.node(), t).duration;
}
function nh(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    At(this, e).ease = t;
  };
}
function rh(e) {
  var t = this._id;
  return arguments.length ? this.each(nh(t, e)) : St(this.node(), t).ease;
}
function oh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    At(this, e).ease = n;
  };
}
function ih(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(oh(this._id, e));
}
function sh(e) {
  typeof e != "function" && (e = Bl(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Bt(r, this._parents, this._name, this._id);
}
function ah(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, u = s[a] = new Array(d), f, p = 0; p < d; ++p)
      (f = l[p] || c[p]) && (u[p] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Bt(s, this._parents, this._name, this._id);
}
function lh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function ch(e, t, n) {
  var r, o, i = lh(t) ? Vi : At;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function uh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? St(this.node(), n).on.on(e) : this.each(ch(n, e, t));
}
function dh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function fh() {
  return this.on("end.remove", dh(this._id));
}
function ph(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ki(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, u, f = 0; f < l; ++f)
      (d = a[f]) && (u = e.call(d, d.__data__, f, a)) && ("__data__" in d && (u.__data__ = d.__data__), c[f] = u, io(c[f], t, n, f, c, St(d, n)));
  return new Bt(i, this._parents, t, n);
}
function hh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = jl(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, u = 0; u < c; ++u)
      if (d = l[u]) {
        for (var f = e.call(d, d.__data__, u, l), p, h = St(d, n), m = 0, g = f.length; m < g; ++m)
          (p = f[m]) && io(p, t, n, m, f, h);
        i.push(f), s.push(d);
      }
  return new Bt(i, s, t, n);
}
var mh = pr.prototype.constructor;
function gh() {
  return new mh(this._groups, this._parents);
}
function vh(e, t) {
  var n, r, o;
  return function() {
    var i = wn(this, e), s = (this.style.removeProperty(e), wn(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function ec(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function yh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = wn(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function bh(e, t, n) {
  var r, o, i;
  return function() {
    var s = wn(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), wn(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Eh(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = At(this, e), c = l.on, d = l.value[i] == null ? a || (a = ec(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function wh(e, t, n) {
  var r = (e += "") == "transform" ? $d : Ql;
  return t == null ? this.styleTween(e, vh(e, r)).on("end.style." + e, ec(e)) : typeof t == "function" ? this.styleTween(e, bh(e, r, $i(this, "style." + e, t))).each(Eh(this._id, e)) : this.styleTween(e, yh(e, r, t), n).on("end.style." + e, null);
}
function _h(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Dh(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && _h(e, s, n)), r;
  }
  return i._value = t, i;
}
function Sh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(r, Dh(e, t, n ?? ""));
}
function Oh(e) {
  return function() {
    this.textContent = e;
  };
}
function xh(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Nh(e) {
  return this.tween("text", typeof e == "function" ? xh($i(this, "text", e)) : Oh(e == null ? "" : e + ""));
}
function Ch(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Ah(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Ch(o)), t;
  }
  return r._value = e, r;
}
function Th(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, Ah(e));
}
function Ph() {
  for (var e = this._name, t = this._id, n = tc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = St(l, t);
        io(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Bt(r, this._parents, e, n);
}
function Ih() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = At(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var Rh = 0;
function Bt(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function tc() {
  return ++Rh;
}
var kt = pr.prototype;
Bt.prototype = {
  constructor: Bt,
  select: ph,
  selectAll: hh,
  selectChild: kt.selectChild,
  selectChildren: kt.selectChildren,
  filter: sh,
  merge: ah,
  selection: gh,
  transition: Ph,
  call: kt.call,
  nodes: kt.nodes,
  node: kt.node,
  size: kt.size,
  empty: kt.empty,
  each: kt.each,
  on: uh,
  attr: Up,
  attrTween: Kp,
  style: wh,
  styleTween: Sh,
  text: Nh,
  textTween: Th,
  remove: fh,
  tween: jp,
  delay: Jp,
  duration: th,
  ease: rh,
  easeVarying: ih,
  end: Ih,
  [Symbol.iterator]: kt[Symbol.iterator]
};
function Mh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Lh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Mh
};
function kh(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function jh(e) {
  var t, n;
  e instanceof Bt ? (t = e._id, e = e._name) : (t = tc(), (n = Lh).time = Bi(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && io(l, e, t, c, s, n || kh(l, t));
  return new Bt(r, this._parents, e, t);
}
pr.prototype.interrupt = Mp;
pr.prototype.transition = jh;
function yn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
yn.prototype = {
  constructor: yn,
  scale: function(e) {
    return e === 1 ? this : new yn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new yn(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var j0 = new yn(1, 0, 0);
yn.prototype;
const Bh = (e, t) => {
  const r = document.createElement("canvas").getContext("2d");
  if (!r) {
    console.error("2D context not found");
    return;
  }
  return r.font = t || getComputedStyle(document.body).font, Math.ceil(r.measureText(e).width);
}, B0 = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep",
  "Curve Basis": "curveBasis"
};
function hr(e) {
  var t = e.top, n = t === void 0 ? 0 : t, r = e.left, o = r === void 0 ? 0 : r, i = e.className, s = e.children;
  return /* @__PURE__ */ R.createElement(Kn, {
    className: zt("visx-glyph", i),
    top: n,
    left: o
  }, s);
}
hr.propTypes = {
  top: F.number,
  left: F.number,
  className: F.string,
  children: F.node
};
var Vh = ["children", "className", "top", "left", "size"];
function ii() {
  return ii = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ii.apply(this, arguments);
}
function $h(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Fh(e) {
  var t = e.children, n = e.className, r = e.top, o = e.left, i = e.size, s = $h(e, Vh), a = no();
  return a.type(gd), (typeof i == "number" || i) && a.size(i), t ? /* @__PURE__ */ R.createElement(R.Fragment, null, t({
    path: a
  })) : /* @__PURE__ */ R.createElement(hr, {
    top: r,
    left: o
  }, /* @__PURE__ */ R.createElement("path", ii({
    className: zt("visx-glyph-diamond", n),
    d: a() || ""
  }, s)));
}
Fh.propTypes = {
  children: F.func,
  className: F.string,
  top: F.number,
  left: F.number,
  size: F.oneOfType([F.number, F.func])
};
var Gh = ["children", "className", "top", "left", "size"];
function si() {
  return si = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, si.apply(this, arguments);
}
function zh(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Uh(e) {
  var t = e.children, n = e.className, r = e.top, o = e.left, i = e.size, s = zh(e, Gh), a = no();
  return a.type(yd), (typeof i == "number" || i) && a.size(i), t ? /* @__PURE__ */ R.createElement(R.Fragment, null, t({
    path: a
  })) : /* @__PURE__ */ R.createElement(hr, {
    top: r,
    left: o
  }, /* @__PURE__ */ R.createElement("path", si({
    className: zt("visx-glyph-triangle", n),
    d: a() || ""
  }, s)));
}
Uh.propTypes = {
  children: F.func,
  className: F.string,
  top: F.number,
  left: F.number,
  size: F.oneOfType([F.number, F.func])
};
var Wh = ["children", "className", "top", "left", "size"];
function ai() {
  return ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ai.apply(this, arguments);
}
function Hh(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function qh(e) {
  var t = e.children, n = e.className, r = e.top, o = e.left, i = e.size, s = Hh(e, Wh), a = no();
  return a.type(vd), (typeof i == "number" || i) && a.size(i), t ? /* @__PURE__ */ R.createElement(R.Fragment, null, t({
    path: a
  })) : /* @__PURE__ */ R.createElement(hr, {
    top: r,
    left: o
  }, /* @__PURE__ */ R.createElement("path", ai({
    className: zt("visx-glyph-square", n),
    d: a() || ""
  }, s)));
}
qh.propTypes = {
  children: F.func,
  className: F.string,
  top: F.number,
  left: F.number,
  size: F.oneOfType([F.number, F.func])
};
var Yh = ["children", "className", "top", "left", "size"];
function li() {
  return li = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, li.apply(this, arguments);
}
function Kh(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Xh(e) {
  var t = e.children, n = e.className, r = e.top, o = e.left, i = e.size, s = Kh(e, Yh), a = no();
  return a.type(Al), (typeof i == "number" || i) && a.size(i), t ? /* @__PURE__ */ R.createElement(R.Fragment, null, t({
    path: a
  })) : /* @__PURE__ */ R.createElement(hr, {
    top: r,
    left: o
  }, /* @__PURE__ */ R.createElement("path", li({
    className: zt("visx-glyph-circle", n),
    d: a() || ""
  }, s)));
}
Xh.propTypes = {
  children: F.func,
  className: F.string,
  top: F.number,
  left: F.number,
  size: F.oneOfType([F.number, F.func])
};
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */
const {
  entries: nc,
  setPrototypeOf: Hs,
  isFrozen: Zh,
  getPrototypeOf: Jh,
  getOwnPropertyDescriptor: Qh
} = Object;
let {
  freeze: et,
  seal: yt,
  create: rc
} = Object, {
  apply: ci,
  construct: ui
} = typeof Reflect < "u" && Reflect;
et || (et = function(t) {
  return t;
});
yt || (yt = function(t) {
  return t;
});
ci || (ci = function(t, n, r) {
  return t.apply(n, r);
});
ui || (ui = function(t, n) {
  return new t(...n);
});
const Ar = tt(Array.prototype.forEach), em = tt(Array.prototype.lastIndexOf), qs = tt(Array.prototype.pop), Ln = tt(Array.prototype.push), tm = tt(Array.prototype.splice), Br = tt(String.prototype.toLowerCase), _o = tt(String.prototype.toString), Ys = tt(String.prototype.match), kn = tt(String.prototype.replace), nm = tt(String.prototype.indexOf), rm = tt(String.prototype.trim), _t = tt(Object.prototype.hasOwnProperty), Ze = tt(RegExp.prototype.test), jn = om(TypeError);
function tt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return ci(e, t, r);
  };
}
function om(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return ui(e, n);
  };
}
function ae(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Br;
  Hs && Hs(e, null);
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const i = n(o);
      i !== o && (Zh(t) || (t[r] = i), o = i);
    }
    e[o] = !0;
  }
  return e;
}
function im(e) {
  for (let t = 0; t < e.length; t++)
    _t(e, t) || (e[t] = null);
  return e;
}
function Zt(e) {
  const t = rc(null);
  for (const [n, r] of nc(e))
    _t(e, n) && (Array.isArray(r) ? t[n] = im(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = Zt(r) : t[n] = r);
  return t;
}
function Bn(e, t) {
  for (; e !== null; ) {
    const r = Qh(e, t);
    if (r) {
      if (r.get)
        return tt(r.get);
      if (typeof r.value == "function")
        return tt(r.value);
    }
    e = Jh(e);
  }
  function n() {
    return null;
  }
  return n;
}
const Ks = et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Do = et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), So = et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), sm = et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Oo = et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), am = et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Xs = et(["#text"]), Zs = et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), xo = et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Js = et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Tr = et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), lm = yt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), cm = yt(/<%[\w\W]*|[\w\W]*%>/gm), um = yt(/\$\{[\w\W]*/gm), dm = yt(/^data-[\-\w.\u00B7-\uFFFF]+$/), fm = yt(/^aria-[\-\w]+$/), oc = yt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), pm = yt(/^(?:\w+script|data):/i), hm = yt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ic = yt(/^html$/i), mm = yt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Qs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: fm,
  ATTR_WHITESPACE: hm,
  CUSTOM_ELEMENT: mm,
  DATA_ATTR: dm,
  DOCTYPE_NAME: ic,
  ERB_EXPR: cm,
  IS_ALLOWED_URI: oc,
  IS_SCRIPT_OR_DATA: pm,
  MUSTACHE_EXPR: lm,
  TMPLIT_EXPR: um
});
const Vn = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, gm = function() {
  return typeof window > "u" ? null : window;
}, vm = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const o = "data-tt-policy-suffix";
  n && n.hasAttribute(o) && (r = n.getAttribute(o));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(i, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, ea = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function sc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gm();
  const t = (q) => sc(q);
  if (t.version = "3.2.5", t.removed = [], !e || !e.document || e.document.nodeType !== Vn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const r = n, o = r.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: s,
    Node: a,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: d = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: u,
    DOMParser: f,
    trustedTypes: p
  } = e, h = l.prototype, m = Bn(h, "cloneNode"), g = Bn(h, "remove"), _ = Bn(h, "nextSibling"), S = Bn(h, "childNodes"), v = Bn(h, "parentNode");
  if (typeof s == "function") {
    const q = n.createElement("template");
    q.content && q.content.ownerDocument && (n = q.content.ownerDocument);
  }
  let b, E = "";
  const {
    implementation: x,
    createNodeIterator: C,
    createDocumentFragment: N,
    getElementsByTagName: G
  } = n, {
    importNode: T
  } = r;
  let P = ea();
  t.isSupported = typeof nc == "function" && typeof v == "function" && x && x.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: j,
    ERB_EXPR: V,
    TMPLIT_EXPR: Z,
    DATA_ATTR: Q,
    ARIA_ATTR: $,
    IS_SCRIPT_OR_DATA: W,
    ATTR_WHITESPACE: J,
    CUSTOM_ELEMENT: z
  } = Qs;
  let {
    IS_ALLOWED_URI: H
  } = Qs, K = null;
  const Se = ae({}, [...Ks, ...Do, ...So, ...Oo, ...Xs]);
  let oe = null;
  const Ie = ae({}, [...Zs, ...xo, ...Js, ...Tr]);
  let re = Object.seal(rc(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), we = null, Le = null, Ye = !0, Ne = !0, Ue = !1, Ce = !0, I = !1, pe = !0, B = !1, ee = !1, de = !1, ke = !1, Oe = !1, We = !1, Pt = !0, Ot = !1;
  const bt = "user-content-";
  let Et = !0, at = !1, xe = {}, nt = null;
  const xt = ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let $e = null;
  const It = ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let rt = null;
  const Ke = ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Fe = "http://www.w3.org/1998/Math/MathML", Te = "http://www.w3.org/2000/svg", He = "http://www.w3.org/1999/xhtml";
  let ot = He, te = !1, X = null;
  const se = ae({}, [Fe, Te, He], _o);
  let le = ae({}, ["mi", "mo", "mn", "ms", "mtext"]), ie = ae({}, ["annotation-xml"]);
  const fe = ae({}, ["title", "style", "font", "a", "script"]);
  let L = null;
  const be = ["application/xhtml+xml", "text/html"], he = "text/html";
  let ue = null, Ae = null;
  const je = n.createElement("form"), ft = function(D) {
    return D instanceof RegExp || D instanceof Function;
  }, pt = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ae && Ae === D)) {
      if ((!D || typeof D != "object") && (D = {}), D = Zt(D), L = // eslint-disable-next-line unicorn/prefer-includes
      be.indexOf(D.PARSER_MEDIA_TYPE) === -1 ? he : D.PARSER_MEDIA_TYPE, ue = L === "application/xhtml+xml" ? _o : Br, K = _t(D, "ALLOWED_TAGS") ? ae({}, D.ALLOWED_TAGS, ue) : Se, oe = _t(D, "ALLOWED_ATTR") ? ae({}, D.ALLOWED_ATTR, ue) : Ie, X = _t(D, "ALLOWED_NAMESPACES") ? ae({}, D.ALLOWED_NAMESPACES, _o) : se, rt = _t(D, "ADD_URI_SAFE_ATTR") ? ae(Zt(Ke), D.ADD_URI_SAFE_ATTR, ue) : Ke, $e = _t(D, "ADD_DATA_URI_TAGS") ? ae(Zt(It), D.ADD_DATA_URI_TAGS, ue) : It, nt = _t(D, "FORBID_CONTENTS") ? ae({}, D.FORBID_CONTENTS, ue) : xt, we = _t(D, "FORBID_TAGS") ? ae({}, D.FORBID_TAGS, ue) : {}, Le = _t(D, "FORBID_ATTR") ? ae({}, D.FORBID_ATTR, ue) : {}, xe = _t(D, "USE_PROFILES") ? D.USE_PROFILES : !1, Ye = D.ALLOW_ARIA_ATTR !== !1, Ne = D.ALLOW_DATA_ATTR !== !1, Ue = D.ALLOW_UNKNOWN_PROTOCOLS || !1, Ce = D.ALLOW_SELF_CLOSE_IN_ATTR !== !1, I = D.SAFE_FOR_TEMPLATES || !1, pe = D.SAFE_FOR_XML !== !1, B = D.WHOLE_DOCUMENT || !1, ke = D.RETURN_DOM || !1, Oe = D.RETURN_DOM_FRAGMENT || !1, We = D.RETURN_TRUSTED_TYPE || !1, de = D.FORCE_BODY || !1, Pt = D.SANITIZE_DOM !== !1, Ot = D.SANITIZE_NAMED_PROPS || !1, Et = D.KEEP_CONTENT !== !1, at = D.IN_PLACE || !1, H = D.ALLOWED_URI_REGEXP || oc, ot = D.NAMESPACE || He, le = D.MATHML_TEXT_INTEGRATION_POINTS || le, ie = D.HTML_INTEGRATION_POINTS || ie, re = D.CUSTOM_ELEMENT_HANDLING || {}, D.CUSTOM_ELEMENT_HANDLING && ft(D.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (re.tagNameCheck = D.CUSTOM_ELEMENT_HANDLING.tagNameCheck), D.CUSTOM_ELEMENT_HANDLING && ft(D.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (re.attributeNameCheck = D.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), D.CUSTOM_ELEMENT_HANDLING && typeof D.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (re.allowCustomizedBuiltInElements = D.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), I && (Ne = !1), Oe && (ke = !0), xe && (K = ae({}, Xs), oe = [], xe.html === !0 && (ae(K, Ks), ae(oe, Zs)), xe.svg === !0 && (ae(K, Do), ae(oe, xo), ae(oe, Tr)), xe.svgFilters === !0 && (ae(K, So), ae(oe, xo), ae(oe, Tr)), xe.mathMl === !0 && (ae(K, Oo), ae(oe, Js), ae(oe, Tr))), D.ADD_TAGS && (K === Se && (K = Zt(K)), ae(K, D.ADD_TAGS, ue)), D.ADD_ATTR && (oe === Ie && (oe = Zt(oe)), ae(oe, D.ADD_ATTR, ue)), D.ADD_URI_SAFE_ATTR && ae(rt, D.ADD_URI_SAFE_ATTR, ue), D.FORBID_CONTENTS && (nt === xt && (nt = Zt(nt)), ae(nt, D.FORBID_CONTENTS, ue)), Et && (K["#text"] = !0), B && ae(K, ["html", "head", "body"]), K.table && (ae(K, ["tbody"]), delete we.tbody), D.TRUSTED_TYPES_POLICY) {
        if (typeof D.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw jn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof D.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw jn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        b = D.TRUSTED_TYPES_POLICY, E = b.createHTML("");
      } else
        b === void 0 && (b = vm(p, o)), b !== null && typeof E == "string" && (E = b.createHTML(""));
      et && et(D), Ae = D;
    }
  }, Rt = ae({}, [...Do, ...So, ...sm]), dn = ae({}, [...Oo, ...am]), wr = function(D) {
    let A = v(D);
    (!A || !A.tagName) && (A = {
      namespaceURI: ot,
      tagName: "template"
    });
    const U = Br(D.tagName), M = Br(A.tagName);
    return X[D.namespaceURI] ? D.namespaceURI === Te ? A.namespaceURI === He ? U === "svg" : A.namespaceURI === Fe ? U === "svg" && (M === "annotation-xml" || le[M]) : !!Rt[U] : D.namespaceURI === Fe ? A.namespaceURI === He ? U === "math" : A.namespaceURI === Te ? U === "math" && ie[M] : !!dn[U] : D.namespaceURI === He ? A.namespaceURI === Te && !ie[M] || A.namespaceURI === Fe && !le[M] ? !1 : !dn[U] && (fe[U] || !Rt[U]) : !!(L === "application/xhtml+xml" && X[D.namespaceURI]) : !1;
  }, Xe = function(D) {
    Ln(t.removed, {
      element: D
    });
    try {
      v(D).removeChild(D);
    } catch {
      g(D);
    }
  }, Mt = function(D, A) {
    try {
      Ln(t.removed, {
        attribute: A.getAttributeNode(D),
        from: A
      });
    } catch {
      Ln(t.removed, {
        attribute: null,
        from: A
      });
    }
    if (A.removeAttribute(D), D === "is")
      if (ke || Oe)
        try {
          Xe(A);
        } catch {
        }
      else
        try {
          A.setAttribute(D, "");
        } catch {
        }
  }, _r = function(D) {
    let A = null, U = null;
    if (de)
      D = "<remove></remove>" + D;
    else {
      const Ee = Ys(D, /^[\r\n\t ]+/);
      U = Ee && Ee[0];
    }
    L === "application/xhtml+xml" && ot === He && (D = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + D + "</body></html>");
    const M = b ? b.createHTML(D) : D;
    if (ot === He)
      try {
        A = new f().parseFromString(M, L);
      } catch {
      }
    if (!A || !A.documentElement) {
      A = x.createDocument(ot, "template", null);
      try {
        A.documentElement.innerHTML = te ? E : M;
      } catch {
      }
    }
    const ne = A.body || A.documentElement;
    return D && U && ne.insertBefore(n.createTextNode(U), ne.childNodes[0] || null), ot === He ? G.call(A, B ? "html" : "body")[0] : B ? A.documentElement : ne;
  }, Vt = function(D) {
    return C.call(
      D.ownerDocument || D,
      D,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, fn = function(D) {
    return D instanceof u && (typeof D.nodeName != "string" || typeof D.textContent != "string" || typeof D.removeChild != "function" || !(D.attributes instanceof d) || typeof D.removeAttribute != "function" || typeof D.setAttribute != "function" || typeof D.namespaceURI != "string" || typeof D.insertBefore != "function" || typeof D.hasChildNodes != "function");
  }, Dr = function(D) {
    return typeof a == "function" && D instanceof a;
  };
  function wt(q, D, A) {
    Ar(q, (U) => {
      U.call(t, D, A, Ae);
    });
  }
  const Sr = function(D) {
    let A = null;
    if (wt(P.beforeSanitizeElements, D, null), fn(D))
      return Xe(D), !0;
    const U = ue(D.nodeName);
    if (wt(P.uponSanitizeElement, D, {
      tagName: U,
      allowedTags: K
    }), D.hasChildNodes() && !Dr(D.firstElementChild) && Ze(/<[/\w!]/g, D.innerHTML) && Ze(/<[/\w!]/g, D.textContent) || D.nodeType === Vn.progressingInstruction || pe && D.nodeType === Vn.comment && Ze(/<[/\w]/g, D.data))
      return Xe(D), !0;
    if (!K[U] || we[U]) {
      if (!we[U] && In(U) && (re.tagNameCheck instanceof RegExp && Ze(re.tagNameCheck, U) || re.tagNameCheck instanceof Function && re.tagNameCheck(U)))
        return !1;
      if (Et && !nt[U]) {
        const M = v(D) || D.parentNode, ne = S(D) || D.childNodes;
        if (ne && M) {
          const Ee = ne.length;
          for (let _e = Ee - 1; _e >= 0; --_e) {
            const qe = m(ne[_e], !0);
            qe.__removalCount = (D.__removalCount || 0) + 1, M.insertBefore(qe, _(D));
          }
        }
      }
      return Xe(D), !0;
    }
    return D instanceof l && !wr(D) || (U === "noscript" || U === "noembed" || U === "noframes") && Ze(/<\/no(script|embed|frames)/i, D.innerHTML) ? (Xe(D), !0) : (I && D.nodeType === Vn.text && (A = D.textContent, Ar([j, V, Z], (M) => {
      A = kn(A, M, " ");
    }), D.textContent !== A && (Ln(t.removed, {
      element: D.cloneNode()
    }), D.textContent = A)), wt(P.afterSanitizeElements, D, null), !1);
  }, pn = function(D, A, U) {
    if (Pt && (A === "id" || A === "name") && (U in n || U in je))
      return !1;
    if (!(Ne && !Le[A] && Ze(Q, A))) {
      if (!(Ye && Ze($, A))) {
        if (!oe[A] || Le[A]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(In(D) && (re.tagNameCheck instanceof RegExp && Ze(re.tagNameCheck, D) || re.tagNameCheck instanceof Function && re.tagNameCheck(D)) && (re.attributeNameCheck instanceof RegExp && Ze(re.attributeNameCheck, A) || re.attributeNameCheck instanceof Function && re.attributeNameCheck(A)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            A === "is" && re.allowCustomizedBuiltInElements && (re.tagNameCheck instanceof RegExp && Ze(re.tagNameCheck, U) || re.tagNameCheck instanceof Function && re.tagNameCheck(U)))
          )
            return !1;
        } else if (!rt[A]) {
          if (!Ze(H, kn(U, J, ""))) {
            if (!((A === "src" || A === "xlink:href" || A === "href") && D !== "script" && nm(U, "data:") === 0 && $e[D])) {
              if (!(Ue && !Ze(W, kn(U, J, "")))) {
                if (U)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, In = function(D) {
    return D !== "annotation-xml" && Ys(D, z);
  }, hn = function(D) {
    wt(P.beforeSanitizeAttributes, D, null);
    const {
      attributes: A
    } = D;
    if (!A || fn(D))
      return;
    const U = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: oe,
      forceKeepAttr: void 0
    };
    let M = A.length;
    for (; M--; ) {
      const ne = A[M], {
        name: Ee,
        namespaceURI: _e,
        value: qe
      } = ne, Ut = ue(Ee);
      let Pe = Ee === "value" ? qe : rm(qe);
      if (U.attrName = Ut, U.attrValue = Pe, U.keepAttr = !0, U.forceKeepAttr = void 0, wt(P.uponSanitizeAttribute, D, U), Pe = U.attrValue, Ot && (Ut === "id" || Ut === "name") && (Mt(Ee, D), Pe = bt + Pe), pe && Ze(/((--!?|])>)|<\/(style|title)/i, Pe)) {
        Mt(Ee, D);
        continue;
      }
      if (U.forceKeepAttr || (Mt(Ee, D), !U.keepAttr))
        continue;
      if (!Ce && Ze(/\/>/i, Pe)) {
        Mt(Ee, D);
        continue;
      }
      I && Ar([j, V, Z], (xr) => {
        Pe = kn(Pe, xr, " ");
      });
      const Wt = ue(D.nodeName);
      if (pn(Wt, Ut, Pe)) {
        if (b && typeof p == "object" && typeof p.getAttributeType == "function" && !_e)
          switch (p.getAttributeType(Wt, Ut)) {
            case "TrustedHTML": {
              Pe = b.createHTML(Pe);
              break;
            }
            case "TrustedScriptURL": {
              Pe = b.createScriptURL(Pe);
              break;
            }
          }
        try {
          _e ? D.setAttributeNS(_e, Ee, Pe) : D.setAttribute(Ee, Pe), fn(D) ? Xe(D) : qs(t.removed);
        } catch {
        }
      }
    }
    wt(P.afterSanitizeAttributes, D, null);
  }, Or = function q(D) {
    let A = null;
    const U = Vt(D);
    for (wt(P.beforeSanitizeShadowDOM, D, null); A = U.nextNode(); )
      wt(P.uponSanitizeShadowNode, A, null), Sr(A), hn(A), A.content instanceof i && q(A.content);
    wt(P.afterSanitizeShadowDOM, D, null);
  };
  return t.sanitize = function(q) {
    let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, A = null, U = null, M = null, ne = null;
    if (te = !q, te && (q = "<!-->"), typeof q != "string" && !Dr(q))
      if (typeof q.toString == "function") {
        if (q = q.toString(), typeof q != "string")
          throw jn("dirty is not a string, aborting");
      } else
        throw jn("toString is not a function");
    if (!t.isSupported)
      return q;
    if (ee || pt(D), t.removed = [], typeof q == "string" && (at = !1), at) {
      if (q.nodeName) {
        const qe = ue(q.nodeName);
        if (!K[qe] || we[qe])
          throw jn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (q instanceof a)
      A = _r("<!---->"), U = A.ownerDocument.importNode(q, !0), U.nodeType === Vn.element && U.nodeName === "BODY" || U.nodeName === "HTML" ? A = U : A.appendChild(U);
    else {
      if (!ke && !I && !B && // eslint-disable-next-line unicorn/prefer-includes
      q.indexOf("<") === -1)
        return b && We ? b.createHTML(q) : q;
      if (A = _r(q), !A)
        return ke ? null : We ? E : "";
    }
    A && de && Xe(A.firstChild);
    const Ee = Vt(at ? q : A);
    for (; M = Ee.nextNode(); )
      Sr(M), hn(M), M.content instanceof i && Or(M.content);
    if (at)
      return q;
    if (ke) {
      if (Oe)
        for (ne = N.call(A.ownerDocument); A.firstChild; )
          ne.appendChild(A.firstChild);
      else
        ne = A;
      return (oe.shadowroot || oe.shadowrootmode) && (ne = T.call(r, ne, !0)), ne;
    }
    let _e = B ? A.outerHTML : A.innerHTML;
    return B && K["!doctype"] && A.ownerDocument && A.ownerDocument.doctype && A.ownerDocument.doctype.name && Ze(ic, A.ownerDocument.doctype.name) && (_e = "<!DOCTYPE " + A.ownerDocument.doctype.name + `>
` + _e), I && Ar([j, V, Z], (qe) => {
      _e = kn(_e, qe, " ");
    }), b && We ? b.createHTML(_e) : _e;
  }, t.setConfig = function() {
    let q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    pt(q), ee = !0;
  }, t.clearConfig = function() {
    Ae = null, ee = !1;
  }, t.isValidAttribute = function(q, D, A) {
    Ae || pt({});
    const U = ue(q), M = ue(D);
    return pn(U, M, A);
  }, t.addHook = function(q, D) {
    typeof D == "function" && Ln(P[q], D);
  }, t.removeHook = function(q, D) {
    if (D !== void 0) {
      const A = em(P[q], D);
      return A === -1 ? void 0 : tm(P[q], A, 1)[0];
    }
    return qs(P[q]);
  }, t.removeHooks = function(q) {
    P[q] = [];
  }, t.removeAllHooks = function() {
    P = ea();
  }, t;
}
var V0 = sc(), ym = /* @__PURE__ */ O.createContext({});
const so = ym;
function di() {
  return di = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, di.apply(this, arguments);
}
function bm(e) {
  var t, n, r, o, i = e.className, s = e.x, a = e.y, l = e.dx, c = e.dy, d = e.type, u = d === void 0 ? "elbow" : d, f = e.stroke, p = f === void 0 ? "#222" : f, h = e.pathProps, m = O.useContext(so), g = s ?? ((t = m.x) != null ? t : 0), _ = a ?? ((n = m.y) != null ? n : 0), S = l ?? ((r = m.dx) != null ? r : 0), v = c ?? ((o = m.dy) != null ? o : 0), b = g, E = _, x = g + S, C = _ + v;
  if (u === "elbow")
    if (Math.abs(S) <= Math.abs(v)) {
      b = x;
      var N = v > 0 ? 1 : -1;
      E = _ + N * Math.abs(b - g);
    } else {
      E = C;
      var G = S > 0 ? 1 : -1;
      b = g + G * Math.abs(E - _);
    }
  return /* @__PURE__ */ R.createElement("path", di({
    className: zt("visx-annotation-connector", i),
    strokeWidth: 1,
    stroke: p,
    fill: "transparent",
    pointerEvents: "none",
    d: "M" + g + "," + _ + (u === "elbow" ? "L" + b + "," + E : "") + "L" + x + "," + C
  }, h));
}
bm.propTypes = {
  className: F.string,
  type: F.oneOf(["line", "elbow"]),
  stroke: F.string
};
function bn() {
  return bn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bn.apply(this, arguments);
}
function ac(e) {
  var t = e.anchorLineOrientation, n = e.anchorLineStroke, r = e.verticalAnchor, o = e.horizontalAnchor, i = e.width, s = e.height, a = {
    stroke: n,
    strokeWidth: 2
  };
  return /* @__PURE__ */ R.createElement(R.Fragment, null, t === "horizontal" && r === "start" && /* @__PURE__ */ R.createElement("line", bn({}, a, {
    x1: 0,
    x2: i,
    y1: 0,
    y2: 0
  })), t === "horizontal" && r === "end" && /* @__PURE__ */ R.createElement("line", bn({}, a, {
    x1: 0,
    x2: i,
    y1: s,
    y2: s
  })), t === "vertical" && o === "start" && /* @__PURE__ */ R.createElement("line", bn({}, a, {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: s
  })), t === "vertical" && o === "end" && /* @__PURE__ */ R.createElement("line", bn({}, a, {
    x1: i,
    x2: i,
    y1: 0,
    y2: s
  })));
}
ac.propTypes = {
  anchorLineOrientation: F.oneOf(["horizontal", "vertical"]).isRequired,
  anchorLineStroke: F.string.isRequired,
  width: F.number.isRequired,
  height: F.number.isRequired
};
function fi() {
  return fi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, fi.apply(this, arguments);
}
var ta = {
  display: "inline-block"
};
function Em(e) {
  var t = e.anchorLineStroke, n = t === void 0 ? "#222" : t, r = e.children, o = e.className, i = e.containerStyle, s = e.horizontalAnchor, a = e.resizeObserverPolyfill, l = e.showAnchorLine, c = l === void 0 ? !0 : l, d = e.verticalAnchor, u = e.x, f = e.y, p = bd({
    polyfill: a
  }), h = p[0], m = p[1], g = m.width, _ = m.height, S = O.useContext(so), v = S.x, b = v === void 0 ? 0 : v, E = S.y, x = E === void 0 ? 0 : E, C = S.dx, N = C === void 0 ? 0 : C, G = S.dy, T = G === void 0 ? 0 : G, P = s || (Math.abs(N) < Math.abs(T) ? "middle" : N > 0 ? "start" : "end"), j = d || (Math.abs(N) > Math.abs(T) ? "middle" : T > 0 ? "start" : "end"), V = O.useMemo(function() {
    var Z = u ?? b + N, Q = f ?? x + T;
    return P === "middle" && (Z -= g / 2), P === "end" && (Z -= g), j === "middle" && (Q -= _ / 2), j === "end" && (Q -= _), {
      x: Z,
      y: Q
    };
  }, [u, b, N, f, x, T, P, j, g, _]);
  return /* @__PURE__ */ R.createElement(Kn, {
    top: V.y,
    left: V.x,
    pointerEvents: "none",
    className: zt("visx-annotationlabel", o)
  }, /* @__PURE__ */ R.createElement("foreignObject", {
    width: g,
    height: _,
    overflow: "visible"
  }, /* @__PURE__ */ R.createElement("div", {
    ref: h,
    style: i ? fi({}, ta, i) : ta
  }, r)), c && /* @__PURE__ */ R.createElement(ac, {
    anchorLineOrientation: Math.abs(N) > Math.abs(T) ? "vertical" : "horizontal",
    anchorLineStroke: n,
    verticalAnchor: j,
    horizontalAnchor: P,
    width: g,
    height: _
  }));
}
Em.propTypes = {
  children: F.node
};
var wm = ["className", "x", "y", "stroke", "radius"];
function pi() {
  return pi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pi.apply(this, arguments);
}
function _m(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Dm(e) {
  var t = e.className, n = e.x, r = e.y, o = e.stroke, i = o === void 0 ? "#222" : o, s = e.radius, a = s === void 0 ? 16 : s, l = _m(e, wm), c = O.useContext(so);
  return /* @__PURE__ */ R.createElement("circle", pi({
    className: zt("visx-annotation-subject", "visx-annotation-subject-circle", t),
    cx: n || c.x,
    cy: r || c.y,
    r: a,
    fill: "transparent",
    pointerEvents: "none",
    stroke: i
  }, l));
}
Dm.propTypes = {
  className: F.string,
  stroke: F.string,
  radius: F.number
};
function lc(e) {
  var t = e.x, n = e.y, r = e.dx, o = e.dy, i = e.children, s = O.useMemo(function() {
    return {
      x: t,
      y: n,
      dx: r,
      dy: o
    };
  }, [t, n, r, o]);
  return /* @__PURE__ */ R.createElement(so.Provider, {
    value: s
  }, i);
}
lc.propTypes = {
  children: F.node.isRequired
};
const Sm = /* @__PURE__ */ _l(xd), Om = /* @__PURE__ */ _l(kd);
var Fi = {};
Fi.__esModule = !0;
Fi.default = xm;
var Pr = O;
function xm(e) {
  var t = (0, Pr.useState)(e), n = t[0], r = t[1], o = (0, Pr.useRef)(null), i = (0, Pr.useCallback)(function(s, a) {
    o.current = a || null, r(s);
  }, [r]);
  return (0, Pr.useLayoutEffect)(function() {
    o.current && (o.current(n), o.current = null);
  }, [n]), [n, i];
}
var Gi = {}, zi = {};
zi.__esModule = !0;
zi.default = Nm;
function Nm(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var Ui = {};
Ui.__esModule = !0;
Ui.default = Tm;
function Cm(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Am(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Am(e, t) {
  if (e) {
    if (typeof e == "string")
      return na(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return na(e, t);
  }
}
function na(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Tm(e, t) {
  for (var n = e, r = 1 / 0, o = Cm(t), i; !(i = o()).done; ) {
    var s = i.value, a = Math.sqrt(Math.pow(s.x - e.x, 2) + Math.pow(s.y - e.y, 2));
    a < r && (r = a, n = {
      x: s.x,
      y: s.y
    });
  }
  return n;
}
Gi.__esModule = !0;
Gi.default = Im;
var ra = cc(zi), Pm = cc(Ui);
function cc(e) {
  return e && e.__esModule ? e : { default: e };
}
function Im(e, t, n) {
  var r, o, i, s;
  return n === void 0 && (n = {}), t.length > 0 ? (0, Pm.default)(e, t) : {
    x: (0, ra.default)(e.x, (r = n.xMin) != null ? r : -1 / 0, (o = n.xMax) != null ? o : 1 / 0),
    y: (0, ra.default)(e.y, (i = n.yMin) != null ? i : -1 / 0, (s = n.yMax) != null ? s : 1 / 0)
  };
}
var Wi = {};
Wi.__esModule = !0;
Wi.default = Lm;
var Rm = O;
function Mm(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var r = [], o = e.getTotalLength(), i = 0; i <= o; i += n) {
    var s = e.getPointAtLength(i), a = s.matrixTransform(t);
    r.push(a);
  }
  return r;
}
function Lm(e) {
  var t = (0, Rm.useMemo)(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return Mm(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
var oa = Bm, Ht = O, gn = Sm, ia = Om, km = Hi(Fi), sa = Hi(Gi), jm = Hi(Wi);
function Hi(e) {
  return e && e.__esModule ? e : { default: e };
}
function Nt() {
  return Nt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Nt.apply(this, arguments);
}
function Bm(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, r = n === void 0 ? !1 : n, o = t.snapToPointer, i = o === void 0 ? !0 : o, s = t.onDragEnd, a = t.onDragMove, l = t.onDragStart, c = t.x, d = t.y, u = t.dx, f = t.dy, p = t.isDragging, h = t.restrict, m = h === void 0 ? {} : h, g = t.restrictToPath, _ = (0, Ht.useRef)({
    x: c,
    y: d,
    dx: u,
    dy: f
  }), S = (0, km.default)({
    x: c,
    y: d,
    dx: u ?? 0,
    dy: f ?? 0,
    isDragging: !1
  }), v = S[0], b = S[1], E = (0, Ht.useState)(new gn.Point({
    x: 0,
    y: 0
  })), x = E[0], C = E[1];
  (0, Ht.useEffect)(function() {
    (_.current.x !== c || _.current.y !== d || _.current.dx !== u || _.current.dy !== f) && (_.current = {
      x: c,
      y: d,
      dx: u,
      dy: f
    }, b(function(j) {
      return Nt({}, j, {
        x: c,
        y: d,
        dx: u ?? 0,
        dy: f ?? 0
      });
    }));
  }), (0, Ht.useEffect)(function() {
    p !== void 0 && v.isDragging !== p && b(function(j) {
      return Nt({}, j, {
        isDragging: p
      });
    });
  }, [v.isDragging, p, b]);
  var N = (0, jm.default)(g), G = (0, Ht.useCallback)(function(j) {
    j.persist(), b(function(V) {
      var Z = V.x, Q = Z === void 0 ? 0 : Z, $ = V.y, W = $ === void 0 ? 0 : $, J = V.dx, z = V.dy, H = new gn.Point({
        x: (Q || 0) + J,
        y: (W || 0) + z
      }), K = (0, ia.localPoint)(j) || new gn.Point({
        x: 0,
        y: 0
      }), Se = i ? K : H, oe = (0, sa.default)(Se, N, m);
      return C((0, gn.subtractPoints)(H, K)), {
        isDragging: !0,
        dx: r ? 0 : V.dx,
        dy: r ? 0 : V.dy,
        x: r ? oe.x : oe.x - V.dx,
        y: r ? oe.y : oe.y - V.dy
      };
    }, l && function(V) {
      l(Nt({}, V, {
        event: j
      }));
    });
  }, [l, r, m, N, b, i]), T = (0, Ht.useCallback)(function(j) {
    j.persist(), b(function(V) {
      if (!V.isDragging)
        return V;
      var Z = V.x, Q = Z === void 0 ? 0 : Z, $ = V.y, W = $ === void 0 ? 0 : $, J = (0, ia.localPoint)(j) || new gn.Point({
        x: 0,
        y: 0
      }), z = i ? J : (0, gn.sumPoints)(J, x), H = (0, sa.default)(z, N, m);
      return Nt({}, V, {
        dx: H.x - Q,
        dy: H.y - W
      });
    }, a && function(V) {
      V.isDragging && a(Nt({}, V, {
        event: j
      }));
    });
  }, [b, a, i, x, N, m]), P = (0, Ht.useCallback)(function(j) {
    j.persist(), b(function(V) {
      return Nt({}, V, {
        isDragging: !1
      });
    }, s && function(V) {
      s(Nt({}, V, {
        event: j
      }));
    });
  }, [s, b]);
  return Nt({}, v, {
    dragEnd: P,
    dragMove: T,
    dragStart: G
  });
}
function Wr() {
  return Wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Wr.apply(this, arguments);
}
var aa = {
  r: 10,
  fill: "transparent",
  stroke: "#777",
  strokeDasharray: "4,2",
  strokeWidth: 2
};
function Vm(e) {
  var t = e.canEditLabel, n = t === void 0 ? !0 : t, r = e.canEditSubject, o = r === void 0 ? !0 : r, i = e.children, s = e.dx, a = s === void 0 ? 0 : s, l = e.dy, c = l === void 0 ? 0 : l, d = e.height, u = e.labelDragHandleProps, f = e.onDragEnd, p = e.onDragMove, h = e.onDragStart, m = e.subjectDragHandleProps, g = e.width, _ = e.x, S = _ === void 0 ? 0 : _, v = e.y, b = v === void 0 ? 0 : v, E = O.useRef(), x = O.useRef(), C = O.useCallback(function(j) {
    var V = j.event;
    if (h) {
      var Z, Q, $, W, J, z, H, K;
      h({
        event: V,
        x: S + ((Z = (Q = E.current) == null ? void 0 : Q.dx) != null ? Z : 0),
        y: b + (($ = (W = E.current) == null ? void 0 : W.dy) != null ? $ : 0),
        dx: a + ((J = (z = x.current) == null ? void 0 : z.dx) != null ? J : 0),
        dy: c + ((H = (K = x.current) == null ? void 0 : K.dy) != null ? H : 0)
      });
    }
  }, [a, c, h, S, b]), N = O.useCallback(function(j) {
    var V = j.event;
    if (p) {
      var Z, Q, $, W, J, z, H, K;
      p({
        event: V,
        x: S + ((Z = (Q = E.current) == null ? void 0 : Q.dx) != null ? Z : 0),
        y: b + (($ = (W = E.current) == null ? void 0 : W.dy) != null ? $ : 0),
        dx: a + ((J = (z = x.current) == null ? void 0 : z.dx) != null ? J : 0),
        dy: c + ((H = (K = x.current) == null ? void 0 : K.dy) != null ? H : 0)
      });
    }
  }, [a, c, p, S, b]), G = O.useCallback(function(j) {
    var V = j.event;
    if (f) {
      var Z, Q, $, W, J, z, H, K;
      f({
        event: V,
        x: S + ((Z = (Q = E.current) == null ? void 0 : Q.dx) != null ? Z : 0),
        y: b + (($ = (W = E.current) == null ? void 0 : W.dy) != null ? $ : 0),
        dx: a + ((J = (z = x.current) == null ? void 0 : z.dx) != null ? J : 0),
        dy: c + ((H = (K = x.current) == null ? void 0 : K.dy) != null ? H : 0)
      });
    }
  }, [a, c, f, S, b]), T = oa({
    onDragStart: C,
    onDragMove: N,
    onDragEnd: G,
    x: S,
    y: b
  }), P = oa({
    onDragStart: C,
    onDragMove: N,
    onDragEnd: G,
    x: a,
    y: c
  });
  return E.current = T, x.current = P, /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(lc, {
    x: S + T.dx,
    y: b + T.dy,
    dx: a + P.dx,
    dy: c + P.dy
  }, i), T.isDragging && /* @__PURE__ */ R.createElement("rect", {
    width: g,
    height: d,
    onMouseMove: T.dragMove,
    onMouseUp: T.dragEnd,
    fill: "transparent"
  }), o && /* @__PURE__ */ R.createElement("circle", Wr({
    cx: S,
    cy: b,
    transform: "translate(" + T.dx + "," + T.dy + ")",
    onMouseMove: T.dragMove,
    onMouseUp: T.dragEnd,
    onMouseDown: T.dragStart,
    onTouchStart: T.dragStart,
    onTouchMove: T.dragMove,
    onTouchEnd: T.dragEnd,
    cursor: T.isDragging ? "grabbing" : "grab"
  }, aa, m)), P.isDragging && /* @__PURE__ */ R.createElement("rect", {
    width: g,
    height: d,
    onMouseMove: P.dragMove,
    onMouseUp: P.dragEnd,
    fill: "transparent"
  }), n && /* @__PURE__ */ R.createElement("circle", Wr({
    cx: S + T.dx + a,
    cy: b + T.dy + c,
    transform: "translate(" + P.dx + "," + P.dy + ")",
    onMouseMove: P.dragMove,
    onMouseUp: P.dragEnd,
    onMouseDown: P.dragStart,
    onTouchStart: P.dragStart,
    onTouchMove: P.dragMove,
    onTouchEnd: P.dragEnd,
    cursor: P.isDragging ? "grabbing" : "grab"
  }, aa, u)));
}
Vm.propTypes = {
  width: F.number.isRequired,
  height: F.number.isRequired,
  children: F.node.isRequired,
  canEditLabel: F.bool,
  canEditSubject: F.bool,
  onDragStart: F.func,
  onDragMove: F.func,
  onDragEnd: F.func
};
var $m = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function hi() {
  return hi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hi.apply(this, arguments);
}
function Fm(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function uc(e) {
  var t = e.id, n = e.markerWidth, r = n === void 0 ? 3 : n, o = e.markerHeight, i = o === void 0 ? 3 : o, s = e.markerUnits, a = s === void 0 ? "userSpaceOnUse" : s, l = e.children, c = Fm(e, $m);
  return /* @__PURE__ */ R.createElement("defs", null, /* @__PURE__ */ R.createElement("marker", hi({
    id: t,
    markerWidth: r,
    markerHeight: i,
    markerUnits: a
  }, c), l));
}
uc.propTypes = {
  id: F.string.isRequired,
  size: F.number,
  markerWidth: F.oneOfType([F.string, F.number]),
  markerHeight: F.oneOfType([F.string, F.number]),
  markerUnits: F.string,
  refX: F.oneOfType([F.string, F.number]),
  refY: F.oneOfType([F.string, F.number]),
  strokeWidth: F.number,
  children: F.node.isRequired
};
var Gm = ["id", "size", "strokeWidth"];
function mi() {
  return mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, mi.apply(this, arguments);
}
function zm(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function $0(e) {
  var t = e.id, n = e.size, r = n === void 0 ? 9 : n, o = e.strokeWidth, i = o === void 0 ? 1 : o, s = zm(e, Gm), a = r + i * 2, l = r, c = a / 2, d = "0 0, " + r + " " + r / 2 + ", 0 " + r;
  return /* @__PURE__ */ R.createElement(uc, mi({
    id: t,
    markerWidth: a,
    markerHeight: a,
    refX: l,
    refY: c,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: i
  }, s), /* @__PURE__ */ R.createElement("g", {
    transform: "translate(" + i + ", " + i + ")"
  }, /* @__PURE__ */ R.createElement("polyline", {
    points: d
  })));
}
const Um = 0.02, Wm = 20, Hm = 8, qm = (e, t, n) => {
  const r = n ? (e == null ? void 0 : e.replace(" ", "").split(",").map(Number).filter(Boolean)) || [] : [], o = Ku.clamp(t * Um, Hm, Wm), i = r.length * o;
  return {
    legendSeparators: r,
    separatorSize: o,
    legendSeparatorsToSubtract: i,
    getTickSeparatorsAdjustment: (a) => r.reduce((l, c) => a >= c ? l + o : l, 0)
  };
}, it = 1, Ym = 1, Km = "#d3d3d3", Xm = 576, F0 = ({
  labels: e,
  colors: t,
  config: n,
  dimensions: r,
  parentPaddingToSubtract: o = 0
}) => {
  const { uid: i, legend: s, type: a } = n, { tickRotation: l, position: c, style: d, subStyle: u, separators: f } = s, p = u === "linear blocks";
  let [h] = r;
  const m = h <= Xm, g = Number(h) - o - it * 2 - Ym * 2, _ = `${i}-${Date.now()}`, { legendSeparators: S, separatorSize: v, legendSeparatorsToSubtract: b, getTickSeparatorsAdjustment: E } = qm(f, g, p), x = t == null ? void 0 : t.length, C = (e || []).reduce(($, W) => $.length > String(W).length ? $ : W, ""), N = 20;
  let G = 50;
  const T = Bh(C, "normal 14px sans-serif"), P = Number(l) || 0, j = P * (Math.PI / 180), V = G + Number(T) * Math.sin(j), Z = t.map(($, W) => {
    const J = W / (t.length - 1) * 100;
    return /* @__PURE__ */ y("stop", { offset: `${J}%`, style: { stopColor: $, stopOpacity: 1 } }, W);
  }), Q = e.map(($, W) => {
    const J = (g - b) / x, z = W * J + J + it + E(W), H = P ? "end" : "middle", K = P ? "middle" : "start", Se = W === e.length - 1;
    return /* @__PURE__ */ k(Kn, { top: it, children: [
      !Se && !p && /* @__PURE__ */ y("line", { x1: z, x2: z, y1: 30, y2: N, stroke: "black" }),
      /* @__PURE__ */ y(
        Xu,
        {
          angle: -l,
          x: z,
          y: N,
          dy: 10,
          dx: -J / 2,
          fontSize: m ? "12" : "14",
          textAnchor: H,
          verticalAnchor: K,
          width: J,
          lineHeight: "14",
          children: $
        }
      )
    ] });
  });
  if (!(a === "map" && c === "side" || !c) && !(a === "chart" && (c === "left" || c === "right" || !c)) && d === "gradient")
    return (
      // TODO: figure out why bootstrap 'overflow: visible' is not working consistently
      /* @__PURE__ */ k("svg", { className: "w-100 overflow-visible", height: V, style: { overflow: "visible" }, width: h, children: [
        /* @__PURE__ */ y("rect", { x: 0, y: 0, width: g + it * 2, height: N + it * 2, fill: Km }),
        /* @__PURE__ */ y("linearGradient", { id: `gradient-smooth-${_}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: Z }),
        u === "smooth" && /* @__PURE__ */ y(
          "rect",
          {
            x: it,
            y: it,
            width: g,
            height: N,
            fill: `url(#gradient-smooth-${_})`
          }
        ),
        u === "linear blocks" && /* @__PURE__ */ k(mt, { children: [
          t.map(($, W) => {
            const J = (g - b) / x, z = W * J + it + E(W);
            return /* @__PURE__ */ y(Kn, { children: /* @__PURE__ */ y(
              "rect",
              {
                x: z,
                y: it,
                width: J,
                height: N,
                fill: $,
                stroke: "white",
                strokeWidth: "0"
              },
              W
            ) });
          }),
          S.map(($, W) => {
            const J = (g - b) / x, z = $ * J + it + E($ - 1);
            return /* @__PURE__ */ k(Kn, { children: [
              /* @__PURE__ */ y(
                "rect",
                {
                  x: z,
                  y: it / 2,
                  width: v,
                  height: N + it,
                  fill: "white",
                  stroke: "white",
                  strokeWidth: it
                },
                W
              ),
              /* @__PURE__ */ y(
                "line",
                {
                  x1: z + v / 2,
                  x2: z + v / 2,
                  y1: -3,
                  y2: N + it + 3,
                  stroke: "var(--colors-gray-cool-40,#8d9297)",
                  strokeWidth: 1,
                  strokeDasharray: "5,3",
                  strokeDashoffset: 1
                },
                W
              )
            ] });
          })
        ] }),
        /* @__PURE__ */ y("g", { children: Q })
      ] })
    );
};
var dc = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, la = R.createContext && /* @__PURE__ */ R.createContext(dc), Zm = ["attr", "size", "title"];
function Jm(e, t) {
  if (e == null)
    return {};
  var n = Qm(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Qm(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0)
        continue;
      n[r] = e[r];
    }
  return n;
}
function Hr() {
  return Hr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Hr.apply(this, arguments);
}
function ca(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ca(Object(n), !0).forEach(function(r) {
      eg(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ca(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function eg(e, t, n) {
  return t = tg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function tg(e) {
  var t = ng(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ng(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fc(e) {
  return e && e.map((t, n) => /* @__PURE__ */ R.createElement(t.tag, qr({
    key: n
  }, t.attr), fc(t.child)));
}
function G0(e) {
  return (t) => /* @__PURE__ */ R.createElement(rg, Hr({
    attr: qr({}, e.attr)
  }, t), fc(e.child));
}
function rg(e) {
  var t = (n) => {
    var {
      attr: r,
      size: o,
      title: i
    } = e, s = Jm(e, Zm), a = o || n.size || "1em", l;
    return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ R.createElement("svg", Hr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, s, {
      className: l,
      style: qr(qr({
        color: e.color || n.color
      }, n.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ R.createElement("title", null, i), e.children);
  };
  return la !== void 0 ? /* @__PURE__ */ R.createElement(la.Consumer, null, (n) => t(n)) : t(dc);
}
function rr(e) {
  "@babel/helpers - typeof";
  return rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rr(e);
}
function og(e, t) {
  if (rr(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (rr(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ig(e) {
  var t = og(e, "string");
  return rr(t) == "symbol" ? t : t + "";
}
function sg(e, t, n) {
  return (t = ig(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ua(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function da(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ua(Object(n), !0).forEach(function(r) {
      sg(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ua(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function st(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var fa = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), No = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, pa = {
  INIT: "@@redux/INIT" + No(),
  REPLACE: "@@redux/REPLACE" + No(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + No();
  }
};
function ag(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function lg(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  var t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (dg(e))
    return "date";
  if (ug(e))
    return "error";
  var n = cg(e);
  switch (n) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return n;
  }
  return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function cg(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function ug(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function dg(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Jt(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = lg(e)), t;
}
function pc(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? st(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? st(1) : "Expected the enhancer to be a function. Instead, received: '" + Jt(n) + "'");
    return n(pc)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? st(2) : "Expected the root reducer to be a function. Instead, received: '" + Jt(e) + "'");
  var o = e, i = t, s = [], a = s, l = !1;
  function c() {
    a === s && (a = s.slice());
  }
  function d() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? st(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function u(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? st(4) : "Expected the listener to be a function. Instead, received: '" + Jt(m) + "'");
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? st(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var g = !0;
    return c(), a.push(m), function() {
      if (g) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? st(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        g = !1, c();
        var S = a.indexOf(m);
        a.splice(S, 1), s = null;
      }
    };
  }
  function f(m) {
    if (!ag(m))
      throw new Error(process.env.NODE_ENV === "production" ? st(7) : "Actions must be plain objects. Instead, the actual type was: '" + Jt(m) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof m.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? st(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? st(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = o(i, m);
    } finally {
      l = !1;
    }
    for (var g = s = a, _ = 0; _ < g.length; _++) {
      var S = g[_];
      S();
    }
    return m;
  }
  function p(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? st(10) : "Expected the nextReducer to be a function. Instead, received: '" + Jt(m));
    o = m, f({
      type: pa.REPLACE
    });
  }
  function h() {
    var m, g = u;
    return m = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(S) {
        if (typeof S != "object" || S === null)
          throw new Error(process.env.NODE_ENV === "production" ? st(11) : "Expected the observer to be an object. Instead, received: '" + Jt(S) + "'");
        function v() {
          S.next && S.next(d());
        }
        v();
        var b = g(v);
        return {
          unsubscribe: b
        };
      }
    }, m[fa] = function() {
      return this;
    }, m;
  }
  return f({
    type: pa.INIT
  }), r = {
    dispatch: f,
    subscribe: u,
    getState: d,
    replaceReducer: p
  }, r[fa] = h, r;
}
function ha(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function ma(e, t) {
  if (typeof e == "function")
    return ha(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? st(16) : "bindActionCreators expected an object or a function, but instead received: '" + Jt(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = ha(o, t));
  }
  return n;
}
function hc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0 ? function(r) {
    return r;
  } : t.length === 1 ? t[0] : t.reduce(function(r, o) {
    return function() {
      return r(o.apply(void 0, arguments));
    };
  });
}
function fg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? st(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, s = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, a = t.map(function(l) {
        return l(s);
      });
      return i = hc.apply(void 0, a)(o.dispatch), da(da({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var gi = { exports: {} }, Co = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ga;
function pg() {
  if (ga)
    return Co;
  ga = 1;
  var e = O;
  function t(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
  function a(u, f) {
    var p = f(), h = r({ inst: { value: p, getSnapshot: f } }), m = h[0].inst, g = h[1];
    return i(
      function() {
        m.value = p, m.getSnapshot = f, l(m) && g({ inst: m });
      },
      [u, p, f]
    ), o(
      function() {
        return l(m) && g({ inst: m }), u(function() {
          l(m) && g({ inst: m });
        });
      },
      [u]
    ), s(p), p;
  }
  function l(u) {
    var f = u.getSnapshot;
    u = u.value;
    try {
      var p = f();
      return !n(u, p);
    } catch {
      return !0;
    }
  }
  function c(u, f) {
    return f();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : a;
  return Co.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Co;
}
var Ao = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var va;
function hg() {
  return va || (va = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p, h) {
      return p === h && (p !== 0 || 1 / p === 1 / h) || p !== p && h !== h;
    }
    function t(p, h) {
      d || o.startTransition === void 0 || (d = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var m = h();
      if (!u) {
        var g = h();
        i(m, g) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), u = !0);
      }
      g = s({
        inst: { value: m, getSnapshot: h }
      });
      var _ = g[0].inst, S = g[1];
      return l(
        function() {
          _.value = m, _.getSnapshot = h, n(_) && S({ inst: _ });
        },
        [p, m, h]
      ), a(
        function() {
          return n(_) && S({ inst: _ }), p(function() {
            n(_) && S({ inst: _ });
          });
        },
        [p]
      ), c(m), m;
    }
    function n(p) {
      var h = p.getSnapshot;
      p = p.value;
      try {
        var m = h();
        return !i(p, m);
      } catch {
        return !0;
      }
    }
    function r(p, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = O, i = typeof Object.is == "function" ? Object.is : e, s = o.useState, a = o.useEffect, l = o.useLayoutEffect, c = o.useDebugValue, d = !1, u = !1, f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    Ao.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ao;
}
process.env.NODE_ENV === "production" ? gi.exports = pg() : gi.exports = hg();
var qi = gi.exports, To = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ya;
function mg() {
  if (ya)
    return To;
  ya = 1;
  var e = O, t = qi;
  function n(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return To.useSyncExternalStoreWithSelector = function(c, d, u, f, p) {
    var h = i(null);
    if (h.current === null) {
      var m = { hasValue: !1, value: null };
      h.current = m;
    } else
      m = h.current;
    h = a(
      function() {
        function _(x) {
          if (!S) {
            if (S = !0, v = x, x = f(x), p !== void 0 && m.hasValue) {
              var C = m.value;
              if (p(C, x))
                return b = C;
            }
            return b = x;
          }
          if (C = b, r(v, x))
            return C;
          var N = f(x);
          return p !== void 0 && p(C, N) ? (v = x, C) : (v = x, b = N);
        }
        var S = !1, v, b, E = u === void 0 ? null : u;
        return [
          function() {
            return _(d());
          },
          E === null ? void 0 : function() {
            return _(E());
          }
        ];
      },
      [d, u, f, p]
    );
    var g = o(c, h[0], h[1]);
    return s(
      function() {
        m.hasValue = !0, m.value = g;
      },
      [g]
    ), l(g), g;
  }, To;
}
var Po = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ba;
function gg() {
  return ba || (ba = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, d) {
      return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = O, n = qi, r = typeof Object.is == "function" ? Object.is : e, o = n.useSyncExternalStore, i = t.useRef, s = t.useEffect, a = t.useMemo, l = t.useDebugValue;
    Po.useSyncExternalStoreWithSelector = function(c, d, u, f, p) {
      var h = i(null);
      if (h.current === null) {
        var m = { hasValue: !1, value: null };
        h.current = m;
      } else
        m = h.current;
      h = a(
        function() {
          function _(x) {
            if (!S) {
              if (S = !0, v = x, x = f(x), p !== void 0 && m.hasValue) {
                var C = m.value;
                if (p(C, x))
                  return b = C;
              }
              return b = x;
            }
            if (C = b, r(v, x))
              return C;
            var N = f(x);
            return p !== void 0 && p(C, N) ? (v = x, C) : (v = x, b = N);
          }
          var S = !1, v, b, E = u === void 0 ? null : u;
          return [
            function() {
              return _(d());
            },
            E === null ? void 0 : function() {
              return _(E());
            }
          ];
        },
        [d, u, f, p]
      );
      var g = o(c, h[0], h[1]);
      return s(
        function() {
          m.hasValue = !0, m.value = g;
        },
        [g]
      ), l(g), g;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Po;
}
process.env.NODE_ENV === "production" ? mg() : gg();
function vg(e) {
  e();
}
let mc = vg;
const yg = (e) => mc = e, bg = () => mc, Ea = Symbol.for("react-redux-context"), wa = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Eg() {
  var e;
  if (!O.createContext)
    return {};
  const t = (e = wa[Ea]) != null ? e : wa[Ea] = /* @__PURE__ */ new Map();
  let n = t.get(O.createContext);
  return n || (n = O.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(O.createContext, n)), n;
}
const gc = /* @__PURE__ */ Eg(), wg = () => {
  throw new Error("uSES not initialized!");
};
function vc(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1)
        continue;
      n[r] = e[r];
    }
  return n;
}
var vi = { exports: {} }, me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _a;
function _g() {
  if (_a)
    return me;
  _a = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function v(E) {
    if (typeof E == "object" && E !== null) {
      var x = E.$$typeof;
      switch (x) {
        case t:
          switch (E = E.type, E) {
            case l:
            case c:
            case r:
            case i:
            case o:
            case u:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case a:
                case d:
                case h:
                case p:
                case s:
                  return E;
                default:
                  return x;
              }
          }
        case n:
          return x;
      }
    }
  }
  function b(E) {
    return v(E) === c;
  }
  return me.AsyncMode = l, me.ConcurrentMode = c, me.ContextConsumer = a, me.ContextProvider = s, me.Element = t, me.ForwardRef = d, me.Fragment = r, me.Lazy = h, me.Memo = p, me.Portal = n, me.Profiler = i, me.StrictMode = o, me.Suspense = u, me.isAsyncMode = function(E) {
    return b(E) || v(E) === l;
  }, me.isConcurrentMode = b, me.isContextConsumer = function(E) {
    return v(E) === a;
  }, me.isContextProvider = function(E) {
    return v(E) === s;
  }, me.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, me.isForwardRef = function(E) {
    return v(E) === d;
  }, me.isFragment = function(E) {
    return v(E) === r;
  }, me.isLazy = function(E) {
    return v(E) === h;
  }, me.isMemo = function(E) {
    return v(E) === p;
  }, me.isPortal = function(E) {
    return v(E) === n;
  }, me.isProfiler = function(E) {
    return v(E) === i;
  }, me.isStrictMode = function(E) {
    return v(E) === o;
  }, me.isSuspense = function(E) {
    return v(E) === u;
  }, me.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === c || E === i || E === o || E === u || E === f || typeof E == "object" && E !== null && (E.$$typeof === h || E.$$typeof === p || E.$$typeof === s || E.$$typeof === a || E.$$typeof === d || E.$$typeof === g || E.$$typeof === _ || E.$$typeof === S || E.$$typeof === m);
  }, me.typeOf = v, me;
}
var ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Da;
function Dg() {
  return Da || (Da = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function v(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === r || I === c || I === i || I === o || I === u || I === f || typeof I == "object" && I !== null && (I.$$typeof === h || I.$$typeof === p || I.$$typeof === s || I.$$typeof === a || I.$$typeof === d || I.$$typeof === g || I.$$typeof === _ || I.$$typeof === S || I.$$typeof === m);
    }
    function b(I) {
      if (typeof I == "object" && I !== null) {
        var pe = I.$$typeof;
        switch (pe) {
          case t:
            var B = I.type;
            switch (B) {
              case l:
              case c:
              case r:
              case i:
              case o:
              case u:
                return B;
              default:
                var ee = B && B.$$typeof;
                switch (ee) {
                  case a:
                  case d:
                  case h:
                  case p:
                  case s:
                    return ee;
                  default:
                    return pe;
                }
            }
          case n:
            return pe;
        }
      }
    }
    var E = l, x = c, C = a, N = s, G = t, T = d, P = r, j = h, V = p, Z = n, Q = i, $ = o, W = u, J = !1;
    function z(I) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(I) || b(I) === l;
    }
    function H(I) {
      return b(I) === c;
    }
    function K(I) {
      return b(I) === a;
    }
    function Se(I) {
      return b(I) === s;
    }
    function oe(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function Ie(I) {
      return b(I) === d;
    }
    function re(I) {
      return b(I) === r;
    }
    function we(I) {
      return b(I) === h;
    }
    function Le(I) {
      return b(I) === p;
    }
    function Ye(I) {
      return b(I) === n;
    }
    function Ne(I) {
      return b(I) === i;
    }
    function Ue(I) {
      return b(I) === o;
    }
    function Ce(I) {
      return b(I) === u;
    }
    ge.AsyncMode = E, ge.ConcurrentMode = x, ge.ContextConsumer = C, ge.ContextProvider = N, ge.Element = G, ge.ForwardRef = T, ge.Fragment = P, ge.Lazy = j, ge.Memo = V, ge.Portal = Z, ge.Profiler = Q, ge.StrictMode = $, ge.Suspense = W, ge.isAsyncMode = z, ge.isConcurrentMode = H, ge.isContextConsumer = K, ge.isContextProvider = Se, ge.isElement = oe, ge.isForwardRef = Ie, ge.isFragment = re, ge.isLazy = we, ge.isMemo = Le, ge.isPortal = Ye, ge.isProfiler = Ne, ge.isStrictMode = Ue, ge.isSuspense = Ce, ge.isValidElementType = v, ge.typeOf = b;
  }()), ge;
}
process.env.NODE_ENV === "production" ? vi.exports = _g() : vi.exports = Dg();
var Sg = vi.exports, Yi = Sg, Og = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, xg = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ng = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, yc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ki = {};
Ki[Yi.ForwardRef] = Ng;
Ki[Yi.Memo] = yc;
function Sa(e) {
  return Yi.isMemo(e) ? yc : Ki[e.$$typeof] || Og;
}
var Cg = Object.defineProperty, Ag = Object.getOwnPropertyNames, Oa = Object.getOwnPropertySymbols, Tg = Object.getOwnPropertyDescriptor, Pg = Object.getPrototypeOf, xa = Object.prototype;
function bc(e, t, n) {
  if (typeof t != "string") {
    if (xa) {
      var r = Pg(t);
      r && r !== xa && bc(e, r, n);
    }
    var o = Ag(t);
    Oa && (o = o.concat(Oa(t)));
    for (var i = Sa(e), s = Sa(t), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!xg[l] && !(n && n[l]) && !(s && s[l]) && !(i && i[l])) {
        var c = Tg(t, l);
        try {
          Cg(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ig = bc;
const Na = /* @__PURE__ */ Yu(Ig);
var yi = { exports: {} }, ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca;
function Rg() {
  if (Ca)
    return ve;
  Ca = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function m(g) {
    if (typeof g == "object" && g !== null) {
      var _ = g.$$typeof;
      switch (_) {
        case e:
          switch (g = g.type, g) {
            case n:
            case o:
            case r:
            case c:
            case d:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case a:
                case s:
                case l:
                case f:
                case u:
                case i:
                  return g;
                default:
                  return _;
              }
          }
        case t:
          return _;
      }
    }
  }
  return ve.ContextConsumer = s, ve.ContextProvider = i, ve.Element = e, ve.ForwardRef = l, ve.Fragment = n, ve.Lazy = f, ve.Memo = u, ve.Portal = t, ve.Profiler = o, ve.StrictMode = r, ve.Suspense = c, ve.SuspenseList = d, ve.isAsyncMode = function() {
    return !1;
  }, ve.isConcurrentMode = function() {
    return !1;
  }, ve.isContextConsumer = function(g) {
    return m(g) === s;
  }, ve.isContextProvider = function(g) {
    return m(g) === i;
  }, ve.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, ve.isForwardRef = function(g) {
    return m(g) === l;
  }, ve.isFragment = function(g) {
    return m(g) === n;
  }, ve.isLazy = function(g) {
    return m(g) === f;
  }, ve.isMemo = function(g) {
    return m(g) === u;
  }, ve.isPortal = function(g) {
    return m(g) === t;
  }, ve.isProfiler = function(g) {
    return m(g) === o;
  }, ve.isStrictMode = function(g) {
    return m(g) === r;
  }, ve.isSuspense = function(g) {
    return m(g) === c;
  }, ve.isSuspenseList = function(g) {
    return m(g) === d;
  }, ve.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === o || g === r || g === c || g === d || g === p || typeof g == "object" && g !== null && (g.$$typeof === f || g.$$typeof === u || g.$$typeof === i || g.$$typeof === s || g.$$typeof === l || g.$$typeof === h || g.getModuleId !== void 0);
  }, ve.typeOf = m, ve;
}
var ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aa;
function Mg() {
  return Aa || (Aa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = !1, m = !1, g = !1, _ = !1, S = !1, v;
    v = Symbol.for("react.module.reference");
    function b(B) {
      return !!(typeof B == "string" || typeof B == "function" || B === n || B === o || S || B === r || B === c || B === d || _ || B === p || h || m || g || typeof B == "object" && B !== null && (B.$$typeof === f || B.$$typeof === u || B.$$typeof === i || B.$$typeof === s || B.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      B.$$typeof === v || B.getModuleId !== void 0));
    }
    function E(B) {
      if (typeof B == "object" && B !== null) {
        var ee = B.$$typeof;
        switch (ee) {
          case e:
            var de = B.type;
            switch (de) {
              case n:
              case o:
              case r:
              case c:
              case d:
                return de;
              default:
                var ke = de && de.$$typeof;
                switch (ke) {
                  case a:
                  case s:
                  case l:
                  case f:
                  case u:
                  case i:
                    return ke;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var x = s, C = i, N = e, G = l, T = n, P = f, j = u, V = t, Z = o, Q = r, $ = c, W = d, J = !1, z = !1;
    function H(B) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(B) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Se(B) {
      return E(B) === s;
    }
    function oe(B) {
      return E(B) === i;
    }
    function Ie(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function re(B) {
      return E(B) === l;
    }
    function we(B) {
      return E(B) === n;
    }
    function Le(B) {
      return E(B) === f;
    }
    function Ye(B) {
      return E(B) === u;
    }
    function Ne(B) {
      return E(B) === t;
    }
    function Ue(B) {
      return E(B) === o;
    }
    function Ce(B) {
      return E(B) === r;
    }
    function I(B) {
      return E(B) === c;
    }
    function pe(B) {
      return E(B) === d;
    }
    ye.ContextConsumer = x, ye.ContextProvider = C, ye.Element = N, ye.ForwardRef = G, ye.Fragment = T, ye.Lazy = P, ye.Memo = j, ye.Portal = V, ye.Profiler = Z, ye.StrictMode = Q, ye.Suspense = $, ye.SuspenseList = W, ye.isAsyncMode = H, ye.isConcurrentMode = K, ye.isContextConsumer = Se, ye.isContextProvider = oe, ye.isElement = Ie, ye.isForwardRef = re, ye.isFragment = we, ye.isLazy = Le, ye.isMemo = Ye, ye.isPortal = Ne, ye.isProfiler = Ue, ye.isStrictMode = Ce, ye.isSuspense = I, ye.isSuspenseList = pe, ye.isValidElementType = b, ye.typeOf = E;
  }()), ye;
}
process.env.NODE_ENV === "production" ? yi.exports = Rg() : yi.exports = Mg();
var Ta = yi.exports;
function Xi(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Io(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Xi(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else
    throw new Error(`Unexpected value for ${t} in connect.`);
}
function Lg(e, t, n) {
  Io(e, "mapStateToProps"), Io(t, "mapDispatchToProps"), Io(n, "mergeProps");
}
const kg = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function jg(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: s
}) {
  let a = !1, l, c, d, u, f;
  function p(S, v) {
    return l = S, c = v, d = e(l, c), u = t(r, c), f = n(d, u, c), a = !0, f;
  }
  function h() {
    return d = e(l, c), t.dependsOnOwnProps && (u = t(r, c)), f = n(d, u, c), f;
  }
  function m() {
    return e.dependsOnOwnProps && (d = e(l, c)), t.dependsOnOwnProps && (u = t(r, c)), f = n(d, u, c), f;
  }
  function g() {
    const S = e(l, c), v = !s(S, d);
    return d = S, v && (f = n(d, u, c)), f;
  }
  function _(S, v) {
    const b = !i(v, c), E = !o(S, l, v, c);
    return l = S, c = v, b && E ? h() : b ? m() : E ? g() : f;
  }
  return function(v, b) {
    return a ? _(v, b) : p(v, b);
  };
}
function Bg(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = vc(t, kg);
  const s = n(e, i), a = r(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && Lg(s, a, l), jg(s, a, l, e, i);
}
function Vg(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function $g(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null)
    return !0;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function Ec(e, t, n) {
  $g(e) || Xi(`${n}() in ${t} must return a plain object. Instead received ${e}.`);
}
function bi(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Pa(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function wc(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(a, l) {
      return i.dependsOnOwnProps ? i.mapToProps(a, l) : i.mapToProps(a, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(a, l) {
      i.mapToProps = e, i.dependsOnOwnProps = Pa(e);
      let c = i(a, l);
      return typeof c == "function" && (i.mapToProps = c, i.dependsOnOwnProps = Pa(c), c = i(a, l)), process.env.NODE_ENV !== "production" && Ec(c, o, t), c;
    }, i;
  };
}
function Zi(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function Fg(e) {
  return e && typeof e == "object" ? bi((t) => (
    // @ts-ignore
    Vg(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    wc(e, "mapDispatchToProps")
  ) : Zi(e, "mapDispatchToProps") : bi((t) => ({
    dispatch: t
  }));
}
function Gg(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    wc(e, "mapStateToProps")
  ) : Zi(e, "mapStateToProps") : bi(() => ({}));
}
function zg(e, t, n) {
  return En({}, n, e, t);
}
function Ug(e) {
  return function(n, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let i = !1, s;
    return function(l, c, d) {
      const u = e(l, c, d);
      return i ? o(u, s) || (s = u) : (i = !0, s = u, process.env.NODE_ENV !== "production" && Ec(s, r, "mergeProps")), s;
    };
  };
}
function Wg(e) {
  return e ? typeof e == "function" ? Ug(e) : Zi(e, "mergeProps") : () => zg;
}
function Hg() {
  const e = bg();
  let t = null, n = null;
  return {
    clear() {
      t = null, n = null;
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      let r = [], o = t;
      for (; o; )
        r.push(o), o = o.next;
      return r;
    },
    subscribe(r) {
      let o = !0, i = n = {
        callback: r,
        next: null,
        prev: n
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !o || t === null || (o = !1, i.next ? i.next.prev = i.prev : n = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const Ia = {
  notify() {
  },
  get: () => []
};
function _c(e, t) {
  let n, r = Ia, o = 0, i = !1;
  function s(m) {
    d();
    const g = r.subscribe(m);
    let _ = !1;
    return () => {
      _ || (_ = !0, g(), u());
    };
  }
  function a() {
    r.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function c() {
    return i;
  }
  function d() {
    o++, n || (n = t ? t.addNestedSub(l) : e.subscribe(l), r = Hg());
  }
  function u() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Ia);
  }
  function f() {
    i || (i = !0, d());
  }
  function p() {
    i && (i = !1, u());
  }
  const h = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return h;
}
const qg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Yr = qg ? O.useLayoutEffect : O.useEffect;
function Ra(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ro(e, t) {
  if (Ra(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Ra(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const Yg = ["reactReduxForwardedRef"];
let Dc = wg;
const Kg = (e) => {
  Dc = e;
}, Xg = [null, null], Zg = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Jg(e, t, n) {
  Yr(() => e(...t), n);
}
function Qg(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function ev(e, t, n, r, o, i, s, a, l, c, d) {
  if (!e)
    return () => {
    };
  let u = !1, f = null;
  const p = () => {
    if (u || !a.current)
      return;
    const m = t.getState();
    let g, _;
    try {
      g = r(m, o.current);
    } catch (S) {
      _ = S, f = S;
    }
    _ || (f = null), g === i.current ? s.current || c() : (i.current = g, l.current = g, s.current = !0, d());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (u = !0, n.tryUnsubscribe(), n.onStateChange = null, f)
      throw f;
  };
}
function tv(e, t) {
  return e === t;
}
let Ma = !1;
function Sc(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = tv,
  areOwnPropsEqual: i = Ro,
  areStatePropsEqual: s = Ro,
  areMergedPropsEqual: a = Ro,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: c = gc
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !Ma && (Ma = !0, Xi('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const d = c, u = Gg(e), f = Fg(t), p = Wg(n), h = !!e;
  return (g) => {
    if (process.env.NODE_ENV !== "production" && !Ta.isValidElementType(g))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${Zg(g)}`);
    const _ = g.displayName || g.name || "Component", S = `Connect(${_})`, v = {
      shouldHandleStateChanges: h,
      displayName: S,
      wrappedComponentName: _,
      WrappedComponent: g,
      // @ts-ignore
      initMapStateToProps: u,
      // @ts-ignore
      initMapDispatchToProps: f,
      initMergeProps: p,
      areStatesEqual: o,
      areStatePropsEqual: s,
      areOwnPropsEqual: i,
      areMergedPropsEqual: a
    };
    function b(C) {
      const [N, G, T] = O.useMemo(() => {
        const {
          reactReduxForwardedRef: I
        } = C, pe = vc(C, Yg);
        return [C.context, I, pe];
      }, [C]), P = O.useMemo(() => N && N.Consumer && // @ts-ignore
      Ta.isContextConsumer(/* @__PURE__ */ O.createElement(N.Consumer, null)) ? N : d, [N, d]), j = O.useContext(P), V = !!C.store && !!C.store.getState && !!C.store.dispatch, Z = !!j && !!j.store;
      if (process.env.NODE_ENV !== "production" && !V && !Z)
        throw new Error(`Could not find "store" in the context of "${S}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${S} in connect options.`);
      const Q = V ? C.store : j.store, $ = Z ? j.getServerState : Q.getState, W = O.useMemo(() => Bg(Q.dispatch, v), [Q]), [J, z] = O.useMemo(() => {
        if (!h)
          return Xg;
        const I = _c(Q, V ? void 0 : j.subscription), pe = I.notifyNestedSubs.bind(I);
        return [I, pe];
      }, [Q, V, j]), H = O.useMemo(() => V ? j : En({}, j, {
        subscription: J
      }), [V, j, J]), K = O.useRef(), Se = O.useRef(T), oe = O.useRef(), Ie = O.useRef(!1);
      O.useRef(!1);
      const re = O.useRef(!1), we = O.useRef();
      Yr(() => (re.current = !0, () => {
        re.current = !1;
      }), []);
      const Le = O.useMemo(() => () => oe.current && T === Se.current ? oe.current : W(Q.getState(), T), [Q, T]), Ye = O.useMemo(() => (pe) => J ? ev(
        h,
        Q,
        J,
        // @ts-ignore
        W,
        Se,
        K,
        Ie,
        re,
        oe,
        z,
        pe
      ) : () => {
      }, [J]);
      Jg(Qg, [Se, K, Ie, T, oe, z]);
      let Ne;
      try {
        Ne = Dc(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Ye,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Le,
          $ ? () => W($(), T) : Le
        );
      } catch (I) {
        throw we.current && (I.message += `
The error may be correlated with this previous error:
${we.current.stack}

`), I;
      }
      Yr(() => {
        we.current = void 0, oe.current = void 0, K.current = Ne;
      });
      const Ue = O.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ O.createElement(g, En({}, Ne, {
          ref: G
        }))
      ), [G, g, Ne]);
      return O.useMemo(() => h ? /* @__PURE__ */ O.createElement(P.Provider, {
        value: H
      }, Ue) : Ue, [P, Ue, H]);
    }
    const x = O.memo(b);
    if (x.WrappedComponent = g, x.displayName = b.displayName = S, l) {
      const N = O.forwardRef(function(T, P) {
        return /* @__PURE__ */ O.createElement(x, En({}, T, {
          reactReduxForwardedRef: P
        }));
      });
      return N.displayName = S, N.WrappedComponent = g, Na(N, g);
    }
    return Na(x, g);
  };
}
function nv({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const s = O.useMemo(() => {
    const c = _c(e);
    return {
      store: e,
      subscription: c,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), a = O.useMemo(() => e.getState(), [e]);
  Yr(() => {
    const {
      subscription: c
    } = s;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [s, a]);
  const l = t || gc;
  return /* @__PURE__ */ O.createElement(l.Provider, {
    value: s
  }, n);
}
Kg(qi.useSyncExternalStore);
yg(Ri.unstable_batchedUpdates);
function rv(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Oc(e, t) {
  var n = O.useState(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = O.useRef(!0), o = O.useRef(n), i = r.current || !!(t && o.current.inputs && rv(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return O.useEffect(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function ov(e, t) {
  return Oc(function() {
    return e;
  }, t);
}
var ce = Oc, Y = ov, Dt = function(t) {
  var n = t.top, r = t.right, o = t.bottom, i = t.left, s = r - i, a = o - n, l = {
    top: n,
    right: r,
    bottom: o,
    left: i,
    width: s,
    height: a,
    x: i,
    y: n,
    center: {
      x: (r + i) / 2,
      y: (o + n) / 2
    }
  };
  return l;
}, Ji = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, La = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, iv = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, Mo = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Qi = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? Mo : r, i = t.border, s = i === void 0 ? Mo : i, a = t.padding, l = a === void 0 ? Mo : a, c = Dt(Ji(n, o)), d = Dt(La(n, s)), u = Dt(La(d, l));
  return {
    marginBox: c,
    borderBox: Dt(n),
    paddingBox: d,
    contentBox: u,
    margin: o,
    border: s,
    padding: l
  };
}, ht = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Rs(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : Rs(!1)), o;
}, sv = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Kr = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, a = iv(r, n);
  return Qi({
    borderBox: a,
    border: o,
    margin: i,
    padding: s
  });
}, Xr = function(t, n) {
  return n === void 0 && (n = sv()), Kr(t, n);
}, xc = function(t, n) {
  var r = {
    top: ht(n.marginTop),
    right: ht(n.marginRight),
    bottom: ht(n.marginBottom),
    left: ht(n.marginLeft)
  }, o = {
    top: ht(n.paddingTop),
    right: ht(n.paddingRight),
    bottom: ht(n.paddingBottom),
    left: ht(n.paddingLeft)
  }, i = {
    top: ht(n.borderTopWidth),
    right: ht(n.borderRightWidth),
    bottom: ht(n.borderBottomWidth),
    left: ht(n.borderLeftWidth)
  };
  return Qi({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, Nc = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return xc(n, r);
}, ka = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function av(e, t) {
  return !!(e === t || ka(e) && ka(t));
}
function lv(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!av(e[n], t[n]))
      return !1;
  return !0;
}
function Be(e, t) {
  t === void 0 && (t = lv);
  var n = null;
  function r() {
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var s = e.apply(this, o);
    return n = {
      lastResult: s,
      lastArgs: o,
      lastThis: this
    }, s;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
var cv = function(t) {
  var n = [], r = null, o = function() {
    for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++)
      a[l] = arguments[l];
    n = a, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, n);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const or = cv, uv = process.env.NODE_ENV === "production", dv = /[ \t]{2,}/g, fv = /^[ \t]*/gm, ja = (e) => e.replace(dv, " ").replace(fv, "").trim(), pv = (e) => ja(`
  %c@hello-pangea/dnd

  %c${ja(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), hv = (e) => [pv(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], mv = "__@hello-pangea/dnd-disable-dev-warnings";
function Cc(e, t) {
  uv || typeof window < "u" && window[mv] || console[e](...hv(t));
}
const De = Cc.bind(null, "warn"), Ei = Cc.bind(null, "error");
function $t() {
}
function gv(e, t) {
  return {
    ...e,
    ...t
  };
}
function gt(e, t, n) {
  const r = t.map((o) => {
    const i = gv(n, o.options);
    return e.addEventListener(o.eventName, o.fn, i), function() {
      e.removeEventListener(o.eventName, o.fn, i);
    };
  });
  return function() {
    r.forEach((i) => {
      i();
    });
  };
}
const vv = process.env.NODE_ENV === "production", Ba = "Invariant failed";
class ir extends Error {
}
ir.prototype.toString = function() {
  return this.message;
};
function w(e, t) {
  if (!e)
    throw vv ? new ir(Ba) : new ir(`${Ba}: ${t || ""}`);
}
class yv extends R.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = $t, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && De(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof ir && (n.preventDefault(), process.env.NODE_ENV !== "production" && Ei(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = gt(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof ir) {
      process.env.NODE_ENV !== "production" && Ei(t.message), this.setState({});
      return;
    }
    throw t;
  }
  componentWillUnmount() {
    this.unbind();
  }
  render() {
    return this.props.children(this.setCallbacks);
  }
}
const bv = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Zr = (e) => e + 1, Ev = (e) => `
  You have lifted an item in position ${Zr(e.source.index)}
`, Ac = (e, t) => {
  const n = e.droppableId === t.droppableId, r = Zr(e.index), o = Zr(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, Tc = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, wv = (e) => {
  const t = e.destination;
  if (t)
    return Ac(e.source, t);
  const n = e.combine;
  return n ? Tc(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Va = (e) => `
  The item has returned to its starting position
  of ${Zr(e.index)}
`, _v = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Va(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Ac(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${Tc(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Va(e.source)}
  `;
}, Dv = {
  dragHandleUsageInstructions: bv,
  onDragStart: Ev,
  onDragUpdate: wv,
  onDragEnd: _v
};
var Vr = Dv;
const Ve = {
  x: 0,
  y: 0
}, ze = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), lt = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Ft = (e, t) => e.x === t.x && e.y === t.y, Tn = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), an = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, sr = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), $a = (e, t) => Math.min(...t.map((n) => sr(e, n))), Pc = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Sv = (e, t) => {
  const n = Dt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const mr = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Fa = (e) => [{
  x: e.left,
  y: e.top
}, {
  x: e.right,
  y: e.top
}, {
  x: e.left,
  y: e.bottom
}, {
  x: e.right,
  y: e.bottom
}], Ov = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, xv = (e, t) => t ? mr(e, t.scroll.diff.displacement) : e, Nv = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, Cv = (e, t) => t && t.shouldClipSubject ? Sv(t.pageMarginBox, e) : Dt(e);
var Dn = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = xv(e.marginBox, r), i = Nv(o, n, t), s = Cv(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, es = (e, t) => {
  e.frame || (process.env.NODE_ENV, w(!1));
  const n = e.frame, r = lt(t, n.scroll.initial), o = Tn(r), i = {
    ...n,
    scroll: {
      initial: n.scroll.initial,
      current: t,
      diff: {
        value: r,
        displacement: o
      },
      max: n.scroll.max
    }
  }, s = Dn({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: i
  });
  return {
    ...e,
    frame: i,
    subject: s
  };
};
const Ic = Be((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Rc = Be((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), ao = Be((e) => Object.values(e)), Av = Be((e) => Object.values(e));
var cn = Be((e, t) => Av(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function ts(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function lo(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var co = Be((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), Tv = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !ts(o))
    return null;
  function s(p) {
    const h = {
      type: "COMBINE",
      combine: {
        draggableId: p,
        droppableId: n.descriptor.id
      }
    };
    return {
      ...o,
      at: h
    };
  }
  const a = o.displaced.all, l = a.length ? a[0] : null;
  if (e)
    return l ? s(l) : null;
  const c = co(t, r);
  if (!l) {
    if (!c.length)
      return null;
    const p = c[c.length - 1];
    return s(p.descriptor.id);
  }
  const d = c.findIndex((p) => p.descriptor.id === l);
  d === -1 && (process.env.NODE_ENV !== "production" ? w(!1, "Could not find displaced item in set") : w(!1));
  const u = d - 1;
  if (u < 0)
    return null;
  const f = c[u];
  return s(f.descriptor.id);
}, Pn = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Mc = {
  point: Ve,
  value: 0
}, ar = {
  invisible: {},
  visible: {},
  all: []
}, Pv = {
  displaced: ar,
  displacedBy: Mc,
  at: null
};
var Iv = Pv, vt = (e, t) => (n) => e <= n && n <= t, Lc = (e) => {
  const t = vt(e.top, e.bottom), n = vt(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), s = n(r.left) || n(r.right);
    if (i && s)
      return !0;
    const l = r.top < e.top && r.bottom > e.bottom, c = r.left < e.left && r.right > e.right;
    return l && c ? !0 : l && s || c && i;
  };
}, Rv = (e) => {
  const t = vt(e.top, e.bottom), n = vt(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const ns = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, kc = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var Mv = (e) => (t) => {
  const n = vt(t.top, t.bottom), r = vt(t.left, t.right);
  return (o) => e === ns ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const Lv = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : Ve;
  return mr(e, n);
}, kv = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, jv = (e, t, n) => n(t)(e), rs = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? Lv(e, t) : e;
  return kv(i, t, o) && jv(i, n, o);
}, Bv = (e) => rs({
  ...e,
  isVisibleThroughFrameFn: Lc
}), jc = (e) => rs({
  ...e,
  isVisibleThroughFrameFn: Rv
}), Vv = (e) => rs({
  ...e,
  isVisibleThroughFrameFn: Mv(e.destination.axis)
}), $v = (e, t, n) => {
  if (typeof n == "boolean")
    return n;
  if (!t)
    return !0;
  const {
    invisible: r,
    visible: o
  } = t;
  if (r[e])
    return !1;
  const i = o[e];
  return i ? i.shouldAnimate : !0;
};
function Fv(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Dt(Ji(n, r));
}
function lr({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(a, l) {
    const c = Fv(l, n), d = l.descriptor.id;
    if (a.all.push(d), !Bv({
      target: c,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[l.descriptor.id] = !0, a;
    const f = $v(d, i, o), p = {
      draggableId: d,
      shouldAnimate: f
    };
    return a.visible[d] = p, a;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function Gv(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function Ga({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = Gv(e, {
    inHomeList: t
  });
  return {
    displaced: ar,
    displacedBy: n,
    at: {
      type: "REORDER",
      destination: {
        droppableId: r.descriptor.id,
        index: o
      }
    }
  };
}
function Jr({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: s,
  forceShouldAnimate: a
}) {
  const l = Pn(e, n);
  if (s == null)
    return Ga({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: n
    });
  const c = t.find((h) => h.descriptor.index === s);
  if (!c)
    return Ga({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: n
    });
  const d = co(e, t), u = t.indexOf(c), f = d.slice(u);
  return {
    displaced: lr({
      afterDragging: f,
      destination: n,
      displacedBy: o,
      last: i,
      viewport: r.frame,
      forceShouldAnimate: a
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: {
        droppableId: n.descriptor.id,
        index: s
      }
    }
  };
}
function Gt(e, t) {
  return !!t.effected[e];
}
var zv = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = r.draggableId, a = n[i].descriptor.index;
  return Gt(i, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, Uv = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, l = t ? a : a + 1;
  return i < s || i > l ? null : i;
}, Wv = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: n,
  draggables: r,
  destination: o,
  insideDestination: i,
  previousImpact: s,
  viewport: a,
  afterCritical: l
}) => {
  const c = s.at;
  if (c || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot move in direction without previous impact location") : w(!1)), c.type === "REORDER") {
    const u = Uv({
      isMovingForward: e,
      isInHomeList: t,
      location: c.destination,
      insideDestination: i
    });
    return u == null ? null : Jr({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: a,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: u
    });
  }
  const d = zv({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: r,
    combine: c.combine,
    afterCritical: l
  });
  return d == null ? null : Jr({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: a,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: d
  });
}, Hv = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Gt(n, t) ? o ? Ve : Tn(r.point) : o ? r.point : Ve;
}, qv = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = lo(t);
  r || (process.env.NODE_ENV, w(!1));
  const o = r.draggableId, i = n[o].page.borderBox.center, s = Hv({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return ze(i, s);
};
const Bc = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, Yv = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, os = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, za = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => an(e.line, t.marginBox[e.end] + Bc(e, n), os(e, t.marginBox, n)), Ua = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => an(e.line, t.marginBox[e.start] - Yv(e, n), os(e, t.marginBox, n)), Kv = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => an(e.line, t.contentBox[e.start] + Bc(e, n), os(e, t.contentBox, n));
var Xv = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = cn(r.descriptor.id, n), s = t.page, a = r.axis;
  if (!i.length)
    return Kv({
      axis: a,
      moveInto: r.page,
      isMoving: s
    });
  const {
    displaced: l,
    displacedBy: c
  } = e, d = l.all[0];
  if (d) {
    const f = n[d];
    if (Gt(d, o))
      return Ua({
        axis: a,
        moveRelativeTo: f.page,
        isMoving: s
      });
    const p = Kr(f.page, c.point);
    return Ua({
      axis: a,
      moveRelativeTo: p,
      isMoving: s
    });
  }
  const u = i[i.length - 1];
  if (u.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if (Gt(u.descriptor.id, o)) {
    const f = Kr(u.page, Tn(o.displacedBy.point));
    return za({
      axis: a,
      moveRelativeTo: f,
      isMoving: s
    });
  }
  return za({
    axis: a,
    moveRelativeTo: u.page,
    isMoving: s
  });
}, wi = (e, t) => {
  const n = e.frame;
  return n ? ze(t, n.scroll.diff.displacement) : t;
};
const Zv = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? Xv({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : qv({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var uo = (e) => {
  const t = Zv(e), n = e.droppable;
  return n ? wi(n, t) : t;
}, Vc = (e, t) => {
  const n = lt(t, e.scroll.initial), r = Tn(n);
  return {
    frame: Dt({
      top: t.y,
      bottom: t.y + e.frame.height,
      left: t.x,
      right: t.x + e.frame.width
    }),
    scroll: {
      initial: e.scroll.initial,
      max: e.scroll.max,
      current: t,
      diff: {
        value: n,
        displacement: r
      }
    }
  };
};
function Wa(e, t) {
  return e.map((n) => t[n]);
}
function Jv(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var Qv = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = Vc(t, ze(t.scroll.current, o)), s = n.frame ? es(n, ze(n.frame.scroll.current, o)) : n, a = e.displaced, l = lr({
    afterDragging: Wa(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: a,
    forceShouldAnimate: !1
  }), c = lr({
    afterDragging: Wa(a.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), d = {}, u = {}, f = [a, l, c];
  return a.all.forEach((h) => {
    const m = Jv(h, f);
    if (m) {
      u[h] = m;
      return;
    }
    d[h] = !0;
  }), {
    ...e,
    displaced: {
      all: a.all,
      invisible: d,
      visible: u
    }
  };
}, ey = (e, t) => ze(e.scroll.diff.displacement, t), is = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = ey(n, e), o = lt(r, t.page.borderBox.center);
  return ze(t.client.borderBox.center, o);
}, $c = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = lt(n, e.page.borderBox.center), l = {
    target: mr(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? Vv(l) : jc(l);
}, ty = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  draggables: r,
  previousImpact: o,
  viewport: i,
  previousPageBorderBoxCenter: s,
  previousClientSelection: a,
  afterCritical: l
}) => {
  if (!n.isEnabled)
    return null;
  const c = cn(n.descriptor.id, r), d = Pn(t, n), u = Tv({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: c,
    previousImpact: o
  }) || Wv({
    isMovingForward: e,
    isInHomeList: d,
    draggable: t,
    draggables: r,
    destination: n,
    insideDestination: c,
    previousImpact: o,
    viewport: i,
    afterCritical: l
  });
  if (!u)
    return null;
  const f = uo({
    impact: u,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: l
  });
  if ($c({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: f,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: is({
        pageBorderBoxCenter: f,
        draggable: t,
        viewport: i
      }),
      impact: u,
      scrollJumpRequest: null
    };
  const h = lt(f, s), m = Qv({
    impact: u,
    viewport: i,
    destination: n,
    draggables: r,
    maxScrollChange: h
  });
  return {
    clientSelection: a,
    impact: m,
    scrollJumpRequest: h
  };
};
const Je = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot get clipped area from droppable") : w(!1)), t;
};
var ny = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, a = vt(i[s.start], i[s.end]), l = ao(r).filter((d) => d !== n).filter((d) => d.isEnabled).filter((d) => !!d.subject.active).filter((d) => Lc(o.frame)(Je(d))).filter((d) => {
    const u = Je(d);
    return e ? i[s.crossAxisEnd] < u[s.crossAxisEnd] : u[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((d) => {
    const u = Je(d), f = vt(u[s.start], u[s.end]);
    return a(u[s.start]) || a(u[s.end]) || f(i[s.start]) || f(i[s.end]);
  }).sort((d, u) => {
    const f = Je(d)[s.crossAxisStart], p = Je(u)[s.crossAxisStart];
    return e ? f - p : p - f;
  }).filter((d, u, f) => Je(d)[s.crossAxisStart] === Je(f[0])[s.crossAxisStart]);
  if (!l.length)
    return null;
  if (l.length === 1)
    return l[0];
  const c = l.filter((d) => vt(Je(d)[s.start], Je(d)[s.end])(t[s.line]));
  return c.length === 1 ? c[0] : c.length > 1 ? c.sort((d, u) => Je(d)[s.start] - Je(u)[s.start])[0] : l.sort((d, u) => {
    const f = $a(t, Fa(Je(d))), p = $a(t, Fa(Je(u)));
    return f !== p ? f - p : Je(d)[s.start] - Je(u)[s.start];
  })[0];
};
const Ha = (e, t) => {
  const n = e.page.borderBox.center;
  return Gt(e.descriptor.id, t) ? lt(n, t.displacedBy.point) : n;
}, ry = (e, t) => {
  const n = e.page.borderBox;
  return Gt(e.descriptor.id, t) ? mr(n, Tn(t.displacedBy.point)) : n;
};
var oy = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => jc({
  target: ry(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, a) => {
  const l = sr(e, wi(n, Ha(s, o))), c = sr(e, wi(n, Ha(a, o)));
  return l < c ? -1 : c < l ? 1 : s.descriptor.index - a.descriptor.index;
})[0] || null, gr = Be(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: an(t.line, r)
  };
});
const iy = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return an(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], l = cn(e.descriptor.id, n).reduce((c, d) => c + d.client.marginBox[r.size], 0) + t[r.line] - o;
  return l <= 0 ? null : an(r.line, l);
}, Fc = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Gc = (e, t, n) => {
  const r = e.frame;
  Pn(t, e) && (process.env.NODE_ENV !== "production" ? w(!1, "Should not add placeholder space to home list") : w(!1)), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? w(!1, "Cannot add placeholder size to a subject when it already has one") : w(!1));
  const o = gr(e.axis, t.displaceBy).point, i = iy(e, o, n), s = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const d = Dn({
      page: e.subject.page,
      withPlaceholder: s,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: d
    };
  }
  const a = i ? ze(r.scroll.max, i) : r.scroll.max, l = Fc(r, a), c = Dn({
    page: e.subject.page,
    withPlaceholder: s,
    axis: e.axis,
    frame: l
  });
  return {
    ...e,
    subject: c,
    frame: l
  };
}, sy = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot remove placeholder form subject when there was none") : w(!1));
  const n = e.frame;
  if (!n) {
    const s = Dn({
      page: e.subject.page,
      axis: e.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...e,
      subject: s
    };
  }
  const r = t.oldFrameMaxScroll;
  r || (process.env.NODE_ENV !== "production" ? w(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : w(!1));
  const o = Fc(n, r), i = Dn({
    page: e.subject.page,
    axis: e.axis,
    frame: o,
    withPlaceholder: null
  });
  return {
    ...e,
    subject: i,
    frame: o
  };
};
var ay = ({
  previousPageBorderBoxCenter: e,
  moveRelativeTo: t,
  insideDestination: n,
  draggable: r,
  draggables: o,
  destination: i,
  viewport: s,
  afterCritical: a
}) => {
  if (!t) {
    if (n.length)
      return null;
    const u = {
      displaced: ar,
      displacedBy: Mc,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, f = uo({
      impact: u,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: a
    }), p = Pn(r, i) ? i : Gc(i, r, o);
    return $c({
      draggable: r,
      destination: p,
      newPageBorderBoxCenter: f,
      viewport: s.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? u : null;
  }
  const l = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], c = (() => {
    const u = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || l ? u : u + 1;
  })(), d = gr(i.axis, r.displaceBy);
  return Jr({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: d,
    last: ar,
    index: c
  });
}, ly = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: a
}) => {
  const l = ny({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!l)
    return null;
  const c = cn(l.descriptor.id, o), d = oy({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: l,
    insideDestination: c,
    afterCritical: a
  }), u = ay({
    previousPageBorderBoxCenter: t,
    destination: l,
    draggable: n,
    draggables: o,
    moveRelativeTo: d,
    insideDestination: c,
    viewport: s,
    afterCritical: a
  });
  if (!u)
    return null;
  const f = uo({
    impact: u,
    draggable: n,
    droppable: l,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: is({
      pageBorderBoxCenter: f,
      draggable: n,
      viewport: s
    }),
    impact: u,
    scrollJumpRequest: null
  };
}, ct = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const cy = (e, t) => {
  const n = ct(e);
  return n ? t[n] : null;
};
var uy = ({
  state: e,
  type: t
}) => {
  const n = cy(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, a = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const l = t === "MOVE_DOWN" || t === "MOVE_RIGHT", c = e.dimensions.draggables[e.critical.draggable.id], d = e.current.page.borderBoxCenter, {
    draggables: u,
    droppables: f
  } = e.dimensions;
  return a ? ty({
    isMovingForward: l,
    previousPageBorderBoxCenter: d,
    draggable: c,
    destination: i,
    draggables: u,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : ly({
    isMovingForward: l,
    previousPageBorderBoxCenter: d,
    draggable: c,
    isOver: i,
    draggables: u,
    droppables: f,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function Qt(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function zc(e) {
  const t = vt(e.top, e.bottom), n = vt(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function dy(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function fy({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const s = i.axis, a = an(i.axis.line, e.center[s.line], i.page.borderBox.center[s.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: sr(r, a)
    };
  }).sort((i, s) => s.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function py({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = ao(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !dy(e, i))
      return !1;
    if (zc(i)(e.center))
      return !0;
    const s = o.axis, a = i.center[s.crossAxisLine], l = e[s.crossAxisStart], c = e[s.crossAxisEnd], d = vt(i[s.crossAxisStart], i[s.crossAxisEnd]), u = d(l), f = d(c);
    return !u && !f ? !0 : u ? l < a : c > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : fy({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const Uc = (e, t) => Dt(mr(e, t));
var hy = (e, t) => {
  const n = e.frame;
  return n ? Uc(t, n.scroll.diff.value) : t;
};
function Wc({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function my({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var gy = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = n.axis, l = gr(n.axis, t.displaceBy), c = l.value, d = e[a.start], u = e[a.end], p = co(t, r).find((m) => {
    const g = m.descriptor.id, _ = m.page.borderBox.center[a.line], S = Gt(g, s), v = Wc({
      displaced: o,
      id: g
    });
    return S ? v ? u <= _ : d < _ - c : v ? u <= _ + c : d < _;
  }) || null, h = my({
    draggable: t,
    closest: p,
    inHomeList: Pn(t, n)
  });
  return Jr({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: l,
    index: h
  });
};
const vy = 4;
var yy = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, a = gr(r.axis, e.displaceBy), l = a.value, c = t[s.start], d = t[s.end], f = co(e, o).find((h) => {
    const m = h.descriptor.id, g = h.page.borderBox, S = g[s.size] / vy, v = Gt(m, i), b = Wc({
      displaced: n.displaced,
      id: m
    });
    return v ? b ? d > g[s.start] + S && d < g[s.end] - S : c > g[s.start] - l + S && c < g[s.end] - l - S : b ? d > g[s.start] + l + S && d < g[s.end] + l - S : c > g[s.start] + S && c < g[s.end] - S;
  });
  return f ? {
    displacedBy: a,
    displaced: n.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: f.descriptor.id,
        droppableId: r.descriptor.id
      }
    }
  } : null;
}, Hc = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = Uc(t.page.borderBox, e), l = py({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!l)
    return Iv;
  const c = r[l], d = cn(c.descriptor.id, n), u = hy(c, a);
  return yy({
    pageBorderBoxWithDroppableScroll: u,
    draggable: t,
    previousImpact: o,
    destination: c,
    insideDestination: d,
    afterCritical: s
  }) || gy({
    pageBorderBoxWithDroppableScroll: u,
    draggable: t,
    destination: c,
    insideDestination: d,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, ss = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const by = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = ct(e), o = ct(t);
  if (!r || r === o)
    return n;
  const i = n[r];
  if (!i.subject.withPlaceholder)
    return n;
  const s = sy(i);
  return ss(n, s);
};
var Ey = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = by({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = ct(o);
  if (!s)
    return i;
  const a = n[s];
  if (Pn(e, a) || a.subject.withPlaceholder)
    return i;
  const l = Gc(a, e, t);
  return ss(i, l);
}, Qn = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const s = r || e.viewport, a = n || e.dimensions, l = t || e.current.client.selection, c = lt(l, e.initial.client.selection), d = {
    offset: c,
    selection: l,
    borderBoxCenter: ze(e.initial.client.borderBoxCenter, c)
  }, u = {
    selection: ze(d.selection, s.scroll.current),
    borderBoxCenter: ze(d.borderBoxCenter, s.scroll.current),
    offset: ze(d.offset, s.scroll.diff.value)
  }, f = {
    client: d,
    page: u
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: a,
      viewport: s,
      current: f
    };
  const p = a.draggables[e.critical.draggable.id], h = o || Hc({
    pageOffset: u.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: s,
    afterCritical: e.afterCritical
  }), m = Ey({
    draggable: p,
    impact: h,
    previousImpact: e.impact,
    draggables: a.draggables,
    droppables: a.droppables
  });
  return {
    ...e,
    current: f,
    dimensions: {
      draggables: a.draggables,
      droppables: m
    },
    impact: h,
    viewport: s,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function wy(e, t) {
  return e.map((n) => t[n]);
}
var qc = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = wy(i.all, n), a = lr({
    afterDragging: s,
    destination: r,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: o,
    last: i
  });
  return {
    ...e,
    displaced: a
  };
}, Yc = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const s = uo({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return is({
    pageBorderBoxCenter: s,
    draggable: t,
    viewport: o
  });
}, Kc = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, w(!1));
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: s,
    droppables: a
  } = i, l = s[e.critical.draggable.id], c = ct(r);
  c || (process.env.NODE_ENV !== "production" ? w(!1, "Must be over a destination in SNAP movement mode") : w(!1));
  const d = a[c], u = qc({
    impact: r,
    viewport: o,
    destination: d,
    draggables: s
  }), f = Yc({
    impact: u,
    draggable: l,
    droppable: d,
    draggables: s,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Qn({
    impact: u,
    clientSelection: f,
    state: e,
    dimensions: i,
    viewport: o
  });
}, _y = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Xc = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = gr(t.axis, e.displaceBy), i = cn(t.descriptor.id, n), s = i.indexOf(e);
  s === -1 && (process.env.NODE_ENV !== "production" ? w(!1, "Expected draggable to be inside home list") : w(!1));
  const a = i.slice(s + 1), l = a.reduce((f, p) => (f[p.descriptor.id] = !0, f), {}), c = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: l
  };
  return {
    impact: {
      displaced: lr({
        afterDragging: a,
        destination: t,
        displacedBy: o,
        last: null,
        viewport: r.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: o,
      at: {
        type: "REORDER",
        destination: _y(e.descriptor)
      }
    },
    afterCritical: c
  };
}, Dy = (e, t) => ({
  draggables: e.draggables,
  droppables: ss(e.droppables, t)
});
const vr = (e) => {
  process.env.NODE_ENV;
}, yr = (e) => {
  process.env.NODE_ENV;
};
var Sy = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = Kr(e.client, t), o = Xr(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, Oy = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? w(!1, "Expected Droppable to have a frame") : w(!1)), t;
}, xy = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], l = Oy(s).scroll.diff.value, c = ze(r, l);
    return Sy({
      draggable: o,
      offset: c,
      initialWindowScroll: n.scroll.initial
    });
  });
}, Ny = ({
  state: e,
  published: t
}) => {
  vr();
  const n = t.modified.map((_) => {
    const S = e.dimensions.droppables[_.droppableId];
    return es(S, _.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Ic(n)
  }, o = Rc(xy({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((_) => {
    delete i[_];
  });
  const s = {
    droppables: r,
    draggables: i
  }, a = ct(e.impact), l = a ? s.droppables[a] : null, c = s.draggables[e.critical.draggable.id], d = s.droppables[e.critical.droppable.id], {
    impact: u,
    afterCritical: f
  } = Xc({
    draggable: c,
    home: d,
    draggables: i,
    viewport: e.viewport
  }), p = l && l.isCombineEnabled ? e.impact : u, h = Hc({
    pageOffset: e.current.page.offset,
    draggable: s.draggables[e.critical.draggable.id],
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: f
  });
  yr();
  const m = {
    ...e,
    phase: "DRAGGING",
    impact: h,
    onLiftImpact: u,
    dimensions: s,
    afterCritical: f,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? m : {
    ...m,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const _i = (e) => e.movementMode === "SNAP", Lo = (e, t, n) => {
  const r = Dy(e.dimensions, t);
  return !_i(e) || n ? Qn({
    state: e,
    dimensions: r
  }) : Kc({
    state: e,
    dimensions: r
  });
};
function ko(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const qa = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Cy = (e = qa, t) => {
  if (t.type === "FLUSH")
    return {
      ...qa,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? w(!1, "INITIAL_PUBLISH must come after a IDLE phase") : w(!1));
    const {
      critical: n,
      clientSelection: r,
      viewport: o,
      dimensions: i,
      movementMode: s
    } = t.payload, a = i.draggables[n.draggable.id], l = i.droppables[n.droppable.id], c = {
      selection: r,
      borderBoxCenter: a.client.borderBox.center,
      offset: Ve
    }, d = {
      client: c,
      page: {
        selection: ze(c.selection, o.scroll.initial),
        borderBoxCenter: ze(c.selection, o.scroll.initial),
        offset: ze(c.selection, o.scroll.diff.value)
      }
    }, u = ao(i.droppables).every((m) => !m.isFixedOnPage), {
      impact: f,
      afterCritical: p
    } = Xc({
      draggable: a,
      home: l,
      draggables: i.draggables,
      viewport: o
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: n,
      movementMode: s,
      dimensions: i,
      initial: d,
      current: d,
      isWindowScrollAllowed: u,
      impact: f,
      afterCritical: p,
      onLiftImpact: f,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? w(!1, `Collection cannot start from phase ${e.phase}`) : w(!1)), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? w(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : w(!1)), Ny({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Qt(e) || (process.env.NODE_ENV !== "production" ? w(!1, `${t.type} not permitted in phase ${e.phase}`) : w(!1));
    const {
      client: n
    } = t.payload;
    return Ft(n, e.current.client.selection) ? e : Qn({
      state: e,
      clientSelection: n,
      impact: _i(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return ko(e);
    Qt(e) || (process.env.NODE_ENV !== "production" ? w(!1, `${t.type} not permitted in phase ${e.phase}`) : w(!1));
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = es(o, r);
    return Lo(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Qt(e) || (process.env.NODE_ENV !== "production" ? w(!1, `Attempting to move in an unsupported phase ${e.phase}`) : w(!1));
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? w(!1, `Cannot find Droppable[id: ${n}] to toggle its enabled state`) : w(!1)), o.isEnabled === r && (process.env.NODE_ENV !== "production" ? w(!1, `Trying to set droppable isEnabled to ${String(r)}
      but it is already ${String(o.isEnabled)}`) : w(!1));
    const i = {
      ...o,
      isEnabled: r
    };
    return Lo(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Qt(e) || (process.env.NODE_ENV !== "production" ? w(!1, `Attempting to move in an unsupported phase ${e.phase}`) : w(!1));
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? w(!1, `Cannot find Droppable[id: ${n}] to toggle its isCombineEnabled state`) : w(!1)), o.isCombineEnabled === r && (process.env.NODE_ENV !== "production" ? w(!1, `Trying to set droppable isCombineEnabled to ${String(r)}
      but it is already ${String(o.isCombineEnabled)}`) : w(!1));
    const i = {
      ...o,
      isCombineEnabled: r
    };
    return Lo(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Qt(e) || (process.env.NODE_ENV !== "production" ? w(!1, `Cannot move by window in phase ${e.phase}`) : w(!1)), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? w(!1, "Window scrolling is currently not supported for fixed lists") : w(!1));
    const n = t.payload.newScroll;
    if (Ft(e.viewport.scroll.current, n))
      return ko(e);
    const r = Vc(e.viewport, n);
    return _i(e) ? Kc({
      state: e,
      viewport: r
    }) : Qn({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Qt(e))
      return e;
    const n = t.payload.maxScroll;
    if (Ft(n, e.viewport.scroll.max))
      return e;
    const r = {
      ...e.viewport,
      scroll: {
        ...e.viewport.scroll,
        max: n
      }
    };
    return {
      ...e,
      viewport: r
    };
  }
  if (t.type === "MOVE_UP" || t.type === "MOVE_DOWN" || t.type === "MOVE_LEFT" || t.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? w(!1, `${t.type} received while not in DRAGGING phase`) : w(!1));
    const n = uy({
      state: e,
      type: t.type
    });
    return n ? Qn({
      state: e,
      impact: n.impact,
      clientSelection: n.clientSelection,
      scrollJumpRequest: n.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const n = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? w(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : w(!1)), {
      ...e,
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: n
    };
  }
  if (t.type === "DROP_ANIMATE") {
    const {
      completed: n,
      dropDuration: r,
      newHomeClientOffset: o
    } = t.payload;
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? w(!1, `Cannot animate drop from phase ${e.phase}`) : w(!1)), {
      phase: "DROP_ANIMATING",
      completed: n,
      dropDuration: r,
      newHomeClientOffset: o,
      dimensions: e.dimensions
    };
  }
  if (t.type === "DROP_COMPLETE") {
    const {
      completed: n
    } = t.payload;
    return {
      phase: "IDLE",
      completed: n,
      shouldFlush: !1
    };
  }
  return e;
};
const Ay = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Ty = (e) => ({
  type: "LIFT",
  payload: e
}), Py = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Iy = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), Ry = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), My = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), Ly = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), ky = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Zc = (e) => ({
  type: "MOVE",
  payload: e
}), jy = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), By = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Vy = () => ({
  type: "MOVE_UP",
  payload: null
}), $y = () => ({
  type: "MOVE_DOWN",
  payload: null
}), Fy = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Gy = () => ({
  type: "MOVE_LEFT",
  payload: null
}), as = () => ({
  type: "FLUSH",
  payload: null
}), zy = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), ls = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Jc = (e) => ({
  type: "DROP",
  payload: e
}), Uy = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Qc = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function Wy(e) {
  if (e.length <= 1)
    return;
  const t = e.map((o) => o.descriptor.index), n = {};
  for (let o = 1; o < t.length; o++) {
    const i = t[o], s = t[o - 1];
    i !== s + 1 && (n[i] = !0);
  }
  if (!Object.keys(n).length)
    return;
  const r = t.map((o) => !!n[o] ? `[🔥${o}]` : `${o}`).join(", ");
  process.env.NODE_ENV !== "production" && De(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${r}
  `);
}
function Hy(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = cn(e.droppable.id, t.draggables);
    Wy(n);
  }
}
var qy = (e) => ({
  getState: t,
  dispatch: n
}) => (r) => (o) => {
  if (o.type !== "LIFT") {
    r(o);
    return;
  }
  const {
    id: i,
    clientSelection: s,
    movementMode: a
  } = o.payload, l = t();
  l.phase === "DROP_ANIMATING" && n(ls({
    completed: l.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? w(!1, "Unexpected phase to start a drag") : w(!1)), n(as()), n(Ay({
    draggableId: i,
    movementMode: a
  }));
  const d = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: a === "SNAP"
    }
  }, {
    critical: u,
    dimensions: f,
    viewport: p
  } = e.startPublishing(d);
  Hy(u, f), n(Py({
    critical: u,
    dimensions: f,
    clientSelection: s,
    movementMode: a,
    viewport: p
  }));
}, Yy = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const cs = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, cr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, eu = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, qt = `${eu.outOfTheWay}s ${cs.outOfTheWay}`, er = {
  fluid: `opacity ${qt}`,
  snap: `transform ${qt}, opacity ${qt}`,
  drop: (e) => {
    const t = `${e}s ${cs.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${qt}`,
  placeholder: `height ${qt}, width ${qt}, margin ${qt}`
}, Ya = (e) => Ft(e, Ve) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Di = {
  moveTo: Ya,
  drop: (e, t) => {
    const n = Ya(e);
    if (n)
      return t ? `${n} scale(${cr.scale.drop})` : n;
  }
}, {
  minDropTime: Si,
  maxDropTime: tu
} = eu, Ky = tu - Si, Ka = 1500, Xy = 0.6;
var Zy = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = sr(e, t);
  if (r <= 0)
    return Si;
  if (r >= Ka)
    return tu;
  const o = r / Ka, i = Si + Ky * o, s = n === "CANCEL" ? i * Xy : i;
  return Number(s.toFixed(2));
}, Jy = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = n, a = ct(e), l = a ? s[a] : null, c = s[t.descriptor.droppableId], d = Yc({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: l || c,
    viewport: r
  });
  return lt(d, t.client.borderBox.center);
}, Qy = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: qc({
    draggables: e,
    impact: i,
    destination: r,
    viewport: o,
    forceShouldAnimate: !0
  }),
  didDropInsideDroppable: !1
} : n.at.type === "REORDER" ? {
  impact: n,
  didDropInsideDroppable: !0
} : {
  impact: {
    ...n,
    displaced: ar
  },
  didDropInsideDroppable: !0
};
const eb = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Uy({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? w(!1, "A DROP action occurred while DROP_PENDING and still waiting") : w(!1)), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? w(!1, `Cannot drop in phase: ${o.phase}`) : w(!1));
  const a = o.critical, l = o.dimensions, c = l.draggables[o.critical.draggable.id], {
    impact: d,
    didDropInsideDroppable: u
  } = Qy({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), f = u ? ts(d) : null, p = u ? lo(d) : null, h = {
    index: a.draggable.index,
    droppableId: a.droppable.id
  }, m = {
    draggableId: c.descriptor.id,
    type: c.descriptor.type,
    source: h,
    reason: i,
    mode: o.movementMode,
    destination: f,
    combine: p
  }, g = Jy({
    impact: d,
    draggable: c,
    dimensions: l,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), _ = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: m,
    impact: d
  };
  if (!(!Ft(o.current.client.offset, g) || !!m.combine)) {
    t(ls({
      completed: _
    }));
    return;
  }
  const v = Zy({
    current: o.current.client.offset,
    destination: g,
    reason: i
  });
  t(zy({
    newHomeClientOffset: g,
    dropDuration: v,
    completed: _
  }));
};
var tb = eb, nu = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function nb(e) {
  return {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: (t) => {
      t.target !== window && t.target !== window.document || e();
    }
  };
}
function rb({
  onWindowScroll: e
}) {
  function t() {
    e(nu());
  }
  const n = or(t), r = nb(n);
  let o = $t;
  function i() {
    return o !== $t;
  }
  function s() {
    i() && (process.env.NODE_ENV !== "production" ? w(!1, "Cannot start scroll listener when already active") : w(!1)), o = gt(window, [r]);
  }
  function a() {
    i() || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot stop scroll listener when not active") : w(!1)), n.cancel(), o(), o = $t;
  }
  return {
    start: s,
    stop: a,
    isActive: i
  };
}
const ob = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", ib = (e) => {
  const t = rb({
    onWindowScroll: (n) => {
      e.dispatch(jy({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && ob(r) && t.stop(), n(r);
  };
};
var sb = ib, ab = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && De("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && De(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(r);
  };
  return o.wasCalled = () => t, o;
}, lb = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((a) => a.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? w(!1, "Could not find timer") : w(!1));
    const [s] = e.splice(i, 1);
    s.callback();
  };
  return {
    add: (o) => {
      const i = setTimeout(() => t(i)), s = {
        timerId: i,
        callback: o
      };
      e.push(s);
    },
    flush: () => {
      if (!e.length)
        return;
      const o = [...e];
      e.length = 0, o.forEach((i) => {
        clearTimeout(i.timerId), i.callback();
      });
    }
  };
};
const cb = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, ub = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, db = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, $n = (e, t) => {
  vr(), t(), yr();
}, Ir = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function jo(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = ab(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var fb = (e, t) => {
  const n = lb();
  let r = null;
  const o = (u, f) => {
    r && (process.env.NODE_ENV !== "production" ? w(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : w(!1)), $n("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: u,
        mode: f
      });
    });
  }, i = (u, f) => {
    r && (process.env.NODE_ENV !== "production" ? w(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : w(!1)), $n("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(Ir(u, f));
    });
  }, s = (u, f) => {
    r && (process.env.NODE_ENV !== "production" ? w(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : w(!1));
    const p = Ir(u, f);
    r = {
      mode: f,
      lastCritical: u,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      $n("onDragStart", () => jo(e().onDragStart, p, t, Vr.onDragStart));
    });
  }, a = (u, f) => {
    const p = ts(f), h = lo(f);
    r || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot fire onDragMove when onDragStart has not been called") : w(!1));
    const m = !db(u, r.lastCritical);
    m && (r.lastCritical = u);
    const g = !cb(r.lastLocation, p);
    g && (r.lastLocation = p);
    const _ = !ub(r.lastCombine, h);
    if (_ && (r.lastCombine = h), !m && !g && !_)
      return;
    const S = {
      ...Ir(u, r.mode),
      combine: h,
      destination: p
    };
    n.add(() => {
      $n("onDragUpdate", () => jo(e().onDragUpdate, S, t, Vr.onDragUpdate));
    });
  }, l = () => {
    r || (process.env.NODE_ENV !== "production" ? w(!1, "Can only flush responders while dragging") : w(!1)), n.flush();
  }, c = (u) => {
    r || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : w(!1)), r = null, $n("onDragEnd", () => jo(e().onDragEnd, u, t, Vr.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: s,
    update: a,
    flush: l,
    drop: c,
    abort: () => {
      if (!r)
        return;
      const u = {
        ...Ir(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      c(u);
    }
  };
}, pb = (e, t) => {
  const n = fb(e, t);
  return (r) => (o) => (i) => {
    if (i.type === "BEFORE_INITIAL_CAPTURE") {
      n.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (i.type === "INITIAL_PUBLISH") {
      const a = i.payload.critical;
      n.beforeStart(a, i.payload.movementMode), o(i), n.start(a, i.payload.movementMode);
      return;
    }
    if (i.type === "DROP_COMPLETE") {
      const a = i.payload.completed.result;
      n.flush(), o(i), n.drop(a);
      return;
    }
    if (o(i), i.type === "FLUSH") {
      n.abort();
      return;
    }
    const s = r.getState();
    s.phase === "DRAGGING" && n.update(s.critical, s.impact);
  };
};
const hb = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? w(!1, "Cannot finish a drop animating when no drop is occurring") : w(!1)), e.dispatch(ls({
    completed: r.completed
  }));
};
var mb = hb;
const gb = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((i.type === "FLUSH" || i.type === "DROP_COMPLETE" || i.type === "DROP_ANIMATION_FINISHED") && r(), o(i), i.type !== "DROP_ANIMATE")
      return;
    const s = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Qc());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = gt(window, [s]);
    });
  };
};
var vb = gb, yb = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, bb = (e) => {
  let t = !1;
  return () => (n) => (r) => {
    if (r.type === "INITIAL_PUBLISH") {
      t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
      return;
    }
    if (n(r), !!t) {
      if (r.type === "FLUSH") {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (r.type === "DROP_COMPLETE") {
        t = !1;
        const o = r.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const Eb = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var wb = (e) => (t) => (n) => (r) => {
  if (Eb(r)) {
    e.stop(), n(r);
    return;
  }
  if (r.type === "INITIAL_PUBLISH") {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? w(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : w(!1)), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const _b = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(Jc({
    reason: r.reason
  })));
};
var Db = _b;
const Sb = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : hc;
var Ob = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => pc(Cy, Sb(fg(Yy(n), yb(e), qy(e), tb, mb, vb, Db, wb(i), sb, bb(t), pb(r, o))));
const Bo = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function xb({
  registry: e,
  callbacks: t
}) {
  let n = Bo(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, vr();
      const {
        additions: l,
        removals: c,
        modified: d
      } = n, u = Object.keys(l).map((h) => e.draggable.getById(h).getDimension(Ve)).sort((h, m) => h.descriptor.index - m.descriptor.index), f = Object.keys(d).map((h) => {
        const g = e.droppable.getById(h).callbacks.getScrollWhileDragging();
        return {
          droppableId: h,
          scroll: g
        };
      }), p = {
        additions: u,
        removals: Object.keys(c),
        modified: f
      };
      n = Bo(), yr(), t.publish(p);
    }));
  };
  return {
    add: (l) => {
      const c = l.descriptor.id;
      n.additions[c] = l, n.modified[l.descriptor.droppableId] = !0, n.removals[c] && delete n.removals[c], o();
    },
    remove: (l) => {
      const c = l.descriptor;
      n.removals[c.id] = !0, n.modified[c.droppableId] = !0, n.additions[c.id] && delete n.additions[c.id], o();
    },
    stop: () => {
      r && (cancelAnimationFrame(r), r = null, n = Bo());
    }
  };
}
var ru = ({
  scrollHeight: e,
  scrollWidth: t,
  height: n,
  width: r
}) => {
  const o = lt({
    x: t,
    y: e
  }, {
    x: r,
    y: n
  });
  return {
    x: Math.max(0, o.x),
    y: Math.max(0, o.y)
  };
}, ou = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot find document.documentElement") : w(!1)), e;
}, iu = () => {
  const e = ou();
  return ru({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Nb = () => {
  const e = nu(), t = iu(), n = e.y, r = e.x, o = ou(), i = o.clientWidth, s = o.clientHeight, a = r + i, l = n + s;
  return {
    frame: Dt({
      top: n,
      left: r,
      right: a,
      bottom: l
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: Ve,
        displacement: Ve
      }
    }
  };
}, Cb = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  vr();
  const r = Nb(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((d) => d.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((d) => d.getDimension(o)), l = {
    draggables: Rc(a),
    droppables: Ic(s)
  };
  return yr(), {
    dimensions: l,
    critical: e,
    viewport: r
  };
};
function Xa(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && De(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Ab = (e, t) => {
  let n = null;
  const r = xb({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (f, p) => {
    e.droppable.exists(f) || (process.env.NODE_ENV !== "production" ? w(!1, `Cannot update is enabled flag of Droppable ${f} as it is not registered`) : w(!1)), n && t.updateDroppableIsEnabled({
      id: f,
      isEnabled: p
    });
  }, i = (f, p) => {
    n && (e.droppable.exists(f) || (process.env.NODE_ENV !== "production" ? w(!1, `Cannot update isCombineEnabled flag of Droppable ${f} as it is not registered`) : w(!1)), t.updateDroppableIsCombineEnabled({
      id: f,
      isCombineEnabled: p
    }));
  }, s = (f, p) => {
    n && (e.droppable.exists(f) || (process.env.NODE_ENV !== "production" ? w(!1, `Cannot update the scroll on Droppable ${f} as it is not registered`) : w(!1)), t.updateDroppableScroll({
      id: f,
      newScroll: p
    }));
  }, a = (f, p) => {
    n && e.droppable.getById(f).callbacks.scroll(p);
  }, l = () => {
    if (!n)
      return;
    r.stop();
    const f = n.critical.droppable;
    e.droppable.getAllByType(f.type).forEach((p) => p.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, c = (f) => {
    n || (process.env.NODE_ENV !== "production" ? w(!1, "Should only be subscribed when a collection is occurring") : w(!1));
    const p = n.critical.draggable;
    f.type === "ADDITION" && Xa(e, p, f.value) && r.add(f.value), f.type === "REMOVAL" && Xa(e, p, f.value) && r.remove(f.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: a,
    updateDroppableScroll: s,
    startPublishing: (f) => {
      n && (process.env.NODE_ENV !== "production" ? w(!1, "Cannot start capturing critical dimensions as there is already a collection") : w(!1));
      const p = e.draggable.getById(f.draggableId), h = e.droppable.getById(p.descriptor.droppableId), m = {
        draggable: p.descriptor,
        droppable: h.descriptor
      }, g = e.subscribe(c);
      return n = {
        critical: m,
        unsubscribe: g
      }, Cb({
        critical: m,
        registry: e,
        scrollOptions: f.scrollOptions
      });
    },
    stopPublishing: l
  };
}, su = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Tb = (e) => {
  window.scrollBy(e.x, e.y);
};
const Pb = Be((e) => ao(e).filter((t) => !(!t.isEnabled || !t.frame))), Ib = (e, t) => Pb(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? w(!1, "Invalid result") : w(!1)), zc(r.frame.pageMarginBox)(e))) || null;
var Rb = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return Ib(e, n);
};
const ur = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: (e) => e ** 2,
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  },
  disabled: !1
};
var Mb = (e, t, n = () => ur) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, au = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? (process.env.NODE_ENV !== "production" && De(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (n - e) / r;
}, us = 1, Lb = (e, t, n = () => ur) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return us;
  const i = 1 - au({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = r.maxPixelScroll * r.ease(i);
  return Math.ceil(s);
}, kb = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, s = t, a = i, c = Date.now() - s;
  if (c >= i)
    return e;
  if (c < o)
    return us;
  const d = au({
    startOfRange: o,
    endOfRange: a,
    current: c
  }), u = e * r.ease(d);
  return Math.ceil(u);
}, Za = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = Lb(e, t, o);
  return i === 0 ? 0 : r ? Math.max(kb(i, n, o), us) : i;
}, Ja = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = Mb(e, r, i);
  return t[r.end] < t[r.start] ? Za({
    distanceToEdge: t[r.end],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * Za({
    distanceToEdge: t[r.start],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, jb = ({
  container: e,
  subject: t,
  proposedScroll: n
}) => {
  const r = t.height > e.height, o = t.width > e.width;
  return !o && !r ? n : o && r ? null : {
    x: o ? 0 : n.x,
    y: r ? 0 : n.y
  };
};
const Bb = Pc((e) => e === 0 ? 0 : e);
var lu = ({
  dragStartTime: e,
  container: t,
  subject: n,
  center: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = {
    top: r.y - t.top,
    right: t.right - r.x,
    bottom: t.bottom - r.y,
    left: r.x - t.left
  }, a = Ja({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: ns,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = Ja({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: kc,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = Bb({
    x: l,
    y: a
  });
  if (Ft(c, Ve))
    return null;
  const d = jb({
    container: t,
    subject: n,
    proposedScroll: c
  });
  return d ? Ft(d, Ve) ? null : d : null;
};
const Vb = Pc((e) => e === 0 ? 0 : e > 0 ? 1 : -1), ds = (() => {
  const e = (t, n) => t < 0 ? t : t > n ? t - n : 0;
  return ({
    current: t,
    max: n,
    change: r
  }) => {
    const o = ze(t, r), i = {
      x: e(o.x, n.x),
      y: e(o.y, n.y)
    };
    return Ft(i, Ve) ? null : i;
  };
})(), cu = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Vb(n), i = ds({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, fs = (e, t) => cu({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), $b = (e, t) => {
  if (!fs(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return ds({
    current: r,
    max: n,
    change: t
  });
}, ps = (e, t) => {
  const n = e.frame;
  return n ? cu({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, Fb = (e, t) => {
  const n = e.frame;
  return !n || !ps(e, t) ? null : ds({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var Gb = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = lu({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && fs(e, s) ? s : null;
}, zb = ({
  droppable: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.frame;
  if (!s)
    return null;
  const a = lu({
    dragStartTime: r,
    container: s.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && ps(e, a) ? a : null;
}, Qa = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const u = e.viewport, f = Gb({
      dragStartTime: t,
      viewport: u,
      subject: l,
      center: s,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: i
    });
    if (f) {
      r(f);
      return;
    }
  }
  const c = Rb({
    center: s,
    destination: ct(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!c)
    return;
  const d = zb({
    dragStartTime: t,
    droppable: c,
    subject: l,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  d && o(c.descriptor.id, d);
}, Ub = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => ur
}) => {
  const r = or(e), o = or(t);
  let i = null;
  const s = (c) => {
    i || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot fluid scroll if not dragging") : w(!1));
    const {
      shouldUseTimeDampening: d,
      dragStartTime: u
    } = i;
    Qa({
      state: c,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: u,
      shouldUseTimeDampening: d,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (c) => {
      vr(), i && (process.env.NODE_ENV !== "production" ? w(!1, "Cannot start auto scrolling when already started") : w(!1));
      const d = Date.now();
      let u = !1;
      const f = () => {
        u = !0;
      };
      Qa({
        state: c,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: f,
        scrollDroppable: f,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: d,
        shouldUseTimeDampening: u
      }, yr(), u && s(c);
    },
    stop: () => {
      i && (r.cancel(), o.cancel(), i = null);
    },
    scroll: s
  };
}, Wb = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: n
}) => {
  const r = (a, l) => {
    const c = ze(a.current.client.selection, l);
    e({
      client: c
    });
  }, o = (a, l) => {
    if (!ps(a, l))
      return l;
    const c = Fb(a, l);
    if (!c)
      return t(a.descriptor.id, l), null;
    const d = lt(l, c);
    return t(a.descriptor.id, d), lt(l, d);
  }, i = (a, l, c) => {
    if (!a || !fs(l, c))
      return c;
    const d = $b(l, c);
    if (!d)
      return n(c), null;
    const u = lt(c, d);
    return n(u), lt(c, u);
  };
  return (a) => {
    const l = a.scrollJumpRequest;
    if (!l)
      return;
    const c = ct(a.impact);
    c || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot perform a jump scroll when there is no destination") : w(!1));
    const d = o(a.dimensions.droppables[c], l);
    if (!d)
      return;
    const u = a.viewport, f = i(a.isWindowScrollAllowed, u, d);
    f && r(a, f);
  };
}, Hb = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = Ub({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = Wb({
    move: n,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (l) => {
      if (!(r().disabled || l.phase !== "DRAGGING")) {
        if (l.movementMode === "FLUID") {
          o.scroll(l);
          return;
        }
        l.scrollJumpRequest && i(l);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const Sn = "data-rfd", On = (() => {
  const e = `${Sn}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Oi = (() => {
  const e = `${Sn}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), qb = (() => {
  const e = `${Sn}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), el = {
  contextId: `${Sn}-scroll-container-context-id`
}, Yb = (e) => (t) => `[${t}="${e}"]`, Fn = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), Kb = "pointer-events: none;";
var Xb = (e) => {
  const t = Yb(e), n = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(On.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: Kb,
        dropAnimating: a
      }
    };
  })(), r = (() => {
    const a = `
      transition: ${er.outOfTheWay};
    `;
    return {
      selector: t(Oi.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(qb.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, s = [r, n, o, {
    selector: "body",
    styles: {
      dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
    }
  }];
  return {
    always: Fn(s, "always"),
    resting: Fn(s, "resting"),
    dragging: Fn(s, "dragging"),
    dropAnimating: Fn(s, "dropAnimating"),
    userCancel: Fn(s, "userCancel")
  };
};
const Zb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? O.useLayoutEffect : O.useEffect;
var ut = Zb;
const Vo = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot find the head to append a style to") : w(!1)), e;
}, tl = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Jb(e, t) {
  const n = ce(() => Xb(e), [e]), r = O.useRef(null), o = O.useRef(null), i = Y(Be((u) => {
    const f = o.current;
    f || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot set dynamic style element if it is not set") : w(!1)), f.textContent = u;
  }), []), s = Y((u) => {
    const f = r.current;
    f || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot set dynamic style element if it is not set") : w(!1)), f.textContent = u;
  }, []);
  ut(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? w(!1, "style elements already mounted") : w(!1));
    const u = tl(t), f = tl(t);
    return r.current = u, o.current = f, u.setAttribute(`${Sn}-always`, e), f.setAttribute(`${Sn}-dynamic`, e), Vo().appendChild(u), Vo().appendChild(f), s(n.always), i(n.resting), () => {
      const p = (h) => {
        const m = h.current;
        m || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot unmount ref as it is not set") : w(!1)), Vo().removeChild(m), h.current = null;
      };
      p(r), p(o);
    };
  }, [t, s, i, n.always, n.resting, e]);
  const a = Y(() => i(n.dragging), [i, n.dragging]), l = Y((u) => {
    if (u === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), c = Y(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return ce(() => ({
    dragging: a,
    dropping: l,
    resting: c
  }), [a, l, c]);
}
function uu(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var du = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function br(e) {
  return e instanceof du(e).HTMLElement;
}
function fu(e, t) {
  const n = `[${On.contextId}="${e}"]`, r = uu(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && De(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(On.draggableId) === t);
  return o ? br(o) ? o : (process.env.NODE_ENV !== "production" && De("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && De(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Qb(e) {
  const t = O.useRef({}), n = O.useRef(null), r = O.useRef(null), o = O.useRef(!1), i = Y(function(f, p) {
    const h = {
      id: f,
      focus: p
    };
    return t.current[f] = h, function() {
      const g = t.current;
      g[f] !== h && delete g[f];
    };
  }, []), s = Y(function(f) {
    const p = fu(e, f);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = Y(function(f, p) {
    n.current === f && (n.current = p);
  }, []), l = Y(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const f = n.current;
      f && s(f);
    }));
  }, [s]), c = Y(function(f) {
    n.current = null;
    const p = document.activeElement;
    p && p.getAttribute(On.draggableId) === f && (n.current = f);
  }, []);
  return ut(() => (o.current = !0, function() {
    o.current = !1;
    const f = r.current;
    f && cancelAnimationFrame(f);
  }), []), ce(() => ({
    register: i,
    tryRecordFocus: c,
    tryRestoreFocusRecorded: l,
    tryShiftRecord: a
  }), [i, c, l, a]);
}
function eE() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function n(u) {
    return t.push(u), function() {
      const p = t.indexOf(u);
      p !== -1 && t.splice(p, 1);
    };
  }
  function r(u) {
    t.length && t.forEach((f) => f(u));
  }
  function o(u) {
    return e.draggables[u] || null;
  }
  function i(u) {
    const f = o(u);
    return f || (process.env.NODE_ENV !== "production" ? w(!1, `Cannot find draggable entry with id [${u}]`) : w(!1)), f;
  }
  const s = {
    register: (u) => {
      e.draggables[u.descriptor.id] = u, r({
        type: "ADDITION",
        value: u
      });
    },
    update: (u, f) => {
      const p = e.draggables[f.descriptor.id];
      p && p.uniqueId === u.uniqueId && (delete e.draggables[f.descriptor.id], e.draggables[u.descriptor.id] = u);
    },
    unregister: (u) => {
      const f = u.descriptor.id, p = o(f);
      p && u.uniqueId === p.uniqueId && (delete e.draggables[f], e.droppables[u.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: u
      }));
    },
    getById: i,
    findById: o,
    exists: (u) => !!o(u),
    getAllByType: (u) => Object.values(e.draggables).filter((f) => f.descriptor.type === u)
  };
  function a(u) {
    return e.droppables[u] || null;
  }
  function l(u) {
    const f = a(u);
    return f || (process.env.NODE_ENV !== "production" ? w(!1, `Cannot find droppable entry with id [${u}]`) : w(!1)), f;
  }
  const c = {
    register: (u) => {
      e.droppables[u.descriptor.id] = u;
    },
    unregister: (u) => {
      const f = a(u.descriptor.id);
      f && u.uniqueId === f.uniqueId && delete e.droppables[u.descriptor.id];
    },
    getById: l,
    findById: a,
    exists: (u) => !!a(u),
    getAllByType: (u) => Object.values(e.droppables).filter((f) => f.descriptor.type === u)
  };
  function d() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: s,
    droppable: c,
    subscribe: n,
    clean: d
  };
}
function tE() {
  const e = ce(eE, []);
  return O.useEffect(() => function() {
    R.version.startsWith("16") || R.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var hs = R.createContext(null), dr = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot find document.body") : w(!1)), e;
};
const nE = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
var rE = nE;
const oE = (e) => `rfd-announcement-${e}`;
function iE(e) {
  const t = ce(() => oE(e), [e]), n = O.useRef(null);
  return O.useEffect(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), En(i.style, rE), dr().appendChild(i), function() {
      setTimeout(function() {
        const l = dr();
        l.contains(i) && l.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), Y((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && De(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let sE = 0;
const pu = {
  separator: "::"
};
function aE(e, t = pu) {
  return ce(() => `${e}${t.separator}${sE++}`, [t.separator, e]);
}
function lE(e, t = pu) {
  const n = R.useId();
  return ce(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var ms = "useId" in R ? lE : aE;
function cE({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function uE({
  contextId: e,
  text: t
}) {
  const n = ms("hidden-text", {
    separator: "-"
  }), r = ce(() => cE({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return O.useEffect(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", dr().appendChild(i), function() {
      const a = dr();
      a.contains(i) && a.removeChild(i);
    };
  }, [r, t]), r;
}
var fo = R.createContext(null), dE = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const fE = /(\d+)\.(\d+)\.(\d+)/, nl = (e) => {
  const t = fE.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? w(!1, `Unable to parse React version ${e}`) : w(!1));
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, pE = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var hE = (e, t) => {
  const n = nl(e), r = nl(t);
  pE(n, r) || process.env.NODE_ENV !== "production" && De(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const $o = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var mE = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && De(`
      No <!doctype html> found.

      ${$o}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && De(`
      Unexpected <!doctype> found: (${t.name})

      ${$o}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && De(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${$o}
    `);
};
function gs(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Er(e, t) {
  gs(() => {
    O.useEffect(() => {
      try {
        e();
      } catch (n) {
        Ei(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function gE() {
  Er(() => {
    hE(dE.react, R.version), mE(document);
  }, []);
}
function vs(e) {
  const t = O.useRef(e);
  return O.useEffect(() => {
    t.current = e;
  }), t;
}
function vE() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(s) {
    return s === e;
  }
  function r(s) {
    e && (process.env.NODE_ENV !== "production" ? w(!1, "Cannot claim lock as it is already claimed") : w(!1));
    const a = {
      abandon: s
    };
    return e = a, a;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot release lock when there is no lock") : w(!1)), e = null;
  }
  function i() {
    e && (e.abandon(), o());
  }
  return {
    isClaimed: t,
    isActive: n,
    claim: r,
    release: o,
    tryAbandon: i
  };
}
function fr(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const yE = 9, bE = 13, ys = 27, hu = 32, EE = 33, wE = 34, _E = 35, DE = 36, SE = 37, OE = 38, xE = 39, NE = 40, CE = {
  [bE]: !0,
  [yE]: !0
};
var mu = (e) => {
  CE[e.keyCode] && e.preventDefault();
};
const AE = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var po = AE;
const gu = 0, rl = 5;
function TE(e, t) {
  return Math.abs(t.x - e.x) >= rl || Math.abs(t.y - e.y) >= rl;
}
const ol = {
  type: "IDLE"
};
function PE({
  cancel: e,
  completed: t,
  getPhase: n,
  setPhase: r
}) {
  return [{
    eventName: "mousemove",
    fn: (o) => {
      const {
        button: i,
        clientX: s,
        clientY: a
      } = o;
      if (i !== gu)
        return;
      const l = {
        x: s,
        y: a
      }, c = n();
      if (c.type === "DRAGGING") {
        o.preventDefault(), c.actions.move(l);
        return;
      }
      c.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? w(!1, "Cannot be IDLE") : w(!1));
      const d = c.point;
      if (!TE(d, l))
        return;
      o.preventDefault();
      const u = c.actions.fluidLift(l);
      r({
        type: "DRAGGING",
        actions: u
      });
    }
  }, {
    eventName: "mouseup",
    fn: (o) => {
      const i = n();
      if (i.type !== "DRAGGING") {
        e();
        return;
      }
      o.preventDefault(), i.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "mousedown",
    fn: (o) => {
      n().type === "DRAGGING" && o.preventDefault(), e();
    }
  }, {
    eventName: "keydown",
    fn: (o) => {
      if (n().type === "PENDING") {
        e();
        return;
      }
      if (o.keyCode === ys) {
        o.preventDefault(), e();
        return;
      }
      mu(o);
    }
  }, {
    eventName: "resize",
    fn: e
  }, {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: () => {
      n().type === "PENDING" && e();
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: (o) => {
      const i = n();
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? w(!1, "Unexpected phase") : w(!1)), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: po,
    fn: e
  }];
}
function IE(e) {
  const t = O.useRef(ol), n = O.useRef($t), r = ce(() => ({
    eventName: "mousedown",
    fn: function(u) {
      if (u.defaultPrevented || u.button !== gu || u.ctrlKey || u.metaKey || u.shiftKey || u.altKey)
        return;
      const f = e.findClosestDraggableId(u);
      if (!f)
        return;
      const p = e.tryGetLock(f, s, {
        sourceEvent: u
      });
      if (!p)
        return;
      u.preventDefault();
      const h = {
        x: u.clientX,
        y: u.clientY
      };
      n.current(), c(p, h);
    }
  }), [e]), o = ce(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (d) => {
      if (d.defaultPrevented)
        return;
      const u = e.findClosestDraggableId(d);
      if (!u)
        return;
      const f = e.findOptionsForDraggable(u);
      f && (f.shouldRespectForcePress || e.canGetLock(u) && d.preventDefault());
    }
  }), [e]), i = Y(function() {
    const u = {
      passive: !1,
      capture: !0
    };
    n.current = gt(window, [o, r], u);
  }, [o, r]), s = Y(() => {
    t.current.type !== "IDLE" && (t.current = ol, n.current(), i());
  }, [i]), a = Y(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), l = Y(function() {
    const u = {
      capture: !0,
      passive: !1
    }, f = PE({
      cancel: a,
      completed: s,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = gt(window, f, u);
  }, [a, s]), c = Y(function(u, f) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? w(!1, "Expected to move from IDLE to PENDING drag") : w(!1)), t.current = {
      type: "PENDING",
      point: f,
      actions: u
    }, l();
  }, [l]);
  ut(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function RE() {
}
const ME = {
  [wE]: !0,
  [EE]: !0,
  [DE]: !0,
  [_E]: !0
};
function LE(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === ys) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === hu) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === NE) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === OE) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === xE) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === SE) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (ME[o.keyCode]) {
        o.preventDefault();
        return;
      }
      mu(o);
    }
  }, {
    eventName: "mousedown",
    fn: n
  }, {
    eventName: "mouseup",
    fn: n
  }, {
    eventName: "click",
    fn: n
  }, {
    eventName: "touchstart",
    fn: n
  }, {
    eventName: "resize",
    fn: n
  }, {
    eventName: "wheel",
    fn: n,
    options: {
      passive: !0
    }
  }, {
    eventName: po,
    fn: n
  }];
}
function kE(e) {
  const t = O.useRef(RE), n = ce(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== hu)
        return;
      const s = e.findClosestDraggableId(i);
      if (!s)
        return;
      const a = e.tryGetLock(s, d, {
        sourceEvent: i
      });
      if (!a)
        return;
      i.preventDefault();
      let l = !0;
      const c = a.snapLift();
      t.current();
      function d() {
        l || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot stop capturing a keyboard drag when not capturing") : w(!1)), l = !1, t.current(), r();
      }
      t.current = gt(window, LE(c, d), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = Y(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = gt(window, [n], i);
  }, [n]);
  ut(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const Fo = {
  type: "IDLE"
}, jE = 120, BE = 0.15;
function VE({
  cancel: e,
  getPhase: t
}) {
  return [{
    eventName: "orientationchange",
    fn: e
  }, {
    eventName: "resize",
    fn: e
  }, {
    eventName: "contextmenu",
    fn: (n) => {
      n.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: (n) => {
      if (t().type !== "DRAGGING") {
        e();
        return;
      }
      n.keyCode === ys && n.preventDefault(), e();
    }
  }, {
    eventName: po,
    fn: e
  }];
}
function $E({
  cancel: e,
  completed: t,
  getPhase: n
}) {
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: (r) => {
      const o = n();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      o.hasMoved = !0;
      const {
        clientX: i,
        clientY: s
      } = r.touches[0], a = {
        x: i,
        y: s
      };
      r.preventDefault(), o.actions.move(a);
    }
  }, {
    eventName: "touchend",
    fn: (r) => {
      const o = n();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      r.preventDefault(), o.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "touchcancel",
    fn: (r) => {
      if (n().type !== "DRAGGING") {
        e();
        return;
      }
      r.preventDefault(), e();
    }
  }, {
    eventName: "touchforcechange",
    fn: (r) => {
      const o = n();
      o.type === "IDLE" && (process.env.NODE_ENV, w(!1));
      const i = r.touches[0];
      if (!i || !(i.force >= BE))
        return;
      const a = o.actions.shouldRespectForcePress();
      if (o.type === "PENDING") {
        a && e();
        return;
      }
      if (a) {
        if (o.hasMoved) {
          r.preventDefault();
          return;
        }
        e();
        return;
      }
      r.preventDefault();
    }
  }, {
    eventName: po,
    fn: e
  }];
}
function FE(e) {
  const t = O.useRef(Fo), n = O.useRef($t), r = Y(function() {
    return t.current;
  }, []), o = Y(function(p) {
    t.current = p;
  }, []), i = ce(() => ({
    eventName: "touchstart",
    fn: function(p) {
      if (p.defaultPrevented)
        return;
      const h = e.findClosestDraggableId(p);
      if (!h)
        return;
      const m = e.tryGetLock(h, a, {
        sourceEvent: p
      });
      if (!m)
        return;
      const g = p.touches[0], {
        clientX: _,
        clientY: S
      } = g, v = {
        x: _,
        y: S
      };
      n.current(), u(m, v);
    }
  }), [e]), s = Y(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = gt(window, [i], p);
  }, [i]), a = Y(() => {
    const f = t.current;
    f.type !== "IDLE" && (f.type === "PENDING" && clearTimeout(f.longPressTimerId), o(Fo), n.current(), s());
  }, [s, o]), l = Y(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), c = Y(function() {
    const p = {
      capture: !0,
      passive: !1
    }, h = {
      cancel: l,
      completed: a,
      getPhase: r
    }, m = gt(window, $E(h), p), g = gt(window, VE(h), p);
    n.current = function() {
      m(), g();
    };
  }, [l, r, a]), d = Y(function() {
    const p = r();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? w(!1, `Cannot start dragging from phase ${p.type}`) : w(!1));
    const h = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: h,
      hasMoved: !1
    });
  }, [r, o]), u = Y(function(p, h) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? w(!1, "Expected to move from IDLE to PENDING drag") : w(!1));
    const m = setTimeout(d, jE);
    o({
      type: "PENDING",
      point: h,
      actions: p,
      longPressTimerId: m
    }), c();
  }, [c, r, o, d]);
  ut(function() {
    return s(), function() {
      n.current();
      const h = r();
      h.type === "PENDING" && (clearTimeout(h.longPressTimerId), o(Fo));
    };
  }, [r, s, o]), ut(function() {
    return gt(window, [{
      eventName: "touchmove",
      fn: () => {
      },
      options: {
        capture: !1,
        passive: !1
      }
    }]);
  }, []);
}
function GE(e) {
  gs(() => {
    const t = vs(e);
    Er(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? w(!1, "Cannot change the amount of sensor hooks after mounting") : w(!1));
    });
  });
}
const zE = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function vu(e, t) {
  if (t == null)
    return !1;
  if (zE.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : vu(e, t.parentElement);
}
function UE(e, t) {
  const n = t.target;
  return br(n) ? vu(e, n) : !1;
}
var WE = (e) => Dt(e.getBoundingClientRect()).center;
function HE(e) {
  return e instanceof du(e).Element;
}
const qE = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function yu(e, t) {
  return e == null ? null : e[qE](t) ? e : yu(e.parentElement, t);
}
function YE(e, t) {
  return e.closest ? e.closest(t) : yu(e, t);
}
function KE(e) {
  return `[${On.contextId}="${e}"]`;
}
function XE(e, t) {
  const n = t.target;
  if (!HE(n))
    return process.env.NODE_ENV !== "production" && De("event.target must be a Element"), null;
  const r = KE(e), o = YE(n, r);
  return o ? br(o) ? o : (process.env.NODE_ENV !== "production" && De("drag handle must be a HTMLElement"), null) : null;
}
function ZE(e, t) {
  const n = XE(e, t);
  return n ? n.getAttribute(On.draggableId) : null;
}
function JE(e, t) {
  const n = `[${Oi.contextId}="${e}"]`, o = uu(document, n).find((i) => i.getAttribute(Oi.id) === t);
  return o ? br(o) ? o : (process.env.NODE_ENV !== "production" && De("Draggable element is not a HTMLElement"), null) : null;
}
function QE(e) {
  e.preventDefault();
}
function Rr({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return n() ? e !== t ? (r && process.env.NODE_ENV !== "production" && De(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (r && process.env.NODE_ENV !== "production" && De(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function bu({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !su(t.getState(), r)) : (process.env.NODE_ENV !== "production" && De(`Unable to find draggable with id: ${r}`), !1);
}
function ew({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s
}) {
  if (!bu({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const l = r.draggable.getById(o), c = JE(t, l.descriptor.id);
  if (!c)
    return process.env.NODE_ENV !== "production" && De(`Unable to find draggable element with id: ${o}`), null;
  if (s && !l.options.canDragInteractiveElements && UE(c, s))
    return null;
  const d = e.claim(i || $t);
  let u = "PRE_DRAG";
  function f() {
    return l.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(d);
  }
  function h(E, x) {
    Rr({
      expected: E,
      phase: u,
      isLockActive: p,
      shouldWarn: !0
    }) && n.dispatch(x());
  }
  const m = h.bind(null, "DRAGGING");
  function g(E) {
    function x() {
      e.release(), u = "COMPLETED";
    }
    u !== "PRE_DRAG" && (x(), process.env.NODE_ENV !== "production" ? w(!1, `Cannot lift in phase ${u}`) : w(!1)), n.dispatch(Ty(E.liftActionArgs)), u = "DRAGGING";
    function C(N, G = {
      shouldBlockNextClick: !1
    }) {
      if (E.cleanup(), G.shouldBlockNextClick) {
        const T = gt(window, [{
          eventName: "click",
          fn: QE,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(T);
      }
      x(), n.dispatch(Jc({
        reason: N
      }));
    }
    return {
      isActive: () => Rr({
        expected: "DRAGGING",
        phase: u,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: f,
      drop: (N) => C("DROP", N),
      cancel: (N) => C("CANCEL", N),
      ...E.actions
    };
  }
  function _(E) {
    const x = or((N) => {
      m(() => Zc({
        client: N
      }));
    });
    return {
      ...g({
        liftActionArgs: {
          id: o,
          clientSelection: E,
          movementMode: "FLUID"
        },
        cleanup: () => x.cancel(),
        actions: {
          move: x
        }
      }),
      move: x
    };
  }
  function S() {
    const E = {
      moveUp: () => m(Vy),
      moveRight: () => m(Fy),
      moveDown: () => m($y),
      moveLeft: () => m(Gy)
    };
    return g({
      liftActionArgs: {
        id: o,
        clientSelection: WE(c),
        movementMode: "SNAP"
      },
      cleanup: $t,
      actions: E
    });
  }
  function v() {
    Rr({
      expected: "PRE_DRAG",
      phase: u,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Rr({
      expected: "PRE_DRAG",
      phase: u,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: f,
    fluidLift: _,
    snapLift: S,
    abort: v
  };
}
const tw = [IE, kE, FE];
function nw({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? tw : [], ...r || []], s = O.useState(() => vE())[0], a = Y(function(g, _) {
    fr(g) && !fr(_) && s.tryAbandon();
  }, [s]);
  ut(function() {
    let g = t.getState();
    return t.subscribe(() => {
      const S = t.getState();
      a(g, S), g = S;
    });
  }, [s, t, a]), ut(() => s.tryAbandon, [s.tryAbandon]);
  const l = Y((m) => bu({
    lockAPI: s,
    registry: n,
    store: t,
    draggableId: m
  }), [s, n, t]), c = Y((m, g, _) => ew({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: m,
    forceSensorStop: g || null,
    sourceEvent: _ && _.sourceEvent ? _.sourceEvent : null
  }), [e, s, n, t]), d = Y((m) => ZE(e, m), [e]), u = Y((m) => {
    const g = n.draggable.findById(m);
    return g ? g.options : null;
  }, [n.draggable]), f = Y(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(as()));
  }, [s, t]), p = Y(() => s.isClaimed(), [s]), h = ce(() => ({
    canGetLock: l,
    tryGetLock: c,
    findClosestDraggableId: d,
    findOptionsForDraggable: u,
    tryReleaseLock: f,
    isLockClaimed: p
  }), [l, c, d, u, f, p]);
  GE(i);
  for (let m = 0; m < i.length; m++)
    i[m](h);
}
const rw = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    R.version.startsWith("16") || R.version.startsWith("17") ? n() : Ri.flushSync(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), ow = (e) => ({
  ...ur,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...ur.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Gn(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? w(!1, "Could not find store from lazy ref") : w(!1)), e.current;
}
function iw(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = O.useRef(null);
  gE();
  const a = vs(e), l = Y(() => rw(a.current), [a]), c = Y(() => ow(a.current), [a]), d = iE(t), u = uE({
    contextId: t,
    text: i
  }), f = Jb(t, o), p = Y((T) => {
    Gn(s).dispatch(T);
  }, []), h = ce(() => ma({
    publishWhileDragging: Iy,
    updateDroppableScroll: My,
    updateDroppableIsEnabled: Ly,
    updateDroppableIsCombineEnabled: ky,
    collectionStarting: Ry
  }, p), [p]), m = tE(), g = ce(() => Ab(m, h), [m, h]), _ = ce(() => Hb({
    scrollWindow: Tb,
    scrollDroppable: g.scrollDroppable,
    getAutoScrollerOptions: c,
    ...ma({
      move: Zc
    }, p)
  }), [g.scrollDroppable, p, c]), S = Qb(t), v = ce(() => Ob({
    announce: d,
    autoScroller: _,
    dimensionMarshal: g,
    focusMarshal: S,
    getResponders: l,
    styleMarshal: f
  }), [d, _, g, S, l, f]);
  process.env.NODE_ENV !== "production" && s.current && s.current !== v && process.env.NODE_ENV !== "production" && De("unexpected store change"), s.current = v;
  const b = Y(() => {
    const T = Gn(s);
    T.getState().phase !== "IDLE" && T.dispatch(as());
  }, []), E = Y(() => {
    const T = Gn(s).getState();
    return T.phase === "DROP_ANIMATING" ? !0 : T.phase === "IDLE" ? !1 : T.isDragging;
  }, []), x = ce(() => ({
    isDragging: E,
    tryAbort: b
  }), [E, b]);
  n(x);
  const C = Y((T) => su(Gn(s).getState(), T), []), N = Y(() => Qt(Gn(s).getState()), []), G = ce(() => ({
    marshal: g,
    focus: S,
    contextId: t,
    canLift: C,
    isMovementAllowed: N,
    dragHandleUsageInstructionsId: u,
    registry: m
  }), [t, g, u, S, C, N, m]);
  return nw({
    contextId: t,
    store: v,
    registry: m,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), O.useEffect(() => b, [b]), R.createElement(fo.Provider, {
    value: G
  }, R.createElement(nv, {
    context: hs,
    store: v
  }, e.children));
}
let sw = 0;
function aw() {
  return ce(() => `${sw++}`, []);
}
function lw() {
  return R.useId();
}
var cw = "useId" in R ? lw : aw;
function uw(e) {
  const t = cw(), n = e.dragHandleUsageInstructions || Vr.dragHandleUsageInstructions;
  return R.createElement(yv, null, (r) => R.createElement(iw, {
    nonce: e.nonce,
    contextId: t,
    setCallbacks: r,
    dragHandleUsageInstructions: n,
    enableDefaultSensors: e.enableDefaultSensors,
    sensors: e.sensors,
    onBeforeCapture: e.onBeforeCapture,
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragUpdate: e.onDragUpdate,
    onDragEnd: e.onDragEnd,
    autoScrollerOptions: e.autoScrollerOptions
  }, e.children));
}
const il = {
  dragging: 5e3,
  dropAnimating: 4500
}, dw = (e, t) => t ? er.drop(t.duration) : e ? er.snap : er.fluid, fw = (e, t) => {
  if (e)
    return t ? cr.opacity.drop : cr.opacity.combining;
}, pw = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function hw(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, a = pw(e), l = !!i, c = l ? Di.drop(r, s) : Di.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: dw(a, i),
    transform: c,
    opacity: fw(s, l),
    zIndex: l ? il.dropAnimating : il.dragging,
    pointerEvents: "none"
  };
}
function mw(e) {
  return {
    transform: Di.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function gw(e) {
  return e.type === "DRAGGING" ? hw(e) : mw(e);
}
function vw(e, t, n = Ve) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = xc(o, r), s = Xr(i, n), a = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: r.display
  }, l = {
    x: i.marginBox.width,
    y: i.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: a,
    displaceBy: l,
    client: i,
    page: s
  };
}
function yw(e) {
  const t = ms("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  } = e, l = ce(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  }), [i, a, s]), c = Y((p) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot get dimension when no ref is set") : w(!1)), vw(n, h, p);
  }, [n, o]), d = ce(() => ({
    uniqueId: t,
    descriptor: n,
    options: l,
    getDimension: c
  }), [n, c, l, t]), u = O.useRef(d), f = O.useRef(!0);
  ut(() => (r.draggable.register(u.current), () => r.draggable.unregister(u.current)), [r.draggable]), ut(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const p = u.current;
    u.current = d, r.draggable.update(d, p);
  }, [d, r.draggable]);
}
var bs = R.createContext(null);
function Eu(e) {
  e && br(e) || (process.env.NODE_ENV !== "production" ? w(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : w(!1));
}
function bw(e, t, n) {
  Er(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? w(!1, "Draggable requires a draggableId") : w(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? w(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : w(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? w(!1, `${r(o)} requires an integer index prop`) : w(!1)), e.mapped.type !== "DRAGGING" && (Eu(n()), e.isEnabled && (fu(t, o) || (process.env.NODE_ENV !== "production" ? w(!1, `${r(o)} Unable to find drag handle`) : w(!1))));
  });
}
function Ew(e) {
  gs(() => {
    const t = O.useRef(e);
    Er(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? w(!1, "Draggable isClone prop value changed during component life") : w(!1));
    }, [e]);
  });
}
function Qr(e) {
  const t = O.useContext(e);
  return t || (process.env.NODE_ENV !== "production" ? w(!1, "Could not find required context") : w(!1)), t;
}
function ww(e) {
  e.preventDefault();
}
const _w = (e) => {
  const t = O.useRef(null), n = Y((x = null) => {
    t.current = x;
  }, []), r = Y(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = Qr(fo), {
    type: a,
    droppableId: l
  } = Qr(bs), c = ce(() => ({
    id: e.draggableId,
    index: e.index,
    type: a,
    droppableId: l
  }), [e.draggableId, e.index, a, l]), {
    children: d,
    draggableId: u,
    isEnabled: f,
    shouldRespectForcePress: p,
    canDragInteractiveElements: h,
    isClone: m,
    mapped: g,
    dropAnimationFinished: _
  } = e;
  if (bw(e, o, r), Ew(m), !m) {
    const x = ce(() => ({
      descriptor: c,
      registry: s,
      getDraggableRef: r,
      canDragInteractiveElements: h,
      shouldRespectForcePress: p,
      isEnabled: f
    }), [c, s, r, h, p, f]);
    yw(x);
  }
  const S = ce(() => f ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": u,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: ww
  } : null, [o, i, u, f]), v = Y((x) => {
    g.type === "DRAGGING" && g.dropping && x.propertyName === "transform" && (R.version.startsWith("16") || R.version.startsWith("17") ? _() : Ri.flushSync(_));
  }, [_, g]), b = ce(() => {
    const x = gw(g), C = g.type === "DRAGGING" && g.dropping ? v : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": u,
        style: x,
        onTransitionEnd: C
      },
      dragHandleProps: S
    };
  }, [o, S, u, g, v, n]), E = ce(() => ({
    draggableId: c.id,
    type: c.type,
    source: {
      index: c.index,
      droppableId: c.droppableId
    }
  }), [c.droppableId, c.id, c.index, c.type]);
  return R.createElement(R.Fragment, null, d(b, g.snapshot, E));
};
var Dw = _w, wu = (e, t) => e === t, _u = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const Sw = (e) => e.combine ? e.combine.draggableId : null, Ow = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function xw() {
  const e = Be((o, i) => ({
    x: o,
    y: i
  })), t = Be((o, i, s = null, a = null, l = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!l,
    dropAnimation: l,
    mode: o,
    draggingOver: s,
    combineWith: a,
    combineTargetFor: null
  })), n = Be((o, i, s, a, l = null, c = null, d = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: l,
      combineWith: c,
      mode: i,
      offset: o,
      dimension: s,
      forceShouldAnimate: d,
      snapshot: t(i, a, l, c, null)
    }
  }));
  return (o, i) => {
    if (fr(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, a = o.dimensions.draggables[i.draggableId], l = ct(o.impact), c = Ow(o.impact), d = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, a, i.isClone, l, c, d);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const a = i.isClone, l = o.dimensions.draggables[i.draggableId], c = s.result, d = c.mode, u = _u(c), f = Sw(c), h = {
        duration: o.dropDuration,
        curve: cs.drop,
        moveTo: o.newHomeClientOffset,
        opacity: f ? cr.opacity.drop : null,
        scale: f ? cr.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: l,
          dropping: h,
          draggingOver: u,
          combineWith: f,
          mode: d,
          forceShouldAnimate: null,
          snapshot: t(d, a, u, f, h)
        }
      };
    }
    return null;
  };
}
function Du(e = null) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null
  };
}
const Nw = {
  mapped: {
    type: "SECONDARY",
    offset: Ve,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Du(null)
  }
};
function Cw() {
  const e = Be((s, a) => ({
    x: s,
    y: a
  })), t = Be(Du), n = Be((s, a = null, l) => ({
    mapped: {
      type: "SECONDARY",
      offset: s,
      combineTargetFor: a,
      shouldAnimateDisplacement: l,
      snapshot: t(a)
    }
  })), r = (s) => s ? n(Ve, s, !0) : null, o = (s, a, l, c) => {
    const d = l.displaced.visible[s], u = !!(c.inVirtualList && c.effected[s]), f = lo(l), p = f && f.draggableId === s ? a : null;
    if (!d) {
      if (!u)
        return r(p);
      if (l.displaced.invisible[s])
        return null;
      const g = Tn(c.displacedBy.point), _ = e(g.x, g.y);
      return n(_, p, !0);
    }
    if (u)
      return r(p);
    const h = l.displacedBy.point, m = e(h.x, h.y);
    return n(m, p, d.shouldAnimate);
  };
  return (s, a) => {
    if (fr(s))
      return s.critical.draggable.id === a.draggableId ? null : o(a.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const l = s.completed;
      return l.result.draggableId === a.draggableId ? null : o(a.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const Aw = () => {
  const e = xw(), t = Cw();
  return (r, o) => e(r, o) || t(r, o) || Nw;
}, Tw = {
  dropAnimationFinished: Qc
}, Pw = Sc(Aw, Tw, null, {
  context: hs,
  areStatePropsEqual: wu
})(Dw);
var Iw = Pw;
function Su(e) {
  return Qr(bs).isUsingCloneFor === e.draggableId && !e.isClone ? null : R.createElement(Iw, e);
}
function Rw(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return R.createElement(Su, En({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const Es = (e) => (t) => e === t, Mw = Es("scroll"), Lw = Es("auto"), kw = Es("visible"), sl = (e, t) => t(e.overflowX) || t(e.overflowY), jw = (e, t) => t(e.overflowX) && t(e.overflowY), Ou = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return sl(n, Mw) || sl(n, Lw);
}, Bw = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = dr(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, w(!1)), !Ou(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return jw(r, kw) || process.env.NODE_ENV !== "production" && De(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, ws = (e) => e == null ? null : e === document.body ? Bw() ? e : null : e === document.documentElement ? null : Ou(e) ? e : ws(e.parentElement);
var Vw = (e) => {
  !e || !ws(e.parentElement) || process.env.NODE_ENV !== "production" && De(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, xi = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const xu = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : xu(e.parentElement) : !1;
var $w = (e) => {
  const t = ws(e), n = xu(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, Fw = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: n,
  isFixedOnPage: r,
  direction: o,
  client: i,
  page: s,
  closest: a
}) => {
  const l = (() => {
    if (!a)
      return null;
    const {
      scrollSize: f,
      client: p
    } = a, h = ru({
      scrollHeight: f.scrollHeight,
      scrollWidth: f.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: a.page.marginBox,
      frameClient: p,
      scrollSize: f,
      shouldClipSubject: a.shouldClipSubject,
      scroll: {
        initial: a.scroll,
        current: a.scroll,
        max: h,
        diff: {
          value: Ve,
          displacement: Ve
        }
      }
    };
  })(), c = o === "vertical" ? ns : kc, d = Dn({
    page: s,
    withPlaceholder: null,
    axis: c,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: n,
    isFixedOnPage: r,
    axis: c,
    isEnabled: t,
    client: i,
    page: s,
    frame: l,
    subject: d
  };
};
const Gw = (e, t) => {
  const n = Nc(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, s = o + t.scrollWidth, l = Ji({
    top: r,
    right: s,
    bottom: i,
    left: o
  }, n.border);
  return Qi({
    borderBox: l,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var zw = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: a
}) => {
  const l = n.closestScrollable, c = Gw(e, l), d = Xr(c, r), u = (() => {
    if (!l)
      return null;
    const p = Nc(l), h = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: Xr(p, r),
      scroll: xi(l),
      scrollSize: h,
      shouldClipSubject: a
    };
  })();
  return Fw({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: s,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: c,
    page: d,
    closest: u
  });
};
const Uw = {
  passive: !1
}, Ww = {
  passive: !0
};
var al = (e) => e.shouldPublishImmediately ? Uw : Ww;
const Mr = (e) => e && e.env.closestScrollable || null;
function Hw(e) {
  const t = O.useRef(null), n = Qr(fo), r = ms("droppable"), {
    registry: o,
    marshal: i
  } = n, s = vs(e), a = ce(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = O.useRef(a), c = ce(() => Be((b, E) => {
    t.current || (process.env.NODE_ENV !== "production" ? w(!1, "Can only update scroll when dragging") : w(!1));
    const x = {
      x: b,
      y: E
    };
    i.updateDroppableScroll(a.id, x);
  }), [a.id, i]), d = Y(() => {
    const b = t.current;
    return !b || !b.env.closestScrollable ? Ve : xi(b.env.closestScrollable);
  }, []), u = Y(() => {
    const b = d();
    c(b.x, b.y);
  }, [d, c]), f = ce(() => or(u), [u]), p = Y(() => {
    const b = t.current, E = Mr(b);
    if (b && E || (process.env.NODE_ENV !== "production" ? w(!1, "Could not find scroll options while scrolling") : w(!1)), b.scrollOptions.shouldPublishImmediately) {
      u();
      return;
    }
    f();
  }, [f, u]), h = Y((b, E) => {
    t.current && (process.env.NODE_ENV !== "production" ? w(!1, "Cannot collect a droppable while a drag is occurring") : w(!1));
    const x = s.current, C = x.getDroppableRef();
    C || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot collect without a droppable ref") : w(!1));
    const N = $w(C), G = {
      ref: C,
      descriptor: a,
      env: N,
      scrollOptions: E
    };
    t.current = G;
    const T = zw({
      ref: C,
      descriptor: a,
      env: N,
      windowScroll: b,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), P = N.closestScrollable;
    return P && (P.setAttribute(el.contextId, n.contextId), P.addEventListener("scroll", p, al(G.scrollOptions)), process.env.NODE_ENV !== "production" && Vw(P)), T;
  }, [n.contextId, a, p, s]), m = Y(() => {
    const b = t.current, E = Mr(b);
    return b && E || (process.env.NODE_ENV !== "production" ? w(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : w(!1)), xi(E);
  }, []), g = Y(() => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot stop drag when no active drag") : w(!1));
    const E = Mr(b);
    t.current = null, E && (f.cancel(), E.removeAttribute(el.contextId), E.removeEventListener("scroll", p, al(b.scrollOptions)));
  }, [p, f]), _ = Y((b) => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot scroll when there is no drag") : w(!1));
    const x = Mr(E);
    x || (process.env.NODE_ENV !== "production" ? w(!1, "Cannot scroll a droppable with no closest scrollable") : w(!1)), x.scrollTop += b.y, x.scrollLeft += b.x;
  }, []), S = ce(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: m,
    dragStopped: g,
    scroll: _
  }), [g, h, m, _]), v = ce(() => ({
    uniqueId: r,
    descriptor: a,
    callbacks: S
  }), [S, a, r]);
  ut(() => (l.current = v.descriptor, o.droppable.register(v), () => {
    t.current && (process.env.NODE_ENV !== "production" && De("Unsupported: changing the droppableId or type of a Droppable during a drag"), g()), o.droppable.unregister(v);
  }), [S, a, g, v, i, o.droppable]), ut(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), ut(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Go() {
}
const ll = {
  width: 0,
  height: 0,
  margin: Ov
}, qw = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? ll : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Yw = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = qw({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: n
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: r.width,
    height: r.height,
    marginTop: r.margin.top,
    marginRight: r.margin.right,
    marginBottom: r.margin.bottom,
    marginLeft: r.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: n !== "none" ? er.placeholder : null
  };
}, Kw = (e) => {
  const t = O.useRef(null), n = Y(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [a, l] = O.useState(e.animate === "open");
  O.useEffect(() => a ? r !== "open" ? (n(), l(!1), Go) : t.current ? Go : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), n) : Go, [r, a, n]);
  const c = Y((u) => {
    u.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), d = Yw({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return R.createElement(e.placeholder.tagName, {
    style: d,
    "data-rfd-placeholder-context-id": s,
    onTransitionEnd: c,
    ref: e.innerRef
  });
};
var Xw = R.memo(Kw);
function zo(e) {
  return typeof e == "boolean";
}
function Uo(e, t) {
  t.forEach((n) => n(e));
}
const Zw = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? w(!1, "A Droppable requires a droppableId prop") : w(!1)), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? w(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : w(!1));
}, function({
  props: t
}) {
  zo(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? w(!1, "isDropDisabled must be a boolean") : w(!1)), zo(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? w(!1, "isCombineEnabled must be a boolean") : w(!1)), zo(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? w(!1, "ignoreContainerClipping must be a boolean") : w(!1));
}, function({
  getDroppableRef: t
}) {
  Eu(t());
}], Jw = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && De(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Qw = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? w(!1, "Must provide a clone render function (renderClone) for virtual lists") : w(!1));
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? w(!1, "Expected virtual list to not have a placeholder") : w(!1));
}];
function e_(e) {
  Er(() => {
    Uo(e, Zw), e.props.mode === "standard" && Uo(e, Jw), e.props.mode === "virtual" && Uo(e, Qw);
  });
}
class t_ extends R.PureComponent {
  constructor(...t) {
    super(...t), this.state = {
      isVisible: !!this.props.on,
      data: this.props.on,
      animate: this.props.shouldAnimate && this.props.on ? "open" : "none"
    }, this.onClose = () => {
      this.state.animate === "close" && this.setState({
        isVisible: !1
      });
    };
  }
  static getDerivedStateFromProps(t, n) {
    return t.shouldAnimate ? t.on ? {
      isVisible: !0,
      data: t.on,
      animate: "open"
    } : n.isVisible ? {
      isVisible: !0,
      data: n.data,
      animate: "close"
    } : {
      isVisible: !1,
      animate: "close",
      data: null
    } : {
      isVisible: !!t.on,
      data: t.on,
      animate: "none"
    };
  }
  render() {
    if (!this.state.isVisible)
      return null;
    const t = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(t);
  }
}
const n_ = (e) => {
  const t = O.useContext(fo);
  t || (process.env.NODE_ENV !== "production" ? w(!1, "Could not find app context") : w(!1));
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = O.useRef(null), i = O.useRef(null), {
    children: s,
    droppableId: a,
    type: l,
    mode: c,
    direction: d,
    ignoreContainerClipping: u,
    isDropDisabled: f,
    isCombineEnabled: p,
    snapshot: h,
    useClone: m,
    updateViewportMaxScroll: g,
    getContainerForClone: _
  } = e, S = Y(() => o.current, []), v = Y((j = null) => {
    o.current = j;
  }, []), b = Y(() => i.current, []), E = Y((j = null) => {
    i.current = j;
  }, []);
  e_({
    props: e,
    getDroppableRef: S,
    getPlaceholderRef: b
  });
  const x = Y(() => {
    r() && g({
      maxScroll: iu()
    });
  }, [r, g]);
  Hw({
    droppableId: a,
    type: l,
    mode: c,
    direction: d,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: u,
    getDroppableRef: S
  });
  const C = ce(() => R.createElement(t_, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: j,
    data: V,
    animate: Z
  }) => R.createElement(Xw, {
    placeholder: V,
    onClose: j,
    innerRef: E,
    animate: Z,
    contextId: n,
    onTransitionEnd: x
  })), [n, x, e.placeholder, e.shouldAnimatePlaceholder, E]), N = ce(() => ({
    innerRef: v,
    placeholder: C,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": n
    }
  }), [n, a, C, v]), G = m ? m.dragging.draggableId : null, T = ce(() => ({
    droppableId: a,
    type: l,
    isUsingCloneFor: G
  }), [a, G, l]);
  function P() {
    if (!m)
      return null;
    const {
      dragging: j,
      render: V
    } = m, Z = R.createElement(Su, {
      draggableId: j.draggableId,
      index: j.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (Q, $) => V(Q, $, j));
    return Qu.createPortal(Z, _());
  }
  return R.createElement(bs.Provider, {
    value: T
  }, s(N, h), P());
};
var r_ = n_;
function o_() {
  return document.body || (process.env.NODE_ENV !== "production" ? w(!1, "document.body is not ready") : w(!1)), document.body;
}
const cl = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: o_
}, Nu = (e) => {
  let t = {
    ...e
  }, n;
  for (n in cl)
    e[n] === void 0 && (t = {
      ...t,
      [n]: cl[n]
    });
  return t;
}, Wo = (e, t) => e === t.droppable.type, ul = (e, t) => t.draggables[e.draggable.id], i_ = () => {
  const e = {
    placeholder: null,
    shouldAnimatePlaceholder: !0,
    snapshot: {
      isDraggingOver: !1,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: !1
    },
    useClone: null
  }, t = {
    ...e,
    shouldAnimatePlaceholder: !1
  }, n = Be((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), r = Be((i, s, a, l, c, d) => {
    const u = c.descriptor.id;
    if (c.descriptor.droppableId === i) {
      const h = d ? {
        render: d,
        dragging: n(c.descriptor)
      } : null, m = {
        isDraggingOver: a,
        draggingOverWith: a ? u : null,
        draggingFromThisWith: u,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: m,
        useClone: h
      };
    }
    if (!s)
      return t;
    if (!l)
      return e;
    const p = {
      isDraggingOver: a,
      draggingOverWith: u,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: c.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: p,
      useClone: null
    };
  });
  return (i, s) => {
    const a = Nu(s), l = a.droppableId, c = a.type, d = !a.isDropDisabled, u = a.renderClone;
    if (fr(i)) {
      const f = i.critical;
      if (!Wo(c, f))
        return t;
      const p = ul(f, i.dimensions), h = ct(i.impact) === l;
      return r(l, d, h, h, p, u);
    }
    if (i.phase === "DROP_ANIMATING") {
      const f = i.completed;
      if (!Wo(c, f.critical))
        return t;
      const p = ul(f.critical, i.dimensions);
      return r(l, d, _u(f.result) === l, ct(f.impact) === l, p, u);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const f = i.completed;
      if (!Wo(c, f.critical))
        return t;
      const p = ct(f.impact) === l, h = !!(f.impact.at && f.impact.at.type === "COMBINE"), m = f.critical.droppable.id === l;
      return p ? h ? e : t : m ? e : t;
    }
    return t;
  };
}, s_ = {
  updateViewportMaxScroll: By
}, a_ = Sc(i_, s_, (e, t, n) => ({
  ...Nu(n),
  ...e,
  ...t
}), {
  context: hs,
  areStatePropsEqual: wu
})(r_);
var l_ = a_;
const c_ = (e) => /* @__PURE__ */ O.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ O.createElement("path", { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 000 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 00576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" })), tn = (e, t, n, r, o) => {
  if (!r)
    throw new Error(o ?? `Invalid property path: ${t}
Couldn't access "${n}" in ${JSON.stringify(e)}`);
}, dl = (e) => typeof e == "object" && e !== null && !Array.isArray(e), $r = (e) => Array.isArray(e), Cu = (e, t) => e.filter((n, r) => r !== t), u_ = (e, t, n, r = {}) => {
  const { remove: o = !1, createNew: i = !0, noError: s = !1 } = r, a = e, l = typeof (c = t) == "string" ? c : typeof c == "number" ? String(c) : c.reduce((f, p) => typeof p == "number" ? `${f}[${p}]` : f === "" ? p : `${f}.${p}`, "");
  var c;
  const d = Object.assign(Object.assign({}, r), { remove: o, createNew: i, noError: s, fullData: a, fullPath: l }), u = Array.isArray(t) ? t : ((f) => Array.isArray(f) ? f : f.split(/(\.|\[\d+\])/).filter((p) => p !== "." && p !== "").map((p) => {
    const h = /\[(\d+)\]/.exec(p);
    return h ? Number(h[1]) : p;
  }).flat())(t).filter((f) => f !== "");
  return $r(e) && o && u.length === 1 ? Cu(e, u[0]) : Yn(e, u, n, d);
}, Yn = (e, t, n, r) => {
  const o = dl(e) ? Object.assign({}, e) : null, i = $r(e) ? [...e] : null;
  if (t.length === 0)
    return e;
  if (!o && !i)
    throw new Error("Can't assign property -- invalid input object");
  const { createNew: s, remove: a, noError: l, fullData: c, fullPath: d } = r, u = t[0];
  if (i && typeof u == "string")
    return i.map((m) => Yn(m, t, n, r));
  if (t.length === 1) {
    if (o && typeof u == "string") {
      const m = d_(o, u, n, r);
      return m ?? o;
    }
    return i && typeof u == "number" ? (f_(i, u, n, r), i) : (tn(c, d, u, l), e);
  }
  const f = o || i || [];
  if (a && t.length === 2 && typeof t[1] == "number") {
    const m = f[u], g = t[1];
    return $r(m) ? f[u] = Cu(m, g) : tn(c, d, u, l, "Trying to remove an indexed item from an object that is not an array"), f;
  }
  const p = t.slice(1);
  if (u in e) {
    if (h = f[u], !$r(h) && !dl(h)) {
      if (!s)
        return tn(c, d, u, l), f;
      f[u] = {};
    }
    return f[u] = Yn(f[u], p, n, r), f;
  }
  var h;
  if (s) {
    const m = typeof p[0] == "number" ? [] : {};
    if (o)
      return f[u] = m, f[u] = Yn(f[u], p, n, r), f;
    if (i && Array.isArray(f)) {
      f.push(m);
      const g = f.length - 1;
      return f[g] = Yn(f[g], p, n, r), f;
    }
  }
  return tn(c, d, u, l), f;
}, d_ = (e, t, n, r) => {
  const { remove: o, createNew: i, noError: s, insertAfter: a, insertBefore: l, fullData: c, fullPath: d } = r;
  if (l !== void 0 || a !== void 0) {
    const f = Object.entries(e);
    let p = 1 / 0;
    return p = typeof l == "number" ? l : typeof a == "number" ? a : f.findIndex(([h, m]) => h === (l ?? a)), a && p++, f.splice(p, 0, [t, n]), Object.fromEntries(f);
  }
  const u = t in e;
  o ? u ? delete e[t] : tn(c, d, t, s) : i || u ? e[t] = n : tn(c, d, t, s);
}, f_ = (e, t, n, r) => {
  const { noError: o, fullData: i, fullPath: s, createNew: a, insert: l } = r;
  l && e.splice(t, 0, n), t in e ? e[t] = n : a ? e.push(n) : tn(i, s, t, o);
}, xn = (e, t, n) => {
  const r = Array.isArray(t) ? t : p_(t);
  if (r.length === 0)
    return e;
  const o = r[0];
  if (Array.isArray(e) && typeof o != "number")
    return e.map((s) => xn(s, r, n));
  if (typeof e != "object" || e === null || !(o in e))
    return h_(e, o, n);
  const i = e[o];
  return r.length === 1 ? i : xn(i, r.slice(1), n);
}, p_ = (e) => e.split(/(\.|\[\d+\])/).filter((t) => t !== "." && t !== "").map((t) => {
  const n = /\[(\d+)\]/.exec(t);
  return n ? Number(n[1]) : t;
}).flat(), h_ = (e, t, n) => {
  if (n === void 0)
    throw new Error(`Unable to extract object property
Looking for property: ${t}
In object: ${JSON.stringify(e)}`);
  return n;
};
function Au(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  }
  return n;
}
function vn(e, t, n, r) {
  return new (n || (n = Promise))(function(o, i) {
    function s(c) {
      try {
        l(r.next(c));
      } catch (d) {
        i(d);
      }
    }
    function a(c) {
      try {
        l(r.throw(c));
      } catch (d) {
        i(d);
      }
    }
    function l(c) {
      var d;
      c.done ? o(c.value) : (d = c.value, d instanceof n ? d : new n(function(u) {
        u(d);
      })).then(s, a);
    }
    l((r = r.apply(e, t || [])).next());
  });
}
const Tu = ({ className: e, name: t, value: n, setValue: r, handleKeyPress: o, styles: i, textAreaRef: s }) => {
  if (typeof n != "string")
    return null;
  const a = n.slice(-1) === `
` ? n + "." : n;
  return k("div", { style: { display: "grid" }, children: [y("textarea", { id: `${t}_textarea`, ref: s, style: Object.assign({ height: "auto", gridArea: "1 / 1 / 2 / 2", overflowY: "auto", whiteSpace: "pre-wrap" }, i), rows: 1, className: e, name: `${t}_textarea`, value: n, onChange: (l) => r(l.target.value), autoFocus: !0, onFocus: (l) => {
    n.length < 40 && l.target.select();
  }, onKeyDown: o }), y("span", { className: e, style: Object.assign({ visibility: "hidden", height: "auto", gridArea: "1 / 1 / 2 / 2", color: "red", opacity: 0.9, whiteSpace: "pre-wrap", overflowY: "auto", border: "1px solid transparent" }, i), children: a })] });
}, Nn = (e) => e !== null && typeof e == "object" && !(e instanceof Date), Pu = (e, t, n, r = "") => {
  if (!n && !r)
    return !0;
  switch (e) {
    case "collection":
      if (n) {
        if (n(t, r))
          return !0;
        if (!Ni(r, t, n))
          return !1;
      }
      if (!n && r && !Ni(r, t))
        return !1;
      break;
    case "value":
      if (n && !n(t, r) || !n && r && !Cn(t, r))
        return !1;
  }
  return !0;
}, Ni = (e = "", t, n = Cn) => {
  const r = t.value;
  return Object.entries(r).some(([o, i]) => {
    const s = [...t.path, o], a = Object.assign(Object.assign({}, t), { key: o, path: s, level: t.level + 1, value: i, size: s.length, parentData: r });
    return Nn(i) ? Ni(e, a, n) : n(a, e);
  });
}, Cn = (e, t = "") => {
  const { value: n } = e;
  if (n === null && "null".includes(t.toLowerCase()))
    return !0;
  switch (typeof n) {
    case "string":
      return n.toLowerCase().includes(t.toLowerCase());
    case "number":
      return !!String(n).includes(t);
    case "boolean":
      return n ? "true".includes(t.toLowerCase()) || t === "1" : "false".includes(t.toLowerCase()) || t === "0";
    default:
      return !1;
  }
}, fl = ({ key: e, path: t }, n = "") => !!Cn({ value: e }, n) || !!t.some((r) => Cn({ value: r }, n)), un = (e, t) => (t ?? "") + e.map((n) => n === "" ? String.fromCharCode(0) : n).join("."), _s = (e) => e.shiftKey ? "Shift" : e.metaKey ? "Meta" : e.ctrlKey ? "Control" : e.altKey ? "Alt" : void 0, m_ = (e, t, n) => {
  const r = e.key, o = _s(e);
  if (Array.isArray(t))
    return !!o && t.includes(o);
  const { key: i, modifier: s } = t;
  return (n !== "stringLineBreak" || r !== "Enter" || o !== "Shift" || i !== "Enter" || !(s != null && s.includes("Shift"))) && r === i && (s === o || Array.isArray(s) && s.includes(o));
}, Yt = { key: "Enter" }, pl = { confirm: Yt, cancel: { key: "Escape" }, objectConfirm: Object.assign(Object.assign({}, Yt), { modifier: ["Meta", "Shift", "Control"] }), objectLineBreak: Yt, stringConfirm: Yt, stringLineBreak: Object.assign(Object.assign({}, Yt), { modifier: ["Shift"] }), numberConfirm: Yt, numberUp: { key: "ArrowUp" }, numberDown: { key: "ArrowDown" }, tabForward: { key: "Tab" }, tabBack: { key: "Tab", modifier: "Shift" }, booleanConfirm: Yt, booleanToggle: { key: " " }, clipboardModifier: ["Meta", "Control"], collapseModifier: ["Alt"] }, nn = (e, t, n = "next", r) => {
  const o = t.slice(0, t.length - 1), i = t.slice(-1)[0];
  if (i === void 0)
    return null;
  const s = xn(e, o), a = g_(s);
  Array.isArray(s) || r(a, ({ key: d, value: u }) => [d, u]);
  const l = a.findIndex((d) => d.key === i), c = a[l + (n === "next" ? 1 : -1)];
  return c ? Nn(c.value) ? Object.keys(c.value).length === 0 ? nn(e, [...o, c.key], n, r) : Iu(e, [...o, c.key], n, r) : [...o, c.key] : o.length === 0 ? null : nn(e, o, n, r);
}, Iu = (e, t, n = "next", r) => {
  const o = xn(e, t);
  if (!Nn(o))
    return t;
  const i = Array.isArray(o) ? o.map((a, l) => l) : Object.keys(o);
  r(i, (a) => [a, o]);
  const s = n === "next" ? i[0] : i[i.length - 1];
  return Iu(e, [...t, s], n, r);
}, g_ = (e) => Array.isArray(e) ? e.map((t, n) => ({ index: n, value: t, key: n })) : Object.entries(e).map(([t, n], r) => ({ key: t, value: n, index: r })), Ru = (e, t) => {
  var n, r, o, i;
  const s = e.current, a = (n = s == null ? void 0 : s.selectionStart) !== null && n !== void 0 ? n : 1 / 0, l = (r = s == null ? void 0 : s.selectionEnd) !== null && r !== void 0 ? r : 1 / 0, c = ((o = s == null ? void 0 : s.textContent) === null || o === void 0 ? void 0 : o.slice(0, a)) + t + ((i = s == null ? void 0 : s.textContent) === null || i === void 0 ? void 0 : i.slice(l));
  return s.value = c, s == null || s.setSelectionRange(a + 1, a + 1), c;
}, Ci = (e) => {
  if (e !== Mu) {
    if (Array.isArray(e))
      return e.map((t) => Ci(t));
    if (e && typeof e == "object")
      for (const t in e)
        e[t] = Ci(e[t]);
    return e;
  }
}, Mu = "__​undefined__", Ds = { displayName: "Default", fragments: { edit: "rgb(42, 161, 152)" }, styles: { container: { backgroundColor: "#f6f6f6", fontFamily: "monospace" }, collection: {}, collectionInner: {}, collectionElement: {}, dropZone: {}, property: "#292929", bracket: { color: "rgb(0, 43, 54)", fontWeight: "bold" }, itemCount: { color: "rgba(0, 0, 0, 0.3)", fontStyle: "italic" }, string: "rgb(203, 75, 22)", number: "rgb(38, 139, 210)", boolean: "green", null: { color: "rgb(220, 50, 47)", fontVariant: "small-caps", fontWeight: "bold" }, input: ["#292929"], inputHighlight: "#b3d8ff", error: { fontSize: "0.8em", color: "red", fontWeight: "bold" }, iconCollection: "rgb(0, 43, 54)", iconEdit: "edit", iconDelete: "rgb(203, 75, 22)", iconAdd: "edit", iconCopy: "rgb(38, 139, 210)", iconOk: "green", iconCancel: "rgb(203, 75, 22)" } }, Lu = O.createContext({ getStyles: () => ({}), icons: {} }), v_ = ({ theme: e = Ds, icons: t = {}, docRoot: n, children: r }) => {
  const o = y_(e, n);
  return y(Lu.Provider, { value: { getStyles: (i, s) => typeof o[i] == "function" ? o[i](s) : o[i], icons: t }, children: r });
}, Tt = () => O.useContext(Lu), y_ = (e, t) => {
  var n, r, o, i;
  const s = {}, a = (Array.isArray(e) ? e : [e]).map((d) => b_(d) ? Ho({ fragments: {}, styles: d }, s) : Ho(d, s)), l = Ho(Ds, {});
  Object.keys(l).forEach((d) => {
    const u = d;
    a.forEach((f) => {
      f[u] && (l[u] = Object.assign(Object.assign({}, l[u]), f[u]));
    });
  });
  const c = Object.assign({}, l);
  return Object.entries(s).forEach(([d, u]) => {
    const f = d;
    c[f] = (p) => {
      const h = u(p) || {};
      return Object.assign(Object.assign({}, l[f]), h);
    };
  }), typeof (c == null ? void 0 : c.inputHighlight) != "function" && (!((n = c == null ? void 0 : c.inputHighlight) === null || n === void 0) && n.backgroundColor) && t.style.setProperty("--jer-highlight-color", (r = c == null ? void 0 : c.inputHighlight) === null || r === void 0 ? void 0 : r.backgroundColor), typeof (c == null ? void 0 : c.iconCopy) != "function" && (!((o = c == null ? void 0 : c.iconCopy) === null || o === void 0) && o.color) && t.style.setProperty("--jer-icon-copy-color", (i = c == null ? void 0 : c.iconCopy) === null || i === void 0 ? void 0 : i.color), c;
}, Ho = (e, t) => {
  const { fragments: n, styles: r } = e, o = {};
  return Object.entries(r).forEach(([i, s]) => {
    const a = (Array.isArray(s) ? s : [s]).reduce((l, c) => {
      var d, u;
      if (typeof c == "function")
        return t[i] = c, Object.assign({}, l);
      if (typeof c == "string") {
        const f = (d = n == null ? void 0 : n[c]) !== null && d !== void 0 ? d : c;
        return typeof f == "string" ? Object.assign(Object.assign({}, l), { [(u = E_[i]) !== null && u !== void 0 ? u : "color"]: f }) : Object.assign(Object.assign({}, l), f);
      }
      return Object.assign(Object.assign({}, l), c);
    }, {});
    o[i] = a;
  }), o;
}, b_ = (e) => !("styles" in e), E_ = { container: "backgroundColor", collection: "backgroundColor", collectionInner: "backgroundColor", collectionElement: "backgroundColor", dropZone: "borderColor", inputHighlight: "backgroundColor" }, ku = O.createContext(null), w_ = ({ children: e, onEditEvent: t, onCollapse: n }) => {
  const [r, o] = O.useState(null), [i, s] = O.useState(null), [a, l] = O.useState(null), [c, d] = O.useState({ path: null, pathString: null }), u = O.useRef(null), f = O.useRef("next"), p = O.useRef(null);
  return y(ku.Provider, { value: { collapseState: r, setCollapseState: (h) => {
    o(h), n && h !== null && (Array.isArray(h) ? h.forEach((m) => n(m)) : n(h)), h !== null && setTimeout(() => o(null), 2e3);
  }, getMatchingCollapseState: (h) => {
    if (Array.isArray(r)) {
      for (const m of r)
        if (hl(h, m))
          return m;
      return null;
    }
    return hl(h, r) ? r : null;
  }, currentlyEditingElement: i, setCurrentlyEditingElement: (h, m) => {
    const g = typeof h == "string" || h === null ? h : un(h, m === "key" ? "key_" : void 0);
    i !== null && g !== null && u.current !== null && u.current(), s(g), t && t(h, m === "key"), u.current = typeof m == "function" ? m : null;
  }, areChildrenBeingEdited: (h) => i !== null && i.includes(h), previouslyEditedElement: p.current, setPreviouslyEditedElement: (h) => {
    p.current = h;
  }, tabDirection: f.current, setTabDirection: (h) => {
    f.current = h;
  }, previousValue: a, setPreviousValue: l, dragSource: c, setDragSource: d }, children: e });
}, ln = () => {
  const e = O.useContext(ku);
  if (!e)
    throw new Error("Missing Context Provider");
  return e;
}, hl = (e, t) => {
  if (t === null)
    return !1;
  if (!t.includeChildren)
    return t.path.every((n, r) => e[r] === n) && t.path.length === e.length;
  for (const [n, r] of t.path.entries())
    if (r !== e[n])
      return !1;
  return !0;
}, Ai = "**INVALID_FUNCTION**", __ = ({ nodeData: e, showStringQuotes: t = !0, stringTruncate: n = 200, pathString: r, canEdit: o, setIsEditing: i, styles: s, translate: a, value: l, TextWrapper: c = ({ children: d }) => d }) => {
  const d = l ?? e.value, [u, f] = O.useState(!1), p = t ? '"' : "", h = d.length > n, m = () => {
    o ? i(!0) : f(!u);
  };
  return k("div", { id: `${r}_display`, onDoubleClick: m, onClick: (g) => {
    (g.getModifierState("Control") || g.getModifierState("Meta")) && m();
  }, className: "jer-value-string", style: s, children: [p, h ? k(mt, u ? { children: [y(c, { children: k("span", { children: [d, p] }) }), k("span", { className: "jer-string-expansion jer-show-less", onClick: () => f(!1), children: [" ", a("SHOW_LESS", e)] })] } : { children: [k(c, { children: [y("span", { children: d.slice(0, n - 2).trimEnd() }), " "] }), y("span", { className: "jer-string-expansion jer-ellipsis", onClick: () => f(!0), children: "..." }), p] }) : y(c, { children: `${d}${p}` })] });
}, D_ = ({ styles: e, pathString: t, value: n, setValue: r, handleEdit: o, handleKeyboard: i, keyboardCommon: s }) => {
  const a = O.useRef(null);
  return y(Tu, { className: "jer-input-text", textAreaRef: a, name: t, value: n, setValue: r, handleKeyPress: (l) => {
    i(l, Object.assign({ stringConfirm: o, stringLineBreak: () => {
      const c = Ru(a, `
`);
      r(c);
    } }, s));
  }, styles: e });
}, S_ = (e) => {
  var { isEditing: t, path: n, enumType: r } = e, o = Au(e, ["isEditing", "path", "enumType"]);
  const { getStyles: i } = Tt(), s = un(n), { value: a, setValue: l, nodeData: c, handleEdit: d, handleKeyboard: u, keyboardCommon: f } = o;
  return t && r ? k("div", { className: "jer-select jer-select-enums", children: [y("select", { name: `${s}-value-select`, className: "jer-select-inner", onChange: (p) => l(p.target.value), value: a, autoFocus: !0, onKeyDown: (p) => {
    u(p, Object.assign({ stringConfirm: d }, f));
  }, children: r.values.map((p) => y("option", { value: p, children: p }, p)) }), y("span", { className: "focus" })] }) : t ? y(D_, Object.assign({ styles: i("input", c), pathString: s }, o, { setValue: o.setValue })) : y(__, Object.assign({ pathString: s, styles: i("string", c) }, o));
}, O_ = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, nodeData: s, handleKeyboard: a, keyboardCommon: l }) => {
  const { getStyles: c } = Tt();
  return n ? y("input", { className: "jer-input-number", type: "text", name: un(r), value: e, onChange: (d) => t(d.target.value.replace(/[^0-9.-]/g, "")), autoFocus: !0, onFocus: (d) => setTimeout(() => d.target.select(), 10), onKeyDown: (d) => a(d, Object.assign({ numberConfirm: i, numberUp: () => t(Number(e) + 1), numberDown: () => t(Number(e) - 1) }, l)), style: Object.assign({ width: String(e).length / 1.5 + 2 + "em" }, c("input", s)) }) : y("span", { onDoubleClick: () => o(!0), className: "jer-value-number", style: c("number", s), children: e });
}, x_ = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, nodeData: s, handleKeyboard: a, keyboardCommon: l }) => {
  const { getStyles: c } = Tt();
  return typeof e != "boolean" ? null : n ? y("input", { className: "jer-input-boolean", type: "checkbox", name: un(r), checked: e, onChange: () => t(!e), onKeyDown: (d) => {
    d.key === " " && d.preventDefault(), a(d, Object.assign({ booleanConfirm: i, booleanToggle: () => t(!e) }, l));
  }, autoFocus: !0 }) : y("span", { onDoubleClick: () => o(!0), className: "jer-value-boolean", style: c("boolean", s), children: String(e) });
}, N_ = (e, t) => {
  const n = O.useRef(void 0), r = O.useRef(t);
  O.useEffect(() => {
    r.current = t;
  }, [t]);
  const o = (i) => {
    r.current(i);
  };
  O.useEffect(() => {
    if (window.clearTimeout(n.current), e)
      return n.current = window.setTimeout(() => {
        window.addEventListener("keydown", o);
      }, 100), () => {
        window.clearTimeout(n.current), window.removeEventListener("keydown", o);
      };
  }, [e]);
}, C_ = ({ value: e, isEditing: t, setIsEditing: n, handleEdit: r, nodeData: o, handleKeyboard: i, keyboardCommon: s }) => {
  const { getStyles: a } = Tt();
  return N_(t, (l) => i(l, Object.assign({ confirm: r }, s))), y("div", { onDoubleClick: () => n(!0), className: "jer-value-null", style: a("null", o), children: String(e) });
}, A_ = ({ value: e }) => {
  let t = "Error!";
  switch (typeof e) {
    case "string":
      e === Ai && (t = "Function");
      break;
    case "undefined":
      t = "Undefined";
      break;
    case "symbol":
      t = "Symbol";
  }
  return y("span", { className: "jer-value-invalid", children: t });
}, T_ = ({ size: e, style: t, className: n }) => k("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: [y("path", { d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" }), y("path", { d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" })] }), P_ = ({ size: e, style: t, className: n }) => k("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, transform: "translate(0, 0.5)", children: [y("path", { d: "M7 17.013l4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" }), y("path", { d: "M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" })] }), I_ = ({ size: e, style: t, className: n }) => y("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: y("path", { d: "M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12m2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12M15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5z" }) }), R_ = ({ size: e, style: t, className: n }) => k("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", width: e, height: e, className: n, style: t, children: [y("path", { d: "M9 2 H15 A1 1 0 0 1 16 3 V5 A1 1 0 0 1 15 6 H9 A1 1 0 0 1 8 5 V3 A1 1 0 0 1 9 2 z" }), y("path", { d: "M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-2M16 4h2a2 2 0 012 2v4M21 14H11" }), y("path", { d: "M15 10l-4 4 4 4" })] }), M_ = ({ size: e, style: t, className: n }) => k("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", width: e, height: e, className: n, style: t, children: [y("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), y("path", { d: "M22 4L12 14.01l-3-3" })] }), L_ = ({ size: e, style: t, className: n }) => y("svg", { baseProfile: "tiny", viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: y("path", { d: "M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-5 8c0-.832.224-1.604.584-2.295l6.711 6.711A4.943 4.943 0 0112 17c-2.757 0-5-2.243-5-5zm9.416 2.295L9.705 7.584A4.943 4.943 0 0112 7c2.757 0 5 2.243 5 5 0 .832-.224 1.604-.584 2.295z" }) }), k_ = ({ size: e, style: t, className: n }) => y("svg", { viewBox: "0 0 512 512", fill: "currentColor", width: e, height: e, className: n, style: t, children: y("path", { d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" }) }), rn = ({ name: e, nodeData: t }) => {
  var n, r, o, i, s, a, l;
  const { getStyles: c, icons: d } = Tt(), u = { size: "1.4em", className: "jer-icon" };
  switch (e) {
    case "add":
      return (n = d == null ? void 0 : d.add) !== null && n !== void 0 ? n : y(T_, Object.assign({}, u, { style: c("iconAdd", t) }));
    case "edit":
      return (r = d == null ? void 0 : d.edit) !== null && r !== void 0 ? r : y(P_, Object.assign({}, u, { style: c("iconEdit", t) }));
    case "delete":
      return (o = d == null ? void 0 : d.delete) !== null && o !== void 0 ? o : y(I_, Object.assign({}, u, { style: c("iconDelete", t), size: "1.45em" }));
    case "copy":
      return (i = d == null ? void 0 : d.copy) !== null && i !== void 0 ? i : y(R_, Object.assign({}, u, { style: c("iconCopy", t), size: "1.2em" }));
    case "ok":
      return (s = d == null ? void 0 : d.ok) !== null && s !== void 0 ? s : y(M_, Object.assign({}, u, { style: Object.assign({ fontSize: "90%" }, c("iconOk", t)) }));
    case "cancel":
      return (a = d == null ? void 0 : d.cancel) !== null && a !== void 0 ? a : y(L_, Object.assign({}, u, { style: Object.assign({ fontSize: "130%" }, c("iconCancel", t)) }));
    case "chevron":
      return (l = d == null ? void 0 : d.chevron) !== null && l !== void 0 ? l : y(k_, { size: "1em", style: c("iconCollection", t) });
    default:
      return y(mt, {});
  }
}, ju = ({ startEdit: e, handleDelete: t, handleAdd: n, enableClipboard: r, type: o, customButtons: i, nodeData: s, translate: a, keyboardControls: l, handleKeyboard: c, editConfirmRef: d, getNewKeyOptions: u, jsonStringify: f }) => {
  const { getStyles: p } = Tt(), h = a("KEY_NEW", s), [m, g] = O.useState(h), [_, S] = O.useState(!1), { key: v, path: b, value: E } = s, x = Array.isArray(_), C = (N) => {
    var G;
    if (!N)
      return void S(!1);
    const T = Object.keys(xn(s.fullData, b)), P = u ? (G = u(s)) === null || G === void 0 ? void 0 : G.filter((j) => !T.includes(j)) : null;
    P && g(""), S(P == null || P);
  };
  return k("div", { className: "jer-edit-buttons", style: { opacity: _ ? 1 : void 0 }, onClick: (N) => N.stopPropagation(), children: [r && y("div", { onClick: (N) => {
    var G;
    N.stopPropagation();
    let T, P, j = "value", V = "", Z = null;
    if (r) {
      const Q = _s(N);
      if (Q && l.clipboardModifier.includes(Q) ? (T = j_(b), V = T, j = "path") : (T = E, V = o ? f(E) : String(T)), !navigator.clipboard)
        return void (typeof r == "function" && r({ success: !1, value: T, stringValue: V, path: b, key: v, type: j, errorMessage: "Can't access clipboard API" }));
      (G = navigator.clipboard) === null || G === void 0 || G.writeText(V).then(() => P = !0).catch(($) => {
        P = !1, Z = $.message;
      }).finally(() => {
        typeof r == "function" && r({ success: P, errorMessage: Z, value: T, stringValue: V, path: b, key: v, type: j });
      });
    }
  }, className: "jer-copy-pulse", children: y(rn, { name: "copy", nodeData: s }) }), e && y("div", { onClick: e, children: y(rn, { name: "edit", nodeData: s }) }), t && y("div", { onClick: t, children: y(rn, { name: "delete", nodeData: s }) }), n && y("div", { onClick: () => {
    o === "object" ? C(!0) : n("");
  }, children: y(rn, { name: "add", nodeData: s }) }), i == null ? void 0 : i.map(({ Element: N, onClick: G }, T) => y("div", { onClick: (P) => G && G(s, P), children: y(N, { nodeData: s }) }, T)), _ && n && o === "object" && k(mt, { children: [x ? k("div", { className: "jer-select jer-select-keys", children: [k("select", { name: "new-key-select", className: "jer-select-inner", onChange: (N) => {
    n(N.target.value), C(!1);
  }, defaultValue: "", autoFocus: !0, onKeyDown: (N) => {
    c(N, { cancel: () => C(!1) });
  }, children: [y("option", { value: "", disabled: !0, children: _.length > 0 ? a("KEY_SELECT", s) : a("NO_KEY_OPTIONS", s) }), _.map((N) => y("option", { value: N, children: N }, N))] }), y("span", { className: "focus" })] }) : y("input", { className: "jer-input-new-key", type: "text", name: "new-object-key", value: m, onChange: (N) => g(N.target.value), autoFocus: !0, onFocus: (N) => N.target.select(), onKeyDown: (N) => {
    c(N, { stringConfirm: () => {
      n && (C(!1), n(m), g(h));
    }, cancel: () => {
      C(!1), g(h);
    } });
  }, style: p("input", s) }), y(Ss, { onOk: () => {
    x && !m || (C(!1), n(m));
  }, onCancel: () => {
    C(!1);
  }, nodeData: s, editConfirmRef: d, hideOk: x })] })] });
}, Ss = ({ onOk: e, onCancel: t, nodeData: n, editConfirmRef: r, hideOk: o = !1 }) => k("div", { className: "jer-confirm-buttons", children: [!o && y("div", { onClick: e, ref: r, children: y(rn, { name: "ok", nodeData: n }) }), y("div", { onClick: t, children: y(rn, { name: "cancel", nodeData: n }) })] }), j_ = (e) => e.reduce((t, n) => typeof n == "number" ? `${t}[${n}]` : t === "" ? n : `${t}.${n}`, ""), B_ = ["string", "number", "boolean", "null", "object", "array"], Bu = (e = [], t) => {
  const n = e.filter(({ condition: h }) => h(t));
  if (n.length === 0)
    return {};
  const r = n[0], { element: o, wrapperElement: i, customNodeProps: s, wrapperProps: a, hideKey: l = !1, showEditTools: c = !0, showOnEdit: d = !1, showOnView: u = !0, showCollectionWrapper: f = !0 } = r, p = Au(r, ["element", "wrapperElement", "customNodeProps", "wrapperProps", "hideKey", "showEditTools", "showOnEdit", "showOnView", "showCollectionWrapper"]);
  return Object.assign({ CustomNode: o, CustomWrapper: i, customNodeProps: s, wrapperProps: a, hideKey: l, showEditTools: c, showOnEdit: d, showOnView: u, showCollectionWrapper: f }, p);
}, Vu = ({ props: e, collapsed: t }) => {
  const { data: n, nodeData: r, parentData: o, onEdit: i, onError: s, showErrorMessages: a, restrictEditFilter: l, restrictDeleteFilter: c, restrictAddFilter: d, restrictDragFilter: u, translate: f, errorMessageTimeout: p } = e, { currentlyEditingElement: h, setCurrentlyEditingElement: m } = ln(), [g, _] = O.useState(null), S = Object.assign(Object.assign({}, r), { collapsed: t }), { path: v, key: b, size: E } = S, x = un(v), C = !l(S), N = !c(S), G = !d(S), T = !u(S) && N && h === null, P = ($) => {
    a && (_($), setTimeout(() => _(null), p)), console.warn("Error", $);
  }, j = O.useCallback(($, W) => {
    P($.message), s && s({ currentData: S.fullData, errorValue: W, currentValue: n, name: b, path: v, error: $ });
  }, [s, a]), V = h === x, Z = h === `key_${x}`, Q = typeof v.slice(-1)[0] == "number";
  return { pathString: x, nodeData: S, path: v, name: b, size: E, canEdit: C, canDelete: N, canAdd: G, canDrag: T, error: g, showError: P, onError: j, setError: _, handleEditKey: ($) => {
    if (m(null), b === $ || !o)
      return;
    const W = v.slice(0, -1);
    if (Object.keys(o).includes($))
      return void j({ code: "KEY_EXISTS", message: f("ERROR_KEY_EXISTS", S) }, $);
    const J = Object.fromEntries(Object.entries(o).map(([z, H]) => z === b ? [$, H] : [z, H]));
    i(J, W).then((z) => {
      z && j({ code: "UPDATE_ERROR", message: z }, $);
    });
  }, derivedValues: { isEditing: V, isEditingKey: Z, isArray: Q, canEditKey: o !== null && C && G && N && !Q } };
}, $u = ({ canDrag: e, canDragOnto: t, path: n, nodeData: r, onMove: o, onError: i, translate: s }) => {
  const { getStyles: a } = Tt(), { dragSource: l, setDragSource: c } = ln(), [d, u] = O.useState(!1), f = un(n), p = O.useMemo(() => e ? { onDragStart: (_) => {
    _.stopPropagation(), c({ path: n, pathString: f });
  }, onDragEnd: (_) => {
    _.stopPropagation(), c({ path: null, pathString: null });
  } } : {}, [e, f]), h = O.useMemo(() => (_) => t ? { onDragOver: (S) => {
    S.stopPropagation(), S.preventDefault();
  }, onDrop: (S) => {
    S.stopPropagation(), g(_), c({ path: null, pathString: null }), u(!1);
  }, onDragEnter: (S) => {
    var v;
    S.stopPropagation(), f.startsWith((v = l.pathString) !== null && v !== void 0 ? v : "") || u(_);
  }, onDragExit: (S) => {
    S.stopPropagation(), u(!1);
  } } : {}, [l, t, f]), m = O.useMemo(() => t && l.pathString !== null ? y("div", Object.assign({ className: "jer-drop-target-bottom", style: { height: "50%", position: "absolute", width: "100%", top: "50%", zIndex: n.length } }, h("below"))) : null, [l, t, n.length]), g = (_) => {
    var S, v;
    const b = (S = l.path) === null || S === void 0 ? void 0 : S.slice(-1)[0], E = (v = l.path) === null || v === void 0 ? void 0 : v.slice(0, -1).join("."), x = n.slice(0, -1).join(""), { parentData: C } = r;
    typeof b == "string" && C && !Array.isArray(C) && Object.keys(C).includes(b) && b in C && E !== x ? i({ code: "KEY_EXISTS", message: s("ERROR_KEY_EXISTS", r) }, b) : o(l.path, n, _).then((N) => {
      N && i({ code: "UPDATE_ERROR", message: N }, r.value);
    });
  };
  return { dragSourceProps: p, getDropTargetProps: h, BottomDropTarget: m, DropTargetPadding: ({ position: _, nodeData: S }) => d === _ ? y("div", { className: "jer-drag-n-drop-padding", style: a("dropZone", S) }) : null, handleDrop: g };
}, V_ = (e, t, n, r) => {
  var o, i, s;
  if (!t.current)
    return 0;
  const a = parseInt((o = getComputedStyle(n.current).getPropertyValue("line-height")) !== null && o !== void 0 ? o : "16px"), l = ((s = (i = t.current) === null || i === void 0 ? void 0 : i.offsetWidth) !== null && s !== void 0 ? s : 0) / (0.5 * a), c = r(e).replace(/\\n/g, `
`).split(`
`).map((d) => Math.ceil(d.length / l)).reduce((d, u) => d + u, 0) * a;
  return Math.min(c + 30, window.innerHeight - 50);
}, eo = ({ isEditingKey: e, canEditKey: t, pathString: n, path: r, name: o, handleKeyboard: i, handleEditKey: s, handleCancel: a, handleClick: l, keyValueArray: c, styles: d, getNextOrPrevious: u }) => {
  const { setCurrentlyEditingElement: f } = ln();
  return e ? y("input", { className: "jer-input-text jer-key-edit", type: "text", name: n, defaultValue: o, autoFocus: !0, onFocus: (p) => p.target.select(), onKeyDown: (p) => i(p, { stringConfirm: () => s(p.target.value), cancel: a, tabForward: () => {
    if (s(p.target.value), c) {
      const h = c == null ? void 0 : c[0][0];
      f(h ? [...r, h] : u("next"));
    } else
      f(r);
  }, tabBack: () => {
    s(p.target.value), f(u("prev"));
  } }), style: { width: String(o).length / 1.5 + 0.5 + "em" } }) : k("span", { className: "jer-key-text", style: Object.assign(Object.assign({}, d), { minWidth: `${Math.min(String(o).length + 1, 5)}ch`, flexShrink: o.length > 10 ? 1 : 0 }), onDoubleClick: () => t && f(r, "key"), onClick: l, children: [o === "" ? y("span", { className: r.length > 0 ? "jer-empty-string" : void 0 }) : `${o}`, y("span", { className: "jer-key-colon", children: ":" })] });
}, Fu = (e) => {
  const { data: t, parentData: n, onEdit: r, onDelete: o, onChange: i, onMove: s, enableClipboard: a, canDragOnto: l, restrictTypeSelection: c, searchFilter: d, searchText: u, showLabel: f, stringTruncate: p, showStringQuotes: h, indent: m, translate: g, customNodeDefinitions: _, handleKeyboard: S, keyboardControls: v, sort: b, editConfirmRef: E, jsonStringify: x } = e, { getStyles: C } = Tt(), { setCurrentlyEditingElement: N, setCollapseState: G, previouslyEditedElement: T, setPreviouslyEditedElement: P, tabDirection: j, setTabDirection: V, previousValue: Z, setPreviousValue: Q } = ln(), [$, W] = O.useState(typeof t == "function" ? Ai : t), { pathString: J, nodeData: z, path: H, name: K, canEdit: Se, canDelete: oe, canDrag: Ie, error: re, onError: we, handleEditKey: Le, derivedValues: Ye } = Vu({ props: e }), { dragSourceProps: Ne, getDropTargetProps: Ue, BottomDropTarget: Ce, DropTargetPadding: I } = $u({ canDrag: Ie, canDragOnto: l, path: H, nodeData: z, onMove: s, onError: we, translate: g }), pe = Bu(_, z), [B, ee] = O.useState(Ti(t, pe)), de = O.useCallback((L) => {
    if (!i)
      return void W(L);
    const be = i({ currentData: z.fullData, newValue: L, currentValue: $, name: K, path: H });
    W(be);
  }, [i]);
  O.useEffect(() => {
    W(typeof t == "function" ? Ai : t), ee(Ti(t, pe));
  }, [t, re]);
  const { CustomNode: ke, customNodeProps: Oe, hideKey: We, showEditTools: Pt = !0, showOnEdit: Ot, showOnView: bt, passOriginalNode: Et } = pe, at = [...B_, ..._.filter(({ showInTypesSelector: L = !1, name: be }) => L && !!be).map(({ name: L }) => L)], xe = O.useMemo(() => {
    if (typeof c == "boolean")
      return c ? [] : at;
    if (Array.isArray(c))
      return c;
    const L = c(z);
    return typeof L == "boolean" ? L ? [] : at : L;
  }, [z, c]), [nt, xt] = O.useState(((L, be) => {
    var he;
    if (typeof L != "string")
      return null;
    const ue = be.filter((Ae) => Ae instanceof Object && Ae.enum && Ae.values.includes(L) && Ae.matchPriority);
    return ue.sort((Ae, je) => {
      var ft, pt;
      return ((ft = je.matchPriority) !== null && ft !== void 0 ? ft : 0) - ((pt = Ae.matchPriority) !== null && pt !== void 0 ? pt : 0);
    }), (he = ue[0]) !== null && he !== void 0 ? he : null;
  })($, xe)), { isEditing: $e } = Ye, It = Pu("value", z, d, u);
  if ($e && (!It || !Se)) {
    const L = nn(z.fullData, H, j, b);
    N(L || T);
  }
  if (!It)
    return null;
  const rt = (L) => {
    let be;
    if (N(null), Q(null), L === void 0 || ((he) => he && typeof he == "object" && "type" in he && "target" in he && "preventDefault" in he && typeof he.preventDefault == "function")(L))
      switch (B) {
        case "object":
          be = { [g("DEFAULT_NEW_KEY", z)]: $ };
          break;
        case "array":
          be = $ ?? [];
          break;
        case "number": {
          const he = Number($);
          be = isNaN(he) ? 0 : he;
          break;
        }
        default:
          be = $;
      }
    else
      be = L;
    r(be, H).then((he) => {
      he && we({ code: "UPDATE_ERROR", message: he }, be);
    });
  }, Ke = () => {
    N(null), Z === null ? (W(t), Q(null)) : r(Z, H);
  }, { isEditingKey: Fe, canEditKey: Te } = Ye, He = !$e && re, ot = $e && xe.length > 1, te = (B !== "invalid" || ke) && !re && Pt, X = f && !We, se = ke && ($e && Ot || !$e && bt), le = { value: $, parentData: n, setValue: de, isEditing: $e, canEdit: Se, setIsEditing: Se ? () => N(H) : () => {
  }, handleEdit: rt, handleCancel: Ke, path: H, stringTruncate: p, showStringQuotes: h, nodeData: z, enumType: nt, translate: g, handleKeyboard: S, keyboardCommon: { cancel: Ke, tabForward: () => {
    V("next"), P(J);
    const L = nn(z.fullData, H, "next", b);
    L && (rt(), N(L));
  }, tabBack: () => {
    V("prev"), P(J);
    const L = nn(z.fullData, H, "prev", b);
    L && (rt(), N(L));
  } } }, ie = { canEditKey: Te, isEditingKey: Fe, pathString: J, path: H, name: K, handleKeyboard: S, handleEditKey: Le, handleCancel: Ke, styles: C("property", z), getNextOrPrevious: (L) => nn(z.fullData, H, L, b) }, fe = se ? y(ke, Object.assign({}, e, { value: $, customNodeProps: Oe, setValue: de, handleEdit: rt, handleCancel: Ke, handleKeyPress: (L) => S(L, { stringConfirm: rt, cancel: Ke }), isEditing: $e, setIsEditing: () => N(H), getStyles: C, originalNode: Et ? ml(t, le) : void 0, originalNodeKey: Et ? y(eo, Object.assign({}, ie)) : void 0, canEdit: Se, keyboardCommon: le.keyboardCommon, onError: we })) : ml(t, le);
  return k("div", Object.assign({ className: "jer-component jer-value-component", style: { marginLeft: m / 2 + "em", position: "relative" }, draggable: Ie }, Ne, Ue("above"), { children: [Ce, y(I, { position: "above", nodeData: z }), k("div", { className: "jer-value-main-row", style: { flexWrap: K.length > 10 ? "wrap" : "nowrap" }, children: [X && y(eo, Object.assign({}, ie)), k("div", { className: "jer-value-and-buttons", children: [y("div", { className: "jer-input-component", children: fe }), $e ? y(Ss, { onOk: rt, onCancel: Ke, nodeData: z, editConfirmRef: E }) : te && y(ju, { startEdit: Se ? () => {
    Q(Z), N(H, Ke);
  } : void 0, handleDelete: oe ? () => {
    o($, H).then((L) => {
      L && we({ code: "DELETE_ERROR", message: L }, $);
    });
  } : void 0, enableClipboard: a, translate: g, customButtons: e.customButtons, nodeData: z, handleKeyboard: S, keyboardControls: v, editConfirmRef: E, jsonStringify: x }), ot && k("div", { className: "jer-select jer-select-types", children: [y("select", { name: `${K}-type-select`, className: "jer-select-inner", onChange: (L) => ((be) => {
    const he = _.find((je) => je.name === be);
    if (he)
      return r(he.defaultValue, H), ee(be), xt(null), N(null), void G({ path: H, collapsed: !1, includeChildren: !1 });
    const ue = xe.find((je) => je instanceof Object && je.enum === be);
    if (ue)
      return typeof $ == "string" && ue.values.includes($) || r(ue.values[0], H).then((je) => {
        je && (we({ code: "UPDATE_ERROR", message: je }, Ae), N(null));
      }), void xt(ue);
    const Ae = $_($, be, g("DEFAULT_NEW_KEY", z), pe != null && pe.CustomNode ? g("DEFAULT_STRING", z) : void 0);
    r(Ae, H).then((je) => {
      je ? (we({ code: "UPDATE_ERROR", message: je }, Ae), N(null)) : xt(null);
    });
  })(L.target.value), value: nt ? nt.enum : B, children: xe.map((L) => L instanceof Object && "enum" in L ? y("option", { value: L.enum, children: L.enum }, L.enum) : y("option", { value: L, children: L }, L)) }), y("span", { className: "focus" })] }), He && y("span", { className: "jer-error-slug", style: C("error", z), children: re })] })] }), y(I, { position: "below", nodeData: z })] }));
}, Ti = (e, t) => t != null && t.CustomNode && (t != null && t.name) && t.showInTypesSelector ? t.name : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : e === null ? "null" : "invalid", ml = (e, t) => {
  const n = Ti(e), { value: r } = t;
  switch (n) {
    case "string":
      return y(S_, Object.assign({}, t, { value: r }));
    case "number":
      return y(O_, Object.assign({}, t, { value: r }));
    case "boolean":
      return y(x_, Object.assign({}, t, { value: r }));
    case "null":
      return y(C_, Object.assign({}, t));
    default:
      return y(A_, Object.assign({}, t));
  }
}, $_ = (e, t, n, r) => {
  switch (t) {
    case "string":
      return r ?? String(e);
    case "number": {
      const o = Number(e);
      return isNaN(o) ? 0 : o;
    }
    case "boolean":
      return !!e;
    case "null":
      return null;
    case "object":
      return { [n]: e };
    case "array":
      return [e];
    default:
      return String(e);
  }
}, Gu = (e) => {
  const { getStyles: t } = Tt(), { collapseState: n, setCollapseState: r, getMatchingCollapseState: o, currentlyEditingElement: i, setCurrentlyEditingElement: s, areChildrenBeingEdited: a, previousValue: l, setPreviousValue: c } = ln(), { mainContainerRef: d, data: u, nodeData: f, parentData: p, showCollectionCount: h, onEdit: m, onAdd: g, onDelete: _, canDragOnto: S, collapseFilter: v, collapseAnimationTime: b, onMove: E, enableClipboard: x, searchFilter: C, searchText: N, indent: G, sort: T, showArrayIndices: P, defaultValue: j, newKeyOptions: V, translate: Z, customNodeDefinitions: Q, jsonParse: $, jsonStringify: W, TextEditor: J, keyboardControls: z, handleKeyboard: H, insertAtTop: K, onCollapse: Se, editConfirmRef: oe, collapseClickZones: Ie } = e, [re, we] = O.useState(W(u)), Le = v(f), { contentRef: Ye, isAnimating: Ne, maxHeight: Ue, collapsed: Ce, animateCollapse: I, cssTransitionValue: pe } = ((M, ne, Ee, _e, qe) => {
    const [Ut, Pe] = O.useState(Ee ? 0 : void 0), [Wt, xr] = O.useState(Ee), ho = O.useRef(!1), mo = O.useRef(null), Os = O.useRef(0), xs = O.useRef(0), zu = ne / 1e3 + "s", Uu = O.useCallback((go) => {
      var vo, yo;
      if (Wt !== go) {
        switch (window.clearTimeout(xs.current), ho.current = !0, go) {
          case !0: {
            const Ns = (yo = (vo = mo.current) === null || vo === void 0 ? void 0 : vo.offsetHeight) !== null && yo !== void 0 ? yo : 0;
            Os.current = Ns, Pe(Ns), setTimeout(() => {
              Pe(0);
            }, 5);
            break;
          }
          case !1:
            Pe(Os.current || V_(M, mo, _e, qe));
        }
        xr(!Wt), xs.current = window.setTimeout(() => {
          ho.current = !1, go || Pe(void 0);
        }, ne);
      }
    }, [ne, Wt, M, _e, qe]);
    return { contentRef: mo, isAnimating: ho.current, animateCollapse: Uu, maxHeight: Ut, collapsed: Wt, cssTransitionValue: zu };
  })(u, b, Le, d, W), { pathString: B, nodeData: ee, path: de, name: ke, size: Oe, canEdit: We, canDelete: Pt, canAdd: Ot, canDrag: bt, error: Et, setError: at, onError: xe, handleEditKey: nt, derivedValues: xt } = Vu({ props: e, collapsed: Ce }), { dragSourceProps: $e, getDropTargetProps: It, BottomDropTarget: rt, DropTargetPadding: Ke } = $u({ canDrag: bt, canDragOnto: S, path: de, nodeData: ee, onMove: E, onError: xe, translate: Z }), Fe = O.useRef(!Le), { isEditing: Te, isEditingKey: He, isArray: ot, canEditKey: te } = xt;
  O.useEffect(() => {
    we(W(u));
  }, [u, W]), O.useEffect(() => {
    const M = v(ee) && !Te;
    Fe.current = !M, I(M);
  }, [v]), O.useEffect(() => {
    if (n !== null) {
      const M = o(de);
      M && (Fe.current = !0, I(M.collapsed));
    }
  }, [n]);
  const X = O.useRef(null), se = O.useCallback((M, ne) => {
    if (typeof j != "function")
      return j;
    const Ee = j(M, ne);
    return Ee !== void 0 ? Ee : null;
  }, [j]), le = O.useCallback((M) => V ? typeof V != "function" ? V : V(M) : null, [V]), { CustomNode: ie, customNodeProps: fe, CustomWrapper: L, wrapperProps: be = {}, hideKey: he, showEditTools: ue = !0, showOnEdit: Ae, showOnView: je, showCollectionWrapper: ft = !0 } = O.useMemo(() => Bu(Q, ee), [ee, Q]), pt = a(B);
  if (pt && Ce && I(!1), !(Pu("collection", ee, C, N) || ee.level === 0) && !pt)
    return null;
  const Rt = Array.isArray(u) ? "array" : "object", dn = Rt === "array" ? { open: "[", close: "]" } : { open: "{", close: "}" }, wr = (M) => {
    if (M.key !== "Tab" || M.getModifierState("Shift"))
      H(M, { objectConfirm: Mt, cancel: Vt });
    else {
      M.preventDefault();
      const ne = Ru(X, "	");
      we(ne);
    }
  }, Xe = (M) => {
    M.stopPropagation();
    const ne = _s(M);
    if (ne && z.collapseModifier.includes(ne))
      return Fe.current = !0, void r({ collapsed: !Ce, path: de, includeChildren: !0 });
    i && i.includes(B) || (Fe.current = !0, r(null), Se && Se({ path: de, collapsed: !Ce, includeChildren: !1 }), I(!Ce));
  }, Mt = () => {
    try {
      const M = $(re);
      if (s(null), c(null), at(null), W(M) === W(u))
        return;
      m(M, de).then((ne) => {
        ne && xe({ code: "UPDATE_ERROR", message: ne }, M);
      });
    } catch {
      xe({ code: "INVALID_JSON", message: Z("ERROR_INVALID_JSON", ee) }, re);
    }
  }, _r = de.length > 0 ? () => {
    _(u, de).then((M) => {
      M && xe({ code: "DELETE_ERROR", message: M }, u);
    });
  } : void 0, Vt = () => {
    s(null), l === null ? (at(null), we(W(u)), c(null)) : m(l, de);
  }, fn = h === "when-closed" ? Ce : h, Dr = !Te && ue, wt = (P || !ot) && !he && ke !== void 0, Sr = ie && (Te && Ae || !Te && je), pn = Object.entries(u).map(([M, ne]) => [Rt === "array" ? Number(M) : M, ne]);
  Rt === "object" && T(pn, (M) => M);
  const In = Fe.current ? Te ? k("div", { className: "jer-collection-text-edit", children: [J ? y(J, { value: re, onChange: we, onKeyDown: (M) => H(M, { objectConfirm: Mt, cancel: Vt }) }) : y(Tu, { textAreaRef: X, className: "jer-collection-text-area", name: B, value: re, setValue: we, handleKeyPress: wr, styles: t("input", ee) }), y("div", { className: "jer-collection-input-button-row", children: y(Ss, { onOk: Mt, onCancel: Vt, nodeData: ee, editConfirmRef: oe }) })] }) : pn.map(([M, ne], Ee) => {
    const _e = { key: M, value: ne, path: [...de, M], level: de.length + 1, index: Ee, size: Nn(ne) ? Object.keys(ne).length : null, parentData: u, fullData: ee.fullData };
    return y("div", { className: "jer-collection-element", style: t("collectionElement", _e), children: Nn(ne) ? y(Gu, Object.assign({}, e, { data: ne, parentData: u, nodeData: _e, showCollectionCount: h, canDragOnto: We }), M) : y(Fu, Object.assign({}, e, { data: ne, parentData: u, nodeData: _e, canDragOnto: We, showLabel: Rt === "object" || P }), M) }, M);
  }) : null, hn = !!ft && Ce && !pt;
  hn || (Fe.current = !0);
  const Or = Object.assign(Object.assign({}, e), { data: u, value: u, parentData: p, nodeData: ee, setValue: (M) => vn(void 0, void 0, void 0, function* () {
    return yield m(M, de);
  }), handleEdit: Mt, handleCancel: Vt, handleKeyPress: wr, isEditing: Te, setIsEditing: () => s(de), getStyles: t, canDragOnto: We, canEdit: We, keyboardCommon: {}, onError: xe }), q = Sr ? y(ie, Object.assign({ customNodeProps: fe }, Or, { children: In })) : In, D = Dr && y(ju, { startEdit: We ? () => {
    Fe.current = !0, c(null), s(de);
  } : void 0, handleAdd: Ot ? (M) => {
    I(!1);
    const ne = se(ee, M);
    if (Rt === "array") {
      const Ee = K.array ? 0 : u.length, _e = K.array ? { insert: !0 } : {};
      g(ne, [...de, Ee], _e).then((qe) => {
        qe && xe({ code: "ADD_ERROR", message: qe }, ne);
      });
    } else if (M in u)
      xe({ code: "KEY_EXISTS", message: Z("ERROR_KEY_EXISTS", ee) }, M);
    else {
      const Ee = K.object ? { insertBefore: 0 } : {};
      g(ne, [...de, M], Ee).then((_e) => {
        _e && xe({ code: "ADD_ERROR", message: _e }, ne);
      });
    }
  } : void 0, handleDelete: Pt ? _r : void 0, enableClipboard: x, type: Rt, nodeData: ee, translate: Z, customButtons: e.customButtons, keyboardControls: z, handleKeyboard: H, getNewKeyOptions: le, editConfirmRef: oe, jsonStringify: W }), A = { canEditKey: te, isEditingKey: He, pathString: B, path: de, name: ke, handleKeyboard: H, handleEditKey: nt, handleCancel: Vt, keyValueArray: pn, styles: t("property", ee), getNextOrPrevious: (M) => nn(ee.fullData, de, M, T), handleClick: Ie.includes("property") ? Xe : (M) => M.stopPropagation() }, U = k("div", Object.assign({ className: "jer-component jer-collection-component", style: Object.assign(Object.assign({ marginLeft: (de.length === 0 ? 0 : G / 2) + "em" }, t("collection", ee)), { position: "relative" }), draggable: bt }, $e, It("above"), { children: [y("div", { className: "jer-clickzone", style: { width: G / 2 + 1 + "em", zIndex: 10 + 2 * ee.level }, onClick: Ie.includes("left") ? Xe : void 0 }), !Te && rt, y(Ke, { position: "above", nodeData: ee }), ft ? k("div", { className: "jer-collection-header-row", style: { position: "relative" }, onClick: Ie.includes("header") ? Xe : void 0, children: [k("div", { className: "jer-collection-name", children: [y("div", { className: "jer-collapse-icon jer-accordion-icon" + (Ce ? " jer-rotate-90" : ""), style: { zIndex: 11 + 2 * ee.level, transition: pe }, onClick: Xe, children: y(rn, { name: "chevron", rotate: Ce, nodeData: ee }) }), wt && y(eo, Object.assign({}, A)), !Te && y("span", { className: "jer-brackets jer-bracket-open", style: t("bracket", ee), children: dn.open })] }), !Te && fn && y("div", { className: "jer-collection-item-count" + (fn ? " jer-visible" : " jer-hidden"), style: Object.assign(Object.assign({}, t("itemCount", ee)), { transition: pe }), children: Oe === 1 ? Z("ITEM_SINGLE", Object.assign(Object.assign({}, ee), { size: 1 }), 1) : Z("ITEMS_MULTIPLE", ee, Oe) }), y("div", { className: "jer-brackets" + (hn ? " jer-visible" : " jer-hidden"), style: Object.assign(Object.assign({}, t("bracket", ee)), { transition: pe }), children: dn.close }), D] }) : he ? y(mt, {}) : k("div", { className: "jer-collection-header-row", style: { position: "relative" }, children: [y(eo, Object.assign({}, A)), D] }), k("div", { className: "jer-collection-inner", style: Object.assign(Object.assign({ overflowY: hn || Ne ? "clip" : "visible", maxHeight: pt ? void 0 : Ue }, t("collectionInner", ee)), { transition: pe }), ref: Ye, children: [q, y("div", { className: Te ? "jer-collection-error-row" : "jer-collection-error-row-edit", children: Et && y("span", { className: "jer-error-slug", style: t("error", ee), children: Et }) }), !Te && ft && y("div", { className: "jer-brackets jer-bracket-outside", style: Object.assign(Object.assign({}, t("bracket", ee)), { marginLeft: (G < 3 ? -1 : G < 6 ? -0.5 : 0) + "em" }), children: dn.close })] }), y(Ke, { position: "below", nodeData: ee })] }));
  return L ? y(L, Object.assign({ customNodeProps: be }, Or, { children: U })) : U;
}, F_ = { ITEM_SINGLE: "{{count}} item", ITEMS_MULTIPLE: "{{count}} items", KEY_NEW: "Enter new key", KEY_SELECT: "Select key", NO_KEY_OPTIONS: "No key options", ERROR_KEY_EXISTS: "Key already exists", ERROR_INVALID_JSON: "Invalid JSON", ERROR_UPDATE: "Update unsuccessful", ERROR_DELETE: "Delete unsuccessful", ERROR_ADD: "Adding node unsuccessful", DEFAULT_STRING: "New data!", DEFAULT_NEW_KEY: "key", SHOW_LESS: "(Show less)" }, G_ = (e, t) => (n, r, o) => ((i, s, a, l, c) => {
  if (s[l]) {
    const u = s[l](a);
    if (u !== null)
      return u;
  }
  const d = l in i ? i[l] : F_[l];
  return c === void 0 ? d : d == null ? void 0 : d.replace("{{count}}", String(c));
})(e, t, r, n, o);
var gl = [], zn = [];
(function(e, t) {
  if (e && typeof document < "u") {
    var n, r = t.prepend === !0 ? "prepend" : "append", o = t.singleTag === !0, i = typeof t.container == "string" ? document.querySelector(t.container) : document.getElementsByTagName("head")[0];
    if (o) {
      var s = gl.indexOf(i);
      s === -1 && (s = gl.push(i) - 1, zn[s] = {}), n = zn[s] && zn[s][r] ? zn[s][r] : zn[s][r] = a();
    } else
      n = a();
    e.charCodeAt(0) === 65279 && (e = e.substring(1)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(document.createTextNode(e));
  }
  function a() {
    var l = document.createElement("style");
    if (l.setAttribute("type", "text/css"), t.attributes)
      for (var c = Object.keys(t.attributes), d = 0; d < c.length; d++)
        l.setAttribute(c[d], t.attributes[c[d]]);
    var u = r === "prepend" ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(u, l), l;
  }
})(':root{--jer-select-border:#b6b6b6;--jer-select-focus:#777;--jer-select-arrow:#777;--jer-form-border:1px solid #ededf0;--jer-form-border-focus:1px solid #e2e2e2;--jer-highlight-color:#b3d8ff}.jer-visible{opacity:1}.jer-hidden{opacity:0}.jer-select select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;color:#000;cursor:inherit;font-family:inherit;font-size:.8em;line-height:inherit;margin:0;outline:none;padding:0 1em 0 0;z-index:1}select::-ms-expand{display:none}.jer-select{align-items:center;background-color:#fff;background-image:linear-gradient(0deg,#f9f9f9,#fff 33%);border:1px solid var(--jer-select-border);border-radius:.25em;cursor:pointer;display:grid;grid-template-areas:"select";line-height:1.1;max-width:15ch;min-width:12ch;padding:.25em .5em;position:relative}.jer-select select,.jer-select:after{grid-area:select}.jer-select:not(.jer-select--multiple):after{background-color:var(--jer-select-arrow);clip-path:polygon(100% 0,0 0,50% 100%);content:"";height:.5em;justify-self:end;width:.8em}select:focus+.focus{border:1px solid var(--jer-select-focus);border-radius:inherit;bottom:-1px;left:-1px;position:absolute;right:-1px;top:-1px}.jer-select-inner{text-overflow:ellipsis;width:100%}.jer-editor-container{border-radius:.5em;font-size:16px;line-height:1;padding:1em 1em 1em 2em;position:relative;text-align:left}.jer-editor-container textarea{border:var(--jer-form-border);border-radius:.3em;color:var(--jer-input-color);outline:none}.jer-editor-container textarea:focus{border:var(--jer-form-border-focus)}.jer-editor-container input{border:var(--jer-form-border);border-radius:.3em;font-family:inherit;outline:none}.jer-editor-container input:focus{border:var(--jer-form-border-focus)}.jer-editor-container ::selection{background-color:var(--jer-highlight-color)}.jer-collection-header-row,.jer-value-main-row{align-items:center;display:flex;gap:.3em;min-height:1.7em}.jer-collection-header-row{display:flex;flex-wrap:wrap}.jer-collapse-icon{left:-1.2em;position:absolute;top:.35em}.jer-collection-inner{position:relative}.jer-collection-text-edit{align-items:flex-start;display:flex;flex-direction:column;gap:.3em;line-height:1.1em}.jer-collection-text-area{font-family:inherit;font-size:.85em;max-height:40em;overflow:hidden;padding:.2em .5em 0;resize:both}.jer-collection-input-button-row{display:flex;font-size:150%;justify-content:flex-end;margin-top:.4em;width:100%}.jer-collection-error-row{bottom:.5em;position:absolute}.jer-error-slug{margin-left:1em}.jer-value-component{position:relative}.jer-value-main-row{display:flex;gap:0}.jer-value-and-buttons{align-items:center;display:flex;justify-content:flex-start;padding-left:.5em}.jer-value-error-row{position:absolute}.jer-value-string{line-height:1.3em;overflow-wrap:anywhere;white-space:pre-wrap;word-break:break-word}.jer-string-expansion{cursor:pointer;filter:saturate(50%);opacity:.6}.jer-show-less{font-size:80%}.jer-hyperlink{text-decoration:underline}.jer-input-text{font-family:inherit;font-size:.9em;height:1.4em;line-height:1.2em;margin:0;min-width:6em;overflow:hidden;padding:.25em .5em .2em;resize:none}.jer-input-boolean{margin-left:.3em;margin-right:.3em;transform:scale(1.5)}.jer-key-text{line-height:1.1em;white-space:pre-wrap;word-break:break-word}.jer-key-edit{font-size:inherit;font-size:.9em;padding:0 .3em}.jer-value-invalid{font-style:italic;opacity:.5}.jer-input-number{font-size:90%;min-width:3em}.jer-confirm-buttons,.jer-edit-buttons{align-items:center;cursor:pointer;display:flex;height:1em}.jer-input-buttons{gap:.4em}.jer-edit-buttons{gap:.4em;margin-left:.5em;opacity:0}.jer-confirm-buttons{gap:.2em;margin-left:.4em}.jer-edit-buttons:hover{opacity:1;position:relative}.jer-collection-header-row:hover>.jer-edit-buttons,.jer-value-and-buttons:hover>.jer-edit-buttons,.jer-value-main-row:hover>.jer-edit-buttons{opacity:1}.jer-copy-pulse{position:relative;transition:.3s}.jer-copy-pulse:hover{opacity:.85;transform:scale(1.2);transition:.3s}.jer-copy-pulse:after{border-radius:50%;box-shadow:0 0 15px 5px var(--jer-icon-copy-color);content:"";display:block;height:100%;left:0;opacity:0;position:absolute;top:0;transition:all .5s;width:100%}.jer-copy-pulse:active:after{border-radius:4em;box-shadow:0 0 0 0 var(--jer-icon-copy-color);left:0;opacity:1;position:absolute;top:0;transition:0s}.jer-copy-pulse:active{top:.07em}.jer-rotate-90{transform:rotate(-90deg)}.jer-icon:hover{opacity:.85;transform:scale(1.2);transition:.3s}.jer-empty-string:after{content:"<empty string>";font-size:90%;font-style:italic}.jer-drag-n-drop-padding{border:1px dashed #e0e0e0;border-radius:.3em;height:.5em}.jer-clickzone{height:calc(100% - .8em);left:-1em;position:absolute;top:1.2em}', {});
const z_ = ({ data: e, setData: t, rootName: n = "root", onUpdate: r = () => {
}, onEdit: o = r, onDelete: i = r, onAdd: s = r, onChange: a, onError: l, showErrorMessages: c = !0, enableClipboard: d = !0, indent: u = 2, collapse: f = !1, collapseAnimationTime: p = 300, showCollectionCount: h = !0, restrictEdit: m = !1, restrictDelete: g = !1, restrictAdd: _ = !1, restrictTypeSelection: S = !1, restrictDrag: v = !0, viewOnly: b, searchFilter: E, searchText: x, searchDebounceTime: C = 350, keySort: N = !1, showArrayIndices: G = !0, showStringQuotes: T = !0, defaultValue: P = null, newKeyOptions: j, minWidth: V = 250, maxWidth: Z = "min(600px, 90vw)", rootFontSize: Q, stringTruncate: $ = 250, translations: W = {}, className: J, id: z, customText: H = {}, customNodeDefinitions: K = [], customButtons: Se = [], jsonParse: oe = JSON.parse, jsonStringify: Ie = (I, pe) => JSON.stringify(I, pe, 2), TextEditor: re, errorMessageTimeout: we = 2500, keyboardControls: Le = {}, externalTriggers: Ye, insertAtTop: Ne = !1, onCollapse: Ue, collapseClickZones: Ce = ["header", "left"] }) => {
  const { getStyles: I } = Tt(), { setCurrentlyEditingElement: pe } = ln(), B = O.useMemo(() => Wn(f), [f]), ee = O.useMemo(() => G_(W, H), [W, H]), [de, ke] = O.useState(x), [Oe, We] = (({ setData: te, data: X }) => {
    const [se, le] = O.useState(te ? void 0 : X), ie = O.useCallback((fe) => {
      te ? te(fe) : le(fe);
    }, [te]);
    return O.useEffect(() => {
      te || le(X);
    }, [X]), [te ? X : se, ie];
  })({ setData: t, data: e }), Pt = O.useRef(null);
  O.useEffect(() => {
    pe(null);
    const te = setTimeout(() => ke(x), C);
    return () => clearTimeout(te);
  }, [x, C]);
  const Ot = { key: n, path: [], level: 0, index: 0, value: Oe, size: typeof Oe == "object" && Oe !== null ? Object.keys(Oe).length : 1, parentData: null, fullData: Oe }, bt = (te, X) => vn(void 0, void 0, void 0, function* () {
    const se = yield te(X);
    if (se === !0 || se === void 0)
      return void We(X.newData);
    const le = H_(se) ? se : ["error", se], [ie, fe] = le;
    if (ie === "error")
      return We(X.currentData), fe === !1 ? ee("ERROR_UPDATE", Ot) : String(fe);
    We(fe);
  }), Et = O.useMemo(() => Wn(m, b), [m, b]), at = O.useMemo(() => Wn(g, b), [g, b]), xe = O.useMemo(() => Wn(_, b), [_, b]), nt = O.useMemo(() => Wn(v, b), [v, b]), xt = O.useMemo(() => W_(E), [E]), $e = O.useMemo(() => ((te) => {
    const X = Object.assign({}, pl);
    for (const se of Object.keys(pl)) {
      const le = se;
      if (te[le]) {
        const ie = te[le], fe = ["clipboardModifier", "collapseModifier"].includes(se) ? Array.isArray(ie) ? ie : [ie] : typeof ie == "string" ? { key: ie } : ie;
        X[le] = fe, ["stringConfirm", "numberConfirm", "booleanConfirm"].forEach((L) => {
          !te[L] && te.confirm && (X[L] = X.confirm);
        });
      }
    }
    return X;
  })(Le), [Le]), It = O.useCallback((te, X) => ((se, le, ie) => {
    const fe = Object.entries(le);
    for (const [L, be] of fe)
      if (m_(ie, se[L], L)) {
        ie.preventDefault(), be();
        break;
      }
  })($e, X, te), [$e]), rt = O.useMemo(() => {
    const te = vl(K, "stringifyReplacer");
    return (X) => Ie(X, te);
  }, [K, Ie]), Ke = O.useMemo(() => {
    const te = vl(K, "parseReviver");
    return (X) => {
      const se = oe(X, te);
      return Ci(se);
    };
  }, [K, oe]), Fe = O.useRef(null);
  ((te, X) => {
    const { setCurrentlyEditingElement: se, currentlyEditingElement: le, setCollapseState: ie } = ln();
    O.useEffect(() => {
      if (!te)
        return;
      const { collapse: fe, edit: L } = te;
      fe && ie(fe);
      const be = !(L != null && L.path) || un(L.path) === le;
      switch (L == null ? void 0 : L.action) {
        case "accept":
          be && (X.current && X.current.click(), se(null));
          break;
        case "cancel":
          be && se(null);
          break;
        default:
          L != null && L.path && se(L.path);
      }
    }, [te]);
  })(Ye, Fe);
  const Te = O.useCallback((te, X) => {
    N !== !1 && (typeof N != "function" ? te.sort((se, le) => {
      const ie = X(se)[0], fe = X(le)[0];
      return ie < fe ? -1 : ie > fe ? 1 : 0;
    }) : te.sort((se, le) => N(X(se), X(le))));
  }, [N]), He = { mainContainerRef: Pt, name: n, nodeData: Ot, onEdit: (te, X) => vn(void 0, void 0, void 0, function* () {
    const { currentData: se, newData: le, currentValue: ie, newValue: fe } = Un(Oe, X, te, "update");
    if (ie !== fe)
      return yield bt(o, { currentData: se, newData: le, currentValue: ie, newValue: fe, name: X.slice(-1)[0], path: X });
  }), onDelete: (te, X) => vn(void 0, void 0, void 0, function* () {
    const { currentData: se, newData: le, currentValue: ie, newValue: fe } = Un(Oe, X, te, "delete");
    return yield bt(i, { currentData: se, newData: le, currentValue: ie, newValue: fe, name: X.slice(-1)[0], path: X });
  }), onAdd: (te, X, se) => vn(void 0, void 0, void 0, function* () {
    const { currentData: le, newData: ie, currentValue: fe, newValue: L } = Un(Oe, X, te, "add", se);
    return yield bt(s, { currentData: le, newData: ie, currentValue: fe, newValue: L, name: X.slice(-1)[0], path: X });
  }), onChange: a, onError: l, showErrorMessages: c, onMove: (te, X, se) => vn(void 0, void 0, void 0, function* () {
    if (te === null)
      return;
    const { currentData: le, newData: ie, currentValue: fe } = Un(Oe, te, "", "delete"), L = te.slice(-1)[0], be = X.slice(0, -1), he = X.slice(-1)[0];
    let ue = typeof he == "number" ? se === "above" ? he : he + 1 : typeof L == "number" ? `arr_${L}` : L;
    te.slice(0, -1).join(".") === X.slice(0, -1).join(".") && typeof L == "number" && typeof ue == "number" && L < ue && (ue -= 1);
    const Ae = typeof ue == "number" ? { insert: !0 } : se === "above" ? { insertBefore: he } : { insertAfter: he }, { newData: je, newValue: ft } = Un(ie, [...be, ue], fe, "add", Ae);
    return yield bt(o, { currentData: le, newData: je, currentValue: fe, newValue: ft, name: X.slice(-1)[0], path: X });
  }), showCollectionCount: h, collapseFilter: B, collapseAnimationTime: p, restrictEditFilter: Et, restrictDeleteFilter: at, restrictAddFilter: xe, restrictTypeSelection: S, restrictDragFilter: nt, canDragOnto: !1, searchFilter: xt, searchText: de, enableClipboard: d, keySort: N, sort: Te, showArrayIndices: G, showStringQuotes: T, indent: u, defaultValue: P, newKeyOptions: j, stringTruncate: $, translate: ee, customNodeDefinitions: K, customButtons: Se, parentData: null, jsonParse: Ke, jsonStringify: rt, TextEditor: re, errorMessageTimeout: we, handleKeyboard: It, keyboardControls: $e, insertAtTop: { object: Ne === !0 || Ne === "object", array: Ne === !0 || Ne === "array" }, onCollapse: Ue, editConfirmRef: Fe, collapseClickZones: Ce }, ot = Object.assign(Object.assign({}, I("container", Ot)), { minWidth: V, maxWidth: Z });
  return ot.fontSize = Q ?? ot.fontSize, y("div", { id: z, ref: Pt, className: `jer-editor-container ${J ?? ""}`, style: ot, children: Nn(Oe) ? y(Gu, Object.assign({ data: Oe }, He)) : y(Fu, Object.assign({ data: Oe, showLabel: !0 }, He)) });
}, U_ = (e) => {
  var t;
  const [n, r] = O.useState();
  return O.useEffect(() => {
    const o = document.documentElement;
    r(o);
  }, []), n ? y(v_, { theme: (t = e.theme) !== null && t !== void 0 ? t : Ds, icons: e.icons, docRoot: n, children: y(w_, { onEditEvent: e.onEditEvent, onCollapse: e.onCollapse, children: y(z_, Object.assign({}, e)) }) }) : null;
}, Un = (e, t, n, r, o = {}) => {
  if (t.length === 0)
    return { currentData: e, newData: n, currentValue: e, newValue: n };
  const i = Object.assign({ remove: r === "delete" }, o), s = r !== "add" ? xn(e, t) : void 0;
  return { currentData: e, newData: u_(e, t, n, i), currentValue: s, newValue: r !== "delete" ? n : void 0 };
}, Wn = (e, t) => t ? () => !0 : typeof e == "boolean" ? () => e : typeof e == "number" ? ({ level: n }) => n >= e : e, W_ = (e) => {
  if (e !== void 0)
    return e === "value" ? Cn : e === "key" ? fl : e === "all" ? (t, n) => Cn(t, n) || fl(t, n) : e;
}, H_ = (e) => Array.isArray(e) && e.length === 2 && ["error", "value"].includes(e[0]), vl = (e, t) => {
  const n = t === "stringifyReplacer" ? [(r) => r === void 0 ? Mu : r] : [];
  if (n.push(...e.map((r) => r[t]).filter((r) => !!r)), n.length !== 0)
    return (r, o) => {
      let i = o;
      for (const s of n)
        i = s(i);
      return i;
    };
}, q_ = (e, t, n) => {
  const r = Re.cloneDeep(t);
  r.splice(e, 1);
  const o = Object.keys(t).slice(e + 1), i = Re.cloneDeep(n);
  return Object.keys(i).forEach((s) => {
    const a = i[s];
    if (a.type === "dashboardFilters") {
      const l = a.sharedFilterIndexes.filter((c) => c != e).map((c) => o.includes(c.toString()) ? c - 1 : c);
      i[s].sharedFilterIndexes = l;
    }
  }), [r, i];
}, yl = (e) => {
  e.visualizations && Object.keys(e.visualizations).forEach((t) => {
    e.visualizations[t].footnotes && (delete e.visualizations[t].footnotes.data, delete e.visualizations[t].footnotes.formattedData);
  });
}, bl = (e) => {
  e.datasets && Object.keys(e.datasets).forEach((t) => {
    delete e.datasets[t].formattedData, e.datasets[t].dataUrl && delete e.datasets[t].data;
  }), e.visualizations && Object.keys(e.visualizations).forEach((t) => {
    e.visualizations[t] = Re.omit(e.visualizations[t], [
      "runtime",
      "formattedData",
      "data",
      "editing",
      "originalFormattedData"
    ]);
  }), e.rows && e.rows.forEach((t, n) => {
    t.dataKey && (e.rows[n] = Re.omit(t, ["data", "formattedData"]));
  });
}, El = (e) => {
  var t;
  if ((t = e.dashboard) != null && t.sharedFilters) {
    const n = (r, o) => {
      const i = Re.uniq(
        Object.values(o).reduce((s, a) => (a.type === "dashboardFilters" && (s = s.concat(a.sharedFilterIndexes)), s), [])
      );
      for (let s = 0; s < r.length; s++) {
        const a = r[s];
        if (i.includes(s))
          delete e.dashboard.sharedFilters[s].active, a.subGrouping && delete e.dashboard.sharedFilters[s].subGrouping.active, a.type === "urlfilter" && delete e.dashboard.sharedFilters[s].values;
        else {
          const [l, c] = q_(
            s,
            e.dashboard.sharedFilters,
            e.visualizations
          );
          e.dashboard.sharedFilters = l, e.visualizations = c, n(l, c);
          break;
        }
      }
    };
    n(e.dashboard.sharedFilters, e.visualizations);
  }
}, wl = (e) => {
  e.visualizations && Object.keys(e.visualizations).forEach((t) => {
    (e.visualizations[t].filters || []).forEach((r, o) => {
      delete e.visualizations[t].filters[o].active, delete e.visualizations[t].filters[o].values;
    });
  });
}, Y_ = (e) => {
  e.datasets && Object.keys(e.datasets).forEach((t) => {
    delete e.datasets[t].runtimeDataUrl;
  });
}, K_ = (e) => {
  const t = Re.cloneDeep(e);
  return t.type === "dashboard" ? (t.multiDashboards && (t.multiDashboards.forEach((n, r) => {
    bl(t.multiDashboards[r]), El(t.multiDashboards[r]), yl(t.multiDashboards[r]), wl(t.multiDashboards[r]);
  }), delete t.dashboard, delete t.rows, delete t.visualizations, delete t.label), delete t.activeDashboard, bl(t), El(t), yl(t), wl(t), Y_(t)) : (delete t.runtime, delete t.formattedData, t.dataUrl && delete t.data), t;
};
const z0 = ({ loadConfig: e, config: t, convertStateToConfig: n, onExpandCollapse: r = () => {
} }) => {
  const [o, i] = O.useState(!1), [s, a] = O.useState({}), l = (f) => {
    i(f), r();
  }, c = (f) => !!["datasets", "data", "originalFormattedData", "formattedData"].includes(String(f.key)), d = (f) => {
    a(f.newData);
  };
  O.useEffect(() => {
    let f = K_(t);
    t.type !== "dashboard" && (f = n()), a(f);
  }, [t]);
  const u = {
    chart: ["Charts", "https://www.cdc.gov/cove/index.html", /* @__PURE__ */ y(Ps, {})],
    dashboard: ["Dashboard", "https://www.cdc.gov/cove/index.html", /* @__PURE__ */ y(Ps, {})],
    map: ["Maps", "https://www.cdc.gov/cove/index.html", /* @__PURE__ */ y(c_, {})],
    "markup-include": ["Markup Include", "https://www.cdc.gov/cove/index.html", /* @__PURE__ */ y(Zu, {})]
  };
  return t.type ? /* @__PURE__ */ k(mt, { children: [
    /* @__PURE__ */ k(
      "a",
      {
        href: u[t.type][1],
        target: "_blank",
        rel: "noopener noreferrer",
        className: "guidance-link",
        style: { cursor: "pointer !important" },
        children: [
          u[t.type][2],
          /* @__PURE__ */ k("div", { children: [
            /* @__PURE__ */ k("span", { className: "heading-3", children: [
              "Get Help with ",
              u[t.type][0]
            ] }),
            /* @__PURE__ */ y("p", { children: "Examples and documentation" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ k("div", { className: "advanced", children: [
      /* @__PURE__ */ k("span", { className: "advanced-toggle-link", onClick: () => l(!o), children: [
        /* @__PURE__ */ y("span", { children: o ? "— " : "+ " }),
        "Advanced Options"
      ] }),
      o && /* @__PURE__ */ k(R.Fragment, { children: [
        /* @__PURE__ */ y("section", { className: "error-box py-2 px-3 my-2", children: /* @__PURE__ */ k("div", { children: [
          /* @__PURE__ */ y("strong", { className: "pt-1", children: "Warning" }),
          /* @__PURE__ */ y("p", { children: "This can cause serious errors in your visualization." })
        ] }) }),
        /* @__PURE__ */ k("p", { className: "pb-2", children: [
          "This tool displays the actual ",
          /* @__PURE__ */ y("acronym", { title: "JavaScript Object Notation", children: "JSON" }),
          " configuration that is generated by this editor and allows you to edit properties directly and apply them."
        ] }),
        /* @__PURE__ */ y(
          U_,
          {
            className: "advanced-json-editor",
            data: s,
            onUpdate: d,
            rootName: "",
            collapse: c
          }
        ),
        /* @__PURE__ */ y(
          "button",
          {
            className: "btn btn-success m-2 p-2",
            onClick: () => {
              e(s), l(!o);
            },
            children: "Apply Configuration Changes"
          }
        )
      ] })
    ] })
  ] }) : /* @__PURE__ */ y(mt, {});
}, X_ = ({ fieldName: e, fieldKey: t, fieldType: n, controls: r, deleteField: o, children: i }) => {
  const [s, a] = r, l = s[t], c = (d, u) => {
    a({ ...s, [d]: u });
  };
  return l ? /* @__PURE__ */ k("fieldset", { className: "edit-block mb-1", children: [
    /* @__PURE__ */ k("div", { className: "d-flex justify-content-between", children: [
      /* @__PURE__ */ y("button", { className: "btn btn-light", onClick: () => c(t, !1), children: /* @__PURE__ */ y(Xn, { display: "caretUp" }) }),
      /* @__PURE__ */ y(
        "button",
        {
          className: "btn btn-danger btn-sm",
          onClick: (d) => {
            d.preventDefault(), o();
          },
          children: "Remove"
        }
      )
    ] }),
    i
  ] }, t) : /* @__PURE__ */ k("div", { className: "mb-1", children: [
    /* @__PURE__ */ y("button", { className: "btn btn-light", onClick: () => c(t, !0), children: /* @__PURE__ */ y(Xn, { display: "caretDown" }) }),
    /* @__PURE__ */ k("span", { children: [
      " ",
      e ? `${e}` : "New " + n
    ] })
  ] });
}, Pi = [
  {
    label: "Ascending Alphanumeric",
    value: "asc"
  },
  {
    label: "Descending Alphanumeric",
    value: "desc"
  },
  {
    label: "Custom",
    value: "cust"
  },
  { label: "Order By Data Column", value: "column" }
], Ii = ({ orderedValues: e, handleFilterOrder: t }) => /* @__PURE__ */ y(uw, { onDragEnd: ({ source: n, destination: r }) => t(n == null ? void 0 : n.index, r == null ? void 0 : r.index), children: /* @__PURE__ */ y(l_, { droppableId: "filter_order", children: (n) => /* @__PURE__ */ k("ul", { ...n.droppableProps, className: "sort-list", ref: n.innerRef, style: { marginTop: "1em" }, children: [
  e == null ? void 0 : e.map((r, o) => /* @__PURE__ */ y(Rw, { draggableId: `draggableFilter-${r}`, index: o, children: (i, s) => /* @__PURE__ */ y("li", { children: /* @__PURE__ */ y(
    "div",
    {
      className: s.isDragging ? "currently-dragging" : "",
      style: i.draggableProps.style,
      ref: i.innerRef,
      ...i.draggableProps,
      ...i.dragHandleProps,
      children: r
    }
  ) }) }, r)),
  n.placeholder
] }) }) }), Z_ = ({
  config: e,
  dataColumns: t,
  handleGroupingCustomOrder: n,
  handleNameChange: r,
  filterIndex: o,
  rawData: i,
  updateField: s
}) => {
  const a = e.filters[o], l = a == null ? void 0 : a.subGrouping, c = [];
  e.filters.forEach((v, b) => {
    o !== b && (c.push(v.columnName), l != null && l.columnName && c.push(l.columnName));
  });
  const d = (v, b) => {
    s("filters", o, v, b);
  }, u = (v) => {
    const b = {
      values: Re.cloneDeep(a.values),
      order: v
    }, E = qo(b).values, x = Re.cloneDeep(e.filters);
    x[o] = { ...a, values: E, order: v }, v === "cust" ? x[o].orderedValues = E : delete x[o].orderedValues, s(null, null, "filters", x);
  }, f = (v) => {
    s("filters", o, "subGrouping", v);
  }, p = (v) => {
    var C;
    const E = ((C = a.orderedValues) != null && C.length ? a.orderedValues : a.values).reduce((N, G) => {
      const T = Re.uniq(
        i.map((P) => P[a.columnName] === G ? P[v] : "").filter((P) => P !== "")
      ).sort();
      return N[G] = {
        values: T
        // add temp values when column changes
      }, N;
    }, {}), x = {
      ...l,
      columnName: v,
      valuesLookup: E
    };
    f(x);
  }, h = (v) => {
    const b = Object.keys(l.valuesLookup).reduce((x, C) => {
      const N = l.valuesLookup[C], { values: G } = qo({ values: N.values, order: v });
      return x[C] = {
        values: G
      }, v === "cust" ? x[C].orderedValues = G : delete x[C].orderedValues, x;
    }, {}), E = { ...l, order: v, valuesLookup: b };
    f(E);
  }, m = (v, b, E, x) => {
    const C = Re.cloneDeep(E), [N] = C.splice(v, 1);
    C.splice(b, 0, N);
    const G = Re.cloneDeep(l);
    G.valuesLookup[x].values = C, G.valuesLookup[x].orderedValues = C, f({ ...G, order: "cust" });
  }, g = t.filter((v) => !c.includes(v)), _ = O.useMemo(() => {
    var b;
    const v = e.filters[o];
    return !!(v.setByQueryParameter && ((b = v.subGrouping) != null && b.setByQueryParameter));
  }, [e, o]), S = (v) => {
    const b = e.filters, { checked: E } = v.target, x = E ? a.columnName : "", C = E ? l.columnName : "";
    b[o] = {
      ...e.filters[o],
      setByQueryParameter: x,
      subGrouping: { ...l, setByQueryParameter: C }
    }, s(null, null, "filters", b);
  };
  return /* @__PURE__ */ k("div", { className: "nesteddropdown-editor", children: [
    /* @__PURE__ */ k("label", { children: [
      /* @__PURE__ */ y("span", { className: "edit-label column-heading mt-2", children: "Label" }),
      /* @__PURE__ */ y(
        "input",
        {
          type: "text",
          value: a.label,
          onChange: (v) => {
            d("label", v.target.value);
          }
        }
      )
    ] }),
    /* @__PURE__ */ k("label", { children: [
      /* @__PURE__ */ k("div", { className: "edit-label column-heading mt-2", children: [
        "Filter Grouping",
        /* @__PURE__ */ y("span", {})
      ] }),
      /* @__PURE__ */ k("select", { value: a.columnName, onChange: (v) => r(v.target.value), children: [
        /* @__PURE__ */ y("option", { value: "", children: "- Select Option -" }),
        g.map((v, b) => /* @__PURE__ */ y("option", { value: v, children: v }, b))
      ] })
    ] }),
    /* @__PURE__ */ k("label", { children: [
      /* @__PURE__ */ k("div", { className: "edit-label column-heading mt-2", children: [
        "Filter SubGrouping",
        /* @__PURE__ */ y("span", {})
      ] }),
      /* @__PURE__ */ k(
        "select",
        {
          value: (l == null ? void 0 : l.columnName) ?? "",
          onChange: (v) => {
            p(v.target.value);
          },
          children: [
            /* @__PURE__ */ y("option", { value: "", children: "- Select Option -" }),
            g.map((v, b) => {
              if (v !== a.columnName)
                return /* @__PURE__ */ y("option", { value: v, children: v }, b);
            })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ k("label", { children: [
      /* @__PURE__ */ y(
        "input",
        {
          type: "checkbox",
          checked: _,
          "aria-label": "Create query parameters",
          disabled: !a.columnName || !(l != null && l.columnName),
          onChange: (v) => S(v)
        }
      ),
      /* @__PURE__ */ y("span", { children: " Create query parameters" }),
      _ && /* @__PURE__ */ k(mt, { children: [
        /* @__PURE__ */ y("span", { className: "edit-label column-heading mt-2", children: "Grouping: Default Value Set By Query String Parameter" }),
        /* @__PURE__ */ y(
          "input",
          {
            type: "text",
            value: a.setByQueryParameter,
            onChange: (v) => {
              d("setByQueryParameter", v.target.value);
            }
          }
        ),
        /* @__PURE__ */ y("span", { className: "edit-label column-heading mt-2", children: "SubGrouping: Default Value Set By Query String Parameter" }),
        /* @__PURE__ */ y(
          "input",
          {
            type: "text",
            value: l == null ? void 0 : l.setByQueryParameter,
            onChange: (v) => {
              const b = v.target.value;
              f({ ...l, setByQueryParameter: b });
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ k("label", { className: "mt-2", children: [
      /* @__PURE__ */ k("div", { className: "edit-label column-heading float-right", children: [
        a.columnName,
        " "
      ] }),
      /* @__PURE__ */ y("span", { className: "edit-filterOrder column-heading ", children: "Group Order" }),
      /* @__PURE__ */ y("select", { value: a.order, onChange: (v) => u(v.target.value), children: Pi.map((v, b) => /* @__PURE__ */ y("option", { value: v.value, children: v.label }, `filter-${v.label}-${b}`)) }),
      a.order === "cust" && /* @__PURE__ */ y(Ii, { orderedValues: a.orderedValues, handleFilterOrder: n })
    ] }),
    (l == null ? void 0 : l.columnName) && /* @__PURE__ */ k("label", { className: "mt-2", children: [
      /* @__PURE__ */ y("span", { className: "edit-filterOrder column-heading", children: "SubGrouping Order" }),
      /* @__PURE__ */ k("div", { className: "edit-label column-heading float-right", children: [
        l.columnName,
        " "
      ] }),
      /* @__PURE__ */ y(
        "select",
        {
          value: l.order ? l.order : "asc",
          onChange: (v) => h(v.target.value),
          children: Pi.map((v, b) => /* @__PURE__ */ y("option", { value: v.value, children: v.label }, `filter-${b}`))
        }
      ),
      (l == null ? void 0 : l.order) === "cust" && a.values.map((v, b) => {
        const E = l.valuesLookup[v].orderedValues;
        return /* @__PURE__ */ k("div", { children: [
          /* @__PURE__ */ y("span", { className: "font-weight-bold", children: v }),
          /* @__PURE__ */ y(
            Ii,
            {
              orderedValues: E,
              handleFilterOrder: (x, C) => {
                m(x, C, E, v);
              }
            },
            `subgroup-values-${v}-${b}`
          )
        ] }, `group-subgroup-values-${v}-${b}`);
      })
    ] })
  ] });
}, U0 = ({ config: e, updateField: t, rawData: n, hasFootnotes: r }) => {
  const o = O.useState({}), i = O.useMemo(() => Re.uniq(Re.flatten(n == null ? void 0 : n.map((h) => Object.keys(h)))), [n]), s = (h) => {
    let m = Re.cloneDeep(e.filters);
    m.splice(h, 1), t(null, null, "filters", m);
  }, a = (h, m, g) => {
    t("filters", m, h, g);
  }, l = (h, m) => {
    const g = Re.cloneDeep(e.filters), _ = { ...g[h], orderedValues: g[h].values };
    _.defaultValue = m, _.active = m, g[h] = _, t(null, null, "filters", g);
  }, c = (h, m) => {
    const g = Re.cloneDeep(e.filters), _ = { ...g[h], orderedValues: g[h].values };
    _.filterStyle = m, m === "multi-select" ? _.active = Array.isArray(_.active) ? _.active : [_.active] : Array.isArray(_.active) && (_.active = _.active[0]), m === "nested-dropdown" && (_.showDropdown = !0), g[h] = _, t(null, null, "filters", g);
  }, d = (h, m) => {
    const g = Re.uniq(n.map((v) => v[m])), _ = { ...Re.cloneDeep(e.filters[h]), columnName: m, values: g };
    qo(_), _.active = _.values[0];
    const S = e.filters.map((v, b) => b === h ? _ : v);
    t(null, null, "filters", S);
  }, u = () => {
    const h = e.filters ? [...e.filters] : [], m = {
      values: [],
      filterStyle: "dropdown",
      id: Date.now(),
      showDropdown: !0
    };
    h.push(m), t(null, null, "filters", h);
  }, f = (h, m, g) => {
    const _ = e.filters[g], S = [..._.orderedValues || _.values], [v] = S.splice(h, 1);
    S.splice(m, 0, v);
    const b = Re.cloneDeep(e.filters), E = { ...b[g] };
    E.values = S, E.orderedValues = S, E.active = E.defaultValue ? E.defaultValue : S[0], E.order = "cust", b[g] = E, t(null, null, "filters", b);
  }, p = (h) => e.filters.filter((m, g) => g !== h).map(({ label: m, columnName: g, id: _ }) => ({ label: m || g, value: _ }));
  return /* @__PURE__ */ k(mt, { children: [
    e.filters && /* @__PURE__ */ k(mt, { children: [
      /* @__PURE__ */ y(
        mn,
        {
          value: e.filterBehavior,
          fieldName: "filterBehavior",
          label: "Filter Behavior",
          updateField: t,
          options: ["Apply Button", "Filter Change"],
          tooltip: /* @__PURE__ */ k(Lt, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ y(Lt.Target, { children: /* @__PURE__ */ y(Xn, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ y(Lt.Content, { children: /* @__PURE__ */ y("p", { children: 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.' }) })
          ] })
        }
      ),
      /* @__PURE__ */ y(
        Is,
        {
          type: "textarea",
          label: "Filter intro text",
          value: e.filterIntro,
          updateField: t,
          fieldName: "filterIntro"
        }
      ),
      /* @__PURE__ */ y("br", {}),
      /* @__PURE__ */ y("ul", { className: "filters-list", children: e.filters.map((h, m) => {
        var g, _;
        return h.type === "url" ? /* @__PURE__ */ y(mt, {}) : /* @__PURE__ */ k(
          X_,
          {
            fieldName: h.columnName,
            fieldKey: m,
            fieldType: "Filter",
            controls: o,
            deleteField: () => s(m),
            children: [
              /* @__PURE__ */ y(
                mn,
                {
                  value: h.filterStyle,
                  fieldName: "filterStyle",
                  label: "Filter Style",
                  updateField: (S, v, b, E) => c(m, E),
                  options: Ju
                }
              ),
              h.filterStyle !== "nested-dropdown" ? /* @__PURE__ */ k(mt, { children: [
                /* @__PURE__ */ y(
                  mn,
                  {
                    value: h.columnName,
                    fieldName: "columnName",
                    label: "Filter",
                    updateField: (S, v, b, E) => d(m, E),
                    options: i,
                    initial: "- Select Option -"
                  }
                ),
                h.columnName && /* @__PURE__ */ y(
                  mn,
                  {
                    value: h.defaultValue,
                    options: h.resetLabel ? [h.resetLabel, ...(g = e.filters) == null ? void 0 : g[m].values] : (_ = e.filters) == null ? void 0 : _[m].values,
                    updateField: (S, v, b, E) => {
                      l(m, E);
                    },
                    label: "Filter Default Value",
                    initial: "Select"
                  }
                ),
                /* @__PURE__ */ k("label", { children: [
                  /* @__PURE__ */ y("span", { className: "edit-label column-heading", children: "Label" }),
                  /* @__PURE__ */ y(
                    "input",
                    {
                      type: "text",
                      value: h.label,
                      onChange: (S) => {
                        a("label", m, S.target.value);
                      }
                    }
                  )
                ] }),
                h.filterStyle === "multi-select" && /* @__PURE__ */ y(
                  Is,
                  {
                    label: "Select Limit",
                    value: h.selectLimit,
                    updateField: t,
                    section: "filters",
                    subsection: m,
                    fieldName: "selectLimit",
                    type: "number",
                    tooltip: /* @__PURE__ */ k(Lt, { style: { textTransform: "none" }, children: [
                      /* @__PURE__ */ y(Lt.Target, { children: /* @__PURE__ */ y(Xn, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                      /* @__PURE__ */ y(Lt.Content, { children: /* @__PURE__ */ y("p", { children: "The maximum number of items that can be selected." }) })
                    ] })
                  }
                ),
                /* @__PURE__ */ y(
                  mn,
                  {
                    value: h.order || "asc",
                    fieldName: "order",
                    label: "Filter Order",
                    updateField: (S, v, b, E) => {
                      a("order", m, E), h.orderColumn && E !== "column" && a("orderColumn", m, "");
                    },
                    options: Pi
                  }
                ),
                h.order === "cust" && /* @__PURE__ */ y(
                  Ii,
                  {
                    orderedValues: h.orderedValues || h.values,
                    handleFilterOrder: (S, v) => f(S, v, m)
                  }
                ),
                h.order === "column" && /* @__PURE__ */ y(
                  mn,
                  {
                    value: h.orderColumn,
                    fieldName: "orderColumn",
                    label: "Order Column",
                    updateField: (S, v, b, E) => a("orderColumn", m, E),
                    options: i
                  }
                ),
                /* @__PURE__ */ k("label", { children: [
                  /* @__PURE__ */ y("span", { className: "edit-label column-heading", children: "Default Value Set By Query String Parameter" }),
                  /* @__PURE__ */ y(
                    "input",
                    {
                      type: "text",
                      value: h.setByQueryParameter,
                      onChange: (S) => {
                        a("setByQueryParameter", m, S.target.value);
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ k("label", { children: [
                  /* @__PURE__ */ y(
                    "input",
                    {
                      type: "checkbox",
                      checked: h.showDropdown === void 0 ? !0 : h.showDropdown,
                      onChange: (S) => {
                        a("showDropdown", m, S.target.checked);
                      }
                    }
                  ),
                  /* @__PURE__ */ y("span", { className: "edit-showDropdown column-heading", children: "Show Filter" })
                ] })
              ] }) : /* @__PURE__ */ y(
                Z_,
                {
                  config: e,
                  dataColumns: i,
                  filterIndex: m,
                  rawData: n,
                  handleGroupingCustomOrder: (S, v) => f(S, v, m),
                  handleNameChange: (S) => d(m, S),
                  updateField: t,
                  updateFilterStyle: c
                }
              ),
              r && /* @__PURE__ */ k("label", { children: [
                /* @__PURE__ */ y(
                  "input",
                  {
                    type: "checkbox",
                    checked: !!h.filterFootnotes,
                    onChange: (S) => {
                      a("filterFootnotes", m, S.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ y("span", { className: "edit-showDropdown column-heading", children: "Filter Footnotes" })
              ] }),
              /* @__PURE__ */ k("label", { children: [
                /* @__PURE__ */ k("span", { className: "edit-label column-heading", children: [
                  "Filter Parents",
                  " ",
                  /* @__PURE__ */ k(Lt, { style: { textTransform: "none" }, children: [
                    /* @__PURE__ */ y(Lt.Target, { children: /* @__PURE__ */ y(Xn, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                    /* @__PURE__ */ y(Lt.Content, { children: /* @__PURE__ */ y("p", { children: "A selected parent's value will be used to filter the available options of this child filter." }) })
                  ] })
                ] }),
                /* @__PURE__ */ y(
                  ed,
                  {
                    fieldName: "parents",
                    updateField: (S, v, b, E) => {
                      a("parents", m, E);
                    },
                    options: p(m),
                    selected: e.filters[m].parents
                  }
                )
              ] })
            ]
          },
          h.columnName
        );
      }) })
    ] }),
    !e.filters && /* @__PURE__ */ y("p", { style: { textAlign: "center" }, children: "There are currently no filters." }),
    /* @__PURE__ */ y("button", { type: "button", onClick: u, className: "btn btn-primary full-width", children: "Add Filter" })
  ] });
}, W0 = ({
  label: e,
  sliderType: t = "flat",
  size: n = "medium",
  activeColor: r = null,
  section: o = null,
  subsection: i = null,
  fieldName: s,
  updateField: a,
  value: l,
  i: c = null,
  min: d = null,
  max: u = null,
  onClick: f,
  ...p
}) => {
  const [h, m] = O.useState(l);
  let g = () => {
    let v = "";
    return o && (v += o + "-"), i && (v += i + "-"), s && (v += s), v;
  };
  const _ = () => ({
    flat: " slider--flat",
    block: " slider--block",
    pill: " slider--pill",
    "3d": " slider--3d"
  })[t] || "";
  O.useEffect(() => {
    l !== void 0 && l !== h && m(l);
  }, [l]), O.useEffect(() => {
    l !== void 0 && l !== h && a && a(o, i, s, h, c);
  }, [h]);
  const S = (v) => {
    m(!h), f && f(v);
  };
  return /* @__PURE__ */ k("div", { className: "input-group", children: [
    e && /* @__PURE__ */ y("label", { children: e }),
    /* @__PURE__ */ k(
      "div",
      {
        className: "cove-input__slider" + (n === "small" ? "--small" : n === "large" ? "--large" : "") + _() + (h ? " active" : ""),
        onClick: S,
        children: [
          /* @__PURE__ */ y("div", { className: "cove-input__slider-button" }),
          /* @__PURE__ */ y(
            "div",
            {
              className: "cove-input__slider-track",
              style: h && r ? { backgroundColor: r } : null
            }
          ),
          /* @__PURE__ */ y("input", { className: "cove-input--hidden", type: "checkbox", name: g(), checked: h || !1, readOnly: !0 })
        ]
      }
    )
  ] });
}, H0 = O.createContext({ displayName: "ConfigContext", setTempConfig: () => {
} }), q0 = O.createContext(() => {
});
export {
  g0 as $,
  z0 as A,
  B0 as B,
  H0 as C,
  P0 as D,
  q0 as E,
  Ii as F,
  G0 as G,
  Em as H,
  I0 as I,
  uw as J,
  l_ as K,
  W0 as L,
  $0 as M,
  Rw as N,
  F0 as O,
  tr as P,
  Xh as Q,
  qh as R,
  Fh as S,
  yn as T,
  Uh as U,
  U0 as V,
  T0 as W,
  Jn as X,
  R0 as Y,
  A0 as Z,
  m0 as _,
  Pi as a,
  E0 as a0,
  D0 as a1,
  Nr as a2,
  js as a3,
  Cl as a4,
  O0 as a5,
  S0 as a6,
  _0 as a7,
  y0 as a8,
  b0 as a9,
  N0 as aa,
  x0 as ab,
  w0 as ac,
  Bh as ad,
  ks as ae,
  Ls as af,
  X_ as b,
  pc as c,
  C0 as d,
  Ll as e,
  K_ as f,
  Yl as g,
  M0 as h,
  j0 as i,
  Rp as j,
  L0 as k,
  hr as l,
  Ld as m,
  Od as n,
  Sd as o,
  to as p,
  v0 as q,
  q_ as r,
  no as s,
  hd as t,
  bm as u,
  Dm as v,
  Vm as w,
  lc as x,
  k0 as y,
  V0 as z
};
