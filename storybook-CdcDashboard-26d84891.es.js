import { j as o, F as P, a as p } from "./storybook-jsx-runtime-36872362.es.js";
import { r as y, R as vt } from "./storybook-index-45401197.es.js";
import { c as Jr, A as ea, V as ta, F as na, a as ra, b as aa } from "./storybook-InputToggle-c9edfa1b.es.js";
import { f as $e, b as ia, g as oa } from "./storybook-getViewport-7dc50c16.es.js";
import { T as ar, H as ir } from "./storybook-index-88ba5a71.es.js";
import { E as or, L as Nt } from "./storybook-viewports-678eca6e.es.js";
import { D as Ce, A as sa, a as Jt, b as en, c as tn, d as nn } from "./storybook-DataTransform-12e90958.es.js";
import { b as la, D as ua, C as sr, a as lr } from "./storybook-CdcChartComponent-9f3340f1.es.js";
import { C as ur } from "./storybook-CdcDataBite-adc584d9.es.js";
import { e as ca, C as cr, A as da } from "./storybook-CdcMap-7db2b0aa.es.js";
import { C as dr } from "./storybook-CdcWaffleChart-186907b0.es.js";
import { C as fr } from "./storybook-CdcMarkupInclude-49ce5edf.es.js";
import { A as Be, a as fa, b as at, c as it, d as ot, e as st } from "./storybook-Accordion-e48d2b15.es.js";
import { I as ha, a as Ae } from "./storybook-editor-8c1f9105.es.js";
import { B as pa } from "./storybook-Button-9d1b8d73.es.js";
import { a as M } from "./storybook-Icon-5df8fab3.es.js";
import { T as x } from "./storybook-Tooltip-b155742f.es.js";
import { I as ve } from "./storybook-InputSelect-f5896759.es.js";
import { L as De, u as ga, c as hr } from "./storybook-coveUpdateWorker-f0e4685a.es.js";
import { u as At } from "./storybook-updateFieldFactory-c006040a.es.js";
import { D as ma } from "./storybook-DataDesigner-246dc688.es.js";
import { P as Fe } from "./storybook-index-43433e35.es.js";
import { C as He, T as te, S as yt } from "./storybook-Inputs-dfb97e80.es.js";
import { _ as N } from "./storybook-lodash-a4231e1c.es.js";
import { u as va, g as pr, f as rn, a as ya, F as ba, b as Ft, c as gr, d as Da, h as mr, e as Me, i as Sa } from "./storybook-Filters-487dd997.es.js";
import { D as bt, f as wa, M as an } from "./storybook-DataTable-58beb6cf.es.js";
import { F as se } from "./storybook-FilterStyles-fd509eb9.es.js";
import { D as Ta } from "./storybook-DashboardFilters-dc074c87.es.js";
import { M as lt } from "./storybook-MultiSelect-09077870.es.js";
import { L as Ca } from "./storybook-Loader-2db99cd1.es.js";
import "./storybook-NestedDropdown-43ca2e78.es.js";
import { F as Oa } from "./storybook-Footnotes-3a1f1a4d.es.js";
var vr = y.createContext({
  dragDropManager: void 0
}), le;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(le || (le = {}));
function F(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var i;
    if (t === void 0)
      i = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = 0;
      i = new Error(t.replace(/%s/g, function() {
        return r[s++];
      })), i.name = "Invariant Violation";
    }
    throw i.framesToPop = 1, i;
  }
}
var Lt = "dnd-core/INIT_COORDS", Je = "dnd-core/BEGIN_DRAG", Pt = "dnd-core/PUBLISH_DRAG_SOURCE", et = "dnd-core/HOVER", tt = "dnd-core/DROP", nt = "dnd-core/END_DRAG";
function on(e, t) {
  return {
    type: Lt,
    payload: {
      sourceClientOffset: t || null,
      clientOffset: e || null
    }
  };
}
function je(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? je = function(n) {
    return typeof n;
  } : je = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, je(e);
}
function Ea(e, t, n) {
  return t.split(".").reduce(function(r, a) {
    return r && r[a] ? r[a] : n || null;
  }, e);
}
function _a(e, t) {
  return e.filter(function(n) {
    return n !== t;
  });
}
function yr(e) {
  return je(e) === "object";
}
function Ia(e, t) {
  var n = /* @__PURE__ */ new Map(), r = function(s) {
    n.set(s, n.has(s) ? n.get(s) + 1 : 1);
  };
  e.forEach(r), t.forEach(r);
  var a = [];
  return n.forEach(function(i, s) {
    i === 1 && a.push(s);
  }), a;
}
function ka(e, t) {
  return e.filter(function(n) {
    return t.indexOf(n) > -1;
  });
}
var Na = {
  type: Lt,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function Aa(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, a = r.publishSource, i = a === void 0 ? !0 : a, s = r.clientOffset, l = r.getSourceClientOffset, u = e.getMonitor(), h = e.getRegistry();
    e.dispatch(on(s)), Fa(n, u, h);
    var m = Ra(n, u);
    if (m === null) {
      e.dispatch(Na);
      return;
    }
    var d = null;
    if (s) {
      if (!l)
        throw new Error("getSourceClientOffset must be defined");
      La(l), d = l(m);
    }
    e.dispatch(on(s, d));
    var T = h.getSource(m), b = T.beginDrag(u, m);
    if (b != null) {
      Pa(b), h.pinSource(m);
      var O = h.getSourceType(m);
      return {
        type: Je,
        payload: {
          itemType: O,
          item: b,
          sourceId: m,
          clientOffset: s || null,
          sourceClientOffset: d || null,
          isSourcePublic: !!i
        }
      };
    }
  };
}
function Fa(e, t, n) {
  F(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(r) {
    F(n.getSource(r), "Expected sourceIds to be registered.");
  });
}
function La(e) {
  F(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function Pa(e) {
  F(yr(e), "Item must be an object.");
}
function Ra(e, t) {
  for (var n = null, r = e.length - 1; r >= 0; r--)
    if (t.canDragSource(e[r])) {
      n = e[r];
      break;
    }
  return n;
}
function xa(e) {
  return function() {
    var n = e.getMonitor();
    if (n.isDragging())
      return {
        type: Pt
      };
  };
}
function Dt(e, t) {
  return t === null ? e === null : Array.isArray(e) ? e.some(function(n) {
    return n === t;
  }) : e === t;
}
function Ma(e) {
  return function(n) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.clientOffset;
    $a(n);
    var i = n.slice(0), s = e.getMonitor(), l = e.getRegistry();
    Ba(i, s, l);
    var u = s.getItemType();
    return Va(i, l, u), Ua(i, s, l), {
      type: et,
      payload: {
        targetIds: i,
        clientOffset: a || null
      }
    };
  };
}
function $a(e) {
  F(Array.isArray(e), "Expected targetIds to be an array.");
}
function Ba(e, t, n) {
  F(t.isDragging(), "Cannot call hover while not dragging."), F(!t.didDrop(), "Cannot call hover after drop.");
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    F(e.lastIndexOf(a) === r, "Expected targetIds to be unique in the passed array.");
    var i = n.getTarget(a);
    F(i, "Expected targetIds to be registered.");
  }
}
function Va(e, t, n) {
  for (var r = e.length - 1; r >= 0; r--) {
    var a = e[r], i = t.getTargetType(a);
    Dt(i, n) || e.splice(r, 1);
  }
}
function Ua(e, t, n) {
  e.forEach(function(r) {
    var a = n.getTarget(r);
    a.hover(t, r);
  });
}
function sn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sn(Object(n), !0).forEach(function(r) {
      za(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function za(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ha(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.getMonitor(), a = e.getRegistry();
    ja(r);
    var i = Wa(r);
    i.forEach(function(s, l) {
      var u = qa(s, l, a, r), h = {
        type: tt,
        payload: {
          dropResult: ln(ln({}, n), u)
        }
      };
      e.dispatch(h);
    });
  };
}
function ja(e) {
  F(e.isDragging(), "Cannot call drop while not dragging."), F(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function qa(e, t, n, r) {
  var a = n.getTarget(e), i = a ? a.drop(r, e) : void 0;
  return Ga(i), typeof i > "u" && (i = t === 0 ? {} : r.getDropResult()), i;
}
function Ga(e) {
  F(typeof e > "u" || yr(e), "Drop result must either be an object or undefined.");
}
function Wa(e) {
  var t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function Qa(e) {
  return function() {
    var n = e.getMonitor(), r = e.getRegistry();
    Za(n);
    var a = n.getSourceId();
    if (a != null) {
      var i = r.getSource(a, !0);
      i.endDrag(n, a), r.unpinSource();
    }
    return {
      type: nt
    };
  };
}
function Za(e) {
  F(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function Ka(e) {
  return {
    beginDrag: Aa(e),
    publishDragSource: xa(e),
    hover: Ma(e),
    drop: Ha(e),
    endDrag: Qa(e)
  };
}
function Xa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function un(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ya(e, t, n) {
  return t && un(e.prototype, t), n && un(e, n), e;
}
function Le(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ja = /* @__PURE__ */ function() {
  function e(t, n) {
    var r = this;
    Xa(this, e), Le(this, "store", void 0), Le(this, "monitor", void 0), Le(this, "backend", void 0), Le(this, "isSetUp", !1), Le(this, "handleRefCountChange", function() {
      var a = r.store.getState().refCount > 0;
      r.backend && (a && !r.isSetUp ? (r.backend.setup(), r.isSetUp = !0) : !a && r.isSetUp && (r.backend.teardown(), r.isSetUp = !1));
    }), this.store = t, this.monitor = n, t.subscribe(this.handleRefCountChange);
  }
  return Ya(e, [{
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
      var n = this, r = this.store.dispatch;
      function a(s) {
        return function() {
          for (var l = arguments.length, u = new Array(l), h = 0; h < l; h++)
            u[h] = arguments[h];
          var m = s.apply(n, u);
          typeof m < "u" && r(m);
        };
      }
      var i = Ka(this);
      return Object.keys(i).reduce(function(s, l) {
        var u = i[l];
        return s[l] = a(u), s;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function(n) {
      this.store.dispatch(n);
    }
  }]), e;
}(), ei = function(t, n) {
  return t === n;
};
function ti(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function ni(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ei;
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; ++r)
    if (!n(e[r], t[r]))
      return !1;
  return !0;
}
function cn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function dn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cn(Object(n), !0).forEach(function(r) {
      ri(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ri(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var fn = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function ai() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fn, t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
  switch (t.type) {
    case Lt:
    case Je:
      return {
        initialSourceClientOffset: n.sourceClientOffset,
        initialClientOffset: n.clientOffset,
        clientOffset: n.clientOffset
      };
    case et:
      return ti(e.clientOffset, n.clientOffset) ? e : dn(dn({}, e), {}, {
        clientOffset: n.clientOffset
      });
    case nt:
    case tt:
      return fn;
    default:
      return e;
  }
}
var Rt = "dnd-core/ADD_SOURCE", xt = "dnd-core/ADD_TARGET", Mt = "dnd-core/REMOVE_SOURCE", rt = "dnd-core/REMOVE_TARGET";
function ii(e) {
  return {
    type: Rt,
    payload: {
      sourceId: e
    }
  };
}
function oi(e) {
  return {
    type: xt,
    payload: {
      targetId: e
    }
  };
}
function si(e) {
  return {
    type: Mt,
    payload: {
      sourceId: e
    }
  };
}
function li(e) {
  return {
    type: rt,
    payload: {
      targetId: e
    }
  };
}
function hn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hn(Object(n), !0).forEach(function(r) {
      ui(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ui(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ci = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function di() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ci, t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
  switch (t.type) {
    case Je:
      return oe(oe({}, e), {}, {
        itemType: n.itemType,
        item: n.item,
        sourceId: n.sourceId,
        isSourcePublic: n.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case Pt:
      return oe(oe({}, e), {}, {
        isSourcePublic: !0
      });
    case et:
      return oe(oe({}, e), {}, {
        targetIds: n.targetIds
      });
    case rt:
      return e.targetIds.indexOf(n.targetId) === -1 ? e : oe(oe({}, e), {}, {
        targetIds: _a(e.targetIds, n.targetId)
      });
    case tt:
      return oe(oe({}, e), {}, {
        dropResult: n.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case nt:
      return oe(oe({}, e), {}, {
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
function fi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Rt:
    case xt:
      return e + 1;
    case Mt:
    case rt:
      return e - 1;
    default:
      return e;
  }
}
var Ze = [], $t = [];
Ze.__IS_NONE__ = !0;
$t.__IS_ALL__ = !0;
function hi(e, t) {
  if (e === Ze)
    return !1;
  if (e === $t || typeof t > "u")
    return !0;
  var n = ka(t, e);
  return n.length > 0;
}
function pi() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case et:
      break;
    case Rt:
    case xt:
    case rt:
    case Mt:
      return Ze;
    case Je:
    case Pt:
    case nt:
    case tt:
    default:
      return $t;
  }
  var t = e.payload, n = t.targetIds, r = n === void 0 ? [] : n, a = t.prevTargetIds, i = a === void 0 ? [] : a, s = Ia(r, i), l = s.length > 0 || !ni(r, i);
  if (!l)
    return Ze;
  var u = i[i.length - 1], h = r[r.length - 1];
  return u !== h && (u && s.push(u), h && s.push(h)), s;
}
function gi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return e + 1;
}
function pn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pn(Object(n), !0).forEach(function(r) {
      mi(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function mi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function vi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: pi(e.dirtyHandlerIds, {
      type: t.type,
      payload: gn(gn({}, t.payload), {}, {
        prevTargetIds: Ea(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: ai(e.dragOffset, t),
    refCount: fi(e.refCount, t),
    dragOperation: di(e.dragOperation, t),
    stateId: gi(e.stateId)
  };
}
function yi(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function br(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function bi(e) {
  var t = e.clientOffset, n = e.initialClientOffset, r = e.initialSourceClientOffset;
  return !t || !n || !r ? null : br(yi(t, r), n);
}
function Di(e) {
  var t = e.clientOffset, n = e.initialClientOffset;
  return !t || !n ? null : br(t, n);
}
function Si(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function wi(e, t, n) {
  return t && mn(e.prototype, t), n && mn(e, n), e;
}
function vn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ti = /* @__PURE__ */ function() {
  function e(t, n) {
    Si(this, e), vn(this, "store", void 0), vn(this, "registry", void 0), this.store = t, this.registry = n;
  }
  return wi(e, [{
    key: "subscribeToStateChange",
    value: function(n) {
      var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      }, i = a.handlerIds;
      F(typeof n == "function", "listener must be a function."), F(typeof i > "u" || Array.isArray(i), "handlerIds, when specified, must be an array of strings.");
      var s = this.store.getState().stateId, l = function() {
        var h = r.store.getState(), m = h.stateId;
        try {
          var d = m === s || m === s + 1 && !hi(h.dirtyHandlerIds, i);
          d || n();
        } finally {
          s = m;
        }
      };
      return this.store.subscribe(l);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(n) {
      var r = this;
      F(typeof n == "function", "listener must be a function.");
      var a = this.store.getState().dragOffset, i = function() {
        var l = r.store.getState().dragOffset;
        l !== a && (a = l, n());
      };
      return this.store.subscribe(i);
    }
  }, {
    key: "canDragSource",
    value: function(n) {
      if (!n)
        return !1;
      var r = this.registry.getSource(n);
      return F(r, "Expected to find a valid source. sourceId=".concat(n)), this.isDragging() ? !1 : r.canDrag(this, n);
    }
  }, {
    key: "canDropOnTarget",
    value: function(n) {
      if (!n)
        return !1;
      var r = this.registry.getTarget(n);
      if (F(r, "Expected to find a valid target. targetId=".concat(n)), !this.isDragging() || this.didDrop())
        return !1;
      var a = this.registry.getTargetType(n), i = this.getItemType();
      return Dt(a, i) && r.canDrop(this, n);
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
      var r = this.registry.getSource(n, !0);
      if (F(r, "Expected to find a valid source. sourceId=".concat(n)), !this.isDragging() || !this.isSourcePublic())
        return !1;
      var a = this.registry.getSourceType(n), i = this.getItemType();
      return a !== i ? !1 : r.isDragging(this, n);
    }
  }, {
    key: "isOverTarget",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shallow: !1
      };
      if (!n)
        return !1;
      var a = r.shallow;
      if (!this.isDragging())
        return !1;
      var i = this.registry.getTargetType(n), s = this.getItemType();
      if (s && !Dt(i, s))
        return !1;
      var l = this.getTargetIds();
      if (!l.length)
        return !1;
      var u = l.indexOf(n);
      return a ? u === l.length - 1 : u > -1;
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
      return bi(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return Di(this.store.getState().dragOffset);
    }
  }]), e;
}(), Ci = 0;
function Oi() {
  return Ci++;
}
function qe(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qe = function(n) {
    return typeof n;
  } : qe = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qe(e);
}
function Ei(e) {
  F(typeof e.canDrag == "function", "Expected canDrag to be a function."), F(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), F(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function _i(e) {
  F(typeof e.canDrop == "function", "Expected canDrop to be a function."), F(typeof e.hover == "function", "Expected hover to be a function."), F(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function St(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(function(n) {
      return St(n, !1);
    });
    return;
  }
  F(typeof e == "string" || qe(e) === "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const yn = typeof global < "u" ? global : self, Dr = yn.MutationObserver || yn.WebKitMutationObserver;
function Sr(e) {
  return function() {
    const n = setTimeout(a, 0), r = setInterval(a, 50);
    function a() {
      clearTimeout(n), clearInterval(r), e();
    }
  };
}
function Ii(e) {
  let t = 1;
  const n = new Dr(e), r = document.createTextNode("");
  return n.observe(r, {
    characterData: !0
  }), function() {
    t = -t, r.data = t;
  };
}
const ki = typeof Dr == "function" ? (
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
  Ii
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
  Sr
);
class Ni {
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
    const { queue: n, requestFlush: r } = this;
    n.length || (r(), this.flushing = !0), n[n.length] = t;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: t } = this;
      for (; this.index < t.length; ) {
        const n = this.index;
        if (this.index++, t[n].call(), this.index > this.capacity) {
          for (let r = 0, a = t.length - this.index; r < a; r++)
            t[r] = t[r + this.index];
          t.length -= this.index, this.index = 0;
        }
      }
      t.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (t) => {
      this.pendingErrors.push(t), this.requestErrorThrow();
    }, this.requestFlush = ki(this.flush), this.requestErrorThrow = Sr(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class Ai {
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
class Fi {
  create(t) {
    const n = this.freeTasks, r = n.length ? n.pop() : new Ai(
      this.onError,
      (a) => n[n.length] = a
    );
    return r.task = t, r;
  }
  constructor(t) {
    this.onError = t, this.freeTasks = [];
  }
}
const wr = new Ni(), Li = new Fi(wr.registerPendingError);
function Pi(e) {
  wr.enqueueTask(Li.create(e));
}
function Ri(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function xi(e, t, n) {
  return t && bn(e.prototype, t), n && bn(e, n), e;
}
function Ee(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Mi(e, t) {
  return Ui(e) || Vi(e, t) || Bi(e, t) || $i();
}
function $i() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bi(e, t) {
  if (e) {
    if (typeof e == "string")
      return Dn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Dn(e, t);
  }
}
function Dn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Vi(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(a = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return r;
  }
}
function Ui(e) {
  if (Array.isArray(e))
    return e;
}
function zi(e) {
  var t = Oi().toString();
  switch (e) {
    case le.SOURCE:
      return "S".concat(t);
    case le.TARGET:
      return "T".concat(t);
    default:
      throw new Error("Unknown Handler Role: ".concat(e));
  }
}
function Sn(e) {
  switch (e[0]) {
    case "S":
      return le.SOURCE;
    case "T":
      return le.TARGET;
    default:
      F(!1, "Cannot parse handler ID: ".concat(e));
  }
}
function wn(e, t) {
  var n = e.entries(), r = !1;
  do {
    var a = n.next(), i = a.done, s = Mi(a.value, 2), l = s[1];
    if (l === t)
      return !0;
    r = !!i;
  } while (!r);
  return !1;
}
var Hi = /* @__PURE__ */ function() {
  function e(t) {
    Ri(this, e), Ee(this, "types", /* @__PURE__ */ new Map()), Ee(this, "dragSources", /* @__PURE__ */ new Map()), Ee(this, "dropTargets", /* @__PURE__ */ new Map()), Ee(this, "pinnedSourceId", null), Ee(this, "pinnedSource", null), Ee(this, "store", void 0), this.store = t;
  }
  return xi(e, [{
    key: "addSource",
    value: function(n, r) {
      St(n), Ei(r);
      var a = this.addHandler(le.SOURCE, n, r);
      return this.store.dispatch(ii(a)), a;
    }
  }, {
    key: "addTarget",
    value: function(n, r) {
      St(n, !0), _i(r);
      var a = this.addHandler(le.TARGET, n, r);
      return this.store.dispatch(oi(a)), a;
    }
  }, {
    key: "containsHandler",
    value: function(n) {
      return wn(this.dragSources, n) || wn(this.dropTargets, n);
    }
  }, {
    key: "getSource",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      F(this.isSourceId(n), "Expected a valid source ID.");
      var a = r && n === this.pinnedSourceId, i = a ? this.pinnedSource : this.dragSources.get(n);
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
      var r = Sn(n);
      return r === le.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(n) {
      var r = Sn(n);
      return r === le.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(n) {
      var r = this;
      F(this.getSource(n), "Expected an existing source."), this.store.dispatch(si(n)), Pi(function() {
        r.dragSources.delete(n), r.types.delete(n);
      });
    }
  }, {
    key: "removeTarget",
    value: function(n) {
      F(this.getTarget(n), "Expected an existing target."), this.store.dispatch(li(n)), this.dropTargets.delete(n), this.types.delete(n);
    }
  }, {
    key: "pinSource",
    value: function(n) {
      var r = this.getSource(n);
      F(r, "Expected an existing source."), this.pinnedSourceId = n, this.pinnedSource = r;
    }
  }, {
    key: "unpinSource",
    value: function() {
      F(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function(n, r, a) {
      var i = zi(n);
      return this.types.set(i, r), n === le.SOURCE ? this.dragSources.set(i, a) : n === le.TARGET && this.dropTargets.set(i, a), i;
    }
  }]), e;
}();
function ji(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a = qi(r), i = new Ti(a, new Hi(a)), s = new Ja(a, i), l = e(s, t, n);
  return s.receiveBackend(l), s;
}
function qi(e) {
  var t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return Jr(vi, e && t && t({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var Gi = ["children"];
function Wi(e, t) {
  return Xi(e) || Ki(e, t) || Zi(e, t) || Qi();
}
function Qi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zi(e, t) {
  if (e) {
    if (typeof e == "string")
      return Tn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Tn(e, t);
  }
}
function Tn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Ki(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(a = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return r;
  }
}
function Xi(e) {
  if (Array.isArray(e))
    return e;
}
function Yi(e, t) {
  if (e == null)
    return {};
  var n = Ji(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ji(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Cn = 0, Ge = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), eo = y.memo(function(t) {
  var n = t.children, r = Yi(t, Gi), a = to(r), i = Wi(a, 2), s = i[0], l = i[1];
  return y.useEffect(function() {
    if (l) {
      var u = Tr();
      return ++Cn, function() {
        --Cn === 0 && (u[Ge] = null);
      };
    }
  }, []), o(vr.Provider, Object.assign({
    value: s
  }, {
    children: n
  }), void 0);
});
function to(e) {
  if ("manager" in e) {
    var t = {
      dragDropManager: e.manager
    };
    return [t, !1];
  }
  var n = no(e.backend, e.context, e.options, e.debugMode), r = !e.context;
  return [n, r];
}
function no(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tr(), n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, a = t;
  return a[Ge] || (a[Ge] = {
    dragDropManager: ji(e, t, n, r)
  }), a[Ge];
}
function Tr() {
  return typeof global < "u" ? global : window;
}
function ro(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function On(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ao(e, t, n) {
  return t && On(e.prototype, t), n && On(e, n), e;
}
function En(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ut = !1, ct = !1, io = /* @__PURE__ */ function() {
  function e(t) {
    ro(this, e), En(this, "internalMonitor", void 0), En(this, "sourceId", null), this.internalMonitor = t.getMonitor();
  }
  return ao(e, [{
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
      F(!ut, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return ut = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        ut = !1;
      }
    }
  }, {
    key: "isDragging",
    value: function() {
      if (!this.sourceId)
        return !1;
      F(!ct, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return ct = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        ct = !1;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function(n, r) {
      return this.internalMonitor.subscribeToStateChange(n, r);
    }
  }, {
    key: "isDraggingSource",
    value: function(n) {
      return this.internalMonitor.isDraggingSource(n);
    }
  }, {
    key: "isOverTarget",
    value: function(n, r) {
      return this.internalMonitor.isOverTarget(n, r);
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
function oo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _n(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function so(e, t, n) {
  return t && _n(e.prototype, t), n && _n(e, n), e;
}
function In(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dt = !1, lo = /* @__PURE__ */ function() {
  function e(t) {
    oo(this, e), In(this, "internalMonitor", void 0), In(this, "targetId", null), this.internalMonitor = t.getMonitor();
  }
  return so(e, [{
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
    value: function(n, r) {
      return this.internalMonitor.subscribeToStateChange(n, r);
    }
  }, {
    key: "canDrop",
    value: function() {
      if (!this.targetId)
        return !1;
      F(!dt, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return dt = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        dt = !1;
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
function uo(e) {
  if (typeof e.type != "string") {
    var t = e.type.displayName || e.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(t, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function co(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!y.isValidElement(t)) {
      var r = t;
      return e(r, n), r;
    }
    var a = t;
    uo(a);
    var i = n ? function(s) {
      return e(s, n);
    } : e;
    return fo(a, i);
  };
}
function Cr(e) {
  var t = {};
  return Object.keys(e).forEach(function(n) {
    var r = e[n];
    if (n.endsWith("Ref"))
      t[n] = e[n];
    else {
      var a = co(r);
      t[n] = function() {
        return a;
      };
    }
  }), t;
}
function kn(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
function fo(e, t) {
  var n = e.ref;
  return F(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? y.cloneElement(e, {
    ref: function(a) {
      kn(n, a), kn(t, a);
    }
  }) : y.cloneElement(e, {
    ref: t
  });
}
function We(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? We = function(n) {
    return typeof n;
  } : We = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, We(e);
}
function wt(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && We(e) === "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Tt(e, t, n, r) {
  var a = n ? n.call(r, e, t) : void 0;
  if (a !== void 0)
    return !!a;
  if (e === t)
    return !0;
  if (typeof e != "object" || !e || typeof t != "object" || !t)
    return !1;
  var i = Object.keys(e), s = Object.keys(t);
  if (i.length !== s.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(t), u = 0; u < i.length; u++) {
    var h = i[u];
    if (!l(h))
      return !1;
    var m = e[h], d = t[h];
    if (a = n ? n.call(r, m, d, h) : void 0, a === !1 || a === void 0 && m !== d)
      return !1;
  }
  return !0;
}
function ho(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Nn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function po(e, t, n) {
  return t && Nn(e.prototype, t), n && Nn(e, n), e;
}
function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var go = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    ho(this, e), Y(this, "hooks", Cr({
      dragSource: function(a, i) {
        n.clearDragSource(), n.dragSourceOptions = i || null, wt(a) ? n.dragSourceRef = a : n.dragSourceNode = a, n.reconnectDragSource();
      },
      dragPreview: function(a, i) {
        n.clearDragPreview(), n.dragPreviewOptions = i || null, wt(a) ? n.dragPreviewRef = a : n.dragPreviewNode = a, n.reconnectDragPreview();
      }
    })), Y(this, "handlerId", null), Y(this, "dragSourceRef", null), Y(this, "dragSourceNode", void 0), Y(this, "dragSourceOptionsInternal", null), Y(this, "dragSourceUnsubscribe", void 0), Y(this, "dragPreviewRef", null), Y(this, "dragPreviewNode", void 0), Y(this, "dragPreviewOptionsInternal", null), Y(this, "dragPreviewUnsubscribe", void 0), Y(this, "lastConnectedHandlerId", null), Y(this, "lastConnectedDragSource", null), Y(this, "lastConnectedDragSourceOptions", null), Y(this, "lastConnectedDragPreview", null), Y(this, "lastConnectedDragPreviewOptions", null), Y(this, "backend", void 0), this.backend = t;
  }
  return po(e, [{
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
      var n = this.dragSource, r = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (r && this.disconnectDragSource(), !!this.handlerId) {
        if (!n) {
          this.lastConnectedDragSource = n;
          return;
        }
        r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = n, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, n, this.dragSourceOptions));
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function() {
      var n = this.dragPreview, r = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (r && this.disconnectDragPreview(), !!this.handlerId) {
        if (!n) {
          this.lastConnectedDragPreview = n;
          return;
        }
        r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = n, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, n, this.dragPreviewOptions));
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
      return !Tt(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function() {
      return !Tt(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
function mo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function An(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function vo(e, t, n) {
  return t && An(e.prototype, t), n && An(e, n), e;
}
function pe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var yo = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    mo(this, e), pe(this, "hooks", Cr({
      dropTarget: function(a, i) {
        n.clearDropTarget(), n.dropTargetOptions = i, wt(a) ? n.dropTargetRef = a : n.dropTargetNode = a, n.reconnect();
      }
    })), pe(this, "handlerId", null), pe(this, "dropTargetRef", null), pe(this, "dropTargetNode", void 0), pe(this, "dropTargetOptionsInternal", null), pe(this, "unsubscribeDropTarget", void 0), pe(this, "lastConnectedHandlerId", null), pe(this, "lastConnectedDropTarget", null), pe(this, "lastConnectedDropTargetOptions", null), pe(this, "backend", void 0), this.backend = t;
  }
  return vo(e, [{
    key: "connectTarget",
    get: function() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function() {
      var n = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      n && this.disconnectDropTarget();
      var r = this.dropTarget;
      if (this.handlerId) {
        if (!r) {
          this.lastConnectedDropTarget = r;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = r, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, r, this.dropTargetOptions));
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
      return !Tt(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
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
function bo(e, t, n) {
  var r = n.getRegistry(), a = r.addTarget(e, t);
  return [a, function() {
    return r.removeTarget(a);
  }];
}
function Do(e, t, n) {
  var r = n.getRegistry(), a = r.addSource(e, t);
  return [a, function() {
    return r.removeSource(a);
  }];
}
var we = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function Qe(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qe = function(n) {
    return typeof n;
  } : Qe = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Qe(e);
}
function So(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function wo(e, t, n) {
  return t && Fn(e.prototype, t), n && Fn(e, n), e;
}
function ft(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var To = /* @__PURE__ */ function() {
  function e(t, n, r) {
    So(this, e), ft(this, "spec", void 0), ft(this, "monitor", void 0), ft(this, "connector", void 0), this.spec = t, this.monitor = n, this.connector = r;
  }
  return wo(e, [{
    key: "beginDrag",
    value: function() {
      var n, r = this.spec, a = this.monitor, i = null;
      return Qe(r.item) === "object" ? i = r.item : typeof r.item == "function" ? i = r.item(a) : i = {}, (n = i) !== null && n !== void 0 ? n : null;
    }
  }, {
    key: "canDrag",
    value: function() {
      var n = this.spec, r = this.monitor;
      return typeof n.canDrag == "boolean" ? n.canDrag : typeof n.canDrag == "function" ? n.canDrag(r) : !0;
    }
  }, {
    key: "isDragging",
    value: function(n, r) {
      var a = this.spec, i = this.monitor, s = a.isDragging;
      return s ? s(i) : r === n.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
      var n = this.spec, r = this.monitor, a = this.connector, i = n.end;
      i && i(r.getItem(), r), a.reconnect();
    }
  }]), e;
}();
function Co(e, t, n) {
  var r = y.useMemo(function() {
    return new To(e, t, n);
  }, [t, n]);
  return y.useEffect(function() {
    r.spec = e;
  }, [e]), r;
}
function ke() {
  var e = y.useContext(vr), t = e.dragDropManager;
  return F(t != null, "Expected drag drop context"), t;
}
function Oo(e) {
  return y.useMemo(function() {
    var t = e.type;
    return F(t != null, "spec.type must be defined"), t;
  }, [e]);
}
function Eo(e, t) {
  return No(e) || ko(e, t) || Io(e, t) || _o();
}
function _o() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Io(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ln(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ln(e, t);
  }
}
function Ln(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ko(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(a = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return r;
  }
}
function No(e) {
  if (Array.isArray(e))
    return e;
}
function Ao(e, t, n) {
  var r = ke(), a = Co(e, t, n), i = Oo(e);
  we(function() {
    if (i != null) {
      var l = Do(i, a, r), u = Eo(l, 2), h = u[0], m = u[1];
      return t.receiveHandlerId(h), n.receiveHandlerId(h), m;
    }
  }, [r, t, n, a, i]);
}
function Fo(e) {
  return xo(e) || Ro(e) || Po(e) || Lo();
}
function Lo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Po(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ct(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ct(e, t);
  }
}
function Ro(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function xo(e) {
  if (Array.isArray(e))
    return Ct(e);
}
function Ct(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Or(e, t) {
  var n = Fo(t || []);
  return t == null && typeof e != "function" && n.push(e), y.useMemo(function() {
    return typeof e == "function" ? e() : e;
  }, n);
}
function Mo() {
  var e = ke();
  return y.useMemo(function() {
    return new io(e);
  }, [e]);
}
function $o(e, t) {
  var n = ke(), r = y.useMemo(function() {
    return new go(n.getBackend());
  }, [n]);
  return we(function() {
    return r.dragSourceOptions = e || null, r.reconnect(), function() {
      return r.disconnectDragSource();
    };
  }, [r, e]), we(function() {
    return r.dragPreviewOptions = t || null, r.reconnect(), function() {
      return r.disconnectDragPreview();
    };
  }, [r, t]), r;
}
function Bo(e, t) {
  return Ho(e) || zo(e, t) || Uo(e, t) || Vo();
}
function Vo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uo(e, t) {
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
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function zo(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(a = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return r;
  }
}
function Ho(e) {
  if (Array.isArray(e))
    return e;
}
function jo(e, t, n) {
  var r = y.useState(function() {
    return t(e);
  }), a = Bo(r, 2), i = a[0], s = a[1], l = y.useCallback(function() {
    var u = t(e);
    ca(i, u) || (s(u), n && n());
  }, [i, e, n]);
  return we(l), [i, l];
}
function qo(e, t) {
  return Zo(e) || Qo(e, t) || Wo(e, t) || Go();
}
function Go() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wo(e, t) {
  if (e) {
    if (typeof e == "string")
      return Rn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Rn(e, t);
  }
}
function Rn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Qo(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(a = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return r;
  }
}
function Zo(e) {
  if (Array.isArray(e))
    return e;
}
function Ko(e, t, n) {
  var r = jo(e, t, n), a = qo(r, 2), i = a[0], s = a[1];
  return we(function() {
    var u = e.getHandlerId();
    if (u != null)
      return e.subscribeToStateChange(s, {
        handlerIds: [u]
      });
  }, [e, s]), i;
}
function Er(e, t, n) {
  return Ko(t, e || function() {
    return {};
  }, function() {
    return n.reconnect();
  });
}
function Xo(e) {
  return y.useMemo(function() {
    return e.hooks.dragSource();
  }, [e]);
}
function Yo(e) {
  return y.useMemo(function() {
    return e.hooks.dragPreview();
  }, [e]);
}
function Jo(e, t) {
  var n = Or(e, t);
  F(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var r = Mo(), a = $o(n.options, n.previewOptions);
  return Ao(n, r, a), [Er(n.collect, r, a), Xo(a), Yo(a)];
}
function es(e) {
  var t = e.accept;
  return y.useMemo(function() {
    return F(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t];
  }, [t]);
}
function ts(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ns(e, t, n) {
  return t && xn(e.prototype, t), n && xn(e, n), e;
}
function Mn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var rs = /* @__PURE__ */ function() {
  function e(t, n) {
    ts(this, e), Mn(this, "spec", void 0), Mn(this, "monitor", void 0), this.spec = t, this.monitor = n;
  }
  return ns(e, [{
    key: "canDrop",
    value: function() {
      var n = this.spec, r = this.monitor;
      return n.canDrop ? n.canDrop(r.getItem(), r) : !0;
    }
  }, {
    key: "hover",
    value: function() {
      var n = this.spec, r = this.monitor;
      n.hover && n.hover(r.getItem(), r);
    }
  }, {
    key: "drop",
    value: function() {
      var n = this.spec, r = this.monitor;
      if (n.drop)
        return n.drop(r.getItem(), r);
    }
  }]), e;
}();
function as(e, t) {
  var n = y.useMemo(function() {
    return new rs(e, t);
  }, [t]);
  return y.useEffect(function() {
    n.spec = e;
  }, [e]), n;
}
function is(e, t) {
  return us(e) || ls(e, t) || ss(e, t) || os();
}
function os() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ss(e, t) {
  if (e) {
    if (typeof e == "string")
      return $n(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return $n(e, t);
  }
}
function $n(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ls(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(a = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return r;
  }
}
function us(e) {
  if (Array.isArray(e))
    return e;
}
function cs(e, t, n) {
  var r = ke(), a = as(e, t), i = es(e);
  we(function() {
    var l = bo(i, a, r), u = is(l, 2), h = u[0], m = u[1];
    return t.receiveHandlerId(h), n.receiveHandlerId(h), m;
  }, [r, t, a, n, i.map(function(s) {
    return s.toString();
  }).join("|")]);
}
function ds() {
  var e = ke();
  return y.useMemo(function() {
    return new lo(e);
  }, [e]);
}
function fs(e) {
  var t = ke(), n = y.useMemo(function() {
    return new yo(t.getBackend());
  }, [t]);
  return we(function() {
    return n.dropTargetOptions = e || null, n.reconnect(), function() {
      return n.disconnectDropTarget();
    };
  }, [e]), n;
}
function hs(e) {
  return y.useMemo(function() {
    return e.hooks.dropTarget();
  }, [e]);
}
function ps(e, t) {
  var n = Or(e, t), r = ds(), a = fs(n.options);
  return cs(n, r, a), [Er(n.collect, r, a), hs(a)];
}
function _r(e) {
  var t = null, n = function() {
    return t == null && (t = e()), t;
  };
  return n;
}
function gs(e, t) {
  return e.filter(function(n) {
    return n !== t;
  });
}
function ms(e, t) {
  var n = /* @__PURE__ */ new Set(), r = function(s) {
    return n.add(s);
  };
  e.forEach(r), t.forEach(r);
  var a = [];
  return n.forEach(function(i) {
    return a.push(i);
  }), a;
}
function vs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ys(e, t, n) {
  return t && Bn(e.prototype, t), n && Bn(e, n), e;
}
function Vn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var bs = /* @__PURE__ */ function() {
  function e(t) {
    vs(this, e), Vn(this, "entered", []), Vn(this, "isNodeInDocument", void 0), this.isNodeInDocument = t;
  }
  return ys(e, [{
    key: "enter",
    value: function(n) {
      var r = this, a = this.entered.length, i = function(l) {
        return r.isNodeInDocument(l) && (!l.contains || l.contains(n));
      };
      return this.entered = ms(this.entered.filter(i), [n]), a === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function(n) {
      var r = this.entered.length;
      return this.entered = gs(this.entered.filter(this.isNodeInDocument), n), r > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = [];
    }
  }]), e;
}(), Ds = _r(function() {
  return /firefox/i.test(navigator.userAgent);
}), Ir = _r(function() {
  return !!window.safari;
});
function Ss(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Un(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ws(e, t, n) {
  return t && Un(e.prototype, t), n && Un(e, n), e;
}
function Pe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var zn = /* @__PURE__ */ function() {
  function e(t, n) {
    Ss(this, e), Pe(this, "xs", void 0), Pe(this, "ys", void 0), Pe(this, "c1s", void 0), Pe(this, "c2s", void 0), Pe(this, "c3s", void 0);
    for (var r = t.length, a = [], i = 0; i < r; i++)
      a.push(i);
    a.sort(function(C, E) {
      return t[C] < t[E] ? -1 : 1;
    });
    for (var s = [], l = [], u, h, m = 0; m < r - 1; m++)
      u = t[m + 1] - t[m], h = n[m + 1] - n[m], s.push(u), l.push(h / u);
    for (var d = [l[0]], T = 0; T < s.length - 1; T++) {
      var b = l[T], O = l[T + 1];
      if (b * O <= 0)
        d.push(0);
      else {
        u = s[T];
        var I = s[T + 1], g = u + I;
        d.push(3 * g / ((g + I) / b + (g + u) / O));
      }
    }
    d.push(l[l.length - 1]);
    for (var c = [], v = [], f, S = 0; S < d.length - 1; S++) {
      f = l[S];
      var D = d[S], w = 1 / s[S], _ = D + d[S + 1] - f - f;
      c.push((f - D - _) * w), v.push(_ * w * w);
    }
    this.xs = t, this.ys = n, this.c1s = d, this.c2s = c, this.c3s = v;
  }
  return ws(e, [{
    key: "interpolate",
    value: function(n) {
      var r = this.xs, a = this.ys, i = this.c1s, s = this.c2s, l = this.c3s, u = r.length - 1;
      if (n === r[u])
        return a[u];
      for (var h = 0, m = l.length - 1, d; h <= m; ) {
        d = Math.floor(0.5 * (h + m));
        var T = r[d];
        if (T < n)
          h = d + 1;
        else if (T > n)
          m = d - 1;
        else
          return a[d];
      }
      u = Math.max(0, m);
      var b = n - r[u], O = b * b;
      return a[u] + i[u] * b + s[u] * O + l[u] * b * O;
    }
  }]), e;
}(), Ts = 1;
function kr(e) {
  var t = e.nodeType === Ts ? e : e.parentElement;
  if (!t)
    return null;
  var n = t.getBoundingClientRect(), r = n.top, a = n.left;
  return {
    x: a,
    y: r
  };
}
function Ve(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function Cs(e) {
  var t;
  return e.nodeName === "IMG" && (Ds() || !((t = document.documentElement) !== null && t !== void 0 && t.contains(e)));
}
function Os(e, t, n, r) {
  var a = e ? t.width : n, i = e ? t.height : r;
  return Ir() && e && (i /= window.devicePixelRatio, a /= window.devicePixelRatio), {
    dragPreviewWidth: a,
    dragPreviewHeight: i
  };
}
function Es(e, t, n, r, a) {
  var i = Cs(t), s = i ? e : t, l = kr(s), u = {
    x: n.x - l.x,
    y: n.y - l.y
  }, h = e.offsetWidth, m = e.offsetHeight, d = r.anchorX, T = r.anchorY, b = Os(i, t, h, m), O = b.dragPreviewWidth, I = b.dragPreviewHeight, g = function() {
    var _ = new zn([0, 0.5, 1], [
      // Dock to the top
      u.y,
      // Align at the center
      u.y / m * I,
      // Dock to the bottom
      u.y + I - m
    ]), C = _.interpolate(T);
    return Ir() && i && (C += (window.devicePixelRatio - 1) * I), C;
  }, c = function() {
    var _ = new zn([0, 0.5, 1], [
      // Dock to the left
      u.x,
      // Align at the center
      u.x / h * O,
      // Dock to the right
      u.x + O - h
    ]);
    return _.interpolate(d);
  }, v = a.offsetX, f = a.offsetY, S = v === 0 || v, D = f === 0 || f;
  return {
    x: S ? v : c(),
    y: D ? f : g()
  };
}
var Nr = "__NATIVE_FILE__", Ar = "__NATIVE_URL__", Fr = "__NATIVE_TEXT__", Lr = "__NATIVE_HTML__";
const Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: Nr,
  HTML: Lr,
  TEXT: Fr,
  URL: Ar
}, Symbol.toStringTag, { value: "Module" }));
function ht(e, t, n) {
  var r = t.reduce(function(a, i) {
    return a || e.getData(i);
  }, "");
  return r ?? n;
}
var _e;
function Ue(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ot = (_e = {}, Ue(_e, Nr, {
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
}), Ue(_e, Lr, {
  exposeProperties: {
    html: function(t, n) {
      return ht(t, n, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), Ue(_e, Ar, {
  exposeProperties: {
    urls: function(t, n) {
      return ht(t, n, "").split(`
`);
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), Ue(_e, Fr, {
  exposeProperties: {
    text: function(t, n) {
      return ht(t, n, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), _e);
function _s(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Is(e, t, n) {
  return t && jn(e.prototype, t), n && jn(e, n), e;
}
function qn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ks = /* @__PURE__ */ function() {
  function e(t) {
    _s(this, e), qn(this, "item", void 0), qn(this, "config", void 0), this.config = t, this.item = {}, this.initializeExposedProperties();
  }
  return Is(e, [{
    key: "initializeExposedProperties",
    value: function() {
      var n = this;
      Object.keys(this.config.exposeProperties).forEach(function(r) {
        Object.defineProperty(n.item, r, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return console.warn(`Browser doesn't allow reading "`.concat(r, '" until the drop event.')), null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function(n) {
      var r = this;
      if (n) {
        var a = {};
        Object.keys(this.config.exposeProperties).forEach(function(i) {
          a[i] = {
            value: r.config.exposeProperties[i](n, r.config.matchesTypes),
            configurable: !0,
            enumerable: !0
          };
        }), Object.defineProperties(this.item, a);
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
    value: function(n, r) {
      return r === n.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
    }
  }]), e;
}();
function Ns(e, t) {
  var n = new ks(Ot[e]);
  return n.loadDataTransfer(t), n;
}
function pt(e) {
  if (!e)
    return null;
  var t = Array.prototype.slice.call(e.types || []);
  return Object.keys(Ot).filter(function(n) {
    var r = Ot[n].matchesTypes;
    return r.some(function(a) {
      return t.indexOf(a) > -1;
    });
  })[0] || null;
}
function As(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Fs(e, t, n) {
  return t && Gn(e.prototype, t), n && Gn(e, n), e;
}
function gt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ls = /* @__PURE__ */ function() {
  function e(t, n) {
    As(this, e), gt(this, "ownerDocument", null), gt(this, "globalContext", void 0), gt(this, "optionsArgs", void 0), this.globalContext = t, this.optionsArgs = n;
  }
  return Fs(e, [{
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
function Wn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Qn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wn(Object(n), !0).forEach(function(r) {
      $(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ps(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Rs(e, t, n) {
  return t && Zn(e.prototype, t), n && Zn(e, n), e;
}
function $(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var xs = /* @__PURE__ */ function() {
  function e(t, n, r) {
    var a = this;
    Ps(this, e), $(this, "options", void 0), $(this, "actions", void 0), $(this, "monitor", void 0), $(this, "registry", void 0), $(this, "enterLeaveCounter", void 0), $(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), $(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), $(this, "sourceNodes", /* @__PURE__ */ new Map()), $(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), $(this, "dragStartSourceIds", null), $(this, "dropTargetIds", []), $(this, "dragEnterTargetIds", []), $(this, "currentNativeSource", null), $(this, "currentNativeHandle", null), $(this, "currentDragSourceNode", null), $(this, "altKeyPressed", !1), $(this, "mouseMoveTimeoutTimer", null), $(this, "asyncEndDragFrameId", null), $(this, "dragOverTargetIds", null), $(this, "lastClientOffset", null), $(this, "hoverRafId", null), $(this, "getSourceClientOffset", function(i) {
      var s = a.sourceNodes.get(i);
      return s && kr(s) || null;
    }), $(this, "endDragNativeItem", function() {
      a.isDraggingNativeItem() && (a.actions.endDrag(), a.currentNativeHandle && a.registry.removeSource(a.currentNativeHandle), a.currentNativeHandle = null, a.currentNativeSource = null);
    }), $(this, "isNodeInDocument", function(i) {
      return !!(i && a.document && a.document.body && a.document.body.contains(i));
    }), $(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var i = a.currentDragSourceNode;
      i == null || a.isNodeInDocument(i) || a.clearCurrentDragSourceNode() && a.monitor.isDragging() && a.actions.endDrag();
    }), $(this, "handleTopDragStartCapture", function() {
      a.clearCurrentDragSourceNode(), a.dragStartSourceIds = [];
    }), $(this, "handleTopDragStart", function(i) {
      if (!i.defaultPrevented) {
        var s = a.dragStartSourceIds;
        a.dragStartSourceIds = null;
        var l = Ve(i);
        a.monitor.isDragging() && a.actions.endDrag(), a.actions.beginDrag(s || [], {
          publishSource: !1,
          getSourceClientOffset: a.getSourceClientOffset,
          clientOffset: l
        });
        var u = i.dataTransfer, h = pt(u);
        if (a.monitor.isDragging()) {
          if (u && typeof u.setDragImage == "function") {
            var m = a.monitor.getSourceId(), d = a.sourceNodes.get(m), T = a.sourcePreviewNodes.get(m) || d;
            if (T) {
              var b = a.getCurrentSourcePreviewNodeOptions(), O = b.anchorX, I = b.anchorY, g = b.offsetX, c = b.offsetY, v = {
                anchorX: O,
                anchorY: I
              }, f = {
                offsetX: g,
                offsetY: c
              }, S = Es(d, T, l, v, f);
              u.setDragImage(T, S.x, S.y);
            }
          }
          try {
            u == null || u.setData("application/json", {});
          } catch {
          }
          a.setCurrentDragSourceNode(i.target);
          var D = a.getCurrentSourcePreviewNodeOptions(), w = D.captureDraggingState;
          w ? a.actions.publishDragSource() : setTimeout(function() {
            return a.actions.publishDragSource();
          }, 0);
        } else if (h)
          a.beginDragNativeItem(h);
        else {
          if (u && !u.types && (i.target && !i.target.hasAttribute || !i.target.hasAttribute("draggable")))
            return;
          i.preventDefault();
        }
      }
    }), $(this, "handleTopDragEndCapture", function() {
      a.clearCurrentDragSourceNode() && a.monitor.isDragging() && a.actions.endDrag();
    }), $(this, "handleTopDragEnterCapture", function(i) {
      a.dragEnterTargetIds = [];
      var s = a.enterLeaveCounter.enter(i.target);
      if (!(!s || a.monitor.isDragging())) {
        var l = i.dataTransfer, u = pt(l);
        u && a.beginDragNativeItem(u, l);
      }
    }), $(this, "handleTopDragEnter", function(i) {
      var s = a.dragEnterTargetIds;
      if (a.dragEnterTargetIds = [], !!a.monitor.isDragging()) {
        a.altKeyPressed = i.altKey, s.length > 0 && a.actions.hover(s, {
          clientOffset: Ve(i)
        });
        var l = s.some(function(u) {
          return a.monitor.canDropOnTarget(u);
        });
        l && (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = a.getCurrentDropEffect()));
      }
    }), $(this, "handleTopDragOverCapture", function() {
      a.dragOverTargetIds = [];
    }), $(this, "handleTopDragOver", function(i) {
      var s = a.dragOverTargetIds;
      if (a.dragOverTargetIds = [], !a.monitor.isDragging()) {
        i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none");
        return;
      }
      a.altKeyPressed = i.altKey, a.lastClientOffset = Ve(i), a.hoverRafId === null && typeof requestAnimationFrame < "u" && (a.hoverRafId = requestAnimationFrame(function() {
        a.monitor.isDragging() && a.actions.hover(s || [], {
          clientOffset: a.lastClientOffset
        }), a.hoverRafId = null;
      }));
      var l = (s || []).some(function(u) {
        return a.monitor.canDropOnTarget(u);
      });
      l ? (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = a.getCurrentDropEffect())) : a.isDraggingNativeItem() ? i.preventDefault() : (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none"));
    }), $(this, "handleTopDragLeaveCapture", function(i) {
      a.isDraggingNativeItem() && i.preventDefault();
      var s = a.enterLeaveCounter.leave(i.target);
      s && a.isDraggingNativeItem() && setTimeout(function() {
        return a.endDragNativeItem();
      }, 0);
    }), $(this, "handleTopDropCapture", function(i) {
      if (a.dropTargetIds = [], a.isDraggingNativeItem()) {
        var s;
        i.preventDefault(), (s = a.currentNativeSource) === null || s === void 0 || s.loadDataTransfer(i.dataTransfer);
      } else
        pt(i.dataTransfer) && i.preventDefault();
      a.enterLeaveCounter.reset();
    }), $(this, "handleTopDrop", function(i) {
      var s = a.dropTargetIds;
      a.dropTargetIds = [], a.actions.hover(s, {
        clientOffset: Ve(i)
      }), a.actions.drop({
        dropEffect: a.getCurrentDropEffect()
      }), a.isDraggingNativeItem() ? a.endDragNativeItem() : a.monitor.isDragging() && a.actions.endDrag();
    }), $(this, "handleSelectStart", function(i) {
      var s = i.target;
      typeof s.dragDrop == "function" && (s.tagName === "INPUT" || s.tagName === "SELECT" || s.tagName === "TEXTAREA" || s.isContentEditable || (i.preventDefault(), s.dragDrop()));
    }), this.options = new Ls(n, r), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new bs(this.isNodeInDocument);
  }
  return Rs(e, [{
    key: "profile",
    value: function() {
      var n, r;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((n = this.dragStartSourceIds) === null || n === void 0 ? void 0 : n.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((r = this.dragOverTargetIds) === null || r === void 0 ? void 0 : r.length) || 0
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
        var r;
        (r = this.window) === null || r === void 0 || r.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function(n, r, a) {
      var i = this;
      return this.sourcePreviewNodeOptions.set(n, a), this.sourcePreviewNodes.set(n, r), function() {
        i.sourcePreviewNodes.delete(n), i.sourcePreviewNodeOptions.delete(n);
      };
    }
  }, {
    key: "connectDragSource",
    value: function(n, r, a) {
      var i = this;
      this.sourceNodes.set(n, r), this.sourceNodeOptions.set(n, a);
      var s = function(h) {
        return i.handleDragStart(h, n);
      }, l = function(h) {
        return i.handleSelectStart(h);
      };
      return r.setAttribute("draggable", "true"), r.addEventListener("dragstart", s), r.addEventListener("selectstart", l), function() {
        i.sourceNodes.delete(n), i.sourceNodeOptions.delete(n), r.removeEventListener("dragstart", s), r.removeEventListener("selectstart", l), r.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function(n, r) {
      var a = this, i = function(h) {
        return a.handleDragEnter(h, n);
      }, s = function(h) {
        return a.handleDragOver(h, n);
      }, l = function(h) {
        return a.handleDrop(h, n);
      };
      return r.addEventListener("dragenter", i), r.addEventListener("dragover", s), r.addEventListener("drop", l), function() {
        r.removeEventListener("dragenter", i), r.removeEventListener("dragover", s), r.removeEventListener("drop", l);
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
      var n = this.monitor.getSourceId(), r = this.sourceNodeOptions.get(n);
      return Qn({
        dropEffect: this.altKeyPressed ? "copy" : "move"
      }, r || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function() {
      return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function() {
      var n = this.monitor.getSourceId(), r = this.sourcePreviewNodeOptions.get(n);
      return Qn({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: !1
      }, r || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var n = this.monitor.getItemType();
      return Object.keys(Hn).some(function(r) {
        return Hn[r] === n;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function(n, r) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = Ns(n, r), this.currentNativeHandle = this.registry.addSource(n, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function(n) {
      var r = this;
      this.clearCurrentDragSourceNode(), this.currentDragSourceNode = n;
      var a = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var i;
        return (i = r.rootElement) === null || i === void 0 ? void 0 : i.addEventListener("mousemove", r.endDragIfSourceWasRemovedFromDOM, !0);
      }, a);
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
    value: function(n, r) {
      n.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(r));
    }
  }, {
    key: "handleDragEnter",
    value: function(n, r) {
      this.dragEnterTargetIds.unshift(r);
    }
  }, {
    key: "handleDragOver",
    value: function(n, r) {
      this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(r);
    }
  }, {
    key: "handleDrop",
    value: function(n, r) {
      this.dropTargetIds.unshift(r);
    }
  }]), e;
}(), Ms = function(t, n, r) {
  return new xs(t, n, r);
};
const Pr = y.createContext({}), me = () => y.useContext(Pr), $s = ({ children: e }) => {
  var s, l, u;
  const [t, n] = y.useState({}), r = (h, m = !1) => {
    let d = { object: h, show: !0, disableBgClose: m };
    n((T) => ({ ...T, overlay: { ...d } }));
  }, a = (h = !1) => {
    n((m) => ({
      ...m,
      overlay: {
        ...m.overlay,
        show: h
      }
    }));
  }, i = {
    overlay: {
      object: ((s = t.overlay) == null ? void 0 : s.object) || null,
      show: ((l = t.overlay) == null ? void 0 : l.show) || !1,
      disableBgClose: ((u = t.overlay) == null ? void 0 : u.disableBgClose) || !1,
      actions: {
        openOverlay: r,
        toggleOverlay: a
      }
    }
  };
  return /* @__PURE__ */ o(Pr.Provider, { value: i, children: e });
}, Bs = "Dashboard Description", Ke = {
  data: {},
  loading: !1,
  filteredData: {},
  preview: !1,
  tabSelected: Bs
}, Vs = {
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
  ...Ke
}, ne = y.createContext(Vs), ae = y.createContext(() => {
});
const Us = ({ disableBgClose: e, children: t, override: n = null }) => {
  let { overlay: r } = me();
  const [a, i] = y.useState(!1), [s, l] = y.useState(null), [u, h] = y.useState(!1), m = n ? n == null ? void 0 : n.show : r == null ? void 0 : r.show;
  return y.useEffect(() => {
    if (m === void 0 || m === !1)
      return;
    document.body.style.overflow = "hidden", i(!0), l("animate-in");
    const d = setTimeout(() => {
      l("show");
    }, 750);
    return () => clearTimeout(d);
  }, [m]), y.useEffect(() => {
    if (m === void 0 || m === !0)
      return;
    l("animate-out");
    const d = setTimeout(() => {
      l(null), i(!1), document.body.style.overflow = null;
    }, 400);
    return () => clearTimeout(d);
  }, [m]), y.useEffect(() => {
    if (u === !1)
      return;
    const d = setTimeout(() => {
      h(!1);
    }, 400);
    return () => clearTimeout(d);
  }, [u]), /* @__PURE__ */ o(P, { children: a && /* @__PURE__ */ p("div", { className: `cove-overlay${s ? " " + s : ""}${u ? " overlay-error" : ""}`, children: [
    /* @__PURE__ */ o("div", { className: "cove-overlay__bg", style: { cursor: e ? "default" : null }, onClick: (d) => e ? h(!0) : r ? r.actions.toggleOverlay(!1) : n ? n.actions.toggleOverlay(!1) : d.preventDefault(), role: "alert" }),
    /* @__PURE__ */ o("div", { className: "cove-overlay__wrapper", children: /* @__PURE__ */ o("div", { className: "cove-overlay__container", children: t }) })
  ] }) });
}, zs = () => {
  const { overlay: e } = me();
  return /* @__PURE__ */ o(Us, { disableBgClose: e.disableBgClose, children: e.object });
}, Rr = y.createContext({}), ze = {
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
}, Hs = [
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
], js = y.memo((e) => {
  const { config: t, updateConfig: n, loading: r, stateData: a, setParentConfig: i, isDashboard: s } = y.useContext(Rr), [l, u] = y.useState(!0), [h, m] = y.useState(!1), d = At(t, n, !0), T = (w) => {
    let _ = [...t.filters];
    _.splice(w, 1), n({ ...t, filters: _ });
  }, b = (w, _, C) => {
    let E = [...t.filters];
    E[_][w] = C, n({ ...t, filters: E });
  }, O = () => {
    let w = t.filters ? [...t.filters] : [];
    w.push({ values: [] }), n({ ...t, filters: w });
  }, I = (w = !0) => {
    let _ = {};
    return a.length && a.map((C) => Object.keys(C).forEach((E) => _[E] = !0)), Object.keys(_);
  }, g = (w) => {
    let _ = [];
    const C = t.filters[w].columnName;
    return a && C && (a.forEach(function(E) {
      E[C] !== void 0 && _.indexOf(E[C]) === -1 && _.push(E[C]);
    }), _.sort()), _;
  };
  y.useEffect(() => {
    if (i) {
      const w = S();
      i(w);
    }
  }, [t]), y.useEffect(() => {
    if (!h) {
      let w = { ...t };
      delete w.newViz, n(w);
    }
  }, []);
  const c = () => {
    u(!l), n({
      ...t,
      showEditorPanel: !l
    });
  }, v = () => /* @__PURE__ */ o("section", { className: "waiting", children: /* @__PURE__ */ p("section", { className: "waiting-container", children: [
    /* @__PURE__ */ o("h3", { children: "Error With Configuration" }),
    /* @__PURE__ */ o("p", { children: t.runtime.editorErrorMessage })
  ] }) }), f = () => /* @__PURE__ */ o("section", { className: "waiting", children: /* @__PURE__ */ p("section", { className: "waiting-container", children: [
    /* @__PURE__ */ o("h3", { children: "Finish Configuring" }),
    /* @__PURE__ */ o("p", { children: "Set all required options to the left and confirm below to display a preview of the markup." }),
    /* @__PURE__ */ o("button", { className: "btn btn-primary", style: { margin: "1em auto" }, onClick: (_) => {
      _.preventDefault();
      let C = { ...t };
      delete C.newViz, n(C);
    }, children: "I'm Done" })
  ] }) }), S = () => {
    let w = JSON.parse(JSON.stringify(t));
    return delete w.newViz, delete w.runtime, w;
  }, D = /* @__PURE__ */ p(Be, { children: [
    /* @__PURE__ */ o(Be.Section, { title: "General", children: /* @__PURE__ */ o(
      ha,
      {
        value: t.title,
        fieldName: "title",
        label: "Title",
        placeholder: "Filterable Text Title",
        updateField: d
      }
    ) }),
    /* @__PURE__ */ p(Be.Section, { title: "Data", children: [
      /* @__PURE__ */ o("div", { className: "cove-accordion__panel-section", children: /* @__PURE__ */ o("div", { className: "cove-input-group", children: /* @__PURE__ */ o(
        ve,
        {
          value: t.textColumn || "",
          fieldName: "textColumn",
          label: "Text Column",
          updateField: d,
          initial: "Select",
          options: I()
        }
      ) }) }),
      /* @__PURE__ */ o("hr", { className: "cove-accordion__divider" }),
      /* @__PURE__ */ p("label", { style: { marginBottom: "1rem" }, children: [
        /* @__PURE__ */ o("span", { className: "edit-label", children: "Data Point Filters" }),
        /* @__PURE__ */ p(x, { style: { textTransform: "none" }, children: [
          /* @__PURE__ */ o(x.Target, { children: /* @__PURE__ */ o(M, { display: "question", style: { marginLeft: "0.5rem" } }) }),
          /* @__PURE__ */ o(x.Content, { children: /* @__PURE__ */ o("p", { children: 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").' }) })
        ] })
      ] }),
      t.filters && /* @__PURE__ */ o("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" }, children: t.filters.map((w, _) => /* @__PURE__ */ p("fieldset", { className: "edit-block", children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: "remove-column",
            onClick: () => {
              T(_);
            },
            children: "Remove"
          }
        ),
        /* @__PURE__ */ p("label", { children: [
          /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Column" }),
          /* @__PURE__ */ p(
            "select",
            {
              value: w.columnName,
              onChange: (C) => {
                b("columnName", _, C.target.value);
              },
              children: [
                /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                I().map((C, E) => /* @__PURE__ */ o("option", { value: C, children: C }, E))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ p("label", { children: [
          /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Column Value" }),
          /* @__PURE__ */ p(
            "select",
            {
              value: w.columnValue,
              onChange: (C) => {
                b("columnValue", _, C.target.value);
              },
              children: [
                /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                g(_).map((C, E) => /* @__PURE__ */ o("option", { value: C, children: C }, E))
              ]
            }
          )
        ] })
      ] }, _)) }),
      /* @__PURE__ */ o(pa, { onClick: O, fluid: !0, children: "Add Filter" })
    ] }),
    /* @__PURE__ */ p(Be.Section, { title: "Visual", children: [
      /* @__PURE__ */ o(
        ve,
        {
          value: t.fontSize,
          fieldName: "fontSize",
          label: "Font Size",
          updateField: d,
          options: ["small", "medium", "large"]
        }
      ),
      /* @__PURE__ */ o("br", {}),
      /* @__PURE__ */ p("label", { children: [
        /* @__PURE__ */ o("span", { className: "edit-label", children: "Theme" }),
        /* @__PURE__ */ o("ul", { className: "color-palette", children: Hs.map((w) => /* @__PURE__ */ o(
          "li",
          {
            title: w,
            onClick: () => {
              n({ ...t, theme: w });
            },
            className: t.theme === w ? "selected " + w : w
          },
          w
        )) })
      ] }),
      /* @__PURE__ */ p("div", { className: "cove-accordion__panel-section checkbox-group", children: [
        /* @__PURE__ */ o(
          Ae,
          {
            inline: !0,
            size: "small",
            value: t.visual.border,
            section: "visual",
            fieldName: "border",
            label: "Display Border",
            updateField: d
          }
        ),
        /* @__PURE__ */ o(
          Ae,
          {
            inline: !0,
            size: "small",
            value: t.visual.borderColorTheme,
            section: "visual",
            fieldName: "borderColorTheme",
            label: "Use theme border color",
            updateField: d
          }
        ),
        /* @__PURE__ */ o(
          Ae,
          {
            size: "small",
            value: t.visual.accent,
            section: "visual",
            fieldName: "accent",
            label: "Use Accent Style",
            updateField: d
          }
        ),
        /* @__PURE__ */ o(
          Ae,
          {
            size: "small",
            value: t.visual.background,
            section: "visual",
            fieldName: "background",
            label: "Use Theme Background Color",
            updateField: d
          }
        ),
        /* @__PURE__ */ o(
          Ae,
          {
            size: "small",
            value: t.visual.hideBackgroundColor,
            section: "visual",
            fieldName: "hideBackgroundColor",
            label: "Hide Background Color",
            updateField: d
          }
        )
      ] })
    ] })
  ] });
  return r ? null : /* @__PURE__ */ o(or, { component: "EditorPanel", children: /* @__PURE__ */ p(
    De.Sidebar,
    {
      displayPanel: l,
      isDashboard: s,
      title: "Configure Filtered Text",
      onBackClick: c,
      children: [
        !t.newViz && t.runtime && t.runtime.editorErrorMessage && /* @__PURE__ */ o(v, {}),
        t.newViz && h && /* @__PURE__ */ o(f, {}),
        D
      ]
    }
  ) });
});
const xr = ({ config: e, configUrl: t, isDashboard: n = !1, isEditor: r = !1, setConfig: a }) => {
  const i = new Ce(), [s, l] = y.useState(ze), [u, h] = y.useState(!0), [m, d] = y.useState(s.data || []), [T, b] = y.useState();
  let { title: O, filters: I } = s;
  const g = s.fontSize === "small" ? "16px" : s.fontSize === "medium" ? "22px" : "27px", { contentClasses: c, innerContainerClasses: v } = ga(s), f = async () => {
    let C = e || await (await fetch(t)).json(), E = C.formattedData || C.data || {};
    C.dataUrl && (E = await (await fetch(C.dataUrl)).json(), C.dataDescription && (E = i.autoStandardize(E), E = i.developerStandardize(E, C.dataDescription))), E && (d(E), b(E));
    let L = { ...s, ...C };
    const j = { ...hr(L) };
    S(j), h(!1);
  }, S = (C) => {
    Object.keys(ze).forEach((E) => {
      C[E] && typeof C[E] == "object" && !Array.isArray(C[E]) && (C[E] = { ...ze[E], ...C[E] });
    }), C.runtime = {}, C.runtime.uniqueId = Date.now(), C.runtime.editorErrorMessage = "", l(C);
  }, D = () => {
    let C = [];
    if (I.length)
      I.map((E) => E.columnName && E.columnValue ? C = m.filter(function(L) {
        return L[E.columnName] === E.columnValue;
      }) : null);
    else
      return C = m.filter((E, L) => E[s.textColumn] && L === 0);
    return C;
  };
  y.useEffect(() => {
    f().catch((C) => console.log(C));
  }, []), y.useEffect(() => {
    e && !e.dataUrl && (S({ ...ze, ...e }), d(e.data), b(e.data));
  }, [e == null ? void 0 : e.data]);
  let w = /* @__PURE__ */ o(Nt, {});
  if (u === !1) {
    let C = /* @__PURE__ */ o(P, { children: /* @__PURE__ */ o(De.Responsive, { isEditor: r, children: /* @__PURE__ */ p("div", { className: "cove-component__content no-borders", children: [
      /* @__PURE__ */ o(ar, { classes: [`${s.theme}`], title: O, style: { fontSize: g } }),
      /* @__PURE__ */ o("div", { className: `${c.join(" ")} body`, children: D().slice(0, 1).map((E, L) => /* @__PURE__ */ p("p", { style: { fontSize: g }, children: [
        " ",
        ir(E[s.textColumn] || ""),
        " "
      ] }, L)) })
    ] }) }) });
    w = /* @__PURE__ */ p(P, { children: [
      r && /* @__PURE__ */ o(js, {}),
      C
    ] });
  }
  const _ = {
    config: s,
    updateConfig: S,
    loading: u,
    setParentConfig: a,
    isDashboard: n,
    stateData: m,
    unfilteredData: m
  };
  return /* @__PURE__ */ o(or, { component: "CdcFilteredText", children: /* @__PURE__ */ o(Rr.Provider, { value: _, children: /* @__PURE__ */ o(De.VisualizationWrapper, { config: s, isEditor: r, showEditorPanel: s == null ? void 0 : s.showEditorPanel, children: w }) }) });
}, ye = {
  "data-bite": /* @__PURE__ */ o(M, { display: "databite", base: !0 }),
  Bar: /* @__PURE__ */ o(M, { display: "chartBar", base: !0 }),
  "Spark Line": /* @__PURE__ */ o(M, { display: "chartLine" }),
  "Bump Chart": /* @__PURE__ */ o(M, { display: "chartLine" }),
  "waffle-chart": /* @__PURE__ */ o(M, { display: "grid", base: !0 }),
  "markup-include": /* @__PURE__ */ o(M, { display: "code", base: !0 }),
  Line: /* @__PURE__ */ o(M, { display: "chartLine", base: !0 }),
  Pie: /* @__PURE__ */ o(M, { display: "chartPie", base: !0 }),
  us: /* @__PURE__ */ o(M, { display: "mapUsa", base: !0 }),
  "us-county": /* @__PURE__ */ o(M, { display: "mapUsa", base: !0 }),
  world: /* @__PURE__ */ o(M, { display: "mapWorld", base: !0 }),
  "single-state": /* @__PURE__ */ o(M, { display: "mapAl", base: !0 }),
  gear: /* @__PURE__ */ o(M, { display: "gear", base: !0 }),
  gearMulti: /* @__PURE__ */ o(M, { display: "gearMulti", base: !0 }),
  tools: /* @__PURE__ */ o(M, { display: "tools", base: !0 }),
  "filtered-text": /* @__PURE__ */ o(M, { display: "filtered-text", base: !0 }),
  dashboardFilters: /* @__PURE__ */ o(M, { display: "dashboardFilters", base: !0 }),
  table: /* @__PURE__ */ o(M, { display: "table", base: !0 }),
  Sankey: /* @__PURE__ */ o(M, { display: "sankey", base: !0 })
}, qs = (e) => {
  const { type: t, visualizationType: n, general: r } = e;
  return n ? ye[n] : r != null && r.geoType ? r.geoType === "single-state" ? ye.us : ye[r.geoType] : ye[t];
};
const Mr = () => null, $r = (e) => e, Br = () => null, ge = ({ fontTheme: e = "dark", headerBgColor: t = "#fff", showDividerTop: n = !0, showDividerBottom: r = !0, showClose: a = !0, children: i, override: s = null }) => {
  let { overlay: l } = me();
  const u = y.Children.toArray(i), h = u.find((b) => (b == null ? void 0 : b.type) === Mr), m = u.find((b) => (b == null ? void 0 : b.type) === $r), d = u.find((b) => (b == null ? void 0 : b.type) === Br), T = (b) => b ? null : "none";
  return /* @__PURE__ */ p("div", { className: `cove-modal cove-modal__theme--${e}`, children: [
    (a || h) && /* @__PURE__ */ p(
      "div",
      {
        className: "cove-modal__header",
        style: {
          backgroundColor: t,
          boxShadow: T(h && n),
          padding: h ? null : "0",
          minHeight: h ? null : "unset"
        },
        children: [
          h && h.props.children,
          a && /* @__PURE__ */ o(
            "button",
            {
              className: "cove-modal--close",
              onClick: (b) => {
                if (s)
                  return s.actions.toggleOverlay(!1);
                if (l)
                  return l == null ? void 0 : l.actions.toggleOverlay(!1);
                b.preventDefault();
              },
              children: /* @__PURE__ */ o(M, { display: "close" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ o("div", { className: "cove-modal__content", children: m && m.props.children }),
    d && /* @__PURE__ */ o(
      "div",
      {
        className: "cove-modal__footer",
        style: {
          boxShadow: T(r),
          paddingTop: r ? "1rem" : null
        },
        children: d.props.children
      }
    )
  ] });
};
ge.Header = Mr;
ge.Content = $r;
ge.Footer = Br;
ge.propTypes = {
  fontTheme: Fe.oneOf(["dark", "light"]),
  headerBgColor: Fe.string,
  showDividerTop: Fe.bool,
  showDividerBottom: Fe.bool,
  showClose: Fe.bool
};
const Vr = ({ vizKey: e, rowIndex: t }) => {
  var v;
  const { config: n } = y.useContext(ne), { overlay: r } = me(), a = new Ce(), i = y.useContext(ae), [s, l] = y.useState(!1), [u, h] = y.useState(!e), [m, d] = y.useState(!!n.rows[t].multiVizColumn), T = y.useMemo(() => e && !u ? n.visualizations[e] : n.rows[t], [n.visualizations, n.rows, e, t, u]), b = (f) => {
    i(e && !u ? { type: "UPDATE_VISUALIZATION", payload: { vizKey: e, configureData: f } } : { type: "UPDATE_ROW", payload: { rowIndex: t, rowData: f } });
  }, O = ({ target: { value: f } }) => {
    b({ dataDescription: {}, formattedData: void 0, dataKey: f });
  }, I = async (f, S) => {
    const D = T.dataKey, { data: w, dataUrl: _ } = n.datasets[D];
    let C = w;
    !w && _ && (C = await $e(_), C = a.autoStandardize(C));
    const E = { ...T.dataDescription, [f]: S }, L = { data: C, dataDescription: E, formattedData: a.developerStandardize(C, E) };
    b(L), l(!0);
  }, g = (f) => {
    f !== "" && (i({ type: "UPDATE_ROW", payload: { rowIndex: t, rowData: { multiVizColumn: f } } }), l(!0));
  }, c = (f) => {
    i({ type: "UPDATE_ROW", payload: { rowIndex: t, rowData: { expandCollapseAllButtons: f } } }), l(!0);
  };
  return /* @__PURE__ */ o(ge, { children: /* @__PURE__ */ p(ge.Content, { children: [
    /* @__PURE__ */ p("div", { className: "dataset-selector-container", children: [
      "Select a dataset: ",
      /* @__PURE__ */ p("select", { className: "dataset-selector", value: T.dataKey || "", onChange: O, children: [
        /* @__PURE__ */ o("option", { value: "", children: "Select a dataset" }),
        n.datasets && Object.keys(n.datasets).map((f) => /* @__PURE__ */ o("option", { children: f }, f))
      ] }),
      e && /* @__PURE__ */ o(
        He,
        {
          label: "Apply To Row",
          value: u,
          updateField: (f, S, D, w) => {
            h(w), O({ target: { value: "" } });
          }
        }
      )
    ] }),
    T.dataKey && /* @__PURE__ */ o(
      ma,
      {
        configureData: T,
        visualizationKey: e,
        updateDescriptionProp: I
      }
    ),
    u && T.dataKey ? m ? /* @__PURE__ */ p(P, { children: [
      /* @__PURE__ */ o(ve, { options: Object.keys(((v = n.datasets[T.dataKey]) == null ? void 0 : v.data[0]) || {}), value: n.rows[t].multiVizColumn, label: "Multi-Visualization Column", initial: "--Select--", updateField: (f, S, D, w) => g(w), required: !0 }),
      /* @__PURE__ */ o(He, { value: n.rows[t].expandCollapseAllButtons, label: " Add Expand/Collapse All buttons", fieldName: "", updateField: (f, S, D, w) => c(w) })
    ] }) : /* @__PURE__ */ o(
      He,
      {
        label: "Configure Multiple Visualizations",
        value: m,
        tooltip: /* @__PURE__ */ p(x, { style: { textTransform: "none" }, children: [
          /* @__PURE__ */ o(x.Target, { children: /* @__PURE__ */ o(M, { display: "question", style: { marginLeft: "0.5rem" } }) }),
          /* @__PURE__ */ o(x.Content, { children: /* @__PURE__ */ o("p", { children: "You can select a column where for each unique value in the column the configuration for the row will be repeated in to the data preview." }) })
        ] }),
        updateField: (f, S, D, w) => {
          s && w === !0 && l(!1), d(w);
        }
      }
    ) : /* @__PURE__ */ o(P, {}),
    s && /* @__PURE__ */ o("button", { style: { margin: "1em", display: "block" }, className: "cove-button", onClick: () => r == null ? void 0 : r.actions.toggleOverlay(), children: "Continue" })
  ] }) });
}, Gs = {
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
}, ee = ({ title: e, widgetConfig: t, addVisualization: n, type: r }) => {
  var S;
  const { overlay: a } = me(), { config: i, data: s } = y.useContext(ne), l = y.useContext(ae), u = new Ce(), h = (D, w) => {
    let _ = w.getDropResult();
    if (!_)
      return null;
    const { rowIdx: C, colIdx: E } = _;
    if ((t == null ? void 0 : t.rowIdx) !== void 0)
      l({ type: "MOVE_VISUALIZATION", payload: { rowIdx: C, colIdx: E, widget: t } });
    else if (n) {
      const L = n();
      l({ type: "ADD_VISUALIZATION", payload: { newViz: L, rowIdx: C, colIdx: E } });
    }
  }, [{ isDragging: m, ...d }, T] = Jo(
    {
      type: "vis-widget",
      end: h,
      collect: (D) => ({
        isDragging: D.isDragging()
      })
    },
    [i.activeDashboard, i.rows, i.dashboard.sharedFilters]
  ), b = () => {
    t && l({
      type: "DELETE_WIDGET",
      payload: { uid: t.uid }
    });
  }, O = (D, w) => {
    const _ = new URL(D);
    return _.searchParams.set("$limit", w), _.href.replace(/%24/g, "$");
  }, I = () => {
    var C;
    const D = ((C = i.rows[t.rowIdx]) == null ? void 0 : C.dataKey) || (t == null ? void 0 : t.dataKey), w = i.datasets[D], _ = s[w == null ? void 0 : w.dataUrl];
    if (_ && !_.length) {
      const E = O(w.dataUrl, 100);
      $e(E).then((L) => {
        L.sample = !0, l({ type: "SET_DATA", payload: { ...s, [D]: L } });
      });
    }
  }, g = () => {
    t && (l({
      type: "UPDATE_VISUALIZATION",
      payload: { vizKey: t.uid, configureData: { editing: !0 } }
    }), I());
  };
  let c = !1;
  const v = !!((S = i.rows[t == null ? void 0 : t.rowIdx]) != null && S.dataKey);
  if (v || ["dashboardFilters", "markup-include"].includes(r))
    c = !0;
  else if (t != null && t.formattedData)
    c = !0;
  else if (t != null && t.dataKey && (t != null && t.dataDescription) && i.datasets[t.dataKey]) {
    const D = u.autoStandardize(i.datasets[t.dataKey].data);
    !!u.developerStandardize(D, t.dataDescription) && (c = !0);
  }
  const f = !v && (t == null ? void 0 : t.type) !== "dashboardFilters";
  return /* @__PURE__ */ o(P, { children: /* @__PURE__ */ p("div", { className: "widget", ref: T, style: { opacity: m ? 0.5 : 1 }, ...d, children: [
    /* @__PURE__ */ o(M, { display: "move", className: "drag-icon" }),
    /* @__PURE__ */ p("div", { className: "widget__content", children: [
      (t == null ? void 0 : t.rowIdx) !== void 0 && /* @__PURE__ */ p("div", { className: "widget-menu", children: [
        c && /* @__PURE__ */ o("button", { title: "Configure Visualization", className: "btn btn-configure", onClick: g, children: ye.tools }),
        f && /* @__PURE__ */ o(
          "button",
          {
            title: "Configure Data",
            className: "btn btn-configure",
            onClick: () => {
              a == null || a.actions.openOverlay(
                /* @__PURE__ */ o(Vr, { rowIndex: t.rowIdx, vizKey: t.uid })
              );
            },
            children: ye.gear
          }
        ),
        /* @__PURE__ */ o("div", { className: "widget-menu-item", onClick: b, children: /* @__PURE__ */ o(M, { display: "close", base: !0 }) })
      ] }),
      ye[r],
      /* @__PURE__ */ o("span", { children: Gs[r] }),
      /* @__PURE__ */ o("span", { children: e }),
      (t == null ? void 0 : t.newViz) && r !== "dashboardFilters" && /* @__PURE__ */ o("span", { onClick: g, className: "config-needed", children: "Configuration needed" })
    ] })
  ] }) });
}, Ws = ({ data: e, rowIdx: t, colIdx: n }) => {
  var m;
  const { config: r } = y.useContext(ne), [{ isOver: a, canDrop: i }, s] = ps(
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
    [r.activeDashboard]
  ), l = e.widget ? r == null ? void 0 : r.visualizations[e.widget] : null;
  l && !l.uid && (l.uid = e.widget);
  let u = ["builder-column", "column-size--" + e.width];
  a && i && u.push("column--drop"), l && u.push("column--populated");
  const h = (d) => {
    var T;
    if (d)
      return d.type === "map" ? d.general.title : d.type === "markup-include" ? (T = d.contentEditor) == null ? void 0 : T.title : d.title;
  };
  return /* @__PURE__ */ o("div", { className: u.join(" "), ref: s, children: l ? /* @__PURE__ */ o(
    ee,
    {
      title: h(l),
      widgetConfig: { rowIdx: t, colIdx: n, ...l },
      type: l.visualizationType ?? ((m = l.general) == null ? void 0 : m.geoType)
    }
  ) : /* @__PURE__ */ p("p", { className: "builder-column__text", children: [
    "Drag and drop ",
    /* @__PURE__ */ o("br", {}),
    " visualization"
  ] }) });
}, Qs = (e) => /* @__PURE__ */ y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ y.createElement("path", { d: "M2,16 L22,16 L22,14 L2,14 L2,16 Z M2,11 L22,11 L22,9 L2,9 L2,11 Z M2,4 L2,6 L22,6 L22,4 L2,4 Z" })), Zs = (e) => /* @__PURE__ */ y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ y.createElement("path", { d: "M22 14L22 16 13 16 13 14 22 14zM11 16L2 16 2 14 11 14 11 16zM22 4L22 6 13 6 13 4 22 4zM11 6L2 6 2 4 11 4 11 6zM22 9L22 11 13 11 13 9 22 9zM11 11L2 11 2 9 11 9 11 11z" })), Ks = (e) => /* @__PURE__ */ y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ y.createElement("path", { d: "M22,14 L22,16 L17,16 L17,14 L22,14 Z M7,14 L7,16 L2,16 L2,14 L7,14 Z M15,14 L15,16 L9,16 L9,14 L15,14 Z M22,9 L22,11 L17,11 L17,9 L22,9 Z M7,9 L7,11 L2,11 L2,9 L7,9 Z M15,9 L15,11 L9,11 L9,9 L15,9 Z M22,4 L22,6 L17,6 L17,4 L22,4 Z M7,4 L7,6 L2,6 L2,4 L7,4 Z M15,4 L15,6 L9,6 L9,4 L15,4 Z" })), Xs = (e) => /* @__PURE__ */ y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ y.createElement("path", { d: "M22,14 L22,16 L10,16 L10,14 L22,14 Z M8,14 L8,16 L2,16 L2,14 L8,14 Z M22,9 L22,11 L10,11 L10,9 L22,9 Z M8,9 L8,11 L2,11 L2,9 L8,9 Z M22,4 L22,6 L10,6 L10,4 L22,4 Z M8,4 L8,6 L2,6 L2,4 L8,4 Z" })), Ys = (e) => /* @__PURE__ */ y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ y.createElement("path", { d: "M22,14 L22,16 L16,16 L16,14 L22,14 Z M14,14 L14,16 L2,16 L2,14 L14,14 Z M22,9 L22,11 L16,11 L16,9 L22,9 Z M14,9 L14,11 L2,11 L2,9 L14,9 Z M22,4 L22,6 L16,6 L16,4 L22,4 Z M14,4 L14,6 L2,6 L2,4 L14,4 Z" })), Js = (e) => /* @__PURE__ */ y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ y.createElement("path", { d: "M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" })), el = ({ rowIdx: e }) => {
  const { config: t } = y.useContext(ne), n = y.useContext(ae), r = N.cloneDeep(t.rows), a = t.rows[e], i = (d) => n({ type: "UPDATE_CONFIG", payload: [d] }), s = y.useMemo(() => a.toggle ? "toggle" : a.columns.reduce((d, T) => (T.width && (d += T.width), d), ""), [a]), l = (d, T = void 0) => {
    const b = N.cloneDeep(r);
    b[e].toggle = T;
    const O = b[e].columns, I = O.filter((c) => c.widget);
    if (!(I.length > d.length)) {
      {
        const c = O.length > d.length ? I : O;
        b[e].columns = d.map((v, f) => {
          const S = c[f];
          return S ? { ...S, width: v } : { width: v };
        });
      }
      i({ ...t, rows: b });
    }
  }, u = (d = "down") => {
    if (e === r.length - 1 && d === "down")
      return;
    let T = d === "down" ? e + 1 : e - 1;
    const b = r[T];
    r[T] = a, r[e] = b, r[T].uuid = Date.now(), r[e].uuid = Date.now(), i({ ...t, rows: r });
    let O = d === "down" ? 202 : -202, I = d === "down" ? -202 : 202, g = document.querySelector("[data-row-id='" + e + "']"), c = document.querySelector("[data-row-id='" + T + "']");
    g.style.pointerEvents = "none", c.style.pointerEvents = "none", g.style.top = O + "px", c.style.top = I + "px", setTimeout(() => {
      g.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", c.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", g.style.top = "0", c.style.top = "0";
    }, 0), setTimeout(() => {
      g.setAttribute("style", ""), c.setAttribute("style", "");
    }, 500);
  }, h = () => {
    let d = { ...t.visualizations };
    r[e] && r[e].columns && r[e].columns.length && t.visualizations && r[e].columns.forEach((T) => {
      T.widget && delete d[T.widget];
    }), r.splice(e, 1), i({ ...t, rows: r, visualizations: d });
  };
  return /* @__PURE__ */ p("nav", { className: "row-menu", children: [
    /* @__PURE__ */ o("ul", { className: "row-menu__flyout", children: [
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "12" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([12]),
          title: "1 Column",
          children: /* @__PURE__ */ o(Qs, {})
        },
        "12"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "66" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([6, 6]),
          title: "2 Columns",
          children: /* @__PURE__ */ o(Zs, {})
        },
        "66"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "444" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([4, 4, 4]),
          title: "3 Columns",
          children: /* @__PURE__ */ o(Ks, {})
        },
        "444"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "48" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([4, 8]),
          title: "2 Columns",
          children: /* @__PURE__ */ o(Xs, {})
        },
        "48"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "84" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([8, 4]),
          title: "2 Columns",
          children: /* @__PURE__ */ o(Ys, {})
        },
        "84"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "toggle" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([12, 12, 12], !0),
          title: "Toggle between up to three visualizations",
          children: /* @__PURE__ */ o(Js, {})
        },
        "toggle"
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "spacer" }),
    /* @__PURE__ */ o(
      "button",
      {
        className: "btn btn-primary row-menu__btn border-0",
        title: "Move Row Up",
        onClick: () => u("up"),
        disabled: e === 0,
        children: /* @__PURE__ */ o(M, { display: "caretUp", color: "#fff", size: 25 })
      }
    ),
    /* @__PURE__ */ o(
      "button",
      {
        className: "btn btn-primary row-menu__btn border-0",
        title: "Move Row Down",
        onClick: () => u("down"),
        disabled: e + 1 === r.length,
        children: /* @__PURE__ */ o(M, { display: "caretDown", color: "#fff", size: 25 })
      }
    ),
    /* @__PURE__ */ o(
      "button",
      {
        className: "btn btn-danger row-menu__btn row-menu__btn--remove border-0",
        title: "Delete Row",
        onClick: h,
        disabled: e === 0 && r.length === 1,
        children: /* @__PURE__ */ o(M, { display: "close", color: "#fff", size: 25 })
      }
    )
  ] });
}, tl = ({ row: e, idx: t, uuid: n }) => {
  const { overlay: r } = me(), a = y.useContext(ae), i = () => {
    if (e.footnotesId)
      a({ type: "UPDATE_VISUALIZATION", payload: { vizKey: e.footnotesId, configureData: { editing: !0 } } });
    else {
      const s = "footnotes", l = s + Date.now();
      a({
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
  return /* @__PURE__ */ o(P, { children: /* @__PURE__ */ p("div", { className: "builder-row", "data-row-id": t, children: [
    /* @__PURE__ */ o(el, { rowIdx: t }),
    /* @__PURE__ */ o(
      "button",
      {
        title: "Configure Data",
        className: "btn btn-configure-row",
        onClick: () => {
          r == null || r.actions.openOverlay(/* @__PURE__ */ o(Vr, { rowIndex: t }));
        },
        children: ye.gearMulti
      }
    ),
    /* @__PURE__ */ o("div", { className: "column-container", children: e.columns.filter((s) => s.width).map((s, l) => /* @__PURE__ */ o(Ws, { data: s, rowIdx: t, colIdx: l }, `row-${n}-col-${l}`)) }),
    /* @__PURE__ */ p("button", { className: "btn btn-primary footnotes", onClick: i, children: [
      e.footnotesId ? "Edit" : "Add",
      " Footnotes"
    ] })
  ] }) });
}, nl = () => {
  const { config: e } = y.useContext(ne);
  if (!e)
    return null;
  const t = e.rows, n = y.useContext(ae), r = (i) => n({ type: "UPDATE_CONFIG", payload: [i] }), a = () => {
    const i = { columns: [{ width: 12 }] };
    r({
      ...e,
      rows: [...t, i],
      uuid: Date.now()
    });
  };
  return /* @__PURE__ */ p("div", { className: "builder-grid", children: [
    (t || []).map((i, s) => /* @__PURE__ */ o(tl, { row: i, idx: s, uuid: i.uuid }, s)),
    /* @__PURE__ */ o("button", { className: "btn btn-primary col", onClick: a, children: "Add Row" })
  ] });
};
const rl = (e) => /* @__PURE__ */ o(ge, { children: /* @__PURE__ */ p(ge.Content, { children: [
  /* @__PURE__ */ o("p", { children: "Are you sure you want to delete this dashboard? " }),
  /* @__PURE__ */ o("button", { className: "btn btn-danger", onClick: e, children: "DELETE" })
] }) }), al = ({ name: e, handleClick: t, tabs: n, index: r, active: a }) => {
  const [i, s] = y.useState(!1), l = y.useContext(ae), { overlay: u } = me(), h = y.createRef(), m = (g) => {
    g.stopPropagation();
    const c = h.current.value, v = c === e, f = !c, S = n.includes(c);
    !v && !f && !S && l({ type: "RENAME_DASHBOARD_TAB", payload: { current: e, new: c } }), s(!1);
  }, d = (g) => {
    g.target.className !== "remove" && (a ? s(!0) : t());
  }, T = () => {
    const g = () => {
      l({ type: "REMOVE_MULTIDASHBOARD_AT_INDEX", payload: r }), u == null || u.actions.toggleOverlay(!1);
    };
    u == null || u.actions.openOverlay(rl(g));
  }, b = (g, c) => {
    const v = g + c;
    v > -1 && v <= n.length - 1 && l({ type: "REORDER_MULTIDASHBOARDS", payload: { currentIndex: g, newIndex: g + c } });
  }, O = r !== 0, I = r <= n.length - 2;
  return /* @__PURE__ */ p("li", { className: "nav-item d-flex mt-0", children: [
    O && i && /* @__PURE__ */ o("button", { className: "border-0", onClick: () => b(r, -1), children: "<" }),
    /* @__PURE__ */ o(
      "div",
      {
        className: `edit nav-link${a ? " active" : ""}`,
        "aria-current": a ? "page" : null,
        onClick: d,
        children: i ? /* @__PURE__ */ p("div", { className: "d-flex", children: [
          /* @__PURE__ */ o("input", { type: "text", defaultValue: e, onBlur: m, ref: h }),
          /* @__PURE__ */ o("button", { className: "btn btn-link save", onClick: m, children: "save" })
        ] }) : /* @__PURE__ */ p(P, { children: [
          e,
          /* @__PURE__ */ o("button", { className: "btn btn-danger border-0 ms-1", onClick: T, children: "X" })
        ] })
      }
    ),
    I && i && /* @__PURE__ */ o("button", { className: "border-0", onClick: () => b(r, 1), children: ">" })
  ] });
}, il = () => {
  const { config: e } = y.useContext(ne), t = y.useContext(ae), n = y.useMemo(
    () => (e.multiDashboards || []).map(({ label: i }) => i),
    [e.multiDashboards]
  ), r = y.useMemo(() => e.activeDashboard, [e.activeDashboard]), a = (i) => {
    t({ type: "SAVE_CURRENT_CHANGES" }), t({ type: "SWITCH_CONFIG", payload: i });
  };
  return e.multiDashboards ? /* @__PURE__ */ p("ul", { className: "nav nav-tabs multi-config-tabs mb-4", children: [
    n.map((i, s) => /* @__PURE__ */ o(
      al,
      {
        name: i,
        tabs: n,
        index: s,
        handleClick: () => a(s),
        active: s === r
      },
      i + s
    )),
    /* @__PURE__ */ o("li", { className: "nav-item", children: /* @__PURE__ */ o("button", { className: "nav-link add", onClick: () => t({ type: "ADD_NEW_DASHBOARD" }), children: "+" }) })
  ] }) : null;
}, ol = () => {
  const { config: e } = y.useContext(ne), t = y.useContext(ae), n = y.useMemo(
    () => (e.multiDashboards || []).map(({ label: i }) => i),
    [e.multiDashboards]
  ), r = y.useMemo(() => e.activeDashboard, [e.activeDashboard]), a = (i, s) => {
    s.preventDefault(), t({ type: "SWITCH_CONFIG", payload: i }), va("cove-tab", i);
  };
  return e.multiDashboards ? /* @__PURE__ */ o("ul", { className: "nav nav-tabs multi-config-tabs mb-4", children: n.map((i, s) => /* @__PURE__ */ o("li", { className: "nav-item", children: /* @__PURE__ */ o(
    "a",
    {
      className: `nav-link${r === s ? " active" : ""}`,
      "aria-current": r === s ? "page" : null,
      href: "#",
      onClick: (l) => a(s, l),
      children: i
    }
  ) }, i + s)) }) : null;
}, Ur = ({ isEditor: e = !1 }) => e ? /* @__PURE__ */ o(il, {}) : /* @__PURE__ */ o(ol, {}), ue = (e) => {
  var O, I;
  const t = ["Dashboard Description", "Data Table Settings", "Dashboard Preview"], { visualizationKey: n, subEditor: r } = e, { config: a, setParentConfig: i, tabSelected: s, data: l } = y.useContext(ne);
  if (!a)
    return null;
  const u = y.useContext(ae), h = () => {
    if (!n)
      return;
    const g = N.cloneDeep(a);
    if (g.visualizations[n].editing = !1, u({ type: "SET_CONFIG", payload: g }), Object.values(l).some((c) => c == null ? void 0 : c.sample)) {
      const c = Object.keys(l).reduce((v, f) => (l[f].sample ? v[f] = [] : v[f] = l[f], v), {});
      u({ type: "SET_DATA", payload: c });
    }
  }, m = (g, c, v) => {
    let f = { ...a };
    f[g] || (f[g] = {}), f[g][c] = v, u({ type: "UPDATE_CONFIG", payload: [f] });
  }, d = (g = "JSON") => {
    let c = JSON.parse(JSON.stringify(a));
    return delete c.newViz, delete c.runtime, g === "JSON" ? JSON.stringify(c) : c;
  };
  y.useEffect(() => {
    const g = d(), c = new CustomEvent("updateVizConfig", { detail: g });
    if (window.dispatchEvent(c), i) {
      const v = d("object");
      i(v);
    }
  }, [a]);
  const T = (g) => {
    const { checked: c } = g.currentTarget;
    c && u({ type: "INITIALIZE_MULTIDASHBOARDS" });
  }, b = !!a.multiDashboards;
  return /* @__PURE__ */ p("div", { "aria-level": 2, role: "heading", className: `editor-heading${r ? " sub-dashboard-viz" : ""}`, children: [
    r ? /* @__PURE__ */ p("div", { className: "heading-1 back-to", onClick: h, style: { cursor: "pointer" }, children: [
      /* @__PURE__ */ o("span", { children: "←" }),
      " Back to Dashboard"
    ] }) : /* @__PURE__ */ p("div", { className: "heading-1", children: [
      "Dashboard Editor",
      " ",
      /* @__PURE__ */ p("span", { className: "small", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", onChange: T, checked: b, disabled: b }),
        " make multidashboard"
      ] }),
      /* @__PURE__ */ o("br", {}),
      /* @__PURE__ */ o(
        "input",
        {
          type: "text",
          placeholder: "Enter Dashboard Name Here",
          defaultValue: (O = a.dashboard) == null ? void 0 : O.title,
          onChange: (g) => m("dashboard", "title", g.target.value)
        }
      )
    ] }),
    !r && /* @__PURE__ */ p("div", { className: "toggle-bar__wrapper", children: [
      /* @__PURE__ */ o(Ur, { isEditor: !0 }),
      /* @__PURE__ */ o("ul", { className: "toggle-bar", children: t.map((g) => /* @__PURE__ */ o(
        "li",
        {
          className: s === g ? "active" : "inactive",
          onClick: () => {
            u({ type: "SET_TAB_SELECTED", payload: g });
          },
          children: g
        },
        g
      )) }),
      /* @__PURE__ */ p("div", { className: "heading-body", children: [
        s === "Dashboard Description" && /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            className: "description-input",
            placeholder: "Type a dashboard description here.",
            defaultValue: (I = a.dashboard) == null ? void 0 : I.description,
            onChange: (g) => m("dashboard", "description", g.target.value)
          }
        ),
        s === "Data Table Settings" && /* @__PURE__ */ p(P, { children: [
          /* @__PURE__ */ p("div", { className: "wrap", children: [
            /* @__PURE__ */ p("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.show,
                  onChange: (g) => m("table", "show", g.target.checked)
                }
              ),
              "Show Data Table(s)"
            ] }),
            /* @__PURE__ */ o("br", {}),
            /* @__PURE__ */ p("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.expanded,
                  onChange: (g) => m("table", "expanded", g.target.checked)
                }
              ),
              "Expanded by Default"
            ] }),
            /* @__PURE__ */ o("br", {})
          ] }),
          /* @__PURE__ */ p("div", { className: "wrap", children: [
            /* @__PURE__ */ p("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.limitHeight,
                  onChange: (g) => m("table", "limitHeight", g.target.checked)
                }
              ),
              "Limit Table Height"
            ] }),
            a.table.limitHeight && /* @__PURE__ */ o(
              "input",
              {
                className: "table-height-input",
                type: "text",
                placeholder: "Height (px)",
                defaultValue: a.table.height,
                onChange: (g) => m("table", "height", g.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ p("div", { className: "wrap", children: [
            /* @__PURE__ */ p("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.download,
                  onChange: (g) => m("table", "download", g.target.checked)
                }
              ),
              "Show Download CSV Link"
            ] }),
            /* @__PURE__ */ p("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.showDownloadUrl,
                  onChange: (g) => m("table", "showDownloadUrl", g.target.checked)
                }
              ),
              "Show URL to Automatically Updated Data"
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
};
const Kn = new Ce(), Te = (e, t) => {
  if (e && t)
    try {
      let n = Kn.autoStandardize(e);
      return n = Kn.developerStandardize(e, t), n;
    } catch {
      return e;
    }
  return e;
}, sl = (e) => {
  Object.keys(e.visualizations).forEach((t, n) => {
    const r = e.visualizations[t];
    if (r.dataKey && !r.data) {
      const a = e.datasets[r.dataKey].data;
      e.visualizations[t].data = a, e.visualizations[t].formattedData = Te(a, r.dataDescription);
    }
  });
}, ll = (e) => {
  e.rows.forEach((t, n) => {
    if (t.dataKey && !t.data) {
      const r = e.datasets[t.dataKey].data;
      e.rows[n].data = r, e.rows[n].formattedData = Te(r, t.dataDescription);
    }
  });
}, ul = (e) => (sl(e), ll(e), e);
const re = (e, t) => {
  const r = {
    filters: [],
    filterBehavior: "Filter Change",
    newViz: e !== "table",
    openModal: e !== "markup-include",
    uid: e + Date.now(),
    type: e
  };
  switch (e) {
    case "chart":
      r.visualizationType = t;
      break;
    case "map":
      r.general = {}, r.general.geoType = t;
      break;
    case "data-bite":
      r.visualizationType = e;
      break;
    case "table":
      const a = {
        label: "Data Table",
        show: !0,
        showDownloadUrl: !1,
        showVertical: !0,
        expanded: !0,
        collapsible: !0
      };
      r.table = a, r.columns = {}, r.dataFormat = {}, r.visualizationType = e;
      break;
    case "markup-include":
      r.contentEditor = {
        inlineHTML: "<h2>Inline HTML</h2>",
        markupVariables: [],
        showHeader: !0,
        srcUrl: "#example",
        title: "Markup Include",
        useInlineHTML: !0
      }, r.theme = "theme-blue", r.visual = {
        border: !1,
        accent: !1,
        background: !1,
        hideBackgroundColor: !1,
        borderColorTheme: !1
      }, r.showEditorPanel = !0, r.visualizationType = e;
      break;
    case "dashboardFilters": {
      r.sharedFilterIndexes = [], r.visualizationType = e;
      break;
    }
    default:
      r.visualizationType = e;
      break;
  }
  return r;
}, cl = () => {
  const [e, t] = y.useState(!1), { config: n } = y.useContext(ne), r = y.useContext(ae);
  return /* @__PURE__ */ p("div", { className: `visualizations-panel${e ? " advanced-editor" : ""}`, children: [
    /* @__PURE__ */ o("p", { style: { fontSize: "14px" }, children: "Click and drag an item onto the grid to add it to your dashboard." }),
    /* @__PURE__ */ o("span", { className: "subheading-3", children: "Chart" }),
    /* @__PURE__ */ p("div", { className: "drag-grid", children: [
      /* @__PURE__ */ o(ee, { addVisualization: () => re("chart", "Bar"), type: "Bar" }),
      /* @__PURE__ */ o(ee, { addVisualization: () => re("chart", "Line"), type: "Line" }),
      /* @__PURE__ */ o(ee, { addVisualization: () => re("chart", "Pie"), type: "Pie" }),
      /* @__PURE__ */ o(ee, { addVisualization: () => re("chart", "Sankey"), type: "Sankey" })
    ] }),
    /* @__PURE__ */ o("span", { className: "subheading-3", children: "Map" }),
    /* @__PURE__ */ p("div", { className: "drag-grid", children: [
      /* @__PURE__ */ o(ee, { addVisualization: () => re("map", "us"), type: "us" }),
      /* @__PURE__ */ o(ee, { addVisualization: () => re("map", "world"), type: "world" }),
      /* @__PURE__ */ o(ee, { addVisualization: () => re("map", "single-state"), type: "single-state" })
    ] }),
    /* @__PURE__ */ o("span", { className: "subheading-3", children: "Misc." }),
    /* @__PURE__ */ p("div", { className: "drag-grid", children: [
      /* @__PURE__ */ o(ee, { addVisualization: () => re("data-bite", ""), type: "data-bite" }),
      /* @__PURE__ */ o(ee, { addVisualization: () => re("waffle-chart", ""), type: "waffle-chart" }),
      /* @__PURE__ */ o(ee, { addVisualization: () => re("markup-include", ""), type: "markup-include" }),
      /* @__PURE__ */ o(ee, { addVisualization: () => re("filtered-text", ""), type: "filtered-text" }),
      /* @__PURE__ */ o(ee, { addVisualization: () => re("dashboardFilters", ""), type: "dashboardFilters" }),
      /* @__PURE__ */ o(ee, { addVisualization: () => re("table", ""), type: "table" })
    ] }),
    /* @__PURE__ */ o(
      ea,
      {
        loadConfig: (i) => {
          const s = i.multiDashboards ? {
            ...n,
            ...i,
            ...i.multiDashboards[n.activeDashboard],
            activeDashboard: n.activeDashboard
          } : i;
          r({ type: "APPLY_CONFIG", payload: [ul(s)] });
        },
        config: n,
        convertStateToConfig: () => {
        },
        onExpandCollapse: () => {
          t(!e);
        }
      }
    )
  ] });
}, zr = (e, t) => {
  var n;
  if ((n = t.parents) != null && n.length) {
    const r = e.find((a) => t.parents.includes(a.key));
    return r ? 1 + zr(e, r) : 1;
  } else
    return 1;
};
function dl(e) {
  let t = 1;
  return e.forEach((n) => {
    n.tier = zr(e, n), n.tier > t && (t = n.tier);
  }), t;
}
function Xn(e = [], t, n) {
  const r = N.filter(t, (a) => {
    var i;
    return a.resetLabel === a.active ? (i = a.values) == null ? void 0 : i.includes(a.resetLabel) : !0;
  });
  return e.filter((a) => !r.find((s) => {
    var d;
    const l = a[s.columnName], u = s.queuedActive || s.filterStyle === se.nestedDropdown ? [s.active, (d = s.subGrouping) == null ? void 0 : d.active] : s.active;
    let h = !0;
    if (Array.isArray(u) ? h = !u.includes(l) : h = u && l != u, s.filterStyle === "nested-dropdown" && s.subGrouping && s.active === l && h === !1) {
      const T = s.subGrouping.active, b = a[s.subGrouping.columnName];
      h = T && b !== T;
    }
    const m = s.tier === n;
    if (s.type !== "urlfilter" && m && h)
      return !0;
  }));
}
const Ie = (e, t) => {
  const n = dl(e);
  for (let r = 0; r < n; r++) {
    const a = r === n - 1, i = Xn(t, e, r + 1);
    if (a)
      return Xn(i, e, n - 1);
  }
}, fl = (e, t) => {
  const n = [];
  return Object.keys(t).forEach((r) => {
    var a;
    (a = t[r]) == null || a.forEach((i) => {
      const s = i[e];
      s && !n.includes(s) && n.push(s);
    });
  }), n;
}, Se = (e) => Object.keys((e == null ? void 0 : e.visualizations) || {}), Bt = (e) => e.reduce((t, n, r) => {
  var a;
  return (a = n.columns) == null || a.forEach((i, s) => {
    i.widget !== void 0 && (t[i.widget] = { row: r, column: s });
  }), n.footnotesId && (t[n.footnotesId] = { row: r, column: 0 }), t;
}, {}), Et = (e) => (t, n) => {
  let r = {}, a = Se(t);
  const i = Bt(t.rows);
  return t.dashboard.sharedFilters && (t.dashboard.sharedFilters.forEach((s, l) => {
    const u = !!a.find((T) => T === s.setBy), h = t.dashboard.sharedFilters[l], m = (T) => {
      if (h.values = T, T.length > 0) {
        const b = h.pivot ? h.values : h.values[0], O = pr(h);
        O ? h.active = O : h.active = h.active || b;
      }
    }, d = fl(s.columnName, n || e.data);
    u ? (h.order === "asc" && d.sort(), h.order === "desc" && d.sort().reverse(), m(d)) : (!s.values || s.values.length === 0) && s.showDropdown && m(d);
  }), a.forEach((s) => {
    var h;
    const l = i[s];
    if ((h = t.rows[l]) != null && h.datakey)
      return;
    const u = t.dashboard.sharedFilters.filter(
      (m) => m.usedBy && m.usedBy.indexOf(s) !== -1
    );
    if (u.length > 0) {
      const m = t.visualizations[s], d = t.datasets[m.dataKey], b = Te(
        (d == null ? void 0 : d.data) || m.data,
        m.dataDescription
      ) || (n || e.data)[m.dataKey];
      r[s] = Ie(u, b);
    }
  }), t.rows.forEach((s, l) => {
    const u = t.dashboard.sharedFilters.filter(
      (h) => h.usedBy && h.usedBy.indexOf(l) !== -1
    );
    if (u.length > 0) {
      const m = Te(s.data, s.dataDescription) || (n || e.data)[l];
      r[l] = Ie(u, m);
    }
  })), t.runtime = {}, [t, r];
}, Hr = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__, hl = Hr ? window.__REDUX_DEVTOOLS_EXTENSION__.connect() : null, mt = Hr ? hl : null, jr = (e) => (t, n) => {
  const r = e(t, n);
  return mt == null || mt.send(n, r), r;
}, pl = () => ({
  dashboard: { sharedFilters: [] },
  rows: [{ columns: [{ width: 12 }] }],
  visualizations: {},
  table: {
    label: "Data Table",
    show: !1,
    showDownloadUrl: !1,
    showVertical: !0
  }
}), gl = (e, t) => {
  switch (t.type) {
    case "ADD_FOOTNOTE": {
      const { id: n, rowIndex: r, config: a } = t.payload, i = e.config.rows.map((s, l) => l === r ? { ...s, footnotesId: n } : s);
      return {
        ...e,
        config: ce(
          { ...e.config, rows: i, visualizations: { ...e.config.visualizations, [n]: a } },
          e.config.activeDashboard
        )
      };
    }
    case "ADD_NEW_DASHBOARD": {
      const n = e.config.multiDashboards, r = "New Dashboard " + (n.length + 1), a = [...n, { ...pl(), label: r }];
      return Re(e, a);
    }
    case "UPDATE_CONFIG": {
      const [n, r] = Et(e)(...t.payload);
      return { ...e, config: ce(n, e.config.activeDashboard), filteredData: r };
    }
    case "APPLY_CONFIG": {
      const [n, r] = Et(e)(...t.payload), a = [...Object.values(n.visualizations), ...n.rows].map((i) => i.dataKey).reduce((i, s) => {
        var u;
        const l = e.data[s] || ((u = e.config.datasets[s]) == null ? void 0 : u.data);
        return l && (i[s] = l), i;
      }, {});
      return { ...Ke, config: ce(n, e.config.activeDashboard), filteredData: r, data: a };
    }
    case "SET_CONFIG":
      return t.payload.activeDashboard === void 0 || e.config.activeDashboard === t.payload.activeDashboard ? {
        ...e,
        config: ce({ ...e.config, ...t.payload }, t.payload.activeDashboard)
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
      const n = t.payload, r = { ...e.config.dashboard, sharedFilters: n };
      return {
        ...e,
        config: ce({ ...e.config, dashboard: r }, e.config.activeDashboard)
      };
    }
    case "SET_TAB_SELECTED":
      return { ...e, tabSelected: t.payload };
    case "REMOVE_MULTIDASHBOARD_AT_INDEX": {
      const n = [...e.config.multiDashboards];
      N.remove(n, (a, i) => i === t.payload);
      const r = {
        ...e.config,
        multiDashboards: n,
        ...n[0],
        activeDashboard: 0
      };
      return n.length === 0 ? { ...e, config: N.omit(e.config, "multiDashboards") } : Re({ ...e, config: r }, n);
    }
    case "RENAME_DASHBOARD_TAB": {
      const n = e.config.multiDashboards.map((a) => (a.label === t.payload.current && (a.label = t.payload.new), a)), r = { ...e.config, label: t.payload.new };
      return Re({ ...e, newConfig: r }, n);
    }
    case "REORDER_MULTIDASHBOARDS": {
      const { newIndex: n, currentIndex: r } = t.payload, a = [...e.config.multiDashboards];
      a.splice(n, 0, a.splice(r, 1)[0]);
      const i = { ...e.config, activeDashboard: n };
      return Re({ ...e, config: i }, a);
    }
    case "SAVE_CURRENT_CHANGES": {
      const n = e.config.activeDashboard, r = [...e.config.multiDashboards], a = r[n].label, i = N.pick(e.config, ["dashboard", "visualizations", "rows"]);
      r[n] = { ...i, label: a };
      const s = ce(e.config, n);
      return { ...e, config: s };
    }
    case "INITIALIZE_MULTIDASHBOARDS": {
      const n = "New Dashboard 1", a = [{ ...N.pick(e.config, ["dashboard", "visualizations", "rows"]), label: n }], i = { ...e.config, activeDashboard: 0 };
      return Re({ ...e, config: i }, a);
    }
    case "SWITCH_CONFIG": {
      const n = t.payload, r = e.config.multiDashboards[n], a = N.cloneDeep(e.data);
      return { ...e, data: a, config: { ...e.config, ...r, activeDashboard: n } };
    }
    case "TOGGLE_ROW": {
      const { rowIndex: n, colIndex: r } = t.payload, a = e.config.rows.map((i, s) => {
        if (s === n) {
          const l = i.columns.map((u, h) => ({ ...u, hide: h === r }));
          return { ...i, columns: l };
        }
        return i;
      });
      return { ...e, config: { ...e.config, rows: a } };
    }
    case "ADD_VISUALIZATION": {
      const { newViz: n, rowIdx: r, colIdx: a } = t.payload, i = n.uid, s = N.cloneDeep(e.config.rows);
      return s[r].columns[a].widget = i, {
        ...e,
        config: ce(
          { ...e.config, visualizations: { ...e.config.visualizations, [i]: n }, rows: s },
          e.config.activeDashboard
        )
      };
    }
    case "MOVE_VISUALIZATION": {
      const { rowIdx: n, colIdx: r, widget: a } = t.payload, i = N.cloneDeep(e.config.rows);
      return i[a.rowIdx].columns[a.colIdx].widget = null, i[n].columns[r].widget = a.uid, {
        ...e,
        config: ce({ ...e.config, rows: i }, e.config.activeDashboard)
      };
    }
    case "UPDATE_VISUALIZATION": {
      const { vizKey: n, configureData: r } = t.payload, a = { ...e.config.visualizations[n], ...r };
      return {
        ...e,
        config: ce(
          { ...e.config, visualizations: { ...e.config.visualizations, [n]: a } },
          e.config.activeDashboard
        )
      };
    }
    case "UPDATE_ROW": {
      const { rowIndex: n, rowData: r } = t.payload, a = e.config.rows.map((i, s) => s === n ? { ...i, ...r } : i);
      return { ...e, config: ce({ ...e.config, rows: a }, e.config.activeDashboard) };
    }
    case "DELETE_WIDGET": {
      const { uid: n } = t.payload, r = N.cloneDeep(e.config.rows), a = N.cloneDeep(e.config.visualizations);
      delete a[n];
      const i = N.cloneDeep(e.config.dashboard.sharedFilters);
      i && i.length > 0 && i.forEach((l) => {
        l.usedBy && l.usedBy.indexOf(n) !== -1 && l.usedBy.splice(l.usedBy.indexOf(n), 1);
      });
      const s = N.map(r, (l) => ({
        ...l,
        columns: N.filter(l.columns, (u) => u.widget !== n)
      }));
      return {
        ...e,
        config: ce(
          {
            ...e.config,
            dashboard: { ...e.config.dashboard, sharedFilters: i },
            visualizations: a,
            rows: s
          },
          e.config.activeDashboard
        )
      };
    }
    default:
      return e;
  }
}, ce = (e, t) => {
  if (t === void 0 || !e.multiDashboards)
    return e;
  const n = [...e.multiDashboards], r = n[t].label, a = N.pick(e, ["dashboard", "visualizations", "rows"]);
  return n[t] = { ...a, label: r }, { ...e, multiDashboards: n };
}, Re = (e, t) => ({
  ...e,
  config: { ...e.config, multiDashboards: t }
}), ml = jr(gl), vl = (e, t) => {
  switch (t.type) {
    case "ADD_ERROR_MESSAGE": {
      const n = t.payload;
      return [...e, n];
    }
    case "DISMISS_ERROR_MESSAGE": {
      const n = [...e];
      return N.remove(n, (r, a) => a === t.payload), n;
    }
  }
}, yl = jr(vl);
const qr = ({ children: e, visualizationKey: t, visualizationConfig: n, type: r, component: a, updateConfig: i, viewport: s }) => {
  const [l, u] = vt.useState(!0);
  return /* @__PURE__ */ o(P, { children: /* @__PURE__ */ p("div", { className: "editor-wrapper", children: [
    /* @__PURE__ */ o("button", { className: `editor-toggle ${l ? "" : "collapsed"}`, title: l ? "Collapse Editor" : "Expand Editor", onClick: () => u(!l) }),
    /* @__PURE__ */ p("section", { className: `${l ? "" : "hidden"} editor-panel cove`, children: [
      /* @__PURE__ */ p("div", { "aria-level": 2, role: "heading", className: "heading-2", children: [
        "Configure ",
        r
      ] }),
      /* @__PURE__ */ o("section", { children: e })
    ] }),
    /* @__PURE__ */ o("div", { className: "preview-wrapper", children: /* @__PURE__ */ o(a, { visualizationKey: t, config: n, updateConfig: i, configUrl: void 0, setEditing: void 0, hostname: void 0, viewport: s }) })
  ] }) });
}, bl = ({ config: e, updateConfig: t }) => {
  var i;
  const n = y.useMemo(() => At(e, t), [JSON.stringify(e)]), r = (s) => {
    const l = N.cloneDeep(e.columns);
    delete l[s], t({
      ...e,
      columns: l
    });
  }, a = Object.keys(((i = e.originalFormattedData) == null ? void 0 : i[0]) || {});
  return /* @__PURE__ */ p(fa, { allowZeroExpanded: !0, children: [
    /* @__PURE__ */ p(at, { children: [
      /* @__PURE__ */ o(it, { children: /* @__PURE__ */ o(ot, { children: "Filters" }) }),
      /* @__PURE__ */ o(st, { children: /* @__PURE__ */ o(ta, { config: e, updateField: n, rawData: e.originalFormattedData }) })
    ] }),
    /* @__PURE__ */ p(at, { children: [
      /* @__PURE__ */ o(it, { children: /* @__PURE__ */ o(ot, { children: "Columns" }) }),
      /* @__PURE__ */ o(st, { children: /* @__PURE__ */ o(la, { config: e, updateField: n, deleteColumn: r }) })
    ] }),
    /* @__PURE__ */ p(at, { children: [
      /* @__PURE__ */ o(it, { children: /* @__PURE__ */ o(ot, { children: "Data Table" }) }),
      /* @__PURE__ */ o(st, { children: /* @__PURE__ */ o(ua, { config: e, columns: a, updateField: n, isDashboard: !0 }) })
    ] })
  ] });
}, Vt = ({
  visualizationKey: e,
  config: t,
  updateConfig: n,
  viewport: r,
  isEditor: a
}) => {
  const [i, s] = y.useState(
    rn(t.filters, t.formattedData || t.data)
  );
  return y.useEffect(() => {
    var u;
    const l = ya(t.filters, t.data);
    s(rn(l, ((u = t == null ? void 0 : t.formattedData) == null ? void 0 : u.length) > 0 ? t.formattedData : t.data));
  }, [t.filters]), a ? /* @__PURE__ */ o(
    qr,
    {
      component: Vt,
      visualizationKey: e,
      visualizationConfig: t,
      updateConfig: n,
      type: "Table",
      viewport: r,
      children: /* @__PURE__ */ o(bl, { config: t, updateConfig: n }, e)
    }
  ) : /* @__PURE__ */ p(P, { children: [
    /* @__PURE__ */ o(
      ba,
      {
        config: t,
        setConfig: n,
        setFilteredData: s,
        filteredData: i,
        excludedData: t.formattedData
      }
    ),
    /* @__PURE__ */ o(
      bt,
      {
        expandDataTable: t.table.expanded,
        config: t,
        rawData: t.data,
        runtimeData: i,
        tabbingId: e,
        tableTitle: t.table.label,
        viewport: r || "lg"
      }
    )
  ] });
};
const Dl = ({ active: e, row: t, visualizations: n, setToggled: r }) => {
  const a = (i, s = null) => {
    s != null && s.key && s.key !== "Enter" || r(i);
  };
  return /* @__PURE__ */ o("div", { className: "toggle-component", children: t.columns.map((i, s) => {
    if (!i.widget)
      return null;
    const l = n[i.widget].type, u = s === e;
    return /* @__PURE__ */ p("div", { role: "radio", className: u ? "selected" : "", onClick: () => a(s), onKeyUp: (h) => a(s, h), "aria-checked": u, tabIndex: 0, "aria-label": `Toggle ${l}`, children: [
      qs(n[i.widget]),
      " ",
      /* @__PURE__ */ o("span", { children: N.capitalize(l) })
    ] }, s);
  }) });
}, Gr = {
  Apply: "Apply Button",
  OnChange: "Filter Change"
}, Yn = (e, t) => {
  const n = e[t].key, r = e.map((a, i) => {
    var s;
    return (s = a.parents) != null && s.includes(n) ? i : null;
  }).filter((a) => a !== null);
  return r.length && r.forEach((a) => {
    e[a].active = "", e[a].subGrouping && (e[a].subGrouping.active = "");
  }), r;
}, Sl = (e, t, n, r) => {
  const a = N.cloneDeep(n), i = a[e];
  if (r.filterBehavior !== Gr.Apply || r.autoLoad)
    if ((i == null ? void 0 : i.filterStyle) === se.nestedDropdown)
      a[e].active = t[0], a[e].subGrouping.active = t[1];
    else {
      a[e].active = t, Yn(a, e);
      const s = Ft();
      i.setByQueryParameter && s[i.setByQueryParameter] !== i.active && (s[i.setByQueryParameter] = i.active, gr(s));
    }
  else
    a[e].queuedActive = t;
  return [a, Yn(a, e)];
}, _t = (e, t) => {
  var r;
  const n = (r = e.sharedFilters) == null ? void 0 : r.filter(
    (a) => {
      var i;
      return a.usedBy && a.usedBy.indexOf(`${t}`) !== -1 || ((i = a.usedBy) == null ? void 0 : i.indexOf(t)) !== -1;
    }
  );
  return (n == null ? void 0 : n.length) > 0 ? n : !1;
}, xe = (e, t, n) => {
  const r = t || {}, { config: a } = e;
  return Se(a).forEach((i) => {
    const s = _t(a.dashboard, i);
    if (s) {
      const { dataKey: l, data: u, dataDescription: h } = a.visualizations[i], m = (n || e.data)[l] || u, d = (n == null ? void 0 : n[l]) || (h ? Te(m, h) : m);
      r[i] = Ie(s, d);
    }
  }), a.rows.forEach((i, s) => {
    if (i.dataKey) {
      const l = _t(a.dashboard, s), { dataKey: u, data: h, dataDescription: m } = i, d = (n || e.data)[u] || h;
      if (l) {
        const T = (n == null ? void 0 : n[u]) ?? m ? Te(d, m) : d;
        r[s] = Ie(l, T);
      } else
        r[s] = d || [];
    }
  }), r;
}, Xe = (e) => Object.values(e).some((t) => t.filterBehavior === "Apply Button" && t.type === "dashboardFilters"), wl = ({
  filter: e,
  config: t,
  isDashboard: n = !1,
  updateFilterProp: r
}) => {
  const a = e == null ? void 0 : e.subGrouping, i = Object.keys(t.datasets), s = [];
  i.map((d) => {
    Object.keys(t.datasets[d].data[0]).forEach(
      (b) => s.push({
        datasetKey: d,
        columnName: b
      })
    );
  });
  const l = [], u = (d, T) => {
    s.forEach((b) => {
      b.datasetKey === d && b.columnName !== T && l.push(b.columnName);
    });
  }, h = (d) => {
    const T = d.selectedOptions[0].dataset.set, b = d.value;
    r("columnName", b), u(T, b);
  }, m = (d) => {
    const T = d.selectedOptions[0].dataset.set, b = d.value, O = e.values.reduce((g, c) => {
      const v = N.uniq(
        t.datasets[T].data.map((f) => f[e.columnName] === c ? f[b] : "").filter((f) => f !== "")
      ).sort();
      return g[c] = {
        values: v,
        orderedValues: v
      }, g;
    }, {}), I = {
      ...a,
      columnName: b,
      valuesLookup: O
    };
    r("subGrouping", I);
  };
  return /* @__PURE__ */ p("div", { className: "nesteddropdown-editor", children: [
    !n && /* @__PURE__ */ o(
      te,
      {
        label: "Label",
        value: e.key,
        updateField: (d, T, b, O) => r("key", O)
      }
    ),
    /* @__PURE__ */ p("label", { children: [
      /* @__PURE__ */ p("div", { className: "edit-label column-heading mt-2", children: [
        "Filter Grouping",
        /* @__PURE__ */ o("span", {})
      ] }),
      /* @__PURE__ */ p("select", { value: e.columnName, onChange: (d) => h(d.target), children: [
        /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
        s == null ? void 0 : s.map((d) => /* @__PURE__ */ o(
          "option",
          {
            value: d.columnName,
            "data-set": d.datasetKey,
            children: d.columnName
          },
          `filter_${d.datasetKey}_${d.columnName} `
        ))
      ] })
    ] }),
    /* @__PURE__ */ p("label", { children: [
      /* @__PURE__ */ p("div", { className: "edit-label column-heading mt-2", children: [
        "Filter SubGrouping",
        /* @__PURE__ */ o("span", {})
      ] }),
      /* @__PURE__ */ p(
        "select",
        {
          value: (a == null ? void 0 : a.columnName) ?? "",
          onChange: (d) => {
            m(d.target);
          },
          children: [
            /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
            s.map((d) => {
              if (d.columnName !== e.columnName)
                return /* @__PURE__ */ o(
                  "option",
                  {
                    value: d.columnName,
                    "data-set": d.datasetKey,
                    children: d.columnName
                  },
                  `subFilter_${d.datasetKey}_${d.columnName} `
                );
            })
          ]
        }
      )
    ] })
  ] });
}, Tl = ({ filter: e, filterIndex: t, config: n, updateFilterProp: r }) => {
  const [a, i] = y.useState([]), s = new Ce(), l = Object.values(se), u = (n.dashboard.sharedFilters || []).filter(({ key: c, type: v }) => c !== e.key && v !== "datafilter").map(({ key: c }) => c), h = Bt(n.rows), [m, d] = y.useMemo(() => {
    const c = {}, v = Object.keys(n.visualizations).filter((D) => {
      var W;
      const w = h[D];
      if (!w)
        return !1;
      const _ = n.visualizations[D];
      if (_.type === "dashboardFilters")
        return !1;
      const C = ((W = _.general) == null ? void 0 : W.title) || _.title || D;
      c[D] = C;
      const E = _.usesSharedFilter, L = w.row, j = n.rows[L].dataKey;
      return e.setBy !== D && !E && !j;
    }), f = [];
    n.rows.forEach((D, w) => {
      D.dataKey && (c[w] = `Row ${w + 1}`, f.push(w));
    });
    const S = f.filter((D) => !e.usedBy || e.usedBy.indexOf(D.toString()) === -1);
    return [c, [...v, ...S]];
  }, [n.visualizations, e.usedBy, e.setBy, h]), T = async () => {
    const c = {}, v = Object.keys(n.datasets);
    for (let f = 0; f < v.length; f++) {
      const S = v[f];
      let D = n.datasets[S];
      if (!D.data && D.dataUrl && (D = await $e(D.dataUrl), D.dataDescription))
        try {
          D = s.autoStandardize(D.data), D = s.developerStandardize(D.data, D.dataDescription);
        } catch {
        }
      D.data && D.data.forEach((w) => {
        Object.keys(w).forEach((_) => {
          c[_] = !0;
        });
      });
    }
    i(Object.keys(c));
  };
  y.useEffect(() => {
    T();
  }, [n.datasets]);
  const b = (c, v) => {
    const D = { ...N.cloneDeep(e).apiFilter || { apiEndpoint: "", valueSelector: "", textSelector: "" }, [c]: v };
    r("apiFilter", D);
  }, O = (c) => {
    const v = n.dashboard.sharedFilters.filter(
      (f, S) => f.key === c && t !== S
    );
    r("key", v.length ? c + ` (${v.length})` : c);
  }, I = e.filterStyle === se.nestedDropdown, g = ({ isSubgroup: c = !1 }) => {
    var S, D, w;
    const v = c ? "subgroupTextSelector" : "textSelector", f = c ? "subgroupValueSelector" : "valueSelector";
    return /* @__PURE__ */ p(P, { children: [
      !c && /* @__PURE__ */ o(
        te,
        {
          label: "API Endpoint: ",
          value: (S = e.apiFilter) == null ? void 0 : S.apiEndpoint,
          updateField: (_, C, E, L) => b("apiEndpoint", L),
          tooltip: /* @__PURE__ */ o(P, { children: I && /* @__PURE__ */ p(x, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ o(x.Target, { children: /* @__PURE__ */ o(M, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ o(x.Content, { children: /* @__PURE__ */ o("p", { children: "Your API Endpoint should return both value selector values." }) })
          ] }) })
        }
      ),
      /* @__PURE__ */ p("div", { className: I ? "border border-dark p-1 my-1" : "", children: [
        /* @__PURE__ */ o(
          te,
          {
            label: `${c ? "Subgroup " : ""}Value Selector:`,
            value: ((D = e == null ? void 0 : e.apiFilter) == null ? void 0 : D[f]) || "",
            updateField: (_, C, E, L) => b(f, L),
            tooltip: /* @__PURE__ */ p(P, { children: [
              /* @__PURE__ */ p(x, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ o(x.Target, { children: /* @__PURE__ */ o(M, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                /* @__PURE__ */ o(x.Content, { children: /* @__PURE__ */ o("p", { children: "Value to use in the html option element" }) })
              ] }),
              " * Required"
            ] })
          }
        ),
        /* @__PURE__ */ o(
          te,
          {
            label: `${c ? "Subgroup " : ""}Display Text Selector:`,
            value: ((w = e == null ? void 0 : e.apiFilter) == null ? void 0 : w[v]) || "",
            updateField: (_, C, E, L) => b(v, L),
            tooltip: /* @__PURE__ */ p(P, { children: [
              /* @__PURE__ */ p(x, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ o(x.Target, { children: /* @__PURE__ */ o(M, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                /* @__PURE__ */ o(x.Content, { children: /* @__PURE__ */ o("p", { children: "Text to use in the html option element. If none is applied value selector will be used." }) })
              ] }),
              " * Optional"
            ] })
          }
        )
      ] })
    ] });
  };
  return /* @__PURE__ */ p(P, { children: [
    /* @__PURE__ */ p("label", { children: [
      /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Filter Type: " }),
      /* @__PURE__ */ p(
        "select",
        {
          defaultValue: e.type || "",
          onChange: (c) => r("type", c.target.value),
          disabled: !!e.type,
          children: [
            /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
            /* @__PURE__ */ o("option", { value: "urlfilter", children: "URL" }),
            /* @__PURE__ */ o("option", { value: "datafilter", children: "Data" })
          ]
        }
      )
    ] }),
    e.type !== void 0 && /* @__PURE__ */ p(P, { children: [
      /* @__PURE__ */ p("label", { children: [
        /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Filter Style: " }),
        /* @__PURE__ */ o(
          "select",
          {
            value: e.filterStyle || se.dropdown,
            onChange: (c) => r("filterStyle", c.target.value),
            children: l.map((c) => /* @__PURE__ */ o("option", { value: c, children: c }, `filter-style-select-item-${c}`))
          }
        )
      ] }),
      e.filterStyle === se.dropdown && /* @__PURE__ */ p("label", { children: [
        /* @__PURE__ */ o("span", { className: "me-1", children: "Show Dropdown" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "checkbox",
            checked: e.showDropdown,
            onChange: (c) => {
              r("showDropdown", !e.showDropdown);
            }
          }
        )
      ] }),
      /* @__PURE__ */ o(
        te,
        {
          label: "Label",
          value: e.key,
          updateField: (c, v, f, S) => {
            O(S);
          }
        }
      ),
      e.filterStyle === se.multiSelect && /* @__PURE__ */ o(
        te,
        {
          label: "Select Limit",
          value: e.selectLimit,
          updateField: (c, v, f, S) => r("selectLimit", S),
          type: "number",
          tooltip: /* @__PURE__ */ p(x, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ o(x.Target, { children: /* @__PURE__ */ o(M, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ o(x.Content, { children: /* @__PURE__ */ o("p", { children: "The maximum number of items that can be selected." }) })
          ] })
        }
      ),
      e.type === "urlfilter" && /* @__PURE__ */ p(P, { children: [
        !Xe(n.visualizations) && /* @__PURE__ */ p(P, { children: [
          /* @__PURE__ */ p("label", { children: [
            /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "URL to Filter: " }),
            /* @__PURE__ */ p(
              "select",
              {
                defaultValue: e.datasetKey || "",
                onChange: (c) => r("datasetKey", c.target.value),
                children: [
                  /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                  Object.keys(n.datasets).map((c) => n.datasets[c].dataUrl ? /* @__PURE__ */ o("option", { value: c, children: n.datasets[c].dataUrl }, c) : null)
                ]
              }
            )
          ] }),
          /* @__PURE__ */ p("label", { children: [
            /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Filter By: " }),
            /* @__PURE__ */ p(
              "select",
              {
                defaultValue: e.filterBy || "",
                onChange: (c) => r("filterBy", c.target.value),
                children: [
                  /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                  /* @__PURE__ */ o("option", { value: "Query String", children: "Query String" }, "query-string"),
                  /* @__PURE__ */ o("option", { value: "File Name", children: "File Name" }, "file-name")
                ]
              }
            )
          ] }),
          e.filterBy === "File Name" && /* @__PURE__ */ p(P, { children: [
            /* @__PURE__ */ o(
              te,
              {
                label: "File Name: ",
                value: e.fileName || "",
                updateField: (c, v, f, S) => r("fileName", S),
                tooltip: /* @__PURE__ */ p(x, { style: { textTransform: "none" }, children: [
                  /* @__PURE__ */ o(x.Target, { children: /* @__PURE__ */ o(M, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                  /* @__PURE__ */ o(x.Content, { children: /* @__PURE__ */ o("p", { children: "Add ${query} to replace the filename with the active dropdown value." }) })
                ] })
              }
            ),
            /* @__PURE__ */ p("label", { children: [
              /* @__PURE__ */ p("span", { className: "edit-label column-heading", children: [
                "White Space Replacments",
                /* @__PURE__ */ p(x, { style: { textTransform: "none" }, children: [
                  /* @__PURE__ */ o(x.Target, { children: /* @__PURE__ */ o(M, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                  /* @__PURE__ */ o(x.Content, { children: /* @__PURE__ */ o("p", { children: "Set how whitespace characters will be handled in the file request" }) })
                ] })
              ] }),
              /* @__PURE__ */ p(
                "select",
                {
                  defaultValue: e.whitespaceReplacement || "Keep Spaces",
                  onChange: (c) => r("whitespaceReplacement", c.target.value),
                  children: [
                    /* @__PURE__ */ o("option", { value: "Remove Spaces", children: "Remove Spaces" }, "remove-spaces"),
                    /* @__PURE__ */ o("option", { value: "Replace With Underscore", children: "Replace With Underscore" }, "replace-with-underscore"),
                    /* @__PURE__ */ o("option", { value: "Keep Spaces", children: "Keep Spaces" }, "keep-spaces")
                  ]
                }
              )
            ] })
          ] })
        ] }),
        e.filterBy === "Query String" && /* @__PURE__ */ o(
          te,
          {
            label: "Query string parameter",
            value: e.queryParameter,
            updateField: (c, v, f, S) => r("queryParameter", S)
          }
        ),
        /* @__PURE__ */ o(g, {}),
        I && /* @__PURE__ */ o(g, { isSubgroup: !0 }),
        !!u.length && /* @__PURE__ */ p("label", { children: [
          /* @__PURE__ */ o("span", { className: "edit-label column-heading mt-1", children: "Parent Filter(s): " }),
          /* @__PURE__ */ o(
            lt,
            {
              label: "Parent Filter(s): ",
              options: u.map((c) => ({ value: c, label: c })),
              fieldName: "parents",
              selected: e.parents,
              updateField: (c, v, f, S) => {
                r("parents", S);
              }
            }
          )
        ] }),
        /* @__PURE__ */ p("label", { children: [
          /* @__PURE__ */ p("span", { className: "edit-label column-heading mt-1", children: [
            "Used By: (optional)",
            /* @__PURE__ */ p(x, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(x.Target, { children: /* @__PURE__ */ o(M, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(x.Content, { children: /* @__PURE__ */ o("p", { children: "Select if you would like specific visualizations or rows to use this filter. Otherwise the filter will be added to all api requests." }) })
            ] })
          ] }),
          /* @__PURE__ */ o(
            lt,
            {
              options: d.map((c) => ({
                value: c,
                label: m[c]
              })),
              fieldName: "usedBy",
              selected: e.usedBy,
              updateField: (c, v, f, S) => {
                r("usedBy", S);
              }
            }
          )
        ] }),
        /* @__PURE__ */ o(
          te,
          {
            label: "Reset Label: ",
            value: e.resetLabel || "",
            updateField: (c, v, f, S) => r("resetLabel", S)
          }
        ),
        /* @__PURE__ */ o(
          te,
          {
            label: "Default Value Set By Query String Parameter: ",
            value: e.setByQueryParameter || "",
            updateField: (c, v, f, S) => r("setByQueryParameter", S)
          }
        )
      ] }),
      e.type === "datafilter" && /* @__PURE__ */ p(P, { children: [
        e.filterStyle !== se.nestedDropdown ? /* @__PURE__ */ p(P, { children: [
          /* @__PURE__ */ p("label", { children: [
            /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Filter: " }),
            /* @__PURE__ */ p(
              "select",
              {
                value: e.columnName,
                onChange: (c) => {
                  r("columnName", c.target.value);
                },
                children: [
                  /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                  a.map((c) => /* @__PURE__ */ o("option", { value: c, children: c }, `filter-column-select-item-${c}`))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o(
            yt,
            {
              value: e.active,
              options: n.dashboard.sharedFilters[t].values,
              updateField: (c, v, f, S) => r("active", S),
              label: "Filter Default Value",
              initial: "Select"
            }
          ),
          /* @__PURE__ */ o(
            yt,
            {
              value: e.order || "asc",
              options: Da,
              updateField: (c, v, f, S) => r("order", S),
              label: "Filter Order"
            }
          ),
          e.order === "cust" && /* @__PURE__ */ o(
            na,
            {
              orderedValues: e.orderedValues || e.values,
              handleFilterOrder: (c, v) => {
                const f = [...e.values], [S] = f.splice(c, 1);
                f.splice(v, 0, S), r("orderedValues", f);
              }
            }
          ),
          /* @__PURE__ */ p("label", { children: [
            /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Show Dropdown" }),
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                defaultChecked: e.showDropdown === !0,
                onChange: (c) => {
                  r("showDropdown", !e.showDropdown);
                }
              }
            )
          ] })
        ] }) : /* @__PURE__ */ o(
          wl,
          {
            filter: e,
            updateFilterProp: (c, v) => {
              r(c, v);
            },
            isDashboard: !0,
            config: n
          }
        ),
        /* @__PURE__ */ p("label", { children: [
          /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Set By: " }),
          /* @__PURE__ */ p("select", { value: e.setBy, onChange: (c) => r("setBy", c.target.value), children: [
            /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
            Object.keys(n.visualizations).filter((c) => n.visualizations[c].type !== "dashboardFilters").map((c) => {
              var f;
              const v = n.visualizations[c];
              return /* @__PURE__ */ o("option", { value: c, children: ((f = v.general) == null ? void 0 : f.title) || v.title || c }, `set-by-select-item-${c}`);
            })
          ] })
        ] }),
        /* @__PURE__ */ p("label", { children: [
          /* @__PURE__ */ p("span", { className: "edit-label column-heading mt-1", children: [
            "Used By: (optional)",
            /* @__PURE__ */ p(x, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(x.Target, { children: /* @__PURE__ */ o(M, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(x.Content, { children: /* @__PURE__ */ o("p", { children: "Select if you would like specific visualizations or rows to use this filter. Otherwise the filter will be added to all api requests." }) })
            ] })
          ] }),
          /* @__PURE__ */ o(
            lt,
            {
              options: d.map((c) => ({
                value: c,
                label: m[c]
              })),
              fieldName: "usedBy",
              selected: e.usedBy,
              updateField: (c, v, f, S) => {
                r("usedBy", S);
              }
            }
          )
        ] }),
        /* @__PURE__ */ o(
          te,
          {
            label: "Reset Label: ",
            value: e.resetLabel || "",
            updateField: (c, v, f, S) => r("resetLabel", S)
          }
        ),
        /* @__PURE__ */ p("label", { children: [
          /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Parent Filter: " }),
          /* @__PURE__ */ p(
            "select",
            {
              value: e.parents || [],
              onChange: (c) => {
                r("parents", c.target.value);
              },
              children: [
                /* @__PURE__ */ o("option", { value: "", children: "Select a filter" }),
                n.dashboard.sharedFilters && n.dashboard.sharedFilters.map((c) => {
                  if (c.key !== e.key)
                    return /* @__PURE__ */ o("option", { children: c.key }, c.key);
                })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o(
          te,
          {
            label: "Default Value Set By Query String Parameter: ",
            value: e.setByQueryParameter || "",
            updateField: (c, v, f, S) => r("setByQueryParameter", S)
          }
        )
      ] })
    ] })
  ] });
}, Cl = ({
  removeFilterCompletely: e,
  removeFilterFromViz: t,
  filterIndex: n
}) => {
  const { overlay: r } = me(), { config: a } = y.useContext(ne), i = Object.values(a.visualizations).filter((l) => {
    var u;
    return (u = l.sharedFilterIndexes) == null ? void 0 : u.map(Number).includes(Number(n));
  }).length > 1, s = i ? "This filter is used by multiple visualizations. You can either delete the filter from this visualization only or you can delete the filter completely, which will also remove it from other visualizations." : "Are you sure you want to delete this filter?";
  return /* @__PURE__ */ o(ge, { showClose: !0, children: /* @__PURE__ */ p(ge.Content, { children: [
    /* @__PURE__ */ o("p", { children: s }),
    i && /* @__PURE__ */ o(
      "button",
      {
        className: "btn btn-warning",
        onClick: () => {
          t(n), r == null || r.actions.toggleOverlay();
        },
        children: "Delete from Visualization"
      }
    ),
    /* @__PURE__ */ p(
      "button",
      {
        className: "btn btn-danger",
        onClick: () => {
          e(n), r == null || r.actions.toggleOverlay();
        },
        children: [
          "Delete",
          i ? " Completely" : ""
        ]
      }
    )
  ] }) });
}, Ol = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return (Object.values(t) || []).forEach((a) => {
    a == null || a.forEach((i) => {
      const s = i[e];
      if (s !== void 0) {
        const l = String(s).trim();
        n.add(l);
      }
    });
  }), Array.from(n);
}, El = (e) => {
  var t;
  return e.type === "urlfilter" ? (t = e.apiFilter) == null ? void 0 : t.valueSelector : e.columnName;
}, It = (e, t, n = []) => e == null ? void 0 : e.map((r, a) => {
  if (n.includes(a) || r.type === "urlfilter")
    return r;
  const i = N.cloneDeep(r), s = Ol(El(r), t);
  if (i.values = s, s.length > 0) {
    const l = pr(i);
    if (l)
      i.active = l;
    else if (r.multiSelect) {
      const u = i.values, h = Array.isArray(i.active) ? i.active : [i.active];
      i.active = h.filter((m) => u.includes(m));
    } else {
      const u = e.find((m) => m.resetLabel), h = u ? u.resetLabel : i.active || i.values[0];
      i.active = h;
    }
  }
  return mr(i);
}), _l = ({ vizConfig: e, updateConfig: t }) => {
  const { config: n, loadAPIFilters: r, data: a } = y.useContext(ne), { overlay: i } = me(), {
    dashboard: { sharedFilters: s },
    visualizations: l
  } = n, u = y.useContext(ae), h = y.useMemo(() => {
    var c;
    const g = n.visualizations[e.uid].sharedFilterIndexes.map(
      Number
    );
    return (c = n.dashboard.sharedFilters) == null ? void 0 : c.map(({ key: v }, f) => [f, v]).filter(([v]) => !g.includes(v)).map(([v, f]) => /* @__PURE__ */ o("option", { value: v, children: `${v} - ${f}` }, v));
  }, [n.visualizations, e.uid]), m = y.useState({}), [d, T] = y.useState(!1), b = (g, c, v) => {
    const f = N.cloneDeep(s), {
      apiEndpoint: S,
      valueSelector: D,
      textSelector: w,
      subgroupValueSelector: _,
      subgroupTextSelector: C
    } = s[c].apiFilter || {}, E = (v == null ? void 0 : v.apiEndpoint) !== S || (v == null ? void 0 : v.valueSelector) !== D || (v == null ? void 0 : v.textSelector) !== w || (v == null ? void 0 : v.subgroupValueSelector) !== _ || (v == null ? void 0 : v.subgroupTextSelector) !== C;
    if (f[c][g] = v, g === "columnName") {
      f[c].subGrouping && delete f[c].subGrouping;
      const L = It(f, a);
      u({ type: "SET_SHARED_FILTERS", payload: L });
    } else
      g === "filterStyle" ? (f[c] = {
        ...f[c],
        active: "",
        apiFilter: {
          apiEndpoint: "",
          subgroupValueSelector: "",
          textSelector: "",
          valueSelector: ""
        },
        filterStyle: v
      }, u({ type: "SET_SHARED_FILTERS", payload: f })) : g === "apiFilter" && v.apiEndpoint && v.valueSelector && E ? (s[c].filterStyle === se.nestedDropdown && v.subgroupValueSelector && (f[c].subGrouping = {
        active: "",
        columnName: "",
        setByQueryParameter: "",
        valuesLookup: {}
      }), r(f, {})) : (mr(f[c]), u({ type: "SET_SHARED_FILTERS", payload: f }));
  }, O = (g) => {
    const c = N.cloneDeep(s);
    c.splice(g, 1);
    const v = Object.keys(s).slice(g + 1), f = l;
    Object.keys(f).forEach((S) => {
      const D = f[S];
      if (D.type === "dashboardFilters") {
        const w = D.sharedFilterIndexes.filter((_) => _ != g).map((_) => v.includes(_.toString()) ? _ - 1 : _);
        u({ type: "UPDATE_VISUALIZATION", payload: { vizKey: S, configureData: { sharedFilterIndexes: w } } });
      }
    }), u({ type: "SET_SHARED_FILTERS", payload: c });
  }, I = () => {
    const g = N.cloneDeep(s) || [], v = { key: "New Dashboard Filter " + (g.length + 1), showDropdown: !0, values: [] };
    u({ type: "SET_SHARED_FILTERS", payload: [...g, v] }), t({ ...e, sharedFilterIndexes: [...e.sharedFilterIndexes, g.length] });
  };
  return /* @__PURE__ */ p(sa, { allowZeroExpanded: !0, children: [
    /* @__PURE__ */ p(Jt, { children: [
      /* @__PURE__ */ o(en, { children: /* @__PURE__ */ o(tn, { children: "General" }) }),
      /* @__PURE__ */ p(nn, { children: [
        /* @__PURE__ */ o(
          yt,
          {
            value: e.filterBehavior,
            label: "Filter Behavior",
            updateField: (g, c, v, f) => {
              t({ ...e, filterBehavior: f });
            },
            options: ["Apply Button", "Filter Change"],
            tooltip: /* @__PURE__ */ p(x, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(x.Target, { children: /* @__PURE__ */ o(M, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(x.Content, { children: /* @__PURE__ */ o("p", { children: 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.' }) })
            ] })
          }
        ),
        e.filterBehavior === "Apply Button" && /* @__PURE__ */ o(
          te,
          {
            label: "Apply Filter Button Text",
            maxLength: 20,
            value: e.applyFiltersButtonText,
            updateField: (g, c, v, f) => {
              t({ ...e, applyFiltersButtonText: f });
            }
          }
        ),
        e.filterBehavior === "Filter Change" && /* @__PURE__ */ o(
          He,
          {
            label: "Auto Load",
            value: e.autoLoad,
            updateField: (g, c, v, f) => {
              t({ ...e, autoLoad: f });
            },
            tooltip: /* @__PURE__ */ p(x, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(x.Target, { children: /* @__PURE__ */ o(M, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(x.Content, { children: /* @__PURE__ */ o("p", { children: "Check if you would like for all URL filters to automatically select a value when a parent filter is changed." }) })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ p(Jt, { children: [
      /* @__PURE__ */ o(en, { children: /* @__PURE__ */ o(tn, { children: "Filters" }) }),
      /* @__PURE__ */ p(nn, { children: [
        e.sharedFilterIndexes.map((g) => {
          const c = s[g];
          return /* @__PURE__ */ o(
            ra,
            {
              fieldName: c.key,
              fieldKey: g,
              fieldType: "Dashboard Filter",
              controls: m,
              deleteField: () => {
                i == null || i.actions.openOverlay(
                  /* @__PURE__ */ o(
                    Cl,
                    {
                      removeFilterCompletely: O,
                      removeFilterFromViz: (v) => {
                        t({
                          ...e,
                          sharedFilterIndexes: e.sharedFilterIndexes.filter((f) => f !== v)
                        });
                      },
                      filterIndex: g
                    }
                  )
                );
              },
              children: /* @__PURE__ */ o(
                Tl,
                {
                  filter: c,
                  filterIndex: g,
                  updateFilterProp: (v, f) => {
                    b(v, g, f);
                  },
                  config: n
                }
              )
            },
            c.key + g
          );
        }),
        /* @__PURE__ */ o("button", { onClick: I, className: "btn btn-primary full-width", children: "Add Filter" }),
        d ? /* @__PURE__ */ p("label", { children: [
          /* @__PURE__ */ p("span", { className: "edit-label column-heading", children: [
            "Select Existing Dashboard Filter",
            /* @__PURE__ */ p(x, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(x.Target, { children: /* @__PURE__ */ o(M, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(x.Content, { children: /* @__PURE__ */ p("p", { children: [
                "This feature is indentended to support legacy functionality. Be advised that any change to the filter in this editor will reflect on the whole dashboard.",
                " "
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ o(
            "select",
            {
              value: "",
              onChange: (g) => {
                t({
                  ...e,
                  sharedFilterIndexes: [...e.sharedFilterIndexes, g.target.value]
                }), T(!1);
              },
              children: [
                /* @__PURE__ */ o("option", { value: "", children: "Select" }, "select"),
                ...h
              ]
            }
          )
        ] }) : /* @__PURE__ */ o("button", { onClick: () => T(!0), className: "btn btn-primary full-width mt-2", children: "Add Existing Dashboard Filter" })
      ] })
    ] })
  ] });
}, Il = (e) => e.replace(/"/g, ""), kl = (e) => String(e).match(/^[-]?[0-9\.]+$/), kt = (e, t) => {
  const n = e.includes("?");
  return t.filter(({ value: r }) => r !== "").map(({ key: r, value: a }, i) => {
    const s = i === 0 && !n ? "?" : "&", l = r.match(/\$.*/);
    return kl(a) || l ? s + r + "=" + a : s + r + `="${Il(a)}"`;
  }).join("");
}, Nl = (e, t, n = []) => e.reduce((r, a, i) => {
  const s = a, l = n.includes(i);
  return t[s] && !l ? r[s] = t[s] : r[s] = void 0, r;
}, {}), Wr = (e, t) => {
  const n = t.filter((r) => {
    var a;
    return (a = e.parents) == null ? void 0 : a.includes(r.key);
  });
  return (n || []).length ? n.flatMap((r) => {
    var a;
    if (r.filterStyle === se.nestedDropdown) {
      const i = r.apiFilter.valueSelector || "", s = r.apiFilter.subgroupValueSelector || "", l = r.queuedActive ? r.queuedActive[0] : r.active || "", u = r.queuedActive ? r.queuedActive[1] : ((a = r.subGrouping) == null ? void 0 : a.active) || "";
      return [
        { key: i, value: l },
        { key: s, value: u }
      ];
    } else {
      const i = r.queryParameter || r.apiFilter.valueSelector || "", s = r.queuedActive || r.active || "";
      return Array.isArray(s) ? s.map((l) => ({ key: i, value: l.toString() })) : [{ key: i, value: s.toString() }];
    }
  }) : null;
}, Qr = (e) => e == null ? void 0 : e.some(({ value: t }) => t === ""), Al = (e, t) => {
  const { textSelector: n, valueSelector: r, subgroupTextSelector: a, subgroupValueSelector: i } = t;
  if (i) {
    const s = {};
    return e.forEach((l) => {
      s[l[r]] || (s[l[r]] = { text: l[n || r], value: l[r], subOptions: [] }), s[l[r]].subOptions.push({ text: l[a], value: l[i] });
    }), Object.values(s);
  }
  return e.map((s) => ({ text: s[n || r], value: s[r] }));
}, Fl = (e, t) => {
  const n = {};
  return e.forEach((r, a) => {
    var h;
    const i = (h = r.apiFilter) == null ? void 0 : h.apiEndpoint;
    if (!i)
      return;
    const s = i;
    if (t[s])
      return;
    const l = Wr(r, e);
    if (Qr(l))
      return;
    const u = i + (l ? kt(i, l) : "");
    n[u] = [s, a];
  }), n;
}, Ll = (e, t) => {
  var s, l;
  const n = Me(t == null ? void 0 : t.setByQueryParameter), r = (s = e[0]) == null ? void 0 : s.value, a = (l = e[0]) == null ? void 0 : l.subOptions[0].value, i = Me(t == null ? void 0 : t.subGrouping.setByQueryParameter);
  if (!t.active)
    t.active = n || r, t.subGrouping.active = i || a;
  else {
    const u = e.find((h) => h.value === t.active);
    if (t.active = u ? u.value : r, u) {
      const h = u.subOptions.find((m) => m.value === t.subGrouping.active);
      t.subGrouping.active = (h == null ? void 0 : h.value) || a;
    } else
      t.subGrouping.active = a;
  }
}, Pl = (e, t) => {
  var s;
  const n = Me(t == null ? void 0 : t.setByQueryParameter), r = Array.isArray(n) ? n : n == null ? void 0 : n.split(","), a = n ? r : [(s = e[0]) == null ? void 0 : s.value], i = (t.active || []).filter(
    (l) => e.find((u) => u.value === l)
  );
  t.active = i.length ? i : a;
}, Jn = (e, t, n, r) => {
  var u;
  const a = N.cloneDeep(n), i = N.cloneDeep(a[e]), s = Me(i == null ? void 0 : i.setByQueryParameter), l = i.setByQueryParameter ? s !== void 0 : !1;
  if (!r.length || !(t != null && t.length))
    return l && i.apiFilter && (i.queuedActive = s), i;
  if (r.includes(e) || l) {
    const h = a.filter((d) => {
      var T;
      return (T = i.parents) == null ? void 0 : T.includes(d.key);
    }), m = h.some((d) => !(d.active || d.queuedActive));
    if (h && m)
      return i;
    if (i.filterStyle === se.multiSelect)
      Pl(t, i);
    else if (i.filterStyle === se.nestedDropdown)
      Ll(t, i);
    else {
      const d = (u = t[0]) == null ? void 0 : u.value;
      if (!i.active)
        i.active = s || d;
      else {
        const T = t.find((b) => b.value == i.active);
        i.active = T ? T.value : d;
      }
    }
  }
  return i;
};
const Rl = (e, t) => {
  const n = Object.values(t).flat(), r = e.map((i, s) => i.type === "datafilter" && i.parents ? s : -1).filter((i) => i !== -1);
  if (r.length === 0)
    return e;
  const a = N.cloneDeep(e);
  return r.forEach((i) => {
    const s = e[i], l = e.find(
      (u) => String(s.parents) === String(u.key)
    );
    if (l) {
      const u = n.filter((m) => {
        var d;
        return (d = l.active) == null ? void 0 : d.includes(m[l.columnName]);
      }), h = N.uniq(u.map((m) => m[s.columnName]).filter(Boolean));
      if (h.length > 0) {
        const d = s.filterStyle === "multi-select" ? h : h[0];
        a[i] = {
          ...s,
          values: h,
          active: d
        };
      }
    }
  }), a;
}, Zr = ({
  apiFilterDropdowns: e,
  visualizationConfig: t,
  setConfig: n,
  currentViewport: r,
  isEditor: a = !1
}) => {
  var f, S;
  const i = y.useContext(ne), { config: s, reloadURLData: l, loadAPIFilters: u, setAPIFilterDropdowns: h, setAPILoading: m } = i, d = y.useContext(ae), T = (D) => {
    D.preventDefault();
    const w = N.cloneDeep(i.config.dashboard), _ = Object.values(i.config.visualizations).filter((E) => E.type === "dashboardFilters").reduce((E, L) => L.autoLoad ? E : [...E, L.sharedFilterIndexes], []);
    if (!w.sharedFilters.some((E, L) => _.includes(L) ? !E.active && !E.queuedActive : !1)) {
      if (Xe(i.config.visualizations)) {
        const E = Ft();
        let L = !1;
        w.sharedFilters.forEach((j) => {
          j.queuedActive && (Sa(j), j.setByQueryParameter && E[j.setByQueryParameter] !== j.active && (E[j.setByQueryParameter] = Array.isArray(j.active) ? j.active.join(",") : j.active, L = !0));
        }), L && gr(E);
      }
      m(!0), d({ type: "SET_SHARED_FILTERS", payload: w.sharedFilters }), d({ type: "SET_FILTERED_DATA", payload: xe(N.cloneDeep(i)) }), u(w.sharedFilters, e).then((E) => {
        l(E);
      }).catch((E) => {
        console.error(E);
      });
    }
  }, b = (D, w) => {
    const _ = N.cloneDeep(s);
    let [C, E] = Sl(
      D,
      w,
      _.dashboard.sharedFilters,
      t
    );
    if (d({ type: "SET_SHARED_FILTERS", payload: C }), Xe(s.visualizations)) {
      const L = t.autoLoad, j = _.dashboard.sharedFilters.some((de) => !de.active), W = C.filter((de) => de.apiFilter).map((de) => de.apiFilter.apiEndpoint), z = Nl(
        W,
        e,
        E
      );
      L && !j ? (h(z), u(C, z).then((de) => {
        l(de);
      })) : (C[D].queuedActive = w, d({ type: "SET_DATA", payload: {} }), d({ type: "SET_FILTERED_DATA", payload: {} }), h(z), u(C, z));
    } else if (C[D].type === "urlfilter" && C[D].apiFilter)
      l(C);
    else {
      const L = N.cloneDeep(i);
      L.config.dashboard.sharedFilters = C;
      const j = xe(L);
      d({ type: "SET_FILTERED_DATA", payload: j }), d({ type: "SET_SHARED_FILTERS", payload: C });
    }
  }, [O, I] = y.useState(!0), g = () => {
    I(!O), n({
      ...t,
      showEditorPanel: !O
    });
  }, c = (f = t == null ? void 0 : t.sharedFilterIndexes) == null ? void 0 : f.map(Number).map((D) => s.dashboard.sharedFilters[D]), v = c.length ? c.every((D) => D.showDropdown === !1) : !1;
  return v && !a ? /* @__PURE__ */ o(P, {}) : /* @__PURE__ */ p(De.VisualizationWrapper, { config: t, isEditor: a, currentViewport: r, children: [
    a && /* @__PURE__ */ o(
      De.Sidebar,
      {
        displayPanel: O,
        isDashboard: !0,
        title: "Configure Dashboard Filters",
        onBackClick: g,
        children: /* @__PURE__ */ o(_l, { updateConfig: n, vizConfig: t })
      }
    ),
    !v && /* @__PURE__ */ o(De.Responsive, { isEditor: a, children: /* @__PURE__ */ o(
      "div",
      {
        className: `${a ? " is-editor" : ""} cove-component__content col-12 cove-dashboard-filters-container`,
        children: /* @__PURE__ */ o(
          Ta,
          {
            show: (S = t == null ? void 0 : t.sharedFilterIndexes) == null ? void 0 : S.map(Number),
            filters: Rl(s.dashboard.sharedFilters, i.data) || [],
            apiFilterDropdowns: e,
            handleOnChange: b,
            showSubmit: t.filterBehavior === Gr.Apply && !t.autoLoad,
            applyFilters: T,
            applyFiltersButtonText: t.applyFiltersButtonText
          }
        )
      }
    ) })
  ] });
}, xl = new Ce(), Kr = (e, t, n) => {
  var l;
  const r = N.cloneDeep(n.visualizations[e]), a = (l = n.datasets[r.dataKey]) == null ? void 0 : l.data, i = a != null && a.length ? Object.keys(a[0]) : [], s = (_t(n.dashboard, t) || []).filter((u) => i.includes(u.columnName));
  return s.length && (r.formattedData = Ie(s, a)), r.data = a, r;
}, Xr = (e, t, n, r, a) => {
  if (t === void 0)
    return {};
  const i = N.cloneDeep(n.visualizations[e]), s = n.rows[t];
  if (s.footnotesId && s.footnotesId === e)
    return Kr(e, t, n);
  s != null && s.dataKey && Object.assign(i, N.pick(s, ["dataKey", "dataDescription", "formattedData", "data"])), i.formattedData && (i.originalFormattedData = i.formattedData);
  const l = (a == null ? void 0 : a[t]) ?? (a == null ? void 0 : a[e]);
  if (l)
    i.data = l || [], i.formattedData && (i.formattedData = i.data);
  else {
    const u = i.dataKey || "backwards-compatibility";
    i.data = r[u] || [], i.formattedData && (i.formattedData = xl.developerStandardize(i.data, i.dataDescription) || i.data);
  }
  return i;
}, Ml = ({ config: e, updateField: t }) => {
  var h, m, d, T, b, O;
  const n = () => {
    const I = [...e.staticFootnotes || [], { text: "Add Footnote Text" }];
    t(null, null, "staticFootnotes", I);
  }, r = (I, g) => {
    const c = N.cloneDeep(e.staticFootnotes);
    c[I] = g, t(null, null, "staticFootnotes", c);
  }, a = (I) => {
    const g = N.cloneDeep(e.staticFootnotes);
    g.splice(I, 1), t(null, null, "staticFootnotes", g);
  }, i = (I) => [["", "--Select--"]].concat(I.map((g) => [g, g])), s = e.datasets || {}, l = e.dataKey ? i(Object.keys(((m = (h = s[e.dataKey]) == null ? void 0 : h.data) == null ? void 0 : m[0]) || {})) : [], u = i(Object.keys(s));
  return /* @__PURE__ */ p(P, { children: [
    /* @__PURE__ */ o("em", { children: "Dynamic Footnotes" }),
    /* @__PURE__ */ p("div", { className: "row border p-2", children: [
      /* @__PURE__ */ o(
        ve,
        {
          label: "Select a Footnote Dataset",
          value: e.dataKey,
          options: u,
          fieldName: "dataKey",
          updateField: t
        }
      ),
      e.dataKey && /* @__PURE__ */ p("div", { className: "p-3", children: [
        /* @__PURE__ */ o(
          ve,
          {
            label: "Footnote Symbol Column",
            value: (d = e.dynamicFootnotes) == null ? void 0 : d.symbolColumn,
            options: l,
            section: "dynamicFootnotes",
            fieldName: "symbolColumn",
            updateField: t
          }
        ),
        /* @__PURE__ */ o(
          ve,
          {
            label: "Footnote Text Column",
            value: (T = e.dynamicFootnotes) == null ? void 0 : T.textColumn,
            options: l,
            section: "dynamicFootnotes",
            fieldName: "textColumn",
            updateField: t
          }
        ),
        /* @__PURE__ */ o(
          ve,
          {
            label: "Footnote Order Column",
            value: (b = e.dynamicFootnotes) == null ? void 0 : b.orderColumn,
            options: l,
            section: "dynamicFootnotes",
            fieldName: "orderColumn",
            updateField: t
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o("hr", {}),
    /* @__PURE__ */ o("em", { children: "Static Footnotes" }),
    (O = e.staticFootnotes) == null ? void 0 : O.map((I, g) => /* @__PURE__ */ p("div", { className: "row border p-2", children: [
      /* @__PURE__ */ p("div", { className: "col-8", children: [
        /* @__PURE__ */ o(
          ve,
          {
            label: "Symbol",
            value: I.symbol,
            options: [["", "--Select--"], ...wa],
            fieldName: "symbol",
            updateField: (c, v, f, S) => r(g, { ...I, symbol: S })
          }
        ),
        " ",
        /* @__PURE__ */ o(
          te,
          {
            label: "Text",
            value: I.text,
            fieldName: "text",
            updateField: (c, v, f, S) => r(g, { ...I, text: S })
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { className: "col-2 ms-4", children: /* @__PURE__ */ o("button", { className: "btn btn-danger p-1", onClick: () => a(g), children: "Delete" }) })
    ] }, g)),
    /* @__PURE__ */ o("button", { className: "btn btn-primary", onClick: n, children: "Add Static Footnote" })
  ] });
}, Ye = ({
  visualizationKey: e,
  config: t,
  viewport: n,
  isEditor: r,
  updateConfig: a
}) => {
  const i = At(t, a);
  if (r)
    return /* @__PURE__ */ o(
      qr,
      {
        component: Ye,
        visualizationKey: e,
        visualizationConfig: t,
        updateConfig: a,
        type: "Footnotes",
        viewport: n,
        children: /* @__PURE__ */ o(Ml, { config: t, updateField: i }, e)
      }
    );
  const s = y.useMemo(() => {
    const u = t.formattedData || t.data;
    if (u && t.dataKey && t.dynamicFootnotes) {
      const { symbolColumn: h, textColumn: m, orderColumn: d } = t.dynamicFootnotes, T = u.map((b) => N.pick(b, [h, m, d]));
      return T.sort((b, O) => b[d] - O[d]), T.map((b) => ({ symbol: b[h], text: b[m] }));
    }
    return [];
  }, [t.dynamicFootnotes, t.formattedData, t.data]), l = t.staticFootnotes || [];
  return /* @__PURE__ */ o(Oa, { footnotes: [...s, ...l] });
}, $l = ({
  allExpanded: e,
  fontSize: t,
  groupName: n,
  currentViewport: r,
  children: a
}) => {
  const [i, s] = y.useState(e), l = ["xs", "xxs"].includes(r) ? "13px" : `${aa}px`;
  return y.useEffect(() => {
    s(e);
  }, [e]), /* @__PURE__ */ p(P, { children: [
    /* @__PURE__ */ p(
      "div",
      {
        style: { fontSize: l },
        role: "button",
        className: `multi-visualiation-heading${i ? "" : " collapsed"} h4`,
        onClick: () => {
          s(!i);
        },
        tabIndex: 0,
        onKeyDown: (u) => {
          u.keyCode === 13 && s(!i);
        },
        children: [
          /* @__PURE__ */ o(M, { display: i ? "minus" : "plus", base: !0 }),
          n
        ]
      }
    ),
    i && a
  ] });
}, Bl = ({
  allExpanded: e,
  currentViewport: t,
  groupName: n,
  hideVisualization: r,
  row: a,
  children: i
}) => r ? /* @__PURE__ */ o(P, {}) : a.expandCollapseAllButtons ? /* @__PURE__ */ o("div", { className: "collapsable-multiviz-container", children: /* @__PURE__ */ o(
  $l,
  {
    allExpanded: e,
    fontSize: "26px",
    groupName: n,
    currentViewport: t,
    children: i
  }
) }) : /* @__PURE__ */ p(P, { children: [
  n !== "" ? /* @__PURE__ */ o("h3", { children: n }) : /* @__PURE__ */ o(P, {}),
  i
] }), er = ({
  allExpanded: e,
  filteredDataOverride: t,
  groupName: n,
  row: r,
  rowIndex: a,
  inNoDataState: i,
  setSharedFilter: s,
  updateChildConfig: l,
  apiFilterDropdowns: u,
  currentViewport: h,
  isLastRow: m
}) => {
  const { config: d, filteredData: T, data: b } = y.useContext(ne), [O, I] = vt.useState(r.columns.map((f, S) => S === 0)), g = (f) => {
    I(O.map((S, D) => D === f));
  }, c = y.useMemo(() => {
    if (r.footnotesId) {
      const f = Kr(r.footnotesId, a, d);
      if (r.multiVizColumn && t) {
        const S = t[0][r.multiVizColumn], D = f.formattedData.filter((w) => w[r.multiVizColumn] === S);
        f.formattedData = D;
      } else
        f.formattedData = T[r.footnotesId];
      return f;
    }
    return null;
  }, [d, r, b, T]), v = (f) => {
    const D = Object.values(d.visualizations).filter(
      (w) => w.type === "dashboardFilters"
    ).filter((w) => !w.autoLoad).flatMap((w) => w.sharedFilterIndexes);
    return Xe(d.visualizations) && f.autoLoad ? D.some((w) => {
      const { queuedActive: _, active: C, subGrouping: E } = d.dashboard.sharedFilters[w];
      return !C && !_ ? !0 : _ ? E ? _[0] !== C || _[1] !== E.active : _ !== C : !1;
    }) : !1;
  };
  return /* @__PURE__ */ p("div", { className: `row${r.equalHeight ? " equal-height" : ""}${r.toggle ? " toggle" : ""}`, children: [
    r.columns.map((f, S) => {
      if (f.width) {
        if (!f.widget)
          return /* @__PURE__ */ o("div", { className: `col col-${f.width}` }, `row__${a}__col__${S}`);
        const D = Xr(f.widget, a, d, b, T);
        t && (D.data = t, D.formattedData && (D.formattedData = t));
        const w = d.dashboard.sharedFilters && d.dashboard.sharedFilters.filter((z) => z.setBy === f.widget).length > 0, _ = w ? d.dashboard.sharedFilters.filter((z) => z.setBy === f.widget)[0].active : void 0, C = /* @__PURE__ */ p("a", { href: `#data-table-${D.dataKey}`, className: "margin-left-href", children: [
          D.dataKey,
          " (Go to Table)"
        ] }), E = i && D.filterBehavior !== "Apply Button" && (D.type !== "dashboardFilters" || v(D)), L = r.toggle === void 0 || r.toggle && O[S], j = D.type === "dashboardFilters" && D.sharedFilterIndexes && D.sharedFilterIndexes.filter(
          (z) => d.dashboard.sharedFilters[z].showDropdown === !1
        ).length === D.sharedFilterIndexes.length, W = !m && !j;
        return /* @__PURE__ */ p(
          "div",
          {
            className: `col-12 col-md-${f.width}${L ? "" : " d-none"}${E ? " hide-parent-visualization" : W ? " mb-4" : ""}`,
            children: [
              r.toggle && !E && /* @__PURE__ */ o(
                Dl,
                {
                  row: r,
                  visualizations: d.visualizations,
                  active: O.indexOf(!0),
                  setToggled: g
                }
              ),
              /* @__PURE__ */ p(
                Bl,
                {
                  allExpanded: e,
                  currentViewport: h,
                  groupName: n,
                  hideVisualization: E,
                  row: r,
                  children: [
                    D.type === "chart" && /* @__PURE__ */ o(
                      sr,
                      {
                        config: D,
                        dashboardConfig: d,
                        isEditor: !1,
                        setConfig: (z) => {
                          l(f.widget, z);
                        },
                        setSharedFilter: w ? s : void 0,
                        isDashboard: !0,
                        link: d.table && d.table.show && d.datasets && D.table && D.table.showDataTableLink ? C : void 0,
                        configUrl: void 0,
                        setEditing: void 0,
                        hostname: void 0,
                        setSharedFilterValue: void 0
                      },
                      f.widget
                    ),
                    D.type === "map" && /* @__PURE__ */ o(
                      cr,
                      {
                        config: D,
                        isEditor: !1,
                        setConfig: (z) => {
                          l(f.widget, z);
                        },
                        showLoader: !1,
                        setSharedFilter: w ? s : void 0,
                        setSharedFilterValue: _,
                        isDashboard: !0,
                        link: d.table && d.table.show && d.datasets && D.table && D.table.showDataTableLink ? C : void 0
                      },
                      f.widget
                    ),
                    D.type === "data-bite" && /* @__PURE__ */ o(
                      ur,
                      {
                        config: D,
                        isEditor: !1,
                        setConfig: (z) => {
                          l(f.widget, z);
                        },
                        isDashboard: !0
                      },
                      f.widget
                    ),
                    D.type === "waffle-chart" && /* @__PURE__ */ o(
                      dr,
                      {
                        config: D,
                        isEditor: !1,
                        setConfig: (z) => {
                          l(f.widget, z);
                        },
                        isDashboard: !0,
                        configUrl: d.table && d.table.show && d.datasets && D.table && D.table.showDataTableLink ? C : void 0
                      },
                      f.widget
                    ),
                    D.type === "markup-include" && /* @__PURE__ */ o(
                      fr,
                      {
                        config: D,
                        configUrl: void 0,
                        isDashboard: !0,
                        isEditor: !1,
                        setConfig: (z) => {
                          l(f.widget, z);
                        }
                      },
                      f.widget
                    ),
                    D.type === "filtered-text" && /* @__PURE__ */ o(
                      xr,
                      {
                        config: D,
                        isEditor: !1,
                        setConfig: (z) => {
                          l(f.widget, z);
                        },
                        isDashboard: !0,
                        configUrl: void 0
                      },
                      f.widget
                    ),
                    D.type === "dashboardFilters" && /* @__PURE__ */ o(
                      Zr,
                      {
                        setConfig: (z) => {
                          l(f.widget, z);
                        },
                        visualizationConfig: D,
                        apiFilterDropdowns: u,
                        currentViewport: h
                      },
                      f.widget
                    ),
                    D.type === "table" && /* @__PURE__ */ o(
                      Vt,
                      {
                        updateConfig: (z) => {
                          l(f.widget, z);
                        },
                        visualizationKey: f.widget,
                        config: D,
                        viewport: h
                      },
                      f.widget
                    ),
                    D.type === "footnotes" && /* @__PURE__ */ o(
                      Ye,
                      {
                        visualizationKey: f.widget,
                        config: D,
                        viewport: h
                      },
                      f.widget
                    )
                  ]
                }
              )
            ]
          },
          `vis__${a}__${S}`
        );
      }
      return /* @__PURE__ */ o(vt.Fragment, {}, `vis__${a}__${S}`);
    }),
    r.footnotesId && !i ? /* @__PURE__ */ o(
      Ye,
      {
        isEditor: !1,
        visualizationKey: r.footnotesId,
        config: c,
        viewport: h
      }
    ) : null
  ] }, `row__${a}`);
}, tr = function(e = " ", t = "") {
  return this.split(e).map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join(t);
}, Vl = (e, t, n) => {
  let r = !1;
  return e.find((a) => {
    if (a.type === "urlfilter" && !Array.isArray(a.active) && a.filterBy === "File Name")
      return r = !0, !0;
  }), Object.keys(n).forEach((a) => {
    decodeURIComponent(n[a]) !== t[a] && (r = !0);
  }), r;
}, nr = ({ visualizations: e, datasets: t, rows: n }) => {
  const r = Object.values(e).map((s) => s.dataKey), a = n.map((s) => s.dataKey), i = N.uniq([...r, ...a]);
  return Object.keys(t).filter((s) => i.includes(s));
}, Ul = (e, t, n) => {
  const r = Object.keys(e).flatMap((s) => {
    const l = e[s];
    return l === void 0 ? [] : typeof l == "string" && l.match(/undefined/) ? [] : Array.isArray(l) ? l.map((u) => ({ key: s, value: u })) : { key: s, value: l };
  }), a = t.origin + t.pathname;
  let i = `${a}${kt(a, r)}`;
  if (n !== "") {
    const s = t.pathname.split(".").pop(), l = t.pathname.substring(0, t.pathname.lastIndexOf("/"));
    i = `${t.origin}${l}/${n}.${s}${kt(
      a,
      r
    )}`;
  }
  return i;
}, zl = (e, t, n) => {
  const r = {
    "Remove Spaces": "",
    "Keep Spaces": " ",
    "Replace With Underscore": "_"
  };
  let a = e;
  return t.datasetKey === n && (t.fileName ? a = tr.call(
    String(t.fileName),
    " ",
    r[t.whitespaceReplacement ?? "Keep Spaces"]
  ) : a = t.active), a != null && a.includes("${query}") && (a = a.replace(
    "${query}",
    tr.call(
      String(t.active),
      " ",
      r[t.whitespaceReplacement ?? "Keep Spaces"]
    )
  )), a;
}, Hl = (e, t) => Object.keys(e).reduce((n, r) => {
  const a = e[r].dataKey;
  return t[a] && (n[r].formattedData = t[a]), n;
}, N.cloneDeep(e)), jl = (e, t, n, r) => {
  var i, s;
  if (!e.usedBy || !e.usedBy.length)
    return !0;
  const a = (i = e.usedBy) == null ? void 0 : i.map((l) => n[l] || r[l]);
  return (s = e.usedBy) == null || s.forEach((l) => {
    if (r[l] && r[l].footnotesId)
      return a.push(n[r[l].footnotesId]);
  }), a == null ? void 0 : a.some((l) => (l == null ? void 0 : l.dataKey) === t);
}, ql = ({ setAllExpanded: e }) => /* @__PURE__ */ o("div", { className: "d-block ", children: /* @__PURE__ */ p("div", { className: "d-flex flex-row-reverse mb-2", children: [
  /* @__PURE__ */ o("button", { className: "btn expand-collapse-buttons", onClick: () => e(!1), children: "- Collapse All" }),
  /* @__PURE__ */ o("button", { className: "btn expand-collapse-buttons me-2", onClick: () => e(!0), children: "+ Expand All" })
] }) }), Gl = (e, t, n, r) => {
  const a = (i, s, l, u = 50) => {
    if (!i)
      return;
    const h = i.map((g, c) => c), m = l ? h : r;
    i = i.map(
      (g, c) => {
        var v;
        return Jn(
          c,
          s[(v = g.apiFilter) == null ? void 0 : v.apiEndpoint],
          i,
          m
        );
      }
    );
    const d = i.filter((g) => g.apiFilter), T = new Map(d.map((g) => [g.apiFilter.apiEndpoint, g.apiFilter])), b = Fl(i, s), O = Object.values(b).reduce(
      (g, [c]) => ({ ...g, [c]: null }),
      {}
    );
    n((g) => ({ ...g, ...O }));
    const I = N.cloneDeep(s);
    return Promise.all(
      Object.keys(b).map(
        (g) => new Promise((c) => {
          fetch(g).then((v) => v.json()).then((v) => {
            Array.isArray(v) || console.error("COVE only supports response data in the shape Array<Object>");
            const [f, S] = b[g], D = T.get(f), w = Al(v, D);
            I[f] = w;
            const _ = Jn(
              S,
              w,
              i,
              m
            );
            i[S] = _;
          }).catch(() => {
            t({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            }), c({ error: !0 });
          }).finally(() => {
            c({ error: !1 });
          });
        })
      )
    ).then((g) => {
      const c = g.some(({ error: f }) => f), v = i.reduce((f, S, D) => m.includes(D) && !S.active ? Qr(Wr(S, i)) ? f : [...f, D] : f, []);
      return c || !v.length || u === 0 ? (n(I), e({ type: "SET_SHARED_FILTERS", payload: i }), i) : a(i, I, l, u - 1);
    });
  };
  return a;
}, Wl = (e, t) => {
  var s;
  const n = !!Me("cove-auto-load"), r = e.multiDashboards ? e.multiDashboards[e.activeDashboard] : e, a = (s = r.dashboard.sharedFilters) == null ? void 0 : s.some(
    (l) => l.filterBy === "File Name"
  ), i = Object.values(r.visualizations).reduce((l, u) => {
    if (l === !1)
      return l;
    if (u.visualizationType === "dashboardFilters") {
      if (u.filterBehavior === "Apply Button")
        return !1;
      if (u.autoLoad)
        return !0;
    }
    return l;
  }, void 0);
  if (n || i || a || t) {
    const l = r.rows.map((m) => m.dataKey).filter(Boolean);
    return !!Object.values(r.visualizations).map((m) => m.dataKey).filter(Boolean).concat(l).find((m) => {
      var d;
      return !((d = e.datasets[m].data) != null && d.length);
    });
  }
  return !1;
};
function Ql({ initialState: e, isEditor: t = !1, isDebug: n = !1 }) {
  var de, Ut, zt, Ht, jt, qt, Gt, Wt, Qt, Zt, Kt, Xt, Yt;
  const [r, a] = y.useReducer(ml, e), [i, s] = y.useReducer(yl, []), l = y.useContext(lr), [u, h] = y.useState({}), [m, d] = y.useState("lg"), [T] = y.useState(`cove-${Math.random().toString(16).slice(-4)}`), [b, O] = y.useState(!0), [I, g] = y.useState(!1), c = r.tabSelected === "Dashboard Preview", v = y.useMemo(() => {
    const k = nr(r.config).map((A) => r.data[A]);
    return k.length ? k.some((A) => A === void 0) : !0;
  }, [r.data]), f = Bt(r.config.rows), S = new Ce(), D = y.useMemo(() => Object.values(r.config.visualizations).filter((k) => k.type === "dashboardFilters").reduce((k, A) => A.autoLoad ? [...k, ...A.sharedFilterIndexes] : k, []), [r.config.visualizations]), w = Gl(
    a,
    s,
    h,
    D
  ), _ = async (k) => {
    const A = N.cloneDeep(r.config);
    if (!A.datasets)
      return;
    const H = k || A.dashboard.sharedFilters, B = nr(A), R = N.cloneDeep(r.data), V = N.cloneDeep(A.datasets);
    let Q = !1, q = "";
    for (let Z = 0; Z < B.length; Z++) {
      const G = B[Z], fe = A.datasets[G];
      if (fe.dataUrl && H) {
        const be = new URL(fe.runtimeDataUrl || fe.dataUrl, window.location.origin), he = Object.fromEntries(new URLSearchParams(be.search)), J = {};
        H.forEach((U) => {
          var K;
          if (U.type === "urlfilter" && jl(U, G, A.visualizations, A.rows)) {
            if (U.filterBy === "File Name" && (q = zl(q, U, G)), U.queryParameter && (J[U.queryParameter] ? J[U.queryParameter] = J[U.queryParameter] + U.active : J[U.queryParameter] = U.active), U.setByQueryParameter) {
              const Oe = Object.fromEntries(new URLSearchParams(window.location.search))[U.setByQueryParameter], Yr = ((K = U.apiFilter) == null ? void 0 : K.valueSelector) || U.setByQueryParameter;
              Oe && (J[Yr] = Oe);
            }
            U.apiFilter && U.active && (J[U.apiFilter.valueSelector] = U.active, U.apiFilter.subgroupValueSelector && U.subGrouping.active && (J[U.apiFilter.subgroupValueSelector] = U.subGrouping.active));
          }
        });
        const Ne = Vl(H, he, J);
        if (k || Ne) {
          Q = !0;
          const U = Ul(
            { ...he, ...J },
            be,
            q
          );
          g(!0), await $e(U).then((K) => {
            let ie = K;
            if (K && fe.dataDescription)
              try {
                ie = S.autoStandardize(ie), ie = S.developerStandardize(ie, fe.dataDescription);
              } catch (Oe) {
                console.error("Error standardizing data:", Oe);
              }
            V[G].data = ie, V[G].runtimeDataUrl = U, R[G] = ie;
          }).catch((K) => {
            console.error(K), s({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            }), V[G].data = [], V[G].runtimeDataUrl = U, R[G] = [];
          });
        }
      }
    }
    const X = N.pickBy(V, (Z) => !Z.dataUrl);
    if (Q || Object.keys(X).length) {
      const Z = Object.keys(X).reduce((K, ie) => (K[ie] = X[ie].data, K), {}), G = { ...R, ...Z };
      a({ type: "SET_DATA", payload: G });
      const fe = A.dashboard.sharedFilters.reduce((K, ie, Oe) => (ie.type === "datafilter" && K.push(Oe), K), []), be = Object.values(A.visualizations).filter((K) => K.type === "dashboardFilters").flatMap((K) => K.sharedFilterIndexes).filter((K) => !fe.includes(K)), he = It(H, G, be), J = { ...A.dashboard, sharedFilters: he }, Ne = xe(
        { ...r, config: { ...r.config, dashboard: J } },
        {},
        G
      );
      a({ type: "SET_FILTERED_DATA", payload: Ne });
      const U = Hl(A.visualizations, R);
      a({
        type: "SET_CONFIG",
        payload: {
          dashboard: J,
          datasets: V,
          visualizations: U,
          activeDashboard: A.activeDashboard
        }
      }), g(!1);
    }
  }, C = (k, A) => {
    const { config: H, filteredData: B } = N.cloneDeep(r);
    for (let V = 0; V < H.dashboard.sharedFilters.length; V++) {
      const Q = H.dashboard.sharedFilters[V];
      if (Q.setBy === k) {
        Q.columnName && (Q.active = A[Q.columnName]);
        break;
      }
    }
    const R = xe({ ...r, config: H }, B);
    a({ type: "SET_FILTERED_DATA", payload: R }), a({ type: "SET_CONFIG", payload: H }), a({ type: "SET_SHARED_FILTERS", payload: H.dashboard.sharedFilters });
  };
  y.useEffect(() => {
    var B;
    const { config: k } = r, A = Wl(k, t && !c), H = It(k.dashboard.sharedFilters, r.data);
    (B = w(H, u, A)) == null || B.then((R) => {
      R.every((Q) => Q.type === "datafilter" || Q.active) && _(R);
    });
  }, [t, c, (de = r.config) == null ? void 0 : de.activeDashboard]);
  const E = (k, A) => {
    const H = N.cloneDeep(r.config), B = N.pick(H, ["visualizations", "multiDashboards"]);
    if (B.visualizations[k] = A, B.visualizations[k].formattedData = H.visualizations[k].formattedData, H.multiDashboards) {
      const R = H.activeDashboard, V = [...H.multiDashboards], q = { label: V[R].label, visualizations: B.visualizations, ...N.pick(H, ["dashboard", "rows"]) };
      V[R] = q, B.multiDashboards = V;
    }
    a({ type: "SET_CONFIG", payload: B }), t && l.setTempConfig(B);
  }, L = new ia((k) => {
    for (let A of k) {
      let H = oa(A.contentRect.width);
      d(H);
    }
  }), j = y.useCallback((k) => {
    k !== null && L.observe(k);
  }, []);
  if (r.loading)
    return /* @__PURE__ */ o(Nt, {});
  let W = null;
  if (t && !c) {
    let k = !1;
    Se(r.config).forEach((A) => {
      var Q;
      const H = (Q = f[A]) == null ? void 0 : Q.row, B = Xr(
        A,
        H,
        r.config,
        r.data,
        r.filteredData
      );
      B.uid = A, B.type === "footnotes" && (B.formattedData = void 0);
      const R = r.config.dashboard.sharedFilters && r.config.dashboard.sharedFilters.filter((q) => q.setBy === A).length > 0, V = R ? r.config.dashboard.sharedFilters.filter((q) => q.setBy === A)[0].active : void 0;
      if (B.editing) {
        k = !0;
        const q = (X) => {
          let Z = B.originalFormattedData ? { ...X, formattedData: B.originalFormattedData } : X;
          E(A, Z);
        };
        switch (B.type) {
          case "chart":
            W = /* @__PURE__ */ p(P, { children: [
              /* @__PURE__ */ o(ue, { visualizationKey: A, subEditor: "Chart" }),
              /* @__PURE__ */ o(
                sr,
                {
                  config: B,
                  isEditor: !0,
                  isDebug: n,
                  setConfig: q,
                  setSharedFilter: R ? C : void 0,
                  setSharedFilterValue: V,
                  dashboardConfig: r.config,
                  isDashboard: !0,
                  configUrl: void 0,
                  setEditing: void 0,
                  hostname: void 0,
                  link: void 0
                },
                A
              )
            ] });
            break;
          case "map":
            W = /* @__PURE__ */ p(P, { children: [
              /* @__PURE__ */ o(ue, { visualizationKey: A, subEditor: "Map" }),
              /* @__PURE__ */ o(
                cr,
                {
                  config: B,
                  isEditor: !0,
                  isDebug: n,
                  setConfig: q,
                  setSharedFilter: R ? C : void 0,
                  setSharedFilterValue: V,
                  isDashboard: !0,
                  showLoader: !1,
                  dashboardConfig: r.config
                },
                A
              )
            ] });
            break;
          case "data-bite":
            W = /* @__PURE__ */ p(P, { children: [
              /* @__PURE__ */ o(ue, { visualizationKey: A, subEditor: "Data Bite" }),
              /* @__PURE__ */ o(
                ur,
                {
                  config: { ...B, newViz: !0 },
                  isEditor: !0,
                  setConfig: q,
                  isDashboard: !0
                },
                A
              )
            ] });
            break;
          case "waffle-chart":
            W = /* @__PURE__ */ p(P, { children: [
              /* @__PURE__ */ o(ue, { visualizationKey: A, subEditor: "Waffle Chart" }),
              /* @__PURE__ */ o(
                dr,
                {
                  config: B,
                  isEditor: !0,
                  setConfig: q,
                  isDashboard: !0,
                  configUrl: void 0
                },
                A
              )
            ] });
            break;
          case "markup-include":
            W = /* @__PURE__ */ p(P, { children: [
              /* @__PURE__ */ o(ue, { visualizationKey: A, subEditor: "Markup Include" }),
              /* @__PURE__ */ o(
                fr,
                {
                  config: B,
                  isEditor: !0,
                  setConfig: q,
                  isDashboard: !0,
                  configUrl: void 0
                },
                A
              )
            ] });
            break;
          case "filtered-text":
            W = /* @__PURE__ */ p(P, { children: [
              /* @__PURE__ */ o(ue, { visualizationKey: A, subEditor: "Filtered Text" }),
              /* @__PURE__ */ o(
                xr,
                {
                  config: B,
                  isEditor: !0,
                  setConfig: q,
                  isDashboard: !0,
                  configUrl: void 0
                },
                A
              )
            ] });
            break;
          case "dashboardFilters":
            W = /* @__PURE__ */ p(P, { children: [
              /* @__PURE__ */ o(ue, { visualizationKey: A, subEditor: "Filter Dropdowns" }),
              /* @__PURE__ */ o(
                Zr,
                {
                  isEditor: !0,
                  visualizationConfig: B,
                  apiFilterDropdowns: u,
                  setConfig: q
                }
              )
            ] });
            break;
          case "table":
            W = /* @__PURE__ */ p(P, { children: [
              /* @__PURE__ */ o(ue, { visualizationKey: A, subEditor: "Table" }),
              /* @__PURE__ */ o(
                Vt,
                {
                  visualizationKey: A,
                  config: B,
                  isEditor: !0,
                  updateConfig: q
                }
              )
            ] });
            break;
          case "footnotes":
            W = /* @__PURE__ */ p(P, { children: [
              /* @__PURE__ */ o(ue, { visualizationKey: A, subEditor: "Footnotes" }),
              /* @__PURE__ */ o(
                Ye,
                {
                  visualizationKey: A,
                  config: { ...B, datasets: r.config.datasets },
                  isEditor: !0,
                  updateConfig: (X) => q(N.omit(X, "datasets"))
                }
              )
            ] });
            break;
          default:
            W = /* @__PURE__ */ o(P, {});
            break;
        }
      }
    }), k || (W = /* @__PURE__ */ p(eo, { backend: Ms, children: [
      /* @__PURE__ */ p("div", { className: "header-container", children: [
        /* @__PURE__ */ o(ue, {}),
        /* @__PURE__ */ o(cl, {})
      ] }),
      /* @__PURE__ */ o("div", { className: "layout-container", children: /* @__PURE__ */ o(nl, {}) })
    ] }));
  } else {
    const { config: k } = r, { title: A, description: H } = k.dashboard || {}, B = k.rows && k.rows.filter((R) => R.columns.filter((V) => V.widget).length !== 0);
    W = /* @__PURE__ */ p(P, { children: [
      t && /* @__PURE__ */ o(ue, {}),
      I && /* @__PURE__ */ o(Ca, { fullScreen: !0 }),
      /* @__PURE__ */ o(Ur, { isEditor: t && !c }),
      i.map((R, V) => /* @__PURE__ */ o(
        da,
        {
          type: "danger",
          onDismiss: () => s({ type: "DISMISS_ERROR_MESSAGE", payload: V }),
          message: R,
          autoDismiss: !0
        }
      )),
      /* @__PURE__ */ o(De.Responsive, { isEditor: t, children: /* @__PURE__ */ p("div", { className: `cdc-dashboard-inner-container${t ? " is-editor" : ""}`, children: [
        /* @__PURE__ */ o(
          ar,
          {
            title: A,
            isDashboard: !0,
            classes: ["dashboard-title", `${k.dashboard.theme ?? "theme-blue"}`]
          }
        ),
        H && /* @__PURE__ */ o("div", { className: "subtext mb-3", children: ir(H) }),
        B && B.map((R, V) => {
          if (R.multiVizColumn && (c || !t)) {
            const q = xe(r, N.cloneDeep(r.data))[V] ?? R.formattedData, X = {};
            return q.forEach((Z) => {
              const G = Z[R.multiVizColumn];
              X[G] || (X[G] = []), X[G].push(Z);
            }), /* @__PURE__ */ p(P, { children: [
              !v && R.expandCollapseAllButtons === !0 && /* @__PURE__ */ o(ql, { setAllExpanded: O }),
              Object.keys(X).map((Z) => {
                const G = X[Z];
                return /* @__PURE__ */ o(
                  er,
                  {
                    allExpanded: b,
                    filteredDataOverride: G,
                    groupName: Z,
                    row: R,
                    rowIndex: V,
                    setSharedFilter: C,
                    updateChildConfig: E,
                    apiFilterDropdowns: u,
                    currentViewport: m,
                    inNoDataState: v,
                    isLastRow: V === B.length - 1
                  },
                  `row__${V}__${Z}`
                );
              })
            ] });
          } else
            return /* @__PURE__ */ o(
              er,
              {
                allExpanded: !1,
                groupName: "",
                row: R,
                rowIndex: V,
                setSharedFilter: C,
                updateChildConfig: E,
                apiFilterDropdowns: u,
                currentViewport: m,
                inNoDataState: v,
                isLastRow: V === B.length - 1
              },
              `row__${V}`
            );
        }),
        v ? /* @__PURE__ */ o("div", { className: "mt-5", children: "Please complete your selection to continue." }) : /* @__PURE__ */ o(P, {}),
        /* @__PURE__ */ p("section", { className: "download-buttons", children: [
          ((Ut = k.table) == null ? void 0 : Ut.downloadImageButton) && /* @__PURE__ */ o(
            an.Button,
            {
              title: "Download Dashboard as Image",
              type: "image",
              state: k,
              text: "Download Dashboard Image",
              elementToCapture: T
            }
          ),
          ((zt = k.table) == null ? void 0 : zt.downloadPdfButton) && /* @__PURE__ */ o(
            an.Button,
            {
              title: "Download Dashboard as PDF",
              type: "pdf",
              state: k,
              text: "Download Dashboard PDF",
              elementToCapture: T
            }
          )
        ] }),
        ((Ht = k.table) == null ? void 0 : Ht.show) && k.data && /* @__PURE__ */ o(
          bt,
          {
            config: k,
            rawData: (qt = (jt = k.data) == null ? void 0 : jt[0]) != null && qt.tableData ? (Wt = (Gt = k.data) == null ? void 0 : Gt[0]) == null ? void 0 : Wt.tableData : k.data,
            runtimeData: (Zt = (Qt = k.data) == null ? void 0 : Qt[0]) != null && Zt.tableData ? (Xt = (Kt = k.data) == null ? void 0 : Kt[0]) == null ? void 0 : Xt.tableData : k.data || [],
            expandDataTable: k.table.expanded,
            showDownloadButton: k.table.download,
            tableTitle: k.dashboard.title || "",
            viewport: m,
            tabbingId: k.dashboard.title || "",
            outerContainerRef: j,
            imageRef: T,
            isDebug: n,
            isEditor: t
          }
        ),
        ((Yt = k.table) == null ? void 0 : Yt.show) && k.datasets && Object.keys(k.datasets).map((R) => {
          var X, Z, G, fe, be;
          const V = Se(k).filter((he) => k.visualizations[he].dataKey === R);
          let Q = [];
          (X = k.dashboard.sharedFilters) == null || X.forEach((he) => {
            let J = !0;
            V.forEach((Ne) => {
              he.usedBy && he.usedBy.indexOf(Ne) === -1 && (J = !1);
            }), J && Q.push(he);
          });
          const q = Q.length > 0 ? Ie(Q, k.datasets[R].data) : void 0;
          return /* @__PURE__ */ o(
            "div",
            {
              className: "multi-table-container",
              id: `data-table-${R}`,
              children: /* @__PURE__ */ o(
                bt,
                {
                  config: k,
                  dataConfig: k.datasets[R],
                  rawData: ((G = (Z = k.datasets[R].data) == null ? void 0 : Z[0]) == null ? void 0 : G.tableData) || k.datasets[R].data,
                  runtimeData: ((be = (fe = k.datasets[R].data) == null ? void 0 : fe[0]) == null ? void 0 : be.tableData) || q || k.datasets[R].data || [],
                  expandDataTable: k.table.expanded,
                  tableTitle: R,
                  viewport: m,
                  tabbingId: R
                }
              )
            },
            `data-table-${R}`
          );
        })
      ] }) })
    ] });
  }
  const z = ["cdc-open-viz-module", "type-dashboard", `${m}`];
  return /* @__PURE__ */ o($s, { children: /* @__PURE__ */ o(
    ne.Provider,
    {
      value: {
        ...r,
        setParentConfig: l.setTempConfig,
        outerContainerRef: j,
        isDebug: n,
        loadAPIFilters: w,
        setAPIFilterDropdowns: h,
        reloadURLData: _,
        setAPILoading: g
      },
      children: /* @__PURE__ */ p(ae.Provider, { value: a, children: [
        /* @__PURE__ */ o("div", { className: z.join(" "), ref: j, "data-download-id": T, children: W }),
        /* @__PURE__ */ o(zs, {})
      ] })
    }
  ) });
}
const rr = {
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
}, Zl = async (e) => {
  let t = e.formattedData || e.data;
  return e.dataUrl && (t = await $e(`${e.dataUrl}`), t = Te(t, e.dataDescription)), t;
}, Iu = ({ configUrl: e, isEditor: t, isDebug: n, config: r }) => {
  const [a, i] = y.useState(void 0), s = y.useContext(lr), l = (b) => {
    if (!b.multiDashboards)
      return null;
    const O = Ft()["cove-tab"];
    return O !== void 0 && Number(O) < b.multiDashboards.length ? Number(O) : 0;
  }, u = (b, O) => {
    const [I, g] = Et(Ke)(b, O), c = hr(I);
    return { ...Ke, config: c, filteredData: g, data: O };
  }, h = async () => {
    const b = r || s.config || await (await fetch(e)).json(), O = l(b), { newConfig: I, datasets: g } = O !== null ? await T(b, O) : await d(b);
    i(u(I, g));
  };
  y.useEffect(() => {
    h();
  }, []);
  const m = (b) => {
    let O = { ...b };
    const I = Object.keys(b.datasets).reduce((g, c) => {
      const v = b.datasets[c];
      return g[c] = v.formattedData || v.data, g;
    }, {});
    return Se(O).forEach((g) => {
      const c = I[O.visualizations[g].dataKey];
      c && (O.visualizations[g].formattedData = c);
    }), Object.keys(I).forEach((g) => {
      O.datasets[g].data = I[g];
    }), { newConfig: O, datasets: I };
  }, d = async (b) => {
    let O = { ...rr, ...b };
    if (b.datasets)
      return m(O);
    {
      const I = O.dataFileName || "backwards-compatibility", g = await Zl(b), c = {};
      if (c[I] = {
        data: g,
        dataDescription: O.dataDescription
      }, O.datasets = c, Se(O).forEach((S) => {
        const D = { dataKey: I, ...N.pick(O, "dataDescription", "formattedData") };
        O.visualizations[S] = { ...O.visualizations[S], ...D };
      }), O = { ...O, ...{
        data: [],
        dataUrl: "",
        dataFileName: "",
        dataFileSourceType: "",
        dataDescription: {},
        formattedData: []
      } }, O.dashboard.filters) {
        const S = { ...O.dashboard };
        S.sharedFilters || (S.sharedFilters = []);
        const D = S.filters.map((w) => ({ ...w, key: w.label, showDropdown: !0, usedBy: Se(O) }));
        S.sharedFilters = [...S.sharedFilters, ...D], O.dashboard = { ...S, filters: void 0 };
      }
      const f = { [I]: g };
      return { newConfig: O, datasets: f };
    }
  }, T = async (b, O) => {
    const I = b.multiDashboards[O], g = {
      ...rr,
      ...b,
      ...I,
      multiDashboards: b.multiDashboards,
      activeDashboard: O
    };
    return m(g);
  };
  return a ? /* @__PURE__ */ o(Ql, { isEditor: t, isDebug: n, initialState: a }) : /* @__PURE__ */ o(Nt, {});
};
export {
  $s as G,
  Iu as M,
  zs as O,
  mt as a,
  jr as d
};
