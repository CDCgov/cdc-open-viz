import { r as v, R as r } from "./storybook-index-45401197.es.js";
import { c as Qa, A as Za, V as Ka, F as Xa, a as Ya } from "./storybook-InputToggle-1e77d9ab.es.js";
import { i as Ja, g as er } from "./storybook-getViewport-513ec896.es.js";
import { T as ea, H as ta } from "./storybook-index-3b47b3f7.es.js";
import { f as xe } from "./storybook-fetchRemoteData-1d0a5295.es.js";
import { E as na, L as Ot } from "./storybook-viewports-5c5d7af1.es.js";
import { D as Se, A as tr, a as Zt, b as Kt, c as Xt, d as Yt } from "./storybook-DataTransform-6163e156.es.js";
import { b as nr, D as ar, f as rr, C as aa, a as ra } from "./storybook-CdcChartComponent-b5228c9e.es.js";
import { C as oa } from "./storybook-CdcDataBite-7aaaabf2.es.js";
import { e as or, C as ia, A as ir } from "./storybook-CdcMap-7a44998e.es.js";
import { C as sa } from "./storybook-CdcWaffleChart-89d05418.es.js";
import { C as la } from "./storybook-CdcMarkupInclude-6be71bc2.es.js";
import { A as Me, a as sr, b as nt, c as at, d as rt, e as ot } from "./storybook-Accordion-2501c7d9.es.js";
import { I as lr, a as Ne } from "./storybook-editor-57986c01.es.js";
import { B as cr } from "./storybook-Button-63da743c.es.js";
import { a as P } from "./storybook-Icon-4f5978ba.es.js";
import { T as L } from "./storybook-Tooltip-4102bd69.es.js";
import { I as ge } from "./storybook-InputSelect-20478396.es.js";
import { L as ye, u as ur, c as ca } from "./storybook-coveUpdateWorker-4c7dbbf1.es.js";
import { u as It } from "./storybook-updateFieldFactory-c006040a.es.js";
import { D as dr } from "./storybook-DataDesigner-1d516d20.es.js";
import { P as Fe } from "./storybook-index-43433e35.es.js";
import { C as Ue, T as J, S as fr } from "./storybook-Inputs-b80d0cf3.es.js";
import { _ as N } from "./storybook-lodash-a4231e1c.es.js";
import { u as mr, g as ua, f as Jt, a as pr, F as gr, b as _t, c as da, d as Oe, e as hr } from "./storybook-Filters-ce4a04a7.es.js";
import { D as gt, M as en } from "./storybook-DataTable-897188ef.es.js";
import { F as oe } from "./storybook-FilterStyles-fd509eb9.es.js";
import { D as vr } from "./storybook-DashboardFilters-3d2191b7.es.js";
import { M as it } from "./storybook-MultiSelect-d587cce3.es.js";
import { F as yr } from "./storybook-Footnotes-108c3a2d.es.js";
import { L as br } from "./storybook-Loader-f4ec7b29.es.js";
import { j as Er } from "./storybook-jsx-runtime-36872362.es.js";
var fa = v.createContext({
  dragDropManager: void 0
}), ie;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(ie || (ie = {}));
function F(e, t) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    a[o - 2] = arguments[o];
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var i;
    if (t === void 0)
      i = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = 0;
      i = new Error(t.replace(/%s/g, function() {
        return a[s++];
      })), i.name = "Invariant Violation";
    }
    throw i.framesToPop = 1, i;
  }
}
var kt = "dnd-core/INIT_COORDS", Xe = "dnd-core/BEGIN_DRAG", Nt = "dnd-core/PUBLISH_DRAG_SOURCE", Ye = "dnd-core/HOVER", Je = "dnd-core/DROP", et = "dnd-core/END_DRAG";
function tn(e, t) {
  return {
    type: kt,
    payload: {
      sourceClientOffset: t || null,
      clientOffset: e || null
    }
  };
}
function ze(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ze = function(n) {
    return typeof n;
  } : ze = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ze(e);
}
function Dr(e, t, n) {
  return t.split(".").reduce(function(a, o) {
    return a && a[o] ? a[o] : n || null;
  }, e);
}
function Sr(e, t) {
  return e.filter(function(n) {
    return n !== t;
  });
}
function ma(e) {
  return ze(e) === "object";
}
function wr(e, t) {
  var n = /* @__PURE__ */ new Map(), a = function(s) {
    n.set(s, n.has(s) ? n.get(s) + 1 : 1);
  };
  e.forEach(a), t.forEach(a);
  var o = [];
  return n.forEach(function(i, s) {
    i === 1 && o.push(s);
  }), o;
}
function Tr(e, t) {
  return e.filter(function(n) {
    return t.indexOf(n) > -1;
  });
}
var Cr = {
  type: kt,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function Or(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, o = a.publishSource, i = o === void 0 ? !0 : o, s = a.clientOffset, l = a.getSourceClientOffset, c = e.getMonitor(), m = e.getRegistry();
    e.dispatch(tn(s)), Ir(n, c, m);
    var p = Nr(n, c);
    if (p === null) {
      e.dispatch(Cr);
      return;
    }
    var u = null;
    if (s) {
      if (!l)
        throw new Error("getSourceClientOffset must be defined");
      _r(l), u = l(p);
    }
    e.dispatch(tn(s, u));
    var E = m.getSource(p), h = E.beginDrag(c, p);
    if (h != null) {
      kr(h), m.pinSource(p);
      var O = m.getSourceType(p);
      return {
        type: Xe,
        payload: {
          itemType: O,
          item: h,
          sourceId: p,
          clientOffset: s || null,
          sourceClientOffset: u || null,
          isSourcePublic: !!i
        }
      };
    }
  };
}
function Ir(e, t, n) {
  F(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(a) {
    F(n.getSource(a), "Expected sourceIds to be registered.");
  });
}
function _r(e) {
  F(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function kr(e) {
  F(ma(e), "Item must be an object.");
}
function Nr(e, t) {
  for (var n = null, a = e.length - 1; a >= 0; a--)
    if (t.canDragSource(e[a])) {
      n = e[a];
      break;
    }
  return n;
}
function Fr(e) {
  return function() {
    var n = e.getMonitor();
    if (n.isDragging())
      return {
        type: Nt
      };
  };
}
function ht(e, t) {
  return t === null ? e === null : Array.isArray(e) ? e.some(function(n) {
    return n === t;
  }) : e === t;
}
function Ar(e) {
  return function(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.clientOffset;
    Lr(n);
    var i = n.slice(0), s = e.getMonitor(), l = e.getRegistry();
    Pr(i, s, l);
    var c = s.getItemType();
    return Rr(i, l, c), xr(i, s, l), {
      type: Ye,
      payload: {
        targetIds: i,
        clientOffset: o || null
      }
    };
  };
}
function Lr(e) {
  F(Array.isArray(e), "Expected targetIds to be an array.");
}
function Pr(e, t, n) {
  F(t.isDragging(), "Cannot call hover while not dragging."), F(!t.didDrop(), "Cannot call hover after drop.");
  for (var a = 0; a < e.length; a++) {
    var o = e[a];
    F(e.lastIndexOf(o) === a, "Expected targetIds to be unique in the passed array.");
    var i = n.getTarget(o);
    F(i, "Expected targetIds to be registered.");
  }
}
function Rr(e, t, n) {
  for (var a = e.length - 1; a >= 0; a--) {
    var o = e[a], i = t.getTargetType(o);
    ht(i, n) || e.splice(a, 1);
  }
}
function xr(e, t, n) {
  e.forEach(function(a) {
    var o = n.getTarget(a);
    o.hover(t, a);
  });
}
function nn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function an(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nn(Object(n), !0).forEach(function(a) {
      Mr(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nn(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Mr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function $r(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = e.getMonitor(), o = e.getRegistry();
    Br(a);
    var i = zr(a);
    i.forEach(function(s, l) {
      var c = Vr(s, l, o, a), m = {
        type: Je,
        payload: {
          dropResult: an(an({}, n), c)
        }
      };
      e.dispatch(m);
    });
  };
}
function Br(e) {
  F(e.isDragging(), "Cannot call drop while not dragging."), F(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function Vr(e, t, n, a) {
  var o = n.getTarget(e), i = o ? o.drop(a, e) : void 0;
  return Ur(i), typeof i > "u" && (i = t === 0 ? {} : a.getDropResult()), i;
}
function Ur(e) {
  F(typeof e > "u" || ma(e), "Drop result must either be an object or undefined.");
}
function zr(e) {
  var t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function Hr(e) {
  return function() {
    var n = e.getMonitor(), a = e.getRegistry();
    jr(n);
    var o = n.getSourceId();
    if (o != null) {
      var i = a.getSource(o, !0);
      i.endDrag(n, o), a.unpinSource();
    }
    return {
      type: et
    };
  };
}
function jr(e) {
  F(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function Gr(e) {
  return {
    beginDrag: Or(e),
    publishDragSource: Fr(e),
    hover: Ar(e),
    drop: $r(e),
    endDrag: Hr(e)
  };
}
function qr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Wr(e, t, n) {
  return t && rn(e.prototype, t), n && rn(e, n), e;
}
function Ae(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Qr = /* @__PURE__ */ function() {
  function e(t, n) {
    var a = this;
    qr(this, e), Ae(this, "store", void 0), Ae(this, "monitor", void 0), Ae(this, "backend", void 0), Ae(this, "isSetUp", !1), Ae(this, "handleRefCountChange", function() {
      var o = a.store.getState().refCount > 0;
      a.backend && (o && !a.isSetUp ? (a.backend.setup(), a.isSetUp = !0) : !o && a.isSetUp && (a.backend.teardown(), a.isSetUp = !1));
    }), this.store = t, this.monitor = n, t.subscribe(this.handleRefCountChange);
  }
  return Wr(e, [{
    key: "receiveBackend",
    value: function(n) {
      this.backend = n;
    }
  }, {
    key: "getMonitor",
    value: function() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function() {
      var n = this, a = this.store.dispatch;
      function o(s) {
        return function() {
          for (var l = arguments.length, c = new Array(l), m = 0; m < l; m++)
            c[m] = arguments[m];
          var p = s.apply(n, c);
          typeof p < "u" && a(p);
        };
      }
      var i = Gr(this);
      return Object.keys(i).reduce(function(s, l) {
        var c = i[l];
        return s[l] = o(c), s;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function(n) {
      this.store.dispatch(n);
    }
  }]), e;
}(), Zr = function(t, n) {
  return t === n;
};
function Kr(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function Xr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Zr;
  if (e.length !== t.length)
    return !1;
  for (var a = 0; a < e.length; ++a)
    if (!n(e[a], t[a]))
      return !1;
  return !0;
}
function on(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function sn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? on(Object(n), !0).forEach(function(a) {
      Yr(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : on(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Yr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ln = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function Jr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ln, t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
  switch (t.type) {
    case kt:
    case Xe:
      return {
        initialSourceClientOffset: n.sourceClientOffset,
        initialClientOffset: n.clientOffset,
        clientOffset: n.clientOffset
      };
    case Ye:
      return Kr(e.clientOffset, n.clientOffset) ? e : sn(sn({}, e), {}, {
        clientOffset: n.clientOffset
      });
    case et:
    case Je:
      return ln;
    default:
      return e;
  }
}
var Ft = "dnd-core/ADD_SOURCE", At = "dnd-core/ADD_TARGET", Lt = "dnd-core/REMOVE_SOURCE", tt = "dnd-core/REMOVE_TARGET";
function eo(e) {
  return {
    type: Ft,
    payload: {
      sourceId: e
    }
  };
}
function to(e) {
  return {
    type: At,
    payload: {
      targetId: e
    }
  };
}
function no(e) {
  return {
    type: Lt,
    payload: {
      sourceId: e
    }
  };
}
function ao(e) {
  return {
    type: tt,
    payload: {
      targetId: e
    }
  };
}
function cn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cn(Object(n), !0).forEach(function(a) {
      ro(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cn(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function ro(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var oo = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function io() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : oo, t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
  switch (t.type) {
    case Xe:
      return re(re({}, e), {}, {
        itemType: n.itemType,
        item: n.item,
        sourceId: n.sourceId,
        isSourcePublic: n.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case Nt:
      return re(re({}, e), {}, {
        isSourcePublic: !0
      });
    case Ye:
      return re(re({}, e), {}, {
        targetIds: n.targetIds
      });
    case tt:
      return e.targetIds.indexOf(n.targetId) === -1 ? e : re(re({}, e), {}, {
        targetIds: Sr(e.targetIds, n.targetId)
      });
    case Je:
      return re(re({}, e), {}, {
        dropResult: n.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case et:
      return re(re({}, e), {}, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return e;
  }
}
function so() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Ft:
    case At:
      return e + 1;
    case Lt:
    case tt:
      return e - 1;
    default:
      return e;
  }
}
var We = [], Pt = [];
We.__IS_NONE__ = !0;
Pt.__IS_ALL__ = !0;
function lo(e, t) {
  if (e === We)
    return !1;
  if (e === Pt || typeof t > "u")
    return !0;
  var n = Tr(t, e);
  return n.length > 0;
}
function co() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case Ye:
      break;
    case Ft:
    case At:
    case tt:
    case Lt:
      return We;
    case Xe:
    case Nt:
    case et:
    case Je:
    default:
      return Pt;
  }
  var t = e.payload, n = t.targetIds, a = n === void 0 ? [] : n, o = t.prevTargetIds, i = o === void 0 ? [] : o, s = wr(a, i), l = s.length > 0 || !Xr(a, i);
  if (!l)
    return We;
  var c = i[i.length - 1], m = a[a.length - 1];
  return c !== m && (c && s.push(c), m && s.push(m)), s;
}
function uo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return e + 1;
}
function un(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function dn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? un(Object(n), !0).forEach(function(a) {
      fo(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : un(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function fo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function mo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: co(e.dirtyHandlerIds, {
      type: t.type,
      payload: dn(dn({}, t.payload), {}, {
        prevTargetIds: Dr(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: Jr(e.dragOffset, t),
    refCount: so(e.refCount, t),
    dragOperation: io(e.dragOperation, t),
    stateId: uo(e.stateId)
  };
}
function po(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function pa(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function go(e) {
  var t = e.clientOffset, n = e.initialClientOffset, a = e.initialSourceClientOffset;
  return !t || !n || !a ? null : pa(po(t, a), n);
}
function ho(e) {
  var t = e.clientOffset, n = e.initialClientOffset;
  return !t || !n ? null : pa(t, n);
}
function vo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function yo(e, t, n) {
  return t && fn(e.prototype, t), n && fn(e, n), e;
}
function mn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var bo = /* @__PURE__ */ function() {
  function e(t, n) {
    vo(this, e), mn(this, "store", void 0), mn(this, "registry", void 0), this.store = t, this.registry = n;
  }
  return yo(e, [{
    key: "subscribeToStateChange",
    value: function(n) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      }, i = o.handlerIds;
      F(typeof n == "function", "listener must be a function."), F(typeof i > "u" || Array.isArray(i), "handlerIds, when specified, must be an array of strings.");
      var s = this.store.getState().stateId, l = function() {
        var m = a.store.getState(), p = m.stateId;
        try {
          var u = p === s || p === s + 1 && !lo(m.dirtyHandlerIds, i);
          u || n();
        } finally {
          s = p;
        }
      };
      return this.store.subscribe(l);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(n) {
      var a = this;
      F(typeof n == "function", "listener must be a function.");
      var o = this.store.getState().dragOffset, i = function() {
        var l = a.store.getState().dragOffset;
        l !== o && (o = l, n());
      };
      return this.store.subscribe(i);
    }
  }, {
    key: "canDragSource",
    value: function(n) {
      if (!n)
        return !1;
      var a = this.registry.getSource(n);
      return F(a, "Expected to find a valid source. sourceId=".concat(n)), this.isDragging() ? !1 : a.canDrag(this, n);
    }
  }, {
    key: "canDropOnTarget",
    value: function(n) {
      if (!n)
        return !1;
      var a = this.registry.getTarget(n);
      if (F(a, "Expected to find a valid target. targetId=".concat(n)), !this.isDragging() || this.didDrop())
        return !1;
      var o = this.registry.getTargetType(n), i = this.getItemType();
      return ht(o, i) && a.canDrop(this, n);
    }
  }, {
    key: "isDragging",
    value: function() {
      return !!this.getItemType();
    }
  }, {
    key: "isDraggingSource",
    value: function(n) {
      if (!n)
        return !1;
      var a = this.registry.getSource(n, !0);
      if (F(a, "Expected to find a valid source. sourceId=".concat(n)), !this.isDragging() || !this.isSourcePublic())
        return !1;
      var o = this.registry.getSourceType(n), i = this.getItemType();
      return o !== i ? !1 : a.isDragging(this, n);
    }
  }, {
    key: "isOverTarget",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shallow: !1
      };
      if (!n)
        return !1;
      var o = a.shallow;
      if (!this.isDragging())
        return !1;
      var i = this.registry.getTargetType(n), s = this.getItemType();
      if (s && !ht(i, s))
        return !1;
      var l = this.getTargetIds();
      if (!l.length)
        return !1;
      var c = l.indexOf(n);
      return o ? c === l.length - 1 : c > -1;
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function() {
      return !!this.store.getState().dragOperation.isSourcePublic;
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return go(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return ho(this.store.getState().dragOffset);
    }
  }]), e;
}(), Eo = 0;
function Do() {
  return Eo++;
}
function He(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? He = function(n) {
    return typeof n;
  } : He = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, He(e);
}
function So(e) {
  F(typeof e.canDrag == "function", "Expected canDrag to be a function."), F(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), F(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function wo(e) {
  F(typeof e.canDrop == "function", "Expected canDrop to be a function."), F(typeof e.hover == "function", "Expected hover to be a function."), F(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function vt(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(function(n) {
      return vt(n, !1);
    });
    return;
  }
  F(typeof e == "string" || He(e) === "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const pn = typeof global < "u" ? global : self, ga = pn.MutationObserver || pn.WebKitMutationObserver;
function ha(e) {
  return function() {
    const n = setTimeout(o, 0), a = setInterval(o, 50);
    function o() {
      clearTimeout(n), clearInterval(a), e();
    }
  };
}
function To(e) {
  let t = 1;
  const n = new ga(e), a = document.createTextNode("");
  return n.observe(a, {
    characterData: !0
  }), function() {
    t = -t, a.data = t;
  };
}
const Co = typeof ga == "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  To
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  ha
);
class Oo {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(t) {
    const { queue: n, requestFlush: a } = this;
    n.length || (a(), this.flushing = !0), n[n.length] = t;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: t } = this;
      for (; this.index < t.length; ) {
        const n = this.index;
        if (this.index++, t[n].call(), this.index > this.capacity) {
          for (let a = 0, o = t.length - this.index; a < o; a++)
            t[a] = t[a + this.index];
          t.length -= this.index, this.index = 0;
        }
      }
      t.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (t) => {
      this.pendingErrors.push(t), this.requestErrorThrow();
    }, this.requestFlush = Co(this.flush), this.requestErrorThrow = ha(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class Io {
  call() {
    try {
      this.task && this.task();
    } catch (t) {
      this.onError(t);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(t, n) {
    this.onError = t, this.release = n, this.task = null;
  }
}
class _o {
  create(t) {
    const n = this.freeTasks, a = n.length ? n.pop() : new Io(
      this.onError,
      (o) => n[n.length] = o
    );
    return a.task = t, a;
  }
  constructor(t) {
    this.onError = t, this.freeTasks = [];
  }
}
const va = new Oo(), ko = new _o(va.registerPendingError);
function No(e) {
  va.enqueueTask(ko.create(e));
}
function Fo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Ao(e, t, n) {
  return t && gn(e.prototype, t), n && gn(e, n), e;
}
function Te(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Lo(e, t) {
  return Mo(e) || xo(e, t) || Ro(e, t) || Po();
}
function Po() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ro(e, t) {
  if (e) {
    if (typeof e == "string")
      return hn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return hn(e, t);
  }
}
function hn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function xo(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(o = (s = n.next()).done) && (a.push(s.value), !(t && a.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, l = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return a;
  }
}
function Mo(e) {
  if (Array.isArray(e))
    return e;
}
function $o(e) {
  var t = Do().toString();
  switch (e) {
    case ie.SOURCE:
      return "S".concat(t);
    case ie.TARGET:
      return "T".concat(t);
    default:
      throw new Error("Unknown Handler Role: ".concat(e));
  }
}
function vn(e) {
  switch (e[0]) {
    case "S":
      return ie.SOURCE;
    case "T":
      return ie.TARGET;
    default:
      F(!1, "Cannot parse handler ID: ".concat(e));
  }
}
function yn(e, t) {
  var n = e.entries(), a = !1;
  do {
    var o = n.next(), i = o.done, s = Lo(o.value, 2), l = s[1];
    if (l === t)
      return !0;
    a = !!i;
  } while (!a);
  return !1;
}
var Bo = /* @__PURE__ */ function() {
  function e(t) {
    Fo(this, e), Te(this, "types", /* @__PURE__ */ new Map()), Te(this, "dragSources", /* @__PURE__ */ new Map()), Te(this, "dropTargets", /* @__PURE__ */ new Map()), Te(this, "pinnedSourceId", null), Te(this, "pinnedSource", null), Te(this, "store", void 0), this.store = t;
  }
  return Ao(e, [{
    key: "addSource",
    value: function(n, a) {
      vt(n), So(a);
      var o = this.addHandler(ie.SOURCE, n, a);
      return this.store.dispatch(eo(o)), o;
    }
  }, {
    key: "addTarget",
    value: function(n, a) {
      vt(n, !0), wo(a);
      var o = this.addHandler(ie.TARGET, n, a);
      return this.store.dispatch(to(o)), o;
    }
  }, {
    key: "containsHandler",
    value: function(n) {
      return yn(this.dragSources, n) || yn(this.dropTargets, n);
    }
  }, {
    key: "getSource",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      F(this.isSourceId(n), "Expected a valid source ID.");
      var o = a && n === this.pinnedSourceId, i = o ? this.pinnedSource : this.dragSources.get(n);
      return i;
    }
  }, {
    key: "getTarget",
    value: function(n) {
      return F(this.isTargetId(n), "Expected a valid target ID."), this.dropTargets.get(n);
    }
  }, {
    key: "getSourceType",
    value: function(n) {
      return F(this.isSourceId(n), "Expected a valid source ID."), this.types.get(n);
    }
  }, {
    key: "getTargetType",
    value: function(n) {
      return F(this.isTargetId(n), "Expected a valid target ID."), this.types.get(n);
    }
  }, {
    key: "isSourceId",
    value: function(n) {
      var a = vn(n);
      return a === ie.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(n) {
      var a = vn(n);
      return a === ie.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(n) {
      var a = this;
      F(this.getSource(n), "Expected an existing source."), this.store.dispatch(no(n)), No(function() {
        a.dragSources.delete(n), a.types.delete(n);
      });
    }
  }, {
    key: "removeTarget",
    value: function(n) {
      F(this.getTarget(n), "Expected an existing target."), this.store.dispatch(ao(n)), this.dropTargets.delete(n), this.types.delete(n);
    }
  }, {
    key: "pinSource",
    value: function(n) {
      var a = this.getSource(n);
      F(a, "Expected an existing source."), this.pinnedSourceId = n, this.pinnedSource = a;
    }
  }, {
    key: "unpinSource",
    value: function() {
      F(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function(n, a, o) {
      var i = $o(n);
      return this.types.set(i, a), n === ie.SOURCE ? this.dragSources.set(i, o) : n === ie.TARGET && this.dropTargets.set(i, o), i;
    }
  }]), e;
}();
function Vo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, o = Uo(a), i = new bo(o, new Bo(o)), s = new Qr(o, i), l = e(s, t, n);
  return s.receiveBackend(l), s;
}
function Uo(e) {
  var t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return Qa(mo, e && t && t({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var zo = ["children"];
function Ho(e, t) {
  return Wo(e) || qo(e, t) || Go(e, t) || jo();
}
function jo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Go(e, t) {
  if (e) {
    if (typeof e == "string")
      return bn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return bn(e, t);
  }
}
function bn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function qo(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(o = (s = n.next()).done) && (a.push(s.value), !(t && a.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, l = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return a;
  }
}
function Wo(e) {
  if (Array.isArray(e))
    return e;
}
function Qo(e, t) {
  if (e == null)
    return {};
  var n = Zo(e, t), a, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      a = i[o], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function Zo(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), o, i;
  for (i = 0; i < a.length; i++)
    o = a[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var En = 0, je = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), Ko = v.memo(function(t) {
  var n = t.children, a = Qo(t, zo), o = Xo(a), i = Ho(o, 2), s = i[0], l = i[1];
  return v.useEffect(function() {
    if (l) {
      var c = ya();
      return ++En, function() {
        --En === 0 && (c[je] = null);
      };
    }
  }, []), Er(fa.Provider, Object.assign({
    value: s
  }, {
    children: n
  }), void 0);
});
function Xo(e) {
  if ("manager" in e) {
    var t = {
      dragDropManager: e.manager
    };
    return [t, !1];
  }
  var n = Yo(e.backend, e.context, e.options, e.debugMode), a = !e.context;
  return [n, a];
}
function Yo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ya(), n = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = t;
  return o[je] || (o[je] = {
    dragDropManager: Vo(e, t, n, a)
  }), o[je];
}
function ya() {
  return typeof global < "u" ? global : window;
}
function Jo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function ei(e, t, n) {
  return t && Dn(e.prototype, t), n && Dn(e, n), e;
}
function Sn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var st = !1, lt = !1, ti = /* @__PURE__ */ function() {
  function e(t) {
    Jo(this, e), Sn(this, "internalMonitor", void 0), Sn(this, "sourceId", null), this.internalMonitor = t.getMonitor();
  }
  return ei(e, [{
    key: "receiveHandlerId",
    value: function(n) {
      this.sourceId = n;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function() {
      F(!st, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return st = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        st = !1;
      }
    }
  }, {
    key: "isDragging",
    value: function() {
      if (!this.sourceId)
        return !1;
      F(!lt, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return lt = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        lt = !1;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function(n, a) {
      return this.internalMonitor.subscribeToStateChange(n, a);
    }
  }, {
    key: "isDraggingSource",
    value: function(n) {
      return this.internalMonitor.isDraggingSource(n);
    }
  }, {
    key: "isOverTarget",
    value: function(n, a) {
      return this.internalMonitor.isOverTarget(n, a);
    }
  }, {
    key: "getTargetIds",
    value: function() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(n) {
      return this.internalMonitor.subscribeToOffsetChange(n);
    }
  }, {
    key: "canDragSource",
    value: function(n) {
      return this.internalMonitor.canDragSource(n);
    }
  }, {
    key: "canDropOnTarget",
    value: function(n) {
      return this.internalMonitor.canDropOnTarget(n);
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]), e;
}();
function ni(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function ai(e, t, n) {
  return t && wn(e.prototype, t), n && wn(e, n), e;
}
function Tn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ct = !1, ri = /* @__PURE__ */ function() {
  function e(t) {
    ni(this, e), Tn(this, "internalMonitor", void 0), Tn(this, "targetId", null), this.internalMonitor = t.getMonitor();
  }
  return ai(e, [{
    key: "receiveHandlerId",
    value: function(n) {
      this.targetId = n;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function(n, a) {
      return this.internalMonitor.subscribeToStateChange(n, a);
    }
  }, {
    key: "canDrop",
    value: function() {
      if (!this.targetId)
        return !1;
      F(!ct, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return ct = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        ct = !1;
      }
    }
  }, {
    key: "isOver",
    value: function(n) {
      return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, n) : !1;
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]), e;
}();
function oi(e) {
  if (typeof e.type != "string") {
    var t = e.type.displayName || e.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(t, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function ii(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!v.isValidElement(t)) {
      var a = t;
      return e(a, n), a;
    }
    var o = t;
    oi(o);
    var i = n ? function(s) {
      return e(s, n);
    } : e;
    return si(o, i);
  };
}
function ba(e) {
  var t = {};
  return Object.keys(e).forEach(function(n) {
    var a = e[n];
    if (n.endsWith("Ref"))
      t[n] = e[n];
    else {
      var o = ii(a);
      t[n] = function() {
        return o;
      };
    }
  }), t;
}
function Cn(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
function si(e, t) {
  var n = e.ref;
  return F(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? v.cloneElement(e, {
    ref: function(o) {
      Cn(n, o), Cn(t, o);
    }
  }) : v.cloneElement(e, {
    ref: t
  });
}
function Ge(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ge = function(n) {
    return typeof n;
  } : Ge = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ge(e);
}
function yt(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && Ge(e) === "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function bt(e, t, n, a) {
  var o = n ? n.call(a, e, t) : void 0;
  if (o !== void 0)
    return !!o;
  if (e === t)
    return !0;
  if (typeof e != "object" || !e || typeof t != "object" || !t)
    return !1;
  var i = Object.keys(e), s = Object.keys(t);
  if (i.length !== s.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(t), c = 0; c < i.length; c++) {
    var m = i[c];
    if (!l(m))
      return !1;
    var p = e[m], u = t[m];
    if (o = n ? n.call(a, p, u, m) : void 0, o === !1 || o === void 0 && p !== u)
      return !1;
  }
  return !0;
}
function li(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function On(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function ci(e, t, n) {
  return t && On(e.prototype, t), n && On(e, n), e;
}
function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ui = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    li(this, e), K(this, "hooks", ba({
      dragSource: function(o, i) {
        n.clearDragSource(), n.dragSourceOptions = i || null, yt(o) ? n.dragSourceRef = o : n.dragSourceNode = o, n.reconnectDragSource();
      },
      dragPreview: function(o, i) {
        n.clearDragPreview(), n.dragPreviewOptions = i || null, yt(o) ? n.dragPreviewRef = o : n.dragPreviewNode = o, n.reconnectDragPreview();
      }
    })), K(this, "handlerId", null), K(this, "dragSourceRef", null), K(this, "dragSourceNode", void 0), K(this, "dragSourceOptionsInternal", null), K(this, "dragSourceUnsubscribe", void 0), K(this, "dragPreviewRef", null), K(this, "dragPreviewNode", void 0), K(this, "dragPreviewOptionsInternal", null), K(this, "dragPreviewUnsubscribe", void 0), K(this, "lastConnectedHandlerId", null), K(this, "lastConnectedDragSource", null), K(this, "lastConnectedDragSourceOptions", null), K(this, "lastConnectedDragPreview", null), K(this, "lastConnectedDragPreviewOptions", null), K(this, "backend", void 0), this.backend = t;
  }
  return ci(e, [{
    key: "receiveHandlerId",
    value: function(n) {
      this.handlerId !== n && (this.handlerId = n, this.reconnect());
    }
  }, {
    key: "connectTarget",
    get: function() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function() {
      return this.dragSourceOptionsInternal;
    },
    set: function(n) {
      this.dragSourceOptionsInternal = n;
    }
  }, {
    key: "dragPreviewOptions",
    get: function() {
      return this.dragPreviewOptionsInternal;
    },
    set: function(n) {
      this.dragPreviewOptionsInternal = n;
    }
  }, {
    key: "reconnect",
    value: function() {
      this.reconnectDragSource(), this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function() {
      var n = this.dragSource, a = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (a && this.disconnectDragSource(), !!this.handlerId) {
        if (!n) {
          this.lastConnectedDragSource = n;
          return;
        }
        a && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = n, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, n, this.dragSourceOptions));
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function() {
      var n = this.dragPreview, a = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (a && this.disconnectDragPreview(), !!this.handlerId) {
        if (!n) {
          this.lastConnectedDragPreview = n;
          return;
        }
        a && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = n, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, n, this.dragPreviewOptions));
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function() {
      return !bt(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function() {
      return !bt(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function() {
      this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
    }
  }, {
    key: "disconnectDragPreview",
    value: function() {
      this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
    }
  }, {
    key: "dragSource",
    get: function() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }, {
    key: "clearDragSource",
    value: function() {
      this.dragSourceNode = null, this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function() {
      this.dragPreviewNode = null, this.dragPreviewRef = null;
    }
  }]), e;
}();
function di(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function In(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function fi(e, t, n) {
  return t && In(e.prototype, t), n && In(e, n), e;
}
function fe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var mi = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    di(this, e), fe(this, "hooks", ba({
      dropTarget: function(o, i) {
        n.clearDropTarget(), n.dropTargetOptions = i, yt(o) ? n.dropTargetRef = o : n.dropTargetNode = o, n.reconnect();
      }
    })), fe(this, "handlerId", null), fe(this, "dropTargetRef", null), fe(this, "dropTargetNode", void 0), fe(this, "dropTargetOptionsInternal", null), fe(this, "unsubscribeDropTarget", void 0), fe(this, "lastConnectedHandlerId", null), fe(this, "lastConnectedDropTarget", null), fe(this, "lastConnectedDropTargetOptions", null), fe(this, "backend", void 0), this.backend = t;
  }
  return fi(e, [{
    key: "connectTarget",
    get: function() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function() {
      var n = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      n && this.disconnectDropTarget();
      var a = this.dropTarget;
      if (this.handlerId) {
        if (!a) {
          this.lastConnectedDropTarget = a;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = a, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, a, this.dropTargetOptions));
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function(n) {
      n !== this.handlerId && (this.handlerId = n, this.reconnect());
    }
  }, {
    key: "dropTargetOptions",
    get: function() {
      return this.dropTargetOptionsInternal;
    },
    set: function(n) {
      this.dropTargetOptionsInternal = n;
    }
  }, {
    key: "didHandlerIdChange",
    value: function() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function() {
      return !bt(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function() {
      this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
    }
  }, {
    key: "dropTarget",
    get: function() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }, {
    key: "clearDropTarget",
    value: function() {
      this.dropTargetRef = null, this.dropTargetNode = null;
    }
  }]), e;
}();
function pi(e, t, n) {
  var a = n.getRegistry(), o = a.addTarget(e, t);
  return [o, function() {
    return a.removeTarget(o);
  }];
}
function gi(e, t, n) {
  var a = n.getRegistry(), o = a.addSource(e, t);
  return [o, function() {
    return a.removeSource(o);
  }];
}
var Ee = typeof window < "u" ? v.useLayoutEffect : v.useEffect;
function qe(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qe = function(n) {
    return typeof n;
  } : qe = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qe(e);
}
function hi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _n(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function vi(e, t, n) {
  return t && _n(e.prototype, t), n && _n(e, n), e;
}
function ut(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var yi = /* @__PURE__ */ function() {
  function e(t, n, a) {
    hi(this, e), ut(this, "spec", void 0), ut(this, "monitor", void 0), ut(this, "connector", void 0), this.spec = t, this.monitor = n, this.connector = a;
  }
  return vi(e, [{
    key: "beginDrag",
    value: function() {
      var n, a = this.spec, o = this.monitor, i = null;
      return qe(a.item) === "object" ? i = a.item : typeof a.item == "function" ? i = a.item(o) : i = {}, (n = i) !== null && n !== void 0 ? n : null;
    }
  }, {
    key: "canDrag",
    value: function() {
      var n = this.spec, a = this.monitor;
      return typeof n.canDrag == "boolean" ? n.canDrag : typeof n.canDrag == "function" ? n.canDrag(a) : !0;
    }
  }, {
    key: "isDragging",
    value: function(n, a) {
      var o = this.spec, i = this.monitor, s = o.isDragging;
      return s ? s(i) : a === n.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
      var n = this.spec, a = this.monitor, o = this.connector, i = n.end;
      i && i(a.getItem(), a), o.reconnect();
    }
  }]), e;
}();
function bi(e, t, n) {
  var a = v.useMemo(function() {
    return new yi(e, t, n);
  }, [t, n]);
  return v.useEffect(function() {
    a.spec = e;
  }, [e]), a;
}
function _e() {
  var e = v.useContext(fa), t = e.dragDropManager;
  return F(t != null, "Expected drag drop context"), t;
}
function Ei(e) {
  return v.useMemo(function() {
    var t = e.type;
    return F(t != null, "spec.type must be defined"), t;
  }, [e]);
}
function Di(e, t) {
  return Ci(e) || Ti(e, t) || wi(e, t) || Si();
}
function Si() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wi(e, t) {
  if (e) {
    if (typeof e == "string")
      return kn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return kn(e, t);
  }
}
function kn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Ti(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(o = (s = n.next()).done) && (a.push(s.value), !(t && a.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, l = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return a;
  }
}
function Ci(e) {
  if (Array.isArray(e))
    return e;
}
function Oi(e, t, n) {
  var a = _e(), o = bi(e, t, n), i = Ei(e);
  Ee(function() {
    if (i != null) {
      var l = gi(i, o, a), c = Di(l, 2), m = c[0], p = c[1];
      return t.receiveHandlerId(m), n.receiveHandlerId(m), p;
    }
  }, [a, t, n, o, i]);
}
function Ii(e) {
  return Fi(e) || Ni(e) || ki(e) || _i();
}
function _i() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ki(e, t) {
  if (e) {
    if (typeof e == "string")
      return Et(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Et(e, t);
  }
}
function Ni(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Fi(e) {
  if (Array.isArray(e))
    return Et(e);
}
function Et(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Ea(e, t) {
  var n = Ii(t || []);
  return t == null && typeof e != "function" && n.push(e), v.useMemo(function() {
    return typeof e == "function" ? e() : e;
  }, n);
}
function Ai() {
  var e = _e();
  return v.useMemo(function() {
    return new ti(e);
  }, [e]);
}
function Li(e, t) {
  var n = _e(), a = v.useMemo(function() {
    return new ui(n.getBackend());
  }, [n]);
  return Ee(function() {
    return a.dragSourceOptions = e || null, a.reconnect(), function() {
      return a.disconnectDragSource();
    };
  }, [a, e]), Ee(function() {
    return a.dragPreviewOptions = t || null, a.reconnect(), function() {
      return a.disconnectDragPreview();
    };
  }, [a, t]), a;
}
function Pi(e, t) {
  return $i(e) || Mi(e, t) || xi(e, t) || Ri();
}
function Ri() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xi(e, t) {
  if (e) {
    if (typeof e == "string")
      return Nn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Nn(e, t);
  }
}
function Nn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Mi(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(o = (s = n.next()).done) && (a.push(s.value), !(t && a.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, l = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return a;
  }
}
function $i(e) {
  if (Array.isArray(e))
    return e;
}
function Bi(e, t, n) {
  var a = v.useState(function() {
    return t(e);
  }), o = Pi(a, 2), i = o[0], s = o[1], l = v.useCallback(function() {
    var c = t(e);
    or(i, c) || (s(c), n && n());
  }, [i, e, n]);
  return Ee(l), [i, l];
}
function Vi(e, t) {
  return ji(e) || Hi(e, t) || zi(e, t) || Ui();
}
function Ui() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zi(e, t) {
  if (e) {
    if (typeof e == "string")
      return Fn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Fn(e, t);
  }
}
function Fn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Hi(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(o = (s = n.next()).done) && (a.push(s.value), !(t && a.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, l = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return a;
  }
}
function ji(e) {
  if (Array.isArray(e))
    return e;
}
function Gi(e, t, n) {
  var a = Bi(e, t, n), o = Vi(a, 2), i = o[0], s = o[1];
  return Ee(function() {
    var c = e.getHandlerId();
    if (c != null)
      return e.subscribeToStateChange(s, {
        handlerIds: [c]
      });
  }, [e, s]), i;
}
function Da(e, t, n) {
  return Gi(t, e || function() {
    return {};
  }, function() {
    return n.reconnect();
  });
}
function qi(e) {
  return v.useMemo(function() {
    return e.hooks.dragSource();
  }, [e]);
}
function Wi(e) {
  return v.useMemo(function() {
    return e.hooks.dragPreview();
  }, [e]);
}
function Qi(e, t) {
  var n = Ea(e, t);
  F(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var a = Ai(), o = Li(n.options, n.previewOptions);
  return Oi(n, a, o), [Da(n.collect, a, o), qi(o), Wi(o)];
}
function Zi(e) {
  var t = e.accept;
  return v.useMemo(function() {
    return F(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t];
  }, [t]);
}
function Ki(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function An(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Xi(e, t, n) {
  return t && An(e.prototype, t), n && An(e, n), e;
}
function Ln(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Yi = /* @__PURE__ */ function() {
  function e(t, n) {
    Ki(this, e), Ln(this, "spec", void 0), Ln(this, "monitor", void 0), this.spec = t, this.monitor = n;
  }
  return Xi(e, [{
    key: "canDrop",
    value: function() {
      var n = this.spec, a = this.monitor;
      return n.canDrop ? n.canDrop(a.getItem(), a) : !0;
    }
  }, {
    key: "hover",
    value: function() {
      var n = this.spec, a = this.monitor;
      n.hover && n.hover(a.getItem(), a);
    }
  }, {
    key: "drop",
    value: function() {
      var n = this.spec, a = this.monitor;
      if (n.drop)
        return n.drop(a.getItem(), a);
    }
  }]), e;
}();
function Ji(e, t) {
  var n = v.useMemo(function() {
    return new Yi(e, t);
  }, [t]);
  return v.useEffect(function() {
    n.spec = e;
  }, [e]), n;
}
function es(e, t) {
  return rs(e) || as(e, t) || ns(e, t) || ts();
}
function ts() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ns(e, t) {
  if (e) {
    if (typeof e == "string")
      return Pn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Pn(e, t);
  }
}
function Pn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function as(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(o = (s = n.next()).done) && (a.push(s.value), !(t && a.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, l = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return a;
  }
}
function rs(e) {
  if (Array.isArray(e))
    return e;
}
function os(e, t, n) {
  var a = _e(), o = Ji(e, t), i = Zi(e);
  Ee(function() {
    var l = pi(i, o, a), c = es(l, 2), m = c[0], p = c[1];
    return t.receiveHandlerId(m), n.receiveHandlerId(m), p;
  }, [a, t, o, n, i.map(function(s) {
    return s.toString();
  }).join("|")]);
}
function is() {
  var e = _e();
  return v.useMemo(function() {
    return new ri(e);
  }, [e]);
}
function ss(e) {
  var t = _e(), n = v.useMemo(function() {
    return new mi(t.getBackend());
  }, [t]);
  return Ee(function() {
    return n.dropTargetOptions = e || null, n.reconnect(), function() {
      return n.disconnectDropTarget();
    };
  }, [e]), n;
}
function ls(e) {
  return v.useMemo(function() {
    return e.hooks.dropTarget();
  }, [e]);
}
function cs(e, t) {
  var n = Ea(e, t), a = is(), o = ss(n.options);
  return os(n, a, o), [Da(n.collect, a, o), ls(o)];
}
function Sa(e) {
  var t = null, n = function() {
    return t == null && (t = e()), t;
  };
  return n;
}
function us(e, t) {
  return e.filter(function(n) {
    return n !== t;
  });
}
function ds(e, t) {
  var n = /* @__PURE__ */ new Set(), a = function(s) {
    return n.add(s);
  };
  e.forEach(a), t.forEach(a);
  var o = [];
  return n.forEach(function(i) {
    return o.push(i);
  }), o;
}
function fs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function ms(e, t, n) {
  return t && Rn(e.prototype, t), n && Rn(e, n), e;
}
function xn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ps = /* @__PURE__ */ function() {
  function e(t) {
    fs(this, e), xn(this, "entered", []), xn(this, "isNodeInDocument", void 0), this.isNodeInDocument = t;
  }
  return ms(e, [{
    key: "enter",
    value: function(n) {
      var a = this, o = this.entered.length, i = function(l) {
        return a.isNodeInDocument(l) && (!l.contains || l.contains(n));
      };
      return this.entered = ds(this.entered.filter(i), [n]), o === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function(n) {
      var a = this.entered.length;
      return this.entered = us(this.entered.filter(this.isNodeInDocument), n), a > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = [];
    }
  }]), e;
}(), gs = Sa(function() {
  return /firefox/i.test(navigator.userAgent);
}), wa = Sa(function() {
  return !!window.safari;
});
function hs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function vs(e, t, n) {
  return t && Mn(e.prototype, t), n && Mn(e, n), e;
}
function Le(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $n = /* @__PURE__ */ function() {
  function e(t, n) {
    hs(this, e), Le(this, "xs", void 0), Le(this, "ys", void 0), Le(this, "c1s", void 0), Le(this, "c2s", void 0), Le(this, "c3s", void 0);
    for (var a = t.length, o = [], i = 0; i < a; i++)
      o.push(i);
    o.sort(function(S, T) {
      return t[S] < t[T] ? -1 : 1;
    });
    for (var s = [], l = [], c, m, p = 0; p < a - 1; p++)
      c = t[p + 1] - t[p], m = n[p + 1] - n[p], s.push(c), l.push(m / c);
    for (var u = [l[0]], E = 0; E < s.length - 1; E++) {
      var h = l[E], O = l[E + 1];
      if (h * O <= 0)
        u.push(0);
      else {
        c = s[E];
        var I = s[E + 1], g = c + I;
        u.push(3 * g / ((g + I) / h + (g + c) / O));
      }
    }
    u.push(l[l.length - 1]);
    for (var D = [], d = [], f, w = 0; w < u.length - 1; w++) {
      f = l[w];
      var y = u[w], b = 1 / s[w], C = y + u[w + 1] - f - f;
      D.push((f - y - C) * b), d.push(C * b * b);
    }
    this.xs = t, this.ys = n, this.c1s = u, this.c2s = D, this.c3s = d;
  }
  return vs(e, [{
    key: "interpolate",
    value: function(n) {
      var a = this.xs, o = this.ys, i = this.c1s, s = this.c2s, l = this.c3s, c = a.length - 1;
      if (n === a[c])
        return o[c];
      for (var m = 0, p = l.length - 1, u; m <= p; ) {
        u = Math.floor(0.5 * (m + p));
        var E = a[u];
        if (E < n)
          m = u + 1;
        else if (E > n)
          p = u - 1;
        else
          return o[u];
      }
      c = Math.max(0, p);
      var h = n - a[c], O = h * h;
      return o[c] + i[c] * h + s[c] * O + l[c] * h * O;
    }
  }]), e;
}(), ys = 1;
function Ta(e) {
  var t = e.nodeType === ys ? e : e.parentElement;
  if (!t)
    return null;
  var n = t.getBoundingClientRect(), a = n.top, o = n.left;
  return {
    x: o,
    y: a
  };
}
function $e(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function bs(e) {
  var t;
  return e.nodeName === "IMG" && (gs() || !((t = document.documentElement) !== null && t !== void 0 && t.contains(e)));
}
function Es(e, t, n, a) {
  var o = e ? t.width : n, i = e ? t.height : a;
  return wa() && e && (i /= window.devicePixelRatio, o /= window.devicePixelRatio), {
    dragPreviewWidth: o,
    dragPreviewHeight: i
  };
}
function Ds(e, t, n, a, o) {
  var i = bs(t), s = i ? e : t, l = Ta(s), c = {
    x: n.x - l.x,
    y: n.y - l.y
  }, m = e.offsetWidth, p = e.offsetHeight, u = a.anchorX, E = a.anchorY, h = Es(i, t, m, p), O = h.dragPreviewWidth, I = h.dragPreviewHeight, g = function() {
    var C = new $n([0, 0.5, 1], [
      // Dock to the top
      c.y,
      // Align at the center
      c.y / p * I,
      // Dock to the bottom
      c.y + I - p
    ]), S = C.interpolate(E);
    return wa() && i && (S += (window.devicePixelRatio - 1) * I), S;
  }, D = function() {
    var C = new $n([0, 0.5, 1], [
      // Dock to the left
      c.x,
      // Align at the center
      c.x / m * O,
      // Dock to the right
      c.x + O - m
    ]);
    return C.interpolate(u);
  }, d = o.offsetX, f = o.offsetY, w = d === 0 || d, y = f === 0 || f;
  return {
    x: w ? d : D(),
    y: y ? f : g()
  };
}
var Ca = "__NATIVE_FILE__", Oa = "__NATIVE_URL__", Ia = "__NATIVE_TEXT__", _a = "__NATIVE_HTML__";
const Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: Ca,
  HTML: _a,
  TEXT: Ia,
  URL: Oa
}, Symbol.toStringTag, { value: "Module" }));
function dt(e, t, n) {
  var a = t.reduce(function(o, i) {
    return o || e.getData(i);
  }, "");
  return a ?? n;
}
var Ce;
function Be(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Dt = (Ce = {}, Be(Ce, Ca, {
  exposeProperties: {
    files: function(t) {
      return Array.prototype.slice.call(t.files);
    },
    items: function(t) {
      return t.items;
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Files"]
}), Be(Ce, _a, {
  exposeProperties: {
    html: function(t, n) {
      return dt(t, n, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), Be(Ce, Oa, {
  exposeProperties: {
    urls: function(t, n) {
      return dt(t, n, "").split(`
`);
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), Be(Ce, Ia, {
  exposeProperties: {
    text: function(t, n) {
      return dt(t, n, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), Ce);
function Ss(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function ws(e, t, n) {
  return t && Vn(e.prototype, t), n && Vn(e, n), e;
}
function Un(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ts = /* @__PURE__ */ function() {
  function e(t) {
    Ss(this, e), Un(this, "item", void 0), Un(this, "config", void 0), this.config = t, this.item = {}, this.initializeExposedProperties();
  }
  return ws(e, [{
    key: "initializeExposedProperties",
    value: function() {
      var n = this;
      Object.keys(this.config.exposeProperties).forEach(function(a) {
        Object.defineProperty(n.item, a, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return console.warn(`Browser doesn't allow reading "`.concat(a, '" until the drop event.')), null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function(n) {
      var a = this;
      if (n) {
        var o = {};
        Object.keys(this.config.exposeProperties).forEach(function(i) {
          o[i] = {
            value: a.config.exposeProperties[i](n, a.config.matchesTypes),
            configurable: !0,
            enumerable: !0
          };
        }), Object.defineProperties(this.item, o);
      }
    }
  }, {
    key: "canDrag",
    value: function() {
      return !0;
    }
  }, {
    key: "beginDrag",
    value: function() {
      return this.item;
    }
  }, {
    key: "isDragging",
    value: function(n, a) {
      return a === n.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
    }
  }]), e;
}();
function Cs(e, t) {
  var n = new Ts(Dt[e]);
  return n.loadDataTransfer(t), n;
}
function ft(e) {
  if (!e)
    return null;
  var t = Array.prototype.slice.call(e.types || []);
  return Object.keys(Dt).filter(function(n) {
    var a = Dt[n].matchesTypes;
    return a.some(function(o) {
      return t.indexOf(o) > -1;
    });
  })[0] || null;
}
function Os(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Is(e, t, n) {
  return t && zn(e.prototype, t), n && zn(e, n), e;
}
function mt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _s = /* @__PURE__ */ function() {
  function e(t, n) {
    Os(this, e), mt(this, "ownerDocument", null), mt(this, "globalContext", void 0), mt(this, "optionsArgs", void 0), this.globalContext = t, this.optionsArgs = n;
  }
  return Is(e, [{
    key: "window",
    get: function() {
      if (this.globalContext)
        return this.globalContext;
      if (typeof window < "u")
        return window;
    }
  }, {
    key: "document",
    get: function() {
      var n;
      return (n = this.globalContext) !== null && n !== void 0 && n.document ? this.globalContext.document : this.window ? this.window.document : void 0;
    }
  }, {
    key: "rootElement",
    get: function() {
      var n;
      return ((n = this.optionsArgs) === null || n === void 0 ? void 0 : n.rootElement) || this.window;
    }
  }]), e;
}();
function Hn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function jn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hn(Object(n), !0).forEach(function(a) {
      x(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hn(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function ks(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Ns(e, t, n) {
  return t && Gn(e.prototype, t), n && Gn(e, n), e;
}
function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Fs = /* @__PURE__ */ function() {
  function e(t, n, a) {
    var o = this;
    ks(this, e), x(this, "options", void 0), x(this, "actions", void 0), x(this, "monitor", void 0), x(this, "registry", void 0), x(this, "enterLeaveCounter", void 0), x(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), x(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), x(this, "sourceNodes", /* @__PURE__ */ new Map()), x(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), x(this, "dragStartSourceIds", null), x(this, "dropTargetIds", []), x(this, "dragEnterTargetIds", []), x(this, "currentNativeSource", null), x(this, "currentNativeHandle", null), x(this, "currentDragSourceNode", null), x(this, "altKeyPressed", !1), x(this, "mouseMoveTimeoutTimer", null), x(this, "asyncEndDragFrameId", null), x(this, "dragOverTargetIds", null), x(this, "lastClientOffset", null), x(this, "hoverRafId", null), x(this, "getSourceClientOffset", function(i) {
      var s = o.sourceNodes.get(i);
      return s && Ta(s) || null;
    }), x(this, "endDragNativeItem", function() {
      o.isDraggingNativeItem() && (o.actions.endDrag(), o.currentNativeHandle && o.registry.removeSource(o.currentNativeHandle), o.currentNativeHandle = null, o.currentNativeSource = null);
    }), x(this, "isNodeInDocument", function(i) {
      return !!(i && o.document && o.document.body && o.document.body.contains(i));
    }), x(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var i = o.currentDragSourceNode;
      i == null || o.isNodeInDocument(i) || o.clearCurrentDragSourceNode() && o.monitor.isDragging() && o.actions.endDrag();
    }), x(this, "handleTopDragStartCapture", function() {
      o.clearCurrentDragSourceNode(), o.dragStartSourceIds = [];
    }), x(this, "handleTopDragStart", function(i) {
      if (!i.defaultPrevented) {
        var s = o.dragStartSourceIds;
        o.dragStartSourceIds = null;
        var l = $e(i);
        o.monitor.isDragging() && o.actions.endDrag(), o.actions.beginDrag(s || [], {
          publishSource: !1,
          getSourceClientOffset: o.getSourceClientOffset,
          clientOffset: l
        });
        var c = i.dataTransfer, m = ft(c);
        if (o.monitor.isDragging()) {
          if (c && typeof c.setDragImage == "function") {
            var p = o.monitor.getSourceId(), u = o.sourceNodes.get(p), E = o.sourcePreviewNodes.get(p) || u;
            if (E) {
              var h = o.getCurrentSourcePreviewNodeOptions(), O = h.anchorX, I = h.anchorY, g = h.offsetX, D = h.offsetY, d = {
                anchorX: O,
                anchorY: I
              }, f = {
                offsetX: g,
                offsetY: D
              }, w = Ds(u, E, l, d, f);
              c.setDragImage(E, w.x, w.y);
            }
          }
          try {
            c == null || c.setData("application/json", {});
          } catch {
          }
          o.setCurrentDragSourceNode(i.target);
          var y = o.getCurrentSourcePreviewNodeOptions(), b = y.captureDraggingState;
          b ? o.actions.publishDragSource() : setTimeout(function() {
            return o.actions.publishDragSource();
          }, 0);
        } else if (m)
          o.beginDragNativeItem(m);
        else {
          if (c && !c.types && (i.target && !i.target.hasAttribute || !i.target.hasAttribute("draggable")))
            return;
          i.preventDefault();
        }
      }
    }), x(this, "handleTopDragEndCapture", function() {
      o.clearCurrentDragSourceNode() && o.monitor.isDragging() && o.actions.endDrag();
    }), x(this, "handleTopDragEnterCapture", function(i) {
      o.dragEnterTargetIds = [];
      var s = o.enterLeaveCounter.enter(i.target);
      if (!(!s || o.monitor.isDragging())) {
        var l = i.dataTransfer, c = ft(l);
        c && o.beginDragNativeItem(c, l);
      }
    }), x(this, "handleTopDragEnter", function(i) {
      var s = o.dragEnterTargetIds;
      if (o.dragEnterTargetIds = [], !!o.monitor.isDragging()) {
        o.altKeyPressed = i.altKey, s.length > 0 && o.actions.hover(s, {
          clientOffset: $e(i)
        });
        var l = s.some(function(c) {
          return o.monitor.canDropOnTarget(c);
        });
        l && (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = o.getCurrentDropEffect()));
      }
    }), x(this, "handleTopDragOverCapture", function() {
      o.dragOverTargetIds = [];
    }), x(this, "handleTopDragOver", function(i) {
      var s = o.dragOverTargetIds;
      if (o.dragOverTargetIds = [], !o.monitor.isDragging()) {
        i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none");
        return;
      }
      o.altKeyPressed = i.altKey, o.lastClientOffset = $e(i), o.hoverRafId === null && typeof requestAnimationFrame < "u" && (o.hoverRafId = requestAnimationFrame(function() {
        o.monitor.isDragging() && o.actions.hover(s || [], {
          clientOffset: o.lastClientOffset
        }), o.hoverRafId = null;
      }));
      var l = (s || []).some(function(c) {
        return o.monitor.canDropOnTarget(c);
      });
      l ? (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = o.getCurrentDropEffect())) : o.isDraggingNativeItem() ? i.preventDefault() : (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none"));
    }), x(this, "handleTopDragLeaveCapture", function(i) {
      o.isDraggingNativeItem() && i.preventDefault();
      var s = o.enterLeaveCounter.leave(i.target);
      s && o.isDraggingNativeItem() && setTimeout(function() {
        return o.endDragNativeItem();
      }, 0);
    }), x(this, "handleTopDropCapture", function(i) {
      if (o.dropTargetIds = [], o.isDraggingNativeItem()) {
        var s;
        i.preventDefault(), (s = o.currentNativeSource) === null || s === void 0 || s.loadDataTransfer(i.dataTransfer);
      } else
        ft(i.dataTransfer) && i.preventDefault();
      o.enterLeaveCounter.reset();
    }), x(this, "handleTopDrop", function(i) {
      var s = o.dropTargetIds;
      o.dropTargetIds = [], o.actions.hover(s, {
        clientOffset: $e(i)
      }), o.actions.drop({
        dropEffect: o.getCurrentDropEffect()
      }), o.isDraggingNativeItem() ? o.endDragNativeItem() : o.monitor.isDragging() && o.actions.endDrag();
    }), x(this, "handleSelectStart", function(i) {
      var s = i.target;
      typeof s.dragDrop == "function" && (s.tagName === "INPUT" || s.tagName === "SELECT" || s.tagName === "TEXTAREA" || s.isContentEditable || (i.preventDefault(), s.dragDrop()));
    }), this.options = new _s(n, a), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new ps(this.isNodeInDocument);
  }
  return Ns(e, [{
    key: "profile",
    value: function() {
      var n, a;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((n = this.dragStartSourceIds) === null || n === void 0 ? void 0 : n.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((a = this.dragOverTargetIds) === null || a === void 0 ? void 0 : a.length) || 0
      };
    }
    // public for test
  }, {
    key: "window",
    get: function() {
      return this.options.window;
    }
  }, {
    key: "document",
    get: function() {
      return this.options.document;
    }
    /**
     * Get the root element to use for event subscriptions
     */
  }, {
    key: "rootElement",
    get: function() {
      return this.options.rootElement;
    }
  }, {
    key: "setup",
    value: function() {
      var n = this.rootElement;
      if (n !== void 0) {
        if (n.__isReactDndBackendSetUp)
          throw new Error("Cannot have two HTML5 backends at the same time.");
        n.__isReactDndBackendSetUp = !0, this.addEventListeners(n);
      }
    }
  }, {
    key: "teardown",
    value: function() {
      var n = this.rootElement;
      if (n !== void 0 && (n.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
        var a;
        (a = this.window) === null || a === void 0 || a.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function(n, a, o) {
      var i = this;
      return this.sourcePreviewNodeOptions.set(n, o), this.sourcePreviewNodes.set(n, a), function() {
        i.sourcePreviewNodes.delete(n), i.sourcePreviewNodeOptions.delete(n);
      };
    }
  }, {
    key: "connectDragSource",
    value: function(n, a, o) {
      var i = this;
      this.sourceNodes.set(n, a), this.sourceNodeOptions.set(n, o);
      var s = function(m) {
        return i.handleDragStart(m, n);
      }, l = function(m) {
        return i.handleSelectStart(m);
      };
      return a.setAttribute("draggable", "true"), a.addEventListener("dragstart", s), a.addEventListener("selectstart", l), function() {
        i.sourceNodes.delete(n), i.sourceNodeOptions.delete(n), a.removeEventListener("dragstart", s), a.removeEventListener("selectstart", l), a.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function(n, a) {
      var o = this, i = function(m) {
        return o.handleDragEnter(m, n);
      }, s = function(m) {
        return o.handleDragOver(m, n);
      }, l = function(m) {
        return o.handleDrop(m, n);
      };
      return a.addEventListener("dragenter", i), a.addEventListener("dragover", s), a.addEventListener("drop", l), function() {
        a.removeEventListener("dragenter", i), a.removeEventListener("dragover", s), a.removeEventListener("drop", l);
      };
    }
  }, {
    key: "addEventListeners",
    value: function(n) {
      n.addEventListener && (n.addEventListener("dragstart", this.handleTopDragStart), n.addEventListener("dragstart", this.handleTopDragStartCapture, !0), n.addEventListener("dragend", this.handleTopDragEndCapture, !0), n.addEventListener("dragenter", this.handleTopDragEnter), n.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), n.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), n.addEventListener("dragover", this.handleTopDragOver), n.addEventListener("dragover", this.handleTopDragOverCapture, !0), n.addEventListener("drop", this.handleTopDrop), n.addEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "removeEventListeners",
    value: function(n) {
      n.removeEventListener && (n.removeEventListener("dragstart", this.handleTopDragStart), n.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), n.removeEventListener("dragend", this.handleTopDragEndCapture, !0), n.removeEventListener("dragenter", this.handleTopDragEnter), n.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), n.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), n.removeEventListener("dragover", this.handleTopDragOver), n.removeEventListener("dragover", this.handleTopDragOverCapture, !0), n.removeEventListener("drop", this.handleTopDrop), n.removeEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function() {
      var n = this.monitor.getSourceId(), a = this.sourceNodeOptions.get(n);
      return jn({
        dropEffect: this.altKeyPressed ? "copy" : "move"
      }, a || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function() {
      return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function() {
      var n = this.monitor.getSourceId(), a = this.sourcePreviewNodeOptions.get(n);
      return jn({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: !1
      }, a || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var n = this.monitor.getItemType();
      return Object.keys(Bn).some(function(a) {
        return Bn[a] === n;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function(n, a) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = Cs(n, a), this.currentNativeHandle = this.registry.addSource(n, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function(n) {
      var a = this;
      this.clearCurrentDragSourceNode(), this.currentDragSourceNode = n;
      var o = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var i;
        return (i = a.rootElement) === null || i === void 0 ? void 0 : i.addEventListener("mousemove", a.endDragIfSourceWasRemovedFromDOM, !0);
      }, o);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function() {
      if (this.currentDragSourceNode) {
        if (this.currentDragSourceNode = null, this.rootElement) {
          var n;
          (n = this.window) === null || n === void 0 || n.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
        }
        return this.mouseMoveTimeoutTimer = null, !0;
      }
      return !1;
    }
  }, {
    key: "handleDragStart",
    value: function(n, a) {
      n.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(a));
    }
  }, {
    key: "handleDragEnter",
    value: function(n, a) {
      this.dragEnterTargetIds.unshift(a);
    }
  }, {
    key: "handleDragOver",
    value: function(n, a) {
      this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(a);
    }
  }, {
    key: "handleDrop",
    value: function(n, a) {
      this.dropTargetIds.unshift(a);
    }
  }]), e;
}(), As = function(t, n, a) {
  return new Fs(t, n, a);
};
const ka = v.createContext({}), pe = () => v.useContext(ka), Ls = ({ children: e }) => {
  var s, l, c;
  const [t, n] = v.useState({}), a = (m, p = !1) => {
    let u = { object: m, show: !0, disableBgClose: p };
    n((E) => ({ ...E, overlay: { ...u } }));
  }, o = (m = !1) => {
    n((p) => ({
      ...p,
      overlay: {
        ...p.overlay,
        show: m
      }
    }));
  }, i = {
    overlay: {
      object: ((s = t.overlay) == null ? void 0 : s.object) || null,
      show: ((l = t.overlay) == null ? void 0 : l.show) || !1,
      disableBgClose: ((c = t.overlay) == null ? void 0 : c.disableBgClose) || !1,
      actions: {
        openOverlay: a,
        toggleOverlay: o
      }
    }
  };
  return /* @__PURE__ */ r.createElement(ka.Provider, { value: i }, e);
}, Ps = "Dashboard Description", Qe = {
  data: {},
  loading: !1,
  filteredData: {},
  preview: !1,
  tabSelected: Ps
}, Rs = {
  outerContainerRef: () => {
  },
  setParentConfig: () => {
  },
  setAPIFilterDropdowns: () => {
  },
  setAPILoading: () => {
  },
  reloadURLData: () => {
  },
  loadAPIFilters: () => Promise.resolve([]),
  isDebug: !1,
  config: {},
  ...Qe
}, ee = v.createContext(Rs), ne = v.createContext(() => {
});
const xs = ({ disableBgClose: e, children: t, override: n = null }) => {
  let { overlay: a } = pe();
  const [o, i] = v.useState(!1), [s, l] = v.useState(null), [c, m] = v.useState(!1), p = n ? n == null ? void 0 : n.show : a == null ? void 0 : a.show;
  return v.useEffect(() => {
    if (p === void 0 || p === !1)
      return;
    document.body.style.overflow = "hidden", i(!0), l("animate-in");
    const u = setTimeout(() => {
      l("show");
    }, 750);
    return () => clearTimeout(u);
  }, [p]), v.useEffect(() => {
    if (p === void 0 || p === !0)
      return;
    l("animate-out");
    const u = setTimeout(() => {
      l(null), i(!1), document.body.style.overflow = null;
    }, 400);
    return () => clearTimeout(u);
  }, [p]), v.useEffect(() => {
    if (c === !1)
      return;
    const u = setTimeout(() => {
      m(!1);
    }, 400);
    return () => clearTimeout(u);
  }, [c]), /* @__PURE__ */ r.createElement(r.Fragment, null, o && /* @__PURE__ */ r.createElement("div", { className: `cove-overlay${s ? " " + s : ""}${c ? " overlay-error" : ""}` }, /* @__PURE__ */ r.createElement("div", { className: "cove-overlay__bg", style: { cursor: e ? "default" : null }, onClick: (u) => e ? m(!0) : a ? a.actions.toggleOverlay(!1) : n ? n.actions.toggleOverlay(!1) : u.preventDefault(), role: "alert" }), /* @__PURE__ */ r.createElement("div", { className: "cove-overlay__wrapper" }, /* @__PURE__ */ r.createElement("div", { className: "cove-overlay__container" }, t))));
}, Ms = () => {
  const { overlay: e } = pe();
  return /* @__PURE__ */ r.createElement(xs, { disableBgClose: e.disableBgClose }, e.object);
}, Na = v.createContext({}), Ve = {
  title: "Filtered Text",
  type: "filtered-text",
  theme: "theme-blue",
  fontSize: "small",
  shadow: !1,
  filters: [],
  visual: {
    hideBackgroundColor: !1,
    background: !1,
    roundedBorders: !1,
    accent: !1,
    border: !1,
    borderColorTheme: !1
  }
}, $s = [
  "theme-blue",
  "theme-purple",
  "theme-brown",
  "theme-teal",
  "theme-pink",
  "theme-orange",
  "theme-slate",
  "theme-indigo",
  "theme-cyan",
  "theme-green",
  "theme-amber"
], Bs = v.memo((e) => {
  const { config: t, updateConfig: n, loading: a, stateData: o, setParentConfig: i, isDashboard: s } = v.useContext(Na), [l, c] = v.useState(!0), [m, p] = v.useState(!1), u = It(t, n, !0), E = (b) => {
    let C = [...t.filters];
    C.splice(b, 1), n({ ...t, filters: C });
  }, h = (b, C, S) => {
    let T = [...t.filters];
    T[C][b] = S, n({ ...t, filters: T });
  }, O = () => {
    let b = t.filters ? [...t.filters] : [];
    b.push({ values: [] }), n({ ...t, filters: b });
  }, I = (b = !0) => {
    let C = {};
    return o.length && o.map((S) => Object.keys(S).forEach((T) => C[T] = !0)), Object.keys(C);
  }, g = (b) => {
    let C = [];
    const S = t.filters[b].columnName;
    return o && S && (o.forEach(function(T) {
      T[S] !== void 0 && C.indexOf(T[S]) === -1 && C.push(T[S]);
    }), C.sort()), C;
  };
  v.useEffect(() => {
    if (i) {
      const b = w();
      i(b);
    }
  }, [t]), v.useEffect(() => {
    if (!m) {
      let b = { ...t };
      delete b.newViz, n(b);
    }
  }, []);
  const D = () => {
    c(!l), n({
      ...t,
      showEditorPanel: !l
    });
  }, d = () => /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ r.createElement("p", null, t.runtime.editorErrorMessage))), f = () => {
    const b = (C) => {
      C.preventDefault();
      let S = { ...t };
      delete S.newViz, n(S);
    };
    return /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ r.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the markup."), /* @__PURE__ */ r.createElement("button", { className: "btn btn-primary", style: { margin: "1em auto" }, onClick: b }, "I'm Done")));
  }, w = () => {
    let b = JSON.parse(JSON.stringify(t));
    return delete b.newViz, delete b.runtime, b;
  }, y = /* @__PURE__ */ r.createElement(Me, null, /* @__PURE__ */ r.createElement(Me.Section, { title: "General" }, /* @__PURE__ */ r.createElement(
    lr,
    {
      value: t.title,
      fieldName: "title",
      label: "Title",
      placeholder: "Filterable Text Title",
      updateField: u
    }
  )), /* @__PURE__ */ r.createElement(Me.Section, { title: "Data" }, /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ r.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ r.createElement(
    ge,
    {
      value: t.textColumn || "",
      fieldName: "textColumn",
      label: "Text Column",
      updateField: u,
      initial: "Select",
      options: I()
    }
  ))), /* @__PURE__ */ r.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ r.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ r.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(L.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(L.Content, null, /* @__PURE__ */ r.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), t.filters && /* @__PURE__ */ r.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, t.filters.map((b, C) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: C }, /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        E(C);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: b.columnName,
      onChange: (S) => {
        h("columnName", C, S.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    I().map((S, T) => /* @__PURE__ */ r.createElement("option", { value: S, key: T }, S))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: b.columnValue,
      onChange: (S) => {
        h("columnValue", C, S.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    g(C).map((S, T) => /* @__PURE__ */ r.createElement("option", { value: S, key: T }, S))
  ))))), /* @__PURE__ */ r.createElement(cr, { onClick: O, fluid: !0 }, "Add Filter")), /* @__PURE__ */ r.createElement(Me.Section, { title: "Visual" }, /* @__PURE__ */ r.createElement(
    ge,
    {
      value: t.fontSize,
      fieldName: "fontSize",
      label: "Font Size",
      updateField: u,
      options: ["small", "medium", "large"]
    }
  ), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Theme"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, $s.map((b) => /* @__PURE__ */ r.createElement(
    "li",
    {
      title: b,
      key: b,
      onClick: () => {
        n({ ...t, theme: b });
      },
      className: t.theme === b ? "selected " + b : b
    }
  )))), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ r.createElement(
    Ne,
    {
      inline: !0,
      size: "small",
      value: t.visual.border,
      section: "visual",
      fieldName: "border",
      label: "Display Border",
      updateField: u
    }
  ), /* @__PURE__ */ r.createElement(
    Ne,
    {
      inline: !0,
      size: "small",
      value: t.visual.borderColorTheme,
      section: "visual",
      fieldName: "borderColorTheme",
      label: "Use theme border color",
      updateField: u
    }
  ), /* @__PURE__ */ r.createElement(
    Ne,
    {
      size: "small",
      value: t.visual.accent,
      section: "visual",
      fieldName: "accent",
      label: "Use Accent Style",
      updateField: u
    }
  ), /* @__PURE__ */ r.createElement(
    Ne,
    {
      size: "small",
      value: t.visual.background,
      section: "visual",
      fieldName: "background",
      label: "Use Theme Background Color",
      updateField: u
    }
  ), /* @__PURE__ */ r.createElement(
    Ne,
    {
      size: "small",
      value: t.visual.hideBackgroundColor,
      section: "visual",
      fieldName: "hideBackgroundColor",
      label: "Hide Background Color",
      updateField: u
    }
  ))));
  return a ? null : /* @__PURE__ */ r.createElement(na, { component: "EditorPanel" }, /* @__PURE__ */ r.createElement(
    ye.Sidebar,
    {
      displayPanel: l,
      isDashboard: s,
      title: "Configure Filtered Text",
      onBackClick: D
    },
    !t.newViz && t.runtime && t.runtime.editorErrorMessage && /* @__PURE__ */ r.createElement(d, null),
    t.newViz && m && /* @__PURE__ */ r.createElement(f, null),
    y
  ));
});
const Fa = ({ config: e, configUrl: t, isDashboard: n = !1, isEditor: a = !1, setConfig: o }) => {
  const i = new Se(), [s, l] = v.useState(Ve), [c, m] = v.useState(!0), [p, u] = v.useState(s.data || []), [E, h] = v.useState();
  let { title: O, filters: I } = s;
  const g = s.fontSize === "small" ? "16px" : s.fontSize === "medium" ? "22px" : "27px", { contentClasses: D, innerContainerClasses: d } = ur(s), f = async () => {
    let S = e || await (await fetch(t)).json(), T = S.formattedData || S.data || {};
    S.dataUrl && (T = await (await fetch(S.dataUrl)).json(), S.dataDescription && (T = i.autoStandardize(T), T = i.developerStandardize(T, S.dataDescription))), T && (u(T), h(T));
    let R = { ...s, ...S };
    const V = { ...ca(R) };
    w(V), m(!1);
  }, w = (S) => {
    Object.keys(Ve).forEach((T) => {
      S[T] && typeof S[T] == "object" && !Array.isArray(S[T]) && (S[T] = { ...Ve[T], ...S[T] });
    }), S.runtime = {}, S.runtime.uniqueId = Date.now(), S.runtime.editorErrorMessage = "", l(S);
  }, y = () => {
    let S = [];
    if (I.length)
      I.map((T) => T.columnName && T.columnValue ? S = p.filter(function(R) {
        return R[T.columnName] === T.columnValue;
      }) : null);
    else
      return S = p.filter((T, R) => T[s.textColumn] && R === 0);
    return S;
  };
  v.useEffect(() => {
    f().catch((S) => console.log(S));
  }, []), v.useEffect(() => {
    e && !e.dataUrl && (w({ ...Ve, ...e }), u(e.data), h(e.data));
  }, [e == null ? void 0 : e.data]);
  let b = /* @__PURE__ */ r.createElement(Ot, null);
  if (c === !1) {
    let S = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ye.Responsive, { isEditor: a }, /* @__PURE__ */ r.createElement("div", { className: "cove-component__content no-borders" }, /* @__PURE__ */ r.createElement(ea, { classes: [`${s.theme}`], title: O, style: { fontSize: g } }), /* @__PURE__ */ r.createElement("div", { className: `${D.join(" ")} body` }, y().slice(0, 1).map((T, R) => /* @__PURE__ */ r.createElement("p", { style: { fontSize: g }, key: R }, " ", ta(T[s.textColumn] || ""), " "))))));
    b = /* @__PURE__ */ r.createElement(r.Fragment, null, a && /* @__PURE__ */ r.createElement(Bs, null), S);
  }
  const C = {
    config: s,
    updateConfig: w,
    loading: c,
    setParentConfig: o,
    isDashboard: n,
    stateData: p,
    unfilteredData: p
  };
  return /* @__PURE__ */ r.createElement(na, { component: "CdcFilteredText" }, /* @__PURE__ */ r.createElement(Na.Provider, { value: C }, /* @__PURE__ */ r.createElement(ye.VisualizationWrapper, { config: s, isEditor: a, showEditorPanel: s == null ? void 0 : s.showEditorPanel }, b)));
}, he = {
  "data-bite": /* @__PURE__ */ r.createElement(P, { display: "databite", base: !0 }),
  Bar: /* @__PURE__ */ r.createElement(P, { display: "chartBar", base: !0 }),
  "Spark Line": /* @__PURE__ */ r.createElement(P, { display: "chartLine" }),
  "Bump Chart": /* @__PURE__ */ r.createElement(P, { display: "chartLine" }),
  "waffle-chart": /* @__PURE__ */ r.createElement(P, { display: "grid", base: !0 }),
  "markup-include": /* @__PURE__ */ r.createElement(P, { display: "code", base: !0 }),
  Line: /* @__PURE__ */ r.createElement(P, { display: "chartLine", base: !0 }),
  Pie: /* @__PURE__ */ r.createElement(P, { display: "chartPie", base: !0 }),
  us: /* @__PURE__ */ r.createElement(P, { display: "mapUsa", base: !0 }),
  "us-county": /* @__PURE__ */ r.createElement(P, { display: "mapUsa", base: !0 }),
  world: /* @__PURE__ */ r.createElement(P, { display: "mapWorld", base: !0 }),
  "single-state": /* @__PURE__ */ r.createElement(P, { display: "mapAl", base: !0 }),
  gear: /* @__PURE__ */ r.createElement(P, { display: "gear", base: !0 }),
  gearMulti: /* @__PURE__ */ r.createElement(P, { display: "gearMulti", base: !0 }),
  tools: /* @__PURE__ */ r.createElement(P, { display: "tools", base: !0 }),
  "filtered-text": /* @__PURE__ */ r.createElement(P, { display: "filtered-text", base: !0 }),
  dashboardFilters: /* @__PURE__ */ r.createElement(P, { display: "dashboardFilters", base: !0 }),
  table: /* @__PURE__ */ r.createElement(P, { display: "table", base: !0 }),
  Sankey: /* @__PURE__ */ r.createElement(P, { display: "sankey", base: !0 })
}, Vs = (e) => {
  const { type: t, visualizationType: n, general: a } = e;
  return n ? he[n] : a != null && a.geoType ? a.geoType === "single-state" ? he.us : he[a.geoType] : he[t];
};
const Aa = () => null, La = (e) => e, Pa = () => null, me = ({ fontTheme: e = "dark", headerBgColor: t = "#fff", showDividerTop: n = !0, showDividerBottom: a = !0, showClose: o = !0, children: i, override: s = null }) => {
  let { overlay: l } = pe();
  const c = v.Children.toArray(i), m = c.find((h) => (h == null ? void 0 : h.type) === Aa), p = c.find((h) => (h == null ? void 0 : h.type) === La), u = c.find((h) => (h == null ? void 0 : h.type) === Pa), E = (h) => h ? null : "none";
  return /* @__PURE__ */ r.createElement("div", { className: `cove-modal cove-modal__theme--${e}` }, (o || m) && /* @__PURE__ */ r.createElement(
    "div",
    {
      className: "cove-modal__header",
      style: {
        backgroundColor: t,
        boxShadow: E(m && n),
        padding: m ? null : "0",
        minHeight: m ? null : "unset"
      }
    },
    m && m.props.children,
    o && /* @__PURE__ */ r.createElement(
      "button",
      {
        className: "cove-modal--close",
        onClick: (h) => {
          if (s)
            return s.actions.toggleOverlay(!1);
          if (l)
            return l == null ? void 0 : l.actions.toggleOverlay(!1);
          h.preventDefault();
        }
      },
      /* @__PURE__ */ r.createElement(P, { display: "close" })
    )
  ), /* @__PURE__ */ r.createElement("div", { className: "cove-modal__content" }, p && p.props.children), u && /* @__PURE__ */ r.createElement(
    "div",
    {
      className: "cove-modal__footer",
      style: {
        boxShadow: E(a),
        paddingTop: a ? "1rem" : null
      }
    },
    u.props.children
  ));
};
me.Header = Aa;
me.Content = La;
me.Footer = Pa;
me.propTypes = {
  fontTheme: Fe.oneOf(["dark", "light"]),
  headerBgColor: Fe.string,
  showDividerTop: Fe.bool,
  showDividerBottom: Fe.bool,
  showClose: Fe.bool
};
const Ra = ({ vizKey: e, rowIndex: t }) => {
  var d;
  const { config: n } = v.useContext(ee), { overlay: a } = pe(), o = new Se(), i = v.useContext(ne), [s, l] = v.useState(!1), [c, m] = v.useState(!e), [p, u] = v.useState(!!n.rows[t].multiVizColumn), E = v.useMemo(() => e && !c ? n.visualizations[e] : n.rows[t], [n.visualizations, n.rows, e, t, c]), h = (f) => {
    i(e && !c ? { type: "UPDATE_VISUALIZATION", payload: { vizKey: e, configureData: f } } : { type: "UPDATE_ROW", payload: { rowIndex: t, rowData: f } });
  }, O = ({ target: { value: f } }) => {
    h({ dataDescription: {}, formattedData: void 0, dataKey: f });
  }, I = async (f, w) => {
    const y = E.dataKey, { data: b, dataUrl: C } = n.datasets[y];
    let S = b;
    !b && C && (S = await xe(C), S = o.autoStandardize(S));
    const T = { ...E.dataDescription, [f]: w }, R = { data: S, dataDescription: T, formattedData: o.developerStandardize(S, T) };
    h(R), l(!0);
  }, g = (f) => {
    f !== "" && (i({ type: "UPDATE_ROW", payload: { rowIndex: t, rowData: { multiVizColumn: f } } }), l(!0));
  }, D = (f) => {
    i({ type: "UPDATE_ROW", payload: { rowIndex: t, rowData: { expandCollapseAllButtons: f } } }), l(!0);
  };
  return /* @__PURE__ */ r.createElement(me, null, /* @__PURE__ */ r.createElement(me.Content, null, /* @__PURE__ */ r.createElement("div", { className: "dataset-selector-container" }, "Select a dataset: ", /* @__PURE__ */ r.createElement("select", { className: "dataset-selector", value: E.dataKey || "", onChange: O }, /* @__PURE__ */ r.createElement("option", { value: "" }, "Select a dataset"), n.datasets && Object.keys(n.datasets).map((f) => /* @__PURE__ */ r.createElement("option", { key: f }, f))), e && /* @__PURE__ */ r.createElement(
    Ue,
    {
      label: "Apply To Row",
      value: c,
      updateField: (f, w, y, b) => {
        m(b), O({ target: { value: "" } });
      }
    }
  )), E.dataKey && /* @__PURE__ */ r.createElement(
    dr,
    {
      configureData: E,
      visualizationKey: e,
      updateDescriptionProp: I
    }
  ), c && E.dataKey ? p ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ge, { options: Object.keys(((d = n.datasets[E.dataKey]) == null ? void 0 : d.data[0]) || {}), value: n.rows[t].multiVizColumn, label: "Multi-Visualization Column", initial: "--Select--", updateField: (f, w, y, b) => g(b), required: !0 }), /* @__PURE__ */ r.createElement(Ue, { value: n.rows[t].expandCollapseAllButtons, label: " Add Expand/Collapse All buttons", fieldName: "", updateField: (f, w, y, b) => D(b) })) : /* @__PURE__ */ r.createElement(
    Ue,
    {
      label: "Configure Multiple Visualizations",
      value: p,
      tooltip: /* @__PURE__ */ r.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(L.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(L.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can select a column where for each unique value in the column the configuration for the row will be repeated in to the data preview."))),
      updateField: (f, w, y, b) => {
        s && b === !0 && l(!1), u(b);
      }
    }
  ) : /* @__PURE__ */ r.createElement(r.Fragment, null), s && /* @__PURE__ */ r.createElement("button", { style: { margin: "1em", display: "block" }, className: "cove-button", onClick: () => a == null ? void 0 : a.actions.toggleOverlay() }, "Continue")));
}, Us = {
  "data-bite": "Data Bite",
  "waffle-chart": "Waffle Chart",
  "markup-include": "Markup Include",
  Bar: "Bar",
  Line: "Line",
  "Spark Line": "Spark Line",
  "Bump Chart": "Bump Chart",
  Pie: "Pie",
  us: "United States (State- or County-Level)",
  "us-county": "United States (State- or County-Level)",
  world: "World",
  "single-state": "U.S. State",
  "filtered-text": "Filtered Text",
  dashboardFilters: "Filter Dropdowns",
  Sankey: "Sankey Chart",
  table: "Table"
}, Y = ({ title: e, widgetConfig: t, addVisualization: n, type: a }) => {
  var w;
  const { overlay: o } = pe(), { config: i, data: s } = v.useContext(ee), l = v.useContext(ne), c = new Se(), m = (y, b) => {
    let C = b.getDropResult();
    if (!C)
      return null;
    const { rowIdx: S, colIdx: T } = C;
    if ((t == null ? void 0 : t.rowIdx) !== void 0)
      l({ type: "MOVE_VISUALIZATION", payload: { rowIdx: S, colIdx: T, widget: t } });
    else if (n) {
      const R = n();
      l({ type: "ADD_VISUALIZATION", payload: { newViz: R, rowIdx: S, colIdx: T } });
    }
  }, [{ isDragging: p, ...u }, E] = Qi(
    {
      type: "vis-widget",
      end: m,
      collect: (y) => ({
        isDragging: y.isDragging()
      })
    },
    [i.activeDashboard, i.rows, i.dashboard.sharedFilters]
  ), h = () => {
    t && l({
      type: "DELETE_WIDGET",
      payload: { uid: t.uid }
    });
  }, O = (y, b) => {
    const C = new URL(y);
    return C.searchParams.set("$limit", b), C.href.replace(/%24/g, "$");
  }, I = () => {
    var S;
    const y = ((S = i.rows[t.rowIdx]) == null ? void 0 : S.dataKey) || (t == null ? void 0 : t.dataKey), b = i.datasets[y], C = s[b == null ? void 0 : b.dataUrl];
    if (C && !C.length) {
      const T = O(b.dataUrl, 100);
      xe(T).then((R) => {
        R.sample = !0, l({ type: "SET_DATA", payload: { ...s, [y]: R } });
      });
    }
  }, g = () => {
    t && (l({
      type: "UPDATE_VISUALIZATION",
      payload: { vizKey: t.uid, configureData: { editing: !0 } }
    }), I());
  };
  let D = !1;
  const d = !!((w = i.rows[t == null ? void 0 : t.rowIdx]) != null && w.dataKey);
  if (d || ["dashboardFilters", "markup-include"].includes(a))
    D = !0;
  else if (t != null && t.formattedData)
    D = !0;
  else if (t != null && t.dataKey && (t != null && t.dataDescription) && i.datasets[t.dataKey]) {
    const y = c.autoStandardize(i.datasets[t.dataKey].data);
    !!c.developerStandardize(y, t.dataDescription) && (D = !0);
  }
  const f = !d && (t == null ? void 0 : t.type) !== "dashboardFilters";
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "widget", ref: E, style: { opacity: p ? 0.5 : 1 }, ...u }, /* @__PURE__ */ r.createElement(P, { display: "move", className: "drag-icon" }), /* @__PURE__ */ r.createElement("div", { className: "widget__content" }, (t == null ? void 0 : t.rowIdx) !== void 0 && /* @__PURE__ */ r.createElement("div", { className: "widget-menu" }, D && /* @__PURE__ */ r.createElement("button", { title: "Configure Visualization", className: "btn btn-configure", onClick: g }, he.tools), f && /* @__PURE__ */ r.createElement(
    "button",
    {
      title: "Configure Data",
      className: "btn btn-configure",
      onClick: () => {
        o == null || o.actions.openOverlay(
          /* @__PURE__ */ r.createElement(Ra, { rowIndex: t.rowIdx, vizKey: t.uid })
        );
      }
    },
    he.gear
  ), /* @__PURE__ */ r.createElement("div", { className: "widget-menu-item", onClick: h }, /* @__PURE__ */ r.createElement(P, { display: "close", base: !0 }))), he[a], /* @__PURE__ */ r.createElement("span", null, Us[a]), /* @__PURE__ */ r.createElement("span", null, e), (t == null ? void 0 : t.newViz) && a !== "dashboardFilters" && /* @__PURE__ */ r.createElement("span", { onClick: g, className: "config-needed" }, "Configuration needed"))));
}, zs = ({ data: e, rowIdx: t, colIdx: n }) => {
  var p;
  const { config: a } = v.useContext(ee), [{ isOver: o, canDrop: i }, s] = cs(
    () => ({
      accept: "vis-widget",
      drop: () => ({
        rowIdx: t,
        colIdx: n,
        canDrop: i
      }),
      canDrop: () => !e.widget,
      collect: (u) => ({
        isOver: u.isOver(),
        canDrop: !!u.canDrop()
      })
    }),
    [a.activeDashboard]
  ), l = e.widget ? a == null ? void 0 : a.visualizations[e.widget] : null;
  l && !l.uid && (l.uid = e.widget);
  let c = ["builder-column", "column-size--" + e.width];
  o && i && c.push("column--drop"), l && c.push("column--populated");
  const m = (u) => {
    var E;
    if (u)
      return u.type === "map" ? u.general.title : u.type === "markup-include" ? (E = u.contentEditor) == null ? void 0 : E.title : u.title;
  };
  return /* @__PURE__ */ r.createElement("div", { className: c.join(" "), ref: s }, l ? /* @__PURE__ */ r.createElement(
    Y,
    {
      title: m(l),
      widgetConfig: { rowIdx: t, colIdx: n, ...l },
      type: l.visualizationType ?? ((p = l.general) == null ? void 0 : p.geoType)
    }
  ) : /* @__PURE__ */ r.createElement("p", { className: "builder-column__text" }, "Drag and drop ", /* @__PURE__ */ r.createElement("br", null), " visualization"));
}, Hs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M2,16 L22,16 L22,14 L2,14 L2,16 Z M2,11 L22,11 L22,9 L2,9 L2,11 Z M2,4 L2,6 L22,6 L22,4 L2,4 Z" })), js = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22 14L22 16 13 16 13 14 22 14zM11 16L2 16 2 14 11 14 11 16zM22 4L22 6 13 6 13 4 22 4zM11 6L2 6 2 4 11 4 11 6zM22 9L22 11 13 11 13 9 22 9zM11 11L2 11 2 9 11 9 11 11z" })), Gs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22,14 L22,16 L17,16 L17,14 L22,14 Z M7,14 L7,16 L2,16 L2,14 L7,14 Z M15,14 L15,16 L9,16 L9,14 L15,14 Z M22,9 L22,11 L17,11 L17,9 L22,9 Z M7,9 L7,11 L2,11 L2,9 L7,9 Z M15,9 L15,11 L9,11 L9,9 L15,9 Z M22,4 L22,6 L17,6 L17,4 L22,4 Z M7,4 L7,6 L2,6 L2,4 L7,4 Z M15,4 L15,6 L9,6 L9,4 L15,4 Z" })), qs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22,14 L22,16 L10,16 L10,14 L22,14 Z M8,14 L8,16 L2,16 L2,14 L8,14 Z M22,9 L22,11 L10,11 L10,9 L22,9 Z M8,9 L8,11 L2,11 L2,9 L8,9 Z M22,4 L22,6 L10,6 L10,4 L22,4 Z M8,4 L8,6 L2,6 L2,4 L8,4 Z" })), Ws = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22,14 L22,16 L16,16 L16,14 L22,14 Z M14,14 L14,16 L2,16 L2,14 L14,14 Z M22,9 L22,11 L16,11 L16,9 L22,9 Z M14,9 L14,11 L2,11 L2,9 L14,9 Z M22,4 L22,6 L16,6 L16,4 L22,4 Z M14,4 L14,6 L2,6 L2,4 L14,4 Z" })), Qs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" })), Zs = ({ rowIdx: e }) => {
  const { config: t } = v.useContext(ee), n = v.useContext(ne), a = N.cloneDeep(t.rows), o = t.rows[e], i = (u) => n({ type: "UPDATE_CONFIG", payload: [u] }), s = v.useMemo(() => o.toggle ? "toggle" : o.columns.reduce((u, E) => (E.width && (u += E.width), u), ""), [o]), l = (u, E = void 0) => {
    const h = N.cloneDeep(a);
    h[e].toggle = E;
    const O = h[e].columns, I = O.filter((D) => D.widget);
    if (!(I.length > u.length)) {
      {
        const D = O.length > u.length ? I : O;
        h[e].columns = u.map((d, f) => {
          const w = D[f];
          return w ? { ...w, width: d } : { width: d };
        });
      }
      i({ ...t, rows: h });
    }
  }, c = (u = "down") => {
    if (e === a.length - 1 && u === "down")
      return;
    let E = u === "down" ? e + 1 : e - 1;
    const h = a[E];
    a[E] = o, a[e] = h, a[E].uuid = Date.now(), a[e].uuid = Date.now(), i({ ...t, rows: a });
    let O = u === "down" ? 202 : -202, I = u === "down" ? -202 : 202, g = document.querySelector("[data-row-id='" + e + "']"), D = document.querySelector("[data-row-id='" + E + "']");
    g.style.pointerEvents = "none", D.style.pointerEvents = "none", g.style.top = O + "px", D.style.top = I + "px", setTimeout(() => {
      g.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", D.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", g.style.top = "0", D.style.top = "0";
    }, 0), setTimeout(() => {
      g.setAttribute("style", ""), D.setAttribute("style", "");
    }, 500);
  }, m = () => {
    let u = { ...t.visualizations };
    a[e] && a[e].columns && a[e].columns.length && t.visualizations && a[e].columns.forEach((E) => {
      E.widget && delete u[E.widget];
    }), a.splice(e, 1), i({ ...t, rows: a, visualizations: u });
  }, p = [
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: s === "12" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => l([12]),
        key: "12",
        title: "1 Column"
      },
      /* @__PURE__ */ r.createElement(Hs, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: s === "66" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => l([6, 6]),
        key: "66",
        title: "2 Columns"
      },
      /* @__PURE__ */ r.createElement(js, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: s === "444" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => l([4, 4, 4]),
        key: "444",
        title: "3 Columns"
      },
      /* @__PURE__ */ r.createElement(Gs, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: s === "48" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => l([4, 8]),
        key: "48",
        title: "2 Columns"
      },
      /* @__PURE__ */ r.createElement(qs, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: s === "84" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => l([8, 4]),
        key: "84",
        title: "2 Columns"
      },
      /* @__PURE__ */ r.createElement(Ws, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: s === "toggle" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => l([12, 12, 12], !0),
        key: "toggle",
        title: "Toggle between up to three visualizations"
      },
      /* @__PURE__ */ r.createElement(Qs, null)
    )
  ];
  return /* @__PURE__ */ r.createElement("nav", { className: "row-menu" }, /* @__PURE__ */ r.createElement("ul", { className: "row-menu__flyout" }, p), /* @__PURE__ */ r.createElement("div", { className: "spacer" }), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-primary row-menu__btn border-0",
      title: "Move Row Up",
      onClick: () => c("up"),
      disabled: e === 0
    },
    /* @__PURE__ */ r.createElement(P, { display: "caretUp", color: "#fff", size: 25 })
  ), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-primary row-menu__btn border-0",
      title: "Move Row Down",
      onClick: () => c("down"),
      disabled: e + 1 === a.length
    },
    /* @__PURE__ */ r.createElement(P, { display: "caretDown", color: "#fff", size: 25 })
  ), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-danger row-menu__btn row-menu__btn--remove border-0",
      title: "Delete Row",
      onClick: m,
      disabled: e === 0 && a.length === 1
    },
    /* @__PURE__ */ r.createElement(P, { display: "close", color: "#fff", size: 25 })
  ));
}, Ks = ({ row: e, idx: t, uuid: n }) => {
  const { overlay: a } = pe(), o = v.useContext(ne), i = () => {
    if (e.footnotesId)
      o({ type: "UPDATE_VISUALIZATION", payload: { vizKey: e.footnotesId, configureData: { editing: !0 } } });
    else {
      const s = "footnotes", l = s + Date.now();
      o({
        type: "ADD_FOOTNOTE",
        payload: { id: l, rowIndex: t, config: {
          uid: l,
          type: s,
          visualizationType: s,
          editing: !0
        } }
      });
    }
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "builder-row", "data-row-id": t }, /* @__PURE__ */ r.createElement(Zs, { rowIdx: t }), /* @__PURE__ */ r.createElement(
    "button",
    {
      title: "Configure Data",
      className: "btn btn-configure-row",
      onClick: () => {
        a == null || a.actions.openOverlay(/* @__PURE__ */ r.createElement(Ra, { rowIndex: t }));
      }
    },
    he.gearMulti
  ), /* @__PURE__ */ r.createElement("div", { className: "column-container" }, e.columns.filter((s) => s.width).map((s, l) => /* @__PURE__ */ r.createElement(zs, { data: s, key: `row-${n}-col-${l}`, rowIdx: t, colIdx: l }))), /* @__PURE__ */ r.createElement("button", { className: "btn btn-primary footnotes", onClick: i }, e.footnotesId ? "Edit" : "Add", " Footnotes")));
}, Xs = () => {
  const { config: e } = v.useContext(ee);
  if (!e)
    return null;
  const t = e.rows, n = v.useContext(ne), a = (i) => n({ type: "UPDATE_CONFIG", payload: [i] }), o = () => {
    const i = { columns: [{ width: 12 }] };
    a({
      ...e,
      rows: [...t, i],
      uuid: Date.now()
    });
  };
  return /* @__PURE__ */ r.createElement("div", { className: "builder-grid" }, (t || []).map((i, s) => /* @__PURE__ */ r.createElement(Ks, { row: i, idx: s, uuid: i.uuid, key: s })), /* @__PURE__ */ r.createElement("button", { className: "btn btn-primary col", onClick: o }, "Add Row"));
};
const Ys = (e) => /* @__PURE__ */ r.createElement(me, null, /* @__PURE__ */ r.createElement(me.Content, null, /* @__PURE__ */ r.createElement("p", null, "Are you sure you want to delete this dashboard? "), /* @__PURE__ */ r.createElement("button", { className: "btn btn-danger", onClick: e }, "DELETE"))), Js = ({ name: e, handleClick: t, tabs: n, index: a, active: o }) => {
  const [i, s] = v.useState(!1), l = v.useContext(ne), { overlay: c } = pe(), m = v.createRef(), p = (g) => {
    g.stopPropagation();
    const D = m.current.value, d = D === e, f = !D, w = n.includes(D);
    !d && !f && !w && l({ type: "RENAME_DASHBOARD_TAB", payload: { current: e, new: D } }), s(!1);
  }, u = (g) => {
    g.target.className !== "remove" && (o ? s(!0) : t());
  }, E = () => {
    const g = () => {
      l({ type: "REMOVE_MULTIDASHBOARD_AT_INDEX", payload: a }), c == null || c.actions.toggleOverlay(!1);
    };
    c == null || c.actions.openOverlay(Ys(g));
  }, h = (g, D) => {
    const d = g + D;
    d > -1 && d <= n.length - 1 && l({ type: "REORDER_MULTIDASHBOARDS", payload: { currentIndex: g, newIndex: g + D } });
  }, O = a !== 0, I = a <= n.length - 2;
  return /* @__PURE__ */ r.createElement("li", { className: "nav-item d-flex mt-0" }, O && i && /* @__PURE__ */ r.createElement("button", { className: "border-0", onClick: () => h(a, -1) }, "<"), /* @__PURE__ */ r.createElement(
    "div",
    {
      className: `edit nav-link${o ? " active" : ""}`,
      "aria-current": o ? "page" : null,
      onClick: u
    },
    i ? /* @__PURE__ */ r.createElement("div", { className: "d-flex" }, /* @__PURE__ */ r.createElement("input", { type: "text", defaultValue: e, onBlur: p, ref: m }), /* @__PURE__ */ r.createElement("button", { className: "btn btn-link save", onClick: p }, "save")) : /* @__PURE__ */ r.createElement(r.Fragment, null, e, /* @__PURE__ */ r.createElement("button", { className: "btn btn-danger border-0 ms-1", onClick: E }, "X"))
  ), I && i && /* @__PURE__ */ r.createElement("button", { className: "border-0", onClick: () => h(a, 1) }, ">"));
}, el = () => {
  const { config: e } = v.useContext(ee), t = v.useContext(ne), n = v.useMemo(
    () => (e.multiDashboards || []).map(({ label: i }) => i),
    [e.multiDashboards]
  ), a = v.useMemo(() => e.activeDashboard, [e.activeDashboard]), o = (i) => {
    t({ type: "SAVE_CURRENT_CHANGES" }), t({ type: "SWITCH_CONFIG", payload: i });
  };
  return e.multiDashboards ? /* @__PURE__ */ r.createElement("ul", { className: "nav nav-tabs multi-config-tabs mb-4" }, n.map((i, s) => /* @__PURE__ */ r.createElement(
    Js,
    {
      key: i + s,
      name: i,
      tabs: n,
      index: s,
      handleClick: () => o(s),
      active: s === a
    }
  )), /* @__PURE__ */ r.createElement("li", { className: "nav-item" }, /* @__PURE__ */ r.createElement("button", { className: "nav-link add", onClick: () => t({ type: "ADD_NEW_DASHBOARD" }) }, "+"))) : null;
}, tl = () => {
  const { config: e } = v.useContext(ee), t = v.useContext(ne), n = v.useMemo(
    () => (e.multiDashboards || []).map(({ label: i }) => i),
    [e.multiDashboards]
  ), a = v.useMemo(() => e.activeDashboard, [e.activeDashboard]), o = (i, s) => {
    s.preventDefault(), t({ type: "SWITCH_CONFIG", payload: i }), mr("cove-tab", i);
  };
  return e.multiDashboards ? /* @__PURE__ */ r.createElement("ul", { className: "nav nav-tabs multi-config-tabs mb-4" }, n.map((i, s) => /* @__PURE__ */ r.createElement("li", { key: i + s, className: "nav-item" }, /* @__PURE__ */ r.createElement(
    "a",
    {
      className: `nav-link${a === s ? " active" : ""}`,
      "aria-current": a === s ? "page" : null,
      href: "#",
      onClick: (l) => o(s, l)
    },
    i
  )))) : null;
}, xa = ({ isEditor: e = !1 }) => e ? /* @__PURE__ */ r.createElement(el, null) : /* @__PURE__ */ r.createElement(tl, null), se = (e) => {
  var O, I;
  const t = ["Dashboard Description", "Data Table Settings", "Dashboard Preview"], { visualizationKey: n, subEditor: a } = e, { config: o, setParentConfig: i, tabSelected: s, data: l } = v.useContext(ee);
  if (!o)
    return null;
  const c = v.useContext(ne), m = () => {
    if (!n)
      return;
    const g = N.cloneDeep(o);
    if (g.visualizations[n].editing = !1, c({ type: "SET_CONFIG", payload: g }), Object.values(l).some((D) => D == null ? void 0 : D.sample)) {
      const D = Object.keys(l).reduce((d, f) => (l[f].sample ? d[f] = [] : d[f] = l[f], d), {});
      c({ type: "SET_DATA", payload: D });
    }
  }, p = (g, D, d) => {
    let f = { ...o };
    f[g] || (f[g] = {}), f[g][D] = d, c({ type: "UPDATE_CONFIG", payload: [f] });
  }, u = (g = "JSON") => {
    let D = JSON.parse(JSON.stringify(o));
    return delete D.newViz, delete D.runtime, g === "JSON" ? JSON.stringify(D) : D;
  };
  v.useEffect(() => {
    const g = u(), D = new CustomEvent("updateVizConfig", { detail: g });
    if (window.dispatchEvent(D), i) {
      const d = u("object");
      i(d);
    }
  }, [o]);
  const E = (g) => {
    const { checked: D } = g.currentTarget;
    D && c({ type: "INITIALIZE_MULTIDASHBOARDS" });
  }, h = !!o.multiDashboards;
  return /* @__PURE__ */ r.createElement("div", { "aria-level": 2, role: "heading", className: `editor-heading${a ? " sub-dashboard-viz" : ""}` }, a ? /* @__PURE__ */ r.createElement("div", { className: "heading-1 back-to", onClick: m, style: { cursor: "pointer" } }, /* @__PURE__ */ r.createElement("span", null, "←"), " Back to Dashboard") : /* @__PURE__ */ r.createElement("div", { className: "heading-1" }, "Dashboard Editor", " ", /* @__PURE__ */ r.createElement("span", { className: "small" }, /* @__PURE__ */ r.createElement("input", { type: "checkbox", onChange: E, checked: h, disabled: h }), " make multidashboard"), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      placeholder: "Enter Dashboard Name Here",
      defaultValue: (O = o.dashboard) == null ? void 0 : O.title,
      onChange: (g) => p("dashboard", "title", g.target.value)
    }
  )), !a && /* @__PURE__ */ r.createElement("div", { className: "toggle-bar__wrapper" }, /* @__PURE__ */ r.createElement(xa, { isEditor: !0 }), /* @__PURE__ */ r.createElement("ul", { className: "toggle-bar" }, t.map((g) => /* @__PURE__ */ r.createElement(
    "li",
    {
      key: g,
      className: s === g ? "active" : "inactive",
      onClick: () => {
        c({ type: "SET_TAB_SELECTED", payload: g });
      }
    },
    g
  ))), /* @__PURE__ */ r.createElement("div", { className: "heading-body" }, s === "Dashboard Description" && /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      className: "description-input",
      placeholder: "Type a dashboard description here.",
      defaultValue: (I = o.dashboard) == null ? void 0 : I.description,
      onChange: (g) => p("dashboard", "description", g.target.value)
    }
  ), s === "Data Table Settings" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "wrap" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.show,
      onChange: (g) => p("table", "show", g.target.checked)
    }
  ), "Show Data Table(s)"), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.expanded,
      onChange: (g) => p("table", "expanded", g.target.checked)
    }
  ), "Expanded by Default"), /* @__PURE__ */ r.createElement("br", null)), /* @__PURE__ */ r.createElement("div", { className: "wrap" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.limitHeight,
      onChange: (g) => p("table", "limitHeight", g.target.checked)
    }
  ), "Limit Table Height"), o.table.limitHeight && /* @__PURE__ */ r.createElement(
    "input",
    {
      className: "table-height-input",
      type: "text",
      placeholder: "Height (px)",
      defaultValue: o.table.height,
      onChange: (g) => p("table", "height", g.target.value)
    }
  )), /* @__PURE__ */ r.createElement("div", { className: "wrap" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.download,
      onChange: (g) => p("table", "download", g.target.checked)
    }
  ), "Show Download CSV Link"), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.showDownloadUrl,
      onChange: (g) => p("table", "showDownloadUrl", g.target.checked)
    }
  ), "Show URL to Automatically Updated Data"))))));
};
const qn = new Se(), De = (e, t) => {
  if (e && t)
    try {
      let n = qn.autoStandardize(e);
      return n = qn.developerStandardize(e, t), n;
    } catch {
      return e;
    }
  return e;
}, nl = (e) => {
  Object.keys(e.visualizations).forEach((t, n) => {
    const a = e.visualizations[t];
    if (a.dataKey && !a.data) {
      const o = e.datasets[a.dataKey].data;
      e.visualizations[t].data = o, e.visualizations[t].formattedData = De(o, a.dataDescription);
    }
  });
}, al = (e) => {
  e.rows.forEach((t, n) => {
    if (t.dataKey && !t.data) {
      const a = e.datasets[t.dataKey].data;
      e.rows[n].data = a, e.rows[n].formattedData = De(a, t.dataDescription);
    }
  });
}, rl = (e) => (nl(e), al(e), e);
const te = (e, t) => {
  const a = {
    filters: [],
    filterBehavior: "Filter Change",
    newViz: e !== "table",
    openModal: e !== "markup-include",
    uid: e + Date.now(),
    type: e
  };
  switch (e) {
    case "chart":
      a.visualizationType = t;
      break;
    case "map":
      a.general = {}, a.general.geoType = t;
      break;
    case "data-bite":
      a.visualizationType = e;
      break;
    case "table":
      const o = {
        label: "Data Table",
        show: !0,
        showDownloadUrl: !1,
        showVertical: !0,
        expanded: !0,
        collapsible: !0
      };
      a.table = o, a.columns = {}, a.dataFormat = {}, a.visualizationType = e;
      break;
    case "markup-include":
      a.contentEditor = {
        inlineHTML: "<h2>Inline HTML</h2>",
        markupVariables: [],
        showHeader: !0,
        srcUrl: "#example",
        title: "Markup Include",
        useInlineHTML: !0
      }, a.theme = "theme-blue", a.visual = {
        border: !1,
        accent: !1,
        background: !1,
        hideBackgroundColor: !1,
        borderColorTheme: !1
      }, a.showEditorPanel = !0, a.visualizationType = e;
      break;
    case "dashboardFilters": {
      a.sharedFilterIndexes = [], a.visualizationType = e;
      break;
    }
    default:
      a.visualizationType = e;
      break;
  }
  return a;
}, ol = () => {
  const [e, t] = v.useState(!1), { config: n } = v.useContext(ee), a = v.useContext(ne), o = (i) => {
    const s = i.multiDashboards ? {
      ...n,
      ...i,
      ...i.multiDashboards[n.activeDashboard],
      activeDashboard: n.activeDashboard
    } : i;
    a({ type: "APPLY_CONFIG", payload: [rl(s)] });
  };
  return /* @__PURE__ */ r.createElement("div", { className: `visualizations-panel${e ? " advanced-editor" : ""}` }, /* @__PURE__ */ r.createElement("p", { style: { fontSize: "14px" } }, "Click and drag an item onto the grid to add it to your dashboard."), /* @__PURE__ */ r.createElement("span", { className: "subheading-3" }, "Chart"), /* @__PURE__ */ r.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ r.createElement(Y, { addVisualization: () => te("chart", "Bar"), type: "Bar" }), /* @__PURE__ */ r.createElement(Y, { addVisualization: () => te("chart", "Line"), type: "Line" }), /* @__PURE__ */ r.createElement(Y, { addVisualization: () => te("chart", "Pie"), type: "Pie" }), /* @__PURE__ */ r.createElement(Y, { addVisualization: () => te("chart", "Sankey"), type: "Sankey" })), /* @__PURE__ */ r.createElement("span", { className: "subheading-3" }, "Map"), /* @__PURE__ */ r.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ r.createElement(Y, { addVisualization: () => te("map", "us"), type: "us" }), /* @__PURE__ */ r.createElement(Y, { addVisualization: () => te("map", "world"), type: "world" }), /* @__PURE__ */ r.createElement(Y, { addVisualization: () => te("map", "single-state"), type: "single-state" })), /* @__PURE__ */ r.createElement("span", { className: "subheading-3" }, "Misc."), /* @__PURE__ */ r.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ r.createElement(Y, { addVisualization: () => te("data-bite", ""), type: "data-bite" }), /* @__PURE__ */ r.createElement(Y, { addVisualization: () => te("waffle-chart", ""), type: "waffle-chart" }), /* @__PURE__ */ r.createElement(Y, { addVisualization: () => te("markup-include", ""), type: "markup-include" }), /* @__PURE__ */ r.createElement(Y, { addVisualization: () => te("filtered-text", ""), type: "filtered-text" }), /* @__PURE__ */ r.createElement(Y, { addVisualization: () => te("dashboardFilters", ""), type: "dashboardFilters" }), /* @__PURE__ */ r.createElement(Y, { addVisualization: () => te("table", ""), type: "table" })), /* @__PURE__ */ r.createElement(
    Za,
    {
      loadConfig: o,
      config: n,
      convertStateToConfig: () => {
      },
      onExpandCollapse: () => {
        t(!e);
      }
    }
  ));
}, Ma = (e, t) => {
  var n;
  if ((n = t.parents) != null && n.length) {
    const a = e.find((o) => t.parents.includes(o.key));
    return a ? 1 + Ma(e, a) : 1;
  } else
    return 1;
};
function il(e) {
  let t = 1;
  return e.forEach((n) => {
    n.tier = Ma(e, n), n.tier > t && (t = n.tier);
  }), t;
}
function Wn(e = [], t, n) {
  const a = N.filter(t, (o) => {
    var i;
    return o.resetLabel === o.active ? (i = o.values) == null ? void 0 : i.includes(o.resetLabel) : !0;
  });
  return e.filter((o) => !a.find((s) => {
    var u;
    const l = o[s.columnName], c = s.queuedActive || s.filterStyle === oe.nestedDropdown ? [s.active, (u = s.subGrouping) == null ? void 0 : u.active] : s.active;
    let m = !0;
    if (Array.isArray(c) ? m = !c.includes(l) : m = c && l != c, s.filterStyle === "nested-dropdown" && s.subGrouping && s.active === l && m === !1) {
      const E = s.subGrouping.active, h = o[s.subGrouping.columnName];
      m = E && h !== E;
    }
    const p = s.tier === n;
    if (s.type !== "urlfilter" && p && m)
      return !0;
  }));
}
const Ie = (e, t) => {
  const n = il(e);
  for (let a = 0; a < n; a++) {
    const o = a === n - 1, i = Wn(t, e, a + 1);
    if (o)
      return Wn(i, e, n - 1);
  }
}, sl = (e, t) => {
  const n = [];
  return Object.keys(t).forEach((a) => {
    var o;
    (o = t[a]) == null || o.forEach((i) => {
      const s = i[e];
      s && !n.includes(s) && n.push(s);
    });
  }), n;
}, be = (e) => Object.keys((e == null ? void 0 : e.visualizations) || {}), Rt = (e) => e.reduce((t, n, a) => {
  var o;
  return (o = n.columns) == null || o.forEach((i, s) => {
    i.widget !== void 0 && (t[i.widget] = { row: a, column: s });
  }), n.footnotesId && (t[n.footnotesId] = { row: a, column: 0 }), t;
}, {}), St = (e) => (t, n) => {
  let a = {}, o = be(t);
  const i = Rt(t.rows);
  return t.dashboard.sharedFilters && (t.dashboard.sharedFilters.forEach((s, l) => {
    const c = !!o.find((E) => E === s.setBy), m = t.dashboard.sharedFilters[l], p = (E) => {
      if (m.values = E, E.length > 0) {
        const h = m.pivot ? m.values : m.values[0], O = ua(m);
        O ? m.active = O : m.active = m.active || h;
      }
    }, u = sl(s.columnName, n || e.data);
    c ? (m.order === "asc" && u.sort(), m.order === "desc" && u.sort().reverse(), p(u)) : (!s.values || s.values.length === 0) && s.showDropdown && p(u);
  }), o.forEach((s) => {
    var m;
    const l = i[s];
    if ((m = t.rows[l]) != null && m.datakey)
      return;
    const c = t.dashboard.sharedFilters.filter((p) => p.usedBy && p.usedBy.indexOf(s) !== -1);
    if (c.length > 0) {
      const p = t.visualizations[s], u = t.datasets[p.dataKey], h = De((u == null ? void 0 : u.data) || p.data, p.dataDescription) || (n || e.data)[p.dataKey];
      a[s] = Ie(c, h);
    }
  }), t.rows.forEach((s, l) => {
    const c = t.dashboard.sharedFilters.filter((m) => m.usedBy && m.usedBy.indexOf(l) !== -1);
    if (c.length > 0) {
      const p = De(s.data, s.dataDescription) || (n || e.data)[l];
      a[l] = Ie(c, p);
    }
  })), t.runtime = {}, [t, a];
}, $a = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__, ll = $a ? window.__REDUX_DEVTOOLS_EXTENSION__.connect() : null, pt = $a ? ll : null, Ba = (e) => (t, n) => {
  const a = e(t, n);
  return pt == null || pt.send(n, a), a;
}, cl = () => ({
  dashboard: { sharedFilters: [] },
  rows: [{ columns: [{ width: 12 }] }],
  visualizations: {},
  table: {
    label: "Data Table",
    show: !1,
    showDownloadUrl: !1,
    showVertical: !0
  }
}), ul = (e, t) => {
  switch (t.type) {
    case "ADD_FOOTNOTE": {
      const { id: n, rowIndex: a, config: o } = t.payload, i = e.config.rows.map((s, l) => l === a ? { ...s, footnotesId: n } : s);
      return {
        ...e,
        config: le(
          { ...e.config, rows: i, visualizations: { ...e.config.visualizations, [n]: o } },
          e.config.activeDashboard
        )
      };
    }
    case "ADD_NEW_DASHBOARD": {
      const n = e.config.multiDashboards, a = "New Dashboard " + (n.length + 1), o = [...n, { ...cl(), label: a }];
      return Pe(e, o);
    }
    case "UPDATE_CONFIG": {
      const [n, a] = St(e)(...t.payload);
      return { ...e, config: le(n, e.config.activeDashboard), filteredData: a };
    }
    case "APPLY_CONFIG": {
      const [n, a] = St(e)(...t.payload), o = [...Object.values(n.visualizations), ...n.rows].map((i) => i.dataKey).reduce((i, s) => {
        var c;
        const l = e.data[s] || ((c = e.config.datasets[s]) == null ? void 0 : c.data);
        return l && (i[s] = l), i;
      }, {});
      return { ...Qe, config: le(n, e.config.activeDashboard), filteredData: a, data: o };
    }
    case "SET_CONFIG":
      return t.payload.activeDashboard === void 0 || e.config.activeDashboard === t.payload.activeDashboard ? {
        ...e,
        config: le({ ...e.config, ...t.payload }, t.payload.activeDashboard)
      } : e;
    case "SET_DATA":
      return { ...e, data: t.payload };
    case "SET_FILTERED_DATA":
      return { ...e, filteredData: t.payload };
    case "SET_LOADING":
      return { ...e, loading: t.payload };
    case "SET_PREVIEW":
      return { ...e, preview: t.payload };
    case "SET_SHARED_FILTERS": {
      const n = t.payload, a = { ...e.config.dashboard, sharedFilters: n };
      return {
        ...e,
        config: le({ ...e.config, dashboard: a }, e.config.activeDashboard)
      };
    }
    case "SET_TAB_SELECTED":
      return { ...e, tabSelected: t.payload };
    case "REMOVE_MULTIDASHBOARD_AT_INDEX": {
      const n = [...e.config.multiDashboards];
      N.remove(n, (o, i) => i === t.payload);
      const a = {
        ...e.config,
        multiDashboards: n,
        ...n[0],
        activeDashboard: 0
      };
      return n.length === 0 ? { ...e, config: N.omit(e.config, "multiDashboards") } : Pe({ ...e, config: a }, n);
    }
    case "RENAME_DASHBOARD_TAB": {
      const n = e.config.multiDashboards.map((o) => (o.label === t.payload.current && (o.label = t.payload.new), o)), a = { ...e.config, label: t.payload.new };
      return Pe({ ...e, newConfig: a }, n);
    }
    case "REORDER_MULTIDASHBOARDS": {
      const { newIndex: n, currentIndex: a } = t.payload, o = [...e.config.multiDashboards];
      o.splice(n, 0, o.splice(a, 1)[0]);
      const i = { ...e.config, activeDashboard: n };
      return Pe({ ...e, config: i }, o);
    }
    case "SAVE_CURRENT_CHANGES": {
      const n = e.config.activeDashboard, a = [...e.config.multiDashboards], o = a[n].label, i = N.pick(e.config, ["dashboard", "visualizations", "rows"]);
      a[n] = { ...i, label: o };
      const s = le(e.config, n);
      return { ...e, config: s };
    }
    case "INITIALIZE_MULTIDASHBOARDS": {
      const n = "New Dashboard 1", o = [{ ...N.pick(e.config, ["dashboard", "visualizations", "rows"]), label: n }], i = { ...e.config, activeDashboard: 0 };
      return Pe({ ...e, config: i }, o);
    }
    case "SWITCH_CONFIG": {
      const n = t.payload, a = e.config.multiDashboards[n], o = N.cloneDeep(e.data);
      return { ...e, data: o, config: { ...e.config, ...a, activeDashboard: n } };
    }
    case "TOGGLE_ROW": {
      const { rowIndex: n, colIndex: a } = t.payload, o = e.config.rows.map((i, s) => {
        if (s === n) {
          const l = i.columns.map((c, m) => ({ ...c, hide: m === a }));
          return { ...i, columns: l };
        }
        return i;
      });
      return { ...e, config: { ...e.config, rows: o } };
    }
    case "ADD_VISUALIZATION": {
      const { newViz: n, rowIdx: a, colIdx: o } = t.payload, i = n.uid, s = N.cloneDeep(e.config.rows);
      return s[a].columns[o].widget = i, {
        ...e,
        config: le(
          { ...e.config, visualizations: { ...e.config.visualizations, [i]: n }, rows: s },
          e.config.activeDashboard
        )
      };
    }
    case "MOVE_VISUALIZATION": {
      const { rowIdx: n, colIdx: a, widget: o } = t.payload, i = N.cloneDeep(e.config.rows);
      return i[o.rowIdx].columns[o.colIdx].widget = null, i[n].columns[a].widget = o.uid, {
        ...e,
        config: le({ ...e.config, rows: i }, e.config.activeDashboard)
      };
    }
    case "UPDATE_VISUALIZATION": {
      const { vizKey: n, configureData: a } = t.payload, o = { ...e.config.visualizations[n], ...a };
      return {
        ...e,
        config: le(
          { ...e.config, visualizations: { ...e.config.visualizations, [n]: o } },
          e.config.activeDashboard
        )
      };
    }
    case "UPDATE_ROW": {
      const { rowIndex: n, rowData: a } = t.payload, o = e.config.rows.map((i, s) => s === n ? { ...i, ...a } : i);
      return { ...e, config: le({ ...e.config, rows: o }, e.config.activeDashboard) };
    }
    case "DELETE_WIDGET": {
      const { uid: n } = t.payload, a = N.cloneDeep(e.config.rows), o = N.cloneDeep(e.config.visualizations);
      delete o[n];
      const i = N.cloneDeep(e.config.dashboard.sharedFilters);
      i && i.length > 0 && i.forEach((l) => {
        l.usedBy && l.usedBy.indexOf(n) !== -1 && l.usedBy.splice(l.usedBy.indexOf(n), 1);
      });
      const s = N.map(a, (l) => ({
        ...l,
        columns: N.filter(l.columns, (c) => c.widget !== n)
      }));
      return {
        ...e,
        config: le(
          {
            ...e.config,
            dashboard: { ...e.config.dashboard, sharedFilters: i },
            visualizations: o,
            rows: s
          },
          e.config.activeDashboard
        )
      };
    }
    default:
      return e;
  }
}, le = (e, t) => {
  if (t === void 0)
    return e;
  const n = [...e.multiDashboards], a = n[t].label, o = N.pick(e, ["dashboard", "visualizations", "rows"]);
  return n[t] = { ...o, label: a }, { ...e, multiDashboards: n };
}, Pe = (e, t) => ({
  ...e,
  config: { ...e.config, multiDashboards: t }
}), dl = Ba(ul), fl = (e, t) => {
  switch (t.type) {
    case "ADD_ERROR_MESSAGE": {
      const n = t.payload;
      return [...e, n];
    }
    case "DISMISS_ERROR_MESSAGE": {
      const n = [...e];
      return N.remove(n, (a, o) => o === t.payload), n;
    }
  }
}, ml = Ba(fl);
const Va = ({ children: e, visualizationKey: t, visualizationConfig: n, type: a, component: o, updateConfig: i, viewport: s }) => {
  const [l, c] = r.useState(!0);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "editor-wrapper" }, /* @__PURE__ */ r.createElement("button", { className: `editor-toggle ${l ? "" : "collapsed"}`, title: l ? "Collapse Editor" : "Expand Editor", onClick: () => c(!l) }), /* @__PURE__ */ r.createElement("section", { className: `${l ? "" : "hidden"} editor-panel cove` }, /* @__PURE__ */ r.createElement("div", { "aria-level": 2, role: "heading", className: "heading-2" }, "Configure ", a), /* @__PURE__ */ r.createElement("section", null, e)), /* @__PURE__ */ r.createElement("div", { className: "preview-wrapper" }, /* @__PURE__ */ r.createElement(o, { visualizationKey: t, config: n, updateConfig: i, configUrl: void 0, setEditing: void 0, hostname: void 0, viewport: s }))));
}, pl = ({ config: e, updateConfig: t }) => {
  var i;
  const n = v.useMemo(() => It(e, t), [JSON.stringify(e)]), a = (s) => {
    const l = N.cloneDeep(e.columns);
    delete l[s], t({
      ...e,
      columns: l
    });
  }, o = Object.keys(((i = e.originalFormattedData) == null ? void 0 : i[0]) || {});
  return /* @__PURE__ */ r.createElement(sr, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(nt, null, /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(rt, null, "Filters")), /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(Ka, { config: e, updateField: n, rawData: e.originalFormattedData }))), /* @__PURE__ */ r.createElement(nt, null, /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(rt, null, "Columns")), /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(nr, { config: e, updateField: n, deleteColumn: a }))), /* @__PURE__ */ r.createElement(nt, null, /* @__PURE__ */ r.createElement(at, null, /* @__PURE__ */ r.createElement(rt, null, "Data Table")), /* @__PURE__ */ r.createElement(ot, null, /* @__PURE__ */ r.createElement(ar, { config: e, columns: o, updateField: n, isDashboard: !0 }))));
}, xt = ({
  visualizationKey: e,
  config: t,
  updateConfig: n,
  viewport: a,
  isEditor: o
}) => {
  const [i, s] = v.useState(
    Jt(t.filters, t.formattedData || t.data)
  );
  return v.useEffect(() => {
    var c;
    const l = pr(t.filters, t.data);
    s(Jt(l, ((c = t == null ? void 0 : t.formattedData) == null ? void 0 : c.length) > 0 ? t.formattedData : t.data));
  }, [t.filters]), o ? /* @__PURE__ */ r.createElement(
    Va,
    {
      component: xt,
      visualizationKey: e,
      visualizationConfig: t,
      updateConfig: n,
      type: "Table",
      viewport: a
    },
    /* @__PURE__ */ r.createElement(pl, { key: e, config: t, updateConfig: n })
  ) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    gr,
    {
      config: t,
      setConfig: n,
      setFilteredData: s,
      filteredData: i,
      excludedData: t.formattedData
    }
  ), /* @__PURE__ */ r.createElement(
    gt,
    {
      expandDataTable: t.table.expanded,
      config: t,
      rawData: t.data,
      runtimeData: i,
      tabbingId: e,
      tableTitle: t.table.label,
      viewport: a || "lg"
    }
  ));
};
const gl = ({ active: e, row: t, visualizations: n, setToggled: a }) => {
  const o = (i, s = null) => {
    s != null && s.key && s.key !== "Enter" || a(i);
  };
  return /* @__PURE__ */ r.createElement("div", { className: "toggle-component" }, t.columns.map((i, s) => {
    if (!i.widget)
      return null;
    const l = n[i.widget].type, c = s === e;
    return /* @__PURE__ */ r.createElement("div", { role: "radio", className: c ? "selected" : "", key: s, onClick: () => o(s), onKeyUp: (m) => o(s, m), "aria-checked": c, tabIndex: 0, "aria-label": `Toggle ${l}` }, Vs(n[i.widget]), " ", /* @__PURE__ */ r.createElement("span", null, N.capitalize(l)));
  }));
}, Ua = {
  Apply: "Apply Button",
  OnChange: "Filter Change"
}, Qn = (e, t) => {
  const n = e[t].key, a = e.map((o, i) => {
    var s;
    return (s = o.parents) != null && s.includes(n) ? i : null;
  }).filter((o) => o !== null);
  return a.length && a.forEach((o) => {
    e[o].active = "", e[o].subGrouping && (e[o].subGrouping.active = "");
  }), a;
}, hl = (e, t, n, a) => {
  const o = N.cloneDeep(n), i = o[e];
  if (a.filterBehavior !== Ua.Apply || a.autoLoad)
    if ((i == null ? void 0 : i.filterStyle) === oe.nestedDropdown)
      o[e].active = t[0], o[e].subGrouping.active = t[1];
    else {
      o[e].active = t, Qn(o, e);
      const s = _t();
      i.setByQueryParameter && s[i.setByQueryParameter] !== i.active && (s[i.setByQueryParameter] = i.active, da(s));
    }
  else
    o[e].queuedActive = t;
  return [o, Qn(o, e)];
}, wt = (e, t) => {
  var a;
  const n = (a = e.sharedFilters) == null ? void 0 : a.filter((o) => o.usedBy && o.usedBy.indexOf(`${t}`) !== -1);
  return (n == null ? void 0 : n.length) > 0 ? n : !1;
}, Re = (e, t, n) => {
  const a = t || {}, { config: o } = e;
  return be(o).forEach((i) => {
    const s = wt(o.dashboard, i);
    if (s) {
      const { dataKey: l, data: c, dataDescription: m } = o.visualizations[i], p = (n || e.data)[l] || c, u = (n == null ? void 0 : n[l]) || (m ? De(p, m) : p);
      a[i] = Ie(s, u);
    }
  }), o.rows.forEach((i, s) => {
    if (i.dataKey) {
      const l = wt(o.dashboard, s), { dataKey: c, data: m, dataDescription: p } = i, u = (n || e.data)[c] || m;
      if (l) {
        const E = (n == null ? void 0 : n[c]) ?? p ? De(u, p) : u;
        a[s] = Ie(l, E);
      } else
        a[s] = u || [];
    }
  }), a;
}, Ze = (e) => Object.values(e).some((t) => t.filterBehavior === "Apply Button" && t.type === "dashboardFilters"), vl = ({
  filter: e,
  config: t,
  isDashboard: n = !1,
  updateFilterProp: a
}) => {
  const o = e == null ? void 0 : e.subGrouping, i = Object.keys(t.datasets), s = [];
  i.map((u) => {
    Object.keys(t.datasets[u].data[0]).forEach(
      (h) => s.push({
        datasetKey: u,
        columnName: h
      })
    );
  });
  const l = [], c = (u, E) => {
    s.forEach((h) => {
      h.datasetKey === u && h.columnName !== E && l.push(h.columnName);
    });
  }, m = (u) => {
    const E = u.selectedOptions[0].dataset.set, h = u.value;
    a("columnName", h), c(E, h);
  }, p = (u) => {
    const E = u.selectedOptions[0].dataset.set, h = u.value, O = e.values.reduce((g, D) => {
      const d = N.uniq(
        t.datasets[E].data.map((f) => f[e.columnName] === D ? f[h] : "").filter((f) => f !== "")
      ).sort();
      return g[D] = {
        values: d,
        orderedValues: d
      }, g;
    }, {}), I = {
      ...o,
      columnName: h,
      valuesLookup: O
    };
    a("subGrouping", I);
  };
  return /* @__PURE__ */ r.createElement("div", { className: "nesteddropdown-editor" }, !n && /* @__PURE__ */ r.createElement(
    J,
    {
      label: "Label",
      value: e.key,
      updateField: (u, E, h, O) => a("key", O)
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter Grouping", /* @__PURE__ */ r.createElement("span", null)), /* @__PURE__ */ r.createElement("select", { value: e.columnName, onChange: (u) => m(u.target) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"), s == null ? void 0 : s.map((u) => /* @__PURE__ */ r.createElement(
    "option",
    {
      value: u.columnName,
      "data-set": u.datasetKey,
      key: `filter_${u.datasetKey}_${u.columnName} `
    },
    u.columnName
  )))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter SubGrouping", /* @__PURE__ */ r.createElement("span", null)), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: (o == null ? void 0 : o.columnName) ?? "",
      onChange: (u) => {
        p(u.target);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    s.map((u) => {
      if (u.columnName !== e.columnName)
        return /* @__PURE__ */ r.createElement(
          "option",
          {
            value: u.columnName,
            "data-set": u.datasetKey,
            key: `subFilter_${u.datasetKey}_${u.columnName} `
          },
          u.columnName
        );
    })
  )));
}, yl = ({ filter: e, filterIndex: t, config: n, updateFilterProp: a }) => {
  const [o, i] = v.useState([]), s = new Se(), l = Object.values(oe), c = (n.dashboard.sharedFilters || []).filter(({ key: d, type: f }) => d !== e.key && f !== "datafilter").map(({ key: d }) => d), m = Rt(n.rows), [p, u] = v.useMemo(() => {
    const d = {}, f = Object.keys(n.visualizations).filter((b) => {
      var B;
      const C = m[b];
      if (!C)
        return !1;
      const S = n.visualizations[b];
      if (S.type === "dashboardFilters")
        return !1;
      const T = ((B = S.general) == null ? void 0 : B.title) || S.title || b;
      d[b] = T;
      const R = S.usesSharedFilter, V = C.row, G = n.rows[V].dataKey;
      return e.setBy !== b && !R && !G;
    }), w = [];
    n.rows.forEach((b, C) => {
      b.dataKey && (d[C] = `Row ${C + 1}`, w.push(C));
    });
    const y = w.filter((b) => !e.usedBy || e.usedBy.indexOf(b.toString()) === -1);
    return [d, [...f, ...y]];
  }, [n.visualizations, e.usedBy, e.setBy, m]), E = async () => {
    const d = {}, f = Object.keys(n.datasets);
    for (let w = 0; w < f.length; w++) {
      const y = f[w];
      let b = n.datasets[y];
      if (!b.data && b.dataUrl && (b = await xe(b.dataUrl), b.dataDescription))
        try {
          b = s.autoStandardize(b.data), b = s.developerStandardize(b.data, b.dataDescription);
        } catch {
        }
      b.data && b.data.forEach((C) => {
        Object.keys(C).forEach((S) => {
          d[S] = !0;
        });
      });
    }
    i(Object.keys(d));
  };
  v.useEffect(() => {
    E();
  }, [n.datasets]);
  const h = (d, f) => {
    const b = { ...N.cloneDeep(e).apiFilter || { apiEndpoint: "", valueSelector: "", textSelector: "" }, [d]: f };
    a("apiFilter", b);
  }, O = (d) => {
    a("filterStyle", d);
  }, I = (d) => {
    const f = n.dashboard.sharedFilters.filter(
      (w, y) => w.key === d && t !== y
    );
    a("key", f.length ? d + ` (${f.length})` : d);
  }, g = e.filterStyle === oe.nestedDropdown, D = ({ isSubgroup: d = !1 }) => {
    var y, b, C;
    const f = d ? "subgroupTextSelector" : "textSelector", w = d ? "subgroupValueSelector" : "valueSelector";
    return /* @__PURE__ */ r.createElement(r.Fragment, null, !d && /* @__PURE__ */ r.createElement(
      J,
      {
        label: "API Endpoint: ",
        type: "textarea",
        value: (y = e.apiFilter) == null ? void 0 : y.apiEndpoint,
        updateField: (S, T, R, V) => h("apiEndpoint", V),
        tooltip: /* @__PURE__ */ r.createElement(r.Fragment, null, g && /* @__PURE__ */ r.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(L.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(L.Content, null, /* @__PURE__ */ r.createElement("p", null, "Your API Endpoint should return both value selector values."))))
      }
    ), /* @__PURE__ */ r.createElement("div", { className: g ? "border border-dark p-1 my-1" : "" }, /* @__PURE__ */ r.createElement(
      J,
      {
        label: `${d ? "Subgroup " : ""}Value Selector:`,
        value: ((b = e == null ? void 0 : e.apiFilter) == null ? void 0 : b[w]) || "",
        updateField: (S, T, R, V) => h(w, V),
        tooltip: /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(L.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(L.Content, null, /* @__PURE__ */ r.createElement("p", null, "Value to use in the html option element"))), " * Required")
      }
    ), /* @__PURE__ */ r.createElement(
      J,
      {
        label: `${d ? "Subgroup " : ""}Display Text Selector:`,
        value: ((C = e == null ? void 0 : e.apiFilter) == null ? void 0 : C[f]) || "",
        updateField: (S, T, R, V) => h(f, V),
        tooltip: /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(L.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(L.Content, null, /* @__PURE__ */ r.createElement("p", null, "Text to use in the html option element. If none is applied value selector will be used."))), " * Optional")
      }
    )));
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter Type: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.type || "",
      onChange: (d) => a("type", d.target.value),
      disabled: !!e.type
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    /* @__PURE__ */ r.createElement("option", { value: "urlfilter" }, "URL"),
    /* @__PURE__ */ r.createElement("option", { value: "datafilter" }, "Data")
  )), e.type !== void 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter Style: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.filterStyle || oe.dropdown,
      onChange: (d) => O(d.target.value)
    },
    l.map((d) => /* @__PURE__ */ r.createElement("option", { value: d, key: `filter-style-select-item-${d}` }, d))
  )), e.filterStyle === oe.dropdown && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "me-1" }, "Show Dropdown"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.showDropdown,
      onChange: (d) => {
        a("showDropdown", !e.showDropdown);
      }
    }
  )), /* @__PURE__ */ r.createElement(
    J,
    {
      label: "Label",
      value: e.key,
      updateField: (d, f, w, y) => {
        I(y);
      }
    }
  ), e.filterStyle === oe.multiSelect && /* @__PURE__ */ r.createElement(
    J,
    {
      label: "Select Limit",
      value: e.selectLimit,
      updateField: (d, f, w, y) => a("selectLimit", y),
      type: "number",
      tooltip: /* @__PURE__ */ r.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(L.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(L.Content, null, /* @__PURE__ */ r.createElement("p", null, "The maximum number of items that can be selected.")))
    }
  ), e.type === "urlfilter" && /* @__PURE__ */ r.createElement(r.Fragment, null, !Ze(n.visualizations) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "URL to Filter: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.datasetKey || "",
      onChange: (d) => a("datasetKey", d.target.value)
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    Object.keys(n.datasets).map((d) => n.datasets[d].dataUrl ? /* @__PURE__ */ r.createElement("option", { key: d, value: d }, n.datasets[d].dataUrl) : null)
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter By: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.filterBy || "",
      onChange: (d) => a("filterBy", d.target.value)
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    /* @__PURE__ */ r.createElement("option", { key: "query-string", value: "Query String" }, "Query String"),
    /* @__PURE__ */ r.createElement("option", { key: "file-name", value: "File Name" }, "File Name")
  )), e.filterBy === "File Name" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    J,
    {
      label: "File Name: ",
      value: e.fileName || "",
      updateField: (d, f, w, y) => a("fileName", y),
      tooltip: /* @__PURE__ */ r.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(L.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(L.Content, null, /* @__PURE__ */ r.createElement("p", null, "Add ${query} to replace the filename with the active dropdown value.")))
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "White Space Replacments", /* @__PURE__ */ r.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(L.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(L.Content, null, /* @__PURE__ */ r.createElement("p", null, "Set how whitespace characters will be handled in the file request")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.whitespaceReplacement || "Keep Spaces",
      onChange: (d) => a("whitespaceReplacement", d.target.value)
    },
    /* @__PURE__ */ r.createElement("option", { key: "remove-spaces", value: "Remove Spaces" }, "Remove Spaces"),
    /* @__PURE__ */ r.createElement("option", { key: "replace-with-underscore", value: "Replace With Underscore" }, "Replace With Underscore"),
    /* @__PURE__ */ r.createElement("option", { key: "keep-spaces", value: "Keep Spaces" }, "Keep Spaces")
  )))), e.filterBy === "Query String" && /* @__PURE__ */ r.createElement(
    J,
    {
      label: "Query string parameter",
      value: e.queryParameter,
      updateField: (d, f, w, y) => a("queryParameter", y)
    }
  ), /* @__PURE__ */ r.createElement(D, null), g && /* @__PURE__ */ r.createElement(D, { isSubgroup: !0 }), !!c.length && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading mt-1" }, "Parent Filter(s): "), /* @__PURE__ */ r.createElement(
    it,
    {
      label: "Parent Filter(s): ",
      options: c.map((d) => ({ value: d, label: d })),
      fieldName: "parents",
      selected: e.parents,
      updateField: (d, f, w, y) => {
        a("parents", y);
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading mt-1" }, "Used By: (optional)", /* @__PURE__ */ r.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(L.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(L.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select if you would like specific visualizations or rows to use this filter. Otherwise the filter will be added to all api requests.")))), /* @__PURE__ */ r.createElement(
    it,
    {
      options: u.map((d) => ({
        value: d,
        label: p[d]
      })),
      fieldName: "usedBy",
      selected: e.usedBy,
      updateField: (d, f, w, y) => {
        a("usedBy", y);
      }
    }
  )), /* @__PURE__ */ r.createElement(
    J,
    {
      label: "Reset Label: ",
      value: e.resetLabel || "",
      updateField: (d, f, w, y) => a("resetLabel", y)
    }
  ), /* @__PURE__ */ r.createElement(
    J,
    {
      label: "Default Value Set By Query String Parameter: ",
      value: e.setByQueryParameter || "",
      updateField: (d, f, w, y) => a("setByQueryParameter", y)
    }
  )), e.type === "datafilter" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.filterStyle !== oe.nestedDropdown ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.columnName,
      onChange: (d) => {
        a("columnName", d.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    o.map((d) => /* @__PURE__ */ r.createElement("option", { value: d, key: `filter-column-select-item-${d}` }, d))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Show Dropdown"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: e.showDropdown === !0,
      onChange: (d) => {
        a("showDropdown", !e.showDropdown);
      }
    }
  ))) : /* @__PURE__ */ r.createElement(
    vl,
    {
      filter: e,
      updateFilterProp: (d, f) => {
        a(d, f);
      },
      isDashboard: !0,
      config: n
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Set By: "), /* @__PURE__ */ r.createElement("select", { value: e.setBy, onChange: (d) => a("setBy", d.target.value) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"), Object.keys(n.visualizations).filter((d) => n.visualizations[d].type !== "dashboardFilters").map((d) => {
    var w;
    const f = n.visualizations[d];
    return /* @__PURE__ */ r.createElement("option", { value: d, key: `set-by-select-item-${d}` }, ((w = f.general) == null ? void 0 : w.title) || f.title || d);
  }))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading mt-1" }, "Used By: (optional)", /* @__PURE__ */ r.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(L.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(L.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select if you would like specific visualizations or rows to use this filter. Otherwise the filter will be added to all api requests.")))), /* @__PURE__ */ r.createElement(
    it,
    {
      options: u.map((d) => ({
        value: d,
        label: p[d]
      })),
      fieldName: "usedBy",
      selected: e.usedBy,
      updateField: (d, f, w, y) => {
        a("usedBy", y);
      }
    }
  )), /* @__PURE__ */ r.createElement(
    J,
    {
      label: "Reset Label: ",
      value: e.resetLabel || "",
      updateField: (d, f, w, y) => a("resetLabel", y)
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Parent Filter: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.parents || [],
      onChange: (d) => {
        a("parents", d.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "Select a filter"),
    n.dashboard.sharedFilters && n.dashboard.sharedFilters.map((d) => {
      if (d.key !== e.key)
        return /* @__PURE__ */ r.createElement("option", { key: d.key }, d.key);
    })
  )), /* @__PURE__ */ r.createElement(
    J,
    {
      label: "Default Value Set By Query String Parameter: ",
      value: e.setByQueryParameter || "",
      updateField: (d, f, w, y) => a("setByQueryParameter", y)
    }
  ))));
}, bl = ({
  removeFilterCompletely: e,
  removeFilterFromViz: t,
  filterIndex: n
}) => {
  const { overlay: a } = pe(), { config: o } = v.useContext(ee), i = Object.values(o.visualizations).filter((l) => {
    var c;
    return (c = l.sharedFilterIndexes) == null ? void 0 : c.map(Number).includes(Number(n));
  }).length > 1, s = i ? "This filter is used by multiple visualizations. You can either delete the filter from this visualization only or you can delete the filter completely, which will also remove it from other visualizations." : "Are you sure you want to delete this filter?";
  return /* @__PURE__ */ r.createElement(me, { showClose: !0 }, /* @__PURE__ */ r.createElement(me.Content, null, /* @__PURE__ */ r.createElement("p", null, s), i && /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-warning",
      onClick: () => {
        t(n), a == null || a.actions.toggleOverlay();
      }
    },
    "Delete from Visualization"
  ), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-danger",
      onClick: () => {
        e(n), a == null || a.actions.toggleOverlay();
      }
    },
    "Delete",
    i ? " Completely" : ""
  )));
}, El = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return (Object.values(t) || []).forEach((o) => {
    o == null || o.forEach((i) => {
      const s = i[e];
      if (s !== void 0) {
        const l = String(s).trim();
        n.add(l);
      }
    });
  }), Array.from(n);
}, Dl = (e) => {
  var t;
  return e.type === "urlfilter" ? (t = e.apiFilter) == null ? void 0 : t.valueSelector : e.columnName;
}, Tt = (e, t, n = []) => e == null ? void 0 : e.map((a, o) => {
  if (n.includes(o) || a.type === "urlfilter")
    return a;
  const i = N.cloneDeep(a), s = El(Dl(a), t);
  if (i.values = s, s.length > 0) {
    const l = ua(i);
    if (l)
      i.active = l;
    else if (a.multiSelect) {
      const c = i.values, m = Array.isArray(i.active) ? i.active : [i.active];
      i.active = m.filter((p) => c.includes(p));
    } else {
      const c = e.find((p) => p.resetLabel), m = c ? c.resetLabel : i.values[0] || i.active;
      i.active = m;
    }
  }
  return i;
}), Sl = ({ vizConfig: e, updateConfig: t }) => {
  const { config: n, loadAPIFilters: a, data: o } = v.useContext(ee), { overlay: i } = pe(), {
    dashboard: { sharedFilters: s },
    visualizations: l
  } = n, c = v.useContext(ne), m = v.useMemo(() => {
    var D;
    const g = n.visualizations[e.uid].sharedFilterIndexes.map(
      Number
    );
    return (D = n.dashboard.sharedFilters) == null ? void 0 : D.map(({ key: d }, f) => [f, d]).filter(([d]) => !g.includes(d)).map(([d, f]) => /* @__PURE__ */ r.createElement("option", { key: d, value: d }, `${d} - ${f}`));
  }, [n.visualizations, e.uid]), p = v.useState({}), [u, E] = v.useState(!1), h = (g, D, d) => {
    const f = N.cloneDeep(s), {
      apiEndpoint: w,
      valueSelector: y,
      textSelector: b,
      subgroupValueSelector: C,
      subgroupTextSelector: S
    } = s[D].apiFilter || {}, T = (d == null ? void 0 : d.apiEndpoint) !== w || (d == null ? void 0 : d.valueSelector) !== y || (d == null ? void 0 : d.textSelector) !== b || (d == null ? void 0 : d.subgroupValueSelector) !== C || (d == null ? void 0 : d.subgroupTextSelector) !== S;
    if (f[D][g] = d, g === "columnName") {
      f[D].subGrouping && delete f[D].subGrouping;
      const R = Tt(f, o);
      c({ type: "SET_SHARED_FILTERS", payload: R });
    } else
      g === "filterStyle" ? (f[D] = {
        ...f[D],
        active: "",
        apiFilter: {
          apiEndpoint: "",
          subgroupValueSelector: "",
          textSelector: "",
          valueSelector: ""
        },
        filterStyle: d
      }, c({ type: "SET_SHARED_FILTERS", payload: f })) : g === "apiFilter" && d.apiEndpoint && d.valueSelector && T ? (s[D].filterStyle === oe.nestedDropdown && d.subgroupValueSelector && (f[D].subGrouping = {
        active: "",
        columnName: "",
        setByQueryParameter: "",
        valuesLookup: {}
      }), a(f, {})) : c({ type: "SET_SHARED_FILTERS", payload: f });
  }, O = (g) => {
    const D = N.cloneDeep(s);
    D.splice(g, 1);
    const d = Object.keys(s).slice(g + 1), f = l;
    Object.keys(f).forEach((w) => {
      const y = f[w];
      if (y.type === "dashboardFilters") {
        const b = y.sharedFilterIndexes.filter((C) => C != g).map((C) => d.includes(C.toString()) ? C - 1 : C);
        c({ type: "UPDATE_VISUALIZATION", payload: { vizKey: w, configureData: { sharedFilterIndexes: b } } });
      }
    }), c({ type: "SET_SHARED_FILTERS", payload: D });
  }, I = () => {
    const g = N.cloneDeep(s) || [], d = { key: "New Dashboard Filter " + (g.length + 1), showDropdown: !0, values: [] };
    c({ type: "SET_SHARED_FILTERS", payload: [...g, d] }), t({ ...e, sharedFilterIndexes: [...e.sharedFilterIndexes, g.length] });
  };
  return /* @__PURE__ */ r.createElement(tr, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(Zt, null, /* @__PURE__ */ r.createElement(Kt, null, /* @__PURE__ */ r.createElement(Xt, null, "General")), /* @__PURE__ */ r.createElement(Yt, null, /* @__PURE__ */ r.createElement(
    fr,
    {
      value: e.filterBehavior,
      label: "Filter Behavior",
      updateField: (g, D, d, f) => {
        t({ ...e, filterBehavior: f });
      },
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ r.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(L.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(L.Content, null, /* @__PURE__ */ r.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), e.filterBehavior === "Apply Button" && /* @__PURE__ */ r.createElement(
    J,
    {
      label: "Apply Filter Button Text",
      maxLength: 20,
      value: e.applyFiltersButtonText,
      updateField: (g, D, d, f) => {
        t({ ...e, applyFiltersButtonText: f });
      }
    }
  ), e.filterBehavior === "Filter Change" && /* @__PURE__ */ r.createElement(
    Ue,
    {
      label: "Auto Load",
      value: e.autoLoad,
      updateField: (g, D, d, f) => {
        t({ ...e, autoLoad: f });
      },
      tooltip: /* @__PURE__ */ r.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(L.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(L.Content, null, /* @__PURE__ */ r.createElement("p", null, "Check if you would like for all URL filters to automatically select a value when a parent filter is changed.")))
    }
  ))), /* @__PURE__ */ r.createElement(Zt, null, /* @__PURE__ */ r.createElement(Kt, null, /* @__PURE__ */ r.createElement(Xt, null, "Filters")), /* @__PURE__ */ r.createElement(Yt, null, e.sharedFilterIndexes.map((g) => {
    const D = s[g];
    return /* @__PURE__ */ r.createElement(
      Xa,
      {
        key: D.key + g,
        fieldName: D.key,
        fieldKey: g,
        fieldType: "Dashboard Filter",
        controls: p,
        deleteField: () => {
          i == null || i.actions.openOverlay(
            /* @__PURE__ */ r.createElement(
              bl,
              {
                removeFilterCompletely: O,
                removeFilterFromViz: (d) => {
                  t({
                    ...e,
                    sharedFilterIndexes: e.sharedFilterIndexes.filter((f) => f !== d)
                  });
                },
                filterIndex: g
              }
            )
          );
        }
      },
      /* @__PURE__ */ r.createElement(
        yl,
        {
          filter: D,
          filterIndex: g,
          updateFilterProp: (d, f) => {
            h(d, g, f);
          },
          config: n
        }
      )
    );
  }), /* @__PURE__ */ r.createElement("button", { onClick: I, className: "btn btn-primary full-width" }, "Add Filter"), u ? /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Select Existing Dashboard Filter", /* @__PURE__ */ r.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(L.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(L.Content, null, /* @__PURE__ */ r.createElement("p", null, "This feature is indentended to support legacy functionality. Be advised that any change to the filter in this editor will reflect on the whole dashboard.", " ")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: "",
      onChange: (g) => {
        t({
          ...e,
          sharedFilterIndexes: [...e.sharedFilterIndexes, g.target.value]
        }), E(!1);
      }
    },
    [
      /* @__PURE__ */ r.createElement("option", { key: "select", value: "" }, "Select"),
      ...m
    ]
  )) : /* @__PURE__ */ r.createElement("button", { onClick: () => E(!0), className: "btn btn-primary full-width mt-2" }, "Add Existing Dashboard Filter"))));
}, wl = (e) => e.replace(/"/g, ""), Tl = (e) => String(e).match(/^[-]?[0-9\.]+$/), Ct = (e, t) => {
  const n = e.includes("?");
  return t.filter(({ value: a }) => a !== "").map(({ key: a, value: o }, i) => {
    const s = i === 0 && !n ? "?" : "&", l = a.match(/\$.*/);
    return Tl(o) || l ? s + a + "=" + o : s + a + `="${wl(o)}"`;
  }).join("");
}, Cl = (e, t, n = []) => e.reduce((a, o, i) => {
  const s = o, l = n.includes(i);
  return t[s] && !l ? a[s] = t[s] : a[s] = void 0, a;
}, {}), za = (e, t) => {
  const n = t.filter((a) => {
    var o;
    return (o = e.parents) == null ? void 0 : o.includes(a.key);
  });
  return (n || []).length ? n.flatMap((a) => {
    var o;
    if (a.filterStyle === oe.nestedDropdown) {
      const i = a.apiFilter.valueSelector || "", s = a.apiFilter.subgroupValueSelector || "", l = a.queuedActive ? a.queuedActive[0] : a.active || "", c = a.queuedActive ? a.queuedActive[1] : ((o = a.subGrouping) == null ? void 0 : o.active) || "";
      return [
        { key: i, value: l },
        { key: s, value: c }
      ];
    } else {
      const i = a.queryParameter || a.apiFilter.valueSelector || "", s = a.queuedActive || a.active || "";
      return Array.isArray(s) ? s.map((l) => ({ key: i, value: l.toString() })) : [{ key: i, value: s.toString() }];
    }
  }) : null;
}, Ha = (e) => e == null ? void 0 : e.some(({ value: t }) => t === ""), Ol = (e, t) => {
  const { textSelector: n, valueSelector: a, subgroupTextSelector: o, subgroupValueSelector: i } = t;
  if (i) {
    const s = {};
    return e.forEach((l) => {
      s[l[a]] || (s[l[a]] = { text: l[n || a], value: l[a], subOptions: [] }), s[l[a]].subOptions.push({ text: l[o], value: l[i] });
    }), Object.values(s);
  }
  return e.map((s) => ({ text: s[n || a], value: s[a] }));
}, Il = (e, t) => {
  const n = {};
  return e.forEach((a, o) => {
    var m;
    const i = (m = a.apiFilter) == null ? void 0 : m.apiEndpoint;
    if (!i)
      return;
    const s = i;
    if (t[s])
      return;
    const l = za(a, e);
    if (Ha(l))
      return;
    const c = i + (l ? Ct(i, l) : "");
    n[c] = [s, o];
  }), n;
}, _l = (e, t) => {
  var s, l;
  const n = Oe(t == null ? void 0 : t.setByQueryParameter), a = (s = e[0]) == null ? void 0 : s.value, o = (l = e[0]) == null ? void 0 : l.subOptions[0].value, i = Oe(t == null ? void 0 : t.subGrouping.setByQueryParameter);
  if (!t.active)
    t.active = n || a, t.subGrouping.active = i || o;
  else {
    const c = e.find((m) => m.value === t.active);
    if (t.active = c ? c.value : a, c) {
      const m = c.subOptions.find((p) => p.value === t.subGrouping.active);
      t.subGrouping.active = (m == null ? void 0 : m.value) || o;
    } else
      t.subGrouping.active = o;
  }
}, kl = (e, t) => {
  var s;
  const n = Oe(t == null ? void 0 : t.setByQueryParameter), a = Array.isArray(n) ? n : n == null ? void 0 : n.split(","), o = n ? a : [(s = e[0]) == null ? void 0 : s.value], i = (t.active || []).filter(
    (l) => e.find((c) => c.value === l)
  );
  t.active = i.length ? i : o;
}, Zn = (e, t, n, a) => {
  var l;
  const o = N.cloneDeep(n), i = N.cloneDeep(o[e]);
  if (!a.length || !(t != null && t.length))
    return i;
  const s = i.setByQueryParameter ? !!Oe(i.setByQueryParameter) : !1;
  if (a.includes(e) || s) {
    const c = o.filter((p) => {
      var u;
      return (u = i.parents) == null ? void 0 : u.includes(p.key);
    }), m = c.some((p) => !(p.active || p.queuedActive));
    if (c && m)
      return i;
    if (i.filterStyle === oe.multiSelect)
      kl(t, i);
    else if (i.filterStyle === oe.nestedDropdown)
      _l(t, i);
    else {
      const p = (l = t[0]) == null ? void 0 : l.value, u = Oe(i == null ? void 0 : i.setByQueryParameter);
      if (!i.active)
        i.active = u || p;
      else {
        const E = t.find((h) => h.value == i.active);
        i.active = E ? E.value : p;
      }
    }
  }
  return i;
};
const ja = ({
  apiFilterDropdowns: e,
  visualizationConfig: t,
  setConfig: n,
  currentViewport: a,
  isEditor: o = !1
}) => {
  var f, w;
  const i = v.useContext(ee), { config: s, reloadURLData: l, loadAPIFilters: c, setAPIFilterDropdowns: m, setAPILoading: p } = i, u = v.useContext(ne), E = (y) => {
    y.preventDefault();
    const b = N.cloneDeep(i.config.dashboard), C = Object.values(i.config.visualizations).filter((T) => T.type === "dashboardFilters").reduce((T, R) => R.autoLoad ? T : [...T, R.sharedFilterIndexes], []);
    if (!b.sharedFilters.some((T, R) => C.includes(R) ? !T.active && !T.queuedActive : !1)) {
      if (Ze(i.config.visualizations)) {
        const T = _t();
        let R = !1;
        b.sharedFilters.forEach((V) => {
          V.queuedActive && (hr(V), V.setByQueryParameter && T[V.setByQueryParameter] !== V.active && (T[V.setByQueryParameter] = Array.isArray(V.active) ? V.active.join(",") : V.active, R = !0));
        }), R && da(T);
      }
      p(!0), u({ type: "SET_SHARED_FILTERS", payload: b.sharedFilters }), u({ type: "SET_FILTERED_DATA", payload: Re(N.cloneDeep(i)) }), c(b.sharedFilters, e).then((T) => {
        l(T);
      }).catch((T) => {
        console.error(T);
      });
    }
  }, h = (y, b) => {
    const C = N.cloneDeep(s);
    let [S, T] = hl(
      y,
      b,
      C.dashboard.sharedFilters,
      t
    );
    if (u({ type: "SET_SHARED_FILTERS", payload: S }), Ze(s.visualizations)) {
      const R = t.autoLoad, V = C.dashboard.sharedFilters.some((ce) => !ce.active), G = S.filter((ce) => ce.apiFilter).map((ce) => ce.apiFilter.apiEndpoint), B = Cl(
        G,
        e,
        T
      );
      R && !V ? (m(B), c(S, B).then((ce) => {
        l(ce);
      })) : (S[y].queuedActive = b, u({ type: "SET_DATA", payload: {} }), u({ type: "SET_FILTERED_DATA", payload: {} }), m(B), c(S, B));
    } else if (S[y].type === "urlfilter" && S[y].apiFilter)
      l(S);
    else {
      const R = N.cloneDeep(i);
      R.config.dashboard.sharedFilters = S;
      const V = Re(R);
      u({ type: "SET_FILTERED_DATA", payload: V }), u({ type: "SET_SHARED_FILTERS", payload: S });
    }
  }, [O, I] = v.useState(!0), g = () => {
    I(!O), n({
      ...t,
      showEditorPanel: !O
    });
  }, D = (f = t == null ? void 0 : t.sharedFilterIndexes) == null ? void 0 : f.map(Number).map((y) => s.dashboard.sharedFilters[y]), d = D.length ? D.every((y) => y.showDropdown === !1) : !1;
  return d && !o ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(ye.VisualizationWrapper, { config: t, isEditor: o, currentViewport: a }, o && /* @__PURE__ */ r.createElement(
    ye.Sidebar,
    {
      displayPanel: O,
      isDashboard: !0,
      title: "Configure Dashboard Filters",
      onBackClick: g
    },
    /* @__PURE__ */ r.createElement(Sl, { updateConfig: n, vizConfig: t })
  ), !d && /* @__PURE__ */ r.createElement(ye.Responsive, { isEditor: o }, /* @__PURE__ */ r.createElement(
    "div",
    {
      className: `${o ? " is-editor" : ""} cove-component__content col-12 cove-dashboard-filters-container`
    },
    /* @__PURE__ */ r.createElement(
      vr,
      {
        show: (w = t == null ? void 0 : t.sharedFilterIndexes) == null ? void 0 : w.map(Number),
        filters: s.dashboard.sharedFilters || [],
        apiFilterDropdowns: e,
        handleOnChange: h,
        showSubmit: t.filterBehavior === Ua.Apply && !t.autoLoad,
        applyFilters: E,
        applyFiltersButtonText: t.applyFiltersButtonText
      }
    )
  )));
}, Nl = new Se(), Ga = (e, t, n) => {
  var l;
  const a = N.cloneDeep(n.visualizations[e]), o = (l = n.datasets[a.dataKey]) == null ? void 0 : l.data, i = o != null && o.length ? Object.keys(o[0]) : [], s = (wt(n.dashboard, t) || []).filter((c) => i.includes(c.columnName));
  return s.length && (a.formattedData = Ie(s, o)), a.data = o, a;
}, qa = (e, t, n, a, o) => {
  if (t === void 0)
    return {};
  const i = N.cloneDeep(n.visualizations[e]), s = n.rows[t];
  if (s.footnotesId && s.footnotesId === e)
    return Ga(e, t, n);
  s != null && s.dataKey && Object.assign(i, N.pick(s, ["dataKey", "dataDescription", "formattedData", "data"])), i.formattedData && (i.originalFormattedData = i.formattedData);
  const l = (o == null ? void 0 : o[t]) ?? (o == null ? void 0 : o[e]);
  if (l)
    i.data = l || [], i.formattedData && (i.formattedData = i.data);
  else {
    const c = i.dataKey || "backwards-compatibility";
    i.data = a[c] || [], i.formattedData && (i.formattedData = Nl.developerStandardize(i.data, i.dataDescription) || i.data);
  }
  return i;
}, Fl = ({ config: e, updateField: t }) => {
  var m, p, u, E, h, O;
  const n = () => {
    const I = [...e.staticFootnotes || [], { text: "Add Footnote Text" }];
    t(null, null, "staticFootnotes", I);
  }, a = (I, g) => {
    const D = N.cloneDeep(e.staticFootnotes);
    D[I] = g, t(null, null, "staticFootnotes", D);
  }, o = (I) => {
    const g = N.cloneDeep(e.staticFootnotes);
    g.splice(I, 1), t(null, null, "staticFootnotes", g);
  }, i = (I) => [["", "--Select--"]].concat(I.map((g) => [g, g])), s = e.datasets || {}, l = e.dataKey ? i(Object.keys(((p = (m = s[e.dataKey]) == null ? void 0 : m.data) == null ? void 0 : p[0]) || {})) : [], c = i(Object.keys(s));
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("em", null, "Dynamic Footnotes"), /* @__PURE__ */ r.createElement("div", { className: "row border p-2" }, /* @__PURE__ */ r.createElement(
    ge,
    {
      label: "Select a Footnote Dataset",
      value: e.dataKey,
      options: c,
      fieldName: "dataKey",
      updateField: t
    }
  ), e.dataKey && /* @__PURE__ */ r.createElement("div", { className: "p-3" }, /* @__PURE__ */ r.createElement(
    ge,
    {
      label: "Footnote Symbol Column",
      value: (u = e.dynamicFootnotes) == null ? void 0 : u.symbolColumn,
      options: l,
      section: "dynamicFootnotes",
      fieldName: "symbolColumn",
      updateField: t
    }
  ), /* @__PURE__ */ r.createElement(
    ge,
    {
      label: "Footnote Text Column",
      value: (E = e.dynamicFootnotes) == null ? void 0 : E.textColumn,
      options: l,
      section: "dynamicFootnotes",
      fieldName: "textColumn",
      updateField: t
    }
  ), /* @__PURE__ */ r.createElement(
    ge,
    {
      label: "Footnote Order Column",
      value: (h = e.dynamicFootnotes) == null ? void 0 : h.orderColumn,
      options: l,
      section: "dynamicFootnotes",
      fieldName: "orderColumn",
      updateField: t
    }
  ))), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("em", null, "Static Footnotes"), (O = e.staticFootnotes) == null ? void 0 : O.map((I, g) => /* @__PURE__ */ r.createElement("div", { key: g, className: "row border p-2" }, /* @__PURE__ */ r.createElement("div", { className: "col-8" }, /* @__PURE__ */ r.createElement(
    ge,
    {
      label: "Symbol",
      value: I.symbol,
      options: [["", "--Select--"], ...rr],
      fieldName: "symbol",
      updateField: (D, d, f, w) => a(g, { ...I, symbol: w })
    }
  ), " ", /* @__PURE__ */ r.createElement(
    J,
    {
      label: "Text",
      value: I.text,
      fieldName: "text",
      updateField: (D, d, f, w) => a(g, { ...I, text: w })
    }
  )), /* @__PURE__ */ r.createElement("div", { className: "col-2 ms-4" }, /* @__PURE__ */ r.createElement("button", { className: "btn btn-danger p-1", onClick: () => o(g) }, "Delete")))), /* @__PURE__ */ r.createElement("button", { className: "btn btn-primary", onClick: n }, "Add Static Footnote"));
}, Ke = ({
  visualizationKey: e,
  config: t,
  viewport: n,
  isEditor: a,
  updateConfig: o
}) => {
  const i = It(t, o);
  if (a)
    return /* @__PURE__ */ r.createElement(
      Va,
      {
        component: Ke,
        visualizationKey: e,
        visualizationConfig: t,
        updateConfig: o,
        type: "Footnotes",
        viewport: n
      },
      /* @__PURE__ */ r.createElement(Fl, { key: e, config: t, updateField: i })
    );
  const s = v.useMemo(() => {
    const c = t.formattedData || t.data;
    if (c && t.dataKey && t.dynamicFootnotes) {
      const { symbolColumn: m, textColumn: p, orderColumn: u } = t.dynamicFootnotes, E = c.map((h) => N.pick(h, [m, p, u]));
      return E.sort((h, O) => h[u] - O[u]), E.map((h) => ({ symbol: h[m], text: h[p] }));
    }
    return [];
  }, [t.dynamicFootnotes, t.formattedData, t.data]), l = t.staticFootnotes || [];
  return /* @__PURE__ */ r.createElement(yr, { footnotes: [...s, ...l] });
}, Al = ({
  allExpanded: e,
  fontSize: t,
  groupName: n,
  currentViewport: a,
  children: o
}) => {
  const [i, s] = v.useState(e), l = ["xs", "xxs"].includes(a) ? "13px" : `${Ya}px`;
  return v.useEffect(() => {
    s(e);
  }, [e]), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    "div",
    {
      style: { fontSize: l },
      role: "button",
      className: `multi-visualiation-heading${i ? "" : " collapsed"} h4`,
      onClick: () => {
        s(!i);
      },
      tabIndex: 0,
      onKeyDown: (c) => {
        c.keyCode === 13 && s(!i);
      }
    },
    /* @__PURE__ */ r.createElement(P, { display: i ? "minus" : "plus", base: !0 }),
    n
  ), i && o);
}, Ll = ({
  allExpanded: e,
  currentViewport: t,
  groupName: n,
  hideVisualization: a,
  row: o,
  children: i
}) => a ? /* @__PURE__ */ r.createElement(r.Fragment, null) : o.expandCollapseAllButtons ? /* @__PURE__ */ r.createElement("div", { className: "collapsable-multiviz-container" }, /* @__PURE__ */ r.createElement(
  Al,
  {
    allExpanded: e,
    fontSize: "26px",
    groupName: n,
    currentViewport: t
  },
  i
)) : /* @__PURE__ */ r.createElement(r.Fragment, null, n !== "" ? /* @__PURE__ */ r.createElement("h3", null, n) : /* @__PURE__ */ r.createElement(r.Fragment, null), i), Kn = ({
  allExpanded: e,
  filteredDataOverride: t,
  groupName: n,
  row: a,
  rowIndex: o,
  inNoDataState: i,
  setSharedFilter: s,
  updateChildConfig: l,
  apiFilterDropdowns: c,
  currentViewport: m,
  isLastRow: p
}) => {
  const { config: u, filteredData: E, data: h } = v.useContext(ee), [O, I] = r.useState(a.columns.map((f, w) => w === 0)), g = (f) => {
    I(O.map((w, y) => y === f));
  }, D = v.useMemo(() => {
    if (a.footnotesId) {
      const f = Ga(a.footnotesId, o, u);
      if (a.multiVizColumn && t) {
        const w = t[0][a.multiVizColumn], y = f.formattedData.filter((b) => b[a.multiVizColumn] === w);
        f.formattedData = y;
      } else
        f.formattedData = E[a.footnotesId];
      return f;
    }
    return null;
  }, [u, a, h, E]), d = (f) => {
    const y = Object.values(u.visualizations).filter(
      (b) => b.type === "dashboardFilters"
    ).filter((b) => !b.autoLoad).flatMap((b) => b.sharedFilterIndexes);
    return Ze(u.visualizations) && f.autoLoad ? y.some((b) => {
      const { queuedActive: C, active: S, subGrouping: T } = u.dashboard.sharedFilters[b];
      return !S && !C ? !0 : C ? T ? C[0] !== S || C[1] !== T.active : C !== S : !1;
    }) : !1;
  };
  return /* @__PURE__ */ r.createElement("div", { className: `row${a.equalHeight ? " equal-height" : ""}${a.toggle ? " toggle" : ""}`, key: `row__${o}` }, a.columns.map((f, w) => {
    if (f.width) {
      if (!f.widget)
        return /* @__PURE__ */ r.createElement("div", { key: `row__${o}__col__${w}`, className: `col col-${f.width}` });
      const y = qa(f.widget, o, u, h, E);
      t && (y.data = t, y.formattedData && (y.formattedData = t));
      const b = u.dashboard.sharedFilters && u.dashboard.sharedFilters.filter((B) => B.setBy === f.widget).length > 0, C = b ? u.dashboard.sharedFilters.filter((B) => B.setBy === f.widget)[0].active : void 0, S = /* @__PURE__ */ r.createElement("a", { href: `#data-table-${y.dataKey}`, className: "margin-left-href" }, y.dataKey, " (Go to Table)"), T = i && y.filterBehavior !== "Apply Button" && (y.type !== "dashboardFilters" || d(y)), R = a.toggle === void 0 || a.toggle && O[w], V = y.type === "dashboardFilters" && y.sharedFilterIndexes && y.sharedFilterIndexes.filter(
        (B) => u.dashboard.sharedFilters[B].showDropdown === !1
      ).length === y.sharedFilterIndexes.length, G = !p && !V;
      return /* @__PURE__ */ r.createElement(
        "div",
        {
          key: `vis__${o}__${w}`,
          className: `col-12 col-md-${f.width}${R ? "" : " d-none"}${T ? " hide-parent-visualization" : G ? " mb-4" : ""}`
        },
        a.toggle && !T && /* @__PURE__ */ r.createElement(
          gl,
          {
            row: a,
            visualizations: u.visualizations,
            active: O.indexOf(!0),
            setToggled: g
          }
        ),
        /* @__PURE__ */ r.createElement(
          Ll,
          {
            allExpanded: e,
            currentViewport: m,
            groupName: n,
            hideVisualization: T,
            row: a
          },
          y.type === "chart" && /* @__PURE__ */ r.createElement(
            aa,
            {
              key: f.widget,
              config: y,
              dashboardConfig: u,
              isEditor: !1,
              setConfig: (B) => {
                l(f.widget, B);
              },
              setSharedFilter: b ? s : void 0,
              isDashboard: !0,
              link: u.table && u.table.show && u.datasets && y.table && y.table.showDataTableLink ? S : void 0,
              configUrl: void 0,
              setEditing: void 0,
              hostname: void 0,
              setSharedFilterValue: void 0
            }
          ),
          y.type === "map" && /* @__PURE__ */ r.createElement(
            ia,
            {
              key: f.widget,
              config: y,
              isEditor: !1,
              setConfig: (B) => {
                l(f.widget, B);
              },
              showLoader: !1,
              setSharedFilter: b ? s : void 0,
              setSharedFilterValue: C,
              isDashboard: !0,
              link: u.table && u.table.show && u.datasets && y.table && y.table.showDataTableLink ? S : void 0
            }
          ),
          y.type === "data-bite" && /* @__PURE__ */ r.createElement(
            oa,
            {
              key: f.widget,
              config: y,
              isEditor: !1,
              setConfig: (B) => {
                l(f.widget, B);
              },
              isDashboard: !0
            }
          ),
          y.type === "waffle-chart" && /* @__PURE__ */ r.createElement(
            sa,
            {
              key: f.widget,
              config: y,
              isEditor: !1,
              setConfig: (B) => {
                l(f.widget, B);
              },
              isDashboard: !0,
              configUrl: u.table && u.table.show && u.datasets && y.table && y.table.showDataTableLink ? S : void 0
            }
          ),
          y.type === "markup-include" && /* @__PURE__ */ r.createElement(
            la,
            {
              key: f.widget,
              config: y,
              configUrl: void 0,
              isDashboard: !0,
              isEditor: !1,
              setConfig: (B) => {
                l(f.widget, B);
              }
            }
          ),
          y.type === "filtered-text" && /* @__PURE__ */ r.createElement(
            Fa,
            {
              key: f.widget,
              config: y,
              isEditor: !1,
              setConfig: (B) => {
                l(f.widget, B);
              },
              isDashboard: !0,
              configUrl: void 0
            }
          ),
          y.type === "dashboardFilters" && /* @__PURE__ */ r.createElement(
            ja,
            {
              setConfig: (B) => {
                l(f.widget, B);
              },
              key: f.widget,
              visualizationConfig: y,
              apiFilterDropdowns: c,
              currentViewport: m
            }
          ),
          y.type === "table" && /* @__PURE__ */ r.createElement(
            xt,
            {
              key: f.widget,
              updateConfig: (B) => {
                l(f.widget, B);
              },
              visualizationKey: f.widget,
              config: y,
              viewport: m
            }
          ),
          y.type === "footnotes" && /* @__PURE__ */ r.createElement(
            Ke,
            {
              key: f.widget,
              visualizationKey: f.widget,
              config: y,
              viewport: m
            }
          )
        )
      );
    }
    return /* @__PURE__ */ r.createElement(r.Fragment, { key: `vis__${o}__${w}` });
  }), a.footnotesId && !i ? /* @__PURE__ */ r.createElement(
    Ke,
    {
      isEditor: !1,
      visualizationKey: a.footnotesId,
      config: D,
      viewport: m
    }
  ) : null);
}, Xn = function(e = " ", t = "") {
  return this.split(e).map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join(t);
}, Pl = (e, t, n) => {
  let a = !1;
  return e.find((o) => {
    if (o.type === "urlfilter" && !Array.isArray(o.active) && o.filterBy === "File Name")
      return a = !0, !0;
  }), Object.keys(n).forEach((o) => {
    decodeURIComponent(n[o]) !== t[o] && (a = !0);
  }), a;
}, Yn = ({ visualizations: e, datasets: t, rows: n }) => {
  const a = Object.values(e).map((s) => s.dataKey), o = n.map((s) => s.dataKey), i = N.uniq([...a, ...o]);
  return Object.keys(t).filter((s) => i.includes(s));
}, Rl = (e, t, n) => {
  const a = Object.keys(e).flatMap((s) => {
    const l = e[s];
    return l === void 0 ? [] : typeof l == "string" && l.match(/undefined/) ? [] : Array.isArray(l) ? l.map((c) => ({ key: s, value: c })) : { key: s, value: l };
  }), o = t.origin + t.pathname;
  let i = `${o}${Ct(o, a)}`;
  if (n !== "") {
    const s = t.pathname.split(".").pop(), l = t.pathname.substring(0, t.pathname.lastIndexOf("/"));
    i = `${t.origin}${l}/${n}.${s}${Ct(
      o,
      a
    )}`;
  }
  return i;
}, xl = (e, t, n) => {
  const a = {
    "Remove Spaces": "",
    "Keep Spaces": " ",
    "Replace With Underscore": "_"
  };
  let o = e;
  return t.datasetKey === n && (t.fileName ? o = Xn.call(
    String(t.fileName),
    " ",
    a[t.whitespaceReplacement ?? "Keep Spaces"]
  ) : o = t.active), o != null && o.includes("${query}") && (o = o.replace(
    "${query}",
    Xn.call(
      String(t.active),
      " ",
      a[t.whitespaceReplacement ?? "Keep Spaces"]
    )
  )), o;
}, Ml = (e, t) => Object.keys(e).reduce((n, a) => {
  const o = e[a].dataKey;
  return t[o] && (n[a].formattedData = t[o]), n;
}, N.cloneDeep(e)), $l = (e, t, n, a) => {
  var i, s;
  if (!e.usedBy || !e.usedBy.length)
    return !0;
  const o = (i = e.usedBy) == null ? void 0 : i.map((l) => n[l] || a[l]);
  return (s = e.usedBy) == null || s.forEach((l) => {
    if (a[l] && a[l].footnotesId)
      return o.push(n[a[l].footnotesId]);
  }), o == null ? void 0 : o.some((l) => (l == null ? void 0 : l.dataKey) === t);
}, Bl = ({ setAllExpanded: e }) => /* @__PURE__ */ r.createElement("div", { className: "d-block " }, /* @__PURE__ */ r.createElement("div", { className: "d-flex flex-row-reverse mb-2" }, /* @__PURE__ */ r.createElement("button", { className: "btn expand-collapse-buttons", onClick: () => e(!1) }, "- Collapse All"), /* @__PURE__ */ r.createElement("button", { className: "btn expand-collapse-buttons me-2", onClick: () => e(!0) }, "+ Expand All"))), Vl = (e, t, n, a) => {
  const o = (i, s, l, c = 50) => {
    if (!i)
      return;
    const m = i.map((g, D) => D), p = l ? m : a;
    i = i.map(
      (g, D) => {
        var d;
        return Zn(
          D,
          s[(d = g.apiFilter) == null ? void 0 : d.apiEndpoint],
          i,
          p
        );
      }
    );
    const u = i.filter((g) => g.apiFilter), E = new Map(u.map((g) => [g.apiFilter.apiEndpoint, g.apiFilter])), h = Il(i, s), O = Object.values(h).reduce(
      (g, [D]) => ({ ...g, [D]: null }),
      {}
    );
    n((g) => ({ ...g, ...O }));
    const I = N.cloneDeep(s);
    return Promise.all(
      Object.keys(h).map(
        (g) => new Promise((D) => {
          fetch(g).then((d) => d.json()).then((d) => {
            Array.isArray(d) || console.error("COVE only supports response data in the shape Array<Object>");
            const [f, w] = h[g], y = E.get(f), b = Ol(d, y);
            I[f] = b;
            const C = Zn(
              w,
              b,
              i,
              p
            );
            i[w] = C;
          }).catch(() => {
            t({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            }), D({ error: !0 });
          }).finally(() => {
            D({ error: !1 });
          });
        })
      )
    ).then((g) => {
      const D = g.some(({ error: f }) => f), d = i.reduce((f, w, y) => p.includes(y) && !w.active ? Ha(za(w, i)) ? f : [...f, y] : f, []);
      return D || !d.length || c === 0 ? (n(I), e({ type: "SET_SHARED_FILTERS", payload: i }), i) : o(i, I, l, c - 1);
    });
  };
  return o;
}, Ul = (e, t) => {
  var s;
  const n = !!Oe("cove-auto-load"), a = e.multiDashboards ? e.multiDashboards[e.activeDashboard] : e, o = (s = a.dashboard.sharedFilters) == null ? void 0 : s.some(
    (l) => l.filterBy === "File Name"
  ), i = Object.values(a.visualizations).reduce((l, c) => {
    if (l === !1)
      return l;
    if (c.visualizationType === "dashboardFilters") {
      if (c.filterBehavior === "Apply Button")
        return !1;
      if (c.autoLoad)
        return !0;
    }
    return l;
  }, void 0);
  if (n || i || o || t) {
    const l = a.rows.map((p) => p.dataKey).filter(Boolean);
    return !!Object.values(a.visualizations).map((p) => p.dataKey).filter(Boolean).concat(l).find((p) => {
      var u;
      return !((u = e.datasets[p].data) != null && u.length);
    });
  }
  return !1;
};
function zl({ initialState: e, isEditor: t = !1, isDebug: n = !1 }) {
  var ce, Mt, $t, Bt, Vt, Ut, zt, Ht, jt, Gt, qt, Wt, Qt;
  const [a, o] = v.useReducer(dl, e), [i, s] = v.useReducer(ml, []), l = v.useContext(ra), [c, m] = v.useState({}), [p, u] = v.useState("lg"), [E] = v.useState(`cove-${Math.random().toString(16).slice(-4)}`), [h, O] = v.useState(!0), [I, g] = v.useState(!1), D = a.tabSelected === "Dashboard Preview", d = v.useMemo(() => {
    const _ = Yn(a.config).map((k) => a.data[k]);
    return _.length ? _.some((k) => k === void 0) : !0;
  }, [a.data]), f = Rt(a.config.rows), w = new Se(), y = v.useMemo(() => Object.values(a.config.visualizations).filter((_) => _.type === "dashboardFilters").reduce((_, k) => k.autoLoad ? [..._, ...k.sharedFilterIndexes] : _, []), [a.config.visualizations]), b = Vl(
    o,
    s,
    m,
    y
  ), C = async (_) => {
    const k = N.cloneDeep(a.config);
    if (!k.datasets)
      return;
    const z = _ || k.dashboard.sharedFilters, M = Yn(k), A = N.cloneDeep(a.data), $ = N.cloneDeep(k.datasets);
    let q = !1, H = "";
    for (let W = 0; W < M.length; W++) {
      const j = M[W], ue = k.datasets[j];
      if (ue.dataUrl && z) {
        const ve = new URL(ue.runtimeDataUrl || ue.dataUrl, window.location.origin), de = Object.fromEntries(new URLSearchParams(ve.search)), X = {};
        z.forEach((U) => {
          var Q;
          if (U.type === "urlfilter" && $l(U, j, k.visualizations, k.rows)) {
            if (U.filterBy === "File Name" && (H = xl(H, U, j)), U.queryParameter && (X[U.queryParameter] ? X[U.queryParameter] = X[U.queryParameter] + U.active : X[U.queryParameter] = U.active), U.setByQueryParameter) {
              const we = Object.fromEntries(new URLSearchParams(window.location.search))[U.setByQueryParameter], Wa = ((Q = U.apiFilter) == null ? void 0 : Q.valueSelector) || U.setByQueryParameter;
              we && (X[Wa] = we);
            }
            U.apiFilter && U.active && (X[U.apiFilter.valueSelector] = U.active, U.apiFilter.subgroupValueSelector && U.subGrouping.active && (X[U.apiFilter.subgroupValueSelector] = U.subGrouping.active));
          }
        });
        const ke = Pl(z, de, X);
        if (_ || ke) {
          q = !0;
          const U = Rl(
            { ...de, ...X },
            ve,
            H
          );
          g(!0), await xe(U).then((Q) => {
            let ae = Q;
            if (Q && ue.dataDescription)
              try {
                ae = w.autoStandardize(ae), ae = w.developerStandardize(ae, ue.dataDescription);
              } catch (we) {
                console.error("Error standardizing data:", we);
              }
            $[j].data = ae, $[j].runtimeDataUrl = U, A[j] = ae;
          }).catch((Q) => {
            console.error(Q), s({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            }), $[j].data = [], $[j].runtimeDataUrl = U, A[j] = [];
          });
        }
      }
    }
    const Z = N.pickBy($, (W) => !W.dataUrl);
    if (q || Object.keys(Z).length) {
      const W = Object.keys(Z).reduce((Q, ae) => (Q[ae] = Z[ae].data, Q), {}), j = { ...A, ...W };
      o({ type: "SET_DATA", payload: j });
      const ue = k.dashboard.sharedFilters.reduce((Q, ae, we) => (ae.type === "datafilter" && Q.push(we), Q), []), ve = Object.values(k.visualizations).filter((Q) => Q.type === "dashboardFilters").flatMap((Q) => Q.sharedFilterIndexes).filter((Q) => !ue.includes(Q)), de = Tt(z, j, ve), X = { ...k.dashboard, sharedFilters: de }, ke = Re(
        { ...a, config: { ...a.config, dashboard: X } },
        {},
        j
      );
      o({ type: "SET_FILTERED_DATA", payload: ke });
      const U = Ml(k.visualizations, A);
      o({
        type: "SET_CONFIG",
        payload: {
          dashboard: X,
          datasets: $,
          visualizations: U,
          activeDashboard: k.activeDashboard
        }
      }), g(!1);
    }
  }, S = (_, k) => {
    const { config: z, filteredData: M } = N.cloneDeep(a);
    for (let $ = 0; $ < z.dashboard.sharedFilters.length; $++) {
      const q = z.dashboard.sharedFilters[$];
      if (q.setBy === _) {
        q.columnName && (q.active = k[q.columnName]);
        break;
      }
    }
    const A = Re({ ...a, config: z }, M);
    o({ type: "SET_FILTERED_DATA", payload: A }), o({ type: "SET_CONFIG", payload: z }), o({ type: "SET_SHARED_FILTERS", payload: z.dashboard.sharedFilters });
  };
  v.useEffect(() => {
    var M;
    const { config: _ } = a, k = Ul(_, t && !D), z = Tt(_.dashboard.sharedFilters, a.data);
    (M = b(z, c, k)) == null || M.then((A) => {
      A.every((q) => q.type === "datafilter" || q.active) && C(A);
    });
  }, [t, D, (ce = a.config) == null ? void 0 : ce.activeDashboard]);
  const T = (_, k) => {
    const z = N.cloneDeep(a.config), M = N.pick(z, ["visualizations", "multiDashboards"]);
    if (M.visualizations[_] = k, M.visualizations[_].formattedData = z.visualizations[_].formattedData, z.multiDashboards) {
      const A = z.activeDashboard, $ = [...z.multiDashboards], H = { label: $[A].label, visualizations: M.visualizations, ...N.pick(z, ["dashboard", "rows"]) };
      $[A] = H, M.multiDashboards = $;
    }
    o({ type: "SET_CONFIG", payload: M }), t && l.setTempConfig(M);
  }, R = new Ja((_) => {
    for (let k of _) {
      let z = er(k.contentRect.width);
      u(z);
    }
  }), V = v.useCallback((_) => {
    _ !== null && R.observe(_);
  }, []);
  if (a.loading)
    return /* @__PURE__ */ r.createElement(Ot, null);
  let G = null;
  if (t && !D) {
    let _ = !1;
    be(a.config).forEach((k) => {
      var q;
      const z = (q = f[k]) == null ? void 0 : q.row, M = qa(
        k,
        z,
        a.config,
        a.data,
        a.filteredData
      );
      M.uid = k, M.type === "footnotes" && (M.formattedData = void 0);
      const A = a.config.dashboard.sharedFilters && a.config.dashboard.sharedFilters.filter((H) => H.setBy === k).length > 0, $ = A ? a.config.dashboard.sharedFilters.filter((H) => H.setBy === k)[0].active : void 0;
      if (M.editing) {
        _ = !0;
        const H = (Z) => {
          let W = M.originalFormattedData ? { ...Z, formattedData: M.originalFormattedData } : Z;
          T(k, W);
        };
        switch (M.type) {
          case "chart":
            G = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(se, { visualizationKey: k, subEditor: "Chart" }), /* @__PURE__ */ r.createElement(
              aa,
              {
                key: k,
                config: M,
                isEditor: !0,
                isDebug: n,
                setConfig: H,
                setSharedFilter: A ? S : void 0,
                setSharedFilterValue: $,
                dashboardConfig: a.config,
                isDashboard: !0,
                configUrl: void 0,
                setEditing: void 0,
                hostname: void 0,
                link: void 0
              }
            ));
            break;
          case "map":
            G = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(se, { visualizationKey: k, subEditor: "Map" }), /* @__PURE__ */ r.createElement(
              ia,
              {
                key: k,
                config: M,
                isEditor: !0,
                isDebug: n,
                setConfig: H,
                setSharedFilter: A ? S : void 0,
                setSharedFilterValue: $,
                isDashboard: !0,
                showLoader: !1,
                dashboardConfig: a.config
              }
            ));
            break;
          case "data-bite":
            G = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(se, { visualizationKey: k, subEditor: "Data Bite" }), /* @__PURE__ */ r.createElement(
              oa,
              {
                key: k,
                config: { ...M, newViz: !0 },
                isEditor: !0,
                setConfig: H,
                isDashboard: !0
              }
            ));
            break;
          case "waffle-chart":
            G = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(se, { visualizationKey: k, subEditor: "Waffle Chart" }), /* @__PURE__ */ r.createElement(
              sa,
              {
                key: k,
                config: M,
                isEditor: !0,
                setConfig: H,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "markup-include":
            G = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(se, { visualizationKey: k, subEditor: "Markup Include" }), /* @__PURE__ */ r.createElement(
              la,
              {
                key: k,
                config: M,
                isEditor: !0,
                setConfig: H,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "filtered-text":
            G = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(se, { visualizationKey: k, subEditor: "Filtered Text" }), /* @__PURE__ */ r.createElement(
              Fa,
              {
                key: k,
                config: M,
                isEditor: !0,
                setConfig: H,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "dashboardFilters":
            G = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(se, { visualizationKey: k, subEditor: "Filter Dropdowns" }), /* @__PURE__ */ r.createElement(
              ja,
              {
                isEditor: !0,
                visualizationConfig: M,
                apiFilterDropdowns: c,
                setConfig: H
              }
            ));
            break;
          case "table":
            G = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(se, { visualizationKey: k, subEditor: "Table" }), /* @__PURE__ */ r.createElement(
              xt,
              {
                visualizationKey: k,
                config: M,
                isEditor: !0,
                updateConfig: H
              }
            ));
            break;
          case "footnotes":
            G = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(se, { visualizationKey: k, subEditor: "Footnotes" }), /* @__PURE__ */ r.createElement(
              Ke,
              {
                visualizationKey: k,
                config: { ...M, datasets: a.config.datasets },
                isEditor: !0,
                updateConfig: (Z) => H(N.omit(Z, "datasets"))
              }
            ));
            break;
          default:
            G = /* @__PURE__ */ r.createElement(r.Fragment, null);
            break;
        }
      }
    }), _ || (G = /* @__PURE__ */ r.createElement(Ko, { backend: As }, /* @__PURE__ */ r.createElement("div", { className: "header-container" }, /* @__PURE__ */ r.createElement(se, null), /* @__PURE__ */ r.createElement(ol, null)), /* @__PURE__ */ r.createElement("div", { className: "layout-container" }, /* @__PURE__ */ r.createElement(Xs, null))));
  } else {
    const { config: _ } = a, { title: k, description: z } = _.dashboard || {}, M = _.rows && _.rows.filter((A) => A.columns.filter(($) => $.widget).length !== 0);
    G = /* @__PURE__ */ r.createElement(r.Fragment, null, t && /* @__PURE__ */ r.createElement(se, null), I && /* @__PURE__ */ r.createElement(br, { fullScreen: !0 }), /* @__PURE__ */ r.createElement(xa, { isEditor: t && !D }), i.map((A, $) => /* @__PURE__ */ r.createElement(
      ir,
      {
        type: "danger",
        onDismiss: () => s({ type: "DISMISS_ERROR_MESSAGE", payload: $ }),
        message: A,
        autoDismiss: !0
      }
    )), /* @__PURE__ */ r.createElement(ye.Responsive, { isEditor: t }, /* @__PURE__ */ r.createElement("div", { className: `cdc-dashboard-inner-container${t ? " is-editor" : ""}` }, /* @__PURE__ */ r.createElement(
      ea,
      {
        title: k,
        isDashboard: !0,
        classes: ["dashboard-title", `${_.dashboard.theme ?? "theme-blue"}`]
      }
    ), z && /* @__PURE__ */ r.createElement("div", { className: "subtext mb-3" }, ta(z)), M && M.map((A, $) => {
      if (A.multiVizColumn && (D || !t)) {
        const H = Re(a, N.cloneDeep(a.data))[$] ?? A.formattedData, Z = {};
        return H.forEach((W) => {
          const j = W[A.multiVizColumn];
          Z[j] || (Z[j] = []), Z[j].push(W);
        }), /* @__PURE__ */ r.createElement(r.Fragment, null, !d && A.expandCollapseAllButtons === !0 && /* @__PURE__ */ r.createElement(Bl, { setAllExpanded: O }), Object.keys(Z).map((W) => {
          const j = Z[W];
          return /* @__PURE__ */ r.createElement(
            Kn,
            {
              key: `row__${$}__${W}`,
              allExpanded: h,
              filteredDataOverride: j,
              groupName: W,
              row: A,
              rowIndex: $,
              setSharedFilter: S,
              updateChildConfig: T,
              apiFilterDropdowns: c,
              currentViewport: p,
              inNoDataState: d,
              isLastRow: $ === M.length - 1
            }
          );
        }));
      } else
        return /* @__PURE__ */ r.createElement(
          Kn,
          {
            key: `row__${$}`,
            allExpanded: !1,
            groupName: "",
            row: A,
            rowIndex: $,
            setSharedFilter: S,
            updateChildConfig: T,
            apiFilterDropdowns: c,
            currentViewport: p,
            inNoDataState: d,
            isLastRow: $ === M.length - 1
          }
        );
    }), d ? /* @__PURE__ */ r.createElement("div", { className: "mt-5" }, "Please complete your selection to continue.") : /* @__PURE__ */ r.createElement(r.Fragment, null), /* @__PURE__ */ r.createElement("section", { className: "download-buttons" }, ((Mt = _.table) == null ? void 0 : Mt.downloadImageButton) && /* @__PURE__ */ r.createElement(
      en.Button,
      {
        title: "Download Dashboard as Image",
        type: "image",
        state: _,
        text: "Download Dashboard Image",
        elementToCapture: E
      }
    ), (($t = _.table) == null ? void 0 : $t.downloadPdfButton) && /* @__PURE__ */ r.createElement(
      en.Button,
      {
        title: "Download Dashboard as PDF",
        type: "pdf",
        state: _,
        text: "Download Dashboard PDF",
        elementToCapture: E
      }
    )), ((Bt = _.table) == null ? void 0 : Bt.show) && _.data && /* @__PURE__ */ r.createElement(
      gt,
      {
        config: _,
        rawData: (Ut = (Vt = _.data) == null ? void 0 : Vt[0]) != null && Ut.tableData ? (Ht = (zt = _.data) == null ? void 0 : zt[0]) == null ? void 0 : Ht.tableData : _.data,
        runtimeData: (Gt = (jt = _.data) == null ? void 0 : jt[0]) != null && Gt.tableData ? (Wt = (qt = _.data) == null ? void 0 : qt[0]) == null ? void 0 : Wt.tableData : _.data || [],
        expandDataTable: _.table.expanded,
        showDownloadButton: _.table.download,
        tableTitle: _.dashboard.title || "",
        viewport: p,
        tabbingId: _.dashboard.title || "",
        outerContainerRef: V,
        imageRef: E,
        isDebug: n,
        isEditor: t
      }
    ), ((Qt = _.table) == null ? void 0 : Qt.show) && _.datasets && Object.keys(_.datasets).map((A) => {
      var Z, W, j, ue, ve;
      const $ = be(_).filter((de) => _.visualizations[de].dataKey === A);
      let q = [];
      (Z = _.dashboard.sharedFilters) == null || Z.forEach((de) => {
        let X = !0;
        $.forEach((ke) => {
          de.usedBy && de.usedBy.indexOf(ke) === -1 && (X = !1);
        }), X && q.push(de);
      });
      const H = q.length > 0 ? Ie(q, _.datasets[A].data) : void 0;
      return /* @__PURE__ */ r.createElement(
        "div",
        {
          className: "multi-table-container",
          id: `data-table-${A}`,
          key: `data-table-${A}`
        },
        /* @__PURE__ */ r.createElement(
          gt,
          {
            config: _,
            dataConfig: _.datasets[A],
            rawData: ((j = (W = _.datasets[A].data) == null ? void 0 : W[0]) == null ? void 0 : j.tableData) || _.datasets[A].data,
            runtimeData: ((ve = (ue = _.datasets[A].data) == null ? void 0 : ue[0]) == null ? void 0 : ve.tableData) || H || _.datasets[A].data || [],
            expandDataTable: _.table.expanded,
            tableTitle: A,
            viewport: p,
            tabbingId: A
          }
        )
      );
    }))));
  }
  const B = ["cdc-open-viz-module", "type-dashboard", `${p}`];
  return /* @__PURE__ */ r.createElement(Ls, null, /* @__PURE__ */ r.createElement(
    ee.Provider,
    {
      value: {
        ...a,
        setParentConfig: l.setTempConfig,
        outerContainerRef: V,
        isDebug: n,
        loadAPIFilters: b,
        setAPIFilterDropdowns: m,
        reloadURLData: C,
        setAPILoading: g
      }
    },
    /* @__PURE__ */ r.createElement(ne.Provider, { value: o }, /* @__PURE__ */ r.createElement("div", { className: B.join(" "), ref: V, "data-download-id": E }, G), /* @__PURE__ */ r.createElement(Ms, null))
  ));
}
const Jn = {
  dashboard: {
    theme: "theme-blue",
    sharedFilters: []
  },
  rows: [[{ width: 12 }, {}, {}]],
  visualizations: {},
  table: {
    label: "Data Table",
    show: !0,
    showDownloadUrl: !1,
    showDownloadLinkBelow: !0,
    showVertical: !0
  }
}, Hl = async (e) => {
  let t = e.formattedData || e.data;
  return e.dataUrl && (t = await xe(`${e.dataUrl}`), t = De(t, e.dataDescription)), t;
}, Sc = ({ configUrl: e, isEditor: t, isDebug: n }) => {
  const [a, o] = v.useState(void 0), i = v.useContext(ra), s = (E) => {
    if (!E.multiDashboards)
      return null;
    const h = _t()["cove-tab"];
    return h !== void 0 && Number(h) < E.multiDashboards.length ? Number(h) : 0;
  }, l = (E, h) => {
    const [O, I] = St(Qe)(E, h), g = ca(O);
    return { ...Qe, config: g, filteredData: I, data: h };
  }, c = async () => {
    const E = i.config || await (await fetch(e)).json(), h = s(E), { newConfig: O, datasets: I } = h !== null ? await u(E, h) : await p(E);
    o(l(O, I));
  };
  v.useEffect(() => {
    c();
  }, []);
  const m = (E) => {
    let h = { ...E };
    const O = Object.keys(E.datasets).reduce((I, g) => {
      const D = E.datasets[g];
      return I[g] = D.formattedData || D.data, I;
    }, {});
    return be(h).forEach((I) => {
      const g = O[h.visualizations[I].dataKey];
      g && (h.visualizations[I].formattedData = g);
    }), Object.keys(O).forEach((I) => {
      h.datasets[I].data = O[I];
    }), { newConfig: h, datasets: O };
  }, p = async (E) => {
    let h = { ...Jn, ...E };
    if (E.datasets)
      return m(h);
    {
      const O = h.dataFileName || "backwards-compatibility", I = await Hl(E), g = {};
      if (g[O] = {
        data: I,
        dataDescription: h.dataDescription
      }, h.datasets = g, be(h).forEach((f) => {
        const w = { dataKey: O, ...N.pick(h, "dataDescription", "formattedData") };
        h.visualizations[f] = { ...h.visualizations[f], ...w };
      }), h = { ...h, ...{
        data: [],
        dataUrl: "",
        dataFileName: "",
        dataFileSourceType: "",
        dataDescription: {},
        formattedData: []
      } }, h.dashboard.filters) {
        const f = { ...h.dashboard };
        f.sharedFilters || (f.sharedFilters = []);
        const w = f.filters.map((y) => ({ ...y, key: y.label, showDropdown: !0, usedBy: be(h) }));
        f.sharedFilters = [...f.sharedFilters, ...w], h.dashboard = { ...f, filters: void 0 };
      }
      const d = { [O]: I };
      return { newConfig: h, datasets: d };
    }
  }, u = async (E, h) => {
    const O = E.multiDashboards[h], I = {
      ...Jn,
      ...E,
      ...O,
      multiDashboards: E.multiDashboards,
      activeDashboard: h
    };
    return m(I);
  };
  return a ? /* @__PURE__ */ r.createElement(zl, { isEditor: t, isDebug: n, initialState: a }) : /* @__PURE__ */ r.createElement(Ot, null);
};
export {
  Ls as G,
  Sc as M,
  Ms as O,
  pt as a,
  Ba as d
};
