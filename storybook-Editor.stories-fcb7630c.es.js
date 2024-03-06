import { r as M, R as i } from "./storybook-index-45401197.es.js";
import { b as Et, i as Mo, a as br, g as Mr } from "./storybook-isSolr-6a0136d5.es.js";
import { C as Lt, E as Ot, Z as Ar, i as Dr, M as Nr, G as Rr, J as Tr, t as Er, d as Pr, a as Ea, b as Ir, O as kr } from "./storybook-CdcDashboard-c27be3a0.es.js";
import { P as Qn } from "./storybook-index-43433e35.es.js";
import "./storybook-transform-e0776740.es.js";
import { a as Lr } from "./storybook-axios-01170075.es.js";
import { D as Or } from "./storybook-index-964548d8.es.js";
import { c as lr } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { a as Pa, d as Ia, e as Hr, f as Br, S as Fr, g as Wr, h as xr, i as Gr, j as ka, k as Vr, l as qr } from "./storybook-Icon-58d1c99f.es.js";
import { f as La } from "./storybook-fetchRemoteData-6254352f.es.js";
import { D as Kr } from "./storybook-DataDesigner-31ee8381.es.js";
import { T as en } from "./storybook-Tooltip-edc0f7ab.es.js";
import { S as zr } from "./storybook-usa-region-graphic-fcafc1fc.es.js";
import { E as lt } from "./storybook-Loading-f180d060.es.js";
import { _ as ga } from "./storybook-AdvancedEditor-bff719bc.es.js";
import "./storybook-index-d4b80c61.es.js";
import "./storybook-Button-d74e310e.es.js";
import "./storybook-DataTable-f4f6e5b1.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-year-bedc547d.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-4cc720ca.es.js";
import "./storybook-MultiSelect-c8a581e7.es.js";
import "./storybook-index-e502eacf.es.js";
import "./storybook-DataTableEditor-7a6e1152.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-updateFieldFactory-c006040a.es.js";
import "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-string-7df1b381.es.js";
import "./storybook-Card-6750b07b.es.js";
var Oa = {}, ya = {}, Ca = 34, Pt = 10, pa = 13;
function sr(o) {
  return new Function("d", "return {" + o.map(function(p, c) {
    return JSON.stringify(p) + ": d[" + c + '] || ""';
  }).join(",") + "}");
}
function _r(o, p) {
  var c = sr(o);
  return function(y, A) {
    return p(c(y), A, o);
  };
}
function Ha(o) {
  var p = /* @__PURE__ */ Object.create(null), c = [];
  return o.forEach(function(y) {
    for (var A in y)
      A in p || c.push(p[A] = A);
  }), c;
}
function we(o, p) {
  var c = o + "", y = c.length;
  return y < p ? new Array(p - y + 1).join(0) + c : c;
}
function Xr(o) {
  return o < 0 ? "-" + we(-o, 6) : o > 9999 ? "+" + we(o, 6) : we(o, 4);
}
function jr(o) {
  var p = o.getUTCHours(), c = o.getUTCMinutes(), y = o.getUTCSeconds(), A = o.getUTCMilliseconds();
  return isNaN(o) ? "Invalid Date" : Xr(o.getUTCFullYear()) + "-" + we(o.getUTCMonth() + 1, 2) + "-" + we(o.getUTCDate(), 2) + (A ? "T" + we(p, 2) + ":" + we(c, 2) + ":" + we(y, 2) + "." + we(A, 3) + "Z" : y ? "T" + we(p, 2) + ":" + we(c, 2) + ":" + we(y, 2) + "Z" : c || p ? "T" + we(p, 2) + ":" + we(c, 2) + "Z" : "");
}
function Yr(o) {
  var p = new RegExp('["' + o + `
\r]`), c = o.charCodeAt(0);
  function y(b, rn) {
    var gn, dn, mn = A(b, function(qn, yn) {
      if (gn)
        return gn(qn, yn - 1);
      dn = qn, gn = rn ? _r(qn, rn) : sr(qn);
    });
    return mn.columns = dn || [], mn;
  }
  function A(b, rn) {
    var gn = [], dn = b.length, mn = 0, qn = 0, yn, Bn = dn <= 0, Mn = !1;
    b.charCodeAt(dn - 1) === Pt && --dn, b.charCodeAt(dn - 1) === pa && --dn;
    function Un() {
      if (Bn)
        return ya;
      if (Mn)
        return Mn = !1, Oa;
      var Dn, Wn = mn, vn;
      if (b.charCodeAt(Wn) === Ca) {
        for (; mn++ < dn && b.charCodeAt(mn) !== Ca || b.charCodeAt(++mn) === Ca; )
          ;
        return (Dn = mn) >= dn ? Bn = !0 : (vn = b.charCodeAt(mn++)) === Pt ? Mn = !0 : vn === pa && (Mn = !0, b.charCodeAt(mn) === Pt && ++mn), b.slice(Wn + 1, Dn - 1).replace(/""/g, '"');
      }
      for (; mn < dn; ) {
        if ((vn = b.charCodeAt(Dn = mn++)) === Pt)
          Mn = !0;
        else if (vn === pa)
          Mn = !0, b.charCodeAt(mn) === Pt && ++mn;
        else if (vn !== c)
          continue;
        return b.slice(Wn, Dn);
      }
      return Bn = !0, b.slice(Wn, dn);
    }
    for (; (yn = Un()) !== ya; ) {
      for (var Vn = []; yn !== Oa && yn !== ya; )
        Vn.push(yn), yn = Un();
      rn && (Vn = rn(Vn, qn++)) == null || gn.push(Vn);
    }
    return gn;
  }
  function E(b, rn) {
    return b.map(function(gn) {
      return rn.map(function(dn) {
        return En(gn[dn]);
      }).join(o);
    });
  }
  function d(b, rn) {
    return rn == null && (rn = Ha(b)), [rn.map(En).join(o)].concat(E(b, rn)).join(`
`);
  }
  function O(b, rn) {
    return rn == null && (rn = Ha(b)), E(b, rn).join(`
`);
  }
  function Rn(b) {
    return b.map(w).join(`
`);
  }
  function w(b) {
    return b.map(En).join(o);
  }
  function En(b) {
    return b == null ? "" : b instanceof Date ? jr(b) : p.test(b += "") ? '"' + b.replace(/"/g, '""') + '"' : b;
  }
  return {
    parse: y,
    parseRows: A,
    format: d,
    formatBody: O,
    formatRows: Rn,
    formatRow: w,
    formatValue: En
  };
}
var Ur = Yr(","), Jr = Ur.parse;
function ct(o, p, c, y) {
  function A(E) {
    return E instanceof c ? E : new c(function(d) {
      d(E);
    });
  }
  return new (c || (c = Promise))(function(E, d) {
    function O(En) {
      try {
        w(y.next(En));
      } catch (b) {
        d(b);
      }
    }
    function Rn(En) {
      try {
        w(y.throw(En));
      } catch (b) {
        d(b);
      }
    }
    function w(En) {
      En.done ? E(En.value) : A(En.value).then(O, Rn);
    }
    w((y = y.apply(o, p || [])).next());
  });
}
function dt(o, p) {
  var c = { label: 0, sent: function() {
    if (E[0] & 1)
      throw E[1];
    return E[1];
  }, trys: [], ops: [] }, y, A, E, d;
  return d = { next: O(0), throw: O(1), return: O(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function O(w) {
    return function(En) {
      return Rn([w, En]);
    };
  }
  function Rn(w) {
    if (y)
      throw new TypeError("Generator is already executing.");
    for (; d && (d = 0, w[0] && (c = 0)), c; )
      try {
        if (y = 1, A && (E = w[0] & 2 ? A.return : w[0] ? A.throw || ((E = A.return) && E.call(A), 0) : A.next) && !(E = E.call(A, w[1])).done)
          return E;
        switch (A = 0, E && (w = [w[0] & 2, E.value]), w[0]) {
          case 0:
          case 1:
            E = w;
            break;
          case 4:
            return c.label++, { value: w[1], done: !1 };
          case 5:
            c.label++, A = w[1], w = [0];
            continue;
          case 7:
            w = c.ops.pop(), c.trys.pop();
            continue;
          default:
            if (E = c.trys, !(E = E.length > 0 && E[E.length - 1]) && (w[0] === 6 || w[0] === 2)) {
              c = 0;
              continue;
            }
            if (w[0] === 3 && (!E || w[1] > E[0] && w[1] < E[3])) {
              c.label = w[1];
              break;
            }
            if (w[0] === 6 && c.label < E[1]) {
              c.label = E[1], E = w;
              break;
            }
            if (E && c.label < E[2]) {
              c.label = E[2], c.ops.push(w);
              break;
            }
            E[2] && c.ops.pop(), c.trys.pop();
            continue;
        }
        w = p.call(o, c);
      } catch (En) {
        w = [6, En], A = 0;
      } finally {
        y = E = 0;
      }
    if (w[0] & 5)
      throw w[1];
    return { value: w[0] ? w[1] : void 0, done: !0 };
  }
}
function $r(o, p) {
  var c = typeof Symbol == "function" && o[Symbol.iterator];
  if (!c)
    return o;
  var y = c.call(o), A, E = [], d;
  try {
    for (; (p === void 0 || p-- > 0) && !(A = y.next()).done; )
      E.push(A.value);
  } catch (O) {
    d = { error: O };
  } finally {
    try {
      A && !A.done && (c = y.return) && c.call(y);
    } finally {
      if (d)
        throw d.error;
    }
  }
  return E;
}
function Zr() {
  for (var o = [], p = 0; p < arguments.length; p++)
    o = o.concat($r(arguments[p]));
  return o;
}
var Qr = /* @__PURE__ */ new Map([
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
function Ht(o, p) {
  var c = nu(o);
  if (typeof c.path != "string") {
    var y = o.webkitRelativePath;
    Object.defineProperty(c, "path", {
      value: typeof p == "string" ? p : typeof y == "string" && y.length > 0 ? y : o.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return c;
}
function nu(o) {
  var p = o.name, c = p && p.lastIndexOf(".") !== -1;
  if (c && !o.type) {
    var y = p.split(".").pop().toLowerCase(), A = Qr.get(y);
    A && Object.defineProperty(o, "type", {
      value: A,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return o;
}
var eu = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function tu(o) {
  return ct(this, void 0, void 0, function() {
    return dt(this, function(p) {
      return Po(o) && ou(o) ? [2, iu(o.dataTransfer, o.type)] : au(o) ? [2, ru(o)] : Array.isArray(o) && o.every(function(c) {
        return "getFile" in c && typeof c.getFile == "function";
      }) ? [2, uu(o)] : [2, []];
    });
  });
}
function ou(o) {
  return Po(o.dataTransfer);
}
function au(o) {
  return Po(o) && Po(o.target);
}
function Po(o) {
  return typeof o == "object" && o !== null;
}
function ru(o) {
  return ma(o.target.files).map(function(p) {
    return Ht(p);
  });
}
function uu(o) {
  return ct(this, void 0, void 0, function() {
    var p;
    return dt(this, function(c) {
      switch (c.label) {
        case 0:
          return [4, Promise.all(o.map(function(y) {
            return y.getFile();
          }))];
        case 1:
          return p = c.sent(), [2, p.map(function(y) {
            return Ht(y);
          })];
      }
    });
  });
}
function iu(o, p) {
  return ct(this, void 0, void 0, function() {
    var c, y;
    return dt(this, function(A) {
      switch (A.label) {
        case 0:
          return o === null ? [2, []] : o.items ? (c = ma(o.items).filter(function(E) {
            return E.kind === "file";
          }), p !== "drop" ? [2, c] : [4, Promise.all(c.map(lu))]) : [3, 2];
        case 1:
          return y = A.sent(), [2, Ba(cr(y))];
        case 2:
          return [2, Ba(ma(o.files).map(function(E) {
            return Ht(E);
          }))];
      }
    });
  });
}
function Ba(o) {
  return o.filter(function(p) {
    return eu.indexOf(p.name) === -1;
  });
}
function ma(o) {
  if (o === null)
    return [];
  for (var p = [], c = 0; c < o.length; c++) {
    var y = o[c];
    p.push(y);
  }
  return p;
}
function lu(o) {
  if (typeof o.webkitGetAsEntry != "function")
    return Fa(o);
  var p = o.webkitGetAsEntry();
  return p && p.isDirectory ? dr(p) : Fa(o);
}
function cr(o) {
  return o.reduce(function(p, c) {
    return Zr(p, Array.isArray(c) ? cr(c) : [c]);
  }, []);
}
function Fa(o) {
  var p = o.getAsFile();
  if (!p)
    return Promise.reject(o + " is not a File");
  var c = Ht(p);
  return Promise.resolve(c);
}
function su(o) {
  return ct(this, void 0, void 0, function() {
    return dt(this, function(p) {
      return [2, o.isDirectory ? dr(o) : cu(o)];
    });
  });
}
function dr(o) {
  var p = o.createReader();
  return new Promise(function(c, y) {
    var A = [];
    function E() {
      var d = this;
      p.readEntries(function(O) {
        return ct(d, void 0, void 0, function() {
          var Rn, w, En;
          return dt(this, function(b) {
            switch (b.label) {
              case 0:
                if (O.length)
                  return [3, 5];
                b.label = 1;
              case 1:
                return b.trys.push([1, 3, , 4]), [4, Promise.all(A)];
              case 2:
                return Rn = b.sent(), c(Rn), [3, 4];
              case 3:
                return w = b.sent(), y(w), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                En = Promise.all(O.map(su)), A.push(En), E(), b.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(O) {
        y(O);
      });
    }
    E();
  });
}
function cu(o) {
  return ct(this, void 0, void 0, function() {
    return dt(this, function(p) {
      return [2, new Promise(function(c, y) {
        o.file(function(A) {
          var E = Ht(A, o.fullPath);
          c(E);
        }, function(A) {
          y(A);
        });
      })];
    });
  });
}
var du = function(o, p) {
  if (o && p) {
    var c = Array.isArray(p) ? p : p.split(","), y = o.name || "", A = (o.type || "").toLowerCase(), E = A.replace(/\/.*$/, "");
    return c.some(function(d) {
      var O = d.trim().toLowerCase();
      return O.charAt(0) === "." ? y.toLowerCase().endsWith(O) : O.endsWith("/*") ? E === O.replace(/\/.*$/, "") : A === O;
    });
  }
  return !0;
};
function Wa(o, p) {
  var c = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var y = Object.getOwnPropertySymbols(o);
    p && (y = y.filter(function(A) {
      return Object.getOwnPropertyDescriptor(o, A).enumerable;
    })), c.push.apply(c, y);
  }
  return c;
}
function xa(o) {
  for (var p = 1; p < arguments.length; p++) {
    var c = arguments[p] != null ? arguments[p] : {};
    p % 2 ? Wa(Object(c), !0).forEach(function(y) {
      yr(o, y, c[y]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : Wa(Object(c)).forEach(function(y) {
      Object.defineProperty(o, y, Object.getOwnPropertyDescriptor(c, y));
    });
  }
  return o;
}
function yr(o, p, c) {
  return p in o ? Object.defineProperty(o, p, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : o[p] = c, o;
}
function Ga(o, p) {
  return fu(o) || pu(o, p) || Cu(o, p) || yu();
}
function yu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cu(o, p) {
  if (o) {
    if (typeof o == "string")
      return Va(o, p);
    var c = Object.prototype.toString.call(o).slice(8, -1);
    if (c === "Object" && o.constructor && (c = o.constructor.name), c === "Map" || c === "Set")
      return Array.from(o);
    if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
      return Va(o, p);
  }
}
function Va(o, p) {
  (p == null || p > o.length) && (p = o.length);
  for (var c = 0, y = new Array(p); c < p; c++)
    y[c] = o[c];
  return y;
}
function pu(o, p) {
  var c = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (c != null) {
    var y = [], A = !0, E = !1, d, O;
    try {
      for (c = c.call(o); !(A = (d = c.next()).done) && (y.push(d.value), !(p && y.length === p)); A = !0)
        ;
    } catch (Rn) {
      E = !0, O = Rn;
    } finally {
      try {
        !A && c.return != null && c.return();
      } finally {
        if (E)
          throw O;
      }
    }
    return y;
  }
}
function fu(o) {
  if (Array.isArray(o))
    return o;
}
var gu = "file-invalid-type", mu = "file-too-large", vu = "file-too-small", hu = "too-many-files", Su = function(p) {
  p = Array.isArray(p) && p.length === 1 ? p[0] : p;
  var c = Array.isArray(p) ? "one of ".concat(p.join(", ")) : p;
  return {
    code: gu,
    message: "File type must be ".concat(c)
  };
}, qa = function(p) {
  return {
    code: mu,
    message: "File is larger than ".concat(p, " ").concat(p === 1 ? "byte" : "bytes")
  };
}, Ka = function(p) {
  return {
    code: vu,
    message: "File is smaller than ".concat(p, " ").concat(p === 1 ? "byte" : "bytes")
  };
}, wu = {
  code: hu,
  message: "Too many files"
};
function Cr(o, p) {
  var c = o.type === "application/x-moz-file" || du(o, p);
  return [c, c ? null : Su(p)];
}
function pr(o, p, c) {
  if (It(o.size))
    if (It(p) && It(c)) {
      if (o.size > c)
        return [!1, qa(c)];
      if (o.size < p)
        return [!1, Ka(p)];
    } else {
      if (It(p) && o.size < p)
        return [!1, Ka(p)];
      if (It(c) && o.size > c)
        return [!1, qa(c)];
    }
  return [!0, null];
}
function It(o) {
  return o != null;
}
function bu(o) {
  var p = o.files, c = o.accept, y = o.minSize, A = o.maxSize, E = o.multiple, d = o.maxFiles;
  return !E && p.length > 1 || E && d >= 1 && p.length > d ? !1 : p.every(function(O) {
    var Rn = Cr(O, c), w = Ga(Rn, 1), En = w[0], b = pr(O, y, A), rn = Ga(b, 1), gn = rn[0];
    return En && gn;
  });
}
function Io(o) {
  return typeof o.isPropagationStopped == "function" ? o.isPropagationStopped() : typeof o.cancelBubble < "u" ? o.cancelBubble : !1;
}
function Ao(o) {
  return o.dataTransfer ? Array.prototype.some.call(o.dataTransfer.types, function(p) {
    return p === "Files" || p === "application/x-moz-file";
  }) : !!o.target && !!o.target.files;
}
function za(o) {
  o.preventDefault();
}
function Mu(o) {
  return o.indexOf("MSIE") !== -1 || o.indexOf("Trident/") !== -1;
}
function Au(o) {
  return o.indexOf("Edge/") !== -1;
}
function Du() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Mu(o) || Au(o);
}
function ke() {
  for (var o = arguments.length, p = new Array(o), c = 0; c < o; c++)
    p[c] = arguments[c];
  return function(y) {
    for (var A = arguments.length, E = new Array(A > 1 ? A - 1 : 0), d = 1; d < A; d++)
      E[d - 1] = arguments[d];
    return p.some(function(O) {
      return !Io(y) && O && O.apply(void 0, [y].concat(E)), Io(y);
    });
  };
}
function _a() {
  return "showOpenFilePicker" in window;
}
function Nu(o) {
  return o = typeof o == "string" ? o.split(",") : o, [{
    description: "everything",
    // TODO: Need to handle filtering more elegantly than this!
    accept: Array.isArray(o) ? o.filter(function(p) {
      return p === "audio/*" || p === "video/*" || p === "image/*" || p === "text/*" || /\w+\/[-+.\w]+/g.test(p);
    }).reduce(function(p, c) {
      return xa(xa({}, p), {}, yr({}, c, []));
    }, {}) : {}
  }];
}
var Ru = ["children"], Tu = ["open"], Eu = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Pu = ["refKey", "onChange", "onClick"];
function Iu(o) {
  return Ou(o) || Lu(o) || fr(o) || ku();
}
function ku() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lu(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null)
    return Array.from(o);
}
function Ou(o) {
  if (Array.isArray(o))
    return va(o);
}
function fa(o, p) {
  return Fu(o) || Bu(o, p) || fr(o, p) || Hu();
}
function Hu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fr(o, p) {
  if (o) {
    if (typeof o == "string")
      return va(o, p);
    var c = Object.prototype.toString.call(o).slice(8, -1);
    if (c === "Object" && o.constructor && (c = o.constructor.name), c === "Map" || c === "Set")
      return Array.from(o);
    if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
      return va(o, p);
  }
}
function va(o, p) {
  (p == null || p > o.length) && (p = o.length);
  for (var c = 0, y = new Array(p); c < p; c++)
    y[c] = o[c];
  return y;
}
function Bu(o, p) {
  var c = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (c != null) {
    var y = [], A = !0, E = !1, d, O;
    try {
      for (c = c.call(o); !(A = (d = c.next()).done) && (y.push(d.value), !(p && y.length === p)); A = !0)
        ;
    } catch (Rn) {
      E = !0, O = Rn;
    } finally {
      try {
        !A && c.return != null && c.return();
      } finally {
        if (E)
          throw O;
      }
    }
    return y;
  }
}
function Fu(o) {
  if (Array.isArray(o))
    return o;
}
function Xa(o, p) {
  var c = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var y = Object.getOwnPropertySymbols(o);
    p && (y = y.filter(function(A) {
      return Object.getOwnPropertyDescriptor(o, A).enumerable;
    })), c.push.apply(c, y);
  }
  return c;
}
function te(o) {
  for (var p = 1; p < arguments.length; p++) {
    var c = arguments[p] != null ? arguments[p] : {};
    p % 2 ? Xa(Object(c), !0).forEach(function(y) {
      ha(o, y, c[y]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : Xa(Object(c)).forEach(function(y) {
      Object.defineProperty(o, y, Object.getOwnPropertyDescriptor(c, y));
    });
  }
  return o;
}
function ha(o, p, c) {
  return p in o ? Object.defineProperty(o, p, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : o[p] = c, o;
}
function ko(o, p) {
  if (o == null)
    return {};
  var c = Wu(o, p), y, A;
  if (Object.getOwnPropertySymbols) {
    var E = Object.getOwnPropertySymbols(o);
    for (A = 0; A < E.length; A++)
      y = E[A], !(p.indexOf(y) >= 0) && Object.prototype.propertyIsEnumerable.call(o, y) && (c[y] = o[y]);
  }
  return c;
}
function Wu(o, p) {
  if (o == null)
    return {};
  var c = {}, y = Object.keys(o), A, E;
  for (E = 0; E < y.length; E++)
    A = y[E], !(p.indexOf(A) >= 0) && (c[A] = o[A]);
  return c;
}
var Aa = /* @__PURE__ */ M.forwardRef(function(o, p) {
  var c = o.children, y = ko(o, Ru), A = wa(y), E = A.open, d = ko(A, Tu);
  return M.useImperativeHandle(p, function() {
    return {
      open: E
    };
  }, [E]), /* @__PURE__ */ i.createElement(M.Fragment, null, c(te(te({}, d), {}, {
    open: E
  })));
});
Aa.displayName = "Dropzone";
var gr = {
  disabled: !1,
  getFilesFromEvent: tu,
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
Aa.defaultProps = gr;
Aa.propTypes = {
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
var Sa = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function wa() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, p = te(te({}, gr), o), c = p.accept, y = p.disabled, A = p.getFilesFromEvent, E = p.maxSize, d = p.minSize, O = p.multiple, Rn = p.maxFiles, w = p.onDragEnter, En = p.onDragLeave, b = p.onDragOver, rn = p.onDrop, gn = p.onDropAccepted, dn = p.onDropRejected, mn = p.onFileDialogCancel, qn = p.onFileDialogOpen, yn = p.useFsAccessApi, Bn = p.preventDropOnDocument, Mn = p.noClick, Un = p.noKeyboard, Vn = p.noDrag, Dn = p.noDragEventsBubbling, Wn = p.validator, vn = M.useMemo(function() {
    return typeof qn == "function" ? qn : ja;
  }, [qn]), le = M.useMemo(function() {
    return typeof mn == "function" ? mn : ja;
  }, [mn]), $n = M.useRef(null), xn = M.useRef(null), oe = M.useReducer(xu, Sa), se = fa(oe, 2), ne = se[0], ee = se[1], Te = ne.isFocused, De = ne.isFileDialogActive, he = ne.draggedFiles, Ee = function() {
    De && setTimeout(function() {
      if (xn.current) {
        var Pn = xn.current.files;
        Pn.length || (ee({
          type: "closeDialog"
        }), le());
      }
    }, 300);
  };
  M.useEffect(function() {
    return yn && _a() ? function() {
    } : (window.addEventListener("focus", Ee, !1), function() {
      window.removeEventListener("focus", Ee, !1);
    });
  }, [xn, De, le, yn]);
  var ge = M.useRef([]), Pe = function(Pn) {
    $n.current && $n.current.contains(Pn.target) || (Pn.preventDefault(), ge.current = []);
  };
  M.useEffect(function() {
    return Bn && (document.addEventListener("dragover", za, !1), document.addEventListener("drop", Pe, !1)), function() {
      Bn && (document.removeEventListener("dragover", za), document.removeEventListener("drop", Pe));
    };
  }, [$n, Bn]);
  var ce = M.useCallback(function(Z) {
    Z.preventDefault(), Z.persist(), Le(Z), ge.current = [].concat(Iu(ge.current), [Z.target]), Ao(Z) && Promise.resolve(A(Z)).then(function(Pn) {
      Io(Z) && !Dn || (ee({
        draggedFiles: Pn,
        isDragActive: !0,
        type: "setDraggedFiles"
      }), w && w(Z));
    });
  }, [A, w, Dn]), be = M.useCallback(function(Z) {
    Z.preventDefault(), Z.persist(), Le(Z);
    var Pn = Ao(Z);
    if (Pn && Z.dataTransfer)
      try {
        Z.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Pn && b && b(Z), !1;
  }, [b, Dn]), Me = M.useCallback(function(Z) {
    Z.preventDefault(), Z.persist(), Le(Z);
    var Pn = ge.current.filter(function(de) {
      return $n.current && $n.current.contains(de);
    }), ae = Pn.indexOf(Z.target);
    ae !== -1 && Pn.splice(ae, 1), ge.current = Pn, !(Pn.length > 0) && (ee({
      isDragActive: !1,
      type: "setDraggedFiles",
      draggedFiles: []
    }), Ao(Z) && En && En(Z));
  }, [$n, En, Dn]), Ne = M.useCallback(function(Z, Pn) {
    var ae = [], de = [];
    Z.forEach(function(me) {
      var He = Cr(me, c), Re = fa(He, 2), je = Re[0], Ye = Re[1], Ue = pr(me, d, E), Ge = fa(Ue, 2), Je = Ge[0], Ve = Ge[1], qe = Wn ? Wn(me) : null;
      if (je && Je && !qe)
        ae.push(me);
      else {
        var Be = [Ye, Ve];
        qe && (Be = Be.concat(qe)), de.push({
          file: me,
          errors: Be.filter(function(at) {
            return at;
          })
        });
      }
    }), (!O && ae.length > 1 || O && Rn >= 1 && ae.length > Rn) && (ae.forEach(function(me) {
      de.push({
        file: me,
        errors: [wu]
      });
    }), ae.splice(0)), ee({
      acceptedFiles: ae,
      fileRejections: de,
      type: "setFiles"
    }), rn && rn(ae, de, Pn), de.length > 0 && dn && dn(de, Pn), ae.length > 0 && gn && gn(ae, Pn);
  }, [ee, O, c, d, E, Rn, rn, gn, dn, Wn]), Se = M.useCallback(function(Z) {
    Z.preventDefault(), Z.persist(), Le(Z), ge.current = [], Ao(Z) && Promise.resolve(A(Z)).then(function(Pn) {
      Io(Z) && !Dn || Ne(Pn, Z);
    }), ee({
      type: "reset"
    });
  }, [A, Ne, Dn]), F = M.useCallback(function() {
    if (yn && _a()) {
      ee({
        type: "openDialog"
      }), vn();
      var Z = {
        multiple: O,
        types: Nu(c)
      };
      window.showOpenFilePicker(Z).then(function(Pn) {
        return A(Pn);
      }).then(function(Pn) {
        return Ne(Pn, null);
      }).catch(function(Pn) {
        return le(Pn);
      }).finally(function() {
        return ee({
          type: "closeDialog"
        });
      });
      return;
    }
    xn.current && (ee({
      type: "openDialog"
    }), vn(), xn.current.value = null, xn.current.click());
  }, [ee, vn, le, yn, Ne, c, O]), V = M.useCallback(function(Z) {
    !$n.current || !$n.current.isEqualNode(Z.target) || (Z.keyCode === 32 || Z.keyCode === 13) && (Z.preventDefault(), F());
  }, [$n, xn, F]), nn = M.useCallback(function() {
    ee({
      type: "focus"
    });
  }, []), an = M.useCallback(function() {
    ee({
      type: "blur"
    });
  }, []), Ln = M.useCallback(function() {
    Mn || (Du() ? setTimeout(F, 0) : F());
  }, [xn, Mn, F]), Xn = function(Pn) {
    return y ? null : Pn;
  }, ue = function(Pn) {
    return Un ? null : Xn(Pn);
  }, Ae = function(Pn) {
    return Vn ? null : Xn(Pn);
  }, Le = function(Pn) {
    Dn && Pn.stopPropagation();
  }, Oe = M.useMemo(function() {
    return function() {
      var Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, Pn = Z.refKey, ae = Pn === void 0 ? "ref" : Pn, de = Z.role, me = Z.onKeyDown, He = Z.onFocus, Re = Z.onBlur, je = Z.onClick, Ye = Z.onDragEnter, Ue = Z.onDragOver, Ge = Z.onDragLeave, Je = Z.onDrop, Ve = ko(Z, Eu);
      return te(te(ha({
        onKeyDown: ue(ke(me, V)),
        onFocus: ue(ke(He, nn)),
        onBlur: ue(ke(Re, an)),
        onClick: Xn(ke(je, Ln)),
        onDragEnter: Ae(ke(Ye, ce)),
        onDragOver: Ae(ke(Ue, be)),
        onDragLeave: Ae(ke(Ge, Me)),
        onDrop: Ae(ke(Je, Se)),
        role: typeof de == "string" && de !== "" ? de : "button"
      }, ae, $n), !y && !Un ? {
        tabIndex: 0
      } : {}), Ve);
    };
  }, [$n, V, nn, an, Ln, ce, be, Me, Se, Un, Vn, y]), Fe = M.useCallback(function(Z) {
    Z.stopPropagation();
  }, []), We = M.useMemo(function() {
    return function() {
      var Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, Pn = Z.refKey, ae = Pn === void 0 ? "ref" : Pn, de = Z.onChange, me = Z.onClick, He = ko(Z, Pu), Re = ha({
        accept: c,
        multiple: O,
        type: "file",
        style: {
          display: "none"
        },
        onChange: Xn(ke(de, Se)),
        onClick: Xn(ke(me, Fe)),
        autoComplete: "off",
        tabIndex: -1
      }, ae, xn);
      return te(te({}, Re), He);
    };
  }, [xn, c, O, Se, y]), xe = he.length, Jn = xe > 0 && bu({
    files: he,
    accept: c,
    minSize: d,
    maxSize: E,
    multiple: O,
    maxFiles: Rn
  }), _n = xe > 0 && !Jn;
  return te(te({}, ne), {}, {
    isDragAccept: Jn,
    isDragReject: _n,
    isFocused: Te && !y,
    getRootProps: Oe,
    getInputProps: We,
    rootRef: $n,
    inputRef: xn,
    open: Xn(F)
  });
}
function xu(o, p) {
  switch (p.type) {
    case "focus":
      return te(te({}, o), {}, {
        isFocused: !0
      });
    case "blur":
      return te(te({}, o), {}, {
        isFocused: !1
      });
    case "openDialog":
      return te(te({}, Sa), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return te(te({}, o), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      var c = p.isDragActive, y = p.draggedFiles;
      return te(te({}, o), {}, {
        draggedFiles: y,
        isDragActive: c
      });
    case "setFiles":
      return te(te({}, o), {}, {
        acceptedFiles: p.acceptedFiles,
        fileRejections: p.fileRejections
      });
    case "reset":
      return te({}, Sa);
    default:
      return o;
  }
}
function ja() {
}
const kt = ({ children: o, className: p = "" }) => /* @__PURE__ */ i.createElement("div", { className: `tab-content ${p}` }, o), Gu = (o) => {
  const { globalActive: p } = M.useContext(Lt), c = M.useContext(Ot), y = (A) => {
    c({ type: "EDITOR_SET_GLOBALACTIVE", payload: A });
  };
  return /* @__PURE__ */ i.createElement(mr, { ...o, setActiveTab: y, activeTab: p });
}, Vu = ({ children: o, className: p = void 0, startingTab: c }) => {
  const [y, A] = M.useState(c);
  return /* @__PURE__ */ i.createElement(mr, { className: p, setActiveTab: A, activeTab: y }, o);
}, mr = ({ children: o, className: p, activeTab: c, setActiveTab: y }) => {
  const A = (O, Rn) => {
    O || y(Rn);
  };
  let E = "tabs";
  p && (E = `tabs ${p}`);
  const d = o.map(({ props: O }, Rn) => {
    let w = "nav-item", En = O.disableRule || !1;
    return En && (w += " disabled"), Rn === c && (w += " active"), /* @__PURE__ */ i.createElement("li", { onClick: () => A(En, Rn), key: O.title, className: w }, O.icon, O.title);
  });
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("nav", { className: E }, /* @__PURE__ */ i.createElement("ul", { className: "nav nav-fill" }, d)), o[c]);
};
var ba = { exports: {} }, Do = { exports: {} }, Ya;
function qu() {
  return Ya || (Ya = 1, function(o, p) {
    (function(c, y) {
      y(p, M);
    })(lr, function(c, y) {
      function A(n, r, l, s, v, g, h) {
        try {
          var N = n[g](h), T = N.value;
        } catch (P) {
          return void l(P);
        }
        N.done ? r(T) : Promise.resolve(T).then(s, v);
      }
      function E(n) {
        return function() {
          var r = this, l = arguments;
          return new Promise(function(s, v) {
            var g = n.apply(r, l);
            function h(T) {
              A(g, s, v, h, N, "next", T);
            }
            function N(T) {
              A(g, s, v, h, N, "throw", T);
            }
            h(void 0);
          });
        };
      }
      function d() {
        return (d = Object.assign || function(n) {
          for (var r = 1; r < arguments.length; r++) {
            var l = arguments[r];
            for (var s in l)
              Object.prototype.hasOwnProperty.call(l, s) && (n[s] = l[s]);
          }
          return n;
        }).apply(this, arguments);
      }
      function O(n, r) {
        if (n == null)
          return {};
        var l, s, v = {}, g = Object.keys(n);
        for (s = 0; s < g.length; s++)
          l = g[s], r.indexOf(l) >= 0 || (v[l] = n[l]);
        return v;
      }
      function Rn(n) {
        var r = function(l, s) {
          if (typeof l != "object" || l === null)
            return l;
          var v = l[Symbol.toPrimitive];
          if (v !== void 0) {
            var g = v.call(l, s || "default");
            if (typeof g != "object")
              return g;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (s === "string" ? String : Number)(l);
        }(n, "string");
        return typeof r == "symbol" ? r : String(r);
      }
      y = y && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
      var w = { init: "init" }, En = function(n) {
        var r = n.value;
        return r === void 0 ? "" : r;
      }, b = function() {
        return y.createElement(y.Fragment, null, " ");
      }, rn = { Cell: En, width: 150, minWidth: 0, maxWidth: Number.MAX_SAFE_INTEGER };
      function gn() {
        for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
          r[l] = arguments[l];
        return r.reduce(function(s, v) {
          var g = v.style, h = v.className;
          return s = d({}, s, {}, O(v, ["style", "className"])), g && (s.style = s.style ? d({}, s.style || {}, {}, g || {}) : g), h && (s.className = s.className ? s.className + " " + h : h), s.className === "" && delete s.className, s;
        }, {});
      }
      var dn = function(n, r) {
        return r === void 0 && (r = {}), function(l) {
          return l === void 0 && (l = {}), [].concat(n, [l]).reduce(function(s, v) {
            return function g(h, N, T) {
              return typeof N == "function" ? g({}, N(h, T)) : Array.isArray(N) ? gn.apply(void 0, [h].concat(N)) : gn(h, N);
            }(s, v, d({}, r, { userProps: l }));
          }, {});
        };
      }, mn = function(n, r, l, s) {
        return l === void 0 && (l = {}), n.reduce(function(v, g) {
          return g(v, l);
        }, r);
      }, qn = function(n, r, l) {
        return l === void 0 && (l = {}), n.forEach(function(s) {
          s(r, l);
        });
      };
      function yn(n, r, l, s) {
        n.findIndex(function(v) {
          return v.pluginName === l;
        }), r.forEach(function(v) {
          n.findIndex(function(g) {
            return g.pluginName === v;
          });
        });
      }
      function Bn(n, r) {
        return typeof n == "function" ? n(r) : n;
      }
      function Mn(n) {
        var r = y.useRef();
        return r.current = n, y.useCallback(function() {
          return r.current;
        }, []);
      }
      var Un = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
      function Vn(n, r) {
        var l = y.useRef(!1);
        Un(function() {
          l.current && n(), l.current = !0;
        }, r);
      }
      function Dn(n, r, l) {
        return l === void 0 && (l = {}), function(s, v) {
          v === void 0 && (v = {});
          var g = typeof s == "string" ? r[s] : s;
          if (g === void 0)
            throw console.info(r), new Error("Renderer Error ☝️");
          return Wn(g, d({}, n, { column: r }, l, {}, v));
        };
      }
      function Wn(n, r) {
        return function(s) {
          return typeof s == "function" && (v = Object.getPrototypeOf(s)).prototype && v.prototype.isReactComponent;
          var v;
        }(l = n) || typeof l == "function" || function(s) {
          return typeof s == "object" && typeof s.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(s.$$typeof.description);
        }(l) ? y.createElement(n, r) : n;
        var l;
      }
      function vn(n, r, l) {
        return l === void 0 && (l = 0), n.map(function(s) {
          return $n(s = d({}, s, { parent: r, depth: l })), s.columns && (s.columns = vn(s.columns, s, l + 1)), s;
        });
      }
      function le(n) {
        return Te(n, "columns");
      }
      function $n(n) {
        var r = n.id, l = n.accessor, s = n.Header;
        if (typeof l == "string") {
          r = r || l;
          var v = l.split(".");
          l = function(g) {
            return function(h, N, T) {
              if (!N)
                return h;
              var P, q = typeof N == "function" ? N : JSON.stringify(N), W = se.get(q) || function() {
                var x = function(k) {
                  return function B(X, U) {
                    if (U === void 0 && (U = []), Array.isArray(X))
                      for (var un = 0; un < X.length; un += 1)
                        B(X[un], U);
                    else
                      U.push(X);
                    return U;
                  }(k).map(function(B) {
                    return String(B).replace(".", "_");
                  }).join(".").replace(ce, ".").replace(be, "").split(".");
                }(N);
                return se.set(q, x), x;
              }();
              try {
                P = W.reduce(function(x, k) {
                  return x[k];
                }, h);
              } catch {
              }
              return P !== void 0 ? P : T;
            }(g, v);
          };
        }
        if (!r && typeof s == "string" && s && (r = s), !r && n.columns)
          throw console.error(n), new Error('A column ID (or unique "Header" value) is required!');
        if (!r)
          throw console.error(n), new Error("A column ID (or string accessor) is required!");
        return Object.assign(n, { id: r, accessor: l }), n;
      }
      function xn(n, r) {
        if (!r)
          throw new Error();
        return Object.assign(n, d({ Header: b, Footer: b }, rn, {}, r, {}, n)), Object.assign(n, { originalWidth: n.width }), n;
      }
      function oe(n, r, l) {
        l === void 0 && (l = function() {
          return {};
        });
        for (var s = [], v = n, g = 0, h = function() {
          return g++;
        }, N = function() {
          var T = { headers: [] }, P = [], q = v.some(function(W) {
            return W.parent;
          });
          v.forEach(function(W) {
            var x, k = [].concat(P).reverse()[0];
            q && (W.parent ? x = d({}, W.parent, { originalId: W.parent.id, id: W.parent.id + "_" + h(), headers: [W] }, l(W)) : x = xn(d({ originalId: W.id + "_placeholder", id: W.id + "_placeholder_" + h(), placeholderOf: W, headers: [W] }, l(W)), r), k && k.originalId === x.originalId ? k.headers.push(W) : P.push(x)), T.headers.push(W);
          }), s.push(T), v = P;
        }; v.length; )
          N();
        return s.reverse();
      }
      var se = /* @__PURE__ */ new Map();
      function ne() {
        for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
          r[l] = arguments[l];
        for (var s = 0; s < r.length; s += 1)
          if (r[s] !== void 0)
            return r[s];
      }
      function ee(n) {
        if (typeof n == "function")
          return n;
      }
      function Te(n, r) {
        var l = [];
        return function s(v) {
          v.forEach(function(g) {
            g[r] ? s(g[r]) : l.push(g);
          });
        }(n), l;
      }
      function De(n, r) {
        var l = r.manualExpandedKey, s = r.expanded, v = r.expandSubRows, g = v === void 0 || v, h = [];
        return n.forEach(function(N) {
          return function T(P, q) {
            q === void 0 && (q = !0), P.isExpanded = P.original && P.original[l] || s[P.id], P.canExpand = P.subRows && !!P.subRows.length, q && h.push(P), P.subRows && P.subRows.length && P.isExpanded && P.subRows.forEach(function(W) {
              return T(W, g);
            });
          }(N);
        }), h;
      }
      function he(n, r, l) {
        return ee(n) || r[n] || l[n] || l.text;
      }
      function Ee(n, r, l) {
        return n ? n(r, l) : r === void 0;
      }
      function ge() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var Pe = null, ce = /\[/g, be = /\]/g, Me = function(n) {
        return d({ role: "table" }, n);
      }, Ne = function(n) {
        return d({ role: "rowgroup" }, n);
      }, Se = function(n, r) {
        var l = r.column;
        return d({ key: "header_" + l.id, colSpan: l.totalVisibleHeaderCount, role: "columnheader" }, n);
      }, F = function(n, r) {
        var l = r.column;
        return d({ key: "footer_" + l.id, colSpan: l.totalVisibleHeaderCount }, n);
      }, V = function(n, r) {
        return d({ key: "headerGroup_" + r.index, role: "row" }, n);
      }, nn = function(n, r) {
        return d({ key: "footerGroup_" + r.index }, n);
      }, an = function(n, r) {
        return d({ key: "row_" + r.row.id, role: "row" }, n);
      }, Ln = function(n, r) {
        var l = r.cell;
        return d({ key: "cell_" + l.row.id + "_" + l.column.id, role: "cell" }, n);
      };
      function Xn() {
        return { useOptions: [], stateReducers: [], useControlledState: [], columns: [], columnsDeps: [], allColumns: [], allColumnsDeps: [], accessValue: [], materializedColumns: [], materializedColumnsDeps: [], useInstanceAfterData: [], visibleColumns: [], visibleColumnsDeps: [], headerGroups: [], headerGroupsDeps: [], useInstanceBeforeDimensions: [], useInstance: [], prepareRow: [], getTableProps: [Me], getTableBodyProps: [Ne], getHeaderGroupProps: [V], getFooterGroupProps: [nn], getHeaderProps: [Se], getFooterProps: [F], getRowProps: [an], getCellProps: [Ln], useFinalInstance: [] };
      }
      w.resetHiddenColumns = "resetHiddenColumns", w.toggleHideColumn = "toggleHideColumn", w.setHiddenColumns = "setHiddenColumns", w.toggleHideAllColumns = "toggleHideAllColumns";
      var ue = function(n) {
        n.getToggleHiddenProps = [Ae], n.getToggleHideAllColumnsProps = [Le], n.stateReducers.push(Oe), n.useInstanceBeforeDimensions.push(Fe), n.headerGroupsDeps.push(function(r, l) {
          var s = l.instance;
          return [].concat(r, [s.state.hiddenColumns]);
        }), n.useInstance.push(We);
      };
      ue.pluginName = "useColumnVisibility";
      var Ae = function(n, r) {
        var l = r.column;
        return [n, { onChange: function(s) {
          l.toggleHidden(!s.target.checked);
        }, style: { cursor: "pointer" }, checked: l.isVisible, title: "Toggle Column Visible" }];
      }, Le = function(n, r) {
        var l = r.instance;
        return [n, { onChange: function(s) {
          l.toggleHideAllColumns(!s.target.checked);
        }, style: { cursor: "pointer" }, checked: !l.allColumnsHidden && !l.state.hiddenColumns.length, title: "Toggle All Columns Hidden", indeterminate: !l.allColumnsHidden && l.state.hiddenColumns.length }];
      };
      function Oe(n, r, l, s) {
        if (r.type === w.init)
          return d({ hiddenColumns: [] }, n);
        if (r.type === w.resetHiddenColumns)
          return d({}, n, { hiddenColumns: s.initialState.hiddenColumns || [] });
        if (r.type === w.toggleHideColumn) {
          var v = (r.value !== void 0 ? r.value : !n.hiddenColumns.includes(r.columnId)) ? [].concat(n.hiddenColumns, [r.columnId]) : n.hiddenColumns.filter(function(g) {
            return g !== r.columnId;
          });
          return d({}, n, { hiddenColumns: v });
        }
        return r.type === w.setHiddenColumns ? d({}, n, { hiddenColumns: Bn(r.value, n.hiddenColumns) }) : r.type === w.toggleHideAllColumns ? d({}, n, { hiddenColumns: (r.value !== void 0 ? r.value : !n.hiddenColumns.length) ? s.allColumns.map(function(g) {
          return g.id;
        }) : [] }) : void 0;
      }
      function Fe(n) {
        var r = n.headers, l = n.state.hiddenColumns;
        y.useRef(!1).current;
        var s = 0;
        r.forEach(function(v) {
          return s += function g(h, N) {
            h.isVisible = N && !l.includes(h.id);
            var T = 0;
            return h.headers && h.headers.length ? h.headers.forEach(function(P) {
              return T += g(P, h.isVisible);
            }) : T = h.isVisible ? 1 : 0, h.totalVisibleHeaderCount = T, T;
          }(v, !0);
        });
      }
      function We(n) {
        var r = n.columns, l = n.flatHeaders, s = n.dispatch, v = n.allColumns, g = n.getHooks, h = n.state.hiddenColumns, N = n.autoResetHiddenColumns, T = N === void 0 || N, P = Mn(n), q = v.length === h.length, W = y.useCallback(function(U, un) {
          return s({ type: w.toggleHideColumn, columnId: U, value: un });
        }, [s]), x = y.useCallback(function(U) {
          return s({ type: w.setHiddenColumns, value: U });
        }, [s]), k = y.useCallback(function(U) {
          return s({ type: w.toggleHideAllColumns, value: U });
        }, [s]), B = dn(g().getToggleHideAllColumnsProps, { instance: P() });
        l.forEach(function(U) {
          U.toggleHidden = function(un) {
            s({ type: w.toggleHideColumn, columnId: U.id, value: un });
          }, U.getToggleHiddenProps = dn(g().getToggleHiddenProps, { instance: P(), column: U });
        });
        var X = Mn(T);
        Vn(function() {
          X() && s({ type: w.resetHiddenColumns });
        }, [s, r]), Object.assign(n, { allColumnsHidden: q, toggleHideColumn: W, setHiddenColumns: x, toggleHideAllColumns: k, getToggleHideAllColumnsProps: B });
      }
      var xe = {}, Jn = {}, _n = function(n, r, l) {
        return n;
      }, Z = function(n, r) {
        return n.subRows || [];
      }, Pn = function(n, r, l) {
        return "" + (l ? [l.id, r].join(".") : r);
      }, ae = function(n) {
        return n;
      };
      function de(n) {
        var r = n.initialState, l = r === void 0 ? xe : r, s = n.defaultColumn, v = s === void 0 ? Jn : s, g = n.getSubRows, h = g === void 0 ? Z : g, N = n.getRowId, T = N === void 0 ? Pn : N, P = n.stateReducer, q = P === void 0 ? _n : P, W = n.useControlledState, x = W === void 0 ? ae : W;
        return d({}, O(n, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]), { initialState: l, defaultColumn: v, getSubRows: h, getRowId: T, stateReducer: q, useControlledState: x });
      }
      function me(n, r) {
        r === void 0 && (r = 0);
        var l = 0, s = 0, v = 0, g = 0;
        return n.forEach(function(h) {
          var N = h.headers;
          if (h.totalLeft = r, N && N.length) {
            var T = me(N, r), P = T[0], q = T[1], W = T[2], x = T[3];
            h.totalMinWidth = P, h.totalWidth = q, h.totalMaxWidth = W, h.totalFlexWidth = x;
          } else
            h.totalMinWidth = h.minWidth, h.totalWidth = Math.min(Math.max(h.minWidth, h.width), h.maxWidth), h.totalMaxWidth = h.maxWidth, h.totalFlexWidth = h.canResize ? h.totalWidth : 0;
          h.isVisible && (r += h.totalWidth, l += h.totalMinWidth, s += h.totalWidth, v += h.totalMaxWidth, g += h.totalFlexWidth);
        }), [l, s, v, g];
      }
      function He(n) {
        var r = n.data, l = n.rows, s = n.flatRows, v = n.rowsById, g = n.column, h = n.getRowId, N = n.getSubRows, T = n.accessValueHooks, P = n.getInstance;
        r.forEach(function(q, W) {
          return function x(k, B, X, U, un) {
            X === void 0 && (X = 0);
            var In = k, ln = h(k, B, U), K = v[ln];
            if (K)
              K.subRows && K.originalSubRows.forEach(function(tn, wn) {
                return x(tn, wn, X + 1, K);
              });
            else if ((K = { id: ln, original: In, index: B, depth: X, cells: [{}] }).cells.map = ge, K.cells.filter = ge, K.cells.forEach = ge, K.cells[0].getCellProps = ge, K.values = {}, un.push(K), s.push(K), v[ln] = K, K.originalSubRows = N(k, B), K.originalSubRows) {
              var Nn = [];
              K.originalSubRows.forEach(function(tn, wn) {
                return x(tn, wn, X + 1, K, Nn);
              }), K.subRows = Nn;
            }
            g.accessor && (K.values[g.id] = g.accessor(k, B, K, un, r)), K.values[g.id] = mn(T, K.values[g.id], { row: K, column: g, instance: P() });
          }(q, W, 0, void 0, l);
        });
      }
      w.resetExpanded = "resetExpanded", w.toggleRowExpanded = "toggleRowExpanded", w.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var Re = function(n) {
        n.getToggleAllRowsExpandedProps = [je], n.getToggleRowExpandedProps = [Ye], n.stateReducers.push(Ue), n.useInstance.push(Ge), n.prepareRow.push(Je);
      };
      Re.pluginName = "useExpanded";
      var je = function(n, r) {
        var l = r.instance;
        return [n, { onClick: function(s) {
          l.toggleAllRowsExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle All Rows Expanded" }];
      }, Ye = function(n, r) {
        var l = r.row;
        return [n, { onClick: function() {
          l.toggleRowExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle Row Expanded" }];
      };
      function Ue(n, r, l, s) {
        if (r.type === w.init)
          return d({ expanded: {} }, n);
        if (r.type === w.resetExpanded)
          return d({}, n, { expanded: s.initialState.expanded || {} });
        if (r.type === w.toggleAllRowsExpanded) {
          var v = r.value, g = s.rowsById, h = Object.keys(g).length === Object.keys(n.expanded).length;
          if (v !== void 0 ? v : !h) {
            var N = {};
            return Object.keys(g).forEach(function(B) {
              N[B] = !0;
            }), d({}, n, { expanded: N });
          }
          return d({}, n, { expanded: {} });
        }
        if (r.type === w.toggleRowExpanded) {
          var T, P = r.id, q = r.value, W = n.expanded[P], x = q !== void 0 ? q : !W;
          if (!W && x)
            return d({}, n, { expanded: d({}, n.expanded, (T = {}, T[P] = !0, T)) });
          if (W && !x) {
            var k = n.expanded;
            return k[P], d({}, n, { expanded: O(k, [P].map(Rn)) });
          }
          return n;
        }
      }
      function Ge(n) {
        var r = n.data, l = n.rows, s = n.rowsById, v = n.manualExpandedKey, g = v === void 0 ? "expanded" : v, h = n.paginateExpandedRows, N = h === void 0 || h, T = n.expandSubRows, P = T === void 0 || T, q = n.autoResetExpanded, W = q === void 0 || q, x = n.getHooks, k = n.plugins, B = n.state.expanded, X = n.dispatch;
        yn(k, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var U = Mn(W), un = !!(Object.keys(s).length && Object.keys(B).length);
        un && Object.keys(s).some(function(Gn) {
          return !B[Gn];
        }) && (un = !1), Vn(function() {
          U() && X({ type: w.resetExpanded });
        }, [X, r]);
        var In = y.useCallback(function(Gn, Cn) {
          X({ type: w.toggleRowExpanded, id: Gn, value: Cn });
        }, [X]), ln = y.useCallback(function(Gn) {
          return X({ type: w.toggleAllRowsExpanded, value: Gn });
        }, [X]), K = y.useMemo(function() {
          return N ? De(l, { manualExpandedKey: g, expanded: B, expandSubRows: P }) : l;
        }, [N, l, g, B, P]), Nn = y.useMemo(function() {
          return function(Gn) {
            var Cn = 0;
            return Object.keys(Gn).forEach(function(hn) {
              var zn = hn.split(".");
              Cn = Math.max(Cn, zn.length);
            }), Cn;
          }(B);
        }, [B]), tn = Mn(n), wn = dn(x().getToggleAllRowsExpandedProps, { instance: tn() });
        Object.assign(n, { preExpandedRows: l, expandedRows: K, rows: K, expandedDepth: Nn, isAllRowsExpanded: un, toggleRowExpanded: In, toggleAllRowsExpanded: ln, getToggleAllRowsExpandedProps: wn });
      }
      function Je(n, r) {
        var l = r.instance.getHooks, s = r.instance;
        n.toggleRowExpanded = function(v) {
          return s.toggleRowExpanded(n.id, v);
        }, n.getToggleRowExpandedProps = dn(l().getToggleRowExpandedProps, { instance: s, row: n });
      }
      var Ve = function(n, r, l) {
        return n = n.filter(function(s) {
          return r.some(function(v) {
            var g = s.values[v];
            return String(g).toLowerCase().includes(String(l).toLowerCase());
          });
        });
      };
      Ve.autoRemove = function(n) {
        return !n;
      };
      var qe = function(n, r, l) {
        return n.filter(function(s) {
          return r.some(function(v) {
            var g = s.values[v];
            return g === void 0 || String(g).toLowerCase() === String(l).toLowerCase();
          });
        });
      };
      qe.autoRemove = function(n) {
        return !n;
      };
      var Be = function(n, r, l) {
        return n.filter(function(s) {
          return r.some(function(v) {
            var g = s.values[v];
            return g === void 0 || String(g) === String(l);
          });
        });
      };
      Be.autoRemove = function(n) {
        return !n;
      };
      var at = function(n, r, l) {
        return n.filter(function(s) {
          return r.some(function(v) {
            return s.values[v].includes(l);
          });
        });
      };
      at.autoRemove = function(n) {
        return !n || !n.length;
      };
      var yt = function(n, r, l) {
        return n.filter(function(s) {
          return r.some(function(v) {
            var g = s.values[v];
            return g && g.length && l.every(function(h) {
              return g.includes(h);
            });
          });
        });
      };
      yt.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Bt = function(n, r, l) {
        return n.filter(function(s) {
          return r.some(function(v) {
            var g = s.values[v];
            return g && g.length && l.some(function(h) {
              return g.includes(h);
            });
          });
        });
      };
      Bt.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Ct = function(n, r, l) {
        return n.filter(function(s) {
          return r.some(function(v) {
            var g = s.values[v];
            return l.includes(g);
          });
        });
      };
      Ct.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Ft = function(n, r, l) {
        return n.filter(function(s) {
          return r.some(function(v) {
            return s.values[v] === l;
          });
        });
      };
      Ft.autoRemove = function(n) {
        return n === void 0;
      };
      var Wt = function(n, r, l) {
        return n.filter(function(s) {
          return r.some(function(v) {
            return s.values[v] == l;
          });
        });
      };
      Wt.autoRemove = function(n) {
        return n == null;
      };
      var xt = function(n, r, l) {
        var s = l || [], v = s[0], g = s[1];
        if ((v = typeof v == "number" ? v : -1 / 0) > (g = typeof g == "number" ? g : 1 / 0)) {
          var h = v;
          v = g, g = h;
        }
        return n.filter(function(N) {
          return r.some(function(T) {
            var P = N.values[T];
            return P >= v && P <= g;
          });
        });
      };
      xt.autoRemove = function(n) {
        return !n || typeof n[0] != "number" && typeof n[1] != "number";
      };
      var $e = Object.freeze({ __proto__: null, text: Ve, exactText: qe, exactTextCase: Be, includes: at, includesAll: yt, includesSome: Bt, includesValue: Ct, exact: Ft, equals: Wt, between: xt });
      w.resetFilters = "resetFilters", w.setFilter = "setFilter", w.setAllFilters = "setAllFilters";
      var Gt = function(n) {
        n.stateReducers.push(Oo), n.useInstance.push(Vt);
      };
      function Oo(n, r, l, s) {
        if (r.type === w.init)
          return d({ filters: [] }, n);
        if (r.type === w.resetFilters)
          return d({}, n, { filters: s.initialState.filters || [] });
        if (r.type === w.setFilter) {
          var v = r.columnId, g = r.filterValue, h = s.allColumns, N = s.filterTypes, T = h.find(function(X) {
            return X.id === v;
          });
          if (!T)
            throw new Error("React-Table: Could not find a column with id: " + v);
          var P = he(T.filter, N || {}, $e), q = n.filters.find(function(X) {
            return X.id === v;
          }), W = Bn(g, q && q.value);
          return Ee(P.autoRemove, W, T) ? d({}, n, { filters: n.filters.filter(function(X) {
            return X.id !== v;
          }) }) : d({}, n, q ? { filters: n.filters.map(function(X) {
            return X.id === v ? { id: v, value: W } : X;
          }) } : { filters: [].concat(n.filters, [{ id: v, value: W }]) });
        }
        if (r.type === w.setAllFilters) {
          var x = r.filters, k = s.allColumns, B = s.filterTypes;
          return d({}, n, { filters: Bn(x, n.filters).filter(function(X) {
            var U = k.find(function(un) {
              return un.id === X.id;
            });
            return !Ee(he(U.filter, B || {}, $e).autoRemove, X.value, U);
          }) });
        }
      }
      function Vt(n) {
        var r = n.data, l = n.rows, s = n.flatRows, v = n.rowsById, g = n.allColumns, h = n.filterTypes, N = n.manualFilters, T = n.defaultCanFilter, P = T !== void 0 && T, q = n.disableFilters, W = n.state.filters, x = n.dispatch, k = n.autoResetFilters, B = k === void 0 || k, X = y.useCallback(function(tn, wn) {
          x({ type: w.setFilter, columnId: tn, filterValue: wn });
        }, [x]), U = y.useCallback(function(tn) {
          x({ type: w.setAllFilters, filters: tn });
        }, [x]);
        g.forEach(function(tn) {
          var wn = tn.id, Gn = tn.accessor, Cn = tn.defaultCanFilter, hn = tn.disableFilters;
          tn.canFilter = Gn ? ne(hn !== !0 && void 0, q !== !0 && void 0, !0) : ne(Cn, P, !1), tn.setFilter = function(An) {
            return X(tn.id, An);
          };
          var zn = W.find(function(An) {
            return An.id === wn;
          });
          tn.filterValue = zn && zn.value;
        });
        var un = y.useMemo(function() {
          if (N || !W.length)
            return [l, s, v];
          var tn = [], wn = {};
          return [function Gn(Cn, hn) {
            hn === void 0 && (hn = 0);
            var zn = Cn;
            return (zn = W.reduce(function(An, Kn) {
              var e = Kn.id, t = Kn.value, u = g.find(function(f) {
                return f.id === e;
              });
              if (!u)
                return An;
              hn === 0 && (u.preFilteredRows = An);
              var a = he(u.filter, h || {}, $e);
              return a ? (u.filteredRows = a(An, [e], t), u.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + u.id + "."), An);
            }, Cn)).forEach(function(An) {
              tn.push(An), wn[An.id] = An, An.subRows && (An.subRows = An.subRows && An.subRows.length > 0 ? Gn(An.subRows, hn + 1) : An.subRows);
            }), zn;
          }(l), tn, wn];
        }, [N, W, l, s, v, g, h]), In = un[0], ln = un[1], K = un[2];
        y.useMemo(function() {
          g.filter(function(tn) {
            return !W.find(function(wn) {
              return wn.id === tn.id;
            });
          }).forEach(function(tn) {
            tn.preFilteredRows = In, tn.filteredRows = In;
          });
        }, [In, W, g]);
        var Nn = Mn(B);
        Vn(function() {
          Nn() && x({ type: w.resetFilters });
        }, [x, N ? null : r]), Object.assign(n, { preFilteredRows: l, preFilteredFlatRows: s, preFilteredRowsById: v, filteredRows: In, filteredFlatRows: ln, filteredRowsById: K, rows: In, flatRows: ln, rowsById: K, setFilter: X, setAllFilters: U });
      }
      Gt.pluginName = "useFilters", w.resetGlobalFilter = "resetGlobalFilter", w.setGlobalFilter = "setGlobalFilter";
      var pt = function(n) {
        n.stateReducers.push(qt), n.useInstance.push(Kt);
      };
      function qt(n, r, l, s) {
        if (r.type === w.resetGlobalFilter)
          return d({}, n, { globalFilter: s.initialState.globalFilter || void 0 });
        if (r.type === w.setGlobalFilter) {
          var v = r.filterValue, g = s.userFilterTypes, h = he(s.globalFilter, g || {}, $e), N = Bn(v, n.globalFilter);
          return Ee(h.autoRemove, N) ? (n.globalFilter, O(n, ["globalFilter"])) : d({}, n, { globalFilter: N });
        }
      }
      function Kt(n) {
        var r = n.data, l = n.rows, s = n.flatRows, v = n.rowsById, g = n.allColumns, h = n.filterTypes, N = n.globalFilter, T = n.manualGlobalFilter, P = n.state.globalFilter, q = n.dispatch, W = n.autoResetGlobalFilter, x = W === void 0 || W, k = n.disableGlobalFilter, B = y.useCallback(function(K) {
          q({ type: w.setGlobalFilter, filterValue: K });
        }, [q]), X = y.useMemo(function() {
          if (T || P === void 0)
            return [l, s, v];
          var K = [], Nn = {}, tn = he(N, h || {}, $e);
          if (!tn)
            return console.warn("Could not find a valid 'globalFilter' option."), l;
          g.forEach(function(Gn) {
            var Cn = Gn.disableGlobalFilter;
            Gn.canFilter = ne(Cn !== !0 && void 0, k !== !0 && void 0, !0);
          });
          var wn = g.filter(function(Gn) {
            return Gn.canFilter === !0;
          });
          return [function Gn(Cn) {
            return (Cn = tn(Cn, wn.map(function(hn) {
              return hn.id;
            }), P)).forEach(function(hn) {
              K.push(hn), Nn[hn.id] = hn, hn.subRows = hn.subRows && hn.subRows.length ? Gn(hn.subRows) : hn.subRows;
            }), Cn;
          }(l), K, Nn];
        }, [T, P, N, h, g, l, s, v, k]), U = X[0], un = X[1], In = X[2], ln = Mn(x);
        Vn(function() {
          ln() && q({ type: w.resetGlobalFilter });
        }, [q, T ? null : r]), Object.assign(n, { preGlobalFilteredRows: l, preGlobalFilteredFlatRows: s, preGlobalFilteredRowsById: v, globalFilteredRows: U, globalFilteredFlatRows: un, globalFilteredRowsById: In, rows: U, flatRows: un, rowsById: In, setGlobalFilter: B, disableGlobalFilter: k });
      }
      function ft(n, r) {
        return r.reduce(function(l, s) {
          return l + (typeof s == "number" ? s : 0);
        }, 0);
      }
      pt.pluginName = "useGlobalFilter";
      var gt = Object.freeze({ __proto__: null, sum: ft, min: function(n) {
        var r = n[0] || 0;
        return n.forEach(function(l) {
          typeof l == "number" && (r = Math.min(r, l));
        }), r;
      }, max: function(n) {
        var r = n[0] || 0;
        return n.forEach(function(l) {
          typeof l == "number" && (r = Math.max(r, l));
        }), r;
      }, minMax: function(n) {
        var r = n[0] || 0, l = n[0] || 0;
        return n.forEach(function(s) {
          typeof s == "number" && (r = Math.min(r, s), l = Math.max(l, s));
        }), r + ".." + l;
      }, average: function(n) {
        return ft(0, n) / n.length;
      }, median: function(n) {
        if (!n.length)
          return null;
        var r = Math.floor(n.length / 2), l = [].concat(n).sort(function(s, v) {
          return s - v;
        });
        return n.length % 2 != 0 ? l[r] : (l[r - 1] + l[r]) / 2;
      }, unique: function(n) {
        return Array.from(new Set(n).values());
      }, uniqueCount: function(n) {
        return new Set(n).size;
      }, count: function(n) {
        return n.length;
      } }), zt = [], _t = {};
      w.resetGroupBy = "resetGroupBy", w.setGroupBy = "setGroupBy", w.toggleGroupBy = "toggleGroupBy";
      var mt = function(n) {
        n.getGroupByToggleProps = [Xt], n.stateReducers.push(Ze), n.visibleColumnsDeps.push(function(r, l) {
          var s = l.instance;
          return [].concat(r, [s.state.groupBy]);
        }), n.visibleColumns.push(jt), n.useInstance.push(Bo), n.prepareRow.push(Yt);
      };
      mt.pluginName = "useGroupBy";
      var Xt = function(n, r) {
        var l = r.header;
        return [n, { onClick: l.canGroupBy ? function(s) {
          s.persist(), l.toggleGroupBy();
        } : void 0, style: { cursor: l.canGroupBy ? "pointer" : void 0 }, title: "Toggle GroupBy" }];
      };
      function Ze(n, r, l, s) {
        if (r.type === w.init)
          return d({ groupBy: [] }, n);
        if (r.type === w.resetGroupBy)
          return d({}, n, { groupBy: s.initialState.groupBy || [] });
        if (r.type === w.setGroupBy)
          return d({}, n, { groupBy: r.value });
        if (r.type === w.toggleGroupBy) {
          var v = r.columnId, g = r.value, h = g !== void 0 ? g : !n.groupBy.includes(v);
          return d({}, n, h ? { groupBy: [].concat(n.groupBy, [v]) } : { groupBy: n.groupBy.filter(function(N) {
            return N !== v;
          }) });
        }
      }
      function jt(n, r) {
        var l = r.instance.state.groupBy, s = l.map(function(g) {
          return n.find(function(h) {
            return h.id === g;
          });
        }).filter(Boolean), v = n.filter(function(g) {
          return !l.includes(g.id);
        });
        return (n = [].concat(s, v)).forEach(function(g) {
          g.isGrouped = l.includes(g.id), g.groupedIndex = l.indexOf(g.id);
        }), n;
      }
      var Ho = {};
      function Bo(n) {
        var r = n.data, l = n.rows, s = n.flatRows, v = n.rowsById, g = n.allColumns, h = n.flatHeaders, N = n.groupByFn, T = N === void 0 ? Ut : N, P = n.manualGroupBy, q = n.aggregations, W = q === void 0 ? Ho : q, x = n.plugins, k = n.state.groupBy, B = n.dispatch, X = n.autoResetGroupBy, U = X === void 0 || X, un = n.disableGroupBy, In = n.defaultCanGroupBy, ln = n.getHooks;
        yn(x, ["useColumnOrder", "useFilters"], "useGroupBy");
        var K = Mn(n);
        g.forEach(function(u) {
          var a = u.accessor, f = u.defaultGroupBy, m = u.disableGroupBy;
          u.canGroupBy = a ? ne(u.canGroupBy, m !== !0 && void 0, un !== !0 && void 0, !0) : ne(u.canGroupBy, f, In, !1), u.canGroupBy && (u.toggleGroupBy = function() {
            return n.toggleGroupBy(u.id);
          }), u.Aggregated = u.Aggregated || u.Cell;
        });
        var Nn = y.useCallback(function(u, a) {
          B({ type: w.toggleGroupBy, columnId: u, value: a });
        }, [B]), tn = y.useCallback(function(u) {
          B({ type: w.setGroupBy, value: u });
        }, [B]);
        h.forEach(function(u) {
          u.getGroupByToggleProps = dn(ln().getGroupByToggleProps, { instance: K(), header: u });
        });
        var wn = y.useMemo(function() {
          if (P || !k.length)
            return [l, s, v, zt, _t, s, v];
          var u = k.filter(function(I) {
            return g.find(function(z) {
              return z.id === I;
            });
          }), a = [], f = {}, m = [], C = {}, S = [], D = {}, R = function I(z, H, G) {
            if (H === void 0 && (H = 0), H === u.length)
              return z.map(function(Q) {
                return d({}, Q, { depth: H });
              });
            var _ = u[H], L = T(z, _);
            return Object.entries(L).map(function(Q, cn) {
              var fn = Q[0], Y = Q[1], Tn = _ + ":" + fn, Fn = I(Y, H + 1, Tn = G ? G + ">" + Tn : Tn), J = H ? Te(Y, "leafRows") : Y, j = function(sn, kn, On) {
                var jn = {};
                return g.forEach(function(on) {
                  if (u.includes(on.id))
                    jn[on.id] = kn[0] ? kn[0].values[on.id] : null;
                  else {
                    var ye = typeof on.aggregate == "function" ? on.aggregate : W[on.aggregate] || gt[on.aggregate];
                    if (ye) {
                      var Hn = kn.map(function(bn) {
                        return bn.values[on.id];
                      }), Sn = sn.map(function(bn) {
                        var Yn = bn.values[on.id];
                        if (!On && on.aggregateValue) {
                          var pe = typeof on.aggregateValue == "function" ? on.aggregateValue : W[on.aggregateValue] || gt[on.aggregateValue];
                          if (!pe)
                            throw console.info({ column: on }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                          Yn = pe(Yn, bn, on);
                        }
                        return Yn;
                      });
                      jn[on.id] = ye(Sn, Hn);
                    } else {
                      if (on.aggregate)
                        throw console.info({ column: on }), new Error("React Table: Invalid column.aggregate option for column listed above");
                      jn[on.id] = null;
                    }
                  }
                }), jn;
              }(J, Y, H), $ = { id: Tn, isGrouped: !0, groupByID: _, groupByVal: fn, values: j, subRows: Fn, leafRows: J, depth: H, index: cn };
              return Fn.forEach(function(sn) {
                a.push(sn), f[sn.id] = sn, sn.isGrouped ? (m.push(sn), C[sn.id] = sn) : (S.push(sn), D[sn.id] = sn);
              }), $;
            });
          }(l);
          return R.forEach(function(I) {
            a.push(I), f[I.id] = I, I.isGrouped ? (m.push(I), C[I.id] = I) : (S.push(I), D[I.id] = I);
          }), [R, a, f, m, C, S, D];
        }, [P, k, l, s, v, g, W, T]), Gn = wn[0], Cn = wn[1], hn = wn[2], zn = wn[3], An = wn[4], Kn = wn[5], e = wn[6], t = Mn(U);
        Vn(function() {
          t() && B({ type: w.resetGroupBy });
        }, [B, P ? null : r]), Object.assign(n, { preGroupedRows: l, preGroupedFlatRow: s, preGroupedRowsById: v, groupedRows: Gn, groupedFlatRows: Cn, groupedRowsById: hn, onlyGroupedFlatRows: zn, onlyGroupedRowsById: An, nonGroupedFlatRows: Kn, nonGroupedRowsById: e, rows: Gn, flatRows: Cn, rowsById: hn, toggleGroupBy: Nn, setGroupBy: tn });
      }
      function Yt(n) {
        n.allCells.forEach(function(r) {
          var l;
          r.isGrouped = r.column.isGrouped && r.column.id === n.groupByID, r.isPlaceholder = !r.isGrouped && r.column.isGrouped, r.isAggregated = !r.isGrouped && !r.isPlaceholder && ((l = n.subRows) == null ? void 0 : l.length);
        });
      }
      function Ut(n, r) {
        return n.reduce(function(l, s, v) {
          var g = "" + s.values[r];
          return l[g] = Array.isArray(l[g]) ? l[g] : [], l[g].push(s), l;
        }, {});
      }
      var Jt = /([0-9]+)/gm;
      function rt(n, r) {
        return n === r ? 0 : n > r ? 1 : -1;
      }
      function Qe(n, r, l) {
        return [n.values[l], r.values[l]];
      }
      function $t(n) {
        return typeof n == "number" ? isNaN(n) || n === 1 / 0 || n === -1 / 0 ? "" : String(n) : typeof n == "string" ? n : "";
      }
      var Fo = Object.freeze({ __proto__: null, alphanumeric: function(n, r, l) {
        var s = Qe(n, r, l), v = s[0], g = s[1];
        for (v = $t(v), g = $t(g), v = v.split(Jt).filter(Boolean), g = g.split(Jt).filter(Boolean); v.length && g.length; ) {
          var h = v.shift(), N = g.shift(), T = parseInt(h, 10), P = parseInt(N, 10), q = [T, P].sort();
          if (isNaN(q[0])) {
            if (h > N)
              return 1;
            if (N > h)
              return -1;
          } else {
            if (isNaN(q[1]))
              return isNaN(T) ? -1 : 1;
            if (T > P)
              return 1;
            if (P > T)
              return -1;
          }
        }
        return v.length - g.length;
      }, datetime: function(n, r, l) {
        var s = Qe(n, r, l), v = s[0], g = s[1];
        return rt(v = v.getTime(), g = g.getTime());
      }, basic: function(n, r, l) {
        var s = Qe(n, r, l);
        return rt(s[0], s[1]);
      }, string: function(n, r, l) {
        var s = Qe(n, r, l), v = s[0], g = s[1];
        for (v = v.split("").filter(Boolean), g = g.split("").filter(Boolean); v.length && g.length; ) {
          var h = v.shift(), N = g.shift(), T = h.toLowerCase(), P = N.toLowerCase();
          if (T > P)
            return 1;
          if (P > T)
            return -1;
          if (h > N)
            return 1;
          if (N > h)
            return -1;
        }
        return v.length - g.length;
      }, number: function(n, r, l) {
        var s = Qe(n, r, l), v = s[0], g = s[1], h = /[^0-9.]/gi;
        return rt(v = Number(String(v).replace(h, "")), g = Number(String(g).replace(h, "")));
      } });
      w.resetSortBy = "resetSortBy", w.setSortBy = "setSortBy", w.toggleSortBy = "toggleSortBy", w.clearSortBy = "clearSortBy", rn.sortType = "alphanumeric", rn.sortDescFirst = !1;
      var Zt = function(n) {
        n.getSortByToggleProps = [Wo], n.stateReducers.push(xo), n.useInstance.push(Go);
      };
      Zt.pluginName = "useSortBy";
      var Wo = function(n, r) {
        var l = r.instance, s = r.column, v = l.isMultiSortEvent, g = v === void 0 ? function(h) {
          return h.shiftKey;
        } : v;
        return [n, { onClick: s.canSort ? function(h) {
          h.persist(), s.toggleSortBy(void 0, !l.disableMultiSort && g(h));
        } : void 0, style: { cursor: s.canSort ? "pointer" : void 0 }, title: s.canSort ? "Toggle SortBy" : void 0 }];
      };
      function xo(n, r, l, s) {
        if (r.type === w.init)
          return d({ sortBy: [] }, n);
        if (r.type === w.resetSortBy)
          return d({}, n, { sortBy: s.initialState.sortBy || [] });
        if (r.type === w.clearSortBy)
          return d({}, n, { sortBy: n.sortBy.filter(function(K) {
            return K.id !== r.columnId;
          }) });
        if (r.type === w.setSortBy)
          return d({}, n, { sortBy: r.sortBy });
        if (r.type === w.toggleSortBy) {
          var v, g = r.columnId, h = r.desc, N = r.multi, T = s.allColumns, P = s.disableMultiSort, q = s.disableSortRemove, W = s.disableMultiRemove, x = s.maxMultiSortColCount, k = x === void 0 ? Number.MAX_SAFE_INTEGER : x, B = n.sortBy, X = T.find(function(K) {
            return K.id === g;
          }).sortDescFirst, U = B.find(function(K) {
            return K.id === g;
          }), un = B.findIndex(function(K) {
            return K.id === g;
          }), In = h != null, ln = [];
          return (v = !P && N ? U ? "toggle" : "add" : un !== B.length - 1 || B.length !== 1 ? "replace" : U ? "toggle" : "replace") != "toggle" || q || In || N && W || !(U && U.desc && !X || !U.desc && X) || (v = "remove"), v === "replace" ? ln = [{ id: g, desc: In ? h : X }] : v === "add" ? (ln = [].concat(B, [{ id: g, desc: In ? h : X }])).splice(0, ln.length - k) : v === "toggle" ? ln = B.map(function(K) {
            return K.id === g ? d({}, K, { desc: In ? h : !U.desc }) : K;
          }) : v === "remove" && (ln = B.filter(function(K) {
            return K.id !== g;
          })), d({}, n, { sortBy: ln });
        }
      }
      function Go(n) {
        var r = n.data, l = n.rows, s = n.flatRows, v = n.allColumns, g = n.orderByFn, h = g === void 0 ? Qt : g, N = n.sortTypes, T = n.manualSortBy, P = n.defaultCanSort, q = n.disableSortBy, W = n.flatHeaders, x = n.state.sortBy, k = n.dispatch, B = n.plugins, X = n.getHooks, U = n.autoResetSortBy, un = U === void 0 || U;
        yn(B, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var In = y.useCallback(function(Cn) {
          k({ type: w.setSortBy, sortBy: Cn });
        }, [k]), ln = y.useCallback(function(Cn, hn, zn) {
          k({ type: w.toggleSortBy, columnId: Cn, desc: hn, multi: zn });
        }, [k]), K = Mn(n);
        W.forEach(function(Cn) {
          var hn = Cn.accessor, zn = Cn.canSort, An = Cn.disableSortBy, Kn = Cn.id, e = hn ? ne(An !== !0 && void 0, q !== !0 && void 0, !0) : ne(P, zn, !1);
          Cn.canSort = e, Cn.canSort && (Cn.toggleSortBy = function(u, a) {
            return ln(Cn.id, u, a);
          }, Cn.clearSortBy = function() {
            k({ type: w.clearSortBy, columnId: Cn.id });
          }), Cn.getSortByToggleProps = dn(X().getSortByToggleProps, { instance: K(), column: Cn });
          var t = x.find(function(u) {
            return u.id === Kn;
          });
          Cn.isSorted = !!t, Cn.sortedIndex = x.findIndex(function(u) {
            return u.id === Kn;
          }), Cn.isSortedDesc = Cn.isSorted ? t.desc : void 0;
        });
        var Nn = y.useMemo(function() {
          if (T || !x.length)
            return [l, s];
          var Cn = [], hn = x.filter(function(zn) {
            return v.find(function(An) {
              return An.id === zn.id;
            });
          });
          return [function zn(An) {
            var Kn = h(An, hn.map(function(e) {
              var t = v.find(function(f) {
                return f.id === e.id;
              });
              if (!t)
                throw new Error("React-Table: Could not find a column with id: " + e.id + " while sorting");
              var u = t.sortType, a = ee(u) || (N || {})[u] || Fo[u];
              if (!a)
                throw new Error("React-Table: Could not find a valid sortType of '" + u + "' for column '" + e.id + "'.");
              return function(f, m) {
                return a(f, m, e.id, e.desc);
              };
            }), hn.map(function(e) {
              var t = v.find(function(u) {
                return u.id === e.id;
              });
              return t && t.sortInverted ? e.desc : !e.desc;
            }));
            return Kn.forEach(function(e) {
              Cn.push(e), e.subRows && e.subRows.length !== 0 && (e.subRows = zn(e.subRows));
            }), Kn;
          }(l), Cn];
        }, [T, x, l, s, v, h, N]), tn = Nn[0], wn = Nn[1], Gn = Mn(un);
        Vn(function() {
          Gn() && k({ type: w.resetSortBy });
        }, [T ? null : r]), Object.assign(n, { preSortedRows: l, preSortedFlatRows: s, sortedRows: tn, sortedFlatRows: wn, rows: tn, flatRows: wn, setSortBy: In, toggleSortBy: ln });
      }
      function Qt(n, r, l) {
        return [].concat(n).sort(function(s, v) {
          for (var g = 0; g < r.length; g += 1) {
            var h = r[g], N = l[g] === !1 || l[g] === "desc", T = h(s, v);
            if (T !== 0)
              return N ? -T : T;
          }
          return l[0] ? s.index - v.index : v.index - s.index;
        });
      }
      w.resetPage = "resetPage", w.gotoPage = "gotoPage", w.setPageSize = "setPageSize";
      var vt = function(n) {
        n.stateReducers.push(Vo), n.useInstance.push(qo);
      };
      function Vo(n, r, l, s) {
        if (r.type === w.init)
          return d({ pageSize: 10, pageIndex: 0 }, n);
        if (r.type === w.resetPage)
          return d({}, n, { pageIndex: s.initialState.pageIndex || 0 });
        if (r.type === w.gotoPage) {
          var v = s.pageCount, g = s.page, h = Bn(r.pageIndex, n.pageIndex), N = !1;
          return h > n.pageIndex ? N = v === -1 ? g.length >= n.pageSize : h < v : h < n.pageIndex && (N = h > -1), N ? d({}, n, { pageIndex: h }) : n;
        }
        if (r.type === w.setPageSize) {
          var T = r.pageSize, P = n.pageSize * n.pageIndex;
          return d({}, n, { pageIndex: Math.floor(P / T), pageSize: T });
        }
      }
      function qo(n) {
        var r = n.rows, l = n.autoResetPage, s = l === void 0 || l, v = n.manualExpandedKey, g = v === void 0 ? "expanded" : v, h = n.plugins, N = n.pageCount, T = n.paginateExpandedRows, P = T === void 0 || T, q = n.expandSubRows, W = q === void 0 || q, x = n.state, k = x.pageSize, B = x.pageIndex, X = x.expanded, U = x.globalFilter, un = x.filters, In = x.groupBy, ln = x.sortBy, K = n.dispatch, Nn = n.data, tn = n.manualPagination;
        yn(h, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var wn = Mn(s);
        Vn(function() {
          wn() && K({ type: w.resetPage });
        }, [K, tn ? null : Nn, U, un, In, ln]);
        var Gn = tn ? N : Math.ceil(r.length / k), Cn = y.useMemo(function() {
          return Gn > 0 ? [].concat(new Array(Gn)).fill(null).map(function(a, f) {
            return f;
          }) : [];
        }, [Gn]), hn = y.useMemo(function() {
          var a;
          if (tn)
            a = r;
          else {
            var f = k * B, m = f + k;
            a = r.slice(f, m);
          }
          return P ? a : De(a, { manualExpandedKey: g, expanded: X, expandSubRows: W });
        }, [W, X, g, tn, B, k, P, r]), zn = B > 0, An = Gn === -1 ? hn.length >= k : B < Gn - 1, Kn = y.useCallback(function(a) {
          K({ type: w.gotoPage, pageIndex: a });
        }, [K]), e = y.useCallback(function() {
          return Kn(function(a) {
            return a - 1;
          });
        }, [Kn]), t = y.useCallback(function() {
          return Kn(function(a) {
            return a + 1;
          });
        }, [Kn]), u = y.useCallback(function(a) {
          K({ type: w.setPageSize, pageSize: a });
        }, [K]);
        Object.assign(n, { pageOptions: Cn, pageCount: Gn, page: hn, canPreviousPage: zn, canNextPage: An, gotoPage: Kn, previousPage: e, nextPage: t, setPageSize: u });
      }
      vt.pluginName = "usePagination", w.resetPivot = "resetPivot", w.togglePivot = "togglePivot";
      var ht = function(n) {
        n.getPivotToggleProps = [Ko], n.stateReducers.push(zo), n.useInstanceAfterData.push(_o), n.allColumns.push(Xo), n.accessValue.push(jo), n.materializedColumns.push(eo), n.materializedColumnsDeps.push(to), n.visibleColumns.push(Yo), n.visibleColumnsDeps.push(Uo), n.useInstance.push(Jo), n.prepareRow.push($o);
      };
      ht.pluginName = "usePivotColumns";
      var no = [], Ko = function(n, r) {
        var l = r.header;
        return [n, { onClick: l.canPivot ? function(s) {
          s.persist(), l.togglePivot();
        } : void 0, style: { cursor: l.canPivot ? "pointer" : void 0 }, title: "Toggle Pivot" }];
      };
      function zo(n, r, l, s) {
        if (r.type === w.init)
          return d({ pivotColumns: no }, n);
        if (r.type === w.resetPivot)
          return d({}, n, { pivotColumns: s.initialState.pivotColumns || no });
        if (r.type === w.togglePivot) {
          var v = r.columnId, g = r.value, h = g !== void 0 ? g : !n.pivotColumns.includes(v);
          return d({}, n, h ? { pivotColumns: [].concat(n.pivotColumns, [v]) } : { pivotColumns: n.pivotColumns.filter(function(N) {
            return N !== v;
          }) });
        }
      }
      function _o(n) {
        n.allColumns.forEach(function(r) {
          r.isPivotSource = n.state.pivotColumns.includes(r.id);
        });
      }
      function Xo(n, r) {
        var l = r.instance;
        return n.forEach(function(s) {
          s.isPivotSource = l.state.pivotColumns.includes(s.id), s.uniqueValues = /* @__PURE__ */ new Set();
        }), n;
      }
      function jo(n, r) {
        var l = r.column;
        return l.uniqueValues && n !== void 0 && l.uniqueValues.add(n), n;
      }
      function eo(n, r) {
        var l = r.instance, s = l.allColumns, v = l.state;
        if (!v.pivotColumns.length || !v.groupBy || !v.groupBy.length)
          return n;
        var g = v.pivotColumns.map(function(T) {
          return s.find(function(P) {
            return P.id === T;
          });
        }).filter(Boolean), h = s.filter(function(T) {
          return !T.isPivotSource && !v.groupBy.includes(T.id) && !v.pivotColumns.includes(T.id);
        }), N = le(function T(P, q, W) {
          P === void 0 && (P = 0), W === void 0 && (W = []);
          var x = g[P];
          return x ? Array.from(x.uniqueValues).sort().map(function(k) {
            var B = d({}, x, { Header: x.PivotHeader || typeof x.header == "string" ? x.Header + ": " + k : k, isPivotGroup: !0, parent: q, depth: P, id: q ? q.id + "." + x.id + "." + k : x.id + "." + k, pivotValue: k });
            return B.columns = T(P + 1, B, [].concat(W, [function(X) {
              return X.values[x.id] === k;
            }])), B;
          }) : h.map(function(k) {
            return d({}, k, { canPivot: !1, isPivoted: !0, parent: q, depth: P, id: "" + (q ? q.id + "." + k.id : k.id), accessor: function(B, X, U) {
              if (W.every(function(un) {
                return un(U);
              }))
                return U.values[k.id];
            } });
          });
        }());
        return [].concat(n, N);
      }
      function to(n, r) {
        var l = r.instance.state, s = l.pivotColumns, v = l.groupBy;
        return [].concat(n, [s, v]);
      }
      function Yo(n, r) {
        var l = r.instance.state;
        return n = n.filter(function(s) {
          return !s.isPivotSource;
        }), l.pivotColumns.length && l.groupBy && l.groupBy.length && (n = n.filter(function(s) {
          return s.isGrouped || s.isPivoted;
        })), n;
      }
      function Uo(n, r) {
        var l = r.instance;
        return [].concat(n, [l.state.pivotColumns, l.state.groupBy]);
      }
      function Jo(n) {
        var r = n.columns, l = n.allColumns, s = n.flatHeaders, v = n.getHooks, g = n.plugins, h = n.dispatch, N = n.autoResetPivot, T = N === void 0 || N, P = n.manaulPivot, q = n.disablePivot, W = n.defaultCanPivot;
        yn(g, ["useGroupBy"], "usePivotColumns");
        var x = Mn(n);
        l.forEach(function(B) {
          var X = B.accessor, U = B.defaultPivot, un = B.disablePivot;
          B.canPivot = X ? ne(B.canPivot, un !== !0 && void 0, q !== !0 && void 0, !0) : ne(B.canPivot, U, W, !1), B.canPivot && (B.togglePivot = function() {
            return n.togglePivot(B.id);
          }), B.Aggregated = B.Aggregated || B.Cell;
        }), s.forEach(function(B) {
          B.getPivotToggleProps = dn(v().getPivotToggleProps, { instance: x(), header: B });
        });
        var k = Mn(T);
        Vn(function() {
          k() && h({ type: w.resetPivot });
        }, [h, P ? null : r]), Object.assign(n, { togglePivot: function(B, X) {
          h({ type: w.togglePivot, columnId: B, value: X });
        } });
      }
      function $o(n) {
        n.allCells.forEach(function(r) {
          r.isPivoted = r.column.isPivoted;
        });
      }
      w.resetSelectedRows = "resetSelectedRows", w.toggleAllRowsSelected = "toggleAllRowsSelected", w.toggleRowSelected = "toggleRowSelected", w.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var oo = function(n) {
        n.getToggleRowSelectedProps = [St], n.getToggleAllRowsSelectedProps = [nt], n.getToggleAllPageRowsSelectedProps = [ao], n.stateReducers.push(Zo), n.useInstance.push(ro), n.prepareRow.push(Qo);
      };
      oo.pluginName = "useRowSelect";
      var St = function(n, r) {
        var l = r.instance, s = r.row, v = l.manualRowSelectedKey, g = v === void 0 ? "isSelected" : v;
        return [n, { onChange: function(h) {
          s.toggleRowSelected(h.target.checked);
        }, style: { cursor: "pointer" }, checked: !(!s.original || !s.original[g]) || s.isSelected, title: "Toggle Row Selected", indeterminate: s.isSomeSelected }];
      }, nt = function(n, r) {
        var l = r.instance;
        return [n, { onChange: function(s) {
          l.toggleAllRowsSelected(s.target.checked);
        }, style: { cursor: "pointer" }, checked: l.isAllRowsSelected, title: "Toggle All Rows Selected", indeterminate: !!(!l.isAllRowsSelected && Object.keys(l.state.selectedRowIds).length) }];
      }, ao = function(n, r) {
        var l = r.instance;
        return [n, { onChange: function(s) {
          l.toggleAllPageRowsSelected(s.target.checked);
        }, style: { cursor: "pointer" }, checked: l.isAllPageRowsSelected, title: "Toggle All Current Page Rows Selected", indeterminate: !!(!l.isAllPageRowsSelected && l.page.some(function(s) {
          var v = s.id;
          return l.state.selectedRowIds[v];
        })) }];
      };
      function Zo(n, r, l, s) {
        if (r.type === w.init)
          return d({ selectedRowIds: {} }, n);
        if (r.type === w.resetSelectedRows)
          return d({}, n, { selectedRowIds: s.initialState.selectedRowIds || {} });
        if (r.type === w.toggleAllRowsSelected) {
          var v = r.value, g = s.isAllRowsSelected, h = s.rowsById, N = s.nonGroupedRowsById, T = N === void 0 ? h : N, P = v !== void 0 ? v : !g, q = Object.assign({}, n.selectedRowIds);
          return P ? Object.keys(T).forEach(function(Kn) {
            q[Kn] = !0;
          }) : Object.keys(T).forEach(function(Kn) {
            delete q[Kn];
          }), d({}, n, { selectedRowIds: q });
        }
        if (r.type === w.toggleRowSelected) {
          var W = r.id, x = r.value, k = s.rowsById, B = s.selectSubRows, X = B === void 0 || B, U = s.getSubRows, un = n.selectedRowIds[W], In = x !== void 0 ? x : !un;
          if (un === In)
            return n;
          var ln = d({}, n.selectedRowIds);
          return function Kn(e) {
            var t = k[e];
            if (t && (t.isGrouped || (In ? ln[e] = !0 : delete ln[e]), X && U(t)))
              return U(t).forEach(function(u) {
                return Kn(u.id);
              });
          }(W), d({}, n, { selectedRowIds: ln });
        }
        if (r.type === w.toggleAllPageRowsSelected) {
          var K = r.value, Nn = s.page, tn = s.rowsById, wn = s.selectSubRows, Gn = wn === void 0 || wn, Cn = s.isAllPageRowsSelected, hn = s.getSubRows, zn = K !== void 0 ? K : !Cn, An = d({}, n.selectedRowIds);
          return Nn.forEach(function(Kn) {
            return function e(t) {
              var u = tn[t];
              if (u.isGrouped || (zn ? An[t] = !0 : delete An[t]), Gn && hn(u))
                return hn(u).forEach(function(a) {
                  return e(a.id);
                });
            }(Kn.id);
          }), d({}, n, { selectedRowIds: An });
        }
        return n;
      }
      function ro(n) {
        var r = n.data, l = n.rows, s = n.getHooks, v = n.plugins, g = n.rowsById, h = n.nonGroupedRowsById, N = h === void 0 ? g : h, T = n.autoResetSelectedRows, P = T === void 0 || T, q = n.state.selectedRowIds, W = n.selectSubRows, x = W === void 0 || W, k = n.dispatch, B = n.page, X = n.getSubRows;
        yn(v, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var U = y.useMemo(function() {
          var hn = [];
          return l.forEach(function(zn) {
            var An = x ? function Kn(e, t, u) {
              if (t[e.id])
                return !0;
              var a = u(e);
              if (a && a.length) {
                var f = !0, m = !1;
                return a.forEach(function(C) {
                  m && !f || (Kn(C, t, u) ? m = !0 : f = !1);
                }), !!f || !!m && null;
              }
              return !1;
            }(zn, q, X) : !!q[zn.id];
            zn.isSelected = !!An, zn.isSomeSelected = An === null, An && hn.push(zn);
          }), hn;
        }, [l, x, q, X]), un = !!(Object.keys(N).length && Object.keys(q).length), In = un;
        un && Object.keys(N).some(function(hn) {
          return !q[hn];
        }) && (un = !1), un || B && B.length && B.some(function(hn) {
          var zn = hn.id;
          return !q[zn];
        }) && (In = !1);
        var ln = Mn(P);
        Vn(function() {
          ln() && k({ type: w.resetSelectedRows });
        }, [k, r]);
        var K = y.useCallback(function(hn) {
          return k({ type: w.toggleAllRowsSelected, value: hn });
        }, [k]), Nn = y.useCallback(function(hn) {
          return k({ type: w.toggleAllPageRowsSelected, value: hn });
        }, [k]), tn = y.useCallback(function(hn, zn) {
          return k({ type: w.toggleRowSelected, id: hn, value: zn });
        }, [k]), wn = Mn(n), Gn = dn(s().getToggleAllRowsSelectedProps, { instance: wn() }), Cn = dn(s().getToggleAllPageRowsSelectedProps, { instance: wn() });
        Object.assign(n, { selectedFlatRows: U, isAllRowsSelected: un, isAllPageRowsSelected: In, toggleRowSelected: tn, toggleAllRowsSelected: K, getToggleAllRowsSelectedProps: Gn, getToggleAllPageRowsSelectedProps: Cn, toggleAllPageRowsSelected: Nn });
      }
      function Qo(n, r) {
        var l = r.instance;
        n.toggleRowSelected = function(s) {
          return l.toggleRowSelected(n.id, s);
        }, n.getToggleRowSelectedProps = dn(l.getHooks().getToggleRowSelectedProps, { instance: l, row: n });
      }
      var uo = function(n) {
        return {};
      }, io = function(n) {
        return {};
      };
      w.setRowState = "setRowState", w.setCellState = "setCellState", w.resetRowState = "resetRowState";
      var wt = function(n) {
        n.stateReducers.push(na), n.useInstance.push(lo), n.prepareRow.push(ea);
      };
      function na(n, r, l, s) {
        var v = s.initialRowStateAccessor, g = v === void 0 ? uo : v, h = s.initialCellStateAccessor, N = h === void 0 ? io : h, T = s.rowsById;
        if (r.type === w.init)
          return d({ rowState: {} }, n);
        if (r.type === w.resetRowState)
          return d({}, n, { rowState: s.initialState.rowState || {} });
        if (r.type === w.setRowState) {
          var P, q = r.rowId, W = r.value, x = n.rowState[q] !== void 0 ? n.rowState[q] : g(T[q]);
          return d({}, n, { rowState: d({}, n.rowState, (P = {}, P[q] = Bn(W, x), P)) });
        }
        if (r.type === w.setCellState) {
          var k, B, X, U, un, In = r.rowId, ln = r.columnId, K = r.value, Nn = n.rowState[In] !== void 0 ? n.rowState[In] : g(T[In]), tn = (Nn == null || (k = Nn.cellState) == null ? void 0 : k[ln]) !== void 0 ? Nn.cellState[ln] : N((B = T[In]) == null || (X = B.cells) == null ? void 0 : X.find(function(wn) {
            return wn.column.id === ln;
          }));
          return d({}, n, { rowState: d({}, n.rowState, (un = {}, un[In] = d({}, Nn, { cellState: d({}, Nn.cellState || {}, (U = {}, U[ln] = Bn(K, tn), U)) }), un)) });
        }
      }
      function lo(n) {
        var r = n.autoResetRowState, l = r === void 0 || r, s = n.data, v = n.dispatch, g = y.useCallback(function(T, P) {
          return v({ type: w.setRowState, rowId: T, value: P });
        }, [v]), h = y.useCallback(function(T, P, q) {
          return v({ type: w.setCellState, rowId: T, columnId: P, value: q });
        }, [v]), N = Mn(l);
        Vn(function() {
          N() && v({ type: w.resetRowState });
        }, [s]), Object.assign(n, { setRowState: g, setCellState: h });
      }
      function ea(n, r) {
        var l = r.instance, s = l.initialRowStateAccessor, v = s === void 0 ? uo : s, g = l.initialCellStateAccessor, h = g === void 0 ? io : g, N = l.state.rowState;
        n && (n.state = N[n.id] !== void 0 ? N[n.id] : v(n), n.setState = function(T) {
          return l.setRowState(n.id, T);
        }, n.cells.forEach(function(T) {
          n.state.cellState || (n.state.cellState = {}), T.state = n.state.cellState[T.column.id] !== void 0 ? n.state.cellState[T.column.id] : h(T), T.setState = function(P) {
            return l.setCellState(n.id, T.column.id, P);
          };
        }));
      }
      wt.pluginName = "useRowState", w.resetColumnOrder = "resetColumnOrder", w.setColumnOrder = "setColumnOrder";
      var so = function(n) {
        n.stateReducers.push(co), n.visibleColumnsDeps.push(function(r, l) {
          var s = l.instance;
          return [].concat(r, [s.state.columnOrder]);
        }), n.visibleColumns.push(yo), n.useInstance.push(ta);
      };
      function co(n, r, l, s) {
        return r.type === w.init ? d({ columnOrder: [] }, n) : r.type === w.resetColumnOrder ? d({}, n, { columnOrder: s.initialState.columnOrder || [] }) : r.type === w.setColumnOrder ? d({}, n, { columnOrder: Bn(r.columnOrder, n.columnOrder) }) : void 0;
      }
      function yo(n, r) {
        var l = r.instance.state.columnOrder;
        if (!l || !l.length)
          return n;
        for (var s = [].concat(l), v = [].concat(n), g = [], h = function() {
          var N = s.shift(), T = v.findIndex(function(P) {
            return P.id === N;
          });
          T > -1 && g.push(v.splice(T, 1)[0]);
        }; v.length && s.length; )
          h();
        return [].concat(g, v);
      }
      function ta(n) {
        var r = n.dispatch;
        n.setColumnOrder = y.useCallback(function(l) {
          return r({ type: w.setColumnOrder, columnOrder: l });
        }, [r]);
      }
      so.pluginName = "useColumnOrder", rn.canResize = !0, w.columnStartResizing = "columnStartResizing", w.columnResizing = "columnResizing", w.columnDoneResizing = "columnDoneResizing", w.resetResize = "resetResize";
      var Co = function(n) {
        n.getResizerProps = [oa], n.getHeaderProps.push({ style: { position: "relative" } }), n.stateReducers.push(aa), n.useInstance.push(ua), n.useInstanceBeforeDimensions.push(ra);
      }, oa = function(n, r) {
        var l = r.instance, s = r.header, v = l.dispatch, g = function(h, N) {
          var T = !1;
          if (h.type === "touchstart") {
            if (h.touches && h.touches.length > 1)
              return;
            T = !0;
          }
          var P, q, W = function(ln) {
            var K = [];
            return function Nn(tn) {
              tn.columns && tn.columns.length && tn.columns.map(Nn), K.push(tn);
            }(ln), K;
          }(N).map(function(ln) {
            return [ln.id, ln.totalWidth];
          }), x = T ? Math.round(h.touches[0].clientX) : h.clientX, k = function() {
            window.cancelAnimationFrame(P), P = null, v({ type: w.columnDoneResizing });
          }, B = function() {
            window.cancelAnimationFrame(P), P = null, v({ type: w.columnResizing, clientX: q });
          }, X = function(ln) {
            q = ln, P || (P = window.requestAnimationFrame(B));
          }, U = { mouse: { moveEvent: "mousemove", moveHandler: function(ln) {
            return X(ln.clientX);
          }, upEvent: "mouseup", upHandler: function(ln) {
            document.removeEventListener("mousemove", U.mouse.moveHandler), document.removeEventListener("mouseup", U.mouse.upHandler), k();
          } }, touch: { moveEvent: "touchmove", moveHandler: function(ln) {
            return ln.cancelable && (ln.preventDefault(), ln.stopPropagation()), X(ln.touches[0].clientX), !1;
          }, upEvent: "touchend", upHandler: function(ln) {
            document.removeEventListener(U.touch.moveEvent, U.touch.moveHandler), document.removeEventListener(U.touch.upEvent, U.touch.moveHandler), k();
          } } }, un = T ? U.touch : U.mouse, In = !!function() {
            if (typeof Pe == "boolean")
              return Pe;
            var ln = !1;
            try {
              var K = { get passive() {
                return ln = !0, !1;
              } };
              window.addEventListener("test", null, K), window.removeEventListener("test", null, K);
            } catch {
              ln = !1;
            }
            return Pe = ln;
          }() && { passive: !1 };
          document.addEventListener(un.moveEvent, un.moveHandler, In), document.addEventListener(un.upEvent, un.upHandler, In), v({ type: w.columnStartResizing, columnId: N.id, columnWidth: N.totalWidth, headerIdWidths: W, clientX: x });
        };
        return [n, { onMouseDown: function(h) {
          return h.persist() || g(h, s);
        }, onTouchStart: function(h) {
          return h.persist() || g(h, s);
        }, style: { cursor: "col-resize" }, draggable: !1, role: "separator" }];
      };
      function aa(n, r) {
        if (r.type === w.init)
          return d({ columnResizing: { columnWidths: {} } }, n);
        if (r.type === w.resetResize)
          return d({}, n, { columnResizing: { columnWidths: {} } });
        if (r.type === w.columnStartResizing) {
          var l = r.clientX, s = r.columnId, v = r.columnWidth, g = r.headerIdWidths;
          return d({}, n, { columnResizing: d({}, n.columnResizing, { startX: l, headerIdWidths: g, columnWidth: v, isResizingColumn: s }) });
        }
        if (r.type === w.columnResizing) {
          var h = r.clientX, N = n.columnResizing, T = N.startX, P = N.columnWidth, q = N.headerIdWidths, W = (h - T) / P, x = {};
          return (q === void 0 ? [] : q).forEach(function(k) {
            var B = k[0], X = k[1];
            x[B] = Math.max(X + X * W, 0);
          }), d({}, n, { columnResizing: d({}, n.columnResizing, { columnWidths: d({}, n.columnResizing.columnWidths, {}, x) }) });
        }
        return r.type === w.columnDoneResizing ? d({}, n, { columnResizing: d({}, n.columnResizing, { startX: null, isResizingColumn: null }) }) : void 0;
      }
      Co.pluginName = "useResizeColumns";
      var ra = function(n) {
        var r = n.flatHeaders, l = n.disableResizing, s = n.getHooks, v = n.state.columnResizing, g = Mn(n);
        r.forEach(function(h) {
          var N = ne(h.disableResizing !== !0 && void 0, l !== !0 && void 0, !0);
          h.canResize = N, h.width = v.columnWidths[h.id] || h.originalWidth || h.width, h.isResizing = v.isResizingColumn === h.id, N && (h.getResizerProps = dn(s().getResizerProps, { instance: g(), header: h }));
        });
      };
      function ua(n) {
        var r = n.plugins, l = n.dispatch, s = n.autoResetResize, v = s === void 0 || s, g = n.columns;
        yn(r, ["useAbsoluteLayout"], "useResizeColumns");
        var h = Mn(v);
        Vn(function() {
          h() && l({ type: w.resetResize });
        }, [g]);
        var N = y.useCallback(function() {
          return l({ type: w.resetResize });
        }, [l]);
        Object.assign(n, { resetResizing: N });
      }
      var bt = { position: "absolute", top: 0 }, po = function(n) {
        n.getTableBodyProps.push(ut), n.getRowProps.push(ut), n.getHeaderGroupProps.push(ut), n.getFooterGroupProps.push(ut), n.getHeaderProps.push(function(r, l) {
          var s = l.column;
          return [r, { style: d({}, bt, { left: s.totalLeft + "px", width: s.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(r, l) {
          var s = l.cell;
          return [r, { style: d({}, bt, { left: s.column.totalLeft + "px", width: s.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(r, l) {
          var s = l.column;
          return [r, { style: d({}, bt, { left: s.totalLeft + "px", width: s.totalWidth + "px" }) }];
        });
      };
      po.pluginName = "useAbsoluteLayout";
      var ut = function(n, r) {
        return [n, { style: { position: "relative", width: r.instance.totalColumnsWidth + "px" } }];
      }, Mt = { display: "inline-block", boxSizing: "border-box" }, At = function(n, r) {
        return [n, { style: { display: "flex", width: r.instance.totalColumnsWidth + "px" } }];
      }, fo = function(n) {
        n.getRowProps.push(At), n.getHeaderGroupProps.push(At), n.getFooterGroupProps.push(At), n.getHeaderProps.push(function(r, l) {
          var s = l.column;
          return [r, { style: d({}, Mt, { width: s.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(r, l) {
          var s = l.cell;
          return [r, { style: d({}, Mt, { width: s.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(r, l) {
          var s = l.column;
          return [r, { style: d({}, Mt, { width: s.totalWidth + "px" }) }];
        });
      };
      function Dt(n) {
        n.getTableProps.push(ia), n.getRowProps.push(Nt), n.getHeaderGroupProps.push(Nt), n.getFooterGroupProps.push(Nt), n.getHeaderProps.push(la), n.getCellProps.push(sa), n.getFooterProps.push(ca);
      }
      fo.pluginName = "useBlockLayout", Dt.pluginName = "useFlexLayout";
      var ia = function(n, r) {
        return [n, { style: { minWidth: r.instance.totalColumnsMinWidth + "px" } }];
      }, Nt = function(n, r) {
        return [n, { style: { display: "flex", flex: "1 0 auto", minWidth: r.instance.totalColumnsMinWidth + "px" } }];
      }, la = function(n, r) {
        var l = r.column;
        return [n, { style: { boxSizing: "border-box", flex: l.totalFlexWidth ? l.totalFlexWidth + " 0 auto" : void 0, minWidth: l.totalMinWidth + "px", width: l.totalWidth + "px" } }];
      }, sa = function(n, r) {
        var l = r.cell;
        return [n, { style: { boxSizing: "border-box", flex: l.column.totalFlexWidth + " 0 auto", minWidth: l.column.totalMinWidth + "px", width: l.column.totalWidth + "px" } }];
      }, ca = function(n, r) {
        var l = r.column;
        return [n, { style: { boxSizing: "border-box", flex: l.totalFlexWidth ? l.totalFlexWidth + " 0 auto" : void 0, minWidth: l.totalMinWidth + "px", width: l.totalWidth + "px" } }];
      };
      function go(n) {
        n.stateReducers.push(So), n.getTableProps.push(mo), n.getHeaderProps.push(vo), n.getRowProps.push(ho);
      }
      w.columnStartResizing = "columnStartResizing", w.columnResizing = "columnResizing", w.columnDoneResizing = "columnDoneResizing", w.resetResize = "resetResize", go.pluginName = "useGridLayout";
      var mo = function(n, r) {
        var l = r.instance;
        return [n, { style: { display: "grid", gridTemplateColumns: l.visibleColumns.map(function(s) {
          var v;
          return l.state.gridLayout.columnWidths[s.id] ? l.state.gridLayout.columnWidths[s.id] + "px" : (v = l.state.columnResizing) != null && v.isResizingColumn ? l.state.gridLayout.startWidths[s.id] + "px" : typeof s.width == "number" ? s.width + "px" : s.width;
        }).join(" ") } }];
      }, vo = function(n, r) {
        var l = r.column;
        return [n, { id: "header-cell-" + l.id, style: { position: "sticky", gridColumn: "span " + l.totalVisibleHeaderCount } }];
      }, ho = function(n, r) {
        var l = r.row;
        return l.isExpanded ? [n, { style: { gridColumn: "1 / " + (l.cells.length + 1) } }] : [n, {}];
      };
      function So(n, r, l, s) {
        if (r.type === w.init)
          return d({ gridLayout: { columnWidths: {} } }, n);
        if (r.type === w.resetResize)
          return d({}, n, { gridLayout: { columnWidths: {} } });
        if (r.type === w.columnStartResizing) {
          var v = r.columnId, g = r.headerIdWidths, h = Rt(v);
          if (h !== void 0) {
            var N = s.visibleColumns.reduce(function(K, Nn) {
              var tn;
              return d({}, K, ((tn = {})[Nn.id] = Rt(Nn.id), tn));
            }, {}), T = s.visibleColumns.reduce(function(K, Nn) {
              var tn;
              return d({}, K, ((tn = {})[Nn.id] = Nn.minWidth, tn));
            }, {}), P = s.visibleColumns.reduce(function(K, Nn) {
              var tn;
              return d({}, K, ((tn = {})[Nn.id] = Nn.maxWidth, tn));
            }, {}), q = g.map(function(K) {
              var Nn = K[0];
              return [Nn, Rt(Nn)];
            });
            return d({}, n, { gridLayout: d({}, n.gridLayout, { startWidths: N, minWidths: T, maxWidths: P, headerIdGridWidths: q, columnWidth: h }) });
          }
          return n;
        }
        if (r.type === w.columnResizing) {
          var W = r.clientX, x = n.columnResizing.startX, k = n.gridLayout, B = k.columnWidth, X = k.minWidths, U = k.maxWidths, un = k.headerIdGridWidths, In = (W - x) / B, ln = {};
          return (un === void 0 ? [] : un).forEach(function(K) {
            var Nn = K[0], tn = K[1];
            ln[Nn] = Math.min(Math.max(X[Nn], tn + tn * In), U[Nn]);
          }), d({}, n, { gridLayout: d({}, n.gridLayout, { columnWidths: d({}, n.gridLayout.columnWidths, {}, ln) }) });
        }
        return r.type === w.columnDoneResizing ? d({}, n, { gridLayout: d({}, n.gridLayout, { startWidths: {}, minWidths: {}, maxWidths: {} }) }) : void 0;
      }
      function Rt(n) {
        var r, l = (r = document.getElementById("header-cell-" + n)) == null ? void 0 : r.offsetWidth;
        if (l !== void 0)
          return l;
      }
      c._UNSTABLE_usePivotColumns = ht, c.actions = w, c.defaultColumn = rn, c.defaultGroupByFn = Ut, c.defaultOrderByFn = Qt, c.defaultRenderer = En, c.emptyRenderer = b, c.ensurePluginOrder = yn, c.flexRender = Wn, c.functionalUpdate = Bn, c.loopHooks = qn, c.makePropGetter = dn, c.makeRenderer = Dn, c.reduceHooks = mn, c.safeUseLayoutEffect = Un, c.useAbsoluteLayout = po, c.useAsyncDebounce = function(n, r) {
        r === void 0 && (r = 0);
        var l = y.useRef({}), s = Mn(n), v = Mn(r);
        return y.useCallback(function() {
          var g = E(regeneratorRuntime.mark(function h() {
            var N, T, P, q = arguments;
            return regeneratorRuntime.wrap(function(W) {
              for (; ; )
                switch (W.prev = W.next) {
                  case 0:
                    for (N = q.length, T = new Array(N), P = 0; P < N; P++)
                      T[P] = q[P];
                    return l.current.promise || (l.current.promise = new Promise(function(x, k) {
                      l.current.resolve = x, l.current.reject = k;
                    })), l.current.timeout && clearTimeout(l.current.timeout), l.current.timeout = setTimeout(E(regeneratorRuntime.mark(function x() {
                      return regeneratorRuntime.wrap(function(k) {
                        for (; ; )
                          switch (k.prev = k.next) {
                            case 0:
                              return delete l.current.timeout, k.prev = 1, k.t0 = l.current, k.next = 5, s().apply(void 0, T);
                            case 5:
                              k.t1 = k.sent, k.t0.resolve.call(k.t0, k.t1), k.next = 12;
                              break;
                            case 9:
                              k.prev = 9, k.t2 = k.catch(1), l.current.reject(k.t2);
                            case 12:
                              return k.prev = 12, delete l.current.promise, k.finish(12);
                            case 15:
                            case "end":
                              return k.stop();
                          }
                      }, x, null, [[1, 9, 12, 15]]);
                    })), v()), W.abrupt("return", l.current.promise);
                  case 5:
                  case "end":
                    return W.stop();
                }
            }, h);
          }));
          return function() {
            return g.apply(this, arguments);
          };
        }(), [s, v]);
      }, c.useBlockLayout = fo, c.useColumnOrder = so, c.useExpanded = Re, c.useFilters = Gt, c.useFlexLayout = Dt, c.useGetLatest = Mn, c.useGlobalFilter = pt, c.useGridLayout = go, c.useGroupBy = mt, c.useMountedLayoutEffect = Vn, c.usePagination = vt, c.useResizeColumns = Co, c.useRowSelect = oo, c.useRowState = wt, c.useSortBy = Zt, c.useTable = function(n) {
        for (var r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          l[s - 1] = arguments[s];
        n = de(n), l = [ue].concat(l);
        var v = y.useRef({}), g = Mn(v.current);
        Object.assign(g(), d({}, n, { plugins: l, hooks: Xn() })), l.filter(Boolean).forEach(function(C) {
          C(g().hooks);
        });
        var h = Mn(g().hooks);
        g().getHooks = h, delete g().hooks, Object.assign(g(), mn(h().useOptions, de(n)));
        var N = g(), T = N.data, P = N.columns, q = N.initialState, W = N.defaultColumn, x = N.getSubRows, k = N.getRowId, B = N.stateReducer, X = N.useControlledState, U = Mn(B), un = y.useCallback(function(C, S) {
          if (!S.type)
            throw console.info({ action: S }), new Error("Unknown Action 👆");
          return [].concat(h().stateReducers, Array.isArray(U()) ? U() : [U()]).reduce(function(D, R) {
            return R(D, S, C, g()) || D;
          }, C);
        }, [h, U, g]), In = y.useReducer(un, void 0, function() {
          return un(q, { type: w.init });
        }), ln = In[0], K = In[1], Nn = mn([].concat(h().useControlledState, [X]), ln, { instance: g() });
        Object.assign(g(), { state: Nn, dispatch: K });
        var tn = y.useMemo(function() {
          return vn(mn(h().columns, P, { instance: g() }));
        }, [h, g, P].concat(mn(h().columnsDeps, [], { instance: g() })));
        g().columns = tn;
        var wn = y.useMemo(function() {
          return mn(h().allColumns, le(tn), { instance: g() }).map($n);
        }, [tn, h, g].concat(mn(h().allColumnsDeps, [], { instance: g() })));
        g().allColumns = wn;
        var Gn = y.useMemo(function() {
          for (var C = [], S = [], D = {}, R = [].concat(wn); R.length; ) {
            var I = R.shift();
            He({ data: T, rows: C, flatRows: S, rowsById: D, column: I, getRowId: k, getSubRows: x, accessValueHooks: h().accessValue, getInstance: g });
          }
          return [C, S, D];
        }, [wn, T, k, x, h, g]), Cn = Gn[0], hn = Gn[1], zn = Gn[2];
        Object.assign(g(), { rows: Cn, initialRows: [].concat(Cn), flatRows: hn, rowsById: zn }), qn(h().useInstanceAfterData, g());
        var An = y.useMemo(function() {
          return mn(h().visibleColumns, wn, { instance: g() }).map(function(C) {
            return xn(C, W);
          });
        }, [h, wn, g, W].concat(mn(h().visibleColumnsDeps, [], { instance: g() })));
        wn = y.useMemo(function() {
          var C = [].concat(An);
          return wn.forEach(function(S) {
            C.find(function(D) {
              return D.id === S.id;
            }) || C.push(S);
          }), C;
        }, [wn, An]), g().allColumns = wn;
        var Kn = y.useMemo(function() {
          return mn(h().headerGroups, oe(An, W), g());
        }, [h, An, W, g].concat(mn(h().headerGroupsDeps, [], { instance: g() })));
        g().headerGroups = Kn;
        var e = y.useMemo(function() {
          return Kn.length ? Kn[0].headers : [];
        }, [Kn]);
        g().headers = e, g().flatHeaders = Kn.reduce(function(C, S) {
          return [].concat(C, S.headers);
        }, []), qn(h().useInstanceBeforeDimensions, g());
        var t = An.filter(function(C) {
          return C.isVisible;
        }).map(function(C) {
          return C.id;
        }).sort().join("_");
        An = y.useMemo(function() {
          return An.filter(function(C) {
            return C.isVisible;
          });
        }, [An, t]), g().visibleColumns = An;
        var u = me(e), a = u[0], f = u[1], m = u[2];
        return g().totalColumnsMinWidth = a, g().totalColumnsWidth = f, g().totalColumnsMaxWidth = m, qn(h().useInstance, g()), [].concat(g().flatHeaders, g().allColumns).forEach(function(C) {
          C.render = Dn(g(), C), C.getHeaderProps = dn(h().getHeaderProps, { instance: g(), column: C }), C.getFooterProps = dn(h().getFooterProps, { instance: g(), column: C });
        }), g().headerGroups = y.useMemo(function() {
          return Kn.filter(function(C, S) {
            return C.headers = C.headers.filter(function(D) {
              return D.headers ? function R(I) {
                return I.filter(function(z) {
                  return z.headers ? R(z.headers) : z.isVisible;
                }).length;
              }(D.headers) : D.isVisible;
            }), !!C.headers.length && (C.getHeaderGroupProps = dn(h().getHeaderGroupProps, { instance: g(), headerGroup: C, index: S }), C.getFooterGroupProps = dn(h().getFooterGroupProps, { instance: g(), headerGroup: C, index: S }), !0);
          });
        }, [Kn, g, h]), g().footerGroups = [].concat(g().headerGroups).reverse(), g().prepareRow = y.useCallback(function(C) {
          C.getRowProps = dn(h().getRowProps, { instance: g(), row: C }), C.allCells = wn.map(function(S) {
            var D = C.values[S.id], R = { column: S, row: C, value: D };
            return R.getCellProps = dn(h().getCellProps, { instance: g(), cell: R }), R.render = Dn(g(), S, { row: C, cell: R, value: D }), R;
          }), C.cells = An.map(function(S) {
            return C.allCells.find(function(D) {
              return D.column.id === S.id;
            });
          }), qn(h().prepareRow, C, { instance: g() });
        }, [h, g, wn, An]), g().getTableProps = dn(h().getTableProps, { instance: g() }), g().getTableBodyProps = dn(h().getTableBodyProps, { instance: g() }), qn(h().useFinalInstance, g()), g();
      }, Object.defineProperty(c, "__esModule", { value: !0 });
    });
  }(Do, Do.exports)), Do.exports;
}
var No = { exports: {} }, Ua;
function Ku() {
  return Ua || (Ua = 1, function(o, p) {
    (function(c, y) {
      y(p, M);
    })(lr, function(c, y) {
      y = y && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y;
      function A(e, t, u, a, f, m, C) {
        try {
          var S = e[m](C), D = S.value;
        } catch (R) {
          u(R);
          return;
        }
        S.done ? t(D) : Promise.resolve(D).then(a, f);
      }
      function E(e) {
        return function() {
          var t = this, u = arguments;
          return new Promise(function(a, f) {
            var m = e.apply(t, u);
            function C(D) {
              A(m, a, f, C, S, "next", D);
            }
            function S(D) {
              A(m, a, f, C, S, "throw", D);
            }
            C(void 0);
          });
        };
      }
      function d() {
        return d = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var u = arguments[t];
            for (var a in u)
              Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
          }
          return e;
        }, d.apply(this, arguments);
      }
      function O(e, t) {
        if (e == null)
          return {};
        var u = {}, a = Object.keys(e), f, m;
        for (m = 0; m < a.length; m++)
          f = a[m], !(t.indexOf(f) >= 0) && (u[f] = e[f]);
        return u;
      }
      function Rn(e, t) {
        if (typeof e != "object" || e === null)
          return e;
        var u = e[Symbol.toPrimitive];
        if (u !== void 0) {
          var a = u.call(e, t || "default");
          if (typeof a != "object")
            return a;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }
      function w(e) {
        var t = Rn(e, "string");
        return typeof t == "symbol" ? t : String(t);
      }
      var En = "Renderer Error ☝️", b = {
        init: "init"
      }, rn = function(t) {
        var u = t.value, a = u === void 0 ? "" : u;
        return a;
      }, gn = function() {
        return y.createElement(y.Fragment, null, " ");
      }, dn = {
        Cell: rn,
        width: 150,
        minWidth: 0,
        maxWidth: Number.MAX_SAFE_INTEGER
      };
      function mn() {
        for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++)
          t[u] = arguments[u];
        return t.reduce(function(a, f) {
          var m = f.style, C = f.className, S = O(f, ["style", "className"]);
          return a = d({}, a, {}, S), m && (a.style = a.style ? d({}, a.style || {}, {}, m || {}) : m), C && (a.className = a.className ? a.className + " " + C : C), a.className === "" && delete a.className, a;
        }, {});
      }
      function qn(e, t, u) {
        return typeof t == "function" ? qn({}, t(e, u)) : Array.isArray(t) ? mn.apply(void 0, [e].concat(t)) : mn(e, t);
      }
      var yn = function(t, u) {
        return u === void 0 && (u = {}), function(a) {
          return a === void 0 && (a = {}), [].concat(t, [a]).reduce(function(f, m) {
            return qn(f, m, d({}, u, {
              userProps: a
            }));
          }, {});
        };
      }, Bn = function(t, u, a, f) {
        return a === void 0 && (a = {}), t.reduce(function(m, C) {
          var S = C(m, a);
          if (!f && typeof S > "u")
            throw console.info(C), new Error("React Table: A reducer hook ☝️ just returned undefined! This is not allowed.");
          return S;
        }, u);
      }, Mn = function(t, u, a) {
        return a === void 0 && (a = {}), t.forEach(function(f) {
          var m = f(u, a);
          if (typeof m < "u")
            throw console.info(f, m), new Error("React Table: A loop-type hook ☝️ just returned a value! This is not allowed.");
        });
      };
      function Un(e, t, u, a) {
        if (a)
          throw new Error('Defining plugins in the "after" section of ensurePluginOrder is no longer supported (see plugin ' + u + ")");
        var f = e.findIndex(function(m) {
          return m.pluginName === u;
        });
        if (f === -1)
          throw new Error('The plugin "' + u + `" was not found in the plugin list!
This usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:

  ` + u + ".pluginName = '" + u + `'
`);
        t.forEach(function(m) {
          var C = e.findIndex(function(S) {
            return S.pluginName === m;
          });
          if (C > -1 && C > f)
            throw new Error("React Table: The " + u + " plugin hook must be placed after the " + m + " plugin hook!");
        });
      }
      function Vn(e, t) {
        return typeof e == "function" ? e(t) : e;
      }
      function Dn(e) {
        var t = y.useRef();
        return t.current = e, y.useCallback(function() {
          return t.current;
        }, []);
      }
      var Wn = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
      function vn(e, t) {
        var u = y.useRef(!1);
        Wn(function() {
          u.current && e(), u.current = !0;
        }, t);
      }
      function le(e, t) {
        t === void 0 && (t = 0);
        var u = y.useRef({}), a = Dn(e), f = Dn(t);
        return y.useCallback(
          /* @__PURE__ */ function() {
            var m = E(
              /* @__PURE__ */ regeneratorRuntime.mark(function C() {
                var S, D, R, I = arguments;
                return regeneratorRuntime.wrap(function(H) {
                  for (; ; )
                    switch (H.prev = H.next) {
                      case 0:
                        for (S = I.length, D = new Array(S), R = 0; R < S; R++)
                          D[R] = I[R];
                        return u.current.promise || (u.current.promise = new Promise(function(G, _) {
                          u.current.resolve = G, u.current.reject = _;
                        })), u.current.timeout && clearTimeout(u.current.timeout), u.current.timeout = setTimeout(
                          /* @__PURE__ */ E(
                            /* @__PURE__ */ regeneratorRuntime.mark(function G() {
                              return regeneratorRuntime.wrap(function(L) {
                                for (; ; )
                                  switch (L.prev = L.next) {
                                    case 0:
                                      return delete u.current.timeout, L.prev = 1, L.t0 = u.current, L.next = 5, a().apply(void 0, D);
                                    case 5:
                                      L.t1 = L.sent, L.t0.resolve.call(L.t0, L.t1), L.next = 12;
                                      break;
                                    case 9:
                                      L.prev = 9, L.t2 = L.catch(1), u.current.reject(L.t2);
                                    case 12:
                                      return L.prev = 12, delete u.current.promise, L.finish(12);
                                    case 15:
                                    case "end":
                                      return L.stop();
                                  }
                              }, G, null, [[1, 9, 12, 15]]);
                            })
                          ),
                          f()
                        ), H.abrupt("return", u.current.promise);
                      case 5:
                      case "end":
                        return H.stop();
                    }
                }, C);
              })
            );
            return function() {
              return m.apply(this, arguments);
            };
          }(),
          [a, f]
        );
      }
      function $n(e, t, u) {
        return u === void 0 && (u = {}), function(a, f) {
          f === void 0 && (f = {});
          var m = typeof a == "string" ? t[a] : a;
          if (typeof m > "u")
            throw console.info(t), new Error(En);
          return xn(m, d({}, e, {
            column: t
          }, u, {}, f));
        };
      }
      function xn(e, t) {
        return oe(e) ? y.createElement(e, t) : e;
      }
      function oe(e) {
        return se(e) || typeof e == "function" || ne(e);
      }
      function se(e) {
        return typeof e == "function" && function() {
          var t = Object.getPrototypeOf(e);
          return t.prototype && t.prototype.isReactComponent;
        }();
      }
      function ne(e) {
        return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
      }
      function ee(e, t, u) {
        return u === void 0 && (u = 0), e.map(function(a) {
          return a = d({}, a, {
            parent: t,
            depth: u
          }), De(a), a.columns && (a.columns = ee(a.columns, a, u + 1)), a;
        });
      }
      function Te(e) {
        return Me(e, "columns");
      }
      function De(e) {
        var t = e.id, u = e.accessor, a = e.Header;
        if (typeof u == "string") {
          t = t || u;
          var f = u.split(".");
          u = function(C) {
            return Pe(C, f);
          };
        }
        if (!t && typeof a == "string" && a && (t = a), !t && e.columns)
          throw console.error(e), new Error('A column ID (or unique "Header" value) is required!');
        if (!t)
          throw console.error(e), new Error("A column ID (or string accessor) is required!");
        return Object.assign(e, {
          id: t,
          accessor: u
        }), e;
      }
      function he(e, t) {
        if (!t)
          throw new Error();
        return Object.assign(e, d({
          // Make sure there is a fallback header, just in case
          Header: gn,
          Footer: gn
        }, dn, {}, t, {}, e)), Object.assign(e, {
          originalWidth: e.width
        }), e;
      }
      function Ee(e, t, u) {
        u === void 0 && (u = function() {
          return {};
        });
        for (var a = [], f = e, m = 0, C = function() {
          return m++;
        }, S = function() {
          var R = {
            headers: []
          }, I = [], z = f.some(function(H) {
            return H.parent;
          });
          f.forEach(function(H) {
            var G = [].concat(I).reverse()[0], _;
            if (z) {
              if (H.parent)
                _ = d({}, H.parent, {
                  originalId: H.parent.id,
                  id: H.parent.id + "_" + C(),
                  headers: [H]
                }, u(H));
              else {
                var L = H.id + "_placeholder";
                _ = he(d({
                  originalId: L,
                  id: H.id + "_placeholder_" + C(),
                  placeholderOf: H,
                  headers: [H]
                }, u(H)), t);
              }
              G && G.originalId === _.originalId ? G.headers.push(H) : I.push(_);
            }
            R.headers.push(H);
          }), a.push(R), f = I;
        }; f.length; )
          S();
        return a.reverse();
      }
      var ge = /* @__PURE__ */ new Map();
      function Pe(e, t, u) {
        if (!t)
          return e;
        var a = typeof t == "function" ? t : JSON.stringify(t), f = ge.get(a) || function() {
          var C = ue(t);
          return ge.set(a, C), C;
        }(), m;
        try {
          m = f.reduce(function(C, S) {
            return C[S];
          }, e);
        } catch {
        }
        return typeof m < "u" ? m : u;
      }
      function ce() {
        for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++)
          t[u] = arguments[u];
        for (var a = 0; a < t.length; a += 1)
          if (typeof t[a] < "u")
            return t[a];
      }
      function be(e) {
        if (typeof e == "function")
          return e;
      }
      function Me(e, t) {
        var u = [], a = function f(m) {
          m.forEach(function(C) {
            C[t] ? f(C[t]) : u.push(C);
          });
        };
        return a(e), u;
      }
      function Ne(e, t) {
        var u = t.manualExpandedKey, a = t.expanded, f = t.expandSubRows, m = f === void 0 ? !0 : f, C = [], S = function D(R, I) {
          I === void 0 && (I = !0), R.isExpanded = R.original && R.original[u] || a[R.id], R.canExpand = R.subRows && !!R.subRows.length, I && C.push(R), R.subRows && R.subRows.length && R.isExpanded && R.subRows.forEach(function(z) {
            return D(z, m);
          });
        };
        return e.forEach(function(D) {
          return S(D);
        }), C;
      }
      function Se(e, t, u) {
        return be(e) || t[e] || u[e] || u.text;
      }
      function F(e, t, u) {
        return e ? e(t, u) : typeof t > "u";
      }
      function V() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var nn = null;
      function an() {
        if (typeof nn == "boolean")
          return nn;
        var e = !1;
        try {
          var t = {
            get passive() {
              return e = !0, !1;
            }
          };
          window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
        } catch {
          e = !1;
        }
        return nn = e, nn;
      }
      var Ln = /\[/g, Xn = /\]/g;
      function ue(e) {
        return Ae(e).map(function(t) {
          return String(t).replace(".", "_");
        }).join(".").replace(Ln, ".").replace(Xn, "").split(".");
      }
      function Ae(e, t) {
        if (t === void 0 && (t = []), !Array.isArray(e))
          t.push(e);
        else
          for (var u = 0; u < e.length; u += 1)
            Ae(e[u], t);
        return t;
      }
      var Le = function(t) {
        return d({
          role: "table"
        }, t);
      }, Oe = function(t) {
        return d({
          role: "rowgroup"
        }, t);
      }, Fe = function(t, u) {
        var a = u.column;
        return d({
          key: "header_" + a.id,
          colSpan: a.totalVisibleHeaderCount,
          role: "columnheader"
        }, t);
      }, We = function(t, u) {
        var a = u.column;
        return d({
          key: "footer_" + a.id,
          colSpan: a.totalVisibleHeaderCount
        }, t);
      }, xe = function(t, u) {
        var a = u.index;
        return d({
          key: "headerGroup_" + a,
          role: "row"
        }, t);
      }, Jn = function(t, u) {
        var a = u.index;
        return d({
          key: "footerGroup_" + a
        }, t);
      }, _n = function(t, u) {
        var a = u.row;
        return d({
          key: "row_" + a.id,
          role: "row"
        }, t);
      }, Z = function(t, u) {
        var a = u.cell;
        return d({
          key: "cell_" + a.row.id + "_" + a.column.id,
          role: "cell"
        }, t);
      };
      function Pn() {
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
          getTableProps: [Le],
          getTableBodyProps: [Oe],
          getHeaderGroupProps: [xe],
          getFooterGroupProps: [Jn],
          getHeaderProps: [Fe],
          getFooterProps: [We],
          getRowProps: [_n],
          getCellProps: [Z],
          useFinalInstance: []
        };
      }
      b.resetHiddenColumns = "resetHiddenColumns", b.toggleHideColumn = "toggleHideColumn", b.setHiddenColumns = "setHiddenColumns", b.toggleHideAllColumns = "toggleHideAllColumns";
      var ae = function(t) {
        t.getToggleHiddenProps = [de], t.getToggleHideAllColumnsProps = [me], t.stateReducers.push(He), t.useInstanceBeforeDimensions.push(Re), t.headerGroupsDeps.push(function(u, a) {
          var f = a.instance;
          return [].concat(u, [f.state.hiddenColumns]);
        }), t.useInstance.push(je);
      };
      ae.pluginName = "useColumnVisibility";
      var de = function(t, u) {
        var a = u.column;
        return [t, {
          onChange: function(m) {
            a.toggleHidden(!m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: a.isVisible,
          title: "Toggle Column Visible"
        }];
      }, me = function(t, u) {
        var a = u.instance;
        return [t, {
          onChange: function(m) {
            a.toggleHideAllColumns(!m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: !a.allColumnsHidden && !a.state.hiddenColumns.length,
          title: "Toggle All Columns Hidden",
          indeterminate: !a.allColumnsHidden && a.state.hiddenColumns.length
        }];
      };
      function He(e, t, u, a) {
        if (t.type === b.init)
          return d({
            hiddenColumns: []
          }, e);
        if (t.type === b.resetHiddenColumns)
          return d({}, e, {
            hiddenColumns: a.initialState.hiddenColumns || []
          });
        if (t.type === b.toggleHideColumn) {
          var f = typeof t.value < "u" ? t.value : !e.hiddenColumns.includes(t.columnId), m = f ? [].concat(e.hiddenColumns, [t.columnId]) : e.hiddenColumns.filter(function(S) {
            return S !== t.columnId;
          });
          return d({}, e, {
            hiddenColumns: m
          });
        }
        if (t.type === b.setHiddenColumns)
          return d({}, e, {
            hiddenColumns: Vn(t.value, e.hiddenColumns)
          });
        if (t.type === b.toggleHideAllColumns) {
          var C = typeof t.value < "u" ? t.value : !e.hiddenColumns.length;
          return d({}, e, {
            hiddenColumns: C ? a.allColumns.map(function(S) {
              return S.id;
            }) : []
          });
        }
      }
      function Re(e) {
        var t = e.headers, u = e.state.hiddenColumns, a = y.useRef(!1);
        a.current;
        var f = function C(S, D) {
          S.isVisible = D && !u.includes(S.id);
          var R = 0;
          return S.headers && S.headers.length ? S.headers.forEach(function(I) {
            return R += C(I, S.isVisible);
          }) : R = S.isVisible ? 1 : 0, S.totalVisibleHeaderCount = R, R;
        }, m = 0;
        t.forEach(function(C) {
          return m += f(C, !0);
        });
      }
      function je(e) {
        var t = e.columns, u = e.flatHeaders, a = e.dispatch, f = e.allColumns, m = e.getHooks, C = e.state.hiddenColumns, S = e.autoResetHiddenColumns, D = S === void 0 ? !0 : S, R = Dn(e), I = f.length === C.length, z = y.useCallback(function(Q, cn) {
          return a({
            type: b.toggleHideColumn,
            columnId: Q,
            value: cn
          });
        }, [a]), H = y.useCallback(function(Q) {
          return a({
            type: b.setHiddenColumns,
            value: Q
          });
        }, [a]), G = y.useCallback(function(Q) {
          return a({
            type: b.toggleHideAllColumns,
            value: Q
          });
        }, [a]), _ = yn(m().getToggleHideAllColumnsProps, {
          instance: R()
        });
        u.forEach(function(Q) {
          Q.toggleHidden = function(cn) {
            a({
              type: b.toggleHideColumn,
              columnId: Q.id,
              value: cn
            });
          }, Q.getToggleHiddenProps = yn(m().getToggleHiddenProps, {
            instance: R(),
            column: Q
          });
        });
        var L = Dn(D);
        vn(function() {
          L() && a({
            type: b.resetHiddenColumns
          });
        }, [a, t]), Object.assign(e, {
          allColumnsHidden: I,
          toggleHideColumn: z,
          setHiddenColumns: H,
          toggleHideAllColumns: G,
          getToggleHideAllColumnsProps: _
        });
      }
      var Ye = {}, Ue = {}, Ge = function(t, u, a) {
        return t;
      }, Je = function(t, u) {
        return t.subRows || [];
      }, Ve = function(t, u, a) {
        return "" + (a ? [a.id, u].join(".") : u);
      }, qe = function(t) {
        return t;
      };
      function Be(e) {
        var t = e.initialState, u = t === void 0 ? Ye : t, a = e.defaultColumn, f = a === void 0 ? Ue : a, m = e.getSubRows, C = m === void 0 ? Je : m, S = e.getRowId, D = S === void 0 ? Ve : S, R = e.stateReducer, I = R === void 0 ? Ge : R, z = e.useControlledState, H = z === void 0 ? qe : z, G = O(e, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);
        return d({}, G, {
          initialState: u,
          defaultColumn: f,
          getSubRows: C,
          getRowId: D,
          stateReducer: I,
          useControlledState: H
        });
      }
      var at = function(t) {
        for (var u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
          a[f - 1] = arguments[f];
        t = Be(t), a = [ae].concat(a);
        var m = y.useRef({}), C = Dn(m.current);
        Object.assign(C(), d({}, t, {
          plugins: a,
          hooks: Pn()
        })), a.filter(Boolean).forEach(function(pn) {
          pn(C().hooks);
        });
        var S = Dn(C().hooks);
        C().getHooks = S, delete C().hooks, Object.assign(C(), Bn(S().useOptions, Be(t)));
        var D = C(), R = D.data, I = D.columns, z = D.initialState, H = D.defaultColumn, G = D.getSubRows, _ = D.getRowId, L = D.stateReducer, Q = D.useControlledState, cn = Dn(L), fn = y.useCallback(function(pn, Zn) {
          if (!Zn.type)
            throw console.info({
              action: Zn
            }), new Error("Unknown Action 👆");
          return [].concat(S().stateReducers, Array.isArray(cn()) ? cn() : [cn()]).reduce(function(ie, ve) {
            return ve(ie, Zn, pn, C()) || ie;
          }, pn);
        }, [S, cn, C]), Y = y.useReducer(fn, void 0, function() {
          return fn(z, {
            type: b.init
          });
        }), Tn = Y[0], Fn = Y[1], J = Bn([].concat(S().useControlledState, [Q]), Tn, {
          instance: C()
        });
        Object.assign(C(), {
          state: J,
          dispatch: Fn
        });
        var j = y.useMemo(function() {
          return ee(Bn(S().columns, I, {
            instance: C()
          }));
        }, [S, C, I].concat(Bn(S().columnsDeps, [], {
          instance: C()
        })));
        C().columns = j;
        var $ = y.useMemo(function() {
          return Bn(S().allColumns, Te(j), {
            instance: C()
          }).map(De);
        }, [j, S, C].concat(Bn(S().allColumnsDeps, [], {
          instance: C()
        })));
        C().allColumns = $;
        var sn = y.useMemo(function() {
          for (var pn = [], Zn = [], ie = {}, ve = [].concat($); ve.length; ) {
            var Ce = ve.shift();
            Bt({
              data: R,
              rows: pn,
              flatRows: Zn,
              rowsById: ie,
              column: Ce,
              getRowId: _,
              getSubRows: G,
              accessValueHooks: S().accessValue,
              getInstance: C
            });
          }
          return [pn, Zn, ie];
        }, [$, R, _, G, S, C]), kn = sn[0], On = sn[1], jn = sn[2];
        Object.assign(C(), {
          rows: kn,
          initialRows: [].concat(kn),
          flatRows: On,
          rowsById: jn
          // materializedColumns,
        }), Mn(S().useInstanceAfterData, C());
        var on = y.useMemo(function() {
          return Bn(S().visibleColumns, $, {
            instance: C()
          }).map(function(pn) {
            return he(pn, H);
          });
        }, [S, $, C, H].concat(Bn(S().visibleColumnsDeps, [], {
          instance: C()
        })));
        $ = y.useMemo(function() {
          var pn = [].concat(on);
          return $.forEach(function(Zn) {
            pn.find(function(ie) {
              return ie.id === Zn.id;
            }) || pn.push(Zn);
          }), pn;
        }, [$, on]), C().allColumns = $;
        {
          var ye = $.filter(function(pn, Zn) {
            return $.findIndex(function(ie) {
              return ie.id === pn.id;
            }) !== Zn;
          });
          if (ye.length)
            throw console.info($), new Error('Duplicate columns were found with ids: "' + ye.map(function(pn) {
              return pn.id;
            }).join(", ") + '" in the columns array above');
        }
        var Hn = y.useMemo(function() {
          return Bn(S().headerGroups, Ee(on, H), C());
        }, [S, on, H, C].concat(Bn(S().headerGroupsDeps, [], {
          instance: C()
        })));
        C().headerGroups = Hn;
        var Sn = y.useMemo(function() {
          return Hn.length ? Hn[0].headers : [];
        }, [Hn]);
        C().headers = Sn, C().flatHeaders = Hn.reduce(function(pn, Zn) {
          return [].concat(pn, Zn.headers);
        }, []), Mn(S().useInstanceBeforeDimensions, C());
        var bn = on.filter(function(pn) {
          return pn.isVisible;
        }).map(function(pn) {
          return pn.id;
        }).sort().join("_");
        on = y.useMemo(
          function() {
            return on.filter(function(pn) {
              return pn.isVisible;
            });
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [on, bn]
        ), C().visibleColumns = on;
        var Yn = yt(Sn), pe = Yn[0], et = Yn[1], Tt = Yn[2];
        return C().totalColumnsMinWidth = pe, C().totalColumnsWidth = et, C().totalColumnsMaxWidth = Tt, Mn(S().useInstance, C()), [].concat(C().flatHeaders, C().allColumns).forEach(function(pn) {
          pn.render = $n(C(), pn), pn.getHeaderProps = yn(S().getHeaderProps, {
            instance: C(),
            column: pn
          }), pn.getFooterProps = yn(S().getFooterProps, {
            instance: C(),
            column: pn
          });
        }), C().headerGroups = y.useMemo(function() {
          return Hn.filter(function(pn, Zn) {
            return pn.headers = pn.headers.filter(function(ie) {
              var ve = function Ce(Ke) {
                return Ke.filter(function(fe) {
                  return fe.headers ? Ce(fe.headers) : fe.isVisible;
                }).length;
              };
              return ie.headers ? ve(ie.headers) : ie.isVisible;
            }), pn.headers.length ? (pn.getHeaderGroupProps = yn(S().getHeaderGroupProps, {
              instance: C(),
              headerGroup: pn,
              index: Zn
            }), pn.getFooterGroupProps = yn(S().getFooterGroupProps, {
              instance: C(),
              headerGroup: pn,
              index: Zn
            }), !0) : !1;
          });
        }, [Hn, C, S]), C().footerGroups = [].concat(C().headerGroups).reverse(), C().prepareRow = y.useCallback(function(pn) {
          pn.getRowProps = yn(S().getRowProps, {
            instance: C(),
            row: pn
          }), pn.allCells = $.map(function(Zn) {
            var ie = pn.values[Zn.id], ve = {
              column: Zn,
              row: pn,
              value: ie
            };
            return ve.getCellProps = yn(S().getCellProps, {
              instance: C(),
              cell: ve
            }), ve.render = $n(C(), Zn, {
              row: pn,
              cell: ve,
              value: ie
            }), ve;
          }), pn.cells = on.map(function(Zn) {
            return pn.allCells.find(function(ie) {
              return ie.column.id === Zn.id;
            });
          }), Mn(S().prepareRow, pn, {
            instance: C()
          });
        }, [S, C, $, on]), C().getTableProps = yn(S().getTableProps, {
          instance: C()
        }), C().getTableBodyProps = yn(S().getTableBodyProps, {
          instance: C()
        }), Mn(S().useFinalInstance, C()), C();
      };
      function yt(e, t) {
        t === void 0 && (t = 0);
        var u = 0, a = 0, f = 0, m = 0;
        return e.forEach(function(C) {
          var S = C.headers;
          if (C.totalLeft = t, S && S.length) {
            var D = yt(S, t), R = D[0], I = D[1], z = D[2], H = D[3];
            C.totalMinWidth = R, C.totalWidth = I, C.totalMaxWidth = z, C.totalFlexWidth = H;
          } else
            C.totalMinWidth = C.minWidth, C.totalWidth = Math.min(Math.max(C.minWidth, C.width), C.maxWidth), C.totalMaxWidth = C.maxWidth, C.totalFlexWidth = C.canResize ? C.totalWidth : 0;
          C.isVisible && (t += C.totalWidth, u += C.totalMinWidth, a += C.totalWidth, f += C.totalMaxWidth, m += C.totalFlexWidth);
        }), [u, a, f, m];
      }
      function Bt(e) {
        var t = e.data, u = e.rows, a = e.flatRows, f = e.rowsById, m = e.column, C = e.getRowId, S = e.getSubRows, D = e.accessValueHooks, R = e.getInstance, I = function z(H, G, _, L, Q) {
          _ === void 0 && (_ = 0);
          var cn = H, fn = C(H, G, L), Y = f[fn];
          if (Y)
            Y.subRows && Y.originalSubRows.forEach(function(Fn, J) {
              return z(Fn, J, _ + 1, Y);
            });
          else if (Y = {
            id: fn,
            original: cn,
            index: G,
            depth: _,
            cells: [{}]
            // This is a dummy cell
          }, Y.cells.map = V, Y.cells.filter = V, Y.cells.forEach = V, Y.cells[0].getCellProps = V, Y.values = {}, Q.push(Y), a.push(Y), f[fn] = Y, Y.originalSubRows = S(H, G), Y.originalSubRows) {
            var Tn = [];
            Y.originalSubRows.forEach(function(Fn, J) {
              return z(Fn, J, _ + 1, Y, Tn);
            }), Y.subRows = Tn;
          }
          m.accessor && (Y.values[m.id] = m.accessor(H, G, Y, Q, t)), Y.values[m.id] = Bn(D, Y.values[m.id], {
            row: Y,
            column: m,
            instance: R()
          }, !0);
        };
        t.forEach(function(z, H) {
          return I(z, H, 0, void 0, u);
        });
      }
      b.resetExpanded = "resetExpanded", b.toggleRowExpanded = "toggleRowExpanded", b.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var Ct = function(t) {
        t.getToggleAllRowsExpandedProps = [Ft], t.getToggleRowExpandedProps = [Wt], t.stateReducers.push(xt), t.useInstance.push($e), t.prepareRow.push(Gt);
      };
      Ct.pluginName = "useExpanded";
      var Ft = function(t, u) {
        var a = u.instance;
        return [t, {
          onClick: function(m) {
            a.toggleAllRowsExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle All Rows Expanded"
        }];
      }, Wt = function(t, u) {
        var a = u.row;
        return [t, {
          onClick: function() {
            a.toggleRowExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle Row Expanded"
        }];
      };
      function xt(e, t, u, a) {
        if (t.type === b.init)
          return d({
            expanded: {}
          }, e);
        if (t.type === b.resetExpanded)
          return d({}, e, {
            expanded: a.initialState.expanded || {}
          });
        if (t.type === b.toggleAllRowsExpanded) {
          var f = t.value, m = a.rowsById, C = Object.keys(m).length === Object.keys(e.expanded).length, S = typeof f < "u" ? f : !C;
          if (S) {
            var D = {};
            return Object.keys(m).forEach(function(Q) {
              D[Q] = !0;
            }), d({}, e, {
              expanded: D
            });
          }
          return d({}, e, {
            expanded: {}
          });
        }
        if (t.type === b.toggleRowExpanded) {
          var R = t.id, I = t.value, z = e.expanded[R], H = typeof I < "u" ? I : !z;
          if (!z && H) {
            var G;
            return d({}, e, {
              expanded: d({}, e.expanded, (G = {}, G[R] = !0, G))
            });
          } else if (z && !H) {
            var _ = e.expanded;
            _[R];
            var L = O(_, [R].map(w));
            return d({}, e, {
              expanded: L
            });
          } else
            return e;
        }
      }
      function $e(e) {
        var t = e.data, u = e.rows, a = e.rowsById, f = e.manualExpandedKey, m = f === void 0 ? "expanded" : f, C = e.paginateExpandedRows, S = C === void 0 ? !0 : C, D = e.expandSubRows, R = D === void 0 ? !0 : D, I = e.autoResetExpanded, z = I === void 0 ? !0 : I, H = e.getHooks, G = e.plugins, _ = e.state.expanded, L = e.dispatch;
        Un(G, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var Q = Dn(z), cn = !!(Object.keys(a).length && Object.keys(_).length);
        cn && Object.keys(a).some(function($) {
          return !_[$];
        }) && (cn = !1), vn(function() {
          Q() && L({
            type: b.resetExpanded
          });
        }, [L, t]);
        var fn = y.useCallback(function($, sn) {
          L({
            type: b.toggleRowExpanded,
            id: $,
            value: sn
          });
        }, [L]), Y = y.useCallback(function($) {
          return L({
            type: b.toggleAllRowsExpanded,
            value: $
          });
        }, [L]), Tn = y.useMemo(function() {
          return S ? Ne(u, {
            manualExpandedKey: m,
            expanded: _,
            expandSubRows: R
          }) : u;
        }, [S, u, m, _, R]), Fn = y.useMemo(function() {
          return Oo(_);
        }, [_]), J = Dn(e), j = yn(H().getToggleAllRowsExpandedProps, {
          instance: J()
        });
        Object.assign(e, {
          preExpandedRows: u,
          expandedRows: Tn,
          rows: Tn,
          expandedDepth: Fn,
          isAllRowsExpanded: cn,
          toggleRowExpanded: fn,
          toggleAllRowsExpanded: Y,
          getToggleAllRowsExpandedProps: j
        });
      }
      function Gt(e, t) {
        var u = t.instance.getHooks, a = t.instance;
        e.toggleRowExpanded = function(f) {
          return a.toggleRowExpanded(e.id, f);
        }, e.getToggleRowExpandedProps = yn(u().getToggleRowExpandedProps, {
          instance: a,
          row: e
        });
      }
      function Oo(e) {
        var t = 0;
        return Object.keys(e).forEach(function(u) {
          var a = u.split(".");
          t = Math.max(t, a.length);
        }), t;
      }
      var Vt = function(t, u, a) {
        return t = t.filter(function(f) {
          return u.some(function(m) {
            var C = f.values[m];
            return String(C).toLowerCase().includes(String(a).toLowerCase());
          });
        }), t;
      };
      Vt.autoRemove = function(e) {
        return !e;
      };
      var pt = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var C = f.values[m];
            return C !== void 0 ? String(C).toLowerCase() === String(a).toLowerCase() : !0;
          });
        });
      };
      pt.autoRemove = function(e) {
        return !e;
      };
      var qt = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var C = f.values[m];
            return C !== void 0 ? String(C) === String(a) : !0;
          });
        });
      };
      qt.autoRemove = function(e) {
        return !e;
      };
      var Kt = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var C = f.values[m];
            return C.includes(a);
          });
        });
      };
      Kt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var ft = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var C = f.values[m];
            return C && C.length && a.every(function(S) {
              return C.includes(S);
            });
          });
        });
      };
      ft.autoRemove = function(e) {
        return !e || !e.length;
      };
      var gt = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var C = f.values[m];
            return C && C.length && a.some(function(S) {
              return C.includes(S);
            });
          });
        });
      };
      gt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var zt = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var C = f.values[m];
            return a.includes(C);
          });
        });
      };
      zt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var _t = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var C = f.values[m];
            return C === a;
          });
        });
      };
      _t.autoRemove = function(e) {
        return typeof e > "u";
      };
      var mt = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var C = f.values[m];
            return C == a;
          });
        });
      };
      mt.autoRemove = function(e) {
        return e == null;
      };
      var Xt = function(t, u, a) {
        var f = a || [], m = f[0], C = f[1];
        if (m = typeof m == "number" ? m : -1 / 0, C = typeof C == "number" ? C : 1 / 0, m > C) {
          var S = m;
          m = C, C = S;
        }
        return t.filter(function(D) {
          return u.some(function(R) {
            var I = D.values[R];
            return I >= m && I <= C;
          });
        });
      };
      Xt.autoRemove = function(e) {
        return !e || typeof e[0] != "number" && typeof e[1] != "number";
      };
      var Ze = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        text: Vt,
        exactText: pt,
        exactTextCase: qt,
        includes: Kt,
        includesAll: ft,
        includesSome: gt,
        includesValue: zt,
        exact: _t,
        equals: mt,
        between: Xt
      });
      b.resetFilters = "resetFilters", b.setFilter = "setFilter", b.setAllFilters = "setAllFilters";
      var jt = function(t) {
        t.stateReducers.push(Ho), t.useInstance.push(Bo);
      };
      jt.pluginName = "useFilters";
      function Ho(e, t, u, a) {
        if (t.type === b.init)
          return d({
            filters: []
          }, e);
        if (t.type === b.resetFilters)
          return d({}, e, {
            filters: a.initialState.filters || []
          });
        if (t.type === b.setFilter) {
          var f = t.columnId, m = t.filterValue, C = a.allColumns, S = a.filterTypes, D = C.find(function(L) {
            return L.id === f;
          });
          if (!D)
            throw new Error("React-Table: Could not find a column with id: " + f);
          var R = Se(D.filter, S || {}, Ze), I = e.filters.find(function(L) {
            return L.id === f;
          }), z = Vn(m, I && I.value);
          return F(R.autoRemove, z, D) ? d({}, e, {
            filters: e.filters.filter(function(L) {
              return L.id !== f;
            })
          }) : I ? d({}, e, {
            filters: e.filters.map(function(L) {
              return L.id === f ? {
                id: f,
                value: z
              } : L;
            })
          }) : d({}, e, {
            filters: [].concat(e.filters, [{
              id: f,
              value: z
            }])
          });
        }
        if (t.type === b.setAllFilters) {
          var H = t.filters, G = a.allColumns, _ = a.filterTypes;
          return d({}, e, {
            // Filter out undefined values
            filters: Vn(H, e.filters).filter(function(L) {
              var Q = G.find(function(fn) {
                return fn.id === L.id;
              }), cn = Se(Q.filter, _ || {}, Ze);
              return !F(cn.autoRemove, L.value, Q);
            })
          });
        }
      }
      function Bo(e) {
        var t = e.data, u = e.rows, a = e.flatRows, f = e.rowsById, m = e.allColumns, C = e.filterTypes, S = e.manualFilters, D = e.defaultCanFilter, R = D === void 0 ? !1 : D, I = e.disableFilters, z = e.state.filters, H = e.dispatch, G = e.autoResetFilters, _ = G === void 0 ? !0 : G, L = y.useCallback(function(J, j) {
          H({
            type: b.setFilter,
            columnId: J,
            filterValue: j
          });
        }, [H]), Q = y.useCallback(function(J) {
          H({
            type: b.setAllFilters,
            filters: J
          });
        }, [H]);
        m.forEach(function(J) {
          var j = J.id, $ = J.accessor, sn = J.defaultCanFilter, kn = J.disableFilters;
          J.canFilter = $ ? ce(kn === !0 ? !1 : void 0, I === !0 ? !1 : void 0, !0) : ce(sn, R, !1), J.setFilter = function(jn) {
            return L(J.id, jn);
          };
          var On = z.find(function(jn) {
            return jn.id === j;
          });
          J.filterValue = On && On.value;
        });
        var cn = y.useMemo(function() {
          if (S || !z.length)
            return [u, a, f];
          var J = [], j = {}, $ = function sn(kn, On) {
            On === void 0 && (On = 0);
            var jn = kn;
            return jn = z.reduce(function(on, ye) {
              var Hn = ye.id, Sn = ye.value, bn = m.find(function(pe) {
                return pe.id === Hn;
              });
              if (!bn)
                return on;
              On === 0 && (bn.preFilteredRows = on);
              var Yn = Se(bn.filter, C || {}, Ze);
              return Yn ? (bn.filteredRows = Yn(on, [Hn], Sn), bn.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + bn.id + "."), on);
            }, kn), jn.forEach(function(on) {
              J.push(on), j[on.id] = on, on.subRows && (on.subRows = on.subRows && on.subRows.length > 0 ? sn(on.subRows, On + 1) : on.subRows);
            }), jn;
          };
          return [$(u), J, j];
        }, [S, z, u, a, f, m, C]), fn = cn[0], Y = cn[1], Tn = cn[2];
        y.useMemo(function() {
          var J = m.filter(function(j) {
            return !z.find(function($) {
              return $.id === j.id;
            });
          });
          J.forEach(function(j) {
            j.preFilteredRows = fn, j.filteredRows = fn;
          });
        }, [fn, z, m]);
        var Fn = Dn(_);
        vn(function() {
          Fn() && H({
            type: b.resetFilters
          });
        }, [H, S ? null : t]), Object.assign(e, {
          preFilteredRows: u,
          preFilteredFlatRows: a,
          preFilteredRowsById: f,
          filteredRows: fn,
          filteredFlatRows: Y,
          filteredRowsById: Tn,
          rows: fn,
          flatRows: Y,
          rowsById: Tn,
          setFilter: L,
          setAllFilters: Q
        });
      }
      b.resetGlobalFilter = "resetGlobalFilter", b.setGlobalFilter = "setGlobalFilter";
      var Yt = function(t) {
        t.stateReducers.push(Ut), t.useInstance.push(Jt);
      };
      Yt.pluginName = "useGlobalFilter";
      function Ut(e, t, u, a) {
        if (t.type === b.resetGlobalFilter)
          return d({}, e, {
            globalFilter: a.initialState.globalFilter || void 0
          });
        if (t.type === b.setGlobalFilter) {
          var f = t.filterValue, m = a.userFilterTypes, C = Se(a.globalFilter, m || {}, Ze), S = Vn(f, e.globalFilter);
          if (F(C.autoRemove, S)) {
            e.globalFilter;
            var D = O(e, ["globalFilter"]);
            return D;
          }
          return d({}, e, {
            globalFilter: S
          });
        }
      }
      function Jt(e) {
        var t = e.data, u = e.rows, a = e.flatRows, f = e.rowsById, m = e.allColumns, C = e.filterTypes, S = e.globalFilter, D = e.manualGlobalFilter, R = e.state.globalFilter, I = e.dispatch, z = e.autoResetGlobalFilter, H = z === void 0 ? !0 : z, G = e.disableGlobalFilter, _ = y.useCallback(function(Tn) {
          I({
            type: b.setGlobalFilter,
            filterValue: Tn
          });
        }, [I]), L = y.useMemo(function() {
          if (D || typeof R > "u")
            return [u, a, f];
          var Tn = [], Fn = {}, J = Se(S, C || {}, Ze);
          if (!J)
            return console.warn("Could not find a valid 'globalFilter' option."), u;
          m.forEach(function(sn) {
            var kn = sn.disableGlobalFilter;
            sn.canFilter = ce(kn === !0 ? !1 : void 0, G === !0 ? !1 : void 0, !0);
          });
          var j = m.filter(function(sn) {
            return sn.canFilter === !0;
          }), $ = function sn(kn) {
            return kn = J(kn, j.map(function(On) {
              return On.id;
            }), R), kn.forEach(function(On) {
              Tn.push(On), Fn[On.id] = On, On.subRows = On.subRows && On.subRows.length ? sn(On.subRows) : On.subRows;
            }), kn;
          };
          return [$(u), Tn, Fn];
        }, [D, R, S, C, m, u, a, f, G]), Q = L[0], cn = L[1], fn = L[2], Y = Dn(H);
        vn(function() {
          Y() && I({
            type: b.resetGlobalFilter
          });
        }, [I, D ? null : t]), Object.assign(e, {
          preGlobalFilteredRows: u,
          preGlobalFilteredFlatRows: a,
          preGlobalFilteredRowsById: f,
          globalFilteredRows: Q,
          globalFilteredFlatRows: cn,
          globalFilteredRowsById: fn,
          rows: Q,
          flatRows: cn,
          rowsById: fn,
          setGlobalFilter: _,
          disableGlobalFilter: G
        });
      }
      function rt(e, t) {
        return t.reduce(function(u, a) {
          return u + (typeof a == "number" ? a : 0);
        }, 0);
      }
      function Qe(e) {
        var t = e[0] || 0;
        return e.forEach(function(u) {
          typeof u == "number" && (t = Math.min(t, u));
        }), t;
      }
      function $t(e) {
        var t = e[0] || 0;
        return e.forEach(function(u) {
          typeof u == "number" && (t = Math.max(t, u));
        }), t;
      }
      function Fo(e) {
        var t = e[0] || 0, u = e[0] || 0;
        return e.forEach(function(a) {
          typeof a == "number" && (t = Math.min(t, a), u = Math.max(u, a));
        }), t + ".." + u;
      }
      function Zt(e) {
        return rt(null, e) / e.length;
      }
      function Wo(e) {
        if (!e.length)
          return null;
        var t = Math.floor(e.length / 2), u = [].concat(e).sort(function(a, f) {
          return a - f;
        });
        return e.length % 2 !== 0 ? u[t] : (u[t - 1] + u[t]) / 2;
      }
      function xo(e) {
        return Array.from(new Set(e).values());
      }
      function Go(e) {
        return new Set(e).size;
      }
      function Qt(e) {
        return e.length;
      }
      var vt = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        sum: rt,
        min: Qe,
        max: $t,
        minMax: Fo,
        average: Zt,
        median: Wo,
        unique: xo,
        uniqueCount: Go,
        count: Qt
      }), Vo = [], qo = {};
      b.resetGroupBy = "resetGroupBy", b.setGroupBy = "setGroupBy", b.toggleGroupBy = "toggleGroupBy";
      var ht = function(t) {
        t.getGroupByToggleProps = [no], t.stateReducers.push(Ko), t.visibleColumnsDeps.push(function(u, a) {
          var f = a.instance;
          return [].concat(u, [f.state.groupBy]);
        }), t.visibleColumns.push(zo), t.useInstance.push(Xo), t.prepareRow.push(jo);
      };
      ht.pluginName = "useGroupBy";
      var no = function(t, u) {
        var a = u.header;
        return [t, {
          onClick: a.canGroupBy ? function(f) {
            f.persist(), a.toggleGroupBy();
          } : void 0,
          style: {
            cursor: a.canGroupBy ? "pointer" : void 0
          },
          title: "Toggle GroupBy"
        }];
      };
      function Ko(e, t, u, a) {
        if (t.type === b.init)
          return d({
            groupBy: []
          }, e);
        if (t.type === b.resetGroupBy)
          return d({}, e, {
            groupBy: a.initialState.groupBy || []
          });
        if (t.type === b.setGroupBy) {
          var f = t.value;
          return d({}, e, {
            groupBy: f
          });
        }
        if (t.type === b.toggleGroupBy) {
          var m = t.columnId, C = t.value, S = typeof C < "u" ? C : !e.groupBy.includes(m);
          return S ? d({}, e, {
            groupBy: [].concat(e.groupBy, [m])
          }) : d({}, e, {
            groupBy: e.groupBy.filter(function(D) {
              return D !== m;
            })
          });
        }
      }
      function zo(e, t) {
        var u = t.instance.state.groupBy, a = u.map(function(m) {
          return e.find(function(C) {
            return C.id === m;
          });
        }).filter(Boolean), f = e.filter(function(m) {
          return !u.includes(m.id);
        });
        return e = [].concat(a, f), e.forEach(function(m) {
          m.isGrouped = u.includes(m.id), m.groupedIndex = u.indexOf(m.id);
        }), e;
      }
      var _o = {};
      function Xo(e) {
        var t = e.data, u = e.rows, a = e.flatRows, f = e.rowsById, m = e.allColumns, C = e.flatHeaders, S = e.groupByFn, D = S === void 0 ? eo : S, R = e.manualGroupBy, I = e.aggregations, z = I === void 0 ? _o : I, H = e.plugins, G = e.state.groupBy, _ = e.dispatch, L = e.autoResetGroupBy, Q = L === void 0 ? !0 : L, cn = e.disableGroupBy, fn = e.defaultCanGroupBy, Y = e.getHooks;
        Un(H, ["useColumnOrder", "useFilters"], "useGroupBy");
        var Tn = Dn(e);
        m.forEach(function(Sn) {
          var bn = Sn.accessor, Yn = Sn.defaultGroupBy, pe = Sn.disableGroupBy;
          Sn.canGroupBy = bn ? ce(Sn.canGroupBy, pe === !0 ? !1 : void 0, cn === !0 ? !1 : void 0, !0) : ce(Sn.canGroupBy, Yn, fn, !1), Sn.canGroupBy && (Sn.toggleGroupBy = function() {
            return e.toggleGroupBy(Sn.id);
          }), Sn.Aggregated = Sn.Aggregated || Sn.Cell;
        });
        var Fn = y.useCallback(function(Sn, bn) {
          _({
            type: b.toggleGroupBy,
            columnId: Sn,
            value: bn
          });
        }, [_]), J = y.useCallback(function(Sn) {
          _({
            type: b.setGroupBy,
            value: Sn
          });
        }, [_]);
        C.forEach(function(Sn) {
          Sn.getGroupByToggleProps = yn(Y().getGroupByToggleProps, {
            instance: Tn(),
            header: Sn
          });
        });
        var j = y.useMemo(function() {
          if (R || !G.length)
            return [u, a, f, Vo, qo, a, f];
          var Sn = G.filter(function(Ce) {
            return m.find(function(Ke) {
              return Ke.id === Ce;
            });
          }), bn = function(Ke, fe, wo) {
            var ze = {};
            return m.forEach(function(re) {
              if (Sn.includes(re.id)) {
                ze[re.id] = fe[0] ? fe[0].values[re.id] : null;
                return;
              }
              var bo = typeof re.aggregate == "function" ? re.aggregate : z[re.aggregate] || vt[re.aggregate];
              if (bo) {
                var it = fe.map(function(tt) {
                  return tt.values[re.id];
                }), da = Ke.map(function(tt) {
                  var _e = tt.values[re.id];
                  if (!wo && re.aggregateValue) {
                    var Xe = typeof re.aggregateValue == "function" ? re.aggregateValue : z[re.aggregateValue] || vt[re.aggregateValue];
                    if (!Xe)
                      throw console.info({
                        column: re
                      }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                    _e = Xe(_e, tt, re);
                  }
                  return _e;
                });
                ze[re.id] = bo(da, it);
              } else {
                if (re.aggregate)
                  throw console.info({
                    column: re
                  }), new Error("React Table: Invalid column.aggregate option for column listed above");
                ze[re.id] = null;
              }
            }), ze;
          }, Yn = [], pe = {}, et = [], Tt = {}, pn = [], Zn = {}, ie = function Ce(Ke, fe, wo) {
            if (fe === void 0 && (fe = 0), fe === Sn.length)
              return Ke.map(function(it) {
                return d({}, it, {
                  depth: fe
                });
              });
            var ze = Sn[fe], re = D(Ke, ze), bo = Object.entries(re).map(function(it, da) {
              var tt = it[0], _e = it[1], Xe = ze + ":" + tt;
              Xe = wo ? wo + ">" + Xe : Xe;
              var Ra = Ce(_e, fe + 1, Xe), Ta = fe ? Me(_e, "leafRows") : _e, Sr = bn(Ta, _e, fe), wr = {
                id: Xe,
                isGrouped: !0,
                groupByID: ze,
                groupByVal: tt,
                values: Sr,
                subRows: Ra,
                leafRows: Ta,
                depth: fe,
                index: da
              };
              return Ra.forEach(function(Ie) {
                Yn.push(Ie), pe[Ie.id] = Ie, Ie.isGrouped ? (et.push(Ie), Tt[Ie.id] = Ie) : (pn.push(Ie), Zn[Ie.id] = Ie);
              }), wr;
            });
            return bo;
          }, ve = ie(u);
          return ve.forEach(function(Ce) {
            Yn.push(Ce), pe[Ce.id] = Ce, Ce.isGrouped ? (et.push(Ce), Tt[Ce.id] = Ce) : (pn.push(Ce), Zn[Ce.id] = Ce);
          }), [ve, Yn, pe, et, Tt, pn, Zn];
        }, [R, G, u, a, f, m, z, D]), $ = j[0], sn = j[1], kn = j[2], On = j[3], jn = j[4], on = j[5], ye = j[6], Hn = Dn(Q);
        vn(function() {
          Hn() && _({
            type: b.resetGroupBy
          });
        }, [_, R ? null : t]), Object.assign(e, {
          preGroupedRows: u,
          preGroupedFlatRow: a,
          preGroupedRowsById: f,
          groupedRows: $,
          groupedFlatRows: sn,
          groupedRowsById: kn,
          onlyGroupedFlatRows: On,
          onlyGroupedRowsById: jn,
          nonGroupedFlatRows: on,
          nonGroupedRowsById: ye,
          rows: $,
          flatRows: sn,
          rowsById: kn,
          toggleGroupBy: Fn,
          setGroupBy: J
        });
      }
      function jo(e) {
        e.allCells.forEach(function(t) {
          var u;
          t.isGrouped = t.column.isGrouped && t.column.id === e.groupByID, t.isPlaceholder = !t.isGrouped && t.column.isGrouped, t.isAggregated = !t.isGrouped && !t.isPlaceholder && ((u = e.subRows) == null ? void 0 : u.length);
        });
      }
      function eo(e, t) {
        return e.reduce(function(u, a, f) {
          var m = "" + a.values[t];
          return u[m] = Array.isArray(u[m]) ? u[m] : [], u[m].push(a), u;
        }, {});
      }
      var to = /([0-9]+)/gm, Yo = function(t, u, a) {
        var f = nt(t, u, a), m = f[0], C = f[1];
        for (m = ao(m), C = ao(C), m = m.split(to).filter(Boolean), C = C.split(to).filter(Boolean); m.length && C.length; ) {
          var S = m.shift(), D = C.shift(), R = parseInt(S, 10), I = parseInt(D, 10), z = [R, I].sort();
          if (isNaN(z[0])) {
            if (S > D)
              return 1;
            if (D > S)
              return -1;
            continue;
          }
          if (isNaN(z[1]))
            return isNaN(R) ? -1 : 1;
          if (R > I)
            return 1;
          if (I > R)
            return -1;
        }
        return m.length - C.length;
      };
      function Uo(e, t, u) {
        var a = nt(e, t, u), f = a[0], m = a[1];
        return f = f.getTime(), m = m.getTime(), St(f, m);
      }
      function Jo(e, t, u) {
        var a = nt(e, t, u), f = a[0], m = a[1];
        return St(f, m);
      }
      function $o(e, t, u) {
        var a = nt(e, t, u), f = a[0], m = a[1];
        for (f = f.split("").filter(Boolean), m = m.split("").filter(Boolean); f.length && m.length; ) {
          var C = f.shift(), S = m.shift(), D = C.toLowerCase(), R = S.toLowerCase();
          if (D > R)
            return 1;
          if (R > D)
            return -1;
          if (C > S)
            return 1;
          if (S > C)
            return -1;
        }
        return f.length - m.length;
      }
      function oo(e, t, u) {
        var a = nt(e, t, u), f = a[0], m = a[1], C = /[^0-9.]/gi;
        return f = Number(String(f).replace(C, "")), m = Number(String(m).replace(C, "")), St(f, m);
      }
      function St(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      function nt(e, t, u) {
        return [e.values[u], t.values[u]];
      }
      function ao(e) {
        return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
      }
      var Zo = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        alphanumeric: Yo,
        datetime: Uo,
        basic: Jo,
        string: $o,
        number: oo
      });
      b.resetSortBy = "resetSortBy", b.setSortBy = "setSortBy", b.toggleSortBy = "toggleSortBy", b.clearSortBy = "clearSortBy", dn.sortType = "alphanumeric", dn.sortDescFirst = !1;
      var ro = function(t) {
        t.getSortByToggleProps = [Qo], t.stateReducers.push(uo), t.useInstance.push(io);
      };
      ro.pluginName = "useSortBy";
      var Qo = function(t, u) {
        var a = u.instance, f = u.column, m = a.isMultiSortEvent, C = m === void 0 ? function(S) {
          return S.shiftKey;
        } : m;
        return [t, {
          onClick: f.canSort ? function(S) {
            S.persist(), f.toggleSortBy(void 0, !a.disableMultiSort && C(S));
          } : void 0,
          style: {
            cursor: f.canSort ? "pointer" : void 0
          },
          title: f.canSort ? "Toggle SortBy" : void 0
        }];
      };
      function uo(e, t, u, a) {
        if (t.type === b.init)
          return d({
            sortBy: []
          }, e);
        if (t.type === b.resetSortBy)
          return d({}, e, {
            sortBy: a.initialState.sortBy || []
          });
        if (t.type === b.clearSortBy) {
          var f = e.sortBy, m = f.filter(function($) {
            return $.id !== t.columnId;
          });
          return d({}, e, {
            sortBy: m
          });
        }
        if (t.type === b.setSortBy) {
          var C = t.sortBy;
          return d({}, e, {
            sortBy: C
          });
        }
        if (t.type === b.toggleSortBy) {
          var S = t.columnId, D = t.desc, R = t.multi, I = a.allColumns, z = a.disableMultiSort, H = a.disableSortRemove, G = a.disableMultiRemove, _ = a.maxMultiSortColCount, L = _ === void 0 ? Number.MAX_SAFE_INTEGER : _, Q = e.sortBy, cn = I.find(function($) {
            return $.id === S;
          }), fn = cn.sortDescFirst, Y = Q.find(function($) {
            return $.id === S;
          }), Tn = Q.findIndex(function($) {
            return $.id === S;
          }), Fn = typeof D < "u" && D !== null, J = [], j;
          return !z && R ? Y ? j = "toggle" : j = "add" : Tn !== Q.length - 1 || Q.length !== 1 ? j = "replace" : Y ? j = "toggle" : j = "replace", j === "toggle" && // Must be toggling
          !H && // If disableSortRemove, disable in general
          !Fn && // Must not be setting desc
          (!R || !G) && // If multi, don't allow if disableMultiRemove
          (Y && // Finally, detect if it should indeed be removed
          Y.desc && !fn || !Y.desc && fn) && (j = "remove"), j === "replace" ? J = [{
            id: S,
            desc: Fn ? D : fn
          }] : j === "add" ? (J = [].concat(Q, [{
            id: S,
            desc: Fn ? D : fn
          }]), J.splice(0, J.length - L)) : j === "toggle" ? J = Q.map(function($) {
            return $.id === S ? d({}, $, {
              desc: Fn ? D : !Y.desc
            }) : $;
          }) : j === "remove" && (J = Q.filter(function($) {
            return $.id !== S;
          })), d({}, e, {
            sortBy: J
          });
        }
      }
      function io(e) {
        var t = e.data, u = e.rows, a = e.flatRows, f = e.allColumns, m = e.orderByFn, C = m === void 0 ? wt : m, S = e.sortTypes, D = e.manualSortBy, R = e.defaultCanSort, I = e.disableSortBy, z = e.flatHeaders, H = e.state.sortBy, G = e.dispatch, _ = e.plugins, L = e.getHooks, Q = e.autoResetSortBy, cn = Q === void 0 ? !0 : Q;
        Un(_, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var fn = y.useCallback(function(sn) {
          G({
            type: b.setSortBy,
            sortBy: sn
          });
        }, [G]), Y = y.useCallback(function(sn, kn, On) {
          G({
            type: b.toggleSortBy,
            columnId: sn,
            desc: kn,
            multi: On
          });
        }, [G]), Tn = Dn(e);
        z.forEach(function(sn) {
          var kn = sn.accessor, On = sn.canSort, jn = sn.disableSortBy, on = sn.id, ye = kn ? ce(jn === !0 ? !1 : void 0, I === !0 ? !1 : void 0, !0) : ce(R, On, !1);
          sn.canSort = ye, sn.canSort && (sn.toggleSortBy = function(Sn, bn) {
            return Y(sn.id, Sn, bn);
          }, sn.clearSortBy = function() {
            G({
              type: b.clearSortBy,
              columnId: sn.id
            });
          }), sn.getSortByToggleProps = yn(L().getSortByToggleProps, {
            instance: Tn(),
            column: sn
          });
          var Hn = H.find(function(Sn) {
            return Sn.id === on;
          });
          sn.isSorted = !!Hn, sn.sortedIndex = H.findIndex(function(Sn) {
            return Sn.id === on;
          }), sn.isSortedDesc = sn.isSorted ? Hn.desc : void 0;
        });
        var Fn = y.useMemo(function() {
          if (D || !H.length)
            return [u, a];
          var sn = [], kn = H.filter(function(jn) {
            return f.find(function(on) {
              return on.id === jn.id;
            });
          }), On = function jn(on) {
            var ye = C(
              on,
              kn.map(function(Hn) {
                var Sn = f.find(function(pe) {
                  return pe.id === Hn.id;
                });
                if (!Sn)
                  throw new Error("React-Table: Could not find a column with id: " + Hn.id + " while sorting");
                var bn = Sn.sortType, Yn = be(bn) || (S || {})[bn] || Zo[bn];
                if (!Yn)
                  throw new Error("React-Table: Could not find a valid sortType of '" + bn + "' for column '" + Hn.id + "'.");
                return function(pe, et) {
                  return Yn(pe, et, Hn.id, Hn.desc);
                };
              }),
              // Map the directions
              kn.map(function(Hn) {
                var Sn = f.find(function(bn) {
                  return bn.id === Hn.id;
                });
                return Sn && Sn.sortInverted ? Hn.desc : !Hn.desc;
              })
            );
            return ye.forEach(function(Hn) {
              sn.push(Hn), !(!Hn.subRows || Hn.subRows.length === 0) && (Hn.subRows = jn(Hn.subRows));
            }), ye;
          };
          return [On(u), sn];
        }, [D, H, u, a, f, C, S]), J = Fn[0], j = Fn[1], $ = Dn(cn);
        vn(function() {
          $() && G({
            type: b.resetSortBy
          });
        }, [D ? null : t]), Object.assign(e, {
          preSortedRows: u,
          preSortedFlatRows: a,
          sortedRows: J,
          sortedFlatRows: j,
          rows: J,
          flatRows: j,
          setSortBy: fn,
          toggleSortBy: Y
        });
      }
      function wt(e, t, u) {
        return [].concat(e).sort(function(a, f) {
          for (var m = 0; m < t.length; m += 1) {
            var C = t[m], S = u[m] === !1 || u[m] === "desc", D = C(a, f);
            if (D !== 0)
              return S ? -D : D;
          }
          return u[0] ? a.index - f.index : f.index - a.index;
        });
      }
      var na = "usePagination";
      b.resetPage = "resetPage", b.gotoPage = "gotoPage", b.setPageSize = "setPageSize";
      var lo = function(t) {
        t.stateReducers.push(ea), t.useInstance.push(so);
      };
      lo.pluginName = na;
      function ea(e, t, u, a) {
        if (t.type === b.init)
          return d({
            pageSize: 10,
            pageIndex: 0
          }, e);
        if (t.type === b.resetPage)
          return d({}, e, {
            pageIndex: a.initialState.pageIndex || 0
          });
        if (t.type === b.gotoPage) {
          var f = a.pageCount, m = a.page, C = Vn(t.pageIndex, e.pageIndex), S = !1;
          return C > e.pageIndex ? S = f === -1 ? m.length >= e.pageSize : C < f : C < e.pageIndex && (S = C > -1), S ? d({}, e, {
            pageIndex: C
          }) : e;
        }
        if (t.type === b.setPageSize) {
          var D = t.pageSize, R = e.pageSize * e.pageIndex, I = Math.floor(R / D);
          return d({}, e, {
            pageIndex: I,
            pageSize: D
          });
        }
      }
      function so(e) {
        var t = e.rows, u = e.autoResetPage, a = u === void 0 ? !0 : u, f = e.manualExpandedKey, m = f === void 0 ? "expanded" : f, C = e.plugins, S = e.pageCount, D = e.paginateExpandedRows, R = D === void 0 ? !0 : D, I = e.expandSubRows, z = I === void 0 ? !0 : I, H = e.state, G = H.pageSize, _ = H.pageIndex, L = H.expanded, Q = H.globalFilter, cn = H.filters, fn = H.groupBy, Y = H.sortBy, Tn = e.dispatch, Fn = e.data, J = e.manualPagination;
        Un(C, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var j = Dn(a);
        vn(function() {
          j() && Tn({
            type: b.resetPage
          });
        }, [Tn, J ? null : Fn, Q, cn, fn, Y]);
        var $ = J ? S : Math.ceil(t.length / G), sn = y.useMemo(function() {
          return $ > 0 ? [].concat(new Array($)).fill(null).map(function(bn, Yn) {
            return Yn;
          }) : [];
        }, [$]), kn = y.useMemo(function() {
          var bn;
          if (J)
            bn = t;
          else {
            var Yn = G * _, pe = Yn + G;
            bn = t.slice(Yn, pe);
          }
          return R ? bn : Ne(bn, {
            manualExpandedKey: m,
            expanded: L,
            expandSubRows: z
          });
        }, [z, L, m, J, _, G, R, t]), On = _ > 0, jn = $ === -1 ? kn.length >= G : _ < $ - 1, on = y.useCallback(function(bn) {
          Tn({
            type: b.gotoPage,
            pageIndex: bn
          });
        }, [Tn]), ye = y.useCallback(function() {
          return on(function(bn) {
            return bn - 1;
          });
        }, [on]), Hn = y.useCallback(function() {
          return on(function(bn) {
            return bn + 1;
          });
        }, [on]), Sn = y.useCallback(function(bn) {
          Tn({
            type: b.setPageSize,
            pageSize: bn
          });
        }, [Tn]);
        Object.assign(e, {
          pageOptions: sn,
          pageCount: $,
          page: kn,
          canPreviousPage: On,
          canNextPage: jn,
          gotoPage: on,
          previousPage: ye,
          nextPage: Hn,
          setPageSize: Sn
        });
      }
      b.resetPivot = "resetPivot", b.togglePivot = "togglePivot";
      var co = function(t) {
        t.getPivotToggleProps = [ta], t.stateReducers.push(Co), t.useInstanceAfterData.push(oa), t.allColumns.push(aa), t.accessValue.push(ra), t.materializedColumns.push(ua), t.materializedColumnsDeps.push(bt), t.visibleColumns.push(po), t.visibleColumnsDeps.push(ut), t.useInstance.push(Mt), t.prepareRow.push(At);
      };
      co.pluginName = "usePivotColumns";
      var yo = [], ta = function(t, u) {
        var a = u.header;
        return [t, {
          onClick: a.canPivot ? function(f) {
            f.persist(), a.togglePivot();
          } : void 0,
          style: {
            cursor: a.canPivot ? "pointer" : void 0
          },
          title: "Toggle Pivot"
        }];
      };
      function Co(e, t, u, a) {
        if (t.type === b.init)
          return d({
            pivotColumns: yo
          }, e);
        if (t.type === b.resetPivot)
          return d({}, e, {
            pivotColumns: a.initialState.pivotColumns || yo
          });
        if (t.type === b.togglePivot) {
          var f = t.columnId, m = t.value, C = typeof m < "u" ? m : !e.pivotColumns.includes(f);
          return C ? d({}, e, {
            pivotColumns: [].concat(e.pivotColumns, [f])
          }) : d({}, e, {
            pivotColumns: e.pivotColumns.filter(function(S) {
              return S !== f;
            })
          });
        }
      }
      function oa(e) {
        e.allColumns.forEach(function(t) {
          t.isPivotSource = e.state.pivotColumns.includes(t.id);
        });
      }
      function aa(e, t) {
        var u = t.instance;
        return e.forEach(function(a) {
          a.isPivotSource = u.state.pivotColumns.includes(a.id), a.uniqueValues = /* @__PURE__ */ new Set();
        }), e;
      }
      function ra(e, t) {
        var u = t.column;
        return u.uniqueValues && typeof e < "u" && u.uniqueValues.add(e), e;
      }
      function ua(e, t) {
        var u = t.instance, a = u.allColumns, f = u.state;
        if (!f.pivotColumns.length || !f.groupBy || !f.groupBy.length)
          return e;
        var m = f.pivotColumns.map(function(R) {
          return a.find(function(I) {
            return I.id === R;
          });
        }).filter(Boolean), C = a.filter(function(R) {
          return !R.isPivotSource && !f.groupBy.includes(R.id) && !f.pivotColumns.includes(R.id);
        }), S = function R(I, z, H) {
          I === void 0 && (I = 0), H === void 0 && (H = []);
          var G = m[I];
          if (!G)
            return C.map(function(L) {
              return d({}, L, {
                canPivot: !1,
                isPivoted: !0,
                parent: z,
                depth: I,
                id: "" + (z ? z.id + "." + L.id : L.id),
                accessor: function(cn, fn, Y) {
                  if (H.every(function(Tn) {
                    return Tn(Y);
                  }))
                    return Y.values[L.id];
                }
              });
            });
          var _ = Array.from(G.uniqueValues).sort();
          return _.map(function(L) {
            var Q = d({}, G, {
              Header: G.PivotHeader || typeof G.header == "string" ? G.Header + ": " + L : L,
              isPivotGroup: !0,
              parent: z,
              depth: I,
              id: z ? z.id + "." + G.id + "." + L : G.id + "." + L,
              pivotValue: L
            });
            return Q.columns = R(I + 1, Q, [].concat(H, [function(cn) {
              return cn.values[G.id] === L;
            }])), Q;
          });
        }, D = Te(S());
        return [].concat(e, D);
      }
      function bt(e, t) {
        var u = t.instance.state, a = u.pivotColumns, f = u.groupBy;
        return [].concat(e, [a, f]);
      }
      function po(e, t) {
        var u = t.instance.state;
        return e = e.filter(function(a) {
          return !a.isPivotSource;
        }), u.pivotColumns.length && u.groupBy && u.groupBy.length && (e = e.filter(function(a) {
          return a.isGrouped || a.isPivoted;
        })), e;
      }
      function ut(e, t) {
        var u = t.instance;
        return [].concat(e, [u.state.pivotColumns, u.state.groupBy]);
      }
      function Mt(e) {
        var t = e.columns, u = e.allColumns, a = e.flatHeaders, f = e.getHooks, m = e.plugins, C = e.dispatch, S = e.autoResetPivot, D = S === void 0 ? !0 : S, R = e.manaulPivot, I = e.disablePivot, z = e.defaultCanPivot;
        Un(m, ["useGroupBy"], "usePivotColumns");
        var H = Dn(e);
        u.forEach(function(L) {
          var Q = L.accessor, cn = L.defaultPivot, fn = L.disablePivot;
          L.canPivot = Q ? ce(L.canPivot, fn === !0 ? !1 : void 0, I === !0 ? !1 : void 0, !0) : ce(L.canPivot, cn, z, !1), L.canPivot && (L.togglePivot = function() {
            return e.togglePivot(L.id);
          }), L.Aggregated = L.Aggregated || L.Cell;
        });
        var G = function(Q, cn) {
          C({
            type: b.togglePivot,
            columnId: Q,
            value: cn
          });
        };
        a.forEach(function(L) {
          L.getPivotToggleProps = yn(f().getPivotToggleProps, {
            instance: H(),
            header: L
          });
        });
        var _ = Dn(D);
        vn(function() {
          _() && C({
            type: b.resetPivot
          });
        }, [C, R ? null : t]), Object.assign(e, {
          togglePivot: G
        });
      }
      function At(e) {
        e.allCells.forEach(function(t) {
          t.isPivoted = t.column.isPivoted;
        });
      }
      var fo = "useRowSelect";
      b.resetSelectedRows = "resetSelectedRows", b.toggleAllRowsSelected = "toggleAllRowsSelected", b.toggleRowSelected = "toggleRowSelected", b.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var Dt = function(t) {
        t.getToggleRowSelectedProps = [ia], t.getToggleAllRowsSelectedProps = [Nt], t.getToggleAllPageRowsSelectedProps = [la], t.stateReducers.push(sa), t.useInstance.push(ca), t.prepareRow.push(go);
      };
      Dt.pluginName = fo;
      var ia = function(t, u) {
        var a = u.instance, f = u.row, m = a.manualRowSelectedKey, C = m === void 0 ? "isSelected" : m, S = !1;
        return f.original && f.original[C] ? S = !0 : S = f.isSelected, [t, {
          onChange: function(R) {
            f.toggleRowSelected(R.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: S,
          title: "Toggle Row Selected",
          indeterminate: f.isSomeSelected
        }];
      }, Nt = function(t, u) {
        var a = u.instance;
        return [t, {
          onChange: function(m) {
            a.toggleAllRowsSelected(m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: a.isAllRowsSelected,
          title: "Toggle All Rows Selected",
          indeterminate: !!(!a.isAllRowsSelected && Object.keys(a.state.selectedRowIds).length)
        }];
      }, la = function(t, u) {
        var a = u.instance;
        return [t, {
          onChange: function(m) {
            a.toggleAllPageRowsSelected(m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: a.isAllPageRowsSelected,
          title: "Toggle All Current Page Rows Selected",
          indeterminate: !!(!a.isAllPageRowsSelected && a.page.some(function(f) {
            var m = f.id;
            return a.state.selectedRowIds[m];
          }))
        }];
      };
      function sa(e, t, u, a) {
        if (t.type === b.init)
          return d({
            selectedRowIds: {}
          }, e);
        if (t.type === b.resetSelectedRows)
          return d({}, e, {
            selectedRowIds: a.initialState.selectedRowIds || {}
          });
        if (t.type === b.toggleAllRowsSelected) {
          var f = t.value, m = a.isAllRowsSelected, C = a.rowsById, S = a.nonGroupedRowsById, D = S === void 0 ? C : S, R = typeof f < "u" ? f : !m, I = Object.assign({}, e.selectedRowIds);
          return R ? Object.keys(D).forEach(function(Hn) {
            I[Hn] = !0;
          }) : Object.keys(D).forEach(function(Hn) {
            delete I[Hn];
          }), d({}, e, {
            selectedRowIds: I
          });
        }
        if (t.type === b.toggleRowSelected) {
          var z = t.id, H = t.value, G = a.rowsById, _ = a.selectSubRows, L = _ === void 0 ? !0 : _, Q = a.getSubRows, cn = e.selectedRowIds[z], fn = typeof H < "u" ? H : !cn;
          if (cn === fn)
            return e;
          var Y = d({}, e.selectedRowIds), Tn = function Hn(Sn) {
            var bn = G[Sn];
            if (bn && (bn.isGrouped || (fn ? Y[Sn] = !0 : delete Y[Sn]), L && Q(bn)))
              return Q(bn).forEach(function(Yn) {
                return Hn(Yn.id);
              });
          };
          return Tn(z), d({}, e, {
            selectedRowIds: Y
          });
        }
        if (t.type === b.toggleAllPageRowsSelected) {
          var Fn = t.value, J = a.page, j = a.rowsById, $ = a.selectSubRows, sn = $ === void 0 ? !0 : $, kn = a.isAllPageRowsSelected, On = a.getSubRows, jn = typeof Fn < "u" ? Fn : !kn, on = d({}, e.selectedRowIds), ye = function Hn(Sn) {
            var bn = j[Sn];
            if (bn.isGrouped || (jn ? on[Sn] = !0 : delete on[Sn]), sn && On(bn))
              return On(bn).forEach(function(Yn) {
                return Hn(Yn.id);
              });
          };
          return J.forEach(function(Hn) {
            return ye(Hn.id);
          }), d({}, e, {
            selectedRowIds: on
          });
        }
        return e;
      }
      function ca(e) {
        var t = e.data, u = e.rows, a = e.getHooks, f = e.plugins, m = e.rowsById, C = e.nonGroupedRowsById, S = C === void 0 ? m : C, D = e.autoResetSelectedRows, R = D === void 0 ? !0 : D, I = e.state.selectedRowIds, z = e.selectSubRows, H = z === void 0 ? !0 : z, G = e.dispatch, _ = e.page, L = e.getSubRows;
        Un(f, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var Q = y.useMemo(function() {
          var kn = [];
          return u.forEach(function(On) {
            var jn = H ? mo(On, I, L) : !!I[On.id];
            On.isSelected = !!jn, On.isSomeSelected = jn === null, jn && kn.push(On);
          }), kn;
        }, [u, H, I, L]), cn = !!(Object.keys(S).length && Object.keys(I).length), fn = cn;
        cn && Object.keys(S).some(function(kn) {
          return !I[kn];
        }) && (cn = !1), cn || _ && _.length && _.some(function(kn) {
          var On = kn.id;
          return !I[On];
        }) && (fn = !1);
        var Y = Dn(R);
        vn(function() {
          Y() && G({
            type: b.resetSelectedRows
          });
        }, [G, t]);
        var Tn = y.useCallback(function(kn) {
          return G({
            type: b.toggleAllRowsSelected,
            value: kn
          });
        }, [G]), Fn = y.useCallback(function(kn) {
          return G({
            type: b.toggleAllPageRowsSelected,
            value: kn
          });
        }, [G]), J = y.useCallback(function(kn, On) {
          return G({
            type: b.toggleRowSelected,
            id: kn,
            value: On
          });
        }, [G]), j = Dn(e), $ = yn(a().getToggleAllRowsSelectedProps, {
          instance: j()
        }), sn = yn(a().getToggleAllPageRowsSelectedProps, {
          instance: j()
        });
        Object.assign(e, {
          selectedFlatRows: Q,
          isAllRowsSelected: cn,
          isAllPageRowsSelected: fn,
          toggleRowSelected: J,
          toggleAllRowsSelected: Tn,
          getToggleAllRowsSelectedProps: $,
          getToggleAllPageRowsSelectedProps: sn,
          toggleAllPageRowsSelected: Fn
        });
      }
      function go(e, t) {
        var u = t.instance;
        e.toggleRowSelected = function(a) {
          return u.toggleRowSelected(e.id, a);
        }, e.getToggleRowSelectedProps = yn(u.getHooks().getToggleRowSelectedProps, {
          instance: u,
          row: e
        });
      }
      function mo(e, t, u) {
        if (t[e.id])
          return !0;
        var a = u(e);
        if (a && a.length) {
          var f = !0, m = !1;
          return a.forEach(function(C) {
            m && !f || (mo(C, t, u) ? m = !0 : f = !1);
          }), f ? !0 : m ? null : !1;
        }
        return !1;
      }
      var vo = function(t) {
        return {};
      }, ho = function(t) {
        return {};
      };
      b.setRowState = "setRowState", b.setCellState = "setCellState", b.resetRowState = "resetRowState";
      var So = function(t) {
        t.stateReducers.push(Rt), t.useInstance.push(n), t.prepareRow.push(r);
      };
      So.pluginName = "useRowState";
      function Rt(e, t, u, a) {
        var f = a.initialRowStateAccessor, m = f === void 0 ? vo : f, C = a.initialCellStateAccessor, S = C === void 0 ? ho : C, D = a.rowsById;
        if (t.type === b.init)
          return d({
            rowState: {}
          }, e);
        if (t.type === b.resetRowState)
          return d({}, e, {
            rowState: a.initialState.rowState || {}
          });
        if (t.type === b.setRowState) {
          var R, I = t.rowId, z = t.value, H = typeof e.rowState[I] < "u" ? e.rowState[I] : m(D[I]);
          return d({}, e, {
            rowState: d({}, e.rowState, (R = {}, R[I] = Vn(z, H), R))
          });
        }
        if (t.type === b.setCellState) {
          var G, _, L, Q, cn, fn = t.rowId, Y = t.columnId, Tn = t.value, Fn = typeof e.rowState[fn] < "u" ? e.rowState[fn] : m(D[fn]), J = typeof (Fn == null || (G = Fn.cellState) == null ? void 0 : G[Y]) < "u" ? Fn.cellState[Y] : S((_ = D[fn]) == null || (L = _.cells) == null ? void 0 : L.find(function(j) {
            return j.column.id === Y;
          }));
          return d({}, e, {
            rowState: d({}, e.rowState, (cn = {}, cn[fn] = d({}, Fn, {
              cellState: d({}, Fn.cellState || {}, (Q = {}, Q[Y] = Vn(Tn, J), Q))
            }), cn))
          });
        }
      }
      function n(e) {
        var t = e.autoResetRowState, u = t === void 0 ? !0 : t, a = e.data, f = e.dispatch, m = y.useCallback(function(D, R) {
          return f({
            type: b.setRowState,
            rowId: D,
            value: R
          });
        }, [f]), C = y.useCallback(function(D, R, I) {
          return f({
            type: b.setCellState,
            rowId: D,
            columnId: R,
            value: I
          });
        }, [f]), S = Dn(u);
        vn(function() {
          S() && f({
            type: b.resetRowState
          });
        }, [a]), Object.assign(e, {
          setRowState: m,
          setCellState: C
        });
      }
      function r(e, t) {
        var u = t.instance, a = u.initialRowStateAccessor, f = a === void 0 ? vo : a, m = u.initialCellStateAccessor, C = m === void 0 ? ho : m, S = u.state.rowState;
        e && (e.state = typeof S[e.id] < "u" ? S[e.id] : f(e), e.setState = function(D) {
          return u.setRowState(e.id, D);
        }, e.cells.forEach(function(D) {
          e.state.cellState || (e.state.cellState = {}), D.state = typeof e.state.cellState[D.column.id] < "u" ? e.state.cellState[D.column.id] : C(D), D.setState = function(R) {
            return u.setCellState(e.id, D.column.id, R);
          };
        }));
      }
      b.resetColumnOrder = "resetColumnOrder", b.setColumnOrder = "setColumnOrder";
      var l = function(t) {
        t.stateReducers.push(s), t.visibleColumnsDeps.push(function(u, a) {
          var f = a.instance;
          return [].concat(u, [f.state.columnOrder]);
        }), t.visibleColumns.push(v), t.useInstance.push(g);
      };
      l.pluginName = "useColumnOrder";
      function s(e, t, u, a) {
        if (t.type === b.init)
          return d({
            columnOrder: []
          }, e);
        if (t.type === b.resetColumnOrder)
          return d({}, e, {
            columnOrder: a.initialState.columnOrder || []
          });
        if (t.type === b.setColumnOrder)
          return d({}, e, {
            columnOrder: Vn(t.columnOrder, e.columnOrder)
          });
      }
      function v(e, t) {
        var u = t.instance.state.columnOrder;
        if (!u || !u.length)
          return e;
        for (var a = [].concat(u), f = [].concat(e), m = [], C = function() {
          var D = a.shift(), R = f.findIndex(function(I) {
            return I.id === D;
          });
          R > -1 && m.push(f.splice(R, 1)[0]);
        }; f.length && a.length; )
          C();
        return [].concat(m, f);
      }
      function g(e) {
        var t = e.dispatch;
        e.setColumnOrder = y.useCallback(function(u) {
          return t({
            type: b.setColumnOrder,
            columnOrder: u
          });
        }, [t]);
      }
      dn.canResize = !0, b.columnStartResizing = "columnStartResizing", b.columnResizing = "columnResizing", b.columnDoneResizing = "columnDoneResizing", b.resetResize = "resetResize";
      var h = function(t) {
        t.getResizerProps = [N], t.getHeaderProps.push({
          style: {
            position: "relative"
          }
        }), t.stateReducers.push(T), t.useInstance.push(q), t.useInstanceBeforeDimensions.push(P);
      }, N = function(t, u) {
        var a = u.instance, f = u.header, m = a.dispatch, C = function(D, R) {
          var I = !1;
          if (D.type === "touchstart") {
            if (D.touches && D.touches.length > 1)
              return;
            I = !0;
          }
          var z = W(R), H = z.map(function(J) {
            return [J.id, J.totalWidth];
          }), G = I ? Math.round(D.touches[0].clientX) : D.clientX, _, L, Q = function() {
            window.cancelAnimationFrame(_), _ = null, m({
              type: b.columnDoneResizing
            });
          }, cn = function() {
            window.cancelAnimationFrame(_), _ = null, m({
              type: b.columnResizing,
              clientX: L
            });
          }, fn = function(j) {
            L = j, _ || (_ = window.requestAnimationFrame(cn));
          }, Y = {
            mouse: {
              moveEvent: "mousemove",
              moveHandler: function(j) {
                return fn(j.clientX);
              },
              upEvent: "mouseup",
              upHandler: function(j) {
                document.removeEventListener("mousemove", Y.mouse.moveHandler), document.removeEventListener("mouseup", Y.mouse.upHandler), Q();
              }
            },
            touch: {
              moveEvent: "touchmove",
              moveHandler: function(j) {
                return j.cancelable && (j.preventDefault(), j.stopPropagation()), fn(j.touches[0].clientX), !1;
              },
              upEvent: "touchend",
              upHandler: function(j) {
                document.removeEventListener(Y.touch.moveEvent, Y.touch.moveHandler), document.removeEventListener(Y.touch.upEvent, Y.touch.moveHandler), Q();
              }
            }
          }, Tn = I ? Y.touch : Y.mouse, Fn = an() ? {
            passive: !1
          } : !1;
          document.addEventListener(Tn.moveEvent, Tn.moveHandler, Fn), document.addEventListener(Tn.upEvent, Tn.upHandler, Fn), m({
            type: b.columnStartResizing,
            columnId: R.id,
            columnWidth: R.totalWidth,
            headerIdWidths: H,
            clientX: G
          });
        };
        return [t, {
          onMouseDown: function(D) {
            return D.persist() || C(D, f);
          },
          onTouchStart: function(D) {
            return D.persist() || C(D, f);
          },
          style: {
            cursor: "col-resize"
          },
          draggable: !1,
          role: "separator"
        }];
      };
      h.pluginName = "useResizeColumns";
      function T(e, t) {
        if (t.type === b.init)
          return d({
            columnResizing: {
              columnWidths: {}
            }
          }, e);
        if (t.type === b.resetResize)
          return d({}, e, {
            columnResizing: {
              columnWidths: {}
            }
          });
        if (t.type === b.columnStartResizing) {
          var u = t.clientX, a = t.columnId, f = t.columnWidth, m = t.headerIdWidths;
          return d({}, e, {
            columnResizing: d({}, e.columnResizing, {
              startX: u,
              headerIdWidths: m,
              columnWidth: f,
              isResizingColumn: a
            })
          });
        }
        if (t.type === b.columnResizing) {
          var C = t.clientX, S = e.columnResizing, D = S.startX, R = S.columnWidth, I = S.headerIdWidths, z = I === void 0 ? [] : I, H = C - D, G = H / R, _ = {};
          return z.forEach(function(L) {
            var Q = L[0], cn = L[1];
            _[Q] = Math.max(cn + cn * G, 0);
          }), d({}, e, {
            columnResizing: d({}, e.columnResizing, {
              columnWidths: d({}, e.columnResizing.columnWidths, {}, _)
            })
          });
        }
        if (t.type === b.columnDoneResizing)
          return d({}, e, {
            columnResizing: d({}, e.columnResizing, {
              startX: null,
              isResizingColumn: null
            })
          });
      }
      var P = function(t) {
        var u = t.flatHeaders, a = t.disableResizing, f = t.getHooks, m = t.state.columnResizing, C = Dn(t);
        u.forEach(function(S) {
          var D = ce(S.disableResizing === !0 ? !1 : void 0, a === !0 ? !1 : void 0, !0);
          S.canResize = D, S.width = m.columnWidths[S.id] || S.originalWidth || S.width, S.isResizing = m.isResizingColumn === S.id, D && (S.getResizerProps = yn(f().getResizerProps, {
            instance: C(),
            header: S
          }));
        });
      };
      function q(e) {
        var t = e.plugins, u = e.dispatch, a = e.autoResetResize, f = a === void 0 ? !0 : a, m = e.columns;
        Un(t, ["useAbsoluteLayout"], "useResizeColumns");
        var C = Dn(f);
        vn(function() {
          C() && u({
            type: b.resetResize
          });
        }, [m]);
        var S = y.useCallback(function() {
          return u({
            type: b.resetResize
          });
        }, [u]);
        Object.assign(e, {
          resetResizing: S
        });
      }
      function W(e) {
        var t = [], u = function a(f) {
          f.columns && f.columns.length && f.columns.map(a), t.push(f);
        };
        return u(e), t;
      }
      var x = {
        position: "absolute",
        top: 0
      }, k = function(t) {
        t.getTableBodyProps.push(B), t.getRowProps.push(B), t.getHeaderGroupProps.push(B), t.getFooterGroupProps.push(B), t.getHeaderProps.push(function(u, a) {
          var f = a.column;
          return [u, {
            style: d({}, x, {
              left: f.totalLeft + "px",
              width: f.totalWidth + "px"
            })
          }];
        }), t.getCellProps.push(function(u, a) {
          var f = a.cell;
          return [u, {
            style: d({}, x, {
              left: f.column.totalLeft + "px",
              width: f.column.totalWidth + "px"
            })
          }];
        }), t.getFooterProps.push(function(u, a) {
          var f = a.column;
          return [u, {
            style: d({}, x, {
              left: f.totalLeft + "px",
              width: f.totalWidth + "px"
            })
          }];
        });
      };
      k.pluginName = "useAbsoluteLayout";
      var B = function(t, u) {
        var a = u.instance;
        return [t, {
          style: {
            position: "relative",
            width: a.totalColumnsWidth + "px"
          }
        }];
      }, X = {
        display: "inline-block",
        boxSizing: "border-box"
      }, U = function(t, u) {
        var a = u.instance;
        return [t, {
          style: {
            display: "flex",
            width: a.totalColumnsWidth + "px"
          }
        }];
      }, un = function(t) {
        t.getRowProps.push(U), t.getHeaderGroupProps.push(U), t.getFooterGroupProps.push(U), t.getHeaderProps.push(function(u, a) {
          var f = a.column;
          return [u, {
            style: d({}, X, {
              width: f.totalWidth + "px"
            })
          }];
        }), t.getCellProps.push(function(u, a) {
          var f = a.cell;
          return [u, {
            style: d({}, X, {
              width: f.column.totalWidth + "px"
            })
          }];
        }), t.getFooterProps.push(function(u, a) {
          var f = a.column;
          return [u, {
            style: d({}, X, {
              width: f.totalWidth + "px"
            })
          }];
        });
      };
      un.pluginName = "useBlockLayout";
      function In(e) {
        e.getTableProps.push(ln), e.getRowProps.push(K), e.getHeaderGroupProps.push(K), e.getFooterGroupProps.push(K), e.getHeaderProps.push(Nn), e.getCellProps.push(tn), e.getFooterProps.push(wn);
      }
      In.pluginName = "useFlexLayout";
      var ln = function(t, u) {
        var a = u.instance;
        return [t, {
          style: {
            minWidth: a.totalColumnsMinWidth + "px"
          }
        }];
      }, K = function(t, u) {
        var a = u.instance;
        return [t, {
          style: {
            display: "flex",
            flex: "1 0 auto",
            minWidth: a.totalColumnsMinWidth + "px"
          }
        }];
      }, Nn = function(t, u) {
        var a = u.column;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: a.totalFlexWidth ? a.totalFlexWidth + " 0 auto" : void 0,
            minWidth: a.totalMinWidth + "px",
            width: a.totalWidth + "px"
          }
        }];
      }, tn = function(t, u) {
        var a = u.cell;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: a.column.totalFlexWidth + " 0 auto",
            minWidth: a.column.totalMinWidth + "px",
            width: a.column.totalWidth + "px"
          }
        }];
      }, wn = function(t, u) {
        var a = u.column;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: a.totalFlexWidth ? a.totalFlexWidth + " 0 auto" : void 0,
            minWidth: a.totalMinWidth + "px",
            width: a.totalWidth + "px"
          }
        }];
      };
      b.columnStartResizing = "columnStartResizing", b.columnResizing = "columnResizing", b.columnDoneResizing = "columnDoneResizing", b.resetResize = "resetResize";
      function Gn(e) {
        e.stateReducers.push(An), e.getTableProps.push(Cn), e.getHeaderProps.push(hn), e.getRowProps.push(zn);
      }
      Gn.pluginName = "useGridLayout";
      var Cn = function(t, u) {
        var a = u.instance, f = a.visibleColumns.map(function(m) {
          var C;
          return a.state.gridLayout.columnWidths[m.id] ? a.state.gridLayout.columnWidths[m.id] + "px" : (C = a.state.columnResizing) != null && C.isResizingColumn ? a.state.gridLayout.startWidths[m.id] + "px" : typeof m.width == "number" ? m.width + "px" : m.width;
        });
        return [t, {
          style: {
            display: "grid",
            gridTemplateColumns: f.join(" ")
          }
        }];
      }, hn = function(t, u) {
        var a = u.column;
        return [t, {
          id: "header-cell-" + a.id,
          style: {
            position: "sticky",
            //enables a scroll wrapper to be placed around the table and have sticky headers
            gridColumn: "span " + a.totalVisibleHeaderCount
          }
        }];
      }, zn = function(t, u) {
        var a = u.row;
        return a.isExpanded ? [t, {
          style: {
            gridColumn: "1 / " + (a.cells.length + 1)
          }
        }] : [t, {}];
      };
      function An(e, t, u, a) {
        if (t.type === b.init)
          return d({
            gridLayout: {
              columnWidths: {}
            }
          }, e);
        if (t.type === b.resetResize)
          return d({}, e, {
            gridLayout: {
              columnWidths: {}
            }
          });
        if (t.type === b.columnStartResizing) {
          var f = t.columnId, m = t.headerIdWidths, C = Kn(f);
          if (C !== void 0) {
            var S = a.visibleColumns.reduce(function(J, j) {
              var $;
              return d({}, J, ($ = {}, $[j.id] = Kn(j.id), $));
            }, {}), D = a.visibleColumns.reduce(function(J, j) {
              var $;
              return d({}, J, ($ = {}, $[j.id] = j.minWidth, $));
            }, {}), R = a.visibleColumns.reduce(function(J, j) {
              var $;
              return d({}, J, ($ = {}, $[j.id] = j.maxWidth, $));
            }, {}), I = m.map(function(J) {
              var j = J[0];
              return [j, Kn(j)];
            });
            return d({}, e, {
              gridLayout: d({}, e.gridLayout, {
                startWidths: S,
                minWidths: D,
                maxWidths: R,
                headerIdGridWidths: I,
                columnWidth: C
              })
            });
          } else
            return e;
        }
        if (t.type === b.columnResizing) {
          var z = t.clientX, H = e.columnResizing.startX, G = e.gridLayout, _ = G.columnWidth, L = G.minWidths, Q = G.maxWidths, cn = G.headerIdGridWidths, fn = cn === void 0 ? [] : cn, Y = z - H, Tn = Y / _, Fn = {};
          return fn.forEach(function(J) {
            var j = J[0], $ = J[1];
            Fn[j] = Math.min(Math.max(L[j], $ + $ * Tn), Q[j]);
          }), d({}, e, {
            gridLayout: d({}, e.gridLayout, {
              columnWidths: d({}, e.gridLayout.columnWidths, {}, Fn)
            })
          });
        }
        if (t.type === b.columnDoneResizing)
          return d({}, e, {
            gridLayout: d({}, e.gridLayout, {
              startWidths: {},
              minWidths: {},
              maxWidths: {}
            })
          });
      }
      function Kn(e) {
        var t, u = (t = document.getElementById("header-cell-" + e)) == null ? void 0 : t.offsetWidth;
        if (u !== void 0)
          return u;
      }
      c._UNSTABLE_usePivotColumns = co, c.actions = b, c.defaultColumn = dn, c.defaultGroupByFn = eo, c.defaultOrderByFn = wt, c.defaultRenderer = rn, c.emptyRenderer = gn, c.ensurePluginOrder = Un, c.flexRender = xn, c.functionalUpdate = Vn, c.loopHooks = Mn, c.makePropGetter = yn, c.makeRenderer = $n, c.reduceHooks = Bn, c.safeUseLayoutEffect = Wn, c.useAbsoluteLayout = k, c.useAsyncDebounce = le, c.useBlockLayout = un, c.useColumnOrder = l, c.useExpanded = Ct, c.useFilters = jt, c.useFlexLayout = In, c.useGetLatest = Dn, c.useGlobalFilter = Yt, c.useGridLayout = Gn, c.useGroupBy = ht, c.useMountedLayoutEffect = vn, c.usePagination = lo, c.useResizeColumns = h, c.useRowSelect = Dt, c.useRowState = So, c.useSortBy = ro, c.useTable = at, Object.defineProperty(c, "__esModule", { value: !0 });
    });
  }(No, No.exports)), No.exports;
}
process.env.NODE_ENV === "production" ? ba.exports = qu() : ba.exports = Ku();
var st = ba.exports;
function zu(o, p, c) {
  var y = this, A = M.useRef(null), E = M.useRef(0), d = M.useRef(null), O = M.useRef([]), Rn = M.useRef(), w = M.useRef(), En = M.useRef(o), b = M.useRef(!0);
  En.current = o;
  var rn = !p && p !== 0 && typeof window < "u";
  if (typeof o != "function")
    throw new TypeError("Expected a function");
  p = +p || 0, c = c || {};
  var gn = !!c.leading, dn = "trailing" in c ? !!c.trailing : !0, mn = "maxWait" in c, qn = mn ? Math.max(+c.maxWait || 0, p) : null, yn = M.useCallback(function(xn) {
    var oe = O.current, se = Rn.current;
    return O.current = Rn.current = null, E.current = xn, w.current = En.current.apply(se, oe);
  }, []), Bn = M.useCallback(function(xn, oe) {
    rn && cancelAnimationFrame(d.current), d.current = rn ? requestAnimationFrame(xn) : setTimeout(xn, oe);
  }, [rn]), Mn = M.useCallback(function(xn) {
    if (!b.current)
      return !1;
    var oe = xn - A.current, se = xn - E.current;
    return !A.current || oe >= p || oe < 0 || mn && se >= qn;
  }, [qn, mn, p]), Un = M.useCallback(function(xn) {
    return d.current = null, dn && O.current ? yn(xn) : (O.current = Rn.current = null, w.current);
  }, [yn, dn]), Vn = M.useCallback(function() {
    var xn = Date.now();
    if (Mn(xn))
      return Un(xn);
    if (b.current) {
      var oe = xn - A.current, se = xn - E.current, ne = p - oe, ee = mn ? Math.min(ne, qn - se) : ne;
      Bn(Vn, ee);
    }
  }, [qn, mn, Mn, Bn, Un, p]), Dn = M.useCallback(function() {
    d.current && (rn ? cancelAnimationFrame(d.current) : clearTimeout(d.current)), E.current = 0, O.current = A.current = Rn.current = d.current = null;
  }, [rn]), Wn = M.useCallback(function() {
    return d.current ? Un(Date.now()) : w.current;
  }, [Un]);
  M.useEffect(function() {
    return b.current = !0, function() {
      b.current = !1;
    };
  }, []);
  var vn = M.useCallback(function() {
    for (var xn = [], oe = 0; oe < arguments.length; oe++)
      xn[oe] = arguments[oe];
    var se = Date.now(), ne = Mn(se);
    if (O.current = xn, Rn.current = y, A.current = se, ne) {
      if (!d.current && b.current)
        return E.current = A.current, Bn(Vn, p), gn ? yn(A.current) : w.current;
      if (mn)
        return Bn(Vn, p), yn(A.current);
    }
    return d.current || Bn(Vn, p), w.current;
  }, [yn, gn, mn, Mn, Bn, Vn, p]), le = M.useCallback(function() {
    return !!d.current;
  }, []), $n = M.useMemo(function() {
    return {
      callback: vn,
      cancel: Dn,
      flush: Wn,
      pending: le
    };
  }, [vn, Dn, Wn, le]);
  return $n;
}
function _u(o, p) {
  return o === p;
}
function Ja(o) {
  return typeof o == "function" ? function() {
    return o;
  } : o;
}
function Xu(o) {
  var p = M.useState(Ja(o)), c = p[0], y = p[1], A = M.useCallback(function(E) {
    return y(Ja(E));
  }, []);
  return [c, A];
}
function ju(o, p, c) {
  var y = c && c.equalityFn || _u, A = Xu(o), E = A[0], d = A[1], O = zu(M.useCallback(function(w) {
    return d(w);
  }, [d]), p, c), Rn = M.useRef(o);
  return M.useEffect(function() {
    y(Rn.current, o) || (O.callback(o), Rn.current = o);
  }, [o, O, y]), [E, { cancel: O.cancel, pending: O.pending, flush: O.flush }];
}
function Yu(o) {
  if (Array.isArray(o) || (o.general.geoType === "us-county" || o.general.geoType === "single-state" || o.general.geoType === "us" && (o != null && o.data)) && (o == null || o.data.forEach((p) => {
    p[o.columns.geo.name] && (!isNaN(parseInt(p[o.columns.geo.name])) && p[o.columns.geo.name].length === 4 && (p[o.columns.geo.name] = 0 + p[o.columns.geo.name]), p[o.columns.geo.name] = p[o.columns.geo.name].toString());
  })), Array.isArray(o) && o.length > 0) {
    let p = Object.keys(o[0]), c = ["fips", "FIPS", "fips codes", "FIPS CODES", "Fips Codes", "fips Codes", "Fips codes", "FIPS Codes"];
    const y = p.filter((A) => c.includes(A));
    if (!y.length)
      return;
    o == null || o.forEach((A) => {
      A[y] && (!isNaN(parseInt(A[y])) && A[y].length === 4 && (A[y] = 0 + A[y]), A[y] = A[y].toString());
    });
  }
  return o;
}
const Ma = 10, ot = {
  emptyCols: "It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.",
  emptyData: "Your data file is empty.",
  dataType: "Your datatype is not supported.",
  fileType: "The file type that you are trying to upload is not supported.",
  formatting: "Please check the formatting of your data file.",
  failedFetch: "Error fetching or parsing data file.",
  urlInvalid: "Please make sure to use a valid URL.",
  cannotReach: "Cannot reach URL, please make sure it's correct.",
  fileTooLarge: `File is too large. Maximum file size is ${Ma}MB.`
}, Uu = M.memo(({ globalFilter: o, setGlobalFilter: p, disabled: c = !1 }) => {
  const [y, A] = M.useState(o), [E] = ju(y, 200);
  M.useEffect(() => {
    typeof E == "string" && E !== o && p(E ?? "");
  }, [E]);
  const d = (O) => {
    A(O.target.value);
  };
  return /* @__PURE__ */ i.createElement("input", { className: "filter", value: y, onChange: d, type: "search", placeholder: "Filter...", disabled: c });
}), $a = M.memo(({ globalFilter: o, data: p, setGlobalFilter: c }) => /* @__PURE__ */ i.createElement("header", { className: "data-table-header" }, /* @__PURE__ */ i.createElement("h2", null, "Data Preview"), /* @__PURE__ */ i.createElement(Uu, { globalFilter: o || "", setGlobalFilter: c, disabled: p === null }))), Ju = M.memo(({ previousPage: o, nextPage: p, canPreviousPage: c, canNextPage: y, pageNumber: A, totalPages: E }) => /* @__PURE__ */ i.createElement("footer", { className: "data-table-pagination" }, /* @__PURE__ */ i.createElement("ul", null, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("button", { onClick: () => o(), className: "btn btn-prev", disabled: !c, title: "Previous Page" })), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("button", { onClick: () => p(), className: "btn btn-next", disabled: !y, title: "Next Page" }))), /* @__PURE__ */ i.createElement("span", null, "Page ", A, " of ", E))), $u = ({ data: o }) => {
  const [p, c] = M.useState(o ?? []), y = M.useContext(Ot), A = M.useMemo(() => {
    const Wn = p.columns ?? [];
    return Wn.length > 0 && Wn.includes("") && y({ type: "EDITOR_SET_ERRORS", payload: [ot.emptyCols] }), Wn.map((vn, le) => ({
      id: `column-${vn}`,
      accessor: (xn) => xn[vn],
      Header: vn,
      width: 250
    }));
  }, [p]), E = M.useCallback((Wn) => {
    let vn = [];
    Wn.forEach(($n) => {
      Object.keys($n).forEach((xn) => {
        vn.includes(xn) === !1 && vn.push(xn);
      });
    });
    const le = [...Wn];
    if (Array.isArray(le))
      return le.columns = vn, le;
  }, []);
  M.useEffect(() => {
    if (!o)
      return;
    let Wn = [...o];
    const vn = Object.keys(Wn[0]).includes("tableData");
    Wn = E(vn ? Wn[0].tableData : Wn), Yu(Wn), c(Wn);
  }, [o, E]);
  const {
    getTableProps: d,
    getTableBodyProps: O,
    headerGroups: Rn,
    state: { pageIndex: w, globalFilter: En },
    prepareRow: b,
    setGlobalFilter: rn,
    page: gn,
    canPreviousPage: dn,
    canNextPage: mn,
    pageOptions: qn,
    nextPage: yn,
    previousPage: Bn
  } = st.useTable({ columns: A, data: p, initialState: { pageSize: 25 } }, st.useBlockLayout, st.useGlobalFilter, st.useSortBy, st.useResizeColumns, st.usePagination), Mn = () => /* @__PURE__ */ i.createElement("section", { className: "no-data-message" }, /* @__PURE__ */ i.createElement("section", null, /* @__PURE__ */ i.createElement("h3", null, "No Data"), /* @__PURE__ */ i.createElement("p", null, "Import data to preview"))), Un = () => /* @__PURE__ */ i.createElement("section", { className: "no-data" }, /* @__PURE__ */ i.createElement(Mn, null), /* @__PURE__ */ i.createElement("div", { className: "table-container" }, /* @__PURE__ */ i.createElement("table", { className: "editor data-table", role: "table" }, /* @__PURE__ */ i.createElement("thead", null, /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ i.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ i.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }))), /* @__PURE__ */ i.createElement("tbody", null, /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }))))));
  if (!o)
    return [/* @__PURE__ */ i.createElement($a, { key: "header" }), /* @__PURE__ */ i.createElement(Un, { key: "table" })];
  const Vn = { previousPage: Bn, nextPage: yn, canPreviousPage: dn, canNextPage: mn, pageNumber: w + 1, totalPages: qn.length }, Dn = () => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("section", { className: "data-table-container" }, /* @__PURE__ */ i.createElement("div", { className: "table-container" }, /* @__PURE__ */ i.createElement("table", { className: "data-table", ...d(), "aria-hidden": "true" }, /* @__PURE__ */ i.createElement("thead", null, Rn.map((Wn) => /* @__PURE__ */ i.createElement("tr", { ...Wn.getHeaderGroupProps() }, Wn.headers.map((vn) => /* @__PURE__ */ i.createElement("th", { scope: "col", ...vn.getHeaderProps(vn.getSortByToggleProps()), className: vn.isSorted ? vn.isSortedDesc ? "sort sort-desc" : "sort sort-asc" : "", title: vn.Header }, vn.render("Header"), /* @__PURE__ */ i.createElement("div", { ...vn.getResizerProps(), className: "resizer" })))))), /* @__PURE__ */ i.createElement("tbody", { ...O() }, gn.map((Wn) => (b(Wn), /* @__PURE__ */ i.createElement("tr", { ...Wn.getRowProps() }, Wn.cells.map((vn) => /* @__PURE__ */ i.createElement("td", { ...vn.getCellProps(), title: vn.value }, vn.render("Cell")))))))))), /* @__PURE__ */ i.createElement(Ju, { ...Vn }));
  return [/* @__PURE__ */ i.createElement($a, { key: "header", data: o, setGlobalFilter: rn, globalFilter: En }), /* @__PURE__ */ i.createElement(Dn, { key: "table" })];
}, Zu = (o) => /* @__PURE__ */ M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...o }, /* @__PURE__ */ M.createElement("path", { d: "M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z" })), Lo = M.createContext();
Lo.displayName = "SampleDataContext";
const Qu = `STATE,Rate,Location,URL
Overall,55,Vehicle,https://www.cdc.gov\r
Alabama,130,Vehicle,https://www.cdc.gov/\r
Alaska,40,Work,https://www.cdc.gov/\r
American Samoa,55,Home,https://www.cdc.gov/\r
Arizona,57,School,https://www.cdc.gov/\r
Arkansas,60,School,https://www.cdc.gov/\r
California,30,Home,https://www.cdc.gov/\r
Colorado,40,Vehicle,https://www.cdc.gov/\r
Connecticut,55,Home,https://www.cdc.gov/\r
Deleware,57,Home,https://www.cdc.gov/\r
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
`, ni = `Race,Age-adjusted rate
Hispanic or Latino,644.2
Non-Hispanic American Indian,636.1
Non-Hispanic Black,563.7
Non-Hispanic Asian or Pacific Islander,202.5
Non-Hispanic White,183.6
`, ei = `FIPS Codes,County,Public Health Jurisdiction,Percent Vaccinated,Vaccination Coverage Group
02013,Aleutians East Borough,AK,99.99,70% or More
02016,Aleutians West Census Area,AK,89.74,70% or More
02020,Anchorage Municipality,AK,60.67,60% - 69.9%
02050,Bethel Census Area,AK,85.38,70% or More
02060,Bristol Bay Borough,AK,99.99,70% or More
02068,Denali Borough,AK,50.41,50% - 59.9%
02070,Dillingham Census Area,AK,65.34,60% - 69.9%
02090,Fairbanks North Star Borough,AK,53.3,50% - 59.9%
02100,Haines Borough,AK,47.03,40% - 49.9%
02105,Hoonah-Angoon Census Area,AK,88.32,70% or More
02110,Juneau City and Borough,AK,78.68,70% or More
02122,Kenai Peninsula Borough,AK,31.23,30% - 39.9%
02130,Ketchikan Gateway Borough,AK,63.86,60% - 69.9%
02150,Kodiak Island Borough,AK,69.59,60% - 69.9%
02158,Kusilvak Census Area,AK,98.33,70% or More
02164,Lake and Peninsula Borough,AK,65.73,60% - 69.9%
02170,Matanuska-Susitna Borough,AK,32.13,30% - 39.9%
02180,Nome Census Area,AK,88.57,70% or More
02185,North Slope Borough,AK,53.89,50% - 59.9%
02188,Northwest Arctic Borough,AK,75.06,70% or More
02195,Petersburg Census Area,AK,74.48,70% or More
02198,Prince of Wales-Hyder Census Area,AK,57.75,50% - 59.9%
02220,Sitka City and Borough,AK,75.12,70% or More
02230,Skagway Municipality,AK,99.99,70% or More
02240,Southeast Fairbanks Census Area,AK,23.94,20% - 29.9%
02261,Valdez-Cordova Census Area,AK,40.92,40% - 49.9%
02275,Wrangell City and Borough,AK,45.73,40% - 49.9%
02282,Yakutat City and Borough,AK,96.67,70% or More
02290,Yukon-Koyukuk Census Area,AK,86.47,70% or More
01001,Autauga County,AL,34.13,30% - 39.9%
01003,Baldwin County,AL,37.55,30% - 39.9%
01005,Barbour County,AL,32.78,30% - 39.9%
01007,Bibb County,AL,24.83,20% - 29.9%
01009,Blount County,AL,19.69,0% - 19.9%
01011,Bullock County,AL,50.59,50% - 59.9%
01013,Butler County,AL,28.25,20% - 29.9%
01015,Calhoun County,AL,33.01,30% - 39.9%
01017,Chambers County,AL,20.28,20% - 29.9%
01019,Cherokee County,AL,14.04,0% - 19.9%
01021,Chilton County,AL,25.24,20% - 29.9%
01023,Choctaw County,AL,39.57,30% - 39.9%
01025,Clarke County,AL,37.54,30% - 39.9%
01027,Clay County,AL,23.85,20% - 29.9%
01029,Cleburne County,AL,14.83,0% - 19.9%
01031,Coffee County,AL,26.38,20% - 29.9%
01033,Colbert County,AL,37.04,30% - 39.9%
01035,Conecuh County,AL,31.94,30% - 39.9%
01037,Coosa County,AL,23.87,20% - 29.9%
01039,Covington County,AL,21.4,20% - 29.9%
01041,Crenshaw County,AL,19.49,0% - 19.9%
01043,Cullman County,AL,20.77,20% - 29.9%
01045,Dale County,AL,27.59,20% - 29.9%
01047,Dallas County,AL,35.95,30% - 39.9%
01049,DeKalb County,AL,20.97,20% - 29.9%
01051,Elmore County,AL,31.41,30% - 39.9%
01053,Escambia County,AL,20.24,20% - 29.9%
01055,Etowah County,AL,27.95,20% - 29.9%
01057,Fayette County,AL,20.02,20% - 29.9%
01059,Franklin County,AL,28.59,20% - 29.9%
01061,Geneva County,AL,14.87,0% - 19.9%
01063,Greene County,AL,44.05,40% - 49.9%
01065,Hale County,AL,58.53,50% - 59.9%
01067,Henry County,AL,22.4,20% - 29.9%
01069,Houston County,AL,27.27,20% - 29.9%
01071,Jackson County,AL,27.12,20% - 29.9%
01073,Jefferson County,AL,55.79,50% - 59.9%
01075,Lamar County,AL,16.74,0% - 19.9%
01077,Lauderdale County,AL,30.71,30% - 39.9%
01079,Lawrence County,AL,23.08,20% - 29.9%
01081,Lee County,AL,32.87,30% - 39.9%
01083,Limestone County,AL,21.03,20% - 29.9%
01085,Lowndes County,AL,48.36,40% - 49.9%
01087,Macon County,AL,50.19,50% - 59.9%
01089,Madison County,AL,57.67,50% - 59.9%
01091,Marengo County,AL,47.2,40% - 49.9%
01093,Marion County,AL,17.5,0% - 19.9%
01095,Marshall County,AL,31.06,30% - 39.9%
01097,Mobile County,AL,39.18,30% - 39.9%
01099,Monroe County,AL,31.45,30% - 39.9%
01101,Montgomery County,AL,50.54,50% - 59.9%
01103,Morgan County,AL,26.11,20% - 29.9%
01105,Perry County,AL,43.88,40% - 49.9%
01107,Pickens County,AL,36.8,30% - 39.9%
01109,Pike County,AL,39.77,30% - 39.9%
01111,Randolph County,AL,12.65,0% - 19.9%
01113,Russell County,AL,36.78,30% - 39.9%
01117,Shelby County,AL,34.86,30% - 39.9%
01115,St. Clair County,AL,25.68,20% - 29.9%
01119,Sumter County,AL,58.55,50% - 59.9%
01121,Talladega County,AL,24.3,20% - 29.9%
01123,Tallapoosa County,AL,23.69,20% - 29.9%
01125,Tuscaloosa County,AL,39.99,30% - 39.9%
01127,Walker County,AL,28.51,20% - 29.9%
01129,Washington County,AL,24.47,20% - 29.9%
01131,Wilcox County,AL,51.67,50% - 59.9%
01133,Winston County,AL,8.29,0% - 19.9%
05001,Arkansas County,AR,55.55,50% - 59.9%
05003,Ashley County,AR,40.57,40% - 49.9%
05005,Baxter County,AR,32.08,30% - 39.9%
05007,Benton County,AR,57.67,50% - 59.9%
05009,Boone County,AR,28.04,20% - 29.9%
05011,Bradley County,AR,54.5,50% - 59.9%
05013,Calhoun County,AR,30.18,30% - 39.9%
05015,Carroll County,AR,36.62,30% - 39.9%
05017,Chicot County,AR,51.86,50% - 59.9%
05019,Clark County,AR,57.84,50% - 59.9%
05021,Clay County,AR,35.06,30% - 39.9%
05023,Cleburne County,AR,28.57,20% - 29.9%
05025,Cleveland County,AR,44.1,40% - 49.9%
05027,Columbia County,AR,51.25,50% - 59.9%
05029,Conway County,AR,51.04,50% - 59.9%
05031,Craighead County,AR,44.69,40% - 49.9%
05033,Crawford County,AR,39.84,30% - 39.9%
05035,Crittenden County,AR,42.57,40% - 49.9%
05037,Cross County,AR,44.26,40% - 49.9%
05039,Dallas County,AR,62.9,60% - 69.9%
05041,Desha County,AR,53.16,50% - 59.9%
05043,Drew County,AR,49.58,40% - 49.9%
05045,Faulkner County,AR,50.18,50% - 59.9%
05047,Franklin County,AR,40.72,40% - 49.9%
05049,Fulton County,AR,26.74,20% - 29.9%
05051,Garland County,AR,45.09,40% - 49.9%
05053,Grant County,AR,36.88,30% - 39.9%
05055,Greene County,AR,37.32,30% - 39.9%
05057,Hempstead County,AR,29.71,20% - 29.9%
05059,Hot Spring County,AR,39.6,30% - 39.9%
05061,Howard County,AR,37.23,30% - 39.9%
05063,Independence County,AR,37.18,30% - 39.9%
05065,Izard County,AR,37.32,30% - 39.9%
05067,Jackson County,AR,33.98,30% - 39.9%
05069,Jefferson County,AR,50.85,50% - 59.9%
05071,Johnson County,AR,45.67,40% - 49.9%
05073,Lafayette County,AR,25.39,20% - 29.9%
05075,Lawrence County,AR,38,30% - 39.9%
05077,Lee County,AR,25.23,20% - 29.9%
05079,Lincoln County,AR,38.65,30% - 39.9%
05081,Little River County,AR,23.08,20% - 29.9%
05083,Logan County,AR,38.48,30% - 39.9%
05085,Lonoke County,AR,46.96,40% - 49.9%
05087,Madison County,AR,34.63,30% - 39.9%
05089,Marion County,AR,17.97,0% - 19.9%
05091,Miller County,AR,21.71,20% - 29.9%
05093,Mississippi County,AR,32.99,30% - 39.9%
05095,Monroe County,AR,63.26,60% - 69.9%
05097,Montgomery County,AR,21.62,20% - 29.9%
05099,Nevada County,AR,39.97,30% - 39.9%
05101,Newton County,AR,18.95,0% - 19.9%
05103,Ouachita County,AR,48.36,40% - 49.9%
05105,Perry County,AR,47.07,40% - 49.9%
05107,Phillips County,AR,44.03,40% - 49.9%
05109,Pike County,AR,29.4,20% - 29.9%
05111,Poinsett County,AR,41.64,40% - 49.9%
05113,Polk County,AR,23.59,20% - 29.9%
05115,Pope County,AR,47.51,40% - 49.9%
05117,Prairie County,AR,37.43,30% - 39.9%
05119,Pulaski County,AR,64.24,60% - 69.9%
05121,Randolph County,AR,30.79,30% - 39.9%
05125,Saline County,AR,58.77,50% - 59.9%
05127,Scott County,AR,34.7,30% - 39.9%
05129,Searcy County,AR,23.49,20% - 29.9%
05131,Sebastian County,AR,51.32,50% - 59.9%
05133,Sevier County,AR,36.78,30% - 39.9%
05135,Sharp County,AR,32.8,30% - 39.9%
05123,St. Francis County,AR,31.13,30% - 39.9%
05137,Stone County,AR,26.39,20% - 29.9%
05139,Union County,AR,46.07,40% - 49.9%
05141,Van Buren County,AR,24.51,20% - 29.9%
05143,Washington County,AR,68.75,60% - 69.9%
05145,White County,AR,38.29,30% - 39.9%
05147,Woodruff County,AR,47.16,40% - 49.9%
05149,Yell County,AR,48.3,40% - 49.9%
04001,Apache County,AZ,99.99,70% or More
04003,Cochise County,AZ,74.89,70% or More
04005,Coconino County,AZ,99.99,70% or More
04007,Gila County,AZ,50,50% - 59.9%
04009,Graham County,AZ,56.24,50% - 59.9%
04011,Greenlee County,AZ,29.7,20% - 29.9%
04012,La Paz County,AZ,62.19,60% - 69.9%
04013,Maricopa County,AZ,53.84,50% - 59.9%
04015,Mohave County,AZ,21.79,20% - 29.9%
04017,Navajo County,AZ,99.99,70% or More
04019,Pima County,AZ,71.56,70% or More
04021,Pinal County,AZ,46.57,40% - 49.9%
04023,Santa Cruz County,AZ,99.99,70% or More
04025,Yavapai County,AZ,27.9,20% - 29.9%
04027,Yuma County,AZ,84.7,70% or More
06001,Alameda County,CA,96.69,70% or More
06003,Alpine County,CA,0,No Data
06005,Amador County,CA,52.34,50% - 59.9%
06007,Butte County,CA,43.08,40% - 49.9%
06009,Calaveras County,CA,46.21,40% - 49.9%
06011,Colusa County,CA,48.69,40% - 49.9%
06013,Contra Costa County,CA,88.29,70% or More
06015,Del Norte County,CA,35.33,30% - 39.9%
06017,El Dorado County,CA,55,50% - 59.9%
06019,Fresno County,CA,59.34,50% - 59.9%
06021,Glenn County,CA,46.92,40% - 49.9%
06023,Humboldt County,CA,67.9,60% - 69.9%
06025,Imperial County,CA,99.99,70% or More
06027,Inyo County,CA,0,No Data
06029,Kern County,CA,53.02,50% - 59.9%
06031,Kings County,CA,48.71,40% - 49.9%
06033,Lake County,CA,44.78,40% - 49.9%
06035,Lassen County,CA,21.66,20% - 29.9%
06037,Los Angeles County,CA,84.51,70% or More
06039,Madera County,CA,54.47,50% - 59.9%
06041,Marin County,CA,99.99,70% or More
06043,Mariposa County,CA,0,No Data
06045,Mendocino County,CA,60.57,60% - 69.9%
06047,Merced County,CA,55.46,50% - 59.9%
06049,Modoc County,CA,0,No Data
06051,Mono County,CA,0,No Data
06053,Monterey County,CA,78.63,70% or More
06055,Napa County,CA,85.2,70% or More
06057,Nevada County,CA,59.26,50% - 59.9%
06059,Orange County,CA,75.05,70% or More
06061,Placer County,CA,60.42,60% - 69.9%
06063,Plumas County,CA,0,No Data
06065,Riverside County,CA,56.33,50% - 59.9%
06067,Sacramento County,CA,67.5,60% - 69.9%
06069,San Benito County,CA,69.89,60% - 69.9%
06071,San Bernardino County,CA,53.59,50% - 59.9%
06073,San Diego County,CA,99.99,70% or More
06075,San Francisco County,CA,99.99,70% or More
06077,San Joaquin County,CA,63.97,60% - 69.9%
06079,San Luis Obispo County,CA,64.59,60% - 69.9%
06081,San Mateo County,CA,96.53,70% or More
06083,Santa Barbara County,CA,73.94,70% or More
06085,Santa Clara County,CA,93.97,70% or More
06087,Santa Cruz County,CA,94.82,70% or More
06089,Shasta County,CA,32.94,30% - 39.9%
06091,Sierra County,CA,0,No Data
06093,Siskiyou County,CA,31.4,30% - 39.9%
06095,Solano County,CA,72.68,70% or More
06097,Sonoma County,CA,82.99,70% or More
06099,Stanislaus County,CA,61.79,60% - 69.9%
06101,Sutter County,CA,52.75,50% - 59.9%
06103,Tehama County,CA,28.55,20% - 29.9%
06105,Trinity County,CA,0,No Data
06107,Tulare County,CA,48.81,40% - 49.9%
06109,Tuolumne County,CA,41.79,40% - 49.9%
06111,Ventura County,CA,72.48,70% or More
06113,Yolo County,CA,76.78,70% or More
06115,Yuba County,CA,43.73,40% - 49.9%
08001,Adams County,CO,65.08,60% - 69.9%
08003,Alamosa County,CO,54.84,50% - 59.9%
08005,Arapahoe County,CO,67.65,60% - 69.9%
08007,Archuleta County,CO,37.97,30% - 39.9%
08009,Baca County,CO,15.77,0% - 19.9%
08011,Bent County,CO,29.08,20% - 29.9%
08013,Boulder County,CO,80.5,70% or More
08014,Broomfield County,CO,81.91,70% or More
08015,Chaffee County,CO,51.64,50% - 59.9%
08019,Clear Creek County,CO,49.8,40% - 49.9%
08021,Conejos County,CO,43.62,40% - 49.9%
08025,Crowley County,CO,21.4,20% - 29.9%
08027,Custer County,CO,19.48,0% - 19.9%
08029,Delta County,CO,25.45,20% - 29.9%
08031,Denver County,CO,79.16,70% or More
08033,Dolores County,CO,15.54,0% - 19.9%
08035,Douglas County,CO,69.32,60% - 69.9%
08037,Eagle County,CO,86.79,70% or More
08041,El Paso County,CO,54.31,50% - 59.9%
08039,Elbert County,CO,24.91,20% - 29.9%
08043,Fremont County,CO,20.99,20% - 29.9%
08045,Garfield County,CO,62.95,60% - 69.9%
08047,Gilpin County,CO,50,50% - 59.9%
08049,Grand County,CO,46.08,40% - 49.9%
08051,Gunnison County,CO,68.72,60% - 69.9%
08055,Huerfano County,CO,26.53,20% - 29.9%
08059,Jefferson County,CO,75.43,70% or More
08061,Kiowa County,CO,18.18,0% - 19.9%
08063,Kit Carson County,CO,19.16,0% - 19.9%
08067,La Plata County,CO,71.46,70% or More
08065,Lake County,CO,63.07,60% - 69.9%
08069,Larimer County,CO,63.98,60% - 69.9%
08071,Las Animas County,CO,46.26,40% - 49.9%
08075,Logan County,CO,24.32,20% - 29.9%
08077,Mesa County,CO,35.08,30% - 39.9%
08079,Mineral County,CO,38.24,30% - 39.9%
08081,Moffat County,CO,26.68,20% - 29.9%
08083,Montezuma County,CO,53.79,50% - 59.9%
08085,Montrose County,CO,32.45,30% - 39.9%
08087,Morgan County,CO,33.22,30% - 39.9%
08089,Otero County,CO,27.61,20% - 29.9%
08091,Ouray County,CO,58.09,50% - 59.9%
08093,Park County,CO,37.02,30% - 39.9%
08095,Phillips County,CO,19.06,0% - 19.9%
08097,Pitkin County,CO,92.73,70% or More
08099,Prowers County,CO,28.92,20% - 29.9%
08101,Pueblo County,CO,46.51,40% - 49.9%
08103,Rio Blanco County,CO,25.05,20% - 29.9%
08105,Rio Grande County,CO,55.15,50% - 59.9%
08107,Routt County,CO,82.99,70% or More
08109,Saguache County,CO,19.93,0% - 19.9%
08111,San Juan County,CO,99.99,70% or More
08113,San Miguel County,CO,99.99,70% or More
08115,Sedgwick County,CO,19.88,0% - 19.9%
08117,Summit County,CO,92.09,70% or More
08119,Teller County,CO,37.95,30% - 39.9%
08121,Washington County,CO,11.08,0% - 19.9%
08123,Weld County,CO,53.76,50% - 59.9%
08125,Yuma County,CO,22.82,20% - 29.9%
09001,Fairfield County,CT,91.95,70% or More
09003,Hartford County,CT,74.68,70% or More
09005,Litchfield County,CT,73.14,70% or More
09007,Middlesex County,CT,81.54,70% or More
09009,New Haven County,CT,80.16,70% or More
09011,New London County,CT,75.04,70% or More
09013,Tolland County,CT,67.94,60% - 69.9%
09015,Windham County,CT,61.02,60% - 69.9%
11001,District of Columbia,DC,84.06,70% or More
10001,Kent County,DE,48.47,40% - 49.9%
10003,New Castle County,DE,71.72,70% or More
10005,Sussex County,DE,49.13,40% - 49.9%
12001,Alachua County,FL,69.86,60% - 69.9%
12003,Baker County,FL,19.37,0% - 19.9%
12005,Bay County,FL,32.77,30% - 39.9%
12007,Bradford County,FL,27.25,20% - 29.9%
12009,Brevard County,FL,49.6,40% - 49.9%
12011,Broward County,FL,73.98,70% or More
12013,Calhoun County,FL,18.89,0% - 19.9%
12015,Charlotte County,FL,39.34,30% - 39.9%
12017,Citrus County,FL,28.67,20% - 29.9%
12019,Clay County,FL,42.69,40% - 49.9%
12021,Collier County,FL,50.79,50% - 59.9%
12023,Columbia County,FL,29.67,20% - 29.9%
12027,DeSoto County,FL,38.09,30% - 39.9%
12029,Dixie County,FL,18.76,0% - 19.9%
12031,Duval County,FL,53.48,50% - 59.9%
12033,Escambia County,FL,35.91,30% - 39.9%
12035,Flagler County,FL,43.48,40% - 49.9%
12037,Franklin County,FL,28.96,20% - 29.9%
12039,Gadsden County,FL,52.19,50% - 59.9%
12041,Gilchrist County,FL,24.94,20% - 29.9%
12043,Glades County,FL,30.6,30% - 39.9%
12045,Gulf County,FL,27.93,20% - 29.9%
12047,Hamilton County,FL,25.11,20% - 29.9%
12049,Hardee County,FL,28.18,20% - 29.9%
12051,Hendry County,FL,38.57,30% - 39.9%
12053,Hernando County,FL,38.17,30% - 39.9%
12055,Highlands County,FL,31.06,30% - 39.9%
12057,Hillsborough County,FL,58.66,50% - 59.9%
12059,Holmes County,FL,12.15,0% - 19.9%
12061,Indian River County,FL,46.78,40% - 49.9%
12063,Jackson County,FL,19.68,0% - 19.9%
12065,Jefferson County,FL,40.6,40% - 49.9%
12067,Lafayette County,FL,21,20% - 29.9%
12069,Lake County,FL,52.9,50% - 59.9%
12071,Lee County,FL,45.02,40% - 49.9%
12073,Leon County,FL,59.83,50% - 59.9%
12075,Levy County,FL,30.48,30% - 39.9%
12077,Liberty County,FL,20.18,20% - 29.9%
12079,Madison County,FL,37.85,30% - 39.9%
12081,Manatee County,FL,48.88,40% - 49.9%
12083,Marion County,FL,42.52,40% - 49.9%
12085,Martin County,FL,48.01,40% - 49.9%
12086,Miami-Dade County,FL,91.5,70% or More
12087,Monroe County,FL,61.55,60% - 69.9%
12089,Nassau County,FL,38.43,30% - 39.9%
12091,Okaloosa County,FL,43.08,40% - 49.9%
12093,Okeechobee County,FL,30.14,30% - 39.9%
12095,Orange County,FL,77.97,70% or More
12097,Osceola County,FL,82.62,70% or More
12099,Palm Beach County,FL,60.75,60% - 69.9%
12101,Pasco County,FL,49.01,40% - 49.9%
12103,Pinellas County,FL,50.19,50% - 59.9%
12105,Polk County,FL,46.78,40% - 49.9%
12107,Putnam County,FL,28.97,20% - 29.9%
12113,Santa Rosa County,FL,37.38,30% - 39.9%
12115,Sarasota County,FL,53.24,50% - 59.9%
12117,Seminole County,FL,62.67,60% - 69.9%
12109,St. Johns County,FL,63.39,60% - 69.9%
12111,St. Lucie County,FL,49.86,40% - 49.9%
12119,Sumter County,FL,34.9,30% - 39.9%
12121,Suwannee County,FL,21.27,20% - 29.9%
12123,Taylor County,FL,23.08,20% - 29.9%
12125,Union County,FL,23.26,20% - 29.9%
12127,Volusia County,FL,45.26,40% - 49.9%
12129,Wakulla County,FL,34.3,30% - 39.9%
12131,Walton County,FL,29.73,20% - 29.9%
12133,Washington County,FL,14.09,0% - 19.9%
13001,Appling County,GA,14.04,0% - 19.9%
13007,Baker County,GA,33.17,30% - 39.9%
13021,Bibb County,GA,34.39,30% - 39.9%
13025,Brantley County,GA,10.86,0% - 19.9%
13027,Brooks County,GA,28.53,20% - 29.9%
13029,Bryan County,GA,36.95,30% - 39.9%
13031,Bulloch County,GA,32.53,30% - 39.9%
13033,Burke County,GA,38.41,30% - 39.9%
13039,Camden County,GA,41.22,40% - 49.9%
13045,Carroll County,GA,23.47,20% - 29.9%
13047,Catoosa County,GA,25.92,20% - 29.9%
13049,Charlton County,GA,17.77,0% - 19.9%
13051,Chatham County,GA,50.47,50% - 59.9%
13053,Chattahoochee County,GA,99.99,70% or More
13057,Cherokee County,GA,31.54,30% - 39.9%
13061,Clay County,GA,44.16,40% - 49.9%
13063,Clayton County,GA,36.65,30% - 39.9%
13065,Clinch County,GA,16.88,0% - 19.9%
13067,Cobb County,GA,51.43,50% - 59.9%
13069,Coffee County,GA,26.43,20% - 29.9%
13071,Colquitt County,GA,26.02,20% - 29.9%
13073,Columbia County,GA,29.38,20% - 29.9%
13075,Cook County,GA,21.4,20% - 29.9%
13077,Coweta County,GA,28.62,20% - 29.9%
13079,Crawford County,GA,13.85,0% - 19.9%
13083,Dade County,GA,30.39,30% - 39.9%
13085,Dawson County,GA,14.73,0% - 19.9%
13087,Decatur County,GA,32.84,30% - 39.9%
13089,DeKalb County,GA,50.4,50% - 59.9%
13093,Dooly County,GA,34.15,30% - 39.9%
13097,Douglas County,GA,36.98,30% - 39.9%
13101,Echols County,GA,14.58,0% - 19.9%
13103,Effingham County,GA,26.71,20% - 29.9%
13107,Emanuel County,GA,19.24,0% - 19.9%
13111,Fannin County,GA,15.26,0% - 19.9%
13113,Fayette County,GA,26.76,20% - 29.9%
13121,Fulton County,GA,44.58,40% - 49.9%
13127,Glynn County,GA,36.44,30% - 39.9%
13133,Greene County,GA,28.28,20% - 29.9%
13135,Gwinnett County,GA,42.55,40% - 49.9%
13139,Hall County,GA,35.03,30% - 39.9%
13147,Hart County,GA,14.76,0% - 19.9%
13153,Houston County,GA,35.26,30% - 39.9%
13157,Jackson County,GA,22.08,20% - 29.9%
13159,Jasper County,GA,16.23,0% - 19.9%
13167,Johnson County,GA,19.45,0% - 19.9%
13169,Jones County,GA,27.11,20% - 29.9%
13175,Laurens County,GA,29.55,20% - 29.9%
13179,Liberty County,GA,44.62,40% - 49.9%
13183,Long County,GA,14.15,0% - 19.9%
13185,Lowndes County,GA,30.23,30% - 39.9%
13197,Marion County,GA,24.48,20% - 29.9%
13191,McIntosh County,GA,27.35,20% - 29.9%
13199,Meriwether County,GA,23.92,20% - 29.9%
13209,Montgomery County,GA,21.59,20% - 29.9%
13215,Muscogee County,GA,39.81,30% - 39.9%
13217,Newton County,GA,28.56,20% - 29.9%
13221,Oglethorpe County,GA,26.82,20% - 29.9%
13223,Paulding County,GA,26.6,20% - 29.9%
13229,Pierce County,GA,12.78,0% - 19.9%
13235,Pulaski County,GA,26.64,20% - 29.9%
13239,Quitman County,GA,11.11,0% - 19.9%
13241,Rabun County,GA,27.32,20% - 29.9%
13243,Randolph County,GA,45.66,40% - 49.9%
13245,Richmond County,GA,38.14,30% - 39.9%
13251,Screven County,GA,37.38,30% - 39.9%
13259,Stewart County,GA,38.36,30% - 39.9%
13261,Sumter County,GA,42.29,40% - 49.9%
13271,Telfair County,GA,22.73,20% - 29.9%
13277,Tift County,GA,32.07,30% - 39.9%
13293,Upson County,GA,25.85,20% - 29.9%
13295,Walker County,GA,19.67,0% - 19.9%
13297,Walton County,GA,21.2,20% - 29.9%
13299,Ware County,GA,16.05,0% - 19.9%
13301,Warren County,GA,31.98,30% - 39.9%
13303,Washington County,GA,33.33,30% - 39.9%
13305,Wayne County,GA,18.21,0% - 19.9%
13309,Wheeler County,GA,24.52,20% - 29.9%
13319,Wilkinson County,GA,35.04,30% - 39.9%
15001,Hawaii County,HI,81.14,70% or More
15003,Honolulu County,HI,81.14,70% or More
15005,Kalawao County,HI,81.14,70% or More
15007,Kauai County,HI,81.14,70% or More
15009,Maui County,HI,81.14,70% or More
19001,Adair County,IA,33.78,30% - 39.9%
19003,Adams County,IA,24.71,20% - 29.9%
19005,Allamakee County,IA,33.52,30% - 39.9%
19007,Appanoose County,IA,22.67,20% - 29.9%
19009,Audubon County,IA,37.63,30% - 39.9%
19011,Benton County,IA,41.98,40% - 49.9%
19013,Black Hawk County,IA,52.15,50% - 59.9%
19015,Boone County,IA,58.12,50% - 59.9%
19017,Bremer County,IA,47.96,40% - 49.9%
19019,Buchanan County,IA,33.7,30% - 39.9%
19021,Buena Vista County,IA,44.25,40% - 49.9%
19023,Butler County,IA,36.99,30% - 39.9%
19025,Calhoun County,IA,27.88,20% - 29.9%
19027,Carroll County,IA,34.54,30% - 39.9%
19029,Cass County,IA,34.01,30% - 39.9%
19031,Cedar County,IA,48.72,40% - 49.9%
19033,Cerro Gordo County,IA,50.35,50% - 59.9%
19035,Cherokee County,IA,23.7,20% - 29.9%
19037,Chickasaw County,IA,28.07,20% - 29.9%
19039,Clarke County,IA,40.36,40% - 49.9%
19041,Clay County,IA,34.9,30% - 39.9%
19043,Clayton County,IA,20.71,20% - 29.9%
19045,Clinton County,IA,35.75,30% - 39.9%
19047,Crawford County,IA,40.07,40% - 49.9%
19049,Dallas County,IA,67.68,60% - 69.9%
19051,Davis County,IA,17.54,0% - 19.9%
19053,Decatur County,IA,18.76,0% - 19.9%
19055,Delaware County,IA,26.43,20% - 29.9%
19057,Des Moines County,IA,29.44,20% - 29.9%
19059,Dickinson County,IA,36.4,30% - 39.9%
19061,Dubuque County,IA,51.85,50% - 59.9%
19063,Emmet County,IA,27.75,20% - 29.9%
19065,Fayette County,IA,35.73,30% - 39.9%
19067,Floyd County,IA,34.94,30% - 39.9%
19069,Franklin County,IA,39.12,30% - 39.9%
19071,Fremont County,IA,27.1,20% - 29.9%
19073,Greene County,IA,39.03,30% - 39.9%
19075,Grundy County,IA,47.48,40% - 49.9%
19077,Guthrie County,IA,37.93,30% - 39.9%
19079,Hamilton County,IA,46.27,40% - 49.9%
19081,Hancock County,IA,23.62,20% - 29.9%
19083,Hardin County,IA,33.97,30% - 39.9%
19085,Harrison County,IA,35.64,30% - 39.9%
19087,Henry County,IA,33.92,30% - 39.9%
19089,Howard County,IA,31.08,30% - 39.9%
19091,Humboldt County,IA,23.8,20% - 29.9%
19093,Ida County,IA,22.2,20% - 29.9%
19095,Iowa County,IA,45.56,40% - 49.9%
19097,Jackson County,IA,26.09,20% - 29.9%
19099,Jasper County,IA,42,40% - 49.9%
19101,Jefferson County,IA,39.94,30% - 39.9%
19103,Johnson County,IA,79.22,70% or More
19105,Jones County,IA,38.31,30% - 39.9%
19107,Keokuk County,IA,17.38,0% - 19.9%
19109,Kossuth County,IA,25.11,20% - 29.9%
19111,Lee County,IA,28.18,20% - 29.9%
19113,Linn County,IA,63,60% - 69.9%
19115,Louisa County,IA,30.92,30% - 39.9%
19117,Lucas County,IA,20.76,20% - 29.9%
19119,Lyon County,IA,16.77,0% - 19.9%
19121,Madison County,IA,39.71,30% - 39.9%
19123,Mahaska County,IA,20.96,20% - 29.9%
19125,Marion County,IA,35.59,30% - 39.9%
19127,Marshall County,IA,57.51,50% - 59.9%
19129,Mills County,IA,47.88,40% - 49.9%
19131,Mitchell County,IA,30.18,30% - 39.9%
19133,Monona County,IA,28.55,20% - 29.9%
19135,Monroe County,IA,20.03,20% - 29.9%
19137,Montgomery County,IA,36.49,30% - 39.9%
19139,Muscatine County,IA,48.82,40% - 49.9%
19141,O'Brien County,IA,26.41,20% - 29.9%
19143,Osceola County,IA,19.03,0% - 19.9%
19145,Page County,IA,34.56,30% - 39.9%
19147,Palo Alto County,IA,26.5,20% - 29.9%
19149,Plymouth County,IA,31.87,30% - 39.9%
19151,Pocahontas County,IA,21.14,20% - 29.9%
19153,Polk County,IA,66.37,60% - 69.9%
19155,Pottawattamie County,IA,52.68,50% - 59.9%
19157,Poweshiek County,IA,44.03,40% - 49.9%
19159,Ringgold County,IA,27.27,20% - 29.9%
19161,Sac County,IA,19.31,0% - 19.9%
19163,Scott County,IA,52.4,50% - 59.9%
19165,Shelby County,IA,33.82,30% - 39.9%
19167,Sioux County,IA,18.53,0% - 19.9%
19169,Story County,IA,72.12,70% or More
19171,Tama County,IA,53.62,50% - 59.9%
19173,Taylor County,IA,20.65,20% - 29.9%
19175,Union County,IA,31.13,30% - 39.9%
19177,Van Buren County,IA,14.53,0% - 19.9%
19179,Wapello County,IA,31.23,30% - 39.9%
19181,Warren County,IA,51.84,50% - 59.9%
19183,Washington County,IA,41.22,40% - 49.9%
19185,Wayne County,IA,16.42,0% - 19.9%
19187,Webster County,IA,37.47,30% - 39.9%
19189,Winnebago County,IA,29.68,20% - 29.9%
19191,Winneshiek County,IA,50.07,50% - 59.9%
19193,Woodbury County,IA,45.4,40% - 49.9%
19195,Worth County,IA,33.33,30% - 39.9%
19197,Wright County,IA,40.76,40% - 49.9%
16001,Ada County,ID,0,No Data
16003,Adams County,ID,0,No Data
16005,Bannock County,ID,0,No Data
16007,Bear Lake County,ID,0,No Data
16009,Benewah County,ID,0,No Data
16011,Bingham County,ID,0,No Data
16013,Blaine County,ID,0,No Data
16015,Boise County,ID,0,No Data
16017,Bonner County,ID,0,No Data
16019,Bonneville County,ID,0,No Data
16021,Boundary County,ID,0,No Data
16023,Butte County,ID,0,No Data
16025,Camas County,ID,0,No Data
16027,Canyon County,ID,0,No Data
16029,Caribou County,ID,0,No Data
16031,Cassia County,ID,0,No Data
16033,Clark County,ID,0,No Data
16035,Clearwater County,ID,0,No Data
16037,Custer County,ID,0,No Data
16039,Elmore County,ID,0,No Data
16041,Franklin County,ID,0,No Data
16043,Fremont County,ID,0,No Data
16045,Gem County,ID,0,No Data
16047,Gooding County,ID,0,No Data
16049,Idaho County,ID,0,No Data
16051,Jefferson County,ID,0,No Data
16053,Jerome County,ID,0,No Data
16055,Kootenai County,ID,0,No Data
16057,Latah County,ID,0,No Data
16059,Lemhi County,ID,0,No Data
16061,Lewis County,ID,0,No Data
16063,Lincoln County,ID,0,No Data
16065,Madison County,ID,0,No Data
16067,Minidoka County,ID,0,No Data
16069,Nez Perce County,ID,0,No Data
16071,Oneida County,ID,0,No Data
16073,Owyhee County,ID,0,No Data
16075,Payette County,ID,0,No Data
16077,Power County,ID,0,No Data
16079,Shoshone County,ID,0,No Data
16081,Teton County,ID,0,No Data
16083,Twin Falls County,ID,0,No Data
NA,Unknown County,ID,0,No Data
16085,Valley County,ID,0,No Data
16087,Washington County,ID,0,No Data
17001,Adams County,IL,30.99,30% - 39.9%
17003,Alexander County,IL,11.97,0% - 19.9%
17005,Bond County,IL,34.76,30% - 39.9%
17007,Boone County,IL,51.62,50% - 59.9%
17009,Brown County,IL,24.86,20% - 29.9%
17011,Bureau County,IL,44.94,40% - 49.9%
17013,Calhoun County,IL,25.36,20% - 29.9%
17015,Carroll County,IL,28.44,20% - 29.9%
17017,Cass County,IL,47.27,40% - 49.9%
17019,Champaign County,IL,68.08,60% - 69.9%
17021,Christian County,IL,27.12,20% - 29.9%
17023,Clark County,IL,31.55,30% - 39.9%
17025,Clay County,IL,15.28,0% - 19.9%
17027,Clinton County,IL,43.04,40% - 49.9%
17029,Coles County,IL,33.99,30% - 39.9%
17031,Cook County,IL,73.67,70% or More
17033,Crawford County,IL,30.6,30% - 39.9%
17035,Cumberland County,IL,16.34,0% - 19.9%
17039,De Witt County,IL,35.62,30% - 39.9%
17037,DeKalb County,IL,53.64,50% - 59.9%
17041,Douglas County,IL,32.53,30% - 39.9%
17043,DuPage County,IL,77.63,70% or More
17045,Edgar County,IL,26.39,20% - 29.9%
17047,Edwards County,IL,14.9,0% - 19.9%
17049,Effingham County,IL,25.75,20% - 29.9%
17051,Fayette County,IL,17.38,0% - 19.9%
17053,Ford County,IL,43.33,40% - 49.9%
17055,Franklin County,IL,24.09,20% - 29.9%
17057,Fulton County,IL,39.61,30% - 39.9%
17059,Gallatin County,IL,34.08,30% - 39.9%
17061,Greene County,IL,22.34,20% - 29.9%
17063,Grundy County,IL,46.46,40% - 49.9%
17065,Hamilton County,IL,13.57,0% - 19.9%
17067,Hancock County,IL,24.29,20% - 29.9%
17069,Hardin County,IL,11.33,0% - 19.9%
17071,Henderson County,IL,21.09,20% - 29.9%
17073,Henry County,IL,49.87,40% - 49.9%
17075,Iroquois County,IL,28.71,20% - 29.9%
17077,Jackson County,IL,46.49,40% - 49.9%
17079,Jasper County,IL,15.47,0% - 19.9%
17081,Jefferson County,IL,27.26,20% - 29.9%
17083,Jersey County,IL,36.22,30% - 39.9%
17085,Jo Daviess County,IL,49.97,40% - 49.9%
17087,Johnson County,IL,19.48,0% - 19.9%
17089,Kane County,IL,63.79,60% - 69.9%
17091,Kankakee County,IL,35.93,30% - 39.9%
17093,Kendall County,IL,67.97,60% - 69.9%
17095,Knox County,IL,41.02,40% - 49.9%
17097,Lake County,IL,81.55,70% or More
17099,LaSalle County,IL,46.19,40% - 49.9%
17101,Lawrence County,IL,19.39,0% - 19.9%
17103,Lee County,IL,44.16,40% - 49.9%
17105,Livingston County,IL,30.43,30% - 39.9%
17107,Logan County,IL,36.76,30% - 39.9%
17115,Macon County,IL,35.34,30% - 39.9%
17117,Macoupin County,IL,36.91,30% - 39.9%
17119,Madison County,IL,52.14,50% - 59.9%
17121,Marion County,IL,23.1,20% - 29.9%
17123,Marshall County,IL,42.16,40% - 49.9%
17125,Mason County,IL,26.73,20% - 29.9%
17127,Massac County,IL,15.97,0% - 19.9%
17109,McDonough County,IL,48.29,40% - 49.9%
17111,McHenry County,IL,59.54,50% - 59.9%
17113,McLean County,IL,67.19,60% - 69.9%
17129,Menard County,IL,41.18,40% - 49.9%
17131,Mercer County,IL,45.33,40% - 49.9%
17133,Monroe County,IL,52.46,50% - 59.9%
17135,Montgomery County,IL,34.69,30% - 39.9%
17137,Morgan County,IL,41.2,40% - 49.9%
17139,Moultrie County,IL,20.26,20% - 29.9%
17141,Ogle County,IL,45.17,40% - 49.9%
17143,Peoria County,IL,51.88,50% - 59.9%
17145,Perry County,IL,25.03,20% - 29.9%
17147,Piatt County,IL,51.08,50% - 59.9%
17149,Pike County,IL,17,0% - 19.9%
17151,Pope County,IL,19.11,0% - 19.9%
17153,Pulaski County,IL,24.24,20% - 29.9%
17155,Putnam County,IL,39.44,30% - 39.9%
17157,Randolph County,IL,30.29,30% - 39.9%
17159,Richland County,IL,26.41,20% - 29.9%
17161,Rock Island County,IL,53.78,50% - 59.9%
17165,Saline County,IL,26.27,20% - 29.9%
17167,Sangamon County,IL,55.02,50% - 59.9%
17169,Schuyler County,IL,33.26,30% - 39.9%
17171,Scott County,IL,18.27,0% - 19.9%
17173,Shelby County,IL,16.69,0% - 19.9%
17163,St. Clair County,IL,55.01,50% - 59.9%
17175,Stark County,IL,31.57,30% - 39.9%
17177,Stephenson County,IL,38.22,30% - 39.9%
17179,Tazewell County,IL,45.9,40% - 49.9%
17181,Union County,IL,34.69,30% - 39.9%
17183,Vermilion County,IL,21.81,20% - 29.9%
17185,Wabash County,IL,24.74,20% - 29.9%
17187,Warren County,IL,37.27,30% - 39.9%
17189,Washington County,IL,42.4,40% - 49.9%
17191,Wayne County,IL,16.99,0% - 19.9%
17193,White County,IL,23.06,20% - 29.9%
17195,Whiteside County,IL,47.03,40% - 49.9%
17197,Will County,IL,65.32,60% - 69.9%
17199,Williamson County,IL,37.71,30% - 39.9%
17201,Winnebago County,IL,45.23,40% - 49.9%
17203,Woodford County,IL,38.79,30% - 39.9%
18001,Adams County,IN,13.41,0% - 19.9%
18003,Allen County,IN,42.32,40% - 49.9%
18005,Bartholomew County,IN,52.19,50% - 59.9%
18007,Benton County,IN,26.28,20% - 29.9%
18009,Blackford County,IN,23.63,20% - 29.9%
18011,Boone County,IN,72.39,70% or More
18013,Brown County,IN,29.75,20% - 29.9%
18015,Carroll County,IN,16.59,0% - 19.9%
18017,Cass County,IN,32.26,30% - 39.9%
18019,Clark County,IN,52.54,50% - 59.9%
18021,Clay County,IN,33.06,30% - 39.9%
18023,Clinton County,IN,32.27,30% - 39.9%
18025,Crawford County,IN,21.92,20% - 29.9%
18027,Daviess County,IN,14.37,0% - 19.9%
18029,Dearborn County,IN,34.05,30% - 39.9%
18031,Decatur County,IN,26.36,20% - 29.9%
18033,DeKalb County,IN,25.01,20% - 29.9%
18035,Delaware County,IN,38.25,30% - 39.9%
18037,Dubois County,IN,35.53,30% - 39.9%
18039,Elkhart County,IN,32.56,30% - 39.9%
18041,Fayette County,IN,16.88,0% - 19.9%
18043,Floyd County,IN,50.18,50% - 59.9%
18045,Fountain County,IN,24.01,20% - 29.9%
18047,Franklin County,IN,18.47,0% - 19.9%
18049,Fulton County,IN,19.11,0% - 19.9%
18051,Gibson County,IN,31.54,30% - 39.9%
18053,Grant County,IN,23.37,20% - 29.9%
18055,Greene County,IN,25.4,20% - 29.9%
18057,Hamilton County,IN,69.79,60% - 69.9%
18059,Hancock County,IN,59.71,50% - 59.9%
18061,Harrison County,IN,38.19,30% - 39.9%
18063,Hendricks County,IN,66.87,60% - 69.9%
18065,Henry County,IN,31.54,30% - 39.9%
18067,Howard County,IN,30.26,30% - 39.9%
18069,Huntington County,IN,30.83,30% - 39.9%
18071,Jackson County,IN,42.73,40% - 49.9%
18073,Jasper County,IN,30.54,30% - 39.9%
18075,Jay County,IN,18.24,0% - 19.9%
18077,Jefferson County,IN,36.41,30% - 39.9%
18079,Jennings County,IN,25.23,20% - 29.9%
18081,Johnson County,IN,47.24,40% - 49.9%
18083,Knox County,IN,29.61,20% - 29.9%
18085,Kosciusko County,IN,23.9,20% - 29.9%
18087,LaGrange County,IN,7.83,0% - 19.9%
18089,Lake County,IN,45.96,40% - 49.9%
18091,LaPorte County,IN,41.25,40% - 49.9%
18093,Lawrence County,IN,26.15,20% - 29.9%
18095,Madison County,IN,36.26,30% - 39.9%
18097,Marion County,IN,48.67,40% - 49.9%
18099,Marshall County,IN,37.34,30% - 39.9%
18101,Martin County,IN,20.51,20% - 29.9%
18103,Miami County,IN,19.25,0% - 19.9%
18105,Monroe County,IN,62.07,60% - 69.9%
18107,Montgomery County,IN,29.57,20% - 29.9%
18109,Morgan County,IN,40.1,40% - 49.9%
18111,Newton County,IN,16.07,0% - 19.9%
18113,Noble County,IN,23.88,20% - 29.9%
18115,Ohio County,IN,36.41,30% - 39.9%
18117,Orange County,IN,34.68,30% - 39.9%
18119,Owen County,IN,25.94,20% - 29.9%
18121,Parke County,IN,16.97,0% - 19.9%
18123,Perry County,IN,45.74,40% - 49.9%
18125,Pike County,IN,31.48,30% - 39.9%
18127,Porter County,IN,46.32,40% - 49.9%
18129,Posey County,IN,30.84,30% - 39.9%
18131,Pulaski County,IN,27.33,20% - 29.9%
18133,Putnam County,IN,24.23,20% - 29.9%
18135,Randolph County,IN,21.93,20% - 29.9%
18137,Ripley County,IN,25.31,20% - 29.9%
18139,Rush County,IN,25.71,20% - 29.9%
18143,Scott County,IN,29.11,20% - 29.9%
18145,Shelby County,IN,40.12,40% - 49.9%
18147,Spencer County,IN,28,20% - 29.9%
18141,St. Joseph County,IN,47.57,40% - 49.9%
18149,Starke County,IN,17.46,0% - 19.9%
18151,Steuben County,IN,26.42,20% - 29.9%
18153,Sullivan County,IN,31.96,30% - 39.9%
18155,Switzerland County,IN,11.76,0% - 19.9%
18157,Tippecanoe County,IN,48.21,40% - 49.9%
18159,Tipton County,IN,27.48,20% - 29.9%
18161,Union County,IN,25.46,20% - 29.9%
18163,Vanderburgh County,IN,45.79,40% - 49.9%
18165,Vermillion County,IN,25.68,20% - 29.9%
18167,Vigo County,IN,36.46,30% - 39.9%
18169,Wabash County,IN,19.86,0% - 19.9%
18171,Warren County,IN,31.8,30% - 39.9%
18173,Warrick County,IN,53.13,50% - 59.9%
18175,Washington County,IN,23.71,20% - 29.9%
18177,Wayne County,IN,34.82,30% - 39.9%
18179,Wells County,IN,22.29,20% - 29.9%
18181,White County,IN,33.11,30% - 39.9%
18183,Whitley County,IN,23.66,20% - 29.9%
20001,Allen County,KS,28.08,20% - 29.9%
20003,Anderson County,KS,23.12,20% - 29.9%
20005,Atchison County,KS,38.23,30% - 39.9%
20007,Barber County,KS,16.72,0% - 19.9%
20009,Barton County,KS,24.46,20% - 29.9%
20011,Bourbon County,KS,24.36,20% - 29.9%
20013,Brown County,KS,58.14,50% - 59.9%
20015,Butler County,KS,38,30% - 39.9%
20017,Chase County,KS,29.12,20% - 29.9%
20019,Chautauqua County,KS,12.95,0% - 19.9%
20021,Cherokee County,KS,33.92,30% - 39.9%
20023,Cheyenne County,KS,22.29,20% - 29.9%
20025,Clark County,KS,25.56,20% - 29.9%
20027,Clay County,KS,40.18,40% - 49.9%
20029,Cloud County,KS,28.98,20% - 29.9%
20031,Coffey County,KS,33.76,30% - 39.9%
20033,Comanche County,KS,26.98,20% - 29.9%
20035,Cowley County,KS,35.25,30% - 39.9%
20037,Crawford County,KS,43.33,40% - 49.9%
20039,Decatur County,KS,5.08,0% - 19.9%
20041,Dickinson County,KS,27.92,20% - 29.9%
20043,Doniphan County,KS,28.87,20% - 29.9%
20045,Douglas County,KS,77.66,70% or More
20047,Edwards County,KS,27.43,20% - 29.9%
20049,Elk County,KS,18.14,0% - 19.9%
20051,Ellis County,KS,40.49,40% - 49.9%
20053,Ellsworth County,KS,40.1,40% - 49.9%
20055,Finney County,KS,53.3,50% - 59.9%
20057,Ford County,KS,40.98,40% - 49.9%
20059,Franklin County,KS,34.25,30% - 39.9%
20061,Geary County,KS,72.71,70% or More
20063,Gove County,KS,25.46,20% - 29.9%
20065,Graham County,KS,22.99,20% - 29.9%
20067,Grant County,KS,39.7,30% - 39.9%
20069,Gray County,KS,24.17,20% - 29.9%
20071,Greeley County,KS,28.3,20% - 29.9%
20073,Greenwood County,KS,26,20% - 29.9%
20075,Hamilton County,KS,25.54,20% - 29.9%
20077,Harper County,KS,28.89,20% - 29.9%
20079,Harvey County,KS,38.35,30% - 39.9%
20081,Haskell County,KS,26.25,20% - 29.9%
20083,Hodgeman County,KS,20.28,20% - 29.9%
20085,Jackson County,KS,52.93,50% - 59.9%
20087,Jefferson County,KS,36.85,30% - 39.9%
20089,Jewell County,KS,22.75,20% - 29.9%
20091,Johnson County,KS,79.67,70% or More
20093,Kearny County,KS,35.2,30% - 39.9%
20095,Kingman County,KS,22.47,20% - 29.9%
20097,Kiowa County,KS,28.04,20% - 29.9%
20099,Labette County,KS,41.6,40% - 49.9%
20101,Lane County,KS,18.63,0% - 19.9%
20103,Leavenworth County,KS,50.02,50% - 59.9%
20105,Lincoln County,KS,15.73,0% - 19.9%
20107,Linn County,KS,14.83,0% - 19.9%
20109,Logan County,KS,20.75,20% - 29.9%
20111,Lyon County,KS,53.81,50% - 59.9%
20115,Marion County,KS,36.21,30% - 39.9%
20117,Marshall County,KS,46.34,40% - 49.9%
20113,McPherson County,KS,37.37,30% - 39.9%
20119,Meade County,KS,30.46,30% - 39.9%
20121,Miami County,KS,37.46,30% - 39.9%
20123,Mitchell County,KS,36.82,30% - 39.9%
20125,Montgomery County,KS,31.7,30% - 39.9%
20127,Morris County,KS,51.56,50% - 59.9%
20129,Morton County,KS,30.4,30% - 39.9%
20131,Nemaha County,KS,28.9,20% - 29.9%
20133,Neosho County,KS,25.44,20% - 29.9%
20135,Ness County,KS,41.92,40% - 49.9%
20137,Norton County,KS,22.71,20% - 29.9%
20139,Osage County,KS,32.67,30% - 39.9%
20141,Osborne County,KS,12.86,0% - 19.9%
20143,Ottawa County,KS,22.34,20% - 29.9%
20145,Pawnee County,KS,28.18,20% - 29.9%
20147,Phillips County,KS,14.32,0% - 19.9%
20149,Pottawatomie County,KS,31.82,30% - 39.9%
20151,Pratt County,KS,34.54,30% - 39.9%
20153,Rawlins County,KS,28.14,20% - 29.9%
20155,Reno County,KS,32.1,30% - 39.9%
20157,Republic County,KS,25.99,20% - 29.9%
20159,Rice County,KS,30.03,30% - 39.9%
20161,Riley County,KS,57,50% - 59.9%
20163,Rooks County,KS,24.11,20% - 29.9%
20165,Rush County,KS,22.67,20% - 29.9%
20167,Russell County,KS,23.9,20% - 29.9%
20169,Saline County,KS,41.02,40% - 49.9%
20171,Scott County,KS,34.72,30% - 39.9%
20173,Sedgwick County,KS,50.32,50% - 59.9%
20175,Seward County,KS,39.59,30% - 39.9%
20177,Shawnee County,KS,57.12,50% - 59.9%
20179,Sheridan County,KS,12.39,0% - 19.9%
20181,Sherman County,KS,24.84,20% - 29.9%
20183,Smith County,KS,22.48,20% - 29.9%
20185,Stafford County,KS,27.38,20% - 29.9%
20187,Stanton County,KS,35.03,30% - 39.9%
20189,Stevens County,KS,25.31,20% - 29.9%
20191,Sumner County,KS,27.21,20% - 29.9%
20193,Thomas County,KS,24.86,20% - 29.9%
20195,Trego County,KS,24.71,20% - 29.9%
20197,Wabaunsee County,KS,32.27,30% - 39.9%
20199,Wallace County,KS,17.65,0% - 19.9%
20201,Washington County,KS,33.42,30% - 39.9%
20203,Wichita County,KS,36.31,30% - 39.9%
20205,Wilson County,KS,21.13,20% - 29.9%
20207,Woodson County,KS,21.07,20% - 29.9%
20209,Wyandotte County,KS,66.76,60% - 69.9%
21001,Adair County,KY,23.78,20% - 29.9%
21003,Allen County,KY,23.99,20% - 29.9%
21005,Anderson County,KY,44.42,40% - 49.9%
21007,Ballard County,KY,17.31,0% - 19.9%
21009,Barren County,KY,33.31,30% - 39.9%
21011,Bath County,KY,40.09,40% - 49.9%
21013,Bell County,KY,26.19,20% - 29.9%
21015,Boone County,KY,50.25,50% - 59.9%
21017,Bourbon County,KY,50.32,50% - 59.9%
21019,Boyd County,KY,34.88,30% - 39.9%
21021,Boyle County,KY,44,40% - 49.9%
21023,Bracken County,KY,29.78,20% - 29.9%
21025,Breathitt County,KY,49.94,40% - 49.9%
21027,Breckinridge County,KY,30.73,30% - 39.9%
21029,Bullitt County,KY,33.98,30% - 39.9%
21031,Butler County,KY,26.19,20% - 29.9%
21033,Caldwell County,KY,25.7,20% - 29.9%
21035,Calloway County,KY,38.17,30% - 39.9%
21037,Campbell County,KY,53.44,50% - 59.9%
21039,Carlisle County,KY,14.71,0% - 19.9%
21041,Carroll County,KY,36.3,30% - 39.9%
21043,Carter County,KY,35.14,30% - 39.9%
21045,Casey County,KY,20.07,20% - 29.9%
21049,Clark County,KY,44.8,40% - 49.9%
21051,Clay County,KY,31.4,30% - 39.9%
21053,Clinton County,KY,18.24,0% - 19.9%
21055,Crittenden County,KY,22.53,20% - 29.9%
21057,Cumberland County,KY,25.86,20% - 29.9%
21059,Daviess County,KY,43.48,40% - 49.9%
21061,Edmonson County,KY,28.28,20% - 29.9%
21063,Elliott County,KY,27.49,20% - 29.9%
21065,Estill County,KY,38.59,30% - 39.9%
21067,Fayette County,KY,69.8,60% - 69.9%
21069,Fleming County,KY,34.16,30% - 39.9%
21071,Floyd County,KY,48.24,40% - 49.9%
21073,Franklin County,KY,59.55,50% - 59.9%
21075,Fulton County,KY,24.51,20% - 29.9%
21077,Gallatin County,KY,31.89,30% - 39.9%
21079,Garrard County,KY,29.64,20% - 29.9%
21081,Grant County,KY,30.4,30% - 39.9%
21083,Graves County,KY,26.64,20% - 29.9%
21085,Grayson County,KY,35.24,30% - 39.9%
21087,Green County,KY,20.99,20% - 29.9%
21089,Greenup County,KY,43,40% - 49.9%
21091,Hancock County,KY,44.54,40% - 49.9%
21093,Hardin County,KY,49.9,40% - 49.9%
21095,Harlan County,KY,31.32,30% - 39.9%
21097,Harrison County,KY,32.1,30% - 39.9%
21099,Hart County,KY,16.56,0% - 19.9%
21101,Henderson County,KY,33.54,30% - 39.9%
21103,Henry County,KY,34.03,30% - 39.9%
21105,Hickman County,KY,20.66,20% - 29.9%
21107,Hopkins County,KY,33.68,30% - 39.9%
21109,Jackson County,KY,20.39,20% - 29.9%
21111,Jefferson County,KY,61.07,60% - 69.9%
21113,Jessamine County,KY,48.66,40% - 49.9%
21115,Johnson County,KY,34.68,30% - 39.9%
21117,Kenton County,KY,49.09,40% - 49.9%
21119,Knott County,KY,44.42,40% - 49.9%
21121,Knox County,KY,18.86,0% - 19.9%
21123,Larue County,KY,25.96,20% - 29.9%
21125,Laurel County,KY,26.48,20% - 29.9%
21127,Lawrence County,KY,39.93,30% - 39.9%
21129,Lee County,KY,38.1,30% - 39.9%
21131,Leslie County,KY,34.29,30% - 39.9%
21133,Letcher County,KY,42.64,40% - 49.9%
21135,Lewis County,KY,23.11,20% - 29.9%
21137,Lincoln County,KY,27.8,20% - 29.9%
21139,Livingston County,KY,25.75,20% - 29.9%
21141,Logan County,KY,31.59,30% - 39.9%
21143,Lyon County,KY,37.2,30% - 39.9%
21151,Madison County,KY,43.18,40% - 49.9%
21153,Magoffin County,KY,41.66,40% - 49.9%
21155,Marion County,KY,35.76,30% - 39.9%
21157,Marshall County,KY,30.52,30% - 39.9%
21159,Martin County,KY,37.06,30% - 39.9%
21161,Mason County,KY,34.49,30% - 39.9%
21145,McCracken County,KY,40.16,40% - 49.9%
21147,McCreary County,KY,21.28,20% - 29.9%
21149,McLean County,KY,26.77,20% - 29.9%
21163,Meade County,KY,28.07,20% - 29.9%
21165,Menifee County,KY,25.28,20% - 29.9%
21167,Mercer County,KY,41.31,40% - 49.9%
21169,Metcalfe County,KY,22.99,20% - 29.9%
21171,Monroe County,KY,26.86,20% - 29.9%
21173,Montgomery County,KY,41.77,40% - 49.9%
21175,Morgan County,KY,36.28,30% - 39.9%
21177,Muhlenberg County,KY,35.98,30% - 39.9%
21179,Nelson County,KY,41.7,40% - 49.9%
21181,Nicholas County,KY,32.45,30% - 39.9%
21183,Ohio County,KY,24.37,20% - 29.9%
21185,Oldham County,KY,51.98,50% - 59.9%
21187,Owen County,KY,30.12,30% - 39.9%
21189,Owsley County,KY,37.46,30% - 39.9%
21191,Pendleton County,KY,29.46,20% - 29.9%
21193,Perry County,KY,50.26,50% - 59.9%
21195,Pike County,KY,43.54,40% - 49.9%
21197,Powell County,KY,41.01,40% - 49.9%
21199,Pulaski County,KY,29.73,20% - 29.9%
21201,Robertson County,KY,29.17,20% - 29.9%
21203,Rockcastle County,KY,23.99,20% - 29.9%
21205,Rowan County,KY,51.68,50% - 59.9%
21207,Russell County,KY,27,20% - 29.9%
21209,Scott County,KY,52.84,50% - 59.9%
21211,Shelby County,KY,44.34,40% - 49.9%
21213,Simpson County,KY,33.2,30% - 39.9%
21215,Spencer County,KY,29.95,20% - 29.9%
21217,Taylor County,KY,33.02,30% - 39.9%
21219,Todd County,KY,21.03,20% - 29.9%
21221,Trigg County,KY,24.65,20% - 29.9%
21223,Trimble County,KY,36.07,30% - 39.9%
21225,Union County,KY,23.06,20% - 29.9%
21227,Warren County,KY,38.02,30% - 39.9%
21229,Washington County,KY,35.24,30% - 39.9%
21231,Wayne County,KY,25.89,20% - 29.9%
21233,Webster County,KY,27.69,20% - 29.9%
21235,Whitley County,KY,27.65,20% - 29.9%
21237,Wolfe County,KY,43.07,40% - 49.9%
21239,Woodford County,KY,63.37,60% - 69.9%
22001,Acadia Parish,LA,29.95,20% - 29.9%
22003,Allen Parish,LA,17.39,0% - 19.9%
22005,Ascension Parish,LA,43.03,40% - 49.9%
22007,Assumption Parish,LA,26.74,20% - 29.9%
22009,Avoyelles Parish,LA,36.25,30% - 39.9%
22011,Beauregard Parish,LA,17.28,0% - 19.9%
22013,Bienville Parish,LA,24.59,20% - 29.9%
22015,Bossier Parish,LA,37.66,30% - 39.9%
22017,Caddo Parish,LA,39.82,30% - 39.9%
22019,Calcasieu Parish,LA,29.74,20% - 29.9%
22021,Caldwell Parish,LA,20.59,20% - 29.9%
22023,Cameron Parish,LA,4.33,0% - 19.9%
22025,Catahoula Parish,LA,25.38,20% - 29.9%
22027,Claiborne Parish,LA,31.23,30% - 39.9%
22029,Concordia Parish,LA,35.85,30% - 39.9%
22031,De Soto Parish,LA,27.34,20% - 29.9%
22033,East Baton Rouge Parish,LA,50.68,50% - 59.9%
22035,East Carroll Parish,LA,35.74,30% - 39.9%
22037,East Feliciana Parish,LA,31.11,30% - 39.9%
22039,Evangeline Parish,LA,27.69,20% - 29.9%
22041,Franklin Parish,LA,18.51,0% - 19.9%
22043,Grant Parish,LA,22.17,20% - 29.9%
22045,Iberia Parish,LA,36.56,30% - 39.9%
22047,Iberville Parish,LA,47.55,40% - 49.9%
22049,Jackson Parish,LA,20.35,20% - 29.9%
22053,Jefferson Davis Parish,LA,18.89,0% - 19.9%
22051,Jefferson Parish,LA,65.24,60% - 69.9%
22059,La Salle Parish,LA,17.5,0% - 19.9%
22055,Lafayette Parish,LA,43.6,40% - 49.9%
22057,Lafourche Parish,LA,33.42,30% - 39.9%
22061,Lincoln Parish,LA,36.79,30% - 39.9%
22063,Livingston Parish,LA,27.22,20% - 29.9%
22065,Madison Parish,LA,34.77,30% - 39.9%
22067,Morehouse Parish,LA,30.25,30% - 39.9%
22069,Natchitoches Parish,LA,29.17,20% - 29.9%
22071,Orleans Parish,LA,74.88,70% or More
22073,Ouachita Parish,LA,35.06,30% - 39.9%
22075,Plaquemines Parish,LA,56.28,50% - 59.9%
22077,Pointe Coupee Parish,LA,44.14,40% - 49.9%
22079,Rapides Parish,LA,38.96,30% - 39.9%
22081,Red River Parish,LA,25.53,20% - 29.9%
22083,Richland Parish,LA,24.14,20% - 29.9%
22085,Sabine Parish,LA,15.13,0% - 19.9%
22087,St. Bernard Parish,LA,44.86,40% - 49.9%
22089,St. Charles Parish,LA,50.23,50% - 59.9%
22091,St. Helena Parish,LA,30.97,30% - 39.9%
22093,St. James Parish,LA,46.4,40% - 49.9%
22095,St. John the Baptist Parish,LA,55.82,50% - 59.9%
22097,St. Landry Parish,LA,33.23,30% - 39.9%
22099,St. Martin Parish,LA,31.66,30% - 39.9%
22101,St. Mary Parish,LA,28.93,20% - 29.9%
22103,St. Tammany Parish,LA,40.42,40% - 49.9%
22105,Tangipahoa Parish,LA,36.25,30% - 39.9%
22107,Tensas Parish,LA,42.09,40% - 49.9%
22109,Terrebonne Parish,LA,30.69,30% - 39.9%
22111,Union Parish,LA,32.78,30% - 39.9%
22113,Vermilion Parish,LA,23.5,20% - 29.9%
22115,Vernon Parish,LA,32.8,30% - 39.9%
22117,Washington Parish,LA,25.42,20% - 29.9%
22119,Webster Parish,LA,28.4,20% - 29.9%
22121,West Baton Rouge Parish,LA,48.93,40% - 49.9%
22123,West Carroll Parish,LA,16.08,0% - 19.9%
22125,West Feliciana Parish,LA,68.56,60% - 69.9%
22127,Winn Parish,LA,21.58,20% - 29.9%
25001,Barnstable County,MA,1.26,0% - 19.9%
25003,Berkshire County,MA,71.36,70% or More
25005,Bristol County,MA,65.4,60% - 69.9%
25007,Dukes County,MA,2.49,0% - 19.9%
25009,Essex County,MA,82.51,70% or More
25011,Franklin County,MA,78,70% or More
25013,Hampden County,MA,63.88,60% - 69.9%
25015,Hampshire County,MA,85.44,70% or More
25017,Middlesex County,MA,94.02,70% or More
25019,Nantucket County,MA,1.38,0% - 19.9%
25021,Norfolk County,MA,88.02,70% or More
25023,Plymouth County,MA,70.65,70% or More
25025,Suffolk County,MA,80.83,70% or More
25027,Worcester County,MA,77.93,70% or More
24001,Allegany County,MD,39.9,30% - 39.9%
24003,Anne Arundel County,MD,81.74,70% or More
24510,Baltimore city,MD,59.68,50% - 59.9%
24005,Baltimore County,MD,71.45,70% or More
24009,Calvert County,MD,68.79,60% - 69.9%
24011,Caroline County,MD,41.98,40% - 49.9%
24013,Carroll County,MD,68.96,60% - 69.9%
24015,Cecil County,MD,46.12,40% - 49.9%
24017,Charles County,MD,68.01,60% - 69.9%
24019,Dorchester County,MD,38.51,30% - 39.9%
24021,Frederick County,MD,77.55,70% or More
24023,Garrett County,MD,27.56,20% - 29.9%
24025,Harford County,MD,63.39,60% - 69.9%
24027,Howard County,MD,92.92,70% or More
24029,Kent County,MD,56.62,50% - 59.9%
24031,Montgomery County,MD,99.99,70% or More
24033,Prince George's County,MD,86.06,70% or More
24035,Queen Anne's County,MD,53.18,50% - 59.9%
24039,Somerset County,MD,33.95,30% - 39.9%
24037,St. Mary's County,MD,59.09,50% - 59.9%
24041,Talbot County,MD,66.29,60% - 69.9%
24043,Washington County,MD,45.71,40% - 49.9%
24045,Wicomico County,MD,43.81,40% - 49.9%
24047,Worcester County,MD,52.32,50% - 59.9%
23001,Androscoggin County,ME,62.47,60% - 69.9%
23003,Aroostook County,ME,57.95,50% - 59.9%
23005,Cumberland County,ME,89.13,70% or More
23007,Franklin County,ME,52.91,50% - 59.9%
23009,Hancock County,ME,67.74,60% - 69.9%
23011,Kennebec County,ME,60.1,60% - 69.9%
23013,Knox County,ME,71.4,70% or More
23015,Lincoln County,ME,73.29,70% or More
23017,Oxford County,ME,58.72,50% - 59.9%
23019,Penobscot County,ME,61.83,60% - 69.9%
23021,Piscataquis County,ME,46.32,40% - 49.9%
23023,Sagadahoc County,ME,70.59,70% or More
23025,Somerset County,ME,43.26,40% - 49.9%
23027,Waldo County,ME,58.2,50% - 59.9%
23029,Washington County,ME,54.31,50% - 59.9%
23031,York County,ME,74.91,70% or More
26001,Alcona County,MI,16.24,0% - 19.9%
26003,Alger County,MI,38.18,30% - 39.9%
26005,Allegan County,MI,34.69,30% - 39.9%
26007,Alpena County,MI,25.47,20% - 29.9%
26009,Antrim County,MI,33.61,30% - 39.9%
26011,Arenac County,MI,15.46,0% - 19.9%
26013,Baraga County,MI,21.38,20% - 29.9%
26015,Barry County,MI,31.11,30% - 39.9%
26017,Bay County,MI,35.43,30% - 39.9%
26019,Benzie County,MI,41.23,40% - 49.9%
26021,Berrien County,MI,35.98,30% - 39.9%
26023,Branch County,MI,20.4,20% - 29.9%
26025,Calhoun County,MI,36.3,30% - 39.9%
26027,Cass County,MI,24.84,20% - 29.9%
26029,Charlevoix County,MI,45.8,40% - 49.9%
26031,Cheboygan County,MI,27.86,20% - 29.9%
26033,Chippewa County,MI,62.78,60% - 69.9%
26035,Clare County,MI,21.41,20% - 29.9%
26037,Clinton County,MI,44.66,40% - 49.9%
26039,Crawford County,MI,32.6,30% - 39.9%
26041,Delta County,MI,27.66,20% - 29.9%
26043,Dickinson County,MI,34.11,30% - 39.9%
26045,Eaton County,MI,43.41,40% - 49.9%
26047,Emmet County,MI,55.2,50% - 59.9%
26049,Genesee County,MI,31.19,30% - 39.9%
26051,Gladwin County,MI,18.57,0% - 19.9%
26053,Gogebic County,MI,31.45,30% - 39.9%
26055,Grand Traverse County,MI,57.43,50% - 59.9%
26057,Gratiot County,MI,24.16,20% - 29.9%
26059,Hillsdale County,MI,17.79,0% - 19.9%
26061,Houghton County,MI,30.24,30% - 39.9%
26063,Huron County,MI,23.71,20% - 29.9%
26065,Ingham County,MI,53.53,50% - 59.9%
26067,Ionia County,MI,27.03,20% - 29.9%
26069,Iosco County,MI,24.93,20% - 29.9%
26071,Iron County,MI,24.26,20% - 29.9%
26073,Isabella County,MI,38.57,30% - 39.9%
26075,Jackson County,MI,31.15,30% - 39.9%
26077,Kalamazoo County,MI,53.81,50% - 59.9%
26079,Kalkaska County,MI,24.35,20% - 29.9%
26081,Kent County,MI,47.65,40% - 49.9%
26083,Keweenaw County,MI,20.17,20% - 29.9%
26085,Lake County,MI,18.92,0% - 19.9%
26087,Lapeer County,MI,22.81,20% - 29.9%
26089,Leelanau County,MI,71.88,70% or More
26091,Lenawee County,MI,33.4,30% - 39.9%
26093,Livingston County,MI,41.94,40% - 49.9%
26095,Luce County,MI,25.58,20% - 29.9%
26097,Mackinac County,MI,35.78,30% - 39.9%
26099,Macomb County,MI,35.61,30% - 39.9%
26101,Manistee County,MI,35.95,30% - 39.9%
26103,Marquette County,MI,51.58,50% - 59.9%
26105,Mason County,MI,37.5,30% - 39.9%
26107,Mecosta County,MI,21.52,20% - 29.9%
26109,Menominee County,MI,31.43,30% - 39.9%
26111,Midland County,MI,46.57,40% - 49.9%
26113,Missaukee County,MI,18.01,0% - 19.9%
26115,Monroe County,MI,36.86,30% - 39.9%
26117,Montcalm County,MI,19.94,0% - 19.9%
26119,Montmorency County,MI,21.25,20% - 29.9%
26121,Muskegon County,MI,34.59,30% - 39.9%
26123,Newaygo County,MI,20.87,20% - 29.9%
26125,Oakland County,MI,55.8,50% - 59.9%
26127,Oceana County,MI,29.4,20% - 29.9%
26129,Ogemaw County,MI,15.24,0% - 19.9%
26131,Ontonagon County,MI,27.67,20% - 29.9%
26133,Osceola County,MI,15.96,0% - 19.9%
26135,Oscoda County,MI,12.34,0% - 19.9%
26137,Otsego County,MI,30.72,30% - 39.9%
26139,Ottawa County,MI,45.6,40% - 49.9%
26141,Presque Isle County,MI,19.29,0% - 19.9%
26143,Roscommon County,MI,19.11,0% - 19.9%
26145,Saginaw County,MI,32.46,30% - 39.9%
26151,Sanilac County,MI,16.13,0% - 19.9%
26153,Schoolcraft County,MI,33.27,30% - 39.9%
26155,Shiawassee County,MI,30.79,30% - 39.9%
26147,St. Clair County,MI,25.77,20% - 29.9%
26149,St. Joseph County,MI,25.33,20% - 29.9%
26157,Tuscola County,MI,23.52,20% - 29.9%
26159,Van Buren County,MI,36.58,30% - 39.9%
26161,Washtenaw County,MI,70.09,70% or More
26163,Wayne County,MI,39.19,30% - 39.9%
26165,Wexford County,MI,29.33,20% - 29.9%
27001,Aitkin County,MN,40.28,40% - 49.9%
27003,Anoka County,MN,52.31,50% - 59.9%
27005,Becker County,MN,34.47,30% - 39.9%
27007,Beltrami County,MN,70.21,70% or More
27009,Benton County,MN,35.6,30% - 39.9%
27011,Big Stone County,MN,45.6,40% - 49.9%
27013,Blue Earth County,MN,54.92,50% - 59.9%
27015,Brown County,MN,49.02,40% - 49.9%
27017,Carlton County,MN,49.51,40% - 49.9%
27019,Carver County,MN,61.25,60% - 69.9%
27021,Cass County,MN,43.72,40% - 49.9%
27023,Chippewa County,MN,36.93,30% - 39.9%
27025,Chisago County,MN,39.55,30% - 39.9%
27027,Clay County,MN,65.62,60% - 69.9%
27029,Clearwater County,MN,23.8,20% - 29.9%
27031,Cook County,MN,62.14,60% - 69.9%
27033,Cottonwood County,MN,39.08,30% - 39.9%
27035,Crow Wing County,MN,37.2,30% - 39.9%
27037,Dakota County,MN,64.28,60% - 69.9%
27039,Dodge County,MN,50.15,50% - 59.9%
27041,Douglas County,MN,39.16,30% - 39.9%
27043,Faribault County,MN,36.98,30% - 39.9%
27045,Fillmore County,MN,53.07,50% - 59.9%
27047,Freeborn County,MN,38.35,30% - 39.9%
27049,Goodhue County,MN,53.99,50% - 59.9%
27051,Grant County,MN,38.02,30% - 39.9%
27053,Hennepin County,MN,69.69,60% - 69.9%
27055,Houston County,MN,42.32,40% - 49.9%
27057,Hubbard County,MN,29.33,20% - 29.9%
27059,Isanti County,MN,30.07,30% - 39.9%
27061,Itasca County,MN,38.39,30% - 39.9%
27063,Jackson County,MN,32.11,30% - 39.9%
27065,Kanabec County,MN,31.64,30% - 39.9%
27067,Kandiyohi County,MN,34.7,30% - 39.9%
27069,Kittson County,MN,37.5,30% - 39.9%
27071,Koochiching County,MN,31.8,30% - 39.9%
27073,Lac qui Parle County,MN,43.26,40% - 49.9%
27075,Lake County,MN,55.98,50% - 59.9%
27077,Lake of the Woods County,MN,33.47,30% - 39.9%
27079,Le Sueur County,MN,37.26,30% - 39.9%
27081,Lincoln County,MN,40.18,40% - 49.9%
27083,Lyon County,MN,43.38,40% - 49.9%
27087,Mahnomen County,MN,47.53,40% - 49.9%
27089,Marshall County,MN,35.24,30% - 39.9%
27091,Martin County,MN,32.81,30% - 39.9%
27085,McLeod County,MN,38.05,30% - 39.9%
27093,Meeker County,MN,27.45,20% - 29.9%
27095,Mille Lacs County,MN,39.82,30% - 39.9%
27097,Morrison County,MN,28.84,20% - 29.9%
27099,Mower County,MN,53.62,50% - 59.9%
27101,Murray County,MN,36.81,30% - 39.9%
27103,Nicollet County,MN,61.65,60% - 69.9%
27105,Nobles County,MN,46.19,40% - 49.9%
27107,Norman County,MN,46.25,40% - 49.9%
27109,Olmsted County,MN,72.27,70% or More
27111,Otter Tail County,MN,35.1,30% - 39.9%
27115,Pine County,MN,29.48,20% - 29.9%
27117,Pipestone County,MN,35.35,30% - 39.9%
27119,Polk County,MN,46.25,40% - 49.9%
27121,Pope County,MN,41.98,40% - 49.9%
27123,Ramsey County,MN,70.12,70% or More
27125,Red Lake County,MN,45.97,40% - 49.9%
27127,Redwood County,MN,35.34,30% - 39.9%
27129,Renville County,MN,34.78,30% - 39.9%
27131,Rice County,MN,58.67,50% - 59.9%
27133,Rock County,MN,41.28,40% - 49.9%
27135,Roseau County,MN,32.82,30% - 39.9%
27139,Scott County,MN,62.85,60% - 69.9%
27141,Sherburne County,MN,34.83,30% - 39.9%
27143,Sibley County,MN,29.35,20% - 29.9%
27137,St. Louis County,MN,56.87,50% - 59.9%
27145,Stearns County,MN,45.98,40% - 49.9%
27147,Steele County,MN,47.11,40% - 49.9%
27149,Stevens County,MN,45.45,40% - 49.9%
27151,Swift County,MN,41.43,40% - 49.9%
27153,Todd County,MN,24.34,20% - 29.9%
27155,Traverse County,MN,46.67,40% - 49.9%
27157,Wabasha County,MN,57.27,50% - 59.9%
27159,Wadena County,MN,22.03,20% - 29.9%
27163,Washington County,MN,64.38,60% - 69.9%
27165,Watonwan County,MN,50.3,50% - 59.9%
27167,Wilkin County,MN,41.48,40% - 49.9%
27169,Winona County,MN,61.06,60% - 69.9%
27171,Wright County,MN,41.34,40% - 49.9%
27173,Yellow Medicine County,MN,34.29,30% - 39.9%
29001,Adair County,MO,33.61,30% - 39.9%
29003,Andrew County,MO,20.1,20% - 29.9%
29005,Atchison County,MO,33.51,30% - 39.9%
29007,Audrain County,MO,22.58,20% - 29.9%
29009,Barry County,MO,30.55,30% - 39.9%
29011,Barton County,MO,13.88,0% - 19.9%
29013,Bates County,MO,21.69,20% - 29.9%
29015,Benton County,MO,24.63,20% - 29.9%
29017,Bollinger County,MO,14.46,0% - 19.9%
29019,Boone County,MO,64.25,60% - 69.9%
29021,Buchanan County,MO,26.91,20% - 29.9%
29023,Butler County,MO,18.66,0% - 19.9%
29025,Caldwell County,MO,25.13,20% - 29.9%
29027,Callaway County,MO,34.35,30% - 39.9%
29029,Camden County,MO,25.74,20% - 29.9%
29031,Cape Girardeau County,MO,36.14,30% - 39.9%
29033,Carroll County,MO,17.46,0% - 19.9%
29035,Carter County,MO,16.63,0% - 19.9%
29037,Cass County,MO,44.6,40% - 49.9%
29039,Cedar County,MO,12.04,0% - 19.9%
29041,Chariton County,MO,18.23,0% - 19.9%
29043,Christian County,MO,38.47,30% - 39.9%
29045,Clark County,MO,16.01,0% - 19.9%
29047,Clay County,MO,57.42,50% - 59.9%
29049,Clinton County,MO,33.87,30% - 39.9%
29051,Cole County,MO,42.36,40% - 49.9%
29053,Cooper County,MO,36.04,30% - 39.9%
29055,Crawford County,MO,20.05,20% - 29.9%
29057,Dade County,MO,19.19,0% - 19.9%
29059,Dallas County,MO,18.23,0% - 19.9%
29061,Daviess County,MO,16.51,0% - 19.9%
29063,DeKalb County,MO,15.08,0% - 19.9%
29065,Dent County,MO,17.97,0% - 19.9%
29067,Douglas County,MO,10.73,0% - 19.9%
29069,Dunklin County,MO,24.23,20% - 29.9%
29071,Franklin County,MO,39.54,30% - 39.9%
29073,Gasconade County,MO,33.12,30% - 39.9%
29075,Gentry County,MO,31.31,30% - 39.9%
29077,Greene County,MO,47.92,40% - 49.9%
29079,Grundy County,MO,19.22,0% - 19.9%
29081,Harrison County,MO,14.79,0% - 19.9%
29083,Henry County,MO,31.26,30% - 39.9%
29085,Hickory County,MO,13.39,0% - 19.9%
29087,Holt County,MO,20.31,20% - 29.9%
29089,Howard County,MO,28.59,20% - 29.9%
29091,Howell County,MO,24,20% - 29.9%
29093,Iron County,MO,17.19,0% - 19.9%
29095,Jackson County,MO,57.97,50% - 59.9%
29097,Jasper County,MO,36.58,30% - 39.9%
29099,Jefferson County,MO,36.81,30% - 39.9%
29101,Johnson County,MO,34.41,30% - 39.9%
29103,Knox County,MO,22.6,20% - 29.9%
29105,Laclede County,MO,20.91,20% - 29.9%
29107,Lafayette County,MO,31.7,30% - 39.9%
29109,Lawrence County,MO,23.47,20% - 29.9%
29111,Lewis County,MO,11.02,0% - 19.9%
29113,Lincoln County,MO,25.82,20% - 29.9%
29115,Linn County,MO,21.34,20% - 29.9%
29117,Livingston County,MO,24.01,20% - 29.9%
29121,Macon County,MO,19.43,0% - 19.9%
29123,Madison County,MO,21.38,20% - 29.9%
29125,Maries County,MO,26.4,20% - 29.9%
29127,Marion County,MO,22.95,20% - 29.9%
29119,McDonald County,MO,28.25,20% - 29.9%
29129,Mercer County,MO,9.9,0% - 19.9%
29131,Miller County,MO,18.44,0% - 19.9%
29133,Mississippi County,MO,21.93,20% - 29.9%
29135,Moniteau County,MO,28.11,20% - 29.9%
29137,Monroe County,MO,16.72,0% - 19.9%
29139,Montgomery County,MO,23.81,20% - 29.9%
29141,Morgan County,MO,14.19,0% - 19.9%
29143,New Madrid County,MO,18.11,0% - 19.9%
29145,Newton County,MO,18.5,0% - 19.9%
29147,Nodaway County,MO,42.1,40% - 49.9%
29149,Oregon County,MO,17.58,0% - 19.9%
29151,Osage County,MO,27.1,20% - 29.9%
29153,Ozark County,MO,11.94,0% - 19.9%
29155,Pemiscot County,MO,14.1,0% - 19.9%
29157,Perry County,MO,16.53,0% - 19.9%
29159,Pettis County,MO,27.33,20% - 29.9%
29161,Phelps County,MO,37.69,30% - 39.9%
29163,Pike County,MO,17.86,0% - 19.9%
29165,Platte County,MO,61.68,60% - 69.9%
29167,Polk County,MO,27.85,20% - 29.9%
29169,Pulaski County,MO,65.96,60% - 69.9%
29171,Putnam County,MO,10.42,0% - 19.9%
29173,Ralls County,MO,14.13,0% - 19.9%
29175,Randolph County,MO,20.78,20% - 29.9%
29177,Ray County,MO,28.19,20% - 29.9%
29179,Reynolds County,MO,11.5,0% - 19.9%
29181,Ripley County,MO,13.2,0% - 19.9%
29195,Saline County,MO,31.89,30% - 39.9%
29197,Schuyler County,MO,7.9,0% - 19.9%
29199,Scotland County,MO,16.37,0% - 19.9%
29201,Scott County,MO,22.26,20% - 29.9%
29203,Shannon County,MO,9.82,0% - 19.9%
29205,Shelby County,MO,20.8,20% - 29.9%
29183,St. Charles County,MO,55.32,50% - 59.9%
29185,St. Clair County,MO,15.97,0% - 19.9%
29187,St. Francois County,MO,25.39,20% - 29.9%
29510,St. Louis city,MO,67.17,60% - 69.9%
29189,St. Louis County,MO,67.44,60% - 69.9%
29186,Ste. Genevieve County,MO,24.06,20% - 29.9%
29207,Stoddard County,MO,21.05,20% - 29.9%
29209,Stone County,MO,21.28,20% - 29.9%
29211,Sullivan County,MO,23.33,20% - 29.9%
29213,Taney County,MO,30.3,30% - 39.9%
29215,Texas County,MO,17.85,0% - 19.9%
29217,Vernon County,MO,20.51,20% - 29.9%
29219,Warren County,MO,28.21,20% - 29.9%
29221,Washington County,MO,16.77,0% - 19.9%
29223,Wayne County,MO,14.1,0% - 19.9%
29225,Webster County,MO,26.49,20% - 29.9%
29227,Worth County,MO,14.39,0% - 19.9%
29229,Wright County,MO,15.42,0% - 19.9%
28001,Adams County,MS,44.87,40% - 49.9%
28003,Alcorn County,MS,22.03,20% - 29.9%
28005,Amite County,MS,27.94,20% - 29.9%
28007,Attala County,MS,42.13,40% - 49.9%
28009,Benton County,MS,34.34,30% - 39.9%
28011,Bolivar County,MS,53.68,50% - 59.9%
28013,Calhoun County,MS,19.31,0% - 19.9%
28015,Carroll County,MS,32.55,30% - 39.9%
28017,Chickasaw County,MS,27.53,20% - 29.9%
28019,Choctaw County,MS,30.53,30% - 39.9%
28021,Claiborne County,MS,75.36,70% or More
28023,Clarke County,MS,36.03,30% - 39.9%
28025,Clay County,MS,34.98,30% - 39.9%
28027,Coahoma County,MS,48.92,40% - 49.9%
28029,Copiah County,MS,51.53,50% - 59.9%
28031,Covington County,MS,36.01,30% - 39.9%
28033,DeSoto County,MS,48.3,40% - 49.9%
28035,Forrest County,MS,36.66,30% - 39.9%
28037,Franklin County,MS,34.99,30% - 39.9%
28039,George County,MS,18.36,0% - 19.9%
28041,Greene County,MS,18.79,0% - 19.9%
28043,Grenada County,MS,42.64,40% - 49.9%
28045,Hancock County,MS,26.92,20% - 29.9%
28047,Harrison County,MS,40.81,40% - 49.9%
28049,Hinds County,MS,57.64,50% - 59.9%
28051,Holmes County,MS,56.43,50% - 59.9%
28053,Humphreys County,MS,58.54,50% - 59.9%
28055,Issaquena County,MS,29.51,20% - 29.9%
28057,Itawamba County,MS,18.23,0% - 19.9%
28059,Jackson County,MS,37.94,30% - 39.9%
28061,Jasper County,MS,46.59,40% - 49.9%
28063,Jefferson County,MS,92.01,70% or More
28065,Jefferson Davis County,MS,43.13,40% - 49.9%
28067,Jones County,MS,31.67,30% - 39.9%
28069,Kemper County,MS,56.29,50% - 59.9%
28071,Lafayette County,MS,49.13,40% - 49.9%
28073,Lamar County,MS,49.81,40% - 49.9%
28075,Lauderdale County,MS,37.79,30% - 39.9%
28077,Lawrence County,MS,42.17,40% - 49.9%
28079,Leake County,MS,33.73,30% - 39.9%
28081,Lee County,MS,30.8,30% - 39.9%
28083,Leflore County,MS,58.04,50% - 59.9%
28085,Lincoln County,MS,31.49,30% - 39.9%
28087,Lowndes County,MS,37.21,30% - 39.9%
28089,Madison County,MS,56.68,50% - 59.9%
28091,Marion County,MS,33.57,30% - 39.9%
28093,Marshall County,MS,46.4,40% - 49.9%
28095,Monroe County,MS,32.42,30% - 39.9%
28097,Montgomery County,MS,42,40% - 49.9%
28099,Neshoba County,MS,40.3,40% - 49.9%
28101,Newton County,MS,32.48,30% - 39.9%
28103,Noxubee County,MS,46.62,40% - 49.9%
28105,Oktibbeha County,MS,54.56,50% - 59.9%
28107,Panola County,MS,34.35,30% - 39.9%
28109,Pearl River County,MS,27.21,20% - 29.9%
28111,Perry County,MS,22.38,20% - 29.9%
28113,Pike County,MS,37.72,30% - 39.9%
28115,Pontotoc County,MS,22.89,20% - 29.9%
28117,Prentiss County,MS,20.56,20% - 29.9%
28119,Quitman County,MS,44.04,40% - 49.9%
28121,Rankin County,MS,39.88,30% - 39.9%
28123,Scott County,MS,43.76,40% - 49.9%
28125,Sharkey County,MS,46.74,40% - 49.9%
28127,Simpson County,MS,32.71,30% - 39.9%
28129,Smith County,MS,25.11,20% - 29.9%
28131,Stone County,MS,28.33,20% - 29.9%
28133,Sunflower County,MS,45.24,40% - 49.9%
28135,Tallahatchie County,MS,34.72,30% - 39.9%
28137,Tate County,MS,32.8,30% - 39.9%
28139,Tippah County,MS,21.82,20% - 29.9%
28141,Tishomingo County,MS,20.12,20% - 29.9%
28143,Tunica County,MS,56.96,50% - 59.9%
28145,Union County,MS,22.19,20% - 29.9%
28147,Walthall County,MS,33.08,30% - 39.9%
28149,Warren County,MS,53.57,50% - 59.9%
28151,Washington County,MS,41.89,40% - 49.9%
28153,Wayne County,MS,28.05,20% - 29.9%
28155,Webster County,MS,20.02,20% - 29.9%
28157,Wilkinson County,MS,67.45,60% - 69.9%
28159,Winston County,MS,32.12,30% - 39.9%
28161,Yalobusha County,MS,41.43,40% - 49.9%
28163,Yazoo County,MS,46.79,40% - 49.9%
30001,Beaverhead County,MT,43.67,40% - 49.9%
30003,Big Horn County,MT,99.99,70% or More
30005,Blaine County,MT,99.99,70% or More
30007,Broadwater County,MT,13.95,0% - 19.9%
30009,Carbon County,MT,24.58,20% - 29.9%
30011,Carter County,MT,4.29,0% - 19.9%
30013,Cascade County,MT,37.82,30% - 39.9%
30015,Chouteau County,MT,20.22,20% - 29.9%
30017,Custer County,MT,25.37,20% - 29.9%
30019,Daniels County,MT,22.41,20% - 29.9%
30021,Dawson County,MT,12.07,0% - 19.9%
30023,Deer Lodge County,MT,67.56,60% - 69.9%
30025,Fallon County,MT,16.03,0% - 19.9%
30027,Fergus County,MT,22.82,20% - 29.9%
30029,Flathead County,MT,31.06,30% - 39.9%
30031,Gallatin County,MT,52.94,50% - 59.9%
30033,Garfield County,MT,6,0% - 19.9%
30035,Glacier County,MT,99.99,70% or More
30037,Golden Valley County,MT,18.97,0% - 19.9%
30039,Granite County,MT,20,20% - 29.9%
30041,Hill County,MT,89.82,70% or More
30043,Jefferson County,MT,34.12,30% - 39.9%
30045,Judith Basin County,MT,2.99,0% - 19.9%
30047,Lake County,MT,41.81,40% - 49.9%
30049,Lewis and Clark County,MT,51.23,50% - 59.9%
30053,Lincoln County,MT,15.51,0% - 19.9%
30057,Madison County,MT,23.68,20% - 29.9%
30055,McCone County,MT,7.87,0% - 19.9%
30059,Meagher County,MT,25.6,20% - 29.9%
30061,Mineral County,MT,38.01,30% - 39.9%
30063,Missoula County,MT,61.62,60% - 69.9%
30065,Musselshell County,MT,13.79,0% - 19.9%
30067,Park County,MT,50.05,50% - 59.9%
30069,Petroleum County,MT,3.57,0% - 19.9%
30071,Phillips County,MT,29.43,20% - 29.9%
30073,Pondera County,MT,53.2,50% - 59.9%
30075,Powder River County,MT,6.31,0% - 19.9%
30077,Powell County,MT,22.81,20% - 29.9%
30079,Prairie County,MT,29.63,20% - 29.9%
30081,Ravalli County,MT,30.27,30% - 39.9%
30083,Richland County,MT,17.45,0% - 19.9%
30085,Roosevelt County,MT,79.12,70% or More
30087,Rosebud County,MT,99.99,70% or More
30089,Sanders County,MT,15.97,0% - 19.9%
30091,Sheridan County,MT,21.93,20% - 29.9%
30093,Silver Bow County,MT,61.8,60% - 69.9%
30095,Stillwater County,MT,12.79,0% - 19.9%
30097,Sweet Grass County,MT,18.94,0% - 19.9%
30099,Teton County,MT,22.55,20% - 29.9%
30101,Toole County,MT,23.84,20% - 29.9%
30103,Treasure County,MT,11.43,0% - 19.9%
30105,Valley County,MT,24.19,20% - 29.9%
30107,Wheatland County,MT,7.33,0% - 19.9%
30109,Wibaux County,MT,6.56,0% - 19.9%
30111,Yellowstone County,MT,40.61,40% - 49.9%
37001,Alamance County,NC,53.24,50% - 59.9%
37003,Alexander County,NC,24.15,20% - 29.9%
37005,Alleghany County,NC,33.18,30% - 39.9%
37007,Anson County,NC,31.21,30% - 39.9%
37009,Ashe County,NC,40.12,40% - 49.9%
37011,Avery County,NC,32.51,30% - 39.9%
37013,Beaufort County,NC,33.77,30% - 39.9%
37015,Bertie County,NC,33.14,30% - 39.9%
37017,Bladen County,NC,35.76,30% - 39.9%
37019,Brunswick County,NC,44.22,40% - 49.9%
37021,Buncombe County,NC,64.03,60% - 69.9%
37023,Burke County,NC,38.32,30% - 39.9%
37025,Cabarrus County,NC,55.89,50% - 59.9%
37027,Caldwell County,NC,29.75,20% - 29.9%
37029,Camden County,NC,32.63,30% - 39.9%
37031,Carteret County,NC,40.72,40% - 49.9%
37033,Caswell County,NC,25.5,20% - 29.9%
37035,Catawba County,NC,44.55,40% - 49.9%
37037,Chatham County,NC,46.43,40% - 49.9%
37039,Cherokee County,NC,20.48,20% - 29.9%
37041,Chowan County,NC,38.23,30% - 39.9%
37043,Clay County,NC,19.48,0% - 19.9%
37045,Cleveland County,NC,39.62,30% - 39.9%
37047,Columbus County,NC,32.53,30% - 39.9%
37049,Craven County,NC,48.39,40% - 49.9%
37051,Cumberland County,NC,54.15,50% - 59.9%
37053,Currituck County,NC,35.27,30% - 39.9%
37055,Dare County,NC,53.56,50% - 59.9%
37057,Davidson County,NC,34.18,30% - 39.9%
37059,Davie County,NC,47.25,40% - 49.9%
37061,Duplin County,NC,33.09,30% - 39.9%
37063,Durham County,NC,75.63,70% or More
37065,Edgecombe County,NC,30.91,30% - 39.9%
37067,Forsyth County,NC,58.88,50% - 59.9%
37069,Franklin County,NC,47.19,40% - 49.9%
37071,Gaston County,NC,40.39,40% - 49.9%
37073,Gates County,NC,27.87,20% - 29.9%
37075,Graham County,NC,20.56,20% - 29.9%
37077,Granville County,NC,49.54,40% - 49.9%
37079,Greene County,NC,31.72,30% - 39.9%
37081,Guilford County,NC,60.97,60% - 69.9%
37083,Halifax County,NC,35.73,30% - 39.9%
37085,Harnett County,NC,36.26,30% - 39.9%
37087,Haywood County,NC,38.94,30% - 39.9%
37089,Henderson County,NC,45.42,40% - 49.9%
37091,Hertford County,NC,37.9,30% - 39.9%
37093,Hoke County,NC,34.04,30% - 39.9%
37095,Hyde County,NC,47.12,40% - 49.9%
37097,Iredell County,NC,43.68,40% - 49.9%
37099,Jackson County,NC,52.32,50% - 59.9%
37101,Johnston County,NC,48.08,40% - 49.9%
37103,Jones County,NC,38.03,30% - 39.9%
37105,Lee County,NC,51.02,50% - 59.9%
37107,Lenoir County,NC,35.96,30% - 39.9%
37109,Lincoln County,NC,35.1,30% - 39.9%
37113,Macon County,NC,35.68,30% - 39.9%
37115,Madison County,NC,36.74,30% - 39.9%
37117,Martin County,NC,35.63,30% - 39.9%
37111,McDowell County,NC,34.76,30% - 39.9%
37119,Mecklenburg County,NC,69.74,60% - 69.9%
37121,Mitchell County,NC,29.3,20% - 29.9%
37123,Montgomery County,NC,20.17,20% - 29.9%
37125,Moore County,NC,40.7,40% - 49.9%
37127,Nash County,NC,43.37,40% - 49.9%
37129,New Hanover County,NC,64.57,60% - 69.9%
37131,Northampton County,NC,30.63,30% - 39.9%
37133,Onslow County,NC,46.52,40% - 49.9%
37135,Orange County,NC,91.49,70% or More
37137,Pamlico County,NC,27.21,20% - 29.9%
37139,Pasquotank County,NC,39.14,30% - 39.9%
37141,Pender County,NC,39.34,30% - 39.9%
37143,Perquimans County,NC,25.86,20% - 29.9%
37145,Person County,NC,41,40% - 49.9%
37147,Pitt County,NC,48.13,40% - 49.9%
37149,Polk County,NC,30.77,30% - 39.9%
37151,Randolph County,NC,30.21,30% - 39.9%
37153,Richmond County,NC,31.13,30% - 39.9%
37155,Robeson County,NC,34.32,30% - 39.9%
37157,Rockingham County,NC,33.35,30% - 39.9%
37159,Rowan County,NC,29.52,20% - 29.9%
37161,Rutherford County,NC,25.92,20% - 29.9%
37163,Sampson County,NC,36.74,30% - 39.9%
37165,Scotland County,NC,33.15,30% - 39.9%
37167,Stanly County,NC,27.06,20% - 29.9%
37169,Stokes County,NC,30.28,30% - 39.9%
37171,Surry County,NC,38.51,30% - 39.9%
37173,Swain County,NC,63.44,60% - 69.9%
37175,Transylvania County,NC,42.93,40% - 49.9%
37177,Tyrrell County,NC,43.67,40% - 49.9%
37179,Union County,NC,55.87,50% - 59.9%
37181,Vance County,NC,51.91,50% - 59.9%
37183,Wake County,NC,81.09,70% or More
37185,Warren County,NC,43.15,40% - 49.9%
37187,Washington County,NC,33.62,30% - 39.9%
37189,Watauga County,NC,62.56,60% - 69.9%
37191,Wayne County,NC,38.2,30% - 39.9%
37193,Wilkes County,NC,29.27,20% - 29.9%
37195,Wilson County,NC,39.76,30% - 39.9%
37197,Yadkin County,NC,32.93,30% - 39.9%
37199,Yancey County,NC,29.99,20% - 29.9%
38001,Adams County,ND,23.45,20% - 29.9%
38003,Barnes County,ND,45.42,40% - 49.9%
38005,Benson County,ND,57.24,50% - 59.9%
38007,Billings County,ND,7.69,0% - 19.9%
38009,Bottineau County,ND,34.68,30% - 39.9%
38011,Bowman County,ND,17.81,0% - 19.9%
38013,Burke County,ND,14.91,0% - 19.9%
38015,Burleigh County,ND,37.51,30% - 39.9%
38017,Cass County,ND,62.1,60% - 69.9%
38019,Cavalier County,ND,40.22,40% - 49.9%
38021,Dickey County,ND,36.85,30% - 39.9%
38023,Divide County,ND,25.58,20% - 29.9%
38025,Dunn County,ND,8.46,0% - 19.9%
38027,Eddy County,ND,25.71,20% - 29.9%
38029,Emmons County,ND,13.33,0% - 19.9%
38031,Foster County,ND,37.93,30% - 39.9%
38033,Golden Valley County,ND,18.47,0% - 19.9%
38035,Grand Forks County,ND,52.95,50% - 59.9%
38037,Grant County,ND,10.14,0% - 19.9%
38039,Griggs County,ND,22.78,20% - 29.9%
38041,Hettinger County,ND,12.64,0% - 19.9%
38043,Kidder County,ND,14.01,0% - 19.9%
38045,LaMoure County,ND,28.66,20% - 29.9%
38047,Logan County,ND,9.86,0% - 19.9%
38049,McHenry County,ND,21.59,20% - 29.9%
38051,McIntosh County,ND,20.25,20% - 29.9%
38053,McKenzie County,ND,17.16,0% - 19.9%
38055,McLean County,ND,27.07,20% - 29.9%
38057,Mercer County,ND,14.9,0% - 19.9%
38059,Morton County,ND,30.02,30% - 39.9%
38061,Mountrail County,ND,57.91,50% - 59.9%
38063,Nelson County,ND,45.85,40% - 49.9%
38065,Oliver County,ND,15.85,0% - 19.9%
38067,Pembina County,ND,36.59,30% - 39.9%
38069,Pierce County,ND,34.44,30% - 39.9%
38071,Ramsey County,ND,39.3,30% - 39.9%
38073,Ransom County,ND,38.92,30% - 39.9%
38075,Renville County,ND,23.28,20% - 29.9%
38077,Richland County,ND,39.52,30% - 39.9%
38079,Rolette County,ND,83.72,70% or More
38081,Sargent County,ND,32.96,30% - 39.9%
38083,Sheridan County,ND,10.84,0% - 19.9%
38085,Sioux County,ND,75.98,70% or More
38087,Slope County,ND,4.17,0% - 19.9%
38089,Stark County,ND,21.96,20% - 29.9%
38091,Steele County,ND,34.09,30% - 39.9%
38093,Stutsman County,ND,38.6,30% - 39.9%
38095,Towner County,ND,31.37,30% - 39.9%
38097,Traill County,ND,44.84,40% - 49.9%
38099,Walsh County,ND,44.77,40% - 49.9%
38101,Ward County,ND,39.61,30% - 39.9%
38103,Wells County,ND,15.23,0% - 19.9%
38105,Williams County,ND,20.56,20% - 29.9%
31025,Cass County,NE,51.79,50% - 59.9%
31031,Cherry County,NE,18.06,0% - 19.9%
31043,Dakota County,NE,46.64,40% - 49.9%
31055,Douglas County,NE,69.17,60% - 69.9%
31057,Dundy County,NE,11.93,0% - 19.9%
31085,Hayes County,NE,7.94,0% - 19.9%
31103,Keya Paha County,NE,9.52,0% - 19.9%
31109,Lancaster County,NE,69.76,60% - 69.9%
31177,Washington County,NE,43.53,40% - 49.9%
33001,Belknap County,NH,51.35,50% - 59.9%
33003,Carroll County,NH,65.19,60% - 69.9%
33005,Cheshire County,NH,61.92,60% - 69.9%
33007,Coos County,NH,53.41,50% - 59.9%
33009,Grafton County,NH,84.59,70% or More
33011,Hillsborough County,NH,63.21,60% - 69.9%
33013,Merrimack County,NH,62.13,60% - 69.9%
33015,Rockingham County,NH,68.16,60% - 69.9%
33017,Strafford County,NH,69.9,60% - 69.9%
33019,Sullivan County,NH,53.62,50% - 59.9%
34001,Atlantic County,NJ,54.02,50% - 59.9%
34003,Bergen County,NJ,74.73,70% or More
34005,Burlington County,NJ,65.65,60% - 69.9%
34007,Camden County,NJ,64.31,60% - 69.9%
34009,Cape May County,NJ,55.69,50% - 59.9%
34011,Cumberland County,NJ,44.15,40% - 49.9%
34013,Essex County,NJ,73.79,70% or More
34015,Gloucester County,NJ,54.62,50% - 59.9%
34017,Hudson County,NJ,91.54,70% or More
34019,Hunterdon County,NJ,53.46,50% - 59.9%
34021,Mercer County,NJ,80.85,70% or More
34023,Middlesex County,NJ,76.14,70% or More
34025,Monmouth County,NJ,51.1,50% - 59.9%
34027,Morris County,NJ,67.69,60% - 69.9%
34029,Ocean County,NJ,28.4,20% - 29.9%
34031,Passaic County,NJ,71.78,70% or More
34033,Salem County,NJ,43.93,40% - 49.9%
34035,Somerset County,NJ,68.4,60% - 69.9%
34037,Sussex County,NJ,44.86,40% - 49.9%
34039,Union County,NJ,75.51,70% or More
34041,Warren County,NJ,50.37,50% - 59.9%
35001,Bernalillo County,NM,73.22,70% or More
35003,Catron County,NM,19.65,0% - 19.9%
35005,Chaves County,NM,36.19,30% - 39.9%
35006,Cibola County,NM,90.25,70% or More
35007,Colfax County,NM,47.41,40% - 49.9%
35009,Curry County,NM,33.61,30% - 39.9%
35011,De Baca County,NM,25.36,20% - 29.9%
35013,Dona Ana County,NM,82.59,70% or More
35015,Eddy County,NM,33.42,30% - 39.9%
35017,Grant County,NM,63.67,60% - 69.9%
35019,Guadalupe County,NM,76.44,70% or More
35021,Harding County,NM,99.99,70% or More
35023,Hidalgo County,NM,60.52,60% - 69.9%
35025,Lea County,NM,40.89,40% - 49.9%
35027,Lincoln County,NM,37.32,30% - 39.9%
35028,Los Alamos County,NM,94.98,70% or More
35029,Luna County,NM,75.94,70% or More
35031,McKinley County,NM,99.99,70% or More
35033,Mora County,NM,76.73,70% or More
35035,Otero County,NM,55.52,50% - 59.9%
35037,Quay County,NM,28.96,20% - 29.9%
35039,Rio Arriba County,NM,88.2,70% or More
35041,Roosevelt County,NM,30.86,30% - 39.9%
35045,San Juan County,NM,90.4,70% or More
35047,San Miguel County,NM,78.39,70% or More
35043,Sandoval County,NM,76.8,70% or More
35049,Santa Fe County,NM,79.51,70% or More
35051,Sierra County,NM,52.43,50% - 59.9%
35053,Socorro County,NM,64.5,60% - 69.9%
35055,Taos County,NM,86.51,70% or More
35057,Torrance County,NM,40.96,40% - 49.9%
35059,Union County,NM,36.36,30% - 39.9%
35061,Valencia County,NM,55.57,50% - 59.9%
32510,Carson City,NV,54.87,50% - 59.9%
32001,Churchill County,NV,38.28,30% - 39.9%
32003,Clark County,NV,56.87,50% - 59.9%
32005,Douglas County,NV,36.98,30% - 39.9%
32007,Elko County,NV,35.22,30% - 39.9%
32009,Esmeralda County,NV,46.34,40% - 49.9%
32011,Eureka County,NV,8.51,0% - 19.9%
32013,Humboldt County,NV,28.4,20% - 29.9%
32015,Lander County,NV,25.61,20% - 29.9%
32017,Lincoln County,NV,26.12,20% - 29.9%
32019,Lyon County,NV,26.43,20% - 29.9%
32021,Mineral County,NV,30.88,30% - 39.9%
32023,Nye County,NV,29.29,20% - 29.9%
32027,Pershing County,NV,26.82,20% - 29.9%
32029,Storey County,NV,15.28,0% - 19.9%
32031,Washoe County,NV,61.27,60% - 69.9%
32033,White Pine County,NV,32.38,30% - 39.9%
36001,Albany County,NY,78.84,70% or More
36003,Allegany County,NY,36.87,30% - 39.9%
36005,Bronx County,NY,79.18,70% or More
36007,Broome County,NY,55.03,50% - 59.9%
36009,Cattaraugus County,NY,45.69,40% - 49.9%
36011,Cayuga County,NY,53.35,50% - 59.9%
36013,Chautauqua County,NY,49.12,40% - 49.9%
36015,Chemung County,NY,54.99,50% - 59.9%
36017,Chenango County,NY,45.48,40% - 49.9%
36019,Clinton County,NY,74.07,70% or More
36021,Columbia County,NY,69.97,60% - 69.9%
36023,Cortland County,NY,54.04,50% - 59.9%
36025,Delaware County,NY,45.48,40% - 49.9%
36027,Dutchess County,NY,65.78,60% - 69.9%
36029,Erie County,NY,64.21,60% - 69.9%
36031,Essex County,NY,71.46,70% or More
36033,Franklin County,NY,64.14,60% - 69.9%
36035,Fulton County,NY,38.91,30% - 39.9%
36037,Genesee County,NY,43.27,40% - 49.9%
36039,Greene County,NY,59.03,50% - 59.9%
36041,Hamilton County,NY,50.19,50% - 59.9%
36043,Herkimer County,NY,48.46,40% - 49.9%
36045,Jefferson County,NY,60.09,60% - 69.9%
36047,Kings County,NY,67.07,60% - 69.9%
36049,Lewis County,NY,35.87,30% - 39.9%
36051,Livingston County,NY,55.92,50% - 59.9%
36053,Madison County,NY,57.28,50% - 59.9%
36055,Monroe County,NY,67.5,60% - 69.9%
36057,Montgomery County,NY,49.55,40% - 49.9%
36059,Nassau County,NY,79.18,70% or More
36061,New York County,NY,99.99,70% or More
36063,Niagara County,NY,56.44,50% - 59.9%
36065,Oneida County,NY,54.05,50% - 59.9%
36067,Onondaga County,NY,68.26,60% - 69.9%
36069,Ontario County,NY,65.26,60% - 69.9%
36071,Orange County,NY,55.9,50% - 59.9%
36073,Orleans County,NY,41.97,40% - 49.9%
36075,Oswego County,NY,50.46,50% - 59.9%
36077,Otsego County,NY,67.44,60% - 69.9%
36079,Putnam County,NY,67.41,60% - 69.9%
36081,Queens County,NY,94.86,70% or More
36083,Rensselaer County,NY,66.19,60% - 69.9%
36085,Richmond County,NY,66.03,60% - 69.9%
36087,Rockland County,NY,53.52,50% - 59.9%
36091,Saratoga County,NY,80.57,70% or More
36093,Schenectady County,NY,74.53,70% or More
36095,Schoharie County,NY,48.58,40% - 49.9%
36097,Schuyler County,NY,45.95,40% - 49.9%
36099,Seneca County,NY,47.84,40% - 49.9%
36089,St. Lawrence County,NY,57.63,50% - 59.9%
36101,Steuben County,NY,46.77,40% - 49.9%
36103,Suffolk County,NY,63.83,60% - 69.9%
36105,Sullivan County,NY,47.74,40% - 49.9%
36107,Tioga County,NY,46.85,40% - 49.9%
36109,Tompkins County,NY,89.04,70% or More
36111,Ulster County,NY,72.48,70% or More
36113,Warren County,NY,67.71,60% - 69.9%
36115,Washington County,NY,56.29,50% - 59.9%
36117,Wayne County,NY,54.45,50% - 59.9%
36119,Westchester County,NY,90.63,70% or More
36121,Wyoming County,NY,40.03,40% - 49.9%
36123,Yates County,NY,38.61,30% - 39.9%
39001,Adams County,OH,20.47,20% - 29.9%
39003,Allen County,OH,21.81,20% - 29.9%
39005,Ashland County,OH,22.13,20% - 29.9%
39007,Ashtabula County,OH,34.84,30% - 39.9%
39009,Athens County,OH,51.07,50% - 59.9%
39011,Auglaize County,OH,15.25,0% - 19.9%
39013,Belmont County,OH,29.64,20% - 29.9%
39015,Brown County,OH,21.35,20% - 29.9%
39017,Butler County,OH,47.32,40% - 49.9%
39019,Carroll County,OH,21.31,20% - 29.9%
39021,Champaign County,OH,21.53,20% - 29.9%
39023,Clark County,OH,34.25,30% - 39.9%
39025,Clermont County,OH,45.92,40% - 49.9%
39027,Clinton County,OH,28.21,20% - 29.9%
39029,Columbiana County,OH,26.67,20% - 29.9%
39031,Coshocton County,OH,19.15,0% - 19.9%
39033,Crawford County,OH,21.14,20% - 29.9%
39035,Cuyahoga County,OH,53.94,50% - 59.9%
39037,Darke County,OH,15.51,0% - 19.9%
39039,Defiance County,OH,28.56,20% - 29.9%
39041,Delaware County,OH,71.99,70% or More
39043,Erie County,OH,36.4,30% - 39.9%
39045,Fairfield County,OH,46.43,40% - 49.9%
39047,Fayette County,OH,24.26,20% - 29.9%
39049,Franklin County,OH,59.66,50% - 59.9%
39051,Fulton County,OH,31.11,30% - 39.9%
39053,Gallia County,OH,27.09,20% - 29.9%
39055,Geauga County,OH,44.35,40% - 49.9%
39057,Greene County,OH,54.29,50% - 59.9%
39059,Guernsey County,OH,22.3,20% - 29.9%
39061,Hamilton County,OH,52.47,50% - 59.9%
39063,Hancock County,OH,34.89,30% - 39.9%
39065,Hardin County,OH,19.32,0% - 19.9%
39067,Harrison County,OH,17.72,0% - 19.9%
39069,Henry County,OH,34.7,30% - 39.9%
39071,Highland County,OH,17.03,0% - 19.9%
39073,Hocking County,OH,30.79,30% - 39.9%
39075,Holmes County,OH,5.35,0% - 19.9%
39077,Huron County,OH,27.25,20% - 29.9%
39079,Jackson County,OH,29.38,20% - 29.9%
39081,Jefferson County,OH,33.03,30% - 39.9%
39083,Knox County,OH,25.23,20% - 29.9%
39085,Lake County,OH,50.92,50% - 59.9%
39087,Lawrence County,OH,41.04,40% - 49.9%
39089,Licking County,OH,41.16,40% - 49.9%
39091,Logan County,OH,19.95,0% - 19.9%
39093,Lorain County,OH,52.7,50% - 59.9%
39095,Lucas County,OH,47.71,40% - 49.9%
39097,Madison County,OH,37.98,30% - 39.9%
39099,Mahoning County,OH,37.08,30% - 39.9%
39101,Marion County,OH,29.3,20% - 29.9%
39103,Medina County,OH,52.32,50% - 59.9%
39105,Meigs County,OH,29.25,20% - 29.9%
39107,Mercer County,OH,13.75,0% - 19.9%
39109,Miami County,OH,27.25,20% - 29.9%
39111,Monroe County,OH,21.97,20% - 29.9%
39113,Montgomery County,OH,44.06,40% - 49.9%
39115,Morgan County,OH,19.96,0% - 19.9%
39117,Morrow County,OH,21.42,20% - 29.9%
39119,Muskingum County,OH,26.71,20% - 29.9%
39121,Noble County,OH,24.89,20% - 29.9%
39123,Ottawa County,OH,41.66,40% - 49.9%
39125,Paulding County,OH,20.27,20% - 29.9%
39127,Perry County,OH,19.11,0% - 19.9%
39129,Pickaway County,OH,33.32,30% - 39.9%
39131,Pike County,OH,27.4,20% - 29.9%
39133,Portage County,OH,46.4,40% - 49.9%
39135,Preble County,OH,18.17,0% - 19.9%
39137,Putnam County,OH,24.53,20% - 29.9%
39139,Richland County,OH,22.28,20% - 29.9%
39141,Ross County,OH,29.07,20% - 29.9%
39143,Sandusky County,OH,32.15,30% - 39.9%
39145,Scioto County,OH,33.16,30% - 39.9%
39147,Seneca County,OH,26.11,20% - 29.9%
39149,Shelby County,OH,14.49,0% - 19.9%
39151,Stark County,OH,38.86,30% - 39.9%
39153,Summit County,OH,54.92,50% - 59.9%
39155,Trumbull County,OH,36.33,30% - 39.9%
39157,Tuscarawas County,OH,24.4,20% - 29.9%
39159,Union County,OH,53.47,50% - 59.9%
39161,Van Wert County,OH,20.52,20% - 29.9%
39163,Vinton County,OH,22.44,20% - 29.9%
39165,Warren County,OH,57.45,50% - 59.9%
39167,Washington County,OH,39.78,30% - 39.9%
39169,Wayne County,OH,27.26,20% - 29.9%
39171,Williams County,OH,23.63,20% - 29.9%
39173,Wood County,OH,55.94,50% - 59.9%
39175,Wyandot County,OH,21.85,20% - 29.9%
40001,Adair County,OK,31.71,30% - 39.9%
40003,Alfalfa County,OK,12.93,0% - 19.9%
40005,Atoka County,OK,13.02,0% - 19.9%
40007,Beaver County,OK,13.46,0% - 19.9%
40009,Beckham County,OK,26.09,20% - 29.9%
40011,Blaine County,OK,37.47,30% - 39.9%
40013,Bryan County,OK,27.37,20% - 29.9%
40015,Caddo County,OK,59.45,50% - 59.9%
40017,Canadian County,OK,51.25,50% - 59.9%
40019,Carter County,OK,32.84,30% - 39.9%
40021,Cherokee County,OK,47.87,40% - 49.9%
40023,Choctaw County,OK,15.44,0% - 19.9%
40025,Cimarron County,OK,6.15,0% - 19.9%
40027,Cleveland County,OK,57.81,50% - 59.9%
40029,Coal County,OK,15.67,0% - 19.9%
40031,Comanche County,OK,63.17,60% - 69.9%
40033,Cotton County,OK,39.19,30% - 39.9%
40035,Craig County,OK,31.27,30% - 39.9%
40037,Creek County,OK,27.23,20% - 29.9%
40039,Custer County,OK,43.17,40% - 49.9%
40041,Delaware County,OK,28.61,20% - 29.9%
40043,Dewey County,OK,9.5,0% - 19.9%
40045,Ellis County,OK,9.65,0% - 19.9%
40047,Garfield County,OK,36.16,30% - 39.9%
40049,Garvin County,OK,27.25,20% - 29.9%
40051,Grady County,OK,23.45,20% - 29.9%
40053,Grant County,OK,20.51,20% - 29.9%
40055,Greer County,OK,24.62,20% - 29.9%
40057,Harmon County,OK,32.79,30% - 39.9%
40059,Harper County,OK,32.91,30% - 39.9%
40061,Haskell County,OK,22.87,20% - 29.9%
40063,Hughes County,OK,31.45,30% - 39.9%
40065,Jackson County,OK,36.68,30% - 39.9%
40067,Jefferson County,OK,16.6,0% - 19.9%
40069,Johnston County,OK,21.95,20% - 29.9%
40071,Kay County,OK,30.06,30% - 39.9%
40073,Kingfisher County,OK,29.81,20% - 29.9%
40075,Kiowa County,OK,31.42,30% - 39.9%
40077,Latimer County,OK,25,20% - 29.9%
40079,Le Flore County,OK,23.69,20% - 29.9%
40081,Lincoln County,OK,24.88,20% - 29.9%
40083,Logan County,OK,22.05,20% - 29.9%
40085,Love County,OK,23.97,20% - 29.9%
40093,Major County,OK,22.22,20% - 29.9%
40095,Marshall County,OK,32.52,30% - 39.9%
40097,Mayes County,OK,27.56,20% - 29.9%
40087,McClain County,OK,31.62,30% - 39.9%
40089,McCurtain County,OK,15.78,0% - 19.9%
40091,McIntosh County,OK,32.28,30% - 39.9%
40099,Murray County,OK,27.55,20% - 29.9%
40101,Muskogee County,OK,47.17,40% - 49.9%
40103,Noble County,OK,49.78,40% - 49.9%
40105,Nowata County,OK,27.68,20% - 29.9%
40107,Okfuskee County,OK,33.02,30% - 39.9%
40109,Oklahoma County,OK,68.72,60% - 69.9%
40111,Okmulgee County,OK,28.29,20% - 29.9%
40113,Osage County,OK,29.73,20% - 29.9%
40115,Ottawa County,OK,24.86,20% - 29.9%
40117,Pawnee County,OK,36.87,30% - 39.9%
40119,Payne County,OK,50.12,50% - 59.9%
40121,Pittsburg County,OK,31.45,30% - 39.9%
40123,Pontotoc County,OK,40.29,40% - 49.9%
40125,Pottawatomie County,OK,40.23,40% - 49.9%
40127,Pushmataha County,OK,14.72,0% - 19.9%
40129,Roger Mills County,OK,19.52,0% - 19.9%
40131,Rogers County,OK,32.4,30% - 39.9%
40133,Seminole County,OK,39.93,30% - 39.9%
40135,Sequoyah County,OK,30.11,30% - 39.9%
40137,Stephens County,OK,30.04,30% - 39.9%
40139,Texas County,OK,29.86,20% - 29.9%
40141,Tillman County,OK,31,30% - 39.9%
40143,Tulsa County,OK,57.4,50% - 59.9%
40145,Wagoner County,OK,35.56,30% - 39.9%
40147,Washington County,OK,35.69,30% - 39.9%
40149,Washita County,OK,23.77,20% - 29.9%
40151,Woods County,OK,30.74,30% - 39.9%
40153,Woodward County,OK,22.35,20% - 29.9%
41001,Baker County,OR,36.09,30% - 39.9%
41003,Benton County,OR,76.04,70% or More
41005,Clackamas County,OR,69.56,60% - 69.9%
41007,Clatsop County,OR,57.19,50% - 59.9%
41009,Columbia County,OR,49.46,40% - 49.9%
41011,Coos County,OR,40.22,40% - 49.9%
41013,Crook County,OR,30.84,30% - 39.9%
41015,Curry County,OR,38.9,30% - 39.9%
41017,Deschutes County,OR,63.21,60% - 69.9%
41019,Douglas County,OR,31.33,30% - 39.9%
41021,Gilliam County,OR,41.13,40% - 49.9%
41023,Grant County,OR,18.87,0% - 19.9%
41025,Harney County,OR,29.03,20% - 29.9%
41027,Hood River County,OR,85.2,70% or More
41029,Jackson County,OR,48.07,40% - 49.9%
41031,Jefferson County,OR,61.93,60% - 69.9%
41033,Josephine County,OR,34.1,30% - 39.9%
41035,Klamath County,OR,34.34,30% - 39.9%
41037,Lake County,OR,17.19,0% - 19.9%
41039,Lane County,OR,64.9,60% - 69.9%
41041,Lincoln County,OR,65.79,60% - 69.9%
41043,Linn County,OR,41.23,40% - 49.9%
41045,Malheur County,OR,35.88,30% - 39.9%
41047,Marion County,OR,59.95,50% - 59.9%
41049,Morrow County,OR,44.19,40% - 49.9%
41051,Multnomah County,OR,83.33,70% or More
41053,Polk County,OR,56.51,50% - 59.9%
41055,Sherman County,OR,39.29,30% - 39.9%
41057,Tillamook County,OR,50.71,50% - 59.9%
41059,Umatilla County,OR,48.54,40% - 49.9%
41061,Union County,OR,35.92,30% - 39.9%
41063,Wallowa County,OR,41.79,40% - 49.9%
41065,Wasco County,OR,61.21,60% - 69.9%
41067,Washington County,OR,83.18,70% or More
41069,Wheeler County,OR,38.57,30% - 39.9%
41071,Yamhill County,OR,57.85,50% - 59.9%
42001,Adams County,PA,39.79,30% - 39.9%
42003,Allegheny County,PA,66.53,60% - 69.9%
42005,Armstrong County,PA,38.59,30% - 39.9%
42007,Beaver County,PA,42.37,40% - 49.9%
42009,Bedford County,PA,15.3,0% - 19.9%
42011,Berks County,PA,52.81,50% - 59.9%
42013,Blair County,PA,34.96,30% - 39.9%
42015,Bradford County,PA,26.68,20% - 29.9%
42017,Bucks County,PA,76.5,70% or More
42019,Butler County,PA,53.82,50% - 59.9%
42021,Cambria County,PA,36.12,30% - 39.9%
42023,Cameron County,PA,32.93,30% - 39.9%
42025,Carbon County,PA,44.87,40% - 49.9%
42027,Centre County,PA,60.4,60% - 69.9%
42029,Chester County,PA,93.17,70% or More
42031,Clarion County,PA,24.57,20% - 29.9%
42033,Clearfield County,PA,26,20% - 29.9%
42035,Clinton County,PA,25.85,20% - 29.9%
42037,Columbia County,PA,53.39,50% - 59.9%
42039,Crawford County,PA,30.85,30% - 39.9%
42041,Cumberland County,PA,64.5,60% - 69.9%
42043,Dauphin County,PA,54.14,50% - 59.9%
42045,Delaware County,PA,85.16,70% or More
42047,Elk County,PA,30.69,30% - 39.9%
42049,Erie County,PA,50.62,50% - 59.9%
42051,Fayette County,PA,35.9,30% - 39.9%
42053,Forest County,PA,14.29,0% - 19.9%
42055,Franklin County,PA,34.44,30% - 39.9%
42057,Fulton County,PA,14.06,0% - 19.9%
42059,Greene County,PA,28.45,20% - 29.9%
42061,Huntingdon County,PA,23.05,20% - 29.9%
42063,Indiana County,PA,29.34,20% - 29.9%
42065,Jefferson County,PA,23.99,20% - 29.9%
42067,Juniata County,PA,18.99,0% - 19.9%
42069,Lackawanna County,PA,66.84,60% - 69.9%
42071,Lancaster County,PA,46.33,40% - 49.9%
42073,Lawrence County,PA,35.98,30% - 39.9%
42075,Lebanon County,PA,41.03,40% - 49.9%
42077,Lehigh County,PA,67.71,60% - 69.9%
42079,Luzerne County,PA,56.62,50% - 59.9%
42081,Lycoming County,PA,33.06,30% - 39.9%
42083,McKean County,PA,45.12,40% - 49.9%
42085,Mercer County,PA,33.25,30% - 39.9%
42087,Mifflin County,PA,24.07,20% - 29.9%
42089,Monroe County,PA,51.51,50% - 59.9%
42091,Montgomery County,PA,96.15,70% or More
42093,Montour County,PA,64.39,60% - 69.9%
42095,Northampton County,PA,64.26,60% - 69.9%
42097,Northumberland County,PA,36.71,30% - 39.9%
42099,Perry County,PA,29.09,20% - 29.9%
42101,Philadelphia County,PA,72.35,70% or More
42103,Pike County,PA,53.33,50% - 59.9%
42105,Potter County,PA,22.47,20% - 29.9%
42107,Schuylkill County,PA,41.33,40% - 49.9%
42109,Snyder County,PA,26.52,20% - 29.9%
42111,Somerset County,PA,26.38,20% - 29.9%
42113,Sullivan County,PA,31.73,30% - 39.9%
42115,Susquehanna County,PA,34.89,30% - 39.9%
42117,Tioga County,PA,34.54,30% - 39.9%
42119,Union County,PA,44.16,40% - 49.9%
42121,Venango County,PA,30.8,30% - 39.9%
42123,Warren County,PA,34.65,30% - 39.9%
42125,Washington County,PA,54.74,50% - 59.9%
42127,Wayne County,PA,52.13,50% - 59.9%
42129,Westmoreland County,PA,45.27,40% - 49.9%
42131,Wyoming County,PA,46.92,40% - 49.9%
42133,York County,PA,46.34,40% - 49.9%
72001,Adjuntas Municipio,PR,91.99,70% or More
72003,Aguada Municipio,PR,84.11,70% or More
72005,Aguadilla Municipio,PR,93.21,70% or More
72007,Aguas Buenas Municipio,PR,89.07,70% or More
72009,Aibonito Municipio,PR,98.86,70% or More
72011,Anasco Municipio,PR,84.86,70% or More
72013,Arecibo Municipio,PR,99.99,70% or More
72015,Arroyo Municipio,PR,86.8,70% or More
72017,Barceloneta Municipio,PR,81.76,70% or More
72019,Barranquitas Municipio,PR,97.67,70% or More
72021,Bayamon Municipio,PR,93.05,70% or More
72023,Cabo Rojo Municipio,PR,79.83,70% or More
72025,Caguas Municipio,PR,92.69,70% or More
72027,Camuy Municipio,PR,85.63,70% or More
72029,Canovanas Municipio,PR,91.29,70% or More
72031,Carolina Municipio,PR,87.29,70% or More
72033,Catano Municipio,PR,92.22,70% or More
72035,Cayey Municipio,PR,94.04,70% or More
72037,Ceiba Municipio,PR,84.54,70% or More
72039,Ciales Municipio,PR,99.99,70% or More
72041,Cidra Municipio,PR,92.23,70% or More
72043,Coamo Municipio,PR,89.12,70% or More
72045,Comerio Municipio,PR,86.28,70% or More
72047,Corozal Municipio,PR,99.99,70% or More
72049,Culebra Municipio,PR,77.05,70% or More
72051,Dorado Municipio,PR,99.99,70% or More
72053,Fajardo Municipio,PR,90.84,70% or More
72054,Florida Municipio,PR,99.99,70% or More
72055,Guanica Municipio,PR,86.39,70% or More
72057,Guayama Municipio,PR,81.7,70% or More
72059,Guayanilla Municipio,PR,99.99,70% or More
72061,Guaynabo Municipio,PR,88.51,70% or More
72063,Gurabo Municipio,PR,73.03,70% or More
72065,Hatillo Municipio,PR,76.15,70% or More
72067,Hormigueros Municipio,PR,79.1,70% or More
72069,Humacao Municipio,PR,93.09,70% or More
72071,Isabela Municipio,PR,86.44,70% or More
72073,Jayuya Municipio,PR,99.9,70% or More
72075,Juana Diaz Municipio,PR,89.65,70% or More
72077,Juncos Municipio,PR,94.44,70% or More
72079,Lajas Municipio,PR,87.75,70% or More
72081,Lares Municipio,PR,99.99,70% or More
72083,Las Marias Municipio,PR,99.99,70% or More
72085,Las Piedras Municipio,PR,90.97,70% or More
72087,Loiza Municipio,PR,78.72,70% or More
72089,Luquillo Municipio,PR,83.07,70% or More
72091,Manati Municipio,PR,89.68,70% or More
72093,Maricao Municipio,PR,83.2,70% or More
72095,Maunabo Municipio,PR,85.85,70% or More
72097,Mayaguez Municipio,PR,87.2,70% or More
72099,Moca Municipio,PR,92.51,70% or More
72101,Morovis Municipio,PR,93.01,70% or More
72103,Naguabo Municipio,PR,76.94,70% or More
72105,Naranjito Municipio,PR,98.92,70% or More
72107,Orocovis Municipio,PR,98.96,70% or More
72109,Patillas Municipio,PR,87.26,70% or More
72111,Penuelas Municipio,PR,99.99,70% or More
72113,Ponce Municipio,PR,99.99,70% or More
72115,Quebradillas Municipio,PR,96.63,70% or More
72117,Rincon Municipio,PR,81.69,70% or More
72119,Rio Grande Municipio,PR,87.71,70% or More
72121,Sabana Grande Municipio,PR,93.21,70% or More
72123,Salinas Municipio,PR,86.38,70% or More
72125,San German Municipio,PR,82.43,70% or More
72127,San Juan Municipio,PR,71.69,70% or More
72129,San Lorenzo Municipio,PR,91.1,70% or More
72131,San Sebastian Municipio,PR,99.99,70% or More
72133,Santa Isabel Municipio,PR,96.89,70% or More
72135,Toa Alta Municipio,PR,81.78,70% or More
72137,Toa Baja Municipio,PR,82.5,70% or More
72139,Trujillo Alto Municipio,PR,45.64,40% - 49.9%
72141,Utuado Municipio,PR,86.97,70% or More
72143,Vega Alta Municipio,PR,80.91,70% or More
72145,Vega Baja Municipio,PR,97.61,70% or More
72147,Vieques Municipio,PR,82.91,70% or More
72149,Villalba Municipio,PR,99.99,70% or More
72151,Yabucoa Municipio,PR,90.03,70% or More
72153,Yauco Municipio,PR,99.99,70% or More
44001,Bristol County,RI,84.65,70% or More
44003,Kent County,RI,74.15,70% or More
44005,Newport County,RI,85,70% or More
44007,Providence County,RI,71.5,70% or More
44009,Washington County,RI,78.25,70% or More
45001,Abbeville County,SC,22.3,20% - 29.9%
45003,Aiken County,SC,34.86,30% - 39.9%
45005,Allendale County,SC,44.07,40% - 49.9%
45007,Anderson County,SC,27.23,20% - 29.9%
45009,Bamberg County,SC,38.11,30% - 39.9%
45011,Barnwell County,SC,42.93,40% - 49.9%
45013,Beaufort County,SC,60.82,60% - 69.9%
45015,Berkeley County,SC,45.55,40% - 49.9%
45017,Calhoun County,SC,34.09,30% - 39.9%
45019,Charleston County,SC,63.1,60% - 69.9%
45021,Cherokee County,SC,20.92,20% - 29.9%
45023,Chester County,SC,30.54,30% - 39.9%
45025,Chesterfield County,SC,23.95,20% - 29.9%
45027,Clarendon County,SC,40.71,40% - 49.9%
45029,Colleton County,SC,36.06,30% - 39.9%
45031,Darlington County,SC,29.82,20% - 29.9%
45033,Dillon County,SC,25.64,20% - 29.9%
45035,Dorchester County,SC,52.27,50% - 59.9%
45037,Edgefield County,SC,42.18,40% - 49.9%
45039,Fairfield County,SC,42.17,40% - 49.9%
45041,Florence County,SC,41.86,40% - 49.9%
45043,Georgetown County,SC,42.32,40% - 49.9%
45045,Greenville County,SC,45.84,40% - 49.9%
45047,Greenwood County,SC,32.35,30% - 39.9%
45049,Hampton County,SC,54.26,50% - 59.9%
45051,Horry County,SC,40.86,40% - 49.9%
45053,Jasper County,SC,35.03,30% - 39.9%
45055,Kershaw County,SC,53.67,50% - 59.9%
45057,Lancaster County,SC,37.52,30% - 39.9%
45059,Laurens County,SC,23.13,20% - 29.9%
45061,Lee County,SC,30.43,30% - 39.9%
45063,Lexington County,SC,48.87,40% - 49.9%
45067,Marion County,SC,37.22,30% - 39.9%
45069,Marlboro County,SC,30.77,30% - 39.9%
45065,McCormick County,SC,44.31,40% - 49.9%
45071,Newberry County,SC,43.05,40% - 49.9%
45073,Oconee County,SC,27.64,20% - 29.9%
45075,Orangeburg County,SC,46.1,40% - 49.9%
45077,Pickens County,SC,34.97,30% - 39.9%
45079,Richland County,SC,64.96,60% - 69.9%
45081,Saluda County,SC,24.39,20% - 29.9%
45083,Spartanburg County,SC,31.64,30% - 39.9%
45085,Sumter County,SC,40.35,40% - 49.9%
45087,Union County,SC,20.93,20% - 29.9%
45089,Williamsburg County,SC,37,30% - 39.9%
45091,York County,SC,49.54,40% - 49.9%
46003,Aurora County,SD,35.48,30% - 39.9%
46005,Beadle County,SD,43.09,40% - 49.9%
46007,Bennett County,SD,65.85,60% - 69.9%
46009,Bon Homme County,SD,30.46,30% - 39.9%
46011,Brookings County,SD,53.9,50% - 59.9%
46013,Brown County,SD,47.02,40% - 49.9%
46015,Brule County,SD,52.45,50% - 59.9%
46017,Buffalo County,SD,74.37,70% or More
46019,Butte County,SD,21.32,20% - 29.9%
46021,Campbell County,SD,15.58,0% - 19.9%
46023,Charles Mix County,SD,59.45,50% - 59.9%
46025,Clark County,SD,31,30% - 39.9%
46027,Clay County,SD,84.41,70% or More
46029,Codington County,SD,34.26,30% - 39.9%
46031,Corson County,SD,51.02,50% - 59.9%
46033,Custer County,SD,26.47,20% - 29.9%
46035,Davison County,SD,63.13,60% - 69.9%
46037,Day County,SD,65.41,60% - 69.9%
46039,Deuel County,SD,28.27,20% - 29.9%
46041,Dewey County,SD,85.28,70% or More
46043,Douglas County,SD,23.83,20% - 29.9%
46045,Edmunds County,SD,30.39,30% - 39.9%
46047,Fall River County,SD,29.88,20% - 29.9%
46049,Faulk County,SD,41.01,40% - 49.9%
46051,Grant County,SD,36.31,30% - 39.9%
46053,Gregory County,SD,33.62,30% - 39.9%
46055,Haakon County,SD,17.42,0% - 19.9%
46057,Hamlin County,SD,27.33,20% - 29.9%
46059,Hand County,SD,28.07,20% - 29.9%
46061,Hanson County,SD,27.54,20% - 29.9%
46063,Harding County,SD,4.04,0% - 19.9%
46065,Hughes County,SD,58.71,50% - 59.9%
46067,Hutchinson County,SD,37.79,30% - 39.9%
46069,Hyde County,SD,31.68,30% - 39.9%
46071,Jackson County,SD,56.33,50% - 59.9%
46073,Jerauld County,SD,31.33,30% - 39.9%
46075,Jones County,SD,98.28,70% or More
46077,Kingsbury County,SD,42.62,40% - 49.9%
46079,Lake County,SD,42.61,40% - 49.9%
46081,Lawrence County,SD,49.97,40% - 49.9%
46083,Lincoln County,SD,62.44,60% - 69.9%
46085,Lyman County,SD,75.41,70% or More
46091,Marshall County,SD,41.41,40% - 49.9%
46087,McCook County,SD,44.49,40% - 49.9%
46089,McPherson County,SD,7.77,0% - 19.9%
46093,Meade County,SD,41.18,40% - 49.9%
46095,Mellette County,SD,36.19,30% - 39.9%
46097,Miner County,SD,30.57,30% - 39.9%
46099,Minnehaha County,SD,66.4,60% - 69.9%
46101,Moody County,SD,42.15,40% - 49.9%
46102,Oglala Lakota County,SD,99.99,70% or More
46103,Pennington County,SD,53.61,50% - 59.9%
46105,Perkins County,SD,5.91,0% - 19.9%
46107,Potter County,SD,29.17,20% - 29.9%
46109,Roberts County,SD,86.9,70% or More
46111,Sanborn County,SD,30.56,30% - 39.9%
46115,Spink County,SD,35.44,30% - 39.9%
46117,Stanley County,SD,38.57,30% - 39.9%
46119,Sully County,SD,26.61,20% - 29.9%
46121,Todd County,SD,82.98,70% or More
46123,Tripp County,SD,17.85,0% - 19.9%
46125,Turner County,SD,40.62,40% - 49.9%
46127,Union County,SD,39.13,30% - 39.9%
46129,Walworth County,SD,24.7,20% - 29.9%
46135,Yankton County,SD,56.67,50% - 59.9%
46137,Ziebach County,SD,34.33,30% - 39.9%
47001,Anderson County,TN,40.37,40% - 49.9%
47003,Bedford County,TN,28.24,20% - 29.9%
47005,Benton County,TN,21.12,20% - 29.9%
47007,Bledsoe County,TN,19.49,0% - 19.9%
47009,Blount County,TN,35.36,30% - 39.9%
47011,Bradley County,TN,25.1,20% - 29.9%
47013,Campbell County,TN,22.48,20% - 29.9%
47015,Cannon County,TN,13.3,0% - 19.9%
47017,Carroll County,TN,22.14,20% - 29.9%
47019,Carter County,TN,26.42,20% - 29.9%
47021,Cheatham County,TN,34.1,30% - 39.9%
47023,Chester County,TN,22.18,20% - 29.9%
47025,Claiborne County,TN,20.85,20% - 29.9%
47027,Clay County,TN,11.13,0% - 19.9%
47029,Cocke County,TN,26.66,20% - 29.9%
47031,Coffee County,TN,24.3,20% - 29.9%
47033,Crockett County,TN,27.79,20% - 29.9%
47035,Cumberland County,TN,21.75,20% - 29.9%
47037,Davidson County,TN,61.47,60% - 69.9%
47039,Decatur County,TN,16.18,0% - 19.9%
47041,DeKalb County,TN,16.19,0% - 19.9%
47043,Dickson County,TN,32.13,30% - 39.9%
47045,Dyer County,TN,22.76,20% - 29.9%
47047,Fayette County,TN,42.95,40% - 49.9%
47049,Fentress County,TN,10.06,0% - 19.9%
47051,Franklin County,TN,18.48,0% - 19.9%
47053,Gibson County,TN,19.88,0% - 19.9%
47055,Giles County,TN,18.54,0% - 19.9%
47057,Grainger County,TN,21.3,20% - 29.9%
47059,Greene County,TN,30.93,30% - 39.9%
47061,Grundy County,TN,12.35,0% - 19.9%
47063,Hamblen County,TN,26.65,20% - 29.9%
47065,Hamilton County,TN,52.42,50% - 59.9%
47067,Hancock County,TN,12.81,0% - 19.9%
47069,Hardeman County,TN,33.53,30% - 39.9%
47071,Hardin County,TN,20.43,20% - 29.9%
47073,Hawkins County,TN,24.18,20% - 29.9%
47075,Haywood County,TN,34.37,30% - 39.9%
47077,Henderson County,TN,19.79,0% - 19.9%
47079,Henry County,TN,24.83,20% - 29.9%
47081,Hickman County,TN,19.79,0% - 19.9%
47083,Houston County,TN,20.35,20% - 29.9%
47085,Humphreys County,TN,21.62,20% - 29.9%
47087,Jackson County,TN,13.3,0% - 19.9%
47089,Jefferson County,TN,33.56,30% - 39.9%
47091,Johnson County,TN,21.31,20% - 29.9%
47093,Knox County,TN,48.39,40% - 49.9%
47095,Lake County,TN,21.84,20% - 29.9%
47097,Lauderdale County,TN,15.49,0% - 19.9%
47099,Lawrence County,TN,19.65,0% - 19.9%
47101,Lewis County,TN,14.09,0% - 19.9%
47103,Lincoln County,TN,18.2,0% - 19.9%
47105,Loudon County,TN,33.9,30% - 39.9%
47111,Macon County,TN,10.75,0% - 19.9%
47113,Madison County,TN,42.4,40% - 49.9%
47115,Marion County,TN,27.48,20% - 29.9%
47117,Marshall County,TN,21.43,20% - 29.9%
47119,Maury County,TN,52.03,50% - 59.9%
47107,McMinn County,TN,18.81,0% - 19.9%
47109,McNairy County,TN,21.38,20% - 29.9%
47121,Meigs County,TN,33.03,30% - 39.9%
47123,Monroe County,TN,17.15,0% - 19.9%
47125,Montgomery County,TN,44.85,40% - 49.9%
47127,Moore County,TN,8.23,0% - 19.9%
47129,Morgan County,TN,22.45,20% - 29.9%
47131,Obion County,TN,17.41,0% - 19.9%
47133,Overton County,TN,14.73,0% - 19.9%
47135,Perry County,TN,21.47,20% - 29.9%
47137,Pickett County,TN,17.36,0% - 19.9%
47139,Polk County,TN,14.2,0% - 19.9%
47141,Putnam County,TN,31.74,30% - 39.9%
47143,Rhea County,TN,18.41,0% - 19.9%
47145,Roane County,TN,23.94,20% - 29.9%
47147,Robertson County,TN,34.63,30% - 39.9%
47149,Rutherford County,TN,48.32,40% - 49.9%
47151,Scott County,TN,14.88,0% - 19.9%
47153,Sequatchie County,TN,19.79,0% - 19.9%
47155,Sevier County,TN,32.97,30% - 39.9%
47157,Shelby County,TN,52.13,50% - 59.9%
47159,Smith County,TN,12.46,0% - 19.9%
47161,Stewart County,TN,25.54,20% - 29.9%
47163,Sullivan County,TN,40.22,40% - 49.9%
47165,Sumner County,TN,35.76,30% - 39.9%
47167,Tipton County,TN,25.84,20% - 29.9%
47169,Trousdale County,TN,20.53,20% - 29.9%
47171,Unicoi County,TN,35.01,30% - 39.9%
47173,Union County,TN,15.61,0% - 19.9%
47175,Van Buren County,TN,27.66,20% - 29.9%
47177,Warren County,TN,22.75,20% - 29.9%
47179,Washington County,TN,47.85,40% - 49.9%
47181,Wayne County,TN,24.45,20% - 29.9%
47183,Weakley County,TN,21.14,20% - 29.9%
47185,White County,TN,18.57,0% - 19.9%
47187,Williamson County,TN,57.11,50% - 59.9%
47189,Wilson County,TN,41.9,40% - 49.9%
48001,Anderson County,TX,0,No Data
48003,Andrews County,TX,0,No Data
48005,Angelina County,TX,0,No Data
48007,Aransas County,TX,41.21,40% - 49.9%
48009,Archer County,TX,0,No Data
48011,Armstrong County,TX,0,No Data
48013,Atascosa County,TX,0,No Data
48015,Austin County,TX,0,No Data
48017,Bailey County,TX,0,No Data
48019,Bandera County,TX,0,No Data
48021,Bastrop County,TX,56.12,50% - 59.9%
48023,Baylor County,TX,0,No Data
48025,Bee County,TX,0,No Data
48027,Bell County,TX,54.03,50% - 59.9%
48029,Bexar County,TX,77.66,70% or More
48031,Blanco County,TX,0,No Data
48033,Borden County,TX,0,No Data
48035,Bosque County,TX,0,No Data
48037,Bowie County,TX,23.74,20% - 29.9%
48039,Brazoria County,TX,59.24,50% - 59.9%
48041,Brazos County,TX,48.41,40% - 49.9%
48043,Brewster County,TX,0,No Data
48045,Briscoe County,TX,0,No Data
48047,Brooks County,TX,0,No Data
48049,Brown County,TX,0,No Data
48051,Burleson County,TX,0,No Data
48053,Burnet County,TX,0,No Data
48055,Caldwell County,TX,0,No Data
48057,Calhoun County,TX,0,No Data
48059,Callahan County,TX,0,No Data
48061,Cameron County,TX,99.99,70% or More
48063,Camp County,TX,0,No Data
48065,Carson County,TX,0,No Data
48067,Cass County,TX,16.61,0% - 19.9%
48069,Castro County,TX,0,No Data
48071,Chambers County,TX,0,No Data
48073,Cherokee County,TX,0,No Data
48075,Childress County,TX,0,No Data
48077,Clay County,TX,0,No Data
48079,Cochran County,TX,0,No Data
48081,Coke County,TX,0,No Data
48083,Coleman County,TX,0,No Data
48085,Collin County,TX,68.24,60% - 69.9%
48087,Collingsworth County,TX,0,No Data
48089,Colorado County,TX,0,No Data
48091,Comal County,TX,50.84,50% - 59.9%
48093,Comanche County,TX,0,No Data
48095,Concho County,TX,0,No Data
48097,Cooke County,TX,0,No Data
48099,Coryell County,TX,0,No Data
48101,Cottle County,TX,0,No Data
48103,Crane County,TX,0,No Data
48105,Crockett County,TX,0,No Data
48107,Crosby County,TX,0,No Data
48109,Culberson County,TX,0,No Data
48111,Dallam County,TX,0,No Data
48113,Dallas County,TX,61.72,60% - 69.9%
48115,Dawson County,TX,0,No Data
48117,Deaf Smith County,TX,0,No Data
48119,Delta County,TX,0,No Data
48121,Denton County,TX,59.95,50% - 59.9%
48123,DeWitt County,TX,0,No Data
48125,Dickens County,TX,0,No Data
48127,Dimmit County,TX,0,No Data
48129,Donley County,TX,0,No Data
48131,Duval County,TX,0,No Data
48133,Eastland County,TX,0,No Data
48135,Ector County,TX,37.45,30% - 39.9%
48137,Edwards County,TX,0,No Data
48141,El Paso County,TX,99.99,70% or More
48139,Ellis County,TX,0,No Data
48143,Erath County,TX,0,No Data
48145,Falls County,TX,0,No Data
48147,Fannin County,TX,0,No Data
48149,Fayette County,TX,0,No Data
48151,Fisher County,TX,0,No Data
48153,Floyd County,TX,0,No Data
48155,Foard County,TX,0,No Data
48157,Fort Bend County,TX,79.71,70% or More
48159,Franklin County,TX,0,No Data
48161,Freestone County,TX,0,No Data
48163,Frio County,TX,0,No Data
48165,Gaines County,TX,0,No Data
48167,Galveston County,TX,56.19,50% - 59.9%
48169,Garza County,TX,0,No Data
48171,Gillespie County,TX,0,No Data
48173,Glasscock County,TX,0,No Data
48175,Goliad County,TX,0,No Data
48177,Gonzales County,TX,0,No Data
48179,Gray County,TX,0,No Data
48181,Grayson County,TX,26.33,20% - 29.9%
48183,Gregg County,TX,0,No Data
48185,Grimes County,TX,0,No Data
48187,Guadalupe County,TX,55.75,50% - 59.9%
48189,Hale County,TX,0,No Data
48191,Hall County,TX,0,No Data
48193,Hamilton County,TX,0,No Data
48195,Hansford County,TX,0,No Data
48197,Hardeman County,TX,0,No Data
48199,Hardin County,TX,0,No Data
48201,Harris County,TX,68.71,60% - 69.9%
48203,Harrison County,TX,26.68,20% - 29.9%
48205,Hartley County,TX,0,No Data
48207,Haskell County,TX,0,No Data
48209,Hays County,TX,67.88,60% - 69.9%
48211,Hemphill County,TX,0,No Data
48213,Henderson County,TX,0,No Data
48215,Hidalgo County,TX,93.4,70% or More
48217,Hill County,TX,0,No Data
48219,Hockley County,TX,0,No Data
48221,Hood County,TX,0,No Data
48223,Hopkins County,TX,0,No Data
48225,Houston County,TX,0,No Data
48227,Howard County,TX,0,No Data
48229,Hudspeth County,TX,0,No Data
48231,Hunt County,TX,32.42,30% - 39.9%
48233,Hutchinson County,TX,14.99,0% - 19.9%
48235,Irion County,TX,0,No Data
48237,Jack County,TX,0,No Data
48239,Jackson County,TX,0,No Data
48241,Jasper County,TX,0,No Data
48243,Jeff Davis County,TX,0,No Data
48245,Jefferson County,TX,44.22,40% - 49.9%
48247,Jim Hogg County,TX,0,No Data
48249,Jim Wells County,TX,0,No Data
48251,Johnson County,TX,0,No Data
48253,Jones County,TX,0,No Data
48255,Karnes County,TX,0,No Data
48257,Kaufman County,TX,44.47,40% - 49.9%
48259,Kendall County,TX,0,No Data
48261,Kenedy County,TX,0,No Data
48263,Kent County,TX,0,No Data
48265,Kerr County,TX,0,No Data
48267,Kimble County,TX,0,No Data
48269,King County,TX,0,No Data
48271,Kinney County,TX,0,No Data
48273,Kleberg County,TX,0,No Data
48275,Knox County,TX,0,No Data
48283,La Salle County,TX,0,No Data
48277,Lamar County,TX,22.98,20% - 29.9%
48279,Lamb County,TX,0,No Data
48281,Lampasas County,TX,0,No Data
48285,Lavaca County,TX,0,No Data
48287,Lee County,TX,0,No Data
48289,Leon County,TX,0,No Data
48291,Liberty County,TX,0,No Data
48293,Limestone County,TX,0,No Data
48295,Lipscomb County,TX,9.77,0% - 19.9%
48297,Live Oak County,TX,0,No Data
48299,Llano County,TX,0,No Data
48301,Loving County,TX,0,No Data
48303,Lubbock County,TX,39.43,30% - 39.9%
48305,Lynn County,TX,0,No Data
48313,Madison County,TX,0,No Data
48315,Marion County,TX,24.03,20% - 29.9%
48317,Martin County,TX,0,No Data
48319,Mason County,TX,0,No Data
48321,Matagorda County,TX,0,No Data
48323,Maverick County,TX,99.99,70% or More
48307,McCulloch County,TX,0,No Data
48309,McLennan County,TX,42.98,40% - 49.9%
48311,McMullen County,TX,0,No Data
48325,Medina County,TX,0,No Data
48327,Menard County,TX,0,No Data
48329,Midland County,TX,36.99,30% - 39.9%
48331,Milam County,TX,0,No Data
48333,Mills County,TX,0,No Data
48335,Mitchell County,TX,0,No Data
48337,Montague County,TX,0,No Data
48339,Montgomery County,TX,51.34,50% - 59.9%
48341,Moore County,TX,0,No Data
48343,Morris County,TX,0,No Data
48345,Motley County,TX,0,No Data
48347,Nacogdoches County,TX,0,No Data
48349,Navarro County,TX,0,No Data
48351,Newton County,TX,0,No Data
48353,Nolan County,TX,0,No Data
48355,Nueces County,TX,59.02,50% - 59.9%
48357,Ochiltree County,TX,0,No Data
48359,Oldham County,TX,0,No Data
48361,Orange County,TX,19.56,0% - 19.9%
48363,Palo Pinto County,TX,0,No Data
48365,Panola County,TX,17.09,0% - 19.9%
48367,Parker County,TX,0,No Data
48369,Parmer County,TX,0,No Data
48371,Pecos County,TX,0,No Data
48373,Polk County,TX,23.15,20% - 29.9%
48375,Potter County,TX,0,No Data
48377,Presidio County,TX,0,No Data
48379,Rains County,TX,0,No Data
48381,Randall County,TX,29.66,20% - 29.9%
48383,Reagan County,TX,0,No Data
48385,Real County,TX,0,No Data
48387,Red River County,TX,0,No Data
48389,Reeves County,TX,0,No Data
48391,Refugio County,TX,0,No Data
48393,Roberts County,TX,0,No Data
48395,Robertson County,TX,0,No Data
48397,Rockwall County,TX,0,No Data
48399,Runnels County,TX,0,No Data
48401,Rusk County,TX,0,No Data
48403,Sabine County,TX,10.52,0% - 19.9%
48405,San Augustine County,TX,0,No Data
48407,San Jacinto County,TX,0,No Data
48409,San Patricio County,TX,0,No Data
48411,San Saba County,TX,0,No Data
48413,Schleicher County,TX,0,No Data
48415,Scurry County,TX,0,No Data
48417,Shackelford County,TX,0,No Data
48419,Shelby County,TX,19.76,0% - 19.9%
48421,Sherman County,TX,0,No Data
48423,Smith County,TX,33.11,30% - 39.9%
48425,Somervell County,TX,0,No Data
48427,Starr County,TX,0,No Data
48429,Stephens County,TX,0,No Data
48431,Sterling County,TX,0,No Data
48433,Stonewall County,TX,0,No Data
48435,Sutton County,TX,0,No Data
48437,Swisher County,TX,0,No Data
48439,Tarrant County,TX,53.37,50% - 59.9%
48441,Taylor County,TX,0,No Data
48443,Terrell County,TX,0,No Data
48445,Terry County,TX,0,No Data
48447,Throckmorton County,TX,0,No Data
48449,Titus County,TX,0,No Data
48451,Tom Green County,TX,0,No Data
48453,Travis County,TX,79.95,70% or More
48455,Trinity County,TX,0,No Data
48457,Tyler County,TX,0,No Data
48459,Upshur County,TX,0,No Data
48461,Upton County,TX,0,No Data
48463,Uvalde County,TX,0,No Data
48465,Val Verde County,TX,0,No Data
48467,Van Zandt County,TX,0,No Data
48469,Victoria County,TX,0,No Data
48471,Walker County,TX,38.53,30% - 39.9%
48473,Waller County,TX,0,No Data
48475,Ward County,TX,0,No Data
48477,Washington County,TX,0,No Data
48479,Webb County,TX,99.99,70% or More
48481,Wharton County,TX,0,No Data
48483,Wheeler County,TX,0,No Data
48485,Wichita County,TX,38.02,30% - 39.9%
48487,Wilbarger County,TX,0,No Data
48489,Willacy County,TX,0,No Data
48491,Williamson County,TX,68.94,60% - 69.9%
48493,Wilson County,TX,0,No Data
48495,Winkler County,TX,0,No Data
48497,Wise County,TX,0,No Data
48499,Wood County,TX,0,No Data
48501,Yoakum County,TX,0,No Data
48503,Young County,TX,0,No Data
48505,Zapata County,TX,0,No Data
48507,Zavala County,TX,0,No Data
49001,Beaver County,UT,33.6,30% - 39.9%
49003,Box Elder County,UT,47.72,40% - 49.9%
49005,Cache County,UT,60.99,60% - 69.9%
49007,Carbon County,UT,38.04,30% - 39.9%
49009,Daggett County,UT,38.95,30% - 39.9%
49011,Davis County,UT,71.97,70% or More
49013,Duchesne County,UT,39.86,30% - 39.9%
49015,Emery County,UT,28.15,20% - 29.9%
49017,Garfield County,UT,32.98,30% - 39.9%
49019,Grand County,UT,48.79,40% - 49.9%
49021,Iron County,UT,33.85,30% - 39.9%
49023,Juab County,UT,22.53,20% - 29.9%
49025,Kane County,UT,26.22,20% - 29.9%
49027,Millard County,UT,26.88,20% - 29.9%
49029,Morgan County,UT,49.01,40% - 49.9%
49031,Piute County,UT,17.88,0% - 19.9%
49033,Rich County,UT,32.94,30% - 39.9%
49035,Salt Lake County,UT,71.09,70% or More
49037,San Juan County,UT,61.98,60% - 69.9%
49039,Sanpete County,UT,42.99,40% - 49.9%
49041,Sevier County,UT,34.02,30% - 39.9%
49043,Summit County,UT,80.23,70% or More
49045,Tooele County,UT,60.29,60% - 69.9%
49047,Uintah County,UT,47.2,40% - 49.9%
49049,Utah County,UT,54.04,50% - 59.9%
49051,Wasatch County,UT,57.79,50% - 59.9%
49053,Washington County,UT,37.15,30% - 39.9%
49055,Wayne County,UT,29.96,20% - 29.9%
49057,Weber County,UT,59.33,50% - 59.9%
51001,Accomack County,VA,55.87,50% - 59.9%
51003,Albemarle County,VA,77.31,70% or More
51510,Alexandria city,VA,87.65,70% or More
51005,Alleghany County,VA,22.43,20% - 29.9%
51007,Amelia County,VA,17.85,0% - 19.9%
51009,Amherst County,VA,37.25,30% - 39.9%
51011,Appomattox County,VA,15.54,0% - 19.9%
51013,Arlington County,VA,85.7,70% or More
51015,Augusta County,VA,35.86,30% - 39.9%
51017,Bath County,VA,21.9,20% - 29.9%
51019,Bedford County,VA,25.67,20% - 29.9%
51021,Bland County,VA,20.94,20% - 29.9%
51023,Botetourt County,VA,36.25,30% - 39.9%
51520,Bristol city,VA,49.38,40% - 49.9%
51025,Brunswick County,VA,38.41,30% - 39.9%
51027,Buchanan County,VA,35.06,30% - 39.9%
51029,Buckingham County,VA,33.58,30% - 39.9%
51530,Buena Vista city,VA,0,No Data
51031,Campbell County,VA,24.1,20% - 29.9%
51033,Caroline County,VA,30,30% - 39.9%
51035,Carroll County,VA,20,20% - 29.9%
51037,Charlotte County,VA,21.26,20% - 29.9%
51540,Charlottesville city,VA,67.61,60% - 69.9%
51550,Chesapeake city,VA,41.82,40% - 49.9%
51041,Chesterfield County,VA,57.45,50% - 59.9%
51043,Clarke County,VA,52.51,50% - 59.9%
51570,Colonial Heights city,VA,29.29,20% - 29.9%
51580,Covington city,VA,0,No Data
51045,Craig County,VA,16.71,0% - 19.9%
51047,Culpeper County,VA,39.86,30% - 39.9%
51049,Cumberland County,VA,28.14,20% - 29.9%
51590,Danville city,VA,0,No Data
51051,Dickenson County,VA,37.35,30% - 39.9%
51053,Dinwiddie County,VA,29.9,20% - 29.9%
51595,Emporia city,VA,0,No Data
51057,Essex County,VA,29.55,20% - 29.9%
51600,Fairfax city,VA,65.71,60% - 69.9%
51059,Fairfax County,VA,93.25,70% or More
51610,Falls Church city,VA,72.24,70% or More
51061,Fauquier County,VA,57.44,50% - 59.9%
51063,Floyd County,VA,25.23,20% - 29.9%
51065,Fluvanna County,VA,60.21,60% - 69.9%
51620,Franklin city,VA,0,No Data
51067,Franklin County,VA,29.22,20% - 29.9%
51069,Frederick County,VA,39.02,30% - 39.9%
51630,Fredericksburg city,VA,39.17,30% - 39.9%
51640,Galax city,VA,0,No Data
51071,Giles County,VA,28.02,20% - 29.9%
51073,Gloucester County,VA,46.45,40% - 49.9%
51075,Goochland County,VA,57.3,50% - 59.9%
51077,Grayson County,VA,20.62,20% - 29.9%
51079,Greene County,VA,39.82,30% - 39.9%
51081,Greensville County,VA,23.09,20% - 29.9%
51083,Halifax County,VA,31.53,30% - 39.9%
51650,Hampton city,VA,51.69,50% - 59.9%
51085,Hanover County,VA,56.79,50% - 59.9%
51660,Harrisonburg city,VA,46.96,40% - 49.9%
51087,Henrico County,VA,57.61,50% - 59.9%
51089,Henry County,VA,25.33,20% - 29.9%
51091,Highland County,VA,47.73,40% - 49.9%
51670,Hopewell city,VA,23.56,20% - 29.9%
51093,Isle of Wight County,VA,44.54,40% - 49.9%
51095,James City County,VA,39.05,30% - 39.9%
51097,King and Queen County,VA,35.36,30% - 39.9%
51099,King George County,VA,35.38,30% - 39.9%
51101,King William County,VA,40.36,40% - 49.9%
51103,Lancaster County,VA,32.24,30% - 39.9%
51105,Lee County,VA,32.04,30% - 39.9%
51678,Lexington city,VA,56.82,50% - 59.9%
51107,Loudoun County,VA,88.88,70% or More
51109,Louisa County,VA,31.83,30% - 39.9%
51111,Lunenburg County,VA,35.58,30% - 39.9%
51680,Lynchburg city,VA,28.63,20% - 29.9%
51113,Madison County,VA,43.26,40% - 49.9%
51683,Manassas city,VA,52.39,50% - 59.9%
51685,Manassas Park city,VA,0,No Data
51690,Martinsville city,VA,0,No Data
51115,Mathews County,VA,38.99,30% - 39.9%
51117,Mecklenburg County,VA,24.84,20% - 29.9%
51119,Middlesex County,VA,51.97,50% - 59.9%
51121,Montgomery County,VA,56.17,50% - 59.9%
51125,Nelson County,VA,36.66,30% - 39.9%
51127,New Kent County,VA,41.33,40% - 49.9%
51700,Newport News city,VA,48.39,40% - 49.9%
51710,Norfolk city,VA,55.53,50% - 59.9%
51131,Northampton County,VA,60.23,60% - 69.9%
51133,Northumberland County,VA,29.03,20% - 29.9%
51720,Norton city,VA,0,No Data
51135,Nottoway County,VA,26.44,20% - 29.9%
51137,Orange County,VA,34.23,30% - 39.9%
51139,Page County,VA,20.69,20% - 29.9%
51141,Patrick County,VA,21.07,20% - 29.9%
51730,Petersburg city,VA,21.21,20% - 29.9%
51143,Pittsylvania County,VA,27.2,20% - 29.9%
51735,Poquoson city,VA,0,No Data
51740,Portsmouth city,VA,52.25,50% - 59.9%
51145,Powhatan County,VA,37.37,30% - 39.9%
51147,Prince Edward County,VA,27.03,20% - 29.9%
51149,Prince George County,VA,38.44,30% - 39.9%
51153,Prince William County,VA,81.49,70% or More
51155,Pulaski County,VA,37.3,30% - 39.9%
51750,Radford city,VA,35.63,30% - 39.9%
51157,Rappahannock County,VA,36.28,30% - 39.9%
51760,Richmond city,VA,38.32,30% - 39.9%
51159,Richmond County,VA,24.18,20% - 29.9%
51770,Roanoke city,VA,34.66,30% - 39.9%
51161,Roanoke County,VA,44.97,40% - 49.9%
51163,Rockbridge County,VA,32.45,30% - 39.9%
51165,Rockingham County,VA,33.62,30% - 39.9%
51167,Russell County,VA,31.06,30% - 39.9%
51775,Salem city,VA,0,No Data
51169,Scott County,VA,34.9,30% - 39.9%
51171,Shenandoah County,VA,35.18,30% - 39.9%
51173,Smyth County,VA,34.52,30% - 39.9%
51175,Southampton County,VA,25.26,20% - 29.9%
51177,Spotsylvania County,VA,41.41,40% - 49.9%
51179,Stafford County,VA,60.34,60% - 69.9%
51790,Staunton city,VA,41.67,40% - 49.9%
51800,Suffolk city,VA,48.58,40% - 49.9%
51181,Surry County,VA,47.89,40% - 49.9%
51183,Sussex County,VA,20.74,20% - 29.9%
51185,Tazewell County,VA,32.28,30% - 39.9%
51810,Virginia Beach city,VA,58.69,50% - 59.9%
51187,Warren County,VA,28.94,20% - 29.9%
51191,Washington County,VA,40.56,40% - 49.9%
51820,Waynesboro city,VA,37.8,30% - 39.9%
51193,Westmoreland County,VA,30.03,30% - 39.9%
51830,Williamsburg city,VA,32.61,30% - 39.9%
51840,Winchester city,VA,44.42,40% - 49.9%
51195,Wise County,VA,36.24,30% - 39.9%
51197,Wythe County,VA,26.01,20% - 29.9%
51199,York County,VA,54.8,50% - 59.9%
50001,Addison County,VT,78.86,70% or More
50003,Bennington County,VT,46.48,40% - 49.9%
50005,Caledonia County,VT,33.23,30% - 39.9%
50007,Chittenden County,VT,80.98,70% or More
50009,Essex County,VT,43.24,40% - 49.9%
50011,Franklin County,VT,37.46,30% - 39.9%
50013,Grand Isle County,VT,74.5,70% or More
50015,Lamoille County,VT,67.19,60% - 69.9%
50017,Orange County,VT,57.19,50% - 59.9%
50019,Orleans County,VT,49.79,40% - 49.9%
50021,Rutland County,VT,65.9,60% - 69.9%
50023,Washington County,VT,50.13,50% - 59.9%
50025,Windham County,VT,75.36,70% or More
50027,Windsor County,VT,46.98,40% - 49.9%
53001,Adams County,WA,44.02,40% - 49.9%
53003,Asotin County,WA,25.52,20% - 29.9%
53005,Benton County,WA,47.14,40% - 49.9%
53007,Chelan County,WA,65.1,60% - 69.9%
53009,Clallam County,WA,53.23,50% - 59.9%
53011,Clark County,WA,60.15,60% - 69.9%
53013,Columbia County,WA,32.16,30% - 39.9%
53015,Cowlitz County,WA,44,40% - 49.9%
53017,Douglas County,WA,49.78,40% - 49.9%
53019,Ferry County,WA,59.3,50% - 59.9%
53021,Franklin County,WA,46.09,40% - 49.9%
53023,Garfield County,WA,40.14,40% - 49.9%
53025,Grant County,WA,45.12,40% - 49.9%
53027,Grays Harbor County,WA,47.42,40% - 49.9%
53029,Island County,WA,66.16,60% - 69.9%
53031,Jefferson County,WA,62.34,60% - 69.9%
53033,King County,WA,88.96,70% or More
53035,Kitsap County,WA,67.9,60% - 69.9%
53037,Kittitas County,WA,47.05,40% - 49.9%
53039,Klickitat County,WA,34.47,30% - 39.9%
53041,Lewis County,WA,39.4,30% - 39.9%
53043,Lincoln County,WA,31.98,30% - 39.9%
53045,Mason County,WA,50.22,50% - 59.9%
53047,Okanogan County,WA,48.16,40% - 49.9%
53049,Pacific County,WA,50.62,50% - 59.9%
53051,Pend Oreille County,WA,23.62,20% - 29.9%
53053,Pierce County,WA,63.39,60% - 69.9%
53055,San Juan County,WA,90.2,70% or More
53057,Skagit County,WA,62.51,60% - 69.9%
53059,Skamania County,WA,32.88,30% - 39.9%
53061,Snohomish County,WA,70.7,70% or More
53063,Spokane County,WA,51.39,50% - 59.9%
53065,Stevens County,WA,26.35,20% - 29.9%
53067,Thurston County,WA,68.46,60% - 69.9%
53069,Wahkiakum County,WA,27.04,20% - 29.9%
53071,Walla Walla County,WA,57.37,50% - 59.9%
53073,Whatcom County,WA,69.83,60% - 69.9%
53075,Whitman County,WA,52.27,50% - 59.9%
53077,Yakima County,WA,57.5,50% - 59.9%
55001,Adams County,WI,32.12,30% - 39.9%
55003,Ashland County,WI,64.6,60% - 69.9%
55005,Barron County,WI,32.47,30% - 39.9%
55007,Bayfield County,WI,61.69,60% - 69.9%
55009,Brown County,WI,57.98,50% - 59.9%
55011,Buffalo County,WI,39.66,30% - 39.9%
55013,Burnett County,WI,37.3,30% - 39.9%
55015,Calumet County,WI,41.4,40% - 49.9%
55017,Chippewa County,WI,40.74,40% - 49.9%
55019,Clark County,WI,17.54,0% - 19.9%
55021,Columbia County,WI,57.63,50% - 59.9%
55023,Crawford County,WI,39.75,30% - 39.9%
55025,Dane County,WI,87.27,70% or More
55027,Dodge County,WI,38.06,30% - 39.9%
55029,Door County,WI,57.01,50% - 59.9%
55031,Douglas County,WI,36.51,30% - 39.9%
55033,Dunn County,WI,44.79,40% - 49.9%
55035,Eau Claire County,WI,59.04,50% - 59.9%
55037,Florence County,WI,25.79,20% - 29.9%
55039,Fond du Lac County,WI,40.29,40% - 49.9%
55041,Forest County,WI,37.14,30% - 39.9%
55043,Grant County,WI,43.59,40% - 49.9%
55045,Green County,WI,54.9,50% - 59.9%
55047,Green Lake County,WI,32.89,30% - 39.9%
55049,Iowa County,WI,58.78,50% - 59.9%
55051,Iron County,WI,42.77,40% - 49.9%
55053,Jackson County,WI,42.54,40% - 49.9%
55055,Jefferson County,WI,48.34,40% - 49.9%
55057,Juneau County,WI,37.79,30% - 39.9%
55059,Kenosha County,WI,48.88,40% - 49.9%
55061,Kewaunee County,WI,34.62,30% - 39.9%
55063,La Crosse County,WI,72.04,70% or More
55065,Lafayette County,WI,45.92,40% - 49.9%
55067,Langlade County,WI,29.16,20% - 29.9%
55069,Lincoln County,WI,33.3,30% - 39.9%
55071,Manitowoc County,WI,42.63,40% - 49.9%
55073,Marathon County,WI,48.73,40% - 49.9%
55075,Marinette County,WI,27.81,20% - 29.9%
55077,Marquette County,WI,35.27,30% - 39.9%
55078,Menominee County,WI,96.85,70% or More
55079,Milwaukee County,WI,58.8,50% - 59.9%
55081,Monroe County,WI,40.59,40% - 49.9%
55083,Oconto County,WI,33.03,30% - 39.9%
55085,Oneida County,WI,44.31,40% - 49.9%
55087,Outagamie County,WI,57.12,50% - 59.9%
55089,Ozaukee County,WI,67.95,60% - 69.9%
55091,Pepin County,WI,44.19,40% - 49.9%
55093,Pierce County,WI,31.58,30% - 39.9%
55095,Polk County,WI,31.01,30% - 39.9%
55097,Portage County,WI,58.73,50% - 59.9%
55099,Price County,WI,41.75,40% - 49.9%
55101,Racine County,WI,46.86,40% - 49.9%
55103,Richland County,WI,50.49,50% - 59.9%
55105,Rock County,WI,53.69,50% - 59.9%
55107,Rusk County,WI,23.3,20% - 29.9%
55111,Sauk County,WI,50.17,50% - 59.9%
55113,Sawyer County,WI,58.57,50% - 59.9%
55115,Shawano County,WI,38.14,30% - 39.9%
55117,Sheboygan County,WI,48.2,40% - 49.9%
55109,St. Croix County,WI,41.86,40% - 49.9%
55119,Taylor County,WI,17.6,0% - 19.9%
55121,Trempealeau County,WI,53.79,50% - 59.9%
55123,Vernon County,WI,40.9,40% - 49.9%
55125,Vilas County,WI,38.39,30% - 39.9%
55127,Walworth County,WI,40.02,40% - 49.9%
55129,Washburn County,WI,40.22,40% - 49.9%
55131,Washington County,WI,40.43,40% - 49.9%
55133,Waukesha County,WI,61.69,60% - 69.9%
55135,Waupaca County,WI,35.74,30% - 39.9%
55137,Waushara County,WI,29.61,20% - 29.9%
55139,Winnebago County,WI,56.95,50% - 59.9%
55141,Wood County,WI,47.55,40% - 49.9%
54001,Barbour County,WV,35.8,30% - 39.9%
54003,Berkeley County,WV,41.39,40% - 49.9%
54005,Boone County,WV,47.47,40% - 49.9%
54007,Braxton County,WV,31.37,30% - 39.9%
54009,Brooke County,WV,32.74,30% - 39.9%
54011,Cabell County,WV,56.45,50% - 59.9%
54013,Calhoun County,WV,19.46,0% - 19.9%
54015,Clay County,WV,58.58,50% - 59.9%
54017,Doddridge County,WV,31.81,30% - 39.9%
54019,Fayette County,WV,50.13,50% - 59.9%
54021,Gilmer County,WV,41.29,40% - 49.9%
54023,Grant County,WV,12.81,0% - 19.9%
54025,Greenbrier County,WV,54.19,50% - 59.9%
54027,Hampshire County,WV,20.08,20% - 29.9%
54029,Hancock County,WV,31.94,30% - 39.9%
54031,Hardy County,WV,31.02,30% - 39.9%
54033,Harrison County,WV,37.77,30% - 39.9%
54035,Jackson County,WV,36.12,30% - 39.9%
54037,Jefferson County,WV,63.1,60% - 69.9%
54039,Kanawha County,WV,62.84,60% - 69.9%
54041,Lewis County,WV,39.58,30% - 39.9%
54043,Lincoln County,WV,47.2,40% - 49.9%
54045,Logan County,WV,53.62,50% - 59.9%
54049,Marion County,WV,39.26,30% - 39.9%
54051,Marshall County,WV,23.66,20% - 29.9%
54053,Mason County,WV,38.27,30% - 39.9%
54047,McDowell County,WV,29.01,20% - 29.9%
54055,Mercer County,WV,47.56,40% - 49.9%
54057,Mineral County,WV,39.4,30% - 39.9%
54059,Mingo County,WV,23.05,20% - 29.9%
54061,Monongalia County,WV,49.38,40% - 49.9%
54063,Monroe County,WV,33.19,30% - 39.9%
54065,Morgan County,WV,13.63,0% - 19.9%
54067,Nicholas County,WV,43.91,40% - 49.9%
54069,Ohio County,WV,51.75,50% - 59.9%
54071,Pendleton County,WV,43.92,40% - 49.9%
54073,Pleasants County,WV,30.63,30% - 39.9%
54075,Pocahontas County,WV,24.95,20% - 29.9%
54077,Preston County,WV,33.63,30% - 39.9%
54079,Putnam County,WV,45.26,40% - 49.9%
54081,Raleigh County,WV,37.89,30% - 39.9%
54083,Randolph County,WV,43.76,40% - 49.9%
54085,Ritchie County,WV,26.59,20% - 29.9%
54087,Roane County,WV,25.26,20% - 29.9%
54089,Summers County,WV,56.8,50% - 59.9%
54091,Taylor County,WV,25.21,20% - 29.9%
54093,Tucker County,WV,57.3,50% - 59.9%
54095,Tyler County,WV,24.41,20% - 29.9%
54097,Upshur County,WV,34.54,30% - 39.9%
54099,Wayne County,WV,41.08,40% - 49.9%
54101,Webster County,WV,42.37,40% - 49.9%
54103,Wetzel County,WV,26.22,20% - 29.9%
54105,Wirt County,WV,25.38,20% - 29.9%
54107,Wood County,WV,51.36,50% - 59.9%
54109,Wyoming County,WV,62.82,60% - 69.9%
56001,Albany County,WY,61.75,60% - 69.9%
56003,Big Horn County,WY,22.4,20% - 29.9%
56005,Campbell County,WY,15.89,0% - 19.9%
56007,Carbon County,WY,27.01,20% - 29.9%
56009,Converse County,WY,15.49,0% - 19.9%
56011,Crook County,WY,15.41,0% - 19.9%
56013,Fremont County,WY,78,70% or More
56015,Goshen County,WY,23.6,20% - 29.9%
56017,Hot Springs County,WY,22.22,20% - 29.9%
56019,Johnson County,WY,25.88,20% - 29.9%
56021,Laramie County,WY,43.19,40% - 49.9%
56023,Lincoln County,WY,26.05,20% - 29.9%
56025,Natrona County,WY,32.9,30% - 39.9%
56027,Niobrara County,WY,5.79,0% - 19.9%
56029,Park County,WY,27.04,20% - 29.9%
56031,Platte County,WY,21.05,20% - 29.9%
56033,Sheridan County,WY,34.33,30% - 39.9%
56035,Sublette County,WY,22.85,20% - 29.9%
56037,Sweetwater County,WY,35.87,30% - 39.9%
56039,Teton County,WY,93,70% or More
56041,Uinta County,WY,34.81,30% - 39.9%
56043,Washakie County,WY,19.92,0% - 19.9%
56045,Weston County,WY,13.39,0% - 19.9%
`, ti = `City,Longitude,Latitude,Value
Albuquerque,-106.650421,35.084385,1
Anaheim,-117.914299,33.836594,2
Anchorage,-149.900284,61.218056,3
Arlington,-97.108063,32.735687,4
Atlanta,-84.387985,33.748997,5
Aurora,-93.717979,36.97089,6
Austin,-97.743057,30.267153,7
Bakersfield,-119.018715,35.373291,8
Baltimore,-76.61219,39.290386,9
Baton Rouge,-91.187149,30.451468,10
Boise,-116.202316,43.615021,11
Boston,-71.058884,42.360081,12
Buffalo,-78.878372,42.886448,13
Chandler,-111.841248,33.30616,14
Charlotte,-80.843124,35.227085,15
Chesapeake,-76.287491,36.768208,16
Chicago,-87.629799,41.878113,17
Chula Vista,-117.084198,32.640053,18
Cincinnati,-84.512016,39.103119,19
Cleveland,-81.694359,41.499321,20
Colorado Springs,-104.821365,38.833881,21
Columbus,-82.998795,39.961178,22
Corpus Christi,-97.396378,27.800583,23
Dallas,-96.796989,32.776665,24
Denver,-104.99025,39.739235,25
Detroit,-83.045753,42.331429,26
District of Columbia,-77.036873,38.907192,27
Durham,-78.898621,35.994034,28
El Paso,-106.485023,31.761877,29
Fort Wayne,-85.139351,41.079273,30
Ft Wayne,-85.139351,41.079273,31
Fort Worth,-97.330765,32.755489,32
Fremont,-121.988571,37.548271,33
Fresno,-119.787125,36.737797,34
Garland,-96.638885,32.912624,35
Gilbert,-111.789024,33.352825,36
Glendale,-118.255074,34.142509,37
Greensboro,-79.791977,36.072636,38
Henderson,-114.98172,36.039524,39
Hialeah,-80.278107,25.857595,40
Honolulu,-157.858337,21.306944,41
Houston,-95.358421,29.749907,42
Indianapolis,-86.158066,39.768402,43
Irvine,-117.826508,33.684566,44
Irving,-96.948891,32.814018,45
Jacksonville,-81.655647,30.332184,46
Jersey City,-74.077644,40.728157,47
Kansas City,-94.578568,39.099728,48
Laredo,-99.507553,27.503561,49
Las Vegas,-115.139832,36.169941,50
Lexington,-84.503716,38.040585,51
Lincoln,-95.262955,37.346134,52
Long Beach,-118.193741,33.77005,53
Los Angeles,-118.243683,34.052235,54
Los Angeles County,-118.229362,34.058762,55
Louisville,-85.758453,38.252666,56
Lubbock,-101.855164,33.577862,57
Madison,-89.40123,43.073051,58
"Marion County, Indiana",-86.136543,39.781029,59
Memphis,-90.048981,35.149532,60
Mesa,-111.831474,33.415184,61
Miami,-80.191788,25.761681,62
Milwaukee,-87.906471,43.038902,63
Minneapolis,-93.265015,44.977753,64
"Montgomery County, Maryland",-77.199406,39.153515,65
Nashville,-86.781601,36.162663,66
New Orleans,-90.071533,29.951065,67
New York City,-74.005974,40.712776,68
Newark,-95.582733,37.443188,69
Norfolk,-76.285873,36.850769,70
North Las Vegas,-115.114571,36.19585,71
Oakland,-122.271111,37.804363,72
Oklahoma City,-97.516426,35.46756,73
Omaha,-95.934502,41.256538,74
Orlando,-81.379234,28.538336,75
Philadelphia,-75.165222,39.952583,76
Phoenix,-112.074036,33.448376,77
Pittsburgh,-79.995888,40.440624,78
Plano,-96.698883,33.019844,79
Portland,-122.658722,45.51223,80
Raleigh,-78.638176,35.779591,81
Reno,-119.813805,39.529633,82
Richmond,-77.43605,37.540726,83
Riverside,-117.375496,33.980602,84
Sacramento,-121.4944,38.581573,85
Saint Paul,-93.089958,44.953705,86
San Antonio,-98.493629,29.424122,87
San Diego,-117.161087,32.715736,88
San Francisco,-122.419418,37.774929,89
San Jose,-121.88633,37.338207,90
Santa Ana,-117.867653,33.745472,91
Scottsdale,-111.926048,33.494171,92
Seattle,-122.332069,47.606209,93
Spokane,-117.426048,47.658779,94
St. Louis,-90.199402,38.627003,95
St. Petersburg,-82.640289,27.767601,96
Stockton,-121.290779,37.957703,97
Tampa,-82.457176,27.950575,98
Toledo,-83.537865,41.652805,99
Tucson,-110.974709,32.222607,100
Tuscon,-110.974709,32.222607,101
Tulsa,-95.992775,36.15398,102
Virginia Beach,-75.977982,36.852924,103
Wichita,-97.330055,37.687176,104
Winston Salem,-80.244217,36.099861,105
Winston–Salem,-80.244217,36.099861,106
`, oi = `x,y1,y2,y3,y4
1,8,37,72,82
2,2,30,75,83
3,15,42,51,95
4,10,38,61,96
5,1,38,66,86
60,6,37,70,85
10,19,47,59,91
24,18,32,68,89
3,7,38,74,89
26,10,39,56,91
42,16,38,55,76
32,20,46,52,94
11,9,41,57,86
22,10,47,56,80
73,1,36,71,94
23,13,30,66,78
`, ai = `Group_Category,Value
category one,21
category one,19
category one,23
category one,24
category two,18
category two,10
category two,12
category two,19
category three,30
category three,35
category three,36
category three,40
category four,50
category four,54
category four,42
category four,159
`, ri = `[
  {
    "Date": "1/15/2016",
    "Data 1": "900",
    "Data 2": "135",
    "Data 3": "300",
    "Data 4": "95",
    "Data 5": "120",
    "Data 6": "310"
  },
  {
    "Date": "2/15/2016",
    "Data 1": "4000",
    "Data 2": "90",
    "Data 3": "240",
    "Data 4": "60",
    "Data 5": "160",
    "Data 6": "2000"
  },
  {
    "Date": "3/15/2016",
    "Data 1": "500",
    "Data 2": "300",
    "Data 3": "290",
    "Data 4": "100",
    "Data 5": "200",
    "Data 6": "250"
  },
  {
    "Date": "4/15/2016",
    "Data 1": "1200",
    "Data 2": "160",
    "Data 3": "230",
    "Data 4": "180",
    "Data 5": "160",
    "Data 6": "220"
  },
  {
    "Date": "5/15/2016",
    "Data 1": "8000",
    "Data 2": "350",
    "Data 3": "300",
    "Data 4": "150",
    "Data 5": "130",
    "Data 6": "100"
  },
  {
    "Date": "6/15/2016",
    "Data 1": "9000",
    "Data 2": "220",
    "Data 3": "320",
    "Data 4": "100",
    "Data 5": "220",
    "Data 6": "300"
  },
  {
    "Date": "7/15/2016",
    "Data 1": "900",
    "Data 2": "235",
    "Data 3": "300",
    "Data 4": "195",
    "Data 5": "120",
    "Data 6": "610"
  },
  {
    "Date": "8/15/2016",
    "Data 1": "3000",
    "Data 2": "900",
    "Data 3": "540",
    "Data 4": "600",
    "Data 5": "120",
    "Data 6": "200"
  },
  {
    "Date": "9/15/2016",
    "Data 1": "700",
    "Data 2": "200",
    "Data 3": "590",
    "Data 4": "900",
    "Data 5": "400",
    "Data 6": "650"
  },
  {
    "Date": "10/15/2016",
    "Data 1": "2200",
    "Data 2": "360",
    "Data 3": "930",
    "Data 4": "880",
    "Data 5": "760",
    "Data 6": "420"
  },
  {
    "Date": "11/15/2016",
    "Data 1": "5000",
    "Data 2": "1350",
    "Data 3": "300",
    "Data 4": "1150",
    "Data 5": "230",
    "Data 6": "600"
  },
  {
    "Date": "12/15/2016",
    "Data 1": "6000",
    "Data 2": "3220",
    "Data 3": "540",
    "Data 4": "300",
    "Data 5": "720",
    "Data 6": "3000"
  }
]
`, ui = `[
  {
    "Country": "Argentina",
    "Cases": "100",
    "Category": "Has not historically reported monkeypox",
    "AsOf": "11 Jul 2022 5:00 PM EDT",
    "longitude": "-63.6",
    "latitude": "-38.4"
  },
  {
    "Country": "New York City",
    "Cases": "10",
    "Category": "Has not historically reported monkeypox",
    "AsOf": "11 Jul 2022 5:00 PM EDT",
    "longitude": "-74.006",
    "latitude": "40.712"
  }
]`, ii = `date,quarter,upper_90,lower_90,random_col
1/1/2023,quarter one,90,10,67
1/2/2023,quarter one,90,10,11
1/3/2023,quarter one,90,10,94
1/4/2023,quarter one,90,10,95
1/5/2023,quarter one,90,10,79
1/6/2023,quarter one,90,10,2
1/7/2023,quarter one,90,10,36
1/8/2023,quarter one,90,10,9
1/9/2023,quarter one,90,10,3
1/10/2023,quarter one,90,10,64
1/11/2023,quarter one,90,10,48
1/12/2023,quarter one,90,10,94
1/13/2023,quarter one,90,10,38
1/14/2023,quarter one,90,10,33
1/15/2023,quarter one,90,10,23
1/16/2023,quarter one,90,10,13
1/17/2023,quarter one,90,10,89
1/18/2023,quarter one,90,10,12
1/19/2023,quarter one,90,10,24
1/20/2023,quarter one,90,10,86
1/21/2023,quarter one,90,10,17
1/22/2023,quarter one,90,10,37
1/23/2023,quarter one,90,10,9
1/24/2023,quarter one,90,10,15
1/25/2023,quarter one,90,10,7
1/26/2023,quarter one,90,10,40
1/27/2023,quarter one,90,10,18
1/28/2023,quarter one,90,10,67
1/29/2023,quarter one,90,10,40
1/30/2023,quarter one,90,10,84
1/31/2023,quarter one,90,10,81
2/1/2023,quarter one,90,10,16
2/2/2023,quarter one,90,10,85
2/3/2023,quarter one,90,10,48
2/4/2023,quarter one,90,10,45
2/5/2023,quarter one,90,10,93
2/6/2023,quarter one,90,10,77
2/7/2023,quarter one,90,10,35
2/8/2023,quarter one,90,10,44
2/9/2023,quarter one,90,10,57
2/10/2023,quarter one,90,10,92
2/11/2023,quarter one,90,10,50
2/12/2023,quarter one,90,10,81
2/13/2023,quarter one,90,10,13
2/14/2023,quarter one,90,10,31
2/15/2023,quarter one,90,10,52
2/16/2023,quarter one,90,10,91
2/17/2023,quarter one,90,10,57
2/18/2023,quarter one,90,10,79
2/19/2023,quarter one,90,10,75
2/20/2023,quarter one,90,10,8
2/21/2023,quarter one,90,10,11
2/22/2023,quarter one,90,10,41
2/23/2023,quarter one,90,10,20
2/24/2023,quarter one,90,10,80
2/25/2023,quarter one,90,10,65
2/26/2023,quarter one,90,10,76
2/27/2023,quarter one,90,10,11
2/28/2023,quarter one,90,10,88
3/1/2023,quarter one,90,10,92
3/2/2023,quarter one,90,10,53
3/3/2023,quarter one,90,10,89
3/4/2023,quarter one,90,10,40
3/5/2023,quarter one,90,10,26
3/6/2023,quarter one,90,10,67
3/7/2023,quarter one,90,10,79
3/8/2023,quarter one,90,10,13
3/9/2023,quarter one,90,10,71
3/10/2023,quarter one,90,10,52
3/11/2023,quarter one,90,10,69
3/12/2023,quarter one,90,10,89
3/13/2023,quarter one,90,10,55
3/14/2023,quarter one,90,10,77
3/15/2023,quarter one,90,10,19
3/16/2023,quarter one,90,10,16
3/17/2023,quarter one,90,10,33
3/18/2023,quarter one,90,10,54
3/19/2023,quarter one,90,10,49
3/20/2023,quarter one,90,10,29
3/21/2023,quarter one,90,10,85
3/22/2023,quarter one,90,10,53
3/23/2023,quarter one,90,10,25
3/24/2023,quarter one,90,10,36
3/25/2023,quarter one,90,10,79
3/26/2023,quarter one,90,10,100
3/27/2023,quarter one,90,10,12
3/28/2023,quarter one,90,10,71
3/29/2023,quarter one,90,10,46
3/30/2023,quarter one,90,10,32
3/31/2023,quarter one,90,10,81
4/1/2023,quarter two,80,20,70
4/2/2023,quarter two,80,20,84
4/3/2023,quarter two,80,20,97
4/4/2023,quarter two,80,20,69
4/5/2023,quarter two,80,20,76
4/6/2023,quarter two,80,20,69
4/7/2023,quarter two,80,20,9
4/8/2023,quarter two,80,20,53
4/9/2023,quarter two,80,20,63
4/10/2023,quarter two,80,20,26
4/11/2023,quarter two,80,20,9
4/12/2023,quarter two,80,20,48
4/13/2023,quarter two,80,20,36
4/14/2023,quarter two,80,20,29
4/15/2023,quarter two,80,20,66
4/16/2023,quarter two,80,20,53
4/17/2023,quarter two,80,20,10
4/18/2023,quarter two,80,20,62
4/19/2023,quarter two,80,20,84
4/20/2023,quarter two,80,20,88
4/21/2023,quarter two,80,20,27
4/22/2023,quarter two,80,20,81
4/23/2023,quarter two,80,20,16
4/24/2023,quarter two,80,20,95
4/25/2023,quarter two,80,20,80
4/26/2023,quarter two,80,20,53
4/27/2023,quarter two,80,20,65
4/28/2023,quarter two,80,20,39
4/29/2023,quarter two,80,20,1
4/30/2023,quarter two,80,20,37
5/1/2023,quarter two,80,20,70
5/2/2023,quarter two,80,20,88
5/3/2023,quarter two,80,20,75
5/4/2023,quarter two,80,20,80
5/5/2023,quarter two,80,20,45
5/6/2023,quarter two,80,20,70
5/7/2023,quarter two,80,20,8
5/8/2023,quarter two,80,20,2
5/9/2023,quarter two,80,20,41
5/10/2023,quarter two,80,20,42
5/11/2023,quarter two,80,20,88
5/12/2023,quarter two,80,20,94
5/13/2023,quarter two,80,20,31
5/14/2023,quarter two,80,20,19
5/15/2023,quarter two,80,20,62
5/16/2023,quarter two,80,20,62
5/17/2023,quarter two,80,20,33
5/18/2023,quarter two,80,20,86
5/19/2023,quarter two,80,20,36
5/20/2023,quarter two,80,20,82
5/21/2023,quarter two,80,20,52
5/22/2023,quarter two,80,20,64
5/23/2023,quarter two,80,20,82
5/24/2023,quarter two,80,20,85
5/25/2023,quarter two,80,20,87
5/26/2023,quarter two,80,20,23
5/27/2023,quarter two,80,20,61
5/28/2023,quarter two,80,20,64
5/29/2023,quarter two,80,20,14
5/30/2023,quarter two,80,20,73
5/31/2023,quarter two,80,20,92
6/1/2023,quarter two,80,20,85
6/2/2023,quarter two,80,20,75
6/3/2023,quarter two,80,20,67
6/4/2023,quarter two,80,20,39
6/5/2023,quarter two,80,20,39
6/6/2023,quarter two,80,20,92
6/7/2023,quarter two,80,20,70
6/8/2023,quarter two,80,20,48
6/9/2023,quarter two,80,20,69
6/10/2023,quarter two,80,20,74
6/11/2023,quarter two,80,20,40
6/12/2023,quarter two,80,20,34
6/13/2023,quarter two,80,20,38
6/14/2023,quarter two,80,20,14
6/15/2023,quarter two,80,20,42
6/16/2023,quarter two,80,20,16
6/17/2023,quarter two,80,20,47
6/18/2023,quarter two,80,20,43
6/19/2023,quarter two,80,20,28
6/20/2023,quarter two,80,20,88
6/21/2023,quarter two,80,20,70
6/22/2023,quarter two,80,20,63
6/23/2023,quarter two,80,20,43
6/24/2023,quarter two,80,20,47
6/25/2023,quarter two,80,20,80
6/26/2023,quarter two,80,20,6
6/27/2023,quarter two,80,20,13
6/28/2023,quarter two,80,20,39
6/29/2023,quarter two,80,20,62
6/30/2023,quarter two,80,20,26
7/1/2023,quarter three,70,30,96
7/2/2023,quarter three,70,30,0
7/3/2023,quarter three,70,30,24
7/4/2023,quarter three,70,30,4
7/5/2023,quarter three,70,30,39
7/6/2023,quarter three,70,30,1
7/7/2023,quarter three,70,30,18
7/8/2023,quarter three,70,30,38
7/9/2023,quarter three,70,30,92
7/10/2023,quarter three,70,30,11
7/11/2023,quarter three,70,30,48
7/12/2023,quarter three,70,30,62
7/13/2023,quarter three,70,30,82
7/14/2023,quarter three,70,30,55
7/15/2023,quarter three,70,30,63
7/16/2023,quarter three,70,30,26
7/17/2023,quarter three,70,30,26
7/18/2023,quarter three,70,30,22
7/19/2023,quarter three,70,30,65
7/20/2023,quarter three,70,30,1
7/21/2023,quarter three,70,30,16
7/22/2023,quarter three,70,30,20
7/23/2023,quarter three,70,30,44
7/24/2023,quarter three,70,30,38
7/25/2023,quarter three,70,30,33
7/26/2023,quarter three,70,30,9
7/27/2023,quarter three,70,30,8
7/28/2023,quarter three,70,30,70
7/29/2023,quarter three,70,30,16
7/30/2023,quarter three,70,30,26
7/31/2023,quarter three,70,30,93
8/1/2023,quarter three,70,30,5
8/2/2023,quarter three,70,30,9
8/3/2023,quarter three,70,30,66
8/4/2023,quarter three,70,30,15
8/5/2023,quarter three,70,30,3
8/6/2023,quarter three,70,30,28
8/7/2023,quarter three,70,30,93
8/8/2023,quarter three,70,30,88
8/9/2023,quarter three,70,30,87
8/10/2023,quarter three,70,30,27
8/11/2023,quarter three,70,30,51
8/12/2023,quarter three,70,30,25
8/13/2023,quarter three,70,30,6
8/14/2023,quarter three,70,30,87
8/15/2023,quarter three,70,30,83
8/16/2023,quarter three,70,30,61
8/17/2023,quarter three,70,30,93
8/18/2023,quarter three,70,30,91
8/19/2023,quarter three,70,30,87
8/20/2023,quarter three,70,30,99
8/21/2023,quarter three,70,30,27
8/22/2023,quarter three,70,30,91
8/23/2023,quarter three,70,30,100
8/24/2023,quarter three,70,30,36
8/25/2023,quarter three,70,30,73
8/26/2023,quarter three,70,30,73
8/27/2023,quarter three,70,30,80
8/28/2023,quarter three,70,30,100
8/29/2023,quarter three,70,30,84
8/30/2023,quarter three,70,30,40
8/31/2023,quarter three,70,30,30
9/1/2023,quarter three,70,30,6
9/2/2023,quarter three,70,30,26
9/3/2023,quarter three,70,30,45
9/4/2023,quarter three,70,30,1
9/5/2023,quarter three,70,30,14
9/6/2023,quarter three,70,30,44
9/7/2023,quarter three,70,30,93
9/8/2023,quarter three,70,30,63
9/9/2023,quarter three,70,30,65
9/10/2023,quarter three,70,30,79
9/11/2023,quarter three,70,30,90
9/12/2023,quarter three,70,30,23
9/13/2023,quarter three,70,30,95
9/14/2023,quarter three,70,30,64
9/15/2023,quarter three,70,30,32
9/16/2023,quarter three,70,30,39
9/17/2023,quarter three,70,30,67
9/18/2023,quarter three,70,30,9
9/19/2023,quarter three,70,30,48
9/20/2023,quarter three,70,30,49
9/21/2023,quarter three,70,30,56
9/22/2023,quarter three,70,30,59
9/23/2023,quarter three,70,30,0
9/24/2023,quarter three,70,30,94
9/25/2023,quarter three,70,30,86
9/26/2023,quarter three,70,30,37
9/27/2023,quarter three,70,30,50
9/28/2023,quarter three,70,30,31
9/29/2023,quarter three,70,30,44
9/30/2023,quarter three,70,30,48
10/1/2023,quarter four,60,40,76
10/2/2023,quarter four,60,40,14
10/3/2023,quarter four,60,40,76
10/4/2023,quarter four,60,40,12
10/5/2023,quarter four,60,40,25
10/6/2023,quarter four,60,40,86
10/7/2023,quarter four,60,40,69
10/8/2023,quarter four,60,40,86
10/9/2023,quarter four,60,40,99
10/10/2023,quarter four,60,40,24
10/11/2023,quarter four,60,40,69
10/12/2023,quarter four,60,40,42
10/13/2023,quarter four,60,40,1
10/14/2023,quarter four,60,40,72
10/15/2023,quarter four,60,40,85
10/16/2023,quarter four,60,40,2
10/17/2023,quarter four,60,40,42
10/18/2023,quarter four,60,40,55
10/19/2023,quarter four,60,40,59
10/20/2023,quarter four,60,40,71
10/21/2023,quarter four,60,40,19
10/22/2023,quarter four,60,40,43
10/23/2023,quarter four,60,40,29
10/24/2023,quarter four,60,40,78
10/25/2023,quarter four,60,40,21
10/26/2023,quarter four,60,40,76
10/27/2023,quarter four,60,40,65
10/28/2023,quarter four,60,40,88
10/29/2023,quarter four,60,40,41
10/30/2023,quarter four,60,40,31
10/31/2023,quarter four,60,40,71
11/1/2023,quarter four,60,40,59
11/2/2023,quarter four,60,40,65
11/3/2023,quarter four,60,40,91
11/4/2023,quarter four,60,40,60
11/5/2023,quarter four,60,40,22
11/6/2023,quarter four,60,40,26
11/7/2023,quarter four,60,40,10
11/8/2023,quarter four,60,40,39
11/9/2023,quarter four,60,40,67
11/10/2023,quarter four,60,40,0
11/11/2023,quarter four,60,40,19
11/12/2023,quarter four,60,40,9
11/13/2023,quarter four,60,40,70
11/14/2023,quarter four,60,40,86
11/15/2023,quarter four,60,40,40
11/16/2023,quarter four,60,40,7
11/17/2023,quarter four,60,40,57
11/18/2023,quarter four,60,40,16
11/19/2023,quarter four,60,40,24
11/20/2023,quarter four,60,40,68
11/21/2023,quarter four,60,40,36
11/22/2023,quarter four,60,40,62
11/23/2023,quarter four,60,40,96
11/24/2023,quarter four,60,40,75
11/25/2023,quarter four,60,40,55
11/26/2023,quarter four,60,40,14
11/27/2023,quarter four,60,40,60
11/28/2023,quarter four,60,40,23
11/29/2023,quarter four,60,40,8
11/30/2023,quarter four,60,40,82
12/1/2023,quarter four,60,40,27
12/2/2023,quarter four,60,40,67
12/3/2023,quarter four,60,40,47
12/4/2023,quarter four,60,40,73
12/5/2023,quarter four,60,40,33
12/6/2023,quarter four,60,40,73
12/7/2023,quarter four,60,40,85
12/8/2023,quarter four,60,40,83
12/9/2023,quarter four,60,40,14
12/10/2023,quarter four,60,40,32
12/11/2023,quarter four,60,40,13
12/12/2023,quarter four,60,40,58
12/13/2023,quarter four,60,40,21
12/14/2023,quarter four,60,40,92
12/15/2023,quarter four,60,40,28
12/16/2023,quarter four,60,40,12
12/17/2023,quarter four,60,40,3
12/18/2023,quarter four,60,40,30
12/19/2023,quarter four,60,40,39
12/20/2023,quarter four,60,40,64
12/21/2023,quarter four,60,40,84
12/22/2023,quarter four,60,40,19
12/23/2023,quarter four,60,40,11
12/24/2023,quarter four,60,40,41
12/25/2023,quarter four,60,40,39
12/26/2023,quarter four,60,40,22
12/27/2023,quarter four,60,40,32
12/28/2023,quarter four,60,40,99
12/29/2023,quarter four,60,40,56
12/30/2023,quarter four,60,40,56
12/31/2023,quarter four,60,40,76
`, li = `Author(s) and Year,Confidence,Timing,N,Estimate,Lower,Upper,Result
"Spears, 1983",H,T3,170,0.2,-35.7,36.2,"0.2 [-35.7, 36.2]"
"Moran, 1998",H,B,2183,33.4,-109.5,176.3,"33.4 [-109.5, 176.3]"
"Lee, 2003",H,T1-T2,186,-40.1,-74,-6.3,"-40.1 [-74, -6.3]"
"Cooper, 1977",H,T3,1137,-46,-88.5,-3.5,"-46 [-88.5, -3.5]"
"Mccarthy, 1998",H,T2,1337,22.2,-18.2,62.6,"22.2 [-18.2, 62.6]"
"Williams, 1976",H,T1,889,-14.8,-55,25.4,"-14.8 [-55, 25.4]"
"Sawyer, 1973",H,T1,107,-57.6,-104.1,-11.1,"-57.6 [-104.1, -11.1]"
"Miller, 2003",H,T3,2402,-7.3,-145.9,131.3,"-7.3 [-145.9, 131.3]"
"Dixon, 1981",M,T1-T2,2242,-60.6,-156.5,35.3,"-60.6 [-156.5, 35.3]"
"Thompson, 1988",M,T2-T3,2166,-31.1,-129,66.9,"-31.1 [-129, 66.9]"
"Valenzuela, 1980",M,T1,126,6.1,-16.6,28.7,"6.1 [-16.6, 28.7]"
"Vaughn, 1975",M,T1,402,-77,-135.3,-18.7,"-77 [-135.3, -18.7]"
"Wilson, 1976",M,T2-T3,878,-108,-188.2,-27.8,"-108 [-188.2, -27.8]"
"Livingston, 2013",M,T2,1082,28.6,-42.5,99.8,"28.6 [-42.5, 99.8]"
"Sullivan, 1983",M,T2-T3,2411,-52.4,-101.9,-2.9,"-52.4 [-101.9, -2.9]"
"Parker, 1988",M,T3,856,-39.3,-110.7,32.1,"-39.3 [-110.7, 32.1]"
"Morgan, 1976",M,T3,1679,-47.3,-155.6,61,"-47.3 [-155.6, 61]"
"Perez, 2007",L,T2-T3,2095,-43.5,-89.5,2.6,"-43.5 [-89.5, 2.6]"
"Mathis, 1982",L,T3,593,-41.8,-71.8,-11.8,"-41.8 [-71.8, -11.8]"
"Parker, 2018",L,B,1320,-45.6,-106.9,15.7,"-45.6 [-106.9, 15.7]"
"Knox, 2020",L,T1,2080,22.9,-89.5,135.2,"22.9 [-89.5, 135.2]"
"Manning, 2017",L,T2-T3,2463,-133.4,-349.9,83.1,"-133.4 [-349.9, 83.1]"
"Jackson, 2018",L,B,1880,14,-168.5,196.5,"14 [-168.5, 196.5]"
"Total", "","","", -10, -20, 0, "Result"
`, si = `[
  {
    "Country": "Atlanta",
    "Data": 10,
    "Link": "",
    "Sample Categories": "Category 1",
    "Regions": "North America"
  },
  {
    "Country": "Aruba",
    "Data": 0,
    "Link": "",
    "Sample Categories": "Category 1",
    "Regions": "North America"
  },
  {
    "Country": "Afghanistan",
    "Data": 59,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Angola",
    "Data": 65,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Anguilla",
    "Data": 15,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Albania",
    "Data": 73,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Åland",
    "Data": 99,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Andorra",
    "Data": 75,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "United Arab Emirates",
    "Data": 62,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Argentina",
    "Data": 65,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Armenia",
    "Data": 23,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "American Samoa",
    "Data": 48,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Ashmore and Cartier Is.",
    "Data": 22,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Fr. S. Antarctic Lands",
    "Data": 65,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Antigua and Barb.",
    "Data": 91,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Australia",
    "Data": 57,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Austria",
    "Data": 64,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Azerbaijan",
    "Data": 60,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Burundi",
    "Data": 95,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Belgium",
    "Data": 88,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Benin",
    "Data": 1,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Burkina Faso",
    "Data": 29,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Bangladesh",
    "Data": 46,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Bulgaria",
    "Data": 85,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Bahrain",
    "Data": 63,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Bahamas",
    "Data": 38,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Bosnia and Herz.",
    "Data": 69,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "St-Barthélemy",
    "Data": 37,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Belarus",
    "Data": 35,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Belize",
    "Data": 52,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Bermuda",
    "Data": 29,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Bolivia",
    "Data": 20,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Brazil",
    "Data": 33,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Barbados",
    "Data": 12,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Brunei",
    "Data": 73,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Bhutan",
    "Data": 2,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Botswana",
    "Data": 11,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Central African Rep.",
    "Data": 55,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Canada",
    "Data": 14,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Switzerland",
    "Data": 89,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Chile",
    "Data": 21,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "China",
    "Data": 70,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Côte d'Ivoire",
    "Data": 84,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Cameroon",
    "Data": 65,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Dem. Rep. Congo",
    "Data": 97,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Congo",
    "Data": 45,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Cook Is.",
    "Data": 5,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Colombia",
    "Data": 92,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Comoros",
    "Data": 65,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Cabo Verde",
    "Data": 63,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Costa Rica",
    "Data": 21,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Cuba",
    "Data": 0,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Curaçao",
    "Data": 64,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Cayman Is.",
    "Data": 56,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "N. Cyprus",
    "Data": 78,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Cyprus",
    "Data": 74,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Czechia",
    "Data": 26,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Germany",
    "Data": 31,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Djibouti",
    "Data": 22,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Dominica",
    "Data": 2,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Denmark",
    "Data": 51,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Dominican Rep.",
    "Data": 84,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Algeria",
    "Data": 58,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Ecuador",
    "Data": 52,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Egypt",
    "Data": 29,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Eritrea",
    "Data": 70,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Spain",
    "Data": 9,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Estonia",
    "Data": 13,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Ethiopia",
    "Data": 17,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Finland",
    "Data": 9,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Fiji",
    "Data": 7,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Falkland Is.",
    "Data": 18,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "France",
    "Data": 73,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Faeroe Is.",
    "Data": 60,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Micronesia",
    "Data": 73,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Gabon",
    "Data": 72,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "United Kingdom",
    "Data": 5,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Georgia",
    "Data": 69,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Guernsey",
    "Data": 2,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Ghana",
    "Data": 71,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Guinea",
    "Data": 32,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Gambia",
    "Data": 39,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Guinea-Bissau",
    "Data": 48,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Eq. Guinea",
    "Data": 74,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Greece",
    "Data": 17,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Grenada",
    "Data": 37,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Greenland",
    "Data": 15,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Guatemala",
    "Data": 42,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Guam",
    "Data": 17,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Guyana",
    "Data": 11,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Hong Kong",
    "Data": 49,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Heard I. and McDonald Is.",
    "Data": 32,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Honduras",
    "Data": 27,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Croatia",
    "Data": 41,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Haiti",
    "Data": 33,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Hungary",
    "Data": 41,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Indonesia",
    "Data": 4,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Isle of Man",
    "Data": 63,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "India",
    "Data": 18,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Indian Ocean Ter.",
    "Data": 32,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Br. Indian Ocean Ter.",
    "Data": 66,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Ireland",
    "Data": 36,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Iran",
    "Data": 36,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Iraq",
    "Data": 0,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Iceland",
    "Data": 85,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Israel",
    "Data": 75,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Italy",
    "Data": 0,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Jamaica",
    "Data": 85,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Jersey",
    "Data": 99,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Jordan",
    "Data": 51,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Japan",
    "Data": 61,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Siachen Glacier",
    "Data": 5,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Kazakhstan",
    "Data": 0,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Kenya",
    "Data": 73,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Kyrgyzstan",
    "Data": 15,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Cambodia",
    "Data": 43,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Kiribati",
    "Data": 16,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "St. Kitts and Nevis",
    "Data": 85,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "South Korea",
    "Data": 60,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Kosovo",
    "Data": 97,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Kuwait",
    "Data": 31,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Laos",
    "Data": 8,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Lebanon",
    "Data": 86,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Liberia",
    "Data": 58,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Libya",
    "Data": 87,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Saint Lucia",
    "Data": 67,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Liechtenstein",
    "Data": 60,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Sri Lanka",
    "Data": 55,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Lesotho",
    "Data": 56,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Lithuania",
    "Data": 31,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Luxembourg",
    "Data": 63,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Latvia",
    "Data": 44,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Macao",
    "Data": 69,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "St-Martin",
    "Data": 81,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Morocco",
    "Data": 69,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Monaco",
    "Data": 8,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Moldova",
    "Data": 89,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Madagascar",
    "Data": 1,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Maldives",
    "Data": 50,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Mexico",
    "Data": 1,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Marshall Is.",
    "Data": 26,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Macedonia",
    "Data": 61,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Mali",
    "Data": 45,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Malta",
    "Data": 89,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Myanmar",
    "Data": 82,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Montenegro",
    "Data": 72,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Mongolia",
    "Data": 51,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "N. Mariana Is.",
    "Data": 22,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Mozambique",
    "Data": 20,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Mauritania",
    "Data": 40,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Montserrat",
    "Data": 3,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Mauritius",
    "Data": 2,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Malawi",
    "Data": 26,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Malaysia",
    "Data": 89,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Namibia",
    "Data": 70,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "New Caledonia",
    "Data": 93,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Niger",
    "Data": 21,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Norfolk Island",
    "Data": 5,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Nigeria",
    "Data": 43,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Nicaragua",
    "Data": 23,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Niue",
    "Data": 17,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Netherlands",
    "Data": 11,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Norway",
    "Data": 47,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Nepal",
    "Data": 4,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Nauru",
    "Data": 21,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "New Zealand",
    "Data": 4,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Oman",
    "Data": 65,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Pakistan",
    "Data": 85,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Panama",
    "Data": 66,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Pitcairn Is.",
    "Data": 89,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Peru",
    "Data": 16,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Philippines",
    "Data": 49,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Palau",
    "Data": 37,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Papua New Guinea",
    "Data": 1,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Poland",
    "Data": 14,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Puerto Rico",
    "Data": 62,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "North Korea",
    "Data": 92,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Portugal",
    "Data": 77,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Paraguay",
    "Data": 19,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Palestine",
    "Data": 28,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Fr. Polynesia",
    "Data": 69,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Qatar",
    "Data": 40,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Romania",
    "Data": 51,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Russia",
    "Data": 13,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Rwanda",
    "Data": 91,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "W. Sahara",
    "Data": 64,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Saudi Arabia",
    "Data": 90,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Sudan",
    "Data": 58,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "S. Sudan",
    "Data": 93,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Senegal",
    "Data": 15,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Singapore",
    "Data": 80,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "S. Geo. and the Is.",
    "Data": 90,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Saint Helena",
    "Data": 49,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Solomon Is.",
    "Data": 77,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Sierra Leone",
    "Data": 33,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "El Salvador",
    "Data": 18,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "San Marino",
    "Data": 42,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Somaliland",
    "Data": 52,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Somalia",
    "Data": 68,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "St. Pierre and Miquelon",
    "Data": 12,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Serbia",
    "Data": 12,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "São Tomé and Principe",
    "Data": 50,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Suriname",
    "Data": 54,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Slovakia",
    "Data": 1,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Slovenia",
    "Data": 77,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Sweden",
    "Data": 77,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Swaziland",
    "Data": 48,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Sint Maarten",
    "Data": 75,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Seychelles",
    "Data": 73,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Syria",
    "Data": 69,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Turks and Caicos Is.",
    "Data": 73,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Chad",
    "Data": 16,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Togo",
    "Data": 83,
    "Link": "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    "Country": "Thailand",
    "Data": 84,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Tajikistan",
    "Data": 55,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Turkmenistan",
    "Data": 59,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Timor-Leste",
    "Data": 45,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Tonga",
    "Data": 43,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Trinidad and Tobago",
    "Data": 22,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Tunisia",
    "Data": 93,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Turkey",
    "Data": 54,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Taiwan",
    "Data": 26,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Tanzania",
    "Data": 54,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Uganda",
    "Data": 55,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Ukraine",
    "Data": 57,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Uruguay",
    "Data": 15,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "United States of America",
    "Data": 45,
    "Link": "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    "Country": "Uzbekistan",
    "Data": 96,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Vatican",
    "Data": 87,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "St. Vin. and Gren.",
    "Data": 12,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Venezuela",
    "Data": 61,
    "Link": "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    "Country": "British Virgin Is.",
    "Data": 91,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "U.S. Virgin Is.",
    "Data": 27,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Vietnam",
    "Data": 82,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Vanuatu",
    "Data": 56,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Wallis and Futuna Is.",
    "Data": 76,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Samoa",
    "Data": 4,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Yemen",
    "Data": 39,
    "Link": "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    "Country": "South Africa",
    "Data": 24,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Zambia",
    "Data": 38,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Zimbabwe",
    "Data": 35,
    "Link": "https://cdc.gov/",
    "Sample Categories": ""
  }
]`, ci = `[
  {
    "Current Week Positivity": "20",
    "State": "REGION 1",
    "Change": "0.2"
  },
  {
    "Current Week Positivity": "27",
    "State": "region 2",
    "Change": "-0.5"
  },
  {
    "Current Week Positivity": "26",
    "State": "region 3",
    "Change": "-.08"
  },
  {
    "Current Week Positivity": "30",
    "State": "region 4",
    "Change": "0.8"
  },
  {
    "Current Week Positivity": "14",
    "State": "region 5",
    "Change": "0.5"
  },
  {
    "Current Week Positivity": "25",
    "State": "region 6",
    "Change": "0.05"
  },
  {
    "Current Week Positivity": "0",
    "State": "region 7",
    "Change": "0"
  },
  {
    "Current Week Positivity": "14",
    "State": "region 8",
    "Change": "-1.2"
  },
  {
    "Current Week Positivity": "28",
    "State": "region 9",
    "Change": "1.5"
  },
  {
    "Current Week Positivity": "12",
    "State": "region 10",
    "Change": "0.5"
  }
]`, di = `[
  {
    "links": [
      {
        "source": "Suicide EMS Responses",
        "target": "Dead at Scene",
        "value": 4088
      },
      {
        "source": "Suicide EMS Responses",
        "target": "Treated",
        "value": 438974
      },
      {
        "source": "Suicide EMS Responses",
        "target": "Assisted",
        "value": 5701
      },
      {
        "source": "Suicide EMS Responses",
        "target": "No patient contact",
        "value": 459
      },
      {
        "source": "Suicide EMS Responses",
        "target": "Refused evaluation care",
        "value": 12641
      },
      {
        "source": "Suicide EMS Responses",
        "target": "Evaluated no treatment required",
        "value": 5169
      },
      {
        "source": "Suicide EMS Responses",
        "target": "Unknown",
        "value": 104
      },
      {
        "source": "Dead at Scene",
        "target": "Dead",
        "value": 4088
      },
      {
        "source": "Treated",
        "target": "Dead",
        "value": 648
      },
      {
        "source": "Treated",
        "target": "Transported to hospital",
        "value": 423520
      },
      {
        "source": "Treated",
        "target": "Transported to facility",
        "value": 4504
      },
      {
        "source": "Treated",
        "target": "Released",
        "value": 10302
      },
      {
        "source": "Refused evaluation care",
        "target": "Released",
        "value": 11781
      },
      {
        "source": "Refused evaluation care",
        "target": "Transported to hospital",
        "value": 860
      },
      {
        "source": "Evaluated no treatment required",
        "target": "Released",
        "value": 5169
      }
    ],
    "storyNodeText": [
      {
        "StoryNode": "Suicide EMS Responses",
        "segmentTextBefore": "In 2022, there were",
        "segmentTextAfter": "Suicide EMS Responses"
      },
      {
        "StoryNode": "Treated",
        "segmentTextBefore": "of which,",
        "segmentTextAfter": "were treated"
      }
    ],
    "tooltips": [
      {
        "node": "Suicide EMS Responses",
        "value": "467,136 (100%)",
        "summary": "Total number of suicide EMS responses.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "218,195",
            "additional_info": "46.71"
          },
          {
            "label": "Male",
            "value": "243,481",
            "additional_info": "52.12"
          },
          {
            "label": "Unknown",
            "value": "5,460",
            "additional_info": "1.17"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "245,998",
            "additional_info": "52.66"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "93,244",
            "additional_info": "19.96"
          },
          {
            "label": "Hispanic",
            "value": "41,396",
            "additional_info": "8.86"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "4,470",
            "additional_info": "0.96"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "6,160",
            "additional_info": "1.32"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "1,287",
            "additional_info": "0.28"
          },
          {
            "label": "Missing",
            "value": "74,581",
            "additional_info": "15.97"
          }
        ]
      },
      {
        "node": "Dead",
        "value": "4,736 (1.01%)",
        "summary": "Patiend Died",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "1,244",
            "additional_info": "26.47"
          },
          {
            "label": "Male",
            "value": "3,440",
            "additional_info": "72.64"
          },
          {
            "label": "Unknown",
            "value": "52",
            "additional_info": "1.1"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "3,235",
            "additional_info": "68.31"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "307",
            "additional_info": "6.48"
          },
          {
            "label": "Hispanic",
            "value": "242",
            "additional_info": "5.11"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "26",
            "additional_info": "0.55"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "81",
            "additional_info": "1.71"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Missing",
            "value": "834",
            "additional_info": "17.61"
          }
        ]
      },
      {
        "node": "Released",
        "value": "27,252 (5.83%)",
        "value_pct": "5.83",
        "summary": "Patient was released.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "13,835",
            "additional_info": "50.77"
          },
          {
            "label": "Male",
            "value": "12,900",
            "additional_info": "47.34"
          },
          {
            "label": "Unknown",
            "value": "517",
            "additional_info": "1.9"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "15,088",
            "additional_info": "55.36"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "4,749",
            "additional_info": "17.43"
          },
          {
            "label": "Hispanic",
            "value": "2,177",
            "additional_info": "7.99"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "287",
            "additional_info": "1.05"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "321",
            "additional_info": "1.18"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "65",
            "additional_info": "0.24"
          },
          {
            "label": "Missing",
            "value": "4,565",
            "additional_info": "16.75"
          }
        ]
      },
      {
        "node": "Transported to facility",
        "value": "4,504 (0.96%)",
        "summary": "Patient was transported to a facility.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "1,938",
            "additional_info": "43.03"
          },
          {
            "label": "Male",
            "value": "2,522",
            "additional_info": "55.99"
          },
          {
            "label": "Unknown",
            "value": "44",
            "additional_info": "0.98"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "2,093",
            "additional_info": "46.47"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "1,113",
            "additional_info": "24.71"
          },
          {
            "label": "Hispanic",
            "value": "608",
            "additional_info": "13.5"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "73",
            "additional_info": "1.62"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "48",
            "additional_info": "1.07"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Missing",
            "value": "564",
            "additional_info": "12.52"
          }
        ]
      },
      {
        "node": "Transported to hospital",
        "value": "424,380 (90.85%)",
        "summary": "Patient was transported to the hospital by the EMS Unit or another EMS unit.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "199,301",
            "additional_info": "46.96"
          },
          {
            "label": "Male",
            "value": "222,583",
            "additional_info": "52.45"
          },
          {
            "label": "Unknown",
            "value": "2,496",
            "additional_info": "0.59"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "223,907",
            "additional_info": "52.76"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "86,562",
            "additional_info": "20.4"
          },
          {
            "label": "Hispanic",
            "value": "38,084",
            "additional_info": "8.97"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "4,036",
            "additional_info": "0.95"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "5,650",
            "additional_info": "1.33"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "1,193",
            "additional_info": "0.28"
          },
          {
            "label": "Missing",
            "value": "64,954",
            "additional_info": "15.31"
          }
        ]
      },
      {
        "node": "Assisted",
        "value": "5,701 (1.22%)",
        "value_pct": "1.22",
        "summary": "EMS unit only provided assistance (e.g., manpower, equipment) to another agency, member of the public, or another EMS unit.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "1,791",
            "additional_info": "31.42"
          },
          {
            "label": "Male",
            "value": "1,910",
            "additional_info": "33.5"
          },
          {
            "label": "Unknown",
            "value": "2,000",
            "additional_info": "35.08"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "1,593",
            "additional_info": "27.94"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "491",
            "additional_info": "8.61"
          },
          {
            "label": "Hispanic",
            "value": "270",
            "additional_info": "4.74"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "41",
            "additional_info": "0.72"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "57",
            "additional_info": "1"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Missing",
            "value": "3,237",
            "additional_info": "56.78"
          }
        ]
      },
      {
        "node": "Dead at Scene",
        "value": "4,088 (0.88%)",
        "value_pct": "0.88",
        "summary": "Patient showed obvious signs of death or Do Not Resuscitate (DNR) order was presented, and no attempt was made to resuscitate the patient.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "1,023",
            "additional_info": "25.02"
          },
          {
            "label": "Male",
            "value": "3,014",
            "additional_info": "73.73"
          },
          {
            "label": "Unknown",
            "value": "51",
            "additional_info": "1.25"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "2,802",
            "additional_info": "68.54"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "273",
            "additional_info": "6.68"
          },
          {
            "label": "Hispanic",
            "value": "207",
            "additional_info": "5.06"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "65",
            "additional_info": "1.59"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Missing",
            "value": "712",
            "additional_info": "17.42"
          }
        ]
      },
      {
        "node": "Evaluated no treatment required",
        "value": "5,169 (1.11%)",
        "value_pct": "1.11",
        "summary": "Patient was evaluated and no further treatment/transportation to the hospital was required",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "2,545",
            "additional_info": "49.24"
          },
          {
            "label": "Male",
            "value": "2,505",
            "additional_info": "48.46"
          },
          {
            "label": "Unknown",
            "value": "119",
            "additional_info": "2.3"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "2,783",
            "additional_info": "53.84"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "885",
            "additional_info": "17.12"
          },
          {
            "label": "Hispanic",
            "value": "351",
            "additional_info": "6.79"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "59",
            "additional_info": "1.14"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "87",
            "additional_info": "1.68"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Missing",
            "value": "988",
            "additional_info": "19.11"
          }
        ]
      },
      {
        "node": "No patient contact",
        "value": "459 (0.1%)",
        "summary": "No patient contact was made (e.g., EMS unit was on standby in case of a medical/traumatic emergency, response was for the purpose of transporting objects, personnel, or equipment not involving a patient).",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "50",
            "additional_info": "10.89"
          },
          {
            "label": "Male",
            "value": "70",
            "additional_info": "15.25"
          },
          {
            "label": "Unknown",
            "value": "339",
            "additional_info": "73.86"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "41",
            "additional_info": "8.93"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Hispanic",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Missing",
            "value": "388",
            "additional_info": "84.53"
          }
        ]
      },
      {
        "node": "Refused evaluation care",
        "value": "12,641 (2.71%)",
        "summary": "Patient refused any evaluation or care.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "6,314",
            "additional_info": "49.95"
          },
          {
            "label": "Male",
            "value": "6,009",
            "additional_info": "47.54"
          },
          {
            "label": "Unknown",
            "value": "318",
            "additional_info": "2.52"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "7,112",
            "additional_info": "56.26"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "2,366",
            "additional_info": "18.72"
          },
          {
            "label": "Hispanic",
            "value": "1,056",
            "additional_info": "8.35"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "130",
            "additional_info": "1.03"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "128",
            "additional_info": "1.01"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "26",
            "additional_info": "0.21"
          },
          {
            "label": "Missing",
            "value": "1,823",
            "additional_info": "14.42"
          }
        ]
      },
      {
        "node": "Treated",
        "value": "438,974 (93.97%)",
        "value_pct": "93.97",
        "summary": "Patient was evaluated and treatment was provided.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "206,436",
            "additional_info": "47.03"
          },
          {
            "label": "Male",
            "value": "229,917",
            "additional_info": "52.38"
          },
          {
            "label": "Unknown",
            "value": "2,621",
            "additional_info": "0.6"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "231,620",
            "additional_info": "52.76"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "89,207",
            "additional_info": "20.32"
          },
          {
            "label": "Hispanic",
            "value": "39,497",
            "additional_info": "9"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "4,214",
            "additional_info": "0.96"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "5,820",
            "additional_info": "1.33"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "1,222",
            "additional_info": "0.28"
          },
          {
            "label": "Missing",
            "value": "67,394",
            "additional_info": "15.35"
          }
        ]
      },
      {
        "node": "Unknown",
        "value": "104 (0.02%)",
        "summary": "Type of treatment provided is unknown.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "36",
            "additional_info": "34.62"
          },
          {
            "label": "Male",
            "value": "56",
            "additional_info": "53.85"
          },
          {
            "label": "Unknown",
            "value": "--",
            "additional_info": "--"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "47",
            "additional_info": "45.19"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "",
            "additional_info": ""
          },
          {
            "label": "Hispanic",
            "value": "",
            "additional_info": ""
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "",
            "additional_info": ""
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "",
            "additional_info": ""
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "",
            "additional_info": ""
          },
          {
            "label": "Missing",
            "value": "39",
            "additional_info": "37.5"
          }
        ]
      }
    ],
    "tableData": [
      {
        "Disposition": "Assist, Agency",
        "Type of Treatment": "Assisted",
        "Final Outcome": "N/A",
        "Number of Patients": 2356
      },
      {
        "Disposition": "Assist, Public",
        "Type of Treatment": "Assisted",
        "Final Outcome": "N/A",
        "Number of Patients": 859
      },
      {
        "Disposition": "Assist, Unit",
        "Type of Treatment": "Assisted",
        "Final Outcome": "N/A",
        "Number of Patients": 2486
      },
      {
        "Disposition": "Patient Dead at Scene-No Resuscitation Attempted (With Transport)",
        "Type of Treatment": "Dead at scene",
        "Final Outcome": "Dead",
        "Number of Patients": 123
      },
      {
        "Disposition": "Patient Dead at Scene-No Resuscitation Attempted (Without Transport)",
        "Type of Treatment": "Dead at scene",
        "Final Outcome": "Dead",
        "Number of Patients": 3965
      },
      {
        "Disposition": "Patient Dead at Scene-Resuscitation Attempted (With Transport)",
        "Type of Treatment": "Treated",
        "Final Outcome": "Dead",
        "Number of Patients": "**"
      },
      {
        "Disposition": "Patient Dead at Scene-Resuscitation Attempted (Without Transport)",
        "Type of Treatment": "Treated",
        "Final Outcome": "Dead",
        "Number of Patients": 631
      },
      {
        "Disposition": "Patient Evaluated, No Treatment/Transport Required",
        "Type of Treatment": "Evaluated no treatment required",
        "Final Outcome": "Released",
        "Number of Patients": 5169
      },
      {
        "Disposition": "Patient Refused Evaluation/Care (With Transport)",
        "Type of Treatment": "Refused evaluation care",
        "Final Outcome": "Transported to hospital",
        "Number of Patients": 860
      },
      {
        "Disposition": "Patient Refused Evaluation/Care (Without Transport)",
        "Type of Treatment": "Refused evaluation care",
        "Final Outcome": "Released",
        "Number of Patients": 11781
      },
      {
        "Disposition": "Patient Treated, Released (AMA)",
        "Type of Treatment": "Treated",
        "Final Outcome": "Released",
        "Number of Patients": 6780
      },
      {
        "Disposition": "Patient Treated, Released (per protocol)",
        "Type of Treatment": "Treated",
        "Final Outcome": "Released",
        "Number of Patients": 3522
      },
      {
        "Disposition": "Patient Treated, Transferred Care to Another EMS Unit",
        "Type of Treatment": "Treated",
        "Final Outcome": "Transported to hospital",
        "Number of Patients": 24432
      },
      {
        "Disposition": "Patient Treated, Transported by Law Enforcement",
        "Type of Treatment": "Treated",
        "Final Outcome": "Transported to facility",
        "Number of Patients": 4227
      },
      {
        "Disposition": "Patient Treated, Transported by Private Vehicle",
        "Type of Treatment": "Treated",
        "Final Outcome": "Transported to facility",
        "Number of Patients": 277
      },
      {
        "Disposition": "Patient Treated, Transported by this EMS Unit",
        "Type of Treatment": "Treated",
        "Final Outcome": "Transported to hospital",
        "Number of Patients": 399088
      },
      {
        "Disposition": "Standby-Public Safety, Fire, or EMS Operational Support Provided",
        "Type of Treatment": "No patient contact",
        "Final Outcome": "N/A",
        "Number of Patients": 458
      },
      {
        "Disposition": "Transport Non-Patient, Organs, etc.",
        "Type of Treatment": "No patient contact",
        "Final Outcome": "N/A",
        "Number of Patients": "**"
      },
      {
        "Disposition": "Unknown",
        "Type of Treatment": "Unknown",
        "Final Outcome": "N/A",
        "Number of Patients": 104
      }
    ]
  }
]`, Da = {
  charts: [
    {
      text: "Chart Sample Data",
      fileName: "valid-data-chart.csv",
      data: ni
    },
    {
      text: "Box Plot Sample Data",
      fileName: "valid-boxplot.csv",
      data: ai
    },
    {
      text: "Scatter Plot Sample Data",
      fileName: "valid-scatterplot.csv",
      data: oi
    },
    {
      text: "Area Chart Sample Data",
      fileName: "valid-area-chart.json",
      data: ri
    },
    {
      text: "Forecast Chart Data",
      fileName: "valid-forecast-data.csv",
      data: ii
    },
    {
      text: "Forest Plot Data",
      fileName: "valid-forest-plot-data.csv",
      data: li
    },
    {
      text: "Sankey Chart Data",
      fileName: "valid-sankey-data.json",
      data: di
    }
  ],
  maps: [
    {
      text: "United States: State Sample Data",
      fileName: "valid-data-map.csv",
      data: Qu
    },
    {
      text: "United States: County Sample Data",
      fileName: "valid-county-data.csv",
      data: ei
    },
    {
      text: "United States: Geo Point Sample Data",
      fileName: "supported-cities.csv",
      data: ti
    },
    {
      text: "United States: Region",
      fileName: "valid-region-data.json",
      data: ci
    },
    {
      text: "World: Geocode Sample Data",
      fileName: "valid-world-geocode.json",
      data: ui
    },
    {
      text: "World: Default Data",
      fileName: "valid-world-data.json",
      data: si
    }
  ]
}, vr = ({ text: o, fileName: p, data: c }) => {
  const { editingDataset: y, loadData: A } = M.useContext(Lo), E = (O) => A(new Blob([c], { type: "text/csv" }), p, y), d = (O) => O.keyCode === 13 && A(new Blob([c], { type: "text/csv" }), p, y);
  return /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "link link-upload",
      onClick: E,
      onKeyDown: d
    },
    o
  );
}, yi = () => Da.maps.map((o) => /* @__PURE__ */ i.createElement(vr, { key: o.fileName, text: o.text, fileName: o.fileName, data: o.data })), Ci = () => Da.charts.map((o) => /* @__PURE__ */ i.createElement(vr, { key: o.fileName, text: o.text, fileName: o.fileName, data: o.data })), pi = () => {
  const { config: o } = M.useContext(Lo);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("h3", { className: "heading-3" }, "Load Sample Data:"), /* @__PURE__ */ i.createElement("ul", { className: "sample-data-list" }, o.type !== "map" && /* @__PURE__ */ i.createElement(Ci, null), o.type !== "chart" && /* @__PURE__ */ i.createElement(yi, null)));
}, Na = () => null;
Na.data = Da;
Na.Buttons = pi;
const Za = (o) => /* @__PURE__ */ M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", ...o }, /* @__PURE__ */ M.createElement("path", { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" }));
function fi() {
  const { config: o, errors: p, tempConfig: c, sharepath: y } = M.useContext(Lt), A = (F) => {
    yn({ type: "EDITOR_SET_CONFIG", payload: F });
  }, E = (F) => {
    yn({ type: "EDITOR_SET_ERRORS", payload: F });
  }, d = new Or(), [O, Rn] = M.useState(o.dataFileSourceType === "url" ? o.dataFileName : o.dataUrl || ""), [w, En] = M.useState(!!o.dataUrl), [b, rn] = M.useState(o.type === "dashboard" || !o.data), [gn, dn] = M.useState(void 0), [mn, qn] = M.useState(), yn = M.useContext(Ot), Bn = {
    ".csv": "text/csv",
    ".json": "application/json"
  }, Mn = (F) => F === void 0 ? "" : F > Math.pow(1024, 3) ? Math.round(F / Math.pow(1024, 3) * 100) / 100 + " GB" : F > Math.pow(1024, 2) ? Math.round(F / Math.pow(1024, 2) * 100) / 100 + " MB" : F > 1024 ? Math.round(F / 1024 * 100) / 100 + " KB" : F + " B", Un = (F, V, nn) => (V.map(function(an, Ln, Xn) {
    if (!Xn.find((ue) => ue.dataKey === an.dataKey))
      return !1;
  }), !(F.columns.indexOf(nn) < 0)), Vn = async () => {
    let F;
    try {
      F = Mo(O) || Et(O) ? O : new URL(O, window.location.origin);
    } catch {
      throw ot.urlInvalid;
    }
    let V = null;
    const nn = Mo(O) ? ".csv" : Et(O) ? ".json" : Object == null ? void 0 : Object.keys(Bn).find((an) => F.pathname.endsWith(an));
    try {
      await Lr.get(F.toString(), {
        responseType: "blob"
      }).then((an) => {
        V = an.data, nn === ".csv" && V.type === "text/plain" || Mo(O) ? V = V.slice(0, V.size, "text/csv") : (nn === ".json" && V.type === "text/plain" || Et(O)) && (V = V.slice(0, V.size, "application/json"));
      });
    } catch (an) {
      console.error(an);
      const Ln = an.toString();
      throw Object.values(ot).includes(an) ? Ln : ot.failedFetch;
    }
    return V;
  }, Dn = ([F]) => Wn(F, gn, gn), Wn = async (F = null, V, nn) => {
    let an = F, Ln = (an == null ? void 0 : an.path) ?? V ?? null, Xn = "file";
    if (an === null) {
      Xn = "url";
      try {
        an = await Vn(), Ln = O;
      } catch (Jn) {
        E([Jn]);
        return;
      }
    }
    let ue = an.size;
    if (ue > Ma * 1048576) {
      E([ot.fileTooLarge]);
      return;
    }
    let Ae = (F == null ? void 0 : F.name) || O || V, Oe = ((Jn) => {
      let _n;
      if (Jn === "file" && (_n = Ae.match(/(?:\.([^.]+))?$/g), _n.length === 0 ? _n = ".csv" : _n = _n[0]), Jn === "url") {
        let Z = new URL(Ae, window.location.origin);
        _n = Mo(O) ? ".csv" : Et(O) ? ".json" : Object.keys(Bn).find((Pn) => Z.pathname.endsWith(Pn));
      }
      return _n;
    })(Xn), Fe = Bn[Oe], We = new FileReader(), xe = Fe === "text/csv" ? "utf-8" : "";
    We.onload = function() {
      let Jn = this.result;
      switch (Fe) {
        case "text/csv":
          Jn = Jr(Jn);
          break;
        case "text/plain":
        case "application/json":
          try {
            Jn = Et(O) ? JSON.parse(Jn).response.docs : JSON.parse(Jn);
          } catch {
            E([ot.formatting]);
            return;
          }
          break;
        default:
          E([ot.fileType]);
          return;
      }
      try {
        if (Jn = d.autoStandardize(Jn), o.data && o.series)
          if (Un(Jn, o.series, o == null ? void 0 : o.xAxis.dataKey))
            if (o.type === "dashboard") {
              let _n = { ...o.datasets };
              Object.keys(_n).forEach((Z) => _n[Z].preview = !1), _n[nn || Ln] = {
                data: Jn,
                // new data
                dataFileSize: ue,
                dataFileName: Ln,
                // new file source
                dataFileSourceType: Xn,
                // new file source type
                dataFileFormat: Oe.replace(".", "").toUpperCase(),
                preview: !0
              }, w && (_n[nn || Ln].dataUrl = Ln), A({
                ...o,
                ...c,
                dataset: _n
              });
            } else {
              let _n = {
                ...o,
                ...c,
                data: Jn,
                // new data
                dataFileName: Ln,
                // new file source
                dataFileSourceType: Xn,
                // new file source type
                formattedData: d.developerStandardize(Jn, o.dataDescription)
              };
              w && (_n.dataUrl = Ln), A(_n);
            }
          else
            De(
              {
                data: Jn,
                dataFileName: Ln,
                dataFileSourceType: Xn
              },
              "It appears that your data does not contain all of the columns that your last dataset contained. Continuing will reset your configuration. Do you want to continue?"
            );
        else if (o.type === "dashboard") {
          let _n = { ...o.datasets };
          Object.keys(_n).forEach((Z) => _n[Z].preview = !1), _n[nn || Ln] = {
            data: Jn,
            // new data
            dataFileSize: ue,
            dataFileName: Ln,
            // new file source
            dataFileSourceType: Xn,
            // new file source type
            dataFileFormat: Oe.replace(".", "").toUpperCase(),
            preview: !0
          }, w && (_n[nn || Ln].dataUrl = Ln), A({ ...o, datasets: _n });
        } else {
          let _n = {
            ...o,
            ...c,
            data: Jn,
            // new data
            dataFileName: Ln,
            // new file source
            dataFileSourceType: Xn,
            // new file source type
            formattedData: d.developerStandardize(Jn, o.dataDescription)
            // new file source type
          };
          w && (_n.dataUrl = Ln), A(_n);
        }
        gn && dn(void 0), rn(!1);
      } catch (_n) {
        E(_n);
      }
    }, We.readAsText(an, xe);
  };
  M.useEffect(() => {
    let F = { ...c || o };
    if (o.formattedData === void 0 && o.dataDescription) {
      const V = d.developerStandardize(o.data, o.dataDescription);
      V && (F.formattedData = V);
    }
    yn({ type: "EDITOR_SAVE", payload: F });
  }, []), M.useEffect(() => {
    (async () => {
      if (o.type === "dashboard")
        Object.keys(o.datasets).forEach(async (V) => {
          if (o.datasets[V].preview)
            if (o.datasets[V].dataUrl) {
              const nn = await La(o.datasets[V].dataUrl);
              Array.isArray(nn) && qn(nn);
            } else
              Array.isArray(o.datasets[V].data) && qn(o.datasets[V].data);
        });
      else if (o.dataUrl) {
        const V = await La(o.dataUrl);
        Array.isArray(V) && qn(V);
      }
    })();
  }, [o.datasets]);
  const vn = (F, V, nn, an) => {
    if (o.type === "dashboard") {
      let Ln = { ...o.datasets[V].dataDescription, [nn]: an }, Xn = d.developerStandardize(o.datasets[V].data, Ln), ue = { ...o.datasets };
      ue[V] = { ...ue[V], dataDescription: Ln, formattedData: Xn }, A({ ...o, datasets: ue });
    } else {
      let Ln = { ...o.dataDescription, [nn]: an }, Xn = d.developerStandardize(o.data, Ln);
      A({ ...o, formattedData: Xn, dataDescription: Ln });
    }
  }, le = (F, V) => {
    if (V) {
      let nn = { ...o.datasets };
      F === !1 ? delete nn[V].dataUrl : nn[V].dataUrl = nn[V].dataFileName, A({ ...o, datasets: nn });
    } else if (o.type !== "dashboard") {
      let nn = { ...o };
      F === !1 ? delete nn.dataUrl : nn.dataUrl = nn.dataFileName, A(nn);
    }
    En(F);
  }, { getRootProps: $n, getInputProps: xn, isDragActive: oe } = wa({ onDrop: Dn }), { getRootProps: se, getInputProps: ne, isDragActive: ee } = wa({ onDrop: Dn }), Te = (F, V) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("form", { className: "input-group d-flex", onSubmit: (nn) => nn.preventDefault() }, /* @__PURE__ */ i.createElement("input", { id: "external-data", type: "text", className: "form-control flex-grow-1 border-right-0", placeholder: "e.g., https://data.cdc.gov/resources/file.json", "aria-label": "Load data from external URL", "aria-describedby": "load-data", value: O, onChange: (nn) => Rn(nn.target.value) }), /* @__PURE__ */ i.createElement("button", { className: "input-group-text btn btn-primary px-4", type: "submit", id: "load-data", onClick: () => Wn(null, O, V) }, "Load")), /* @__PURE__ */ i.createElement("label", { htmlFor: "keep-url", className: "mt-1 d-flex keep-url" }, /* @__PURE__ */ i.createElement("input", { type: "checkbox", id: "keep-url", checked: w, onChange: () => le(!w, V) }), " Always load from URL (normally will only pull once)")), De = (F = {}, V = "Are you sure you want to do this?") => {
    F.newViz = !0, window.confirm(V) === !0 && (yn({ type: "EDITOR_SAVE", payload: F }), rn(!0));
  }, he = () => (
    //todo convert to modal
    /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("button", { className: "btn danger", onClick: () => De({ type: o.type, visualizationType: o.visualizationType }, "Resetting will remove your data and settings. Do you want to continue?") }, "Clear", /* @__PURE__ */ i.createElement(Ia, null)), o.dataFileSourceType === "file" && /* @__PURE__ */ i.createElement("div", { className: "link link-replace", ...se() }, /* @__PURE__ */ i.createElement("input", { ...ne() }), /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("span", null, "or replace file"))))
  ), Ee = (F, V, nn) => {
    let an = { ...o.datasets };
    nn === !0 ? Object.keys(an).forEach((Ln) => {
      Ln !== F ? an[Ln][V] = !1 : an[Ln][V] = !0;
    }) : an[F][V] = nn, A({ ...o, datasets: an });
  }, ge = (F) => {
    let V = { ...o.datasets }, nn = { ...o.visualizations };
    Object.keys(nn).forEach((an) => {
      nn[an].dataKey === F && delete nn[an].dataKey;
    }), delete V[F], A({ ...o, datasets: V, visualizations: nn });
  }, Pe = (F, V) => {
    if (F === V)
      return;
    let nn = { ...o.datasets }, an = { ...o.visualizations }, Ln = 2, Xn = V;
    for (; nn[V]; )
      V = Xn + "-" + Ln, Ln++;
    nn[V] = nn[F], delete nn[F], Object.keys(an).forEach((ue) => {
      an[ue].dataKey === F && (an[ue].dataKey = V);
    }), A({ ...o, datasets: nn, visualizations: an });
  };
  let ce, be, Me = !1;
  o.type === "dashboard" ? (Me = Object.keys(o.datasets).length > 0, Object.keys(o.datasets).forEach((F) => {
    o.datasets[F].preview && Array.isArray(o.datasets[F].data) && (ce = o.datasets[F].data);
  })) : (ce = o.data, be = o, Me = !!o.formattedData || o.data && o.dataDescription && d.autoStandardize(o.data)), (o.visualizationType === "Box Plot" && o.data || o.visualizationType === "Scatter Plot") && (Me = !0);
  const Ne = /* @__PURE__ */ i.createElement(i.Fragment, null, o.filters && o.filters.map(
    (F, V) => F.type !== "url" ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("fieldset", { key: F.key, className: "edit-block url-filters-block" }, /* @__PURE__ */ i.createElement(
      "button",
      {
        onClick: (nn) => {
          let an = [...o.filters];
          an.splice(V, 1), A({ ...o, filters: an, runtimeDataUrl: void 0 });
        }
      },
      "Remove"
    ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Label", /* @__PURE__ */ i.createElement(en, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(Pa, { display: "question" })), /* @__PURE__ */ i.createElement(en.Content, null, /* @__PURE__ */ i.createElement("p", { style: { padding: "0.5rem" } }, "The label that will appear above the dropdown filter.")))), " ", /* @__PURE__ */ i.createElement(
      "input",
      {
        type: "text",
        defaultValue: F.label,
        onChange: (nn) => {
          let an = [...o.filters];
          an[V].label = nn.target.value, A({ ...o, filters: an });
        }
      }
    )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Query string parameter", /* @__PURE__ */ i.createElement(en, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(Pa, { display: "question" })), /* @__PURE__ */ i.createElement(en.Content, null, /* @__PURE__ */ i.createElement("p", { style: { padding: "0.5rem" } }, "Name of the query string parameter that will be appended to the URL above with the values provided below.")))), " ", /* @__PURE__ */ i.createElement(
      "input",
      {
        type: "text",
        defaultValue: F.queryParameter,
        onChange: (nn) => {
          let an = [...o.filters];
          an[V].queryParameter = nn.target.value, A({ ...o, filters: an });
        }
      }
    )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Values"), " "), /* @__PURE__ */ i.createElement("ul", { className: "value-list" }, F.orderedValues && F.orderedValues.map((nn, an) => /* @__PURE__ */ i.createElement("li", null, nn, /* @__PURE__ */ i.createElement(
      "input",
      {
        type: "text",
        placeholder: "Enter value display name here",
        value: F.labels ? F.labels[nn] : void 0,
        className: "url-value-label",
        onChange: (Ln) => {
          let Xn = [...o.filters];
          Xn[V].labels = Xn[V].labels || {}, Xn[V].labels[nn] = Ln.target.value, A({ ...o, filters: Xn });
        }
      }
    ), /* @__PURE__ */ i.createElement(
      "button",
      {
        onClick: () => {
          let Ln = [...o.filters];
          Ln[V].labels && delete Ln[V].labels[Ln[V].orderedValues[an]], Ln[V].orderedValues.splice(an, 1), A({ ...o, filters: Ln });
        }
      },
      "X"
    )))), /* @__PURE__ */ i.createElement(
      "form",
      {
        onSubmit: (nn) => {
          if (nn.preventDefault(), !o.filters[V].orderedValues || o.filters[V].orderedValues.indexOf(nn.target[0].value) === -1) {
            let an = [...o.filters];
            an[V].orderedValues = an[V].orderedValues || [], an[V].orderedValues.push(nn.target[0].value), an[V].values = an[V].orderedValues, an[V].active || (an[V].active = nn.target[0].value), nn.target[0].value = "", A({ ...o, filters: an });
          }
        }
      },
      /* @__PURE__ */ i.createElement("input", { type: "text", placeholder: "Enter new value name here" }),
      " ",
      /* @__PURE__ */ i.createElement("button", { type: "submit", style: { marginTop: "1em" } }, "Add New Value")
    ))
  ), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: () => {
        A({ ...o, filters: o.filters ? [...o.filters, { type: "url", key: Date.now() }] : [{ type: "url", key: Date.now() }] });
      }
    },
    "Add New URL Filter"
  )), Se = o.visualizationType !== "Box Plot" && o.visualizationType !== "Scatter Plot";
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "left-col" }, o.type === "dashboard" && Object.keys(o.datasets).length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "heading-3" }, "Data Sources"), /* @__PURE__ */ i.createElement("table", null, /* @__PURE__ */ i.createElement("thead", null, /* @__PURE__ */ i.createElement("tr", null, /* @__PURE__ */ i.createElement("th", null, "Name"), /* @__PURE__ */ i.createElement("th", null, "Size"), /* @__PURE__ */ i.createElement("th", null, "Type"), /* @__PURE__ */ i.createElement("th", { colSpan: 4 }, "Actions"))), /* @__PURE__ */ i.createElement("tbody", null, Object.keys(o.datasets).map(
    (F) => o.datasets[F].dataFileName && /* @__PURE__ */ i.createElement("tr", { key: `tr-${F}` }, /* @__PURE__ */ i.createElement("td", null, /* @__PURE__ */ i.createElement("input", { className: "dataset-name-input", type: "text", defaultValue: F, onBlur: (V) => Pe(F, V.target.value) })), /* @__PURE__ */ i.createElement("td", null, Mn(o.datasets[F].dataFileSize)), /* @__PURE__ */ i.createElement("td", null, o.datasets[F].dataFileFormat), /* @__PURE__ */ i.createElement("td", null, /* @__PURE__ */ i.createElement("button", { className: "btn btn-primary", onClick: () => Ee(F, "preview", !0) }, "Preview Data")), /* @__PURE__ */ i.createElement("td", null, /* @__PURE__ */ i.createElement(
      "button",
      {
        className: "btn btn-primary",
        onClick: () => {
          gn === F ? (dn(void 0), Rn(""), En(!1)) : (dn(F), Rn(o.datasets[F].dataUrl || o.datasets[F].dataFileName), En(!!o.datasets[F].dataUrl));
        }
      },
      "Edit Data"
    )), /* @__PURE__ */ i.createElement("td", null, /* @__PURE__ */ i.createElement("button", { className: "btn btn-primary", onClick: () => ge(F) }, "X")))
  )))), be && be.data && /* @__PURE__ */ i.createElement(i.Fragment, null, o.type !== "dashboard" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "heading-3" }, "Data Source"), /* @__PURE__ */ i.createElement("div", { className: "file-loaded-area" }, (o.dataFileSourceType === "file" || !o.dataFileSourceType) && /* @__PURE__ */ i.createElement("div", { className: "data-source-options" }, /* @__PURE__ */ i.createElement("div", { className: ee ? "drag-active cdcdataviz-file-selector loaded-file" : "cdcdataviz-file-selector loaded-file", ...se() }, /* @__PURE__ */ i.createElement("input", { ...ne() }), ee ? /* @__PURE__ */ i.createElement("p", null, "Drop file here") : /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement(Za, null), " ", /* @__PURE__ */ i.createElement("span", null, o.dataFileName ?? "Replace data file"))), /* @__PURE__ */ i.createElement("div", null, he())), o.dataFileSourceType === "url" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "url-source-options" }, /* @__PURE__ */ i.createElement("div", null, Te(O, gn)), /* @__PURE__ */ i.createElement("div", null, he())), o.dataUrl && (o.type === "chart" || o.type === "map") && Ne))), Se && /* @__PURE__ */ i.createElement(Kr, { visualizationKey: null, dataKey: be.dataFileName, configureData: be, updateDescriptionProp: vn, config: o, setConfig: A })), (gn || b) && // dataFileSourceType needs to be checked here since earlier versions did not track this state
  /* @__PURE__ */ i.createElement("div", { className: "load-data-area" }, /* @__PURE__ */ i.createElement("div", { className: "heading-3" }, gn ? `Editing ${gn}` : "Add Dataset"), /* @__PURE__ */ i.createElement(Vu, { startingTab: gn && o.datasets[gn].dataFileSourceType === "url" ? 1 : 0 }, /* @__PURE__ */ i.createElement(kt, { title: "Upload File", icon: /* @__PURE__ */ i.createElement(Za, { className: "inline-icon" }) }, y && /* @__PURE__ */ i.createElement("p", { className: "alert--info" }, "The share path set for this website is: ", y), /* @__PURE__ */ i.createElement("div", { className: oe ? "drag-active cdcdataviz-file-selector" : "cdcdataviz-file-selector", ...$n() }, /* @__PURE__ */ i.createElement("input", { ...xn() }), oe ? /* @__PURE__ */ i.createElement("p", null, "Drop file here") : /* @__PURE__ */ i.createElement("p", null, "Drag file to this area, or ", /* @__PURE__ */ i.createElement("span", null, "select a file"), "."))), /* @__PURE__ */ i.createElement(kt, { title: "Load from URL", icon: /* @__PURE__ */ i.createElement(Zu, { className: "inline-icon" }) }, Te(gn && o.datasets[gn].dataFileSourceType === "url" ? o.datasets[gn].dataFileName : O, gn))), p && (Array.isArray(p) ? p.map((F, V) => /* @__PURE__ */ i.createElement("div", { className: "error-box slim mt-2", key: `error-${F}` }, /* @__PURE__ */ i.createElement("span", null, F), " ", /* @__PURE__ */ i.createElement(Ia, { className: "inline-icon dismiss-error", onClick: () => E(p.filter((nn, an) => an !== V)) }))) : p.message), /* @__PURE__ */ i.createElement("p", { className: "footnote" }, "Supported file types: ", Object.keys(Bn).join(", "), ". Maximum file size ", Ma, "MB."), /* @__PURE__ */ i.createElement(Lo.Provider, { value: { loadData: Wn, editingDataset: gn, config: o } }, /* @__PURE__ */ i.createElement(Na.Buttons, null))), o.type === "dashboard" && !b && /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("button", { className: "btn btn-primary", onClick: () => rn(!0) }, "+ Add More Files")), Me && /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("button", { className: "btn btn-primary", onClick: () => yn({ type: "EDITOR_SET_GLOBALACTIVE", payload: 2 }) }, "Configure your visualization")), /* @__PURE__ */ i.createElement("a", { href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement("h3", null, "Get Help"), /* @__PURE__ */ i.createElement("p", null, "Documentation and examples on formatting data and configuring visualizations.")))), /* @__PURE__ */ i.createElement("div", { className: "right-col" }, /* @__PURE__ */ i.createElement($u, { data: mn || ce })));
}
const gi = (o) => /* @__PURE__ */ M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024", fill: "currentColor", ...o }, /* @__PURE__ */ M.createElement("path", { d: "M489.3,377.8H80.1v-288c0-8.4-6.8-15.2-15.2-15.2H34.7c-8.4,0-15.2,6.8-15.2,15.2v318.3c0,16.7,13.6,30.3,30.3,30.3h439.5 c8.4,0,15.2-6.8,15.2-15.2v-30.3C504.5,384.6,497.7,377.8,489.3,377.8z" }), /* @__PURE__ */ M.createElement("path", { d: "M459,105H347.2c-20.3,0-30.4,24.5-16.1,38.8l30.7,30.7L292.3,244l-69.5-69.5c-11.8-11.8-31-11.8-42.9,0l-65.1,65.1 c-5.9,5.9-5.9,15.5,0,21.4l21.4,21.4c5.9,5.9,15.5,5.9,21.4,0l43.6-43.6l69.5,69.5c11.8,11.8,31,11.8,42.9,0l90.9-90.9l30.7,30.7 c14.3,14.3,38.8,4.2,38.8-16.1V120.1C474.2,111.7,467.4,105,459,105z" }), /* @__PURE__ */ M.createElement("path", { d: "M991.2,280.5h-188l125.2,125.2c4.8,4.8,12.7,5.2,17.6,0.5c30.7-28.9,51.8-67.8,57.9-111.6 C1005,287.2,998.8,280.5,991.2,280.5L991.2,280.5z" }), /* @__PURE__ */ M.createElement("path", { d: "M978.7,229.2c-6.5-94.6-82.2-170.3-176.8-176.8c-7.2-0.5-13.3,5.6-13.3,12.8v177.3h177.3 C973.1,242.5,979.2,236.4,978.7,229.2L978.7,229.2z" }), /* @__PURE__ */ M.createElement("path", { d: "M750.5,280.5v-188c0-7.6-6.6-13.8-14.1-12.7C642,93.1,569.8,175.6,573.2,274.5C576.6,376,664,459.3,765.6,458 c39.9-0.5,76.8-13.4,107.2-34.9c6.3-4.4,6.7-13.7,1.2-19.1L750.5,280.5z" }), /* @__PURE__ */ M.createElement("path", { d: "M130.7,558l1.1,7.2l5.5,11.6l-2.8,12.1l-6.1-7.7l-3.9-8.8l-8.8-1.7L102,569h-3.9l2.2,7.7l7.7,11v11l2.2,12.1l9.9,1.1 l3.9,5.5l-12.1-1.7l-3.9,2.8l1.7,11.6l-2.2,12.7l0.5,14.9l-3.9,9.9l-4.4,14.3l3.3,9.9l2.2,12.7l1.7,9.4l-2.2,12.7l1.7,8.8l3.9,8.8 l3.3,11l2.8,7.2L128,772l5.5-0.6l7.7,1.1l-8.3,2.2l2.2,3.9l-7.2,1.1l6.6,7.2l6.6,7.2l-2.2,6.1l8.8,12.7l9.4,7.7l1.1,9.4l7.7,3.9 l10.5,3.3l8.3,7.2l7.2,4.4l7.7,6.1l4.4,3.3l5,11l28.1-0.6l55.2,19.3h45.8l-1.1-4.4h22.1l8.8,5l5,5l12.7,8.8l4.4,16l12.7,6.6l7.7,3.3 l10.5-12.7l13.8,1.7l5.5,4.4l14.9,24.3l5,6.1l3.9,13.8l29.2,11.6l-1.1-9.9l-1.1-13.8l9.4-11l-1.7-3.3l9.4-7.7l5,2.8l8.3-9.4l5-6.6 h7.2l16-3.3l11.6,5h8.8l3.3-3.9l3.9,2.8l0.6,5l11.6,3.9l11-1.7l9.4,0.6l-7.7-6.1l-0.6-3.3l5-2.8l-0.5-2.8H598l-8.8,1.1l5.5-5 l2.8-3.3l2.8,2.8l16-2.2l2.2,2.8h11l6.1-1.7l8.8-0.5l8.3,3.3l5-0.6l5,7.2l9.9,0.5l5.5-4.4h5.5l11,9.4l6.1,6.6l1.7,8.8l-1.1,11 l3.9,11.6l10.5,13.2l6.1,12.7l2.2,5l11-2.2l2.8-12.1v-18.2l-5.5-14.9l-1.7-3.9l-1.1-11l-9.4-11l-1.7-13.2l0.5-11l4.4-12.1l8.3-6.6 l-0.6-5l9.9-1.7l14.3-16l6.6-5.5l7.2,1.1l6.6-12.7l9.4-5c0,0,7.2,1.1,7.7-1.7c0.5-2.8,7.7-16,7.7-16l-7.7-4.4l4.4-3.9l1.1-2.8 l-4.4-11l-4.4-5l5.5-6.1l-4.4-5.5l-1.1-11l-0.6-9.4l3.3-2.8l2.2,13.8l1.7,6.6l3.9,6.1l-1.1,9.9l6.1-12.1l3.9-9.4l0.6-5.5l-5.5-6.6 l-0.6-2.8l1.7-1.7l8.8,5.5l2.8-6.6l6.1-6.1l1.1-6.6l-1.1-7.7l0.5-3.9l1.1-5.5l4.4,6.1h2.2l6.6-1.1l6.6-0.6l8.8-2.8l-1.7-3.3 l-8.8,0.6l-8.3,2.2l-3.9,2.2l-0.6-3.9l2.8-3.3l7.2-1.7l8.8-1.7l6.1-1.7l5-3.3l11.6,2.8c0,0,5,2.8,5.5,1.1c0.6-1.7,2.2-6.1,2.2-6.1 l-3.9-4.4l-1.7-6.6l1.1-11l1.1-8.8l5-6.6l1.1-2.8l3.3,1.7l10.5-11.6h3.9l8.8-1.1l2.8-5.5h7.7l6.6-5.5l-2.5-3l-3-7.4l-3.3-2.5 l1.4-18.5l-1.7-16.8l-9.9-3l-8.6,3l-4.7-0.6l-19,44.4l-8.8,0.6l-3.9,3.3l-46.9-0.3l-11.6,10.8l-7.2,4.4l-3.3,9.4l-1.7,5l-8.3,5.5 H774l-6.1-2.8l-7.7,1.1l-9.9,3.3l0.6,5l-0.6,8.8l-5,4.4l-9.9,2.2l-15.4,7.7l-11.6,3.9l-11,0.6l-6.6-5l3.3-6.1l1.7-1.7l2.2-6.1 l4.1-2.5l5.2-9.1l-5.5-7.2l-1.1-11.6l-7.2-2.2l-9.4,6.6l3.3-7.7l5.5-7.7l-2.2-7.2l-1.7-8.3l-8.8-3.3l-7.7-6.6l-9.4,3.9l0.6,7.2 l-5.5,6.6l-4.4-2.2l-8.3,9.4v11l1.1,11l5,7.7l-0.6,16.6l-10.5,9.9l-7.7,0.6l-3.9-11.6l-3.9-8.3l1.7-11l-1.7-11l3.9-7.2l2.2-7.2 l3.9-12.1l-8.8,9.9l5-17.1l7.7-6.6l9.4-0.6l7.2-3.3H667h9.4l6.1-1.7l7.2,1.1l3.3,5.5l13.8,5l2.8-7.7l-9.4,1.1l-6.1-0.6l-8.8-6.6 l-5.5-3.3l-6.3-4.7l-6.3,1.9l-6.1-4.4l-14.3,0.6l-7.7,5l-6.1-3.9l-7.2-4.4l-10.5-0.6l10.5-14.9l-12.1,5.5l-9.9,7.7l-9.9,5.5 l-8.8,1.1l-1.1-5.5l-18.2,3.9l15.3-13.4l10.8-7.9l13.4-10.5l-5.5-0.8l-18.2,0.6l-8.3-1.7l-7.4-1.2L558,564l-8.3,0.6l-15.7-3.9 l-4.1-5l-2.2-7.7l-3.9-3.6l0.3,4.1l-3.9,6.1l-387.3,0.3L130.7,558L130.7,558z" })), mi = (o) => /* @__PURE__ */ M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.7", fill: "currentColor", ...o }, /* @__PURE__ */ M.createElement("path", { d: "M91,18.7H62c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h29c0.6,0,1-0.4,1-1v-6C92,19.1,91.6,18.7,91,18.7z M89.4,24.7H63.6 c-0.3,0-0.6-0.2-0.6-0.6v-2.9c0-0.3,0.2-0.6,0.6-0.6h25.9c0.3,0,0.6,0.2,0.6,0.6v2.9C90,24.4,89.8,24.7,89.4,24.7z" }), /* @__PURE__ */ M.createElement("path", { d: "M75,30.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1v-6C76,31.1,75.6,30.7,75,30.7z M73.7,36.7h-9.3 c-0.2,0-0.3-0.2-0.3-0.3V33c0-0.2,0.2-0.3,0.3-0.3h9.3c0.2,0,0.3,0.2,0.3,0.3v3.3C74,36.5,73.8,36.7,73.7,36.7z" }), /* @__PURE__ */ M.createElement("path", { d: "M81,43.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1v-6C82,44.1,81.6,43.7,81,43.7z M79.6,49.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.1c0-0.2,0.2-0.4,0.4-0.4h15.1c0.2,0,0.4,0.2,0.4,0.4v3.1C80,49.5,79.8,49.7,79.6,49.7z" }), /* @__PURE__ */ M.createElement("path", { d: "M47,12.7h6c0.6,0,1,0.4,1,1v52c0,0.6-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1v-52C46,13.1,46.4,12.7,47,12.7z" }), /* @__PURE__ */ M.createElement("path", { d: "M39,19.7v6c0,0.6-0.4,1-1,1H17c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h21C38.6,18.7,39,19.1,39,19.7z" }), /* @__PURE__ */ M.createElement("path", { d: "M39,31.7v6c0,0.6-0.4,1-1,1H8c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h30C38.6,30.7,39,31.1,39,31.7z" }), /* @__PURE__ */ M.createElement("path", { d: "M39,44.7v6c0,0.6-0.4,1-1,1H20c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h18C38.6,43.7,39,44.1,39,44.7z" }), /* @__PURE__ */ M.createElement("path", { d: "M39,57.7v6c0,0.6-0.4,1-1,1H25c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h13C38.6,56.7,39,57.1,39,57.7z" }), /* @__PURE__ */ M.createElement("path", { d: "M79,56.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v-6C80,57.1,79.6,56.7,79,56.7z M77.6,62.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.2c0-0.2,0.2-0.4,0.4-0.4h13.2c0.2,0,0.4,0.2,0.4,0.4v3.2C78,62.5,77.8,62.7,77.6,62.7z" })), vi = (o) => /* @__PURE__ */ M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.3 82.6", fill: "currentColor", ...o }, /* @__PURE__ */ M.createElement("path", { d: "M83.9,61.4h-64V12.1c0-1.1-0.9-2-2-2h-5.5c-1.1,0-2,0.9-2,2v56.7c0,1.1,0.9,2,2,2h71.5c1.1,0,2-0.9,2-2v-5.5 C85.9,62.3,85,61.4,83.9,61.4z" }), /* @__PURE__ */ M.createElement("path", { d: "M67.1,47.3H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h40.3c1.1,0,2-0.9,2-2v-6.1C69.1,48.2,68.2,47.3,67.1,47.3L67.1,47.3z  M52,54.6H38.2c-0.7,0-1.3-0.4-1.3-1V51c0-0.5,0.6-1,1.3-1H52c0.7,0,1.3,0.4,1.3,1v2.6C53.3,54.1,52.8,54.6,52,54.6z" }), /* @__PURE__ */ M.createElement("path", { d: "M83.9,31.7H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h57.2c1.1,0,2-0.9,2-2v-6.1C85.9,32.6,85,31.7,83.9,31.7z M68.8,39 H45.2c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h23.7c0.7,0,1.3,0.4,1.3,1V38C70.2,38.5,69.6,39,68.8,39z" }), /* @__PURE__ */ M.createElement("path", { d: "M77,16.1H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2H77c1.1,0,2-0.9,2-2v-6.1C79,17,78.1,16.1,77,16.1z M58.9,23.4H36.6 c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h22.3c0.7,0,1.3,0.4,1.3,1v2.6C60.2,23,59.6,23.4,58.9,23.4z" })), hi = (o) => /* @__PURE__ */ M.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ M.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ M.createElement("g", null, /* @__PURE__ */ M.createElement("path", { d: "M30.22,49.19c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ M.createElement("path", { d: "M33.06,35.59c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ M.createElement("path", { d: "M48.12,37.83c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ M.createElement("circle", { cx: 49.64, cy: 22.73, r: 3.24 }), /* @__PURE__ */ M.createElement("path", { d: "M64.53,19.49c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ M.createElement("path", { d: "M57.95,31.11c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ M.createElement("path", { d: "M74.53,11.54c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }))), Si = (o) => /* @__PURE__ */ M.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ M.createElement("path", { d: "M54.68,29.14h-4.1V8.43h2.68c.5,0,.9-.15,1.19-.46,.46-.48,.44-1.11,.42-1.62,0-.11,0-.22,0-.34s0-.24,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-10.2c-.5,0-.9,.15-1.19,.46-.47,.48-.44,1.11-.42,1.62,0,.11,0,.23,0,.34s0,.23,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h2.68V29.14h-4.1c-1.33,0-2.42,1.09-2.42,2.42v31.31c0,1.33,1.09,2.42,2.42,2.42h4.1v7.97h-2.68c-.5,0-.9,.15-1.19,.46-.46,.48-.44,1.11-.42,1.62,0,.11,0,.22,0,.34s0,.24,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h10.2c.5,0,.9-.15,1.19-.46,.47-.48,.44-1.11,.42-1.62,0-.11,0-.23,0-.34s0-.23,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-2.68v-7.97h4.1c1.33,0,2.42-1.09,2.42-2.42V31.56c0-1.33-1.09-2.42-2.42-2.42Zm-2.42,20.5v10.81h-8.2v-10.81h8.2Zm-8.2-4.84v-10.81h8.2v10.81h-8.2Z" })), wi = (o) => /* @__PURE__ */ M.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ M.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ M.createElement("path", { d: "M87.91,60.65c-.02-.12-2.46-12.63-5.53-24.97-5.97-23.99-8.8-26-10.99-26-2.54,0-4.17,3.55-7.92,12.31-.67,1.56-1.4,3.27-2.18,5.02-1.66-4.14-3.14-5.9-4.84-5.9-2.39,0-4.05,3.42-7.07,9.64-5.56,11.44-13.97,28.72-29.12,28.72-.8,0-1.46,.65-1.46,1.45s.65,1.45,1.46,1.45H86.48c.43,0,.85-.19,1.12-.53,.28-.34,.39-.78,.31-1.2Zm-46.88-1.25c8.93-4.92,15.3-15.3,19.83-24.54,2.62,8.88,4.97,20.28,5.83,24.58l-25.66-.04Z" })), bi = (o) => /* @__PURE__ */ M.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ M.createElement("path", { d: "M18.29,39.57c0-1.03,.23-1.79,.68-2.28,.45-.49,1.06-.74,1.83-.74s1.42,.25,1.87,.74c.45,.49,.68,1.25,.68,2.29s-.23,1.79-.68,2.28c-.45,.5-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.25-.68-2.29Zm1.71-.02c0,.75,.09,1.25,.26,1.5,.13,.19,.31,.28,.54,.28s.42-.09,.55-.28c.17-.25,.25-.75,.25-1.5s-.08-1.24-.25-1.49c-.13-.19-.31-.29-.55-.29s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Zm2.47,9.08h-1.62l6.1-12.09h1.58l-6.05,12.09Zm3.55-3.01c0-1.03,.23-1.79,.68-2.28,.45-.49,1.07-.74,1.85-.74s1.4,.25,1.86,.74c.45,.5,.68,1.26,.68,2.28s-.23,1.79-.68,2.29c-.45,.49-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.26-.68-2.29Zm1.71,0c0,.75,.09,1.24,.26,1.49,.13,.19,.31,.29,.54,.29s.41-.09,.54-.28c.17-.25,.26-.75,.26-1.5s-.08-1.24-.25-1.5c-.13-.19-.31-.28-.55-.28s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Z" }), /* @__PURE__ */ M.createElement("path", { d: "M92.33,52.83v-20.42c0-1.61-1.31-2.93-2.93-2.93H6.65c-1.61,0-2.93,1.31-2.93,2.93v20.42c0,1.61,1.31,2.93,2.93,2.93H89.4c1.61,0,2.93-1.31,2.93-2.93Zm-52.34-2.93H9.58v-14.56h30.41v14.56Zm5.86-14.56h40.63v14.56H45.85v-14.56Z" })), Mi = (o) => /* @__PURE__ */ M.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ M.createElement("defs", null, /* @__PURE__ */ M.createElement("style", null, ".b{stroke-width:3px;}.b,.c,.d{stroke-linecap:round;}.b,.c,.d,.e{stroke:#000;}.c,.d,.e{fill:none;}.d{stroke-dasharray:0 0 0 4.07;}.e{stroke-width:2px;}")), /* @__PURE__ */ M.createElement("path", { d: "M14.15,8.39v63.29c0,.87,.89,1.59,1.98,1.59h5.42c1.09,0,1.98-.72,1.98-1.59l-.13-63.29c0-.87-.89-1.59-1.98-1.59h-5.28c-1.09,0-1.98,.72-1.98,1.59Z" }), /* @__PURE__ */ M.createElement("g", null, /* @__PURE__ */ M.createElement("line", { className: "c", x1: 53.51, y1: 10.09, x2: 53.51, y2: 10.09 }), /* @__PURE__ */ M.createElement("line", { className: "d", x1: 53.51, y1: 14.16, x2: 53.51, y2: 69.05 }), /* @__PURE__ */ M.createElement("line", { className: "c", x1: 53.51, y1: 71.08, x2: 53.51, y2: 71.08 })), /* @__PURE__ */ M.createElement("g", null, /* @__PURE__ */ M.createElement("path", { className: "b", d: "M29.78,16.97h34.43" }), /* @__PURE__ */ M.createElement("path", { className: "b", d: "M29.78,21.48V12.45" }), /* @__PURE__ */ M.createElement("path", { className: "b", d: "M65.64,21.48V12.45" })), /* @__PURE__ */ M.createElement("g", null, /* @__PURE__ */ M.createElement("path", { className: "b", d: "M50.62,33.5h28.85" }), /* @__PURE__ */ M.createElement("path", { className: "b", d: "M50.62,38.02v-9.03" }), /* @__PURE__ */ M.createElement("path", { className: "b", d: "M80.67,38.02v-9.03" })), /* @__PURE__ */ M.createElement("g", null, /* @__PURE__ */ M.createElement("path", { className: "b", d: "M28.21,50.03h19.26" }), /* @__PURE__ */ M.createElement("path", { className: "b", d: "M28.21,54.55v-9.03" }), /* @__PURE__ */ M.createElement("path", { className: "b", d: "M48.27,54.55v-9.03" })), /* @__PURE__ */ M.createElement("g", null, /* @__PURE__ */ M.createElement("path", { className: "b", d: "M40.69,66.57h33.99" }), /* @__PURE__ */ M.createElement("path", { className: "b", d: "M40.69,71.08v-9.03" }), /* @__PURE__ */ M.createElement("path", { className: "b", d: "M76.1,71.08v-9.03" })), /* @__PURE__ */ M.createElement("circle", { className: "e", cx: 47.47, cy: 16.97, r: 2.2 }), /* @__PURE__ */ M.createElement("circle", { className: "e", cx: 65.64, cy: 33.5, r: 2.2 }), /* @__PURE__ */ M.createElement("circle", { className: "e", cx: 38.49, cy: 50.03, r: 2.2 }), /* @__PURE__ */ M.createElement("circle", { className: "e", cx: 58.31, cy: 66.57, r: 2.2 })), Ai = (o) => /* @__PURE__ */ M.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ M.createElement("path", { d: "M89.56,65.41H16.36V8.8c0-1.1-.9-2-2-2h-5.48c-1.1,0-2,.9-2,2V72.89c0,1.1,.9,2,2,2H89.56c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ M.createElement("path", { d: "M54.66,55.34c-17.76,0-33.46-17.8-34.12-18.56l-.98-1.13v-4.55l3.25,3.72c.15,.18,15.47,17.53,31.86,17.53h0c7.31,0,12.37-1.68,17.27-3.3,4.31-1.42,8.77-2.9,14.44-3.05l1.5-.04v3l-1.42,.04c-5.24,.14-9.29,1.48-13.59,2.9-5.13,1.69-10.43,3.45-18.22,3.45h0Z" }), /* @__PURE__ */ M.createElement("path", { d: "M87.84,59.04c-4.73-1.24-7.41-1.66-13.05-1.93-2.82-.14-5.22,.16-8,.5-2.73,.33-5.81,.71-10.06,.79-13.13,.27-23.77-4.63-37.17-17.31v-1.57c13.19,12.48,24.31,18.13,37.15,17.88,4.2-.08,7.26-.46,9.96-.79,2.83-.34,5.27-.64,8.17-.5,5.73,.28,8.2,.62,13,1.88v1.05Z" }), /* @__PURE__ */ M.createElement("path", { d: "M57.02,49.28c-19.55,0-30.91-14.65-37.69-23.41v-1.54c6.67,8.61,18.64,23.95,37.69,23.95,5.87,0,14.11-3.23,18.39-6.23,2.43-1.7,3.84-2.77,4.87-3.55,2.24-1.7,2.7-2.05,7.71-4.44l-.03,1.12c-4.92,2.34-4.91,2.47-7.08,4.12-1.04,.79-2.45,1.86-4.9,3.57-4.4,3.08-12.9,6.41-18.96,6.41Z" })), Di = (o) => /* @__PURE__ */ M.createElement("svg", { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.69", ...o }, /* @__PURE__ */ M.createElement("defs", null, /* @__PURE__ */ M.createElement("style", null, ".cls-1{fill:#231f20;}")), /* @__PURE__ */ M.createElement("rect", { className: "cls-1", x: 46.87, y: 5.79, width: 8.32, height: 67.79, rx: 1 }), /* @__PURE__ */ M.createElement("rect", { className: "cls-1", x: 23.98, y: 17.65, width: 8.32, height: 23.31, rx: 1, transform: "translate(57.44 1.16) rotate(90)" }), /* @__PURE__ */ M.createElement("rect", { className: "cls-1", x: 19.53, y: 25.99, width: 8.32, height: 32.21, rx: 1, transform: "translate(65.79 18.41) rotate(90)" }), /* @__PURE__ */ M.createElement("rect", { className: "cls-1", x: 27.33, y: 60.4, width: 8.32, height: 14.6, rx: 1, transform: "translate(99.19 36.2) rotate(90)" }), /* @__PURE__ */ M.createElement("path", { className: "cls-1", d: "M81,52.74v4.32H64.55V52.74H81m1-2H63.55a1,1,0,0,0-1,1v6.32a1,1,0,0,0,1,1H82a1,1,0,0,0,1-1V51.74a1,1,0,0,0-1-1Z" }), /* @__PURE__ */ M.createElement("path", { className: "cls-1", d: "M90,14.41v4.33H64.55V14.41H90m1-2H63.55a1,1,0,0,0-1,1v6.33a1,1,0,0,0,1,1H91a1,1,0,0,0,1-1V13.41a1,1,0,0,0-1-1Z" }));
function Ni() {
  const { config: o, tempConfig: p } = M.useContext(Lt), c = M.useContext(Ot);
  M.useEffect(() => {
    p && c({ type: "EDITOR_SAVE", payload: p });
  }, []);
  const y = ({ icon: A, label: E, type: d, subType: O = void 0, orientation: Rn = void 0, stacked: w = !1, generalType: En = "data" }) => {
    let b = !1, rn = !1, gn;
    if (d === "map" && o.general) {
      let mn = o.general.geoType;
      b = O === mn;
    }
    d === "chart" && (b = O === o.visualizationType, rn = Rn === o.orientation && w === !0), (d === "dashboard" || d === "data-bite" || d === "markup-include") && (b = !0), d === "chart" && w ? gn = o.type === d && b && o.visualizationSubType === "stacked" ? "active" : "" : d === "chart" && !w && o.visualizationSubType !== "stacked" && (gn = o.type === d && b ? "active" : ""), d !== "chart" && (gn = o.type === d && b && !rn ? "active" : "");
    let dn = () => {
      if (d === o.type)
        O !== o.visualizationType && c({ type: "EDITOR_SET_CONFIG", payload: { ...o, newViz: !0, visualizationType: O } }), c({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      else if (!o.type || window.confirm("Changing visualization type will clear configuration settings. Do you want to continue?")) {
        let qn = {
          newViz: !0,
          datasets: {},
          type: d
        };
        d === "map" ? qn.general = {
          ...qn.general,
          geoType: O,
          type: En
        } : qn.visualizationType = O, d === "chart" && (qn.visualizationSubType = w ? "stacked" : "regular", qn.orientation = Rn), c({ type: "EDITOR_SET_CONFIG", payload: qn }), c({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      }
    };
    return /* @__PURE__ */ i.createElement("button", { className: gn, onClick: () => dn(), "aria-label": E }, A, /* @__PURE__ */ i.createElement("span", { className: "mt-1" }, E));
  };
  return /* @__PURE__ */ i.createElement("div", { className: "choose-vis" }, /* @__PURE__ */ i.createElement("a", { href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/index.html", target: "_blank", rel: "noopener noreferrer", className: "guidance-link", style: { marginTop: 0, marginBottom: "2rem" } }, /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement("p", null, "For more information on the types of data visualizations in the WCMS, including examples and best practices, ", /* @__PURE__ */ i.createElement("u", null, "see the WCMS Features Gallery"), "."))), /* @__PURE__ */ i.createElement("div", { className: "heading-2" }, "General"), /* @__PURE__ */ i.createElement("ul", { className: "grid cove-temp" }, " ", /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, { position: "right" }, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Dashboard", type: "dashboard", icon: /* @__PURE__ */ i.createElement(gi, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Present multiple data visualizations with shared filter controls."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Data Bite", type: "data-bite", icon: /* @__PURE__ */ i.createElement(Hr, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Highlight a single aggregated value (e.g., sum or median)."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Waffle Chart", type: "waffle-chart", subType: "Waffle", icon: /* @__PURE__ */ i.createElement(Br, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Highlight a piece of data in relationship to a data set."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Gauge Chart", type: "waffle-chart", subType: "Gauge", icon: /* @__PURE__ */ i.createElement(bi, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Specify the calculation of a single data point (such as a percentage value) and present it on a horizontal scale.")))), /* @__PURE__ */ i.createElement("div", { className: "heading-2" }, "Charts"), /* @__PURE__ */ i.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, { position: "right" }, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Bar", type: "chart", subType: "Bar", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(Fr, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Use bars to show comparisons between data categories."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Line", type: "chart", subType: "Line", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(Wr, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Present one or more data trends over time."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Pie", type: "chart", subType: "Pie", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(xr, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Present the numerical proportions of a data series."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Paired Bar", type: "chart", subType: "Paired Bar", orientation: "horizontal", icon: /* @__PURE__ */ i.createElement(mi, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Use paired bars to show comparisons between two different data categories."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Deviation Bar", type: "chart", subType: "Deviation Bar", orientation: "horizontal", stacked: !1, icon: /* @__PURE__ */ i.createElement(Di, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Use deviation bars to display how individual values differ from a target."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Horizontal Bar (Stacked)", type: "chart", subType: "Bar", orientation: "horizontal", stacked: !0, icon: /* @__PURE__ */ i.createElement(vi, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Use bars to show comparisons between data categories.")))), /* @__PURE__ */ i.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Box Plot", type: "chart", subType: "Box Plot", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(Si, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Display a box plot"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Scatter Plot", type: "chart", subType: "Scatter Plot", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(hi, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Display a scatter plot"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Area Chart", type: "chart", subType: "Area Chart", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(wi, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Display an area chart"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Forecast Chart", type: "chart", subType: "Forecasting", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(Ai, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Display a forecasting chart"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Forest Plot", type: "chart", subType: "Forest Plot", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(Mi, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Display a forest plot"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "Sankey Diagram", type: "chart", subType: "Sankey", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(Gr, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Display a sankey diagram")))), /* @__PURE__ */ i.createElement("div", { className: "heading-2" }, "Maps"), /* @__PURE__ */ i.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, { position: "right" }, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "United States (State- or County-Level)", type: "map", subType: "us", icon: /* @__PURE__ */ i.createElement(ka, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Present a U.S. choropleth map at state or county level."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, { position: "right" }, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "United States (HHS Regions)", type: "map", subType: "us-region", icon: /* @__PURE__ */ i.createElement(zr, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Present a U.S. choropleth map at state or county level."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "World", type: "map", subType: "world", icon: /* @__PURE__ */ i.createElement(Vr, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Present a choropleth map of the world."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "U.S. State", type: "map", subType: "single-state", icon: /* @__PURE__ */ i.createElement(qr, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "Present a choropleth map of an individual U.S. state."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(en, null, /* @__PURE__ */ i.createElement(en.Target, null, /* @__PURE__ */ i.createElement(y, { label: "U.S. Geocode", type: "map", subType: "us-county", generalType: "us-geocode", icon: /* @__PURE__ */ i.createElement(ka, null) })), /* @__PURE__ */ i.createElement(en.Content, null, "United States GeoCode")))));
}
function Ri({ containerEl: o }) {
  const { config: p, setTempConfig: c, hostname: y, isDebug: A } = M.useContext(Lt);
  let { type: E } = p;
  switch (E) {
    case "map":
      return /* @__PURE__ */ i.createElement(lt, { component: "CdcMap" }, /* @__PURE__ */ i.createElement(Er, { isEditor: !0, isDebug: A, config: p, hostname: y, setConfig: c, containerEl: o }));
    case "waffle-chart":
      if (p.visualizationType === "Waffle" || p.visualizationType === "Gauge")
        return /* @__PURE__ */ i.createElement(lt, { component: "CdcWaffleChart" }, /* @__PURE__ */ i.createElement(Tr, { isEditor: !0, isDebug: A, config: p, setConfig: c }));
      break;
    case "chart":
      return /* @__PURE__ */ i.createElement(lt, { component: "CdcChart" }, /* @__PURE__ */ i.createElement(Rr, { isEditor: !0, isDebug: A, config: p, setConfig: c }));
    case "dashboard":
      return /* @__PURE__ */ i.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ i.createElement(Nr, { isEditor: !0, isDebug: A, config: p }));
    case "data-bite":
      return /* @__PURE__ */ i.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ i.createElement(Dr, { isEditor: !0, isDebug: A, config: p, setConfig: c }));
    case "markup-include":
      return /* @__PURE__ */ i.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ i.createElement(Ar, { isEditor: !0, isDebug: A, config: p, setConfig: c }));
    default:
      return /* @__PURE__ */ i.createElement("p", null, "No visualization type selected.");
  }
}
const hr = (o) => {
  let p = { ...o };
  return p.type === "dashboard" ? (p.datasets && Object.keys(p.datasets).forEach((c) => {
    delete p.datasets[c].formattedData, p.datasets[c].dataUrl && delete p.datasets[c].data;
  }), p.visualizations && Object.keys(p.visualizations).forEach((c) => {
    p.visualizations[c] = ga.omit(p.visualizations[c], ["runtime", "formattedData", "data"]);
  })) : (delete p.runtime, delete p.formattedData, p.dataUrl && delete p.data), p;
}, Ti = (o) => {
  if (o !== null) {
    let p = hr(o);
    const c = JSON.stringify(p), y = new CustomEvent("updateVizConfig", { detail: c, bubbles: !0 });
    window.dispatchEvent(y);
  }
}, Ei = (o) => {
  var p;
  if (o.type === "dashboard") {
    let c = !1, y;
    if (o.data || o.dataUrl) {
      c = !0, y = { ...o };
      const A = o.dataFileName || "dataset-1";
      y.datasets = {}, y.datasets[A] = {
        ...ga.pick(o, ["data", "dataUrl", "dataFileSourceType"]),
        dataFileName: A
      }, Object.keys(y.visualizations).forEach((d) => {
        const O = { dataKey: A, ...ga.pick(y, "dataDescription", "formattedData") };
        y.visualizations[d] = { ...y.visualizations[d], ...O };
      }), y = { ...y, ...{ data: [], dataUrl: "", dataFileName: "", dataFileSourceType: "", dataDescription: [], formattedData: [] } };
    }
    if ((p = o.dashboard) != null && p.filters) {
      c = !0, y = { ...o };
      const A = { ...y.dashboard };
      A.sharedFilters || (A.sharedFilters = []);
      const E = A.filters.map((d) => ({ ...d, key: d.label, showDropdown: !0, usedBy: Object.keys(y.visualizations) }));
      A.sharedFilters = [...A.sharedFilters, ...E], y.dashboard = { ...A, filters: void 0 };
    }
    if (c)
      return y;
  }
  return o;
};
const Pi = (o, p) => {
  switch (p.type) {
    case "EDITOR_SAVE":
      return { ...o, config: p.payload, tempConfig: null };
    case "EDITOR_SET_CONFIG":
      return { ...o, config: p.payload };
    case "EDITOR_TEMP_SAVE":
      return { ...o, tempConfig: p.payload };
    case "EDITOR_SET_ERRORS":
      return { ...o, errors: p.payload };
    case "EDITOR_SET_VIEWPORT":
      return { ...o, currentViewport: p.payload };
    case "EDITOR_SET_GLOBALACTIVE":
      return { ...o, globalActive: p.payload };
    default:
      return o;
  }
}, Ii = Pr(Pi), ki = ({ config: o, hostname: p, containerEl: c, sharepath: y, isDebug: A }) => {
  const E = M.useMemo(() => {
    let rn = 0;
    return (o != null && o.data || o != null && o.dataUrl) && (o != null && o.type) && (rn = 2), { config: Ei(o || { newViz: !0, errors: [], currentViewport: "lg" }), errors: [], currentViewport: "lg", globalActive: rn, sharepath: y, isDebug: A, hostname: p };
  }, [o]);
  M.useEffect(() => {
    var rn;
    Ea && ((rn = Ea) == null || rn.init());
  }, []);
  const [d, O] = M.useReducer(Ii, E), Rn = (rn) => {
    Ti(JSON.parse(JSON.stringify(rn))), O({ type: "EDITOR_TEMP_SAVE", payload: rn });
  }, w = new br((rn) => {
    const gn = rn[0];
    let { width: dn } = gn.contentRect, mn = Mr(dn);
    O({ type: "EDITOR_SET_VIEWPORT", payload: mn });
  }), En = M.useCallback((rn) => {
    rn !== null && w.observe(rn);
  }, []);
  M.useEffect(() => {
    let rn = hr(d.config);
    const gn = JSON.stringify(rn), dn = new CustomEvent("updateVizConfig", { detail: gn });
    window.dispatchEvent(dn);
  }, [d.config]);
  const b = M.useMemo(() => {
    d.config.type !== "dashboard" ? d.config.formattedData : d.config.datasets && Object.keys(d.config.datasets).length > 0;
  }, [d.config.type, d.config.datasets]);
  return /* @__PURE__ */ i.createElement(Ir, null, /* @__PURE__ */ i.createElement(Lt.Provider, { value: { ...d, setTempConfig: Rn } }, /* @__PURE__ */ i.createElement(Ot.Provider, { value: O }, /* @__PURE__ */ i.createElement("div", { className: `cdc-open-viz-module cdc-editor ${d.currentViewport}`, ref: En }, /* @__PURE__ */ i.createElement(Gu, { className: "top-level" }, /* @__PURE__ */ i.createElement(kt, { title: "1. Choose Visualization Type", className: "choose-type" }, /* @__PURE__ */ i.createElement(Ni, null)), /* @__PURE__ */ i.createElement(kt, { title: "2. Import Data", className: "data-designer", disableRule: !d.config.type }, /* @__PURE__ */ i.createElement(fi, null)), /* @__PURE__ */ i.createElement(kt, { title: "3. Configure", className: "configure", disableRule: b }, /* @__PURE__ */ i.createElement(Ri, { containerEl: c })))))), /* @__PURE__ */ i.createElement(kr, null));
}, Li = {
  theme: "theme-blue"
}, Oi = [
  [
    {
      width: 12,
      widget: "table1707840146431"
    },
    {},
    {}
  ]
], Hi = {
  table1707840146431: {
    newViz: !0,
    openModal: !1,
    uid: "table1707840146431",
    table: {
      label: "Data Table",
      show: !0,
      showDownloadUrl: !1,
      showVertical: !0,
      expanded: !0
    },
    type: "table",
    visualizationType: "table",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    columns: {},
    dataFormat: {},
    formattedData: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "6360.1"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7"
      },
      {
        Race: "Non-Hispanic Asian or Pacific Islander",
        "Age-adjusted rate": "202.5"
      },
      {
        Race: "Non-Hispanic White",
        "Age-adjusted rate": "183.6"
      }
    ],
    dataKey: "valid-data-chart.csv",
    data: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "6360.1"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7"
      },
      {
        Race: "Non-Hispanic Asian or Pacific Islander",
        "Age-adjusted rate": "202.5"
      },
      {
        Race: "Non-Hispanic White",
        "Age-adjusted rate": "183.6"
      }
    ]
  }
}, Bi = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, Fi = !0, Wi = {
  "valid-data-chart.csv": {
    data: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "6360.1"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7"
      },
      {
        Race: "Non-Hispanic Asian or Pacific Islander",
        "Age-adjusted rate": "202.5"
      },
      {
        Race: "Non-Hispanic White",
        "Age-adjusted rate": "183.6"
      }
    ],
    dataFileSize: 178,
    dataFileName: "valid-data-chart.csv",
    dataFileSourceType: "file",
    dataFileFormat: "CSV",
    preview: !0
  }
}, xi = [
  {
    Race: "Hispanic or Latino",
    "Age-adjusted rate": "644.2"
  },
  {
    Race: "Non-Hispanic American Indian",
    "Age-adjusted rate": "6360.1"
  },
  {
    Race: "Non-Hispanic Black",
    "Age-adjusted rate": "563.7"
  },
  {
    Race: "Non-Hispanic Asian or Pacific Islander",
    "Age-adjusted rate": "202.5"
  },
  {
    Race: "Non-Hispanic White",
    "Age-adjusted rate": "183.6"
  }
], Gi = "dashboard", Vi = {}, qi = {
  dashboard: Li,
  rows: Oi,
  visualizations: Hi,
  table: Bi,
  newViz: Fi,
  datasets: Wi,
  data: xi,
  type: Gi,
  runtime: Vi
}, Ki = {
  theme: "theme-blue"
}, zi = [
  [
    {
      width: 12
    },
    {},
    {}
  ]
], _i = {}, Xi = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, ji = !0, Yi = {
  "https://data.cdc.gov/resource/vdgb-f9s3.json": {
    data: [
      {
        surveyname: "American Indian Adult Tobacco Survey",
        surveynameabbrev: "AI ATS",
        year: "2007",
        e_cigarettes: "No",
        question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
        responses: "Don't know/Not sure"
      },
      {
        surveyname: "American Indian Adult Tobacco Survey",
        surveynameabbrev: "AI ATS",
        year: "2007",
        e_cigarettes: "No",
        question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
        responses: "Refused"
      },
      {
        surveyname: "American Indian Adult Tobacco Survey",
        surveynameabbrev: "AI ATS",
        year: "2007",
        e_cigarettes: "No",
        question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
        responses: "No"
      }
    ]
  }
}, Ui = [
  {
    surveyname: "American Indian Adult Tobacco Survey",
    surveynameabbrev: "AI ATS",
    year: "2007",
    e_cigarettes: "No",
    question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
    responses: "Don't know/Not sure"
  },
  {
    surveyname: "American Indian Adult Tobacco Survey",
    surveynameabbrev: "AI ATS",
    year: "2007",
    e_cigarettes: "No",
    question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
    responses: "Refused"
  },
  {
    surveyname: "American Indian Adult Tobacco Survey",
    surveynameabbrev: "AI ATS",
    year: "2007",
    e_cigarettes: "No",
    question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
    responses: "No"
  }
], Ji = "dashboard", $i = {
  dashboard: Ki,
  rows: zi,
  visualizations: _i,
  table: Xi,
  newViz: ji,
  datasets: Yi,
  data: Ui,
  type: Ji
}, Zi = {
  theme: "theme-blue",
  sharedFilters: [
    {
      key: "Race",
      type: "datafilter",
      showDropdown: !0,
      columnName: "Race",
      pivot: "Age-adjusted rate",
      values: [
        "Hispanic or Latino",
        "Non-Hispanic American Indian",
        "Non-Hispanic Black",
        "Non-Hispanic Asian or Pacific Islander",
        "Non-Hispanic White"
      ],
      active: "Hispanic or Latino",
      tier: 1
    }
  ]
}, Qi = [
  [
    {
      width: 12,
      widget: "table1707935263149"
    },
    {},
    {}
  ]
], nl = {
  table1707935263149: {
    newViz: !0,
    openModal: !1,
    uid: "table1707935263149",
    type: "table",
    table: {
      label: "Data Table",
      show: !0,
      showDownloadUrl: !1,
      showVertical: !0,
      expanded: !0
    },
    columns: {},
    dataFormat: {},
    visualizationType: "table",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    formattedData: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "636.1"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7"
      },
      {
        Race: "Non-Hispanic Asian or Pacific Islander",
        "Age-adjusted rate": "202.5"
      },
      {
        Race: "Non-Hispanic White",
        "Age-adjusted rate": "183.6"
      }
    ],
    dataKey: "valid-data-chart.csv",
    data: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "636.1"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7"
      },
      {
        Race: "Non-Hispanic Asian or Pacific Islander",
        "Age-adjusted rate": "202.5"
      },
      {
        Race: "Non-Hispanic White",
        "Age-adjusted rate": "183.6"
      }
    ]
  }
}, el = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, tl = !0, ol = {
  "valid-data-chart.csv": {
    data: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "636.1"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7"
      },
      {
        Race: "Non-Hispanic Asian or Pacific Islander",
        "Age-adjusted rate": "202.5"
      },
      {
        Race: "Non-Hispanic White",
        "Age-adjusted rate": "183.6"
      }
    ],
    dataFileSize: 178,
    dataFileName: "valid-data-chart.csv",
    dataFileSourceType: "file",
    dataFileFormat: "CSV",
    preview: !0
  }
}, al = "dashboard", rl = {}, ul = [
  1,
  2,
  3
], il = {
  dashboard: Zi,
  rows: Qi,
  visualizations: nl,
  table: el,
  newViz: tl,
  datasets: ol,
  type: al,
  runtime: rl,
  data: ul
}, Wl = {
  title: "Components/Pages/CdcEditor",
  component: ki
}, Ro = {
  args: {
    config: $i
  }
}, To = {
  args: {
    config: qi
  }
}, Eo = {
  args: {
    config: il
  }
};
var Qa, nr, er;
Ro.parameters = {
  ...Ro.parameters,
  docs: {
    ...(Qa = Ro.parameters) == null ? void 0 : Qa.docs,
    source: {
      originalSource: `{
  args: {
    config: BlankConfig
  }
}`,
      ...(er = (nr = Ro.parameters) == null ? void 0 : nr.docs) == null ? void 0 : er.source
    }
  }
};
var tr, or, ar;
To.parameters = {
  ...To.parameters,
  docs: {
    ...(tr = To.parameters) == null ? void 0 : tr.docs,
    source: {
      originalSource: `{
  args: {
    config: StandAloneTableConfig
  }
}`,
      ...(ar = (or = To.parameters) == null ? void 0 : or.docs) == null ? void 0 : ar.source
    }
  }
};
var rr, ur, ir;
Eo.parameters = {
  ...Eo.parameters,
  docs: {
    ...(rr = Eo.parameters) == null ? void 0 : rr.docs,
    source: {
      originalSource: `{
  args: {
    config: PivotFilterConfig
  }
}`,
      ...(ir = (ur = Eo.parameters) == null ? void 0 : ur.docs) == null ? void 0 : ir.source
    }
  }
};
const xl = ["DefaultEditor", "StandAloneTable", "PivotFilter"];
export {
  Ro as DefaultEditor,
  Eo as PivotFilter,
  To as StandAloneTable,
  xl as __namedExportsOrder,
  Wl as default
};
