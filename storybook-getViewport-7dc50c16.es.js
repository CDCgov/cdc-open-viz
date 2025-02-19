import { P as R } from "./storybook-papaparse.min-b07ddc33.es.js";
var y = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(i, o) {
      return i[0] === n ? (r = o, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), i = this.__entries__[r];
        return i && i[1];
      }, t.prototype.set = function(n, r) {
        var i = e(this.__entries__, n);
        ~i ? this.__entries__[i][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, i = e(r, n);
        ~i && r.splice(i, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var i = 0, o = this.__entries__; i < o.length; i++) {
          var s = o[i];
          n.call(r, s[1], s[0]);
        }
      }, t;
    }()
  );
}(), v = typeof window < "u" && typeof document < "u" && window.document === document, f = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), x = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(f) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), M = 2;
function A(e, t) {
  var n = !1, r = !1, i = 0;
  function o() {
    n && (n = !1, e()), r && a();
  }
  function s() {
    x(o);
  }
  function a() {
    var c = Date.now();
    if (n) {
      if (c - i < M)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(s, t);
    i = c;
  }
  return a;
}
var z = 20, C = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], S = typeof MutationObserver < "u", T = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = A(this.refresh.bind(this), z);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !v || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), S ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !v || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, i = C.some(function(o) {
        return !!~r.indexOf(o);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), g = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var i = r[n];
    Object.defineProperty(e, i, {
      value: t[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, u = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || f;
}, w = d(0, 0, 0, 0);
function h(e) {
  return parseFloat(e) || 0;
}
function b(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, i) {
    var o = e["border-" + i + "-width"];
    return r + h(o);
  }, 0);
}
function D(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t; r < i.length; r++) {
    var o = i[r], s = e["padding-" + o];
    n[o] = h(s);
  }
  return n;
}
function P(e) {
  var t = e.getBBox();
  return d(0, 0, t.width, t.height);
}
function L(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return w;
  var r = u(e).getComputedStyle(e), i = D(r), o = i.left + i.right, s = i.top + i.bottom, a = h(r.width), c = h(r.height);
  if (r.boxSizing === "border-box" && (Math.round(a + o) !== t && (a -= b(r, "left", "right") + o), Math.round(c + s) !== n && (c -= b(r, "top", "bottom") + s)), !G(e)) {
    var l = Math.round(a + o) - t, p = Math.round(c + s) - n;
    Math.abs(l) !== 1 && (a -= l), Math.abs(p) !== 1 && (c -= p);
  }
  return d(i.left, i.top, a, c);
}
var j = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof u(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof u(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function G(e) {
  return e === u(e).document.documentElement;
}
function k(e) {
  return v ? j(e) ? P(e) : L(e) : w;
}
function W(e) {
  var t = e.x, n = e.y, r = e.width, i = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, s = Object.create(o.prototype);
  return g(s, {
    x: t,
    y: n,
    width: r,
    height: i,
    top: n,
    right: t + r,
    bottom: i + n,
    left: t
  }), s;
}
function d(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var F = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = d(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = k(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), H = (
  /** @class */
  function() {
    function e(t, n) {
      var r = W(n);
      g(this, { target: t, contentRect: r });
    }
    return e;
  }()
), V = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new y(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof u(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new F(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof u(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new H(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), O = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new y(), E = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = T.getInstance(), r = new V(t, n, this);
      O.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  E.prototype[e] = function() {
    var t;
    return (t = O.get(this))[e].apply(t, arguments);
  };
});
var B = function() {
  return typeof f.ResizeObserver < "u" ? f.ResizeObserver : E;
}();
const m = (e) => !!e.includes("wt=csv"), I = (e) => !!(e != null && e.includes("wt=json"));
function $(e) {
  let t = new URL(e, window.location.origin);
  const n = t.pathname;
  return /(?:\.([^.]+))?$/.exec(n)[1] === "csv" || m(e) ? fetch(t.href).then((o) => o.text()).then((o) => (o = o.replace(/(".*?")|,/g, (...a) => a[1] || "|"), o = o.replace(/["]+/g, ""), R.parse(o, {
    //quotes: "true",  // dont need these
    //quoteChar: "'",  // has no effect that I can tell
    header: !0,
    skipEmptyLines: !0,
    delimiter: "|",
    // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
    dynamicTyping: !1
  }).data)) : fetch(m(e) ? e : t.href).then((o) => o.ok ? o.json() : Promise.reject(o));
}
const _ = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 576,
  xxs: 350
};
function N(e) {
  let t = "lg";
  if (e > 1200)
    return t;
  for (let n in _)
    e <= _[n] && (t = n);
  return t;
}
export {
  I as a,
  B as b,
  $ as f,
  N as g,
  m as i,
  _ as v
};
