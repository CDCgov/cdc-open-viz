var _ = function() {
  if (typeof Map < "u")
    return Map;
  function t(e, n) {
    var r = -1;
    return e.some(function(i, o) {
      return i[0] === n ? (r = o, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function e() {
        this.__entries__ = [];
      }
      return Object.defineProperty(e.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.get = function(n) {
        var r = t(this.__entries__, n), i = this.__entries__[r];
        return i && i[1];
      }, e.prototype.set = function(n, r) {
        var i = t(this.__entries__, n);
        ~i ? this.__entries__[i][1] = r : this.__entries__.push([n, r]);
      }, e.prototype.delete = function(n) {
        var r = this.__entries__, i = t(r, n);
        ~i && r.splice(i, 1);
      }, e.prototype.has = function(n) {
        return !!~t(this.__entries__, n);
      }, e.prototype.clear = function() {
        this.__entries__.splice(0);
      }, e.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var i = 0, o = this.__entries__; i < o.length; i++) {
          var s = o[i];
          n.call(r, s[1], s[0]);
        }
      }, e;
    }()
  );
}(), v = typeof window < "u" && typeof document < "u" && window.document === document, f = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), O = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(f) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), E = 2;
function R(t, e) {
  var n = !1, r = !1, i = 0;
  function o() {
    n && (n = !1, t()), r && a();
  }
  function s() {
    O(o);
  }
  function a() {
    var u = Date.now();
    if (n) {
      if (u - i < E)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(s, e);
    i = u;
  }
  return a;
}
var M = 20, x = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], A = typeof MutationObserver < "u", z = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = R(this.refresh.bind(this), M);
    }
    return t.prototype.addObserver = function(e) {
      ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
    }, t.prototype.removeObserver = function(e) {
      var n = this.observers_, r = n.indexOf(e);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, t.prototype.refresh = function() {
      var e = this.updateObservers_();
      e && this.refresh();
    }, t.prototype.updateObservers_ = function() {
      var e = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return e.forEach(function(n) {
        return n.broadcastActive();
      }), e.length > 0;
    }, t.prototype.connect_ = function() {
      !v || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), A ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !v || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(e) {
      var n = e.propertyName, r = n === void 0 ? "" : n, i = x.some(function(o) {
        return !!~r.indexOf(o);
      });
      i && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), m = function(t, e) {
  for (var n = 0, r = Object.keys(e); n < r.length; n++) {
    var i = r[n];
    Object.defineProperty(t, i, {
      value: e[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return t;
}, c = function(t) {
  var e = t && t.ownerDocument && t.ownerDocument.defaultView;
  return e || f;
}, y = d(0, 0, 0, 0);
function h(t) {
  return parseFloat(t) || 0;
}
function b(t) {
  for (var e = [], n = 1; n < arguments.length; n++)
    e[n - 1] = arguments[n];
  return e.reduce(function(r, i) {
    var o = t["border-" + i + "-width"];
    return r + h(o);
  }, 0);
}
function T(t) {
  for (var e = ["top", "right", "bottom", "left"], n = {}, r = 0, i = e; r < i.length; r++) {
    var o = i[r], s = t["padding-" + o];
    n[o] = h(s);
  }
  return n;
}
function C(t) {
  var e = t.getBBox();
  return d(0, 0, e.width, e.height);
}
function S(t) {
  var e = t.clientWidth, n = t.clientHeight;
  if (!e && !n)
    return y;
  var r = c(t).getComputedStyle(t), i = T(r), o = i.left + i.right, s = i.top + i.bottom, a = h(r.width), u = h(r.height);
  if (r.boxSizing === "border-box" && (Math.round(a + o) !== e && (a -= b(r, "left", "right") + o), Math.round(u + s) !== n && (u -= b(r, "top", "bottom") + s)), !G(t)) {
    var l = Math.round(a + o) - e, p = Math.round(u + s) - n;
    Math.abs(l) !== 1 && (a -= l), Math.abs(p) !== 1 && (u -= p);
  }
  return d(i.left, i.top, a, u);
}
var D = function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof c(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof c(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function G(t) {
  return t === c(t).document.documentElement;
}
function L(t) {
  return v ? D(t) ? C(t) : S(t) : y;
}
function P(t) {
  var e = t.x, n = t.y, r = t.width, i = t.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, s = Object.create(o.prototype);
  return m(s, {
    x: e,
    y: n,
    width: r,
    height: i,
    top: n,
    right: e + r,
    bottom: i + n,
    left: e
  }), s;
}
function d(t, e, n, r) {
  return { x: t, y: e, width: n, height: r };
}
var W = (
  /** @class */
  function() {
    function t(e) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = d(0, 0, 0, 0), this.target = e;
    }
    return t.prototype.isActive = function() {
      var e = L(this.target);
      return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var e = this.contentRect_;
      return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
    }, t;
  }()
), j = (
  /** @class */
  function() {
    function t(e, n) {
      var r = P(n);
      m(this, { target: e, contentRect: r });
    }
    return t;
  }()
), F = (
  /** @class */
  function() {
    function t(e, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new _(), typeof e != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = e, this.controller_ = n, this.callbackCtx_ = r;
    }
    return t.prototype.observe = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof c(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(e) || (n.set(e, new W(e)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(e) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(e instanceof c(e).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(e) && (n.delete(e), n.size || this.controller_.removeObserver(this));
      }
    }, t.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, t.prototype.gatherActive = function() {
      var e = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && e.activeObservations_.push(n);
      });
    }, t.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var e = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new j(r.target, r.broadcastRect());
        });
        this.callback_.call(e, n, e), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), g = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new _(), w = (
  /** @class */
  function() {
    function t(e) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = z.getInstance(), r = new F(e, n, this);
      g.set(this, r);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  w.prototype[t] = function() {
    var e;
    return (e = g.get(this))[t].apply(e, arguments);
  };
});
var H = function() {
  return typeof f.ResizeObserver < "u" ? f.ResizeObserver : w;
}();
function V(t) {
  let e = "lg";
  const n = {
    lg: 1200,
    md: 992,
    sm: 768,
    xs: 576,
    xxs: 350
  };
  if (t > 1200)
    return e;
  for (let r in n)
    t <= n[r] && (e = r);
  return e;
}
export {
  V as g,
  H as i
};
