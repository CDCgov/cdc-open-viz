import { j as M, a as rn, F as br } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as b, R as ca } from "./storybook-index-f2fed736.es.js";
import { i as ho, a as Pt, b as Ra, g as Na } from "./storybook-getViewport-cf99c09b.es.js";
import { M as Ta, G as Pa, O as Ia } from "./storybook-CdcDashboard-1ef79036.es.js";
import { C as Ce, E as He, G as ya, f as da } from "./storybook-ConfigContext-54fe77a4.es.js";
import { P as Qn } from "./storybook-index-43433e35.es.js";
import { a as La, C as ka } from "./storybook-CdcMarkupInclude-7511c7d3.es.js";
import { D as Oa } from "./storybook-DataTransform-d4bb56a2.es.js";
import { c as Ca } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { f as ko } from "./storybook-fetchRemoteData-d0119f0b.es.js";
import { a as vo, c as Oo, d as Ea, e as Ba, f as Ha, g as Fa, h as Wa, i as xa, j as Eo, k as Ga, l as Va } from "./storybook-Icon-e250778e.es.js";
import { D as Ka } from "./storybook-DataDesigner-9363c314.es.js";
import { T as Ar } from "./storybook-Tooltip-7cf39805.es.js";
import { S as qa, d as za, a as Bo } from "./storybook-CdcMapComponent-6b9eeb8c.es.js";
import { C as _a } from "./storybook-CdcMap-666e7055.es.js";
import { C as Xa } from "./storybook-CdcChart-aba69332.es.js";
import { C as Ya } from "./storybook-CdcDataBite-479004d8.es.js";
import { C as ja } from "./storybook-CdcWaffleChart-e9ad7d91.es.js";
import { E as ce } from "./storybook-viewports-61111b6b.es.js";
import { _ as Be } from "./storybook-lodash-a4231e1c.es.js";
import { w as Ua, u as Ja } from "./storybook-index-4710fe7a.es.js";
import "./storybook-index-31bf6905.es.js";
import "./storybook-CdcChartComponent-9be245f2.es.js";
import "./storybook-useDataVizClasses-3bf30247.es.js";
import "./storybook-Button-f953e457.es.js";
import "./storybook-DataTable-577422ab.es.js";
import "./storybook-papaparse.min-9df418d0.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-index-80cf478c.es.js";
import "./storybook-colorPalettes-bc80e395.es.js";
import "./storybook-Table-7ddd1662.es.js";
import "./storybook-index-8e186da8.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-index-8cf78369.es.js";
import "./storybook-linear-5c281d48.es.js";
import "./storybook-linear-7d6b225d.es.js";
import "./storybook-Text-0ce4510d.es.js";
import "./storybook-BlurStrokeText-f87cf8cc.es.js";
import "./storybook-Inputs-f2c63984.es.js";
import "./storybook-useDebounce-5d0290fd.es.js";
import "./storybook-Dropdown-1c93166f.es.js";
import "./storybook-MultiSelect-cda00383.es.js";
import "./storybook-Loader-0256c39d.es.js";
import "./storybook-InputSelect-368b8698.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-Accordion-e71370da.es.js";
import "./storybook-Filters-caf19344.es.js";
import "./storybook-FilterStyles-fd509eb9.es.js";
import "./storybook-NestedDropdown-92b50717.es.js";
import "./storybook-coveUpdateWorker-2b7600bb.es.js";
import "./storybook-editor-8aca7312.es.js";
import "./storybook-updateFieldFactory-c006040a.es.js";
import "./storybook-DashboardFilters-9b23b8a8.es.js";
import "./storybook-Footnotes-00fcc704.es.js";
import "./storybook-extends-0a3e0827.es.js";
import "./storybook-tiny-invariant-9f3340e2.es.js";
import "./storybook-Card-3d4604ee.es.js";
import "./storybook-context-0403d744.es.js";
import "./storybook-index-398c73a4.es.js";
var Ho = {}, po = {}, fo = 34, Oe = 10, go = 13;
function pa(e) {
  return new Function("d", "return {" + e.map(function(C, l) {
    return JSON.stringify(C) + ": d[" + l + '] || ""';
  }).join(",") + "}");
}
function $a(e, C) {
  var l = pa(e);
  return function(d, A) {
    return C(l(d), A, e);
  };
}
function Fo(e) {
  var C = /* @__PURE__ */ Object.create(null), l = [];
  return e.forEach(function(d) {
    for (var A in d)
      A in C || l.push(C[A] = A);
  }), l;
}
function vr(e, C) {
  var l = e + "", d = l.length;
  return d < C ? new Array(C - d + 1).join(0) + l : l;
}
function Za(e) {
  return e < 0 ? "-" + vr(-e, 6) : e > 9999 ? "+" + vr(e, 6) : vr(e, 4);
}
function Qa(e) {
  var C = e.getUTCHours(), l = e.getUTCMinutes(), d = e.getUTCSeconds(), A = e.getUTCMilliseconds();
  return isNaN(e) ? "Invalid Date" : Za(e.getUTCFullYear()) + "-" + vr(e.getUTCMonth() + 1, 2) + "-" + vr(e.getUTCDate(), 2) + (A ? "T" + vr(C, 2) + ":" + vr(l, 2) + ":" + vr(d, 2) + "." + vr(A, 3) + "Z" : d ? "T" + vr(C, 2) + ":" + vr(l, 2) + ":" + vr(d, 2) + "Z" : l || C ? "T" + vr(C, 2) + ":" + vr(l, 2) + "Z" : "");
}
function nu(e) {
  var C = new RegExp('["' + e + `
\r]`), l = e.charCodeAt(0);
  function d(v, an) {
    var Fn, tn, An = A(v, function(qn, hn) {
      if (Fn)
        return Fn(qn, hn - 1);
      tn = qn, Fn = an ? $a(qn, an) : pa(qn);
    });
    return An.columns = tn || [], An;
  }
  function A(v, an) {
    var Fn = [], tn = v.length, An = 0, qn = 0, hn, En = tn <= 0, Dn = !1;
    v.charCodeAt(tn - 1) === Oe && --tn, v.charCodeAt(tn - 1) === go && --tn;
    function Jn() {
      if (En)
        return po;
      if (Dn)
        return Dn = !1, Ho;
      var Rn, or = An, zn;
      if (v.charCodeAt(or) === fo) {
        for (; An++ < tn && v.charCodeAt(An) !== fo || v.charCodeAt(++An) === fo; )
          ;
        return (Rn = An) >= tn ? En = !0 : (zn = v.charCodeAt(An++)) === Oe ? Dn = !0 : zn === go && (Dn = !0, v.charCodeAt(An) === Oe && ++An), v.slice(or + 1, Rn - 1).replace(/""/g, '"');
      }
      for (; An < tn; ) {
        if ((zn = v.charCodeAt(Rn = An++)) === Oe)
          Dn = !0;
        else if (zn === go)
          Dn = !0, v.charCodeAt(An) === Oe && ++An;
        else if (zn !== l)
          continue;
        return v.slice(or, Rn);
      }
      return En = !0, v.slice(or, tn);
    }
    for (; (hn = Jn()) !== po; ) {
      for (var Wn = []; hn !== Ho && hn !== po; )
        Wn.push(hn), hn = Jn();
      an && (Wn = an(Wn, qn++)) == null || Fn.push(Wn);
    }
    return Fn;
  }
  function R(v, an) {
    return v.map(function(Fn) {
      return an.map(function(tn) {
        return dn(Fn[tn]);
      }).join(e);
    });
  }
  function c(v, an) {
    return an == null && (an = Fo(v)), [an.map(dn).join(e)].concat(R(v, an)).join(`
`);
  }
  function E(v, an) {
    return an == null && (an = Fo(v)), R(v, an).join(`
`);
  }
  function G(v) {
    return v.map(h).join(`
`);
  }
  function h(v) {
    return v.map(dn).join(e);
  }
  function dn(v) {
    return v == null ? "" : v instanceof Date ? Qa(v) : C.test(v += "") ? '"' + v.replace(/"/g, '""') + '"' : v;
  }
  return {
    parse: d,
    parseRows: A,
    format: c,
    formatBody: E,
    formatRows: G,
    formatRow: h,
    formatValue: dn
  };
}
var ru = nu(","), eu = ru.parse;
function pe(e, C, l, d) {
  function A(R) {
    return R instanceof l ? R : new l(function(c) {
      c(R);
    });
  }
  return new (l || (l = Promise))(function(R, c) {
    function E(dn) {
      try {
        h(d.next(dn));
      } catch (v) {
        c(v);
      }
    }
    function G(dn) {
      try {
        h(d.throw(dn));
      } catch (v) {
        c(v);
      }
    }
    function h(dn) {
      dn.done ? R(dn.value) : A(dn.value).then(E, G);
    }
    h((d = d.apply(e, C || [])).next());
  });
}
function fe(e, C) {
  var l = { label: 0, sent: function() {
    if (R[0] & 1)
      throw R[1];
    return R[1];
  }, trys: [], ops: [] }, d, A, R, c = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return c.next = E(0), c.throw = E(1), c.return = E(2), typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function E(h) {
    return function(dn) {
      return G([h, dn]);
    };
  }
  function G(h) {
    if (d)
      throw new TypeError("Generator is already executing.");
    for (; c && (c = 0, h[0] && (l = 0)), l; )
      try {
        if (d = 1, A && (R = h[0] & 2 ? A.return : h[0] ? A.throw || ((R = A.return) && R.call(A), 0) : A.next) && !(R = R.call(A, h[1])).done)
          return R;
        switch (A = 0, R && (h = [h[0] & 2, R.value]), h[0]) {
          case 0:
          case 1:
            R = h;
            break;
          case 4:
            return l.label++, { value: h[1], done: !1 };
          case 5:
            l.label++, A = h[1], h = [0];
            continue;
          case 7:
            h = l.ops.pop(), l.trys.pop();
            continue;
          default:
            if (R = l.trys, !(R = R.length > 0 && R[R.length - 1]) && (h[0] === 6 || h[0] === 2)) {
              l = 0;
              continue;
            }
            if (h[0] === 3 && (!R || h[1] > R[0] && h[1] < R[3])) {
              l.label = h[1];
              break;
            }
            if (h[0] === 6 && l.label < R[1]) {
              l.label = R[1], R = h;
              break;
            }
            if (R && l.label < R[2]) {
              l.label = R[2], l.ops.push(h);
              break;
            }
            R[2] && l.ops.pop(), l.trys.pop();
            continue;
        }
        h = C.call(e, l);
      } catch (dn) {
        h = [6, dn], A = 0;
      } finally {
        d = R = 0;
      }
    if (h[0] & 5)
      throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function tu(e, C) {
  var l = typeof Symbol == "function" && e[Symbol.iterator];
  if (!l)
    return e;
  var d = l.call(e), A, R = [], c;
  try {
    for (; (C === void 0 || C-- > 0) && !(A = d.next()).done; )
      R.push(A.value);
  } catch (E) {
    c = { error: E };
  } finally {
    try {
      A && !A.done && (l = d.return) && l.call(d);
    } finally {
      if (c)
        throw c.error;
    }
  }
  return R;
}
function ou() {
  for (var e = [], C = 0; C < arguments.length; C++)
    e = e.concat(tu(arguments[C]));
  return e;
}
var au = /* @__PURE__ */ new Map([
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  // Others
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function Fe(e, C) {
  var l = uu(e);
  if (typeof l.path != "string") {
    var d = e.webkitRelativePath;
    Object.defineProperty(l, "path", {
      value: typeof C == "string" ? C : typeof d == "string" && d.length > 0 ? d : e.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return l;
}
function uu(e) {
  var C = e.name, l = C && C.lastIndexOf(".") !== -1;
  if (l && !e.type) {
    var d = C.split(".").pop().toLowerCase(), A = au.get(d);
    A && Object.defineProperty(e, "type", {
      value: A,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var iu = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function lu(e) {
  return pe(this, void 0, void 0, function() {
    return fe(this, function(C) {
      return It(e) && su(e) ? [2, Cu(e.dataTransfer, e.type)] : cu(e) ? [2, yu(e)] : Array.isArray(e) && e.every(function(l) {
        return "getFile" in l && typeof l.getFile == "function";
      }) ? [2, du(e)] : [2, []];
    });
  });
}
function su(e) {
  return It(e.dataTransfer);
}
function cu(e) {
  return It(e) && It(e.target);
}
function It(e) {
  return typeof e == "object" && e !== null;
}
function yu(e) {
  return So(e.target.files).map(function(C) {
    return Fe(C);
  });
}
function du(e) {
  return pe(this, void 0, void 0, function() {
    var C;
    return fe(this, function(l) {
      switch (l.label) {
        case 0:
          return [4, Promise.all(e.map(function(d) {
            return d.getFile();
          }))];
        case 1:
          return C = l.sent(), [2, C.map(function(d) {
            return Fe(d);
          })];
      }
    });
  });
}
function Cu(e, C) {
  return pe(this, void 0, void 0, function() {
    var l, d;
    return fe(this, function(A) {
      switch (A.label) {
        case 0:
          return e === null ? [2, []] : e.items ? (l = So(e.items).filter(function(R) {
            return R.kind === "file";
          }), C !== "drop" ? [2, l] : [4, Promise.all(l.map(pu))]) : [3, 2];
        case 1:
          return d = A.sent(), [2, Wo(fa(d))];
        case 2:
          return [2, Wo(So(e.files).map(function(R) {
            return Fe(R);
          }))];
      }
    });
  });
}
function Wo(e) {
  return e.filter(function(C) {
    return iu.indexOf(C.name) === -1;
  });
}
function So(e) {
  if (e === null)
    return [];
  for (var C = [], l = 0; l < e.length; l++) {
    var d = e[l];
    C.push(d);
  }
  return C;
}
function pu(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return xo(e);
  var C = e.webkitGetAsEntry();
  return C && C.isDirectory ? ga(C) : xo(e);
}
function fa(e) {
  return e.reduce(function(C, l) {
    return ou(C, Array.isArray(l) ? fa(l) : [l]);
  }, []);
}
function xo(e) {
  var C = e.getAsFile();
  if (!C)
    return Promise.reject(e + " is not a File");
  var l = Fe(C);
  return Promise.resolve(l);
}
function fu(e) {
  return pe(this, void 0, void 0, function() {
    return fe(this, function(C) {
      return [2, e.isDirectory ? ga(e) : gu(e)];
    });
  });
}
function ga(e) {
  var C = e.createReader();
  return new Promise(function(l, d) {
    var A = [];
    function R() {
      var c = this;
      C.readEntries(function(E) {
        return pe(c, void 0, void 0, function() {
          var G, h, dn;
          return fe(this, function(v) {
            switch (v.label) {
              case 0:
                if (E.length)
                  return [3, 5];
                v.label = 1;
              case 1:
                return v.trys.push([1, 3, , 4]), [4, Promise.all(A)];
              case 2:
                return G = v.sent(), l(G), [3, 4];
              case 3:
                return h = v.sent(), d(h), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                dn = Promise.all(E.map(fu)), A.push(dn), R(), v.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(E) {
        d(E);
      });
    }
    R();
  });
}
function gu(e) {
  return pe(this, void 0, void 0, function() {
    return fe(this, function(C) {
      return [2, new Promise(function(l, d) {
        e.file(function(A) {
          var R = Fe(A, e.fullPath);
          l(R);
        }, function(A) {
          d(A);
        });
      })];
    });
  });
}
var mu = function(e, C) {
  if (e && C) {
    var l = Array.isArray(C) ? C : C.split(",");
    if (l.length === 0)
      return !0;
    var d = e.name || "", A = (e.type || "").toLowerCase(), R = A.replace(/\/.*$/, "");
    return l.some(function(c) {
      var E = c.trim().toLowerCase();
      return E.charAt(0) === "." ? d.toLowerCase().endsWith(E) : E.endsWith("/*") ? R === E.replace(/\/.*$/, "") : A === E;
    });
  }
  return !0;
};
function Go(e, C) {
  var l = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(e);
    C && (d = d.filter(function(A) {
      return Object.getOwnPropertyDescriptor(e, A).enumerable;
    })), l.push.apply(l, d);
  }
  return l;
}
function Vo(e) {
  for (var C = 1; C < arguments.length; C++) {
    var l = arguments[C] != null ? arguments[C] : {};
    C % 2 ? Go(Object(l), !0).forEach(function(d) {
      ma(e, d, l[d]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : Go(Object(l)).forEach(function(d) {
      Object.defineProperty(e, d, Object.getOwnPropertyDescriptor(l, d));
    });
  }
  return e;
}
function ma(e, C, l) {
  return C in e ? Object.defineProperty(e, C, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : e[C] = l, e;
}
function Ko(e, C) {
  return wu(e) || Su(e, C) || vu(e, C) || hu();
}
function hu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vu(e, C) {
  if (e) {
    if (typeof e == "string")
      return qo(e, C);
    var l = Object.prototype.toString.call(e).slice(8, -1);
    if (l === "Object" && e.constructor && (l = e.constructor.name), l === "Map" || l === "Set")
      return Array.from(e);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
      return qo(e, C);
  }
}
function qo(e, C) {
  (C == null || C > e.length) && (C = e.length);
  for (var l = 0, d = new Array(C); l < C; l++)
    d[l] = e[l];
  return d;
}
function Su(e, C) {
  var l = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (l != null) {
    var d = [], A = !0, R = !1, c, E;
    try {
      for (l = l.call(e); !(A = (c = l.next()).done) && (d.push(c.value), !(C && d.length === C)); A = !0)
        ;
    } catch (G) {
      R = !0, E = G;
    } finally {
      try {
        !A && l.return != null && l.return();
      } finally {
        if (R)
          throw E;
      }
    }
    return d;
  }
}
function wu(e) {
  if (Array.isArray(e))
    return e;
}
var Mu = "file-invalid-type", bu = "file-too-large", Au = "file-too-small", Du = "too-many-files", Ru = function(C) {
  C = Array.isArray(C) && C.length === 1 ? C[0] : C;
  var l = Array.isArray(C) ? "one of ".concat(C.join(", ")) : C;
  return {
    code: Mu,
    message: "File type must be ".concat(l)
  };
}, zo = function(C) {
  return {
    code: bu,
    message: "File is larger than ".concat(C, " ").concat(C === 1 ? "byte" : "bytes")
  };
}, _o = function(C) {
  return {
    code: Au,
    message: "File is smaller than ".concat(C, " ").concat(C === 1 ? "byte" : "bytes")
  };
}, Nu = {
  code: Du,
  message: "Too many files"
};
function ha(e, C) {
  var l = e.type === "application/x-moz-file" || mu(e, C);
  return [l, l ? null : Ru(C)];
}
function va(e, C, l) {
  if (Ee(e.size))
    if (Ee(C) && Ee(l)) {
      if (e.size > l)
        return [!1, zo(l)];
      if (e.size < C)
        return [!1, _o(C)];
    } else {
      if (Ee(C) && e.size < C)
        return [!1, _o(C)];
      if (Ee(l) && e.size > l)
        return [!1, zo(l)];
    }
  return [!0, null];
}
function Ee(e) {
  return e != null;
}
function Tu(e) {
  var C = e.files, l = e.accept, d = e.minSize, A = e.maxSize, R = e.multiple, c = e.maxFiles;
  return !R && C.length > 1 || R && c >= 1 && C.length > c ? !1 : C.every(function(E) {
    var G = ha(E, l), h = Ko(G, 1), dn = h[0], v = va(E, d, A), an = Ko(v, 1), Fn = an[0];
    return dn && Fn;
  });
}
function Lt(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function At(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(C) {
    return C === "Files" || C === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Xo(e) {
  e.preventDefault();
}
function Pu(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Iu(e) {
  return e.indexOf("Edge/") !== -1;
}
function Lu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Pu(e) || Iu(e);
}
function Er() {
  for (var e = arguments.length, C = new Array(e), l = 0; l < e; l++)
    C[l] = arguments[l];
  return function(d) {
    for (var A = arguments.length, R = new Array(A > 1 ? A - 1 : 0), c = 1; c < A; c++)
      R[c - 1] = arguments[c];
    return C.some(function(E) {
      return !Lt(d) && E && E.apply(void 0, [d].concat(R)), Lt(d);
    });
  };
}
function Yo() {
  return "showOpenFilePicker" in window;
}
function ku(e) {
  return e = typeof e == "string" ? e.split(",") : e, [{
    description: "everything",
    // TODO: Need to handle filtering more elegantly than this!
    accept: Array.isArray(e) ? e.filter(function(C) {
      return C === "audio/*" || C === "video/*" || C === "image/*" || C === "text/*" || /\w+\/[-+.\w]+/g.test(C);
    }).reduce(function(C, l) {
      return Vo(Vo({}, C), {}, ma({}, l, []));
    }, {}) : {}
  }];
}
var Ou = ["children"], Eu = ["open"], Bu = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Hu = ["refKey", "onChange", "onClick"];
function Fu(e) {
  return Gu(e) || xu(e) || Sa(e) || Wu();
}
function Wu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Gu(e) {
  if (Array.isArray(e))
    return wo(e);
}
function mo(e, C) {
  return qu(e) || Ku(e, C) || Sa(e, C) || Vu();
}
function Vu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sa(e, C) {
  if (e) {
    if (typeof e == "string")
      return wo(e, C);
    var l = Object.prototype.toString.call(e).slice(8, -1);
    if (l === "Object" && e.constructor && (l = e.constructor.name), l === "Map" || l === "Set")
      return Array.from(e);
    if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
      return wo(e, C);
  }
}
function wo(e, C) {
  (C == null || C > e.length) && (C = e.length);
  for (var l = 0, d = new Array(C); l < C; l++)
    d[l] = e[l];
  return d;
}
function Ku(e, C) {
  var l = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (l != null) {
    var d = [], A = !0, R = !1, c, E;
    try {
      for (l = l.call(e); !(A = (c = l.next()).done) && (d.push(c.value), !(C && d.length === C)); A = !0)
        ;
    } catch (G) {
      R = !0, E = G;
    } finally {
      try {
        !A && l.return != null && l.return();
      } finally {
        if (R)
          throw E;
      }
    }
    return d;
  }
}
function qu(e) {
  if (Array.isArray(e))
    return e;
}
function jo(e, C) {
  var l = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(e);
    C && (d = d.filter(function(A) {
      return Object.getOwnPropertyDescriptor(e, A).enumerable;
    })), l.push.apply(l, d);
  }
  return l;
}
function rr(e) {
  for (var C = 1; C < arguments.length; C++) {
    var l = arguments[C] != null ? arguments[C] : {};
    C % 2 ? jo(Object(l), !0).forEach(function(d) {
      Mo(e, d, l[d]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : jo(Object(l)).forEach(function(d) {
      Object.defineProperty(e, d, Object.getOwnPropertyDescriptor(l, d));
    });
  }
  return e;
}
function Mo(e, C, l) {
  return C in e ? Object.defineProperty(e, C, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : e[C] = l, e;
}
function kt(e, C) {
  if (e == null)
    return {};
  var l = zu(e, C), d, A;
  if (Object.getOwnPropertySymbols) {
    var R = Object.getOwnPropertySymbols(e);
    for (A = 0; A < R.length; A++)
      d = R[A], !(C.indexOf(d) >= 0) && Object.prototype.propertyIsEnumerable.call(e, d) && (l[d] = e[d]);
  }
  return l;
}
function zu(e, C) {
  if (e == null)
    return {};
  var l = {}, d = Object.keys(e), A, R;
  for (R = 0; R < d.length; R++)
    A = d[R], !(C.indexOf(A) >= 0) && (l[A] = e[A]);
  return l;
}
var No = /* @__PURE__ */ b.forwardRef(function(e, C) {
  var l = e.children, d = kt(e, Ou), A = Ao(d), R = A.open, c = kt(A, Eu);
  return b.useImperativeHandle(C, function() {
    return {
      open: R
    };
  }, [R]), /* @__PURE__ */ ca.createElement(b.Fragment, null, l(rr(rr({}, c), {}, {
    open: R
  })));
});
No.displayName = "Dropzone";
var wa = {
  disabled: !1,
  getFilesFromEvent: lu,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !1
};
No.defaultProps = wa;
No.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.draggedFiles Files in active drag
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: Qn.func,
  /**
   * Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: Qn.oneOfType([Qn.string, Qn.arrayOf(Qn.string)]),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: Qn.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: Qn.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: Qn.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: Qn.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: Qn.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: Qn.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: Qn.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: Qn.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: Qn.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: Qn.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: Qn.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: Qn.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: Qn.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: Qn.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: Qn.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: Qn.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: Qn.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: Qn.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: Qn.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: Qn.func,
  /**
   * Custom validation function
   * @param {File} file
   * @returns {FileError|FileError[]}
   */
  validator: Qn.func
};
var bo = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function Ao() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, C = rr(rr({}, wa), e), l = C.accept, d = C.disabled, A = C.getFilesFromEvent, R = C.maxSize, c = C.minSize, E = C.multiple, G = C.maxFiles, h = C.onDragEnter, dn = C.onDragLeave, v = C.onDragOver, an = C.onDrop, Fn = C.onDropAccepted, tn = C.onDropRejected, An = C.onFileDialogCancel, qn = C.onFileDialogOpen, hn = C.useFsAccessApi, En = C.preventDropOnDocument, Dn = C.noClick, Jn = C.noKeyboard, Wn = C.noDrag, Rn = C.noDragEventsBubbling, or = C.validator, zn = b.useMemo(function() {
    return typeof qn == "function" ? qn : Uo;
  }, [qn]), Cr = b.useMemo(function() {
    return typeof An == "function" ? An : Uo;
  }, [An]), nr = b.useRef(null), en = b.useRef(null), pn = b.useReducer(_u, bo), _n = mo(pn, 2), Yn = _n[0], $n = _n[1], Tr = Yn.isFocused, Dr = Yn.isFileDialogActive, Sr = Yn.draggedFiles, Pr = function() {
    Dr && setTimeout(function() {
      if (en.current) {
        var Bn = en.current.files;
        Bn.length || ($n({
          type: "closeDialog"
        }), Cr());
      }
    }, 300);
  };
  b.useEffect(function() {
    return hn && Yo() ? function() {
    } : (window.addEventListener("focus", Pr, !1), function() {
      window.removeEventListener("focus", Pr, !1);
    });
  }, [en, Dr, Cr, hn]);
  var ar = b.useRef([]), mr = function(Bn) {
    nr.current && nr.current.contains(Bn.target) || (Bn.preventDefault(), ar.current = []);
  };
  b.useEffect(function() {
    return En && (document.addEventListener("dragover", Xo, !1), document.addEventListener("drop", mr, !1)), function() {
      En && (document.removeEventListener("dragover", Xo), document.removeEventListener("drop", mr));
    };
  }, [nr, En]);
  var yr = b.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), pr(Q), ar.current = [].concat(Fu(ar.current), [Q.target]), At(Q) && Promise.resolve(A(Q)).then(function(Bn) {
      Lt(Q) && !Rn || ($n({
        draggedFiles: Bn,
        isDragActive: !0,
        type: "setDraggedFiles"
      }), h && h(Q));
    });
  }, [A, h, Rn]), Br = b.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), pr(Q);
    var Bn = At(Q);
    if (Bn && Q.dataTransfer)
      try {
        Q.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Bn && v && v(Q), !1;
  }, [v, Rn]), q = b.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), pr(Q);
    var Bn = ar.current.filter(function(ir) {
      return nr.current && nr.current.contains(ir);
    }), er = Bn.indexOf(Q.target);
    er !== -1 && Bn.splice(er, 1), ar.current = Bn, !(Bn.length > 0) && ($n({
      isDragActive: !1,
      type: "setDraggedFiles",
      draggedFiles: []
    }), At(Q) && dn && dn(Q));
  }, [nr, dn, Rn]), Cn = b.useCallback(function(Q, Bn) {
    var er = [], ir = [];
    Q.forEach(function(fr) {
      var Fr = ha(fr, l), Nr = mo(Fr, 2), jr = Nr[0], Ur = Nr[1], Jr = va(fr, c, R), Vr = mo(Jr, 2), $r = Vr[0], Kr = Vr[1], qr = or ? or(fr) : null;
      if (jr && $r && !qr)
        er.push(fr);
      else {
        var Wr = [Ur, Kr];
        qr && (Wr = Wr.concat(qr)), ir.push({
          file: fr,
          errors: Wr.filter(function(ue) {
            return ue;
          })
        });
      }
    }), (!E && er.length > 1 || E && G >= 1 && er.length > G) && (er.forEach(function(fr) {
      ir.push({
        file: fr,
        errors: [Nu]
      });
    }), er.splice(0)), $n({
      acceptedFiles: er,
      fileRejections: ir,
      type: "setFiles"
    }), an && an(er, ir, Bn), ir.length > 0 && tn && tn(ir, Bn), er.length > 0 && Fn && Fn(er, Bn);
  }, [$n, E, l, c, R, G, an, Fn, tn, or]), fn = b.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), pr(Q), ar.current = [], At(Q) && Promise.resolve(A(Q)).then(function(Bn) {
      Lt(Q) && !Rn || Cn(Bn, Q);
    }), $n({
      type: "reset"
    });
  }, [A, Cn, Rn]), un = b.useCallback(function() {
    if (hn && Yo()) {
      $n({
        type: "openDialog"
      }), zn();
      var Q = {
        multiple: E,
        types: ku(l)
      };
      window.showOpenFilePicker(Q).then(function(Bn) {
        return A(Bn);
      }).then(function(Bn) {
        return Cn(Bn, null);
      }).catch(function(Bn) {
        return Cr(Bn);
      }).finally(function() {
        return $n({
          type: "closeDialog"
        });
      });
      return;
    }
    en.current && ($n({
      type: "openDialog"
    }), zn(), en.current.value = null, en.current.click());
  }, [$n, zn, Cr, hn, Cn, l, E]), Gn = b.useCallback(function(Q) {
    !nr.current || !nr.current.isEqualNode(Q.target) || (Q.keyCode === 32 || Q.keyCode === 13) && (Q.preventDefault(), un());
  }, [nr, en, un]), jn = b.useCallback(function() {
    $n({
      type: "focus"
    });
  }, []), Rr = b.useCallback(function() {
    $n({
      type: "blur"
    });
  }, []), Ir = b.useCallback(function() {
    Dn || (Lu() ? setTimeout(un, 0) : un());
  }, [en, Dn, un]), wr = function(Bn) {
    return d ? null : Bn;
  }, Lr = function(Bn) {
    return Jn ? null : wr(Bn);
  }, hr = function(Bn) {
    return Wn ? null : wr(Bn);
  }, pr = function(Bn) {
    Rn && Bn.stopPropagation();
  }, Mr = b.useMemo(function() {
    return function() {
      var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, Bn = Q.refKey, er = Bn === void 0 ? "ref" : Bn, ir = Q.role, fr = Q.onKeyDown, Fr = Q.onFocus, Nr = Q.onBlur, jr = Q.onClick, Ur = Q.onDragEnter, Jr = Q.onDragOver, Vr = Q.onDragLeave, $r = Q.onDrop, Kr = kt(Q, Bu);
      return rr(rr(Mo({
        onKeyDown: Lr(Er(fr, Gn)),
        onFocus: Lr(Er(Fr, jn)),
        onBlur: Lr(Er(Nr, Rr)),
        onClick: wr(Er(jr, Ir)),
        onDragEnter: hr(Er(Ur, yr)),
        onDragOver: hr(Er(Jr, Br)),
        onDragLeave: hr(Er(Vr, q)),
        onDrop: hr(Er($r, fn)),
        role: typeof ir == "string" && ir !== "" ? ir : "button"
      }, er, nr), !d && !Jn ? {
        tabIndex: 0
      } : {}), Kr);
    };
  }, [nr, Gn, jn, Rr, Ir, yr, Br, q, fn, Jn, Wn, d]), xr = b.useCallback(function(Q) {
    Q.stopPropagation();
  }, []), kr = b.useMemo(function() {
    return function() {
      var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, Bn = Q.refKey, er = Bn === void 0 ? "ref" : Bn, ir = Q.onChange, fr = Q.onClick, Fr = kt(Q, Hu), Nr = Mo({
        accept: l,
        multiple: E,
        type: "file",
        style: {
          display: "none"
        },
        onChange: wr(Er(ir, fn)),
        onClick: wr(Er(fr, xr)),
        autoComplete: "off",
        tabIndex: -1
      }, er, en);
      return rr(rr({}, Nr), Fr);
    };
  }, [en, l, E, fn, d]), Hr = Sr.length, Gr = Hr > 0 && Tu({
    files: Sr,
    accept: l,
    minSize: c,
    maxSize: R,
    multiple: E,
    maxFiles: G
  }), ae = Hr > 0 && !Gr;
  return rr(rr({}, Yn), {}, {
    isDragAccept: Gr,
    isDragReject: ae,
    isFocused: Tr && !d,
    getRootProps: Mr,
    getInputProps: kr,
    rootRef: nr,
    inputRef: en,
    open: wr(un)
  });
}
function _u(e, C) {
  switch (C.type) {
    case "focus":
      return rr(rr({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return rr(rr({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return rr(rr({}, bo), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return rr(rr({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      var l = C.isDragActive, d = C.draggedFiles;
      return rr(rr({}, e), {}, {
        draggedFiles: d,
        isDragActive: l
      });
    case "setFiles":
      return rr(rr({}, e), {}, {
        acceptedFiles: C.acceptedFiles,
        fileRejections: C.fileRejections
      });
    case "reset":
      return rr({}, bo);
    default:
      return e;
  }
}
function Uo() {
}
const de = ({ children: e, className: C = "" }) => /* @__PURE__ */ M("div", { className: `tab-content ${C}`, children: e }), Xu = (e) => {
  const { globalActive: C } = b.useContext(Ce), l = b.useContext(He);
  return /* @__PURE__ */ M(Ma, { ...e, setActiveTab: (A) => {
    l({ type: "EDITOR_SET_GLOBALACTIVE", payload: A });
  }, activeTab: C });
}, Yu = ({ children: e, className: C = void 0, startingTab: l }) => {
  const [d, A] = b.useState(l);
  return /* @__PURE__ */ M(Ma, { className: C, setActiveTab: A, activeTab: d, children: e });
}, Ma = ({ children: e, className: C, activeTab: l, setActiveTab: d }) => {
  const A = (E, G) => {
    E || d(G);
  };
  let R = "tabs";
  C && (R = `tabs ${C}`);
  const c = e.map(({ props: E }, G) => {
    let h = "nav-item", dn = E.disableRule || !1;
    return dn && (h += " disabled"), G === l && (h += " active"), /* @__PURE__ */ rn("li", { onClick: () => A(dn, G), className: h, children: [
      E.icon,
      E.title
    ] }, E.title);
  });
  return /* @__PURE__ */ rn(br, { children: [
    /* @__PURE__ */ M("nav", { className: R, children: /* @__PURE__ */ M("ul", { className: "nav nav-fill", children: c }) }),
    e[l]
  ] });
};
var Do = { exports: {} }, Dt = { exports: {} }, Jo;
function ju() {
  return Jo || (Jo = 1, function(e, C) {
    (function(l, d) {
      d(C, b);
    })(Ca, function(l, d) {
      function A(n, a, i, s, m, f, S) {
        try {
          var N = n[f](S), P = N.value;
        } catch (I) {
          return void i(I);
        }
        N.done ? a(P) : Promise.resolve(P).then(s, m);
      }
      function R(n) {
        return function() {
          var a = this, i = arguments;
          return new Promise(function(s, m) {
            var f = n.apply(a, i);
            function S(P) {
              A(f, s, m, S, N, "next", P);
            }
            function N(P) {
              A(f, s, m, S, N, "throw", P);
            }
            S(void 0);
          });
        };
      }
      function c() {
        return (c = Object.assign || function(n) {
          for (var a = 1; a < arguments.length; a++) {
            var i = arguments[a];
            for (var s in i)
              Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
          }
          return n;
        }).apply(this, arguments);
      }
      function E(n, a) {
        if (n == null)
          return {};
        var i, s, m = {}, f = Object.keys(n);
        for (s = 0; s < f.length; s++)
          i = f[s], a.indexOf(i) >= 0 || (m[i] = n[i]);
        return m;
      }
      function G(n) {
        var a = function(i, s) {
          if (typeof i != "object" || i === null)
            return i;
          var m = i[Symbol.toPrimitive];
          if (m !== void 0) {
            var f = m.call(i, s || "default");
            if (typeof f != "object")
              return f;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (s === "string" ? String : Number)(i);
        }(n, "string");
        return typeof a == "symbol" ? a : String(a);
      }
      d = d && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
      var h = { init: "init" }, dn = function(n) {
        var a = n.value;
        return a === void 0 ? "" : a;
      }, v = function() {
        return d.createElement(d.Fragment, null, " ");
      }, an = { Cell: dn, width: 150, minWidth: 0, maxWidth: Number.MAX_SAFE_INTEGER };
      function Fn() {
        for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        return a.reduce(function(s, m) {
          var f = m.style, S = m.className;
          return s = c({}, s, {}, E(m, ["style", "className"])), f && (s.style = s.style ? c({}, s.style || {}, {}, f || {}) : f), S && (s.className = s.className ? s.className + " " + S : S), s.className === "" && delete s.className, s;
        }, {});
      }
      var tn = function(n, a) {
        return a === void 0 && (a = {}), function(i) {
          return i === void 0 && (i = {}), [].concat(n, [i]).reduce(function(s, m) {
            return function f(S, N, P) {
              return typeof N == "function" ? f({}, N(S, P)) : Array.isArray(N) ? Fn.apply(void 0, [S].concat(N)) : Fn(S, N);
            }(s, m, c({}, a, { userProps: i }));
          }, {});
        };
      }, An = function(n, a, i, s) {
        return i === void 0 && (i = {}), n.reduce(function(m, f) {
          return f(m, i);
        }, a);
      }, qn = function(n, a, i) {
        return i === void 0 && (i = {}), n.forEach(function(s) {
          s(a, i);
        });
      };
      function hn(n, a, i, s) {
        n.findIndex(function(m) {
          return m.pluginName === i;
        }), a.forEach(function(m) {
          n.findIndex(function(f) {
            return f.pluginName === m;
          });
        });
      }
      function En(n, a) {
        return typeof n == "function" ? n(a) : n;
      }
      function Dn(n) {
        var a = d.useRef();
        return a.current = n, d.useCallback(function() {
          return a.current;
        }, []);
      }
      var Jn = typeof document < "u" ? d.useLayoutEffect : d.useEffect;
      function Wn(n, a) {
        var i = d.useRef(!1);
        Jn(function() {
          i.current && n(), i.current = !0;
        }, a);
      }
      function Rn(n, a, i) {
        return i === void 0 && (i = {}), function(s, m) {
          m === void 0 && (m = {});
          var f = typeof s == "string" ? a[s] : s;
          if (f === void 0)
            throw console.info(a), new Error("Renderer Error ☝️");
          return or(f, c({}, n, { column: a }, i, {}, m));
        };
      }
      function or(n, a) {
        return function(s) {
          return typeof s == "function" && (m = Object.getPrototypeOf(s)).prototype && m.prototype.isReactComponent;
          var m;
        }(i = n) || typeof i == "function" || function(s) {
          return typeof s == "object" && typeof s.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(s.$$typeof.description);
        }(i) ? d.createElement(n, a) : n;
        var i;
      }
      function zn(n, a, i) {
        return i === void 0 && (i = 0), n.map(function(s) {
          return nr(s = c({}, s, { parent: a, depth: i })), s.columns && (s.columns = zn(s.columns, s, i + 1)), s;
        });
      }
      function Cr(n) {
        return Tr(n, "columns");
      }
      function nr(n) {
        var a = n.id, i = n.accessor, s = n.Header;
        if (typeof i == "string") {
          a = a || i;
          var m = i.split(".");
          i = function(f) {
            return function(S, N, P) {
              if (!N)
                return S;
              var I, V = typeof N == "function" ? N : JSON.stringify(N), F = _n.get(V) || function() {
                var W = function(k) {
                  return function H(X, U) {
                    if (U === void 0 && (U = []), Array.isArray(X))
                      for (var ln = 0; ln < X.length; ln += 1)
                        H(X[ln], U);
                    else
                      U.push(X);
                    return U;
                  }(k).map(function(H) {
                    return String(H).replace(".", "_");
                  }).join(".").replace(yr, ".").replace(Br, "").split(".");
                }(N);
                return _n.set(V, W), W;
              }();
              try {
                I = F.reduce(function(W, k) {
                  return W[k];
                }, S);
              } catch {
              }
              return I !== void 0 ? I : P;
            }(f, m);
          };
        }
        if (!a && typeof s == "string" && s && (a = s), !a && n.columns)
          throw console.error(n), new Error('A column ID (or unique "Header" value) is required!');
        if (!a)
          throw console.error(n), new Error("A column ID (or string accessor) is required!");
        return Object.assign(n, { id: a, accessor: i }), n;
      }
      function en(n, a) {
        if (!a)
          throw new Error();
        return Object.assign(n, c({ Header: v, Footer: v }, an, {}, a, {}, n)), Object.assign(n, { originalWidth: n.width }), n;
      }
      function pn(n, a, i) {
        i === void 0 && (i = function() {
          return {};
        });
        for (var s = [], m = n, f = 0, S = function() {
          return f++;
        }, N = function() {
          var P = { headers: [] }, I = [], V = m.some(function(F) {
            return F.parent;
          });
          m.forEach(function(F) {
            var W, k = [].concat(I).reverse()[0];
            V && (F.parent ? W = c({}, F.parent, { originalId: F.parent.id, id: F.parent.id + "_" + S(), headers: [F] }, i(F)) : W = en(c({ originalId: F.id + "_placeholder", id: F.id + "_placeholder_" + S(), placeholderOf: F, headers: [F] }, i(F)), a), k && k.originalId === W.originalId ? k.headers.push(F) : I.push(W)), P.headers.push(F);
          }), s.push(P), m = I;
        }; m.length; )
          N();
        return s.reverse();
      }
      var _n = /* @__PURE__ */ new Map();
      function Yn() {
        for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        for (var s = 0; s < a.length; s += 1)
          if (a[s] !== void 0)
            return a[s];
      }
      function $n(n) {
        if (typeof n == "function")
          return n;
      }
      function Tr(n, a) {
        var i = [];
        return function s(m) {
          m.forEach(function(f) {
            f[a] ? s(f[a]) : i.push(f);
          });
        }(n), i;
      }
      function Dr(n, a) {
        var i = a.manualExpandedKey, s = a.expanded, m = a.expandSubRows, f = m === void 0 || m, S = [];
        return n.forEach(function(N) {
          return function P(I, V) {
            V === void 0 && (V = !0), I.isExpanded = I.original && I.original[i] || s[I.id], I.canExpand = I.subRows && !!I.subRows.length, V && S.push(I), I.subRows && I.subRows.length && I.isExpanded && I.subRows.forEach(function(F) {
              return P(F, f);
            });
          }(N);
        }), S;
      }
      function Sr(n, a, i) {
        return $n(n) || a[n] || i[n] || i.text;
      }
      function Pr(n, a, i) {
        return n ? n(a, i) : a === void 0;
      }
      function ar() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var mr = null, yr = /\[/g, Br = /\]/g, q = function(n) {
        return c({ role: "table" }, n);
      }, Cn = function(n) {
        return c({ role: "rowgroup" }, n);
      }, fn = function(n, a) {
        var i = a.column;
        return c({ key: "header_" + i.id, colSpan: i.totalVisibleHeaderCount, role: "columnheader" }, n);
      }, un = function(n, a) {
        var i = a.column;
        return c({ key: "footer_" + i.id, colSpan: i.totalVisibleHeaderCount }, n);
      }, Gn = function(n, a) {
        return c({ key: "headerGroup_" + a.index, role: "row" }, n);
      }, jn = function(n, a) {
        return c({ key: "footerGroup_" + a.index }, n);
      }, Rr = function(n, a) {
        return c({ key: "row_" + a.row.id, role: "row" }, n);
      }, Ir = function(n, a) {
        var i = a.cell;
        return c({ key: "cell_" + i.row.id + "_" + i.column.id, role: "cell" }, n);
      };
      function wr() {
        return { useOptions: [], stateReducers: [], useControlledState: [], columns: [], columnsDeps: [], allColumns: [], allColumnsDeps: [], accessValue: [], materializedColumns: [], materializedColumnsDeps: [], useInstanceAfterData: [], visibleColumns: [], visibleColumnsDeps: [], headerGroups: [], headerGroupsDeps: [], useInstanceBeforeDimensions: [], useInstance: [], prepareRow: [], getTableProps: [q], getTableBodyProps: [Cn], getHeaderGroupProps: [Gn], getFooterGroupProps: [jn], getHeaderProps: [fn], getFooterProps: [un], getRowProps: [Rr], getCellProps: [Ir], useFinalInstance: [] };
      }
      h.resetHiddenColumns = "resetHiddenColumns", h.toggleHideColumn = "toggleHideColumn", h.setHiddenColumns = "setHiddenColumns", h.toggleHideAllColumns = "toggleHideAllColumns";
      var Lr = function(n) {
        n.getToggleHiddenProps = [hr], n.getToggleHideAllColumnsProps = [pr], n.stateReducers.push(Mr), n.useInstanceBeforeDimensions.push(xr), n.headerGroupsDeps.push(function(a, i) {
          var s = i.instance;
          return [].concat(a, [s.state.hiddenColumns]);
        }), n.useInstance.push(kr);
      };
      Lr.pluginName = "useColumnVisibility";
      var hr = function(n, a) {
        var i = a.column;
        return [n, { onChange: function(s) {
          i.toggleHidden(!s.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isVisible, title: "Toggle Column Visible" }];
      }, pr = function(n, a) {
        var i = a.instance;
        return [n, { onChange: function(s) {
          i.toggleHideAllColumns(!s.target.checked);
        }, style: { cursor: "pointer" }, checked: !i.allColumnsHidden && !i.state.hiddenColumns.length, title: "Toggle All Columns Hidden", indeterminate: !i.allColumnsHidden && i.state.hiddenColumns.length }];
      };
      function Mr(n, a, i, s) {
        if (a.type === h.init)
          return c({ hiddenColumns: [] }, n);
        if (a.type === h.resetHiddenColumns)
          return c({}, n, { hiddenColumns: s.initialState.hiddenColumns || [] });
        if (a.type === h.toggleHideColumn) {
          var m = (a.value !== void 0 ? a.value : !n.hiddenColumns.includes(a.columnId)) ? [].concat(n.hiddenColumns, [a.columnId]) : n.hiddenColumns.filter(function(f) {
            return f !== a.columnId;
          });
          return c({}, n, { hiddenColumns: m });
        }
        return a.type === h.setHiddenColumns ? c({}, n, { hiddenColumns: En(a.value, n.hiddenColumns) }) : a.type === h.toggleHideAllColumns ? c({}, n, { hiddenColumns: (a.value !== void 0 ? a.value : !n.hiddenColumns.length) ? s.allColumns.map(function(f) {
          return f.id;
        }) : [] }) : void 0;
      }
      function xr(n) {
        var a = n.headers, i = n.state.hiddenColumns;
        d.useRef(!1).current;
        var s = 0;
        a.forEach(function(m) {
          return s += function f(S, N) {
            S.isVisible = N && !i.includes(S.id);
            var P = 0;
            return S.headers && S.headers.length ? S.headers.forEach(function(I) {
              return P += f(I, S.isVisible);
            }) : P = S.isVisible ? 1 : 0, S.totalVisibleHeaderCount = P, P;
          }(m, !0);
        });
      }
      function kr(n) {
        var a = n.columns, i = n.flatHeaders, s = n.dispatch, m = n.allColumns, f = n.getHooks, S = n.state.hiddenColumns, N = n.autoResetHiddenColumns, P = N === void 0 || N, I = Dn(n), V = m.length === S.length, F = d.useCallback(function(U, ln) {
          return s({ type: h.toggleHideColumn, columnId: U, value: ln });
        }, [s]), W = d.useCallback(function(U) {
          return s({ type: h.setHiddenColumns, value: U });
        }, [s]), k = d.useCallback(function(U) {
          return s({ type: h.toggleHideAllColumns, value: U });
        }, [s]), H = tn(f().getToggleHideAllColumnsProps, { instance: I() });
        i.forEach(function(U) {
          U.toggleHidden = function(ln) {
            s({ type: h.toggleHideColumn, columnId: U.id, value: ln });
          }, U.getToggleHiddenProps = tn(f().getToggleHiddenProps, { instance: I(), column: U });
        });
        var X = Dn(P);
        Wn(function() {
          X() && s({ type: h.resetHiddenColumns });
        }, [s, a]), Object.assign(n, { allColumnsHidden: V, toggleHideColumn: F, setHiddenColumns: W, toggleHideAllColumns: k, getToggleHideAllColumnsProps: H });
      }
      var Hr = {}, Gr = {}, ae = function(n, a, i) {
        return n;
      }, Q = function(n, a) {
        return n.subRows || [];
      }, Bn = function(n, a, i) {
        return "" + (i ? [i.id, a].join(".") : a);
      }, er = function(n) {
        return n;
      };
      function ir(n) {
        var a = n.initialState, i = a === void 0 ? Hr : a, s = n.defaultColumn, m = s === void 0 ? Gr : s, f = n.getSubRows, S = f === void 0 ? Q : f, N = n.getRowId, P = N === void 0 ? Bn : N, I = n.stateReducer, V = I === void 0 ? ae : I, F = n.useControlledState, W = F === void 0 ? er : F;
        return c({}, E(n, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]), { initialState: i, defaultColumn: m, getSubRows: S, getRowId: P, stateReducer: V, useControlledState: W });
      }
      function fr(n, a) {
        a === void 0 && (a = 0);
        var i = 0, s = 0, m = 0, f = 0;
        return n.forEach(function(S) {
          var N = S.headers;
          if (S.totalLeft = a, N && N.length) {
            var P = fr(N, a), I = P[0], V = P[1], F = P[2], W = P[3];
            S.totalMinWidth = I, S.totalWidth = V, S.totalMaxWidth = F, S.totalFlexWidth = W;
          } else
            S.totalMinWidth = S.minWidth, S.totalWidth = Math.min(Math.max(S.minWidth, S.width), S.maxWidth), S.totalMaxWidth = S.maxWidth, S.totalFlexWidth = S.canResize ? S.totalWidth : 0;
          S.isVisible && (a += S.totalWidth, i += S.totalMinWidth, s += S.totalWidth, m += S.totalMaxWidth, f += S.totalFlexWidth);
        }), [i, s, m, f];
      }
      function Fr(n) {
        var a = n.data, i = n.rows, s = n.flatRows, m = n.rowsById, f = n.column, S = n.getRowId, N = n.getSubRows, P = n.accessValueHooks, I = n.getInstance;
        a.forEach(function(V, F) {
          return function W(k, H, X, U, ln) {
            X === void 0 && (X = 0);
            var In = k, sn = S(k, H, U), K = m[sn];
            if (K)
              K.subRows && K.originalSubRows.forEach(function(nn, Mn) {
                return W(nn, Mn, X + 1, K);
              });
            else if ((K = { id: sn, original: In, index: H, depth: X, cells: [{}] }).cells.map = ar, K.cells.filter = ar, K.cells.forEach = ar, K.cells[0].getCellProps = ar, K.values = {}, ln.push(K), s.push(K), m[sn] = K, K.originalSubRows = N(k, H), K.originalSubRows) {
              var Tn = [];
              K.originalSubRows.forEach(function(nn, Mn) {
                return W(nn, Mn, X + 1, K, Tn);
              }), K.subRows = Tn;
            }
            f.accessor && (K.values[f.id] = f.accessor(k, H, K, ln, a)), K.values[f.id] = An(P, K.values[f.id], { row: K, column: f, instance: I() });
          }(V, F, 0, void 0, i);
        });
      }
      h.resetExpanded = "resetExpanded", h.toggleRowExpanded = "toggleRowExpanded", h.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var Nr = function(n) {
        n.getToggleAllRowsExpandedProps = [jr], n.getToggleRowExpandedProps = [Ur], n.stateReducers.push(Jr), n.useInstance.push(Vr), n.prepareRow.push($r);
      };
      Nr.pluginName = "useExpanded";
      var jr = function(n, a) {
        var i = a.instance;
        return [n, { onClick: function(s) {
          i.toggleAllRowsExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle All Rows Expanded" }];
      }, Ur = function(n, a) {
        var i = a.row;
        return [n, { onClick: function() {
          i.toggleRowExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle Row Expanded" }];
      };
      function Jr(n, a, i, s) {
        if (a.type === h.init)
          return c({ expanded: {} }, n);
        if (a.type === h.resetExpanded)
          return c({}, n, { expanded: s.initialState.expanded || {} });
        if (a.type === h.toggleAllRowsExpanded) {
          var m = a.value, f = s.rowsById, S = Object.keys(f).length === Object.keys(n.expanded).length;
          if (m !== void 0 ? m : !S) {
            var N = {};
            return Object.keys(f).forEach(function(H) {
              N[H] = !0;
            }), c({}, n, { expanded: N });
          }
          return c({}, n, { expanded: {} });
        }
        if (a.type === h.toggleRowExpanded) {
          var P, I = a.id, V = a.value, F = n.expanded[I], W = V !== void 0 ? V : !F;
          if (!F && W)
            return c({}, n, { expanded: c({}, n.expanded, (P = {}, P[I] = !0, P)) });
          if (F && !W) {
            var k = n.expanded;
            return k[I], c({}, n, { expanded: E(k, [I].map(G)) });
          }
          return n;
        }
      }
      function Vr(n) {
        var a = n.data, i = n.rows, s = n.rowsById, m = n.manualExpandedKey, f = m === void 0 ? "expanded" : m, S = n.paginateExpandedRows, N = S === void 0 || S, P = n.expandSubRows, I = P === void 0 || P, V = n.autoResetExpanded, F = V === void 0 || V, W = n.getHooks, k = n.plugins, H = n.state.expanded, X = n.dispatch;
        hn(k, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var U = Dn(F), ln = !!(Object.keys(s).length && Object.keys(H).length);
        ln && Object.keys(s).some(function(xn) {
          return !H[xn];
        }) && (ln = !1), Wn(function() {
          U() && X({ type: h.resetExpanded });
        }, [X, a]);
        var In = d.useCallback(function(xn, gn) {
          X({ type: h.toggleRowExpanded, id: xn, value: gn });
        }, [X]), sn = d.useCallback(function(xn) {
          return X({ type: h.toggleAllRowsExpanded, value: xn });
        }, [X]), K = d.useMemo(function() {
          return N ? Dr(i, { manualExpandedKey: f, expanded: H, expandSubRows: I }) : i;
        }, [N, i, f, H, I]), Tn = d.useMemo(function() {
          return function(xn) {
            var gn = 0;
            return Object.keys(xn).forEach(function(Sn) {
              var Kn = Sn.split(".");
              gn = Math.max(gn, Kn.length);
            }), gn;
          }(H);
        }, [H]), nn = Dn(n), Mn = tn(W().getToggleAllRowsExpandedProps, { instance: nn() });
        Object.assign(n, { preExpandedRows: i, expandedRows: K, rows: K, expandedDepth: Tn, isAllRowsExpanded: ln, toggleRowExpanded: In, toggleAllRowsExpanded: sn, getToggleAllRowsExpandedProps: Mn });
      }
      function $r(n, a) {
        var i = a.instance.getHooks, s = a.instance;
        n.toggleRowExpanded = function(m) {
          return s.toggleRowExpanded(n.id, m);
        }, n.getToggleRowExpandedProps = tn(i().getToggleRowExpandedProps, { instance: s, row: n });
      }
      var Kr = function(n, a, i) {
        return n = n.filter(function(s) {
          return a.some(function(m) {
            var f = s.values[m];
            return String(f).toLowerCase().includes(String(i).toLowerCase());
          });
        });
      };
      Kr.autoRemove = function(n) {
        return !n;
      };
      var qr = function(n, a, i) {
        return n.filter(function(s) {
          return a.some(function(m) {
            var f = s.values[m];
            return f === void 0 || String(f).toLowerCase() === String(i).toLowerCase();
          });
        });
      };
      qr.autoRemove = function(n) {
        return !n;
      };
      var Wr = function(n, a, i) {
        return n.filter(function(s) {
          return a.some(function(m) {
            var f = s.values[m];
            return f === void 0 || String(f) === String(i);
          });
        });
      };
      Wr.autoRemove = function(n) {
        return !n;
      };
      var ue = function(n, a, i) {
        return n.filter(function(s) {
          return a.some(function(m) {
            return s.values[m].includes(i);
          });
        });
      };
      ue.autoRemove = function(n) {
        return !n || !n.length;
      };
      var ge = function(n, a, i) {
        return n.filter(function(s) {
          return a.some(function(m) {
            var f = s.values[m];
            return f && f.length && i.every(function(S) {
              return f.includes(S);
            });
          });
        });
      };
      ge.autoRemove = function(n) {
        return !n || !n.length;
      };
      var We = function(n, a, i) {
        return n.filter(function(s) {
          return a.some(function(m) {
            var f = s.values[m];
            return f && f.length && i.some(function(S) {
              return f.includes(S);
            });
          });
        });
      };
      We.autoRemove = function(n) {
        return !n || !n.length;
      };
      var me = function(n, a, i) {
        return n.filter(function(s) {
          return a.some(function(m) {
            var f = s.values[m];
            return i.includes(f);
          });
        });
      };
      me.autoRemove = function(n) {
        return !n || !n.length;
      };
      var xe = function(n, a, i) {
        return n.filter(function(s) {
          return a.some(function(m) {
            return s.values[m] === i;
          });
        });
      };
      xe.autoRemove = function(n) {
        return n === void 0;
      };
      var Ge = function(n, a, i) {
        return n.filter(function(s) {
          return a.some(function(m) {
            return s.values[m] == i;
          });
        });
      };
      Ge.autoRemove = function(n) {
        return n == null;
      };
      var Ve = function(n, a, i) {
        var s = i || [], m = s[0], f = s[1];
        if ((m = typeof m == "number" ? m : -1 / 0) > (f = typeof f == "number" ? f : 1 / 0)) {
          var S = m;
          m = f, f = S;
        }
        return n.filter(function(N) {
          return a.some(function(P) {
            var I = N.values[P];
            return I >= m && I <= f;
          });
        });
      };
      Ve.autoRemove = function(n) {
        return !n || typeof n[0] != "number" && typeof n[1] != "number";
      };
      var Zr = Object.freeze({ __proto__: null, text: Kr, exactText: qr, exactTextCase: Wr, includes: ue, includesAll: ge, includesSome: We, includesValue: me, exact: xe, equals: Ge, between: Ve });
      h.resetFilters = "resetFilters", h.setFilter = "setFilter", h.setAllFilters = "setAllFilters";
      var Ke = function(n) {
        n.stateReducers.push(Bt), n.useInstance.push(qe);
      };
      function Bt(n, a, i, s) {
        if (a.type === h.init)
          return c({ filters: [] }, n);
        if (a.type === h.resetFilters)
          return c({}, n, { filters: s.initialState.filters || [] });
        if (a.type === h.setFilter) {
          var m = a.columnId, f = a.filterValue, S = s.allColumns, N = s.filterTypes, P = S.find(function(X) {
            return X.id === m;
          });
          if (!P)
            throw new Error("React-Table: Could not find a column with id: " + m);
          var I = Sr(P.filter, N || {}, Zr), V = n.filters.find(function(X) {
            return X.id === m;
          }), F = En(f, V && V.value);
          return Pr(I.autoRemove, F, P) ? c({}, n, { filters: n.filters.filter(function(X) {
            return X.id !== m;
          }) }) : c({}, n, V ? { filters: n.filters.map(function(X) {
            return X.id === m ? { id: m, value: F } : X;
          }) } : { filters: [].concat(n.filters, [{ id: m, value: F }]) });
        }
        if (a.type === h.setAllFilters) {
          var W = a.filters, k = s.allColumns, H = s.filterTypes;
          return c({}, n, { filters: En(W, n.filters).filter(function(X) {
            var U = k.find(function(ln) {
              return ln.id === X.id;
            });
            return !Pr(Sr(U.filter, H || {}, Zr).autoRemove, X.value, U);
          }) });
        }
      }
      function qe(n) {
        var a = n.data, i = n.rows, s = n.flatRows, m = n.rowsById, f = n.allColumns, S = n.filterTypes, N = n.manualFilters, P = n.defaultCanFilter, I = P !== void 0 && P, V = n.disableFilters, F = n.state.filters, W = n.dispatch, k = n.autoResetFilters, H = k === void 0 || k, X = d.useCallback(function(nn, Mn) {
          W({ type: h.setFilter, columnId: nn, filterValue: Mn });
        }, [W]), U = d.useCallback(function(nn) {
          W({ type: h.setAllFilters, filters: nn });
        }, [W]);
        f.forEach(function(nn) {
          var Mn = nn.id, xn = nn.accessor, gn = nn.defaultCanFilter, Sn = nn.disableFilters;
          nn.canFilter = xn ? Yn(Sn !== !0 && void 0, V !== !0 && void 0, !0) : Yn(gn, I, !1), nn.setFilter = function(Nn) {
            return X(nn.id, Nn);
          };
          var Kn = F.find(function(Nn) {
            return Nn.id === Mn;
          });
          nn.filterValue = Kn && Kn.value;
        });
        var ln = d.useMemo(function() {
          if (N || !F.length)
            return [i, s, m];
          var nn = [], Mn = {};
          return [function xn(gn, Sn) {
            Sn === void 0 && (Sn = 0);
            var Kn = gn;
            return (Kn = F.reduce(function(Nn, Vn) {
              var r = Vn.id, t = Vn.value, u = f.find(function(p) {
                return p.id === r;
              });
              if (!u)
                return Nn;
              Sn === 0 && (u.preFilteredRows = Nn);
              var o = Sr(u.filter, S || {}, Zr);
              return o ? (u.filteredRows = o(Nn, [r], t), u.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + u.id + "."), Nn);
            }, gn)).forEach(function(Nn) {
              nn.push(Nn), Mn[Nn.id] = Nn, Nn.subRows && (Nn.subRows = Nn.subRows && Nn.subRows.length > 0 ? xn(Nn.subRows, Sn + 1) : Nn.subRows);
            }), Kn;
          }(i), nn, Mn];
        }, [N, F, i, s, m, f, S]), In = ln[0], sn = ln[1], K = ln[2];
        d.useMemo(function() {
          f.filter(function(nn) {
            return !F.find(function(Mn) {
              return Mn.id === nn.id;
            });
          }).forEach(function(nn) {
            nn.preFilteredRows = In, nn.filteredRows = In;
          });
        }, [In, F, f]);
        var Tn = Dn(H);
        Wn(function() {
          Tn() && W({ type: h.resetFilters });
        }, [W, N ? null : a]), Object.assign(n, { preFilteredRows: i, preFilteredFlatRows: s, preFilteredRowsById: m, filteredRows: In, filteredFlatRows: sn, filteredRowsById: K, rows: In, flatRows: sn, rowsById: K, setFilter: X, setAllFilters: U });
      }
      Ke.pluginName = "useFilters", h.resetGlobalFilter = "resetGlobalFilter", h.setGlobalFilter = "setGlobalFilter";
      var he = function(n) {
        n.stateReducers.push(ze), n.useInstance.push(_e);
      };
      function ze(n, a, i, s) {
        if (a.type === h.resetGlobalFilter)
          return c({}, n, { globalFilter: s.initialState.globalFilter || void 0 });
        if (a.type === h.setGlobalFilter) {
          var m = a.filterValue, f = s.userFilterTypes, S = Sr(s.globalFilter, f || {}, Zr), N = En(m, n.globalFilter);
          return Pr(S.autoRemove, N) ? (n.globalFilter, E(n, ["globalFilter"])) : c({}, n, { globalFilter: N });
        }
      }
      function _e(n) {
        var a = n.data, i = n.rows, s = n.flatRows, m = n.rowsById, f = n.allColumns, S = n.filterTypes, N = n.globalFilter, P = n.manualGlobalFilter, I = n.state.globalFilter, V = n.dispatch, F = n.autoResetGlobalFilter, W = F === void 0 || F, k = n.disableGlobalFilter, H = d.useCallback(function(K) {
          V({ type: h.setGlobalFilter, filterValue: K });
        }, [V]), X = d.useMemo(function() {
          if (P || I === void 0)
            return [i, s, m];
          var K = [], Tn = {}, nn = Sr(N, S || {}, Zr);
          if (!nn)
            return console.warn("Could not find a valid 'globalFilter' option."), i;
          f.forEach(function(xn) {
            var gn = xn.disableGlobalFilter;
            xn.canFilter = Yn(gn !== !0 && void 0, k !== !0 && void 0, !0);
          });
          var Mn = f.filter(function(xn) {
            return xn.canFilter === !0;
          });
          return [function xn(gn) {
            return (gn = nn(gn, Mn.map(function(Sn) {
              return Sn.id;
            }), I)).forEach(function(Sn) {
              K.push(Sn), Tn[Sn.id] = Sn, Sn.subRows = Sn.subRows && Sn.subRows.length ? xn(Sn.subRows) : Sn.subRows;
            }), gn;
          }(i), K, Tn];
        }, [P, I, N, S, f, i, s, m, k]), U = X[0], ln = X[1], In = X[2], sn = Dn(W);
        Wn(function() {
          sn() && V({ type: h.resetGlobalFilter });
        }, [V, P ? null : a]), Object.assign(n, { preGlobalFilteredRows: i, preGlobalFilteredFlatRows: s, preGlobalFilteredRowsById: m, globalFilteredRows: U, globalFilteredFlatRows: ln, globalFilteredRowsById: In, rows: U, flatRows: ln, rowsById: In, setGlobalFilter: H, disableGlobalFilter: k });
      }
      function ve(n, a) {
        return a.reduce(function(i, s) {
          return i + (typeof s == "number" ? s : 0);
        }, 0);
      }
      he.pluginName = "useGlobalFilter";
      var Se = Object.freeze({ __proto__: null, sum: ve, min: function(n) {
        var a = n[0] || 0;
        return n.forEach(function(i) {
          typeof i == "number" && (a = Math.min(a, i));
        }), a;
      }, max: function(n) {
        var a = n[0] || 0;
        return n.forEach(function(i) {
          typeof i == "number" && (a = Math.max(a, i));
        }), a;
      }, minMax: function(n) {
        var a = n[0] || 0, i = n[0] || 0;
        return n.forEach(function(s) {
          typeof s == "number" && (a = Math.min(a, s), i = Math.max(i, s));
        }), a + ".." + i;
      }, average: function(n) {
        return ve(0, n) / n.length;
      }, median: function(n) {
        if (!n.length)
          return null;
        var a = Math.floor(n.length / 2), i = [].concat(n).sort(function(s, m) {
          return s - m;
        });
        return n.length % 2 != 0 ? i[a] : (i[a - 1] + i[a]) / 2;
      }, unique: function(n) {
        return Array.from(new Set(n).values());
      }, uniqueCount: function(n) {
        return new Set(n).size;
      }, count: function(n) {
        return n.length;
      } }), Xe = [], Ye = {};
      h.resetGroupBy = "resetGroupBy", h.setGroupBy = "setGroupBy", h.toggleGroupBy = "toggleGroupBy";
      var we = function(n) {
        n.getGroupByToggleProps = [je], n.stateReducers.push(Qr), n.visibleColumnsDeps.push(function(a, i) {
          var s = i.instance;
          return [].concat(a, [s.state.groupBy]);
        }), n.visibleColumns.push(Ue), n.useInstance.push(Ft), n.prepareRow.push(Je);
      };
      we.pluginName = "useGroupBy";
      var je = function(n, a) {
        var i = a.header;
        return [n, { onClick: i.canGroupBy ? function(s) {
          s.persist(), i.toggleGroupBy();
        } : void 0, style: { cursor: i.canGroupBy ? "pointer" : void 0 }, title: "Toggle GroupBy" }];
      };
      function Qr(n, a, i, s) {
        if (a.type === h.init)
          return c({ groupBy: [] }, n);
        if (a.type === h.resetGroupBy)
          return c({}, n, { groupBy: s.initialState.groupBy || [] });
        if (a.type === h.setGroupBy)
          return c({}, n, { groupBy: a.value });
        if (a.type === h.toggleGroupBy) {
          var m = a.columnId, f = a.value, S = f !== void 0 ? f : !n.groupBy.includes(m);
          return c({}, n, S ? { groupBy: [].concat(n.groupBy, [m]) } : { groupBy: n.groupBy.filter(function(N) {
            return N !== m;
          }) });
        }
      }
      function Ue(n, a) {
        var i = a.instance.state.groupBy, s = i.map(function(f) {
          return n.find(function(S) {
            return S.id === f;
          });
        }).filter(Boolean), m = n.filter(function(f) {
          return !i.includes(f.id);
        });
        return (n = [].concat(s, m)).forEach(function(f) {
          f.isGrouped = i.includes(f.id), f.groupedIndex = i.indexOf(f.id);
        }), n;
      }
      var Ht = {};
      function Ft(n) {
        var a = n.data, i = n.rows, s = n.flatRows, m = n.rowsById, f = n.allColumns, S = n.flatHeaders, N = n.groupByFn, P = N === void 0 ? $e : N, I = n.manualGroupBy, V = n.aggregations, F = V === void 0 ? Ht : V, W = n.plugins, k = n.state.groupBy, H = n.dispatch, X = n.autoResetGroupBy, U = X === void 0 || X, ln = n.disableGroupBy, In = n.defaultCanGroupBy, sn = n.getHooks;
        hn(W, ["useColumnOrder", "useFilters"], "useGroupBy");
        var K = Dn(n);
        f.forEach(function(u) {
          var o = u.accessor, p = u.defaultGroupBy, g = u.disableGroupBy;
          u.canGroupBy = o ? Yn(u.canGroupBy, g !== !0 && void 0, ln !== !0 && void 0, !0) : Yn(u.canGroupBy, p, In, !1), u.canGroupBy && (u.toggleGroupBy = function() {
            return n.toggleGroupBy(u.id);
          }), u.Aggregated = u.Aggregated || u.Cell;
        });
        var Tn = d.useCallback(function(u, o) {
          H({ type: h.toggleGroupBy, columnId: u, value: o });
        }, [H]), nn = d.useCallback(function(u) {
          H({ type: h.setGroupBy, value: u });
        }, [H]);
        S.forEach(function(u) {
          u.getGroupByToggleProps = tn(sn().getGroupByToggleProps, { instance: K(), header: u });
        });
        var Mn = d.useMemo(function() {
          if (I || !k.length)
            return [i, s, m, Xe, Ye, s, m];
          var u = k.filter(function(L) {
            return f.find(function(z) {
              return z.id === L;
            });
          }), o = [], p = {}, g = [], y = {}, w = [], D = {}, T = function L(z, B, x) {
            if (B === void 0 && (B = 0), B === u.length)
              return z.map(function(Z) {
                return c({}, Z, { depth: B });
              });
            var _ = u[B], O = P(z, _);
            return Object.entries(O).map(function(Z, yn) {
              var vn = Z[0], j = Z[1], Pn = _ + ":" + vn, Hn = L(j, B + 1, Pn = x ? x + ">" + Pn : Pn), J = B ? Tr(j, "leafRows") : j, Y = function(cn, Ln, kn) {
                var Xn = {};
                return f.forEach(function(on) {
                  if (u.includes(on.id))
                    Xn[on.id] = Ln[0] ? Ln[0].values[on.id] : null;
                  else {
                    var lr = typeof on.aggregate == "function" ? on.aggregate : F[on.aggregate] || Se[on.aggregate];
                    if (lr) {
                      var On = Ln.map(function(bn) {
                        return bn.values[on.id];
                      }), wn = cn.map(function(bn) {
                        var Un = bn.values[on.id];
                        if (!kn && on.aggregateValue) {
                          var cr = typeof on.aggregateValue == "function" ? on.aggregateValue : F[on.aggregateValue] || Se[on.aggregateValue];
                          if (!cr)
                            throw console.info({ column: on }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                          Un = cr(Un, bn, on);
                        }
                        return Un;
                      });
                      Xn[on.id] = lr(wn, On);
                    } else {
                      if (on.aggregate)
                        throw console.info({ column: on }), new Error("React Table: Invalid column.aggregate option for column listed above");
                      Xn[on.id] = null;
                    }
                  }
                }), Xn;
              }(J, j, B), $ = { id: Pn, isGrouped: !0, groupByID: _, groupByVal: vn, values: Y, subRows: Hn, leafRows: J, depth: B, index: yn };
              return Hn.forEach(function(cn) {
                o.push(cn), p[cn.id] = cn, cn.isGrouped ? (g.push(cn), y[cn.id] = cn) : (w.push(cn), D[cn.id] = cn);
              }), $;
            });
          }(i);
          return T.forEach(function(L) {
            o.push(L), p[L.id] = L, L.isGrouped ? (g.push(L), y[L.id] = L) : (w.push(L), D[L.id] = L);
          }), [T, o, p, g, y, w, D];
        }, [I, k, i, s, m, f, F, P]), xn = Mn[0], gn = Mn[1], Sn = Mn[2], Kn = Mn[3], Nn = Mn[4], Vn = Mn[5], r = Mn[6], t = Dn(U);
        Wn(function() {
          t() && H({ type: h.resetGroupBy });
        }, [H, I ? null : a]), Object.assign(n, { preGroupedRows: i, preGroupedFlatRow: s, preGroupedRowsById: m, groupedRows: xn, groupedFlatRows: gn, groupedRowsById: Sn, onlyGroupedFlatRows: Kn, onlyGroupedRowsById: Nn, nonGroupedFlatRows: Vn, nonGroupedRowsById: r, rows: xn, flatRows: gn, rowsById: Sn, toggleGroupBy: Tn, setGroupBy: nn });
      }
      function Je(n) {
        n.allCells.forEach(function(a) {
          var i;
          a.isGrouped = a.column.isGrouped && a.column.id === n.groupByID, a.isPlaceholder = !a.isGrouped && a.column.isGrouped, a.isAggregated = !a.isGrouped && !a.isPlaceholder && ((i = n.subRows) == null ? void 0 : i.length);
        });
      }
      function $e(n, a) {
        return n.reduce(function(i, s, m) {
          var f = "" + s.values[a];
          return i[f] = Array.isArray(i[f]) ? i[f] : [], i[f].push(s), i;
        }, {});
      }
      var Ze = /([0-9]+)/gm;
      function ie(n, a) {
        return n === a ? 0 : n > a ? 1 : -1;
      }
      function ne(n, a, i) {
        return [n.values[i], a.values[i]];
      }
      function Qe(n) {
        return typeof n == "number" ? isNaN(n) || n === 1 / 0 || n === -1 / 0 ? "" : String(n) : typeof n == "string" ? n : "";
      }
      var Wt = Object.freeze({ __proto__: null, alphanumeric: function(n, a, i) {
        var s = ne(n, a, i), m = s[0], f = s[1];
        for (m = Qe(m), f = Qe(f), m = m.split(Ze).filter(Boolean), f = f.split(Ze).filter(Boolean); m.length && f.length; ) {
          var S = m.shift(), N = f.shift(), P = parseInt(S, 10), I = parseInt(N, 10), V = [P, I].sort();
          if (isNaN(V[0])) {
            if (S > N)
              return 1;
            if (N > S)
              return -1;
          } else {
            if (isNaN(V[1]))
              return isNaN(P) ? -1 : 1;
            if (P > I)
              return 1;
            if (I > P)
              return -1;
          }
        }
        return m.length - f.length;
      }, datetime: function(n, a, i) {
        var s = ne(n, a, i), m = s[0], f = s[1];
        return ie(m = m.getTime(), f = f.getTime());
      }, basic: function(n, a, i) {
        var s = ne(n, a, i);
        return ie(s[0], s[1]);
      }, string: function(n, a, i) {
        var s = ne(n, a, i), m = s[0], f = s[1];
        for (m = m.split("").filter(Boolean), f = f.split("").filter(Boolean); m.length && f.length; ) {
          var S = m.shift(), N = f.shift(), P = S.toLowerCase(), I = N.toLowerCase();
          if (P > I)
            return 1;
          if (I > P)
            return -1;
          if (S > N)
            return 1;
          if (N > S)
            return -1;
        }
        return m.length - f.length;
      }, number: function(n, a, i) {
        var s = ne(n, a, i), m = s[0], f = s[1], S = /[^0-9.]/gi;
        return ie(m = Number(String(m).replace(S, "")), f = Number(String(f).replace(S, "")));
      } });
      h.resetSortBy = "resetSortBy", h.setSortBy = "setSortBy", h.toggleSortBy = "toggleSortBy", h.clearSortBy = "clearSortBy", an.sortType = "alphanumeric", an.sortDescFirst = !1;
      var nt = function(n) {
        n.getSortByToggleProps = [xt], n.stateReducers.push(Gt), n.useInstance.push(Vt);
      };
      nt.pluginName = "useSortBy";
      var xt = function(n, a) {
        var i = a.instance, s = a.column, m = i.isMultiSortEvent, f = m === void 0 ? function(S) {
          return S.shiftKey;
        } : m;
        return [n, { onClick: s.canSort ? function(S) {
          S.persist(), s.toggleSortBy(void 0, !i.disableMultiSort && f(S));
        } : void 0, style: { cursor: s.canSort ? "pointer" : void 0 }, title: s.canSort ? "Toggle SortBy" : void 0 }];
      };
      function Gt(n, a, i, s) {
        if (a.type === h.init)
          return c({ sortBy: [] }, n);
        if (a.type === h.resetSortBy)
          return c({}, n, { sortBy: s.initialState.sortBy || [] });
        if (a.type === h.clearSortBy)
          return c({}, n, { sortBy: n.sortBy.filter(function(K) {
            return K.id !== a.columnId;
          }) });
        if (a.type === h.setSortBy)
          return c({}, n, { sortBy: a.sortBy });
        if (a.type === h.toggleSortBy) {
          var m, f = a.columnId, S = a.desc, N = a.multi, P = s.allColumns, I = s.disableMultiSort, V = s.disableSortRemove, F = s.disableMultiRemove, W = s.maxMultiSortColCount, k = W === void 0 ? Number.MAX_SAFE_INTEGER : W, H = n.sortBy, X = P.find(function(K) {
            return K.id === f;
          }).sortDescFirst, U = H.find(function(K) {
            return K.id === f;
          }), ln = H.findIndex(function(K) {
            return K.id === f;
          }), In = S != null, sn = [];
          return (m = !I && N ? U ? "toggle" : "add" : ln !== H.length - 1 || H.length !== 1 ? "replace" : U ? "toggle" : "replace") != "toggle" || V || In || N && F || !(U && U.desc && !X || !U.desc && X) || (m = "remove"), m === "replace" ? sn = [{ id: f, desc: In ? S : X }] : m === "add" ? (sn = [].concat(H, [{ id: f, desc: In ? S : X }])).splice(0, sn.length - k) : m === "toggle" ? sn = H.map(function(K) {
            return K.id === f ? c({}, K, { desc: In ? S : !U.desc }) : K;
          }) : m === "remove" && (sn = H.filter(function(K) {
            return K.id !== f;
          })), c({}, n, { sortBy: sn });
        }
      }
      function Vt(n) {
        var a = n.data, i = n.rows, s = n.flatRows, m = n.allColumns, f = n.orderByFn, S = f === void 0 ? rt : f, N = n.sortTypes, P = n.manualSortBy, I = n.defaultCanSort, V = n.disableSortBy, F = n.flatHeaders, W = n.state.sortBy, k = n.dispatch, H = n.plugins, X = n.getHooks, U = n.autoResetSortBy, ln = U === void 0 || U;
        hn(H, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var In = d.useCallback(function(gn) {
          k({ type: h.setSortBy, sortBy: gn });
        }, [k]), sn = d.useCallback(function(gn, Sn, Kn) {
          k({ type: h.toggleSortBy, columnId: gn, desc: Sn, multi: Kn });
        }, [k]), K = Dn(n);
        F.forEach(function(gn) {
          var Sn = gn.accessor, Kn = gn.canSort, Nn = gn.disableSortBy, Vn = gn.id, r = Sn ? Yn(Nn !== !0 && void 0, V !== !0 && void 0, !0) : Yn(I, Kn, !1);
          gn.canSort = r, gn.canSort && (gn.toggleSortBy = function(u, o) {
            return sn(gn.id, u, o);
          }, gn.clearSortBy = function() {
            k({ type: h.clearSortBy, columnId: gn.id });
          }), gn.getSortByToggleProps = tn(X().getSortByToggleProps, { instance: K(), column: gn });
          var t = W.find(function(u) {
            return u.id === Vn;
          });
          gn.isSorted = !!t, gn.sortedIndex = W.findIndex(function(u) {
            return u.id === Vn;
          }), gn.isSortedDesc = gn.isSorted ? t.desc : void 0;
        });
        var Tn = d.useMemo(function() {
          if (P || !W.length)
            return [i, s];
          var gn = [], Sn = W.filter(function(Kn) {
            return m.find(function(Nn) {
              return Nn.id === Kn.id;
            });
          });
          return [function Kn(Nn) {
            var Vn = S(Nn, Sn.map(function(r) {
              var t = m.find(function(p) {
                return p.id === r.id;
              });
              if (!t)
                throw new Error("React-Table: Could not find a column with id: " + r.id + " while sorting");
              var u = t.sortType, o = $n(u) || (N || {})[u] || Wt[u];
              if (!o)
                throw new Error("React-Table: Could not find a valid sortType of '" + u + "' for column '" + r.id + "'.");
              return function(p, g) {
                return o(p, g, r.id, r.desc);
              };
            }), Sn.map(function(r) {
              var t = m.find(function(u) {
                return u.id === r.id;
              });
              return t && t.sortInverted ? r.desc : !r.desc;
            }));
            return Vn.forEach(function(r) {
              gn.push(r), r.subRows && r.subRows.length !== 0 && (r.subRows = Kn(r.subRows));
            }), Vn;
          }(i), gn];
        }, [P, W, i, s, m, S, N]), nn = Tn[0], Mn = Tn[1], xn = Dn(ln);
        Wn(function() {
          xn() && k({ type: h.resetSortBy });
        }, [P ? null : a]), Object.assign(n, { preSortedRows: i, preSortedFlatRows: s, sortedRows: nn, sortedFlatRows: Mn, rows: nn, flatRows: Mn, setSortBy: In, toggleSortBy: sn });
      }
      function rt(n, a, i) {
        return [].concat(n).sort(function(s, m) {
          for (var f = 0; f < a.length; f += 1) {
            var S = a[f], N = i[f] === !1 || i[f] === "desc", P = S(s, m);
            if (P !== 0)
              return N ? -P : P;
          }
          return i[0] ? s.index - m.index : m.index - s.index;
        });
      }
      h.resetPage = "resetPage", h.gotoPage = "gotoPage", h.setPageSize = "setPageSize";
      var Me = function(n) {
        n.stateReducers.push(Kt), n.useInstance.push(qt);
      };
      function Kt(n, a, i, s) {
        if (a.type === h.init)
          return c({ pageSize: 10, pageIndex: 0 }, n);
        if (a.type === h.resetPage)
          return c({}, n, { pageIndex: s.initialState.pageIndex || 0 });
        if (a.type === h.gotoPage) {
          var m = s.pageCount, f = s.page, S = En(a.pageIndex, n.pageIndex), N = !1;
          return S > n.pageIndex ? N = m === -1 ? f.length >= n.pageSize : S < m : S < n.pageIndex && (N = S > -1), N ? c({}, n, { pageIndex: S }) : n;
        }
        if (a.type === h.setPageSize) {
          var P = a.pageSize, I = n.pageSize * n.pageIndex;
          return c({}, n, { pageIndex: Math.floor(I / P), pageSize: P });
        }
      }
      function qt(n) {
        var a = n.rows, i = n.autoResetPage, s = i === void 0 || i, m = n.manualExpandedKey, f = m === void 0 ? "expanded" : m, S = n.plugins, N = n.pageCount, P = n.paginateExpandedRows, I = P === void 0 || P, V = n.expandSubRows, F = V === void 0 || V, W = n.state, k = W.pageSize, H = W.pageIndex, X = W.expanded, U = W.globalFilter, ln = W.filters, In = W.groupBy, sn = W.sortBy, K = n.dispatch, Tn = n.data, nn = n.manualPagination;
        hn(S, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var Mn = Dn(s);
        Wn(function() {
          Mn() && K({ type: h.resetPage });
        }, [K, nn ? null : Tn, U, ln, In, sn]);
        var xn = nn ? N : Math.ceil(a.length / k), gn = d.useMemo(function() {
          return xn > 0 ? [].concat(new Array(xn)).fill(null).map(function(o, p) {
            return p;
          }) : [];
        }, [xn]), Sn = d.useMemo(function() {
          var o;
          if (nn)
            o = a;
          else {
            var p = k * H, g = p + k;
            o = a.slice(p, g);
          }
          return I ? o : Dr(o, { manualExpandedKey: f, expanded: X, expandSubRows: F });
        }, [F, X, f, nn, H, k, I, a]), Kn = H > 0, Nn = xn === -1 ? Sn.length >= k : H < xn - 1, Vn = d.useCallback(function(o) {
          K({ type: h.gotoPage, pageIndex: o });
        }, [K]), r = d.useCallback(function() {
          return Vn(function(o) {
            return o - 1;
          });
        }, [Vn]), t = d.useCallback(function() {
          return Vn(function(o) {
            return o + 1;
          });
        }, [Vn]), u = d.useCallback(function(o) {
          K({ type: h.setPageSize, pageSize: o });
        }, [K]);
        Object.assign(n, { pageOptions: gn, pageCount: xn, page: Sn, canPreviousPage: Kn, canNextPage: Nn, gotoPage: Vn, previousPage: r, nextPage: t, setPageSize: u });
      }
      Me.pluginName = "usePagination", h.resetPivot = "resetPivot", h.togglePivot = "togglePivot";
      var be = function(n) {
        n.getPivotToggleProps = [zt], n.stateReducers.push(_t), n.useInstanceAfterData.push(Xt), n.allColumns.push(Yt), n.accessValue.push(jt), n.materializedColumns.push(tt), n.materializedColumnsDeps.push(ot), n.visibleColumns.push(Ut), n.visibleColumnsDeps.push(Jt), n.useInstance.push($t), n.prepareRow.push(Zt);
      };
      be.pluginName = "usePivotColumns";
      var et = [], zt = function(n, a) {
        var i = a.header;
        return [n, { onClick: i.canPivot ? function(s) {
          s.persist(), i.togglePivot();
        } : void 0, style: { cursor: i.canPivot ? "pointer" : void 0 }, title: "Toggle Pivot" }];
      };
      function _t(n, a, i, s) {
        if (a.type === h.init)
          return c({ pivotColumns: et }, n);
        if (a.type === h.resetPivot)
          return c({}, n, { pivotColumns: s.initialState.pivotColumns || et });
        if (a.type === h.togglePivot) {
          var m = a.columnId, f = a.value, S = f !== void 0 ? f : !n.pivotColumns.includes(m);
          return c({}, n, S ? { pivotColumns: [].concat(n.pivotColumns, [m]) } : { pivotColumns: n.pivotColumns.filter(function(N) {
            return N !== m;
          }) });
        }
      }
      function Xt(n) {
        n.allColumns.forEach(function(a) {
          a.isPivotSource = n.state.pivotColumns.includes(a.id);
        });
      }
      function Yt(n, a) {
        var i = a.instance;
        return n.forEach(function(s) {
          s.isPivotSource = i.state.pivotColumns.includes(s.id), s.uniqueValues = /* @__PURE__ */ new Set();
        }), n;
      }
      function jt(n, a) {
        var i = a.column;
        return i.uniqueValues && n !== void 0 && i.uniqueValues.add(n), n;
      }
      function tt(n, a) {
        var i = a.instance, s = i.allColumns, m = i.state;
        if (!m.pivotColumns.length || !m.groupBy || !m.groupBy.length)
          return n;
        var f = m.pivotColumns.map(function(P) {
          return s.find(function(I) {
            return I.id === P;
          });
        }).filter(Boolean), S = s.filter(function(P) {
          return !P.isPivotSource && !m.groupBy.includes(P.id) && !m.pivotColumns.includes(P.id);
        }), N = Cr(function P(I, V, F) {
          I === void 0 && (I = 0), F === void 0 && (F = []);
          var W = f[I];
          return W ? Array.from(W.uniqueValues).sort().map(function(k) {
            var H = c({}, W, { Header: W.PivotHeader || typeof W.header == "string" ? W.Header + ": " + k : k, isPivotGroup: !0, parent: V, depth: I, id: V ? V.id + "." + W.id + "." + k : W.id + "." + k, pivotValue: k });
            return H.columns = P(I + 1, H, [].concat(F, [function(X) {
              return X.values[W.id] === k;
            }])), H;
          }) : S.map(function(k) {
            return c({}, k, { canPivot: !1, isPivoted: !0, parent: V, depth: I, id: "" + (V ? V.id + "." + k.id : k.id), accessor: function(H, X, U) {
              if (F.every(function(ln) {
                return ln(U);
              }))
                return U.values[k.id];
            } });
          });
        }());
        return [].concat(n, N);
      }
      function ot(n, a) {
        var i = a.instance.state, s = i.pivotColumns, m = i.groupBy;
        return [].concat(n, [s, m]);
      }
      function Ut(n, a) {
        var i = a.instance.state;
        return n = n.filter(function(s) {
          return !s.isPivotSource;
        }), i.pivotColumns.length && i.groupBy && i.groupBy.length && (n = n.filter(function(s) {
          return s.isGrouped || s.isPivoted;
        })), n;
      }
      function Jt(n, a) {
        var i = a.instance;
        return [].concat(n, [i.state.pivotColumns, i.state.groupBy]);
      }
      function $t(n) {
        var a = n.columns, i = n.allColumns, s = n.flatHeaders, m = n.getHooks, f = n.plugins, S = n.dispatch, N = n.autoResetPivot, P = N === void 0 || N, I = n.manaulPivot, V = n.disablePivot, F = n.defaultCanPivot;
        hn(f, ["useGroupBy"], "usePivotColumns");
        var W = Dn(n);
        i.forEach(function(H) {
          var X = H.accessor, U = H.defaultPivot, ln = H.disablePivot;
          H.canPivot = X ? Yn(H.canPivot, ln !== !0 && void 0, V !== !0 && void 0, !0) : Yn(H.canPivot, U, F, !1), H.canPivot && (H.togglePivot = function() {
            return n.togglePivot(H.id);
          }), H.Aggregated = H.Aggregated || H.Cell;
        }), s.forEach(function(H) {
          H.getPivotToggleProps = tn(m().getPivotToggleProps, { instance: W(), header: H });
        });
        var k = Dn(P);
        Wn(function() {
          k() && S({ type: h.resetPivot });
        }, [S, I ? null : a]), Object.assign(n, { togglePivot: function(H, X) {
          S({ type: h.togglePivot, columnId: H, value: X });
        } });
      }
      function Zt(n) {
        n.allCells.forEach(function(a) {
          a.isPivoted = a.column.isPivoted;
        });
      }
      h.resetSelectedRows = "resetSelectedRows", h.toggleAllRowsSelected = "toggleAllRowsSelected", h.toggleRowSelected = "toggleRowSelected", h.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var at = function(n) {
        n.getToggleRowSelectedProps = [Ae], n.getToggleAllRowsSelectedProps = [re], n.getToggleAllPageRowsSelectedProps = [ut], n.stateReducers.push(Qt), n.useInstance.push(it), n.prepareRow.push(no);
      };
      at.pluginName = "useRowSelect";
      var Ae = function(n, a) {
        var i = a.instance, s = a.row, m = i.manualRowSelectedKey, f = m === void 0 ? "isSelected" : m;
        return [n, { onChange: function(S) {
          s.toggleRowSelected(S.target.checked);
        }, style: { cursor: "pointer" }, checked: !(!s.original || !s.original[f]) || s.isSelected, title: "Toggle Row Selected", indeterminate: s.isSomeSelected }];
      }, re = function(n, a) {
        var i = a.instance;
        return [n, { onChange: function(s) {
          i.toggleAllRowsSelected(s.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isAllRowsSelected, title: "Toggle All Rows Selected", indeterminate: !!(!i.isAllRowsSelected && Object.keys(i.state.selectedRowIds).length) }];
      }, ut = function(n, a) {
        var i = a.instance;
        return [n, { onChange: function(s) {
          i.toggleAllPageRowsSelected(s.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isAllPageRowsSelected, title: "Toggle All Current Page Rows Selected", indeterminate: !!(!i.isAllPageRowsSelected && i.page.some(function(s) {
          var m = s.id;
          return i.state.selectedRowIds[m];
        })) }];
      };
      function Qt(n, a, i, s) {
        if (a.type === h.init)
          return c({ selectedRowIds: {} }, n);
        if (a.type === h.resetSelectedRows)
          return c({}, n, { selectedRowIds: s.initialState.selectedRowIds || {} });
        if (a.type === h.toggleAllRowsSelected) {
          var m = a.value, f = s.isAllRowsSelected, S = s.rowsById, N = s.nonGroupedRowsById, P = N === void 0 ? S : N, I = m !== void 0 ? m : !f, V = Object.assign({}, n.selectedRowIds);
          return I ? Object.keys(P).forEach(function(Vn) {
            V[Vn] = !0;
          }) : Object.keys(P).forEach(function(Vn) {
            delete V[Vn];
          }), c({}, n, { selectedRowIds: V });
        }
        if (a.type === h.toggleRowSelected) {
          var F = a.id, W = a.value, k = s.rowsById, H = s.selectSubRows, X = H === void 0 || H, U = s.getSubRows, ln = n.selectedRowIds[F], In = W !== void 0 ? W : !ln;
          if (ln === In)
            return n;
          var sn = c({}, n.selectedRowIds);
          return function Vn(r) {
            var t = k[r];
            if (t && (t.isGrouped || (In ? sn[r] = !0 : delete sn[r]), X && U(t)))
              return U(t).forEach(function(u) {
                return Vn(u.id);
              });
          }(F), c({}, n, { selectedRowIds: sn });
        }
        if (a.type === h.toggleAllPageRowsSelected) {
          var K = a.value, Tn = s.page, nn = s.rowsById, Mn = s.selectSubRows, xn = Mn === void 0 || Mn, gn = s.isAllPageRowsSelected, Sn = s.getSubRows, Kn = K !== void 0 ? K : !gn, Nn = c({}, n.selectedRowIds);
          return Tn.forEach(function(Vn) {
            return function r(t) {
              var u = nn[t];
              if (u.isGrouped || (Kn ? Nn[t] = !0 : delete Nn[t]), xn && Sn(u))
                return Sn(u).forEach(function(o) {
                  return r(o.id);
                });
            }(Vn.id);
          }), c({}, n, { selectedRowIds: Nn });
        }
        return n;
      }
      function it(n) {
        var a = n.data, i = n.rows, s = n.getHooks, m = n.plugins, f = n.rowsById, S = n.nonGroupedRowsById, N = S === void 0 ? f : S, P = n.autoResetSelectedRows, I = P === void 0 || P, V = n.state.selectedRowIds, F = n.selectSubRows, W = F === void 0 || F, k = n.dispatch, H = n.page, X = n.getSubRows;
        hn(m, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var U = d.useMemo(function() {
          var Sn = [];
          return i.forEach(function(Kn) {
            var Nn = W ? function Vn(r, t, u) {
              if (t[r.id])
                return !0;
              var o = u(r);
              if (o && o.length) {
                var p = !0, g = !1;
                return o.forEach(function(y) {
                  g && !p || (Vn(y, t, u) ? g = !0 : p = !1);
                }), !!p || !!g && null;
              }
              return !1;
            }(Kn, V, X) : !!V[Kn.id];
            Kn.isSelected = !!Nn, Kn.isSomeSelected = Nn === null, Nn && Sn.push(Kn);
          }), Sn;
        }, [i, W, V, X]), ln = !!(Object.keys(N).length && Object.keys(V).length), In = ln;
        ln && Object.keys(N).some(function(Sn) {
          return !V[Sn];
        }) && (ln = !1), ln || H && H.length && H.some(function(Sn) {
          var Kn = Sn.id;
          return !V[Kn];
        }) && (In = !1);
        var sn = Dn(I);
        Wn(function() {
          sn() && k({ type: h.resetSelectedRows });
        }, [k, a]);
        var K = d.useCallback(function(Sn) {
          return k({ type: h.toggleAllRowsSelected, value: Sn });
        }, [k]), Tn = d.useCallback(function(Sn) {
          return k({ type: h.toggleAllPageRowsSelected, value: Sn });
        }, [k]), nn = d.useCallback(function(Sn, Kn) {
          return k({ type: h.toggleRowSelected, id: Sn, value: Kn });
        }, [k]), Mn = Dn(n), xn = tn(s().getToggleAllRowsSelectedProps, { instance: Mn() }), gn = tn(s().getToggleAllPageRowsSelectedProps, { instance: Mn() });
        Object.assign(n, { selectedFlatRows: U, isAllRowsSelected: ln, isAllPageRowsSelected: In, toggleRowSelected: nn, toggleAllRowsSelected: K, getToggleAllRowsSelectedProps: xn, getToggleAllPageRowsSelectedProps: gn, toggleAllPageRowsSelected: Tn });
      }
      function no(n, a) {
        var i = a.instance;
        n.toggleRowSelected = function(s) {
          return i.toggleRowSelected(n.id, s);
        }, n.getToggleRowSelectedProps = tn(i.getHooks().getToggleRowSelectedProps, { instance: i, row: n });
      }
      var lt = function(n) {
        return {};
      }, st = function(n) {
        return {};
      };
      h.setRowState = "setRowState", h.setCellState = "setCellState", h.resetRowState = "resetRowState";
      var De = function(n) {
        n.stateReducers.push(ro), n.useInstance.push(ct), n.prepareRow.push(eo);
      };
      function ro(n, a, i, s) {
        var m = s.initialRowStateAccessor, f = m === void 0 ? lt : m, S = s.initialCellStateAccessor, N = S === void 0 ? st : S, P = s.rowsById;
        if (a.type === h.init)
          return c({ rowState: {} }, n);
        if (a.type === h.resetRowState)
          return c({}, n, { rowState: s.initialState.rowState || {} });
        if (a.type === h.setRowState) {
          var I, V = a.rowId, F = a.value, W = n.rowState[V] !== void 0 ? n.rowState[V] : f(P[V]);
          return c({}, n, { rowState: c({}, n.rowState, (I = {}, I[V] = En(F, W), I)) });
        }
        if (a.type === h.setCellState) {
          var k, H, X, U, ln, In = a.rowId, sn = a.columnId, K = a.value, Tn = n.rowState[In] !== void 0 ? n.rowState[In] : f(P[In]), nn = (Tn == null || (k = Tn.cellState) == null ? void 0 : k[sn]) !== void 0 ? Tn.cellState[sn] : N((H = P[In]) == null || (X = H.cells) == null ? void 0 : X.find(function(Mn) {
            return Mn.column.id === sn;
          }));
          return c({}, n, { rowState: c({}, n.rowState, (ln = {}, ln[In] = c({}, Tn, { cellState: c({}, Tn.cellState || {}, (U = {}, U[sn] = En(K, nn), U)) }), ln)) });
        }
      }
      function ct(n) {
        var a = n.autoResetRowState, i = a === void 0 || a, s = n.data, m = n.dispatch, f = d.useCallback(function(P, I) {
          return m({ type: h.setRowState, rowId: P, value: I });
        }, [m]), S = d.useCallback(function(P, I, V) {
          return m({ type: h.setCellState, rowId: P, columnId: I, value: V });
        }, [m]), N = Dn(i);
        Wn(function() {
          N() && m({ type: h.resetRowState });
        }, [s]), Object.assign(n, { setRowState: f, setCellState: S });
      }
      function eo(n, a) {
        var i = a.instance, s = i.initialRowStateAccessor, m = s === void 0 ? lt : s, f = i.initialCellStateAccessor, S = f === void 0 ? st : f, N = i.state.rowState;
        n && (n.state = N[n.id] !== void 0 ? N[n.id] : m(n), n.setState = function(P) {
          return i.setRowState(n.id, P);
        }, n.cells.forEach(function(P) {
          n.state.cellState || (n.state.cellState = {}), P.state = n.state.cellState[P.column.id] !== void 0 ? n.state.cellState[P.column.id] : S(P), P.setState = function(I) {
            return i.setCellState(n.id, P.column.id, I);
          };
        }));
      }
      De.pluginName = "useRowState", h.resetColumnOrder = "resetColumnOrder", h.setColumnOrder = "setColumnOrder";
      var yt = function(n) {
        n.stateReducers.push(dt), n.visibleColumnsDeps.push(function(a, i) {
          var s = i.instance;
          return [].concat(a, [s.state.columnOrder]);
        }), n.visibleColumns.push(Ct), n.useInstance.push(to);
      };
      function dt(n, a, i, s) {
        return a.type === h.init ? c({ columnOrder: [] }, n) : a.type === h.resetColumnOrder ? c({}, n, { columnOrder: s.initialState.columnOrder || [] }) : a.type === h.setColumnOrder ? c({}, n, { columnOrder: En(a.columnOrder, n.columnOrder) }) : void 0;
      }
      function Ct(n, a) {
        var i = a.instance.state.columnOrder;
        if (!i || !i.length)
          return n;
        for (var s = [].concat(i), m = [].concat(n), f = [], S = function() {
          var N = s.shift(), P = m.findIndex(function(I) {
            return I.id === N;
          });
          P > -1 && f.push(m.splice(P, 1)[0]);
        }; m.length && s.length; )
          S();
        return [].concat(f, m);
      }
      function to(n) {
        var a = n.dispatch;
        n.setColumnOrder = d.useCallback(function(i) {
          return a({ type: h.setColumnOrder, columnOrder: i });
        }, [a]);
      }
      yt.pluginName = "useColumnOrder", an.canResize = !0, h.columnStartResizing = "columnStartResizing", h.columnResizing = "columnResizing", h.columnDoneResizing = "columnDoneResizing", h.resetResize = "resetResize";
      var pt = function(n) {
        n.getResizerProps = [oo], n.getHeaderProps.push({ style: { position: "relative" } }), n.stateReducers.push(ao), n.useInstance.push(io), n.useInstanceBeforeDimensions.push(uo);
      }, oo = function(n, a) {
        var i = a.instance, s = a.header, m = i.dispatch, f = function(S, N) {
          var P = !1;
          if (S.type === "touchstart") {
            if (S.touches && S.touches.length > 1)
              return;
            P = !0;
          }
          var I, V, F = function(sn) {
            var K = [];
            return function Tn(nn) {
              nn.columns && nn.columns.length && nn.columns.map(Tn), K.push(nn);
            }(sn), K;
          }(N).map(function(sn) {
            return [sn.id, sn.totalWidth];
          }), W = P ? Math.round(S.touches[0].clientX) : S.clientX, k = function() {
            window.cancelAnimationFrame(I), I = null, m({ type: h.columnDoneResizing });
          }, H = function() {
            window.cancelAnimationFrame(I), I = null, m({ type: h.columnResizing, clientX: V });
          }, X = function(sn) {
            V = sn, I || (I = window.requestAnimationFrame(H));
          }, U = { mouse: { moveEvent: "mousemove", moveHandler: function(sn) {
            return X(sn.clientX);
          }, upEvent: "mouseup", upHandler: function(sn) {
            document.removeEventListener("mousemove", U.mouse.moveHandler), document.removeEventListener("mouseup", U.mouse.upHandler), k();
          } }, touch: { moveEvent: "touchmove", moveHandler: function(sn) {
            return sn.cancelable && (sn.preventDefault(), sn.stopPropagation()), X(sn.touches[0].clientX), !1;
          }, upEvent: "touchend", upHandler: function(sn) {
            document.removeEventListener(U.touch.moveEvent, U.touch.moveHandler), document.removeEventListener(U.touch.upEvent, U.touch.moveHandler), k();
          } } }, ln = P ? U.touch : U.mouse, In = !!function() {
            if (typeof mr == "boolean")
              return mr;
            var sn = !1;
            try {
              var K = { get passive() {
                return sn = !0, !1;
              } };
              window.addEventListener("test", null, K), window.removeEventListener("test", null, K);
            } catch {
              sn = !1;
            }
            return mr = sn;
          }() && { passive: !1 };
          document.addEventListener(ln.moveEvent, ln.moveHandler, In), document.addEventListener(ln.upEvent, ln.upHandler, In), m({ type: h.columnStartResizing, columnId: N.id, columnWidth: N.totalWidth, headerIdWidths: F, clientX: W });
        };
        return [n, { onMouseDown: function(S) {
          return S.persist() || f(S, s);
        }, onTouchStart: function(S) {
          return S.persist() || f(S, s);
        }, style: { cursor: "col-resize" }, draggable: !1, role: "separator" }];
      };
      function ao(n, a) {
        if (a.type === h.init)
          return c({ columnResizing: { columnWidths: {} } }, n);
        if (a.type === h.resetResize)
          return c({}, n, { columnResizing: { columnWidths: {} } });
        if (a.type === h.columnStartResizing) {
          var i = a.clientX, s = a.columnId, m = a.columnWidth, f = a.headerIdWidths;
          return c({}, n, { columnResizing: c({}, n.columnResizing, { startX: i, headerIdWidths: f, columnWidth: m, isResizingColumn: s }) });
        }
        if (a.type === h.columnResizing) {
          var S = a.clientX, N = n.columnResizing, P = N.startX, I = N.columnWidth, V = N.headerIdWidths, F = (S - P) / I, W = {};
          return (V === void 0 ? [] : V).forEach(function(k) {
            var H = k[0], X = k[1];
            W[H] = Math.max(X + X * F, 0);
          }), c({}, n, { columnResizing: c({}, n.columnResizing, { columnWidths: c({}, n.columnResizing.columnWidths, {}, W) }) });
        }
        return a.type === h.columnDoneResizing ? c({}, n, { columnResizing: c({}, n.columnResizing, { startX: null, isResizingColumn: null }) }) : void 0;
      }
      pt.pluginName = "useResizeColumns";
      var uo = function(n) {
        var a = n.flatHeaders, i = n.disableResizing, s = n.getHooks, m = n.state.columnResizing, f = Dn(n);
        a.forEach(function(S) {
          var N = Yn(S.disableResizing !== !0 && void 0, i !== !0 && void 0, !0);
          S.canResize = N, S.width = m.columnWidths[S.id] || S.originalWidth || S.width, S.isResizing = m.isResizingColumn === S.id, N && (S.getResizerProps = tn(s().getResizerProps, { instance: f(), header: S }));
        });
      };
      function io(n) {
        var a = n.plugins, i = n.dispatch, s = n.autoResetResize, m = s === void 0 || s, f = n.columns;
        hn(a, ["useAbsoluteLayout"], "useResizeColumns");
        var S = Dn(m);
        Wn(function() {
          S() && i({ type: h.resetResize });
        }, [f]);
        var N = d.useCallback(function() {
          return i({ type: h.resetResize });
        }, [i]);
        Object.assign(n, { resetResizing: N });
      }
      var Re = { position: "absolute", top: 0 }, ft = function(n) {
        n.getTableBodyProps.push(le), n.getRowProps.push(le), n.getHeaderGroupProps.push(le), n.getFooterGroupProps.push(le), n.getHeaderProps.push(function(a, i) {
          var s = i.column;
          return [a, { style: c({}, Re, { left: s.totalLeft + "px", width: s.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(a, i) {
          var s = i.cell;
          return [a, { style: c({}, Re, { left: s.column.totalLeft + "px", width: s.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(a, i) {
          var s = i.column;
          return [a, { style: c({}, Re, { left: s.totalLeft + "px", width: s.totalWidth + "px" }) }];
        });
      };
      ft.pluginName = "useAbsoluteLayout";
      var le = function(n, a) {
        return [n, { style: { position: "relative", width: a.instance.totalColumnsWidth + "px" } }];
      }, Ne = { display: "inline-block", boxSizing: "border-box" }, Te = function(n, a) {
        return [n, { style: { display: "flex", width: a.instance.totalColumnsWidth + "px" } }];
      }, gt = function(n) {
        n.getRowProps.push(Te), n.getHeaderGroupProps.push(Te), n.getFooterGroupProps.push(Te), n.getHeaderProps.push(function(a, i) {
          var s = i.column;
          return [a, { style: c({}, Ne, { width: s.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(a, i) {
          var s = i.cell;
          return [a, { style: c({}, Ne, { width: s.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(a, i) {
          var s = i.column;
          return [a, { style: c({}, Ne, { width: s.totalWidth + "px" }) }];
        });
      };
      function Pe(n) {
        n.getTableProps.push(lo), n.getRowProps.push(Ie), n.getHeaderGroupProps.push(Ie), n.getFooterGroupProps.push(Ie), n.getHeaderProps.push(so), n.getCellProps.push(co), n.getFooterProps.push(yo);
      }
      gt.pluginName = "useBlockLayout", Pe.pluginName = "useFlexLayout";
      var lo = function(n, a) {
        return [n, { style: { minWidth: a.instance.totalColumnsMinWidth + "px" } }];
      }, Ie = function(n, a) {
        return [n, { style: { display: "flex", flex: "1 0 auto", minWidth: a.instance.totalColumnsMinWidth + "px" } }];
      }, so = function(n, a) {
        var i = a.column;
        return [n, { style: { boxSizing: "border-box", flex: i.totalFlexWidth ? i.totalFlexWidth + " 0 auto" : void 0, minWidth: i.totalMinWidth + "px", width: i.totalWidth + "px" } }];
      }, co = function(n, a) {
        var i = a.cell;
        return [n, { style: { boxSizing: "border-box", flex: i.column.totalFlexWidth + " 0 auto", minWidth: i.column.totalMinWidth + "px", width: i.column.totalWidth + "px" } }];
      }, yo = function(n, a) {
        var i = a.column;
        return [n, { style: { boxSizing: "border-box", flex: i.totalFlexWidth ? i.totalFlexWidth + " 0 auto" : void 0, minWidth: i.totalMinWidth + "px", width: i.totalWidth + "px" } }];
      };
      function mt(n) {
        n.stateReducers.push(wt), n.getTableProps.push(ht), n.getHeaderProps.push(vt), n.getRowProps.push(St);
      }
      h.columnStartResizing = "columnStartResizing", h.columnResizing = "columnResizing", h.columnDoneResizing = "columnDoneResizing", h.resetResize = "resetResize", mt.pluginName = "useGridLayout";
      var ht = function(n, a) {
        var i = a.instance;
        return [n, { style: { display: "grid", gridTemplateColumns: i.visibleColumns.map(function(s) {
          var m;
          return i.state.gridLayout.columnWidths[s.id] ? i.state.gridLayout.columnWidths[s.id] + "px" : (m = i.state.columnResizing) != null && m.isResizingColumn ? i.state.gridLayout.startWidths[s.id] + "px" : typeof s.width == "number" ? s.width + "px" : s.width;
        }).join(" ") } }];
      }, vt = function(n, a) {
        var i = a.column;
        return [n, { id: "header-cell-" + i.id, style: { position: "sticky", gridColumn: "span " + i.totalVisibleHeaderCount } }];
      }, St = function(n, a) {
        var i = a.row;
        return i.isExpanded ? [n, { style: { gridColumn: "1 / " + (i.cells.length + 1) } }] : [n, {}];
      };
      function wt(n, a, i, s) {
        if (a.type === h.init)
          return c({ gridLayout: { columnWidths: {} } }, n);
        if (a.type === h.resetResize)
          return c({}, n, { gridLayout: { columnWidths: {} } });
        if (a.type === h.columnStartResizing) {
          var m = a.columnId, f = a.headerIdWidths, S = Le(m);
          if (S !== void 0) {
            var N = s.visibleColumns.reduce(function(K, Tn) {
              var nn;
              return c({}, K, ((nn = {})[Tn.id] = Le(Tn.id), nn));
            }, {}), P = s.visibleColumns.reduce(function(K, Tn) {
              var nn;
              return c({}, K, ((nn = {})[Tn.id] = Tn.minWidth, nn));
            }, {}), I = s.visibleColumns.reduce(function(K, Tn) {
              var nn;
              return c({}, K, ((nn = {})[Tn.id] = Tn.maxWidth, nn));
            }, {}), V = f.map(function(K) {
              var Tn = K[0];
              return [Tn, Le(Tn)];
            });
            return c({}, n, { gridLayout: c({}, n.gridLayout, { startWidths: N, minWidths: P, maxWidths: I, headerIdGridWidths: V, columnWidth: S }) });
          }
          return n;
        }
        if (a.type === h.columnResizing) {
          var F = a.clientX, W = n.columnResizing.startX, k = n.gridLayout, H = k.columnWidth, X = k.minWidths, U = k.maxWidths, ln = k.headerIdGridWidths, In = (F - W) / H, sn = {};
          return (ln === void 0 ? [] : ln).forEach(function(K) {
            var Tn = K[0], nn = K[1];
            sn[Tn] = Math.min(Math.max(X[Tn], nn + nn * In), U[Tn]);
          }), c({}, n, { gridLayout: c({}, n.gridLayout, { columnWidths: c({}, n.gridLayout.columnWidths, {}, sn) }) });
        }
        return a.type === h.columnDoneResizing ? c({}, n, { gridLayout: c({}, n.gridLayout, { startWidths: {}, minWidths: {}, maxWidths: {} }) }) : void 0;
      }
      function Le(n) {
        var a, i = (a = document.getElementById("header-cell-" + n)) == null ? void 0 : a.offsetWidth;
        if (i !== void 0)
          return i;
      }
      l._UNSTABLE_usePivotColumns = be, l.actions = h, l.defaultColumn = an, l.defaultGroupByFn = $e, l.defaultOrderByFn = rt, l.defaultRenderer = dn, l.emptyRenderer = v, l.ensurePluginOrder = hn, l.flexRender = or, l.functionalUpdate = En, l.loopHooks = qn, l.makePropGetter = tn, l.makeRenderer = Rn, l.reduceHooks = An, l.safeUseLayoutEffect = Jn, l.useAbsoluteLayout = ft, l.useAsyncDebounce = function(n, a) {
        a === void 0 && (a = 0);
        var i = d.useRef({}), s = Dn(n), m = Dn(a);
        return d.useCallback(function() {
          var f = R(regeneratorRuntime.mark(function S() {
            var N, P, I, V = arguments;
            return regeneratorRuntime.wrap(function(F) {
              for (; ; )
                switch (F.prev = F.next) {
                  case 0:
                    for (N = V.length, P = new Array(N), I = 0; I < N; I++)
                      P[I] = V[I];
                    return i.current.promise || (i.current.promise = new Promise(function(W, k) {
                      i.current.resolve = W, i.current.reject = k;
                    })), i.current.timeout && clearTimeout(i.current.timeout), i.current.timeout = setTimeout(R(regeneratorRuntime.mark(function W() {
                      return regeneratorRuntime.wrap(function(k) {
                        for (; ; )
                          switch (k.prev = k.next) {
                            case 0:
                              return delete i.current.timeout, k.prev = 1, k.t0 = i.current, k.next = 5, s().apply(void 0, P);
                            case 5:
                              k.t1 = k.sent, k.t0.resolve.call(k.t0, k.t1), k.next = 12;
                              break;
                            case 9:
                              k.prev = 9, k.t2 = k.catch(1), i.current.reject(k.t2);
                            case 12:
                              return k.prev = 12, delete i.current.promise, k.finish(12);
                            case 15:
                            case "end":
                              return k.stop();
                          }
                      }, W, null, [[1, 9, 12, 15]]);
                    })), m()), F.abrupt("return", i.current.promise);
                  case 5:
                  case "end":
                    return F.stop();
                }
            }, S);
          }));
          return function() {
            return f.apply(this, arguments);
          };
        }(), [s, m]);
      }, l.useBlockLayout = gt, l.useColumnOrder = yt, l.useExpanded = Nr, l.useFilters = Ke, l.useFlexLayout = Pe, l.useGetLatest = Dn, l.useGlobalFilter = he, l.useGridLayout = mt, l.useGroupBy = we, l.useMountedLayoutEffect = Wn, l.usePagination = Me, l.useResizeColumns = pt, l.useRowSelect = at, l.useRowState = De, l.useSortBy = nt, l.useTable = function(n) {
        for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
          i[s - 1] = arguments[s];
        n = ir(n), i = [Lr].concat(i);
        var m = d.useRef({}), f = Dn(m.current);
        Object.assign(f(), c({}, n, { plugins: i, hooks: wr() })), i.filter(Boolean).forEach(function(y) {
          y(f().hooks);
        });
        var S = Dn(f().hooks);
        f().getHooks = S, delete f().hooks, Object.assign(f(), An(S().useOptions, ir(n)));
        var N = f(), P = N.data, I = N.columns, V = N.initialState, F = N.defaultColumn, W = N.getSubRows, k = N.getRowId, H = N.stateReducer, X = N.useControlledState, U = Dn(H), ln = d.useCallback(function(y, w) {
          if (!w.type)
            throw console.info({ action: w }), new Error("Unknown Action 👆");
          return [].concat(S().stateReducers, Array.isArray(U()) ? U() : [U()]).reduce(function(D, T) {
            return T(D, w, y, f()) || D;
          }, y);
        }, [S, U, f]), In = d.useReducer(ln, void 0, function() {
          return ln(V, { type: h.init });
        }), sn = In[0], K = In[1], Tn = An([].concat(S().useControlledState, [X]), sn, { instance: f() });
        Object.assign(f(), { state: Tn, dispatch: K });
        var nn = d.useMemo(function() {
          return zn(An(S().columns, I, { instance: f() }));
        }, [S, f, I].concat(An(S().columnsDeps, [], { instance: f() })));
        f().columns = nn;
        var Mn = d.useMemo(function() {
          return An(S().allColumns, Cr(nn), { instance: f() }).map(nr);
        }, [nn, S, f].concat(An(S().allColumnsDeps, [], { instance: f() })));
        f().allColumns = Mn;
        var xn = d.useMemo(function() {
          for (var y = [], w = [], D = {}, T = [].concat(Mn); T.length; ) {
            var L = T.shift();
            Fr({ data: P, rows: y, flatRows: w, rowsById: D, column: L, getRowId: k, getSubRows: W, accessValueHooks: S().accessValue, getInstance: f });
          }
          return [y, w, D];
        }, [Mn, P, k, W, S, f]), gn = xn[0], Sn = xn[1], Kn = xn[2];
        Object.assign(f(), { rows: gn, initialRows: [].concat(gn), flatRows: Sn, rowsById: Kn }), qn(S().useInstanceAfterData, f());
        var Nn = d.useMemo(function() {
          return An(S().visibleColumns, Mn, { instance: f() }).map(function(y) {
            return en(y, F);
          });
        }, [S, Mn, f, F].concat(An(S().visibleColumnsDeps, [], { instance: f() })));
        Mn = d.useMemo(function() {
          var y = [].concat(Nn);
          return Mn.forEach(function(w) {
            y.find(function(D) {
              return D.id === w.id;
            }) || y.push(w);
          }), y;
        }, [Mn, Nn]), f().allColumns = Mn;
        var Vn = d.useMemo(function() {
          return An(S().headerGroups, pn(Nn, F), f());
        }, [S, Nn, F, f].concat(An(S().headerGroupsDeps, [], { instance: f() })));
        f().headerGroups = Vn;
        var r = d.useMemo(function() {
          return Vn.length ? Vn[0].headers : [];
        }, [Vn]);
        f().headers = r, f().flatHeaders = Vn.reduce(function(y, w) {
          return [].concat(y, w.headers);
        }, []), qn(S().useInstanceBeforeDimensions, f());
        var t = Nn.filter(function(y) {
          return y.isVisible;
        }).map(function(y) {
          return y.id;
        }).sort().join("_");
        Nn = d.useMemo(function() {
          return Nn.filter(function(y) {
            return y.isVisible;
          });
        }, [Nn, t]), f().visibleColumns = Nn;
        var u = fr(r), o = u[0], p = u[1], g = u[2];
        return f().totalColumnsMinWidth = o, f().totalColumnsWidth = p, f().totalColumnsMaxWidth = g, qn(S().useInstance, f()), [].concat(f().flatHeaders, f().allColumns).forEach(function(y) {
          y.render = Rn(f(), y), y.getHeaderProps = tn(S().getHeaderProps, { instance: f(), column: y }), y.getFooterProps = tn(S().getFooterProps, { instance: f(), column: y });
        }), f().headerGroups = d.useMemo(function() {
          return Vn.filter(function(y, w) {
            return y.headers = y.headers.filter(function(D) {
              return D.headers ? function T(L) {
                return L.filter(function(z) {
                  return z.headers ? T(z.headers) : z.isVisible;
                }).length;
              }(D.headers) : D.isVisible;
            }), !!y.headers.length && (y.getHeaderGroupProps = tn(S().getHeaderGroupProps, { instance: f(), headerGroup: y, index: w }), y.getFooterGroupProps = tn(S().getFooterGroupProps, { instance: f(), headerGroup: y, index: w }), !0);
          });
        }, [Vn, f, S]), f().footerGroups = [].concat(f().headerGroups).reverse(), f().prepareRow = d.useCallback(function(y) {
          y.getRowProps = tn(S().getRowProps, { instance: f(), row: y }), y.allCells = Mn.map(function(w) {
            var D = y.values[w.id], T = { column: w, row: y, value: D };
            return T.getCellProps = tn(S().getCellProps, { instance: f(), cell: T }), T.render = Rn(f(), w, { row: y, cell: T, value: D }), T;
          }), y.cells = Nn.map(function(w) {
            return y.allCells.find(function(D) {
              return D.column.id === w.id;
            });
          }), qn(S().prepareRow, y, { instance: f() });
        }, [S, f, Mn, Nn]), f().getTableProps = tn(S().getTableProps, { instance: f() }), f().getTableBodyProps = tn(S().getTableBodyProps, { instance: f() }), qn(S().useFinalInstance, f()), f();
      }, Object.defineProperty(l, "__esModule", { value: !0 });
    });
  }(Dt, Dt.exports)), Dt.exports;
}
var Rt = { exports: {} }, $o;
function Uu() {
  return $o || ($o = 1, function(e, C) {
    (function(l, d) {
      d(C, b);
    })(Ca, function(l, d) {
      d = d && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
      function A(r, t, u, o, p, g, y) {
        try {
          var w = r[g](y), D = w.value;
        } catch (T) {
          u(T);
          return;
        }
        w.done ? t(D) : Promise.resolve(D).then(o, p);
      }
      function R(r) {
        return function() {
          var t = this, u = arguments;
          return new Promise(function(o, p) {
            var g = r.apply(t, u);
            function y(D) {
              A(g, o, p, y, w, "next", D);
            }
            function w(D) {
              A(g, o, p, y, w, "throw", D);
            }
            y(void 0);
          });
        };
      }
      function c() {
        return c = Object.assign || function(r) {
          for (var t = 1; t < arguments.length; t++) {
            var u = arguments[t];
            for (var o in u)
              Object.prototype.hasOwnProperty.call(u, o) && (r[o] = u[o]);
          }
          return r;
        }, c.apply(this, arguments);
      }
      function E(r, t) {
        if (r == null)
          return {};
        var u = {}, o = Object.keys(r), p, g;
        for (g = 0; g < o.length; g++)
          p = o[g], !(t.indexOf(p) >= 0) && (u[p] = r[p]);
        return u;
      }
      function G(r, t) {
        if (typeof r != "object" || r === null)
          return r;
        var u = r[Symbol.toPrimitive];
        if (u !== void 0) {
          var o = u.call(r, t || "default");
          if (typeof o != "object")
            return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(r);
      }
      function h(r) {
        var t = G(r, "string");
        return typeof t == "symbol" ? t : String(t);
      }
      var dn = "Renderer Error ☝️", v = {
        init: "init"
      }, an = function(t) {
        var u = t.value, o = u === void 0 ? "" : u;
        return o;
      }, Fn = function() {
        return d.createElement(d.Fragment, null, " ");
      }, tn = {
        Cell: an,
        width: 150,
        minWidth: 0,
        maxWidth: Number.MAX_SAFE_INTEGER
      };
      function An() {
        for (var r = arguments.length, t = new Array(r), u = 0; u < r; u++)
          t[u] = arguments[u];
        return t.reduce(function(o, p) {
          var g = p.style, y = p.className, w = E(p, ["style", "className"]);
          return o = c({}, o, {}, w), g && (o.style = o.style ? c({}, o.style || {}, {}, g || {}) : g), y && (o.className = o.className ? o.className + " " + y : y), o.className === "" && delete o.className, o;
        }, {});
      }
      function qn(r, t, u) {
        return typeof t == "function" ? qn({}, t(r, u)) : Array.isArray(t) ? An.apply(void 0, [r].concat(t)) : An(r, t);
      }
      var hn = function(t, u) {
        return u === void 0 && (u = {}), function(o) {
          return o === void 0 && (o = {}), [].concat(t, [o]).reduce(function(p, g) {
            return qn(p, g, c({}, u, {
              userProps: o
            }));
          }, {});
        };
      }, En = function(t, u, o, p) {
        return o === void 0 && (o = {}), t.reduce(function(g, y) {
          var w = y(g, o);
          if (!p && typeof w > "u")
            throw console.info(y), new Error("React Table: A reducer hook ☝️ just returned undefined! This is not allowed.");
          return w;
        }, u);
      }, Dn = function(t, u, o) {
        return o === void 0 && (o = {}), t.forEach(function(p) {
          var g = p(u, o);
          if (typeof g < "u")
            throw console.info(p, g), new Error("React Table: A loop-type hook ☝️ just returned a value! This is not allowed.");
        });
      };
      function Jn(r, t, u, o) {
        if (o)
          throw new Error('Defining plugins in the "after" section of ensurePluginOrder is no longer supported (see plugin ' + u + ")");
        var p = r.findIndex(function(g) {
          return g.pluginName === u;
        });
        if (p === -1)
          throw new Error('The plugin "' + u + `" was not found in the plugin list!
This usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:

  ` + u + ".pluginName = '" + u + `'
`);
        t.forEach(function(g) {
          var y = r.findIndex(function(w) {
            return w.pluginName === g;
          });
          if (y > -1 && y > p)
            throw new Error("React Table: The " + u + " plugin hook must be placed after the " + g + " plugin hook!");
        });
      }
      function Wn(r, t) {
        return typeof r == "function" ? r(t) : r;
      }
      function Rn(r) {
        var t = d.useRef();
        return t.current = r, d.useCallback(function() {
          return t.current;
        }, []);
      }
      var or = typeof document < "u" ? d.useLayoutEffect : d.useEffect;
      function zn(r, t) {
        var u = d.useRef(!1);
        or(function() {
          u.current && r(), u.current = !0;
        }, t);
      }
      function Cr(r, t) {
        t === void 0 && (t = 0);
        var u = d.useRef({}), o = Rn(r), p = Rn(t);
        return d.useCallback(
          /* @__PURE__ */ function() {
            var g = R(
              /* @__PURE__ */ regeneratorRuntime.mark(function y() {
                var w, D, T, L = arguments;
                return regeneratorRuntime.wrap(function(B) {
                  for (; ; )
                    switch (B.prev = B.next) {
                      case 0:
                        for (w = L.length, D = new Array(w), T = 0; T < w; T++)
                          D[T] = L[T];
                        return u.current.promise || (u.current.promise = new Promise(function(x, _) {
                          u.current.resolve = x, u.current.reject = _;
                        })), u.current.timeout && clearTimeout(u.current.timeout), u.current.timeout = setTimeout(
                          /* @__PURE__ */ R(
                            /* @__PURE__ */ regeneratorRuntime.mark(function x() {
                              return regeneratorRuntime.wrap(function(O) {
                                for (; ; )
                                  switch (O.prev = O.next) {
                                    case 0:
                                      return delete u.current.timeout, O.prev = 1, O.t0 = u.current, O.next = 5, o().apply(void 0, D);
                                    case 5:
                                      O.t1 = O.sent, O.t0.resolve.call(O.t0, O.t1), O.next = 12;
                                      break;
                                    case 9:
                                      O.prev = 9, O.t2 = O.catch(1), u.current.reject(O.t2);
                                    case 12:
                                      return O.prev = 12, delete u.current.promise, O.finish(12);
                                    case 15:
                                    case "end":
                                      return O.stop();
                                  }
                              }, x, null, [[1, 9, 12, 15]]);
                            })
                          ),
                          p()
                        ), B.abrupt("return", u.current.promise);
                      case 5:
                      case "end":
                        return B.stop();
                    }
                }, y);
              })
            );
            return function() {
              return g.apply(this, arguments);
            };
          }(),
          [o, p]
        );
      }
      function nr(r, t, u) {
        return u === void 0 && (u = {}), function(o, p) {
          p === void 0 && (p = {});
          var g = typeof o == "string" ? t[o] : o;
          if (typeof g > "u")
            throw console.info(t), new Error(dn);
          return en(g, c({}, r, {
            column: t
          }, u, {}, p));
        };
      }
      function en(r, t) {
        return pn(r) ? d.createElement(r, t) : r;
      }
      function pn(r) {
        return _n(r) || typeof r == "function" || Yn(r);
      }
      function _n(r) {
        return typeof r == "function" && function() {
          var t = Object.getPrototypeOf(r);
          return t.prototype && t.prototype.isReactComponent;
        }();
      }
      function Yn(r) {
        return typeof r == "object" && typeof r.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(r.$$typeof.description);
      }
      function $n(r, t, u) {
        return u === void 0 && (u = 0), r.map(function(o) {
          return o = c({}, o, {
            parent: t,
            depth: u
          }), Dr(o), o.columns && (o.columns = $n(o.columns, o, u + 1)), o;
        });
      }
      function Tr(r) {
        return q(r, "columns");
      }
      function Dr(r) {
        var t = r.id, u = r.accessor, o = r.Header;
        if (typeof u == "string") {
          t = t || u;
          var p = u.split(".");
          u = function(y) {
            return mr(y, p);
          };
        }
        if (!t && typeof o == "string" && o && (t = o), !t && r.columns)
          throw console.error(r), new Error('A column ID (or unique "Header" value) is required!');
        if (!t)
          throw console.error(r), new Error("A column ID (or string accessor) is required!");
        return Object.assign(r, {
          id: t,
          accessor: u
        }), r;
      }
      function Sr(r, t) {
        if (!t)
          throw new Error();
        return Object.assign(r, c({
          // Make sure there is a fallback header, just in case
          Header: Fn,
          Footer: Fn
        }, tn, {}, t, {}, r)), Object.assign(r, {
          originalWidth: r.width
        }), r;
      }
      function Pr(r, t, u) {
        u === void 0 && (u = function() {
          return {};
        });
        for (var o = [], p = r, g = 0, y = function() {
          return g++;
        }, w = function() {
          var T = {
            headers: []
          }, L = [], z = p.some(function(B) {
            return B.parent;
          });
          p.forEach(function(B) {
            var x = [].concat(L).reverse()[0], _;
            if (z) {
              if (B.parent)
                _ = c({}, B.parent, {
                  originalId: B.parent.id,
                  id: B.parent.id + "_" + y(),
                  headers: [B]
                }, u(B));
              else {
                var O = B.id + "_placeholder";
                _ = Sr(c({
                  originalId: O,
                  id: B.id + "_placeholder_" + y(),
                  placeholderOf: B,
                  headers: [B]
                }, u(B)), t);
              }
              x && x.originalId === _.originalId ? x.headers.push(B) : L.push(_);
            }
            T.headers.push(B);
          }), o.push(T), p = L;
        }; p.length; )
          w();
        return o.reverse();
      }
      var ar = /* @__PURE__ */ new Map();
      function mr(r, t, u) {
        if (!t)
          return r;
        var o = typeof t == "function" ? t : JSON.stringify(t), p = ar.get(o) || function() {
          var y = Lr(t);
          return ar.set(o, y), y;
        }(), g;
        try {
          g = p.reduce(function(y, w) {
            return y[w];
          }, r);
        } catch {
        }
        return typeof g < "u" ? g : u;
      }
      function yr() {
        for (var r = arguments.length, t = new Array(r), u = 0; u < r; u++)
          t[u] = arguments[u];
        for (var o = 0; o < t.length; o += 1)
          if (typeof t[o] < "u")
            return t[o];
      }
      function Br(r) {
        if (typeof r == "function")
          return r;
      }
      function q(r, t) {
        var u = [], o = function p(g) {
          g.forEach(function(y) {
            y[t] ? p(y[t]) : u.push(y);
          });
        };
        return o(r), u;
      }
      function Cn(r, t) {
        var u = t.manualExpandedKey, o = t.expanded, p = t.expandSubRows, g = p === void 0 ? !0 : p, y = [], w = function D(T, L) {
          L === void 0 && (L = !0), T.isExpanded = T.original && T.original[u] || o[T.id], T.canExpand = T.subRows && !!T.subRows.length, L && y.push(T), T.subRows && T.subRows.length && T.isExpanded && T.subRows.forEach(function(z) {
            return D(z, g);
          });
        };
        return r.forEach(function(D) {
          return w(D);
        }), y;
      }
      function fn(r, t, u) {
        return Br(r) || t[r] || u[r] || u.text;
      }
      function un(r, t, u) {
        return r ? r(t, u) : typeof t > "u";
      }
      function Gn() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var jn = null;
      function Rr() {
        if (typeof jn == "boolean")
          return jn;
        var r = !1;
        try {
          var t = {
            get passive() {
              return r = !0, !1;
            }
          };
          window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
        } catch {
          r = !1;
        }
        return jn = r, jn;
      }
      var Ir = /\[/g, wr = /\]/g;
      function Lr(r) {
        return hr(r).map(function(t) {
          return String(t).replace(".", "_");
        }).join(".").replace(Ir, ".").replace(wr, "").split(".");
      }
      function hr(r, t) {
        if (t === void 0 && (t = []), !Array.isArray(r))
          t.push(r);
        else
          for (var u = 0; u < r.length; u += 1)
            hr(r[u], t);
        return t;
      }
      var pr = function(t) {
        return c({
          role: "table"
        }, t);
      }, Mr = function(t) {
        return c({
          role: "rowgroup"
        }, t);
      }, xr = function(t, u) {
        var o = u.column;
        return c({
          key: "header_" + o.id,
          colSpan: o.totalVisibleHeaderCount,
          role: "columnheader"
        }, t);
      }, kr = function(t, u) {
        var o = u.column;
        return c({
          key: "footer_" + o.id,
          colSpan: o.totalVisibleHeaderCount
        }, t);
      }, Hr = function(t, u) {
        var o = u.index;
        return c({
          key: "headerGroup_" + o,
          role: "row"
        }, t);
      }, Gr = function(t, u) {
        var o = u.index;
        return c({
          key: "footerGroup_" + o
        }, t);
      }, ae = function(t, u) {
        var o = u.row;
        return c({
          key: "row_" + o.id,
          role: "row"
        }, t);
      }, Q = function(t, u) {
        var o = u.cell;
        return c({
          key: "cell_" + o.row.id + "_" + o.column.id,
          role: "cell"
        }, t);
      };
      function Bn() {
        return {
          useOptions: [],
          stateReducers: [],
          useControlledState: [],
          columns: [],
          columnsDeps: [],
          allColumns: [],
          allColumnsDeps: [],
          accessValue: [],
          materializedColumns: [],
          materializedColumnsDeps: [],
          useInstanceAfterData: [],
          visibleColumns: [],
          visibleColumnsDeps: [],
          headerGroups: [],
          headerGroupsDeps: [],
          useInstanceBeforeDimensions: [],
          useInstance: [],
          prepareRow: [],
          getTableProps: [pr],
          getTableBodyProps: [Mr],
          getHeaderGroupProps: [Hr],
          getFooterGroupProps: [Gr],
          getHeaderProps: [xr],
          getFooterProps: [kr],
          getRowProps: [ae],
          getCellProps: [Q],
          useFinalInstance: []
        };
      }
      v.resetHiddenColumns = "resetHiddenColumns", v.toggleHideColumn = "toggleHideColumn", v.setHiddenColumns = "setHiddenColumns", v.toggleHideAllColumns = "toggleHideAllColumns";
      var er = function(t) {
        t.getToggleHiddenProps = [ir], t.getToggleHideAllColumnsProps = [fr], t.stateReducers.push(Fr), t.useInstanceBeforeDimensions.push(Nr), t.headerGroupsDeps.push(function(u, o) {
          var p = o.instance;
          return [].concat(u, [p.state.hiddenColumns]);
        }), t.useInstance.push(jr);
      };
      er.pluginName = "useColumnVisibility";
      var ir = function(t, u) {
        var o = u.column;
        return [t, {
          onChange: function(g) {
            o.toggleHidden(!g.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: o.isVisible,
          title: "Toggle Column Visible"
        }];
      }, fr = function(t, u) {
        var o = u.instance;
        return [t, {
          onChange: function(g) {
            o.toggleHideAllColumns(!g.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: !o.allColumnsHidden && !o.state.hiddenColumns.length,
          title: "Toggle All Columns Hidden",
          indeterminate: !o.allColumnsHidden && o.state.hiddenColumns.length
        }];
      };
      function Fr(r, t, u, o) {
        if (t.type === v.init)
          return c({
            hiddenColumns: []
          }, r);
        if (t.type === v.resetHiddenColumns)
          return c({}, r, {
            hiddenColumns: o.initialState.hiddenColumns || []
          });
        if (t.type === v.toggleHideColumn) {
          var p = typeof t.value < "u" ? t.value : !r.hiddenColumns.includes(t.columnId), g = p ? [].concat(r.hiddenColumns, [t.columnId]) : r.hiddenColumns.filter(function(w) {
            return w !== t.columnId;
          });
          return c({}, r, {
            hiddenColumns: g
          });
        }
        if (t.type === v.setHiddenColumns)
          return c({}, r, {
            hiddenColumns: Wn(t.value, r.hiddenColumns)
          });
        if (t.type === v.toggleHideAllColumns) {
          var y = typeof t.value < "u" ? t.value : !r.hiddenColumns.length;
          return c({}, r, {
            hiddenColumns: y ? o.allColumns.map(function(w) {
              return w.id;
            }) : []
          });
        }
      }
      function Nr(r) {
        var t = r.headers, u = r.state.hiddenColumns, o = d.useRef(!1);
        o.current;
        var p = function y(w, D) {
          w.isVisible = D && !u.includes(w.id);
          var T = 0;
          return w.headers && w.headers.length ? w.headers.forEach(function(L) {
            return T += y(L, w.isVisible);
          }) : T = w.isVisible ? 1 : 0, w.totalVisibleHeaderCount = T, T;
        }, g = 0;
        t.forEach(function(y) {
          return g += p(y, !0);
        });
      }
      function jr(r) {
        var t = r.columns, u = r.flatHeaders, o = r.dispatch, p = r.allColumns, g = r.getHooks, y = r.state.hiddenColumns, w = r.autoResetHiddenColumns, D = w === void 0 ? !0 : w, T = Rn(r), L = p.length === y.length, z = d.useCallback(function(Z, yn) {
          return o({
            type: v.toggleHideColumn,
            columnId: Z,
            value: yn
          });
        }, [o]), B = d.useCallback(function(Z) {
          return o({
            type: v.setHiddenColumns,
            value: Z
          });
        }, [o]), x = d.useCallback(function(Z) {
          return o({
            type: v.toggleHideAllColumns,
            value: Z
          });
        }, [o]), _ = hn(g().getToggleHideAllColumnsProps, {
          instance: T()
        });
        u.forEach(function(Z) {
          Z.toggleHidden = function(yn) {
            o({
              type: v.toggleHideColumn,
              columnId: Z.id,
              value: yn
            });
          }, Z.getToggleHiddenProps = hn(g().getToggleHiddenProps, {
            instance: T(),
            column: Z
          });
        });
        var O = Rn(D);
        zn(function() {
          O() && o({
            type: v.resetHiddenColumns
          });
        }, [o, t]), Object.assign(r, {
          allColumnsHidden: L,
          toggleHideColumn: z,
          setHiddenColumns: B,
          toggleHideAllColumns: x,
          getToggleHideAllColumnsProps: _
        });
      }
      var Ur = {}, Jr = {}, Vr = function(t, u, o) {
        return t;
      }, $r = function(t, u) {
        return t.subRows || [];
      }, Kr = function(t, u, o) {
        return "" + (o ? [o.id, u].join(".") : u);
      }, qr = function(t) {
        return t;
      };
      function Wr(r) {
        var t = r.initialState, u = t === void 0 ? Ur : t, o = r.defaultColumn, p = o === void 0 ? Jr : o, g = r.getSubRows, y = g === void 0 ? $r : g, w = r.getRowId, D = w === void 0 ? Kr : w, T = r.stateReducer, L = T === void 0 ? Vr : T, z = r.useControlledState, B = z === void 0 ? qr : z, x = E(r, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);
        return c({}, x, {
          initialState: u,
          defaultColumn: p,
          getSubRows: y,
          getRowId: D,
          stateReducer: L,
          useControlledState: B
        });
      }
      var ue = function(t) {
        for (var u = arguments.length, o = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++)
          o[p - 1] = arguments[p];
        t = Wr(t), o = [er].concat(o);
        var g = d.useRef({}), y = Rn(g.current);
        Object.assign(y(), c({}, t, {
          plugins: o,
          hooks: Bn()
        })), o.filter(Boolean).forEach(function(mn) {
          mn(y().hooks);
        });
        var w = Rn(y().hooks);
        y().getHooks = w, delete y().hooks, Object.assign(y(), En(w().useOptions, Wr(t)));
        var D = y(), T = D.data, L = D.columns, z = D.initialState, B = D.defaultColumn, x = D.getSubRows, _ = D.getRowId, O = D.stateReducer, Z = D.useControlledState, yn = Rn(O), vn = d.useCallback(function(mn, Zn) {
          if (!Zn.type)
            throw console.info({
              action: Zn
            }), new Error("Unknown Action 👆");
          return [].concat(w().stateReducers, Array.isArray(yn()) ? yn() : [yn()]).reduce(function(ur, gr) {
            return gr(ur, Zn, mn, y()) || ur;
          }, mn);
        }, [w, yn, y]), j = d.useReducer(vn, void 0, function() {
          return vn(z, {
            type: v.init
          });
        }), Pn = j[0], Hn = j[1], J = En([].concat(w().useControlledState, [Z]), Pn, {
          instance: y()
        });
        Object.assign(y(), {
          state: J,
          dispatch: Hn
        });
        var Y = d.useMemo(function() {
          return $n(En(w().columns, L, {
            instance: y()
          }));
        }, [w, y, L].concat(En(w().columnsDeps, [], {
          instance: y()
        })));
        y().columns = Y;
        var $ = d.useMemo(function() {
          return En(w().allColumns, Tr(Y), {
            instance: y()
          }).map(Dr);
        }, [Y, w, y].concat(En(w().allColumnsDeps, [], {
          instance: y()
        })));
        y().allColumns = $;
        var cn = d.useMemo(function() {
          for (var mn = [], Zn = [], ur = {}, gr = [].concat($); gr.length; ) {
            var sr = gr.shift();
            We({
              data: T,
              rows: mn,
              flatRows: Zn,
              rowsById: ur,
              column: sr,
              getRowId: _,
              getSubRows: x,
              accessValueHooks: w().accessValue,
              getInstance: y
            });
          }
          return [mn, Zn, ur];
        }, [$, T, _, x, w, y]), Ln = cn[0], kn = cn[1], Xn = cn[2];
        Object.assign(y(), {
          rows: Ln,
          initialRows: [].concat(Ln),
          flatRows: kn,
          rowsById: Xn
          // materializedColumns,
        }), Dn(w().useInstanceAfterData, y());
        var on = d.useMemo(function() {
          return En(w().visibleColumns, $, {
            instance: y()
          }).map(function(mn) {
            return Sr(mn, B);
          });
        }, [w, $, y, B].concat(En(w().visibleColumnsDeps, [], {
          instance: y()
        })));
        $ = d.useMemo(function() {
          var mn = [].concat(on);
          return $.forEach(function(Zn) {
            mn.find(function(ur) {
              return ur.id === Zn.id;
            }) || mn.push(Zn);
          }), mn;
        }, [$, on]), y().allColumns = $;
        {
          var lr = $.filter(function(mn, Zn) {
            return $.findIndex(function(ur) {
              return ur.id === mn.id;
            }) !== Zn;
          });
          if (lr.length)
            throw console.info($), new Error('Duplicate columns were found with ids: "' + lr.map(function(mn) {
              return mn.id;
            }).join(", ") + '" in the columns array above');
        }
        var On = d.useMemo(function() {
          return En(w().headerGroups, Pr(on, B), y());
        }, [w, on, B, y].concat(En(w().headerGroupsDeps, [], {
          instance: y()
        })));
        y().headerGroups = On;
        var wn = d.useMemo(function() {
          return On.length ? On[0].headers : [];
        }, [On]);
        y().headers = wn, y().flatHeaders = On.reduce(function(mn, Zn) {
          return [].concat(mn, Zn.headers);
        }, []), Dn(w().useInstanceBeforeDimensions, y());
        var bn = on.filter(function(mn) {
          return mn.isVisible;
        }).map(function(mn) {
          return mn.id;
        }).sort().join("_");
        on = d.useMemo(
          function() {
            return on.filter(function(mn) {
              return mn.isVisible;
            });
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [on, bn]
        ), y().visibleColumns = on;
        var Un = ge(wn), cr = Un[0], ee = Un[1], ke = Un[2];
        return y().totalColumnsMinWidth = cr, y().totalColumnsWidth = ee, y().totalColumnsMaxWidth = ke, Dn(w().useInstance, y()), [].concat(y().flatHeaders, y().allColumns).forEach(function(mn) {
          mn.render = nr(y(), mn), mn.getHeaderProps = hn(w().getHeaderProps, {
            instance: y(),
            column: mn
          }), mn.getFooterProps = hn(w().getFooterProps, {
            instance: y(),
            column: mn
          });
        }), y().headerGroups = d.useMemo(function() {
          return On.filter(function(mn, Zn) {
            return mn.headers = mn.headers.filter(function(ur) {
              var gr = function sr(zr) {
                return zr.filter(function(dr) {
                  return dr.headers ? sr(dr.headers) : dr.isVisible;
                }).length;
              };
              return ur.headers ? gr(ur.headers) : ur.isVisible;
            }), mn.headers.length ? (mn.getHeaderGroupProps = hn(w().getHeaderGroupProps, {
              instance: y(),
              headerGroup: mn,
              index: Zn
            }), mn.getFooterGroupProps = hn(w().getFooterGroupProps, {
              instance: y(),
              headerGroup: mn,
              index: Zn
            }), !0) : !1;
          });
        }, [On, y, w]), y().footerGroups = [].concat(y().headerGroups).reverse(), y().prepareRow = d.useCallback(function(mn) {
          mn.getRowProps = hn(w().getRowProps, {
            instance: y(),
            row: mn
          }), mn.allCells = $.map(function(Zn) {
            var ur = mn.values[Zn.id], gr = {
              column: Zn,
              row: mn,
              value: ur
            };
            return gr.getCellProps = hn(w().getCellProps, {
              instance: y(),
              cell: gr
            }), gr.render = nr(y(), Zn, {
              row: mn,
              cell: gr,
              value: ur
            }), gr;
          }), mn.cells = on.map(function(Zn) {
            return mn.allCells.find(function(ur) {
              return ur.column.id === Zn.id;
            });
          }), Dn(w().prepareRow, mn, {
            instance: y()
          });
        }, [w, y, $, on]), y().getTableProps = hn(w().getTableProps, {
          instance: y()
        }), y().getTableBodyProps = hn(w().getTableBodyProps, {
          instance: y()
        }), Dn(w().useFinalInstance, y()), y();
      };
      function ge(r, t) {
        t === void 0 && (t = 0);
        var u = 0, o = 0, p = 0, g = 0;
        return r.forEach(function(y) {
          var w = y.headers;
          if (y.totalLeft = t, w && w.length) {
            var D = ge(w, t), T = D[0], L = D[1], z = D[2], B = D[3];
            y.totalMinWidth = T, y.totalWidth = L, y.totalMaxWidth = z, y.totalFlexWidth = B;
          } else
            y.totalMinWidth = y.minWidth, y.totalWidth = Math.min(Math.max(y.minWidth, y.width), y.maxWidth), y.totalMaxWidth = y.maxWidth, y.totalFlexWidth = y.canResize ? y.totalWidth : 0;
          y.isVisible && (t += y.totalWidth, u += y.totalMinWidth, o += y.totalWidth, p += y.totalMaxWidth, g += y.totalFlexWidth);
        }), [u, o, p, g];
      }
      function We(r) {
        var t = r.data, u = r.rows, o = r.flatRows, p = r.rowsById, g = r.column, y = r.getRowId, w = r.getSubRows, D = r.accessValueHooks, T = r.getInstance, L = function z(B, x, _, O, Z) {
          _ === void 0 && (_ = 0);
          var yn = B, vn = y(B, x, O), j = p[vn];
          if (j)
            j.subRows && j.originalSubRows.forEach(function(Hn, J) {
              return z(Hn, J, _ + 1, j);
            });
          else if (j = {
            id: vn,
            original: yn,
            index: x,
            depth: _,
            cells: [{}]
            // This is a dummy cell
          }, j.cells.map = Gn, j.cells.filter = Gn, j.cells.forEach = Gn, j.cells[0].getCellProps = Gn, j.values = {}, Z.push(j), o.push(j), p[vn] = j, j.originalSubRows = w(B, x), j.originalSubRows) {
            var Pn = [];
            j.originalSubRows.forEach(function(Hn, J) {
              return z(Hn, J, _ + 1, j, Pn);
            }), j.subRows = Pn;
          }
          g.accessor && (j.values[g.id] = g.accessor(B, x, j, Z, t)), j.values[g.id] = En(D, j.values[g.id], {
            row: j,
            column: g,
            instance: T()
          }, !0);
        };
        t.forEach(function(z, B) {
          return L(z, B, 0, void 0, u);
        });
      }
      v.resetExpanded = "resetExpanded", v.toggleRowExpanded = "toggleRowExpanded", v.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var me = function(t) {
        t.getToggleAllRowsExpandedProps = [xe], t.getToggleRowExpandedProps = [Ge], t.stateReducers.push(Ve), t.useInstance.push(Zr), t.prepareRow.push(Ke);
      };
      me.pluginName = "useExpanded";
      var xe = function(t, u) {
        var o = u.instance;
        return [t, {
          onClick: function(g) {
            o.toggleAllRowsExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle All Rows Expanded"
        }];
      }, Ge = function(t, u) {
        var o = u.row;
        return [t, {
          onClick: function() {
            o.toggleRowExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle Row Expanded"
        }];
      };
      function Ve(r, t, u, o) {
        if (t.type === v.init)
          return c({
            expanded: {}
          }, r);
        if (t.type === v.resetExpanded)
          return c({}, r, {
            expanded: o.initialState.expanded || {}
          });
        if (t.type === v.toggleAllRowsExpanded) {
          var p = t.value, g = o.rowsById, y = Object.keys(g).length === Object.keys(r.expanded).length, w = typeof p < "u" ? p : !y;
          if (w) {
            var D = {};
            return Object.keys(g).forEach(function(Z) {
              D[Z] = !0;
            }), c({}, r, {
              expanded: D
            });
          }
          return c({}, r, {
            expanded: {}
          });
        }
        if (t.type === v.toggleRowExpanded) {
          var T = t.id, L = t.value, z = r.expanded[T], B = typeof L < "u" ? L : !z;
          if (!z && B) {
            var x;
            return c({}, r, {
              expanded: c({}, r.expanded, (x = {}, x[T] = !0, x))
            });
          } else if (z && !B) {
            var _ = r.expanded;
            _[T];
            var O = E(_, [T].map(h));
            return c({}, r, {
              expanded: O
            });
          } else
            return r;
        }
      }
      function Zr(r) {
        var t = r.data, u = r.rows, o = r.rowsById, p = r.manualExpandedKey, g = p === void 0 ? "expanded" : p, y = r.paginateExpandedRows, w = y === void 0 ? !0 : y, D = r.expandSubRows, T = D === void 0 ? !0 : D, L = r.autoResetExpanded, z = L === void 0 ? !0 : L, B = r.getHooks, x = r.plugins, _ = r.state.expanded, O = r.dispatch;
        Jn(x, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var Z = Rn(z), yn = !!(Object.keys(o).length && Object.keys(_).length);
        yn && Object.keys(o).some(function($) {
          return !_[$];
        }) && (yn = !1), zn(function() {
          Z() && O({
            type: v.resetExpanded
          });
        }, [O, t]);
        var vn = d.useCallback(function($, cn) {
          O({
            type: v.toggleRowExpanded,
            id: $,
            value: cn
          });
        }, [O]), j = d.useCallback(function($) {
          return O({
            type: v.toggleAllRowsExpanded,
            value: $
          });
        }, [O]), Pn = d.useMemo(function() {
          return w ? Cn(u, {
            manualExpandedKey: g,
            expanded: _,
            expandSubRows: T
          }) : u;
        }, [w, u, g, _, T]), Hn = d.useMemo(function() {
          return Bt(_);
        }, [_]), J = Rn(r), Y = hn(B().getToggleAllRowsExpandedProps, {
          instance: J()
        });
        Object.assign(r, {
          preExpandedRows: u,
          expandedRows: Pn,
          rows: Pn,
          expandedDepth: Hn,
          isAllRowsExpanded: yn,
          toggleRowExpanded: vn,
          toggleAllRowsExpanded: j,
          getToggleAllRowsExpandedProps: Y
        });
      }
      function Ke(r, t) {
        var u = t.instance.getHooks, o = t.instance;
        r.toggleRowExpanded = function(p) {
          return o.toggleRowExpanded(r.id, p);
        }, r.getToggleRowExpandedProps = hn(u().getToggleRowExpandedProps, {
          instance: o,
          row: r
        });
      }
      function Bt(r) {
        var t = 0;
        return Object.keys(r).forEach(function(u) {
          var o = u.split(".");
          t = Math.max(t, o.length);
        }), t;
      }
      var qe = function(t, u, o) {
        return t = t.filter(function(p) {
          return u.some(function(g) {
            var y = p.values[g];
            return String(y).toLowerCase().includes(String(o).toLowerCase());
          });
        }), t;
      };
      qe.autoRemove = function(r) {
        return !r;
      };
      var he = function(t, u, o) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var y = p.values[g];
            return y !== void 0 ? String(y).toLowerCase() === String(o).toLowerCase() : !0;
          });
        });
      };
      he.autoRemove = function(r) {
        return !r;
      };
      var ze = function(t, u, o) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var y = p.values[g];
            return y !== void 0 ? String(y) === String(o) : !0;
          });
        });
      };
      ze.autoRemove = function(r) {
        return !r;
      };
      var _e = function(t, u, o) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var y = p.values[g];
            return y.includes(o);
          });
        });
      };
      _e.autoRemove = function(r) {
        return !r || !r.length;
      };
      var ve = function(t, u, o) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var y = p.values[g];
            return y && y.length && o.every(function(w) {
              return y.includes(w);
            });
          });
        });
      };
      ve.autoRemove = function(r) {
        return !r || !r.length;
      };
      var Se = function(t, u, o) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var y = p.values[g];
            return y && y.length && o.some(function(w) {
              return y.includes(w);
            });
          });
        });
      };
      Se.autoRemove = function(r) {
        return !r || !r.length;
      };
      var Xe = function(t, u, o) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var y = p.values[g];
            return o.includes(y);
          });
        });
      };
      Xe.autoRemove = function(r) {
        return !r || !r.length;
      };
      var Ye = function(t, u, o) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var y = p.values[g];
            return y === o;
          });
        });
      };
      Ye.autoRemove = function(r) {
        return typeof r > "u";
      };
      var we = function(t, u, o) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var y = p.values[g];
            return y == o;
          });
        });
      };
      we.autoRemove = function(r) {
        return r == null;
      };
      var je = function(t, u, o) {
        var p = o || [], g = p[0], y = p[1];
        if (g = typeof g == "number" ? g : -1 / 0, y = typeof y == "number" ? y : 1 / 0, g > y) {
          var w = g;
          g = y, y = w;
        }
        return t.filter(function(D) {
          return u.some(function(T) {
            var L = D.values[T];
            return L >= g && L <= y;
          });
        });
      };
      je.autoRemove = function(r) {
        return !r || typeof r[0] != "number" && typeof r[1] != "number";
      };
      var Qr = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        text: qe,
        exactText: he,
        exactTextCase: ze,
        includes: _e,
        includesAll: ve,
        includesSome: Se,
        includesValue: Xe,
        exact: Ye,
        equals: we,
        between: je
      });
      v.resetFilters = "resetFilters", v.setFilter = "setFilter", v.setAllFilters = "setAllFilters";
      var Ue = function(t) {
        t.stateReducers.push(Ht), t.useInstance.push(Ft);
      };
      Ue.pluginName = "useFilters";
      function Ht(r, t, u, o) {
        if (t.type === v.init)
          return c({
            filters: []
          }, r);
        if (t.type === v.resetFilters)
          return c({}, r, {
            filters: o.initialState.filters || []
          });
        if (t.type === v.setFilter) {
          var p = t.columnId, g = t.filterValue, y = o.allColumns, w = o.filterTypes, D = y.find(function(O) {
            return O.id === p;
          });
          if (!D)
            throw new Error("React-Table: Could not find a column with id: " + p);
          var T = fn(D.filter, w || {}, Qr), L = r.filters.find(function(O) {
            return O.id === p;
          }), z = Wn(g, L && L.value);
          return un(T.autoRemove, z, D) ? c({}, r, {
            filters: r.filters.filter(function(O) {
              return O.id !== p;
            })
          }) : L ? c({}, r, {
            filters: r.filters.map(function(O) {
              return O.id === p ? {
                id: p,
                value: z
              } : O;
            })
          }) : c({}, r, {
            filters: [].concat(r.filters, [{
              id: p,
              value: z
            }])
          });
        }
        if (t.type === v.setAllFilters) {
          var B = t.filters, x = o.allColumns, _ = o.filterTypes;
          return c({}, r, {
            // Filter out undefined values
            filters: Wn(B, r.filters).filter(function(O) {
              var Z = x.find(function(vn) {
                return vn.id === O.id;
              }), yn = fn(Z.filter, _ || {}, Qr);
              return !un(yn.autoRemove, O.value, Z);
            })
          });
        }
      }
      function Ft(r) {
        var t = r.data, u = r.rows, o = r.flatRows, p = r.rowsById, g = r.allColumns, y = r.filterTypes, w = r.manualFilters, D = r.defaultCanFilter, T = D === void 0 ? !1 : D, L = r.disableFilters, z = r.state.filters, B = r.dispatch, x = r.autoResetFilters, _ = x === void 0 ? !0 : x, O = d.useCallback(function(J, Y) {
          B({
            type: v.setFilter,
            columnId: J,
            filterValue: Y
          });
        }, [B]), Z = d.useCallback(function(J) {
          B({
            type: v.setAllFilters,
            filters: J
          });
        }, [B]);
        g.forEach(function(J) {
          var Y = J.id, $ = J.accessor, cn = J.defaultCanFilter, Ln = J.disableFilters;
          J.canFilter = $ ? yr(Ln === !0 ? !1 : void 0, L === !0 ? !1 : void 0, !0) : yr(cn, T, !1), J.setFilter = function(Xn) {
            return O(J.id, Xn);
          };
          var kn = z.find(function(Xn) {
            return Xn.id === Y;
          });
          J.filterValue = kn && kn.value;
        });
        var yn = d.useMemo(function() {
          if (w || !z.length)
            return [u, o, p];
          var J = [], Y = {}, $ = function cn(Ln, kn) {
            kn === void 0 && (kn = 0);
            var Xn = Ln;
            return Xn = z.reduce(function(on, lr) {
              var On = lr.id, wn = lr.value, bn = g.find(function(cr) {
                return cr.id === On;
              });
              if (!bn)
                return on;
              kn === 0 && (bn.preFilteredRows = on);
              var Un = fn(bn.filter, y || {}, Qr);
              return Un ? (bn.filteredRows = Un(on, [On], wn), bn.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + bn.id + "."), on);
            }, Ln), Xn.forEach(function(on) {
              J.push(on), Y[on.id] = on, on.subRows && (on.subRows = on.subRows && on.subRows.length > 0 ? cn(on.subRows, kn + 1) : on.subRows);
            }), Xn;
          };
          return [$(u), J, Y];
        }, [w, z, u, o, p, g, y]), vn = yn[0], j = yn[1], Pn = yn[2];
        d.useMemo(function() {
          var J = g.filter(function(Y) {
            return !z.find(function($) {
              return $.id === Y.id;
            });
          });
          J.forEach(function(Y) {
            Y.preFilteredRows = vn, Y.filteredRows = vn;
          });
        }, [vn, z, g]);
        var Hn = Rn(_);
        zn(function() {
          Hn() && B({
            type: v.resetFilters
          });
        }, [B, w ? null : t]), Object.assign(r, {
          preFilteredRows: u,
          preFilteredFlatRows: o,
          preFilteredRowsById: p,
          filteredRows: vn,
          filteredFlatRows: j,
          filteredRowsById: Pn,
          rows: vn,
          flatRows: j,
          rowsById: Pn,
          setFilter: O,
          setAllFilters: Z
        });
      }
      v.resetGlobalFilter = "resetGlobalFilter", v.setGlobalFilter = "setGlobalFilter";
      var Je = function(t) {
        t.stateReducers.push($e), t.useInstance.push(Ze);
      };
      Je.pluginName = "useGlobalFilter";
      function $e(r, t, u, o) {
        if (t.type === v.resetGlobalFilter)
          return c({}, r, {
            globalFilter: o.initialState.globalFilter || void 0
          });
        if (t.type === v.setGlobalFilter) {
          var p = t.filterValue, g = o.userFilterTypes, y = fn(o.globalFilter, g || {}, Qr), w = Wn(p, r.globalFilter);
          if (un(y.autoRemove, w)) {
            r.globalFilter;
            var D = E(r, ["globalFilter"]);
            return D;
          }
          return c({}, r, {
            globalFilter: w
          });
        }
      }
      function Ze(r) {
        var t = r.data, u = r.rows, o = r.flatRows, p = r.rowsById, g = r.allColumns, y = r.filterTypes, w = r.globalFilter, D = r.manualGlobalFilter, T = r.state.globalFilter, L = r.dispatch, z = r.autoResetGlobalFilter, B = z === void 0 ? !0 : z, x = r.disableGlobalFilter, _ = d.useCallback(function(Pn) {
          L({
            type: v.setGlobalFilter,
            filterValue: Pn
          });
        }, [L]), O = d.useMemo(function() {
          if (D || typeof T > "u")
            return [u, o, p];
          var Pn = [], Hn = {}, J = fn(w, y || {}, Qr);
          if (!J)
            return console.warn("Could not find a valid 'globalFilter' option."), u;
          g.forEach(function(cn) {
            var Ln = cn.disableGlobalFilter;
            cn.canFilter = yr(Ln === !0 ? !1 : void 0, x === !0 ? !1 : void 0, !0);
          });
          var Y = g.filter(function(cn) {
            return cn.canFilter === !0;
          }), $ = function cn(Ln) {
            return Ln = J(Ln, Y.map(function(kn) {
              return kn.id;
            }), T), Ln.forEach(function(kn) {
              Pn.push(kn), Hn[kn.id] = kn, kn.subRows = kn.subRows && kn.subRows.length ? cn(kn.subRows) : kn.subRows;
            }), Ln;
          };
          return [$(u), Pn, Hn];
        }, [D, T, w, y, g, u, o, p, x]), Z = O[0], yn = O[1], vn = O[2], j = Rn(B);
        zn(function() {
          j() && L({
            type: v.resetGlobalFilter
          });
        }, [L, D ? null : t]), Object.assign(r, {
          preGlobalFilteredRows: u,
          preGlobalFilteredFlatRows: o,
          preGlobalFilteredRowsById: p,
          globalFilteredRows: Z,
          globalFilteredFlatRows: yn,
          globalFilteredRowsById: vn,
          rows: Z,
          flatRows: yn,
          rowsById: vn,
          setGlobalFilter: _,
          disableGlobalFilter: x
        });
      }
      function ie(r, t) {
        return t.reduce(function(u, o) {
          return u + (typeof o == "number" ? o : 0);
        }, 0);
      }
      function ne(r) {
        var t = r[0] || 0;
        return r.forEach(function(u) {
          typeof u == "number" && (t = Math.min(t, u));
        }), t;
      }
      function Qe(r) {
        var t = r[0] || 0;
        return r.forEach(function(u) {
          typeof u == "number" && (t = Math.max(t, u));
        }), t;
      }
      function Wt(r) {
        var t = r[0] || 0, u = r[0] || 0;
        return r.forEach(function(o) {
          typeof o == "number" && (t = Math.min(t, o), u = Math.max(u, o));
        }), t + ".." + u;
      }
      function nt(r) {
        return ie(null, r) / r.length;
      }
      function xt(r) {
        if (!r.length)
          return null;
        var t = Math.floor(r.length / 2), u = [].concat(r).sort(function(o, p) {
          return o - p;
        });
        return r.length % 2 !== 0 ? u[t] : (u[t - 1] + u[t]) / 2;
      }
      function Gt(r) {
        return Array.from(new Set(r).values());
      }
      function Vt(r) {
        return new Set(r).size;
      }
      function rt(r) {
        return r.length;
      }
      var Me = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        sum: ie,
        min: ne,
        max: Qe,
        minMax: Wt,
        average: nt,
        median: xt,
        unique: Gt,
        uniqueCount: Vt,
        count: rt
      }), Kt = [], qt = {};
      v.resetGroupBy = "resetGroupBy", v.setGroupBy = "setGroupBy", v.toggleGroupBy = "toggleGroupBy";
      var be = function(t) {
        t.getGroupByToggleProps = [et], t.stateReducers.push(zt), t.visibleColumnsDeps.push(function(u, o) {
          var p = o.instance;
          return [].concat(u, [p.state.groupBy]);
        }), t.visibleColumns.push(_t), t.useInstance.push(Yt), t.prepareRow.push(jt);
      };
      be.pluginName = "useGroupBy";
      var et = function(t, u) {
        var o = u.header;
        return [t, {
          onClick: o.canGroupBy ? function(p) {
            p.persist(), o.toggleGroupBy();
          } : void 0,
          style: {
            cursor: o.canGroupBy ? "pointer" : void 0
          },
          title: "Toggle GroupBy"
        }];
      };
      function zt(r, t, u, o) {
        if (t.type === v.init)
          return c({
            groupBy: []
          }, r);
        if (t.type === v.resetGroupBy)
          return c({}, r, {
            groupBy: o.initialState.groupBy || []
          });
        if (t.type === v.setGroupBy) {
          var p = t.value;
          return c({}, r, {
            groupBy: p
          });
        }
        if (t.type === v.toggleGroupBy) {
          var g = t.columnId, y = t.value, w = typeof y < "u" ? y : !r.groupBy.includes(g);
          return w ? c({}, r, {
            groupBy: [].concat(r.groupBy, [g])
          }) : c({}, r, {
            groupBy: r.groupBy.filter(function(D) {
              return D !== g;
            })
          });
        }
      }
      function _t(r, t) {
        var u = t.instance.state.groupBy, o = u.map(function(g) {
          return r.find(function(y) {
            return y.id === g;
          });
        }).filter(Boolean), p = r.filter(function(g) {
          return !u.includes(g.id);
        });
        return r = [].concat(o, p), r.forEach(function(g) {
          g.isGrouped = u.includes(g.id), g.groupedIndex = u.indexOf(g.id);
        }), r;
      }
      var Xt = {};
      function Yt(r) {
        var t = r.data, u = r.rows, o = r.flatRows, p = r.rowsById, g = r.allColumns, y = r.flatHeaders, w = r.groupByFn, D = w === void 0 ? tt : w, T = r.manualGroupBy, L = r.aggregations, z = L === void 0 ? Xt : L, B = r.plugins, x = r.state.groupBy, _ = r.dispatch, O = r.autoResetGroupBy, Z = O === void 0 ? !0 : O, yn = r.disableGroupBy, vn = r.defaultCanGroupBy, j = r.getHooks;
        Jn(B, ["useColumnOrder", "useFilters"], "useGroupBy");
        var Pn = Rn(r);
        g.forEach(function(wn) {
          var bn = wn.accessor, Un = wn.defaultGroupBy, cr = wn.disableGroupBy;
          wn.canGroupBy = bn ? yr(wn.canGroupBy, cr === !0 ? !1 : void 0, yn === !0 ? !1 : void 0, !0) : yr(wn.canGroupBy, Un, vn, !1), wn.canGroupBy && (wn.toggleGroupBy = function() {
            return r.toggleGroupBy(wn.id);
          }), wn.Aggregated = wn.Aggregated || wn.Cell;
        });
        var Hn = d.useCallback(function(wn, bn) {
          _({
            type: v.toggleGroupBy,
            columnId: wn,
            value: bn
          });
        }, [_]), J = d.useCallback(function(wn) {
          _({
            type: v.setGroupBy,
            value: wn
          });
        }, [_]);
        y.forEach(function(wn) {
          wn.getGroupByToggleProps = hn(j().getGroupByToggleProps, {
            instance: Pn(),
            header: wn
          });
        });
        var Y = d.useMemo(function() {
          if (T || !x.length)
            return [u, o, p, Kt, qt, o, p];
          var wn = x.filter(function(sr) {
            return g.find(function(zr) {
              return zr.id === sr;
            });
          }), bn = function(zr, dr, Mt) {
            var _r = {};
            return g.forEach(function(tr) {
              if (wn.includes(tr.id)) {
                _r[tr.id] = dr[0] ? dr[0].values[tr.id] : null;
                return;
              }
              var bt = typeof tr.aggregate == "function" ? tr.aggregate : z[tr.aggregate] || Me[tr.aggregate];
              if (bt) {
                var se = dr.map(function(te) {
                  return te.values[tr.id];
                }), Co = zr.map(function(te) {
                  var Xr = te.values[tr.id];
                  if (!Mt && tr.aggregateValue) {
                    var Yr = typeof tr.aggregateValue == "function" ? tr.aggregateValue : z[tr.aggregateValue] || Me[tr.aggregateValue];
                    if (!Yr)
                      throw console.info({
                        column: tr
                      }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                    Xr = Yr(Xr, te, tr);
                  }
                  return Xr;
                });
                _r[tr.id] = bt(Co, se);
              } else {
                if (tr.aggregate)
                  throw console.info({
                    column: tr
                  }), new Error("React Table: Invalid column.aggregate option for column listed above");
                _r[tr.id] = null;
              }
            }), _r;
          }, Un = [], cr = {}, ee = [], ke = {}, mn = [], Zn = {}, ur = function sr(zr, dr, Mt) {
            if (dr === void 0 && (dr = 0), dr === wn.length)
              return zr.map(function(se) {
                return c({}, se, {
                  depth: dr
                });
              });
            var _r = wn[dr], tr = D(zr, _r), bt = Object.entries(tr).map(function(se, Co) {
              var te = se[0], Xr = se[1], Yr = _r + ":" + te;
              Yr = Mt ? Mt + ">" + Yr : Yr;
              var Io = sr(Xr, dr + 1, Yr), Lo = dr ? q(Xr, "leafRows") : Xr, Aa = bn(Lo, Xr, dr), Da = {
                id: Yr,
                isGrouped: !0,
                groupByID: _r,
                groupByVal: te,
                values: Aa,
                subRows: Io,
                leafRows: Lo,
                depth: dr,
                index: Co
              };
              return Io.forEach(function(Or) {
                Un.push(Or), cr[Or.id] = Or, Or.isGrouped ? (ee.push(Or), ke[Or.id] = Or) : (mn.push(Or), Zn[Or.id] = Or);
              }), Da;
            });
            return bt;
          }, gr = ur(u);
          return gr.forEach(function(sr) {
            Un.push(sr), cr[sr.id] = sr, sr.isGrouped ? (ee.push(sr), ke[sr.id] = sr) : (mn.push(sr), Zn[sr.id] = sr);
          }), [gr, Un, cr, ee, ke, mn, Zn];
        }, [T, x, u, o, p, g, z, D]), $ = Y[0], cn = Y[1], Ln = Y[2], kn = Y[3], Xn = Y[4], on = Y[5], lr = Y[6], On = Rn(Z);
        zn(function() {
          On() && _({
            type: v.resetGroupBy
          });
        }, [_, T ? null : t]), Object.assign(r, {
          preGroupedRows: u,
          preGroupedFlatRow: o,
          preGroupedRowsById: p,
          groupedRows: $,
          groupedFlatRows: cn,
          groupedRowsById: Ln,
          onlyGroupedFlatRows: kn,
          onlyGroupedRowsById: Xn,
          nonGroupedFlatRows: on,
          nonGroupedRowsById: lr,
          rows: $,
          flatRows: cn,
          rowsById: Ln,
          toggleGroupBy: Hn,
          setGroupBy: J
        });
      }
      function jt(r) {
        r.allCells.forEach(function(t) {
          var u;
          t.isGrouped = t.column.isGrouped && t.column.id === r.groupByID, t.isPlaceholder = !t.isGrouped && t.column.isGrouped, t.isAggregated = !t.isGrouped && !t.isPlaceholder && ((u = r.subRows) == null ? void 0 : u.length);
        });
      }
      function tt(r, t) {
        return r.reduce(function(u, o, p) {
          var g = "" + o.values[t];
          return u[g] = Array.isArray(u[g]) ? u[g] : [], u[g].push(o), u;
        }, {});
      }
      var ot = /([0-9]+)/gm, Ut = function(t, u, o) {
        var p = re(t, u, o), g = p[0], y = p[1];
        for (g = ut(g), y = ut(y), g = g.split(ot).filter(Boolean), y = y.split(ot).filter(Boolean); g.length && y.length; ) {
          var w = g.shift(), D = y.shift(), T = parseInt(w, 10), L = parseInt(D, 10), z = [T, L].sort();
          if (isNaN(z[0])) {
            if (w > D)
              return 1;
            if (D > w)
              return -1;
            continue;
          }
          if (isNaN(z[1]))
            return isNaN(T) ? -1 : 1;
          if (T > L)
            return 1;
          if (L > T)
            return -1;
        }
        return g.length - y.length;
      };
      function Jt(r, t, u) {
        var o = re(r, t, u), p = o[0], g = o[1];
        return p = p.getTime(), g = g.getTime(), Ae(p, g);
      }
      function $t(r, t, u) {
        var o = re(r, t, u), p = o[0], g = o[1];
        return Ae(p, g);
      }
      function Zt(r, t, u) {
        var o = re(r, t, u), p = o[0], g = o[1];
        for (p = p.split("").filter(Boolean), g = g.split("").filter(Boolean); p.length && g.length; ) {
          var y = p.shift(), w = g.shift(), D = y.toLowerCase(), T = w.toLowerCase();
          if (D > T)
            return 1;
          if (T > D)
            return -1;
          if (y > w)
            return 1;
          if (w > y)
            return -1;
        }
        return p.length - g.length;
      }
      function at(r, t, u) {
        var o = re(r, t, u), p = o[0], g = o[1], y = /[^0-9.]/gi;
        return p = Number(String(p).replace(y, "")), g = Number(String(g).replace(y, "")), Ae(p, g);
      }
      function Ae(r, t) {
        return r === t ? 0 : r > t ? 1 : -1;
      }
      function re(r, t, u) {
        return [r.values[u], t.values[u]];
      }
      function ut(r) {
        return typeof r == "number" ? isNaN(r) || r === 1 / 0 || r === -1 / 0 ? "" : String(r) : typeof r == "string" ? r : "";
      }
      var Qt = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        alphanumeric: Ut,
        datetime: Jt,
        basic: $t,
        string: Zt,
        number: at
      });
      v.resetSortBy = "resetSortBy", v.setSortBy = "setSortBy", v.toggleSortBy = "toggleSortBy", v.clearSortBy = "clearSortBy", tn.sortType = "alphanumeric", tn.sortDescFirst = !1;
      var it = function(t) {
        t.getSortByToggleProps = [no], t.stateReducers.push(lt), t.useInstance.push(st);
      };
      it.pluginName = "useSortBy";
      var no = function(t, u) {
        var o = u.instance, p = u.column, g = o.isMultiSortEvent, y = g === void 0 ? function(w) {
          return w.shiftKey;
        } : g;
        return [t, {
          onClick: p.canSort ? function(w) {
            w.persist(), p.toggleSortBy(void 0, !o.disableMultiSort && y(w));
          } : void 0,
          style: {
            cursor: p.canSort ? "pointer" : void 0
          },
          title: p.canSort ? "Toggle SortBy" : void 0
        }];
      };
      function lt(r, t, u, o) {
        if (t.type === v.init)
          return c({
            sortBy: []
          }, r);
        if (t.type === v.resetSortBy)
          return c({}, r, {
            sortBy: o.initialState.sortBy || []
          });
        if (t.type === v.clearSortBy) {
          var p = r.sortBy, g = p.filter(function($) {
            return $.id !== t.columnId;
          });
          return c({}, r, {
            sortBy: g
          });
        }
        if (t.type === v.setSortBy) {
          var y = t.sortBy;
          return c({}, r, {
            sortBy: y
          });
        }
        if (t.type === v.toggleSortBy) {
          var w = t.columnId, D = t.desc, T = t.multi, L = o.allColumns, z = o.disableMultiSort, B = o.disableSortRemove, x = o.disableMultiRemove, _ = o.maxMultiSortColCount, O = _ === void 0 ? Number.MAX_SAFE_INTEGER : _, Z = r.sortBy, yn = L.find(function($) {
            return $.id === w;
          }), vn = yn.sortDescFirst, j = Z.find(function($) {
            return $.id === w;
          }), Pn = Z.findIndex(function($) {
            return $.id === w;
          }), Hn = typeof D < "u" && D !== null, J = [], Y;
          return !z && T ? j ? Y = "toggle" : Y = "add" : Pn !== Z.length - 1 || Z.length !== 1 ? Y = "replace" : j ? Y = "toggle" : Y = "replace", Y === "toggle" && // Must be toggling
          !B && // If disableSortRemove, disable in general
          !Hn && // Must not be setting desc
          (!T || !x) && // If multi, don't allow if disableMultiRemove
          (j && // Finally, detect if it should indeed be removed
          j.desc && !vn || !j.desc && vn) && (Y = "remove"), Y === "replace" ? J = [{
            id: w,
            desc: Hn ? D : vn
          }] : Y === "add" ? (J = [].concat(Z, [{
            id: w,
            desc: Hn ? D : vn
          }]), J.splice(0, J.length - O)) : Y === "toggle" ? J = Z.map(function($) {
            return $.id === w ? c({}, $, {
              desc: Hn ? D : !j.desc
            }) : $;
          }) : Y === "remove" && (J = Z.filter(function($) {
            return $.id !== w;
          })), c({}, r, {
            sortBy: J
          });
        }
      }
      function st(r) {
        var t = r.data, u = r.rows, o = r.flatRows, p = r.allColumns, g = r.orderByFn, y = g === void 0 ? De : g, w = r.sortTypes, D = r.manualSortBy, T = r.defaultCanSort, L = r.disableSortBy, z = r.flatHeaders, B = r.state.sortBy, x = r.dispatch, _ = r.plugins, O = r.getHooks, Z = r.autoResetSortBy, yn = Z === void 0 ? !0 : Z;
        Jn(_, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var vn = d.useCallback(function(cn) {
          x({
            type: v.setSortBy,
            sortBy: cn
          });
        }, [x]), j = d.useCallback(function(cn, Ln, kn) {
          x({
            type: v.toggleSortBy,
            columnId: cn,
            desc: Ln,
            multi: kn
          });
        }, [x]), Pn = Rn(r);
        z.forEach(function(cn) {
          var Ln = cn.accessor, kn = cn.canSort, Xn = cn.disableSortBy, on = cn.id, lr = Ln ? yr(Xn === !0 ? !1 : void 0, L === !0 ? !1 : void 0, !0) : yr(T, kn, !1);
          cn.canSort = lr, cn.canSort && (cn.toggleSortBy = function(wn, bn) {
            return j(cn.id, wn, bn);
          }, cn.clearSortBy = function() {
            x({
              type: v.clearSortBy,
              columnId: cn.id
            });
          }), cn.getSortByToggleProps = hn(O().getSortByToggleProps, {
            instance: Pn(),
            column: cn
          });
          var On = B.find(function(wn) {
            return wn.id === on;
          });
          cn.isSorted = !!On, cn.sortedIndex = B.findIndex(function(wn) {
            return wn.id === on;
          }), cn.isSortedDesc = cn.isSorted ? On.desc : void 0;
        });
        var Hn = d.useMemo(function() {
          if (D || !B.length)
            return [u, o];
          var cn = [], Ln = B.filter(function(Xn) {
            return p.find(function(on) {
              return on.id === Xn.id;
            });
          }), kn = function Xn(on) {
            var lr = y(
              on,
              Ln.map(function(On) {
                var wn = p.find(function(cr) {
                  return cr.id === On.id;
                });
                if (!wn)
                  throw new Error("React-Table: Could not find a column with id: " + On.id + " while sorting");
                var bn = wn.sortType, Un = Br(bn) || (w || {})[bn] || Qt[bn];
                if (!Un)
                  throw new Error("React-Table: Could not find a valid sortType of '" + bn + "' for column '" + On.id + "'.");
                return function(cr, ee) {
                  return Un(cr, ee, On.id, On.desc);
                };
              }),
              // Map the directions
              Ln.map(function(On) {
                var wn = p.find(function(bn) {
                  return bn.id === On.id;
                });
                return wn && wn.sortInverted ? On.desc : !On.desc;
              })
            );
            return lr.forEach(function(On) {
              cn.push(On), !(!On.subRows || On.subRows.length === 0) && (On.subRows = Xn(On.subRows));
            }), lr;
          };
          return [kn(u), cn];
        }, [D, B, u, o, p, y, w]), J = Hn[0], Y = Hn[1], $ = Rn(yn);
        zn(function() {
          $() && x({
            type: v.resetSortBy
          });
        }, [D ? null : t]), Object.assign(r, {
          preSortedRows: u,
          preSortedFlatRows: o,
          sortedRows: J,
          sortedFlatRows: Y,
          rows: J,
          flatRows: Y,
          setSortBy: vn,
          toggleSortBy: j
        });
      }
      function De(r, t, u) {
        return [].concat(r).sort(function(o, p) {
          for (var g = 0; g < t.length; g += 1) {
            var y = t[g], w = u[g] === !1 || u[g] === "desc", D = y(o, p);
            if (D !== 0)
              return w ? -D : D;
          }
          return u[0] ? o.index - p.index : p.index - o.index;
        });
      }
      var ro = "usePagination";
      v.resetPage = "resetPage", v.gotoPage = "gotoPage", v.setPageSize = "setPageSize";
      var ct = function(t) {
        t.stateReducers.push(eo), t.useInstance.push(yt);
      };
      ct.pluginName = ro;
      function eo(r, t, u, o) {
        if (t.type === v.init)
          return c({
            pageSize: 10,
            pageIndex: 0
          }, r);
        if (t.type === v.resetPage)
          return c({}, r, {
            pageIndex: o.initialState.pageIndex || 0
          });
        if (t.type === v.gotoPage) {
          var p = o.pageCount, g = o.page, y = Wn(t.pageIndex, r.pageIndex), w = !1;
          return y > r.pageIndex ? w = p === -1 ? g.length >= r.pageSize : y < p : y < r.pageIndex && (w = y > -1), w ? c({}, r, {
            pageIndex: y
          }) : r;
        }
        if (t.type === v.setPageSize) {
          var D = t.pageSize, T = r.pageSize * r.pageIndex, L = Math.floor(T / D);
          return c({}, r, {
            pageIndex: L,
            pageSize: D
          });
        }
      }
      function yt(r) {
        var t = r.rows, u = r.autoResetPage, o = u === void 0 ? !0 : u, p = r.manualExpandedKey, g = p === void 0 ? "expanded" : p, y = r.plugins, w = r.pageCount, D = r.paginateExpandedRows, T = D === void 0 ? !0 : D, L = r.expandSubRows, z = L === void 0 ? !0 : L, B = r.state, x = B.pageSize, _ = B.pageIndex, O = B.expanded, Z = B.globalFilter, yn = B.filters, vn = B.groupBy, j = B.sortBy, Pn = r.dispatch, Hn = r.data, J = r.manualPagination;
        Jn(y, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var Y = Rn(o);
        zn(function() {
          Y() && Pn({
            type: v.resetPage
          });
        }, [Pn, J ? null : Hn, Z, yn, vn, j]);
        var $ = J ? w : Math.ceil(t.length / x), cn = d.useMemo(function() {
          return $ > 0 ? [].concat(new Array($)).fill(null).map(function(bn, Un) {
            return Un;
          }) : [];
        }, [$]), Ln = d.useMemo(function() {
          var bn;
          if (J)
            bn = t;
          else {
            var Un = x * _, cr = Un + x;
            bn = t.slice(Un, cr);
          }
          return T ? bn : Cn(bn, {
            manualExpandedKey: g,
            expanded: O,
            expandSubRows: z
          });
        }, [z, O, g, J, _, x, T, t]), kn = _ > 0, Xn = $ === -1 ? Ln.length >= x : _ < $ - 1, on = d.useCallback(function(bn) {
          Pn({
            type: v.gotoPage,
            pageIndex: bn
          });
        }, [Pn]), lr = d.useCallback(function() {
          return on(function(bn) {
            return bn - 1;
          });
        }, [on]), On = d.useCallback(function() {
          return on(function(bn) {
            return bn + 1;
          });
        }, [on]), wn = d.useCallback(function(bn) {
          Pn({
            type: v.setPageSize,
            pageSize: bn
          });
        }, [Pn]);
        Object.assign(r, {
          pageOptions: cn,
          pageCount: $,
          page: Ln,
          canPreviousPage: kn,
          canNextPage: Xn,
          gotoPage: on,
          previousPage: lr,
          nextPage: On,
          setPageSize: wn
        });
      }
      v.resetPivot = "resetPivot", v.togglePivot = "togglePivot";
      var dt = function(t) {
        t.getPivotToggleProps = [to], t.stateReducers.push(pt), t.useInstanceAfterData.push(oo), t.allColumns.push(ao), t.accessValue.push(uo), t.materializedColumns.push(io), t.materializedColumnsDeps.push(Re), t.visibleColumns.push(ft), t.visibleColumnsDeps.push(le), t.useInstance.push(Ne), t.prepareRow.push(Te);
      };
      dt.pluginName = "usePivotColumns";
      var Ct = [], to = function(t, u) {
        var o = u.header;
        return [t, {
          onClick: o.canPivot ? function(p) {
            p.persist(), o.togglePivot();
          } : void 0,
          style: {
            cursor: o.canPivot ? "pointer" : void 0
          },
          title: "Toggle Pivot"
        }];
      };
      function pt(r, t, u, o) {
        if (t.type === v.init)
          return c({
            pivotColumns: Ct
          }, r);
        if (t.type === v.resetPivot)
          return c({}, r, {
            pivotColumns: o.initialState.pivotColumns || Ct
          });
        if (t.type === v.togglePivot) {
          var p = t.columnId, g = t.value, y = typeof g < "u" ? g : !r.pivotColumns.includes(p);
          return y ? c({}, r, {
            pivotColumns: [].concat(r.pivotColumns, [p])
          }) : c({}, r, {
            pivotColumns: r.pivotColumns.filter(function(w) {
              return w !== p;
            })
          });
        }
      }
      function oo(r) {
        r.allColumns.forEach(function(t) {
          t.isPivotSource = r.state.pivotColumns.includes(t.id);
        });
      }
      function ao(r, t) {
        var u = t.instance;
        return r.forEach(function(o) {
          o.isPivotSource = u.state.pivotColumns.includes(o.id), o.uniqueValues = /* @__PURE__ */ new Set();
        }), r;
      }
      function uo(r, t) {
        var u = t.column;
        return u.uniqueValues && typeof r < "u" && u.uniqueValues.add(r), r;
      }
      function io(r, t) {
        var u = t.instance, o = u.allColumns, p = u.state;
        if (!p.pivotColumns.length || !p.groupBy || !p.groupBy.length)
          return r;
        var g = p.pivotColumns.map(function(T) {
          return o.find(function(L) {
            return L.id === T;
          });
        }).filter(Boolean), y = o.filter(function(T) {
          return !T.isPivotSource && !p.groupBy.includes(T.id) && !p.pivotColumns.includes(T.id);
        }), w = function T(L, z, B) {
          L === void 0 && (L = 0), B === void 0 && (B = []);
          var x = g[L];
          if (!x)
            return y.map(function(O) {
              return c({}, O, {
                canPivot: !1,
                isPivoted: !0,
                parent: z,
                depth: L,
                id: "" + (z ? z.id + "." + O.id : O.id),
                accessor: function(yn, vn, j) {
                  if (B.every(function(Pn) {
                    return Pn(j);
                  }))
                    return j.values[O.id];
                }
              });
            });
          var _ = Array.from(x.uniqueValues).sort();
          return _.map(function(O) {
            var Z = c({}, x, {
              Header: x.PivotHeader || typeof x.header == "string" ? x.Header + ": " + O : O,
              isPivotGroup: !0,
              parent: z,
              depth: L,
              id: z ? z.id + "." + x.id + "." + O : x.id + "." + O,
              pivotValue: O
            });
            return Z.columns = T(L + 1, Z, [].concat(B, [function(yn) {
              return yn.values[x.id] === O;
            }])), Z;
          });
        }, D = Tr(w());
        return [].concat(r, D);
      }
      function Re(r, t) {
        var u = t.instance.state, o = u.pivotColumns, p = u.groupBy;
        return [].concat(r, [o, p]);
      }
      function ft(r, t) {
        var u = t.instance.state;
        return r = r.filter(function(o) {
          return !o.isPivotSource;
        }), u.pivotColumns.length && u.groupBy && u.groupBy.length && (r = r.filter(function(o) {
          return o.isGrouped || o.isPivoted;
        })), r;
      }
      function le(r, t) {
        var u = t.instance;
        return [].concat(r, [u.state.pivotColumns, u.state.groupBy]);
      }
      function Ne(r) {
        var t = r.columns, u = r.allColumns, o = r.flatHeaders, p = r.getHooks, g = r.plugins, y = r.dispatch, w = r.autoResetPivot, D = w === void 0 ? !0 : w, T = r.manaulPivot, L = r.disablePivot, z = r.defaultCanPivot;
        Jn(g, ["useGroupBy"], "usePivotColumns");
        var B = Rn(r);
        u.forEach(function(O) {
          var Z = O.accessor, yn = O.defaultPivot, vn = O.disablePivot;
          O.canPivot = Z ? yr(O.canPivot, vn === !0 ? !1 : void 0, L === !0 ? !1 : void 0, !0) : yr(O.canPivot, yn, z, !1), O.canPivot && (O.togglePivot = function() {
            return r.togglePivot(O.id);
          }), O.Aggregated = O.Aggregated || O.Cell;
        });
        var x = function(Z, yn) {
          y({
            type: v.togglePivot,
            columnId: Z,
            value: yn
          });
        };
        o.forEach(function(O) {
          O.getPivotToggleProps = hn(p().getPivotToggleProps, {
            instance: B(),
            header: O
          });
        });
        var _ = Rn(D);
        zn(function() {
          _() && y({
            type: v.resetPivot
          });
        }, [y, T ? null : t]), Object.assign(r, {
          togglePivot: x
        });
      }
      function Te(r) {
        r.allCells.forEach(function(t) {
          t.isPivoted = t.column.isPivoted;
        });
      }
      var gt = "useRowSelect";
      v.resetSelectedRows = "resetSelectedRows", v.toggleAllRowsSelected = "toggleAllRowsSelected", v.toggleRowSelected = "toggleRowSelected", v.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var Pe = function(t) {
        t.getToggleRowSelectedProps = [lo], t.getToggleAllRowsSelectedProps = [Ie], t.getToggleAllPageRowsSelectedProps = [so], t.stateReducers.push(co), t.useInstance.push(yo), t.prepareRow.push(mt);
      };
      Pe.pluginName = gt;
      var lo = function(t, u) {
        var o = u.instance, p = u.row, g = o.manualRowSelectedKey, y = g === void 0 ? "isSelected" : g, w = !1;
        return p.original && p.original[y] ? w = !0 : w = p.isSelected, [t, {
          onChange: function(T) {
            p.toggleRowSelected(T.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: w,
          title: "Toggle Row Selected",
          indeterminate: p.isSomeSelected
        }];
      }, Ie = function(t, u) {
        var o = u.instance;
        return [t, {
          onChange: function(g) {
            o.toggleAllRowsSelected(g.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: o.isAllRowsSelected,
          title: "Toggle All Rows Selected",
          indeterminate: !!(!o.isAllRowsSelected && Object.keys(o.state.selectedRowIds).length)
        }];
      }, so = function(t, u) {
        var o = u.instance;
        return [t, {
          onChange: function(g) {
            o.toggleAllPageRowsSelected(g.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: o.isAllPageRowsSelected,
          title: "Toggle All Current Page Rows Selected",
          indeterminate: !!(!o.isAllPageRowsSelected && o.page.some(function(p) {
            var g = p.id;
            return o.state.selectedRowIds[g];
          }))
        }];
      };
      function co(r, t, u, o) {
        if (t.type === v.init)
          return c({
            selectedRowIds: {}
          }, r);
        if (t.type === v.resetSelectedRows)
          return c({}, r, {
            selectedRowIds: o.initialState.selectedRowIds || {}
          });
        if (t.type === v.toggleAllRowsSelected) {
          var p = t.value, g = o.isAllRowsSelected, y = o.rowsById, w = o.nonGroupedRowsById, D = w === void 0 ? y : w, T = typeof p < "u" ? p : !g, L = Object.assign({}, r.selectedRowIds);
          return T ? Object.keys(D).forEach(function(On) {
            L[On] = !0;
          }) : Object.keys(D).forEach(function(On) {
            delete L[On];
          }), c({}, r, {
            selectedRowIds: L
          });
        }
        if (t.type === v.toggleRowSelected) {
          var z = t.id, B = t.value, x = o.rowsById, _ = o.selectSubRows, O = _ === void 0 ? !0 : _, Z = o.getSubRows, yn = r.selectedRowIds[z], vn = typeof B < "u" ? B : !yn;
          if (yn === vn)
            return r;
          var j = c({}, r.selectedRowIds), Pn = function On(wn) {
            var bn = x[wn];
            if (bn && (bn.isGrouped || (vn ? j[wn] = !0 : delete j[wn]), O && Z(bn)))
              return Z(bn).forEach(function(Un) {
                return On(Un.id);
              });
          };
          return Pn(z), c({}, r, {
            selectedRowIds: j
          });
        }
        if (t.type === v.toggleAllPageRowsSelected) {
          var Hn = t.value, J = o.page, Y = o.rowsById, $ = o.selectSubRows, cn = $ === void 0 ? !0 : $, Ln = o.isAllPageRowsSelected, kn = o.getSubRows, Xn = typeof Hn < "u" ? Hn : !Ln, on = c({}, r.selectedRowIds), lr = function On(wn) {
            var bn = Y[wn];
            if (bn.isGrouped || (Xn ? on[wn] = !0 : delete on[wn]), cn && kn(bn))
              return kn(bn).forEach(function(Un) {
                return On(Un.id);
              });
          };
          return J.forEach(function(On) {
            return lr(On.id);
          }), c({}, r, {
            selectedRowIds: on
          });
        }
        return r;
      }
      function yo(r) {
        var t = r.data, u = r.rows, o = r.getHooks, p = r.plugins, g = r.rowsById, y = r.nonGroupedRowsById, w = y === void 0 ? g : y, D = r.autoResetSelectedRows, T = D === void 0 ? !0 : D, L = r.state.selectedRowIds, z = r.selectSubRows, B = z === void 0 ? !0 : z, x = r.dispatch, _ = r.page, O = r.getSubRows;
        Jn(p, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var Z = d.useMemo(function() {
          var Ln = [];
          return u.forEach(function(kn) {
            var Xn = B ? ht(kn, L, O) : !!L[kn.id];
            kn.isSelected = !!Xn, kn.isSomeSelected = Xn === null, Xn && Ln.push(kn);
          }), Ln;
        }, [u, B, L, O]), yn = !!(Object.keys(w).length && Object.keys(L).length), vn = yn;
        yn && Object.keys(w).some(function(Ln) {
          return !L[Ln];
        }) && (yn = !1), yn || _ && _.length && _.some(function(Ln) {
          var kn = Ln.id;
          return !L[kn];
        }) && (vn = !1);
        var j = Rn(T);
        zn(function() {
          j() && x({
            type: v.resetSelectedRows
          });
        }, [x, t]);
        var Pn = d.useCallback(function(Ln) {
          return x({
            type: v.toggleAllRowsSelected,
            value: Ln
          });
        }, [x]), Hn = d.useCallback(function(Ln) {
          return x({
            type: v.toggleAllPageRowsSelected,
            value: Ln
          });
        }, [x]), J = d.useCallback(function(Ln, kn) {
          return x({
            type: v.toggleRowSelected,
            id: Ln,
            value: kn
          });
        }, [x]), Y = Rn(r), $ = hn(o().getToggleAllRowsSelectedProps, {
          instance: Y()
        }), cn = hn(o().getToggleAllPageRowsSelectedProps, {
          instance: Y()
        });
        Object.assign(r, {
          selectedFlatRows: Z,
          isAllRowsSelected: yn,
          isAllPageRowsSelected: vn,
          toggleRowSelected: J,
          toggleAllRowsSelected: Pn,
          getToggleAllRowsSelectedProps: $,
          getToggleAllPageRowsSelectedProps: cn,
          toggleAllPageRowsSelected: Hn
        });
      }
      function mt(r, t) {
        var u = t.instance;
        r.toggleRowSelected = function(o) {
          return u.toggleRowSelected(r.id, o);
        }, r.getToggleRowSelectedProps = hn(u.getHooks().getToggleRowSelectedProps, {
          instance: u,
          row: r
        });
      }
      function ht(r, t, u) {
        if (t[r.id])
          return !0;
        var o = u(r);
        if (o && o.length) {
          var p = !0, g = !1;
          return o.forEach(function(y) {
            g && !p || (ht(y, t, u) ? g = !0 : p = !1);
          }), p ? !0 : g ? null : !1;
        }
        return !1;
      }
      var vt = function(t) {
        return {};
      }, St = function(t) {
        return {};
      };
      v.setRowState = "setRowState", v.setCellState = "setCellState", v.resetRowState = "resetRowState";
      var wt = function(t) {
        t.stateReducers.push(Le), t.useInstance.push(n), t.prepareRow.push(a);
      };
      wt.pluginName = "useRowState";
      function Le(r, t, u, o) {
        var p = o.initialRowStateAccessor, g = p === void 0 ? vt : p, y = o.initialCellStateAccessor, w = y === void 0 ? St : y, D = o.rowsById;
        if (t.type === v.init)
          return c({
            rowState: {}
          }, r);
        if (t.type === v.resetRowState)
          return c({}, r, {
            rowState: o.initialState.rowState || {}
          });
        if (t.type === v.setRowState) {
          var T, L = t.rowId, z = t.value, B = typeof r.rowState[L] < "u" ? r.rowState[L] : g(D[L]);
          return c({}, r, {
            rowState: c({}, r.rowState, (T = {}, T[L] = Wn(z, B), T))
          });
        }
        if (t.type === v.setCellState) {
          var x, _, O, Z, yn, vn = t.rowId, j = t.columnId, Pn = t.value, Hn = typeof r.rowState[vn] < "u" ? r.rowState[vn] : g(D[vn]), J = typeof (Hn == null || (x = Hn.cellState) == null ? void 0 : x[j]) < "u" ? Hn.cellState[j] : w((_ = D[vn]) == null || (O = _.cells) == null ? void 0 : O.find(function(Y) {
            return Y.column.id === j;
          }));
          return c({}, r, {
            rowState: c({}, r.rowState, (yn = {}, yn[vn] = c({}, Hn, {
              cellState: c({}, Hn.cellState || {}, (Z = {}, Z[j] = Wn(Pn, J), Z))
            }), yn))
          });
        }
      }
      function n(r) {
        var t = r.autoResetRowState, u = t === void 0 ? !0 : t, o = r.data, p = r.dispatch, g = d.useCallback(function(D, T) {
          return p({
            type: v.setRowState,
            rowId: D,
            value: T
          });
        }, [p]), y = d.useCallback(function(D, T, L) {
          return p({
            type: v.setCellState,
            rowId: D,
            columnId: T,
            value: L
          });
        }, [p]), w = Rn(u);
        zn(function() {
          w() && p({
            type: v.resetRowState
          });
        }, [o]), Object.assign(r, {
          setRowState: g,
          setCellState: y
        });
      }
      function a(r, t) {
        var u = t.instance, o = u.initialRowStateAccessor, p = o === void 0 ? vt : o, g = u.initialCellStateAccessor, y = g === void 0 ? St : g, w = u.state.rowState;
        r && (r.state = typeof w[r.id] < "u" ? w[r.id] : p(r), r.setState = function(D) {
          return u.setRowState(r.id, D);
        }, r.cells.forEach(function(D) {
          r.state.cellState || (r.state.cellState = {}), D.state = typeof r.state.cellState[D.column.id] < "u" ? r.state.cellState[D.column.id] : y(D), D.setState = function(T) {
            return u.setCellState(r.id, D.column.id, T);
          };
        }));
      }
      v.resetColumnOrder = "resetColumnOrder", v.setColumnOrder = "setColumnOrder";
      var i = function(t) {
        t.stateReducers.push(s), t.visibleColumnsDeps.push(function(u, o) {
          var p = o.instance;
          return [].concat(u, [p.state.columnOrder]);
        }), t.visibleColumns.push(m), t.useInstance.push(f);
      };
      i.pluginName = "useColumnOrder";
      function s(r, t, u, o) {
        if (t.type === v.init)
          return c({
            columnOrder: []
          }, r);
        if (t.type === v.resetColumnOrder)
          return c({}, r, {
            columnOrder: o.initialState.columnOrder || []
          });
        if (t.type === v.setColumnOrder)
          return c({}, r, {
            columnOrder: Wn(t.columnOrder, r.columnOrder)
          });
      }
      function m(r, t) {
        var u = t.instance.state.columnOrder;
        if (!u || !u.length)
          return r;
        for (var o = [].concat(u), p = [].concat(r), g = [], y = function() {
          var D = o.shift(), T = p.findIndex(function(L) {
            return L.id === D;
          });
          T > -1 && g.push(p.splice(T, 1)[0]);
        }; p.length && o.length; )
          y();
        return [].concat(g, p);
      }
      function f(r) {
        var t = r.dispatch;
        r.setColumnOrder = d.useCallback(function(u) {
          return t({
            type: v.setColumnOrder,
            columnOrder: u
          });
        }, [t]);
      }
      tn.canResize = !0, v.columnStartResizing = "columnStartResizing", v.columnResizing = "columnResizing", v.columnDoneResizing = "columnDoneResizing", v.resetResize = "resetResize";
      var S = function(t) {
        t.getResizerProps = [N], t.getHeaderProps.push({
          style: {
            position: "relative"
          }
        }), t.stateReducers.push(P), t.useInstance.push(V), t.useInstanceBeforeDimensions.push(I);
      }, N = function(t, u) {
        var o = u.instance, p = u.header, g = o.dispatch, y = function(D, T) {
          var L = !1;
          if (D.type === "touchstart") {
            if (D.touches && D.touches.length > 1)
              return;
            L = !0;
          }
          var z = F(T), B = z.map(function(J) {
            return [J.id, J.totalWidth];
          }), x = L ? Math.round(D.touches[0].clientX) : D.clientX, _, O, Z = function() {
            window.cancelAnimationFrame(_), _ = null, g({
              type: v.columnDoneResizing
            });
          }, yn = function() {
            window.cancelAnimationFrame(_), _ = null, g({
              type: v.columnResizing,
              clientX: O
            });
          }, vn = function(Y) {
            O = Y, _ || (_ = window.requestAnimationFrame(yn));
          }, j = {
            mouse: {
              moveEvent: "mousemove",
              moveHandler: function(Y) {
                return vn(Y.clientX);
              },
              upEvent: "mouseup",
              upHandler: function(Y) {
                document.removeEventListener("mousemove", j.mouse.moveHandler), document.removeEventListener("mouseup", j.mouse.upHandler), Z();
              }
            },
            touch: {
              moveEvent: "touchmove",
              moveHandler: function(Y) {
                return Y.cancelable && (Y.preventDefault(), Y.stopPropagation()), vn(Y.touches[0].clientX), !1;
              },
              upEvent: "touchend",
              upHandler: function(Y) {
                document.removeEventListener(j.touch.moveEvent, j.touch.moveHandler), document.removeEventListener(j.touch.upEvent, j.touch.moveHandler), Z();
              }
            }
          }, Pn = L ? j.touch : j.mouse, Hn = Rr() ? {
            passive: !1
          } : !1;
          document.addEventListener(Pn.moveEvent, Pn.moveHandler, Hn), document.addEventListener(Pn.upEvent, Pn.upHandler, Hn), g({
            type: v.columnStartResizing,
            columnId: T.id,
            columnWidth: T.totalWidth,
            headerIdWidths: B,
            clientX: x
          });
        };
        return [t, {
          onMouseDown: function(D) {
            return D.persist() || y(D, p);
          },
          onTouchStart: function(D) {
            return D.persist() || y(D, p);
          },
          style: {
            cursor: "col-resize"
          },
          draggable: !1,
          role: "separator"
        }];
      };
      S.pluginName = "useResizeColumns";
      function P(r, t) {
        if (t.type === v.init)
          return c({
            columnResizing: {
              columnWidths: {}
            }
          }, r);
        if (t.type === v.resetResize)
          return c({}, r, {
            columnResizing: {
              columnWidths: {}
            }
          });
        if (t.type === v.columnStartResizing) {
          var u = t.clientX, o = t.columnId, p = t.columnWidth, g = t.headerIdWidths;
          return c({}, r, {
            columnResizing: c({}, r.columnResizing, {
              startX: u,
              headerIdWidths: g,
              columnWidth: p,
              isResizingColumn: o
            })
          });
        }
        if (t.type === v.columnResizing) {
          var y = t.clientX, w = r.columnResizing, D = w.startX, T = w.columnWidth, L = w.headerIdWidths, z = L === void 0 ? [] : L, B = y - D, x = B / T, _ = {};
          return z.forEach(function(O) {
            var Z = O[0], yn = O[1];
            _[Z] = Math.max(yn + yn * x, 0);
          }), c({}, r, {
            columnResizing: c({}, r.columnResizing, {
              columnWidths: c({}, r.columnResizing.columnWidths, {}, _)
            })
          });
        }
        if (t.type === v.columnDoneResizing)
          return c({}, r, {
            columnResizing: c({}, r.columnResizing, {
              startX: null,
              isResizingColumn: null
            })
          });
      }
      var I = function(t) {
        var u = t.flatHeaders, o = t.disableResizing, p = t.getHooks, g = t.state.columnResizing, y = Rn(t);
        u.forEach(function(w) {
          var D = yr(w.disableResizing === !0 ? !1 : void 0, o === !0 ? !1 : void 0, !0);
          w.canResize = D, w.width = g.columnWidths[w.id] || w.originalWidth || w.width, w.isResizing = g.isResizingColumn === w.id, D && (w.getResizerProps = hn(p().getResizerProps, {
            instance: y(),
            header: w
          }));
        });
      };
      function V(r) {
        var t = r.plugins, u = r.dispatch, o = r.autoResetResize, p = o === void 0 ? !0 : o, g = r.columns;
        Jn(t, ["useAbsoluteLayout"], "useResizeColumns");
        var y = Rn(p);
        zn(function() {
          y() && u({
            type: v.resetResize
          });
        }, [g]);
        var w = d.useCallback(function() {
          return u({
            type: v.resetResize
          });
        }, [u]);
        Object.assign(r, {
          resetResizing: w
        });
      }
      function F(r) {
        var t = [], u = function o(p) {
          p.columns && p.columns.length && p.columns.map(o), t.push(p);
        };
        return u(r), t;
      }
      var W = {
        position: "absolute",
        top: 0
      }, k = function(t) {
        t.getTableBodyProps.push(H), t.getRowProps.push(H), t.getHeaderGroupProps.push(H), t.getFooterGroupProps.push(H), t.getHeaderProps.push(function(u, o) {
          var p = o.column;
          return [u, {
            style: c({}, W, {
              left: p.totalLeft + "px",
              width: p.totalWidth + "px"
            })
          }];
        }), t.getCellProps.push(function(u, o) {
          var p = o.cell;
          return [u, {
            style: c({}, W, {
              left: p.column.totalLeft + "px",
              width: p.column.totalWidth + "px"
            })
          }];
        }), t.getFooterProps.push(function(u, o) {
          var p = o.column;
          return [u, {
            style: c({}, W, {
              left: p.totalLeft + "px",
              width: p.totalWidth + "px"
            })
          }];
        });
      };
      k.pluginName = "useAbsoluteLayout";
      var H = function(t, u) {
        var o = u.instance;
        return [t, {
          style: {
            position: "relative",
            width: o.totalColumnsWidth + "px"
          }
        }];
      }, X = {
        display: "inline-block",
        boxSizing: "border-box"
      }, U = function(t, u) {
        var o = u.instance;
        return [t, {
          style: {
            display: "flex",
            width: o.totalColumnsWidth + "px"
          }
        }];
      }, ln = function(t) {
        t.getRowProps.push(U), t.getHeaderGroupProps.push(U), t.getFooterGroupProps.push(U), t.getHeaderProps.push(function(u, o) {
          var p = o.column;
          return [u, {
            style: c({}, X, {
              width: p.totalWidth + "px"
            })
          }];
        }), t.getCellProps.push(function(u, o) {
          var p = o.cell;
          return [u, {
            style: c({}, X, {
              width: p.column.totalWidth + "px"
            })
          }];
        }), t.getFooterProps.push(function(u, o) {
          var p = o.column;
          return [u, {
            style: c({}, X, {
              width: p.totalWidth + "px"
            })
          }];
        });
      };
      ln.pluginName = "useBlockLayout";
      function In(r) {
        r.getTableProps.push(sn), r.getRowProps.push(K), r.getHeaderGroupProps.push(K), r.getFooterGroupProps.push(K), r.getHeaderProps.push(Tn), r.getCellProps.push(nn), r.getFooterProps.push(Mn);
      }
      In.pluginName = "useFlexLayout";
      var sn = function(t, u) {
        var o = u.instance;
        return [t, {
          style: {
            minWidth: o.totalColumnsMinWidth + "px"
          }
        }];
      }, K = function(t, u) {
        var o = u.instance;
        return [t, {
          style: {
            display: "flex",
            flex: "1 0 auto",
            minWidth: o.totalColumnsMinWidth + "px"
          }
        }];
      }, Tn = function(t, u) {
        var o = u.column;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: o.totalFlexWidth ? o.totalFlexWidth + " 0 auto" : void 0,
            minWidth: o.totalMinWidth + "px",
            width: o.totalWidth + "px"
          }
        }];
      }, nn = function(t, u) {
        var o = u.cell;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: o.column.totalFlexWidth + " 0 auto",
            minWidth: o.column.totalMinWidth + "px",
            width: o.column.totalWidth + "px"
          }
        }];
      }, Mn = function(t, u) {
        var o = u.column;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: o.totalFlexWidth ? o.totalFlexWidth + " 0 auto" : void 0,
            minWidth: o.totalMinWidth + "px",
            width: o.totalWidth + "px"
          }
        }];
      };
      v.columnStartResizing = "columnStartResizing", v.columnResizing = "columnResizing", v.columnDoneResizing = "columnDoneResizing", v.resetResize = "resetResize";
      function xn(r) {
        r.stateReducers.push(Nn), r.getTableProps.push(gn), r.getHeaderProps.push(Sn), r.getRowProps.push(Kn);
      }
      xn.pluginName = "useGridLayout";
      var gn = function(t, u) {
        var o = u.instance, p = o.visibleColumns.map(function(g) {
          var y;
          return o.state.gridLayout.columnWidths[g.id] ? o.state.gridLayout.columnWidths[g.id] + "px" : (y = o.state.columnResizing) != null && y.isResizingColumn ? o.state.gridLayout.startWidths[g.id] + "px" : typeof g.width == "number" ? g.width + "px" : g.width;
        });
        return [t, {
          style: {
            display: "grid",
            gridTemplateColumns: p.join(" ")
          }
        }];
      }, Sn = function(t, u) {
        var o = u.column;
        return [t, {
          id: "header-cell-" + o.id,
          style: {
            position: "sticky",
            //enables a scroll wrapper to be placed around the table and have sticky headers
            gridColumn: "span " + o.totalVisibleHeaderCount
          }
        }];
      }, Kn = function(t, u) {
        var o = u.row;
        return o.isExpanded ? [t, {
          style: {
            gridColumn: "1 / " + (o.cells.length + 1)
          }
        }] : [t, {}];
      };
      function Nn(r, t, u, o) {
        if (t.type === v.init)
          return c({
            gridLayout: {
              columnWidths: {}
            }
          }, r);
        if (t.type === v.resetResize)
          return c({}, r, {
            gridLayout: {
              columnWidths: {}
            }
          });
        if (t.type === v.columnStartResizing) {
          var p = t.columnId, g = t.headerIdWidths, y = Vn(p);
          if (y !== void 0) {
            var w = o.visibleColumns.reduce(function(J, Y) {
              var $;
              return c({}, J, ($ = {}, $[Y.id] = Vn(Y.id), $));
            }, {}), D = o.visibleColumns.reduce(function(J, Y) {
              var $;
              return c({}, J, ($ = {}, $[Y.id] = Y.minWidth, $));
            }, {}), T = o.visibleColumns.reduce(function(J, Y) {
              var $;
              return c({}, J, ($ = {}, $[Y.id] = Y.maxWidth, $));
            }, {}), L = g.map(function(J) {
              var Y = J[0];
              return [Y, Vn(Y)];
            });
            return c({}, r, {
              gridLayout: c({}, r.gridLayout, {
                startWidths: w,
                minWidths: D,
                maxWidths: T,
                headerIdGridWidths: L,
                columnWidth: y
              })
            });
          } else
            return r;
        }
        if (t.type === v.columnResizing) {
          var z = t.clientX, B = r.columnResizing.startX, x = r.gridLayout, _ = x.columnWidth, O = x.minWidths, Z = x.maxWidths, yn = x.headerIdGridWidths, vn = yn === void 0 ? [] : yn, j = z - B, Pn = j / _, Hn = {};
          return vn.forEach(function(J) {
            var Y = J[0], $ = J[1];
            Hn[Y] = Math.min(Math.max(O[Y], $ + $ * Pn), Z[Y]);
          }), c({}, r, {
            gridLayout: c({}, r.gridLayout, {
              columnWidths: c({}, r.gridLayout.columnWidths, {}, Hn)
            })
          });
        }
        if (t.type === v.columnDoneResizing)
          return c({}, r, {
            gridLayout: c({}, r.gridLayout, {
              startWidths: {},
              minWidths: {},
              maxWidths: {}
            })
          });
      }
      function Vn(r) {
        var t, u = (t = document.getElementById("header-cell-" + r)) == null ? void 0 : t.offsetWidth;
        if (u !== void 0)
          return u;
      }
      l._UNSTABLE_usePivotColumns = dt, l.actions = v, l.defaultColumn = tn, l.defaultGroupByFn = tt, l.defaultOrderByFn = De, l.defaultRenderer = an, l.emptyRenderer = Fn, l.ensurePluginOrder = Jn, l.flexRender = en, l.functionalUpdate = Wn, l.loopHooks = Dn, l.makePropGetter = hn, l.makeRenderer = nr, l.reduceHooks = En, l.safeUseLayoutEffect = or, l.useAbsoluteLayout = k, l.useAsyncDebounce = Cr, l.useBlockLayout = ln, l.useColumnOrder = i, l.useExpanded = me, l.useFilters = Ue, l.useFlexLayout = In, l.useGetLatest = Rn, l.useGlobalFilter = Je, l.useGridLayout = xn, l.useGroupBy = be, l.useMountedLayoutEffect = zn, l.usePagination = ct, l.useResizeColumns = S, l.useRowSelect = Pe, l.useRowState = wt, l.useSortBy = it, l.useTable = ue, Object.defineProperty(l, "__esModule", { value: !0 });
    });
  }(Rt, Rt.exports)), Rt.exports;
}
process.env.NODE_ENV === "production" ? Do.exports = ju() : Do.exports = Uu();
var ye = Do.exports;
function Ju(e, C, l) {
  var d = this, A = b.useRef(null), R = b.useRef(0), c = b.useRef(null), E = b.useRef([]), G = b.useRef(), h = b.useRef(), dn = b.useRef(e), v = b.useRef(!0);
  dn.current = e;
  var an = !C && C !== 0 && typeof window < "u";
  if (typeof e != "function")
    throw new TypeError("Expected a function");
  C = +C || 0, l = l || {};
  var Fn = !!l.leading, tn = "trailing" in l ? !!l.trailing : !0, An = "maxWait" in l, qn = An ? Math.max(+l.maxWait || 0, C) : null, hn = b.useCallback(function(en) {
    var pn = E.current, _n = G.current;
    return E.current = G.current = null, R.current = en, h.current = dn.current.apply(_n, pn);
  }, []), En = b.useCallback(function(en, pn) {
    an && cancelAnimationFrame(c.current), c.current = an ? requestAnimationFrame(en) : setTimeout(en, pn);
  }, [an]), Dn = b.useCallback(function(en) {
    if (!v.current)
      return !1;
    var pn = en - A.current, _n = en - R.current;
    return !A.current || pn >= C || pn < 0 || An && _n >= qn;
  }, [qn, An, C]), Jn = b.useCallback(function(en) {
    return c.current = null, tn && E.current ? hn(en) : (E.current = G.current = null, h.current);
  }, [hn, tn]), Wn = b.useCallback(function() {
    var en = Date.now();
    if (Dn(en))
      return Jn(en);
    if (v.current) {
      var pn = en - A.current, _n = en - R.current, Yn = C - pn, $n = An ? Math.min(Yn, qn - _n) : Yn;
      En(Wn, $n);
    }
  }, [qn, An, Dn, En, Jn, C]), Rn = b.useCallback(function() {
    c.current && (an ? cancelAnimationFrame(c.current) : clearTimeout(c.current)), R.current = 0, E.current = A.current = G.current = c.current = null;
  }, [an]), or = b.useCallback(function() {
    return c.current ? Jn(Date.now()) : h.current;
  }, [Jn]);
  b.useEffect(function() {
    return v.current = !0, function() {
      v.current = !1;
    };
  }, []);
  var zn = b.useCallback(function() {
    for (var en = [], pn = 0; pn < arguments.length; pn++)
      en[pn] = arguments[pn];
    var _n = Date.now(), Yn = Dn(_n);
    if (E.current = en, G.current = d, A.current = _n, Yn) {
      if (!c.current && v.current)
        return R.current = A.current, En(Wn, C), Fn ? hn(A.current) : h.current;
      if (An)
        return En(Wn, C), hn(A.current);
    }
    return c.current || En(Wn, C), h.current;
  }, [hn, Fn, An, Dn, En, Wn, C]), Cr = b.useCallback(function() {
    return !!c.current;
  }, []), nr = b.useMemo(function() {
    return {
      callback: zn,
      cancel: Rn,
      flush: or,
      pending: Cr
    };
  }, [zn, Rn, or, Cr]);
  return nr;
}
function $u(e, C) {
  return e === C;
}
function Zo(e) {
  return typeof e == "function" ? function() {
    return e;
  } : e;
}
function Zu(e) {
  var C = b.useState(Zo(e)), l = C[0], d = C[1], A = b.useCallback(function(R) {
    return d(Zo(R));
  }, []);
  return [l, A];
}
function Qu(e, C, l) {
  var d = l && l.equalityFn || $u, A = Zu(e), R = A[0], c = A[1], E = Ju(b.useCallback(function(h) {
    return c(h);
  }, [c]), C, l), G = b.useRef(e);
  return b.useEffect(function() {
    d(G.current, e) || (E.callback(e), G.current = e);
  }, [e, E, d]), [R, { cancel: E.cancel, pending: E.pending, flush: E.flush }];
}
function ni(e) {
  return ya({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }, child: [] }] })(e);
}
function ri(e) {
  return ya({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "polyline", attr: { fill: "none", strokeWidth: "2", points: "9 6 15 12 9 18", transform: "matrix(-1 0 0 1 24 0)" }, child: [] }] })(e);
}
function ei(e) {
  if (Array.isArray(e) || (e.general.geoType === "us-county" || e.general.geoType === "single-state" || e.general.geoType === "us" && (e != null && e.data)) && (e == null || e.data.forEach((C) => {
    C[e.columns.geo.name] && (!isNaN(parseInt(C[e.columns.geo.name])) && C[e.columns.geo.name].length === 4 && (C[e.columns.geo.name] = 0 + C[e.columns.geo.name]), C[e.columns.geo.name] = C[e.columns.geo.name].toString());
  })), Array.isArray(e) && e.length > 0) {
    let C = Object.keys(e[0]), l = ["fips", "FIPS", "fips codes", "FIPS CODES", "Fips Codes", "fips Codes", "Fips codes", "FIPS Codes"];
    const d = C.filter((A) => l.includes(A));
    if (!d.length)
      return;
    e == null || e.forEach((A) => {
      A[d] && (!isNaN(parseInt(A[d])) && A[d].length === 4 && (A[d] = 0 + A[d]), A[d] = A[d].toString());
    });
  }
  return e;
}
const Ro = 10, oe = {
  emptyCols: "It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.",
  emptyData: "Your data file is empty.",
  dataType: "Your datatype is not supported.",
  fileType: "The file type that you are trying to upload is not supported.",
  formatting: "Please check the formatting of your data file.",
  failedFetch: "Error fetching or parsing data file.",
  urlInvalid: "Please make sure to use a valid URL.",
  cannotReach: "Cannot reach URL, please make sure it's correct.",
  fileTooLarge: `File is too large. Maximum file size is ${Ro}MB.`
}, ti = b.memo(({ globalFilter: e, setGlobalFilter: C, disabled: l = !1 }) => {
  const [d, A] = b.useState(e), [R] = Qu(d, 200);
  return b.useEffect(() => {
    typeof R == "string" && R !== e && C(R ?? "");
  }, [R]), /* @__PURE__ */ M(
    "input",
    {
      className: "filter",
      value: d,
      onChange: (E) => {
        A(E.target.value);
      },
      type: "search",
      placeholder: "Filter...",
      disabled: l
    }
  );
}), Qo = b.memo(({ globalFilter: e, data: C, setGlobalFilter: l }) => /* @__PURE__ */ rn("header", { className: "data-table-header", children: [
  /* @__PURE__ */ M("h2", { children: "Data Preview" }),
  /* @__PURE__ */ M(ti, { globalFilter: e || "", setGlobalFilter: l, disabled: C === null })
] })), oi = b.memo(({ previousPage: e, nextPage: C, canPreviousPage: l, canNextPage: d, pageNumber: A, totalPages: R }) => /* @__PURE__ */ rn("footer", { className: "data-table-pagination mt-2", children: [
  /* @__PURE__ */ rn("ul", { children: [
    /* @__PURE__ */ M("li", { children: /* @__PURE__ */ rn(
      "button",
      {
        onClick: () => e(),
        className: "btn btn-prev display-flex align-items-center justify-content-center",
        disabled: !l,
        title: "Previous Page",
        children: [
          " ",
          /* @__PURE__ */ M(ri, {})
        ]
      }
    ) }),
    /* @__PURE__ */ M("li", { className: "me-2", children: /* @__PURE__ */ M(
      "button",
      {
        onClick: () => C(),
        className: "btn btn-next display-flex align-items-center justify-content-center",
        disabled: !d,
        title: "Next Page",
        children: /* @__PURE__ */ M(ni, {})
      }
    ) })
  ] }),
  /* @__PURE__ */ rn("span", { children: [
    "Page ",
    A,
    " of ",
    R
  ] })
] })), ai = () => {
  const { config: e } = b.useContext(Ce), C = b.useMemo(() => e.type === "dashboard" ? Object.values(e.datasets).find((en) => en.preview && Array.isArray(en.data)) : e.data, [e.type, e.data, e.datasets]), [l, d] = b.useState(C), A = (en) => {
    const pn = Object.keys(en[0]).includes("tableData"), _n = dn(pn ? en[0].tableData : en);
    return ei(_n), _n;
  }, R = (en) => d(A(en)), c = b.useContext(He), E = async (en, pn) => {
    if (pn.preview)
      if (pn.dataUrl) {
        const _n = await ko(pn.dataUrl);
        Array.isArray(_n) && R(_n);
      } else
        Array.isArray(pn.data) && R(pn.data);
  }, G = async (en) => {
    for (const pn of Object.keys(en))
      await E(pn, en[pn]);
  };
  b.useEffect(() => {
    (async () => {
      if (e.data)
        R(C);
      else if (e.type === "dashboard")
        await G(e.datasets);
      else if (e.dataUrl) {
        const pn = await ko(e.dataUrl);
        Array.isArray(pn) && R(pn);
      }
    })();
  }, [e, e.data, C]);
  const h = b.useMemo(() => {
    if (!l)
      return [];
    const en = l.columns ?? [];
    return en.length > 0 && en.includes("") && c({ type: "EDITOR_SET_ERRORS", payload: [oe.emptyCols] }), en.map((pn) => ({
      id: `column-${pn}`,
      accessor: (Yn) => Yn[pn],
      Header: pn
    }));
  }, [l]), dn = (en) => {
    let pn = [];
    en.forEach((Yn) => {
      Object.keys(Yn).forEach(($n) => {
        pn.includes($n) === !1 && pn.push($n);
      });
    });
    const _n = [...en];
    if (Array.isArray(_n))
      return _n.columns = pn, _n;
  }, {
    getTableProps: v,
    getTableBodyProps: an,
    headerGroups: Fn,
    state: { pageIndex: tn, globalFilter: An },
    prepareRow: qn,
    setGlobalFilter: hn,
    page: En,
    canPreviousPage: Dn,
    canNextPage: Jn,
    pageOptions: Wn,
    nextPage: Rn,
    previousPage: or
  } = ye.useTable(
    { columns: h, data: l, initialState: { pageSize: 25 } },
    ye.useFlexLayout,
    ye.useGlobalFilter,
    ye.useSortBy,
    ye.useResizeColumns,
    ye.usePagination
  ), zn = () => /* @__PURE__ */ rn("section", { className: "no-data", children: [
    /* @__PURE__ */ M("section", { className: "no-data-message", children: /* @__PURE__ */ rn("section", { children: [
      /* @__PURE__ */ M("h3", { children: "No Data" }),
      /* @__PURE__ */ M("p", { children: "Import data to preview" })
    ] }) }),
    /* @__PURE__ */ M("div", { className: "table-container mt-2", children: /* @__PURE__ */ rn("table", { className: "editor data-table", role: "table", children: [
      /* @__PURE__ */ M("thead", { children: /* @__PURE__ */ rn("tr", { children: [
        /* @__PURE__ */ M("th", { scope: "col", colSpan: 1, role: "columnheader" }),
        /* @__PURE__ */ M("th", { scope: "col", colSpan: 1, role: "columnheader" }),
        /* @__PURE__ */ M("th", { scope: "col", colSpan: 1, role: "columnheader" })
      ] }) }),
      /* @__PURE__ */ M("tbody", { children: /* @__PURE__ */ M(br, { children: [...Array(10)].map((en, pn) => /* @__PURE__ */ rn("tr", { children: [
        /* @__PURE__ */ M("td", {}),
        /* @__PURE__ */ M("td", {}),
        /* @__PURE__ */ M("td", {})
      ] }, pn)) }) })
    ] }) })
  ] });
  if (!l)
    return [/* @__PURE__ */ M(Qo, {}, "header"), /* @__PURE__ */ M(zn, {}, "table")];
  const Cr = {
    previousPage: or,
    nextPage: Rn,
    canPreviousPage: Dn,
    canNextPage: Jn,
    pageNumber: tn + 1,
    totalPages: Wn.length
  };
  return [
    /* @__PURE__ */ M(Qo, { data: l, setGlobalFilter: hn, globalFilter: An }, "header"),
    /* @__PURE__ */ M(() => /* @__PURE__ */ rn("div", { className: "table-responsive", children: [
      /* @__PURE__ */ rn("table", { className: "mt-2 w-100 table table-striped data-table table-sm ", "aria-hidden": "true", ...v, children: [
        /* @__PURE__ */ M("thead", { children: Fn.map((en) => /* @__PURE__ */ M("tr", { ...en.getHeaderGroupProps(), children: en.headers.map((pn) => /* @__PURE__ */ rn(
          "th",
          {
            scope: "col",
            ...pn.getHeaderProps(pn.getSortByToggleProps()),
            className: pn.isSorted ? pn.isSortedDesc ? "sort sort-desc" : "sort sort-asc" : "",
            title: pn.Header,
            children: [
              pn.render("Header"),
              /* @__PURE__ */ M("div", { ...pn.getResizerProps(), className: "resizer" })
            ]
          }
        )) })) }),
        /* @__PURE__ */ M("tbody", { ...an(), children: En.map((en) => (qn(en), /* @__PURE__ */ M("tr", { ...en.getRowProps(), children: en.cells.map((pn) => /* @__PURE__ */ M("td", { ...pn.getCellProps(), title: pn.value, children: pn.render("Cell") })) }))) })
      ] }),
      /* @__PURE__ */ M(oi, { ...Cr })
    ] }), {}, "table")
  ];
}, na = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ b.createElement("path", { d: "M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z" })), Et = b.createContext();
Et.displayName = "SampleDataContext";
const ui = `STATE,Rate,Location,URL\r
Overall,55,Vehicle,https://www.cdc.gov\r
Alabama,130,Vehicle,https://www.cdc.gov/\r
Alaska,40,Work,https://www.cdc.gov/\r
American Samoa,55,Home,https://www.cdc.gov/\r
Arizona,57,School,https://www.cdc.gov/\r
Arkansas,60,School,https://www.cdc.gov/\r
California,30,Home,https://www.cdc.gov/\r
Colorado,40,Vehicle,https://www.cdc.gov/\r
Connecticut,55,Home,https://www.cdc.gov/\r
Delaware,57,Home,https://www.cdc.gov/\r
DC,60,Home,https://www.cdc.gov/\r
Florida,30,Work,https://www.cdc.gov/\r
Georgia,40,Work,https://www.cdc.gov/\r
Guam,55,Home,https://www.cdc.gov/\r
Hawaii,57,School,https://www.cdc.gov/\r
Idaho,60,School,https://www.cdc.gov/\r
Illinois,30,Work,https://www.cdc.gov/\r
Indiana,40,Vehicle,https://www.cdc.gov/\r
Iowa,55,Home,https://www.cdc.gov/\r
Kansas,57,Home,https://www.cdc.gov/\r
Kentucky,60,NA,https://www.cdc.gov/\r
Louisiana,30,Vehicle,https://www.cdc.gov/\r
Maine,40,Work,https://www.cdc.gov/\r
Marshall Islands,55,Home,https://www.cdc.gov/\r
Maryland,57,School,https://www.cdc.gov/\r
Massachusetts,60,School,https://www.cdc.gov/\r
Michigan,12,Work,https://www.cdc.gov/\r
Micronesia,65,Vehicle,https://www.cdc.gov/\r
Minnesota,55,Home,https://www.cdc.gov/\r
Mississippi,57,Home,https://www.cdc.gov/\r
Montana,60,Home,https://www.cdc.gov/\r
Montana,30,Vehicle,https://www.cdc.gov/\r
Nebraska,40,Work,https://www.cdc.gov/\r
Nevada,55,Home,https://www.cdc.gov/\r
New Hampshire,57,School,https://www.cdc.gov/\r
New Jersey,60,School,https://www.cdc.gov/\r
New Mexico,12,Work,https://www.cdc.gov/\r
New York,40,Vehicle,https://www.cdc.gov/\r
North Carolina,55,Home,https://www.cdc.gov/\r
North Dakota,57,Home,https://www.cdc.gov/\r
Northern Mariana Islands,60,Home,https://www.cdc.gov/\r
Ohio,88,Vehicle,https://www.cdc.gov/\r
Oklahoma,40,Work,https://www.cdc.gov/\r
Oregon,55,Home,https://www.cdc.gov/\r
Palau,15,School,https://www.cdc.gov/\r
Pennsylvania,60,School,https://www.cdc.gov/\r
Puerto Rico,30,Work,https://www.cdc.gov/\r
Rhode Island,40,Vehicle,https://www.cdc.gov/\r
South Carolina,55,Home,https://www.cdc.gov/\r
South Dakota,86,Home,https://www.cdc.gov/\r
Tennessee,60,Home,https://www.cdc.gov/\r
Texas,30,Vehicle,https://www.cdc.gov/\r
Utah,54,Work,https://www.cdc.gov/\r
Vermont,40,Home,https://www.cdc.gov/\r
Virgin Islands,55,School,https://www.cdc.gov/\r
Virginia,57,School,https://www.cdc.gov/\r
Washington,62,Work,https://www.cdc.gov/\r
West Virginia,25,Vehicle,https://www.cdc.gov/\r
Wyoming,43,Vehicle,https://www.cdc.gov/\r
`, ii = `Location,symbolCol,textCol,orderCol\r
School,¶,Footnote 4,4\r
School,§,Footnote 3,3\r
School,†,Footnote 2,2\r
School,*,Footnote 1,1\r
Vehicle,*,Some Vehicle Footnote,1\r
Work,*,Some Work Footnote,1\r
Home,*,Some Home Footnote,1`, li = `Race,Age-adjusted rate\r
Hispanic or Latino,644.2\r
Non-Hispanic American Indian,636.1\r
Non-Hispanic Black,563.7\r
Non-Hispanic Asian or Pacific Islander,202.5\r
Non-Hispanic White,183.6\r
`, si = `FIPS Codes,County,Public Health Jurisdiction,Percent Vaccinated,Vaccination Coverage Group\r
02013,Aleutians East Borough,AK,99.99,70% or More\r
02016,Aleutians West Census Area,AK,89.74,70% or More\r
02020,Anchorage Municipality,AK,60.67,60% - 69.9%\r
02050,Bethel Census Area,AK,85.38,70% or More\r
02060,Bristol Bay Borough,AK,99.99,70% or More\r
02068,Denali Borough,AK,50.41,50% - 59.9%\r
02070,Dillingham Census Area,AK,65.34,60% - 69.9%\r
02090,Fairbanks North Star Borough,AK,53.3,50% - 59.9%\r
02100,Haines Borough,AK,47.03,40% - 49.9%\r
02105,Hoonah-Angoon Census Area,AK,88.32,70% or More\r
02110,Juneau City and Borough,AK,78.68,70% or More\r
02122,Kenai Peninsula Borough,AK,31.23,30% - 39.9%\r
02130,Ketchikan Gateway Borough,AK,63.86,60% - 69.9%\r
02150,Kodiak Island Borough,AK,69.59,60% - 69.9%\r
02158,Kusilvak Census Area,AK,98.33,70% or More\r
02164,Lake and Peninsula Borough,AK,65.73,60% - 69.9%\r
02170,Matanuska-Susitna Borough,AK,32.13,30% - 39.9%\r
02180,Nome Census Area,AK,88.57,70% or More\r
02185,North Slope Borough,AK,53.89,50% - 59.9%\r
02188,Northwest Arctic Borough,AK,75.06,70% or More\r
02195,Petersburg Census Area,AK,74.48,70% or More\r
02198,Prince of Wales-Hyder Census Area,AK,57.75,50% - 59.9%\r
02220,Sitka City and Borough,AK,75.12,70% or More\r
02230,Skagway Municipality,AK,99.99,70% or More\r
02240,Southeast Fairbanks Census Area,AK,23.94,20% - 29.9%\r
02261,Valdez-Cordova Census Area,AK,40.92,40% - 49.9%\r
02275,Wrangell City and Borough,AK,45.73,40% - 49.9%\r
02282,Yakutat City and Borough,AK,96.67,70% or More\r
02290,Yukon-Koyukuk Census Area,AK,86.47,70% or More\r
01001,Autauga County,AL,34.13,30% - 39.9%\r
01003,Baldwin County,AL,37.55,30% - 39.9%\r
01005,Barbour County,AL,32.78,30% - 39.9%\r
01007,Bibb County,AL,24.83,20% - 29.9%\r
01009,Blount County,AL,19.69,0% - 19.9%\r
01011,Bullock County,AL,50.59,50% - 59.9%\r
01013,Butler County,AL,28.25,20% - 29.9%\r
01015,Calhoun County,AL,33.01,30% - 39.9%\r
01017,Chambers County,AL,20.28,20% - 29.9%\r
01019,Cherokee County,AL,14.04,0% - 19.9%\r
01021,Chilton County,AL,25.24,20% - 29.9%\r
01023,Choctaw County,AL,39.57,30% - 39.9%\r
01025,Clarke County,AL,37.54,30% - 39.9%\r
01027,Clay County,AL,23.85,20% - 29.9%\r
01029,Cleburne County,AL,14.83,0% - 19.9%\r
01031,Coffee County,AL,26.38,20% - 29.9%\r
01033,Colbert County,AL,37.04,30% - 39.9%\r
01035,Conecuh County,AL,31.94,30% - 39.9%\r
01037,Coosa County,AL,23.87,20% - 29.9%\r
01039,Covington County,AL,21.4,20% - 29.9%\r
01041,Crenshaw County,AL,19.49,0% - 19.9%\r
01043,Cullman County,AL,20.77,20% - 29.9%\r
01045,Dale County,AL,27.59,20% - 29.9%\r
01047,Dallas County,AL,35.95,30% - 39.9%\r
01049,DeKalb County,AL,20.97,20% - 29.9%\r
01051,Elmore County,AL,31.41,30% - 39.9%\r
01053,Escambia County,AL,20.24,20% - 29.9%\r
01055,Etowah County,AL,27.95,20% - 29.9%\r
01057,Fayette County,AL,20.02,20% - 29.9%\r
01059,Franklin County,AL,28.59,20% - 29.9%\r
01061,Geneva County,AL,14.87,0% - 19.9%\r
01063,Greene County,AL,44.05,40% - 49.9%\r
01065,Hale County,AL,58.53,50% - 59.9%\r
01067,Henry County,AL,22.4,20% - 29.9%\r
01069,Houston County,AL,27.27,20% - 29.9%\r
01071,Jackson County,AL,27.12,20% - 29.9%\r
01073,Jefferson County,AL,55.79,50% - 59.9%\r
01075,Lamar County,AL,16.74,0% - 19.9%\r
01077,Lauderdale County,AL,30.71,30% - 39.9%\r
01079,Lawrence County,AL,23.08,20% - 29.9%\r
01081,Lee County,AL,32.87,30% - 39.9%\r
01083,Limestone County,AL,21.03,20% - 29.9%\r
01085,Lowndes County,AL,48.36,40% - 49.9%\r
01087,Macon County,AL,50.19,50% - 59.9%\r
01089,Madison County,AL,57.67,50% - 59.9%\r
01091,Marengo County,AL,47.2,40% - 49.9%\r
01093,Marion County,AL,17.5,0% - 19.9%\r
01095,Marshall County,AL,31.06,30% - 39.9%\r
01097,Mobile County,AL,39.18,30% - 39.9%\r
01099,Monroe County,AL,31.45,30% - 39.9%\r
01101,Montgomery County,AL,50.54,50% - 59.9%\r
01103,Morgan County,AL,26.11,20% - 29.9%\r
01105,Perry County,AL,43.88,40% - 49.9%\r
01107,Pickens County,AL,36.8,30% - 39.9%\r
01109,Pike County,AL,39.77,30% - 39.9%\r
01111,Randolph County,AL,12.65,0% - 19.9%\r
01113,Russell County,AL,36.78,30% - 39.9%\r
01117,Shelby County,AL,34.86,30% - 39.9%\r
01115,St. Clair County,AL,25.68,20% - 29.9%\r
01119,Sumter County,AL,58.55,50% - 59.9%\r
01121,Talladega County,AL,24.3,20% - 29.9%\r
01123,Tallapoosa County,AL,23.69,20% - 29.9%\r
01125,Tuscaloosa County,AL,39.99,30% - 39.9%\r
01127,Walker County,AL,28.51,20% - 29.9%\r
01129,Washington County,AL,24.47,20% - 29.9%\r
01131,Wilcox County,AL,51.67,50% - 59.9%\r
01133,Winston County,AL,8.29,0% - 19.9%\r
05001,Arkansas County,AR,55.55,50% - 59.9%\r
05003,Ashley County,AR,40.57,40% - 49.9%\r
05005,Baxter County,AR,32.08,30% - 39.9%\r
05007,Benton County,AR,57.67,50% - 59.9%\r
05009,Boone County,AR,28.04,20% - 29.9%\r
05011,Bradley County,AR,54.5,50% - 59.9%\r
05013,Calhoun County,AR,30.18,30% - 39.9%\r
05015,Carroll County,AR,36.62,30% - 39.9%\r
05017,Chicot County,AR,51.86,50% - 59.9%\r
05019,Clark County,AR,57.84,50% - 59.9%\r
05021,Clay County,AR,35.06,30% - 39.9%\r
05023,Cleburne County,AR,28.57,20% - 29.9%\r
05025,Cleveland County,AR,44.1,40% - 49.9%\r
05027,Columbia County,AR,51.25,50% - 59.9%\r
05029,Conway County,AR,51.04,50% - 59.9%\r
05031,Craighead County,AR,44.69,40% - 49.9%\r
05033,Crawford County,AR,39.84,30% - 39.9%\r
05035,Crittenden County,AR,42.57,40% - 49.9%\r
05037,Cross County,AR,44.26,40% - 49.9%\r
05039,Dallas County,AR,62.9,60% - 69.9%\r
05041,Desha County,AR,53.16,50% - 59.9%\r
05043,Drew County,AR,49.58,40% - 49.9%\r
05045,Faulkner County,AR,50.18,50% - 59.9%\r
05047,Franklin County,AR,40.72,40% - 49.9%\r
05049,Fulton County,AR,26.74,20% - 29.9%\r
05051,Garland County,AR,45.09,40% - 49.9%\r
05053,Grant County,AR,36.88,30% - 39.9%\r
05055,Greene County,AR,37.32,30% - 39.9%\r
05057,Hempstead County,AR,29.71,20% - 29.9%\r
05059,Hot Spring County,AR,39.6,30% - 39.9%\r
05061,Howard County,AR,37.23,30% - 39.9%\r
05063,Independence County,AR,37.18,30% - 39.9%\r
05065,Izard County,AR,37.32,30% - 39.9%\r
05067,Jackson County,AR,33.98,30% - 39.9%\r
05069,Jefferson County,AR,50.85,50% - 59.9%\r
05071,Johnson County,AR,45.67,40% - 49.9%\r
05073,Lafayette County,AR,25.39,20% - 29.9%\r
05075,Lawrence County,AR,38,30% - 39.9%\r
05077,Lee County,AR,25.23,20% - 29.9%\r
05079,Lincoln County,AR,38.65,30% - 39.9%\r
05081,Little River County,AR,23.08,20% - 29.9%\r
05083,Logan County,AR,38.48,30% - 39.9%\r
05085,Lonoke County,AR,46.96,40% - 49.9%\r
05087,Madison County,AR,34.63,30% - 39.9%\r
05089,Marion County,AR,17.97,0% - 19.9%\r
05091,Miller County,AR,21.71,20% - 29.9%\r
05093,Mississippi County,AR,32.99,30% - 39.9%\r
05095,Monroe County,AR,63.26,60% - 69.9%\r
05097,Montgomery County,AR,21.62,20% - 29.9%\r
05099,Nevada County,AR,39.97,30% - 39.9%\r
05101,Newton County,AR,18.95,0% - 19.9%\r
05103,Ouachita County,AR,48.36,40% - 49.9%\r
05105,Perry County,AR,47.07,40% - 49.9%\r
05107,Phillips County,AR,44.03,40% - 49.9%\r
05109,Pike County,AR,29.4,20% - 29.9%\r
05111,Poinsett County,AR,41.64,40% - 49.9%\r
05113,Polk County,AR,23.59,20% - 29.9%\r
05115,Pope County,AR,47.51,40% - 49.9%\r
05117,Prairie County,AR,37.43,30% - 39.9%\r
05119,Pulaski County,AR,64.24,60% - 69.9%\r
05121,Randolph County,AR,30.79,30% - 39.9%\r
05125,Saline County,AR,58.77,50% - 59.9%\r
05127,Scott County,AR,34.7,30% - 39.9%\r
05129,Searcy County,AR,23.49,20% - 29.9%\r
05131,Sebastian County,AR,51.32,50% - 59.9%\r
05133,Sevier County,AR,36.78,30% - 39.9%\r
05135,Sharp County,AR,32.8,30% - 39.9%\r
05123,St. Francis County,AR,31.13,30% - 39.9%\r
05137,Stone County,AR,26.39,20% - 29.9%\r
05139,Union County,AR,46.07,40% - 49.9%\r
05141,Van Buren County,AR,24.51,20% - 29.9%\r
05143,Washington County,AR,68.75,60% - 69.9%\r
05145,White County,AR,38.29,30% - 39.9%\r
05147,Woodruff County,AR,47.16,40% - 49.9%\r
05149,Yell County,AR,48.3,40% - 49.9%\r
04001,Apache County,AZ,99.99,70% or More\r
04003,Cochise County,AZ,74.89,70% or More\r
04005,Coconino County,AZ,99.99,70% or More\r
04007,Gila County,AZ,50,50% - 59.9%\r
04009,Graham County,AZ,56.24,50% - 59.9%\r
04011,Greenlee County,AZ,29.7,20% - 29.9%\r
04012,La Paz County,AZ,62.19,60% - 69.9%\r
04013,Maricopa County,AZ,53.84,50% - 59.9%\r
04015,Mohave County,AZ,21.79,20% - 29.9%\r
04017,Navajo County,AZ,99.99,70% or More\r
04019,Pima County,AZ,71.56,70% or More\r
04021,Pinal County,AZ,46.57,40% - 49.9%\r
04023,Santa Cruz County,AZ,99.99,70% or More\r
04025,Yavapai County,AZ,27.9,20% - 29.9%\r
04027,Yuma County,AZ,84.7,70% or More\r
06001,Alameda County,CA,96.69,70% or More\r
06003,Alpine County,CA,0,No Data\r
06005,Amador County,CA,52.34,50% - 59.9%\r
06007,Butte County,CA,43.08,40% - 49.9%\r
06009,Calaveras County,CA,46.21,40% - 49.9%\r
06011,Colusa County,CA,48.69,40% - 49.9%\r
06013,Contra Costa County,CA,88.29,70% or More\r
06015,Del Norte County,CA,35.33,30% - 39.9%\r
06017,El Dorado County,CA,55,50% - 59.9%\r
06019,Fresno County,CA,59.34,50% - 59.9%\r
06021,Glenn County,CA,46.92,40% - 49.9%\r
06023,Humboldt County,CA,67.9,60% - 69.9%\r
06025,Imperial County,CA,99.99,70% or More\r
06027,Inyo County,CA,0,No Data\r
06029,Kern County,CA,53.02,50% - 59.9%\r
06031,Kings County,CA,48.71,40% - 49.9%\r
06033,Lake County,CA,44.78,40% - 49.9%\r
06035,Lassen County,CA,21.66,20% - 29.9%\r
06037,Los Angeles County,CA,84.51,70% or More\r
06039,Madera County,CA,54.47,50% - 59.9%\r
06041,Marin County,CA,99.99,70% or More\r
06043,Mariposa County,CA,0,No Data\r
06045,Mendocino County,CA,60.57,60% - 69.9%\r
06047,Merced County,CA,55.46,50% - 59.9%\r
06049,Modoc County,CA,0,No Data\r
06051,Mono County,CA,0,No Data\r
06053,Monterey County,CA,78.63,70% or More\r
06055,Napa County,CA,85.2,70% or More\r
06057,Nevada County,CA,59.26,50% - 59.9%\r
06059,Orange County,CA,75.05,70% or More\r
06061,Placer County,CA,60.42,60% - 69.9%\r
06063,Plumas County,CA,0,No Data\r
06065,Riverside County,CA,56.33,50% - 59.9%\r
06067,Sacramento County,CA,67.5,60% - 69.9%\r
06069,San Benito County,CA,69.89,60% - 69.9%\r
06071,San Bernardino County,CA,53.59,50% - 59.9%\r
06073,San Diego County,CA,99.99,70% or More\r
06075,San Francisco County,CA,99.99,70% or More\r
06077,San Joaquin County,CA,63.97,60% - 69.9%\r
06079,San Luis Obispo County,CA,64.59,60% - 69.9%\r
06081,San Mateo County,CA,96.53,70% or More\r
06083,Santa Barbara County,CA,73.94,70% or More\r
06085,Santa Clara County,CA,93.97,70% or More\r
06087,Santa Cruz County,CA,94.82,70% or More\r
06089,Shasta County,CA,32.94,30% - 39.9%\r
06091,Sierra County,CA,0,No Data\r
06093,Siskiyou County,CA,31.4,30% - 39.9%\r
06095,Solano County,CA,72.68,70% or More\r
06097,Sonoma County,CA,82.99,70% or More\r
06099,Stanislaus County,CA,61.79,60% - 69.9%\r
06101,Sutter County,CA,52.75,50% - 59.9%\r
06103,Tehama County,CA,28.55,20% - 29.9%\r
06105,Trinity County,CA,0,No Data\r
06107,Tulare County,CA,48.81,40% - 49.9%\r
06109,Tuolumne County,CA,41.79,40% - 49.9%\r
06111,Ventura County,CA,72.48,70% or More\r
06113,Yolo County,CA,76.78,70% or More\r
06115,Yuba County,CA,43.73,40% - 49.9%\r
08001,Adams County,CO,65.08,60% - 69.9%\r
08003,Alamosa County,CO,54.84,50% - 59.9%\r
08005,Arapahoe County,CO,67.65,60% - 69.9%\r
08007,Archuleta County,CO,37.97,30% - 39.9%\r
08009,Baca County,CO,15.77,0% - 19.9%\r
08011,Bent County,CO,29.08,20% - 29.9%\r
08013,Boulder County,CO,80.5,70% or More\r
08014,Broomfield County,CO,81.91,70% or More\r
08015,Chaffee County,CO,51.64,50% - 59.9%\r
08019,Clear Creek County,CO,49.8,40% - 49.9%\r
08021,Conejos County,CO,43.62,40% - 49.9%\r
08025,Crowley County,CO,21.4,20% - 29.9%\r
08027,Custer County,CO,19.48,0% - 19.9%\r
08029,Delta County,CO,25.45,20% - 29.9%\r
08031,Denver County,CO,79.16,70% or More\r
08033,Dolores County,CO,15.54,0% - 19.9%\r
08035,Douglas County,CO,69.32,60% - 69.9%\r
08037,Eagle County,CO,86.79,70% or More\r
08041,El Paso County,CO,54.31,50% - 59.9%\r
08039,Elbert County,CO,24.91,20% - 29.9%\r
08043,Fremont County,CO,20.99,20% - 29.9%\r
08045,Garfield County,CO,62.95,60% - 69.9%\r
08047,Gilpin County,CO,50,50% - 59.9%\r
08049,Grand County,CO,46.08,40% - 49.9%\r
08051,Gunnison County,CO,68.72,60% - 69.9%\r
08055,Huerfano County,CO,26.53,20% - 29.9%\r
08059,Jefferson County,CO,75.43,70% or More\r
08061,Kiowa County,CO,18.18,0% - 19.9%\r
08063,Kit Carson County,CO,19.16,0% - 19.9%\r
08067,La Plata County,CO,71.46,70% or More\r
08065,Lake County,CO,63.07,60% - 69.9%\r
08069,Larimer County,CO,63.98,60% - 69.9%\r
08071,Las Animas County,CO,46.26,40% - 49.9%\r
08075,Logan County,CO,24.32,20% - 29.9%\r
08077,Mesa County,CO,35.08,30% - 39.9%\r
08079,Mineral County,CO,38.24,30% - 39.9%\r
08081,Moffat County,CO,26.68,20% - 29.9%\r
08083,Montezuma County,CO,53.79,50% - 59.9%\r
08085,Montrose County,CO,32.45,30% - 39.9%\r
08087,Morgan County,CO,33.22,30% - 39.9%\r
08089,Otero County,CO,27.61,20% - 29.9%\r
08091,Ouray County,CO,58.09,50% - 59.9%\r
08093,Park County,CO,37.02,30% - 39.9%\r
08095,Phillips County,CO,19.06,0% - 19.9%\r
08097,Pitkin County,CO,92.73,70% or More\r
08099,Prowers County,CO,28.92,20% - 29.9%\r
08101,Pueblo County,CO,46.51,40% - 49.9%\r
08103,Rio Blanco County,CO,25.05,20% - 29.9%\r
08105,Rio Grande County,CO,55.15,50% - 59.9%\r
08107,Routt County,CO,82.99,70% or More\r
08109,Saguache County,CO,19.93,0% - 19.9%\r
08111,San Juan County,CO,99.99,70% or More\r
08113,San Miguel County,CO,99.99,70% or More\r
08115,Sedgwick County,CO,19.88,0% - 19.9%\r
08117,Summit County,CO,92.09,70% or More\r
08119,Teller County,CO,37.95,30% - 39.9%\r
08121,Washington County,CO,11.08,0% - 19.9%\r
08123,Weld County,CO,53.76,50% - 59.9%\r
08125,Yuma County,CO,22.82,20% - 29.9%\r
09001,Fairfield County,CT,91.95,70% or More\r
09003,Hartford County,CT,74.68,70% or More\r
09005,Litchfield County,CT,73.14,70% or More\r
09007,Middlesex County,CT,81.54,70% or More\r
09009,New Haven County,CT,80.16,70% or More\r
09011,New London County,CT,75.04,70% or More\r
09013,Tolland County,CT,67.94,60% - 69.9%\r
09015,Windham County,CT,61.02,60% - 69.9%\r
11001,District of Columbia,DC,84.06,70% or More\r
10001,Kent County,DE,48.47,40% - 49.9%\r
10003,New Castle County,DE,71.72,70% or More\r
10005,Sussex County,DE,49.13,40% - 49.9%\r
12001,Alachua County,FL,69.86,60% - 69.9%\r
12003,Baker County,FL,19.37,0% - 19.9%\r
12005,Bay County,FL,32.77,30% - 39.9%\r
12007,Bradford County,FL,27.25,20% - 29.9%\r
12009,Brevard County,FL,49.6,40% - 49.9%\r
12011,Broward County,FL,73.98,70% or More\r
12013,Calhoun County,FL,18.89,0% - 19.9%\r
12015,Charlotte County,FL,39.34,30% - 39.9%\r
12017,Citrus County,FL,28.67,20% - 29.9%\r
12019,Clay County,FL,42.69,40% - 49.9%\r
12021,Collier County,FL,50.79,50% - 59.9%\r
12023,Columbia County,FL,29.67,20% - 29.9%\r
12027,DeSoto County,FL,38.09,30% - 39.9%\r
12029,Dixie County,FL,18.76,0% - 19.9%\r
12031,Duval County,FL,53.48,50% - 59.9%\r
12033,Escambia County,FL,35.91,30% - 39.9%\r
12035,Flagler County,FL,43.48,40% - 49.9%\r
12037,Franklin County,FL,28.96,20% - 29.9%\r
12039,Gadsden County,FL,52.19,50% - 59.9%\r
12041,Gilchrist County,FL,24.94,20% - 29.9%\r
12043,Glades County,FL,30.6,30% - 39.9%\r
12045,Gulf County,FL,27.93,20% - 29.9%\r
12047,Hamilton County,FL,25.11,20% - 29.9%\r
12049,Hardee County,FL,28.18,20% - 29.9%\r
12051,Hendry County,FL,38.57,30% - 39.9%\r
12053,Hernando County,FL,38.17,30% - 39.9%\r
12055,Highlands County,FL,31.06,30% - 39.9%\r
12057,Hillsborough County,FL,58.66,50% - 59.9%\r
12059,Holmes County,FL,12.15,0% - 19.9%\r
12061,Indian River County,FL,46.78,40% - 49.9%\r
12063,Jackson County,FL,19.68,0% - 19.9%\r
12065,Jefferson County,FL,40.6,40% - 49.9%\r
12067,Lafayette County,FL,21,20% - 29.9%\r
12069,Lake County,FL,52.9,50% - 59.9%\r
12071,Lee County,FL,45.02,40% - 49.9%\r
12073,Leon County,FL,59.83,50% - 59.9%\r
12075,Levy County,FL,30.48,30% - 39.9%\r
12077,Liberty County,FL,20.18,20% - 29.9%\r
12079,Madison County,FL,37.85,30% - 39.9%\r
12081,Manatee County,FL,48.88,40% - 49.9%\r
12083,Marion County,FL,42.52,40% - 49.9%\r
12085,Martin County,FL,48.01,40% - 49.9%\r
12086,Miami-Dade County,FL,91.5,70% or More\r
12087,Monroe County,FL,61.55,60% - 69.9%\r
12089,Nassau County,FL,38.43,30% - 39.9%\r
12091,Okaloosa County,FL,43.08,40% - 49.9%\r
12093,Okeechobee County,FL,30.14,30% - 39.9%\r
12095,Orange County,FL,77.97,70% or More\r
12097,Osceola County,FL,82.62,70% or More\r
12099,Palm Beach County,FL,60.75,60% - 69.9%\r
12101,Pasco County,FL,49.01,40% - 49.9%\r
12103,Pinellas County,FL,50.19,50% - 59.9%\r
12105,Polk County,FL,46.78,40% - 49.9%\r
12107,Putnam County,FL,28.97,20% - 29.9%\r
12113,Santa Rosa County,FL,37.38,30% - 39.9%\r
12115,Sarasota County,FL,53.24,50% - 59.9%\r
12117,Seminole County,FL,62.67,60% - 69.9%\r
12109,St. Johns County,FL,63.39,60% - 69.9%\r
12111,St. Lucie County,FL,49.86,40% - 49.9%\r
12119,Sumter County,FL,34.9,30% - 39.9%\r
12121,Suwannee County,FL,21.27,20% - 29.9%\r
12123,Taylor County,FL,23.08,20% - 29.9%\r
12125,Union County,FL,23.26,20% - 29.9%\r
12127,Volusia County,FL,45.26,40% - 49.9%\r
12129,Wakulla County,FL,34.3,30% - 39.9%\r
12131,Walton County,FL,29.73,20% - 29.9%\r
12133,Washington County,FL,14.09,0% - 19.9%\r
13001,Appling County,GA,14.04,0% - 19.9%\r
13007,Baker County,GA,33.17,30% - 39.9%\r
13021,Bibb County,GA,34.39,30% - 39.9%\r
13025,Brantley County,GA,10.86,0% - 19.9%\r
13027,Brooks County,GA,28.53,20% - 29.9%\r
13029,Bryan County,GA,36.95,30% - 39.9%\r
13031,Bulloch County,GA,32.53,30% - 39.9%\r
13033,Burke County,GA,38.41,30% - 39.9%\r
13039,Camden County,GA,41.22,40% - 49.9%\r
13045,Carroll County,GA,23.47,20% - 29.9%\r
13047,Catoosa County,GA,25.92,20% - 29.9%\r
13049,Charlton County,GA,17.77,0% - 19.9%\r
13051,Chatham County,GA,50.47,50% - 59.9%\r
13053,Chattahoochee County,GA,99.99,70% or More\r
13057,Cherokee County,GA,31.54,30% - 39.9%\r
13061,Clay County,GA,44.16,40% - 49.9%\r
13063,Clayton County,GA,36.65,30% - 39.9%\r
13065,Clinch County,GA,16.88,0% - 19.9%\r
13067,Cobb County,GA,51.43,50% - 59.9%\r
13069,Coffee County,GA,26.43,20% - 29.9%\r
13071,Colquitt County,GA,26.02,20% - 29.9%\r
13073,Columbia County,GA,29.38,20% - 29.9%\r
13075,Cook County,GA,21.4,20% - 29.9%\r
13077,Coweta County,GA,28.62,20% - 29.9%\r
13079,Crawford County,GA,13.85,0% - 19.9%\r
13083,Dade County,GA,30.39,30% - 39.9%\r
13085,Dawson County,GA,14.73,0% - 19.9%\r
13087,Decatur County,GA,32.84,30% - 39.9%\r
13089,DeKalb County,GA,50.4,50% - 59.9%\r
13093,Dooly County,GA,34.15,30% - 39.9%\r
13097,Douglas County,GA,36.98,30% - 39.9%\r
13101,Echols County,GA,14.58,0% - 19.9%\r
13103,Effingham County,GA,26.71,20% - 29.9%\r
13107,Emanuel County,GA,19.24,0% - 19.9%\r
13111,Fannin County,GA,15.26,0% - 19.9%\r
13113,Fayette County,GA,26.76,20% - 29.9%\r
13121,Fulton County,GA,44.58,40% - 49.9%\r
13127,Glynn County,GA,36.44,30% - 39.9%\r
13133,Greene County,GA,28.28,20% - 29.9%\r
13135,Gwinnett County,GA,42.55,40% - 49.9%\r
13139,Hall County,GA,35.03,30% - 39.9%\r
13147,Hart County,GA,14.76,0% - 19.9%\r
13153,Houston County,GA,35.26,30% - 39.9%\r
13157,Jackson County,GA,22.08,20% - 29.9%\r
13159,Jasper County,GA,16.23,0% - 19.9%\r
13167,Johnson County,GA,19.45,0% - 19.9%\r
13169,Jones County,GA,27.11,20% - 29.9%\r
13175,Laurens County,GA,29.55,20% - 29.9%\r
13179,Liberty County,GA,44.62,40% - 49.9%\r
13183,Long County,GA,14.15,0% - 19.9%\r
13185,Lowndes County,GA,30.23,30% - 39.9%\r
13197,Marion County,GA,24.48,20% - 29.9%\r
13191,McIntosh County,GA,27.35,20% - 29.9%\r
13199,Meriwether County,GA,23.92,20% - 29.9%\r
13209,Montgomery County,GA,21.59,20% - 29.9%\r
13215,Muscogee County,GA,39.81,30% - 39.9%\r
13217,Newton County,GA,28.56,20% - 29.9%\r
13221,Oglethorpe County,GA,26.82,20% - 29.9%\r
13223,Paulding County,GA,26.6,20% - 29.9%\r
13229,Pierce County,GA,12.78,0% - 19.9%\r
13235,Pulaski County,GA,26.64,20% - 29.9%\r
13239,Quitman County,GA,11.11,0% - 19.9%\r
13241,Rabun County,GA,27.32,20% - 29.9%\r
13243,Randolph County,GA,45.66,40% - 49.9%\r
13245,Richmond County,GA,38.14,30% - 39.9%\r
13251,Screven County,GA,37.38,30% - 39.9%\r
13259,Stewart County,GA,38.36,30% - 39.9%\r
13261,Sumter County,GA,42.29,40% - 49.9%\r
13271,Telfair County,GA,22.73,20% - 29.9%\r
13277,Tift County,GA,32.07,30% - 39.9%\r
13293,Upson County,GA,25.85,20% - 29.9%\r
13295,Walker County,GA,19.67,0% - 19.9%\r
13297,Walton County,GA,21.2,20% - 29.9%\r
13299,Ware County,GA,16.05,0% - 19.9%\r
13301,Warren County,GA,31.98,30% - 39.9%\r
13303,Washington County,GA,33.33,30% - 39.9%\r
13305,Wayne County,GA,18.21,0% - 19.9%\r
13309,Wheeler County,GA,24.52,20% - 29.9%\r
13319,Wilkinson County,GA,35.04,30% - 39.9%\r
15001,Hawaii County,HI,81.14,70% or More\r
15003,Honolulu County,HI,81.14,70% or More\r
15005,Kalawao County,HI,81.14,70% or More\r
15007,Kauai County,HI,81.14,70% or More\r
15009,Maui County,HI,81.14,70% or More\r
19001,Adair County,IA,33.78,30% - 39.9%\r
19003,Adams County,IA,24.71,20% - 29.9%\r
19005,Allamakee County,IA,33.52,30% - 39.9%\r
19007,Appanoose County,IA,22.67,20% - 29.9%\r
19009,Audubon County,IA,37.63,30% - 39.9%\r
19011,Benton County,IA,41.98,40% - 49.9%\r
19013,Black Hawk County,IA,52.15,50% - 59.9%\r
19015,Boone County,IA,58.12,50% - 59.9%\r
19017,Bremer County,IA,47.96,40% - 49.9%\r
19019,Buchanan County,IA,33.7,30% - 39.9%\r
19021,Buena Vista County,IA,44.25,40% - 49.9%\r
19023,Butler County,IA,36.99,30% - 39.9%\r
19025,Calhoun County,IA,27.88,20% - 29.9%\r
19027,Carroll County,IA,34.54,30% - 39.9%\r
19029,Cass County,IA,34.01,30% - 39.9%\r
19031,Cedar County,IA,48.72,40% - 49.9%\r
19033,Cerro Gordo County,IA,50.35,50% - 59.9%\r
19035,Cherokee County,IA,23.7,20% - 29.9%\r
19037,Chickasaw County,IA,28.07,20% - 29.9%\r
19039,Clarke County,IA,40.36,40% - 49.9%\r
19041,Clay County,IA,34.9,30% - 39.9%\r
19043,Clayton County,IA,20.71,20% - 29.9%\r
19045,Clinton County,IA,35.75,30% - 39.9%\r
19047,Crawford County,IA,40.07,40% - 49.9%\r
19049,Dallas County,IA,67.68,60% - 69.9%\r
19051,Davis County,IA,17.54,0% - 19.9%\r
19053,Decatur County,IA,18.76,0% - 19.9%\r
19055,Delaware County,IA,26.43,20% - 29.9%\r
19057,Des Moines County,IA,29.44,20% - 29.9%\r
19059,Dickinson County,IA,36.4,30% - 39.9%\r
19061,Dubuque County,IA,51.85,50% - 59.9%\r
19063,Emmet County,IA,27.75,20% - 29.9%\r
19065,Fayette County,IA,35.73,30% - 39.9%\r
19067,Floyd County,IA,34.94,30% - 39.9%\r
19069,Franklin County,IA,39.12,30% - 39.9%\r
19071,Fremont County,IA,27.1,20% - 29.9%\r
19073,Greene County,IA,39.03,30% - 39.9%\r
19075,Grundy County,IA,47.48,40% - 49.9%\r
19077,Guthrie County,IA,37.93,30% - 39.9%\r
19079,Hamilton County,IA,46.27,40% - 49.9%\r
19081,Hancock County,IA,23.62,20% - 29.9%\r
19083,Hardin County,IA,33.97,30% - 39.9%\r
19085,Harrison County,IA,35.64,30% - 39.9%\r
19087,Henry County,IA,33.92,30% - 39.9%\r
19089,Howard County,IA,31.08,30% - 39.9%\r
19091,Humboldt County,IA,23.8,20% - 29.9%\r
19093,Ida County,IA,22.2,20% - 29.9%\r
19095,Iowa County,IA,45.56,40% - 49.9%\r
19097,Jackson County,IA,26.09,20% - 29.9%\r
19099,Jasper County,IA,42,40% - 49.9%\r
19101,Jefferson County,IA,39.94,30% - 39.9%\r
19103,Johnson County,IA,79.22,70% or More\r
19105,Jones County,IA,38.31,30% - 39.9%\r
19107,Keokuk County,IA,17.38,0% - 19.9%\r
19109,Kossuth County,IA,25.11,20% - 29.9%\r
19111,Lee County,IA,28.18,20% - 29.9%\r
19113,Linn County,IA,63,60% - 69.9%\r
19115,Louisa County,IA,30.92,30% - 39.9%\r
19117,Lucas County,IA,20.76,20% - 29.9%\r
19119,Lyon County,IA,16.77,0% - 19.9%\r
19121,Madison County,IA,39.71,30% - 39.9%\r
19123,Mahaska County,IA,20.96,20% - 29.9%\r
19125,Marion County,IA,35.59,30% - 39.9%\r
19127,Marshall County,IA,57.51,50% - 59.9%\r
19129,Mills County,IA,47.88,40% - 49.9%\r
19131,Mitchell County,IA,30.18,30% - 39.9%\r
19133,Monona County,IA,28.55,20% - 29.9%\r
19135,Monroe County,IA,20.03,20% - 29.9%\r
19137,Montgomery County,IA,36.49,30% - 39.9%\r
19139,Muscatine County,IA,48.82,40% - 49.9%\r
19141,O'Brien County,IA,26.41,20% - 29.9%\r
19143,Osceola County,IA,19.03,0% - 19.9%\r
19145,Page County,IA,34.56,30% - 39.9%\r
19147,Palo Alto County,IA,26.5,20% - 29.9%\r
19149,Plymouth County,IA,31.87,30% - 39.9%\r
19151,Pocahontas County,IA,21.14,20% - 29.9%\r
19153,Polk County,IA,66.37,60% - 69.9%\r
19155,Pottawattamie County,IA,52.68,50% - 59.9%\r
19157,Poweshiek County,IA,44.03,40% - 49.9%\r
19159,Ringgold County,IA,27.27,20% - 29.9%\r
19161,Sac County,IA,19.31,0% - 19.9%\r
19163,Scott County,IA,52.4,50% - 59.9%\r
19165,Shelby County,IA,33.82,30% - 39.9%\r
19167,Sioux County,IA,18.53,0% - 19.9%\r
19169,Story County,IA,72.12,70% or More\r
19171,Tama County,IA,53.62,50% - 59.9%\r
19173,Taylor County,IA,20.65,20% - 29.9%\r
19175,Union County,IA,31.13,30% - 39.9%\r
19177,Van Buren County,IA,14.53,0% - 19.9%\r
19179,Wapello County,IA,31.23,30% - 39.9%\r
19181,Warren County,IA,51.84,50% - 59.9%\r
19183,Washington County,IA,41.22,40% - 49.9%\r
19185,Wayne County,IA,16.42,0% - 19.9%\r
19187,Webster County,IA,37.47,30% - 39.9%\r
19189,Winnebago County,IA,29.68,20% - 29.9%\r
19191,Winneshiek County,IA,50.07,50% - 59.9%\r
19193,Woodbury County,IA,45.4,40% - 49.9%\r
19195,Worth County,IA,33.33,30% - 39.9%\r
19197,Wright County,IA,40.76,40% - 49.9%\r
16001,Ada County,ID,0,No Data\r
16003,Adams County,ID,0,No Data\r
16005,Bannock County,ID,0,No Data\r
16007,Bear Lake County,ID,0,No Data\r
16009,Benewah County,ID,0,No Data\r
16011,Bingham County,ID,0,No Data\r
16013,Blaine County,ID,0,No Data\r
16015,Boise County,ID,0,No Data\r
16017,Bonner County,ID,0,No Data\r
16019,Bonneville County,ID,0,No Data\r
16021,Boundary County,ID,0,No Data\r
16023,Butte County,ID,0,No Data\r
16025,Camas County,ID,0,No Data\r
16027,Canyon County,ID,0,No Data\r
16029,Caribou County,ID,0,No Data\r
16031,Cassia County,ID,0,No Data\r
16033,Clark County,ID,0,No Data\r
16035,Clearwater County,ID,0,No Data\r
16037,Custer County,ID,0,No Data\r
16039,Elmore County,ID,0,No Data\r
16041,Franklin County,ID,0,No Data\r
16043,Fremont County,ID,0,No Data\r
16045,Gem County,ID,0,No Data\r
16047,Gooding County,ID,0,No Data\r
16049,Idaho County,ID,0,No Data\r
16051,Jefferson County,ID,0,No Data\r
16053,Jerome County,ID,0,No Data\r
16055,Kootenai County,ID,0,No Data\r
16057,Latah County,ID,0,No Data\r
16059,Lemhi County,ID,0,No Data\r
16061,Lewis County,ID,0,No Data\r
16063,Lincoln County,ID,0,No Data\r
16065,Madison County,ID,0,No Data\r
16067,Minidoka County,ID,0,No Data\r
16069,Nez Perce County,ID,0,No Data\r
16071,Oneida County,ID,0,No Data\r
16073,Owyhee County,ID,0,No Data\r
16075,Payette County,ID,0,No Data\r
16077,Power County,ID,0,No Data\r
16079,Shoshone County,ID,0,No Data\r
16081,Teton County,ID,0,No Data\r
16083,Twin Falls County,ID,0,No Data\r
NA,Unknown County,ID,0,No Data\r
16085,Valley County,ID,0,No Data\r
16087,Washington County,ID,0,No Data\r
17001,Adams County,IL,30.99,30% - 39.9%\r
17003,Alexander County,IL,11.97,0% - 19.9%\r
17005,Bond County,IL,34.76,30% - 39.9%\r
17007,Boone County,IL,51.62,50% - 59.9%\r
17009,Brown County,IL,24.86,20% - 29.9%\r
17011,Bureau County,IL,44.94,40% - 49.9%\r
17013,Calhoun County,IL,25.36,20% - 29.9%\r
17015,Carroll County,IL,28.44,20% - 29.9%\r
17017,Cass County,IL,47.27,40% - 49.9%\r
17019,Champaign County,IL,68.08,60% - 69.9%\r
17021,Christian County,IL,27.12,20% - 29.9%\r
17023,Clark County,IL,31.55,30% - 39.9%\r
17025,Clay County,IL,15.28,0% - 19.9%\r
17027,Clinton County,IL,43.04,40% - 49.9%\r
17029,Coles County,IL,33.99,30% - 39.9%\r
17031,Cook County,IL,73.67,70% or More\r
17033,Crawford County,IL,30.6,30% - 39.9%\r
17035,Cumberland County,IL,16.34,0% - 19.9%\r
17039,De Witt County,IL,35.62,30% - 39.9%\r
17037,DeKalb County,IL,53.64,50% - 59.9%\r
17041,Douglas County,IL,32.53,30% - 39.9%\r
17043,DuPage County,IL,77.63,70% or More\r
17045,Edgar County,IL,26.39,20% - 29.9%\r
17047,Edwards County,IL,14.9,0% - 19.9%\r
17049,Effingham County,IL,25.75,20% - 29.9%\r
17051,Fayette County,IL,17.38,0% - 19.9%\r
17053,Ford County,IL,43.33,40% - 49.9%\r
17055,Franklin County,IL,24.09,20% - 29.9%\r
17057,Fulton County,IL,39.61,30% - 39.9%\r
17059,Gallatin County,IL,34.08,30% - 39.9%\r
17061,Greene County,IL,22.34,20% - 29.9%\r
17063,Grundy County,IL,46.46,40% - 49.9%\r
17065,Hamilton County,IL,13.57,0% - 19.9%\r
17067,Hancock County,IL,24.29,20% - 29.9%\r
17069,Hardin County,IL,11.33,0% - 19.9%\r
17071,Henderson County,IL,21.09,20% - 29.9%\r
17073,Henry County,IL,49.87,40% - 49.9%\r
17075,Iroquois County,IL,28.71,20% - 29.9%\r
17077,Jackson County,IL,46.49,40% - 49.9%\r
17079,Jasper County,IL,15.47,0% - 19.9%\r
17081,Jefferson County,IL,27.26,20% - 29.9%\r
17083,Jersey County,IL,36.22,30% - 39.9%\r
17085,Jo Daviess County,IL,49.97,40% - 49.9%\r
17087,Johnson County,IL,19.48,0% - 19.9%\r
17089,Kane County,IL,63.79,60% - 69.9%\r
17091,Kankakee County,IL,35.93,30% - 39.9%\r
17093,Kendall County,IL,67.97,60% - 69.9%\r
17095,Knox County,IL,41.02,40% - 49.9%\r
17097,Lake County,IL,81.55,70% or More\r
17099,LaSalle County,IL,46.19,40% - 49.9%\r
17101,Lawrence County,IL,19.39,0% - 19.9%\r
17103,Lee County,IL,44.16,40% - 49.9%\r
17105,Livingston County,IL,30.43,30% - 39.9%\r
17107,Logan County,IL,36.76,30% - 39.9%\r
17115,Macon County,IL,35.34,30% - 39.9%\r
17117,Macoupin County,IL,36.91,30% - 39.9%\r
17119,Madison County,IL,52.14,50% - 59.9%\r
17121,Marion County,IL,23.1,20% - 29.9%\r
17123,Marshall County,IL,42.16,40% - 49.9%\r
17125,Mason County,IL,26.73,20% - 29.9%\r
17127,Massac County,IL,15.97,0% - 19.9%\r
17109,McDonough County,IL,48.29,40% - 49.9%\r
17111,McHenry County,IL,59.54,50% - 59.9%\r
17113,McLean County,IL,67.19,60% - 69.9%\r
17129,Menard County,IL,41.18,40% - 49.9%\r
17131,Mercer County,IL,45.33,40% - 49.9%\r
17133,Monroe County,IL,52.46,50% - 59.9%\r
17135,Montgomery County,IL,34.69,30% - 39.9%\r
17137,Morgan County,IL,41.2,40% - 49.9%\r
17139,Moultrie County,IL,20.26,20% - 29.9%\r
17141,Ogle County,IL,45.17,40% - 49.9%\r
17143,Peoria County,IL,51.88,50% - 59.9%\r
17145,Perry County,IL,25.03,20% - 29.9%\r
17147,Piatt County,IL,51.08,50% - 59.9%\r
17149,Pike County,IL,17,0% - 19.9%\r
17151,Pope County,IL,19.11,0% - 19.9%\r
17153,Pulaski County,IL,24.24,20% - 29.9%\r
17155,Putnam County,IL,39.44,30% - 39.9%\r
17157,Randolph County,IL,30.29,30% - 39.9%\r
17159,Richland County,IL,26.41,20% - 29.9%\r
17161,Rock Island County,IL,53.78,50% - 59.9%\r
17165,Saline County,IL,26.27,20% - 29.9%\r
17167,Sangamon County,IL,55.02,50% - 59.9%\r
17169,Schuyler County,IL,33.26,30% - 39.9%\r
17171,Scott County,IL,18.27,0% - 19.9%\r
17173,Shelby County,IL,16.69,0% - 19.9%\r
17163,St. Clair County,IL,55.01,50% - 59.9%\r
17175,Stark County,IL,31.57,30% - 39.9%\r
17177,Stephenson County,IL,38.22,30% - 39.9%\r
17179,Tazewell County,IL,45.9,40% - 49.9%\r
17181,Union County,IL,34.69,30% - 39.9%\r
17183,Vermilion County,IL,21.81,20% - 29.9%\r
17185,Wabash County,IL,24.74,20% - 29.9%\r
17187,Warren County,IL,37.27,30% - 39.9%\r
17189,Washington County,IL,42.4,40% - 49.9%\r
17191,Wayne County,IL,16.99,0% - 19.9%\r
17193,White County,IL,23.06,20% - 29.9%\r
17195,Whiteside County,IL,47.03,40% - 49.9%\r
17197,Will County,IL,65.32,60% - 69.9%\r
17199,Williamson County,IL,37.71,30% - 39.9%\r
17201,Winnebago County,IL,45.23,40% - 49.9%\r
17203,Woodford County,IL,38.79,30% - 39.9%\r
18001,Adams County,IN,13.41,0% - 19.9%\r
18003,Allen County,IN,42.32,40% - 49.9%\r
18005,Bartholomew County,IN,52.19,50% - 59.9%\r
18007,Benton County,IN,26.28,20% - 29.9%\r
18009,Blackford County,IN,23.63,20% - 29.9%\r
18011,Boone County,IN,72.39,70% or More\r
18013,Brown County,IN,29.75,20% - 29.9%\r
18015,Carroll County,IN,16.59,0% - 19.9%\r
18017,Cass County,IN,32.26,30% - 39.9%\r
18019,Clark County,IN,52.54,50% - 59.9%\r
18021,Clay County,IN,33.06,30% - 39.9%\r
18023,Clinton County,IN,32.27,30% - 39.9%\r
18025,Crawford County,IN,21.92,20% - 29.9%\r
18027,Daviess County,IN,14.37,0% - 19.9%\r
18029,Dearborn County,IN,34.05,30% - 39.9%\r
18031,Decatur County,IN,26.36,20% - 29.9%\r
18033,DeKalb County,IN,25.01,20% - 29.9%\r
18035,Delaware County,IN,38.25,30% - 39.9%\r
18037,Dubois County,IN,35.53,30% - 39.9%\r
18039,Elkhart County,IN,32.56,30% - 39.9%\r
18041,Fayette County,IN,16.88,0% - 19.9%\r
18043,Floyd County,IN,50.18,50% - 59.9%\r
18045,Fountain County,IN,24.01,20% - 29.9%\r
18047,Franklin County,IN,18.47,0% - 19.9%\r
18049,Fulton County,IN,19.11,0% - 19.9%\r
18051,Gibson County,IN,31.54,30% - 39.9%\r
18053,Grant County,IN,23.37,20% - 29.9%\r
18055,Greene County,IN,25.4,20% - 29.9%\r
18057,Hamilton County,IN,69.79,60% - 69.9%\r
18059,Hancock County,IN,59.71,50% - 59.9%\r
18061,Harrison County,IN,38.19,30% - 39.9%\r
18063,Hendricks County,IN,66.87,60% - 69.9%\r
18065,Henry County,IN,31.54,30% - 39.9%\r
18067,Howard County,IN,30.26,30% - 39.9%\r
18069,Huntington County,IN,30.83,30% - 39.9%\r
18071,Jackson County,IN,42.73,40% - 49.9%\r
18073,Jasper County,IN,30.54,30% - 39.9%\r
18075,Jay County,IN,18.24,0% - 19.9%\r
18077,Jefferson County,IN,36.41,30% - 39.9%\r
18079,Jennings County,IN,25.23,20% - 29.9%\r
18081,Johnson County,IN,47.24,40% - 49.9%\r
18083,Knox County,IN,29.61,20% - 29.9%\r
18085,Kosciusko County,IN,23.9,20% - 29.9%\r
18087,LaGrange County,IN,7.83,0% - 19.9%\r
18089,Lake County,IN,45.96,40% - 49.9%\r
18091,LaPorte County,IN,41.25,40% - 49.9%\r
18093,Lawrence County,IN,26.15,20% - 29.9%\r
18095,Madison County,IN,36.26,30% - 39.9%\r
18097,Marion County,IN,48.67,40% - 49.9%\r
18099,Marshall County,IN,37.34,30% - 39.9%\r
18101,Martin County,IN,20.51,20% - 29.9%\r
18103,Miami County,IN,19.25,0% - 19.9%\r
18105,Monroe County,IN,62.07,60% - 69.9%\r
18107,Montgomery County,IN,29.57,20% - 29.9%\r
18109,Morgan County,IN,40.1,40% - 49.9%\r
18111,Newton County,IN,16.07,0% - 19.9%\r
18113,Noble County,IN,23.88,20% - 29.9%\r
18115,Ohio County,IN,36.41,30% - 39.9%\r
18117,Orange County,IN,34.68,30% - 39.9%\r
18119,Owen County,IN,25.94,20% - 29.9%\r
18121,Parke County,IN,16.97,0% - 19.9%\r
18123,Perry County,IN,45.74,40% - 49.9%\r
18125,Pike County,IN,31.48,30% - 39.9%\r
18127,Porter County,IN,46.32,40% - 49.9%\r
18129,Posey County,IN,30.84,30% - 39.9%\r
18131,Pulaski County,IN,27.33,20% - 29.9%\r
18133,Putnam County,IN,24.23,20% - 29.9%\r
18135,Randolph County,IN,21.93,20% - 29.9%\r
18137,Ripley County,IN,25.31,20% - 29.9%\r
18139,Rush County,IN,25.71,20% - 29.9%\r
18143,Scott County,IN,29.11,20% - 29.9%\r
18145,Shelby County,IN,40.12,40% - 49.9%\r
18147,Spencer County,IN,28,20% - 29.9%\r
18141,St. Joseph County,IN,47.57,40% - 49.9%\r
18149,Starke County,IN,17.46,0% - 19.9%\r
18151,Steuben County,IN,26.42,20% - 29.9%\r
18153,Sullivan County,IN,31.96,30% - 39.9%\r
18155,Switzerland County,IN,11.76,0% - 19.9%\r
18157,Tippecanoe County,IN,48.21,40% - 49.9%\r
18159,Tipton County,IN,27.48,20% - 29.9%\r
18161,Union County,IN,25.46,20% - 29.9%\r
18163,Vanderburgh County,IN,45.79,40% - 49.9%\r
18165,Vermillion County,IN,25.68,20% - 29.9%\r
18167,Vigo County,IN,36.46,30% - 39.9%\r
18169,Wabash County,IN,19.86,0% - 19.9%\r
18171,Warren County,IN,31.8,30% - 39.9%\r
18173,Warrick County,IN,53.13,50% - 59.9%\r
18175,Washington County,IN,23.71,20% - 29.9%\r
18177,Wayne County,IN,34.82,30% - 39.9%\r
18179,Wells County,IN,22.29,20% - 29.9%\r
18181,White County,IN,33.11,30% - 39.9%\r
18183,Whitley County,IN,23.66,20% - 29.9%\r
20001,Allen County,KS,28.08,20% - 29.9%\r
20003,Anderson County,KS,23.12,20% - 29.9%\r
20005,Atchison County,KS,38.23,30% - 39.9%\r
20007,Barber County,KS,16.72,0% - 19.9%\r
20009,Barton County,KS,24.46,20% - 29.9%\r
20011,Bourbon County,KS,24.36,20% - 29.9%\r
20013,Brown County,KS,58.14,50% - 59.9%\r
20015,Butler County,KS,38,30% - 39.9%\r
20017,Chase County,KS,29.12,20% - 29.9%\r
20019,Chautauqua County,KS,12.95,0% - 19.9%\r
20021,Cherokee County,KS,33.92,30% - 39.9%\r
20023,Cheyenne County,KS,22.29,20% - 29.9%\r
20025,Clark County,KS,25.56,20% - 29.9%\r
20027,Clay County,KS,40.18,40% - 49.9%\r
20029,Cloud County,KS,28.98,20% - 29.9%\r
20031,Coffey County,KS,33.76,30% - 39.9%\r
20033,Comanche County,KS,26.98,20% - 29.9%\r
20035,Cowley County,KS,35.25,30% - 39.9%\r
20037,Crawford County,KS,43.33,40% - 49.9%\r
20039,Decatur County,KS,5.08,0% - 19.9%\r
20041,Dickinson County,KS,27.92,20% - 29.9%\r
20043,Doniphan County,KS,28.87,20% - 29.9%\r
20045,Douglas County,KS,77.66,70% or More\r
20047,Edwards County,KS,27.43,20% - 29.9%\r
20049,Elk County,KS,18.14,0% - 19.9%\r
20051,Ellis County,KS,40.49,40% - 49.9%\r
20053,Ellsworth County,KS,40.1,40% - 49.9%\r
20055,Finney County,KS,53.3,50% - 59.9%\r
20057,Ford County,KS,40.98,40% - 49.9%\r
20059,Franklin County,KS,34.25,30% - 39.9%\r
20061,Geary County,KS,72.71,70% or More\r
20063,Gove County,KS,25.46,20% - 29.9%\r
20065,Graham County,KS,22.99,20% - 29.9%\r
20067,Grant County,KS,39.7,30% - 39.9%\r
20069,Gray County,KS,24.17,20% - 29.9%\r
20071,Greeley County,KS,28.3,20% - 29.9%\r
20073,Greenwood County,KS,26,20% - 29.9%\r
20075,Hamilton County,KS,25.54,20% - 29.9%\r
20077,Harper County,KS,28.89,20% - 29.9%\r
20079,Harvey County,KS,38.35,30% - 39.9%\r
20081,Haskell County,KS,26.25,20% - 29.9%\r
20083,Hodgeman County,KS,20.28,20% - 29.9%\r
20085,Jackson County,KS,52.93,50% - 59.9%\r
20087,Jefferson County,KS,36.85,30% - 39.9%\r
20089,Jewell County,KS,22.75,20% - 29.9%\r
20091,Johnson County,KS,79.67,70% or More\r
20093,Kearny County,KS,35.2,30% - 39.9%\r
20095,Kingman County,KS,22.47,20% - 29.9%\r
20097,Kiowa County,KS,28.04,20% - 29.9%\r
20099,Labette County,KS,41.6,40% - 49.9%\r
20101,Lane County,KS,18.63,0% - 19.9%\r
20103,Leavenworth County,KS,50.02,50% - 59.9%\r
20105,Lincoln County,KS,15.73,0% - 19.9%\r
20107,Linn County,KS,14.83,0% - 19.9%\r
20109,Logan County,KS,20.75,20% - 29.9%\r
20111,Lyon County,KS,53.81,50% - 59.9%\r
20115,Marion County,KS,36.21,30% - 39.9%\r
20117,Marshall County,KS,46.34,40% - 49.9%\r
20113,McPherson County,KS,37.37,30% - 39.9%\r
20119,Meade County,KS,30.46,30% - 39.9%\r
20121,Miami County,KS,37.46,30% - 39.9%\r
20123,Mitchell County,KS,36.82,30% - 39.9%\r
20125,Montgomery County,KS,31.7,30% - 39.9%\r
20127,Morris County,KS,51.56,50% - 59.9%\r
20129,Morton County,KS,30.4,30% - 39.9%\r
20131,Nemaha County,KS,28.9,20% - 29.9%\r
20133,Neosho County,KS,25.44,20% - 29.9%\r
20135,Ness County,KS,41.92,40% - 49.9%\r
20137,Norton County,KS,22.71,20% - 29.9%\r
20139,Osage County,KS,32.67,30% - 39.9%\r
20141,Osborne County,KS,12.86,0% - 19.9%\r
20143,Ottawa County,KS,22.34,20% - 29.9%\r
20145,Pawnee County,KS,28.18,20% - 29.9%\r
20147,Phillips County,KS,14.32,0% - 19.9%\r
20149,Pottawatomie County,KS,31.82,30% - 39.9%\r
20151,Pratt County,KS,34.54,30% - 39.9%\r
20153,Rawlins County,KS,28.14,20% - 29.9%\r
20155,Reno County,KS,32.1,30% - 39.9%\r
20157,Republic County,KS,25.99,20% - 29.9%\r
20159,Rice County,KS,30.03,30% - 39.9%\r
20161,Riley County,KS,57,50% - 59.9%\r
20163,Rooks County,KS,24.11,20% - 29.9%\r
20165,Rush County,KS,22.67,20% - 29.9%\r
20167,Russell County,KS,23.9,20% - 29.9%\r
20169,Saline County,KS,41.02,40% - 49.9%\r
20171,Scott County,KS,34.72,30% - 39.9%\r
20173,Sedgwick County,KS,50.32,50% - 59.9%\r
20175,Seward County,KS,39.59,30% - 39.9%\r
20177,Shawnee County,KS,57.12,50% - 59.9%\r
20179,Sheridan County,KS,12.39,0% - 19.9%\r
20181,Sherman County,KS,24.84,20% - 29.9%\r
20183,Smith County,KS,22.48,20% - 29.9%\r
20185,Stafford County,KS,27.38,20% - 29.9%\r
20187,Stanton County,KS,35.03,30% - 39.9%\r
20189,Stevens County,KS,25.31,20% - 29.9%\r
20191,Sumner County,KS,27.21,20% - 29.9%\r
20193,Thomas County,KS,24.86,20% - 29.9%\r
20195,Trego County,KS,24.71,20% - 29.9%\r
20197,Wabaunsee County,KS,32.27,30% - 39.9%\r
20199,Wallace County,KS,17.65,0% - 19.9%\r
20201,Washington County,KS,33.42,30% - 39.9%\r
20203,Wichita County,KS,36.31,30% - 39.9%\r
20205,Wilson County,KS,21.13,20% - 29.9%\r
20207,Woodson County,KS,21.07,20% - 29.9%\r
20209,Wyandotte County,KS,66.76,60% - 69.9%\r
21001,Adair County,KY,23.78,20% - 29.9%\r
21003,Allen County,KY,23.99,20% - 29.9%\r
21005,Anderson County,KY,44.42,40% - 49.9%\r
21007,Ballard County,KY,17.31,0% - 19.9%\r
21009,Barren County,KY,33.31,30% - 39.9%\r
21011,Bath County,KY,40.09,40% - 49.9%\r
21013,Bell County,KY,26.19,20% - 29.9%\r
21015,Boone County,KY,50.25,50% - 59.9%\r
21017,Bourbon County,KY,50.32,50% - 59.9%\r
21019,Boyd County,KY,34.88,30% - 39.9%\r
21021,Boyle County,KY,44,40% - 49.9%\r
21023,Bracken County,KY,29.78,20% - 29.9%\r
21025,Breathitt County,KY,49.94,40% - 49.9%\r
21027,Breckinridge County,KY,30.73,30% - 39.9%\r
21029,Bullitt County,KY,33.98,30% - 39.9%\r
21031,Butler County,KY,26.19,20% - 29.9%\r
21033,Caldwell County,KY,25.7,20% - 29.9%\r
21035,Calloway County,KY,38.17,30% - 39.9%\r
21037,Campbell County,KY,53.44,50% - 59.9%\r
21039,Carlisle County,KY,14.71,0% - 19.9%\r
21041,Carroll County,KY,36.3,30% - 39.9%\r
21043,Carter County,KY,35.14,30% - 39.9%\r
21045,Casey County,KY,20.07,20% - 29.9%\r
21049,Clark County,KY,44.8,40% - 49.9%\r
21051,Clay County,KY,31.4,30% - 39.9%\r
21053,Clinton County,KY,18.24,0% - 19.9%\r
21055,Crittenden County,KY,22.53,20% - 29.9%\r
21057,Cumberland County,KY,25.86,20% - 29.9%\r
21059,Daviess County,KY,43.48,40% - 49.9%\r
21061,Edmonson County,KY,28.28,20% - 29.9%\r
21063,Elliott County,KY,27.49,20% - 29.9%\r
21065,Estill County,KY,38.59,30% - 39.9%\r
21067,Fayette County,KY,69.8,60% - 69.9%\r
21069,Fleming County,KY,34.16,30% - 39.9%\r
21071,Floyd County,KY,48.24,40% - 49.9%\r
21073,Franklin County,KY,59.55,50% - 59.9%\r
21075,Fulton County,KY,24.51,20% - 29.9%\r
21077,Gallatin County,KY,31.89,30% - 39.9%\r
21079,Garrard County,KY,29.64,20% - 29.9%\r
21081,Grant County,KY,30.4,30% - 39.9%\r
21083,Graves County,KY,26.64,20% - 29.9%\r
21085,Grayson County,KY,35.24,30% - 39.9%\r
21087,Green County,KY,20.99,20% - 29.9%\r
21089,Greenup County,KY,43,40% - 49.9%\r
21091,Hancock County,KY,44.54,40% - 49.9%\r
21093,Hardin County,KY,49.9,40% - 49.9%\r
21095,Harlan County,KY,31.32,30% - 39.9%\r
21097,Harrison County,KY,32.1,30% - 39.9%\r
21099,Hart County,KY,16.56,0% - 19.9%\r
21101,Henderson County,KY,33.54,30% - 39.9%\r
21103,Henry County,KY,34.03,30% - 39.9%\r
21105,Hickman County,KY,20.66,20% - 29.9%\r
21107,Hopkins County,KY,33.68,30% - 39.9%\r
21109,Jackson County,KY,20.39,20% - 29.9%\r
21111,Jefferson County,KY,61.07,60% - 69.9%\r
21113,Jessamine County,KY,48.66,40% - 49.9%\r
21115,Johnson County,KY,34.68,30% - 39.9%\r
21117,Kenton County,KY,49.09,40% - 49.9%\r
21119,Knott County,KY,44.42,40% - 49.9%\r
21121,Knox County,KY,18.86,0% - 19.9%\r
21123,Larue County,KY,25.96,20% - 29.9%\r
21125,Laurel County,KY,26.48,20% - 29.9%\r
21127,Lawrence County,KY,39.93,30% - 39.9%\r
21129,Lee County,KY,38.1,30% - 39.9%\r
21131,Leslie County,KY,34.29,30% - 39.9%\r
21133,Letcher County,KY,42.64,40% - 49.9%\r
21135,Lewis County,KY,23.11,20% - 29.9%\r
21137,Lincoln County,KY,27.8,20% - 29.9%\r
21139,Livingston County,KY,25.75,20% - 29.9%\r
21141,Logan County,KY,31.59,30% - 39.9%\r
21143,Lyon County,KY,37.2,30% - 39.9%\r
21151,Madison County,KY,43.18,40% - 49.9%\r
21153,Magoffin County,KY,41.66,40% - 49.9%\r
21155,Marion County,KY,35.76,30% - 39.9%\r
21157,Marshall County,KY,30.52,30% - 39.9%\r
21159,Martin County,KY,37.06,30% - 39.9%\r
21161,Mason County,KY,34.49,30% - 39.9%\r
21145,McCracken County,KY,40.16,40% - 49.9%\r
21147,McCreary County,KY,21.28,20% - 29.9%\r
21149,McLean County,KY,26.77,20% - 29.9%\r
21163,Meade County,KY,28.07,20% - 29.9%\r
21165,Menifee County,KY,25.28,20% - 29.9%\r
21167,Mercer County,KY,41.31,40% - 49.9%\r
21169,Metcalfe County,KY,22.99,20% - 29.9%\r
21171,Monroe County,KY,26.86,20% - 29.9%\r
21173,Montgomery County,KY,41.77,40% - 49.9%\r
21175,Morgan County,KY,36.28,30% - 39.9%\r
21177,Muhlenberg County,KY,35.98,30% - 39.9%\r
21179,Nelson County,KY,41.7,40% - 49.9%\r
21181,Nicholas County,KY,32.45,30% - 39.9%\r
21183,Ohio County,KY,24.37,20% - 29.9%\r
21185,Oldham County,KY,51.98,50% - 59.9%\r
21187,Owen County,KY,30.12,30% - 39.9%\r
21189,Owsley County,KY,37.46,30% - 39.9%\r
21191,Pendleton County,KY,29.46,20% - 29.9%\r
21193,Perry County,KY,50.26,50% - 59.9%\r
21195,Pike County,KY,43.54,40% - 49.9%\r
21197,Powell County,KY,41.01,40% - 49.9%\r
21199,Pulaski County,KY,29.73,20% - 29.9%\r
21201,Robertson County,KY,29.17,20% - 29.9%\r
21203,Rockcastle County,KY,23.99,20% - 29.9%\r
21205,Rowan County,KY,51.68,50% - 59.9%\r
21207,Russell County,KY,27,20% - 29.9%\r
21209,Scott County,KY,52.84,50% - 59.9%\r
21211,Shelby County,KY,44.34,40% - 49.9%\r
21213,Simpson County,KY,33.2,30% - 39.9%\r
21215,Spencer County,KY,29.95,20% - 29.9%\r
21217,Taylor County,KY,33.02,30% - 39.9%\r
21219,Todd County,KY,21.03,20% - 29.9%\r
21221,Trigg County,KY,24.65,20% - 29.9%\r
21223,Trimble County,KY,36.07,30% - 39.9%\r
21225,Union County,KY,23.06,20% - 29.9%\r
21227,Warren County,KY,38.02,30% - 39.9%\r
21229,Washington County,KY,35.24,30% - 39.9%\r
21231,Wayne County,KY,25.89,20% - 29.9%\r
21233,Webster County,KY,27.69,20% - 29.9%\r
21235,Whitley County,KY,27.65,20% - 29.9%\r
21237,Wolfe County,KY,43.07,40% - 49.9%\r
21239,Woodford County,KY,63.37,60% - 69.9%\r
22001,Acadia Parish,LA,29.95,20% - 29.9%\r
22003,Allen Parish,LA,17.39,0% - 19.9%\r
22005,Ascension Parish,LA,43.03,40% - 49.9%\r
22007,Assumption Parish,LA,26.74,20% - 29.9%\r
22009,Avoyelles Parish,LA,36.25,30% - 39.9%\r
22011,Beauregard Parish,LA,17.28,0% - 19.9%\r
22013,Bienville Parish,LA,24.59,20% - 29.9%\r
22015,Bossier Parish,LA,37.66,30% - 39.9%\r
22017,Caddo Parish,LA,39.82,30% - 39.9%\r
22019,Calcasieu Parish,LA,29.74,20% - 29.9%\r
22021,Caldwell Parish,LA,20.59,20% - 29.9%\r
22023,Cameron Parish,LA,4.33,0% - 19.9%\r
22025,Catahoula Parish,LA,25.38,20% - 29.9%\r
22027,Claiborne Parish,LA,31.23,30% - 39.9%\r
22029,Concordia Parish,LA,35.85,30% - 39.9%\r
22031,De Soto Parish,LA,27.34,20% - 29.9%\r
22033,East Baton Rouge Parish,LA,50.68,50% - 59.9%\r
22035,East Carroll Parish,LA,35.74,30% - 39.9%\r
22037,East Feliciana Parish,LA,31.11,30% - 39.9%\r
22039,Evangeline Parish,LA,27.69,20% - 29.9%\r
22041,Franklin Parish,LA,18.51,0% - 19.9%\r
22043,Grant Parish,LA,22.17,20% - 29.9%\r
22045,Iberia Parish,LA,36.56,30% - 39.9%\r
22047,Iberville Parish,LA,47.55,40% - 49.9%\r
22049,Jackson Parish,LA,20.35,20% - 29.9%\r
22053,Jefferson Davis Parish,LA,18.89,0% - 19.9%\r
22051,Jefferson Parish,LA,65.24,60% - 69.9%\r
22059,La Salle Parish,LA,17.5,0% - 19.9%\r
22055,Lafayette Parish,LA,43.6,40% - 49.9%\r
22057,Lafourche Parish,LA,33.42,30% - 39.9%\r
22061,Lincoln Parish,LA,36.79,30% - 39.9%\r
22063,Livingston Parish,LA,27.22,20% - 29.9%\r
22065,Madison Parish,LA,34.77,30% - 39.9%\r
22067,Morehouse Parish,LA,30.25,30% - 39.9%\r
22069,Natchitoches Parish,LA,29.17,20% - 29.9%\r
22071,Orleans Parish,LA,74.88,70% or More\r
22073,Ouachita Parish,LA,35.06,30% - 39.9%\r
22075,Plaquemines Parish,LA,56.28,50% - 59.9%\r
22077,Pointe Coupee Parish,LA,44.14,40% - 49.9%\r
22079,Rapides Parish,LA,38.96,30% - 39.9%\r
22081,Red River Parish,LA,25.53,20% - 29.9%\r
22083,Richland Parish,LA,24.14,20% - 29.9%\r
22085,Sabine Parish,LA,15.13,0% - 19.9%\r
22087,St. Bernard Parish,LA,44.86,40% - 49.9%\r
22089,St. Charles Parish,LA,50.23,50% - 59.9%\r
22091,St. Helena Parish,LA,30.97,30% - 39.9%\r
22093,St. James Parish,LA,46.4,40% - 49.9%\r
22095,St. John the Baptist Parish,LA,55.82,50% - 59.9%\r
22097,St. Landry Parish,LA,33.23,30% - 39.9%\r
22099,St. Martin Parish,LA,31.66,30% - 39.9%\r
22101,St. Mary Parish,LA,28.93,20% - 29.9%\r
22103,St. Tammany Parish,LA,40.42,40% - 49.9%\r
22105,Tangipahoa Parish,LA,36.25,30% - 39.9%\r
22107,Tensas Parish,LA,42.09,40% - 49.9%\r
22109,Terrebonne Parish,LA,30.69,30% - 39.9%\r
22111,Union Parish,LA,32.78,30% - 39.9%\r
22113,Vermilion Parish,LA,23.5,20% - 29.9%\r
22115,Vernon Parish,LA,32.8,30% - 39.9%\r
22117,Washington Parish,LA,25.42,20% - 29.9%\r
22119,Webster Parish,LA,28.4,20% - 29.9%\r
22121,West Baton Rouge Parish,LA,48.93,40% - 49.9%\r
22123,West Carroll Parish,LA,16.08,0% - 19.9%\r
22125,West Feliciana Parish,LA,68.56,60% - 69.9%\r
22127,Winn Parish,LA,21.58,20% - 29.9%\r
25001,Barnstable County,MA,1.26,0% - 19.9%\r
25003,Berkshire County,MA,71.36,70% or More\r
25005,Bristol County,MA,65.4,60% - 69.9%\r
25007,Dukes County,MA,2.49,0% - 19.9%\r
25009,Essex County,MA,82.51,70% or More\r
25011,Franklin County,MA,78,70% or More\r
25013,Hampden County,MA,63.88,60% - 69.9%\r
25015,Hampshire County,MA,85.44,70% or More\r
25017,Middlesex County,MA,94.02,70% or More\r
25019,Nantucket County,MA,1.38,0% - 19.9%\r
25021,Norfolk County,MA,88.02,70% or More\r
25023,Plymouth County,MA,70.65,70% or More\r
25025,Suffolk County,MA,80.83,70% or More\r
25027,Worcester County,MA,77.93,70% or More\r
24001,Allegany County,MD,39.9,30% - 39.9%\r
24003,Anne Arundel County,MD,81.74,70% or More\r
24510,Baltimore city,MD,59.68,50% - 59.9%\r
24005,Baltimore County,MD,71.45,70% or More\r
24009,Calvert County,MD,68.79,60% - 69.9%\r
24011,Caroline County,MD,41.98,40% - 49.9%\r
24013,Carroll County,MD,68.96,60% - 69.9%\r
24015,Cecil County,MD,46.12,40% - 49.9%\r
24017,Charles County,MD,68.01,60% - 69.9%\r
24019,Dorchester County,MD,38.51,30% - 39.9%\r
24021,Frederick County,MD,77.55,70% or More\r
24023,Garrett County,MD,27.56,20% - 29.9%\r
24025,Harford County,MD,63.39,60% - 69.9%\r
24027,Howard County,MD,92.92,70% or More\r
24029,Kent County,MD,56.62,50% - 59.9%\r
24031,Montgomery County,MD,99.99,70% or More\r
24033,Prince George's County,MD,86.06,70% or More\r
24035,Queen Anne's County,MD,53.18,50% - 59.9%\r
24039,Somerset County,MD,33.95,30% - 39.9%\r
24037,St. Mary's County,MD,59.09,50% - 59.9%\r
24041,Talbot County,MD,66.29,60% - 69.9%\r
24043,Washington County,MD,45.71,40% - 49.9%\r
24045,Wicomico County,MD,43.81,40% - 49.9%\r
24047,Worcester County,MD,52.32,50% - 59.9%\r
23001,Androscoggin County,ME,62.47,60% - 69.9%\r
23003,Aroostook County,ME,57.95,50% - 59.9%\r
23005,Cumberland County,ME,89.13,70% or More\r
23007,Franklin County,ME,52.91,50% - 59.9%\r
23009,Hancock County,ME,67.74,60% - 69.9%\r
23011,Kennebec County,ME,60.1,60% - 69.9%\r
23013,Knox County,ME,71.4,70% or More\r
23015,Lincoln County,ME,73.29,70% or More\r
23017,Oxford County,ME,58.72,50% - 59.9%\r
23019,Penobscot County,ME,61.83,60% - 69.9%\r
23021,Piscataquis County,ME,46.32,40% - 49.9%\r
23023,Sagadahoc County,ME,70.59,70% or More\r
23025,Somerset County,ME,43.26,40% - 49.9%\r
23027,Waldo County,ME,58.2,50% - 59.9%\r
23029,Washington County,ME,54.31,50% - 59.9%\r
23031,York County,ME,74.91,70% or More\r
26001,Alcona County,MI,16.24,0% - 19.9%\r
26003,Alger County,MI,38.18,30% - 39.9%\r
26005,Allegan County,MI,34.69,30% - 39.9%\r
26007,Alpena County,MI,25.47,20% - 29.9%\r
26009,Antrim County,MI,33.61,30% - 39.9%\r
26011,Arenac County,MI,15.46,0% - 19.9%\r
26013,Baraga County,MI,21.38,20% - 29.9%\r
26015,Barry County,MI,31.11,30% - 39.9%\r
26017,Bay County,MI,35.43,30% - 39.9%\r
26019,Benzie County,MI,41.23,40% - 49.9%\r
26021,Berrien County,MI,35.98,30% - 39.9%\r
26023,Branch County,MI,20.4,20% - 29.9%\r
26025,Calhoun County,MI,36.3,30% - 39.9%\r
26027,Cass County,MI,24.84,20% - 29.9%\r
26029,Charlevoix County,MI,45.8,40% - 49.9%\r
26031,Cheboygan County,MI,27.86,20% - 29.9%\r
26033,Chippewa County,MI,62.78,60% - 69.9%\r
26035,Clare County,MI,21.41,20% - 29.9%\r
26037,Clinton County,MI,44.66,40% - 49.9%\r
26039,Crawford County,MI,32.6,30% - 39.9%\r
26041,Delta County,MI,27.66,20% - 29.9%\r
26043,Dickinson County,MI,34.11,30% - 39.9%\r
26045,Eaton County,MI,43.41,40% - 49.9%\r
26047,Emmet County,MI,55.2,50% - 59.9%\r
26049,Genesee County,MI,31.19,30% - 39.9%\r
26051,Gladwin County,MI,18.57,0% - 19.9%\r
26053,Gogebic County,MI,31.45,30% - 39.9%\r
26055,Grand Traverse County,MI,57.43,50% - 59.9%\r
26057,Gratiot County,MI,24.16,20% - 29.9%\r
26059,Hillsdale County,MI,17.79,0% - 19.9%\r
26061,Houghton County,MI,30.24,30% - 39.9%\r
26063,Huron County,MI,23.71,20% - 29.9%\r
26065,Ingham County,MI,53.53,50% - 59.9%\r
26067,Ionia County,MI,27.03,20% - 29.9%\r
26069,Iosco County,MI,24.93,20% - 29.9%\r
26071,Iron County,MI,24.26,20% - 29.9%\r
26073,Isabella County,MI,38.57,30% - 39.9%\r
26075,Jackson County,MI,31.15,30% - 39.9%\r
26077,Kalamazoo County,MI,53.81,50% - 59.9%\r
26079,Kalkaska County,MI,24.35,20% - 29.9%\r
26081,Kent County,MI,47.65,40% - 49.9%\r
26083,Keweenaw County,MI,20.17,20% - 29.9%\r
26085,Lake County,MI,18.92,0% - 19.9%\r
26087,Lapeer County,MI,22.81,20% - 29.9%\r
26089,Leelanau County,MI,71.88,70% or More\r
26091,Lenawee County,MI,33.4,30% - 39.9%\r
26093,Livingston County,MI,41.94,40% - 49.9%\r
26095,Luce County,MI,25.58,20% - 29.9%\r
26097,Mackinac County,MI,35.78,30% - 39.9%\r
26099,Macomb County,MI,35.61,30% - 39.9%\r
26101,Manistee County,MI,35.95,30% - 39.9%\r
26103,Marquette County,MI,51.58,50% - 59.9%\r
26105,Mason County,MI,37.5,30% - 39.9%\r
26107,Mecosta County,MI,21.52,20% - 29.9%\r
26109,Menominee County,MI,31.43,30% - 39.9%\r
26111,Midland County,MI,46.57,40% - 49.9%\r
26113,Missaukee County,MI,18.01,0% - 19.9%\r
26115,Monroe County,MI,36.86,30% - 39.9%\r
26117,Montcalm County,MI,19.94,0% - 19.9%\r
26119,Montmorency County,MI,21.25,20% - 29.9%\r
26121,Muskegon County,MI,34.59,30% - 39.9%\r
26123,Newaygo County,MI,20.87,20% - 29.9%\r
26125,Oakland County,MI,55.8,50% - 59.9%\r
26127,Oceana County,MI,29.4,20% - 29.9%\r
26129,Ogemaw County,MI,15.24,0% - 19.9%\r
26131,Ontonagon County,MI,27.67,20% - 29.9%\r
26133,Osceola County,MI,15.96,0% - 19.9%\r
26135,Oscoda County,MI,12.34,0% - 19.9%\r
26137,Otsego County,MI,30.72,30% - 39.9%\r
26139,Ottawa County,MI,45.6,40% - 49.9%\r
26141,Presque Isle County,MI,19.29,0% - 19.9%\r
26143,Roscommon County,MI,19.11,0% - 19.9%\r
26145,Saginaw County,MI,32.46,30% - 39.9%\r
26151,Sanilac County,MI,16.13,0% - 19.9%\r
26153,Schoolcraft County,MI,33.27,30% - 39.9%\r
26155,Shiawassee County,MI,30.79,30% - 39.9%\r
26147,St. Clair County,MI,25.77,20% - 29.9%\r
26149,St. Joseph County,MI,25.33,20% - 29.9%\r
26157,Tuscola County,MI,23.52,20% - 29.9%\r
26159,Van Buren County,MI,36.58,30% - 39.9%\r
26161,Washtenaw County,MI,70.09,70% or More\r
26163,Wayne County,MI,39.19,30% - 39.9%\r
26165,Wexford County,MI,29.33,20% - 29.9%\r
27001,Aitkin County,MN,40.28,40% - 49.9%\r
27003,Anoka County,MN,52.31,50% - 59.9%\r
27005,Becker County,MN,34.47,30% - 39.9%\r
27007,Beltrami County,MN,70.21,70% or More\r
27009,Benton County,MN,35.6,30% - 39.9%\r
27011,Big Stone County,MN,45.6,40% - 49.9%\r
27013,Blue Earth County,MN,54.92,50% - 59.9%\r
27015,Brown County,MN,49.02,40% - 49.9%\r
27017,Carlton County,MN,49.51,40% - 49.9%\r
27019,Carver County,MN,61.25,60% - 69.9%\r
27021,Cass County,MN,43.72,40% - 49.9%\r
27023,Chippewa County,MN,36.93,30% - 39.9%\r
27025,Chisago County,MN,39.55,30% - 39.9%\r
27027,Clay County,MN,65.62,60% - 69.9%\r
27029,Clearwater County,MN,23.8,20% - 29.9%\r
27031,Cook County,MN,62.14,60% - 69.9%\r
27033,Cottonwood County,MN,39.08,30% - 39.9%\r
27035,Crow Wing County,MN,37.2,30% - 39.9%\r
27037,Dakota County,MN,64.28,60% - 69.9%\r
27039,Dodge County,MN,50.15,50% - 59.9%\r
27041,Douglas County,MN,39.16,30% - 39.9%\r
27043,Faribault County,MN,36.98,30% - 39.9%\r
27045,Fillmore County,MN,53.07,50% - 59.9%\r
27047,Freeborn County,MN,38.35,30% - 39.9%\r
27049,Goodhue County,MN,53.99,50% - 59.9%\r
27051,Grant County,MN,38.02,30% - 39.9%\r
27053,Hennepin County,MN,69.69,60% - 69.9%\r
27055,Houston County,MN,42.32,40% - 49.9%\r
27057,Hubbard County,MN,29.33,20% - 29.9%\r
27059,Isanti County,MN,30.07,30% - 39.9%\r
27061,Itasca County,MN,38.39,30% - 39.9%\r
27063,Jackson County,MN,32.11,30% - 39.9%\r
27065,Kanabec County,MN,31.64,30% - 39.9%\r
27067,Kandiyohi County,MN,34.7,30% - 39.9%\r
27069,Kittson County,MN,37.5,30% - 39.9%\r
27071,Koochiching County,MN,31.8,30% - 39.9%\r
27073,Lac qui Parle County,MN,43.26,40% - 49.9%\r
27075,Lake County,MN,55.98,50% - 59.9%\r
27077,Lake of the Woods County,MN,33.47,30% - 39.9%\r
27079,Le Sueur County,MN,37.26,30% - 39.9%\r
27081,Lincoln County,MN,40.18,40% - 49.9%\r
27083,Lyon County,MN,43.38,40% - 49.9%\r
27087,Mahnomen County,MN,47.53,40% - 49.9%\r
27089,Marshall County,MN,35.24,30% - 39.9%\r
27091,Martin County,MN,32.81,30% - 39.9%\r
27085,McLeod County,MN,38.05,30% - 39.9%\r
27093,Meeker County,MN,27.45,20% - 29.9%\r
27095,Mille Lacs County,MN,39.82,30% - 39.9%\r
27097,Morrison County,MN,28.84,20% - 29.9%\r
27099,Mower County,MN,53.62,50% - 59.9%\r
27101,Murray County,MN,36.81,30% - 39.9%\r
27103,Nicollet County,MN,61.65,60% - 69.9%\r
27105,Nobles County,MN,46.19,40% - 49.9%\r
27107,Norman County,MN,46.25,40% - 49.9%\r
27109,Olmsted County,MN,72.27,70% or More\r
27111,Otter Tail County,MN,35.1,30% - 39.9%\r
27115,Pine County,MN,29.48,20% - 29.9%\r
27117,Pipestone County,MN,35.35,30% - 39.9%\r
27119,Polk County,MN,46.25,40% - 49.9%\r
27121,Pope County,MN,41.98,40% - 49.9%\r
27123,Ramsey County,MN,70.12,70% or More\r
27125,Red Lake County,MN,45.97,40% - 49.9%\r
27127,Redwood County,MN,35.34,30% - 39.9%\r
27129,Renville County,MN,34.78,30% - 39.9%\r
27131,Rice County,MN,58.67,50% - 59.9%\r
27133,Rock County,MN,41.28,40% - 49.9%\r
27135,Roseau County,MN,32.82,30% - 39.9%\r
27139,Scott County,MN,62.85,60% - 69.9%\r
27141,Sherburne County,MN,34.83,30% - 39.9%\r
27143,Sibley County,MN,29.35,20% - 29.9%\r
27137,St. Louis County,MN,56.87,50% - 59.9%\r
27145,Stearns County,MN,45.98,40% - 49.9%\r
27147,Steele County,MN,47.11,40% - 49.9%\r
27149,Stevens County,MN,45.45,40% - 49.9%\r
27151,Swift County,MN,41.43,40% - 49.9%\r
27153,Todd County,MN,24.34,20% - 29.9%\r
27155,Traverse County,MN,46.67,40% - 49.9%\r
27157,Wabasha County,MN,57.27,50% - 59.9%\r
27159,Wadena County,MN,22.03,20% - 29.9%\r
27163,Washington County,MN,64.38,60% - 69.9%\r
27165,Watonwan County,MN,50.3,50% - 59.9%\r
27167,Wilkin County,MN,41.48,40% - 49.9%\r
27169,Winona County,MN,61.06,60% - 69.9%\r
27171,Wright County,MN,41.34,40% - 49.9%\r
27173,Yellow Medicine County,MN,34.29,30% - 39.9%\r
29001,Adair County,MO,33.61,30% - 39.9%\r
29003,Andrew County,MO,20.1,20% - 29.9%\r
29005,Atchison County,MO,33.51,30% - 39.9%\r
29007,Audrain County,MO,22.58,20% - 29.9%\r
29009,Barry County,MO,30.55,30% - 39.9%\r
29011,Barton County,MO,13.88,0% - 19.9%\r
29013,Bates County,MO,21.69,20% - 29.9%\r
29015,Benton County,MO,24.63,20% - 29.9%\r
29017,Bollinger County,MO,14.46,0% - 19.9%\r
29019,Boone County,MO,64.25,60% - 69.9%\r
29021,Buchanan County,MO,26.91,20% - 29.9%\r
29023,Butler County,MO,18.66,0% - 19.9%\r
29025,Caldwell County,MO,25.13,20% - 29.9%\r
29027,Callaway County,MO,34.35,30% - 39.9%\r
29029,Camden County,MO,25.74,20% - 29.9%\r
29031,Cape Girardeau County,MO,36.14,30% - 39.9%\r
29033,Carroll County,MO,17.46,0% - 19.9%\r
29035,Carter County,MO,16.63,0% - 19.9%\r
29037,Cass County,MO,44.6,40% - 49.9%\r
29039,Cedar County,MO,12.04,0% - 19.9%\r
29041,Chariton County,MO,18.23,0% - 19.9%\r
29043,Christian County,MO,38.47,30% - 39.9%\r
29045,Clark County,MO,16.01,0% - 19.9%\r
29047,Clay County,MO,57.42,50% - 59.9%\r
29049,Clinton County,MO,33.87,30% - 39.9%\r
29051,Cole County,MO,42.36,40% - 49.9%\r
29053,Cooper County,MO,36.04,30% - 39.9%\r
29055,Crawford County,MO,20.05,20% - 29.9%\r
29057,Dade County,MO,19.19,0% - 19.9%\r
29059,Dallas County,MO,18.23,0% - 19.9%\r
29061,Daviess County,MO,16.51,0% - 19.9%\r
29063,DeKalb County,MO,15.08,0% - 19.9%\r
29065,Dent County,MO,17.97,0% - 19.9%\r
29067,Douglas County,MO,10.73,0% - 19.9%\r
29069,Dunklin County,MO,24.23,20% - 29.9%\r
29071,Franklin County,MO,39.54,30% - 39.9%\r
29073,Gasconade County,MO,33.12,30% - 39.9%\r
29075,Gentry County,MO,31.31,30% - 39.9%\r
29077,Greene County,MO,47.92,40% - 49.9%\r
29079,Grundy County,MO,19.22,0% - 19.9%\r
29081,Harrison County,MO,14.79,0% - 19.9%\r
29083,Henry County,MO,31.26,30% - 39.9%\r
29085,Hickory County,MO,13.39,0% - 19.9%\r
29087,Holt County,MO,20.31,20% - 29.9%\r
29089,Howard County,MO,28.59,20% - 29.9%\r
29091,Howell County,MO,24,20% - 29.9%\r
29093,Iron County,MO,17.19,0% - 19.9%\r
29095,Jackson County,MO,57.97,50% - 59.9%\r
29097,Jasper County,MO,36.58,30% - 39.9%\r
29099,Jefferson County,MO,36.81,30% - 39.9%\r
29101,Johnson County,MO,34.41,30% - 39.9%\r
29103,Knox County,MO,22.6,20% - 29.9%\r
29105,Laclede County,MO,20.91,20% - 29.9%\r
29107,Lafayette County,MO,31.7,30% - 39.9%\r
29109,Lawrence County,MO,23.47,20% - 29.9%\r
29111,Lewis County,MO,11.02,0% - 19.9%\r
29113,Lincoln County,MO,25.82,20% - 29.9%\r
29115,Linn County,MO,21.34,20% - 29.9%\r
29117,Livingston County,MO,24.01,20% - 29.9%\r
29121,Macon County,MO,19.43,0% - 19.9%\r
29123,Madison County,MO,21.38,20% - 29.9%\r
29125,Maries County,MO,26.4,20% - 29.9%\r
29127,Marion County,MO,22.95,20% - 29.9%\r
29119,McDonald County,MO,28.25,20% - 29.9%\r
29129,Mercer County,MO,9.9,0% - 19.9%\r
29131,Miller County,MO,18.44,0% - 19.9%\r
29133,Mississippi County,MO,21.93,20% - 29.9%\r
29135,Moniteau County,MO,28.11,20% - 29.9%\r
29137,Monroe County,MO,16.72,0% - 19.9%\r
29139,Montgomery County,MO,23.81,20% - 29.9%\r
29141,Morgan County,MO,14.19,0% - 19.9%\r
29143,New Madrid County,MO,18.11,0% - 19.9%\r
29145,Newton County,MO,18.5,0% - 19.9%\r
29147,Nodaway County,MO,42.1,40% - 49.9%\r
29149,Oregon County,MO,17.58,0% - 19.9%\r
29151,Osage County,MO,27.1,20% - 29.9%\r
29153,Ozark County,MO,11.94,0% - 19.9%\r
29155,Pemiscot County,MO,14.1,0% - 19.9%\r
29157,Perry County,MO,16.53,0% - 19.9%\r
29159,Pettis County,MO,27.33,20% - 29.9%\r
29161,Phelps County,MO,37.69,30% - 39.9%\r
29163,Pike County,MO,17.86,0% - 19.9%\r
29165,Platte County,MO,61.68,60% - 69.9%\r
29167,Polk County,MO,27.85,20% - 29.9%\r
29169,Pulaski County,MO,65.96,60% - 69.9%\r
29171,Putnam County,MO,10.42,0% - 19.9%\r
29173,Ralls County,MO,14.13,0% - 19.9%\r
29175,Randolph County,MO,20.78,20% - 29.9%\r
29177,Ray County,MO,28.19,20% - 29.9%\r
29179,Reynolds County,MO,11.5,0% - 19.9%\r
29181,Ripley County,MO,13.2,0% - 19.9%\r
29195,Saline County,MO,31.89,30% - 39.9%\r
29197,Schuyler County,MO,7.9,0% - 19.9%\r
29199,Scotland County,MO,16.37,0% - 19.9%\r
29201,Scott County,MO,22.26,20% - 29.9%\r
29203,Shannon County,MO,9.82,0% - 19.9%\r
29205,Shelby County,MO,20.8,20% - 29.9%\r
29183,St. Charles County,MO,55.32,50% - 59.9%\r
29185,St. Clair County,MO,15.97,0% - 19.9%\r
29187,St. Francois County,MO,25.39,20% - 29.9%\r
29510,St. Louis city,MO,67.17,60% - 69.9%\r
29189,St. Louis County,MO,67.44,60% - 69.9%\r
29186,Ste. Genevieve County,MO,24.06,20% - 29.9%\r
29207,Stoddard County,MO,21.05,20% - 29.9%\r
29209,Stone County,MO,21.28,20% - 29.9%\r
29211,Sullivan County,MO,23.33,20% - 29.9%\r
29213,Taney County,MO,30.3,30% - 39.9%\r
29215,Texas County,MO,17.85,0% - 19.9%\r
29217,Vernon County,MO,20.51,20% - 29.9%\r
29219,Warren County,MO,28.21,20% - 29.9%\r
29221,Washington County,MO,16.77,0% - 19.9%\r
29223,Wayne County,MO,14.1,0% - 19.9%\r
29225,Webster County,MO,26.49,20% - 29.9%\r
29227,Worth County,MO,14.39,0% - 19.9%\r
29229,Wright County,MO,15.42,0% - 19.9%\r
28001,Adams County,MS,44.87,40% - 49.9%\r
28003,Alcorn County,MS,22.03,20% - 29.9%\r
28005,Amite County,MS,27.94,20% - 29.9%\r
28007,Attala County,MS,42.13,40% - 49.9%\r
28009,Benton County,MS,34.34,30% - 39.9%\r
28011,Bolivar County,MS,53.68,50% - 59.9%\r
28013,Calhoun County,MS,19.31,0% - 19.9%\r
28015,Carroll County,MS,32.55,30% - 39.9%\r
28017,Chickasaw County,MS,27.53,20% - 29.9%\r
28019,Choctaw County,MS,30.53,30% - 39.9%\r
28021,Claiborne County,MS,75.36,70% or More\r
28023,Clarke County,MS,36.03,30% - 39.9%\r
28025,Clay County,MS,34.98,30% - 39.9%\r
28027,Coahoma County,MS,48.92,40% - 49.9%\r
28029,Copiah County,MS,51.53,50% - 59.9%\r
28031,Covington County,MS,36.01,30% - 39.9%\r
28033,DeSoto County,MS,48.3,40% - 49.9%\r
28035,Forrest County,MS,36.66,30% - 39.9%\r
28037,Franklin County,MS,34.99,30% - 39.9%\r
28039,George County,MS,18.36,0% - 19.9%\r
28041,Greene County,MS,18.79,0% - 19.9%\r
28043,Grenada County,MS,42.64,40% - 49.9%\r
28045,Hancock County,MS,26.92,20% - 29.9%\r
28047,Harrison County,MS,40.81,40% - 49.9%\r
28049,Hinds County,MS,57.64,50% - 59.9%\r
28051,Holmes County,MS,56.43,50% - 59.9%\r
28053,Humphreys County,MS,58.54,50% - 59.9%\r
28055,Issaquena County,MS,29.51,20% - 29.9%\r
28057,Itawamba County,MS,18.23,0% - 19.9%\r
28059,Jackson County,MS,37.94,30% - 39.9%\r
28061,Jasper County,MS,46.59,40% - 49.9%\r
28063,Jefferson County,MS,92.01,70% or More\r
28065,Jefferson Davis County,MS,43.13,40% - 49.9%\r
28067,Jones County,MS,31.67,30% - 39.9%\r
28069,Kemper County,MS,56.29,50% - 59.9%\r
28071,Lafayette County,MS,49.13,40% - 49.9%\r
28073,Lamar County,MS,49.81,40% - 49.9%\r
28075,Lauderdale County,MS,37.79,30% - 39.9%\r
28077,Lawrence County,MS,42.17,40% - 49.9%\r
28079,Leake County,MS,33.73,30% - 39.9%\r
28081,Lee County,MS,30.8,30% - 39.9%\r
28083,Leflore County,MS,58.04,50% - 59.9%\r
28085,Lincoln County,MS,31.49,30% - 39.9%\r
28087,Lowndes County,MS,37.21,30% - 39.9%\r
28089,Madison County,MS,56.68,50% - 59.9%\r
28091,Marion County,MS,33.57,30% - 39.9%\r
28093,Marshall County,MS,46.4,40% - 49.9%\r
28095,Monroe County,MS,32.42,30% - 39.9%\r
28097,Montgomery County,MS,42,40% - 49.9%\r
28099,Neshoba County,MS,40.3,40% - 49.9%\r
28101,Newton County,MS,32.48,30% - 39.9%\r
28103,Noxubee County,MS,46.62,40% - 49.9%\r
28105,Oktibbeha County,MS,54.56,50% - 59.9%\r
28107,Panola County,MS,34.35,30% - 39.9%\r
28109,Pearl River County,MS,27.21,20% - 29.9%\r
28111,Perry County,MS,22.38,20% - 29.9%\r
28113,Pike County,MS,37.72,30% - 39.9%\r
28115,Pontotoc County,MS,22.89,20% - 29.9%\r
28117,Prentiss County,MS,20.56,20% - 29.9%\r
28119,Quitman County,MS,44.04,40% - 49.9%\r
28121,Rankin County,MS,39.88,30% - 39.9%\r
28123,Scott County,MS,43.76,40% - 49.9%\r
28125,Sharkey County,MS,46.74,40% - 49.9%\r
28127,Simpson County,MS,32.71,30% - 39.9%\r
28129,Smith County,MS,25.11,20% - 29.9%\r
28131,Stone County,MS,28.33,20% - 29.9%\r
28133,Sunflower County,MS,45.24,40% - 49.9%\r
28135,Tallahatchie County,MS,34.72,30% - 39.9%\r
28137,Tate County,MS,32.8,30% - 39.9%\r
28139,Tippah County,MS,21.82,20% - 29.9%\r
28141,Tishomingo County,MS,20.12,20% - 29.9%\r
28143,Tunica County,MS,56.96,50% - 59.9%\r
28145,Union County,MS,22.19,20% - 29.9%\r
28147,Walthall County,MS,33.08,30% - 39.9%\r
28149,Warren County,MS,53.57,50% - 59.9%\r
28151,Washington County,MS,41.89,40% - 49.9%\r
28153,Wayne County,MS,28.05,20% - 29.9%\r
28155,Webster County,MS,20.02,20% - 29.9%\r
28157,Wilkinson County,MS,67.45,60% - 69.9%\r
28159,Winston County,MS,32.12,30% - 39.9%\r
28161,Yalobusha County,MS,41.43,40% - 49.9%\r
28163,Yazoo County,MS,46.79,40% - 49.9%\r
30001,Beaverhead County,MT,43.67,40% - 49.9%\r
30003,Big Horn County,MT,99.99,70% or More\r
30005,Blaine County,MT,99.99,70% or More\r
30007,Broadwater County,MT,13.95,0% - 19.9%\r
30009,Carbon County,MT,24.58,20% - 29.9%\r
30011,Carter County,MT,4.29,0% - 19.9%\r
30013,Cascade County,MT,37.82,30% - 39.9%\r
30015,Chouteau County,MT,20.22,20% - 29.9%\r
30017,Custer County,MT,25.37,20% - 29.9%\r
30019,Daniels County,MT,22.41,20% - 29.9%\r
30021,Dawson County,MT,12.07,0% - 19.9%\r
30023,Deer Lodge County,MT,67.56,60% - 69.9%\r
30025,Fallon County,MT,16.03,0% - 19.9%\r
30027,Fergus County,MT,22.82,20% - 29.9%\r
30029,Flathead County,MT,31.06,30% - 39.9%\r
30031,Gallatin County,MT,52.94,50% - 59.9%\r
30033,Garfield County,MT,6,0% - 19.9%\r
30035,Glacier County,MT,99.99,70% or More\r
30037,Golden Valley County,MT,18.97,0% - 19.9%\r
30039,Granite County,MT,20,20% - 29.9%\r
30041,Hill County,MT,89.82,70% or More\r
30043,Jefferson County,MT,34.12,30% - 39.9%\r
30045,Judith Basin County,MT,2.99,0% - 19.9%\r
30047,Lake County,MT,41.81,40% - 49.9%\r
30049,Lewis and Clark County,MT,51.23,50% - 59.9%\r
30053,Lincoln County,MT,15.51,0% - 19.9%\r
30057,Madison County,MT,23.68,20% - 29.9%\r
30055,McCone County,MT,7.87,0% - 19.9%\r
30059,Meagher County,MT,25.6,20% - 29.9%\r
30061,Mineral County,MT,38.01,30% - 39.9%\r
30063,Missoula County,MT,61.62,60% - 69.9%\r
30065,Musselshell County,MT,13.79,0% - 19.9%\r
30067,Park County,MT,50.05,50% - 59.9%\r
30069,Petroleum County,MT,3.57,0% - 19.9%\r
30071,Phillips County,MT,29.43,20% - 29.9%\r
30073,Pondera County,MT,53.2,50% - 59.9%\r
30075,Powder River County,MT,6.31,0% - 19.9%\r
30077,Powell County,MT,22.81,20% - 29.9%\r
30079,Prairie County,MT,29.63,20% - 29.9%\r
30081,Ravalli County,MT,30.27,30% - 39.9%\r
30083,Richland County,MT,17.45,0% - 19.9%\r
30085,Roosevelt County,MT,79.12,70% or More\r
30087,Rosebud County,MT,99.99,70% or More\r
30089,Sanders County,MT,15.97,0% - 19.9%\r
30091,Sheridan County,MT,21.93,20% - 29.9%\r
30093,Silver Bow County,MT,61.8,60% - 69.9%\r
30095,Stillwater County,MT,12.79,0% - 19.9%\r
30097,Sweet Grass County,MT,18.94,0% - 19.9%\r
30099,Teton County,MT,22.55,20% - 29.9%\r
30101,Toole County,MT,23.84,20% - 29.9%\r
30103,Treasure County,MT,11.43,0% - 19.9%\r
30105,Valley County,MT,24.19,20% - 29.9%\r
30107,Wheatland County,MT,7.33,0% - 19.9%\r
30109,Wibaux County,MT,6.56,0% - 19.9%\r
30111,Yellowstone County,MT,40.61,40% - 49.9%\r
37001,Alamance County,NC,53.24,50% - 59.9%\r
37003,Alexander County,NC,24.15,20% - 29.9%\r
37005,Alleghany County,NC,33.18,30% - 39.9%\r
37007,Anson County,NC,31.21,30% - 39.9%\r
37009,Ashe County,NC,40.12,40% - 49.9%\r
37011,Avery County,NC,32.51,30% - 39.9%\r
37013,Beaufort County,NC,33.77,30% - 39.9%\r
37015,Bertie County,NC,33.14,30% - 39.9%\r
37017,Bladen County,NC,35.76,30% - 39.9%\r
37019,Brunswick County,NC,44.22,40% - 49.9%\r
37021,Buncombe County,NC,64.03,60% - 69.9%\r
37023,Burke County,NC,38.32,30% - 39.9%\r
37025,Cabarrus County,NC,55.89,50% - 59.9%\r
37027,Caldwell County,NC,29.75,20% - 29.9%\r
37029,Camden County,NC,32.63,30% - 39.9%\r
37031,Carteret County,NC,40.72,40% - 49.9%\r
37033,Caswell County,NC,25.5,20% - 29.9%\r
37035,Catawba County,NC,44.55,40% - 49.9%\r
37037,Chatham County,NC,46.43,40% - 49.9%\r
37039,Cherokee County,NC,20.48,20% - 29.9%\r
37041,Chowan County,NC,38.23,30% - 39.9%\r
37043,Clay County,NC,19.48,0% - 19.9%\r
37045,Cleveland County,NC,39.62,30% - 39.9%\r
37047,Columbus County,NC,32.53,30% - 39.9%\r
37049,Craven County,NC,48.39,40% - 49.9%\r
37051,Cumberland County,NC,54.15,50% - 59.9%\r
37053,Currituck County,NC,35.27,30% - 39.9%\r
37055,Dare County,NC,53.56,50% - 59.9%\r
37057,Davidson County,NC,34.18,30% - 39.9%\r
37059,Davie County,NC,47.25,40% - 49.9%\r
37061,Duplin County,NC,33.09,30% - 39.9%\r
37063,Durham County,NC,75.63,70% or More\r
37065,Edgecombe County,NC,30.91,30% - 39.9%\r
37067,Forsyth County,NC,58.88,50% - 59.9%\r
37069,Franklin County,NC,47.19,40% - 49.9%\r
37071,Gaston County,NC,40.39,40% - 49.9%\r
37073,Gates County,NC,27.87,20% - 29.9%\r
37075,Graham County,NC,20.56,20% - 29.9%\r
37077,Granville County,NC,49.54,40% - 49.9%\r
37079,Greene County,NC,31.72,30% - 39.9%\r
37081,Guilford County,NC,60.97,60% - 69.9%\r
37083,Halifax County,NC,35.73,30% - 39.9%\r
37085,Harnett County,NC,36.26,30% - 39.9%\r
37087,Haywood County,NC,38.94,30% - 39.9%\r
37089,Henderson County,NC,45.42,40% - 49.9%\r
37091,Hertford County,NC,37.9,30% - 39.9%\r
37093,Hoke County,NC,34.04,30% - 39.9%\r
37095,Hyde County,NC,47.12,40% - 49.9%\r
37097,Iredell County,NC,43.68,40% - 49.9%\r
37099,Jackson County,NC,52.32,50% - 59.9%\r
37101,Johnston County,NC,48.08,40% - 49.9%\r
37103,Jones County,NC,38.03,30% - 39.9%\r
37105,Lee County,NC,51.02,50% - 59.9%\r
37107,Lenoir County,NC,35.96,30% - 39.9%\r
37109,Lincoln County,NC,35.1,30% - 39.9%\r
37113,Macon County,NC,35.68,30% - 39.9%\r
37115,Madison County,NC,36.74,30% - 39.9%\r
37117,Martin County,NC,35.63,30% - 39.9%\r
37111,McDowell County,NC,34.76,30% - 39.9%\r
37119,Mecklenburg County,NC,69.74,60% - 69.9%\r
37121,Mitchell County,NC,29.3,20% - 29.9%\r
37123,Montgomery County,NC,20.17,20% - 29.9%\r
37125,Moore County,NC,40.7,40% - 49.9%\r
37127,Nash County,NC,43.37,40% - 49.9%\r
37129,New Hanover County,NC,64.57,60% - 69.9%\r
37131,Northampton County,NC,30.63,30% - 39.9%\r
37133,Onslow County,NC,46.52,40% - 49.9%\r
37135,Orange County,NC,91.49,70% or More\r
37137,Pamlico County,NC,27.21,20% - 29.9%\r
37139,Pasquotank County,NC,39.14,30% - 39.9%\r
37141,Pender County,NC,39.34,30% - 39.9%\r
37143,Perquimans County,NC,25.86,20% - 29.9%\r
37145,Person County,NC,41,40% - 49.9%\r
37147,Pitt County,NC,48.13,40% - 49.9%\r
37149,Polk County,NC,30.77,30% - 39.9%\r
37151,Randolph County,NC,30.21,30% - 39.9%\r
37153,Richmond County,NC,31.13,30% - 39.9%\r
37155,Robeson County,NC,34.32,30% - 39.9%\r
37157,Rockingham County,NC,33.35,30% - 39.9%\r
37159,Rowan County,NC,29.52,20% - 29.9%\r
37161,Rutherford County,NC,25.92,20% - 29.9%\r
37163,Sampson County,NC,36.74,30% - 39.9%\r
37165,Scotland County,NC,33.15,30% - 39.9%\r
37167,Stanly County,NC,27.06,20% - 29.9%\r
37169,Stokes County,NC,30.28,30% - 39.9%\r
37171,Surry County,NC,38.51,30% - 39.9%\r
37173,Swain County,NC,63.44,60% - 69.9%\r
37175,Transylvania County,NC,42.93,40% - 49.9%\r
37177,Tyrrell County,NC,43.67,40% - 49.9%\r
37179,Union County,NC,55.87,50% - 59.9%\r
37181,Vance County,NC,51.91,50% - 59.9%\r
37183,Wake County,NC,81.09,70% or More\r
37185,Warren County,NC,43.15,40% - 49.9%\r
37187,Washington County,NC,33.62,30% - 39.9%\r
37189,Watauga County,NC,62.56,60% - 69.9%\r
37191,Wayne County,NC,38.2,30% - 39.9%\r
37193,Wilkes County,NC,29.27,20% - 29.9%\r
37195,Wilson County,NC,39.76,30% - 39.9%\r
37197,Yadkin County,NC,32.93,30% - 39.9%\r
37199,Yancey County,NC,29.99,20% - 29.9%\r
38001,Adams County,ND,23.45,20% - 29.9%\r
38003,Barnes County,ND,45.42,40% - 49.9%\r
38005,Benson County,ND,57.24,50% - 59.9%\r
38007,Billings County,ND,7.69,0% - 19.9%\r
38009,Bottineau County,ND,34.68,30% - 39.9%\r
38011,Bowman County,ND,17.81,0% - 19.9%\r
38013,Burke County,ND,14.91,0% - 19.9%\r
38015,Burleigh County,ND,37.51,30% - 39.9%\r
38017,Cass County,ND,62.1,60% - 69.9%\r
38019,Cavalier County,ND,40.22,40% - 49.9%\r
38021,Dickey County,ND,36.85,30% - 39.9%\r
38023,Divide County,ND,25.58,20% - 29.9%\r
38025,Dunn County,ND,8.46,0% - 19.9%\r
38027,Eddy County,ND,25.71,20% - 29.9%\r
38029,Emmons County,ND,13.33,0% - 19.9%\r
38031,Foster County,ND,37.93,30% - 39.9%\r
38033,Golden Valley County,ND,18.47,0% - 19.9%\r
38035,Grand Forks County,ND,52.95,50% - 59.9%\r
38037,Grant County,ND,10.14,0% - 19.9%\r
38039,Griggs County,ND,22.78,20% - 29.9%\r
38041,Hettinger County,ND,12.64,0% - 19.9%\r
38043,Kidder County,ND,14.01,0% - 19.9%\r
38045,LaMoure County,ND,28.66,20% - 29.9%\r
38047,Logan County,ND,9.86,0% - 19.9%\r
38049,McHenry County,ND,21.59,20% - 29.9%\r
38051,McIntosh County,ND,20.25,20% - 29.9%\r
38053,McKenzie County,ND,17.16,0% - 19.9%\r
38055,McLean County,ND,27.07,20% - 29.9%\r
38057,Mercer County,ND,14.9,0% - 19.9%\r
38059,Morton County,ND,30.02,30% - 39.9%\r
38061,Mountrail County,ND,57.91,50% - 59.9%\r
38063,Nelson County,ND,45.85,40% - 49.9%\r
38065,Oliver County,ND,15.85,0% - 19.9%\r
38067,Pembina County,ND,36.59,30% - 39.9%\r
38069,Pierce County,ND,34.44,30% - 39.9%\r
38071,Ramsey County,ND,39.3,30% - 39.9%\r
38073,Ransom County,ND,38.92,30% - 39.9%\r
38075,Renville County,ND,23.28,20% - 29.9%\r
38077,Richland County,ND,39.52,30% - 39.9%\r
38079,Rolette County,ND,83.72,70% or More\r
38081,Sargent County,ND,32.96,30% - 39.9%\r
38083,Sheridan County,ND,10.84,0% - 19.9%\r
38085,Sioux County,ND,75.98,70% or More\r
38087,Slope County,ND,4.17,0% - 19.9%\r
38089,Stark County,ND,21.96,20% - 29.9%\r
38091,Steele County,ND,34.09,30% - 39.9%\r
38093,Stutsman County,ND,38.6,30% - 39.9%\r
38095,Towner County,ND,31.37,30% - 39.9%\r
38097,Traill County,ND,44.84,40% - 49.9%\r
38099,Walsh County,ND,44.77,40% - 49.9%\r
38101,Ward County,ND,39.61,30% - 39.9%\r
38103,Wells County,ND,15.23,0% - 19.9%\r
38105,Williams County,ND,20.56,20% - 29.9%\r
31025,Cass County,NE,51.79,50% - 59.9%\r
31031,Cherry County,NE,18.06,0% - 19.9%\r
31043,Dakota County,NE,46.64,40% - 49.9%\r
31055,Douglas County,NE,69.17,60% - 69.9%\r
31057,Dundy County,NE,11.93,0% - 19.9%\r
31085,Hayes County,NE,7.94,0% - 19.9%\r
31103,Keya Paha County,NE,9.52,0% - 19.9%\r
31109,Lancaster County,NE,69.76,60% - 69.9%\r
31177,Washington County,NE,43.53,40% - 49.9%\r
33001,Belknap County,NH,51.35,50% - 59.9%\r
33003,Carroll County,NH,65.19,60% - 69.9%\r
33005,Cheshire County,NH,61.92,60% - 69.9%\r
33007,Coos County,NH,53.41,50% - 59.9%\r
33009,Grafton County,NH,84.59,70% or More\r
33011,Hillsborough County,NH,63.21,60% - 69.9%\r
33013,Merrimack County,NH,62.13,60% - 69.9%\r
33015,Rockingham County,NH,68.16,60% - 69.9%\r
33017,Strafford County,NH,69.9,60% - 69.9%\r
33019,Sullivan County,NH,53.62,50% - 59.9%\r
34001,Atlantic County,NJ,54.02,50% - 59.9%\r
34003,Bergen County,NJ,74.73,70% or More\r
34005,Burlington County,NJ,65.65,60% - 69.9%\r
34007,Camden County,NJ,64.31,60% - 69.9%\r
34009,Cape May County,NJ,55.69,50% - 59.9%\r
34011,Cumberland County,NJ,44.15,40% - 49.9%\r
34013,Essex County,NJ,73.79,70% or More\r
34015,Gloucester County,NJ,54.62,50% - 59.9%\r
34017,Hudson County,NJ,91.54,70% or More\r
34019,Hunterdon County,NJ,53.46,50% - 59.9%\r
34021,Mercer County,NJ,80.85,70% or More\r
34023,Middlesex County,NJ,76.14,70% or More\r
34025,Monmouth County,NJ,51.1,50% - 59.9%\r
34027,Morris County,NJ,67.69,60% - 69.9%\r
34029,Ocean County,NJ,28.4,20% - 29.9%\r
34031,Passaic County,NJ,71.78,70% or More\r
34033,Salem County,NJ,43.93,40% - 49.9%\r
34035,Somerset County,NJ,68.4,60% - 69.9%\r
34037,Sussex County,NJ,44.86,40% - 49.9%\r
34039,Union County,NJ,75.51,70% or More\r
34041,Warren County,NJ,50.37,50% - 59.9%\r
35001,Bernalillo County,NM,73.22,70% or More\r
35003,Catron County,NM,19.65,0% - 19.9%\r
35005,Chaves County,NM,36.19,30% - 39.9%\r
35006,Cibola County,NM,90.25,70% or More\r
35007,Colfax County,NM,47.41,40% - 49.9%\r
35009,Curry County,NM,33.61,30% - 39.9%\r
35011,De Baca County,NM,25.36,20% - 29.9%\r
35013,Dona Ana County,NM,82.59,70% or More\r
35015,Eddy County,NM,33.42,30% - 39.9%\r
35017,Grant County,NM,63.67,60% - 69.9%\r
35019,Guadalupe County,NM,76.44,70% or More\r
35021,Harding County,NM,99.99,70% or More\r
35023,Hidalgo County,NM,60.52,60% - 69.9%\r
35025,Lea County,NM,40.89,40% - 49.9%\r
35027,Lincoln County,NM,37.32,30% - 39.9%\r
35028,Los Alamos County,NM,94.98,70% or More\r
35029,Luna County,NM,75.94,70% or More\r
35031,McKinley County,NM,99.99,70% or More\r
35033,Mora County,NM,76.73,70% or More\r
35035,Otero County,NM,55.52,50% - 59.9%\r
35037,Quay County,NM,28.96,20% - 29.9%\r
35039,Rio Arriba County,NM,88.2,70% or More\r
35041,Roosevelt County,NM,30.86,30% - 39.9%\r
35045,San Juan County,NM,90.4,70% or More\r
35047,San Miguel County,NM,78.39,70% or More\r
35043,Sandoval County,NM,76.8,70% or More\r
35049,Santa Fe County,NM,79.51,70% or More\r
35051,Sierra County,NM,52.43,50% - 59.9%\r
35053,Socorro County,NM,64.5,60% - 69.9%\r
35055,Taos County,NM,86.51,70% or More\r
35057,Torrance County,NM,40.96,40% - 49.9%\r
35059,Union County,NM,36.36,30% - 39.9%\r
35061,Valencia County,NM,55.57,50% - 59.9%\r
32510,Carson City,NV,54.87,50% - 59.9%\r
32001,Churchill County,NV,38.28,30% - 39.9%\r
32003,Clark County,NV,56.87,50% - 59.9%\r
32005,Douglas County,NV,36.98,30% - 39.9%\r
32007,Elko County,NV,35.22,30% - 39.9%\r
32009,Esmeralda County,NV,46.34,40% - 49.9%\r
32011,Eureka County,NV,8.51,0% - 19.9%\r
32013,Humboldt County,NV,28.4,20% - 29.9%\r
32015,Lander County,NV,25.61,20% - 29.9%\r
32017,Lincoln County,NV,26.12,20% - 29.9%\r
32019,Lyon County,NV,26.43,20% - 29.9%\r
32021,Mineral County,NV,30.88,30% - 39.9%\r
32023,Nye County,NV,29.29,20% - 29.9%\r
32027,Pershing County,NV,26.82,20% - 29.9%\r
32029,Storey County,NV,15.28,0% - 19.9%\r
32031,Washoe County,NV,61.27,60% - 69.9%\r
32033,White Pine County,NV,32.38,30% - 39.9%\r
36001,Albany County,NY,78.84,70% or More\r
36003,Allegany County,NY,36.87,30% - 39.9%\r
36005,Bronx County,NY,79.18,70% or More\r
36007,Broome County,NY,55.03,50% - 59.9%\r
36009,Cattaraugus County,NY,45.69,40% - 49.9%\r
36011,Cayuga County,NY,53.35,50% - 59.9%\r
36013,Chautauqua County,NY,49.12,40% - 49.9%\r
36015,Chemung County,NY,54.99,50% - 59.9%\r
36017,Chenango County,NY,45.48,40% - 49.9%\r
36019,Clinton County,NY,74.07,70% or More\r
36021,Columbia County,NY,69.97,60% - 69.9%\r
36023,Cortland County,NY,54.04,50% - 59.9%\r
36025,Delaware County,NY,45.48,40% - 49.9%\r
36027,Dutchess County,NY,65.78,60% - 69.9%\r
36029,Erie County,NY,64.21,60% - 69.9%\r
36031,Essex County,NY,71.46,70% or More\r
36033,Franklin County,NY,64.14,60% - 69.9%\r
36035,Fulton County,NY,38.91,30% - 39.9%\r
36037,Genesee County,NY,43.27,40% - 49.9%\r
36039,Greene County,NY,59.03,50% - 59.9%\r
36041,Hamilton County,NY,50.19,50% - 59.9%\r
36043,Herkimer County,NY,48.46,40% - 49.9%\r
36045,Jefferson County,NY,60.09,60% - 69.9%\r
36047,Kings County,NY,67.07,60% - 69.9%\r
36049,Lewis County,NY,35.87,30% - 39.9%\r
36051,Livingston County,NY,55.92,50% - 59.9%\r
36053,Madison County,NY,57.28,50% - 59.9%\r
36055,Monroe County,NY,67.5,60% - 69.9%\r
36057,Montgomery County,NY,49.55,40% - 49.9%\r
36059,Nassau County,NY,79.18,70% or More\r
36061,New York County,NY,99.99,70% or More\r
36063,Niagara County,NY,56.44,50% - 59.9%\r
36065,Oneida County,NY,54.05,50% - 59.9%\r
36067,Onondaga County,NY,68.26,60% - 69.9%\r
36069,Ontario County,NY,65.26,60% - 69.9%\r
36071,Orange County,NY,55.9,50% - 59.9%\r
36073,Orleans County,NY,41.97,40% - 49.9%\r
36075,Oswego County,NY,50.46,50% - 59.9%\r
36077,Otsego County,NY,67.44,60% - 69.9%\r
36079,Putnam County,NY,67.41,60% - 69.9%\r
36081,Queens County,NY,94.86,70% or More\r
36083,Rensselaer County,NY,66.19,60% - 69.9%\r
36085,Richmond County,NY,66.03,60% - 69.9%\r
36087,Rockland County,NY,53.52,50% - 59.9%\r
36091,Saratoga County,NY,80.57,70% or More\r
36093,Schenectady County,NY,74.53,70% or More\r
36095,Schoharie County,NY,48.58,40% - 49.9%\r
36097,Schuyler County,NY,45.95,40% - 49.9%\r
36099,Seneca County,NY,47.84,40% - 49.9%\r
36089,St. Lawrence County,NY,57.63,50% - 59.9%\r
36101,Steuben County,NY,46.77,40% - 49.9%\r
36103,Suffolk County,NY,63.83,60% - 69.9%\r
36105,Sullivan County,NY,47.74,40% - 49.9%\r
36107,Tioga County,NY,46.85,40% - 49.9%\r
36109,Tompkins County,NY,89.04,70% or More\r
36111,Ulster County,NY,72.48,70% or More\r
36113,Warren County,NY,67.71,60% - 69.9%\r
36115,Washington County,NY,56.29,50% - 59.9%\r
36117,Wayne County,NY,54.45,50% - 59.9%\r
36119,Westchester County,NY,90.63,70% or More\r
36121,Wyoming County,NY,40.03,40% - 49.9%\r
36123,Yates County,NY,38.61,30% - 39.9%\r
39001,Adams County,OH,20.47,20% - 29.9%\r
39003,Allen County,OH,21.81,20% - 29.9%\r
39005,Ashland County,OH,22.13,20% - 29.9%\r
39007,Ashtabula County,OH,34.84,30% - 39.9%\r
39009,Athens County,OH,51.07,50% - 59.9%\r
39011,Auglaize County,OH,15.25,0% - 19.9%\r
39013,Belmont County,OH,29.64,20% - 29.9%\r
39015,Brown County,OH,21.35,20% - 29.9%\r
39017,Butler County,OH,47.32,40% - 49.9%\r
39019,Carroll County,OH,21.31,20% - 29.9%\r
39021,Champaign County,OH,21.53,20% - 29.9%\r
39023,Clark County,OH,34.25,30% - 39.9%\r
39025,Clermont County,OH,45.92,40% - 49.9%\r
39027,Clinton County,OH,28.21,20% - 29.9%\r
39029,Columbiana County,OH,26.67,20% - 29.9%\r
39031,Coshocton County,OH,19.15,0% - 19.9%\r
39033,Crawford County,OH,21.14,20% - 29.9%\r
39035,Cuyahoga County,OH,53.94,50% - 59.9%\r
39037,Darke County,OH,15.51,0% - 19.9%\r
39039,Defiance County,OH,28.56,20% - 29.9%\r
39041,Delaware County,OH,71.99,70% or More\r
39043,Erie County,OH,36.4,30% - 39.9%\r
39045,Fairfield County,OH,46.43,40% - 49.9%\r
39047,Fayette County,OH,24.26,20% - 29.9%\r
39049,Franklin County,OH,59.66,50% - 59.9%\r
39051,Fulton County,OH,31.11,30% - 39.9%\r
39053,Gallia County,OH,27.09,20% - 29.9%\r
39055,Geauga County,OH,44.35,40% - 49.9%\r
39057,Greene County,OH,54.29,50% - 59.9%\r
39059,Guernsey County,OH,22.3,20% - 29.9%\r
39061,Hamilton County,OH,52.47,50% - 59.9%\r
39063,Hancock County,OH,34.89,30% - 39.9%\r
39065,Hardin County,OH,19.32,0% - 19.9%\r
39067,Harrison County,OH,17.72,0% - 19.9%\r
39069,Henry County,OH,34.7,30% - 39.9%\r
39071,Highland County,OH,17.03,0% - 19.9%\r
39073,Hocking County,OH,30.79,30% - 39.9%\r
39075,Holmes County,OH,5.35,0% - 19.9%\r
39077,Huron County,OH,27.25,20% - 29.9%\r
39079,Jackson County,OH,29.38,20% - 29.9%\r
39081,Jefferson County,OH,33.03,30% - 39.9%\r
39083,Knox County,OH,25.23,20% - 29.9%\r
39085,Lake County,OH,50.92,50% - 59.9%\r
39087,Lawrence County,OH,41.04,40% - 49.9%\r
39089,Licking County,OH,41.16,40% - 49.9%\r
39091,Logan County,OH,19.95,0% - 19.9%\r
39093,Lorain County,OH,52.7,50% - 59.9%\r
39095,Lucas County,OH,47.71,40% - 49.9%\r
39097,Madison County,OH,37.98,30% - 39.9%\r
39099,Mahoning County,OH,37.08,30% - 39.9%\r
39101,Marion County,OH,29.3,20% - 29.9%\r
39103,Medina County,OH,52.32,50% - 59.9%\r
39105,Meigs County,OH,29.25,20% - 29.9%\r
39107,Mercer County,OH,13.75,0% - 19.9%\r
39109,Miami County,OH,27.25,20% - 29.9%\r
39111,Monroe County,OH,21.97,20% - 29.9%\r
39113,Montgomery County,OH,44.06,40% - 49.9%\r
39115,Morgan County,OH,19.96,0% - 19.9%\r
39117,Morrow County,OH,21.42,20% - 29.9%\r
39119,Muskingum County,OH,26.71,20% - 29.9%\r
39121,Noble County,OH,24.89,20% - 29.9%\r
39123,Ottawa County,OH,41.66,40% - 49.9%\r
39125,Paulding County,OH,20.27,20% - 29.9%\r
39127,Perry County,OH,19.11,0% - 19.9%\r
39129,Pickaway County,OH,33.32,30% - 39.9%\r
39131,Pike County,OH,27.4,20% - 29.9%\r
39133,Portage County,OH,46.4,40% - 49.9%\r
39135,Preble County,OH,18.17,0% - 19.9%\r
39137,Putnam County,OH,24.53,20% - 29.9%\r
39139,Richland County,OH,22.28,20% - 29.9%\r
39141,Ross County,OH,29.07,20% - 29.9%\r
39143,Sandusky County,OH,32.15,30% - 39.9%\r
39145,Scioto County,OH,33.16,30% - 39.9%\r
39147,Seneca County,OH,26.11,20% - 29.9%\r
39149,Shelby County,OH,14.49,0% - 19.9%\r
39151,Stark County,OH,38.86,30% - 39.9%\r
39153,Summit County,OH,54.92,50% - 59.9%\r
39155,Trumbull County,OH,36.33,30% - 39.9%\r
39157,Tuscarawas County,OH,24.4,20% - 29.9%\r
39159,Union County,OH,53.47,50% - 59.9%\r
39161,Van Wert County,OH,20.52,20% - 29.9%\r
39163,Vinton County,OH,22.44,20% - 29.9%\r
39165,Warren County,OH,57.45,50% - 59.9%\r
39167,Washington County,OH,39.78,30% - 39.9%\r
39169,Wayne County,OH,27.26,20% - 29.9%\r
39171,Williams County,OH,23.63,20% - 29.9%\r
39173,Wood County,OH,55.94,50% - 59.9%\r
39175,Wyandot County,OH,21.85,20% - 29.9%\r
40001,Adair County,OK,31.71,30% - 39.9%\r
40003,Alfalfa County,OK,12.93,0% - 19.9%\r
40005,Atoka County,OK,13.02,0% - 19.9%\r
40007,Beaver County,OK,13.46,0% - 19.9%\r
40009,Beckham County,OK,26.09,20% - 29.9%\r
40011,Blaine County,OK,37.47,30% - 39.9%\r
40013,Bryan County,OK,27.37,20% - 29.9%\r
40015,Caddo County,OK,59.45,50% - 59.9%\r
40017,Canadian County,OK,51.25,50% - 59.9%\r
40019,Carter County,OK,32.84,30% - 39.9%\r
40021,Cherokee County,OK,47.87,40% - 49.9%\r
40023,Choctaw County,OK,15.44,0% - 19.9%\r
40025,Cimarron County,OK,6.15,0% - 19.9%\r
40027,Cleveland County,OK,57.81,50% - 59.9%\r
40029,Coal County,OK,15.67,0% - 19.9%\r
40031,Comanche County,OK,63.17,60% - 69.9%\r
40033,Cotton County,OK,39.19,30% - 39.9%\r
40035,Craig County,OK,31.27,30% - 39.9%\r
40037,Creek County,OK,27.23,20% - 29.9%\r
40039,Custer County,OK,43.17,40% - 49.9%\r
40041,Delaware County,OK,28.61,20% - 29.9%\r
40043,Dewey County,OK,9.5,0% - 19.9%\r
40045,Ellis County,OK,9.65,0% - 19.9%\r
40047,Garfield County,OK,36.16,30% - 39.9%\r
40049,Garvin County,OK,27.25,20% - 29.9%\r
40051,Grady County,OK,23.45,20% - 29.9%\r
40053,Grant County,OK,20.51,20% - 29.9%\r
40055,Greer County,OK,24.62,20% - 29.9%\r
40057,Harmon County,OK,32.79,30% - 39.9%\r
40059,Harper County,OK,32.91,30% - 39.9%\r
40061,Haskell County,OK,22.87,20% - 29.9%\r
40063,Hughes County,OK,31.45,30% - 39.9%\r
40065,Jackson County,OK,36.68,30% - 39.9%\r
40067,Jefferson County,OK,16.6,0% - 19.9%\r
40069,Johnston County,OK,21.95,20% - 29.9%\r
40071,Kay County,OK,30.06,30% - 39.9%\r
40073,Kingfisher County,OK,29.81,20% - 29.9%\r
40075,Kiowa County,OK,31.42,30% - 39.9%\r
40077,Latimer County,OK,25,20% - 29.9%\r
40079,Le Flore County,OK,23.69,20% - 29.9%\r
40081,Lincoln County,OK,24.88,20% - 29.9%\r
40083,Logan County,OK,22.05,20% - 29.9%\r
40085,Love County,OK,23.97,20% - 29.9%\r
40093,Major County,OK,22.22,20% - 29.9%\r
40095,Marshall County,OK,32.52,30% - 39.9%\r
40097,Mayes County,OK,27.56,20% - 29.9%\r
40087,McClain County,OK,31.62,30% - 39.9%\r
40089,McCurtain County,OK,15.78,0% - 19.9%\r
40091,McIntosh County,OK,32.28,30% - 39.9%\r
40099,Murray County,OK,27.55,20% - 29.9%\r
40101,Muskogee County,OK,47.17,40% - 49.9%\r
40103,Noble County,OK,49.78,40% - 49.9%\r
40105,Nowata County,OK,27.68,20% - 29.9%\r
40107,Okfuskee County,OK,33.02,30% - 39.9%\r
40109,Oklahoma County,OK,68.72,60% - 69.9%\r
40111,Okmulgee County,OK,28.29,20% - 29.9%\r
40113,Osage County,OK,29.73,20% - 29.9%\r
40115,Ottawa County,OK,24.86,20% - 29.9%\r
40117,Pawnee County,OK,36.87,30% - 39.9%\r
40119,Payne County,OK,50.12,50% - 59.9%\r
40121,Pittsburg County,OK,31.45,30% - 39.9%\r
40123,Pontotoc County,OK,40.29,40% - 49.9%\r
40125,Pottawatomie County,OK,40.23,40% - 49.9%\r
40127,Pushmataha County,OK,14.72,0% - 19.9%\r
40129,Roger Mills County,OK,19.52,0% - 19.9%\r
40131,Rogers County,OK,32.4,30% - 39.9%\r
40133,Seminole County,OK,39.93,30% - 39.9%\r
40135,Sequoyah County,OK,30.11,30% - 39.9%\r
40137,Stephens County,OK,30.04,30% - 39.9%\r
40139,Texas County,OK,29.86,20% - 29.9%\r
40141,Tillman County,OK,31,30% - 39.9%\r
40143,Tulsa County,OK,57.4,50% - 59.9%\r
40145,Wagoner County,OK,35.56,30% - 39.9%\r
40147,Washington County,OK,35.69,30% - 39.9%\r
40149,Washita County,OK,23.77,20% - 29.9%\r
40151,Woods County,OK,30.74,30% - 39.9%\r
40153,Woodward County,OK,22.35,20% - 29.9%\r
41001,Baker County,OR,36.09,30% - 39.9%\r
41003,Benton County,OR,76.04,70% or More\r
41005,Clackamas County,OR,69.56,60% - 69.9%\r
41007,Clatsop County,OR,57.19,50% - 59.9%\r
41009,Columbia County,OR,49.46,40% - 49.9%\r
41011,Coos County,OR,40.22,40% - 49.9%\r
41013,Crook County,OR,30.84,30% - 39.9%\r
41015,Curry County,OR,38.9,30% - 39.9%\r
41017,Deschutes County,OR,63.21,60% - 69.9%\r
41019,Douglas County,OR,31.33,30% - 39.9%\r
41021,Gilliam County,OR,41.13,40% - 49.9%\r
41023,Grant County,OR,18.87,0% - 19.9%\r
41025,Harney County,OR,29.03,20% - 29.9%\r
41027,Hood River County,OR,85.2,70% or More\r
41029,Jackson County,OR,48.07,40% - 49.9%\r
41031,Jefferson County,OR,61.93,60% - 69.9%\r
41033,Josephine County,OR,34.1,30% - 39.9%\r
41035,Klamath County,OR,34.34,30% - 39.9%\r
41037,Lake County,OR,17.19,0% - 19.9%\r
41039,Lane County,OR,64.9,60% - 69.9%\r
41041,Lincoln County,OR,65.79,60% - 69.9%\r
41043,Linn County,OR,41.23,40% - 49.9%\r
41045,Malheur County,OR,35.88,30% - 39.9%\r
41047,Marion County,OR,59.95,50% - 59.9%\r
41049,Morrow County,OR,44.19,40% - 49.9%\r
41051,Multnomah County,OR,83.33,70% or More\r
41053,Polk County,OR,56.51,50% - 59.9%\r
41055,Sherman County,OR,39.29,30% - 39.9%\r
41057,Tillamook County,OR,50.71,50% - 59.9%\r
41059,Umatilla County,OR,48.54,40% - 49.9%\r
41061,Union County,OR,35.92,30% - 39.9%\r
41063,Wallowa County,OR,41.79,40% - 49.9%\r
41065,Wasco County,OR,61.21,60% - 69.9%\r
41067,Washington County,OR,83.18,70% or More\r
41069,Wheeler County,OR,38.57,30% - 39.9%\r
41071,Yamhill County,OR,57.85,50% - 59.9%\r
42001,Adams County,PA,39.79,30% - 39.9%\r
42003,Allegheny County,PA,66.53,60% - 69.9%\r
42005,Armstrong County,PA,38.59,30% - 39.9%\r
42007,Beaver County,PA,42.37,40% - 49.9%\r
42009,Bedford County,PA,15.3,0% - 19.9%\r
42011,Berks County,PA,52.81,50% - 59.9%\r
42013,Blair County,PA,34.96,30% - 39.9%\r
42015,Bradford County,PA,26.68,20% - 29.9%\r
42017,Bucks County,PA,76.5,70% or More\r
42019,Butler County,PA,53.82,50% - 59.9%\r
42021,Cambria County,PA,36.12,30% - 39.9%\r
42023,Cameron County,PA,32.93,30% - 39.9%\r
42025,Carbon County,PA,44.87,40% - 49.9%\r
42027,Centre County,PA,60.4,60% - 69.9%\r
42029,Chester County,PA,93.17,70% or More\r
42031,Clarion County,PA,24.57,20% - 29.9%\r
42033,Clearfield County,PA,26,20% - 29.9%\r
42035,Clinton County,PA,25.85,20% - 29.9%\r
42037,Columbia County,PA,53.39,50% - 59.9%\r
42039,Crawford County,PA,30.85,30% - 39.9%\r
42041,Cumberland County,PA,64.5,60% - 69.9%\r
42043,Dauphin County,PA,54.14,50% - 59.9%\r
42045,Delaware County,PA,85.16,70% or More\r
42047,Elk County,PA,30.69,30% - 39.9%\r
42049,Erie County,PA,50.62,50% - 59.9%\r
42051,Fayette County,PA,35.9,30% - 39.9%\r
42053,Forest County,PA,14.29,0% - 19.9%\r
42055,Franklin County,PA,34.44,30% - 39.9%\r
42057,Fulton County,PA,14.06,0% - 19.9%\r
42059,Greene County,PA,28.45,20% - 29.9%\r
42061,Huntingdon County,PA,23.05,20% - 29.9%\r
42063,Indiana County,PA,29.34,20% - 29.9%\r
42065,Jefferson County,PA,23.99,20% - 29.9%\r
42067,Juniata County,PA,18.99,0% - 19.9%\r
42069,Lackawanna County,PA,66.84,60% - 69.9%\r
42071,Lancaster County,PA,46.33,40% - 49.9%\r
42073,Lawrence County,PA,35.98,30% - 39.9%\r
42075,Lebanon County,PA,41.03,40% - 49.9%\r
42077,Lehigh County,PA,67.71,60% - 69.9%\r
42079,Luzerne County,PA,56.62,50% - 59.9%\r
42081,Lycoming County,PA,33.06,30% - 39.9%\r
42083,McKean County,PA,45.12,40% - 49.9%\r
42085,Mercer County,PA,33.25,30% - 39.9%\r
42087,Mifflin County,PA,24.07,20% - 29.9%\r
42089,Monroe County,PA,51.51,50% - 59.9%\r
42091,Montgomery County,PA,96.15,70% or More\r
42093,Montour County,PA,64.39,60% - 69.9%\r
42095,Northampton County,PA,64.26,60% - 69.9%\r
42097,Northumberland County,PA,36.71,30% - 39.9%\r
42099,Perry County,PA,29.09,20% - 29.9%\r
42101,Philadelphia County,PA,72.35,70% or More\r
42103,Pike County,PA,53.33,50% - 59.9%\r
42105,Potter County,PA,22.47,20% - 29.9%\r
42107,Schuylkill County,PA,41.33,40% - 49.9%\r
42109,Snyder County,PA,26.52,20% - 29.9%\r
42111,Somerset County,PA,26.38,20% - 29.9%\r
42113,Sullivan County,PA,31.73,30% - 39.9%\r
42115,Susquehanna County,PA,34.89,30% - 39.9%\r
42117,Tioga County,PA,34.54,30% - 39.9%\r
42119,Union County,PA,44.16,40% - 49.9%\r
42121,Venango County,PA,30.8,30% - 39.9%\r
42123,Warren County,PA,34.65,30% - 39.9%\r
42125,Washington County,PA,54.74,50% - 59.9%\r
42127,Wayne County,PA,52.13,50% - 59.9%\r
42129,Westmoreland County,PA,45.27,40% - 49.9%\r
42131,Wyoming County,PA,46.92,40% - 49.9%\r
42133,York County,PA,46.34,40% - 49.9%\r
72001,Adjuntas Municipio,PR,91.99,70% or More\r
72003,Aguada Municipio,PR,84.11,70% or More\r
72005,Aguadilla Municipio,PR,93.21,70% or More\r
72007,Aguas Buenas Municipio,PR,89.07,70% or More\r
72009,Aibonito Municipio,PR,98.86,70% or More\r
72011,Anasco Municipio,PR,84.86,70% or More\r
72013,Arecibo Municipio,PR,99.99,70% or More\r
72015,Arroyo Municipio,PR,86.8,70% or More\r
72017,Barceloneta Municipio,PR,81.76,70% or More\r
72019,Barranquitas Municipio,PR,97.67,70% or More\r
72021,Bayamon Municipio,PR,93.05,70% or More\r
72023,Cabo Rojo Municipio,PR,79.83,70% or More\r
72025,Caguas Municipio,PR,92.69,70% or More\r
72027,Camuy Municipio,PR,85.63,70% or More\r
72029,Canovanas Municipio,PR,91.29,70% or More\r
72031,Carolina Municipio,PR,87.29,70% or More\r
72033,Catano Municipio,PR,92.22,70% or More\r
72035,Cayey Municipio,PR,94.04,70% or More\r
72037,Ceiba Municipio,PR,84.54,70% or More\r
72039,Ciales Municipio,PR,99.99,70% or More\r
72041,Cidra Municipio,PR,92.23,70% or More\r
72043,Coamo Municipio,PR,89.12,70% or More\r
72045,Comerio Municipio,PR,86.28,70% or More\r
72047,Corozal Municipio,PR,99.99,70% or More\r
72049,Culebra Municipio,PR,77.05,70% or More\r
72051,Dorado Municipio,PR,99.99,70% or More\r
72053,Fajardo Municipio,PR,90.84,70% or More\r
72054,Florida Municipio,PR,99.99,70% or More\r
72055,Guanica Municipio,PR,86.39,70% or More\r
72057,Guayama Municipio,PR,81.7,70% or More\r
72059,Guayanilla Municipio,PR,99.99,70% or More\r
72061,Guaynabo Municipio,PR,88.51,70% or More\r
72063,Gurabo Municipio,PR,73.03,70% or More\r
72065,Hatillo Municipio,PR,76.15,70% or More\r
72067,Hormigueros Municipio,PR,79.1,70% or More\r
72069,Humacao Municipio,PR,93.09,70% or More\r
72071,Isabela Municipio,PR,86.44,70% or More\r
72073,Jayuya Municipio,PR,99.9,70% or More\r
72075,Juana Diaz Municipio,PR,89.65,70% or More\r
72077,Juncos Municipio,PR,94.44,70% or More\r
72079,Lajas Municipio,PR,87.75,70% or More\r
72081,Lares Municipio,PR,99.99,70% or More\r
72083,Las Marias Municipio,PR,99.99,70% or More\r
72085,Las Piedras Municipio,PR,90.97,70% or More\r
72087,Loiza Municipio,PR,78.72,70% or More\r
72089,Luquillo Municipio,PR,83.07,70% or More\r
72091,Manati Municipio,PR,89.68,70% or More\r
72093,Maricao Municipio,PR,83.2,70% or More\r
72095,Maunabo Municipio,PR,85.85,70% or More\r
72097,Mayaguez Municipio,PR,87.2,70% or More\r
72099,Moca Municipio,PR,92.51,70% or More\r
72101,Morovis Municipio,PR,93.01,70% or More\r
72103,Naguabo Municipio,PR,76.94,70% or More\r
72105,Naranjito Municipio,PR,98.92,70% or More\r
72107,Orocovis Municipio,PR,98.96,70% or More\r
72109,Patillas Municipio,PR,87.26,70% or More\r
72111,Penuelas Municipio,PR,99.99,70% or More\r
72113,Ponce Municipio,PR,99.99,70% or More\r
72115,Quebradillas Municipio,PR,96.63,70% or More\r
72117,Rincon Municipio,PR,81.69,70% or More\r
72119,Rio Grande Municipio,PR,87.71,70% or More\r
72121,Sabana Grande Municipio,PR,93.21,70% or More\r
72123,Salinas Municipio,PR,86.38,70% or More\r
72125,San German Municipio,PR,82.43,70% or More\r
72127,San Juan Municipio,PR,71.69,70% or More\r
72129,San Lorenzo Municipio,PR,91.1,70% or More\r
72131,San Sebastian Municipio,PR,99.99,70% or More\r
72133,Santa Isabel Municipio,PR,96.89,70% or More\r
72135,Toa Alta Municipio,PR,81.78,70% or More\r
72137,Toa Baja Municipio,PR,82.5,70% or More\r
72139,Trujillo Alto Municipio,PR,45.64,40% - 49.9%\r
72141,Utuado Municipio,PR,86.97,70% or More\r
72143,Vega Alta Municipio,PR,80.91,70% or More\r
72145,Vega Baja Municipio,PR,97.61,70% or More\r
72147,Vieques Municipio,PR,82.91,70% or More\r
72149,Villalba Municipio,PR,99.99,70% or More\r
72151,Yabucoa Municipio,PR,90.03,70% or More\r
72153,Yauco Municipio,PR,99.99,70% or More\r
44001,Bristol County,RI,84.65,70% or More\r
44003,Kent County,RI,74.15,70% or More\r
44005,Newport County,RI,85,70% or More\r
44007,Providence County,RI,71.5,70% or More\r
44009,Washington County,RI,78.25,70% or More\r
45001,Abbeville County,SC,22.3,20% - 29.9%\r
45003,Aiken County,SC,34.86,30% - 39.9%\r
45005,Allendale County,SC,44.07,40% - 49.9%\r
45007,Anderson County,SC,27.23,20% - 29.9%\r
45009,Bamberg County,SC,38.11,30% - 39.9%\r
45011,Barnwell County,SC,42.93,40% - 49.9%\r
45013,Beaufort County,SC,60.82,60% - 69.9%\r
45015,Berkeley County,SC,45.55,40% - 49.9%\r
45017,Calhoun County,SC,34.09,30% - 39.9%\r
45019,Charleston County,SC,63.1,60% - 69.9%\r
45021,Cherokee County,SC,20.92,20% - 29.9%\r
45023,Chester County,SC,30.54,30% - 39.9%\r
45025,Chesterfield County,SC,23.95,20% - 29.9%\r
45027,Clarendon County,SC,40.71,40% - 49.9%\r
45029,Colleton County,SC,36.06,30% - 39.9%\r
45031,Darlington County,SC,29.82,20% - 29.9%\r
45033,Dillon County,SC,25.64,20% - 29.9%\r
45035,Dorchester County,SC,52.27,50% - 59.9%\r
45037,Edgefield County,SC,42.18,40% - 49.9%\r
45039,Fairfield County,SC,42.17,40% - 49.9%\r
45041,Florence County,SC,41.86,40% - 49.9%\r
45043,Georgetown County,SC,42.32,40% - 49.9%\r
45045,Greenville County,SC,45.84,40% - 49.9%\r
45047,Greenwood County,SC,32.35,30% - 39.9%\r
45049,Hampton County,SC,54.26,50% - 59.9%\r
45051,Horry County,SC,40.86,40% - 49.9%\r
45053,Jasper County,SC,35.03,30% - 39.9%\r
45055,Kershaw County,SC,53.67,50% - 59.9%\r
45057,Lancaster County,SC,37.52,30% - 39.9%\r
45059,Laurens County,SC,23.13,20% - 29.9%\r
45061,Lee County,SC,30.43,30% - 39.9%\r
45063,Lexington County,SC,48.87,40% - 49.9%\r
45067,Marion County,SC,37.22,30% - 39.9%\r
45069,Marlboro County,SC,30.77,30% - 39.9%\r
45065,McCormick County,SC,44.31,40% - 49.9%\r
45071,Newberry County,SC,43.05,40% - 49.9%\r
45073,Oconee County,SC,27.64,20% - 29.9%\r
45075,Orangeburg County,SC,46.1,40% - 49.9%\r
45077,Pickens County,SC,34.97,30% - 39.9%\r
45079,Richland County,SC,64.96,60% - 69.9%\r
45081,Saluda County,SC,24.39,20% - 29.9%\r
45083,Spartanburg County,SC,31.64,30% - 39.9%\r
45085,Sumter County,SC,40.35,40% - 49.9%\r
45087,Union County,SC,20.93,20% - 29.9%\r
45089,Williamsburg County,SC,37,30% - 39.9%\r
45091,York County,SC,49.54,40% - 49.9%\r
46003,Aurora County,SD,35.48,30% - 39.9%\r
46005,Beadle County,SD,43.09,40% - 49.9%\r
46007,Bennett County,SD,65.85,60% - 69.9%\r
46009,Bon Homme County,SD,30.46,30% - 39.9%\r
46011,Brookings County,SD,53.9,50% - 59.9%\r
46013,Brown County,SD,47.02,40% - 49.9%\r
46015,Brule County,SD,52.45,50% - 59.9%\r
46017,Buffalo County,SD,74.37,70% or More\r
46019,Butte County,SD,21.32,20% - 29.9%\r
46021,Campbell County,SD,15.58,0% - 19.9%\r
46023,Charles Mix County,SD,59.45,50% - 59.9%\r
46025,Clark County,SD,31,30% - 39.9%\r
46027,Clay County,SD,84.41,70% or More\r
46029,Codington County,SD,34.26,30% - 39.9%\r
46031,Corson County,SD,51.02,50% - 59.9%\r
46033,Custer County,SD,26.47,20% - 29.9%\r
46035,Davison County,SD,63.13,60% - 69.9%\r
46037,Day County,SD,65.41,60% - 69.9%\r
46039,Deuel County,SD,28.27,20% - 29.9%\r
46041,Dewey County,SD,85.28,70% or More\r
46043,Douglas County,SD,23.83,20% - 29.9%\r
46045,Edmunds County,SD,30.39,30% - 39.9%\r
46047,Fall River County,SD,29.88,20% - 29.9%\r
46049,Faulk County,SD,41.01,40% - 49.9%\r
46051,Grant County,SD,36.31,30% - 39.9%\r
46053,Gregory County,SD,33.62,30% - 39.9%\r
46055,Haakon County,SD,17.42,0% - 19.9%\r
46057,Hamlin County,SD,27.33,20% - 29.9%\r
46059,Hand County,SD,28.07,20% - 29.9%\r
46061,Hanson County,SD,27.54,20% - 29.9%\r
46063,Harding County,SD,4.04,0% - 19.9%\r
46065,Hughes County,SD,58.71,50% - 59.9%\r
46067,Hutchinson County,SD,37.79,30% - 39.9%\r
46069,Hyde County,SD,31.68,30% - 39.9%\r
46071,Jackson County,SD,56.33,50% - 59.9%\r
46073,Jerauld County,SD,31.33,30% - 39.9%\r
46075,Jones County,SD,98.28,70% or More\r
46077,Kingsbury County,SD,42.62,40% - 49.9%\r
46079,Lake County,SD,42.61,40% - 49.9%\r
46081,Lawrence County,SD,49.97,40% - 49.9%\r
46083,Lincoln County,SD,62.44,60% - 69.9%\r
46085,Lyman County,SD,75.41,70% or More\r
46091,Marshall County,SD,41.41,40% - 49.9%\r
46087,McCook County,SD,44.49,40% - 49.9%\r
46089,McPherson County,SD,7.77,0% - 19.9%\r
46093,Meade County,SD,41.18,40% - 49.9%\r
46095,Mellette County,SD,36.19,30% - 39.9%\r
46097,Miner County,SD,30.57,30% - 39.9%\r
46099,Minnehaha County,SD,66.4,60% - 69.9%\r
46101,Moody County,SD,42.15,40% - 49.9%\r
46102,Oglala Lakota County,SD,99.99,70% or More\r
46103,Pennington County,SD,53.61,50% - 59.9%\r
46105,Perkins County,SD,5.91,0% - 19.9%\r
46107,Potter County,SD,29.17,20% - 29.9%\r
46109,Roberts County,SD,86.9,70% or More\r
46111,Sanborn County,SD,30.56,30% - 39.9%\r
46115,Spink County,SD,35.44,30% - 39.9%\r
46117,Stanley County,SD,38.57,30% - 39.9%\r
46119,Sully County,SD,26.61,20% - 29.9%\r
46121,Todd County,SD,82.98,70% or More\r
46123,Tripp County,SD,17.85,0% - 19.9%\r
46125,Turner County,SD,40.62,40% - 49.9%\r
46127,Union County,SD,39.13,30% - 39.9%\r
46129,Walworth County,SD,24.7,20% - 29.9%\r
46135,Yankton County,SD,56.67,50% - 59.9%\r
46137,Ziebach County,SD,34.33,30% - 39.9%\r
47001,Anderson County,TN,40.37,40% - 49.9%\r
47003,Bedford County,TN,28.24,20% - 29.9%\r
47005,Benton County,TN,21.12,20% - 29.9%\r
47007,Bledsoe County,TN,19.49,0% - 19.9%\r
47009,Blount County,TN,35.36,30% - 39.9%\r
47011,Bradley County,TN,25.1,20% - 29.9%\r
47013,Campbell County,TN,22.48,20% - 29.9%\r
47015,Cannon County,TN,13.3,0% - 19.9%\r
47017,Carroll County,TN,22.14,20% - 29.9%\r
47019,Carter County,TN,26.42,20% - 29.9%\r
47021,Cheatham County,TN,34.1,30% - 39.9%\r
47023,Chester County,TN,22.18,20% - 29.9%\r
47025,Claiborne County,TN,20.85,20% - 29.9%\r
47027,Clay County,TN,11.13,0% - 19.9%\r
47029,Cocke County,TN,26.66,20% - 29.9%\r
47031,Coffee County,TN,24.3,20% - 29.9%\r
47033,Crockett County,TN,27.79,20% - 29.9%\r
47035,Cumberland County,TN,21.75,20% - 29.9%\r
47037,Davidson County,TN,61.47,60% - 69.9%\r
47039,Decatur County,TN,16.18,0% - 19.9%\r
47041,DeKalb County,TN,16.19,0% - 19.9%\r
47043,Dickson County,TN,32.13,30% - 39.9%\r
47045,Dyer County,TN,22.76,20% - 29.9%\r
47047,Fayette County,TN,42.95,40% - 49.9%\r
47049,Fentress County,TN,10.06,0% - 19.9%\r
47051,Franklin County,TN,18.48,0% - 19.9%\r
47053,Gibson County,TN,19.88,0% - 19.9%\r
47055,Giles County,TN,18.54,0% - 19.9%\r
47057,Grainger County,TN,21.3,20% - 29.9%\r
47059,Greene County,TN,30.93,30% - 39.9%\r
47061,Grundy County,TN,12.35,0% - 19.9%\r
47063,Hamblen County,TN,26.65,20% - 29.9%\r
47065,Hamilton County,TN,52.42,50% - 59.9%\r
47067,Hancock County,TN,12.81,0% - 19.9%\r
47069,Hardeman County,TN,33.53,30% - 39.9%\r
47071,Hardin County,TN,20.43,20% - 29.9%\r
47073,Hawkins County,TN,24.18,20% - 29.9%\r
47075,Haywood County,TN,34.37,30% - 39.9%\r
47077,Henderson County,TN,19.79,0% - 19.9%\r
47079,Henry County,TN,24.83,20% - 29.9%\r
47081,Hickman County,TN,19.79,0% - 19.9%\r
47083,Houston County,TN,20.35,20% - 29.9%\r
47085,Humphreys County,TN,21.62,20% - 29.9%\r
47087,Jackson County,TN,13.3,0% - 19.9%\r
47089,Jefferson County,TN,33.56,30% - 39.9%\r
47091,Johnson County,TN,21.31,20% - 29.9%\r
47093,Knox County,TN,48.39,40% - 49.9%\r
47095,Lake County,TN,21.84,20% - 29.9%\r
47097,Lauderdale County,TN,15.49,0% - 19.9%\r
47099,Lawrence County,TN,19.65,0% - 19.9%\r
47101,Lewis County,TN,14.09,0% - 19.9%\r
47103,Lincoln County,TN,18.2,0% - 19.9%\r
47105,Loudon County,TN,33.9,30% - 39.9%\r
47111,Macon County,TN,10.75,0% - 19.9%\r
47113,Madison County,TN,42.4,40% - 49.9%\r
47115,Marion County,TN,27.48,20% - 29.9%\r
47117,Marshall County,TN,21.43,20% - 29.9%\r
47119,Maury County,TN,52.03,50% - 59.9%\r
47107,McMinn County,TN,18.81,0% - 19.9%\r
47109,McNairy County,TN,21.38,20% - 29.9%\r
47121,Meigs County,TN,33.03,30% - 39.9%\r
47123,Monroe County,TN,17.15,0% - 19.9%\r
47125,Montgomery County,TN,44.85,40% - 49.9%\r
47127,Moore County,TN,8.23,0% - 19.9%\r
47129,Morgan County,TN,22.45,20% - 29.9%\r
47131,Obion County,TN,17.41,0% - 19.9%\r
47133,Overton County,TN,14.73,0% - 19.9%\r
47135,Perry County,TN,21.47,20% - 29.9%\r
47137,Pickett County,TN,17.36,0% - 19.9%\r
47139,Polk County,TN,14.2,0% - 19.9%\r
47141,Putnam County,TN,31.74,30% - 39.9%\r
47143,Rhea County,TN,18.41,0% - 19.9%\r
47145,Roane County,TN,23.94,20% - 29.9%\r
47147,Robertson County,TN,34.63,30% - 39.9%\r
47149,Rutherford County,TN,48.32,40% - 49.9%\r
47151,Scott County,TN,14.88,0% - 19.9%\r
47153,Sequatchie County,TN,19.79,0% - 19.9%\r
47155,Sevier County,TN,32.97,30% - 39.9%\r
47157,Shelby County,TN,52.13,50% - 59.9%\r
47159,Smith County,TN,12.46,0% - 19.9%\r
47161,Stewart County,TN,25.54,20% - 29.9%\r
47163,Sullivan County,TN,40.22,40% - 49.9%\r
47165,Sumner County,TN,35.76,30% - 39.9%\r
47167,Tipton County,TN,25.84,20% - 29.9%\r
47169,Trousdale County,TN,20.53,20% - 29.9%\r
47171,Unicoi County,TN,35.01,30% - 39.9%\r
47173,Union County,TN,15.61,0% - 19.9%\r
47175,Van Buren County,TN,27.66,20% - 29.9%\r
47177,Warren County,TN,22.75,20% - 29.9%\r
47179,Washington County,TN,47.85,40% - 49.9%\r
47181,Wayne County,TN,24.45,20% - 29.9%\r
47183,Weakley County,TN,21.14,20% - 29.9%\r
47185,White County,TN,18.57,0% - 19.9%\r
47187,Williamson County,TN,57.11,50% - 59.9%\r
47189,Wilson County,TN,41.9,40% - 49.9%\r
48001,Anderson County,TX,0,No Data\r
48003,Andrews County,TX,0,No Data\r
48005,Angelina County,TX,0,No Data\r
48007,Aransas County,TX,41.21,40% - 49.9%\r
48009,Archer County,TX,0,No Data\r
48011,Armstrong County,TX,0,No Data\r
48013,Atascosa County,TX,0,No Data\r
48015,Austin County,TX,0,No Data\r
48017,Bailey County,TX,0,No Data\r
48019,Bandera County,TX,0,No Data\r
48021,Bastrop County,TX,56.12,50% - 59.9%\r
48023,Baylor County,TX,0,No Data\r
48025,Bee County,TX,0,No Data\r
48027,Bell County,TX,54.03,50% - 59.9%\r
48029,Bexar County,TX,77.66,70% or More\r
48031,Blanco County,TX,0,No Data\r
48033,Borden County,TX,0,No Data\r
48035,Bosque County,TX,0,No Data\r
48037,Bowie County,TX,23.74,20% - 29.9%\r
48039,Brazoria County,TX,59.24,50% - 59.9%\r
48041,Brazos County,TX,48.41,40% - 49.9%\r
48043,Brewster County,TX,0,No Data\r
48045,Briscoe County,TX,0,No Data\r
48047,Brooks County,TX,0,No Data\r
48049,Brown County,TX,0,No Data\r
48051,Burleson County,TX,0,No Data\r
48053,Burnet County,TX,0,No Data\r
48055,Caldwell County,TX,0,No Data\r
48057,Calhoun County,TX,0,No Data\r
48059,Callahan County,TX,0,No Data\r
48061,Cameron County,TX,99.99,70% or More\r
48063,Camp County,TX,0,No Data\r
48065,Carson County,TX,0,No Data\r
48067,Cass County,TX,16.61,0% - 19.9%\r
48069,Castro County,TX,0,No Data\r
48071,Chambers County,TX,0,No Data\r
48073,Cherokee County,TX,0,No Data\r
48075,Childress County,TX,0,No Data\r
48077,Clay County,TX,0,No Data\r
48079,Cochran County,TX,0,No Data\r
48081,Coke County,TX,0,No Data\r
48083,Coleman County,TX,0,No Data\r
48085,Collin County,TX,68.24,60% - 69.9%\r
48087,Collingsworth County,TX,0,No Data\r
48089,Colorado County,TX,0,No Data\r
48091,Comal County,TX,50.84,50% - 59.9%\r
48093,Comanche County,TX,0,No Data\r
48095,Concho County,TX,0,No Data\r
48097,Cooke County,TX,0,No Data\r
48099,Coryell County,TX,0,No Data\r
48101,Cottle County,TX,0,No Data\r
48103,Crane County,TX,0,No Data\r
48105,Crockett County,TX,0,No Data\r
48107,Crosby County,TX,0,No Data\r
48109,Culberson County,TX,0,No Data\r
48111,Dallam County,TX,0,No Data\r
48113,Dallas County,TX,61.72,60% - 69.9%\r
48115,Dawson County,TX,0,No Data\r
48117,Deaf Smith County,TX,0,No Data\r
48119,Delta County,TX,0,No Data\r
48121,Denton County,TX,59.95,50% - 59.9%\r
48123,DeWitt County,TX,0,No Data\r
48125,Dickens County,TX,0,No Data\r
48127,Dimmit County,TX,0,No Data\r
48129,Donley County,TX,0,No Data\r
48131,Duval County,TX,0,No Data\r
48133,Eastland County,TX,0,No Data\r
48135,Ector County,TX,37.45,30% - 39.9%\r
48137,Edwards County,TX,0,No Data\r
48141,El Paso County,TX,99.99,70% or More\r
48139,Ellis County,TX,0,No Data\r
48143,Erath County,TX,0,No Data\r
48145,Falls County,TX,0,No Data\r
48147,Fannin County,TX,0,No Data\r
48149,Fayette County,TX,0,No Data\r
48151,Fisher County,TX,0,No Data\r
48153,Floyd County,TX,0,No Data\r
48155,Foard County,TX,0,No Data\r
48157,Fort Bend County,TX,79.71,70% or More\r
48159,Franklin County,TX,0,No Data\r
48161,Freestone County,TX,0,No Data\r
48163,Frio County,TX,0,No Data\r
48165,Gaines County,TX,0,No Data\r
48167,Galveston County,TX,56.19,50% - 59.9%\r
48169,Garza County,TX,0,No Data\r
48171,Gillespie County,TX,0,No Data\r
48173,Glasscock County,TX,0,No Data\r
48175,Goliad County,TX,0,No Data\r
48177,Gonzales County,TX,0,No Data\r
48179,Gray County,TX,0,No Data\r
48181,Grayson County,TX,26.33,20% - 29.9%\r
48183,Gregg County,TX,0,No Data\r
48185,Grimes County,TX,0,No Data\r
48187,Guadalupe County,TX,55.75,50% - 59.9%\r
48189,Hale County,TX,0,No Data\r
48191,Hall County,TX,0,No Data\r
48193,Hamilton County,TX,0,No Data\r
48195,Hansford County,TX,0,No Data\r
48197,Hardeman County,TX,0,No Data\r
48199,Hardin County,TX,0,No Data\r
48201,Harris County,TX,68.71,60% - 69.9%\r
48203,Harrison County,TX,26.68,20% - 29.9%\r
48205,Hartley County,TX,0,No Data\r
48207,Haskell County,TX,0,No Data\r
48209,Hays County,TX,67.88,60% - 69.9%\r
48211,Hemphill County,TX,0,No Data\r
48213,Henderson County,TX,0,No Data\r
48215,Hidalgo County,TX,93.4,70% or More\r
48217,Hill County,TX,0,No Data\r
48219,Hockley County,TX,0,No Data\r
48221,Hood County,TX,0,No Data\r
48223,Hopkins County,TX,0,No Data\r
48225,Houston County,TX,0,No Data\r
48227,Howard County,TX,0,No Data\r
48229,Hudspeth County,TX,0,No Data\r
48231,Hunt County,TX,32.42,30% - 39.9%\r
48233,Hutchinson County,TX,14.99,0% - 19.9%\r
48235,Irion County,TX,0,No Data\r
48237,Jack County,TX,0,No Data\r
48239,Jackson County,TX,0,No Data\r
48241,Jasper County,TX,0,No Data\r
48243,Jeff Davis County,TX,0,No Data\r
48245,Jefferson County,TX,44.22,40% - 49.9%\r
48247,Jim Hogg County,TX,0,No Data\r
48249,Jim Wells County,TX,0,No Data\r
48251,Johnson County,TX,0,No Data\r
48253,Jones County,TX,0,No Data\r
48255,Karnes County,TX,0,No Data\r
48257,Kaufman County,TX,44.47,40% - 49.9%\r
48259,Kendall County,TX,0,No Data\r
48261,Kenedy County,TX,0,No Data\r
48263,Kent County,TX,0,No Data\r
48265,Kerr County,TX,0,No Data\r
48267,Kimble County,TX,0,No Data\r
48269,King County,TX,0,No Data\r
48271,Kinney County,TX,0,No Data\r
48273,Kleberg County,TX,0,No Data\r
48275,Knox County,TX,0,No Data\r
48283,La Salle County,TX,0,No Data\r
48277,Lamar County,TX,22.98,20% - 29.9%\r
48279,Lamb County,TX,0,No Data\r
48281,Lampasas County,TX,0,No Data\r
48285,Lavaca County,TX,0,No Data\r
48287,Lee County,TX,0,No Data\r
48289,Leon County,TX,0,No Data\r
48291,Liberty County,TX,0,No Data\r
48293,Limestone County,TX,0,No Data\r
48295,Lipscomb County,TX,9.77,0% - 19.9%\r
48297,Live Oak County,TX,0,No Data\r
48299,Llano County,TX,0,No Data\r
48301,Loving County,TX,0,No Data\r
48303,Lubbock County,TX,39.43,30% - 39.9%\r
48305,Lynn County,TX,0,No Data\r
48313,Madison County,TX,0,No Data\r
48315,Marion County,TX,24.03,20% - 29.9%\r
48317,Martin County,TX,0,No Data\r
48319,Mason County,TX,0,No Data\r
48321,Matagorda County,TX,0,No Data\r
48323,Maverick County,TX,99.99,70% or More\r
48307,McCulloch County,TX,0,No Data\r
48309,McLennan County,TX,42.98,40% - 49.9%\r
48311,McMullen County,TX,0,No Data\r
48325,Medina County,TX,0,No Data\r
48327,Menard County,TX,0,No Data\r
48329,Midland County,TX,36.99,30% - 39.9%\r
48331,Milam County,TX,0,No Data\r
48333,Mills County,TX,0,No Data\r
48335,Mitchell County,TX,0,No Data\r
48337,Montague County,TX,0,No Data\r
48339,Montgomery County,TX,51.34,50% - 59.9%\r
48341,Moore County,TX,0,No Data\r
48343,Morris County,TX,0,No Data\r
48345,Motley County,TX,0,No Data\r
48347,Nacogdoches County,TX,0,No Data\r
48349,Navarro County,TX,0,No Data\r
48351,Newton County,TX,0,No Data\r
48353,Nolan County,TX,0,No Data\r
48355,Nueces County,TX,59.02,50% - 59.9%\r
48357,Ochiltree County,TX,0,No Data\r
48359,Oldham County,TX,0,No Data\r
48361,Orange County,TX,19.56,0% - 19.9%\r
48363,Palo Pinto County,TX,0,No Data\r
48365,Panola County,TX,17.09,0% - 19.9%\r
48367,Parker County,TX,0,No Data\r
48369,Parmer County,TX,0,No Data\r
48371,Pecos County,TX,0,No Data\r
48373,Polk County,TX,23.15,20% - 29.9%\r
48375,Potter County,TX,0,No Data\r
48377,Presidio County,TX,0,No Data\r
48379,Rains County,TX,0,No Data\r
48381,Randall County,TX,29.66,20% - 29.9%\r
48383,Reagan County,TX,0,No Data\r
48385,Real County,TX,0,No Data\r
48387,Red River County,TX,0,No Data\r
48389,Reeves County,TX,0,No Data\r
48391,Refugio County,TX,0,No Data\r
48393,Roberts County,TX,0,No Data\r
48395,Robertson County,TX,0,No Data\r
48397,Rockwall County,TX,0,No Data\r
48399,Runnels County,TX,0,No Data\r
48401,Rusk County,TX,0,No Data\r
48403,Sabine County,TX,10.52,0% - 19.9%\r
48405,San Augustine County,TX,0,No Data\r
48407,San Jacinto County,TX,0,No Data\r
48409,San Patricio County,TX,0,No Data\r
48411,San Saba County,TX,0,No Data\r
48413,Schleicher County,TX,0,No Data\r
48415,Scurry County,TX,0,No Data\r
48417,Shackelford County,TX,0,No Data\r
48419,Shelby County,TX,19.76,0% - 19.9%\r
48421,Sherman County,TX,0,No Data\r
48423,Smith County,TX,33.11,30% - 39.9%\r
48425,Somervell County,TX,0,No Data\r
48427,Starr County,TX,0,No Data\r
48429,Stephens County,TX,0,No Data\r
48431,Sterling County,TX,0,No Data\r
48433,Stonewall County,TX,0,No Data\r
48435,Sutton County,TX,0,No Data\r
48437,Swisher County,TX,0,No Data\r
48439,Tarrant County,TX,53.37,50% - 59.9%\r
48441,Taylor County,TX,0,No Data\r
48443,Terrell County,TX,0,No Data\r
48445,Terry County,TX,0,No Data\r
48447,Throckmorton County,TX,0,No Data\r
48449,Titus County,TX,0,No Data\r
48451,Tom Green County,TX,0,No Data\r
48453,Travis County,TX,79.95,70% or More\r
48455,Trinity County,TX,0,No Data\r
48457,Tyler County,TX,0,No Data\r
48459,Upshur County,TX,0,No Data\r
48461,Upton County,TX,0,No Data\r
48463,Uvalde County,TX,0,No Data\r
48465,Val Verde County,TX,0,No Data\r
48467,Van Zandt County,TX,0,No Data\r
48469,Victoria County,TX,0,No Data\r
48471,Walker County,TX,38.53,30% - 39.9%\r
48473,Waller County,TX,0,No Data\r
48475,Ward County,TX,0,No Data\r
48477,Washington County,TX,0,No Data\r
48479,Webb County,TX,99.99,70% or More\r
48481,Wharton County,TX,0,No Data\r
48483,Wheeler County,TX,0,No Data\r
48485,Wichita County,TX,38.02,30% - 39.9%\r
48487,Wilbarger County,TX,0,No Data\r
48489,Willacy County,TX,0,No Data\r
48491,Williamson County,TX,68.94,60% - 69.9%\r
48493,Wilson County,TX,0,No Data\r
48495,Winkler County,TX,0,No Data\r
48497,Wise County,TX,0,No Data\r
48499,Wood County,TX,0,No Data\r
48501,Yoakum County,TX,0,No Data\r
48503,Young County,TX,0,No Data\r
48505,Zapata County,TX,0,No Data\r
48507,Zavala County,TX,0,No Data\r
49001,Beaver County,UT,33.6,30% - 39.9%\r
49003,Box Elder County,UT,47.72,40% - 49.9%\r
49005,Cache County,UT,60.99,60% - 69.9%\r
49007,Carbon County,UT,38.04,30% - 39.9%\r
49009,Daggett County,UT,38.95,30% - 39.9%\r
49011,Davis County,UT,71.97,70% or More\r
49013,Duchesne County,UT,39.86,30% - 39.9%\r
49015,Emery County,UT,28.15,20% - 29.9%\r
49017,Garfield County,UT,32.98,30% - 39.9%\r
49019,Grand County,UT,48.79,40% - 49.9%\r
49021,Iron County,UT,33.85,30% - 39.9%\r
49023,Juab County,UT,22.53,20% - 29.9%\r
49025,Kane County,UT,26.22,20% - 29.9%\r
49027,Millard County,UT,26.88,20% - 29.9%\r
49029,Morgan County,UT,49.01,40% - 49.9%\r
49031,Piute County,UT,17.88,0% - 19.9%\r
49033,Rich County,UT,32.94,30% - 39.9%\r
49035,Salt Lake County,UT,71.09,70% or More\r
49037,San Juan County,UT,61.98,60% - 69.9%\r
49039,Sanpete County,UT,42.99,40% - 49.9%\r
49041,Sevier County,UT,34.02,30% - 39.9%\r
49043,Summit County,UT,80.23,70% or More\r
49045,Tooele County,UT,60.29,60% - 69.9%\r
49047,Uintah County,UT,47.2,40% - 49.9%\r
49049,Utah County,UT,54.04,50% - 59.9%\r
49051,Wasatch County,UT,57.79,50% - 59.9%\r
49053,Washington County,UT,37.15,30% - 39.9%\r
49055,Wayne County,UT,29.96,20% - 29.9%\r
49057,Weber County,UT,59.33,50% - 59.9%\r
51001,Accomack County,VA,55.87,50% - 59.9%\r
51003,Albemarle County,VA,77.31,70% or More\r
51510,Alexandria city,VA,87.65,70% or More\r
51005,Alleghany County,VA,22.43,20% - 29.9%\r
51007,Amelia County,VA,17.85,0% - 19.9%\r
51009,Amherst County,VA,37.25,30% - 39.9%\r
51011,Appomattox County,VA,15.54,0% - 19.9%\r
51013,Arlington County,VA,85.7,70% or More\r
51015,Augusta County,VA,35.86,30% - 39.9%\r
51017,Bath County,VA,21.9,20% - 29.9%\r
51019,Bedford County,VA,25.67,20% - 29.9%\r
51021,Bland County,VA,20.94,20% - 29.9%\r
51023,Botetourt County,VA,36.25,30% - 39.9%\r
51520,Bristol city,VA,49.38,40% - 49.9%\r
51025,Brunswick County,VA,38.41,30% - 39.9%\r
51027,Buchanan County,VA,35.06,30% - 39.9%\r
51029,Buckingham County,VA,33.58,30% - 39.9%\r
51530,Buena Vista city,VA,0,No Data\r
51031,Campbell County,VA,24.1,20% - 29.9%\r
51033,Caroline County,VA,30,30% - 39.9%\r
51035,Carroll County,VA,20,20% - 29.9%\r
51037,Charlotte County,VA,21.26,20% - 29.9%\r
51540,Charlottesville city,VA,67.61,60% - 69.9%\r
51550,Chesapeake city,VA,41.82,40% - 49.9%\r
51041,Chesterfield County,VA,57.45,50% - 59.9%\r
51043,Clarke County,VA,52.51,50% - 59.9%\r
51570,Colonial Heights city,VA,29.29,20% - 29.9%\r
51580,Covington city,VA,0,No Data\r
51045,Craig County,VA,16.71,0% - 19.9%\r
51047,Culpeper County,VA,39.86,30% - 39.9%\r
51049,Cumberland County,VA,28.14,20% - 29.9%\r
51590,Danville city,VA,0,No Data\r
51051,Dickenson County,VA,37.35,30% - 39.9%\r
51053,Dinwiddie County,VA,29.9,20% - 29.9%\r
51595,Emporia city,VA,0,No Data\r
51057,Essex County,VA,29.55,20% - 29.9%\r
51600,Fairfax city,VA,65.71,60% - 69.9%\r
51059,Fairfax County,VA,93.25,70% or More\r
51610,Falls Church city,VA,72.24,70% or More\r
51061,Fauquier County,VA,57.44,50% - 59.9%\r
51063,Floyd County,VA,25.23,20% - 29.9%\r
51065,Fluvanna County,VA,60.21,60% - 69.9%\r
51620,Franklin city,VA,0,No Data\r
51067,Franklin County,VA,29.22,20% - 29.9%\r
51069,Frederick County,VA,39.02,30% - 39.9%\r
51630,Fredericksburg city,VA,39.17,30% - 39.9%\r
51640,Galax city,VA,0,No Data\r
51071,Giles County,VA,28.02,20% - 29.9%\r
51073,Gloucester County,VA,46.45,40% - 49.9%\r
51075,Goochland County,VA,57.3,50% - 59.9%\r
51077,Grayson County,VA,20.62,20% - 29.9%\r
51079,Greene County,VA,39.82,30% - 39.9%\r
51081,Greensville County,VA,23.09,20% - 29.9%\r
51083,Halifax County,VA,31.53,30% - 39.9%\r
51650,Hampton city,VA,51.69,50% - 59.9%\r
51085,Hanover County,VA,56.79,50% - 59.9%\r
51660,Harrisonburg city,VA,46.96,40% - 49.9%\r
51087,Henrico County,VA,57.61,50% - 59.9%\r
51089,Henry County,VA,25.33,20% - 29.9%\r
51091,Highland County,VA,47.73,40% - 49.9%\r
51670,Hopewell city,VA,23.56,20% - 29.9%\r
51093,Isle of Wight County,VA,44.54,40% - 49.9%\r
51095,James City County,VA,39.05,30% - 39.9%\r
51097,King and Queen County,VA,35.36,30% - 39.9%\r
51099,King George County,VA,35.38,30% - 39.9%\r
51101,King William County,VA,40.36,40% - 49.9%\r
51103,Lancaster County,VA,32.24,30% - 39.9%\r
51105,Lee County,VA,32.04,30% - 39.9%\r
51678,Lexington city,VA,56.82,50% - 59.9%\r
51107,Loudoun County,VA,88.88,70% or More\r
51109,Louisa County,VA,31.83,30% - 39.9%\r
51111,Lunenburg County,VA,35.58,30% - 39.9%\r
51680,Lynchburg city,VA,28.63,20% - 29.9%\r
51113,Madison County,VA,43.26,40% - 49.9%\r
51683,Manassas city,VA,52.39,50% - 59.9%\r
51685,Manassas Park city,VA,0,No Data\r
51690,Martinsville city,VA,0,No Data\r
51115,Mathews County,VA,38.99,30% - 39.9%\r
51117,Mecklenburg County,VA,24.84,20% - 29.9%\r
51119,Middlesex County,VA,51.97,50% - 59.9%\r
51121,Montgomery County,VA,56.17,50% - 59.9%\r
51125,Nelson County,VA,36.66,30% - 39.9%\r
51127,New Kent County,VA,41.33,40% - 49.9%\r
51700,Newport News city,VA,48.39,40% - 49.9%\r
51710,Norfolk city,VA,55.53,50% - 59.9%\r
51131,Northampton County,VA,60.23,60% - 69.9%\r
51133,Northumberland County,VA,29.03,20% - 29.9%\r
51720,Norton city,VA,0,No Data\r
51135,Nottoway County,VA,26.44,20% - 29.9%\r
51137,Orange County,VA,34.23,30% - 39.9%\r
51139,Page County,VA,20.69,20% - 29.9%\r
51141,Patrick County,VA,21.07,20% - 29.9%\r
51730,Petersburg city,VA,21.21,20% - 29.9%\r
51143,Pittsylvania County,VA,27.2,20% - 29.9%\r
51735,Poquoson city,VA,0,No Data\r
51740,Portsmouth city,VA,52.25,50% - 59.9%\r
51145,Powhatan County,VA,37.37,30% - 39.9%\r
51147,Prince Edward County,VA,27.03,20% - 29.9%\r
51149,Prince George County,VA,38.44,30% - 39.9%\r
51153,Prince William County,VA,81.49,70% or More\r
51155,Pulaski County,VA,37.3,30% - 39.9%\r
51750,Radford city,VA,35.63,30% - 39.9%\r
51157,Rappahannock County,VA,36.28,30% - 39.9%\r
51760,Richmond city,VA,38.32,30% - 39.9%\r
51159,Richmond County,VA,24.18,20% - 29.9%\r
51770,Roanoke city,VA,34.66,30% - 39.9%\r
51161,Roanoke County,VA,44.97,40% - 49.9%\r
51163,Rockbridge County,VA,32.45,30% - 39.9%\r
51165,Rockingham County,VA,33.62,30% - 39.9%\r
51167,Russell County,VA,31.06,30% - 39.9%\r
51775,Salem city,VA,0,No Data\r
51169,Scott County,VA,34.9,30% - 39.9%\r
51171,Shenandoah County,VA,35.18,30% - 39.9%\r
51173,Smyth County,VA,34.52,30% - 39.9%\r
51175,Southampton County,VA,25.26,20% - 29.9%\r
51177,Spotsylvania County,VA,41.41,40% - 49.9%\r
51179,Stafford County,VA,60.34,60% - 69.9%\r
51790,Staunton city,VA,41.67,40% - 49.9%\r
51800,Suffolk city,VA,48.58,40% - 49.9%\r
51181,Surry County,VA,47.89,40% - 49.9%\r
51183,Sussex County,VA,20.74,20% - 29.9%\r
51185,Tazewell County,VA,32.28,30% - 39.9%\r
51810,Virginia Beach city,VA,58.69,50% - 59.9%\r
51187,Warren County,VA,28.94,20% - 29.9%\r
51191,Washington County,VA,40.56,40% - 49.9%\r
51820,Waynesboro city,VA,37.8,30% - 39.9%\r
51193,Westmoreland County,VA,30.03,30% - 39.9%\r
51830,Williamsburg city,VA,32.61,30% - 39.9%\r
51840,Winchester city,VA,44.42,40% - 49.9%\r
51195,Wise County,VA,36.24,30% - 39.9%\r
51197,Wythe County,VA,26.01,20% - 29.9%\r
51199,York County,VA,54.8,50% - 59.9%\r
50001,Addison County,VT,78.86,70% or More\r
50003,Bennington County,VT,46.48,40% - 49.9%\r
50005,Caledonia County,VT,33.23,30% - 39.9%\r
50007,Chittenden County,VT,80.98,70% or More\r
50009,Essex County,VT,43.24,40% - 49.9%\r
50011,Franklin County,VT,37.46,30% - 39.9%\r
50013,Grand Isle County,VT,74.5,70% or More\r
50015,Lamoille County,VT,67.19,60% - 69.9%\r
50017,Orange County,VT,57.19,50% - 59.9%\r
50019,Orleans County,VT,49.79,40% - 49.9%\r
50021,Rutland County,VT,65.9,60% - 69.9%\r
50023,Washington County,VT,50.13,50% - 59.9%\r
50025,Windham County,VT,75.36,70% or More\r
50027,Windsor County,VT,46.98,40% - 49.9%\r
53001,Adams County,WA,44.02,40% - 49.9%\r
53003,Asotin County,WA,25.52,20% - 29.9%\r
53005,Benton County,WA,47.14,40% - 49.9%\r
53007,Chelan County,WA,65.1,60% - 69.9%\r
53009,Clallam County,WA,53.23,50% - 59.9%\r
53011,Clark County,WA,60.15,60% - 69.9%\r
53013,Columbia County,WA,32.16,30% - 39.9%\r
53015,Cowlitz County,WA,44,40% - 49.9%\r
53017,Douglas County,WA,49.78,40% - 49.9%\r
53019,Ferry County,WA,59.3,50% - 59.9%\r
53021,Franklin County,WA,46.09,40% - 49.9%\r
53023,Garfield County,WA,40.14,40% - 49.9%\r
53025,Grant County,WA,45.12,40% - 49.9%\r
53027,Grays Harbor County,WA,47.42,40% - 49.9%\r
53029,Island County,WA,66.16,60% - 69.9%\r
53031,Jefferson County,WA,62.34,60% - 69.9%\r
53033,King County,WA,88.96,70% or More\r
53035,Kitsap County,WA,67.9,60% - 69.9%\r
53037,Kittitas County,WA,47.05,40% - 49.9%\r
53039,Klickitat County,WA,34.47,30% - 39.9%\r
53041,Lewis County,WA,39.4,30% - 39.9%\r
53043,Lincoln County,WA,31.98,30% - 39.9%\r
53045,Mason County,WA,50.22,50% - 59.9%\r
53047,Okanogan County,WA,48.16,40% - 49.9%\r
53049,Pacific County,WA,50.62,50% - 59.9%\r
53051,Pend Oreille County,WA,23.62,20% - 29.9%\r
53053,Pierce County,WA,63.39,60% - 69.9%\r
53055,San Juan County,WA,90.2,70% or More\r
53057,Skagit County,WA,62.51,60% - 69.9%\r
53059,Skamania County,WA,32.88,30% - 39.9%\r
53061,Snohomish County,WA,70.7,70% or More\r
53063,Spokane County,WA,51.39,50% - 59.9%\r
53065,Stevens County,WA,26.35,20% - 29.9%\r
53067,Thurston County,WA,68.46,60% - 69.9%\r
53069,Wahkiakum County,WA,27.04,20% - 29.9%\r
53071,Walla Walla County,WA,57.37,50% - 59.9%\r
53073,Whatcom County,WA,69.83,60% - 69.9%\r
53075,Whitman County,WA,52.27,50% - 59.9%\r
53077,Yakima County,WA,57.5,50% - 59.9%\r
55001,Adams County,WI,32.12,30% - 39.9%\r
55003,Ashland County,WI,64.6,60% - 69.9%\r
55005,Barron County,WI,32.47,30% - 39.9%\r
55007,Bayfield County,WI,61.69,60% - 69.9%\r
55009,Brown County,WI,57.98,50% - 59.9%\r
55011,Buffalo County,WI,39.66,30% - 39.9%\r
55013,Burnett County,WI,37.3,30% - 39.9%\r
55015,Calumet County,WI,41.4,40% - 49.9%\r
55017,Chippewa County,WI,40.74,40% - 49.9%\r
55019,Clark County,WI,17.54,0% - 19.9%\r
55021,Columbia County,WI,57.63,50% - 59.9%\r
55023,Crawford County,WI,39.75,30% - 39.9%\r
55025,Dane County,WI,87.27,70% or More\r
55027,Dodge County,WI,38.06,30% - 39.9%\r
55029,Door County,WI,57.01,50% - 59.9%\r
55031,Douglas County,WI,36.51,30% - 39.9%\r
55033,Dunn County,WI,44.79,40% - 49.9%\r
55035,Eau Claire County,WI,59.04,50% - 59.9%\r
55037,Florence County,WI,25.79,20% - 29.9%\r
55039,Fond du Lac County,WI,40.29,40% - 49.9%\r
55041,Forest County,WI,37.14,30% - 39.9%\r
55043,Grant County,WI,43.59,40% - 49.9%\r
55045,Green County,WI,54.9,50% - 59.9%\r
55047,Green Lake County,WI,32.89,30% - 39.9%\r
55049,Iowa County,WI,58.78,50% - 59.9%\r
55051,Iron County,WI,42.77,40% - 49.9%\r
55053,Jackson County,WI,42.54,40% - 49.9%\r
55055,Jefferson County,WI,48.34,40% - 49.9%\r
55057,Juneau County,WI,37.79,30% - 39.9%\r
55059,Kenosha County,WI,48.88,40% - 49.9%\r
55061,Kewaunee County,WI,34.62,30% - 39.9%\r
55063,La Crosse County,WI,72.04,70% or More\r
55065,Lafayette County,WI,45.92,40% - 49.9%\r
55067,Langlade County,WI,29.16,20% - 29.9%\r
55069,Lincoln County,WI,33.3,30% - 39.9%\r
55071,Manitowoc County,WI,42.63,40% - 49.9%\r
55073,Marathon County,WI,48.73,40% - 49.9%\r
55075,Marinette County,WI,27.81,20% - 29.9%\r
55077,Marquette County,WI,35.27,30% - 39.9%\r
55078,Menominee County,WI,96.85,70% or More\r
55079,Milwaukee County,WI,58.8,50% - 59.9%\r
55081,Monroe County,WI,40.59,40% - 49.9%\r
55083,Oconto County,WI,33.03,30% - 39.9%\r
55085,Oneida County,WI,44.31,40% - 49.9%\r
55087,Outagamie County,WI,57.12,50% - 59.9%\r
55089,Ozaukee County,WI,67.95,60% - 69.9%\r
55091,Pepin County,WI,44.19,40% - 49.9%\r
55093,Pierce County,WI,31.58,30% - 39.9%\r
55095,Polk County,WI,31.01,30% - 39.9%\r
55097,Portage County,WI,58.73,50% - 59.9%\r
55099,Price County,WI,41.75,40% - 49.9%\r
55101,Racine County,WI,46.86,40% - 49.9%\r
55103,Richland County,WI,50.49,50% - 59.9%\r
55105,Rock County,WI,53.69,50% - 59.9%\r
55107,Rusk County,WI,23.3,20% - 29.9%\r
55111,Sauk County,WI,50.17,50% - 59.9%\r
55113,Sawyer County,WI,58.57,50% - 59.9%\r
55115,Shawano County,WI,38.14,30% - 39.9%\r
55117,Sheboygan County,WI,48.2,40% - 49.9%\r
55109,St. Croix County,WI,41.86,40% - 49.9%\r
55119,Taylor County,WI,17.6,0% - 19.9%\r
55121,Trempealeau County,WI,53.79,50% - 59.9%\r
55123,Vernon County,WI,40.9,40% - 49.9%\r
55125,Vilas County,WI,38.39,30% - 39.9%\r
55127,Walworth County,WI,40.02,40% - 49.9%\r
55129,Washburn County,WI,40.22,40% - 49.9%\r
55131,Washington County,WI,40.43,40% - 49.9%\r
55133,Waukesha County,WI,61.69,60% - 69.9%\r
55135,Waupaca County,WI,35.74,30% - 39.9%\r
55137,Waushara County,WI,29.61,20% - 29.9%\r
55139,Winnebago County,WI,56.95,50% - 59.9%\r
55141,Wood County,WI,47.55,40% - 49.9%\r
54001,Barbour County,WV,35.8,30% - 39.9%\r
54003,Berkeley County,WV,41.39,40% - 49.9%\r
54005,Boone County,WV,47.47,40% - 49.9%\r
54007,Braxton County,WV,31.37,30% - 39.9%\r
54009,Brooke County,WV,32.74,30% - 39.9%\r
54011,Cabell County,WV,56.45,50% - 59.9%\r
54013,Calhoun County,WV,19.46,0% - 19.9%\r
54015,Clay County,WV,58.58,50% - 59.9%\r
54017,Doddridge County,WV,31.81,30% - 39.9%\r
54019,Fayette County,WV,50.13,50% - 59.9%\r
54021,Gilmer County,WV,41.29,40% - 49.9%\r
54023,Grant County,WV,12.81,0% - 19.9%\r
54025,Greenbrier County,WV,54.19,50% - 59.9%\r
54027,Hampshire County,WV,20.08,20% - 29.9%\r
54029,Hancock County,WV,31.94,30% - 39.9%\r
54031,Hardy County,WV,31.02,30% - 39.9%\r
54033,Harrison County,WV,37.77,30% - 39.9%\r
54035,Jackson County,WV,36.12,30% - 39.9%\r
54037,Jefferson County,WV,63.1,60% - 69.9%\r
54039,Kanawha County,WV,62.84,60% - 69.9%\r
54041,Lewis County,WV,39.58,30% - 39.9%\r
54043,Lincoln County,WV,47.2,40% - 49.9%\r
54045,Logan County,WV,53.62,50% - 59.9%\r
54049,Marion County,WV,39.26,30% - 39.9%\r
54051,Marshall County,WV,23.66,20% - 29.9%\r
54053,Mason County,WV,38.27,30% - 39.9%\r
54047,McDowell County,WV,29.01,20% - 29.9%\r
54055,Mercer County,WV,47.56,40% - 49.9%\r
54057,Mineral County,WV,39.4,30% - 39.9%\r
54059,Mingo County,WV,23.05,20% - 29.9%\r
54061,Monongalia County,WV,49.38,40% - 49.9%\r
54063,Monroe County,WV,33.19,30% - 39.9%\r
54065,Morgan County,WV,13.63,0% - 19.9%\r
54067,Nicholas County,WV,43.91,40% - 49.9%\r
54069,Ohio County,WV,51.75,50% - 59.9%\r
54071,Pendleton County,WV,43.92,40% - 49.9%\r
54073,Pleasants County,WV,30.63,30% - 39.9%\r
54075,Pocahontas County,WV,24.95,20% - 29.9%\r
54077,Preston County,WV,33.63,30% - 39.9%\r
54079,Putnam County,WV,45.26,40% - 49.9%\r
54081,Raleigh County,WV,37.89,30% - 39.9%\r
54083,Randolph County,WV,43.76,40% - 49.9%\r
54085,Ritchie County,WV,26.59,20% - 29.9%\r
54087,Roane County,WV,25.26,20% - 29.9%\r
54089,Summers County,WV,56.8,50% - 59.9%\r
54091,Taylor County,WV,25.21,20% - 29.9%\r
54093,Tucker County,WV,57.3,50% - 59.9%\r
54095,Tyler County,WV,24.41,20% - 29.9%\r
54097,Upshur County,WV,34.54,30% - 39.9%\r
54099,Wayne County,WV,41.08,40% - 49.9%\r
54101,Webster County,WV,42.37,40% - 49.9%\r
54103,Wetzel County,WV,26.22,20% - 29.9%\r
54105,Wirt County,WV,25.38,20% - 29.9%\r
54107,Wood County,WV,51.36,50% - 59.9%\r
54109,Wyoming County,WV,62.82,60% - 69.9%\r
56001,Albany County,WY,61.75,60% - 69.9%\r
56003,Big Horn County,WY,22.4,20% - 29.9%\r
56005,Campbell County,WY,15.89,0% - 19.9%\r
56007,Carbon County,WY,27.01,20% - 29.9%\r
56009,Converse County,WY,15.49,0% - 19.9%\r
56011,Crook County,WY,15.41,0% - 19.9%\r
56013,Fremont County,WY,78,70% or More\r
56015,Goshen County,WY,23.6,20% - 29.9%\r
56017,Hot Springs County,WY,22.22,20% - 29.9%\r
56019,Johnson County,WY,25.88,20% - 29.9%\r
56021,Laramie County,WY,43.19,40% - 49.9%\r
56023,Lincoln County,WY,26.05,20% - 29.9%\r
56025,Natrona County,WY,32.9,30% - 39.9%\r
56027,Niobrara County,WY,5.79,0% - 19.9%\r
56029,Park County,WY,27.04,20% - 29.9%\r
56031,Platte County,WY,21.05,20% - 29.9%\r
56033,Sheridan County,WY,34.33,30% - 39.9%\r
56035,Sublette County,WY,22.85,20% - 29.9%\r
56037,Sweetwater County,WY,35.87,30% - 39.9%\r
56039,Teton County,WY,93,70% or More\r
56041,Uinta County,WY,34.81,30% - 39.9%\r
56043,Washakie County,WY,19.92,0% - 19.9%\r
56045,Weston County,WY,13.39,0% - 19.9%\r
`, ci = `City,Longitude,Latitude,Value\r
Albuquerque,-106.650421,35.084385,1\r
Anaheim,-117.914299,33.836594,2\r
Anchorage,-149.900284,61.218056,3\r
Arlington,-97.108063,32.735687,4\r
Atlanta,-84.387985,33.748997,5\r
Aurora,-93.717979,36.97089,6\r
Austin,-97.743057,30.267153,7\r
Bakersfield,-119.018715,35.373291,8\r
Baltimore,-76.61219,39.290386,9\r
Baton Rouge,-91.187149,30.451468,10\r
Boise,-116.202316,43.615021,11\r
Boston,-71.058884,42.360081,12\r
Buffalo,-78.878372,42.886448,13\r
Chandler,-111.841248,33.30616,14\r
Charlotte,-80.843124,35.227085,15\r
Chesapeake,-76.287491,36.768208,16\r
Chicago,-87.629799,41.878113,17\r
Chula Vista,-117.084198,32.640053,18\r
Cincinnati,-84.512016,39.103119,19\r
Cleveland,-81.694359,41.499321,20\r
Colorado Springs,-104.821365,38.833881,21\r
Columbus,-82.998795,39.961178,22\r
Corpus Christi,-97.396378,27.800583,23\r
Dallas,-96.796989,32.776665,24\r
Denver,-104.99025,39.739235,25\r
Detroit,-83.045753,42.331429,26\r
District of Columbia,-77.036873,38.907192,27\r
Durham,-78.898621,35.994034,28\r
El Paso,-106.485023,31.761877,29\r
Fort Wayne,-85.139351,41.079273,30\r
Ft Wayne,-85.139351,41.079273,31\r
Fort Worth,-97.330765,32.755489,32\r
Fremont,-121.988571,37.548271,33\r
Fresno,-119.787125,36.737797,34\r
Garland,-96.638885,32.912624,35\r
Gilbert,-111.789024,33.352825,36\r
Glendale,-118.255074,34.142509,37\r
Greensboro,-79.791977,36.072636,38\r
Henderson,-114.98172,36.039524,39\r
Hialeah,-80.278107,25.857595,40\r
Honolulu,-157.858337,21.306944,41\r
Houston,-95.358421,29.749907,42\r
Indianapolis,-86.158066,39.768402,43\r
Irvine,-117.826508,33.684566,44\r
Irving,-96.948891,32.814018,45\r
Jacksonville,-81.655647,30.332184,46\r
Jersey City,-74.077644,40.728157,47\r
Kansas City,-94.578568,39.099728,48\r
Laredo,-99.507553,27.503561,49\r
Las Vegas,-115.139832,36.169941,50\r
Lexington,-84.503716,38.040585,51\r
Lincoln,-95.262955,37.346134,52\r
Long Beach,-118.193741,33.77005,53\r
Los Angeles,-118.243683,34.052235,54\r
Los Angeles County,-118.229362,34.058762,55\r
Louisville,-85.758453,38.252666,56\r
Lubbock,-101.855164,33.577862,57\r
Madison,-89.40123,43.073051,58\r
"Marion County, Indiana",-86.136543,39.781029,59\r
Memphis,-90.048981,35.149532,60\r
Mesa,-111.831474,33.415184,61\r
Miami,-80.191788,25.761681,62\r
Milwaukee,-87.906471,43.038902,63\r
Minneapolis,-93.265015,44.977753,64\r
"Montgomery County, Maryland",-77.199406,39.153515,65\r
Nashville,-86.781601,36.162663,66\r
New Orleans,-90.071533,29.951065,67\r
New York City,-74.005974,40.712776,68\r
Newark,-95.582733,37.443188,69\r
Norfolk,-76.285873,36.850769,70\r
North Las Vegas,-115.114571,36.19585,71\r
Oakland,-122.271111,37.804363,72\r
Oklahoma City,-97.516426,35.46756,73\r
Omaha,-95.934502,41.256538,74\r
Orlando,-81.379234,28.538336,75\r
Philadelphia,-75.165222,39.952583,76\r
Phoenix,-112.074036,33.448376,77\r
Pittsburgh,-79.995888,40.440624,78\r
Plano,-96.698883,33.019844,79\r
Portland,-122.658722,45.51223,80\r
Raleigh,-78.638176,35.779591,81\r
Reno,-119.813805,39.529633,82\r
"Richmond, Virginia",-77.43605,37.540726,83\r
Riverside,-117.375496,33.980602,84\r
Sacramento,-121.4944,38.581573,85\r
Saint Paul,-93.089958,44.953705,86\r
San Antonio,-98.493629,29.424122,87\r
San Diego,-117.161087,32.715736,88\r
San Francisco,-122.419418,37.774929,89\r
San Jose,-121.88633,37.338207,90\r
Santa Ana,-117.867653,33.745472,91\r
Scottsdale,-111.926048,33.494171,92\r
Seattle,-122.332069,47.606209,93\r
Spokane,-117.426048,47.658779,94\r
St. Louis,-90.199402,38.627003,95\r
St. Petersburg,-82.640289,27.767601,96\r
Stockton,-121.290779,37.957703,97\r
Tampa,-82.457176,27.950575,98\r
Toledo,-83.537865,41.652805,99\r
Tucson,-110.974709,32.222607,100\r
Tuscon,-110.974709,32.222607,101\r
Tulsa,-95.992775,36.15398,102\r
Virginia Beach,-75.977982,36.852924,103\r
Wichita,-97.330055,37.687176,104\r
Winston Salem,-80.244217,36.099861,105\r
Winston–Salem,-80.244217,36.099861,106\r
`, yi = `x,y1,y2,y3,y4\r
1,8,37,72,82\r
2,2,30,75,83\r
3,15,42,51,95\r
4,10,38,61,96\r
5,1,38,66,86\r
60,6,37,70,85\r
10,19,47,59,91\r
24,18,32,68,89\r
3,7,38,74,89\r
26,10,39,56,91\r
42,16,38,55,76\r
32,20,46,52,94\r
11,9,41,57,86\r
22,10,47,56,80\r
73,1,36,71,94\r
23,13,30,66,78\r
`, di = `Group_Category,Value\r
category one,21\r
category one,19\r
category one,23\r
category one,24\r
category two,18\r
category two,10\r
category two,12\r
category two,19\r
category three,30\r
category three,35\r
category three,36\r
category three,40\r
category four,50\r
category four,54\r
category four,42\r
category four,159\r
`, Ci = `[\r
  {\r
    "Date": "1/15/2016",\r
    "Data 1": "900",\r
    "Data 2": "135",\r
    "Data 3": "300",\r
    "Data 4": "95",\r
    "Data 5": "120",\r
    "Data 6": "310"\r
  },\r
  {\r
    "Date": "2/15/2016",\r
    "Data 1": "4000",\r
    "Data 2": "90",\r
    "Data 3": "240",\r
    "Data 4": "60",\r
    "Data 5": "160",\r
    "Data 6": "2000"\r
  },\r
  {\r
    "Date": "3/15/2016",\r
    "Data 1": "500",\r
    "Data 2": "300",\r
    "Data 3": "290",\r
    "Data 4": "100",\r
    "Data 5": "200",\r
    "Data 6": "250"\r
  },\r
  {\r
    "Date": "4/15/2016",\r
    "Data 1": "1200",\r
    "Data 2": "160",\r
    "Data 3": "230",\r
    "Data 4": "180",\r
    "Data 5": "160",\r
    "Data 6": "220"\r
  },\r
  {\r
    "Date": "5/15/2016",\r
    "Data 1": "8000",\r
    "Data 2": "350",\r
    "Data 3": "300",\r
    "Data 4": "150",\r
    "Data 5": "130",\r
    "Data 6": "100"\r
  },\r
  {\r
    "Date": "6/15/2016",\r
    "Data 1": "9000",\r
    "Data 2": "220",\r
    "Data 3": "320",\r
    "Data 4": "100",\r
    "Data 5": "220",\r
    "Data 6": "300"\r
  },\r
  {\r
    "Date": "7/15/2016",\r
    "Data 1": "900",\r
    "Data 2": "235",\r
    "Data 3": "300",\r
    "Data 4": "195",\r
    "Data 5": "120",\r
    "Data 6": "610"\r
  },\r
  {\r
    "Date": "8/15/2016",\r
    "Data 1": "3000",\r
    "Data 2": "900",\r
    "Data 3": "540",\r
    "Data 4": "600",\r
    "Data 5": "120",\r
    "Data 6": "200"\r
  },\r
  {\r
    "Date": "9/15/2016",\r
    "Data 1": "700",\r
    "Data 2": "200",\r
    "Data 3": "590",\r
    "Data 4": "900",\r
    "Data 5": "400",\r
    "Data 6": "650"\r
  },\r
  {\r
    "Date": "10/15/2016",\r
    "Data 1": "2200",\r
    "Data 2": "360",\r
    "Data 3": "930",\r
    "Data 4": "880",\r
    "Data 5": "760",\r
    "Data 6": "420"\r
  },\r
  {\r
    "Date": "11/15/2016",\r
    "Data 1": "5000",\r
    "Data 2": "1350",\r
    "Data 3": "300",\r
    "Data 4": "1150",\r
    "Data 5": "230",\r
    "Data 6": "600"\r
  },\r
  {\r
    "Date": "12/15/2016",\r
    "Data 1": "6000",\r
    "Data 2": "3220",\r
    "Data 3": "540",\r
    "Data 4": "300",\r
    "Data 5": "720",\r
    "Data 6": "3000"\r
  }\r
]\r
`, pi = `[\r
  {\r
    "Country": "Argentina",\r
    "Cases": "100",\r
    "Category": "Has not historically reported monkeypox",\r
    "AsOf": "11 Jul 2022 5:00 PM EDT",\r
    "longitude": "-63.6",\r
    "latitude": "-38.4"\r
  },\r
  {\r
    "Country": "New York City",\r
    "Cases": "10",\r
    "Category": "Has not historically reported monkeypox",\r
    "AsOf": "11 Jul 2022 5:00 PM EDT",\r
    "longitude": "-74.006",\r
    "latitude": "40.712"\r
  }\r
]`, fi = `date,quarter,upper_90,lower_90,random_col\r
1/1/2023,quarter one,90,10,67\r
1/2/2023,quarter one,90,10,11\r
1/3/2023,quarter one,90,10,94\r
1/4/2023,quarter one,90,10,95\r
1/5/2023,quarter one,90,10,79\r
1/6/2023,quarter one,90,10,2\r
1/7/2023,quarter one,90,10,36\r
1/8/2023,quarter one,90,10,9\r
1/9/2023,quarter one,90,10,3\r
1/10/2023,quarter one,90,10,64\r
1/11/2023,quarter one,90,10,48\r
1/12/2023,quarter one,90,10,94\r
1/13/2023,quarter one,90,10,38\r
1/14/2023,quarter one,90,10,33\r
1/15/2023,quarter one,90,10,23\r
1/16/2023,quarter one,90,10,13\r
1/17/2023,quarter one,90,10,89\r
1/18/2023,quarter one,90,10,12\r
1/19/2023,quarter one,90,10,24\r
1/20/2023,quarter one,90,10,86\r
1/21/2023,quarter one,90,10,17\r
1/22/2023,quarter one,90,10,37\r
1/23/2023,quarter one,90,10,9\r
1/24/2023,quarter one,90,10,15\r
1/25/2023,quarter one,90,10,7\r
1/26/2023,quarter one,90,10,40\r
1/27/2023,quarter one,90,10,18\r
1/28/2023,quarter one,90,10,67\r
1/29/2023,quarter one,90,10,40\r
1/30/2023,quarter one,90,10,84\r
1/31/2023,quarter one,90,10,81\r
2/1/2023,quarter one,90,10,16\r
2/2/2023,quarter one,90,10,85\r
2/3/2023,quarter one,90,10,48\r
2/4/2023,quarter one,90,10,45\r
2/5/2023,quarter one,90,10,93\r
2/6/2023,quarter one,90,10,77\r
2/7/2023,quarter one,90,10,35\r
2/8/2023,quarter one,90,10,44\r
2/9/2023,quarter one,90,10,57\r
2/10/2023,quarter one,90,10,92\r
2/11/2023,quarter one,90,10,50\r
2/12/2023,quarter one,90,10,81\r
2/13/2023,quarter one,90,10,13\r
2/14/2023,quarter one,90,10,31\r
2/15/2023,quarter one,90,10,52\r
2/16/2023,quarter one,90,10,91\r
2/17/2023,quarter one,90,10,57\r
2/18/2023,quarter one,90,10,79\r
2/19/2023,quarter one,90,10,75\r
2/20/2023,quarter one,90,10,8\r
2/21/2023,quarter one,90,10,11\r
2/22/2023,quarter one,90,10,41\r
2/23/2023,quarter one,90,10,20\r
2/24/2023,quarter one,90,10,80\r
2/25/2023,quarter one,90,10,65\r
2/26/2023,quarter one,90,10,76\r
2/27/2023,quarter one,90,10,11\r
2/28/2023,quarter one,90,10,88\r
3/1/2023,quarter one,90,10,92\r
3/2/2023,quarter one,90,10,53\r
3/3/2023,quarter one,90,10,89\r
3/4/2023,quarter one,90,10,40\r
3/5/2023,quarter one,90,10,26\r
3/6/2023,quarter one,90,10,67\r
3/7/2023,quarter one,90,10,79\r
3/8/2023,quarter one,90,10,13\r
3/9/2023,quarter one,90,10,71\r
3/10/2023,quarter one,90,10,52\r
3/11/2023,quarter one,90,10,69\r
3/12/2023,quarter one,90,10,89\r
3/13/2023,quarter one,90,10,55\r
3/14/2023,quarter one,90,10,77\r
3/15/2023,quarter one,90,10,19\r
3/16/2023,quarter one,90,10,16\r
3/17/2023,quarter one,90,10,33\r
3/18/2023,quarter one,90,10,54\r
3/19/2023,quarter one,90,10,49\r
3/20/2023,quarter one,90,10,29\r
3/21/2023,quarter one,90,10,85\r
3/22/2023,quarter one,90,10,53\r
3/23/2023,quarter one,90,10,25\r
3/24/2023,quarter one,90,10,36\r
3/25/2023,quarter one,90,10,79\r
3/26/2023,quarter one,90,10,100\r
3/27/2023,quarter one,90,10,12\r
3/28/2023,quarter one,90,10,71\r
3/29/2023,quarter one,90,10,46\r
3/30/2023,quarter one,90,10,32\r
3/31/2023,quarter one,90,10,81\r
4/1/2023,quarter two,80,20,70\r
4/2/2023,quarter two,80,20,84\r
4/3/2023,quarter two,80,20,97\r
4/4/2023,quarter two,80,20,69\r
4/5/2023,quarter two,80,20,76\r
4/6/2023,quarter two,80,20,69\r
4/7/2023,quarter two,80,20,9\r
4/8/2023,quarter two,80,20,53\r
4/9/2023,quarter two,80,20,63\r
4/10/2023,quarter two,80,20,26\r
4/11/2023,quarter two,80,20,9\r
4/12/2023,quarter two,80,20,48\r
4/13/2023,quarter two,80,20,36\r
4/14/2023,quarter two,80,20,29\r
4/15/2023,quarter two,80,20,66\r
4/16/2023,quarter two,80,20,53\r
4/17/2023,quarter two,80,20,10\r
4/18/2023,quarter two,80,20,62\r
4/19/2023,quarter two,80,20,84\r
4/20/2023,quarter two,80,20,88\r
4/21/2023,quarter two,80,20,27\r
4/22/2023,quarter two,80,20,81\r
4/23/2023,quarter two,80,20,16\r
4/24/2023,quarter two,80,20,95\r
4/25/2023,quarter two,80,20,80\r
4/26/2023,quarter two,80,20,53\r
4/27/2023,quarter two,80,20,65\r
4/28/2023,quarter two,80,20,39\r
4/29/2023,quarter two,80,20,1\r
4/30/2023,quarter two,80,20,37\r
5/1/2023,quarter two,80,20,70\r
5/2/2023,quarter two,80,20,88\r
5/3/2023,quarter two,80,20,75\r
5/4/2023,quarter two,80,20,80\r
5/5/2023,quarter two,80,20,45\r
5/6/2023,quarter two,80,20,70\r
5/7/2023,quarter two,80,20,8\r
5/8/2023,quarter two,80,20,2\r
5/9/2023,quarter two,80,20,41\r
5/10/2023,quarter two,80,20,42\r
5/11/2023,quarter two,80,20,88\r
5/12/2023,quarter two,80,20,94\r
5/13/2023,quarter two,80,20,31\r
5/14/2023,quarter two,80,20,19\r
5/15/2023,quarter two,80,20,62\r
5/16/2023,quarter two,80,20,62\r
5/17/2023,quarter two,80,20,33\r
5/18/2023,quarter two,80,20,86\r
5/19/2023,quarter two,80,20,36\r
5/20/2023,quarter two,80,20,82\r
5/21/2023,quarter two,80,20,52\r
5/22/2023,quarter two,80,20,64\r
5/23/2023,quarter two,80,20,82\r
5/24/2023,quarter two,80,20,85\r
5/25/2023,quarter two,80,20,87\r
5/26/2023,quarter two,80,20,23\r
5/27/2023,quarter two,80,20,61\r
5/28/2023,quarter two,80,20,64\r
5/29/2023,quarter two,80,20,14\r
5/30/2023,quarter two,80,20,73\r
5/31/2023,quarter two,80,20,92\r
6/1/2023,quarter two,80,20,85\r
6/2/2023,quarter two,80,20,75\r
6/3/2023,quarter two,80,20,67\r
6/4/2023,quarter two,80,20,39\r
6/5/2023,quarter two,80,20,39\r
6/6/2023,quarter two,80,20,92\r
6/7/2023,quarter two,80,20,70\r
6/8/2023,quarter two,80,20,48\r
6/9/2023,quarter two,80,20,69\r
6/10/2023,quarter two,80,20,74\r
6/11/2023,quarter two,80,20,40\r
6/12/2023,quarter two,80,20,34\r
6/13/2023,quarter two,80,20,38\r
6/14/2023,quarter two,80,20,14\r
6/15/2023,quarter two,80,20,42\r
6/16/2023,quarter two,80,20,16\r
6/17/2023,quarter two,80,20,47\r
6/18/2023,quarter two,80,20,43\r
6/19/2023,quarter two,80,20,28\r
6/20/2023,quarter two,80,20,88\r
6/21/2023,quarter two,80,20,70\r
6/22/2023,quarter two,80,20,63\r
6/23/2023,quarter two,80,20,43\r
6/24/2023,quarter two,80,20,47\r
6/25/2023,quarter two,80,20,80\r
6/26/2023,quarter two,80,20,6\r
6/27/2023,quarter two,80,20,13\r
6/28/2023,quarter two,80,20,39\r
6/29/2023,quarter two,80,20,62\r
6/30/2023,quarter two,80,20,26\r
7/1/2023,quarter three,70,30,96\r
7/2/2023,quarter three,70,30,0\r
7/3/2023,quarter three,70,30,24\r
7/4/2023,quarter three,70,30,4\r
7/5/2023,quarter three,70,30,39\r
7/6/2023,quarter three,70,30,1\r
7/7/2023,quarter three,70,30,18\r
7/8/2023,quarter three,70,30,38\r
7/9/2023,quarter three,70,30,92\r
7/10/2023,quarter three,70,30,11\r
7/11/2023,quarter three,70,30,48\r
7/12/2023,quarter three,70,30,62\r
7/13/2023,quarter three,70,30,82\r
7/14/2023,quarter three,70,30,55\r
7/15/2023,quarter three,70,30,63\r
7/16/2023,quarter three,70,30,26\r
7/17/2023,quarter three,70,30,26\r
7/18/2023,quarter three,70,30,22\r
7/19/2023,quarter three,70,30,65\r
7/20/2023,quarter three,70,30,1\r
7/21/2023,quarter three,70,30,16\r
7/22/2023,quarter three,70,30,20\r
7/23/2023,quarter three,70,30,44\r
7/24/2023,quarter three,70,30,38\r
7/25/2023,quarter three,70,30,33\r
7/26/2023,quarter three,70,30,9\r
7/27/2023,quarter three,70,30,8\r
7/28/2023,quarter three,70,30,70\r
7/29/2023,quarter three,70,30,16\r
7/30/2023,quarter three,70,30,26\r
7/31/2023,quarter three,70,30,93\r
8/1/2023,quarter three,70,30,5\r
8/2/2023,quarter three,70,30,9\r
8/3/2023,quarter three,70,30,66\r
8/4/2023,quarter three,70,30,15\r
8/5/2023,quarter three,70,30,3\r
8/6/2023,quarter three,70,30,28\r
8/7/2023,quarter three,70,30,93\r
8/8/2023,quarter three,70,30,88\r
8/9/2023,quarter three,70,30,87\r
8/10/2023,quarter three,70,30,27\r
8/11/2023,quarter three,70,30,51\r
8/12/2023,quarter three,70,30,25\r
8/13/2023,quarter three,70,30,6\r
8/14/2023,quarter three,70,30,87\r
8/15/2023,quarter three,70,30,83\r
8/16/2023,quarter three,70,30,61\r
8/17/2023,quarter three,70,30,93\r
8/18/2023,quarter three,70,30,91\r
8/19/2023,quarter three,70,30,87\r
8/20/2023,quarter three,70,30,99\r
8/21/2023,quarter three,70,30,27\r
8/22/2023,quarter three,70,30,91\r
8/23/2023,quarter three,70,30,100\r
8/24/2023,quarter three,70,30,36\r
8/25/2023,quarter three,70,30,73\r
8/26/2023,quarter three,70,30,73\r
8/27/2023,quarter three,70,30,80\r
8/28/2023,quarter three,70,30,100\r
8/29/2023,quarter three,70,30,84\r
8/30/2023,quarter three,70,30,40\r
8/31/2023,quarter three,70,30,30\r
9/1/2023,quarter three,70,30,6\r
9/2/2023,quarter three,70,30,26\r
9/3/2023,quarter three,70,30,45\r
9/4/2023,quarter three,70,30,1\r
9/5/2023,quarter three,70,30,14\r
9/6/2023,quarter three,70,30,44\r
9/7/2023,quarter three,70,30,93\r
9/8/2023,quarter three,70,30,63\r
9/9/2023,quarter three,70,30,65\r
9/10/2023,quarter three,70,30,79\r
9/11/2023,quarter three,70,30,90\r
9/12/2023,quarter three,70,30,23\r
9/13/2023,quarter three,70,30,95\r
9/14/2023,quarter three,70,30,64\r
9/15/2023,quarter three,70,30,32\r
9/16/2023,quarter three,70,30,39\r
9/17/2023,quarter three,70,30,67\r
9/18/2023,quarter three,70,30,9\r
9/19/2023,quarter three,70,30,48\r
9/20/2023,quarter three,70,30,49\r
9/21/2023,quarter three,70,30,56\r
9/22/2023,quarter three,70,30,59\r
9/23/2023,quarter three,70,30,0\r
9/24/2023,quarter three,70,30,94\r
9/25/2023,quarter three,70,30,86\r
9/26/2023,quarter three,70,30,37\r
9/27/2023,quarter three,70,30,50\r
9/28/2023,quarter three,70,30,31\r
9/29/2023,quarter three,70,30,44\r
9/30/2023,quarter three,70,30,48\r
10/1/2023,quarter four,60,40,76\r
10/2/2023,quarter four,60,40,14\r
10/3/2023,quarter four,60,40,76\r
10/4/2023,quarter four,60,40,12\r
10/5/2023,quarter four,60,40,25\r
10/6/2023,quarter four,60,40,86\r
10/7/2023,quarter four,60,40,69\r
10/8/2023,quarter four,60,40,86\r
10/9/2023,quarter four,60,40,99\r
10/10/2023,quarter four,60,40,24\r
10/11/2023,quarter four,60,40,69\r
10/12/2023,quarter four,60,40,42\r
10/13/2023,quarter four,60,40,1\r
10/14/2023,quarter four,60,40,72\r
10/15/2023,quarter four,60,40,85\r
10/16/2023,quarter four,60,40,2\r
10/17/2023,quarter four,60,40,42\r
10/18/2023,quarter four,60,40,55\r
10/19/2023,quarter four,60,40,59\r
10/20/2023,quarter four,60,40,71\r
10/21/2023,quarter four,60,40,19\r
10/22/2023,quarter four,60,40,43\r
10/23/2023,quarter four,60,40,29\r
10/24/2023,quarter four,60,40,78\r
10/25/2023,quarter four,60,40,21\r
10/26/2023,quarter four,60,40,76\r
10/27/2023,quarter four,60,40,65\r
10/28/2023,quarter four,60,40,88\r
10/29/2023,quarter four,60,40,41\r
10/30/2023,quarter four,60,40,31\r
10/31/2023,quarter four,60,40,71\r
11/1/2023,quarter four,60,40,59\r
11/2/2023,quarter four,60,40,65\r
11/3/2023,quarter four,60,40,91\r
11/4/2023,quarter four,60,40,60\r
11/5/2023,quarter four,60,40,22\r
11/6/2023,quarter four,60,40,26\r
11/7/2023,quarter four,60,40,10\r
11/8/2023,quarter four,60,40,39\r
11/9/2023,quarter four,60,40,67\r
11/10/2023,quarter four,60,40,0\r
11/11/2023,quarter four,60,40,19\r
11/12/2023,quarter four,60,40,9\r
11/13/2023,quarter four,60,40,70\r
11/14/2023,quarter four,60,40,86\r
11/15/2023,quarter four,60,40,40\r
11/16/2023,quarter four,60,40,7\r
11/17/2023,quarter four,60,40,57\r
11/18/2023,quarter four,60,40,16\r
11/19/2023,quarter four,60,40,24\r
11/20/2023,quarter four,60,40,68\r
11/21/2023,quarter four,60,40,36\r
11/22/2023,quarter four,60,40,62\r
11/23/2023,quarter four,60,40,96\r
11/24/2023,quarter four,60,40,75\r
11/25/2023,quarter four,60,40,55\r
11/26/2023,quarter four,60,40,14\r
11/27/2023,quarter four,60,40,60\r
11/28/2023,quarter four,60,40,23\r
11/29/2023,quarter four,60,40,8\r
11/30/2023,quarter four,60,40,82\r
12/1/2023,quarter four,60,40,27\r
12/2/2023,quarter four,60,40,67\r
12/3/2023,quarter four,60,40,47\r
12/4/2023,quarter four,60,40,73\r
12/5/2023,quarter four,60,40,33\r
12/6/2023,quarter four,60,40,73\r
12/7/2023,quarter four,60,40,85\r
12/8/2023,quarter four,60,40,83\r
12/9/2023,quarter four,60,40,14\r
12/10/2023,quarter four,60,40,32\r
12/11/2023,quarter four,60,40,13\r
12/12/2023,quarter four,60,40,58\r
12/13/2023,quarter four,60,40,21\r
12/14/2023,quarter four,60,40,92\r
12/15/2023,quarter four,60,40,28\r
12/16/2023,quarter four,60,40,12\r
12/17/2023,quarter four,60,40,3\r
12/18/2023,quarter four,60,40,30\r
12/19/2023,quarter four,60,40,39\r
12/20/2023,quarter four,60,40,64\r
12/21/2023,quarter four,60,40,84\r
12/22/2023,quarter four,60,40,19\r
12/23/2023,quarter four,60,40,11\r
12/24/2023,quarter four,60,40,41\r
12/25/2023,quarter four,60,40,39\r
12/26/2023,quarter four,60,40,22\r
12/27/2023,quarter four,60,40,32\r
12/28/2023,quarter four,60,40,99\r
12/29/2023,quarter four,60,40,56\r
12/30/2023,quarter four,60,40,56\r
12/31/2023,quarter four,60,40,76\r
`, gi = `[\r
  {\r
    "Country": "Atlanta",\r
    "Data": 10,\r
    "Link": "",\r
    "Sample Categories": "Category 1",\r
    "Regions": "North America"\r
  },\r
  {\r
    "Country": "Aruba",\r
    "Data": 0,\r
    "Link": "",\r
    "Sample Categories": "Category 1",\r
    "Regions": "North America"\r
  },\r
  {\r
    "Country": "Afghanistan",\r
    "Data": 59,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Angola",\r
    "Data": 65,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Anguilla",\r
    "Data": 15,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Albania",\r
    "Data": 73,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Åland",\r
    "Data": 99,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Andorra",\r
    "Data": 75,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "United Arab Emirates",\r
    "Data": 62,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Argentina",\r
    "Data": 65,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Armenia",\r
    "Data": 23,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "American Samoa",\r
    "Data": 48,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Ashmore and Cartier Is.",\r
    "Data": 22,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Fr. S. Antarctic Lands",\r
    "Data": 65,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Antigua and Barb.",\r
    "Data": 91,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Australia",\r
    "Data": 57,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Austria",\r
    "Data": 64,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Azerbaijan",\r
    "Data": 60,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Burundi",\r
    "Data": 95,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Belgium",\r
    "Data": 88,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Benin",\r
    "Data": 1,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Burkina Faso",\r
    "Data": 29,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Bangladesh",\r
    "Data": 46,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Bulgaria",\r
    "Data": 85,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Bahrain",\r
    "Data": 63,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Bahamas",\r
    "Data": 38,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Bosnia and Herz.",\r
    "Data": 69,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "St-Barthélemy",\r
    "Data": 37,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Belarus",\r
    "Data": 35,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Belize",\r
    "Data": 52,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Bermuda",\r
    "Data": 29,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Bolivia",\r
    "Data": 20,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Brazil",\r
    "Data": 33,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Barbados",\r
    "Data": 12,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Brunei",\r
    "Data": 73,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Bhutan",\r
    "Data": 2,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Botswana",\r
    "Data": 11,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Central African Rep.",\r
    "Data": 55,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Canada",\r
    "Data": 14,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Switzerland",\r
    "Data": 89,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Chile",\r
    "Data": 21,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "China",\r
    "Data": 70,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Côte d'Ivoire",\r
    "Data": 84,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Cameroon",\r
    "Data": 65,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Dem. Rep. Congo",\r
    "Data": 97,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Congo",\r
    "Data": 45,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Cook Is.",\r
    "Data": 5,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Colombia",\r
    "Data": 92,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Comoros",\r
    "Data": 65,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Cabo Verde",\r
    "Data": 63,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Costa Rica",\r
    "Data": 21,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Cuba",\r
    "Data": 0,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Curaçao",\r
    "Data": 64,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Cayman Is.",\r
    "Data": 56,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "N. Cyprus",\r
    "Data": 78,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Cyprus",\r
    "Data": 74,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Czechia",\r
    "Data": 26,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Germany",\r
    "Data": 31,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Djibouti",\r
    "Data": 22,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Dominica",\r
    "Data": 2,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Denmark",\r
    "Data": 51,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Dominican Rep.",\r
    "Data": 84,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Algeria",\r
    "Data": 58,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Ecuador",\r
    "Data": 52,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Egypt",\r
    "Data": 29,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Eritrea",\r
    "Data": 70,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Spain",\r
    "Data": 9,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Estonia",\r
    "Data": 13,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Ethiopia",\r
    "Data": 17,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Finland",\r
    "Data": 9,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Fiji",\r
    "Data": 7,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Falkland Is.",\r
    "Data": 18,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "France",\r
    "Data": 73,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Faeroe Is.",\r
    "Data": 60,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Micronesia",\r
    "Data": 73,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Gabon",\r
    "Data": 72,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "United Kingdom",\r
    "Data": 5,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Georgia",\r
    "Data": 69,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Guernsey",\r
    "Data": 2,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Ghana",\r
    "Data": 71,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Guinea",\r
    "Data": 32,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Gambia",\r
    "Data": 39,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Guinea-Bissau",\r
    "Data": 48,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Eq. Guinea",\r
    "Data": 74,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Greece",\r
    "Data": 17,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Grenada",\r
    "Data": 37,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Greenland",\r
    "Data": 15,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Guatemala",\r
    "Data": 42,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Guam",\r
    "Data": 17,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Guyana",\r
    "Data": 11,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Hong Kong",\r
    "Data": 49,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Heard I. and McDonald Is.",\r
    "Data": 32,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Honduras",\r
    "Data": 27,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Croatia",\r
    "Data": 41,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Haiti",\r
    "Data": 33,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Hungary",\r
    "Data": 41,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Indonesia",\r
    "Data": 4,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Isle of Man",\r
    "Data": 63,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "India",\r
    "Data": 18,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Indian Ocean Ter.",\r
    "Data": 32,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Br. Indian Ocean Ter.",\r
    "Data": 66,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Ireland",\r
    "Data": 36,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Iran",\r
    "Data": 36,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Iraq",\r
    "Data": 0,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Iceland",\r
    "Data": 85,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Israel",\r
    "Data": 75,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Italy",\r
    "Data": 0,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Jamaica",\r
    "Data": 85,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Jersey",\r
    "Data": 99,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Jordan",\r
    "Data": 51,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Japan",\r
    "Data": 61,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Siachen Glacier",\r
    "Data": 5,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Kazakhstan",\r
    "Data": 0,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Kenya",\r
    "Data": 73,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Kyrgyzstan",\r
    "Data": 15,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Cambodia",\r
    "Data": 43,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Kiribati",\r
    "Data": 16,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "St. Kitts and Nevis",\r
    "Data": 85,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "South Korea",\r
    "Data": 60,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Kosovo",\r
    "Data": 97,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Kuwait",\r
    "Data": 31,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Laos",\r
    "Data": 8,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Lebanon",\r
    "Data": 86,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Liberia",\r
    "Data": 58,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Libya",\r
    "Data": 87,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Saint Lucia",\r
    "Data": 67,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Liechtenstein",\r
    "Data": 60,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Sri Lanka",\r
    "Data": 55,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Lesotho",\r
    "Data": 56,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Lithuania",\r
    "Data": 31,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Luxembourg",\r
    "Data": 63,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Latvia",\r
    "Data": 44,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Macao",\r
    "Data": 69,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "St-Martin",\r
    "Data": 81,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Morocco",\r
    "Data": 69,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Monaco",\r
    "Data": 8,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Moldova",\r
    "Data": 89,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Madagascar",\r
    "Data": 1,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Maldives",\r
    "Data": 50,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Mexico",\r
    "Data": 1,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Marshall Is.",\r
    "Data": 26,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Macedonia",\r
    "Data": 61,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Mali",\r
    "Data": 45,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Malta",\r
    "Data": 89,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Myanmar",\r
    "Data": 82,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Montenegro",\r
    "Data": 72,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Mongolia",\r
    "Data": 51,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "N. Mariana Is.",\r
    "Data": 22,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Mozambique",\r
    "Data": 20,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Mauritania",\r
    "Data": 40,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Montserrat",\r
    "Data": 3,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Mauritius",\r
    "Data": 2,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Malawi",\r
    "Data": 26,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Malaysia",\r
    "Data": 89,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Namibia",\r
    "Data": 70,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "New Caledonia",\r
    "Data": 93,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Niger",\r
    "Data": 21,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Norfolk Island",\r
    "Data": 5,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Nigeria",\r
    "Data": 43,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Nicaragua",\r
    "Data": 23,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Niue",\r
    "Data": 17,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Netherlands",\r
    "Data": 11,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Norway",\r
    "Data": 47,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Nepal",\r
    "Data": 4,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Nauru",\r
    "Data": 21,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "New Zealand",\r
    "Data": 4,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Oman",\r
    "Data": 65,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Pakistan",\r
    "Data": 85,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Panama",\r
    "Data": 66,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Pitcairn Is.",\r
    "Data": 89,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Peru",\r
    "Data": 16,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Philippines",\r
    "Data": 49,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Palau",\r
    "Data": 37,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Papua New Guinea",\r
    "Data": 1,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Poland",\r
    "Data": 14,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Puerto Rico",\r
    "Data": 62,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "North Korea",\r
    "Data": 92,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Portugal",\r
    "Data": 77,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Paraguay",\r
    "Data": 19,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Palestine",\r
    "Data": 28,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Fr. Polynesia",\r
    "Data": 69,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Qatar",\r
    "Data": 40,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "Romania",\r
    "Data": 51,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Russia",\r
    "Data": 13,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Rwanda",\r
    "Data": 91,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "W. Sahara",\r
    "Data": 64,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "Saudi Arabia",\r
    "Data": 90,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "Sudan",\r
    "Data": 58,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "S. Sudan",\r
    "Data": 93,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Senegal",\r
    "Data": 15,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "Singapore",\r
    "Data": 80,\r
    "Link": "",\r
    "Sample Categories": "Category 1"\r
  },\r
  {\r
    "Country": "S. Geo. and the Is.",\r
    "Data": 90,\r
    "Link": "",\r
    "Sample Categories": "Category 2"\r
  },\r
  {\r
    "Country": "Saint Helena",\r
    "Data": 49,\r
    "Link": "",\r
    "Sample Categories": "Category 3"\r
  },\r
  {\r
    "Country": "Solomon Is.",\r
    "Data": 77,\r
    "Link": "",\r
    "Sample Categories": "Category 4"\r
  },\r
  {\r
    "Country": "Sierra Leone",\r
    "Data": 33,\r
    "Link": "",\r
    "Sample Categories": "Category 5"\r
  },\r
  {\r
    "Country": "El Salvador",\r
    "Data": 18,\r
    "Link": "",\r
    "Sample Categories": "Category 6"\r
  },\r
  {\r
    "Country": "San Marino",\r
    "Data": 42,\r
    "Link": "",\r
    "Sample Categories": "Category 7"\r
  },\r
  {\r
    "Country": "Somaliland",\r
    "Data": 52,\r
    "Link": "",\r
    "Sample Categories": "Category 8"\r
  },\r
  {\r
    "Country": "Somalia",\r
    "Data": 68,\r
    "Link": "",\r
    "Sample Categories": "Category 9"\r
  },\r
  {\r
    "Country": "St. Pierre and Miquelon",\r
    "Data": 12,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Serbia",\r
    "Data": 12,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "São Tomé and Principe",\r
    "Data": 50,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Suriname",\r
    "Data": 54,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Slovakia",\r
    "Data": 1,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Slovenia",\r
    "Data": 77,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Sweden",\r
    "Data": 77,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Swaziland",\r
    "Data": 48,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Sint Maarten",\r
    "Data": 75,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Seychelles",\r
    "Data": 73,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Syria",\r
    "Data": 69,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Turks and Caicos Is.",\r
    "Data": 73,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Chad",\r
    "Data": 16,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Togo",\r
    "Data": 83,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Thailand",\r
    "Data": 84,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Tajikistan",\r
    "Data": 55,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Turkmenistan",\r
    "Data": 59,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Timor-Leste",\r
    "Data": 45,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Tonga",\r
    "Data": 43,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Trinidad and Tobago",\r
    "Data": 22,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Tunisia",\r
    "Data": 93,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Turkey",\r
    "Data": 54,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Taiwan",\r
    "Data": 26,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Tanzania",\r
    "Data": 54,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Uganda",\r
    "Data": 55,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Ukraine",\r
    "Data": 57,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Uruguay",\r
    "Data": 15,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "United States of America",\r
    "Data": 45,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Uzbekistan",\r
    "Data": 96,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Vatican",\r
    "Data": 87,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "St. Vin. and Gren.",\r
    "Data": 12,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Venezuela",\r
    "Data": 61,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "British Virgin Is.",\r
    "Data": 91,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "U.S. Virgin Is.",\r
    "Data": 27,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Vietnam",\r
    "Data": 82,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Vanuatu",\r
    "Data": 56,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Wallis and Futuna Is.",\r
    "Data": 76,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Samoa",\r
    "Data": 4,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Yemen",\r
    "Data": 39,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "South Africa",\r
    "Data": 24,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Zambia",\r
    "Data": 38,\r
    "Link": "",\r
    "Sample Categories": ""\r
  },\r
  {\r
    "Country": "Zimbabwe",\r
    "Data": 35,\r
    "Link": "https://cdc.gov/",\r
    "Sample Categories": ""\r
  }\r
]`, mi = `[\r
  {\r
    "Current Week Positivity": "20",\r
    "State": "REGION 1",\r
    "Change": "0.2"\r
  },\r
  {\r
    "Current Week Positivity": "27",\r
    "State": "region 2",\r
    "Change": "-0.5"\r
  },\r
  {\r
    "Current Week Positivity": "26",\r
    "State": "region 3",\r
    "Change": "-.08"\r
  },\r
  {\r
    "Current Week Positivity": "30",\r
    "State": "region 4",\r
    "Change": "0.8"\r
  },\r
  {\r
    "Current Week Positivity": "14",\r
    "State": "region 5",\r
    "Change": "0.5"\r
  },\r
  {\r
    "Current Week Positivity": "25",\r
    "State": "region 6",\r
    "Change": "0.05"\r
  },\r
  {\r
    "Current Week Positivity": "0",\r
    "State": "region 7",\r
    "Change": "0"\r
  },\r
  {\r
    "Current Week Positivity": "14",\r
    "State": "region 8",\r
    "Change": "-1.2"\r
  },\r
  {\r
    "Current Week Positivity": "28",\r
    "State": "region 9",\r
    "Change": "1.5"\r
  },\r
  {\r
    "Current Week Positivity": "12",\r
    "State": "region 10",\r
    "Change": "0.5"\r
  }\r
]`, hi = `[\r
  {\r
    "links": [\r
      {\r
        "source": "Suicide EMS Responses",\r
        "target": "Dead at Scene",\r
        "value": 4088\r
      },\r
      {\r
        "source": "Suicide EMS Responses",\r
        "target": "Treated",\r
        "value": 438974\r
      },\r
      {\r
        "source": "Suicide EMS Responses",\r
        "target": "Assisted",\r
        "value": 5701\r
      },\r
      {\r
        "source": "Suicide EMS Responses",\r
        "target": "No patient contact",\r
        "value": 459\r
      },\r
      {\r
        "source": "Suicide EMS Responses",\r
        "target": "Refused evaluation care",\r
        "value": 12641\r
      },\r
      {\r
        "source": "Suicide EMS Responses",\r
        "target": "Evaluated no treatment required",\r
        "value": 5169\r
      },\r
      {\r
        "source": "Suicide EMS Responses",\r
        "target": "Unknown",\r
        "value": 104\r
      },\r
      {\r
        "source": "Dead at Scene",\r
        "target": "Dead",\r
        "value": 4088\r
      },\r
      {\r
        "source": "Treated",\r
        "target": "Dead",\r
        "value": 648\r
      },\r
      {\r
        "source": "Treated",\r
        "target": "Transported to hospital",\r
        "value": 423520\r
      },\r
      {\r
        "source": "Treated",\r
        "target": "Transported to facility",\r
        "value": 4504\r
      },\r
      {\r
        "source": "Treated",\r
        "target": "Released",\r
        "value": 10302\r
      },\r
      {\r
        "source": "Refused evaluation care",\r
        "target": "Released",\r
        "value": 11781\r
      },\r
      {\r
        "source": "Refused evaluation care",\r
        "target": "Transported to hospital",\r
        "value": 860\r
      },\r
      {\r
        "source": "Evaluated no treatment required",\r
        "target": "Released",\r
        "value": 5169\r
      }\r
    ],\r
    "storyNodeText": [\r
      {\r
        "StoryNode": "Suicide EMS Responses",\r
        "segmentTextBefore": "In 2022, there were",\r
        "segmentTextAfter": "Suicide EMS Responses"\r
      },\r
      {\r
        "StoryNode": "Treated",\r
        "segmentTextBefore": "of which,",\r
        "segmentTextAfter": "were treated"\r
      },\r
      {\r
        "StoryNode": "Transported to hospital",\r
        "segmentTextBefore": "and",\r
        "segmentTextAfter": "were transported to the hospital"\r
      }\r
    ],\r
    "tooltips": [\r
      {\r
        "node": "Suicide EMS Responses",\r
        "value": "467,136 (100%)",\r
        "summary": "Total number of suicide EMS responses.",\r
        "column1Label": "Gender",\r
        "column2Label": "Race and Ethnicity",\r
        "column1": [\r
          {\r
            "label": "Female",\r
            "value": "218,195",\r
            "additional_info": "46.71"\r
          },\r
          {\r
            "label": "Male",\r
            "value": "243,481",\r
            "additional_info": "52.12"\r
          },\r
          {\r
            "label": "Unknown",\r
            "value": "5,460",\r
            "additional_info": "1.17"\r
          }\r
        ],\r
        "column2": [\r
          {\r
            "label": "Non-Hispanic White",\r
            "value": "245,998",\r
            "additional_info": "52.66"\r
          },\r
          {\r
            "label": "Non-Hispanic Black",\r
            "value": "93,244",\r
            "additional_info": "19.96"\r
          },\r
          {\r
            "label": "Hispanic",\r
            "value": "41,396",\r
            "additional_info": "8.86"\r
          },\r
          {\r
            "label": "Non-Hispanic American Indian or Alaska Native",\r
            "value": "4,470",\r
            "additional_info": "0.96"\r
          },\r
          {\r
            "label": "Non-Hispanic Asian",\r
            "value": "6,160",\r
            "additional_info": "1.32"\r
          },\r
          {\r
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",\r
            "value": "1,287",\r
            "additional_info": "0.28"\r
          },\r
          {\r
            "label": "Missing",\r
            "value": "74,581",\r
            "additional_info": "15.97"\r
          }\r
        ]\r
      },\r
      {\r
        "node": "Dead",\r
        "value": "4,736 (1.01%)",\r
        "summary": "Patiend Died",\r
        "column1Label": "Gender",\r
        "column2Label": "Race and Ethnicity",\r
        "column1": [\r
          {\r
            "label": "Female",\r
            "value": "1,244",\r
            "additional_info": "26.47"\r
          },\r
          {\r
            "label": "Male",\r
            "value": "3,440",\r
            "additional_info": "72.64"\r
          },\r
          {\r
            "label": "Unknown",\r
            "value": "52",\r
            "additional_info": "1.1"\r
          }\r
        ],\r
        "column2": [\r
          {\r
            "label": "Non-Hispanic White",\r
            "value": "3,235",\r
            "additional_info": "68.31"\r
          },\r
          {\r
            "label": "Non-Hispanic Black",\r
            "value": "307",\r
            "additional_info": "6.48"\r
          },\r
          {\r
            "label": "Hispanic",\r
            "value": "242",\r
            "additional_info": "5.11"\r
          },\r
          {\r
            "label": "Non-Hispanic American Indian or Alaska Native",\r
            "value": "26",\r
            "additional_info": "0.55"\r
          },\r
          {\r
            "label": "Non-Hispanic Asian",\r
            "value": "81",\r
            "additional_info": "1.71"\r
          },\r
          {\r
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",\r
            "value": "--",\r
            "additional_info": "--"\r
          },\r
          {\r
            "label": "Missing",\r
            "value": "834",\r
            "additional_info": "17.61"\r
          }\r
        ]\r
      },\r
      {\r
        "node": "Released",\r
        "value": "27,252 (5.83%)",\r
        "value_pct": "5.83",\r
        "summary": "Patient was released.",\r
        "column1Label": "Gender",\r
        "column2Label": "Race and Ethnicity",\r
        "column1": [\r
          {\r
            "label": "Female",\r
            "value": "13,835",\r
            "additional_info": "50.77"\r
          },\r
          {\r
            "label": "Male",\r
            "value": "12,900",\r
            "additional_info": "47.34"\r
          },\r
          {\r
            "label": "Unknown",\r
            "value": "517",\r
            "additional_info": "1.9"\r
          }\r
        ],\r
        "column2": [\r
          {\r
            "label": "Non-Hispanic White",\r
            "value": "15,088",\r
            "additional_info": "55.36"\r
          },\r
          {\r
            "label": "Non-Hispanic Black",\r
            "value": "4,749",\r
            "additional_info": "17.43"\r
          },\r
          {\r
            "label": "Hispanic",\r
            "value": "2,177",\r
            "additional_info": "7.99"\r
          },\r
          {\r
            "label": "Non-Hispanic American Indian or Alaska Native",\r
            "value": "287",\r
            "additional_info": "1.05"\r
          },\r
          {\r
            "label": "Non-Hispanic Asian",\r
            "value": "321",\r
            "additional_info": "1.18"\r
          },\r
          {\r
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",\r
            "value": "65",\r
            "additional_info": "0.24"\r
          },\r
          {\r
            "label": "Missing",\r
            "value": "4,565",\r
            "additional_info": "16.75"\r
          }\r
        ]\r
      },\r
      {\r
        "node": "Transported to facility",\r
        "value": "4,504 (0.96%)",\r
        "summary": "Patient was transported to a facility.",\r
        "column1Label": "Gender",\r
        "column2Label": "Race and Ethnicity",\r
        "column1": [\r
          {\r
            "label": "Female",\r
            "value": "1,938",\r
            "additional_info": "43.03"\r
          },\r
          {\r
            "label": "Male",\r
            "value": "2,522",\r
            "additional_info": "55.99"\r
          },\r
          {\r
            "label": "Unknown",\r
            "value": "44",\r
            "additional_info": "0.98"\r
          }\r
        ],\r
        "column2": [\r
          {\r
            "label": "Non-Hispanic White",\r
            "value": "2,093",\r
            "additional_info": "46.47"\r
          },\r
          {\r
            "label": "Non-Hispanic Black",\r
            "value": "1,113",\r
            "additional_info": "24.71"\r
          },\r
          {\r
            "label": "Hispanic",\r
            "value": "608",\r
            "additional_info": "13.5"\r
          },\r
          {\r
            "label": "Non-Hispanic American Indian or Alaska Native",\r
            "value": "73",\r
            "additional_info": "1.62"\r
          },\r
          {\r
            "label": "Non-Hispanic Asian",\r
            "value": "48",\r
            "additional_info": "1.07"\r
          },\r
          {\r
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",\r
            "value": "--",\r
            "additional_info": "--"\r
          },\r
          {\r
            "label": "Missing",\r
            "value": "564",\r
            "additional_info": "12.52"\r
          }\r
        ]\r
      },\r
      {\r
        "node": "Transported to hospital",\r
        "value": "424,380 (90.85%)",\r
        "summary": "Patient was transported to the hospital by the EMS Unit or another EMS unit.",\r
        "column1Label": "Gender",\r
        "column2Label": "Race and Ethnicity",\r
        "column1": [\r
          {\r
            "label": "Female",\r
            "value": "199,301",\r
            "additional_info": "46.96"\r
          },\r
          {\r
            "label": "Male",\r
            "value": "222,583",\r
            "additional_info": "52.45"\r
          },\r
          {\r
            "label": "Unknown",\r
            "value": "2,496",\r
            "additional_info": "0.59"\r
          }\r
        ],\r
        "column2": [\r
          {\r
            "label": "Non-Hispanic White",\r
            "value": "223,907",\r
            "additional_info": "52.76"\r
          },\r
          {\r
            "label": "Non-Hispanic Black",\r
            "value": "86,562",\r
            "additional_info": "20.4"\r
          },\r
          {\r
            "label": "Hispanic",\r
            "value": "38,084",\r
            "additional_info": "8.97"\r
          },\r
          {\r
            "label": "Non-Hispanic American Indian or Alaska Native",\r
            "value": "4,036",\r
            "additional_info": "0.95"\r
          },\r
          {\r
            "label": "Non-Hispanic Asian",\r
            "value": "5,650",\r
            "additional_info": "1.33"\r
          },\r
          {\r
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",\r
            "value": "1,193",\r
            "additional_info": "0.28"\r
          },\r
          {\r
            "label": "Missing",\r
            "value": "64,954",\r
            "additional_info": "15.31"\r
          }\r
        ]\r
      },\r
      {\r
        "node": "Assisted",\r
        "value": "5,701 (1.22%)",\r
        "value_pct": "1.22",\r
        "summary": "EMS unit only provided assistance (e.g., manpower, equipment) to another agency, member of the public, or another EMS unit.",\r
        "column1Label": "Gender",\r
        "column2Label": "Race and Ethnicity",\r
        "column1": [\r
          {\r
            "label": "Female",\r
            "value": "1,791",\r
            "additional_info": "31.42"\r
          },\r
          {\r
            "label": "Male",\r
            "value": "1,910",\r
            "additional_info": "33.5"\r
          },\r
          {\r
            "label": "Unknown",\r
            "value": "2,000",\r
            "additional_info": "35.08"\r
          }\r
        ],\r
        "column2": [\r
          {\r
            "label": "Non-Hispanic White",\r
            "value": "1,593",\r
            "additional_info": "27.94"\r
          },\r
          {\r
            "label": "Non-Hispanic Black",\r
            "value": "491",\r
            "additional_info": "8.61"\r
          },\r
          {\r
            "label": "Hispanic",\r
            "value": "270",\r
            "additional_info": "4.74"\r
          },\r
          {\r
            "label": "Non-Hispanic American Indian or Alaska Native",\r
            "value": "41",\r
            "additional_info": "0.72"\r
          },\r
          {\r
            "label": "Non-Hispanic Asian",\r
            "value": "57",\r
            "additional_info": "1"\r
          },\r
          {\r
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",\r
            "value": "--",\r
            "additional_info": "--"\r
          },\r
          {\r
            "label": "Missing",\r
            "value": "3,237",\r
            "additional_info": "56.78"\r
          }\r
        ]\r
      },\r
      {\r
        "node": "Dead at Scene",\r
        "value": "4,088 (0.88%)",\r
        "value_pct": "0.88",\r
        "summary": "Patient showed obvious signs of death or Do Not Resuscitate (DNR) order was presented, and no attempt was made to resuscitate the patient.",\r
        "column1Label": "Gender",\r
        "column2Label": "Race and Ethnicity",\r
        "column1": [\r
          {\r
            "label": "Female",\r
            "value": "1,023",\r
            "additional_info": "25.02"\r
          },\r
          {\r
            "label": "Male",\r
            "value": "3,014",\r
            "additional_info": "73.73"\r
          },\r
          {\r
            "label": "Unknown",\r
            "value": "51",\r
            "additional_info": "1.25"\r
          }\r
        ],\r
        "column2": [\r
          {\r
            "label": "Non-Hispanic White",\r
            "value": "2,802",\r
            "additional_info": "68.54"\r
          },\r
          {\r
            "label": "Non-Hispanic Black",\r
            "value": "273",\r
            "additional_info": "6.68"\r
          },\r
          {\r
            "label": "Hispanic",\r
            "value": "207",\r
            "additional_info": "5.06"\r
          },\r
          {\r
            "label": "Non-Hispanic American Indian or Alaska Native",\r
            "value": "--",\r
            "additional_info": "--"\r
          },\r
          {\r
            "label": "Non-Hispanic Asian",\r
            "value": "65",\r
            "additional_info": "1.59"\r
          },\r
          {\r
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",\r
            "value": "--",\r
            "additional_info": "--"\r
          },\r
          {\r
            "label": "Missing",\r
            "value": "712",\r
            "additional_info": "17.42"\r
          }\r
        ]\r
      },\r
      {\r
        "node": "Evaluated no treatment required",\r
        "value": "5,169 (1.11%)",\r
        "value_pct": "1.11",\r
        "summary": "Patient was evaluated and no further treatment/transportation to the hospital was required",\r
        "column1Label": "Gender",\r
        "column2Label": "Race and Ethnicity",\r
        "column1": [\r
          {\r
            "label": "Female",\r
            "value": "2,545",\r
            "additional_info": "49.24"\r
          },\r
          {\r
            "label": "Male",\r
            "value": "2,505",\r
            "additional_info": "48.46"\r
          },\r
          {\r
            "label": "Unknown",\r
            "value": "119",\r
            "additional_info": "2.3"\r
          }\r
        ],\r
        "column2": [\r
          {\r
            "label": "Non-Hispanic White",\r
            "value": "2,783",\r
            "additional_info": "53.84"\r
          },\r
          {\r
            "label": "Non-Hispanic Black",\r
            "value": "885",\r
            "additional_info": "17.12"\r
          },\r
          {\r
            "label": "Hispanic",\r
            "value": "351",\r
            "additional_info": "6.79"\r
          },\r
          {\r
            "label": "Non-Hispanic American Indian or Alaska Native",\r
            "value": "59",\r
            "additional_info": "1.14"\r
          },\r
          {\r
            "label": "Non-Hispanic Asian",\r
            "value": "87",\r
            "additional_info": "1.68"\r
          },\r
          {\r
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",\r
            "value": "--",\r
            "additional_info": "--"\r
          },\r
          {\r
            "label": "Missing",\r
            "value": "988",\r
            "additional_info": "19.11"\r
          }\r
        ]\r
      },\r
      {\r
        "node": "No patient contact",\r
        "value": "459 (0.1%)",\r
        "summary": "No patient contact was made (e.g., EMS unit was on standby in case of a medical/traumatic emergency, response was for the purpose of transporting objects, personnel, or equipment not involving a patient).",\r
        "column1Label": "Gender",\r
        "column2Label": "Race and Ethnicity",\r
        "column1": [\r
          {\r
            "label": "Female",\r
            "value": "50",\r
            "additional_info": "10.89"\r
          },\r
          {\r
            "label": "Male",\r
            "value": "70",\r
            "additional_info": "15.25"\r
          },\r
          {\r
            "label": "Unknown",\r
            "value": "339",\r
            "additional_info": "73.86"\r
          }\r
        ],\r
        "column2": [\r
          {\r
            "label": "Non-Hispanic White",\r
            "value": "41",\r
            "additional_info": "8.93"\r
          },\r
          {\r
            "label": "Non-Hispanic Black",\r
            "value": "--",\r
            "additional_info": "--"\r
          },\r
          {\r
            "label": "Hispanic",\r
            "value": "--",\r
            "additional_info": "--"\r
          },\r
          {\r
            "label": "Non-Hispanic American Indian or Alaska Native",\r
            "value": "--",\r
            "additional_info": "--"\r
          },\r
          {\r
            "label": "Non-Hispanic Asian",\r
            "value": "--",\r
            "additional_info": "--"\r
          },\r
          {\r
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",\r
            "value": "--",\r
            "additional_info": "--"\r
          },\r
          {\r
            "label": "Missing",\r
            "value": "388",\r
            "additional_info": "84.53"\r
          }\r
        ]\r
      },\r
      {\r
        "node": "Refused evaluation care",\r
        "value": "12,641 (2.71%)",\r
        "summary": "Patient refused any evaluation or care.",\r
        "column1Label": "Gender",\r
        "column2Label": "Race and Ethnicity",\r
        "column1": [\r
          {\r
            "label": "Female",\r
            "value": "6,314",\r
            "additional_info": "49.95"\r
          },\r
          {\r
            "label": "Male",\r
            "value": "6,009",\r
            "additional_info": "47.54"\r
          },\r
          {\r
            "label": "Unknown",\r
            "value": "318",\r
            "additional_info": "2.52"\r
          }\r
        ],\r
        "column2": [\r
          {\r
            "label": "Non-Hispanic White",\r
            "value": "7,112",\r
            "additional_info": "56.26"\r
          },\r
          {\r
            "label": "Non-Hispanic Black",\r
            "value": "2,366",\r
            "additional_info": "18.72"\r
          },\r
          {\r
            "label": "Hispanic",\r
            "value": "1,056",\r
            "additional_info": "8.35"\r
          },\r
          {\r
            "label": "Non-Hispanic American Indian or Alaska Native",\r
            "value": "130",\r
            "additional_info": "1.03"\r
          },\r
          {\r
            "label": "Non-Hispanic Asian",\r
            "value": "128",\r
            "additional_info": "1.01"\r
          },\r
          {\r
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",\r
            "value": "26",\r
            "additional_info": "0.21"\r
          },\r
          {\r
            "label": "Missing",\r
            "value": "1,823",\r
            "additional_info": "14.42"\r
          }\r
        ]\r
      },\r
      {\r
        "node": "Treated",\r
        "value": "438,974 (93.97%)",\r
        "value_pct": "93.97",\r
        "summary": "Patient was evaluated and treatment was provided.",\r
        "column1Label": "Gender",\r
        "column2Label": "Race and Ethnicity",\r
        "column1": [\r
          {\r
            "label": "Female",\r
            "value": "206,436",\r
            "additional_info": "47.03"\r
          },\r
          {\r
            "label": "Male",\r
            "value": "229,917",\r
            "additional_info": "52.38"\r
          },\r
          {\r
            "label": "Unknown",\r
            "value": "2,621",\r
            "additional_info": "0.6"\r
          }\r
        ],\r
        "column2": [\r
          {\r
            "label": "Non-Hispanic White",\r
            "value": "231,620",\r
            "additional_info": "52.76"\r
          },\r
          {\r
            "label": "Non-Hispanic Black",\r
            "value": "89,207",\r
            "additional_info": "20.32"\r
          },\r
          {\r
            "label": "Hispanic",\r
            "value": "39,497",\r
            "additional_info": "9"\r
          },\r
          {\r
            "label": "Non-Hispanic American Indian or Alaska Native",\r
            "value": "4,214",\r
            "additional_info": "0.96"\r
          },\r
          {\r
            "label": "Non-Hispanic Asian",\r
            "value": "5,820",\r
            "additional_info": "1.33"\r
          },\r
          {\r
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",\r
            "value": "1,222",\r
            "additional_info": "0.28"\r
          },\r
          {\r
            "label": "Missing",\r
            "value": "67,394",\r
            "additional_info": "15.35"\r
          }\r
        ]\r
      },\r
      {\r
        "node": "Unknown",\r
        "value": "104 (0.02%)",\r
        "summary": "Type of treatment provided is unknown.",\r
        "column1Label": "Gender",\r
        "column2Label": "Race and Ethnicity",\r
        "column1": [\r
          {\r
            "label": "Female",\r
            "value": "36",\r
            "additional_info": "34.62"\r
          },\r
          {\r
            "label": "Male",\r
            "value": "56",\r
            "additional_info": "53.85"\r
          },\r
          {\r
            "label": "Unknown",\r
            "value": "--",\r
            "additional_info": "--"\r
          }\r
        ],\r
        "column2": [\r
          {\r
            "label": "Non-Hispanic White",\r
            "value": "47",\r
            "additional_info": "45.19"\r
          },\r
          {\r
            "label": "Non-Hispanic Black",\r
            "value": "",\r
            "additional_info": ""\r
          },\r
          {\r
            "label": "Hispanic",\r
            "value": "",\r
            "additional_info": ""\r
          },\r
          {\r
            "label": "Non-Hispanic American Indian or Alaska Native",\r
            "value": "",\r
            "additional_info": ""\r
          },\r
          {\r
            "label": "Non-Hispanic Asian",\r
            "value": "",\r
            "additional_info": ""\r
          },\r
          {\r
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",\r
            "value": "",\r
            "additional_info": ""\r
          },\r
          {\r
            "label": "Missing",\r
            "value": "39",\r
            "additional_info": "37.5"\r
          }\r
        ]\r
      }\r
    ],\r
    "tableData": [\r
      {\r
        "Disposition": "Assist, Agency",\r
        "Type of Treatment": "Assisted",\r
        "Final Outcome": "N/A",\r
        "Number of Patients": "2,356"\r
      },\r
      {\r
        "Disposition": "Assist, Public",\r
        "Type of Treatment": "Assisted",\r
        "Final Outcome": "N/A",\r
        "Number of Patients": "859"\r
      },\r
      {\r
        "Disposition": "Assist, Unit",\r
        "Type of Treatment": "Assisted",\r
        "Final Outcome": "N/A",\r
        "Number of Patients": "2,486"\r
      },\r
      {\r
        "Disposition": "Patient Dead at Scene-No Resuscitation Attempted (With Transport)",\r
        "Type of Treatment": "Dead at scene",\r
        "Final Outcome": "Dead",\r
        "Number of Patients": "123"\r
      },\r
      {\r
        "Disposition": "Patient Dead at Scene-No Resuscitation Attempted (Without Transport)",\r
        "Type of Treatment": "Dead at scene",\r
        "Final Outcome": "Dead",\r
        "Number of Patients": "3,965"\r
      },\r
      {\r
        "Disposition": "Patient Dead at Scene-Resuscitation Attempted (With Transport)",\r
        "Type of Treatment": "Treated",\r
        "Final Outcome": "Dead",\r
        "Number of Patients": "**"\r
      },\r
      {\r
        "Disposition": "Patient Dead at Scene-Resuscitation Attempted (Without Transport)",\r
        "Type of Treatment": "Treated",\r
        "Final Outcome": "Dead",\r
        "Number of Patients": "631"\r
      },\r
      {\r
        "Disposition": "Patient Evaluated, No Treatment/Transport Required",\r
        "Type of Treatment": "Evaluated no treatment required",\r
        "Final Outcome": "Released",\r
        "Number of Patients": "5,169"\r
      },\r
      {\r
        "Disposition": "Patient Refused Evaluation/Care (With Transport)",\r
        "Type of Treatment": "Refused evaluation care",\r
        "Final Outcome": "Transported to hospital",\r
        "Number of Patients": "860"\r
      },\r
      {\r
        "Disposition": "Patient Refused Evaluation/Care (Without Transport)",\r
        "Type of Treatment": "Refused evaluation care",\r
        "Final Outcome": "Released",\r
        "Number of Patients": "11,781"\r
      },\r
      {\r
        "Disposition": "Patient Treated, Released (AMA)",\r
        "Type of Treatment": "Treated",\r
        "Final Outcome": "Released",\r
        "Number of Patients": "6,780"\r
      },\r
      {\r
        "Disposition": "Patient Treated, Released (per protocol)",\r
        "Type of Treatment": "Treated",\r
        "Final Outcome": "Released",\r
        "Number of Patients": "3,522"\r
      },\r
      {\r
        "Disposition": "Patient Treated, Transferred Care to Another EMS Unit",\r
        "Type of Treatment": "Treated",\r
        "Final Outcome": "Transported to hospital",\r
        "Number of Patients": "24,432"\r
      },\r
      {\r
        "Disposition": "Patient Treated, Transported by Law Enforcement",\r
        "Type of Treatment": "Treated",\r
        "Final Outcome": "Transported to facility",\r
        "Number of Patients": "4,227"\r
      },\r
      {\r
        "Disposition": "Patient Treated, Transported by Private Vehicle",\r
        "Type of Treatment": "Treated",\r
        "Final Outcome": "Transported to facility",\r
        "Number of Patients": "277"\r
      },\r
      {\r
        "Disposition": "Patient Treated, Transported by this EMS Unit",\r
        "Type of Treatment": "Treated",\r
        "Final Outcome": "Transported to hospital",\r
        "Number of Patients": "399,088"\r
      },\r
      {\r
        "Disposition": "Standby-Public Safety, Fire, or EMS Operational Support Provided",\r
        "Type of Treatment": "No patient contact",\r
        "Final Outcome": "N/A",\r
        "Number of Patients": "458"\r
      },\r
      {\r
        "Disposition": "Transport Non-Patient, Organs, etc.",\r
        "Type of Treatment": "No patient contact",\r
        "Final Outcome": "N/A",\r
        "Number of Patients": "**"\r
      },\r
      {\r
        "Disposition": "Unknown",\r
        "Type of Treatment": "Unknown",\r
        "Final Outcome": "N/A",\r
        "Number of Patients": "104"\r
      }\r
    ]\r
  }\r
]`, vi = `[\r
  { "Year": 2019, "Country": "USA", "Rate": 2.5 },\r
  { "Year": 2019, "Country": "Canada", "Rate": 3.2 },\r
  { "Year": 2019, "Country": "Germany", "Rate": 1.8 },\r
  { "Year": 2020, "Country": "USA", "Rate": 2.7 },\r
  { "Year": 2020, "Country": "Canada", "Rate": 3.5 },\r
  { "Year": 2020, "Country": "Germany", "Rate": 2.1 },\r
  { "Year": 2021, "Country": "USA", "Rate": 3.0 },\r
  { "Year": 2021, "Country": "Canada", "Rate": 3.8 },\r
  { "Year": 2021, "Country": "Germany", "Rate": 2.4 }\r
]\r
`, To = {
  charts: [
    {
      text: "Chart Sample Data",
      fileName: "valid-data-chart.csv",
      data: li
    },
    {
      text: "Box Plot Sample Data",
      fileName: "valid-boxplot.csv",
      data: di
    },
    {
      text: "Scatter Plot Sample Data",
      fileName: "valid-scatterplot.csv",
      data: yi
    },
    {
      text: "Area Chart Sample Data",
      fileName: "valid-area-chart.json",
      data: Ci
    },
    {
      text: "Forecast Chart Data",
      fileName: "valid-forecast-data.csv",
      data: fi
    },
    {
      text: "Sankey Chart Data",
      fileName: "valid-sankey-data.json",
      data: hi
    },
    {
      text: "Pivot Table Data",
      fileName: "pivotData.json",
      data: vi
    }
  ],
  maps: [
    {
      text: "United States: State Sample Data",
      fileName: "valid-data-map.csv",
      data: ui
    },
    {
      text: "United States: State Sample Data Footnotes",
      fileName: "valid-data-map-footnotes.csv",
      data: ii
    },
    {
      text: "United States: County Sample Data",
      fileName: "valid-county-data.csv",
      data: si
    },
    {
      text: "United States: Geo Point Sample Data",
      fileName: "supported-cities.csv",
      data: ci
    },
    {
      text: "United States: Region",
      fileName: "valid-region-data.json",
      data: mi
    },
    {
      text: "World: Geocode Sample Data",
      fileName: "valid-world-geocode.json",
      data: pi
    },
    {
      text: "World: Default Data",
      fileName: "valid-world-data.json",
      data: gi
    }
  ]
}, ba = ({ text: e, fileName: C, data: l }) => {
  const { editingDataset: d, loadData: A } = b.useContext(Et);
  return /* @__PURE__ */ M(
    "button",
    {
      className: "link link-upload",
      onClick: (E) => A(new Blob([l], { type: "text/csv" }), C, d),
      onKeyDown: (E) => E.keyCode === 13 && A(new Blob([l], { type: "text/csv" }), C, d),
      children: e
    }
  );
}, Si = () => To.maps.map((e) => /* @__PURE__ */ M(ba, { text: e.text, fileName: e.fileName, data: e.data }, e.fileName)), wi = () => To.charts.map((e) => /* @__PURE__ */ M(ba, { text: e.text, fileName: e.fileName, data: e.data }, e.fileName)), Mi = () => {
  const { config: e } = b.useContext(Et);
  return /* @__PURE__ */ rn(br, { children: [
    /* @__PURE__ */ M("h3", { className: "heading-3", children: "Load Sample Data:" }),
    /* @__PURE__ */ rn("ul", { className: "sample-data-list", children: [
      e.type !== "map" && /* @__PURE__ */ M(wi, {}),
      e.type !== "chart" && /* @__PURE__ */ M(Si, {})
    ] })
  ] });
}, Po = () => null;
Po.data = To;
Po.Buttons = Mi;
const ra = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", ...e }, /* @__PURE__ */ b.createElement("path", { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" }));
const bi = (e) => e === void 0 ? "" : e > Math.pow(1024, 3) ? Math.round(e / Math.pow(1024, 3) * 100) / 100 + "GB" : e > Math.pow(1024, 2) ? Math.round(e / Math.pow(1024, 2) * 100) / 100 + "MB" : e > 1024 ? Math.round(e / 1024 * 100) / 100 + "KB" : e + "B", Ot = {
  ".csv": "text/csv",
  ".json": "application/json"
}, Ai = (e) => (typeof e == "string" && (e = new URL(e)), ho(e.href) ? ".csv" : Pt(e.href) ? ".json" : Object.keys(Ot).find((C) => e.pathname.endsWith(C))), Di = (e, C, l, d) => {
  switch (C) {
    case "text/csv":
      return eu(e);
    case "text/plain":
    case "application/json":
      try {
        return Pt(l) ? JSON.parse(e).response.docs : JSON.parse(e);
      } catch {
        d([oe.formatting]);
        return;
      }
    default:
      d([oe.fileType]);
      return;
  }
}, Ri = ({ fileBlob: e, externalURL: C, fileName: l, fileSourceType: d, fileData: A }) => {
  const R = (e == null ? void 0 : e.name) || C || l;
  if (d === "file") {
    const c = R.match(/(?:\.([^.]+))?$/g), E = c.length === 0 ? ".csv" : c[0];
    return Ot[E];
  }
  if (d === "url") {
    if (!A.type || A.type === "application/octet-stream") {
      const c = C.match(/(?:\.([^.]+))?$/g), E = c.length === 0 ? ".csv" : c[0];
      return Ot[E];
    }
    return A.type;
  }
}, Ni = () => {
  const { config: e, errors: C, tempConfig: l, sharepath: d } = b.useContext(Ce), A = b.useContext(He), R = new Oa(), c = (q) => {
    A({ type: "EDITOR_SET_CONFIG", payload: q });
  }, E = (q) => {
    A({ type: "EDITOR_SET_ERRORS", payload: q });
  }, [G, h] = b.useState(
    e.dataFileSourceType === "url" ? e.dataFileName : e.dataUrl || ""
  ), [dn, v] = b.useState(!!e.dataUrl), [an, Fn] = b.useState(e.type === "dashboard" || !e.data), [tn, An] = b.useState(void 0), [qn, hn] = b.useState(void 0), En = (q) => {
    An(q), hn(q);
  }, Dn = (q, Cn, fn) => (Cn.map(function(un, Gn, jn) {
    if (!jn.find((Rr) => Rr.dataKey === un.dataKey))
      return !1;
  }), !(q.columns.indexOf(fn) < 0)), Jn = async () => {
    let q = null, Cn;
    try {
      Cn = ho(G) || Pt(G) ? G : new URL(G, window.location.origin);
    } catch {
      throw oe.urlInvalid;
    }
    const fn = Ai(Cn);
    try {
      await La.get(Cn.toString(), {
        responseType: "blob"
      }).then((un) => {
        q = un.data, fn === ".csv" && ["text/csv", "text/plain"].includes(q.type) || ho(G) ? q = q.slice(0, q.size, "text/csv") : (q.type === "application/json" || fn === ".json" && q.type === "text/plain" || Pt(G)) && (q = q.slice(0, q.size, "application/json"));
      });
    } catch (un) {
      console.error("Error in loadExternal", un);
      const Gn = un.toString();
      throw Object.values(oe).includes(un) ? Gn : oe.failedFetch;
    }
    return e.type === "dashboard" && h(""), q;
  }, Wn = ([q]) => Rn(q, tn, tn), Rn = async (q = null, Cn, fn) => {
    let un = q, Gn = (un == null ? void 0 : un.path) ?? Cn ?? G;
    Gn && typeof Gn == "string" && (Gn = Gn.trim());
    const jn = q ? "file" : "url";
    if (jn === "url")
      try {
        un = await Jn();
      } catch (hr) {
        E([hr]);
        return;
      }
    const Rr = un.size;
    if (Rr > Ro * 1048576) {
      E([oe.fileTooLarge]);
      return;
    }
    const Ir = Ri({
      fileBlob: q,
      externalURL: G,
      fileName: Cn,
      fileSourceType: jn,
      fileData: un
    }), wr = new FileReader();
    wr.onload = function() {
      const hr = (pr, Mr = !1) => {
        const xr = dn && jn === "url";
        if (e.type === "dashboard") {
          const kr = Ir.split("/")[1].toUpperCase(), Hr = {
            data: pr,
            dataFileSize: Rr,
            dataFileName: Gn,
            // new file source
            dataFileSourceType: jn,
            // new file source type
            dataFileFormat: kr,
            preview: !0
          };
          xr && (Hr.dataUrl = Gn);
          const Gr = Mr ? { ...e, ...l } : e;
          c(Gr), A({
            type: "SET_DASHBOARD_DATASET",
            payload: { datasetKey: qn || Gn, dataset: Hr, oldDatasetKey: qn !== fn ? fn : void 0 }
          });
        } else {
          let kr = {
            ...e,
            ...l,
            data: pr,
            dataFileName: Gn,
            // new file source
            dataFileSourceType: jn,
            // new file source type
            formattedData: R.developerStandardize(pr, e.dataDescription)
          };
          xr && (kr.dataUrl = Gn), c(kr);
        }
      };
      try {
        const pr = Di(this.result.toString(), Ir, G, E), Mr = R.autoStandardize(pr);
        e.data && e.series ? Dn(Mr, e.series, e == null ? void 0 : e.xAxis.dataKey) ? hr(Mr, !0) : Tr(
          {
            data: Mr,
            dataFileName: Gn,
            dataFileSourceType: jn
          },
          "It appears that your data does not contain all of the columns that your last dataset contained. Continuing will reset your configuration. Do you want to continue?"
        ) : hr(Mr), tn && En(void 0), Fn(!1);
      } catch (pr) {
        E(pr);
      }
    };
    const Lr = Ir === "text/csv" ? "utf-8" : "";
    wr.readAsText(un, Lr);
  };
  b.useEffect(() => {
    let q = { ...l || e };
    if (e.formattedData === void 0 && e.dataDescription) {
      const Cn = R.developerStandardize(e.data, e.dataDescription);
      Cn && (q.formattedData = Cn);
    }
    A({ type: "EDITOR_SAVE", payload: q });
  }, []);
  const or = (q, Cn, fn) => {
    if (e.type === "dashboard") {
      let un = { ...e.datasets[q].dataDescription, [Cn]: fn }, Gn = R.developerStandardize(e.datasets[q].data, un), jn = { ...e.datasets };
      jn[q] = { ...jn[q], dataDescription: un, formattedData: Gn }, c({ ...e, datasets: jn });
    } else {
      let un = { ...e.dataDescription, [Cn]: fn }, Gn = R.developerStandardize(e.data, un);
      c({ ...e, formattedData: Gn, dataDescription: un });
    }
  }, zn = (q, Cn) => {
    if (Cn) {
      let fn = { ...e.datasets };
      q === !1 ? delete fn[Cn].dataUrl : fn[Cn].dataUrl = fn[Cn].dataFileName, c({ ...e, datasets: fn });
    } else if (e.type !== "dashboard") {
      let fn = { ...e };
      q === !1 ? delete fn.dataUrl : fn.dataUrl = fn.dataFileName, c(fn);
    }
    v(q);
  }, { getRootProps: Cr, getInputProps: nr, isDragActive: en } = Ao({ onDrop: Wn }), {
    getRootProps: pn,
    getInputProps: _n,
    isDragActive: Yn
  } = Ao({ onDrop: Wn }), $n = () => /* @__PURE__ */ rn(br, { children: [
    /* @__PURE__ */ rn("label", { htmlFor: "dataset-name", className: "col-12 mt-2", children: [
      /* @__PURE__ */ M("span", { children: "Dataset Name" }),
      /* @__PURE__ */ M(
        "input",
        {
          id: "dataset-name",
          placeholder: "Enter Dataset Name",
          type: "text",
          "aria-label": "Enter Dataset Name",
          value: qn,
          className: "form-control",
          onChange: (q) => hn(q.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ rn("label", { htmlFor: "external-datas", className: "col-12 mt-2", children: [
      /* @__PURE__ */ M("span", { children: "URL" }),
      /* @__PURE__ */ M(
        "textarea",
        {
          id: "external-datas",
          className: "form-control",
          placeholder: "e.g., https://data.cdc.gov/resources/file.json",
          "aria-label": "Load data from external URL",
          "aria-describedby": "load-data",
          rows: 2,
          value: G,
          onChange: (q) => h(q.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ rn("label", { htmlFor: "keep-url", className: "mt-1 d-flex keep-url", children: [
      /* @__PURE__ */ M(
        "input",
        {
          type: "checkbox",
          id: "keep-url",
          checked: dn,
          onChange: () => zn(!dn, tn)
        }
      ),
      " ",
      "Always load from URL (normally will only pull once)"
    ] }),
    /* @__PURE__ */ M("div", { className: "d-flex justify-content-end mt-2", children: /* @__PURE__ */ M(
      "button",
      {
        className: "btn btn-primary px-4",
        type: "submit",
        id: "load-data",
        disabled: !qn || !G,
        onClick: () => Rn(null, G, tn),
        children: "Save & Load"
      }
    ) })
  ] }), Tr = (q = {}, Cn = "Are you sure you want to do this?") => {
    q.newViz = !0, window.confirm(Cn) === !0 && (A({ type: "EDITOR_SAVE", payload: q }), Fn(!0));
  }, Dr = () => (
    //todo convert to modal
    /* @__PURE__ */ rn(br, { children: [
      /* @__PURE__ */ rn(
        "button",
        {
          className: "btn danger",
          onClick: () => Tr(
            { type: e.type, visualizationType: e.visualizationType },
            "Resetting will remove your data and settings. Do you want to continue?"
          ),
          children: [
            "Clear",
            /* @__PURE__ */ M(Oo, {})
          ]
        }
      ),
      e.dataFileSourceType === "file" && /* @__PURE__ */ rn("div", { className: "link link-replace", ...pn(), children: [
        /* @__PURE__ */ M("input", { ..._n() }),
        /* @__PURE__ */ M("p", { children: /* @__PURE__ */ M("span", { children: "or replace file" }) })
      ] })
    ] })
  ), Sr = (q, Cn, fn) => {
    let un = { ...e.datasets };
    fn === !0 ? Object.keys(un).forEach((Gn) => {
      const jn = Gn === q;
      un[Gn][Cn] = jn;
    }) : un[q][Cn] = fn, c({ ...e, datasets: un });
  }, Pr = (q) => {
    const Cn = Object.keys(e.datasets).filter((fn) => fn !== q);
    En(void 0), Cn.length || Fn(!0), A({ type: "DELETE_DASHBOARD_DATASET", payload: { datasetKey: q } });
  };
  let ar, mr = !1;
  e.type === "dashboard" ? mr = Object.keys(e.datasets).length > 0 : (ar = e, mr = !!e.formattedData || e.data && e.dataDescription && R.autoStandardize(e.data)), e.visualizationType === "Sankey" && e.data && (mr = !0), (e.visualizationType === "Box Plot" && e.data || e.visualizationType === "Scatter Plot") && (mr = !0);
  const yr = /* @__PURE__ */ rn(br, { children: [
    e.filters && e.filters.map(
      (q, Cn) => q.type !== "url" ? /* @__PURE__ */ M(br, {}) : /* @__PURE__ */ rn("fieldset", { className: "edit-block url-filters-block", children: [
        /* @__PURE__ */ M(
          "button",
          {
            onClick: (fn) => {
              let un = [...e.filters];
              un.splice(Cn, 1), c({ ...e, filters: un, runtimeDataUrl: void 0 });
            },
            children: "Remove"
          }
        ),
        /* @__PURE__ */ rn("label", { children: [
          /* @__PURE__ */ rn("span", { className: "edit-label column-heading", children: [
            "Label",
            /* @__PURE__ */ rn(Ar, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ M(Ar.Target, { children: /* @__PURE__ */ M(vo, { display: "question" }) }),
              /* @__PURE__ */ M(Ar.Content, { children: /* @__PURE__ */ M("p", { style: { padding: "0.5rem" }, children: "The label that will appear above the dropdown filter." }) })
            ] })
          ] }),
          " ",
          /* @__PURE__ */ M(
            "input",
            {
              type: "text",
              defaultValue: q.label,
              onChange: (fn) => {
                let un = [...e.filters];
                un[Cn].label = fn.target.value, c({ ...e, filters: un });
              }
            }
          )
        ] }),
        /* @__PURE__ */ rn("label", { children: [
          /* @__PURE__ */ rn("span", { className: "edit-label column-heading", children: [
            "Query string parameter",
            /* @__PURE__ */ rn(Ar, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ M(Ar.Target, { children: /* @__PURE__ */ M(vo, { display: "question" }) }),
              /* @__PURE__ */ M(Ar.Content, { children: /* @__PURE__ */ M("p", { style: { padding: "0.5rem" }, children: "Name of the query string parameter that will be appended to the URL above with the values provided below." }) })
            ] })
          ] }),
          " ",
          /* @__PURE__ */ M(
            "input",
            {
              type: "text",
              defaultValue: q.queryParameter,
              onChange: (fn) => {
                let un = [...e.filters];
                un[Cn].queryParameter = fn.target.value, c({ ...e, filters: un });
              }
            }
          )
        ] }),
        /* @__PURE__ */ rn("label", { children: [
          /* @__PURE__ */ M("span", { className: "edit-label column-heading", children: "Values" }),
          " "
        ] }),
        /* @__PURE__ */ M("ul", { className: "value-list", children: q.orderedValues && q.orderedValues.map((fn, un) => /* @__PURE__ */ rn("li", { children: [
          fn,
          /* @__PURE__ */ M(
            "input",
            {
              type: "text",
              placeholder: "Enter value display name here",
              value: q.labels ? q.labels[fn] : void 0,
              className: "url-value-label",
              onChange: (Gn) => {
                let jn = [...e.filters];
                jn[Cn].labels = jn[Cn].labels || {}, jn[Cn].labels[fn] = Gn.target.value, c({ ...e, filters: jn });
              }
            }
          ),
          /* @__PURE__ */ M(
            "button",
            {
              onClick: () => {
                let Gn = [...e.filters];
                Gn[Cn].labels && delete Gn[Cn].labels[Gn[Cn].orderedValues[un]], Gn[Cn].orderedValues.splice(un, 1), c({ ...e, filters: Gn });
              },
              children: "X"
            }
          )
        ] })) }),
        /* @__PURE__ */ rn(
          "form",
          {
            onSubmit: (fn) => {
              if (fn.preventDefault(), !e.filters[Cn].orderedValues || e.filters[Cn].orderedValues.indexOf(fn.target[0].value) === -1) {
                let un = [...e.filters];
                un[Cn].orderedValues = un[Cn].orderedValues || [], un[Cn].orderedValues.push(fn.target[0].value), un[Cn].values = un[Cn].orderedValues, un[Cn].active || (un[Cn].active = fn.target[0].value), fn.target[0].value = "", c({ ...e, filters: un });
              }
            },
            children: [
              /* @__PURE__ */ M("input", { type: "text", placeholder: "Enter new value name here" }),
              " ",
              /* @__PURE__ */ M("button", { type: "submit", style: { marginTop: "1em" }, children: "Add New Value" })
            ]
          }
        )
      ] }, q.key)
    ),
    /* @__PURE__ */ M(
      "button",
      {
        className: "btn full-width btn-primary",
        onClick: () => {
          c({
            ...e,
            filters: e.filters ? [...e.filters, { type: "url", key: Date.now() }] : [{ type: "url", key: Date.now() }]
          });
        },
        children: "Add New URL Filter"
      }
    )
  ] }), Br = !["Box Plot", "Scatter Plot", "Sankey"].includes(e == null ? void 0 : e.visualizationType);
  return /* @__PURE__ */ rn(br, { children: [
    /* @__PURE__ */ rn("div", { className: "left-col", children: [
      e.type === "dashboard" && Object.keys(e.datasets).length > 0 && /* @__PURE__ */ rn(br, { children: [
        /* @__PURE__ */ M("div", { className: "heading-3", children: "Data Sources" }),
        /* @__PURE__ */ rn("table", { children: [
          /* @__PURE__ */ M("thead", { children: /* @__PURE__ */ rn("tr", { children: [
            /* @__PURE__ */ M("th", { children: "Name" }),
            /* @__PURE__ */ M("th", { children: "Size" }),
            /* @__PURE__ */ M("th", { children: "Type" }),
            /* @__PURE__ */ M("th", { colSpan: 3, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ M("tbody", { children: Object.keys(e.datasets).map(
            (q) => e.datasets[q].dataFileName && /* @__PURE__ */ rn("tr", { children: [
              /* @__PURE__ */ M("td", { children: q }),
              /* @__PURE__ */ M("td", { className: "p-1", children: bi(e.datasets[q].dataFileSize) }),
              /* @__PURE__ */ M("td", { className: "p-1", children: e.datasets[q].dataFileFormat }),
              /* @__PURE__ */ M("td", { children: /* @__PURE__ */ M(
                "button",
                {
                  className: "btn btn-link p-1",
                  onClick: () => Sr(q, "preview", !0),
                  children: "Preview"
                }
              ) }),
              /* @__PURE__ */ M("td", { children: e.datasets[q].dataFileSourceType === "url" && /* @__PURE__ */ M(
                "button",
                {
                  className: "btn btn-link p-1",
                  onClick: () => {
                    tn === q ? (En(void 0), h(""), v(!1)) : (En(q), h(
                      e.datasets[q].dataUrl || e.datasets[q].dataFileName
                    ), v(!!e.datasets[q].dataUrl));
                  },
                  children: "Edit"
                }
              ) }),
              /* @__PURE__ */ M("td", { children: /* @__PURE__ */ M("button", { className: "btn btn-danger", onClick: () => Pr(q), children: "X" }) })
            ] }, `tr-${q}`)
          ) })
        ] })
      ] }),
      (ar == null ? void 0 : ar.data) && /* @__PURE__ */ rn(br, { children: [
        e.type !== "dashboard" && /* @__PURE__ */ rn(br, { children: [
          /* @__PURE__ */ M("div", { className: "heading-3", children: "Data Source" }),
          /* @__PURE__ */ rn("div", { className: "file-loaded-area", children: [
            (e.dataFileSourceType === "file" || !e.dataFileSourceType) && /* @__PURE__ */ rn("div", { className: "data-source-options", children: [
              /* @__PURE__ */ rn(
                "div",
                {
                  className: Yn ? "drag-active cdcdataviz-file-selector loaded-file" : "cdcdataviz-file-selector loaded-file",
                  ...pn(),
                  children: [
                    /* @__PURE__ */ M("input", { ..._n() }),
                    Yn ? /* @__PURE__ */ M("p", { children: "Drop file here" }) : /* @__PURE__ */ rn("p", { children: [
                      /* @__PURE__ */ M(ra, {}),
                      " ",
                      /* @__PURE__ */ M("span", { children: e.dataFileName ?? "Replace data file" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ M("div", { children: Dr() })
            ] }),
            e.dataFileSourceType === "url" && /* @__PURE__ */ rn(br, { children: [
              /* @__PURE__ */ rn("div", { className: "url-source-options", children: [
                /* @__PURE__ */ M("div", { children: $n() }),
                /* @__PURE__ */ M("div", { children: Dr() })
              ] }),
              e.dataUrl && (e.type === "chart" || e.type === "map") && yr
            ] })
          ] })
        ] }),
        Br && /* @__PURE__ */ M(
          Ka,
          {
            visualizationKey: null,
            configureData: ar,
            updateDescriptionProp: (q, Cn) => or(ar.dataFileName, q, Cn),
            config: e,
            setConfig: c
          }
        )
      ] }),
      (tn || an) && // dataFileSourceType needs to be checked here since earlier versions did not track this state
      /* @__PURE__ */ rn("div", { className: "load-data-area", children: [
        /* @__PURE__ */ M("div", { className: "heading-3", children: tn ? `Editing ${tn}` : "Add Dataset" }),
        tn ? /* @__PURE__ */ M(de, { title: "Load from URL", icon: /* @__PURE__ */ M(na, { className: "inline-icon" }), children: $n() }) : /* @__PURE__ */ rn(Yu, { startingTab: 0, children: [
          /* @__PURE__ */ rn(de, { title: "Upload File", icon: /* @__PURE__ */ M(ra, { className: "inline-icon" }), children: [
            d && /* @__PURE__ */ rn("p", { className: "alert--info", children: [
              "The share path set for this website is: ",
              d
            ] }),
            /* @__PURE__ */ rn(
              "div",
              {
                className: en ? "drag-active cdcdataviz-file-selector" : "cdcdataviz-file-selector",
                ...Cr(),
                children: [
                  /* @__PURE__ */ M("input", { ...nr() }),
                  en ? /* @__PURE__ */ M("p", { children: "Drop file here" }) : /* @__PURE__ */ rn("p", { children: [
                    "Drag file to this area, or ",
                    /* @__PURE__ */ M("span", { children: "select a file" }),
                    "."
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ rn("p", { className: "footnote", children: [
              "Supported file types: ",
              Object.keys(Ot).join(", "),
              ". Maximum file size ",
              Ro,
              "MB."
            ] })
          ] }),
          /* @__PURE__ */ M(de, { title: "Load from URL", icon: /* @__PURE__ */ M(na, { className: "inline-icon" }), children: $n() })
        ] }),
        C && (Array.isArray(C) ? C.map((q, Cn) => /* @__PURE__ */ rn("div", { className: "error-box slim mt-2", children: [
          /* @__PURE__ */ M("span", { children: q }),
          " ",
          /* @__PURE__ */ M(
            Oo,
            {
              className: "inline-icon dismiss-error",
              onClick: () => E(C.filter((fn, un) => un !== Cn))
            }
          )
        ] }, `error-${q}`)) : C.message),
        /* @__PURE__ */ M(Et.Provider, { value: { loadData: Rn, editingDataset: tn, config: e }, children: /* @__PURE__ */ M(Po.Buttons, {}) })
      ] }),
      e.type === "dashboard" && !an && /* @__PURE__ */ M("div", { className: "mt-2", children: /* @__PURE__ */ M("button", { className: "btn btn-primary", onClick: () => Fn(!0), children: "+ Add More Files" }) }),
      mr && /* @__PURE__ */ M("div", { className: "mt-2", children: /* @__PURE__ */ M(
        "button",
        {
          className: "btn btn-primary",
          onClick: () => A({ type: "EDITOR_SET_GLOBALACTIVE", payload: 2 }),
          children: "Configure your visualization"
        }
      ) }),
      /* @__PURE__ */ M(
        "a",
        {
          href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "guidance-link",
          children: /* @__PURE__ */ rn("div", { children: [
            /* @__PURE__ */ M("h3", { children: "Get Help" }),
            /* @__PURE__ */ M("p", { children: "Documentation and examples on formatting data and configuring visualizations." })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ M("div", { className: "right-col", children: /* @__PURE__ */ M(ai, {}) })
  ] });
};
const Ti = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024", fill: "currentColor", ...e }, /* @__PURE__ */ b.createElement("path", { d: "M489.3,377.8H80.1v-288c0-8.4-6.8-15.2-15.2-15.2H34.7c-8.4,0-15.2,6.8-15.2,15.2v318.3c0,16.7,13.6,30.3,30.3,30.3h439.5 c8.4,0,15.2-6.8,15.2-15.2v-30.3C504.5,384.6,497.7,377.8,489.3,377.8z" }), /* @__PURE__ */ b.createElement("path", { d: "M459,105H347.2c-20.3,0-30.4,24.5-16.1,38.8l30.7,30.7L292.3,244l-69.5-69.5c-11.8-11.8-31-11.8-42.9,0l-65.1,65.1 c-5.9,5.9-5.9,15.5,0,21.4l21.4,21.4c5.9,5.9,15.5,5.9,21.4,0l43.6-43.6l69.5,69.5c11.8,11.8,31,11.8,42.9,0l90.9-90.9l30.7,30.7 c14.3,14.3,38.8,4.2,38.8-16.1V120.1C474.2,111.7,467.4,105,459,105z" }), /* @__PURE__ */ b.createElement("path", { d: "M991.2,280.5h-188l125.2,125.2c4.8,4.8,12.7,5.2,17.6,0.5c30.7-28.9,51.8-67.8,57.9-111.6 C1005,287.2,998.8,280.5,991.2,280.5L991.2,280.5z" }), /* @__PURE__ */ b.createElement("path", { d: "M978.7,229.2c-6.5-94.6-82.2-170.3-176.8-176.8c-7.2-0.5-13.3,5.6-13.3,12.8v177.3h177.3 C973.1,242.5,979.2,236.4,978.7,229.2L978.7,229.2z" }), /* @__PURE__ */ b.createElement("path", { d: "M750.5,280.5v-188c0-7.6-6.6-13.8-14.1-12.7C642,93.1,569.8,175.6,573.2,274.5C576.6,376,664,459.3,765.6,458 c39.9-0.5,76.8-13.4,107.2-34.9c6.3-4.4,6.7-13.7,1.2-19.1L750.5,280.5z" }), /* @__PURE__ */ b.createElement("path", { d: "M130.7,558l1.1,7.2l5.5,11.6l-2.8,12.1l-6.1-7.7l-3.9-8.8l-8.8-1.7L102,569h-3.9l2.2,7.7l7.7,11v11l2.2,12.1l9.9,1.1 l3.9,5.5l-12.1-1.7l-3.9,2.8l1.7,11.6l-2.2,12.7l0.5,14.9l-3.9,9.9l-4.4,14.3l3.3,9.9l2.2,12.7l1.7,9.4l-2.2,12.7l1.7,8.8l3.9,8.8 l3.3,11l2.8,7.2L128,772l5.5-0.6l7.7,1.1l-8.3,2.2l2.2,3.9l-7.2,1.1l6.6,7.2l6.6,7.2l-2.2,6.1l8.8,12.7l9.4,7.7l1.1,9.4l7.7,3.9 l10.5,3.3l8.3,7.2l7.2,4.4l7.7,6.1l4.4,3.3l5,11l28.1-0.6l55.2,19.3h45.8l-1.1-4.4h22.1l8.8,5l5,5l12.7,8.8l4.4,16l12.7,6.6l7.7,3.3 l10.5-12.7l13.8,1.7l5.5,4.4l14.9,24.3l5,6.1l3.9,13.8l29.2,11.6l-1.1-9.9l-1.1-13.8l9.4-11l-1.7-3.3l9.4-7.7l5,2.8l8.3-9.4l5-6.6 h7.2l16-3.3l11.6,5h8.8l3.3-3.9l3.9,2.8l0.6,5l11.6,3.9l11-1.7l9.4,0.6l-7.7-6.1l-0.6-3.3l5-2.8l-0.5-2.8H598l-8.8,1.1l5.5-5 l2.8-3.3l2.8,2.8l16-2.2l2.2,2.8h11l6.1-1.7l8.8-0.5l8.3,3.3l5-0.6l5,7.2l9.9,0.5l5.5-4.4h5.5l11,9.4l6.1,6.6l1.7,8.8l-1.1,11 l3.9,11.6l10.5,13.2l6.1,12.7l2.2,5l11-2.2l2.8-12.1v-18.2l-5.5-14.9l-1.7-3.9l-1.1-11l-9.4-11l-1.7-13.2l0.5-11l4.4-12.1l8.3-6.6 l-0.6-5l9.9-1.7l14.3-16l6.6-5.5l7.2,1.1l6.6-12.7l9.4-5c0,0,7.2,1.1,7.7-1.7c0.5-2.8,7.7-16,7.7-16l-7.7-4.4l4.4-3.9l1.1-2.8 l-4.4-11l-4.4-5l5.5-6.1l-4.4-5.5l-1.1-11l-0.6-9.4l3.3-2.8l2.2,13.8l1.7,6.6l3.9,6.1l-1.1,9.9l6.1-12.1l3.9-9.4l0.6-5.5l-5.5-6.6 l-0.6-2.8l1.7-1.7l8.8,5.5l2.8-6.6l6.1-6.1l1.1-6.6l-1.1-7.7l0.5-3.9l1.1-5.5l4.4,6.1h2.2l6.6-1.1l6.6-0.6l8.8-2.8l-1.7-3.3 l-8.8,0.6l-8.3,2.2l-3.9,2.2l-0.6-3.9l2.8-3.3l7.2-1.7l8.8-1.7l6.1-1.7l5-3.3l11.6,2.8c0,0,5,2.8,5.5,1.1c0.6-1.7,2.2-6.1,2.2-6.1 l-3.9-4.4l-1.7-6.6l1.1-11l1.1-8.8l5-6.6l1.1-2.8l3.3,1.7l10.5-11.6h3.9l8.8-1.1l2.8-5.5h7.7l6.6-5.5l-2.5-3l-3-7.4l-3.3-2.5 l1.4-18.5l-1.7-16.8l-9.9-3l-8.6,3l-4.7-0.6l-19,44.4l-8.8,0.6l-3.9,3.3l-46.9-0.3l-11.6,10.8l-7.2,4.4l-3.3,9.4l-1.7,5l-8.3,5.5 H774l-6.1-2.8l-7.7,1.1l-9.9,3.3l0.6,5l-0.6,8.8l-5,4.4l-9.9,2.2l-15.4,7.7l-11.6,3.9l-11,0.6l-6.6-5l3.3-6.1l1.7-1.7l2.2-6.1 l4.1-2.5l5.2-9.1l-5.5-7.2l-1.1-11.6l-7.2-2.2l-9.4,6.6l3.3-7.7l5.5-7.7l-2.2-7.2l-1.7-8.3l-8.8-3.3l-7.7-6.6l-9.4,3.9l0.6,7.2 l-5.5,6.6l-4.4-2.2l-8.3,9.4v11l1.1,11l5,7.7l-0.6,16.6l-10.5,9.9l-7.7,0.6l-3.9-11.6l-3.9-8.3l1.7-11l-1.7-11l3.9-7.2l2.2-7.2 l3.9-12.1l-8.8,9.9l5-17.1l7.7-6.6l9.4-0.6l7.2-3.3H667h9.4l6.1-1.7l7.2,1.1l3.3,5.5l13.8,5l2.8-7.7l-9.4,1.1l-6.1-0.6l-8.8-6.6 l-5.5-3.3l-6.3-4.7l-6.3,1.9l-6.1-4.4l-14.3,0.6l-7.7,5l-6.1-3.9l-7.2-4.4l-10.5-0.6l10.5-14.9l-12.1,5.5l-9.9,7.7l-9.9,5.5 l-8.8,1.1l-1.1-5.5l-18.2,3.9l15.3-13.4l10.8-7.9l13.4-10.5l-5.5-0.8l-18.2,0.6l-8.3-1.7l-7.4-1.2L558,564l-8.3,0.6l-15.7-3.9 l-4.1-5l-2.2-7.7l-3.9-3.6l0.3,4.1l-3.9,6.1l-387.3,0.3L130.7,558L130.7,558z" })), Pi = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.7", fill: "currentColor", ...e }, /* @__PURE__ */ b.createElement("path", { d: "M91,18.7H62c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h29c0.6,0,1-0.4,1-1v-6C92,19.1,91.6,18.7,91,18.7z M89.4,24.7H63.6 c-0.3,0-0.6-0.2-0.6-0.6v-2.9c0-0.3,0.2-0.6,0.6-0.6h25.9c0.3,0,0.6,0.2,0.6,0.6v2.9C90,24.4,89.8,24.7,89.4,24.7z" }), /* @__PURE__ */ b.createElement("path", { d: "M75,30.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1v-6C76,31.1,75.6,30.7,75,30.7z M73.7,36.7h-9.3 c-0.2,0-0.3-0.2-0.3-0.3V33c0-0.2,0.2-0.3,0.3-0.3h9.3c0.2,0,0.3,0.2,0.3,0.3v3.3C74,36.5,73.8,36.7,73.7,36.7z" }), /* @__PURE__ */ b.createElement("path", { d: "M81,43.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1v-6C82,44.1,81.6,43.7,81,43.7z M79.6,49.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.1c0-0.2,0.2-0.4,0.4-0.4h15.1c0.2,0,0.4,0.2,0.4,0.4v3.1C80,49.5,79.8,49.7,79.6,49.7z" }), /* @__PURE__ */ b.createElement("path", { d: "M47,12.7h6c0.6,0,1,0.4,1,1v52c0,0.6-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1v-52C46,13.1,46.4,12.7,47,12.7z" }), /* @__PURE__ */ b.createElement("path", { d: "M39,19.7v6c0,0.6-0.4,1-1,1H17c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h21C38.6,18.7,39,19.1,39,19.7z" }), /* @__PURE__ */ b.createElement("path", { d: "M39,31.7v6c0,0.6-0.4,1-1,1H8c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h30C38.6,30.7,39,31.1,39,31.7z" }), /* @__PURE__ */ b.createElement("path", { d: "M39,44.7v6c0,0.6-0.4,1-1,1H20c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h18C38.6,43.7,39,44.1,39,44.7z" }), /* @__PURE__ */ b.createElement("path", { d: "M39,57.7v6c0,0.6-0.4,1-1,1H25c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h13C38.6,56.7,39,57.1,39,57.7z" }), /* @__PURE__ */ b.createElement("path", { d: "M79,56.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v-6C80,57.1,79.6,56.7,79,56.7z M77.6,62.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.2c0-0.2,0.2-0.4,0.4-0.4h13.2c0.2,0,0.4,0.2,0.4,0.4v3.2C78,62.5,77.8,62.7,77.6,62.7z" })), Ii = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.3 82.6", fill: "currentColor", ...e }, /* @__PURE__ */ b.createElement("path", { d: "M83.9,61.4h-64V12.1c0-1.1-0.9-2-2-2h-5.5c-1.1,0-2,0.9-2,2v56.7c0,1.1,0.9,2,2,2h71.5c1.1,0,2-0.9,2-2v-5.5 C85.9,62.3,85,61.4,83.9,61.4z" }), /* @__PURE__ */ b.createElement("path", { d: "M67.1,47.3H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h40.3c1.1,0,2-0.9,2-2v-6.1C69.1,48.2,68.2,47.3,67.1,47.3L67.1,47.3z  M52,54.6H38.2c-0.7,0-1.3-0.4-1.3-1V51c0-0.5,0.6-1,1.3-1H52c0.7,0,1.3,0.4,1.3,1v2.6C53.3,54.1,52.8,54.6,52,54.6z" }), /* @__PURE__ */ b.createElement("path", { d: "M83.9,31.7H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h57.2c1.1,0,2-0.9,2-2v-6.1C85.9,32.6,85,31.7,83.9,31.7z M68.8,39 H45.2c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h23.7c0.7,0,1.3,0.4,1.3,1V38C70.2,38.5,69.6,39,68.8,39z" }), /* @__PURE__ */ b.createElement("path", { d: "M77,16.1H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2H77c1.1,0,2-0.9,2-2v-6.1C79,17,78.1,16.1,77,16.1z M58.9,23.4H36.6 c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h22.3c0.7,0,1.3,0.4,1.3,1v2.6C60.2,23,59.6,23.4,58.9,23.4z" })), Li = (e) => /* @__PURE__ */ b.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...e }, /* @__PURE__ */ b.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ b.createElement("g", null, /* @__PURE__ */ b.createElement("path", { d: "M30.22,49.19c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ b.createElement("path", { d: "M33.06,35.59c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ b.createElement("path", { d: "M48.12,37.83c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ b.createElement("circle", { cx: 49.64, cy: 22.73, r: 3.24 }), /* @__PURE__ */ b.createElement("path", { d: "M64.53,19.49c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ b.createElement("path", { d: "M57.95,31.11c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ b.createElement("path", { d: "M74.53,11.54c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }))), ki = (e) => /* @__PURE__ */ b.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...e }, /* @__PURE__ */ b.createElement("path", { d: "M54.68,29.14h-4.1V8.43h2.68c.5,0,.9-.15,1.19-.46,.46-.48,.44-1.11,.42-1.62,0-.11,0-.22,0-.34s0-.24,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-10.2c-.5,0-.9,.15-1.19,.46-.47,.48-.44,1.11-.42,1.62,0,.11,0,.23,0,.34s0,.23,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h2.68V29.14h-4.1c-1.33,0-2.42,1.09-2.42,2.42v31.31c0,1.33,1.09,2.42,2.42,2.42h4.1v7.97h-2.68c-.5,0-.9,.15-1.19,.46-.46,.48-.44,1.11-.42,1.62,0,.11,0,.22,0,.34s0,.24,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h10.2c.5,0,.9-.15,1.19-.46,.47-.48,.44-1.11,.42-1.62,0-.11,0-.23,0-.34s0-.23,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-2.68v-7.97h4.1c1.33,0,2.42-1.09,2.42-2.42V31.56c0-1.33-1.09-2.42-2.42-2.42Zm-2.42,20.5v10.81h-8.2v-10.81h8.2Zm-8.2-4.84v-10.81h8.2v10.81h-8.2Z" })), Oi = (e) => /* @__PURE__ */ b.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...e }, /* @__PURE__ */ b.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ b.createElement("path", { d: "M87.91,60.65c-.02-.12-2.46-12.63-5.53-24.97-5.97-23.99-8.8-26-10.99-26-2.54,0-4.17,3.55-7.92,12.31-.67,1.56-1.4,3.27-2.18,5.02-1.66-4.14-3.14-5.9-4.84-5.9-2.39,0-4.05,3.42-7.07,9.64-5.56,11.44-13.97,28.72-29.12,28.72-.8,0-1.46,.65-1.46,1.45s.65,1.45,1.46,1.45H86.48c.43,0,.85-.19,1.12-.53,.28-.34,.39-.78,.31-1.2Zm-46.88-1.25c8.93-4.92,15.3-15.3,19.83-24.54,2.62,8.88,4.97,20.28,5.83,24.58l-25.66-.04Z" })), Ei = (e) => /* @__PURE__ */ b.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...e }, /* @__PURE__ */ b.createElement("path", { d: "M18.29,39.57c0-1.03,.23-1.79,.68-2.28,.45-.49,1.06-.74,1.83-.74s1.42,.25,1.87,.74c.45,.49,.68,1.25,.68,2.29s-.23,1.79-.68,2.28c-.45,.5-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.25-.68-2.29Zm1.71-.02c0,.75,.09,1.25,.26,1.5,.13,.19,.31,.28,.54,.28s.42-.09,.55-.28c.17-.25,.25-.75,.25-1.5s-.08-1.24-.25-1.49c-.13-.19-.31-.29-.55-.29s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Zm2.47,9.08h-1.62l6.1-12.09h1.58l-6.05,12.09Zm3.55-3.01c0-1.03,.23-1.79,.68-2.28,.45-.49,1.07-.74,1.85-.74s1.4,.25,1.86,.74c.45,.5,.68,1.26,.68,2.28s-.23,1.79-.68,2.29c-.45,.49-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.26-.68-2.29Zm1.71,0c0,.75,.09,1.24,.26,1.49,.13,.19,.31,.29,.54,.29s.41-.09,.54-.28c.17-.25,.26-.75,.26-1.5s-.08-1.24-.25-1.5c-.13-.19-.31-.28-.55-.28s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Z" }), /* @__PURE__ */ b.createElement("path", { d: "M92.33,52.83v-20.42c0-1.61-1.31-2.93-2.93-2.93H6.65c-1.61,0-2.93,1.31-2.93,2.93v20.42c0,1.61,1.31,2.93,2.93,2.93H89.4c1.61,0,2.93-1.31,2.93-2.93Zm-52.34-2.93H9.58v-14.56h30.41v14.56Zm5.86-14.56h40.63v14.56H45.85v-14.56Z" })), ea = (e) => /* @__PURE__ */ b.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...e }, /* @__PURE__ */ b.createElement("path", { d: "M89.56,65.41H16.36V8.8c0-1.1-.9-2-2-2h-5.48c-1.1,0-2,.9-2,2V72.89c0,1.1,.9,2,2,2H89.56c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ b.createElement("path", { d: "M54.66,55.34c-17.76,0-33.46-17.8-34.12-18.56l-.98-1.13v-4.55l3.25,3.72c.15,.18,15.47,17.53,31.86,17.53h0c7.31,0,12.37-1.68,17.27-3.3,4.31-1.42,8.77-2.9,14.44-3.05l1.5-.04v3l-1.42,.04c-5.24,.14-9.29,1.48-13.59,2.9-5.13,1.69-10.43,3.45-18.22,3.45h0Z" }), /* @__PURE__ */ b.createElement("path", { d: "M87.84,59.04c-4.73-1.24-7.41-1.66-13.05-1.93-2.82-.14-5.22,.16-8,.5-2.73,.33-5.81,.71-10.06,.79-13.13,.27-23.77-4.63-37.17-17.31v-1.57c13.19,12.48,24.31,18.13,37.15,17.88,4.2-.08,7.26-.46,9.96-.79,2.83-.34,5.27-.64,8.17-.5,5.73,.28,8.2,.62,13,1.88v1.05Z" }), /* @__PURE__ */ b.createElement("path", { d: "M57.02,49.28c-19.55,0-30.91-14.65-37.69-23.41v-1.54c6.67,8.61,18.64,23.95,37.69,23.95,5.87,0,14.11-3.23,18.39-6.23,2.43-1.7,3.84-2.77,4.87-3.55,2.24-1.7,2.7-2.05,7.71-4.44l-.03,1.12c-4.92,2.34-4.91,2.47-7.08,4.12-1.04,.79-2.45,1.86-4.9,3.57-4.4,3.08-12.9,6.41-18.96,6.41Z" })), Bi = (e) => /* @__PURE__ */ b.createElement("svg", { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.69", ...e }, /* @__PURE__ */ b.createElement("defs", null, /* @__PURE__ */ b.createElement("style", null, ".cls-1{fill:#231f20;}")), /* @__PURE__ */ b.createElement("rect", { className: "cls-1", x: 46.87, y: 5.79, width: 8.32, height: 67.79, rx: 1 }), /* @__PURE__ */ b.createElement("rect", { className: "cls-1", x: 23.98, y: 17.65, width: 8.32, height: 23.31, rx: 1, transform: "translate(57.44 1.16) rotate(90)" }), /* @__PURE__ */ b.createElement("rect", { className: "cls-1", x: 19.53, y: 25.99, width: 8.32, height: 32.21, rx: 1, transform: "translate(65.79 18.41) rotate(90)" }), /* @__PURE__ */ b.createElement("rect", { className: "cls-1", x: 27.33, y: 60.4, width: 8.32, height: 14.6, rx: 1, transform: "translate(99.19 36.2) rotate(90)" }), /* @__PURE__ */ b.createElement("path", { className: "cls-1", d: "M81,52.74v4.32H64.55V52.74H81m1-2H63.55a1,1,0,0,0-1,1v6.32a1,1,0,0,0,1,1H82a1,1,0,0,0,1-1V51.74a1,1,0,0,0-1-1Z" }), /* @__PURE__ */ b.createElement("path", { className: "cls-1", d: "M90,14.41v4.33H64.55V14.41H90m1-2H63.55a1,1,0,0,0-1,1v6.33a1,1,0,0,0,1,1H91a1,1,0,0,0,1-1V13.41a1,1,0,0,0-1-1Z" })), Hi = (e) => /* @__PURE__ */ b.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...e }, /* @__PURE__ */ b.createElement("g", { id: "a" }, /* @__PURE__ */ b.createElement("path", { d: "M88.56,66.3H15.36V9.68c0-1.1-.9-2-2-2H7.89c-1.1,0-2,.9-2,2V73.77c0,1.1,.9,2,2,2H88.56c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ b.createElement("path", { d: "M18.36,54.67v6.94c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-6.94c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ b.createElement("path", { d: "M30.43,45.3v16.31c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-16.31c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ b.createElement("path", { d: "M42.51,32.3v29.31c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-29.31c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ b.createElement("path", { d: "M54.58,32.3v29.31c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-29.31c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ b.createElement("path", { d: "M66.66,42.22v19.33c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-19.33c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ b.createElement("path", { d: "M78.73,58.89v2.72c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-2.72c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ b.createElement("g", null, /* @__PURE__ */ b.createElement("path", { d: "M20.25,38.69c-.65,0-1.3-.32-1.68-.91-.6-.93-.34-2.16,.59-2.77,.01,0,1.17-.76,2.86-1.92,.91-.62,2.16-.39,2.78,.52,.62,.91,.39,2.16-.52,2.78-1.75,1.2-2.95,1.98-2.95,1.98-.34,.22-.71,.32-1.09,.32Z" }), /* @__PURE__ */ b.createElement("path", { d: "M28.5,32.92c-.61,0-1.21-.28-1.6-.8-.66-.88-.48-2.14,.4-2.8,1.91-1.43,3.51-2.72,4.76-3.83l.21-.19c.82-.74,2.09-.67,2.82,.16,.74,.82,.66,2.09-.16,2.82l-.22,.2c-1.34,1.19-3.03,2.55-5.02,4.04-.36,.27-.78,.4-1.2,.4Zm50.28-1.66c-.34,0-.68-.09-1-.27-1.64-.95-3.38-2.08-5.66-3.67-.91-.63-1.13-1.88-.49-2.79,.63-.9,1.88-1.13,2.79-.49,2.17,1.52,3.83,2.6,5.37,3.48,.96,.55,1.28,1.78,.73,2.73-.37,.64-1.04,1-1.73,1Zm-40.24-6.8c-.58,0-1.15-.25-1.55-.73-.7-.85-.58-2.11,.28-2.81,1.98-1.63,3.82-2.93,5.61-3.98,.95-.56,2.18-.24,2.74,.72s.24,2.18-.72,2.74c-1.61,.94-3.27,2.12-5.09,3.62-.37,.31-.82,.45-1.27,.45Zm29.37-.59c-.4,0-.8-.12-1.15-.37-1.61-1.13-3.5-2.44-5.34-3.52-.95-.56-1.27-1.78-.72-2.74,.56-.95,1.78-1.27,2.74-.72,1.98,1.16,3.95,2.52,5.63,3.7,.9,.64,1.12,1.88,.48,2.79-.39,.55-1.01,.85-1.64,.85Zm-18-5.77c-.89,0-1.7-.6-1.93-1.49-.28-1.07,.36-2.16,1.43-2.44,1.72-.45,3.46-.68,5.17-.68,.71,0,1.46,.08,2.24,.24,1.08,.23,1.77,1.29,1.55,2.37s-1.29,1.77-2.37,1.55c-.5-.11-.98-.16-1.42-.16-1.37,0-2.77,.18-4.16,.55-.17,.04-.34,.07-.51,.07Z" }), /* @__PURE__ */ b.createElement("path", { d: "M88.21,34.46c-1.26,0-2.6-.2-4-.6-1.06-.3-1.68-1.41-1.37-2.47,.3-1.06,1.41-1.68,2.47-1.37,1.04,.3,2.02,.45,2.9,.45,1.1,0,2,.9,2,2s-.9,2-2,2Z" }))), /* @__PURE__ */ b.createElement("g", { id: "b" })), Fi = (e) => /* @__PURE__ */ b.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 96.3 82.6", style: {
  enableBackground: "new 0 0 96.3 82.6"
}, xmlSpace: "preserve", ...e }, /* @__PURE__ */ b.createElement("path", { d: "M88.6,66.5H15.4V7.6c0-1.1-0.9-2-2-2H7.9c-1.1,0-2,0.9-2,2V74c0,1.1,0.9,2,2,2h80.7c1.1,0,2-0.9,2-2v-5.5 C90.6,67.4,89.7,66.5,88.6,66.5L88.6,66.5z" }), /* @__PURE__ */ b.createElement("path", { d: "M31.7,51.1V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-11.9c0-1.1-0.9-2-2-2h-0.9C32.6,49.1,31.7,50,31.7,51.1L31.7,51.1z " }), /* @__PURE__ */ b.createElement("path", { d: "M38.7,41.7V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-21.3c0-1.1-0.9-2-2-2h-0.9C39.6,39.7,38.7,40.6,38.7,41.7 L38.7,41.7z" }), /* @__PURE__ */ b.createElement("path", { d: "M45.7,28.7V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-34.3c0-1.1-0.9-2-2-2h-0.9C46.6,26.7,45.7,27.6,45.7,28.7 L45.7,28.7z" }), /* @__PURE__ */ b.createElement("path", { d: "M59.7,28.7V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-34.3c0-1.1-0.9-2-2-2h-0.9C60.6,26.7,59.7,27.6,59.7,28.7 L59.7,28.7z" }), /* @__PURE__ */ b.createElement("path", { d: "M52.7,23.6V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-39.4c0-1.1-0.9-2-2-2h-0.9C53.6,21.6,52.7,22.5,52.7,23.6 L52.7,23.6z" }), /* @__PURE__ */ b.createElement("path", { d: "M66.8,38.6v24.3c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-24.3c0-1.1-0.9-2-2-2h-0.9C67.7,36.6,66.8,37.5,66.8,38.6 L66.8,38.6z" }), /* @__PURE__ */ b.createElement("path", { d: "M73.8,55.3V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-7.7c0-1.1-0.9-2-2-2h-0.9C74.7,53.3,73.8,54.2,73.8,55.3L73.8,55.3 z" }), /* @__PURE__ */ b.createElement("path", { d: "M24.7,55.3V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-7.7c0-1.1-0.9-2-2-2h-0.9C25.6,53.3,24.7,54.2,24.7,55.3L24.7,55.3 z" }), /* @__PURE__ */ b.createElement("path", { d: "M17.6,61.5V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2v-1.6c0-1.1-1-1.9-2.1-1.9h-0.9C18.5,59.5,17.6,60.4,17.6,61.5L17.6,61.5 z" }), /* @__PURE__ */ b.createElement("path", { d: "M80.8,61.5V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2v-1.6c0-1.1-1-1.9-2.1-1.9h-0.9C81.7,59.5,80.8,60.4,80.8,61.5L80.8,61.5 z" })), Wi = () => {
  const { config: e, tempConfig: C } = b.useContext(Ce), l = b.useContext(He), d = ["General", , "Charts", "Maps"], A = (G) => {
    const h = G.target.files[0], dn = new FileReader();
    dn.onload = (v) => {
      const an = v.target.result;
      try {
        const Fn = JSON.parse(an);
        l({ type: "EDITOR_SET_CONFIG", payload: Fn }), l({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      } catch {
        alert("Invalid JSON");
      }
    }, dn.readAsText(h);
  }, R = (G) => {
    let h = {};
    switch (G.category) {
      case "Charts": {
        const dn = G.subType, v = G.visualizationSubType ? G.visualizationSubType : "regular";
        h = {
          ...G,
          visualizationType: dn,
          visualizationSubType: v,
          newViz: !0,
          datasets: {}
        };
        break;
      }
      case "General": {
        const dn = G.subType;
        h = { ...G, newViz: !0, datasets: {}, visualizationType: dn };
        break;
      }
      case "Maps": {
        const dn = G.subType;
        h = {
          ...G,
          newViz: !0,
          datasets: {},
          type: "map"
        }, h.general = {
          geoType: dn,
          type: G == null ? void 0 : G.generalType
        };
        break;
      }
    }
    return h;
  }, c = (G) => {
    const h = R(G);
    l({ type: "EDITOR_SET_CONFIG", payload: { ...e, ...h, activeVizButtonID: G.id } }), l({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
  }, E = (G) => {
    const { label: h, icon: dn, id: v } = G, an = v === (e == null ? void 0 : e.activeVizButtonID) || 0, Fn = () => {
      c(G);
    };
    return C && l({ type: "EDITOR_SAVE", payload: C }), /* @__PURE__ */ rn("button", { className: an ? "active" : "", onClick: Fn, "aria-label": h, children: [
      dn,
      /* @__PURE__ */ M("span", { className: "mt-1", children: h })
    ] });
  };
  return /* @__PURE__ */ rn("div", { className: "choose-vis", children: [
    /* @__PURE__ */ M(
      "a",
      {
        href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/index.html",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "guidance-link",
        style: { marginTop: 0, marginBottom: "2rem" },
        children: /* @__PURE__ */ M("div", { children: /* @__PURE__ */ rn("p", { children: [
          "For more information on the types of data visualizations in the WCMS, including examples and best practices,",
          " ",
          /* @__PURE__ */ M("u", { children: "see the WCMS Features Gallery" }),
          "."
        ] }) })
      }
    ),
    d.map((G) => /* @__PURE__ */ rn(ca.Fragment, { children: [
      /* @__PURE__ */ M("div", { className: "heading-2", children: G }),
      /* @__PURE__ */ M("ul", { className: `visualization-grid category_${G.toLowerCase()}`, children: xi.filter((h) => h.category === G).map((h, dn) => /* @__PURE__ */ M("li", { children: /* @__PURE__ */ rn(Ar, { position: "right", children: [
        /* @__PURE__ */ M(Ar.Target, { children: /* @__PURE__ */ M(E, { ...h }) }),
        /* @__PURE__ */ M(Ar.Content, { children: h.content })
      ] }) }, dn)) })
    ] })),
    /* @__PURE__ */ M("hr", {}),
    /* @__PURE__ */ rn("div", { className: "form-group", children: [
      /* @__PURE__ */ rn("label", { htmlFor: "uploadConfig", children: [
        "Upload Custom Configuration",
        " ",
        /* @__PURE__ */ rn(Ar, { style: { textTransform: "none" }, children: [
          /* @__PURE__ */ M(Ar.Target, { children: /* @__PURE__ */ M(vo, { display: "warningCircle", style: { marginLeft: "0.5rem" } }) }),
          /* @__PURE__ */ M(Ar.Content, { children: /* @__PURE__ */ M("p", { children: "Make sure you have properly validated the configuration before uploading." }) })
        ] })
      ] }),
      /* @__PURE__ */ M(
        "input",
        {
          type: "file",
          accept: ".txt,.json",
          className: "form-control-file",
          id: "uploadConfig",
          onChange: A
        }
      )
    ] })
  ] });
}, xi = [
  {
    id: 1,
    category: "Charts",
    label: "Bar",
    type: "chart",
    subType: "Bar",
    orientation: "vertical",
    barThickness: "0.37",
    visualizationSubType: "regular",
    xAxis: {
      type: "categorical",
      size: 75,
      maxTickRotation: 45,
      labelOffset: 0
    },
    icon: /* @__PURE__ */ M(Ea, {}),
    content: "Use bars to show comparisons between data categories."
  },
  {
    id: 2,
    category: "Charts",
    label: "Epi Chart",
    type: "chart",
    subType: "Bar",
    orientation: "vertical",
    barThickness: "0.95",
    isResponsiveTicks: !0,
    visualizationSubType: "regular",
    xAxis: {
      type: "date-time",
      size: 0,
      labelOffset: 0,
      maxTickRotation: 45
    },
    icon: /* @__PURE__ */ M(Fi, {}),
    content: "Use bars to show comparisons between data categories."
  },
  {
    id: 3,
    category: "Charts",
    label: "Combo Chart",
    type: "chart",
    subType: "Combo",
    orientation: "vertical",
    icon: /* @__PURE__ */ M(Hi, {}),
    content: "Use bars to show comparisons between data categories."
  },
  {
    id: 4,
    category: "Charts",
    label: "Line",
    type: "chart",
    subType: "Line",
    orientation: "vertical",
    icon: /* @__PURE__ */ M(Ba, {}),
    content: "Present one or more data trends over time."
  },
  {
    id: 5,
    category: "Charts",
    label: "Paired Bar",
    type: "chart",
    subType: "Paired Bar",
    orientation: "horizontal",
    icon: /* @__PURE__ */ M(Pi, {}),
    content: "Use paired bars to show comparisons between two different data categories."
  },
  {
    id: 6,
    category: "Charts",
    label: "Area Chart",
    type: "chart",
    subType: "Area Chart",
    orientation: "vertical",
    icon: /* @__PURE__ */ M(Oi, {}),
    content: "Display an area chart to visualize quantities over time."
  },
  {
    id: 7,
    category: "Charts",
    label: "Forecast Chart",
    type: "chart",
    subType: "Forecasting",
    orientation: "vertical",
    icon: /* @__PURE__ */ M(ea, {}),
    content: "Display a forecasting chart to predict future data trends."
  },
  {
    id: 8,
    category: "Charts",
    label: "Scatter Plot",
    type: "chart",
    subType: "Scatter Plot",
    orientation: "vertical",
    icon: /* @__PURE__ */ M(Li, {}),
    content: "Display a scatter plot to explore relationships between numeric variables."
  },
  {
    id: 9,
    category: "Charts",
    label: "Box Plot",
    type: "chart",
    subType: "Box Plot",
    orientation: "vertical",
    icon: /* @__PURE__ */ M(ki, {}),
    content: "Display a box plot to visualize the distribution of numerical data through quartiles."
  },
  {
    id: 10,
    category: "Charts",
    label: "Sankey Diagram",
    type: "chart",
    subType: "Sankey",
    orientation: "vertical",
    icon: /* @__PURE__ */ M(Ha, {}),
    content: "Display a sankey diagram"
  },
  {
    id: 11,
    category: "Charts",
    label: "Forecast Chart",
    type: "chart",
    subType: "Forecasting",
    orientation: "vertical",
    icon: /* @__PURE__ */ M(ea, {}),
    content: "Display a forecasting chart"
  },
  {
    id: 12,
    category: "Charts",
    label: "Horizontal Bar (Stacked)",
    type: "chart",
    subType: "Bar",
    visualizationSubType: "stacked",
    orientation: "horizontal",
    icon: /* @__PURE__ */ M(Ii, {}),
    content: "Use bars to show comparisons between data categories."
  },
  {
    id: 13,
    category: "Charts",
    label: "Pie",
    type: "chart",
    subType: "Pie",
    orientation: "Pie",
    icon: /* @__PURE__ */ M(Fa, {}),
    content: "Present the numerical proportions of a data series."
  },
  {
    id: 14,
    category: "Charts",
    label: "Deviation Bar",
    type: "chart",
    subType: "Deviation Bar",
    orientation: "Pie",
    icon: /* @__PURE__ */ M(Bi, {}),
    content: "Use deviation bars to display how individual values differ from a target"
  },
  {
    id: 15,
    category: "General",
    label: "Dashboard",
    type: "dashboard",
    subType: null,
    orientation: null,
    icon: /* @__PURE__ */ M(Ti, {}),
    content: "Present multiple data visualizations with shared filter controls."
  },
  {
    id: 16,
    category: "General",
    label: "Data Bite",
    type: "data-bite",
    subType: null,
    orientation: null,
    icon: /* @__PURE__ */ M(Wa, {}),
    content: "Highlight a single aggregated value (e.g., sum or median)."
  },
  {
    id: 17,
    category: "General",
    label: "Waffle Chart",
    type: "waffle-chart",
    subType: "Waffle",
    orientation: null,
    icon: /* @__PURE__ */ M(xa, {}),
    content: "Highlight a piece of data in relationship to a data set."
  },
  {
    id: 18,
    category: "General",
    label: "Gauge Chart",
    type: "waffle-chart",
    subType: "Gauge",
    orientation: null,
    icon: /* @__PURE__ */ M(Ei, {}),
    content: `Specify the calculation of a single data point (such as a percentage value) and present it on a horizontal
              scale.`
  },
  {
    id: 19,
    category: "Maps",
    label: "United States (State- or County-Level)",
    type: "map",
    subType: "us",
    icon: /* @__PURE__ */ M(Eo, {}),
    content: "Present a U.S. choropleth map at state or county level.",
    position: "right"
  },
  {
    id: 20,
    category: "Maps",
    label: "United States (HHS Regions)",
    type: "map",
    subType: "us-region",
    icon: /* @__PURE__ */ M(qa, {}),
    content: "Present a U.S. choropleth map at state or county level.",
    position: "right"
  },
  {
    id: 21,
    category: "Maps",
    label: "World",
    type: "map",
    subType: "world",
    icon: /* @__PURE__ */ M(Ga, {}),
    content: "Present a choropleth map of the world."
  },
  {
    id: 22,
    category: "Maps",
    label: "U.S. State",
    type: "map",
    subType: "single-state",
    icon: /* @__PURE__ */ M(Va, {}),
    content: "Present a choropleth map of an individual U.S. state."
  },
  {
    id: 23,
    category: "Maps",
    label: "U.S. Geocode",
    type: "map",
    subType: "us-county",
    generalType: "us-geocode",
    icon: /* @__PURE__ */ M(Eo, {}),
    content: "United States GeoCode"
  }
];
function Gi({ containerEl: e }) {
  const { config: C, setTempConfig: l, isDebug: d } = b.useContext(Ce);
  let { type: A } = C;
  switch (A) {
    case "map":
      return /* @__PURE__ */ M(ce, { component: "CdcMap", children: /* @__PURE__ */ M(_a, { isEditor: !0, config: C, containerEl: e, setConfig: l }) });
    case "waffle-chart":
      if (C.visualizationType === "Waffle" || C.visualizationType === "Gauge")
        return /* @__PURE__ */ M(ce, { component: "CdcWaffleChart", children: /* @__PURE__ */ M(ja, { isEditor: !0, isDebug: d, config: C, setConfig: l }) });
      break;
    case "chart":
      return /* @__PURE__ */ M(ce, { component: "CdcChart", children: /* @__PURE__ */ M(Xa, { isEditor: !0, isDebug: d, config: C }) });
    case "dashboard":
      return /* @__PURE__ */ M(ce, { component: "CdcDashboard", children: /* @__PURE__ */ M(Ta, { isEditor: !0, isDebug: d }) });
    case "data-bite":
      return /* @__PURE__ */ M(ce, { component: "CdcDashboard", children: /* @__PURE__ */ M(Ya, { isEditor: !0, isDebug: d, config: C, setConfig: l }) });
    case "markup-include":
      return /* @__PURE__ */ M(ce, { component: "CdcDashboard", children: /* @__PURE__ */ M(ka, { isEditor: !0, isDebug: d, config: C, setConfig: l }) });
    default:
      return /* @__PURE__ */ M("p", { children: "No visualization type selected." });
  }
}
const Vi = (e) => {
  if (e !== null) {
    let C = da(e);
    const l = JSON.stringify(C), d = new CustomEvent("updateVizConfig", { detail: l, bubbles: !0 });
    window.dispatchEvent(d);
  }
}, Ki = (e) => {
  var C;
  if (e.type === "dashboard") {
    let l = !1, d;
    if (e.data || e.dataUrl) {
      l = !0, d = { ...e };
      const A = e.dataFileName || "dataset-1";
      d.datasets = {}, d.datasets[A] = {
        ...Be.pick(e, ["data", "dataUrl", "dataFileSourceType"]),
        dataFileName: A
      }, Object.keys(d.visualizations).forEach((c) => {
        const E = { dataKey: A, ...Be.pick(d, "dataDescription", "formattedData") };
        d.visualizations[c] = { ...d.visualizations[c], ...E };
      }), d = { ...d, ...{ data: [], dataUrl: "", dataFileName: "", dataFileSourceType: "", dataDescription: [], formattedData: [] } };
    }
    if ((C = e.dashboard) != null && C.filters) {
      l = !0, d = { ...e };
      const A = { ...d.dashboard };
      A.sharedFilters || (A.sharedFilters = []);
      const R = A.filters.map((c) => ({ ...c, key: c.label, showDropdown: !0, usedBy: Object.keys(d.visualizations) }));
      A.sharedFilters = [...A.sharedFilters, ...R], d.dashboard = { ...A, filters: void 0 };
    }
    if (l)
      return d;
  }
  return e;
};
const qi = (e, C) => {
  var l;
  switch (C.type) {
    case "EDITOR_SAVE":
      return { ...e, config: C.payload, tempConfig: null };
    case "EDITOR_SET_CONFIG":
      return { ...e, config: C.payload };
    case "SET_DASHBOARD_DATASET": {
      const { dataset: d, datasetKey: A, oldDatasetKey: R } = C.payload, c = R ? (l = e.config) == null ? void 0 : l.datasets[R] : {}, E = Be.cloneDeep(e.config);
      return R && (ta(E, (h) => {
        var dn;
        (dn = h.rows) == null || dn.forEach((v) => {
          v.dataKey === R && (v.dataKey = A);
        }), Object.values(h.visualizations || {}).forEach((v) => {
          v.dataKey === R && (v.dataKey = A);
        });
      }), delete E.datasets[R]), Object.values(E.datasets).forEach((G) => {
        G.preview = !1;
      }), E.datasets[A] = { ...c, ...d }, { ...e, config: E };
    }
    case "DELETE_DASHBOARD_DATASET": {
      const { datasetKey: d } = C.payload, A = (c) => {
        var E;
        (E = c.rows) == null || E.forEach((G) => {
          G.dataKey === d && delete G.dataKey;
        }), Object.values(c.visualizations || {}).forEach((G) => {
          G.dataKey === d && delete G.dataKey;
        });
      }, R = Be.cloneDeep(e.config);
      return ta(R, A), delete R.datasets[d], { ...e, config: R };
    }
    case "EDITOR_TEMP_SAVE":
      return { ...e, tempConfig: C.payload };
    case "EDITOR_SET_ERRORS":
      return { ...e, errors: C.payload };
    case "EDITOR_SET_VIEWPORT":
      return { ...e, currentViewport: C.payload };
    case "EDITOR_SET_GLOBALACTIVE":
      return { ...e, globalActive: C.payload };
    default:
      return e;
  }
}, ta = (e, C) => {
  e.multiDashboards && e.multiDashboards.forEach((l) => {
    C(l);
  }), C(e);
}, zi = za(qi), _i = ({ config: e, hostname: C, containerEl: l, sharepath: d, isDebug: A }) => {
  const R = b.useMemo(() => {
    let an = 0;
    return (e != null && e.data || e != null && e.dataUrl || e != null && e.originalFormattedData || e != null && e.datasets) && (e != null && e.type) && (an = 2), { config: Ki(e || { newViz: !0, errors: [], currentViewport: "lg" }), errors: [], currentViewport: "lg", globalActive: an, sharepath: d, isDebug: A, hostname: C };
  }, [e]);
  b.useEffect(() => {
    var an;
    Bo && ((an = Bo) == null || an.init());
  }, []);
  const [c, E] = b.useReducer(zi, R), G = (an) => {
    Vi(Be.cloneDeep(an)), E({ type: "EDITOR_TEMP_SAVE", payload: an });
  }, h = new Ra((an) => {
    const Fn = an[0], { width: tn } = Fn.contentRect, An = Na(tn);
    c.currentViewport !== An && E({ type: "EDITOR_SET_VIEWPORT", payload: An });
  }), dn = b.useCallback((an) => {
    an !== null && h.observe(an);
  }, []);
  b.useEffect(() => {
    let an = da(c.config);
    const Fn = JSON.stringify(an), tn = new CustomEvent("updateVizConfig", { detail: Fn });
    window.dispatchEvent(tn);
  }, [c.config]);
  const v = b.useMemo(() => {
    c.config.type !== "dashboard" ? c.config.formattedData : c.config.datasets && Object.keys(c.config.datasets).length > 0;
  }, [c.config.type, c.config.datasets]);
  return /* @__PURE__ */ rn(Pa, { children: [
    /* @__PURE__ */ M(Ce.Provider, { value: { ...c, setTempConfig: G }, children: /* @__PURE__ */ M(He.Provider, { value: E, children: /* @__PURE__ */ M("div", { className: `cdc-open-viz-module cdc-editor ${c.currentViewport}`, ref: dn, children: /* @__PURE__ */ rn(Xu, { className: "top-level", children: [
      /* @__PURE__ */ M(de, { title: "1. Choose Visualization Type", className: "choose-type", children: /* @__PURE__ */ M(Wi, {}) }),
      /* @__PURE__ */ M(de, { title: "2. Import Data", className: "data-designer", disableRule: !c.config.type, children: /* @__PURE__ */ M(Ni, {}) }),
      /* @__PURE__ */ M(de, { title: "3. Configure", className: "configure", disableRule: v, children: /* @__PURE__ */ M(Gi, { containerEl: l }) })
    ] }) }) }) }),
    /* @__PURE__ */ M(Ia, {})
  ] });
}, Xi = (e) => new Promise((C) => setTimeout(C, e)), nl = {
  title: "Components/Pages/CdcEditor",
  component: _i
}, Nt = {
  args: {
    config: {}
  }
}, Tt = {
  args: {},
  parameters: {},
  play: async ({
    canvasElement: e
  }) => {
    const C = Ua(e), l = Ja.setup();
    await Xi(1e3);
    const d = C.getByText("United States (State- or County-Level)");
    await l.click(d);
    const A = C.getByText("United States: County Sample Data");
    await l.click(A);
  }
};
var oa, aa, ua;
Nt.parameters = {
  ...Nt.parameters,
  docs: {
    ...(oa = Nt.parameters) == null ? void 0 : oa.docs,
    source: {
      originalSource: `{
  args: {
    config: {}
  }
}`,
      ...(ua = (aa = Nt.parameters) == null ? void 0 : aa.docs) == null ? void 0 : ua.source
    }
  }
};
var ia, la, sa;
Tt.parameters = {
  ...Tt.parameters,
  docs: {
    ...(ia = Tt.parameters) == null ? void 0 : ia.docs,
    source: {
      originalSource: `{
  args: {},
  parameters: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    await sleep(1000);
    const mapButton = canvas.getByText('United States (State- or County-Level)');
    await user.click(mapButton);
    const sampleData = canvas.getByText('United States: County Sample Data');
    await user.click(sampleData);
  }
}`,
      ...(sa = (la = Tt.parameters) == null ? void 0 : la.docs) == null ? void 0 : sa.source
    }
  }
};
const rl = ["DefaultEditor", "PreviewTable"];
export {
  Nt as DefaultEditor,
  Tt as PreviewTable,
  rl as __namedExportsOrder,
  nl as default
};
