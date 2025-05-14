import { j as o, F as G, a as f } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as m, R as ct } from "./storybook-index-f2fed736.es.js";
import { c as ra, A as na, V as aa, a as ia, F as oa, b as sa, r as la, d as ua } from "./storybook-InputToggle-5cfd438e.es.js";
import { b as ca, g as da } from "./storybook-getViewport-cf99c09b.es.js";
import { p as un } from "./storybook-index-31bf6905.es.js";
import { f as We } from "./storybook-fetchRemoteData-d0119f0b.es.js";
import { E as cn, L as mt } from "./storybook-viewports-61111b6b.es.js";
import { D as Pe, A as fa, a as ar, b as ir, c as or, d as sr } from "./storybook-DataTransform-d4bb56a2.es.js";
import { a as ha, D as pa, C as dn } from "./storybook-CdcChartComponent-d814bb89.es.js";
import { C as fn } from "./storybook-CdcDataBite-be3b07b8.es.js";
import { e as ga, d as hn, C as pn, A as ma } from "./storybook-CdcMapComponent-855e0507.es.js";
import { C as gn } from "./storybook-CdcWaffleChart-8b43149d.es.js";
import { C as mn } from "./storybook-CdcMarkupInclude-f4bffc63.es.js";
import { T as vn } from "./storybook-index-4a64ea6e.es.js";
import { _ as x } from "./storybook-lodash-a4231e1c.es.js";
import { A as Xe, a as va, b as Ct, c as Et, d as Ot, e as It } from "./storybook-Accordion-e71370da.es.js";
import { I as ya, a as ze } from "./storybook-editor-8aca7312.es.js";
import { B as ba } from "./storybook-Button-f953e457.es.js";
import { a as R } from "./storybook-Icon-e250778e.es.js";
import { T as N } from "./storybook-Tooltip-7cf39805.es.js";
import { I as Ie } from "./storybook-InputSelect-368b8698.es.js";
import { L as ke, u as Da, s as Sa, a as wa } from "./storybook-useDataVizClasses-3bf30247.es.js";
import { u as Qt } from "./storybook-updateFieldFactory-c006040a.es.js";
import { c as yn } from "./storybook-coveUpdateWorker-2b7600bb.es.js";
import { D as Ta } from "./storybook-DataDesigner-9363c314.es.js";
import { P as Ue } from "./storybook-index-43433e35.es.js";
import { L as Rt } from "./storybook-Loader-0256c39d.es.js";
import { C as rt, T as we, S as nt } from "./storybook-Inputs-f2c63984.es.js";
import { u as at, g as bn, f as lr, a as Ca, F as Ea, b as Zt, c as Dn, r as Oa, h as Sn, d as Ve, e as Ia } from "./storybook-Filters-caf19344.es.js";
import { D as Mt, f as _a, M as ur } from "./storybook-DataTable-577422ab.es.js";
import { F as ge } from "./storybook-FilterStyles-fd509eb9.es.js";
import { C as wn } from "./storybook-ConfigContext-04a7c3c3.es.js";
import { D as Na } from "./storybook-DashboardFilters-9b23b8a8.es.js";
import { M as _t } from "./storybook-MultiSelect-cda00383.es.js";
import "./storybook-NestedDropdown-92b50717.es.js";
import { F as ka } from "./storybook-Footnotes-00fcc704.es.js";
var Tn = m.createContext({
  dragDropManager: void 0
}), me;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(me || (me = {}));
function U(e, r) {
  for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), a = 2; a < t; a++)
    n[a - 2] = arguments[a];
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var i;
    if (r === void 0)
      i = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = 0;
      i = new Error(r.replace(/%s/g, function() {
        return n[s++];
      })), i.name = "Invariant Violation";
    }
    throw i.framesToPop = 1, i;
  }
}
var Kt = "dnd-core/INIT_COORDS", vt = "dnd-core/BEGIN_DRAG", Yt = "dnd-core/PUBLISH_DRAG_SOURCE", yt = "dnd-core/HOVER", bt = "dnd-core/DROP", Dt = "dnd-core/END_DRAG";
function cr(e, r) {
  return {
    type: Kt,
    payload: {
      sourceClientOffset: r || null,
      clientOffset: e || null
    }
  };
}
function it(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? it = function(t) {
    return typeof t;
  } : it = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, it(e);
}
function Aa(e, r, t) {
  return r.split(".").reduce(function(n, a) {
    return n && n[a] ? n[a] : t || null;
  }, e);
}
function Fa(e, r) {
  return e.filter(function(t) {
    return t !== r;
  });
}
function Cn(e) {
  return it(e) === "object";
}
function La(e, r) {
  var t = /* @__PURE__ */ new Map(), n = function(s) {
    t.set(s, t.has(s) ? t.get(s) + 1 : 1);
  };
  e.forEach(n), r.forEach(n);
  var a = [];
  return t.forEach(function(i, s) {
    i === 1 && a.push(s);
  }), a;
}
function Pa(e, r) {
  return e.filter(function(t) {
    return r.indexOf(t) > -1;
  });
}
var xa = {
  type: Kt,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function Ra(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, a = n.publishSource, i = a === void 0 ? !0 : a, s = n.clientOffset, l = n.getSourceClientOffset, u = e.getMonitor(), d = e.getRegistry();
    e.dispatch(cr(s)), Ma(t, u, d);
    var h = $a(t, u);
    if (h === null) {
      e.dispatch(xa);
      return;
    }
    var c = null;
    if (s) {
      if (!l)
        throw new Error("getSourceClientOffset must be defined");
      Va(l), c = l(h);
    }
    e.dispatch(cr(s, c));
    var D = d.getSource(h), v = D.beginDrag(u, h);
    if (v != null) {
      Ba(v), d.pinSource(h);
      var S = d.getSourceType(h);
      return {
        type: vt,
        payload: {
          itemType: S,
          item: v,
          sourceId: h,
          clientOffset: s || null,
          sourceClientOffset: c || null,
          isSourcePublic: !!i
        }
      };
    }
  };
}
function Ma(e, r, t) {
  U(!r.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(n) {
    U(t.getSource(n), "Expected sourceIds to be registered.");
  });
}
function Va(e) {
  U(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function Ba(e) {
  U(Cn(e), "Item must be an object.");
}
function $a(e, r) {
  for (var t = null, n = e.length - 1; n >= 0; n--)
    if (r.canDragSource(e[n])) {
      t = e[n];
      break;
    }
  return t;
}
function za(e) {
  return function() {
    var t = e.getMonitor();
    if (t.isDragging())
      return {
        type: Yt
      };
  };
}
function Vt(e, r) {
  return r === null ? e === null : Array.isArray(e) ? e.some(function(t) {
    return t === r;
  }) : e === r;
}
function Ua(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.clientOffset;
    Ha(t);
    var i = t.slice(0), s = e.getMonitor(), l = e.getRegistry();
    ja(i, s, l);
    var u = s.getItemType();
    return Ga(i, l, u), qa(i, s, l), {
      type: yt,
      payload: {
        targetIds: i,
        clientOffset: a || null
      }
    };
  };
}
function Ha(e) {
  U(Array.isArray(e), "Expected targetIds to be an array.");
}
function ja(e, r, t) {
  U(r.isDragging(), "Cannot call hover while not dragging."), U(!r.didDrop(), "Cannot call hover after drop.");
  for (var n = 0; n < e.length; n++) {
    var a = e[n];
    U(e.lastIndexOf(a) === n, "Expected targetIds to be unique in the passed array.");
    var i = t.getTarget(a);
    U(i, "Expected targetIds to be registered.");
  }
}
function Ga(e, r, t) {
  for (var n = e.length - 1; n >= 0; n--) {
    var a = e[n], i = r.getTargetType(a);
    Vt(i, t) || e.splice(n, 1);
  }
}
function qa(e, r, t) {
  e.forEach(function(n) {
    var a = t.getTarget(n);
    a.hover(r, n);
  });
}
function dr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function fr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? dr(Object(t), !0).forEach(function(n) {
      Wa(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : dr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Wa(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Qa(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.getMonitor(), a = e.getRegistry();
    Za(n);
    var i = Xa(n);
    i.forEach(function(s, l) {
      var u = Ka(s, l, a, n), d = {
        type: bt,
        payload: {
          dropResult: fr(fr({}, t), u)
        }
      };
      e.dispatch(d);
    });
  };
}
function Za(e) {
  U(e.isDragging(), "Cannot call drop while not dragging."), U(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function Ka(e, r, t, n) {
  var a = t.getTarget(e), i = a ? a.drop(n, e) : void 0;
  return Ya(i), typeof i > "u" && (i = r === 0 ? {} : n.getDropResult()), i;
}
function Ya(e) {
  U(typeof e > "u" || Cn(e), "Drop result must either be an object or undefined.");
}
function Xa(e) {
  var r = e.getTargetIds().filter(e.canDropOnTarget, e);
  return r.reverse(), r;
}
function Ja(e) {
  return function() {
    var t = e.getMonitor(), n = e.getRegistry();
    ei(t);
    var a = t.getSourceId();
    if (a != null) {
      var i = n.getSource(a, !0);
      i.endDrag(t, a), n.unpinSource();
    }
    return {
      type: Dt
    };
  };
}
function ei(e) {
  U(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function ti(e) {
  return {
    beginDrag: Ra(e),
    publishDragSource: za(e),
    hover: Ua(e),
    drop: Qa(e),
    endDrag: Ja(e)
  };
}
function ri(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function hr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ni(e, r, t) {
  return r && hr(e.prototype, r), t && hr(e, t), e;
}
function He(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var ai = /* @__PURE__ */ function() {
  function e(r, t) {
    var n = this;
    ri(this, e), He(this, "store", void 0), He(this, "monitor", void 0), He(this, "backend", void 0), He(this, "isSetUp", !1), He(this, "handleRefCountChange", function() {
      var a = n.store.getState().refCount > 0;
      n.backend && (a && !n.isSetUp ? (n.backend.setup(), n.isSetUp = !0) : !a && n.isSetUp && (n.backend.teardown(), n.isSetUp = !1));
    }), this.store = r, this.monitor = t, r.subscribe(this.handleRefCountChange);
  }
  return ni(e, [{
    key: "receiveBackend",
    value: function(t) {
      this.backend = t;
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
      var t = this, n = this.store.dispatch;
      function a(s) {
        return function() {
          for (var l = arguments.length, u = new Array(l), d = 0; d < l; d++)
            u[d] = arguments[d];
          var h = s.apply(t, u);
          typeof h < "u" && n(h);
        };
      }
      var i = ti(this);
      return Object.keys(i).reduce(function(s, l) {
        var u = i[l];
        return s[l] = a(u), s;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function(t) {
      this.store.dispatch(t);
    }
  }]), e;
}(), ii = function(r, t) {
  return r === t;
};
function oi(e, r) {
  return !e && !r ? !0 : !e || !r ? !1 : e.x === r.x && e.y === r.y;
}
function si(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ii;
  if (e.length !== r.length)
    return !1;
  for (var n = 0; n < e.length; ++n)
    if (!t(e[n], r[n]))
      return !1;
  return !0;
}
function pr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function gr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? pr(Object(t), !0).forEach(function(n) {
      li(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : pr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function li(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var mr = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function ui() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mr, r = arguments.length > 1 ? arguments[1] : void 0, t = r.payload;
  switch (r.type) {
    case Kt:
    case vt:
      return {
        initialSourceClientOffset: t.sourceClientOffset,
        initialClientOffset: t.clientOffset,
        clientOffset: t.clientOffset
      };
    case yt:
      return oi(e.clientOffset, t.clientOffset) ? e : gr(gr({}, e), {}, {
        clientOffset: t.clientOffset
      });
    case Dt:
    case bt:
      return mr;
    default:
      return e;
  }
}
var Xt = "dnd-core/ADD_SOURCE", Jt = "dnd-core/ADD_TARGET", er = "dnd-core/REMOVE_SOURCE", St = "dnd-core/REMOVE_TARGET";
function ci(e) {
  return {
    type: Xt,
    payload: {
      sourceId: e
    }
  };
}
function di(e) {
  return {
    type: Jt,
    payload: {
      targetId: e
    }
  };
}
function fi(e) {
  return {
    type: er,
    payload: {
      sourceId: e
    }
  };
}
function hi(e) {
  return {
    type: St,
    payload: {
      targetId: e
    }
  };
}
function vr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function he(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? vr(Object(t), !0).forEach(function(n) {
      pi(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : vr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function pi(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var gi = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function mi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gi, r = arguments.length > 1 ? arguments[1] : void 0, t = r.payload;
  switch (r.type) {
    case vt:
      return he(he({}, e), {}, {
        itemType: t.itemType,
        item: t.item,
        sourceId: t.sourceId,
        isSourcePublic: t.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case Yt:
      return he(he({}, e), {}, {
        isSourcePublic: !0
      });
    case yt:
      return he(he({}, e), {}, {
        targetIds: t.targetIds
      });
    case St:
      return e.targetIds.indexOf(t.targetId) === -1 ? e : he(he({}, e), {}, {
        targetIds: Fa(e.targetIds, t.targetId)
      });
    case bt:
      return he(he({}, e), {}, {
        dropResult: t.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Dt:
      return he(he({}, e), {}, {
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
function vi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, r = arguments.length > 1 ? arguments[1] : void 0;
  switch (r.type) {
    case Xt:
    case Jt:
      return e + 1;
    case er:
    case St:
      return e - 1;
    default:
      return e;
  }
}
var dt = [], tr = [];
dt.__IS_NONE__ = !0;
tr.__IS_ALL__ = !0;
function yi(e, r) {
  if (e === dt)
    return !1;
  if (e === tr || typeof r > "u")
    return !0;
  var t = Pa(r, e);
  return t.length > 0;
}
function bi() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case yt:
      break;
    case Xt:
    case Jt:
    case St:
    case er:
      return dt;
    case vt:
    case Yt:
    case Dt:
    case bt:
    default:
      return tr;
  }
  var r = e.payload, t = r.targetIds, n = t === void 0 ? [] : t, a = r.prevTargetIds, i = a === void 0 ? [] : a, s = La(n, i), l = s.length > 0 || !si(n, i);
  if (!l)
    return dt;
  var u = i[i.length - 1], d = n[n.length - 1];
  return u !== d && (u && s.push(u), d && s.push(d)), s;
}
function Di() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return e + 1;
}
function yr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function br(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? yr(Object(t), !0).forEach(function(n) {
      Si(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : yr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Si(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function wi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: bi(e.dirtyHandlerIds, {
      type: r.type,
      payload: br(br({}, r.payload), {}, {
        prevTargetIds: Aa(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: ui(e.dragOffset, r),
    refCount: vi(e.refCount, r),
    dragOperation: mi(e.dragOperation, r),
    stateId: Di(e.stateId)
  };
}
function Ti(e, r) {
  return {
    x: e.x + r.x,
    y: e.y + r.y
  };
}
function En(e, r) {
  return {
    x: e.x - r.x,
    y: e.y - r.y
  };
}
function Ci(e) {
  var r = e.clientOffset, t = e.initialClientOffset, n = e.initialSourceClientOffset;
  return !r || !t || !n ? null : En(Ti(r, n), t);
}
function Ei(e) {
  var r = e.clientOffset, t = e.initialClientOffset;
  return !r || !t ? null : En(r, t);
}
function Oi(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Dr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ii(e, r, t) {
  return r && Dr(e.prototype, r), t && Dr(e, t), e;
}
function Sr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var _i = /* @__PURE__ */ function() {
  function e(r, t) {
    Oi(this, e), Sr(this, "store", void 0), Sr(this, "registry", void 0), this.store = r, this.registry = t;
  }
  return Ii(e, [{
    key: "subscribeToStateChange",
    value: function(t) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      }, i = a.handlerIds;
      U(typeof t == "function", "listener must be a function."), U(typeof i > "u" || Array.isArray(i), "handlerIds, when specified, must be an array of strings.");
      var s = this.store.getState().stateId, l = function() {
        var d = n.store.getState(), h = d.stateId;
        try {
          var c = h === s || h === s + 1 && !yi(d.dirtyHandlerIds, i);
          c || t();
        } finally {
          s = h;
        }
      };
      return this.store.subscribe(l);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(t) {
      var n = this;
      U(typeof t == "function", "listener must be a function.");
      var a = this.store.getState().dragOffset, i = function() {
        var l = n.store.getState().dragOffset;
        l !== a && (a = l, t());
      };
      return this.store.subscribe(i);
    }
  }, {
    key: "canDragSource",
    value: function(t) {
      if (!t)
        return !1;
      var n = this.registry.getSource(t);
      return U(n, "Expected to find a valid source. sourceId=".concat(t)), this.isDragging() ? !1 : n.canDrag(this, t);
    }
  }, {
    key: "canDropOnTarget",
    value: function(t) {
      if (!t)
        return !1;
      var n = this.registry.getTarget(t);
      if (U(n, "Expected to find a valid target. targetId=".concat(t)), !this.isDragging() || this.didDrop())
        return !1;
      var a = this.registry.getTargetType(t), i = this.getItemType();
      return Vt(a, i) && n.canDrop(this, t);
    }
  }, {
    key: "isDragging",
    value: function() {
      return !!this.getItemType();
    }
  }, {
    key: "isDraggingSource",
    value: function(t) {
      if (!t)
        return !1;
      var n = this.registry.getSource(t, !0);
      if (U(n, "Expected to find a valid source. sourceId=".concat(t)), !this.isDragging() || !this.isSourcePublic())
        return !1;
      var a = this.registry.getSourceType(t), i = this.getItemType();
      return a !== i ? !1 : n.isDragging(this, t);
    }
  }, {
    key: "isOverTarget",
    value: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shallow: !1
      };
      if (!t)
        return !1;
      var a = n.shallow;
      if (!this.isDragging())
        return !1;
      var i = this.registry.getTargetType(t), s = this.getItemType();
      if (s && !Vt(i, s))
        return !1;
      var l = this.getTargetIds();
      if (!l.length)
        return !1;
      var u = l.indexOf(t);
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
      return Ci(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return Ei(this.store.getState().dragOffset);
    }
  }]), e;
}(), Ni = 0;
function ki() {
  return Ni++;
}
function ot(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ot = function(t) {
    return typeof t;
  } : ot = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ot(e);
}
function Ai(e) {
  U(typeof e.canDrag == "function", "Expected canDrag to be a function."), U(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), U(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function Fi(e) {
  U(typeof e.canDrop == "function", "Expected canDrop to be a function."), U(typeof e.hover == "function", "Expected hover to be a function."), U(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function Bt(e, r) {
  if (r && Array.isArray(e)) {
    e.forEach(function(t) {
      return Bt(t, !1);
    });
    return;
  }
  U(typeof e == "string" || ot(e) === "symbol", r ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const wr = typeof global < "u" ? global : self, On = wr.MutationObserver || wr.WebKitMutationObserver;
function In(e) {
  return function() {
    const t = setTimeout(a, 0), n = setInterval(a, 50);
    function a() {
      clearTimeout(t), clearInterval(n), e();
    }
  };
}
function Li(e) {
  let r = 1;
  const t = new On(e), n = document.createTextNode("");
  return t.observe(n, {
    characterData: !0
  }), function() {
    r = -r, n.data = r;
  };
}
const Pi = typeof On == "function" ? (
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
  Li
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
  In
);
class xi {
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
  enqueueTask(r) {
    const { queue: t, requestFlush: n } = this;
    t.length || (n(), this.flushing = !0), t[t.length] = r;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: r } = this;
      for (; this.index < r.length; ) {
        const t = this.index;
        if (this.index++, r[t].call(), this.index > this.capacity) {
          for (let n = 0, a = r.length - this.index; n < a; n++)
            r[n] = r[n + this.index];
          r.length -= this.index, this.index = 0;
        }
      }
      r.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (r) => {
      this.pendingErrors.push(r), this.requestErrorThrow();
    }, this.requestFlush = Pi(this.flush), this.requestErrorThrow = In(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class Ri {
  call() {
    try {
      this.task && this.task();
    } catch (r) {
      this.onError(r);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(r, t) {
    this.onError = r, this.release = t, this.task = null;
  }
}
class Mi {
  create(r) {
    const t = this.freeTasks, n = t.length ? t.pop() : new Ri(
      this.onError,
      (a) => t[t.length] = a
    );
    return n.task = r, n;
  }
  constructor(r) {
    this.onError = r, this.freeTasks = [];
  }
}
const _n = new xi(), Vi = new Mi(_n.registerPendingError);
function Bi(e) {
  _n.enqueueTask(Vi.create(e));
}
function $i(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Tr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function zi(e, r, t) {
  return r && Tr(e.prototype, r), t && Tr(e, t), e;
}
function Re(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Ui(e, r) {
  return qi(e) || Gi(e, r) || ji(e, r) || Hi();
}
function Hi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ji(e, r) {
  if (e) {
    if (typeof e == "string")
      return Cr(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Cr(e, r);
  }
}
function Cr(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Gi(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, s, l;
    try {
      for (t = t.call(e); !(a = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function qi(e) {
  if (Array.isArray(e))
    return e;
}
function Wi(e) {
  var r = ki().toString();
  switch (e) {
    case me.SOURCE:
      return "S".concat(r);
    case me.TARGET:
      return "T".concat(r);
    default:
      throw new Error("Unknown Handler Role: ".concat(e));
  }
}
function Er(e) {
  switch (e[0]) {
    case "S":
      return me.SOURCE;
    case "T":
      return me.TARGET;
    default:
      U(!1, "Cannot parse handler ID: ".concat(e));
  }
}
function Or(e, r) {
  var t = e.entries(), n = !1;
  do {
    var a = t.next(), i = a.done, s = Ui(a.value, 2), l = s[1];
    if (l === r)
      return !0;
    n = !!i;
  } while (!n);
  return !1;
}
var Qi = /* @__PURE__ */ function() {
  function e(r) {
    $i(this, e), Re(this, "types", /* @__PURE__ */ new Map()), Re(this, "dragSources", /* @__PURE__ */ new Map()), Re(this, "dropTargets", /* @__PURE__ */ new Map()), Re(this, "pinnedSourceId", null), Re(this, "pinnedSource", null), Re(this, "store", void 0), this.store = r;
  }
  return zi(e, [{
    key: "addSource",
    value: function(t, n) {
      Bt(t), Ai(n);
      var a = this.addHandler(me.SOURCE, t, n);
      return this.store.dispatch(ci(a)), a;
    }
  }, {
    key: "addTarget",
    value: function(t, n) {
      Bt(t, !0), Fi(n);
      var a = this.addHandler(me.TARGET, t, n);
      return this.store.dispatch(di(a)), a;
    }
  }, {
    key: "containsHandler",
    value: function(t) {
      return Or(this.dragSources, t) || Or(this.dropTargets, t);
    }
  }, {
    key: "getSource",
    value: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      U(this.isSourceId(t), "Expected a valid source ID.");
      var a = n && t === this.pinnedSourceId, i = a ? this.pinnedSource : this.dragSources.get(t);
      return i;
    }
  }, {
    key: "getTarget",
    value: function(t) {
      return U(this.isTargetId(t), "Expected a valid target ID."), this.dropTargets.get(t);
    }
  }, {
    key: "getSourceType",
    value: function(t) {
      return U(this.isSourceId(t), "Expected a valid source ID."), this.types.get(t);
    }
  }, {
    key: "getTargetType",
    value: function(t) {
      return U(this.isTargetId(t), "Expected a valid target ID."), this.types.get(t);
    }
  }, {
    key: "isSourceId",
    value: function(t) {
      var n = Er(t);
      return n === me.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(t) {
      var n = Er(t);
      return n === me.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(t) {
      var n = this;
      U(this.getSource(t), "Expected an existing source."), this.store.dispatch(fi(t)), Bi(function() {
        n.dragSources.delete(t), n.types.delete(t);
      });
    }
  }, {
    key: "removeTarget",
    value: function(t) {
      U(this.getTarget(t), "Expected an existing target."), this.store.dispatch(hi(t)), this.dropTargets.delete(t), this.types.delete(t);
    }
  }, {
    key: "pinSource",
    value: function(t) {
      var n = this.getSource(t);
      U(n, "Expected an existing source."), this.pinnedSourceId = t, this.pinnedSource = n;
    }
  }, {
    key: "unpinSource",
    value: function() {
      U(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function(t, n, a) {
      var i = Wi(t);
      return this.types.set(i, n), t === me.SOURCE ? this.dragSources.set(i, a) : t === me.TARGET && this.dropTargets.set(i, a), i;
    }
  }]), e;
}();
function Zi(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a = Ki(n), i = new _i(a, new Qi(a)), s = new ai(a, i), l = e(s, r, t);
  return s.receiveBackend(l), s;
}
function Ki(e) {
  var r = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return ra(wi, e && r && r({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var Yi = ["children"];
function Xi(e, r) {
  return ro(e) || to(e, r) || eo(e, r) || Ji();
}
function Ji() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eo(e, r) {
  if (e) {
    if (typeof e == "string")
      return Ir(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Ir(e, r);
  }
}
function Ir(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function to(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, s, l;
    try {
      for (t = t.call(e); !(a = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function ro(e) {
  if (Array.isArray(e))
    return e;
}
function no(e, r) {
  if (e == null)
    return {};
  var t = ao(e, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function ao(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
var _r = 0, st = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), io = m.memo(function(r) {
  var t = r.children, n = no(r, Yi), a = oo(n), i = Xi(a, 2), s = i[0], l = i[1];
  return m.useEffect(function() {
    if (l) {
      var u = Nn();
      return ++_r, function() {
        --_r === 0 && (u[st] = null);
      };
    }
  }, []), o(Tn.Provider, Object.assign({
    value: s
  }, {
    children: t
  }), void 0);
});
function oo(e) {
  if ("manager" in e) {
    var r = {
      dragDropManager: e.manager
    };
    return [r, !1];
  }
  var t = so(e.backend, e.context, e.options, e.debugMode), n = !e.context;
  return [t, n];
}
function so(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nn(), t = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, a = r;
  return a[st] || (a[st] = {
    dragDropManager: Zi(e, r, t, n)
  }), a[st];
}
function Nn() {
  return typeof global < "u" ? global : window;
}
function lo(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Nr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function uo(e, r, t) {
  return r && Nr(e.prototype, r), t && Nr(e, t), e;
}
function kr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Nt = !1, kt = !1, co = /* @__PURE__ */ function() {
  function e(r) {
    lo(this, e), kr(this, "internalMonitor", void 0), kr(this, "sourceId", null), this.internalMonitor = r.getMonitor();
  }
  return uo(e, [{
    key: "receiveHandlerId",
    value: function(t) {
      this.sourceId = t;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function() {
      U(!Nt, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return Nt = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        Nt = !1;
      }
    }
  }, {
    key: "isDragging",
    value: function() {
      if (!this.sourceId)
        return !1;
      U(!kt, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return kt = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        kt = !1;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function(t, n) {
      return this.internalMonitor.subscribeToStateChange(t, n);
    }
  }, {
    key: "isDraggingSource",
    value: function(t) {
      return this.internalMonitor.isDraggingSource(t);
    }
  }, {
    key: "isOverTarget",
    value: function(t, n) {
      return this.internalMonitor.isOverTarget(t, n);
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
    value: function(t) {
      return this.internalMonitor.subscribeToOffsetChange(t);
    }
  }, {
    key: "canDragSource",
    value: function(t) {
      return this.internalMonitor.canDragSource(t);
    }
  }, {
    key: "canDropOnTarget",
    value: function(t) {
      return this.internalMonitor.canDropOnTarget(t);
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
function fo(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Ar(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ho(e, r, t) {
  return r && Ar(e.prototype, r), t && Ar(e, t), e;
}
function Fr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var At = !1, po = /* @__PURE__ */ function() {
  function e(r) {
    fo(this, e), Fr(this, "internalMonitor", void 0), Fr(this, "targetId", null), this.internalMonitor = r.getMonitor();
  }
  return ho(e, [{
    key: "receiveHandlerId",
    value: function(t) {
      this.targetId = t;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function(t, n) {
      return this.internalMonitor.subscribeToStateChange(t, n);
    }
  }, {
    key: "canDrop",
    value: function() {
      if (!this.targetId)
        return !1;
      U(!At, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return At = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        At = !1;
      }
    }
  }, {
    key: "isOver",
    value: function(t) {
      return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, t) : !1;
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
function go(e) {
  if (typeof e.type != "string") {
    var r = e.type.displayName || e.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(r, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function mo(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!m.isValidElement(r)) {
      var n = r;
      return e(n, t), n;
    }
    var a = r;
    go(a);
    var i = t ? function(s) {
      return e(s, t);
    } : e;
    return vo(a, i);
  };
}
function kn(e) {
  var r = {};
  return Object.keys(e).forEach(function(t) {
    var n = e[t];
    if (t.endsWith("Ref"))
      r[t] = e[t];
    else {
      var a = mo(n);
      r[t] = function() {
        return a;
      };
    }
  }), r;
}
function Lr(e, r) {
  typeof e == "function" ? e(r) : e.current = r;
}
function vo(e, r) {
  var t = e.ref;
  return U(typeof t != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), t ? m.cloneElement(e, {
    ref: function(a) {
      Lr(t, a), Lr(r, a);
    }
  }) : m.cloneElement(e, {
    ref: r
  });
}
function lt(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? lt = function(t) {
    return typeof t;
  } : lt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lt(e);
}
function $t(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && lt(e) === "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function zt(e, r, t, n) {
  var a = t ? t.call(n, e, r) : void 0;
  if (a !== void 0)
    return !!a;
  if (e === r)
    return !0;
  if (typeof e != "object" || !e || typeof r != "object" || !r)
    return !1;
  var i = Object.keys(e), s = Object.keys(r);
  if (i.length !== s.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(r), u = 0; u < i.length; u++) {
    var d = i[u];
    if (!l(d))
      return !1;
    var h = e[d], c = r[d];
    if (a = t ? t.call(n, h, c, d) : void 0, a === !1 || a === void 0 && h !== c)
      return !1;
  }
  return !0;
}
function yo(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Pr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function bo(e, r, t) {
  return r && Pr(e.prototype, r), t && Pr(e, t), e;
}
function ie(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Do = /* @__PURE__ */ function() {
  function e(r) {
    var t = this;
    yo(this, e), ie(this, "hooks", kn({
      dragSource: function(a, i) {
        t.clearDragSource(), t.dragSourceOptions = i || null, $t(a) ? t.dragSourceRef = a : t.dragSourceNode = a, t.reconnectDragSource();
      },
      dragPreview: function(a, i) {
        t.clearDragPreview(), t.dragPreviewOptions = i || null, $t(a) ? t.dragPreviewRef = a : t.dragPreviewNode = a, t.reconnectDragPreview();
      }
    })), ie(this, "handlerId", null), ie(this, "dragSourceRef", null), ie(this, "dragSourceNode", void 0), ie(this, "dragSourceOptionsInternal", null), ie(this, "dragSourceUnsubscribe", void 0), ie(this, "dragPreviewRef", null), ie(this, "dragPreviewNode", void 0), ie(this, "dragPreviewOptionsInternal", null), ie(this, "dragPreviewUnsubscribe", void 0), ie(this, "lastConnectedHandlerId", null), ie(this, "lastConnectedDragSource", null), ie(this, "lastConnectedDragSourceOptions", null), ie(this, "lastConnectedDragPreview", null), ie(this, "lastConnectedDragPreviewOptions", null), ie(this, "backend", void 0), this.backend = r;
  }
  return bo(e, [{
    key: "receiveHandlerId",
    value: function(t) {
      this.handlerId !== t && (this.handlerId = t, this.reconnect());
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
    set: function(t) {
      this.dragSourceOptionsInternal = t;
    }
  }, {
    key: "dragPreviewOptions",
    get: function() {
      return this.dragPreviewOptionsInternal;
    },
    set: function(t) {
      this.dragPreviewOptionsInternal = t;
    }
  }, {
    key: "reconnect",
    value: function() {
      this.reconnectDragSource(), this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function() {
      var t = this.dragSource, n = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (n && this.disconnectDragSource(), !!this.handlerId) {
        if (!t) {
          this.lastConnectedDragSource = t;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = t, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, t, this.dragSourceOptions));
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function() {
      var t = this.dragPreview, n = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (n && this.disconnectDragPreview(), !!this.handlerId) {
        if (!t) {
          this.lastConnectedDragPreview = t;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = t, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, t, this.dragPreviewOptions));
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
      return !zt(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function() {
      return !zt(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
function So(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function xr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function wo(e, r, t) {
  return r && xr(e.prototype, r), t && xr(e, t), e;
}
function Se(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var To = /* @__PURE__ */ function() {
  function e(r) {
    var t = this;
    So(this, e), Se(this, "hooks", kn({
      dropTarget: function(a, i) {
        t.clearDropTarget(), t.dropTargetOptions = i, $t(a) ? t.dropTargetRef = a : t.dropTargetNode = a, t.reconnect();
      }
    })), Se(this, "handlerId", null), Se(this, "dropTargetRef", null), Se(this, "dropTargetNode", void 0), Se(this, "dropTargetOptionsInternal", null), Se(this, "unsubscribeDropTarget", void 0), Se(this, "lastConnectedHandlerId", null), Se(this, "lastConnectedDropTarget", null), Se(this, "lastConnectedDropTargetOptions", null), Se(this, "backend", void 0), this.backend = r;
  }
  return wo(e, [{
    key: "connectTarget",
    get: function() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function() {
      var t = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      t && this.disconnectDropTarget();
      var n = this.dropTarget;
      if (this.handlerId) {
        if (!n) {
          this.lastConnectedDropTarget = n;
          return;
        }
        t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = n, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, n, this.dropTargetOptions));
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function(t) {
      t !== this.handlerId && (this.handlerId = t, this.reconnect());
    }
  }, {
    key: "dropTargetOptions",
    get: function() {
      return this.dropTargetOptionsInternal;
    },
    set: function(t) {
      this.dropTargetOptionsInternal = t;
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
      return !zt(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
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
function Co(e, r, t) {
  var n = t.getRegistry(), a = n.addTarget(e, r);
  return [a, function() {
    return n.removeTarget(a);
  }];
}
function Eo(e, r, t) {
  var n = t.getRegistry(), a = n.addSource(e, r);
  return [a, function() {
    return n.removeSource(a);
  }];
}
var Fe = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function ut(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ut = function(t) {
    return typeof t;
  } : ut = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ut(e);
}
function Oo(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Rr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Io(e, r, t) {
  return r && Rr(e.prototype, r), t && Rr(e, t), e;
}
function Ft(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var _o = /* @__PURE__ */ function() {
  function e(r, t, n) {
    Oo(this, e), Ft(this, "spec", void 0), Ft(this, "monitor", void 0), Ft(this, "connector", void 0), this.spec = r, this.monitor = t, this.connector = n;
  }
  return Io(e, [{
    key: "beginDrag",
    value: function() {
      var t, n = this.spec, a = this.monitor, i = null;
      return ut(n.item) === "object" ? i = n.item : typeof n.item == "function" ? i = n.item(a) : i = {}, (t = i) !== null && t !== void 0 ? t : null;
    }
  }, {
    key: "canDrag",
    value: function() {
      var t = this.spec, n = this.monitor;
      return typeof t.canDrag == "boolean" ? t.canDrag : typeof t.canDrag == "function" ? t.canDrag(n) : !0;
    }
  }, {
    key: "isDragging",
    value: function(t, n) {
      var a = this.spec, i = this.monitor, s = a.isDragging;
      return s ? s(i) : n === t.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
      var t = this.spec, n = this.monitor, a = this.connector, i = t.end;
      i && i(n.getItem(), n), a.reconnect();
    }
  }]), e;
}();
function No(e, r, t) {
  var n = m.useMemo(function() {
    return new _o(e, r, t);
  }, [r, t]);
  return m.useEffect(function() {
    n.spec = e;
  }, [e]), n;
}
function $e() {
  var e = m.useContext(Tn), r = e.dragDropManager;
  return U(r != null, "Expected drag drop context"), r;
}
function ko(e) {
  return m.useMemo(function() {
    var r = e.type;
    return U(r != null, "spec.type must be defined"), r;
  }, [e]);
}
function Ao(e, r) {
  return xo(e) || Po(e, r) || Lo(e, r) || Fo();
}
function Fo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lo(e, r) {
  if (e) {
    if (typeof e == "string")
      return Mr(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Mr(e, r);
  }
}
function Mr(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Po(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, s, l;
    try {
      for (t = t.call(e); !(a = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function xo(e) {
  if (Array.isArray(e))
    return e;
}
function Ro(e, r, t) {
  var n = $e(), a = No(e, r, t), i = ko(e);
  Fe(function() {
    if (i != null) {
      var l = Eo(i, a, n), u = Ao(l, 2), d = u[0], h = u[1];
      return r.receiveHandlerId(d), t.receiveHandlerId(d), h;
    }
  }, [n, r, t, a, i]);
}
function Mo(e) {
  return zo(e) || $o(e) || Bo(e) || Vo();
}
function Vo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bo(e, r) {
  if (e) {
    if (typeof e == "string")
      return Ut(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Ut(e, r);
  }
}
function $o(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function zo(e) {
  if (Array.isArray(e))
    return Ut(e);
}
function Ut(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function An(e, r) {
  var t = Mo(r || []);
  return r == null && typeof e != "function" && t.push(e), m.useMemo(function() {
    return typeof e == "function" ? e() : e;
  }, t);
}
function Uo() {
  var e = $e();
  return m.useMemo(function() {
    return new co(e);
  }, [e]);
}
function Ho(e, r) {
  var t = $e(), n = m.useMemo(function() {
    return new Do(t.getBackend());
  }, [t]);
  return Fe(function() {
    return n.dragSourceOptions = e || null, n.reconnect(), function() {
      return n.disconnectDragSource();
    };
  }, [n, e]), Fe(function() {
    return n.dragPreviewOptions = r || null, n.reconnect(), function() {
      return n.disconnectDragPreview();
    };
  }, [n, r]), n;
}
function jo(e, r) {
  return Qo(e) || Wo(e, r) || qo(e, r) || Go();
}
function Go() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qo(e, r) {
  if (e) {
    if (typeof e == "string")
      return Vr(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Vr(e, r);
  }
}
function Vr(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Wo(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, s, l;
    try {
      for (t = t.call(e); !(a = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function Qo(e) {
  if (Array.isArray(e))
    return e;
}
function Zo(e, r, t) {
  var n = m.useState(function() {
    return r(e);
  }), a = jo(n, 2), i = a[0], s = a[1], l = m.useCallback(function() {
    var u = r(e);
    ga(i, u) || (s(u), t && t());
  }, [i, e, t]);
  return Fe(l), [i, l];
}
function Ko(e, r) {
  return es(e) || Jo(e, r) || Xo(e, r) || Yo();
}
function Yo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xo(e, r) {
  if (e) {
    if (typeof e == "string")
      return Br(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Br(e, r);
  }
}
function Br(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Jo(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, s, l;
    try {
      for (t = t.call(e); !(a = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function es(e) {
  if (Array.isArray(e))
    return e;
}
function ts(e, r, t) {
  var n = Zo(e, r, t), a = Ko(n, 2), i = a[0], s = a[1];
  return Fe(function() {
    var u = e.getHandlerId();
    if (u != null)
      return e.subscribeToStateChange(s, {
        handlerIds: [u]
      });
  }, [e, s]), i;
}
function Fn(e, r, t) {
  return ts(r, e || function() {
    return {};
  }, function() {
    return t.reconnect();
  });
}
function rs(e) {
  return m.useMemo(function() {
    return e.hooks.dragSource();
  }, [e]);
}
function ns(e) {
  return m.useMemo(function() {
    return e.hooks.dragPreview();
  }, [e]);
}
function as(e, r) {
  var t = An(e, r);
  U(!t.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var n = Uo(), a = Ho(t.options, t.previewOptions);
  return Ro(t, n, a), [Fn(t.collect, n, a), rs(a), ns(a)];
}
function is(e) {
  var r = e.accept;
  return m.useMemo(function() {
    return U(e.accept != null, "accept must be defined"), Array.isArray(r) ? r : [r];
  }, [r]);
}
function os(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function $r(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ss(e, r, t) {
  return r && $r(e.prototype, r), t && $r(e, t), e;
}
function zr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var ls = /* @__PURE__ */ function() {
  function e(r, t) {
    os(this, e), zr(this, "spec", void 0), zr(this, "monitor", void 0), this.spec = r, this.monitor = t;
  }
  return ss(e, [{
    key: "canDrop",
    value: function() {
      var t = this.spec, n = this.monitor;
      return t.canDrop ? t.canDrop(n.getItem(), n) : !0;
    }
  }, {
    key: "hover",
    value: function() {
      var t = this.spec, n = this.monitor;
      t.hover && t.hover(n.getItem(), n);
    }
  }, {
    key: "drop",
    value: function() {
      var t = this.spec, n = this.monitor;
      if (t.drop)
        return t.drop(n.getItem(), n);
    }
  }]), e;
}();
function us(e, r) {
  var t = m.useMemo(function() {
    return new ls(e, r);
  }, [r]);
  return m.useEffect(function() {
    t.spec = e;
  }, [e]), t;
}
function cs(e, r) {
  return ps(e) || hs(e, r) || fs(e, r) || ds();
}
function ds() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fs(e, r) {
  if (e) {
    if (typeof e == "string")
      return Ur(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Ur(e, r);
  }
}
function Ur(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function hs(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, s, l;
    try {
      for (t = t.call(e); !(a = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function ps(e) {
  if (Array.isArray(e))
    return e;
}
function gs(e, r, t) {
  var n = $e(), a = us(e, r), i = is(e);
  Fe(function() {
    var l = Co(i, a, n), u = cs(l, 2), d = u[0], h = u[1];
    return r.receiveHandlerId(d), t.receiveHandlerId(d), h;
  }, [n, r, a, t, i.map(function(s) {
    return s.toString();
  }).join("|")]);
}
function ms() {
  var e = $e();
  return m.useMemo(function() {
    return new po(e);
  }, [e]);
}
function vs(e) {
  var r = $e(), t = m.useMemo(function() {
    return new To(r.getBackend());
  }, [r]);
  return Fe(function() {
    return t.dropTargetOptions = e || null, t.reconnect(), function() {
      return t.disconnectDropTarget();
    };
  }, [e]), t;
}
function ys(e) {
  return m.useMemo(function() {
    return e.hooks.dropTarget();
  }, [e]);
}
function bs(e, r) {
  var t = An(e, r), n = ms(), a = vs(t.options);
  return gs(t, n, a), [Fn(t.collect, n, a), ys(a)];
}
function Ln(e) {
  var r = null, t = function() {
    return r == null && (r = e()), r;
  };
  return t;
}
function Ds(e, r) {
  return e.filter(function(t) {
    return t !== r;
  });
}
function Ss(e, r) {
  var t = /* @__PURE__ */ new Set(), n = function(s) {
    return t.add(s);
  };
  e.forEach(n), r.forEach(n);
  var a = [];
  return t.forEach(function(i) {
    return a.push(i);
  }), a;
}
function ws(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Hr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ts(e, r, t) {
  return r && Hr(e.prototype, r), t && Hr(e, t), e;
}
function jr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Cs = /* @__PURE__ */ function() {
  function e(r) {
    ws(this, e), jr(this, "entered", []), jr(this, "isNodeInDocument", void 0), this.isNodeInDocument = r;
  }
  return Ts(e, [{
    key: "enter",
    value: function(t) {
      var n = this, a = this.entered.length, i = function(l) {
        return n.isNodeInDocument(l) && (!l.contains || l.contains(t));
      };
      return this.entered = Ss(this.entered.filter(i), [t]), a === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function(t) {
      var n = this.entered.length;
      return this.entered = Ds(this.entered.filter(this.isNodeInDocument), t), n > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = [];
    }
  }]), e;
}(), Es = Ln(function() {
  return /firefox/i.test(navigator.userAgent);
}), Pn = Ln(function() {
  return !!window.safari;
});
function Os(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Gr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Is(e, r, t) {
  return r && Gr(e.prototype, r), t && Gr(e, t), e;
}
function je(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var qr = /* @__PURE__ */ function() {
  function e(r, t) {
    Os(this, e), je(this, "xs", void 0), je(this, "ys", void 0), je(this, "c1s", void 0), je(this, "c2s", void 0), je(this, "c3s", void 0);
    for (var n = r.length, a = [], i = 0; i < n; i++)
      a.push(i);
    a.sort(function(C, _) {
      return r[C] < r[_] ? -1 : 1;
    });
    for (var s = [], l = [], u, d, h = 0; h < n - 1; h++)
      u = r[h + 1] - r[h], d = t[h + 1] - t[h], s.push(u), l.push(d / u);
    for (var c = [l[0]], D = 0; D < s.length - 1; D++) {
      var v = l[D], S = l[D + 1];
      if (v * S <= 0)
        c.push(0);
      else {
        u = s[D];
        var O = s[D + 1], p = u + O;
        c.push(3 * p / ((p + O) / v + (p + u) / S));
      }
    }
    c.push(l[l.length - 1]);
    for (var y = [], T = [], g, b = 0; b < c.length - 1; b++) {
      g = l[b];
      var E = c[b], I = 1 / s[b], F = E + c[b + 1] - g - g;
      y.push((g - E - F) * I), T.push(F * I * I);
    }
    this.xs = r, this.ys = t, this.c1s = c, this.c2s = y, this.c3s = T;
  }
  return Is(e, [{
    key: "interpolate",
    value: function(t) {
      var n = this.xs, a = this.ys, i = this.c1s, s = this.c2s, l = this.c3s, u = n.length - 1;
      if (t === n[u])
        return a[u];
      for (var d = 0, h = l.length - 1, c; d <= h; ) {
        c = Math.floor(0.5 * (d + h));
        var D = n[c];
        if (D < t)
          d = c + 1;
        else if (D > t)
          h = c - 1;
        else
          return a[c];
      }
      u = Math.max(0, h);
      var v = t - n[u], S = v * v;
      return a[u] + i[u] * v + s[u] * S + l[u] * v * S;
    }
  }]), e;
}(), _s = 1;
function xn(e) {
  var r = e.nodeType === _s ? e : e.parentElement;
  if (!r)
    return null;
  var t = r.getBoundingClientRect(), n = t.top, a = t.left;
  return {
    x: a,
    y: n
  };
}
function Je(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function Ns(e) {
  var r;
  return e.nodeName === "IMG" && (Es() || !((r = document.documentElement) !== null && r !== void 0 && r.contains(e)));
}
function ks(e, r, t, n) {
  var a = e ? r.width : t, i = e ? r.height : n;
  return Pn() && e && (i /= window.devicePixelRatio, a /= window.devicePixelRatio), {
    dragPreviewWidth: a,
    dragPreviewHeight: i
  };
}
function As(e, r, t, n, a) {
  var i = Ns(r), s = i ? e : r, l = xn(s), u = {
    x: t.x - l.x,
    y: t.y - l.y
  }, d = e.offsetWidth, h = e.offsetHeight, c = n.anchorX, D = n.anchorY, v = ks(i, r, d, h), S = v.dragPreviewWidth, O = v.dragPreviewHeight, p = function() {
    var F = new qr([0, 0.5, 1], [
      // Dock to the top
      u.y,
      // Align at the center
      u.y / h * O,
      // Dock to the bottom
      u.y + O - h
    ]), C = F.interpolate(D);
    return Pn() && i && (C += (window.devicePixelRatio - 1) * O), C;
  }, y = function() {
    var F = new qr([0, 0.5, 1], [
      // Dock to the left
      u.x,
      // Align at the center
      u.x / d * S,
      // Dock to the right
      u.x + S - d
    ]);
    return F.interpolate(c);
  }, T = a.offsetX, g = a.offsetY, b = T === 0 || T, E = g === 0 || g;
  return {
    x: b ? T : y(),
    y: E ? g : p()
  };
}
var Rn = "__NATIVE_FILE__", Mn = "__NATIVE_URL__", Vn = "__NATIVE_TEXT__", Bn = "__NATIVE_HTML__";
const Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: Rn,
  HTML: Bn,
  TEXT: Vn,
  URL: Mn
}, Symbol.toStringTag, { value: "Module" }));
function Lt(e, r, t) {
  var n = r.reduce(function(a, i) {
    return a || e.getData(i);
  }, "");
  return n ?? t;
}
var Me;
function et(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Ht = (Me = {}, et(Me, Rn, {
  exposeProperties: {
    files: function(r) {
      return Array.prototype.slice.call(r.files);
    },
    items: function(r) {
      return r.items;
    },
    dataTransfer: function(r) {
      return r;
    }
  },
  matchesTypes: ["Files"]
}), et(Me, Bn, {
  exposeProperties: {
    html: function(r, t) {
      return Lt(r, t, "");
    },
    dataTransfer: function(r) {
      return r;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), et(Me, Mn, {
  exposeProperties: {
    urls: function(r, t) {
      return Lt(r, t, "").split(`
`);
    },
    dataTransfer: function(r) {
      return r;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), et(Me, Vn, {
  exposeProperties: {
    text: function(r, t) {
      return Lt(r, t, "");
    },
    dataTransfer: function(r) {
      return r;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), Me);
function Fs(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Qr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ls(e, r, t) {
  return r && Qr(e.prototype, r), t && Qr(e, t), e;
}
function Zr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Ps = /* @__PURE__ */ function() {
  function e(r) {
    Fs(this, e), Zr(this, "item", void 0), Zr(this, "config", void 0), this.config = r, this.item = {}, this.initializeExposedProperties();
  }
  return Ls(e, [{
    key: "initializeExposedProperties",
    value: function() {
      var t = this;
      Object.keys(this.config.exposeProperties).forEach(function(n) {
        Object.defineProperty(t.item, n, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return console.warn(`Browser doesn't allow reading "`.concat(n, '" until the drop event.')), null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function(t) {
      var n = this;
      if (t) {
        var a = {};
        Object.keys(this.config.exposeProperties).forEach(function(i) {
          a[i] = {
            value: n.config.exposeProperties[i](t, n.config.matchesTypes),
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
    value: function(t, n) {
      return n === t.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
    }
  }]), e;
}();
function xs(e, r) {
  var t = new Ps(Ht[e]);
  return t.loadDataTransfer(r), t;
}
function Pt(e) {
  if (!e)
    return null;
  var r = Array.prototype.slice.call(e.types || []);
  return Object.keys(Ht).filter(function(t) {
    var n = Ht[t].matchesTypes;
    return n.some(function(a) {
      return r.indexOf(a) > -1;
    });
  })[0] || null;
}
function Rs(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Kr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ms(e, r, t) {
  return r && Kr(e.prototype, r), t && Kr(e, t), e;
}
function xt(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Vs = /* @__PURE__ */ function() {
  function e(r, t) {
    Rs(this, e), xt(this, "ownerDocument", null), xt(this, "globalContext", void 0), xt(this, "optionsArgs", void 0), this.globalContext = r, this.optionsArgs = t;
  }
  return Ms(e, [{
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
      var t;
      return (t = this.globalContext) !== null && t !== void 0 && t.document ? this.globalContext.document : this.window ? this.window.document : void 0;
    }
  }, {
    key: "rootElement",
    get: function() {
      var t;
      return ((t = this.optionsArgs) === null || t === void 0 ? void 0 : t.rootElement) || this.window;
    }
  }]), e;
}();
function Yr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Xr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Yr(Object(t), !0).forEach(function(n) {
      j(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Yr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Bs(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Jr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function $s(e, r, t) {
  return r && Jr(e.prototype, r), t && Jr(e, t), e;
}
function j(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var zs = /* @__PURE__ */ function() {
  function e(r, t, n) {
    var a = this;
    Bs(this, e), j(this, "options", void 0), j(this, "actions", void 0), j(this, "monitor", void 0), j(this, "registry", void 0), j(this, "enterLeaveCounter", void 0), j(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), j(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), j(this, "sourceNodes", /* @__PURE__ */ new Map()), j(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), j(this, "dragStartSourceIds", null), j(this, "dropTargetIds", []), j(this, "dragEnterTargetIds", []), j(this, "currentNativeSource", null), j(this, "currentNativeHandle", null), j(this, "currentDragSourceNode", null), j(this, "altKeyPressed", !1), j(this, "mouseMoveTimeoutTimer", null), j(this, "asyncEndDragFrameId", null), j(this, "dragOverTargetIds", null), j(this, "lastClientOffset", null), j(this, "hoverRafId", null), j(this, "getSourceClientOffset", function(i) {
      var s = a.sourceNodes.get(i);
      return s && xn(s) || null;
    }), j(this, "endDragNativeItem", function() {
      a.isDraggingNativeItem() && (a.actions.endDrag(), a.currentNativeHandle && a.registry.removeSource(a.currentNativeHandle), a.currentNativeHandle = null, a.currentNativeSource = null);
    }), j(this, "isNodeInDocument", function(i) {
      return !!(i && a.document && a.document.body && a.document.body.contains(i));
    }), j(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var i = a.currentDragSourceNode;
      i == null || a.isNodeInDocument(i) || a.clearCurrentDragSourceNode() && a.monitor.isDragging() && a.actions.endDrag();
    }), j(this, "handleTopDragStartCapture", function() {
      a.clearCurrentDragSourceNode(), a.dragStartSourceIds = [];
    }), j(this, "handleTopDragStart", function(i) {
      if (!i.defaultPrevented) {
        var s = a.dragStartSourceIds;
        a.dragStartSourceIds = null;
        var l = Je(i);
        a.monitor.isDragging() && a.actions.endDrag(), a.actions.beginDrag(s || [], {
          publishSource: !1,
          getSourceClientOffset: a.getSourceClientOffset,
          clientOffset: l
        });
        var u = i.dataTransfer, d = Pt(u);
        if (a.monitor.isDragging()) {
          if (u && typeof u.setDragImage == "function") {
            var h = a.monitor.getSourceId(), c = a.sourceNodes.get(h), D = a.sourcePreviewNodes.get(h) || c;
            if (D) {
              var v = a.getCurrentSourcePreviewNodeOptions(), S = v.anchorX, O = v.anchorY, p = v.offsetX, y = v.offsetY, T = {
                anchorX: S,
                anchorY: O
              }, g = {
                offsetX: p,
                offsetY: y
              }, b = As(c, D, l, T, g);
              u.setDragImage(D, b.x, b.y);
            }
          }
          try {
            u == null || u.setData("application/json", {});
          } catch {
          }
          a.setCurrentDragSourceNode(i.target);
          var E = a.getCurrentSourcePreviewNodeOptions(), I = E.captureDraggingState;
          I ? a.actions.publishDragSource() : setTimeout(function() {
            return a.actions.publishDragSource();
          }, 0);
        } else if (d)
          a.beginDragNativeItem(d);
        else {
          if (u && !u.types && (i.target && !i.target.hasAttribute || !i.target.hasAttribute("draggable")))
            return;
          i.preventDefault();
        }
      }
    }), j(this, "handleTopDragEndCapture", function() {
      a.clearCurrentDragSourceNode() && a.monitor.isDragging() && a.actions.endDrag();
    }), j(this, "handleTopDragEnterCapture", function(i) {
      a.dragEnterTargetIds = [];
      var s = a.enterLeaveCounter.enter(i.target);
      if (!(!s || a.monitor.isDragging())) {
        var l = i.dataTransfer, u = Pt(l);
        u && a.beginDragNativeItem(u, l);
      }
    }), j(this, "handleTopDragEnter", function(i) {
      var s = a.dragEnterTargetIds;
      if (a.dragEnterTargetIds = [], !!a.monitor.isDragging()) {
        a.altKeyPressed = i.altKey, s.length > 0 && a.actions.hover(s, {
          clientOffset: Je(i)
        });
        var l = s.some(function(u) {
          return a.monitor.canDropOnTarget(u);
        });
        l && (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = a.getCurrentDropEffect()));
      }
    }), j(this, "handleTopDragOverCapture", function() {
      a.dragOverTargetIds = [];
    }), j(this, "handleTopDragOver", function(i) {
      var s = a.dragOverTargetIds;
      if (a.dragOverTargetIds = [], !a.monitor.isDragging()) {
        i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none");
        return;
      }
      a.altKeyPressed = i.altKey, a.lastClientOffset = Je(i), a.hoverRafId === null && typeof requestAnimationFrame < "u" && (a.hoverRafId = requestAnimationFrame(function() {
        a.monitor.isDragging() && a.actions.hover(s || [], {
          clientOffset: a.lastClientOffset
        }), a.hoverRafId = null;
      }));
      var l = (s || []).some(function(u) {
        return a.monitor.canDropOnTarget(u);
      });
      l ? (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = a.getCurrentDropEffect())) : a.isDraggingNativeItem() ? i.preventDefault() : (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none"));
    }), j(this, "handleTopDragLeaveCapture", function(i) {
      a.isDraggingNativeItem() && i.preventDefault();
      var s = a.enterLeaveCounter.leave(i.target);
      s && a.isDraggingNativeItem() && setTimeout(function() {
        return a.endDragNativeItem();
      }, 0);
    }), j(this, "handleTopDropCapture", function(i) {
      if (a.dropTargetIds = [], a.isDraggingNativeItem()) {
        var s;
        i.preventDefault(), (s = a.currentNativeSource) === null || s === void 0 || s.loadDataTransfer(i.dataTransfer);
      } else
        Pt(i.dataTransfer) && i.preventDefault();
      a.enterLeaveCounter.reset();
    }), j(this, "handleTopDrop", function(i) {
      var s = a.dropTargetIds;
      a.dropTargetIds = [], a.actions.hover(s, {
        clientOffset: Je(i)
      }), a.actions.drop({
        dropEffect: a.getCurrentDropEffect()
      }), a.isDraggingNativeItem() ? a.endDragNativeItem() : a.monitor.isDragging() && a.actions.endDrag();
    }), j(this, "handleSelectStart", function(i) {
      var s = i.target;
      typeof s.dragDrop == "function" && (s.tagName === "INPUT" || s.tagName === "SELECT" || s.tagName === "TEXTAREA" || s.isContentEditable || (i.preventDefault(), s.dragDrop()));
    }), this.options = new Vs(t, n), this.actions = r.getActions(), this.monitor = r.getMonitor(), this.registry = r.getRegistry(), this.enterLeaveCounter = new Cs(this.isNodeInDocument);
  }
  return $s(e, [{
    key: "profile",
    value: function() {
      var t, n;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((t = this.dragStartSourceIds) === null || t === void 0 ? void 0 : t.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((n = this.dragOverTargetIds) === null || n === void 0 ? void 0 : n.length) || 0
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
      var t = this.rootElement;
      if (t !== void 0) {
        if (t.__isReactDndBackendSetUp)
          throw new Error("Cannot have two HTML5 backends at the same time.");
        t.__isReactDndBackendSetUp = !0, this.addEventListeners(t);
      }
    }
  }, {
    key: "teardown",
    value: function() {
      var t = this.rootElement;
      if (t !== void 0 && (t.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
        var n;
        (n = this.window) === null || n === void 0 || n.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function(t, n, a) {
      var i = this;
      return this.sourcePreviewNodeOptions.set(t, a), this.sourcePreviewNodes.set(t, n), function() {
        i.sourcePreviewNodes.delete(t), i.sourcePreviewNodeOptions.delete(t);
      };
    }
  }, {
    key: "connectDragSource",
    value: function(t, n, a) {
      var i = this;
      this.sourceNodes.set(t, n), this.sourceNodeOptions.set(t, a);
      var s = function(d) {
        return i.handleDragStart(d, t);
      }, l = function(d) {
        return i.handleSelectStart(d);
      };
      return n.setAttribute("draggable", "true"), n.addEventListener("dragstart", s), n.addEventListener("selectstart", l), function() {
        i.sourceNodes.delete(t), i.sourceNodeOptions.delete(t), n.removeEventListener("dragstart", s), n.removeEventListener("selectstart", l), n.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function(t, n) {
      var a = this, i = function(d) {
        return a.handleDragEnter(d, t);
      }, s = function(d) {
        return a.handleDragOver(d, t);
      }, l = function(d) {
        return a.handleDrop(d, t);
      };
      return n.addEventListener("dragenter", i), n.addEventListener("dragover", s), n.addEventListener("drop", l), function() {
        n.removeEventListener("dragenter", i), n.removeEventListener("dragover", s), n.removeEventListener("drop", l);
      };
    }
  }, {
    key: "addEventListeners",
    value: function(t) {
      t.addEventListener && (t.addEventListener("dragstart", this.handleTopDragStart), t.addEventListener("dragstart", this.handleTopDragStartCapture, !0), t.addEventListener("dragend", this.handleTopDragEndCapture, !0), t.addEventListener("dragenter", this.handleTopDragEnter), t.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), t.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), t.addEventListener("dragover", this.handleTopDragOver), t.addEventListener("dragover", this.handleTopDragOverCapture, !0), t.addEventListener("drop", this.handleTopDrop), t.addEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "removeEventListeners",
    value: function(t) {
      t.removeEventListener && (t.removeEventListener("dragstart", this.handleTopDragStart), t.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), t.removeEventListener("dragend", this.handleTopDragEndCapture, !0), t.removeEventListener("dragenter", this.handleTopDragEnter), t.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), t.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), t.removeEventListener("dragover", this.handleTopDragOver), t.removeEventListener("dragover", this.handleTopDragOverCapture, !0), t.removeEventListener("drop", this.handleTopDrop), t.removeEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function() {
      var t = this.monitor.getSourceId(), n = this.sourceNodeOptions.get(t);
      return Xr({
        dropEffect: this.altKeyPressed ? "copy" : "move"
      }, n || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function() {
      return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function() {
      var t = this.monitor.getSourceId(), n = this.sourcePreviewNodeOptions.get(t);
      return Xr({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: !1
      }, n || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var t = this.monitor.getItemType();
      return Object.keys(Wr).some(function(n) {
        return Wr[n] === t;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function(t, n) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = xs(t, n), this.currentNativeHandle = this.registry.addSource(t, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function(t) {
      var n = this;
      this.clearCurrentDragSourceNode(), this.currentDragSourceNode = t;
      var a = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var i;
        return (i = n.rootElement) === null || i === void 0 ? void 0 : i.addEventListener("mousemove", n.endDragIfSourceWasRemovedFromDOM, !0);
      }, a);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function() {
      if (this.currentDragSourceNode) {
        if (this.currentDragSourceNode = null, this.rootElement) {
          var t;
          (t = this.window) === null || t === void 0 || t.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
        }
        return this.mouseMoveTimeoutTimer = null, !0;
      }
      return !1;
    }
  }, {
    key: "handleDragStart",
    value: function(t, n) {
      t.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(n));
    }
  }, {
    key: "handleDragEnter",
    value: function(t, n) {
      this.dragEnterTargetIds.unshift(n);
    }
  }, {
    key: "handleDragOver",
    value: function(t, n) {
      this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(n);
    }
  }, {
    key: "handleDrop",
    value: function(t, n) {
      this.dropTargetIds.unshift(n);
    }
  }]), e;
}(), Us = function(r, t, n) {
  return new zs(r, t, n);
};
const $n = m.createContext({}), Te = () => m.useContext($n), Hs = ({ children: e }) => {
  var s, l, u;
  const [r, t] = m.useState({}), n = (d, h = !1) => {
    let c = { object: d, show: !0, disableBgClose: h };
    t((D) => ({ ...D, overlay: { ...c } }));
  }, a = (d = !1) => {
    t((h) => ({
      ...h,
      overlay: {
        ...h.overlay,
        show: d
      }
    }));
  }, i = {
    overlay: {
      object: ((s = r.overlay) == null ? void 0 : s.object) || null,
      show: ((l = r.overlay) == null ? void 0 : l.show) || !1,
      disableBgClose: ((u = r.overlay) == null ? void 0 : u.disableBgClose) || !1,
      actions: {
        openOverlay: n,
        toggleOverlay: a
      }
    }
  };
  return /* @__PURE__ */ o($n.Provider, { value: i, children: e });
}, js = "Dashboard Description", ft = {
  data: {},
  loading: !1,
  filteredData: {},
  preview: !1,
  tabSelected: js
}, Gs = {
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
  ...ft
}, se = m.createContext(Gs), ce = m.createContext(() => {
});
const qs = ({ disableBgClose: e, children: r, override: t = null }) => {
  let { overlay: n } = Te();
  const [a, i] = m.useState(!1), [s, l] = m.useState(null), [u, d] = m.useState(!1), h = t ? t == null ? void 0 : t.show : n == null ? void 0 : n.show;
  return m.useEffect(() => {
    if (h === void 0 || h === !1)
      return;
    document.body.style.overflow = "hidden", i(!0), l("animate-in");
    const c = setTimeout(() => {
      l("show");
    }, 750);
    return () => clearTimeout(c);
  }, [h]), m.useEffect(() => {
    if (h === void 0 || h === !0)
      return;
    l("animate-out");
    const c = setTimeout(() => {
      l(null), i(!1), document.body.style.overflow = null;
    }, 400);
    return () => clearTimeout(c);
  }, [h]), m.useEffect(() => {
    if (u === !1)
      return;
    const c = setTimeout(() => {
      d(!1);
    }, 400);
    return () => clearTimeout(c);
  }, [u]), /* @__PURE__ */ o(G, { children: a && /* @__PURE__ */ f("div", { className: `cove-overlay${s ? " " + s : ""}${u ? " overlay-error" : ""}`, children: [
    /* @__PURE__ */ o("div", { className: "cove-overlay__bg", style: { cursor: e ? "default" : null }, onClick: (c) => e ? d(!0) : n ? n.actions.toggleOverlay(!1) : t ? t.actions.toggleOverlay(!1) : c.preventDefault(), role: "alert" }),
    /* @__PURE__ */ o("div", { className: "cove-overlay__wrapper", children: /* @__PURE__ */ o("div", { className: "cove-overlay__container", children: r }) })
  ] }) });
}, Ws = () => {
  const { overlay: e } = Te();
  return /* @__PURE__ */ o(qs, { disableBgClose: e.disableBgClose, children: e.object });
}, zn = m.createContext({}), tt = {
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
}, Qs = [
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
], Zs = m.memo((e) => {
  const { config: r, updateConfig: t, loading: n, stateData: a, setParentConfig: i, isDashboard: s } = m.useContext(zn), [l, u] = m.useState(!0), [d, h] = m.useState(!1), c = Qt(r, t, !0), D = (I) => {
    let F = [...r.filters];
    F.splice(I, 1), t({ ...r, filters: F });
  }, v = (I, F, C) => {
    let _ = [...r.filters];
    _[F][I] = C, t({ ...r, filters: _ });
  }, S = () => {
    let I = r.filters ? [...r.filters] : [];
    I.push({ values: [] }), t({ ...r, filters: I });
  }, O = (I = !0) => {
    let F = {};
    return a.length && a.map((C) => Object.keys(C).forEach((_) => F[_] = !0)), Object.keys(F);
  }, p = (I) => {
    let F = [];
    const C = r.filters[I].columnName;
    return a && C && (a.forEach(function(_) {
      _[C] !== void 0 && F.indexOf(_[C]) === -1 && F.push(_[C]);
    }), F.sort()), F;
  };
  m.useEffect(() => {
    if (i) {
      const I = b();
      i(I);
    }
  }, [r]), m.useEffect(() => {
    if (!d) {
      let I = { ...r };
      delete I.newViz, t(I);
    }
  }, []);
  const y = () => {
    u(!l), t({
      ...r,
      showEditorPanel: !l
    });
  }, T = () => /* @__PURE__ */ o("section", { className: "waiting", children: /* @__PURE__ */ f("section", { className: "waiting-container", children: [
    /* @__PURE__ */ o("h3", { children: "Error With Configuration" }),
    /* @__PURE__ */ o("p", { children: r.runtime.editorErrorMessage })
  ] }) }), g = () => /* @__PURE__ */ o("section", { className: "waiting", children: /* @__PURE__ */ f("section", { className: "waiting-container", children: [
    /* @__PURE__ */ o("h3", { children: "Finish Configuring" }),
    /* @__PURE__ */ o("p", { children: "Set all required options to the left and confirm below to display a preview of the markup." }),
    /* @__PURE__ */ o("button", { className: "btn btn-primary", style: { margin: "1em auto" }, onClick: (F) => {
      F.preventDefault();
      let C = { ...r };
      delete C.newViz, t(C);
    }, children: "I'm Done" })
  ] }) }), b = () => {
    let I = x.cloneDeep(r);
    return delete I.newViz, delete I.runtime, I;
  }, E = /* @__PURE__ */ f(Xe, { children: [
    /* @__PURE__ */ o(Xe.Section, { title: "General", children: /* @__PURE__ */ o(
      ya,
      {
        value: r.title,
        fieldName: "title",
        label: "Title",
        placeholder: "Filterable Text Title",
        updateField: c
      }
    ) }),
    /* @__PURE__ */ f(Xe.Section, { title: "Data", children: [
      /* @__PURE__ */ o("div", { className: "cove-accordion__panel-section", children: /* @__PURE__ */ o("div", { className: "cove-input-group", children: /* @__PURE__ */ o(
        Ie,
        {
          value: r.textColumn || "",
          fieldName: "textColumn",
          label: "Text Column",
          updateField: c,
          initial: "Select",
          options: O()
        }
      ) }) }),
      /* @__PURE__ */ o("hr", { className: "cove-accordion__divider" }),
      /* @__PURE__ */ f("label", { style: { marginBottom: "1rem" }, children: [
        /* @__PURE__ */ o("span", { className: "edit-label", children: "Data Point Filters" }),
        /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
          /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
          /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").' }) })
        ] })
      ] }),
      r.filters && /* @__PURE__ */ o("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" }, children: r.filters.map((I, F) => /* @__PURE__ */ f("fieldset", { className: "edit-block", children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: "remove-column",
            onClick: () => {
              D(F);
            },
            children: "Remove"
          }
        ),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Column" }),
          /* @__PURE__ */ f(
            "select",
            {
              value: I.columnName,
              onChange: (C) => {
                v("columnName", F, C.target.value);
              },
              children: [
                /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                O().map((C, _) => /* @__PURE__ */ o("option", { value: C, children: C }, _))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Column Value" }),
          /* @__PURE__ */ f(
            "select",
            {
              value: I.columnValue,
              onChange: (C) => {
                v("columnValue", F, C.target.value);
              },
              children: [
                /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                p(F).map((C, _) => /* @__PURE__ */ o("option", { value: C, children: C }, _))
              ]
            }
          )
        ] })
      ] }, F)) }),
      /* @__PURE__ */ o(ba, { onClick: S, fluid: !0, children: "Add Filter" })
    ] }),
    /* @__PURE__ */ f(Xe.Section, { title: "Visual", children: [
      /* @__PURE__ */ o(
        Ie,
        {
          value: r.fontSize,
          fieldName: "fontSize",
          label: "Font Size",
          updateField: c,
          options: ["small", "medium", "large"]
        }
      ),
      /* @__PURE__ */ o("br", {}),
      /* @__PURE__ */ f("label", { children: [
        /* @__PURE__ */ o("span", { className: "edit-label", children: "Theme" }),
        /* @__PURE__ */ o("ul", { className: "color-palette", children: Qs.map((I) => /* @__PURE__ */ o(
          "li",
          {
            title: I,
            onClick: () => {
              t({ ...r, theme: I });
            },
            className: r.theme === I ? "selected " + I : I
          },
          I
        )) })
      ] }),
      /* @__PURE__ */ f("div", { className: "cove-accordion__panel-section checkbox-group", children: [
        /* @__PURE__ */ o(
          ze,
          {
            inline: !0,
            size: "small",
            value: r.visual.border,
            section: "visual",
            fieldName: "border",
            label: "Display Border",
            updateField: c
          }
        ),
        /* @__PURE__ */ o(
          ze,
          {
            inline: !0,
            size: "small",
            value: r.visual.borderColorTheme,
            section: "visual",
            fieldName: "borderColorTheme",
            label: "Use theme border color",
            updateField: c
          }
        ),
        /* @__PURE__ */ o(
          ze,
          {
            size: "small",
            value: r.visual.accent,
            section: "visual",
            fieldName: "accent",
            label: "Use Accent Style",
            updateField: c
          }
        ),
        /* @__PURE__ */ o(
          ze,
          {
            size: "small",
            value: r.visual.background,
            section: "visual",
            fieldName: "background",
            label: "Use Theme Background Color",
            updateField: c
          }
        ),
        /* @__PURE__ */ o(
          ze,
          {
            size: "small",
            value: r.visual.hideBackgroundColor,
            section: "visual",
            fieldName: "hideBackgroundColor",
            label: "Hide Background Color",
            updateField: c
          }
        )
      ] })
    ] })
  ] });
  return n ? null : /* @__PURE__ */ o(cn, { component: "EditorPanel", children: /* @__PURE__ */ f(
    ke.Sidebar,
    {
      displayPanel: l,
      isDashboard: s,
      title: "Configure Filtered Text",
      onBackClick: y,
      children: [
        !r.newViz && r.runtime && r.runtime.editorErrorMessage && /* @__PURE__ */ o(T, {}),
        r.newViz && d && /* @__PURE__ */ o(g, {}),
        E
      ]
    }
  ) });
});
const Un = ({ config: e, configUrl: r, isDashboard: t = !1, isEditor: n = !1, setConfig: a }) => {
  const i = new Pe(), [s, l] = m.useState(tt), [u, d] = m.useState(!0), [h, c] = m.useState(s.data || []), [D, v] = m.useState();
  let { title: S, filters: O } = s;
  const p = s.fontSize === "small" ? "16px" : s.fontSize === "medium" ? "22px" : "27px", { contentClasses: y, innerContainerClasses: T } = Da(s), g = async () => {
    let C = e || await (await fetch(r)).json(), _ = C.formattedData || C.data || {};
    C.dataUrl && (_ = await (await fetch(C.dataUrl)).json(), C.dataDescription && (_ = i.autoStandardize(_), _ = i.developerStandardize(_, C.dataDescription))), _ && (c(_), v(_));
    let L = { ...s, ...C };
    const B = { ...yn(L) };
    b(B), d(!1);
  }, b = (C) => {
    Object.keys(tt).forEach((_) => {
      C[_] && typeof C[_] == "object" && !Array.isArray(C[_]) && (C[_] = { ...tt[_], ...C[_] });
    }), C.runtime = {}, C.runtime.uniqueId = Date.now(), C.runtime.editorErrorMessage = "", l(C);
  }, E = () => {
    let C = [];
    if (O.length)
      O.map((_) => _.columnName && _.columnValue ? C = h.filter(function(L) {
        return L[_.columnName] === _.columnValue;
      }) : null);
    else
      return C = h.filter((_, L) => _[s.textColumn] && L === 0);
    return C;
  };
  m.useEffect(() => {
    g().catch((C) => console.log(C));
  }, []), m.useEffect(() => {
    e && !e.dataUrl && (b({ ...tt, ...e }), c(e.data), v(e.data));
  }, [e == null ? void 0 : e.data]);
  let I = /* @__PURE__ */ o(mt, {});
  if (u === !1) {
    let C = /* @__PURE__ */ o(G, { children: /* @__PURE__ */ o(ke.Responsive, { isEditor: n, children: /* @__PURE__ */ f("div", { className: "cove-component__content no-borders", children: [
      /* @__PURE__ */ o(vn, { classes: [`${s.theme}`], title: S, style: { fontSize: p } }),
      /* @__PURE__ */ o("div", { className: `${y.join(" ")} body`, children: E().slice(0, 1).map((_, L) => /* @__PURE__ */ f("p", { style: { fontSize: p }, children: [
        " ",
        un(_[s.textColumn] || ""),
        " "
      ] }, L)) })
    ] }) }) });
    I = /* @__PURE__ */ f(G, { children: [
      n && /* @__PURE__ */ o(Zs, {}),
      C
    ] });
  }
  const F = {
    config: s,
    updateConfig: b,
    loading: u,
    setParentConfig: a,
    isDashboard: t,
    stateData: h,
    unfilteredData: h
  };
  return /* @__PURE__ */ o(cn, { component: "CdcFilteredText", children: /* @__PURE__ */ o(zn.Provider, { value: F, children: /* @__PURE__ */ o(ke.VisualizationWrapper, { config: s, isEditor: n, showEditorPanel: s == null ? void 0 : s.showEditorPanel, children: I }) }) });
}, _e = {
  "data-bite": /* @__PURE__ */ o(R, { display: "databite", base: !0 }),
  Bar: /* @__PURE__ */ o(R, { display: "chartBar", base: !0 }),
  "Spark Line": /* @__PURE__ */ o(R, { display: "chartLine" }),
  "Bump Chart": /* @__PURE__ */ o(R, { display: "chartLine" }),
  "waffle-chart": /* @__PURE__ */ o(R, { display: "grid", base: !0 }),
  "markup-include": /* @__PURE__ */ o(R, { display: "code", base: !0 }),
  Line: /* @__PURE__ */ o(R, { display: "chartLine", base: !0 }),
  Pie: /* @__PURE__ */ o(R, { display: "chartPie", base: !0 }),
  us: /* @__PURE__ */ o(R, { display: "mapUsa", base: !0 }),
  "us-county": /* @__PURE__ */ o(R, { display: "mapUsa", base: !0 }),
  world: /* @__PURE__ */ o(R, { display: "mapWorld", base: !0 }),
  "single-state": /* @__PURE__ */ o(R, { display: "mapAl", base: !0 }),
  gear: /* @__PURE__ */ o(R, { display: "gear", base: !0 }),
  gearMulti: /* @__PURE__ */ o(R, { display: "gearMulti", base: !0 }),
  tools: /* @__PURE__ */ o(R, { display: "tools", base: !0 }),
  "filtered-text": /* @__PURE__ */ o(R, { display: "filtered-text", base: !0 }),
  dashboardFilters: /* @__PURE__ */ o(R, { display: "dashboardFilters", base: !0 }),
  table: /* @__PURE__ */ o(R, { display: "table", base: !0 }),
  Sankey: /* @__PURE__ */ o(R, { display: "sankey", base: !0 })
}, Ks = (e) => {
  const { type: r, visualizationType: t, general: n } = e;
  return t ? _e[t] : n != null && n.geoType ? n.geoType === "single-state" ? _e.us : _e[n.geoType] : _e[r];
};
const Hn = () => null, jn = (e) => e, Gn = () => null, ve = ({ fontTheme: e = "dark", headerBgColor: r = "#fff", showDividerTop: t = !0, showDividerBottom: n = !0, showClose: a = !0, children: i, override: s = null }) => {
  let { overlay: l } = Te();
  const u = m.Children.toArray(i), d = u.find((v) => (v == null ? void 0 : v.type) === Hn), h = u.find((v) => (v == null ? void 0 : v.type) === jn), c = u.find((v) => (v == null ? void 0 : v.type) === Gn), D = (v) => v ? null : "none";
  return /* @__PURE__ */ f("div", { className: `cove-modal cove-modal__theme--${e}`, children: [
    (a || d) && /* @__PURE__ */ f(
      "div",
      {
        className: "cove-modal__header",
        style: {
          backgroundColor: r,
          boxShadow: D(d && t),
          padding: d ? null : "0",
          minHeight: d ? null : "unset"
        },
        children: [
          d && d.props.children,
          a && /* @__PURE__ */ o(
            "button",
            {
              className: "cove-modal--close",
              onClick: (v) => {
                if (s)
                  return s.actions.toggleOverlay(!1);
                if (l)
                  return l == null ? void 0 : l.actions.toggleOverlay(!1);
                v.preventDefault();
              },
              children: /* @__PURE__ */ o(R, { display: "close" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ o("div", { className: "cove-modal__content", children: h && h.props.children }),
    c && /* @__PURE__ */ o(
      "div",
      {
        className: "cove-modal__footer",
        style: {
          boxShadow: D(n),
          paddingTop: n ? "1rem" : null
        },
        children: c.props.children
      }
    )
  ] });
};
ve.Header = Hn;
ve.Content = jn;
ve.Footer = Gn;
ve.propTypes = {
  fontTheme: Ue.oneOf(["dark", "light"]),
  headerBgColor: Ue.string,
  showDividerTop: Ue.bool,
  showDividerBottom: Ue.bool,
  showClose: Ue.bool
};
const qn = ({ vizKey: e, rowIndex: r }) => {
  var _;
  const { config: t } = m.useContext(se), { overlay: n } = Te(), a = new Pe(), i = m.useContext(ce), [s, l] = m.useState(!1), [u, d] = m.useState(!e), [h, c] = m.useState(!!t.rows[r].multiVizColumn), [D, v] = m.useState(""), [S, O] = m.useState(!1), p = m.useMemo(() => !!e && !u, [e, u]), y = m.useMemo(() => p ? t.visualizations[e] : t.rows[r], [t.visualizations, t.rows, r, p]), T = async (L) => {
    const { data: B, dataUrl: K } = t.datasets[L];
    if (!K)
      return B;
    let A = B;
    const q = K && !B, ee = L !== y.dataKey;
    if (v(""), ee || q) {
      O(!0);
      try {
        A = await We(K), A = a.autoStandardize(A);
      } catch {
        v("There was an issue loading the data source. Please check the datasource URL and try again.");
      }
      O(!1);
    }
    return A;
  }, g = (L) => {
    i(p ? { type: "UPDATE_VISUALIZATION", payload: { vizKey: e, configureData: L } } : { type: "UPDATE_ROW", payload: { rowIndex: r, rowData: L } });
  }, b = () => {
    t.rows[r].columns.map((B) => B.widget).filter(Boolean).forEach((B) => {
      i({ type: "RESET_VISUALIZATION", payload: { vizKey: B } });
    });
  }, E = async ({ target: { value: L } }) => {
    p || b();
    const B = L === "" ? {} : await T(L);
    g({
      dataDescription: {
        horizontal: !1
      },
      formattedData: void 0,
      dataKey: L,
      data: B
    });
  }, I = async (L, B) => {
    const K = y.dataKey, A = y.data || await T(K), q = { ...y.dataDescription, [L]: B }, ee = {
      data: A,
      dataDescription: q,
      formattedData: a.developerStandardize(A, q)
    };
    g(ee), l(!0);
  }, F = (L) => {
    L !== "" && (i({ type: "UPDATE_ROW", payload: { rowIndex: r, rowData: { multiVizColumn: L } } }), l(!0));
  }, C = (L) => {
    i({ type: "UPDATE_ROW", payload: { rowIndex: r, rowData: { expandCollapseAllButtons: L } } }), l(!0);
  };
  return /* @__PURE__ */ o(ve, { children: /* @__PURE__ */ f(ve.Content, { children: [
    S && /* @__PURE__ */ o(Rt, { fullScreen: !0 }),
    /* @__PURE__ */ f("div", { className: "dataset-selector-container", children: [
      "Select a dataset: ",
      /* @__PURE__ */ f("select", { className: "dataset-selector", value: y.dataKey || "", onChange: E, children: [
        /* @__PURE__ */ o("option", { value: "", children: "Select a dataset" }),
        t.datasets && Object.keys(t.datasets).map((L) => /* @__PURE__ */ o("option", { children: L }, L))
      ] }),
      e && // only shows for visualizations
      /* @__PURE__ */ o(
        rt,
        {
          label: "Apply To Row",
          value: u,
          updateField: (L, B, K, A) => {
            d(A), E({ target: { value: y.dataKey } });
          }
        }
      )
    ] }),
    D && /* @__PURE__ */ o("p", { className: "text-danger", children: D }),
    y.dataKey && /* @__PURE__ */ o(
      Ta,
      {
        configureData: y,
        visualizationKey: e,
        updateDescriptionProp: I
      }
    ),
    u && y.dataKey ? h ? /* @__PURE__ */ f(G, { children: [
      /* @__PURE__ */ o(
        Ie,
        {
          options: Object.keys(((_ = t.datasets[y.dataKey]) == null ? void 0 : _.data[0]) || {}),
          value: t.rows[r].multiVizColumn,
          label: "Multi-Visualization Column",
          initial: "--Select--",
          updateField: (L, B, K, A) => F(A),
          required: !0
        }
      ),
      /* @__PURE__ */ o(
        rt,
        {
          value: t.rows[r].expandCollapseAllButtons,
          label: " Add Expand/Collapse All buttons",
          fieldName: "",
          updateField: (L, B, K, A) => C(A)
        }
      )
    ] }) : /* @__PURE__ */ o(
      rt,
      {
        label: "Configure Multiple Visualizations",
        value: h,
        tooltip: /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
          /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
          /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "You can select a column where for each unique value in the column the configuration for the row will be repeated in to the data preview." }) })
        ] }),
        updateField: (L, B, K, A) => {
          s && A === !0 && l(!1), c(A);
        }
      }
    ) : /* @__PURE__ */ o(G, {}),
    s && /* @__PURE__ */ o(
      "button",
      {
        style: { margin: "1em", display: "block" },
        className: "cove-button",
        onClick: () => n == null ? void 0 : n.actions.toggleOverlay(),
        children: "Continue"
      }
    )
  ] }) });
}, ht = {
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
  table: "Table",
  "data-table": "Data Table",
  chart: "Chart",
  map: "Map"
};
const oe = ({
  title: e,
  columnData: r,
  widgetConfig: t,
  addVisualization: n,
  type: a,
  widgetInRow: i = !1,
  toggleRow: s = !1
}) => {
  var K, A;
  const { overlay: l } = Te(), { config: u, data: d } = m.useContext(se), h = m.useContext(ce), [c, D] = m.useState(!1), [v, S] = m.useState(
    (r == null ? void 0 : r.toggleName) || ht[(K = u == null ? void 0 : u.visualizations[r == null ? void 0 : r.widget]) == null ? void 0 : K.type] || ""
  ), O = new Pe(), p = (q, ee) => {
    let w = ee.getDropResult();
    if (!w)
      return null;
    const { rowIdx: $, colIdx: z } = w;
    if ((t == null ? void 0 : t.rowIdx) !== void 0)
      h({ type: "MOVE_VISUALIZATION", payload: { rowIdx: $, colIdx: z, widget: t } });
    else if (n) {
      const M = n();
      h({ type: "ADD_VISUALIZATION", payload: { newViz: M, rowIdx: $, colIdx: z } });
    }
  }, [{ isDragging: y, ...T }, g] = as(
    {
      type: "vis-widget",
      end: p,
      collect: (q) => ({
        isDragging: q.isDragging()
      })
    },
    [u.activeDashboard, u.rows, u.dashboard.sharedFilters]
  ), b = () => {
    t && h({
      type: "DELETE_WIDGET",
      payload: { uid: t.uid }
    });
  }, E = (q, ee) => {
    const w = new URL(q);
    return w.searchParams.set("$limit", ee), w.href.replace(/%24/g, "$");
  }, I = () => {
    var $;
    const q = (($ = u.rows[t.rowIdx]) == null ? void 0 : $.dataKey) || (t == null ? void 0 : t.dataKey), ee = u.datasets[q], w = d[q];
    if (q && !(w != null && w.length)) {
      const z = E(ee.dataUrl, 100);
      We(z).then((M) => {
        M.sample = !0, h({ type: "SET_DATA", payload: { ...d, [q]: M } });
      });
    }
  }, F = () => {
    t && (h({
      type: "UPDATE_VISUALIZATION",
      payload: { vizKey: t.uid, configureData: { editing: !0 } }
    }), I());
  };
  let C = !1;
  const _ = !!((A = u.rows[t == null ? void 0 : t.rowIdx]) != null && A.dataKey);
  if (_ || ["dashboardFilters", "markup-include"].includes(a))
    C = !0;
  else if (t != null && t.formattedData)
    C = !0;
  else if (t != null && t.dataKey && (t != null && t.dataDescription) && u.datasets[t.dataKey]) {
    const q = O.autoStandardize(u.datasets[t.dataKey].data);
    !!O.developerStandardize(q, t.dataDescription) && (C = !0);
  }
  const L = !_ && (t == null ? void 0 : t.type) !== "dashboardFilters", B = /* @__PURE__ */ f(
    "div",
    {
      className: `widget ${s ? "d-block widget--toggle" : ""} ${y && "dragging"}`,
      style: { maxHeight: "180px", minHeight: "100%" },
      children: [
        /* @__PURE__ */ o(R, { display: "move", className: "drag-icon" }),
        /* @__PURE__ */ f("div", { className: "widget__content", children: [
          (t == null ? void 0 : t.rowIdx) !== void 0 && /* @__PURE__ */ f("div", { className: "widget-menu", children: [
            C && /* @__PURE__ */ o("button", { title: "Configure Visualization", className: "btn btn-configure", onClick: F, children: _e.tools }),
            L && /* @__PURE__ */ o(
              "button",
              {
                title: "Configure Data",
                className: "btn btn-configure",
                onClick: () => {
                  l == null || l.actions.openOverlay(
                    /* @__PURE__ */ o(qn, { rowIndex: t.rowIdx, vizKey: t.uid })
                  );
                },
                children: _e.gear
              }
            ),
            /* @__PURE__ */ o("div", { className: "widget-menu-item", onClick: b, children: /* @__PURE__ */ o(R, { display: "close", base: !0 }) })
          ] }),
          _e[a],
          /* @__PURE__ */ o("span", { children: ht[a] }),
          /* @__PURE__ */ o("span", { children: e }),
          (t == null ? void 0 : t.newViz) && a !== "dashboardFilters" && /* @__PURE__ */ o("span", { onClick: F, className: "config-needed", children: "Configuration needed" })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ o(G, { children: i && s ? /* @__PURE__ */ f(
    "div",
    {
      ref: g,
      style: {
        display: "flex",
        flexWrap: "wrap",
        opacity: y ? 0.5 : 1,
        width: "100%",
        height: "100%"
      },
      ...T,
      children: [
        /* @__PURE__ */ o("div", { className: "widget__toggle-title", children: /* @__PURE__ */ f("div", { className: "flex", children: [
          c ? /* @__PURE__ */ o(R, { display: "check", className: "widget__edit-title-icon me-1", onClick: () => D(!1) }) : /* @__PURE__ */ o(R, { display: "edit", className: "widget__edit-title-icon me-1", onClick: () => D(!0) }),
          " ",
          c ? /* @__PURE__ */ o(
            "input",
            {
              type: "text",
              value: v,
              style: { fontSize: "12px" },
              onChange: (q) => S(q.target.value),
              onBlur: () => {
                D(!1), h({
                  type: "UPDATE_TOGGLE_NAME",
                  payload: {
                    rowIndex: t.rowIdx,
                    columnIndex: t.colIdx,
                    toggleName: v
                  }
                });
              }
            }
          ) : /* @__PURE__ */ o("span", { children: v })
        ] }) }),
        /* @__PURE__ */ o("br", {}),
        /* @__PURE__ */ o("div", { className: "w-100", style: { minHeight: i && s ? "135px" : "180px" }, children: B })
      ]
    }
  ) : /* @__PURE__ */ o(
    "div",
    {
      ref: g,
      style: { opacity: y ? 0.5 : 1, width: i ? "100%" : "auto", height: "100%" },
      ...T,
      children: B
    }
  ) });
}, Ys = ({ data: e, rowIdx: r, colIdx: t, toggleRow: n }) => {
  var c;
  const { config: a } = m.useContext(se), [{ isOver: i, canDrop: s }, l] = bs(
    () => ({
      accept: "vis-widget",
      drop: () => ({
        rowIdx: r,
        colIdx: t,
        canDrop: s
      }),
      canDrop: () => !e.widget,
      collect: (D) => ({
        isOver: D.isOver(),
        canDrop: !!D.canDrop()
      })
    }),
    [a.activeDashboard]
  ), u = e.widget ? a == null ? void 0 : a.visualizations[e.widget] : null;
  u && !u.uid && (u.uid = e.widget);
  let d = ["builder-column", "column-size--" + e.width];
  i && s && d.push("column--drop"), u && d.push("column--populated");
  const h = (D) => {
    var v;
    if (D)
      return D.type === "map" ? D.general.title : D.type === "markup-include" ? (v = D.contentEditor) == null ? void 0 : v.title : D.title;
  };
  return /* @__PURE__ */ o("div", { className: d.join(" "), ref: l, children: u ? /* @__PURE__ */ o(
    oe,
    {
      columnData: e,
      title: h(u),
      widgetConfig: { rowIdx: r, colIdx: t, ...u },
      type: u.visualizationType ?? ((c = u.general) == null ? void 0 : c.geoType),
      toggleRow: n,
      widgetInRow: !0
    }
  ) : /* @__PURE__ */ f("p", { className: "builder-column__text", children: [
    "Drag and drop ",
    /* @__PURE__ */ o("br", {}),
    " visualization"
  ] }) });
}, Xs = (e) => /* @__PURE__ */ m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M2,16 L22,16 L22,14 L2,14 L2,16 Z M2,11 L22,11 L22,9 L2,9 L2,11 Z M2,4 L2,6 L22,6 L22,4 L2,4 Z" })), Js = (e) => /* @__PURE__ */ m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M22 14L22 16 13 16 13 14 22 14zM11 16L2 16 2 14 11 14 11 16zM22 4L22 6 13 6 13 4 22 4zM11 6L2 6 2 4 11 4 11 6zM22 9L22 11 13 11 13 9 22 9zM11 11L2 11 2 9 11 9 11 11z" })), el = (e) => /* @__PURE__ */ m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M22,14 L22,16 L17,16 L17,14 L22,14 Z M7,14 L7,16 L2,16 L2,14 L7,14 Z M15,14 L15,16 L9,16 L9,14 L15,14 Z M22,9 L22,11 L17,11 L17,9 L22,9 Z M7,9 L7,11 L2,11 L2,9 L7,9 Z M15,9 L15,11 L9,11 L9,9 L15,9 Z M22,4 L22,6 L17,6 L17,4 L22,4 Z M7,4 L7,6 L2,6 L2,4 L7,4 Z M15,4 L15,6 L9,6 L9,4 L15,4 Z" })), tl = (e) => /* @__PURE__ */ m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M22,14 L22,16 L10,16 L10,14 L22,14 Z M8,14 L8,16 L2,16 L2,14 L8,14 Z M22,9 L22,11 L10,11 L10,9 L22,9 Z M8,9 L8,11 L2,11 L2,9 L8,9 Z M22,4 L22,6 L10,6 L10,4 L22,4 Z M8,4 L8,6 L2,6 L2,4 L8,4 Z" })), rl = (e) => /* @__PURE__ */ m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M22,14 L22,16 L16,16 L16,14 L22,14 Z M14,14 L14,16 L2,16 L2,14 L14,14 Z M22,9 L22,11 L16,11 L16,9 L22,9 Z M14,9 L14,11 L2,11 L2,9 L14,9 Z M22,4 L22,6 L16,6 L16,4 L22,4 Z M14,4 L14,6 L2,6 L2,4 L14,4 Z" })), nl = (e) => /* @__PURE__ */ m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ m.createElement("path", { d: "M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" })), al = ({ rowIdx: e }) => {
  const { config: r } = m.useContext(se), t = m.useContext(ce), n = x.cloneDeep(r.rows), a = r.rows[e], i = (c) => t({ type: "UPDATE_CONFIG", payload: [c] }), s = m.useMemo(() => a.toggle ? "toggle" : a.columns.reduce((c, D) => (D.width && (c += D.width), c), ""), [a]), l = (c, D = void 0) => {
    const v = x.cloneDeep(n);
    v[e].toggle = D;
    const S = v[e].columns, O = S.filter((y) => y.widget);
    if (!(O.length > c.length)) {
      {
        const y = S.length > c.length ? O : S;
        v[e].columns.forEach((T, g) => {
          var b;
          T.toggleName = T.toggleName || ht[(b = r.visualizations[T.widget]) == null ? void 0 : b.type] || void 0;
        }), v[e].columns = c.map((T, g) => {
          const b = y[g];
          return b ? { ...b, width: T } : { width: T };
        });
      }
      i({ ...r, rows: v });
    }
  }, u = (c = "down") => {
    if (e === n.length - 1 && c === "down")
      return;
    let D = c === "down" ? e + 1 : e - 1;
    const v = n[D];
    n[D] = a, n[e] = v, n[D].uuid = Date.now(), n[e].uuid = Date.now(), i({ ...r, rows: n });
    let S = c === "down" ? 202 : -202, O = c === "down" ? -202 : 202, p = document.querySelector("[data-row-id='" + e + "']"), y = document.querySelector("[data-row-id='" + D + "']");
    p.style.pointerEvents = "none", y.style.pointerEvents = "none", p.style.top = S + "px", y.style.top = O + "px", setTimeout(() => {
      p.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", y.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", p.style.top = "0", y.style.top = "0";
    }, 0), setTimeout(() => {
      p.setAttribute("style", ""), y.setAttribute("style", "");
    }, 500);
  }, d = () => {
    let c = { ...r.visualizations };
    n[e] && n[e].columns && n[e].columns.length && r.visualizations && n[e].columns.forEach((D) => {
      D.widget && delete c[D.widget];
    }), n.splice(e, 1), i({ ...r, rows: n, visualizations: c });
  };
  return /* @__PURE__ */ f("nav", { className: "row-menu", children: [
    /* @__PURE__ */ o("ul", { className: "row-menu__flyout", children: [
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "12" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([12]),
          title: "1 Column",
          children: /* @__PURE__ */ o(Xs, {})
        },
        "12"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "66" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([6, 6]),
          title: "2 Columns",
          children: /* @__PURE__ */ o(Js, {})
        },
        "66"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "444" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([4, 4, 4]),
          title: "3 Columns",
          children: /* @__PURE__ */ o(el, {})
        },
        "444"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "48" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([4, 8]),
          title: "2 Columns",
          children: /* @__PURE__ */ o(tl, {})
        },
        "48"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "84" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([8, 4]),
          title: "2 Columns",
          children: /* @__PURE__ */ o(rl, {})
        },
        "84"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "toggle" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([12, 12, 12], !0),
          title: "Toggle between up to three visualizations",
          children: /* @__PURE__ */ o(nl, {})
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
        children: /* @__PURE__ */ o(R, { display: "caretUp", color: "#fff", size: 25 })
      }
    ),
    /* @__PURE__ */ o(
      "button",
      {
        className: "btn btn-primary row-menu__btn border-0",
        title: "Move Row Down",
        onClick: () => u("down"),
        disabled: e + 1 === n.length,
        children: /* @__PURE__ */ o(R, { display: "caretDown", color: "#fff", size: 25 })
      }
    ),
    /* @__PURE__ */ o(
      "button",
      {
        className: "btn btn-danger row-menu__btn row-menu__btn--remove border-0",
        title: "Delete Row",
        onClick: d,
        disabled: e === 0 && n.length === 1,
        children: /* @__PURE__ */ o(R, { display: "close", color: "#fff", size: 25 })
      }
    )
  ] });
}, il = ({ row: e, idx: r, uuid: t }) => {
  const { overlay: n } = Te(), a = m.useContext(ce), i = () => {
    if (e.footnotesId)
      a({ type: "UPDATE_VISUALIZATION", payload: { vizKey: e.footnotesId, configureData: { editing: !0 } } });
    else {
      const s = "footnotes", l = s + Date.now();
      a({
        type: "ADD_FOOTNOTE",
        payload: { id: l, rowIndex: r, config: {
          uid: l,
          type: s,
          visualizationType: s,
          editing: !0
        } }
      });
    }
  };
  return /* @__PURE__ */ o(G, { children: /* @__PURE__ */ f("div", { className: "builder-row", "data-row-id": r, children: [
    /* @__PURE__ */ o(al, { rowIdx: r }),
    /* @__PURE__ */ f("p", { className: "ml-2 mt-n3", children: [
      "Row - ",
      r + 1
    ] }),
    /* @__PURE__ */ o(
      "button",
      {
        title: "Configure Data",
        className: "btn btn-configure-row",
        onClick: () => {
          n == null || n.actions.openOverlay(/* @__PURE__ */ o(qn, { rowIndex: r }));
        },
        children: _e.gearMulti
      }
    ),
    /* @__PURE__ */ o("div", { className: "column-container", children: e.columns.filter((s) => s.width).map((s, l) => /* @__PURE__ */ o(
      Ys,
      {
        data: s,
        rowIdx: r,
        colIdx: l,
        toggleRow: e.toggle
      },
      `row-${t}-col-${l}`
    )) }),
    /* @__PURE__ */ f("button", { className: "btn btn-primary footnotes", onClick: i, children: [
      e.footnotesId ? "Edit" : "Add",
      " Footnotes"
    ] })
  ] }) });
}, ol = () => {
  const { config: e } = m.useContext(se);
  if (!e)
    return null;
  const r = e.rows, t = m.useContext(ce), n = (i) => t({ type: "UPDATE_CONFIG", payload: [i] }), a = () => {
    const i = { columns: [{ width: 12 }] };
    n({
      ...e,
      rows: [...r, i],
      uuid: Date.now()
    });
  };
  return /* @__PURE__ */ f("div", { className: "builder-grid", children: [
    (r || []).map((i, s) => /* @__PURE__ */ o(il, { row: i, idx: s, uuid: i.uuid }, s)),
    /* @__PURE__ */ o("button", { className: "btn btn-primary col", onClick: a, children: "Add Row" })
  ] });
};
const sl = (e) => /* @__PURE__ */ o(ve, { children: /* @__PURE__ */ f(ve.Content, { children: [
  /* @__PURE__ */ o("p", { children: "Are you sure you want to delete this dashboard? " }),
  /* @__PURE__ */ o("button", { className: "btn btn-danger", onClick: e, children: "DELETE" })
] }) }), ll = ({ name: e, handleClick: r, tabs: t, index: n, active: a }) => {
  const [i, s] = m.useState(!1), l = m.useContext(ce), { overlay: u } = Te(), d = m.createRef(), h = (p) => {
    p.stopPropagation();
    const y = d.current.value, T = y === e, g = !y, b = t.includes(y);
    !T && !g && !b && l({ type: "RENAME_DASHBOARD_TAB", payload: { current: e, new: y } }), s(!1);
  }, c = (p) => {
    p.target.className !== "remove" && (a ? s(!0) : r());
  }, D = () => {
    const p = () => {
      l({ type: "REMOVE_MULTIDASHBOARD_AT_INDEX", payload: n }), u == null || u.actions.toggleOverlay(!1);
    };
    u == null || u.actions.openOverlay(sl(p));
  }, v = (p, y) => {
    const T = p + y;
    T > -1 && T <= t.length - 1 && l({ type: "REORDER_MULTIDASHBOARDS", payload: { currentIndex: p, newIndex: p + y } });
  }, S = n !== 0, O = n <= t.length - 2;
  return /* @__PURE__ */ f("li", { className: "nav-item d-flex mt-0", children: [
    S && i && /* @__PURE__ */ o("button", { className: "border-0", onClick: () => v(n, -1), children: "<" }),
    /* @__PURE__ */ o(
      "div",
      {
        className: `edit nav-link${a ? " active" : ""}`,
        "aria-current": a ? "page" : null,
        onClick: c,
        children: i ? /* @__PURE__ */ f("div", { className: "d-flex", children: [
          /* @__PURE__ */ o("input", { type: "text", defaultValue: e, onBlur: h, ref: d }),
          /* @__PURE__ */ o("button", { className: "btn btn-link save", onClick: h, children: "save" })
        ] }) : /* @__PURE__ */ f(G, { children: [
          e,
          /* @__PURE__ */ o("button", { className: "btn btn-danger border-0 ms-1", onClick: D, children: "X" })
        ] })
      }
    ),
    O && i && /* @__PURE__ */ o("button", { className: "border-0", onClick: () => v(n, 1), children: ">" })
  ] });
}, ul = () => {
  const { config: e } = m.useContext(se), r = m.useContext(ce), t = m.useMemo(
    () => (e.multiDashboards || []).map(({ label: i }) => i),
    [e.multiDashboards]
  ), n = m.useMemo(() => e.activeDashboard, [e.activeDashboard]), a = (i) => {
    r({ type: "SAVE_CURRENT_CHANGES" }), r({ type: "SWITCH_CONFIG", payload: i });
  };
  return e.multiDashboards ? /* @__PURE__ */ f("ul", { className: "nav nav-tabs multi-config-tabs mb-4", children: [
    t.map((i, s) => /* @__PURE__ */ o(
      ll,
      {
        name: i,
        tabs: t,
        index: s,
        handleClick: () => a(s),
        active: s === n
      },
      i + s
    )),
    /* @__PURE__ */ o("li", { className: "nav-item", children: /* @__PURE__ */ o("button", { className: "nav-link add", onClick: () => r({ type: "ADD_NEW_DASHBOARD" }), children: "+" }) })
  ] }) : null;
}, cl = () => {
  const { config: e } = m.useContext(se), r = m.useContext(ce), t = m.useMemo(
    () => (e.multiDashboards || []).map(({ label: i }) => i),
    [e.multiDashboards]
  ), n = m.useMemo(() => e.activeDashboard, [e.activeDashboard]), a = (i, s) => {
    s.preventDefault(), r({ type: "SWITCH_CONFIG", payload: i }), at("cove-tab", i);
  };
  return e.multiDashboards ? /* @__PURE__ */ o("ul", { className: "nav nav-tabs multi-config-tabs mb-4", children: t.map((i, s) => /* @__PURE__ */ o("li", { className: "nav-item", children: /* @__PURE__ */ o(
    "a",
    {
      className: `nav-link${n === s ? " active" : ""}`,
      "aria-current": n === s ? "page" : null,
      href: "#",
      onClick: (l) => a(s, l),
      children: i
    }
  ) }, i + s)) }) : null;
}, Wn = ({ isEditor: e = !1 }) => e ? /* @__PURE__ */ o(ul, {}) : /* @__PURE__ */ o(cl, {}), be = (e) => {
  var S, O;
  const r = ["Dashboard Description", "Data Table Settings", "Dashboard Preview"], { visualizationKey: t, subEditor: n } = e, { config: a, setParentConfig: i, tabSelected: s, data: l } = m.useContext(se);
  if (!a)
    return null;
  const u = m.useContext(ce), d = () => {
    if (!t)
      return;
    const p = x.cloneDeep(a);
    if (p.visualizations[t].editing = !1, u({ type: "SET_CONFIG", payload: p }), Object.values(l).some((y) => y == null ? void 0 : y.sample)) {
      const y = Object.keys(l).reduce((T, g) => {
        var b;
        return (b = l[g]) != null && b.sample ? T[g] = [] : T[g] = l[g], T;
      }, {});
      u({ type: "SET_DATA", payload: y });
    }
  }, h = (p, y, T) => {
    let g = { ...a };
    g[p] || (g[p] = {}), g[p][y] = T, u({ type: "UPDATE_CONFIG", payload: [g] });
  }, c = () => {
    const p = x.cloneDeep(a);
    return delete p.newViz, delete p.runtime, p;
  };
  m.useEffect(() => {
    const p = c(), y = new CustomEvent("updateVizConfig", { detail: JSON.stringify(p) });
    window.dispatchEvent(y), i && i(p);
  }, [a]);
  const D = (p) => {
    const { checked: y } = p.currentTarget;
    y && u({ type: "INITIALIZE_MULTIDASHBOARDS" });
  }, v = !!a.multiDashboards;
  return /* @__PURE__ */ f("div", { "aria-level": 2, role: "heading", className: `editor-heading${n ? " sub-dashboard-viz" : ""}`, children: [
    n ? /* @__PURE__ */ f("div", { className: "heading-1 back-to", onClick: d, style: { cursor: "pointer" }, children: [
      /* @__PURE__ */ o("span", { children: "←" }),
      " Back to Dashboard"
    ] }) : /* @__PURE__ */ f("div", { className: "heading-1", children: [
      "Dashboard Editor",
      " ",
      /* @__PURE__ */ f("span", { className: "small", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", onChange: D, checked: v, disabled: v }),
        " make multidashboard"
      ] }),
      /* @__PURE__ */ o("br", {}),
      /* @__PURE__ */ o(
        "input",
        {
          type: "text",
          placeholder: "Enter Dashboard Name Here",
          defaultValue: (S = a.dashboard) == null ? void 0 : S.title,
          onChange: (p) => h("dashboard", "title", p.target.value)
        }
      )
    ] }),
    !n && /* @__PURE__ */ f("div", { className: "toggle-bar__wrapper", children: [
      /* @__PURE__ */ o(Wn, { isEditor: !0 }),
      /* @__PURE__ */ o("ul", { className: "toggle-bar", children: r.map((p) => /* @__PURE__ */ o(
        "li",
        {
          className: s === p ? "active" : "inactive",
          onClick: () => {
            u({ type: "SET_TAB_SELECTED", payload: p });
          },
          children: p
        },
        p
      )) }),
      /* @__PURE__ */ f("div", { className: "heading-body", children: [
        s === "Dashboard Description" && /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            className: "description-input",
            placeholder: "Type a dashboard description here.",
            defaultValue: (O = a.dashboard) == null ? void 0 : O.description,
            onChange: (p) => h("dashboard", "description", p.target.value)
          }
        ),
        s === "Data Table Settings" && /* @__PURE__ */ f(G, { children: [
          /* @__PURE__ */ f("div", { className: "wrap", children: [
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.show,
                  onChange: (p) => h("table", "show", p.target.checked)
                }
              ),
              "Show Data Table(s)"
            ] }),
            /* @__PURE__ */ o("br", {}),
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.expanded,
                  onChange: (p) => h("table", "expanded", p.target.checked)
                }
              ),
              "Expanded by Default"
            ] }),
            /* @__PURE__ */ o("br", {})
          ] }),
          /* @__PURE__ */ f("div", { className: "wrap", children: [
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.limitHeight,
                  onChange: (p) => h("table", "limitHeight", p.target.checked)
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
                onChange: (p) => h("table", "height", p.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ f("div", { className: "wrap", children: [
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.download,
                  onChange: (p) => h("table", "download", p.target.checked)
                }
              ),
              "Show Download CSV Link"
            ] }),
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.showDownloadUrl,
                  onChange: (p) => h("table", "showDownloadUrl", p.target.checked)
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
const en = new Pe(), Le = (e, r) => {
  if (e && r)
    try {
      let t = en.autoStandardize(e);
      return t = en.developerStandardize(e, r), t;
    } catch {
      return e;
    }
  return e;
}, dl = (e) => {
  Object.keys(e.visualizations).forEach((r, t) => {
    const n = e.visualizations[r];
    if (n.dataKey && !n.data) {
      const a = e.datasets[n.dataKey].data;
      e.visualizations[r].data = a, e.visualizations[r].formattedData = Le(a, n.dataDescription);
    }
  });
}, fl = (e) => {
  e.rows.forEach((r, t) => {
    if (r.dataKey && !r.data) {
      const n = e.datasets[r.dataKey].data;
      e.rows[t].data = n, e.rows[t].formattedData = Le(n, r.dataDescription);
    }
  });
}, hl = (e) => (dl(e), fl(e), e);
const ue = (e, r) => {
  const n = {
    filters: [],
    filterBehavior: "Filter Change",
    newViz: e !== "table",
    openModal: e !== "markup-include",
    uid: e + Date.now(),
    type: e
  };
  switch (e) {
    case "chart":
      n.visualizationType = r;
      break;
    case "map":
      n.general = {}, n.general.geoType = r;
      break;
    case "data-bite":
      n.visualizationType = e;
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
      n.table = a, n.columns = {}, n.dataFormat = {}, n.visualizationType = e;
      break;
    case "markup-include":
      n.contentEditor = {
        inlineHTML: "<h2>Inline HTML</h2>",
        markupVariables: [],
        showHeader: !0,
        srcUrl: "#example",
        title: "Markup Include",
        useInlineHTML: !0
      }, n.theme = "theme-blue", n.visual = {
        border: !1,
        accent: !1,
        background: !1,
        hideBackgroundColor: !1,
        borderColorTheme: !1
      }, n.showEditorPanel = !0, n.visualizationType = e;
      break;
    case "dashboardFilters": {
      n.sharedFilterIndexes = [], n.visualizationType = e;
      break;
    }
    default:
      n.visualizationType = e;
      break;
  }
  return n;
}, pl = () => {
  const [e, r] = m.useState(!1), { config: t } = m.useContext(se), n = m.useContext(ce);
  return /* @__PURE__ */ f("div", { className: `visualizations-panel${e ? " advanced-editor" : ""}`, children: [
    /* @__PURE__ */ o("p", { style: { fontSize: "14px" }, children: "Click and drag an item onto the grid to add it to your dashboard." }),
    /* @__PURE__ */ o("span", { className: "subheading-3", children: "Chart" }),
    /* @__PURE__ */ f("div", { className: "drag-grid", children: [
      /* @__PURE__ */ o(oe, { addVisualization: () => ue("chart", "Bar"), type: "Bar" }),
      /* @__PURE__ */ o(oe, { addVisualization: () => ue("chart", "Line"), type: "Line" }),
      /* @__PURE__ */ o(oe, { addVisualization: () => ue("chart", "Pie"), type: "Pie" }),
      /* @__PURE__ */ o(oe, { addVisualization: () => ue("chart", "Sankey"), type: "Sankey" })
    ] }),
    /* @__PURE__ */ o("span", { className: "subheading-3", children: "Map" }),
    /* @__PURE__ */ f("div", { className: "drag-grid", children: [
      /* @__PURE__ */ o(oe, { addVisualization: () => ue("map", "us"), type: "us" }),
      /* @__PURE__ */ o(oe, { addVisualization: () => ue("map", "world"), type: "world" }),
      /* @__PURE__ */ o(oe, { addVisualization: () => ue("map", "single-state"), type: "single-state" })
    ] }),
    /* @__PURE__ */ o("span", { className: "subheading-3", children: "Misc." }),
    /* @__PURE__ */ f("div", { className: "drag-grid", children: [
      /* @__PURE__ */ o(oe, { addVisualization: () => ue("data-bite", ""), type: "data-bite" }),
      /* @__PURE__ */ o(oe, { addVisualization: () => ue("waffle-chart", ""), type: "waffle-chart" }),
      /* @__PURE__ */ o(oe, { addVisualization: () => ue("markup-include", ""), type: "markup-include" }),
      /* @__PURE__ */ o(oe, { addVisualization: () => ue("filtered-text", ""), type: "filtered-text" }),
      /* @__PURE__ */ o(oe, { addVisualization: () => ue("dashboardFilters", ""), type: "dashboardFilters" }),
      /* @__PURE__ */ o(oe, { addVisualization: () => ue("table", ""), type: "table" })
    ] }),
    /* @__PURE__ */ o(
      na,
      {
        loadConfig: (i) => {
          const s = i.multiDashboards ? {
            ...t,
            ...i,
            ...i.multiDashboards[t.activeDashboard],
            activeDashboard: t.activeDashboard
          } : i;
          n({ type: "APPLY_CONFIG", payload: [hl(s)] });
        },
        config: t,
        convertStateToConfig: () => {
        },
        onExpandCollapse: () => {
          r(!e);
        }
      }
    )
  ] });
}, Qn = (e, r) => {
  var t;
  if ((t = r.parents) != null && t.length) {
    const n = e.find((a) => r.parents.includes(a.key));
    return n ? 1 + Qn(e, n) : 1;
  } else
    return 1;
};
function gl(e) {
  let r = 1;
  return e.forEach((t) => {
    t.tier = Qn(e, t), t.tier > r && (r = t.tier);
  }), r;
}
function tn(e = [], r, t) {
  const n = x.filter(r, (a) => {
    var i;
    return a.resetLabel === a.active ? (i = a.values) == null ? void 0 : i.includes(a.resetLabel) : !0;
  });
  return e.filter((a) => !n.find((s) => {
    var c;
    const l = a[s.columnName], u = s.queuedActive || s.filterStyle === ge.nestedDropdown ? [s.active, (c = s.subGrouping) == null ? void 0 : c.active] : s.active;
    let d = !0;
    if (Array.isArray(u) ? d = !u.includes(l) : d = u && l != u, s.filterStyle === "nested-dropdown" && s.subGrouping && s.active === l && d === !1) {
      const D = s.subGrouping.active, v = a[s.subGrouping.columnName];
      d = D && v !== D;
    }
    const h = s.tier === t;
    if (s.type !== "urlfilter" && h && d)
      return !0;
  }));
}
const Be = (e, r) => {
  const t = gl(e);
  for (let n = 0; n < t; n++) {
    const a = n === t - 1, i = tn(r, e, n + 1);
    if (a)
      return tn(i, e, t - 1);
  }
}, ml = (e, r) => {
  const t = [];
  return Object.keys(r).forEach((n) => {
    var a;
    (a = r[n]) == null || a.forEach((i) => {
      const s = i[e];
      s && !t.includes(s) && t.push(s);
    });
  }), t;
}, Ae = (e) => Object.keys((e == null ? void 0 : e.visualizations) || {}), wt = (e) => e.reduce((r, t, n) => {
  var a;
  return (a = t.columns) == null || a.forEach((i, s) => {
    i.widget !== void 0 && (r[i.widget] = { row: n, column: s });
  }), t.footnotesId && (r[t.footnotesId] = { row: n, column: 0 }), r;
}, {}), jt = (e) => (r, t) => {
  let n = {}, a = Ae(r);
  const i = wt(r.rows);
  return r.dashboard.sharedFilters && (r.dashboard.sharedFilters.forEach((s, l) => {
    const u = !!a.find((D) => D === s.setBy), d = r.dashboard.sharedFilters[l], h = (D) => {
      if (d.values = D, D.length > 0) {
        const v = d.pivot ? d.values : d.values[0], S = bn(d);
        S ? d.active = S : d.active = d.active || v;
      }
    }, c = ml(s.columnName, t || e.data);
    u ? (d.order === "asc" && c.sort(), d.order === "desc" && c.sort().reverse(), h(c)) : (!s.values || s.values.length === 0) && s.showDropdown && h(c);
  }), a.forEach((s) => {
    var d;
    const l = i[s];
    if ((d = r.rows[l]) != null && d.datakey)
      return;
    const u = r.dashboard.sharedFilters.filter(
      (h) => h.usedBy && h.usedBy.indexOf(s) !== -1
    );
    if (u.length > 0) {
      const h = r.visualizations[s], c = r.datasets[h.dataKey], v = Le(
        (c == null ? void 0 : c.data) || h.data,
        h.dataDescription
      ) || (t || e.data)[h.dataKey];
      n[s] = Be(u, v);
    }
  }), r.rows.forEach((s, l) => {
    const u = r.dashboard.sharedFilters.filter(
      (d) => d.usedBy && d.usedBy.indexOf(l) !== -1
    );
    if (u.length > 0) {
      const h = Le(s.data, s.dataDescription) || (t || e.data)[l];
      n[l] = Be(u, h);
    }
  })), r.runtime = {}, [r, n];
}, vl = () => ({
  dashboard: { sharedFilters: [] },
  rows: [{ columns: [{ width: 12 }] }],
  visualizations: {},
  table: {
    label: "Data Table",
    show: !1,
    showDownloadUrl: !1,
    showVertical: !0
  }
}), yl = (e, r) => {
  switch (r.type) {
    case "ADD_FOOTNOTE": {
      const { id: t, rowIndex: n, config: a } = r.payload, i = e.config.rows.map((s, l) => l === n ? { ...s, footnotesId: t } : s);
      return {
        ...e,
        config: pe(
          { ...e.config, rows: i, visualizations: { ...e.config.visualizations, [t]: a } },
          e.config.activeDashboard
        )
      };
    }
    case "ADD_NEW_DASHBOARD": {
      const t = e.config.multiDashboards, n = "New Dashboard " + (t.length + 1), a = [...t, { ...vl(), label: n }];
      return Ge(e, a);
    }
    case "UPDATE_CONFIG": {
      const [t, n] = jt(e)(...r.payload);
      return { ...e, config: pe(t, e.config.activeDashboard), filteredData: n };
    }
    case "APPLY_CONFIG": {
      const [t, n] = jt(e)(...r.payload), a = [...Object.values(t.visualizations), ...t.rows].map((i) => i.dataKey).reduce((i, s) => {
        var u;
        const l = e.data[s] || ((u = e.config.datasets[s]) == null ? void 0 : u.data);
        return l && (i[s] = l), i;
      }, {});
      return { ...ft, config: pe(t, e.config.activeDashboard), filteredData: n, data: a };
    }
    case "SET_CONFIG":
      return r.payload.activeDashboard === void 0 || e.config.activeDashboard === r.payload.activeDashboard ? {
        ...e,
        config: pe({ ...e.config, ...r.payload }, r.payload.activeDashboard)
      } : e;
    case "SET_DATA":
      return { ...e, data: r.payload };
    case "SET_FILTERED_DATA":
      return { ...e, filteredData: r.payload };
    case "SET_LOADING":
      return { ...e, loading: r.payload };
    case "SET_PREVIEW":
      return { ...e, preview: r.payload };
    case "SET_SHARED_FILTERS": {
      const t = r.payload, n = { ...e.config.dashboard, sharedFilters: t };
      return {
        ...e,
        config: pe({ ...e.config, dashboard: n }, e.config.activeDashboard)
      };
    }
    case "SET_TAB_SELECTED":
      return { ...e, tabSelected: r.payload };
    case "REMOVE_MULTIDASHBOARD_AT_INDEX": {
      const t = [...e.config.multiDashboards];
      x.remove(t, (a, i) => i === r.payload);
      const n = {
        ...e.config,
        multiDashboards: t,
        ...t[0],
        activeDashboard: 0
      };
      return t.length === 0 ? { ...e, config: x.omit(e.config, "multiDashboards") } : Ge({ ...e, config: n }, t);
    }
    case "RENAME_DASHBOARD_TAB": {
      const t = e.config.multiDashboards.map((a) => (a.label === r.payload.current && (a.label = r.payload.new), a)), n = { ...e.config, label: r.payload.new };
      return Ge({ ...e, newConfig: n }, t);
    }
    case "REORDER_MULTIDASHBOARDS": {
      const { newIndex: t, currentIndex: n } = r.payload, a = [...e.config.multiDashboards];
      a.splice(t, 0, a.splice(n, 1)[0]);
      const i = { ...e.config, activeDashboard: t };
      return Ge({ ...e, config: i }, a);
    }
    case "SAVE_CURRENT_CHANGES": {
      const t = e.config.activeDashboard, n = [...e.config.multiDashboards], a = n[t].label, i = x.pick(e.config, ["dashboard", "visualizations", "rows"]);
      n[t] = { ...i, label: a };
      const s = pe(e.config, t);
      return { ...e, config: s };
    }
    case "INITIALIZE_MULTIDASHBOARDS": {
      const t = "New Dashboard 1", a = [{ ...x.pick(e.config, ["dashboard", "visualizations", "rows"]), label: t }], i = { ...e.config, activeDashboard: 0 };
      return Ge({ ...e, config: i }, a);
    }
    case "SWITCH_CONFIG": {
      const t = r.payload, n = e.config.multiDashboards[t], a = x.cloneDeep(e.data);
      return { ...e, data: a, config: { ...e.config, ...n, activeDashboard: t } };
    }
    case "TOGGLE_ROW": {
      const { rowIndex: t, colIndex: n } = r.payload, a = e.config.rows.map((i, s) => {
        if (s === t) {
          const l = i.columns.map((u, d) => ({ ...u, hide: d === n }));
          return { ...i, columns: l };
        }
        return i;
      });
      return { ...e, config: { ...e.config, rows: a } };
    }
    case "ADD_VISUALIZATION": {
      const { newViz: t, rowIdx: n, colIdx: a } = r.payload, i = t.uid, s = x.cloneDeep(e.config.rows);
      return s[n].columns[a].widget = i, {
        ...e,
        config: pe(
          { ...e.config, visualizations: { ...e.config.visualizations, [i]: t }, rows: s },
          e.config.activeDashboard
        )
      };
    }
    case "MOVE_VISUALIZATION": {
      const { rowIdx: t, colIdx: n, widget: a } = r.payload, i = x.cloneDeep(e.config.rows);
      return i[a.rowIdx].columns[a.colIdx].widget = null, i[t].columns[n].widget = a.uid, {
        ...e,
        config: pe({ ...e.config, rows: i }, e.config.activeDashboard)
      };
    }
    case "RESET_VISUALIZATION": {
      const { vizKey: t } = r.payload, n = { ...e.config.visualizations[t] };
      return delete n.data, delete n.dataKey, delete n.dataDescription, delete n.formattedData, {
        ...e,
        config: pe(
          { ...e.config, visualizations: { ...e.config.visualizations, [t]: n } },
          e.config.activeDashboard
        )
      };
    }
    case "UPDATE_VISUALIZATION": {
      const { vizKey: t, configureData: n } = r.payload, a = { ...e.config.visualizations[t], ...n };
      return {
        ...e,
        config: pe(
          { ...e.config, visualizations: { ...e.config.visualizations, [t]: a } },
          e.config.activeDashboard
        )
      };
    }
    case "UPDATE_ROW": {
      const { rowIndex: t, rowData: n } = r.payload, a = e.config.rows.map((i, s) => s === t ? { ...i, ...n } : i);
      return { ...e, config: pe({ ...e.config, rows: a }, e.config.activeDashboard) };
    }
    case "DELETE_WIDGET": {
      const { uid: t } = r.payload, n = x.cloneDeep(e.config.rows), a = x.cloneDeep(e.config.visualizations);
      delete a[t];
      const i = x.cloneDeep(e.config.dashboard.sharedFilters);
      i && i.length > 0 && i.forEach((l) => {
        l.usedBy && l.usedBy.indexOf(t) !== -1 && l.usedBy.splice(l.usedBy.indexOf(t), 1);
      });
      const s = x.map(n, (l) => ({
        ...l,
        columns: x.filter(l.columns, (u) => u.widget !== t)
      }));
      return {
        ...e,
        config: pe(
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
    case "UPDATE_TOGGLE_NAME": {
      const { rowIndex: t, columnIndex: n, toggleName: a } = r.payload, i = e.config.rows.map((s, l) => {
        if (l === t) {
          const u = s.columns.map((d, h) => ({
            ...d,
            toggleName: h === n ? a : d.toggleName
          }));
          return { ...s, columns: u };
        }
        return s;
      });
      return { ...e, config: { ...e.config, rows: i } };
    }
    default:
      return e;
  }
}, pe = (e, r) => {
  if (r === void 0 || !e.multiDashboards)
    return e;
  const t = [...e.multiDashboards], n = t[r].label, a = x.pick(e, ["dashboard", "visualizations", "rows"]);
  return t[r] = { ...a, label: n }, { ...e, multiDashboards: t };
}, Ge = (e, r) => ({
  ...e,
  config: { ...e.config, multiDashboards: r }
}), bl = hn(yl), Dl = (e, r) => {
  switch (r.type) {
    case "ADD_ERROR_MESSAGE": {
      const t = r.payload;
      return [...e, t];
    }
    case "DISMISS_ERROR_MESSAGE": {
      const t = [...e];
      return x.remove(t, (n, a) => a === r.payload), t;
    }
  }
}, Sl = hn(Dl);
const Zn = ({ children: e, visualizationKey: r, visualizationConfig: t, type: n, component: a, updateConfig: i, viewport: s }) => {
  const [l, u] = ct.useState(!0);
  return /* @__PURE__ */ o(G, { children: /* @__PURE__ */ f("div", { className: "editor-wrapper", children: [
    /* @__PURE__ */ o("button", { className: `editor-toggle ${l ? "" : "collapsed"}`, title: l ? "Collapse Editor" : "Expand Editor", onClick: () => u(!l) }),
    /* @__PURE__ */ f("section", { className: `${l ? "" : "hidden"} editor-panel cove`, children: [
      /* @__PURE__ */ f("div", { "aria-level": 2, role: "heading", className: "heading-2", children: [
        "Configure ",
        n
      ] }),
      /* @__PURE__ */ o("section", { children: e })
    ] }),
    /* @__PURE__ */ o("div", { className: "preview-wrapper", children: /* @__PURE__ */ o(a, { visualizationKey: r, config: t, updateConfig: i, configUrl: void 0, setEditing: void 0, hostname: void 0, viewport: s }) })
  ] }) });
}, wl = ({ config: e, updateConfig: r }) => {
  var i;
  const t = m.useMemo(() => Qt(e, r), [JSON.stringify(e)]), n = (s) => {
    const l = x.cloneDeep(e.columns);
    delete l[s], r({
      ...e,
      columns: l
    });
  }, a = Object.keys(((i = e.originalFormattedData) == null ? void 0 : i[0]) || {});
  return /* @__PURE__ */ f(va, { allowZeroExpanded: !0, children: [
    /* @__PURE__ */ f(Ct, { children: [
      /* @__PURE__ */ o(Et, { children: /* @__PURE__ */ o(Ot, { children: "Filters" }) }),
      /* @__PURE__ */ o(It, { children: /* @__PURE__ */ o(aa, { config: e, updateField: t, rawData: e.originalFormattedData }) })
    ] }),
    /* @__PURE__ */ f(Ct, { children: [
      /* @__PURE__ */ o(Et, { children: /* @__PURE__ */ o(Ot, { children: "Columns" }) }),
      /* @__PURE__ */ o(It, { children: /* @__PURE__ */ o(ha, { config: e, updateField: t, deleteColumn: n }) })
    ] }),
    /* @__PURE__ */ f(Ct, { children: [
      /* @__PURE__ */ o(Et, { children: /* @__PURE__ */ o(Ot, { children: "Data Table" }) }),
      /* @__PURE__ */ o(It, { children: /* @__PURE__ */ o(pa, { config: e, columns: a, updateField: t, isDashboard: !0 }) })
    ] })
  ] });
}, rr = ({
  visualizationKey: e,
  config: r,
  updateConfig: t,
  viewport: n,
  isEditor: a
}) => {
  const [i, s] = m.useState(
    lr(r.filters, r.formattedData || r.data)
  );
  return m.useEffect(() => {
    var u;
    const l = Ca(r.filters, r.data);
    s(lr(l, ((u = r == null ? void 0 : r.formattedData) == null ? void 0 : u.length) > 0 ? r.formattedData : r.data));
  }, [r.filters]), a ? /* @__PURE__ */ o(
    Zn,
    {
      component: rr,
      visualizationKey: e,
      visualizationConfig: r,
      updateConfig: t,
      type: "Table",
      viewport: n,
      children: /* @__PURE__ */ o(wl, { config: r, updateConfig: t }, e)
    }
  ) : /* @__PURE__ */ f(G, { children: [
    /* @__PURE__ */ o(
      Ea,
      {
        config: r,
        setConfig: t,
        setFilteredData: s,
        filteredData: i,
        excludedData: r.formattedData
      }
    ),
    /* @__PURE__ */ o(
      Mt,
      {
        expandDataTable: r.table.expanded,
        config: r,
        rawData: r.data,
        runtimeData: i,
        tabbingId: e,
        tableTitle: r.table.label,
        viewport: n || "lg"
      }
    )
  ] });
};
const Tl = ({ active: e, row: r, visualizations: t, setToggled: n, text: a }) => {
  const i = (s, l = null) => {
    l != null && l.key && l.key !== "Enter" || n(s);
  };
  return /* @__PURE__ */ o("div", { className: "toggle-component", children: r.columns.map((s, l) => {
    if (!s.widget)
      return null;
    const u = t[s.widget].type, d = s.toggleName ? s.toggleName : ht[u], h = l === e;
    return /* @__PURE__ */ f(
      "div",
      {
        role: "radio",
        className: h ? "selected" : "",
        onClick: () => i(l),
        onKeyUp: (c) => i(l, c),
        "aria-checked": h,
        tabIndex: 0,
        "aria-label": `Toggle ${u}`,
        children: [
          Ks(t[s.widget]),
          " ",
          /* @__PURE__ */ o("span", { children: d })
        ]
      },
      l
    );
  }) });
}, Kn = {
  Apply: "Apply Button",
  OnChange: "Filter Change"
}, rn = (e, r) => {
  const t = e[r].key, n = e.map((a, i) => {
    var s;
    return (s = a.parents) != null && s.includes(t) ? i : null;
  }).filter((a) => a !== null);
  return n.length && n.forEach((a) => {
    const i = e[a];
    i.setByQueryParameter && Oa(i.setByQueryParameter), i.active = "", i.subGrouping && (i.subGrouping.active = "");
  }), n;
}, Cl = (e, r, t, n) => {
  const a = x.cloneDeep(t), i = a[e];
  if (n.filterBehavior !== Kn.Apply || n.autoLoad)
    if ((i == null ? void 0 : i.filterStyle) === ge.nestedDropdown)
      a[e].active = r[0], a[e].subGrouping.active = r[1];
    else {
      a[e].active = r, rn(a, e);
      const s = Zt();
      i.setByQueryParameter && s[i.setByQueryParameter] !== i.active && (s[i.setByQueryParameter] = i.active, Dn(s));
    }
  else if (i.subGrouping)
    at(i.setByQueryParameter, r[0]), at(i.subGrouping.setByQueryParameter, r[1]), a[e].queuedActive = r;
  else {
    const s = Array.isArray(r) ? r.join(",") : r;
    i.setByQueryParameter && at(i.setByQueryParameter, s), a[e].queuedActive = r;
  }
  return [a, rn(a, e)];
}, Gt = (e, r) => {
  var n;
  const t = (n = e.sharedFilters) == null ? void 0 : n.filter(
    (a) => {
      var i;
      return a.usedBy && a.usedBy.indexOf(`${r}`) !== -1 || ((i = a.usedBy) == null ? void 0 : i.indexOf(r)) !== -1;
    }
  );
  return (t == null ? void 0 : t.length) > 0 ? t : !1;
}, qe = (e, r, t) => {
  const n = r || {}, { config: a } = e;
  return Ae(a).forEach((i) => {
    const s = Gt(a.dashboard, i);
    if (s) {
      const { dataKey: l, data: u, dataDescription: d } = a.visualizations[i], h = (t || e.data)[l] || u, c = (t == null ? void 0 : t[l]) || (d ? Le(h, d) : h);
      n[i] = Be(s, c);
    }
  }), a.rows.forEach((i, s) => {
    if (i.dataKey) {
      const l = Gt(a.dashboard, s), { dataKey: u, data: d, dataDescription: h } = i, c = (t || e.data)[u] || d;
      if (l) {
        const D = (t == null ? void 0 : t[u]) ?? h ? Le(c, h) : c;
        n[s] = Be(l, D);
      } else
        n[s] = c || [];
    }
  }), n;
}, pt = (e) => Object.values(e).some((r) => r.filterBehavior === "Apply Button" && r.type === "dashboardFilters"), El = ({
  filter: e,
  isNestedDropdown: r,
  updateAPIFilter: t,
  valueSelector: n,
  textSelector: a
}) => {
  var O, p, y, T, g;
  const [i, s] = m.useState(((O = e.apiFilter) == null ? void 0 : O.apiEndpoint) || ""), [l, u] = m.useState(((p = e.apiFilter) == null ? void 0 : p.valueSelector) || ""), [d, h] = m.useState(((y = e.apiFilter) == null ? void 0 : y.textSelector) || ""), [c, D] = m.useState((T = e.apiFilter) == null ? void 0 : T.subgroupValueSelector), [v, S] = m.useState((g = e.apiFilter) == null ? void 0 : g.subgroupTextSelector);
  return /* @__PURE__ */ f("fieldset", { className: "mb-1 px-3 cdc-open-viz-module", children: [
    /* @__PURE__ */ f("label", { className: "d-block", children: [
      /* @__PURE__ */ o("span", { children: "API Endpoint: " }),
      /* @__PURE__ */ o(
        "textarea",
        {
          value: i,
          rows: 4,
          onChange: (b) => s(b.target.value),
          className: "w-100",
          style: { minHeight: "1.5rem", maxWidth: "90%" }
        }
      ),
      r && /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
        /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
        /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Your API Endpoint should return both value selector values." }) })
      ] })
    ] }),
    /* @__PURE__ */ f("div", { className: "d-flex", children: [
      /* @__PURE__ */ f("div", { className: `w-50${r ? " border border-dark p-1 m-1" : ""}`, children: [
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { children: "Value Selector: " }),
          /* @__PURE__ */ o("input", { type: "text", value: l || "", onChange: (b) => u(b.target.value) }),
          /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Value to use in the html option element" }) })
          ] }),
          /* @__PURE__ */ o("p", { children: " * Required" })
        ] }),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { children: "Display Text Selector: " }),
          /* @__PURE__ */ o("input", { type: "text", value: d || "", onChange: (b) => h(b.target.value) }),
          /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Text to use in the html option element. If none is applied value selector will be used." }) })
          ] }),
          /* @__PURE__ */ o("p", { children: " * Optional" })
        ] })
      ] }),
      r && /* @__PURE__ */ f("div", { className: `w-50${r ? " border border-dark p-1 m-1" : ""}`, children: [
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { children: "Subgroup Value Selector: " }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "text",
              value: c || "",
              onChange: (b) => D(b.target.value)
            }
          ),
          /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Value to use in the html option element" }) })
          ] }),
          /* @__PURE__ */ o("p", { children: " * Required" })
        ] }),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { children: "Subgroup Display Text Selector: " }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "text",
              value: v || "",
              onChange: (b) => S(b.target.value)
            }
          ),
          /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Text to use in the html option element. If none is applied value selector will be used." }) })
          ] }),
          /* @__PURE__ */ o("p", { children: " * Optional" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o("div", { className: "d-flex justify-content-end mt-2", children: /* @__PURE__ */ o(
      "button",
      {
        className: "btn btn-primary mt-2",
        onClick: () => t(i, l, d, n, a),
        children: "Save"
      }
    ) })
  ] });
}, Ol = ({
  filter: e,
  config: r,
  isDashboard: t = !1,
  updateFilterProp: n
}) => {
  const a = e == null ? void 0 : e.subGrouping, i = Object.keys(r.datasets), s = [];
  i.map((c) => {
    const D = r.datasets[c].data;
    D && Object.keys(D[0]).forEach(
      (S) => s.push({
        datasetKey: c,
        columnName: S
      })
    );
  });
  const l = [], u = (c, D) => {
    s.forEach((v) => {
      v.datasetKey === c && v.columnName !== D && l.push(v.columnName);
    });
  }, d = (c) => {
    const D = c.selectedOptions[0].dataset.set, v = c.value;
    n("columnName", v), u(D, v);
  }, h = (c) => {
    const D = c.selectedOptions[0].dataset.set, v = c.value, S = e.values.reduce((p, y) => {
      const T = x.uniq(
        r.datasets[D].data.map((g) => g[e.columnName] === y ? g[v] : "").filter((g) => g !== "")
      ).sort();
      return p[y] = {
        values: T,
        orderedValues: T
      }, p;
    }, {}), O = {
      ...a,
      columnName: v,
      valuesLookup: S
    };
    n("subGrouping", O);
  };
  return /* @__PURE__ */ f("div", { className: "nesteddropdown-editor", children: [
    !t && /* @__PURE__ */ o(
      we,
      {
        label: "Label",
        value: e.key,
        updateField: (c, D, v, S) => n("key", S)
      }
    ),
    /* @__PURE__ */ f("label", { children: [
      /* @__PURE__ */ f("div", { className: "edit-label column-heading mt-2", children: [
        "Filter Grouping",
        /* @__PURE__ */ o("span", {})
      ] }),
      /* @__PURE__ */ f("select", { value: e.columnName, onChange: (c) => d(c.target), children: [
        /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
        s == null ? void 0 : s.map((c) => /* @__PURE__ */ o(
          "option",
          {
            value: c.columnName,
            "data-set": c.datasetKey,
            children: c.columnName
          },
          `filter_${c.datasetKey}_${c.columnName} `
        ))
      ] })
    ] }),
    /* @__PURE__ */ f("label", { children: [
      /* @__PURE__ */ f("div", { className: "edit-label column-heading mt-2", children: [
        "Filter SubGrouping",
        /* @__PURE__ */ o("span", {})
      ] }),
      /* @__PURE__ */ f(
        "select",
        {
          value: (a == null ? void 0 : a.columnName) ?? "",
          onChange: (c) => {
            h(c.target);
          },
          children: [
            /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
            s.map((c) => {
              if (c.columnName !== e.columnName)
                return /* @__PURE__ */ o(
                  "option",
                  {
                    value: c.columnName,
                    "data-set": c.datasetKey,
                    children: c.columnName
                  },
                  `subFilter_${c.datasetKey}_${c.columnName} `
                );
            })
          ]
        }
      )
    ] })
  ] });
}, Il = ({
  filter: e,
  filterIndex: r,
  config: t,
  updateFilterProp: n,
  toggleNestedQueryParameters: a
}) => {
  var C, _, L, B, K, A, q, ee;
  const [i, s] = m.useState([]), [l, u] = m.useState(!1), d = new Pe(), h = Object.values(ge), c = (t.dashboard.sharedFilters || []).filter(({ key: w, type: $ }) => w !== e.key && $ !== "datafilter").map(({ key: w }) => w), D = wt(t.rows), v = (w, $) => {
    var M;
    let z = ((M = w.general) == null ? void 0 : M.title) || w.title || $;
    return w.visualizationType === "markup-include" && (z = w.contentEditor.title || $), z;
  }, [S, O] = m.useMemo(() => {
    const w = {}, $ = Object.keys(t.visualizations).filter((Y) => {
      const ne = D[Y];
      if (!ne)
        return !1;
      const De = t.visualizations[Y];
      if (De.type === "dashboardFilters")
        return !1;
      const Qe = v(De, Y);
      w[Y] = Qe;
      const Ze = De.usesSharedFilter, Ke = ne.row, Ye = t.rows[Ke].dataKey;
      return e.setBy !== Y && !Ze && !Ye;
    }), z = [];
    t.rows.forEach((Y, ne) => {
      Y.dataKey && (w[ne] = `Row ${ne + 1}`, z.push(ne));
    });
    const M = z.filter((Y) => !e.usedBy || e.usedBy.indexOf(Y.toString()) === -1);
    return [w, [...$, ...M]];
  }, [t.visualizations, e.usedBy, e.setBy, D]), p = m.useMemo(() => {
    var w;
    return e.subGrouping ? !!(e.setByQueryParameter && ((w = e.subGrouping) != null && w.setByQueryParameter)) : !!e.setByQueryParameter;
  }, [t, r]), y = async () => {
    if (!t.dashboard.sharedFilters.some((z) => z.type === "datafilter"))
      return;
    const w = {}, $ = Object.keys(t.datasets);
    for (let z = 0; z < $.length; z++) {
      const M = $[z];
      let Y = t.datasets[M];
      if (!Y.data && Y.dataUrl) {
        u(!0);
        let ne = await We(Y.dataUrl);
        if (Y.dataDescription)
          try {
            ne = d.autoStandardize(ne), ne = d.developerStandardize(ne, Y.dataDescription);
          } catch (De) {
            console.error(De);
          } finally {
            Y.data = ne;
          }
      }
      Y.data && Y.data.forEach((ne) => {
        Object.keys(ne).forEach((De) => {
          w[De] = !0;
        });
      });
    }
    u(!1), s(Object.keys(w));
  };
  m.useEffect(() => {
    y();
  }, [t.datasets, t.dashboard.sharedFilters]);
  const T = (w, $, z, M, Y) => {
    n("apiFilter", b ? {
      apiEndpoint: w,
      valueSelector: $,
      textSelector: z,
      subgroupValueSelector: M,
      subgroupTextSelector: Y
    } : {
      apiEndpoint: w,
      valueSelector: $,
      textSelector: z
    }), E.actions.toggleOverlay(!1);
  }, g = (w) => {
    const $ = t.dashboard.sharedFilters.filter(
      (z, M) => z.key === w && r !== M
    );
    n("key", $.length ? w + ` (${$.length})` : w);
  }, b = e.filterStyle === ge.nestedDropdown, { overlay: E } = Te(), I = (w, $, z) => {
    E.actions.openOverlay(
      /* @__PURE__ */ o(ve, { children: /* @__PURE__ */ o(ve.Content, { children: /* @__PURE__ */ o(El, { filter: w, isNestedDropdown: $, updateAPIFilter: z }) }) })
    );
  }, F = (w) => {
    n("type", w), w === "datafilter" && y();
  };
  return /* @__PURE__ */ f(G, { children: [
    l && /* @__PURE__ */ o(mt, {}),
    /* @__PURE__ */ f("label", { children: [
      /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Filter Type: " }),
      /* @__PURE__ */ f(
        "select",
        {
          defaultValue: e.type || "",
          onChange: (w) => F(w.target.value),
          disabled: !!e.type,
          children: [
            /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
            /* @__PURE__ */ o("option", { value: "urlfilter", children: "URL" }),
            /* @__PURE__ */ o("option", { value: "datafilter", children: "Data" })
          ]
        }
      )
    ] }),
    e.type !== void 0 && /* @__PURE__ */ f(G, { children: [
      /* @__PURE__ */ f("label", { children: [
        /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Filter Style: " }),
        /* @__PURE__ */ o(
          "select",
          {
            value: e.filterStyle || ge.dropdown,
            onChange: (w) => n("filterStyle", w.target.value),
            children: h.map((w) => /* @__PURE__ */ o("option", { value: w, children: w }, `filter-style-select-item-${w}`))
          }
        )
      ] }),
      e.filterStyle === ge.dropdown && /* @__PURE__ */ f("label", { children: [
        /* @__PURE__ */ o("span", { className: "me-1", children: "Show Dropdown" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "checkbox",
            checked: e.showDropdown,
            onChange: (w) => {
              n("showDropdown", !e.showDropdown);
            }
          }
        )
      ] }),
      /* @__PURE__ */ o(
        we,
        {
          label: "Label",
          value: e.key,
          updateField: (w, $, z, M) => {
            g(M);
          }
        }
      ),
      e.filterStyle === ge.multiSelect && /* @__PURE__ */ o(
        we,
        {
          label: "Select Limit",
          value: e.selectLimit,
          updateField: (w, $, z, M) => n("selectLimit", M),
          type: "number",
          tooltip: /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "The maximum number of items that can be selected." }) })
          ] })
        }
      ),
      e.type === "urlfilter" && /* @__PURE__ */ f(G, { children: [
        !pt(t.visualizations) && /* @__PURE__ */ f(G, { children: [
          /* @__PURE__ */ f("label", { children: [
            /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "URL to Filter: " }),
            /* @__PURE__ */ f(
              "select",
              {
                defaultValue: e.datasetKey || "",
                onChange: (w) => n("datasetKey", w.target.value),
                children: [
                  /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                  Object.keys(t.datasets).map((w) => t.datasets[w].dataUrl ? /* @__PURE__ */ o("option", { value: w, children: t.datasets[w].dataUrl }, w) : null)
                ]
              }
            )
          ] }),
          /* @__PURE__ */ f("label", { children: [
            /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Filter By: " }),
            /* @__PURE__ */ f(
              "select",
              {
                defaultValue: e.filterBy || "",
                onChange: (w) => n("filterBy", w.target.value),
                children: [
                  /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                  /* @__PURE__ */ o("option", { value: "Query String", children: "Query String" }, "query-string"),
                  /* @__PURE__ */ o("option", { value: "File Name", children: "File Name" }, "file-name")
                ]
              }
            )
          ] }),
          e.filterBy === "File Name" && /* @__PURE__ */ f(G, { children: [
            /* @__PURE__ */ o(
              we,
              {
                label: "File Name: ",
                value: e.fileName || "",
                updateField: (w, $, z, M) => n("fileName", M),
                tooltip: /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
                  /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                  /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Add ${query} to replace the filename with the active dropdown value." }) })
                ] })
              }
            ),
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ f("span", { className: "edit-label column-heading", children: [
                "White Space Replacments",
                /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
                  /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                  /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Set how whitespace characters will be handled in the file request" }) })
                ] })
              ] }),
              /* @__PURE__ */ f(
                "select",
                {
                  defaultValue: e.whitespaceReplacement || "Keep Spaces",
                  onChange: (w) => n("whitespaceReplacement", w.target.value),
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
          we,
          {
            label: "Query string parameter",
            value: e.queryParameter,
            updateField: (w, $, z, M) => n("queryParameter", M)
          }
        ),
        /* @__PURE__ */ f("div", { className: "bg-secondary-subtle p-2 my-2", children: [
          /* @__PURE__ */ f("label", { children: [
            /* @__PURE__ */ o("span", { children: "API Endpoint: " }),
            /* @__PURE__ */ o("textarea", { value: ((C = e == null ? void 0 : e.apiFilter) == null ? void 0 : C.apiEndpoint) || "", disabled: !0 }),
            b && /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Your API Endpoint should return both value selector values." }) })
            ] })
          ] }),
          /* @__PURE__ */ f("div", { className: b ? "border border-dark p-1 my-1" : "", children: [
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o("span", { children: "Value Selector: " }),
              /* @__PURE__ */ o("input", { type: "text", value: ((_ = e == null ? void 0 : e.apiFilter) == null ? void 0 : _.valueSelector) || "", disabled: !0 }),
              /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Value to use in the html option element" }) })
              ] }),
              /* @__PURE__ */ o("div", { children: " * Required" })
            ] }),
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o("span", { children: "Display Text Selector: " }),
              /* @__PURE__ */ o("input", { type: "text", value: ((L = e == null ? void 0 : e.apiFilter) == null ? void 0 : L.textSelector) || "", disabled: !0 }),
              /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Text to use in the html option element. If none is applied value selector will be used." }) })
              ] }),
              /* @__PURE__ */ o("div", { children: " * Optional" })
            ] })
          ] }),
          b && /* @__PURE__ */ f("div", { className: b ? "border border-dark p-1 my-1" : "", children: [
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o("span", { children: "Subgroup Value Selector: " }),
              /* @__PURE__ */ o("input", { value: ((B = e == null ? void 0 : e.apiFilter) == null ? void 0 : B.subgroupValueSelector) || "", disabled: !0 }),
              /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Value to use in the html option element" }) })
              ] }),
              /* @__PURE__ */ o("div", { children: " * Required" })
            ] }),
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o("span", { children: "Subgroup Display Text Selector: " }),
              /* @__PURE__ */ o("input", { value: ((K = e == null ? void 0 : e.apifilter) == null ? void 0 : K.subgroupTextSelector) || "", disabled: !0 }),
              /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Text to use in the html option element. If none is applied value selector will be used." }) })
              ] }),
              /* @__PURE__ */ o("div", { children: " * Optional" })
            ] })
          ] }),
          /* @__PURE__ */ o(
            "button",
            {
              onClick: () => I(e, b, T),
              className: "btn btn-primary mt-2",
              children: "Edit API Values"
            }
          )
        ] }),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o(
            "input",
            {
              type: "checkbox",
              checked: p,
              "aria-label": "Create query parameters",
              disabled: !((A = e.apiFilter) != null && A.valueSelector) && !((q = e.apiFilter) != null && q.subgroupValueSelector),
              onChange: (w) => a(w.target.checked)
            }
          ),
          /* @__PURE__ */ f("span", { children: [
            " ",
            "Create query parameters",
            " ",
            /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Query parameters will be added to the URL which correspond to the respective value selector." }) })
            ] })
          ] })
        ] }),
        !!c.length && /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { className: "edit-label column-heading mt-1", children: "Parent Filter(s): " }),
          /* @__PURE__ */ o(
            _t,
            {
              label: "Parent Filter(s): ",
              options: c.map((w) => ({ value: w, label: w })),
              fieldName: "parents",
              selected: e.parents,
              updateField: (w, $, z, M) => {
                n("parents", M);
              }
            }
          )
        ] }),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ f("span", { className: "edit-label column-heading mt-1", children: [
            "Used By: (optional)",
            /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Select if you would like specific visualizations or rows to use this filter. Otherwise the filter will be added to all api requests." }) })
            ] })
          ] }),
          /* @__PURE__ */ o(
            _t,
            {
              options: O.map((w) => ({
                value: w,
                label: S[w]
              })),
              fieldName: "usedBy",
              selected: e.usedBy,
              updateField: (w, $, z, M) => {
                n("usedBy", M);
              }
            }
          )
        ] }),
        /* @__PURE__ */ o(
          we,
          {
            label: "Reset Label: ",
            value: e.resetLabel || "",
            updateField: (w, $, z, M) => n("resetLabel", M)
          }
        )
      ] }),
      e.type === "datafilter" && /* @__PURE__ */ f(G, { children: [
        e.filterStyle !== ge.nestedDropdown ? /* @__PURE__ */ f(G, { children: [
          /* @__PURE__ */ f("label", { children: [
            /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Filter: " }),
            /* @__PURE__ */ f(
              "select",
              {
                value: e.columnName,
                onChange: (w) => {
                  n("columnName", w.target.value);
                },
                children: [
                  /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                  i.map((w) => /* @__PURE__ */ o("option", { value: w, children: w }, `filter-column-select-item-${w}`))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o(
            nt,
            {
              value: e.defaultValue,
              options: e.resetLabel ? [e.resetLabel, ...t.dashboard.sharedFilters[r].values] : t.dashboard.sharedFilters[r].values,
              updateField: (w, $, z, M) => n("defaultValue", M),
              label: "Filter Default Value",
              initial: "Select"
            }
          ),
          /* @__PURE__ */ o(
            nt,
            {
              value: e.order || "asc",
              options: ia,
              updateField: (w, $, z, M) => n("order", M),
              label: "Filter Order"
            }
          ),
          e.order === "cust" && /* @__PURE__ */ o(
            oa,
            {
              orderedValues: e.orderedValues || e.values,
              handleFilterOrder: (w, $) => {
                const z = [...e.values], [M] = z.splice(w, 1);
                z.splice($, 0, M), n("orderedValues", z);
              }
            }
          ),
          /* @__PURE__ */ f("label", { children: [
            /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Show Dropdown" }),
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                defaultChecked: e.showDropdown === !0,
                onChange: (w) => {
                  n("showDropdown", !e.showDropdown);
                }
              }
            )
          ] })
        ] }) : /* @__PURE__ */ f(G, { children: [
          /* @__PURE__ */ o(
            Ol,
            {
              filter: e,
              updateFilterProp: (w, $) => {
                n(w, $);
              },
              isDashboard: !0,
              config: t
            }
          ),
          /* @__PURE__ */ f("label", { children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                checked: p,
                "aria-label": "Create query parameters",
                disabled: !e.columnName || !((ee = e.subGrouping) != null && ee.columnName),
                onChange: (w) => a(w.target.checked)
              }
            ),
            /* @__PURE__ */ f("span", { children: [
              " ",
              "Create query parameters",
              " ",
              /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Query parameters will be added to the URL which correspond to the respective column name." }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o(
          nt,
          {
            label: "Set By:",
            value: e.setBy,
            options: Object.values(t.visualizations).filter((w) => w.type !== "dashboardFilters").map((w) => ({
              value: w.uid,
              label: v(w, w.type)
            })),
            updateField: (w, $, z, M) => n("setBy", M),
            initial: "- Select Option -"
          }
        ),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ f("span", { className: "edit-label column-heading mt-1", children: [
            "Used By: (optional)",
            /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Select if you would like specific visualizations or rows to use this filter. Otherwise the filter will be added to all api requests." }) })
            ] })
          ] }),
          /* @__PURE__ */ o(
            _t,
            {
              options: O.map((w) => ({
                value: w,
                label: S[w]
              })),
              fieldName: "usedBy",
              selected: e.usedBy,
              updateField: (w, $, z, M) => {
                n("usedBy", M);
              }
            }
          )
        ] }),
        /* @__PURE__ */ o(
          we,
          {
            label: "Reset Label: ",
            value: e.resetLabel || "",
            updateField: (w, $, z, M) => n("resetLabel", M)
          }
        ),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Parent Filter: " }),
          /* @__PURE__ */ f(
            "select",
            {
              value: e.parents || [],
              onChange: (w) => {
                n("parents", w.target.value);
              },
              children: [
                /* @__PURE__ */ o("option", { value: "", children: "Select a filter" }),
                t.dashboard.sharedFilters && t.dashboard.sharedFilters.map((w) => {
                  if (w.key !== e.key)
                    return /* @__PURE__ */ o("option", { children: w.key }, w.key);
                })
              ]
            }
          )
        ] }),
        !b && /* @__PURE__ */ o(
          we,
          {
            label: "Default Value Set By Query String Parameter: ",
            value: e.setByQueryParameter || "",
            updateField: (w, $, z, M) => n("setByQueryParameter", M)
          }
        )
      ] })
    ] })
  ] });
}, _l = ({
  removeFilterCompletely: e,
  removeFilterFromViz: r,
  filterIndex: t
}) => {
  const { overlay: n } = Te(), { config: a } = m.useContext(se), i = Object.values(a.visualizations).filter((l) => {
    var u;
    return (u = l.sharedFilterIndexes) == null ? void 0 : u.map(Number).includes(Number(t));
  }).length > 1, s = i ? "This filter is used by multiple visualizations. You can either delete the filter from this visualization only or you can delete the filter completely, which will also remove it from other visualizations." : "Are you sure you want to delete this filter?";
  return /* @__PURE__ */ o(ve, { showClose: !0, children: /* @__PURE__ */ f(ve.Content, { children: [
    /* @__PURE__ */ o("p", { children: s }),
    i && /* @__PURE__ */ o(
      "button",
      {
        className: "btn btn-warning",
        onClick: () => {
          r(t), n == null || n.actions.toggleOverlay();
        },
        children: "Delete from Visualization"
      }
    ),
    /* @__PURE__ */ f(
      "button",
      {
        className: "btn btn-danger",
        onClick: () => {
          e(t), n == null || n.actions.toggleOverlay();
        },
        children: [
          "Delete",
          i ? " Completely" : ""
        ]
      }
    )
  ] }) });
}, Nl = (e, r) => {
  const t = /* @__PURE__ */ new Set();
  return (Object.values(r) || []).forEach((a) => {
    a == null || a.forEach((i) => {
      const s = i[e];
      if (s !== void 0) {
        const l = String(s).trim();
        t.add(l);
      }
    });
  }), Array.from(t);
}, kl = (e) => {
  var r;
  return e.type === "urlfilter" ? (r = e.apiFilter) == null ? void 0 : r.valueSelector : e.columnName;
}, qt = (e, r, t = []) => e == null ? void 0 : e.map((n, a) => {
  if (t.includes(a) || n.type === "urlfilter")
    return n;
  const i = x.cloneDeep(n), s = Nl(kl(n), r);
  if (i.values = s, s.length > 0) {
    const l = bn(i);
    if (l)
      i.active = l;
    else if (n.multiSelect) {
      const u = i.values, d = Array.isArray(i.active) ? i.active : [i.active];
      i.active = d.filter((h) => u.includes(h));
    } else {
      const u = e.find((h) => h.resetLabel), d = u ? u.resetLabel : i.active || i.values[0];
      i.active = i.defaultValue || d;
    }
  }
  return Sn(i);
}), Al = ({ vizConfig: e, updateConfig: r }) => {
  const { config: t, loadAPIFilters: n, data: a } = m.useContext(se), { overlay: i } = Te(), {
    dashboard: { sharedFilters: s },
    visualizations: l
  } = t, u = m.useContext(ce), d = m.useMemo(() => {
    var T;
    const y = t.visualizations[e.uid].sharedFilterIndexes.map(
      Number
    );
    return (T = t.dashboard.sharedFilters) == null ? void 0 : T.map(({ key: g }, b) => [b, g]).filter(([g]) => !y.includes(g)).map(([g, b]) => /* @__PURE__ */ o("option", { value: g, children: `${g} - ${b}` }, g));
  }, [t.visualizations, e.uid]), h = m.useState({}), [c, D] = m.useState(!1), v = (y, T, g) => {
    const b = x.cloneDeep(s), {
      apiEndpoint: E,
      valueSelector: I,
      textSelector: F,
      subgroupValueSelector: C,
      subgroupTextSelector: _
    } = s[T].apiFilter || {}, L = (g == null ? void 0 : g.apiEndpoint) !== E || (g == null ? void 0 : g.valueSelector) !== I || (g == null ? void 0 : g.textSelector) !== F || (g == null ? void 0 : g.subgroupValueSelector) !== C || (g == null ? void 0 : g.subgroupTextSelector) !== _;
    if (b[T][y] = g, y === "columnName") {
      b[T].subGrouping && delete b[T].subGrouping;
      const B = qt(b, a);
      u({ type: "SET_SHARED_FILTERS", payload: B });
    } else
      y === "filterStyle" ? (b[T] = {
        ...b[T],
        active: "",
        apiFilter: {
          apiEndpoint: "",
          subgroupValueSelector: "",
          textSelector: "",
          valueSelector: ""
        },
        filterStyle: g
      }, u({ type: "SET_SHARED_FILTERS", payload: b })) : y === "apiFilter" && g.apiEndpoint && g.valueSelector && L ? (s[T].filterStyle === ge.nestedDropdown && g.subgroupValueSelector && (b[T].subGrouping = {
        active: "",
        columnName: "",
        setByQueryParameter: "",
        valuesLookup: {}
      }), n(b, {})) : (Sn(b[T]), u({ type: "SET_SHARED_FILTERS", payload: b }));
  }, S = (y, T) => {
    const g = x.cloneDeep(s), b = g[y], E = b.type === "urlfilter", I = E ? b.apiFilter.valueSelector : b.columnName, F = E ? b.apiFilter.subgroupValueSelector : b.subGrouping.columnName;
    b.setByQueryParameter = T ? I : void 0, b.subGrouping.setByQueryParameter = T ? F : void 0, u({ type: "SET_SHARED_FILTERS", payload: g });
  }, O = (y) => {
    const [T, g] = la(y, s, l), b = { ...t.dashboard, sharedFilters: T };
    u({ type: "SET_CONFIG", payload: { dashboard: b, visualizations: g } });
  }, p = () => {
    const y = x.cloneDeep(s) || [], g = { key: "New Dashboard Filter " + (y.length + 1), showDropdown: !0, values: [] };
    u({ type: "SET_SHARED_FILTERS", payload: [...y, g] }), r({ ...e, sharedFilterIndexes: [...e.sharedFilterIndexes, y.length] });
  };
  return /* @__PURE__ */ f(fa, { allowZeroExpanded: !0, children: [
    /* @__PURE__ */ f(ar, { children: [
      /* @__PURE__ */ o(ir, { children: /* @__PURE__ */ o(or, { children: "General" }) }),
      /* @__PURE__ */ f(sr, { children: [
        /* @__PURE__ */ o(
          nt,
          {
            value: e.filterBehavior,
            label: "Filter Behavior",
            updateField: (y, T, g, b) => {
              r({ ...e, filterBehavior: b });
            },
            options: ["Apply Button", "Filter Change"],
            tooltip: /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.' }) })
            ] })
          }
        ),
        e.filterBehavior === "Apply Button" && /* @__PURE__ */ o(
          we,
          {
            label: "Apply Filter Button Text",
            maxLength: 20,
            value: e.applyFiltersButtonText,
            updateField: (y, T, g, b) => {
              r({ ...e, applyFiltersButtonText: b });
            }
          }
        ),
        e.filterBehavior === "Filter Change" && /* @__PURE__ */ o(
          rt,
          {
            label: "Auto Load",
            value: e.autoLoad,
            updateField: (y, T, g, b) => {
              r({ ...e, autoLoad: b });
            },
            tooltip: /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ o("p", { children: "Check if you would like for all URL filters to automatically select a value when a parent filter is changed." }) })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ f(ar, { children: [
      /* @__PURE__ */ o(ir, { children: /* @__PURE__ */ o(or, { children: "Filters" }) }),
      /* @__PURE__ */ f(sr, { children: [
        e.sharedFilterIndexes.map((y) => {
          const T = s[y];
          return /* @__PURE__ */ o(
            sa,
            {
              fieldName: T.key,
              fieldKey: y,
              fieldType: "Dashboard Filter",
              controls: h,
              deleteField: () => {
                i == null || i.actions.openOverlay(
                  /* @__PURE__ */ o(
                    _l,
                    {
                      removeFilterCompletely: O,
                      removeFilterFromViz: (g) => {
                        r({
                          ...e,
                          sharedFilterIndexes: e.sharedFilterIndexes.filter((b) => b !== g)
                        });
                      },
                      filterIndex: y
                    }
                  )
                );
              },
              children: /* @__PURE__ */ o(
                Il,
                {
                  filter: T,
                  filterIndex: y,
                  updateFilterProp: (g, b) => {
                    v(g, y, b);
                  },
                  toggleNestedQueryParameters: (g) => {
                    S(y, g);
                  },
                  config: t
                }
              )
            },
            T.key + y
          );
        }),
        /* @__PURE__ */ o("button", { onClick: p, className: "btn btn-primary full-width", children: "Add Filter" }),
        c ? /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ f("span", { className: "edit-label column-heading", children: [
            "Select Existing Dashboard Filter",
            /* @__PURE__ */ f(N, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(N.Target, { children: /* @__PURE__ */ o(R, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(N.Content, { children: /* @__PURE__ */ f("p", { children: [
                "This feature is indentended to support legacy functionality. Be advised that any change to the filter in this editor will reflect on the whole dashboard.",
                " "
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ o(
            "select",
            {
              value: "",
              onChange: (y) => {
                r({
                  ...e,
                  sharedFilterIndexes: [...e.sharedFilterIndexes, y.target.value]
                }), D(!1);
              },
              children: [
                /* @__PURE__ */ o("option", { value: "", children: "Select" }, "select"),
                ...d
              ]
            }
          )
        ] }) : /* @__PURE__ */ o("button", { onClick: () => D(!0), className: "btn btn-primary full-width mt-2", children: "Add Existing Dashboard Filter" })
      ] })
    ] })
  ] });
}, Fl = (e) => e.replace(/"/g, ""), Ll = (e) => String(e).match(/^[-]?[0-9\.]+$/), Wt = (e, r) => {
  const t = e.includes("?");
  return r.filter(({ value: n }) => n !== "").map(({ key: n, value: a }, i) => {
    const s = i === 0 && !t ? "?" : "&", l = n.match(/\$.*/);
    return Ll(a) || l ? s + n + "=" + a : s + n + `="${Fl(a)}"`;
  }).join("");
}, Pl = (e, r, t = []) => e.reduce((n, a, i) => {
  const s = a, l = t.includes(i);
  return r[s] && !l ? n[s] = r[s] : n[s] = void 0, n;
}, {}), Yn = (e, r) => {
  const t = r.filter((n) => {
    var a;
    return (a = e.parents) == null ? void 0 : a.includes(n.key);
  });
  return (t || []).length ? t.flatMap((n) => {
    var a;
    if (n.filterStyle === ge.nestedDropdown) {
      const i = n.apiFilter.valueSelector || "", s = n.apiFilter.subgroupValueSelector || "", l = n.queuedActive ? n.queuedActive[0] : n.active || "", u = n.queuedActive ? n.queuedActive[1] : ((a = n.subGrouping) == null ? void 0 : a.active) || "";
      return [
        { key: i, value: l },
        { key: s, value: u }
      ];
    } else {
      const i = n.queryParameter || n.apiFilter.valueSelector || "", s = n.queuedActive || n.active || "";
      return Array.isArray(s) ? s.map((l) => ({ key: i, value: l.toString() })) : [{ key: i, value: s.toString() }];
    }
  }) : null;
}, Xn = (e) => e == null ? void 0 : e.some(({ value: r }) => r === ""), xl = (e, r) => {
  const { textSelector: t, valueSelector: n, subgroupTextSelector: a, subgroupValueSelector: i } = r;
  if (i) {
    const s = {};
    return e.forEach((l) => {
      s[l[n]] || (s[l[n]] = { text: l[t || n], value: l[n], subOptions: [] }), s[l[n]].subOptions.push({ text: l[a], value: l[i] });
    }), Object.values(s);
  }
  return e.map((s) => ({ text: s[t || n], value: s[n] }));
}, Rl = (e, r) => {
  const t = {};
  return e.forEach((n, a) => {
    var d;
    const i = (d = n.apiFilter) == null ? void 0 : d.apiEndpoint;
    if (!i)
      return;
    const s = i;
    if (r[s])
      return;
    const l = Yn(n, e);
    if (Xn(l))
      return;
    const u = i + (l ? Wt(i, l) : "");
    t[u] = [s, a];
  }), t;
}, Ml = (e, r) => {
  var s, l;
  const t = Ve(r == null ? void 0 : r.setByQueryParameter), n = (s = e[0]) == null ? void 0 : s.value, a = (l = e[0]) == null ? void 0 : l.subOptions[0].value, i = Ve(r == null ? void 0 : r.subGrouping.setByQueryParameter);
  if (!r.active)
    r.active = t || n, r.subGrouping.active = i || a;
  else {
    const u = e.find((d) => d.value === r.active);
    if (r.active = u ? u.value : n, u) {
      const d = u.subOptions.find((h) => h.value === r.subGrouping.active);
      r.subGrouping.active = (d == null ? void 0 : d.value) || a;
    } else
      r.subGrouping.active = a;
  }
}, Vl = (e, r) => {
  var s;
  const t = Ve(r == null ? void 0 : r.setByQueryParameter), n = Array.isArray(t) ? t : t == null ? void 0 : t.split(","), a = t ? n : [(s = e[0]) == null ? void 0 : s.value], i = (r.active || []).filter(
    (l) => e.find((u) => u.value === l)
  );
  r.active = i.length ? i : a;
}, nn = (e, r, t, n) => {
  var u, d;
  const a = x.cloneDeep(t), i = x.cloneDeep(a[e]), s = Ve(i == null ? void 0 : i.setByQueryParameter), l = i.setByQueryParameter ? s !== void 0 : !1;
  if (!n.length || !(r != null && r.length)) {
    if (l && i.apiFilter) {
      const h = Ve((u = i.subGrouping) == null ? void 0 : u.setByQueryParameter), c = h !== void 0;
      i.queuedActive = c ? [s, h] : s;
    }
    return i;
  }
  if (n.includes(e) || l) {
    const h = a.filter((D) => {
      var v;
      return (v = i.parents) == null ? void 0 : v.includes(D.key);
    }), c = h.some((D) => !(D.active || D.queuedActive));
    if (h && c)
      return i;
    if (i.filterStyle === ge.multiSelect)
      Vl(r, i);
    else if (i.filterStyle === ge.nestedDropdown)
      Ml(r, i);
    else {
      const D = (d = r[0]) == null ? void 0 : d.value;
      if (!i.active)
        i.active = s || D;
      else {
        const v = r.find((S) => S.value == i.active);
        i.active = v ? v.value : D;
      }
    }
  }
  return i;
};
const Bl = (e, r) => {
  const t = Object.values(r).flat(), n = e.map((i, s) => i.type === "datafilter" && i.parents ? s : -1).filter((i) => i !== -1);
  if (n.length === 0)
    return e;
  const a = x.cloneDeep(e);
  return n.forEach((i) => {
    const s = e[i], l = e.find(
      (u) => String(s.parents) === String(u.key)
    );
    if (l) {
      const u = t.filter((h) => {
        var c;
        return (c = l.active) == null ? void 0 : c.includes(h[l.columnName]);
      }), d = x.uniq(u.map((h) => h[s.columnName]).filter(Boolean));
      if (d.length > 0) {
        const c = s.filterStyle === "multi-select" ? d : s.active ? s.active : s.defaultValue ? s.defaultValue : d[0];
        a[i] = {
          ...s,
          values: d,
          active: c
        };
      }
    }
  }), a;
}, Jn = ({
  apiFilterDropdowns: e,
  visualizationConfig: r,
  setConfig: t,
  currentViewport: n,
  isEditor: a = !1
}) => {
  var g, b;
  const i = m.useContext(se), { config: s, reloadURLData: l, loadAPIFilters: u, setAPIFilterDropdowns: d, setAPILoading: h } = i, c = m.useContext(ce), D = (E) => {
    E.preventDefault();
    const I = x.cloneDeep(i.config.dashboard), F = Object.values(i.config.visualizations).filter((_) => _.type === "dashboardFilters").reduce((_, L) => L.autoLoad ? _ : [..._, L.sharedFilterIndexes], []);
    if (!I.sharedFilters.some((_, L) => F.includes(L) ? !_.active && !_.queuedActive : !1)) {
      if (pt(i.config.visualizations)) {
        const _ = Zt();
        let L = !1;
        I.sharedFilters.forEach((B) => {
          B.queuedActive && Ia(B), B.setByQueryParameter && _[B.setByQueryParameter] !== B.active && (_[B.setByQueryParameter] = Array.isArray(B.active) ? B.active.join(",") : B.active, L = !0);
        }), L && Dn(_);
      }
      h(!0), c({ type: "SET_SHARED_FILTERS", payload: I.sharedFilters }), c({ type: "SET_FILTERED_DATA", payload: qe(x.cloneDeep(i)) }), u(I.sharedFilters, e).then((_) => {
        l(_);
      }).catch((_) => {
        console.error(_);
      });
    }
  }, v = (E, I) => {
    const F = x.cloneDeep(s);
    let [C, _] = Cl(
      E,
      I,
      F.dashboard.sharedFilters,
      r
    );
    if (c({ type: "SET_SHARED_FILTERS", payload: C }), pt(s.visualizations)) {
      const L = r.autoLoad, B = F.dashboard.sharedFilters.some((q) => !q.active), K = C.filter((q) => q.apiFilter).map((q) => q.apiFilter.apiEndpoint), A = Pl(
        K,
        e,
        _
      );
      L && !B ? (d(A), u(C, A).then((q) => {
        l(q);
      })) : (C[E].queuedActive = I, c({ type: "SET_DATA", payload: {} }), c({ type: "SET_FILTERED_DATA", payload: {} }), d(A), u(C, A));
    } else if (C[E].type === "urlfilter" && C[E].apiFilter)
      l(C);
    else {
      const L = x.cloneDeep(i);
      L.config.dashboard.sharedFilters = C;
      const B = qe(L);
      c({ type: "SET_FILTERED_DATA", payload: B }), c({ type: "SET_SHARED_FILTERS", payload: C });
    }
  }, [S, O] = m.useState(!0), p = () => {
    O(!S), t({
      ...r,
      showEditorPanel: !S
    });
  }, y = (g = r == null ? void 0 : r.sharedFilterIndexes) == null ? void 0 : g.map(Number).map((E) => s.dashboard.sharedFilters[E]), T = y.length ? y.every((E) => E.showDropdown === !1) : !1;
  return T && !a ? /* @__PURE__ */ o(G, {}) : /* @__PURE__ */ f(ke.VisualizationWrapper, { config: r, isEditor: a, currentViewport: n, children: [
    a && /* @__PURE__ */ o(
      ke.Sidebar,
      {
        displayPanel: S,
        isDashboard: !0,
        title: "Configure Dashboard Filters",
        onBackClick: p,
        children: /* @__PURE__ */ o(Al, { updateConfig: t, vizConfig: r })
      }
    ),
    !T && /* @__PURE__ */ o(ke.Responsive, { isEditor: a, children: /* @__PURE__ */ o(
      "div",
      {
        className: `${a ? " is-editor" : ""} cove-component__content col-12 cove-dashboard-filters-container`,
        children: /* @__PURE__ */ o(
          Na,
          {
            show: (b = r == null ? void 0 : r.sharedFilterIndexes) == null ? void 0 : b.map(Number),
            filters: Bl(s.dashboard.sharedFilters, i.data) || [],
            apiFilterDropdowns: e,
            handleOnChange: v,
            showSubmit: r.filterBehavior === Kn.Apply && !r.autoLoad,
            applyFilters: D,
            applyFiltersButtonText: r.applyFiltersButtonText
          }
        )
      }
    ) })
  ] });
}, $l = new Pe(), ea = (e, r, t) => {
  var l;
  const n = x.cloneDeep(t.visualizations[e]), a = (l = t.datasets[n.dataKey]) == null ? void 0 : l.data, i = a != null && a.length ? Object.keys(a[0]) : [], s = (Gt(t.dashboard, r) || []).filter(
    (u) => i.includes(u.columnName)
  );
  return s.length && (n.formattedData = Be(s, a)), n.data = a, n;
}, ta = (e, r, t, n, a) => {
  if (r === void 0)
    return {};
  const i = x.cloneDeep(t.visualizations[e]), s = t.rows[r];
  if (s.footnotesId && s.footnotesId === e)
    return ea(e, r, t);
  if (s != null && s.dataKey && Object.assign(i, x.pick(s, ["dataKey", "dataDescription", "formattedData", "data"])), i.table && t.dashboard.sharedFilters.length) {
    const u = t.dashboard.sharedFilters.reduce((d, h) => {
      var c, D, v;
      if (!((c = h.usedBy) != null && c.length) || (D = h.usedBy) != null && D.includes(e)) {
        const S = h.apiFilter, O = (S == null ? void 0 : S.textSelector) || (S == null ? void 0 : S.valueSelector) || h.columnName;
        d.push(O);
        const p = (S == null ? void 0 : S.subgroupTextSelector) || (S == null ? void 0 : S.subgroupValueSelector) || ((v = h.subGrouping) == null ? void 0 : v.columnName);
        p && d.push(p);
      }
      return d;
    }, []);
    i.table.sharedFilterColumns = u;
  }
  i.formattedData && (i.originalFormattedData = i.formattedData);
  const l = (a == null ? void 0 : a[r]) ?? (a == null ? void 0 : a[e]);
  if (l)
    i.data = l || [], i.formattedData && (i.formattedData = i.data);
  else {
    const u = i.dataKey || "backwards-compatibility";
    i.data = n[u] || [], i.formattedData && (i.formattedData = $l.developerStandardize(i.data, i.dataDescription) || i.data);
  }
  return i;
}, zl = ({ config: e, updateField: r }) => {
  var d, h, c, D, v, S;
  const t = () => {
    const O = [...e.staticFootnotes || [], { text: "Add Footnote Text" }];
    r(null, null, "staticFootnotes", O);
  }, n = (O, p) => {
    const y = x.cloneDeep(e.staticFootnotes);
    y[O] = p, r(null, null, "staticFootnotes", y);
  }, a = (O) => {
    const p = x.cloneDeep(e.staticFootnotes);
    p.splice(O, 1), r(null, null, "staticFootnotes", p);
  }, i = (O) => [["", "--Select--"]].concat(O.map((p) => [p, p])), s = e.datasets || {}, l = e.dataKey ? i(Object.keys(((h = (d = s[e.dataKey]) == null ? void 0 : d.data) == null ? void 0 : h[0]) || {})) : [], u = i(Object.keys(s));
  return /* @__PURE__ */ f(G, { children: [
    /* @__PURE__ */ o("em", { children: "Dynamic Footnotes" }),
    /* @__PURE__ */ f("div", { className: "row border p-2", children: [
      /* @__PURE__ */ o(
        Ie,
        {
          label: "Select a Footnote Dataset",
          value: e.dataKey,
          options: u,
          fieldName: "dataKey",
          updateField: r
        }
      ),
      e.dataKey && /* @__PURE__ */ f("div", { className: "p-3", children: [
        /* @__PURE__ */ o(
          Ie,
          {
            label: "Footnote Symbol Column",
            value: (c = e.dynamicFootnotes) == null ? void 0 : c.symbolColumn,
            options: l,
            section: "dynamicFootnotes",
            fieldName: "symbolColumn",
            updateField: r
          }
        ),
        /* @__PURE__ */ o(
          Ie,
          {
            label: "Footnote Text Column",
            value: (D = e.dynamicFootnotes) == null ? void 0 : D.textColumn,
            options: l,
            section: "dynamicFootnotes",
            fieldName: "textColumn",
            updateField: r
          }
        ),
        /* @__PURE__ */ o(
          Ie,
          {
            label: "Footnote Order Column",
            value: (v = e.dynamicFootnotes) == null ? void 0 : v.orderColumn,
            options: l,
            section: "dynamicFootnotes",
            fieldName: "orderColumn",
            updateField: r
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o("hr", {}),
    /* @__PURE__ */ o("em", { children: "Static Footnotes" }),
    (S = e.staticFootnotes) == null ? void 0 : S.map((O, p) => /* @__PURE__ */ f("div", { className: "row border p-2", children: [
      /* @__PURE__ */ f("div", { className: "col-8", children: [
        /* @__PURE__ */ o(
          Ie,
          {
            label: "Symbol",
            value: O.symbol,
            options: [["", "--Select--"], ..._a],
            fieldName: "symbol",
            updateField: (y, T, g, b) => n(p, { ...O, symbol: b })
          }
        ),
        " ",
        /* @__PURE__ */ o(
          we,
          {
            label: "Text",
            value: O.text,
            fieldName: "text",
            updateField: (y, T, g, b) => n(p, { ...O, text: b })
          }
        )
      ] }),
      /* @__PURE__ */ o("div", { className: "col-2 ms-4", children: /* @__PURE__ */ o("button", { className: "btn btn-danger p-1", onClick: () => a(p), children: "Delete" }) })
    ] }, p)),
    /* @__PURE__ */ o("button", { className: "btn btn-primary", onClick: t, children: "Add Static Footnote" })
  ] });
}, gt = ({
  visualizationKey: e,
  config: r,
  viewport: t,
  isEditor: n,
  updateConfig: a
}) => {
  const i = Qt(r, a);
  if (n)
    return /* @__PURE__ */ o(
      Zn,
      {
        component: gt,
        visualizationKey: e,
        visualizationConfig: r,
        updateConfig: a,
        type: "Footnotes",
        viewport: t,
        children: /* @__PURE__ */ o(zl, { config: r, updateField: i }, e)
      }
    );
  const s = m.useMemo(() => {
    const u = r.formattedData || r.data;
    if (u && r.dataKey && r.dynamicFootnotes) {
      const { symbolColumn: d, textColumn: h, orderColumn: c } = r.dynamicFootnotes, D = u.map((v) => x.pick(v, [d, h, c]));
      return D.sort((v, S) => v[c] - S[c]), D.map((v) => ({ symbol: v[d], text: v[h] }));
    }
    return [];
  }, [r.dynamicFootnotes, r.formattedData, r.data]), l = r.staticFootnotes || [];
  return /* @__PURE__ */ o(ka, { footnotes: [...s, ...l] });
}, Ul = ({
  allExpanded: e,
  fontSize: r,
  groupName: t,
  currentViewport: n,
  children: a
}) => {
  const [i, s] = m.useState(e), l = ["xs", "xxs"].includes(n) ? "13px" : `${ua}px`;
  return m.useEffect(() => {
    s(e);
  }, [e]), /* @__PURE__ */ f(G, { children: [
    /* @__PURE__ */ f(
      "div",
      {
        style: { fontSize: l },
        role: "button",
        className: `multi-visualiation-heading${i ? "" : " collapsed"} h4 my-0`,
        onClick: () => {
          s(!i);
        },
        tabIndex: 0,
        onKeyDown: (u) => {
          u.keyCode === 13 && s(!i);
        },
        children: [
          /* @__PURE__ */ o(R, { display: i ? "minus" : "plus", base: !0 }),
          t
        ]
      }
    ),
    i && a
  ] });
}, Hl = ({
  allExpanded: e,
  currentViewport: r,
  groupName: t,
  hideVisualization: n,
  row: a,
  children: i
}) => n ? /* @__PURE__ */ o(G, {}) : a.expandCollapseAllButtons ? /* @__PURE__ */ o("div", { className: "collapsable-multiviz-container", children: /* @__PURE__ */ o(
  Ul,
  {
    allExpanded: e,
    fontSize: "26px",
    groupName: t,
    currentViewport: r,
    children: i
  }
) }) : /* @__PURE__ */ f(G, { children: [
  t !== "" ? /* @__PURE__ */ o("h3", { children: t }) : /* @__PURE__ */ o(G, {}),
  i
] }), an = ({
  allExpanded: e,
  filteredDataOverride: r,
  groupName: t,
  row: n,
  rowIndex: a,
  inNoDataState: i,
  setSharedFilter: s,
  updateChildConfig: l,
  apiFilterDropdowns: u,
  currentViewport: d,
  isLastRow: h
}) => {
  const { config: c, filteredData: D, data: v } = m.useContext(se), [S, O] = ct.useState(0);
  m.useEffect(() => {
    n.toggle && O(0);
  }, [c.activeDashboard, a]);
  const p = m.useMemo(() => n.toggle ? n.columns.map((g, b) => b === S) : n.columns.map((g, b) => !0), [c.activeDashboard, S]), y = m.useMemo(() => {
    if (n.footnotesId) {
      const g = ea(n.footnotesId, a, c);
      if (n.multiVizColumn && r) {
        const b = r[0][n.multiVizColumn], E = g.formattedData.filter((I) => I[n.multiVizColumn] === b);
        g.formattedData = E;
      } else
        g.formattedData = D[n.footnotesId];
      return g;
    }
    return null;
  }, [c, n, v, D]), T = (g) => {
    const E = Object.values(c.visualizations).filter(
      (I) => I.type === "dashboardFilters"
    ).filter((I) => !I.autoLoad).flatMap((I) => I.sharedFilterIndexes);
    return pt(c.visualizations) && g.autoLoad ? E.some((I) => {
      const { queuedActive: F, active: C, subGrouping: _ } = c.dashboard.sharedFilters[I];
      return !C && !F ? !0 : F ? _ ? F[0] !== C || F[1] !== _.active : F !== C : !1;
    }) : !1;
  };
  return /* @__PURE__ */ f("div", { className: `row${n.equalHeight ? " equal-height" : ""}${n.toggle ? " toggle" : ""}`, children: [
    n.toggle && !i && /* @__PURE__ */ o(Tl, { row: n, visualizations: c.visualizations, active: S, setToggled: O }),
    n.columns.map((g, b) => {
      if (g.width) {
        if (!g.widget)
          return /* @__PURE__ */ o("div", { className: `col col-${g.width}` }, `row__${a}__col__${b}`);
        const E = ta(g.widget, a, c, v, D);
        r && (E.data = r, E.formattedData && (E.formattedData = r));
        const I = c.dashboard.sharedFilters && c.dashboard.sharedFilters.filter((A) => A.setBy === g.widget).length > 0, F = I ? c.dashboard.sharedFilters.filter((A) => A.setBy === g.widget)[0].active : void 0, C = /* @__PURE__ */ f("a", { href: `#data-table-${E.dataKey}`, className: "margin-left-href", children: [
          E.dataKey,
          " (Go to Table)"
        ] }), _ = i && E.filterBehavior !== "Apply Button" && (E.type !== "dashboardFilters" || T(E)), L = n.toggle === void 0 || n.toggle && p[b], B = E.type === "dashboardFilters" && E.sharedFilterIndexes && E.sharedFilterIndexes.filter(
          (A) => {
            var q, ee;
            return ((ee = (q = c.dashboard.sharedFilters) == null ? void 0 : q[A]) == null ? void 0 : ee.showDropdown) === !1;
          }
        ).length === E.sharedFilterIndexes.length, K = !h && !B;
        return /* @__PURE__ */ o(
          "div",
          {
            className: `col-12 col-md-${g.width}${L ? "" : " d-none"}${_ ? " hide-parent-visualization" : K ? " mb-4" : ""}`,
            children: /* @__PURE__ */ f(
              Hl,
              {
                allExpanded: e,
                currentViewport: d,
                groupName: t,
                hideVisualization: _,
                row: n,
                children: [
                  E.type === "chart" && /* @__PURE__ */ o(
                    dn,
                    {
                      config: E,
                      dashboardConfig: c,
                      isEditor: !1,
                      setConfig: (A) => {
                        l(g.widget, A);
                      },
                      setSharedFilter: I ? s : void 0,
                      isDashboard: !0,
                      link: c.table && c.table.show && c.datasets && E.table && E.table.showDataTableLink ? C : void 0,
                      configUrl: void 0,
                      setEditing: void 0,
                      hostname: void 0,
                      setSharedFilterValue: void 0
                    },
                    g.widget
                  ),
                  E.type === "map" && /* @__PURE__ */ o(
                    pn,
                    {
                      config: E,
                      isEditor: !1,
                      setConfig: (A) => {
                        l(g.widget, A);
                      },
                      showLoader: !1,
                      setSharedFilter: I ? s : void 0,
                      setSharedFilterValue: F,
                      isDashboard: !0,
                      link: c.table && c.table.show && c.datasets && E.table && E.table.showDataTableLink ? C : void 0
                    },
                    g.widget
                  ),
                  E.type === "data-bite" && /* @__PURE__ */ o(
                    fn,
                    {
                      config: E,
                      isEditor: !1,
                      setConfig: (A) => {
                        l(g.widget, A);
                      },
                      isDashboard: !0
                    },
                    g.widget
                  ),
                  E.type === "waffle-chart" && /* @__PURE__ */ o(
                    gn,
                    {
                      config: E,
                      isEditor: !1,
                      setConfig: (A) => {
                        l(g.widget, A);
                      },
                      isDashboard: !0,
                      configUrl: c.table && c.table.show && c.datasets && E.table && E.table.showDataTableLink ? C : void 0
                    },
                    g.widget
                  ),
                  E.type === "markup-include" && /* @__PURE__ */ o(
                    mn,
                    {
                      config: E,
                      configUrl: void 0,
                      isDashboard: !0,
                      isEditor: !1,
                      setConfig: (A) => {
                        l(g.widget, A);
                      }
                    },
                    g.widget
                  ),
                  E.type === "filtered-text" && /* @__PURE__ */ o(
                    Un,
                    {
                      config: E,
                      isEditor: !1,
                      setConfig: (A) => {
                        l(g.widget, A);
                      },
                      isDashboard: !0,
                      configUrl: void 0
                    },
                    g.widget
                  ),
                  E.type === "dashboardFilters" && /* @__PURE__ */ o(
                    Jn,
                    {
                      setConfig: (A) => {
                        l(g.widget, A);
                      },
                      visualizationConfig: E,
                      apiFilterDropdowns: u,
                      currentViewport: d
                    },
                    g.widget
                  ),
                  E.type === "table" && /* @__PURE__ */ o(
                    rr,
                    {
                      updateConfig: (A) => {
                        l(g.widget, A);
                      },
                      visualizationKey: g.widget,
                      config: E,
                      viewport: d
                    },
                    g.widget
                  ),
                  E.type === "footnotes" && /* @__PURE__ */ o(
                    gt,
                    {
                      visualizationKey: g.widget,
                      config: E,
                      viewport: d
                    },
                    g.widget
                  )
                ]
              }
            )
          },
          `vis__${a}__${b}`
        );
      }
      return /* @__PURE__ */ o(ct.Fragment, {}, `vis__${a}__${b}`);
    }),
    n.footnotesId && !i ? /* @__PURE__ */ o(
      gt,
      {
        isEditor: !1,
        visualizationKey: n.footnotesId,
        config: y,
        viewport: d
      }
    ) : null
  ] }, `row__${a}`);
}, on = function(e = " ", r = "") {
  return this.split(e).map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(r);
}, jl = (e, r, t) => {
  let n = !1;
  return e.find((a) => {
    if (a.type === "urlfilter" && !Array.isArray(a.active) && a.filterBy === "File Name")
      return n = !0, !0;
  }), Object.keys(t).forEach((a) => {
    decodeURIComponent(t[a]) !== r[a] && (n = !0);
  }), n;
}, sn = ({ visualizations: e, datasets: r, rows: t }) => {
  const n = Object.values(e).map((s) => s.dataKey), a = t.map((s) => s.dataKey), i = x.uniq([...n, ...a]);
  return Object.keys(r).filter((s) => i.includes(s));
}, Gl = (e, r, t) => {
  const n = Object.keys(e).flatMap((s) => {
    const l = e[s];
    return l === void 0 ? [] : typeof l == "string" && l.match(/undefined/) ? [] : Array.isArray(l) ? l.map((u) => ({ key: s, value: u })) : { key: s, value: l };
  }), a = r.origin + r.pathname;
  let i = `${a}${Wt(a, n)}`;
  if (t !== "") {
    const s = r.pathname.split(".").pop(), l = r.pathname.substring(0, r.pathname.lastIndexOf("/"));
    i = `${r.origin}${l}/${t}.${s}${Wt(
      a,
      n
    )}`;
  }
  return i;
}, ql = (e, r, t) => {
  const n = {
    "Remove Spaces": "",
    "Keep Spaces": " ",
    "Replace With Underscore": "_"
  };
  let a = e;
  return r.datasetKey === t && (r.fileName ? a = on.call(
    String(r.fileName),
    " ",
    n[r.whitespaceReplacement ?? "Keep Spaces"]
  ) : a = r.active), a != null && a.includes("${query}") && (a = a.replace(
    "${query}",
    on.call(
      String(r.active),
      " ",
      n[r.whitespaceReplacement ?? "Keep Spaces"]
    )
  )), a;
}, Wl = (e, r) => Object.keys(e).reduce((t, n) => {
  const a = e[n].dataKey;
  return r[a] && (t[n].formattedData = r[a]), t;
}, x.cloneDeep(e)), Ql = (e, r, t, n) => {
  var s, l;
  if (!e.usedBy || !e.usedBy.length)
    return !0;
  const a = (s = e.usedBy) == null ? void 0 : s.map((u) => t[u] || n[u]), i = wt(n);
  return (l = e.usedBy) == null || l.forEach((u) => {
    const d = i[u], h = n[(d == null ? void 0 : d.row) || u];
    h != null && h.footnotesId && a.push(t[h.footnotesId]);
  }), a == null ? void 0 : a.some((u) => (u == null ? void 0 : u.dataKey) === r);
}, Zl = ({ setAllExpanded: e }) => /* @__PURE__ */ o("div", { className: "d-block ", children: /* @__PURE__ */ f("div", { className: "d-flex flex-row-reverse mb-2", children: [
  /* @__PURE__ */ o("button", { className: "btn expand-collapse-buttons", onClick: () => e(!1), children: "- Collapse All" }),
  /* @__PURE__ */ o("button", { className: "btn expand-collapse-buttons me-2", onClick: () => e(!0), children: "+ Expand All" })
] }) }), Kl = (e, r, t, n) => {
  const a = (i, s, l, u = 50) => {
    if (!i)
      return;
    const d = i.map((p, y) => y), h = l ? d : n;
    i = i.map(
      (p, y) => {
        var T;
        return nn(
          y,
          s[(T = p.apiFilter) == null ? void 0 : T.apiEndpoint],
          i,
          h
        );
      }
    );
    const c = i.filter((p) => p.apiFilter), D = new Map(c.map((p) => [p.apiFilter.apiEndpoint, p.apiFilter])), v = Rl(i, s), S = Object.values(v).reduce(
      (p, [y]) => ({ ...p, [y]: null }),
      {}
    );
    t((p) => ({ ...p, ...S }));
    const O = x.cloneDeep(s);
    return Promise.all(
      Object.keys(v).map(
        (p) => new Promise((y) => {
          fetch(p).then((T) => T.json()).then((T) => {
            Array.isArray(T) || console.error("COVE only supports response data in the shape Array<Object>");
            const [g, b] = v[p], E = D.get(g), I = xl(T, E);
            O[g] = I;
            const F = nn(
              b,
              I,
              i,
              h
            );
            i[b] = F;
          }).catch(() => {
            r({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            }), y({ error: !0 });
          }).finally(() => {
            y({ error: !1 });
          });
        })
      )
    ).then((p) => {
      const y = p.some(({ error: g }) => g), T = i.reduce((g, b, E) => h.includes(E) && !b.active ? Xn(Yn(b, i)) ? g : [...g, E] : g, []);
      return y || !T.length || u === 0 ? (t(O), e({ type: "SET_SHARED_FILTERS", payload: i }), i) : a(i, O, l, u - 1);
    });
  };
  return a;
}, Yl = (e, r) => {
  var s;
  const t = !!Ve("cove-auto-load"), n = e.multiDashboards ? e.multiDashboards[e.activeDashboard] : e, a = (s = n.dashboard.sharedFilters) == null ? void 0 : s.some(
    (l) => l.filterBy === "File Name"
  ), i = Object.values(n.visualizations).reduce((l, u) => {
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
  if (t || i || a || r) {
    const l = n.rows.map((h) => h.dataKey).filter(Boolean);
    return !!Object.values(n.visualizations).map((h) => h.dataKey).filter(Boolean).concat(l).find((h) => {
      var c;
      return !((c = e.datasets[h].data) != null && c.length);
    });
  }
  return !1;
};
function Xl({ initialState: e, isEditor: r = !1, isDebug: t = !1 }) {
  var ee, w, $, z, M, Y, ne, De, Qe, Ze, Ke, Ye, nr;
  const [n, a] = m.useReducer(bl, e), [i, s] = m.useReducer(Sl, []), l = m.useContext(wn), [u, d] = m.useState({}), [h, c] = m.useState("lg"), [D] = m.useState(`cove-${Math.random().toString(16).slice(-4)}`), [v, S] = m.useState(!0), [O, p] = m.useState(!1), y = n.tabSelected === "Dashboard Preview", T = m.useMemo(() => {
    const k = sn(n.config).map((P) => n.data[P]);
    return k.length ? k.some((P) => P === void 0) : !0;
  }, [n.data]), g = wt(n.config.rows), b = new Pe(), E = m.useMemo(() => Object.values(n.config.visualizations).filter((k) => k.type === "dashboardFilters").reduce((k, P) => P.autoLoad ? [...k, ...P.sharedFilterIndexes] : k, []), [n.config.visualizations]), I = Kl(
    a,
    s,
    d,
    E
  ), F = async (k) => {
    const P = x.cloneDeep(n.config);
    if (!P.datasets)
      return;
    const Z = k || P.dashboard.sharedFilters, H = sn(P), V = x.cloneDeep(n.data), W = x.cloneDeep(P.datasets);
    let te = !1, X = "";
    for (let re = 0; re < H.length; re++) {
      const J = H[re], de = P.datasets[J], Ne = Object.fromEntries(new URLSearchParams(window.location.search)), ye = Ne[de.loadQueryParam || ""];
      if (de.dataUrl && (Z || ye)) {
        const Oe = new URL(de.runtimeDataUrl || de.dataUrl, window.location.origin), xe = Object.fromEntries(new URLSearchParams(Oe.search)), fe = {};
        ye && (fe[de.loadQueryParam] = ye), Z == null || Z.forEach((Q) => {
          var Ce;
          if (Q.type === "urlfilter" && Ql(Q, J, P.visualizations, P.rows)) {
            if (Q.filterBy === "File Name" && (X = ql(X, Q, J)), Q.queryParameter && (fe[Q.queryParameter] ? fe[Q.queryParameter] = fe[Q.queryParameter] + Q.active : fe[Q.queryParameter] = Q.active), Q.setByQueryParameter) {
              const Ee = Ne[Q.setByQueryParameter], Tt = ((Ce = Q.apiFilter) == null ? void 0 : Ce.valueSelector) || Q.setByQueryParameter;
              Ee && (fe[Tt] = Ee);
            }
            Q.apiFilter && Q.active && (fe[Q.apiFilter.valueSelector] = Q.active, Q.apiFilter.subgroupValueSelector && Q.subGrouping.active && (fe[Q.apiFilter.subgroupValueSelector] = Q.subGrouping.active));
          }
        });
        const le = jl(Z, xe, fe);
        if (k || le) {
          te = !0;
          const Q = Gl(
            { ...xe, ...fe },
            Oe,
            X
          );
          p(!0), await We(Q).then((Ce) => {
            let Ee = Ce;
            if (Ce && de.dataDescription)
              try {
                Ee = b.autoStandardize(Ee), Ee = b.developerStandardize(Ee, de.dataDescription);
              } catch (Tt) {
                console.error("Error standardizing data:", Tt);
              }
            W[J].data = Ee, W[J].runtimeDataUrl = Q, V[J] = Ee;
          }).catch((Ce) => {
            console.error(Ce), s({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            }), W[J].data = [], W[J].runtimeDataUrl = Q, V[J] = [];
          });
        }
      }
    }
    const ae = x.pickBy(W, (re) => !re.dataUrl);
    if (te || Object.keys(ae).length) {
      const re = Object.keys(ae).reduce((le, Q) => (le[Q] = ae[Q].data, le), {}), J = { ...V, ...re };
      a({ type: "SET_DATA", payload: J });
      const de = P.dashboard.sharedFilters.reduce((le, Q, Ce) => (Q.type === "datafilter" && le.push(Ce), le), []), Ne = Object.values(P.visualizations).filter((le) => le.type === "dashboardFilters").flatMap((le) => le.sharedFilterIndexes).filter((le) => !de.includes(le)), ye = qt(Z, J, Ne), Oe = { ...P.dashboard, sharedFilters: ye }, xe = qe(
        { ...n, config: { ...n.config, dashboard: Oe } },
        {},
        J
      );
      a({ type: "SET_FILTERED_DATA", payload: xe });
      const fe = Wl(P.visualizations, V);
      a({
        type: "SET_CONFIG",
        payload: {
          dashboard: Oe,
          datasets: W,
          visualizations: fe,
          activeDashboard: P.activeDashboard
        }
      }), p(!1);
    }
  }, C = (k, P) => {
    const { config: Z, filteredData: H } = x.cloneDeep(n);
    for (let W = 0; W < Z.dashboard.sharedFilters.length; W++) {
      const te = Z.dashboard.sharedFilters[W];
      if (te.setBy === k) {
        te.columnName && (te.active = P[te.columnName]);
        break;
      }
    }
    const V = qe({ ...n, config: Z }, H);
    a({ type: "SET_FILTERED_DATA", payload: V }), a({ type: "SET_CONFIG", payload: Z }), a({ type: "SET_SHARED_FILTERS", payload: Z.dashboard.sharedFilters });
  }, _ = ({ detail: k }) => {
    try {
      const P = Object.keys(k).reduce((H, V) => (n.data[V] !== void 0 && (H[V] = k[V]), H), {}), Z = { ...n.filteredData, ...P };
      a({ type: "SET_FILTERED_DATA", payload: Z }), a({ type: "SET_DATA", payload: { ...n.data, ...P } });
    } catch (P) {
      console.error("Error setting event data: ", P);
    }
  };
  m.useEffect(() => (Sa("cove_set_data", _), () => {
    wa("cove_set_data", _);
  }), []), m.useEffect(() => {
    var H;
    const { config: k } = n, P = Yl(k, r && !y), Z = qt(k.dashboard.sharedFilters, n.data);
    p(!0), (H = I(Z, u, P)) == null || H.then((V) => {
      V.every((te) => te.type === "datafilter" || te.active) && F(V), p(!1);
    });
  }, [r, y, (ee = n.config) == null ? void 0 : ee.activeDashboard]);
  const L = (k, P) => {
    const Z = x.cloneDeep(n.config), H = x.pick(Z, ["visualizations", "multiDashboards"]);
    if (H.visualizations[k] = P, H.visualizations[k].formattedData = Z.visualizations[k].formattedData, Z.multiDashboards) {
      const V = Z.activeDashboard, W = [...Z.multiDashboards], X = { label: W[V].label, visualizations: H.visualizations, ...x.pick(Z, ["dashboard", "rows"]) };
      W[V] = X, H.multiDashboards = W;
    }
    a({ type: "SET_CONFIG", payload: H }), r && l.setTempConfig(H);
  }, B = new ca((k) => {
    for (let P of k) {
      let Z = da(P.contentRect.width);
      c(Z);
    }
  }), K = m.useCallback((k) => {
    k !== null && B.observe(k);
  }, []);
  if (n.loading)
    return /* @__PURE__ */ o(mt, {});
  let A = null;
  if (r && !y) {
    let k = !1;
    Ae(n.config).forEach((P) => {
      var te;
      const Z = (te = g[P]) == null ? void 0 : te.row, H = ta(
        P,
        Z,
        n.config,
        n.data,
        n.filteredData
      );
      H.uid = P, H.type === "footnotes" && (H.formattedData = void 0);
      const V = n.config.dashboard.sharedFilters && n.config.dashboard.sharedFilters.filter((X) => X.setBy === P).length > 0, W = V ? n.config.dashboard.sharedFilters.filter((X) => X.setBy === P)[0].active : void 0;
      if (H.editing) {
        k = !0;
        const X = (ae) => {
          let re = H.originalFormattedData ? { ...ae, formattedData: H.originalFormattedData } : ae;
          L(P, re);
        };
        switch (H.type) {
          case "chart":
            A = /* @__PURE__ */ f(G, { children: [
              /* @__PURE__ */ o(be, { visualizationKey: P, subEditor: "Chart" }),
              /* @__PURE__ */ o(
                dn,
                {
                  config: H,
                  isEditor: !0,
                  isDebug: t,
                  setConfig: X,
                  setSharedFilter: V ? C : void 0,
                  setSharedFilterValue: W,
                  dashboardConfig: n.config,
                  isDashboard: !0,
                  configUrl: void 0,
                  setEditing: void 0,
                  hostname: void 0,
                  link: void 0
                },
                P
              )
            ] });
            break;
          case "map":
            A = /* @__PURE__ */ f(G, { children: [
              /* @__PURE__ */ o(be, { visualizationKey: P, subEditor: "Map" }),
              /* @__PURE__ */ o(
                pn,
                {
                  config: H,
                  isEditor: !0,
                  isDebug: t,
                  setConfig: X,
                  setSharedFilter: V ? C : void 0,
                  setSharedFilterValue: W,
                  isDashboard: !0,
                  showLoader: !1,
                  dashboardConfig: n.config
                },
                P
              )
            ] });
            break;
          case "data-bite":
            A = /* @__PURE__ */ f(G, { children: [
              /* @__PURE__ */ o(be, { visualizationKey: P, subEditor: "Data Bite" }),
              /* @__PURE__ */ o(
                fn,
                {
                  config: { ...H, newViz: !0 },
                  isEditor: !0,
                  setConfig: X,
                  isDashboard: !0
                },
                P
              )
            ] });
            break;
          case "waffle-chart":
            A = /* @__PURE__ */ f(G, { children: [
              /* @__PURE__ */ o(be, { visualizationKey: P, subEditor: "Waffle Chart" }),
              /* @__PURE__ */ o(
                gn,
                {
                  config: H,
                  isEditor: !0,
                  setConfig: X,
                  isDashboard: !0,
                  configUrl: void 0
                },
                P
              )
            ] });
            break;
          case "markup-include":
            A = /* @__PURE__ */ f(G, { children: [
              /* @__PURE__ */ o(be, { visualizationKey: P, subEditor: "Markup Include" }),
              /* @__PURE__ */ o(
                mn,
                {
                  config: H,
                  isEditor: !0,
                  setConfig: X,
                  isDashboard: !0,
                  configUrl: void 0
                },
                P
              )
            ] });
            break;
          case "filtered-text":
            A = /* @__PURE__ */ f(G, { children: [
              /* @__PURE__ */ o(be, { visualizationKey: P, subEditor: "Filtered Text" }),
              /* @__PURE__ */ o(
                Un,
                {
                  config: H,
                  isEditor: !0,
                  setConfig: X,
                  isDashboard: !0,
                  configUrl: void 0
                },
                P
              )
            ] });
            break;
          case "dashboardFilters":
            A = /* @__PURE__ */ f(G, { children: [
              /* @__PURE__ */ o(be, { visualizationKey: P, subEditor: "Filter Dropdowns" }),
              /* @__PURE__ */ o(
                Jn,
                {
                  isEditor: !0,
                  visualizationConfig: H,
                  apiFilterDropdowns: u,
                  setConfig: X
                }
              )
            ] });
            break;
          case "table":
            A = /* @__PURE__ */ f(G, { children: [
              /* @__PURE__ */ o(be, { visualizationKey: P, subEditor: "Table" }),
              /* @__PURE__ */ o(
                rr,
                {
                  visualizationKey: P,
                  config: H,
                  isEditor: !0,
                  updateConfig: X
                }
              )
            ] });
            break;
          case "footnotes":
            A = /* @__PURE__ */ f(G, { children: [
              /* @__PURE__ */ o(be, { visualizationKey: P, subEditor: "Footnotes" }),
              /* @__PURE__ */ o(
                gt,
                {
                  visualizationKey: P,
                  config: { ...H, datasets: n.config.datasets },
                  isEditor: !0,
                  updateConfig: (ae) => X(x.omit(ae, "datasets"))
                }
              )
            ] });
            break;
          default:
            A = /* @__PURE__ */ o(G, {});
            break;
        }
      }
    }), k || (A = /* @__PURE__ */ f(io, { backend: Us, children: [
      O && /* @__PURE__ */ o(Rt, { fullScreen: !0 }),
      /* @__PURE__ */ f("div", { className: "header-container", children: [
        /* @__PURE__ */ o(be, {}),
        /* @__PURE__ */ o(pl, {})
      ] }),
      /* @__PURE__ */ o("div", { className: "layout-container", children: /* @__PURE__ */ o(ol, {}) })
    ] }));
  } else {
    const { config: k } = n, { title: P, description: Z } = k.dashboard || {}, H = k.rows && k.rows.filter((V) => V.columns.filter((W) => W.widget).length !== 0);
    A = /* @__PURE__ */ f(G, { children: [
      r && /* @__PURE__ */ o(be, {}),
      O && /* @__PURE__ */ o(Rt, { fullScreen: !0 }),
      /* @__PURE__ */ o(Wn, { isEditor: r && !y }),
      i.map((V, W) => /* @__PURE__ */ o(
        ma,
        {
          type: "danger",
          onDismiss: () => s({ type: "DISMISS_ERROR_MESSAGE", payload: W }),
          message: V,
          autoDismiss: !0
        },
        V + W
      )),
      /* @__PURE__ */ o(ke.Responsive, { isEditor: r, children: /* @__PURE__ */ f("div", { className: `cdc-dashboard-inner-container${r ? " is-editor" : ""}`, children: [
        /* @__PURE__ */ o(
          vn,
          {
            title: P,
            isDashboard: !0,
            classes: ["dashboard-title", `${k.dashboard.theme ?? "theme-blue"}`]
          }
        ),
        Z && /* @__PURE__ */ o("div", { className: "subtext mb-3", children: un(Z) }),
        H && H.map((V, W) => {
          if (V.multiVizColumn && (y || !r)) {
            const X = qe(n, x.cloneDeep(n.data))[W] ?? V.formattedData, ae = {};
            return X.forEach((re) => {
              const J = re[V.multiVizColumn];
              ae[J] || (ae[J] = []), ae[J].push(re);
            }), /* @__PURE__ */ f(ct.Fragment, { children: [
              !T && V.expandCollapseAllButtons === !0 && /* @__PURE__ */ o(Zl, { setAllExpanded: S }),
              Object.keys(ae).map((re) => {
                const J = ae[re];
                return /* @__PURE__ */ o(
                  an,
                  {
                    allExpanded: v,
                    filteredDataOverride: J,
                    groupName: re,
                    row: V,
                    rowIndex: W,
                    setSharedFilter: C,
                    updateChildConfig: L,
                    apiFilterDropdowns: u,
                    currentViewport: h,
                    inNoDataState: T,
                    isLastRow: W === H.length - 1
                  },
                  `row__${W}__${re}`
                );
              })
            ] }, `row__${W}`);
          } else
            return /* @__PURE__ */ o(
              an,
              {
                allExpanded: !1,
                groupName: "",
                row: V,
                rowIndex: W,
                setSharedFilter: C,
                updateChildConfig: L,
                apiFilterDropdowns: u,
                currentViewport: h,
                inNoDataState: T,
                isLastRow: W === H.length - 1
              },
              `row__${W}`
            );
        }),
        T ? /* @__PURE__ */ o("div", { className: "mt-5", children: "Please complete your selection to continue." }) : /* @__PURE__ */ o(G, {}),
        /* @__PURE__ */ f("section", { className: "download-buttons", children: [
          ((w = k.table) == null ? void 0 : w.downloadImageButton) && /* @__PURE__ */ o(
            ur.Button,
            {
              title: "Download Dashboard as Image",
              type: "image",
              state: k,
              text: "Download Dashboard Image",
              elementToCapture: D
            }
          ),
          (($ = k.table) == null ? void 0 : $.downloadPdfButton) && /* @__PURE__ */ o(
            ur.Button,
            {
              title: "Download Dashboard as PDF",
              type: "pdf",
              state: k,
              text: "Download Dashboard PDF",
              elementToCapture: D
            }
          )
        ] }),
        ((z = k.table) == null ? void 0 : z.show) && k.data && /* @__PURE__ */ o(
          Mt,
          {
            config: k,
            rawData: (Y = (M = k.data) == null ? void 0 : M[0]) != null && Y.tableData ? (De = (ne = k.data) == null ? void 0 : ne[0]) == null ? void 0 : De.tableData : k.data,
            runtimeData: (Ze = (Qe = k.data) == null ? void 0 : Qe[0]) != null && Ze.tableData ? (Ye = (Ke = k.data) == null ? void 0 : Ke[0]) == null ? void 0 : Ye.tableData : k.data || [],
            expandDataTable: k.table.expanded,
            tableTitle: k.dashboard.title || "",
            viewport: h,
            tabbingId: k.dashboard.title || "",
            outerContainerRef: K,
            imageRef: D,
            isDebug: t,
            isEditor: r
          }
        ),
        ((nr = k.table) == null ? void 0 : nr.show) && k.datasets && Object.keys(k.datasets).map((V) => {
          var ae, re, J, de, Ne;
          const W = Ae(k).filter((ye) => k.visualizations[ye].dataKey === V);
          let te = [];
          (ae = k.dashboard.sharedFilters) == null || ae.forEach((ye) => {
            let Oe = !0;
            W.forEach((xe) => {
              ye.usedBy && ye.usedBy.indexOf(xe) === -1 && (Oe = !1);
            }), Oe && te.push(ye);
          });
          const X = te.length > 0 ? Be(te, k.datasets[V].data) : void 0;
          return /* @__PURE__ */ o(
            "div",
            {
              className: "multi-table-container",
              id: `data-table-${V}`,
              children: /* @__PURE__ */ o(
                Mt,
                {
                  config: k,
                  dataConfig: k.datasets[V],
                  rawData: ((J = (re = k.datasets[V].data) == null ? void 0 : re[0]) == null ? void 0 : J.tableData) || k.datasets[V].data,
                  runtimeData: ((Ne = (de = k.datasets[V].data) == null ? void 0 : de[0]) == null ? void 0 : Ne.tableData) || X || k.datasets[V].data || [],
                  expandDataTable: k.table.expanded,
                  tableTitle: V,
                  viewport: h,
                  tabbingId: V
                }
              )
            },
            `data-table-${V}`
          );
        })
      ] }) })
    ] });
  }
  const q = ["cdc-open-viz-module", "type-dashboard", `${h}`];
  return /* @__PURE__ */ o(Hs, { children: /* @__PURE__ */ o(
    se.Provider,
    {
      value: {
        ...n,
        setParentConfig: l.setTempConfig,
        outerContainerRef: K,
        isDebug: t,
        loadAPIFilters: I,
        setAPIFilterDropdowns: d,
        reloadURLData: F,
        setAPILoading: p
      },
      children: /* @__PURE__ */ f(ce.Provider, { value: a, children: [
        /* @__PURE__ */ o("div", { className: q.join(" "), ref: K, "data-download-id": D, children: A }),
        /* @__PURE__ */ o(Ws, {})
      ] })
    }
  ) });
}
const ln = {
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
}, Jl = async (e) => {
  let r = e.formattedData || e.data;
  return e.dataUrl && (r = await We(`${e.dataUrl}`), r = Le(r, e.dataDescription)), r;
}, Ru = ({ configUrl: e, isEditor: r, isDebug: t, config: n }) => {
  const [a, i] = m.useState(void 0), s = m.useContext(wn), l = (v) => {
    if (!v.multiDashboards)
      return null;
    const S = Zt()["cove-tab"];
    return S !== void 0 && Number(S) < v.multiDashboards.length ? Number(S) : 0;
  }, u = (v, S) => {
    const [O, p] = jt(ft)(v, S), y = yn(O);
    return { ...ft, config: y, filteredData: p, data: S };
  }, d = async () => {
    const v = n || s.config || await (await fetch(e)).json(), S = l(v), { newConfig: O, datasets: p } = S !== null ? await D(v, S) : await c(v);
    i(u(O, p));
  };
  m.useEffect(() => {
    d();
  }, []);
  const h = (v) => {
    let S = { ...v };
    const O = Object.keys(v.datasets).reduce((p, y) => {
      const T = v.datasets[y];
      return p[y] = T.formattedData || T.data, p;
    }, {});
    return Ae(S).forEach((p) => {
      const y = O[S.visualizations[p].dataKey];
      y && (S.visualizations[p].formattedData = y);
    }), Object.keys(O).forEach((p) => {
      S.datasets[p].data = O[p];
    }), { newConfig: S, datasets: O };
  }, c = async (v) => {
    let S = { ...ln, ...v };
    if (v.datasets)
      return h(S);
    {
      const O = S.dataFileName || "backwards-compatibility", p = await Jl(v), y = {};
      if (y[O] = {
        data: p,
        dataDescription: S.dataDescription
      }, S.datasets = y, Ae(S).forEach((b) => {
        const E = { dataKey: O, ...x.pick(S, "dataDescription", "formattedData") };
        S.visualizations[b] = { ...S.visualizations[b], ...E };
      }), S = { ...S, ...{
        data: [],
        dataUrl: "",
        dataFileName: "",
        dataFileSourceType: "",
        dataDescription: {},
        formattedData: []
      } }, S.dashboard.filters) {
        const b = { ...S.dashboard };
        b.sharedFilters || (b.sharedFilters = []);
        const E = b.filters.map((I) => ({ ...I, key: I.label, showDropdown: !0, usedBy: Ae(S) }));
        b.sharedFilters = [...b.sharedFilters, ...E], S.dashboard = { ...b, filters: void 0 };
      }
      const g = { [O]: p };
      return { newConfig: S, datasets: g };
    }
  }, D = async (v, S) => {
    const O = v.multiDashboards[S], p = {
      ...ln,
      ...v,
      ...O,
      multiDashboards: v.multiDashboards,
      activeDashboard: S
    };
    return h(p);
  };
  return a ? /* @__PURE__ */ o(Xl, { isEditor: r, isDebug: t, initialState: a }) : /* @__PURE__ */ o(mt, {});
};
export {
  Hs as G,
  Ru as M,
  Ws as O
};
