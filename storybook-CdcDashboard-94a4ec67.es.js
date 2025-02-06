import { r as v, R as r } from "./storybook-index-45401197.es.js";
import { c as Qa, A as Za, V as Ka, F as Xa, a as Ya } from "./storybook-InputToggle-1e77d9ab.es.js";
import { i as Ja, g as er } from "./storybook-getViewport-513ec896.es.js";
import { T as ea, H as ta } from "./storybook-index-3b47b3f7.es.js";
import { f as Re } from "./storybook-fetchRemoteData-1d0a5295.es.js";
import { E as na, L as Ot } from "./storybook-viewports-5c5d7af1.es.js";
import { D as Se, A as tr, a as Zt, b as Kt, c as Xt, d as Yt } from "./storybook-DataTransform-6163e156.es.js";
import { b as nr, D as ar, f as rr, C as aa, a as ra } from "./storybook-CdcChartComponent-f9821d3b.es.js";
import { C as oa } from "./storybook-CdcDataBite-7aaaabf2.es.js";
import { e as or, C as ia, A as ir } from "./storybook-CdcMap-7a44998e.es.js";
import { C as sa } from "./storybook-CdcWaffleChart-89d05418.es.js";
import { C as la } from "./storybook-CdcMarkupInclude-6be71bc2.es.js";
import { A as xe, a as sr, b as nt, c as at, d as rt, e as ot } from "./storybook-Accordion-2501c7d9.es.js";
import { I as lr, a as _e } from "./storybook-editor-57986c01.es.js";
import { B as cr } from "./storybook-Button-63da743c.es.js";
import { a as R } from "./storybook-Icon-4f5978ba.es.js";
import { T as P } from "./storybook-Tooltip-4102bd69.es.js";
import { I as ge } from "./storybook-InputSelect-20478396.es.js";
import { L as ye, u as ur, c as ca } from "./storybook-coveUpdateWorker-4c7dbbf1.es.js";
import { u as It } from "./storybook-updateFieldFactory-c006040a.es.js";
import { D as dr } from "./storybook-DataDesigner-1d516d20.es.js";
import { P as ke } from "./storybook-index-43433e35.es.js";
import { C as Ve, T as Y, S as fr } from "./storybook-Inputs-b80d0cf3.es.js";
import { _ as A } from "./storybook-lodash-a4231e1c.es.js";
import { u as mr, g as ua, f as Jt, a as pr, F as gr, b as _t, c as da, d as Pe, e as hr } from "./storybook-Filters-ce4a04a7.es.js";
import { D as gt, M as en } from "./storybook-DataTable-897188ef.es.js";
import { F as re } from "./storybook-FilterStyles-fd509eb9.es.js";
import { D as vr } from "./storybook-DashboardFilters-3d2191b7.es.js";
import { M as it } from "./storybook-MultiSelect-d587cce3.es.js";
import { F as yr } from "./storybook-Footnotes-108c3a2d.es.js";
import { L as br } from "./storybook-Loader-f4ec7b29.es.js";
import { j as Er } from "./storybook-jsx-runtime-36872362.es.js";
var fa = v.createContext({
  dragDropManager: void 0
}), oe;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(oe || (oe = {}));
function L(e, t) {
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
var kt = "dnd-core/INIT_COORDS", Ke = "dnd-core/BEGIN_DRAG", Nt = "dnd-core/PUBLISH_DRAG_SOURCE", Xe = "dnd-core/HOVER", Ye = "dnd-core/DROP", Je = "dnd-core/END_DRAG";
function tn(e, t) {
  return {
    type: kt,
    payload: {
      sourceClientOffset: t || null,
      clientOffset: e || null
    }
  };
}
function Ue(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ue = function(n) {
    return typeof n;
  } : Ue = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ue(e);
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
  return Ue(e) === "object";
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
    var f = Nr(n, c);
    if (f === null) {
      e.dispatch(Cr);
      return;
    }
    var d = null;
    if (s) {
      if (!l)
        throw new Error("getSourceClientOffset must be defined");
      _r(l), d = l(f);
    }
    e.dispatch(tn(s, d));
    var y = m.getSource(f), h = y.beginDrag(c, f);
    if (h != null) {
      kr(h), m.pinSource(f);
      var I = m.getSourceType(f);
      return {
        type: Ke,
        payload: {
          itemType: I,
          item: h,
          sourceId: f,
          clientOffset: s || null,
          sourceClientOffset: d || null,
          isSourcePublic: !!i
        }
      };
    }
  };
}
function Ir(e, t, n) {
  L(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(a) {
    L(n.getSource(a), "Expected sourceIds to be registered.");
  });
}
function _r(e) {
  L(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function kr(e) {
  L(ma(e), "Item must be an object.");
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
      type: Xe,
      payload: {
        targetIds: i,
        clientOffset: o || null
      }
    };
  };
}
function Lr(e) {
  L(Array.isArray(e), "Expected targetIds to be an array.");
}
function Pr(e, t, n) {
  L(t.isDragging(), "Cannot call hover while not dragging."), L(!t.didDrop(), "Cannot call hover after drop.");
  for (var a = 0; a < e.length; a++) {
    var o = e[a];
    L(e.lastIndexOf(o) === a, "Expected targetIds to be unique in the passed array.");
    var i = n.getTarget(o);
    L(i, "Expected targetIds to be registered.");
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
        type: Ye,
        payload: {
          dropResult: an(an({}, n), c)
        }
      };
      e.dispatch(m);
    });
  };
}
function Br(e) {
  L(e.isDragging(), "Cannot call drop while not dragging."), L(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function Vr(e, t, n, a) {
  var o = n.getTarget(e), i = o ? o.drop(a, e) : void 0;
  return Ur(i), typeof i > "u" && (i = t === 0 ? {} : a.getDropResult()), i;
}
function Ur(e) {
  L(typeof e > "u" || ma(e), "Drop result must either be an object or undefined.");
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
      type: Je
    };
  };
}
function jr(e) {
  L(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function qr(e) {
  return {
    beginDrag: Or(e),
    publishDragSource: Fr(e),
    hover: Ar(e),
    drop: $r(e),
    endDrag: Hr(e)
  };
}
function Gr(e, t) {
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
function Ne(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Qr = /* @__PURE__ */ function() {
  function e(t, n) {
    var a = this;
    Gr(this, e), Ne(this, "store", void 0), Ne(this, "monitor", void 0), Ne(this, "backend", void 0), Ne(this, "isSetUp", !1), Ne(this, "handleRefCountChange", function() {
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
          var f = s.apply(n, c);
          typeof f < "u" && a(f);
        };
      }
      var i = qr(this);
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
    case Ke:
      return {
        initialSourceClientOffset: n.sourceClientOffset,
        initialClientOffset: n.clientOffset,
        clientOffset: n.clientOffset
      };
    case Xe:
      return Kr(e.clientOffset, n.clientOffset) ? e : sn(sn({}, e), {}, {
        clientOffset: n.clientOffset
      });
    case Je:
    case Ye:
      return ln;
    default:
      return e;
  }
}
var Ft = "dnd-core/ADD_SOURCE", At = "dnd-core/ADD_TARGET", Lt = "dnd-core/REMOVE_SOURCE", et = "dnd-core/REMOVE_TARGET";
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
    type: et,
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
function ae(e) {
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
    case Ke:
      return ae(ae({}, e), {}, {
        itemType: n.itemType,
        item: n.item,
        sourceId: n.sourceId,
        isSourcePublic: n.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case Nt:
      return ae(ae({}, e), {}, {
        isSourcePublic: !0
      });
    case Xe:
      return ae(ae({}, e), {}, {
        targetIds: n.targetIds
      });
    case et:
      return e.targetIds.indexOf(n.targetId) === -1 ? e : ae(ae({}, e), {}, {
        targetIds: Sr(e.targetIds, n.targetId)
      });
    case Ye:
      return ae(ae({}, e), {}, {
        dropResult: n.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Je:
      return ae(ae({}, e), {}, {
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
    case et:
      return e - 1;
    default:
      return e;
  }
}
var Ge = [], Pt = [];
Ge.__IS_NONE__ = !0;
Pt.__IS_ALL__ = !0;
function lo(e, t) {
  if (e === Ge)
    return !1;
  if (e === Pt || typeof t > "u")
    return !0;
  var n = Tr(t, e);
  return n.length > 0;
}
function co() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case Xe:
      break;
    case Ft:
    case At:
    case et:
    case Lt:
      return Ge;
    case Ke:
    case Nt:
    case Je:
    case Ye:
    default:
      return Pt;
  }
  var t = e.payload, n = t.targetIds, a = n === void 0 ? [] : n, o = t.prevTargetIds, i = o === void 0 ? [] : o, s = wr(a, i), l = s.length > 0 || !Xr(a, i);
  if (!l)
    return Ge;
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
      L(typeof n == "function", "listener must be a function."), L(typeof i > "u" || Array.isArray(i), "handlerIds, when specified, must be an array of strings.");
      var s = this.store.getState().stateId, l = function() {
        var m = a.store.getState(), f = m.stateId;
        try {
          var d = f === s || f === s + 1 && !lo(m.dirtyHandlerIds, i);
          d || n();
        } finally {
          s = f;
        }
      };
      return this.store.subscribe(l);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(n) {
      var a = this;
      L(typeof n == "function", "listener must be a function.");
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
      return L(a, "Expected to find a valid source. sourceId=".concat(n)), this.isDragging() ? !1 : a.canDrag(this, n);
    }
  }, {
    key: "canDropOnTarget",
    value: function(n) {
      if (!n)
        return !1;
      var a = this.registry.getTarget(n);
      if (L(a, "Expected to find a valid target. targetId=".concat(n)), !this.isDragging() || this.didDrop())
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
      if (L(a, "Expected to find a valid source. sourceId=".concat(n)), !this.isDragging() || !this.isSourcePublic())
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
function ze(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ze = function(n) {
    return typeof n;
  } : ze = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ze(e);
}
function So(e) {
  L(typeof e.canDrag == "function", "Expected canDrag to be a function."), L(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), L(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function wo(e) {
  L(typeof e.canDrop == "function", "Expected canDrop to be a function."), L(typeof e.hover == "function", "Expected hover to be a function."), L(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function vt(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(function(n) {
      return vt(n, !1);
    });
    return;
  }
  L(typeof e == "string" || ze(e) === "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
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
    case oe.SOURCE:
      return "S".concat(t);
    case oe.TARGET:
      return "T".concat(t);
    default:
      throw new Error("Unknown Handler Role: ".concat(e));
  }
}
function vn(e) {
  switch (e[0]) {
    case "S":
      return oe.SOURCE;
    case "T":
      return oe.TARGET;
    default:
      L(!1, "Cannot parse handler ID: ".concat(e));
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
      var o = this.addHandler(oe.SOURCE, n, a);
      return this.store.dispatch(eo(o)), o;
    }
  }, {
    key: "addTarget",
    value: function(n, a) {
      vt(n, !0), wo(a);
      var o = this.addHandler(oe.TARGET, n, a);
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
      L(this.isSourceId(n), "Expected a valid source ID.");
      var o = a && n === this.pinnedSourceId, i = o ? this.pinnedSource : this.dragSources.get(n);
      return i;
    }
  }, {
    key: "getTarget",
    value: function(n) {
      return L(this.isTargetId(n), "Expected a valid target ID."), this.dropTargets.get(n);
    }
  }, {
    key: "getSourceType",
    value: function(n) {
      return L(this.isSourceId(n), "Expected a valid source ID."), this.types.get(n);
    }
  }, {
    key: "getTargetType",
    value: function(n) {
      return L(this.isTargetId(n), "Expected a valid target ID."), this.types.get(n);
    }
  }, {
    key: "isSourceId",
    value: function(n) {
      var a = vn(n);
      return a === oe.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(n) {
      var a = vn(n);
      return a === oe.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(n) {
      var a = this;
      L(this.getSource(n), "Expected an existing source."), this.store.dispatch(no(n)), No(function() {
        a.dragSources.delete(n), a.types.delete(n);
      });
    }
  }, {
    key: "removeTarget",
    value: function(n) {
      L(this.getTarget(n), "Expected an existing target."), this.store.dispatch(ao(n)), this.dropTargets.delete(n), this.types.delete(n);
    }
  }, {
    key: "pinSource",
    value: function(n) {
      var a = this.getSource(n);
      L(a, "Expected an existing source."), this.pinnedSourceId = n, this.pinnedSource = a;
    }
  }, {
    key: "unpinSource",
    value: function() {
      L(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function(n, a, o) {
      var i = $o(n);
      return this.types.set(i, a), n === oe.SOURCE ? this.dragSources.set(i, o) : n === oe.TARGET && this.dropTargets.set(i, o), i;
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
  return Wo(e) || Go(e, t) || qo(e, t) || jo();
}
function jo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qo(e, t) {
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
function Go(e, t) {
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
var En = 0, He = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), Ko = v.memo(function(t) {
  var n = t.children, a = Qo(t, zo), o = Xo(a), i = Ho(o, 2), s = i[0], l = i[1];
  return v.useEffect(function() {
    if (l) {
      var c = ya();
      return ++En, function() {
        --En === 0 && (c[He] = null);
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
  return o[He] || (o[He] = {
    dragDropManager: Vo(e, t, n, a)
  }), o[He];
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
      L(!st, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
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
      L(!lt, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
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
      L(!ct, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
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
  return L(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? v.cloneElement(e, {
    ref: function(o) {
      Cn(n, o), Cn(t, o);
    }
  }) : v.cloneElement(e, {
    ref: t
  });
}
function je(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? je = function(n) {
    return typeof n;
  } : je = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, je(e);
}
function yt(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && je(e) === "object" && Object.prototype.hasOwnProperty.call(e, "current")
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
    var f = e[m], d = t[m];
    if (o = n ? n.call(a, f, d, m) : void 0, o === !1 || o === void 0 && f !== d)
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
function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ui = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    li(this, e), Z(this, "hooks", ba({
      dragSource: function(o, i) {
        n.clearDragSource(), n.dragSourceOptions = i || null, yt(o) ? n.dragSourceRef = o : n.dragSourceNode = o, n.reconnectDragSource();
      },
      dragPreview: function(o, i) {
        n.clearDragPreview(), n.dragPreviewOptions = i || null, yt(o) ? n.dragPreviewRef = o : n.dragPreviewNode = o, n.reconnectDragPreview();
      }
    })), Z(this, "handlerId", null), Z(this, "dragSourceRef", null), Z(this, "dragSourceNode", void 0), Z(this, "dragSourceOptionsInternal", null), Z(this, "dragSourceUnsubscribe", void 0), Z(this, "dragPreviewRef", null), Z(this, "dragPreviewNode", void 0), Z(this, "dragPreviewOptionsInternal", null), Z(this, "dragPreviewUnsubscribe", void 0), Z(this, "lastConnectedHandlerId", null), Z(this, "lastConnectedDragSource", null), Z(this, "lastConnectedDragSourceOptions", null), Z(this, "lastConnectedDragPreview", null), Z(this, "lastConnectedDragPreviewOptions", null), Z(this, "backend", void 0), this.backend = t;
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
function de(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var mi = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    di(this, e), de(this, "hooks", ba({
      dropTarget: function(o, i) {
        n.clearDropTarget(), n.dropTargetOptions = i, yt(o) ? n.dropTargetRef = o : n.dropTargetNode = o, n.reconnect();
      }
    })), de(this, "handlerId", null), de(this, "dropTargetRef", null), de(this, "dropTargetNode", void 0), de(this, "dropTargetOptionsInternal", null), de(this, "unsubscribeDropTarget", void 0), de(this, "lastConnectedHandlerId", null), de(this, "lastConnectedDropTarget", null), de(this, "lastConnectedDropTargetOptions", null), de(this, "backend", void 0), this.backend = t;
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
function Ie() {
  var e = v.useContext(fa), t = e.dragDropManager;
  return L(t != null, "Expected drag drop context"), t;
}
function Ei(e) {
  return v.useMemo(function() {
    var t = e.type;
    return L(t != null, "spec.type must be defined"), t;
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
  var a = Ie(), o = bi(e, t, n), i = Ei(e);
  Ee(function() {
    if (i != null) {
      var l = gi(i, o, a), c = Di(l, 2), m = c[0], f = c[1];
      return t.receiveHandlerId(m), n.receiveHandlerId(m), f;
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
  var e = Ie();
  return v.useMemo(function() {
    return new ti(e);
  }, [e]);
}
function Li(e, t) {
  var n = Ie(), a = v.useMemo(function() {
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
function qi(e, t, n) {
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
  return qi(t, e || function() {
    return {};
  }, function() {
    return n.reconnect();
  });
}
function Gi(e) {
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
  L(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var a = Ai(), o = Li(n.options, n.previewOptions);
  return Oi(n, a, o), [Da(n.collect, a, o), Gi(o), Wi(o)];
}
function Zi(e) {
  var t = e.accept;
  return v.useMemo(function() {
    return L(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t];
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
  var a = Ie(), o = Ji(e, t), i = Zi(e);
  Ee(function() {
    var l = pi(i, o, a), c = es(l, 2), m = c[0], f = c[1];
    return t.receiveHandlerId(m), n.receiveHandlerId(m), f;
  }, [a, t, o, n, i.map(function(s) {
    return s.toString();
  }).join("|")]);
}
function is() {
  var e = Ie();
  return v.useMemo(function() {
    return new ri(e);
  }, [e]);
}
function ss(e) {
  var t = Ie(), n = v.useMemo(function() {
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
function Fe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $n = /* @__PURE__ */ function() {
  function e(t, n) {
    hs(this, e), Fe(this, "xs", void 0), Fe(this, "ys", void 0), Fe(this, "c1s", void 0), Fe(this, "c2s", void 0), Fe(this, "c3s", void 0);
    for (var a = t.length, o = [], i = 0; i < a; i++)
      o.push(i);
    o.sort(function(S, C) {
      return t[S] < t[C] ? -1 : 1;
    });
    for (var s = [], l = [], c, m, f = 0; f < a - 1; f++)
      c = t[f + 1] - t[f], m = n[f + 1] - n[f], s.push(c), l.push(m / c);
    for (var d = [l[0]], y = 0; y < s.length - 1; y++) {
      var h = l[y], I = l[y + 1];
      if (h * I <= 0)
        d.push(0);
      else {
        c = s[y];
        var O = s[y + 1], p = c + O;
        d.push(3 * p / ((p + O) / h + (p + c) / I));
      }
    }
    d.push(l[l.length - 1]);
    for (var D = [], u = [], g, b = 0; b < d.length - 1; b++) {
      g = l[b];
      var w = d[b], E = 1 / s[b], T = w + d[b + 1] - g - g;
      D.push((g - w - T) * E), u.push(T * E * E);
    }
    this.xs = t, this.ys = n, this.c1s = d, this.c2s = D, this.c3s = u;
  }
  return vs(e, [{
    key: "interpolate",
    value: function(n) {
      var a = this.xs, o = this.ys, i = this.c1s, s = this.c2s, l = this.c3s, c = a.length - 1;
      if (n === a[c])
        return o[c];
      for (var m = 0, f = l.length - 1, d; m <= f; ) {
        d = Math.floor(0.5 * (m + f));
        var y = a[d];
        if (y < n)
          m = d + 1;
        else if (y > n)
          f = d - 1;
        else
          return o[d];
      }
      c = Math.max(0, f);
      var h = n - a[c], I = h * h;
      return o[c] + i[c] * h + s[c] * I + l[c] * h * I;
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
function Me(e) {
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
  }, m = e.offsetWidth, f = e.offsetHeight, d = a.anchorX, y = a.anchorY, h = Es(i, t, m, f), I = h.dragPreviewWidth, O = h.dragPreviewHeight, p = function() {
    var T = new $n([0, 0.5, 1], [
      // Dock to the top
      c.y,
      // Align at the center
      c.y / f * O,
      // Dock to the bottom
      c.y + O - f
    ]), S = T.interpolate(y);
    return wa() && i && (S += (window.devicePixelRatio - 1) * O), S;
  }, D = function() {
    var T = new $n([0, 0.5, 1], [
      // Dock to the left
      c.x,
      // Align at the center
      c.x / m * I,
      // Dock to the right
      c.x + I - m
    ]);
    return T.interpolate(d);
  }, u = o.offsetX, g = o.offsetY, b = u === 0 || u, w = g === 0 || g;
  return {
    x: b ? u : D(),
    y: w ? g : p()
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
function $e(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Dt = (Ce = {}, $e(Ce, Ca, {
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
}), $e(Ce, _a, {
  exposeProperties: {
    html: function(t, n) {
      return dt(t, n, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), $e(Ce, Oa, {
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
}), $e(Ce, Ia, {
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
function qn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Ns(e, t, n) {
  return t && qn(e.prototype, t), n && qn(e, n), e;
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
        var l = Me(i);
        o.monitor.isDragging() && o.actions.endDrag(), o.actions.beginDrag(s || [], {
          publishSource: !1,
          getSourceClientOffset: o.getSourceClientOffset,
          clientOffset: l
        });
        var c = i.dataTransfer, m = ft(c);
        if (o.monitor.isDragging()) {
          if (c && typeof c.setDragImage == "function") {
            var f = o.monitor.getSourceId(), d = o.sourceNodes.get(f), y = o.sourcePreviewNodes.get(f) || d;
            if (y) {
              var h = o.getCurrentSourcePreviewNodeOptions(), I = h.anchorX, O = h.anchorY, p = h.offsetX, D = h.offsetY, u = {
                anchorX: I,
                anchorY: O
              }, g = {
                offsetX: p,
                offsetY: D
              }, b = Ds(d, y, l, u, g);
              c.setDragImage(y, b.x, b.y);
            }
          }
          try {
            c == null || c.setData("application/json", {});
          } catch {
          }
          o.setCurrentDragSourceNode(i.target);
          var w = o.getCurrentSourcePreviewNodeOptions(), E = w.captureDraggingState;
          E ? o.actions.publishDragSource() : setTimeout(function() {
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
          clientOffset: Me(i)
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
      o.altKeyPressed = i.altKey, o.lastClientOffset = Me(i), o.hoverRafId === null && typeof requestAnimationFrame < "u" && (o.hoverRafId = requestAnimationFrame(function() {
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
        clientOffset: Me(i)
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
  const [t, n] = v.useState({}), a = (m, f = !1) => {
    let d = { object: m, show: !0, disableBgClose: f };
    n((y) => ({ ...y, overlay: { ...d } }));
  }, o = (m = !1) => {
    n((f) => ({
      ...f,
      overlay: {
        ...f.overlay,
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
}, Ps = "Dashboard Description", We = {
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
  ...We
}, J = v.createContext(Rs), te = v.createContext(() => {
});
const xs = ({ disableBgClose: e, children: t, override: n = null }) => {
  let { overlay: a } = pe();
  const [o, i] = v.useState(!1), [s, l] = v.useState(null), [c, m] = v.useState(!1), f = n ? n == null ? void 0 : n.show : a == null ? void 0 : a.show;
  return v.useEffect(() => {
    if (f === void 0 || f === !1)
      return;
    document.body.style.overflow = "hidden", i(!0), l("animate-in");
    const d = setTimeout(() => {
      l("show");
    }, 750);
    return () => clearTimeout(d);
  }, [f]), v.useEffect(() => {
    if (f === void 0 || f === !0)
      return;
    l("animate-out");
    const d = setTimeout(() => {
      l(null), i(!1), document.body.style.overflow = null;
    }, 400);
    return () => clearTimeout(d);
  }, [f]), v.useEffect(() => {
    if (c === !1)
      return;
    const d = setTimeout(() => {
      m(!1);
    }, 400);
    return () => clearTimeout(d);
  }, [c]), /* @__PURE__ */ r.createElement(r.Fragment, null, o && /* @__PURE__ */ r.createElement("div", { className: `cove-overlay${s ? " " + s : ""}${c ? " overlay-error" : ""}` }, /* @__PURE__ */ r.createElement("div", { className: "cove-overlay__bg", style: { cursor: e ? "default" : null }, onClick: (d) => e ? m(!0) : a ? a.actions.toggleOverlay(!1) : n ? n.actions.toggleOverlay(!1) : d.preventDefault(), role: "alert" }), /* @__PURE__ */ r.createElement("div", { className: "cove-overlay__wrapper" }, /* @__PURE__ */ r.createElement("div", { className: "cove-overlay__container" }, t))));
}, Ms = () => {
  const { overlay: e } = pe();
  return /* @__PURE__ */ r.createElement(xs, { disableBgClose: e.disableBgClose }, e.object);
}, Na = v.createContext({}), Be = {
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
  const { config: t, updateConfig: n, loading: a, stateData: o, setParentConfig: i, isDashboard: s } = v.useContext(Na), [l, c] = v.useState(!0), [m, f] = v.useState(!1), d = It(t, n, !0), y = (E) => {
    let T = [...t.filters];
    T.splice(E, 1), n({ ...t, filters: T });
  }, h = (E, T, S) => {
    let C = [...t.filters];
    C[T][E] = S, n({ ...t, filters: C });
  }, I = () => {
    let E = t.filters ? [...t.filters] : [];
    E.push({ values: [] }), n({ ...t, filters: E });
  }, O = (E = !0) => {
    let T = {};
    return o.length && o.map((S) => Object.keys(S).forEach((C) => T[C] = !0)), Object.keys(T);
  }, p = (E) => {
    let T = [];
    const S = t.filters[E].columnName;
    return o && S && (o.forEach(function(C) {
      C[S] !== void 0 && T.indexOf(C[S]) === -1 && T.push(C[S]);
    }), T.sort()), T;
  };
  v.useEffect(() => {
    if (i) {
      const E = b();
      i(E);
    }
  }, [t]), v.useEffect(() => {
    if (!m) {
      let E = { ...t };
      delete E.newViz, n(E);
    }
  }, []);
  const D = () => {
    c(!l), n({
      ...t,
      showEditorPanel: !l
    });
  }, u = () => /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ r.createElement("p", null, t.runtime.editorErrorMessage))), g = () => {
    const E = (T) => {
      T.preventDefault();
      let S = { ...t };
      delete S.newViz, n(S);
    };
    return /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ r.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the markup."), /* @__PURE__ */ r.createElement("button", { className: "btn btn-primary", style: { margin: "1em auto" }, onClick: E }, "I'm Done")));
  }, b = () => {
    let E = JSON.parse(JSON.stringify(t));
    return delete E.newViz, delete E.runtime, E;
  }, w = /* @__PURE__ */ r.createElement(xe, null, /* @__PURE__ */ r.createElement(xe.Section, { title: "General" }, /* @__PURE__ */ r.createElement(
    lr,
    {
      value: t.title,
      fieldName: "title",
      label: "Title",
      placeholder: "Filterable Text Title",
      updateField: d
    }
  )), /* @__PURE__ */ r.createElement(xe.Section, { title: "Data" }, /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ r.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ r.createElement(
    ge,
    {
      value: t.textColumn || "",
      fieldName: "textColumn",
      label: "Text Column",
      updateField: d,
      initial: "Select",
      options: O()
    }
  ))), /* @__PURE__ */ r.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ r.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ r.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(P.Target, null, /* @__PURE__ */ r.createElement(R, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(P.Content, null, /* @__PURE__ */ r.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), t.filters && /* @__PURE__ */ r.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, t.filters.map((E, T) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: T }, /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        y(T);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: E.columnName,
      onChange: (S) => {
        h("columnName", T, S.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    O().map((S, C) => /* @__PURE__ */ r.createElement("option", { value: S, key: C }, S))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: E.columnValue,
      onChange: (S) => {
        h("columnValue", T, S.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    p(T).map((S, C) => /* @__PURE__ */ r.createElement("option", { value: S, key: C }, S))
  ))))), /* @__PURE__ */ r.createElement(cr, { onClick: I, fluid: !0 }, "Add Filter")), /* @__PURE__ */ r.createElement(xe.Section, { title: "Visual" }, /* @__PURE__ */ r.createElement(
    ge,
    {
      value: t.fontSize,
      fieldName: "fontSize",
      label: "Font Size",
      updateField: d,
      options: ["small", "medium", "large"]
    }
  ), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Theme"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, $s.map((E) => /* @__PURE__ */ r.createElement(
    "li",
    {
      title: E,
      key: E,
      onClick: () => {
        n({ ...t, theme: E });
      },
      className: t.theme === E ? "selected " + E : E
    }
  )))), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ r.createElement(
    _e,
    {
      inline: !0,
      size: "small",
      value: t.visual.border,
      section: "visual",
      fieldName: "border",
      label: "Display Border",
      updateField: d
    }
  ), /* @__PURE__ */ r.createElement(
    _e,
    {
      inline: !0,
      size: "small",
      value: t.visual.borderColorTheme,
      section: "visual",
      fieldName: "borderColorTheme",
      label: "Use theme border color",
      updateField: d
    }
  ), /* @__PURE__ */ r.createElement(
    _e,
    {
      size: "small",
      value: t.visual.accent,
      section: "visual",
      fieldName: "accent",
      label: "Use Accent Style",
      updateField: d
    }
  ), /* @__PURE__ */ r.createElement(
    _e,
    {
      size: "small",
      value: t.visual.background,
      section: "visual",
      fieldName: "background",
      label: "Use Theme Background Color",
      updateField: d
    }
  ), /* @__PURE__ */ r.createElement(
    _e,
    {
      size: "small",
      value: t.visual.hideBackgroundColor,
      section: "visual",
      fieldName: "hideBackgroundColor",
      label: "Hide Background Color",
      updateField: d
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
    !t.newViz && t.runtime && t.runtime.editorErrorMessage && /* @__PURE__ */ r.createElement(u, null),
    t.newViz && m && /* @__PURE__ */ r.createElement(g, null),
    w
  ));
});
const Fa = ({ config: e, configUrl: t, isDashboard: n = !1, isEditor: a = !1, setConfig: o }) => {
  const i = new Se(), [s, l] = v.useState(Be), [c, m] = v.useState(!0), [f, d] = v.useState(s.data || []), [y, h] = v.useState();
  let { title: I, filters: O } = s;
  const p = s.fontSize === "small" ? "16px" : s.fontSize === "medium" ? "22px" : "27px", { contentClasses: D, innerContainerClasses: u } = ur(s), g = async () => {
    let S = e || await (await fetch(t)).json(), C = S.formattedData || S.data || {};
    S.dataUrl && (C = await (await fetch(S.dataUrl)).json(), S.dataDescription && (C = i.autoStandardize(C), C = i.developerStandardize(C, S.dataDescription))), C && (d(C), h(C));
    let k = { ...s, ...S };
    const V = { ...ca(k) };
    b(V), m(!1);
  }, b = (S) => {
    Object.keys(Be).forEach((C) => {
      S[C] && typeof S[C] == "object" && !Array.isArray(S[C]) && (S[C] = { ...Be[C], ...S[C] });
    }), S.runtime = {}, S.runtime.uniqueId = Date.now(), S.runtime.editorErrorMessage = "", l(S);
  }, w = () => {
    let S = [];
    if (O.length)
      O.map((C) => C.columnName && C.columnValue ? S = f.filter(function(k) {
        return k[C.columnName] === C.columnValue;
      }) : null);
    else
      return S = f.filter((C, k) => C[s.textColumn] && k === 0);
    return S;
  };
  v.useEffect(() => {
    g().catch((S) => console.log(S));
  }, []), v.useEffect(() => {
    e && !e.dataUrl && (b({ ...Be, ...e }), d(e.data), h(e.data));
  }, [e == null ? void 0 : e.data]);
  let E = /* @__PURE__ */ r.createElement(Ot, null);
  if (c === !1) {
    let S = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ye.Responsive, { isEditor: a }, /* @__PURE__ */ r.createElement("div", { className: "cove-component__content no-borders" }, /* @__PURE__ */ r.createElement(ea, { classes: [`${s.theme}`], title: I, style: { fontSize: p } }), /* @__PURE__ */ r.createElement("div", { className: `${D.join(" ")} body` }, w().slice(0, 1).map((C, k) => /* @__PURE__ */ r.createElement("p", { style: { fontSize: p }, key: k }, " ", ta(C[s.textColumn] || ""), " "))))));
    E = /* @__PURE__ */ r.createElement(r.Fragment, null, a && /* @__PURE__ */ r.createElement(Bs, null), S);
  }
  const T = {
    config: s,
    updateConfig: b,
    loading: c,
    setParentConfig: o,
    isDashboard: n,
    stateData: f,
    unfilteredData: f
  };
  return /* @__PURE__ */ r.createElement(na, { component: "CdcFilteredText" }, /* @__PURE__ */ r.createElement(Na.Provider, { value: T }, /* @__PURE__ */ r.createElement(ye.VisualizationWrapper, { config: s, isEditor: a, showEditorPanel: s == null ? void 0 : s.showEditorPanel }, E)));
}, he = {
  "data-bite": /* @__PURE__ */ r.createElement(R, { display: "databite", base: !0 }),
  Bar: /* @__PURE__ */ r.createElement(R, { display: "chartBar", base: !0 }),
  "Spark Line": /* @__PURE__ */ r.createElement(R, { display: "chartLine" }),
  "Bump Chart": /* @__PURE__ */ r.createElement(R, { display: "chartLine" }),
  "waffle-chart": /* @__PURE__ */ r.createElement(R, { display: "grid", base: !0 }),
  "markup-include": /* @__PURE__ */ r.createElement(R, { display: "code", base: !0 }),
  Line: /* @__PURE__ */ r.createElement(R, { display: "chartLine", base: !0 }),
  Pie: /* @__PURE__ */ r.createElement(R, { display: "chartPie", base: !0 }),
  us: /* @__PURE__ */ r.createElement(R, { display: "mapUsa", base: !0 }),
  "us-county": /* @__PURE__ */ r.createElement(R, { display: "mapUsa", base: !0 }),
  world: /* @__PURE__ */ r.createElement(R, { display: "mapWorld", base: !0 }),
  "single-state": /* @__PURE__ */ r.createElement(R, { display: "mapAl", base: !0 }),
  gear: /* @__PURE__ */ r.createElement(R, { display: "gear", base: !0 }),
  gearMulti: /* @__PURE__ */ r.createElement(R, { display: "gearMulti", base: !0 }),
  tools: /* @__PURE__ */ r.createElement(R, { display: "tools", base: !0 }),
  "filtered-text": /* @__PURE__ */ r.createElement(R, { display: "filtered-text", base: !0 }),
  dashboardFilters: /* @__PURE__ */ r.createElement(R, { display: "dashboardFilters", base: !0 }),
  table: /* @__PURE__ */ r.createElement(R, { display: "table", base: !0 }),
  Sankey: /* @__PURE__ */ r.createElement(R, { display: "sankey", base: !0 })
}, Vs = (e) => {
  const { type: t, visualizationType: n, general: a } = e;
  return n ? he[n] : a != null && a.geoType ? a.geoType === "single-state" ? he.us : he[a.geoType] : he[t];
};
const Aa = () => null, La = (e) => e, Pa = () => null, fe = ({ fontTheme: e = "dark", headerBgColor: t = "#fff", showDividerTop: n = !0, showDividerBottom: a = !0, showClose: o = !0, children: i, override: s = null }) => {
  let { overlay: l } = pe();
  const c = v.Children.toArray(i), m = c.find((h) => (h == null ? void 0 : h.type) === Aa), f = c.find((h) => (h == null ? void 0 : h.type) === La), d = c.find((h) => (h == null ? void 0 : h.type) === Pa), y = (h) => h ? null : "none";
  return /* @__PURE__ */ r.createElement("div", { className: `cove-modal cove-modal__theme--${e}` }, (o || m) && /* @__PURE__ */ r.createElement(
    "div",
    {
      className: "cove-modal__header",
      style: {
        backgroundColor: t,
        boxShadow: y(m && n),
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
      /* @__PURE__ */ r.createElement(R, { display: "close" })
    )
  ), /* @__PURE__ */ r.createElement("div", { className: "cove-modal__content" }, f && f.props.children), d && /* @__PURE__ */ r.createElement(
    "div",
    {
      className: "cove-modal__footer",
      style: {
        boxShadow: y(a),
        paddingTop: a ? "1rem" : null
      }
    },
    d.props.children
  ));
};
fe.Header = Aa;
fe.Content = La;
fe.Footer = Pa;
fe.propTypes = {
  fontTheme: ke.oneOf(["dark", "light"]),
  headerBgColor: ke.string,
  showDividerTop: ke.bool,
  showDividerBottom: ke.bool,
  showClose: ke.bool
};
const Ra = ({ vizKey: e, rowIndex: t }) => {
  var u;
  const { config: n } = v.useContext(J), { overlay: a } = pe(), o = new Se(), i = v.useContext(te), [s, l] = v.useState(!1), [c, m] = v.useState(!e), [f, d] = v.useState(!!n.rows[t].multiVizColumn), y = v.useMemo(() => e && !c ? n.visualizations[e] : n.rows[t], [n.visualizations, n.rows, e, t, c]), h = (g) => {
    i(e && !c ? { type: "UPDATE_VISUALIZATION", payload: { vizKey: e, configureData: g } } : { type: "UPDATE_ROW", payload: { rowIndex: t, rowData: g } });
  }, I = ({ target: { value: g } }) => {
    h({ dataDescription: {}, formattedData: void 0, dataKey: g });
  }, O = async (g, b) => {
    const w = y.dataKey, { data: E, dataUrl: T } = n.datasets[w];
    let S = E;
    !E && T && (S = await Re(T), S = o.autoStandardize(S));
    const C = { ...y.dataDescription, [g]: b }, k = { data: S, dataDescription: C, formattedData: o.developerStandardize(S, C) };
    h(k), l(!0);
  }, p = (g) => {
    g !== "" && (i({ type: "UPDATE_ROW", payload: { rowIndex: t, rowData: { multiVizColumn: g } } }), l(!0));
  }, D = (g) => {
    i({ type: "UPDATE_ROW", payload: { rowIndex: t, rowData: { expandCollapseAllButtons: g } } }), l(!0);
  };
  return /* @__PURE__ */ r.createElement(fe, null, /* @__PURE__ */ r.createElement(fe.Content, null, /* @__PURE__ */ r.createElement("div", { className: "dataset-selector-container" }, "Select a dataset: ", /* @__PURE__ */ r.createElement("select", { className: "dataset-selector", value: y.dataKey || "", onChange: I }, /* @__PURE__ */ r.createElement("option", { value: "" }, "Select a dataset"), n.datasets && Object.keys(n.datasets).map((g) => /* @__PURE__ */ r.createElement("option", { key: g }, g))), e && /* @__PURE__ */ r.createElement(
    Ve,
    {
      label: "Apply To Row",
      value: c,
      updateField: (g, b, w, E) => {
        m(E), I({ target: { value: "" } });
      }
    }
  )), y.dataKey && /* @__PURE__ */ r.createElement(
    dr,
    {
      configureData: y,
      visualizationKey: e,
      updateDescriptionProp: O
    }
  ), c && y.dataKey ? f ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ge, { options: Object.keys(((u = n.datasets[y.dataKey]) == null ? void 0 : u.data[0]) || {}), value: n.rows[t].multiVizColumn, label: "Multi-Visualization Column", initial: "--Select--", updateField: (g, b, w, E) => p(E), required: !0 }), /* @__PURE__ */ r.createElement(Ve, { value: n.rows[t].expandCollapseAllButtons, label: " Add Expand/Collapse All buttons", fieldName: "", updateField: (g, b, w, E) => D(E) })) : /* @__PURE__ */ r.createElement(
    Ve,
    {
      label: "Configure Multiple Visualizations",
      value: f,
      tooltip: /* @__PURE__ */ r.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(P.Target, null, /* @__PURE__ */ r.createElement(R, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(P.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can select a column where for each unique value in the column the configuration for the row will be repeated in to the data preview."))),
      updateField: (g, b, w, E) => {
        s && E === !0 && l(!1), d(E);
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
}, X = ({ title: e, widgetConfig: t, addVisualization: n, type: a }) => {
  var b;
  const { overlay: o } = pe(), { config: i, data: s } = v.useContext(J), l = v.useContext(te), c = new Se(), m = (w, E) => {
    let T = E.getDropResult();
    if (!T)
      return null;
    const { rowIdx: S, colIdx: C } = T;
    if ((t == null ? void 0 : t.rowIdx) !== void 0)
      l({ type: "MOVE_VISUALIZATION", payload: { rowIdx: S, colIdx: C, widget: t } });
    else if (n) {
      const k = n();
      l({ type: "ADD_VISUALIZATION", payload: { newViz: k, rowIdx: S, colIdx: C } });
    }
  }, [{ isDragging: f, ...d }, y] = Qi(
    {
      type: "vis-widget",
      end: m,
      collect: (w) => ({
        isDragging: w.isDragging()
      })
    },
    [i.activeDashboard, i.rows, i.dashboard.sharedFilters]
  ), h = () => {
    t && l({
      type: "DELETE_WIDGET",
      payload: { uid: t.uid }
    });
  }, I = (w, E) => {
    const T = new URL(w);
    return T.searchParams.set("$limit", E), T.href.replace(/%24/g, "$");
  }, O = () => {
    var S;
    const w = ((S = i.rows[t.rowIdx]) == null ? void 0 : S.dataKey) || (t == null ? void 0 : t.dataKey), E = i.datasets[w], T = s[E == null ? void 0 : E.dataUrl];
    if (T && !T.length) {
      const C = I(E.dataUrl, 100);
      Re(C).then((k) => {
        k.sample = !0, l({ type: "SET_DATA", payload: { ...s, [w]: k } });
      });
    }
  }, p = () => {
    t && (l({
      type: "UPDATE_VISUALIZATION",
      payload: { vizKey: t.uid, configureData: { editing: !0 } }
    }), O());
  };
  let D = !1;
  const u = !!((b = i.rows[t == null ? void 0 : t.rowIdx]) != null && b.dataKey);
  if (u || ["dashboardFilters", "markup-include"].includes(a))
    D = !0;
  else if (t != null && t.formattedData)
    D = !0;
  else if (t != null && t.dataKey && (t != null && t.dataDescription) && i.datasets[t.dataKey]) {
    const w = c.autoStandardize(i.datasets[t.dataKey].data);
    !!c.developerStandardize(w, t.dataDescription) && (D = !0);
  }
  const g = !u && (t == null ? void 0 : t.type) !== "dashboardFilters";
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "widget", ref: y, style: { opacity: f ? 0.5 : 1 }, ...d }, /* @__PURE__ */ r.createElement(R, { display: "move", className: "drag-icon" }), /* @__PURE__ */ r.createElement("div", { className: "widget__content" }, (t == null ? void 0 : t.rowIdx) !== void 0 && /* @__PURE__ */ r.createElement("div", { className: "widget-menu" }, D && /* @__PURE__ */ r.createElement("button", { title: "Configure Visualization", className: "btn btn-configure", onClick: p }, he.tools), g && /* @__PURE__ */ r.createElement(
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
  ), /* @__PURE__ */ r.createElement("div", { className: "widget-menu-item", onClick: h }, /* @__PURE__ */ r.createElement(R, { display: "close", base: !0 }))), he[a], /* @__PURE__ */ r.createElement("span", null, Us[a]), /* @__PURE__ */ r.createElement("span", null, e), (t == null ? void 0 : t.newViz) && a !== "dashboardFilters" && /* @__PURE__ */ r.createElement("span", { onClick: p, className: "config-needed" }, "Configuration needed"))));
}, zs = ({ data: e, rowIdx: t, colIdx: n }) => {
  var f;
  const { config: a } = v.useContext(J), [{ isOver: o, canDrop: i }, s] = cs(
    () => ({
      accept: "vis-widget",
      drop: () => ({
        rowIdx: t,
        colIdx: n,
        canDrop: i
      }),
      canDrop: () => !e.widget,
      collect: (d) => ({
        isOver: d.isOver(),
        canDrop: !!d.canDrop()
      })
    }),
    [a.activeDashboard]
  ), l = e.widget ? a == null ? void 0 : a.visualizations[e.widget] : null;
  l && !l.uid && (l.uid = e.widget);
  let c = ["builder-column", "column-size--" + e.width];
  o && i && c.push("column--drop"), l && c.push("column--populated");
  const m = (d) => {
    var y;
    if (d)
      return d.type === "map" ? d.general.title : d.type === "markup-include" ? (y = d.contentEditor) == null ? void 0 : y.title : d.title;
  };
  return /* @__PURE__ */ r.createElement("div", { className: c.join(" "), ref: s }, l ? /* @__PURE__ */ r.createElement(
    X,
    {
      title: m(l),
      widgetConfig: { rowIdx: t, colIdx: n, ...l },
      type: l.visualizationType ?? ((f = l.general) == null ? void 0 : f.geoType)
    }
  ) : /* @__PURE__ */ r.createElement("p", { className: "builder-column__text" }, "Drag and drop ", /* @__PURE__ */ r.createElement("br", null), " visualization"));
}, Hs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M2,16 L22,16 L22,14 L2,14 L2,16 Z M2,11 L22,11 L22,9 L2,9 L2,11 Z M2,4 L2,6 L22,6 L22,4 L2,4 Z" })), js = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22 14L22 16 13 16 13 14 22 14zM11 16L2 16 2 14 11 14 11 16zM22 4L22 6 13 6 13 4 22 4zM11 6L2 6 2 4 11 4 11 6zM22 9L22 11 13 11 13 9 22 9zM11 11L2 11 2 9 11 9 11 11z" })), qs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22,14 L22,16 L17,16 L17,14 L22,14 Z M7,14 L7,16 L2,16 L2,14 L7,14 Z M15,14 L15,16 L9,16 L9,14 L15,14 Z M22,9 L22,11 L17,11 L17,9 L22,9 Z M7,9 L7,11 L2,11 L2,9 L7,9 Z M15,9 L15,11 L9,11 L9,9 L15,9 Z M22,4 L22,6 L17,6 L17,4 L22,4 Z M7,4 L7,6 L2,6 L2,4 L7,4 Z M15,4 L15,6 L9,6 L9,4 L15,4 Z" })), Gs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22,14 L22,16 L10,16 L10,14 L22,14 Z M8,14 L8,16 L2,16 L2,14 L8,14 Z M22,9 L22,11 L10,11 L10,9 L22,9 Z M8,9 L8,11 L2,11 L2,9 L8,9 Z M22,4 L22,6 L10,6 L10,4 L22,4 Z M8,4 L8,6 L2,6 L2,4 L8,4 Z" })), Ws = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22,14 L22,16 L16,16 L16,14 L22,14 Z M14,14 L14,16 L2,16 L2,14 L14,14 Z M22,9 L22,11 L16,11 L16,9 L22,9 Z M14,9 L14,11 L2,11 L2,9 L14,9 Z M22,4 L22,6 L16,6 L16,4 L22,4 Z M14,4 L14,6 L2,6 L2,4 L14,4 Z" })), Qs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" })), Zs = ({ rowIdx: e }) => {
  const { config: t } = v.useContext(J), n = v.useContext(te), a = A.cloneDeep(t.rows), o = t.rows[e], i = (d) => n({ type: "UPDATE_CONFIG", payload: [d] }), s = v.useMemo(() => o.toggle ? "toggle" : o.columns.reduce((d, y) => (y.width && (d += y.width), d), ""), [o]), l = (d, y = void 0) => {
    const h = A.cloneDeep(a);
    h[e].toggle = y;
    const I = h[e].columns, O = I.filter((D) => D.widget);
    if (!(O.length > d.length)) {
      {
        const D = I.length > d.length ? O : I;
        h[e].columns = d.map((u, g) => {
          const b = D[g];
          return b ? { ...b, width: u } : { width: u };
        });
      }
      i({ ...t, rows: h });
    }
  }, c = (d = "down") => {
    if (e === a.length - 1 && d === "down")
      return;
    let y = d === "down" ? e + 1 : e - 1;
    const h = a[y];
    a[y] = o, a[e] = h, a[y].uuid = Date.now(), a[e].uuid = Date.now(), i({ ...t, rows: a });
    let I = d === "down" ? 202 : -202, O = d === "down" ? -202 : 202, p = document.querySelector("[data-row-id='" + e + "']"), D = document.querySelector("[data-row-id='" + y + "']");
    p.style.pointerEvents = "none", D.style.pointerEvents = "none", p.style.top = I + "px", D.style.top = O + "px", setTimeout(() => {
      p.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", D.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", p.style.top = "0", D.style.top = "0";
    }, 0), setTimeout(() => {
      p.setAttribute("style", ""), D.setAttribute("style", "");
    }, 500);
  }, m = () => {
    let d = { ...t.visualizations };
    a[e] && a[e].columns && a[e].columns.length && t.visualizations && a[e].columns.forEach((y) => {
      y.widget && delete d[y.widget];
    }), a.splice(e, 1), i({ ...t, rows: a, visualizations: d });
  }, f = [
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
      /* @__PURE__ */ r.createElement(qs, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: s === "48" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => l([4, 8]),
        key: "48",
        title: "2 Columns"
      },
      /* @__PURE__ */ r.createElement(Gs, null)
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
  return /* @__PURE__ */ r.createElement("nav", { className: "row-menu" }, /* @__PURE__ */ r.createElement("ul", { className: "row-menu__flyout" }, f), /* @__PURE__ */ r.createElement("div", { className: "spacer" }), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-primary row-menu__btn border-0",
      title: "Move Row Up",
      onClick: () => c("up"),
      disabled: e === 0
    },
    /* @__PURE__ */ r.createElement(R, { display: "caretUp", color: "#fff", size: 25 })
  ), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-primary row-menu__btn border-0",
      title: "Move Row Down",
      onClick: () => c("down"),
      disabled: e + 1 === a.length
    },
    /* @__PURE__ */ r.createElement(R, { display: "caretDown", color: "#fff", size: 25 })
  ), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-danger row-menu__btn row-menu__btn--remove border-0",
      title: "Delete Row",
      onClick: m,
      disabled: e === 0 && a.length === 1
    },
    /* @__PURE__ */ r.createElement(R, { display: "close", color: "#fff", size: 25 })
  ));
}, Ks = ({ row: e, idx: t, uuid: n }) => {
  const { overlay: a } = pe(), o = v.useContext(te), i = () => {
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
  const { config: e } = v.useContext(J);
  if (!e)
    return null;
  const t = e.rows, n = v.useContext(te), a = (i) => n({ type: "UPDATE_CONFIG", payload: [i] }), o = () => {
    const i = { columns: [{ width: 12 }] };
    a({
      ...e,
      rows: [...t, i],
      uuid: Date.now()
    });
  };
  return /* @__PURE__ */ r.createElement("div", { className: "builder-grid" }, (t || []).map((i, s) => /* @__PURE__ */ r.createElement(Ks, { row: i, idx: s, uuid: i.uuid, key: s })), /* @__PURE__ */ r.createElement("button", { className: "btn btn-primary col", onClick: o }, "Add Row"));
};
const Ys = (e) => /* @__PURE__ */ r.createElement(fe, null, /* @__PURE__ */ r.createElement(fe.Content, null, /* @__PURE__ */ r.createElement("p", null, "Are you sure you want to delete this dashboard? "), /* @__PURE__ */ r.createElement("button", { className: "btn btn-danger", onClick: e }, "DELETE"))), Js = ({ name: e, handleClick: t, tabs: n, index: a, active: o }) => {
  const [i, s] = v.useState(!1), l = v.useContext(te), { overlay: c } = pe(), m = v.createRef(), f = (p) => {
    p.stopPropagation();
    const D = m.current.value, u = D === e, g = !D, b = n.includes(D);
    !u && !g && !b && l({ type: "RENAME_DASHBOARD_TAB", payload: { current: e, new: D } }), s(!1);
  }, d = (p) => {
    p.target.className !== "remove" && (o ? s(!0) : t());
  }, y = () => {
    const p = () => {
      l({ type: "REMOVE_MULTIDASHBOARD_AT_INDEX", payload: a }), c == null || c.actions.toggleOverlay(!1);
    };
    c == null || c.actions.openOverlay(Ys(p));
  }, h = (p, D) => {
    const u = p + D;
    u > -1 && u <= n.length - 1 && l({ type: "REORDER_MULTIDASHBOARDS", payload: { currentIndex: p, newIndex: p + D } });
  }, I = a !== 0, O = a <= n.length - 2;
  return /* @__PURE__ */ r.createElement("li", { className: "nav-item d-flex mt-0" }, I && i && /* @__PURE__ */ r.createElement("button", { className: "border-0", onClick: () => h(a, -1) }, "<"), /* @__PURE__ */ r.createElement(
    "div",
    {
      className: `edit nav-link${o ? " active" : ""}`,
      "aria-current": o ? "page" : null,
      onClick: d
    },
    i ? /* @__PURE__ */ r.createElement("div", { className: "d-flex" }, /* @__PURE__ */ r.createElement("input", { type: "text", defaultValue: e, onBlur: f, ref: m }), /* @__PURE__ */ r.createElement("button", { className: "btn btn-link save", onClick: f }, "save")) : /* @__PURE__ */ r.createElement(r.Fragment, null, e, /* @__PURE__ */ r.createElement("button", { className: "btn btn-danger border-0 ms-1", onClick: y }, "X"))
  ), O && i && /* @__PURE__ */ r.createElement("button", { className: "border-0", onClick: () => h(a, 1) }, ">"));
}, el = () => {
  const { config: e } = v.useContext(J), t = v.useContext(te), n = v.useMemo(
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
  const { config: e } = v.useContext(J), t = v.useContext(te), n = v.useMemo(
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
}, xa = ({ isEditor: e = !1 }) => e ? /* @__PURE__ */ r.createElement(el, null) : /* @__PURE__ */ r.createElement(tl, null), ie = (e) => {
  var I, O;
  const t = ["Dashboard Description", "Data Table Settings", "Dashboard Preview"], { visualizationKey: n, subEditor: a } = e, { config: o, setParentConfig: i, tabSelected: s, data: l } = v.useContext(J);
  if (!o)
    return null;
  const c = v.useContext(te), m = () => {
    if (!n)
      return;
    const p = A.cloneDeep(o);
    if (p.visualizations[n].editing = !1, c({ type: "SET_CONFIG", payload: p }), Object.values(l).some((D) => D == null ? void 0 : D.sample)) {
      const D = Object.keys(l).reduce((u, g) => (l[g].sample ? u[g] = [] : u[g] = l[g], u), {});
      c({ type: "SET_DATA", payload: D });
    }
  }, f = (p, D, u) => {
    let g = { ...o };
    g[p] || (g[p] = {}), g[p][D] = u, c({ type: "UPDATE_CONFIG", payload: [g] });
  }, d = (p = "JSON") => {
    let D = JSON.parse(JSON.stringify(o));
    return delete D.newViz, delete D.runtime, p === "JSON" ? JSON.stringify(D) : D;
  };
  v.useEffect(() => {
    const p = d(), D = new CustomEvent("updateVizConfig", { detail: p });
    if (window.dispatchEvent(D), i) {
      const u = d("object");
      i(u);
    }
  }, [o]);
  const y = (p) => {
    const { checked: D } = p.currentTarget;
    D && c({ type: "INITIALIZE_MULTIDASHBOARDS" });
  }, h = !!o.multiDashboards;
  return /* @__PURE__ */ r.createElement("div", { "aria-level": 2, role: "heading", className: `editor-heading${a ? " sub-dashboard-viz" : ""}` }, a ? /* @__PURE__ */ r.createElement("div", { className: "heading-1 back-to", onClick: m, style: { cursor: "pointer" } }, /* @__PURE__ */ r.createElement("span", null, "←"), " Back to Dashboard") : /* @__PURE__ */ r.createElement("div", { className: "heading-1" }, "Dashboard Editor", " ", /* @__PURE__ */ r.createElement("span", { className: "small" }, /* @__PURE__ */ r.createElement("input", { type: "checkbox", onChange: y, checked: h, disabled: h }), " make multidashboard"), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      placeholder: "Enter Dashboard Name Here",
      defaultValue: (I = o.dashboard) == null ? void 0 : I.title,
      onChange: (p) => f("dashboard", "title", p.target.value)
    }
  )), !a && /* @__PURE__ */ r.createElement("div", { className: "toggle-bar__wrapper" }, /* @__PURE__ */ r.createElement(xa, { isEditor: !0 }), /* @__PURE__ */ r.createElement("ul", { className: "toggle-bar" }, t.map((p) => /* @__PURE__ */ r.createElement(
    "li",
    {
      key: p,
      className: s === p ? "active" : "inactive",
      onClick: () => {
        c({ type: "SET_TAB_SELECTED", payload: p });
      }
    },
    p
  ))), /* @__PURE__ */ r.createElement("div", { className: "heading-body" }, s === "Dashboard Description" && /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      className: "description-input",
      placeholder: "Type a dashboard description here.",
      defaultValue: (O = o.dashboard) == null ? void 0 : O.description,
      onChange: (p) => f("dashboard", "description", p.target.value)
    }
  ), s === "Data Table Settings" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "wrap" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.show,
      onChange: (p) => f("table", "show", p.target.checked)
    }
  ), "Show Data Table(s)"), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.expanded,
      onChange: (p) => f("table", "expanded", p.target.checked)
    }
  ), "Expanded by Default"), /* @__PURE__ */ r.createElement("br", null)), /* @__PURE__ */ r.createElement("div", { className: "wrap" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.limitHeight,
      onChange: (p) => f("table", "limitHeight", p.target.checked)
    }
  ), "Limit Table Height"), o.table.limitHeight && /* @__PURE__ */ r.createElement(
    "input",
    {
      className: "table-height-input",
      type: "text",
      placeholder: "Height (px)",
      defaultValue: o.table.height,
      onChange: (p) => f("table", "height", p.target.value)
    }
  )), /* @__PURE__ */ r.createElement("div", { className: "wrap" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.download,
      onChange: (p) => f("table", "download", p.target.checked)
    }
  ), "Show Download CSV Link"), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.showDownloadUrl,
      onChange: (p) => f("table", "showDownloadUrl", p.target.checked)
    }
  ), "Show URL to Automatically Updated Data"))))));
};
const Gn = new Se(), De = (e, t) => {
  if (e && t)
    try {
      let n = Gn.autoStandardize(e);
      return n = Gn.developerStandardize(e, t), n;
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
const ee = (e, t) => {
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
  const [e, t] = v.useState(!1), { config: n } = v.useContext(J), a = v.useContext(te), o = (i) => {
    const s = i.multiDashboards ? {
      ...n,
      ...i,
      ...i.multiDashboards[n.activeDashboard],
      activeDashboard: n.activeDashboard
    } : i;
    a({ type: "APPLY_CONFIG", payload: [rl(s)] });
  };
  return /* @__PURE__ */ r.createElement("div", { className: `visualizations-panel${e ? " advanced-editor" : ""}` }, /* @__PURE__ */ r.createElement("p", { style: { fontSize: "14px" } }, "Click and drag an item onto the grid to add it to your dashboard."), /* @__PURE__ */ r.createElement("span", { className: "subheading-3" }, "Chart"), /* @__PURE__ */ r.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ r.createElement(X, { addVisualization: () => ee("chart", "Bar"), type: "Bar" }), /* @__PURE__ */ r.createElement(X, { addVisualization: () => ee("chart", "Line"), type: "Line" }), /* @__PURE__ */ r.createElement(X, { addVisualization: () => ee("chart", "Pie"), type: "Pie" }), /* @__PURE__ */ r.createElement(X, { addVisualization: () => ee("chart", "Sankey"), type: "Sankey" })), /* @__PURE__ */ r.createElement("span", { className: "subheading-3" }, "Map"), /* @__PURE__ */ r.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ r.createElement(X, { addVisualization: () => ee("map", "us"), type: "us" }), /* @__PURE__ */ r.createElement(X, { addVisualization: () => ee("map", "world"), type: "world" }), /* @__PURE__ */ r.createElement(X, { addVisualization: () => ee("map", "single-state"), type: "single-state" })), /* @__PURE__ */ r.createElement("span", { className: "subheading-3" }, "Misc."), /* @__PURE__ */ r.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ r.createElement(X, { addVisualization: () => ee("data-bite", ""), type: "data-bite" }), /* @__PURE__ */ r.createElement(X, { addVisualization: () => ee("waffle-chart", ""), type: "waffle-chart" }), /* @__PURE__ */ r.createElement(X, { addVisualization: () => ee("markup-include", ""), type: "markup-include" }), /* @__PURE__ */ r.createElement(X, { addVisualization: () => ee("filtered-text", ""), type: "filtered-text" }), /* @__PURE__ */ r.createElement(X, { addVisualization: () => ee("dashboardFilters", ""), type: "dashboardFilters" }), /* @__PURE__ */ r.createElement(X, { addVisualization: () => ee("table", ""), type: "table" })), /* @__PURE__ */ r.createElement(
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
  const a = A.filter(t, (o) => {
    var i;
    return o.resetLabel === o.active ? (i = o.values) == null ? void 0 : i.includes(o.resetLabel) : !0;
  });
  return e.filter((o) => !a.find((s) => {
    var d;
    const l = o[s.columnName], c = s.queuedActive || s.filterStyle === re.nestedDropdown ? [s.active, (d = s.subGrouping) == null ? void 0 : d.active] : s.active;
    let m = !0;
    if (Array.isArray(c) ? m = !c.includes(l) : m = c && l != c, s.filterStyle === "nested-dropdown" && s.subGrouping && s.active === l && m === !1) {
      const y = s.subGrouping.active, h = o[s.subGrouping.columnName];
      m = y && h !== y;
    }
    const f = s.tier === n;
    if (s.type !== "urlfilter" && f && m)
      return !0;
  }));
}
const Oe = (e, t) => {
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
    const c = !!o.find((y) => y === s.setBy), m = t.dashboard.sharedFilters[l], f = (y) => {
      if (m.values = y, y.length > 0) {
        const h = m.pivot ? m.values : m.values[0], I = ua(m);
        I ? m.active = I : m.active = m.active || h;
      }
    }, d = sl(s.columnName, n || e.data);
    c ? (m.order === "asc" && d.sort(), m.order === "desc" && d.sort().reverse(), f(d)) : (!s.values || s.values.length === 0) && s.showDropdown && f(d);
  }), o.forEach((s) => {
    var m;
    const l = i[s];
    if ((m = t.rows[l]) != null && m.datakey)
      return;
    const c = t.dashboard.sharedFilters.filter((f) => f.usedBy && f.usedBy.indexOf(s) !== -1);
    if (c.length > 0) {
      const f = t.visualizations[s], d = t.datasets[f.dataKey], h = De((d == null ? void 0 : d.data) || f.data, f.dataDescription) || (n || e.data)[f.dataKey];
      a[s] = Oe(c, h);
    }
  }), t.rows.forEach((s, l) => {
    const c = t.dashboard.sharedFilters.filter((m) => m.usedBy && m.usedBy.indexOf(l) !== -1);
    if (c.length > 0) {
      const f = De(s.data, s.dataDescription) || (n || e.data)[l];
      a[l] = Oe(c, f);
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
        config: se(
          { ...e.config, rows: i, visualizations: { ...e.config.visualizations, [n]: o } },
          e.config.activeDashboard
        )
      };
    }
    case "ADD_NEW_DASHBOARD": {
      const n = e.config.multiDashboards, a = "New Dashboard " + (n.length + 1), o = [...n, { ...cl(), label: a }];
      return Ae(e, o);
    }
    case "UPDATE_CONFIG": {
      const [n, a] = St(e)(...t.payload);
      return { ...e, config: se(n, e.config.activeDashboard), filteredData: a };
    }
    case "APPLY_CONFIG": {
      const [n, a] = St(e)(...t.payload), o = [...Object.values(n.visualizations), ...n.rows].map((i) => i.dataKey).reduce((i, s) => {
        var c;
        const l = e.data[s] || ((c = e.config.datasets[s]) == null ? void 0 : c.data);
        return l && (i[s] = l), i;
      }, {});
      return { ...We, config: se(n, e.config.activeDashboard), filteredData: a, data: o };
    }
    case "SET_CONFIG":
      return t.payload.activeDashboard === void 0 || e.config.activeDashboard === t.payload.activeDashboard ? {
        ...e,
        config: se({ ...e.config, ...t.payload }, t.payload.activeDashboard)
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
        config: se({ ...e.config, dashboard: a }, e.config.activeDashboard)
      };
    }
    case "SET_TAB_SELECTED":
      return { ...e, tabSelected: t.payload };
    case "REMOVE_MULTIDASHBOARD_AT_INDEX": {
      const n = [...e.config.multiDashboards];
      A.remove(n, (o, i) => i === t.payload);
      const a = {
        ...e.config,
        multiDashboards: n,
        ...n[0],
        activeDashboard: 0
      };
      return n.length === 0 ? { ...e, config: A.omit(e.config, "multiDashboards") } : Ae({ ...e, config: a }, n);
    }
    case "RENAME_DASHBOARD_TAB": {
      const n = e.config.multiDashboards.map((o) => (o.label === t.payload.current && (o.label = t.payload.new), o)), a = { ...e.config, label: t.payload.new };
      return Ae({ ...e, newConfig: a }, n);
    }
    case "REORDER_MULTIDASHBOARDS": {
      const { newIndex: n, currentIndex: a } = t.payload, o = [...e.config.multiDashboards];
      o.splice(n, 0, o.splice(a, 1)[0]);
      const i = { ...e.config, activeDashboard: n };
      return Ae({ ...e, config: i }, o);
    }
    case "SAVE_CURRENT_CHANGES": {
      const n = e.config.activeDashboard, a = [...e.config.multiDashboards], o = a[n].label, i = A.pick(e.config, ["dashboard", "visualizations", "rows"]);
      a[n] = { ...i, label: o };
      const s = se(e.config, n);
      return { ...e, config: s };
    }
    case "INITIALIZE_MULTIDASHBOARDS": {
      const n = "New Dashboard 1", o = [{ ...A.pick(e.config, ["dashboard", "visualizations", "rows"]), label: n }], i = { ...e.config, activeDashboard: 0 };
      return Ae({ ...e, config: i }, o);
    }
    case "SWITCH_CONFIG": {
      const n = t.payload, a = e.config.multiDashboards[n], o = A.cloneDeep(e.data);
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
      const { newViz: n, rowIdx: a, colIdx: o } = t.payload, i = n.uid, s = A.cloneDeep(e.config.rows);
      return s[a].columns[o].widget = i, {
        ...e,
        config: se(
          { ...e.config, visualizations: { ...e.config.visualizations, [i]: n }, rows: s },
          e.config.activeDashboard
        )
      };
    }
    case "MOVE_VISUALIZATION": {
      const { rowIdx: n, colIdx: a, widget: o } = t.payload, i = A.cloneDeep(e.config.rows);
      return i[o.rowIdx].columns[o.colIdx].widget = null, i[n].columns[a].widget = o.uid, {
        ...e,
        config: se({ ...e.config, rows: i }, e.config.activeDashboard)
      };
    }
    case "UPDATE_VISUALIZATION": {
      const { vizKey: n, configureData: a } = t.payload, o = { ...e.config.visualizations[n], ...a };
      return {
        ...e,
        config: se(
          { ...e.config, visualizations: { ...e.config.visualizations, [n]: o } },
          e.config.activeDashboard
        )
      };
    }
    case "UPDATE_ROW": {
      const { rowIndex: n, rowData: a } = t.payload, o = e.config.rows.map((i, s) => s === n ? { ...i, ...a } : i);
      return { ...e, config: se({ ...e.config, rows: o }, e.config.activeDashboard) };
    }
    case "DELETE_WIDGET": {
      const { uid: n } = t.payload, a = A.cloneDeep(e.config.rows), o = A.cloneDeep(e.config.visualizations);
      delete o[n];
      const i = A.cloneDeep(e.config.dashboard.sharedFilters);
      i && i.length > 0 && i.forEach((l) => {
        l.usedBy && l.usedBy.indexOf(n) !== -1 && l.usedBy.splice(l.usedBy.indexOf(n), 1);
      });
      const s = A.map(a, (l) => ({
        ...l,
        columns: A.filter(l.columns, (c) => c.widget !== n)
      }));
      return {
        ...e,
        config: se(
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
}, se = (e, t) => {
  if (t === void 0)
    return e;
  const n = [...e.multiDashboards], a = n[t].label, o = A.pick(e, ["dashboard", "visualizations", "rows"]);
  return n[t] = { ...o, label: a }, { ...e, multiDashboards: n };
}, Ae = (e, t) => ({
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
      return A.remove(n, (a, o) => o === t.payload), n;
    }
  }
}, ml = Ba(fl);
const Va = ({ children: e, visualizationKey: t, visualizationConfig: n, type: a, component: o, updateConfig: i, viewport: s }) => {
  const [l, c] = r.useState(!0);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "editor-wrapper" }, /* @__PURE__ */ r.createElement("button", { className: `editor-toggle ${l ? "" : "collapsed"}`, title: l ? "Collapse Editor" : "Expand Editor", onClick: () => c(!l) }), /* @__PURE__ */ r.createElement("section", { className: `${l ? "" : "hidden"} editor-panel cove` }, /* @__PURE__ */ r.createElement("div", { "aria-level": 2, role: "heading", className: "heading-2" }, "Configure ", a), /* @__PURE__ */ r.createElement("section", null, e)), /* @__PURE__ */ r.createElement("div", { className: "preview-wrapper" }, /* @__PURE__ */ r.createElement(o, { visualizationKey: t, config: n, updateConfig: i, configUrl: void 0, setEditing: void 0, hostname: void 0, viewport: s }))));
}, pl = ({ config: e, updateConfig: t }) => {
  var i;
  const n = v.useMemo(() => It(e, t), [JSON.stringify(e)]), a = (s) => {
    const l = A.cloneDeep(e.columns);
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
    return /* @__PURE__ */ r.createElement("div", { role: "radio", className: c ? "selected" : "", key: s, onClick: () => o(s), onKeyUp: (m) => o(s, m), "aria-checked": c, tabIndex: 0, "aria-label": `Toggle ${l}` }, Vs(n[i.widget]), " ", /* @__PURE__ */ r.createElement("span", null, A.capitalize(l)));
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
  const o = A.cloneDeep(n), i = o[e];
  if (a.filterBehavior !== Ua.Apply || a.autoLoad)
    if ((i == null ? void 0 : i.filterStyle) === re.nestedDropdown)
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
}, Le = (e, t, n) => {
  const a = t || {}, { config: o } = e;
  return be(o).forEach((i) => {
    const s = wt(o.dashboard, i);
    if (s) {
      const { dataKey: l, data: c, dataDescription: m } = o.visualizations[i], f = (n || e.data)[l] || c, d = (n == null ? void 0 : n[l]) || (m ? De(f, m) : f);
      a[i] = Oe(s, d);
    }
  }), o.rows.forEach((i, s) => {
    if (i.dataKey) {
      const l = wt(o.dashboard, s), { dataKey: c, data: m, dataDescription: f } = i, d = (n || e.data)[c] || m;
      if (l) {
        const y = (n == null ? void 0 : n[c]) ?? f ? De(d, f) : d;
        a[s] = Oe(l, y);
      } else
        a[s] = d || [];
    }
  }), a;
}, Qe = (e) => Object.values(e).some((t) => t.filterBehavior === "Apply Button" && t.type === "dashboardFilters"), vl = ({
  filter: e,
  config: t,
  isDashboard: n = !1,
  updateFilterProp: a
}) => {
  const o = e == null ? void 0 : e.subGrouping, i = Object.keys(t.datasets), s = [];
  i.map((d) => {
    Object.keys(t.datasets[d].data[0]).forEach(
      (h) => s.push({
        datasetKey: d,
        columnName: h
      })
    );
  });
  const l = [], c = (d, y) => {
    s.forEach((h) => {
      h.datasetKey === d && h.columnName !== y && l.push(h.columnName);
    });
  }, m = (d) => {
    const y = d.selectedOptions[0].dataset.set, h = d.value;
    a("columnName", h), c(y, h);
  }, f = (d) => {
    const y = d.selectedOptions[0].dataset.set, h = d.value, I = e.values.reduce((p, D) => {
      const u = A.uniq(
        t.datasets[y].data.map((g) => g[e.columnName] === D ? g[h] : "").filter((g) => g !== "")
      ).sort();
      return p[D] = {
        values: u,
        orderedValues: u
      }, p;
    }, {}), O = {
      ...o,
      columnName: h,
      valuesLookup: I
    };
    a("subGrouping", O);
  };
  return /* @__PURE__ */ r.createElement("div", { className: "nesteddropdown-editor" }, !n && /* @__PURE__ */ r.createElement(
    Y,
    {
      label: "Label",
      value: e.key,
      updateField: (d, y, h, I) => a("key", I)
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter Grouping", /* @__PURE__ */ r.createElement("span", null)), /* @__PURE__ */ r.createElement("select", { value: e.columnName, onChange: (d) => m(d.target) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"), s == null ? void 0 : s.map((d) => /* @__PURE__ */ r.createElement(
    "option",
    {
      value: d.columnName,
      "data-set": d.datasetKey,
      key: `filter_${d.datasetKey}_${d.columnName} `
    },
    d.columnName
  )))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter SubGrouping", /* @__PURE__ */ r.createElement("span", null)), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: (o == null ? void 0 : o.columnName) ?? "",
      onChange: (d) => {
        f(d.target);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    s.map((d) => {
      if (d.columnName !== e.columnName)
        return /* @__PURE__ */ r.createElement(
          "option",
          {
            value: d.columnName,
            "data-set": d.datasetKey,
            key: `subFilter_${d.datasetKey}_${d.columnName} `
          },
          d.columnName
        );
    })
  )));
}, yl = ({ filter: e, filterIndex: t, config: n, updateFilterProp: a }) => {
  const [o, i] = v.useState([]), s = new Se(), l = Object.values(re), c = (n.dashboard.sharedFilters || []).filter(({ key: u, type: g }) => u !== e.key && g !== "datafilter").map(({ key: u }) => u), m = Rt(n.rows), [f, d] = v.useMemo(() => {
    const u = {}, g = Object.keys(n.visualizations).filter((E) => {
      var me;
      const T = m[E];
      if (!T)
        return !1;
      const S = n.visualizations[E];
      if (S.type === "dashboardFilters")
        return !1;
      const C = ((me = S.general) == null ? void 0 : me.title) || S.title || E;
      u[E] = C;
      const k = S.usesSharedFilter, V = T.row, j = n.rows[V].dataKey;
      return e.setBy !== E && !k && !j;
    }), b = [];
    n.rows.forEach((E, T) => {
      E.dataKey && (u[T] = `Row ${T + 1}`, b.push(T));
    });
    const w = b.filter((E) => !e.usedBy || e.usedBy.indexOf(E.toString()) === -1);
    return [u, [...g, ...w]];
  }, [n.visualizations, e.usedBy, e.setBy, m]), y = async () => {
    const u = {}, g = Object.keys(n.datasets);
    for (let b = 0; b < g.length; b++) {
      const w = g[b];
      let E = n.datasets[w];
      if (!E.data && E.dataUrl && (E = await Re(E.dataUrl), E.dataDescription))
        try {
          E = s.autoStandardize(E.data), E = s.developerStandardize(E.data, E.dataDescription);
        } catch {
        }
      E.data && E.data.forEach((T) => {
        Object.keys(T).forEach((S) => {
          u[S] = !0;
        });
      });
    }
    i(Object.keys(u));
  };
  v.useEffect(() => {
    y();
  }, [n.datasets]);
  const h = (u, g) => {
    const E = { ...A.cloneDeep(e).apiFilter || { apiEndpoint: "", valueSelector: "", textSelector: "" }, [u]: g };
    a("apiFilter", E);
  }, I = (u) => {
    a("filterStyle", u);
  }, O = (u) => {
    const g = n.dashboard.sharedFilters.filter(
      (b, w) => b.key === u && t !== w
    );
    a("key", g.length ? u + ` (${g.length})` : u);
  }, p = e.filterStyle === re.nestedDropdown, D = ({ isSubgroup: u = !1 }) => {
    var w, E, T;
    const g = u ? "subgroupTextSelector" : "textSelector", b = u ? "subgroupValueSelector" : "valueSelector";
    return /* @__PURE__ */ r.createElement(r.Fragment, null, !u && /* @__PURE__ */ r.createElement(
      Y,
      {
        label: "API Endpoint: ",
        value: (w = e.apiFilter) == null ? void 0 : w.apiEndpoint,
        updateField: (S, C, k, V) => h("apiEndpoint", V),
        tooltip: /* @__PURE__ */ r.createElement(r.Fragment, null, p && /* @__PURE__ */ r.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(P.Target, null, /* @__PURE__ */ r.createElement(R, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(P.Content, null, /* @__PURE__ */ r.createElement("p", null, "Your API Endpoint should return both value selector values."))))
      }
    ), /* @__PURE__ */ r.createElement("div", { className: p ? "border border-dark p-1 my-1" : "" }, /* @__PURE__ */ r.createElement(
      Y,
      {
        label: `${u ? "Subgroup " : ""}Value Selector:`,
        value: ((E = e == null ? void 0 : e.apiFilter) == null ? void 0 : E[b]) || "",
        updateField: (S, C, k, V) => h(b, V),
        tooltip: /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(P.Target, null, /* @__PURE__ */ r.createElement(R, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(P.Content, null, /* @__PURE__ */ r.createElement("p", null, "Value to use in the html option element"))), " * Required")
      }
    ), /* @__PURE__ */ r.createElement(
      Y,
      {
        label: `${u ? "Subgroup " : ""}Display Text Selector:`,
        value: ((T = e == null ? void 0 : e.apiFilter) == null ? void 0 : T[g]) || "",
        updateField: (S, C, k, V) => h(g, V),
        tooltip: /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(P.Target, null, /* @__PURE__ */ r.createElement(R, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(P.Content, null, /* @__PURE__ */ r.createElement("p", null, "Text to use in the html option element. If none is applied value selector will be used."))), " * Optional")
      }
    )));
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter Type: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.type || "",
      onChange: (u) => a("type", u.target.value),
      disabled: !!e.type
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    /* @__PURE__ */ r.createElement("option", { value: "urlfilter" }, "URL"),
    /* @__PURE__ */ r.createElement("option", { value: "datafilter" }, "Data")
  )), e.type !== void 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter Style: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.filterStyle || re.dropdown,
      onChange: (u) => I(u.target.value)
    },
    l.map((u) => /* @__PURE__ */ r.createElement("option", { value: u, key: `filter-style-select-item-${u}` }, u))
  )), e.filterStyle === re.dropdown && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "me-1" }, "Show Dropdown"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.showDropdown,
      onChange: (u) => {
        a("showDropdown", !e.showDropdown);
      }
    }
  )), /* @__PURE__ */ r.createElement(
    Y,
    {
      label: "Label",
      value: e.key,
      updateField: (u, g, b, w) => {
        O(w);
      }
    }
  ), e.filterStyle === re.multiSelect && /* @__PURE__ */ r.createElement(
    Y,
    {
      label: "Select Limit",
      value: e.selectLimit,
      updateField: (u, g, b, w) => a("selectLimit", w),
      type: "number",
      tooltip: /* @__PURE__ */ r.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(P.Target, null, /* @__PURE__ */ r.createElement(R, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(P.Content, null, /* @__PURE__ */ r.createElement("p", null, "The maximum number of items that can be selected.")))
    }
  ), e.type === "urlfilter" && /* @__PURE__ */ r.createElement(r.Fragment, null, !Qe(n.visualizations) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "URL to Filter: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.datasetKey || "",
      onChange: (u) => a("datasetKey", u.target.value)
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    Object.keys(n.datasets).map((u) => n.datasets[u].dataUrl ? /* @__PURE__ */ r.createElement("option", { key: u, value: u }, n.datasets[u].dataUrl) : null)
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter By: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.filterBy || "",
      onChange: (u) => a("filterBy", u.target.value)
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    /* @__PURE__ */ r.createElement("option", { key: "query-string", value: "Query String" }, "Query String"),
    /* @__PURE__ */ r.createElement("option", { key: "file-name", value: "File Name" }, "File Name")
  )), e.filterBy === "File Name" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Y,
    {
      label: "File Name: ",
      value: e.fileName || "",
      updateField: (u, g, b, w) => a("fileName", w),
      tooltip: /* @__PURE__ */ r.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(P.Target, null, /* @__PURE__ */ r.createElement(R, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(P.Content, null, /* @__PURE__ */ r.createElement("p", null, "Add ${query} to replace the filename with the active dropdown value.")))
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "White Space Replacments", /* @__PURE__ */ r.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(P.Target, null, /* @__PURE__ */ r.createElement(R, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(P.Content, null, /* @__PURE__ */ r.createElement("p", null, "Set how whitespace characters will be handled in the file request")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.whitespaceReplacement || "Keep Spaces",
      onChange: (u) => a("whitespaceReplacement", u.target.value)
    },
    /* @__PURE__ */ r.createElement("option", { key: "remove-spaces", value: "Remove Spaces" }, "Remove Spaces"),
    /* @__PURE__ */ r.createElement("option", { key: "replace-with-underscore", value: "Replace With Underscore" }, "Replace With Underscore"),
    /* @__PURE__ */ r.createElement("option", { key: "keep-spaces", value: "Keep Spaces" }, "Keep Spaces")
  )))), e.filterBy === "Query String" && /* @__PURE__ */ r.createElement(
    Y,
    {
      label: "Query string parameter",
      value: e.queryParameter,
      updateField: (u, g, b, w) => a("queryParameter", w)
    }
  ), /* @__PURE__ */ r.createElement(D, null), p && /* @__PURE__ */ r.createElement(D, { isSubgroup: !0 }), !!c.length && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading mt-1" }, "Parent Filter(s): "), /* @__PURE__ */ r.createElement(
    it,
    {
      label: "Parent Filter(s): ",
      options: c.map((u) => ({ value: u, label: u })),
      fieldName: "parents",
      selected: e.parents,
      updateField: (u, g, b, w) => {
        a("parents", w);
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading mt-1" }, "Used By: (optional)", /* @__PURE__ */ r.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(P.Target, null, /* @__PURE__ */ r.createElement(R, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(P.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select if you would like specific visualizations or rows to use this filter. Otherwise the filter will be added to all api requests.")))), /* @__PURE__ */ r.createElement(
    it,
    {
      options: d.map((u) => ({
        value: u,
        label: f[u]
      })),
      fieldName: "usedBy",
      selected: e.usedBy,
      updateField: (u, g, b, w) => {
        a("usedBy", w);
      }
    }
  )), /* @__PURE__ */ r.createElement(
    Y,
    {
      label: "Reset Label: ",
      value: e.resetLabel || "",
      updateField: (u, g, b, w) => a("resetLabel", w)
    }
  ), /* @__PURE__ */ r.createElement(
    Y,
    {
      label: "Default Value Set By Query String Parameter: ",
      value: e.setByQueryParameter || "",
      updateField: (u, g, b, w) => a("setByQueryParameter", w)
    }
  )), e.type === "datafilter" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.filterStyle !== re.nestedDropdown ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.columnName,
      onChange: (u) => {
        a("columnName", u.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    o.map((u) => /* @__PURE__ */ r.createElement("option", { value: u, key: `filter-column-select-item-${u}` }, u))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Show Dropdown"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: e.showDropdown === !0,
      onChange: (u) => {
        a("showDropdown", !e.showDropdown);
      }
    }
  ))) : /* @__PURE__ */ r.createElement(
    vl,
    {
      filter: e,
      updateFilterProp: (u, g) => {
        a(u, g);
      },
      isDashboard: !0,
      config: n
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Set By: "), /* @__PURE__ */ r.createElement("select", { value: e.setBy, onChange: (u) => a("setBy", u.target.value) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"), Object.keys(n.visualizations).filter((u) => n.visualizations[u].type !== "dashboardFilters").map((u) => {
    var b;
    const g = n.visualizations[u];
    return /* @__PURE__ */ r.createElement("option", { value: u, key: `set-by-select-item-${u}` }, ((b = g.general) == null ? void 0 : b.title) || g.title || u);
  }))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading mt-1" }, "Used By: (optional)", /* @__PURE__ */ r.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(P.Target, null, /* @__PURE__ */ r.createElement(R, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(P.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select if you would like specific visualizations or rows to use this filter. Otherwise the filter will be added to all api requests.")))), /* @__PURE__ */ r.createElement(
    it,
    {
      options: d.map((u) => ({
        value: u,
        label: f[u]
      })),
      fieldName: "usedBy",
      selected: e.usedBy,
      updateField: (u, g, b, w) => {
        a("usedBy", w);
      }
    }
  )), /* @__PURE__ */ r.createElement(
    Y,
    {
      label: "Reset Label: ",
      value: e.resetLabel || "",
      updateField: (u, g, b, w) => a("resetLabel", w)
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Parent Filter: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.parents || [],
      onChange: (u) => {
        a("parents", u.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "Select a filter"),
    n.dashboard.sharedFilters && n.dashboard.sharedFilters.map((u) => {
      if (u.key !== e.key)
        return /* @__PURE__ */ r.createElement("option", { key: u.key }, u.key);
    })
  )), /* @__PURE__ */ r.createElement(
    Y,
    {
      label: "Default Value Set By Query String Parameter: ",
      value: e.setByQueryParameter || "",
      updateField: (u, g, b, w) => a("setByQueryParameter", w)
    }
  ))));
}, bl = ({
  removeFilterCompletely: e,
  removeFilterFromViz: t,
  filterIndex: n
}) => {
  const { overlay: a } = pe(), { config: o } = v.useContext(J), i = Object.values(o.visualizations).filter((l) => {
    var c;
    return (c = l.sharedFilterIndexes) == null ? void 0 : c.map(Number).includes(Number(n));
  }).length > 1, s = i ? "This filter is used by multiple visualizations. You can either delete the filter from this visualization only or you can delete the filter completely, which will also remove it from other visualizations." : "Are you sure you want to delete this filter?";
  return /* @__PURE__ */ r.createElement(fe, { showClose: !0 }, /* @__PURE__ */ r.createElement(fe.Content, null, /* @__PURE__ */ r.createElement("p", null, s), i && /* @__PURE__ */ r.createElement(
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
  const i = A.cloneDeep(a), s = El(Dl(a), t);
  if (i.values = s, s.length > 0) {
    const l = ua(i);
    if (l)
      i.active = l;
    else if (a.multiSelect) {
      const c = i.values, m = Array.isArray(i.active) ? i.active : [i.active];
      i.active = m.filter((f) => c.includes(f));
    } else {
      const c = e.find((f) => f.resetLabel), m = c ? c.resetLabel : i.values[0] || i.active;
      i.active = m;
    }
  }
  return i;
}), Sl = ({ vizConfig: e, updateConfig: t }) => {
  const { config: n, loadAPIFilters: a, data: o } = v.useContext(J), { overlay: i } = pe(), {
    dashboard: { sharedFilters: s },
    visualizations: l
  } = n, c = v.useContext(te), m = v.useMemo(() => {
    var D;
    const p = n.visualizations[e.uid].sharedFilterIndexes.map(
      Number
    );
    return (D = n.dashboard.sharedFilters) == null ? void 0 : D.map(({ key: u }, g) => [g, u]).filter(([u]) => !p.includes(u)).map(([u, g]) => /* @__PURE__ */ r.createElement("option", { key: u, value: u }, `${u} - ${g}`));
  }, [n.visualizations, e.uid]), f = v.useState({}), [d, y] = v.useState(!1), h = (p, D, u) => {
    const g = A.cloneDeep(s), {
      apiEndpoint: b,
      valueSelector: w,
      textSelector: E,
      subgroupValueSelector: T,
      subgroupTextSelector: S
    } = s[D].apiFilter || {}, C = (u == null ? void 0 : u.apiEndpoint) !== b || (u == null ? void 0 : u.valueSelector) !== w || (u == null ? void 0 : u.textSelector) !== E || (u == null ? void 0 : u.subgroupValueSelector) !== T || (u == null ? void 0 : u.subgroupTextSelector) !== S;
    if (g[D][p] = u, p === "columnName") {
      g[D].subGrouping && delete g[D].subGrouping;
      const k = Tt(g, o);
      c({ type: "SET_SHARED_FILTERS", payload: k });
    } else
      p === "filterStyle" ? (g[D] = {
        ...g[D],
        active: "",
        apiFilter: {
          apiEndpoint: "",
          subgroupValueSelector: "",
          textSelector: "",
          valueSelector: ""
        },
        filterStyle: u
      }, c({ type: "SET_SHARED_FILTERS", payload: g })) : p === "apiFilter" && u.apiEndpoint && u.valueSelector && C ? (s[D].filterStyle === re.nestedDropdown && u.subgroupValueSelector && (g[D].subGrouping = {
        active: "",
        columnName: "",
        setByQueryParameter: "",
        valuesLookup: {}
      }), a(g, {})) : c({ type: "SET_SHARED_FILTERS", payload: g });
  }, I = (p) => {
    const D = A.cloneDeep(s);
    D.splice(p, 1);
    const u = Object.keys(s).slice(p + 1), g = l;
    Object.keys(g).forEach((b) => {
      const w = g[b];
      if (w.type === "dashboardFilters") {
        const E = w.sharedFilterIndexes.filter((T) => T != p).map((T) => u.includes(T.toString()) ? T - 1 : T);
        c({ type: "UPDATE_VISUALIZATION", payload: { vizKey: b, configureData: { sharedFilterIndexes: E } } });
      }
    }), c({ type: "SET_SHARED_FILTERS", payload: D });
  }, O = () => {
    const p = A.cloneDeep(s) || [], u = { key: "New Dashboard Filter " + (p.length + 1), showDropdown: !0, values: [] };
    c({ type: "SET_SHARED_FILTERS", payload: [...p, u] }), t({ ...e, sharedFilterIndexes: [...e.sharedFilterIndexes, p.length] });
  };
  return /* @__PURE__ */ r.createElement(tr, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(Zt, null, /* @__PURE__ */ r.createElement(Kt, null, /* @__PURE__ */ r.createElement(Xt, null, "General")), /* @__PURE__ */ r.createElement(Yt, null, /* @__PURE__ */ r.createElement(
    fr,
    {
      value: e.filterBehavior,
      label: "Filter Behavior",
      updateField: (p, D, u, g) => {
        t({ ...e, filterBehavior: g });
      },
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ r.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(P.Target, null, /* @__PURE__ */ r.createElement(R, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(P.Content, null, /* @__PURE__ */ r.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), e.filterBehavior === "Apply Button" && /* @__PURE__ */ r.createElement(
    Y,
    {
      label: "Apply Filter Button Text",
      maxLength: 20,
      value: e.applyFiltersButtonText,
      updateField: (p, D, u, g) => {
        t({ ...e, applyFiltersButtonText: g });
      }
    }
  ), e.filterBehavior === "Filter Change" && /* @__PURE__ */ r.createElement(
    Ve,
    {
      label: "Auto Load",
      value: e.autoLoad,
      updateField: (p, D, u, g) => {
        t({ ...e, autoLoad: g });
      },
      tooltip: /* @__PURE__ */ r.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(P.Target, null, /* @__PURE__ */ r.createElement(R, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(P.Content, null, /* @__PURE__ */ r.createElement("p", null, "Check if you would like for all URL filters to automatically select a value when a parent filter is changed.")))
    }
  ))), /* @__PURE__ */ r.createElement(Zt, null, /* @__PURE__ */ r.createElement(Kt, null, /* @__PURE__ */ r.createElement(Xt, null, "Filters")), /* @__PURE__ */ r.createElement(Yt, null, e.sharedFilterIndexes.map((p) => {
    const D = s[p];
    return /* @__PURE__ */ r.createElement(
      Xa,
      {
        key: D.key + p,
        fieldName: D.key,
        fieldKey: p,
        fieldType: "Dashboard Filter",
        controls: f,
        deleteField: () => {
          i == null || i.actions.openOverlay(
            /* @__PURE__ */ r.createElement(
              bl,
              {
                removeFilterCompletely: I,
                removeFilterFromViz: (u) => {
                  t({
                    ...e,
                    sharedFilterIndexes: e.sharedFilterIndexes.filter((g) => g !== u)
                  });
                },
                filterIndex: p
              }
            )
          );
        }
      },
      /* @__PURE__ */ r.createElement(
        yl,
        {
          filter: D,
          filterIndex: p,
          updateFilterProp: (u, g) => {
            h(u, p, g);
          },
          config: n
        }
      )
    );
  }), /* @__PURE__ */ r.createElement("button", { onClick: O, className: "btn btn-primary full-width" }, "Add Filter"), d ? /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Select Existing Dashboard Filter", /* @__PURE__ */ r.createElement(P, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(P.Target, null, /* @__PURE__ */ r.createElement(R, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(P.Content, null, /* @__PURE__ */ r.createElement("p", null, "This feature is indentended to support legacy functionality. Be advised that any change to the filter in this editor will reflect on the whole dashboard.", " ")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: "",
      onChange: (p) => {
        t({
          ...e,
          sharedFilterIndexes: [...e.sharedFilterIndexes, p.target.value]
        }), y(!1);
      }
    },
    [
      /* @__PURE__ */ r.createElement("option", { key: "select", value: "" }, "Select"),
      ...m
    ]
  )) : /* @__PURE__ */ r.createElement("button", { onClick: () => y(!0), className: "btn btn-primary full-width mt-2" }, "Add Existing Dashboard Filter"))));
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
    if (a.filterStyle === re.nestedDropdown) {
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
  const n = Pe(t == null ? void 0 : t.setByQueryParameter), a = (s = e[0]) == null ? void 0 : s.value, o = (l = e[0]) == null ? void 0 : l.subOptions[0].value, i = Pe(t == null ? void 0 : t.subGrouping.setByQueryParameter);
  if (!t.active)
    t.active = n || a, t.subGrouping.active = i || o;
  else {
    const c = e.find((m) => m.value === t.active);
    if (t.active = c ? c.value : a, c) {
      const m = c.subOptions.find((f) => f.value === t.subGrouping.active);
      t.subGrouping.active = (m == null ? void 0 : m.value) || o;
    } else
      t.subGrouping.active = o;
  }
}, kl = (e, t) => {
  var s;
  const n = Pe(t == null ? void 0 : t.setByQueryParameter), a = Array.isArray(n) ? n : n == null ? void 0 : n.split(","), o = n ? a : [(s = e[0]) == null ? void 0 : s.value], i = (t.active || []).filter(
    (l) => e.find((c) => c.value === l)
  );
  t.active = i.length ? i : o;
}, Zn = (e, t, n, a) => {
  var c;
  const o = A.cloneDeep(n), i = A.cloneDeep(o[e]), s = Pe(i == null ? void 0 : i.setByQueryParameter), l = i.setByQueryParameter ? s !== void 0 : !1;
  if (!a.length || !(t != null && t.length))
    return l && i.apiFilter && (i.queuedActive = s), i;
  if (a.includes(e) || l) {
    const m = o.filter((d) => {
      var y;
      return (y = i.parents) == null ? void 0 : y.includes(d.key);
    }), f = m.some((d) => !(d.active || d.queuedActive));
    if (m && f)
      return i;
    if (i.filterStyle === re.multiSelect)
      kl(t, i);
    else if (i.filterStyle === re.nestedDropdown)
      _l(t, i);
    else {
      const d = (c = t[0]) == null ? void 0 : c.value;
      if (!i.active)
        i.active = s || d;
      else {
        const y = t.find((h) => h.value == i.active);
        i.active = y ? y.value : d;
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
  var g, b;
  const i = v.useContext(J), { config: s, reloadURLData: l, loadAPIFilters: c, setAPIFilterDropdowns: m, setAPILoading: f } = i, d = v.useContext(te), y = (w) => {
    w.preventDefault();
    const E = A.cloneDeep(i.config.dashboard), T = Object.values(i.config.visualizations).filter((C) => C.type === "dashboardFilters").reduce((C, k) => k.autoLoad ? C : [...C, k.sharedFilterIndexes], []);
    if (!E.sharedFilters.some((C, k) => T.includes(k) ? !C.active && !C.queuedActive : !1)) {
      if (Qe(i.config.visualizations)) {
        const C = _t();
        let k = !1;
        E.sharedFilters.forEach((V) => {
          V.queuedActive && (hr(V), V.setByQueryParameter && C[V.setByQueryParameter] !== V.active && (C[V.setByQueryParameter] = Array.isArray(V.active) ? V.active.join(",") : V.active, k = !0));
        }), k && da(C);
      }
      f(!0), d({ type: "SET_SHARED_FILTERS", payload: E.sharedFilters }), d({ type: "SET_FILTERED_DATA", payload: Le(A.cloneDeep(i)) }), c(E.sharedFilters, e).then((C) => {
        l(C);
      }).catch((C) => {
        console.error(C);
      });
    }
  }, h = (w, E) => {
    const T = A.cloneDeep(s);
    let [S, C] = hl(
      w,
      E,
      T.dashboard.sharedFilters,
      t
    );
    if (d({ type: "SET_SHARED_FILTERS", payload: S }), Qe(s.visualizations)) {
      const k = t.autoLoad, V = T.dashboard.sharedFilters.some((le) => !le.active), j = S.filter((le) => le.apiFilter).map((le) => le.apiFilter.apiEndpoint), me = Cl(
        j,
        e,
        C
      );
      k && !V ? (m(me), c(S, me).then((le) => {
        l(le);
      })) : (S[w].queuedActive = E, d({ type: "SET_DATA", payload: {} }), d({ type: "SET_FILTERED_DATA", payload: {} }), m(me), c(S, me));
    } else if (S[w].type === "urlfilter" && S[w].apiFilter)
      l(S);
    else {
      const k = A.cloneDeep(i);
      k.config.dashboard.sharedFilters = S;
      const V = Le(k);
      d({ type: "SET_FILTERED_DATA", payload: V }), d({ type: "SET_SHARED_FILTERS", payload: S });
    }
  }, [I, O] = v.useState(!0), p = () => {
    O(!I), n({
      ...t,
      showEditorPanel: !I
    });
  }, D = (g = t == null ? void 0 : t.sharedFilterIndexes) == null ? void 0 : g.map(Number).map((w) => s.dashboard.sharedFilters[w]), u = D.length ? D.every((w) => w.showDropdown === !1) : !1;
  return u && !o ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(ye.VisualizationWrapper, { config: t, isEditor: o, currentViewport: a }, o && /* @__PURE__ */ r.createElement(
    ye.Sidebar,
    {
      displayPanel: I,
      isDashboard: !0,
      title: "Configure Dashboard Filters",
      onBackClick: p
    },
    /* @__PURE__ */ r.createElement(Sl, { updateConfig: n, vizConfig: t })
  ), !u && /* @__PURE__ */ r.createElement(ye.Responsive, { isEditor: o }, /* @__PURE__ */ r.createElement(
    "div",
    {
      className: `${o ? " is-editor" : ""} cove-component__content col-12 cove-dashboard-filters-container`
    },
    /* @__PURE__ */ r.createElement(
      vr,
      {
        show: (b = t == null ? void 0 : t.sharedFilterIndexes) == null ? void 0 : b.map(Number),
        filters: s.dashboard.sharedFilters || [],
        apiFilterDropdowns: e,
        handleOnChange: h,
        showSubmit: t.filterBehavior === Ua.Apply && !t.autoLoad,
        applyFilters: y,
        applyFiltersButtonText: t.applyFiltersButtonText
      }
    )
  )));
}, Nl = new Se(), qa = (e, t, n) => {
  var l;
  const a = A.cloneDeep(n.visualizations[e]), o = (l = n.datasets[a.dataKey]) == null ? void 0 : l.data, i = o != null && o.length ? Object.keys(o[0]) : [], s = (wt(n.dashboard, t) || []).filter((c) => i.includes(c.columnName));
  return s.length && (a.formattedData = Oe(s, o)), a.data = o, a;
}, Ga = (e, t, n, a, o) => {
  if (t === void 0)
    return {};
  const i = A.cloneDeep(n.visualizations[e]), s = n.rows[t];
  if (s.footnotesId && s.footnotesId === e)
    return qa(e, t, n);
  s != null && s.dataKey && Object.assign(i, A.pick(s, ["dataKey", "dataDescription", "formattedData", "data"])), i.formattedData && (i.originalFormattedData = i.formattedData);
  const l = (o == null ? void 0 : o[t]) ?? (o == null ? void 0 : o[e]);
  if (l)
    i.data = l || [], i.formattedData && (i.formattedData = i.data);
  else {
    const c = i.dataKey || "backwards-compatibility";
    i.data = a[c] || [], i.formattedData && (i.formattedData = Nl.developerStandardize(i.data, i.dataDescription) || i.data);
  }
  return i;
}, Fl = ({ config: e, updateField: t }) => {
  var m, f, d, y, h, I;
  const n = () => {
    const O = [...e.staticFootnotes || [], { text: "Add Footnote Text" }];
    t(null, null, "staticFootnotes", O);
  }, a = (O, p) => {
    const D = A.cloneDeep(e.staticFootnotes);
    D[O] = p, t(null, null, "staticFootnotes", D);
  }, o = (O) => {
    const p = A.cloneDeep(e.staticFootnotes);
    p.splice(O, 1), t(null, null, "staticFootnotes", p);
  }, i = (O) => [["", "--Select--"]].concat(O.map((p) => [p, p])), s = e.datasets || {}, l = e.dataKey ? i(Object.keys(((f = (m = s[e.dataKey]) == null ? void 0 : m.data) == null ? void 0 : f[0]) || {})) : [], c = i(Object.keys(s));
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
      value: (d = e.dynamicFootnotes) == null ? void 0 : d.symbolColumn,
      options: l,
      section: "dynamicFootnotes",
      fieldName: "symbolColumn",
      updateField: t
    }
  ), /* @__PURE__ */ r.createElement(
    ge,
    {
      label: "Footnote Text Column",
      value: (y = e.dynamicFootnotes) == null ? void 0 : y.textColumn,
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
  ))), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("em", null, "Static Footnotes"), (I = e.staticFootnotes) == null ? void 0 : I.map((O, p) => /* @__PURE__ */ r.createElement("div", { key: p, className: "row border p-2" }, /* @__PURE__ */ r.createElement("div", { className: "col-8" }, /* @__PURE__ */ r.createElement(
    ge,
    {
      label: "Symbol",
      value: O.symbol,
      options: [["", "--Select--"], ...rr],
      fieldName: "symbol",
      updateField: (D, u, g, b) => a(p, { ...O, symbol: b })
    }
  ), " ", /* @__PURE__ */ r.createElement(
    Y,
    {
      label: "Text",
      value: O.text,
      fieldName: "text",
      updateField: (D, u, g, b) => a(p, { ...O, text: b })
    }
  )), /* @__PURE__ */ r.createElement("div", { className: "col-2 ms-4" }, /* @__PURE__ */ r.createElement("button", { className: "btn btn-danger p-1", onClick: () => o(p) }, "Delete")))), /* @__PURE__ */ r.createElement("button", { className: "btn btn-primary", onClick: n }, "Add Static Footnote"));
}, Ze = ({
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
        component: Ze,
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
      const { symbolColumn: m, textColumn: f, orderColumn: d } = t.dynamicFootnotes, y = c.map((h) => A.pick(h, [m, f, d]));
      return y.sort((h, I) => h[d] - I[d]), y.map((h) => ({ symbol: h[m], text: h[f] }));
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
    /* @__PURE__ */ r.createElement(R, { display: i ? "minus" : "plus", base: !0 }),
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
  currentViewport: m
}) => {
  const { config: f, filteredData: d, data: y } = v.useContext(J), [h, I] = r.useState(a.columns.map((u, g) => g === 0)), O = (u) => {
    I(h.map((g, b) => b === u));
  }, p = v.useMemo(() => {
    if (a.footnotesId) {
      const u = qa(a.footnotesId, o, f);
      if (a.multiVizColumn && t) {
        const g = t[0][a.multiVizColumn], b = u.formattedData.filter((w) => w[a.multiVizColumn] === g);
        u.formattedData = b;
      } else
        u.formattedData = d[a.footnotesId];
      return u;
    }
    return null;
  }, [f, a, y, d]), D = (u) => {
    const b = Object.values(f.visualizations).filter(
      (w) => w.type === "dashboardFilters"
    ).filter((w) => !w.autoLoad).flatMap((w) => w.sharedFilterIndexes);
    return Qe(f.visualizations) && u.autoLoad ? b.some((w) => {
      const { queuedActive: E, active: T, subGrouping: S } = f.dashboard.sharedFilters[w];
      return !T && !E ? !0 : E ? S ? E[0] !== T || E[1] !== S.active : E !== T : !1;
    }) : !1;
  };
  return /* @__PURE__ */ r.createElement("div", { className: `row${a.equalHeight ? " equal-height" : ""}${a.toggle ? " toggle" : ""}`, key: `row__${o}` }, a.columns.map((u, g) => {
    if (u.width) {
      if (!u.widget)
        return /* @__PURE__ */ r.createElement("div", { key: `row__${o}__col__${g}`, className: `col col-${u.width}` });
      const b = Ga(u.widget, o, f, y, d);
      t && (b.data = t, b.formattedData && (b.formattedData = t));
      const w = f.dashboard.sharedFilters && f.dashboard.sharedFilters.filter((k) => k.setBy === u.widget).length > 0, E = w ? f.dashboard.sharedFilters.filter((k) => k.setBy === u.widget)[0].active : void 0, T = /* @__PURE__ */ r.createElement("a", { href: `#data-table-${b.dataKey}`, className: "margin-left-href" }, b.dataKey, " (Go to Table)"), S = i && b.filterBehavior !== "Apply Button" && (b.type !== "dashboardFilters" || D(b)), C = a.toggle === void 0 || a.toggle && h[g];
      return /* @__PURE__ */ r.createElement(
        "div",
        {
          key: `vis__${o}__${g}`,
          className: `col-12 col-md-${u.width}${C ? "" : " d-none"}${S ? " hide-parent-visualization" : " mb-4"}`
        },
        a.toggle && !S && /* @__PURE__ */ r.createElement(
          gl,
          {
            row: a,
            visualizations: f.visualizations,
            active: h.indexOf(!0),
            setToggled: O
          }
        ),
        /* @__PURE__ */ r.createElement(
          Ll,
          {
            allExpanded: e,
            currentViewport: m,
            groupName: n,
            hideVisualization: S,
            row: a
          },
          b.type === "chart" && /* @__PURE__ */ r.createElement(
            aa,
            {
              key: u.widget,
              config: b,
              dashboardConfig: f,
              isEditor: !1,
              setConfig: (k) => {
                l(u.widget, k);
              },
              setSharedFilter: w ? s : void 0,
              isDashboard: !0,
              link: f.table && f.table.show && f.datasets && b.table && b.table.showDataTableLink ? T : void 0,
              configUrl: void 0,
              setEditing: void 0,
              hostname: void 0,
              setSharedFilterValue: void 0
            }
          ),
          b.type === "map" && /* @__PURE__ */ r.createElement(
            ia,
            {
              key: u.widget,
              config: b,
              isEditor: !1,
              setConfig: (k) => {
                l(u.widget, k);
              },
              showLoader: !1,
              setSharedFilter: w ? s : void 0,
              setSharedFilterValue: E,
              isDashboard: !0,
              link: f.table && f.table.show && f.datasets && b.table && b.table.showDataTableLink ? T : void 0
            }
          ),
          b.type === "data-bite" && /* @__PURE__ */ r.createElement(
            oa,
            {
              key: u.widget,
              config: b,
              isEditor: !1,
              setConfig: (k) => {
                l(u.widget, k);
              },
              isDashboard: !0
            }
          ),
          b.type === "waffle-chart" && /* @__PURE__ */ r.createElement(
            sa,
            {
              key: u.widget,
              config: b,
              isEditor: !1,
              setConfig: (k) => {
                l(u.widget, k);
              },
              isDashboard: !0,
              configUrl: f.table && f.table.show && f.datasets && b.table && b.table.showDataTableLink ? T : void 0
            }
          ),
          b.type === "markup-include" && /* @__PURE__ */ r.createElement(
            la,
            {
              key: u.widget,
              config: b,
              configUrl: void 0,
              isDashboard: !0,
              isEditor: !1,
              setConfig: (k) => {
                l(u.widget, k);
              }
            }
          ),
          b.type === "filtered-text" && /* @__PURE__ */ r.createElement(
            Fa,
            {
              key: u.widget,
              config: b,
              isEditor: !1,
              setConfig: (k) => {
                l(u.widget, k);
              },
              isDashboard: !0,
              configUrl: void 0
            }
          ),
          b.type === "dashboardFilters" && /* @__PURE__ */ r.createElement(
            ja,
            {
              setConfig: (k) => {
                l(u.widget, k);
              },
              key: u.widget,
              visualizationConfig: b,
              apiFilterDropdowns: c,
              currentViewport: m
            }
          ),
          b.type === "table" && /* @__PURE__ */ r.createElement(
            xt,
            {
              key: u.widget,
              updateConfig: (k) => {
                l(u.widget, k);
              },
              visualizationKey: u.widget,
              config: b,
              viewport: m
            }
          ),
          b.type === "footnotes" && /* @__PURE__ */ r.createElement(
            Ze,
            {
              key: u.widget,
              visualizationKey: u.widget,
              config: b,
              viewport: m
            }
          )
        )
      );
    }
    return /* @__PURE__ */ r.createElement(r.Fragment, { key: `vis__${o}__${g}` });
  }), a.footnotesId && !i ? /* @__PURE__ */ r.createElement(
    Ze,
    {
      isEditor: !1,
      visualizationKey: a.footnotesId,
      config: p,
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
  const a = Object.values(e).map((s) => s.dataKey), o = n.map((s) => s.dataKey), i = A.uniq([...a, ...o]);
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
}, A.cloneDeep(e)), $l = (e, t, n, a) => {
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
    const m = i.map((p, D) => D), f = l ? m : a;
    i = i.map(
      (p, D) => {
        var u;
        return Zn(
          D,
          s[(u = p.apiFilter) == null ? void 0 : u.apiEndpoint],
          i,
          f
        );
      }
    );
    const d = i.filter((p) => p.apiFilter), y = new Map(d.map((p) => [p.apiFilter.apiEndpoint, p.apiFilter])), h = Il(i, s), I = Object.values(h).reduce(
      (p, [D]) => ({ ...p, [D]: null }),
      {}
    );
    n((p) => ({ ...p, ...I }));
    const O = A.cloneDeep(s);
    return Promise.all(
      Object.keys(h).map(
        (p) => new Promise((D) => {
          fetch(p).then((u) => u.json()).then((u) => {
            Array.isArray(u) || console.error("COVE only supports response data in the shape Array<Object>");
            const [g, b] = h[p], w = y.get(g), E = Ol(u, w);
            O[g] = E;
            const T = Zn(
              b,
              E,
              i,
              f
            );
            i[b] = T;
          }).catch(() => {
            t({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            });
          }).finally(() => {
            D();
          });
        })
      )
    ).then(() => !i.reduce((D, u, g) => f.includes(g) && !u.active ? Ha(za(u, i)) ? D : [...D, g] : D, []).length || c === 0 ? (n(O), e({ type: "SET_SHARED_FILTERS", payload: i }), i) : o(i, O, l, c - 1));
  };
  return o;
}, Ul = (e, t) => {
  var s;
  const n = !!Pe("cove-auto-load"), a = e.multiDashboards ? e.multiDashboards[e.activeDashboard] : e, o = (s = a.dashboard.sharedFilters) == null ? void 0 : s.some(
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
    const l = a.rows.map((f) => f.dataKey).filter(Boolean);
    return !!Object.values(a.visualizations).map((f) => f.dataKey).filter(Boolean).concat(l).find((f) => {
      var d;
      return !((d = e.datasets[f].data) != null && d.length);
    });
  }
  return !1;
};
function zl({ initialState: e, isEditor: t = !1, isDebug: n = !1 }) {
  var le, Mt, $t, Bt, Vt, Ut, zt, Ht, jt, qt, Gt, Wt, Qt;
  const [a, o] = v.useReducer(dl, e), [i, s] = v.useReducer(ml, []), l = v.useContext(ra), [c, m] = v.useState({}), [f, d] = v.useState("lg"), [y] = v.useState(`cove-${Math.random().toString(16).slice(-4)}`), [h, I] = v.useState(!0), [O, p] = v.useState(!1), D = a.tabSelected === "Dashboard Preview", u = v.useMemo(() => {
    const _ = Yn(a.config).map((F) => a.data[F]);
    return _.length ? _.some((F) => F === void 0) : !0;
  }, [a.data]), g = Rt(a.config.rows), b = new Se(), w = v.useMemo(() => Object.values(a.config.visualizations).filter((_) => _.type === "dashboardFilters").reduce((_, F) => F.autoLoad ? [..._, ...F.sharedFilterIndexes] : _, []), [a.config.visualizations]), E = Vl(
    o,
    s,
    m,
    w
  ), T = async (_) => {
    const F = A.cloneDeep(a.config);
    if (!F.datasets)
      return;
    const U = _ || F.dashboard.sharedFilters, N = Yn(F), $ = A.cloneDeep(a.data), z = A.cloneDeep(F.datasets);
    let q = !1, B = "";
    for (let W = 0; W < N.length; W++) {
      const Q = N[W], ce = F.datasets[Q];
      if (ce.dataUrl && U) {
        const ue = new URL(ce.runtimeDataUrl || ce.dataUrl, window.location.origin), ve = Object.fromEntries(new URLSearchParams(ue.search)), K = {};
        U.forEach((M) => {
          var H;
          if (M.type === "urlfilter" && $l(M, Q, F.visualizations, F.rows)) {
            if (M.filterBy === "File Name" && (B = xl(B, M, Q)), M.queryParameter && (K[M.queryParameter] ? K[M.queryParameter] = K[M.queryParameter] + M.active : K[M.queryParameter] = M.active), M.setByQueryParameter) {
              const we = Object.fromEntries(new URLSearchParams(window.location.search))[M.setByQueryParameter], Wa = ((H = M.apiFilter) == null ? void 0 : H.valueSelector) || M.setByQueryParameter;
              we && (K[Wa] = we);
            }
            M.apiFilter && M.active && (K[M.apiFilter.valueSelector] = M.active, M.apiFilter.subgroupValueSelector && M.subGrouping.active && (K[M.apiFilter.subgroupValueSelector] = M.subGrouping.active));
          }
        });
        const tt = Pl(U, ve, K);
        if (_ || tt) {
          q = !0;
          const M = Rl(
            { ...ve, ...K },
            ue,
            B
          );
          p(!0), await Re(M).then((H) => {
            let ne = H;
            if (H && ce.dataDescription)
              try {
                ne = b.autoStandardize(ne), ne = b.developerStandardize(ne, ce.dataDescription);
              } catch (we) {
                console.error("Error standardizing data:", we);
              }
            z[Q].data = ne, z[Q].runtimeDataUrl = M, $[Q] = ne;
          }).catch((H) => {
            console.error(H), s({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            }), z[Q].data = [], z[Q].runtimeDataUrl = M, $[Q] = [];
          });
        }
      }
    }
    const G = A.pickBy(z, (W) => !W.dataUrl);
    if (q || Object.keys(G).length) {
      const W = Object.keys(G).reduce((H, ne) => (H[ne] = G[ne].data, H), {}), Q = { ...$, ...W };
      o({ type: "SET_DATA", payload: Q });
      const ce = F.dashboard.sharedFilters.reduce((H, ne, we) => (ne.type === "datafilter" && H.push(we), H), []), ue = Object.values(F.visualizations).filter((H) => H.type === "dashboardFilters").flatMap((H) => H.sharedFilterIndexes).filter((H) => !ce.includes(H)), ve = Tt(U, Q, ue), K = { ...F.dashboard, sharedFilters: ve }, tt = Le(
        { ...a, config: { ...a.config, dashboard: K } },
        {},
        Q
      );
      o({ type: "SET_FILTERED_DATA", payload: tt });
      const M = Ml(F.visualizations, $);
      o({
        type: "SET_CONFIG",
        payload: {
          dashboard: K,
          datasets: z,
          visualizations: M,
          activeDashboard: F.activeDashboard
        }
      }), p(!1);
    }
  }, S = (_, F) => {
    const { config: U, filteredData: N } = A.cloneDeep(a);
    for (let z = 0; z < U.dashboard.sharedFilters.length; z++) {
      const q = U.dashboard.sharedFilters[z];
      if (q.setBy === _) {
        q.columnName && (q.active = F[q.columnName]);
        break;
      }
    }
    const $ = Le({ ...a, config: U }, N);
    o({ type: "SET_FILTERED_DATA", payload: $ }), o({ type: "SET_CONFIG", payload: U }), o({ type: "SET_SHARED_FILTERS", payload: U.dashboard.sharedFilters });
  };
  v.useEffect(() => {
    var N;
    const { config: _ } = a, F = Ul(_, t && !D), U = Tt(_.dashboard.sharedFilters, a.data);
    (N = E(U, c, F)) == null || N.then(($) => {
      $.every((q) => q.type === "datafilter" || q.active) && T($);
    });
  }, [t, D, (le = a.config) == null ? void 0 : le.activeDashboard]);
  const C = (_, F) => {
    const U = A.cloneDeep(a.config), N = A.pick(U, ["visualizations", "multiDashboards"]);
    if (N.visualizations[_] = F, N.visualizations[_].formattedData = U.visualizations[_].formattedData, U.multiDashboards) {
      const $ = U.activeDashboard, z = [...U.multiDashboards], B = { label: z[$].label, visualizations: N.visualizations, ...A.pick(U, ["dashboard", "rows"]) };
      z[$] = B, N.multiDashboards = z;
    }
    o({ type: "SET_CONFIG", payload: N }), t && l.setTempConfig(N);
  }, k = new Ja((_) => {
    for (let F of _) {
      let U = er(F.contentRect.width);
      d(U);
    }
  }), V = v.useCallback((_) => {
    _ !== null && k.observe(_);
  }, []);
  if (a.loading)
    return /* @__PURE__ */ r.createElement(Ot, null);
  let j = null;
  if (t && !D) {
    let _ = !1;
    be(a.config).forEach((F) => {
      var q;
      const U = (q = g[F]) == null ? void 0 : q.row, N = Ga(
        F,
        U,
        a.config,
        a.data,
        a.filteredData
      );
      N.uid = F, N.type === "footnotes" && (N.formattedData = void 0);
      const $ = a.config.dashboard.sharedFilters && a.config.dashboard.sharedFilters.filter((B) => B.setBy === F).length > 0, z = $ ? a.config.dashboard.sharedFilters.filter((B) => B.setBy === F)[0].active : void 0;
      if (N.editing) {
        _ = !0;
        const B = (G) => {
          let W = N.originalFormattedData ? { ...G, formattedData: N.originalFormattedData } : G;
          C(F, W);
        };
        switch (N.type) {
          case "chart":
            j = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ie, { visualizationKey: F, subEditor: "Chart" }), /* @__PURE__ */ r.createElement(
              aa,
              {
                key: F,
                config: N,
                isEditor: !0,
                isDebug: n,
                setConfig: B,
                setSharedFilter: $ ? S : void 0,
                setSharedFilterValue: z,
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
            j = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ie, { visualizationKey: F, subEditor: "Map" }), /* @__PURE__ */ r.createElement(
              ia,
              {
                key: F,
                config: N,
                isEditor: !0,
                isDebug: n,
                setConfig: B,
                setSharedFilter: $ ? S : void 0,
                setSharedFilterValue: z,
                isDashboard: !0,
                showLoader: !1,
                dashboardConfig: a.config
              }
            ));
            break;
          case "data-bite":
            j = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ie, { visualizationKey: F, subEditor: "Data Bite" }), /* @__PURE__ */ r.createElement(
              oa,
              {
                key: F,
                config: { ...N, newViz: !0 },
                isEditor: !0,
                setConfig: B,
                isDashboard: !0
              }
            ));
            break;
          case "waffle-chart":
            j = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ie, { visualizationKey: F, subEditor: "Waffle Chart" }), /* @__PURE__ */ r.createElement(
              sa,
              {
                key: F,
                config: N,
                isEditor: !0,
                setConfig: B,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "markup-include":
            j = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ie, { visualizationKey: F, subEditor: "Markup Include" }), /* @__PURE__ */ r.createElement(
              la,
              {
                key: F,
                config: N,
                isEditor: !0,
                setConfig: B,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "filtered-text":
            j = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ie, { visualizationKey: F, subEditor: "Filtered Text" }), /* @__PURE__ */ r.createElement(
              Fa,
              {
                key: F,
                config: N,
                isEditor: !0,
                setConfig: B,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "dashboardFilters":
            j = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ie, { visualizationKey: F, subEditor: "Filter Dropdowns" }), /* @__PURE__ */ r.createElement(
              ja,
              {
                isEditor: !0,
                visualizationConfig: N,
                apiFilterDropdowns: c,
                setConfig: B
              }
            ));
            break;
          case "table":
            j = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ie, { visualizationKey: F, subEditor: "Table" }), /* @__PURE__ */ r.createElement(
              xt,
              {
                visualizationKey: F,
                config: N,
                isEditor: !0,
                updateConfig: B
              }
            ));
            break;
          case "footnotes":
            j = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(ie, { visualizationKey: F, subEditor: "Footnotes" }), /* @__PURE__ */ r.createElement(
              Ze,
              {
                visualizationKey: F,
                config: { ...N, datasets: a.config.datasets },
                isEditor: !0,
                updateConfig: (G) => B(A.omit(G, "datasets"))
              }
            ));
            break;
          default:
            j = /* @__PURE__ */ r.createElement(r.Fragment, null);
            break;
        }
      }
    }), _ || (j = /* @__PURE__ */ r.createElement(Ko, { backend: As }, /* @__PURE__ */ r.createElement("div", { className: "header-container" }, /* @__PURE__ */ r.createElement(ie, null), /* @__PURE__ */ r.createElement(ol, null)), /* @__PURE__ */ r.createElement("div", { className: "layout-container" }, /* @__PURE__ */ r.createElement(Xs, null))));
  } else {
    const { config: _ } = a, { title: F, description: U } = _.dashboard || {};
    j = /* @__PURE__ */ r.createElement(r.Fragment, null, t && /* @__PURE__ */ r.createElement(ie, null), O && /* @__PURE__ */ r.createElement(br, { fullScreen: !0 }), /* @__PURE__ */ r.createElement(xa, { isEditor: t && !D }), i.map((N, $) => /* @__PURE__ */ r.createElement(
      ir,
      {
        type: "danger",
        onDismiss: () => s({ type: "DISMISS_ERROR_MESSAGE", payload: $ }),
        message: N,
        autoDismiss: !0
      }
    )), /* @__PURE__ */ r.createElement(ye.Responsive, { isEditor: t }, /* @__PURE__ */ r.createElement("div", { className: `cdc-dashboard-inner-container${t ? " is-editor" : ""}` }, /* @__PURE__ */ r.createElement(
      ea,
      {
        title: F,
        isDashboard: !0,
        classes: ["dashboard-title", `${_.dashboard.theme ?? "theme-blue"}`]
      }
    ), U && /* @__PURE__ */ r.createElement("div", { className: "subtext mb-3" }, ta(U)), _.rows && _.rows.filter((N) => N.columns.filter(($) => $.widget).length !== 0).map((N, $) => {
      if (N.multiVizColumn && (D || !t)) {
        const q = Le(a, A.cloneDeep(a.data))[$] ?? N.formattedData, B = {};
        return q.forEach((G) => {
          const W = G[N.multiVizColumn];
          B[W] || (B[W] = []), B[W].push(G);
        }), /* @__PURE__ */ r.createElement(r.Fragment, null, !u && N.expandCollapseAllButtons === !0 && /* @__PURE__ */ r.createElement(Bl, { setAllExpanded: I }), Object.keys(B).map((G) => {
          const W = B[G];
          return /* @__PURE__ */ r.createElement(
            Kn,
            {
              key: `row__${$}__${G}`,
              allExpanded: h,
              filteredDataOverride: W,
              groupName: G,
              row: N,
              rowIndex: $,
              setSharedFilter: S,
              updateChildConfig: C,
              apiFilterDropdowns: c,
              currentViewport: f,
              inNoDataState: u
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
            row: N,
            rowIndex: $,
            setSharedFilter: S,
            updateChildConfig: C,
            apiFilterDropdowns: c,
            currentViewport: f,
            inNoDataState: u
          }
        );
    }), u ? /* @__PURE__ */ r.createElement("div", { className: "mt-5" }, "Please complete your selection to continue.") : /* @__PURE__ */ r.createElement(r.Fragment, null), /* @__PURE__ */ r.createElement("section", { className: "download-buttons" }, ((Mt = _.table) == null ? void 0 : Mt.downloadImageButton) && /* @__PURE__ */ r.createElement(
      en.Button,
      {
        title: "Download Dashboard as Image",
        type: "image",
        state: _,
        text: "Download Dashboard Image",
        elementToCapture: y
      }
    ), (($t = _.table) == null ? void 0 : $t.downloadPdfButton) && /* @__PURE__ */ r.createElement(
      en.Button,
      {
        title: "Download Dashboard as PDF",
        type: "pdf",
        state: _,
        text: "Download Dashboard PDF",
        elementToCapture: y
      }
    )), ((Bt = _.table) == null ? void 0 : Bt.show) && _.data && /* @__PURE__ */ r.createElement(
      gt,
      {
        config: _,
        rawData: (Ut = (Vt = _.data) == null ? void 0 : Vt[0]) != null && Ut.tableData ? (Ht = (zt = _.data) == null ? void 0 : zt[0]) == null ? void 0 : Ht.tableData : _.data,
        runtimeData: (qt = (jt = _.data) == null ? void 0 : jt[0]) != null && qt.tableData ? (Wt = (Gt = _.data) == null ? void 0 : Gt[0]) == null ? void 0 : Wt.tableData : _.data || [],
        expandDataTable: _.table.expanded,
        showDownloadButton: _.table.download,
        tableTitle: _.dashboard.title || "",
        viewport: f,
        tabbingId: _.dashboard.title || "",
        outerContainerRef: V,
        imageRef: y,
        isDebug: n,
        isEditor: t
      }
    ), ((Qt = _.table) == null ? void 0 : Qt.show) && _.datasets && Object.keys(_.datasets).map((N) => {
      var B, G, W, Q, ce;
      const $ = be(_).filter((ue) => _.visualizations[ue].dataKey === N);
      let z = [];
      (B = _.dashboard.sharedFilters) == null || B.forEach((ue) => {
        let ve = !0;
        $.forEach((K) => {
          ue.usedBy && ue.usedBy.indexOf(K) === -1 && (ve = !1);
        }), ve && z.push(ue);
      });
      const q = z.length > 0 ? Oe(z, _.datasets[N].data) : void 0;
      return /* @__PURE__ */ r.createElement(
        "div",
        {
          className: "multi-table-container",
          id: `data-table-${N}`,
          key: `data-table-${N}`
        },
        /* @__PURE__ */ r.createElement(
          gt,
          {
            config: _,
            dataConfig: _.datasets[N],
            rawData: ((W = (G = _.datasets[N].data) == null ? void 0 : G[0]) == null ? void 0 : W.tableData) || _.datasets[N].data,
            runtimeData: ((ce = (Q = _.datasets[N].data) == null ? void 0 : Q[0]) == null ? void 0 : ce.tableData) || q || _.datasets[N].data || [],
            expandDataTable: _.table.expanded,
            tableTitle: N,
            viewport: f,
            tabbingId: N
          }
        )
      );
    }))));
  }
  const me = ["cdc-open-viz-module", "type-dashboard", `${f}`];
  return /* @__PURE__ */ r.createElement(Ls, null, /* @__PURE__ */ r.createElement(
    J.Provider,
    {
      value: {
        ...a,
        setParentConfig: l.setTempConfig,
        outerContainerRef: V,
        isDebug: n,
        loadAPIFilters: E,
        setAPIFilterDropdowns: m,
        reloadURLData: T,
        setAPILoading: p
      }
    },
    /* @__PURE__ */ r.createElement(te.Provider, { value: o }, /* @__PURE__ */ r.createElement("div", { className: me.join(" "), ref: V, "data-download-id": y }, j), /* @__PURE__ */ r.createElement(Ms, null))
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
  return e.dataUrl && (t = await Re(`${e.dataUrl}`), t = De(t, e.dataDescription)), t;
}, Sc = ({ configUrl: e, isEditor: t, isDebug: n }) => {
  const [a, o] = v.useState(void 0), i = v.useContext(ra), s = (y) => {
    if (!y.multiDashboards)
      return null;
    const h = _t()["cove-tab"];
    return h !== void 0 && Number(h) < y.multiDashboards.length ? Number(h) : 0;
  }, l = (y, h) => {
    const [I, O] = St(We)(y, h), p = ca(I);
    return { ...We, config: p, filteredData: O, data: h };
  }, c = async () => {
    const y = i.config || await (await fetch(e)).json(), h = s(y), { newConfig: I, datasets: O } = h !== null ? await d(y, h) : await f(y);
    o(l(I, O));
  };
  v.useEffect(() => {
    c();
  }, []);
  const m = (y) => {
    let h = { ...y };
    const I = Object.keys(y.datasets).reduce((O, p) => {
      const D = y.datasets[p];
      return O[p] = D.formattedData || D.data, O;
    }, {});
    return be(h).forEach((O) => {
      const p = I[h.visualizations[O].dataKey];
      p && (h.visualizations[O].formattedData = p);
    }), Object.keys(I).forEach((O) => {
      h.datasets[O].data = I[O];
    }), { newConfig: h, datasets: I };
  }, f = async (y) => {
    let h = { ...Jn, ...y };
    if (y.datasets)
      return m(h);
    {
      const I = h.dataFileName || "backwards-compatibility", O = await Hl(y), p = {};
      if (p[I] = {
        data: O,
        dataDescription: h.dataDescription
      }, h.datasets = p, be(h).forEach((g) => {
        const b = { dataKey: I, ...A.pick(h, "dataDescription", "formattedData") };
        h.visualizations[g] = { ...h.visualizations[g], ...b };
      }), h = { ...h, ...{
        data: [],
        dataUrl: "",
        dataFileName: "",
        dataFileSourceType: "",
        dataDescription: {},
        formattedData: []
      } }, h.dashboard.filters) {
        const g = { ...h.dashboard };
        g.sharedFilters || (g.sharedFilters = []);
        const b = g.filters.map((w) => ({ ...w, key: w.label, showDropdown: !0, usedBy: be(h) }));
        g.sharedFilters = [...g.sharedFilters, ...b], h.dashboard = { ...g, filters: void 0 };
      }
      const u = { [I]: O };
      return { newConfig: h, datasets: u };
    }
  }, d = async (y, h) => {
    const I = y.multiDashboards[h], O = {
      ...Jn,
      ...y,
      ...I,
      multiDashboards: y.multiDashboards,
      activeDashboard: h
    };
    return m(O);
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
