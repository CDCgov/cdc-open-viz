var qr = {}, xr = {}, J = {};
J.byteLength = Vr;
J.toByteArray = Jr;
J.fromByteArray = Kr;
var L = [], R = [], Wr = typeof Uint8Array < "u" ? Uint8Array : Array, v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var j = 0, Hr = v.length; j < Hr; ++j)
  L[j] = v[j], R[v.charCodeAt(j)] = j;
R["-".charCodeAt(0)] = 62;
R["_".charCodeAt(0)] = 63;
function Br(c) {
  var f = c.length;
  if (f % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var l = c.indexOf("=");
  l === -1 && (l = f);
  var w = l === f ? 0 : 4 - l % 4;
  return [l, w];
}
function Vr(c) {
  var f = Br(c), l = f[0], w = f[1];
  return (l + w) * 3 / 4 - w;
}
function Xr(c, f, l) {
  return (f + l) * 3 / 4 - l;
}
function Jr(c) {
  var f, l = Br(c), w = l[0], y = l[1], a = new Wr(Xr(c, w, y)), p = 0, o = y > 0 ? w - 4 : w, B;
  for (B = 0; B < o; B += 4)
    f = R[c.charCodeAt(B)] << 18 | R[c.charCodeAt(B + 1)] << 12 | R[c.charCodeAt(B + 2)] << 6 | R[c.charCodeAt(B + 3)], a[p++] = f >> 16 & 255, a[p++] = f >> 8 & 255, a[p++] = f & 255;
  return y === 2 && (f = R[c.charCodeAt(B)] << 2 | R[c.charCodeAt(B + 1)] >> 4, a[p++] = f & 255), y === 1 && (f = R[c.charCodeAt(B)] << 10 | R[c.charCodeAt(B + 1)] << 4 | R[c.charCodeAt(B + 2)] >> 2, a[p++] = f >> 8 & 255, a[p++] = f & 255), a;
}
function zr(c) {
  return L[c >> 18 & 63] + L[c >> 12 & 63] + L[c >> 6 & 63] + L[c & 63];
}
function Qr(c, f, l) {
  for (var w, y = [], a = f; a < l; a += 3)
    w = (c[a] << 16 & 16711680) + (c[a + 1] << 8 & 65280) + (c[a + 2] & 255), y.push(zr(w));
  return y.join("");
}
function Kr(c) {
  for (var f, l = c.length, w = l % 3, y = [], a = 16383, p = 0, o = l - w; p < o; p += a)
    y.push(Qr(c, p, p + a > o ? o : p + a));
  return w === 1 ? (f = c[l - 1], y.push(
    L[f >> 2] + L[f << 4 & 63] + "=="
  )) : w === 2 && (f = (c[l - 2] << 8) + c[l - 1], y.push(
    L[f >> 10] + L[f >> 4 & 63] + L[f << 2 & 63] + "="
  )), y.join("");
}
var er = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
er.read = function(c, f, l, w, y) {
  var a, p, o = y * 8 - w - 1, B = (1 << o) - 1, C = B >> 1, F = -7, A = l ? y - 1 : 0, k = l ? -1 : 1, U = c[f + A];
  for (A += k, a = U & (1 << -F) - 1, U >>= -F, F += o; F > 0; a = a * 256 + c[f + A], A += k, F -= 8)
    ;
  for (p = a & (1 << -F) - 1, a >>= -F, F += w; F > 0; p = p * 256 + c[f + A], A += k, F -= 8)
    ;
  if (a === 0)
    a = 1 - C;
  else {
    if (a === B)
      return p ? NaN : (U ? -1 : 1) * (1 / 0);
    p = p + Math.pow(2, w), a = a - C;
  }
  return (U ? -1 : 1) * p * Math.pow(2, a - w);
};
er.write = function(c, f, l, w, y, a) {
  var p, o, B, C = a * 8 - y - 1, F = (1 << C) - 1, A = F >> 1, k = y === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, U = w ? 0 : a - 1, q = w ? 1 : -1, W = f < 0 || f === 0 && 1 / f < 0 ? 1 : 0;
  for (f = Math.abs(f), isNaN(f) || f === 1 / 0 ? (o = isNaN(f) ? 1 : 0, p = F) : (p = Math.floor(Math.log(f) / Math.LN2), f * (B = Math.pow(2, -p)) < 1 && (p--, B *= 2), p + A >= 1 ? f += k / B : f += k * Math.pow(2, 1 - A), f * B >= 2 && (p++, B /= 2), p + A >= F ? (o = 0, p = F) : p + A >= 1 ? (o = (f * B - 1) * Math.pow(2, y), p = p + A) : (o = f * Math.pow(2, A - 1) * Math.pow(2, y), p = 0)); y >= 8; c[l + U] = o & 255, U += q, o /= 256, y -= 8)
    ;
  for (p = p << y | o, C += y; C > 0; c[l + U] = p & 255, U += q, p /= 256, C -= 8)
    ;
  c[l + U - q] |= W * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(c) {
  const f = J, l = er, w = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  c.Buffer = o, c.SlowBuffer = Fr, c.INSPECT_MAX_BYTES = 50;
  const y = 2147483647;
  c.kMaxLength = y, o.TYPED_ARRAY_SUPPORT = a(), !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function a() {
    try {
      const e = new Uint8Array(1), r = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(e, r), e.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(o.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(o.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this))
        return this.byteOffset;
    }
  });
  function p(e) {
    if (e > y)
      throw new RangeError('The value "' + e + '" is invalid for option "size"');
    const r = new Uint8Array(e);
    return Object.setPrototypeOf(r, o.prototype), r;
  }
  function o(e, r, t) {
    if (typeof e == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return A(e);
    }
    return B(e, r, t);
  }
  o.poolSize = 8192;
  function B(e, r, t) {
    if (typeof e == "string")
      return k(e, r);
    if (ArrayBuffer.isView(e))
      return q(e);
    if (e == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e
      );
    if (S(e, ArrayBuffer) || e && S(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (S(e, SharedArrayBuffer) || e && S(e.buffer, SharedArrayBuffer)))
      return W(e, r, t);
    if (typeof e == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const i = e.valueOf && e.valueOf();
    if (i != null && i !== e)
      return o.from(i, r, t);
    const n = Ir(e);
    if (n)
      return n;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
      return o.from(e[Symbol.toPrimitive]("string"), r, t);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e
    );
  }
  o.from = function(e, r, t) {
    return B(e, r, t);
  }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array);
  function C(e) {
    if (typeof e != "number")
      throw new TypeError('"size" argument must be of type number');
    if (e < 0)
      throw new RangeError('The value "' + e + '" is invalid for option "size"');
  }
  function F(e, r, t) {
    return C(e), e <= 0 ? p(e) : r !== void 0 ? typeof t == "string" ? p(e).fill(r, t) : p(e).fill(r) : p(e);
  }
  o.alloc = function(e, r, t) {
    return F(e, r, t);
  };
  function A(e) {
    return C(e), p(e < 0 ? 0 : z(e) | 0);
  }
  o.allocUnsafe = function(e) {
    return A(e);
  }, o.allocUnsafeSlow = function(e) {
    return A(e);
  };
  function k(e, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !o.isEncoding(r))
      throw new TypeError("Unknown encoding: " + r);
    const t = ir(e, r) | 0;
    let i = p(t);
    const n = i.write(e, r);
    return n !== t && (i = i.slice(0, n)), i;
  }
  function U(e) {
    const r = e.length < 0 ? 0 : z(e.length) | 0, t = p(r);
    for (let i = 0; i < r; i += 1)
      t[i] = e[i] & 255;
    return t;
  }
  function q(e) {
    if (S(e, Uint8Array)) {
      const r = new Uint8Array(e);
      return W(r.buffer, r.byteOffset, r.byteLength);
    }
    return U(e);
  }
  function W(e, r, t) {
    if (r < 0 || e.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < r + (t || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let i;
    return r === void 0 && t === void 0 ? i = new Uint8Array(e) : t === void 0 ? i = new Uint8Array(e, r) : i = new Uint8Array(e, r, t), Object.setPrototypeOf(i, o.prototype), i;
  }
  function Ir(e) {
    if (o.isBuffer(e)) {
      const r = z(e.length) | 0, t = p(r);
      return t.length === 0 || e.copy(t, 0, 0, r), t;
    }
    if (e.length !== void 0)
      return typeof e.length != "number" || Z(e.length) ? p(0) : U(e);
    if (e.type === "Buffer" && Array.isArray(e.data))
      return U(e.data);
  }
  function z(e) {
    if (e >= y)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + y.toString(16) + " bytes");
    return e | 0;
  }
  function Fr(e) {
    return +e != e && (e = 0), o.alloc(+e);
  }
  o.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== o.prototype;
  }, o.compare = function(r, t) {
    if (S(r, Uint8Array) && (r = o.from(r, r.offset, r.byteLength)), S(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(r) || !o.isBuffer(t))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (r === t)
      return 0;
    let i = r.length, n = t.length;
    for (let u = 0, h = Math.min(i, n); u < h; ++u)
      if (r[u] !== t[u]) {
        i = r[u], n = t[u];
        break;
      }
    return i < n ? -1 : n < i ? 1 : 0;
  }, o.isEncoding = function(r) {
    switch (String(r).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, o.concat = function(r, t) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return o.alloc(0);
    let i;
    if (t === void 0)
      for (t = 0, i = 0; i < r.length; ++i)
        t += r[i].length;
    const n = o.allocUnsafe(t);
    let u = 0;
    for (i = 0; i < r.length; ++i) {
      let h = r[i];
      if (S(h, Uint8Array))
        u + h.length > n.length ? (o.isBuffer(h) || (h = o.from(h)), h.copy(n, u)) : Uint8Array.prototype.set.call(
          n,
          h,
          u
        );
      else if (o.isBuffer(h))
        h.copy(n, u);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      u += h.length;
    }
    return n;
  };
  function ir(e, r) {
    if (o.isBuffer(e))
      return e.length;
    if (ArrayBuffer.isView(e) || S(e, ArrayBuffer))
      return e.byteLength;
    if (typeof e != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e
      );
    const t = e.length, i = arguments.length > 2 && arguments[2] === !0;
    if (!i && t === 0)
      return 0;
    let n = !1;
    for (; ; )
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return t;
        case "utf8":
        case "utf-8":
          return K(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return t * 2;
        case "hex":
          return t >>> 1;
        case "base64":
          return wr(e).length;
        default:
          if (n)
            return i ? -1 : K(e).length;
          r = ("" + r).toLowerCase(), n = !0;
      }
  }
  o.byteLength = ir;
  function Ar(e, r, t) {
    let i = !1;
    if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r))
      return "";
    for (e || (e = "utf8"); ; )
      switch (e) {
        case "hex":
          return Nr(this, r, t);
        case "utf8":
        case "utf-8":
          return ur(this, r, t);
        case "ascii":
          return Lr(this, r, t);
        case "latin1":
        case "binary":
          return Mr(this, r, t);
        case "base64":
          return _r(this, r, t);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return kr(this, r, t);
        default:
          if (i)
            throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), i = !0;
      }
  }
  o.prototype._isBuffer = !0;
  function P(e, r, t) {
    const i = e[r];
    e[r] = e[t], e[t] = i;
  }
  o.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < r; t += 2)
      P(this, t, t + 1);
    return this;
  }, o.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < r; t += 4)
      P(this, t, t + 3), P(this, t + 1, t + 2);
    return this;
  }, o.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < r; t += 8)
      P(this, t, t + 7), P(this, t + 1, t + 6), P(this, t + 2, t + 5), P(this, t + 3, t + 4);
    return this;
  }, o.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? ur(this, 0, r) : Ar.apply(this, arguments);
  }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(r) {
    if (!o.isBuffer(r))
      throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : o.compare(this, r) === 0;
  }, o.prototype.inspect = function() {
    let r = "";
    const t = c.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">";
  }, w && (o.prototype[w] = o.prototype.inspect), o.prototype.compare = function(r, t, i, n, u) {
    if (S(r, Uint8Array) && (r = o.from(r, r.offset, r.byteLength)), !o.isBuffer(r))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
      );
    if (t === void 0 && (t = 0), i === void 0 && (i = r ? r.length : 0), n === void 0 && (n = 0), u === void 0 && (u = this.length), t < 0 || i > r.length || n < 0 || u > this.length)
      throw new RangeError("out of range index");
    if (n >= u && t >= i)
      return 0;
    if (n >= u)
      return -1;
    if (t >= i)
      return 1;
    if (t >>>= 0, i >>>= 0, n >>>= 0, u >>>= 0, this === r)
      return 0;
    let h = u - n, s = i - t;
    const E = Math.min(h, s), d = this.slice(n, u), m = r.slice(t, i);
    for (let x = 0; x < E; ++x)
      if (d[x] !== m[x]) {
        h = d[x], s = m[x];
        break;
      }
    return h < s ? -1 : s < h ? 1 : 0;
  };
  function nr(e, r, t, i, n) {
    if (e.length === 0)
      return -1;
    if (typeof t == "string" ? (i = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, Z(t) && (t = n ? 0 : e.length - 1), t < 0 && (t = e.length + t), t >= e.length) {
      if (n)
        return -1;
      t = e.length - 1;
    } else if (t < 0)
      if (n)
        t = 0;
      else
        return -1;
    if (typeof r == "string" && (r = o.from(r, i)), o.isBuffer(r))
      return r.length === 0 ? -1 : or(e, r, t, i, n);
    if (typeof r == "number")
      return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? n ? Uint8Array.prototype.indexOf.call(e, r, t) : Uint8Array.prototype.lastIndexOf.call(e, r, t) : or(e, [r], t, i, n);
    throw new TypeError("val must be string, number or Buffer");
  }
  function or(e, r, t, i, n) {
    let u = 1, h = e.length, s = r.length;
    if (i !== void 0 && (i = String(i).toLowerCase(), i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
      if (e.length < 2 || r.length < 2)
        return -1;
      u = 2, h /= 2, s /= 2, t /= 2;
    }
    function E(m, x) {
      return u === 1 ? m[x] : m.readUInt16BE(x * u);
    }
    let d;
    if (n) {
      let m = -1;
      for (d = t; d < h; d++)
        if (E(e, d) === E(r, m === -1 ? 0 : d - m)) {
          if (m === -1 && (m = d), d - m + 1 === s)
            return m * u;
        } else
          m !== -1 && (d -= d - m), m = -1;
    } else
      for (t + s > h && (t = h - s), d = t; d >= 0; d--) {
        let m = !0;
        for (let x = 0; x < s; x++)
          if (E(e, d + x) !== E(r, x)) {
            m = !1;
            break;
          }
        if (m)
          return d;
      }
    return -1;
  }
  o.prototype.includes = function(r, t, i) {
    return this.indexOf(r, t, i) !== -1;
  }, o.prototype.indexOf = function(r, t, i) {
    return nr(this, r, t, i, !0);
  }, o.prototype.lastIndexOf = function(r, t, i) {
    return nr(this, r, t, i, !1);
  };
  function Ur(e, r, t, i) {
    t = Number(t) || 0;
    const n = e.length - t;
    i ? (i = Number(i), i > n && (i = n)) : i = n;
    const u = r.length;
    i > u / 2 && (i = u / 2);
    let h;
    for (h = 0; h < i; ++h) {
      const s = parseInt(r.substr(h * 2, 2), 16);
      if (Z(s))
        return h;
      e[t + h] = s;
    }
    return h;
  }
  function Tr(e, r, t, i) {
    return V(K(r, e.length - t), e, t, i);
  }
  function Rr(e, r, t, i) {
    return V(Or(r), e, t, i);
  }
  function Cr(e, r, t, i) {
    return V(wr(r), e, t, i);
  }
  function Sr(e, r, t, i) {
    return V(Gr(r, e.length - t), e, t, i);
  }
  o.prototype.write = function(r, t, i, n) {
    if (t === void 0)
      n = "utf8", i = this.length, t = 0;
    else if (i === void 0 && typeof t == "string")
      n = t, i = this.length, t = 0;
    else if (isFinite(t))
      t = t >>> 0, isFinite(i) ? (i = i >>> 0, n === void 0 && (n = "utf8")) : (n = i, i = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const u = this.length - t;
    if ((i === void 0 || i > u) && (i = u), r.length > 0 && (i < 0 || t < 0) || t > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    let h = !1;
    for (; ; )
      switch (n) {
        case "hex":
          return Ur(this, r, t, i);
        case "utf8":
        case "utf-8":
          return Tr(this, r, t, i);
        case "ascii":
        case "latin1":
        case "binary":
          return Rr(this, r, t, i);
        case "base64":
          return Cr(this, r, t, i);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Sr(this, r, t, i);
        default:
          if (h)
            throw new TypeError("Unknown encoding: " + n);
          n = ("" + n).toLowerCase(), h = !0;
      }
  }, o.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function _r(e, r, t) {
    return r === 0 && t === e.length ? f.fromByteArray(e) : f.fromByteArray(e.slice(r, t));
  }
  function ur(e, r, t) {
    t = Math.min(e.length, t);
    const i = [];
    let n = r;
    for (; n < t; ) {
      const u = e[n];
      let h = null, s = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
      if (n + s <= t) {
        let E, d, m, x;
        switch (s) {
          case 1:
            u < 128 && (h = u);
            break;
          case 2:
            E = e[n + 1], (E & 192) === 128 && (x = (u & 31) << 6 | E & 63, x > 127 && (h = x));
            break;
          case 3:
            E = e[n + 1], d = e[n + 2], (E & 192) === 128 && (d & 192) === 128 && (x = (u & 15) << 12 | (E & 63) << 6 | d & 63, x > 2047 && (x < 55296 || x > 57343) && (h = x));
            break;
          case 4:
            E = e[n + 1], d = e[n + 2], m = e[n + 3], (E & 192) === 128 && (d & 192) === 128 && (m & 192) === 128 && (x = (u & 15) << 18 | (E & 63) << 12 | (d & 63) << 6 | m & 63, x > 65535 && x < 1114112 && (h = x));
        }
      }
      h === null ? (h = 65533, s = 1) : h > 65535 && (h -= 65536, i.push(h >>> 10 & 1023 | 55296), h = 56320 | h & 1023), i.push(h), n += s;
    }
    return br(i);
  }
  const hr = 4096;
  function br(e) {
    const r = e.length;
    if (r <= hr)
      return String.fromCharCode.apply(String, e);
    let t = "", i = 0;
    for (; i < r; )
      t += String.fromCharCode.apply(
        String,
        e.slice(i, i += hr)
      );
    return t;
  }
  function Lr(e, r, t) {
    let i = "";
    t = Math.min(e.length, t);
    for (let n = r; n < t; ++n)
      i += String.fromCharCode(e[n] & 127);
    return i;
  }
  function Mr(e, r, t) {
    let i = "";
    t = Math.min(e.length, t);
    for (let n = r; n < t; ++n)
      i += String.fromCharCode(e[n]);
    return i;
  }
  function Nr(e, r, t) {
    const i = e.length;
    (!r || r < 0) && (r = 0), (!t || t < 0 || t > i) && (t = i);
    let n = "";
    for (let u = r; u < t; ++u)
      n += jr[e[u]];
    return n;
  }
  function kr(e, r, t) {
    const i = e.slice(r, t);
    let n = "";
    for (let u = 0; u < i.length - 1; u += 2)
      n += String.fromCharCode(i[u] + i[u + 1] * 256);
    return n;
  }
  o.prototype.slice = function(r, t) {
    const i = this.length;
    r = ~~r, t = t === void 0 ? i : ~~t, r < 0 ? (r += i, r < 0 && (r = 0)) : r > i && (r = i), t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), t < r && (t = r);
    const n = this.subarray(r, t);
    return Object.setPrototypeOf(n, o.prototype), n;
  };
  function I(e, r, t) {
    if (e % 1 !== 0 || e < 0)
      throw new RangeError("offset is not uint");
    if (e + r > t)
      throw new RangeError("Trying to access beyond buffer length");
  }
  o.prototype.readUintLE = o.prototype.readUIntLE = function(r, t, i) {
    r = r >>> 0, t = t >>> 0, i || I(r, t, this.length);
    let n = this[r], u = 1, h = 0;
    for (; ++h < t && (u *= 256); )
      n += this[r + h] * u;
    return n;
  }, o.prototype.readUintBE = o.prototype.readUIntBE = function(r, t, i) {
    r = r >>> 0, t = t >>> 0, i || I(r, t, this.length);
    let n = this[r + --t], u = 1;
    for (; t > 0 && (u *= 256); )
      n += this[r + --t] * u;
    return n;
  }, o.prototype.readUint8 = o.prototype.readUInt8 = function(r, t) {
    return r = r >>> 0, t || I(r, 1, this.length), this[r];
  }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(r, t) {
    return r = r >>> 0, t || I(r, 2, this.length), this[r] | this[r + 1] << 8;
  }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(r, t) {
    return r = r >>> 0, t || I(r, 2, this.length), this[r] << 8 | this[r + 1];
  }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(r, t) {
    return r = r >>> 0, t || I(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(r, t) {
    return r = r >>> 0, t || I(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  }, o.prototype.readBigUInt64LE = D(function(r) {
    r = r >>> 0, G(r, "offset");
    const t = this[r], i = this[r + 7];
    (t === void 0 || i === void 0) && H(r, this.length - 8);
    const n = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, u = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + i * 2 ** 24;
    return BigInt(n) + (BigInt(u) << BigInt(32));
  }), o.prototype.readBigUInt64BE = D(function(r) {
    r = r >>> 0, G(r, "offset");
    const t = this[r], i = this[r + 7];
    (t === void 0 || i === void 0) && H(r, this.length - 8);
    const n = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], u = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + i;
    return (BigInt(n) << BigInt(32)) + BigInt(u);
  }), o.prototype.readIntLE = function(r, t, i) {
    r = r >>> 0, t = t >>> 0, i || I(r, t, this.length);
    let n = this[r], u = 1, h = 0;
    for (; ++h < t && (u *= 256); )
      n += this[r + h] * u;
    return u *= 128, n >= u && (n -= Math.pow(2, 8 * t)), n;
  }, o.prototype.readIntBE = function(r, t, i) {
    r = r >>> 0, t = t >>> 0, i || I(r, t, this.length);
    let n = t, u = 1, h = this[r + --n];
    for (; n > 0 && (u *= 256); )
      h += this[r + --n] * u;
    return u *= 128, h >= u && (h -= Math.pow(2, 8 * t)), h;
  }, o.prototype.readInt8 = function(r, t) {
    return r = r >>> 0, t || I(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  }, o.prototype.readInt16LE = function(r, t) {
    r = r >>> 0, t || I(r, 2, this.length);
    const i = this[r] | this[r + 1] << 8;
    return i & 32768 ? i | 4294901760 : i;
  }, o.prototype.readInt16BE = function(r, t) {
    r = r >>> 0, t || I(r, 2, this.length);
    const i = this[r + 1] | this[r] << 8;
    return i & 32768 ? i | 4294901760 : i;
  }, o.prototype.readInt32LE = function(r, t) {
    return r = r >>> 0, t || I(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  }, o.prototype.readInt32BE = function(r, t) {
    return r = r >>> 0, t || I(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  }, o.prototype.readBigInt64LE = D(function(r) {
    r = r >>> 0, G(r, "offset");
    const t = this[r], i = this[r + 7];
    (t === void 0 || i === void 0) && H(r, this.length - 8);
    const n = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (i << 24);
    return (BigInt(n) << BigInt(32)) + BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), o.prototype.readBigInt64BE = D(function(r) {
    r = r >>> 0, G(r, "offset");
    const t = this[r], i = this[r + 7];
    (t === void 0 || i === void 0) && H(r, this.length - 8);
    const n = (t << 24) + // Overflow
    this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(n) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + i);
  }), o.prototype.readFloatLE = function(r, t) {
    return r = r >>> 0, t || I(r, 4, this.length), l.read(this, r, !0, 23, 4);
  }, o.prototype.readFloatBE = function(r, t) {
    return r = r >>> 0, t || I(r, 4, this.length), l.read(this, r, !1, 23, 4);
  }, o.prototype.readDoubleLE = function(r, t) {
    return r = r >>> 0, t || I(r, 8, this.length), l.read(this, r, !0, 52, 8);
  }, o.prototype.readDoubleBE = function(r, t) {
    return r = r >>> 0, t || I(r, 8, this.length), l.read(this, r, !1, 52, 8);
  };
  function T(e, r, t, i, n, u) {
    if (!o.isBuffer(e))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > n || r < u)
      throw new RangeError('"value" argument is out of bounds');
    if (t + i > e.length)
      throw new RangeError("Index out of range");
  }
  o.prototype.writeUintLE = o.prototype.writeUIntLE = function(r, t, i, n) {
    if (r = +r, t = t >>> 0, i = i >>> 0, !n) {
      const s = Math.pow(2, 8 * i) - 1;
      T(this, r, t, i, s, 0);
    }
    let u = 1, h = 0;
    for (this[t] = r & 255; ++h < i && (u *= 256); )
      this[t + h] = r / u & 255;
    return t + i;
  }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(r, t, i, n) {
    if (r = +r, t = t >>> 0, i = i >>> 0, !n) {
      const s = Math.pow(2, 8 * i) - 1;
      T(this, r, t, i, s, 0);
    }
    let u = i - 1, h = 1;
    for (this[t + u] = r & 255; --u >= 0 && (h *= 256); )
      this[t + u] = r / h & 255;
    return t + i;
  }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(r, t, i) {
    return r = +r, t = t >>> 0, i || T(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1;
  }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(r, t, i) {
    return r = +r, t = t >>> 0, i || T(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
  }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(r, t, i) {
    return r = +r, t = t >>> 0, i || T(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
  }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(r, t, i) {
    return r = +r, t = t >>> 0, i || T(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4;
  }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(r, t, i) {
    return r = +r, t = t >>> 0, i || T(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
  };
  function cr(e, r, t, i, n) {
    yr(r, i, n, e, t, 7);
    let u = Number(r & BigInt(4294967295));
    e[t++] = u, u = u >> 8, e[t++] = u, u = u >> 8, e[t++] = u, u = u >> 8, e[t++] = u;
    let h = Number(r >> BigInt(32) & BigInt(4294967295));
    return e[t++] = h, h = h >> 8, e[t++] = h, h = h >> 8, e[t++] = h, h = h >> 8, e[t++] = h, t;
  }
  function fr(e, r, t, i, n) {
    yr(r, i, n, e, t, 7);
    let u = Number(r & BigInt(4294967295));
    e[t + 7] = u, u = u >> 8, e[t + 6] = u, u = u >> 8, e[t + 5] = u, u = u >> 8, e[t + 4] = u;
    let h = Number(r >> BigInt(32) & BigInt(4294967295));
    return e[t + 3] = h, h = h >> 8, e[t + 2] = h, h = h >> 8, e[t + 1] = h, h = h >> 8, e[t] = h, t + 8;
  }
  o.prototype.writeBigUInt64LE = D(function(r, t = 0) {
    return cr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }), o.prototype.writeBigUInt64BE = D(function(r, t = 0) {
    return fr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }), o.prototype.writeIntLE = function(r, t, i, n) {
    if (r = +r, t = t >>> 0, !n) {
      const E = Math.pow(2, 8 * i - 1);
      T(this, r, t, i, E - 1, -E);
    }
    let u = 0, h = 1, s = 0;
    for (this[t] = r & 255; ++u < i && (h *= 256); )
      r < 0 && s === 0 && this[t + u - 1] !== 0 && (s = 1), this[t + u] = (r / h >> 0) - s & 255;
    return t + i;
  }, o.prototype.writeIntBE = function(r, t, i, n) {
    if (r = +r, t = t >>> 0, !n) {
      const E = Math.pow(2, 8 * i - 1);
      T(this, r, t, i, E - 1, -E);
    }
    let u = i - 1, h = 1, s = 0;
    for (this[t + u] = r & 255; --u >= 0 && (h *= 256); )
      r < 0 && s === 0 && this[t + u + 1] !== 0 && (s = 1), this[t + u] = (r / h >> 0) - s & 255;
    return t + i;
  }, o.prototype.writeInt8 = function(r, t, i) {
    return r = +r, t = t >>> 0, i || T(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
  }, o.prototype.writeInt16LE = function(r, t, i) {
    return r = +r, t = t >>> 0, i || T(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
  }, o.prototype.writeInt16BE = function(r, t, i) {
    return r = +r, t = t >>> 0, i || T(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
  }, o.prototype.writeInt32LE = function(r, t, i) {
    return r = +r, t = t >>> 0, i || T(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4;
  }, o.prototype.writeInt32BE = function(r, t, i) {
    return r = +r, t = t >>> 0, i || T(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
  }, o.prototype.writeBigInt64LE = D(function(r, t = 0) {
    return cr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), o.prototype.writeBigInt64BE = D(function(r, t = 0) {
    return fr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function pr(e, r, t, i, n, u) {
    if (t + i > e.length)
      throw new RangeError("Index out of range");
    if (t < 0)
      throw new RangeError("Index out of range");
  }
  function lr(e, r, t, i, n) {
    return r = +r, t = t >>> 0, n || pr(e, r, t, 4), l.write(e, r, t, i, 23, 4), t + 4;
  }
  o.prototype.writeFloatLE = function(r, t, i) {
    return lr(this, r, t, !0, i);
  }, o.prototype.writeFloatBE = function(r, t, i) {
    return lr(this, r, t, !1, i);
  };
  function sr(e, r, t, i, n) {
    return r = +r, t = t >>> 0, n || pr(e, r, t, 8), l.write(e, r, t, i, 52, 8), t + 8;
  }
  o.prototype.writeDoubleLE = function(r, t, i) {
    return sr(this, r, t, !0, i);
  }, o.prototype.writeDoubleBE = function(r, t, i) {
    return sr(this, r, t, !1, i);
  }, o.prototype.copy = function(r, t, i, n) {
    if (!o.isBuffer(r))
      throw new TypeError("argument should be a Buffer");
    if (i || (i = 0), !n && n !== 0 && (n = this.length), t >= r.length && (t = r.length), t || (t = 0), n > 0 && n < i && (n = i), n === i || r.length === 0 || this.length === 0)
      return 0;
    if (t < 0)
      throw new RangeError("targetStart out of bounds");
    if (i < 0 || i >= this.length)
      throw new RangeError("Index out of range");
    if (n < 0)
      throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length), r.length - t < n - i && (n = r.length - t + i);
    const u = n - i;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, i, n) : Uint8Array.prototype.set.call(
      r,
      this.subarray(i, n),
      t
    ), u;
  }, o.prototype.fill = function(r, t, i, n) {
    if (typeof r == "string") {
      if (typeof t == "string" ? (n = t, t = 0, i = this.length) : typeof i == "string" && (n = i, i = this.length), n !== void 0 && typeof n != "string")
        throw new TypeError("encoding must be a string");
      if (typeof n == "string" && !o.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
      if (r.length === 1) {
        const h = r.charCodeAt(0);
        (n === "utf8" && h < 128 || n === "latin1") && (r = h);
      }
    } else
      typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (t < 0 || this.length < t || this.length < i)
      throw new RangeError("Out of range index");
    if (i <= t)
      return this;
    t = t >>> 0, i = i === void 0 ? this.length : i >>> 0, r || (r = 0);
    let u;
    if (typeof r == "number")
      for (u = t; u < i; ++u)
        this[u] = r;
    else {
      const h = o.isBuffer(r) ? r : o.from(r, n), s = h.length;
      if (s === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (u = 0; u < i - t; ++u)
        this[u + t] = h[u % s];
    }
    return this;
  };
  const O = {};
  function Q(e, r, t) {
    O[e] = class extends t {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: r.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
      }
      get code() {
        return e;
      }
      set code(n) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  Q(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(e) {
      return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Q(
    "ERR_INVALID_ARG_TYPE",
    function(e, r) {
      return `The "${e}" argument must be of type number. Received type ${typeof r}`;
    },
    TypeError
  ), Q(
    "ERR_OUT_OF_RANGE",
    function(e, r, t) {
      let i = `The value of "${e}" is out of range.`, n = t;
      return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? n = ar(String(t)) : typeof t == "bigint" && (n = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (n = ar(n)), n += "n"), i += ` It must be ${r}. Received ${n}`, i;
    },
    RangeError
  );
  function ar(e) {
    let r = "", t = e.length;
    const i = e[0] === "-" ? 1 : 0;
    for (; t >= i + 4; t -= 3)
      r = `_${e.slice(t - 3, t)}${r}`;
    return `${e.slice(0, t)}${r}`;
  }
  function Dr(e, r, t) {
    G(r, "offset"), (e[r] === void 0 || e[r + t] === void 0) && H(r, e.length - (t + 1));
  }
  function yr(e, r, t, i, n, u) {
    if (e > t || e < r) {
      const h = typeof r == "bigint" ? "n" : "";
      let s;
      throw u > 3 ? r === 0 || r === BigInt(0) ? s = `>= 0${h} and < 2${h} ** ${(u + 1) * 8}${h}` : s = `>= -(2${h} ** ${(u + 1) * 8 - 1}${h}) and < 2 ** ${(u + 1) * 8 - 1}${h}` : s = `>= ${r}${h} and <= ${t}${h}`, new O.ERR_OUT_OF_RANGE("value", s, e);
    }
    Dr(i, n, u);
  }
  function G(e, r) {
    if (typeof e != "number")
      throw new O.ERR_INVALID_ARG_TYPE(r, "number", e);
  }
  function H(e, r, t) {
    throw Math.floor(e) !== e ? (G(e, t), new O.ERR_OUT_OF_RANGE(t || "offset", "an integer", e)) : r < 0 ? new O.ERR_BUFFER_OUT_OF_BOUNDS() : new O.ERR_OUT_OF_RANGE(
      t || "offset",
      `>= ${t ? 1 : 0} and <= ${r}`,
      e
    );
  }
  const Pr = /[^+/0-9A-Za-z-_]/g;
  function $r(e) {
    if (e = e.split("=")[0], e = e.trim().replace(Pr, ""), e.length < 2)
      return "";
    for (; e.length % 4 !== 0; )
      e = e + "=";
    return e;
  }
  function K(e, r) {
    r = r || 1 / 0;
    let t;
    const i = e.length;
    let n = null;
    const u = [];
    for (let h = 0; h < i; ++h) {
      if (t = e.charCodeAt(h), t > 55295 && t < 57344) {
        if (!n) {
          if (t > 56319) {
            (r -= 3) > -1 && u.push(239, 191, 189);
            continue;
          } else if (h + 1 === i) {
            (r -= 3) > -1 && u.push(239, 191, 189);
            continue;
          }
          n = t;
          continue;
        }
        if (t < 56320) {
          (r -= 3) > -1 && u.push(239, 191, 189), n = t;
          continue;
        }
        t = (n - 55296 << 10 | t - 56320) + 65536;
      } else
        n && (r -= 3) > -1 && u.push(239, 191, 189);
      if (n = null, t < 128) {
        if ((r -= 1) < 0)
          break;
        u.push(t);
      } else if (t < 2048) {
        if ((r -= 2) < 0)
          break;
        u.push(
          t >> 6 | 192,
          t & 63 | 128
        );
      } else if (t < 65536) {
        if ((r -= 3) < 0)
          break;
        u.push(
          t >> 12 | 224,
          t >> 6 & 63 | 128,
          t & 63 | 128
        );
      } else if (t < 1114112) {
        if ((r -= 4) < 0)
          break;
        u.push(
          t >> 18 | 240,
          t >> 12 & 63 | 128,
          t >> 6 & 63 | 128,
          t & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return u;
  }
  function Or(e) {
    const r = [];
    for (let t = 0; t < e.length; ++t)
      r.push(e.charCodeAt(t) & 255);
    return r;
  }
  function Gr(e, r) {
    let t, i, n;
    const u = [];
    for (let h = 0; h < e.length && !((r -= 2) < 0); ++h)
      t = e.charCodeAt(h), i = t >> 8, n = t % 256, u.push(n), u.push(i);
    return u;
  }
  function wr(e) {
    return f.toByteArray($r(e));
  }
  function V(e, r, t, i) {
    let n;
    for (n = 0; n < i && !(n + t >= r.length || n >= e.length); ++n)
      r[n + t] = e[n];
    return n;
  }
  function S(e, r) {
    return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
  }
  function Z(e) {
    return e !== e;
  }
  const jr = function() {
    const e = "0123456789abcdef", r = new Array(256);
    for (let t = 0; t < 16; ++t) {
      const i = t * 16;
      for (let n = 0; n < 16; ++n)
        r[i + n] = e[t] + e[n];
    }
    return r;
  }();
  function D(e) {
    return typeof BigInt > "u" ? Yr : e;
  }
  function Yr() {
    throw new Error("BigInt not supported");
  }
})(xr);
var dr = { exports: {} }, g = dr.exports = {}, _, b;
function rr() {
  throw new Error("setTimeout has not been defined");
}
function tr() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? _ = setTimeout : _ = rr;
  } catch {
    _ = rr;
  }
  try {
    typeof clearTimeout == "function" ? b = clearTimeout : b = tr;
  } catch {
    b = tr;
  }
})();
function Er(c) {
  if (_ === setTimeout)
    return setTimeout(c, 0);
  if ((_ === rr || !_) && setTimeout)
    return _ = setTimeout, setTimeout(c, 0);
  try {
    return _(c, 0);
  } catch {
    try {
      return _.call(null, c, 0);
    } catch {
      return _.call(this, c, 0);
    }
  }
}
function Zr(c) {
  if (b === clearTimeout)
    return clearTimeout(c);
  if ((b === tr || !b) && clearTimeout)
    return b = clearTimeout, clearTimeout(c);
  try {
    return b(c);
  } catch {
    try {
      return b.call(null, c);
    } catch {
      return b.call(this, c);
    }
  }
}
var M = [], Y = !1, $, X = -1;
function vr() {
  !Y || !$ || (Y = !1, $.length ? M = $.concat(M) : X = -1, M.length && mr());
}
function mr() {
  if (!Y) {
    var c = Er(vr);
    Y = !0;
    for (var f = M.length; f; ) {
      for ($ = M, M = []; ++X < f; )
        $ && $[X].run();
      X = -1, f = M.length;
    }
    $ = null, Y = !1, Zr(c);
  }
}
g.nextTick = function(c) {
  var f = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var l = 1; l < arguments.length; l++)
      f[l - 1] = arguments[l];
  M.push(new gr(c, f)), M.length === 1 && !Y && Er(mr);
};
function gr(c, f) {
  this.fun = c, this.array = f;
}
gr.prototype.run = function() {
  this.fun.apply(null, this.array);
};
g.title = "browser";
g.browser = !0;
g.env = {};
g.argv = [];
g.version = "";
g.versions = {};
function N() {
}
g.on = N;
g.addListener = N;
g.once = N;
g.off = N;
g.removeListener = N;
g.removeAllListeners = N;
g.emit = N;
g.prependListener = N;
g.prependOnceListener = N;
g.listeners = function(c) {
  return [];
};
g.binding = function(c) {
  throw new Error("process.binding is not supported");
};
g.cwd = function() {
  return "/";
};
g.chdir = function(c) {
  throw new Error("process.chdir is not supported");
};
g.umask = function() {
  return 0;
};
var rt = dr.exports;
(function(c) {
  Object.defineProperty(c, Symbol.toStringTag, { value: "Module" });
  const f = xr, l = rt, w = (p) => p && p.__esModule ? p : { default: p }, y = w(l), a = globalThis || void 0 || self;
  Object.defineProperty(c, "Buffer", { enumerable: !0, get: () => f.Buffer }), Object.defineProperty(c, "process", { enumerable: !0, get: () => y.default }), c.global = a;
})(qr);
export {
  qr as d
};
