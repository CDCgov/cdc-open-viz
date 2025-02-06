import { _ as Ke } from "./storybook-lodash-a4231e1c.es.js";
import { e as xt } from "./storybook-DataTransform-6163e156.es.js";
import { j as Yt, k as $s, i as Vs, m as Hc, G as Gr, c as jt } from "./storybook-linear-ef79b404.es.js";
import { P as k } from "./storybook-index-43433e35.es.js";
import { r as _, R as E } from "./storybook-index-45401197.es.js";
import { g as _u, a as Su } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { T as qc } from "./storybook-Text-c19e6344.es.js";
import { d as js, m as Yc, a as qn } from "./storybook-Icon-4f5978ba.es.js";
import { j as x, a as Te, F as $i } from "./storybook-jsx-runtime-36872362.es.js";
import { S as Bn, T as Gs } from "./storybook-Inputs-b80d0cf3.es.js";
import { T as wt } from "./storybook-Tooltip-4102bd69.es.js";
import { h as Qo, i as Zo, j as Xc } from "./storybook-Filters-ce4a04a7.es.js";
import { r as Vi, R as Kc } from "./storybook-index-633d712d.es.js";
import { _ as mn } from "./storybook-extends-70f3d2a3.es.js";
import { M as Jc } from "./storybook-MultiSelect-d587cce3.es.js";
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
function Qc(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (Xe.arrayBuffer)
  var Zc = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], ed = ArrayBuffer.isView || function(e) {
    return e && Zc.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function bn(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function ji(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function Gi(e) {
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
  e = bn(e), t = ji(t);
  var n = this.map[e];
  this.map[e] = n ? n + ", " + t : t;
};
Be.prototype.delete = function(e) {
  delete this.map[bn(e)];
};
Be.prototype.get = function(e) {
  return e = bn(e), this.has(e) ? this.map[e] : null;
};
Be.prototype.has = function(e) {
  return this.map.hasOwnProperty(bn(e));
};
Be.prototype.set = function(e, t) {
  this.map[bn(e)] = ji(t);
};
Be.prototype.forEach = function(e, t) {
  for (var n in this.map)
    this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
};
Be.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push(n);
  }), Gi(e);
};
Be.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), Gi(e);
};
Be.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push([n, t]);
  }), Gi(e);
};
Xe.iterable && (Be.prototype[Symbol.iterator] = Be.prototype.entries);
function vo(e) {
  if (!e._noBody) {
    if (e.bodyUsed)
      return Promise.reject(new TypeError("Already read"));
    e.bodyUsed = !0;
  }
}
function Fu(e) {
  return new Promise(function(t, n) {
    e.onload = function() {
      t(e.result);
    }, e.onerror = function() {
      n(e.error);
    };
  });
}
function td(e) {
  var t = new FileReader(), n = Fu(t);
  return t.readAsArrayBuffer(e), n;
}
function nd(e) {
  var t = new FileReader(), n = Fu(t), r = /charset=([A-Za-z0-9_-]+)/.exec(e.type), o = r ? r[1] : "utf-8";
  return t.readAsText(e, o), n;
}
function rd(e) {
  for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
    n[r] = String.fromCharCode(t[r]);
  return n.join("");
}
function zs(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function Nu() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : Xe.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : Xe.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : Xe.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : Xe.arrayBuffer && Xe.blob && Qc(e) ? (this._bodyArrayBuffer = zs(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : Xe.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || ed(e)) ? this._bodyArrayBuffer = zs(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : Xe.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, Xe.blob && (this.blob = function() {
    var e = vo(this);
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
      var e = vo(this);
      return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
        this._bodyArrayBuffer.buffer.slice(
          this._bodyArrayBuffer.byteOffset,
          this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
        )
      ) : Promise.resolve(this._bodyArrayBuffer));
    } else {
      if (Xe.blob)
        return this.blob().then(td);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var e = vo(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return nd(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(rd(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, Xe.formData && (this.formData = function() {
    return this.text().then(sd);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var od = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function id(e) {
  var t = e.toUpperCase();
  return od.indexOf(t) > -1 ? t : e;
}
function nn(e, t) {
  if (!(this instanceof nn))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var n = t.body;
  if (e instanceof nn) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new Be(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !n && e._bodyInit != null && (n = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new Be(t.headers)), this.method = id(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
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
nn.prototype.clone = function() {
  return new nn(this, { body: this._bodyInit });
};
function sd(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(n) {
    if (n) {
      var r = n.split("="), o = r.shift().replace(/\+/g, " "), i = r.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(o), decodeURIComponent(i));
    }
  }), t;
}
function ad(e) {
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
Nu.call(nn.prototype);
function Et(e, t) {
  if (!(this instanceof Et))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new Be(t.headers), this.url = t.url || "", this._initBody(e);
}
Nu.call(Et.prototype);
Et.prototype.clone = function() {
  return new Et(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Be(this.headers),
    url: this.url
  });
};
Et.error = function() {
  var e = new Et(null, { status: 200, statusText: "" });
  return e.ok = !1, e.status = 0, e.type = "error", e;
};
var ud = [301, 302, 303, 307, 308];
Et.redirect = function(e, t) {
  if (ud.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new Et(null, { status: t, headers: { location: e } });
};
var Zt = $e.DOMException;
try {
  new Zt();
} catch {
  Zt = function(t, n) {
    this.message = t, this.name = n;
    var r = Error(t);
    this.stack = r.stack;
  }, Zt.prototype = Object.create(Error.prototype), Zt.prototype.constructor = Zt;
}
function xu(e, t) {
  return new Promise(function(n, r) {
    var o = new nn(e, t);
    if (o.signal && o.signal.aborted)
      return r(new Zt("Aborted", "AbortError"));
    var i = new XMLHttpRequest();
    function s() {
      i.abort();
    }
    i.onload = function() {
      var l = {
        statusText: i.statusText,
        headers: ad(i.getAllResponseHeaders() || "")
      };
      o.url.indexOf("file://") === 0 && (i.status < 200 || i.status > 599) ? l.status = 200 : l.status = i.status, l.url = "responseURL" in i ? i.responseURL : l.headers.get("X-Request-URL");
      var f = "response" in i ? i.response : i.responseText;
      setTimeout(function() {
        n(new Et(f, l));
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
        r(new Zt("Aborted", "AbortError"));
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
        u.push(bn(l)), i.setRequestHeader(l, ji(t.headers[l]));
      }), o.headers.forEach(function(l, f) {
        u.indexOf(f) === -1 && i.setRequestHeader(f, l);
      });
    } else
      o.headers.forEach(function(l, f) {
        i.setRequestHeader(f, l);
      });
    o.signal && (o.signal.addEventListener("abort", s), i.onreadystatechange = function() {
      i.readyState === 4 && o.signal.removeEventListener("abort", s);
    }), i.send(typeof o._bodyInit > "u" ? null : o._bodyInit);
  });
}
xu.polyfill = !0;
$e.fetch || ($e.fetch = xu, $e.Headers = Be, $e.Request = nn, $e.Response = Et);
function mC(e, t) {
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
function Ou(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ei = Math.PI, ti = 2 * ei, Xt = 1e-6, ld = ti - Xt;
function ni() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function Tu() {
  return new ni();
}
ni.prototype = Tu.prototype = {
  constructor: ni,
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
    var i = this._x1, s = this._y1, a = n - e, u = r - t, l = i - e, f = s - t, c = l * l + f * f;
    if (o < 0)
      throw new Error("negative radius: " + o);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (c > Xt)
      if (!(Math.abs(f * a - u * l) > Xt) || !o)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var d = n - i, p = r - s, g = a * a + u * u, h = d * d + p * p, m = Math.sqrt(g), C = Math.sqrt(c), w = o * Math.tan((ei - Math.acos((g + c - h) / (2 * m * C))) / 2), D = w / C, y = w / m;
        Math.abs(D - 1) > Xt && (this._ += "L" + (e + D * l) + "," + (t + D * f)), this._ += "A" + o + "," + o + ",0,0," + +(f * d > l * p) + "," + (this._x1 = e + y * a) + "," + (this._y1 = t + y * u);
      }
  },
  arc: function(e, t, n, r, o, i) {
    e = +e, t = +t, n = +n, i = !!i;
    var s = n * Math.cos(r), a = n * Math.sin(r), u = e + s, l = t + a, f = 1 ^ i, c = i ? r - o : o - r;
    if (n < 0)
      throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + u + "," + l : (Math.abs(this._x1 - u) > Xt || Math.abs(this._y1 - l) > Xt) && (this._ += "L" + u + "," + l), n && (c < 0 && (c = c % ti + ti), c > ld ? this._ += "A" + n + "," + n + ",0,1," + f + "," + (e - s) + "," + (t - a) + "A" + n + "," + n + ",0,1," + f + "," + (this._x1 = u) + "," + (this._y1 = l) : c > Xt && (this._ += "A" + n + "," + n + ",0," + +(c >= ei) + "," + f + "," + (this._x1 = e + n * Math.cos(o)) + "," + (this._y1 = t + n * Math.sin(o))));
  },
  rect: function(e, t, n, r) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function Cr(e) {
  return function() {
    return e;
  };
}
var hC = Math.abs, gC = Math.atan2, DC = Math.cos, EC = Math.max, yC = Math.min, vC = Math.sin, bC = Math.sqrt, CC = 1e-12, oo = Math.PI, Us = oo / 2, cd = 2 * oo;
function AC(e) {
  return e > 1 ? 0 : e < -1 ? oo : Math.acos(e);
}
function wC(e) {
  return e >= 1 ? Us : e <= -1 ? -Us : Math.asin(e);
}
const Bu = {
  draw: function(e, t) {
    var n = Math.sqrt(t / oo);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, cd);
  }
};
var Iu = Math.sqrt(1 / 3), dd = Iu * 2;
const fd = {
  draw: function(e, t) {
    var n = Math.sqrt(t / dd), r = n * Iu;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, pd = {
  draw: function(e, t) {
    var n = Math.sqrt(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
};
var bo = Math.sqrt(3);
const md = {
  draw: function(e, t) {
    var n = -Math.sqrt(t / (bo * 3));
    e.moveTo(0, n * 2), e.lineTo(-bo * n, -n), e.lineTo(bo * n, -n), e.closePath();
  }
};
function io() {
  var e = Cr(Bu), t = Cr(64), n = null;
  function r() {
    var o;
    if (n || (n = o = Tu()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), o)
      return n = null, o + "" || null;
  }
  return r.type = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Cr(o), r) : e;
  }, r.size = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Cr(+o), r) : t;
  }, r.context = function(o) {
    return arguments.length ? (n = o ?? null, r) : n;
  }, r;
}
function ri(e, t, n) {
  var r, o, i, s, a;
  t == null && (t = 100);
  function u() {
    var f = Date.now() - s;
    f < t && f >= 0 ? r = setTimeout(u, t - f) : (r = null, n || (a = e.apply(i, o), i = o = null));
  }
  var l = function() {
    i = this, o = arguments, s = Date.now();
    var f = n && !r;
    return r || (r = setTimeout(u, t)), f && (a = e.apply(i, o), i = o = null), a;
  };
  return l.clear = function() {
    r && (clearTimeout(r), r = null);
  }, l.flush = function() {
    r && (a = e.apply(i, o), i = o = null, clearTimeout(r), r = null);
  }, l;
}
ri.debounce = ri;
var hd = ri;
const Ws = /* @__PURE__ */ _u(hd);
function gd(e) {
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
  const [s, a] = _.useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0
  }), u = _.useRef({
    element: null,
    scrollContainers: null,
    resizeObserver: null,
    lastBounds: s
  }), l = t ? typeof t == "number" ? t : t.scroll : null, f = t ? typeof t == "number" ? t : t.resize : null, c = _.useRef(!1);
  _.useEffect(() => (c.current = !0, () => void (c.current = !1)));
  const [d, p, g] = _.useMemo(() => {
    const w = () => {
      if (!u.current.element)
        return;
      const {
        left: D,
        top: y,
        width: v,
        height: S,
        bottom: N,
        right: P,
        x: M,
        y: O
      } = u.current.element.getBoundingClientRect(), L = {
        left: D,
        top: y,
        width: v,
        height: S,
        bottom: N,
        right: P,
        x: M,
        y: O
      };
      u.current.element instanceof HTMLElement && o && (L.height = u.current.element.offsetHeight, L.width = u.current.element.offsetWidth), Object.freeze(L), c.current && !vd(u.current.lastBounds, L) && a(u.current.lastBounds = L);
    };
    return [w, f ? Ws(w, f) : w, l ? Ws(w, l) : w];
  }, [a, o, l, f]);
  function h() {
    u.current.scrollContainers && (u.current.scrollContainers.forEach((w) => w.removeEventListener("scroll", g, !0)), u.current.scrollContainers = null), u.current.resizeObserver && (u.current.resizeObserver.disconnect(), u.current.resizeObserver = null);
  }
  function m() {
    u.current.element && (u.current.resizeObserver = new i(g), u.current.resizeObserver.observe(u.current.element), n && u.current.scrollContainers && u.current.scrollContainers.forEach((w) => w.addEventListener("scroll", g, {
      capture: !0,
      passive: !0
    })));
  }
  const C = (w) => {
    !w || w === u.current.element || (h(), u.current.element = w, u.current.scrollContainers = Pu(w), m());
  };
  return Ed(g, !!n), Dd(p), _.useEffect(() => {
    h(), m();
  }, [n, g, p]), _.useEffect(() => h, []), [C, s, d];
}
function Dd(e) {
  _.useEffect(() => {
    const t = e;
    return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
  }, [e]);
}
function Ed(e, t) {
  _.useEffect(() => {
    if (t) {
      const n = e;
      return window.addEventListener("scroll", n, {
        capture: !0,
        passive: !0
      }), () => void window.removeEventListener("scroll", n, !0);
    }
  }, [e, t]);
}
function Pu(e) {
  const t = [];
  if (!e || e === document.body)
    return t;
  const {
    overflow: n,
    overflowX: r,
    overflowY: o
  } = window.getComputedStyle(e);
  return [n, r, o].some((i) => i === "auto" || i === "scroll") && t.push(e), [...t, ...Pu(e.parentElement)];
}
const yd = ["x", "y", "top", "bottom", "left", "right", "width", "height"], vd = (e, t) => yd.every((n) => e[n] === t[n]), zi = (e) => {
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
}, bd = {
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
}, Cd = {
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
}, Ad = {
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
}, wd = {
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
}, SC = wd, FC = zi(Cd), NC = zi(bd), xC = zi(Ad);
var Qn = /* @__PURE__ */ function() {
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
function _d(e, t) {
  return new Qn({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function Sd(e, t) {
  return new Qn({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const Fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: Qn,
  subtractPoints: Sd,
  sumPoints: _d
}, Symbol.toStringTag, { value: "Module" }));
function Nd(e) {
  return !!e && e instanceof Element;
}
function xd(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function Od(e) {
  return !!e && "createSVGPoint" in e;
}
function Td(e) {
  return !!e && "getScreenCTM" in e;
}
function Bd(e) {
  return !!e && "changedTouches" in e;
}
function Id(e) {
  return !!e && "clientX" in e;
}
function Pd(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function Yn() {
  return Yn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Yn.apply(this, arguments);
}
var Co = {
  x: 0,
  y: 0
};
function Rd(e) {
  if (!e)
    return Yn({}, Co);
  if (Bd(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : Yn({}, Co);
  if (Id(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : Yn({}, Co);
}
function oi(e, t) {
  if (!e || !t)
    return null;
  var n = Rd(t), r = xd(e) ? e.ownerSVGElement : e, o = Td(r) ? r.getScreenCTM() : null;
  if (Od(r) && o) {
    var i = r.createSVGPoint();
    return i.x = n.x, i.y = n.y, i = i.matrixTransform(o.inverse()), new Qn({
      x: i.x,
      y: i.y
    });
  }
  var s = e.getBoundingClientRect();
  return new Qn({
    x: n.x - s.left - e.clientLeft,
    y: n.y - s.top - e.clientTop
  });
}
function Md(e, t) {
  if (Nd(e) && t)
    return oi(e, t);
  if (Pd(e)) {
    var n = e, r = n.target;
    if (r)
      return oi(r, n);
  }
  return null;
}
const Ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: Md,
  touchPoint: oi
}, Symbol.toStringTag, { value: "Module" }));
var Hs = 180 / Math.PI, ii = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ru(e, t, n, r, o, i) {
  var s, a, u;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (u = e * n + t * r) && (n -= e * u, r -= t * u), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, u /= a), e * r < t * n && (e = -e, t = -t, u = -u, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Hs,
    skewX: Math.atan(u) * Hs,
    scaleX: s,
    scaleY: a
  };
}
var Ar;
function kd(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ii : Ru(t.a, t.b, t.c, t.d, t.e, t.f);
}
function $d(e) {
  return e == null || (Ar || (Ar = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ar.setAttribute("transform", e), !(e = Ar.transform.baseVal.consolidate())) ? ii : (e = e.matrix, Ru(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Mu(e, t, n, r) {
  function o(l) {
    return l.length ? l.pop() + " " : "";
  }
  function i(l, f, c, d, p, g) {
    if (l !== c || f !== d) {
      var h = p.push("translate(", null, t, null, n);
      g.push({ i: h - 4, x: Yt(l, c) }, { i: h - 2, x: Yt(f, d) });
    } else
      (c || d) && p.push("translate(" + c + t + d + n);
  }
  function s(l, f, c, d) {
    l !== f ? (l - f > 180 ? f += 360 : f - l > 180 && (l += 360), d.push({ i: c.push(o(c) + "rotate(", null, r) - 2, x: Yt(l, f) })) : f && c.push(o(c) + "rotate(" + f + r);
  }
  function a(l, f, c, d) {
    l !== f ? d.push({ i: c.push(o(c) + "skewX(", null, r) - 2, x: Yt(l, f) }) : f && c.push(o(c) + "skewX(" + f + r);
  }
  function u(l, f, c, d, p, g) {
    if (l !== c || f !== d) {
      var h = p.push(o(p) + "scale(", null, ",", null, ")");
      g.push({ i: h - 4, x: Yt(l, c) }, { i: h - 2, x: Yt(f, d) });
    } else
      (c !== 1 || d !== 1) && p.push(o(p) + "scale(" + c + "," + d + ")");
  }
  return function(l, f) {
    var c = [], d = [];
    return l = e(l), f = e(f), i(l.translateX, l.translateY, f.translateX, f.translateY, c, d), s(l.rotate, f.rotate, c, d), a(l.skewX, f.skewX, c, d), u(l.scaleX, l.scaleY, f.scaleX, f.scaleY, c, d), l = f = null, function(p) {
      for (var g = -1, h = d.length, m; ++g < h; )
        c[(m = d[g]).i] = m.x(p);
      return c.join("");
    };
  };
}
var Vd = Mu(kd, "px, ", "px)", "deg)"), jd = Mu($d, ", ", ")", ")");
const Lu = 4.5, Gd = 3.5, OC = (e, t) => {
  if (t) {
    if (xt.contrast(e, t) < Lu)
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
}, TC = (e, t) => !xt.valid(e) || !xt.valid(t) ? !1 : xt.contrast(e, t) >= Gd, BC = (e, t) => !xt.valid(e) || !xt.valid(t) ? !1 : xt.contrast(e, t), IC = (e) => {
  let n = getComputedStyle(document.body).getPropertyValue("--cool-gray-90");
  (!n || n === "") && (n = "#1c1d1f");
  const r = "#ffffff";
  return !xt.valid(e) || xt.contrast(n, e) >= Lu ? { textColor: n, strokeColor: r } : { textColor: r, strokeColor: n };
};
var zd = { value: () => {
} };
function ku() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Rr(n);
}
function Rr(e) {
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
Rr.prototype = ku.prototype = {
  constructor: Rr,
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
        n[o] = qs(n[o], e.name, t);
      else if (t == null)
        for (o in n)
          n[o] = qs(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new Rr(e);
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
function qs(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = zd, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var si = "http://www.w3.org/1999/xhtml";
const Ys = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: si,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function so(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ys.hasOwnProperty(t) ? { space: Ys[t], local: e } : e;
}
function Hd(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === si && t.documentElement.namespaceURI === si ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function qd(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function $u(e) {
  var t = so(e);
  return (t.local ? qd : Hd)(t);
}
function Yd() {
}
function Ui(e) {
  return e == null ? Yd : function() {
    return this.querySelector(e);
  };
}
function Xd(e) {
  typeof e != "function" && (e = Ui(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), u, l, f = 0; f < s; ++f)
      (u = i[f]) && (l = e.call(u, u.__data__, f, i)) && ("__data__" in u && (l.__data__ = u.__data__), a[f] = l);
  return new it(r, this._parents);
}
function Kd(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Jd() {
  return [];
}
function Vu(e) {
  return e == null ? Jd : function() {
    return this.querySelectorAll(e);
  };
}
function Qd(e) {
  return function() {
    return Kd(e.apply(this, arguments));
  };
}
function Zd(e) {
  typeof e == "function" ? e = Qd(e) : e = Vu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, u, l = 0; l < a; ++l)
      (u = s[l]) && (r.push(e.call(u, u.__data__, l, s)), o.push(u));
  return new it(r, o);
}
function ju(e) {
  return function() {
    return this.matches(e);
  };
}
function Gu(e) {
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
  return this.select(e == null ? nf : tf(typeof e == "function" ? e : Gu(e)));
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
function uf(e) {
  return this.selectAll(e == null ? sf : af(typeof e == "function" ? e : Gu(e)));
}
function lf(e) {
  typeof e != "function" && (e = ju(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], u, l = 0; l < s; ++l)
      (u = i[l]) && e.call(u, u.__data__, l, i) && a.push(u);
  return new it(r, this._parents);
}
function zu(e) {
  return new Array(e.length);
}
function cf() {
  return new it(this._enter || this._groups.map(zu), this._parents);
}
function zr(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
zr.prototype = {
  constructor: zr,
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
  for (var s = 0, a, u = t.length, l = i.length; s < l; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new zr(e, i[s]);
  for (; s < u; ++s)
    (a = t[s]) && (o[s] = a);
}
function pf(e, t, n, r, o, i, s) {
  var a, u, l = /* @__PURE__ */ new Map(), f = t.length, c = i.length, d = new Array(f), p;
  for (a = 0; a < f; ++a)
    (u = t[a]) && (d[a] = p = s.call(u, u.__data__, a, t) + "", l.has(p) ? o[a] = u : l.set(p, u));
  for (a = 0; a < c; ++a)
    p = s.call(e, i[a], a, i) + "", (u = l.get(p)) ? (r[a] = u, u.__data__ = i[a], l.delete(p)) : n[a] = new zr(e, i[a]);
  for (a = 0; a < f; ++a)
    (u = t[a]) && l.get(d[a]) === u && (o[a] = u);
}
function mf(e) {
  return e.__data__;
}
function hf(e, t) {
  if (!arguments.length)
    return Array.from(this, mf);
  var n = t ? pf : ff, r = this._parents, o = this._groups;
  typeof e != "function" && (e = df(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), u = new Array(i), l = 0; l < i; ++l) {
    var f = r[l], c = o[l], d = c.length, p = gf(e.call(f, f && f.__data__, l, r)), g = p.length, h = a[l] = new Array(g), m = s[l] = new Array(g), C = u[l] = new Array(d);
    n(f, c, h, m, C, p, t);
    for (var w = 0, D = 0, y, v; w < g; ++w)
      if (y = h[w]) {
        for (w >= D && (D = w + 1); !(v = m[D]) && ++D < g; )
          ;
        y._next = v || null;
      }
  }
  return s = new it(s, r), s._enter = a, s._exit = u, s;
}
function gf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Df() {
  return new it(this._exit || this._groups.map(zu), this._parents);
}
function Ef(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function yf(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), u = 0; u < s; ++u)
    for (var l = n[u], f = r[u], c = l.length, d = a[u] = new Array(c), p, g = 0; g < c; ++g)
      (p = l[g] || f[g]) && (d[g] = p);
  for (; u < o; ++u)
    a[u] = n[u];
  return new it(a, this._parents);
}
function vf() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function bf(e) {
  e || (e = Cf);
  function t(c, d) {
    return c && d ? e(c.__data__, d.__data__) : !c - !d;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, u = o[i] = new Array(a), l, f = 0; f < a; ++f)
      (l = s[f]) && (u[f] = l);
    u.sort(t);
  }
  return new it(o, this._parents).order();
}
function Cf(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Af() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function wf() {
  return Array.from(this);
}
function _f() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s)
        return s;
    }
  return null;
}
function Sf() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function Ff() {
  return !this.node();
}
function Nf(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function xf(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Of(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Tf(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Bf(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function If(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Pf(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Rf(e, t) {
  var n = so(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Of : xf : typeof t == "function" ? n.local ? Pf : If : n.local ? Bf : Tf)(n, t));
}
function Uu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Mf(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Lf(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function kf(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function $f(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Mf : typeof t == "function" ? kf : Lf)(e, t, n ?? "")) : hn(this.node(), e);
}
function hn(e, t) {
  return e.style.getPropertyValue(t) || Uu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Vf(e) {
  return function() {
    delete this[e];
  };
}
function jf(e, t) {
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
  return arguments.length > 1 ? this.each((t == null ? Vf : typeof t == "function" ? Gf : jf)(e, t)) : this.node()[e];
}
function Wu(e) {
  return e.trim().split(/^|\s+/);
}
function Wi(e) {
  return e.classList || new Hu(e);
}
function Hu(e) {
  this._node = e, this._names = Wu(e.getAttribute("class") || "");
}
Hu.prototype = {
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
function qu(e, t) {
  for (var n = Wi(e), r = -1, o = t.length; ++r < o; )
    n.add(t[r]);
}
function Yu(e, t) {
  for (var n = Wi(e), r = -1, o = t.length; ++r < o; )
    n.remove(t[r]);
}
function Uf(e) {
  return function() {
    qu(this, e);
  };
}
function Wf(e) {
  return function() {
    Yu(this, e);
  };
}
function Hf(e, t) {
  return function() {
    (t.apply(this, arguments) ? qu : Yu)(this, e);
  };
}
function qf(e, t) {
  var n = Wu(e + "");
  if (arguments.length < 2) {
    for (var r = Wi(this.node()), o = -1, i = n.length; ++o < i; )
      if (!r.contains(n[o]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Hf : t ? Uf : Wf)(n, t));
}
function Yf() {
  this.textContent = "";
}
function Xf(e) {
  return function() {
    this.textContent = e;
  };
}
function Kf(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Jf(e) {
  return arguments.length ? this.each(e == null ? Yf : (typeof e == "function" ? Kf : Xf)(e)) : this.node().textContent;
}
function Qf() {
  this.innerHTML = "";
}
function Zf(e) {
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
  return arguments.length ? this.each(e == null ? Qf : (typeof e == "function" ? ep : Zf)(e)) : this.node().innerHTML;
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
  var t = typeof e == "function" ? e : $u(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ap() {
  return null;
}
function up(e, t) {
  var n = typeof e == "function" ? e : $u(e), r = t == null ? ap : typeof t == "function" ? t : Ui(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function lp() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function cp() {
  return this.each(lp);
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
function mp(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function hp(e) {
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
function Dp(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Ep(e, t, n) {
  return function() {
    var r = this.__on, o, i = hp(t);
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
function yp(e, t, n) {
  var r = gp(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, l = a.length, f; u < l; ++u)
        for (o = 0, f = a[u]; o < i; ++o)
          if ((s = r[o]).type === f.type && s.name === f.name)
            return f.value;
    }
    return;
  }
  for (a = t ? Ep : Dp, o = 0; o < i; ++o)
    this.each(a(r[o], t, n));
  return this;
}
function Xu(e, t, n) {
  var r = Uu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function vp(e, t) {
  return function() {
    return Xu(this, e, t);
  };
}
function bp(e, t) {
  return function() {
    return Xu(this, e, t.apply(this, arguments));
  };
}
function Cp(e, t) {
  return this.each((typeof t == "function" ? bp : vp)(e, t));
}
function* Ap() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Ku = [null];
function it(e, t) {
  this._groups = e, this._parents = t;
}
function cr() {
  return new it([[document.documentElement]], Ku);
}
function wp() {
  return this;
}
it.prototype = cr.prototype = {
  constructor: it,
  select: Xd,
  selectAll: Zd,
  selectChild: rf,
  selectChildren: uf,
  filter: lf,
  data: hf,
  enter: cf,
  exit: Df,
  join: Ef,
  merge: yf,
  selection: wp,
  order: vf,
  sort: bf,
  call: Af,
  nodes: wf,
  node: _f,
  size: Sf,
  empty: Ff,
  each: Nf,
  attr: Rf,
  style: $f,
  property: zf,
  classed: qf,
  text: Jf,
  html: tp,
  raise: rp,
  lower: ip,
  append: sp,
  insert: up,
  remove: cp,
  clone: pp,
  datum: mp,
  on: yp,
  dispatch: Cp,
  [Symbol.iterator]: Ap
};
function Ju(e) {
  return typeof e == "string" ? new it([[document.querySelector(e)]], [document.documentElement]) : new it([[e]], Ku);
}
function _p(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function PC(e, t) {
  if (e = _p(e), t === void 0 && (t = e.currentTarget), t) {
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
const ai = { capture: !0, passive: !1 };
function ui(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function RC(e) {
  var t = e.document.documentElement, n = Ju(e).on("dragstart.drag", ui, ai);
  "onselectstart" in t ? n.on("selectstart.drag", ui, ai) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function MC(e, t) {
  var n = e.document.documentElement, r = Ju(e).on("dragstart.drag", null);
  t && (r.on("click.drag", ui, ai), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var gn = 0, Gn = 0, In = 0, Qu = 1e3, Ur, zn, Wr = 0, rn = 0, ao = 0, Zn = typeof performance == "object" && performance.now ? performance : Date, Zu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Hi() {
  return rn || (Zu(Sp), rn = Zn.now() + ao);
}
function Sp() {
  rn = 0;
}
function Hr() {
  this._call = this._time = this._next = null;
}
Hr.prototype = el.prototype = {
  constructor: Hr,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Hi() : +n) + (t == null ? 0 : +t), !this._next && zn !== this && (zn ? zn._next = this : Ur = this, zn = this), this._call = e, this._time = n, li();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, li());
  }
};
function el(e, t, n) {
  var r = new Hr();
  return r.restart(e, t, n), r;
}
function Fp() {
  Hi(), ++gn;
  for (var e = Ur, t; e; )
    (t = rn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --gn;
}
function Xs() {
  rn = (Wr = Zn.now()) + ao, gn = Gn = 0;
  try {
    Fp();
  } finally {
    gn = 0, xp(), rn = 0;
  }
}
function Np() {
  var e = Zn.now(), t = e - Wr;
  t > Qu && (ao -= t, Wr = e);
}
function xp() {
  for (var e, t = Ur, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ur = n);
  zn = e, li(r);
}
function li(e) {
  if (!gn) {
    Gn && (Gn = clearTimeout(Gn));
    var t = e - rn;
    t > 24 ? (e < 1 / 0 && (Gn = setTimeout(Xs, e - Zn.now() - ao)), In && (In = clearInterval(In))) : (In || (Wr = Zn.now(), In = setInterval(Np, Qu)), gn = 1, Zu(Xs));
  }
}
function Ks(e, t, n) {
  var r = new Hr();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Op = ku("start", "end", "cancel", "interrupt"), Tp = [], tl = 0, Js = 1, ci = 2, Mr = 3, Qs = 4, di = 5, Lr = 6;
function uo(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s)
    e.__transition = {};
  else if (n in s)
    return;
  Bp(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Op,
    tween: Tp,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: tl
  });
}
function qi(e, t) {
  var n = ht(e, t);
  if (n.state > tl)
    throw new Error("too late; already scheduled");
  return n;
}
function yt(e, t) {
  var n = ht(e, t);
  if (n.state > Mr)
    throw new Error("too late; already running");
  return n;
}
function ht(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function Bp(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = el(i, 0, n.time);
  function i(l) {
    n.state = Js, n.timer.restart(s, n.delay, n.time), n.delay <= l && s(l - n.delay);
  }
  function s(l) {
    var f, c, d, p;
    if (n.state !== Js)
      return u();
    for (f in r)
      if (p = r[f], p.name === n.name) {
        if (p.state === Mr)
          return Ks(s);
        p.state === Qs ? (p.state = Lr, p.timer.stop(), p.on.call("interrupt", e, e.__data__, p.index, p.group), delete r[f]) : +f < t && (p.state = Lr, p.timer.stop(), p.on.call("cancel", e, e.__data__, p.index, p.group), delete r[f]);
      }
    if (Ks(function() {
      n.state === Mr && (n.state = Qs, n.timer.restart(a, n.delay, n.time), a(l));
    }), n.state = ci, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ci) {
      for (n.state = Mr, o = new Array(d = n.tween.length), f = 0, c = -1; f < d; ++f)
        (p = n.tween[f].value.call(e, e.__data__, n.index, n.group)) && (o[++c] = p);
      o.length = c + 1;
    }
  }
  function a(l) {
    for (var f = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = di, 1), c = -1, d = o.length; ++c < d; )
      o[c].call(e, f);
    n.state === di && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Lr, n.timer.stop(), delete r[t];
    for (var l in r)
      return;
    delete e.__transition;
  }
}
function Ip(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > ci && r.state < di, r.state = Lr, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function Pp(e) {
  return this.each(function() {
    Ip(this, e);
  });
}
function Rp(e, t) {
  var n, r;
  return function() {
    var o = yt(this, e), i = o.tween;
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
function Mp(e, t, n) {
  var r, o;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var i = yt(this, e), s = i.tween;
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
function Lp(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = ht(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Rp : Mp)(n, e, t));
}
function Yi(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = yt(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return ht(o, r).value[t];
  };
}
function nl(e, t) {
  var n;
  return (typeof t == "number" ? Yt : t instanceof $s ? Vs : (n = $s(t)) ? (t = n, Vs) : Hc)(e, t);
}
function kp(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function $p(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Vp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function jp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Gp(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), u;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), u = a + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, a)));
  };
}
function zp(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), u;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), u = a + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, a)));
  };
}
function Up(e, t) {
  var n = so(e), r = n === "transform" ? jd : nl;
  return this.attrTween(e, typeof t == "function" ? (n.local ? zp : Gp)(n, r, Yi(this, "attr." + e, t)) : t == null ? (n.local ? $p : kp)(n) : (n.local ? jp : Vp)(n, r, t));
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
function Xp(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var r = so(e);
  return this.tween(n, (r.local ? qp : Yp)(r, t));
}
function Kp(e, t) {
  return function() {
    qi(this, e).delay = +t.apply(this, arguments);
  };
}
function Jp(e, t) {
  return t = +t, function() {
    qi(this, e).delay = t;
  };
}
function Qp(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Kp : Jp)(t, e)) : ht(this.node(), t).delay;
}
function Zp(e, t) {
  return function() {
    yt(this, e).duration = +t.apply(this, arguments);
  };
}
function em(e, t) {
  return t = +t, function() {
    yt(this, e).duration = t;
  };
}
function tm(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Zp : em)(t, e)) : ht(this.node(), t).duration;
}
function nm(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    yt(this, e).ease = t;
  };
}
function rm(e) {
  var t = this._id;
  return arguments.length ? this.each(nm(t, e)) : ht(this.node(), t).ease;
}
function om(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    yt(this, e).ease = n;
  };
}
function im(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(om(this._id, e));
}
function sm(e) {
  typeof e != "function" && (e = ju(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], u, l = 0; l < s; ++l)
      (u = i[l]) && e.call(u, u.__data__, l, i) && a.push(u);
  return new Tt(r, this._parents, this._name, this._id);
}
function am(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var u = t[a], l = n[a], f = u.length, c = s[a] = new Array(f), d, p = 0; p < f; ++p)
      (d = u[p] || l[p]) && (c[p] = d);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Tt(s, this._parents, this._name, this._id);
}
function um(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function lm(e, t, n) {
  var r, o, i = um(t) ? qi : yt;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function cm(e, t) {
  var n = this._id;
  return arguments.length < 2 ? ht(this.node(), n).on.on(e) : this.each(lm(n, e, t));
}
function dm(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function fm() {
  return this.on("end.remove", dm(this._id));
}
function pm(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ui(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], u = a.length, l = i[s] = new Array(u), f, c, d = 0; d < u; ++d)
      (f = a[d]) && (c = e.call(f, f.__data__, d, a)) && ("__data__" in f && (c.__data__ = f.__data__), l[d] = c, uo(l[d], t, n, d, l, ht(f, n)));
  return new Tt(i, this._parents, t, n);
}
function mm(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Vu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var u = r[a], l = u.length, f, c = 0; c < l; ++c)
      if (f = u[c]) {
        for (var d = e.call(f, f.__data__, c, u), p, g = ht(f, n), h = 0, m = d.length; h < m; ++h)
          (p = d[h]) && uo(p, t, n, h, d, g);
        i.push(d), s.push(f);
      }
  return new Tt(i, s, t, n);
}
var hm = cr.prototype.constructor;
function gm() {
  return new hm(this._groups, this._parents);
}
function Dm(e, t) {
  var n, r, o;
  return function() {
    var i = hn(this, e), s = (this.style.removeProperty(e), hn(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function rl(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Em(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = hn(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function ym(e, t, n) {
  var r, o, i;
  return function() {
    var s = hn(this, e), a = n(this), u = a + "";
    return a == null && (u = a = (this.style.removeProperty(e), hn(this, e))), s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, a));
  };
}
function vm(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var u = yt(this, e), l = u.on, f = u.value[i] == null ? a || (a = rl(t)) : void 0;
    (l !== n || o !== f) && (r = (n = l).copy()).on(s, o = f), u.on = r;
  };
}
function bm(e, t, n) {
  var r = (e += "") == "transform" ? Vd : nl;
  return t == null ? this.styleTween(e, Dm(e, r)).on("end.style." + e, rl(e)) : typeof t == "function" ? this.styleTween(e, ym(e, r, Yi(this, "style." + e, t))).each(vm(this._id, e)) : this.styleTween(e, Em(e, r, t), n).on("end.style." + e, null);
}
function Cm(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function Am(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Cm(e, s, n)), r;
  }
  return i._value = t, i;
}
function wm(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (t == null)
    return this.tween(r, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(r, Am(e, t, n ?? ""));
}
function _m(e) {
  return function() {
    this.textContent = e;
  };
}
function Sm(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Fm(e) {
  return this.tween("text", typeof e == "function" ? Sm(Yi(this, "text", e)) : _m(e == null ? "" : e + ""));
}
function Nm(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function xm(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Nm(o)), t;
  }
  return r._value = e, r;
}
function Om(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, xm(e));
}
function Tm() {
  for (var e = this._name, t = this._id, n = ol(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, u, l = 0; l < a; ++l)
      if (u = s[l]) {
        var f = ht(u, t);
        uo(u, e, n, l, s, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new Tt(r, this._parents, e, n);
}
function Bm() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, u = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var l = yt(this, r), f = l.on;
      f !== e && (t = (e = f).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(u)), l.on = t;
    }), o === 0 && i();
  });
}
var Im = 0;
function Tt(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ol() {
  return ++Im;
}
var _t = cr.prototype;
Tt.prototype = {
  constructor: Tt,
  select: pm,
  selectAll: mm,
  selectChild: _t.selectChild,
  selectChildren: _t.selectChildren,
  filter: sm,
  merge: am,
  selection: gm,
  transition: Tm,
  call: _t.call,
  nodes: _t.nodes,
  node: _t.node,
  size: _t.size,
  empty: _t.empty,
  each: _t.each,
  on: cm,
  attr: Up,
  attrTween: Xp,
  style: bm,
  styleTween: wm,
  text: Fm,
  textTween: Om,
  remove: fm,
  tween: Lp,
  delay: Qp,
  duration: tm,
  ease: rm,
  easeVarying: im,
  end: Bm,
  [Symbol.iterator]: _t[Symbol.iterator]
};
function Pm(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Rm = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Pm
};
function Mm(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Lm(e) {
  var t, n;
  e instanceof Tt ? (t = e._id, e = e._name) : (t = ol(), (n = Rm).time = Hi(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, u, l = 0; l < a; ++l)
      (u = s[l]) && uo(u, e, t, l, s, n || Mm(u, t));
  return new Tt(r, this._parents, e, t);
}
cr.prototype.interrupt = Pp;
cr.prototype.transition = Lm;
function fn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
fn.prototype = {
  constructor: fn,
  scale: function(e) {
    return e === 1 ? this : new fn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new fn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var LC = new fn(1, 0, 0);
fn.prototype;
const km = (e, t) => {
  const r = document.createElement("canvas").getContext("2d");
  if (!r) {
    console.error("2D context not found");
    return;
  }
  return r.font = t || getComputedStyle(document.body).font, Math.ceil(r.measureText(e).width);
}, kC = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep",
  "Curve Basis": "curveBasis"
}, $C = 18;
function dr(e) {
  var t = e.top, n = t === void 0 ? 0 : t, r = e.left, o = r === void 0 ? 0 : r, i = e.className, s = e.children;
  return /* @__PURE__ */ E.createElement(Gr, {
    className: jt("visx-glyph", i),
    top: n,
    left: o
  }, s);
}
dr.propTypes = {
  top: k.number,
  left: k.number,
  className: k.string,
  children: k.node
};
var $m = ["children", "className", "top", "left", "size"];
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
function Vm(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function jm(e) {
  var t = e.children, n = e.className, r = e.top, o = e.left, i = e.size, s = Vm(e, $m), a = io();
  return a.type(fd), (typeof i == "number" || i) && a.size(i), t ? /* @__PURE__ */ E.createElement(E.Fragment, null, t({
    path: a
  })) : /* @__PURE__ */ E.createElement(dr, {
    top: r,
    left: o
  }, /* @__PURE__ */ E.createElement("path", fi({
    className: jt("visx-glyph-diamond", n),
    d: a() || ""
  }, s)));
}
jm.propTypes = {
  children: k.func,
  className: k.string,
  top: k.number,
  left: k.number,
  size: k.oneOfType([k.number, k.func])
};
var Gm = ["children", "className", "top", "left", "size"];
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
function zm(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Um(e) {
  var t = e.children, n = e.className, r = e.top, o = e.left, i = e.size, s = zm(e, Gm), a = io();
  return a.type(md), (typeof i == "number" || i) && a.size(i), t ? /* @__PURE__ */ E.createElement(E.Fragment, null, t({
    path: a
  })) : /* @__PURE__ */ E.createElement(dr, {
    top: r,
    left: o
  }, /* @__PURE__ */ E.createElement("path", pi({
    className: jt("visx-glyph-triangle", n),
    d: a() || ""
  }, s)));
}
Um.propTypes = {
  children: k.func,
  className: k.string,
  top: k.number,
  left: k.number,
  size: k.oneOfType([k.number, k.func])
};
var Wm = ["children", "className", "top", "left", "size"];
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
function Hm(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function qm(e) {
  var t = e.children, n = e.className, r = e.top, o = e.left, i = e.size, s = Hm(e, Wm), a = io();
  return a.type(pd), (typeof i == "number" || i) && a.size(i), t ? /* @__PURE__ */ E.createElement(E.Fragment, null, t({
    path: a
  })) : /* @__PURE__ */ E.createElement(dr, {
    top: r,
    left: o
  }, /* @__PURE__ */ E.createElement("path", mi({
    className: jt("visx-glyph-square", n),
    d: a() || ""
  }, s)));
}
qm.propTypes = {
  children: k.func,
  className: k.string,
  top: k.number,
  left: k.number,
  size: k.oneOfType([k.number, k.func])
};
var Ym = ["children", "className", "top", "left", "size"];
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
function Xm(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Km(e) {
  var t = e.children, n = e.className, r = e.top, o = e.left, i = e.size, s = Xm(e, Ym), a = io();
  return a.type(Bu), (typeof i == "number" || i) && a.size(i), t ? /* @__PURE__ */ E.createElement(E.Fragment, null, t({
    path: a
  })) : /* @__PURE__ */ E.createElement(dr, {
    top: r,
    left: o
  }, /* @__PURE__ */ E.createElement("path", hi({
    className: jt("visx-glyph-circle", n),
    d: a() || ""
  }, s)));
}
Km.propTypes = {
  children: k.func,
  className: k.string,
  top: k.number,
  left: k.number,
  size: k.oneOfType([k.number, k.func])
};
/*! @license DOMPurify 3.1.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.5/LICENSE */
const {
  entries: il,
  setPrototypeOf: Zs,
  isFrozen: Jm,
  getPrototypeOf: Qm,
  getOwnPropertyDescriptor: Zm
} = Object;
let {
  freeze: Qe,
  seal: dt,
  create: sl
} = Object, {
  apply: gi,
  construct: Di
} = typeof Reflect < "u" && Reflect;
Qe || (Qe = function(t) {
  return t;
});
dt || (dt = function(t) {
  return t;
});
gi || (gi = function(t, n, r) {
  return t.apply(n, r);
});
Di || (Di = function(t, n) {
  return new t(...n);
});
const wr = st(Array.prototype.forEach), ea = st(Array.prototype.pop), Pn = st(Array.prototype.push), kr = st(String.prototype.toLowerCase), Ao = st(String.prototype.toString), ta = st(String.prototype.match), Rn = st(String.prototype.replace), eh = st(String.prototype.indexOf), th = st(String.prototype.trim), ft = st(Object.prototype.hasOwnProperty), qe = st(RegExp.prototype.test), Mn = nh(TypeError);
function st(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return gi(e, t, r);
  };
}
function nh(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Di(e, n);
  };
}
function re(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : kr;
  Zs && Zs(e, null);
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const i = n(o);
      i !== o && (Jm(t) || (t[r] = i), o = i);
    }
    e[o] = !0;
  }
  return e;
}
function rh(e) {
  for (let t = 0; t < e.length; t++)
    ft(e, t) || (e[t] = null);
  return e;
}
function Kt(e) {
  const t = sl(null);
  for (const [n, r] of il(e))
    ft(e, n) && (Array.isArray(r) ? t[n] = rh(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = Kt(r) : t[n] = r);
  return t;
}
function _r(e, t) {
  for (; e !== null; ) {
    const r = Zm(e, t);
    if (r) {
      if (r.get)
        return st(r.get);
      if (typeof r.value == "function")
        return st(r.value);
    }
    e = Qm(e);
  }
  function n() {
    return null;
  }
  return n;
}
const na = Qe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), wo = Qe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), _o = Qe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), oh = Qe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), So = Qe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ih = Qe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ra = Qe(["#text"]), oa = Qe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Fo = Qe(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ia = Qe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Sr = Qe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), sh = dt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ah = dt(/<%[\w\W]*|[\w\W]*%>/gm), uh = dt(/\${[\w\W]*}/gm), lh = dt(/^data-[\-\w.\u00B7-\uFFFF]/), ch = dt(/^aria-[\-\w]+$/), al = dt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), dh = dt(/^(?:\w+script|data):/i), fh = dt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ul = dt(/^html$/i), ph = dt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var sa = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: sh,
  ERB_EXPR: ah,
  TMPLIT_EXPR: uh,
  DATA_ATTR: lh,
  ARIA_ATTR: ch,
  IS_ALLOWED_URI: al,
  IS_SCRIPT_OR_DATA: dh,
  ATTR_WHITESPACE: fh,
  DOCTYPE_NAME: ul,
  CUSTOM_ELEMENT: ph
});
const Ln = {
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
}, mh = function() {
  return typeof window > "u" ? null : window;
}, hh = function(t, n) {
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
function ll() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mh();
  const t = (W) => ll(W);
  if (t.version = "3.1.5", t.removed = [], !e || !e.document || e.document.nodeType !== Ln.document)
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
    NamedNodeMap: f = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: c,
    DOMParser: d,
    trustedTypes: p
  } = e, g = u.prototype, h = _r(g, "cloneNode"), m = _r(g, "nextSibling"), C = _r(g, "childNodes"), w = _r(g, "parentNode");
  if (typeof s == "function") {
    const W = n.createElement("template");
    W.content && W.content.ownerDocument && (n = W.content.ownerDocument);
  }
  let D, y = "";
  const {
    implementation: v,
    createNodeIterator: S,
    createDocumentFragment: N,
    getElementsByTagName: P
  } = n, {
    importNode: M
  } = r;
  let O = {};
  t.isSupported = typeof il == "function" && typeof w == "function" && v && v.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: L,
    ERB_EXPR: R,
    TMPLIT_EXPR: T,
    DATA_ATTR: j,
    ARIA_ATTR: H,
    IS_SCRIPT_OR_DATA: J,
    ATTR_WHITESPACE: Q,
    CUSTOM_ELEMENT: X
  } = sa;
  let {
    IS_ALLOWED_URI: se
  } = sa, Y = null;
  const ce = re({}, [...na, ...wo, ..._o, ...So, ...ra]);
  let Z = null;
  const ge = re({}, [...oa, ...Fo, ...ia, ...Sr]);
  let V = Object.seal(sl(null, {
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
  })), te = null, be = null, je = !0, le = !0, de = !1, Ae = !0, we = !1, I = !0, ae = !1, $ = !1, Le = !1, Fe = !1, Oe = !1, _e = !1, We = !0, Ge = !1;
  const at = "user-content-";
  let Ze = !0, z = !1, ue = {}, Ce = null;
  const ze = re({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let vt = null;
  const Gt = re({}, ["audio", "video", "img", "source", "image", "track"]);
  let an = null;
  const un = re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ln = "http://www.w3.org/1998/Math/MathML", bt = "http://www.w3.org/2000/svg", Ne = "http://www.w3.org/1999/xhtml";
  let It = Ne, cn = !1, wn = null;
  const yr = re({}, [ln, bt, Ne], Ao);
  let zt = null;
  const Do = ["application/xhtml+xml", "text/html"], Eo = "text/html";
  let xe = null, Ct = null;
  const yo = n.createElement("form"), _n = function(A) {
    return A instanceof RegExp || A instanceof Function;
  }, Pt = function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ct && Ct === A)) {
      if ((!A || typeof A != "object") && (A = {}), A = Kt(A), zt = // eslint-disable-next-line unicorn/prefer-includes
      Do.indexOf(A.PARSER_MEDIA_TYPE) === -1 ? Eo : A.PARSER_MEDIA_TYPE, xe = zt === "application/xhtml+xml" ? Ao : kr, Y = ft(A, "ALLOWED_TAGS") ? re({}, A.ALLOWED_TAGS, xe) : ce, Z = ft(A, "ALLOWED_ATTR") ? re({}, A.ALLOWED_ATTR, xe) : ge, wn = ft(A, "ALLOWED_NAMESPACES") ? re({}, A.ALLOWED_NAMESPACES, Ao) : yr, an = ft(A, "ADD_URI_SAFE_ATTR") ? re(
        Kt(un),
        // eslint-disable-line indent
        A.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        xe
        // eslint-disable-line indent
      ) : un, vt = ft(A, "ADD_DATA_URI_TAGS") ? re(
        Kt(Gt),
        // eslint-disable-line indent
        A.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        xe
        // eslint-disable-line indent
      ) : Gt, Ce = ft(A, "FORBID_CONTENTS") ? re({}, A.FORBID_CONTENTS, xe) : ze, te = ft(A, "FORBID_TAGS") ? re({}, A.FORBID_TAGS, xe) : {}, be = ft(A, "FORBID_ATTR") ? re({}, A.FORBID_ATTR, xe) : {}, ue = ft(A, "USE_PROFILES") ? A.USE_PROFILES : !1, je = A.ALLOW_ARIA_ATTR !== !1, le = A.ALLOW_DATA_ATTR !== !1, de = A.ALLOW_UNKNOWN_PROTOCOLS || !1, Ae = A.ALLOW_SELF_CLOSE_IN_ATTR !== !1, we = A.SAFE_FOR_TEMPLATES || !1, I = A.SAFE_FOR_XML !== !1, ae = A.WHOLE_DOCUMENT || !1, Fe = A.RETURN_DOM || !1, Oe = A.RETURN_DOM_FRAGMENT || !1, _e = A.RETURN_TRUSTED_TYPE || !1, Le = A.FORCE_BODY || !1, We = A.SANITIZE_DOM !== !1, Ge = A.SANITIZE_NAMED_PROPS || !1, Ze = A.KEEP_CONTENT !== !1, z = A.IN_PLACE || !1, se = A.ALLOWED_URI_REGEXP || al, It = A.NAMESPACE || Ne, V = A.CUSTOM_ELEMENT_HANDLING || {}, A.CUSTOM_ELEMENT_HANDLING && _n(A.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (V.tagNameCheck = A.CUSTOM_ELEMENT_HANDLING.tagNameCheck), A.CUSTOM_ELEMENT_HANDLING && _n(A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (V.attributeNameCheck = A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), A.CUSTOM_ELEMENT_HANDLING && typeof A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (V.allowCustomizedBuiltInElements = A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), we && (le = !1), Oe && (Fe = !0), ue && (Y = re({}, ra), Z = [], ue.html === !0 && (re(Y, na), re(Z, oa)), ue.svg === !0 && (re(Y, wo), re(Z, Fo), re(Z, Sr)), ue.svgFilters === !0 && (re(Y, _o), re(Z, Fo), re(Z, Sr)), ue.mathMl === !0 && (re(Y, So), re(Z, ia), re(Z, Sr))), A.ADD_TAGS && (Y === ce && (Y = Kt(Y)), re(Y, A.ADD_TAGS, xe)), A.ADD_ATTR && (Z === ge && (Z = Kt(Z)), re(Z, A.ADD_ATTR, xe)), A.ADD_URI_SAFE_ATTR && re(an, A.ADD_URI_SAFE_ATTR, xe), A.FORBID_CONTENTS && (Ce === ze && (Ce = Kt(Ce)), re(Ce, A.FORBID_CONTENTS, xe)), Ze && (Y["#text"] = !0), ae && re(Y, ["html", "head", "body"]), Y.table && (re(Y, ["tbody"]), delete te.tbody), A.TRUSTED_TYPES_POLICY) {
        if (typeof A.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Mn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof A.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Mn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        D = A.TRUSTED_TYPES_POLICY, y = D.createHTML("");
      } else
        D === void 0 && (D = hh(p, o)), D !== null && typeof y == "string" && (y = D.createHTML(""));
      Qe && Qe(A), Ct = A;
    }
  }, Sn = re({}, ["mi", "mo", "mn", "ms", "mtext"]), vr = re({}, ["foreignobject", "annotation-xml"]), br = re({}, ["title", "style", "font", "a", "script"]), Fn = re({}, [...wo, ..._o, ...oh]), Nn = re({}, [...So, ...ih]), q = function(A) {
    let B = w(A);
    (!B || !B.tagName) && (B = {
      namespaceURI: It,
      tagName: "template"
    });
    const G = kr(A.tagName), De = kr(B.tagName);
    return wn[A.namespaceURI] ? A.namespaceURI === bt ? B.namespaceURI === Ne ? G === "svg" : B.namespaceURI === ln ? G === "svg" && (De === "annotation-xml" || Sn[De]) : !!Fn[G] : A.namespaceURI === ln ? B.namespaceURI === Ne ? G === "math" : B.namespaceURI === bt ? G === "math" && vr[De] : !!Nn[G] : A.namespaceURI === Ne ? B.namespaceURI === bt && !vr[De] || B.namespaceURI === ln && !Sn[De] ? !1 : !Nn[G] && (br[G] || !Fn[G]) : !!(zt === "application/xhtml+xml" && wn[A.namespaceURI]) : !1;
  }, ne = function(A) {
    Pn(t.removed, {
      element: A
    });
    try {
      A.parentNode.removeChild(A);
    } catch {
      A.remove();
    }
  }, Ie = function(A, B) {
    try {
      Pn(t.removed, {
        attribute: B.getAttributeNode(A),
        from: B
      });
    } catch {
      Pn(t.removed, {
        attribute: null,
        from: B
      });
    }
    if (B.removeAttribute(A), A === "is" && !Z[A])
      if (Fe || Oe)
        try {
          ne(B);
        } catch {
        }
      else
        try {
          B.setAttribute(A, "");
        } catch {
        }
  }, Rt = function(A) {
    let B = null, G = null;
    if (Le)
      A = "<remove></remove>" + A;
    else {
      const ke = ta(A, /^[\r\n\t ]+/);
      G = ke && ke[0];
    }
    zt === "application/xhtml+xml" && It === Ne && (A = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + A + "</body></html>");
    const De = D ? D.createHTML(A) : A;
    if (It === Ne)
      try {
        B = new d().parseFromString(De, zt);
      } catch {
      }
    if (!B || !B.documentElement) {
      B = v.createDocument(It, "template", null);
      try {
        B.documentElement.innerHTML = cn ? y : De;
      } catch {
      }
    }
    const Ue = B.body || B.documentElement;
    return A && G && Ue.insertBefore(n.createTextNode(G), Ue.childNodes[0] || null), It === Ne ? P.call(B, ae ? "html" : "body")[0] : ae ? B.documentElement : Ue;
  }, xn = function(A) {
    return S.call(
      A.ownerDocument || A,
      A,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, On = function(A) {
    return A instanceof c && (typeof A.nodeName != "string" || typeof A.textContent != "string" || typeof A.removeChild != "function" || !(A.attributes instanceof f) || typeof A.removeAttribute != "function" || typeof A.setAttribute != "function" || typeof A.namespaceURI != "string" || typeof A.insertBefore != "function" || typeof A.hasChildNodes != "function");
  }, Bs = function(A) {
    return typeof a == "function" && A instanceof a;
  }, At = function(A, B, G) {
    O[A] && wr(O[A], (De) => {
      De.call(t, B, G, Ct);
    });
  }, Is = function(A) {
    let B = null;
    if (At("beforeSanitizeElements", A, null), On(A))
      return ne(A), !0;
    const G = xe(A.nodeName);
    if (At("uponSanitizeElement", A, {
      tagName: G,
      allowedTags: Y
    }), A.hasChildNodes() && !Bs(A.firstElementChild) && qe(/<[/\w]/g, A.innerHTML) && qe(/<[/\w]/g, A.textContent) || A.nodeType === Ln.progressingInstruction || I && A.nodeType === Ln.comment && qe(/<[/\w]/g, A.data))
      return ne(A), !0;
    if (!Y[G] || te[G]) {
      if (!te[G] && Rs(G) && (V.tagNameCheck instanceof RegExp && qe(V.tagNameCheck, G) || V.tagNameCheck instanceof Function && V.tagNameCheck(G)))
        return !1;
      if (Ze && !Ce[G]) {
        const De = w(A) || A.parentNode, Ue = C(A) || A.childNodes;
        if (Ue && De) {
          const ke = Ue.length;
          for (let et = ke - 1; et >= 0; --et) {
            const gt = h(Ue[et], !0);
            gt.__removalCount = (A.__removalCount || 0) + 1, De.insertBefore(gt, m(A));
          }
        }
      }
      return ne(A), !0;
    }
    return A instanceof u && !q(A) || (G === "noscript" || G === "noembed" || G === "noframes") && qe(/<\/no(script|embed|frames)/i, A.innerHTML) ? (ne(A), !0) : (we && A.nodeType === Ln.text && (B = A.textContent, wr([L, R, T], (De) => {
      B = Rn(B, De, " ");
    }), A.textContent !== B && (Pn(t.removed, {
      element: A.cloneNode()
    }), A.textContent = B)), At("afterSanitizeElements", A, null), !1);
  }, Ps = function(A, B, G) {
    if (We && (B === "id" || B === "name") && (G in n || G in yo))
      return !1;
    if (!(le && !be[B] && qe(j, B))) {
      if (!(je && qe(H, B))) {
        if (!Z[B] || be[B]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Rs(A) && (V.tagNameCheck instanceof RegExp && qe(V.tagNameCheck, A) || V.tagNameCheck instanceof Function && V.tagNameCheck(A)) && (V.attributeNameCheck instanceof RegExp && qe(V.attributeNameCheck, B) || V.attributeNameCheck instanceof Function && V.attributeNameCheck(B)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            B === "is" && V.allowCustomizedBuiltInElements && (V.tagNameCheck instanceof RegExp && qe(V.tagNameCheck, G) || V.tagNameCheck instanceof Function && V.tagNameCheck(G)))
          )
            return !1;
        } else if (!an[B]) {
          if (!qe(se, Rn(G, Q, ""))) {
            if (!((B === "src" || B === "xlink:href" || B === "href") && A !== "script" && eh(G, "data:") === 0 && vt[A])) {
              if (!(de && !qe(J, Rn(G, Q, "")))) {
                if (G)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Rs = function(A) {
    return A !== "annotation-xml" && ta(A, X);
  }, Ms = function(A) {
    At("beforeSanitizeAttributes", A, null);
    const {
      attributes: B
    } = A;
    if (!B)
      return;
    const G = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Z
    };
    let De = B.length;
    for (; De--; ) {
      const Ue = B[De], {
        name: ke,
        namespaceURI: et,
        value: gt
      } = Ue, Tn = xe(ke);
      let He = ke === "value" ? gt : th(gt);
      if (G.attrName = Tn, G.attrValue = He, G.keepAttr = !0, G.forceKeepAttr = void 0, At("uponSanitizeAttribute", A, G), He = G.attrValue, G.forceKeepAttr || (Ie(ke, A), !G.keepAttr))
        continue;
      if (!Ae && qe(/\/>/i, He)) {
        Ie(ke, A);
        continue;
      }
      if (I && qe(/((--!?|])>)|<\/(style|title)/i, He)) {
        Ie(ke, A);
        continue;
      }
      we && wr([L, R, T], (ks) => {
        He = Rn(He, ks, " ");
      });
      const Ls = xe(A.nodeName);
      if (Ps(Ls, Tn, He)) {
        if (Ge && (Tn === "id" || Tn === "name") && (Ie(ke, A), He = at + He), D && typeof p == "object" && typeof p.getAttributeType == "function" && !et)
          switch (p.getAttributeType(Ls, Tn)) {
            case "TrustedHTML": {
              He = D.createHTML(He);
              break;
            }
            case "TrustedScriptURL": {
              He = D.createScriptURL(He);
              break;
            }
          }
        try {
          et ? A.setAttributeNS(et, ke, He) : A.setAttribute(ke, He), On(A) ? ne(A) : ea(t.removed);
        } catch {
        }
      }
    }
    At("afterSanitizeAttributes", A, null);
  }, Wc = function W(A) {
    let B = null;
    const G = xn(A);
    for (At("beforeSanitizeShadowDOM", A, null); B = G.nextNode(); )
      At("uponSanitizeShadowNode", B, null), !Is(B) && (B.content instanceof i && W(B.content), Ms(B));
    At("afterSanitizeShadowDOM", A, null);
  };
  return t.sanitize = function(W) {
    let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, B = null, G = null, De = null, Ue = null;
    if (cn = !W, cn && (W = "<!-->"), typeof W != "string" && !Bs(W))
      if (typeof W.toString == "function") {
        if (W = W.toString(), typeof W != "string")
          throw Mn("dirty is not a string, aborting");
      } else
        throw Mn("toString is not a function");
    if (!t.isSupported)
      return W;
    if ($ || Pt(A), t.removed = [], typeof W == "string" && (z = !1), z) {
      if (W.nodeName) {
        const gt = xe(W.nodeName);
        if (!Y[gt] || te[gt])
          throw Mn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (W instanceof a)
      B = Rt("<!---->"), G = B.ownerDocument.importNode(W, !0), G.nodeType === Ln.element && G.nodeName === "BODY" || G.nodeName === "HTML" ? B = G : B.appendChild(G);
    else {
      if (!Fe && !we && !ae && // eslint-disable-next-line unicorn/prefer-includes
      W.indexOf("<") === -1)
        return D && _e ? D.createHTML(W) : W;
      if (B = Rt(W), !B)
        return Fe ? null : _e ? y : "";
    }
    B && Le && ne(B.firstChild);
    const ke = xn(z ? W : B);
    for (; De = ke.nextNode(); )
      Is(De) || (De.content instanceof i && Wc(De.content), Ms(De));
    if (z)
      return W;
    if (Fe) {
      if (Oe)
        for (Ue = N.call(B.ownerDocument); B.firstChild; )
          Ue.appendChild(B.firstChild);
      else
        Ue = B;
      return (Z.shadowroot || Z.shadowrootmode) && (Ue = M.call(r, Ue, !0)), Ue;
    }
    let et = ae ? B.outerHTML : B.innerHTML;
    return ae && Y["!doctype"] && B.ownerDocument && B.ownerDocument.doctype && B.ownerDocument.doctype.name && qe(ul, B.ownerDocument.doctype.name) && (et = "<!DOCTYPE " + B.ownerDocument.doctype.name + `>
` + et), we && wr([L, R, T], (gt) => {
      et = Rn(et, gt, " ");
    }), D && _e ? D.createHTML(et) : et;
  }, t.setConfig = function() {
    let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pt(W), $ = !0;
  }, t.clearConfig = function() {
    Ct = null, $ = !1;
  }, t.isValidAttribute = function(W, A, B) {
    Ct || Pt({});
    const G = xe(W), De = xe(A);
    return Ps(G, De, B);
  }, t.addHook = function(W, A) {
    typeof A == "function" && (O[W] = O[W] || [], Pn(O[W], A));
  }, t.removeHook = function(W) {
    if (O[W])
      return ea(O[W]);
  }, t.removeHooks = function(W) {
    O[W] && (O[W] = []);
  }, t.removeAllHooks = function() {
    O = {};
  }, t;
}
var VC = ll(), gh = /* @__PURE__ */ _.createContext({});
const lo = gh;
function Ei() {
  return Ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ei.apply(this, arguments);
}
function Dh(e) {
  var t, n, r, o, i = e.className, s = e.x, a = e.y, u = e.dx, l = e.dy, f = e.type, c = f === void 0 ? "elbow" : f, d = e.stroke, p = d === void 0 ? "#222" : d, g = e.pathProps, h = _.useContext(lo), m = s ?? ((t = h.x) != null ? t : 0), C = a ?? ((n = h.y) != null ? n : 0), w = u ?? ((r = h.dx) != null ? r : 0), D = l ?? ((o = h.dy) != null ? o : 0), y = m, v = C, S = m + w, N = C + D;
  if (c === "elbow")
    if (Math.abs(w) <= Math.abs(D)) {
      y = S;
      var P = D > 0 ? 1 : -1;
      v = C + P * Math.abs(y - m);
    } else {
      v = N;
      var M = w > 0 ? 1 : -1;
      y = m + M * Math.abs(v - C);
    }
  return /* @__PURE__ */ E.createElement("path", Ei({
    className: jt("visx-annotation-connector", i),
    strokeWidth: 1,
    stroke: p,
    fill: "transparent",
    pointerEvents: "none",
    d: "M" + m + "," + C + (c === "elbow" ? "L" + y + "," + v : "") + "L" + S + "," + N
  }, g));
}
Dh.propTypes = {
  className: k.string,
  type: k.oneOf(["line", "elbow"]),
  stroke: k.string
};
function pn() {
  return pn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pn.apply(this, arguments);
}
function cl(e) {
  var t = e.anchorLineOrientation, n = e.anchorLineStroke, r = e.verticalAnchor, o = e.horizontalAnchor, i = e.width, s = e.height, a = {
    stroke: n,
    strokeWidth: 2
  };
  return /* @__PURE__ */ E.createElement(E.Fragment, null, t === "horizontal" && r === "start" && /* @__PURE__ */ E.createElement("line", pn({}, a, {
    x1: 0,
    x2: i,
    y1: 0,
    y2: 0
  })), t === "horizontal" && r === "end" && /* @__PURE__ */ E.createElement("line", pn({}, a, {
    x1: 0,
    x2: i,
    y1: s,
    y2: s
  })), t === "vertical" && o === "start" && /* @__PURE__ */ E.createElement("line", pn({}, a, {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: s
  })), t === "vertical" && o === "end" && /* @__PURE__ */ E.createElement("line", pn({}, a, {
    x1: i,
    x2: i,
    y1: 0,
    y2: s
  })));
}
cl.propTypes = {
  anchorLineOrientation: k.oneOf(["horizontal", "vertical"]).isRequired,
  anchorLineStroke: k.string.isRequired,
  width: k.number.isRequired,
  height: k.number.isRequired
};
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, yi.apply(this, arguments);
}
var aa = {
  display: "inline-block"
};
function Eh(e) {
  var t = e.anchorLineStroke, n = t === void 0 ? "#222" : t, r = e.children, o = e.className, i = e.containerStyle, s = e.horizontalAnchor, a = e.resizeObserverPolyfill, u = e.showAnchorLine, l = u === void 0 ? !0 : u, f = e.verticalAnchor, c = e.x, d = e.y, p = gd({
    polyfill: a
  }), g = p[0], h = p[1], m = h.width, C = h.height, w = _.useContext(lo), D = w.x, y = D === void 0 ? 0 : D, v = w.y, S = v === void 0 ? 0 : v, N = w.dx, P = N === void 0 ? 0 : N, M = w.dy, O = M === void 0 ? 0 : M, L = s || (Math.abs(P) < Math.abs(O) ? "middle" : P > 0 ? "start" : "end"), R = f || (Math.abs(P) > Math.abs(O) ? "middle" : O > 0 ? "start" : "end"), T = _.useMemo(function() {
    var j = c ?? y + P, H = d ?? S + O;
    return L === "middle" && (j -= m / 2), L === "end" && (j -= m), R === "middle" && (H -= C / 2), R === "end" && (H -= C), {
      x: j,
      y: H
    };
  }, [c, y, P, d, S, O, L, R, m, C]);
  return /* @__PURE__ */ E.createElement(Gr, {
    top: T.y,
    left: T.x,
    pointerEvents: "none",
    className: jt("visx-annotationlabel", o)
  }, /* @__PURE__ */ E.createElement("foreignObject", {
    width: m,
    height: C,
    overflow: "visible"
  }, /* @__PURE__ */ E.createElement("div", {
    ref: g,
    style: i ? yi({}, aa, i) : aa
  }, r)), l && /* @__PURE__ */ E.createElement(cl, {
    anchorLineOrientation: Math.abs(P) > Math.abs(O) ? "vertical" : "horizontal",
    anchorLineStroke: n,
    verticalAnchor: R,
    horizontalAnchor: L,
    width: m,
    height: C
  }));
}
Eh.propTypes = {
  children: k.node
};
var yh = ["className", "x", "y", "stroke", "radius"];
function vi() {
  return vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vi.apply(this, arguments);
}
function vh(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function bh(e) {
  var t = e.className, n = e.x, r = e.y, o = e.stroke, i = o === void 0 ? "#222" : o, s = e.radius, a = s === void 0 ? 16 : s, u = vh(e, yh), l = _.useContext(lo);
  return /* @__PURE__ */ E.createElement("circle", vi({
    className: jt("visx-annotation-subject", "visx-annotation-subject-circle", t),
    cx: n || l.x,
    cy: r || l.y,
    r: a,
    fill: "transparent",
    pointerEvents: "none",
    stroke: i
  }, u));
}
bh.propTypes = {
  className: k.string,
  stroke: k.string,
  radius: k.number
};
function dl(e) {
  var t = e.x, n = e.y, r = e.dx, o = e.dy, i = e.children, s = _.useMemo(function() {
    return {
      x: t,
      y: n,
      dx: r,
      dy: o
    };
  }, [t, n, r, o]);
  return /* @__PURE__ */ E.createElement(lo.Provider, {
    value: s
  }, i);
}
dl.propTypes = {
  children: k.node.isRequired
};
const Ch = /* @__PURE__ */ Su(Fd), Ah = /* @__PURE__ */ Su(Ld);
var Xi = {};
Xi.__esModule = !0;
Xi.default = wh;
var Fr = _;
function wh(e) {
  var t = (0, Fr.useState)(e), n = t[0], r = t[1], o = (0, Fr.useRef)(null), i = (0, Fr.useCallback)(function(s, a) {
    o.current = a || null, r(s);
  }, [r]);
  return (0, Fr.useLayoutEffect)(function() {
    o.current && (o.current(n), o.current = null);
  }, [n]), [n, i];
}
var Ki = {}, Ji = {};
Ji.__esModule = !0;
Ji.default = _h;
function _h(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var Qi = {};
Qi.__esModule = !0;
Qi.default = Nh;
function Sh(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Fh(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fh(e, t) {
  if (e) {
    if (typeof e == "string")
      return ua(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ua(e, t);
  }
}
function ua(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Nh(e, t) {
  for (var n = e, r = 1 / 0, o = Sh(t), i; !(i = o()).done; ) {
    var s = i.value, a = Math.sqrt(Math.pow(s.x - e.x, 2) + Math.pow(s.y - e.y, 2));
    a < r && (r = a, n = {
      x: s.x,
      y: s.y
    });
  }
  return n;
}
Ki.__esModule = !0;
Ki.default = Oh;
var la = fl(Ji), xh = fl(Qi);
function fl(e) {
  return e && e.__esModule ? e : { default: e };
}
function Oh(e, t, n) {
  var r, o, i, s;
  return n === void 0 && (n = {}), t.length > 0 ? (0, xh.default)(e, t) : {
    x: (0, la.default)(e.x, (r = n.xMin) != null ? r : -1 / 0, (o = n.xMax) != null ? o : 1 / 0),
    y: (0, la.default)(e.y, (i = n.yMin) != null ? i : -1 / 0, (s = n.yMax) != null ? s : 1 / 0)
  };
}
var Zi = {};
Zi.__esModule = !0;
Zi.default = Ih;
var Th = _;
function Bh(e, t, n) {
  if (n === void 0 && (n = 1), !e)
    return [];
  for (var r = [], o = e.getTotalLength(), i = 0; i <= o; i += n) {
    var s = e.getPointAtLength(i), a = s.matrixTransform(t);
    r.push(a);
  }
  return r;
}
function Ih(e) {
  var t = (0, Th.useMemo)(function() {
    if (!e)
      return [];
    var n = e.getCTM() || new DOMMatrix();
    return Bh(e, n);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
var ca = Mh, Ut = _, dn = Ch, da = Ah, Ph = es(Xi), fa = es(Ki), Rh = es(Zi);
function es(e) {
  return e && e.__esModule ? e : { default: e };
}
function Dt() {
  return Dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Dt.apply(this, arguments);
}
function Mh(e) {
  var t = e === void 0 ? {} : e, n = t.resetOnStart, r = n === void 0 ? !1 : n, o = t.snapToPointer, i = o === void 0 ? !0 : o, s = t.onDragEnd, a = t.onDragMove, u = t.onDragStart, l = t.x, f = t.y, c = t.dx, d = t.dy, p = t.isDragging, g = t.restrict, h = g === void 0 ? {} : g, m = t.restrictToPath, C = (0, Ut.useRef)({
    x: l,
    y: f,
    dx: c,
    dy: d
  }), w = (0, Ph.default)({
    x: l,
    y: f,
    dx: c ?? 0,
    dy: d ?? 0,
    isDragging: !1
  }), D = w[0], y = w[1], v = (0, Ut.useState)(new dn.Point({
    x: 0,
    y: 0
  })), S = v[0], N = v[1];
  (0, Ut.useEffect)(function() {
    (C.current.x !== l || C.current.y !== f || C.current.dx !== c || C.current.dy !== d) && (C.current = {
      x: l,
      y: f,
      dx: c,
      dy: d
    }, y(function(R) {
      return Dt({}, R, {
        x: l,
        y: f,
        dx: c ?? 0,
        dy: d ?? 0
      });
    }));
  }), (0, Ut.useEffect)(function() {
    p !== void 0 && D.isDragging !== p && y(function(R) {
      return Dt({}, R, {
        isDragging: p
      });
    });
  }, [D.isDragging, p, y]);
  var P = (0, Rh.default)(m), M = (0, Ut.useCallback)(function(R) {
    R.persist(), y(function(T) {
      var j = T.x, H = j === void 0 ? 0 : j, J = T.y, Q = J === void 0 ? 0 : J, X = T.dx, se = T.dy, Y = new dn.Point({
        x: (H || 0) + X,
        y: (Q || 0) + se
      }), ce = (0, da.localPoint)(R) || new dn.Point({
        x: 0,
        y: 0
      }), Z = i ? ce : Y, ge = (0, fa.default)(Z, P, h);
      return N((0, dn.subtractPoints)(Y, ce)), {
        isDragging: !0,
        dx: r ? 0 : T.dx,
        dy: r ? 0 : T.dy,
        x: r ? ge.x : ge.x - T.dx,
        y: r ? ge.y : ge.y - T.dy
      };
    }, u && function(T) {
      u(Dt({}, T, {
        event: R
      }));
    });
  }, [u, r, h, P, y, i]), O = (0, Ut.useCallback)(function(R) {
    R.persist(), y(function(T) {
      if (!T.isDragging)
        return T;
      var j = T.x, H = j === void 0 ? 0 : j, J = T.y, Q = J === void 0 ? 0 : J, X = (0, da.localPoint)(R) || new dn.Point({
        x: 0,
        y: 0
      }), se = i ? X : (0, dn.sumPoints)(X, S), Y = (0, fa.default)(se, P, h);
      return Dt({}, T, {
        dx: Y.x - H,
        dy: Y.y - Q
      });
    }, a && function(T) {
      T.isDragging && a(Dt({}, T, {
        event: R
      }));
    });
  }, [y, a, i, S, P, h]), L = (0, Ut.useCallback)(function(R) {
    R.persist(), y(function(T) {
      return Dt({}, T, {
        isDragging: !1
      });
    }, s && function(T) {
      s(Dt({}, T, {
        event: R
      }));
    });
  }, [s, y]);
  return Dt({}, D, {
    dragEnd: L,
    dragMove: O,
    dragStart: M
  });
}
function qr() {
  return qr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qr.apply(this, arguments);
}
var pa = {
  r: 10,
  fill: "transparent",
  stroke: "#777",
  strokeDasharray: "4,2",
  strokeWidth: 2
};
function Lh(e) {
  var t = e.canEditLabel, n = t === void 0 ? !0 : t, r = e.canEditSubject, o = r === void 0 ? !0 : r, i = e.children, s = e.dx, a = s === void 0 ? 0 : s, u = e.dy, l = u === void 0 ? 0 : u, f = e.height, c = e.labelDragHandleProps, d = e.onDragEnd, p = e.onDragMove, g = e.onDragStart, h = e.subjectDragHandleProps, m = e.width, C = e.x, w = C === void 0 ? 0 : C, D = e.y, y = D === void 0 ? 0 : D, v = _.useRef(), S = _.useRef(), N = _.useCallback(function(R) {
    var T = R.event;
    if (g) {
      var j, H, J, Q, X, se, Y, ce;
      g({
        event: T,
        x: w + ((j = (H = v.current) == null ? void 0 : H.dx) != null ? j : 0),
        y: y + ((J = (Q = v.current) == null ? void 0 : Q.dy) != null ? J : 0),
        dx: a + ((X = (se = S.current) == null ? void 0 : se.dx) != null ? X : 0),
        dy: l + ((Y = (ce = S.current) == null ? void 0 : ce.dy) != null ? Y : 0)
      });
    }
  }, [a, l, g, w, y]), P = _.useCallback(function(R) {
    var T = R.event;
    if (p) {
      var j, H, J, Q, X, se, Y, ce;
      p({
        event: T,
        x: w + ((j = (H = v.current) == null ? void 0 : H.dx) != null ? j : 0),
        y: y + ((J = (Q = v.current) == null ? void 0 : Q.dy) != null ? J : 0),
        dx: a + ((X = (se = S.current) == null ? void 0 : se.dx) != null ? X : 0),
        dy: l + ((Y = (ce = S.current) == null ? void 0 : ce.dy) != null ? Y : 0)
      });
    }
  }, [a, l, p, w, y]), M = _.useCallback(function(R) {
    var T = R.event;
    if (d) {
      var j, H, J, Q, X, se, Y, ce;
      d({
        event: T,
        x: w + ((j = (H = v.current) == null ? void 0 : H.dx) != null ? j : 0),
        y: y + ((J = (Q = v.current) == null ? void 0 : Q.dy) != null ? J : 0),
        dx: a + ((X = (se = S.current) == null ? void 0 : se.dx) != null ? X : 0),
        dy: l + ((Y = (ce = S.current) == null ? void 0 : ce.dy) != null ? Y : 0)
      });
    }
  }, [a, l, d, w, y]), O = ca({
    onDragStart: N,
    onDragMove: P,
    onDragEnd: M,
    x: w,
    y
  }), L = ca({
    onDragStart: N,
    onDragMove: P,
    onDragEnd: M,
    x: a,
    y: l
  });
  return v.current = O, S.current = L, /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(dl, {
    x: w + O.dx,
    y: y + O.dy,
    dx: a + L.dx,
    dy: l + L.dy
  }, i), O.isDragging && /* @__PURE__ */ E.createElement("rect", {
    width: m,
    height: f,
    onMouseMove: O.dragMove,
    onMouseUp: O.dragEnd,
    fill: "transparent"
  }), o && /* @__PURE__ */ E.createElement("circle", qr({
    cx: w,
    cy: y,
    transform: "translate(" + O.dx + "," + O.dy + ")",
    onMouseMove: O.dragMove,
    onMouseUp: O.dragEnd,
    onMouseDown: O.dragStart,
    onTouchStart: O.dragStart,
    onTouchMove: O.dragMove,
    onTouchEnd: O.dragEnd,
    cursor: O.isDragging ? "grabbing" : "grab"
  }, pa, h)), L.isDragging && /* @__PURE__ */ E.createElement("rect", {
    width: m,
    height: f,
    onMouseMove: L.dragMove,
    onMouseUp: L.dragEnd,
    fill: "transparent"
  }), n && /* @__PURE__ */ E.createElement("circle", qr({
    cx: w + O.dx + a,
    cy: y + O.dy + l,
    transform: "translate(" + L.dx + "," + L.dy + ")",
    onMouseMove: L.dragMove,
    onMouseUp: L.dragEnd,
    onMouseDown: L.dragStart,
    onTouchStart: L.dragStart,
    onTouchMove: L.dragMove,
    onTouchEnd: L.dragEnd,
    cursor: L.isDragging ? "grabbing" : "grab"
  }, pa, c)));
}
Lh.propTypes = {
  width: k.number.isRequired,
  height: k.number.isRequired,
  children: k.node.isRequired,
  canEditLabel: k.bool,
  canEditSubject: k.bool,
  onDragStart: k.func,
  onDragMove: k.func,
  onDragEnd: k.func
};
var kh = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function bi() {
  return bi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bi.apply(this, arguments);
}
function $h(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function pl(e) {
  var t = e.id, n = e.markerWidth, r = n === void 0 ? 3 : n, o = e.markerHeight, i = o === void 0 ? 3 : o, s = e.markerUnits, a = s === void 0 ? "userSpaceOnUse" : s, u = e.children, l = $h(e, kh);
  return /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("marker", bi({
    id: t,
    markerWidth: r,
    markerHeight: i,
    markerUnits: a
  }, l), u));
}
pl.propTypes = {
  id: k.string.isRequired,
  size: k.number,
  markerWidth: k.oneOfType([k.string, k.number]),
  markerHeight: k.oneOfType([k.string, k.number]),
  markerUnits: k.string,
  refX: k.oneOfType([k.string, k.number]),
  refY: k.oneOfType([k.string, k.number]),
  strokeWidth: k.number,
  children: k.node.isRequired
};
var Vh = ["id", "size", "strokeWidth"];
function Ci() {
  return Ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ci.apply(this, arguments);
}
function jh(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function jC(e) {
  var t = e.id, n = e.size, r = n === void 0 ? 9 : n, o = e.strokeWidth, i = o === void 0 ? 1 : o, s = jh(e, Vh), a = r + i * 2, u = r, l = a / 2, f = "0 0, " + r + " " + r / 2 + ", 0 " + r;
  return /* @__PURE__ */ E.createElement(pl, Ci({
    id: t,
    markerWidth: a,
    markerHeight: a,
    refX: u,
    refY: l,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: i
  }, s), /* @__PURE__ */ E.createElement("g", {
    transform: "translate(" + i + ", " + i + ")"
  }, /* @__PURE__ */ E.createElement("polyline", {
    points: f
  })));
}
const St = 1, Gh = 1, zh = 576, GC = ({
  labels: e,
  colors: t,
  config: n,
  dimensions: r,
  parentPaddingToSubtract: o = 0
}) => {
  const { uid: i, legend: s, type: a } = n, { tickRotation: u, position: l, style: f, subStyle: c, hideBorder: d } = s, p = c === "linear blocks";
  let [g] = r;
  const h = g <= zh, m = Number(g) - o - St * 2 - Gh * 2, C = `${i}-${Date.now()}`, w = t == null ? void 0 : t.length, D = (e || []).reduce((R, T) => R.length > String(T).length ? R : T, ""), y = 20;
  let v = 50;
  const S = km(D, "normal 14px sans-serif"), N = Number(u) || 0, P = N * (Math.PI / 180), M = v + Number(S) * Math.sin(P), O = t.map((R, T) => {
    const j = T / (t.length - 1) * 100;
    return /* @__PURE__ */ E.createElement("stop", { key: T, offset: `${j}%`, style: { stopColor: R, stopOpacity: 1 } });
  }), L = e.map((R, T) => {
    const j = m / w, H = T * j + j + St, J = N ? "end" : "middle", Q = N ? "middle" : "start", X = T === e.length - 1;
    return /* @__PURE__ */ E.createElement(Gr, { top: St }, !X && !p && /* @__PURE__ */ E.createElement("line", { x1: H, x2: H, y1: 30, y2: y, stroke: "black" }), /* @__PURE__ */ E.createElement(
      qc,
      {
        angle: -u,
        x: H,
        y,
        dy: 10,
        dx: -j / 2,
        fontSize: h ? "12" : "14",
        textAnchor: J,
        verticalAnchor: Q,
        width: j,
        lineHeight: "14"
      },
      R
    ));
  });
  if (!(a === "map" && l === "side" || !l) && !(a === "chart" && (l === "left" || l === "right" || !l)) && f === "gradient")
    return /* @__PURE__ */ E.createElement("svg", { className: "w-100 overflow-visible", height: M }, /* @__PURE__ */ E.createElement("rect", { x: 0, y: 0, width: m + St * 2, height: y + St * 2, fill: "#d3d3d3" }), /* @__PURE__ */ E.createElement("linearGradient", { id: `gradient-smooth-${C}`, x1: "0%", y1: "0%", x2: "100%", y2: "0%" }, O), c === "smooth" && /* @__PURE__ */ E.createElement(
      "rect",
      {
        x: St,
        y: St,
        width: m,
        height: y,
        fill: `url(#gradient-smooth-${C})`
      }
    ), c === "linear blocks" && t.map((R, T) => {
      const j = m / w, H = T * j + St;
      return /* @__PURE__ */ E.createElement(Gr, null, /* @__PURE__ */ E.createElement(
        "rect",
        {
          key: T,
          x: H,
          y: St,
          width: j,
          height: y,
          fill: R,
          stroke: "white",
          strokeWidth: "0"
        }
      ));
    }), /* @__PURE__ */ E.createElement("g", null, L));
};
var ml = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ma = E.createContext && E.createContext(ml), Mt = globalThis && globalThis.__assign || function() {
  return Mt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Mt.apply(this, arguments);
}, Uh = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function hl(e) {
  return e && e.map(function(t, n) {
    return E.createElement(t.tag, Mt({
      key: n
    }, t.attr), hl(t.child));
  });
}
function zC(e) {
  return function(t) {
    return E.createElement(Wh, Mt({
      attr: Mt({}, e.attr)
    }, t), hl(e.child));
  };
}
function Wh(e) {
  var t = function(n) {
    var r = e.attr, o = e.size, i = e.title, s = Uh(e, ["attr", "size", "title"]), a = o || n.size || "1em", u;
    return n.className && (u = n.className), e.className && (u = (u ? u + " " : "") + e.className), E.createElement("svg", Mt({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, s, {
      className: u,
      style: Mt(Mt({
        color: e.color || n.color
      }, n.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && E.createElement("title", null, i), e.children);
  };
  return ma !== void 0 ? E.createElement(ma.Consumer, null, function(n) {
    return t(n);
  }) : t(ml);
}
function er(e) {
  "@babel/helpers - typeof";
  return er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, er(e);
}
function Hh(e, t) {
  if (er(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (er(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qh(e) {
  var t = Hh(e, "string");
  return er(t) == "symbol" ? t : String(t);
}
function Yh(e, t, n) {
  return t = qh(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ha(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ga(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ha(Object(n), !0).forEach(function(r) {
      Yh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ha(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function tt(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Da = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), No = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Ea = {
  INIT: "@@redux/INIT" + No(),
  REPLACE: "@@redux/REPLACE" + No(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + No();
  }
};
function Xh(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Kh(e) {
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
  if (Zh(e))
    return "date";
  if (Qh(e))
    return "error";
  var n = Jh(e);
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
function Jh(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Qh(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Zh(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Jt(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Kh(e)), t;
}
function gl(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? tt(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? tt(1) : "Expected the enhancer to be a function. Instead, received: '" + Jt(n) + "'");
    return n(gl)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? tt(2) : "Expected the root reducer to be a function. Instead, received: '" + Jt(e) + "'");
  var o = e, i = t, s = [], a = s, u = !1;
  function l() {
    a === s && (a = s.slice());
  }
  function f() {
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? tt(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function c(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? tt(4) : "Expected the listener to be a function. Instead, received: '" + Jt(h) + "'");
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? tt(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var m = !0;
    return l(), a.push(h), function() {
      if (m) {
        if (u)
          throw new Error(process.env.NODE_ENV === "production" ? tt(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, l();
        var w = a.indexOf(h);
        a.splice(w, 1), s = null;
      }
    };
  }
  function d(h) {
    if (!Xh(h))
      throw new Error(process.env.NODE_ENV === "production" ? tt(7) : "Actions must be plain objects. Instead, the actual type was: '" + Jt(h) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof h.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? tt(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? tt(9) : "Reducers may not dispatch actions.");
    try {
      u = !0, i = o(i, h);
    } finally {
      u = !1;
    }
    for (var m = s = a, C = 0; C < m.length; C++) {
      var w = m[C];
      w();
    }
    return h;
  }
  function p(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? tt(10) : "Expected the nextReducer to be a function. Instead, received: '" + Jt(h));
    o = h, d({
      type: Ea.REPLACE
    });
  }
  function g() {
    var h, m = c;
    return h = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(w) {
        if (typeof w != "object" || w === null)
          throw new Error(process.env.NODE_ENV === "production" ? tt(11) : "Expected the observer to be an object. Instead, received: '" + Jt(w) + "'");
        function D() {
          w.next && w.next(f());
        }
        D();
        var y = m(D);
        return {
          unsubscribe: y
        };
      }
    }, h[Da] = function() {
      return this;
    }, h;
  }
  return d({
    type: Ea.INIT
  }), r = {
    dispatch: d,
    subscribe: c,
    getState: f,
    replaceReducer: p
  }, r[Da] = g, r;
}
function ya(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function va(e, t) {
  if (typeof e == "function")
    return ya(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? tt(16) : "bindActionCreators expected an object or a function, but instead received: '" + Jt(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = ya(o, t));
  }
  return n;
}
function Dl() {
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
function eg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? tt(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, s = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, a = t.map(function(u) {
        return u(s);
      });
      return i = Dl.apply(void 0, a)(o.dispatch), ga(ga({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var Ai = { exports: {} }, xo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ba;
function tg() {
  if (ba)
    return xo;
  ba = 1;
  var e = _;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
  function a(c, d) {
    var p = d(), g = r({ inst: { value: p, getSnapshot: d } }), h = g[0].inst, m = g[1];
    return i(function() {
      h.value = p, h.getSnapshot = d, u(h) && m({ inst: h });
    }, [c, p, d]), o(function() {
      return u(h) && m({ inst: h }), c(function() {
        u(h) && m({ inst: h });
      });
    }, [c]), s(p), p;
  }
  function u(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var p = d();
      return !n(c, p);
    } catch {
      return !0;
    }
  }
  function l(c, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : a;
  return xo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, xo;
}
var Oo = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca;
function ng() {
  return Ca || (Ca = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = _, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(D) {
      {
        for (var y = arguments.length, v = new Array(y > 1 ? y - 1 : 0), S = 1; S < y; S++)
          v[S - 1] = arguments[S];
        r("error", D, v);
      }
    }
    function r(D, y, v) {
      {
        var S = t.ReactDebugCurrentFrame, N = S.getStackAddendum();
        N !== "" && (y += "%s", v = v.concat([N]));
        var P = v.map(function(M) {
          return String(M);
        });
        P.unshift("Warning: " + y), Function.prototype.apply.call(console[D], console, P);
      }
    }
    function o(D, y) {
      return D === y && (D !== 0 || 1 / D === 1 / y) || D !== D && y !== y;
    }
    var i = typeof Object.is == "function" ? Object.is : o, s = e.useState, a = e.useEffect, u = e.useLayoutEffect, l = e.useDebugValue, f = !1, c = !1;
    function d(D, y, v) {
      f || e.startTransition !== void 0 && (f = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var S = y();
      if (!c) {
        var N = y();
        i(S, N) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), c = !0);
      }
      var P = s({
        inst: {
          value: S,
          getSnapshot: y
        }
      }), M = P[0].inst, O = P[1];
      return u(function() {
        M.value = S, M.getSnapshot = y, p(M) && O({
          inst: M
        });
      }, [D, S, y]), a(function() {
        p(M) && O({
          inst: M
        });
        var L = function() {
          p(M) && O({
            inst: M
          });
        };
        return D(L);
      }, [D]), l(S), S;
    }
    function p(D) {
      var y = D.getSnapshot, v = D.value;
      try {
        var S = y();
        return !i(v, S);
      } catch {
        return !0;
      }
    }
    function g(D, y, v) {
      return y();
    }
    var h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m = !h, C = m ? g : d, w = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : C;
    Oo.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Oo;
}
process.env.NODE_ENV === "production" ? Ai.exports = tg() : Ai.exports = ng();
var ts = Ai.exports, To = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aa;
function rg() {
  if (Aa)
    return To;
  Aa = 1;
  var e = _, t = ts;
  function n(l, f) {
    return l === f && (l !== 0 || 1 / l === 1 / f) || l !== l && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, a = e.useMemo, u = e.useDebugValue;
  return To.useSyncExternalStoreWithSelector = function(l, f, c, d, p) {
    var g = i(null);
    if (g.current === null) {
      var h = { hasValue: !1, value: null };
      g.current = h;
    } else
      h = g.current;
    g = a(function() {
      function C(S) {
        if (!w) {
          if (w = !0, D = S, S = d(S), p !== void 0 && h.hasValue) {
            var N = h.value;
            if (p(N, S))
              return y = N;
          }
          return y = S;
        }
        if (N = y, r(D, S))
          return N;
        var P = d(S);
        return p !== void 0 && p(N, P) ? N : (D = S, y = P);
      }
      var w = !1, D, y, v = c === void 0 ? null : c;
      return [function() {
        return C(f());
      }, v === null ? void 0 : function() {
        return C(v());
      }];
    }, [f, c, d, p]);
    var m = o(l, g[0], g[1]);
    return s(function() {
      h.hasValue = !0, h.value = m;
    }, [m]), u(m), m;
  }, To;
}
var Bo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wa;
function og() {
  return wa || (wa = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = _, t = ts;
    function n(f, c) {
      return f === c && (f !== 0 || 1 / f === 1 / c) || f !== f && c !== c;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, a = e.useMemo, u = e.useDebugValue;
    function l(f, c, d, p, g) {
      var h = i(null), m;
      h.current === null ? (m = {
        hasValue: !1,
        value: null
      }, h.current = m) : m = h.current;
      var C = a(function() {
        var v = !1, S, N, P = function(R) {
          if (!v) {
            v = !0, S = R;
            var T = p(R);
            if (g !== void 0 && m.hasValue) {
              var j = m.value;
              if (g(j, T))
                return N = j, j;
            }
            return N = T, T;
          }
          var H = S, J = N;
          if (r(H, R))
            return J;
          var Q = p(R);
          return g !== void 0 && g(J, Q) ? J : (S = R, N = Q, Q);
        }, M = d === void 0 ? null : d, O = function() {
          return P(c());
        }, L = M === null ? void 0 : function() {
          return P(M());
        };
        return [O, L];
      }, [c, d, p, g]), w = C[0], D = C[1], y = o(f, w, D);
      return s(function() {
        m.hasValue = !0, m.value = y;
      }, [y]), u(y), y;
    }
    Bo.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Bo;
}
process.env.NODE_ENV === "production" ? rg() : og();
function ig(e) {
  e();
}
let El = ig;
const sg = (e) => El = e, ag = () => El, _a = Symbol.for("react-redux-context"), Sa = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function ug() {
  var e;
  if (!_.createContext)
    return {};
  const t = (e = Sa[_a]) != null ? e : Sa[_a] = /* @__PURE__ */ new Map();
  let n = t.get(_.createContext);
  return n || (n = _.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(_.createContext, n)), n;
}
const yl = /* @__PURE__ */ ug(), lg = () => {
  throw new Error("uSES not initialized!");
};
var wi = { exports: {} }, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa;
function cg() {
  if (Fa)
    return fe;
  Fa = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function D(v) {
    if (typeof v == "object" && v !== null) {
      var S = v.$$typeof;
      switch (S) {
        case t:
          switch (v = v.type, v) {
            case u:
            case l:
            case r:
            case i:
            case o:
            case c:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case f:
                case g:
                case p:
                case s:
                  return v;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  function y(v) {
    return D(v) === l;
  }
  return fe.AsyncMode = u, fe.ConcurrentMode = l, fe.ContextConsumer = a, fe.ContextProvider = s, fe.Element = t, fe.ForwardRef = f, fe.Fragment = r, fe.Lazy = g, fe.Memo = p, fe.Portal = n, fe.Profiler = i, fe.StrictMode = o, fe.Suspense = c, fe.isAsyncMode = function(v) {
    return y(v) || D(v) === u;
  }, fe.isConcurrentMode = y, fe.isContextConsumer = function(v) {
    return D(v) === a;
  }, fe.isContextProvider = function(v) {
    return D(v) === s;
  }, fe.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, fe.isForwardRef = function(v) {
    return D(v) === f;
  }, fe.isFragment = function(v) {
    return D(v) === r;
  }, fe.isLazy = function(v) {
    return D(v) === g;
  }, fe.isMemo = function(v) {
    return D(v) === p;
  }, fe.isPortal = function(v) {
    return D(v) === n;
  }, fe.isProfiler = function(v) {
    return D(v) === i;
  }, fe.isStrictMode = function(v) {
    return D(v) === o;
  }, fe.isSuspense = function(v) {
    return D(v) === c;
  }, fe.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === l || v === i || v === o || v === c || v === d || typeof v == "object" && v !== null && (v.$$typeof === g || v.$$typeof === p || v.$$typeof === s || v.$$typeof === a || v.$$typeof === f || v.$$typeof === m || v.$$typeof === C || v.$$typeof === w || v.$$typeof === h);
  }, fe.typeOf = D, fe;
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
var Na;
function dg() {
  return Na || (Na = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function D(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === r || I === l || I === i || I === o || I === c || I === d || typeof I == "object" && I !== null && (I.$$typeof === g || I.$$typeof === p || I.$$typeof === s || I.$$typeof === a || I.$$typeof === f || I.$$typeof === m || I.$$typeof === C || I.$$typeof === w || I.$$typeof === h);
    }
    function y(I) {
      if (typeof I == "object" && I !== null) {
        var ae = I.$$typeof;
        switch (ae) {
          case t:
            var $ = I.type;
            switch ($) {
              case u:
              case l:
              case r:
              case i:
              case o:
              case c:
                return $;
              default:
                var Le = $ && $.$$typeof;
                switch (Le) {
                  case a:
                  case f:
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
    var v = u, S = l, N = a, P = s, M = t, O = f, L = r, R = g, T = p, j = n, H = i, J = o, Q = c, X = !1;
    function se(I) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Y(I) || y(I) === u;
    }
    function Y(I) {
      return y(I) === l;
    }
    function ce(I) {
      return y(I) === a;
    }
    function Z(I) {
      return y(I) === s;
    }
    function ge(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function V(I) {
      return y(I) === f;
    }
    function te(I) {
      return y(I) === r;
    }
    function be(I) {
      return y(I) === g;
    }
    function je(I) {
      return y(I) === p;
    }
    function le(I) {
      return y(I) === n;
    }
    function de(I) {
      return y(I) === i;
    }
    function Ae(I) {
      return y(I) === o;
    }
    function we(I) {
      return y(I) === c;
    }
    pe.AsyncMode = v, pe.ConcurrentMode = S, pe.ContextConsumer = N, pe.ContextProvider = P, pe.Element = M, pe.ForwardRef = O, pe.Fragment = L, pe.Lazy = R, pe.Memo = T, pe.Portal = j, pe.Profiler = H, pe.StrictMode = J, pe.Suspense = Q, pe.isAsyncMode = se, pe.isConcurrentMode = Y, pe.isContextConsumer = ce, pe.isContextProvider = Z, pe.isElement = ge, pe.isForwardRef = V, pe.isFragment = te, pe.isLazy = be, pe.isMemo = je, pe.isPortal = le, pe.isProfiler = de, pe.isStrictMode = Ae, pe.isSuspense = we, pe.isValidElementType = D, pe.typeOf = y;
  }()), pe;
}
process.env.NODE_ENV === "production" ? wi.exports = cg() : wi.exports = dg();
var fg = wi.exports, ns = fg, pg = {
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
}, mg = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, hg = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, vl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, rs = {};
rs[ns.ForwardRef] = hg;
rs[ns.Memo] = vl;
function xa(e) {
  return ns.isMemo(e) ? vl : rs[e.$$typeof] || pg;
}
var gg = Object.defineProperty, Dg = Object.getOwnPropertyNames, Oa = Object.getOwnPropertySymbols, Eg = Object.getOwnPropertyDescriptor, yg = Object.getPrototypeOf, Ta = Object.prototype;
function bl(e, t, n) {
  if (typeof t != "string") {
    if (Ta) {
      var r = yg(t);
      r && r !== Ta && bl(e, r, n);
    }
    var o = Dg(t);
    Oa && (o = o.concat(Oa(t)));
    for (var i = xa(e), s = xa(t), a = 0; a < o.length; ++a) {
      var u = o[a];
      if (!mg[u] && !(n && n[u]) && !(s && s[u]) && !(i && i[u])) {
        var l = Eg(t, u);
        try {
          gg(e, u, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var vg = bl;
const Ba = /* @__PURE__ */ _u(vg);
var _i = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia;
function bg() {
  if (Ia)
    return me;
  Ia = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(m) {
    if (typeof m == "object" && m !== null) {
      var C = m.$$typeof;
      switch (C) {
        case e:
          switch (m = m.type, m) {
            case n:
            case o:
            case r:
            case l:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case a:
                case s:
                case u:
                case d:
                case c:
                case i:
                  return m;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return me.ContextConsumer = s, me.ContextProvider = i, me.Element = e, me.ForwardRef = u, me.Fragment = n, me.Lazy = d, me.Memo = c, me.Portal = t, me.Profiler = o, me.StrictMode = r, me.Suspense = l, me.SuspenseList = f, me.isAsyncMode = function() {
    return !1;
  }, me.isConcurrentMode = function() {
    return !1;
  }, me.isContextConsumer = function(m) {
    return h(m) === s;
  }, me.isContextProvider = function(m) {
    return h(m) === i;
  }, me.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, me.isForwardRef = function(m) {
    return h(m) === u;
  }, me.isFragment = function(m) {
    return h(m) === n;
  }, me.isLazy = function(m) {
    return h(m) === d;
  }, me.isMemo = function(m) {
    return h(m) === c;
  }, me.isPortal = function(m) {
    return h(m) === t;
  }, me.isProfiler = function(m) {
    return h(m) === o;
  }, me.isStrictMode = function(m) {
    return h(m) === r;
  }, me.isSuspense = function(m) {
    return h(m) === l;
  }, me.isSuspenseList = function(m) {
    return h(m) === f;
  }, me.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === o || m === r || m === l || m === f || m === p || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === c || m.$$typeof === i || m.$$typeof === s || m.$$typeof === u || m.$$typeof === g || m.getModuleId !== void 0);
  }, me.typeOf = h, me;
}
var he = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pa;
function Cg() {
  return Pa || (Pa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = !1, h = !1, m = !1, C = !1, w = !1, D;
    D = Symbol.for("react.module.reference");
    function y($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === n || $ === o || w || $ === r || $ === l || $ === f || C || $ === p || g || h || m || typeof $ == "object" && $ !== null && ($.$$typeof === d || $.$$typeof === c || $.$$typeof === i || $.$$typeof === s || $.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === D || $.getModuleId !== void 0));
    }
    function v($) {
      if (typeof $ == "object" && $ !== null) {
        var Le = $.$$typeof;
        switch (Le) {
          case e:
            var Fe = $.type;
            switch (Fe) {
              case n:
              case o:
              case r:
              case l:
              case f:
                return Fe;
              default:
                var Oe = Fe && Fe.$$typeof;
                switch (Oe) {
                  case a:
                  case s:
                  case u:
                  case d:
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
    var S = s, N = i, P = e, M = u, O = n, L = d, R = c, T = t, j = o, H = r, J = l, Q = f, X = !1, se = !1;
    function Y($) {
      return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ce($) {
      return se || (se = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z($) {
      return v($) === s;
    }
    function ge($) {
      return v($) === i;
    }
    function V($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === e;
    }
    function te($) {
      return v($) === u;
    }
    function be($) {
      return v($) === n;
    }
    function je($) {
      return v($) === d;
    }
    function le($) {
      return v($) === c;
    }
    function de($) {
      return v($) === t;
    }
    function Ae($) {
      return v($) === o;
    }
    function we($) {
      return v($) === r;
    }
    function I($) {
      return v($) === l;
    }
    function ae($) {
      return v($) === f;
    }
    he.ContextConsumer = S, he.ContextProvider = N, he.Element = P, he.ForwardRef = M, he.Fragment = O, he.Lazy = L, he.Memo = R, he.Portal = T, he.Profiler = j, he.StrictMode = H, he.Suspense = J, he.SuspenseList = Q, he.isAsyncMode = Y, he.isConcurrentMode = ce, he.isContextConsumer = Z, he.isContextProvider = ge, he.isElement = V, he.isForwardRef = te, he.isFragment = be, he.isLazy = je, he.isMemo = le, he.isPortal = de, he.isProfiler = Ae, he.isStrictMode = we, he.isSuspense = I, he.isSuspenseList = ae, he.isValidElementType = y, he.typeOf = v;
  }()), he;
}
process.env.NODE_ENV === "production" ? _i.exports = bg() : _i.exports = Cg();
var Ra = _i.exports;
function os(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Io(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || os(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else
    throw new Error(`Unexpected value for ${t} in connect.`);
}
function Ag(e, t, n) {
  Io(e, "mapStateToProps"), Io(t, "mapDispatchToProps"), Io(n, "mergeProps");
}
const wg = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function _g(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: s
}) {
  let a = !1, u, l, f, c, d;
  function p(w, D) {
    return u = w, l = D, f = e(u, l), c = t(r, l), d = n(f, c, l), a = !0, d;
  }
  function g() {
    return f = e(u, l), t.dependsOnOwnProps && (c = t(r, l)), d = n(f, c, l), d;
  }
  function h() {
    return e.dependsOnOwnProps && (f = e(u, l)), t.dependsOnOwnProps && (c = t(r, l)), d = n(f, c, l), d;
  }
  function m() {
    const w = e(u, l), D = !s(w, f);
    return f = w, D && (d = n(f, c, l)), d;
  }
  function C(w, D) {
    const y = !i(D, l), v = !o(w, u, D, l);
    return u = w, l = D, y && v ? g() : y ? h() : v ? m() : d;
  }
  return function(D, y) {
    return a ? C(D, y) : p(D, y);
  };
}
function Sg(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = Ou(t, wg);
  const s = n(e, i), a = r(e, i), u = o(e, i);
  return process.env.NODE_ENV !== "production" && Ag(s, a, u), _g(s, a, u, e, i);
}
function Fg(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function Ng(e) {
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
function Cl(e, t, n) {
  Ng(e) || os(`${n}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Si(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Ma(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Al(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(a, u) {
      return i.dependsOnOwnProps ? i.mapToProps(a, u) : i.mapToProps(a, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(a, u) {
      i.mapToProps = e, i.dependsOnOwnProps = Ma(e);
      let l = i(a, u);
      return typeof l == "function" && (i.mapToProps = l, i.dependsOnOwnProps = Ma(l), l = i(a, u)), process.env.NODE_ENV !== "production" && Cl(l, o, t), l;
    }, i;
  };
}
function is(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function xg(e) {
  return e && typeof e == "object" ? Si((t) => (
    // @ts-ignore
    Fg(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Al(e, "mapDispatchToProps")
  ) : is(e, "mapDispatchToProps") : Si((t) => ({
    dispatch: t
  }));
}
function Og(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Al(e, "mapStateToProps")
  ) : is(e, "mapStateToProps") : Si(() => ({}));
}
function Tg(e, t, n) {
  return mn({}, n, e, t);
}
function Bg(e) {
  return function(n, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let i = !1, s;
    return function(u, l, f) {
      const c = e(u, l, f);
      return i ? o(c, s) || (s = c) : (i = !0, s = c, process.env.NODE_ENV !== "production" && Cl(s, r, "mergeProps")), s;
    };
  };
}
function Ig(e) {
  return e ? typeof e == "function" ? Bg(e) : is(e, "mergeProps") : () => Tg;
}
function Pg() {
  const e = ag();
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
const La = {
  notify() {
  },
  get: () => []
};
function wl(e, t) {
  let n, r = La, o = 0, i = !1;
  function s(h) {
    f();
    const m = r.subscribe(h);
    let C = !1;
    return () => {
      C || (C = !0, m(), c());
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
  function f() {
    o++, n || (n = t ? t.addNestedSub(u) : e.subscribe(u), r = Pg());
  }
  function c() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = La);
  }
  function d() {
    i || (i = !0, f());
  }
  function p() {
    i && (i = !1, c());
  }
  const g = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: u,
    isSubscribed: l,
    trySubscribe: d,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return g;
}
const Rg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Yr = Rg ? _.useLayoutEffect : _.useEffect;
function ka(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Po(e, t) {
  if (ka(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !ka(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const Mg = ["reactReduxForwardedRef"];
let _l = lg;
const Lg = (e) => {
  _l = e;
}, kg = [null, null], $g = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Vg(e, t, n) {
  Yr(() => e(...t), n);
}
function jg(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function Gg(e, t, n, r, o, i, s, a, u, l, f) {
  if (!e)
    return () => {
    };
  let c = !1, d = null;
  const p = () => {
    if (c || !a.current)
      return;
    const h = t.getState();
    let m, C;
    try {
      m = r(h, o.current);
    } catch (w) {
      C = w, d = w;
    }
    C || (d = null), m === i.current ? s.current || l() : (i.current = m, u.current = m, s.current = !0, f());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (c = !0, n.tryUnsubscribe(), n.onStateChange = null, d)
      throw d;
  };
}
function zg(e, t) {
  return e === t;
}
let $a = !1;
function Sl(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = zg,
  areOwnPropsEqual: i = Po,
  areStatePropsEqual: s = Po,
  areMergedPropsEqual: a = Po,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: u = !1,
  // the context consumer to use
  context: l = yl
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !$a && ($a = !0, os('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = l, c = Og(e), d = xg(t), p = Ig(n), g = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !Ra.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${$g(m)}`);
    const C = m.displayName || m.name || "Component", w = `Connect(${C})`, D = {
      shouldHandleStateChanges: g,
      displayName: w,
      wrappedComponentName: C,
      WrappedComponent: m,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: p,
      areStatesEqual: o,
      areStatePropsEqual: s,
      areOwnPropsEqual: i,
      areMergedPropsEqual: a
    };
    function y(N) {
      const [P, M, O] = _.useMemo(() => {
        const {
          reactReduxForwardedRef: I
        } = N, ae = Ou(N, Mg);
        return [N.context, I, ae];
      }, [N]), L = _.useMemo(() => P && P.Consumer && // @ts-ignore
      Ra.isContextConsumer(/* @__PURE__ */ _.createElement(P.Consumer, null)) ? P : f, [P, f]), R = _.useContext(L), T = !!N.store && !!N.store.getState && !!N.store.dispatch, j = !!R && !!R.store;
      if (process.env.NODE_ENV !== "production" && !T && !j)
        throw new Error(`Could not find "store" in the context of "${w}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${w} in connect options.`);
      const H = T ? N.store : R.store, J = j ? R.getServerState : H.getState, Q = _.useMemo(() => Sg(H.dispatch, D), [H]), [X, se] = _.useMemo(() => {
        if (!g)
          return kg;
        const I = wl(H, T ? void 0 : R.subscription), ae = I.notifyNestedSubs.bind(I);
        return [I, ae];
      }, [H, T, R]), Y = _.useMemo(() => T ? R : mn({}, R, {
        subscription: X
      }), [T, R, X]), ce = _.useRef(), Z = _.useRef(O), ge = _.useRef(), V = _.useRef(!1);
      _.useRef(!1);
      const te = _.useRef(!1), be = _.useRef();
      Yr(() => (te.current = !0, () => {
        te.current = !1;
      }), []);
      const je = _.useMemo(() => () => ge.current && O === Z.current ? ge.current : Q(H.getState(), O), [H, O]), le = _.useMemo(() => (ae) => X ? Gg(
        g,
        H,
        X,
        // @ts-ignore
        Q,
        Z,
        ce,
        V,
        te,
        ge,
        se,
        ae
      ) : () => {
      }, [X]);
      Vg(jg, [Z, ce, V, O, ge, se]);
      let de;
      try {
        de = _l(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          le,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          je,
          J ? () => Q(J(), O) : je
        );
      } catch (I) {
        throw be.current && (I.message += `
The error may be correlated with this previous error:
${be.current.stack}

`), I;
      }
      Yr(() => {
        be.current = void 0, ge.current = void 0, ce.current = de;
      });
      const Ae = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(m, mn({}, de, {
          ref: M
        }))
      ), [M, m, de]);
      return _.useMemo(() => g ? /* @__PURE__ */ _.createElement(L.Provider, {
        value: Y
      }, Ae) : Ae, [L, Ae, Y]);
    }
    const S = _.memo(y);
    if (S.WrappedComponent = m, S.displayName = y.displayName = w, u) {
      const P = _.forwardRef(function(O, L) {
        return /* @__PURE__ */ _.createElement(S, mn({}, O, {
          reactReduxForwardedRef: L
        }));
      });
      return P.displayName = w, P.WrappedComponent = m, Ba(P, m);
    }
    return Ba(S, m);
  };
}
function Ug({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const s = _.useMemo(() => {
    const l = wl(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), a = _.useMemo(() => e.getState(), [e]);
  Yr(() => {
    const {
      subscription: l
    } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const u = t || yl;
  return /* @__PURE__ */ _.createElement(u.Provider, {
    value: s
  }, n);
}
Lg(ts.useSyncExternalStore);
sg(Vi.unstable_batchedUpdates);
function Wg(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Fl(e, t) {
  var n = _.useState(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = _.useRef(!0), o = _.useRef(n), i = r.current || !!(t && o.current.inputs && Wg(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return _.useEffect(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function Hg(e, t) {
  return Fl(function() {
    return e;
  }, t);
}
var ie = Fl, U = Hg, qg = process.env.NODE_ENV === "production", Ro = "Invariant failed";
function Va(e, t) {
  if (!e) {
    if (qg)
      throw new Error(Ro);
    var n = typeof t == "function" ? t() : t, r = n ? "".concat(Ro, ": ").concat(n) : Ro;
    throw new Error(r);
  }
}
var pt = function(t) {
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
}, ss = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, ja = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, Yg = function(t, n) {
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
}, as = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? Mo : r, i = t.border, s = i === void 0 ? Mo : i, a = t.padding, u = a === void 0 ? Mo : a, l = pt(ss(n, o)), f = pt(ja(n, s)), c = pt(ja(f, u));
  return {
    marginBox: l,
    borderBox: pt(n),
    paddingBox: f,
    contentBox: c,
    margin: o,
    border: s,
    padding: u
  };
}, ut = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Va(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : Va(!1)), o;
}, Xg = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Xr = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, a = Yg(r, n);
  return as({
    borderBox: a,
    border: o,
    margin: i,
    padding: s
  });
}, Kr = function(t, n) {
  return n === void 0 && (n = Xg()), Xr(t, n);
}, Nl = function(t, n) {
  var r = {
    top: ut(n.marginTop),
    right: ut(n.marginRight),
    bottom: ut(n.marginBottom),
    left: ut(n.marginLeft)
  }, o = {
    top: ut(n.paddingTop),
    right: ut(n.paddingRight),
    bottom: ut(n.paddingBottom),
    left: ut(n.paddingLeft)
  }, i = {
    top: ut(n.borderTopWidth),
    right: ut(n.borderRightWidth),
    bottom: ut(n.borderBottomWidth),
    left: ut(n.borderLeftWidth)
  };
  return as({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, xl = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Nl(n, r);
}, Ga = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Kg(e, t) {
  return !!(e === t || Ga(e) && Ga(t));
}
function Jg(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!Kg(e[n], t[n]))
      return !1;
  return !0;
}
function Re(e, t) {
  t === void 0 && (t = Jg);
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
var Qg = function(t) {
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
const tr = Qg, Zg = process.env.NODE_ENV === "production", e0 = /[ \t]{2,}/g, t0 = /^[ \t]*/gm, za = (e) => e.replace(e0, " ").replace(t0, "").trim(), n0 = (e) => za(`
  %c@hello-pangea/dnd

  %c${za(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), r0 = (e) => [n0(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], o0 = "__@hello-pangea/dnd-disable-dev-warnings";
function Ol(e, t) {
  Zg || typeof window < "u" && window[o0] || console[e](...r0(t));
}
const Ee = Ol.bind(null, "warn"), Fi = Ol.bind(null, "error");
function Lt() {
}
function i0(e, t) {
  return {
    ...e,
    ...t
  };
}
function lt(e, t, n) {
  const r = t.map((o) => {
    const i = i0(n, o.options);
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
const s0 = process.env.NODE_ENV === "production", Ua = "Invariant failed";
class nr extends Error {
}
nr.prototype.toString = function() {
  return this.message;
};
function b(e, t) {
  if (!e)
    throw s0 ? new nr(Ua) : new nr(`${Ua}: ${t || ""}`);
}
class a0 extends E.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Lt, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && Ee(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof nr && (n.preventDefault(), process.env.NODE_ENV !== "production" && Fi(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = lt(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof nr) {
      process.env.NODE_ENV !== "production" && Fi(t.message), this.setState({});
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
const u0 = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Jr = (e) => e + 1, l0 = (e) => `
  You have lifted an item in position ${Jr(e.source.index)}
`, Tl = (e, t) => {
  const n = e.droppableId === t.droppableId, r = Jr(e.index), o = Jr(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, Bl = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, c0 = (e) => {
  const t = e.destination;
  if (t)
    return Tl(e.source, t);
  const n = e.combine;
  return n ? Bl(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Wa = (e) => `
  The item has returned to its starting position
  of ${Jr(e.index)}
`, d0 = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Wa(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Tl(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${Bl(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Wa(e.source)}
  `;
}, f0 = {
  dragHandleUsageInstructions: u0,
  onDragStart: l0,
  onDragUpdate: c0,
  onDragEnd: d0
};
var $r = f0;
const Me = {
  x: 0,
  y: 0
}, Ve = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), nt = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), kt = (e, t) => e.x === t.x && e.y === t.y, Cn = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), on = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, rr = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Ha = (e, t) => Math.min(...t.map((n) => rr(e, n))), Il = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var p0 = (e, t) => {
  const n = pt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const fr = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), qa = (e) => [{
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
}], m0 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, h0 = (e, t) => t ? fr(e, t.scroll.diff.displacement) : e, g0 = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, D0 = (e, t) => t && t.shouldClipSubject ? p0(t.pageMarginBox, e) : pt(e);
var Dn = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = h0(e.marginBox, r), i = g0(o, n, t), s = D0(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, us = (e, t) => {
  e.frame || (process.env.NODE_ENV, b(!1));
  const n = e.frame, r = nt(t, n.scroll.initial), o = Cn(r), i = {
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
const Pl = Re((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Rl = Re((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), co = Re((e) => Object.values(e)), E0 = Re((e) => Object.values(e));
var sn = Re((e, t) => E0(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function ls(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function fo(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var po = Re((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), y0 = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !ls(o))
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
  const l = po(t, r);
  if (!u) {
    if (!l.length)
      return null;
    const p = l[l.length - 1];
    return s(p.descriptor.id);
  }
  const f = l.findIndex((p) => p.descriptor.id === u);
  f === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Could not find displaced item in set") : b(!1));
  const c = f - 1;
  if (c < 0)
    return null;
  const d = l[c];
  return s(d.descriptor.id);
}, An = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Ml = {
  point: Me,
  value: 0
}, or = {
  invisible: {},
  visible: {},
  all: []
}, v0 = {
  displaced: or,
  displacedBy: Ml,
  at: null
};
var b0 = v0, ct = (e, t) => (n) => e <= n && n <= t, Ll = (e) => {
  const t = ct(e.top, e.bottom), n = ct(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), s = n(r.left) || n(r.right);
    if (i && s)
      return !0;
    const u = r.top < e.top && r.bottom > e.bottom, l = r.left < e.left && r.right > e.right;
    return u && l ? !0 : u && s || l && i;
  };
}, C0 = (e) => {
  const t = ct(e.top, e.bottom), n = ct(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const cs = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, kl = {
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
var A0 = (e) => (t) => {
  const n = ct(t.top, t.bottom), r = ct(t.left, t.right);
  return (o) => e === cs ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const w0 = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : Me;
  return fr(e, n);
}, _0 = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, S0 = (e, t, n) => n(t)(e), ds = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? w0(e, t) : e;
  return _0(i, t, o) && S0(i, n, o);
}, F0 = (e) => ds({
  ...e,
  isVisibleThroughFrameFn: Ll
}), $l = (e) => ds({
  ...e,
  isVisibleThroughFrameFn: C0
}), N0 = (e) => ds({
  ...e,
  isVisibleThroughFrameFn: A0(e.destination.axis)
}), x0 = (e, t, n) => {
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
function O0(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return pt(ss(n, r));
}
function ir({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(a, u) {
    const l = O0(u, n), f = u.descriptor.id;
    if (a.all.push(f), !F0({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[u.descriptor.id] = !0, a;
    const d = x0(f, i, o), p = {
      draggableId: f,
      shouldAnimate: d
    };
    return a.visible[f] = p, a;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function T0(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function Ya({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = T0(e, {
    inHomeList: t
  });
  return {
    displaced: or,
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
function Qr({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: s,
  forceShouldAnimate: a
}) {
  const u = An(e, n);
  if (s == null)
    return Ya({
      insideDestination: t,
      inHomeList: u,
      displacedBy: o,
      destination: n
    });
  const l = t.find((g) => g.descriptor.index === s);
  if (!l)
    return Ya({
      insideDestination: t,
      inHomeList: u,
      displacedBy: o,
      destination: n
    });
  const f = po(e, t), c = t.indexOf(l), d = f.slice(c);
  return {
    displaced: ir({
      afterDragging: d,
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
function $t(e, t) {
  return !!t.effected[e];
}
var B0 = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = r.draggableId, a = n[i].descriptor.index;
  return $t(i, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, I0 = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, u = t ? a : a + 1;
  return i < s || i > u ? null : i;
}, P0 = ({
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
  if (l || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot move in direction without previous impact location") : b(!1)), l.type === "REORDER") {
    const c = I0({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: i
    });
    return c == null ? null : Qr({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: a,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: c
    });
  }
  const f = B0({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: u
  });
  return f == null ? null : Qr({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: a,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: f
  });
}, R0 = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return $t(n, t) ? o ? Me : Cn(r.point) : o ? r.point : Me;
}, M0 = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = fo(t);
  r || (process.env.NODE_ENV, b(!1));
  const o = r.draggableId, i = n[o].page.borderBox.center, s = R0({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Ve(i, s);
};
const Vl = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, L0 = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, fs = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, Xa = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => on(e.line, t.marginBox[e.end] + Vl(e, n), fs(e, t.marginBox, n)), Ka = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => on(e.line, t.marginBox[e.start] - L0(e, n), fs(e, t.marginBox, n)), k0 = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => on(e.line, t.contentBox[e.start] + Vl(e, n), fs(e, t.contentBox, n));
var $0 = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = sn(r.descriptor.id, n), s = t.page, a = r.axis;
  if (!i.length)
    return k0({
      axis: a,
      moveInto: r.page,
      isMoving: s
    });
  const {
    displaced: u,
    displacedBy: l
  } = e, f = u.all[0];
  if (f) {
    const d = n[f];
    if ($t(f, o))
      return Ka({
        axis: a,
        moveRelativeTo: d.page,
        isMoving: s
      });
    const p = Xr(d.page, l.point);
    return Ka({
      axis: a,
      moveRelativeTo: p,
      isMoving: s
    });
  }
  const c = i[i.length - 1];
  if (c.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if ($t(c.descriptor.id, o)) {
    const d = Xr(c.page, Cn(o.displacedBy.point));
    return Xa({
      axis: a,
      moveRelativeTo: d,
      isMoving: s
    });
  }
  return Xa({
    axis: a,
    moveRelativeTo: c.page,
    isMoving: s
  });
}, Ni = (e, t) => {
  const n = e.frame;
  return n ? Ve(t, n.scroll.diff.displacement) : t;
};
const V0 = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? $0({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : M0({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var mo = (e) => {
  const t = V0(e), n = e.droppable;
  return n ? Ni(n, t) : t;
}, jl = (e, t) => {
  const n = nt(t, e.scroll.initial), r = Cn(n);
  return {
    frame: pt({
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
function Ja(e, t) {
  return e.map((n) => t[n]);
}
function j0(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var G0 = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = jl(t, Ve(t.scroll.current, o)), s = n.frame ? us(n, Ve(n.frame.scroll.current, o)) : n, a = e.displaced, u = ir({
    afterDragging: Ja(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: a,
    forceShouldAnimate: !1
  }), l = ir({
    afterDragging: Ja(a.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), f = {}, c = {}, d = [a, u, l];
  return a.all.forEach((g) => {
    const h = j0(g, d);
    if (h) {
      c[g] = h;
      return;
    }
    f[g] = !0;
  }), {
    ...e,
    displaced: {
      all: a.all,
      invisible: f,
      visible: c
    }
  };
}, z0 = (e, t) => Ve(e.scroll.diff.displacement, t), ps = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = z0(n, e), o = nt(r, t.page.borderBox.center);
  return Ve(t.client.borderBox.center, o);
}, Gl = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = nt(n, e.page.borderBox.center), u = {
    target: fr(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? N0(u) : $l(u);
}, U0 = ({
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
  const l = sn(n.descriptor.id, r), f = An(t, n), c = y0({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || P0({
    isMovingForward: e,
    isInHomeList: f,
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
  const d = mo({
    impact: c,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: u
  });
  if (Gl({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: d,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: ps({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: c,
      scrollJumpRequest: null
    };
  const g = nt(d, s), h = G0({
    impact: c,
    viewport: i,
    destination: n,
    draggables: r,
    maxScrollChange: g
  });
  return {
    clientSelection: a,
    impact: h,
    scrollJumpRequest: g
  };
};
const Ye = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot get clipped area from droppable") : b(!1)), t;
};
var W0 = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, a = ct(i[s.start], i[s.end]), u = co(r).filter((f) => f !== n).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => Ll(o.frame)(Ye(f))).filter((f) => {
    const c = Ye(f);
    return e ? i[s.crossAxisEnd] < c[s.crossAxisEnd] : c[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((f) => {
    const c = Ye(f), d = ct(c[s.start], c[s.end]);
    return a(c[s.start]) || a(c[s.end]) || d(i[s.start]) || d(i[s.end]);
  }).sort((f, c) => {
    const d = Ye(f)[s.crossAxisStart], p = Ye(c)[s.crossAxisStart];
    return e ? d - p : p - d;
  }).filter((f, c, d) => Ye(f)[s.crossAxisStart] === Ye(d[0])[s.crossAxisStart]);
  if (!u.length)
    return null;
  if (u.length === 1)
    return u[0];
  const l = u.filter((f) => ct(Ye(f)[s.start], Ye(f)[s.end])(t[s.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((f, c) => Ye(f)[s.start] - Ye(c)[s.start])[0] : u.sort((f, c) => {
    const d = Ha(t, qa(Ye(f))), p = Ha(t, qa(Ye(c)));
    return d !== p ? d - p : Ye(f)[s.start] - Ye(c)[s.start];
  })[0];
};
const Qa = (e, t) => {
  const n = e.page.borderBox.center;
  return $t(e.descriptor.id, t) ? nt(n, t.displacedBy.point) : n;
}, H0 = (e, t) => {
  const n = e.page.borderBox;
  return $t(e.descriptor.id, t) ? fr(n, Cn(t.displacedBy.point)) : n;
};
var q0 = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => $l({
  target: H0(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, a) => {
  const u = rr(e, Ni(n, Qa(s, o))), l = rr(e, Ni(n, Qa(a, o)));
  return u < l ? -1 : l < u ? 1 : s.descriptor.index - a.descriptor.index;
})[0] || null, pr = Re(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: on(t.line, r)
  };
});
const Y0 = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return on(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], u = sn(e.descriptor.id, n).reduce((l, f) => l + f.client.marginBox[r.size], 0) + t[r.line] - o;
  return u <= 0 ? null : on(r.line, u);
}, zl = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Ul = (e, t, n) => {
  const r = e.frame;
  An(t, e) && (process.env.NODE_ENV !== "production" ? b(!1, "Should not add placeholder space to home list") : b(!1)), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot add placeholder size to a subject when it already has one") : b(!1));
  const o = pr(e.axis, t.displaceBy).point, i = Y0(e, o, n), s = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const f = Dn({
      page: e.subject.page,
      withPlaceholder: s,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: f
    };
  }
  const a = i ? Ve(r.scroll.max, i) : r.scroll.max, u = zl(r, a), l = Dn({
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
}, X0 = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot remove placeholder form subject when there was none") : b(!1));
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
  r || (process.env.NODE_ENV !== "production" ? b(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : b(!1));
  const o = zl(n, r), i = Dn({
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
var K0 = ({
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
      displaced: or,
      displacedBy: Ml,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = mo({
      impact: c,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: a
    }), p = An(r, i) ? i : Ul(i, r, o);
    return Gl({
      draggable: r,
      destination: p,
      newPageBorderBoxCenter: d,
      viewport: s.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? c : null;
  }
  const u = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], l = (() => {
    const c = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || u ? c : c + 1;
  })(), f = pr(i.axis, r.displaceBy);
  return Qr({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: f,
    last: or,
    index: l
  });
}, J0 = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: a
}) => {
  const u = W0({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!u)
    return null;
  const l = sn(u.descriptor.id, o), f = q0({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: u,
    insideDestination: l,
    afterCritical: a
  }), c = K0({
    previousPageBorderBoxCenter: t,
    destination: u,
    draggable: n,
    draggables: o,
    moveRelativeTo: f,
    insideDestination: l,
    viewport: s,
    afterCritical: a
  });
  if (!c)
    return null;
  const d = mo({
    impact: c,
    draggable: n,
    droppable: u,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: ps({
      pageBorderBoxCenter: d,
      draggable: n,
      viewport: s
    }),
    impact: c,
    scrollJumpRequest: null
  };
}, rt = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Q0 = (e, t) => {
  const n = rt(e);
  return n ? t[n] : null;
};
var Z0 = ({
  state: e,
  type: t
}) => {
  const n = Q0(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, a = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const u = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: c,
    droppables: d
  } = e.dimensions;
  return a ? U0({
    isMovingForward: u,
    previousPageBorderBoxCenter: f,
    draggable: l,
    destination: i,
    draggables: c,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : J0({
    isMovingForward: u,
    previousPageBorderBoxCenter: f,
    draggable: l,
    isOver: i,
    draggables: c,
    droppables: d,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function Qt(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Wl(e) {
  const t = ct(e.top, e.bottom), n = ct(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function eD(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function tD({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const s = i.axis, a = on(i.axis.line, e.center[s.line], i.page.borderBox.center[s.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: rr(r, a)
    };
  }).sort((i, s) => s.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function nD({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = co(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !eD(e, i))
      return !1;
    if (Wl(i)(e.center))
      return !0;
    const s = o.axis, a = i.center[s.crossAxisLine], u = e[s.crossAxisStart], l = e[s.crossAxisEnd], f = ct(i[s.crossAxisStart], i[s.crossAxisEnd]), c = f(u), d = f(l);
    return !c && !d ? !0 : c ? u < a : l > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : tD({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const Hl = (e, t) => pt(fr(e, t));
var rD = (e, t) => {
  const n = e.frame;
  return n ? Hl(t, n.scroll.diff.value) : t;
};
function ql({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function oD({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var iD = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = n.axis, u = pr(n.axis, t.displaceBy), l = u.value, f = e[a.start], c = e[a.end], p = po(t, r).find((h) => {
    const m = h.descriptor.id, C = h.page.borderBox.center[a.line], w = $t(m, s), D = ql({
      displaced: o,
      id: m
    });
    return w ? D ? c <= C : f < C - l : D ? c <= C + l : f < C;
  }) || null, g = oD({
    draggable: t,
    closest: p,
    inHomeList: An(t, n)
  });
  return Qr({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: u,
    index: g
  });
};
const sD = 4;
var aD = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, a = pr(r.axis, e.displaceBy), u = a.value, l = t[s.start], f = t[s.end], d = po(e, o).find((g) => {
    const h = g.descriptor.id, m = g.page.borderBox, w = m[s.size] / sD, D = $t(h, i), y = ql({
      displaced: n.displaced,
      id: h
    });
    return D ? y ? f > m[s.start] + w && f < m[s.end] - w : l > m[s.start] - u + w && l < m[s.end] - u - w : y ? f > m[s.start] + u + w && f < m[s.end] + u - w : l > m[s.start] + w && l < m[s.end] - w;
  });
  return d ? {
    displacedBy: a,
    displaced: n.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: d.descriptor.id,
        droppableId: r.descriptor.id
      }
    }
  } : null;
}, Yl = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = Hl(t.page.borderBox, e), u = nD({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!u)
    return b0;
  const l = r[u], f = sn(l.descriptor.id, n), c = rD(l, a);
  return aD({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: f,
    afterCritical: s
  }) || iD({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    destination: l,
    insideDestination: f,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, ms = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const uD = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = rt(e), o = rt(t);
  if (!r || r === o)
    return n;
  const i = n[r];
  if (!i.subject.withPlaceholder)
    return n;
  const s = X0(i);
  return ms(n, s);
};
var lD = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = uD({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = rt(o);
  if (!s)
    return i;
  const a = n[s];
  if (An(e, a) || a.subject.withPlaceholder)
    return i;
  const u = Ul(a, e, t);
  return ms(i, u);
}, Xn = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const s = r || e.viewport, a = n || e.dimensions, u = t || e.current.client.selection, l = nt(u, e.initial.client.selection), f = {
    offset: l,
    selection: u,
    borderBoxCenter: Ve(e.initial.client.borderBoxCenter, l)
  }, c = {
    selection: Ve(f.selection, s.scroll.current),
    borderBoxCenter: Ve(f.borderBoxCenter, s.scroll.current),
    offset: Ve(f.offset, s.scroll.diff.value)
  }, d = {
    client: f,
    page: c
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: a,
      viewport: s,
      current: d
    };
  const p = a.draggables[e.critical.draggable.id], g = o || Yl({
    pageOffset: c.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: s,
    afterCritical: e.afterCritical
  }), h = lD({
    draggable: p,
    impact: g,
    previousImpact: e.impact,
    draggables: a.draggables,
    droppables: a.droppables
  });
  return {
    ...e,
    current: d,
    dimensions: {
      draggables: a.draggables,
      droppables: h
    },
    impact: g,
    viewport: s,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function cD(e, t) {
  return e.map((n) => t[n]);
}
var Xl = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = cD(i.all, n), a = ir({
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
}, Kl = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const s = mo({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return ps({
    pageBorderBoxCenter: s,
    draggable: t,
    viewport: o
  });
}, Jl = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, b(!1));
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: s,
    droppables: a
  } = i, u = s[e.critical.draggable.id], l = rt(r);
  l || (process.env.NODE_ENV !== "production" ? b(!1, "Must be over a destination in SNAP movement mode") : b(!1));
  const f = a[l], c = Xl({
    impact: r,
    viewport: o,
    destination: f,
    draggables: s
  }), d = Kl({
    impact: c,
    draggable: u,
    droppable: f,
    draggables: s,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Xn({
    impact: c,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: o
  });
}, dD = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Ql = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = pr(t.axis, e.displaceBy), i = sn(t.descriptor.id, n), s = i.indexOf(e);
  s === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Expected draggable to be inside home list") : b(!1));
  const a = i.slice(s + 1), u = a.reduce((d, p) => (d[p.descriptor.id] = !0, d), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: u
  };
  return {
    impact: {
      displaced: ir({
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
        destination: dD(e.descriptor)
      }
    },
    afterCritical: l
  };
}, fD = (e, t) => ({
  draggables: e.draggables,
  droppables: ms(e.droppables, t)
});
const mr = (e) => {
  process.env.NODE_ENV;
}, hr = (e) => {
  process.env.NODE_ENV;
};
var pD = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = Xr(e.client, t), o = Kr(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, mD = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Expected Droppable to have a frame") : b(!1)), t;
}, hD = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], u = mD(s).scroll.diff.value, l = Ve(r, u);
    return pD({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, gD = ({
  state: e,
  published: t
}) => {
  mr();
  const n = t.modified.map((C) => {
    const w = e.dimensions.droppables[C.droppableId];
    return us(w, C.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Pl(n)
  }, o = Rl(hD({
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
  }, a = rt(e.impact), u = a ? s.droppables[a] : null, l = s.draggables[e.critical.draggable.id], f = s.droppables[e.critical.droppable.id], {
    impact: c,
    afterCritical: d
  } = Ql({
    draggable: l,
    home: f,
    draggables: i,
    viewport: e.viewport
  }), p = u && u.isCombineEnabled ? e.impact : c, g = Yl({
    pageOffset: e.current.page.offset,
    draggable: s.draggables[e.critical.draggable.id],
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: d
  });
  hr();
  const h = {
    ...e,
    phase: "DRAGGING",
    impact: g,
    onLiftImpact: c,
    dimensions: s,
    afterCritical: d,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? h : {
    ...h,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const xi = (e) => e.movementMode === "SNAP", Lo = (e, t, n) => {
  const r = fD(e.dimensions, t);
  return !xi(e) || n ? Xn({
    state: e,
    dimensions: r
  }) : Jl({
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
const Za = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var DD = (e = Za, t) => {
  if (t.type === "FLUSH")
    return {
      ...Za,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "INITIAL_PUBLISH must come after a IDLE phase") : b(!1));
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
    }, f = {
      client: l,
      page: {
        selection: Ve(l.selection, o.scroll.initial),
        borderBoxCenter: Ve(l.selection, o.scroll.initial),
        offset: Ve(l.selection, o.scroll.diff.value)
      }
    }, c = co(i.droppables).every((h) => !h.isFixedOnPage), {
      impact: d,
      afterCritical: p
    } = Ql({
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
      initial: f,
      current: f,
      isWindowScrollAllowed: c,
      impact: d,
      afterCritical: p,
      onLiftImpact: d,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? b(!1, `Collection cannot start from phase ${e.phase}`) : b(!1)), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? b(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : b(!1)), gD({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Qt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `${t.type} not permitted in phase ${e.phase}`) : b(!1));
    const {
      client: n
    } = t.payload;
    return kt(n, e.current.client.selection) ? e : Xn({
      state: e,
      clientSelection: n,
      impact: xi(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return ko(e);
    Qt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `${t.type} not permitted in phase ${e.phase}`) : b(!1));
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = us(o, r);
    return Lo(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Qt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Attempting to move in an unsupported phase ${e.phase}`) : b(!1));
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find Droppable[id: ${n}] to toggle its enabled state`) : b(!1)), o.isEnabled === r && (process.env.NODE_ENV !== "production" ? b(!1, `Trying to set droppable isEnabled to ${String(r)}
      but it is already ${String(o.isEnabled)}`) : b(!1));
    const i = {
      ...o,
      isEnabled: r
    };
    return Lo(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Qt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Attempting to move in an unsupported phase ${e.phase}`) : b(!1));
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find Droppable[id: ${n}] to toggle its isCombineEnabled state`) : b(!1)), o.isCombineEnabled === r && (process.env.NODE_ENV !== "production" ? b(!1, `Trying to set droppable isCombineEnabled to ${String(r)}
      but it is already ${String(o.isCombineEnabled)}`) : b(!1));
    const i = {
      ...o,
      isCombineEnabled: r
    };
    return Lo(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Qt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot move by window in phase ${e.phase}`) : b(!1)), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? b(!1, "Window scrolling is currently not supported for fixed lists") : b(!1));
    const n = t.payload.newScroll;
    if (kt(e.viewport.scroll.current, n))
      return ko(e);
    const r = jl(e.viewport, n);
    return xi(e) ? Jl({
      state: e,
      viewport: r
    }) : Xn({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Qt(e))
      return e;
    const n = t.payload.maxScroll;
    if (kt(n, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? b(!1, `${t.type} received while not in DRAGGING phase`) : b(!1));
    const n = Z0({
      state: e,
      type: t.type
    });
    return n ? Xn({
      state: e,
      impact: n.impact,
      clientSelection: n.clientSelection,
      scrollJumpRequest: n.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const n = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? b(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : b(!1)), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot animate drop from phase ${e.phase}`) : b(!1)), {
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
const ED = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), yD = (e) => ({
  type: "LIFT",
  payload: e
}), vD = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), bD = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), CD = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), AD = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), wD = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), _D = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Zl = (e) => ({
  type: "MOVE",
  payload: e
}), SD = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), FD = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), ND = () => ({
  type: "MOVE_UP",
  payload: null
}), xD = () => ({
  type: "MOVE_DOWN",
  payload: null
}), OD = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), TD = () => ({
  type: "MOVE_LEFT",
  payload: null
}), hs = () => ({
  type: "FLUSH",
  payload: null
}), BD = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), gs = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), ec = (e) => ({
  type: "DROP",
  payload: e
}), ID = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), tc = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function PD(e) {
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
function RD(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = sn(e.droppable.id, t.draggables);
    PD(n);
  }
}
var MD = (e) => ({
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
  u.phase === "DROP_ANIMATING" && n(gs({
    completed: u.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Unexpected phase to start a drag") : b(!1)), n(hs()), n(ED({
    draggableId: i,
    movementMode: a
  }));
  const f = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: a === "SNAP"
    }
  }, {
    critical: c,
    dimensions: d,
    viewport: p
  } = e.startPublishing(f);
  RD(c, d), n(vD({
    critical: c,
    dimensions: d,
    clientSelection: s,
    movementMode: a,
    viewport: p
  }));
}, LD = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const Ds = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, sr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, nc = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Wt = `${nc.outOfTheWay}s ${Ds.outOfTheWay}`, Kn = {
  fluid: `opacity ${Wt}`,
  snap: `transform ${Wt}, opacity ${Wt}`,
  drop: (e) => {
    const t = `${e}s ${Ds.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Wt}`,
  placeholder: `height ${Wt}, width ${Wt}, margin ${Wt}`
}, eu = (e) => kt(e, Me) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Oi = {
  moveTo: eu,
  drop: (e, t) => {
    const n = eu(e);
    if (n)
      return t ? `${n} scale(${sr.scale.drop})` : n;
  }
}, {
  minDropTime: Ti,
  maxDropTime: rc
} = nc, kD = rc - Ti, tu = 1500, $D = 0.6;
var VD = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = rr(e, t);
  if (r <= 0)
    return Ti;
  if (r >= tu)
    return rc;
  const o = r / tu, i = Ti + kD * o, s = n === "CANCEL" ? i * $D : i;
  return Number(s.toFixed(2));
}, jD = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = n, a = rt(e), u = a ? s[a] : null, l = s[t.descriptor.droppableId], f = Kl({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: u || l,
    viewport: r
  });
  return nt(f, t.client.borderBox.center);
}, GD = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: Xl({
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
    displaced: or
  },
  didDropInsideDroppable: !0
};
const zD = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(ID({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? b(!1, "A DROP action occurred while DROP_PENDING and still waiting") : b(!1)), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot drop in phase: ${o.phase}`) : b(!1));
  const a = o.critical, u = o.dimensions, l = u.draggables[o.critical.draggable.id], {
    impact: f,
    didDropInsideDroppable: c
  } = GD({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = c ? ls(f) : null, p = c ? fo(f) : null, g = {
    index: a.draggable.index,
    droppableId: a.droppable.id
  }, h = {
    draggableId: l.descriptor.id,
    type: l.descriptor.type,
    source: g,
    reason: i,
    mode: o.movementMode,
    destination: d,
    combine: p
  }, m = jD({
    impact: f,
    draggable: l,
    dimensions: u,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), C = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: h,
    impact: f
  };
  if (!(!kt(o.current.client.offset, m) || !!h.combine)) {
    t(gs({
      completed: C
    }));
    return;
  }
  const D = VD({
    current: o.current.client.offset,
    destination: m,
    reason: i
  });
  t(BD({
    newHomeClientOffset: m,
    dropDuration: D,
    completed: C
  }));
};
var UD = zD, oc = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function WD(e) {
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
function HD({
  onWindowScroll: e
}) {
  function t() {
    e(oc());
  }
  const n = tr(t), r = WD(n);
  let o = Lt;
  function i() {
    return o !== Lt;
  }
  function s() {
    i() && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start scroll listener when already active") : b(!1)), o = lt(window, [r]);
  }
  function a() {
    i() || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop scroll listener when not active") : b(!1)), n.cancel(), o(), o = Lt;
  }
  return {
    start: s,
    stop: a,
    isActive: i
  };
}
const qD = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", YD = (e) => {
  const t = HD({
    onWindowScroll: (n) => {
      e.dispatch(SD({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && qD(r) && t.stop(), n(r);
  };
};
var XD = YD, KD = (e) => {
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
}, JD = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((a) => a.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Could not find timer") : b(!1));
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
const QD = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, ZD = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, eE = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, kn = (e, t) => {
  mr(), t(), hr();
}, Nr = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function $o(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = KD(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var tE = (e, t) => {
  const n = JD();
  let r = null;
  const o = (c, d) => {
    r && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : b(!1)), kn("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: c,
        mode: d
      });
    });
  }, i = (c, d) => {
    r && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : b(!1)), kn("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(Nr(c, d));
    });
  }, s = (c, d) => {
    r && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : b(!1));
    const p = Nr(c, d);
    r = {
      mode: d,
      lastCritical: c,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      kn("onDragStart", () => $o(e().onDragStart, p, t, $r.onDragStart));
    });
  }, a = (c, d) => {
    const p = ls(d), g = fo(d);
    r || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onDragMove when onDragStart has not been called") : b(!1));
    const h = !eE(c, r.lastCritical);
    h && (r.lastCritical = c);
    const m = !QD(r.lastLocation, p);
    m && (r.lastLocation = p);
    const C = !ZD(r.lastCombine, g);
    if (C && (r.lastCombine = g), !h && !m && !C)
      return;
    const w = {
      ...Nr(c, r.mode),
      combine: g,
      destination: p
    };
    n.add(() => {
      kn("onDragUpdate", () => $o(e().onDragUpdate, w, t, $r.onDragUpdate));
    });
  }, u = () => {
    r || (process.env.NODE_ENV !== "production" ? b(!1, "Can only flush responders while dragging") : b(!1)), n.flush();
  }, l = (c) => {
    r || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : b(!1)), r = null, kn("onDragEnd", () => $o(e().onDragEnd, c, t, $r.onDragEnd));
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
        ...Nr(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(c);
    }
  };
}, nE = (e, t) => {
  const n = tE(e, t);
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
const rE = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot finish a drop animating when no drop is occurring") : b(!1)), e.dispatch(gs({
    completed: r.completed
  }));
};
var oE = rE;
const iE = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(tc());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = lt(window, [s]);
    });
  };
};
var sE = iE, aE = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, uE = (e) => {
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
const lE = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var cE = (e) => (t) => (n) => (r) => {
  if (lE(r)) {
    e.stop(), n(r);
    return;
  }
  if (r.type === "INITIAL_PUBLISH") {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : b(!1)), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const dE = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(ec({
    reason: r.reason
  })));
};
var fE = dE;
const pE = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Dl;
var mE = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => gl(DD, pE(eg(LD(n), aE(e), MD(e), UD, oE, sE, fE, cE(i), XD, uE(t), nE(r, o))));
const Vo = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function hE({
  registry: e,
  callbacks: t
}) {
  let n = Vo(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, mr();
      const {
        additions: u,
        removals: l,
        modified: f
      } = n, c = Object.keys(u).map((g) => e.draggable.getById(g).getDimension(Me)).sort((g, h) => g.descriptor.index - h.descriptor.index), d = Object.keys(f).map((g) => {
        const m = e.droppable.getById(g).callbacks.getScrollWhileDragging();
        return {
          droppableId: g,
          scroll: m
        };
      }), p = {
        additions: c,
        removals: Object.keys(l),
        modified: d
      };
      n = Vo(), hr(), t.publish(p);
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
      r && (cancelAnimationFrame(r), r = null, n = Vo());
    }
  };
}
var ic = ({
  scrollHeight: e,
  scrollWidth: t,
  height: n,
  width: r
}) => {
  const o = nt({
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
}, sc = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find document.documentElement") : b(!1)), e;
}, ac = () => {
  const e = sc();
  return ic({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, gE = () => {
  const e = oc(), t = ac(), n = e.y, r = e.x, o = sc(), i = o.clientWidth, s = o.clientHeight, a = r + i, u = n + s;
  return {
    frame: pt({
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
}, DE = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  mr();
  const r = gE(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), u = {
    draggables: Rl(a),
    droppables: Pl(s)
  };
  return hr(), {
    dimensions: u,
    critical: e,
    viewport: r
  };
};
function nu(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && Ee(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var EE = (e, t) => {
  let n = null;
  const r = hE({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, p) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : b(!1)), n && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: p
    });
  }, i = (d, p) => {
    n && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : b(!1)), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: p
    }));
  }, s = (d, p) => {
    n && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : b(!1)), t.updateDroppableScroll({
      id: d,
      newScroll: p
    }));
  }, a = (d, p) => {
    n && e.droppable.getById(d).callbacks.scroll(p);
  }, u = () => {
    if (!n)
      return;
    r.stop();
    const d = n.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((p) => p.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, l = (d) => {
    n || (process.env.NODE_ENV !== "production" ? b(!1, "Should only be subscribed when a collection is occurring") : b(!1));
    const p = n.critical.draggable;
    d.type === "ADDITION" && nu(e, p, d.value) && r.add(d.value), d.type === "REMOVAL" && nu(e, p, d.value) && r.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: a,
    updateDroppableScroll: s,
    startPublishing: (d) => {
      n && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start capturing critical dimensions as there is already a collection") : b(!1));
      const p = e.draggable.getById(d.draggableId), g = e.droppable.getById(p.descriptor.droppableId), h = {
        draggable: p.descriptor,
        droppable: g.descriptor
      }, m = e.subscribe(l);
      return n = {
        critical: h,
        unsubscribe: m
      }, DE({
        critical: h,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: u
  };
}, uc = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", yE = (e) => {
  window.scrollBy(e.x, e.y);
};
const vE = Re((e) => co(e).filter((t) => !(!t.isEnabled || !t.frame))), bE = (e, t) => vE(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? b(!1, "Invalid result") : b(!1)), Wl(r.frame.pageMarginBox)(e))) || null;
var CE = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return bE(e, n);
};
const ar = {
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
var AE = (e, t, n = () => ar) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, lc = ({
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
}, Es = 1, wE = (e, t, n = () => ar) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Es;
  const i = 1 - lc({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = r.maxPixelScroll * r.ease(i);
  return Math.ceil(s);
}, _E = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, s = t, a = i, l = Date.now() - s;
  if (l >= i)
    return e;
  if (l < o)
    return Es;
  const f = lc({
    startOfRange: o,
    endOfRange: a,
    current: l
  }), c = e * r.ease(f);
  return Math.ceil(c);
}, ru = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = wE(e, t, o);
  return i === 0 ? 0 : r ? Math.max(_E(i, n, o), Es) : i;
}, ou = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = AE(e, r, i);
  return t[r.end] < t[r.start] ? ru({
    distanceToEdge: t[r.end],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * ru({
    distanceToEdge: t[r.start],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, SE = ({
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
const FE = Il((e) => e === 0 ? 0 : e);
var cc = ({
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
  }, a = ou({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: cs,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), u = ou({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: kl,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = FE({
    x: u,
    y: a
  });
  if (kt(l, Me))
    return null;
  const f = SE({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return f ? kt(f, Me) ? null : f : null;
};
const NE = Il((e) => e === 0 ? 0 : e > 0 ? 1 : -1), ys = (() => {
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
    return kt(i, Me) ? null : i;
  };
})(), dc = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = NE(n), i = ys({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, vs = (e, t) => dc({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), xE = (e, t) => {
  if (!vs(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return ys({
    current: r,
    max: n,
    change: t
  });
}, bs = (e, t) => {
  const n = e.frame;
  return n ? dc({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, OE = (e, t) => {
  const n = e.frame;
  return !n || !bs(e, t) ? null : ys({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var TE = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = cc({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && vs(e, s) ? s : null;
}, BE = ({
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
  const a = cc({
    dragStartTime: r,
    container: s.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && bs(e, a) ? a : null;
}, iu = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, u = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const c = e.viewport, d = TE({
      dragStartTime: t,
      viewport: c,
      subject: u,
      center: s,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: i
    });
    if (d) {
      r(d);
      return;
    }
  }
  const l = CE({
    center: s,
    destination: rt(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const f = BE({
    dragStartTime: t,
    droppable: l,
    subject: u,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  f && o(l.descriptor.id, f);
}, IE = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => ar
}) => {
  const r = tr(e), o = tr(t);
  let i = null;
  const s = (l) => {
    i || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fluid scroll if not dragging") : b(!1));
    const {
      shouldUseTimeDampening: f,
      dragStartTime: c
    } = i;
    iu({
      state: l,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: c,
      shouldUseTimeDampening: f,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (l) => {
      mr(), i && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start auto scrolling when already started") : b(!1));
      const f = Date.now();
      let c = !1;
      const d = () => {
        c = !0;
      };
      iu({
        state: l,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: f,
        shouldUseTimeDampening: c
      }, hr(), c && s(l);
    },
    stop: () => {
      i && (r.cancel(), o.cancel(), i = null);
    },
    scroll: s
  };
}, PE = ({
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
    if (!bs(a, u))
      return u;
    const l = OE(a, u);
    if (!l)
      return t(a.descriptor.id, u), null;
    const f = nt(u, l);
    return t(a.descriptor.id, f), nt(u, f);
  }, i = (a, u, l) => {
    if (!a || !vs(u, l))
      return l;
    const f = xE(u, l);
    if (!f)
      return n(l), null;
    const c = nt(l, f);
    return n(c), nt(l, c);
  };
  return (a) => {
    const u = a.scrollJumpRequest;
    if (!u)
      return;
    const l = rt(a.impact);
    l || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot perform a jump scroll when there is no destination") : b(!1));
    const f = o(a.dimensions.droppables[l], u);
    if (!f)
      return;
    const c = a.viewport, d = i(a.isWindowScrollAllowed, c, f);
    d && r(a, d);
  };
}, RE = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = IE({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = PE({
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
const En = "data-rfd", yn = (() => {
  const e = `${En}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Bi = (() => {
  const e = `${En}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), ME = (() => {
  const e = `${En}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), su = {
  contextId: `${En}-scroll-container-context-id`
}, LE = (e) => (t) => `[${t}="${e}"]`, $n = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), kE = "pointer-events: none;";
var $E = (e) => {
  const t = LE(e), n = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(yn.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: kE,
        dropAnimating: a
      }
    };
  })(), r = (() => {
    const a = `
      transition: ${Kn.outOfTheWay};
    `;
    return {
      selector: t(Bi.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(ME.contextId),
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
    always: $n(s, "always"),
    resting: $n(s, "resting"),
    dragging: $n(s, "dragging"),
    dropAnimating: $n(s, "dropAnimating"),
    userCancel: $n(s, "userCancel")
  };
};
const VE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? _.useLayoutEffect : _.useEffect;
var ot = VE;
const jo = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find the head to append a style to") : b(!1)), e;
}, au = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function jE(e, t) {
  const n = ie(() => $E(e), [e]), r = _.useRef(null), o = _.useRef(null), i = U(Re((c) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot set dynamic style element if it is not set") : b(!1)), d.textContent = c;
  }), []), s = U((c) => {
    const d = r.current;
    d || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot set dynamic style element if it is not set") : b(!1)), d.textContent = c;
  }, []);
  ot(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? b(!1, "style elements already mounted") : b(!1));
    const c = au(t), d = au(t);
    return r.current = c, o.current = d, c.setAttribute(`${En}-always`, e), d.setAttribute(`${En}-dynamic`, e), jo().appendChild(c), jo().appendChild(d), s(n.always), i(n.resting), () => {
      const p = (g) => {
        const h = g.current;
        h || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot unmount ref as it is not set") : b(!1)), jo().removeChild(h), g.current = null;
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
function fc(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var pc = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function gr(e) {
  return e instanceof pc(e).HTMLElement;
}
function mc(e, t) {
  const n = `[${yn.contextId}="${e}"]`, r = fc(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && Ee(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(yn.draggableId) === t);
  return o ? gr(o) ? o : (process.env.NODE_ENV !== "production" && Ee("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Ee(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function GE(e) {
  const t = _.useRef({}), n = _.useRef(null), r = _.useRef(null), o = _.useRef(!1), i = U(function(d, p) {
    const g = {
      id: d,
      focus: p
    };
    return t.current[d] = g, function() {
      const m = t.current;
      m[d] !== g && delete m[d];
    };
  }, []), s = U(function(d) {
    const p = mc(e, d);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = U(function(d, p) {
    n.current === d && (n.current = p);
  }, []), u = U(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const d = n.current;
      d && s(d);
    }));
  }, [s]), l = U(function(d) {
    n.current = null;
    const p = document.activeElement;
    p && p.getAttribute(yn.draggableId) === d && (n.current = d);
  }, []);
  return ot(() => (o.current = !0, function() {
    o.current = !1;
    const d = r.current;
    d && cancelAnimationFrame(d);
  }), []), ie(() => ({
    register: i,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: u,
    tryShiftRecord: a
  }), [i, l, u, a]);
}
function zE() {
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
    t.length && t.forEach((d) => d(c));
  }
  function o(c) {
    return e.draggables[c] || null;
  }
  function i(c) {
    const d = o(c);
    return d || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find draggable entry with id [${c}]`) : b(!1)), d;
  }
  const s = {
    register: (c) => {
      e.draggables[c.descriptor.id] = c, r({
        type: "ADDITION",
        value: c
      });
    },
    update: (c, d) => {
      const p = e.draggables[d.descriptor.id];
      p && p.uniqueId === c.uniqueId && (delete e.draggables[d.descriptor.id], e.draggables[c.descriptor.id] = c);
    },
    unregister: (c) => {
      const d = c.descriptor.id, p = o(d);
      p && c.uniqueId === p.uniqueId && (delete e.draggables[d], e.droppables[c.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: c
      }));
    },
    getById: i,
    findById: o,
    exists: (c) => !!o(c),
    getAllByType: (c) => Object.values(e.draggables).filter((d) => d.descriptor.type === c)
  };
  function a(c) {
    return e.droppables[c] || null;
  }
  function u(c) {
    const d = a(c);
    return d || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find droppable entry with id [${c}]`) : b(!1)), d;
  }
  const l = {
    register: (c) => {
      e.droppables[c.descriptor.id] = c;
    },
    unregister: (c) => {
      const d = a(c.descriptor.id);
      d && c.uniqueId === d.uniqueId && delete e.droppables[c.descriptor.id];
    },
    getById: u,
    findById: a,
    exists: (c) => !!a(c),
    getAllByType: (c) => Object.values(e.droppables).filter((d) => d.descriptor.type === c)
  };
  function f() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: s,
    droppable: l,
    subscribe: n,
    clean: f
  };
}
function UE() {
  const e = ie(zE, []);
  return _.useEffect(() => function() {
    E.version.startsWith("16") || E.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Cs = E.createContext(null), ur = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find document.body") : b(!1)), e;
};
const WE = {
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
var HE = WE;
const qE = (e) => `rfd-announcement-${e}`;
function YE(e) {
  const t = ie(() => qE(e), [e]), n = _.useRef(null);
  return _.useEffect(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), mn(i.style, HE), ur().appendChild(i), function() {
      setTimeout(function() {
        const u = ur();
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
let XE = 0;
const hc = {
  separator: "::"
};
function KE(e, t = hc) {
  return ie(() => `${e}${t.separator}${XE++}`, [t.separator, e]);
}
function JE(e, t = hc) {
  const n = E.useId();
  return ie(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var As = "useId" in E ? JE : KE;
function QE({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function ZE({
  contextId: e,
  text: t
}) {
  const n = As("hidden-text", {
    separator: "-"
  }), r = ie(() => QE({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return _.useEffect(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", ur().appendChild(i), function() {
      const a = ur();
      a.contains(i) && a.removeChild(i);
    };
  }, [r, t]), r;
}
var ho = E.createContext(null), ey = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const ty = /(\d+)\.(\d+)\.(\d+)/, uu = (e) => {
  const t = ty.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? b(!1, `Unable to parse React version ${e}`) : b(!1));
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, ny = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var ry = (e, t) => {
  const n = uu(e), r = uu(t);
  ny(n, r) || process.env.NODE_ENV !== "production" && Ee(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Go = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var oy = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && Ee(`
      No <!doctype html> found.

      ${Go}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && Ee(`
      Unexpected <!doctype> found: (${t.name})

      ${Go}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && Ee(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Go}
    `);
};
function ws(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Dr(e, t) {
  ws(() => {
    _.useEffect(() => {
      try {
        e();
      } catch (n) {
        Fi(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function iy() {
  Dr(() => {
    ry(ey.react, E.version), oy(document);
  }, []);
}
function _s(e) {
  const t = _.useRef(e);
  return _.useEffect(() => {
    t.current = e;
  }), t;
}
function sy() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(s) {
    return s === e;
  }
  function r(s) {
    e && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot claim lock as it is already claimed") : b(!1));
    const a = {
      abandon: s
    };
    return e = a, a;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot release lock when there is no lock") : b(!1)), e = null;
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
function lr(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const ay = 9, uy = 13, Ss = 27, gc = 32, ly = 33, cy = 34, dy = 35, fy = 36, py = 37, my = 38, hy = 39, gy = 40, Dy = {
  [uy]: !0,
  [ay]: !0
};
var Dc = (e) => {
  Dy[e.keyCode] && e.preventDefault();
};
const Ey = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var go = Ey;
const Ec = 0, lu = 5;
function yy(e, t) {
  return Math.abs(t.x - e.x) >= lu || Math.abs(t.y - e.y) >= lu;
}
const cu = {
  type: "IDLE"
};
function vy({
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
      if (i !== Ec)
        return;
      const u = {
        x: s,
        y: a
      }, l = n();
      if (l.type === "DRAGGING") {
        o.preventDefault(), l.actions.move(u);
        return;
      }
      l.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot be IDLE") : b(!1));
      const f = l.point;
      if (!yy(f, u))
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
      if (o.keyCode === Ss) {
        o.preventDefault(), e();
        return;
      }
      Dc(o);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Unexpected phase") : b(!1)), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: go,
    fn: e
  }];
}
function by(e) {
  const t = _.useRef(cu), n = _.useRef(Lt), r = ie(() => ({
    eventName: "mousedown",
    fn: function(c) {
      if (c.defaultPrevented || c.button !== Ec || c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)
        return;
      const d = e.findClosestDraggableId(c);
      if (!d)
        return;
      const p = e.tryGetLock(d, s, {
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
    fn: (f) => {
      if (f.defaultPrevented)
        return;
      const c = e.findClosestDraggableId(f);
      if (!c)
        return;
      const d = e.findOptionsForDraggable(c);
      d && (d.shouldRespectForcePress || e.canGetLock(c) && f.preventDefault());
    }
  }), [e]), i = U(function() {
    const c = {
      passive: !1,
      capture: !0
    };
    n.current = lt(window, [o, r], c);
  }, [o, r]), s = U(() => {
    t.current.type !== "IDLE" && (t.current = cu, n.current(), i());
  }, [i]), a = U(() => {
    const f = t.current;
    s(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [s]), u = U(function() {
    const c = {
      capture: !0,
      passive: !1
    }, d = vy({
      cancel: a,
      completed: s,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = lt(window, d, c);
  }, [a, s]), l = U(function(c, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected to move from IDLE to PENDING drag") : b(!1)), t.current = {
      type: "PENDING",
      point: d,
      actions: c
    }, u();
  }, [u]);
  ot(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function Cy() {
}
const Ay = {
  [cy]: !0,
  [ly]: !0,
  [fy]: !0,
  [dy]: !0
};
function wy(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Ss) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === gc) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === gy) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === my) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === hy) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === py) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Ay[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Dc(o);
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
    eventName: go,
    fn: n
  }];
}
function _y(e) {
  const t = _.useRef(Cy), n = ie(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== gc)
        return;
      const s = e.findClosestDraggableId(i);
      if (!s)
        return;
      const a = e.tryGetLock(s, f, {
        sourceEvent: i
      });
      if (!a)
        return;
      i.preventDefault();
      let u = !0;
      const l = a.snapLift();
      t.current();
      function f() {
        u || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop capturing a keyboard drag when not capturing") : b(!1)), u = !1, t.current(), r();
      }
      t.current = lt(window, wy(l, f), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = U(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = lt(window, [n], i);
  }, [n]);
  ot(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const zo = {
  type: "IDLE"
}, Sy = 120, Fy = 0.15;
function Ny({
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
      n.keyCode === Ss && n.preventDefault(), e();
    }
  }, {
    eventName: go,
    fn: e
  }];
}
function xy({
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
      o.type === "IDLE" && (process.env.NODE_ENV, b(!1));
      const i = r.touches[0];
      if (!i || !(i.force >= Fy))
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
    eventName: go,
    fn: e
  }];
}
function Oy(e) {
  const t = _.useRef(zo), n = _.useRef(Lt), r = U(function() {
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
      const h = e.tryGetLock(g, a, {
        sourceEvent: p
      });
      if (!h)
        return;
      const m = p.touches[0], {
        clientX: C,
        clientY: w
      } = m, D = {
        x: C,
        y: w
      };
      n.current(), c(h, D);
    }
  }), [e]), s = U(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = lt(window, [i], p);
  }, [i]), a = U(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(zo), n.current(), s());
  }, [s, o]), u = U(() => {
    const d = t.current;
    a(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [a]), l = U(function() {
    const p = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: u,
      completed: a,
      getPhase: r
    }, h = lt(window, xy(g), p), m = lt(window, Ny(g), p);
    n.current = function() {
      h(), m();
    };
  }, [u, r, a]), f = U(function() {
    const p = r();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? b(!1, `Cannot start dragging from phase ${p.type}`) : b(!1));
    const g = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: g,
      hasMoved: !1
    });
  }, [r, o]), c = U(function(p, g) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected to move from IDLE to PENDING drag") : b(!1));
    const h = setTimeout(f, Sy);
    o({
      type: "PENDING",
      point: g,
      actions: p,
      longPressTimerId: h
    }), l();
  }, [l, r, o, f]);
  ot(function() {
    return s(), function() {
      n.current();
      const g = r();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), o(zo));
    };
  }, [r, s, o]), ot(function() {
    return lt(window, [{
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
function Ty(e) {
  ws(() => {
    const t = _s(e);
    Dr(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot change the amount of sensor hooks after mounting") : b(!1));
    });
  });
}
const By = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function yc(e, t) {
  if (t == null)
    return !1;
  if (By.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : yc(e, t.parentElement);
}
function Iy(e, t) {
  const n = t.target;
  return gr(n) ? yc(e, n) : !1;
}
var Py = (e) => pt(e.getBoundingClientRect()).center;
function Ry(e) {
  return e instanceof pc(e).Element;
}
const My = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function vc(e, t) {
  return e == null ? null : e[My](t) ? e : vc(e.parentElement, t);
}
function Ly(e, t) {
  return e.closest ? e.closest(t) : vc(e, t);
}
function ky(e) {
  return `[${yn.contextId}="${e}"]`;
}
function $y(e, t) {
  const n = t.target;
  if (!Ry(n))
    return process.env.NODE_ENV !== "production" && Ee("event.target must be a Element"), null;
  const r = ky(e), o = Ly(n, r);
  return o ? gr(o) ? o : (process.env.NODE_ENV !== "production" && Ee("drag handle must be a HTMLElement"), null) : null;
}
function Vy(e, t) {
  const n = $y(e, t);
  return n ? n.getAttribute(yn.draggableId) : null;
}
function jy(e, t) {
  const n = `[${Bi.contextId}="${e}"]`, o = fc(document, n).find((i) => i.getAttribute(Bi.id) === t);
  return o ? gr(o) ? o : (process.env.NODE_ENV !== "production" && Ee("Draggable element is not a HTMLElement"), null) : null;
}
function Gy(e) {
  e.preventDefault();
}
function xr({
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
function bc({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !uc(t.getState(), r)) : (process.env.NODE_ENV !== "production" && Ee(`Unable to find draggable with id: ${r}`), !1);
}
function zy({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s
}) {
  if (!bc({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const u = r.draggable.getById(o), l = jy(t, u.descriptor.id);
  if (!l)
    return process.env.NODE_ENV !== "production" && Ee(`Unable to find draggable element with id: ${o}`), null;
  if (s && !u.options.canDragInteractiveElements && Iy(l, s))
    return null;
  const f = e.claim(i || Lt);
  let c = "PRE_DRAG";
  function d() {
    return u.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function g(v, S) {
    xr({
      expected: v,
      phase: c,
      isLockActive: p,
      shouldWarn: !0
    }) && n.dispatch(S());
  }
  const h = g.bind(null, "DRAGGING");
  function m(v) {
    function S() {
      e.release(), c = "COMPLETED";
    }
    c !== "PRE_DRAG" && (S(), process.env.NODE_ENV !== "production" ? b(!1, `Cannot lift in phase ${c}`) : b(!1)), n.dispatch(yD(v.liftActionArgs)), c = "DRAGGING";
    function N(P, M = {
      shouldBlockNextClick: !1
    }) {
      if (v.cleanup(), M.shouldBlockNextClick) {
        const O = lt(window, [{
          eventName: "click",
          fn: Gy,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(O);
      }
      S(), n.dispatch(ec({
        reason: P
      }));
    }
    return {
      isActive: () => xr({
        expected: "DRAGGING",
        phase: c,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (P) => N("DROP", P),
      cancel: (P) => N("CANCEL", P),
      ...v.actions
    };
  }
  function C(v) {
    const S = tr((P) => {
      h(() => Zl({
        client: P
      }));
    });
    return {
      ...m({
        liftActionArgs: {
          id: o,
          clientSelection: v,
          movementMode: "FLUID"
        },
        cleanup: () => S.cancel(),
        actions: {
          move: S
        }
      }),
      move: S
    };
  }
  function w() {
    const v = {
      moveUp: () => h(ND),
      moveRight: () => h(OD),
      moveDown: () => h(xD),
      moveLeft: () => h(TD)
    };
    return m({
      liftActionArgs: {
        id: o,
        clientSelection: Py(l),
        movementMode: "SNAP"
      },
      cleanup: Lt,
      actions: v
    });
  }
  function D() {
    xr({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => xr({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: C,
    snapLift: w,
    abort: D
  };
}
const Uy = [by, _y, Oy];
function Wy({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? Uy : [], ...r || []], s = _.useState(() => sy())[0], a = U(function(m, C) {
    lr(m) && !lr(C) && s.tryAbandon();
  }, [s]);
  ot(function() {
    let m = t.getState();
    return t.subscribe(() => {
      const w = t.getState();
      a(m, w), m = w;
    });
  }, [s, t, a]), ot(() => s.tryAbandon, [s.tryAbandon]);
  const u = U((h) => bc({
    lockAPI: s,
    registry: n,
    store: t,
    draggableId: h
  }), [s, n, t]), l = U((h, m, C) => zy({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: m || null,
    sourceEvent: C && C.sourceEvent ? C.sourceEvent : null
  }), [e, s, n, t]), f = U((h) => Vy(e, h), [e]), c = U((h) => {
    const m = n.draggable.findById(h);
    return m ? m.options : null;
  }, [n.draggable]), d = U(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(hs()));
  }, [s, t]), p = U(() => s.isClaimed(), [s]), g = ie(() => ({
    canGetLock: u,
    tryGetLock: l,
    findClosestDraggableId: f,
    findOptionsForDraggable: c,
    tryReleaseLock: d,
    isLockClaimed: p
  }), [u, l, f, c, d, p]);
  Ty(i);
  for (let h = 0; h < i.length; h++)
    i[h](g);
}
const Hy = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    E.version.startsWith("16") || E.version.startsWith("17") ? n() : Vi.flushSync(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), qy = (e) => ({
  ...ar,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...ar.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Vn(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find store from lazy ref") : b(!1)), e.current;
}
function Yy(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = _.useRef(null);
  iy();
  const a = _s(e), u = U(() => Hy(a.current), [a]), l = U(() => qy(a.current), [a]), f = YE(t), c = ZE({
    contextId: t,
    text: i
  }), d = jE(t, o), p = U((O) => {
    Vn(s).dispatch(O);
  }, []), g = ie(() => va({
    publishWhileDragging: bD,
    updateDroppableScroll: AD,
    updateDroppableIsEnabled: wD,
    updateDroppableIsCombineEnabled: _D,
    collectionStarting: CD
  }, p), [p]), h = UE(), m = ie(() => EE(h, g), [h, g]), C = ie(() => RE({
    scrollWindow: yE,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: l,
    ...va({
      move: Zl
    }, p)
  }), [m.scrollDroppable, p, l]), w = GE(t), D = ie(() => mE({
    announce: f,
    autoScroller: C,
    dimensionMarshal: m,
    focusMarshal: w,
    getResponders: u,
    styleMarshal: d
  }), [f, C, m, w, u, d]);
  process.env.NODE_ENV !== "production" && s.current && s.current !== D && process.env.NODE_ENV !== "production" && Ee("unexpected store change"), s.current = D;
  const y = U(() => {
    const O = Vn(s);
    O.getState().phase !== "IDLE" && O.dispatch(hs());
  }, []), v = U(() => {
    const O = Vn(s).getState();
    return O.phase === "DROP_ANIMATING" ? !0 : O.phase === "IDLE" ? !1 : O.isDragging;
  }, []), S = ie(() => ({
    isDragging: v,
    tryAbort: y
  }), [v, y]);
  n(S);
  const N = U((O) => uc(Vn(s).getState(), O), []), P = U(() => Qt(Vn(s).getState()), []), M = ie(() => ({
    marshal: m,
    focus: w,
    contextId: t,
    canLift: N,
    isMovementAllowed: P,
    dragHandleUsageInstructionsId: c,
    registry: h
  }), [t, m, c, w, N, P, h]);
  return Wy({
    contextId: t,
    store: D,
    registry: h,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), _.useEffect(() => y, [y]), E.createElement(ho.Provider, {
    value: M
  }, E.createElement(Ug, {
    context: Cs,
    store: D
  }, e.children));
}
let Xy = 0;
function Ky() {
  return ie(() => `${Xy++}`, []);
}
function Jy() {
  return E.useId();
}
var Qy = "useId" in E ? Jy : Ky;
function Zy(e) {
  const t = Qy(), n = e.dragHandleUsageInstructions || $r.dragHandleUsageInstructions;
  return E.createElement(a0, null, (r) => E.createElement(Yy, {
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
const du = {
  dragging: 5e3,
  dropAnimating: 4500
}, ev = (e, t) => t ? Kn.drop(t.duration) : e ? Kn.snap : Kn.fluid, tv = (e, t) => {
  if (e)
    return t ? sr.opacity.drop : sr.opacity.combining;
}, nv = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function rv(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, a = nv(e), u = !!i, l = u ? Oi.drop(r, s) : Oi.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: ev(a, i),
    transform: l,
    opacity: tv(s, u),
    zIndex: u ? du.dropAnimating : du.dragging,
    pointerEvents: "none"
  };
}
function ov(e) {
  return {
    transform: Oi.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function iv(e) {
  return e.type === "DRAGGING" ? rv(e) : ov(e);
}
function sv(e, t, n = Me) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Nl(o, r), s = Kr(i, n), a = {
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
function av(e) {
  const t = As("draggable"), {
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
    return g || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot get dimension when no ref is set") : b(!1)), sv(n, g, p);
  }, [n, o]), f = ie(() => ({
    uniqueId: t,
    descriptor: n,
    options: u,
    getDimension: l
  }), [n, l, u, t]), c = _.useRef(f), d = _.useRef(!0);
  ot(() => (r.draggable.register(c.current), () => r.draggable.unregister(c.current)), [r.draggable]), ot(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const p = c.current;
    c.current = f, r.draggable.update(f, p);
  }, [f, r.draggable]);
}
var Fs = E.createContext(null);
function Cc(e) {
  e && gr(e) || (process.env.NODE_ENV !== "production" ? b(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : b(!1));
}
function uv(e, t, n) {
  Dr(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? b(!1, "Draggable requires a draggableId") : b(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? b(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : b(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? b(!1, `${r(o)} requires an integer index prop`) : b(!1)), e.mapped.type !== "DRAGGING" && (Cc(n()), e.isEnabled && (mc(t, o) || (process.env.NODE_ENV !== "production" ? b(!1, `${r(o)} Unable to find drag handle`) : b(!1))));
  });
}
function lv(e) {
  ws(() => {
    const t = _.useRef(e);
    Dr(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? b(!1, "Draggable isClone prop value changed during component life") : b(!1));
    }, [e]);
  });
}
function Zr(e) {
  const t = _.useContext(e);
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find required context") : b(!1)), t;
}
function cv(e) {
  e.preventDefault();
}
const dv = (e) => {
  const t = _.useRef(null), n = U((S = null) => {
    t.current = S;
  }, []), r = U(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = Zr(ho), {
    type: a,
    droppableId: u
  } = Zr(Fs), l = ie(() => ({
    id: e.draggableId,
    index: e.index,
    type: a,
    droppableId: u
  }), [e.draggableId, e.index, a, u]), {
    children: f,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: p,
    canDragInteractiveElements: g,
    isClone: h,
    mapped: m,
    dropAnimationFinished: C
  } = e;
  if (uv(e, o, r), lv(h), !h) {
    const S = ie(() => ({
      descriptor: l,
      registry: s,
      getDraggableRef: r,
      canDragInteractiveElements: g,
      shouldRespectForcePress: p,
      isEnabled: d
    }), [l, s, r, g, p, d]);
    av(S);
  }
  const w = ie(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: cv
  } : null, [o, i, c, d]), D = U((S) => {
    m.type === "DRAGGING" && m.dropping && S.propertyName === "transform" && (E.version.startsWith("16") || E.version.startsWith("17") ? C() : Vi.flushSync(C));
  }, [C, m]), y = ie(() => {
    const S = iv(m), N = m.type === "DRAGGING" && m.dropping ? D : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: S,
        onTransitionEnd: N
      },
      dragHandleProps: w
    };
  }, [o, w, c, m, D, n]), v = ie(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return E.createElement(E.Fragment, null, f(y, m.snapshot, v));
};
var fv = dv, Ac = (e, t) => e === t, wc = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const pv = (e) => e.combine ? e.combine.draggableId : null, mv = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function hv() {
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
  })), n = Re((o, i, s, a, u = null, l = null, f = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: u,
      combineWith: l,
      mode: i,
      offset: o,
      dimension: s,
      forceShouldAnimate: f,
      snapshot: t(i, a, u, l, null)
    }
  }));
  return (o, i) => {
    if (lr(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, a = o.dimensions.draggables[i.draggableId], u = rt(o.impact), l = mv(o.impact), f = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, a, i.isClone, u, l, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const a = i.isClone, u = o.dimensions.draggables[i.draggableId], l = s.result, f = l.mode, c = wc(l), d = pv(l), g = {
        duration: o.dropDuration,
        curve: Ds.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? sr.opacity.drop : null,
        scale: d ? sr.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: u,
          dropping: g,
          draggingOver: c,
          combineWith: d,
          mode: f,
          forceShouldAnimate: null,
          snapshot: t(f, a, c, d, g)
        }
      };
    }
    return null;
  };
}
function _c(e = null) {
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
const gv = {
  mapped: {
    type: "SECONDARY",
    offset: Me,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: _c(null)
  }
};
function Dv() {
  const e = Re((s, a) => ({
    x: s,
    y: a
  })), t = Re(_c), n = Re((s, a = null, u) => ({
    mapped: {
      type: "SECONDARY",
      offset: s,
      combineTargetFor: a,
      shouldAnimateDisplacement: u,
      snapshot: t(a)
    }
  })), r = (s) => s ? n(Me, s, !0) : null, o = (s, a, u, l) => {
    const f = u.displaced.visible[s], c = !!(l.inVirtualList && l.effected[s]), d = fo(u), p = d && d.draggableId === s ? a : null;
    if (!f) {
      if (!c)
        return r(p);
      if (u.displaced.invisible[s])
        return null;
      const m = Cn(l.displacedBy.point), C = e(m.x, m.y);
      return n(C, p, !0);
    }
    if (c)
      return r(p);
    const g = u.displacedBy.point, h = e(g.x, g.y);
    return n(h, p, f.shouldAnimate);
  };
  return (s, a) => {
    if (lr(s))
      return s.critical.draggable.id === a.draggableId ? null : o(a.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const u = s.completed;
      return u.result.draggableId === a.draggableId ? null : o(a.draggableId, u.result.draggableId, u.impact, u.afterCritical);
    }
    return null;
  };
}
const Ev = () => {
  const e = hv(), t = Dv();
  return (r, o) => e(r, o) || t(r, o) || gv;
}, yv = {
  dropAnimationFinished: tc
}, vv = Sl(Ev, yv, null, {
  context: Cs,
  areStatePropsEqual: Ac
})(fv);
var bv = vv;
function Sc(e) {
  return Zr(Fs).isUsingCloneFor === e.draggableId && !e.isClone ? null : E.createElement(bv, e);
}
function Cv(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return E.createElement(Sc, mn({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const Ns = (e) => (t) => e === t, Av = Ns("scroll"), wv = Ns("auto"), _v = Ns("visible"), fu = (e, t) => t(e.overflowX) || t(e.overflowY), Sv = (e, t) => t(e.overflowX) && t(e.overflowY), Fc = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return fu(n, Av) || fu(n, wv);
}, Fv = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = ur(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, b(!1)), !Fc(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return Sv(r, _v) || process.env.NODE_ENV !== "production" && Ee(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Nc = (e) => e == null ? null : e === document.body ? Fv() ? e : null : e === document.documentElement ? null : Fc(e) ? e : Nc(e.parentElement);
var xc = Nc, Nv = (e) => {
  !e || !xc(e.parentElement) || process.env.NODE_ENV !== "production" && Ee(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Ii = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Oc = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Oc(e.parentElement) : !1;
var xv = (e) => {
  const t = xc(e), n = Oc(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, Ov = ({
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
      scrollSize: d,
      client: p
    } = a, g = ic({
      scrollHeight: d.scrollHeight,
      scrollWidth: d.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: a.page.marginBox,
      frameClient: p,
      scrollSize: d,
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
  })(), l = o === "vertical" ? cs : kl, f = Dn({
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
    subject: f
  };
};
const Tv = (e, t) => {
  const n = xl(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, s = o + t.scrollWidth, u = ss({
    top: r,
    right: s,
    bottom: i,
    left: o
  }, n.border);
  return as({
    borderBox: u,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var Bv = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: a
}) => {
  const u = n.closestScrollable, l = Tv(e, u), f = Kr(l, r), c = (() => {
    if (!u)
      return null;
    const p = xl(u), g = {
      scrollHeight: u.scrollHeight,
      scrollWidth: u.scrollWidth
    };
    return {
      client: p,
      page: Kr(p, r),
      scroll: Ii(u),
      scrollSize: g,
      shouldClipSubject: a
    };
  })();
  return Ov({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: s,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: l,
    page: f,
    closest: c
  });
};
const Iv = {
  passive: !1
}, Pv = {
  passive: !0
};
var pu = (e) => e.shouldPublishImmediately ? Iv : Pv;
const Or = (e) => e && e.env.closestScrollable || null;
function Rv(e) {
  const t = _.useRef(null), n = Zr(ho), r = As("droppable"), {
    registry: o,
    marshal: i
  } = n, s = _s(e), a = ie(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), u = _.useRef(a), l = ie(() => Re((y, v) => {
    t.current || (process.env.NODE_ENV !== "production" ? b(!1, "Can only update scroll when dragging") : b(!1));
    const S = {
      x: y,
      y: v
    };
    i.updateDroppableScroll(a.id, S);
  }), [a.id, i]), f = U(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Me : Ii(y.env.closestScrollable);
  }, []), c = U(() => {
    const y = f();
    l(y.x, y.y);
  }, [f, l]), d = ie(() => tr(c), [c]), p = U(() => {
    const y = t.current, v = Or(y);
    if (y && v || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find scroll options while scrolling") : b(!1)), y.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), g = U((y, v) => {
    t.current && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot collect a droppable while a drag is occurring") : b(!1));
    const S = s.current, N = S.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot collect without a droppable ref") : b(!1));
    const P = xv(N), M = {
      ref: N,
      descriptor: a,
      env: P,
      scrollOptions: v
    };
    t.current = M;
    const O = Bv({
      ref: N,
      descriptor: a,
      env: P,
      windowScroll: y,
      direction: S.direction,
      isDropDisabled: S.isDropDisabled,
      isCombineEnabled: S.isCombineEnabled,
      shouldClipSubject: !S.ignoreContainerClipping
    }), L = P.closestScrollable;
    return L && (L.setAttribute(su.contextId, n.contextId), L.addEventListener("scroll", p, pu(M.scrollOptions)), process.env.NODE_ENV !== "production" && Nv(L)), O;
  }, [n.contextId, a, p, s]), h = U(() => {
    const y = t.current, v = Or(y);
    return y && v || (process.env.NODE_ENV !== "production" ? b(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : b(!1)), Ii(v);
  }, []), m = U(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop drag when no active drag") : b(!1));
    const v = Or(y);
    t.current = null, v && (d.cancel(), v.removeAttribute(su.contextId), v.removeEventListener("scroll", p, pu(y.scrollOptions)));
  }, [p, d]), C = U((y) => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot scroll when there is no drag") : b(!1));
    const S = Or(v);
    S || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot scroll a droppable with no closest scrollable") : b(!1)), S.scrollTop += y.y, S.scrollLeft += y.x;
  }, []), w = ie(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: h,
    dragStopped: m,
    scroll: C
  }), [m, g, h, C]), D = ie(() => ({
    uniqueId: r,
    descriptor: a,
    callbacks: w
  }), [w, a, r]);
  ot(() => (u.current = D.descriptor, o.droppable.register(D), () => {
    t.current && (process.env.NODE_ENV !== "production" && Ee("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(D);
  }), [w, a, m, D, i, o.droppable]), ot(() => {
    t.current && i.updateDroppableIsEnabled(u.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), ot(() => {
    t.current && i.updateDroppableIsCombineEnabled(u.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Uo() {
}
const mu = {
  width: 0,
  height: 0,
  margin: m0
}, Mv = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? mu : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Lv = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = Mv({
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
    transition: n !== "none" ? Kn.placeholder : null
  };
}, kv = (e) => {
  const t = _.useRef(null), n = U(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [a, u] = _.useState(e.animate === "open");
  _.useEffect(() => a ? r !== "open" ? (n(), u(!1), Uo) : t.current ? Uo : (t.current = setTimeout(() => {
    t.current = null, u(!1);
  }), n) : Uo, [r, a, n]);
  const l = U((c) => {
    c.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), f = Lv({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return E.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": s,
    onTransitionEnd: l,
    ref: e.innerRef
  });
};
var $v = E.memo(kv);
function Wo(e) {
  return typeof e == "boolean";
}
function Ho(e, t) {
  t.forEach((n) => n(e));
}
const Vv = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? b(!1, "A Droppable requires a droppableId prop") : b(!1)), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? b(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : b(!1));
}, function({
  props: t
}) {
  Wo(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? b(!1, "isDropDisabled must be a boolean") : b(!1)), Wo(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? b(!1, "isCombineEnabled must be a boolean") : b(!1)), Wo(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? b(!1, "ignoreContainerClipping must be a boolean") : b(!1));
}, function({
  getDroppableRef: t
}) {
  Cc(t());
}], jv = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && Ee(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Gv = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? b(!1, "Must provide a clone render function (renderClone) for virtual lists") : b(!1));
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? b(!1, "Expected virtual list to not have a placeholder") : b(!1));
}];
function zv(e) {
  Dr(() => {
    Ho(e, Vv), e.props.mode === "standard" && Ho(e, jv), e.props.mode === "virtual" && Ho(e, Gv);
  });
}
class Uv extends E.PureComponent {
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
const Wv = (e) => {
  const t = _.useContext(ho);
  t || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find app context") : b(!1));
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = _.useRef(null), i = _.useRef(null), {
    children: s,
    droppableId: a,
    type: u,
    mode: l,
    direction: f,
    ignoreContainerClipping: c,
    isDropDisabled: d,
    isCombineEnabled: p,
    snapshot: g,
    useClone: h,
    updateViewportMaxScroll: m,
    getContainerForClone: C
  } = e, w = U(() => o.current, []), D = U((R = null) => {
    o.current = R;
  }, []), y = U(() => i.current, []), v = U((R = null) => {
    i.current = R;
  }, []);
  zv({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const S = U(() => {
    r() && m({
      maxScroll: ac()
    });
  }, [r, m]);
  Rv({
    droppableId: a,
    type: u,
    mode: l,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: p,
    ignoreContainerClipping: c,
    getDroppableRef: w
  });
  const N = ie(() => E.createElement(Uv, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: R,
    data: T,
    animate: j
  }) => E.createElement($v, {
    placeholder: T,
    onClose: R,
    innerRef: v,
    animate: j,
    contextId: n,
    onTransitionEnd: S
  })), [n, S, e.placeholder, e.shouldAnimatePlaceholder, v]), P = ie(() => ({
    innerRef: D,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": n
    }
  }), [n, a, N, D]), M = h ? h.dragging.draggableId : null, O = ie(() => ({
    droppableId: a,
    type: u,
    isUsingCloneFor: M
  }), [a, M, u]);
  function L() {
    if (!h)
      return null;
    const {
      dragging: R,
      render: T
    } = h, j = E.createElement(Sc, {
      draggableId: R.draggableId,
      index: R.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (H, J) => T(H, J, R));
    return Kc.createPortal(j, C());
  }
  return E.createElement(Fs.Provider, {
    value: O
  }, s(P, g), L());
};
var Hv = Wv;
function qv() {
  return document.body || (process.env.NODE_ENV !== "production" ? b(!1, "document.body is not ready") : b(!1)), document.body;
}
const hu = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: qv
}, Tc = (e) => {
  let t = {
    ...e
  }, n;
  for (n in hu)
    e[n] === void 0 && (t = {
      ...t,
      [n]: hu[n]
    });
  return t;
}, qo = (e, t) => e === t.droppable.type, gu = (e, t) => t.draggables[e.draggable.id], Yv = () => {
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
  })), r = Re((i, s, a, u, l, f) => {
    const c = l.descriptor.id;
    if (l.descriptor.droppableId === i) {
      const g = f ? {
        render: f,
        dragging: n(l.descriptor)
      } : null, h = {
        isDraggingOver: a,
        draggingOverWith: a ? c : null,
        draggingFromThisWith: c,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: h,
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
    const a = Tc(s), u = a.droppableId, l = a.type, f = !a.isDropDisabled, c = a.renderClone;
    if (lr(i)) {
      const d = i.critical;
      if (!qo(l, d))
        return t;
      const p = gu(d, i.dimensions), g = rt(i.impact) === u;
      return r(u, f, g, g, p, c);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!qo(l, d.critical))
        return t;
      const p = gu(d.critical, i.dimensions);
      return r(u, f, wc(d.result) === u, rt(d.impact) === u, p, c);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!qo(l, d.critical))
        return t;
      const p = rt(d.impact) === u, g = !!(d.impact.at && d.impact.at.type === "COMBINE"), h = d.critical.droppable.id === u;
      return p ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, Xv = {
  updateViewportMaxScroll: FD
}, Kv = Sl(Yv, Xv, (e, t, n) => ({
  ...Tc(n),
  ...e,
  ...t
}), {
  context: Cs,
  areStatePropsEqual: Ac
})(Hv);
var Jv = Kv;
const Qv = (e) => /* @__PURE__ */ _.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ _.createElement("path", { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 000 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 00576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" })), en = (e, t, n, r, o) => {
  if (!r)
    throw new Error(o ?? `Invalid property path: ${t}
Couldn't access "${n}" in ${JSON.stringify(e)}`);
}, Du = (e) => typeof e == "object" && e !== null && !Array.isArray(e), Vr = (e) => Array.isArray(e), Bc = (e, t) => e.filter((n, r) => r !== t), Zv = (e, t, n, r = {}) => {
  const { remove: o = !1, createNew: i = !0, noError: s = !1 } = r, a = e, u = typeof (l = t) == "string" ? l : typeof l == "number" ? String(l) : l.reduce((d, p) => typeof p == "number" ? `${d}[${p}]` : d === "" ? p : `${d}.${p}`, "");
  var l;
  const f = Object.assign(Object.assign({}, r), { remove: o, createNew: i, noError: s, fullData: a, fullPath: u }), c = Array.isArray(t) ? t : ((d) => Array.isArray(d) ? d : d.split(/(\.|\[\d+\])/).filter((p) => p !== "." && p !== "").map((p) => {
    const g = /\[(\d+)\]/.exec(p);
    return g ? Number(g[1]) : p;
  }).flat())(t).filter((d) => d !== "");
  return Vr(e) && o && c.length === 1 ? Bc(e, c[0]) : Un(e, c, n, f);
}, Un = (e, t, n, r) => {
  const o = Du(e) ? Object.assign({}, e) : null, i = Vr(e) ? [...e] : null;
  if (t.length === 0)
    return e;
  if (!o && !i)
    throw new Error("Can't assign property -- invalid input object");
  const { createNew: s, remove: a, noError: u, fullData: l, fullPath: f } = r, c = t[0];
  if (i && typeof c == "string")
    return i.map((h) => Un(h, t, n, r));
  if (t.length === 1) {
    if (o && typeof c == "string") {
      const h = eb(o, c, n, r);
      return h ?? o;
    }
    return i && typeof c == "number" ? (tb(i, c, n, r), i) : (en(l, f, c, u), e);
  }
  const d = o || i || [];
  if (a && t.length === 2 && typeof t[1] == "number") {
    const h = d[c], m = t[1];
    return Vr(h) ? d[c] = Bc(h, m) : en(l, f, c, u, "Trying to remove an indexed item from an object that is not an array"), d;
  }
  const p = t.slice(1);
  if (c in e) {
    if (g = d[c], !Vr(g) && !Du(g)) {
      if (!s)
        return en(l, f, c, u), d;
      d[c] = {};
    }
    return d[c] = Un(d[c], p, n, r), d;
  }
  var g;
  if (s) {
    const h = typeof p[0] == "number" ? [] : {};
    if (o)
      return d[c] = h, d[c] = Un(d[c], p, n, r), d;
    if (i && Array.isArray(d)) {
      d.push(h);
      const m = d.length - 1;
      return d[m] = Un(d[m], p, n, r), d;
    }
  }
  return en(l, f, c, u), d;
}, eb = (e, t, n, r) => {
  const { remove: o, createNew: i, noError: s, insertAfter: a, insertBefore: u, fullData: l, fullPath: f } = r;
  if (u || a) {
    const d = Object.entries(e);
    let p = d.findIndex(([g, h]) => g === (u ?? a));
    return a && p++, d.splice(p, 0, [t, n]), Object.fromEntries(d);
  }
  const c = t in e;
  o ? c ? delete e[t] : en(l, f, t, s) : i || c ? e[t] = n : en(l, f, t, s);
}, tb = (e, t, n, r) => {
  const { noError: o, fullData: i, fullPath: s, createNew: a, insert: u } = r;
  u && e.splice(t, 0, n), t in e ? e[t] = n : a ? e.push(n) : en(i, s, t, o);
}, eo = (e, t, n) => {
  const r = Array.isArray(t) ? t : nb(t);
  if (r.length === 0)
    return e;
  const o = r[0];
  if (Array.isArray(e) && typeof o != "number")
    return e.map((s) => eo(s, r, n));
  if (typeof e != "object" || e === null || !(o in e))
    return rb(e, o, n);
  const i = e[o];
  return r.length === 1 ? i : eo(i, r.slice(1), n);
}, nb = (e) => e.split(/(\.|\[\d+\])/).filter((t) => t !== "." && t !== "").map((t) => {
  const n = /\[(\d+)\]/.exec(t);
  return n ? Number(n[1]) : t;
}).flat(), rb = (e, t, n) => {
  if (n === void 0)
    throw new Error(`Unable to extract object property
Looking for property: ${t}
In object: ${JSON.stringify(e)}`);
  return n;
};
var ob = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/, ib = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/, sb = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/, Yo = {
  Space_Separator: ob,
  ID_Start: ib,
  ID_Continue: sb
}, Se = {
  isSpaceSeparator(e) {
    return typeof e == "string" && Yo.Space_Separator.test(e);
  },
  isIdStartChar(e) {
    return typeof e == "string" && (e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "$" || e === "_" || Yo.ID_Start.test(e));
  },
  isIdContinueChar(e) {
    return typeof e == "string" && (e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "$" || e === "_" || e === "‌" || e === "‍" || Yo.ID_Continue.test(e));
  },
  isDigit(e) {
    return typeof e == "string" && /[0-9]/.test(e);
  },
  isHexDigit(e) {
    return typeof e == "string" && /[0-9A-Fa-f]/.test(e);
  }
};
let Pi, Je, Nt, to, Vt, mt, Pe, xs, Jn;
var ab = function(t, n) {
  Pi = String(t), Je = "start", Nt = [], to = 0, Vt = 1, mt = 0, Pe = void 0, xs = void 0, Jn = void 0;
  do
    Pe = ub(), db[Je]();
  while (Pe.type !== "eof");
  return typeof n == "function" ? Ri({ "": Jn }, "", n) : Jn;
};
function Ri(e, t, n) {
  const r = e[t];
  if (r != null && typeof r == "object")
    if (Array.isArray(r))
      for (let o = 0; o < r.length; o++) {
        const i = String(o), s = Ri(r, i, n);
        s === void 0 ? delete r[i] : Object.defineProperty(r, i, {
          value: s,
          writable: !0,
          enumerable: !0,
          configurable: !0
        });
      }
    else
      for (const o in r) {
        const i = Ri(r, o, n);
        i === void 0 ? delete r[o] : Object.defineProperty(r, o, {
          value: i,
          writable: !0,
          enumerable: !0,
          configurable: !0
        });
      }
  return n.call(e, t, r);
}
let ee, K, Wn, Ft, oe;
function ub() {
  for (ee = "default", K = "", Wn = !1, Ft = 1; ; ) {
    oe = Ot();
    const e = Ic[ee]();
    if (e)
      return e;
  }
}
function Ot() {
  if (Pi[to])
    return String.fromCodePoint(Pi.codePointAt(to));
}
function F() {
  const e = Ot();
  return e === `
` ? (Vt++, mt = 0) : e ? mt += e.length : mt++, e && (to += e.length), e;
}
const Ic = {
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
        F();
        return;
      case "/":
        F(), ee = "comment";
        return;
      case void 0:
        return F(), ye("eof");
    }
    if (Se.isSpaceSeparator(oe)) {
      F();
      return;
    }
    return Ic[Je]();
  },
  comment() {
    switch (oe) {
      case "*":
        F(), ee = "multiLineComment";
        return;
      case "/":
        F(), ee = "singleLineComment";
        return;
    }
    throw ve(F());
  },
  multiLineComment() {
    switch (oe) {
      case "*":
        F(), ee = "multiLineCommentAsterisk";
        return;
      case void 0:
        throw ve(F());
    }
    F();
  },
  multiLineCommentAsterisk() {
    switch (oe) {
      case "*":
        F();
        return;
      case "/":
        F(), ee = "default";
        return;
      case void 0:
        throw ve(F());
    }
    F(), ee = "multiLineComment";
  },
  singleLineComment() {
    switch (oe) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        F(), ee = "default";
        return;
      case void 0:
        return F(), ye("eof");
    }
    F();
  },
  value() {
    switch (oe) {
      case "{":
      case "[":
        return ye("punctuator", F());
      case "n":
        return F(), Ht("ull"), ye("null", null);
      case "t":
        return F(), Ht("rue"), ye("boolean", !0);
      case "f":
        return F(), Ht("alse"), ye("boolean", !1);
      case "-":
      case "+":
        F() === "-" && (Ft = -1), ee = "sign";
        return;
      case ".":
        K = F(), ee = "decimalPointLeading";
        return;
      case "0":
        K = F(), ee = "zero";
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
        K = F(), ee = "decimalInteger";
        return;
      case "I":
        return F(), Ht("nfinity"), ye("numeric", 1 / 0);
      case "N":
        return F(), Ht("aN"), ye("numeric", NaN);
      case '"':
      case "'":
        Wn = F() === '"', K = "", ee = "string";
        return;
    }
    throw ve(F());
  },
  identifierNameStartEscape() {
    if (oe !== "u")
      throw ve(F());
    F();
    const e = Mi();
    switch (e) {
      case "$":
      case "_":
        break;
      default:
        if (!Se.isIdStartChar(e))
          throw Eu();
        break;
    }
    K += e, ee = "identifierName";
  },
  identifierName() {
    switch (oe) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        K += F();
        return;
      case "\\":
        F(), ee = "identifierNameEscape";
        return;
    }
    if (Se.isIdContinueChar(oe)) {
      K += F();
      return;
    }
    return ye("identifier", K);
  },
  identifierNameEscape() {
    if (oe !== "u")
      throw ve(F());
    F();
    const e = Mi();
    switch (e) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        break;
      default:
        if (!Se.isIdContinueChar(e))
          throw Eu();
        break;
    }
    K += e, ee = "identifierName";
  },
  sign() {
    switch (oe) {
      case ".":
        K = F(), ee = "decimalPointLeading";
        return;
      case "0":
        K = F(), ee = "zero";
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
        K = F(), ee = "decimalInteger";
        return;
      case "I":
        return F(), Ht("nfinity"), ye("numeric", Ft * (1 / 0));
      case "N":
        return F(), Ht("aN"), ye("numeric", NaN);
    }
    throw ve(F());
  },
  zero() {
    switch (oe) {
      case ".":
        K += F(), ee = "decimalPoint";
        return;
      case "e":
      case "E":
        K += F(), ee = "decimalExponent";
        return;
      case "x":
      case "X":
        K += F(), ee = "hexadecimal";
        return;
    }
    return ye("numeric", Ft * 0);
  },
  decimalInteger() {
    switch (oe) {
      case ".":
        K += F(), ee = "decimalPoint";
        return;
      case "e":
      case "E":
        K += F(), ee = "decimalExponent";
        return;
    }
    if (Se.isDigit(oe)) {
      K += F();
      return;
    }
    return ye("numeric", Ft * Number(K));
  },
  decimalPointLeading() {
    if (Se.isDigit(oe)) {
      K += F(), ee = "decimalFraction";
      return;
    }
    throw ve(F());
  },
  decimalPoint() {
    switch (oe) {
      case "e":
      case "E":
        K += F(), ee = "decimalExponent";
        return;
    }
    if (Se.isDigit(oe)) {
      K += F(), ee = "decimalFraction";
      return;
    }
    return ye("numeric", Ft * Number(K));
  },
  decimalFraction() {
    switch (oe) {
      case "e":
      case "E":
        K += F(), ee = "decimalExponent";
        return;
    }
    if (Se.isDigit(oe)) {
      K += F();
      return;
    }
    return ye("numeric", Ft * Number(K));
  },
  decimalExponent() {
    switch (oe) {
      case "+":
      case "-":
        K += F(), ee = "decimalExponentSign";
        return;
    }
    if (Se.isDigit(oe)) {
      K += F(), ee = "decimalExponentInteger";
      return;
    }
    throw ve(F());
  },
  decimalExponentSign() {
    if (Se.isDigit(oe)) {
      K += F(), ee = "decimalExponentInteger";
      return;
    }
    throw ve(F());
  },
  decimalExponentInteger() {
    if (Se.isDigit(oe)) {
      K += F();
      return;
    }
    return ye("numeric", Ft * Number(K));
  },
  hexadecimal() {
    if (Se.isHexDigit(oe)) {
      K += F(), ee = "hexadecimalInteger";
      return;
    }
    throw ve(F());
  },
  hexadecimalInteger() {
    if (Se.isHexDigit(oe)) {
      K += F();
      return;
    }
    return ye("numeric", Ft * Number(K));
  },
  string() {
    switch (oe) {
      case "\\":
        F(), K += lb();
        return;
      case '"':
        if (Wn)
          return F(), ye("string", K);
        K += F();
        return;
      case "'":
        if (!Wn)
          return F(), ye("string", K);
        K += F();
        return;
      case `
`:
      case "\r":
        throw ve(F());
      case "\u2028":
      case "\u2029":
        fb(oe);
        break;
      case void 0:
        throw ve(F());
    }
    K += F();
  },
  start() {
    switch (oe) {
      case "{":
      case "[":
        return ye("punctuator", F());
    }
    ee = "value";
  },
  beforePropertyName() {
    switch (oe) {
      case "$":
      case "_":
        K = F(), ee = "identifierName";
        return;
      case "\\":
        F(), ee = "identifierNameStartEscape";
        return;
      case "}":
        return ye("punctuator", F());
      case '"':
      case "'":
        Wn = F() === '"', ee = "string";
        return;
    }
    if (Se.isIdStartChar(oe)) {
      K += F(), ee = "identifierName";
      return;
    }
    throw ve(F());
  },
  afterPropertyName() {
    if (oe === ":")
      return ye("punctuator", F());
    throw ve(F());
  },
  beforePropertyValue() {
    ee = "value";
  },
  afterPropertyValue() {
    switch (oe) {
      case ",":
      case "}":
        return ye("punctuator", F());
    }
    throw ve(F());
  },
  beforeArrayValue() {
    if (oe === "]")
      return ye("punctuator", F());
    ee = "value";
  },
  afterArrayValue() {
    switch (oe) {
      case ",":
      case "]":
        return ye("punctuator", F());
    }
    throw ve(F());
  },
  end() {
    throw ve(F());
  }
};
function ye(e, t) {
  return {
    type: e,
    value: t,
    line: Vt,
    column: mt
  };
}
function Ht(e) {
  for (const t of e) {
    if (Ot() !== t)
      throw ve(F());
    F();
  }
}
function lb() {
  switch (Ot()) {
    case "b":
      return F(), "\b";
    case "f":
      return F(), "\f";
    case "n":
      return F(), `
`;
    case "r":
      return F(), "\r";
    case "t":
      return F(), "	";
    case "v":
      return F(), "\v";
    case "0":
      if (F(), Se.isDigit(Ot()))
        throw ve(F());
      return "\0";
    case "x":
      return F(), cb();
    case "u":
      return F(), Mi();
    case `
`:
    case "\u2028":
    case "\u2029":
      return F(), "";
    case "\r":
      return F(), Ot() === `
` && F(), "";
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw ve(F());
    case void 0:
      throw ve(F());
  }
  return F();
}
function cb() {
  let e = "", t = Ot();
  if (!Se.isHexDigit(t) || (e += F(), t = Ot(), !Se.isHexDigit(t)))
    throw ve(F());
  return e += F(), String.fromCodePoint(parseInt(e, 16));
}
function Mi() {
  let e = "", t = 4;
  for (; t-- > 0; ) {
    const n = Ot();
    if (!Se.isHexDigit(n))
      throw ve(F());
    e += F();
  }
  return String.fromCodePoint(parseInt(e, 16));
}
const db = {
  start() {
    if (Pe.type === "eof")
      throw qt();
    Xo();
  },
  beforePropertyName() {
    switch (Pe.type) {
      case "identifier":
      case "string":
        xs = Pe.value, Je = "afterPropertyName";
        return;
      case "punctuator":
        Tr();
        return;
      case "eof":
        throw qt();
    }
  },
  afterPropertyName() {
    if (Pe.type === "eof")
      throw qt();
    Je = "beforePropertyValue";
  },
  beforePropertyValue() {
    if (Pe.type === "eof")
      throw qt();
    Xo();
  },
  beforeArrayValue() {
    if (Pe.type === "eof")
      throw qt();
    if (Pe.type === "punctuator" && Pe.value === "]") {
      Tr();
      return;
    }
    Xo();
  },
  afterPropertyValue() {
    if (Pe.type === "eof")
      throw qt();
    switch (Pe.value) {
      case ",":
        Je = "beforePropertyName";
        return;
      case "}":
        Tr();
    }
  },
  afterArrayValue() {
    if (Pe.type === "eof")
      throw qt();
    switch (Pe.value) {
      case ",":
        Je = "beforeArrayValue";
        return;
      case "]":
        Tr();
    }
  },
  end() {
  }
};
function Xo() {
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
  if (Jn === void 0)
    Jn = e;
  else {
    const t = Nt[Nt.length - 1];
    Array.isArray(t) ? t.push(e) : Object.defineProperty(t, xs, {
      value: e,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  }
  if (e !== null && typeof e == "object")
    Nt.push(e), Array.isArray(e) ? Je = "beforeArrayValue" : Je = "beforePropertyName";
  else {
    const t = Nt[Nt.length - 1];
    t == null ? Je = "end" : Array.isArray(t) ? Je = "afterArrayValue" : Je = "afterPropertyValue";
  }
}
function Tr() {
  Nt.pop();
  const e = Nt[Nt.length - 1];
  e == null ? Je = "end" : Array.isArray(e) ? Je = "afterArrayValue" : Je = "afterPropertyValue";
}
function ve(e) {
  return no(e === void 0 ? `JSON5: invalid end of input at ${Vt}:${mt}` : `JSON5: invalid character '${Pc(e)}' at ${Vt}:${mt}`);
}
function qt() {
  return no(`JSON5: invalid end of input at ${Vt}:${mt}`);
}
function Eu() {
  return mt -= 5, no(`JSON5: invalid identifier character at ${Vt}:${mt}`);
}
function fb(e) {
  console.warn(`JSON5: '${Pc(e)}' in strings is not valid ECMAScript; consider escaping`);
}
function Pc(e) {
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
function no(e) {
  const t = new SyntaxError(e);
  return t.lineNumber = Vt, t.columnNumber = mt, t;
}
var pb = function(t, n, r) {
  const o = [];
  let i = "", s, a, u = "", l;
  if (n != null && typeof n == "object" && !Array.isArray(n) && (r = n.space, l = n.quote, n = n.replacer), typeof n == "function")
    a = n;
  else if (Array.isArray(n)) {
    s = [];
    for (const h of n) {
      let m;
      typeof h == "string" ? m = h : (typeof h == "number" || h instanceof String || h instanceof Number) && (m = String(h)), m !== void 0 && s.indexOf(m) < 0 && s.push(m);
    }
  }
  return r instanceof Number ? r = Number(r) : r instanceof String && (r = String(r)), typeof r == "number" ? r > 0 && (r = Math.min(10, Math.floor(r)), u = "          ".substr(0, r)) : typeof r == "string" && (u = r.substr(0, 10)), f("", { "": t });
  function f(h, m) {
    let C = m[h];
    switch (C != null && (typeof C.toJSON5 == "function" ? C = C.toJSON5(h) : typeof C.toJSON == "function" && (C = C.toJSON(h))), a && (C = a.call(m, h, C)), C instanceof Number ? C = Number(C) : C instanceof String ? C = String(C) : C instanceof Boolean && (C = C.valueOf()), C) {
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
      return Array.isArray(C) ? g(C) : d(C);
  }
  function c(h) {
    const m = {
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
    let w = "";
    for (let y = 0; y < h.length; y++) {
      const v = h[y];
      switch (v) {
        case "'":
        case '"':
          m[v]++, w += v;
          continue;
        case "\0":
          if (Se.isDigit(h[y + 1])) {
            w += "\\x00";
            continue;
          }
      }
      if (C[v]) {
        w += C[v];
        continue;
      }
      if (v < " ") {
        let S = v.charCodeAt(0).toString(16);
        w += "\\x" + ("00" + S).substring(S.length);
        continue;
      }
      w += v;
    }
    const D = l || Object.keys(m).reduce((y, v) => m[y] < m[v] ? y : v);
    return w = w.replace(new RegExp(D, "g"), C[D]), D + w + D;
  }
  function d(h) {
    if (o.indexOf(h) >= 0)
      throw TypeError("Converting circular structure to JSON5");
    o.push(h);
    let m = i;
    i = i + u;
    let C = s || Object.keys(h), w = [];
    for (const y of C) {
      const v = f(y, h);
      if (v !== void 0) {
        let S = p(y) + ":";
        u !== "" && (S += " "), S += v, w.push(S);
      }
    }
    let D;
    if (w.length === 0)
      D = "{}";
    else {
      let y;
      if (u === "")
        y = w.join(","), D = "{" + y + "}";
      else {
        let v = `,
` + i;
        y = w.join(v), D = `{
` + i + y + `,
` + m + "}";
      }
    }
    return o.pop(), i = m, D;
  }
  function p(h) {
    if (h.length === 0)
      return c(h);
    const m = String.fromCodePoint(h.codePointAt(0));
    if (!Se.isIdStartChar(m))
      return c(h);
    for (let C = m.length; C < h.length; C++)
      if (!Se.isIdContinueChar(String.fromCodePoint(h.codePointAt(C))))
        return c(h);
    return h;
  }
  function g(h) {
    if (o.indexOf(h) >= 0)
      throw TypeError("Converting circular structure to JSON5");
    o.push(h);
    let m = i;
    i = i + u;
    let C = [];
    for (let D = 0; D < h.length; D++) {
      const y = f(String(D), h);
      C.push(y !== void 0 ? y : "null");
    }
    let w;
    if (C.length === 0)
      w = "[]";
    else if (u === "")
      w = "[" + C.join(",") + "]";
    else {
      let D = `,
` + i, y = C.join(D);
      w = `[
` + i + y + `,
` + m + "]";
    }
    return o.pop(), i = m, w;
  }
};
const mb = {
  parse: ab,
  stringify: pb
};
var Ko = mb, hb = Hn;
function Hn(e) {
  let t = e;
  var n = {}.toString.call(e).slice(8, -1);
  if (n == "Set")
    return new Set([...e].map((o) => Hn(o)));
  if (n == "Map")
    return new Map([...e].map((o) => [Hn(o[0]), Hn(o[1])]));
  if (n == "Date")
    return new Date(e.getTime());
  if (n == "RegExp")
    return RegExp(e.source, gb(e));
  if (n == "Array" || n == "Object") {
    t = Array.isArray(e) ? [] : {};
    for (var r in e)
      t[r] = Hn(e[r]);
  }
  return t;
}
function gb(e) {
  if (typeof e.source.flags == "string")
    return e.source.flags;
  var t = [];
  return e.global && t.push("g"), e.ignoreCase && t.push("i"), e.multiline && t.push("m"), e.sticky && t.push("y"), e.unicode && t.push("u"), t.join("");
}
function Rc(e, t) {
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
function jr(e, t, n, r) {
  return new (n || (n = Promise))(function(o, i) {
    function s(l) {
      try {
        u(r.next(l));
      } catch (f) {
        i(f);
      }
    }
    function a(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        i(f);
      }
    }
    function u(l) {
      var f;
      l.done ? o(l.value) : (f = l.value, f instanceof n ? f : new n(function(c) {
        c(f);
      })).then(s, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
var yu = [], jn = [];
(function(e, t) {
  if (e && typeof document < "u") {
    var n, r = t.prepend === !0 ? "prepend" : "append", o = t.singleTag === !0, i = typeof t.container == "string" ? document.querySelector(t.container) : document.getElementsByTagName("head")[0];
    if (o) {
      var s = yu.indexOf(i);
      s === -1 && (s = yu.push(i) - 1, jn[s] = {}), n = jn[s] && jn[s][r] ? jn[s][r] : jn[s][r] = a();
    } else
      n = a();
    e.charCodeAt(0) === 65279 && (e = e.substring(1)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(document.createTextNode(e));
  }
  function a() {
    var u = document.createElement("style");
    if (u.setAttribute("type", "text/css"), t.attributes)
      for (var l = Object.keys(t.attributes), f = 0; f < l.length; f++)
        u.setAttribute(l[f], t.attributes[l[f]]);
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
const Mc = ({ className: e, name: t, value: n, setValue: r, handleKeyPress: o, styles: i }) => {
  const s = n.slice(-1) === `
` ? n + "." : n;
  return Te("div", { style: { display: "grid" }, children: [x("textarea", { id: `${t}_textarea`, style: Object.assign({ height: "auto", gridArea: "1 / 1 / 2 / 2", overflowY: "auto", whiteSpace: "pre-wrap" }, i), rows: 1, className: e, name: `${t}_textarea`, value: n, onChange: (a) => r(a.target.value), autoFocus: !0, onFocus: (a) => {
    n.length < 40 && a.target.select();
  }, onKeyDown: o }), x("span", { className: e, style: Object.assign({ visibility: "hidden", height: "auto", gridArea: "1 / 1 / 2 / 2", color: "red", opacity: 0.9, whiteSpace: "pre-wrap", overflowY: "auto", border: "1px solid transparent" }, i), children: s })] });
}, Lc = { default: { displayName: "Default", fragments: { edit: "rgb(42, 161, 152)" }, styles: { container: { backgroundColor: "#f6f6f6", fontFamily: "monospace" }, collection: {}, collectionInner: {}, collectionElement: {}, property: "#292929", bracket: { color: "rgb(0, 43, 54)", fontWeight: "bold" }, itemCount: { color: "rgba(0, 0, 0, 0.3)", fontStyle: "italic" }, string: "rgb(203, 75, 22)", number: "rgb(38, 139, 210)", boolean: "green", null: { color: "rgb(220, 50, 47)", fontVariant: "small-caps", fontWeight: "bold" }, input: ["#292929"], inputHighlight: "#b3d8ff", error: { fontSize: "0.8em", color: "red", fontWeight: "bold" }, iconCollection: "rgb(0, 43, 54)", iconEdit: "edit", iconDelete: "rgb(203, 75, 22)", iconAdd: "edit", iconCopy: "rgb(38, 139, 210)", iconOk: "green", iconCancel: "rgb(203, 75, 22)" } }, githubDark: { displayName: "Github Dark", styles: { container: { backgroundColor: "#0d1117", color: "white" }, property: "#E6EDF3", bracket: "#56d364", itemCount: "#8B949E", string: "#A5D6FF", number: "#D2A8FF", boolean: { color: "#FF7B72", fontSize: "90%", fontWeight: "bold" }, null: "green", iconCollection: "#D2A8FF", iconEdit: "#D2A8FF", iconDelete: "rgb(203, 75, 22)", iconAdd: "rgb(203, 75, 22)", iconCopy: "#A5D6FF", iconOk: "#56d364", iconCancel: "rgb(203, 75, 22)" } }, githubLight: { displayName: "Github Light", styles: { container: "white", property: "#1F2328", bracket: "#00802e", itemCount: "#8B949E", string: "#0A3069", number: "#953800", boolean: { color: "#CF222E", fontSize: "90%", fontWeight: "bold" }, null: "#FF7B72", iconCollection: "#8250DF", iconEdit: "#8250DF", iconDelete: "rgb(203, 75, 22)", iconAdd: "#8250DF", iconCopy: "#57606A" } }, monoDark: { displayName: "Black & White", fragments: { lightText: { color: "white" }, midGrey: "#5c5c5c" }, styles: { container: ["lightText", { backgroundColor: "black" }], property: "lightText", bracket: "midGrey", itemCount: "#4a4a4a", string: "#a8a8a8", number: "#666666", boolean: { color: "#848484", fontStyle: "italic" }, null: "#333333", iconCollection: "midGrey", iconEdit: "midGrey", iconDelete: "midGrey", iconAdd: "midGrey", iconCopy: "midGrey", iconOk: "midGrey", iconCancel: "midGrey" } }, monoLight: { fragments: { midGrey: "#a3a3a3" }, displayName: "White & Black", styles: { container: "white", property: "black", bracket: "midGrey", itemCount: "#b5b5b5", string: "#575757", number: "#999999", boolean: { color: "#7b7b7b", fontStyle: "italic" }, null: "#cccccc", iconCollection: "midGrey", iconEdit: "midGrey", iconDelete: "midGrey", iconAdd: "midGrey", iconCopy: "midGrey", iconOk: "midGrey", iconCancel: "midGrey" } }, candyWrapper: { displayName: "Candy Wrapper", fragments: { minty: { backgroundColor: "#F1FAEE" }, pale: { color: "#A8DADC" }, mid: { color: "#457B9D" }, dark: { color: "#1D3557" }, pop: { color: "#E63946" }, darkBlue: { color: "#2B2D42" } }, styles: { container: "minty", property: "pop", bracket: "dark", itemCount: "pale", string: "mid", number: ["darkBlue", { fontSize: "85%" }], boolean: ["mid", { fontStyle: "italic", fontWeight: "bold", fontSize: "80%" }], null: ["#cccccc", { fontWeight: "bold" }], input: { border: "1px solid rgb(115, 194, 198)" }, iconCollection: "#1D3557", iconEdit: "#457B9D", iconDelete: "#E63946", iconAdd: "#2B2D42", iconCopy: "#1D3557", iconCancel: "#E63946" } }, psychedelic: { displayName: "Psychedelic", fragments: { minty: { backgroundColor: "#F1FAEE" }, pale: { color: "#A8DADC" }, mid: { color: "#457B9D" }, dark: { color: "#1D3557" }, pop: { color: "#E63946" }, fluroYellow: "rgb(242, 228, 21)", fluroGreen: "rgb(68, 255, 62)", hotPink: "#f7379a" }, styles: { container: { backgroundColor: "unset", background: "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)", color: "black" }, property: "black", bracket: "fluroYellow", itemCount: ["pale", { opacity: 0.7 }], string: "white", number: ["#33d9ff", { fontSize: "90%", fontWeight: "bold" }], boolean: ["fluroGreen", { fontWeight: "bold", fontSize: "80%" }], null: ["black", { fontWeight: "bold", opacity: 0.3, backgroundColor: "rgb(255, 255, 255, 0.5)", padding: "0 0.4em", borderRadius: "0.4em" }], iconCollection: "fluroYellow", iconEdit: ["black"], iconDelete: ["white", { opacity: 0.5 }], iconAdd: ["white", { opacity: 0.5 }], iconCopy: "rgb(32, 84, 242)", iconOk: "fluroGreen", iconCancel: "hotPink" } } }, Db = { container: {}, collection: {}, collectionInner: {}, collectionElement: {}, property: {}, bracket: {}, itemCount: {}, string: {}, number: {}, boolean: {}, null: {}, input: {}, inputHighlight: {}, error: {}, iconCollection: {}, iconEdit: {}, iconDelete: {}, iconAdd: {}, iconCopy: {}, iconOk: {}, iconCancel: {} }, Eb = Lc.default, kc = _.createContext({ getStyles: () => ({}), setTheme: (e) => {
}, icons: {}, setIcons: () => {
} }), yb = ({ children: e }) => {
  const [t, n] = _.useState(Db), [r, o] = _.useState({});
  return x(kc.Provider, { value: { getStyles: (i, s) => typeof t[i] == "function" ? t[i](s) : t[i], setTheme: (i) => {
    const s = vb(i);
    n(s);
  }, icons: r, setIcons: o }, children: e });
}, Bt = () => _.useContext(kc), vb = (e) => {
  var t, n, r, o;
  const i = {}, s = (Array.isArray(e) ? e : [e]).map((l) => e === "default" ? {} : typeof l == "string" ? Br(Lc[l], i) : bb(l) ? Br({ fragments: {}, styles: l }, i) : Br(l, i)), a = Br(Eb, {});
  Object.keys(a).forEach((l) => {
    const f = l;
    s.forEach((c) => {
      c[f] && (a[f] = Object.assign(Object.assign({}, a[f]), c[f]));
    });
  });
  const u = Object.assign({}, a);
  return Object.entries(i).forEach(([l, f]) => {
    const c = l;
    u[c] = (d) => {
      const p = f(d) || {};
      return Object.assign(Object.assign({}, a[c]), p);
    };
  }), typeof (u == null ? void 0 : u.inputHighlight) != "function" && (!((t = u == null ? void 0 : u.inputHighlight) === null || t === void 0) && t.backgroundColor) && document.documentElement.style.setProperty("--jer-highlight-color", (n = u == null ? void 0 : u.inputHighlight) === null || n === void 0 ? void 0 : n.backgroundColor), typeof (u == null ? void 0 : u.iconCopy) != "function" && (!((r = u == null ? void 0 : u.iconCopy) === null || r === void 0) && r.color) && document.documentElement.style.setProperty("--jer-icon-copy-color", (o = u == null ? void 0 : u.iconCopy) === null || o === void 0 ? void 0 : o.color), u;
}, Br = (e, t) => {
  const { fragments: n, styles: r } = e, o = {};
  return Object.entries(r).forEach(([i, s]) => {
    const a = (Array.isArray(s) ? s : [s]).reduce((u, l) => {
      var f;
      if (typeof l == "function")
        return t[i] = l, Object.assign({}, u);
      if (typeof l == "string") {
        const c = (f = n == null ? void 0 : n[l]) !== null && f !== void 0 ? f : l;
        return typeof c == "string" ? Object.assign(Object.assign({}, u), { [Cb[i]]: c }) : Object.assign(Object.assign({}, u), c);
      }
      return Object.assign(Object.assign({}, u), l);
    }, {});
    o[i] = a;
  }), o;
}, bb = (e) => !("styles" in e), Cb = { container: "backgroundColor", collection: "backgroundColor", collectionInner: "backgroundColor", collectionElement: "backgroundColor", property: "color", bracket: "color", itemCount: "color", string: "color", number: "color", boolean: "color", null: "color", input: "color", inputHighlight: "backgroundColor", error: "color", iconCollection: "color", iconEdit: "color", iconDelete: "color", iconAdd: "color", iconCopy: "color", iconOk: "color", iconCancel: "color" }, Ab = (e, t = 200) => typeof e == "string" ? e.length < t ? e : `${e.slice(0, t - 2).trim()}...` : e, Er = (e) => e.map((t) => t === "" ? String.fromCharCode(0) : t).join("."), wb = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, stringTruncate: a, showStringQuotes: u, nodeData: l }) => {
  const { getStyles: f } = Bt(), c = Er(r), d = u ? '"' : "";
  return n ? x(Mc, { className: "jer-input-text", name: c, value: e, setValue: t, isEditing: n, handleKeyPress: (p) => {
    p.key !== "Enter" || p.shiftKey ? p.key === "Escape" && s() : i();
  }, styles: f("input", l) }) : Te("div", { id: `${c}_display`, onDoubleClick: () => o(!0), onClick: (p) => {
    (p.getModifierState("Control") || p.getModifierState("Meta")) && o(!0);
  }, className: "jer-value-string", style: f("string", l), children: [d, Ab(e, a), d] });
}, _b = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, nodeData: a }) => {
  const { getStyles: u } = Bt();
  return n ? x("input", { className: "jer-input-number", type: "text", name: Er(r), value: e, onChange: (l) => t(l.target.value.replace(/[^0-9.-]/g, "")), autoFocus: !0, onFocus: (l) => l.target.select(), onKeyDown: (l) => {
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
}, Sb = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, nodeData: a }) => {
  const { getStyles: u } = Bt();
  _.useEffect(() => (n && document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l)), [n, i]);
  const l = (f) => {
    f.key === "Enter" ? i() : f.key === "Escape" && s();
  };
  return n ? x("input", { className: "jer-input-boolean", type: "checkbox", name: Er(r), checked: e, onChange: () => t(!e) }) : x("span", { onDoubleClick: () => o(!0), className: "jer-value-boolean", style: u("boolean", a), children: String(e) });
}, Fb = ({ value: e, isEditing: t, setIsEditing: n, handleEdit: r, handleCancel: o, nodeData: i }) => {
  const { getStyles: s } = Bt();
  _.useEffect(() => (t && document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a)), [t]);
  const a = (u) => {
    u.key === "Enter" ? r() : u.key === "Escape" && o();
  };
  return x("div", { onDoubleClick: () => n(!0), className: "jer-value-null", style: s("null", i), children: String(e) });
}, Nb = ({ value: e, translate: t, isEditing: n, handleEdit: r, handleCancel: o, nodeData: i }) => {
  _.useEffect(() => (n && document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s)), []);
  const s = (a) => {
    a.key === "Enter" ? r() : a.key === "Escape" && o();
  };
  return x("span", { className: "jer-value-object", children: `{${t("DEFAULT_NEW_KEY", i)}: "${String(e)}" }` });
}, xb = ({ value: e, isEditing: t, handleEdit: n, handleCancel: r }) => {
  _.useEffect(() => (t && document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o)), []);
  const o = (i) => {
    i.key === "Enter" ? n() : i.key === "Escape" && r();
  };
  return x("span", { className: "jer-value-array", children: `[${e === null ? "" : String(e)}]` });
}, Ob = ({ value: e }) => {
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
}, Tb = ({ size: e, style: t, className: n }) => Te("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: [x("path", { d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" }), x("path", { d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" })] }), Bb = ({ size: e, style: t, className: n }) => Te("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, transform: "translate(0, 0.5)", children: [x("path", { d: "M7 17.013l4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" }), x("path", { d: "M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" })] }), Ib = ({ size: e, style: t, className: n }) => x("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: x("path", { d: "M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12m2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12M15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5z" }) }), Pb = ({ size: e, style: t, className: n }) => Te("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", width: e, height: e, className: n, style: t, children: [x("path", { d: "M9 2 H15 A1 1 0 0 1 16 3 V5 A1 1 0 0 1 15 6 H9 A1 1 0 0 1 8 5 V3 A1 1 0 0 1 9 2 z" }), x("path", { d: "M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-2M16 4h2a2 2 0 012 2v4M21 14H11" }), x("path", { d: "M15 10l-4 4 4 4" })] }), Rb = ({ size: e, style: t, className: n }) => Te("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", width: e, height: e, className: n, style: t, children: [x("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), x("path", { d: "M22 4L12 14.01l-3-3" })] }), Mb = ({ size: e, style: t, className: n }) => x("svg", { baseProfile: "tiny", viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: x("path", { d: "M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-5 8c0-.832.224-1.604.584-2.295l6.711 6.711A4.943 4.943 0 0112 17c-2.757 0-5-2.243-5-5zm9.416 2.295L9.705 7.584A4.943 4.943 0 0112 7c2.757 0 5 2.243 5 5 0 .832-.224 1.604-.584 2.295z" }) }), Lb = ({ size: e, style: t, className: n }) => x("svg", { viewBox: "0 0 512 512", fill: "currentColor", width: e, height: e, className: n, style: t, children: x("path", { d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" }) }), tn = ({ name: e, nodeData: t, rotate: n }) => {
  var r, o, i, s, a, u, l;
  const { getStyles: f, icons: c } = Bt(), d = { size: "1.4em", className: "jer-icon" };
  switch (e) {
    case "add":
      return (r = c == null ? void 0 : c.add) !== null && r !== void 0 ? r : x(Tb, Object.assign({}, d, { style: f("iconAdd", t) }));
    case "edit":
      return (o = c == null ? void 0 : c.edit) !== null && o !== void 0 ? o : x(Bb, Object.assign({}, d, { style: f("iconEdit", t) }));
    case "delete":
      return (i = c == null ? void 0 : c.delete) !== null && i !== void 0 ? i : x(Ib, Object.assign({}, d, { style: f("iconDelete", t), size: "1.45em" }));
    case "copy":
      return (s = c == null ? void 0 : c.copy) !== null && s !== void 0 ? s : x(Pb, Object.assign({}, d, { style: f("iconCopy", t), size: "1.2em" }));
    case "ok":
      return (a = c == null ? void 0 : c.ok) !== null && a !== void 0 ? a : x(Rb, Object.assign({}, d, { style: Object.assign({ fontSize: "90%" }, f("iconOk", t)) }));
    case "cancel":
      return (u = c == null ? void 0 : c.cancel) !== null && u !== void 0 ? u : x(Mb, Object.assign({}, d, { style: Object.assign({ fontSize: "130%" }, f("iconCancel", t)) }));
    case "chevron":
      return (l = c == null ? void 0 : c.chevron) !== null && l !== void 0 ? l : x(Lb, { className: "jer-accordion-icon" + (n ? " jer-rotate-90" : ""), size: "1em", style: f("iconCollection", t) });
    default:
      return x($i, {});
  }
}, $c = ({ startEdit: e, handleDelete: t, handleAdd: n, enableClipboard: r, type: o, nodeData: i, translate: s }) => {
  const { getStyles: a } = Bt(), u = s("KEY_NEW", i), [l, f] = _.useState(!1), [c, d] = _.useState(u), { key: p, path: g, value: h } = i;
  return _.useEffect(() => {
    l || d(u);
  }, [l]), Te("div", { className: "jer-edit-buttons", style: l ? { opacity: 1 } : void 0, children: [r && x("div", { onClick: (m) => {
    let C, w = "value", D = "";
    r && ((m.ctrlKey || m.metaKey) === !0 ? (C = kb(g), D = C, w = "path") : (C = h, D = o ? JSON.stringify(h, null, 2) : String(C)), navigator.clipboard.writeText(D)), typeof r == "function" && r({ value: C, stringValue: D, path: g, key: p, type: w });
  }, className: "jer-copy-pulse", children: x(tn, { name: "copy", nodeData: i }) }), e && x("div", { onClick: e, children: x(tn, { name: "edit", nodeData: i }) }), t && x("div", { onClick: t, children: x(tn, { name: "delete", nodeData: i }) }), n && x("div", { onClick: () => {
    o === "object" ? f(!0) : n("");
  }, children: x(tn, { name: "add", nodeData: i }) }), l && n && o === "object" && Te($i, { children: [x("input", { className: "jer-input-new-key", type: "text", name: "new-object-key", value: c, onChange: (m) => d(m.target.value), autoFocus: !0, onFocus: (m) => m.target.select(), onKeyDown: (m) => {
    m.key === "Enter" && n ? (f(!1), n(c)) : m.key === "Escape" && f(!1);
  }, style: a("input", i) }), x(Os, { onOk: () => {
    c && (f(!1), n(c));
  }, onCancel: () => {
    f(!1);
  }, nodeData: i })] })] });
}, Os = ({ onOk: e, onCancel: t, nodeData: n }) => Te("div", { className: "jer-confirm-buttons", children: [x("div", { onClick: e, children: x(tn, { name: "ok", nodeData: n }) }), x("div", { onClick: t, children: x(tn, { name: "cancel", nodeData: n }) })] }), kb = (e) => e.reduce((t, n) => typeof n == "number" ? `${t}[${n}]` : t === "" ? n : `${t}.${n}`, ""), $b = ["string", "number", "boolean", "null", "object", "array"], Vc = (e = [], t) => {
  const n = e.filter(({ condition: g }) => g(t));
  if (n.length === 0)
    return {};
  const r = n[0], { element: o, wrapperElement: i, customNodeProps: s, wrapperProps: a, hideKey: u = !1, showEditTools: l = !0, showOnEdit: f = !1, showOnView: c = !0, showCollectionWrapper: d = !0 } = r, p = Rc(r, ["element", "wrapperElement", "customNodeProps", "wrapperProps", "hideKey", "showEditTools", "showOnEdit", "showOnView", "showCollectionWrapper"]);
  return Object.assign({ CustomNode: o, CustomWrapper: i, customNodeProps: s, wrapperProps: a, hideKey: u, showEditTools: l, showOnEdit: f, showOnView: c, showCollectionWrapper: d }, p);
}, ro = (e) => e !== null && typeof e == "object", jc = (e, t, n, r = "") => {
  if (!n && !r)
    return !0;
  switch (e) {
    case "collection":
      if (n) {
        if (n(t, r))
          return !0;
        if (!Li(r, t, n))
          return !1;
      }
      if (!n && r && !Li(r, t))
        return !1;
      break;
    case "value":
      if (n && !n(t, r) || !n && r && !vn(t, r))
        return !1;
  }
  return !0;
}, Li = (e = "", t, n = vn) => {
  const r = t.value;
  return Object.entries(r).some(([o, i]) => {
    const s = [...t.path, o], a = Object.assign(Object.assign({}, t), { key: o, path: s, level: t.level + 1, value: i, size: s.length, parentData: r });
    return ro(i) ? Li(e, a, n) : n(a, e);
  });
}, vn = (e, t = "") => {
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
}, vu = ({ key: e, path: t }, n = "") => !!vn({ value: e }, n) || !!t.some((r) => vn({ value: r }, n)), Gc = _.createContext({ collapseState: null, setCollapseState: () => {
}, doesPathMatch: () => !1, currentlyEditingElement: null, setCurrentlyEditingElement: () => {
}, areChildrenBeingEdited: () => !1 }), Vb = ({ children: e }) => {
  const [t, n] = _.useState(null), [r, o] = _.useState(null);
  return x(Gc.Provider, { value: { collapseState: t, setCollapseState: n, doesPathMatch: (i) => {
    if (t === null)
      return !1;
    for (const [s, a] of t.path.entries())
      if (a !== i[s])
        return !1;
    return !0;
  }, currentlyEditingElement: r, setCurrentlyEditingElement: o, areChildrenBeingEdited: (i) => r !== null && r.includes(i) }, children: e });
}, Ts = () => _.useContext(Gc), zc = (e) => {
  const { data: t, parentData: n, nodeData: r, onEdit: o, onDelete: i, onChange: s, onError: a, showErrorMessages: u, enableClipboard: l, restrictEditFilter: f, restrictDeleteFilter: c, restrictTypeSelection: d, searchFilter: p, searchText: g, showLabel: h, stringTruncate: m, showStringQuotes: C, indent: w, translate: D, customNodeDefinitions: y } = e, { getStyles: v } = Bt(), { currentlyEditingElement: S, setCurrentlyEditingElement: N, setCollapseState: P } = Ts(), [M, O] = _.useState(typeof t == "function" ? "**INVALID_FUNCTION**" : t), [L, R] = _.useState(null), { key: T, path: j } = r, H = Vc(y, r), [J, Q] = _.useState(Ir(t, H)), X = Er(j), se = _.useCallback((z) => {
    if (!s)
      return void O(z);
    const ue = s({ currentData: r.fullData, newValue: z, currentValue: M, name: T, path: j });
    O(ue);
  }, [s]);
  _.useEffect(() => {
    O(typeof t == "function" ? "**INVALID_FUNCTION**" : t), Q(Ir(t, H));
  }, [t, L]);
  const Y = _.useMemo(() => !f(r), [r]), ce = _.useMemo(() => !c(r), [r]), Z = _.useMemo(() => (z, ue) => {
    var Ce;
    Ce = z.message, u && (R(Ce), setTimeout(() => R(null), 2500)), console.warn("Error", Ce), a && a({ currentData: r.fullData, errorValue: ue, currentValue: M, name: T, path: j, error: z });
  }, [a, u]), { CustomNode: ge, customNodeProps: V, hideKey: te, showEditTools: be = !0, showOnEdit: je, showOnView: le } = H, de = [...$b, ...y.filter(({ showInTypesSelector: z = !1, name: ue }) => z && !!ue).map(({ name: z }) => z)], Ae = _.useMemo(() => {
    if (typeof d == "boolean")
      return d ? [] : de;
    if (Array.isArray(d))
      return d;
    const z = d(r);
    return typeof z == "boolean" ? z ? [] : de : z;
  }, [r, d]);
  if (!jc("value", r, p, g))
    return null;
  const we = () => {
    let z;
    switch (N(null), J) {
      case "object":
        z = { [D("DEFAULT_NEW_KEY", r)]: M };
        break;
      case "array":
        z = M ?? [];
        break;
      case "number": {
        const ue = Number(M);
        z = isNaN(ue) ? 0 : ue;
        break;
      }
      default:
        z = M;
    }
    o(z, j).then((ue) => {
      ue && Z({ code: "UPDATE_ERROR", message: ue }, z);
    });
  }, I = () => {
    N(null), O(t), Q(Ir(t, H));
  }, ae = S === X, $ = S === `key_${X}`, Le = typeof j.slice(-1)[0] != "number" && Y && ce, Fe = !ae && L, Oe = ae && Ae.length > 0, _e = J !== "invalid" && !L && be, We = h && $, Ge = h && !$ && !te, at = { value: M, parentData: n, setValue: se, isEditing: ae, setIsEditing: Y ? () => N(X) : () => {
  }, handleEdit: we, handleCancel: I, path: j, stringTruncate: m, showStringQuotes: C, nodeData: r, translate: D }, Ze = ge && (ae && je || !ae && le) ? x(ge, Object.assign({}, e, { value: M, customNodeProps: V, setValue: se, handleEdit: we, handleCancel: I, handleKeyPress: (z) => {
    z.key === "Enter" ? we() : z.key === "Escape" && I();
  }, isEditing: ae, setIsEditing: () => N(X), getStyles: v })) : jb(Ir(t), at);
  return x("div", { className: "jer-component jer-value-component", style: { marginLeft: w / 2 + "em" }, children: Te("div", { className: "jer-value-main-row", style: { flexWrap: T.length > 10 ? "wrap" : "nowrap" }, children: [Ge && Te("span", { className: "jer-key-text", style: Object.assign(Object.assign({}, v("property", r)), { minWidth: `${Math.min(String(T).length + 1, 5)}ch`, flexShrink: T.length > 10 ? 1 : 0 }), onDoubleClick: () => Le && N(`key_${X}`), children: [T === "" ? x("span", { className: "jer-empty-string" }) : T, ":"] }), We && x("input", { className: "jer-input-text jer-key-edit", type: "text", name: X, defaultValue: T, autoFocus: !0, onFocus: (z) => z.target.select(), onKeyDown: (z) => {
    z.key === "Enter" ? ((ue) => {
      if (N(null), T === ue || !n)
        return;
      const Ce = j.slice(0, -1);
      if (Object.keys(n).includes(ue))
        return void Z({ code: "KEY_EXISTS", message: D("ERROR_KEY_EXISTS", r) }, ue);
      const ze = Object.fromEntries(Object.entries(n).map(([vt, Gt]) => vt === T ? [ue, Gt] : [vt, Gt]));
      o(ze, Ce);
    })(z.target.value) : z.key === "Escape" && I();
  }, style: { width: String(T).length / 1.5 + 0.5 + "em" } }), Te("div", { className: "jer-value-and-buttons", children: [x("div", { className: "jer-input-component", children: Ze }), ae ? x(Os, { onOk: we, onCancel: I, nodeData: r }) : _e && x($c, { startEdit: Y ? () => N(X) : void 0, handleDelete: ce ? () => {
    i(M, j).then((z) => {
      z && Z({ code: "DELETE_ERROR", message: z }, M);
    });
  } : void 0, enableClipboard: l, translate: D, nodeData: r }), Oe && Te("div", { className: "jer-select", children: [x("select", { name: `${T}-type-select`, className: "jer-type-select", onChange: (z) => ((ue) => {
    const Ce = y.find((ze) => ze.name === ue);
    if (Ce)
      o(Ce.defaultValue, j), Q(ue);
    else {
      const ze = Gb(M, ue, D("DEFAULT_NEW_KEY", r), H != null && H.CustomNode ? D("DEFAULT_STRING", r) : void 0);
      se(ze), o(ze, j), P({ path: j, collapsed: !1 }), Q(ue);
    }
  })(z.target.value), value: J, children: Ae.map((z) => x("option", { value: z, children: z }, z)) }), x("span", { className: "focus" })] }), Fe && x("span", { className: "jer-error-slug", style: v("error", r), children: L })] })] }) });
}, Ir = (e, t) => t != null && t.CustomNode && (t != null && t.name) && t.showInTypesSelector ? t.name : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : e === null ? "null" : "invalid", jb = (e, t) => {
  const n = t.value;
  switch (e) {
    case "string":
      return x(wb, Object.assign({}, t, { value: n }));
    case "number":
      return x(_b, Object.assign({}, t, { value: n }));
    case "boolean":
      return x(Sb, Object.assign({}, t, { value: n }));
    case "null":
      return x(Fb, Object.assign({}, t));
    case "object":
      return x(Nb, Object.assign({}, t, { value: n }));
    case "array":
      return x(xb, Object.assign({}, t));
    default:
      return x(Ob, Object.assign({}, t));
  }
}, Gb = (e, t, n, r) => {
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
}, Uc = (e) => {
  var { data: t, nodeData: n, parentData: r, showCollectionCount: o } = e, i = Rc(e, ["data", "nodeData", "parentData", "showCollectionCount"]);
  const { getStyles: s } = Bt(), { collapseState: a, setCollapseState: u, doesPathMatch: l, currentlyEditingElement: f, setCurrentlyEditingElement: c, areChildrenBeingEdited: d } = Ts(), { onEdit: p, onAdd: g, onDelete: h, onError: m, showErrorMessages: C, restrictEditFilter: w, restrictDeleteFilter: D, restrictAddFilter: y, collapseFilter: v, enableClipboard: S, searchFilter: N, searchText: P, indent: M, keySort: O, showArrayIndices: L, defaultValue: R, translate: T, customNodeDefinitions: j, useJSON5Editor: H } = i, J = _.useMemo(() => H ? H instanceof Object ? (q) => Ko.stringify(q, H) : (q) => Ko.stringify(q, { space: 2 }) : (q) => JSON.stringify(q, null, 2), [H]), [Q, X] = _.useState(J(t)), [se, Y] = _.useState(null), ce = v(n), [Z, ge] = _.useState(ce), V = Object.assign(Object.assign({}, n), { collapsed: Z }), { path: te, key: be, size: je } = V, le = Er(te), de = _.useRef(!ce), [Ae, we] = _.useState(!1);
  _.useEffect(() => {
    X(J(t));
  }, [t]), _.useEffect(() => {
    const q = v(V);
    de.current = !q, ge(q);
  }, [v]), _.useEffect(() => {
    a !== null && l(te) && (de.current = !0, ge(a.collapsed));
  }, [a]);
  const I = _.useMemo(() => !w(V), [V]), ae = _.useMemo(() => !D(V), [V]), $ = _.useMemo(() => !y(V), [V]), Le = _.useMemo(() => (q) => typeof R != "function" ? R : R(q), [R]), { CustomNode: Fe, customNodeProps: Oe, CustomWrapper: _e, wrapperProps: We = {}, hideKey: Ge, showEditTools: at = !0, showOnEdit: Ze, showOnView: z, showCollectionWrapper: ue = !0 } = _.useMemo(() => Vc(j, V), []), Ce = _.useMemo(() => (q, ne) => {
    var Ie;
    Ie = q.message, C && (Y(Ie), setTimeout(() => Y(null), 2500)), console.warn("Error", Ie), m && m({ currentData: V.fullData, errorValue: ne, currentValue: t, name: be, path: te, error: q });
  }, [m, C]);
  if (!jc("collection", V, N, P) && V.level > 0)
    return null;
  const ze = Array.isArray(t) ? "array" : "object", vt = ze === "array" ? { open: "[", close: "]" } : { open: "{", close: "}" }, Gt = getComputedStyle(document.documentElement).getPropertyValue("--jer-expand-transition-time"), an = (q) => {
    q.key === "Enter" && (q.metaKey || q.shiftKey || q.ctrlKey) ? un() : q.key === "Escape" && bt();
  }, un = () => {
    try {
      const q = Ko.parse(Q);
      if (c(null), Y(null), JSON.stringify(q) === JSON.stringify(t))
        return;
      p(q, te).then((ne) => {
        ne && Ce({ code: "UPDATE_ERROR", message: ne }, q);
      });
    } catch {
      Ce({ code: "INVALID_JSON", message: T("ERROR_INVALID_JSON", V) }, Q);
    }
  }, ln = te.length > 0 ? () => {
    h(t, te).then((q) => {
      q && Ce({ code: "DELETE_ERROR", message: q }, eo(t, te));
    });
  } : void 0, bt = () => {
    c(null), Y(null), X(J(t));
  }, Ne = f === le, It = f === `key_${le}`, cn = typeof te.slice(-1)[0] == "number", wn = r !== null && I && $ && ae && !cn, yr = o === "when-closed" ? Z : o, zt = !Ne && at, Do = (L || !cn) && !Ge && be !== void 0, Eo = Fe && (Ne && Ze || !Ne && z), xe = O && ze === "object", Ct = Object.entries(t).map(([q, ne]) => [ze === "array" ? Number(q) : q, ne]);
  xe && Ct.sort(typeof O == "function" ? (q, ne) => O(q[0], ne[0]) : void 0);
  const yo = JSON.stringify(t, null, 2).replace(/\\n/g, `
`).split(`
`).length, _n = de.current ? Ne ? x("div", { className: "jer-collection-text-edit", children: Te("div", { children: [x(Mc, { className: "jer-collection-text-area", name: le, value: Q, setValue: X, isEditing: Ne, handleKeyPress: an, styles: s("input", V) }), x("div", { className: "jer-collection-input-button-row", children: x(Os, { onOk: un, onCancel: bt, nodeData: V }) })] }) }) : Ct.map(([q, ne], Ie) => {
    const Rt = { key: q, value: ne, path: [...te, q], level: te.length + 1, index: Ie, size: ro(ne) ? Object.keys(ne).length : 1, parentData: t, fullData: V.fullData };
    return x("div", { className: "jer-collection-element", style: s("collectionElement", Rt), children: ro(ne) ? x(Uc, Object.assign({ data: ne, parentData: t, nodeData: Rt, showCollectionCount: o }, i), q) : x(zc, Object.assign({ data: ne, parentData: t, nodeData: Rt }, i, { showLabel: ze === "object" || L }), q) }, q);
  }) : null, Pt = !!ue && Z;
  Pt || (de.current = !0);
  const Sn = Object.assign(Object.assign({}, i), { data: t, value: t, parentData: r, nodeData: V, setValue: (q) => jr(void 0, void 0, void 0, function* () {
    return yield p(q, te);
  }), handleEdit: un, handleCancel: bt, handleKeyPress: an, isEditing: Ne, setIsEditing: () => c(le), getStyles: s }), vr = Eo ? x(Fe, Object.assign({ customNodeProps: Oe }, Sn, { children: _n })) : _n, br = It ? x("input", { className: "jer-input-text jer-key-edit", type: "text", name: le, defaultValue: be, autoFocus: !0, onFocus: (q) => q.target.select(), onKeyDown: (q) => {
    q.key === "Enter" ? ((ne) => {
      if (c(null), be === ne || !r)
        return;
      const Ie = te.slice(0, -1);
      if (Object.keys(r).includes(ne))
        return void Ce({ code: "KEY_EXISTS", message: T("ERROR_KEY_EXISTS", V) }, ne);
      const Rt = Object.fromEntries(Object.entries(r).map(([xn, On]) => xn === be ? [ne, On] : [xn, On]));
      p(Rt, Ie);
    })(q.target.value) : q.key === "Escape" && bt();
  }, style: { width: String(be).length / 1.5 + 0.5 + "em" } }) : Do && x("span", { className: "jer-key-text", style: s("property", V), onDoubleClick: () => wn && c(`key_${le}`), children: be === "" ? x("span", { className: te.length > 0 ? "jer-empty-string" : void 0 }) : `${be}:` }), Fn = zt && x($c, { startEdit: I ? () => {
    de.current = !0, c(le), ge(!1);
  } : void 0, handleAdd: $ ? (q) => {
    ge(!1);
    const ne = Le(V);
    ze === "array" ? g(ne, [...te, t.length]).then((Ie) => {
      Ie && Ce({ code: "ADD_ERROR", message: Ie }, ne);
    }) : q in t ? Ce({ code: "KEY_EXISTS", message: T("ERROR_KEY_EXISTS", V) }, q) : g(ne, [...te, q]).then((Ie) => {
      Ie && Ce({ code: "ADD_ERROR", message: Ie }, ne);
    });
  } : void 0, handleDelete: ae ? ln : void 0, enableClipboard: S, type: ze, nodeData: V, translate: T }), Nn = Te("div", { className: "jer-component jer-collection-component", style: Object.assign({ marginLeft: (te.length === 0 ? 0 : M / 2) + "em" }, s("collection", V)), children: [ue ? Te("div", { className: "jer-collection-header-row", style: { position: "relative" }, children: [Te("div", { className: "jer-collection-name", children: [x("div", { className: "jer-collapse-icon", onClick: (q) => ((ne) => {
    if (ne.getModifierState("Alt"))
      return de.current = !0, void u({ collapsed: !Z, path: te });
    f && f.includes(le) || (we(!0), de.current = !0, ge(!Z), setTimeout(() => we(!1), 500));
  })(q), children: x(tn, { name: "chevron", rotate: Z, nodeData: V }) }), br, !Ne && x("span", { className: "jer-brackets jer-bracket-open", style: s("bracket", V), children: vt.open })] }), !Ne && yr && x("div", { className: "jer-collection-item-count" + (yr ? " jer-visible" : " jer-hidden"), style: s("itemCount", V), children: je === 1 ? T("ITEM_SINGLE", Object.assign(Object.assign({}, V), { size: 1 }), 1) : T("ITEMS_MULTIPLE", V, je) }), x("div", { className: "jer-brackets" + (Pt ? " jer-visible" : " jer-hidden"), style: s("bracket", V), children: vt.close }), Fn] }) : Ge ? x($i, {}) : Te("div", { className: "jer-collection-header-row", style: { position: "relative" }, children: [br, Fn] }), Te("div", { className: "jer-collection-inner", style: Object.assign({ maxHeight: Pt ? 0 : d(le) ? void 0 : 3 * yo + "em", overflowY: Pt || Ae ? "hidden" : "visible", transition: `max-height ${Gt}` }, s("collectionInner", V)), children: [vr, x("div", { className: Ne ? "jer-collection-error-row" : "jer-collection-error-row-edit", children: se && x("span", { className: "jer-error-slug", style: s("error", V), children: se }) }), !Ne && ue && x("div", { className: "jer-brackets jer-bracket-outside", style: s("bracket", V), children: vt.close })] })] });
  return _e ? x(_e, Object.assign({ customNodeProps: We }, Sn, { children: Nn })) : Nn;
}, zb = { ITEM_SINGLE: "{{count}} item", ITEMS_MULTIPLE: "{{count}} items", KEY_NEW: "Enter new key", ERROR_KEY_EXISTS: "Key already exists", ERROR_INVALID_JSON: "Invalid JSON", ERROR_UPDATE: "Update unsuccessful", ERROR_DELETE: "Delete unsuccessful", ERROR_ADD: "Adding node unsuccessful", DEFAULT_STRING: "New data!", DEFAULT_NEW_KEY: "key" }, Ub = (e, t) => (n, r, o) => ((i, s, a, u, l) => {
  if (s[u]) {
    const c = s[u](a);
    if (c !== null)
      return c;
  }
  const f = u in i ? i[u] : zb[u];
  return l === void 0 ? f : f == null ? void 0 : f.replace("{{count}}", String(l));
})(e, t, r, n, o), Wb = ({ data: e, rootName: t = "root", onUpdate: n = () => {
}, onEdit: r = n, onDelete: o = n, onAdd: i = n, onChange: s, onError: a, showErrorMessages: u = !0, enableClipboard: l = !0, theme: f = "default", icons: c, indent: d = 3, collapse: p = !1, showCollectionCount: g = !0, restrictEdit: h = !1, restrictDelete: m = !1, restrictAdd: C = !1, restrictTypeSelection: w = !1, searchFilter: D, searchText: y, searchDebounceTime: v = 350, keySort: S = !1, showArrayIndices: N = !0, showStringQuotes: P = !0, defaultValue: M = null, minWidth: O = 250, maxWidth: L = "min(600px, 90vw)", rootFontSize: R, stringTruncate: T = 250, translations: j = {}, className: H, id: J, customText: Q = {}, customNodeDefinitions: X = [], useJSON5Editor: se = !1 }) => {
  const { getStyles: Y, setTheme: ce, setIcons: Z } = Bt(), { setCollapseState: ge } = Ts(), V = _.useCallback(Pr(p), [p]), te = _.useCallback(Ub(j, Q), [j, Q]), [be, je] = _.useState(y), [le, de] = _.useState(e);
  _.useEffect(() => {
    f && ce(f), c && Z(c);
  }, [f, c]), _.useEffect(() => {
    ge(null), de(e);
  }, [e]), _.useEffect(() => {
    const Oe = setTimeout(() => je(y), v);
    return () => clearTimeout(Oe);
  }, [y, v]);
  const Ae = { key: t, path: [], level: 0, index: 0, value: le, size: Object.keys(le).length, parentData: null, fullData: le }, we = Pr(h), I = Pr(m), ae = Pr(C), $ = qb(D), Le = { name: t, nodeData: Ae, onEdit: (Oe, _e) => jr(void 0, void 0, void 0, function* () {
    const { currentData: We, newData: Ge, currentValue: at, newValue: Ze } = Jo(le, _e, Oe, "update");
    if (at === Ze)
      return;
    de(Ge);
    const z = yield r({ currentData: We, newData: Ge, currentValue: at, newValue: Ze, name: _e.slice(-1)[0], path: _e });
    return z !== void 0 ? (de(We), z === !1 ? te("ERROR_UPDATE", Ae) : z) : void 0;
  }), onDelete: (Oe, _e) => jr(void 0, void 0, void 0, function* () {
    const { currentData: We, newData: Ge, currentValue: at, newValue: Ze } = Jo(le, _e, Oe, "delete");
    de(Ge);
    const z = yield o({ currentData: We, newData: Ge, currentValue: at, newValue: Ze, name: _e.slice(-1)[0], path: _e });
    if (z !== void 0)
      return de(We), z === !1 ? te("ERROR_UPDATE", Ae) : z;
  }), onAdd: (Oe, _e) => jr(void 0, void 0, void 0, function* () {
    const { currentData: We, newData: Ge, currentValue: at, newValue: Ze } = Jo(le, _e, Oe, "add");
    de(Ge);
    const z = yield i({ currentData: We, newData: Ge, currentValue: at, newValue: Ze, name: _e.slice(-1)[0], path: _e });
    if (z !== void 0)
      return de(We), z === !1 ? te("ERROR_UPDATE", Ae) : z;
  }), onChange: s, onError: a, showErrorMessages: u, showCollectionCount: g, collapseFilter: V, restrictEditFilter: we, restrictDeleteFilter: I, restrictAddFilter: ae, restrictTypeSelection: w, searchFilter: $, searchText: be, enableClipboard: l, keySort: S, showArrayIndices: N, showStringQuotes: P, indent: d, defaultValue: M, stringTruncate: T, translate: te, customNodeDefinitions: X, parentData: null, useJSON5Editor: se }, Fe = Object.assign(Object.assign({}, Y("container", Ae)), { minWidth: O, maxWidth: L });
  return Fe.fontSize = R ?? Fe.fontSize, x("div", { id: J, className: "jer-editor-container " + H, style: Fe, children: ro(le) ? x(Uc, Object.assign({ data: le }, Le)) : x(zc, Object.assign({ data: le, showLabel: !0 }, Le)) });
}, Hb = (e) => x(yb, { children: x(Vb, { children: x(Wb, Object.assign({}, e)) }) }), Jo = (e, t, n, r) => {
  if (t.length === 0)
    return { currentData: e, newData: n, currentValue: e, newValue: n };
  const o = r !== "add" ? eo(e, t) : void 0;
  return { currentData: e, newData: Zv(hb(e), t, n, { remove: r === "delete" }), currentValue: o, newValue: r !== "delete" ? n : void 0 };
}, Pr = (e) => typeof e == "boolean" ? () => e : typeof e == "number" ? ({ level: t }) => t >= e : e, qb = (e) => {
  if (e !== void 0)
    return e === "value" ? vn : e === "key" ? vu : e === "all" ? (t, n) => vn(t, n) || vu(t, n) : e;
}, bu = (e) => {
  const t = [];
  e.rows && e.rows.forEach((n) => {
    if (n.footnotesId) {
      const { dataKey: r, staticFootnotes: o } = e.visualizations[n.footnotesId] || {};
      !r && !(o != null && o.length) ? (delete e.visualizations[n.footnotesId], delete n.footnotesId) : t.push(n.footnotesId);
    }
  }), e.visualizations && Object.keys(e.visualizations).forEach((n) => {
    e.visualizations[n].type === "footnotes" && !t.includes(n) && delete e.visualizations[n];
  });
}, Cu = (e) => {
  e.datasets && Object.keys(e.datasets).forEach((t) => {
    delete e.datasets[t].formattedData, e.datasets[t].dataUrl && delete e.datasets[t].data;
  }), e.visualizations && Object.keys(e.visualizations).forEach((t) => {
    e.visualizations[t] = Ke.omit(e.visualizations[t], [
      "runtime",
      "formattedData",
      "data",
      "editing",
      "originalFormattedData"
    ]);
  }), e.rows && e.rows.forEach((t, n) => {
    t.dataKey && (e.rows[n] = Ke.omit(t, ["data", "formattedData"]));
  });
}, Au = (e) => {
  var t;
  (t = e.dashboard) != null && t.sharedFilters && e.dashboard.sharedFilters.forEach((n, r) => {
    delete e.dashboard.sharedFilters[r].active, n.subGrouping && delete e.dashboard.sharedFilters[r].subGrouping.active, n.type === "urlfilter" && delete e.dashboard.sharedFilters[r].values;
  });
}, wu = (e) => {
  e.visualizations && Object.keys(e.visualizations).forEach((t) => {
    (e.visualizations[t].filters || []).forEach((r, o) => {
      delete e.visualizations[t].filters[o].active, delete e.visualizations[t].filters[o].values;
    });
  });
}, Yb = (e) => {
  e.datasets && Object.keys(e.datasets).forEach((t) => {
    delete e.datasets[t].runtimeDataUrl;
  });
}, Xb = (e) => {
  const t = Ke.cloneDeep(e);
  return t.type === "dashboard" ? (t.multiDashboards && (t.multiDashboards.forEach((n, r) => {
    Cu(t.multiDashboards[r]), Au(t.multiDashboards[r]), bu(t.multiDashboards[r]), wu(t.multiDashboards[r]);
  }), delete t.dashboard, delete t.rows, delete t.visualizations, delete t.label, delete t.activeDashboard), Cu(t), Au(t), bu(t), wu(t), Yb(t)) : (delete t.runtime, delete t.formattedData, t.dataUrl && delete t.data), t;
};
const UC = ({ loadConfig: e, config: t, convertStateToConfig: n, onExpandCollapse: r = () => {
} }) => {
  const [o, i] = _.useState(!1), [s, a] = _.useState({}), u = (d) => {
    i(d), r();
  }, l = (d) => !!["datasets", "data", "originalFormattedData", "formattedData"].includes(String(d.key)), f = (d) => {
    a(d.newData);
  };
  _.useEffect(() => {
    let d = Xb(t);
    t.type !== "dashboard" && (d = n()), a(d);
  }, [t]);
  const c = {
    chart: ["Charts", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ E.createElement(js, null)],
    dashboard: ["Dashboard", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ E.createElement(js, null)],
    map: ["Maps", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", /* @__PURE__ */ E.createElement(Qv, null)],
    "markup-include": [
      "Markup Include",
      "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/Markup-Include.html",
      /* @__PURE__ */ E.createElement(Yc, null)
    ]
  };
  return t.type ? /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("a", { href: c[t.type][1], target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, c[t.type][2], /* @__PURE__ */ E.createElement("div", null, /* @__PURE__ */ E.createElement("span", { className: "heading-3" }, "Get Help with ", c[t.type][0]), /* @__PURE__ */ E.createElement("p", null, "Examples and documentation"))), /* @__PURE__ */ E.createElement("div", { className: "advanced" }, /* @__PURE__ */ E.createElement("span", { className: "advanced-toggle-link", onClick: () => u(!o) }, /* @__PURE__ */ E.createElement("span", null, o ? "— " : "+ "), "Advanced Options"), o && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("section", { className: "error-box py-2 px-3 my-2" }, /* @__PURE__ */ E.createElement("div", null, /* @__PURE__ */ E.createElement("strong", { className: "pt-1" }, "Warning"), /* @__PURE__ */ E.createElement("p", null, "This can cause serious errors in your visualization."))), /* @__PURE__ */ E.createElement("p", { className: "pb-2" }, "This tool displays the actual ", /* @__PURE__ */ E.createElement("acronym", { title: "JavaScript Object Notation" }, "JSON"), " configuration that is generated by this editor and allows you to edit properties directly and apply them."), /* @__PURE__ */ E.createElement(
    Hb,
    {
      className: "advanced-json-editor",
      data: s,
      onUpdate: f,
      rootName: "",
      collapse: l
    }
  ), /* @__PURE__ */ E.createElement(
    "button",
    {
      className: "btn btn-success m-2 p-2",
      onClick: () => {
        e(s), u(!o);
      }
    },
    "Apply Configuration Changes"
  )))) : /* @__PURE__ */ E.createElement(E.Fragment, null);
}, Kb = ({ fieldName: e, fieldKey: t, fieldType: n, controls: r, deleteField: o, children: i }) => {
  const [s, a] = r, u = s[t], l = (f, c) => {
    a({ ...s, [f]: c });
  };
  return u ? /* @__PURE__ */ E.createElement("fieldset", { className: "edit-block mb-1", key: t }, /* @__PURE__ */ E.createElement("div", { className: "d-flex justify-content-between" }, /* @__PURE__ */ E.createElement("button", { className: "btn btn-light", onClick: () => l(t, !1) }, /* @__PURE__ */ E.createElement(qn, { display: "caretUp" })), /* @__PURE__ */ E.createElement(
    "button",
    {
      className: "btn btn-danger btn-sm",
      onClick: (f) => {
        f.preventDefault(), o();
      }
    },
    "Remove"
  )), i) : /* @__PURE__ */ E.createElement("div", { className: "mb-1" }, /* @__PURE__ */ E.createElement("button", { className: "btn btn-light", onClick: () => l(t, !0) }, /* @__PURE__ */ E.createElement(qn, { display: "caretDown" })), /* @__PURE__ */ E.createElement("span", null, " ", e ? `${e}` : "New " + n));
}, ki = ({ orderedValues: e, handleFilterOrder: t }) => /* @__PURE__ */ E.createElement(Zy, { onDragEnd: ({ source: n, destination: r }) => t(n == null ? void 0 : n.index, r == null ? void 0 : r.index) }, /* @__PURE__ */ E.createElement(Jv, { droppableId: "filter_order" }, (n) => /* @__PURE__ */ E.createElement("ul", { ...n.droppableProps, className: "sort-list", ref: n.innerRef, style: { marginTop: "1em" } }, e == null ? void 0 : e.map((r, o) => /* @__PURE__ */ E.createElement(Cv, { key: r, draggableId: `draggableFilter-${r}`, index: o }, (i, s) => /* @__PURE__ */ E.createElement("li", null, /* @__PURE__ */ E.createElement(
  "div",
  {
    className: s.isDragging ? "currently-dragging" : "",
    style: i.draggableProps.style,
    ref: i.innerRef,
    ...i.draggableProps,
    ...i.dragHandleProps
  },
  r
)))), n.placeholder))), Jb = ({
  config: e,
  dataColumns: t,
  handleGroupingCustomOrder: n,
  handleNameChange: r,
  filterIndex: o,
  rawData: i,
  updateField: s
}) => {
  const a = e.filters[o], u = a == null ? void 0 : a.subGrouping, l = [];
  e.filters.forEach((D, y) => {
    o !== y && (l.push(D.columnName), u != null && u.columnName && l.push(u.columnName));
  });
  const f = (D, y) => {
    s("filters", o, D, y);
  }, c = (D) => {
    const y = {
      values: Ke.cloneDeep(a.values),
      order: D
    }, v = Zo(y).values, S = Ke.cloneDeep(e.filters);
    S[o] = { ...a, values: v, order: D }, D === "cust" ? S[o].orderedValues = v : delete S[o].orderedValues, s(null, null, "filters", S);
  }, d = (D) => {
    s("filters", o, "subGrouping", D);
  }, p = (D) => {
    var N;
    const v = ((N = a.orderedValues) != null && N.length ? a.orderedValues : a.values).reduce((P, M) => {
      const O = Ke.uniq(
        i.map((L) => L[a.columnName] === M ? L[D] : "").filter((L) => L !== "")
      ).sort();
      return P[M] = {
        values: O
        // add temp values when column changes
      }, P;
    }, {}), S = {
      ...u,
      columnName: D,
      valuesLookup: v
    };
    d(S);
  }, g = (D) => {
    const y = Object.keys(u.valuesLookup).reduce((S, N) => {
      const P = u.valuesLookup[N], { values: M } = Zo({ values: P.values, order: D });
      return S[N] = {
        values: M
      }, D === "cust" ? S[N].orderedValues = M : delete S[N].orderedValues, S;
    }, {}), v = { ...u, order: D, valuesLookup: y };
    d(v);
  }, h = (D, y, v, S) => {
    const N = Ke.cloneDeep(v), [P] = N.splice(D, 1);
    N.splice(y, 0, P);
    const M = Ke.cloneDeep(u);
    M.valuesLookup[S].values = N, M.valuesLookup[S].orderedValues = N, d({ ...M, order: "cust" });
  }, m = t.filter((D) => !l.includes(D)), C = _.useMemo(() => {
    var y;
    const D = e.filters[o];
    return !!(D.setByQueryParameter && ((y = D.subGrouping) != null && y.setByQueryParameter));
  }, [e, o]), w = (D) => {
    const y = e.filters, { checked: v } = D.target, S = v ? a.columnName : "", N = v ? u.columnName : "";
    y[o] = {
      ...e.filters[o],
      setByQueryParameter: S,
      subGrouping: { ...u, setByQueryParameter: N }
    }, s(null, null, "filters", y);
  };
  return /* @__PURE__ */ E.createElement("div", { className: "nesteddropdown-editor" }, /* @__PURE__ */ E.createElement("label", null, /* @__PURE__ */ E.createElement("span", { className: "edit-label column-heading mt-2" }, "Label"), /* @__PURE__ */ E.createElement(
    "input",
    {
      type: "text",
      value: a.label,
      onChange: (D) => {
        f("label", D.target.value);
      }
    }
  )), /* @__PURE__ */ E.createElement("label", null, /* @__PURE__ */ E.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter Grouping", /* @__PURE__ */ E.createElement("span", null)), /* @__PURE__ */ E.createElement("select", { value: a.columnName, onChange: (D) => r(D.target.value) }, /* @__PURE__ */ E.createElement("option", { value: "" }, "- Select Option -"), m.map((D, y) => /* @__PURE__ */ E.createElement("option", { value: D, key: y }, D)))), /* @__PURE__ */ E.createElement("label", null, /* @__PURE__ */ E.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter SubGrouping", /* @__PURE__ */ E.createElement("span", null)), /* @__PURE__ */ E.createElement(
    "select",
    {
      value: (u == null ? void 0 : u.columnName) ?? "",
      onChange: (D) => {
        p(D.target.value);
      }
    },
    /* @__PURE__ */ E.createElement("option", { value: "" }, "- Select Option -"),
    m.map((D, y) => {
      if (D !== a.columnName)
        return /* @__PURE__ */ E.createElement("option", { value: D, key: y }, D);
    })
  )), /* @__PURE__ */ E.createElement("label", null, /* @__PURE__ */ E.createElement(
    "input",
    {
      type: "checkbox",
      checked: C,
      "aria-label": "Create query parameters",
      disabled: !a.columnName || !(u != null && u.columnName),
      onChange: (D) => w(D)
    }
  ), /* @__PURE__ */ E.createElement("span", null, " Create query parameters"), C && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("span", { className: "edit-label column-heading mt-2" }, "Grouping: Default Value Set By Query String Parameter"), /* @__PURE__ */ E.createElement(
    "input",
    {
      type: "text",
      value: a.setByQueryParameter,
      onChange: (D) => {
        f("setByQueryParameter", D.target.value);
      }
    }
  ), /* @__PURE__ */ E.createElement("span", { className: "edit-label column-heading mt-2" }, "SubGrouping: Default Value Set By Query String Parameter"), /* @__PURE__ */ E.createElement(
    "input",
    {
      type: "text",
      value: u == null ? void 0 : u.setByQueryParameter,
      onChange: (D) => {
        const y = D.target.value;
        d({ ...u, setByQueryParameter: y });
      }
    }
  ))), /* @__PURE__ */ E.createElement("label", { className: "mt-2" }, /* @__PURE__ */ E.createElement("div", { className: "edit-label column-heading float-right" }, a.columnName, " "), /* @__PURE__ */ E.createElement("span", { className: "edit-filterOrder column-heading " }, "Group Order"), /* @__PURE__ */ E.createElement("select", { value: a.order, onChange: (D) => c(D.target.value) }, Qo.map((D, y) => /* @__PURE__ */ E.createElement("option", { value: D.value, key: `filter-${D.label}-${y}` }, D.label))), a.order === "cust" && /* @__PURE__ */ E.createElement(ki, { orderedValues: a.orderedValues, handleFilterOrder: n })), (u == null ? void 0 : u.columnName) && /* @__PURE__ */ E.createElement("label", { className: "mt-2" }, /* @__PURE__ */ E.createElement("span", { className: "edit-filterOrder column-heading" }, "SubGrouping Order"), /* @__PURE__ */ E.createElement("div", { className: "edit-label column-heading float-right" }, u.columnName, " "), /* @__PURE__ */ E.createElement(
    "select",
    {
      value: u.order ? u.order : "asc",
      onChange: (D) => g(D.target.value)
    },
    Qo.map((D, y) => /* @__PURE__ */ E.createElement("option", { value: D.value, key: `filter-${y}` }, D.label))
  ), (u == null ? void 0 : u.order) === "cust" && a.values.map((D, y) => {
    const v = u.valuesLookup[D].orderedValues;
    return /* @__PURE__ */ E.createElement("div", { key: `group-subgroup-values-${D}-${y}` }, /* @__PURE__ */ E.createElement("span", { className: "font-weight-bold" }, D), /* @__PURE__ */ E.createElement(
      ki,
      {
        key: `subgroup-values-${D}-${y}`,
        orderedValues: v,
        handleFilterOrder: (S, N) => {
          h(S, N, v, D);
        }
      }
    ));
  })));
}, WC = ({ config: e, updateField: t, rawData: n }) => {
  const r = _.useState({}), o = _.useMemo(() => Ke.uniq(Ke.flatten(n == null ? void 0 : n.map((d) => Object.keys(d)))), [n]), i = (d) => {
    let p = Ke.cloneDeep(e.filters);
    p.splice(d, 1), t(null, null, "filters", p);
  }, s = (d, p, g) => {
    t("filters", p, d, g);
  }, a = (d, p) => {
    const g = Ke.cloneDeep(e.filters), h = { ...g[d], orderedValues: g[d].values };
    h.filterStyle = p, p === "multi-select" ? h.active = Array.isArray(h.active) ? h.active : [h.active] : Array.isArray(h.active) && (h.active = h.active[0]), p === "nested-dropdown" && (h.showDropdown = !0), g[d] = h, t(null, null, "filters", g);
  }, u = (d, p) => {
    const g = Ke.uniq(n.map((C) => C[p])), h = { ...Ke.cloneDeep(e.filters[d]), columnName: p, values: g };
    Zo(h), h.active = h.values[0];
    const m = e.filters.map((C, w) => w === d ? h : C);
    t(null, null, "filters", m);
  }, l = () => {
    const d = e.filters ? [...e.filters] : [], p = {
      values: [],
      filterStyle: "dropdown",
      id: Date.now(),
      showDropdown: !0
    };
    d.push(p), t(null, null, "filters", d);
  }, f = (d, p, g) => {
    const h = e.filters[g], m = [...h.orderedValues || h.values], [C] = m.splice(d, 1);
    m.splice(p, 0, C);
    const w = Ke.cloneDeep(e.filters), D = { ...w[g] };
    D.values = m, D.orderedValues = m, D.active = m[0], D.order = "cust", w[g] = D, t(null, null, "filters", w);
  }, c = (d) => e.filters.filter((p, g) => g !== d).map(({ label: p, columnName: g, id: h }) => ({ label: p || g, value: h }));
  return /* @__PURE__ */ E.createElement(E.Fragment, null, e.filters && /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(
    Bn,
    {
      value: e.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: t,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ E.createElement(wt, { style: { textTransform: "none" } }, /* @__PURE__ */ E.createElement(wt.Target, null, /* @__PURE__ */ E.createElement(qn, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ E.createElement(wt.Content, null, /* @__PURE__ */ E.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ E.createElement(
    Gs,
    {
      type: "textarea",
      label: "Filter intro text",
      value: e.filterIntro,
      updateField: t,
      fieldName: "filterIntro"
    }
  ), /* @__PURE__ */ E.createElement("br", null), /* @__PURE__ */ E.createElement("ul", { className: "filters-list" }, e.filters.map((d, p) => d.type === "url" ? /* @__PURE__ */ E.createElement(E.Fragment, null) : /* @__PURE__ */ E.createElement(
    Kb,
    {
      key: d.columnName,
      fieldName: d.columnName,
      fieldKey: p,
      fieldType: "Filter",
      controls: r,
      deleteField: () => i(p)
    },
    /* @__PURE__ */ E.createElement(
      Bn,
      {
        value: d.filterStyle,
        fieldName: "filterStyle",
        label: "Filter Style",
        updateField: (g, h, m, C) => a(p, C),
        options: Xc
      }
    ),
    d.filterStyle !== "nested-dropdown" ? /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(
      Bn,
      {
        value: d.columnName,
        fieldName: "columnName",
        label: "Filter",
        updateField: (g, h, m, C) => u(p, C),
        options: o,
        initial: "- Select Option -"
      }
    ), /* @__PURE__ */ E.createElement("label", null, /* @__PURE__ */ E.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ E.createElement(
      "input",
      {
        type: "checkbox",
        checked: d.showDropdown === void 0 ? !0 : d.showDropdown,
        onChange: (g) => {
          s("showDropdown", p, g.target.checked);
        }
      }
    )), /* @__PURE__ */ E.createElement("label", null, /* @__PURE__ */ E.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ E.createElement(
      "input",
      {
        type: "text",
        value: d.label,
        onChange: (g) => {
          s("label", p, g.target.value);
        }
      }
    )), d.filterStyle === "multi-select" && /* @__PURE__ */ E.createElement(
      Gs,
      {
        label: "Select Limit",
        value: d.selectLimit,
        updateField: t,
        section: "filters",
        subsection: p,
        fieldName: "selectLimit",
        type: "number",
        tooltip: /* @__PURE__ */ E.createElement(wt, { style: { textTransform: "none" } }, /* @__PURE__ */ E.createElement(wt.Target, null, /* @__PURE__ */ E.createElement(qn, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ E.createElement(wt.Content, null, /* @__PURE__ */ E.createElement("p", null, "The maximum number of items that can be selected.")))
      }
    ), /* @__PURE__ */ E.createElement("label", null, /* @__PURE__ */ E.createElement("span", { className: "edit-label column-heading" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ E.createElement(
      "input",
      {
        type: "text",
        value: d.setByQueryParameter,
        onChange: (g) => {
          s("setByQueryParameter", p, g.target.value);
        }
      }
    )), /* @__PURE__ */ E.createElement(
      Bn,
      {
        value: d.order || "asc",
        fieldName: "order",
        label: "Filter Order",
        updateField: (g, h, m, C) => {
          s("order", p, C), d.orderColumn && C !== "column" && s("orderColumn", p, "");
        },
        options: Qo
      }
    ), d.order === "cust" && /* @__PURE__ */ E.createElement(
      ki,
      {
        orderedValues: d.orderedValues || d.values,
        handleFilterOrder: (g, h) => f(g, h, p)
      }
    ), d.order === "column" && /* @__PURE__ */ E.createElement(
      Bn,
      {
        value: d.orderColumn,
        fieldName: "orderColumn",
        label: "Order Column",
        updateField: (g, h, m, C) => s("orderColumn", p, C),
        options: o
      }
    )) : /* @__PURE__ */ E.createElement(
      Jb,
      {
        config: e,
        dataColumns: o,
        filterIndex: p,
        rawData: n,
        handleGroupingCustomOrder: (g, h) => f(g, h, p),
        handleNameChange: (g) => u(p, g),
        updateField: t,
        updateFilterStyle: a
      }
    ),
    /* @__PURE__ */ E.createElement("label", null, /* @__PURE__ */ E.createElement("span", { className: "edit-label column-heading" }, "Filter Parents", " ", /* @__PURE__ */ E.createElement(wt, { style: { textTransform: "none" } }, /* @__PURE__ */ E.createElement(wt.Target, null, /* @__PURE__ */ E.createElement(qn, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ E.createElement(wt.Content, null, /* @__PURE__ */ E.createElement("p", null, "A selected parent's value will be used to filter the available options of this child filter.")))), /* @__PURE__ */ E.createElement(
      Jc,
      {
        fieldName: "parents",
        updateField: (g, h, m, C) => {
          s("parents", p, C);
        },
        options: c(p),
        selected: e.filters[p].parents
      }
    ))
  )))), !e.filters && /* @__PURE__ */ E.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ E.createElement("button", { type: "button", onClick: l, className: "btn btn-primary full-width" }, "Add Filter"));
}, HC = ({
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
  min: f = null,
  max: c = null,
  onClick: d,
  ...p
}) => {
  const [g, h] = _.useState(u);
  let m = () => {
    let D = "";
    return o && (D += o + "-"), i && (D += i + "-"), s && (D += s), D;
  };
  const C = () => ({
    flat: " slider--flat",
    block: " slider--block",
    pill: " slider--pill",
    "3d": " slider--3d"
  })[t] || "";
  _.useEffect(() => {
    u !== void 0 && u !== g && h(u);
  }, [u]), _.useEffect(() => {
    u !== void 0 && u !== g && a && a(o, i, s, g, l);
  }, [g]);
  const w = (D) => {
    h(!g), d && d(D);
  };
  return /* @__PURE__ */ E.createElement("div", { className: "input-group" }, e && /* @__PURE__ */ E.createElement("label", null, e), /* @__PURE__ */ E.createElement(
    "div",
    {
      className: "cove-input__slider" + (n === "small" ? "--small" : n === "large" ? "--large" : "") + C() + (g ? " active" : ""),
      onClick: w
    },
    /* @__PURE__ */ E.createElement("div", { className: "cove-input__slider-button" }),
    /* @__PURE__ */ E.createElement(
      "div",
      {
        className: "cove-input__slider-track",
        style: g && r ? { backgroundColor: r } : null
      }
    ),
    /* @__PURE__ */ E.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: m(), checked: g || !1, readOnly: !0 })
  ));
};
export {
  bC as $,
  UC as A,
  Cv as B,
  Dh as C,
  Zy as D,
  Lh as E,
  Kb as F,
  zC as G,
  Eh as H,
  HC as I,
  Km as J,
  qm as K,
  GC as L,
  jC as M,
  jm as N,
  Um as O,
  Qn as P,
  IC as Q,
  mC as R,
  DC as S,
  fn as T,
  vC as U,
  WC as V,
  Cr as W,
  Us as X,
  Tu as Y,
  CC as Z,
  Ou as _,
  $C as a,
  yC as a0,
  hC as a1,
  gC as a2,
  wC as a3,
  AC as a4,
  EC as a5,
  FC as a6,
  km as a7,
  SC as a8,
  xC as a9,
  Ju as b,
  gl as c,
  ku as d,
  PC as e,
  Xb as f,
  Ip as g,
  RC as h,
  LC as i,
  dr as j,
  NC as k,
  Md as l,
  Sd as m,
  _d as n,
  bh as o,
  oo as p,
  dl as q,
  VC as r,
  io as s,
  cd as t,
  kC as u,
  OC as v,
  TC as w,
  BC as x,
  MC as y,
  Jv as z
};
