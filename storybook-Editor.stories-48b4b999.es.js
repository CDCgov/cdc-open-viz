import { r as A, R as g } from "./storybook-index-45401197.es.js";
import { i as Sa, g as wa } from "./storybook-getViewport-513ec896.es.js";
import { M as Ma, d as ba, a as Po, G as Aa, O as Da } from "./storybook-CdcDashboard-7e4a8d73.es.js";
import { a as ce, E as Ee } from "./storybook-CdcChartComponent-f9821d3b.es.js";
import { P as Zn } from "./storybook-index-43433e35.es.js";
import { G as aa, f as ua } from "./storybook-InputToggle-1e77d9ab.es.js";
import { a as Ra, C as Na } from "./storybook-CdcMarkupInclude-6be71bc2.es.js";
import { D as Ta } from "./storybook-DataTransform-6163e156.es.js";
import { c as ia } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { f as Io } from "./storybook-fetchRemoteData-1d0a5295.es.js";
import { a as fo, c as Lo, d as Pa, e as Ia, f as La, g as ka, h as Ea, i as Oa, j as ko, k as Ba, l as Fa } from "./storybook-Icon-4f5978ba.es.js";
import { D as Ha } from "./storybook-DataDesigner-1d516d20.es.js";
import { T as Dr } from "./storybook-Tooltip-4102bd69.es.js";
import { i as so, a as wt } from "./storybook-isSolr-4154a32f.es.js";
import { S as Wa, C as xa } from "./storybook-CdcMap-7a44998e.es.js";
import { C as Ga } from "./storybook-CdcChart-3d898e9a.es.js";
import { C as Va } from "./storybook-CdcDataBite-7aaaabf2.es.js";
import { C as Ka } from "./storybook-CdcWaffleChart-89d05418.es.js";
import { E as le } from "./storybook-viewports-5c5d7af1.es.js";
import { _ as go } from "./storybook-lodash-a4231e1c.es.js";
import { w as qa, u as za } from "./storybook-index-73510294.es.js";
import "./storybook-index-3b47b3f7.es.js";
import "./storybook-Accordion-2501c7d9.es.js";
import "./storybook-editor-57986c01.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-Button-63da743c.es.js";
import "./storybook-InputSelect-20478396.es.js";
import "./storybook-coveUpdateWorker-4c7dbbf1.es.js";
import "./storybook-updateFieldFactory-c006040a.es.js";
import "./storybook-Inputs-b80d0cf3.es.js";
import "./storybook-Filters-ce4a04a7.es.js";
import "./storybook-MultiSelect-d587cce3.es.js";
import "./storybook-Loader-f4ec7b29.es.js";
import "./storybook-FilterStyles-fd509eb9.es.js";
import "./storybook-NestedDropdown-bc9acc77.es.js";
import "./storybook-DataTable-897188ef.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-79b9238f.es.js";
import "./storybook-DashboardFilters-3d2191b7.es.js";
import "./storybook-Footnotes-108c3a2d.es.js";
import "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-linear-bc5fb9aa.es.js";
import "./storybook-linear-ef79b404.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-Text-c19e6344.es.js";
import "./storybook-BlurStrokeText-adc27352.es.js";
import "./storybook-Card-6750b07b.es.js";
import "./storybook-supported-geos-c96b4fa3.es.js";
import "./storybook-index-398c73a4.es.js";
var Eo = {}, co = {}, yo = 34, Ie = 10, Co = 13;
function la(t) {
  return new Function("d", "return {" + t.map(function(d, s) {
    return JSON.stringify(d) + ": d[" + s + '] || ""';
  }).join(",") + "}");
}
function _a(t, d) {
  var s = la(t);
  return function(C, b) {
    return d(s(C), b, t);
  };
}
function Oo(t) {
  var d = /* @__PURE__ */ Object.create(null), s = [];
  return t.forEach(function(C) {
    for (var b in C)
      b in d || s.push(d[b] = b);
  }), s;
}
function wr(t, d) {
  var s = t + "", C = s.length;
  return C < d ? new Array(d - C + 1).join(0) + s : s;
}
function Xa(t) {
  return t < 0 ? "-" + wr(-t, 6) : t > 9999 ? "+" + wr(t, 6) : wr(t, 4);
}
function Ya(t) {
  var d = t.getUTCHours(), s = t.getUTCMinutes(), C = t.getUTCSeconds(), b = t.getUTCMilliseconds();
  return isNaN(t) ? "Invalid Date" : Xa(t.getUTCFullYear()) + "-" + wr(t.getUTCMonth() + 1, 2) + "-" + wr(t.getUTCDate(), 2) + (b ? "T" + wr(d, 2) + ":" + wr(s, 2) + ":" + wr(C, 2) + "." + wr(b, 3) + "Z" : C ? "T" + wr(d, 2) + ":" + wr(s, 2) + ":" + wr(C, 2) + "Z" : s || d ? "T" + wr(d, 2) + ":" + wr(s, 2) + "Z" : "");
}
function ja(t) {
  var d = new RegExp('["' + t + `
\r]`), s = t.charCodeAt(0);
  function C(M, un) {
    var Nn, Cn, fn = b(M, function(qn, hn) {
      if (Nn)
        return Nn(qn, hn - 1);
      Cn = qn, Nn = un ? _a(qn, un) : la(qn);
    });
    return fn.columns = Cn || [], fn;
  }
  function b(M, un) {
    var Nn = [], Cn = M.length, fn = 0, qn = 0, hn, Hn = Cn <= 0, An = !1;
    M.charCodeAt(Cn - 1) === Ie && --Cn, M.charCodeAt(Cn - 1) === Co && --Cn;
    function Un() {
      if (Hn)
        return co;
      if (An)
        return An = !1, Eo;
      var Dn, tr = fn, Kn;
      if (M.charCodeAt(tr) === yo) {
        for (; fn++ < Cn && M.charCodeAt(fn) !== yo || M.charCodeAt(++fn) === yo; )
          ;
        return (Dn = fn) >= Cn ? Hn = !0 : (Kn = M.charCodeAt(fn++)) === Ie ? An = !0 : Kn === Co && (An = !0, M.charCodeAt(fn) === Ie && ++fn), M.slice(tr + 1, Dn - 1).replace(/""/g, '"');
      }
      for (; fn < Cn; ) {
        if ((Kn = M.charCodeAt(Dn = fn++)) === Ie)
          An = !0;
        else if (Kn === Co)
          An = !0, M.charCodeAt(fn) === Ie && ++fn;
        else if (Kn !== s)
          continue;
        return M.slice(tr, Dn);
      }
      return Hn = !0, M.slice(tr, Cn);
    }
    for (; (hn = Un()) !== co; ) {
      for (var Wn = []; hn !== Eo && hn !== co; )
        Wn.push(hn), hn = Un();
      un && (Wn = un(Wn, qn++)) == null || Nn.push(Wn);
    }
    return Nn;
  }
  function P(M, un) {
    return M.map(function(Nn) {
      return un.map(function(Cn) {
        return pn(Nn[Cn]);
      }).join(t);
    });
  }
  function y(M, un) {
    return un == null && (un = Oo(M)), [un.map(pn).join(t)].concat(P(M, un)).join(`
`);
  }
  function B(M, un) {
    return un == null && (un = Oo(M)), P(M, un).join(`
`);
  }
  function nn(M) {
    return M.map(h).join(`
`);
  }
  function h(M) {
    return M.map(pn).join(t);
  }
  function pn(M) {
    return M == null ? "" : M instanceof Date ? Ya(M) : d.test(M += "") ? '"' + M.replace(/"/g, '""') + '"' : M;
  }
  return {
    parse: C,
    parseRows: b,
    format: y,
    formatBody: B,
    formatRows: nn,
    formatRow: h,
    formatValue: pn
  };
}
var Ua = ja(","), Ja = Ua.parse;
function ye(t, d, s, C) {
  function b(P) {
    return P instanceof s ? P : new s(function(y) {
      y(P);
    });
  }
  return new (s || (s = Promise))(function(P, y) {
    function B(pn) {
      try {
        h(C.next(pn));
      } catch (M) {
        y(M);
      }
    }
    function nn(pn) {
      try {
        h(C.throw(pn));
      } catch (M) {
        y(M);
      }
    }
    function h(pn) {
      pn.done ? P(pn.value) : b(pn.value).then(B, nn);
    }
    h((C = C.apply(t, d || [])).next());
  });
}
function Ce(t, d) {
  var s = { label: 0, sent: function() {
    if (P[0] & 1)
      throw P[1];
    return P[1];
  }, trys: [], ops: [] }, C, b, P, y;
  return y = { next: B(0), throw: B(1), return: B(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
    return this;
  }), y;
  function B(h) {
    return function(pn) {
      return nn([h, pn]);
    };
  }
  function nn(h) {
    if (C)
      throw new TypeError("Generator is already executing.");
    for (; y && (y = 0, h[0] && (s = 0)), s; )
      try {
        if (C = 1, b && (P = h[0] & 2 ? b.return : h[0] ? b.throw || ((P = b.return) && P.call(b), 0) : b.next) && !(P = P.call(b, h[1])).done)
          return P;
        switch (b = 0, P && (h = [h[0] & 2, P.value]), h[0]) {
          case 0:
          case 1:
            P = h;
            break;
          case 4:
            return s.label++, { value: h[1], done: !1 };
          case 5:
            s.label++, b = h[1], h = [0];
            continue;
          case 7:
            h = s.ops.pop(), s.trys.pop();
            continue;
          default:
            if (P = s.trys, !(P = P.length > 0 && P[P.length - 1]) && (h[0] === 6 || h[0] === 2)) {
              s = 0;
              continue;
            }
            if (h[0] === 3 && (!P || h[1] > P[0] && h[1] < P[3])) {
              s.label = h[1];
              break;
            }
            if (h[0] === 6 && s.label < P[1]) {
              s.label = P[1], P = h;
              break;
            }
            if (P && s.label < P[2]) {
              s.label = P[2], s.ops.push(h);
              break;
            }
            P[2] && s.ops.pop(), s.trys.pop();
            continue;
        }
        h = d.call(t, s);
      } catch (pn) {
        h = [6, pn], b = 0;
      } finally {
        C = P = 0;
      }
    if (h[0] & 5)
      throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function $a(t, d) {
  var s = typeof Symbol == "function" && t[Symbol.iterator];
  if (!s)
    return t;
  var C = s.call(t), b, P = [], y;
  try {
    for (; (d === void 0 || d-- > 0) && !(b = C.next()).done; )
      P.push(b.value);
  } catch (B) {
    y = { error: B };
  } finally {
    try {
      b && !b.done && (s = C.return) && s.call(C);
    } finally {
      if (y)
        throw y.error;
    }
  }
  return P;
}
function Za() {
  for (var t = [], d = 0; d < arguments.length; d++)
    t = t.concat($a(arguments[d]));
  return t;
}
var Qa = /* @__PURE__ */ new Map([
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
function Oe(t, d) {
  var s = nu(t);
  if (typeof s.path != "string") {
    var C = t.webkitRelativePath;
    Object.defineProperty(s, "path", {
      value: typeof d == "string" ? d : typeof C == "string" && C.length > 0 ? C : t.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return s;
}
function nu(t) {
  var d = t.name, s = d && d.lastIndexOf(".") !== -1;
  if (s && !t.type) {
    var C = d.split(".").pop().toLowerCase(), b = Qa.get(C);
    b && Object.defineProperty(t, "type", {
      value: b,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return t;
}
var ru = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function eu(t) {
  return ye(this, void 0, void 0, function() {
    return Ce(this, function(d) {
      return Nt(t) && tu(t) ? [2, iu(t.dataTransfer, t.type)] : ou(t) ? [2, au(t)] : Array.isArray(t) && t.every(function(s) {
        return "getFile" in s && typeof s.getFile == "function";
      }) ? [2, uu(t)] : [2, []];
    });
  });
}
function tu(t) {
  return Nt(t.dataTransfer);
}
function ou(t) {
  return Nt(t) && Nt(t.target);
}
function Nt(t) {
  return typeof t == "object" && t !== null;
}
function au(t) {
  return mo(t.target.files).map(function(d) {
    return Oe(d);
  });
}
function uu(t) {
  return ye(this, void 0, void 0, function() {
    var d;
    return Ce(this, function(s) {
      switch (s.label) {
        case 0:
          return [4, Promise.all(t.map(function(C) {
            return C.getFile();
          }))];
        case 1:
          return d = s.sent(), [2, d.map(function(C) {
            return Oe(C);
          })];
      }
    });
  });
}
function iu(t, d) {
  return ye(this, void 0, void 0, function() {
    var s, C;
    return Ce(this, function(b) {
      switch (b.label) {
        case 0:
          return t === null ? [2, []] : t.items ? (s = mo(t.items).filter(function(P) {
            return P.kind === "file";
          }), d !== "drop" ? [2, s] : [4, Promise.all(s.map(lu))]) : [3, 2];
        case 1:
          return C = b.sent(), [2, Bo(sa(C))];
        case 2:
          return [2, Bo(mo(t.files).map(function(P) {
            return Oe(P);
          }))];
      }
    });
  });
}
function Bo(t) {
  return t.filter(function(d) {
    return ru.indexOf(d.name) === -1;
  });
}
function mo(t) {
  if (t === null)
    return [];
  for (var d = [], s = 0; s < t.length; s++) {
    var C = t[s];
    d.push(C);
  }
  return d;
}
function lu(t) {
  if (typeof t.webkitGetAsEntry != "function")
    return Fo(t);
  var d = t.webkitGetAsEntry();
  return d && d.isDirectory ? ca(d) : Fo(t);
}
function sa(t) {
  return t.reduce(function(d, s) {
    return Za(d, Array.isArray(s) ? sa(s) : [s]);
  }, []);
}
function Fo(t) {
  var d = t.getAsFile();
  if (!d)
    return Promise.reject(t + " is not a File");
  var s = Oe(d);
  return Promise.resolve(s);
}
function su(t) {
  return ye(this, void 0, void 0, function() {
    return Ce(this, function(d) {
      return [2, t.isDirectory ? ca(t) : cu(t)];
    });
  });
}
function ca(t) {
  var d = t.createReader();
  return new Promise(function(s, C) {
    var b = [];
    function P() {
      var y = this;
      d.readEntries(function(B) {
        return ye(y, void 0, void 0, function() {
          var nn, h, pn;
          return Ce(this, function(M) {
            switch (M.label) {
              case 0:
                if (B.length)
                  return [3, 5];
                M.label = 1;
              case 1:
                return M.trys.push([1, 3, , 4]), [4, Promise.all(b)];
              case 2:
                return nn = M.sent(), s(nn), [3, 4];
              case 3:
                return h = M.sent(), C(h), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                pn = Promise.all(B.map(su)), b.push(pn), P(), M.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(B) {
        C(B);
      });
    }
    P();
  });
}
function cu(t) {
  return ye(this, void 0, void 0, function() {
    return Ce(this, function(d) {
      return [2, new Promise(function(s, C) {
        t.file(function(b) {
          var P = Oe(b, t.fullPath);
          s(P);
        }, function(b) {
          C(b);
        });
      })];
    });
  });
}
var yu = function(t, d) {
  if (t && d) {
    var s = Array.isArray(d) ? d : d.split(","), C = t.name || "", b = (t.type || "").toLowerCase(), P = b.replace(/\/.*$/, "");
    return s.some(function(y) {
      var B = y.trim().toLowerCase();
      return B.charAt(0) === "." ? C.toLowerCase().endsWith(B) : B.endsWith("/*") ? P === B.replace(/\/.*$/, "") : b === B;
    });
  }
  return !0;
};
function Ho(t, d) {
  var s = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var C = Object.getOwnPropertySymbols(t);
    d && (C = C.filter(function(b) {
      return Object.getOwnPropertyDescriptor(t, b).enumerable;
    })), s.push.apply(s, C);
  }
  return s;
}
function Wo(t) {
  for (var d = 1; d < arguments.length; d++) {
    var s = arguments[d] != null ? arguments[d] : {};
    d % 2 ? Ho(Object(s), !0).forEach(function(C) {
      ya(t, C, s[C]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : Ho(Object(s)).forEach(function(C) {
      Object.defineProperty(t, C, Object.getOwnPropertyDescriptor(s, C));
    });
  }
  return t;
}
function ya(t, d, s) {
  return d in t ? Object.defineProperty(t, d, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : t[d] = s, t;
}
function xo(t, d) {
  return fu(t) || pu(t, d) || du(t, d) || Cu();
}
function Cu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function du(t, d) {
  if (t) {
    if (typeof t == "string")
      return Go(t, d);
    var s = Object.prototype.toString.call(t).slice(8, -1);
    if (s === "Object" && t.constructor && (s = t.constructor.name), s === "Map" || s === "Set")
      return Array.from(t);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return Go(t, d);
  }
}
function Go(t, d) {
  (d == null || d > t.length) && (d = t.length);
  for (var s = 0, C = new Array(d); s < d; s++)
    C[s] = t[s];
  return C;
}
function pu(t, d) {
  var s = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (s != null) {
    var C = [], b = !0, P = !1, y, B;
    try {
      for (s = s.call(t); !(b = (y = s.next()).done) && (C.push(y.value), !(d && C.length === d)); b = !0)
        ;
    } catch (nn) {
      P = !0, B = nn;
    } finally {
      try {
        !b && s.return != null && s.return();
      } finally {
        if (P)
          throw B;
      }
    }
    return C;
  }
}
function fu(t) {
  if (Array.isArray(t))
    return t;
}
var gu = "file-invalid-type", mu = "file-too-large", vu = "file-too-small", hu = "too-many-files", Su = function(d) {
  d = Array.isArray(d) && d.length === 1 ? d[0] : d;
  var s = Array.isArray(d) ? "one of ".concat(d.join(", ")) : d;
  return {
    code: gu,
    message: "File type must be ".concat(s)
  };
}, Vo = function(d) {
  return {
    code: mu,
    message: "File is larger than ".concat(d, " ").concat(d === 1 ? "byte" : "bytes")
  };
}, Ko = function(d) {
  return {
    code: vu,
    message: "File is smaller than ".concat(d, " ").concat(d === 1 ? "byte" : "bytes")
  };
}, wu = {
  code: hu,
  message: "Too many files"
};
function Ca(t, d) {
  var s = t.type === "application/x-moz-file" || yu(t, d);
  return [s, s ? null : Su(d)];
}
function da(t, d, s) {
  if (Le(t.size))
    if (Le(d) && Le(s)) {
      if (t.size > s)
        return [!1, Vo(s)];
      if (t.size < d)
        return [!1, Ko(d)];
    } else {
      if (Le(d) && t.size < d)
        return [!1, Ko(d)];
      if (Le(s) && t.size > s)
        return [!1, Vo(s)];
    }
  return [!0, null];
}
function Le(t) {
  return t != null;
}
function Mu(t) {
  var d = t.files, s = t.accept, C = t.minSize, b = t.maxSize, P = t.multiple, y = t.maxFiles;
  return !P && d.length > 1 || P && y >= 1 && d.length > y ? !1 : d.every(function(B) {
    var nn = Ca(B, s), h = xo(nn, 1), pn = h[0], M = da(B, C, b), un = xo(M, 1), Nn = un[0];
    return pn && Nn;
  });
}
function Tt(t) {
  return typeof t.isPropagationStopped == "function" ? t.isPropagationStopped() : typeof t.cancelBubble < "u" ? t.cancelBubble : !1;
}
function Mt(t) {
  return t.dataTransfer ? Array.prototype.some.call(t.dataTransfer.types, function(d) {
    return d === "Files" || d === "application/x-moz-file";
  }) : !!t.target && !!t.target.files;
}
function qo(t) {
  t.preventDefault();
}
function bu(t) {
  return t.indexOf("MSIE") !== -1 || t.indexOf("Trident/") !== -1;
}
function Au(t) {
  return t.indexOf("Edge/") !== -1;
}
function Du() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return bu(t) || Au(t);
}
function Er() {
  for (var t = arguments.length, d = new Array(t), s = 0; s < t; s++)
    d[s] = arguments[s];
  return function(C) {
    for (var b = arguments.length, P = new Array(b > 1 ? b - 1 : 0), y = 1; y < b; y++)
      P[y - 1] = arguments[y];
    return d.some(function(B) {
      return !Tt(C) && B && B.apply(void 0, [C].concat(P)), Tt(C);
    });
  };
}
function zo() {
  return "showOpenFilePicker" in window;
}
function Ru(t) {
  return t = typeof t == "string" ? t.split(",") : t, [{
    description: "everything",
    // TODO: Need to handle filtering more elegantly than this!
    accept: Array.isArray(t) ? t.filter(function(d) {
      return d === "audio/*" || d === "video/*" || d === "image/*" || d === "text/*" || /\w+\/[-+.\w]+/g.test(d);
    }).reduce(function(d, s) {
      return Wo(Wo({}, d), {}, ya({}, s, []));
    }, {}) : {}
  }];
}
var Nu = ["children"], Tu = ["open"], Pu = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Iu = ["refKey", "onChange", "onClick"];
function Lu(t) {
  return Ou(t) || Eu(t) || pa(t) || ku();
}
function ku() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Eu(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Ou(t) {
  if (Array.isArray(t))
    return vo(t);
}
function po(t, d) {
  return Hu(t) || Fu(t, d) || pa(t, d) || Bu();
}
function Bu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pa(t, d) {
  if (t) {
    if (typeof t == "string")
      return vo(t, d);
    var s = Object.prototype.toString.call(t).slice(8, -1);
    if (s === "Object" && t.constructor && (s = t.constructor.name), s === "Map" || s === "Set")
      return Array.from(t);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return vo(t, d);
  }
}
function vo(t, d) {
  (d == null || d > t.length) && (d = t.length);
  for (var s = 0, C = new Array(d); s < d; s++)
    C[s] = t[s];
  return C;
}
function Fu(t, d) {
  var s = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (s != null) {
    var C = [], b = !0, P = !1, y, B;
    try {
      for (s = s.call(t); !(b = (y = s.next()).done) && (C.push(y.value), !(d && C.length === d)); b = !0)
        ;
    } catch (nn) {
      P = !0, B = nn;
    } finally {
      try {
        !b && s.return != null && s.return();
      } finally {
        if (P)
          throw B;
      }
    }
    return C;
  }
}
function Hu(t) {
  if (Array.isArray(t))
    return t;
}
function _o(t, d) {
  var s = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var C = Object.getOwnPropertySymbols(t);
    d && (C = C.filter(function(b) {
      return Object.getOwnPropertyDescriptor(t, b).enumerable;
    })), s.push.apply(s, C);
  }
  return s;
}
function nr(t) {
  for (var d = 1; d < arguments.length; d++) {
    var s = arguments[d] != null ? arguments[d] : {};
    d % 2 ? _o(Object(s), !0).forEach(function(C) {
      ho(t, C, s[C]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : _o(Object(s)).forEach(function(C) {
      Object.defineProperty(t, C, Object.getOwnPropertyDescriptor(s, C));
    });
  }
  return t;
}
function ho(t, d, s) {
  return d in t ? Object.defineProperty(t, d, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : t[d] = s, t;
}
function Pt(t, d) {
  if (t == null)
    return {};
  var s = Wu(t, d), C, b;
  if (Object.getOwnPropertySymbols) {
    var P = Object.getOwnPropertySymbols(t);
    for (b = 0; b < P.length; b++)
      C = P[b], !(d.indexOf(C) >= 0) && Object.prototype.propertyIsEnumerable.call(t, C) && (s[C] = t[C]);
  }
  return s;
}
function Wu(t, d) {
  if (t == null)
    return {};
  var s = {}, C = Object.keys(t), b, P;
  for (P = 0; P < C.length; P++)
    b = C[P], !(d.indexOf(b) >= 0) && (s[b] = t[b]);
  return s;
}
var Ao = /* @__PURE__ */ A.forwardRef(function(t, d) {
  var s = t.children, C = Pt(t, Nu), b = wo(C), P = b.open, y = Pt(b, Tu);
  return A.useImperativeHandle(d, function() {
    return {
      open: P
    };
  }, [P]), /* @__PURE__ */ g.createElement(A.Fragment, null, s(nr(nr({}, y), {}, {
    open: P
  })));
});
Ao.displayName = "Dropzone";
var fa = {
  disabled: !1,
  getFilesFromEvent: eu,
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
Ao.defaultProps = fa;
Ao.propTypes = {
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
  children: Zn.func,
  /**
   * Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: Zn.oneOfType([Zn.string, Zn.arrayOf(Zn.string)]),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: Zn.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: Zn.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: Zn.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: Zn.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: Zn.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: Zn.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: Zn.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: Zn.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: Zn.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: Zn.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: Zn.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: Zn.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: Zn.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: Zn.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: Zn.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: Zn.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: Zn.func,
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
  onDrop: Zn.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: Zn.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: Zn.func,
  /**
   * Custom validation function
   * @param {File} file
   * @returns {FileError|FileError[]}
   */
  validator: Zn.func
};
var So = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function wo() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = nr(nr({}, fa), t), s = d.accept, C = d.disabled, b = d.getFilesFromEvent, P = d.maxSize, y = d.minSize, B = d.multiple, nn = d.maxFiles, h = d.onDragEnter, pn = d.onDragLeave, M = d.onDragOver, un = d.onDrop, Nn = d.onDropAccepted, Cn = d.onDropRejected, fn = d.onFileDialogCancel, qn = d.onFileDialogOpen, hn = d.useFsAccessApi, Hn = d.preventDropOnDocument, An = d.noClick, Un = d.noKeyboard, Wn = d.noDrag, Dn = d.noDragEventsBubbling, tr = d.validator, Kn = A.useMemo(function() {
    return typeof qn == "function" ? qn : Xo;
  }, [qn]), Cr = A.useMemo(function() {
    return typeof fn == "function" ? fn : Xo;
  }, [fn]), Qn = A.useRef(null), en = A.useRef(null), dn = A.useReducer(xu, So), zn = po(dn, 2), Xn = zn[0], Jn = zn[1], Pr = Xn.isFocused, Rr = Xn.isFileDialogActive, Mr = Xn.draggedFiles, Ir = function() {
    Rr && setTimeout(function() {
      if (en.current) {
        var In = en.current.files;
        In.length || (Jn({
          type: "closeDialog"
        }), Cr());
      }
    }, 300);
  };
  A.useEffect(function() {
    return hn && zo() ? function() {
    } : (window.addEventListener("focus", Ir, !1), function() {
      window.removeEventListener("focus", Ir, !1);
    });
  }, [en, Rr, Cr, hn]);
  var dr = A.useRef([]), gr = function(In) {
    Qn.current && Qn.current.contains(In.target) || (In.preventDefault(), dr.current = []);
  };
  A.useEffect(function() {
    return Hn && (document.addEventListener("dragover", qo, !1), document.addEventListener("drop", gr, !1)), function() {
      Hn && (document.removeEventListener("dragover", qo), document.removeEventListener("drop", gr));
    };
  }, [Qn, Hn]);
  var or = A.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Lr(Q), dr.current = [].concat(Lu(dr.current), [Q.target]), Mt(Q) && Promise.resolve(b(Q)).then(function(In) {
      Tt(Q) && !Dn || (Jn({
        draggedFiles: In,
        isDragActive: !0,
        type: "setDraggedFiles"
      }), h && h(Q));
    });
  }, [b, h, Dn]), Or = A.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Lr(Q);
    var In = Mt(Q);
    if (In && Q.dataTransfer)
      try {
        Q.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return In && M && M(Q), !1;
  }, [M, Dn]), Br = A.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Lr(Q);
    var In = dr.current.filter(function(ur) {
      return Qn.current && Qn.current.contains(ur);
    }), rr = In.indexOf(Q.target);
    rr !== -1 && In.splice(rr, 1), dr.current = In, !(In.length > 0) && (Jn({
      isDragActive: !1,
      type: "setDraggedFiles",
      draggedFiles: []
    }), Mt(Q) && pn && pn(Q));
  }, [Qn, pn, Dn]), F = A.useCallback(function(Q, In) {
    var rr = [], ur = [];
    Q.forEach(function(fr) {
      var Fr = Ca(fr, s), Tr = po(Fr, 2), Yr = Tr[0], jr = Tr[1], Ur = da(fr, y, P), Wr = po(Ur, 2), Jr = Wr[0], xr = Wr[1], Gr = tr ? tr(fr) : null;
      if (Yr && Jr && !Gr)
        rr.push(fr);
      else {
        var Hr = [jr, xr];
        Gr && (Hr = Hr.concat(Gr)), ur.push({
          file: fr,
          errors: Hr.filter(function(oe) {
            return oe;
          })
        });
      }
    }), (!B && rr.length > 1 || B && nn >= 1 && rr.length > nn) && (rr.forEach(function(fr) {
      ur.push({
        file: fr,
        errors: [wu]
      });
    }), rr.splice(0)), Jn({
      acceptedFiles: rr,
      fileRejections: ur,
      type: "setFiles"
    }), un && un(rr, ur, In), ur.length > 0 && Cn && Cn(ur, In), rr.length > 0 && Nn && Nn(rr, In);
  }, [Jn, B, s, y, P, nn, un, Nn, Cn, tr]), z = A.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Lr(Q), dr.current = [], Mt(Q) && Promise.resolve(b(Q)).then(function(In) {
      Tt(Q) && !Dn || F(In, Q);
    }), Jn({
      type: "reset"
    });
  }, [b, F, Dn]), an = A.useCallback(function() {
    if (hn && zo()) {
      Jn({
        type: "openDialog"
      }), Kn();
      var Q = {
        multiple: B,
        types: Ru(s)
      };
      window.showOpenFilePicker(Q).then(function(In) {
        return b(In);
      }).then(function(In) {
        return F(In, null);
      }).catch(function(In) {
        return Cr(In);
      }).finally(function() {
        return Jn({
          type: "closeDialog"
        });
      });
      return;
    }
    en.current && (Jn({
      type: "openDialog"
    }), Kn(), en.current.value = null, en.current.click());
  }, [Jn, Kn, Cr, hn, F, s, B]), tn = A.useCallback(function(Q) {
    !Qn.current || !Qn.current.isEqualNode(Q.target) || (Q.keyCode === 32 || Q.keyCode === 13) && (Q.preventDefault(), an());
  }, [Qn, en, an]), Fn = A.useCallback(function() {
    Jn({
      type: "focus"
    });
  }, []), Yn = A.useCallback(function() {
    Jn({
      type: "blur"
    });
  }, []), Sr = A.useCallback(function() {
    An || (Du() ? setTimeout(an, 0) : an());
  }, [en, An, an]), Nr = function(In) {
    return C ? null : In;
  }, br = function(In) {
    return Un ? null : Nr(In);
  }, Ar = function(In) {
    return Wn ? null : Nr(In);
  }, Lr = function(In) {
    Dn && In.stopPropagation();
  }, _r = A.useMemo(function() {
    return function() {
      var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, In = Q.refKey, rr = In === void 0 ? "ref" : In, ur = Q.role, fr = Q.onKeyDown, Fr = Q.onFocus, Tr = Q.onBlur, Yr = Q.onClick, jr = Q.onDragEnter, Ur = Q.onDragOver, Wr = Q.onDragLeave, Jr = Q.onDrop, xr = Pt(Q, Pu);
      return nr(nr(ho({
        onKeyDown: br(Er(fr, tn)),
        onFocus: br(Er(Fr, Fn)),
        onBlur: br(Er(Tr, Yn)),
        onClick: Nr(Er(Yr, Sr)),
        onDragEnter: Ar(Er(jr, or)),
        onDragOver: Ar(Er(Ur, Or)),
        onDragLeave: Ar(Er(Wr, Br)),
        onDrop: Ar(Er(Jr, z)),
        role: typeof ur == "string" && ur !== "" ? ur : "button"
      }, rr, Qn), !C && !Un ? {
        tabIndex: 0
      } : {}), xr);
    };
  }, [Qn, tn, Fn, Yn, Sr, or, Or, Br, z, Un, Wn, C]), pr = A.useCallback(function(Q) {
    Q.stopPropagation();
  }, []), cr = A.useMemo(function() {
    return function() {
      var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, In = Q.refKey, rr = In === void 0 ? "ref" : In, ur = Q.onChange, fr = Q.onClick, Fr = Pt(Q, Iu), Tr = ho({
        accept: s,
        multiple: B,
        type: "file",
        style: {
          display: "none"
        },
        onChange: Nr(Er(ur, z)),
        onClick: Nr(Er(fr, pr)),
        autoComplete: "off",
        tabIndex: -1
      }, rr, en);
      return nr(nr({}, Tr), Fr);
    };
  }, [en, s, B, z, C]), mr = Mr.length, vr = mr > 0 && Mu({
    files: Mr,
    accept: s,
    minSize: y,
    maxSize: P,
    multiple: B,
    maxFiles: nn
  }), Xr = mr > 0 && !vr;
  return nr(nr({}, Xn), {}, {
    isDragAccept: vr,
    isDragReject: Xr,
    isFocused: Pr && !C,
    getRootProps: _r,
    getInputProps: cr,
    rootRef: Qn,
    inputRef: en,
    open: Nr(an)
  });
}
function xu(t, d) {
  switch (d.type) {
    case "focus":
      return nr(nr({}, t), {}, {
        isFocused: !0
      });
    case "blur":
      return nr(nr({}, t), {}, {
        isFocused: !1
      });
    case "openDialog":
      return nr(nr({}, So), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return nr(nr({}, t), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      var s = d.isDragActive, C = d.draggedFiles;
      return nr(nr({}, t), {}, {
        draggedFiles: C,
        isDragActive: s
      });
    case "setFiles":
      return nr(nr({}, t), {}, {
        acceptedFiles: d.acceptedFiles,
        fileRejections: d.fileRejections
      });
    case "reset":
      return nr({}, So);
    default:
      return t;
  }
}
function Xo() {
}
const ke = ({ children: t, className: d = "" }) => /* @__PURE__ */ g.createElement("div", { className: `tab-content ${d}` }, t), Gu = (t) => {
  const { globalActive: d } = A.useContext(ce), s = A.useContext(Ee), C = (b) => {
    s({ type: "EDITOR_SET_GLOBALACTIVE", payload: b });
  };
  return /* @__PURE__ */ g.createElement(ga, { ...t, setActiveTab: C, activeTab: d });
}, Vu = ({ children: t, className: d = void 0, startingTab: s }) => {
  const [C, b] = A.useState(s);
  return /* @__PURE__ */ g.createElement(ga, { className: d, setActiveTab: b, activeTab: C }, t);
}, ga = ({ children: t, className: d, activeTab: s, setActiveTab: C }) => {
  const b = (B, nn) => {
    B || C(nn);
  };
  let P = "tabs";
  d && (P = `tabs ${d}`);
  const y = t.map(({ props: B }, nn) => {
    let h = "nav-item", pn = B.disableRule || !1;
    return pn && (h += " disabled"), nn === s && (h += " active"), /* @__PURE__ */ g.createElement("li", { onClick: () => b(pn, nn), key: B.title, className: h }, B.icon, B.title);
  });
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("nav", { className: P }, /* @__PURE__ */ g.createElement("ul", { className: "nav nav-fill" }, y)), t[s]);
};
var Mo = { exports: {} }, bt = { exports: {} }, Yo;
function Ku() {
  return Yo || (Yo = 1, function(t, d) {
    (function(s, C) {
      C(d, A);
    })(ia, function(s, C) {
      function b(n, a, i, l, v, f, S) {
        try {
          var R = n[f](S), T = R.value;
        } catch (I) {
          return void i(I);
        }
        R.done ? a(T) : Promise.resolve(T).then(l, v);
      }
      function P(n) {
        return function() {
          var a = this, i = arguments;
          return new Promise(function(l, v) {
            var f = n.apply(a, i);
            function S(T) {
              b(f, l, v, S, R, "next", T);
            }
            function R(T) {
              b(f, l, v, S, R, "throw", T);
            }
            S(void 0);
          });
        };
      }
      function y() {
        return (y = Object.assign || function(n) {
          for (var a = 1; a < arguments.length; a++) {
            var i = arguments[a];
            for (var l in i)
              Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
          }
          return n;
        }).apply(this, arguments);
      }
      function B(n, a) {
        if (n == null)
          return {};
        var i, l, v = {}, f = Object.keys(n);
        for (l = 0; l < f.length; l++)
          i = f[l], a.indexOf(i) >= 0 || (v[i] = n[i]);
        return v;
      }
      function nn(n) {
        var a = function(i, l) {
          if (typeof i != "object" || i === null)
            return i;
          var v = i[Symbol.toPrimitive];
          if (v !== void 0) {
            var f = v.call(i, l || "default");
            if (typeof f != "object")
              return f;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (l === "string" ? String : Number)(i);
        }(n, "string");
        return typeof a == "symbol" ? a : String(a);
      }
      C = C && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
      var h = { init: "init" }, pn = function(n) {
        var a = n.value;
        return a === void 0 ? "" : a;
      }, M = function() {
        return C.createElement(C.Fragment, null, " ");
      }, un = { Cell: pn, width: 150, minWidth: 0, maxWidth: Number.MAX_SAFE_INTEGER };
      function Nn() {
        for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        return a.reduce(function(l, v) {
          var f = v.style, S = v.className;
          return l = y({}, l, {}, B(v, ["style", "className"])), f && (l.style = l.style ? y({}, l.style || {}, {}, f || {}) : f), S && (l.className = l.className ? l.className + " " + S : S), l.className === "" && delete l.className, l;
        }, {});
      }
      var Cn = function(n, a) {
        return a === void 0 && (a = {}), function(i) {
          return i === void 0 && (i = {}), [].concat(n, [i]).reduce(function(l, v) {
            return function f(S, R, T) {
              return typeof R == "function" ? f({}, R(S, T)) : Array.isArray(R) ? Nn.apply(void 0, [S].concat(R)) : Nn(S, R);
            }(l, v, y({}, a, { userProps: i }));
          }, {});
        };
      }, fn = function(n, a, i, l) {
        return i === void 0 && (i = {}), n.reduce(function(v, f) {
          return f(v, i);
        }, a);
      }, qn = function(n, a, i) {
        return i === void 0 && (i = {}), n.forEach(function(l) {
          l(a, i);
        });
      };
      function hn(n, a, i, l) {
        n.findIndex(function(v) {
          return v.pluginName === i;
        }), a.forEach(function(v) {
          n.findIndex(function(f) {
            return f.pluginName === v;
          });
        });
      }
      function Hn(n, a) {
        return typeof n == "function" ? n(a) : n;
      }
      function An(n) {
        var a = C.useRef();
        return a.current = n, C.useCallback(function() {
          return a.current;
        }, []);
      }
      var Un = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
      function Wn(n, a) {
        var i = C.useRef(!1);
        Un(function() {
          i.current && n(), i.current = !0;
        }, a);
      }
      function Dn(n, a, i) {
        return i === void 0 && (i = {}), function(l, v) {
          v === void 0 && (v = {});
          var f = typeof l == "string" ? a[l] : l;
          if (f === void 0)
            throw console.info(a), new Error("Renderer Error ☝️");
          return tr(f, y({}, n, { column: a }, i, {}, v));
        };
      }
      function tr(n, a) {
        return function(l) {
          return typeof l == "function" && (v = Object.getPrototypeOf(l)).prototype && v.prototype.isReactComponent;
          var v;
        }(i = n) || typeof i == "function" || function(l) {
          return typeof l == "object" && typeof l.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(l.$$typeof.description);
        }(i) ? C.createElement(n, a) : n;
        var i;
      }
      function Kn(n, a, i) {
        return i === void 0 && (i = 0), n.map(function(l) {
          return Qn(l = y({}, l, { parent: a, depth: i })), l.columns && (l.columns = Kn(l.columns, l, i + 1)), l;
        });
      }
      function Cr(n) {
        return Pr(n, "columns");
      }
      function Qn(n) {
        var a = n.id, i = n.accessor, l = n.Header;
        if (typeof i == "string") {
          a = a || i;
          var v = i.split(".");
          i = function(f) {
            return function(S, R, T) {
              if (!R)
                return S;
              var I, V = typeof R == "function" ? R : JSON.stringify(R), W = zn.get(V) || function() {
                var x = function(k) {
                  return function H(X, U) {
                    if (U === void 0 && (U = []), Array.isArray(X))
                      for (var ln = 0; ln < X.length; ln += 1)
                        H(X[ln], U);
                    else
                      U.push(X);
                    return U;
                  }(k).map(function(H) {
                    return String(H).replace(".", "_");
                  }).join(".").replace(or, ".").replace(Or, "").split(".");
                }(R);
                return zn.set(V, x), x;
              }();
              try {
                I = W.reduce(function(x, k) {
                  return x[k];
                }, S);
              } catch {
              }
              return I !== void 0 ? I : T;
            }(f, v);
          };
        }
        if (!a && typeof l == "string" && l && (a = l), !a && n.columns)
          throw console.error(n), new Error('A column ID (or unique "Header" value) is required!');
        if (!a)
          throw console.error(n), new Error("A column ID (or string accessor) is required!");
        return Object.assign(n, { id: a, accessor: i }), n;
      }
      function en(n, a) {
        if (!a)
          throw new Error();
        return Object.assign(n, y({ Header: M, Footer: M }, un, {}, a, {}, n)), Object.assign(n, { originalWidth: n.width }), n;
      }
      function dn(n, a, i) {
        i === void 0 && (i = function() {
          return {};
        });
        for (var l = [], v = n, f = 0, S = function() {
          return f++;
        }, R = function() {
          var T = { headers: [] }, I = [], V = v.some(function(W) {
            return W.parent;
          });
          v.forEach(function(W) {
            var x, k = [].concat(I).reverse()[0];
            V && (W.parent ? x = y({}, W.parent, { originalId: W.parent.id, id: W.parent.id + "_" + S(), headers: [W] }, i(W)) : x = en(y({ originalId: W.id + "_placeholder", id: W.id + "_placeholder_" + S(), placeholderOf: W, headers: [W] }, i(W)), a), k && k.originalId === x.originalId ? k.headers.push(W) : I.push(x)), T.headers.push(W);
          }), l.push(T), v = I;
        }; v.length; )
          R();
        return l.reverse();
      }
      var zn = /* @__PURE__ */ new Map();
      function Xn() {
        for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        for (var l = 0; l < a.length; l += 1)
          if (a[l] !== void 0)
            return a[l];
      }
      function Jn(n) {
        if (typeof n == "function")
          return n;
      }
      function Pr(n, a) {
        var i = [];
        return function l(v) {
          v.forEach(function(f) {
            f[a] ? l(f[a]) : i.push(f);
          });
        }(n), i;
      }
      function Rr(n, a) {
        var i = a.manualExpandedKey, l = a.expanded, v = a.expandSubRows, f = v === void 0 || v, S = [];
        return n.forEach(function(R) {
          return function T(I, V) {
            V === void 0 && (V = !0), I.isExpanded = I.original && I.original[i] || l[I.id], I.canExpand = I.subRows && !!I.subRows.length, V && S.push(I), I.subRows && I.subRows.length && I.isExpanded && I.subRows.forEach(function(W) {
              return T(W, f);
            });
          }(R);
        }), S;
      }
      function Mr(n, a, i) {
        return Jn(n) || a[n] || i[n] || i.text;
      }
      function Ir(n, a, i) {
        return n ? n(a, i) : a === void 0;
      }
      function dr() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var gr = null, or = /\[/g, Or = /\]/g, Br = function(n) {
        return y({ role: "table" }, n);
      }, F = function(n) {
        return y({ role: "rowgroup" }, n);
      }, z = function(n, a) {
        var i = a.column;
        return y({ key: "header_" + i.id, colSpan: i.totalVisibleHeaderCount, role: "columnheader" }, n);
      }, an = function(n, a) {
        var i = a.column;
        return y({ key: "footer_" + i.id, colSpan: i.totalVisibleHeaderCount }, n);
      }, tn = function(n, a) {
        return y({ key: "headerGroup_" + a.index, role: "row" }, n);
      }, Fn = function(n, a) {
        return y({ key: "footerGroup_" + a.index }, n);
      }, Yn = function(n, a) {
        return y({ key: "row_" + a.row.id, role: "row" }, n);
      }, Sr = function(n, a) {
        var i = a.cell;
        return y({ key: "cell_" + i.row.id + "_" + i.column.id, role: "cell" }, n);
      };
      function Nr() {
        return { useOptions: [], stateReducers: [], useControlledState: [], columns: [], columnsDeps: [], allColumns: [], allColumnsDeps: [], accessValue: [], materializedColumns: [], materializedColumnsDeps: [], useInstanceAfterData: [], visibleColumns: [], visibleColumnsDeps: [], headerGroups: [], headerGroupsDeps: [], useInstanceBeforeDimensions: [], useInstance: [], prepareRow: [], getTableProps: [Br], getTableBodyProps: [F], getHeaderGroupProps: [tn], getFooterGroupProps: [Fn], getHeaderProps: [z], getFooterProps: [an], getRowProps: [Yn], getCellProps: [Sr], useFinalInstance: [] };
      }
      h.resetHiddenColumns = "resetHiddenColumns", h.toggleHideColumn = "toggleHideColumn", h.setHiddenColumns = "setHiddenColumns", h.toggleHideAllColumns = "toggleHideAllColumns";
      var br = function(n) {
        n.getToggleHiddenProps = [Ar], n.getToggleHideAllColumnsProps = [Lr], n.stateReducers.push(_r), n.useInstanceBeforeDimensions.push(pr), n.headerGroupsDeps.push(function(a, i) {
          var l = i.instance;
          return [].concat(a, [l.state.hiddenColumns]);
        }), n.useInstance.push(cr);
      };
      br.pluginName = "useColumnVisibility";
      var Ar = function(n, a) {
        var i = a.column;
        return [n, { onChange: function(l) {
          i.toggleHidden(!l.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isVisible, title: "Toggle Column Visible" }];
      }, Lr = function(n, a) {
        var i = a.instance;
        return [n, { onChange: function(l) {
          i.toggleHideAllColumns(!l.target.checked);
        }, style: { cursor: "pointer" }, checked: !i.allColumnsHidden && !i.state.hiddenColumns.length, title: "Toggle All Columns Hidden", indeterminate: !i.allColumnsHidden && i.state.hiddenColumns.length }];
      };
      function _r(n, a, i, l) {
        if (a.type === h.init)
          return y({ hiddenColumns: [] }, n);
        if (a.type === h.resetHiddenColumns)
          return y({}, n, { hiddenColumns: l.initialState.hiddenColumns || [] });
        if (a.type === h.toggleHideColumn) {
          var v = (a.value !== void 0 ? a.value : !n.hiddenColumns.includes(a.columnId)) ? [].concat(n.hiddenColumns, [a.columnId]) : n.hiddenColumns.filter(function(f) {
            return f !== a.columnId;
          });
          return y({}, n, { hiddenColumns: v });
        }
        return a.type === h.setHiddenColumns ? y({}, n, { hiddenColumns: Hn(a.value, n.hiddenColumns) }) : a.type === h.toggleHideAllColumns ? y({}, n, { hiddenColumns: (a.value !== void 0 ? a.value : !n.hiddenColumns.length) ? l.allColumns.map(function(f) {
          return f.id;
        }) : [] }) : void 0;
      }
      function pr(n) {
        var a = n.headers, i = n.state.hiddenColumns;
        C.useRef(!1).current;
        var l = 0;
        a.forEach(function(v) {
          return l += function f(S, R) {
            S.isVisible = R && !i.includes(S.id);
            var T = 0;
            return S.headers && S.headers.length ? S.headers.forEach(function(I) {
              return T += f(I, S.isVisible);
            }) : T = S.isVisible ? 1 : 0, S.totalVisibleHeaderCount = T, T;
          }(v, !0);
        });
      }
      function cr(n) {
        var a = n.columns, i = n.flatHeaders, l = n.dispatch, v = n.allColumns, f = n.getHooks, S = n.state.hiddenColumns, R = n.autoResetHiddenColumns, T = R === void 0 || R, I = An(n), V = v.length === S.length, W = C.useCallback(function(U, ln) {
          return l({ type: h.toggleHideColumn, columnId: U, value: ln });
        }, [l]), x = C.useCallback(function(U) {
          return l({ type: h.setHiddenColumns, value: U });
        }, [l]), k = C.useCallback(function(U) {
          return l({ type: h.toggleHideAllColumns, value: U });
        }, [l]), H = Cn(f().getToggleHideAllColumnsProps, { instance: I() });
        i.forEach(function(U) {
          U.toggleHidden = function(ln) {
            l({ type: h.toggleHideColumn, columnId: U.id, value: ln });
          }, U.getToggleHiddenProps = Cn(f().getToggleHiddenProps, { instance: I(), column: U });
        });
        var X = An(T);
        Wn(function() {
          X() && l({ type: h.resetHiddenColumns });
        }, [l, a]), Object.assign(n, { allColumnsHidden: V, toggleHideColumn: W, setHiddenColumns: x, toggleHideAllColumns: k, getToggleHideAllColumnsProps: H });
      }
      var mr = {}, vr = {}, Xr = function(n, a, i) {
        return n;
      }, Q = function(n, a) {
        return n.subRows || [];
      }, In = function(n, a, i) {
        return "" + (i ? [i.id, a].join(".") : a);
      }, rr = function(n) {
        return n;
      };
      function ur(n) {
        var a = n.initialState, i = a === void 0 ? mr : a, l = n.defaultColumn, v = l === void 0 ? vr : l, f = n.getSubRows, S = f === void 0 ? Q : f, R = n.getRowId, T = R === void 0 ? In : R, I = n.stateReducer, V = I === void 0 ? Xr : I, W = n.useControlledState, x = W === void 0 ? rr : W;
        return y({}, B(n, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]), { initialState: i, defaultColumn: v, getSubRows: S, getRowId: T, stateReducer: V, useControlledState: x });
      }
      function fr(n, a) {
        a === void 0 && (a = 0);
        var i = 0, l = 0, v = 0, f = 0;
        return n.forEach(function(S) {
          var R = S.headers;
          if (S.totalLeft = a, R && R.length) {
            var T = fr(R, a), I = T[0], V = T[1], W = T[2], x = T[3];
            S.totalMinWidth = I, S.totalWidth = V, S.totalMaxWidth = W, S.totalFlexWidth = x;
          } else
            S.totalMinWidth = S.minWidth, S.totalWidth = Math.min(Math.max(S.minWidth, S.width), S.maxWidth), S.totalMaxWidth = S.maxWidth, S.totalFlexWidth = S.canResize ? S.totalWidth : 0;
          S.isVisible && (a += S.totalWidth, i += S.totalMinWidth, l += S.totalWidth, v += S.totalMaxWidth, f += S.totalFlexWidth);
        }), [i, l, v, f];
      }
      function Fr(n) {
        var a = n.data, i = n.rows, l = n.flatRows, v = n.rowsById, f = n.column, S = n.getRowId, R = n.getSubRows, T = n.accessValueHooks, I = n.getInstance;
        a.forEach(function(V, W) {
          return function x(k, H, X, U, ln) {
            X === void 0 && (X = 0);
            var Ln = k, sn = S(k, H, U), K = v[sn];
            if (K)
              K.subRows && K.originalSubRows.forEach(function(rn, Mn) {
                return x(rn, Mn, X + 1, K);
              });
            else if ((K = { id: sn, original: Ln, index: H, depth: X, cells: [{}] }).cells.map = dr, K.cells.filter = dr, K.cells.forEach = dr, K.cells[0].getCellProps = dr, K.values = {}, ln.push(K), l.push(K), v[sn] = K, K.originalSubRows = R(k, H), K.originalSubRows) {
              var Tn = [];
              K.originalSubRows.forEach(function(rn, Mn) {
                return x(rn, Mn, X + 1, K, Tn);
              }), K.subRows = Tn;
            }
            f.accessor && (K.values[f.id] = f.accessor(k, H, K, ln, a)), K.values[f.id] = fn(T, K.values[f.id], { row: K, column: f, instance: I() });
          }(V, W, 0, void 0, i);
        });
      }
      h.resetExpanded = "resetExpanded", h.toggleRowExpanded = "toggleRowExpanded", h.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var Tr = function(n) {
        n.getToggleAllRowsExpandedProps = [Yr], n.getToggleRowExpandedProps = [jr], n.stateReducers.push(Ur), n.useInstance.push(Wr), n.prepareRow.push(Jr);
      };
      Tr.pluginName = "useExpanded";
      var Yr = function(n, a) {
        var i = a.instance;
        return [n, { onClick: function(l) {
          i.toggleAllRowsExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle All Rows Expanded" }];
      }, jr = function(n, a) {
        var i = a.row;
        return [n, { onClick: function() {
          i.toggleRowExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle Row Expanded" }];
      };
      function Ur(n, a, i, l) {
        if (a.type === h.init)
          return y({ expanded: {} }, n);
        if (a.type === h.resetExpanded)
          return y({}, n, { expanded: l.initialState.expanded || {} });
        if (a.type === h.toggleAllRowsExpanded) {
          var v = a.value, f = l.rowsById, S = Object.keys(f).length === Object.keys(n.expanded).length;
          if (v !== void 0 ? v : !S) {
            var R = {};
            return Object.keys(f).forEach(function(H) {
              R[H] = !0;
            }), y({}, n, { expanded: R });
          }
          return y({}, n, { expanded: {} });
        }
        if (a.type === h.toggleRowExpanded) {
          var T, I = a.id, V = a.value, W = n.expanded[I], x = V !== void 0 ? V : !W;
          if (!W && x)
            return y({}, n, { expanded: y({}, n.expanded, (T = {}, T[I] = !0, T)) });
          if (W && !x) {
            var k = n.expanded;
            return k[I], y({}, n, { expanded: B(k, [I].map(nn)) });
          }
          return n;
        }
      }
      function Wr(n) {
        var a = n.data, i = n.rows, l = n.rowsById, v = n.manualExpandedKey, f = v === void 0 ? "expanded" : v, S = n.paginateExpandedRows, R = S === void 0 || S, T = n.expandSubRows, I = T === void 0 || T, V = n.autoResetExpanded, W = V === void 0 || V, x = n.getHooks, k = n.plugins, H = n.state.expanded, X = n.dispatch;
        hn(k, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var U = An(W), ln = !!(Object.keys(l).length && Object.keys(H).length);
        ln && Object.keys(l).some(function(xn) {
          return !H[xn];
        }) && (ln = !1), Wn(function() {
          U() && X({ type: h.resetExpanded });
        }, [X, a]);
        var Ln = C.useCallback(function(xn, gn) {
          X({ type: h.toggleRowExpanded, id: xn, value: gn });
        }, [X]), sn = C.useCallback(function(xn) {
          return X({ type: h.toggleAllRowsExpanded, value: xn });
        }, [X]), K = C.useMemo(function() {
          return R ? Rr(i, { manualExpandedKey: f, expanded: H, expandSubRows: I }) : i;
        }, [R, i, f, H, I]), Tn = C.useMemo(function() {
          return function(xn) {
            var gn = 0;
            return Object.keys(xn).forEach(function(Sn) {
              var Vn = Sn.split(".");
              gn = Math.max(gn, Vn.length);
            }), gn;
          }(H);
        }, [H]), rn = An(n), Mn = Cn(x().getToggleAllRowsExpandedProps, { instance: rn() });
        Object.assign(n, { preExpandedRows: i, expandedRows: K, rows: K, expandedDepth: Tn, isAllRowsExpanded: ln, toggleRowExpanded: Ln, toggleAllRowsExpanded: sn, getToggleAllRowsExpandedProps: Mn });
      }
      function Jr(n, a) {
        var i = a.instance.getHooks, l = a.instance;
        n.toggleRowExpanded = function(v) {
          return l.toggleRowExpanded(n.id, v);
        }, n.getToggleRowExpandedProps = Cn(i().getToggleRowExpandedProps, { instance: l, row: n });
      }
      var xr = function(n, a, i) {
        return n = n.filter(function(l) {
          return a.some(function(v) {
            var f = l.values[v];
            return String(f).toLowerCase().includes(String(i).toLowerCase());
          });
        });
      };
      xr.autoRemove = function(n) {
        return !n;
      };
      var Gr = function(n, a, i) {
        return n.filter(function(l) {
          return a.some(function(v) {
            var f = l.values[v];
            return f === void 0 || String(f).toLowerCase() === String(i).toLowerCase();
          });
        });
      };
      Gr.autoRemove = function(n) {
        return !n;
      };
      var Hr = function(n, a, i) {
        return n.filter(function(l) {
          return a.some(function(v) {
            var f = l.values[v];
            return f === void 0 || String(f) === String(i);
          });
        });
      };
      Hr.autoRemove = function(n) {
        return !n;
      };
      var oe = function(n, a, i) {
        return n.filter(function(l) {
          return a.some(function(v) {
            return l.values[v].includes(i);
          });
        });
      };
      oe.autoRemove = function(n) {
        return !n || !n.length;
      };
      var de = function(n, a, i) {
        return n.filter(function(l) {
          return a.some(function(v) {
            var f = l.values[v];
            return f && f.length && i.every(function(S) {
              return f.includes(S);
            });
          });
        });
      };
      de.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Be = function(n, a, i) {
        return n.filter(function(l) {
          return a.some(function(v) {
            var f = l.values[v];
            return f && f.length && i.some(function(S) {
              return f.includes(S);
            });
          });
        });
      };
      Be.autoRemove = function(n) {
        return !n || !n.length;
      };
      var pe = function(n, a, i) {
        return n.filter(function(l) {
          return a.some(function(v) {
            var f = l.values[v];
            return i.includes(f);
          });
        });
      };
      pe.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Fe = function(n, a, i) {
        return n.filter(function(l) {
          return a.some(function(v) {
            return l.values[v] === i;
          });
        });
      };
      Fe.autoRemove = function(n) {
        return n === void 0;
      };
      var He = function(n, a, i) {
        return n.filter(function(l) {
          return a.some(function(v) {
            return l.values[v] == i;
          });
        });
      };
      He.autoRemove = function(n) {
        return n == null;
      };
      var We = function(n, a, i) {
        var l = i || [], v = l[0], f = l[1];
        if ((v = typeof v == "number" ? v : -1 / 0) > (f = typeof f == "number" ? f : 1 / 0)) {
          var S = v;
          v = f, f = S;
        }
        return n.filter(function(R) {
          return a.some(function(T) {
            var I = R.values[T];
            return I >= v && I <= f;
          });
        });
      };
      We.autoRemove = function(n) {
        return !n || typeof n[0] != "number" && typeof n[1] != "number";
      };
      var $r = Object.freeze({ __proto__: null, text: xr, exactText: Gr, exactTextCase: Hr, includes: oe, includesAll: de, includesSome: Be, includesValue: pe, exact: Fe, equals: He, between: We });
      h.resetFilters = "resetFilters", h.setFilter = "setFilter", h.setAllFilters = "setAllFilters";
      var xe = function(n) {
        n.stateReducers.push(Lt), n.useInstance.push(Ge);
      };
      function Lt(n, a, i, l) {
        if (a.type === h.init)
          return y({ filters: [] }, n);
        if (a.type === h.resetFilters)
          return y({}, n, { filters: l.initialState.filters || [] });
        if (a.type === h.setFilter) {
          var v = a.columnId, f = a.filterValue, S = l.allColumns, R = l.filterTypes, T = S.find(function(X) {
            return X.id === v;
          });
          if (!T)
            throw new Error("React-Table: Could not find a column with id: " + v);
          var I = Mr(T.filter, R || {}, $r), V = n.filters.find(function(X) {
            return X.id === v;
          }), W = Hn(f, V && V.value);
          return Ir(I.autoRemove, W, T) ? y({}, n, { filters: n.filters.filter(function(X) {
            return X.id !== v;
          }) }) : y({}, n, V ? { filters: n.filters.map(function(X) {
            return X.id === v ? { id: v, value: W } : X;
          }) } : { filters: [].concat(n.filters, [{ id: v, value: W }]) });
        }
        if (a.type === h.setAllFilters) {
          var x = a.filters, k = l.allColumns, H = l.filterTypes;
          return y({}, n, { filters: Hn(x, n.filters).filter(function(X) {
            var U = k.find(function(ln) {
              return ln.id === X.id;
            });
            return !Ir(Mr(U.filter, H || {}, $r).autoRemove, X.value, U);
          }) });
        }
      }
      function Ge(n) {
        var a = n.data, i = n.rows, l = n.flatRows, v = n.rowsById, f = n.allColumns, S = n.filterTypes, R = n.manualFilters, T = n.defaultCanFilter, I = T !== void 0 && T, V = n.disableFilters, W = n.state.filters, x = n.dispatch, k = n.autoResetFilters, H = k === void 0 || k, X = C.useCallback(function(rn, Mn) {
          x({ type: h.setFilter, columnId: rn, filterValue: Mn });
        }, [x]), U = C.useCallback(function(rn) {
          x({ type: h.setAllFilters, filters: rn });
        }, [x]);
        f.forEach(function(rn) {
          var Mn = rn.id, xn = rn.accessor, gn = rn.defaultCanFilter, Sn = rn.disableFilters;
          rn.canFilter = xn ? Xn(Sn !== !0 && void 0, V !== !0 && void 0, !0) : Xn(gn, I, !1), rn.setFilter = function(Rn) {
            return X(rn.id, Rn);
          };
          var Vn = W.find(function(Rn) {
            return Rn.id === Mn;
          });
          rn.filterValue = Vn && Vn.value;
        });
        var ln = C.useMemo(function() {
          if (R || !W.length)
            return [i, l, v];
          var rn = [], Mn = {};
          return [function xn(gn, Sn) {
            Sn === void 0 && (Sn = 0);
            var Vn = gn;
            return (Vn = W.reduce(function(Rn, Gn) {
              var r = Gn.id, e = Gn.value, u = f.find(function(p) {
                return p.id === r;
              });
              if (!u)
                return Rn;
              Sn === 0 && (u.preFilteredRows = Rn);
              var o = Mr(u.filter, S || {}, $r);
              return o ? (u.filteredRows = o(Rn, [r], e), u.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + u.id + "."), Rn);
            }, gn)).forEach(function(Rn) {
              rn.push(Rn), Mn[Rn.id] = Rn, Rn.subRows && (Rn.subRows = Rn.subRows && Rn.subRows.length > 0 ? xn(Rn.subRows, Sn + 1) : Rn.subRows);
            }), Vn;
          }(i), rn, Mn];
        }, [R, W, i, l, v, f, S]), Ln = ln[0], sn = ln[1], K = ln[2];
        C.useMemo(function() {
          f.filter(function(rn) {
            return !W.find(function(Mn) {
              return Mn.id === rn.id;
            });
          }).forEach(function(rn) {
            rn.preFilteredRows = Ln, rn.filteredRows = Ln;
          });
        }, [Ln, W, f]);
        var Tn = An(H);
        Wn(function() {
          Tn() && x({ type: h.resetFilters });
        }, [x, R ? null : a]), Object.assign(n, { preFilteredRows: i, preFilteredFlatRows: l, preFilteredRowsById: v, filteredRows: Ln, filteredFlatRows: sn, filteredRowsById: K, rows: Ln, flatRows: sn, rowsById: K, setFilter: X, setAllFilters: U });
      }
      xe.pluginName = "useFilters", h.resetGlobalFilter = "resetGlobalFilter", h.setGlobalFilter = "setGlobalFilter";
      var fe = function(n) {
        n.stateReducers.push(Ve), n.useInstance.push(Ke);
      };
      function Ve(n, a, i, l) {
        if (a.type === h.resetGlobalFilter)
          return y({}, n, { globalFilter: l.initialState.globalFilter || void 0 });
        if (a.type === h.setGlobalFilter) {
          var v = a.filterValue, f = l.userFilterTypes, S = Mr(l.globalFilter, f || {}, $r), R = Hn(v, n.globalFilter);
          return Ir(S.autoRemove, R) ? (n.globalFilter, B(n, ["globalFilter"])) : y({}, n, { globalFilter: R });
        }
      }
      function Ke(n) {
        var a = n.data, i = n.rows, l = n.flatRows, v = n.rowsById, f = n.allColumns, S = n.filterTypes, R = n.globalFilter, T = n.manualGlobalFilter, I = n.state.globalFilter, V = n.dispatch, W = n.autoResetGlobalFilter, x = W === void 0 || W, k = n.disableGlobalFilter, H = C.useCallback(function(K) {
          V({ type: h.setGlobalFilter, filterValue: K });
        }, [V]), X = C.useMemo(function() {
          if (T || I === void 0)
            return [i, l, v];
          var K = [], Tn = {}, rn = Mr(R, S || {}, $r);
          if (!rn)
            return console.warn("Could not find a valid 'globalFilter' option."), i;
          f.forEach(function(xn) {
            var gn = xn.disableGlobalFilter;
            xn.canFilter = Xn(gn !== !0 && void 0, k !== !0 && void 0, !0);
          });
          var Mn = f.filter(function(xn) {
            return xn.canFilter === !0;
          });
          return [function xn(gn) {
            return (gn = rn(gn, Mn.map(function(Sn) {
              return Sn.id;
            }), I)).forEach(function(Sn) {
              K.push(Sn), Tn[Sn.id] = Sn, Sn.subRows = Sn.subRows && Sn.subRows.length ? xn(Sn.subRows) : Sn.subRows;
            }), gn;
          }(i), K, Tn];
        }, [T, I, R, S, f, i, l, v, k]), U = X[0], ln = X[1], Ln = X[2], sn = An(x);
        Wn(function() {
          sn() && V({ type: h.resetGlobalFilter });
        }, [V, T ? null : a]), Object.assign(n, { preGlobalFilteredRows: i, preGlobalFilteredFlatRows: l, preGlobalFilteredRowsById: v, globalFilteredRows: U, globalFilteredFlatRows: ln, globalFilteredRowsById: Ln, rows: U, flatRows: ln, rowsById: Ln, setGlobalFilter: H, disableGlobalFilter: k });
      }
      function ge(n, a) {
        return a.reduce(function(i, l) {
          return i + (typeof l == "number" ? l : 0);
        }, 0);
      }
      fe.pluginName = "useGlobalFilter";
      var me = Object.freeze({ __proto__: null, sum: ge, min: function(n) {
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
        return n.forEach(function(l) {
          typeof l == "number" && (a = Math.min(a, l), i = Math.max(i, l));
        }), a + ".." + i;
      }, average: function(n) {
        return ge(0, n) / n.length;
      }, median: function(n) {
        if (!n.length)
          return null;
        var a = Math.floor(n.length / 2), i = [].concat(n).sort(function(l, v) {
          return l - v;
        });
        return n.length % 2 != 0 ? i[a] : (i[a - 1] + i[a]) / 2;
      }, unique: function(n) {
        return Array.from(new Set(n).values());
      }, uniqueCount: function(n) {
        return new Set(n).size;
      }, count: function(n) {
        return n.length;
      } }), qe = [], ze = {};
      h.resetGroupBy = "resetGroupBy", h.setGroupBy = "setGroupBy", h.toggleGroupBy = "toggleGroupBy";
      var ve = function(n) {
        n.getGroupByToggleProps = [_e], n.stateReducers.push(Zr), n.visibleColumnsDeps.push(function(a, i) {
          var l = i.instance;
          return [].concat(a, [l.state.groupBy]);
        }), n.visibleColumns.push(Xe), n.useInstance.push(Et), n.prepareRow.push(Ye);
      };
      ve.pluginName = "useGroupBy";
      var _e = function(n, a) {
        var i = a.header;
        return [n, { onClick: i.canGroupBy ? function(l) {
          l.persist(), i.toggleGroupBy();
        } : void 0, style: { cursor: i.canGroupBy ? "pointer" : void 0 }, title: "Toggle GroupBy" }];
      };
      function Zr(n, a, i, l) {
        if (a.type === h.init)
          return y({ groupBy: [] }, n);
        if (a.type === h.resetGroupBy)
          return y({}, n, { groupBy: l.initialState.groupBy || [] });
        if (a.type === h.setGroupBy)
          return y({}, n, { groupBy: a.value });
        if (a.type === h.toggleGroupBy) {
          var v = a.columnId, f = a.value, S = f !== void 0 ? f : !n.groupBy.includes(v);
          return y({}, n, S ? { groupBy: [].concat(n.groupBy, [v]) } : { groupBy: n.groupBy.filter(function(R) {
            return R !== v;
          }) });
        }
      }
      function Xe(n, a) {
        var i = a.instance.state.groupBy, l = i.map(function(f) {
          return n.find(function(S) {
            return S.id === f;
          });
        }).filter(Boolean), v = n.filter(function(f) {
          return !i.includes(f.id);
        });
        return (n = [].concat(l, v)).forEach(function(f) {
          f.isGrouped = i.includes(f.id), f.groupedIndex = i.indexOf(f.id);
        }), n;
      }
      var kt = {};
      function Et(n) {
        var a = n.data, i = n.rows, l = n.flatRows, v = n.rowsById, f = n.allColumns, S = n.flatHeaders, R = n.groupByFn, T = R === void 0 ? je : R, I = n.manualGroupBy, V = n.aggregations, W = V === void 0 ? kt : V, x = n.plugins, k = n.state.groupBy, H = n.dispatch, X = n.autoResetGroupBy, U = X === void 0 || X, ln = n.disableGroupBy, Ln = n.defaultCanGroupBy, sn = n.getHooks;
        hn(x, ["useColumnOrder", "useFilters"], "useGroupBy");
        var K = An(n);
        f.forEach(function(u) {
          var o = u.accessor, p = u.defaultGroupBy, m = u.disableGroupBy;
          u.canGroupBy = o ? Xn(u.canGroupBy, m !== !0 && void 0, ln !== !0 && void 0, !0) : Xn(u.canGroupBy, p, Ln, !1), u.canGroupBy && (u.toggleGroupBy = function() {
            return n.toggleGroupBy(u.id);
          }), u.Aggregated = u.Aggregated || u.Cell;
        });
        var Tn = C.useCallback(function(u, o) {
          H({ type: h.toggleGroupBy, columnId: u, value: o });
        }, [H]), rn = C.useCallback(function(u) {
          H({ type: h.setGroupBy, value: u });
        }, [H]);
        S.forEach(function(u) {
          u.getGroupByToggleProps = Cn(sn().getGroupByToggleProps, { instance: K(), header: u });
        });
        var Mn = C.useMemo(function() {
          if (I || !k.length)
            return [i, l, v, qe, ze, l, v];
          var u = k.filter(function(L) {
            return f.find(function(q) {
              return q.id === L;
            });
          }), o = [], p = {}, m = [], c = {}, w = [], D = {}, N = function L(q, O, G) {
            if (O === void 0 && (O = 0), O === u.length)
              return q.map(function(Z) {
                return y({}, Z, { depth: O });
              });
            var _ = u[O], E = T(q, _);
            return Object.entries(E).map(function(Z, yn) {
              var vn = Z[0], j = Z[1], Pn = _ + ":" + vn, Bn = L(j, O + 1, Pn = G ? G + ">" + Pn : Pn), J = O ? Pr(j, "leafRows") : j, Y = function(cn, kn, En) {
                var _n = {};
                return f.forEach(function(on) {
                  if (u.includes(on.id))
                    _n[on.id] = kn[0] ? kn[0].values[on.id] : null;
                  else {
                    var ir = typeof on.aggregate == "function" ? on.aggregate : W[on.aggregate] || me[on.aggregate];
                    if (ir) {
                      var On = kn.map(function(bn) {
                        return bn.values[on.id];
                      }), wn = cn.map(function(bn) {
                        var jn = bn.values[on.id];
                        if (!En && on.aggregateValue) {
                          var sr = typeof on.aggregateValue == "function" ? on.aggregateValue : W[on.aggregateValue] || me[on.aggregateValue];
                          if (!sr)
                            throw console.info({ column: on }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                          jn = sr(jn, bn, on);
                        }
                        return jn;
                      });
                      _n[on.id] = ir(wn, On);
                    } else {
                      if (on.aggregate)
                        throw console.info({ column: on }), new Error("React Table: Invalid column.aggregate option for column listed above");
                      _n[on.id] = null;
                    }
                  }
                }), _n;
              }(J, j, O), $ = { id: Pn, isGrouped: !0, groupByID: _, groupByVal: vn, values: Y, subRows: Bn, leafRows: J, depth: O, index: yn };
              return Bn.forEach(function(cn) {
                o.push(cn), p[cn.id] = cn, cn.isGrouped ? (m.push(cn), c[cn.id] = cn) : (w.push(cn), D[cn.id] = cn);
              }), $;
            });
          }(i);
          return N.forEach(function(L) {
            o.push(L), p[L.id] = L, L.isGrouped ? (m.push(L), c[L.id] = L) : (w.push(L), D[L.id] = L);
          }), [N, o, p, m, c, w, D];
        }, [I, k, i, l, v, f, W, T]), xn = Mn[0], gn = Mn[1], Sn = Mn[2], Vn = Mn[3], Rn = Mn[4], Gn = Mn[5], r = Mn[6], e = An(U);
        Wn(function() {
          e() && H({ type: h.resetGroupBy });
        }, [H, I ? null : a]), Object.assign(n, { preGroupedRows: i, preGroupedFlatRow: l, preGroupedRowsById: v, groupedRows: xn, groupedFlatRows: gn, groupedRowsById: Sn, onlyGroupedFlatRows: Vn, onlyGroupedRowsById: Rn, nonGroupedFlatRows: Gn, nonGroupedRowsById: r, rows: xn, flatRows: gn, rowsById: Sn, toggleGroupBy: Tn, setGroupBy: rn });
      }
      function Ye(n) {
        n.allCells.forEach(function(a) {
          var i;
          a.isGrouped = a.column.isGrouped && a.column.id === n.groupByID, a.isPlaceholder = !a.isGrouped && a.column.isGrouped, a.isAggregated = !a.isGrouped && !a.isPlaceholder && ((i = n.subRows) == null ? void 0 : i.length);
        });
      }
      function je(n, a) {
        return n.reduce(function(i, l, v) {
          var f = "" + l.values[a];
          return i[f] = Array.isArray(i[f]) ? i[f] : [], i[f].push(l), i;
        }, {});
      }
      var Ue = /([0-9]+)/gm;
      function ae(n, a) {
        return n === a ? 0 : n > a ? 1 : -1;
      }
      function Qr(n, a, i) {
        return [n.values[i], a.values[i]];
      }
      function Je(n) {
        return typeof n == "number" ? isNaN(n) || n === 1 / 0 || n === -1 / 0 ? "" : String(n) : typeof n == "string" ? n : "";
      }
      var Ot = Object.freeze({ __proto__: null, alphanumeric: function(n, a, i) {
        var l = Qr(n, a, i), v = l[0], f = l[1];
        for (v = Je(v), f = Je(f), v = v.split(Ue).filter(Boolean), f = f.split(Ue).filter(Boolean); v.length && f.length; ) {
          var S = v.shift(), R = f.shift(), T = parseInt(S, 10), I = parseInt(R, 10), V = [T, I].sort();
          if (isNaN(V[0])) {
            if (S > R)
              return 1;
            if (R > S)
              return -1;
          } else {
            if (isNaN(V[1]))
              return isNaN(T) ? -1 : 1;
            if (T > I)
              return 1;
            if (I > T)
              return -1;
          }
        }
        return v.length - f.length;
      }, datetime: function(n, a, i) {
        var l = Qr(n, a, i), v = l[0], f = l[1];
        return ae(v = v.getTime(), f = f.getTime());
      }, basic: function(n, a, i) {
        var l = Qr(n, a, i);
        return ae(l[0], l[1]);
      }, string: function(n, a, i) {
        var l = Qr(n, a, i), v = l[0], f = l[1];
        for (v = v.split("").filter(Boolean), f = f.split("").filter(Boolean); v.length && f.length; ) {
          var S = v.shift(), R = f.shift(), T = S.toLowerCase(), I = R.toLowerCase();
          if (T > I)
            return 1;
          if (I > T)
            return -1;
          if (S > R)
            return 1;
          if (R > S)
            return -1;
        }
        return v.length - f.length;
      }, number: function(n, a, i) {
        var l = Qr(n, a, i), v = l[0], f = l[1], S = /[^0-9.]/gi;
        return ae(v = Number(String(v).replace(S, "")), f = Number(String(f).replace(S, "")));
      } });
      h.resetSortBy = "resetSortBy", h.setSortBy = "setSortBy", h.toggleSortBy = "toggleSortBy", h.clearSortBy = "clearSortBy", un.sortType = "alphanumeric", un.sortDescFirst = !1;
      var $e = function(n) {
        n.getSortByToggleProps = [Bt], n.stateReducers.push(Ft), n.useInstance.push(Ht);
      };
      $e.pluginName = "useSortBy";
      var Bt = function(n, a) {
        var i = a.instance, l = a.column, v = i.isMultiSortEvent, f = v === void 0 ? function(S) {
          return S.shiftKey;
        } : v;
        return [n, { onClick: l.canSort ? function(S) {
          S.persist(), l.toggleSortBy(void 0, !i.disableMultiSort && f(S));
        } : void 0, style: { cursor: l.canSort ? "pointer" : void 0 }, title: l.canSort ? "Toggle SortBy" : void 0 }];
      };
      function Ft(n, a, i, l) {
        if (a.type === h.init)
          return y({ sortBy: [] }, n);
        if (a.type === h.resetSortBy)
          return y({}, n, { sortBy: l.initialState.sortBy || [] });
        if (a.type === h.clearSortBy)
          return y({}, n, { sortBy: n.sortBy.filter(function(K) {
            return K.id !== a.columnId;
          }) });
        if (a.type === h.setSortBy)
          return y({}, n, { sortBy: a.sortBy });
        if (a.type === h.toggleSortBy) {
          var v, f = a.columnId, S = a.desc, R = a.multi, T = l.allColumns, I = l.disableMultiSort, V = l.disableSortRemove, W = l.disableMultiRemove, x = l.maxMultiSortColCount, k = x === void 0 ? Number.MAX_SAFE_INTEGER : x, H = n.sortBy, X = T.find(function(K) {
            return K.id === f;
          }).sortDescFirst, U = H.find(function(K) {
            return K.id === f;
          }), ln = H.findIndex(function(K) {
            return K.id === f;
          }), Ln = S != null, sn = [];
          return (v = !I && R ? U ? "toggle" : "add" : ln !== H.length - 1 || H.length !== 1 ? "replace" : U ? "toggle" : "replace") != "toggle" || V || Ln || R && W || !(U && U.desc && !X || !U.desc && X) || (v = "remove"), v === "replace" ? sn = [{ id: f, desc: Ln ? S : X }] : v === "add" ? (sn = [].concat(H, [{ id: f, desc: Ln ? S : X }])).splice(0, sn.length - k) : v === "toggle" ? sn = H.map(function(K) {
            return K.id === f ? y({}, K, { desc: Ln ? S : !U.desc }) : K;
          }) : v === "remove" && (sn = H.filter(function(K) {
            return K.id !== f;
          })), y({}, n, { sortBy: sn });
        }
      }
      function Ht(n) {
        var a = n.data, i = n.rows, l = n.flatRows, v = n.allColumns, f = n.orderByFn, S = f === void 0 ? Ze : f, R = n.sortTypes, T = n.manualSortBy, I = n.defaultCanSort, V = n.disableSortBy, W = n.flatHeaders, x = n.state.sortBy, k = n.dispatch, H = n.plugins, X = n.getHooks, U = n.autoResetSortBy, ln = U === void 0 || U;
        hn(H, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var Ln = C.useCallback(function(gn) {
          k({ type: h.setSortBy, sortBy: gn });
        }, [k]), sn = C.useCallback(function(gn, Sn, Vn) {
          k({ type: h.toggleSortBy, columnId: gn, desc: Sn, multi: Vn });
        }, [k]), K = An(n);
        W.forEach(function(gn) {
          var Sn = gn.accessor, Vn = gn.canSort, Rn = gn.disableSortBy, Gn = gn.id, r = Sn ? Xn(Rn !== !0 && void 0, V !== !0 && void 0, !0) : Xn(I, Vn, !1);
          gn.canSort = r, gn.canSort && (gn.toggleSortBy = function(u, o) {
            return sn(gn.id, u, o);
          }, gn.clearSortBy = function() {
            k({ type: h.clearSortBy, columnId: gn.id });
          }), gn.getSortByToggleProps = Cn(X().getSortByToggleProps, { instance: K(), column: gn });
          var e = x.find(function(u) {
            return u.id === Gn;
          });
          gn.isSorted = !!e, gn.sortedIndex = x.findIndex(function(u) {
            return u.id === Gn;
          }), gn.isSortedDesc = gn.isSorted ? e.desc : void 0;
        });
        var Tn = C.useMemo(function() {
          if (T || !x.length)
            return [i, l];
          var gn = [], Sn = x.filter(function(Vn) {
            return v.find(function(Rn) {
              return Rn.id === Vn.id;
            });
          });
          return [function Vn(Rn) {
            var Gn = S(Rn, Sn.map(function(r) {
              var e = v.find(function(p) {
                return p.id === r.id;
              });
              if (!e)
                throw new Error("React-Table: Could not find a column with id: " + r.id + " while sorting");
              var u = e.sortType, o = Jn(u) || (R || {})[u] || Ot[u];
              if (!o)
                throw new Error("React-Table: Could not find a valid sortType of '" + u + "' for column '" + r.id + "'.");
              return function(p, m) {
                return o(p, m, r.id, r.desc);
              };
            }), Sn.map(function(r) {
              var e = v.find(function(u) {
                return u.id === r.id;
              });
              return e && e.sortInverted ? r.desc : !r.desc;
            }));
            return Gn.forEach(function(r) {
              gn.push(r), r.subRows && r.subRows.length !== 0 && (r.subRows = Vn(r.subRows));
            }), Gn;
          }(i), gn];
        }, [T, x, i, l, v, S, R]), rn = Tn[0], Mn = Tn[1], xn = An(ln);
        Wn(function() {
          xn() && k({ type: h.resetSortBy });
        }, [T ? null : a]), Object.assign(n, { preSortedRows: i, preSortedFlatRows: l, sortedRows: rn, sortedFlatRows: Mn, rows: rn, flatRows: Mn, setSortBy: Ln, toggleSortBy: sn });
      }
      function Ze(n, a, i) {
        return [].concat(n).sort(function(l, v) {
          for (var f = 0; f < a.length; f += 1) {
            var S = a[f], R = i[f] === !1 || i[f] === "desc", T = S(l, v);
            if (T !== 0)
              return R ? -T : T;
          }
          return i[0] ? l.index - v.index : v.index - l.index;
        });
      }
      h.resetPage = "resetPage", h.gotoPage = "gotoPage", h.setPageSize = "setPageSize";
      var he = function(n) {
        n.stateReducers.push(Wt), n.useInstance.push(xt);
      };
      function Wt(n, a, i, l) {
        if (a.type === h.init)
          return y({ pageSize: 10, pageIndex: 0 }, n);
        if (a.type === h.resetPage)
          return y({}, n, { pageIndex: l.initialState.pageIndex || 0 });
        if (a.type === h.gotoPage) {
          var v = l.pageCount, f = l.page, S = Hn(a.pageIndex, n.pageIndex), R = !1;
          return S > n.pageIndex ? R = v === -1 ? f.length >= n.pageSize : S < v : S < n.pageIndex && (R = S > -1), R ? y({}, n, { pageIndex: S }) : n;
        }
        if (a.type === h.setPageSize) {
          var T = a.pageSize, I = n.pageSize * n.pageIndex;
          return y({}, n, { pageIndex: Math.floor(I / T), pageSize: T });
        }
      }
      function xt(n) {
        var a = n.rows, i = n.autoResetPage, l = i === void 0 || i, v = n.manualExpandedKey, f = v === void 0 ? "expanded" : v, S = n.plugins, R = n.pageCount, T = n.paginateExpandedRows, I = T === void 0 || T, V = n.expandSubRows, W = V === void 0 || V, x = n.state, k = x.pageSize, H = x.pageIndex, X = x.expanded, U = x.globalFilter, ln = x.filters, Ln = x.groupBy, sn = x.sortBy, K = n.dispatch, Tn = n.data, rn = n.manualPagination;
        hn(S, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var Mn = An(l);
        Wn(function() {
          Mn() && K({ type: h.resetPage });
        }, [K, rn ? null : Tn, U, ln, Ln, sn]);
        var xn = rn ? R : Math.ceil(a.length / k), gn = C.useMemo(function() {
          return xn > 0 ? [].concat(new Array(xn)).fill(null).map(function(o, p) {
            return p;
          }) : [];
        }, [xn]), Sn = C.useMemo(function() {
          var o;
          if (rn)
            o = a;
          else {
            var p = k * H, m = p + k;
            o = a.slice(p, m);
          }
          return I ? o : Rr(o, { manualExpandedKey: f, expanded: X, expandSubRows: W });
        }, [W, X, f, rn, H, k, I, a]), Vn = H > 0, Rn = xn === -1 ? Sn.length >= k : H < xn - 1, Gn = C.useCallback(function(o) {
          K({ type: h.gotoPage, pageIndex: o });
        }, [K]), r = C.useCallback(function() {
          return Gn(function(o) {
            return o - 1;
          });
        }, [Gn]), e = C.useCallback(function() {
          return Gn(function(o) {
            return o + 1;
          });
        }, [Gn]), u = C.useCallback(function(o) {
          K({ type: h.setPageSize, pageSize: o });
        }, [K]);
        Object.assign(n, { pageOptions: gn, pageCount: xn, page: Sn, canPreviousPage: Vn, canNextPage: Rn, gotoPage: Gn, previousPage: r, nextPage: e, setPageSize: u });
      }
      he.pluginName = "usePagination", h.resetPivot = "resetPivot", h.togglePivot = "togglePivot";
      var Se = function(n) {
        n.getPivotToggleProps = [Gt], n.stateReducers.push(Vt), n.useInstanceAfterData.push(Kt), n.allColumns.push(qt), n.accessValue.push(zt), n.materializedColumns.push(nt), n.materializedColumnsDeps.push(rt), n.visibleColumns.push(_t), n.visibleColumnsDeps.push(Xt), n.useInstance.push(Yt), n.prepareRow.push(jt);
      };
      Se.pluginName = "usePivotColumns";
      var Qe = [], Gt = function(n, a) {
        var i = a.header;
        return [n, { onClick: i.canPivot ? function(l) {
          l.persist(), i.togglePivot();
        } : void 0, style: { cursor: i.canPivot ? "pointer" : void 0 }, title: "Toggle Pivot" }];
      };
      function Vt(n, a, i, l) {
        if (a.type === h.init)
          return y({ pivotColumns: Qe }, n);
        if (a.type === h.resetPivot)
          return y({}, n, { pivotColumns: l.initialState.pivotColumns || Qe });
        if (a.type === h.togglePivot) {
          var v = a.columnId, f = a.value, S = f !== void 0 ? f : !n.pivotColumns.includes(v);
          return y({}, n, S ? { pivotColumns: [].concat(n.pivotColumns, [v]) } : { pivotColumns: n.pivotColumns.filter(function(R) {
            return R !== v;
          }) });
        }
      }
      function Kt(n) {
        n.allColumns.forEach(function(a) {
          a.isPivotSource = n.state.pivotColumns.includes(a.id);
        });
      }
      function qt(n, a) {
        var i = a.instance;
        return n.forEach(function(l) {
          l.isPivotSource = i.state.pivotColumns.includes(l.id), l.uniqueValues = /* @__PURE__ */ new Set();
        }), n;
      }
      function zt(n, a) {
        var i = a.column;
        return i.uniqueValues && n !== void 0 && i.uniqueValues.add(n), n;
      }
      function nt(n, a) {
        var i = a.instance, l = i.allColumns, v = i.state;
        if (!v.pivotColumns.length || !v.groupBy || !v.groupBy.length)
          return n;
        var f = v.pivotColumns.map(function(T) {
          return l.find(function(I) {
            return I.id === T;
          });
        }).filter(Boolean), S = l.filter(function(T) {
          return !T.isPivotSource && !v.groupBy.includes(T.id) && !v.pivotColumns.includes(T.id);
        }), R = Cr(function T(I, V, W) {
          I === void 0 && (I = 0), W === void 0 && (W = []);
          var x = f[I];
          return x ? Array.from(x.uniqueValues).sort().map(function(k) {
            var H = y({}, x, { Header: x.PivotHeader || typeof x.header == "string" ? x.Header + ": " + k : k, isPivotGroup: !0, parent: V, depth: I, id: V ? V.id + "." + x.id + "." + k : x.id + "." + k, pivotValue: k });
            return H.columns = T(I + 1, H, [].concat(W, [function(X) {
              return X.values[x.id] === k;
            }])), H;
          }) : S.map(function(k) {
            return y({}, k, { canPivot: !1, isPivoted: !0, parent: V, depth: I, id: "" + (V ? V.id + "." + k.id : k.id), accessor: function(H, X, U) {
              if (W.every(function(ln) {
                return ln(U);
              }))
                return U.values[k.id];
            } });
          });
        }());
        return [].concat(n, R);
      }
      function rt(n, a) {
        var i = a.instance.state, l = i.pivotColumns, v = i.groupBy;
        return [].concat(n, [l, v]);
      }
      function _t(n, a) {
        var i = a.instance.state;
        return n = n.filter(function(l) {
          return !l.isPivotSource;
        }), i.pivotColumns.length && i.groupBy && i.groupBy.length && (n = n.filter(function(l) {
          return l.isGrouped || l.isPivoted;
        })), n;
      }
      function Xt(n, a) {
        var i = a.instance;
        return [].concat(n, [i.state.pivotColumns, i.state.groupBy]);
      }
      function Yt(n) {
        var a = n.columns, i = n.allColumns, l = n.flatHeaders, v = n.getHooks, f = n.plugins, S = n.dispatch, R = n.autoResetPivot, T = R === void 0 || R, I = n.manaulPivot, V = n.disablePivot, W = n.defaultCanPivot;
        hn(f, ["useGroupBy"], "usePivotColumns");
        var x = An(n);
        i.forEach(function(H) {
          var X = H.accessor, U = H.defaultPivot, ln = H.disablePivot;
          H.canPivot = X ? Xn(H.canPivot, ln !== !0 && void 0, V !== !0 && void 0, !0) : Xn(H.canPivot, U, W, !1), H.canPivot && (H.togglePivot = function() {
            return n.togglePivot(H.id);
          }), H.Aggregated = H.Aggregated || H.Cell;
        }), l.forEach(function(H) {
          H.getPivotToggleProps = Cn(v().getPivotToggleProps, { instance: x(), header: H });
        });
        var k = An(T);
        Wn(function() {
          k() && S({ type: h.resetPivot });
        }, [S, I ? null : a]), Object.assign(n, { togglePivot: function(H, X) {
          S({ type: h.togglePivot, columnId: H, value: X });
        } });
      }
      function jt(n) {
        n.allCells.forEach(function(a) {
          a.isPivoted = a.column.isPivoted;
        });
      }
      h.resetSelectedRows = "resetSelectedRows", h.toggleAllRowsSelected = "toggleAllRowsSelected", h.toggleRowSelected = "toggleRowSelected", h.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var et = function(n) {
        n.getToggleRowSelectedProps = [we], n.getToggleAllRowsSelectedProps = [ne], n.getToggleAllPageRowsSelectedProps = [tt], n.stateReducers.push(Ut), n.useInstance.push(ot), n.prepareRow.push(Jt);
      };
      et.pluginName = "useRowSelect";
      var we = function(n, a) {
        var i = a.instance, l = a.row, v = i.manualRowSelectedKey, f = v === void 0 ? "isSelected" : v;
        return [n, { onChange: function(S) {
          l.toggleRowSelected(S.target.checked);
        }, style: { cursor: "pointer" }, checked: !(!l.original || !l.original[f]) || l.isSelected, title: "Toggle Row Selected", indeterminate: l.isSomeSelected }];
      }, ne = function(n, a) {
        var i = a.instance;
        return [n, { onChange: function(l) {
          i.toggleAllRowsSelected(l.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isAllRowsSelected, title: "Toggle All Rows Selected", indeterminate: !!(!i.isAllRowsSelected && Object.keys(i.state.selectedRowIds).length) }];
      }, tt = function(n, a) {
        var i = a.instance;
        return [n, { onChange: function(l) {
          i.toggleAllPageRowsSelected(l.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isAllPageRowsSelected, title: "Toggle All Current Page Rows Selected", indeterminate: !!(!i.isAllPageRowsSelected && i.page.some(function(l) {
          var v = l.id;
          return i.state.selectedRowIds[v];
        })) }];
      };
      function Ut(n, a, i, l) {
        if (a.type === h.init)
          return y({ selectedRowIds: {} }, n);
        if (a.type === h.resetSelectedRows)
          return y({}, n, { selectedRowIds: l.initialState.selectedRowIds || {} });
        if (a.type === h.toggleAllRowsSelected) {
          var v = a.value, f = l.isAllRowsSelected, S = l.rowsById, R = l.nonGroupedRowsById, T = R === void 0 ? S : R, I = v !== void 0 ? v : !f, V = Object.assign({}, n.selectedRowIds);
          return I ? Object.keys(T).forEach(function(Gn) {
            V[Gn] = !0;
          }) : Object.keys(T).forEach(function(Gn) {
            delete V[Gn];
          }), y({}, n, { selectedRowIds: V });
        }
        if (a.type === h.toggleRowSelected) {
          var W = a.id, x = a.value, k = l.rowsById, H = l.selectSubRows, X = H === void 0 || H, U = l.getSubRows, ln = n.selectedRowIds[W], Ln = x !== void 0 ? x : !ln;
          if (ln === Ln)
            return n;
          var sn = y({}, n.selectedRowIds);
          return function Gn(r) {
            var e = k[r];
            if (e && (e.isGrouped || (Ln ? sn[r] = !0 : delete sn[r]), X && U(e)))
              return U(e).forEach(function(u) {
                return Gn(u.id);
              });
          }(W), y({}, n, { selectedRowIds: sn });
        }
        if (a.type === h.toggleAllPageRowsSelected) {
          var K = a.value, Tn = l.page, rn = l.rowsById, Mn = l.selectSubRows, xn = Mn === void 0 || Mn, gn = l.isAllPageRowsSelected, Sn = l.getSubRows, Vn = K !== void 0 ? K : !gn, Rn = y({}, n.selectedRowIds);
          return Tn.forEach(function(Gn) {
            return function r(e) {
              var u = rn[e];
              if (u.isGrouped || (Vn ? Rn[e] = !0 : delete Rn[e]), xn && Sn(u))
                return Sn(u).forEach(function(o) {
                  return r(o.id);
                });
            }(Gn.id);
          }), y({}, n, { selectedRowIds: Rn });
        }
        return n;
      }
      function ot(n) {
        var a = n.data, i = n.rows, l = n.getHooks, v = n.plugins, f = n.rowsById, S = n.nonGroupedRowsById, R = S === void 0 ? f : S, T = n.autoResetSelectedRows, I = T === void 0 || T, V = n.state.selectedRowIds, W = n.selectSubRows, x = W === void 0 || W, k = n.dispatch, H = n.page, X = n.getSubRows;
        hn(v, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var U = C.useMemo(function() {
          var Sn = [];
          return i.forEach(function(Vn) {
            var Rn = x ? function Gn(r, e, u) {
              if (e[r.id])
                return !0;
              var o = u(r);
              if (o && o.length) {
                var p = !0, m = !1;
                return o.forEach(function(c) {
                  m && !p || (Gn(c, e, u) ? m = !0 : p = !1);
                }), !!p || !!m && null;
              }
              return !1;
            }(Vn, V, X) : !!V[Vn.id];
            Vn.isSelected = !!Rn, Vn.isSomeSelected = Rn === null, Rn && Sn.push(Vn);
          }), Sn;
        }, [i, x, V, X]), ln = !!(Object.keys(R).length && Object.keys(V).length), Ln = ln;
        ln && Object.keys(R).some(function(Sn) {
          return !V[Sn];
        }) && (ln = !1), ln || H && H.length && H.some(function(Sn) {
          var Vn = Sn.id;
          return !V[Vn];
        }) && (Ln = !1);
        var sn = An(I);
        Wn(function() {
          sn() && k({ type: h.resetSelectedRows });
        }, [k, a]);
        var K = C.useCallback(function(Sn) {
          return k({ type: h.toggleAllRowsSelected, value: Sn });
        }, [k]), Tn = C.useCallback(function(Sn) {
          return k({ type: h.toggleAllPageRowsSelected, value: Sn });
        }, [k]), rn = C.useCallback(function(Sn, Vn) {
          return k({ type: h.toggleRowSelected, id: Sn, value: Vn });
        }, [k]), Mn = An(n), xn = Cn(l().getToggleAllRowsSelectedProps, { instance: Mn() }), gn = Cn(l().getToggleAllPageRowsSelectedProps, { instance: Mn() });
        Object.assign(n, { selectedFlatRows: U, isAllRowsSelected: ln, isAllPageRowsSelected: Ln, toggleRowSelected: rn, toggleAllRowsSelected: K, getToggleAllRowsSelectedProps: xn, getToggleAllPageRowsSelectedProps: gn, toggleAllPageRowsSelected: Tn });
      }
      function Jt(n, a) {
        var i = a.instance;
        n.toggleRowSelected = function(l) {
          return i.toggleRowSelected(n.id, l);
        }, n.getToggleRowSelectedProps = Cn(i.getHooks().getToggleRowSelectedProps, { instance: i, row: n });
      }
      var at = function(n) {
        return {};
      }, ut = function(n) {
        return {};
      };
      h.setRowState = "setRowState", h.setCellState = "setCellState", h.resetRowState = "resetRowState";
      var Me = function(n) {
        n.stateReducers.push($t), n.useInstance.push(it), n.prepareRow.push(Zt);
      };
      function $t(n, a, i, l) {
        var v = l.initialRowStateAccessor, f = v === void 0 ? at : v, S = l.initialCellStateAccessor, R = S === void 0 ? ut : S, T = l.rowsById;
        if (a.type === h.init)
          return y({ rowState: {} }, n);
        if (a.type === h.resetRowState)
          return y({}, n, { rowState: l.initialState.rowState || {} });
        if (a.type === h.setRowState) {
          var I, V = a.rowId, W = a.value, x = n.rowState[V] !== void 0 ? n.rowState[V] : f(T[V]);
          return y({}, n, { rowState: y({}, n.rowState, (I = {}, I[V] = Hn(W, x), I)) });
        }
        if (a.type === h.setCellState) {
          var k, H, X, U, ln, Ln = a.rowId, sn = a.columnId, K = a.value, Tn = n.rowState[Ln] !== void 0 ? n.rowState[Ln] : f(T[Ln]), rn = (Tn == null || (k = Tn.cellState) == null ? void 0 : k[sn]) !== void 0 ? Tn.cellState[sn] : R((H = T[Ln]) == null || (X = H.cells) == null ? void 0 : X.find(function(Mn) {
            return Mn.column.id === sn;
          }));
          return y({}, n, { rowState: y({}, n.rowState, (ln = {}, ln[Ln] = y({}, Tn, { cellState: y({}, Tn.cellState || {}, (U = {}, U[sn] = Hn(K, rn), U)) }), ln)) });
        }
      }
      function it(n) {
        var a = n.autoResetRowState, i = a === void 0 || a, l = n.data, v = n.dispatch, f = C.useCallback(function(T, I) {
          return v({ type: h.setRowState, rowId: T, value: I });
        }, [v]), S = C.useCallback(function(T, I, V) {
          return v({ type: h.setCellState, rowId: T, columnId: I, value: V });
        }, [v]), R = An(i);
        Wn(function() {
          R() && v({ type: h.resetRowState });
        }, [l]), Object.assign(n, { setRowState: f, setCellState: S });
      }
      function Zt(n, a) {
        var i = a.instance, l = i.initialRowStateAccessor, v = l === void 0 ? at : l, f = i.initialCellStateAccessor, S = f === void 0 ? ut : f, R = i.state.rowState;
        n && (n.state = R[n.id] !== void 0 ? R[n.id] : v(n), n.setState = function(T) {
          return i.setRowState(n.id, T);
        }, n.cells.forEach(function(T) {
          n.state.cellState || (n.state.cellState = {}), T.state = n.state.cellState[T.column.id] !== void 0 ? n.state.cellState[T.column.id] : S(T), T.setState = function(I) {
            return i.setCellState(n.id, T.column.id, I);
          };
        }));
      }
      Me.pluginName = "useRowState", h.resetColumnOrder = "resetColumnOrder", h.setColumnOrder = "setColumnOrder";
      var lt = function(n) {
        n.stateReducers.push(st), n.visibleColumnsDeps.push(function(a, i) {
          var l = i.instance;
          return [].concat(a, [l.state.columnOrder]);
        }), n.visibleColumns.push(ct), n.useInstance.push(Qt);
      };
      function st(n, a, i, l) {
        return a.type === h.init ? y({ columnOrder: [] }, n) : a.type === h.resetColumnOrder ? y({}, n, { columnOrder: l.initialState.columnOrder || [] }) : a.type === h.setColumnOrder ? y({}, n, { columnOrder: Hn(a.columnOrder, n.columnOrder) }) : void 0;
      }
      function ct(n, a) {
        var i = a.instance.state.columnOrder;
        if (!i || !i.length)
          return n;
        for (var l = [].concat(i), v = [].concat(n), f = [], S = function() {
          var R = l.shift(), T = v.findIndex(function(I) {
            return I.id === R;
          });
          T > -1 && f.push(v.splice(T, 1)[0]);
        }; v.length && l.length; )
          S();
        return [].concat(f, v);
      }
      function Qt(n) {
        var a = n.dispatch;
        n.setColumnOrder = C.useCallback(function(i) {
          return a({ type: h.setColumnOrder, columnOrder: i });
        }, [a]);
      }
      lt.pluginName = "useColumnOrder", un.canResize = !0, h.columnStartResizing = "columnStartResizing", h.columnResizing = "columnResizing", h.columnDoneResizing = "columnDoneResizing", h.resetResize = "resetResize";
      var yt = function(n) {
        n.getResizerProps = [no], n.getHeaderProps.push({ style: { position: "relative" } }), n.stateReducers.push(ro), n.useInstance.push(to), n.useInstanceBeforeDimensions.push(eo);
      }, no = function(n, a) {
        var i = a.instance, l = a.header, v = i.dispatch, f = function(S, R) {
          var T = !1;
          if (S.type === "touchstart") {
            if (S.touches && S.touches.length > 1)
              return;
            T = !0;
          }
          var I, V, W = function(sn) {
            var K = [];
            return function Tn(rn) {
              rn.columns && rn.columns.length && rn.columns.map(Tn), K.push(rn);
            }(sn), K;
          }(R).map(function(sn) {
            return [sn.id, sn.totalWidth];
          }), x = T ? Math.round(S.touches[0].clientX) : S.clientX, k = function() {
            window.cancelAnimationFrame(I), I = null, v({ type: h.columnDoneResizing });
          }, H = function() {
            window.cancelAnimationFrame(I), I = null, v({ type: h.columnResizing, clientX: V });
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
          } } }, ln = T ? U.touch : U.mouse, Ln = !!function() {
            if (typeof gr == "boolean")
              return gr;
            var sn = !1;
            try {
              var K = { get passive() {
                return sn = !0, !1;
              } };
              window.addEventListener("test", null, K), window.removeEventListener("test", null, K);
            } catch {
              sn = !1;
            }
            return gr = sn;
          }() && { passive: !1 };
          document.addEventListener(ln.moveEvent, ln.moveHandler, Ln), document.addEventListener(ln.upEvent, ln.upHandler, Ln), v({ type: h.columnStartResizing, columnId: R.id, columnWidth: R.totalWidth, headerIdWidths: W, clientX: x });
        };
        return [n, { onMouseDown: function(S) {
          return S.persist() || f(S, l);
        }, onTouchStart: function(S) {
          return S.persist() || f(S, l);
        }, style: { cursor: "col-resize" }, draggable: !1, role: "separator" }];
      };
      function ro(n, a) {
        if (a.type === h.init)
          return y({ columnResizing: { columnWidths: {} } }, n);
        if (a.type === h.resetResize)
          return y({}, n, { columnResizing: { columnWidths: {} } });
        if (a.type === h.columnStartResizing) {
          var i = a.clientX, l = a.columnId, v = a.columnWidth, f = a.headerIdWidths;
          return y({}, n, { columnResizing: y({}, n.columnResizing, { startX: i, headerIdWidths: f, columnWidth: v, isResizingColumn: l }) });
        }
        if (a.type === h.columnResizing) {
          var S = a.clientX, R = n.columnResizing, T = R.startX, I = R.columnWidth, V = R.headerIdWidths, W = (S - T) / I, x = {};
          return (V === void 0 ? [] : V).forEach(function(k) {
            var H = k[0], X = k[1];
            x[H] = Math.max(X + X * W, 0);
          }), y({}, n, { columnResizing: y({}, n.columnResizing, { columnWidths: y({}, n.columnResizing.columnWidths, {}, x) }) });
        }
        return a.type === h.columnDoneResizing ? y({}, n, { columnResizing: y({}, n.columnResizing, { startX: null, isResizingColumn: null }) }) : void 0;
      }
      yt.pluginName = "useResizeColumns";
      var eo = function(n) {
        var a = n.flatHeaders, i = n.disableResizing, l = n.getHooks, v = n.state.columnResizing, f = An(n);
        a.forEach(function(S) {
          var R = Xn(S.disableResizing !== !0 && void 0, i !== !0 && void 0, !0);
          S.canResize = R, S.width = v.columnWidths[S.id] || S.originalWidth || S.width, S.isResizing = v.isResizingColumn === S.id, R && (S.getResizerProps = Cn(l().getResizerProps, { instance: f(), header: S }));
        });
      };
      function to(n) {
        var a = n.plugins, i = n.dispatch, l = n.autoResetResize, v = l === void 0 || l, f = n.columns;
        hn(a, ["useAbsoluteLayout"], "useResizeColumns");
        var S = An(v);
        Wn(function() {
          S() && i({ type: h.resetResize });
        }, [f]);
        var R = C.useCallback(function() {
          return i({ type: h.resetResize });
        }, [i]);
        Object.assign(n, { resetResizing: R });
      }
      var be = { position: "absolute", top: 0 }, Ct = function(n) {
        n.getTableBodyProps.push(ue), n.getRowProps.push(ue), n.getHeaderGroupProps.push(ue), n.getFooterGroupProps.push(ue), n.getHeaderProps.push(function(a, i) {
          var l = i.column;
          return [a, { style: y({}, be, { left: l.totalLeft + "px", width: l.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(a, i) {
          var l = i.cell;
          return [a, { style: y({}, be, { left: l.column.totalLeft + "px", width: l.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(a, i) {
          var l = i.column;
          return [a, { style: y({}, be, { left: l.totalLeft + "px", width: l.totalWidth + "px" }) }];
        });
      };
      Ct.pluginName = "useAbsoluteLayout";
      var ue = function(n, a) {
        return [n, { style: { position: "relative", width: a.instance.totalColumnsWidth + "px" } }];
      }, Ae = { display: "inline-block", boxSizing: "border-box" }, De = function(n, a) {
        return [n, { style: { display: "flex", width: a.instance.totalColumnsWidth + "px" } }];
      }, dt = function(n) {
        n.getRowProps.push(De), n.getHeaderGroupProps.push(De), n.getFooterGroupProps.push(De), n.getHeaderProps.push(function(a, i) {
          var l = i.column;
          return [a, { style: y({}, Ae, { width: l.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(a, i) {
          var l = i.cell;
          return [a, { style: y({}, Ae, { width: l.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(a, i) {
          var l = i.column;
          return [a, { style: y({}, Ae, { width: l.totalWidth + "px" }) }];
        });
      };
      function Re(n) {
        n.getTableProps.push(oo), n.getRowProps.push(Ne), n.getHeaderGroupProps.push(Ne), n.getFooterGroupProps.push(Ne), n.getHeaderProps.push(ao), n.getCellProps.push(uo), n.getFooterProps.push(io);
      }
      dt.pluginName = "useBlockLayout", Re.pluginName = "useFlexLayout";
      var oo = function(n, a) {
        return [n, { style: { minWidth: a.instance.totalColumnsMinWidth + "px" } }];
      }, Ne = function(n, a) {
        return [n, { style: { display: "flex", flex: "1 0 auto", minWidth: a.instance.totalColumnsMinWidth + "px" } }];
      }, ao = function(n, a) {
        var i = a.column;
        return [n, { style: { boxSizing: "border-box", flex: i.totalFlexWidth ? i.totalFlexWidth + " 0 auto" : void 0, minWidth: i.totalMinWidth + "px", width: i.totalWidth + "px" } }];
      }, uo = function(n, a) {
        var i = a.cell;
        return [n, { style: { boxSizing: "border-box", flex: i.column.totalFlexWidth + " 0 auto", minWidth: i.column.totalMinWidth + "px", width: i.column.totalWidth + "px" } }];
      }, io = function(n, a) {
        var i = a.column;
        return [n, { style: { boxSizing: "border-box", flex: i.totalFlexWidth ? i.totalFlexWidth + " 0 auto" : void 0, minWidth: i.totalMinWidth + "px", width: i.totalWidth + "px" } }];
      };
      function pt(n) {
        n.stateReducers.push(vt), n.getTableProps.push(ft), n.getHeaderProps.push(gt), n.getRowProps.push(mt);
      }
      h.columnStartResizing = "columnStartResizing", h.columnResizing = "columnResizing", h.columnDoneResizing = "columnDoneResizing", h.resetResize = "resetResize", pt.pluginName = "useGridLayout";
      var ft = function(n, a) {
        var i = a.instance;
        return [n, { style: { display: "grid", gridTemplateColumns: i.visibleColumns.map(function(l) {
          var v;
          return i.state.gridLayout.columnWidths[l.id] ? i.state.gridLayout.columnWidths[l.id] + "px" : (v = i.state.columnResizing) != null && v.isResizingColumn ? i.state.gridLayout.startWidths[l.id] + "px" : typeof l.width == "number" ? l.width + "px" : l.width;
        }).join(" ") } }];
      }, gt = function(n, a) {
        var i = a.column;
        return [n, { id: "header-cell-" + i.id, style: { position: "sticky", gridColumn: "span " + i.totalVisibleHeaderCount } }];
      }, mt = function(n, a) {
        var i = a.row;
        return i.isExpanded ? [n, { style: { gridColumn: "1 / " + (i.cells.length + 1) } }] : [n, {}];
      };
      function vt(n, a, i, l) {
        if (a.type === h.init)
          return y({ gridLayout: { columnWidths: {} } }, n);
        if (a.type === h.resetResize)
          return y({}, n, { gridLayout: { columnWidths: {} } });
        if (a.type === h.columnStartResizing) {
          var v = a.columnId, f = a.headerIdWidths, S = Te(v);
          if (S !== void 0) {
            var R = l.visibleColumns.reduce(function(K, Tn) {
              var rn;
              return y({}, K, ((rn = {})[Tn.id] = Te(Tn.id), rn));
            }, {}), T = l.visibleColumns.reduce(function(K, Tn) {
              var rn;
              return y({}, K, ((rn = {})[Tn.id] = Tn.minWidth, rn));
            }, {}), I = l.visibleColumns.reduce(function(K, Tn) {
              var rn;
              return y({}, K, ((rn = {})[Tn.id] = Tn.maxWidth, rn));
            }, {}), V = f.map(function(K) {
              var Tn = K[0];
              return [Tn, Te(Tn)];
            });
            return y({}, n, { gridLayout: y({}, n.gridLayout, { startWidths: R, minWidths: T, maxWidths: I, headerIdGridWidths: V, columnWidth: S }) });
          }
          return n;
        }
        if (a.type === h.columnResizing) {
          var W = a.clientX, x = n.columnResizing.startX, k = n.gridLayout, H = k.columnWidth, X = k.minWidths, U = k.maxWidths, ln = k.headerIdGridWidths, Ln = (W - x) / H, sn = {};
          return (ln === void 0 ? [] : ln).forEach(function(K) {
            var Tn = K[0], rn = K[1];
            sn[Tn] = Math.min(Math.max(X[Tn], rn + rn * Ln), U[Tn]);
          }), y({}, n, { gridLayout: y({}, n.gridLayout, { columnWidths: y({}, n.gridLayout.columnWidths, {}, sn) }) });
        }
        return a.type === h.columnDoneResizing ? y({}, n, { gridLayout: y({}, n.gridLayout, { startWidths: {}, minWidths: {}, maxWidths: {} }) }) : void 0;
      }
      function Te(n) {
        var a, i = (a = document.getElementById("header-cell-" + n)) == null ? void 0 : a.offsetWidth;
        if (i !== void 0)
          return i;
      }
      s._UNSTABLE_usePivotColumns = Se, s.actions = h, s.defaultColumn = un, s.defaultGroupByFn = je, s.defaultOrderByFn = Ze, s.defaultRenderer = pn, s.emptyRenderer = M, s.ensurePluginOrder = hn, s.flexRender = tr, s.functionalUpdate = Hn, s.loopHooks = qn, s.makePropGetter = Cn, s.makeRenderer = Dn, s.reduceHooks = fn, s.safeUseLayoutEffect = Un, s.useAbsoluteLayout = Ct, s.useAsyncDebounce = function(n, a) {
        a === void 0 && (a = 0);
        var i = C.useRef({}), l = An(n), v = An(a);
        return C.useCallback(function() {
          var f = P(regeneratorRuntime.mark(function S() {
            var R, T, I, V = arguments;
            return regeneratorRuntime.wrap(function(W) {
              for (; ; )
                switch (W.prev = W.next) {
                  case 0:
                    for (R = V.length, T = new Array(R), I = 0; I < R; I++)
                      T[I] = V[I];
                    return i.current.promise || (i.current.promise = new Promise(function(x, k) {
                      i.current.resolve = x, i.current.reject = k;
                    })), i.current.timeout && clearTimeout(i.current.timeout), i.current.timeout = setTimeout(P(regeneratorRuntime.mark(function x() {
                      return regeneratorRuntime.wrap(function(k) {
                        for (; ; )
                          switch (k.prev = k.next) {
                            case 0:
                              return delete i.current.timeout, k.prev = 1, k.t0 = i.current, k.next = 5, l().apply(void 0, T);
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
                      }, x, null, [[1, 9, 12, 15]]);
                    })), v()), W.abrupt("return", i.current.promise);
                  case 5:
                  case "end":
                    return W.stop();
                }
            }, S);
          }));
          return function() {
            return f.apply(this, arguments);
          };
        }(), [l, v]);
      }, s.useBlockLayout = dt, s.useColumnOrder = lt, s.useExpanded = Tr, s.useFilters = xe, s.useFlexLayout = Re, s.useGetLatest = An, s.useGlobalFilter = fe, s.useGridLayout = pt, s.useGroupBy = ve, s.useMountedLayoutEffect = Wn, s.usePagination = he, s.useResizeColumns = yt, s.useRowSelect = et, s.useRowState = Me, s.useSortBy = $e, s.useTable = function(n) {
        for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
          i[l - 1] = arguments[l];
        n = ur(n), i = [br].concat(i);
        var v = C.useRef({}), f = An(v.current);
        Object.assign(f(), y({}, n, { plugins: i, hooks: Nr() })), i.filter(Boolean).forEach(function(c) {
          c(f().hooks);
        });
        var S = An(f().hooks);
        f().getHooks = S, delete f().hooks, Object.assign(f(), fn(S().useOptions, ur(n)));
        var R = f(), T = R.data, I = R.columns, V = R.initialState, W = R.defaultColumn, x = R.getSubRows, k = R.getRowId, H = R.stateReducer, X = R.useControlledState, U = An(H), ln = C.useCallback(function(c, w) {
          if (!w.type)
            throw console.info({ action: w }), new Error("Unknown Action 👆");
          return [].concat(S().stateReducers, Array.isArray(U()) ? U() : [U()]).reduce(function(D, N) {
            return N(D, w, c, f()) || D;
          }, c);
        }, [S, U, f]), Ln = C.useReducer(ln, void 0, function() {
          return ln(V, { type: h.init });
        }), sn = Ln[0], K = Ln[1], Tn = fn([].concat(S().useControlledState, [X]), sn, { instance: f() });
        Object.assign(f(), { state: Tn, dispatch: K });
        var rn = C.useMemo(function() {
          return Kn(fn(S().columns, I, { instance: f() }));
        }, [S, f, I].concat(fn(S().columnsDeps, [], { instance: f() })));
        f().columns = rn;
        var Mn = C.useMemo(function() {
          return fn(S().allColumns, Cr(rn), { instance: f() }).map(Qn);
        }, [rn, S, f].concat(fn(S().allColumnsDeps, [], { instance: f() })));
        f().allColumns = Mn;
        var xn = C.useMemo(function() {
          for (var c = [], w = [], D = {}, N = [].concat(Mn); N.length; ) {
            var L = N.shift();
            Fr({ data: T, rows: c, flatRows: w, rowsById: D, column: L, getRowId: k, getSubRows: x, accessValueHooks: S().accessValue, getInstance: f });
          }
          return [c, w, D];
        }, [Mn, T, k, x, S, f]), gn = xn[0], Sn = xn[1], Vn = xn[2];
        Object.assign(f(), { rows: gn, initialRows: [].concat(gn), flatRows: Sn, rowsById: Vn }), qn(S().useInstanceAfterData, f());
        var Rn = C.useMemo(function() {
          return fn(S().visibleColumns, Mn, { instance: f() }).map(function(c) {
            return en(c, W);
          });
        }, [S, Mn, f, W].concat(fn(S().visibleColumnsDeps, [], { instance: f() })));
        Mn = C.useMemo(function() {
          var c = [].concat(Rn);
          return Mn.forEach(function(w) {
            c.find(function(D) {
              return D.id === w.id;
            }) || c.push(w);
          }), c;
        }, [Mn, Rn]), f().allColumns = Mn;
        var Gn = C.useMemo(function() {
          return fn(S().headerGroups, dn(Rn, W), f());
        }, [S, Rn, W, f].concat(fn(S().headerGroupsDeps, [], { instance: f() })));
        f().headerGroups = Gn;
        var r = C.useMemo(function() {
          return Gn.length ? Gn[0].headers : [];
        }, [Gn]);
        f().headers = r, f().flatHeaders = Gn.reduce(function(c, w) {
          return [].concat(c, w.headers);
        }, []), qn(S().useInstanceBeforeDimensions, f());
        var e = Rn.filter(function(c) {
          return c.isVisible;
        }).map(function(c) {
          return c.id;
        }).sort().join("_");
        Rn = C.useMemo(function() {
          return Rn.filter(function(c) {
            return c.isVisible;
          });
        }, [Rn, e]), f().visibleColumns = Rn;
        var u = fr(r), o = u[0], p = u[1], m = u[2];
        return f().totalColumnsMinWidth = o, f().totalColumnsWidth = p, f().totalColumnsMaxWidth = m, qn(S().useInstance, f()), [].concat(f().flatHeaders, f().allColumns).forEach(function(c) {
          c.render = Dn(f(), c), c.getHeaderProps = Cn(S().getHeaderProps, { instance: f(), column: c }), c.getFooterProps = Cn(S().getFooterProps, { instance: f(), column: c });
        }), f().headerGroups = C.useMemo(function() {
          return Gn.filter(function(c, w) {
            return c.headers = c.headers.filter(function(D) {
              return D.headers ? function N(L) {
                return L.filter(function(q) {
                  return q.headers ? N(q.headers) : q.isVisible;
                }).length;
              }(D.headers) : D.isVisible;
            }), !!c.headers.length && (c.getHeaderGroupProps = Cn(S().getHeaderGroupProps, { instance: f(), headerGroup: c, index: w }), c.getFooterGroupProps = Cn(S().getFooterGroupProps, { instance: f(), headerGroup: c, index: w }), !0);
          });
        }, [Gn, f, S]), f().footerGroups = [].concat(f().headerGroups).reverse(), f().prepareRow = C.useCallback(function(c) {
          c.getRowProps = Cn(S().getRowProps, { instance: f(), row: c }), c.allCells = Mn.map(function(w) {
            var D = c.values[w.id], N = { column: w, row: c, value: D };
            return N.getCellProps = Cn(S().getCellProps, { instance: f(), cell: N }), N.render = Dn(f(), w, { row: c, cell: N, value: D }), N;
          }), c.cells = Rn.map(function(w) {
            return c.allCells.find(function(D) {
              return D.column.id === w.id;
            });
          }), qn(S().prepareRow, c, { instance: f() });
        }, [S, f, Mn, Rn]), f().getTableProps = Cn(S().getTableProps, { instance: f() }), f().getTableBodyProps = Cn(S().getTableBodyProps, { instance: f() }), qn(S().useFinalInstance, f()), f();
      }, Object.defineProperty(s, "__esModule", { value: !0 });
    });
  }(bt, bt.exports)), bt.exports;
}
var At = { exports: {} }, jo;
function qu() {
  return jo || (jo = 1, function(t, d) {
    (function(s, C) {
      C(d, A);
    })(ia, function(s, C) {
      C = C && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
      function b(r, e, u, o, p, m, c) {
        try {
          var w = r[m](c), D = w.value;
        } catch (N) {
          u(N);
          return;
        }
        w.done ? e(D) : Promise.resolve(D).then(o, p);
      }
      function P(r) {
        return function() {
          var e = this, u = arguments;
          return new Promise(function(o, p) {
            var m = r.apply(e, u);
            function c(D) {
              b(m, o, p, c, w, "next", D);
            }
            function w(D) {
              b(m, o, p, c, w, "throw", D);
            }
            c(void 0);
          });
        };
      }
      function y() {
        return y = Object.assign || function(r) {
          for (var e = 1; e < arguments.length; e++) {
            var u = arguments[e];
            for (var o in u)
              Object.prototype.hasOwnProperty.call(u, o) && (r[o] = u[o]);
          }
          return r;
        }, y.apply(this, arguments);
      }
      function B(r, e) {
        if (r == null)
          return {};
        var u = {}, o = Object.keys(r), p, m;
        for (m = 0; m < o.length; m++)
          p = o[m], !(e.indexOf(p) >= 0) && (u[p] = r[p]);
        return u;
      }
      function nn(r, e) {
        if (typeof r != "object" || r === null)
          return r;
        var u = r[Symbol.toPrimitive];
        if (u !== void 0) {
          var o = u.call(r, e || "default");
          if (typeof o != "object")
            return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (e === "string" ? String : Number)(r);
      }
      function h(r) {
        var e = nn(r, "string");
        return typeof e == "symbol" ? e : String(e);
      }
      var pn = "Renderer Error ☝️", M = {
        init: "init"
      }, un = function(e) {
        var u = e.value, o = u === void 0 ? "" : u;
        return o;
      }, Nn = function() {
        return C.createElement(C.Fragment, null, " ");
      }, Cn = {
        Cell: un,
        width: 150,
        minWidth: 0,
        maxWidth: Number.MAX_SAFE_INTEGER
      };
      function fn() {
        for (var r = arguments.length, e = new Array(r), u = 0; u < r; u++)
          e[u] = arguments[u];
        return e.reduce(function(o, p) {
          var m = p.style, c = p.className, w = B(p, ["style", "className"]);
          return o = y({}, o, {}, w), m && (o.style = o.style ? y({}, o.style || {}, {}, m || {}) : m), c && (o.className = o.className ? o.className + " " + c : c), o.className === "" && delete o.className, o;
        }, {});
      }
      function qn(r, e, u) {
        return typeof e == "function" ? qn({}, e(r, u)) : Array.isArray(e) ? fn.apply(void 0, [r].concat(e)) : fn(r, e);
      }
      var hn = function(e, u) {
        return u === void 0 && (u = {}), function(o) {
          return o === void 0 && (o = {}), [].concat(e, [o]).reduce(function(p, m) {
            return qn(p, m, y({}, u, {
              userProps: o
            }));
          }, {});
        };
      }, Hn = function(e, u, o, p) {
        return o === void 0 && (o = {}), e.reduce(function(m, c) {
          var w = c(m, o);
          if (!p && typeof w > "u")
            throw console.info(c), new Error("React Table: A reducer hook ☝️ just returned undefined! This is not allowed.");
          return w;
        }, u);
      }, An = function(e, u, o) {
        return o === void 0 && (o = {}), e.forEach(function(p) {
          var m = p(u, o);
          if (typeof m < "u")
            throw console.info(p, m), new Error("React Table: A loop-type hook ☝️ just returned a value! This is not allowed.");
        });
      };
      function Un(r, e, u, o) {
        if (o)
          throw new Error('Defining plugins in the "after" section of ensurePluginOrder is no longer supported (see plugin ' + u + ")");
        var p = r.findIndex(function(m) {
          return m.pluginName === u;
        });
        if (p === -1)
          throw new Error('The plugin "' + u + `" was not found in the plugin list!
This usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:

  ` + u + ".pluginName = '" + u + `'
`);
        e.forEach(function(m) {
          var c = r.findIndex(function(w) {
            return w.pluginName === m;
          });
          if (c > -1 && c > p)
            throw new Error("React Table: The " + u + " plugin hook must be placed after the " + m + " plugin hook!");
        });
      }
      function Wn(r, e) {
        return typeof r == "function" ? r(e) : r;
      }
      function Dn(r) {
        var e = C.useRef();
        return e.current = r, C.useCallback(function() {
          return e.current;
        }, []);
      }
      var tr = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
      function Kn(r, e) {
        var u = C.useRef(!1);
        tr(function() {
          u.current && r(), u.current = !0;
        }, e);
      }
      function Cr(r, e) {
        e === void 0 && (e = 0);
        var u = C.useRef({}), o = Dn(r), p = Dn(e);
        return C.useCallback(
          /* @__PURE__ */ function() {
            var m = P(
              /* @__PURE__ */ regeneratorRuntime.mark(function c() {
                var w, D, N, L = arguments;
                return regeneratorRuntime.wrap(function(O) {
                  for (; ; )
                    switch (O.prev = O.next) {
                      case 0:
                        for (w = L.length, D = new Array(w), N = 0; N < w; N++)
                          D[N] = L[N];
                        return u.current.promise || (u.current.promise = new Promise(function(G, _) {
                          u.current.resolve = G, u.current.reject = _;
                        })), u.current.timeout && clearTimeout(u.current.timeout), u.current.timeout = setTimeout(
                          /* @__PURE__ */ P(
                            /* @__PURE__ */ regeneratorRuntime.mark(function G() {
                              return regeneratorRuntime.wrap(function(E) {
                                for (; ; )
                                  switch (E.prev = E.next) {
                                    case 0:
                                      return delete u.current.timeout, E.prev = 1, E.t0 = u.current, E.next = 5, o().apply(void 0, D);
                                    case 5:
                                      E.t1 = E.sent, E.t0.resolve.call(E.t0, E.t1), E.next = 12;
                                      break;
                                    case 9:
                                      E.prev = 9, E.t2 = E.catch(1), u.current.reject(E.t2);
                                    case 12:
                                      return E.prev = 12, delete u.current.promise, E.finish(12);
                                    case 15:
                                    case "end":
                                      return E.stop();
                                  }
                              }, G, null, [[1, 9, 12, 15]]);
                            })
                          ),
                          p()
                        ), O.abrupt("return", u.current.promise);
                      case 5:
                      case "end":
                        return O.stop();
                    }
                }, c);
              })
            );
            return function() {
              return m.apply(this, arguments);
            };
          }(),
          [o, p]
        );
      }
      function Qn(r, e, u) {
        return u === void 0 && (u = {}), function(o, p) {
          p === void 0 && (p = {});
          var m = typeof o == "string" ? e[o] : o;
          if (typeof m > "u")
            throw console.info(e), new Error(pn);
          return en(m, y({}, r, {
            column: e
          }, u, {}, p));
        };
      }
      function en(r, e) {
        return dn(r) ? C.createElement(r, e) : r;
      }
      function dn(r) {
        return zn(r) || typeof r == "function" || Xn(r);
      }
      function zn(r) {
        return typeof r == "function" && function() {
          var e = Object.getPrototypeOf(r);
          return e.prototype && e.prototype.isReactComponent;
        }();
      }
      function Xn(r) {
        return typeof r == "object" && typeof r.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(r.$$typeof.description);
      }
      function Jn(r, e, u) {
        return u === void 0 && (u = 0), r.map(function(o) {
          return o = y({}, o, {
            parent: e,
            depth: u
          }), Rr(o), o.columns && (o.columns = Jn(o.columns, o, u + 1)), o;
        });
      }
      function Pr(r) {
        return Br(r, "columns");
      }
      function Rr(r) {
        var e = r.id, u = r.accessor, o = r.Header;
        if (typeof u == "string") {
          e = e || u;
          var p = u.split(".");
          u = function(c) {
            return gr(c, p);
          };
        }
        if (!e && typeof o == "string" && o && (e = o), !e && r.columns)
          throw console.error(r), new Error('A column ID (or unique "Header" value) is required!');
        if (!e)
          throw console.error(r), new Error("A column ID (or string accessor) is required!");
        return Object.assign(r, {
          id: e,
          accessor: u
        }), r;
      }
      function Mr(r, e) {
        if (!e)
          throw new Error();
        return Object.assign(r, y({
          // Make sure there is a fallback header, just in case
          Header: Nn,
          Footer: Nn
        }, Cn, {}, e, {}, r)), Object.assign(r, {
          originalWidth: r.width
        }), r;
      }
      function Ir(r, e, u) {
        u === void 0 && (u = function() {
          return {};
        });
        for (var o = [], p = r, m = 0, c = function() {
          return m++;
        }, w = function() {
          var N = {
            headers: []
          }, L = [], q = p.some(function(O) {
            return O.parent;
          });
          p.forEach(function(O) {
            var G = [].concat(L).reverse()[0], _;
            if (q) {
              if (O.parent)
                _ = y({}, O.parent, {
                  originalId: O.parent.id,
                  id: O.parent.id + "_" + c(),
                  headers: [O]
                }, u(O));
              else {
                var E = O.id + "_placeholder";
                _ = Mr(y({
                  originalId: E,
                  id: O.id + "_placeholder_" + c(),
                  placeholderOf: O,
                  headers: [O]
                }, u(O)), e);
              }
              G && G.originalId === _.originalId ? G.headers.push(O) : L.push(_);
            }
            N.headers.push(O);
          }), o.push(N), p = L;
        }; p.length; )
          w();
        return o.reverse();
      }
      var dr = /* @__PURE__ */ new Map();
      function gr(r, e, u) {
        if (!e)
          return r;
        var o = typeof e == "function" ? e : JSON.stringify(e), p = dr.get(o) || function() {
          var c = br(e);
          return dr.set(o, c), c;
        }(), m;
        try {
          m = p.reduce(function(c, w) {
            return c[w];
          }, r);
        } catch {
        }
        return typeof m < "u" ? m : u;
      }
      function or() {
        for (var r = arguments.length, e = new Array(r), u = 0; u < r; u++)
          e[u] = arguments[u];
        for (var o = 0; o < e.length; o += 1)
          if (typeof e[o] < "u")
            return e[o];
      }
      function Or(r) {
        if (typeof r == "function")
          return r;
      }
      function Br(r, e) {
        var u = [], o = function p(m) {
          m.forEach(function(c) {
            c[e] ? p(c[e]) : u.push(c);
          });
        };
        return o(r), u;
      }
      function F(r, e) {
        var u = e.manualExpandedKey, o = e.expanded, p = e.expandSubRows, m = p === void 0 ? !0 : p, c = [], w = function D(N, L) {
          L === void 0 && (L = !0), N.isExpanded = N.original && N.original[u] || o[N.id], N.canExpand = N.subRows && !!N.subRows.length, L && c.push(N), N.subRows && N.subRows.length && N.isExpanded && N.subRows.forEach(function(q) {
            return D(q, m);
          });
        };
        return r.forEach(function(D) {
          return w(D);
        }), c;
      }
      function z(r, e, u) {
        return Or(r) || e[r] || u[r] || u.text;
      }
      function an(r, e, u) {
        return r ? r(e, u) : typeof e > "u";
      }
      function tn() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var Fn = null;
      function Yn() {
        if (typeof Fn == "boolean")
          return Fn;
        var r = !1;
        try {
          var e = {
            get passive() {
              return r = !0, !1;
            }
          };
          window.addEventListener("test", null, e), window.removeEventListener("test", null, e);
        } catch {
          r = !1;
        }
        return Fn = r, Fn;
      }
      var Sr = /\[/g, Nr = /\]/g;
      function br(r) {
        return Ar(r).map(function(e) {
          return String(e).replace(".", "_");
        }).join(".").replace(Sr, ".").replace(Nr, "").split(".");
      }
      function Ar(r, e) {
        if (e === void 0 && (e = []), !Array.isArray(r))
          e.push(r);
        else
          for (var u = 0; u < r.length; u += 1)
            Ar(r[u], e);
        return e;
      }
      var Lr = function(e) {
        return y({
          role: "table"
        }, e);
      }, _r = function(e) {
        return y({
          role: "rowgroup"
        }, e);
      }, pr = function(e, u) {
        var o = u.column;
        return y({
          key: "header_" + o.id,
          colSpan: o.totalVisibleHeaderCount,
          role: "columnheader"
        }, e);
      }, cr = function(e, u) {
        var o = u.column;
        return y({
          key: "footer_" + o.id,
          colSpan: o.totalVisibleHeaderCount
        }, e);
      }, mr = function(e, u) {
        var o = u.index;
        return y({
          key: "headerGroup_" + o,
          role: "row"
        }, e);
      }, vr = function(e, u) {
        var o = u.index;
        return y({
          key: "footerGroup_" + o
        }, e);
      }, Xr = function(e, u) {
        var o = u.row;
        return y({
          key: "row_" + o.id,
          role: "row"
        }, e);
      }, Q = function(e, u) {
        var o = u.cell;
        return y({
          key: "cell_" + o.row.id + "_" + o.column.id,
          role: "cell"
        }, e);
      };
      function In() {
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
          getTableProps: [Lr],
          getTableBodyProps: [_r],
          getHeaderGroupProps: [mr],
          getFooterGroupProps: [vr],
          getHeaderProps: [pr],
          getFooterProps: [cr],
          getRowProps: [Xr],
          getCellProps: [Q],
          useFinalInstance: []
        };
      }
      M.resetHiddenColumns = "resetHiddenColumns", M.toggleHideColumn = "toggleHideColumn", M.setHiddenColumns = "setHiddenColumns", M.toggleHideAllColumns = "toggleHideAllColumns";
      var rr = function(e) {
        e.getToggleHiddenProps = [ur], e.getToggleHideAllColumnsProps = [fr], e.stateReducers.push(Fr), e.useInstanceBeforeDimensions.push(Tr), e.headerGroupsDeps.push(function(u, o) {
          var p = o.instance;
          return [].concat(u, [p.state.hiddenColumns]);
        }), e.useInstance.push(Yr);
      };
      rr.pluginName = "useColumnVisibility";
      var ur = function(e, u) {
        var o = u.column;
        return [e, {
          onChange: function(m) {
            o.toggleHidden(!m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: o.isVisible,
          title: "Toggle Column Visible"
        }];
      }, fr = function(e, u) {
        var o = u.instance;
        return [e, {
          onChange: function(m) {
            o.toggleHideAllColumns(!m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: !o.allColumnsHidden && !o.state.hiddenColumns.length,
          title: "Toggle All Columns Hidden",
          indeterminate: !o.allColumnsHidden && o.state.hiddenColumns.length
        }];
      };
      function Fr(r, e, u, o) {
        if (e.type === M.init)
          return y({
            hiddenColumns: []
          }, r);
        if (e.type === M.resetHiddenColumns)
          return y({}, r, {
            hiddenColumns: o.initialState.hiddenColumns || []
          });
        if (e.type === M.toggleHideColumn) {
          var p = typeof e.value < "u" ? e.value : !r.hiddenColumns.includes(e.columnId), m = p ? [].concat(r.hiddenColumns, [e.columnId]) : r.hiddenColumns.filter(function(w) {
            return w !== e.columnId;
          });
          return y({}, r, {
            hiddenColumns: m
          });
        }
        if (e.type === M.setHiddenColumns)
          return y({}, r, {
            hiddenColumns: Wn(e.value, r.hiddenColumns)
          });
        if (e.type === M.toggleHideAllColumns) {
          var c = typeof e.value < "u" ? e.value : !r.hiddenColumns.length;
          return y({}, r, {
            hiddenColumns: c ? o.allColumns.map(function(w) {
              return w.id;
            }) : []
          });
        }
      }
      function Tr(r) {
        var e = r.headers, u = r.state.hiddenColumns, o = C.useRef(!1);
        o.current;
        var p = function c(w, D) {
          w.isVisible = D && !u.includes(w.id);
          var N = 0;
          return w.headers && w.headers.length ? w.headers.forEach(function(L) {
            return N += c(L, w.isVisible);
          }) : N = w.isVisible ? 1 : 0, w.totalVisibleHeaderCount = N, N;
        }, m = 0;
        e.forEach(function(c) {
          return m += p(c, !0);
        });
      }
      function Yr(r) {
        var e = r.columns, u = r.flatHeaders, o = r.dispatch, p = r.allColumns, m = r.getHooks, c = r.state.hiddenColumns, w = r.autoResetHiddenColumns, D = w === void 0 ? !0 : w, N = Dn(r), L = p.length === c.length, q = C.useCallback(function(Z, yn) {
          return o({
            type: M.toggleHideColumn,
            columnId: Z,
            value: yn
          });
        }, [o]), O = C.useCallback(function(Z) {
          return o({
            type: M.setHiddenColumns,
            value: Z
          });
        }, [o]), G = C.useCallback(function(Z) {
          return o({
            type: M.toggleHideAllColumns,
            value: Z
          });
        }, [o]), _ = hn(m().getToggleHideAllColumnsProps, {
          instance: N()
        });
        u.forEach(function(Z) {
          Z.toggleHidden = function(yn) {
            o({
              type: M.toggleHideColumn,
              columnId: Z.id,
              value: yn
            });
          }, Z.getToggleHiddenProps = hn(m().getToggleHiddenProps, {
            instance: N(),
            column: Z
          });
        });
        var E = Dn(D);
        Kn(function() {
          E() && o({
            type: M.resetHiddenColumns
          });
        }, [o, e]), Object.assign(r, {
          allColumnsHidden: L,
          toggleHideColumn: q,
          setHiddenColumns: O,
          toggleHideAllColumns: G,
          getToggleHideAllColumnsProps: _
        });
      }
      var jr = {}, Ur = {}, Wr = function(e, u, o) {
        return e;
      }, Jr = function(e, u) {
        return e.subRows || [];
      }, xr = function(e, u, o) {
        return "" + (o ? [o.id, u].join(".") : u);
      }, Gr = function(e) {
        return e;
      };
      function Hr(r) {
        var e = r.initialState, u = e === void 0 ? jr : e, o = r.defaultColumn, p = o === void 0 ? Ur : o, m = r.getSubRows, c = m === void 0 ? Jr : m, w = r.getRowId, D = w === void 0 ? xr : w, N = r.stateReducer, L = N === void 0 ? Wr : N, q = r.useControlledState, O = q === void 0 ? Gr : q, G = B(r, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);
        return y({}, G, {
          initialState: u,
          defaultColumn: p,
          getSubRows: c,
          getRowId: D,
          stateReducer: L,
          useControlledState: O
        });
      }
      var oe = function(e) {
        for (var u = arguments.length, o = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++)
          o[p - 1] = arguments[p];
        e = Hr(e), o = [rr].concat(o);
        var m = C.useRef({}), c = Dn(m.current);
        Object.assign(c(), y({}, e, {
          plugins: o,
          hooks: In()
        })), o.filter(Boolean).forEach(function(mn) {
          mn(c().hooks);
        });
        var w = Dn(c().hooks);
        c().getHooks = w, delete c().hooks, Object.assign(c(), Hn(w().useOptions, Hr(e)));
        var D = c(), N = D.data, L = D.columns, q = D.initialState, O = D.defaultColumn, G = D.getSubRows, _ = D.getRowId, E = D.stateReducer, Z = D.useControlledState, yn = Dn(E), vn = C.useCallback(function(mn, $n) {
          if (!$n.type)
            throw console.info({
              action: $n
            }), new Error("Unknown Action 👆");
          return [].concat(w().stateReducers, Array.isArray(yn()) ? yn() : [yn()]).reduce(function(ar, hr) {
            return hr(ar, $n, mn, c()) || ar;
          }, mn);
        }, [w, yn, c]), j = C.useReducer(vn, void 0, function() {
          return vn(q, {
            type: M.init
          });
        }), Pn = j[0], Bn = j[1], J = Hn([].concat(w().useControlledState, [Z]), Pn, {
          instance: c()
        });
        Object.assign(c(), {
          state: J,
          dispatch: Bn
        });
        var Y = C.useMemo(function() {
          return Jn(Hn(w().columns, L, {
            instance: c()
          }));
        }, [w, c, L].concat(Hn(w().columnsDeps, [], {
          instance: c()
        })));
        c().columns = Y;
        var $ = C.useMemo(function() {
          return Hn(w().allColumns, Pr(Y), {
            instance: c()
          }).map(Rr);
        }, [Y, w, c].concat(Hn(w().allColumnsDeps, [], {
          instance: c()
        })));
        c().allColumns = $;
        var cn = C.useMemo(function() {
          for (var mn = [], $n = [], ar = {}, hr = [].concat($); hr.length; ) {
            var lr = hr.shift();
            Be({
              data: N,
              rows: mn,
              flatRows: $n,
              rowsById: ar,
              column: lr,
              getRowId: _,
              getSubRows: G,
              accessValueHooks: w().accessValue,
              getInstance: c
            });
          }
          return [mn, $n, ar];
        }, [$, N, _, G, w, c]), kn = cn[0], En = cn[1], _n = cn[2];
        Object.assign(c(), {
          rows: kn,
          initialRows: [].concat(kn),
          flatRows: En,
          rowsById: _n
          // materializedColumns,
        }), An(w().useInstanceAfterData, c());
        var on = C.useMemo(function() {
          return Hn(w().visibleColumns, $, {
            instance: c()
          }).map(function(mn) {
            return Mr(mn, O);
          });
        }, [w, $, c, O].concat(Hn(w().visibleColumnsDeps, [], {
          instance: c()
        })));
        $ = C.useMemo(function() {
          var mn = [].concat(on);
          return $.forEach(function($n) {
            mn.find(function(ar) {
              return ar.id === $n.id;
            }) || mn.push($n);
          }), mn;
        }, [$, on]), c().allColumns = $;
        {
          var ir = $.filter(function(mn, $n) {
            return $.findIndex(function(ar) {
              return ar.id === mn.id;
            }) !== $n;
          });
          if (ir.length)
            throw console.info($), new Error('Duplicate columns were found with ids: "' + ir.map(function(mn) {
              return mn.id;
            }).join(", ") + '" in the columns array above');
        }
        var On = C.useMemo(function() {
          return Hn(w().headerGroups, Ir(on, O), c());
        }, [w, on, O, c].concat(Hn(w().headerGroupsDeps, [], {
          instance: c()
        })));
        c().headerGroups = On;
        var wn = C.useMemo(function() {
          return On.length ? On[0].headers : [];
        }, [On]);
        c().headers = wn, c().flatHeaders = On.reduce(function(mn, $n) {
          return [].concat(mn, $n.headers);
        }, []), An(w().useInstanceBeforeDimensions, c());
        var bn = on.filter(function(mn) {
          return mn.isVisible;
        }).map(function(mn) {
          return mn.id;
        }).sort().join("_");
        on = C.useMemo(
          function() {
            return on.filter(function(mn) {
              return mn.isVisible;
            });
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [on, bn]
        ), c().visibleColumns = on;
        var jn = de(wn), sr = jn[0], re = jn[1], Pe = jn[2];
        return c().totalColumnsMinWidth = sr, c().totalColumnsWidth = re, c().totalColumnsMaxWidth = Pe, An(w().useInstance, c()), [].concat(c().flatHeaders, c().allColumns).forEach(function(mn) {
          mn.render = Qn(c(), mn), mn.getHeaderProps = hn(w().getHeaderProps, {
            instance: c(),
            column: mn
          }), mn.getFooterProps = hn(w().getFooterProps, {
            instance: c(),
            column: mn
          });
        }), c().headerGroups = C.useMemo(function() {
          return On.filter(function(mn, $n) {
            return mn.headers = mn.headers.filter(function(ar) {
              var hr = function lr(Vr) {
                return Vr.filter(function(yr) {
                  return yr.headers ? lr(yr.headers) : yr.isVisible;
                }).length;
              };
              return ar.headers ? hr(ar.headers) : ar.isVisible;
            }), mn.headers.length ? (mn.getHeaderGroupProps = hn(w().getHeaderGroupProps, {
              instance: c(),
              headerGroup: mn,
              index: $n
            }), mn.getFooterGroupProps = hn(w().getFooterGroupProps, {
              instance: c(),
              headerGroup: mn,
              index: $n
            }), !0) : !1;
          });
        }, [On, c, w]), c().footerGroups = [].concat(c().headerGroups).reverse(), c().prepareRow = C.useCallback(function(mn) {
          mn.getRowProps = hn(w().getRowProps, {
            instance: c(),
            row: mn
          }), mn.allCells = $.map(function($n) {
            var ar = mn.values[$n.id], hr = {
              column: $n,
              row: mn,
              value: ar
            };
            return hr.getCellProps = hn(w().getCellProps, {
              instance: c(),
              cell: hr
            }), hr.render = Qn(c(), $n, {
              row: mn,
              cell: hr,
              value: ar
            }), hr;
          }), mn.cells = on.map(function($n) {
            return mn.allCells.find(function(ar) {
              return ar.column.id === $n.id;
            });
          }), An(w().prepareRow, mn, {
            instance: c()
          });
        }, [w, c, $, on]), c().getTableProps = hn(w().getTableProps, {
          instance: c()
        }), c().getTableBodyProps = hn(w().getTableBodyProps, {
          instance: c()
        }), An(w().useFinalInstance, c()), c();
      };
      function de(r, e) {
        e === void 0 && (e = 0);
        var u = 0, o = 0, p = 0, m = 0;
        return r.forEach(function(c) {
          var w = c.headers;
          if (c.totalLeft = e, w && w.length) {
            var D = de(w, e), N = D[0], L = D[1], q = D[2], O = D[3];
            c.totalMinWidth = N, c.totalWidth = L, c.totalMaxWidth = q, c.totalFlexWidth = O;
          } else
            c.totalMinWidth = c.minWidth, c.totalWidth = Math.min(Math.max(c.minWidth, c.width), c.maxWidth), c.totalMaxWidth = c.maxWidth, c.totalFlexWidth = c.canResize ? c.totalWidth : 0;
          c.isVisible && (e += c.totalWidth, u += c.totalMinWidth, o += c.totalWidth, p += c.totalMaxWidth, m += c.totalFlexWidth);
        }), [u, o, p, m];
      }
      function Be(r) {
        var e = r.data, u = r.rows, o = r.flatRows, p = r.rowsById, m = r.column, c = r.getRowId, w = r.getSubRows, D = r.accessValueHooks, N = r.getInstance, L = function q(O, G, _, E, Z) {
          _ === void 0 && (_ = 0);
          var yn = O, vn = c(O, G, E), j = p[vn];
          if (j)
            j.subRows && j.originalSubRows.forEach(function(Bn, J) {
              return q(Bn, J, _ + 1, j);
            });
          else if (j = {
            id: vn,
            original: yn,
            index: G,
            depth: _,
            cells: [{}]
            // This is a dummy cell
          }, j.cells.map = tn, j.cells.filter = tn, j.cells.forEach = tn, j.cells[0].getCellProps = tn, j.values = {}, Z.push(j), o.push(j), p[vn] = j, j.originalSubRows = w(O, G), j.originalSubRows) {
            var Pn = [];
            j.originalSubRows.forEach(function(Bn, J) {
              return q(Bn, J, _ + 1, j, Pn);
            }), j.subRows = Pn;
          }
          m.accessor && (j.values[m.id] = m.accessor(O, G, j, Z, e)), j.values[m.id] = Hn(D, j.values[m.id], {
            row: j,
            column: m,
            instance: N()
          }, !0);
        };
        e.forEach(function(q, O) {
          return L(q, O, 0, void 0, u);
        });
      }
      M.resetExpanded = "resetExpanded", M.toggleRowExpanded = "toggleRowExpanded", M.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var pe = function(e) {
        e.getToggleAllRowsExpandedProps = [Fe], e.getToggleRowExpandedProps = [He], e.stateReducers.push(We), e.useInstance.push($r), e.prepareRow.push(xe);
      };
      pe.pluginName = "useExpanded";
      var Fe = function(e, u) {
        var o = u.instance;
        return [e, {
          onClick: function(m) {
            o.toggleAllRowsExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle All Rows Expanded"
        }];
      }, He = function(e, u) {
        var o = u.row;
        return [e, {
          onClick: function() {
            o.toggleRowExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle Row Expanded"
        }];
      };
      function We(r, e, u, o) {
        if (e.type === M.init)
          return y({
            expanded: {}
          }, r);
        if (e.type === M.resetExpanded)
          return y({}, r, {
            expanded: o.initialState.expanded || {}
          });
        if (e.type === M.toggleAllRowsExpanded) {
          var p = e.value, m = o.rowsById, c = Object.keys(m).length === Object.keys(r.expanded).length, w = typeof p < "u" ? p : !c;
          if (w) {
            var D = {};
            return Object.keys(m).forEach(function(Z) {
              D[Z] = !0;
            }), y({}, r, {
              expanded: D
            });
          }
          return y({}, r, {
            expanded: {}
          });
        }
        if (e.type === M.toggleRowExpanded) {
          var N = e.id, L = e.value, q = r.expanded[N], O = typeof L < "u" ? L : !q;
          if (!q && O) {
            var G;
            return y({}, r, {
              expanded: y({}, r.expanded, (G = {}, G[N] = !0, G))
            });
          } else if (q && !O) {
            var _ = r.expanded;
            _[N];
            var E = B(_, [N].map(h));
            return y({}, r, {
              expanded: E
            });
          } else
            return r;
        }
      }
      function $r(r) {
        var e = r.data, u = r.rows, o = r.rowsById, p = r.manualExpandedKey, m = p === void 0 ? "expanded" : p, c = r.paginateExpandedRows, w = c === void 0 ? !0 : c, D = r.expandSubRows, N = D === void 0 ? !0 : D, L = r.autoResetExpanded, q = L === void 0 ? !0 : L, O = r.getHooks, G = r.plugins, _ = r.state.expanded, E = r.dispatch;
        Un(G, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var Z = Dn(q), yn = !!(Object.keys(o).length && Object.keys(_).length);
        yn && Object.keys(o).some(function($) {
          return !_[$];
        }) && (yn = !1), Kn(function() {
          Z() && E({
            type: M.resetExpanded
          });
        }, [E, e]);
        var vn = C.useCallback(function($, cn) {
          E({
            type: M.toggleRowExpanded,
            id: $,
            value: cn
          });
        }, [E]), j = C.useCallback(function($) {
          return E({
            type: M.toggleAllRowsExpanded,
            value: $
          });
        }, [E]), Pn = C.useMemo(function() {
          return w ? F(u, {
            manualExpandedKey: m,
            expanded: _,
            expandSubRows: N
          }) : u;
        }, [w, u, m, _, N]), Bn = C.useMemo(function() {
          return Lt(_);
        }, [_]), J = Dn(r), Y = hn(O().getToggleAllRowsExpandedProps, {
          instance: J()
        });
        Object.assign(r, {
          preExpandedRows: u,
          expandedRows: Pn,
          rows: Pn,
          expandedDepth: Bn,
          isAllRowsExpanded: yn,
          toggleRowExpanded: vn,
          toggleAllRowsExpanded: j,
          getToggleAllRowsExpandedProps: Y
        });
      }
      function xe(r, e) {
        var u = e.instance.getHooks, o = e.instance;
        r.toggleRowExpanded = function(p) {
          return o.toggleRowExpanded(r.id, p);
        }, r.getToggleRowExpandedProps = hn(u().getToggleRowExpandedProps, {
          instance: o,
          row: r
        });
      }
      function Lt(r) {
        var e = 0;
        return Object.keys(r).forEach(function(u) {
          var o = u.split(".");
          e = Math.max(e, o.length);
        }), e;
      }
      var Ge = function(e, u, o) {
        return e = e.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return String(c).toLowerCase().includes(String(o).toLowerCase());
          });
        }), e;
      };
      Ge.autoRemove = function(r) {
        return !r;
      };
      var fe = function(e, u, o) {
        return e.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return c !== void 0 ? String(c).toLowerCase() === String(o).toLowerCase() : !0;
          });
        });
      };
      fe.autoRemove = function(r) {
        return !r;
      };
      var Ve = function(e, u, o) {
        return e.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return c !== void 0 ? String(c) === String(o) : !0;
          });
        });
      };
      Ve.autoRemove = function(r) {
        return !r;
      };
      var Ke = function(e, u, o) {
        return e.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return c.includes(o);
          });
        });
      };
      Ke.autoRemove = function(r) {
        return !r || !r.length;
      };
      var ge = function(e, u, o) {
        return e.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return c && c.length && o.every(function(w) {
              return c.includes(w);
            });
          });
        });
      };
      ge.autoRemove = function(r) {
        return !r || !r.length;
      };
      var me = function(e, u, o) {
        return e.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return c && c.length && o.some(function(w) {
              return c.includes(w);
            });
          });
        });
      };
      me.autoRemove = function(r) {
        return !r || !r.length;
      };
      var qe = function(e, u, o) {
        return e.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return o.includes(c);
          });
        });
      };
      qe.autoRemove = function(r) {
        return !r || !r.length;
      };
      var ze = function(e, u, o) {
        return e.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return c === o;
          });
        });
      };
      ze.autoRemove = function(r) {
        return typeof r > "u";
      };
      var ve = function(e, u, o) {
        return e.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return c == o;
          });
        });
      };
      ve.autoRemove = function(r) {
        return r == null;
      };
      var _e = function(e, u, o) {
        var p = o || [], m = p[0], c = p[1];
        if (m = typeof m == "number" ? m : -1 / 0, c = typeof c == "number" ? c : 1 / 0, m > c) {
          var w = m;
          m = c, c = w;
        }
        return e.filter(function(D) {
          return u.some(function(N) {
            var L = D.values[N];
            return L >= m && L <= c;
          });
        });
      };
      _e.autoRemove = function(r) {
        return !r || typeof r[0] != "number" && typeof r[1] != "number";
      };
      var Zr = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        text: Ge,
        exactText: fe,
        exactTextCase: Ve,
        includes: Ke,
        includesAll: ge,
        includesSome: me,
        includesValue: qe,
        exact: ze,
        equals: ve,
        between: _e
      });
      M.resetFilters = "resetFilters", M.setFilter = "setFilter", M.setAllFilters = "setAllFilters";
      var Xe = function(e) {
        e.stateReducers.push(kt), e.useInstance.push(Et);
      };
      Xe.pluginName = "useFilters";
      function kt(r, e, u, o) {
        if (e.type === M.init)
          return y({
            filters: []
          }, r);
        if (e.type === M.resetFilters)
          return y({}, r, {
            filters: o.initialState.filters || []
          });
        if (e.type === M.setFilter) {
          var p = e.columnId, m = e.filterValue, c = o.allColumns, w = o.filterTypes, D = c.find(function(E) {
            return E.id === p;
          });
          if (!D)
            throw new Error("React-Table: Could not find a column with id: " + p);
          var N = z(D.filter, w || {}, Zr), L = r.filters.find(function(E) {
            return E.id === p;
          }), q = Wn(m, L && L.value);
          return an(N.autoRemove, q, D) ? y({}, r, {
            filters: r.filters.filter(function(E) {
              return E.id !== p;
            })
          }) : L ? y({}, r, {
            filters: r.filters.map(function(E) {
              return E.id === p ? {
                id: p,
                value: q
              } : E;
            })
          }) : y({}, r, {
            filters: [].concat(r.filters, [{
              id: p,
              value: q
            }])
          });
        }
        if (e.type === M.setAllFilters) {
          var O = e.filters, G = o.allColumns, _ = o.filterTypes;
          return y({}, r, {
            // Filter out undefined values
            filters: Wn(O, r.filters).filter(function(E) {
              var Z = G.find(function(vn) {
                return vn.id === E.id;
              }), yn = z(Z.filter, _ || {}, Zr);
              return !an(yn.autoRemove, E.value, Z);
            })
          });
        }
      }
      function Et(r) {
        var e = r.data, u = r.rows, o = r.flatRows, p = r.rowsById, m = r.allColumns, c = r.filterTypes, w = r.manualFilters, D = r.defaultCanFilter, N = D === void 0 ? !1 : D, L = r.disableFilters, q = r.state.filters, O = r.dispatch, G = r.autoResetFilters, _ = G === void 0 ? !0 : G, E = C.useCallback(function(J, Y) {
          O({
            type: M.setFilter,
            columnId: J,
            filterValue: Y
          });
        }, [O]), Z = C.useCallback(function(J) {
          O({
            type: M.setAllFilters,
            filters: J
          });
        }, [O]);
        m.forEach(function(J) {
          var Y = J.id, $ = J.accessor, cn = J.defaultCanFilter, kn = J.disableFilters;
          J.canFilter = $ ? or(kn === !0 ? !1 : void 0, L === !0 ? !1 : void 0, !0) : or(cn, N, !1), J.setFilter = function(_n) {
            return E(J.id, _n);
          };
          var En = q.find(function(_n) {
            return _n.id === Y;
          });
          J.filterValue = En && En.value;
        });
        var yn = C.useMemo(function() {
          if (w || !q.length)
            return [u, o, p];
          var J = [], Y = {}, $ = function cn(kn, En) {
            En === void 0 && (En = 0);
            var _n = kn;
            return _n = q.reduce(function(on, ir) {
              var On = ir.id, wn = ir.value, bn = m.find(function(sr) {
                return sr.id === On;
              });
              if (!bn)
                return on;
              En === 0 && (bn.preFilteredRows = on);
              var jn = z(bn.filter, c || {}, Zr);
              return jn ? (bn.filteredRows = jn(on, [On], wn), bn.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + bn.id + "."), on);
            }, kn), _n.forEach(function(on) {
              J.push(on), Y[on.id] = on, on.subRows && (on.subRows = on.subRows && on.subRows.length > 0 ? cn(on.subRows, En + 1) : on.subRows);
            }), _n;
          };
          return [$(u), J, Y];
        }, [w, q, u, o, p, m, c]), vn = yn[0], j = yn[1], Pn = yn[2];
        C.useMemo(function() {
          var J = m.filter(function(Y) {
            return !q.find(function($) {
              return $.id === Y.id;
            });
          });
          J.forEach(function(Y) {
            Y.preFilteredRows = vn, Y.filteredRows = vn;
          });
        }, [vn, q, m]);
        var Bn = Dn(_);
        Kn(function() {
          Bn() && O({
            type: M.resetFilters
          });
        }, [O, w ? null : e]), Object.assign(r, {
          preFilteredRows: u,
          preFilteredFlatRows: o,
          preFilteredRowsById: p,
          filteredRows: vn,
          filteredFlatRows: j,
          filteredRowsById: Pn,
          rows: vn,
          flatRows: j,
          rowsById: Pn,
          setFilter: E,
          setAllFilters: Z
        });
      }
      M.resetGlobalFilter = "resetGlobalFilter", M.setGlobalFilter = "setGlobalFilter";
      var Ye = function(e) {
        e.stateReducers.push(je), e.useInstance.push(Ue);
      };
      Ye.pluginName = "useGlobalFilter";
      function je(r, e, u, o) {
        if (e.type === M.resetGlobalFilter)
          return y({}, r, {
            globalFilter: o.initialState.globalFilter || void 0
          });
        if (e.type === M.setGlobalFilter) {
          var p = e.filterValue, m = o.userFilterTypes, c = z(o.globalFilter, m || {}, Zr), w = Wn(p, r.globalFilter);
          if (an(c.autoRemove, w)) {
            r.globalFilter;
            var D = B(r, ["globalFilter"]);
            return D;
          }
          return y({}, r, {
            globalFilter: w
          });
        }
      }
      function Ue(r) {
        var e = r.data, u = r.rows, o = r.flatRows, p = r.rowsById, m = r.allColumns, c = r.filterTypes, w = r.globalFilter, D = r.manualGlobalFilter, N = r.state.globalFilter, L = r.dispatch, q = r.autoResetGlobalFilter, O = q === void 0 ? !0 : q, G = r.disableGlobalFilter, _ = C.useCallback(function(Pn) {
          L({
            type: M.setGlobalFilter,
            filterValue: Pn
          });
        }, [L]), E = C.useMemo(function() {
          if (D || typeof N > "u")
            return [u, o, p];
          var Pn = [], Bn = {}, J = z(w, c || {}, Zr);
          if (!J)
            return console.warn("Could not find a valid 'globalFilter' option."), u;
          m.forEach(function(cn) {
            var kn = cn.disableGlobalFilter;
            cn.canFilter = or(kn === !0 ? !1 : void 0, G === !0 ? !1 : void 0, !0);
          });
          var Y = m.filter(function(cn) {
            return cn.canFilter === !0;
          }), $ = function cn(kn) {
            return kn = J(kn, Y.map(function(En) {
              return En.id;
            }), N), kn.forEach(function(En) {
              Pn.push(En), Bn[En.id] = En, En.subRows = En.subRows && En.subRows.length ? cn(En.subRows) : En.subRows;
            }), kn;
          };
          return [$(u), Pn, Bn];
        }, [D, N, w, c, m, u, o, p, G]), Z = E[0], yn = E[1], vn = E[2], j = Dn(O);
        Kn(function() {
          j() && L({
            type: M.resetGlobalFilter
          });
        }, [L, D ? null : e]), Object.assign(r, {
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
          disableGlobalFilter: G
        });
      }
      function ae(r, e) {
        return e.reduce(function(u, o) {
          return u + (typeof o == "number" ? o : 0);
        }, 0);
      }
      function Qr(r) {
        var e = r[0] || 0;
        return r.forEach(function(u) {
          typeof u == "number" && (e = Math.min(e, u));
        }), e;
      }
      function Je(r) {
        var e = r[0] || 0;
        return r.forEach(function(u) {
          typeof u == "number" && (e = Math.max(e, u));
        }), e;
      }
      function Ot(r) {
        var e = r[0] || 0, u = r[0] || 0;
        return r.forEach(function(o) {
          typeof o == "number" && (e = Math.min(e, o), u = Math.max(u, o));
        }), e + ".." + u;
      }
      function $e(r) {
        return ae(null, r) / r.length;
      }
      function Bt(r) {
        if (!r.length)
          return null;
        var e = Math.floor(r.length / 2), u = [].concat(r).sort(function(o, p) {
          return o - p;
        });
        return r.length % 2 !== 0 ? u[e] : (u[e - 1] + u[e]) / 2;
      }
      function Ft(r) {
        return Array.from(new Set(r).values());
      }
      function Ht(r) {
        return new Set(r).size;
      }
      function Ze(r) {
        return r.length;
      }
      var he = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        sum: ae,
        min: Qr,
        max: Je,
        minMax: Ot,
        average: $e,
        median: Bt,
        unique: Ft,
        uniqueCount: Ht,
        count: Ze
      }), Wt = [], xt = {};
      M.resetGroupBy = "resetGroupBy", M.setGroupBy = "setGroupBy", M.toggleGroupBy = "toggleGroupBy";
      var Se = function(e) {
        e.getGroupByToggleProps = [Qe], e.stateReducers.push(Gt), e.visibleColumnsDeps.push(function(u, o) {
          var p = o.instance;
          return [].concat(u, [p.state.groupBy]);
        }), e.visibleColumns.push(Vt), e.useInstance.push(qt), e.prepareRow.push(zt);
      };
      Se.pluginName = "useGroupBy";
      var Qe = function(e, u) {
        var o = u.header;
        return [e, {
          onClick: o.canGroupBy ? function(p) {
            p.persist(), o.toggleGroupBy();
          } : void 0,
          style: {
            cursor: o.canGroupBy ? "pointer" : void 0
          },
          title: "Toggle GroupBy"
        }];
      };
      function Gt(r, e, u, o) {
        if (e.type === M.init)
          return y({
            groupBy: []
          }, r);
        if (e.type === M.resetGroupBy)
          return y({}, r, {
            groupBy: o.initialState.groupBy || []
          });
        if (e.type === M.setGroupBy) {
          var p = e.value;
          return y({}, r, {
            groupBy: p
          });
        }
        if (e.type === M.toggleGroupBy) {
          var m = e.columnId, c = e.value, w = typeof c < "u" ? c : !r.groupBy.includes(m);
          return w ? y({}, r, {
            groupBy: [].concat(r.groupBy, [m])
          }) : y({}, r, {
            groupBy: r.groupBy.filter(function(D) {
              return D !== m;
            })
          });
        }
      }
      function Vt(r, e) {
        var u = e.instance.state.groupBy, o = u.map(function(m) {
          return r.find(function(c) {
            return c.id === m;
          });
        }).filter(Boolean), p = r.filter(function(m) {
          return !u.includes(m.id);
        });
        return r = [].concat(o, p), r.forEach(function(m) {
          m.isGrouped = u.includes(m.id), m.groupedIndex = u.indexOf(m.id);
        }), r;
      }
      var Kt = {};
      function qt(r) {
        var e = r.data, u = r.rows, o = r.flatRows, p = r.rowsById, m = r.allColumns, c = r.flatHeaders, w = r.groupByFn, D = w === void 0 ? nt : w, N = r.manualGroupBy, L = r.aggregations, q = L === void 0 ? Kt : L, O = r.plugins, G = r.state.groupBy, _ = r.dispatch, E = r.autoResetGroupBy, Z = E === void 0 ? !0 : E, yn = r.disableGroupBy, vn = r.defaultCanGroupBy, j = r.getHooks;
        Un(O, ["useColumnOrder", "useFilters"], "useGroupBy");
        var Pn = Dn(r);
        m.forEach(function(wn) {
          var bn = wn.accessor, jn = wn.defaultGroupBy, sr = wn.disableGroupBy;
          wn.canGroupBy = bn ? or(wn.canGroupBy, sr === !0 ? !1 : void 0, yn === !0 ? !1 : void 0, !0) : or(wn.canGroupBy, jn, vn, !1), wn.canGroupBy && (wn.toggleGroupBy = function() {
            return r.toggleGroupBy(wn.id);
          }), wn.Aggregated = wn.Aggregated || wn.Cell;
        });
        var Bn = C.useCallback(function(wn, bn) {
          _({
            type: M.toggleGroupBy,
            columnId: wn,
            value: bn
          });
        }, [_]), J = C.useCallback(function(wn) {
          _({
            type: M.setGroupBy,
            value: wn
          });
        }, [_]);
        c.forEach(function(wn) {
          wn.getGroupByToggleProps = hn(j().getGroupByToggleProps, {
            instance: Pn(),
            header: wn
          });
        });
        var Y = C.useMemo(function() {
          if (N || !G.length)
            return [u, o, p, Wt, xt, o, p];
          var wn = G.filter(function(lr) {
            return m.find(function(Vr) {
              return Vr.id === lr;
            });
          }), bn = function(Vr, yr, ht) {
            var Kr = {};
            return m.forEach(function(er) {
              if (wn.includes(er.id)) {
                Kr[er.id] = yr[0] ? yr[0].values[er.id] : null;
                return;
              }
              var St = typeof er.aggregate == "function" ? er.aggregate : q[er.aggregate] || he[er.aggregate];
              if (St) {
                var ie = yr.map(function(ee) {
                  return ee.values[er.id];
                }), lo = Vr.map(function(ee) {
                  var qr = ee.values[er.id];
                  if (!ht && er.aggregateValue) {
                    var zr = typeof er.aggregateValue == "function" ? er.aggregateValue : q[er.aggregateValue] || he[er.aggregateValue];
                    if (!zr)
                      throw console.info({
                        column: er
                      }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                    qr = zr(qr, ee, er);
                  }
                  return qr;
                });
                Kr[er.id] = St(lo, ie);
              } else {
                if (er.aggregate)
                  throw console.info({
                    column: er
                  }), new Error("React Table: Invalid column.aggregate option for column listed above");
                Kr[er.id] = null;
              }
            }), Kr;
          }, jn = [], sr = {}, re = [], Pe = {}, mn = [], $n = {}, ar = function lr(Vr, yr, ht) {
            if (yr === void 0 && (yr = 0), yr === wn.length)
              return Vr.map(function(ie) {
                return y({}, ie, {
                  depth: yr
                });
              });
            var Kr = wn[yr], er = D(Vr, Kr), St = Object.entries(er).map(function(ie, lo) {
              var ee = ie[0], qr = ie[1], zr = Kr + ":" + ee;
              zr = ht ? ht + ">" + zr : zr;
              var No = lr(qr, yr + 1, zr), To = yr ? Br(qr, "leafRows") : qr, va = bn(To, qr, yr), ha = {
                id: zr,
                isGrouped: !0,
                groupByID: Kr,
                groupByVal: ee,
                values: va,
                subRows: No,
                leafRows: To,
                depth: yr,
                index: lo
              };
              return No.forEach(function(kr) {
                jn.push(kr), sr[kr.id] = kr, kr.isGrouped ? (re.push(kr), Pe[kr.id] = kr) : (mn.push(kr), $n[kr.id] = kr);
              }), ha;
            });
            return St;
          }, hr = ar(u);
          return hr.forEach(function(lr) {
            jn.push(lr), sr[lr.id] = lr, lr.isGrouped ? (re.push(lr), Pe[lr.id] = lr) : (mn.push(lr), $n[lr.id] = lr);
          }), [hr, jn, sr, re, Pe, mn, $n];
        }, [N, G, u, o, p, m, q, D]), $ = Y[0], cn = Y[1], kn = Y[2], En = Y[3], _n = Y[4], on = Y[5], ir = Y[6], On = Dn(Z);
        Kn(function() {
          On() && _({
            type: M.resetGroupBy
          });
        }, [_, N ? null : e]), Object.assign(r, {
          preGroupedRows: u,
          preGroupedFlatRow: o,
          preGroupedRowsById: p,
          groupedRows: $,
          groupedFlatRows: cn,
          groupedRowsById: kn,
          onlyGroupedFlatRows: En,
          onlyGroupedRowsById: _n,
          nonGroupedFlatRows: on,
          nonGroupedRowsById: ir,
          rows: $,
          flatRows: cn,
          rowsById: kn,
          toggleGroupBy: Bn,
          setGroupBy: J
        });
      }
      function zt(r) {
        r.allCells.forEach(function(e) {
          var u;
          e.isGrouped = e.column.isGrouped && e.column.id === r.groupByID, e.isPlaceholder = !e.isGrouped && e.column.isGrouped, e.isAggregated = !e.isGrouped && !e.isPlaceholder && ((u = r.subRows) == null ? void 0 : u.length);
        });
      }
      function nt(r, e) {
        return r.reduce(function(u, o, p) {
          var m = "" + o.values[e];
          return u[m] = Array.isArray(u[m]) ? u[m] : [], u[m].push(o), u;
        }, {});
      }
      var rt = /([0-9]+)/gm, _t = function(e, u, o) {
        var p = ne(e, u, o), m = p[0], c = p[1];
        for (m = tt(m), c = tt(c), m = m.split(rt).filter(Boolean), c = c.split(rt).filter(Boolean); m.length && c.length; ) {
          var w = m.shift(), D = c.shift(), N = parseInt(w, 10), L = parseInt(D, 10), q = [N, L].sort();
          if (isNaN(q[0])) {
            if (w > D)
              return 1;
            if (D > w)
              return -1;
            continue;
          }
          if (isNaN(q[1]))
            return isNaN(N) ? -1 : 1;
          if (N > L)
            return 1;
          if (L > N)
            return -1;
        }
        return m.length - c.length;
      };
      function Xt(r, e, u) {
        var o = ne(r, e, u), p = o[0], m = o[1];
        return p = p.getTime(), m = m.getTime(), we(p, m);
      }
      function Yt(r, e, u) {
        var o = ne(r, e, u), p = o[0], m = o[1];
        return we(p, m);
      }
      function jt(r, e, u) {
        var o = ne(r, e, u), p = o[0], m = o[1];
        for (p = p.split("").filter(Boolean), m = m.split("").filter(Boolean); p.length && m.length; ) {
          var c = p.shift(), w = m.shift(), D = c.toLowerCase(), N = w.toLowerCase();
          if (D > N)
            return 1;
          if (N > D)
            return -1;
          if (c > w)
            return 1;
          if (w > c)
            return -1;
        }
        return p.length - m.length;
      }
      function et(r, e, u) {
        var o = ne(r, e, u), p = o[0], m = o[1], c = /[^0-9.]/gi;
        return p = Number(String(p).replace(c, "")), m = Number(String(m).replace(c, "")), we(p, m);
      }
      function we(r, e) {
        return r === e ? 0 : r > e ? 1 : -1;
      }
      function ne(r, e, u) {
        return [r.values[u], e.values[u]];
      }
      function tt(r) {
        return typeof r == "number" ? isNaN(r) || r === 1 / 0 || r === -1 / 0 ? "" : String(r) : typeof r == "string" ? r : "";
      }
      var Ut = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        alphanumeric: _t,
        datetime: Xt,
        basic: Yt,
        string: jt,
        number: et
      });
      M.resetSortBy = "resetSortBy", M.setSortBy = "setSortBy", M.toggleSortBy = "toggleSortBy", M.clearSortBy = "clearSortBy", Cn.sortType = "alphanumeric", Cn.sortDescFirst = !1;
      var ot = function(e) {
        e.getSortByToggleProps = [Jt], e.stateReducers.push(at), e.useInstance.push(ut);
      };
      ot.pluginName = "useSortBy";
      var Jt = function(e, u) {
        var o = u.instance, p = u.column, m = o.isMultiSortEvent, c = m === void 0 ? function(w) {
          return w.shiftKey;
        } : m;
        return [e, {
          onClick: p.canSort ? function(w) {
            w.persist(), p.toggleSortBy(void 0, !o.disableMultiSort && c(w));
          } : void 0,
          style: {
            cursor: p.canSort ? "pointer" : void 0
          },
          title: p.canSort ? "Toggle SortBy" : void 0
        }];
      };
      function at(r, e, u, o) {
        if (e.type === M.init)
          return y({
            sortBy: []
          }, r);
        if (e.type === M.resetSortBy)
          return y({}, r, {
            sortBy: o.initialState.sortBy || []
          });
        if (e.type === M.clearSortBy) {
          var p = r.sortBy, m = p.filter(function($) {
            return $.id !== e.columnId;
          });
          return y({}, r, {
            sortBy: m
          });
        }
        if (e.type === M.setSortBy) {
          var c = e.sortBy;
          return y({}, r, {
            sortBy: c
          });
        }
        if (e.type === M.toggleSortBy) {
          var w = e.columnId, D = e.desc, N = e.multi, L = o.allColumns, q = o.disableMultiSort, O = o.disableSortRemove, G = o.disableMultiRemove, _ = o.maxMultiSortColCount, E = _ === void 0 ? Number.MAX_SAFE_INTEGER : _, Z = r.sortBy, yn = L.find(function($) {
            return $.id === w;
          }), vn = yn.sortDescFirst, j = Z.find(function($) {
            return $.id === w;
          }), Pn = Z.findIndex(function($) {
            return $.id === w;
          }), Bn = typeof D < "u" && D !== null, J = [], Y;
          return !q && N ? j ? Y = "toggle" : Y = "add" : Pn !== Z.length - 1 || Z.length !== 1 ? Y = "replace" : j ? Y = "toggle" : Y = "replace", Y === "toggle" && // Must be toggling
          !O && // If disableSortRemove, disable in general
          !Bn && // Must not be setting desc
          (!N || !G) && // If multi, don't allow if disableMultiRemove
          (j && // Finally, detect if it should indeed be removed
          j.desc && !vn || !j.desc && vn) && (Y = "remove"), Y === "replace" ? J = [{
            id: w,
            desc: Bn ? D : vn
          }] : Y === "add" ? (J = [].concat(Z, [{
            id: w,
            desc: Bn ? D : vn
          }]), J.splice(0, J.length - E)) : Y === "toggle" ? J = Z.map(function($) {
            return $.id === w ? y({}, $, {
              desc: Bn ? D : !j.desc
            }) : $;
          }) : Y === "remove" && (J = Z.filter(function($) {
            return $.id !== w;
          })), y({}, r, {
            sortBy: J
          });
        }
      }
      function ut(r) {
        var e = r.data, u = r.rows, o = r.flatRows, p = r.allColumns, m = r.orderByFn, c = m === void 0 ? Me : m, w = r.sortTypes, D = r.manualSortBy, N = r.defaultCanSort, L = r.disableSortBy, q = r.flatHeaders, O = r.state.sortBy, G = r.dispatch, _ = r.plugins, E = r.getHooks, Z = r.autoResetSortBy, yn = Z === void 0 ? !0 : Z;
        Un(_, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var vn = C.useCallback(function(cn) {
          G({
            type: M.setSortBy,
            sortBy: cn
          });
        }, [G]), j = C.useCallback(function(cn, kn, En) {
          G({
            type: M.toggleSortBy,
            columnId: cn,
            desc: kn,
            multi: En
          });
        }, [G]), Pn = Dn(r);
        q.forEach(function(cn) {
          var kn = cn.accessor, En = cn.canSort, _n = cn.disableSortBy, on = cn.id, ir = kn ? or(_n === !0 ? !1 : void 0, L === !0 ? !1 : void 0, !0) : or(N, En, !1);
          cn.canSort = ir, cn.canSort && (cn.toggleSortBy = function(wn, bn) {
            return j(cn.id, wn, bn);
          }, cn.clearSortBy = function() {
            G({
              type: M.clearSortBy,
              columnId: cn.id
            });
          }), cn.getSortByToggleProps = hn(E().getSortByToggleProps, {
            instance: Pn(),
            column: cn
          });
          var On = O.find(function(wn) {
            return wn.id === on;
          });
          cn.isSorted = !!On, cn.sortedIndex = O.findIndex(function(wn) {
            return wn.id === on;
          }), cn.isSortedDesc = cn.isSorted ? On.desc : void 0;
        });
        var Bn = C.useMemo(function() {
          if (D || !O.length)
            return [u, o];
          var cn = [], kn = O.filter(function(_n) {
            return p.find(function(on) {
              return on.id === _n.id;
            });
          }), En = function _n(on) {
            var ir = c(
              on,
              kn.map(function(On) {
                var wn = p.find(function(sr) {
                  return sr.id === On.id;
                });
                if (!wn)
                  throw new Error("React-Table: Could not find a column with id: " + On.id + " while sorting");
                var bn = wn.sortType, jn = Or(bn) || (w || {})[bn] || Ut[bn];
                if (!jn)
                  throw new Error("React-Table: Could not find a valid sortType of '" + bn + "' for column '" + On.id + "'.");
                return function(sr, re) {
                  return jn(sr, re, On.id, On.desc);
                };
              }),
              // Map the directions
              kn.map(function(On) {
                var wn = p.find(function(bn) {
                  return bn.id === On.id;
                });
                return wn && wn.sortInverted ? On.desc : !On.desc;
              })
            );
            return ir.forEach(function(On) {
              cn.push(On), !(!On.subRows || On.subRows.length === 0) && (On.subRows = _n(On.subRows));
            }), ir;
          };
          return [En(u), cn];
        }, [D, O, u, o, p, c, w]), J = Bn[0], Y = Bn[1], $ = Dn(yn);
        Kn(function() {
          $() && G({
            type: M.resetSortBy
          });
        }, [D ? null : e]), Object.assign(r, {
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
      function Me(r, e, u) {
        return [].concat(r).sort(function(o, p) {
          for (var m = 0; m < e.length; m += 1) {
            var c = e[m], w = u[m] === !1 || u[m] === "desc", D = c(o, p);
            if (D !== 0)
              return w ? -D : D;
          }
          return u[0] ? o.index - p.index : p.index - o.index;
        });
      }
      var $t = "usePagination";
      M.resetPage = "resetPage", M.gotoPage = "gotoPage", M.setPageSize = "setPageSize";
      var it = function(e) {
        e.stateReducers.push(Zt), e.useInstance.push(lt);
      };
      it.pluginName = $t;
      function Zt(r, e, u, o) {
        if (e.type === M.init)
          return y({
            pageSize: 10,
            pageIndex: 0
          }, r);
        if (e.type === M.resetPage)
          return y({}, r, {
            pageIndex: o.initialState.pageIndex || 0
          });
        if (e.type === M.gotoPage) {
          var p = o.pageCount, m = o.page, c = Wn(e.pageIndex, r.pageIndex), w = !1;
          return c > r.pageIndex ? w = p === -1 ? m.length >= r.pageSize : c < p : c < r.pageIndex && (w = c > -1), w ? y({}, r, {
            pageIndex: c
          }) : r;
        }
        if (e.type === M.setPageSize) {
          var D = e.pageSize, N = r.pageSize * r.pageIndex, L = Math.floor(N / D);
          return y({}, r, {
            pageIndex: L,
            pageSize: D
          });
        }
      }
      function lt(r) {
        var e = r.rows, u = r.autoResetPage, o = u === void 0 ? !0 : u, p = r.manualExpandedKey, m = p === void 0 ? "expanded" : p, c = r.plugins, w = r.pageCount, D = r.paginateExpandedRows, N = D === void 0 ? !0 : D, L = r.expandSubRows, q = L === void 0 ? !0 : L, O = r.state, G = O.pageSize, _ = O.pageIndex, E = O.expanded, Z = O.globalFilter, yn = O.filters, vn = O.groupBy, j = O.sortBy, Pn = r.dispatch, Bn = r.data, J = r.manualPagination;
        Un(c, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var Y = Dn(o);
        Kn(function() {
          Y() && Pn({
            type: M.resetPage
          });
        }, [Pn, J ? null : Bn, Z, yn, vn, j]);
        var $ = J ? w : Math.ceil(e.length / G), cn = C.useMemo(function() {
          return $ > 0 ? [].concat(new Array($)).fill(null).map(function(bn, jn) {
            return jn;
          }) : [];
        }, [$]), kn = C.useMemo(function() {
          var bn;
          if (J)
            bn = e;
          else {
            var jn = G * _, sr = jn + G;
            bn = e.slice(jn, sr);
          }
          return N ? bn : F(bn, {
            manualExpandedKey: m,
            expanded: E,
            expandSubRows: q
          });
        }, [q, E, m, J, _, G, N, e]), En = _ > 0, _n = $ === -1 ? kn.length >= G : _ < $ - 1, on = C.useCallback(function(bn) {
          Pn({
            type: M.gotoPage,
            pageIndex: bn
          });
        }, [Pn]), ir = C.useCallback(function() {
          return on(function(bn) {
            return bn - 1;
          });
        }, [on]), On = C.useCallback(function() {
          return on(function(bn) {
            return bn + 1;
          });
        }, [on]), wn = C.useCallback(function(bn) {
          Pn({
            type: M.setPageSize,
            pageSize: bn
          });
        }, [Pn]);
        Object.assign(r, {
          pageOptions: cn,
          pageCount: $,
          page: kn,
          canPreviousPage: En,
          canNextPage: _n,
          gotoPage: on,
          previousPage: ir,
          nextPage: On,
          setPageSize: wn
        });
      }
      M.resetPivot = "resetPivot", M.togglePivot = "togglePivot";
      var st = function(e) {
        e.getPivotToggleProps = [Qt], e.stateReducers.push(yt), e.useInstanceAfterData.push(no), e.allColumns.push(ro), e.accessValue.push(eo), e.materializedColumns.push(to), e.materializedColumnsDeps.push(be), e.visibleColumns.push(Ct), e.visibleColumnsDeps.push(ue), e.useInstance.push(Ae), e.prepareRow.push(De);
      };
      st.pluginName = "usePivotColumns";
      var ct = [], Qt = function(e, u) {
        var o = u.header;
        return [e, {
          onClick: o.canPivot ? function(p) {
            p.persist(), o.togglePivot();
          } : void 0,
          style: {
            cursor: o.canPivot ? "pointer" : void 0
          },
          title: "Toggle Pivot"
        }];
      };
      function yt(r, e, u, o) {
        if (e.type === M.init)
          return y({
            pivotColumns: ct
          }, r);
        if (e.type === M.resetPivot)
          return y({}, r, {
            pivotColumns: o.initialState.pivotColumns || ct
          });
        if (e.type === M.togglePivot) {
          var p = e.columnId, m = e.value, c = typeof m < "u" ? m : !r.pivotColumns.includes(p);
          return c ? y({}, r, {
            pivotColumns: [].concat(r.pivotColumns, [p])
          }) : y({}, r, {
            pivotColumns: r.pivotColumns.filter(function(w) {
              return w !== p;
            })
          });
        }
      }
      function no(r) {
        r.allColumns.forEach(function(e) {
          e.isPivotSource = r.state.pivotColumns.includes(e.id);
        });
      }
      function ro(r, e) {
        var u = e.instance;
        return r.forEach(function(o) {
          o.isPivotSource = u.state.pivotColumns.includes(o.id), o.uniqueValues = /* @__PURE__ */ new Set();
        }), r;
      }
      function eo(r, e) {
        var u = e.column;
        return u.uniqueValues && typeof r < "u" && u.uniqueValues.add(r), r;
      }
      function to(r, e) {
        var u = e.instance, o = u.allColumns, p = u.state;
        if (!p.pivotColumns.length || !p.groupBy || !p.groupBy.length)
          return r;
        var m = p.pivotColumns.map(function(N) {
          return o.find(function(L) {
            return L.id === N;
          });
        }).filter(Boolean), c = o.filter(function(N) {
          return !N.isPivotSource && !p.groupBy.includes(N.id) && !p.pivotColumns.includes(N.id);
        }), w = function N(L, q, O) {
          L === void 0 && (L = 0), O === void 0 && (O = []);
          var G = m[L];
          if (!G)
            return c.map(function(E) {
              return y({}, E, {
                canPivot: !1,
                isPivoted: !0,
                parent: q,
                depth: L,
                id: "" + (q ? q.id + "." + E.id : E.id),
                accessor: function(yn, vn, j) {
                  if (O.every(function(Pn) {
                    return Pn(j);
                  }))
                    return j.values[E.id];
                }
              });
            });
          var _ = Array.from(G.uniqueValues).sort();
          return _.map(function(E) {
            var Z = y({}, G, {
              Header: G.PivotHeader || typeof G.header == "string" ? G.Header + ": " + E : E,
              isPivotGroup: !0,
              parent: q,
              depth: L,
              id: q ? q.id + "." + G.id + "." + E : G.id + "." + E,
              pivotValue: E
            });
            return Z.columns = N(L + 1, Z, [].concat(O, [function(yn) {
              return yn.values[G.id] === E;
            }])), Z;
          });
        }, D = Pr(w());
        return [].concat(r, D);
      }
      function be(r, e) {
        var u = e.instance.state, o = u.pivotColumns, p = u.groupBy;
        return [].concat(r, [o, p]);
      }
      function Ct(r, e) {
        var u = e.instance.state;
        return r = r.filter(function(o) {
          return !o.isPivotSource;
        }), u.pivotColumns.length && u.groupBy && u.groupBy.length && (r = r.filter(function(o) {
          return o.isGrouped || o.isPivoted;
        })), r;
      }
      function ue(r, e) {
        var u = e.instance;
        return [].concat(r, [u.state.pivotColumns, u.state.groupBy]);
      }
      function Ae(r) {
        var e = r.columns, u = r.allColumns, o = r.flatHeaders, p = r.getHooks, m = r.plugins, c = r.dispatch, w = r.autoResetPivot, D = w === void 0 ? !0 : w, N = r.manaulPivot, L = r.disablePivot, q = r.defaultCanPivot;
        Un(m, ["useGroupBy"], "usePivotColumns");
        var O = Dn(r);
        u.forEach(function(E) {
          var Z = E.accessor, yn = E.defaultPivot, vn = E.disablePivot;
          E.canPivot = Z ? or(E.canPivot, vn === !0 ? !1 : void 0, L === !0 ? !1 : void 0, !0) : or(E.canPivot, yn, q, !1), E.canPivot && (E.togglePivot = function() {
            return r.togglePivot(E.id);
          }), E.Aggregated = E.Aggregated || E.Cell;
        });
        var G = function(Z, yn) {
          c({
            type: M.togglePivot,
            columnId: Z,
            value: yn
          });
        };
        o.forEach(function(E) {
          E.getPivotToggleProps = hn(p().getPivotToggleProps, {
            instance: O(),
            header: E
          });
        });
        var _ = Dn(D);
        Kn(function() {
          _() && c({
            type: M.resetPivot
          });
        }, [c, N ? null : e]), Object.assign(r, {
          togglePivot: G
        });
      }
      function De(r) {
        r.allCells.forEach(function(e) {
          e.isPivoted = e.column.isPivoted;
        });
      }
      var dt = "useRowSelect";
      M.resetSelectedRows = "resetSelectedRows", M.toggleAllRowsSelected = "toggleAllRowsSelected", M.toggleRowSelected = "toggleRowSelected", M.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var Re = function(e) {
        e.getToggleRowSelectedProps = [oo], e.getToggleAllRowsSelectedProps = [Ne], e.getToggleAllPageRowsSelectedProps = [ao], e.stateReducers.push(uo), e.useInstance.push(io), e.prepareRow.push(pt);
      };
      Re.pluginName = dt;
      var oo = function(e, u) {
        var o = u.instance, p = u.row, m = o.manualRowSelectedKey, c = m === void 0 ? "isSelected" : m, w = !1;
        return p.original && p.original[c] ? w = !0 : w = p.isSelected, [e, {
          onChange: function(N) {
            p.toggleRowSelected(N.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: w,
          title: "Toggle Row Selected",
          indeterminate: p.isSomeSelected
        }];
      }, Ne = function(e, u) {
        var o = u.instance;
        return [e, {
          onChange: function(m) {
            o.toggleAllRowsSelected(m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: o.isAllRowsSelected,
          title: "Toggle All Rows Selected",
          indeterminate: !!(!o.isAllRowsSelected && Object.keys(o.state.selectedRowIds).length)
        }];
      }, ao = function(e, u) {
        var o = u.instance;
        return [e, {
          onChange: function(m) {
            o.toggleAllPageRowsSelected(m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: o.isAllPageRowsSelected,
          title: "Toggle All Current Page Rows Selected",
          indeterminate: !!(!o.isAllPageRowsSelected && o.page.some(function(p) {
            var m = p.id;
            return o.state.selectedRowIds[m];
          }))
        }];
      };
      function uo(r, e, u, o) {
        if (e.type === M.init)
          return y({
            selectedRowIds: {}
          }, r);
        if (e.type === M.resetSelectedRows)
          return y({}, r, {
            selectedRowIds: o.initialState.selectedRowIds || {}
          });
        if (e.type === M.toggleAllRowsSelected) {
          var p = e.value, m = o.isAllRowsSelected, c = o.rowsById, w = o.nonGroupedRowsById, D = w === void 0 ? c : w, N = typeof p < "u" ? p : !m, L = Object.assign({}, r.selectedRowIds);
          return N ? Object.keys(D).forEach(function(On) {
            L[On] = !0;
          }) : Object.keys(D).forEach(function(On) {
            delete L[On];
          }), y({}, r, {
            selectedRowIds: L
          });
        }
        if (e.type === M.toggleRowSelected) {
          var q = e.id, O = e.value, G = o.rowsById, _ = o.selectSubRows, E = _ === void 0 ? !0 : _, Z = o.getSubRows, yn = r.selectedRowIds[q], vn = typeof O < "u" ? O : !yn;
          if (yn === vn)
            return r;
          var j = y({}, r.selectedRowIds), Pn = function On(wn) {
            var bn = G[wn];
            if (bn && (bn.isGrouped || (vn ? j[wn] = !0 : delete j[wn]), E && Z(bn)))
              return Z(bn).forEach(function(jn) {
                return On(jn.id);
              });
          };
          return Pn(q), y({}, r, {
            selectedRowIds: j
          });
        }
        if (e.type === M.toggleAllPageRowsSelected) {
          var Bn = e.value, J = o.page, Y = o.rowsById, $ = o.selectSubRows, cn = $ === void 0 ? !0 : $, kn = o.isAllPageRowsSelected, En = o.getSubRows, _n = typeof Bn < "u" ? Bn : !kn, on = y({}, r.selectedRowIds), ir = function On(wn) {
            var bn = Y[wn];
            if (bn.isGrouped || (_n ? on[wn] = !0 : delete on[wn]), cn && En(bn))
              return En(bn).forEach(function(jn) {
                return On(jn.id);
              });
          };
          return J.forEach(function(On) {
            return ir(On.id);
          }), y({}, r, {
            selectedRowIds: on
          });
        }
        return r;
      }
      function io(r) {
        var e = r.data, u = r.rows, o = r.getHooks, p = r.plugins, m = r.rowsById, c = r.nonGroupedRowsById, w = c === void 0 ? m : c, D = r.autoResetSelectedRows, N = D === void 0 ? !0 : D, L = r.state.selectedRowIds, q = r.selectSubRows, O = q === void 0 ? !0 : q, G = r.dispatch, _ = r.page, E = r.getSubRows;
        Un(p, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var Z = C.useMemo(function() {
          var kn = [];
          return u.forEach(function(En) {
            var _n = O ? ft(En, L, E) : !!L[En.id];
            En.isSelected = !!_n, En.isSomeSelected = _n === null, _n && kn.push(En);
          }), kn;
        }, [u, O, L, E]), yn = !!(Object.keys(w).length && Object.keys(L).length), vn = yn;
        yn && Object.keys(w).some(function(kn) {
          return !L[kn];
        }) && (yn = !1), yn || _ && _.length && _.some(function(kn) {
          var En = kn.id;
          return !L[En];
        }) && (vn = !1);
        var j = Dn(N);
        Kn(function() {
          j() && G({
            type: M.resetSelectedRows
          });
        }, [G, e]);
        var Pn = C.useCallback(function(kn) {
          return G({
            type: M.toggleAllRowsSelected,
            value: kn
          });
        }, [G]), Bn = C.useCallback(function(kn) {
          return G({
            type: M.toggleAllPageRowsSelected,
            value: kn
          });
        }, [G]), J = C.useCallback(function(kn, En) {
          return G({
            type: M.toggleRowSelected,
            id: kn,
            value: En
          });
        }, [G]), Y = Dn(r), $ = hn(o().getToggleAllRowsSelectedProps, {
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
          toggleAllPageRowsSelected: Bn
        });
      }
      function pt(r, e) {
        var u = e.instance;
        r.toggleRowSelected = function(o) {
          return u.toggleRowSelected(r.id, o);
        }, r.getToggleRowSelectedProps = hn(u.getHooks().getToggleRowSelectedProps, {
          instance: u,
          row: r
        });
      }
      function ft(r, e, u) {
        if (e[r.id])
          return !0;
        var o = u(r);
        if (o && o.length) {
          var p = !0, m = !1;
          return o.forEach(function(c) {
            m && !p || (ft(c, e, u) ? m = !0 : p = !1);
          }), p ? !0 : m ? null : !1;
        }
        return !1;
      }
      var gt = function(e) {
        return {};
      }, mt = function(e) {
        return {};
      };
      M.setRowState = "setRowState", M.setCellState = "setCellState", M.resetRowState = "resetRowState";
      var vt = function(e) {
        e.stateReducers.push(Te), e.useInstance.push(n), e.prepareRow.push(a);
      };
      vt.pluginName = "useRowState";
      function Te(r, e, u, o) {
        var p = o.initialRowStateAccessor, m = p === void 0 ? gt : p, c = o.initialCellStateAccessor, w = c === void 0 ? mt : c, D = o.rowsById;
        if (e.type === M.init)
          return y({
            rowState: {}
          }, r);
        if (e.type === M.resetRowState)
          return y({}, r, {
            rowState: o.initialState.rowState || {}
          });
        if (e.type === M.setRowState) {
          var N, L = e.rowId, q = e.value, O = typeof r.rowState[L] < "u" ? r.rowState[L] : m(D[L]);
          return y({}, r, {
            rowState: y({}, r.rowState, (N = {}, N[L] = Wn(q, O), N))
          });
        }
        if (e.type === M.setCellState) {
          var G, _, E, Z, yn, vn = e.rowId, j = e.columnId, Pn = e.value, Bn = typeof r.rowState[vn] < "u" ? r.rowState[vn] : m(D[vn]), J = typeof (Bn == null || (G = Bn.cellState) == null ? void 0 : G[j]) < "u" ? Bn.cellState[j] : w((_ = D[vn]) == null || (E = _.cells) == null ? void 0 : E.find(function(Y) {
            return Y.column.id === j;
          }));
          return y({}, r, {
            rowState: y({}, r.rowState, (yn = {}, yn[vn] = y({}, Bn, {
              cellState: y({}, Bn.cellState || {}, (Z = {}, Z[j] = Wn(Pn, J), Z))
            }), yn))
          });
        }
      }
      function n(r) {
        var e = r.autoResetRowState, u = e === void 0 ? !0 : e, o = r.data, p = r.dispatch, m = C.useCallback(function(D, N) {
          return p({
            type: M.setRowState,
            rowId: D,
            value: N
          });
        }, [p]), c = C.useCallback(function(D, N, L) {
          return p({
            type: M.setCellState,
            rowId: D,
            columnId: N,
            value: L
          });
        }, [p]), w = Dn(u);
        Kn(function() {
          w() && p({
            type: M.resetRowState
          });
        }, [o]), Object.assign(r, {
          setRowState: m,
          setCellState: c
        });
      }
      function a(r, e) {
        var u = e.instance, o = u.initialRowStateAccessor, p = o === void 0 ? gt : o, m = u.initialCellStateAccessor, c = m === void 0 ? mt : m, w = u.state.rowState;
        r && (r.state = typeof w[r.id] < "u" ? w[r.id] : p(r), r.setState = function(D) {
          return u.setRowState(r.id, D);
        }, r.cells.forEach(function(D) {
          r.state.cellState || (r.state.cellState = {}), D.state = typeof r.state.cellState[D.column.id] < "u" ? r.state.cellState[D.column.id] : c(D), D.setState = function(N) {
            return u.setCellState(r.id, D.column.id, N);
          };
        }));
      }
      M.resetColumnOrder = "resetColumnOrder", M.setColumnOrder = "setColumnOrder";
      var i = function(e) {
        e.stateReducers.push(l), e.visibleColumnsDeps.push(function(u, o) {
          var p = o.instance;
          return [].concat(u, [p.state.columnOrder]);
        }), e.visibleColumns.push(v), e.useInstance.push(f);
      };
      i.pluginName = "useColumnOrder";
      function l(r, e, u, o) {
        if (e.type === M.init)
          return y({
            columnOrder: []
          }, r);
        if (e.type === M.resetColumnOrder)
          return y({}, r, {
            columnOrder: o.initialState.columnOrder || []
          });
        if (e.type === M.setColumnOrder)
          return y({}, r, {
            columnOrder: Wn(e.columnOrder, r.columnOrder)
          });
      }
      function v(r, e) {
        var u = e.instance.state.columnOrder;
        if (!u || !u.length)
          return r;
        for (var o = [].concat(u), p = [].concat(r), m = [], c = function() {
          var D = o.shift(), N = p.findIndex(function(L) {
            return L.id === D;
          });
          N > -1 && m.push(p.splice(N, 1)[0]);
        }; p.length && o.length; )
          c();
        return [].concat(m, p);
      }
      function f(r) {
        var e = r.dispatch;
        r.setColumnOrder = C.useCallback(function(u) {
          return e({
            type: M.setColumnOrder,
            columnOrder: u
          });
        }, [e]);
      }
      Cn.canResize = !0, M.columnStartResizing = "columnStartResizing", M.columnResizing = "columnResizing", M.columnDoneResizing = "columnDoneResizing", M.resetResize = "resetResize";
      var S = function(e) {
        e.getResizerProps = [R], e.getHeaderProps.push({
          style: {
            position: "relative"
          }
        }), e.stateReducers.push(T), e.useInstance.push(V), e.useInstanceBeforeDimensions.push(I);
      }, R = function(e, u) {
        var o = u.instance, p = u.header, m = o.dispatch, c = function(D, N) {
          var L = !1;
          if (D.type === "touchstart") {
            if (D.touches && D.touches.length > 1)
              return;
            L = !0;
          }
          var q = W(N), O = q.map(function(J) {
            return [J.id, J.totalWidth];
          }), G = L ? Math.round(D.touches[0].clientX) : D.clientX, _, E, Z = function() {
            window.cancelAnimationFrame(_), _ = null, m({
              type: M.columnDoneResizing
            });
          }, yn = function() {
            window.cancelAnimationFrame(_), _ = null, m({
              type: M.columnResizing,
              clientX: E
            });
          }, vn = function(Y) {
            E = Y, _ || (_ = window.requestAnimationFrame(yn));
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
          }, Pn = L ? j.touch : j.mouse, Bn = Yn() ? {
            passive: !1
          } : !1;
          document.addEventListener(Pn.moveEvent, Pn.moveHandler, Bn), document.addEventListener(Pn.upEvent, Pn.upHandler, Bn), m({
            type: M.columnStartResizing,
            columnId: N.id,
            columnWidth: N.totalWidth,
            headerIdWidths: O,
            clientX: G
          });
        };
        return [e, {
          onMouseDown: function(D) {
            return D.persist() || c(D, p);
          },
          onTouchStart: function(D) {
            return D.persist() || c(D, p);
          },
          style: {
            cursor: "col-resize"
          },
          draggable: !1,
          role: "separator"
        }];
      };
      S.pluginName = "useResizeColumns";
      function T(r, e) {
        if (e.type === M.init)
          return y({
            columnResizing: {
              columnWidths: {}
            }
          }, r);
        if (e.type === M.resetResize)
          return y({}, r, {
            columnResizing: {
              columnWidths: {}
            }
          });
        if (e.type === M.columnStartResizing) {
          var u = e.clientX, o = e.columnId, p = e.columnWidth, m = e.headerIdWidths;
          return y({}, r, {
            columnResizing: y({}, r.columnResizing, {
              startX: u,
              headerIdWidths: m,
              columnWidth: p,
              isResizingColumn: o
            })
          });
        }
        if (e.type === M.columnResizing) {
          var c = e.clientX, w = r.columnResizing, D = w.startX, N = w.columnWidth, L = w.headerIdWidths, q = L === void 0 ? [] : L, O = c - D, G = O / N, _ = {};
          return q.forEach(function(E) {
            var Z = E[0], yn = E[1];
            _[Z] = Math.max(yn + yn * G, 0);
          }), y({}, r, {
            columnResizing: y({}, r.columnResizing, {
              columnWidths: y({}, r.columnResizing.columnWidths, {}, _)
            })
          });
        }
        if (e.type === M.columnDoneResizing)
          return y({}, r, {
            columnResizing: y({}, r.columnResizing, {
              startX: null,
              isResizingColumn: null
            })
          });
      }
      var I = function(e) {
        var u = e.flatHeaders, o = e.disableResizing, p = e.getHooks, m = e.state.columnResizing, c = Dn(e);
        u.forEach(function(w) {
          var D = or(w.disableResizing === !0 ? !1 : void 0, o === !0 ? !1 : void 0, !0);
          w.canResize = D, w.width = m.columnWidths[w.id] || w.originalWidth || w.width, w.isResizing = m.isResizingColumn === w.id, D && (w.getResizerProps = hn(p().getResizerProps, {
            instance: c(),
            header: w
          }));
        });
      };
      function V(r) {
        var e = r.plugins, u = r.dispatch, o = r.autoResetResize, p = o === void 0 ? !0 : o, m = r.columns;
        Un(e, ["useAbsoluteLayout"], "useResizeColumns");
        var c = Dn(p);
        Kn(function() {
          c() && u({
            type: M.resetResize
          });
        }, [m]);
        var w = C.useCallback(function() {
          return u({
            type: M.resetResize
          });
        }, [u]);
        Object.assign(r, {
          resetResizing: w
        });
      }
      function W(r) {
        var e = [], u = function o(p) {
          p.columns && p.columns.length && p.columns.map(o), e.push(p);
        };
        return u(r), e;
      }
      var x = {
        position: "absolute",
        top: 0
      }, k = function(e) {
        e.getTableBodyProps.push(H), e.getRowProps.push(H), e.getHeaderGroupProps.push(H), e.getFooterGroupProps.push(H), e.getHeaderProps.push(function(u, o) {
          var p = o.column;
          return [u, {
            style: y({}, x, {
              left: p.totalLeft + "px",
              width: p.totalWidth + "px"
            })
          }];
        }), e.getCellProps.push(function(u, o) {
          var p = o.cell;
          return [u, {
            style: y({}, x, {
              left: p.column.totalLeft + "px",
              width: p.column.totalWidth + "px"
            })
          }];
        }), e.getFooterProps.push(function(u, o) {
          var p = o.column;
          return [u, {
            style: y({}, x, {
              left: p.totalLeft + "px",
              width: p.totalWidth + "px"
            })
          }];
        });
      };
      k.pluginName = "useAbsoluteLayout";
      var H = function(e, u) {
        var o = u.instance;
        return [e, {
          style: {
            position: "relative",
            width: o.totalColumnsWidth + "px"
          }
        }];
      }, X = {
        display: "inline-block",
        boxSizing: "border-box"
      }, U = function(e, u) {
        var o = u.instance;
        return [e, {
          style: {
            display: "flex",
            width: o.totalColumnsWidth + "px"
          }
        }];
      }, ln = function(e) {
        e.getRowProps.push(U), e.getHeaderGroupProps.push(U), e.getFooterGroupProps.push(U), e.getHeaderProps.push(function(u, o) {
          var p = o.column;
          return [u, {
            style: y({}, X, {
              width: p.totalWidth + "px"
            })
          }];
        }), e.getCellProps.push(function(u, o) {
          var p = o.cell;
          return [u, {
            style: y({}, X, {
              width: p.column.totalWidth + "px"
            })
          }];
        }), e.getFooterProps.push(function(u, o) {
          var p = o.column;
          return [u, {
            style: y({}, X, {
              width: p.totalWidth + "px"
            })
          }];
        });
      };
      ln.pluginName = "useBlockLayout";
      function Ln(r) {
        r.getTableProps.push(sn), r.getRowProps.push(K), r.getHeaderGroupProps.push(K), r.getFooterGroupProps.push(K), r.getHeaderProps.push(Tn), r.getCellProps.push(rn), r.getFooterProps.push(Mn);
      }
      Ln.pluginName = "useFlexLayout";
      var sn = function(e, u) {
        var o = u.instance;
        return [e, {
          style: {
            minWidth: o.totalColumnsMinWidth + "px"
          }
        }];
      }, K = function(e, u) {
        var o = u.instance;
        return [e, {
          style: {
            display: "flex",
            flex: "1 0 auto",
            minWidth: o.totalColumnsMinWidth + "px"
          }
        }];
      }, Tn = function(e, u) {
        var o = u.column;
        return [e, {
          style: {
            boxSizing: "border-box",
            flex: o.totalFlexWidth ? o.totalFlexWidth + " 0 auto" : void 0,
            minWidth: o.totalMinWidth + "px",
            width: o.totalWidth + "px"
          }
        }];
      }, rn = function(e, u) {
        var o = u.cell;
        return [e, {
          style: {
            boxSizing: "border-box",
            flex: o.column.totalFlexWidth + " 0 auto",
            minWidth: o.column.totalMinWidth + "px",
            width: o.column.totalWidth + "px"
          }
        }];
      }, Mn = function(e, u) {
        var o = u.column;
        return [e, {
          style: {
            boxSizing: "border-box",
            flex: o.totalFlexWidth ? o.totalFlexWidth + " 0 auto" : void 0,
            minWidth: o.totalMinWidth + "px",
            width: o.totalWidth + "px"
          }
        }];
      };
      M.columnStartResizing = "columnStartResizing", M.columnResizing = "columnResizing", M.columnDoneResizing = "columnDoneResizing", M.resetResize = "resetResize";
      function xn(r) {
        r.stateReducers.push(Rn), r.getTableProps.push(gn), r.getHeaderProps.push(Sn), r.getRowProps.push(Vn);
      }
      xn.pluginName = "useGridLayout";
      var gn = function(e, u) {
        var o = u.instance, p = o.visibleColumns.map(function(m) {
          var c;
          return o.state.gridLayout.columnWidths[m.id] ? o.state.gridLayout.columnWidths[m.id] + "px" : (c = o.state.columnResizing) != null && c.isResizingColumn ? o.state.gridLayout.startWidths[m.id] + "px" : typeof m.width == "number" ? m.width + "px" : m.width;
        });
        return [e, {
          style: {
            display: "grid",
            gridTemplateColumns: p.join(" ")
          }
        }];
      }, Sn = function(e, u) {
        var o = u.column;
        return [e, {
          id: "header-cell-" + o.id,
          style: {
            position: "sticky",
            //enables a scroll wrapper to be placed around the table and have sticky headers
            gridColumn: "span " + o.totalVisibleHeaderCount
          }
        }];
      }, Vn = function(e, u) {
        var o = u.row;
        return o.isExpanded ? [e, {
          style: {
            gridColumn: "1 / " + (o.cells.length + 1)
          }
        }] : [e, {}];
      };
      function Rn(r, e, u, o) {
        if (e.type === M.init)
          return y({
            gridLayout: {
              columnWidths: {}
            }
          }, r);
        if (e.type === M.resetResize)
          return y({}, r, {
            gridLayout: {
              columnWidths: {}
            }
          });
        if (e.type === M.columnStartResizing) {
          var p = e.columnId, m = e.headerIdWidths, c = Gn(p);
          if (c !== void 0) {
            var w = o.visibleColumns.reduce(function(J, Y) {
              var $;
              return y({}, J, ($ = {}, $[Y.id] = Gn(Y.id), $));
            }, {}), D = o.visibleColumns.reduce(function(J, Y) {
              var $;
              return y({}, J, ($ = {}, $[Y.id] = Y.minWidth, $));
            }, {}), N = o.visibleColumns.reduce(function(J, Y) {
              var $;
              return y({}, J, ($ = {}, $[Y.id] = Y.maxWidth, $));
            }, {}), L = m.map(function(J) {
              var Y = J[0];
              return [Y, Gn(Y)];
            });
            return y({}, r, {
              gridLayout: y({}, r.gridLayout, {
                startWidths: w,
                minWidths: D,
                maxWidths: N,
                headerIdGridWidths: L,
                columnWidth: c
              })
            });
          } else
            return r;
        }
        if (e.type === M.columnResizing) {
          var q = e.clientX, O = r.columnResizing.startX, G = r.gridLayout, _ = G.columnWidth, E = G.minWidths, Z = G.maxWidths, yn = G.headerIdGridWidths, vn = yn === void 0 ? [] : yn, j = q - O, Pn = j / _, Bn = {};
          return vn.forEach(function(J) {
            var Y = J[0], $ = J[1];
            Bn[Y] = Math.min(Math.max(E[Y], $ + $ * Pn), Z[Y]);
          }), y({}, r, {
            gridLayout: y({}, r.gridLayout, {
              columnWidths: y({}, r.gridLayout.columnWidths, {}, Bn)
            })
          });
        }
        if (e.type === M.columnDoneResizing)
          return y({}, r, {
            gridLayout: y({}, r.gridLayout, {
              startWidths: {},
              minWidths: {},
              maxWidths: {}
            })
          });
      }
      function Gn(r) {
        var e, u = (e = document.getElementById("header-cell-" + r)) == null ? void 0 : e.offsetWidth;
        if (u !== void 0)
          return u;
      }
      s._UNSTABLE_usePivotColumns = st, s.actions = M, s.defaultColumn = Cn, s.defaultGroupByFn = nt, s.defaultOrderByFn = Me, s.defaultRenderer = un, s.emptyRenderer = Nn, s.ensurePluginOrder = Un, s.flexRender = en, s.functionalUpdate = Wn, s.loopHooks = An, s.makePropGetter = hn, s.makeRenderer = Qn, s.reduceHooks = Hn, s.safeUseLayoutEffect = tr, s.useAbsoluteLayout = k, s.useAsyncDebounce = Cr, s.useBlockLayout = ln, s.useColumnOrder = i, s.useExpanded = pe, s.useFilters = Xe, s.useFlexLayout = Ln, s.useGetLatest = Dn, s.useGlobalFilter = Ye, s.useGridLayout = xn, s.useGroupBy = Se, s.useMountedLayoutEffect = Kn, s.usePagination = it, s.useResizeColumns = S, s.useRowSelect = Re, s.useRowState = vt, s.useSortBy = ot, s.useTable = oe, Object.defineProperty(s, "__esModule", { value: !0 });
    });
  }(At, At.exports)), At.exports;
}
process.env.NODE_ENV === "production" ? Mo.exports = Ku() : Mo.exports = qu();
var se = Mo.exports;
function zu(t, d, s) {
  var C = this, b = A.useRef(null), P = A.useRef(0), y = A.useRef(null), B = A.useRef([]), nn = A.useRef(), h = A.useRef(), pn = A.useRef(t), M = A.useRef(!0);
  pn.current = t;
  var un = !d && d !== 0 && typeof window < "u";
  if (typeof t != "function")
    throw new TypeError("Expected a function");
  d = +d || 0, s = s || {};
  var Nn = !!s.leading, Cn = "trailing" in s ? !!s.trailing : !0, fn = "maxWait" in s, qn = fn ? Math.max(+s.maxWait || 0, d) : null, hn = A.useCallback(function(en) {
    var dn = B.current, zn = nn.current;
    return B.current = nn.current = null, P.current = en, h.current = pn.current.apply(zn, dn);
  }, []), Hn = A.useCallback(function(en, dn) {
    un && cancelAnimationFrame(y.current), y.current = un ? requestAnimationFrame(en) : setTimeout(en, dn);
  }, [un]), An = A.useCallback(function(en) {
    if (!M.current)
      return !1;
    var dn = en - b.current, zn = en - P.current;
    return !b.current || dn >= d || dn < 0 || fn && zn >= qn;
  }, [qn, fn, d]), Un = A.useCallback(function(en) {
    return y.current = null, Cn && B.current ? hn(en) : (B.current = nn.current = null, h.current);
  }, [hn, Cn]), Wn = A.useCallback(function() {
    var en = Date.now();
    if (An(en))
      return Un(en);
    if (M.current) {
      var dn = en - b.current, zn = en - P.current, Xn = d - dn, Jn = fn ? Math.min(Xn, qn - zn) : Xn;
      Hn(Wn, Jn);
    }
  }, [qn, fn, An, Hn, Un, d]), Dn = A.useCallback(function() {
    y.current && (un ? cancelAnimationFrame(y.current) : clearTimeout(y.current)), P.current = 0, B.current = b.current = nn.current = y.current = null;
  }, [un]), tr = A.useCallback(function() {
    return y.current ? Un(Date.now()) : h.current;
  }, [Un]);
  A.useEffect(function() {
    return M.current = !0, function() {
      M.current = !1;
    };
  }, []);
  var Kn = A.useCallback(function() {
    for (var en = [], dn = 0; dn < arguments.length; dn++)
      en[dn] = arguments[dn];
    var zn = Date.now(), Xn = An(zn);
    if (B.current = en, nn.current = C, b.current = zn, Xn) {
      if (!y.current && M.current)
        return P.current = b.current, Hn(Wn, d), Nn ? hn(b.current) : h.current;
      if (fn)
        return Hn(Wn, d), hn(b.current);
    }
    return y.current || Hn(Wn, d), h.current;
  }, [hn, Nn, fn, An, Hn, Wn, d]), Cr = A.useCallback(function() {
    return !!y.current;
  }, []), Qn = A.useMemo(function() {
    return {
      callback: Kn,
      cancel: Dn,
      flush: tr,
      pending: Cr
    };
  }, [Kn, Dn, tr, Cr]);
  return Qn;
}
function _u(t, d) {
  return t === d;
}
function Uo(t) {
  return typeof t == "function" ? function() {
    return t;
  } : t;
}
function Xu(t) {
  var d = A.useState(Uo(t)), s = d[0], C = d[1], b = A.useCallback(function(P) {
    return C(Uo(P));
  }, []);
  return [s, b];
}
function Yu(t, d, s) {
  var C = s && s.equalityFn || _u, b = Xu(t), P = b[0], y = b[1], B = zu(A.useCallback(function(h) {
    return y(h);
  }, [y]), d, s), nn = A.useRef(t);
  return A.useEffect(function() {
    C(nn.current, t) || (B.callback(t), nn.current = t);
  }, [t, B, C]), [P, { cancel: B.cancel, pending: B.pending, flush: B.flush }];
}
function ju(t) {
  return aa({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" } }] })(t);
}
function Uu(t) {
  return aa({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "polyline", attr: { fill: "none", strokeWidth: "2", points: "9 6 15 12 9 18", transform: "matrix(-1 0 0 1 24 0)" } }] })(t);
}
function Ju(t) {
  if (Array.isArray(t) || (t.general.geoType === "us-county" || t.general.geoType === "single-state" || t.general.geoType === "us" && (t != null && t.data)) && (t == null || t.data.forEach((d) => {
    d[t.columns.geo.name] && (!isNaN(parseInt(d[t.columns.geo.name])) && d[t.columns.geo.name].length === 4 && (d[t.columns.geo.name] = 0 + d[t.columns.geo.name]), d[t.columns.geo.name] = d[t.columns.geo.name].toString());
  })), Array.isArray(t) && t.length > 0) {
    let d = Object.keys(t[0]), s = ["fips", "FIPS", "fips codes", "FIPS CODES", "Fips Codes", "fips Codes", "Fips codes", "FIPS Codes"];
    const C = d.filter((b) => s.includes(b));
    if (!C.length)
      return;
    t == null || t.forEach((b) => {
      b[C] && (!isNaN(parseInt(b[C])) && b[C].length === 4 && (b[C] = 0 + b[C]), b[C] = b[C].toString());
    });
  }
  return t;
}
const bo = 10, te = {
  emptyCols: "It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.",
  emptyData: "Your data file is empty.",
  dataType: "Your datatype is not supported.",
  fileType: "The file type that you are trying to upload is not supported.",
  formatting: "Please check the formatting of your data file.",
  failedFetch: "Error fetching or parsing data file.",
  urlInvalid: "Please make sure to use a valid URL.",
  cannotReach: "Cannot reach URL, please make sure it's correct.",
  fileTooLarge: `File is too large. Maximum file size is ${bo}MB.`
}, $u = A.memo(({ globalFilter: t, setGlobalFilter: d, disabled: s = !1 }) => {
  const [C, b] = A.useState(t), [P] = Yu(C, 200);
  A.useEffect(() => {
    typeof P == "string" && P !== t && d(P ?? "");
  }, [P]);
  const y = (B) => {
    b(B.target.value);
  };
  return /* @__PURE__ */ g.createElement(
    "input",
    {
      className: "filter",
      value: C,
      onChange: y,
      type: "search",
      placeholder: "Filter...",
      disabled: s
    }
  );
}), Jo = A.memo(({ globalFilter: t, data: d, setGlobalFilter: s }) => /* @__PURE__ */ g.createElement("header", { className: "data-table-header" }, /* @__PURE__ */ g.createElement("h2", null, "Data Preview"), /* @__PURE__ */ g.createElement($u, { globalFilter: t || "", setGlobalFilter: s, disabled: d === null }))), Zu = A.memo(({ previousPage: t, nextPage: d, canPreviousPage: s, canNextPage: C, pageNumber: b, totalPages: P }) => /* @__PURE__ */ g.createElement("footer", { className: "data-table-pagination mt-2" }, /* @__PURE__ */ g.createElement("ul", null, /* @__PURE__ */ g.createElement("li", null, /* @__PURE__ */ g.createElement(
  "button",
  {
    onClick: () => t(),
    className: "btn btn-prev display-flex align-items-center justify-content-center",
    disabled: !s,
    title: "Previous Page"
  },
  " ",
  /* @__PURE__ */ g.createElement(Uu, null)
)), /* @__PURE__ */ g.createElement("li", { className: "me-2" }, /* @__PURE__ */ g.createElement(
  "button",
  {
    onClick: () => d(),
    className: "btn btn-next display-flex align-items-center justify-content-center",
    disabled: !C,
    title: "Next Page"
  },
  /* @__PURE__ */ g.createElement(ju, null)
))), /* @__PURE__ */ g.createElement("span", null, "Page ", b, " of ", P))), Qu = () => {
  const { config: t } = A.useContext(ce), d = A.useMemo(() => t.type === "dashboard" ? Object.values(t.datasets).find((en) => en.preview && Array.isArray(en.data)) : t.data, [t.type, t.data, t.datasets]), [s, C] = A.useState(d), b = (en) => {
    const dn = Object.keys(en[0]).includes("tableData"), zn = pn(dn ? en[0].tableData : en);
    return Ju(zn), zn;
  }, P = (en) => C(b(en)), y = A.useContext(Ee), B = async (en, dn) => {
    if (dn.preview)
      if (dn.dataUrl) {
        const zn = await Io(dn.dataUrl);
        Array.isArray(zn) && P(zn);
      } else
        Array.isArray(dn.data) && P(dn.data);
  }, nn = async (en) => {
    for (const dn of Object.keys(en))
      await B(dn, en[dn]);
  };
  A.useEffect(() => {
    (async () => {
      if (t.data)
        P(d);
      else if (t.type === "dashboard")
        await nn(t.datasets);
      else if (t.dataUrl) {
        const dn = await Io(t.dataUrl);
        Array.isArray(dn) && P(dn);
      }
    })();
  }, [t, t.data, d]);
  const h = A.useMemo(() => {
    if (!s)
      return [];
    const en = s.columns ?? [];
    return en.length > 0 && en.includes("") && y({ type: "EDITOR_SET_ERRORS", payload: [te.emptyCols] }), en.map((dn) => ({
      id: `column-${dn}`,
      accessor: (Xn) => Xn[dn],
      Header: dn
    }));
  }, [s]), pn = (en) => {
    let dn = [];
    en.forEach((Xn) => {
      Object.keys(Xn).forEach((Jn) => {
        dn.includes(Jn) === !1 && dn.push(Jn);
      });
    });
    const zn = [...en];
    if (Array.isArray(zn))
      return zn.columns = dn, zn;
  }, {
    getTableProps: M,
    getTableBodyProps: un,
    headerGroups: Nn,
    state: { pageIndex: Cn, globalFilter: fn },
    prepareRow: qn,
    setGlobalFilter: hn,
    page: Hn,
    canPreviousPage: An,
    canNextPage: Un,
    pageOptions: Wn,
    nextPage: Dn,
    previousPage: tr
  } = se.useTable(
    { columns: h, data: s, initialState: { pageSize: 25 } },
    se.useFlexLayout,
    se.useGlobalFilter,
    se.useSortBy,
    se.useResizeColumns,
    se.usePagination
  ), Kn = () => /* @__PURE__ */ g.createElement("section", { className: "no-data" }, /* @__PURE__ */ g.createElement("section", { className: "no-data-message" }, /* @__PURE__ */ g.createElement("section", null, /* @__PURE__ */ g.createElement("h3", null, "No Data"), /* @__PURE__ */ g.createElement("p", null, "Import data to preview"))), /* @__PURE__ */ g.createElement("div", { className: "table-container mt-2" }, /* @__PURE__ */ g.createElement("table", { className: "editor data-table", role: "table" }, /* @__PURE__ */ g.createElement("thead", null, /* @__PURE__ */ g.createElement("tr", null, /* @__PURE__ */ g.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ g.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ g.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }))), /* @__PURE__ */ g.createElement("tbody", null, /* @__PURE__ */ g.createElement(g.Fragment, null, [...Array(10)].map((en, dn) => /* @__PURE__ */ g.createElement("tr", { key: dn }, /* @__PURE__ */ g.createElement("td", null), /* @__PURE__ */ g.createElement("td", null), /* @__PURE__ */ g.createElement("td", null))))))));
  if (!s)
    return [/* @__PURE__ */ g.createElement(Jo, { key: "header" }), /* @__PURE__ */ g.createElement(Kn, { key: "table" })];
  const Cr = {
    previousPage: tr,
    nextPage: Dn,
    canPreviousPage: An,
    canNextPage: Un,
    pageNumber: Cn + 1,
    totalPages: Wn.length
  }, Qn = () => /* @__PURE__ */ g.createElement("div", { className: "table-responsive" }, /* @__PURE__ */ g.createElement("table", { className: "mt-2 w-100 table table-striped data-table table-sm ", "aria-hidden": "true", ...M }, /* @__PURE__ */ g.createElement("thead", null, Nn.map((en) => /* @__PURE__ */ g.createElement("tr", { ...en.getHeaderGroupProps() }, en.headers.map((dn) => /* @__PURE__ */ g.createElement(
    "th",
    {
      scope: "col",
      ...dn.getHeaderProps(dn.getSortByToggleProps()),
      className: dn.isSorted ? dn.isSortedDesc ? "sort sort-desc" : "sort sort-asc" : "",
      title: dn.Header
    },
    dn.render("Header"),
    /* @__PURE__ */ g.createElement("div", { ...dn.getResizerProps(), className: "resizer" })
  ))))), /* @__PURE__ */ g.createElement("tbody", { ...un() }, Hn.map((en) => (qn(en), /* @__PURE__ */ g.createElement("tr", { ...en.getRowProps() }, en.cells.map((dn) => /* @__PURE__ */ g.createElement("td", { ...dn.getCellProps(), title: dn.value }, dn.render("Cell")))))))), /* @__PURE__ */ g.createElement(Zu, { ...Cr }));
  return [
    /* @__PURE__ */ g.createElement(Jo, { key: "header", data: s, setGlobalFilter: hn, globalFilter: fn }),
    /* @__PURE__ */ g.createElement(Qn, { key: "table" })
  ];
}, ni = (t) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...t }, /* @__PURE__ */ A.createElement("path", { d: "M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z" })), It = A.createContext();
It.displayName = "SampleDataContext";
const ri = `STATE,Rate,Location,URL\r
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
`, ei = `Location,symbolCol,textCol,orderCol\r
School,¶,Footnote 4,4\r
School,§,Footnote 3,3\r
School,†,Footnote 2,2\r
School,*,Footnote 1,1\r
Vehicle,*,Some Vehicle Footnote,1\r
Work,*,Some Work Footnote,1\r
Home,*,Some Home Footnote,1`, ti = `Race,Age-adjusted rate\r
Hispanic or Latino,644.2\r
Non-Hispanic American Indian,636.1\r
Non-Hispanic Black,563.7\r
Non-Hispanic Asian or Pacific Islander,202.5\r
Non-Hispanic White,183.6\r
`, oi = `FIPS Codes,County,Public Health Jurisdiction,Percent Vaccinated,Vaccination Coverage Group\r
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
`, ai = `City,Longitude,Latitude,Value\r
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
`, ui = `x,y1,y2,y3,y4\r
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
`, ii = `Group_Category,Value\r
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
`, li = `[\r
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
`, si = `[\r
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
]`, ci = `date,quarter,upper_90,lower_90,random_col\r
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
`, yi = `[\r
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
]`, Ci = `[\r
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
]`, di = `[\r
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
]`, pi = `[\r
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
`, Do = {
  charts: [
    {
      text: "Chart Sample Data",
      fileName: "valid-data-chart.csv",
      data: ti
    },
    {
      text: "Box Plot Sample Data",
      fileName: "valid-boxplot.csv",
      data: ii
    },
    {
      text: "Scatter Plot Sample Data",
      fileName: "valid-scatterplot.csv",
      data: ui
    },
    {
      text: "Area Chart Sample Data",
      fileName: "valid-area-chart.json",
      data: li
    },
    {
      text: "Forecast Chart Data",
      fileName: "valid-forecast-data.csv",
      data: ci
    },
    {
      text: "Sankey Chart Data",
      fileName: "valid-sankey-data.json",
      data: di
    },
    {
      text: "Pivot Table Data",
      fileName: "pivotData.json",
      data: pi
    }
  ],
  maps: [
    {
      text: "United States: State Sample Data",
      fileName: "valid-data-map.csv",
      data: ri
    },
    {
      text: "United States: State Sample Data Footnotes",
      fileName: "valid-data-map-footnotes.csv",
      data: ei
    },
    {
      text: "United States: County Sample Data",
      fileName: "valid-county-data.csv",
      data: oi
    },
    {
      text: "United States: Geo Point Sample Data",
      fileName: "supported-cities.csv",
      data: ai
    },
    {
      text: "United States: Region",
      fileName: "valid-region-data.json",
      data: Ci
    },
    {
      text: "World: Geocode Sample Data",
      fileName: "valid-world-geocode.json",
      data: si
    },
    {
      text: "World: Default Data",
      fileName: "valid-world-data.json",
      data: yi
    }
  ]
}, ma = ({ text: t, fileName: d, data: s }) => {
  const { editingDataset: C, loadData: b } = A.useContext(It), P = (B) => b(new Blob([s], { type: "text/csv" }), d, C), y = (B) => B.keyCode === 13 && b(new Blob([s], { type: "text/csv" }), d, C);
  return /* @__PURE__ */ g.createElement(
    "button",
    {
      className: "link link-upload",
      onClick: P,
      onKeyDown: y
    },
    t
  );
}, fi = () => Do.maps.map((t) => /* @__PURE__ */ g.createElement(ma, { key: t.fileName, text: t.text, fileName: t.fileName, data: t.data })), gi = () => Do.charts.map((t) => /* @__PURE__ */ g.createElement(ma, { key: t.fileName, text: t.text, fileName: t.fileName, data: t.data })), mi = () => {
  const { config: t } = A.useContext(It);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("h3", { className: "heading-3" }, "Load Sample Data:"), /* @__PURE__ */ g.createElement("ul", { className: "sample-data-list" }, t.type !== "map" && /* @__PURE__ */ g.createElement(gi, null), t.type !== "chart" && /* @__PURE__ */ g.createElement(fi, null)));
}, Ro = () => null;
Ro.data = Do;
Ro.Buttons = mi;
const $o = (t) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", ...t }, /* @__PURE__ */ A.createElement("path", { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" }));
function vi() {
  const { config: t, errors: d, tempConfig: s, sharepath: C } = A.useContext(ce), b = (F) => {
    fn({ type: "EDITOR_SET_CONFIG", payload: F });
  }, P = (F) => {
    fn({ type: "EDITOR_SET_ERRORS", payload: F });
  }, y = new Ta(), [B, nn] = A.useState(
    t.dataFileSourceType === "url" ? t.dataFileName : t.dataUrl || ""
  ), [h, pn] = A.useState(!!t.dataUrl), [M, un] = A.useState(t.type === "dashboard" || !t.data), [Nn, Cn] = A.useState(void 0), fn = A.useContext(Ee), qn = {
    ".csv": "text/csv",
    ".json": "application/json"
  }, hn = (F) => F === void 0 ? "" : F > Math.pow(1024, 3) ? Math.round(F / Math.pow(1024, 3) * 100) / 100 + "GB" : F > Math.pow(1024, 2) ? Math.round(F / Math.pow(1024, 2) * 100) / 100 + "MB" : F > 1024 ? Math.round(F / 1024 * 100) / 100 + "KB" : F + "B", Hn = (F, z, an) => (z.map(function(tn, Fn, Yn) {
    if (!Yn.find((Sr) => Sr.dataKey === tn.dataKey))
      return !1;
  }), !(F.columns.indexOf(an) < 0)), An = (F) => so(B) ? ".csv" : wt(B) ? ".json" : Object.keys(qn).find((z) => F.pathname.endsWith(z)), Un = async () => {
    let F;
    try {
      F = so(B) || wt(B) ? B : new URL(B, window.location.origin);
    } catch {
      throw te.urlInvalid;
    }
    let z = null;
    const an = An(F);
    try {
      await Ra.get(F.toString(), {
        responseType: "blob"
      }).then((tn) => {
        z = tn.data, an === ".csv" && ["text/csv", "text/plain"].includes(z.type) || so(B) ? z = z.slice(0, z.size, "text/csv") : (z.type === "application/json" || an === ".json" && z.type === "text/plain" || wt(B)) && (z = z.slice(0, z.size, "application/json"));
      });
    } catch (tn) {
      console.error(tn);
      const Fn = tn.toString();
      throw Object.values(te).includes(tn) ? Fn : te.failedFetch;
    }
    return t.type === "dashboard" && nn(""), z;
  }, Wn = ([F]) => Dn(F, Nn, Nn), Dn = async (F = null, z, an) => {
    let tn = F, Fn = (tn == null ? void 0 : tn.path) ?? z ?? B;
    Fn && typeof Fn == "string" && (Fn = Fn.trim());
    const Yn = F ? "file" : "url";
    if (Yn === "url")
      try {
        tn = await Un();
      } catch (pr) {
        P([pr]);
        return;
      }
    const Sr = tn.size;
    if (Sr > bo * 1048576) {
      P([te.fileTooLarge]);
      return;
    }
    const br = (() => {
      const pr = (F == null ? void 0 : F.name) || B || z;
      if (Yn === "file") {
        const cr = pr.match(/(?:\.([^.]+))?$/g), mr = cr.length === 0 ? ".csv" : cr[0];
        return qn[mr];
      }
      if (Yn === "url")
        return tn.type;
    })(), Ar = new FileReader(), Lr = (pr) => {
      switch (br) {
        case "text/csv":
          return Ja(pr);
        case "text/plain":
        case "application/json":
          try {
            return wt(B) ? JSON.parse(pr).response.docs : JSON.parse(pr);
          } catch {
            P([te.formatting]);
            return;
          }
        default:
          P([te.fileType]);
          return;
      }
    };
    Ar.onload = function() {
      const pr = (cr, mr = !1) => {
        if (t.type === "dashboard") {
          let vr = { ...t.datasets };
          Object.keys(vr).forEach((In) => vr[In].preview = !1);
          const Xr = br.split("/")[1].toUpperCase();
          vr[an || Fn] = {
            data: cr,
            // new data
            dataFileSize: Sr,
            dataFileName: Fn,
            // new file source
            dataFileSourceType: Yn,
            // new file source type
            dataFileFormat: Xr,
            preview: !0
          }, h && (vr[an || Fn].dataUrl = Fn);
          const Q = mr ? { ...t, ...s } : t;
          b({ ...Q, datasets: vr });
        } else {
          let vr = {
            ...t,
            ...s,
            data: cr,
            // new data
            dataFileName: Fn,
            // new file source
            dataFileSourceType: Yn,
            // new file source type
            formattedData: y.developerStandardize(cr, t.dataDescription)
          };
          h && (vr.dataUrl = Fn), b(vr);
        }
      };
      try {
        const cr = Lr(this.result.toString()), mr = y.autoStandardize(cr);
        t.data && t.series ? Hn(mr, t.series, t == null ? void 0 : t.xAxis.dataKey) ? pr(mr, !0) : Pr(
          {
            data: mr,
            dataFileName: Fn,
            dataFileSourceType: Yn
          },
          "It appears that your data does not contain all of the columns that your last dataset contained. Continuing will reset your configuration. Do you want to continue?"
        ) : pr(mr), Nn && Cn(void 0), un(!1);
      } catch (cr) {
        P(cr);
      }
    };
    const _r = br === "text/csv" ? "utf-8" : "";
    Ar.readAsText(tn, _r);
  };
  A.useEffect(() => {
    let F = { ...s || t };
    if (t.formattedData === void 0 && t.dataDescription) {
      const z = y.developerStandardize(t.data, t.dataDescription);
      z && (F.formattedData = z);
    }
    fn({ type: "EDITOR_SAVE", payload: F });
  }, []);
  const tr = (F, z, an) => {
    if (t.type === "dashboard") {
      let tn = { ...t.datasets[F].dataDescription, [z]: an }, Fn = y.developerStandardize(t.datasets[F].data, tn), Yn = { ...t.datasets };
      Yn[F] = { ...Yn[F], dataDescription: tn, formattedData: Fn }, b({ ...t, datasets: Yn });
    } else {
      let tn = { ...t.dataDescription, [z]: an }, Fn = y.developerStandardize(t.data, tn);
      b({ ...t, formattedData: Fn, dataDescription: tn });
    }
  }, Kn = (F, z) => {
    if (z) {
      let an = { ...t.datasets };
      F === !1 ? delete an[z].dataUrl : an[z].dataUrl = an[z].dataFileName, b({ ...t, datasets: an });
    } else if (t.type !== "dashboard") {
      let an = { ...t };
      F === !1 ? delete an.dataUrl : an.dataUrl = an.dataFileName, b(an);
    }
    pn(F);
  }, { getRootProps: Cr, getInputProps: Qn, isDragActive: en } = wo({ onDrop: Wn }), {
    getRootProps: dn,
    getInputProps: zn,
    isDragActive: Xn
  } = wo({ onDrop: Wn }), Jn = () => /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("form", { className: "input-group d-flex", onSubmit: (F) => F.preventDefault() }, /* @__PURE__ */ g.createElement(
    "input",
    {
      id: "external-data",
      type: "text",
      className: "form-control flex-grow-1 border-right-0",
      placeholder: "e.g., https://data.cdc.gov/resources/file.json",
      "aria-label": "Load data from external URL",
      "aria-describedby": "load-data",
      value: B,
      onChange: (F) => nn(F.target.value)
    }
  ), /* @__PURE__ */ g.createElement(
    "button",
    {
      className: "rounded-0 border-0 btn btn-primary px-4",
      type: "submit",
      id: "load-data",
      onClick: () => Dn(null, B, Nn)
    },
    "Load"
  )), /* @__PURE__ */ g.createElement("label", { htmlFor: "keep-url", className: "mt-1 d-flex keep-url" }, /* @__PURE__ */ g.createElement(
    "input",
    {
      type: "checkbox",
      id: "keep-url",
      checked: h,
      onChange: () => Kn(!h, Nn)
    }
  ), " ", "Always load from URL (normally will only pull once)")), Pr = (F = {}, z = "Are you sure you want to do this?") => {
    F.newViz = !0, window.confirm(z) === !0 && (fn({ type: "EDITOR_SAVE", payload: F }), un(!0));
  }, Rr = () => (
    //todo convert to modal
    /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(
      "button",
      {
        className: "btn danger",
        onClick: () => Pr(
          { type: t.type, visualizationType: t.visualizationType },
          "Resetting will remove your data and settings. Do you want to continue?"
        )
      },
      "Clear",
      /* @__PURE__ */ g.createElement(Lo, null)
    ), t.dataFileSourceType === "file" && /* @__PURE__ */ g.createElement("div", { className: "link link-replace", ...dn() }, /* @__PURE__ */ g.createElement("input", { ...zn() }), /* @__PURE__ */ g.createElement("p", null, /* @__PURE__ */ g.createElement("span", null, "or replace file"))))
  ), Mr = (F, z, an) => {
    let tn = { ...t.datasets };
    an === !0 ? Object.keys(tn).forEach((Fn) => {
      const Yn = Fn === F;
      tn[Fn][z] = Yn;
    }) : tn[F][z] = an, b({ ...t, datasets: tn });
  }, Ir = (F) => {
    let z = { ...t.datasets }, an = { ...t.visualizations };
    Object.keys(an).forEach((tn) => {
      an[tn].dataKey === F && delete an[tn].dataKey;
    }), delete z[F], b({ ...t, datasets: z, visualizations: an });
  }, dr = (F, z) => {
    if (F === z)
      return;
    let an = { ...t.datasets }, tn = { ...t.visualizations }, Fn = 2, Yn = z;
    for (; an[z]; )
      z = Yn + "-" + Fn, Fn++;
    an[z] = an[F], delete an[F], Object.keys(tn).forEach((Sr) => {
      tn[Sr].dataKey === F && (tn[Sr].dataKey = z);
    }), b({ ...t, datasets: an, visualizations: tn });
  };
  let gr, or = !1;
  t.type === "dashboard" ? or = Object.keys(t.datasets).length > 0 : (gr = t, or = !!t.formattedData || t.data && t.dataDescription && y.autoStandardize(t.data)), t.visualizationType === "Sankey" && t.data && (or = !0), (t.visualizationType === "Box Plot" && t.data || t.visualizationType === "Scatter Plot") && (or = !0);
  const Or = /* @__PURE__ */ g.createElement(g.Fragment, null, t.filters && t.filters.map(
    (F, z) => F.type !== "url" ? /* @__PURE__ */ g.createElement(g.Fragment, null) : /* @__PURE__ */ g.createElement("fieldset", { key: F.key, className: "edit-block url-filters-block" }, /* @__PURE__ */ g.createElement(
      "button",
      {
        onClick: (an) => {
          let tn = [...t.filters];
          tn.splice(z, 1), b({ ...t, filters: tn, runtimeDataUrl: void 0 });
        }
      },
      "Remove"
    ), /* @__PURE__ */ g.createElement("label", null, /* @__PURE__ */ g.createElement("span", { className: "edit-label column-heading" }, "Label", /* @__PURE__ */ g.createElement(Dr, { style: { textTransform: "none" } }, /* @__PURE__ */ g.createElement(Dr.Target, null, /* @__PURE__ */ g.createElement(fo, { display: "question" })), /* @__PURE__ */ g.createElement(Dr.Content, null, /* @__PURE__ */ g.createElement("p", { style: { padding: "0.5rem" } }, "The label that will appear above the dropdown filter.")))), " ", /* @__PURE__ */ g.createElement(
      "input",
      {
        type: "text",
        defaultValue: F.label,
        onChange: (an) => {
          let tn = [...t.filters];
          tn[z].label = an.target.value, b({ ...t, filters: tn });
        }
      }
    )), /* @__PURE__ */ g.createElement("label", null, /* @__PURE__ */ g.createElement("span", { className: "edit-label column-heading" }, "Query string parameter", /* @__PURE__ */ g.createElement(Dr, { style: { textTransform: "none" } }, /* @__PURE__ */ g.createElement(Dr.Target, null, /* @__PURE__ */ g.createElement(fo, { display: "question" })), /* @__PURE__ */ g.createElement(Dr.Content, null, /* @__PURE__ */ g.createElement("p", { style: { padding: "0.5rem" } }, "Name of the query string parameter that will be appended to the URL above with the values provided below.")))), " ", /* @__PURE__ */ g.createElement(
      "input",
      {
        type: "text",
        defaultValue: F.queryParameter,
        onChange: (an) => {
          let tn = [...t.filters];
          tn[z].queryParameter = an.target.value, b({ ...t, filters: tn });
        }
      }
    )), /* @__PURE__ */ g.createElement("label", null, /* @__PURE__ */ g.createElement("span", { className: "edit-label column-heading" }, "Values"), " "), /* @__PURE__ */ g.createElement("ul", { className: "value-list" }, F.orderedValues && F.orderedValues.map((an, tn) => /* @__PURE__ */ g.createElement("li", null, an, /* @__PURE__ */ g.createElement(
      "input",
      {
        type: "text",
        placeholder: "Enter value display name here",
        value: F.labels ? F.labels[an] : void 0,
        className: "url-value-label",
        onChange: (Fn) => {
          let Yn = [...t.filters];
          Yn[z].labels = Yn[z].labels || {}, Yn[z].labels[an] = Fn.target.value, b({ ...t, filters: Yn });
        }
      }
    ), /* @__PURE__ */ g.createElement(
      "button",
      {
        onClick: () => {
          let Fn = [...t.filters];
          Fn[z].labels && delete Fn[z].labels[Fn[z].orderedValues[tn]], Fn[z].orderedValues.splice(tn, 1), b({ ...t, filters: Fn });
        }
      },
      "X"
    )))), /* @__PURE__ */ g.createElement(
      "form",
      {
        onSubmit: (an) => {
          if (an.preventDefault(), !t.filters[z].orderedValues || t.filters[z].orderedValues.indexOf(an.target[0].value) === -1) {
            let tn = [...t.filters];
            tn[z].orderedValues = tn[z].orderedValues || [], tn[z].orderedValues.push(an.target[0].value), tn[z].values = tn[z].orderedValues, tn[z].active || (tn[z].active = an.target[0].value), an.target[0].value = "", b({ ...t, filters: tn });
          }
        }
      },
      /* @__PURE__ */ g.createElement("input", { type: "text", placeholder: "Enter new value name here" }),
      " ",
      /* @__PURE__ */ g.createElement("button", { type: "submit", style: { marginTop: "1em" } }, "Add New Value")
    ))
  ), /* @__PURE__ */ g.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: () => {
        b({
          ...t,
          filters: t.filters ? [...t.filters, { type: "url", key: Date.now() }] : [{ type: "url", key: Date.now() }]
        });
      }
    },
    "Add New URL Filter"
  )), Br = !["Box Plot", "Scatter Plot", "Sankey"].includes(t == null ? void 0 : t.visualizationType);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("div", { className: "left-col" }, t.type === "dashboard" && Object.keys(t.datasets).length > 0 && /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("div", { className: "heading-3" }, "Data Sources"), /* @__PURE__ */ g.createElement("table", null, /* @__PURE__ */ g.createElement("thead", null, /* @__PURE__ */ g.createElement("tr", null, /* @__PURE__ */ g.createElement("th", null, "Name"), /* @__PURE__ */ g.createElement("th", null, "Size"), /* @__PURE__ */ g.createElement("th", null, "Type"), /* @__PURE__ */ g.createElement("th", { colSpan: 3 }, "Actions"))), /* @__PURE__ */ g.createElement("tbody", null, Object.keys(t.datasets).map(
    (F) => t.datasets[F].dataFileName && /* @__PURE__ */ g.createElement("tr", { key: `tr-${F}` }, /* @__PURE__ */ g.createElement("td", null, /* @__PURE__ */ g.createElement(
      "input",
      {
        className: "dataset-name-input",
        type: "text",
        defaultValue: F,
        onBlur: (z) => dr(F, z.target.value)
      }
    )), /* @__PURE__ */ g.createElement("td", { className: "p-1" }, hn(t.datasets[F].dataFileSize)), /* @__PURE__ */ g.createElement("td", { className: "p-1" }, t.datasets[F].dataFileFormat), /* @__PURE__ */ g.createElement("td", null, /* @__PURE__ */ g.createElement(
      "button",
      {
        className: "btn btn-link p-1",
        onClick: () => Mr(F, "preview", !0)
      },
      "Preview"
    )), /* @__PURE__ */ g.createElement("td", null, /* @__PURE__ */ g.createElement(
      "button",
      {
        className: "btn btn-link p-1",
        onClick: () => {
          Nn === F ? (Cn(void 0), nn(""), pn(!1)) : (Cn(F), nn(
            t.datasets[F].dataUrl || t.datasets[F].dataFileName
          ), pn(!!t.datasets[F].dataUrl));
        }
      },
      "Edit"
    )), /* @__PURE__ */ g.createElement("td", null, /* @__PURE__ */ g.createElement("button", { className: "btn btn-danger", onClick: () => Ir(F) }, "X")))
  )))), (gr == null ? void 0 : gr.data) && /* @__PURE__ */ g.createElement(g.Fragment, null, t.type !== "dashboard" && /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("div", { className: "heading-3" }, "Data Source"), /* @__PURE__ */ g.createElement("div", { className: "file-loaded-area" }, (t.dataFileSourceType === "file" || !t.dataFileSourceType) && /* @__PURE__ */ g.createElement("div", { className: "data-source-options" }, /* @__PURE__ */ g.createElement(
    "div",
    {
      className: Xn ? "drag-active cdcdataviz-file-selector loaded-file" : "cdcdataviz-file-selector loaded-file",
      ...dn()
    },
    /* @__PURE__ */ g.createElement("input", { ...zn() }),
    Xn ? /* @__PURE__ */ g.createElement("p", null, "Drop file here") : /* @__PURE__ */ g.createElement("p", null, /* @__PURE__ */ g.createElement($o, null), " ", /* @__PURE__ */ g.createElement("span", null, t.dataFileName ?? "Replace data file"))
  ), /* @__PURE__ */ g.createElement("div", null, Rr())), t.dataFileSourceType === "url" && /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("div", { className: "url-source-options" }, /* @__PURE__ */ g.createElement("div", null, Jn()), /* @__PURE__ */ g.createElement("div", null, Rr())), t.dataUrl && (t.type === "chart" || t.type === "map") && Or))), Br && /* @__PURE__ */ g.createElement(
    Ha,
    {
      visualizationKey: null,
      configureData: gr,
      updateDescriptionProp: (F, z) => tr(gr.dataFileName, F, z),
      config: t,
      setConfig: b
    }
  )), (Nn || M) && // dataFileSourceType needs to be checked here since earlier versions did not track this state
  /* @__PURE__ */ g.createElement("div", { className: "load-data-area" }, /* @__PURE__ */ g.createElement("div", { className: "heading-3" }, Nn ? `Editing ${Nn}` : "Add Dataset"), /* @__PURE__ */ g.createElement(Vu, { startingTab: Nn && t.datasets[Nn].dataFileSourceType === "url" ? 1 : 0 }, /* @__PURE__ */ g.createElement(ke, { title: "Upload File", icon: /* @__PURE__ */ g.createElement($o, { className: "inline-icon" }) }, C && /* @__PURE__ */ g.createElement("p", { className: "alert--info" }, "The share path set for this website is: ", C), /* @__PURE__ */ g.createElement(
    "div",
    {
      className: en ? "drag-active cdcdataviz-file-selector" : "cdcdataviz-file-selector",
      ...Cr()
    },
    /* @__PURE__ */ g.createElement("input", { ...Qn() }),
    en ? /* @__PURE__ */ g.createElement("p", null, "Drop file here") : /* @__PURE__ */ g.createElement("p", null, "Drag file to this area, or ", /* @__PURE__ */ g.createElement("span", null, "select a file"), ".")
  ), /* @__PURE__ */ g.createElement("p", { className: "footnote" }, "Supported file types: ", Object.keys(qn).join(", "), ". Maximum file size ", bo, "MB.")), /* @__PURE__ */ g.createElement(ke, { title: "Load from URL", icon: /* @__PURE__ */ g.createElement(ni, { className: "inline-icon" }) }, Jn())), d && (Array.isArray(d) ? d.map((F, z) => /* @__PURE__ */ g.createElement("div", { className: "error-box slim mt-2", key: `error-${F}` }, /* @__PURE__ */ g.createElement("span", null, F), " ", /* @__PURE__ */ g.createElement(
    Lo,
    {
      className: "inline-icon dismiss-error",
      onClick: () => P(d.filter((an, tn) => tn !== z))
    }
  ))) : d.message), /* @__PURE__ */ g.createElement(It.Provider, { value: { loadData: Dn, editingDataset: Nn, config: t } }, /* @__PURE__ */ g.createElement(Ro.Buttons, null))), t.type === "dashboard" && !M && /* @__PURE__ */ g.createElement("div", { className: "mt-2" }, /* @__PURE__ */ g.createElement("button", { className: "btn btn-primary", onClick: () => un(!0) }, "+ Add More Files")), or && /* @__PURE__ */ g.createElement("div", { className: "mt-2" }, /* @__PURE__ */ g.createElement(
    "button",
    {
      className: "btn btn-primary",
      onClick: () => fn({ type: "EDITOR_SET_GLOBALACTIVE", payload: 2 })
    },
    "Configure your visualization"
  )), /* @__PURE__ */ g.createElement(
    "a",
    {
      href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "guidance-link"
    },
    /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement("h3", null, "Get Help"), /* @__PURE__ */ g.createElement("p", null, "Documentation and examples on formatting data and configuring visualizations."))
  )), /* @__PURE__ */ g.createElement("div", { className: "right-col" }, /* @__PURE__ */ g.createElement(Qu, null)));
}
const hi = (t) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024", fill: "currentColor", ...t }, /* @__PURE__ */ A.createElement("path", { d: "M489.3,377.8H80.1v-288c0-8.4-6.8-15.2-15.2-15.2H34.7c-8.4,0-15.2,6.8-15.2,15.2v318.3c0,16.7,13.6,30.3,30.3,30.3h439.5 c8.4,0,15.2-6.8,15.2-15.2v-30.3C504.5,384.6,497.7,377.8,489.3,377.8z" }), /* @__PURE__ */ A.createElement("path", { d: "M459,105H347.2c-20.3,0-30.4,24.5-16.1,38.8l30.7,30.7L292.3,244l-69.5-69.5c-11.8-11.8-31-11.8-42.9,0l-65.1,65.1 c-5.9,5.9-5.9,15.5,0,21.4l21.4,21.4c5.9,5.9,15.5,5.9,21.4,0l43.6-43.6l69.5,69.5c11.8,11.8,31,11.8,42.9,0l90.9-90.9l30.7,30.7 c14.3,14.3,38.8,4.2,38.8-16.1V120.1C474.2,111.7,467.4,105,459,105z" }), /* @__PURE__ */ A.createElement("path", { d: "M991.2,280.5h-188l125.2,125.2c4.8,4.8,12.7,5.2,17.6,0.5c30.7-28.9,51.8-67.8,57.9-111.6 C1005,287.2,998.8,280.5,991.2,280.5L991.2,280.5z" }), /* @__PURE__ */ A.createElement("path", { d: "M978.7,229.2c-6.5-94.6-82.2-170.3-176.8-176.8c-7.2-0.5-13.3,5.6-13.3,12.8v177.3h177.3 C973.1,242.5,979.2,236.4,978.7,229.2L978.7,229.2z" }), /* @__PURE__ */ A.createElement("path", { d: "M750.5,280.5v-188c0-7.6-6.6-13.8-14.1-12.7C642,93.1,569.8,175.6,573.2,274.5C576.6,376,664,459.3,765.6,458 c39.9-0.5,76.8-13.4,107.2-34.9c6.3-4.4,6.7-13.7,1.2-19.1L750.5,280.5z" }), /* @__PURE__ */ A.createElement("path", { d: "M130.7,558l1.1,7.2l5.5,11.6l-2.8,12.1l-6.1-7.7l-3.9-8.8l-8.8-1.7L102,569h-3.9l2.2,7.7l7.7,11v11l2.2,12.1l9.9,1.1 l3.9,5.5l-12.1-1.7l-3.9,2.8l1.7,11.6l-2.2,12.7l0.5,14.9l-3.9,9.9l-4.4,14.3l3.3,9.9l2.2,12.7l1.7,9.4l-2.2,12.7l1.7,8.8l3.9,8.8 l3.3,11l2.8,7.2L128,772l5.5-0.6l7.7,1.1l-8.3,2.2l2.2,3.9l-7.2,1.1l6.6,7.2l6.6,7.2l-2.2,6.1l8.8,12.7l9.4,7.7l1.1,9.4l7.7,3.9 l10.5,3.3l8.3,7.2l7.2,4.4l7.7,6.1l4.4,3.3l5,11l28.1-0.6l55.2,19.3h45.8l-1.1-4.4h22.1l8.8,5l5,5l12.7,8.8l4.4,16l12.7,6.6l7.7,3.3 l10.5-12.7l13.8,1.7l5.5,4.4l14.9,24.3l5,6.1l3.9,13.8l29.2,11.6l-1.1-9.9l-1.1-13.8l9.4-11l-1.7-3.3l9.4-7.7l5,2.8l8.3-9.4l5-6.6 h7.2l16-3.3l11.6,5h8.8l3.3-3.9l3.9,2.8l0.6,5l11.6,3.9l11-1.7l9.4,0.6l-7.7-6.1l-0.6-3.3l5-2.8l-0.5-2.8H598l-8.8,1.1l5.5-5 l2.8-3.3l2.8,2.8l16-2.2l2.2,2.8h11l6.1-1.7l8.8-0.5l8.3,3.3l5-0.6l5,7.2l9.9,0.5l5.5-4.4h5.5l11,9.4l6.1,6.6l1.7,8.8l-1.1,11 l3.9,11.6l10.5,13.2l6.1,12.7l2.2,5l11-2.2l2.8-12.1v-18.2l-5.5-14.9l-1.7-3.9l-1.1-11l-9.4-11l-1.7-13.2l0.5-11l4.4-12.1l8.3-6.6 l-0.6-5l9.9-1.7l14.3-16l6.6-5.5l7.2,1.1l6.6-12.7l9.4-5c0,0,7.2,1.1,7.7-1.7c0.5-2.8,7.7-16,7.7-16l-7.7-4.4l4.4-3.9l1.1-2.8 l-4.4-11l-4.4-5l5.5-6.1l-4.4-5.5l-1.1-11l-0.6-9.4l3.3-2.8l2.2,13.8l1.7,6.6l3.9,6.1l-1.1,9.9l6.1-12.1l3.9-9.4l0.6-5.5l-5.5-6.6 l-0.6-2.8l1.7-1.7l8.8,5.5l2.8-6.6l6.1-6.1l1.1-6.6l-1.1-7.7l0.5-3.9l1.1-5.5l4.4,6.1h2.2l6.6-1.1l6.6-0.6l8.8-2.8l-1.7-3.3 l-8.8,0.6l-8.3,2.2l-3.9,2.2l-0.6-3.9l2.8-3.3l7.2-1.7l8.8-1.7l6.1-1.7l5-3.3l11.6,2.8c0,0,5,2.8,5.5,1.1c0.6-1.7,2.2-6.1,2.2-6.1 l-3.9-4.4l-1.7-6.6l1.1-11l1.1-8.8l5-6.6l1.1-2.8l3.3,1.7l10.5-11.6h3.9l8.8-1.1l2.8-5.5h7.7l6.6-5.5l-2.5-3l-3-7.4l-3.3-2.5 l1.4-18.5l-1.7-16.8l-9.9-3l-8.6,3l-4.7-0.6l-19,44.4l-8.8,0.6l-3.9,3.3l-46.9-0.3l-11.6,10.8l-7.2,4.4l-3.3,9.4l-1.7,5l-8.3,5.5 H774l-6.1-2.8l-7.7,1.1l-9.9,3.3l0.6,5l-0.6,8.8l-5,4.4l-9.9,2.2l-15.4,7.7l-11.6,3.9l-11,0.6l-6.6-5l3.3-6.1l1.7-1.7l2.2-6.1 l4.1-2.5l5.2-9.1l-5.5-7.2l-1.1-11.6l-7.2-2.2l-9.4,6.6l3.3-7.7l5.5-7.7l-2.2-7.2l-1.7-8.3l-8.8-3.3l-7.7-6.6l-9.4,3.9l0.6,7.2 l-5.5,6.6l-4.4-2.2l-8.3,9.4v11l1.1,11l5,7.7l-0.6,16.6l-10.5,9.9l-7.7,0.6l-3.9-11.6l-3.9-8.3l1.7-11l-1.7-11l3.9-7.2l2.2-7.2 l3.9-12.1l-8.8,9.9l5-17.1l7.7-6.6l9.4-0.6l7.2-3.3H667h9.4l6.1-1.7l7.2,1.1l3.3,5.5l13.8,5l2.8-7.7l-9.4,1.1l-6.1-0.6l-8.8-6.6 l-5.5-3.3l-6.3-4.7l-6.3,1.9l-6.1-4.4l-14.3,0.6l-7.7,5l-6.1-3.9l-7.2-4.4l-10.5-0.6l10.5-14.9l-12.1,5.5l-9.9,7.7l-9.9,5.5 l-8.8,1.1l-1.1-5.5l-18.2,3.9l15.3-13.4l10.8-7.9l13.4-10.5l-5.5-0.8l-18.2,0.6l-8.3-1.7l-7.4-1.2L558,564l-8.3,0.6l-15.7-3.9 l-4.1-5l-2.2-7.7l-3.9-3.6l0.3,4.1l-3.9,6.1l-387.3,0.3L130.7,558L130.7,558z" })), Si = (t) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.7", fill: "currentColor", ...t }, /* @__PURE__ */ A.createElement("path", { d: "M91,18.7H62c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h29c0.6,0,1-0.4,1-1v-6C92,19.1,91.6,18.7,91,18.7z M89.4,24.7H63.6 c-0.3,0-0.6-0.2-0.6-0.6v-2.9c0-0.3,0.2-0.6,0.6-0.6h25.9c0.3,0,0.6,0.2,0.6,0.6v2.9C90,24.4,89.8,24.7,89.4,24.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M75,30.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1v-6C76,31.1,75.6,30.7,75,30.7z M73.7,36.7h-9.3 c-0.2,0-0.3-0.2-0.3-0.3V33c0-0.2,0.2-0.3,0.3-0.3h9.3c0.2,0,0.3,0.2,0.3,0.3v3.3C74,36.5,73.8,36.7,73.7,36.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M81,43.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1v-6C82,44.1,81.6,43.7,81,43.7z M79.6,49.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.1c0-0.2,0.2-0.4,0.4-0.4h15.1c0.2,0,0.4,0.2,0.4,0.4v3.1C80,49.5,79.8,49.7,79.6,49.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M47,12.7h6c0.6,0,1,0.4,1,1v52c0,0.6-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1v-52C46,13.1,46.4,12.7,47,12.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M39,19.7v6c0,0.6-0.4,1-1,1H17c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h21C38.6,18.7,39,19.1,39,19.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M39,31.7v6c0,0.6-0.4,1-1,1H8c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h30C38.6,30.7,39,31.1,39,31.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M39,44.7v6c0,0.6-0.4,1-1,1H20c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h18C38.6,43.7,39,44.1,39,44.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M39,57.7v6c0,0.6-0.4,1-1,1H25c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h13C38.6,56.7,39,57.1,39,57.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M79,56.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v-6C80,57.1,79.6,56.7,79,56.7z M77.6,62.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.2c0-0.2,0.2-0.4,0.4-0.4h13.2c0.2,0,0.4,0.2,0.4,0.4v3.2C78,62.5,77.8,62.7,77.6,62.7z" })), wi = (t) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.3 82.6", fill: "currentColor", ...t }, /* @__PURE__ */ A.createElement("path", { d: "M83.9,61.4h-64V12.1c0-1.1-0.9-2-2-2h-5.5c-1.1,0-2,0.9-2,2v56.7c0,1.1,0.9,2,2,2h71.5c1.1,0,2-0.9,2-2v-5.5 C85.9,62.3,85,61.4,83.9,61.4z" }), /* @__PURE__ */ A.createElement("path", { d: "M67.1,47.3H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h40.3c1.1,0,2-0.9,2-2v-6.1C69.1,48.2,68.2,47.3,67.1,47.3L67.1,47.3z  M52,54.6H38.2c-0.7,0-1.3-0.4-1.3-1V51c0-0.5,0.6-1,1.3-1H52c0.7,0,1.3,0.4,1.3,1v2.6C53.3,54.1,52.8,54.6,52,54.6z" }), /* @__PURE__ */ A.createElement("path", { d: "M83.9,31.7H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h57.2c1.1,0,2-0.9,2-2v-6.1C85.9,32.6,85,31.7,83.9,31.7z M68.8,39 H45.2c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h23.7c0.7,0,1.3,0.4,1.3,1V38C70.2,38.5,69.6,39,68.8,39z" }), /* @__PURE__ */ A.createElement("path", { d: "M77,16.1H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2H77c1.1,0,2-0.9,2-2v-6.1C79,17,78.1,16.1,77,16.1z M58.9,23.4H36.6 c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h22.3c0.7,0,1.3,0.4,1.3,1v2.6C60.2,23,59.6,23.4,58.9,23.4z" })), Mi = (t) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...t }, /* @__PURE__ */ A.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("path", { d: "M30.22,49.19c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("path", { d: "M33.06,35.59c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("path", { d: "M48.12,37.83c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("circle", { cx: 49.64, cy: 22.73, r: 3.24 }), /* @__PURE__ */ A.createElement("path", { d: "M64.53,19.49c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("path", { d: "M57.95,31.11c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("path", { d: "M74.53,11.54c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }))), bi = (t) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...t }, /* @__PURE__ */ A.createElement("path", { d: "M54.68,29.14h-4.1V8.43h2.68c.5,0,.9-.15,1.19-.46,.46-.48,.44-1.11,.42-1.62,0-.11,0-.22,0-.34s0-.24,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-10.2c-.5,0-.9,.15-1.19,.46-.47,.48-.44,1.11-.42,1.62,0,.11,0,.23,0,.34s0,.23,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h2.68V29.14h-4.1c-1.33,0-2.42,1.09-2.42,2.42v31.31c0,1.33,1.09,2.42,2.42,2.42h4.1v7.97h-2.68c-.5,0-.9,.15-1.19,.46-.46,.48-.44,1.11-.42,1.62,0,.11,0,.22,0,.34s0,.24,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h10.2c.5,0,.9-.15,1.19-.46,.47-.48,.44-1.11,.42-1.62,0-.11,0-.23,0-.34s0-.23,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-2.68v-7.97h4.1c1.33,0,2.42-1.09,2.42-2.42V31.56c0-1.33-1.09-2.42-2.42-2.42Zm-2.42,20.5v10.81h-8.2v-10.81h8.2Zm-8.2-4.84v-10.81h8.2v10.81h-8.2Z" })), Ai = (t) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...t }, /* @__PURE__ */ A.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M87.91,60.65c-.02-.12-2.46-12.63-5.53-24.97-5.97-23.99-8.8-26-10.99-26-2.54,0-4.17,3.55-7.92,12.31-.67,1.56-1.4,3.27-2.18,5.02-1.66-4.14-3.14-5.9-4.84-5.9-2.39,0-4.05,3.42-7.07,9.64-5.56,11.44-13.97,28.72-29.12,28.72-.8,0-1.46,.65-1.46,1.45s.65,1.45,1.46,1.45H86.48c.43,0,.85-.19,1.12-.53,.28-.34,.39-.78,.31-1.2Zm-46.88-1.25c8.93-4.92,15.3-15.3,19.83-24.54,2.62,8.88,4.97,20.28,5.83,24.58l-25.66-.04Z" })), Di = (t) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...t }, /* @__PURE__ */ A.createElement("path", { d: "M18.29,39.57c0-1.03,.23-1.79,.68-2.28,.45-.49,1.06-.74,1.83-.74s1.42,.25,1.87,.74c.45,.49,.68,1.25,.68,2.29s-.23,1.79-.68,2.28c-.45,.5-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.25-.68-2.29Zm1.71-.02c0,.75,.09,1.25,.26,1.5,.13,.19,.31,.28,.54,.28s.42-.09,.55-.28c.17-.25,.25-.75,.25-1.5s-.08-1.24-.25-1.49c-.13-.19-.31-.29-.55-.29s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Zm2.47,9.08h-1.62l6.1-12.09h1.58l-6.05,12.09Zm3.55-3.01c0-1.03,.23-1.79,.68-2.28,.45-.49,1.07-.74,1.85-.74s1.4,.25,1.86,.74c.45,.5,.68,1.26,.68,2.28s-.23,1.79-.68,2.29c-.45,.49-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.26-.68-2.29Zm1.71,0c0,.75,.09,1.24,.26,1.49,.13,.19,.31,.29,.54,.29s.41-.09,.54-.28c.17-.25,.26-.75,.26-1.5s-.08-1.24-.25-1.5c-.13-.19-.31-.28-.55-.28s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Z" }), /* @__PURE__ */ A.createElement("path", { d: "M92.33,52.83v-20.42c0-1.61-1.31-2.93-2.93-2.93H6.65c-1.61,0-2.93,1.31-2.93,2.93v20.42c0,1.61,1.31,2.93,2.93,2.93H89.4c1.61,0,2.93-1.31,2.93-2.93Zm-52.34-2.93H9.58v-14.56h30.41v14.56Zm5.86-14.56h40.63v14.56H45.85v-14.56Z" })), Zo = (t) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...t }, /* @__PURE__ */ A.createElement("path", { d: "M89.56,65.41H16.36V8.8c0-1.1-.9-2-2-2h-5.48c-1.1,0-2,.9-2,2V72.89c0,1.1,.9,2,2,2H89.56c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M54.66,55.34c-17.76,0-33.46-17.8-34.12-18.56l-.98-1.13v-4.55l3.25,3.72c.15,.18,15.47,17.53,31.86,17.53h0c7.31,0,12.37-1.68,17.27-3.3,4.31-1.42,8.77-2.9,14.44-3.05l1.5-.04v3l-1.42,.04c-5.24,.14-9.29,1.48-13.59,2.9-5.13,1.69-10.43,3.45-18.22,3.45h0Z" }), /* @__PURE__ */ A.createElement("path", { d: "M87.84,59.04c-4.73-1.24-7.41-1.66-13.05-1.93-2.82-.14-5.22,.16-8,.5-2.73,.33-5.81,.71-10.06,.79-13.13,.27-23.77-4.63-37.17-17.31v-1.57c13.19,12.48,24.31,18.13,37.15,17.88,4.2-.08,7.26-.46,9.96-.79,2.83-.34,5.27-.64,8.17-.5,5.73,.28,8.2,.62,13,1.88v1.05Z" }), /* @__PURE__ */ A.createElement("path", { d: "M57.02,49.28c-19.55,0-30.91-14.65-37.69-23.41v-1.54c6.67,8.61,18.64,23.95,37.69,23.95,5.87,0,14.11-3.23,18.39-6.23,2.43-1.7,3.84-2.77,4.87-3.55,2.24-1.7,2.7-2.05,7.71-4.44l-.03,1.12c-4.92,2.34-4.91,2.47-7.08,4.12-1.04,.79-2.45,1.86-4.9,3.57-4.4,3.08-12.9,6.41-18.96,6.41Z" })), Ri = (t) => /* @__PURE__ */ A.createElement("svg", { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.69", ...t }, /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("style", null, ".cls-1{fill:#231f20;}")), /* @__PURE__ */ A.createElement("rect", { className: "cls-1", x: 46.87, y: 5.79, width: 8.32, height: 67.79, rx: 1 }), /* @__PURE__ */ A.createElement("rect", { className: "cls-1", x: 23.98, y: 17.65, width: 8.32, height: 23.31, rx: 1, transform: "translate(57.44 1.16) rotate(90)" }), /* @__PURE__ */ A.createElement("rect", { className: "cls-1", x: 19.53, y: 25.99, width: 8.32, height: 32.21, rx: 1, transform: "translate(65.79 18.41) rotate(90)" }), /* @__PURE__ */ A.createElement("rect", { className: "cls-1", x: 27.33, y: 60.4, width: 8.32, height: 14.6, rx: 1, transform: "translate(99.19 36.2) rotate(90)" }), /* @__PURE__ */ A.createElement("path", { className: "cls-1", d: "M81,52.74v4.32H64.55V52.74H81m1-2H63.55a1,1,0,0,0-1,1v6.32a1,1,0,0,0,1,1H82a1,1,0,0,0,1-1V51.74a1,1,0,0,0-1-1Z" }), /* @__PURE__ */ A.createElement("path", { className: "cls-1", d: "M90,14.41v4.33H64.55V14.41H90m1-2H63.55a1,1,0,0,0-1,1v6.33a1,1,0,0,0,1,1H91a1,1,0,0,0,1-1V13.41a1,1,0,0,0-1-1Z" })), Ni = (t) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...t }, /* @__PURE__ */ A.createElement("g", { id: "a" }, /* @__PURE__ */ A.createElement("path", { d: "M88.56,66.3H15.36V9.68c0-1.1-.9-2-2-2H7.89c-1.1,0-2,.9-2,2V73.77c0,1.1,.9,2,2,2H88.56c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M18.36,54.67v6.94c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-6.94c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M30.43,45.3v16.31c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-16.31c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M42.51,32.3v29.31c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-29.31c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M54.58,32.3v29.31c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-29.31c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M66.66,42.22v19.33c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-19.33c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M78.73,58.89v2.72c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-2.72c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("path", { d: "M20.25,38.69c-.65,0-1.3-.32-1.68-.91-.6-.93-.34-2.16,.59-2.77,.01,0,1.17-.76,2.86-1.92,.91-.62,2.16-.39,2.78,.52,.62,.91,.39,2.16-.52,2.78-1.75,1.2-2.95,1.98-2.95,1.98-.34,.22-.71,.32-1.09,.32Z" }), /* @__PURE__ */ A.createElement("path", { d: "M28.5,32.92c-.61,0-1.21-.28-1.6-.8-.66-.88-.48-2.14,.4-2.8,1.91-1.43,3.51-2.72,4.76-3.83l.21-.19c.82-.74,2.09-.67,2.82,.16,.74,.82,.66,2.09-.16,2.82l-.22,.2c-1.34,1.19-3.03,2.55-5.02,4.04-.36,.27-.78,.4-1.2,.4Zm50.28-1.66c-.34,0-.68-.09-1-.27-1.64-.95-3.38-2.08-5.66-3.67-.91-.63-1.13-1.88-.49-2.79,.63-.9,1.88-1.13,2.79-.49,2.17,1.52,3.83,2.6,5.37,3.48,.96,.55,1.28,1.78,.73,2.73-.37,.64-1.04,1-1.73,1Zm-40.24-6.8c-.58,0-1.15-.25-1.55-.73-.7-.85-.58-2.11,.28-2.81,1.98-1.63,3.82-2.93,5.61-3.98,.95-.56,2.18-.24,2.74,.72s.24,2.18-.72,2.74c-1.61,.94-3.27,2.12-5.09,3.62-.37,.31-.82,.45-1.27,.45Zm29.37-.59c-.4,0-.8-.12-1.15-.37-1.61-1.13-3.5-2.44-5.34-3.52-.95-.56-1.27-1.78-.72-2.74,.56-.95,1.78-1.27,2.74-.72,1.98,1.16,3.95,2.52,5.63,3.7,.9,.64,1.12,1.88,.48,2.79-.39,.55-1.01,.85-1.64,.85Zm-18-5.77c-.89,0-1.7-.6-1.93-1.49-.28-1.07,.36-2.16,1.43-2.44,1.72-.45,3.46-.68,5.17-.68,.71,0,1.46,.08,2.24,.24,1.08,.23,1.77,1.29,1.55,2.37s-1.29,1.77-2.37,1.55c-.5-.11-.98-.16-1.42-.16-1.37,0-2.77,.18-4.16,.55-.17,.04-.34,.07-.51,.07Z" }), /* @__PURE__ */ A.createElement("path", { d: "M88.21,34.46c-1.26,0-2.6-.2-4-.6-1.06-.3-1.68-1.41-1.37-2.47,.3-1.06,1.41-1.68,2.47-1.37,1.04,.3,2.02,.45,2.9,.45,1.1,0,2,.9,2,2s-.9,2-2,2Z" }))), /* @__PURE__ */ A.createElement("g", { id: "b" })), Ti = (t) => /* @__PURE__ */ A.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 96.3 82.6", style: {
  enableBackground: "new 0 0 96.3 82.6"
}, xmlSpace: "preserve", ...t }, /* @__PURE__ */ A.createElement("path", { d: "M88.6,66.5H15.4V7.6c0-1.1-0.9-2-2-2H7.9c-1.1,0-2,0.9-2,2V74c0,1.1,0.9,2,2,2h80.7c1.1,0,2-0.9,2-2v-5.5 C90.6,67.4,89.7,66.5,88.6,66.5L88.6,66.5z" }), /* @__PURE__ */ A.createElement("path", { d: "M31.7,51.1V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-11.9c0-1.1-0.9-2-2-2h-0.9C32.6,49.1,31.7,50,31.7,51.1L31.7,51.1z " }), /* @__PURE__ */ A.createElement("path", { d: "M38.7,41.7V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-21.3c0-1.1-0.9-2-2-2h-0.9C39.6,39.7,38.7,40.6,38.7,41.7 L38.7,41.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M45.7,28.7V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-34.3c0-1.1-0.9-2-2-2h-0.9C46.6,26.7,45.7,27.6,45.7,28.7 L45.7,28.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M59.7,28.7V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-34.3c0-1.1-0.9-2-2-2h-0.9C60.6,26.7,59.7,27.6,59.7,28.7 L59.7,28.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M52.7,23.6V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-39.4c0-1.1-0.9-2-2-2h-0.9C53.6,21.6,52.7,22.5,52.7,23.6 L52.7,23.6z" }), /* @__PURE__ */ A.createElement("path", { d: "M66.8,38.6v24.3c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-24.3c0-1.1-0.9-2-2-2h-0.9C67.7,36.6,66.8,37.5,66.8,38.6 L66.8,38.6z" }), /* @__PURE__ */ A.createElement("path", { d: "M73.8,55.3V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-7.7c0-1.1-0.9-2-2-2h-0.9C74.7,53.3,73.8,54.2,73.8,55.3L73.8,55.3 z" }), /* @__PURE__ */ A.createElement("path", { d: "M24.7,55.3V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-7.7c0-1.1-0.9-2-2-2h-0.9C25.6,53.3,24.7,54.2,24.7,55.3L24.7,55.3 z" }), /* @__PURE__ */ A.createElement("path", { d: "M17.6,61.5V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2v-1.6c0-1.1-1-1.9-2.1-1.9h-0.9C18.5,59.5,17.6,60.4,17.6,61.5L17.6,61.5 z" }), /* @__PURE__ */ A.createElement("path", { d: "M80.8,61.5V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2v-1.6c0-1.1-1-1.9-2.1-1.9h-0.9C81.7,59.5,80.8,60.4,80.8,61.5L80.8,61.5 z" })), Pi = () => {
  const { config: t, tempConfig: d } = A.useContext(ce), s = A.useContext(Ee), C = ["General", , "Charts", "Maps"], b = (nn) => {
    const h = nn.target.files[0], pn = new FileReader();
    pn.onload = (M) => {
      const un = M.target.result;
      try {
        const Nn = JSON.parse(un);
        s({ type: "EDITOR_SET_CONFIG", payload: Nn }), s({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      } catch {
        alert("Invalid JSON");
      }
    }, pn.readAsText(h);
  }, P = (nn) => {
    let h = {};
    switch (nn.category) {
      case "Charts": {
        const pn = nn.subType, M = nn.visualizationSubType ? nn.visualizationSubType : "regular";
        h = {
          ...nn,
          visualizationType: pn,
          visualizationSubType: M,
          newViz: !0,
          datasets: {}
        };
        break;
      }
      case "General": {
        const pn = nn.subType;
        h = { ...nn, newViz: !0, datasets: {}, visualizationType: pn };
        break;
      }
      case "Maps": {
        const pn = nn.subType;
        h = {
          ...nn,
          newViz: !0,
          datasets: {},
          type: "map"
        }, h.general = {
          geoType: pn
        };
        break;
      }
    }
    return h;
  }, y = (nn) => {
    const h = P(nn);
    s({ type: "EDITOR_SET_CONFIG", payload: { ...t, ...h, activeVizButtonID: nn.id } }), s({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
  }, B = (nn) => {
    const { label: h, icon: pn, id: M } = nn, un = M === (t == null ? void 0 : t.activeVizButtonID) || 0, Nn = () => {
      y(nn);
    };
    return d && s({ type: "EDITOR_SAVE", payload: d }), /* @__PURE__ */ g.createElement("button", { className: un ? "active" : "", onClick: Nn, "aria-label": h }, pn, /* @__PURE__ */ g.createElement("span", { className: "mt-1" }, h));
  };
  return /* @__PURE__ */ g.createElement("div", { className: "choose-vis" }, /* @__PURE__ */ g.createElement(
    "a",
    {
      href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/index.html",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "guidance-link",
      style: { marginTop: 0, marginBottom: "2rem" }
    },
    /* @__PURE__ */ g.createElement("div", null, /* @__PURE__ */ g.createElement("p", null, "For more information on the types of data visualizations in the WCMS, including examples and best practices,", " ", /* @__PURE__ */ g.createElement("u", null, "see the WCMS Features Gallery"), "."))
  ), C.map((nn) => /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("div", { className: "heading-2" }, nn), /* @__PURE__ */ g.createElement("ul", { className: `visualization-grid category_${nn.toLowerCase()}` }, Ii.filter((h) => h.category === nn).map((h, pn) => /* @__PURE__ */ g.createElement("li", { key: pn }, /* @__PURE__ */ g.createElement(Dr, { position: "right" }, /* @__PURE__ */ g.createElement(Dr.Target, null, /* @__PURE__ */ g.createElement(B, { ...h })), /* @__PURE__ */ g.createElement(Dr.Content, null, h.content))))))), /* @__PURE__ */ g.createElement("hr", null), /* @__PURE__ */ g.createElement("div", { className: "form-group" }, /* @__PURE__ */ g.createElement("label", { htmlFor: "uploadConfig" }, "Upload Custom Configuration", " ", /* @__PURE__ */ g.createElement(Dr, { style: { textTransform: "none" } }, /* @__PURE__ */ g.createElement(Dr.Target, null, /* @__PURE__ */ g.createElement(fo, { display: "warningCircle", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ g.createElement(Dr.Content, null, /* @__PURE__ */ g.createElement("p", null, "Make sure you have properly validated the configuration before uploading.")))), /* @__PURE__ */ g.createElement(
    "input",
    {
      type: "file",
      accept: ".txt,.json",
      className: "form-control-file",
      id: "uploadConfig",
      onChange: b
    }
  )));
}, Ii = [
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
    icon: /* @__PURE__ */ g.createElement(Pa, null),
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
    icon: /* @__PURE__ */ g.createElement(Ti, null),
    content: "Use bars to show comparisons between data categories."
  },
  {
    id: 3,
    category: "Charts",
    label: "Combo Chart",
    type: "chart",
    subType: "Combo",
    orientation: "vertical",
    icon: /* @__PURE__ */ g.createElement(Ni, null),
    content: "Use bars to show comparisons between data categories."
  },
  {
    id: 4,
    category: "Charts",
    label: "Line",
    type: "chart",
    subType: "Line",
    orientation: "vertical",
    icon: /* @__PURE__ */ g.createElement(Ia, null),
    content: "Present one or more data trends over time."
  },
  {
    id: 5,
    category: "Charts",
    label: "Paired Bar",
    type: "chart",
    subType: "Paired Bar",
    orientation: "horizontal",
    icon: /* @__PURE__ */ g.createElement(Si, null),
    content: "Use paired bars to show comparisons between two different data categories."
  },
  {
    id: 6,
    category: "Charts",
    label: "Area Chart",
    type: "chart",
    subType: "Area Chart",
    orientation: "vertical",
    icon: /* @__PURE__ */ g.createElement(Ai, null),
    content: "Display an area chart to visualize quantities over time."
  },
  {
    id: 7,
    category: "Charts",
    label: "Forecast Chart",
    type: "chart",
    subType: "Forecasting",
    orientation: "vertical",
    icon: /* @__PURE__ */ g.createElement(Zo, null),
    content: "Display a forecasting chart to predict future data trends."
  },
  {
    id: 8,
    category: "Charts",
    label: "Scatter Plot",
    type: "chart",
    subType: "Scatter Plot",
    orientation: "vertical",
    icon: /* @__PURE__ */ g.createElement(Mi, null),
    content: "Display a scatter plot to explore relationships between numeric variables."
  },
  {
    id: 9,
    category: "Charts",
    label: "Box Plot",
    type: "chart",
    subType: "Box Plot",
    orientation: "vertical",
    icon: /* @__PURE__ */ g.createElement(bi, null),
    content: "Display a box plot to visualize the distribution of numerical data through quartiles."
  },
  {
    id: 10,
    category: "Charts",
    label: "Sankey Diagram",
    type: "chart",
    subType: "Sankey",
    orientation: "vertical",
    icon: /* @__PURE__ */ g.createElement(La, null),
    content: "Display a sankey diagram"
  },
  {
    id: 11,
    category: "Charts",
    label: "Forecast Chart",
    type: "chart",
    subType: "Forecasting",
    orientation: "vertical",
    icon: /* @__PURE__ */ g.createElement(Zo, null),
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
    icon: /* @__PURE__ */ g.createElement(wi, null),
    content: "Use bars to show comparisons between data categories."
  },
  {
    id: 13,
    category: "Charts",
    label: "Pie",
    type: "chart",
    subType: "Pie",
    orientation: "Pie",
    icon: /* @__PURE__ */ g.createElement(ka, null),
    content: "Present the numerical proportions of a data series."
  },
  {
    id: 14,
    category: "Charts",
    label: "Deviation Bar",
    type: "chart",
    subType: "Deviation Bar",
    orientation: "Pie",
    icon: /* @__PURE__ */ g.createElement(Ri, null),
    content: "Use deviation bars to display how individual values differ from a target"
  },
  {
    id: 15,
    category: "General",
    label: "Dashboard",
    type: "dashboard",
    subType: null,
    orientation: null,
    icon: /* @__PURE__ */ g.createElement(hi, null),
    content: "Present multiple data visualizations with shared filter controls."
  },
  {
    id: 16,
    category: "General",
    label: "Data Bite",
    type: "data-bite",
    subType: null,
    orientation: null,
    icon: /* @__PURE__ */ g.createElement(Ea, null),
    content: "Highlight a single aggregated value (e.g., sum or median)."
  },
  {
    id: 17,
    category: "General",
    label: "Waffle Chart",
    type: "waffle-chart",
    subType: "Waffle",
    orientation: null,
    icon: /* @__PURE__ */ g.createElement(Oa, null),
    content: "Highlight a piece of data in relationship to a data set."
  },
  {
    id: 18,
    category: "General",
    label: "Gauge Chart",
    type: "waffle-chart",
    subType: "Gauge",
    orientation: null,
    icon: /* @__PURE__ */ g.createElement(Di, null),
    content: `Specify the calculation of a single data point (such as a percentage value) and present it on a horizontal
              scale.`
  },
  {
    id: 19,
    category: "Maps",
    label: "United States (State- or County-Level)",
    type: "map",
    subType: "us",
    icon: /* @__PURE__ */ g.createElement(ko, null),
    content: "Present a U.S. choropleth map at state or county level.",
    position: "right"
  },
  {
    id: 20,
    category: "Maps",
    label: "United States (HHS Regions)",
    type: "map",
    subType: "us-region",
    icon: /* @__PURE__ */ g.createElement(Wa, null),
    content: "Present a U.S. choropleth map at state or county level.",
    position: "right"
  },
  {
    id: 21,
    category: "Maps",
    label: "World",
    type: "map",
    subType: "world",
    icon: /* @__PURE__ */ g.createElement(Ba, null),
    content: "Present a choropleth map of the world."
  },
  {
    id: 22,
    category: "Maps",
    label: "U.S. State",
    type: "map",
    subType: "single-state",
    icon: /* @__PURE__ */ g.createElement(Fa, null),
    content: "Present a choropleth map of an individual U.S. state."
  },
  {
    id: 23,
    category: "Maps",
    label: "U.S. Geocode",
    type: "map",
    subType: "us-county",
    generalType: "us-geocode",
    icon: /* @__PURE__ */ g.createElement(ko, null),
    content: "United States GeoCode"
  }
];
function Li({ containerEl: t }) {
  const { config: d, setTempConfig: s, hostname: C, isDebug: b } = A.useContext(ce);
  let { type: P } = d;
  switch (P) {
    case "map":
      return /* @__PURE__ */ g.createElement(le, { component: "CdcMap" }, /* @__PURE__ */ g.createElement(
        xa,
        {
          isEditor: !0,
          isDebug: b,
          config: d,
          hostname: C,
          setConfig: s,
          containerEl: t
        }
      ));
    case "waffle-chart":
      if (d.visualizationType === "Waffle" || d.visualizationType === "Gauge")
        return /* @__PURE__ */ g.createElement(le, { component: "CdcWaffleChart" }, /* @__PURE__ */ g.createElement(Ka, { isEditor: !0, isDebug: b, config: d, setConfig: s }));
      break;
    case "chart":
      return /* @__PURE__ */ g.createElement(le, { component: "CdcChart" }, /* @__PURE__ */ g.createElement(Ga, { isEditor: !0, isDebug: b, config: d }));
    case "dashboard":
      return /* @__PURE__ */ g.createElement(le, { component: "CdcDashboard" }, /* @__PURE__ */ g.createElement(Ma, { isEditor: !0, isDebug: b, config: d }));
    case "data-bite":
      return /* @__PURE__ */ g.createElement(le, { component: "CdcDashboard" }, /* @__PURE__ */ g.createElement(Va, { isEditor: !0, isDebug: b, config: d, setConfig: s }));
    case "markup-include":
      return /* @__PURE__ */ g.createElement(le, { component: "CdcDashboard" }, /* @__PURE__ */ g.createElement(Na, { isEditor: !0, isDebug: b, config: d, setConfig: s }));
    default:
      return /* @__PURE__ */ g.createElement("p", null, "No visualization type selected.");
  }
}
const ki = (t) => {
  if (t !== null) {
    let d = ua(t);
    const s = JSON.stringify(d), C = new CustomEvent("updateVizConfig", { detail: s, bubbles: !0 });
    window.dispatchEvent(C);
  }
}, Ei = (t) => {
  var d;
  if (t.type === "dashboard") {
    let s = !1, C;
    if (t.data || t.dataUrl) {
      s = !0, C = { ...t };
      const b = t.dataFileName || "dataset-1";
      C.datasets = {}, C.datasets[b] = {
        ...go.pick(t, ["data", "dataUrl", "dataFileSourceType"]),
        dataFileName: b
      }, Object.keys(C.visualizations).forEach((y) => {
        const B = { dataKey: b, ...go.pick(C, "dataDescription", "formattedData") };
        C.visualizations[y] = { ...C.visualizations[y], ...B };
      }), C = { ...C, ...{ data: [], dataUrl: "", dataFileName: "", dataFileSourceType: "", dataDescription: [], formattedData: [] } };
    }
    if ((d = t.dashboard) != null && d.filters) {
      s = !0, C = { ...t };
      const b = { ...C.dashboard };
      b.sharedFilters || (b.sharedFilters = []);
      const P = b.filters.map((y) => ({ ...y, key: y.label, showDropdown: !0, usedBy: Object.keys(C.visualizations) }));
      b.sharedFilters = [...b.sharedFilters, ...P], C.dashboard = { ...b, filters: void 0 };
    }
    if (s)
      return C;
  }
  return t;
};
const Oi = (t, d) => {
  switch (d.type) {
    case "EDITOR_SAVE":
      return { ...t, config: d.payload, tempConfig: null };
    case "EDITOR_SET_CONFIG":
      return { ...t, config: d.payload };
    case "EDITOR_TEMP_SAVE":
      return { ...t, tempConfig: d.payload };
    case "EDITOR_SET_ERRORS":
      return { ...t, errors: d.payload };
    case "EDITOR_SET_VIEWPORT":
      return { ...t, currentViewport: d.payload };
    case "EDITOR_SET_GLOBALACTIVE":
      return { ...t, globalActive: d.payload };
    default:
      return t;
  }
}, Bi = ba(Oi), Fi = ({ config: t, hostname: d, containerEl: s, sharepath: C, isDebug: b }) => {
  const P = A.useMemo(() => {
    let un = 0;
    return (t != null && t.data || t != null && t.dataUrl || t != null && t.originalFormattedData || t != null && t.datasets) && (t != null && t.type) && (un = 2), { config: Ei(t || { newViz: !0, errors: [], currentViewport: "lg" }), errors: [], currentViewport: "lg", globalActive: un, sharepath: C, isDebug: b, hostname: d };
  }, [t]);
  A.useEffect(() => {
    var un;
    Po && ((un = Po) == null || un.init());
  }, []);
  const [y, B] = A.useReducer(Bi, P), nn = (un) => {
    ki(go.cloneDeep(un)), B({ type: "EDITOR_TEMP_SAVE", payload: un });
  }, h = new Sa((un) => {
    const Nn = un[0], { width: Cn } = Nn.contentRect, fn = wa(Cn);
    y.currentViewport !== fn && B({ type: "EDITOR_SET_VIEWPORT", payload: fn });
  }), pn = A.useCallback((un) => {
    un !== null && h.observe(un);
  }, []);
  A.useEffect(() => {
    let un = ua(y.config);
    const Nn = JSON.stringify(un), Cn = new CustomEvent("updateVizConfig", { detail: Nn });
    window.dispatchEvent(Cn);
  }, [y.config]);
  const M = A.useMemo(() => {
    y.config.type !== "dashboard" ? y.config.formattedData : y.config.datasets && Object.keys(y.config.datasets).length > 0;
  }, [y.config.type, y.config.datasets]);
  return /* @__PURE__ */ g.createElement(Aa, null, /* @__PURE__ */ g.createElement(ce.Provider, { value: { ...y, setTempConfig: nn } }, /* @__PURE__ */ g.createElement(Ee.Provider, { value: B }, /* @__PURE__ */ g.createElement("div", { className: `cdc-open-viz-module cdc-editor ${y.currentViewport}`, ref: pn }, /* @__PURE__ */ g.createElement(Gu, { className: "top-level" }, /* @__PURE__ */ g.createElement(ke, { title: "1. Choose Visualization Type", className: "choose-type" }, /* @__PURE__ */ g.createElement(Pi, null)), /* @__PURE__ */ g.createElement(ke, { title: "2. Import Data", className: "data-designer", disableRule: !y.config.type }, /* @__PURE__ */ g.createElement(vi, null)), /* @__PURE__ */ g.createElement(ke, { title: "3. Configure", className: "configure", disableRule: M }, /* @__PURE__ */ g.createElement(Li, { containerEl: s })))))), /* @__PURE__ */ g.createElement(Da, null));
}, Hi = (t) => new Promise((d) => setTimeout(d, t)), G0 = {
  title: "Components/Pages/CdcEditor",
  component: Fi
}, Dt = {
  args: {
    config: {}
  }
}, Rt = {
  args: {},
  parameters: {},
  play: async ({
    canvasElement: t
  }) => {
    const d = qa(t), s = za.setup();
    await Hi(1e3);
    const C = d.getByText("United States (State- or County-Level)");
    await s.click(C);
    const b = d.getByText("United States: County Sample Data");
    await s.click(b);
  }
};
var Qo, na, ra;
Dt.parameters = {
  ...Dt.parameters,
  docs: {
    ...(Qo = Dt.parameters) == null ? void 0 : Qo.docs,
    source: {
      originalSource: `{
  args: {
    config: {}
  }
}`,
      ...(ra = (na = Dt.parameters) == null ? void 0 : na.docs) == null ? void 0 : ra.source
    }
  }
};
var ea, ta, oa;
Rt.parameters = {
  ...Rt.parameters,
  docs: {
    ...(ea = Rt.parameters) == null ? void 0 : ea.docs,
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
      ...(oa = (ta = Rt.parameters) == null ? void 0 : ta.docs) == null ? void 0 : oa.source
    }
  }
};
const V0 = ["DefaultEditor", "PreviewTable"];
export {
  Dt as DefaultEditor,
  Rt as PreviewTable,
  V0 as __namedExportsOrder,
  G0 as default
};
