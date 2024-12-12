import { _ as jo } from "./storybook-lodash-a4231e1c.es.js";
import { e as Zt } from "./storybook-DataTransform-0947aeee.es.js";
import { j as Wt, k as _s, i as Ss, m as Sc, g as Ai, G as Go } from "./storybook-Group-eff0b1b9.es.js";
import { P as re } from "./storybook-index-43433e35.es.js";
import { r as w, R as F } from "./storybook-index-45401197.es.js";
import { g as lu, a as cu } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { T as Fc } from "./storybook-Text-c19e6344.es.js";
import { r as wi, R as xc } from "./storybook-index-633d712d.es.js";
import { _ as dn } from "./storybook-extends-70f3d2a3.es.js";
import { d as Fs, m as Nc } from "./storybook-Icon-4f5978ba.es.js";
import { j as x, a as Te, F as _i } from "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-index-4ed993c7.es.js";
var $e = typeof globalThis < "u" && globalThis || typeof self < "u" && self || // eslint-disable-next-line no-undef
typeof global < "u" && global || {}, Xe = {
  searchParams: "URLSearchParams" in $e,
  iterable: "Symbol" in $e && "iterator" in Symbol,
  blob: "FileReader" in $e && "Blob" in $e && function() {
    try {
      return new Blob(), !0;
    } catch {
      return !1;
    }
  }(),
  formData: "FormData" in $e,
  arrayBuffer: "ArrayBuffer" in $e
};
function Oc(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (Xe.arrayBuffer)
  var Tc = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], Bc = ArrayBuffer.isView || function(e) {
    return e && Tc.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function En(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function Si(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function Fi(e) {
  var t = {
    next: function() {
      var n = e.shift();
      return { done: n === void 0, value: n };
    }
  };
  return Xe.iterable && (t[Symbol.iterator] = function() {
    return t;
  }), t;
}
function Be(e) {
  this.map = {}, e instanceof Be ? e.forEach(function(t, n) {
    this.append(n, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    if (t.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
Be.prototype.append = function(e, t) {
  e = En(e), t = Si(t);
  var n = this.map[e];
  this.map[e] = n ? n + ", " + t : t;
};
Be.prototype.delete = function(e) {
  delete this.map[En(e)];
};
Be.prototype.get = function(e) {
  return e = En(e), this.has(e) ? this.map[e] : null;
};
Be.prototype.has = function(e) {
  return this.map.hasOwnProperty(En(e));
};
Be.prototype.set = function(e, t) {
  this.map[En(e)] = Si(t);
};
Be.prototype.forEach = function(e, t) {
  for (var n in this.map)
    this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
};
Be.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push(n);
  }), Fi(e);
};
Be.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), Fi(e);
};
Be.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push([n, t]);
  }), Fi(e);
};
Xe.iterable && (Be.prototype[Symbol.iterator] = Be.prototype.entries);
function lo(e) {
  if (!e._noBody) {
    if (e.bodyUsed)
      return Promise.reject(new TypeError("Already read"));
    e.bodyUsed = !0;
  }
}
function du(e) {
  return new Promise(function(t, n) {
    e.onload = function() {
      t(e.result);
    }, e.onerror = function() {
      n(e.error);
    };
  });
}
function Ic(e) {
  var t = new FileReader(), n = du(t);
  return t.readAsArrayBuffer(e), n;
}
function Pc(e) {
  var t = new FileReader(), n = du(t), r = /charset=([A-Za-z0-9_-]+)/.exec(e.type), o = r ? r[1] : "utf-8";
  return t.readAsText(e, o), n;
}
function Rc(e) {
  for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
    n[r] = String.fromCharCode(t[r]);
  return n.join("");
}
function xs(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function fu() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : Xe.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : Xe.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : Xe.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : Xe.arrayBuffer && Xe.blob && Oc(e) ? (this._bodyArrayBuffer = xs(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : Xe.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || Bc(e)) ? this._bodyArrayBuffer = xs(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : Xe.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, Xe.blob && (this.blob = function() {
    var e = lo(this);
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
      var e = lo(this);
      return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
        this._bodyArrayBuffer.buffer.slice(
          this._bodyArrayBuffer.byteOffset,
          this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
        )
      ) : Promise.resolve(this._bodyArrayBuffer));
    } else {
      if (Xe.blob)
        return this.blob().then(Ic);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var e = lo(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return Pc(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(Rc(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, Xe.formData && (this.formData = function() {
    return this.text().then(kc);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var Mc = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function Lc(e) {
  var t = e.toUpperCase();
  return Mc.indexOf(t) > -1 ? t : e;
}
function Qt(e, t) {
  if (!(this instanceof Qt))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var n = t.body;
  if (e instanceof Qt) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new Be(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !n && e._bodyInit != null && (n = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new Be(t.headers)), this.method = Lc(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
    if ("AbortController" in $e) {
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
Qt.prototype.clone = function() {
  return new Qt(this, { body: this._bodyInit });
};
function kc(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(n) {
    if (n) {
      var r = n.split("="), o = r.shift().replace(/\+/g, " "), i = r.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(o), decodeURIComponent(i));
    }
  }), t;
}
function $c(e) {
  var t = new Be(), n = e.replace(/\r?\n[\t ]+/g, " ");
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
fu.call(Qt.prototype);
function Dt(e, t) {
  if (!(this instanceof Dt))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new Be(t.headers), this.url = t.url || "", this._initBody(e);
}
fu.call(Dt.prototype);
Dt.prototype.clone = function() {
  return new Dt(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Be(this.headers),
    url: this.url
  });
};
Dt.error = function() {
  var e = new Dt(null, { status: 200, statusText: "" });
  return e.ok = !1, e.status = 0, e.type = "error", e;
};
var Vc = [301, 302, 303, 307, 308];
Dt.redirect = function(e, t) {
  if (Vc.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new Dt(null, { status: t, headers: { location: e } });
};
var Xt = $e.DOMException;
try {
  new Xt();
} catch {
  Xt = function(t, n) {
    this.message = t, this.name = n;
    var r = Error(t);
    this.stack = r.stack;
  }, Xt.prototype = Object.create(Error.prototype), Xt.prototype.constructor = Xt;
}
function pu(e, t) {
  return new Promise(function(n, r) {
    var o = new Qt(e, t);
    if (o.signal && o.signal.aborted)
      return r(new Xt("Aborted", "AbortError"));
    var i = new XMLHttpRequest();
    function s() {
      i.abort();
    }
    i.onload = function() {
      var l = {
        statusText: i.statusText,
        headers: $c(i.getAllResponseHeaders() || "")
      };
      o.url.indexOf("file://") === 0 && (i.status < 200 || i.status > 599) ? l.status = 200 : l.status = i.status, l.url = "responseURL" in i ? i.responseURL : l.headers.get("X-Request-URL");
      var d = "response" in i ? i.response : i.responseText;
      setTimeout(function() {
        n(new Dt(d, l));
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
        r(new Xt("Aborted", "AbortError"));
      }, 0);
    };
    function a(l) {
      try {
        return l === "" && $e.location.href ? $e.location.href : l;
      } catch {
        return l;
      }
    }
    if (i.open(o.method, a(o.url), !0), o.credentials === "include" ? i.withCredentials = !0 : o.credentials === "omit" && (i.withCredentials = !1), "responseType" in i && (Xe.blob ? i.responseType = "blob" : Xe.arrayBuffer && (i.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof Be || $e.Headers && t.headers instanceof $e.Headers)) {
      var u = [];
      Object.getOwnPropertyNames(t.headers).forEach(function(l) {
        u.push(En(l)), i.setRequestHeader(l, Si(t.headers[l]));
      }), o.headers.forEach(function(l, d) {
        u.indexOf(d) === -1 && i.setRequestHeader(d, l);
      });
    } else
      o.headers.forEach(function(l, d) {
        i.setRequestHeader(d, l);
      });
    o.signal && (o.signal.addEventListener("abort", s), i.onreadystatechange = function() {
      i.readyState === 4 && o.signal.removeEventListener("abort", s);
    }), i.send(typeof o._bodyInit > "u" ? null : o._bodyInit);
  });
}
pu.polyfill = !0;
$e.fetch || ($e.fetch = pu, $e.Headers = Be, $e.Request = Qt, $e.Response = Dt);
function Cb(e, t) {
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
var Ns = 180 / Math.PI, Uo = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function hu(e, t, n, r, o, i) {
  var s, a, u;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (u = e * n + t * r) && (n -= e * u, r -= t * u), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, u /= a), e * r < t * n && (e = -e, t = -t, u = -u, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Ns,
    skewX: Math.atan(u) * Ns,
    scaleX: s,
    scaleY: a
  };
}
var gr;
function jc(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Uo : hu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Gc(e) {
  return e == null || (gr || (gr = document.createElementNS("http://www.w3.org/2000/svg", "g")), gr.setAttribute("transform", e), !(e = gr.transform.baseVal.consolidate())) ? Uo : (e = e.matrix, hu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function mu(e, t, n, r) {
  function o(l) {
    return l.length ? l.pop() + " " : "";
  }
  function i(l, d, c, f, p, g) {
    if (l !== c || d !== f) {
      var m = p.push("translate(", null, t, null, n);
      g.push({ i: m - 4, x: Wt(l, c) }, { i: m - 2, x: Wt(d, f) });
    } else
      (c || f) && p.push("translate(" + c + t + f + n);
  }
  function s(l, d, c, f) {
    l !== d ? (l - d > 180 ? d += 360 : d - l > 180 && (l += 360), f.push({ i: c.push(o(c) + "rotate(", null, r) - 2, x: Wt(l, d) })) : d && c.push(o(c) + "rotate(" + d + r);
  }
  function a(l, d, c, f) {
    l !== d ? f.push({ i: c.push(o(c) + "skewX(", null, r) - 2, x: Wt(l, d) }) : d && c.push(o(c) + "skewX(" + d + r);
  }
  function u(l, d, c, f, p, g) {
    if (l !== c || d !== f) {
      var m = p.push(o(p) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: Wt(l, c) }, { i: m - 2, x: Wt(d, f) });
    } else
      (c !== 1 || f !== 1) && p.push(o(p) + "scale(" + c + "," + f + ")");
  }
  return function(l, d) {
    var c = [], f = [];
    return l = e(l), d = e(d), i(l.translateX, l.translateY, d.translateX, d.translateY, c, f), s(l.rotate, d.rotate, c, f), a(l.skewX, d.skewX, c, f), u(l.scaleX, l.scaleY, d.scaleX, d.scaleY, c, f), l = d = null, function(p) {
      for (var g = -1, m = f.length, h; ++g < m; )
        c[(h = f[g]).i] = h.x(p);
      return c.join("");
    };
  };
}
var Uc = mu(jc, "px, ", "px)", "deg)"), Wc = mu(Gc, ", ", ")", ")");
function gu(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Wo = Math.PI, zo = 2 * Wo, zt = 1e-6, zc = zo - zt;
function Ho() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Hc() {
  return new Ho();
}
Ho.prototype = Hc.prototype = {
  constructor: Ho,
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
    var i = this._x1, s = this._y1, a = n - e, u = r - t, l = i - e, d = s - t, c = l * l + d * d;
    if (o < 0)
      throw new Error("negative radius: " + o);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (c > zt)
      if (!(Math.abs(d * a - u * l) > zt) || !o)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var f = n - i, p = r - s, g = a * a + u * u, m = f * f + p * p, h = Math.sqrt(g), C = Math.sqrt(c), A = o * Math.tan((Wo - Math.acos((g + c - m) / (2 * h * C))) / 2), b = A / C, v = A / h;
        Math.abs(b - 1) > zt && (this._ += "L" + (e + b * l) + "," + (t + b * d)), this._ += "A" + o + "," + o + ",0,0," + +(d * f > l * p) + "," + (this._x1 = e + v * a) + "," + (this._y1 = t + v * u);
      }
  },
  arc: function(e, t, n, r, o, i) {
    e = +e, t = +t, n = +n, i = !!i;
    var s = n * Math.cos(r), a = n * Math.sin(r), u = e + s, l = t + a, d = 1 ^ i, c = i ? r - o : o - r;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + u + "," + l : (Math.abs(this._x1 - u) > zt || Math.abs(this._y1 - l) > zt) && (this._ += "L" + u + "," + l), n && (c < 0 && (c = c % zo + zo), c > zc ? this._ += "A" + n + "," + n + ",0,1," + d + "," + (e - s) + "," + (t - a) + "A" + n + "," + n + ",0,1," + d + "," + (this._x1 = u) + "," + (this._y1 = l) : c > zt && (this._ += "A" + n + "," + n + ",0," + +(c >= Wo) + "," + d + "," + (this._x1 = e + n * Math.cos(o)) + "," + (this._y1 = t + n * Math.sin(o))));
  },
  rect: function(e, t, n, r) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function Ab(e) {
  return function() {
    return e;
  };
}
var wb = Math.abs, _b = Math.atan2, Sb = Math.cos, Fb = Math.max, xb = Math.min, Nb = Math.sin, Ob = Math.sqrt, Tb = 1e-12, xi = Math.PI, Os = xi / 2, Bb = 2 * xi;
function Ib(e) {
  return e > 1 ? 0 : e < -1 ? xi : Math.acos(e);
}
function Pb(e) {
  return e >= 1 ? Os : e <= -1 ? -Os : Math.asin(e);
}
function qo(e, t, n) {
  var r, o, i, s, a;
  t == null && (t = 100);
  function u() {
    var d = Date.now() - s;
    d < t && d >= 0 ? r = setTimeout(u, t - d) : (r = null, n || (a = e.apply(i, o), i = o = null));
  }
  var l = function() {
    i = this, o = arguments, s = Date.now();
    var d = n && !r;
    return r || (r = setTimeout(u, t)), d && (a = e.apply(i, o), i = o = null), a;
  };
  return l.clear = function() {
    r && (clearTimeout(r), r = null);
  }, l.flush = function() {
    r && (a = e.apply(i, o), i = o = null, clearTimeout(r), r = null);
  }, l;
}
qo.debounce = qo;
var qc = qo;
const Ts = /* @__PURE__ */ lu(qc);
function Yc(e) {
  let {
    debounce: t,
    scroll: n,
    polyfill: r,
    offsetSize: o
  } = e === void 0 ? {
    debounce: 0,
    scroll: !1,
    offsetSize: !1
  } : e;
  const i = r || (typeof window > "u" ? class {
  } : window.ResizeObserver);
  if (!i)
    throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [s, a] = w.useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0
  }), u = w.useRef({
    element: null,
    scrollContainers: null,
    resizeObserver: null,
    lastBounds: s
  }), l = t ? typeof t == "number" ? t : t.scroll : null, d = t ? typeof t == "number" ? t : t.resize : null, c = w.useRef(!1);
  w.useEffect(() => (c.current = !0, () => void (c.current = !1)));
  const [f, p, g] = w.useMemo(() => {
    const A = () => {
      if (!u.current.element)
        return;
      const {
        left: b,
        top: v,
        width: E,
        height: _,
        bottom: I,
        right: R,
        x: $,
        y: O
      } = u.current.element.getBoundingClientRect(), L = {
        left: b,
        top: v,
        width: E,
        height: _,
        bottom: I,
        right: R,
        x: $,
        y: O
      };
      u.current.element instanceof HTMLElement && o && (L.height = u.current.element.offsetHeight, L.width = u.current.element.offsetWidth), Object.freeze(L), c.current && !Zc(u.current.lastBounds, L) && a(u.current.lastBounds = L);
    };
    return [A, d ? Ts(A, d) : A, l ? Ts(A, l) : A];
  }, [a, o, l, d]);
  function m() {
    u.current.scrollContainers && (u.current.scrollContainers.forEach((A) => A.removeEventListener("scroll", g, !0)), u.current.scrollContainers = null), u.current.resizeObserver && (u.current.resizeObserver.disconnect(), u.current.resizeObserver = null);
  }
  function h() {
    u.current.element && (u.current.resizeObserver = new i(g), u.current.resizeObserver.observe(u.current.element), n && u.current.scrollContainers && u.current.scrollContainers.forEach((A) => A.addEventListener("scroll", g, {
      capture: !0,
      passive: !0
    })));
  }
  const C = (A) => {
    !A || A === u.current.element || (m(), u.current.element = A, u.current.scrollContainers = Du(A), h());
  };
  return Kc(g, !!n), Xc(p), w.useEffect(() => {
    m(), h();
  }, [n, g, p]), w.useEffect(() => m, []), [C, s, f];
}
function Xc(e) {
  w.useEffect(() => {
    const t = e;
    return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
  }, [e]);
}
function Kc(e, t) {
  w.useEffect(() => {
    if (t) {
      const n = e;
      return window.addEventListener("scroll", n, {
        capture: !0,
        passive: !0
      }), () => void window.removeEventListener("scroll", n, !0);
    }
  }, [e, t]);
}
function Du(e) {
  const t = [];
  if (!e || e === document.body)
    return t;
  const {
    overflow: n,
    overflowX: r,
    overflowY: o
  } = window.getComputedStyle(e);
  return [n, r, o].some((i) => i === "auto" || i === "scroll") && t.push(e), [...t, ...Du(e.parentElement)];
}
const Jc = ["x", "y", "top", "bottom", "left", "right", "width", "height"], Zc = (e, t) => Jc.every((n) => e[n] === t[n]), Ni = (e) => {
  delete e.qualitative9;
  let t = {};
  for (const [n, r] of Object.entries(e)) {
    const o = String(n);
    if (!o.endsWith("reverse")) {
      let i = o.concat("reverse");
      t[i] = [...r].reverse();
    }
  }
  return { ...t, ...e };
}, Qc = {
  yelloworangered: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
  yelloworangebrown: [
    "#ffffe5",
    "#fff7bc",
    "#fee391",
    "#fec44f",
    "#fe9929",
    "#ec7014",
    "#cc4c02",
    "#993404",
    "#662506"
  ],
  pinkpurple: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
  bluegreen: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
  orangered: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
  red: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
  greenblue: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#267BA6", "#0868ac", "#084081"],
  yellowpurple: ["#FFF0B0", "#F5CC76", "#EDAE4B", "#E3683C", "#BF2A48", "#6D2059", "#8F0C4B", "#310958", "#0E0943"],
  qualitative1: [
    "#a6cee3",
    "#1f78b4",
    "#b2df8a",
    "#33a02c",
    "#fb9a99",
    "#e31a1c",
    "#6a3d9a",
    "#cab2d6",
    "#E31A90",
    "#15017A",
    "#C2C0FC"
  ],
  qualitative2: ["#7fc97f", "#beaed4", "#ff9", "#386cb0", "#f0027f", "#bf5b17", "#666", "#fedab8"],
  qualitative3: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666"],
  qualitative4: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ff3", "#a65628", "#f781bf"],
  // qualitative9 doesn't appear to be used anywhere...
  qualitative9: ["#497d0c", "#84BC49", "#88c3ea", "#fcad90", "#f26b4f", "#c31b1f", "#c31b1f"],
  "sequential-blue-2(MPX)": [
    "#F5FEFF",
    "#E1FBFF",
    "#C0F2FD",
    "#94E2ED",
    "#5EBAD4",
    "#3695BE",
    "#2273A0",
    "#0E5181",
    "#093460"
  ],
  "sequential-orange(MPX)": [
    "#FFFDF0",
    "#FFF7DC",
    "#FFE9C2",
    "#FFD097",
    "#F7A866",
    "#EB7723",
    "#B95117",
    "#853209",
    "#661F00"
  ],
  colorblindsafe: ["#e69f00", "#56b4e9", "#009e73", "#f0e442", "#0072b2", "#d55e00", "#cc79a7", "#000000", "#7e5803"]
}, ed = {
  "qualitative-bold": [
    "#377eb8",
    "#ff7f00",
    "#4daf4a",
    "#984ea3",
    "#e41a1c",
    "#ffff33",
    "#a65628",
    "#f781bf",
    "#3399CC"
  ],
  "qualitative-soft": [
    "#A6CEE3",
    "#1F78B4",
    "#B2DF8A",
    "#33A02C",
    "#FB9A99",
    "#E31A1C",
    "#FDBF6F",
    "#FF7F00",
    "#ACA9EB"
  ],
  qualitative1: [
    "#a6cee3",
    "#1f78b4",
    "#b2df8a",
    "#33a02c",
    "#fb9a99",
    "#e31a1c",
    "#6a3d9a",
    "#cab2d6",
    "#E31A90",
    "#15017A",
    "#C2C0FC"
  ],
  qualitative2: ["#7fc97f", "#beaed4", "#ff9", "#386cb0", "#f0027f", "#bf5b17", "#666", "#fedab8"],
  qualitative3: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666"],
  qualitative4: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ff3", "#a65628", "#f781bf"],
  "sequential-blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "sequential-blue-2-(MPX)": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "sequential-orange-(MPX)": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "sequential-green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"],
  colorblindsafe: ["#e69f00", "#56b4e9", "#009e73", "#f0e442", "#0072b2", "#d55e00", "#cc79a7", "#000000", "#7e5803"]
}, td = {
  "monochrome-1": ["#A6CEE3", "#15017A"],
  "monochrome-2": ["#C2C0FC", "#15017A"],
  "monochrome-3": ["#cab2d6", "#6a3d9a"],
  "monochrome-4": ["#C2C0FC", "#6a3d9a"],
  "monochrome-5": ["#fedab8", "#bf5b17"],
  "cool-1": ["#b2df8a", "#1f78b4"],
  "cool-2": ["#a6cee3", "#72D66B"],
  "cool-3": ["#C2C0FC", "#386cb0"],
  "cool-4": ["#72D66B", "#6a3d9a"],
  "cool-5": ["#a6cee3", "#6a3d9a"],
  "warm-1": ["#e31a1c", "#fedab8"],
  "complementary-1": ["#1f78b4", "#e6ab02"],
  "complementary-2": ["#1f78b4", "#ff7f00"],
  "complementary-3": ["#6a3d9a", "#ff7f00"],
  "complementary-4": ["#6a3d9a", "#e6ab02"],
  "complementary-5": ["#df168c", "#1EB386"]
}, nd = {
  "Sequential Blue": ["#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#084594"],
  "Sequential Blue Two": ["#D5F6F9", "#99E2ED", "#5FB6D1", "#3189B0", "#116091", "#0A3E72"],
  "Sequential Blue Three": [
    "#F5FEFF",
    "#E1FBFF",
    "#C0F2FD",
    "#94E2ED",
    "#5EBAD4",
    "#3695BE",
    "#2273A0",
    "#0E5181",
    "#093460"
  ],
  "Sequential Orange": ["#FFEFCF", "#FFD49C", "#F7A866", "#EB7723", "#B95117", "#862B0B"],
  "Sequential Orange Two": [
    "#FFFDF0",
    "#FFF7DC",
    "#FFE9C2",
    "#FFD097",
    "#F7A866",
    "#EB7723",
    "#B95117",
    "#853209",
    "#661F00"
  ],
  "Sequential Green": ["#C7E9C0", "#A1D99B", "#74C476", "#41AB5D", "#238B45", "#005A32"]
}, Mb = nd, Lb = Ni(ed), kb = Ni(Qc), $b = Ni(td);
var qn = /* @__PURE__ */ function() {
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
function rd(e, t) {
  return new qn({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function od(e, t) {
  return new qn({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: qn,
  subtractPoints: od,
  sumPoints: rd
}, Symbol.toStringTag, { value: "Module" }));
function sd(e) {
  return !!e && e instanceof Element;
}
function ad(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function ud(e) {
  return !!e && "createSVGPoint" in e;
}
function ld(e) {
  return !!e && "getScreenCTM" in e;
}
function cd(e) {
  return !!e && "changedTouches" in e;
}
function dd(e) {
  return !!e && "clientX" in e;
}
function fd(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function Un() {
  return Un = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Un.apply(this, arguments);
}
var co = {
  x: 0,
  y: 0
};
function pd(e) {
  if (!e)
    return Un({}, co);
  if (cd(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : Un({}, co);
  if (dd(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : Un({}, co);
}
function Yo(e, t) {
  if (!e || !t)
    return null;
  var n = pd(t), r = ad(e) ? e.ownerSVGElement : e, o = ld(r) ? r.getScreenCTM() : null;
  if (ud(r) && o) {
    var i = r.createSVGPoint();
    return i.x = n.x, i.y = n.y, i = i.matrixTransform(o.inverse()), new qn({
      x: i.x,
      y: i.y
    });
  }
  var s = e.getBoundingClientRect();
  return new qn({
    x: n.x - s.left - e.clientLeft,
    y: n.y - s.top - e.clientTop
  });
}
function hd(e, t) {
  if (sd(e) && t)
    return Yo(e, t);
  if (fd(e)) {
    var n = e, r = n.target;
    if (r)
      return Yo(r, n);
  }
  return null;
}
const md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: hd,
  touchPoint: Yo
}, Symbol.toStringTag, { value: "Module" })), gd = 4.5, Dd = 3.5, Vb = (e, t) => {
  if (t) {
    if (Zt.contrast(e, t) < gd)
      switch (e) {
        case "#FFF":
          return "#000";
        case "#000":
          return "#FFF";
        default:
          return e;
      }
    return e;
  }
}, jb = (e, t) => !Zt.valid(e) || !Zt.valid(t) ? !1 : Zt.contrast(e, t) >= Dd, Gb = (e, t) => !Zt.valid(e) || !Zt.valid(t) ? !1 : Zt.contrast(e, t);
var Ed = { value: () => {
} };
function Eu() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new xr(n);
}
function xr(e) {
  this._ = e;
}
function yd(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
xr.prototype = Eu.prototype = {
  constructor: xr,
  on: function(e, t) {
    var n = this._, r = yd(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; )
        if ((o = (e = r[i]).type) && (o = vd(n[o], e.name)))
          return o;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type)
        n[o] = Bs(n[o], e.name, t);
      else if (t == null)
        for (o in n)
          n[o] = Bs(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new xr(e);
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
function vd(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Bs(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Ed, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Xo = "http://www.w3.org/1999/xhtml";
const Is = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Xo,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Kr(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Is.hasOwnProperty(t) ? { space: Is[t], local: e } : e;
}
function bd(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Xo && t.documentElement.namespaceURI === Xo ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Cd(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function yu(e) {
  var t = Kr(e);
  return (t.local ? Cd : bd)(t);
}
function Ad() {
}
function Oi(e) {
  return e == null ? Ad : function() {
    return this.querySelector(e);
  };
}
function wd(e) {
  typeof e != "function" && (e = Oi(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), u, l, d = 0; d < s; ++d)
      (u = i[d]) && (l = e.call(u, u.__data__, d, i)) && ("__data__" in u && (l.__data__ = u.__data__), a[d] = l);
  return new ot(r, this._parents);
}
function _d(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Sd() {
  return [];
}
function vu(e) {
  return e == null ? Sd : function() {
    return this.querySelectorAll(e);
  };
}
function Fd(e) {
  return function() {
    return _d(e.apply(this, arguments));
  };
}
function xd(e) {
  typeof e == "function" ? e = Fd(e) : e = vu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, u, l = 0; l < a; ++l)
      (u = s[l]) && (r.push(e.call(u, u.__data__, l, s)), o.push(u));
  return new ot(r, o);
}
function bu(e) {
  return function() {
    return this.matches(e);
  };
}
function Cu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Nd = Array.prototype.find;
function Od(e) {
  return function() {
    return Nd.call(this.children, e);
  };
}
function Td() {
  return this.firstElementChild;
}
function Bd(e) {
  return this.select(e == null ? Td : Od(typeof e == "function" ? e : Cu(e)));
}
var Id = Array.prototype.filter;
function Pd() {
  return Array.from(this.children);
}
function Rd(e) {
  return function() {
    return Id.call(this.children, e);
  };
}
function Md(e) {
  return this.selectAll(e == null ? Pd : Rd(typeof e == "function" ? e : Cu(e)));
}
function Ld(e) {
  typeof e != "function" && (e = bu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], u, l = 0; l < s; ++l)
      (u = i[l]) && e.call(u, u.__data__, l, i) && a.push(u);
  return new ot(r, this._parents);
}
function Au(e) {
  return new Array(e.length);
}
function kd() {
  return new ot(this._enter || this._groups.map(Au), this._parents);
}
function Rr(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Rr.prototype = {
  constructor: Rr,
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
function $d(e) {
  return function() {
    return e;
  };
}
function Vd(e, t, n, r, o, i) {
  for (var s = 0, a, u = t.length, l = i.length; s < l; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Rr(e, i[s]);
  for (; s < u; ++s)
    (a = t[s]) && (o[s] = a);
}
function jd(e, t, n, r, o, i, s) {
  var a, u, l = /* @__PURE__ */ new Map(), d = t.length, c = i.length, f = new Array(d), p;
  for (a = 0; a < d; ++a)
    (u = t[a]) && (f[a] = p = s.call(u, u.__data__, a, t) + "", l.has(p) ? o[a] = u : l.set(p, u));
  for (a = 0; a < c; ++a)
    p = s.call(e, i[a], a, i) + "", (u = l.get(p)) ? (r[a] = u, u.__data__ = i[a], l.delete(p)) : n[a] = new Rr(e, i[a]);
  for (a = 0; a < d; ++a)
    (u = t[a]) && l.get(f[a]) === u && (o[a] = u);
}
function Gd(e) {
  return e.__data__;
}
function Ud(e, t) {
  if (!arguments.length)
    return Array.from(this, Gd);
  var n = t ? jd : Vd, r = this._parents, o = this._groups;
  typeof e != "function" && (e = $d(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), u = new Array(i), l = 0; l < i; ++l) {
    var d = r[l], c = o[l], f = c.length, p = Wd(e.call(d, d && d.__data__, l, r)), g = p.length, m = a[l] = new Array(g), h = s[l] = new Array(g), C = u[l] = new Array(f);
    n(d, c, m, h, C, p, t);
    for (var A = 0, b = 0, v, E; A < g; ++A)
      if (v = m[A]) {
        for (A >= b && (b = A + 1); !(E = h[b]) && ++b < g; )
          ;
        v._next = E || null;
      }
  }
  return s = new ot(s, r), s._enter = a, s._exit = u, s;
}
function Wd(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function zd() {
  return new ot(this._exit || this._groups.map(Au), this._parents);
}
function Hd(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function qd(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), u = 0; u < s; ++u)
    for (var l = n[u], d = r[u], c = l.length, f = a[u] = new Array(c), p, g = 0; g < c; ++g)
      (p = l[g] || d[g]) && (f[g] = p);
  for (; u < o; ++u)
    a[u] = n[u];
  return new ot(a, this._parents);
}
function Yd() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Xd(e) {
  e || (e = Kd);
  function t(c, f) {
    return c && f ? e(c.__data__, f.__data__) : !c - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, u = o[i] = new Array(a), l, d = 0; d < a; ++d)
      (l = s[d]) && (u[d] = l);
    u.sort(t);
  }
  return new ot(o, this._parents).order();
}
function Kd(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Jd() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Zd() {
  return Array.from(this);
}
function Qd() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s)
        return s;
    }
  return null;
}
function ef() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function tf() {
  return !this.node();
}
function nf(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function rf(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function of(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function sf(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function af(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function uf(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function lf(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function cf(e, t) {
  var n = Kr(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? of : rf : typeof t == "function" ? n.local ? lf : uf : n.local ? af : sf)(n, t));
}
function wu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function df(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function ff(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function pf(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function hf(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? df : typeof t == "function" ? pf : ff)(e, t, n ?? "")) : fn(this.node(), e);
}
function fn(e, t) {
  return e.style.getPropertyValue(t) || wu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function mf(e) {
  return function() {
    delete this[e];
  };
}
function gf(e, t) {
  return function() {
    this[e] = t;
  };
}
function Df(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Ef(e, t) {
  return arguments.length > 1 ? this.each((t == null ? mf : typeof t == "function" ? Df : gf)(e, t)) : this.node()[e];
}
function _u(e) {
  return e.trim().split(/^|\s+/);
}
function Ti(e) {
  return e.classList || new Su(e);
}
function Su(e) {
  this._node = e, this._names = _u(e.getAttribute("class") || "");
}
Su.prototype = {
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
function Fu(e, t) {
  for (var n = Ti(e), r = -1, o = t.length; ++r < o; )
    n.add(t[r]);
}
function xu(e, t) {
  for (var n = Ti(e), r = -1, o = t.length; ++r < o; )
    n.remove(t[r]);
}
function yf(e) {
  return function() {
    Fu(this, e);
  };
}
function vf(e) {
  return function() {
    xu(this, e);
  };
}
function bf(e, t) {
  return function() {
    (t.apply(this, arguments) ? Fu : xu)(this, e);
  };
}
function Cf(e, t) {
  var n = _u(e + "");
  if (arguments.length < 2) {
    for (var r = Ti(this.node()), o = -1, i = n.length; ++o < i; )
      if (!r.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? bf : t ? yf : vf)(n, t));
}
function Af() {
  this.textContent = "";
}
function wf(e) {
  return function() {
    this.textContent = e;
  };
}
function _f(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Sf(e) {
  return arguments.length ? this.each(e == null ? Af : (typeof e == "function" ? _f : wf)(e)) : this.node().textContent;
}
function Ff() {
  this.innerHTML = "";
}
function xf(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Nf(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Of(e) {
  return arguments.length ? this.each(e == null ? Ff : (typeof e == "function" ? Nf : xf)(e)) : this.node().innerHTML;
}
function Tf() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Bf() {
  return this.each(Tf);
}
function If() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Pf() {
  return this.each(If);
}
function Rf(e) {
  var t = typeof e == "function" ? e : yu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Mf() {
  return null;
}
function Lf(e, t) {
  var n = typeof e == "function" ? e : yu(e), r = t == null ? Mf : typeof t == "function" ? t : Oi(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function kf() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function $f() {
  return this.each(kf);
}
function Vf() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function jf() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Gf(e) {
  return this.select(e ? jf : Vf);
}
function Uf(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Wf(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function zf(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Hf(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function qf(e, t, n) {
  return function() {
    var r = this.__on, o, i = Wf(t);
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
function Yf(e, t, n) {
  var r = zf(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, l = a.length, d; u < l; ++u)
        for (o = 0, d = a[u]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = t ? qf : Hf, o = 0; o < i; ++o)
    this.each(a(r[o], t, n));
  return this;
}
function Nu(e, t, n) {
  var r = wu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Xf(e, t) {
  return function() {
    return Nu(this, e, t);
  };
}
function Kf(e, t) {
  return function() {
    return Nu(this, e, t.apply(this, arguments));
  };
}
function Jf(e, t) {
  return this.each((typeof t == "function" ? Kf : Xf)(e, t));
}
function* Zf() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Ou = [null];
function ot(e, t) {
  this._groups = e, this._parents = t;
}
function ir() {
  return new ot([[document.documentElement]], Ou);
}
function Qf() {
  return this;
}
ot.prototype = ir.prototype = {
  constructor: ot,
  select: wd,
  selectAll: xd,
  selectChild: Bd,
  selectChildren: Md,
  filter: Ld,
  data: Ud,
  enter: kd,
  exit: zd,
  join: Hd,
  merge: qd,
  selection: Qf,
  order: Yd,
  sort: Xd,
  call: Jd,
  nodes: Zd,
  node: Qd,
  size: ef,
  empty: tf,
  each: nf,
  attr: cf,
  style: hf,
  property: Ef,
  classed: Cf,
  text: Sf,
  html: Of,
  raise: Bf,
  lower: Pf,
  append: Rf,
  insert: Lf,
  remove: $f,
  clone: Gf,
  datum: Uf,
  on: Yf,
  dispatch: Jf,
  [Symbol.iterator]: Zf
};
function Tu(e) {
  return typeof e == "string" ? new ot([[document.querySelector(e)]], [document.documentElement]) : new ot([[e]], Ou);
}
function ep(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function Ub(e, t) {
  if (e = ep(e), t === void 0 && (t = e.currentTarget), t) {
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
const Ko = { capture: !0, passive: !1 };
function Jo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Wb(e) {
  var t = e.document.documentElement, n = Tu(e).on("dragstart.drag", Jo, Ko);
  "onselectstart" in t ? n.on("selectstart.drag", Jo, Ko) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function zb(e, t) {
  var n = e.document.documentElement, r = Tu(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Jo, Ko), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var pn = 0, kn = 0, Nn = 0, Bu = 1e3, Mr, $n, Lr = 0, en = 0, Jr = 0, Yn = typeof performance == "object" && performance.now ? performance : Date, Iu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Bi() {
  return en || (Iu(tp), en = Yn.now() + Jr);
}
function tp() {
  en = 0;
}
function kr() {
  this._call = this._time = this._next = null;
}
kr.prototype = Pu.prototype = {
  constructor: kr,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Bi() : +n) + (t == null ? 0 : +t), !this._next && $n !== this && ($n ? $n._next = this : Mr = this, $n = this), this._call = e, this._time = n, Zo();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Zo());
  }
};
function Pu(e, t, n) {
  var r = new kr();
  return r.restart(e, t, n), r;
}
function np() {
  Bi(), ++pn;
  for (var e = Mr, t; e; )
    (t = en - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --pn;
}
function Ps() {
  en = (Lr = Yn.now()) + Jr, pn = kn = 0;
  try {
    np();
  } finally {
    pn = 0, op(), en = 0;
  }
}
function rp() {
  var e = Yn.now(), t = e - Lr;
  t > Bu && (Jr -= t, Lr = e);
}
function op() {
  for (var e, t = Mr, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Mr = n);
  $n = e, Zo(r);
}
function Zo(e) {
  if (!pn) {
    kn && (kn = clearTimeout(kn));
    var t = e - en;
    t > 24 ? (e < 1 / 0 && (kn = setTimeout(Ps, e - Yn.now() - Jr)), Nn && (Nn = clearInterval(Nn))) : (Nn || (Lr = Yn.now(), Nn = setInterval(rp, Bu)), pn = 1, Iu(Ps));
  }
}
function Rs(e, t, n) {
  var r = new kr();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var ip = Eu("start", "end", "cancel", "interrupt"), sp = [], Ru = 0, Ms = 1, Qo = 2, Nr = 3, Ls = 4, ei = 5, Or = 6;
function Zr(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s)
    e.__transition = {};
  else if (n in s)
    return;
  ap(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: ip,
    tween: sp,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Ru
  });
}
function Ii(e, t) {
  var n = ht(e, t);
  if (n.state > Ru)
    throw new Error("too late; already scheduled");
  return n;
}
function Et(e, t) {
  var n = ht(e, t);
  if (n.state > Nr)
    throw new Error("too late; already running");
  return n;
}
function ht(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function ap(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Pu(i, 0, n.time);
  function i(l) {
    n.state = Ms, n.timer.restart(s, n.delay, n.time), n.delay <= l && s(l - n.delay);
  }
  function s(l) {
    var d, c, f, p;
    if (n.state !== Ms)
      return u();
    for (d in r)
      if (p = r[d], p.name === n.name) {
        if (p.state === Nr)
          return Rs(s);
        p.state === Ls ? (p.state = Or, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[d]) : +d < t && (p.state = Or, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[d]);
      }
    if (Rs(function() {
      n.state === Nr && (n.state = Ls, n.timer.restart(a, n.delay, n.time), a(l));
    }), n.state = Qo, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Qo) {
      for (n.state = Nr, o = new Array(f = n.tween.length), d = 0, c = -1; d < f; ++d)
        (p = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++c] = p);
      o.length = c + 1;
    }
  }
  function a(l) {
    for (var d = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = ei, 1), c = -1, f = o.length; ++c < f; )
      o[c].call(e, d);
    n.state === ei && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Or, n.timer.stop(), delete r[t];
    for (var l in r)
      return;
    delete e.__transition;
  }
}
function up(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Qo && r.state < ei, r.state = Or, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function lp(e) {
  return this.each(function() {
    up(this, e);
  });
}
function cp(e, t) {
  var n, r;
  return function() {
    var o = Et(this, e), i = o.tween;
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
function dp(e, t, n) {
  var r, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var i = Et(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, u = 0, l = o.length; u < l; ++u)
        if (o[u].name === t) {
          o[u] = a;
          break;
        }
      u === l && o.push(a);
    }
    i.tween = o;
  };
}
function fp(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = ht(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? cp : dp)(n, e, t));
}
function Pi(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Et(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return ht(o, r).value[t];
  };
}
function Mu(e, t) {
  var n;
  return (typeof t == "number" ? Wt : t instanceof _s ? Ss : (n = _s(t)) ? (t = n, Ss) : Sc)(e, t);
}
function pp(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function hp(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function mp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function gp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Dp(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), u;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), u = a + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, a)));
  };
}
function Ep(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), u;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), u = a + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, a)));
  };
}
function yp(e, t) {
  var n = Kr(e), r = n === "transform" ? Wc : Mu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ep : Dp)(n, r, Pi(this, "attr." + e, t)) : t == null ? (n.local ? hp : pp)(n) : (n.local ? gp : mp)(n, r, t));
}
function vp(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function bp(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Cp(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && bp(e, i)), n;
  }
  return o._value = t, o;
}
function Ap(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && vp(e, i)), n;
  }
  return o._value = t, o;
}
function wp(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var r = Kr(e);
  return this.tween(n, (r.local ? Cp : Ap)(r, t));
}
function _p(e, t) {
  return function() {
    Ii(this, e).delay = +t.apply(this, arguments);
  };
}
function Sp(e, t) {
  return t = +t, function() {
    Ii(this, e).delay = t;
  };
}
function Fp(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? _p : Sp)(t, e)) : ht(this.node(), t).delay;
}
function xp(e, t) {
  return function() {
    Et(this, e).duration = +t.apply(this, arguments);
  };
}
function Np(e, t) {
  return t = +t, function() {
    Et(this, e).duration = t;
  };
}
function Op(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? xp : Np)(t, e)) : ht(this.node(), t).duration;
}
function Tp(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    Et(this, e).ease = t;
  };
}
function Bp(e) {
  var t = this._id;
  return arguments.length ? this.each(Tp(t, e)) : ht(this.node(), t).ease;
}
function Ip(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    Et(this, e).ease = n;
  };
}
function Pp(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(Ip(this._id, e));
}
function Rp(e) {
  typeof e != "function" && (e = bu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], u, l = 0; l < s; ++l)
      (u = i[l]) && e.call(u, u.__data__, l, i) && a.push(u);
  return new xt(r, this._parents, this._name, this._id);
}
function Mp(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var u = t[a], l = n[a], d = u.length, c = s[a] = new Array(d), f, p = 0; p < d; ++p)
      (f = u[p] || l[p]) && (c[p] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new xt(s, this._parents, this._name, this._id);
}
function Lp(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function kp(e, t, n) {
  var r, o, i = Lp(t) ? Ii : Et;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function $p(e, t) {
  var n = this._id;
  return arguments.length < 2 ? ht(this.node(), n).on.on(e) : this.each(kp(n, e, t));
}
function Vp(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function jp() {
  return this.on("end.remove", Vp(this._id));
}
function Gp(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Oi(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], u = a.length, l = i[s] = new Array(u), d, c, f = 0; f < u; ++f)
      (d = a[f]) && (c = e.call(d, d.__data__, f, a)) && ("__data__" in d && (c.__data__ = d.__data__), l[f] = c, Zr(l[f], t, n, f, l, ht(d, n)));
  return new xt(i, this._parents, t, n);
}
function Up(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = vu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var u = r[a], l = u.length, d, c = 0; c < l; ++c)
      if (d = u[c]) {
        for (var f = e.call(d, d.__data__, c, u), p, g = ht(d, n), m = 0, h = f.length; m < h; ++m)
          (p = f[m]) && Zr(p, t, n, m, f, g);
        i.push(f), s.push(d);
      }
  return new xt(i, s, t, n);
}
var Wp = ir.prototype.constructor;
function zp() {
  return new Wp(this._groups, this._parents);
}
function Hp(e, t) {
  var n, r, o;
  return function() {
    var i = fn(this, e), s = (this.style.removeProperty(e), fn(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Lu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function qp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = fn(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Yp(e, t, n) {
  var r, o, i;
  return function() {
    var s = fn(this, e), a = n(this), u = a + "";
    return a == null && (u = a = (this.style.removeProperty(e), fn(this, e))), s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, a));
  };
}
function Xp(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var u = Et(this, e), l = u.on, d = u.value[i] == null ? a || (a = Lu(t)) : void 0;
    (l !== n || o !== d) && (r = (n = l).copy()).on(s, o = d), u.on = r;
  };
}
function Kp(e, t, n) {
  var r = (e += "") == "transform" ? Uc : Mu;
  return t == null ? this.styleTween(e, Hp(e, r)).on("end.style." + e, Lu(e)) : typeof t == "function" ? this.styleTween(e, Yp(e, r, Pi(this, "style." + e, t))).each(Xp(this._id, e)) : this.styleTween(e, qp(e, r, t), n).on("end.style." + e, null);
}
function Jp(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Zp(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Jp(e, s, n)), r;
  }
  return i._value = t, i;
}
function Qp(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(r, Zp(e, t, n ?? ""));
}
function eh(e) {
  return function() {
    this.textContent = e;
  };
}
function th(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function nh(e) {
  return this.tween("text", typeof e == "function" ? th(Pi(this, "text", e)) : eh(e == null ? "" : e + ""));
}
function rh(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function oh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && rh(o)), t;
  }
  return r._value = e, r;
}
function ih(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, oh(e));
}
function sh() {
  for (var e = this._name, t = this._id, n = ku(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, u, l = 0; l < a; ++l)
      if (u = s[l]) {
        var d = ht(u, t);
        Zr(u, e, n, l, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new xt(r, this._parents, e, n);
}
function ah() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, u = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var l = Et(this, r), d = l.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(u)), l.on = t;
    }), o === 0 && i();
  });
}
var uh = 0;
function xt(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ku() {
  return ++uh;
}
var At = ir.prototype;
xt.prototype = {
  constructor: xt,
  select: Gp,
  selectAll: Up,
  selectChild: At.selectChild,
  selectChildren: At.selectChildren,
  filter: Rp,
  merge: Mp,
  selection: zp,
  transition: sh,
  call: At.call,
  nodes: At.nodes,
  node: At.node,
  size: At.size,
  empty: At.empty,
  each: At.each,
  on: $p,
  attr: yp,
  attrTween: wp,
  style: Kp,
  styleTween: Qp,
  text: nh,
  textTween: ih,
  remove: jp,
  tween: fp,
  delay: Fp,
  duration: Op,
  ease: Bp,
  easeVarying: Pp,
  end: ah,
  [Symbol.iterator]: At[Symbol.iterator]
};
function lh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var ch = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: lh
};
function dh(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function fh(e) {
  var t, n;
  e instanceof xt ? (t = e._id, e = e._name) : (t = ku(), (n = ch).time = Bi(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, u, l = 0; l < a; ++l)
      (u = s[l]) && Zr(u, e, t, l, s, n || dh(u, t));
  return new xt(r, this._parents, e, t);
}
ir.prototype.interrupt = lp;
ir.prototype.transition = fh;
function ln(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
ln.prototype = {
  constructor: ln,
  scale: function(e) {
    return e === 1 ? this : new ln(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new ln(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Hb = new ln(1, 0, 0);
ln.prototype;
const ph = (e, t) => {
  const r = document.createElement("canvas").getContext("2d");
  if (!r) {
    console.error("2D context not found");
    return;
  }
  return r.font = t || getComputedStyle(document.body).font, Math.ceil(r.measureText(e).width);
}, qb = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep",
  "Curve Basis": "curveBasis"
};
/*! @license DOMPurify 3.1.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.5/LICENSE */
const {
  entries: $u,
  setPrototypeOf: ks,
  isFrozen: hh,
  getPrototypeOf: mh,
  getOwnPropertyDescriptor: gh
} = Object;
let {
  freeze: Je,
  seal: ct,
  create: Vu
} = Object, {
  apply: ti,
  construct: ni
} = typeof Reflect < "u" && Reflect;
Je || (Je = function(t) {
  return t;
});
ct || (ct = function(t) {
  return t;
});
ti || (ti = function(t, n, r) {
  return t.apply(n, r);
});
ni || (ni = function(t, n) {
  return new t(...n);
});
const Dr = it(Array.prototype.forEach), $s = it(Array.prototype.pop), On = it(Array.prototype.push), Tr = it(String.prototype.toLowerCase), fo = it(String.prototype.toString), Vs = it(String.prototype.match), Tn = it(String.prototype.replace), Dh = it(String.prototype.indexOf), Eh = it(String.prototype.trim), dt = it(Object.prototype.hasOwnProperty), qe = it(RegExp.prototype.test), Bn = yh(TypeError);
function it(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return ti(e, t, r);
  };
}
function yh(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return ni(e, n);
  };
}
function ne(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Tr;
  ks && ks(e, null);
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const i = n(o);
      i !== o && (hh(t) || (t[r] = i), o = i);
    }
    e[o] = !0;
  }
  return e;
}
function vh(e) {
  for (let t = 0; t < e.length; t++)
    dt(e, t) || (e[t] = null);
  return e;
}
function Ht(e) {
  const t = Vu(null);
  for (const [n, r] of $u(e))
    dt(e, n) && (Array.isArray(r) ? t[n] = vh(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = Ht(r) : t[n] = r);
  return t;
}
function Er(e, t) {
  for (; e !== null; ) {
    const r = gh(e, t);
    if (r) {
      if (r.get)
        return it(r.get);
      if (typeof r.value == "function")
        return it(r.value);
    }
    e = mh(e);
  }
  function n() {
    return null;
  }
  return n;
}
const js = Je(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), po = Je(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ho = Je(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), bh = Je(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), mo = Je(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ch = Je(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gs = Je(["#text"]), Us = Je(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), go = Je(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ws = Je(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), yr = Je(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ah = ct(/\{\{[\w\W]*|[\w\W]*\}\}/gm), wh = ct(/<%[\w\W]*|[\w\W]*%>/gm), _h = ct(/\${[\w\W]*}/gm), Sh = ct(/^data-[\-\w.\u00B7-\uFFFF]/), Fh = ct(/^aria-[\-\w]+$/), ju = ct(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), xh = ct(/^(?:\w+script|data):/i), Nh = ct(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Gu = ct(/^html$/i), Oh = ct(/^[a-z][.\w]*(-[.\w]+)+$/i);
var zs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: Ah,
  ERB_EXPR: wh,
  TMPLIT_EXPR: _h,
  DATA_ATTR: Sh,
  ARIA_ATTR: Fh,
  IS_ALLOWED_URI: ju,
  IS_SCRIPT_OR_DATA: xh,
  ATTR_WHITESPACE: Nh,
  DOCTYPE_NAME: Gu,
  CUSTOM_ELEMENT: Oh
});
const In = {
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
}, Th = function() {
  return typeof window > "u" ? null : window;
}, Bh = function(t, n) {
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
};
function Uu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Th();
  const t = (W) => Uu(W);
  if (t.version = "3.1.5", t.removed = [], !e || !e.document || e.document.nodeType !== In.document)
    return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const r = n, o = r.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: s,
    Node: a,
    Element: u,
    NodeFilter: l,
    NamedNodeMap: d = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: c,
    DOMParser: f,
    trustedTypes: p
  } = e, g = u.prototype, m = Er(g, "cloneNode"), h = Er(g, "nextSibling"), C = Er(g, "childNodes"), A = Er(g, "parentNode");
  if (typeof s == "function") {
    const W = n.createElement("template");
    W.content && W.content.ownerDocument && (n = W.content.ownerDocument);
  }
  let b, v = "";
  const {
    implementation: E,
    createNodeIterator: _,
    createDocumentFragment: I,
    getElementsByTagName: R
  } = n, {
    importNode: $
  } = r;
  let O = {};
  t.isSupported = typeof $u == "function" && typeof A == "function" && E && E.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: L,
    ERB_EXPR: P,
    TMPLIT_EXPR: N,
    DATA_ATTR: V,
    ARIA_ATTR: z,
    IS_SCRIPT_OR_DATA: K,
    ATTR_WHITESPACE: J,
    CUSTOM_ELEMENT: Y
  } = zs;
  let {
    IS_ALLOWED_URI: se
  } = zs, q = null;
  const ce = ne({}, [...js, ...po, ...ho, ...mo, ...Gs]);
  let Z = null;
  const ge = ne({}, [...Us, ...go, ...Ws, ...yr]);
  let k = Object.seal(Vu(null, {
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
  })), ee = null, be = null, je = !0, le = !0, de = !1, Ae = !0, we = !1, B = !0, ae = !1, M = !1, Le = !1, Fe = !1, Oe = !1, _e = !1, ze = !0, Ge = !1;
  const st = "user-content-";
  let Ze = !0, G = !1, ue = {}, Ce = null;
  const Ue = ne({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let yt = null;
  const kt = ne({}, ["audio", "video", "img", "source", "image", "track"]);
  let rn = null;
  const on = ne({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), sn = "http://www.w3.org/1998/Math/MathML", vt = "http://www.w3.org/2000/svg", xe = "http://www.w3.org/1999/xhtml";
  let Ot = xe, an = !1, bn = null;
  const pr = ne({}, [sn, vt, xe], fo);
  let $t = null;
  const so = ["application/xhtml+xml", "text/html"], ao = "text/html";
  let Ne = null, bt = null;
  const uo = n.createElement("form"), Cn = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Tt = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(bt && bt === y)) {
      if ((!y || typeof y != "object") && (y = {}), y = Ht(y), $t = // eslint-disable-next-line unicorn/prefer-includes
      so.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? ao : y.PARSER_MEDIA_TYPE, Ne = $t === "application/xhtml+xml" ? fo : Tr, q = dt(y, "ALLOWED_TAGS") ? ne({}, y.ALLOWED_TAGS, Ne) : ce, Z = dt(y, "ALLOWED_ATTR") ? ne({}, y.ALLOWED_ATTR, Ne) : ge, bn = dt(y, "ALLOWED_NAMESPACES") ? ne({}, y.ALLOWED_NAMESPACES, fo) : pr, rn = dt(y, "ADD_URI_SAFE_ATTR") ? ne(
        Ht(on),
        // eslint-disable-line indent
        y.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        Ne
        // eslint-disable-line indent
      ) : on, yt = dt(y, "ADD_DATA_URI_TAGS") ? ne(
        Ht(kt),
        // eslint-disable-line indent
        y.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        Ne
        // eslint-disable-line indent
      ) : kt, Ce = dt(y, "FORBID_CONTENTS") ? ne({}, y.FORBID_CONTENTS, Ne) : Ue, ee = dt(y, "FORBID_TAGS") ? ne({}, y.FORBID_TAGS, Ne) : {}, be = dt(y, "FORBID_ATTR") ? ne({}, y.FORBID_ATTR, Ne) : {}, ue = dt(y, "USE_PROFILES") ? y.USE_PROFILES : !1, je = y.ALLOW_ARIA_ATTR !== !1, le = y.ALLOW_DATA_ATTR !== !1, de = y.ALLOW_UNKNOWN_PROTOCOLS || !1, Ae = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, we = y.SAFE_FOR_TEMPLATES || !1, B = y.SAFE_FOR_XML !== !1, ae = y.WHOLE_DOCUMENT || !1, Fe = y.RETURN_DOM || !1, Oe = y.RETURN_DOM_FRAGMENT || !1, _e = y.RETURN_TRUSTED_TYPE || !1, Le = y.FORCE_BODY || !1, ze = y.SANITIZE_DOM !== !1, Ge = y.SANITIZE_NAMED_PROPS || !1, Ze = y.KEEP_CONTENT !== !1, G = y.IN_PLACE || !1, se = y.ALLOWED_URI_REGEXP || ju, Ot = y.NAMESPACE || xe, k = y.CUSTOM_ELEMENT_HANDLING || {}, y.CUSTOM_ELEMENT_HANDLING && Cn(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (k.tagNameCheck = y.CUSTOM_ELEMENT_HANDLING.tagNameCheck), y.CUSTOM_ELEMENT_HANDLING && Cn(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (k.attributeNameCheck = y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (k.allowCustomizedBuiltInElements = y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), we && (le = !1), Oe && (Fe = !0), ue && (q = ne({}, Gs), Z = [], ue.html === !0 && (ne(q, js), ne(Z, Us)), ue.svg === !0 && (ne(q, po), ne(Z, go), ne(Z, yr)), ue.svgFilters === !0 && (ne(q, ho), ne(Z, go), ne(Z, yr)), ue.mathMl === !0 && (ne(q, mo), ne(Z, Ws), ne(Z, yr))), y.ADD_TAGS && (q === ce && (q = Ht(q)), ne(q, y.ADD_TAGS, Ne)), y.ADD_ATTR && (Z === ge && (Z = Ht(Z)), ne(Z, y.ADD_ATTR, Ne)), y.ADD_URI_SAFE_ATTR && ne(rn, y.ADD_URI_SAFE_ATTR, Ne), y.FORBID_CONTENTS && (Ce === Ue && (Ce = Ht(Ce)), ne(Ce, y.FORBID_CONTENTS, Ne)), Ze && (q["#text"] = !0), ae && ne(q, ["html", "head", "body"]), q.table && (ne(q, ["tbody"]), delete ee.tbody), y.TRUSTED_TYPES_POLICY) {
        if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Bn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Bn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        b = y.TRUSTED_TYPES_POLICY, v = b.createHTML("");
      } else
        b === void 0 && (b = Bh(p, o)), b !== null && typeof v == "string" && (v = b.createHTML(""));
      Je && Je(y), bt = y;
    }
  }, An = ne({}, ["mi", "mo", "mn", "ms", "mtext"]), hr = ne({}, ["foreignobject", "annotation-xml"]), mr = ne({}, ["title", "style", "font", "a", "script"]), wn = ne({}, [...po, ...ho, ...bh]), _n = ne({}, [...mo, ...Ch]), H = function(y) {
    let T = A(y);
    (!T || !T.tagName) && (T = {
      namespaceURI: Ot,
      tagName: "template"
    });
    const j = Tr(y.tagName), De = Tr(T.tagName);
    return bn[y.namespaceURI] ? y.namespaceURI === vt ? T.namespaceURI === xe ? j === "svg" : T.namespaceURI === sn ? j === "svg" && (De === "annotation-xml" || An[De]) : !!wn[j] : y.namespaceURI === sn ? T.namespaceURI === xe ? j === "math" : T.namespaceURI === vt ? j === "math" && hr[De] : !!_n[j] : y.namespaceURI === xe ? T.namespaceURI === vt && !hr[De] || T.namespaceURI === sn && !An[De] ? !1 : !_n[j] && (mr[j] || !wn[j]) : !!($t === "application/xhtml+xml" && bn[y.namespaceURI]) : !1;
  }, te = function(y) {
    On(t.removed, {
      element: y
    });
    try {
      y.parentNode.removeChild(y);
    } catch {
      y.remove();
    }
  }, Ie = function(y, T) {
    try {
      On(t.removed, {
        attribute: T.getAttributeNode(y),
        from: T
      });
    } catch {
      On(t.removed, {
        attribute: null,
        from: T
      });
    }
    if (T.removeAttribute(y), y === "is" && !Z[y])
      if (Fe || Oe)
        try {
          te(T);
        } catch {
        }
      else
        try {
          T.setAttribute(y, "");
        } catch {
        }
  }, Bt = function(y) {
    let T = null, j = null;
    if (Le)
      y = "<remove></remove>" + y;
    else {
      const ke = Vs(y, /^[\r\n\t ]+/);
      j = ke && ke[0];
    }
    $t === "application/xhtml+xml" && Ot === xe && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const De = b ? b.createHTML(y) : y;
    if (Ot === xe)
      try {
        T = new f().parseFromString(De, $t);
      } catch {
      }
    if (!T || !T.documentElement) {
      T = E.createDocument(Ot, "template", null);
      try {
        T.documentElement.innerHTML = an ? v : De;
      } catch {
      }
    }
    const We = T.body || T.documentElement;
    return y && j && We.insertBefore(n.createTextNode(j), We.childNodes[0] || null), Ot === xe ? R.call(T, ae ? "html" : "body")[0] : ae ? T.documentElement : We;
  }, Sn = function(y) {
    return _.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Fn = function(y) {
    return y instanceof c && (typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || !(y.attributes instanceof d) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function");
  }, Es = function(y) {
    return typeof a == "function" && y instanceof a;
  }, Ct = function(y, T, j) {
    O[y] && Dr(O[y], (De) => {
      De.call(t, T, j, bt);
    });
  }, ys = function(y) {
    let T = null;
    if (Ct("beforeSanitizeElements", y, null), Fn(y))
      return te(y), !0;
    const j = Ne(y.nodeName);
    if (Ct("uponSanitizeElement", y, {
      tagName: j,
      allowedTags: q
    }), y.hasChildNodes() && !Es(y.firstElementChild) && qe(/<[/\w]/g, y.innerHTML) && qe(/<[/\w]/g, y.textContent) || y.nodeType === In.progressingInstruction || B && y.nodeType === In.comment && qe(/<[/\w]/g, y.data))
      return te(y), !0;
    if (!q[j] || ee[j]) {
      if (!ee[j] && bs(j) && (k.tagNameCheck instanceof RegExp && qe(k.tagNameCheck, j) || k.tagNameCheck instanceof Function && k.tagNameCheck(j)))
        return !1;
      if (Ze && !Ce[j]) {
        const De = A(y) || y.parentNode, We = C(y) || y.childNodes;
        if (We && De) {
          const ke = We.length;
          for (let Qe = ke - 1; Qe >= 0; --Qe) {
            const mt = m(We[Qe], !0);
            mt.__removalCount = (y.__removalCount || 0) + 1, De.insertBefore(mt, h(y));
          }
        }
      }
      return te(y), !0;
    }
    return y instanceof u && !H(y) || (j === "noscript" || j === "noembed" || j === "noframes") && qe(/<\/no(script|embed|frames)/i, y.innerHTML) ? (te(y), !0) : (we && y.nodeType === In.text && (T = y.textContent, Dr([L, P, N], (De) => {
      T = Tn(T, De, " ");
    }), y.textContent !== T && (On(t.removed, {
      element: y.cloneNode()
    }), y.textContent = T)), Ct("afterSanitizeElements", y, null), !1);
  }, vs = function(y, T, j) {
    if (ze && (T === "id" || T === "name") && (j in n || j in uo))
      return !1;
    if (!(le && !be[T] && qe(V, T))) {
      if (!(je && qe(z, T))) {
        if (!Z[T] || be[T]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(bs(y) && (k.tagNameCheck instanceof RegExp && qe(k.tagNameCheck, y) || k.tagNameCheck instanceof Function && k.tagNameCheck(y)) && (k.attributeNameCheck instanceof RegExp && qe(k.attributeNameCheck, T) || k.attributeNameCheck instanceof Function && k.attributeNameCheck(T)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            T === "is" && k.allowCustomizedBuiltInElements && (k.tagNameCheck instanceof RegExp && qe(k.tagNameCheck, j) || k.tagNameCheck instanceof Function && k.tagNameCheck(j)))
          )
            return !1;
        } else if (!rn[T]) {
          if (!qe(se, Tn(j, J, ""))) {
            if (!((T === "src" || T === "xlink:href" || T === "href") && y !== "script" && Dh(j, "data:") === 0 && yt[y])) {
              if (!(de && !qe(K, Tn(j, J, "")))) {
                if (j)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, bs = function(y) {
    return y !== "annotation-xml" && Vs(y, Y);
  }, Cs = function(y) {
    Ct("beforeSanitizeAttributes", y, null);
    const {
      attributes: T
    } = y;
    if (!T)
      return;
    const j = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Z
    };
    let De = T.length;
    for (; De--; ) {
      const We = T[De], {
        name: ke,
        namespaceURI: Qe,
        value: mt
      } = We, xn = Ne(ke);
      let He = ke === "value" ? mt : Eh(mt);
      if (j.attrName = xn, j.attrValue = He, j.keepAttr = !0, j.forceKeepAttr = void 0, Ct("uponSanitizeAttribute", y, j), He = j.attrValue, j.forceKeepAttr || (Ie(ke, y), !j.keepAttr))
        continue;
      if (!Ae && qe(/\/>/i, He)) {
        Ie(ke, y);
        continue;
      }
      if (B && qe(/((--!?|])>)|<\/(style|title)/i, He)) {
        Ie(ke, y);
        continue;
      }
      we && Dr([L, P, N], (ws) => {
        He = Tn(He, ws, " ");
      });
      const As = Ne(y.nodeName);
      if (vs(As, xn, He)) {
        if (Ge && (xn === "id" || xn === "name") && (Ie(ke, y), He = st + He), b && typeof p == "object" && typeof p.getAttributeType == "function" && !Qe)
          switch (p.getAttributeType(As, xn)) {
            case "TrustedHTML": {
              He = b.createHTML(He);
              break;
            }
            case "TrustedScriptURL": {
              He = b.createScriptURL(He);
              break;
            }
          }
        try {
          Qe ? y.setAttributeNS(Qe, ke, He) : y.setAttribute(ke, He), Fn(y) ? te(y) : $s(t.removed);
        } catch {
        }
      }
    }
    Ct("afterSanitizeAttributes", y, null);
  }, _c = function W(y) {
    let T = null;
    const j = Sn(y);
    for (Ct("beforeSanitizeShadowDOM", y, null); T = j.nextNode(); )
      Ct("uponSanitizeShadowNode", T, null), !ys(T) && (T.content instanceof i && W(T.content), Cs(T));
    Ct("afterSanitizeShadowDOM", y, null);
  };
  return t.sanitize = function(W) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, T = null, j = null, De = null, We = null;
    if (an = !W, an && (W = "<!-->"), typeof W != "string" && !Es(W))
      if (typeof W.toString == "function") {
        if (W = W.toString(), typeof W != "string")
          throw Bn("dirty is not a string, aborting");
      } else
        throw Bn("toString is not a function");
    if (!t.isSupported)
      return W;
    if (M || Tt(y), t.removed = [], typeof W == "string" && (G = !1), G) {
      if (W.nodeName) {
        const mt = Ne(W.nodeName);
        if (!q[mt] || ee[mt])
          throw Bn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (W instanceof a)
      T = Bt("<!---->"), j = T.ownerDocument.importNode(W, !0), j.nodeType === In.element && j.nodeName === "BODY" || j.nodeName === "HTML" ? T = j : T.appendChild(j);
    else {
      if (!Fe && !we && !ae && // eslint-disable-next-line unicorn/prefer-includes
      W.indexOf("<") === -1)
        return b && _e ? b.createHTML(W) : W;
      if (T = Bt(W), !T)
        return Fe ? null : _e ? v : "";
    }
    T && Le && te(T.firstChild);
    const ke = Sn(G ? W : T);
    for (; De = ke.nextNode(); )
      ys(De) || (De.content instanceof i && _c(De.content), Cs(De));
    if (G)
      return W;
    if (Fe) {
      if (Oe)
        for (We = I.call(T.ownerDocument); T.firstChild; )
          We.appendChild(T.firstChild);
      else
        We = T;
      return (Z.shadowroot || Z.shadowrootmode) && (We = $.call(r, We, !0)), We;
    }
    let Qe = ae ? T.outerHTML : T.innerHTML;
    return ae && q["!doctype"] && T.ownerDocument && T.ownerDocument.doctype && T.ownerDocument.doctype.name && qe(Gu, T.ownerDocument.doctype.name) && (Qe = "<!DOCTYPE " + T.ownerDocument.doctype.name + `>
` + Qe), we && Dr([L, P, N], (mt) => {
      Qe = Tn(Qe, mt, " ");
    }), b && _e ? b.createHTML(Qe) : Qe;
  }, t.setConfig = function() {
    let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Tt(W), M = !0;
  }, t.clearConfig = function() {
    bt = null, M = !1;
  }, t.isValidAttribute = function(W, y, T) {
    bt || Tt({});
    const j = Ne(W), De = Ne(y);
    return vs(j, De, T);
  }, t.addHook = function(W, y) {
    typeof y == "function" && (O[W] = O[W] || [], On(O[W], y));
  }, t.removeHook = function(W) {
    if (O[W])
      return $s(O[W]);
  }, t.removeHooks = function(W) {
    O[W] && (O[W] = []);
  }, t.removeAllHooks = function() {
    O = {};
  }, t;
}
var Yb = Uu(), Ih = /* @__PURE__ */ w.createContext({});
const Qr = Ih;
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ri.apply(this, arguments);
}
function Ph(e) {
  var t, n, r, o, i = e.className, s = e.x, a = e.y, u = e.dx, l = e.dy, d = e.type, c = d === void 0 ? "elbow" : d, f = e.stroke, p = f === void 0 ? "#222" : f, g = e.pathProps, m = w.useContext(Qr), h = s ?? ((t = m.x) != null ? t : 0), C = a ?? ((n = m.y) != null ? n : 0), A = u ?? ((r = m.dx) != null ? r : 0), b = l ?? ((o = m.dy) != null ? o : 0), v = h, E = C, _ = h + A, I = C + b;
  if (c === "elbow")
    if (Math.abs(A) <= Math.abs(b)) {
      v = _;
      var R = b > 0 ? 1 : -1;
      E = C + R * Math.abs(v - h);
    } else {
      E = I;
      var $ = A > 0 ? 1 : -1;
      v = h + $ * Math.abs(E - C);
    }
  return /* @__PURE__ */ F.createElement("path", ri({
    className: Ai("visx-annotation-connector", i),
    strokeWidth: 1,
    stroke: p,
    fill: "transparent",
    pointerEvents: "none",
    d: "M" + h + "," + C + (c === "elbow" ? "L" + v + "," + E : "") + "L" + _ + "," + I
  }, g));
}
Ph.propTypes = {
  className: re.string,
  type: re.oneOf(["line", "elbow"]),
  stroke: re.string
};
function cn() {
  return cn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, cn.apply(this, arguments);
}
function Wu(e) {
  var t = e.anchorLineOrientation, n = e.anchorLineStroke, r = e.verticalAnchor, o = e.horizontalAnchor, i = e.width, s = e.height, a = {
    stroke: n,
    strokeWidth: 2
  };
  return /* @__PURE__ */ F.createElement(F.Fragment, null, t === "horizontal" && r === "start" && /* @__PURE__ */ F.createElement("line", cn({}, a, {
    x1: 0,
    x2: i,
    y1: 0,
    y2: 0
  })), t === "horizontal" && r === "end" && /* @__PURE__ */ F.createElement("line", cn({}, a, {
    x1: 0,
    x2: i,
    y1: s,
    y2: s
  })), t === "vertical" && o === "start" && /* @__PURE__ */ F.createElement("line", cn({}, a, {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: s
  })), t === "vertical" && o === "end" && /* @__PURE__ */ F.createElement("line", cn({}, a, {
    x1: i,
    x2: i,
    y1: 0,
    y2: s
  })));
}
Wu.propTypes = {
  anchorLineOrientation: re.oneOf(["horizontal", "vertical"]).isRequired,
  anchorLineStroke: re.string.isRequired,
  width: re.number.isRequired,
  height: re.number.isRequired
};
function oi() {
  return oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, oi.apply(this, arguments);
}
var Hs = {
  display: "inline-block"
};
function Rh(e) {
  var t = e.anchorLineStroke, n = t === void 0 ? "#222" : t, r = e.children, o = e.className, i = e.containerStyle, s = e.horizontalAnchor, a = e.resizeObserverPolyfill, u = e.showAnchorLine, l = u === void 0 ? !0 : u, d = e.verticalAnchor, c = e.x, f = e.y, p = Yc({
    polyfill: a
  }), g = p[0], m = p[1], h = m.width, C = m.height, A = w.useContext(Qr), b = A.x, v = b === void 0 ? 0 : b, E = A.y, _ = E === void 0 ? 0 : E, I = A.dx, R = I === void 0 ? 0 : I, $ = A.dy, O = $ === void 0 ? 0 : $, L = s || (Math.abs(R) < Math.abs(O) ? "middle" : R > 0 ? "start" : "end"), P = d || (Math.abs(R) > Math.abs(O) ? "middle" : O > 0 ? "start" : "end"), N = w.useMemo(function() {
    var V = c ?? v + R, z = f ?? _ + O;
    return L === "middle" && (V -= h / 2), L === "end" && (V -= h), P === "middle" && (z -= C / 2), P === "end" && (z -= C), {
      x: V,
      y: z
    };
  }, [c, v, R, f, _, O, L, P, h, C]);
  return /* @__PURE__ */ F.createElement(Go, {
    top: N.y,
    left: N.x,
    pointerEvents: "none",
    className: Ai("visx-annotationlabel", o)
  }, /* @__PURE__ */ F.createElement("foreignObject", {
    width: h,
    height: C,
    overflow: "visible"
  }, /* @__PURE__ */ F.createElement("div", {
    ref: g,
    style: i ? oi({}, Hs, i) : Hs
  }, r)), l && /* @__PURE__ */ F.createElement(Wu, {
    anchorLineOrientation: Math.abs(R) > Math.abs(O) ? "vertical" : "horizontal",
    anchorLineStroke: n,
    verticalAnchor: P,
    horizontalAnchor: L,
    width: h,
    height: C
  }));
}
Rh.propTypes = {
  children: re.node
};
var Mh = ["className", "x", "y", "stroke", "radius"];
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
function Lh(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function kh(e) {
  var t = e.className, n = e.x, r = e.y, o = e.stroke, i = o === void 0 ? "#222" : o, s = e.radius, a = s === void 0 ? 16 : s, u = Lh(e, Mh), l = w.useContext(Qr);
  return /* @__PURE__ */ F.createElement("circle", ii({
    className: Ai("visx-annotation-subject", "visx-annotation-subject-circle", t),
    cx: n || l.x,
    cy: r || l.y,
    r: a,
    fill: "transparent",
    pointerEvents: "none",
    stroke: i
  }, u));
}
kh.propTypes = {
  className: re.string,
  stroke: re.string,
  radius: re.number
};
function zu(e) {
  var t = e.x, n = e.y, r = e.dx, o = e.dy, i = e.children, s = w.useMemo(function() {
    return {
      x: t,
      y: n,
      dx: r,
      dy: o
    };
  }, [t, n, r, o]);
  return /* @__PURE__ */ F.createElement(Qr.Provider, {
    value: s
  }, i);
}
zu.propTypes = {
  children: re.node.isRequired
};
const $h = /* @__PURE__ */ cu(id), Vh = /* @__PURE__ */ cu(md);
var Ri = {};
Ri.__esModule = !0;
Ri.default = jh;
var vr = w;
function jh(e) {
  var t = (0, vr.useState)(e), n = t[0], r = t[1], o = (0, vr.useRef)(null), i = (0, vr.useCallback)(function(s, a) {
    o.current = a || null, r(s);
  }, [r]);
  return (0, vr.useLayoutEffect)(function() {
    o.current && (o.current(n), o.current = null);
  }, [n]), [n, i];
}
var Mi = {}, Li = {};
Li.__esModule = !0;
Li.default = Gh;
function Gh(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var ki = {};
ki.__esModule = !0;
ki.default = zh;
function Uh(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Wh(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wh(e, t) {
  if (e) {
    if (typeof e == "string")
      return qs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return qs(e, t);
  }
}
function qs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function zh(e, t) {
  for (var n = e, r = 1 / 0, o = Uh(t), i; !(i = o()).done; ) {
    var s = i.value, a = Math.sqrt(Math.pow(s.x - e.x, 2) + Math.pow(s.y - e.y, 2));
    a < r && (r = a, n = {
      x: s.x,
      y: s.y
    });
  }
  return n;
}
Mi.__esModule = !0;
Mi.default = qh;
var Ys = Hu(Li), Hh = Hu(ki);
function Hu(e) {
  return e && e.__esModule ? e : { default: e };
}
function qh(e, t, n) {
  var r, o, i, s;
  return n === void 0 && (n = {}), t.length > 0 ? (0, Hh.default)(e, t) : {
    x: (0, Ys.default)(e.x, (r = n.xMin) != null ? r : -1 / 0, (o = n.xMax) != null ? o : 1 / 0),
    y: (0, Ys.default)(e.y, (i = n.yMin) != null ? i : -1 / 0, (s = n.yMax) != null ? s : 1 / 0)
  };
}
var $i = {};
$i.__esModule = !0;
$i.default = Kh;
var Yh = w;
function Xh(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var r = [], o = e.getTotalLength(), i = 0; i <= o; i += n) {
    var s = e.getPointAtLength(i), a = s.matrixTransform(t);
    r.push(a);
  }
  return r;
}
function Kh(e) {
  var t = (0, Yh.useMemo)(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return Xh(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
var Xs = Qh, Vt = w, un = $h, Ks = Vh, Jh = Vi(Ri), Js = Vi(Mi), Zh = Vi($i);
function Vi(e) {
  return e && e.__esModule ? e : { default: e };
}
function gt() {
  return gt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, gt.apply(this, arguments);
}
function Qh(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, r = n === void 0 ? !1 : n, o = t.snapToPointer, i = o === void 0 ? !0 : o, s = t.onDragEnd, a = t.onDragMove, u = t.onDragStart, l = t.x, d = t.y, c = t.dx, f = t.dy, p = t.isDragging, g = t.restrict, m = g === void 0 ? {} : g, h = t.restrictToPath, C = (0, Vt.useRef)({
    x: l,
    y: d,
    dx: c,
    dy: f
  }), A = (0, Jh.default)({
    x: l,
    y: d,
    dx: c ?? 0,
    dy: f ?? 0,
    isDragging: !1
  }), b = A[0], v = A[1], E = (0, Vt.useState)(new un.Point({
    x: 0,
    y: 0
  })), _ = E[0], I = E[1];
  (0, Vt.useEffect)(function() {
    (C.current.x !== l || C.current.y !== d || C.current.dx !== c || C.current.dy !== f) && (C.current = {
      x: l,
      y: d,
      dx: c,
      dy: f
    }, v(function(P) {
      return gt({}, P, {
        x: l,
        y: d,
        dx: c ?? 0,
        dy: f ?? 0
      });
    }));
  }), (0, Vt.useEffect)(function() {
    p !== void 0 && b.isDragging !== p && v(function(P) {
      return gt({}, P, {
        isDragging: p
      });
    });
  }, [b.isDragging, p, v]);
  var R = (0, Zh.default)(h), $ = (0, Vt.useCallback)(function(P) {
    P.persist(), v(function(N) {
      var V = N.x, z = V === void 0 ? 0 : V, K = N.y, J = K === void 0 ? 0 : K, Y = N.dx, se = N.dy, q = new un.Point({
        x: (z || 0) + Y,
        y: (J || 0) + se
      }), ce = (0, Ks.localPoint)(P) || new un.Point({
        x: 0,
        y: 0
      }), Z = i ? ce : q, ge = (0, Js.default)(Z, R, m);
      return I((0, un.subtractPoints)(q, ce)), {
        isDragging: !0,
        dx: r ? 0 : N.dx,
        dy: r ? 0 : N.dy,
        x: r ? ge.x : ge.x - N.dx,
        y: r ? ge.y : ge.y - N.dy
      };
    }, u && function(N) {
      u(gt({}, N, {
        event: P
      }));
    });
  }, [u, r, m, R, v, i]), O = (0, Vt.useCallback)(function(P) {
    P.persist(), v(function(N) {
      if (!N.isDragging)
        return N;
      var V = N.x, z = V === void 0 ? 0 : V, K = N.y, J = K === void 0 ? 0 : K, Y = (0, Ks.localPoint)(P) || new un.Point({
        x: 0,
        y: 0
      }), se = i ? Y : (0, un.sumPoints)(Y, _), q = (0, Js.default)(se, R, m);
      return gt({}, N, {
        dx: q.x - z,
        dy: q.y - J
      });
    }, a && function(N) {
      N.isDragging && a(gt({}, N, {
        event: P
      }));
    });
  }, [v, a, i, _, R, m]), L = (0, Vt.useCallback)(function(P) {
    P.persist(), v(function(N) {
      return gt({}, N, {
        isDragging: !1
      });
    }, s && function(N) {
      s(gt({}, N, {
        event: P
      }));
    });
  }, [s, v]);
  return gt({}, b, {
    dragEnd: L,
    dragMove: O,
    dragStart: $
  });
}
function $r() {
  return $r = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $r.apply(this, arguments);
}
var Zs = {
  r: 10,
  fill: "transparent",
  stroke: "#777",
  strokeDasharray: "4,2",
  strokeWidth: 2
};
function em(e) {
  var t = e.canEditLabel, n = t === void 0 ? !0 : t, r = e.canEditSubject, o = r === void 0 ? !0 : r, i = e.children, s = e.dx, a = s === void 0 ? 0 : s, u = e.dy, l = u === void 0 ? 0 : u, d = e.height, c = e.labelDragHandleProps, f = e.onDragEnd, p = e.onDragMove, g = e.onDragStart, m = e.subjectDragHandleProps, h = e.width, C = e.x, A = C === void 0 ? 0 : C, b = e.y, v = b === void 0 ? 0 : b, E = w.useRef(), _ = w.useRef(), I = w.useCallback(function(P) {
    var N = P.event;
    if (g) {
      var V, z, K, J, Y, se, q, ce;
      g({
        event: N,
        x: A + ((V = (z = E.current) == null ? void 0 : z.dx) != null ? V : 0),
        y: v + ((K = (J = E.current) == null ? void 0 : J.dy) != null ? K : 0),
        dx: a + ((Y = (se = _.current) == null ? void 0 : se.dx) != null ? Y : 0),
        dy: l + ((q = (ce = _.current) == null ? void 0 : ce.dy) != null ? q : 0)
      });
    }
  }, [a, l, g, A, v]), R = w.useCallback(function(P) {
    var N = P.event;
    if (p) {
      var V, z, K, J, Y, se, q, ce;
      p({
        event: N,
        x: A + ((V = (z = E.current) == null ? void 0 : z.dx) != null ? V : 0),
        y: v + ((K = (J = E.current) == null ? void 0 : J.dy) != null ? K : 0),
        dx: a + ((Y = (se = _.current) == null ? void 0 : se.dx) != null ? Y : 0),
        dy: l + ((q = (ce = _.current) == null ? void 0 : ce.dy) != null ? q : 0)
      });
    }
  }, [a, l, p, A, v]), $ = w.useCallback(function(P) {
    var N = P.event;
    if (f) {
      var V, z, K, J, Y, se, q, ce;
      f({
        event: N,
        x: A + ((V = (z = E.current) == null ? void 0 : z.dx) != null ? V : 0),
        y: v + ((K = (J = E.current) == null ? void 0 : J.dy) != null ? K : 0),
        dx: a + ((Y = (se = _.current) == null ? void 0 : se.dx) != null ? Y : 0),
        dy: l + ((q = (ce = _.current) == null ? void 0 : ce.dy) != null ? q : 0)
      });
    }
  }, [a, l, f, A, v]), O = Xs({
    onDragStart: I,
    onDragMove: R,
    onDragEnd: $,
    x: A,
    y: v
  }), L = Xs({
    onDragStart: I,
    onDragMove: R,
    onDragEnd: $,
    x: a,
    y: l
  });
  return E.current = O, _.current = L, /* @__PURE__ */ F.createElement(F.Fragment, null, /* @__PURE__ */ F.createElement(zu, {
    x: A + O.dx,
    y: v + O.dy,
    dx: a + L.dx,
    dy: l + L.dy
  }, i), O.isDragging && /* @__PURE__ */ F.createElement("rect", {
    width: h,
    height: d,
    onMouseMove: O.dragMove,
    onMouseUp: O.dragEnd,
    fill: "transparent"
  }), o && /* @__PURE__ */ F.createElement("circle", $r({
    cx: A,
    cy: v,
    transform: "translate(" + O.dx + "," + O.dy + ")",
    onMouseMove: O.dragMove,
    onMouseUp: O.dragEnd,
    onMouseDown: O.dragStart,
    onTouchStart: O.dragStart,
    onTouchMove: O.dragMove,
    onTouchEnd: O.dragEnd,
    cursor: O.isDragging ? "grabbing" : "grab"
  }, Zs, m)), L.isDragging && /* @__PURE__ */ F.createElement("rect", {
    width: h,
    height: d,
    onMouseMove: L.dragMove,
    onMouseUp: L.dragEnd,
    fill: "transparent"
  }), n && /* @__PURE__ */ F.createElement("circle", $r({
    cx: A + O.dx + a,
    cy: v + O.dy + l,
    transform: "translate(" + L.dx + "," + L.dy + ")",
    onMouseMove: L.dragMove,
    onMouseUp: L.dragEnd,
    onMouseDown: L.dragStart,
    onTouchStart: L.dragStart,
    onTouchMove: L.dragMove,
    onTouchEnd: L.dragEnd,
    cursor: L.isDragging ? "grabbing" : "grab"
  }, Zs, c)));
}
em.propTypes = {
  width: re.number.isRequired,
  height: re.number.isRequired,
  children: re.node.isRequired,
  canEditLabel: re.bool,
  canEditSubject: re.bool,
  onDragStart: re.func,
  onDragMove: re.func,
  onDragEnd: re.func
};
var tm = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
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
function nm(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function qu(e) {
  var t = e.id, n = e.markerWidth, r = n === void 0 ? 3 : n, o = e.markerHeight, i = o === void 0 ? 3 : o, s = e.markerUnits, a = s === void 0 ? "userSpaceOnUse" : s, u = e.children, l = nm(e, tm);
  return /* @__PURE__ */ F.createElement("defs", null, /* @__PURE__ */ F.createElement("marker", si({
    id: t,
    markerWidth: r,
    markerHeight: i,
    markerUnits: a
  }, l), u));
}
qu.propTypes = {
  id: re.string.isRequired,
  size: re.number,
  markerWidth: re.oneOfType([re.string, re.number]),
  markerHeight: re.oneOfType([re.string, re.number]),
  markerUnits: re.string,
  refX: re.oneOfType([re.string, re.number]),
  refY: re.oneOfType([re.string, re.number]),
  strokeWidth: re.number,
  children: re.node.isRequired
};
var rm = ["id", "size", "strokeWidth"];
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
function om(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Xb(e) {
  var t = e.id, n = e.size, r = n === void 0 ? 9 : n, o = e.strokeWidth, i = o === void 0 ? 1 : o, s = om(e, rm), a = r + i * 2, u = r, l = a / 2, d = "0 0, " + r + " " + r / 2 + ", 0 " + r;
  return /* @__PURE__ */ F.createElement(qu, ai({
    id: t,
    markerWidth: a,
    markerHeight: a,
    refX: u,
    refY: l,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: i
  }, s), /* @__PURE__ */ F.createElement("g", {
    transform: "translate(" + i + ", " + i + ")"
  }, /* @__PURE__ */ F.createElement("polyline", {
    points: d
  })));
}
const wt = 1, im = 1, sm = 576, Kb = ({
  labels: e,
  colors: t,
  config: n,
  dimensions: r,
  parentPaddingToSubtract: o = 0
}) => {
  const { uid: i, legend: s, type: a } = n, { tickRotation: u, position: l, style: d, subStyle: c, hideBorder: f } = s, p = c === "linear blocks";
  let [g] = r;
  const m = g <= sm, h = Number(g) - o - wt * 2 - im * 2, C = `${i}-${Date.now()}`, A = t == null ? void 0 : t.length, b = (e || []).reduce((P, N) => P.length > String(N).length ? P : N, ""), v = 20;
  let E = 50;
  const _ = ph(b, "normal 14px sans-serif"), I = Number(u) || 0, R = I * (Math.PI / 180), $ = E + Number(_) * Math.sin(R), O = t.map((P, N) => {
    const V = N / (t.length - 1) * 100;
    return /* @__PURE__ */ F.createElement("stop", { key: N, offset: `${V}%`, style: { stopColor: P, stopOpacity: 1 } });
  }), L = e.map((P, N) => {
    const V = h / A, z = N * V + V + wt, K = I ? "end" : "middle", J = I ? "middle" : "start", Y = N === e.length - 1;
    return /* @__PURE__ */ F.createElement(Go, { top: wt }, !Y && !p && /* @__PURE__ */ F.createElement("line", { x1: z, x2: z, y1: 30, y2: v, stroke: "black" }), /* @__PURE__ */ F.createElement(
      Fc,
      {
        angle: -u,
        x: z,
        y: v,
        dy: 10,
        dx: -V / 2,
        fontSize: m ? "12" : "14",
        textAnchor: K,
        verticalAnchor: J,
        width: V,
        lineHeight: "14"
      },
      P
    ));
  });
  if (!(a === "map" && l === "side" || !l) && !(a === "chart" && (l === "left" || l === "right" || !l)) && d === "gradient")
    return /* @__PURE__ */ F.createElement(
      "svg",
      {
        style: { overflow: "visible", width: "100%", marginTop: 10, marginBottom: f ? 10 : 0 },
        height: $
      },
      /* @__PURE__ */ F.createElement("rect", { x: 0, y: 0, width: h + wt * 2, height: v + wt * 2, fill: "#d3d3d3" }),
      /* @__PURE__ */ F.createElement("linearGradient", { id: `gradient-smooth-${C}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%" }, O),
      c === "smooth" && /* @__PURE__ */ F.createElement(
        "rect",
        {
          x: wt,
          y: wt,
          width: h,
          height: v,
          fill: `url(#gradient-smooth-${C})`
        }
      ),
      c === "linear blocks" && t.map((P, N) => {
        const V = h / A, z = N * V + wt;
        return /* @__PURE__ */ F.createElement(Go, null, /* @__PURE__ */ F.createElement(
          "rect",
          {
            key: N,
            x: z,
            y: wt,
            width: V,
            height: v,
            fill: P,
            stroke: "white",
            strokeWidth: "0"
          }
        ));
      }),
      /* @__PURE__ */ F.createElement("g", null, L)
    );
};
var Yu = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Qs = F.createContext && F.createContext(Yu), It = globalThis && globalThis.__assign || function() {
  return It = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, It.apply(this, arguments);
}, am = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Xu(e) {
  return e && e.map(function(t, n) {
    return F.createElement(t.tag, It({
      key: n
    }, t.attr), Xu(t.child));
  });
}
function Jb(e) {
  return function(t) {
    return F.createElement(um, It({
      attr: It({}, e.attr)
    }, t), Xu(e.child));
  };
}
function um(e) {
  var t = function(n) {
    var r = e.attr, o = e.size, i = e.title, s = am(e, ["attr", "size", "title"]), a = o || n.size || "1em", u;
    return n.className && (u = n.className), e.className && (u = (u ? u + " " : "") + e.className), F.createElement("svg", It({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, s, {
      className: u,
      style: It(It({
        color: e.color || n.color
      }, n.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && F.createElement("title", null, i), e.children);
  };
  return Qs !== void 0 ? F.createElement(Qs.Consumer, null, function(n) {
    return t(n);
  }) : t(Yu);
}
function Xn(e) {
  "@babel/helpers - typeof";
  return Xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xn(e);
}
function lm(e, t) {
  if (Xn(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Xn(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cm(e) {
  var t = lm(e, "string");
  return Xn(t) == "symbol" ? t : String(t);
}
function dm(e, t, n) {
  return t = cm(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ea(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ta(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ea(Object(n), !0).forEach(function(r) {
      dm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ea(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function et(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var na = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Do = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, ra = {
  INIT: "@@redux/INIT" + Do(),
  REPLACE: "@@redux/REPLACE" + Do(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Do();
  }
};
function fm(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function pm(e) {
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
  if (gm(e))
    return "date";
  if (mm(e))
    return "error";
  var n = hm(e);
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
function hm(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function mm(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function gm(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function qt(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = pm(e)), t;
}
function Ku(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? et(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? et(1) : "Expected the enhancer to be a function. Instead, received: '" + qt(n) + "'");
    return n(Ku)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? et(2) : "Expected the root reducer to be a function. Instead, received: '" + qt(e) + "'");
  var o = e, i = t, s = [], a = s, u = !1;
  function l() {
    a === s && (a = s.slice());
  }
  function d() {
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? et(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function c(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? et(4) : "Expected the listener to be a function. Instead, received: '" + qt(m) + "'");
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? et(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var h = !0;
    return l(), a.push(m), function() {
      if (h) {
        if (u)
          throw new Error(process.env.NODE_ENV === "production" ? et(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        h = !1, l();
        var A = a.indexOf(m);
        a.splice(A, 1), s = null;
      }
    };
  }
  function f(m) {
    if (!fm(m))
      throw new Error(process.env.NODE_ENV === "production" ? et(7) : "Actions must be plain objects. Instead, the actual type was: '" + qt(m) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof m.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? et(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? et(9) : "Reducers may not dispatch actions.");
    try {
      u = !0, i = o(i, m);
    } finally {
      u = !1;
    }
    for (var h = s = a, C = 0; C < h.length; C++) {
      var A = h[C];
      A();
    }
    return m;
  }
  function p(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? et(10) : "Expected the nextReducer to be a function. Instead, received: '" + qt(m));
    o = m, f({
      type: ra.REPLACE
    });
  }
  function g() {
    var m, h = c;
    return m = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(A) {
        if (typeof A != "object" || A === null)
          throw new Error(process.env.NODE_ENV === "production" ? et(11) : "Expected the observer to be an object. Instead, received: '" + qt(A) + "'");
        function b() {
          A.next && A.next(d());
        }
        b();
        var v = h(b);
        return {
          unsubscribe: v
        };
      }
    }, m[na] = function() {
      return this;
    }, m;
  }
  return f({
    type: ra.INIT
  }), r = {
    dispatch: f,
    subscribe: c,
    getState: d,
    replaceReducer: p
  }, r[na] = g, r;
}
function oa(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function ia(e, t) {
  if (typeof e == "function")
    return oa(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? et(16) : "bindActionCreators expected an object or a function, but instead received: '" + qt(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = oa(o, t));
  }
  return n;
}
function Ju() {
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
function Dm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? et(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, s = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, a = t.map(function(u) {
        return u(s);
      });
      return i = Ju.apply(void 0, a)(o.dispatch), ta(ta({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var ui = { exports: {} }, Eo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sa;
function Em() {
  if (sa)
    return Eo;
  sa = 1;
  var e = w;
  function t(c, f) {
    return c === f && (c !== 0 || 1 / c === 1 / f) || c !== c && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
  function a(c, f) {
    var p = f(), g = r({ inst: { value: p, getSnapshot: f } }), m = g[0].inst, h = g[1];
    return i(function() {
      m.value = p, m.getSnapshot = f, u(m) && h({ inst: m });
    }, [c, p, f]), o(function() {
      return u(m) && h({ inst: m }), c(function() {
        u(m) && h({ inst: m });
      });
    }, [c]), s(p), p;
  }
  function u(c) {
    var f = c.getSnapshot;
    c = c.value;
    try {
      var p = f();
      return !n(c, p);
    } catch {
      return !0;
    }
  }
  function l(c, f) {
    return f();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : a;
  return Eo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Eo;
}
var yo = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa;
function ym() {
  return aa || (aa = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = w, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(b) {
      {
        for (var v = arguments.length, E = new Array(v > 1 ? v - 1 : 0), _ = 1; _ < v; _++)
          E[_ - 1] = arguments[_];
        r("error", b, E);
      }
    }
    function r(b, v, E) {
      {
        var _ = t.ReactDebugCurrentFrame, I = _.getStackAddendum();
        I !== "" && (v += "%s", E = E.concat([I]));
        var R = E.map(function($) {
          return String($);
        });
        R.unshift("Warning: " + v), Function.prototype.apply.call(console[b], console, R);
      }
    }
    function o(b, v) {
      return b === v && (b !== 0 || 1 / b === 1 / v) || b !== b && v !== v;
    }
    var i = typeof Object.is == "function" ? Object.is : o, s = e.useState, a = e.useEffect, u = e.useLayoutEffect, l = e.useDebugValue, d = !1, c = !1;
    function f(b, v, E) {
      d || e.startTransition !== void 0 && (d = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var _ = v();
      if (!c) {
        var I = v();
        i(_, I) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), c = !0);
      }
      var R = s({
        inst: {
          value: _,
          getSnapshot: v
        }
      }), $ = R[0].inst, O = R[1];
      return u(function() {
        $.value = _, $.getSnapshot = v, p($) && O({
          inst: $
        });
      }, [b, _, v]), a(function() {
        p($) && O({
          inst: $
        });
        var L = function() {
          p($) && O({
            inst: $
          });
        };
        return b(L);
      }, [b]), l(_), _;
    }
    function p(b) {
      var v = b.getSnapshot, E = b.value;
      try {
        var _ = v();
        return !i(E, _);
      } catch {
        return !0;
      }
    }
    function g(b, v, E) {
      return v();
    }
    var m = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", h = !m, C = h ? g : f, A = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : C;
    yo.useSyncExternalStore = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), yo;
}
process.env.NODE_ENV === "production" ? ui.exports = Em() : ui.exports = ym();
var ji = ui.exports, vo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ua;
function vm() {
  if (ua)
    return vo;
  ua = 1;
  var e = w, t = ji;
  function n(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, a = e.useMemo, u = e.useDebugValue;
  return vo.useSyncExternalStoreWithSelector = function(l, d, c, f, p) {
    var g = i(null);
    if (g.current === null) {
      var m = { hasValue: !1, value: null };
      g.current = m;
    } else
      m = g.current;
    g = a(function() {
      function C(_) {
        if (!A) {
          if (A = !0, b = _, _ = f(_), p !== void 0 && m.hasValue) {
            var I = m.value;
            if (p(I, _))
              return v = I;
          }
          return v = _;
        }
        if (I = v, r(b, _))
          return I;
        var R = f(_);
        return p !== void 0 && p(I, R) ? I : (b = _, v = R);
      }
      var A = !1, b, v, E = c === void 0 ? null : c;
      return [function() {
        return C(d());
      }, E === null ? void 0 : function() {
        return C(E());
      }];
    }, [d, c, f, p]);
    var h = o(l, g[0], g[1]);
    return s(function() {
      m.hasValue = !0, m.value = h;
    }, [h]), u(h), h;
  }, vo;
}
var bo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var la;
function bm() {
  return la || (la = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = w, t = ji;
    function n(d, c) {
      return d === c && (d !== 0 || 1 / d === 1 / c) || d !== d && c !== c;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, a = e.useMemo, u = e.useDebugValue;
    function l(d, c, f, p, g) {
      var m = i(null), h;
      m.current === null ? (h = {
        hasValue: !1,
        value: null
      }, m.current = h) : h = m.current;
      var C = a(function() {
        var E = !1, _, I, R = function(P) {
          if (!E) {
            E = !0, _ = P;
            var N = p(P);
            if (g !== void 0 && h.hasValue) {
              var V = h.value;
              if (g(V, N))
                return I = V, V;
            }
            return I = N, N;
          }
          var z = _, K = I;
          if (r(z, P))
            return K;
          var J = p(P);
          return g !== void 0 && g(K, J) ? K : (_ = P, I = J, J);
        }, $ = f === void 0 ? null : f, O = function() {
          return R(c());
        }, L = $ === null ? void 0 : function() {
          return R($());
        };
        return [O, L];
      }, [c, f, p, g]), A = C[0], b = C[1], v = o(d, A, b);
      return s(function() {
        h.hasValue = !0, h.value = v;
      }, [v]), u(v), v;
    }
    bo.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), bo;
}
process.env.NODE_ENV === "production" ? vm() : bm();
function Cm(e) {
  e();
}
let Zu = Cm;
const Am = (e) => Zu = e, wm = () => Zu, ca = Symbol.for("react-redux-context"), da = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function _m() {
  var e;
  if (!w.createContext)
    return {};
  const t = (e = da[ca]) != null ? e : da[ca] = /* @__PURE__ */ new Map();
  let n = t.get(w.createContext);
  return n || (n = w.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(w.createContext, n)), n;
}
const Qu = /* @__PURE__ */ _m(), Sm = () => {
  throw new Error("uSES not initialized!");
};
var li = { exports: {} }, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fa;
function Fm() {
  if (fa)
    return fe;
  fa = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function b(E) {
    if (typeof E == "object" && E !== null) {
      var _ = E.$$typeof;
      switch (_) {
        case t:
          switch (E = E.type, E) {
            case u:
            case l:
            case r:
            case i:
            case o:
            case c:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case a:
                case d:
                case g:
                case p:
                case s:
                  return E;
                default:
                  return _;
              }
          }
        case n:
          return _;
      }
    }
  }
  function v(E) {
    return b(E) === l;
  }
  return fe.AsyncMode = u, fe.ConcurrentMode = l, fe.ContextConsumer = a, fe.ContextProvider = s, fe.Element = t, fe.ForwardRef = d, fe.Fragment = r, fe.Lazy = g, fe.Memo = p, fe.Portal = n, fe.Profiler = i, fe.StrictMode = o, fe.Suspense = c, fe.isAsyncMode = function(E) {
    return v(E) || b(E) === u;
  }, fe.isConcurrentMode = v, fe.isContextConsumer = function(E) {
    return b(E) === a;
  }, fe.isContextProvider = function(E) {
    return b(E) === s;
  }, fe.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, fe.isForwardRef = function(E) {
    return b(E) === d;
  }, fe.isFragment = function(E) {
    return b(E) === r;
  }, fe.isLazy = function(E) {
    return b(E) === g;
  }, fe.isMemo = function(E) {
    return b(E) === p;
  }, fe.isPortal = function(E) {
    return b(E) === n;
  }, fe.isProfiler = function(E) {
    return b(E) === i;
  }, fe.isStrictMode = function(E) {
    return b(E) === o;
  }, fe.isSuspense = function(E) {
    return b(E) === c;
  }, fe.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === l || E === i || E === o || E === c || E === f || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === p || E.$$typeof === s || E.$$typeof === a || E.$$typeof === d || E.$$typeof === h || E.$$typeof === C || E.$$typeof === A || E.$$typeof === m);
  }, fe.typeOf = b, fe;
}
var pe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pa;
function xm() {
  return pa || (pa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function b(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === r || B === l || B === i || B === o || B === c || B === f || typeof B == "object" && B !== null && (B.$$typeof === g || B.$$typeof === p || B.$$typeof === s || B.$$typeof === a || B.$$typeof === d || B.$$typeof === h || B.$$typeof === C || B.$$typeof === A || B.$$typeof === m);
    }
    function v(B) {
      if (typeof B == "object" && B !== null) {
        var ae = B.$$typeof;
        switch (ae) {
          case t:
            var M = B.type;
            switch (M) {
              case u:
              case l:
              case r:
              case i:
              case o:
              case c:
                return M;
              default:
                var Le = M && M.$$typeof;
                switch (Le) {
                  case a:
                  case d:
                  case g:
                  case p:
                  case s:
                    return Le;
                  default:
                    return ae;
                }
            }
          case n:
            return ae;
        }
      }
    }
    var E = u, _ = l, I = a, R = s, $ = t, O = d, L = r, P = g, N = p, V = n, z = i, K = o, J = c, Y = !1;
    function se(B) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), q(B) || v(B) === u;
    }
    function q(B) {
      return v(B) === l;
    }
    function ce(B) {
      return v(B) === a;
    }
    function Z(B) {
      return v(B) === s;
    }
    function ge(B) {
      return typeof B == "object" && B !== null && B.$$typeof === t;
    }
    function k(B) {
      return v(B) === d;
    }
    function ee(B) {
      return v(B) === r;
    }
    function be(B) {
      return v(B) === g;
    }
    function je(B) {
      return v(B) === p;
    }
    function le(B) {
      return v(B) === n;
    }
    function de(B) {
      return v(B) === i;
    }
    function Ae(B) {
      return v(B) === o;
    }
    function we(B) {
      return v(B) === c;
    }
    pe.AsyncMode = E, pe.ConcurrentMode = _, pe.ContextConsumer = I, pe.ContextProvider = R, pe.Element = $, pe.ForwardRef = O, pe.Fragment = L, pe.Lazy = P, pe.Memo = N, pe.Portal = V, pe.Profiler = z, pe.StrictMode = K, pe.Suspense = J, pe.isAsyncMode = se, pe.isConcurrentMode = q, pe.isContextConsumer = ce, pe.isContextProvider = Z, pe.isElement = ge, pe.isForwardRef = k, pe.isFragment = ee, pe.isLazy = be, pe.isMemo = je, pe.isPortal = le, pe.isProfiler = de, pe.isStrictMode = Ae, pe.isSuspense = we, pe.isValidElementType = b, pe.typeOf = v;
  }()), pe;
}
process.env.NODE_ENV === "production" ? li.exports = Fm() : li.exports = xm();
var Nm = li.exports, Gi = Nm, Om = {
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
}, Tm = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Bm = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, el = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ui = {};
Ui[Gi.ForwardRef] = Bm;
Ui[Gi.Memo] = el;
function ha(e) {
  return Gi.isMemo(e) ? el : Ui[e.$$typeof] || Om;
}
var Im = Object.defineProperty, Pm = Object.getOwnPropertyNames, ma = Object.getOwnPropertySymbols, Rm = Object.getOwnPropertyDescriptor, Mm = Object.getPrototypeOf, ga = Object.prototype;
function tl(e, t, n) {
  if (typeof t != "string") {
    if (ga) {
      var r = Mm(t);
      r && r !== ga && tl(e, r, n);
    }
    var o = Pm(t);
    ma && (o = o.concat(ma(t)));
    for (var i = ha(e), s = ha(t), a = 0; a < o.length; ++a) {
      var u = o[a];
      if (!Tm[u] && !(n && n[u]) && !(s && s[u]) && !(i && i[u])) {
        var l = Rm(t, u);
        try {
          Im(e, u, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var Lm = tl;
const Da = /* @__PURE__ */ lu(Lm);
var ci = { exports: {} }, he = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea;
function km() {
  if (Ea)
    return he;
  Ea = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function m(h) {
    if (typeof h == "object" && h !== null) {
      var C = h.$$typeof;
      switch (C) {
        case e:
          switch (h = h.type, h) {
            case n:
            case o:
            case r:
            case l:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case s:
                case u:
                case f:
                case c:
                case i:
                  return h;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return he.ContextConsumer = s, he.ContextProvider = i, he.Element = e, he.ForwardRef = u, he.Fragment = n, he.Lazy = f, he.Memo = c, he.Portal = t, he.Profiler = o, he.StrictMode = r, he.Suspense = l, he.SuspenseList = d, he.isAsyncMode = function() {
    return !1;
  }, he.isConcurrentMode = function() {
    return !1;
  }, he.isContextConsumer = function(h) {
    return m(h) === s;
  }, he.isContextProvider = function(h) {
    return m(h) === i;
  }, he.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, he.isForwardRef = function(h) {
    return m(h) === u;
  }, he.isFragment = function(h) {
    return m(h) === n;
  }, he.isLazy = function(h) {
    return m(h) === f;
  }, he.isMemo = function(h) {
    return m(h) === c;
  }, he.isPortal = function(h) {
    return m(h) === t;
  }, he.isProfiler = function(h) {
    return m(h) === o;
  }, he.isStrictMode = function(h) {
    return m(h) === r;
  }, he.isSuspense = function(h) {
    return m(h) === l;
  }, he.isSuspenseList = function(h) {
    return m(h) === d;
  }, he.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === o || h === r || h === l || h === d || h === p || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === c || h.$$typeof === i || h.$$typeof === s || h.$$typeof === u || h.$$typeof === g || h.getModuleId !== void 0);
  }, he.typeOf = m, he;
}
var me = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ya;
function $m() {
  return ya || (ya = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = !1, m = !1, h = !1, C = !1, A = !1, b;
    b = Symbol.for("react.module.reference");
    function v(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === n || M === o || A || M === r || M === l || M === d || C || M === p || g || m || h || typeof M == "object" && M !== null && (M.$$typeof === f || M.$$typeof === c || M.$$typeof === i || M.$$typeof === s || M.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === b || M.getModuleId !== void 0));
    }
    function E(M) {
      if (typeof M == "object" && M !== null) {
        var Le = M.$$typeof;
        switch (Le) {
          case e:
            var Fe = M.type;
            switch (Fe) {
              case n:
              case o:
              case r:
              case l:
              case d:
                return Fe;
              default:
                var Oe = Fe && Fe.$$typeof;
                switch (Oe) {
                  case a:
                  case s:
                  case u:
                  case f:
                  case c:
                  case i:
                    return Oe;
                  default:
                    return Le;
                }
            }
          case t:
            return Le;
        }
      }
    }
    var _ = s, I = i, R = e, $ = u, O = n, L = f, P = c, N = t, V = o, z = r, K = l, J = d, Y = !1, se = !1;
    function q(M) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ce(M) {
      return se || (se = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(M) {
      return E(M) === s;
    }
    function ge(M) {
      return E(M) === i;
    }
    function k(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function ee(M) {
      return E(M) === u;
    }
    function be(M) {
      return E(M) === n;
    }
    function je(M) {
      return E(M) === f;
    }
    function le(M) {
      return E(M) === c;
    }
    function de(M) {
      return E(M) === t;
    }
    function Ae(M) {
      return E(M) === o;
    }
    function we(M) {
      return E(M) === r;
    }
    function B(M) {
      return E(M) === l;
    }
    function ae(M) {
      return E(M) === d;
    }
    me.ContextConsumer = _, me.ContextProvider = I, me.Element = R, me.ForwardRef = $, me.Fragment = O, me.Lazy = L, me.Memo = P, me.Portal = N, me.Profiler = V, me.StrictMode = z, me.Suspense = K, me.SuspenseList = J, me.isAsyncMode = q, me.isConcurrentMode = ce, me.isContextConsumer = Z, me.isContextProvider = ge, me.isElement = k, me.isForwardRef = ee, me.isFragment = be, me.isLazy = je, me.isMemo = le, me.isPortal = de, me.isProfiler = Ae, me.isStrictMode = we, me.isSuspense = B, me.isSuspenseList = ae, me.isValidElementType = v, me.typeOf = E;
  }()), me;
}
process.env.NODE_ENV === "production" ? ci.exports = km() : ci.exports = $m();
var va = ci.exports;
function Wi(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Co(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Wi(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else
    throw new Error(`Unexpected value for ${t} in connect.`);
}
function Vm(e, t, n) {
  Co(e, "mapStateToProps"), Co(t, "mapDispatchToProps"), Co(n, "mergeProps");
}
const jm = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Gm(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: s
}) {
  let a = !1, u, l, d, c, f;
  function p(A, b) {
    return u = A, l = b, d = e(u, l), c = t(r, l), f = n(d, c, l), a = !0, f;
  }
  function g() {
    return d = e(u, l), t.dependsOnOwnProps && (c = t(r, l)), f = n(d, c, l), f;
  }
  function m() {
    return e.dependsOnOwnProps && (d = e(u, l)), t.dependsOnOwnProps && (c = t(r, l)), f = n(d, c, l), f;
  }
  function h() {
    const A = e(u, l), b = !s(A, d);
    return d = A, b && (f = n(d, c, l)), f;
  }
  function C(A, b) {
    const v = !i(b, l), E = !o(A, u, b, l);
    return u = A, l = b, v && E ? g() : v ? m() : E ? h() : f;
  }
  return function(b, v) {
    return a ? C(b, v) : p(b, v);
  };
}
function Um(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = gu(t, jm);
  const s = n(e, i), a = r(e, i), u = o(e, i);
  return process.env.NODE_ENV !== "production" && Vm(s, a, u), Gm(s, a, u, e, i);
}
function Wm(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function zm(e) {
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
function nl(e, t, n) {
  zm(e) || Wi(`${n}() in ${t} must return a plain object. Instead received ${e}.`);
}
function di(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function ba(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function rl(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(a, u) {
      return i.dependsOnOwnProps ? i.mapToProps(a, u) : i.mapToProps(a, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(a, u) {
      i.mapToProps = e, i.dependsOnOwnProps = ba(e);
      let l = i(a, u);
      return typeof l == "function" && (i.mapToProps = l, i.dependsOnOwnProps = ba(l), l = i(a, u)), process.env.NODE_ENV !== "production" && nl(l, o, t), l;
    }, i;
  };
}
function zi(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function Hm(e) {
  return e && typeof e == "object" ? di((t) => (
    // @ts-ignore
    Wm(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    rl(e, "mapDispatchToProps")
  ) : zi(e, "mapDispatchToProps") : di((t) => ({
    dispatch: t
  }));
}
function qm(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    rl(e, "mapStateToProps")
  ) : zi(e, "mapStateToProps") : di(() => ({}));
}
function Ym(e, t, n) {
  return dn({}, n, e, t);
}
function Xm(e) {
  return function(n, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let i = !1, s;
    return function(u, l, d) {
      const c = e(u, l, d);
      return i ? o(c, s) || (s = c) : (i = !0, s = c, process.env.NODE_ENV !== "production" && nl(s, r, "mergeProps")), s;
    };
  };
}
function Km(e) {
  return e ? typeof e == "function" ? Xm(e) : zi(e, "mergeProps") : () => Ym;
}
function Jm() {
  const e = wm();
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
const Ca = {
  notify() {
  },
  get: () => []
};
function ol(e, t) {
  let n, r = Ca, o = 0, i = !1;
  function s(m) {
    d();
    const h = r.subscribe(m);
    let C = !1;
    return () => {
      C || (C = !0, h(), c());
    };
  }
  function a() {
    r.notify();
  }
  function u() {
    g.onStateChange && g.onStateChange();
  }
  function l() {
    return i;
  }
  function d() {
    o++, n || (n = t ? t.addNestedSub(u) : e.subscribe(u), r = Jm());
  }
  function c() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Ca);
  }
  function f() {
    i || (i = !0, d());
  }
  function p() {
    i && (i = !1, c());
  }
  const g = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: u,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return g;
}
const Zm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Vr = Zm ? w.useLayoutEffect : w.useEffect;
function Aa(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ao(e, t) {
  if (Aa(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Aa(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const Qm = ["reactReduxForwardedRef"];
let il = Sm;
const e0 = (e) => {
  il = e;
}, t0 = [null, null], n0 = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function r0(e, t, n) {
  Vr(() => e(...t), n);
}
function o0(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function i0(e, t, n, r, o, i, s, a, u, l, d) {
  if (!e)
    return () => {
    };
  let c = !1, f = null;
  const p = () => {
    if (c || !a.current)
      return;
    const m = t.getState();
    let h, C;
    try {
      h = r(m, o.current);
    } catch (A) {
      C = A, f = A;
    }
    C || (f = null), h === i.current ? s.current || l() : (i.current = h, u.current = h, s.current = !0, d());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (c = !0, n.tryUnsubscribe(), n.onStateChange = null, f)
      throw f;
  };
}
function s0(e, t) {
  return e === t;
}
let wa = !1;
function sl(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = s0,
  areOwnPropsEqual: i = Ao,
  areStatePropsEqual: s = Ao,
  areMergedPropsEqual: a = Ao,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: u = !1,
  // the context consumer to use
  context: l = Qu
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !wa && (wa = !0, Wi('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const d = l, c = qm(e), f = Hm(t), p = Km(n), g = !!e;
  return (h) => {
    if (process.env.NODE_ENV !== "production" && !va.isValidElementType(h))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${n0(h)}`);
    const C = h.displayName || h.name || "Component", A = `Connect(${C})`, b = {
      shouldHandleStateChanges: g,
      displayName: A,
      wrappedComponentName: C,
      WrappedComponent: h,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: f,
      initMergeProps: p,
      areStatesEqual: o,
      areStatePropsEqual: s,
      areOwnPropsEqual: i,
      areMergedPropsEqual: a
    };
    function v(I) {
      const [R, $, O] = w.useMemo(() => {
        const {
          reactReduxForwardedRef: B
        } = I, ae = gu(I, Qm);
        return [I.context, B, ae];
      }, [I]), L = w.useMemo(() => R && R.Consumer && // @ts-ignore
      va.isContextConsumer(/* @__PURE__ */ w.createElement(R.Consumer, null)) ? R : d, [R, d]), P = w.useContext(L), N = !!I.store && !!I.store.getState && !!I.store.dispatch, V = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !N && !V)
        throw new Error(`Could not find "store" in the context of "${A}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${A} in connect options.`);
      const z = N ? I.store : P.store, K = V ? P.getServerState : z.getState, J = w.useMemo(() => Um(z.dispatch, b), [z]), [Y, se] = w.useMemo(() => {
        if (!g)
          return t0;
        const B = ol(z, N ? void 0 : P.subscription), ae = B.notifyNestedSubs.bind(B);
        return [B, ae];
      }, [z, N, P]), q = w.useMemo(() => N ? P : dn({}, P, {
        subscription: Y
      }), [N, P, Y]), ce = w.useRef(), Z = w.useRef(O), ge = w.useRef(), k = w.useRef(!1);
      w.useRef(!1);
      const ee = w.useRef(!1), be = w.useRef();
      Vr(() => (ee.current = !0, () => {
        ee.current = !1;
      }), []);
      const je = w.useMemo(() => () => ge.current && O === Z.current ? ge.current : J(z.getState(), O), [z, O]), le = w.useMemo(() => (ae) => Y ? i0(
        g,
        z,
        Y,
        // @ts-ignore
        J,
        Z,
        ce,
        k,
        ee,
        ge,
        se,
        ae
      ) : () => {
      }, [Y]);
      r0(o0, [Z, ce, k, O, ge, se]);
      let de;
      try {
        de = il(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          le,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          je,
          K ? () => J(K(), O) : je
        );
      } catch (B) {
        throw be.current && (B.message += `
The error may be correlated with this previous error:
${be.current.stack}

`), B;
      }
      Vr(() => {
        be.current = void 0, ge.current = void 0, ce.current = de;
      });
      const Ae = w.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ w.createElement(h, dn({}, de, {
          ref: $
        }))
      ), [$, h, de]);
      return w.useMemo(() => g ? /* @__PURE__ */ w.createElement(L.Provider, {
        value: q
      }, Ae) : Ae, [L, Ae, q]);
    }
    const _ = w.memo(v);
    if (_.WrappedComponent = h, _.displayName = v.displayName = A, u) {
      const R = w.forwardRef(function(O, L) {
        return /* @__PURE__ */ w.createElement(_, dn({}, O, {
          reactReduxForwardedRef: L
        }));
      });
      return R.displayName = A, R.WrappedComponent = h, Da(R, h);
    }
    return Da(_, h);
  };
}
function a0({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const s = w.useMemo(() => {
    const l = ol(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), a = w.useMemo(() => e.getState(), [e]);
  Vr(() => {
    const {
      subscription: l
    } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const u = t || Qu;
  return /* @__PURE__ */ w.createElement(u.Provider, {
    value: s
  }, n);
}
e0(ji.useSyncExternalStore);
Am(wi.unstable_batchedUpdates);
function u0(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function al(e, t) {
  var n = w.useState(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = w.useRef(!0), o = w.useRef(n), i = r.current || !!(t && o.current.inputs && u0(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return w.useEffect(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function l0(e, t) {
  return al(function() {
    return e;
  }, t);
}
var ie = al, U = l0, c0 = process.env.NODE_ENV === "production", wo = "Invariant failed";
function _a(e, t) {
  if (!e) {
    if (c0)
      throw new Error(wo);
    var n = typeof t == "function" ? t() : t, r = n ? "".concat(wo, ": ").concat(n) : wo;
    throw new Error(r);
  }
}
var ft = function(t) {
  var n = t.top, r = t.right, o = t.bottom, i = t.left, s = r - i, a = o - n, u = {
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
  return u;
}, Hi = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, Sa = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, d0 = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, _o = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, qi = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? _o : r, i = t.border, s = i === void 0 ? _o : i, a = t.padding, u = a === void 0 ? _o : a, l = ft(Hi(n, o)), d = ft(Sa(n, s)), c = ft(Sa(d, u));
  return {
    marginBox: l,
    borderBox: ft(n),
    paddingBox: d,
    contentBox: c,
    margin: o,
    border: s,
    padding: u
  };
}, at = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? _a(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : _a(!1)), o;
}, f0 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, jr = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, a = d0(r, n);
  return qi({
    borderBox: a,
    border: o,
    margin: i,
    padding: s
  });
}, Gr = function(t, n) {
  return n === void 0 && (n = f0()), jr(t, n);
}, ul = function(t, n) {
  var r = {
    top: at(n.marginTop),
    right: at(n.marginRight),
    bottom: at(n.marginBottom),
    left: at(n.marginLeft)
  }, o = {
    top: at(n.paddingTop),
    right: at(n.paddingRight),
    bottom: at(n.paddingBottom),
    left: at(n.paddingLeft)
  }, i = {
    top: at(n.borderTopWidth),
    right: at(n.borderRightWidth),
    bottom: at(n.borderBottomWidth),
    left: at(n.borderLeftWidth)
  };
  return qi({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, ll = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return ul(n, r);
}, Fa = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function p0(e, t) {
  return !!(e === t || Fa(e) && Fa(t));
}
function h0(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!p0(e[n], t[n]))
      return !1;
  return !0;
}
function Re(e, t) {
  t === void 0 && (t = h0);
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
var m0 = function(t) {
  var n = [], r = null, o = function() {
    for (var s = arguments.length, a = new Array(s), u = 0; u < s; u++)
      a[u] = arguments[u];
    n = a, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, n);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const Kn = m0, g0 = process.env.NODE_ENV === "production", D0 = /[ \t]{2,}/g, E0 = /^[ \t]*/gm, xa = (e) => e.replace(D0, " ").replace(E0, "").trim(), y0 = (e) => xa(`
  %c@hello-pangea/dnd

  %c${xa(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), v0 = (e) => [y0(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], b0 = "__@hello-pangea/dnd-disable-dev-warnings";
function cl(e, t) {
  g0 || typeof window < "u" && window[b0] || console[e](...v0(t));
}
const Ee = cl.bind(null, "warn"), fi = cl.bind(null, "error");
function Pt() {
}
function C0(e, t) {
  return {
    ...e,
    ...t
  };
}
function ut(e, t, n) {
  const r = t.map((o) => {
    const i = C0(n, o.options);
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
const A0 = process.env.NODE_ENV === "production", Na = "Invariant failed";
class Jn extends Error {
}
Jn.prototype.toString = function() {
  return this.message;
};
function D(e, t) {
  if (!e)
    throw A0 ? new Jn(Na) : new Jn(`${Na}: ${t || ""}`);
}
class w0 extends F.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Pt, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && Ee(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof Jn && (n.preventDefault(), process.env.NODE_ENV !== "production" && fi(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = ut(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Jn) {
      process.env.NODE_ENV !== "production" && fi(t.message), this.setState({});
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
const _0 = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Ur = (e) => e + 1, S0 = (e) => `
  You have lifted an item in position ${Ur(e.source.index)}
`, dl = (e, t) => {
  const n = e.droppableId === t.droppableId, r = Ur(e.index), o = Ur(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, fl = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, F0 = (e) => {
  const t = e.destination;
  if (t)
    return dl(e.source, t);
  const n = e.combine;
  return n ? fl(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Oa = (e) => `
  The item has returned to its starting position
  of ${Ur(e.index)}
`, x0 = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Oa(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${dl(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${fl(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Oa(e.source)}
  `;
}, N0 = {
  dragHandleUsageInstructions: _0,
  onDragStart: S0,
  onDragUpdate: F0,
  onDragEnd: x0
};
var Br = N0;
const Me = {
  x: 0,
  y: 0
}, Ve = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), tt = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Rt = (e, t) => e.x === t.x && e.y === t.y, yn = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), tn = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, Zn = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Ta = (e, t) => Math.min(...t.map((n) => Zn(e, n))), pl = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var O0 = (e, t) => {
  const n = ft({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const sr = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Ba = (e) => [{
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
}], T0 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, B0 = (e, t) => t ? sr(e, t.scroll.diff.displacement) : e, I0 = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, P0 = (e, t) => t && t.shouldClipSubject ? O0(t.pageMarginBox, e) : ft(e);
var hn = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = B0(e.marginBox, r), i = I0(o, n, t), s = P0(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, Yi = (e, t) => {
  e.frame || (process.env.NODE_ENV, D(!1));
  const n = e.frame, r = tt(t, n.scroll.initial), o = yn(r), i = {
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
  }, s = hn({
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
const hl = Re((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), ml = Re((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), eo = Re((e) => Object.values(e)), R0 = Re((e) => Object.values(e));
var nn = Re((e, t) => R0(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Xi(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function to(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var no = Re((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), M0 = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !Xi(o))
    return null;
  function s(p) {
    const g = {
      type: "COMBINE",
      combine: {
        draggableId: p,
        droppableId: n.descriptor.id
      }
    };
    return {
      ...o,
      at: g
    };
  }
  const a = o.displaced.all, u = a.length ? a[0] : null;
  if (e)
    return u ? s(u) : null;
  const l = no(t, r);
  if (!u) {
    if (!l.length)
      return null;
    const p = l[l.length - 1];
    return s(p.descriptor.id);
  }
  const d = l.findIndex((p) => p.descriptor.id === u);
  d === -1 && (process.env.NODE_ENV !== "production" ? D(!1, "Could not find displaced item in set") : D(!1));
  const c = d - 1;
  if (c < 0)
    return null;
  const f = l[c];
  return s(f.descriptor.id);
}, vn = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const gl = {
  point: Me,
  value: 0
}, Qn = {
  invisible: {},
  visible: {},
  all: []
}, L0 = {
  displaced: Qn,
  displacedBy: gl,
  at: null
};
var k0 = L0, lt = (e, t) => (n) => e <= n && n <= t, Dl = (e) => {
  const t = lt(e.top, e.bottom), n = lt(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), s = n(r.left) || n(r.right);
    if (i && s)
      return !0;
    const u = r.top < e.top && r.bottom > e.bottom, l = r.left < e.left && r.right > e.right;
    return u && l ? !0 : u && s || l && i;
  };
}, $0 = (e) => {
  const t = lt(e.top, e.bottom), n = lt(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const Ki = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, El = {
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
var V0 = (e) => (t) => {
  const n = lt(t.top, t.bottom), r = lt(t.left, t.right);
  return (o) => e === Ki ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const j0 = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : Me;
  return sr(e, n);
}, G0 = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, U0 = (e, t, n) => n(t)(e), Ji = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? j0(e, t) : e;
  return G0(i, t, o) && U0(i, n, o);
}, W0 = (e) => Ji({
  ...e,
  isVisibleThroughFrameFn: Dl
}), yl = (e) => Ji({
  ...e,
  isVisibleThroughFrameFn: $0
}), z0 = (e) => Ji({
  ...e,
  isVisibleThroughFrameFn: V0(e.destination.axis)
}), H0 = (e, t, n) => {
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
function q0(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return ft(Hi(n, r));
}
function er({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(a, u) {
    const l = q0(u, n), d = u.descriptor.id;
    if (a.all.push(d), !W0({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[u.descriptor.id] = !0, a;
    const f = H0(d, i, o), p = {
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
function Y0(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function Ia({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = Y0(e, {
    inHomeList: t
  });
  return {
    displaced: Qn,
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
function Wr({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: s,
  forceShouldAnimate: a
}) {
  const u = vn(e, n);
  if (s == null)
    return Ia({
      insideDestination: t,
      inHomeList: u,
      displacedBy: o,
      destination: n
    });
  const l = t.find((g) => g.descriptor.index === s);
  if (!l)
    return Ia({
      insideDestination: t,
      inHomeList: u,
      displacedBy: o,
      destination: n
    });
  const d = no(e, t), c = t.indexOf(l), f = d.slice(c);
  return {
    displaced: er({
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
function Mt(e, t) {
  return !!t.effected[e];
}
var X0 = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = r.draggableId, a = n[i].descriptor.index;
  return Mt(i, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, K0 = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, u = t ? a : a + 1;
  return i < s || i > u ? null : i;
}, J0 = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: n,
  draggables: r,
  destination: o,
  insideDestination: i,
  previousImpact: s,
  viewport: a,
  afterCritical: u
}) => {
  const l = s.at;
  if (l || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot move in direction without previous impact location") : D(!1)), l.type === "REORDER") {
    const c = K0({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: i
    });
    return c == null ? null : Wr({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: a,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: c
    });
  }
  const d = X0({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: u
  });
  return d == null ? null : Wr({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: a,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: d
  });
}, Z0 = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Mt(n, t) ? o ? Me : yn(r.point) : o ? r.point : Me;
}, Q0 = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = to(t);
  r || (process.env.NODE_ENV, D(!1));
  const o = r.draggableId, i = n[o].page.borderBox.center, s = Z0({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Ve(i, s);
};
const vl = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, eg = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Zi = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, Pa = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => tn(e.line, t.marginBox[e.end] + vl(e, n), Zi(e, t.marginBox, n)), Ra = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => tn(e.line, t.marginBox[e.start] - eg(e, n), Zi(e, t.marginBox, n)), tg = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => tn(e.line, t.contentBox[e.start] + vl(e, n), Zi(e, t.contentBox, n));
var ng = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = nn(r.descriptor.id, n), s = t.page, a = r.axis;
  if (!i.length)
    return tg({
      axis: a,
      moveInto: r.page,
      isMoving: s
    });
  const {
    displaced: u,
    displacedBy: l
  } = e, d = u.all[0];
  if (d) {
    const f = n[d];
    if (Mt(d, o))
      return Ra({
        axis: a,
        moveRelativeTo: f.page,
        isMoving: s
      });
    const p = jr(f.page, l.point);
    return Ra({
      axis: a,
      moveRelativeTo: p,
      isMoving: s
    });
  }
  const c = i[i.length - 1];
  if (c.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if (Mt(c.descriptor.id, o)) {
    const f = jr(c.page, yn(o.displacedBy.point));
    return Pa({
      axis: a,
      moveRelativeTo: f,
      isMoving: s
    });
  }
  return Pa({
    axis: a,
    moveRelativeTo: c.page,
    isMoving: s
  });
}, pi = (e, t) => {
  const n = e.frame;
  return n ? Ve(t, n.scroll.diff.displacement) : t;
};
const rg = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? ng({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : Q0({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var ro = (e) => {
  const t = rg(e), n = e.droppable;
  return n ? pi(n, t) : t;
}, bl = (e, t) => {
  const n = tt(t, e.scroll.initial), r = yn(n);
  return {
    frame: ft({
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
function Ma(e, t) {
  return e.map((n) => t[n]);
}
function og(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var ig = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = bl(t, Ve(t.scroll.current, o)), s = n.frame ? Yi(n, Ve(n.frame.scroll.current, o)) : n, a = e.displaced, u = er({
    afterDragging: Ma(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: a,
    forceShouldAnimate: !1
  }), l = er({
    afterDragging: Ma(a.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), d = {}, c = {}, f = [a, u, l];
  return a.all.forEach((g) => {
    const m = og(g, f);
    if (m) {
      c[g] = m;
      return;
    }
    d[g] = !0;
  }), {
    ...e,
    displaced: {
      all: a.all,
      invisible: d,
      visible: c
    }
  };
}, sg = (e, t) => Ve(e.scroll.diff.displacement, t), Qi = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = sg(n, e), o = tt(r, t.page.borderBox.center);
  return Ve(t.client.borderBox.center, o);
}, Cl = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = tt(n, e.page.borderBox.center), u = {
    target: sr(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? z0(u) : yl(u);
}, ag = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  draggables: r,
  previousImpact: o,
  viewport: i,
  previousPageBorderBoxCenter: s,
  previousClientSelection: a,
  afterCritical: u
}) => {
  if (!n.isEnabled)
    return null;
  const l = nn(n.descriptor.id, r), d = vn(t, n), c = M0({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || J0({
    isMovingForward: e,
    isInHomeList: d,
    draggable: t,
    draggables: r,
    destination: n,
    insideDestination: l,
    previousImpact: o,
    viewport: i,
    afterCritical: u
  });
  if (!c)
    return null;
  const f = ro({
    impact: c,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: u
  });
  if (Cl({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: f,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Qi({
        pageBorderBoxCenter: f,
        draggable: t,
        viewport: i
      }),
      impact: c,
      scrollJumpRequest: null
    };
  const g = tt(f, s), m = ig({
    impact: c,
    viewport: i,
    destination: n,
    draggables: r,
    maxScrollChange: g
  });
  return {
    clientSelection: a,
    impact: m,
    scrollJumpRequest: g
  };
};
const Ye = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot get clipped area from droppable") : D(!1)), t;
};
var ug = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, a = lt(i[s.start], i[s.end]), u = eo(r).filter((d) => d !== n).filter((d) => d.isEnabled).filter((d) => !!d.subject.active).filter((d) => Dl(o.frame)(Ye(d))).filter((d) => {
    const c = Ye(d);
    return e ? i[s.crossAxisEnd] < c[s.crossAxisEnd] : c[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((d) => {
    const c = Ye(d), f = lt(c[s.start], c[s.end]);
    return a(c[s.start]) || a(c[s.end]) || f(i[s.start]) || f(i[s.end]);
  }).sort((d, c) => {
    const f = Ye(d)[s.crossAxisStart], p = Ye(c)[s.crossAxisStart];
    return e ? f - p : p - f;
  }).filter((d, c, f) => Ye(d)[s.crossAxisStart] === Ye(f[0])[s.crossAxisStart]);
  if (!u.length)
    return null;
  if (u.length === 1)
    return u[0];
  const l = u.filter((d) => lt(Ye(d)[s.start], Ye(d)[s.end])(t[s.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((d, c) => Ye(d)[s.start] - Ye(c)[s.start])[0] : u.sort((d, c) => {
    const f = Ta(t, Ba(Ye(d))), p = Ta(t, Ba(Ye(c)));
    return f !== p ? f - p : Ye(d)[s.start] - Ye(c)[s.start];
  })[0];
};
const La = (e, t) => {
  const n = e.page.borderBox.center;
  return Mt(e.descriptor.id, t) ? tt(n, t.displacedBy.point) : n;
}, lg = (e, t) => {
  const n = e.page.borderBox;
  return Mt(e.descriptor.id, t) ? sr(n, yn(t.displacedBy.point)) : n;
};
var cg = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => yl({
  target: lg(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, a) => {
  const u = Zn(e, pi(n, La(s, o))), l = Zn(e, pi(n, La(a, o)));
  return u < l ? -1 : l < u ? 1 : s.descriptor.index - a.descriptor.index;
})[0] || null, ar = Re(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: tn(t.line, r)
  };
});
const dg = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return tn(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], u = nn(e.descriptor.id, n).reduce((l, d) => l + d.client.marginBox[r.size], 0) + t[r.line] - o;
  return u <= 0 ? null : tn(r.line, u);
}, Al = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), wl = (e, t, n) => {
  const r = e.frame;
  vn(t, e) && (process.env.NODE_ENV !== "production" ? D(!1, "Should not add placeholder space to home list") : D(!1)), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot add placeholder size to a subject when it already has one") : D(!1));
  const o = ar(e.axis, t.displaceBy).point, i = dg(e, o, n), s = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const d = hn({
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
  const a = i ? Ve(r.scroll.max, i) : r.scroll.max, u = Al(r, a), l = hn({
    page: e.subject.page,
    withPlaceholder: s,
    axis: e.axis,
    frame: u
  });
  return {
    ...e,
    subject: l,
    frame: u
  };
}, fg = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot remove placeholder form subject when there was none") : D(!1));
  const n = e.frame;
  if (!n) {
    const s = hn({
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
  r || (process.env.NODE_ENV !== "production" ? D(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : D(!1));
  const o = Al(n, r), i = hn({
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
var pg = ({
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
    const c = {
      displaced: Qn,
      displacedBy: gl,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, f = ro({
      impact: c,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: a
    }), p = vn(r, i) ? i : wl(i, r, o);
    return Cl({
      draggable: r,
      destination: p,
      newPageBorderBoxCenter: f,
      viewport: s.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? c : null;
  }
  const u = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], l = (() => {
    const c = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || u ? c : c + 1;
  })(), d = ar(i.axis, r.displaceBy);
  return Wr({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: d,
    last: Qn,
    index: l
  });
}, hg = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: a
}) => {
  const u = ug({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!u)
    return null;
  const l = nn(u.descriptor.id, o), d = cg({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: u,
    insideDestination: l,
    afterCritical: a
  }), c = pg({
    previousPageBorderBoxCenter: t,
    destination: u,
    draggable: n,
    draggables: o,
    moveRelativeTo: d,
    insideDestination: l,
    viewport: s,
    afterCritical: a
  });
  if (!c)
    return null;
  const f = ro({
    impact: c,
    draggable: n,
    droppable: u,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: Qi({
      pageBorderBoxCenter: f,
      draggable: n,
      viewport: s
    }),
    impact: c,
    scrollJumpRequest: null
  };
}, nt = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const mg = (e, t) => {
  const n = nt(e);
  return n ? t[n] : null;
};
var gg = ({
  state: e,
  type: t
}) => {
  const n = mg(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, a = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const u = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], d = e.current.page.borderBoxCenter, {
    draggables: c,
    droppables: f
  } = e.dimensions;
  return a ? ag({
    isMovingForward: u,
    previousPageBorderBoxCenter: d,
    draggable: l,
    destination: i,
    draggables: c,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : hg({
    isMovingForward: u,
    previousPageBorderBoxCenter: d,
    draggable: l,
    isOver: i,
    draggables: c,
    droppables: f,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function Yt(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function _l(e) {
  const t = lt(e.top, e.bottom), n = lt(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function Dg(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Eg({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const s = i.axis, a = tn(i.axis.line, e.center[s.line], i.page.borderBox.center[s.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: Zn(r, a)
    };
  }).sort((i, s) => s.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function yg({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = eo(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !Dg(e, i))
      return !1;
    if (_l(i)(e.center))
      return !0;
    const s = o.axis, a = i.center[s.crossAxisLine], u = e[s.crossAxisStart], l = e[s.crossAxisEnd], d = lt(i[s.crossAxisStart], i[s.crossAxisEnd]), c = d(u), f = d(l);
    return !c && !f ? !0 : c ? u < a : l > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : Eg({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const Sl = (e, t) => ft(sr(e, t));
var vg = (e, t) => {
  const n = e.frame;
  return n ? Sl(t, n.scroll.diff.value) : t;
};
function Fl({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function bg({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Cg = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = n.axis, u = ar(n.axis, t.displaceBy), l = u.value, d = e[a.start], c = e[a.end], p = no(t, r).find((m) => {
    const h = m.descriptor.id, C = m.page.borderBox.center[a.line], A = Mt(h, s), b = Fl({
      displaced: o,
      id: h
    });
    return A ? b ? c <= C : d < C - l : b ? c <= C + l : d < C;
  }) || null, g = bg({
    draggable: t,
    closest: p,
    inHomeList: vn(t, n)
  });
  return Wr({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: u,
    index: g
  });
};
const Ag = 4;
var wg = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, a = ar(r.axis, e.displaceBy), u = a.value, l = t[s.start], d = t[s.end], f = no(e, o).find((g) => {
    const m = g.descriptor.id, h = g.page.borderBox, A = h[s.size] / Ag, b = Mt(m, i), v = Fl({
      displaced: n.displaced,
      id: m
    });
    return b ? v ? d > h[s.start] + A && d < h[s.end] - A : l > h[s.start] - u + A && l < h[s.end] - u - A : v ? d > h[s.start] + u + A && d < h[s.end] + u - A : l > h[s.start] + A && l < h[s.end] - A;
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
}, xl = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = Sl(t.page.borderBox, e), u = yg({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!u)
    return k0;
  const l = r[u], d = nn(l.descriptor.id, n), c = vg(l, a);
  return wg({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: d,
    afterCritical: s
  }) || Cg({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    destination: l,
    insideDestination: d,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, es = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const _g = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = nt(e), o = nt(t);
  if (!r || r === o)
    return n;
  const i = n[r];
  if (!i.subject.withPlaceholder)
    return n;
  const s = fg(i);
  return es(n, s);
};
var Sg = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = _g({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = nt(o);
  if (!s)
    return i;
  const a = n[s];
  if (vn(e, a) || a.subject.withPlaceholder)
    return i;
  const u = wl(a, e, t);
  return es(i, u);
}, Wn = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const s = r || e.viewport, a = n || e.dimensions, u = t || e.current.client.selection, l = tt(u, e.initial.client.selection), d = {
    offset: l,
    selection: u,
    borderBoxCenter: Ve(e.initial.client.borderBoxCenter, l)
  }, c = {
    selection: Ve(d.selection, s.scroll.current),
    borderBoxCenter: Ve(d.borderBoxCenter, s.scroll.current),
    offset: Ve(d.offset, s.scroll.diff.value)
  }, f = {
    client: d,
    page: c
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: a,
      viewport: s,
      current: f
    };
  const p = a.draggables[e.critical.draggable.id], g = o || xl({
    pageOffset: c.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: s,
    afterCritical: e.afterCritical
  }), m = Sg({
    draggable: p,
    impact: g,
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
    impact: g,
    viewport: s,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function Fg(e, t) {
  return e.map((n) => t[n]);
}
var Nl = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = Fg(i.all, n), a = er({
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
}, Ol = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const s = ro({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return Qi({
    pageBorderBoxCenter: s,
    draggable: t,
    viewport: o
  });
}, Tl = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, D(!1));
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: s,
    droppables: a
  } = i, u = s[e.critical.draggable.id], l = nt(r);
  l || (process.env.NODE_ENV !== "production" ? D(!1, "Must be over a destination in SNAP movement mode") : D(!1));
  const d = a[l], c = Nl({
    impact: r,
    viewport: o,
    destination: d,
    draggables: s
  }), f = Ol({
    impact: c,
    draggable: u,
    droppable: d,
    draggables: s,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Wn({
    impact: c,
    clientSelection: f,
    state: e,
    dimensions: i,
    viewport: o
  });
}, xg = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Bl = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = ar(t.axis, e.displaceBy), i = nn(t.descriptor.id, n), s = i.indexOf(e);
  s === -1 && (process.env.NODE_ENV !== "production" ? D(!1, "Expected draggable to be inside home list") : D(!1));
  const a = i.slice(s + 1), u = a.reduce((f, p) => (f[p.descriptor.id] = !0, f), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: u
  };
  return {
    impact: {
      displaced: er({
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
        destination: xg(e.descriptor)
      }
    },
    afterCritical: l
  };
}, Ng = (e, t) => ({
  draggables: e.draggables,
  droppables: es(e.droppables, t)
});
const ur = (e) => {
  process.env.NODE_ENV;
}, lr = (e) => {
  process.env.NODE_ENV;
};
var Og = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = jr(e.client, t), o = Gr(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, Tg = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? D(!1, "Expected Droppable to have a frame") : D(!1)), t;
}, Bg = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], u = Tg(s).scroll.diff.value, l = Ve(r, u);
    return Og({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, Ig = ({
  state: e,
  published: t
}) => {
  ur();
  const n = t.modified.map((C) => {
    const A = e.dimensions.droppables[C.droppableId];
    return Yi(A, C.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...hl(n)
  }, o = ml(Bg({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((C) => {
    delete i[C];
  });
  const s = {
    droppables: r,
    draggables: i
  }, a = nt(e.impact), u = a ? s.droppables[a] : null, l = s.draggables[e.critical.draggable.id], d = s.droppables[e.critical.droppable.id], {
    impact: c,
    afterCritical: f
  } = Bl({
    draggable: l,
    home: d,
    draggables: i,
    viewport: e.viewport
  }), p = u && u.isCombineEnabled ? e.impact : c, g = xl({
    pageOffset: e.current.page.offset,
    draggable: s.draggables[e.critical.draggable.id],
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: f
  });
  lr();
  const m = {
    ...e,
    phase: "DRAGGING",
    impact: g,
    onLiftImpact: c,
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
const hi = (e) => e.movementMode === "SNAP", So = (e, t, n) => {
  const r = Ng(e.dimensions, t);
  return !hi(e) || n ? Wn({
    state: e,
    dimensions: r
  }) : Tl({
    state: e,
    dimensions: r
  });
};
function Fo(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const ka = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Pg = (e = ka, t) => {
  if (t.type === "FLUSH")
    return {
      ...ka,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "INITIAL_PUBLISH must come after a IDLE phase") : D(!1));
    const {
      critical: n,
      clientSelection: r,
      viewport: o,
      dimensions: i,
      movementMode: s
    } = t.payload, a = i.draggables[n.draggable.id], u = i.droppables[n.droppable.id], l = {
      selection: r,
      borderBoxCenter: a.client.borderBox.center,
      offset: Me
    }, d = {
      client: l,
      page: {
        selection: Ve(l.selection, o.scroll.initial),
        borderBoxCenter: Ve(l.selection, o.scroll.initial),
        offset: Ve(l.selection, o.scroll.diff.value)
      }
    }, c = eo(i.droppables).every((m) => !m.isFixedOnPage), {
      impact: f,
      afterCritical: p
    } = Bl({
      draggable: a,
      home: u,
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
      isWindowScrollAllowed: c,
      impact: f,
      afterCritical: p,
      onLiftImpact: f,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? D(!1, `Collection cannot start from phase ${e.phase}`) : D(!1)), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? D(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : D(!1)), Ig({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Yt(e) || (process.env.NODE_ENV !== "production" ? D(!1, `${t.type} not permitted in phase ${e.phase}`) : D(!1));
    const {
      client: n
    } = t.payload;
    return Rt(n, e.current.client.selection) ? e : Wn({
      state: e,
      clientSelection: n,
      impact: hi(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Fo(e);
    Yt(e) || (process.env.NODE_ENV !== "production" ? D(!1, `${t.type} not permitted in phase ${e.phase}`) : D(!1));
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = Yi(o, r);
    return So(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Yt(e) || (process.env.NODE_ENV !== "production" ? D(!1, `Attempting to move in an unsupported phase ${e.phase}`) : D(!1));
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot find Droppable[id: ${n}] to toggle its enabled state`) : D(!1)), o.isEnabled === r && (process.env.NODE_ENV !== "production" ? D(!1, `Trying to set droppable isEnabled to ${String(r)}
      but it is already ${String(o.isEnabled)}`) : D(!1));
    const i = {
      ...o,
      isEnabled: r
    };
    return So(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Yt(e) || (process.env.NODE_ENV !== "production" ? D(!1, `Attempting to move in an unsupported phase ${e.phase}`) : D(!1));
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot find Droppable[id: ${n}] to toggle its isCombineEnabled state`) : D(!1)), o.isCombineEnabled === r && (process.env.NODE_ENV !== "production" ? D(!1, `Trying to set droppable isCombineEnabled to ${String(r)}
      but it is already ${String(o.isCombineEnabled)}`) : D(!1));
    const i = {
      ...o,
      isCombineEnabled: r
    };
    return So(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Yt(e) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot move by window in phase ${e.phase}`) : D(!1)), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? D(!1, "Window scrolling is currently not supported for fixed lists") : D(!1));
    const n = t.payload.newScroll;
    if (Rt(e.viewport.scroll.current, n))
      return Fo(e);
    const r = bl(e.viewport, n);
    return hi(e) ? Tl({
      state: e,
      viewport: r
    }) : Wn({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Yt(e))
      return e;
    const n = t.payload.maxScroll;
    if (Rt(n, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? D(!1, `${t.type} received while not in DRAGGING phase`) : D(!1));
    const n = gg({
      state: e,
      type: t.type
    });
    return n ? Wn({
      state: e,
      impact: n.impact,
      clientSelection: n.clientSelection,
      scrollJumpRequest: n.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const n = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? D(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : D(!1)), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot animate drop from phase ${e.phase}`) : D(!1)), {
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
const Rg = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Mg = (e) => ({
  type: "LIFT",
  payload: e
}), Lg = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), kg = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), $g = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Vg = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), jg = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), Gg = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Il = (e) => ({
  type: "MOVE",
  payload: e
}), Ug = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), Wg = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), zg = () => ({
  type: "MOVE_UP",
  payload: null
}), Hg = () => ({
  type: "MOVE_DOWN",
  payload: null
}), qg = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Yg = () => ({
  type: "MOVE_LEFT",
  payload: null
}), ts = () => ({
  type: "FLUSH",
  payload: null
}), Xg = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), ns = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Pl = (e) => ({
  type: "DROP",
  payload: e
}), Kg = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Rl = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function Jg(e) {
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
  process.env.NODE_ENV !== "production" && Ee(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${r}
  `);
}
function Zg(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = nn(e.droppable.id, t.draggables);
    Jg(n);
  }
}
var Qg = (e) => ({
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
  } = o.payload, u = t();
  u.phase === "DROP_ANIMATING" && n(ns({
    completed: u.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Unexpected phase to start a drag") : D(!1)), n(ts()), n(Rg({
    draggableId: i,
    movementMode: a
  }));
  const d = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: a === "SNAP"
    }
  }, {
    critical: c,
    dimensions: f,
    viewport: p
  } = e.startPublishing(d);
  Zg(c, f), n(Lg({
    critical: c,
    dimensions: f,
    clientSelection: s,
    movementMode: a,
    viewport: p
  }));
}, eD = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const rs = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, tr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Ml = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, jt = `${Ml.outOfTheWay}s ${rs.outOfTheWay}`, zn = {
  fluid: `opacity ${jt}`,
  snap: `transform ${jt}, opacity ${jt}`,
  drop: (e) => {
    const t = `${e}s ${rs.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${jt}`,
  placeholder: `height ${jt}, width ${jt}, margin ${jt}`
}, $a = (e) => Rt(e, Me) ? void 0 : `translate(${e.x}px, ${e.y}px)`, mi = {
  moveTo: $a,
  drop: (e, t) => {
    const n = $a(e);
    if (n)
      return t ? `${n} scale(${tr.scale.drop})` : n;
  }
}, {
  minDropTime: gi,
  maxDropTime: Ll
} = Ml, tD = Ll - gi, Va = 1500, nD = 0.6;
var rD = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = Zn(e, t);
  if (r <= 0)
    return gi;
  if (r >= Va)
    return Ll;
  const o = r / Va, i = gi + tD * o, s = n === "CANCEL" ? i * nD : i;
  return Number(s.toFixed(2));
}, oD = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = n, a = nt(e), u = a ? s[a] : null, l = s[t.descriptor.droppableId], d = Ol({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: u || l,
    viewport: r
  });
  return tt(d, t.client.borderBox.center);
}, iD = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: Nl({
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
    displaced: Qn
  },
  didDropInsideDroppable: !0
};
const sD = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Kg({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? D(!1, "A DROP action occurred while DROP_PENDING and still waiting") : D(!1)), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot drop in phase: ${o.phase}`) : D(!1));
  const a = o.critical, u = o.dimensions, l = u.draggables[o.critical.draggable.id], {
    impact: d,
    didDropInsideDroppable: c
  } = iD({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), f = c ? Xi(d) : null, p = c ? to(d) : null, g = {
    index: a.draggable.index,
    droppableId: a.droppable.id
  }, m = {
    draggableId: l.descriptor.id,
    type: l.descriptor.type,
    source: g,
    reason: i,
    mode: o.movementMode,
    destination: f,
    combine: p
  }, h = oD({
    impact: d,
    draggable: l,
    dimensions: u,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), C = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: m,
    impact: d
  };
  if (!(!Rt(o.current.client.offset, h) || !!m.combine)) {
    t(ns({
      completed: C
    }));
    return;
  }
  const b = rD({
    current: o.current.client.offset,
    destination: h,
    reason: i
  });
  t(Xg({
    newHomeClientOffset: h,
    dropDuration: b,
    completed: C
  }));
};
var aD = sD, kl = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function uD(e) {
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
function lD({
  onWindowScroll: e
}) {
  function t() {
    e(kl());
  }
  const n = Kn(t), r = uD(n);
  let o = Pt;
  function i() {
    return o !== Pt;
  }
  function s() {
    i() && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot start scroll listener when already active") : D(!1)), o = ut(window, [r]);
  }
  function a() {
    i() || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot stop scroll listener when not active") : D(!1)), n.cancel(), o(), o = Pt;
  }
  return {
    start: s,
    stop: a,
    isActive: i
  };
}
const cD = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", dD = (e) => {
  const t = lD({
    onWindowScroll: (n) => {
      e.dispatch(Ug({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && cD(r) && t.stop(), n(r);
  };
};
var fD = dD, pD = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && Ee("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && Ee(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(r);
  };
  return o.wasCalled = () => t, o;
}, hD = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((a) => a.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? D(!1, "Could not find timer") : D(!1));
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
const mD = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, gD = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, DD = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, Pn = (e, t) => {
  ur(), t(), lr();
}, br = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function xo(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = pD(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var ED = (e, t) => {
  const n = hD();
  let r = null;
  const o = (c, f) => {
    r && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : D(!1)), Pn("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: c,
        mode: f
      });
    });
  }, i = (c, f) => {
    r && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : D(!1)), Pn("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(br(c, f));
    });
  }, s = (c, f) => {
    r && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : D(!1));
    const p = br(c, f);
    r = {
      mode: f,
      lastCritical: c,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      Pn("onDragStart", () => xo(e().onDragStart, p, t, Br.onDragStart));
    });
  }, a = (c, f) => {
    const p = Xi(f), g = to(f);
    r || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onDragMove when onDragStart has not been called") : D(!1));
    const m = !DD(c, r.lastCritical);
    m && (r.lastCritical = c);
    const h = !mD(r.lastLocation, p);
    h && (r.lastLocation = p);
    const C = !gD(r.lastCombine, g);
    if (C && (r.lastCombine = g), !m && !h && !C)
      return;
    const A = {
      ...br(c, r.mode),
      combine: g,
      destination: p
    };
    n.add(() => {
      Pn("onDragUpdate", () => xo(e().onDragUpdate, A, t, Br.onDragUpdate));
    });
  }, u = () => {
    r || (process.env.NODE_ENV !== "production" ? D(!1, "Can only flush responders while dragging") : D(!1)), n.flush();
  }, l = (c) => {
    r || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : D(!1)), r = null, Pn("onDragEnd", () => xo(e().onDragEnd, c, t, Br.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: s,
    update: a,
    flush: u,
    drop: l,
    abort: () => {
      if (!r)
        return;
      const c = {
        ...br(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(c);
    }
  };
}, yD = (e, t) => {
  const n = ED(e, t);
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
const vD = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot finish a drop animating when no drop is occurring") : D(!1)), e.dispatch(ns({
    completed: r.completed
  }));
};
var bD = vD;
const CD = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Rl());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = ut(window, [s]);
    });
  };
};
var AD = CD, wD = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, _D = (e) => {
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
const SD = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var FD = (e) => (t) => (n) => (r) => {
  if (SD(r)) {
    e.stop(), n(r);
    return;
  }
  if (r.type === "INITIAL_PUBLISH") {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? D(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : D(!1)), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const xD = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(Pl({
    reason: r.reason
  })));
};
var ND = xD;
const OD = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Ju;
var TD = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => Ku(Pg, OD(Dm(eD(n), wD(e), Qg(e), aD, bD, AD, ND, FD(i), fD, _D(t), yD(r, o))));
const No = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function BD({
  registry: e,
  callbacks: t
}) {
  let n = No(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, ur();
      const {
        additions: u,
        removals: l,
        modified: d
      } = n, c = Object.keys(u).map((g) => e.draggable.getById(g).getDimension(Me)).sort((g, m) => g.descriptor.index - m.descriptor.index), f = Object.keys(d).map((g) => {
        const h = e.droppable.getById(g).callbacks.getScrollWhileDragging();
        return {
          droppableId: g,
          scroll: h
        };
      }), p = {
        additions: c,
        removals: Object.keys(l),
        modified: f
      };
      n = No(), lr(), t.publish(p);
    }));
  };
  return {
    add: (u) => {
      const l = u.descriptor.id;
      n.additions[l] = u, n.modified[u.descriptor.droppableId] = !0, n.removals[l] && delete n.removals[l], o();
    },
    remove: (u) => {
      const l = u.descriptor;
      n.removals[l.id] = !0, n.modified[l.droppableId] = !0, n.additions[l.id] && delete n.additions[l.id], o();
    },
    stop: () => {
      r && (cancelAnimationFrame(r), r = null, n = No());
    }
  };
}
var $l = ({
  scrollHeight: e,
  scrollWidth: t,
  height: n,
  width: r
}) => {
  const o = tt({
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
}, Vl = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot find document.documentElement") : D(!1)), e;
}, jl = () => {
  const e = Vl();
  return $l({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, ID = () => {
  const e = kl(), t = jl(), n = e.y, r = e.x, o = Vl(), i = o.clientWidth, s = o.clientHeight, a = r + i, u = n + s;
  return {
    frame: ft({
      top: n,
      left: r,
      right: a,
      bottom: u
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: Me,
        displacement: Me
      }
    }
  };
}, PD = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  ur();
  const r = ID(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((d) => d.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((d) => d.getDimension(o)), u = {
    draggables: ml(a),
    droppables: hl(s)
  };
  return lr(), {
    dimensions: u,
    critical: e,
    viewport: r
  };
};
function ja(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && Ee(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var RD = (e, t) => {
  let n = null;
  const r = BD({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (f, p) => {
    e.droppable.exists(f) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot update is enabled flag of Droppable ${f} as it is not registered`) : D(!1)), n && t.updateDroppableIsEnabled({
      id: f,
      isEnabled: p
    });
  }, i = (f, p) => {
    n && (e.droppable.exists(f) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot update isCombineEnabled flag of Droppable ${f} as it is not registered`) : D(!1)), t.updateDroppableIsCombineEnabled({
      id: f,
      isCombineEnabled: p
    }));
  }, s = (f, p) => {
    n && (e.droppable.exists(f) || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot update the scroll on Droppable ${f} as it is not registered`) : D(!1)), t.updateDroppableScroll({
      id: f,
      newScroll: p
    }));
  }, a = (f, p) => {
    n && e.droppable.getById(f).callbacks.scroll(p);
  }, u = () => {
    if (!n)
      return;
    r.stop();
    const f = n.critical.droppable;
    e.droppable.getAllByType(f.type).forEach((p) => p.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, l = (f) => {
    n || (process.env.NODE_ENV !== "production" ? D(!1, "Should only be subscribed when a collection is occurring") : D(!1));
    const p = n.critical.draggable;
    f.type === "ADDITION" && ja(e, p, f.value) && r.add(f.value), f.type === "REMOVAL" && ja(e, p, f.value) && r.remove(f.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: a,
    updateDroppableScroll: s,
    startPublishing: (f) => {
      n && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot start capturing critical dimensions as there is already a collection") : D(!1));
      const p = e.draggable.getById(f.draggableId), g = e.droppable.getById(p.descriptor.droppableId), m = {
        draggable: p.descriptor,
        droppable: g.descriptor
      }, h = e.subscribe(l);
      return n = {
        critical: m,
        unsubscribe: h
      }, PD({
        critical: m,
        registry: e,
        scrollOptions: f.scrollOptions
      });
    },
    stopPublishing: u
  };
}, Gl = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", MD = (e) => {
  window.scrollBy(e.x, e.y);
};
const LD = Re((e) => eo(e).filter((t) => !(!t.isEnabled || !t.frame))), kD = (e, t) => LD(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? D(!1, "Invalid result") : D(!1)), _l(r.frame.pageMarginBox)(e))) || null;
var $D = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return kD(e, n);
};
const nr = {
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
var VD = (e, t, n = () => nr) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Ul = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? (process.env.NODE_ENV !== "production" && Ee(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (n - e) / r;
}, os = 1, jD = (e, t, n = () => nr) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return os;
  const i = 1 - Ul({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = r.maxPixelScroll * r.ease(i);
  return Math.ceil(s);
}, GD = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, s = t, a = i, l = Date.now() - s;
  if (l >= i)
    return e;
  if (l < o)
    return os;
  const d = Ul({
    startOfRange: o,
    endOfRange: a,
    current: l
  }), c = e * r.ease(d);
  return Math.ceil(c);
}, Ga = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = jD(e, t, o);
  return i === 0 ? 0 : r ? Math.max(GD(i, n, o), os) : i;
}, Ua = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = VD(e, r, i);
  return t[r.end] < t[r.start] ? Ga({
    distanceToEdge: t[r.end],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * Ga({
    distanceToEdge: t[r.start],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, UD = ({
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
const WD = pl((e) => e === 0 ? 0 : e);
var Wl = ({
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
  }, a = Ua({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Ki,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), u = Ua({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: El,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = WD({
    x: u,
    y: a
  });
  if (Rt(l, Me))
    return null;
  const d = UD({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return d ? Rt(d, Me) ? null : d : null;
};
const zD = pl((e) => e === 0 ? 0 : e > 0 ? 1 : -1), is = (() => {
  const e = (t, n) => t < 0 ? t : t > n ? t - n : 0;
  return ({
    current: t,
    max: n,
    change: r
  }) => {
    const o = Ve(t, r), i = {
      x: e(o.x, n.x),
      y: e(o.y, n.y)
    };
    return Rt(i, Me) ? null : i;
  };
})(), zl = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = zD(n), i = is({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, ss = (e, t) => zl({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), HD = (e, t) => {
  if (!ss(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return is({
    current: r,
    max: n,
    change: t
  });
}, as = (e, t) => {
  const n = e.frame;
  return n ? zl({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, qD = (e, t) => {
  const n = e.frame;
  return !n || !as(e, t) ? null : is({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var YD = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = Wl({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && ss(e, s) ? s : null;
}, XD = ({
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
  const a = Wl({
    dragStartTime: r,
    container: s.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && as(e, a) ? a : null;
}, Wa = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, u = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const c = e.viewport, f = YD({
      dragStartTime: t,
      viewport: c,
      subject: u,
      center: s,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: i
    });
    if (f) {
      r(f);
      return;
    }
  }
  const l = $D({
    center: s,
    destination: nt(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const d = XD({
    dragStartTime: t,
    droppable: l,
    subject: u,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  d && o(l.descriptor.id, d);
}, KD = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => nr
}) => {
  const r = Kn(e), o = Kn(t);
  let i = null;
  const s = (l) => {
    i || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot fluid scroll if not dragging") : D(!1));
    const {
      shouldUseTimeDampening: d,
      dragStartTime: c
    } = i;
    Wa({
      state: l,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: c,
      shouldUseTimeDampening: d,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (l) => {
      ur(), i && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot start auto scrolling when already started") : D(!1));
      const d = Date.now();
      let c = !1;
      const f = () => {
        c = !0;
      };
      Wa({
        state: l,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: f,
        scrollDroppable: f,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: d,
        shouldUseTimeDampening: c
      }, lr(), c && s(l);
    },
    stop: () => {
      i && (r.cancel(), o.cancel(), i = null);
    },
    scroll: s
  };
}, JD = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: n
}) => {
  const r = (a, u) => {
    const l = Ve(a.current.client.selection, u);
    e({
      client: l
    });
  }, o = (a, u) => {
    if (!as(a, u))
      return u;
    const l = qD(a, u);
    if (!l)
      return t(a.descriptor.id, u), null;
    const d = tt(u, l);
    return t(a.descriptor.id, d), tt(u, d);
  }, i = (a, u, l) => {
    if (!a || !ss(u, l))
      return l;
    const d = HD(u, l);
    if (!d)
      return n(l), null;
    const c = tt(l, d);
    return n(c), tt(l, c);
  };
  return (a) => {
    const u = a.scrollJumpRequest;
    if (!u)
      return;
    const l = nt(a.impact);
    l || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot perform a jump scroll when there is no destination") : D(!1));
    const d = o(a.dimensions.droppables[l], u);
    if (!d)
      return;
    const c = a.viewport, f = i(a.isWindowScrollAllowed, c, d);
    f && r(a, f);
  };
}, ZD = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = KD({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = JD({
    move: n,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (u) => {
      if (!(r().disabled || u.phase !== "DRAGGING")) {
        if (u.movementMode === "FLUID") {
          o.scroll(u);
          return;
        }
        u.scrollJumpRequest && i(u);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const mn = "data-rfd", gn = (() => {
  const e = `${mn}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Di = (() => {
  const e = `${mn}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), QD = (() => {
  const e = `${mn}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), za = {
  contextId: `${mn}-scroll-container-context-id`
}, eE = (e) => (t) => `[${t}="${e}"]`, Rn = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), tE = "pointer-events: none;";
var nE = (e) => {
  const t = eE(e), n = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(gn.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: tE,
        dropAnimating: a
      }
    };
  })(), r = (() => {
    const a = `
      transition: ${zn.outOfTheWay};
    `;
    return {
      selector: t(Di.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(QD.contextId),
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
    always: Rn(s, "always"),
    resting: Rn(s, "resting"),
    dragging: Rn(s, "dragging"),
    dropAnimating: Rn(s, "dropAnimating"),
    userCancel: Rn(s, "userCancel")
  };
};
const rE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? w.useLayoutEffect : w.useEffect;
var rt = rE;
const Oo = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot find the head to append a style to") : D(!1)), e;
}, Ha = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function oE(e, t) {
  const n = ie(() => nE(e), [e]), r = w.useRef(null), o = w.useRef(null), i = U(Re((c) => {
    const f = o.current;
    f || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot set dynamic style element if it is not set") : D(!1)), f.textContent = c;
  }), []), s = U((c) => {
    const f = r.current;
    f || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot set dynamic style element if it is not set") : D(!1)), f.textContent = c;
  }, []);
  rt(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? D(!1, "style elements already mounted") : D(!1));
    const c = Ha(t), f = Ha(t);
    return r.current = c, o.current = f, c.setAttribute(`${mn}-always`, e), f.setAttribute(`${mn}-dynamic`, e), Oo().appendChild(c), Oo().appendChild(f), s(n.always), i(n.resting), () => {
      const p = (g) => {
        const m = g.current;
        m || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot unmount ref as it is not set") : D(!1)), Oo().removeChild(m), g.current = null;
      };
      p(r), p(o);
    };
  }, [t, s, i, n.always, n.resting, e]);
  const a = U(() => i(n.dragging), [i, n.dragging]), u = U((c) => {
    if (c === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), l = U(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return ie(() => ({
    dragging: a,
    dropping: u,
    resting: l
  }), [a, u, l]);
}
function Hl(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var ql = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function cr(e) {
  return e instanceof ql(e).HTMLElement;
}
function Yl(e, t) {
  const n = `[${gn.contextId}="${e}"]`, r = Hl(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && Ee(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(gn.draggableId) === t);
  return o ? cr(o) ? o : (process.env.NODE_ENV !== "production" && Ee("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Ee(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function iE(e) {
  const t = w.useRef({}), n = w.useRef(null), r = w.useRef(null), o = w.useRef(!1), i = U(function(f, p) {
    const g = {
      id: f,
      focus: p
    };
    return t.current[f] = g, function() {
      const h = t.current;
      h[f] !== g && delete h[f];
    };
  }, []), s = U(function(f) {
    const p = Yl(e, f);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = U(function(f, p) {
    n.current === f && (n.current = p);
  }, []), u = U(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const f = n.current;
      f && s(f);
    }));
  }, [s]), l = U(function(f) {
    n.current = null;
    const p = document.activeElement;
    p && p.getAttribute(gn.draggableId) === f && (n.current = f);
  }, []);
  return rt(() => (o.current = !0, function() {
    o.current = !1;
    const f = r.current;
    f && cancelAnimationFrame(f);
  }), []), ie(() => ({
    register: i,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: u,
    tryShiftRecord: a
  }), [i, l, u, a]);
}
function sE() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function n(c) {
    return t.push(c), function() {
      const p = t.indexOf(c);
      p !== -1 && t.splice(p, 1);
    };
  }
  function r(c) {
    t.length && t.forEach((f) => f(c));
  }
  function o(c) {
    return e.draggables[c] || null;
  }
  function i(c) {
    const f = o(c);
    return f || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot find draggable entry with id [${c}]`) : D(!1)), f;
  }
  const s = {
    register: (c) => {
      e.draggables[c.descriptor.id] = c, r({
        type: "ADDITION",
        value: c
      });
    },
    update: (c, f) => {
      const p = e.draggables[f.descriptor.id];
      p && p.uniqueId === c.uniqueId && (delete e.draggables[f.descriptor.id], e.draggables[c.descriptor.id] = c);
    },
    unregister: (c) => {
      const f = c.descriptor.id, p = o(f);
      p && c.uniqueId === p.uniqueId && (delete e.draggables[f], e.droppables[c.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: c
      }));
    },
    getById: i,
    findById: o,
    exists: (c) => !!o(c),
    getAllByType: (c) => Object.values(e.draggables).filter((f) => f.descriptor.type === c)
  };
  function a(c) {
    return e.droppables[c] || null;
  }
  function u(c) {
    const f = a(c);
    return f || (process.env.NODE_ENV !== "production" ? D(!1, `Cannot find droppable entry with id [${c}]`) : D(!1)), f;
  }
  const l = {
    register: (c) => {
      e.droppables[c.descriptor.id] = c;
    },
    unregister: (c) => {
      const f = a(c.descriptor.id);
      f && c.uniqueId === f.uniqueId && delete e.droppables[c.descriptor.id];
    },
    getById: u,
    findById: a,
    exists: (c) => !!a(c),
    getAllByType: (c) => Object.values(e.droppables).filter((f) => f.descriptor.type === c)
  };
  function d() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: s,
    droppable: l,
    subscribe: n,
    clean: d
  };
}
function aE() {
  const e = ie(sE, []);
  return w.useEffect(() => function() {
    F.version.startsWith("16") || F.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var us = F.createContext(null), rr = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot find document.body") : D(!1)), e;
};
const uE = {
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
var lE = uE;
const cE = (e) => `rfd-announcement-${e}`;
function dE(e) {
  const t = ie(() => cE(e), [e]), n = w.useRef(null);
  return w.useEffect(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), dn(i.style, lE), rr().appendChild(i), function() {
      setTimeout(function() {
        const u = rr();
        u.contains(i) && u.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), U((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && Ee(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let fE = 0;
const Xl = {
  separator: "::"
};
function pE(e, t = Xl) {
  return ie(() => `${e}${t.separator}${fE++}`, [t.separator, e]);
}
function hE(e, t = Xl) {
  const n = F.useId();
  return ie(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var ls = "useId" in F ? hE : pE;
function mE({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function gE({
  contextId: e,
  text: t
}) {
  const n = ls("hidden-text", {
    separator: "-"
  }), r = ie(() => mE({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return w.useEffect(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", rr().appendChild(i), function() {
      const a = rr();
      a.contains(i) && a.removeChild(i);
    };
  }, [r, t]), r;
}
var oo = F.createContext(null), DE = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const EE = /(\d+)\.(\d+)\.(\d+)/, qa = (e) => {
  const t = EE.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? D(!1, `Unable to parse React version ${e}`) : D(!1));
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, yE = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var vE = (e, t) => {
  const n = qa(e), r = qa(t);
  yE(n, r) || process.env.NODE_ENV !== "production" && Ee(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const To = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var bE = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && Ee(`
      No <!doctype html> found.

      ${To}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && Ee(`
      Unexpected <!doctype> found: (${t.name})

      ${To}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && Ee(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${To}
    `);
};
function cs(e) {
  process.env.NODE_ENV !== "production" && e();
}
function dr(e, t) {
  cs(() => {
    w.useEffect(() => {
      try {
        e();
      } catch (n) {
        fi(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function CE() {
  dr(() => {
    vE(DE.react, F.version), bE(document);
  }, []);
}
function ds(e) {
  const t = w.useRef(e);
  return w.useEffect(() => {
    t.current = e;
  }), t;
}
function AE() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(s) {
    return s === e;
  }
  function r(s) {
    e && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot claim lock as it is already claimed") : D(!1));
    const a = {
      abandon: s
    };
    return e = a, a;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot release lock when there is no lock") : D(!1)), e = null;
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
function or(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const wE = 9, _E = 13, fs = 27, Kl = 32, SE = 33, FE = 34, xE = 35, NE = 36, OE = 37, TE = 38, BE = 39, IE = 40, PE = {
  [_E]: !0,
  [wE]: !0
};
var Jl = (e) => {
  PE[e.keyCode] && e.preventDefault();
};
const RE = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var io = RE;
const Zl = 0, Ya = 5;
function ME(e, t) {
  return Math.abs(t.x - e.x) >= Ya || Math.abs(t.y - e.y) >= Ya;
}
const Xa = {
  type: "IDLE"
};
function LE({
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
      if (i !== Zl)
        return;
      const u = {
        x: s,
        y: a
      }, l = n();
      if (l.type === "DRAGGING") {
        o.preventDefault(), l.actions.move(u);
        return;
      }
      l.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot be IDLE") : D(!1));
      const d = l.point;
      if (!ME(d, u))
        return;
      o.preventDefault();
      const c = l.actions.fluidLift(u);
      r({
        type: "DRAGGING",
        actions: c
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
      if (o.keyCode === fs) {
        o.preventDefault(), e();
        return;
      }
      Jl(o);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Unexpected phase") : D(!1)), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: io,
    fn: e
  }];
}
function kE(e) {
  const t = w.useRef(Xa), n = w.useRef(Pt), r = ie(() => ({
    eventName: "mousedown",
    fn: function(c) {
      if (c.defaultPrevented || c.button !== Zl || c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)
        return;
      const f = e.findClosestDraggableId(c);
      if (!f)
        return;
      const p = e.tryGetLock(f, s, {
        sourceEvent: c
      });
      if (!p)
        return;
      c.preventDefault();
      const g = {
        x: c.clientX,
        y: c.clientY
      };
      n.current(), l(p, g);
    }
  }), [e]), o = ie(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (d) => {
      if (d.defaultPrevented)
        return;
      const c = e.findClosestDraggableId(d);
      if (!c)
        return;
      const f = e.findOptionsForDraggable(c);
      f && (f.shouldRespectForcePress || e.canGetLock(c) && d.preventDefault());
    }
  }), [e]), i = U(function() {
    const c = {
      passive: !1,
      capture: !0
    };
    n.current = ut(window, [o, r], c);
  }, [o, r]), s = U(() => {
    t.current.type !== "IDLE" && (t.current = Xa, n.current(), i());
  }, [i]), a = U(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), u = U(function() {
    const c = {
      capture: !0,
      passive: !1
    }, f = LE({
      cancel: a,
      completed: s,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = ut(window, f, c);
  }, [a, s]), l = U(function(c, f) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Expected to move from IDLE to PENDING drag") : D(!1)), t.current = {
      type: "PENDING",
      point: f,
      actions: c
    }, u();
  }, [u]);
  rt(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function $E() {
}
const VE = {
  [FE]: !0,
  [SE]: !0,
  [NE]: !0,
  [xE]: !0
};
function jE(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === fs) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Kl) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === IE) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === TE) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === BE) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === OE) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (VE[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Jl(o);
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
    eventName: io,
    fn: n
  }];
}
function GE(e) {
  const t = w.useRef($E), n = ie(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Kl)
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
      let u = !0;
      const l = a.snapLift();
      t.current();
      function d() {
        u || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot stop capturing a keyboard drag when not capturing") : D(!1)), u = !1, t.current(), r();
      }
      t.current = ut(window, jE(l, d), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = U(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = ut(window, [n], i);
  }, [n]);
  rt(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const Bo = {
  type: "IDLE"
}, UE = 120, WE = 0.15;
function zE({
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
      n.keyCode === fs && n.preventDefault(), e();
    }
  }, {
    eventName: io,
    fn: e
  }];
}
function HE({
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
      o.type === "IDLE" && (process.env.NODE_ENV, D(!1));
      const i = r.touches[0];
      if (!i || !(i.force >= WE))
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
    eventName: io,
    fn: e
  }];
}
function qE(e) {
  const t = w.useRef(Bo), n = w.useRef(Pt), r = U(function() {
    return t.current;
  }, []), o = U(function(p) {
    t.current = p;
  }, []), i = ie(() => ({
    eventName: "touchstart",
    fn: function(p) {
      if (p.defaultPrevented)
        return;
      const g = e.findClosestDraggableId(p);
      if (!g)
        return;
      const m = e.tryGetLock(g, a, {
        sourceEvent: p
      });
      if (!m)
        return;
      const h = p.touches[0], {
        clientX: C,
        clientY: A
      } = h, b = {
        x: C,
        y: A
      };
      n.current(), c(m, b);
    }
  }), [e]), s = U(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = ut(window, [i], p);
  }, [i]), a = U(() => {
    const f = t.current;
    f.type !== "IDLE" && (f.type === "PENDING" && clearTimeout(f.longPressTimerId), o(Bo), n.current(), s());
  }, [s, o]), u = U(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), l = U(function() {
    const p = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: u,
      completed: a,
      getPhase: r
    }, m = ut(window, HE(g), p), h = ut(window, zE(g), p);
    n.current = function() {
      m(), h();
    };
  }, [u, r, a]), d = U(function() {
    const p = r();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? D(!1, `Cannot start dragging from phase ${p.type}`) : D(!1));
    const g = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: g,
      hasMoved: !1
    });
  }, [r, o]), c = U(function(p, g) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? D(!1, "Expected to move from IDLE to PENDING drag") : D(!1));
    const m = setTimeout(d, UE);
    o({
      type: "PENDING",
      point: g,
      actions: p,
      longPressTimerId: m
    }), l();
  }, [l, r, o, d]);
  rt(function() {
    return s(), function() {
      n.current();
      const g = r();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), o(Bo));
    };
  }, [r, s, o]), rt(function() {
    return ut(window, [{
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
function YE(e) {
  cs(() => {
    const t = ds(e);
    dr(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot change the amount of sensor hooks after mounting") : D(!1));
    });
  });
}
const XE = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Ql(e, t) {
  if (t == null)
    return !1;
  if (XE.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Ql(e, t.parentElement);
}
function KE(e, t) {
  const n = t.target;
  return cr(n) ? Ql(e, n) : !1;
}
var JE = (e) => ft(e.getBoundingClientRect()).center;
function ZE(e) {
  return e instanceof ql(e).Element;
}
const QE = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function ec(e, t) {
  return e == null ? null : e[QE](t) ? e : ec(e.parentElement, t);
}
function ey(e, t) {
  return e.closest ? e.closest(t) : ec(e, t);
}
function ty(e) {
  return `[${gn.contextId}="${e}"]`;
}
function ny(e, t) {
  const n = t.target;
  if (!ZE(n))
    return process.env.NODE_ENV !== "production" && Ee("event.target must be a Element"), null;
  const r = ty(e), o = ey(n, r);
  return o ? cr(o) ? o : (process.env.NODE_ENV !== "production" && Ee("drag handle must be a HTMLElement"), null) : null;
}
function ry(e, t) {
  const n = ny(e, t);
  return n ? n.getAttribute(gn.draggableId) : null;
}
function oy(e, t) {
  const n = `[${Di.contextId}="${e}"]`, o = Hl(document, n).find((i) => i.getAttribute(Di.id) === t);
  return o ? cr(o) ? o : (process.env.NODE_ENV !== "production" && Ee("Draggable element is not a HTMLElement"), null) : null;
}
function iy(e) {
  e.preventDefault();
}
function Cr({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return n() ? e !== t ? (r && process.env.NODE_ENV !== "production" && Ee(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (r && process.env.NODE_ENV !== "production" && Ee(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function tc({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !Gl(t.getState(), r)) : (process.env.NODE_ENV !== "production" && Ee(`Unable to find draggable with id: ${r}`), !1);
}
function sy({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s
}) {
  if (!tc({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const u = r.draggable.getById(o), l = oy(t, u.descriptor.id);
  if (!l)
    return process.env.NODE_ENV !== "production" && Ee(`Unable to find draggable element with id: ${o}`), null;
  if (s && !u.options.canDragInteractiveElements && KE(l, s))
    return null;
  const d = e.claim(i || Pt);
  let c = "PRE_DRAG";
  function f() {
    return u.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(d);
  }
  function g(E, _) {
    Cr({
      expected: E,
      phase: c,
      isLockActive: p,
      shouldWarn: !0
    }) && n.dispatch(_());
  }
  const m = g.bind(null, "DRAGGING");
  function h(E) {
    function _() {
      e.release(), c = "COMPLETED";
    }
    c !== "PRE_DRAG" && (_(), process.env.NODE_ENV !== "production" ? D(!1, `Cannot lift in phase ${c}`) : D(!1)), n.dispatch(Mg(E.liftActionArgs)), c = "DRAGGING";
    function I(R, $ = {
      shouldBlockNextClick: !1
    }) {
      if (E.cleanup(), $.shouldBlockNextClick) {
        const O = ut(window, [{
          eventName: "click",
          fn: iy,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(O);
      }
      _(), n.dispatch(Pl({
        reason: R
      }));
    }
    return {
      isActive: () => Cr({
        expected: "DRAGGING",
        phase: c,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: f,
      drop: (R) => I("DROP", R),
      cancel: (R) => I("CANCEL", R),
      ...E.actions
    };
  }
  function C(E) {
    const _ = Kn((R) => {
      m(() => Il({
        client: R
      }));
    });
    return {
      ...h({
        liftActionArgs: {
          id: o,
          clientSelection: E,
          movementMode: "FLUID"
        },
        cleanup: () => _.cancel(),
        actions: {
          move: _
        }
      }),
      move: _
    };
  }
  function A() {
    const E = {
      moveUp: () => m(zg),
      moveRight: () => m(qg),
      moveDown: () => m(Hg),
      moveLeft: () => m(Yg)
    };
    return h({
      liftActionArgs: {
        id: o,
        clientSelection: JE(l),
        movementMode: "SNAP"
      },
      cleanup: Pt,
      actions: E
    });
  }
  function b() {
    Cr({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Cr({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: f,
    fluidLift: C,
    snapLift: A,
    abort: b
  };
}
const ay = [kE, GE, qE];
function uy({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? ay : [], ...r || []], s = w.useState(() => AE())[0], a = U(function(h, C) {
    or(h) && !or(C) && s.tryAbandon();
  }, [s]);
  rt(function() {
    let h = t.getState();
    return t.subscribe(() => {
      const A = t.getState();
      a(h, A), h = A;
    });
  }, [s, t, a]), rt(() => s.tryAbandon, [s.tryAbandon]);
  const u = U((m) => tc({
    lockAPI: s,
    registry: n,
    store: t,
    draggableId: m
  }), [s, n, t]), l = U((m, h, C) => sy({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: m,
    forceSensorStop: h || null,
    sourceEvent: C && C.sourceEvent ? C.sourceEvent : null
  }), [e, s, n, t]), d = U((m) => ry(e, m), [e]), c = U((m) => {
    const h = n.draggable.findById(m);
    return h ? h.options : null;
  }, [n.draggable]), f = U(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(ts()));
  }, [s, t]), p = U(() => s.isClaimed(), [s]), g = ie(() => ({
    canGetLock: u,
    tryGetLock: l,
    findClosestDraggableId: d,
    findOptionsForDraggable: c,
    tryReleaseLock: f,
    isLockClaimed: p
  }), [u, l, d, c, f, p]);
  YE(i);
  for (let m = 0; m < i.length; m++)
    i[m](g);
}
const ly = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    F.version.startsWith("16") || F.version.startsWith("17") ? n() : wi.flushSync(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), cy = (e) => ({
  ...nr,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...nr.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Mn(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find store from lazy ref") : D(!1)), e.current;
}
function dy(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = w.useRef(null);
  CE();
  const a = ds(e), u = U(() => ly(a.current), [a]), l = U(() => cy(a.current), [a]), d = dE(t), c = gE({
    contextId: t,
    text: i
  }), f = oE(t, o), p = U((O) => {
    Mn(s).dispatch(O);
  }, []), g = ie(() => ia({
    publishWhileDragging: kg,
    updateDroppableScroll: Vg,
    updateDroppableIsEnabled: jg,
    updateDroppableIsCombineEnabled: Gg,
    collectionStarting: $g
  }, p), [p]), m = aE(), h = ie(() => RD(m, g), [m, g]), C = ie(() => ZD({
    scrollWindow: MD,
    scrollDroppable: h.scrollDroppable,
    getAutoScrollerOptions: l,
    ...ia({
      move: Il
    }, p)
  }), [h.scrollDroppable, p, l]), A = iE(t), b = ie(() => TD({
    announce: d,
    autoScroller: C,
    dimensionMarshal: h,
    focusMarshal: A,
    getResponders: u,
    styleMarshal: f
  }), [d, C, h, A, u, f]);
  process.env.NODE_ENV !== "production" && s.current && s.current !== b && process.env.NODE_ENV !== "production" && Ee("unexpected store change"), s.current = b;
  const v = U(() => {
    const O = Mn(s);
    O.getState().phase !== "IDLE" && O.dispatch(ts());
  }, []), E = U(() => {
    const O = Mn(s).getState();
    return O.phase === "DROP_ANIMATING" ? !0 : O.phase === "IDLE" ? !1 : O.isDragging;
  }, []), _ = ie(() => ({
    isDragging: E,
    tryAbort: v
  }), [E, v]);
  n(_);
  const I = U((O) => Gl(Mn(s).getState(), O), []), R = U(() => Yt(Mn(s).getState()), []), $ = ie(() => ({
    marshal: h,
    focus: A,
    contextId: t,
    canLift: I,
    isMovementAllowed: R,
    dragHandleUsageInstructionsId: c,
    registry: m
  }), [t, h, c, A, I, R, m]);
  return uy({
    contextId: t,
    store: b,
    registry: m,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), w.useEffect(() => v, [v]), F.createElement(oo.Provider, {
    value: $
  }, F.createElement(a0, {
    context: us,
    store: b
  }, e.children));
}
let fy = 0;
function py() {
  return ie(() => `${fy++}`, []);
}
function hy() {
  return F.useId();
}
var my = "useId" in F ? hy : py;
function Zb(e) {
  const t = my(), n = e.dragHandleUsageInstructions || Br.dragHandleUsageInstructions;
  return F.createElement(w0, null, (r) => F.createElement(dy, {
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
const Ka = {
  dragging: 5e3,
  dropAnimating: 4500
}, gy = (e, t) => t ? zn.drop(t.duration) : e ? zn.snap : zn.fluid, Dy = (e, t) => {
  if (e)
    return t ? tr.opacity.drop : tr.opacity.combining;
}, Ey = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function yy(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, a = Ey(e), u = !!i, l = u ? mi.drop(r, s) : mi.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: gy(a, i),
    transform: l,
    opacity: Dy(s, u),
    zIndex: u ? Ka.dropAnimating : Ka.dragging,
    pointerEvents: "none"
  };
}
function vy(e) {
  return {
    transform: mi.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function by(e) {
  return e.type === "DRAGGING" ? yy(e) : vy(e);
}
function Cy(e, t, n = Me) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = ul(o, r), s = Gr(i, n), a = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: r.display
  }, u = {
    x: i.marginBox.width,
    y: i.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: a,
    displaceBy: u,
    client: i,
    page: s
  };
}
function Ay(e) {
  const t = ls("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  } = e, u = ie(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  }), [i, a, s]), l = U((p) => {
    const g = o();
    return g || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot get dimension when no ref is set") : D(!1)), Cy(n, g, p);
  }, [n, o]), d = ie(() => ({
    uniqueId: t,
    descriptor: n,
    options: u,
    getDimension: l
  }), [n, l, u, t]), c = w.useRef(d), f = w.useRef(!0);
  rt(() => (r.draggable.register(c.current), () => r.draggable.unregister(c.current)), [r.draggable]), rt(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const p = c.current;
    c.current = d, r.draggable.update(d, p);
  }, [d, r.draggable]);
}
var ps = F.createContext(null);
function nc(e) {
  e && cr(e) || (process.env.NODE_ENV !== "production" ? D(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : D(!1));
}
function wy(e, t, n) {
  dr(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? D(!1, "Draggable requires a draggableId") : D(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? D(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : D(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? D(!1, `${r(o)} requires an integer index prop`) : D(!1)), e.mapped.type !== "DRAGGING" && (nc(n()), e.isEnabled && (Yl(t, o) || (process.env.NODE_ENV !== "production" ? D(!1, `${r(o)} Unable to find drag handle`) : D(!1))));
  });
}
function _y(e) {
  cs(() => {
    const t = w.useRef(e);
    dr(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? D(!1, "Draggable isClone prop value changed during component life") : D(!1));
    }, [e]);
  });
}
function zr(e) {
  const t = w.useContext(e);
  return t || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find required context") : D(!1)), t;
}
function Sy(e) {
  e.preventDefault();
}
const Fy = (e) => {
  const t = w.useRef(null), n = U((_ = null) => {
    t.current = _;
  }, []), r = U(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = zr(oo), {
    type: a,
    droppableId: u
  } = zr(ps), l = ie(() => ({
    id: e.draggableId,
    index: e.index,
    type: a,
    droppableId: u
  }), [e.draggableId, e.index, a, u]), {
    children: d,
    draggableId: c,
    isEnabled: f,
    shouldRespectForcePress: p,
    canDragInteractiveElements: g,
    isClone: m,
    mapped: h,
    dropAnimationFinished: C
  } = e;
  if (wy(e, o, r), _y(m), !m) {
    const _ = ie(() => ({
      descriptor: l,
      registry: s,
      getDraggableRef: r,
      canDragInteractiveElements: g,
      shouldRespectForcePress: p,
      isEnabled: f
    }), [l, s, r, g, p, f]);
    Ay(_);
  }
  const A = ie(() => f ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Sy
  } : null, [o, i, c, f]), b = U((_) => {
    h.type === "DRAGGING" && h.dropping && _.propertyName === "transform" && (F.version.startsWith("16") || F.version.startsWith("17") ? C() : wi.flushSync(C));
  }, [C, h]), v = ie(() => {
    const _ = by(h), I = h.type === "DRAGGING" && h.dropping ? b : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: _,
        onTransitionEnd: I
      },
      dragHandleProps: A
    };
  }, [o, A, c, h, b, n]), E = ie(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return F.createElement(F.Fragment, null, d(v, h.snapshot, E));
};
var xy = Fy, rc = (e, t) => e === t, oc = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const Ny = (e) => e.combine ? e.combine.draggableId : null, Oy = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Ty() {
  const e = Re((o, i) => ({
    x: o,
    y: i
  })), t = Re((o, i, s = null, a = null, u = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!u,
    dropAnimation: u,
    mode: o,
    draggingOver: s,
    combineWith: a,
    combineTargetFor: null
  })), n = Re((o, i, s, a, u = null, l = null, d = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: u,
      combineWith: l,
      mode: i,
      offset: o,
      dimension: s,
      forceShouldAnimate: d,
      snapshot: t(i, a, u, l, null)
    }
  }));
  return (o, i) => {
    if (or(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, a = o.dimensions.draggables[i.draggableId], u = nt(o.impact), l = Oy(o.impact), d = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, a, i.isClone, u, l, d);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const a = i.isClone, u = o.dimensions.draggables[i.draggableId], l = s.result, d = l.mode, c = oc(l), f = Ny(l), g = {
        duration: o.dropDuration,
        curve: rs.drop,
        moveTo: o.newHomeClientOffset,
        opacity: f ? tr.opacity.drop : null,
        scale: f ? tr.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: u,
          dropping: g,
          draggingOver: c,
          combineWith: f,
          mode: d,
          forceShouldAnimate: null,
          snapshot: t(d, a, c, f, g)
        }
      };
    }
    return null;
  };
}
function ic(e = null) {
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
const By = {
  mapped: {
    type: "SECONDARY",
    offset: Me,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: ic(null)
  }
};
function Iy() {
  const e = Re((s, a) => ({
    x: s,
    y: a
  })), t = Re(ic), n = Re((s, a = null, u) => ({
    mapped: {
      type: "SECONDARY",
      offset: s,
      combineTargetFor: a,
      shouldAnimateDisplacement: u,
      snapshot: t(a)
    }
  })), r = (s) => s ? n(Me, s, !0) : null, o = (s, a, u, l) => {
    const d = u.displaced.visible[s], c = !!(l.inVirtualList && l.effected[s]), f = to(u), p = f && f.draggableId === s ? a : null;
    if (!d) {
      if (!c)
        return r(p);
      if (u.displaced.invisible[s])
        return null;
      const h = yn(l.displacedBy.point), C = e(h.x, h.y);
      return n(C, p, !0);
    }
    if (c)
      return r(p);
    const g = u.displacedBy.point, m = e(g.x, g.y);
    return n(m, p, d.shouldAnimate);
  };
  return (s, a) => {
    if (or(s))
      return s.critical.draggable.id === a.draggableId ? null : o(a.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const u = s.completed;
      return u.result.draggableId === a.draggableId ? null : o(a.draggableId, u.result.draggableId, u.impact, u.afterCritical);
    }
    return null;
  };
}
const Py = () => {
  const e = Ty(), t = Iy();
  return (r, o) => e(r, o) || t(r, o) || By;
}, Ry = {
  dropAnimationFinished: Rl
}, My = sl(Py, Ry, null, {
  context: us,
  areStatePropsEqual: rc
})(xy);
var Ly = My;
function sc(e) {
  return zr(ps).isUsingCloneFor === e.draggableId && !e.isClone ? null : F.createElement(Ly, e);
}
function Qb(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return F.createElement(sc, dn({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const hs = (e) => (t) => e === t, ky = hs("scroll"), $y = hs("auto"), Vy = hs("visible"), Ja = (e, t) => t(e.overflowX) || t(e.overflowY), jy = (e, t) => t(e.overflowX) && t(e.overflowY), ac = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Ja(n, ky) || Ja(n, $y);
}, Gy = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = rr(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, D(!1)), !ac(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return jy(r, Vy) || process.env.NODE_ENV !== "production" && Ee(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, uc = (e) => e == null ? null : e === document.body ? Gy() ? e : null : e === document.documentElement ? null : ac(e) ? e : uc(e.parentElement);
var lc = uc, Uy = (e) => {
  !e || !lc(e.parentElement) || process.env.NODE_ENV !== "production" && Ee(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Ei = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const cc = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : cc(e.parentElement) : !1;
var Wy = (e) => {
  const t = lc(e), n = cc(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, zy = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: n,
  isFixedOnPage: r,
  direction: o,
  client: i,
  page: s,
  closest: a
}) => {
  const u = (() => {
    if (!a)
      return null;
    const {
      scrollSize: f,
      client: p
    } = a, g = $l({
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
        max: g,
        diff: {
          value: Me,
          displacement: Me
        }
      }
    };
  })(), l = o === "vertical" ? Ki : El, d = hn({
    page: s,
    withPlaceholder: null,
    axis: l,
    frame: u
  });
  return {
    descriptor: e,
    isCombineEnabled: n,
    isFixedOnPage: r,
    axis: l,
    isEnabled: t,
    client: i,
    page: s,
    frame: u,
    subject: d
  };
};
const Hy = (e, t) => {
  const n = ll(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, s = o + t.scrollWidth, u = Hi({
    top: r,
    right: s,
    bottom: i,
    left: o
  }, n.border);
  return qi({
    borderBox: u,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var qy = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: a
}) => {
  const u = n.closestScrollable, l = Hy(e, u), d = Gr(l, r), c = (() => {
    if (!u)
      return null;
    const p = ll(u), g = {
      scrollHeight: u.scrollHeight,
      scrollWidth: u.scrollWidth
    };
    return {
      client: p,
      page: Gr(p, r),
      scroll: Ei(u),
      scrollSize: g,
      shouldClipSubject: a
    };
  })();
  return zy({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: s,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: l,
    page: d,
    closest: c
  });
};
const Yy = {
  passive: !1
}, Xy = {
  passive: !0
};
var Za = (e) => e.shouldPublishImmediately ? Yy : Xy;
const Ar = (e) => e && e.env.closestScrollable || null;
function Ky(e) {
  const t = w.useRef(null), n = zr(oo), r = ls("droppable"), {
    registry: o,
    marshal: i
  } = n, s = ds(e), a = ie(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), u = w.useRef(a), l = ie(() => Re((v, E) => {
    t.current || (process.env.NODE_ENV !== "production" ? D(!1, "Can only update scroll when dragging") : D(!1));
    const _ = {
      x: v,
      y: E
    };
    i.updateDroppableScroll(a.id, _);
  }), [a.id, i]), d = U(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? Me : Ei(v.env.closestScrollable);
  }, []), c = U(() => {
    const v = d();
    l(v.x, v.y);
  }, [d, l]), f = ie(() => Kn(c), [c]), p = U(() => {
    const v = t.current, E = Ar(v);
    if (v && E || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find scroll options while scrolling") : D(!1)), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    f();
  }, [f, c]), g = U((v, E) => {
    t.current && (process.env.NODE_ENV !== "production" ? D(!1, "Cannot collect a droppable while a drag is occurring") : D(!1));
    const _ = s.current, I = _.getDroppableRef();
    I || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot collect without a droppable ref") : D(!1));
    const R = Wy(I), $ = {
      ref: I,
      descriptor: a,
      env: R,
      scrollOptions: E
    };
    t.current = $;
    const O = qy({
      ref: I,
      descriptor: a,
      env: R,
      windowScroll: v,
      direction: _.direction,
      isDropDisabled: _.isDropDisabled,
      isCombineEnabled: _.isCombineEnabled,
      shouldClipSubject: !_.ignoreContainerClipping
    }), L = R.closestScrollable;
    return L && (L.setAttribute(za.contextId, n.contextId), L.addEventListener("scroll", p, Za($.scrollOptions)), process.env.NODE_ENV !== "production" && Uy(L)), O;
  }, [n.contextId, a, p, s]), m = U(() => {
    const v = t.current, E = Ar(v);
    return v && E || (process.env.NODE_ENV !== "production" ? D(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : D(!1)), Ei(E);
  }, []), h = U(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot stop drag when no active drag") : D(!1));
    const E = Ar(v);
    t.current = null, E && (f.cancel(), E.removeAttribute(za.contextId), E.removeEventListener("scroll", p, Za(v.scrollOptions)));
  }, [p, f]), C = U((v) => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot scroll when there is no drag") : D(!1));
    const _ = Ar(E);
    _ || (process.env.NODE_ENV !== "production" ? D(!1, "Cannot scroll a droppable with no closest scrollable") : D(!1)), _.scrollTop += v.y, _.scrollLeft += v.x;
  }, []), A = ie(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: m,
    dragStopped: h,
    scroll: C
  }), [h, g, m, C]), b = ie(() => ({
    uniqueId: r,
    descriptor: a,
    callbacks: A
  }), [A, a, r]);
  rt(() => (u.current = b.descriptor, o.droppable.register(b), () => {
    t.current && (process.env.NODE_ENV !== "production" && Ee("Unsupported: changing the droppableId or type of a Droppable during a drag"), h()), o.droppable.unregister(b);
  }), [A, a, h, b, i, o.droppable]), rt(() => {
    t.current && i.updateDroppableIsEnabled(u.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), rt(() => {
    t.current && i.updateDroppableIsCombineEnabled(u.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Io() {
}
const Qa = {
  width: 0,
  height: 0,
  margin: T0
}, Jy = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? Qa : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Zy = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = Jy({
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
    transition: n !== "none" ? zn.placeholder : null
  };
}, Qy = (e) => {
  const t = w.useRef(null), n = U(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [a, u] = w.useState(e.animate === "open");
  w.useEffect(() => a ? r !== "open" ? (n(), u(!1), Io) : t.current ? Io : (t.current = setTimeout(() => {
    t.current = null, u(!1);
  }), n) : Io, [r, a, n]);
  const l = U((c) => {
    c.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), d = Zy({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return F.createElement(e.placeholder.tagName, {
    style: d,
    "data-rfd-placeholder-context-id": s,
    onTransitionEnd: l,
    ref: e.innerRef
  });
};
var ev = F.memo(Qy);
function Po(e) {
  return typeof e == "boolean";
}
function Ro(e, t) {
  t.forEach((n) => n(e));
}
const tv = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? D(!1, "A Droppable requires a droppableId prop") : D(!1)), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? D(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : D(!1));
}, function({
  props: t
}) {
  Po(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? D(!1, "isDropDisabled must be a boolean") : D(!1)), Po(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? D(!1, "isCombineEnabled must be a boolean") : D(!1)), Po(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? D(!1, "ignoreContainerClipping must be a boolean") : D(!1));
}, function({
  getDroppableRef: t
}) {
  nc(t());
}], nv = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && Ee(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], rv = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? D(!1, "Must provide a clone render function (renderClone) for virtual lists") : D(!1));
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? D(!1, "Expected virtual list to not have a placeholder") : D(!1));
}];
function ov(e) {
  dr(() => {
    Ro(e, tv), e.props.mode === "standard" && Ro(e, nv), e.props.mode === "virtual" && Ro(e, rv);
  });
}
class iv extends F.PureComponent {
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
const sv = (e) => {
  const t = w.useContext(oo);
  t || (process.env.NODE_ENV !== "production" ? D(!1, "Could not find app context") : D(!1));
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = w.useRef(null), i = w.useRef(null), {
    children: s,
    droppableId: a,
    type: u,
    mode: l,
    direction: d,
    ignoreContainerClipping: c,
    isDropDisabled: f,
    isCombineEnabled: p,
    snapshot: g,
    useClone: m,
    updateViewportMaxScroll: h,
    getContainerForClone: C
  } = e, A = U(() => o.current, []), b = U((P = null) => {
    o.current = P;
  }, []), v = U(() => i.current, []), E = U((P = null) => {
    i.current = P;
  }, []);
  ov({
    props: e,
    getDroppableRef: A,
    getPlaceholderRef: v
  });
  const _ = U(() => {
    r() && h({
      maxScroll: jl()
    });
  }, [r, h]);
  Ky({
    droppableId: a,
    type: u,
    mode: l,
    direction: d,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: c,
    getDroppableRef: A
  });
  const I = ie(() => F.createElement(iv, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: N,
    animate: V
  }) => F.createElement(ev, {
    placeholder: N,
    onClose: P,
    innerRef: E,
    animate: V,
    contextId: n,
    onTransitionEnd: _
  })), [n, _, e.placeholder, e.shouldAnimatePlaceholder, E]), R = ie(() => ({
    innerRef: b,
    placeholder: I,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": n
    }
  }), [n, a, I, b]), $ = m ? m.dragging.draggableId : null, O = ie(() => ({
    droppableId: a,
    type: u,
    isUsingCloneFor: $
  }), [a, $, u]);
  function L() {
    if (!m)
      return null;
    const {
      dragging: P,
      render: N
    } = m, V = F.createElement(sc, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (z, K) => N(z, K, P));
    return xc.createPortal(V, C());
  }
  return F.createElement(ps.Provider, {
    value: O
  }, s(R, g), L());
};
var av = sv;
function uv() {
  return document.body || (process.env.NODE_ENV !== "production" ? D(!1, "document.body is not ready") : D(!1)), document.body;
}
const eu = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: uv
}, dc = (e) => {
  let t = {
    ...e
  }, n;
  for (n in eu)
    e[n] === void 0 && (t = {
      ...t,
      [n]: eu[n]
    });
  return t;
}, Mo = (e, t) => e === t.droppable.type, tu = (e, t) => t.draggables[e.draggable.id], lv = () => {
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
  }, n = Re((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), r = Re((i, s, a, u, l, d) => {
    const c = l.descriptor.id;
    if (l.descriptor.droppableId === i) {
      const g = d ? {
        render: d,
        dragging: n(l.descriptor)
      } : null, m = {
        isDraggingOver: a,
        draggingOverWith: a ? c : null,
        draggingFromThisWith: c,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: m,
        useClone: g
      };
    }
    if (!s)
      return t;
    if (!u)
      return e;
    const p = {
      isDraggingOver: a,
      draggingOverWith: c,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: l.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: p,
      useClone: null
    };
  });
  return (i, s) => {
    const a = dc(s), u = a.droppableId, l = a.type, d = !a.isDropDisabled, c = a.renderClone;
    if (or(i)) {
      const f = i.critical;
      if (!Mo(l, f))
        return t;
      const p = tu(f, i.dimensions), g = nt(i.impact) === u;
      return r(u, d, g, g, p, c);
    }
    if (i.phase === "DROP_ANIMATING") {
      const f = i.completed;
      if (!Mo(l, f.critical))
        return t;
      const p = tu(f.critical, i.dimensions);
      return r(u, d, oc(f.result) === u, nt(f.impact) === u, p, c);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const f = i.completed;
      if (!Mo(l, f.critical))
        return t;
      const p = nt(f.impact) === u, g = !!(f.impact.at && f.impact.at.type === "COMBINE"), m = f.critical.droppable.id === u;
      return p ? g ? e : t : m ? e : t;
    }
    return t;
  };
}, cv = {
  updateViewportMaxScroll: Wg
}, dv = sl(lv, cv, (e, t, n) => ({
  ...dc(n),
  ...e,
  ...t
}), {
  context: us,
  areStatePropsEqual: rc
})(av);
var eC = dv;
const fv = (e) => /* @__PURE__ */ w.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ w.createElement("path", { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 000 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 00576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" })), Kt = (e, t, n, r, o) => {
  if (!r)
    throw new Error(o ?? `Invalid property path: ${t}
Couldn't access "${n}" in ${JSON.stringify(e)}`);
}, nu = (e) => typeof e == "object" && e !== null && !Array.isArray(e), Ir = (e) => Array.isArray(e), fc = (e, t) => e.filter((n, r) => r !== t), pv = (e, t, n, r = {}) => {
  const { remove: o = !1, createNew: i = !0, noError: s = !1 } = r, a = e, u = typeof (l = t) == "string" ? l : typeof l == "number" ? String(l) : l.reduce((f, p) => typeof p == "number" ? `${f}[${p}]` : f === "" ? p : `${f}.${p}`, "");
  var l;
  const d = Object.assign(Object.assign({}, r), { remove: o, createNew: i, noError: s, fullData: a, fullPath: u }), c = Array.isArray(t) ? t : ((f) => Array.isArray(f) ? f : f.split(/(\.|\[\d+\])/).filter((p) => p !== "." && p !== "").map((p) => {
    const g = /\[(\d+)\]/.exec(p);
    return g ? Number(g[1]) : p;
  }).flat())(t).filter((f) => f !== "");
  return Ir(e) && o && c.length === 1 ? fc(e, c[0]) : Vn(e, c, n, d);
}, Vn = (e, t, n, r) => {
  const o = nu(e) ? Object.assign({}, e) : null, i = Ir(e) ? [...e] : null;
  if (t.length === 0)
    return e;
  if (!o && !i)
    throw new Error("Can't assign property -- invalid input object");
  const { createNew: s, remove: a, noError: u, fullData: l, fullPath: d } = r, c = t[0];
  if (i && typeof c == "string")
    return i.map((m) => Vn(m, t, n, r));
  if (t.length === 1) {
    if (o && typeof c == "string") {
      const m = hv(o, c, n, r);
      return m ?? o;
    }
    return i && typeof c == "number" ? (mv(i, c, n, r), i) : (Kt(l, d, c, u), e);
  }
  const f = o || i || [];
  if (a && t.length === 2 && typeof t[1] == "number") {
    const m = f[c], h = t[1];
    return Ir(m) ? f[c] = fc(m, h) : Kt(l, d, c, u, "Trying to remove an indexed item from an object that is not an array"), f;
  }
  const p = t.slice(1);
  if (c in e) {
    if (g = f[c], !Ir(g) && !nu(g)) {
      if (!s)
        return Kt(l, d, c, u), f;
      f[c] = {};
    }
    return f[c] = Vn(f[c], p, n, r), f;
  }
  var g;
  if (s) {
    const m = typeof p[0] == "number" ? [] : {};
    if (o)
      return f[c] = m, f[c] = Vn(f[c], p, n, r), f;
    if (i && Array.isArray(f)) {
      f.push(m);
      const h = f.length - 1;
      return f[h] = Vn(f[h], p, n, r), f;
    }
  }
  return Kt(l, d, c, u), f;
}, hv = (e, t, n, r) => {
  const { remove: o, createNew: i, noError: s, insertAfter: a, insertBefore: u, fullData: l, fullPath: d } = r;
  if (u || a) {
    const f = Object.entries(e);
    let p = f.findIndex(([g, m]) => g === (u ?? a));
    return a && p++, f.splice(p, 0, [t, n]), Object.fromEntries(f);
  }
  const c = t in e;
  o ? c ? delete e[t] : Kt(l, d, t, s) : i || c ? e[t] = n : Kt(l, d, t, s);
}, mv = (e, t, n, r) => {
  const { noError: o, fullData: i, fullPath: s, createNew: a, insert: u } = r;
  u && e.splice(t, 0, n), t in e ? e[t] = n : a ? e.push(n) : Kt(i, s, t, o);
}, Hr = (e, t, n) => {
  const r = Array.isArray(t) ? t : gv(t);
  if (r.length === 0)
    return e;
  const o = r[0];
  if (Array.isArray(e) && typeof o != "number")
    return e.map((s) => Hr(s, r, n));
  if (typeof e != "object" || e === null || !(o in e))
    return Dv(e, o, n);
  const i = e[o];
  return r.length === 1 ? i : Hr(i, r.slice(1), n);
}, gv = (e) => e.split(/(\.|\[\d+\])/).filter((t) => t !== "." && t !== "").map((t) => {
  const n = /\[(\d+)\]/.exec(t);
  return n ? Number(n[1]) : t;
}).flat(), Dv = (e, t, n) => {
  if (n === void 0)
    throw new Error(`Unable to extract object property
Looking for property: ${t}
In object: ${JSON.stringify(e)}`);
  return n;
};
var Ev = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/, yv = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/, vv = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/, Lo = {
  Space_Separator: Ev,
  ID_Start: yv,
  ID_Continue: vv
}, Se = {
  isSpaceSeparator(e) {
    return typeof e == "string" && Lo.Space_Separator.test(e);
  },
  isIdStartChar(e) {
    return typeof e == "string" && (e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "$" || e === "_" || Lo.ID_Start.test(e));
  },
  isIdContinueChar(e) {
    return typeof e == "string" && (e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "$" || e === "_" || e === "‌" || e === "‍" || Lo.ID_Continue.test(e));
  },
  isDigit(e) {
    return typeof e == "string" && /[0-9]/.test(e);
  },
  isHexDigit(e) {
    return typeof e == "string" && /[0-9A-Fa-f]/.test(e);
  }
};
let yi, Ke, St, qr, Lt, pt, Pe, ms, Hn;
var bv = function(t, n) {
  yi = String(t), Ke = "start", St = [], qr = 0, Lt = 1, pt = 0, Pe = void 0, ms = void 0, Hn = void 0;
  do
    Pe = Cv(), _v[Ke]();
  while (Pe.type !== "eof");
  return typeof n == "function" ? vi({ "": Hn }, "", n) : Hn;
};
function vi(e, t, n) {
  const r = e[t];
  if (r != null && typeof r == "object")
    if (Array.isArray(r))
      for (let o = 0; o < r.length; o++) {
        const i = String(o), s = vi(r, i, n);
        s === void 0 ? delete r[i] : Object.defineProperty(r, i, {
          value: s,
          writable: !0,
          enumerable: !0,
          configurable: !0
        });
      }
    else
      for (const o in r) {
        const i = vi(r, o, n);
        i === void 0 ? delete r[o] : Object.defineProperty(r, o, {
          value: i,
          writable: !0,
          enumerable: !0,
          configurable: !0
        });
      }
  return n.call(e, t, r);
}
let Q, X, jn, _t, oe;
function Cv() {
  for (Q = "default", X = "", jn = !1, _t = 1; ; ) {
    oe = Ft();
    const e = pc[Q]();
    if (e)
      return e;
  }
}
function Ft() {
  if (yi[qr])
    return String.fromCodePoint(yi.codePointAt(qr));
}
function S() {
  const e = Ft();
  return e === `
` ? (Lt++, pt = 0) : e ? pt += e.length : pt++, e && (qr += e.length), e;
}
const pc = {
  default() {
    switch (oe) {
      case "	":
      case "\v":
      case "\f":
      case " ":
      case " ":
      case "\uFEFF":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        S();
        return;
      case "/":
        S(), Q = "comment";
        return;
      case void 0:
        return S(), ye("eof");
    }
    if (Se.isSpaceSeparator(oe)) {
      S();
      return;
    }
    return pc[Ke]();
  },
  comment() {
    switch (oe) {
      case "*":
        S(), Q = "multiLineComment";
        return;
      case "/":
        S(), Q = "singleLineComment";
        return;
    }
    throw ve(S());
  },
  multiLineComment() {
    switch (oe) {
      case "*":
        S(), Q = "multiLineCommentAsterisk";
        return;
      case void 0:
        throw ve(S());
    }
    S();
  },
  multiLineCommentAsterisk() {
    switch (oe) {
      case "*":
        S();
        return;
      case "/":
        S(), Q = "default";
        return;
      case void 0:
        throw ve(S());
    }
    S(), Q = "multiLineComment";
  },
  singleLineComment() {
    switch (oe) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        S(), Q = "default";
        return;
      case void 0:
        return S(), ye("eof");
    }
    S();
  },
  value() {
    switch (oe) {
      case "{":
      case "[":
        return ye("punctuator", S());
      case "n":
        return S(), Gt("ull"), ye("null", null);
      case "t":
        return S(), Gt("rue"), ye("boolean", !0);
      case "f":
        return S(), Gt("alse"), ye("boolean", !1);
      case "-":
      case "+":
        S() === "-" && (_t = -1), Q = "sign";
        return;
      case ".":
        X = S(), Q = "decimalPointLeading";
        return;
      case "0":
        X = S(), Q = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        X = S(), Q = "decimalInteger";
        return;
      case "I":
        return S(), Gt("nfinity"), ye("numeric", 1 / 0);
      case "N":
        return S(), Gt("aN"), ye("numeric", NaN);
      case '"':
      case "'":
        jn = S() === '"', X = "", Q = "string";
        return;
    }
    throw ve(S());
  },
  identifierNameStartEscape() {
    if (oe !== "u")
      throw ve(S());
    S();
    const e = bi();
    switch (e) {
      case "$":
      case "_":
        break;
      default:
        if (!Se.isIdStartChar(e))
          throw ru();
        break;
    }
    X += e, Q = "identifierName";
  },
  identifierName() {
    switch (oe) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        X += S();
        return;
      case "\\":
        S(), Q = "identifierNameEscape";
        return;
    }
    if (Se.isIdContinueChar(oe)) {
      X += S();
      return;
    }
    return ye("identifier", X);
  },
  identifierNameEscape() {
    if (oe !== "u")
      throw ve(S());
    S();
    const e = bi();
    switch (e) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        break;
      default:
        if (!Se.isIdContinueChar(e))
          throw ru();
        break;
    }
    X += e, Q = "identifierName";
  },
  sign() {
    switch (oe) {
      case ".":
        X = S(), Q = "decimalPointLeading";
        return;
      case "0":
        X = S(), Q = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        X = S(), Q = "decimalInteger";
        return;
      case "I":
        return S(), Gt("nfinity"), ye("numeric", _t * (1 / 0));
      case "N":
        return S(), Gt("aN"), ye("numeric", NaN);
    }
    throw ve(S());
  },
  zero() {
    switch (oe) {
      case ".":
        X += S(), Q = "decimalPoint";
        return;
      case "e":
      case "E":
        X += S(), Q = "decimalExponent";
        return;
      case "x":
      case "X":
        X += S(), Q = "hexadecimal";
        return;
    }
    return ye("numeric", _t * 0);
  },
  decimalInteger() {
    switch (oe) {
      case ".":
        X += S(), Q = "decimalPoint";
        return;
      case "e":
      case "E":
        X += S(), Q = "decimalExponent";
        return;
    }
    if (Se.isDigit(oe)) {
      X += S();
      return;
    }
    return ye("numeric", _t * Number(X));
  },
  decimalPointLeading() {
    if (Se.isDigit(oe)) {
      X += S(), Q = "decimalFraction";
      return;
    }
    throw ve(S());
  },
  decimalPoint() {
    switch (oe) {
      case "e":
      case "E":
        X += S(), Q = "decimalExponent";
        return;
    }
    if (Se.isDigit(oe)) {
      X += S(), Q = "decimalFraction";
      return;
    }
    return ye("numeric", _t * Number(X));
  },
  decimalFraction() {
    switch (oe) {
      case "e":
      case "E":
        X += S(), Q = "decimalExponent";
        return;
    }
    if (Se.isDigit(oe)) {
      X += S();
      return;
    }
    return ye("numeric", _t * Number(X));
  },
  decimalExponent() {
    switch (oe) {
      case "+":
      case "-":
        X += S(), Q = "decimalExponentSign";
        return;
    }
    if (Se.isDigit(oe)) {
      X += S(), Q = "decimalExponentInteger";
      return;
    }
    throw ve(S());
  },
  decimalExponentSign() {
    if (Se.isDigit(oe)) {
      X += S(), Q = "decimalExponentInteger";
      return;
    }
    throw ve(S());
  },
  decimalExponentInteger() {
    if (Se.isDigit(oe)) {
      X += S();
      return;
    }
    return ye("numeric", _t * Number(X));
  },
  hexadecimal() {
    if (Se.isHexDigit(oe)) {
      X += S(), Q = "hexadecimalInteger";
      return;
    }
    throw ve(S());
  },
  hexadecimalInteger() {
    if (Se.isHexDigit(oe)) {
      X += S();
      return;
    }
    return ye("numeric", _t * Number(X));
  },
  string() {
    switch (oe) {
      case "\\":
        S(), X += Av();
        return;
      case '"':
        if (jn)
          return S(), ye("string", X);
        X += S();
        return;
      case "'":
        if (!jn)
          return S(), ye("string", X);
        X += S();
        return;
      case `
`:
      case "\r":
        throw ve(S());
      case "\u2028":
      case "\u2029":
        Sv(oe);
        break;
      case void 0:
        throw ve(S());
    }
    X += S();
  },
  start() {
    switch (oe) {
      case "{":
      case "[":
        return ye("punctuator", S());
    }
    Q = "value";
  },
  beforePropertyName() {
    switch (oe) {
      case "$":
      case "_":
        X = S(), Q = "identifierName";
        return;
      case "\\":
        S(), Q = "identifierNameStartEscape";
        return;
      case "}":
        return ye("punctuator", S());
      case '"':
      case "'":
        jn = S() === '"', Q = "string";
        return;
    }
    if (Se.isIdStartChar(oe)) {
      X += S(), Q = "identifierName";
      return;
    }
    throw ve(S());
  },
  afterPropertyName() {
    if (oe === ":")
      return ye("punctuator", S());
    throw ve(S());
  },
  beforePropertyValue() {
    Q = "value";
  },
  afterPropertyValue() {
    switch (oe) {
      case ",":
      case "}":
        return ye("punctuator", S());
    }
    throw ve(S());
  },
  beforeArrayValue() {
    if (oe === "]")
      return ye("punctuator", S());
    Q = "value";
  },
  afterArrayValue() {
    switch (oe) {
      case ",":
      case "]":
        return ye("punctuator", S());
    }
    throw ve(S());
  },
  end() {
    throw ve(S());
  }
};
function ye(e, t) {
  return {
    type: e,
    value: t,
    line: Lt,
    column: pt
  };
}
function Gt(e) {
  for (const t of e) {
    if (Ft() !== t)
      throw ve(S());
    S();
  }
}
function Av() {
  switch (Ft()) {
    case "b":
      return S(), "\b";
    case "f":
      return S(), "\f";
    case "n":
      return S(), `
`;
    case "r":
      return S(), "\r";
    case "t":
      return S(), "	";
    case "v":
      return S(), "\v";
    case "0":
      if (S(), Se.isDigit(Ft()))
        throw ve(S());
      return "\0";
    case "x":
      return S(), wv();
    case "u":
      return S(), bi();
    case `
`:
    case "\u2028":
    case "\u2029":
      return S(), "";
    case "\r":
      return S(), Ft() === `
` && S(), "";
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw ve(S());
    case void 0:
      throw ve(S());
  }
  return S();
}
function wv() {
  let e = "", t = Ft();
  if (!Se.isHexDigit(t) || (e += S(), t = Ft(), !Se.isHexDigit(t)))
    throw ve(S());
  return e += S(), String.fromCodePoint(parseInt(e, 16));
}
function bi() {
  let e = "", t = 4;
  for (; t-- > 0; ) {
    const n = Ft();
    if (!Se.isHexDigit(n))
      throw ve(S());
    e += S();
  }
  return String.fromCodePoint(parseInt(e, 16));
}
const _v = {
  start() {
    if (Pe.type === "eof")
      throw Ut();
    ko();
  },
  beforePropertyName() {
    switch (Pe.type) {
      case "identifier":
      case "string":
        ms = Pe.value, Ke = "afterPropertyName";
        return;
      case "punctuator":
        wr();
        return;
      case "eof":
        throw Ut();
    }
  },
  afterPropertyName() {
    if (Pe.type === "eof")
      throw Ut();
    Ke = "beforePropertyValue";
  },
  beforePropertyValue() {
    if (Pe.type === "eof")
      throw Ut();
    ko();
  },
  beforeArrayValue() {
    if (Pe.type === "eof")
      throw Ut();
    if (Pe.type === "punctuator" && Pe.value === "]") {
      wr();
      return;
    }
    ko();
  },
  afterPropertyValue() {
    if (Pe.type === "eof")
      throw Ut();
    switch (Pe.value) {
      case ",":
        Ke = "beforePropertyName";
        return;
      case "}":
        wr();
    }
  },
  afterArrayValue() {
    if (Pe.type === "eof")
      throw Ut();
    switch (Pe.value) {
      case ",":
        Ke = "beforeArrayValue";
        return;
      case "]":
        wr();
    }
  },
  end() {
  }
};
function ko() {
  let e;
  switch (Pe.type) {
    case "punctuator":
      switch (Pe.value) {
        case "{":
          e = {};
          break;
        case "[":
          e = [];
          break;
      }
      break;
    case "null":
    case "boolean":
    case "numeric":
    case "string":
      e = Pe.value;
      break;
  }
  if (Hn === void 0)
    Hn = e;
  else {
    const t = St[St.length - 1];
    Array.isArray(t) ? t.push(e) : Object.defineProperty(t, ms, {
      value: e,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  }
  if (e !== null && typeof e == "object")
    St.push(e), Array.isArray(e) ? Ke = "beforeArrayValue" : Ke = "beforePropertyName";
  else {
    const t = St[St.length - 1];
    t == null ? Ke = "end" : Array.isArray(t) ? Ke = "afterArrayValue" : Ke = "afterPropertyValue";
  }
}
function wr() {
  St.pop();
  const e = St[St.length - 1];
  e == null ? Ke = "end" : Array.isArray(e) ? Ke = "afterArrayValue" : Ke = "afterPropertyValue";
}
function ve(e) {
  return Yr(e === void 0 ? `JSON5: invalid end of input at ${Lt}:${pt}` : `JSON5: invalid character '${hc(e)}' at ${Lt}:${pt}`);
}
function Ut() {
  return Yr(`JSON5: invalid end of input at ${Lt}:${pt}`);
}
function ru() {
  return pt -= 5, Yr(`JSON5: invalid identifier character at ${Lt}:${pt}`);
}
function Sv(e) {
  console.warn(`JSON5: '${hc(e)}' in strings is not valid ECMAScript; consider escaping`);
}
function hc(e) {
  const t = {
    "'": "\\'",
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\v",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  if (t[e])
    return t[e];
  if (e < " ") {
    const n = e.charCodeAt(0).toString(16);
    return "\\x" + ("00" + n).substring(n.length);
  }
  return e;
}
function Yr(e) {
  const t = new SyntaxError(e);
  return t.lineNumber = Lt, t.columnNumber = pt, t;
}
var Fv = function(t, n, r) {
  const o = [];
  let i = "", s, a, u = "", l;
  if (n != null && typeof n == "object" && !Array.isArray(n) && (r = n.space, l = n.quote, n = n.replacer), typeof n == "function")
    a = n;
  else if (Array.isArray(n)) {
    s = [];
    for (const m of n) {
      let h;
      typeof m == "string" ? h = m : (typeof m == "number" || m instanceof String || m instanceof Number) && (h = String(m)), h !== void 0 && s.indexOf(h) < 0 && s.push(h);
    }
  }
  return r instanceof Number ? r = Number(r) : r instanceof String && (r = String(r)), typeof r == "number" ? r > 0 && (r = Math.min(10, Math.floor(r)), u = "          ".substr(0, r)) : typeof r == "string" && (u = r.substr(0, 10)), d("", { "": t });
  function d(m, h) {
    let C = h[m];
    switch (C != null && (typeof C.toJSON5 == "function" ? C = C.toJSON5(m) : typeof C.toJSON == "function" && (C = C.toJSON(m))), a && (C = a.call(h, m, C)), C instanceof Number ? C = Number(C) : C instanceof String ? C = String(C) : C instanceof Boolean && (C = C.valueOf()), C) {
      case null:
        return "null";
      case !0:
        return "true";
      case !1:
        return "false";
    }
    if (typeof C == "string")
      return c(C);
    if (typeof C == "number")
      return String(C);
    if (typeof C == "object")
      return Array.isArray(C) ? g(C) : f(C);
  }
  function c(m) {
    const h = {
      "'": 0.1,
      '"': 0.2
    }, C = {
      "'": "\\'",
      '"': '\\"',
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
      "\v": "\\v",
      "\0": "\\0",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    let A = "";
    for (let v = 0; v < m.length; v++) {
      const E = m[v];
      switch (E) {
        case "'":
        case '"':
          h[E]++, A += E;
          continue;
        case "\0":
          if (Se.isDigit(m[v + 1])) {
            A += "\\x00";
            continue;
          }
      }
      if (C[E]) {
        A += C[E];
        continue;
      }
      if (E < " ") {
        let _ = E.charCodeAt(0).toString(16);
        A += "\\x" + ("00" + _).substring(_.length);
        continue;
      }
      A += E;
    }
    const b = l || Object.keys(h).reduce((v, E) => h[v] < h[E] ? v : E);
    return A = A.replace(new RegExp(b, "g"), C[b]), b + A + b;
  }
  function f(m) {
    if (o.indexOf(m) >= 0)
      throw TypeError("Converting circular structure to JSON5");
    o.push(m);
    let h = i;
    i = i + u;
    let C = s || Object.keys(m), A = [];
    for (const v of C) {
      const E = d(v, m);
      if (E !== void 0) {
        let _ = p(v) + ":";
        u !== "" && (_ += " "), _ += E, A.push(_);
      }
    }
    let b;
    if (A.length === 0)
      b = "{}";
    else {
      let v;
      if (u === "")
        v = A.join(","), b = "{" + v + "}";
      else {
        let E = `,
` + i;
        v = A.join(E), b = `{
` + i + v + `,
` + h + "}";
      }
    }
    return o.pop(), i = h, b;
  }
  function p(m) {
    if (m.length === 0)
      return c(m);
    const h = String.fromCodePoint(m.codePointAt(0));
    if (!Se.isIdStartChar(h))
      return c(m);
    for (let C = h.length; C < m.length; C++)
      if (!Se.isIdContinueChar(String.fromCodePoint(m.codePointAt(C))))
        return c(m);
    return m;
  }
  function g(m) {
    if (o.indexOf(m) >= 0)
      throw TypeError("Converting circular structure to JSON5");
    o.push(m);
    let h = i;
    i = i + u;
    let C = [];
    for (let b = 0; b < m.length; b++) {
      const v = d(String(b), m);
      C.push(v !== void 0 ? v : "null");
    }
    let A;
    if (C.length === 0)
      A = "[]";
    else if (u === "")
      A = "[" + C.join(",") + "]";
    else {
      let b = `,
` + i, v = C.join(b);
      A = `[
` + i + v + `,
` + h + "]";
    }
    return o.pop(), i = h, A;
  }
};
const xv = {
  parse: bv,
  stringify: Fv
};
var $o = xv, Nv = Gn;
function Gn(e) {
  let t = e;
  var n = {}.toString.call(e).slice(8, -1);
  if (n == "Set")
    return new Set([...e].map((o) => Gn(o)));
  if (n == "Map")
    return new Map([...e].map((o) => [Gn(o[0]), Gn(o[1])]));
  if (n == "Date")
    return new Date(e.getTime());
  if (n == "RegExp")
    return RegExp(e.source, Ov(e));
  if (n == "Array" || n == "Object") {
    t = Array.isArray(e) ? [] : {};
    for (var r in e)
      t[r] = Gn(e[r]);
  }
  return t;
}
function Ov(e) {
  if (typeof e.source.flags == "string")
    return e.source.flags;
  var t = [];
  return e.global && t.push("g"), e.ignoreCase && t.push("i"), e.multiline && t.push("m"), e.sticky && t.push("y"), e.unicode && t.push("u"), t.join("");
}
function mc(e, t) {
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
function Pr(e, t, n, r) {
  return new (n || (n = Promise))(function(o, i) {
    function s(l) {
      try {
        u(r.next(l));
      } catch (d) {
        i(d);
      }
    }
    function a(l) {
      try {
        u(r.throw(l));
      } catch (d) {
        i(d);
      }
    }
    function u(l) {
      var d;
      l.done ? o(l.value) : (d = l.value, d instanceof n ? d : new n(function(c) {
        c(d);
      })).then(s, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
var ou = [], Ln = [];
(function(e, t) {
  if (e && typeof document < "u") {
    var n, r = t.prepend === !0 ? "prepend" : "append", o = t.singleTag === !0, i = typeof t.container == "string" ? document.querySelector(t.container) : document.getElementsByTagName("head")[0];
    if (o) {
      var s = ou.indexOf(i);
      s === -1 && (s = ou.push(i) - 1, Ln[s] = {}), n = Ln[s] && Ln[s][r] ? Ln[s][r] : Ln[s][r] = a();
    } else
      n = a();
    e.charCodeAt(0) === 65279 && (e = e.substring(1)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(document.createTextNode(e));
  }
  function a() {
    var u = document.createElement("style");
    if (u.setAttribute("type", "text/css"), t.attributes)
      for (var l = Object.keys(t.attributes), d = 0; d < l.length; d++)
        u.setAttribute(l[d], t.attributes[l[d]]);
    var c = r === "prepend" ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(c, u), u;
  }
})(`:root {
  --jer-select-border: #b6b6b6;
  --jer-select-focus: #777;
  --jer-select-arrow: #777;
  --jer-form-border: 1px solid #ededf0;
  --jer-form-border-focus: 1px solid #e2e2e2;
  --jer-expand-transition-time: 0.5s;
  --jer-highlight-color: #b3d8ff;
}

.jer-visible {
  opacity: 1;
  transition: var(--jer-expand-transition-time);
}

.jer-hidden {
  opacity: 0;
  transition: var(--jer-expand-transition-time);
}

/* Select styled as per:
https://moderncss.dev/custom-select-styles-with-pure-css/
*/

.jer-select select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  /* width: 100%; */
  font-family: inherit;
  font-size: 0.8em;
  color: black;
  cursor: inherit;
  line-height: inherit;
  z-index: 1;
  outline: none;
}
select::-ms-expand {
  display: none;
}

.jer-select {
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  position: relative;
  min-width: 12ch;
  max-width: 15ch;
  border: 1px solid var(--jer-select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
}
.jer-select select,
.jer-select::after {
  grid-area: select;
}
.jer-select:not(.jer-select--multiple)::after {
  content: '';
  justify-self: end;
  width: 0.8em;
  height: 0.5em;
  background-color: var(--jer-select-arrow);
  -webkit-clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
}

select:focus + .focus {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 1px solid var(--jer-select-focus);
  border-radius: inherit;
}

.jer-editor-container {
  font-size: 16px;
  line-height: 1;
  padding: 1em;
  padding-left: 2em;
  /* margin-top: 1em; */
  /* margin-bottom: 1em; */
  border-radius: 0.5em;
  text-align: left;
}

.jer-editor-container textarea {
  color: var(--jer-input-color);
  border: var(--jer-form-border);
  border-radius: 0.3em;
  outline: none;
}

.jer-editor-container textarea:focus {
  border: var(--jer-form-border-focus);
}

.jer-editor-container input {
  border: var(--jer-form-border);
  border-radius: 0.3em;
  outline: none;
  font-family: inherit;
}

.jer-editor-container input:focus {
  border: var(--jer-form-border-focus);
}

/* Input highlighted text */
.jer-editor-container ::selection {
  background-color: var(--jer-highlight-color);
}

.jer-editor-container select {
  /* color: red; */
}

.jer-component {
}

.jer-collection-header-row,
.jer-value-main-row {
  display: flex;
  min-height: 1.7em;
  gap: 0.3em;
  align-items: center;
}

.jer-collection-header-row {
  display: flex;
  flex-wrap: wrap;
}

.jer-brackets {
}

.jer-bracket-outside {
}

.jer-collection-item-count {
}

.jer-collapse-icon {
  position: absolute;
  left: -1.2em;
  top: 0.35em;
}

.jer-collection-inner {
  position: relative;
}

.jer-collection-text-edit {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  align-items: flex-start;
}

.jer-collection-text-area {
  resize: both;
  padding-top: 0.2em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-bottom: 0;
  overflow: hidden;
  max-height: 40em;
  font-family: inherit;
  font-size: 0.85em;
}

.jer-collection-input-button-row {
  display: flex;
  justify-content: flex-end;
  font-size: 150%;
  margin-top: 0.4em;
}

.jer-collection-element {
}

.jer-collection-error-row {
  position: absolute;
  bottom: 0.5em;
}

.jer-collection-error-row-edit {
}

.jer-error-slug {
  margin-left: 1em;
}

.jer-value-component {
  position: relative;
}

.jer-value-main-row {
  display: flex;
  gap: 0;
}

.jer-value-and-buttons {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0.5em;
}

.jer-value-error-row {
  position: absolute;
}

.jer-value-string {
  line-height: 1.3em;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.jer-hyperlink {
  text-decoration: underline;
}

.jer-input-text {
  resize: none;
  margin: 0;
  height: 1.4em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.25em;
  padding-bottom: 0.2em;
  min-width: 6em;
  overflow: hidden;
  line-height: 1.2em;
  font-family: inherit;
  font-size: 0.9em;
}

.jer-value-number {
}

.jer-value-boolean {
}

.jer-input-boolean {
  transform: scale(1.5);
  margin-left: 0.3em;
  margin-right: 0.3em;
}

.jer-value-null {
}

.jer-value-object {
}

.jer-key-text {
  word-break: break-word;
  line-height: 1.1em;
  white-space: pre-wrap;
}

.jer-key-edit {
  padding: 0 0.3em;
  font-size: inherit;
  font-size: 0.9em;
}

.jer-value-array {
}

.jer-value-invalid {
  opacity: 0.5;
  font-style: italic;
}

.jer-input-number {
  min-width: 3em;
  font-size: 90%;
}

.jer-input-component {
}

.jer-edit-buttons,
.jer-confirm-buttons {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 1em;
}

.jer-input-buttons {
  gap: 0.4em;
}

.jer-edit-buttons {
  gap: 0.4em;
  margin-left: 0.5em;
  opacity: 0;
}

.jer-confirm-buttons {
  gap: 0.2em;
  margin-left: 0.4em;
}

.jer-edit-buttons:hover {
  opacity: 1;
  position: relative;
}

.jer-collection-header-row:hover > .jer-edit-buttons {
  opacity: 1;
}

.jer-value-main-row:hover > .jer-edit-buttons {
  opacity: 1;
}

.jer-value-and-buttons:hover > .jer-edit-buttons {
  opacity: 1;
}

.jer-input-buttons {
}

.jer-copy-pulse {
  position: relative;
  transition: transform var(--jer-expand-transition-time);
}

.jer-copy-pulse:hover {
  opacity: 0.85;
  transition: 0.3s;
  transform: scale(1.2);
}

.jer-copy-pulse:after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 50%;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 15px 5px var(--jer-icon-copy-color);
}

.jer-copy-pulse:active:after {
  box-shadow: 0 0 0 0 var(--jer-icon-copy-color);
  position: absolute;
  border-radius: 4em;
  left: 0;
  top: 0;
  opacity: 1;
  transition: 0s;
}

.jer-copy-pulse:active {
  top: 0.07em;
}

.jer-rotate-90 {
  transform: rotate(-90deg);
  transition: transform var(--jer-expand-transition-time);
}

.jer-accordion-icon {
  /* font-size: '2em'; */
  transition: transform var(--jer-expand-transition-time);
}

.jer-icon:hover {
  opacity: 0.85;
  transition: 0.3s;
  transform: scale(1.2);
}

/* For displaying keys that are purely <empty string> "" */
.jer-empty-string::after {
  content: '<empty string>';
  font-style: italic;
  font-size: 90%;
}
`, {});
const gc = ({ className: e, name: t, value: n, setValue: r, handleKeyPress: o, styles: i }) => {
  const s = n.slice(-1) === `
` ? n + "." : n;
  return Te("div", { style: { display: "grid" }, children: [x("textarea", { id: `${t}_textarea`, style: Object.assign({ height: "auto", gridArea: "1 / 1 / 2 / 2", overflowY: "auto", whiteSpace: "pre-wrap" }, i), rows: 1, className: e, name: `${t}_textarea`, value: n, onChange: (a) => r(a.target.value), autoFocus: !0, onFocus: (a) => {
    n.length < 40 && a.target.select();
  }, onKeyDown: o }), x("span", { className: e, style: Object.assign({ visibility: "hidden", height: "auto", gridArea: "1 / 1 / 2 / 2", color: "red", opacity: 0.9, whiteSpace: "pre-wrap", overflowY: "auto", border: "1px solid transparent" }, i), children: s })] });
}, Dc = { default: { displayName: "Default", fragments: { edit: "rgb(42, 161, 152)" }, styles: { container: { backgroundColor: "#f6f6f6", fontFamily: "monospace" }, collection: {}, collectionInner: {}, collectionElement: {}, property: "#292929", bracket: { color: "rgb(0, 43, 54)", fontWeight: "bold" }, itemCount: { color: "rgba(0, 0, 0, 0.3)", fontStyle: "italic" }, string: "rgb(203, 75, 22)", number: "rgb(38, 139, 210)", boolean: "green", null: { color: "rgb(220, 50, 47)", fontVariant: "small-caps", fontWeight: "bold" }, input: ["#292929"], inputHighlight: "#b3d8ff", error: { fontSize: "0.8em", color: "red", fontWeight: "bold" }, iconCollection: "rgb(0, 43, 54)", iconEdit: "edit", iconDelete: "rgb(203, 75, 22)", iconAdd: "edit", iconCopy: "rgb(38, 139, 210)", iconOk: "green", iconCancel: "rgb(203, 75, 22)" } }, githubDark: { displayName: "Github Dark", styles: { container: { backgroundColor: "#0d1117", color: "white" }, property: "#E6EDF3", bracket: "#56d364", itemCount: "#8B949E", string: "#A5D6FF", number: "#D2A8FF", boolean: { color: "#FF7B72", fontSize: "90%", fontWeight: "bold" }, null: "green", iconCollection: "#D2A8FF", iconEdit: "#D2A8FF", iconDelete: "rgb(203, 75, 22)", iconAdd: "rgb(203, 75, 22)", iconCopy: "#A5D6FF", iconOk: "#56d364", iconCancel: "rgb(203, 75, 22)" } }, githubLight: { displayName: "Github Light", styles: { container: "white", property: "#1F2328", bracket: "#00802e", itemCount: "#8B949E", string: "#0A3069", number: "#953800", boolean: { color: "#CF222E", fontSize: "90%", fontWeight: "bold" }, null: "#FF7B72", iconCollection: "#8250DF", iconEdit: "#8250DF", iconDelete: "rgb(203, 75, 22)", iconAdd: "#8250DF", iconCopy: "#57606A" } }, monoDark: { displayName: "Black & White", fragments: { lightText: { color: "white" }, midGrey: "#5c5c5c" }, styles: { container: ["lightText", { backgroundColor: "black" }], property: "lightText", bracket: "midGrey", itemCount: "#4a4a4a", string: "#a8a8a8", number: "#666666", boolean: { color: "#848484", fontStyle: "italic" }, null: "#333333", iconCollection: "midGrey", iconEdit: "midGrey", iconDelete: "midGrey", iconAdd: "midGrey", iconCopy: "midGrey", iconOk: "midGrey", iconCancel: "midGrey" } }, monoLight: { fragments: { midGrey: "#a3a3a3" }, displayName: "White & Black", styles: { container: "white", property: "black", bracket: "midGrey", itemCount: "#b5b5b5", string: "#575757", number: "#999999", boolean: { color: "#7b7b7b", fontStyle: "italic" }, null: "#cccccc", iconCollection: "midGrey", iconEdit: "midGrey", iconDelete: "midGrey", iconAdd: "midGrey", iconCopy: "midGrey", iconOk: "midGrey", iconCancel: "midGrey" } }, candyWrapper: { displayName: "Candy Wrapper", fragments: { minty: { backgroundColor: "#F1FAEE" }, pale: { color: "#A8DADC" }, mid: { color: "#457B9D" }, dark: { color: "#1D3557" }, pop: { color: "#E63946" }, darkBlue: { color: "#2B2D42" } }, styles: { container: "minty", property: "pop", bracket: "dark", itemCount: "pale", string: "mid", number: ["darkBlue", { fontSize: "85%" }], boolean: ["mid", { fontStyle: "italic", fontWeight: "bold", fontSize: "80%" }], null: ["#cccccc", { fontWeight: "bold" }], input: { border: "1px solid rgb(115, 194, 198)" }, iconCollection: "#1D3557", iconEdit: "#457B9D", iconDelete: "#E63946", iconAdd: "#2B2D42", iconCopy: "#1D3557", iconCancel: "#E63946" } }, psychedelic: { displayName: "Psychedelic", fragments: { minty: { backgroundColor: "#F1FAEE" }, pale: { color: "#A8DADC" }, mid: { color: "#457B9D" }, dark: { color: "#1D3557" }, pop: { color: "#E63946" }, fluroYellow: "rgb(242, 228, 21)", fluroGreen: "rgb(68, 255, 62)", hotPink: "#f7379a" }, styles: { container: { backgroundColor: "unset", background: "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)", color: "black" }, property: "black", bracket: "fluroYellow", itemCount: ["pale", { opacity: 0.7 }], string: "white", number: ["#33d9ff", { fontSize: "90%", fontWeight: "bold" }], boolean: ["fluroGreen", { fontWeight: "bold", fontSize: "80%" }], null: ["black", { fontWeight: "bold", opacity: 0.3, backgroundColor: "rgb(255, 255, 255, 0.5)", padding: "0 0.4em", borderRadius: "0.4em" }], iconCollection: "fluroYellow", iconEdit: ["black"], iconDelete: ["white", { opacity: 0.5 }], iconAdd: ["white", { opacity: 0.5 }], iconCopy: "rgb(32, 84, 242)", iconOk: "fluroGreen", iconCancel: "hotPink" } } }, Tv = { container: {}, collection: {}, collectionInner: {}, collectionElement: {}, property: {}, bracket: {}, itemCount: {}, string: {}, number: {}, boolean: {}, null: {}, input: {}, inputHighlight: {}, error: {}, iconCollection: {}, iconEdit: {}, iconDelete: {}, iconAdd: {}, iconCopy: {}, iconOk: {}, iconCancel: {} }, Bv = Dc.default, Ec = w.createContext({ getStyles: () => ({}), setTheme: (e) => {
}, icons: {}, setIcons: () => {
} }), Iv = ({ children: e }) => {
  const [t, n] = w.useState(Tv), [r, o] = w.useState({});
  return x(Ec.Provider, { value: { getStyles: (i, s) => typeof t[i] == "function" ? t[i](s) : t[i], setTheme: (i) => {
    const s = Pv(i);
    n(s);
  }, icons: r, setIcons: o }, children: e });
}, Nt = () => w.useContext(Ec), Pv = (e) => {
  var t, n, r, o;
  const i = {}, s = (Array.isArray(e) ? e : [e]).map((l) => e === "default" ? {} : typeof l == "string" ? _r(Dc[l], i) : Rv(l) ? _r({ fragments: {}, styles: l }, i) : _r(l, i)), a = _r(Bv, {});
  Object.keys(a).forEach((l) => {
    const d = l;
    s.forEach((c) => {
      c[d] && (a[d] = Object.assign(Object.assign({}, a[d]), c[d]));
    });
  });
  const u = Object.assign({}, a);
  return Object.entries(i).forEach(([l, d]) => {
    const c = l;
    u[c] = (f) => {
      const p = d(f) || {};
      return Object.assign(Object.assign({}, a[c]), p);
    };
  }), typeof (u == null ? void 0 : u.inputHighlight) != "function" && (!((t = u == null ? void 0 : u.inputHighlight) === null || t === void 0) && t.backgroundColor) && document.documentElement.style.setProperty("--jer-highlight-color", (n = u == null ? void 0 : u.inputHighlight) === null || n === void 0 ? void 0 : n.backgroundColor), typeof (u == null ? void 0 : u.iconCopy) != "function" && (!((r = u == null ? void 0 : u.iconCopy) === null || r === void 0) && r.color) && document.documentElement.style.setProperty("--jer-icon-copy-color", (o = u == null ? void 0 : u.iconCopy) === null || o === void 0 ? void 0 : o.color), u;
}, _r = (e, t) => {
  const { fragments: n, styles: r } = e, o = {};
  return Object.entries(r).forEach(([i, s]) => {
    const a = (Array.isArray(s) ? s : [s]).reduce((u, l) => {
      var d;
      if (typeof l == "function")
        return t[i] = l, Object.assign({}, u);
      if (typeof l == "string") {
        const c = (d = n == null ? void 0 : n[l]) !== null && d !== void 0 ? d : l;
        return typeof c == "string" ? Object.assign(Object.assign({}, u), { [Mv[i]]: c }) : Object.assign(Object.assign({}, u), c);
      }
      return Object.assign(Object.assign({}, u), l);
    }, {});
    o[i] = a;
  }), o;
}, Rv = (e) => !("styles" in e), Mv = { container: "backgroundColor", collection: "backgroundColor", collectionInner: "backgroundColor", collectionElement: "backgroundColor", property: "color", bracket: "color", itemCount: "color", string: "color", number: "color", boolean: "color", null: "color", input: "color", inputHighlight: "backgroundColor", error: "color", iconCollection: "color", iconEdit: "color", iconDelete: "color", iconAdd: "color", iconCopy: "color", iconOk: "color", iconCancel: "color" }, Lv = (e, t = 200) => typeof e == "string" ? e.length < t ? e : `${e.slice(0, t - 2).trim()}...` : e, fr = (e) => e.map((t) => t === "" ? String.fromCharCode(0) : t).join("."), kv = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, stringTruncate: a, showStringQuotes: u, nodeData: l }) => {
  const { getStyles: d } = Nt(), c = fr(r), f = u ? '"' : "";
  return n ? x(gc, { className: "jer-input-text", name: c, value: e, setValue: t, isEditing: n, handleKeyPress: (p) => {
    p.key !== "Enter" || p.shiftKey ? p.key === "Escape" && s() : i();
  }, styles: d("input", l) }) : Te("div", { id: `${c}_display`, onDoubleClick: () => o(!0), onClick: (p) => {
    (p.getModifierState("Control") || p.getModifierState("Meta")) && o(!0);
  }, className: "jer-value-string", style: d("string", l), children: [f, Lv(e, a), f] });
}, $v = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, nodeData: a }) => {
  const { getStyles: u } = Nt();
  return n ? x("input", { className: "jer-input-number", type: "text", name: fr(r), value: e, onChange: (l) => t(l.target.value.replace(/[^0-9.-]/g, "")), autoFocus: !0, onFocus: (l) => l.target.select(), onKeyDown: (l) => {
    switch (l.key) {
      case "Enter":
        i();
        break;
      case "Escape":
        s();
        break;
      case "ArrowUp":
        l.preventDefault(), t(Number(e) + 1);
        break;
      case "ArrowDown":
        l.preventDefault(), t(Number(e) - 1);
    }
  }, style: { width: String(e).length / 1.5 + 2 + "em" } }) : x("span", { onDoubleClick: () => o(!0), className: "jer-value-number", style: u("number", a), children: e });
}, Vv = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, nodeData: a }) => {
  const { getStyles: u } = Nt();
  w.useEffect(() => (n && document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l)), [n, i]);
  const l = (d) => {
    d.key === "Enter" ? i() : d.key === "Escape" && s();
  };
  return n ? x("input", { className: "jer-input-boolean", type: "checkbox", name: fr(r), checked: e, onChange: () => t(!e) }) : x("span", { onDoubleClick: () => o(!0), className: "jer-value-boolean", style: u("boolean", a), children: String(e) });
}, jv = ({ value: e, isEditing: t, setIsEditing: n, handleEdit: r, handleCancel: o, nodeData: i }) => {
  const { getStyles: s } = Nt();
  w.useEffect(() => (t && document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a)), [t]);
  const a = (u) => {
    u.key === "Enter" ? r() : u.key === "Escape" && o();
  };
  return x("div", { onDoubleClick: () => n(!0), className: "jer-value-null", style: s("null", i), children: String(e) });
}, Gv = ({ value: e, translate: t, isEditing: n, handleEdit: r, handleCancel: o, nodeData: i }) => {
  w.useEffect(() => (n && document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s)), []);
  const s = (a) => {
    a.key === "Enter" ? r() : a.key === "Escape" && o();
  };
  return x("span", { className: "jer-value-object", children: `{${t("DEFAULT_NEW_KEY", i)}: "${String(e)}" }` });
}, Uv = ({ value: e, isEditing: t, handleEdit: n, handleCancel: r }) => {
  w.useEffect(() => (t && document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o)), []);
  const o = (i) => {
    i.key === "Enter" ? n() : i.key === "Escape" && r();
  };
  return x("span", { className: "jer-value-array", children: `[${e === null ? "" : String(e)}]` });
}, Wv = ({ value: e }) => {
  let t = "Error!";
  switch (typeof e) {
    case "string":
      e === "**INVALID_FUNCTION**" && (t = "Function");
      break;
    case "undefined":
      t = "Undefined";
      break;
    case "symbol":
      t = "Symbol";
  }
  return x("span", { className: "jer-value-invalid", children: t });
}, zv = ({ size: e, style: t, className: n }) => Te("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: [x("path", { d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" }), x("path", { d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" })] }), Hv = ({ size: e, style: t, className: n }) => Te("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, transform: "translate(0, 0.5)", children: [x("path", { d: "M7 17.013l4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" }), x("path", { d: "M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" })] }), qv = ({ size: e, style: t, className: n }) => x("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: x("path", { d: "M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12m2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12M15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5z" }) }), Yv = ({ size: e, style: t, className: n }) => Te("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", width: e, height: e, className: n, style: t, children: [x("path", { d: "M9 2 H15 A1 1 0 0 1 16 3 V5 A1 1 0 0 1 15 6 H9 A1 1 0 0 1 8 5 V3 A1 1 0 0 1 9 2 z" }), x("path", { d: "M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-2M16 4h2a2 2 0 012 2v4M21 14H11" }), x("path", { d: "M15 10l-4 4 4 4" })] }), Xv = ({ size: e, style: t, className: n }) => Te("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", width: e, height: e, className: n, style: t, children: [x("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), x("path", { d: "M22 4L12 14.01l-3-3" })] }), Kv = ({ size: e, style: t, className: n }) => x("svg", { baseProfile: "tiny", viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: x("path", { d: "M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-5 8c0-.832.224-1.604.584-2.295l6.711 6.711A4.943 4.943 0 0112 17c-2.757 0-5-2.243-5-5zm9.416 2.295L9.705 7.584A4.943 4.943 0 0112 7c2.757 0 5 2.243 5 5 0 .832-.224 1.604-.584 2.295z" }) }), Jv = ({ size: e, style: t, className: n }) => x("svg", { viewBox: "0 0 512 512", fill: "currentColor", width: e, height: e, className: n, style: t, children: x("path", { d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" }) }), Jt = ({ name: e, nodeData: t, rotate: n }) => {
  var r, o, i, s, a, u, l;
  const { getStyles: d, icons: c } = Nt(), f = { size: "1.4em", className: "jer-icon" };
  switch (e) {
    case "add":
      return (r = c == null ? void 0 : c.add) !== null && r !== void 0 ? r : x(zv, Object.assign({}, f, { style: d("iconAdd", t) }));
    case "edit":
      return (o = c == null ? void 0 : c.edit) !== null && o !== void 0 ? o : x(Hv, Object.assign({}, f, { style: d("iconEdit", t) }));
    case "delete":
      return (i = c == null ? void 0 : c.delete) !== null && i !== void 0 ? i : x(qv, Object.assign({}, f, { style: d("iconDelete", t), size: "1.45em" }));
    case "copy":
      return (s = c == null ? void 0 : c.copy) !== null && s !== void 0 ? s : x(Yv, Object.assign({}, f, { style: d("iconCopy", t), size: "1.2em" }));
    case "ok":
      return (a = c == null ? void 0 : c.ok) !== null && a !== void 0 ? a : x(Xv, Object.assign({}, f, { style: Object.assign({ fontSize: "90%" }, d("iconOk", t)) }));
    case "cancel":
      return (u = c == null ? void 0 : c.cancel) !== null && u !== void 0 ? u : x(Kv, Object.assign({}, f, { style: Object.assign({ fontSize: "130%" }, d("iconCancel", t)) }));
    case "chevron":
      return (l = c == null ? void 0 : c.chevron) !== null && l !== void 0 ? l : x(Jv, { className: "jer-accordion-icon" + (n ? " jer-rotate-90" : ""), size: "1em", style: d("iconCollection", t) });
    default:
      return x(_i, {});
  }
}, yc = ({ startEdit: e, handleDelete: t, handleAdd: n, enableClipboard: r, type: o, nodeData: i, translate: s }) => {
  const { getStyles: a } = Nt(), u = s("KEY_NEW", i), [l, d] = w.useState(!1), [c, f] = w.useState(u), { key: p, path: g, value: m } = i;
  return w.useEffect(() => {
    l || f(u);
  }, [l]), Te("div", { className: "jer-edit-buttons", style: l ? { opacity: 1 } : void 0, children: [r && x("div", { onClick: (h) => {
    let C, A = "value", b = "";
    r && ((h.ctrlKey || h.metaKey) === !0 ? (C = Zv(g), b = C, A = "path") : (C = m, b = o ? JSON.stringify(m, null, 2) : String(C)), navigator.clipboard.writeText(b)), typeof r == "function" && r({ value: C, stringValue: b, path: g, key: p, type: A });
  }, className: "jer-copy-pulse", children: x(Jt, { name: "copy", nodeData: i }) }), e && x("div", { onClick: e, children: x(Jt, { name: "edit", nodeData: i }) }), t && x("div", { onClick: t, children: x(Jt, { name: "delete", nodeData: i }) }), n && x("div", { onClick: () => {
    o === "object" ? d(!0) : n("");
  }, children: x(Jt, { name: "add", nodeData: i }) }), l && n && o === "object" && Te(_i, { children: [x("input", { className: "jer-input-new-key", type: "text", name: "new-object-key", value: c, onChange: (h) => f(h.target.value), autoFocus: !0, onFocus: (h) => h.target.select(), onKeyDown: (h) => {
    h.key === "Enter" && n ? (d(!1), n(c)) : h.key === "Escape" && d(!1);
  }, style: a("input", i) }), x(gs, { onOk: () => {
    c && (d(!1), n(c));
  }, onCancel: () => {
    d(!1);
  }, nodeData: i })] })] });
}, gs = ({ onOk: e, onCancel: t, nodeData: n }) => Te("div", { className: "jer-confirm-buttons", children: [x("div", { onClick: e, children: x(Jt, { name: "ok", nodeData: n }) }), x("div", { onClick: t, children: x(Jt, { name: "cancel", nodeData: n }) })] }), Zv = (e) => e.reduce((t, n) => typeof n == "number" ? `${t}[${n}]` : t === "" ? n : `${t}.${n}`, ""), Qv = ["string", "number", "boolean", "null", "object", "array"], vc = (e = [], t) => {
  const n = e.filter(({ condition: g }) => g(t));
  if (n.length === 0)
    return {};
  const r = n[0], { element: o, wrapperElement: i, customNodeProps: s, wrapperProps: a, hideKey: u = !1, showEditTools: l = !0, showOnEdit: d = !1, showOnView: c = !0, showCollectionWrapper: f = !0 } = r, p = mc(r, ["element", "wrapperElement", "customNodeProps", "wrapperProps", "hideKey", "showEditTools", "showOnEdit", "showOnView", "showCollectionWrapper"]);
  return Object.assign({ CustomNode: o, CustomWrapper: i, customNodeProps: s, wrapperProps: a, hideKey: u, showEditTools: l, showOnEdit: d, showOnView: c, showCollectionWrapper: f }, p);
}, Xr = (e) => e !== null && typeof e == "object", bc = (e, t, n, r = "") => {
  if (!n && !r)
    return !0;
  switch (e) {
    case "collection":
      if (n) {
        if (n(t, r))
          return !0;
        if (!Ci(r, t, n))
          return !1;
      }
      if (!n && r && !Ci(r, t))
        return !1;
      break;
    case "value":
      if (n && !n(t, r) || !n && r && !Dn(t, r))
        return !1;
  }
  return !0;
}, Ci = (e = "", t, n = Dn) => {
  const r = t.value;
  return Object.entries(r).some(([o, i]) => {
    const s = [...t.path, o], a = Object.assign(Object.assign({}, t), { key: o, path: s, level: t.level + 1, value: i, size: s.length, parentData: r });
    return Xr(i) ? Ci(e, a, n) : n(a, e);
  });
}, Dn = (e, t = "") => {
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
}, iu = ({ key: e, path: t }, n = "") => !!Dn({ value: e }, n) || !!t.some((r) => Dn({ value: r }, n)), Cc = w.createContext({ collapseState: null, setCollapseState: () => {
}, doesPathMatch: () => !1, currentlyEditingElement: null, setCurrentlyEditingElement: () => {
}, areChildrenBeingEdited: () => !1 }), eb = ({ children: e }) => {
  const [t, n] = w.useState(null), [r, o] = w.useState(null);
  return x(Cc.Provider, { value: { collapseState: t, setCollapseState: n, doesPathMatch: (i) => {
    if (t === null)
      return !1;
    for (const [s, a] of t.path.entries())
      if (a !== i[s])
        return !1;
    return !0;
  }, currentlyEditingElement: r, setCurrentlyEditingElement: o, areChildrenBeingEdited: (i) => r !== null && r.includes(i) }, children: e });
}, Ds = () => w.useContext(Cc), Ac = (e) => {
  const { data: t, parentData: n, nodeData: r, onEdit: o, onDelete: i, onChange: s, onError: a, showErrorMessages: u, enableClipboard: l, restrictEditFilter: d, restrictDeleteFilter: c, restrictTypeSelection: f, searchFilter: p, searchText: g, showLabel: m, stringTruncate: h, showStringQuotes: C, indent: A, translate: b, customNodeDefinitions: v } = e, { getStyles: E } = Nt(), { currentlyEditingElement: _, setCurrentlyEditingElement: I, setCollapseState: R } = Ds(), [$, O] = w.useState(typeof t == "function" ? "**INVALID_FUNCTION**" : t), [L, P] = w.useState(null), { key: N, path: V } = r, z = vc(v, r), [K, J] = w.useState(Sr(t, z)), Y = fr(V), se = w.useCallback((G) => {
    if (!s)
      return void O(G);
    const ue = s({ currentData: r.fullData, newValue: G, currentValue: $, name: N, path: V });
    O(ue);
  }, [s]);
  w.useEffect(() => {
    O(typeof t == "function" ? "**INVALID_FUNCTION**" : t), J(Sr(t, z));
  }, [t, L]);
  const q = w.useMemo(() => !d(r), [r]), ce = w.useMemo(() => !c(r), [r]), Z = w.useMemo(() => (G, ue) => {
    var Ce;
    Ce = G.message, u && (P(Ce), setTimeout(() => P(null), 2500)), console.warn("Error", Ce), a && a({ currentData: r.fullData, errorValue: ue, currentValue: $, name: N, path: V, error: G });
  }, [a, u]), { CustomNode: ge, customNodeProps: k, hideKey: ee, showEditTools: be = !0, showOnEdit: je, showOnView: le } = z, de = [...Qv, ...v.filter(({ showInTypesSelector: G = !1, name: ue }) => G && !!ue).map(({ name: G }) => G)], Ae = w.useMemo(() => {
    if (typeof f == "boolean")
      return f ? [] : de;
    if (Array.isArray(f))
      return f;
    const G = f(r);
    return typeof G == "boolean" ? G ? [] : de : G;
  }, [r, f]);
  if (!bc("value", r, p, g))
    return null;
  const we = () => {
    let G;
    switch (I(null), K) {
      case "object":
        G = { [b("DEFAULT_NEW_KEY", r)]: $ };
        break;
      case "array":
        G = $ ?? [];
        break;
      case "number": {
        const ue = Number($);
        G = isNaN(ue) ? 0 : ue;
        break;
      }
      default:
        G = $;
    }
    o(G, V).then((ue) => {
      ue && Z({ code: "UPDATE_ERROR", message: ue }, G);
    });
  }, B = () => {
    I(null), O(t), J(Sr(t, z));
  }, ae = _ === Y, M = _ === `key_${Y}`, Le = typeof V.slice(-1)[0] != "number" && q && ce, Fe = !ae && L, Oe = ae && Ae.length > 0, _e = K !== "invalid" && !L && be, ze = m && M, Ge = m && !M && !ee, st = { value: $, parentData: n, setValue: se, isEditing: ae, setIsEditing: q ? () => I(Y) : () => {
  }, handleEdit: we, handleCancel: B, path: V, stringTruncate: h, showStringQuotes: C, nodeData: r, translate: b }, Ze = ge && (ae && je || !ae && le) ? x(ge, Object.assign({}, e, { value: $, customNodeProps: k, setValue: se, handleEdit: we, handleCancel: B, handleKeyPress: (G) => {
    G.key === "Enter" ? we() : G.key === "Escape" && B();
  }, isEditing: ae, setIsEditing: () => I(Y), getStyles: E })) : tb(Sr(t), st);
  return x("div", { className: "jer-component jer-value-component", style: { marginLeft: A / 2 + "em" }, children: Te("div", { className: "jer-value-main-row", style: { flexWrap: N.length > 10 ? "wrap" : "nowrap" }, children: [Ge && Te("span", { className: "jer-key-text", style: Object.assign(Object.assign({}, E("property", r)), { minWidth: `${Math.min(String(N).length + 1, 5)}ch`, flexShrink: N.length > 10 ? 1 : 0 }), onDoubleClick: () => Le && I(`key_${Y}`), children: [N === "" ? x("span", { className: "jer-empty-string" }) : N, ":"] }), ze && x("input", { className: "jer-input-text jer-key-edit", type: "text", name: Y, defaultValue: N, autoFocus: !0, onFocus: (G) => G.target.select(), onKeyDown: (G) => {
    G.key === "Enter" ? ((ue) => {
      if (I(null), N === ue || !n)
        return;
      const Ce = V.slice(0, -1);
      if (Object.keys(n).includes(ue))
        return void Z({ code: "KEY_EXISTS", message: b("ERROR_KEY_EXISTS", r) }, ue);
      const Ue = Object.fromEntries(Object.entries(n).map(([yt, kt]) => yt === N ? [ue, kt] : [yt, kt]));
      o(Ue, Ce);
    })(G.target.value) : G.key === "Escape" && B();
  }, style: { width: String(N).length / 1.5 + 0.5 + "em" } }), Te("div", { className: "jer-value-and-buttons", children: [x("div", { className: "jer-input-component", children: Ze }), ae ? x(gs, { onOk: we, onCancel: B, nodeData: r }) : _e && x(yc, { startEdit: q ? () => I(Y) : void 0, handleDelete: ce ? () => {
    i($, V).then((G) => {
      G && Z({ code: "DELETE_ERROR", message: G }, $);
    });
  } : void 0, enableClipboard: l, translate: b, nodeData: r }), Oe && Te("div", { className: "jer-select", children: [x("select", { name: `${N}-type-select`, className: "jer-type-select", onChange: (G) => ((ue) => {
    const Ce = v.find((Ue) => Ue.name === ue);
    if (Ce)
      o(Ce.defaultValue, V), J(ue);
    else {
      const Ue = nb($, ue, b("DEFAULT_NEW_KEY", r), z != null && z.CustomNode ? b("DEFAULT_STRING", r) : void 0);
      se(Ue), o(Ue, V), R({ path: V, collapsed: !1 }), J(ue);
    }
  })(G.target.value), value: K, children: Ae.map((G) => x("option", { value: G, children: G }, G)) }), x("span", { className: "focus" })] }), Fe && x("span", { className: "jer-error-slug", style: E("error", r), children: L })] })] }) });
}, Sr = (e, t) => t != null && t.CustomNode && (t != null && t.name) && t.showInTypesSelector ? t.name : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : e === null ? "null" : "invalid", tb = (e, t) => {
  const n = t.value;
  switch (e) {
    case "string":
      return x(kv, Object.assign({}, t, { value: n }));
    case "number":
      return x($v, Object.assign({}, t, { value: n }));
    case "boolean":
      return x(Vv, Object.assign({}, t, { value: n }));
    case "null":
      return x(jv, Object.assign({}, t));
    case "object":
      return x(Gv, Object.assign({}, t, { value: n }));
    case "array":
      return x(Uv, Object.assign({}, t));
    default:
      return x(Wv, Object.assign({}, t));
  }
}, nb = (e, t, n, r) => {
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
}, wc = (e) => {
  var { data: t, nodeData: n, parentData: r, showCollectionCount: o } = e, i = mc(e, ["data", "nodeData", "parentData", "showCollectionCount"]);
  const { getStyles: s } = Nt(), { collapseState: a, setCollapseState: u, doesPathMatch: l, currentlyEditingElement: d, setCurrentlyEditingElement: c, areChildrenBeingEdited: f } = Ds(), { onEdit: p, onAdd: g, onDelete: m, onError: h, showErrorMessages: C, restrictEditFilter: A, restrictDeleteFilter: b, restrictAddFilter: v, collapseFilter: E, enableClipboard: _, searchFilter: I, searchText: R, indent: $, keySort: O, showArrayIndices: L, defaultValue: P, translate: N, customNodeDefinitions: V, useJSON5Editor: z } = i, K = w.useMemo(() => z ? z instanceof Object ? (H) => $o.stringify(H, z) : (H) => $o.stringify(H, { space: 2 }) : (H) => JSON.stringify(H, null, 2), [z]), [J, Y] = w.useState(K(t)), [se, q] = w.useState(null), ce = E(n), [Z, ge] = w.useState(ce), k = Object.assign(Object.assign({}, n), { collapsed: Z }), { path: ee, key: be, size: je } = k, le = fr(ee), de = w.useRef(!ce), [Ae, we] = w.useState(!1);
  w.useEffect(() => {
    Y(K(t));
  }, [t]), w.useEffect(() => {
    const H = E(k);
    de.current = !H, ge(H);
  }, [E]), w.useEffect(() => {
    a !== null && l(ee) && (de.current = !0, ge(a.collapsed));
  }, [a]);
  const B = w.useMemo(() => !A(k), [k]), ae = w.useMemo(() => !b(k), [k]), M = w.useMemo(() => !v(k), [k]), Le = w.useMemo(() => (H) => typeof P != "function" ? P : P(H), [P]), { CustomNode: Fe, customNodeProps: Oe, CustomWrapper: _e, wrapperProps: ze = {}, hideKey: Ge, showEditTools: st = !0, showOnEdit: Ze, showOnView: G, showCollectionWrapper: ue = !0 } = w.useMemo(() => vc(V, k), []), Ce = w.useMemo(() => (H, te) => {
    var Ie;
    Ie = H.message, C && (q(Ie), setTimeout(() => q(null), 2500)), console.warn("Error", Ie), h && h({ currentData: k.fullData, errorValue: te, currentValue: t, name: be, path: ee, error: H });
  }, [h, C]);
  if (!bc("collection", k, I, R) && k.level > 0)
    return null;
  const Ue = Array.isArray(t) ? "array" : "object", yt = Ue === "array" ? { open: "[", close: "]" } : { open: "{", close: "}" }, kt = getComputedStyle(document.documentElement).getPropertyValue("--jer-expand-transition-time"), rn = (H) => {
    H.key === "Enter" && (H.metaKey || H.shiftKey || H.ctrlKey) ? on() : H.key === "Escape" && vt();
  }, on = () => {
    try {
      const H = $o.parse(J);
      if (c(null), q(null), JSON.stringify(H) === JSON.stringify(t))
        return;
      p(H, ee).then((te) => {
        te && Ce({ code: "UPDATE_ERROR", message: te }, H);
      });
    } catch {
      Ce({ code: "INVALID_JSON", message: N("ERROR_INVALID_JSON", k) }, J);
    }
  }, sn = ee.length > 0 ? () => {
    m(t, ee).then((H) => {
      H && Ce({ code: "DELETE_ERROR", message: H }, Hr(t, ee));
    });
  } : void 0, vt = () => {
    c(null), q(null), Y(K(t));
  }, xe = d === le, Ot = d === `key_${le}`, an = typeof ee.slice(-1)[0] == "number", bn = r !== null && B && M && ae && !an, pr = o === "when-closed" ? Z : o, $t = !xe && st, so = (L || !an) && !Ge && be !== void 0, ao = Fe && (xe && Ze || !xe && G), Ne = O && Ue === "object", bt = Object.entries(t).map(([H, te]) => [Ue === "array" ? Number(H) : H, te]);
  Ne && bt.sort(typeof O == "function" ? (H, te) => O(H[0], te[0]) : void 0);
  const uo = JSON.stringify(t, null, 2).replace(/\\n/g, `
`).split(`
`).length, Cn = de.current ? xe ? x("div", { className: "jer-collection-text-edit", children: Te("div", { children: [x(gc, { className: "jer-collection-text-area", name: le, value: J, setValue: Y, isEditing: xe, handleKeyPress: rn, styles: s("input", k) }), x("div", { className: "jer-collection-input-button-row", children: x(gs, { onOk: on, onCancel: vt, nodeData: k }) })] }) }) : bt.map(([H, te], Ie) => {
    const Bt = { key: H, value: te, path: [...ee, H], level: ee.length + 1, index: Ie, size: Xr(te) ? Object.keys(te).length : 1, parentData: t, fullData: k.fullData };
    return x("div", { className: "jer-collection-element", style: s("collectionElement", Bt), children: Xr(te) ? x(wc, Object.assign({ data: te, parentData: t, nodeData: Bt, showCollectionCount: o }, i), H) : x(Ac, Object.assign({ data: te, parentData: t, nodeData: Bt }, i, { showLabel: Ue === "object" || L }), H) }, H);
  }) : null, Tt = !!ue && Z;
  Tt || (de.current = !0);
  const An = Object.assign(Object.assign({}, i), { data: t, value: t, parentData: r, nodeData: k, setValue: (H) => Pr(void 0, void 0, void 0, function* () {
    return yield p(H, ee);
  }), handleEdit: on, handleCancel: vt, handleKeyPress: rn, isEditing: xe, setIsEditing: () => c(le), getStyles: s }), hr = ao ? x(Fe, Object.assign({ customNodeProps: Oe }, An, { children: Cn })) : Cn, mr = Ot ? x("input", { className: "jer-input-text jer-key-edit", type: "text", name: le, defaultValue: be, autoFocus: !0, onFocus: (H) => H.target.select(), onKeyDown: (H) => {
    H.key === "Enter" ? ((te) => {
      if (c(null), be === te || !r)
        return;
      const Ie = ee.slice(0, -1);
      if (Object.keys(r).includes(te))
        return void Ce({ code: "KEY_EXISTS", message: N("ERROR_KEY_EXISTS", k) }, te);
      const Bt = Object.fromEntries(Object.entries(r).map(([Sn, Fn]) => Sn === be ? [te, Fn] : [Sn, Fn]));
      p(Bt, Ie);
    })(H.target.value) : H.key === "Escape" && vt();
  }, style: { width: String(be).length / 1.5 + 0.5 + "em" } }) : so && x("span", { className: "jer-key-text", style: s("property", k), onDoubleClick: () => bn && c(`key_${le}`), children: be === "" ? x("span", { className: ee.length > 0 ? "jer-empty-string" : void 0 }) : `${be}:` }), wn = $t && x(yc, { startEdit: B ? () => {
    de.current = !0, c(le), ge(!1);
  } : void 0, handleAdd: M ? (H) => {
    ge(!1);
    const te = Le(k);
    Ue === "array" ? g(te, [...ee, t.length]).then((Ie) => {
      Ie && Ce({ code: "ADD_ERROR", message: Ie }, te);
    }) : H in t ? Ce({ code: "KEY_EXISTS", message: N("ERROR_KEY_EXISTS", k) }, H) : g(te, [...ee, H]).then((Ie) => {
      Ie && Ce({ code: "ADD_ERROR", message: Ie }, te);
    });
  } : void 0, handleDelete: ae ? sn : void 0, enableClipboard: _, type: Ue, nodeData: k, translate: N }), _n = Te("div", { className: "jer-component jer-collection-component", style: Object.assign({ marginLeft: (ee.length === 0 ? 0 : $ / 2) + "em" }, s("collection", k)), children: [ue ? Te("div", { className: "jer-collection-header-row", style: { position: "relative" }, children: [Te("div", { className: "jer-collection-name", children: [x("div", { className: "jer-collapse-icon", onClick: (H) => ((te) => {
    if (te.getModifierState("Alt"))
      return de.current = !0, void u({ collapsed: !Z, path: ee });
    d && d.includes(le) || (we(!0), de.current = !0, ge(!Z), setTimeout(() => we(!1), 500));
  })(H), children: x(Jt, { name: "chevron", rotate: Z, nodeData: k }) }), mr, !xe && x("span", { className: "jer-brackets jer-bracket-open", style: s("bracket", k), children: yt.open })] }), !xe && pr && x("div", { className: "jer-collection-item-count" + (pr ? " jer-visible" : " jer-hidden"), style: s("itemCount", k), children: je === 1 ? N("ITEM_SINGLE", Object.assign(Object.assign({}, k), { size: 1 }), 1) : N("ITEMS_MULTIPLE", k, je) }), x("div", { className: "jer-brackets" + (Tt ? " jer-visible" : " jer-hidden"), style: s("bracket", k), children: yt.close }), wn] }) : Ge ? x(_i, {}) : Te("div", { className: "jer-collection-header-row", style: { position: "relative" }, children: [mr, wn] }), Te("div", { className: "jer-collection-inner", style: Object.assign({ maxHeight: Tt ? 0 : f(le) ? void 0 : 3 * uo + "em", overflowY: Tt || Ae ? "hidden" : "visible", transition: `max-height ${kt}` }, s("collectionInner", k)), children: [hr, x("div", { className: xe ? "jer-collection-error-row" : "jer-collection-error-row-edit", children: se && x("span", { className: "jer-error-slug", style: s("error", k), children: se }) }), !xe && ue && x("div", { className: "jer-brackets jer-bracket-outside", style: s("bracket", k), children: yt.close })] })] });
  return _e ? x(_e, Object.assign({ customNodeProps: ze }, An, { children: _n })) : _n;
}, rb = { ITEM_SINGLE: "{{count}} item", ITEMS_MULTIPLE: "{{count}} items", KEY_NEW: "Enter new key", ERROR_KEY_EXISTS: "Key already exists", ERROR_INVALID_JSON: "Invalid JSON", ERROR_UPDATE: "Update unsuccessful", ERROR_DELETE: "Delete unsuccessful", ERROR_ADD: "Adding node unsuccessful", DEFAULT_STRING: "New data!", DEFAULT_NEW_KEY: "key" }, ob = (e, t) => (n, r, o) => ((i, s, a, u, l) => {
  if (s[u]) {
    const c = s[u](a);
    if (c !== null)
      return c;
  }
  const d = u in i ? i[u] : rb[u];
  return l === void 0 ? d : d == null ? void 0 : d.replace("{{count}}", String(l));
})(e, t, r, n, o), ib = ({ data: e, rootName: t = "root", onUpdate: n = () => {
}, onEdit: r = n, onDelete: o = n, onAdd: i = n, onChange: s, onError: a, showErrorMessages: u = !0, enableClipboard: l = !0, theme: d = "default", icons: c, indent: f = 3, collapse: p = !1, showCollectionCount: g = !0, restrictEdit: m = !1, restrictDelete: h = !1, restrictAdd: C = !1, restrictTypeSelection: A = !1, searchFilter: b, searchText: v, searchDebounceTime: E = 350, keySort: _ = !1, showArrayIndices: I = !0, showStringQuotes: R = !0, defaultValue: $ = null, minWidth: O = 250, maxWidth: L = "min(600px, 90vw)", rootFontSize: P, stringTruncate: N = 250, translations: V = {}, className: z, id: K, customText: J = {}, customNodeDefinitions: Y = [], useJSON5Editor: se = !1 }) => {
  const { getStyles: q, setTheme: ce, setIcons: Z } = Nt(), { setCollapseState: ge } = Ds(), k = w.useCallback(Fr(p), [p]), ee = w.useCallback(ob(V, J), [V, J]), [be, je] = w.useState(v), [le, de] = w.useState(e);
  w.useEffect(() => {
    d && ce(d), c && Z(c);
  }, [d, c]), w.useEffect(() => {
    ge(null), de(e);
  }, [e]), w.useEffect(() => {
    const Oe = setTimeout(() => je(v), E);
    return () => clearTimeout(Oe);
  }, [v, E]);
  const Ae = { key: t, path: [], level: 0, index: 0, value: le, size: Object.keys(le).length, parentData: null, fullData: le }, we = Fr(m), B = Fr(h), ae = Fr(C), M = ab(b), Le = { name: t, nodeData: Ae, onEdit: (Oe, _e) => Pr(void 0, void 0, void 0, function* () {
    const { currentData: ze, newData: Ge, currentValue: st, newValue: Ze } = Vo(le, _e, Oe, "update");
    if (st === Ze)
      return;
    de(Ge);
    const G = yield r({ currentData: ze, newData: Ge, currentValue: st, newValue: Ze, name: _e.slice(-1)[0], path: _e });
    return G !== void 0 ? (de(ze), G === !1 ? ee("ERROR_UPDATE", Ae) : G) : void 0;
  }), onDelete: (Oe, _e) => Pr(void 0, void 0, void 0, function* () {
    const { currentData: ze, newData: Ge, currentValue: st, newValue: Ze } = Vo(le, _e, Oe, "delete");
    de(Ge);
    const G = yield o({ currentData: ze, newData: Ge, currentValue: st, newValue: Ze, name: _e.slice(-1)[0], path: _e });
    if (G !== void 0)
      return de(ze), G === !1 ? ee("ERROR_UPDATE", Ae) : G;
  }), onAdd: (Oe, _e) => Pr(void 0, void 0, void 0, function* () {
    const { currentData: ze, newData: Ge, currentValue: st, newValue: Ze } = Vo(le, _e, Oe, "add");
    de(Ge);
    const G = yield i({ currentData: ze, newData: Ge, currentValue: st, newValue: Ze, name: _e.slice(-1)[0], path: _e });
    if (G !== void 0)
      return de(ze), G === !1 ? ee("ERROR_UPDATE", Ae) : G;
  }), onChange: s, onError: a, showErrorMessages: u, showCollectionCount: g, collapseFilter: k, restrictEditFilter: we, restrictDeleteFilter: B, restrictAddFilter: ae, restrictTypeSelection: A, searchFilter: M, searchText: be, enableClipboard: l, keySort: _, showArrayIndices: I, showStringQuotes: R, indent: f, defaultValue: $, stringTruncate: N, translate: ee, customNodeDefinitions: Y, parentData: null, useJSON5Editor: se }, Fe = Object.assign(Object.assign({}, q("container", Ae)), { minWidth: O, maxWidth: L });
  return Fe.fontSize = P ?? Fe.fontSize, x("div", { id: K, className: "jer-editor-container " + z, style: Fe, children: Xr(le) ? x(wc, Object.assign({ data: le }, Le)) : x(Ac, Object.assign({ data: le, showLabel: !0 }, Le)) });
}, sb = (e) => x(Iv, { children: x(eb, { children: x(ib, Object.assign({}, e)) }) }), Vo = (e, t, n, r) => {
  if (t.length === 0)
    return { currentData: e, newData: n, currentValue: e, newValue: n };
  const o = r !== "add" ? Hr(e, t) : void 0;
  return { currentData: e, newData: pv(Nv(e), t, n, { remove: r === "delete" }), currentValue: o, newValue: r !== "delete" ? n : void 0 };
}, Fr = (e) => typeof e == "boolean" ? () => e : typeof e == "number" ? ({ level: t }) => t >= e : e, ab = (e) => {
  if (e !== void 0)
    return e === "value" ? Dn : e === "key" ? iu : e === "all" ? (t, n) => Dn(t, n) || iu(t, n) : e;
}, su = (e) => {
  const t = [];
  e.rows && e.rows.forEach((n) => {
    if (n.footnotesId) {
      const { dataKey: r, staticFootnotes: o } = e.visualizations[n.footnotesId];
      !r && !(o != null && o.length) ? (delete e.visualizations[n.footnotesId], delete n.footnotesId) : t.push(n.footnotesId);
    }
  }), e.visualizations && Object.keys(e.visualizations).forEach((n) => {
    e.visualizations[n].type === "footnotes" && !t.includes(n) && delete e.visualizations[n];
  });
}, au = (e) => {
  e.datasets && Object.keys(e.datasets).forEach((t) => {
    delete e.datasets[t].formattedData, e.datasets[t].dataUrl && delete e.datasets[t].data;
  }), e.visualizations && Object.keys(e.visualizations).forEach((t) => {
    e.visualizations[t] = jo.omit(e.visualizations[t], [
      "runtime",
      "formattedData",
      "data",
      "editing",
      "originalFormattedData"
    ]);
  }), e.rows && e.rows.forEach((t, n) => {
    t.dataKey && (e.rows[n] = jo.omit(t, ["data", "formattedData"]));
  });
}, uu = (e) => {
  var t;
  (t = e.dashboard) != null && t.sharedFilters && e.dashboard.sharedFilters.forEach((n, r) => {
    delete e.dashboard.sharedFilters[r].active, n.type === "urlfilter" && delete e.dashboard.sharedFilters[r].values;
  });
}, ub = (e) => {
  e.datasets && Object.keys(e.datasets).forEach((t) => {
    delete e.datasets[t].runtimeDataUrl;
  });
}, lb = (e) => {
  const t = jo.cloneDeep(e);
  return t.type === "dashboard" ? (t.multiDashboards && (t.multiDashboards.forEach((n, r) => {
    au(t.multiDashboards[r]), uu(t.multiDashboards[r]), su(t.multiDashboards[r]);
  }), delete t.dashboard, delete t.rows, delete t.visualizations, delete t.label, delete t.activeDashboard), au(t), uu(t), su(t), ub(t)) : (delete t.runtime, delete t.formattedData, t.dataUrl && delete t.data), t;
};
const tC = ({ loadConfig: e, config: t, convertStateToConfig: n, onExpandCollapse: r = () => {
} }) => {
  const [o, i] = w.useState(!1), [s, a] = w.useState({}), u = (f) => {
    i(f), r();
  }, l = (f) => !!["datasets", "data", "originalFormattedData", "formattedData"].includes(String(f.key)), d = (f) => {
    a(f.newData);
  };
  w.useEffect(() => {
    let f = lb(t);
    t.type !== "dashboard" && (f = n()), a(f);
  }, [t]);
  const c = {
    chart: ["Charts", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ F.createElement(Fs, null)],
    dashboard: ["Dashboard", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ F.createElement(Fs, null)],
    map: ["Maps", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", /* @__PURE__ */ F.createElement(fv, null)],
    "markup-include": [
      "Markup Include",
      "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/Markup-Include.html",
      /* @__PURE__ */ F.createElement(Nc, null)
    ]
  };
  return t.type ? /* @__PURE__ */ F.createElement(F.Fragment, null, /* @__PURE__ */ F.createElement("a", { href: c[t.type][1], target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, c[t.type][2], /* @__PURE__ */ F.createElement("div", null, /* @__PURE__ */ F.createElement("span", { className: "heading-3" }, "Get Help with ", c[t.type][0]), /* @__PURE__ */ F.createElement("p", null, "Examples and documentation"))), /* @__PURE__ */ F.createElement("div", { className: "advanced" }, /* @__PURE__ */ F.createElement("span", { className: "advanced-toggle-link", onClick: () => u(!o) }, /* @__PURE__ */ F.createElement("span", null, o ? "— " : "+ "), "Advanced Options"), o && /* @__PURE__ */ F.createElement(F.Fragment, null, /* @__PURE__ */ F.createElement("section", { className: "error-box py-2 px-3 my-2" }, /* @__PURE__ */ F.createElement("div", null, /* @__PURE__ */ F.createElement("strong", { className: "pt-1" }, "Warning"), /* @__PURE__ */ F.createElement("p", null, "This can cause serious errors in your visualization."))), /* @__PURE__ */ F.createElement("p", { className: "pb-2" }, "This tool displays the actual ", /* @__PURE__ */ F.createElement("acronym", { title: "JavaScript Object Notation" }, "JSON"), " configuration that is generated by this editor and allows you to edit properties directly and apply them."), /* @__PURE__ */ F.createElement(
    sb,
    {
      className: "advanced-json-editor",
      data: s,
      onUpdate: d,
      rootName: "",
      collapse: l
    }
  ), /* @__PURE__ */ F.createElement(
    "button",
    {
      className: "btn btn-success m-2 p-2",
      onClick: () => {
        e(s), u(!o);
      }
    },
    "Apply Configuration Changes"
  )))) : /* @__PURE__ */ F.createElement(F.Fragment, null);
}, nC = ({
  label: e,
  sliderType: t = "flat",
  size: n = "medium",
  activeColor: r = null,
  section: o = null,
  subsection: i = null,
  fieldName: s,
  updateField: a,
  value: u,
  i: l = null,
  min: d = null,
  max: c = null,
  onClick: f,
  ...p
}) => {
  const [g, m] = w.useState(u);
  let h = () => {
    let b = "";
    return o && (b += o + "-"), i && (b += i + "-"), s && (b += s), b;
  };
  const C = () => ({
    flat: " slider--flat",
    block: " slider--block",
    pill: " slider--pill",
    "3d": " slider--3d"
  })[t] || "";
  w.useEffect(() => {
    u !== void 0 && u !== g && m(u);
  }, [u]), w.useEffect(() => {
    u !== void 0 && u !== g && a && a(o, i, s, g, l);
  }, [g]);
  const A = (b) => {
    m(!g), f && f(b);
  };
  return /* @__PURE__ */ F.createElement("div", { className: "input-group" }, e && /* @__PURE__ */ F.createElement("label", null, e), /* @__PURE__ */ F.createElement(
    "div",
    {
      className: "cove-input__slider" + (n === "small" ? "--small" : n === "large" ? "--large" : "") + C() + (g ? " active" : ""),
      onClick: A
    },
    /* @__PURE__ */ F.createElement("div", { className: "cove-input__slider-button" }),
    /* @__PURE__ */ F.createElement(
      "div",
      {
        className: "cove-input__slider-track",
        style: g && r ? { backgroundColor: r } : null
      }
    ),
    /* @__PURE__ */ F.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: h(), checked: g || !1, readOnly: !0 })
  ));
};
export {
  $b as $,
  tC as A,
  Cb as B,
  Ph as C,
  Zb as D,
  em as E,
  Sb as F,
  Jb as G,
  Rh as H,
  nC as I,
  Nb as J,
  Os as K,
  Kb as L,
  Xb as M,
  Tb as N,
  Ob as O,
  qn as P,
  xb as Q,
  wb as R,
  _b as S,
  ln as T,
  Pb as U,
  Ib as V,
  Fb as W,
  Lb as X,
  ph as Y,
  Mb as Z,
  gu as _,
  Ab as a,
  Hc as b,
  Ku as c,
  Eu as d,
  Tu as e,
  lb as f,
  Ub as g,
  up as h,
  Hb as i,
  Wb as j,
  rd as k,
  hd as l,
  kh as m,
  zu as n,
  Yb as o,
  xi as p,
  kb as q,
  qb as r,
  od as s,
  Bb as t,
  Vb as u,
  jb as v,
  Gb as w,
  eC as x,
  zb as y,
  Qb as z
};
