import { r as I, R as l } from "./storybook-index-45401197.es.js";
import { i as ca, b as Mo, a as dr, g as fr } from "./storybook-isSolr-6a0136d5.es.js";
import { C as ct, E as kt, z as pr, a as gr, M as mr, b as vr, U as hr, Q as Sr, d as wr, c as Ra, G as Mr, O as br } from "./storybook-CdcDashboard-a4ec665a.es.js";
import { P as Un } from "./storybook-index-43433e35.es.js";
import { S as Ar } from "./storybook-usa-region-graphic-ecaa401d.es.js";
import { a as Dr } from "./storybook-axios-01170075.es.js";
import { D as Nr } from "./storybook-DataTransform-b554456e.es.js";
import { c as Qa } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { u as Rr } from "./storybook-useDebounce-b9224b8d.es.js";
import { f as Ta } from "./storybook-fetchRemoteData-6254352f.es.js";
import { a as Pa, b as Ea, c as Tr, d as Pr, e as Er, f as Ir, g as Lr, h as kr, i as Ia, j as Or, k as Br } from "./storybook-Icon-48ed169f.es.js";
import { D as Hr } from "./storybook-DataDesigner-a81779cb.es.js";
import { T as on } from "./storybook-Tooltip-5f8a49cd.es.js";
import { E as lt } from "./storybook-Loading-f180d060.es.js";
import { _ as Ro } from "./storybook-lodash-c15d8e1c.es.js";
import "./storybook-Filters-353637cd.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-tiny-invariant-9f3340e2.es.js";
import "./storybook-Button-d74e310e.es.js";
import "./storybook-index-e5bf02db.es.js";
import "./storybook-DataTableEditor-e2d92ec0.es.js";
import "./storybook-MultiSelect-6122f1ba.es.js";
import "./storybook-InputSelect-a65afd95.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-DataTable-b33b00b6.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-year-bedc547d.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-12c53202.es.js";
import "./storybook-index-a12b60a7.es.js";
import "./storybook-updateFieldFactory-c006040a.es.js";
import "./storybook-VizFilterEditor-8dacf469.es.js";
import "./storybook-coveUpdateWorker-36d7a51c.es.js";
import "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-string-7df1b381.es.js";
import "./storybook-Card-6750b07b.es.js";
function yt(o, f, y, C) {
  function A(P) {
    return P instanceof y ? P : new y(function(d) {
      d(P);
    });
  }
  return new (y || (y = Promise))(function(P, d) {
    function F(Bn) {
      try {
        M(C.next(Bn));
      } catch (w) {
        d(w);
      }
    }
    function Fn(Bn) {
      try {
        M(C.throw(Bn));
      } catch (w) {
        d(w);
      }
    }
    function M(Bn) {
      Bn.done ? P(Bn.value) : A(Bn.value).then(F, Fn);
    }
    M((C = C.apply(o, f || [])).next());
  });
}
function Ct(o, f) {
  var y = { label: 0, sent: function() {
    if (P[0] & 1)
      throw P[1];
    return P[1];
  }, trys: [], ops: [] }, C, A, P, d;
  return d = { next: F(0), throw: F(1), return: F(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function F(M) {
    return function(Bn) {
      return Fn([M, Bn]);
    };
  }
  function Fn(M) {
    if (C)
      throw new TypeError("Generator is already executing.");
    for (; d && (d = 0, M[0] && (y = 0)), y; )
      try {
        if (C = 1, A && (P = M[0] & 2 ? A.return : M[0] ? A.throw || ((P = A.return) && P.call(A), 0) : A.next) && !(P = P.call(A, M[1])).done)
          return P;
        switch (A = 0, P && (M = [M[0] & 2, P.value]), M[0]) {
          case 0:
          case 1:
            P = M;
            break;
          case 4:
            return y.label++, { value: M[1], done: !1 };
          case 5:
            y.label++, A = M[1], M = [0];
            continue;
          case 7:
            M = y.ops.pop(), y.trys.pop();
            continue;
          default:
            if (P = y.trys, !(P = P.length > 0 && P[P.length - 1]) && (M[0] === 6 || M[0] === 2)) {
              y = 0;
              continue;
            }
            if (M[0] === 3 && (!P || M[1] > P[0] && M[1] < P[3])) {
              y.label = M[1];
              break;
            }
            if (M[0] === 6 && y.label < P[1]) {
              y.label = P[1], P = M;
              break;
            }
            if (P && y.label < P[2]) {
              y.label = P[2], y.ops.push(M);
              break;
            }
            P[2] && y.ops.pop(), y.trys.pop();
            continue;
        }
        M = f.call(o, y);
      } catch (Bn) {
        M = [6, Bn], A = 0;
      } finally {
        C = P = 0;
      }
    if (M[0] & 5)
      throw M[1];
    return { value: M[0] ? M[1] : void 0, done: !0 };
  }
}
function Fr(o, f) {
  var y = typeof Symbol == "function" && o[Symbol.iterator];
  if (!y)
    return o;
  var C = y.call(o), A, P = [], d;
  try {
    for (; (f === void 0 || f-- > 0) && !(A = C.next()).done; )
      P.push(A.value);
  } catch (F) {
    d = { error: F };
  } finally {
    try {
      A && !A.done && (y = C.return) && y.call(C);
    } finally {
      if (d)
        throw d.error;
    }
  }
  return P;
}
function Wr() {
  for (var o = [], f = 0; f < arguments.length; f++)
    o = o.concat(Fr(arguments[f]));
  return o;
}
var Gr = /* @__PURE__ */ new Map([
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
function Ot(o, f) {
  var y = xr(o);
  if (typeof y.path != "string") {
    var C = o.webkitRelativePath;
    Object.defineProperty(y, "path", {
      value: typeof f == "string" ? f : typeof C == "string" && C.length > 0 ? C : o.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return y;
}
function xr(o) {
  var f = o.name, y = f && f.lastIndexOf(".") !== -1;
  if (y && !o.type) {
    var C = f.split(".").pop().toLowerCase(), A = Gr.get(C);
    A && Object.defineProperty(o, "type", {
      value: A,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return o;
}
var Vr = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function Kr(o) {
  return yt(this, void 0, void 0, function() {
    return Ct(this, function(f) {
      return To(o) && qr(o) ? [2, Yr(o.dataTransfer, o.type)] : zr(o) ? [2, _r(o)] : Array.isArray(o) && o.every(function(y) {
        return "getFile" in y && typeof y.getFile == "function";
      }) ? [2, Xr(o)] : [2, []];
    });
  });
}
function qr(o) {
  return To(o.dataTransfer);
}
function zr(o) {
  return To(o) && To(o.target);
}
function To(o) {
  return typeof o == "object" && o !== null;
}
function _r(o) {
  return pa(o.target.files).map(function(f) {
    return Ot(f);
  });
}
function Xr(o) {
  return yt(this, void 0, void 0, function() {
    var f;
    return Ct(this, function(y) {
      switch (y.label) {
        case 0:
          return [4, Promise.all(o.map(function(C) {
            return C.getFile();
          }))];
        case 1:
          return f = y.sent(), [2, f.map(function(C) {
            return Ot(C);
          })];
      }
    });
  });
}
function Yr(o, f) {
  return yt(this, void 0, void 0, function() {
    var y, C;
    return Ct(this, function(A) {
      switch (A.label) {
        case 0:
          return o === null ? [2, []] : o.items ? (y = pa(o.items).filter(function(P) {
            return P.kind === "file";
          }), f !== "drop" ? [2, y] : [4, Promise.all(y.map(jr))]) : [3, 2];
        case 1:
          return C = A.sent(), [2, La(nr(C))];
        case 2:
          return [2, La(pa(o.files).map(function(P) {
            return Ot(P);
          }))];
      }
    });
  });
}
function La(o) {
  return o.filter(function(f) {
    return Vr.indexOf(f.name) === -1;
  });
}
function pa(o) {
  if (o === null)
    return [];
  for (var f = [], y = 0; y < o.length; y++) {
    var C = o[y];
    f.push(C);
  }
  return f;
}
function jr(o) {
  if (typeof o.webkitGetAsEntry != "function")
    return ka(o);
  var f = o.webkitGetAsEntry();
  return f && f.isDirectory ? er(f) : ka(o);
}
function nr(o) {
  return o.reduce(function(f, y) {
    return Wr(f, Array.isArray(y) ? nr(y) : [y]);
  }, []);
}
function ka(o) {
  var f = o.getAsFile();
  if (!f)
    return Promise.reject(o + " is not a File");
  var y = Ot(f);
  return Promise.resolve(y);
}
function Ur(o) {
  return yt(this, void 0, void 0, function() {
    return Ct(this, function(f) {
      return [2, o.isDirectory ? er(o) : Jr(o)];
    });
  });
}
function er(o) {
  var f = o.createReader();
  return new Promise(function(y, C) {
    var A = [];
    function P() {
      var d = this;
      f.readEntries(function(F) {
        return yt(d, void 0, void 0, function() {
          var Fn, M, Bn;
          return Ct(this, function(w) {
            switch (w.label) {
              case 0:
                if (F.length)
                  return [3, 5];
                w.label = 1;
              case 1:
                return w.trys.push([1, 3, , 4]), [4, Promise.all(A)];
              case 2:
                return Fn = w.sent(), y(Fn), [3, 4];
              case 3:
                return M = w.sent(), C(M), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                Bn = Promise.all(F.map(Ur)), A.push(Bn), P(), w.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(F) {
        C(F);
      });
    }
    P();
  });
}
function Jr(o) {
  return yt(this, void 0, void 0, function() {
    return Ct(this, function(f) {
      return [2, new Promise(function(y, C) {
        o.file(function(A) {
          var P = Ot(A, o.fullPath);
          y(P);
        }, function(A) {
          C(A);
        });
      })];
    });
  });
}
var $r = function(o, f) {
  if (o && f) {
    var y = Array.isArray(f) ? f : f.split(","), C = o.name || "", A = (o.type || "").toLowerCase(), P = A.replace(/\/.*$/, "");
    return y.some(function(d) {
      var F = d.trim().toLowerCase();
      return F.charAt(0) === "." ? C.toLowerCase().endsWith(F) : F.endsWith("/*") ? P === F.replace(/\/.*$/, "") : A === F;
    });
  }
  return !0;
};
function Oa(o, f) {
  var y = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var C = Object.getOwnPropertySymbols(o);
    f && (C = C.filter(function(A) {
      return Object.getOwnPropertyDescriptor(o, A).enumerable;
    })), y.push.apply(y, C);
  }
  return y;
}
function Ba(o) {
  for (var f = 1; f < arguments.length; f++) {
    var y = arguments[f] != null ? arguments[f] : {};
    f % 2 ? Oa(Object(y), !0).forEach(function(C) {
      tr(o, C, y[C]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(y)) : Oa(Object(y)).forEach(function(C) {
      Object.defineProperty(o, C, Object.getOwnPropertyDescriptor(y, C));
    });
  }
  return o;
}
function tr(o, f, y) {
  return f in o ? Object.defineProperty(o, f, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : o[f] = y, o;
}
function Ha(o, f) {
  return eu(o) || nu(o, f) || Qr(o, f) || Zr();
}
function Zr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qr(o, f) {
  if (o) {
    if (typeof o == "string")
      return Fa(o, f);
    var y = Object.prototype.toString.call(o).slice(8, -1);
    if (y === "Object" && o.constructor && (y = o.constructor.name), y === "Map" || y === "Set")
      return Array.from(o);
    if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))
      return Fa(o, f);
  }
}
function Fa(o, f) {
  (f == null || f > o.length) && (f = o.length);
  for (var y = 0, C = new Array(f); y < f; y++)
    C[y] = o[y];
  return C;
}
function nu(o, f) {
  var y = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (y != null) {
    var C = [], A = !0, P = !1, d, F;
    try {
      for (y = y.call(o); !(A = (d = y.next()).done) && (C.push(d.value), !(f && C.length === f)); A = !0)
        ;
    } catch (Fn) {
      P = !0, F = Fn;
    } finally {
      try {
        !A && y.return != null && y.return();
      } finally {
        if (P)
          throw F;
      }
    }
    return C;
  }
}
function eu(o) {
  if (Array.isArray(o))
    return o;
}
var tu = "file-invalid-type", ou = "file-too-large", au = "file-too-small", ru = "too-many-files", uu = function(f) {
  f = Array.isArray(f) && f.length === 1 ? f[0] : f;
  var y = Array.isArray(f) ? "one of ".concat(f.join(", ")) : f;
  return {
    code: tu,
    message: "File type must be ".concat(y)
  };
}, Wa = function(f) {
  return {
    code: ou,
    message: "File is larger than ".concat(f, " ").concat(f === 1 ? "byte" : "bytes")
  };
}, Ga = function(f) {
  return {
    code: au,
    message: "File is smaller than ".concat(f, " ").concat(f === 1 ? "byte" : "bytes")
  };
}, iu = {
  code: ru,
  message: "Too many files"
};
function or(o, f) {
  var y = o.type === "application/x-moz-file" || $r(o, f);
  return [y, y ? null : uu(f)];
}
function ar(o, f, y) {
  if (Et(o.size))
    if (Et(f) && Et(y)) {
      if (o.size > y)
        return [!1, Wa(y)];
      if (o.size < f)
        return [!1, Ga(f)];
    } else {
      if (Et(f) && o.size < f)
        return [!1, Ga(f)];
      if (Et(y) && o.size > y)
        return [!1, Wa(y)];
    }
  return [!0, null];
}
function Et(o) {
  return o != null;
}
function lu(o) {
  var f = o.files, y = o.accept, C = o.minSize, A = o.maxSize, P = o.multiple, d = o.maxFiles;
  return !P && f.length > 1 || P && d >= 1 && f.length > d ? !1 : f.every(function(F) {
    var Fn = or(F, y), M = Ha(Fn, 1), Bn = M[0], w = ar(F, C, A), yn = Ha(w, 1), Nn = yn[0];
    return Bn && Nn;
  });
}
function Po(o) {
  return typeof o.isPropagationStopped == "function" ? o.isPropagationStopped() : typeof o.cancelBubble < "u" ? o.cancelBubble : !1;
}
function bo(o) {
  return o.dataTransfer ? Array.prototype.some.call(o.dataTransfer.types, function(f) {
    return f === "Files" || f === "application/x-moz-file";
  }) : !!o.target && !!o.target.files;
}
function xa(o) {
  o.preventDefault();
}
function su(o) {
  return o.indexOf("MSIE") !== -1 || o.indexOf("Trident/") !== -1;
}
function cu(o) {
  return o.indexOf("Edge/") !== -1;
}
function yu() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return su(o) || cu(o);
}
function ke() {
  for (var o = arguments.length, f = new Array(o), y = 0; y < o; y++)
    f[y] = arguments[y];
  return function(C) {
    for (var A = arguments.length, P = new Array(A > 1 ? A - 1 : 0), d = 1; d < A; d++)
      P[d - 1] = arguments[d];
    return f.some(function(F) {
      return !Po(C) && F && F.apply(void 0, [C].concat(P)), Po(C);
    });
  };
}
function Va() {
  return "showOpenFilePicker" in window;
}
function Cu(o) {
  return o = typeof o == "string" ? o.split(",") : o, [{
    description: "everything",
    // TODO: Need to handle filtering more elegantly than this!
    accept: Array.isArray(o) ? o.filter(function(f) {
      return f === "audio/*" || f === "video/*" || f === "image/*" || f === "text/*" || /\w+\/[-+.\w]+/g.test(f);
    }).reduce(function(f, y) {
      return Ba(Ba({}, f), {}, tr({}, y, []));
    }, {}) : {}
  }];
}
var du = ["children"], fu = ["open"], pu = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], gu = ["refKey", "onChange", "onClick"];
function mu(o) {
  return Su(o) || hu(o) || rr(o) || vu();
}
function vu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hu(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null)
    return Array.from(o);
}
function Su(o) {
  if (Array.isArray(o))
    return ga(o);
}
function ya(o, f) {
  return bu(o) || Mu(o, f) || rr(o, f) || wu();
}
function wu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rr(o, f) {
  if (o) {
    if (typeof o == "string")
      return ga(o, f);
    var y = Object.prototype.toString.call(o).slice(8, -1);
    if (y === "Object" && o.constructor && (y = o.constructor.name), y === "Map" || y === "Set")
      return Array.from(o);
    if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))
      return ga(o, f);
  }
}
function ga(o, f) {
  (f == null || f > o.length) && (f = o.length);
  for (var y = 0, C = new Array(f); y < f; y++)
    C[y] = o[y];
  return C;
}
function Mu(o, f) {
  var y = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (y != null) {
    var C = [], A = !0, P = !1, d, F;
    try {
      for (y = y.call(o); !(A = (d = y.next()).done) && (C.push(d.value), !(f && C.length === f)); A = !0)
        ;
    } catch (Fn) {
      P = !0, F = Fn;
    } finally {
      try {
        !A && y.return != null && y.return();
      } finally {
        if (P)
          throw F;
      }
    }
    return C;
  }
}
function bu(o) {
  if (Array.isArray(o))
    return o;
}
function Ka(o, f) {
  var y = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var C = Object.getOwnPropertySymbols(o);
    f && (C = C.filter(function(A) {
      return Object.getOwnPropertyDescriptor(o, A).enumerable;
    })), y.push.apply(y, C);
  }
  return y;
}
function $n(o) {
  for (var f = 1; f < arguments.length; f++) {
    var y = arguments[f] != null ? arguments[f] : {};
    f % 2 ? Ka(Object(y), !0).forEach(function(C) {
      ma(o, C, y[C]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(y)) : Ka(Object(y)).forEach(function(C) {
      Object.defineProperty(o, C, Object.getOwnPropertyDescriptor(y, C));
    });
  }
  return o;
}
function ma(o, f, y) {
  return f in o ? Object.defineProperty(o, f, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : o[f] = y, o;
}
function Eo(o, f) {
  if (o == null)
    return {};
  var y = Au(o, f), C, A;
  if (Object.getOwnPropertySymbols) {
    var P = Object.getOwnPropertySymbols(o);
    for (A = 0; A < P.length; A++)
      C = P[A], !(f.indexOf(C) >= 0) && Object.prototype.propertyIsEnumerable.call(o, C) && (y[C] = o[C]);
  }
  return y;
}
function Au(o, f) {
  if (o == null)
    return {};
  var y = {}, C = Object.keys(o), A, P;
  for (P = 0; P < C.length; P++)
    A = C[P], !(f.indexOf(A) >= 0) && (y[A] = o[A]);
  return y;
}
var Ma = /* @__PURE__ */ I.forwardRef(function(o, f) {
  var y = o.children, C = Eo(o, du), A = ha(C), P = A.open, d = Eo(A, fu);
  return I.useImperativeHandle(f, function() {
    return {
      open: P
    };
  }, [P]), /* @__PURE__ */ l.createElement(I.Fragment, null, y($n($n({}, d), {}, {
    open: P
  })));
});
Ma.displayName = "Dropzone";
var ur = {
  disabled: !1,
  getFilesFromEvent: Kr,
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
Ma.defaultProps = ur;
Ma.propTypes = {
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
  children: Un.func,
  /**
   * Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: Un.oneOfType([Un.string, Un.arrayOf(Un.string)]),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: Un.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: Un.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: Un.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: Un.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: Un.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: Un.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: Un.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: Un.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: Un.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: Un.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: Un.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: Un.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: Un.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: Un.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: Un.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: Un.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: Un.func,
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
  onDrop: Un.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: Un.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: Un.func,
  /**
   * Custom validation function
   * @param {File} file
   * @returns {FileError|FileError[]}
   */
  validator: Un.func
};
var va = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function ha() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, f = $n($n({}, ur), o), y = f.accept, C = f.disabled, A = f.getFilesFromEvent, P = f.maxSize, d = f.minSize, F = f.multiple, Fn = f.maxFiles, M = f.onDragEnter, Bn = f.onDragLeave, w = f.onDragOver, yn = f.onDrop, Nn = f.onDropAccepted, cn = f.onDropRejected, Mn = f.onFileDialogCancel, qn = f.onFileDialogOpen, Rn = f.useFsAccessApi, Kn = f.preventDropOnDocument, In = f.noClick, Zn = f.noKeyboard, xn = f.noDrag, An = f.noDragEventsBubbling, ie = f.validator, _n = I.useMemo(function() {
    return typeof qn == "function" ? qn : qa;
  }, [qn]), Me = I.useMemo(function() {
    return typeof Mn == "function" ? Mn : qa;
  }, [Mn]), Cn = I.useRef(null), Dn = I.useRef(null), ye = I.useReducer(Du, va), he = ya(ye, 2), Jn = he[0], ee = he[1], Pe = Jn.isFocused, Ne = Jn.isFileDialogActive, be = Jn.draggedFiles, Ee = function() {
    Ne && setTimeout(function() {
      if (Dn.current) {
        var Tn = Dn.current.files;
        Tn.length || (ee({
          type: "closeDialog"
        }), Me());
      }
    }, 300);
  };
  I.useEffect(function() {
    return Rn && Va() ? function() {
    } : (window.addEventListener("focus", Ee, !1), function() {
      window.removeEventListener("focus", Ee, !1);
    });
  }, [Dn, Ne, Me, Rn]);
  var Ce = I.useRef([]), pe = function(Tn) {
    Cn.current && Cn.current.contains(Tn.target) || (Tn.preventDefault(), Ce.current = []);
  };
  I.useEffect(function() {
    return Kn && (document.addEventListener("dragover", xa, !1), document.addEventListener("drop", pe, !1)), function() {
      Kn && (document.removeEventListener("dragover", xa), document.removeEventListener("drop", pe));
    };
  }, [Cn, Kn]);
  var te = I.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Ie(Q), Ce.current = [].concat(mu(Ce.current), [Q.target]), bo(Q) && Promise.resolve(A(Q)).then(function(Tn) {
      Po(Q) && !An || (ee({
        draggedFiles: Tn,
        isDragActive: !0,
        type: "setDraggedFiles"
      }), M && M(Q));
    });
  }, [A, M, An]), Oe = I.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Ie(Q);
    var Tn = bo(Q);
    if (Tn && Q.dataTransfer)
      try {
        Q.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Tn && w && w(Q), !1;
  }, [w, An]), Be = I.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Ie(Q);
    var Tn = Ce.current.filter(function(ae) {
      return Cn.current && Cn.current.contains(ae);
    }), Qn = Tn.indexOf(Q.target);
    Qn !== -1 && Tn.splice(Qn, 1), Ce.current = Tn, !(Tn.length > 0) && (ee({
      isDragActive: !1,
      type: "setDraggedFiles",
      draggedFiles: []
    }), bo(Q) && Bn && Bn(Q));
  }, [Cn, Bn, An]), B = I.useCallback(function(Q, Tn) {
    var Qn = [], ae = [];
    Q.forEach(function(fe) {
      var He = or(fe, y), Te = ya(He, 2), Ye = Te[0], je = Te[1], Ue = ar(fe, d, P), We = ya(Ue, 2), Je = We[0], Ge = We[1], xe = ie ? ie(fe) : null;
      if (Ye && Je && !xe)
        Qn.push(fe);
      else {
        var Fe = [je, Ge];
        xe && (Fe = Fe.concat(xe)), ae.push({
          file: fe,
          errors: Fe.filter(function(at) {
            return at;
          })
        });
      }
    }), (!F && Qn.length > 1 || F && Fn >= 1 && Qn.length > Fn) && (Qn.forEach(function(fe) {
      ae.push({
        file: fe,
        errors: [iu]
      });
    }), Qn.splice(0)), ee({
      acceptedFiles: Qn,
      fileRejections: ae,
      type: "setFiles"
    }), yn && yn(Qn, ae, Tn), ae.length > 0 && cn && cn(ae, Tn), Qn.length > 0 && Nn && Nn(Qn, Tn);
  }, [ee, F, y, d, P, Fn, yn, Nn, cn, ie]), z = I.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Ie(Q), Ce.current = [], bo(Q) && Promise.resolve(A(Q)).then(function(Tn) {
      Po(Q) && !An || B(Tn, Q);
    }), ee({
      type: "reset"
    });
  }, [A, B, An]), an = I.useCallback(function() {
    if (Rn && Va()) {
      ee({
        type: "openDialog"
      }), _n();
      var Q = {
        multiple: F,
        types: Cu(y)
      };
      window.showOpenFilePicker(Q).then(function(Tn) {
        return A(Tn);
      }).then(function(Tn) {
        return B(Tn, null);
      }).catch(function(Tn) {
        return Me(Tn);
      }).finally(function() {
        return ee({
          type: "closeDialog"
        });
      });
      return;
    }
    Dn.current && (ee({
      type: "openDialog"
    }), _n(), Dn.current.value = null, Dn.current.click());
  }, [ee, _n, Me, Rn, B, y, F]), en = I.useCallback(function(Q) {
    !Cn.current || !Cn.current.isEqualNode(Q.target) || (Q.keyCode === 32 || Q.keyCode === 13) && (Q.preventDefault(), an());
  }, [Cn, Dn, an]), Wn = I.useCallback(function() {
    ee({
      type: "focus"
    });
  }, []), Xn = I.useCallback(function() {
    ee({
      type: "blur"
    });
  }, []), Se = I.useCallback(function() {
    In || (yu() ? setTimeout(an, 0) : an());
  }, [Dn, In, an]), Re = function(Tn) {
    return C ? null : Tn;
  }, Ae = function(Tn) {
    return Zn ? null : Re(Tn);
  }, De = function(Tn) {
    return xn ? null : Re(Tn);
  }, Ie = function(Tn) {
    An && Tn.stopPropagation();
  }, _e = I.useMemo(function() {
    return function() {
      var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, Tn = Q.refKey, Qn = Tn === void 0 ? "ref" : Tn, ae = Q.role, fe = Q.onKeyDown, He = Q.onFocus, Te = Q.onBlur, Ye = Q.onClick, je = Q.onDragEnter, Ue = Q.onDragOver, We = Q.onDragLeave, Je = Q.onDrop, Ge = Eo(Q, pu);
      return $n($n(ma({
        onKeyDown: Ae(ke(fe, en)),
        onFocus: Ae(ke(He, Wn)),
        onBlur: Ae(ke(Te, Xn)),
        onClick: Re(ke(Ye, Se)),
        onDragEnter: De(ke(je, te)),
        onDragOver: De(ke(Ue, Oe)),
        onDragLeave: De(ke(We, Be)),
        onDrop: De(ke(Je, z)),
        role: typeof ae == "string" && ae !== "" ? ae : "button"
      }, Qn, Cn), !C && !Zn ? {
        tabIndex: 0
      } : {}), Ge);
    };
  }, [Cn, en, Wn, Xn, Se, te, Oe, Be, z, Zn, xn, C]), de = I.useCallback(function(Q) {
    Q.stopPropagation();
  }, []), se = I.useMemo(function() {
    return function() {
      var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, Tn = Q.refKey, Qn = Tn === void 0 ? "ref" : Tn, ae = Q.onChange, fe = Q.onClick, He = Eo(Q, gu), Te = ma({
        accept: y,
        multiple: F,
        type: "file",
        style: {
          display: "none"
        },
        onChange: Re(ke(ae, z)),
        onClick: Re(ke(fe, de)),
        autoComplete: "off",
        tabIndex: -1
      }, Qn, Dn);
      return $n($n({}, Te), He);
    };
  }, [Dn, y, F, z, C]), ge = be.length, me = ge > 0 && lu({
    files: be,
    accept: y,
    minSize: d,
    maxSize: P,
    multiple: F,
    maxFiles: Fn
  }), Xe = ge > 0 && !me;
  return $n($n({}, Jn), {}, {
    isDragAccept: me,
    isDragReject: Xe,
    isFocused: Pe && !C,
    getRootProps: _e,
    getInputProps: se,
    rootRef: Cn,
    inputRef: Dn,
    open: Re(an)
  });
}
function Du(o, f) {
  switch (f.type) {
    case "focus":
      return $n($n({}, o), {}, {
        isFocused: !0
      });
    case "blur":
      return $n($n({}, o), {}, {
        isFocused: !1
      });
    case "openDialog":
      return $n($n({}, va), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return $n($n({}, o), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      var y = f.isDragActive, C = f.draggedFiles;
      return $n($n({}, o), {}, {
        draggedFiles: C,
        isDragActive: y
      });
    case "setFiles":
      return $n($n({}, o), {}, {
        acceptedFiles: f.acceptedFiles,
        fileRejections: f.fileRejections
      });
    case "reset":
      return $n({}, va);
    default:
      return o;
  }
}
function qa() {
}
var za = {}, Ca = {}, da = 34, It = 10, fa = 13;
function ir(o) {
  return new Function("d", "return {" + o.map(function(f, y) {
    return JSON.stringify(f) + ": d[" + y + '] || ""';
  }).join(",") + "}");
}
function Nu(o, f) {
  var y = ir(o);
  return function(C, A) {
    return f(y(C), A, o);
  };
}
function _a(o) {
  var f = /* @__PURE__ */ Object.create(null), y = [];
  return o.forEach(function(C) {
    for (var A in C)
      A in f || y.push(f[A] = A);
  }), y;
}
function we(o, f) {
  var y = o + "", C = y.length;
  return C < f ? new Array(f - C + 1).join(0) + y : y;
}
function Ru(o) {
  return o < 0 ? "-" + we(-o, 6) : o > 9999 ? "+" + we(o, 6) : we(o, 4);
}
function Tu(o) {
  var f = o.getUTCHours(), y = o.getUTCMinutes(), C = o.getUTCSeconds(), A = o.getUTCMilliseconds();
  return isNaN(o) ? "Invalid Date" : Ru(o.getUTCFullYear()) + "-" + we(o.getUTCMonth() + 1, 2) + "-" + we(o.getUTCDate(), 2) + (A ? "T" + we(f, 2) + ":" + we(y, 2) + ":" + we(C, 2) + "." + we(A, 3) + "Z" : C ? "T" + we(f, 2) + ":" + we(y, 2) + ":" + we(C, 2) + "Z" : y || f ? "T" + we(f, 2) + ":" + we(y, 2) + "Z" : "");
}
function Pu(o) {
  var f = new RegExp('["' + o + `
\r]`), y = o.charCodeAt(0);
  function C(w, yn) {
    var Nn, cn, Mn = A(w, function(qn, Rn) {
      if (Nn)
        return Nn(qn, Rn - 1);
      cn = qn, Nn = yn ? Nu(qn, yn) : ir(qn);
    });
    return Mn.columns = cn || [], Mn;
  }
  function A(w, yn) {
    var Nn = [], cn = w.length, Mn = 0, qn = 0, Rn, Kn = cn <= 0, In = !1;
    w.charCodeAt(cn - 1) === It && --cn, w.charCodeAt(cn - 1) === fa && --cn;
    function Zn() {
      if (Kn)
        return Ca;
      if (In)
        return In = !1, za;
      var An, ie = Mn, _n;
      if (w.charCodeAt(ie) === da) {
        for (; Mn++ < cn && w.charCodeAt(Mn) !== da || w.charCodeAt(++Mn) === da; )
          ;
        return (An = Mn) >= cn ? Kn = !0 : (_n = w.charCodeAt(Mn++)) === It ? In = !0 : _n === fa && (In = !0, w.charCodeAt(Mn) === It && ++Mn), w.slice(ie + 1, An - 1).replace(/""/g, '"');
      }
      for (; Mn < cn; ) {
        if ((_n = w.charCodeAt(An = Mn++)) === It)
          In = !0;
        else if (_n === fa)
          In = !0, w.charCodeAt(Mn) === It && ++Mn;
        else if (_n !== y)
          continue;
        return w.slice(ie, An);
      }
      return Kn = !0, w.slice(ie, cn);
    }
    for (; (Rn = Zn()) !== Ca; ) {
      for (var xn = []; Rn !== za && Rn !== Ca; )
        xn.push(Rn), Rn = Zn();
      yn && (xn = yn(xn, qn++)) == null || Nn.push(xn);
    }
    return Nn;
  }
  function P(w, yn) {
    return w.map(function(Nn) {
      return yn.map(function(cn) {
        return Bn(Nn[cn]);
      }).join(o);
    });
  }
  function d(w, yn) {
    return yn == null && (yn = _a(w)), [yn.map(Bn).join(o)].concat(P(w, yn)).join(`
`);
  }
  function F(w, yn) {
    return yn == null && (yn = _a(w)), P(w, yn).join(`
`);
  }
  function Fn(w) {
    return w.map(M).join(`
`);
  }
  function M(w) {
    return w.map(Bn).join(o);
  }
  function Bn(w) {
    return w == null ? "" : w instanceof Date ? Tu(w) : f.test(w += "") ? '"' + w.replace(/"/g, '""') + '"' : w;
  }
  return {
    parse: C,
    parseRows: A,
    format: d,
    formatBody: F,
    formatRows: Fn,
    formatRow: M,
    formatValue: Bn
  };
}
var Eu = Pu(","), Iu = Eu.parse;
const Lt = ({ children: o, className: f = "" }) => /* @__PURE__ */ l.createElement("div", { className: `tab-content ${f}` }, o), Lu = (o) => {
  const { globalActive: f } = I.useContext(ct), y = I.useContext(kt), C = (A) => {
    y({ type: "EDITOR_SET_GLOBALACTIVE", payload: A });
  };
  return /* @__PURE__ */ l.createElement(lr, { ...o, setActiveTab: C, activeTab: f });
}, ku = ({ children: o, className: f = void 0, startingTab: y }) => {
  const [C, A] = I.useState(y);
  return /* @__PURE__ */ l.createElement(lr, { className: f, setActiveTab: A, activeTab: C }, o);
}, lr = ({ children: o, className: f, activeTab: y, setActiveTab: C }) => {
  const A = (F, Fn) => {
    F || C(Fn);
  };
  let P = "tabs";
  f && (P = `tabs ${f}`);
  const d = o.map(({ props: F }, Fn) => {
    let M = "nav-item", Bn = F.disableRule || !1;
    return Bn && (M += " disabled"), Fn === y && (M += " active"), /* @__PURE__ */ l.createElement("li", { onClick: () => A(Bn, Fn), key: F.title, className: M }, F.icon, F.title);
  });
  return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("nav", { className: P }, /* @__PURE__ */ l.createElement("ul", { className: "nav nav-fill" }, d)), o[y]);
};
var Sa = { exports: {} }, Ao = { exports: {} }, Xa;
function Ou() {
  return Xa || (Xa = 1, function(o, f) {
    (function(y, C) {
      C(f, I);
    })(Qa, function(y, C) {
      function A(n, r, i, s, v, g, h) {
        try {
          var D = n[g](h), R = D.value;
        } catch (T) {
          return void i(T);
        }
        D.done ? r(R) : Promise.resolve(R).then(s, v);
      }
      function P(n) {
        return function() {
          var r = this, i = arguments;
          return new Promise(function(s, v) {
            var g = n.apply(r, i);
            function h(R) {
              A(g, s, v, h, D, "next", R);
            }
            function D(R) {
              A(g, s, v, h, D, "throw", R);
            }
            h(void 0);
          });
        };
      }
      function d() {
        return (d = Object.assign || function(n) {
          for (var r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            for (var s in i)
              Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
          }
          return n;
        }).apply(this, arguments);
      }
      function F(n, r) {
        if (n == null)
          return {};
        var i, s, v = {}, g = Object.keys(n);
        for (s = 0; s < g.length; s++)
          i = g[s], r.indexOf(i) >= 0 || (v[i] = n[i]);
        return v;
      }
      function Fn(n) {
        var r = function(i, s) {
          if (typeof i != "object" || i === null)
            return i;
          var v = i[Symbol.toPrimitive];
          if (v !== void 0) {
            var g = v.call(i, s || "default");
            if (typeof g != "object")
              return g;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (s === "string" ? String : Number)(i);
        }(n, "string");
        return typeof r == "symbol" ? r : String(r);
      }
      C = C && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
      var M = { init: "init" }, Bn = function(n) {
        var r = n.value;
        return r === void 0 ? "" : r;
      }, w = function() {
        return C.createElement(C.Fragment, null, " ");
      }, yn = { Cell: Bn, width: 150, minWidth: 0, maxWidth: Number.MAX_SAFE_INTEGER };
      function Nn() {
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        return r.reduce(function(s, v) {
          var g = v.style, h = v.className;
          return s = d({}, s, {}, F(v, ["style", "className"])), g && (s.style = s.style ? d({}, s.style || {}, {}, g || {}) : g), h && (s.className = s.className ? s.className + " " + h : h), s.className === "" && delete s.className, s;
        }, {});
      }
      var cn = function(n, r) {
        return r === void 0 && (r = {}), function(i) {
          return i === void 0 && (i = {}), [].concat(n, [i]).reduce(function(s, v) {
            return function g(h, D, R) {
              return typeof D == "function" ? g({}, D(h, R)) : Array.isArray(D) ? Nn.apply(void 0, [h].concat(D)) : Nn(h, D);
            }(s, v, d({}, r, { userProps: i }));
          }, {});
        };
      }, Mn = function(n, r, i, s) {
        return i === void 0 && (i = {}), n.reduce(function(v, g) {
          return g(v, i);
        }, r);
      }, qn = function(n, r, i) {
        return i === void 0 && (i = {}), n.forEach(function(s) {
          s(r, i);
        });
      };
      function Rn(n, r, i, s) {
        n.findIndex(function(v) {
          return v.pluginName === i;
        }), r.forEach(function(v) {
          n.findIndex(function(g) {
            return g.pluginName === v;
          });
        });
      }
      function Kn(n, r) {
        return typeof n == "function" ? n(r) : n;
      }
      function In(n) {
        var r = C.useRef();
        return r.current = n, C.useCallback(function() {
          return r.current;
        }, []);
      }
      var Zn = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
      function xn(n, r) {
        var i = C.useRef(!1);
        Zn(function() {
          i.current && n(), i.current = !0;
        }, r);
      }
      function An(n, r, i) {
        return i === void 0 && (i = {}), function(s, v) {
          v === void 0 && (v = {});
          var g = typeof s == "string" ? r[s] : s;
          if (g === void 0)
            throw console.info(r), new Error("Renderer Error ☝️");
          return ie(g, d({}, n, { column: r }, i, {}, v));
        };
      }
      function ie(n, r) {
        return function(s) {
          return typeof s == "function" && (v = Object.getPrototypeOf(s)).prototype && v.prototype.isReactComponent;
          var v;
        }(i = n) || typeof i == "function" || function(s) {
          return typeof s == "object" && typeof s.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(s.$$typeof.description);
        }(i) ? C.createElement(n, r) : n;
        var i;
      }
      function _n(n, r, i) {
        return i === void 0 && (i = 0), n.map(function(s) {
          return Cn(s = d({}, s, { parent: r, depth: i })), s.columns && (s.columns = _n(s.columns, s, i + 1)), s;
        });
      }
      function Me(n) {
        return Pe(n, "columns");
      }
      function Cn(n) {
        var r = n.id, i = n.accessor, s = n.Header;
        if (typeof i == "string") {
          r = r || i;
          var v = i.split(".");
          i = function(g) {
            return function(h, D, R) {
              if (!D)
                return h;
              var T, V = typeof D == "function" ? D : JSON.stringify(D), W = he.get(V) || function() {
                var G = function(L) {
                  return function H(X, U) {
                    if (U === void 0 && (U = []), Array.isArray(X))
                      for (var rn = 0; rn < X.length; rn += 1)
                        H(X[rn], U);
                    else
                      U.push(X);
                    return U;
                  }(L).map(function(H) {
                    return String(H).replace(".", "_");
                  }).join(".").replace(te, ".").replace(Oe, "").split(".");
                }(D);
                return he.set(V, G), G;
              }();
              try {
                T = W.reduce(function(G, L) {
                  return G[L];
                }, h);
              } catch {
              }
              return T !== void 0 ? T : R;
            }(g, v);
          };
        }
        if (!r && typeof s == "string" && s && (r = s), !r && n.columns)
          throw console.error(n), new Error('A column ID (or unique "Header" value) is required!');
        if (!r)
          throw console.error(n), new Error("A column ID (or string accessor) is required!");
        return Object.assign(n, { id: r, accessor: i }), n;
      }
      function Dn(n, r) {
        if (!r)
          throw new Error();
        return Object.assign(n, d({ Header: w, Footer: w }, yn, {}, r, {}, n)), Object.assign(n, { originalWidth: n.width }), n;
      }
      function ye(n, r, i) {
        i === void 0 && (i = function() {
          return {};
        });
        for (var s = [], v = n, g = 0, h = function() {
          return g++;
        }, D = function() {
          var R = { headers: [] }, T = [], V = v.some(function(W) {
            return W.parent;
          });
          v.forEach(function(W) {
            var G, L = [].concat(T).reverse()[0];
            V && (W.parent ? G = d({}, W.parent, { originalId: W.parent.id, id: W.parent.id + "_" + h(), headers: [W] }, i(W)) : G = Dn(d({ originalId: W.id + "_placeholder", id: W.id + "_placeholder_" + h(), placeholderOf: W, headers: [W] }, i(W)), r), L && L.originalId === G.originalId ? L.headers.push(W) : T.push(G)), R.headers.push(W);
          }), s.push(R), v = T;
        }; v.length; )
          D();
        return s.reverse();
      }
      var he = /* @__PURE__ */ new Map();
      function Jn() {
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        for (var s = 0; s < r.length; s += 1)
          if (r[s] !== void 0)
            return r[s];
      }
      function ee(n) {
        if (typeof n == "function")
          return n;
      }
      function Pe(n, r) {
        var i = [];
        return function s(v) {
          v.forEach(function(g) {
            g[r] ? s(g[r]) : i.push(g);
          });
        }(n), i;
      }
      function Ne(n, r) {
        var i = r.manualExpandedKey, s = r.expanded, v = r.expandSubRows, g = v === void 0 || v, h = [];
        return n.forEach(function(D) {
          return function R(T, V) {
            V === void 0 && (V = !0), T.isExpanded = T.original && T.original[i] || s[T.id], T.canExpand = T.subRows && !!T.subRows.length, V && h.push(T), T.subRows && T.subRows.length && T.isExpanded && T.subRows.forEach(function(W) {
              return R(W, g);
            });
          }(D);
        }), h;
      }
      function be(n, r, i) {
        return ee(n) || r[n] || i[n] || i.text;
      }
      function Ee(n, r, i) {
        return n ? n(r, i) : r === void 0;
      }
      function Ce() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var pe = null, te = /\[/g, Oe = /\]/g, Be = function(n) {
        return d({ role: "table" }, n);
      }, B = function(n) {
        return d({ role: "rowgroup" }, n);
      }, z = function(n, r) {
        var i = r.column;
        return d({ key: "header_" + i.id, colSpan: i.totalVisibleHeaderCount, role: "columnheader" }, n);
      }, an = function(n, r) {
        var i = r.column;
        return d({ key: "footer_" + i.id, colSpan: i.totalVisibleHeaderCount }, n);
      }, en = function(n, r) {
        return d({ key: "headerGroup_" + r.index, role: "row" }, n);
      }, Wn = function(n, r) {
        return d({ key: "footerGroup_" + r.index }, n);
      }, Xn = function(n, r) {
        return d({ key: "row_" + r.row.id, role: "row" }, n);
      }, Se = function(n, r) {
        var i = r.cell;
        return d({ key: "cell_" + i.row.id + "_" + i.column.id, role: "cell" }, n);
      };
      function Re() {
        return { useOptions: [], stateReducers: [], useControlledState: [], columns: [], columnsDeps: [], allColumns: [], allColumnsDeps: [], accessValue: [], materializedColumns: [], materializedColumnsDeps: [], useInstanceAfterData: [], visibleColumns: [], visibleColumnsDeps: [], headerGroups: [], headerGroupsDeps: [], useInstanceBeforeDimensions: [], useInstance: [], prepareRow: [], getTableProps: [Be], getTableBodyProps: [B], getHeaderGroupProps: [en], getFooterGroupProps: [Wn], getHeaderProps: [z], getFooterProps: [an], getRowProps: [Xn], getCellProps: [Se], useFinalInstance: [] };
      }
      M.resetHiddenColumns = "resetHiddenColumns", M.toggleHideColumn = "toggleHideColumn", M.setHiddenColumns = "setHiddenColumns", M.toggleHideAllColumns = "toggleHideAllColumns";
      var Ae = function(n) {
        n.getToggleHiddenProps = [De], n.getToggleHideAllColumnsProps = [Ie], n.stateReducers.push(_e), n.useInstanceBeforeDimensions.push(de), n.headerGroupsDeps.push(function(r, i) {
          var s = i.instance;
          return [].concat(r, [s.state.hiddenColumns]);
        }), n.useInstance.push(se);
      };
      Ae.pluginName = "useColumnVisibility";
      var De = function(n, r) {
        var i = r.column;
        return [n, { onChange: function(s) {
          i.toggleHidden(!s.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isVisible, title: "Toggle Column Visible" }];
      }, Ie = function(n, r) {
        var i = r.instance;
        return [n, { onChange: function(s) {
          i.toggleHideAllColumns(!s.target.checked);
        }, style: { cursor: "pointer" }, checked: !i.allColumnsHidden && !i.state.hiddenColumns.length, title: "Toggle All Columns Hidden", indeterminate: !i.allColumnsHidden && i.state.hiddenColumns.length }];
      };
      function _e(n, r, i, s) {
        if (r.type === M.init)
          return d({ hiddenColumns: [] }, n);
        if (r.type === M.resetHiddenColumns)
          return d({}, n, { hiddenColumns: s.initialState.hiddenColumns || [] });
        if (r.type === M.toggleHideColumn) {
          var v = (r.value !== void 0 ? r.value : !n.hiddenColumns.includes(r.columnId)) ? [].concat(n.hiddenColumns, [r.columnId]) : n.hiddenColumns.filter(function(g) {
            return g !== r.columnId;
          });
          return d({}, n, { hiddenColumns: v });
        }
        return r.type === M.setHiddenColumns ? d({}, n, { hiddenColumns: Kn(r.value, n.hiddenColumns) }) : r.type === M.toggleHideAllColumns ? d({}, n, { hiddenColumns: (r.value !== void 0 ? r.value : !n.hiddenColumns.length) ? s.allColumns.map(function(g) {
          return g.id;
        }) : [] }) : void 0;
      }
      function de(n) {
        var r = n.headers, i = n.state.hiddenColumns;
        C.useRef(!1).current;
        var s = 0;
        r.forEach(function(v) {
          return s += function g(h, D) {
            h.isVisible = D && !i.includes(h.id);
            var R = 0;
            return h.headers && h.headers.length ? h.headers.forEach(function(T) {
              return R += g(T, h.isVisible);
            }) : R = h.isVisible ? 1 : 0, h.totalVisibleHeaderCount = R, R;
          }(v, !0);
        });
      }
      function se(n) {
        var r = n.columns, i = n.flatHeaders, s = n.dispatch, v = n.allColumns, g = n.getHooks, h = n.state.hiddenColumns, D = n.autoResetHiddenColumns, R = D === void 0 || D, T = In(n), V = v.length === h.length, W = C.useCallback(function(U, rn) {
          return s({ type: M.toggleHideColumn, columnId: U, value: rn });
        }, [s]), G = C.useCallback(function(U) {
          return s({ type: M.setHiddenColumns, value: U });
        }, [s]), L = C.useCallback(function(U) {
          return s({ type: M.toggleHideAllColumns, value: U });
        }, [s]), H = cn(g().getToggleHideAllColumnsProps, { instance: T() });
        i.forEach(function(U) {
          U.toggleHidden = function(rn) {
            s({ type: M.toggleHideColumn, columnId: U.id, value: rn });
          }, U.getToggleHiddenProps = cn(g().getToggleHiddenProps, { instance: T(), column: U });
        });
        var X = In(R);
        xn(function() {
          X() && s({ type: M.resetHiddenColumns });
        }, [s, r]), Object.assign(n, { allColumnsHidden: V, toggleHideColumn: W, setHiddenColumns: G, toggleHideAllColumns: L, getToggleHideAllColumnsProps: H });
      }
      var ge = {}, me = {}, Xe = function(n, r, i) {
        return n;
      }, Q = function(n, r) {
        return n.subRows || [];
      }, Tn = function(n, r, i) {
        return "" + (i ? [i.id, r].join(".") : r);
      }, Qn = function(n) {
        return n;
      };
      function ae(n) {
        var r = n.initialState, i = r === void 0 ? ge : r, s = n.defaultColumn, v = s === void 0 ? me : s, g = n.getSubRows, h = g === void 0 ? Q : g, D = n.getRowId, R = D === void 0 ? Tn : D, T = n.stateReducer, V = T === void 0 ? Xe : T, W = n.useControlledState, G = W === void 0 ? Qn : W;
        return d({}, F(n, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]), { initialState: i, defaultColumn: v, getSubRows: h, getRowId: R, stateReducer: V, useControlledState: G });
      }
      function fe(n, r) {
        r === void 0 && (r = 0);
        var i = 0, s = 0, v = 0, g = 0;
        return n.forEach(function(h) {
          var D = h.headers;
          if (h.totalLeft = r, D && D.length) {
            var R = fe(D, r), T = R[0], V = R[1], W = R[2], G = R[3];
            h.totalMinWidth = T, h.totalWidth = V, h.totalMaxWidth = W, h.totalFlexWidth = G;
          } else
            h.totalMinWidth = h.minWidth, h.totalWidth = Math.min(Math.max(h.minWidth, h.width), h.maxWidth), h.totalMaxWidth = h.maxWidth, h.totalFlexWidth = h.canResize ? h.totalWidth : 0;
          h.isVisible && (r += h.totalWidth, i += h.totalMinWidth, s += h.totalWidth, v += h.totalMaxWidth, g += h.totalFlexWidth);
        }), [i, s, v, g];
      }
      function He(n) {
        var r = n.data, i = n.rows, s = n.flatRows, v = n.rowsById, g = n.column, h = n.getRowId, D = n.getSubRows, R = n.accessValueHooks, T = n.getInstance;
        r.forEach(function(V, W) {
          return function G(L, H, X, U, rn) {
            X === void 0 && (X = 0);
            var Pn = L, un = h(L, H, U), K = v[un];
            if (K)
              K.subRows && K.originalSubRows.forEach(function(nn, vn) {
                return G(nn, vn, X + 1, K);
              });
            else if ((K = { id: un, original: Pn, index: H, depth: X, cells: [{}] }).cells.map = Ce, K.cells.filter = Ce, K.cells.forEach = Ce, K.cells[0].getCellProps = Ce, K.values = {}, rn.push(K), s.push(K), v[un] = K, K.originalSubRows = D(L, H), K.originalSubRows) {
              var wn = [];
              K.originalSubRows.forEach(function(nn, vn) {
                return G(nn, vn, X + 1, K, wn);
              }), K.subRows = wn;
            }
            g.accessor && (K.values[g.id] = g.accessor(L, H, K, rn, r)), K.values[g.id] = Mn(R, K.values[g.id], { row: K, column: g, instance: T() });
          }(V, W, 0, void 0, i);
        });
      }
      M.resetExpanded = "resetExpanded", M.toggleRowExpanded = "toggleRowExpanded", M.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var Te = function(n) {
        n.getToggleAllRowsExpandedProps = [Ye], n.getToggleRowExpandedProps = [je], n.stateReducers.push(Ue), n.useInstance.push(We), n.prepareRow.push(Je);
      };
      Te.pluginName = "useExpanded";
      var Ye = function(n, r) {
        var i = r.instance;
        return [n, { onClick: function(s) {
          i.toggleAllRowsExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle All Rows Expanded" }];
      }, je = function(n, r) {
        var i = r.row;
        return [n, { onClick: function() {
          i.toggleRowExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle Row Expanded" }];
      };
      function Ue(n, r, i, s) {
        if (r.type === M.init)
          return d({ expanded: {} }, n);
        if (r.type === M.resetExpanded)
          return d({}, n, { expanded: s.initialState.expanded || {} });
        if (r.type === M.toggleAllRowsExpanded) {
          var v = r.value, g = s.rowsById, h = Object.keys(g).length === Object.keys(n.expanded).length;
          if (v !== void 0 ? v : !h) {
            var D = {};
            return Object.keys(g).forEach(function(H) {
              D[H] = !0;
            }), d({}, n, { expanded: D });
          }
          return d({}, n, { expanded: {} });
        }
        if (r.type === M.toggleRowExpanded) {
          var R, T = r.id, V = r.value, W = n.expanded[T], G = V !== void 0 ? V : !W;
          if (!W && G)
            return d({}, n, { expanded: d({}, n.expanded, (R = {}, R[T] = !0, R)) });
          if (W && !G) {
            var L = n.expanded;
            return L[T], d({}, n, { expanded: F(L, [T].map(Fn)) });
          }
          return n;
        }
      }
      function We(n) {
        var r = n.data, i = n.rows, s = n.rowsById, v = n.manualExpandedKey, g = v === void 0 ? "expanded" : v, h = n.paginateExpandedRows, D = h === void 0 || h, R = n.expandSubRows, T = R === void 0 || R, V = n.autoResetExpanded, W = V === void 0 || V, G = n.getHooks, L = n.plugins, H = n.state.expanded, X = n.dispatch;
        Rn(L, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var U = In(W), rn = !!(Object.keys(s).length && Object.keys(H).length);
        rn && Object.keys(s).some(function(Hn) {
          return !H[Hn];
        }) && (rn = !1), xn(function() {
          U() && X({ type: M.resetExpanded });
        }, [X, r]);
        var Pn = C.useCallback(function(Hn, dn) {
          X({ type: M.toggleRowExpanded, id: Hn, value: dn });
        }, [X]), un = C.useCallback(function(Hn) {
          return X({ type: M.toggleAllRowsExpanded, value: Hn });
        }, [X]), K = C.useMemo(function() {
          return D ? Ne(i, { manualExpandedKey: g, expanded: H, expandSubRows: T }) : i;
        }, [D, i, g, H, T]), wn = C.useMemo(function() {
          return function(Hn) {
            var dn = 0;
            return Object.keys(Hn).forEach(function(gn) {
              var Vn = gn.split(".");
              dn = Math.max(dn, Vn.length);
            }), dn;
          }(H);
        }, [H]), nn = In(n), vn = cn(G().getToggleAllRowsExpandedProps, { instance: nn() });
        Object.assign(n, { preExpandedRows: i, expandedRows: K, rows: K, expandedDepth: wn, isAllRowsExpanded: rn, toggleRowExpanded: Pn, toggleAllRowsExpanded: un, getToggleAllRowsExpandedProps: vn });
      }
      function Je(n, r) {
        var i = r.instance.getHooks, s = r.instance;
        n.toggleRowExpanded = function(v) {
          return s.toggleRowExpanded(n.id, v);
        }, n.getToggleRowExpandedProps = cn(i().getToggleRowExpandedProps, { instance: s, row: n });
      }
      var Ge = function(n, r, i) {
        return n = n.filter(function(s) {
          return r.some(function(v) {
            var g = s.values[v];
            return String(g).toLowerCase().includes(String(i).toLowerCase());
          });
        });
      };
      Ge.autoRemove = function(n) {
        return !n;
      };
      var xe = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(v) {
            var g = s.values[v];
            return g === void 0 || String(g).toLowerCase() === String(i).toLowerCase();
          });
        });
      };
      xe.autoRemove = function(n) {
        return !n;
      };
      var Fe = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(v) {
            var g = s.values[v];
            return g === void 0 || String(g) === String(i);
          });
        });
      };
      Fe.autoRemove = function(n) {
        return !n;
      };
      var at = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(v) {
            return s.values[v].includes(i);
          });
        });
      };
      at.autoRemove = function(n) {
        return !n || !n.length;
      };
      var dt = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(v) {
            var g = s.values[v];
            return g && g.length && i.every(function(h) {
              return g.includes(h);
            });
          });
        });
      };
      dt.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Bt = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(v) {
            var g = s.values[v];
            return g && g.length && i.some(function(h) {
              return g.includes(h);
            });
          });
        });
      };
      Bt.autoRemove = function(n) {
        return !n || !n.length;
      };
      var ft = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(v) {
            var g = s.values[v];
            return i.includes(g);
          });
        });
      };
      ft.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Ht = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(v) {
            return s.values[v] === i;
          });
        });
      };
      Ht.autoRemove = function(n) {
        return n === void 0;
      };
      var Ft = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(v) {
            return s.values[v] == i;
          });
        });
      };
      Ft.autoRemove = function(n) {
        return n == null;
      };
      var Wt = function(n, r, i) {
        var s = i || [], v = s[0], g = s[1];
        if ((v = typeof v == "number" ? v : -1 / 0) > (g = typeof g == "number" ? g : 1 / 0)) {
          var h = v;
          v = g, g = h;
        }
        return n.filter(function(D) {
          return r.some(function(R) {
            var T = D.values[R];
            return T >= v && T <= g;
          });
        });
      };
      Wt.autoRemove = function(n) {
        return !n || typeof n[0] != "number" && typeof n[1] != "number";
      };
      var $e = Object.freeze({ __proto__: null, text: Ge, exactText: xe, exactTextCase: Fe, includes: at, includesAll: dt, includesSome: Bt, includesValue: ft, exact: Ht, equals: Ft, between: Wt });
      M.resetFilters = "resetFilters", M.setFilter = "setFilter", M.setAllFilters = "setAllFilters";
      var Gt = function(n) {
        n.stateReducers.push(Lo), n.useInstance.push(xt);
      };
      function Lo(n, r, i, s) {
        if (r.type === M.init)
          return d({ filters: [] }, n);
        if (r.type === M.resetFilters)
          return d({}, n, { filters: s.initialState.filters || [] });
        if (r.type === M.setFilter) {
          var v = r.columnId, g = r.filterValue, h = s.allColumns, D = s.filterTypes, R = h.find(function(X) {
            return X.id === v;
          });
          if (!R)
            throw new Error("React-Table: Could not find a column with id: " + v);
          var T = be(R.filter, D || {}, $e), V = n.filters.find(function(X) {
            return X.id === v;
          }), W = Kn(g, V && V.value);
          return Ee(T.autoRemove, W, R) ? d({}, n, { filters: n.filters.filter(function(X) {
            return X.id !== v;
          }) }) : d({}, n, V ? { filters: n.filters.map(function(X) {
            return X.id === v ? { id: v, value: W } : X;
          }) } : { filters: [].concat(n.filters, [{ id: v, value: W }]) });
        }
        if (r.type === M.setAllFilters) {
          var G = r.filters, L = s.allColumns, H = s.filterTypes;
          return d({}, n, { filters: Kn(G, n.filters).filter(function(X) {
            var U = L.find(function(rn) {
              return rn.id === X.id;
            });
            return !Ee(be(U.filter, H || {}, $e).autoRemove, X.value, U);
          }) });
        }
      }
      function xt(n) {
        var r = n.data, i = n.rows, s = n.flatRows, v = n.rowsById, g = n.allColumns, h = n.filterTypes, D = n.manualFilters, R = n.defaultCanFilter, T = R !== void 0 && R, V = n.disableFilters, W = n.state.filters, G = n.dispatch, L = n.autoResetFilters, H = L === void 0 || L, X = C.useCallback(function(nn, vn) {
          G({ type: M.setFilter, columnId: nn, filterValue: vn });
        }, [G]), U = C.useCallback(function(nn) {
          G({ type: M.setAllFilters, filters: nn });
        }, [G]);
        g.forEach(function(nn) {
          var vn = nn.id, Hn = nn.accessor, dn = nn.defaultCanFilter, gn = nn.disableFilters;
          nn.canFilter = Hn ? Jn(gn !== !0 && void 0, V !== !0 && void 0, !0) : Jn(dn, T, !1), nn.setFilter = function(Sn) {
            return X(nn.id, Sn);
          };
          var Vn = W.find(function(Sn) {
            return Sn.id === vn;
          });
          nn.filterValue = Vn && Vn.value;
        });
        var rn = C.useMemo(function() {
          if (D || !W.length)
            return [i, s, v];
          var nn = [], vn = {};
          return [function Hn(dn, gn) {
            gn === void 0 && (gn = 0);
            var Vn = dn;
            return (Vn = W.reduce(function(Sn, Gn) {
              var e = Gn.id, t = Gn.value, u = g.find(function(p) {
                return p.id === e;
              });
              if (!u)
                return Sn;
              gn === 0 && (u.preFilteredRows = Sn);
              var a = be(u.filter, h || {}, $e);
              return a ? (u.filteredRows = a(Sn, [e], t), u.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + u.id + "."), Sn);
            }, dn)).forEach(function(Sn) {
              nn.push(Sn), vn[Sn.id] = Sn, Sn.subRows && (Sn.subRows = Sn.subRows && Sn.subRows.length > 0 ? Hn(Sn.subRows, gn + 1) : Sn.subRows);
            }), Vn;
          }(i), nn, vn];
        }, [D, W, i, s, v, g, h]), Pn = rn[0], un = rn[1], K = rn[2];
        C.useMemo(function() {
          g.filter(function(nn) {
            return !W.find(function(vn) {
              return vn.id === nn.id;
            });
          }).forEach(function(nn) {
            nn.preFilteredRows = Pn, nn.filteredRows = Pn;
          });
        }, [Pn, W, g]);
        var wn = In(H);
        xn(function() {
          wn() && G({ type: M.resetFilters });
        }, [G, D ? null : r]), Object.assign(n, { preFilteredRows: i, preFilteredFlatRows: s, preFilteredRowsById: v, filteredRows: Pn, filteredFlatRows: un, filteredRowsById: K, rows: Pn, flatRows: un, rowsById: K, setFilter: X, setAllFilters: U });
      }
      Gt.pluginName = "useFilters", M.resetGlobalFilter = "resetGlobalFilter", M.setGlobalFilter = "setGlobalFilter";
      var pt = function(n) {
        n.stateReducers.push(Vt), n.useInstance.push(Kt);
      };
      function Vt(n, r, i, s) {
        if (r.type === M.resetGlobalFilter)
          return d({}, n, { globalFilter: s.initialState.globalFilter || void 0 });
        if (r.type === M.setGlobalFilter) {
          var v = r.filterValue, g = s.userFilterTypes, h = be(s.globalFilter, g || {}, $e), D = Kn(v, n.globalFilter);
          return Ee(h.autoRemove, D) ? (n.globalFilter, F(n, ["globalFilter"])) : d({}, n, { globalFilter: D });
        }
      }
      function Kt(n) {
        var r = n.data, i = n.rows, s = n.flatRows, v = n.rowsById, g = n.allColumns, h = n.filterTypes, D = n.globalFilter, R = n.manualGlobalFilter, T = n.state.globalFilter, V = n.dispatch, W = n.autoResetGlobalFilter, G = W === void 0 || W, L = n.disableGlobalFilter, H = C.useCallback(function(K) {
          V({ type: M.setGlobalFilter, filterValue: K });
        }, [V]), X = C.useMemo(function() {
          if (R || T === void 0)
            return [i, s, v];
          var K = [], wn = {}, nn = be(D, h || {}, $e);
          if (!nn)
            return console.warn("Could not find a valid 'globalFilter' option."), i;
          g.forEach(function(Hn) {
            var dn = Hn.disableGlobalFilter;
            Hn.canFilter = Jn(dn !== !0 && void 0, L !== !0 && void 0, !0);
          });
          var vn = g.filter(function(Hn) {
            return Hn.canFilter === !0;
          });
          return [function Hn(dn) {
            return (dn = nn(dn, vn.map(function(gn) {
              return gn.id;
            }), T)).forEach(function(gn) {
              K.push(gn), wn[gn.id] = gn, gn.subRows = gn.subRows && gn.subRows.length ? Hn(gn.subRows) : gn.subRows;
            }), dn;
          }(i), K, wn];
        }, [R, T, D, h, g, i, s, v, L]), U = X[0], rn = X[1], Pn = X[2], un = In(G);
        xn(function() {
          un() && V({ type: M.resetGlobalFilter });
        }, [V, R ? null : r]), Object.assign(n, { preGlobalFilteredRows: i, preGlobalFilteredFlatRows: s, preGlobalFilteredRowsById: v, globalFilteredRows: U, globalFilteredFlatRows: rn, globalFilteredRowsById: Pn, rows: U, flatRows: rn, rowsById: Pn, setGlobalFilter: H, disableGlobalFilter: L });
      }
      function gt(n, r) {
        return r.reduce(function(i, s) {
          return i + (typeof s == "number" ? s : 0);
        }, 0);
      }
      pt.pluginName = "useGlobalFilter";
      var mt = Object.freeze({ __proto__: null, sum: gt, min: function(n) {
        var r = n[0] || 0;
        return n.forEach(function(i) {
          typeof i == "number" && (r = Math.min(r, i));
        }), r;
      }, max: function(n) {
        var r = n[0] || 0;
        return n.forEach(function(i) {
          typeof i == "number" && (r = Math.max(r, i));
        }), r;
      }, minMax: function(n) {
        var r = n[0] || 0, i = n[0] || 0;
        return n.forEach(function(s) {
          typeof s == "number" && (r = Math.min(r, s), i = Math.max(i, s));
        }), r + ".." + i;
      }, average: function(n) {
        return gt(0, n) / n.length;
      }, median: function(n) {
        if (!n.length)
          return null;
        var r = Math.floor(n.length / 2), i = [].concat(n).sort(function(s, v) {
          return s - v;
        });
        return n.length % 2 != 0 ? i[r] : (i[r - 1] + i[r]) / 2;
      }, unique: function(n) {
        return Array.from(new Set(n).values());
      }, uniqueCount: function(n) {
        return new Set(n).size;
      }, count: function(n) {
        return n.length;
      } }), qt = [], zt = {};
      M.resetGroupBy = "resetGroupBy", M.setGroupBy = "setGroupBy", M.toggleGroupBy = "toggleGroupBy";
      var vt = function(n) {
        n.getGroupByToggleProps = [_t], n.stateReducers.push(Ze), n.visibleColumnsDeps.push(function(r, i) {
          var s = i.instance;
          return [].concat(r, [s.state.groupBy]);
        }), n.visibleColumns.push(Xt), n.useInstance.push(Oo), n.prepareRow.push(Yt);
      };
      vt.pluginName = "useGroupBy";
      var _t = function(n, r) {
        var i = r.header;
        return [n, { onClick: i.canGroupBy ? function(s) {
          s.persist(), i.toggleGroupBy();
        } : void 0, style: { cursor: i.canGroupBy ? "pointer" : void 0 }, title: "Toggle GroupBy" }];
      };
      function Ze(n, r, i, s) {
        if (r.type === M.init)
          return d({ groupBy: [] }, n);
        if (r.type === M.resetGroupBy)
          return d({}, n, { groupBy: s.initialState.groupBy || [] });
        if (r.type === M.setGroupBy)
          return d({}, n, { groupBy: r.value });
        if (r.type === M.toggleGroupBy) {
          var v = r.columnId, g = r.value, h = g !== void 0 ? g : !n.groupBy.includes(v);
          return d({}, n, h ? { groupBy: [].concat(n.groupBy, [v]) } : { groupBy: n.groupBy.filter(function(D) {
            return D !== v;
          }) });
        }
      }
      function Xt(n, r) {
        var i = r.instance.state.groupBy, s = i.map(function(g) {
          return n.find(function(h) {
            return h.id === g;
          });
        }).filter(Boolean), v = n.filter(function(g) {
          return !i.includes(g.id);
        });
        return (n = [].concat(s, v)).forEach(function(g) {
          g.isGrouped = i.includes(g.id), g.groupedIndex = i.indexOf(g.id);
        }), n;
      }
      var ko = {};
      function Oo(n) {
        var r = n.data, i = n.rows, s = n.flatRows, v = n.rowsById, g = n.allColumns, h = n.flatHeaders, D = n.groupByFn, R = D === void 0 ? jt : D, T = n.manualGroupBy, V = n.aggregations, W = V === void 0 ? ko : V, G = n.plugins, L = n.state.groupBy, H = n.dispatch, X = n.autoResetGroupBy, U = X === void 0 || X, rn = n.disableGroupBy, Pn = n.defaultCanGroupBy, un = n.getHooks;
        Rn(G, ["useColumnOrder", "useFilters"], "useGroupBy");
        var K = In(n);
        g.forEach(function(u) {
          var a = u.accessor, p = u.defaultGroupBy, m = u.disableGroupBy;
          u.canGroupBy = a ? Jn(u.canGroupBy, m !== !0 && void 0, rn !== !0 && void 0, !0) : Jn(u.canGroupBy, p, Pn, !1), u.canGroupBy && (u.toggleGroupBy = function() {
            return n.toggleGroupBy(u.id);
          }), u.Aggregated = u.Aggregated || u.Cell;
        });
        var wn = C.useCallback(function(u, a) {
          H({ type: M.toggleGroupBy, columnId: u, value: a });
        }, [H]), nn = C.useCallback(function(u) {
          H({ type: M.setGroupBy, value: u });
        }, [H]);
        h.forEach(function(u) {
          u.getGroupByToggleProps = cn(un().getGroupByToggleProps, { instance: K(), header: u });
        });
        var vn = C.useMemo(function() {
          if (T || !L.length)
            return [i, s, v, qt, zt, s, v];
          var u = L.filter(function(E) {
            return g.find(function(q) {
              return q.id === E;
            });
          }), a = [], p = {}, m = [], c = {}, S = [], b = {}, N = function E(q, O, x) {
            if (O === void 0 && (O = 0), O === u.length)
              return q.map(function(Z) {
                return d({}, Z, { depth: O });
              });
            var _ = u[O], k = R(q, _);
            return Object.entries(k).map(function(Z, sn) {
              var pn = Z[0], j = Z[1], bn = _ + ":" + pn, On = E(j, O + 1, bn = x ? x + ">" + bn : bn), J = O ? Pe(j, "leafRows") : j, Y = function(ln, En, Ln) {
                var zn = {};
                return g.forEach(function(tn) {
                  if (u.includes(tn.id))
                    zn[tn.id] = En[0] ? En[0].values[tn.id] : null;
                  else {
                    var re = typeof tn.aggregate == "function" ? tn.aggregate : W[tn.aggregate] || mt[tn.aggregate];
                    if (re) {
                      var kn = En.map(function(hn) {
                        return hn.values[tn.id];
                      }), mn = ln.map(function(hn) {
                        var Yn = hn.values[tn.id];
                        if (!Ln && tn.aggregateValue) {
                          var le = typeof tn.aggregateValue == "function" ? tn.aggregateValue : W[tn.aggregateValue] || mt[tn.aggregateValue];
                          if (!le)
                            throw console.info({ column: tn }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                          Yn = le(Yn, hn, tn);
                        }
                        return Yn;
                      });
                      zn[tn.id] = re(mn, kn);
                    } else {
                      if (tn.aggregate)
                        throw console.info({ column: tn }), new Error("React Table: Invalid column.aggregate option for column listed above");
                      zn[tn.id] = null;
                    }
                  }
                }), zn;
              }(J, j, O), $ = { id: bn, isGrouped: !0, groupByID: _, groupByVal: pn, values: Y, subRows: On, leafRows: J, depth: O, index: sn };
              return On.forEach(function(ln) {
                a.push(ln), p[ln.id] = ln, ln.isGrouped ? (m.push(ln), c[ln.id] = ln) : (S.push(ln), b[ln.id] = ln);
              }), $;
            });
          }(i);
          return N.forEach(function(E) {
            a.push(E), p[E.id] = E, E.isGrouped ? (m.push(E), c[E.id] = E) : (S.push(E), b[E.id] = E);
          }), [N, a, p, m, c, S, b];
        }, [T, L, i, s, v, g, W, R]), Hn = vn[0], dn = vn[1], gn = vn[2], Vn = vn[3], Sn = vn[4], Gn = vn[5], e = vn[6], t = In(U);
        xn(function() {
          t() && H({ type: M.resetGroupBy });
        }, [H, T ? null : r]), Object.assign(n, { preGroupedRows: i, preGroupedFlatRow: s, preGroupedRowsById: v, groupedRows: Hn, groupedFlatRows: dn, groupedRowsById: gn, onlyGroupedFlatRows: Vn, onlyGroupedRowsById: Sn, nonGroupedFlatRows: Gn, nonGroupedRowsById: e, rows: Hn, flatRows: dn, rowsById: gn, toggleGroupBy: wn, setGroupBy: nn });
      }
      function Yt(n) {
        n.allCells.forEach(function(r) {
          var i;
          r.isGrouped = r.column.isGrouped && r.column.id === n.groupByID, r.isPlaceholder = !r.isGrouped && r.column.isGrouped, r.isAggregated = !r.isGrouped && !r.isPlaceholder && ((i = n.subRows) == null ? void 0 : i.length);
        });
      }
      function jt(n, r) {
        return n.reduce(function(i, s, v) {
          var g = "" + s.values[r];
          return i[g] = Array.isArray(i[g]) ? i[g] : [], i[g].push(s), i;
        }, {});
      }
      var Ut = /([0-9]+)/gm;
      function rt(n, r) {
        return n === r ? 0 : n > r ? 1 : -1;
      }
      function Qe(n, r, i) {
        return [n.values[i], r.values[i]];
      }
      function Jt(n) {
        return typeof n == "number" ? isNaN(n) || n === 1 / 0 || n === -1 / 0 ? "" : String(n) : typeof n == "string" ? n : "";
      }
      var Bo = Object.freeze({ __proto__: null, alphanumeric: function(n, r, i) {
        var s = Qe(n, r, i), v = s[0], g = s[1];
        for (v = Jt(v), g = Jt(g), v = v.split(Ut).filter(Boolean), g = g.split(Ut).filter(Boolean); v.length && g.length; ) {
          var h = v.shift(), D = g.shift(), R = parseInt(h, 10), T = parseInt(D, 10), V = [R, T].sort();
          if (isNaN(V[0])) {
            if (h > D)
              return 1;
            if (D > h)
              return -1;
          } else {
            if (isNaN(V[1]))
              return isNaN(R) ? -1 : 1;
            if (R > T)
              return 1;
            if (T > R)
              return -1;
          }
        }
        return v.length - g.length;
      }, datetime: function(n, r, i) {
        var s = Qe(n, r, i), v = s[0], g = s[1];
        return rt(v = v.getTime(), g = g.getTime());
      }, basic: function(n, r, i) {
        var s = Qe(n, r, i);
        return rt(s[0], s[1]);
      }, string: function(n, r, i) {
        var s = Qe(n, r, i), v = s[0], g = s[1];
        for (v = v.split("").filter(Boolean), g = g.split("").filter(Boolean); v.length && g.length; ) {
          var h = v.shift(), D = g.shift(), R = h.toLowerCase(), T = D.toLowerCase();
          if (R > T)
            return 1;
          if (T > R)
            return -1;
          if (h > D)
            return 1;
          if (D > h)
            return -1;
        }
        return v.length - g.length;
      }, number: function(n, r, i) {
        var s = Qe(n, r, i), v = s[0], g = s[1], h = /[^0-9.]/gi;
        return rt(v = Number(String(v).replace(h, "")), g = Number(String(g).replace(h, "")));
      } });
      M.resetSortBy = "resetSortBy", M.setSortBy = "setSortBy", M.toggleSortBy = "toggleSortBy", M.clearSortBy = "clearSortBy", yn.sortType = "alphanumeric", yn.sortDescFirst = !1;
      var $t = function(n) {
        n.getSortByToggleProps = [Ho], n.stateReducers.push(Fo), n.useInstance.push(Wo);
      };
      $t.pluginName = "useSortBy";
      var Ho = function(n, r) {
        var i = r.instance, s = r.column, v = i.isMultiSortEvent, g = v === void 0 ? function(h) {
          return h.shiftKey;
        } : v;
        return [n, { onClick: s.canSort ? function(h) {
          h.persist(), s.toggleSortBy(void 0, !i.disableMultiSort && g(h));
        } : void 0, style: { cursor: s.canSort ? "pointer" : void 0 }, title: s.canSort ? "Toggle SortBy" : void 0 }];
      };
      function Fo(n, r, i, s) {
        if (r.type === M.init)
          return d({ sortBy: [] }, n);
        if (r.type === M.resetSortBy)
          return d({}, n, { sortBy: s.initialState.sortBy || [] });
        if (r.type === M.clearSortBy)
          return d({}, n, { sortBy: n.sortBy.filter(function(K) {
            return K.id !== r.columnId;
          }) });
        if (r.type === M.setSortBy)
          return d({}, n, { sortBy: r.sortBy });
        if (r.type === M.toggleSortBy) {
          var v, g = r.columnId, h = r.desc, D = r.multi, R = s.allColumns, T = s.disableMultiSort, V = s.disableSortRemove, W = s.disableMultiRemove, G = s.maxMultiSortColCount, L = G === void 0 ? Number.MAX_SAFE_INTEGER : G, H = n.sortBy, X = R.find(function(K) {
            return K.id === g;
          }).sortDescFirst, U = H.find(function(K) {
            return K.id === g;
          }), rn = H.findIndex(function(K) {
            return K.id === g;
          }), Pn = h != null, un = [];
          return (v = !T && D ? U ? "toggle" : "add" : rn !== H.length - 1 || H.length !== 1 ? "replace" : U ? "toggle" : "replace") != "toggle" || V || Pn || D && W || !(U && U.desc && !X || !U.desc && X) || (v = "remove"), v === "replace" ? un = [{ id: g, desc: Pn ? h : X }] : v === "add" ? (un = [].concat(H, [{ id: g, desc: Pn ? h : X }])).splice(0, un.length - L) : v === "toggle" ? un = H.map(function(K) {
            return K.id === g ? d({}, K, { desc: Pn ? h : !U.desc }) : K;
          }) : v === "remove" && (un = H.filter(function(K) {
            return K.id !== g;
          })), d({}, n, { sortBy: un });
        }
      }
      function Wo(n) {
        var r = n.data, i = n.rows, s = n.flatRows, v = n.allColumns, g = n.orderByFn, h = g === void 0 ? Zt : g, D = n.sortTypes, R = n.manualSortBy, T = n.defaultCanSort, V = n.disableSortBy, W = n.flatHeaders, G = n.state.sortBy, L = n.dispatch, H = n.plugins, X = n.getHooks, U = n.autoResetSortBy, rn = U === void 0 || U;
        Rn(H, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var Pn = C.useCallback(function(dn) {
          L({ type: M.setSortBy, sortBy: dn });
        }, [L]), un = C.useCallback(function(dn, gn, Vn) {
          L({ type: M.toggleSortBy, columnId: dn, desc: gn, multi: Vn });
        }, [L]), K = In(n);
        W.forEach(function(dn) {
          var gn = dn.accessor, Vn = dn.canSort, Sn = dn.disableSortBy, Gn = dn.id, e = gn ? Jn(Sn !== !0 && void 0, V !== !0 && void 0, !0) : Jn(T, Vn, !1);
          dn.canSort = e, dn.canSort && (dn.toggleSortBy = function(u, a) {
            return un(dn.id, u, a);
          }, dn.clearSortBy = function() {
            L({ type: M.clearSortBy, columnId: dn.id });
          }), dn.getSortByToggleProps = cn(X().getSortByToggleProps, { instance: K(), column: dn });
          var t = G.find(function(u) {
            return u.id === Gn;
          });
          dn.isSorted = !!t, dn.sortedIndex = G.findIndex(function(u) {
            return u.id === Gn;
          }), dn.isSortedDesc = dn.isSorted ? t.desc : void 0;
        });
        var wn = C.useMemo(function() {
          if (R || !G.length)
            return [i, s];
          var dn = [], gn = G.filter(function(Vn) {
            return v.find(function(Sn) {
              return Sn.id === Vn.id;
            });
          });
          return [function Vn(Sn) {
            var Gn = h(Sn, gn.map(function(e) {
              var t = v.find(function(p) {
                return p.id === e.id;
              });
              if (!t)
                throw new Error("React-Table: Could not find a column with id: " + e.id + " while sorting");
              var u = t.sortType, a = ee(u) || (D || {})[u] || Bo[u];
              if (!a)
                throw new Error("React-Table: Could not find a valid sortType of '" + u + "' for column '" + e.id + "'.");
              return function(p, m) {
                return a(p, m, e.id, e.desc);
              };
            }), gn.map(function(e) {
              var t = v.find(function(u) {
                return u.id === e.id;
              });
              return t && t.sortInverted ? e.desc : !e.desc;
            }));
            return Gn.forEach(function(e) {
              dn.push(e), e.subRows && e.subRows.length !== 0 && (e.subRows = Vn(e.subRows));
            }), Gn;
          }(i), dn];
        }, [R, G, i, s, v, h, D]), nn = wn[0], vn = wn[1], Hn = In(rn);
        xn(function() {
          Hn() && L({ type: M.resetSortBy });
        }, [R ? null : r]), Object.assign(n, { preSortedRows: i, preSortedFlatRows: s, sortedRows: nn, sortedFlatRows: vn, rows: nn, flatRows: vn, setSortBy: Pn, toggleSortBy: un });
      }
      function Zt(n, r, i) {
        return [].concat(n).sort(function(s, v) {
          for (var g = 0; g < r.length; g += 1) {
            var h = r[g], D = i[g] === !1 || i[g] === "desc", R = h(s, v);
            if (R !== 0)
              return D ? -R : R;
          }
          return i[0] ? s.index - v.index : v.index - s.index;
        });
      }
      M.resetPage = "resetPage", M.gotoPage = "gotoPage", M.setPageSize = "setPageSize";
      var ht = function(n) {
        n.stateReducers.push(Go), n.useInstance.push(xo);
      };
      function Go(n, r, i, s) {
        if (r.type === M.init)
          return d({ pageSize: 10, pageIndex: 0 }, n);
        if (r.type === M.resetPage)
          return d({}, n, { pageIndex: s.initialState.pageIndex || 0 });
        if (r.type === M.gotoPage) {
          var v = s.pageCount, g = s.page, h = Kn(r.pageIndex, n.pageIndex), D = !1;
          return h > n.pageIndex ? D = v === -1 ? g.length >= n.pageSize : h < v : h < n.pageIndex && (D = h > -1), D ? d({}, n, { pageIndex: h }) : n;
        }
        if (r.type === M.setPageSize) {
          var R = r.pageSize, T = n.pageSize * n.pageIndex;
          return d({}, n, { pageIndex: Math.floor(T / R), pageSize: R });
        }
      }
      function xo(n) {
        var r = n.rows, i = n.autoResetPage, s = i === void 0 || i, v = n.manualExpandedKey, g = v === void 0 ? "expanded" : v, h = n.plugins, D = n.pageCount, R = n.paginateExpandedRows, T = R === void 0 || R, V = n.expandSubRows, W = V === void 0 || V, G = n.state, L = G.pageSize, H = G.pageIndex, X = G.expanded, U = G.globalFilter, rn = G.filters, Pn = G.groupBy, un = G.sortBy, K = n.dispatch, wn = n.data, nn = n.manualPagination;
        Rn(h, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var vn = In(s);
        xn(function() {
          vn() && K({ type: M.resetPage });
        }, [K, nn ? null : wn, U, rn, Pn, un]);
        var Hn = nn ? D : Math.ceil(r.length / L), dn = C.useMemo(function() {
          return Hn > 0 ? [].concat(new Array(Hn)).fill(null).map(function(a, p) {
            return p;
          }) : [];
        }, [Hn]), gn = C.useMemo(function() {
          var a;
          if (nn)
            a = r;
          else {
            var p = L * H, m = p + L;
            a = r.slice(p, m);
          }
          return T ? a : Ne(a, { manualExpandedKey: g, expanded: X, expandSubRows: W });
        }, [W, X, g, nn, H, L, T, r]), Vn = H > 0, Sn = Hn === -1 ? gn.length >= L : H < Hn - 1, Gn = C.useCallback(function(a) {
          K({ type: M.gotoPage, pageIndex: a });
        }, [K]), e = C.useCallback(function() {
          return Gn(function(a) {
            return a - 1;
          });
        }, [Gn]), t = C.useCallback(function() {
          return Gn(function(a) {
            return a + 1;
          });
        }, [Gn]), u = C.useCallback(function(a) {
          K({ type: M.setPageSize, pageSize: a });
        }, [K]);
        Object.assign(n, { pageOptions: dn, pageCount: Hn, page: gn, canPreviousPage: Vn, canNextPage: Sn, gotoPage: Gn, previousPage: e, nextPage: t, setPageSize: u });
      }
      ht.pluginName = "usePagination", M.resetPivot = "resetPivot", M.togglePivot = "togglePivot";
      var St = function(n) {
        n.getPivotToggleProps = [Vo], n.stateReducers.push(Ko), n.useInstanceAfterData.push(qo), n.allColumns.push(zo), n.accessValue.push(_o), n.materializedColumns.push(no), n.materializedColumnsDeps.push(eo), n.visibleColumns.push(Xo), n.visibleColumnsDeps.push(Yo), n.useInstance.push(jo), n.prepareRow.push(Uo);
      };
      St.pluginName = "usePivotColumns";
      var Qt = [], Vo = function(n, r) {
        var i = r.header;
        return [n, { onClick: i.canPivot ? function(s) {
          s.persist(), i.togglePivot();
        } : void 0, style: { cursor: i.canPivot ? "pointer" : void 0 }, title: "Toggle Pivot" }];
      };
      function Ko(n, r, i, s) {
        if (r.type === M.init)
          return d({ pivotColumns: Qt }, n);
        if (r.type === M.resetPivot)
          return d({}, n, { pivotColumns: s.initialState.pivotColumns || Qt });
        if (r.type === M.togglePivot) {
          var v = r.columnId, g = r.value, h = g !== void 0 ? g : !n.pivotColumns.includes(v);
          return d({}, n, h ? { pivotColumns: [].concat(n.pivotColumns, [v]) } : { pivotColumns: n.pivotColumns.filter(function(D) {
            return D !== v;
          }) });
        }
      }
      function qo(n) {
        n.allColumns.forEach(function(r) {
          r.isPivotSource = n.state.pivotColumns.includes(r.id);
        });
      }
      function zo(n, r) {
        var i = r.instance;
        return n.forEach(function(s) {
          s.isPivotSource = i.state.pivotColumns.includes(s.id), s.uniqueValues = /* @__PURE__ */ new Set();
        }), n;
      }
      function _o(n, r) {
        var i = r.column;
        return i.uniqueValues && n !== void 0 && i.uniqueValues.add(n), n;
      }
      function no(n, r) {
        var i = r.instance, s = i.allColumns, v = i.state;
        if (!v.pivotColumns.length || !v.groupBy || !v.groupBy.length)
          return n;
        var g = v.pivotColumns.map(function(R) {
          return s.find(function(T) {
            return T.id === R;
          });
        }).filter(Boolean), h = s.filter(function(R) {
          return !R.isPivotSource && !v.groupBy.includes(R.id) && !v.pivotColumns.includes(R.id);
        }), D = Me(function R(T, V, W) {
          T === void 0 && (T = 0), W === void 0 && (W = []);
          var G = g[T];
          return G ? Array.from(G.uniqueValues).sort().map(function(L) {
            var H = d({}, G, { Header: G.PivotHeader || typeof G.header == "string" ? G.Header + ": " + L : L, isPivotGroup: !0, parent: V, depth: T, id: V ? V.id + "." + G.id + "." + L : G.id + "." + L, pivotValue: L });
            return H.columns = R(T + 1, H, [].concat(W, [function(X) {
              return X.values[G.id] === L;
            }])), H;
          }) : h.map(function(L) {
            return d({}, L, { canPivot: !1, isPivoted: !0, parent: V, depth: T, id: "" + (V ? V.id + "." + L.id : L.id), accessor: function(H, X, U) {
              if (W.every(function(rn) {
                return rn(U);
              }))
                return U.values[L.id];
            } });
          });
        }());
        return [].concat(n, D);
      }
      function eo(n, r) {
        var i = r.instance.state, s = i.pivotColumns, v = i.groupBy;
        return [].concat(n, [s, v]);
      }
      function Xo(n, r) {
        var i = r.instance.state;
        return n = n.filter(function(s) {
          return !s.isPivotSource;
        }), i.pivotColumns.length && i.groupBy && i.groupBy.length && (n = n.filter(function(s) {
          return s.isGrouped || s.isPivoted;
        })), n;
      }
      function Yo(n, r) {
        var i = r.instance;
        return [].concat(n, [i.state.pivotColumns, i.state.groupBy]);
      }
      function jo(n) {
        var r = n.columns, i = n.allColumns, s = n.flatHeaders, v = n.getHooks, g = n.plugins, h = n.dispatch, D = n.autoResetPivot, R = D === void 0 || D, T = n.manaulPivot, V = n.disablePivot, W = n.defaultCanPivot;
        Rn(g, ["useGroupBy"], "usePivotColumns");
        var G = In(n);
        i.forEach(function(H) {
          var X = H.accessor, U = H.defaultPivot, rn = H.disablePivot;
          H.canPivot = X ? Jn(H.canPivot, rn !== !0 && void 0, V !== !0 && void 0, !0) : Jn(H.canPivot, U, W, !1), H.canPivot && (H.togglePivot = function() {
            return n.togglePivot(H.id);
          }), H.Aggregated = H.Aggregated || H.Cell;
        }), s.forEach(function(H) {
          H.getPivotToggleProps = cn(v().getPivotToggleProps, { instance: G(), header: H });
        });
        var L = In(R);
        xn(function() {
          L() && h({ type: M.resetPivot });
        }, [h, T ? null : r]), Object.assign(n, { togglePivot: function(H, X) {
          h({ type: M.togglePivot, columnId: H, value: X });
        } });
      }
      function Uo(n) {
        n.allCells.forEach(function(r) {
          r.isPivoted = r.column.isPivoted;
        });
      }
      M.resetSelectedRows = "resetSelectedRows", M.toggleAllRowsSelected = "toggleAllRowsSelected", M.toggleRowSelected = "toggleRowSelected", M.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var to = function(n) {
        n.getToggleRowSelectedProps = [wt], n.getToggleAllRowsSelectedProps = [nt], n.getToggleAllPageRowsSelectedProps = [oo], n.stateReducers.push(Jo), n.useInstance.push(ao), n.prepareRow.push($o);
      };
      to.pluginName = "useRowSelect";
      var wt = function(n, r) {
        var i = r.instance, s = r.row, v = i.manualRowSelectedKey, g = v === void 0 ? "isSelected" : v;
        return [n, { onChange: function(h) {
          s.toggleRowSelected(h.target.checked);
        }, style: { cursor: "pointer" }, checked: !(!s.original || !s.original[g]) || s.isSelected, title: "Toggle Row Selected", indeterminate: s.isSomeSelected }];
      }, nt = function(n, r) {
        var i = r.instance;
        return [n, { onChange: function(s) {
          i.toggleAllRowsSelected(s.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isAllRowsSelected, title: "Toggle All Rows Selected", indeterminate: !!(!i.isAllRowsSelected && Object.keys(i.state.selectedRowIds).length) }];
      }, oo = function(n, r) {
        var i = r.instance;
        return [n, { onChange: function(s) {
          i.toggleAllPageRowsSelected(s.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isAllPageRowsSelected, title: "Toggle All Current Page Rows Selected", indeterminate: !!(!i.isAllPageRowsSelected && i.page.some(function(s) {
          var v = s.id;
          return i.state.selectedRowIds[v];
        })) }];
      };
      function Jo(n, r, i, s) {
        if (r.type === M.init)
          return d({ selectedRowIds: {} }, n);
        if (r.type === M.resetSelectedRows)
          return d({}, n, { selectedRowIds: s.initialState.selectedRowIds || {} });
        if (r.type === M.toggleAllRowsSelected) {
          var v = r.value, g = s.isAllRowsSelected, h = s.rowsById, D = s.nonGroupedRowsById, R = D === void 0 ? h : D, T = v !== void 0 ? v : !g, V = Object.assign({}, n.selectedRowIds);
          return T ? Object.keys(R).forEach(function(Gn) {
            V[Gn] = !0;
          }) : Object.keys(R).forEach(function(Gn) {
            delete V[Gn];
          }), d({}, n, { selectedRowIds: V });
        }
        if (r.type === M.toggleRowSelected) {
          var W = r.id, G = r.value, L = s.rowsById, H = s.selectSubRows, X = H === void 0 || H, U = s.getSubRows, rn = n.selectedRowIds[W], Pn = G !== void 0 ? G : !rn;
          if (rn === Pn)
            return n;
          var un = d({}, n.selectedRowIds);
          return function Gn(e) {
            var t = L[e];
            if (t && (t.isGrouped || (Pn ? un[e] = !0 : delete un[e]), X && U(t)))
              return U(t).forEach(function(u) {
                return Gn(u.id);
              });
          }(W), d({}, n, { selectedRowIds: un });
        }
        if (r.type === M.toggleAllPageRowsSelected) {
          var K = r.value, wn = s.page, nn = s.rowsById, vn = s.selectSubRows, Hn = vn === void 0 || vn, dn = s.isAllPageRowsSelected, gn = s.getSubRows, Vn = K !== void 0 ? K : !dn, Sn = d({}, n.selectedRowIds);
          return wn.forEach(function(Gn) {
            return function e(t) {
              var u = nn[t];
              if (u.isGrouped || (Vn ? Sn[t] = !0 : delete Sn[t]), Hn && gn(u))
                return gn(u).forEach(function(a) {
                  return e(a.id);
                });
            }(Gn.id);
          }), d({}, n, { selectedRowIds: Sn });
        }
        return n;
      }
      function ao(n) {
        var r = n.data, i = n.rows, s = n.getHooks, v = n.plugins, g = n.rowsById, h = n.nonGroupedRowsById, D = h === void 0 ? g : h, R = n.autoResetSelectedRows, T = R === void 0 || R, V = n.state.selectedRowIds, W = n.selectSubRows, G = W === void 0 || W, L = n.dispatch, H = n.page, X = n.getSubRows;
        Rn(v, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var U = C.useMemo(function() {
          var gn = [];
          return i.forEach(function(Vn) {
            var Sn = G ? function Gn(e, t, u) {
              if (t[e.id])
                return !0;
              var a = u(e);
              if (a && a.length) {
                var p = !0, m = !1;
                return a.forEach(function(c) {
                  m && !p || (Gn(c, t, u) ? m = !0 : p = !1);
                }), !!p || !!m && null;
              }
              return !1;
            }(Vn, V, X) : !!V[Vn.id];
            Vn.isSelected = !!Sn, Vn.isSomeSelected = Sn === null, Sn && gn.push(Vn);
          }), gn;
        }, [i, G, V, X]), rn = !!(Object.keys(D).length && Object.keys(V).length), Pn = rn;
        rn && Object.keys(D).some(function(gn) {
          return !V[gn];
        }) && (rn = !1), rn || H && H.length && H.some(function(gn) {
          var Vn = gn.id;
          return !V[Vn];
        }) && (Pn = !1);
        var un = In(T);
        xn(function() {
          un() && L({ type: M.resetSelectedRows });
        }, [L, r]);
        var K = C.useCallback(function(gn) {
          return L({ type: M.toggleAllRowsSelected, value: gn });
        }, [L]), wn = C.useCallback(function(gn) {
          return L({ type: M.toggleAllPageRowsSelected, value: gn });
        }, [L]), nn = C.useCallback(function(gn, Vn) {
          return L({ type: M.toggleRowSelected, id: gn, value: Vn });
        }, [L]), vn = In(n), Hn = cn(s().getToggleAllRowsSelectedProps, { instance: vn() }), dn = cn(s().getToggleAllPageRowsSelectedProps, { instance: vn() });
        Object.assign(n, { selectedFlatRows: U, isAllRowsSelected: rn, isAllPageRowsSelected: Pn, toggleRowSelected: nn, toggleAllRowsSelected: K, getToggleAllRowsSelectedProps: Hn, getToggleAllPageRowsSelectedProps: dn, toggleAllPageRowsSelected: wn });
      }
      function $o(n, r) {
        var i = r.instance;
        n.toggleRowSelected = function(s) {
          return i.toggleRowSelected(n.id, s);
        }, n.getToggleRowSelectedProps = cn(i.getHooks().getToggleRowSelectedProps, { instance: i, row: n });
      }
      var ro = function(n) {
        return {};
      }, uo = function(n) {
        return {};
      };
      M.setRowState = "setRowState", M.setCellState = "setCellState", M.resetRowState = "resetRowState";
      var Mt = function(n) {
        n.stateReducers.push(Zo), n.useInstance.push(io), n.prepareRow.push(Qo);
      };
      function Zo(n, r, i, s) {
        var v = s.initialRowStateAccessor, g = v === void 0 ? ro : v, h = s.initialCellStateAccessor, D = h === void 0 ? uo : h, R = s.rowsById;
        if (r.type === M.init)
          return d({ rowState: {} }, n);
        if (r.type === M.resetRowState)
          return d({}, n, { rowState: s.initialState.rowState || {} });
        if (r.type === M.setRowState) {
          var T, V = r.rowId, W = r.value, G = n.rowState[V] !== void 0 ? n.rowState[V] : g(R[V]);
          return d({}, n, { rowState: d({}, n.rowState, (T = {}, T[V] = Kn(W, G), T)) });
        }
        if (r.type === M.setCellState) {
          var L, H, X, U, rn, Pn = r.rowId, un = r.columnId, K = r.value, wn = n.rowState[Pn] !== void 0 ? n.rowState[Pn] : g(R[Pn]), nn = (wn == null || (L = wn.cellState) == null ? void 0 : L[un]) !== void 0 ? wn.cellState[un] : D((H = R[Pn]) == null || (X = H.cells) == null ? void 0 : X.find(function(vn) {
            return vn.column.id === un;
          }));
          return d({}, n, { rowState: d({}, n.rowState, (rn = {}, rn[Pn] = d({}, wn, { cellState: d({}, wn.cellState || {}, (U = {}, U[un] = Kn(K, nn), U)) }), rn)) });
        }
      }
      function io(n) {
        var r = n.autoResetRowState, i = r === void 0 || r, s = n.data, v = n.dispatch, g = C.useCallback(function(R, T) {
          return v({ type: M.setRowState, rowId: R, value: T });
        }, [v]), h = C.useCallback(function(R, T, V) {
          return v({ type: M.setCellState, rowId: R, columnId: T, value: V });
        }, [v]), D = In(i);
        xn(function() {
          D() && v({ type: M.resetRowState });
        }, [s]), Object.assign(n, { setRowState: g, setCellState: h });
      }
      function Qo(n, r) {
        var i = r.instance, s = i.initialRowStateAccessor, v = s === void 0 ? ro : s, g = i.initialCellStateAccessor, h = g === void 0 ? uo : g, D = i.state.rowState;
        n && (n.state = D[n.id] !== void 0 ? D[n.id] : v(n), n.setState = function(R) {
          return i.setRowState(n.id, R);
        }, n.cells.forEach(function(R) {
          n.state.cellState || (n.state.cellState = {}), R.state = n.state.cellState[R.column.id] !== void 0 ? n.state.cellState[R.column.id] : h(R), R.setState = function(T) {
            return i.setCellState(n.id, R.column.id, T);
          };
        }));
      }
      Mt.pluginName = "useRowState", M.resetColumnOrder = "resetColumnOrder", M.setColumnOrder = "setColumnOrder";
      var lo = function(n) {
        n.stateReducers.push(so), n.visibleColumnsDeps.push(function(r, i) {
          var s = i.instance;
          return [].concat(r, [s.state.columnOrder]);
        }), n.visibleColumns.push(co), n.useInstance.push(na);
      };
      function so(n, r, i, s) {
        return r.type === M.init ? d({ columnOrder: [] }, n) : r.type === M.resetColumnOrder ? d({}, n, { columnOrder: s.initialState.columnOrder || [] }) : r.type === M.setColumnOrder ? d({}, n, { columnOrder: Kn(r.columnOrder, n.columnOrder) }) : void 0;
      }
      function co(n, r) {
        var i = r.instance.state.columnOrder;
        if (!i || !i.length)
          return n;
        for (var s = [].concat(i), v = [].concat(n), g = [], h = function() {
          var D = s.shift(), R = v.findIndex(function(T) {
            return T.id === D;
          });
          R > -1 && g.push(v.splice(R, 1)[0]);
        }; v.length && s.length; )
          h();
        return [].concat(g, v);
      }
      function na(n) {
        var r = n.dispatch;
        n.setColumnOrder = C.useCallback(function(i) {
          return r({ type: M.setColumnOrder, columnOrder: i });
        }, [r]);
      }
      lo.pluginName = "useColumnOrder", yn.canResize = !0, M.columnStartResizing = "columnStartResizing", M.columnResizing = "columnResizing", M.columnDoneResizing = "columnDoneResizing", M.resetResize = "resetResize";
      var yo = function(n) {
        n.getResizerProps = [ea], n.getHeaderProps.push({ style: { position: "relative" } }), n.stateReducers.push(ta), n.useInstance.push(aa), n.useInstanceBeforeDimensions.push(oa);
      }, ea = function(n, r) {
        var i = r.instance, s = r.header, v = i.dispatch, g = function(h, D) {
          var R = !1;
          if (h.type === "touchstart") {
            if (h.touches && h.touches.length > 1)
              return;
            R = !0;
          }
          var T, V, W = function(un) {
            var K = [];
            return function wn(nn) {
              nn.columns && nn.columns.length && nn.columns.map(wn), K.push(nn);
            }(un), K;
          }(D).map(function(un) {
            return [un.id, un.totalWidth];
          }), G = R ? Math.round(h.touches[0].clientX) : h.clientX, L = function() {
            window.cancelAnimationFrame(T), T = null, v({ type: M.columnDoneResizing });
          }, H = function() {
            window.cancelAnimationFrame(T), T = null, v({ type: M.columnResizing, clientX: V });
          }, X = function(un) {
            V = un, T || (T = window.requestAnimationFrame(H));
          }, U = { mouse: { moveEvent: "mousemove", moveHandler: function(un) {
            return X(un.clientX);
          }, upEvent: "mouseup", upHandler: function(un) {
            document.removeEventListener("mousemove", U.mouse.moveHandler), document.removeEventListener("mouseup", U.mouse.upHandler), L();
          } }, touch: { moveEvent: "touchmove", moveHandler: function(un) {
            return un.cancelable && (un.preventDefault(), un.stopPropagation()), X(un.touches[0].clientX), !1;
          }, upEvent: "touchend", upHandler: function(un) {
            document.removeEventListener(U.touch.moveEvent, U.touch.moveHandler), document.removeEventListener(U.touch.upEvent, U.touch.moveHandler), L();
          } } }, rn = R ? U.touch : U.mouse, Pn = !!function() {
            if (typeof pe == "boolean")
              return pe;
            var un = !1;
            try {
              var K = { get passive() {
                return un = !0, !1;
              } };
              window.addEventListener("test", null, K), window.removeEventListener("test", null, K);
            } catch {
              un = !1;
            }
            return pe = un;
          }() && { passive: !1 };
          document.addEventListener(rn.moveEvent, rn.moveHandler, Pn), document.addEventListener(rn.upEvent, rn.upHandler, Pn), v({ type: M.columnStartResizing, columnId: D.id, columnWidth: D.totalWidth, headerIdWidths: W, clientX: G });
        };
        return [n, { onMouseDown: function(h) {
          return h.persist() || g(h, s);
        }, onTouchStart: function(h) {
          return h.persist() || g(h, s);
        }, style: { cursor: "col-resize" }, draggable: !1, role: "separator" }];
      };
      function ta(n, r) {
        if (r.type === M.init)
          return d({ columnResizing: { columnWidths: {} } }, n);
        if (r.type === M.resetResize)
          return d({}, n, { columnResizing: { columnWidths: {} } });
        if (r.type === M.columnStartResizing) {
          var i = r.clientX, s = r.columnId, v = r.columnWidth, g = r.headerIdWidths;
          return d({}, n, { columnResizing: d({}, n.columnResizing, { startX: i, headerIdWidths: g, columnWidth: v, isResizingColumn: s }) });
        }
        if (r.type === M.columnResizing) {
          var h = r.clientX, D = n.columnResizing, R = D.startX, T = D.columnWidth, V = D.headerIdWidths, W = (h - R) / T, G = {};
          return (V === void 0 ? [] : V).forEach(function(L) {
            var H = L[0], X = L[1];
            G[H] = Math.max(X + X * W, 0);
          }), d({}, n, { columnResizing: d({}, n.columnResizing, { columnWidths: d({}, n.columnResizing.columnWidths, {}, G) }) });
        }
        return r.type === M.columnDoneResizing ? d({}, n, { columnResizing: d({}, n.columnResizing, { startX: null, isResizingColumn: null }) }) : void 0;
      }
      yo.pluginName = "useResizeColumns";
      var oa = function(n) {
        var r = n.flatHeaders, i = n.disableResizing, s = n.getHooks, v = n.state.columnResizing, g = In(n);
        r.forEach(function(h) {
          var D = Jn(h.disableResizing !== !0 && void 0, i !== !0 && void 0, !0);
          h.canResize = D, h.width = v.columnWidths[h.id] || h.originalWidth || h.width, h.isResizing = v.isResizingColumn === h.id, D && (h.getResizerProps = cn(s().getResizerProps, { instance: g(), header: h }));
        });
      };
      function aa(n) {
        var r = n.plugins, i = n.dispatch, s = n.autoResetResize, v = s === void 0 || s, g = n.columns;
        Rn(r, ["useAbsoluteLayout"], "useResizeColumns");
        var h = In(v);
        xn(function() {
          h() && i({ type: M.resetResize });
        }, [g]);
        var D = C.useCallback(function() {
          return i({ type: M.resetResize });
        }, [i]);
        Object.assign(n, { resetResizing: D });
      }
      var bt = { position: "absolute", top: 0 }, Co = function(n) {
        n.getTableBodyProps.push(ut), n.getRowProps.push(ut), n.getHeaderGroupProps.push(ut), n.getFooterGroupProps.push(ut), n.getHeaderProps.push(function(r, i) {
          var s = i.column;
          return [r, { style: d({}, bt, { left: s.totalLeft + "px", width: s.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(r, i) {
          var s = i.cell;
          return [r, { style: d({}, bt, { left: s.column.totalLeft + "px", width: s.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(r, i) {
          var s = i.column;
          return [r, { style: d({}, bt, { left: s.totalLeft + "px", width: s.totalWidth + "px" }) }];
        });
      };
      Co.pluginName = "useAbsoluteLayout";
      var ut = function(n, r) {
        return [n, { style: { position: "relative", width: r.instance.totalColumnsWidth + "px" } }];
      }, At = { display: "inline-block", boxSizing: "border-box" }, Dt = function(n, r) {
        return [n, { style: { display: "flex", width: r.instance.totalColumnsWidth + "px" } }];
      }, fo = function(n) {
        n.getRowProps.push(Dt), n.getHeaderGroupProps.push(Dt), n.getFooterGroupProps.push(Dt), n.getHeaderProps.push(function(r, i) {
          var s = i.column;
          return [r, { style: d({}, At, { width: s.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(r, i) {
          var s = i.cell;
          return [r, { style: d({}, At, { width: s.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(r, i) {
          var s = i.column;
          return [r, { style: d({}, At, { width: s.totalWidth + "px" }) }];
        });
      };
      function Nt(n) {
        n.getTableProps.push(ra), n.getRowProps.push(Rt), n.getHeaderGroupProps.push(Rt), n.getFooterGroupProps.push(Rt), n.getHeaderProps.push(ua), n.getCellProps.push(ia), n.getFooterProps.push(la);
      }
      fo.pluginName = "useBlockLayout", Nt.pluginName = "useFlexLayout";
      var ra = function(n, r) {
        return [n, { style: { minWidth: r.instance.totalColumnsMinWidth + "px" } }];
      }, Rt = function(n, r) {
        return [n, { style: { display: "flex", flex: "1 0 auto", minWidth: r.instance.totalColumnsMinWidth + "px" } }];
      }, ua = function(n, r) {
        var i = r.column;
        return [n, { style: { boxSizing: "border-box", flex: i.totalFlexWidth ? i.totalFlexWidth + " 0 auto" : void 0, minWidth: i.totalMinWidth + "px", width: i.totalWidth + "px" } }];
      }, ia = function(n, r) {
        var i = r.cell;
        return [n, { style: { boxSizing: "border-box", flex: i.column.totalFlexWidth + " 0 auto", minWidth: i.column.totalMinWidth + "px", width: i.column.totalWidth + "px" } }];
      }, la = function(n, r) {
        var i = r.column;
        return [n, { style: { boxSizing: "border-box", flex: i.totalFlexWidth ? i.totalFlexWidth + " 0 auto" : void 0, minWidth: i.totalMinWidth + "px", width: i.totalWidth + "px" } }];
      };
      function po(n) {
        n.stateReducers.push(ho), n.getTableProps.push(go), n.getHeaderProps.push(mo), n.getRowProps.push(vo);
      }
      M.columnStartResizing = "columnStartResizing", M.columnResizing = "columnResizing", M.columnDoneResizing = "columnDoneResizing", M.resetResize = "resetResize", po.pluginName = "useGridLayout";
      var go = function(n, r) {
        var i = r.instance;
        return [n, { style: { display: "grid", gridTemplateColumns: i.visibleColumns.map(function(s) {
          var v;
          return i.state.gridLayout.columnWidths[s.id] ? i.state.gridLayout.columnWidths[s.id] + "px" : (v = i.state.columnResizing) != null && v.isResizingColumn ? i.state.gridLayout.startWidths[s.id] + "px" : typeof s.width == "number" ? s.width + "px" : s.width;
        }).join(" ") } }];
      }, mo = function(n, r) {
        var i = r.column;
        return [n, { id: "header-cell-" + i.id, style: { position: "sticky", gridColumn: "span " + i.totalVisibleHeaderCount } }];
      }, vo = function(n, r) {
        var i = r.row;
        return i.isExpanded ? [n, { style: { gridColumn: "1 / " + (i.cells.length + 1) } }] : [n, {}];
      };
      function ho(n, r, i, s) {
        if (r.type === M.init)
          return d({ gridLayout: { columnWidths: {} } }, n);
        if (r.type === M.resetResize)
          return d({}, n, { gridLayout: { columnWidths: {} } });
        if (r.type === M.columnStartResizing) {
          var v = r.columnId, g = r.headerIdWidths, h = Tt(v);
          if (h !== void 0) {
            var D = s.visibleColumns.reduce(function(K, wn) {
              var nn;
              return d({}, K, ((nn = {})[wn.id] = Tt(wn.id), nn));
            }, {}), R = s.visibleColumns.reduce(function(K, wn) {
              var nn;
              return d({}, K, ((nn = {})[wn.id] = wn.minWidth, nn));
            }, {}), T = s.visibleColumns.reduce(function(K, wn) {
              var nn;
              return d({}, K, ((nn = {})[wn.id] = wn.maxWidth, nn));
            }, {}), V = g.map(function(K) {
              var wn = K[0];
              return [wn, Tt(wn)];
            });
            return d({}, n, { gridLayout: d({}, n.gridLayout, { startWidths: D, minWidths: R, maxWidths: T, headerIdGridWidths: V, columnWidth: h }) });
          }
          return n;
        }
        if (r.type === M.columnResizing) {
          var W = r.clientX, G = n.columnResizing.startX, L = n.gridLayout, H = L.columnWidth, X = L.minWidths, U = L.maxWidths, rn = L.headerIdGridWidths, Pn = (W - G) / H, un = {};
          return (rn === void 0 ? [] : rn).forEach(function(K) {
            var wn = K[0], nn = K[1];
            un[wn] = Math.min(Math.max(X[wn], nn + nn * Pn), U[wn]);
          }), d({}, n, { gridLayout: d({}, n.gridLayout, { columnWidths: d({}, n.gridLayout.columnWidths, {}, un) }) });
        }
        return r.type === M.columnDoneResizing ? d({}, n, { gridLayout: d({}, n.gridLayout, { startWidths: {}, minWidths: {}, maxWidths: {} }) }) : void 0;
      }
      function Tt(n) {
        var r, i = (r = document.getElementById("header-cell-" + n)) == null ? void 0 : r.offsetWidth;
        if (i !== void 0)
          return i;
      }
      y._UNSTABLE_usePivotColumns = St, y.actions = M, y.defaultColumn = yn, y.defaultGroupByFn = jt, y.defaultOrderByFn = Zt, y.defaultRenderer = Bn, y.emptyRenderer = w, y.ensurePluginOrder = Rn, y.flexRender = ie, y.functionalUpdate = Kn, y.loopHooks = qn, y.makePropGetter = cn, y.makeRenderer = An, y.reduceHooks = Mn, y.safeUseLayoutEffect = Zn, y.useAbsoluteLayout = Co, y.useAsyncDebounce = function(n, r) {
        r === void 0 && (r = 0);
        var i = C.useRef({}), s = In(n), v = In(r);
        return C.useCallback(function() {
          var g = P(regeneratorRuntime.mark(function h() {
            var D, R, T, V = arguments;
            return regeneratorRuntime.wrap(function(W) {
              for (; ; )
                switch (W.prev = W.next) {
                  case 0:
                    for (D = V.length, R = new Array(D), T = 0; T < D; T++)
                      R[T] = V[T];
                    return i.current.promise || (i.current.promise = new Promise(function(G, L) {
                      i.current.resolve = G, i.current.reject = L;
                    })), i.current.timeout && clearTimeout(i.current.timeout), i.current.timeout = setTimeout(P(regeneratorRuntime.mark(function G() {
                      return regeneratorRuntime.wrap(function(L) {
                        for (; ; )
                          switch (L.prev = L.next) {
                            case 0:
                              return delete i.current.timeout, L.prev = 1, L.t0 = i.current, L.next = 5, s().apply(void 0, R);
                            case 5:
                              L.t1 = L.sent, L.t0.resolve.call(L.t0, L.t1), L.next = 12;
                              break;
                            case 9:
                              L.prev = 9, L.t2 = L.catch(1), i.current.reject(L.t2);
                            case 12:
                              return L.prev = 12, delete i.current.promise, L.finish(12);
                            case 15:
                            case "end":
                              return L.stop();
                          }
                      }, G, null, [[1, 9, 12, 15]]);
                    })), v()), W.abrupt("return", i.current.promise);
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
      }, y.useBlockLayout = fo, y.useColumnOrder = lo, y.useExpanded = Te, y.useFilters = Gt, y.useFlexLayout = Nt, y.useGetLatest = In, y.useGlobalFilter = pt, y.useGridLayout = po, y.useGroupBy = vt, y.useMountedLayoutEffect = xn, y.usePagination = ht, y.useResizeColumns = yo, y.useRowSelect = to, y.useRowState = Mt, y.useSortBy = $t, y.useTable = function(n) {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          i[s - 1] = arguments[s];
        n = ae(n), i = [Ae].concat(i);
        var v = C.useRef({}), g = In(v.current);
        Object.assign(g(), d({}, n, { plugins: i, hooks: Re() })), i.filter(Boolean).forEach(function(c) {
          c(g().hooks);
        });
        var h = In(g().hooks);
        g().getHooks = h, delete g().hooks, Object.assign(g(), Mn(h().useOptions, ae(n)));
        var D = g(), R = D.data, T = D.columns, V = D.initialState, W = D.defaultColumn, G = D.getSubRows, L = D.getRowId, H = D.stateReducer, X = D.useControlledState, U = In(H), rn = C.useCallback(function(c, S) {
          if (!S.type)
            throw console.info({ action: S }), new Error("Unknown Action 👆");
          return [].concat(h().stateReducers, Array.isArray(U()) ? U() : [U()]).reduce(function(b, N) {
            return N(b, S, c, g()) || b;
          }, c);
        }, [h, U, g]), Pn = C.useReducer(rn, void 0, function() {
          return rn(V, { type: M.init });
        }), un = Pn[0], K = Pn[1], wn = Mn([].concat(h().useControlledState, [X]), un, { instance: g() });
        Object.assign(g(), { state: wn, dispatch: K });
        var nn = C.useMemo(function() {
          return _n(Mn(h().columns, T, { instance: g() }));
        }, [h, g, T].concat(Mn(h().columnsDeps, [], { instance: g() })));
        g().columns = nn;
        var vn = C.useMemo(function() {
          return Mn(h().allColumns, Me(nn), { instance: g() }).map(Cn);
        }, [nn, h, g].concat(Mn(h().allColumnsDeps, [], { instance: g() })));
        g().allColumns = vn;
        var Hn = C.useMemo(function() {
          for (var c = [], S = [], b = {}, N = [].concat(vn); N.length; ) {
            var E = N.shift();
            He({ data: R, rows: c, flatRows: S, rowsById: b, column: E, getRowId: L, getSubRows: G, accessValueHooks: h().accessValue, getInstance: g });
          }
          return [c, S, b];
        }, [vn, R, L, G, h, g]), dn = Hn[0], gn = Hn[1], Vn = Hn[2];
        Object.assign(g(), { rows: dn, initialRows: [].concat(dn), flatRows: gn, rowsById: Vn }), qn(h().useInstanceAfterData, g());
        var Sn = C.useMemo(function() {
          return Mn(h().visibleColumns, vn, { instance: g() }).map(function(c) {
            return Dn(c, W);
          });
        }, [h, vn, g, W].concat(Mn(h().visibleColumnsDeps, [], { instance: g() })));
        vn = C.useMemo(function() {
          var c = [].concat(Sn);
          return vn.forEach(function(S) {
            c.find(function(b) {
              return b.id === S.id;
            }) || c.push(S);
          }), c;
        }, [vn, Sn]), g().allColumns = vn;
        var Gn = C.useMemo(function() {
          return Mn(h().headerGroups, ye(Sn, W), g());
        }, [h, Sn, W, g].concat(Mn(h().headerGroupsDeps, [], { instance: g() })));
        g().headerGroups = Gn;
        var e = C.useMemo(function() {
          return Gn.length ? Gn[0].headers : [];
        }, [Gn]);
        g().headers = e, g().flatHeaders = Gn.reduce(function(c, S) {
          return [].concat(c, S.headers);
        }, []), qn(h().useInstanceBeforeDimensions, g());
        var t = Sn.filter(function(c) {
          return c.isVisible;
        }).map(function(c) {
          return c.id;
        }).sort().join("_");
        Sn = C.useMemo(function() {
          return Sn.filter(function(c) {
            return c.isVisible;
          });
        }, [Sn, t]), g().visibleColumns = Sn;
        var u = fe(e), a = u[0], p = u[1], m = u[2];
        return g().totalColumnsMinWidth = a, g().totalColumnsWidth = p, g().totalColumnsMaxWidth = m, qn(h().useInstance, g()), [].concat(g().flatHeaders, g().allColumns).forEach(function(c) {
          c.render = An(g(), c), c.getHeaderProps = cn(h().getHeaderProps, { instance: g(), column: c }), c.getFooterProps = cn(h().getFooterProps, { instance: g(), column: c });
        }), g().headerGroups = C.useMemo(function() {
          return Gn.filter(function(c, S) {
            return c.headers = c.headers.filter(function(b) {
              return b.headers ? function N(E) {
                return E.filter(function(q) {
                  return q.headers ? N(q.headers) : q.isVisible;
                }).length;
              }(b.headers) : b.isVisible;
            }), !!c.headers.length && (c.getHeaderGroupProps = cn(h().getHeaderGroupProps, { instance: g(), headerGroup: c, index: S }), c.getFooterGroupProps = cn(h().getFooterGroupProps, { instance: g(), headerGroup: c, index: S }), !0);
          });
        }, [Gn, g, h]), g().footerGroups = [].concat(g().headerGroups).reverse(), g().prepareRow = C.useCallback(function(c) {
          c.getRowProps = cn(h().getRowProps, { instance: g(), row: c }), c.allCells = vn.map(function(S) {
            var b = c.values[S.id], N = { column: S, row: c, value: b };
            return N.getCellProps = cn(h().getCellProps, { instance: g(), cell: N }), N.render = An(g(), S, { row: c, cell: N, value: b }), N;
          }), c.cells = Sn.map(function(S) {
            return c.allCells.find(function(b) {
              return b.column.id === S.id;
            });
          }), qn(h().prepareRow, c, { instance: g() });
        }, [h, g, vn, Sn]), g().getTableProps = cn(h().getTableProps, { instance: g() }), g().getTableBodyProps = cn(h().getTableBodyProps, { instance: g() }), qn(h().useFinalInstance, g()), g();
      }, Object.defineProperty(y, "__esModule", { value: !0 });
    });
  }(Ao, Ao.exports)), Ao.exports;
}
var Do = { exports: {} }, Ya;
function Bu() {
  return Ya || (Ya = 1, function(o, f) {
    (function(y, C) {
      C(f, I);
    })(Qa, function(y, C) {
      C = C && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
      function A(e, t, u, a, p, m, c) {
        try {
          var S = e[m](c), b = S.value;
        } catch (N) {
          u(N);
          return;
        }
        S.done ? t(b) : Promise.resolve(b).then(a, p);
      }
      function P(e) {
        return function() {
          var t = this, u = arguments;
          return new Promise(function(a, p) {
            var m = e.apply(t, u);
            function c(b) {
              A(m, a, p, c, S, "next", b);
            }
            function S(b) {
              A(m, a, p, c, S, "throw", b);
            }
            c(void 0);
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
      function F(e, t) {
        if (e == null)
          return {};
        var u = {}, a = Object.keys(e), p, m;
        for (m = 0; m < a.length; m++)
          p = a[m], !(t.indexOf(p) >= 0) && (u[p] = e[p]);
        return u;
      }
      function Fn(e, t) {
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
      function M(e) {
        var t = Fn(e, "string");
        return typeof t == "symbol" ? t : String(t);
      }
      var Bn = "Renderer Error ☝️", w = {
        init: "init"
      }, yn = function(t) {
        var u = t.value, a = u === void 0 ? "" : u;
        return a;
      }, Nn = function() {
        return C.createElement(C.Fragment, null, " ");
      }, cn = {
        Cell: yn,
        width: 150,
        minWidth: 0,
        maxWidth: Number.MAX_SAFE_INTEGER
      };
      function Mn() {
        for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++)
          t[u] = arguments[u];
        return t.reduce(function(a, p) {
          var m = p.style, c = p.className, S = F(p, ["style", "className"]);
          return a = d({}, a, {}, S), m && (a.style = a.style ? d({}, a.style || {}, {}, m || {}) : m), c && (a.className = a.className ? a.className + " " + c : c), a.className === "" && delete a.className, a;
        }, {});
      }
      function qn(e, t, u) {
        return typeof t == "function" ? qn({}, t(e, u)) : Array.isArray(t) ? Mn.apply(void 0, [e].concat(t)) : Mn(e, t);
      }
      var Rn = function(t, u) {
        return u === void 0 && (u = {}), function(a) {
          return a === void 0 && (a = {}), [].concat(t, [a]).reduce(function(p, m) {
            return qn(p, m, d({}, u, {
              userProps: a
            }));
          }, {});
        };
      }, Kn = function(t, u, a, p) {
        return a === void 0 && (a = {}), t.reduce(function(m, c) {
          var S = c(m, a);
          if (!p && typeof S > "u")
            throw console.info(c), new Error("React Table: A reducer hook ☝️ just returned undefined! This is not allowed.");
          return S;
        }, u);
      }, In = function(t, u, a) {
        return a === void 0 && (a = {}), t.forEach(function(p) {
          var m = p(u, a);
          if (typeof m < "u")
            throw console.info(p, m), new Error("React Table: A loop-type hook ☝️ just returned a value! This is not allowed.");
        });
      };
      function Zn(e, t, u, a) {
        if (a)
          throw new Error('Defining plugins in the "after" section of ensurePluginOrder is no longer supported (see plugin ' + u + ")");
        var p = e.findIndex(function(m) {
          return m.pluginName === u;
        });
        if (p === -1)
          throw new Error('The plugin "' + u + `" was not found in the plugin list!
This usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:

  ` + u + ".pluginName = '" + u + `'
`);
        t.forEach(function(m) {
          var c = e.findIndex(function(S) {
            return S.pluginName === m;
          });
          if (c > -1 && c > p)
            throw new Error("React Table: The " + u + " plugin hook must be placed after the " + m + " plugin hook!");
        });
      }
      function xn(e, t) {
        return typeof e == "function" ? e(t) : e;
      }
      function An(e) {
        var t = C.useRef();
        return t.current = e, C.useCallback(function() {
          return t.current;
        }, []);
      }
      var ie = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
      function _n(e, t) {
        var u = C.useRef(!1);
        ie(function() {
          u.current && e(), u.current = !0;
        }, t);
      }
      function Me(e, t) {
        t === void 0 && (t = 0);
        var u = C.useRef({}), a = An(e), p = An(t);
        return C.useCallback(
          /* @__PURE__ */ function() {
            var m = P(
              /* @__PURE__ */ regeneratorRuntime.mark(function c() {
                var S, b, N, E = arguments;
                return regeneratorRuntime.wrap(function(O) {
                  for (; ; )
                    switch (O.prev = O.next) {
                      case 0:
                        for (S = E.length, b = new Array(S), N = 0; N < S; N++)
                          b[N] = E[N];
                        return u.current.promise || (u.current.promise = new Promise(function(x, _) {
                          u.current.resolve = x, u.current.reject = _;
                        })), u.current.timeout && clearTimeout(u.current.timeout), u.current.timeout = setTimeout(
                          /* @__PURE__ */ P(
                            /* @__PURE__ */ regeneratorRuntime.mark(function x() {
                              return regeneratorRuntime.wrap(function(k) {
                                for (; ; )
                                  switch (k.prev = k.next) {
                                    case 0:
                                      return delete u.current.timeout, k.prev = 1, k.t0 = u.current, k.next = 5, a().apply(void 0, b);
                                    case 5:
                                      k.t1 = k.sent, k.t0.resolve.call(k.t0, k.t1), k.next = 12;
                                      break;
                                    case 9:
                                      k.prev = 9, k.t2 = k.catch(1), u.current.reject(k.t2);
                                    case 12:
                                      return k.prev = 12, delete u.current.promise, k.finish(12);
                                    case 15:
                                    case "end":
                                      return k.stop();
                                  }
                              }, x, null, [[1, 9, 12, 15]]);
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
          [a, p]
        );
      }
      function Cn(e, t, u) {
        return u === void 0 && (u = {}), function(a, p) {
          p === void 0 && (p = {});
          var m = typeof a == "string" ? t[a] : a;
          if (typeof m > "u")
            throw console.info(t), new Error(Bn);
          return Dn(m, d({}, e, {
            column: t
          }, u, {}, p));
        };
      }
      function Dn(e, t) {
        return ye(e) ? C.createElement(e, t) : e;
      }
      function ye(e) {
        return he(e) || typeof e == "function" || Jn(e);
      }
      function he(e) {
        return typeof e == "function" && function() {
          var t = Object.getPrototypeOf(e);
          return t.prototype && t.prototype.isReactComponent;
        }();
      }
      function Jn(e) {
        return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
      }
      function ee(e, t, u) {
        return u === void 0 && (u = 0), e.map(function(a) {
          return a = d({}, a, {
            parent: t,
            depth: u
          }), Ne(a), a.columns && (a.columns = ee(a.columns, a, u + 1)), a;
        });
      }
      function Pe(e) {
        return Be(e, "columns");
      }
      function Ne(e) {
        var t = e.id, u = e.accessor, a = e.Header;
        if (typeof u == "string") {
          t = t || u;
          var p = u.split(".");
          u = function(c) {
            return pe(c, p);
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
      function be(e, t) {
        if (!t)
          throw new Error();
        return Object.assign(e, d({
          // Make sure there is a fallback header, just in case
          Header: Nn,
          Footer: Nn
        }, cn, {}, t, {}, e)), Object.assign(e, {
          originalWidth: e.width
        }), e;
      }
      function Ee(e, t, u) {
        u === void 0 && (u = function() {
          return {};
        });
        for (var a = [], p = e, m = 0, c = function() {
          return m++;
        }, S = function() {
          var N = {
            headers: []
          }, E = [], q = p.some(function(O) {
            return O.parent;
          });
          p.forEach(function(O) {
            var x = [].concat(E).reverse()[0], _;
            if (q) {
              if (O.parent)
                _ = d({}, O.parent, {
                  originalId: O.parent.id,
                  id: O.parent.id + "_" + c(),
                  headers: [O]
                }, u(O));
              else {
                var k = O.id + "_placeholder";
                _ = be(d({
                  originalId: k,
                  id: O.id + "_placeholder_" + c(),
                  placeholderOf: O,
                  headers: [O]
                }, u(O)), t);
              }
              x && x.originalId === _.originalId ? x.headers.push(O) : E.push(_);
            }
            N.headers.push(O);
          }), a.push(N), p = E;
        }; p.length; )
          S();
        return a.reverse();
      }
      var Ce = /* @__PURE__ */ new Map();
      function pe(e, t, u) {
        if (!t)
          return e;
        var a = typeof t == "function" ? t : JSON.stringify(t), p = Ce.get(a) || function() {
          var c = Ae(t);
          return Ce.set(a, c), c;
        }(), m;
        try {
          m = p.reduce(function(c, S) {
            return c[S];
          }, e);
        } catch {
        }
        return typeof m < "u" ? m : u;
      }
      function te() {
        for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++)
          t[u] = arguments[u];
        for (var a = 0; a < t.length; a += 1)
          if (typeof t[a] < "u")
            return t[a];
      }
      function Oe(e) {
        if (typeof e == "function")
          return e;
      }
      function Be(e, t) {
        var u = [], a = function p(m) {
          m.forEach(function(c) {
            c[t] ? p(c[t]) : u.push(c);
          });
        };
        return a(e), u;
      }
      function B(e, t) {
        var u = t.manualExpandedKey, a = t.expanded, p = t.expandSubRows, m = p === void 0 ? !0 : p, c = [], S = function b(N, E) {
          E === void 0 && (E = !0), N.isExpanded = N.original && N.original[u] || a[N.id], N.canExpand = N.subRows && !!N.subRows.length, E && c.push(N), N.subRows && N.subRows.length && N.isExpanded && N.subRows.forEach(function(q) {
            return b(q, m);
          });
        };
        return e.forEach(function(b) {
          return S(b);
        }), c;
      }
      function z(e, t, u) {
        return Oe(e) || t[e] || u[e] || u.text;
      }
      function an(e, t, u) {
        return e ? e(t, u) : typeof t > "u";
      }
      function en() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var Wn = null;
      function Xn() {
        if (typeof Wn == "boolean")
          return Wn;
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
        return Wn = e, Wn;
      }
      var Se = /\[/g, Re = /\]/g;
      function Ae(e) {
        return De(e).map(function(t) {
          return String(t).replace(".", "_");
        }).join(".").replace(Se, ".").replace(Re, "").split(".");
      }
      function De(e, t) {
        if (t === void 0 && (t = []), !Array.isArray(e))
          t.push(e);
        else
          for (var u = 0; u < e.length; u += 1)
            De(e[u], t);
        return t;
      }
      var Ie = function(t) {
        return d({
          role: "table"
        }, t);
      }, _e = function(t) {
        return d({
          role: "rowgroup"
        }, t);
      }, de = function(t, u) {
        var a = u.column;
        return d({
          key: "header_" + a.id,
          colSpan: a.totalVisibleHeaderCount,
          role: "columnheader"
        }, t);
      }, se = function(t, u) {
        var a = u.column;
        return d({
          key: "footer_" + a.id,
          colSpan: a.totalVisibleHeaderCount
        }, t);
      }, ge = function(t, u) {
        var a = u.index;
        return d({
          key: "headerGroup_" + a,
          role: "row"
        }, t);
      }, me = function(t, u) {
        var a = u.index;
        return d({
          key: "footerGroup_" + a
        }, t);
      }, Xe = function(t, u) {
        var a = u.row;
        return d({
          key: "row_" + a.id,
          role: "row"
        }, t);
      }, Q = function(t, u) {
        var a = u.cell;
        return d({
          key: "cell_" + a.row.id + "_" + a.column.id,
          role: "cell"
        }, t);
      };
      function Tn() {
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
          getTableProps: [Ie],
          getTableBodyProps: [_e],
          getHeaderGroupProps: [ge],
          getFooterGroupProps: [me],
          getHeaderProps: [de],
          getFooterProps: [se],
          getRowProps: [Xe],
          getCellProps: [Q],
          useFinalInstance: []
        };
      }
      w.resetHiddenColumns = "resetHiddenColumns", w.toggleHideColumn = "toggleHideColumn", w.setHiddenColumns = "setHiddenColumns", w.toggleHideAllColumns = "toggleHideAllColumns";
      var Qn = function(t) {
        t.getToggleHiddenProps = [ae], t.getToggleHideAllColumnsProps = [fe], t.stateReducers.push(He), t.useInstanceBeforeDimensions.push(Te), t.headerGroupsDeps.push(function(u, a) {
          var p = a.instance;
          return [].concat(u, [p.state.hiddenColumns]);
        }), t.useInstance.push(Ye);
      };
      Qn.pluginName = "useColumnVisibility";
      var ae = function(t, u) {
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
      }, fe = function(t, u) {
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
        if (t.type === w.init)
          return d({
            hiddenColumns: []
          }, e);
        if (t.type === w.resetHiddenColumns)
          return d({}, e, {
            hiddenColumns: a.initialState.hiddenColumns || []
          });
        if (t.type === w.toggleHideColumn) {
          var p = typeof t.value < "u" ? t.value : !e.hiddenColumns.includes(t.columnId), m = p ? [].concat(e.hiddenColumns, [t.columnId]) : e.hiddenColumns.filter(function(S) {
            return S !== t.columnId;
          });
          return d({}, e, {
            hiddenColumns: m
          });
        }
        if (t.type === w.setHiddenColumns)
          return d({}, e, {
            hiddenColumns: xn(t.value, e.hiddenColumns)
          });
        if (t.type === w.toggleHideAllColumns) {
          var c = typeof t.value < "u" ? t.value : !e.hiddenColumns.length;
          return d({}, e, {
            hiddenColumns: c ? a.allColumns.map(function(S) {
              return S.id;
            }) : []
          });
        }
      }
      function Te(e) {
        var t = e.headers, u = e.state.hiddenColumns, a = C.useRef(!1);
        a.current;
        var p = function c(S, b) {
          S.isVisible = b && !u.includes(S.id);
          var N = 0;
          return S.headers && S.headers.length ? S.headers.forEach(function(E) {
            return N += c(E, S.isVisible);
          }) : N = S.isVisible ? 1 : 0, S.totalVisibleHeaderCount = N, N;
        }, m = 0;
        t.forEach(function(c) {
          return m += p(c, !0);
        });
      }
      function Ye(e) {
        var t = e.columns, u = e.flatHeaders, a = e.dispatch, p = e.allColumns, m = e.getHooks, c = e.state.hiddenColumns, S = e.autoResetHiddenColumns, b = S === void 0 ? !0 : S, N = An(e), E = p.length === c.length, q = C.useCallback(function(Z, sn) {
          return a({
            type: w.toggleHideColumn,
            columnId: Z,
            value: sn
          });
        }, [a]), O = C.useCallback(function(Z) {
          return a({
            type: w.setHiddenColumns,
            value: Z
          });
        }, [a]), x = C.useCallback(function(Z) {
          return a({
            type: w.toggleHideAllColumns,
            value: Z
          });
        }, [a]), _ = Rn(m().getToggleHideAllColumnsProps, {
          instance: N()
        });
        u.forEach(function(Z) {
          Z.toggleHidden = function(sn) {
            a({
              type: w.toggleHideColumn,
              columnId: Z.id,
              value: sn
            });
          }, Z.getToggleHiddenProps = Rn(m().getToggleHiddenProps, {
            instance: N(),
            column: Z
          });
        });
        var k = An(b);
        _n(function() {
          k() && a({
            type: w.resetHiddenColumns
          });
        }, [a, t]), Object.assign(e, {
          allColumnsHidden: E,
          toggleHideColumn: q,
          setHiddenColumns: O,
          toggleHideAllColumns: x,
          getToggleHideAllColumnsProps: _
        });
      }
      var je = {}, Ue = {}, We = function(t, u, a) {
        return t;
      }, Je = function(t, u) {
        return t.subRows || [];
      }, Ge = function(t, u, a) {
        return "" + (a ? [a.id, u].join(".") : u);
      }, xe = function(t) {
        return t;
      };
      function Fe(e) {
        var t = e.initialState, u = t === void 0 ? je : t, a = e.defaultColumn, p = a === void 0 ? Ue : a, m = e.getSubRows, c = m === void 0 ? Je : m, S = e.getRowId, b = S === void 0 ? Ge : S, N = e.stateReducer, E = N === void 0 ? We : N, q = e.useControlledState, O = q === void 0 ? xe : q, x = F(e, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);
        return d({}, x, {
          initialState: u,
          defaultColumn: p,
          getSubRows: c,
          getRowId: b,
          stateReducer: E,
          useControlledState: O
        });
      }
      var at = function(t) {
        for (var u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++)
          a[p - 1] = arguments[p];
        t = Fe(t), a = [Qn].concat(a);
        var m = C.useRef({}), c = An(m.current);
        Object.assign(c(), d({}, t, {
          plugins: a,
          hooks: Tn()
        })), a.filter(Boolean).forEach(function(fn) {
          fn(c().hooks);
        });
        var S = An(c().hooks);
        c().getHooks = S, delete c().hooks, Object.assign(c(), Kn(S().useOptions, Fe(t)));
        var b = c(), N = b.data, E = b.columns, q = b.initialState, O = b.defaultColumn, x = b.getSubRows, _ = b.getRowId, k = b.stateReducer, Z = b.useControlledState, sn = An(k), pn = C.useCallback(function(fn, jn) {
          if (!jn.type)
            throw console.info({
              action: jn
            }), new Error("Unknown Action 👆");
          return [].concat(S().stateReducers, Array.isArray(sn()) ? sn() : [sn()]).reduce(function(oe, ve) {
            return ve(oe, jn, fn, c()) || oe;
          }, fn);
        }, [S, sn, c]), j = C.useReducer(pn, void 0, function() {
          return pn(q, {
            type: w.init
          });
        }), bn = j[0], On = j[1], J = Kn([].concat(S().useControlledState, [Z]), bn, {
          instance: c()
        });
        Object.assign(c(), {
          state: J,
          dispatch: On
        });
        var Y = C.useMemo(function() {
          return ee(Kn(S().columns, E, {
            instance: c()
          }));
        }, [S, c, E].concat(Kn(S().columnsDeps, [], {
          instance: c()
        })));
        c().columns = Y;
        var $ = C.useMemo(function() {
          return Kn(S().allColumns, Pe(Y), {
            instance: c()
          }).map(Ne);
        }, [Y, S, c].concat(Kn(S().allColumnsDeps, [], {
          instance: c()
        })));
        c().allColumns = $;
        var ln = C.useMemo(function() {
          for (var fn = [], jn = [], oe = {}, ve = [].concat($); ve.length; ) {
            var ue = ve.shift();
            Bt({
              data: N,
              rows: fn,
              flatRows: jn,
              rowsById: oe,
              column: ue,
              getRowId: _,
              getSubRows: x,
              accessValueHooks: S().accessValue,
              getInstance: c
            });
          }
          return [fn, jn, oe];
        }, [$, N, _, x, S, c]), En = ln[0], Ln = ln[1], zn = ln[2];
        Object.assign(c(), {
          rows: En,
          initialRows: [].concat(En),
          flatRows: Ln,
          rowsById: zn
          // materializedColumns,
        }), In(S().useInstanceAfterData, c());
        var tn = C.useMemo(function() {
          return Kn(S().visibleColumns, $, {
            instance: c()
          }).map(function(fn) {
            return be(fn, O);
          });
        }, [S, $, c, O].concat(Kn(S().visibleColumnsDeps, [], {
          instance: c()
        })));
        $ = C.useMemo(function() {
          var fn = [].concat(tn);
          return $.forEach(function(jn) {
            fn.find(function(oe) {
              return oe.id === jn.id;
            }) || fn.push(jn);
          }), fn;
        }, [$, tn]), c().allColumns = $;
        {
          var re = $.filter(function(fn, jn) {
            return $.findIndex(function(oe) {
              return oe.id === fn.id;
            }) !== jn;
          });
          if (re.length)
            throw console.info($), new Error('Duplicate columns were found with ids: "' + re.map(function(fn) {
              return fn.id;
            }).join(", ") + '" in the columns array above');
        }
        var kn = C.useMemo(function() {
          return Kn(S().headerGroups, Ee(tn, O), c());
        }, [S, tn, O, c].concat(Kn(S().headerGroupsDeps, [], {
          instance: c()
        })));
        c().headerGroups = kn;
        var mn = C.useMemo(function() {
          return kn.length ? kn[0].headers : [];
        }, [kn]);
        c().headers = mn, c().flatHeaders = kn.reduce(function(fn, jn) {
          return [].concat(fn, jn.headers);
        }, []), In(S().useInstanceBeforeDimensions, c());
        var hn = tn.filter(function(fn) {
          return fn.isVisible;
        }).map(function(fn) {
          return fn.id;
        }).sort().join("_");
        tn = C.useMemo(
          function() {
            return tn.filter(function(fn) {
              return fn.isVisible;
            });
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [tn, hn]
        ), c().visibleColumns = tn;
        var Yn = dt(mn), le = Yn[0], et = Yn[1], Pt = Yn[2];
        return c().totalColumnsMinWidth = le, c().totalColumnsWidth = et, c().totalColumnsMaxWidth = Pt, In(S().useInstance, c()), [].concat(c().flatHeaders, c().allColumns).forEach(function(fn) {
          fn.render = Cn(c(), fn), fn.getHeaderProps = Rn(S().getHeaderProps, {
            instance: c(),
            column: fn
          }), fn.getFooterProps = Rn(S().getFooterProps, {
            instance: c(),
            column: fn
          });
        }), c().headerGroups = C.useMemo(function() {
          return kn.filter(function(fn, jn) {
            return fn.headers = fn.headers.filter(function(oe) {
              var ve = function ue(Ve) {
                return Ve.filter(function(ce) {
                  return ce.headers ? ue(ce.headers) : ce.isVisible;
                }).length;
              };
              return oe.headers ? ve(oe.headers) : oe.isVisible;
            }), fn.headers.length ? (fn.getHeaderGroupProps = Rn(S().getHeaderGroupProps, {
              instance: c(),
              headerGroup: fn,
              index: jn
            }), fn.getFooterGroupProps = Rn(S().getFooterGroupProps, {
              instance: c(),
              headerGroup: fn,
              index: jn
            }), !0) : !1;
          });
        }, [kn, c, S]), c().footerGroups = [].concat(c().headerGroups).reverse(), c().prepareRow = C.useCallback(function(fn) {
          fn.getRowProps = Rn(S().getRowProps, {
            instance: c(),
            row: fn
          }), fn.allCells = $.map(function(jn) {
            var oe = fn.values[jn.id], ve = {
              column: jn,
              row: fn,
              value: oe
            };
            return ve.getCellProps = Rn(S().getCellProps, {
              instance: c(),
              cell: ve
            }), ve.render = Cn(c(), jn, {
              row: fn,
              cell: ve,
              value: oe
            }), ve;
          }), fn.cells = tn.map(function(jn) {
            return fn.allCells.find(function(oe) {
              return oe.column.id === jn.id;
            });
          }), In(S().prepareRow, fn, {
            instance: c()
          });
        }, [S, c, $, tn]), c().getTableProps = Rn(S().getTableProps, {
          instance: c()
        }), c().getTableBodyProps = Rn(S().getTableBodyProps, {
          instance: c()
        }), In(S().useFinalInstance, c()), c();
      };
      function dt(e, t) {
        t === void 0 && (t = 0);
        var u = 0, a = 0, p = 0, m = 0;
        return e.forEach(function(c) {
          var S = c.headers;
          if (c.totalLeft = t, S && S.length) {
            var b = dt(S, t), N = b[0], E = b[1], q = b[2], O = b[3];
            c.totalMinWidth = N, c.totalWidth = E, c.totalMaxWidth = q, c.totalFlexWidth = O;
          } else
            c.totalMinWidth = c.minWidth, c.totalWidth = Math.min(Math.max(c.minWidth, c.width), c.maxWidth), c.totalMaxWidth = c.maxWidth, c.totalFlexWidth = c.canResize ? c.totalWidth : 0;
          c.isVisible && (t += c.totalWidth, u += c.totalMinWidth, a += c.totalWidth, p += c.totalMaxWidth, m += c.totalFlexWidth);
        }), [u, a, p, m];
      }
      function Bt(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.rowsById, m = e.column, c = e.getRowId, S = e.getSubRows, b = e.accessValueHooks, N = e.getInstance, E = function q(O, x, _, k, Z) {
          _ === void 0 && (_ = 0);
          var sn = O, pn = c(O, x, k), j = p[pn];
          if (j)
            j.subRows && j.originalSubRows.forEach(function(On, J) {
              return q(On, J, _ + 1, j);
            });
          else if (j = {
            id: pn,
            original: sn,
            index: x,
            depth: _,
            cells: [{}]
            // This is a dummy cell
          }, j.cells.map = en, j.cells.filter = en, j.cells.forEach = en, j.cells[0].getCellProps = en, j.values = {}, Z.push(j), a.push(j), p[pn] = j, j.originalSubRows = S(O, x), j.originalSubRows) {
            var bn = [];
            j.originalSubRows.forEach(function(On, J) {
              return q(On, J, _ + 1, j, bn);
            }), j.subRows = bn;
          }
          m.accessor && (j.values[m.id] = m.accessor(O, x, j, Z, t)), j.values[m.id] = Kn(b, j.values[m.id], {
            row: j,
            column: m,
            instance: N()
          }, !0);
        };
        t.forEach(function(q, O) {
          return E(q, O, 0, void 0, u);
        });
      }
      w.resetExpanded = "resetExpanded", w.toggleRowExpanded = "toggleRowExpanded", w.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var ft = function(t) {
        t.getToggleAllRowsExpandedProps = [Ht], t.getToggleRowExpandedProps = [Ft], t.stateReducers.push(Wt), t.useInstance.push($e), t.prepareRow.push(Gt);
      };
      ft.pluginName = "useExpanded";
      var Ht = function(t, u) {
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
      }, Ft = function(t, u) {
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
      function Wt(e, t, u, a) {
        if (t.type === w.init)
          return d({
            expanded: {}
          }, e);
        if (t.type === w.resetExpanded)
          return d({}, e, {
            expanded: a.initialState.expanded || {}
          });
        if (t.type === w.toggleAllRowsExpanded) {
          var p = t.value, m = a.rowsById, c = Object.keys(m).length === Object.keys(e.expanded).length, S = typeof p < "u" ? p : !c;
          if (S) {
            var b = {};
            return Object.keys(m).forEach(function(Z) {
              b[Z] = !0;
            }), d({}, e, {
              expanded: b
            });
          }
          return d({}, e, {
            expanded: {}
          });
        }
        if (t.type === w.toggleRowExpanded) {
          var N = t.id, E = t.value, q = e.expanded[N], O = typeof E < "u" ? E : !q;
          if (!q && O) {
            var x;
            return d({}, e, {
              expanded: d({}, e.expanded, (x = {}, x[N] = !0, x))
            });
          } else if (q && !O) {
            var _ = e.expanded;
            _[N];
            var k = F(_, [N].map(M));
            return d({}, e, {
              expanded: k
            });
          } else
            return e;
        }
      }
      function $e(e) {
        var t = e.data, u = e.rows, a = e.rowsById, p = e.manualExpandedKey, m = p === void 0 ? "expanded" : p, c = e.paginateExpandedRows, S = c === void 0 ? !0 : c, b = e.expandSubRows, N = b === void 0 ? !0 : b, E = e.autoResetExpanded, q = E === void 0 ? !0 : E, O = e.getHooks, x = e.plugins, _ = e.state.expanded, k = e.dispatch;
        Zn(x, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var Z = An(q), sn = !!(Object.keys(a).length && Object.keys(_).length);
        sn && Object.keys(a).some(function($) {
          return !_[$];
        }) && (sn = !1), _n(function() {
          Z() && k({
            type: w.resetExpanded
          });
        }, [k, t]);
        var pn = C.useCallback(function($, ln) {
          k({
            type: w.toggleRowExpanded,
            id: $,
            value: ln
          });
        }, [k]), j = C.useCallback(function($) {
          return k({
            type: w.toggleAllRowsExpanded,
            value: $
          });
        }, [k]), bn = C.useMemo(function() {
          return S ? B(u, {
            manualExpandedKey: m,
            expanded: _,
            expandSubRows: N
          }) : u;
        }, [S, u, m, _, N]), On = C.useMemo(function() {
          return Lo(_);
        }, [_]), J = An(e), Y = Rn(O().getToggleAllRowsExpandedProps, {
          instance: J()
        });
        Object.assign(e, {
          preExpandedRows: u,
          expandedRows: bn,
          rows: bn,
          expandedDepth: On,
          isAllRowsExpanded: sn,
          toggleRowExpanded: pn,
          toggleAllRowsExpanded: j,
          getToggleAllRowsExpandedProps: Y
        });
      }
      function Gt(e, t) {
        var u = t.instance.getHooks, a = t.instance;
        e.toggleRowExpanded = function(p) {
          return a.toggleRowExpanded(e.id, p);
        }, e.getToggleRowExpandedProps = Rn(u().getToggleRowExpandedProps, {
          instance: a,
          row: e
        });
      }
      function Lo(e) {
        var t = 0;
        return Object.keys(e).forEach(function(u) {
          var a = u.split(".");
          t = Math.max(t, a.length);
        }), t;
      }
      var xt = function(t, u, a) {
        return t = t.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return String(c).toLowerCase().includes(String(a).toLowerCase());
          });
        }), t;
      };
      xt.autoRemove = function(e) {
        return !e;
      };
      var pt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return c !== void 0 ? String(c).toLowerCase() === String(a).toLowerCase() : !0;
          });
        });
      };
      pt.autoRemove = function(e) {
        return !e;
      };
      var Vt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return c !== void 0 ? String(c) === String(a) : !0;
          });
        });
      };
      Vt.autoRemove = function(e) {
        return !e;
      };
      var Kt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return c.includes(a);
          });
        });
      };
      Kt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var gt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return c && c.length && a.every(function(S) {
              return c.includes(S);
            });
          });
        });
      };
      gt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var mt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return c && c.length && a.some(function(S) {
              return c.includes(S);
            });
          });
        });
      };
      mt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var qt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return a.includes(c);
          });
        });
      };
      qt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var zt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return c === a;
          });
        });
      };
      zt.autoRemove = function(e) {
        return typeof e > "u";
      };
      var vt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var c = p.values[m];
            return c == a;
          });
        });
      };
      vt.autoRemove = function(e) {
        return e == null;
      };
      var _t = function(t, u, a) {
        var p = a || [], m = p[0], c = p[1];
        if (m = typeof m == "number" ? m : -1 / 0, c = typeof c == "number" ? c : 1 / 0, m > c) {
          var S = m;
          m = c, c = S;
        }
        return t.filter(function(b) {
          return u.some(function(N) {
            var E = b.values[N];
            return E >= m && E <= c;
          });
        });
      };
      _t.autoRemove = function(e) {
        return !e || typeof e[0] != "number" && typeof e[1] != "number";
      };
      var Ze = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        text: xt,
        exactText: pt,
        exactTextCase: Vt,
        includes: Kt,
        includesAll: gt,
        includesSome: mt,
        includesValue: qt,
        exact: zt,
        equals: vt,
        between: _t
      });
      w.resetFilters = "resetFilters", w.setFilter = "setFilter", w.setAllFilters = "setAllFilters";
      var Xt = function(t) {
        t.stateReducers.push(ko), t.useInstance.push(Oo);
      };
      Xt.pluginName = "useFilters";
      function ko(e, t, u, a) {
        if (t.type === w.init)
          return d({
            filters: []
          }, e);
        if (t.type === w.resetFilters)
          return d({}, e, {
            filters: a.initialState.filters || []
          });
        if (t.type === w.setFilter) {
          var p = t.columnId, m = t.filterValue, c = a.allColumns, S = a.filterTypes, b = c.find(function(k) {
            return k.id === p;
          });
          if (!b)
            throw new Error("React-Table: Could not find a column with id: " + p);
          var N = z(b.filter, S || {}, Ze), E = e.filters.find(function(k) {
            return k.id === p;
          }), q = xn(m, E && E.value);
          return an(N.autoRemove, q, b) ? d({}, e, {
            filters: e.filters.filter(function(k) {
              return k.id !== p;
            })
          }) : E ? d({}, e, {
            filters: e.filters.map(function(k) {
              return k.id === p ? {
                id: p,
                value: q
              } : k;
            })
          }) : d({}, e, {
            filters: [].concat(e.filters, [{
              id: p,
              value: q
            }])
          });
        }
        if (t.type === w.setAllFilters) {
          var O = t.filters, x = a.allColumns, _ = a.filterTypes;
          return d({}, e, {
            // Filter out undefined values
            filters: xn(O, e.filters).filter(function(k) {
              var Z = x.find(function(pn) {
                return pn.id === k.id;
              }), sn = z(Z.filter, _ || {}, Ze);
              return !an(sn.autoRemove, k.value, Z);
            })
          });
        }
      }
      function Oo(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.rowsById, m = e.allColumns, c = e.filterTypes, S = e.manualFilters, b = e.defaultCanFilter, N = b === void 0 ? !1 : b, E = e.disableFilters, q = e.state.filters, O = e.dispatch, x = e.autoResetFilters, _ = x === void 0 ? !0 : x, k = C.useCallback(function(J, Y) {
          O({
            type: w.setFilter,
            columnId: J,
            filterValue: Y
          });
        }, [O]), Z = C.useCallback(function(J) {
          O({
            type: w.setAllFilters,
            filters: J
          });
        }, [O]);
        m.forEach(function(J) {
          var Y = J.id, $ = J.accessor, ln = J.defaultCanFilter, En = J.disableFilters;
          J.canFilter = $ ? te(En === !0 ? !1 : void 0, E === !0 ? !1 : void 0, !0) : te(ln, N, !1), J.setFilter = function(zn) {
            return k(J.id, zn);
          };
          var Ln = q.find(function(zn) {
            return zn.id === Y;
          });
          J.filterValue = Ln && Ln.value;
        });
        var sn = C.useMemo(function() {
          if (S || !q.length)
            return [u, a, p];
          var J = [], Y = {}, $ = function ln(En, Ln) {
            Ln === void 0 && (Ln = 0);
            var zn = En;
            return zn = q.reduce(function(tn, re) {
              var kn = re.id, mn = re.value, hn = m.find(function(le) {
                return le.id === kn;
              });
              if (!hn)
                return tn;
              Ln === 0 && (hn.preFilteredRows = tn);
              var Yn = z(hn.filter, c || {}, Ze);
              return Yn ? (hn.filteredRows = Yn(tn, [kn], mn), hn.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + hn.id + "."), tn);
            }, En), zn.forEach(function(tn) {
              J.push(tn), Y[tn.id] = tn, tn.subRows && (tn.subRows = tn.subRows && tn.subRows.length > 0 ? ln(tn.subRows, Ln + 1) : tn.subRows);
            }), zn;
          };
          return [$(u), J, Y];
        }, [S, q, u, a, p, m, c]), pn = sn[0], j = sn[1], bn = sn[2];
        C.useMemo(function() {
          var J = m.filter(function(Y) {
            return !q.find(function($) {
              return $.id === Y.id;
            });
          });
          J.forEach(function(Y) {
            Y.preFilteredRows = pn, Y.filteredRows = pn;
          });
        }, [pn, q, m]);
        var On = An(_);
        _n(function() {
          On() && O({
            type: w.resetFilters
          });
        }, [O, S ? null : t]), Object.assign(e, {
          preFilteredRows: u,
          preFilteredFlatRows: a,
          preFilteredRowsById: p,
          filteredRows: pn,
          filteredFlatRows: j,
          filteredRowsById: bn,
          rows: pn,
          flatRows: j,
          rowsById: bn,
          setFilter: k,
          setAllFilters: Z
        });
      }
      w.resetGlobalFilter = "resetGlobalFilter", w.setGlobalFilter = "setGlobalFilter";
      var Yt = function(t) {
        t.stateReducers.push(jt), t.useInstance.push(Ut);
      };
      Yt.pluginName = "useGlobalFilter";
      function jt(e, t, u, a) {
        if (t.type === w.resetGlobalFilter)
          return d({}, e, {
            globalFilter: a.initialState.globalFilter || void 0
          });
        if (t.type === w.setGlobalFilter) {
          var p = t.filterValue, m = a.userFilterTypes, c = z(a.globalFilter, m || {}, Ze), S = xn(p, e.globalFilter);
          if (an(c.autoRemove, S)) {
            e.globalFilter;
            var b = F(e, ["globalFilter"]);
            return b;
          }
          return d({}, e, {
            globalFilter: S
          });
        }
      }
      function Ut(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.rowsById, m = e.allColumns, c = e.filterTypes, S = e.globalFilter, b = e.manualGlobalFilter, N = e.state.globalFilter, E = e.dispatch, q = e.autoResetGlobalFilter, O = q === void 0 ? !0 : q, x = e.disableGlobalFilter, _ = C.useCallback(function(bn) {
          E({
            type: w.setGlobalFilter,
            filterValue: bn
          });
        }, [E]), k = C.useMemo(function() {
          if (b || typeof N > "u")
            return [u, a, p];
          var bn = [], On = {}, J = z(S, c || {}, Ze);
          if (!J)
            return console.warn("Could not find a valid 'globalFilter' option."), u;
          m.forEach(function(ln) {
            var En = ln.disableGlobalFilter;
            ln.canFilter = te(En === !0 ? !1 : void 0, x === !0 ? !1 : void 0, !0);
          });
          var Y = m.filter(function(ln) {
            return ln.canFilter === !0;
          }), $ = function ln(En) {
            return En = J(En, Y.map(function(Ln) {
              return Ln.id;
            }), N), En.forEach(function(Ln) {
              bn.push(Ln), On[Ln.id] = Ln, Ln.subRows = Ln.subRows && Ln.subRows.length ? ln(Ln.subRows) : Ln.subRows;
            }), En;
          };
          return [$(u), bn, On];
        }, [b, N, S, c, m, u, a, p, x]), Z = k[0], sn = k[1], pn = k[2], j = An(O);
        _n(function() {
          j() && E({
            type: w.resetGlobalFilter
          });
        }, [E, b ? null : t]), Object.assign(e, {
          preGlobalFilteredRows: u,
          preGlobalFilteredFlatRows: a,
          preGlobalFilteredRowsById: p,
          globalFilteredRows: Z,
          globalFilteredFlatRows: sn,
          globalFilteredRowsById: pn,
          rows: Z,
          flatRows: sn,
          rowsById: pn,
          setGlobalFilter: _,
          disableGlobalFilter: x
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
      function Jt(e) {
        var t = e[0] || 0;
        return e.forEach(function(u) {
          typeof u == "number" && (t = Math.max(t, u));
        }), t;
      }
      function Bo(e) {
        var t = e[0] || 0, u = e[0] || 0;
        return e.forEach(function(a) {
          typeof a == "number" && (t = Math.min(t, a), u = Math.max(u, a));
        }), t + ".." + u;
      }
      function $t(e) {
        return rt(null, e) / e.length;
      }
      function Ho(e) {
        if (!e.length)
          return null;
        var t = Math.floor(e.length / 2), u = [].concat(e).sort(function(a, p) {
          return a - p;
        });
        return e.length % 2 !== 0 ? u[t] : (u[t - 1] + u[t]) / 2;
      }
      function Fo(e) {
        return Array.from(new Set(e).values());
      }
      function Wo(e) {
        return new Set(e).size;
      }
      function Zt(e) {
        return e.length;
      }
      var ht = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        sum: rt,
        min: Qe,
        max: Jt,
        minMax: Bo,
        average: $t,
        median: Ho,
        unique: Fo,
        uniqueCount: Wo,
        count: Zt
      }), Go = [], xo = {};
      w.resetGroupBy = "resetGroupBy", w.setGroupBy = "setGroupBy", w.toggleGroupBy = "toggleGroupBy";
      var St = function(t) {
        t.getGroupByToggleProps = [Qt], t.stateReducers.push(Vo), t.visibleColumnsDeps.push(function(u, a) {
          var p = a.instance;
          return [].concat(u, [p.state.groupBy]);
        }), t.visibleColumns.push(Ko), t.useInstance.push(zo), t.prepareRow.push(_o);
      };
      St.pluginName = "useGroupBy";
      var Qt = function(t, u) {
        var a = u.header;
        return [t, {
          onClick: a.canGroupBy ? function(p) {
            p.persist(), a.toggleGroupBy();
          } : void 0,
          style: {
            cursor: a.canGroupBy ? "pointer" : void 0
          },
          title: "Toggle GroupBy"
        }];
      };
      function Vo(e, t, u, a) {
        if (t.type === w.init)
          return d({
            groupBy: []
          }, e);
        if (t.type === w.resetGroupBy)
          return d({}, e, {
            groupBy: a.initialState.groupBy || []
          });
        if (t.type === w.setGroupBy) {
          var p = t.value;
          return d({}, e, {
            groupBy: p
          });
        }
        if (t.type === w.toggleGroupBy) {
          var m = t.columnId, c = t.value, S = typeof c < "u" ? c : !e.groupBy.includes(m);
          return S ? d({}, e, {
            groupBy: [].concat(e.groupBy, [m])
          }) : d({}, e, {
            groupBy: e.groupBy.filter(function(b) {
              return b !== m;
            })
          });
        }
      }
      function Ko(e, t) {
        var u = t.instance.state.groupBy, a = u.map(function(m) {
          return e.find(function(c) {
            return c.id === m;
          });
        }).filter(Boolean), p = e.filter(function(m) {
          return !u.includes(m.id);
        });
        return e = [].concat(a, p), e.forEach(function(m) {
          m.isGrouped = u.includes(m.id), m.groupedIndex = u.indexOf(m.id);
        }), e;
      }
      var qo = {};
      function zo(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.rowsById, m = e.allColumns, c = e.flatHeaders, S = e.groupByFn, b = S === void 0 ? no : S, N = e.manualGroupBy, E = e.aggregations, q = E === void 0 ? qo : E, O = e.plugins, x = e.state.groupBy, _ = e.dispatch, k = e.autoResetGroupBy, Z = k === void 0 ? !0 : k, sn = e.disableGroupBy, pn = e.defaultCanGroupBy, j = e.getHooks;
        Zn(O, ["useColumnOrder", "useFilters"], "useGroupBy");
        var bn = An(e);
        m.forEach(function(mn) {
          var hn = mn.accessor, Yn = mn.defaultGroupBy, le = mn.disableGroupBy;
          mn.canGroupBy = hn ? te(mn.canGroupBy, le === !0 ? !1 : void 0, sn === !0 ? !1 : void 0, !0) : te(mn.canGroupBy, Yn, pn, !1), mn.canGroupBy && (mn.toggleGroupBy = function() {
            return e.toggleGroupBy(mn.id);
          }), mn.Aggregated = mn.Aggregated || mn.Cell;
        });
        var On = C.useCallback(function(mn, hn) {
          _({
            type: w.toggleGroupBy,
            columnId: mn,
            value: hn
          });
        }, [_]), J = C.useCallback(function(mn) {
          _({
            type: w.setGroupBy,
            value: mn
          });
        }, [_]);
        c.forEach(function(mn) {
          mn.getGroupByToggleProps = Rn(j().getGroupByToggleProps, {
            instance: bn(),
            header: mn
          });
        });
        var Y = C.useMemo(function() {
          if (N || !x.length)
            return [u, a, p, Go, xo, a, p];
          var mn = x.filter(function(ue) {
            return m.find(function(Ve) {
              return Ve.id === ue;
            });
          }), hn = function(Ve, ce, So) {
            var Ke = {};
            return m.forEach(function(ne) {
              if (mn.includes(ne.id)) {
                Ke[ne.id] = ce[0] ? ce[0].values[ne.id] : null;
                return;
              }
              var wo = typeof ne.aggregate == "function" ? ne.aggregate : q[ne.aggregate] || ht[ne.aggregate];
              if (wo) {
                var it = ce.map(function(tt) {
                  return tt.values[ne.id];
                }), sa = Ve.map(function(tt) {
                  var qe = tt.values[ne.id];
                  if (!So && ne.aggregateValue) {
                    var ze = typeof ne.aggregateValue == "function" ? ne.aggregateValue : q[ne.aggregateValue] || ht[ne.aggregateValue];
                    if (!ze)
                      throw console.info({
                        column: ne
                      }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                    qe = ze(qe, tt, ne);
                  }
                  return qe;
                });
                Ke[ne.id] = wo(sa, it);
              } else {
                if (ne.aggregate)
                  throw console.info({
                    column: ne
                  }), new Error("React Table: Invalid column.aggregate option for column listed above");
                Ke[ne.id] = null;
              }
            }), Ke;
          }, Yn = [], le = {}, et = [], Pt = {}, fn = [], jn = {}, oe = function ue(Ve, ce, So) {
            if (ce === void 0 && (ce = 0), ce === mn.length)
              return Ve.map(function(it) {
                return d({}, it, {
                  depth: ce
                });
              });
            var Ke = mn[ce], ne = b(Ve, Ke), wo = Object.entries(ne).map(function(it, sa) {
              var tt = it[0], qe = it[1], ze = Ke + ":" + tt;
              ze = So ? So + ">" + ze : ze;
              var Da = ue(qe, ce + 1, ze), Na = ce ? Be(qe, "leafRows") : qe, yr = hn(Na, qe, ce), Cr = {
                id: ze,
                isGrouped: !0,
                groupByID: Ke,
                groupByVal: tt,
                values: yr,
                subRows: Da,
                leafRows: Na,
                depth: ce,
                index: sa
              };
              return Da.forEach(function(Le) {
                Yn.push(Le), le[Le.id] = Le, Le.isGrouped ? (et.push(Le), Pt[Le.id] = Le) : (fn.push(Le), jn[Le.id] = Le);
              }), Cr;
            });
            return wo;
          }, ve = oe(u);
          return ve.forEach(function(ue) {
            Yn.push(ue), le[ue.id] = ue, ue.isGrouped ? (et.push(ue), Pt[ue.id] = ue) : (fn.push(ue), jn[ue.id] = ue);
          }), [ve, Yn, le, et, Pt, fn, jn];
        }, [N, x, u, a, p, m, q, b]), $ = Y[0], ln = Y[1], En = Y[2], Ln = Y[3], zn = Y[4], tn = Y[5], re = Y[6], kn = An(Z);
        _n(function() {
          kn() && _({
            type: w.resetGroupBy
          });
        }, [_, N ? null : t]), Object.assign(e, {
          preGroupedRows: u,
          preGroupedFlatRow: a,
          preGroupedRowsById: p,
          groupedRows: $,
          groupedFlatRows: ln,
          groupedRowsById: En,
          onlyGroupedFlatRows: Ln,
          onlyGroupedRowsById: zn,
          nonGroupedFlatRows: tn,
          nonGroupedRowsById: re,
          rows: $,
          flatRows: ln,
          rowsById: En,
          toggleGroupBy: On,
          setGroupBy: J
        });
      }
      function _o(e) {
        e.allCells.forEach(function(t) {
          var u;
          t.isGrouped = t.column.isGrouped && t.column.id === e.groupByID, t.isPlaceholder = !t.isGrouped && t.column.isGrouped, t.isAggregated = !t.isGrouped && !t.isPlaceholder && ((u = e.subRows) == null ? void 0 : u.length);
        });
      }
      function no(e, t) {
        return e.reduce(function(u, a, p) {
          var m = "" + a.values[t];
          return u[m] = Array.isArray(u[m]) ? u[m] : [], u[m].push(a), u;
        }, {});
      }
      var eo = /([0-9]+)/gm, Xo = function(t, u, a) {
        var p = nt(t, u, a), m = p[0], c = p[1];
        for (m = oo(m), c = oo(c), m = m.split(eo).filter(Boolean), c = c.split(eo).filter(Boolean); m.length && c.length; ) {
          var S = m.shift(), b = c.shift(), N = parseInt(S, 10), E = parseInt(b, 10), q = [N, E].sort();
          if (isNaN(q[0])) {
            if (S > b)
              return 1;
            if (b > S)
              return -1;
            continue;
          }
          if (isNaN(q[1]))
            return isNaN(N) ? -1 : 1;
          if (N > E)
            return 1;
          if (E > N)
            return -1;
        }
        return m.length - c.length;
      };
      function Yo(e, t, u) {
        var a = nt(e, t, u), p = a[0], m = a[1];
        return p = p.getTime(), m = m.getTime(), wt(p, m);
      }
      function jo(e, t, u) {
        var a = nt(e, t, u), p = a[0], m = a[1];
        return wt(p, m);
      }
      function Uo(e, t, u) {
        var a = nt(e, t, u), p = a[0], m = a[1];
        for (p = p.split("").filter(Boolean), m = m.split("").filter(Boolean); p.length && m.length; ) {
          var c = p.shift(), S = m.shift(), b = c.toLowerCase(), N = S.toLowerCase();
          if (b > N)
            return 1;
          if (N > b)
            return -1;
          if (c > S)
            return 1;
          if (S > c)
            return -1;
        }
        return p.length - m.length;
      }
      function to(e, t, u) {
        var a = nt(e, t, u), p = a[0], m = a[1], c = /[^0-9.]/gi;
        return p = Number(String(p).replace(c, "")), m = Number(String(m).replace(c, "")), wt(p, m);
      }
      function wt(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      function nt(e, t, u) {
        return [e.values[u], t.values[u]];
      }
      function oo(e) {
        return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
      }
      var Jo = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        alphanumeric: Xo,
        datetime: Yo,
        basic: jo,
        string: Uo,
        number: to
      });
      w.resetSortBy = "resetSortBy", w.setSortBy = "setSortBy", w.toggleSortBy = "toggleSortBy", w.clearSortBy = "clearSortBy", cn.sortType = "alphanumeric", cn.sortDescFirst = !1;
      var ao = function(t) {
        t.getSortByToggleProps = [$o], t.stateReducers.push(ro), t.useInstance.push(uo);
      };
      ao.pluginName = "useSortBy";
      var $o = function(t, u) {
        var a = u.instance, p = u.column, m = a.isMultiSortEvent, c = m === void 0 ? function(S) {
          return S.shiftKey;
        } : m;
        return [t, {
          onClick: p.canSort ? function(S) {
            S.persist(), p.toggleSortBy(void 0, !a.disableMultiSort && c(S));
          } : void 0,
          style: {
            cursor: p.canSort ? "pointer" : void 0
          },
          title: p.canSort ? "Toggle SortBy" : void 0
        }];
      };
      function ro(e, t, u, a) {
        if (t.type === w.init)
          return d({
            sortBy: []
          }, e);
        if (t.type === w.resetSortBy)
          return d({}, e, {
            sortBy: a.initialState.sortBy || []
          });
        if (t.type === w.clearSortBy) {
          var p = e.sortBy, m = p.filter(function($) {
            return $.id !== t.columnId;
          });
          return d({}, e, {
            sortBy: m
          });
        }
        if (t.type === w.setSortBy) {
          var c = t.sortBy;
          return d({}, e, {
            sortBy: c
          });
        }
        if (t.type === w.toggleSortBy) {
          var S = t.columnId, b = t.desc, N = t.multi, E = a.allColumns, q = a.disableMultiSort, O = a.disableSortRemove, x = a.disableMultiRemove, _ = a.maxMultiSortColCount, k = _ === void 0 ? Number.MAX_SAFE_INTEGER : _, Z = e.sortBy, sn = E.find(function($) {
            return $.id === S;
          }), pn = sn.sortDescFirst, j = Z.find(function($) {
            return $.id === S;
          }), bn = Z.findIndex(function($) {
            return $.id === S;
          }), On = typeof b < "u" && b !== null, J = [], Y;
          return !q && N ? j ? Y = "toggle" : Y = "add" : bn !== Z.length - 1 || Z.length !== 1 ? Y = "replace" : j ? Y = "toggle" : Y = "replace", Y === "toggle" && // Must be toggling
          !O && // If disableSortRemove, disable in general
          !On && // Must not be setting desc
          (!N || !x) && // If multi, don't allow if disableMultiRemove
          (j && // Finally, detect if it should indeed be removed
          j.desc && !pn || !j.desc && pn) && (Y = "remove"), Y === "replace" ? J = [{
            id: S,
            desc: On ? b : pn
          }] : Y === "add" ? (J = [].concat(Z, [{
            id: S,
            desc: On ? b : pn
          }]), J.splice(0, J.length - k)) : Y === "toggle" ? J = Z.map(function($) {
            return $.id === S ? d({}, $, {
              desc: On ? b : !j.desc
            }) : $;
          }) : Y === "remove" && (J = Z.filter(function($) {
            return $.id !== S;
          })), d({}, e, {
            sortBy: J
          });
        }
      }
      function uo(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.allColumns, m = e.orderByFn, c = m === void 0 ? Mt : m, S = e.sortTypes, b = e.manualSortBy, N = e.defaultCanSort, E = e.disableSortBy, q = e.flatHeaders, O = e.state.sortBy, x = e.dispatch, _ = e.plugins, k = e.getHooks, Z = e.autoResetSortBy, sn = Z === void 0 ? !0 : Z;
        Zn(_, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var pn = C.useCallback(function(ln) {
          x({
            type: w.setSortBy,
            sortBy: ln
          });
        }, [x]), j = C.useCallback(function(ln, En, Ln) {
          x({
            type: w.toggleSortBy,
            columnId: ln,
            desc: En,
            multi: Ln
          });
        }, [x]), bn = An(e);
        q.forEach(function(ln) {
          var En = ln.accessor, Ln = ln.canSort, zn = ln.disableSortBy, tn = ln.id, re = En ? te(zn === !0 ? !1 : void 0, E === !0 ? !1 : void 0, !0) : te(N, Ln, !1);
          ln.canSort = re, ln.canSort && (ln.toggleSortBy = function(mn, hn) {
            return j(ln.id, mn, hn);
          }, ln.clearSortBy = function() {
            x({
              type: w.clearSortBy,
              columnId: ln.id
            });
          }), ln.getSortByToggleProps = Rn(k().getSortByToggleProps, {
            instance: bn(),
            column: ln
          });
          var kn = O.find(function(mn) {
            return mn.id === tn;
          });
          ln.isSorted = !!kn, ln.sortedIndex = O.findIndex(function(mn) {
            return mn.id === tn;
          }), ln.isSortedDesc = ln.isSorted ? kn.desc : void 0;
        });
        var On = C.useMemo(function() {
          if (b || !O.length)
            return [u, a];
          var ln = [], En = O.filter(function(zn) {
            return p.find(function(tn) {
              return tn.id === zn.id;
            });
          }), Ln = function zn(tn) {
            var re = c(
              tn,
              En.map(function(kn) {
                var mn = p.find(function(le) {
                  return le.id === kn.id;
                });
                if (!mn)
                  throw new Error("React-Table: Could not find a column with id: " + kn.id + " while sorting");
                var hn = mn.sortType, Yn = Oe(hn) || (S || {})[hn] || Jo[hn];
                if (!Yn)
                  throw new Error("React-Table: Could not find a valid sortType of '" + hn + "' for column '" + kn.id + "'.");
                return function(le, et) {
                  return Yn(le, et, kn.id, kn.desc);
                };
              }),
              // Map the directions
              En.map(function(kn) {
                var mn = p.find(function(hn) {
                  return hn.id === kn.id;
                });
                return mn && mn.sortInverted ? kn.desc : !kn.desc;
              })
            );
            return re.forEach(function(kn) {
              ln.push(kn), !(!kn.subRows || kn.subRows.length === 0) && (kn.subRows = zn(kn.subRows));
            }), re;
          };
          return [Ln(u), ln];
        }, [b, O, u, a, p, c, S]), J = On[0], Y = On[1], $ = An(sn);
        _n(function() {
          $() && x({
            type: w.resetSortBy
          });
        }, [b ? null : t]), Object.assign(e, {
          preSortedRows: u,
          preSortedFlatRows: a,
          sortedRows: J,
          sortedFlatRows: Y,
          rows: J,
          flatRows: Y,
          setSortBy: pn,
          toggleSortBy: j
        });
      }
      function Mt(e, t, u) {
        return [].concat(e).sort(function(a, p) {
          for (var m = 0; m < t.length; m += 1) {
            var c = t[m], S = u[m] === !1 || u[m] === "desc", b = c(a, p);
            if (b !== 0)
              return S ? -b : b;
          }
          return u[0] ? a.index - p.index : p.index - a.index;
        });
      }
      var Zo = "usePagination";
      w.resetPage = "resetPage", w.gotoPage = "gotoPage", w.setPageSize = "setPageSize";
      var io = function(t) {
        t.stateReducers.push(Qo), t.useInstance.push(lo);
      };
      io.pluginName = Zo;
      function Qo(e, t, u, a) {
        if (t.type === w.init)
          return d({
            pageSize: 10,
            pageIndex: 0
          }, e);
        if (t.type === w.resetPage)
          return d({}, e, {
            pageIndex: a.initialState.pageIndex || 0
          });
        if (t.type === w.gotoPage) {
          var p = a.pageCount, m = a.page, c = xn(t.pageIndex, e.pageIndex), S = !1;
          return c > e.pageIndex ? S = p === -1 ? m.length >= e.pageSize : c < p : c < e.pageIndex && (S = c > -1), S ? d({}, e, {
            pageIndex: c
          }) : e;
        }
        if (t.type === w.setPageSize) {
          var b = t.pageSize, N = e.pageSize * e.pageIndex, E = Math.floor(N / b);
          return d({}, e, {
            pageIndex: E,
            pageSize: b
          });
        }
      }
      function lo(e) {
        var t = e.rows, u = e.autoResetPage, a = u === void 0 ? !0 : u, p = e.manualExpandedKey, m = p === void 0 ? "expanded" : p, c = e.plugins, S = e.pageCount, b = e.paginateExpandedRows, N = b === void 0 ? !0 : b, E = e.expandSubRows, q = E === void 0 ? !0 : E, O = e.state, x = O.pageSize, _ = O.pageIndex, k = O.expanded, Z = O.globalFilter, sn = O.filters, pn = O.groupBy, j = O.sortBy, bn = e.dispatch, On = e.data, J = e.manualPagination;
        Zn(c, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var Y = An(a);
        _n(function() {
          Y() && bn({
            type: w.resetPage
          });
        }, [bn, J ? null : On, Z, sn, pn, j]);
        var $ = J ? S : Math.ceil(t.length / x), ln = C.useMemo(function() {
          return $ > 0 ? [].concat(new Array($)).fill(null).map(function(hn, Yn) {
            return Yn;
          }) : [];
        }, [$]), En = C.useMemo(function() {
          var hn;
          if (J)
            hn = t;
          else {
            var Yn = x * _, le = Yn + x;
            hn = t.slice(Yn, le);
          }
          return N ? hn : B(hn, {
            manualExpandedKey: m,
            expanded: k,
            expandSubRows: q
          });
        }, [q, k, m, J, _, x, N, t]), Ln = _ > 0, zn = $ === -1 ? En.length >= x : _ < $ - 1, tn = C.useCallback(function(hn) {
          bn({
            type: w.gotoPage,
            pageIndex: hn
          });
        }, [bn]), re = C.useCallback(function() {
          return tn(function(hn) {
            return hn - 1;
          });
        }, [tn]), kn = C.useCallback(function() {
          return tn(function(hn) {
            return hn + 1;
          });
        }, [tn]), mn = C.useCallback(function(hn) {
          bn({
            type: w.setPageSize,
            pageSize: hn
          });
        }, [bn]);
        Object.assign(e, {
          pageOptions: ln,
          pageCount: $,
          page: En,
          canPreviousPage: Ln,
          canNextPage: zn,
          gotoPage: tn,
          previousPage: re,
          nextPage: kn,
          setPageSize: mn
        });
      }
      w.resetPivot = "resetPivot", w.togglePivot = "togglePivot";
      var so = function(t) {
        t.getPivotToggleProps = [na], t.stateReducers.push(yo), t.useInstanceAfterData.push(ea), t.allColumns.push(ta), t.accessValue.push(oa), t.materializedColumns.push(aa), t.materializedColumnsDeps.push(bt), t.visibleColumns.push(Co), t.visibleColumnsDeps.push(ut), t.useInstance.push(At), t.prepareRow.push(Dt);
      };
      so.pluginName = "usePivotColumns";
      var co = [], na = function(t, u) {
        var a = u.header;
        return [t, {
          onClick: a.canPivot ? function(p) {
            p.persist(), a.togglePivot();
          } : void 0,
          style: {
            cursor: a.canPivot ? "pointer" : void 0
          },
          title: "Toggle Pivot"
        }];
      };
      function yo(e, t, u, a) {
        if (t.type === w.init)
          return d({
            pivotColumns: co
          }, e);
        if (t.type === w.resetPivot)
          return d({}, e, {
            pivotColumns: a.initialState.pivotColumns || co
          });
        if (t.type === w.togglePivot) {
          var p = t.columnId, m = t.value, c = typeof m < "u" ? m : !e.pivotColumns.includes(p);
          return c ? d({}, e, {
            pivotColumns: [].concat(e.pivotColumns, [p])
          }) : d({}, e, {
            pivotColumns: e.pivotColumns.filter(function(S) {
              return S !== p;
            })
          });
        }
      }
      function ea(e) {
        e.allColumns.forEach(function(t) {
          t.isPivotSource = e.state.pivotColumns.includes(t.id);
        });
      }
      function ta(e, t) {
        var u = t.instance;
        return e.forEach(function(a) {
          a.isPivotSource = u.state.pivotColumns.includes(a.id), a.uniqueValues = /* @__PURE__ */ new Set();
        }), e;
      }
      function oa(e, t) {
        var u = t.column;
        return u.uniqueValues && typeof e < "u" && u.uniqueValues.add(e), e;
      }
      function aa(e, t) {
        var u = t.instance, a = u.allColumns, p = u.state;
        if (!p.pivotColumns.length || !p.groupBy || !p.groupBy.length)
          return e;
        var m = p.pivotColumns.map(function(N) {
          return a.find(function(E) {
            return E.id === N;
          });
        }).filter(Boolean), c = a.filter(function(N) {
          return !N.isPivotSource && !p.groupBy.includes(N.id) && !p.pivotColumns.includes(N.id);
        }), S = function N(E, q, O) {
          E === void 0 && (E = 0), O === void 0 && (O = []);
          var x = m[E];
          if (!x)
            return c.map(function(k) {
              return d({}, k, {
                canPivot: !1,
                isPivoted: !0,
                parent: q,
                depth: E,
                id: "" + (q ? q.id + "." + k.id : k.id),
                accessor: function(sn, pn, j) {
                  if (O.every(function(bn) {
                    return bn(j);
                  }))
                    return j.values[k.id];
                }
              });
            });
          var _ = Array.from(x.uniqueValues).sort();
          return _.map(function(k) {
            var Z = d({}, x, {
              Header: x.PivotHeader || typeof x.header == "string" ? x.Header + ": " + k : k,
              isPivotGroup: !0,
              parent: q,
              depth: E,
              id: q ? q.id + "." + x.id + "." + k : x.id + "." + k,
              pivotValue: k
            });
            return Z.columns = N(E + 1, Z, [].concat(O, [function(sn) {
              return sn.values[x.id] === k;
            }])), Z;
          });
        }, b = Pe(S());
        return [].concat(e, b);
      }
      function bt(e, t) {
        var u = t.instance.state, a = u.pivotColumns, p = u.groupBy;
        return [].concat(e, [a, p]);
      }
      function Co(e, t) {
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
      function At(e) {
        var t = e.columns, u = e.allColumns, a = e.flatHeaders, p = e.getHooks, m = e.plugins, c = e.dispatch, S = e.autoResetPivot, b = S === void 0 ? !0 : S, N = e.manaulPivot, E = e.disablePivot, q = e.defaultCanPivot;
        Zn(m, ["useGroupBy"], "usePivotColumns");
        var O = An(e);
        u.forEach(function(k) {
          var Z = k.accessor, sn = k.defaultPivot, pn = k.disablePivot;
          k.canPivot = Z ? te(k.canPivot, pn === !0 ? !1 : void 0, E === !0 ? !1 : void 0, !0) : te(k.canPivot, sn, q, !1), k.canPivot && (k.togglePivot = function() {
            return e.togglePivot(k.id);
          }), k.Aggregated = k.Aggregated || k.Cell;
        });
        var x = function(Z, sn) {
          c({
            type: w.togglePivot,
            columnId: Z,
            value: sn
          });
        };
        a.forEach(function(k) {
          k.getPivotToggleProps = Rn(p().getPivotToggleProps, {
            instance: O(),
            header: k
          });
        });
        var _ = An(b);
        _n(function() {
          _() && c({
            type: w.resetPivot
          });
        }, [c, N ? null : t]), Object.assign(e, {
          togglePivot: x
        });
      }
      function Dt(e) {
        e.allCells.forEach(function(t) {
          t.isPivoted = t.column.isPivoted;
        });
      }
      var fo = "useRowSelect";
      w.resetSelectedRows = "resetSelectedRows", w.toggleAllRowsSelected = "toggleAllRowsSelected", w.toggleRowSelected = "toggleRowSelected", w.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var Nt = function(t) {
        t.getToggleRowSelectedProps = [ra], t.getToggleAllRowsSelectedProps = [Rt], t.getToggleAllPageRowsSelectedProps = [ua], t.stateReducers.push(ia), t.useInstance.push(la), t.prepareRow.push(po);
      };
      Nt.pluginName = fo;
      var ra = function(t, u) {
        var a = u.instance, p = u.row, m = a.manualRowSelectedKey, c = m === void 0 ? "isSelected" : m, S = !1;
        return p.original && p.original[c] ? S = !0 : S = p.isSelected, [t, {
          onChange: function(N) {
            p.toggleRowSelected(N.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: S,
          title: "Toggle Row Selected",
          indeterminate: p.isSomeSelected
        }];
      }, Rt = function(t, u) {
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
      }, ua = function(t, u) {
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
          indeterminate: !!(!a.isAllPageRowsSelected && a.page.some(function(p) {
            var m = p.id;
            return a.state.selectedRowIds[m];
          }))
        }];
      };
      function ia(e, t, u, a) {
        if (t.type === w.init)
          return d({
            selectedRowIds: {}
          }, e);
        if (t.type === w.resetSelectedRows)
          return d({}, e, {
            selectedRowIds: a.initialState.selectedRowIds || {}
          });
        if (t.type === w.toggleAllRowsSelected) {
          var p = t.value, m = a.isAllRowsSelected, c = a.rowsById, S = a.nonGroupedRowsById, b = S === void 0 ? c : S, N = typeof p < "u" ? p : !m, E = Object.assign({}, e.selectedRowIds);
          return N ? Object.keys(b).forEach(function(kn) {
            E[kn] = !0;
          }) : Object.keys(b).forEach(function(kn) {
            delete E[kn];
          }), d({}, e, {
            selectedRowIds: E
          });
        }
        if (t.type === w.toggleRowSelected) {
          var q = t.id, O = t.value, x = a.rowsById, _ = a.selectSubRows, k = _ === void 0 ? !0 : _, Z = a.getSubRows, sn = e.selectedRowIds[q], pn = typeof O < "u" ? O : !sn;
          if (sn === pn)
            return e;
          var j = d({}, e.selectedRowIds), bn = function kn(mn) {
            var hn = x[mn];
            if (hn && (hn.isGrouped || (pn ? j[mn] = !0 : delete j[mn]), k && Z(hn)))
              return Z(hn).forEach(function(Yn) {
                return kn(Yn.id);
              });
          };
          return bn(q), d({}, e, {
            selectedRowIds: j
          });
        }
        if (t.type === w.toggleAllPageRowsSelected) {
          var On = t.value, J = a.page, Y = a.rowsById, $ = a.selectSubRows, ln = $ === void 0 ? !0 : $, En = a.isAllPageRowsSelected, Ln = a.getSubRows, zn = typeof On < "u" ? On : !En, tn = d({}, e.selectedRowIds), re = function kn(mn) {
            var hn = Y[mn];
            if (hn.isGrouped || (zn ? tn[mn] = !0 : delete tn[mn]), ln && Ln(hn))
              return Ln(hn).forEach(function(Yn) {
                return kn(Yn.id);
              });
          };
          return J.forEach(function(kn) {
            return re(kn.id);
          }), d({}, e, {
            selectedRowIds: tn
          });
        }
        return e;
      }
      function la(e) {
        var t = e.data, u = e.rows, a = e.getHooks, p = e.plugins, m = e.rowsById, c = e.nonGroupedRowsById, S = c === void 0 ? m : c, b = e.autoResetSelectedRows, N = b === void 0 ? !0 : b, E = e.state.selectedRowIds, q = e.selectSubRows, O = q === void 0 ? !0 : q, x = e.dispatch, _ = e.page, k = e.getSubRows;
        Zn(p, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var Z = C.useMemo(function() {
          var En = [];
          return u.forEach(function(Ln) {
            var zn = O ? go(Ln, E, k) : !!E[Ln.id];
            Ln.isSelected = !!zn, Ln.isSomeSelected = zn === null, zn && En.push(Ln);
          }), En;
        }, [u, O, E, k]), sn = !!(Object.keys(S).length && Object.keys(E).length), pn = sn;
        sn && Object.keys(S).some(function(En) {
          return !E[En];
        }) && (sn = !1), sn || _ && _.length && _.some(function(En) {
          var Ln = En.id;
          return !E[Ln];
        }) && (pn = !1);
        var j = An(N);
        _n(function() {
          j() && x({
            type: w.resetSelectedRows
          });
        }, [x, t]);
        var bn = C.useCallback(function(En) {
          return x({
            type: w.toggleAllRowsSelected,
            value: En
          });
        }, [x]), On = C.useCallback(function(En) {
          return x({
            type: w.toggleAllPageRowsSelected,
            value: En
          });
        }, [x]), J = C.useCallback(function(En, Ln) {
          return x({
            type: w.toggleRowSelected,
            id: En,
            value: Ln
          });
        }, [x]), Y = An(e), $ = Rn(a().getToggleAllRowsSelectedProps, {
          instance: Y()
        }), ln = Rn(a().getToggleAllPageRowsSelectedProps, {
          instance: Y()
        });
        Object.assign(e, {
          selectedFlatRows: Z,
          isAllRowsSelected: sn,
          isAllPageRowsSelected: pn,
          toggleRowSelected: J,
          toggleAllRowsSelected: bn,
          getToggleAllRowsSelectedProps: $,
          getToggleAllPageRowsSelectedProps: ln,
          toggleAllPageRowsSelected: On
        });
      }
      function po(e, t) {
        var u = t.instance;
        e.toggleRowSelected = function(a) {
          return u.toggleRowSelected(e.id, a);
        }, e.getToggleRowSelectedProps = Rn(u.getHooks().getToggleRowSelectedProps, {
          instance: u,
          row: e
        });
      }
      function go(e, t, u) {
        if (t[e.id])
          return !0;
        var a = u(e);
        if (a && a.length) {
          var p = !0, m = !1;
          return a.forEach(function(c) {
            m && !p || (go(c, t, u) ? m = !0 : p = !1);
          }), p ? !0 : m ? null : !1;
        }
        return !1;
      }
      var mo = function(t) {
        return {};
      }, vo = function(t) {
        return {};
      };
      w.setRowState = "setRowState", w.setCellState = "setCellState", w.resetRowState = "resetRowState";
      var ho = function(t) {
        t.stateReducers.push(Tt), t.useInstance.push(n), t.prepareRow.push(r);
      };
      ho.pluginName = "useRowState";
      function Tt(e, t, u, a) {
        var p = a.initialRowStateAccessor, m = p === void 0 ? mo : p, c = a.initialCellStateAccessor, S = c === void 0 ? vo : c, b = a.rowsById;
        if (t.type === w.init)
          return d({
            rowState: {}
          }, e);
        if (t.type === w.resetRowState)
          return d({}, e, {
            rowState: a.initialState.rowState || {}
          });
        if (t.type === w.setRowState) {
          var N, E = t.rowId, q = t.value, O = typeof e.rowState[E] < "u" ? e.rowState[E] : m(b[E]);
          return d({}, e, {
            rowState: d({}, e.rowState, (N = {}, N[E] = xn(q, O), N))
          });
        }
        if (t.type === w.setCellState) {
          var x, _, k, Z, sn, pn = t.rowId, j = t.columnId, bn = t.value, On = typeof e.rowState[pn] < "u" ? e.rowState[pn] : m(b[pn]), J = typeof (On == null || (x = On.cellState) == null ? void 0 : x[j]) < "u" ? On.cellState[j] : S((_ = b[pn]) == null || (k = _.cells) == null ? void 0 : k.find(function(Y) {
            return Y.column.id === j;
          }));
          return d({}, e, {
            rowState: d({}, e.rowState, (sn = {}, sn[pn] = d({}, On, {
              cellState: d({}, On.cellState || {}, (Z = {}, Z[j] = xn(bn, J), Z))
            }), sn))
          });
        }
      }
      function n(e) {
        var t = e.autoResetRowState, u = t === void 0 ? !0 : t, a = e.data, p = e.dispatch, m = C.useCallback(function(b, N) {
          return p({
            type: w.setRowState,
            rowId: b,
            value: N
          });
        }, [p]), c = C.useCallback(function(b, N, E) {
          return p({
            type: w.setCellState,
            rowId: b,
            columnId: N,
            value: E
          });
        }, [p]), S = An(u);
        _n(function() {
          S() && p({
            type: w.resetRowState
          });
        }, [a]), Object.assign(e, {
          setRowState: m,
          setCellState: c
        });
      }
      function r(e, t) {
        var u = t.instance, a = u.initialRowStateAccessor, p = a === void 0 ? mo : a, m = u.initialCellStateAccessor, c = m === void 0 ? vo : m, S = u.state.rowState;
        e && (e.state = typeof S[e.id] < "u" ? S[e.id] : p(e), e.setState = function(b) {
          return u.setRowState(e.id, b);
        }, e.cells.forEach(function(b) {
          e.state.cellState || (e.state.cellState = {}), b.state = typeof e.state.cellState[b.column.id] < "u" ? e.state.cellState[b.column.id] : c(b), b.setState = function(N) {
            return u.setCellState(e.id, b.column.id, N);
          };
        }));
      }
      w.resetColumnOrder = "resetColumnOrder", w.setColumnOrder = "setColumnOrder";
      var i = function(t) {
        t.stateReducers.push(s), t.visibleColumnsDeps.push(function(u, a) {
          var p = a.instance;
          return [].concat(u, [p.state.columnOrder]);
        }), t.visibleColumns.push(v), t.useInstance.push(g);
      };
      i.pluginName = "useColumnOrder";
      function s(e, t, u, a) {
        if (t.type === w.init)
          return d({
            columnOrder: []
          }, e);
        if (t.type === w.resetColumnOrder)
          return d({}, e, {
            columnOrder: a.initialState.columnOrder || []
          });
        if (t.type === w.setColumnOrder)
          return d({}, e, {
            columnOrder: xn(t.columnOrder, e.columnOrder)
          });
      }
      function v(e, t) {
        var u = t.instance.state.columnOrder;
        if (!u || !u.length)
          return e;
        for (var a = [].concat(u), p = [].concat(e), m = [], c = function() {
          var b = a.shift(), N = p.findIndex(function(E) {
            return E.id === b;
          });
          N > -1 && m.push(p.splice(N, 1)[0]);
        }; p.length && a.length; )
          c();
        return [].concat(m, p);
      }
      function g(e) {
        var t = e.dispatch;
        e.setColumnOrder = C.useCallback(function(u) {
          return t({
            type: w.setColumnOrder,
            columnOrder: u
          });
        }, [t]);
      }
      cn.canResize = !0, w.columnStartResizing = "columnStartResizing", w.columnResizing = "columnResizing", w.columnDoneResizing = "columnDoneResizing", w.resetResize = "resetResize";
      var h = function(t) {
        t.getResizerProps = [D], t.getHeaderProps.push({
          style: {
            position: "relative"
          }
        }), t.stateReducers.push(R), t.useInstance.push(V), t.useInstanceBeforeDimensions.push(T);
      }, D = function(t, u) {
        var a = u.instance, p = u.header, m = a.dispatch, c = function(b, N) {
          var E = !1;
          if (b.type === "touchstart") {
            if (b.touches && b.touches.length > 1)
              return;
            E = !0;
          }
          var q = W(N), O = q.map(function(J) {
            return [J.id, J.totalWidth];
          }), x = E ? Math.round(b.touches[0].clientX) : b.clientX, _, k, Z = function() {
            window.cancelAnimationFrame(_), _ = null, m({
              type: w.columnDoneResizing
            });
          }, sn = function() {
            window.cancelAnimationFrame(_), _ = null, m({
              type: w.columnResizing,
              clientX: k
            });
          }, pn = function(Y) {
            k = Y, _ || (_ = window.requestAnimationFrame(sn));
          }, j = {
            mouse: {
              moveEvent: "mousemove",
              moveHandler: function(Y) {
                return pn(Y.clientX);
              },
              upEvent: "mouseup",
              upHandler: function(Y) {
                document.removeEventListener("mousemove", j.mouse.moveHandler), document.removeEventListener("mouseup", j.mouse.upHandler), Z();
              }
            },
            touch: {
              moveEvent: "touchmove",
              moveHandler: function(Y) {
                return Y.cancelable && (Y.preventDefault(), Y.stopPropagation()), pn(Y.touches[0].clientX), !1;
              },
              upEvent: "touchend",
              upHandler: function(Y) {
                document.removeEventListener(j.touch.moveEvent, j.touch.moveHandler), document.removeEventListener(j.touch.upEvent, j.touch.moveHandler), Z();
              }
            }
          }, bn = E ? j.touch : j.mouse, On = Xn() ? {
            passive: !1
          } : !1;
          document.addEventListener(bn.moveEvent, bn.moveHandler, On), document.addEventListener(bn.upEvent, bn.upHandler, On), m({
            type: w.columnStartResizing,
            columnId: N.id,
            columnWidth: N.totalWidth,
            headerIdWidths: O,
            clientX: x
          });
        };
        return [t, {
          onMouseDown: function(b) {
            return b.persist() || c(b, p);
          },
          onTouchStart: function(b) {
            return b.persist() || c(b, p);
          },
          style: {
            cursor: "col-resize"
          },
          draggable: !1,
          role: "separator"
        }];
      };
      h.pluginName = "useResizeColumns";
      function R(e, t) {
        if (t.type === w.init)
          return d({
            columnResizing: {
              columnWidths: {}
            }
          }, e);
        if (t.type === w.resetResize)
          return d({}, e, {
            columnResizing: {
              columnWidths: {}
            }
          });
        if (t.type === w.columnStartResizing) {
          var u = t.clientX, a = t.columnId, p = t.columnWidth, m = t.headerIdWidths;
          return d({}, e, {
            columnResizing: d({}, e.columnResizing, {
              startX: u,
              headerIdWidths: m,
              columnWidth: p,
              isResizingColumn: a
            })
          });
        }
        if (t.type === w.columnResizing) {
          var c = t.clientX, S = e.columnResizing, b = S.startX, N = S.columnWidth, E = S.headerIdWidths, q = E === void 0 ? [] : E, O = c - b, x = O / N, _ = {};
          return q.forEach(function(k) {
            var Z = k[0], sn = k[1];
            _[Z] = Math.max(sn + sn * x, 0);
          }), d({}, e, {
            columnResizing: d({}, e.columnResizing, {
              columnWidths: d({}, e.columnResizing.columnWidths, {}, _)
            })
          });
        }
        if (t.type === w.columnDoneResizing)
          return d({}, e, {
            columnResizing: d({}, e.columnResizing, {
              startX: null,
              isResizingColumn: null
            })
          });
      }
      var T = function(t) {
        var u = t.flatHeaders, a = t.disableResizing, p = t.getHooks, m = t.state.columnResizing, c = An(t);
        u.forEach(function(S) {
          var b = te(S.disableResizing === !0 ? !1 : void 0, a === !0 ? !1 : void 0, !0);
          S.canResize = b, S.width = m.columnWidths[S.id] || S.originalWidth || S.width, S.isResizing = m.isResizingColumn === S.id, b && (S.getResizerProps = Rn(p().getResizerProps, {
            instance: c(),
            header: S
          }));
        });
      };
      function V(e) {
        var t = e.plugins, u = e.dispatch, a = e.autoResetResize, p = a === void 0 ? !0 : a, m = e.columns;
        Zn(t, ["useAbsoluteLayout"], "useResizeColumns");
        var c = An(p);
        _n(function() {
          c() && u({
            type: w.resetResize
          });
        }, [m]);
        var S = C.useCallback(function() {
          return u({
            type: w.resetResize
          });
        }, [u]);
        Object.assign(e, {
          resetResizing: S
        });
      }
      function W(e) {
        var t = [], u = function a(p) {
          p.columns && p.columns.length && p.columns.map(a), t.push(p);
        };
        return u(e), t;
      }
      var G = {
        position: "absolute",
        top: 0
      }, L = function(t) {
        t.getTableBodyProps.push(H), t.getRowProps.push(H), t.getHeaderGroupProps.push(H), t.getFooterGroupProps.push(H), t.getHeaderProps.push(function(u, a) {
          var p = a.column;
          return [u, {
            style: d({}, G, {
              left: p.totalLeft + "px",
              width: p.totalWidth + "px"
            })
          }];
        }), t.getCellProps.push(function(u, a) {
          var p = a.cell;
          return [u, {
            style: d({}, G, {
              left: p.column.totalLeft + "px",
              width: p.column.totalWidth + "px"
            })
          }];
        }), t.getFooterProps.push(function(u, a) {
          var p = a.column;
          return [u, {
            style: d({}, G, {
              left: p.totalLeft + "px",
              width: p.totalWidth + "px"
            })
          }];
        });
      };
      L.pluginName = "useAbsoluteLayout";
      var H = function(t, u) {
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
      }, rn = function(t) {
        t.getRowProps.push(U), t.getHeaderGroupProps.push(U), t.getFooterGroupProps.push(U), t.getHeaderProps.push(function(u, a) {
          var p = a.column;
          return [u, {
            style: d({}, X, {
              width: p.totalWidth + "px"
            })
          }];
        }), t.getCellProps.push(function(u, a) {
          var p = a.cell;
          return [u, {
            style: d({}, X, {
              width: p.column.totalWidth + "px"
            })
          }];
        }), t.getFooterProps.push(function(u, a) {
          var p = a.column;
          return [u, {
            style: d({}, X, {
              width: p.totalWidth + "px"
            })
          }];
        });
      };
      rn.pluginName = "useBlockLayout";
      function Pn(e) {
        e.getTableProps.push(un), e.getRowProps.push(K), e.getHeaderGroupProps.push(K), e.getFooterGroupProps.push(K), e.getHeaderProps.push(wn), e.getCellProps.push(nn), e.getFooterProps.push(vn);
      }
      Pn.pluginName = "useFlexLayout";
      var un = function(t, u) {
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
      }, nn = function(t, u) {
        var a = u.cell;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: a.column.totalFlexWidth + " 0 auto",
            minWidth: a.column.totalMinWidth + "px",
            width: a.column.totalWidth + "px"
          }
        }];
      }, vn = function(t, u) {
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
      w.columnStartResizing = "columnStartResizing", w.columnResizing = "columnResizing", w.columnDoneResizing = "columnDoneResizing", w.resetResize = "resetResize";
      function Hn(e) {
        e.stateReducers.push(Sn), e.getTableProps.push(dn), e.getHeaderProps.push(gn), e.getRowProps.push(Vn);
      }
      Hn.pluginName = "useGridLayout";
      var dn = function(t, u) {
        var a = u.instance, p = a.visibleColumns.map(function(m) {
          var c;
          return a.state.gridLayout.columnWidths[m.id] ? a.state.gridLayout.columnWidths[m.id] + "px" : (c = a.state.columnResizing) != null && c.isResizingColumn ? a.state.gridLayout.startWidths[m.id] + "px" : typeof m.width == "number" ? m.width + "px" : m.width;
        });
        return [t, {
          style: {
            display: "grid",
            gridTemplateColumns: p.join(" ")
          }
        }];
      }, gn = function(t, u) {
        var a = u.column;
        return [t, {
          id: "header-cell-" + a.id,
          style: {
            position: "sticky",
            //enables a scroll wrapper to be placed around the table and have sticky headers
            gridColumn: "span " + a.totalVisibleHeaderCount
          }
        }];
      }, Vn = function(t, u) {
        var a = u.row;
        return a.isExpanded ? [t, {
          style: {
            gridColumn: "1 / " + (a.cells.length + 1)
          }
        }] : [t, {}];
      };
      function Sn(e, t, u, a) {
        if (t.type === w.init)
          return d({
            gridLayout: {
              columnWidths: {}
            }
          }, e);
        if (t.type === w.resetResize)
          return d({}, e, {
            gridLayout: {
              columnWidths: {}
            }
          });
        if (t.type === w.columnStartResizing) {
          var p = t.columnId, m = t.headerIdWidths, c = Gn(p);
          if (c !== void 0) {
            var S = a.visibleColumns.reduce(function(J, Y) {
              var $;
              return d({}, J, ($ = {}, $[Y.id] = Gn(Y.id), $));
            }, {}), b = a.visibleColumns.reduce(function(J, Y) {
              var $;
              return d({}, J, ($ = {}, $[Y.id] = Y.minWidth, $));
            }, {}), N = a.visibleColumns.reduce(function(J, Y) {
              var $;
              return d({}, J, ($ = {}, $[Y.id] = Y.maxWidth, $));
            }, {}), E = m.map(function(J) {
              var Y = J[0];
              return [Y, Gn(Y)];
            });
            return d({}, e, {
              gridLayout: d({}, e.gridLayout, {
                startWidths: S,
                minWidths: b,
                maxWidths: N,
                headerIdGridWidths: E,
                columnWidth: c
              })
            });
          } else
            return e;
        }
        if (t.type === w.columnResizing) {
          var q = t.clientX, O = e.columnResizing.startX, x = e.gridLayout, _ = x.columnWidth, k = x.minWidths, Z = x.maxWidths, sn = x.headerIdGridWidths, pn = sn === void 0 ? [] : sn, j = q - O, bn = j / _, On = {};
          return pn.forEach(function(J) {
            var Y = J[0], $ = J[1];
            On[Y] = Math.min(Math.max(k[Y], $ + $ * bn), Z[Y]);
          }), d({}, e, {
            gridLayout: d({}, e.gridLayout, {
              columnWidths: d({}, e.gridLayout.columnWidths, {}, On)
            })
          });
        }
        if (t.type === w.columnDoneResizing)
          return d({}, e, {
            gridLayout: d({}, e.gridLayout, {
              startWidths: {},
              minWidths: {},
              maxWidths: {}
            })
          });
      }
      function Gn(e) {
        var t, u = (t = document.getElementById("header-cell-" + e)) == null ? void 0 : t.offsetWidth;
        if (u !== void 0)
          return u;
      }
      y._UNSTABLE_usePivotColumns = so, y.actions = w, y.defaultColumn = cn, y.defaultGroupByFn = no, y.defaultOrderByFn = Mt, y.defaultRenderer = yn, y.emptyRenderer = Nn, y.ensurePluginOrder = Zn, y.flexRender = Dn, y.functionalUpdate = xn, y.loopHooks = In, y.makePropGetter = Rn, y.makeRenderer = Cn, y.reduceHooks = Kn, y.safeUseLayoutEffect = ie, y.useAbsoluteLayout = L, y.useAsyncDebounce = Me, y.useBlockLayout = rn, y.useColumnOrder = i, y.useExpanded = ft, y.useFilters = Xt, y.useFlexLayout = Pn, y.useGetLatest = An, y.useGlobalFilter = Yt, y.useGridLayout = Hn, y.useGroupBy = St, y.useMountedLayoutEffect = _n, y.usePagination = io, y.useResizeColumns = h, y.useRowSelect = Nt, y.useRowState = ho, y.useSortBy = ao, y.useTable = at, Object.defineProperty(y, "__esModule", { value: !0 });
    });
  }(Do, Do.exports)), Do.exports;
}
process.env.NODE_ENV === "production" ? Sa.exports = Ou() : Sa.exports = Bu();
var st = Sa.exports;
function Hu(o) {
  if (Array.isArray(o) || (o.general.geoType === "us-county" || o.general.geoType === "single-state" || o.general.geoType === "us" && (o != null && o.data)) && (o == null || o.data.forEach((f) => {
    f[o.columns.geo.name] && (!isNaN(parseInt(f[o.columns.geo.name])) && f[o.columns.geo.name].length === 4 && (f[o.columns.geo.name] = 0 + f[o.columns.geo.name]), f[o.columns.geo.name] = f[o.columns.geo.name].toString());
  })), Array.isArray(o) && o.length > 0) {
    let f = Object.keys(o[0]), y = ["fips", "FIPS", "fips codes", "FIPS CODES", "Fips Codes", "fips Codes", "Fips codes", "FIPS Codes"];
    const C = f.filter((A) => y.includes(A));
    if (!C.length)
      return;
    o == null || o.forEach((A) => {
      A[C] && (!isNaN(parseInt(A[C])) && A[C].length === 4 && (A[C] = 0 + A[C]), A[C] = A[C].toString());
    });
  }
  return o;
}
const wa = 10, ot = {
  emptyCols: "It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.",
  emptyData: "Your data file is empty.",
  dataType: "Your datatype is not supported.",
  fileType: "The file type that you are trying to upload is not supported.",
  formatting: "Please check the formatting of your data file.",
  failedFetch: "Error fetching or parsing data file.",
  urlInvalid: "Please make sure to use a valid URL.",
  cannotReach: "Cannot reach URL, please make sure it's correct.",
  fileTooLarge: `File is too large. Maximum file size is ${wa}MB.`
}, Fu = I.memo(({ globalFilter: o, setGlobalFilter: f, disabled: y = !1 }) => {
  const [C, A] = I.useState(o), [P] = Rr(C, 200);
  I.useEffect(() => {
    typeof P == "string" && P !== o && f(P ?? "");
  }, [P]);
  const d = (F) => {
    A(F.target.value);
  };
  return /* @__PURE__ */ l.createElement("input", { className: "filter", value: C, onChange: d, type: "search", placeholder: "Filter...", disabled: y });
}), ja = I.memo(({ globalFilter: o, data: f, setGlobalFilter: y }) => /* @__PURE__ */ l.createElement("header", { className: "data-table-header" }, /* @__PURE__ */ l.createElement("h2", null, "Data Preview"), /* @__PURE__ */ l.createElement(Fu, { globalFilter: o || "", setGlobalFilter: y, disabled: f === null }))), Wu = I.memo(({ previousPage: o, nextPage: f, canPreviousPage: y, canNextPage: C, pageNumber: A, totalPages: P }) => /* @__PURE__ */ l.createElement("footer", { className: "data-table-pagination" }, /* @__PURE__ */ l.createElement("ul", null, /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement("button", { onClick: () => o(), className: "btn btn-prev", disabled: !y, title: "Previous Page" })), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement("button", { onClick: () => f(), className: "btn btn-next", disabled: !C, title: "Next Page" }))), /* @__PURE__ */ l.createElement("span", null, "Page ", A, " of ", P))), Gu = () => {
  const { config: o } = I.useContext(ct), f = I.useMemo(() => o.type === "dashboard" ? Object.values(o.datasets).find((Cn) => Cn.preview && Array.isArray(Cn.data)) : o.data, [o.type, o.data, o.datasets]), [y, C] = I.useState(f), A = (Cn) => {
    const Dn = Object.keys(Cn[0]).includes("tableData"), ye = M(Dn ? Cn[0].tableData : Cn);
    return Hu(ye), ye;
  }, P = (Cn) => C(A(Cn)), d = I.useContext(kt), F = async () => {
    if (o.type === "dashboard")
      Object.keys(o.datasets).forEach(async (Cn) => {
        if (o.datasets[Cn].preview)
          if (o.datasets[Cn].dataUrl) {
            const Dn = await Ta(o.datasets[Cn].dataUrl);
            Array.isArray(Dn) && P(Dn);
          } else
            Array.isArray(o.datasets[Cn].data) && P(o.datasets[Cn].data);
      });
    else if (o.dataUrl) {
      const Cn = await Ta(o.dataUrl);
      Array.isArray(Cn) && P(Cn);
    }
  };
  I.useEffect(() => {
    o.data ? P(f) : F();
  }, [o.data]);
  const Fn = I.useMemo(() => {
    if (!y)
      return [];
    const Cn = y.columns ?? [];
    return Cn.length > 0 && Cn.includes("") && d({ type: "EDITOR_SET_ERRORS", payload: [ot.emptyCols] }), Cn.map((Dn) => ({
      id: `column-${Dn}`,
      accessor: (he) => he[Dn],
      Header: Dn,
      width: 250
    }));
  }, [y]), M = (Cn) => {
    let Dn = [];
    Cn.forEach((he) => {
      Object.keys(he).forEach((Jn) => {
        Dn.includes(Jn) === !1 && Dn.push(Jn);
      });
    });
    const ye = [...Cn];
    if (Array.isArray(ye))
      return ye.columns = Dn, ye;
  }, {
    getTableProps: Bn,
    getTableBodyProps: w,
    headerGroups: yn,
    state: { pageIndex: Nn, globalFilter: cn },
    prepareRow: Mn,
    setGlobalFilter: qn,
    page: Rn,
    canPreviousPage: Kn,
    canNextPage: In,
    pageOptions: Zn,
    nextPage: xn,
    previousPage: An
  } = st.useTable({ columns: Fn, data: y, initialState: { pageSize: 25 } }, st.useBlockLayout, st.useGlobalFilter, st.useSortBy, st.useResizeColumns, st.usePagination), ie = () => /* @__PURE__ */ l.createElement("section", { className: "no-data" }, /* @__PURE__ */ l.createElement("section", { className: "no-data-message" }, /* @__PURE__ */ l.createElement("section", null, /* @__PURE__ */ l.createElement("h3", null, "No Data"), /* @__PURE__ */ l.createElement("p", null, "Import data to preview"))), /* @__PURE__ */ l.createElement("div", { className: "table-container" }, /* @__PURE__ */ l.createElement("table", { className: "editor data-table", role: "table" }, /* @__PURE__ */ l.createElement("thead", null, /* @__PURE__ */ l.createElement("tr", null, /* @__PURE__ */ l.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ l.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ l.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }))), /* @__PURE__ */ l.createElement("tbody", null, /* @__PURE__ */ l.createElement(l.Fragment, null, [...Array(10)].map((Cn, Dn) => /* @__PURE__ */ l.createElement("tr", { key: Dn }, /* @__PURE__ */ l.createElement("td", null), /* @__PURE__ */ l.createElement("td", null), /* @__PURE__ */ l.createElement("td", null))))))));
  if (!y)
    return [/* @__PURE__ */ l.createElement(ja, { key: "header" }), /* @__PURE__ */ l.createElement(ie, { key: "table" })];
  const _n = { previousPage: An, nextPage: xn, canPreviousPage: Kn, canNextPage: In, pageNumber: Nn + 1, totalPages: Zn.length }, Me = () => /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("section", { className: "data-table-container" }, /* @__PURE__ */ l.createElement("div", { className: "table-container" }, /* @__PURE__ */ l.createElement("table", { className: "data-table", ...Bn(), "aria-hidden": "true" }, /* @__PURE__ */ l.createElement("thead", null, yn.map((Cn) => /* @__PURE__ */ l.createElement("tr", { ...Cn.getHeaderGroupProps() }, Cn.headers.map((Dn) => /* @__PURE__ */ l.createElement("th", { scope: "col", ...Dn.getHeaderProps(Dn.getSortByToggleProps()), className: Dn.isSorted ? Dn.isSortedDesc ? "sort sort-desc" : "sort sort-asc" : "", title: Dn.Header }, Dn.render("Header"), /* @__PURE__ */ l.createElement("div", { ...Dn.getResizerProps(), className: "resizer" })))))), /* @__PURE__ */ l.createElement("tbody", { ...w() }, Rn.map((Cn) => (Mn(Cn), /* @__PURE__ */ l.createElement("tr", { ...Cn.getRowProps() }, Cn.cells.map((Dn) => /* @__PURE__ */ l.createElement("td", { ...Dn.getCellProps(), title: Dn.value }, Dn.render("Cell")))))))))), /* @__PURE__ */ l.createElement(Wu, { ..._n }));
  return [/* @__PURE__ */ l.createElement(ja, { key: "header", data: y, setGlobalFilter: qn, globalFilter: cn }), /* @__PURE__ */ l.createElement(Me, { key: "table" })];
}, xu = (o) => /* @__PURE__ */ I.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...o }, /* @__PURE__ */ I.createElement("path", { d: "M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z" })), Io = I.createContext();
Io.displayName = "SampleDataContext";
const Vu = `STATE,Rate,Location,URL
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
`, Ku = `Race,Age-adjusted rate
Hispanic or Latino,644.2
Non-Hispanic American Indian,636.1
Non-Hispanic Black,563.7
Non-Hispanic Asian or Pacific Islander,202.5
Non-Hispanic White,183.6
`, qu = `FIPS Codes,County,Public Health Jurisdiction,Percent Vaccinated,Vaccination Coverage Group
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
`, zu = `City,Longitude,Latitude,Value
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
`, _u = `x,y1,y2,y3,y4
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
`, Xu = `Group_Category,Value
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
`, Yu = `[
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
`, ju = `[
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
]`, Uu = `date,quarter,upper_90,lower_90,random_col
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
`, Ju = `[
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
]`, $u = `[
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
]`, Zu = `[
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
      },
      {
        "StoryNode": "Transported to hospital",
        "segmentTextBefore": "and",
        "segmentTextAfter": "were transported to the hospital"
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
        "Number of Patients": "2,356"
      },
      {
        "Disposition": "Assist, Public",
        "Type of Treatment": "Assisted",
        "Final Outcome": "N/A",
        "Number of Patients": "859"
      },
      {
        "Disposition": "Assist, Unit",
        "Type of Treatment": "Assisted",
        "Final Outcome": "N/A",
        "Number of Patients": "2,486"
      },
      {
        "Disposition": "Patient Dead at Scene-No Resuscitation Attempted (With Transport)",
        "Type of Treatment": "Dead at scene",
        "Final Outcome": "Dead",
        "Number of Patients": "123"
      },
      {
        "Disposition": "Patient Dead at Scene-No Resuscitation Attempted (Without Transport)",
        "Type of Treatment": "Dead at scene",
        "Final Outcome": "Dead",
        "Number of Patients": "3,965"
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
        "Number of Patients": "631"
      },
      {
        "Disposition": "Patient Evaluated, No Treatment/Transport Required",
        "Type of Treatment": "Evaluated no treatment required",
        "Final Outcome": "Released",
        "Number of Patients": "5,169"
      },
      {
        "Disposition": "Patient Refused Evaluation/Care (With Transport)",
        "Type of Treatment": "Refused evaluation care",
        "Final Outcome": "Transported to hospital",
        "Number of Patients": "860"
      },
      {
        "Disposition": "Patient Refused Evaluation/Care (Without Transport)",
        "Type of Treatment": "Refused evaluation care",
        "Final Outcome": "Released",
        "Number of Patients": "11,781"
      },
      {
        "Disposition": "Patient Treated, Released (AMA)",
        "Type of Treatment": "Treated",
        "Final Outcome": "Released",
        "Number of Patients": "6,780"
      },
      {
        "Disposition": "Patient Treated, Released (per protocol)",
        "Type of Treatment": "Treated",
        "Final Outcome": "Released",
        "Number of Patients": "3,522"
      },
      {
        "Disposition": "Patient Treated, Transferred Care to Another EMS Unit",
        "Type of Treatment": "Treated",
        "Final Outcome": "Transported to hospital",
        "Number of Patients": "24,432"
      },
      {
        "Disposition": "Patient Treated, Transported by Law Enforcement",
        "Type of Treatment": "Treated",
        "Final Outcome": "Transported to facility",
        "Number of Patients": "4,227"
      },
      {
        "Disposition": "Patient Treated, Transported by Private Vehicle",
        "Type of Treatment": "Treated",
        "Final Outcome": "Transported to facility",
        "Number of Patients": "277"
      },
      {
        "Disposition": "Patient Treated, Transported by this EMS Unit",
        "Type of Treatment": "Treated",
        "Final Outcome": "Transported to hospital",
        "Number of Patients": "399,088"
      },
      {
        "Disposition": "Standby-Public Safety, Fire, or EMS Operational Support Provided",
        "Type of Treatment": "No patient contact",
        "Final Outcome": "N/A",
        "Number of Patients": "458"
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
        "Number of Patients": "104"
      }
    ]
  }
]`, ba = {
  charts: [
    {
      text: "Chart Sample Data",
      fileName: "valid-data-chart.csv",
      data: Ku
    },
    {
      text: "Box Plot Sample Data",
      fileName: "valid-boxplot.csv",
      data: Xu
    },
    {
      text: "Scatter Plot Sample Data",
      fileName: "valid-scatterplot.csv",
      data: _u
    },
    {
      text: "Area Chart Sample Data",
      fileName: "valid-area-chart.json",
      data: Yu
    },
    {
      text: "Forecast Chart Data",
      fileName: "valid-forecast-data.csv",
      data: Uu
    },
    // {
    //   text: 'Forest Plot Data',
    //   fileName: 'valid-forest-plot-data.csv',
    //   data: validForestPlotData
    // },
    {
      text: "Sankey Chart Data",
      fileName: "valid-sankey-data.json",
      data: Zu
    }
  ],
  maps: [
    {
      text: "United States: State Sample Data",
      fileName: "valid-data-map.csv",
      data: Vu
    },
    {
      text: "United States: County Sample Data",
      fileName: "valid-county-data.csv",
      data: qu
    },
    {
      text: "United States: Geo Point Sample Data",
      fileName: "supported-cities.csv",
      data: zu
    },
    {
      text: "United States: Region",
      fileName: "valid-region-data.json",
      data: $u
    },
    {
      text: "World: Geocode Sample Data",
      fileName: "valid-world-geocode.json",
      data: ju
    },
    {
      text: "World: Default Data",
      fileName: "valid-world-data.json",
      data: Ju
    }
  ]
}, sr = ({ text: o, fileName: f, data: y }) => {
  const { editingDataset: C, loadData: A } = I.useContext(Io), P = (F) => A(new Blob([y], { type: "text/csv" }), f, C), d = (F) => F.keyCode === 13 && A(new Blob([y], { type: "text/csv" }), f, C);
  return /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "link link-upload",
      onClick: P,
      onKeyDown: d
    },
    o
  );
}, Qu = () => ba.maps.map((o) => /* @__PURE__ */ l.createElement(sr, { key: o.fileName, text: o.text, fileName: o.fileName, data: o.data })), ni = () => ba.charts.map((o) => /* @__PURE__ */ l.createElement(sr, { key: o.fileName, text: o.text, fileName: o.fileName, data: o.data })), ei = () => {
  const { config: o } = I.useContext(Io);
  return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("h3", { className: "heading-3" }, "Load Sample Data:"), /* @__PURE__ */ l.createElement("ul", { className: "sample-data-list" }, o.type !== "map" && /* @__PURE__ */ l.createElement(ni, null), o.type !== "chart" && /* @__PURE__ */ l.createElement(Qu, null)));
}, Aa = () => null;
Aa.data = ba;
Aa.Buttons = ei;
const Ua = (o) => /* @__PURE__ */ I.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", ...o }, /* @__PURE__ */ I.createElement("path", { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" }));
function ti() {
  const { config: o, errors: f, tempConfig: y, sharepath: C } = I.useContext(ct), A = (B) => {
    Mn({ type: "EDITOR_SET_CONFIG", payload: B });
  }, P = (B) => {
    Mn({ type: "EDITOR_SET_ERRORS", payload: B });
  }, d = new Nr(), [F, Fn] = I.useState(o.dataFileSourceType === "url" ? o.dataFileName : o.dataUrl || ""), [M, Bn] = I.useState(!!o.dataUrl), [w, yn] = I.useState(o.type === "dashboard" || !o.data), [Nn, cn] = I.useState(void 0), Mn = I.useContext(kt), qn = {
    ".csv": "text/csv",
    ".json": "application/json"
  }, Rn = (B) => B === void 0 ? "" : B > Math.pow(1024, 3) ? Math.round(B / Math.pow(1024, 3) * 100) / 100 + " GB" : B > Math.pow(1024, 2) ? Math.round(B / Math.pow(1024, 2) * 100) / 100 + " MB" : B > 1024 ? Math.round(B / 1024 * 100) / 100 + " KB" : B + " B", Kn = (B, z, an) => (z.map(function(en, Wn, Xn) {
    if (!Xn.find((Se) => Se.dataKey === en.dataKey))
      return !1;
  }), !(B.columns.indexOf(an) < 0)), In = (B) => ca(F) ? ".csv" : Mo(F) ? ".json" : Object.keys(qn).find((z) => B.pathname.endsWith(z)), Zn = async () => {
    let B;
    try {
      B = ca(F) || Mo(F) ? F : new URL(F, window.location.origin);
    } catch {
      throw ot.urlInvalid;
    }
    let z = null;
    const an = In(B);
    try {
      await Dr.get(B.toString(), {
        responseType: "blob"
      }).then((en) => {
        z = en.data, an === ".csv" && ["text/csv", "text/plain"].includes(z.type) || ca(F) ? z = z.slice(0, z.size, "text/csv") : (z.type === "application/json" || an === ".json" && z.type === "text/plain" || Mo(F)) && (z = z.slice(0, z.size, "application/json"));
      });
    } catch (en) {
      console.error(en);
      const Wn = en.toString();
      throw Object.values(ot).includes(en) ? Wn : ot.failedFetch;
    }
    return z;
  }, xn = ([B]) => An(B, Nn, Nn), An = async (B = null, z, an) => {
    let en = B;
    const Wn = (en == null ? void 0 : en.path) ?? z ?? F, Xn = B ? "file" : "url";
    if (Xn === "url")
      try {
        en = await Zn();
      } catch (de) {
        P([de]);
        return;
      }
    const Se = en.size;
    if (Se > wa * 1048576) {
      P([ot.fileTooLarge]);
      return;
    }
    const Ae = (() => {
      const de = (B == null ? void 0 : B.name) || F || z;
      if (Xn === "file") {
        const se = de.match(/(?:\.([^.]+))?$/g), ge = se.length === 0 ? ".csv" : se[0];
        return qn[ge];
      }
      if (Xn === "url")
        return en.type;
    })(), De = new FileReader(), Ie = (de) => {
      switch (Ae) {
        case "text/csv":
          return Iu(de);
        case "text/plain":
        case "application/json":
          try {
            return Mo(F) ? JSON.parse(de).response.docs : JSON.parse(de);
          } catch {
            P([ot.formatting]);
            return;
          }
        default:
          P([ot.fileType]);
          return;
      }
    };
    De.onload = function() {
      const de = (se, ge = !1) => {
        if (o.type === "dashboard") {
          let me = { ...o.datasets };
          Object.keys(me).forEach((Tn) => me[Tn].preview = !1);
          const Xe = Ae.split("/")[1].toUpperCase();
          me[an || Wn] = {
            data: se,
            // new data
            dataFileSize: Se,
            dataFileName: Wn,
            // new file source
            dataFileSourceType: Xn,
            // new file source type
            dataFileFormat: Xe,
            preview: !0
          }, M && (me[an || Wn].dataUrl = Wn);
          const Q = ge ? { ...o, ...y } : o;
          A({ ...Q, datasets: me });
        } else {
          let me = {
            ...o,
            ...y,
            data: se,
            // new data
            dataFileName: Wn,
            // new file source
            dataFileSourceType: Xn,
            // new file source type
            formattedData: d.developerStandardize(se, o.dataDescription)
          };
          M && (me.dataUrl = Wn), A(me);
        }
      };
      try {
        const se = Ie(this.result.toString()), ge = d.autoStandardize(se);
        o.data && o.series ? Kn(ge, o.series, o == null ? void 0 : o.xAxis.dataKey) ? de(ge, !0) : Pe(
          {
            data: ge,
            dataFileName: Wn,
            dataFileSourceType: Xn
          },
          "It appears that your data does not contain all of the columns that your last dataset contained. Continuing will reset your configuration. Do you want to continue?"
        ) : de(ge), Nn && cn(void 0), yn(!1);
      } catch (se) {
        P(se);
      }
    };
    const _e = Ae === "text/csv" ? "utf-8" : "";
    De.readAsText(en, _e);
  };
  I.useEffect(() => {
    let B = { ...y || o };
    if (o.formattedData === void 0 && o.dataDescription) {
      const z = d.developerStandardize(o.data, o.dataDescription);
      z && (B.formattedData = z);
    }
    Mn({ type: "EDITOR_SAVE", payload: B });
  }, []);
  const ie = (B, z, an) => {
    if (o.type === "dashboard") {
      let en = { ...o.datasets[B].dataDescription, [z]: an }, Wn = d.developerStandardize(o.datasets[B].data, en), Xn = { ...o.datasets };
      Xn[B] = { ...Xn[B], dataDescription: en, formattedData: Wn }, A({ ...o, datasets: Xn });
    } else {
      let en = { ...o.dataDescription, [z]: an }, Wn = d.developerStandardize(o.data, en);
      A({ ...o, formattedData: Wn, dataDescription: en });
    }
  }, _n = (B, z) => {
    if (z) {
      let an = { ...o.datasets };
      B === !1 ? delete an[z].dataUrl : an[z].dataUrl = an[z].dataFileName, A({ ...o, datasets: an });
    } else if (o.type !== "dashboard") {
      let an = { ...o };
      B === !1 ? delete an.dataUrl : an.dataUrl = an.dataFileName, A(an);
    }
    Bn(B);
  }, { getRootProps: Me, getInputProps: Cn, isDragActive: Dn } = ha({ onDrop: xn }), { getRootProps: ye, getInputProps: he, isDragActive: Jn } = ha({ onDrop: xn }), ee = () => /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("form", { className: "input-group d-flex", onSubmit: (B) => B.preventDefault() }, /* @__PURE__ */ l.createElement("input", { id: "external-data", type: "text", className: "form-control flex-grow-1 border-right-0", placeholder: "e.g., https://data.cdc.gov/resources/file.json", "aria-label": "Load data from external URL", "aria-describedby": "load-data", value: F, onChange: (B) => Fn(B.target.value) }), /* @__PURE__ */ l.createElement("button", { className: "input-group-text btn btn-primary px-4", type: "submit", id: "load-data", onClick: () => An(null, F, Nn) }, "Load")), /* @__PURE__ */ l.createElement("label", { htmlFor: "keep-url", className: "mt-1 d-flex keep-url" }, /* @__PURE__ */ l.createElement("input", { type: "checkbox", id: "keep-url", checked: M, onChange: () => _n(!M, Nn) }), " Always load from URL (normally will only pull once)")), Pe = (B = {}, z = "Are you sure you want to do this?") => {
    B.newViz = !0, window.confirm(z) === !0 && (Mn({ type: "EDITOR_SAVE", payload: B }), yn(!0));
  }, Ne = () => (
    //todo convert to modal
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("button", { className: "btn danger", onClick: () => Pe({ type: o.type, visualizationType: o.visualizationType }, "Resetting will remove your data and settings. Do you want to continue?") }, "Clear", /* @__PURE__ */ l.createElement(Ea, null)), o.dataFileSourceType === "file" && /* @__PURE__ */ l.createElement("div", { className: "link link-replace", ...ye() }, /* @__PURE__ */ l.createElement("input", { ...he() }), /* @__PURE__ */ l.createElement("p", null, /* @__PURE__ */ l.createElement("span", null, "or replace file"))))
  ), be = (B, z, an) => {
    let en = { ...o.datasets };
    an === !0 ? Object.keys(en).forEach((Wn) => {
      const Xn = Wn === B;
      en[Wn][z] = Xn;
    }) : en[B][z] = an, A({ ...o, datasets: en });
  }, Ee = (B) => {
    let z = { ...o.datasets }, an = { ...o.visualizations };
    Object.keys(an).forEach((en) => {
      an[en].dataKey === B && delete an[en].dataKey;
    }), delete z[B], A({ ...o, datasets: z, visualizations: an });
  }, Ce = (B, z) => {
    if (B === z)
      return;
    let an = { ...o.datasets }, en = { ...o.visualizations }, Wn = 2, Xn = z;
    for (; an[z]; )
      z = Xn + "-" + Wn, Wn++;
    an[z] = an[B], delete an[B], Object.keys(en).forEach((Se) => {
      en[Se].dataKey === B && (en[Se].dataKey = z);
    }), A({ ...o, datasets: an, visualizations: en });
  };
  let pe, te = !1;
  o.type === "dashboard" ? te = Object.keys(o.datasets).length > 0 : (pe = o, te = !!o.formattedData || o.data && o.dataDescription && d.autoStandardize(o.data)), (o.visualizationType === "Box Plot" && o.data || o.visualizationType === "Scatter Plot") && (te = !0);
  const Oe = /* @__PURE__ */ l.createElement(l.Fragment, null, o.filters && o.filters.map(
    (B, z) => B.type !== "url" ? /* @__PURE__ */ l.createElement(l.Fragment, null) : /* @__PURE__ */ l.createElement("fieldset", { key: B.key, className: "edit-block url-filters-block" }, /* @__PURE__ */ l.createElement(
      "button",
      {
        onClick: (an) => {
          let en = [...o.filters];
          en.splice(z, 1), A({ ...o, filters: en, runtimeDataUrl: void 0 });
        }
      },
      "Remove"
    ), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Label", /* @__PURE__ */ l.createElement(on, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(Pa, { display: "question" })), /* @__PURE__ */ l.createElement(on.Content, null, /* @__PURE__ */ l.createElement("p", { style: { padding: "0.5rem" } }, "The label that will appear above the dropdown filter.")))), " ", /* @__PURE__ */ l.createElement(
      "input",
      {
        type: "text",
        defaultValue: B.label,
        onChange: (an) => {
          let en = [...o.filters];
          en[z].label = an.target.value, A({ ...o, filters: en });
        }
      }
    )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Query string parameter", /* @__PURE__ */ l.createElement(on, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(Pa, { display: "question" })), /* @__PURE__ */ l.createElement(on.Content, null, /* @__PURE__ */ l.createElement("p", { style: { padding: "0.5rem" } }, "Name of the query string parameter that will be appended to the URL above with the values provided below.")))), " ", /* @__PURE__ */ l.createElement(
      "input",
      {
        type: "text",
        defaultValue: B.queryParameter,
        onChange: (an) => {
          let en = [...o.filters];
          en[z].queryParameter = an.target.value, A({ ...o, filters: en });
        }
      }
    )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Values"), " "), /* @__PURE__ */ l.createElement("ul", { className: "value-list" }, B.orderedValues && B.orderedValues.map((an, en) => /* @__PURE__ */ l.createElement("li", null, an, /* @__PURE__ */ l.createElement(
      "input",
      {
        type: "text",
        placeholder: "Enter value display name here",
        value: B.labels ? B.labels[an] : void 0,
        className: "url-value-label",
        onChange: (Wn) => {
          let Xn = [...o.filters];
          Xn[z].labels = Xn[z].labels || {}, Xn[z].labels[an] = Wn.target.value, A({ ...o, filters: Xn });
        }
      }
    ), /* @__PURE__ */ l.createElement(
      "button",
      {
        onClick: () => {
          let Wn = [...o.filters];
          Wn[z].labels && delete Wn[z].labels[Wn[z].orderedValues[en]], Wn[z].orderedValues.splice(en, 1), A({ ...o, filters: Wn });
        }
      },
      "X"
    )))), /* @__PURE__ */ l.createElement(
      "form",
      {
        onSubmit: (an) => {
          if (an.preventDefault(), !o.filters[z].orderedValues || o.filters[z].orderedValues.indexOf(an.target[0].value) === -1) {
            let en = [...o.filters];
            en[z].orderedValues = en[z].orderedValues || [], en[z].orderedValues.push(an.target[0].value), en[z].values = en[z].orderedValues, en[z].active || (en[z].active = an.target[0].value), an.target[0].value = "", A({ ...o, filters: en });
          }
        }
      },
      /* @__PURE__ */ l.createElement("input", { type: "text", placeholder: "Enter new value name here" }),
      " ",
      /* @__PURE__ */ l.createElement("button", { type: "submit", style: { marginTop: "1em" } }, "Add New Value")
    ))
  ), /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: () => {
        A({ ...o, filters: o.filters ? [...o.filters, { type: "url", key: Date.now() }] : [{ type: "url", key: Date.now() }] });
      }
    },
    "Add New URL Filter"
  )), Be = o.visualizationType !== "Box Plot" && o.visualizationType !== "Scatter Plot";
  return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "left-col" }, o.type === "dashboard" && Object.keys(o.datasets).length > 0 && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "heading-3" }, "Data Sources"), /* @__PURE__ */ l.createElement("table", null, /* @__PURE__ */ l.createElement("thead", null, /* @__PURE__ */ l.createElement("tr", null, /* @__PURE__ */ l.createElement("th", null, "Name"), /* @__PURE__ */ l.createElement("th", null, "Size"), /* @__PURE__ */ l.createElement("th", null, "Type"), /* @__PURE__ */ l.createElement("th", { colSpan: 4 }, "Actions"))), /* @__PURE__ */ l.createElement("tbody", null, Object.keys(o.datasets).map(
    (B) => o.datasets[B].dataFileName && /* @__PURE__ */ l.createElement("tr", { key: `tr-${B}` }, /* @__PURE__ */ l.createElement("td", null, /* @__PURE__ */ l.createElement("input", { className: "dataset-name-input", type: "text", defaultValue: B, onBlur: (z) => Ce(B, z.target.value) })), /* @__PURE__ */ l.createElement("td", null, Rn(o.datasets[B].dataFileSize)), /* @__PURE__ */ l.createElement("td", null, o.datasets[B].dataFileFormat), /* @__PURE__ */ l.createElement("td", null, /* @__PURE__ */ l.createElement("button", { className: "btn btn-primary", onClick: () => be(B, "preview", !0) }, "Preview Data")), /* @__PURE__ */ l.createElement("td", null, /* @__PURE__ */ l.createElement(
      "button",
      {
        className: "btn btn-primary",
        onClick: () => {
          Nn === B ? (cn(void 0), Fn(""), Bn(!1)) : (cn(B), Fn(o.datasets[B].dataUrl || o.datasets[B].dataFileName), Bn(!!o.datasets[B].dataUrl));
        }
      },
      "Edit Data"
    )), /* @__PURE__ */ l.createElement("td", null, /* @__PURE__ */ l.createElement("button", { className: "btn btn-primary", onClick: () => Ee(B) }, "X")))
  )))), (pe == null ? void 0 : pe.data) && /* @__PURE__ */ l.createElement(l.Fragment, null, o.type !== "dashboard" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "heading-3" }, "Data Source"), /* @__PURE__ */ l.createElement("div", { className: "file-loaded-area" }, (o.dataFileSourceType === "file" || !o.dataFileSourceType) && /* @__PURE__ */ l.createElement("div", { className: "data-source-options" }, /* @__PURE__ */ l.createElement("div", { className: Jn ? "drag-active cdcdataviz-file-selector loaded-file" : "cdcdataviz-file-selector loaded-file", ...ye() }, /* @__PURE__ */ l.createElement("input", { ...he() }), Jn ? /* @__PURE__ */ l.createElement("p", null, "Drop file here") : /* @__PURE__ */ l.createElement("p", null, /* @__PURE__ */ l.createElement(Ua, null), " ", /* @__PURE__ */ l.createElement("span", null, o.dataFileName ?? "Replace data file"))), /* @__PURE__ */ l.createElement("div", null, Ne())), o.dataFileSourceType === "url" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "url-source-options" }, /* @__PURE__ */ l.createElement("div", null, ee()), /* @__PURE__ */ l.createElement("div", null, Ne())), o.dataUrl && (o.type === "chart" || o.type === "map") && Oe))), Be && /* @__PURE__ */ l.createElement(Hr, { visualizationKey: null, configureData: pe, updateDescriptionProp: (B, z) => ie(pe.dataFileName, B, z), config: o, setConfig: A })), (Nn || w) && // dataFileSourceType needs to be checked here since earlier versions did not track this state
  /* @__PURE__ */ l.createElement("div", { className: "load-data-area" }, /* @__PURE__ */ l.createElement("div", { className: "heading-3" }, Nn ? `Editing ${Nn}` : "Add Dataset"), /* @__PURE__ */ l.createElement(ku, { startingTab: Nn && o.datasets[Nn].dataFileSourceType === "url" ? 1 : 0 }, /* @__PURE__ */ l.createElement(Lt, { title: "Upload File", icon: /* @__PURE__ */ l.createElement(Ua, { className: "inline-icon" }) }, C && /* @__PURE__ */ l.createElement("p", { className: "alert--info" }, "The share path set for this website is: ", C), /* @__PURE__ */ l.createElement("div", { className: Dn ? "drag-active cdcdataviz-file-selector" : "cdcdataviz-file-selector", ...Me() }, /* @__PURE__ */ l.createElement("input", { ...Cn() }), Dn ? /* @__PURE__ */ l.createElement("p", null, "Drop file here") : /* @__PURE__ */ l.createElement("p", null, "Drag file to this area, or ", /* @__PURE__ */ l.createElement("span", null, "select a file"), ".")), /* @__PURE__ */ l.createElement("p", { className: "footnote" }, "Supported file types: ", Object.keys(qn).join(", "), ". Maximum file size ", wa, "MB.")), /* @__PURE__ */ l.createElement(Lt, { title: "Load from URL", icon: /* @__PURE__ */ l.createElement(xu, { className: "inline-icon" }) }, ee())), f && (Array.isArray(f) ? f.map((B, z) => /* @__PURE__ */ l.createElement("div", { className: "error-box slim mt-2", key: `error-${B}` }, /* @__PURE__ */ l.createElement("span", null, B), " ", /* @__PURE__ */ l.createElement(Ea, { className: "inline-icon dismiss-error", onClick: () => P(f.filter((an, en) => en !== z)) }))) : f.message), /* @__PURE__ */ l.createElement(Io.Provider, { value: { loadData: An, editingDataset: Nn, config: o } }, /* @__PURE__ */ l.createElement(Aa.Buttons, null))), o.type === "dashboard" && !w && /* @__PURE__ */ l.createElement("p", null, /* @__PURE__ */ l.createElement("button", { className: "btn btn-primary", onClick: () => yn(!0) }, "+ Add More Files")), te && /* @__PURE__ */ l.createElement("p", null, /* @__PURE__ */ l.createElement("button", { className: "btn btn-primary", onClick: () => Mn({ type: "EDITOR_SET_GLOBALACTIVE", payload: 2 }) }, "Configure your visualization")), /* @__PURE__ */ l.createElement("a", { href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, /* @__PURE__ */ l.createElement("div", null, /* @__PURE__ */ l.createElement("h3", null, "Get Help"), /* @__PURE__ */ l.createElement("p", null, "Documentation and examples on formatting data and configuring visualizations.")))), /* @__PURE__ */ l.createElement("div", { className: "right-col" }, /* @__PURE__ */ l.createElement(Gu, null)));
}
const oi = (o) => /* @__PURE__ */ I.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024", fill: "currentColor", ...o }, /* @__PURE__ */ I.createElement("path", { d: "M489.3,377.8H80.1v-288c0-8.4-6.8-15.2-15.2-15.2H34.7c-8.4,0-15.2,6.8-15.2,15.2v318.3c0,16.7,13.6,30.3,30.3,30.3h439.5 c8.4,0,15.2-6.8,15.2-15.2v-30.3C504.5,384.6,497.7,377.8,489.3,377.8z" }), /* @__PURE__ */ I.createElement("path", { d: "M459,105H347.2c-20.3,0-30.4,24.5-16.1,38.8l30.7,30.7L292.3,244l-69.5-69.5c-11.8-11.8-31-11.8-42.9,0l-65.1,65.1 c-5.9,5.9-5.9,15.5,0,21.4l21.4,21.4c5.9,5.9,15.5,5.9,21.4,0l43.6-43.6l69.5,69.5c11.8,11.8,31,11.8,42.9,0l90.9-90.9l30.7,30.7 c14.3,14.3,38.8,4.2,38.8-16.1V120.1C474.2,111.7,467.4,105,459,105z" }), /* @__PURE__ */ I.createElement("path", { d: "M991.2,280.5h-188l125.2,125.2c4.8,4.8,12.7,5.2,17.6,0.5c30.7-28.9,51.8-67.8,57.9-111.6 C1005,287.2,998.8,280.5,991.2,280.5L991.2,280.5z" }), /* @__PURE__ */ I.createElement("path", { d: "M978.7,229.2c-6.5-94.6-82.2-170.3-176.8-176.8c-7.2-0.5-13.3,5.6-13.3,12.8v177.3h177.3 C973.1,242.5,979.2,236.4,978.7,229.2L978.7,229.2z" }), /* @__PURE__ */ I.createElement("path", { d: "M750.5,280.5v-188c0-7.6-6.6-13.8-14.1-12.7C642,93.1,569.8,175.6,573.2,274.5C576.6,376,664,459.3,765.6,458 c39.9-0.5,76.8-13.4,107.2-34.9c6.3-4.4,6.7-13.7,1.2-19.1L750.5,280.5z" }), /* @__PURE__ */ I.createElement("path", { d: "M130.7,558l1.1,7.2l5.5,11.6l-2.8,12.1l-6.1-7.7l-3.9-8.8l-8.8-1.7L102,569h-3.9l2.2,7.7l7.7,11v11l2.2,12.1l9.9,1.1 l3.9,5.5l-12.1-1.7l-3.9,2.8l1.7,11.6l-2.2,12.7l0.5,14.9l-3.9,9.9l-4.4,14.3l3.3,9.9l2.2,12.7l1.7,9.4l-2.2,12.7l1.7,8.8l3.9,8.8 l3.3,11l2.8,7.2L128,772l5.5-0.6l7.7,1.1l-8.3,2.2l2.2,3.9l-7.2,1.1l6.6,7.2l6.6,7.2l-2.2,6.1l8.8,12.7l9.4,7.7l1.1,9.4l7.7,3.9 l10.5,3.3l8.3,7.2l7.2,4.4l7.7,6.1l4.4,3.3l5,11l28.1-0.6l55.2,19.3h45.8l-1.1-4.4h22.1l8.8,5l5,5l12.7,8.8l4.4,16l12.7,6.6l7.7,3.3 l10.5-12.7l13.8,1.7l5.5,4.4l14.9,24.3l5,6.1l3.9,13.8l29.2,11.6l-1.1-9.9l-1.1-13.8l9.4-11l-1.7-3.3l9.4-7.7l5,2.8l8.3-9.4l5-6.6 h7.2l16-3.3l11.6,5h8.8l3.3-3.9l3.9,2.8l0.6,5l11.6,3.9l11-1.7l9.4,0.6l-7.7-6.1l-0.6-3.3l5-2.8l-0.5-2.8H598l-8.8,1.1l5.5-5 l2.8-3.3l2.8,2.8l16-2.2l2.2,2.8h11l6.1-1.7l8.8-0.5l8.3,3.3l5-0.6l5,7.2l9.9,0.5l5.5-4.4h5.5l11,9.4l6.1,6.6l1.7,8.8l-1.1,11 l3.9,11.6l10.5,13.2l6.1,12.7l2.2,5l11-2.2l2.8-12.1v-18.2l-5.5-14.9l-1.7-3.9l-1.1-11l-9.4-11l-1.7-13.2l0.5-11l4.4-12.1l8.3-6.6 l-0.6-5l9.9-1.7l14.3-16l6.6-5.5l7.2,1.1l6.6-12.7l9.4-5c0,0,7.2,1.1,7.7-1.7c0.5-2.8,7.7-16,7.7-16l-7.7-4.4l4.4-3.9l1.1-2.8 l-4.4-11l-4.4-5l5.5-6.1l-4.4-5.5l-1.1-11l-0.6-9.4l3.3-2.8l2.2,13.8l1.7,6.6l3.9,6.1l-1.1,9.9l6.1-12.1l3.9-9.4l0.6-5.5l-5.5-6.6 l-0.6-2.8l1.7-1.7l8.8,5.5l2.8-6.6l6.1-6.1l1.1-6.6l-1.1-7.7l0.5-3.9l1.1-5.5l4.4,6.1h2.2l6.6-1.1l6.6-0.6l8.8-2.8l-1.7-3.3 l-8.8,0.6l-8.3,2.2l-3.9,2.2l-0.6-3.9l2.8-3.3l7.2-1.7l8.8-1.7l6.1-1.7l5-3.3l11.6,2.8c0,0,5,2.8,5.5,1.1c0.6-1.7,2.2-6.1,2.2-6.1 l-3.9-4.4l-1.7-6.6l1.1-11l1.1-8.8l5-6.6l1.1-2.8l3.3,1.7l10.5-11.6h3.9l8.8-1.1l2.8-5.5h7.7l6.6-5.5l-2.5-3l-3-7.4l-3.3-2.5 l1.4-18.5l-1.7-16.8l-9.9-3l-8.6,3l-4.7-0.6l-19,44.4l-8.8,0.6l-3.9,3.3l-46.9-0.3l-11.6,10.8l-7.2,4.4l-3.3,9.4l-1.7,5l-8.3,5.5 H774l-6.1-2.8l-7.7,1.1l-9.9,3.3l0.6,5l-0.6,8.8l-5,4.4l-9.9,2.2l-15.4,7.7l-11.6,3.9l-11,0.6l-6.6-5l3.3-6.1l1.7-1.7l2.2-6.1 l4.1-2.5l5.2-9.1l-5.5-7.2l-1.1-11.6l-7.2-2.2l-9.4,6.6l3.3-7.7l5.5-7.7l-2.2-7.2l-1.7-8.3l-8.8-3.3l-7.7-6.6l-9.4,3.9l0.6,7.2 l-5.5,6.6l-4.4-2.2l-8.3,9.4v11l1.1,11l5,7.7l-0.6,16.6l-10.5,9.9l-7.7,0.6l-3.9-11.6l-3.9-8.3l1.7-11l-1.7-11l3.9-7.2l2.2-7.2 l3.9-12.1l-8.8,9.9l5-17.1l7.7-6.6l9.4-0.6l7.2-3.3H667h9.4l6.1-1.7l7.2,1.1l3.3,5.5l13.8,5l2.8-7.7l-9.4,1.1l-6.1-0.6l-8.8-6.6 l-5.5-3.3l-6.3-4.7l-6.3,1.9l-6.1-4.4l-14.3,0.6l-7.7,5l-6.1-3.9l-7.2-4.4l-10.5-0.6l10.5-14.9l-12.1,5.5l-9.9,7.7l-9.9,5.5 l-8.8,1.1l-1.1-5.5l-18.2,3.9l15.3-13.4l10.8-7.9l13.4-10.5l-5.5-0.8l-18.2,0.6l-8.3-1.7l-7.4-1.2L558,564l-8.3,0.6l-15.7-3.9 l-4.1-5l-2.2-7.7l-3.9-3.6l0.3,4.1l-3.9,6.1l-387.3,0.3L130.7,558L130.7,558z" })), ai = (o) => /* @__PURE__ */ I.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.7", fill: "currentColor", ...o }, /* @__PURE__ */ I.createElement("path", { d: "M91,18.7H62c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h29c0.6,0,1-0.4,1-1v-6C92,19.1,91.6,18.7,91,18.7z M89.4,24.7H63.6 c-0.3,0-0.6-0.2-0.6-0.6v-2.9c0-0.3,0.2-0.6,0.6-0.6h25.9c0.3,0,0.6,0.2,0.6,0.6v2.9C90,24.4,89.8,24.7,89.4,24.7z" }), /* @__PURE__ */ I.createElement("path", { d: "M75,30.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1v-6C76,31.1,75.6,30.7,75,30.7z M73.7,36.7h-9.3 c-0.2,0-0.3-0.2-0.3-0.3V33c0-0.2,0.2-0.3,0.3-0.3h9.3c0.2,0,0.3,0.2,0.3,0.3v3.3C74,36.5,73.8,36.7,73.7,36.7z" }), /* @__PURE__ */ I.createElement("path", { d: "M81,43.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1v-6C82,44.1,81.6,43.7,81,43.7z M79.6,49.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.1c0-0.2,0.2-0.4,0.4-0.4h15.1c0.2,0,0.4,0.2,0.4,0.4v3.1C80,49.5,79.8,49.7,79.6,49.7z" }), /* @__PURE__ */ I.createElement("path", { d: "M47,12.7h6c0.6,0,1,0.4,1,1v52c0,0.6-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1v-52C46,13.1,46.4,12.7,47,12.7z" }), /* @__PURE__ */ I.createElement("path", { d: "M39,19.7v6c0,0.6-0.4,1-1,1H17c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h21C38.6,18.7,39,19.1,39,19.7z" }), /* @__PURE__ */ I.createElement("path", { d: "M39,31.7v6c0,0.6-0.4,1-1,1H8c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h30C38.6,30.7,39,31.1,39,31.7z" }), /* @__PURE__ */ I.createElement("path", { d: "M39,44.7v6c0,0.6-0.4,1-1,1H20c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h18C38.6,43.7,39,44.1,39,44.7z" }), /* @__PURE__ */ I.createElement("path", { d: "M39,57.7v6c0,0.6-0.4,1-1,1H25c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h13C38.6,56.7,39,57.1,39,57.7z" }), /* @__PURE__ */ I.createElement("path", { d: "M79,56.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v-6C80,57.1,79.6,56.7,79,56.7z M77.6,62.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.2c0-0.2,0.2-0.4,0.4-0.4h13.2c0.2,0,0.4,0.2,0.4,0.4v3.2C78,62.5,77.8,62.7,77.6,62.7z" })), ri = (o) => /* @__PURE__ */ I.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.3 82.6", fill: "currentColor", ...o }, /* @__PURE__ */ I.createElement("path", { d: "M83.9,61.4h-64V12.1c0-1.1-0.9-2-2-2h-5.5c-1.1,0-2,0.9-2,2v56.7c0,1.1,0.9,2,2,2h71.5c1.1,0,2-0.9,2-2v-5.5 C85.9,62.3,85,61.4,83.9,61.4z" }), /* @__PURE__ */ I.createElement("path", { d: "M67.1,47.3H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h40.3c1.1,0,2-0.9,2-2v-6.1C69.1,48.2,68.2,47.3,67.1,47.3L67.1,47.3z  M52,54.6H38.2c-0.7,0-1.3-0.4-1.3-1V51c0-0.5,0.6-1,1.3-1H52c0.7,0,1.3,0.4,1.3,1v2.6C53.3,54.1,52.8,54.6,52,54.6z" }), /* @__PURE__ */ I.createElement("path", { d: "M83.9,31.7H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h57.2c1.1,0,2-0.9,2-2v-6.1C85.9,32.6,85,31.7,83.9,31.7z M68.8,39 H45.2c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h23.7c0.7,0,1.3,0.4,1.3,1V38C70.2,38.5,69.6,39,68.8,39z" }), /* @__PURE__ */ I.createElement("path", { d: "M77,16.1H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2H77c1.1,0,2-0.9,2-2v-6.1C79,17,78.1,16.1,77,16.1z M58.9,23.4H36.6 c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h22.3c0.7,0,1.3,0.4,1.3,1v2.6C60.2,23,59.6,23.4,58.9,23.4z" })), ui = (o) => /* @__PURE__ */ I.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ I.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ I.createElement("g", null, /* @__PURE__ */ I.createElement("path", { d: "M30.22,49.19c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ I.createElement("path", { d: "M33.06,35.59c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ I.createElement("path", { d: "M48.12,37.83c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ I.createElement("circle", { cx: 49.64, cy: 22.73, r: 3.24 }), /* @__PURE__ */ I.createElement("path", { d: "M64.53,19.49c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ I.createElement("path", { d: "M57.95,31.11c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ I.createElement("path", { d: "M74.53,11.54c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }))), ii = (o) => /* @__PURE__ */ I.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ I.createElement("path", { d: "M54.68,29.14h-4.1V8.43h2.68c.5,0,.9-.15,1.19-.46,.46-.48,.44-1.11,.42-1.62,0-.11,0-.22,0-.34s0-.24,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-10.2c-.5,0-.9,.15-1.19,.46-.47,.48-.44,1.11-.42,1.62,0,.11,0,.23,0,.34s0,.23,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h2.68V29.14h-4.1c-1.33,0-2.42,1.09-2.42,2.42v31.31c0,1.33,1.09,2.42,2.42,2.42h4.1v7.97h-2.68c-.5,0-.9,.15-1.19,.46-.46,.48-.44,1.11-.42,1.62,0,.11,0,.22,0,.34s0,.24,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h10.2c.5,0,.9-.15,1.19-.46,.47-.48,.44-1.11,.42-1.62,0-.11,0-.23,0-.34s0-.23,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-2.68v-7.97h4.1c1.33,0,2.42-1.09,2.42-2.42V31.56c0-1.33-1.09-2.42-2.42-2.42Zm-2.42,20.5v10.81h-8.2v-10.81h8.2Zm-8.2-4.84v-10.81h8.2v10.81h-8.2Z" })), li = (o) => /* @__PURE__ */ I.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ I.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ I.createElement("path", { d: "M87.91,60.65c-.02-.12-2.46-12.63-5.53-24.97-5.97-23.99-8.8-26-10.99-26-2.54,0-4.17,3.55-7.92,12.31-.67,1.56-1.4,3.27-2.18,5.02-1.66-4.14-3.14-5.9-4.84-5.9-2.39,0-4.05,3.42-7.07,9.64-5.56,11.44-13.97,28.72-29.12,28.72-.8,0-1.46,.65-1.46,1.45s.65,1.45,1.46,1.45H86.48c.43,0,.85-.19,1.12-.53,.28-.34,.39-.78,.31-1.2Zm-46.88-1.25c8.93-4.92,15.3-15.3,19.83-24.54,2.62,8.88,4.97,20.28,5.83,24.58l-25.66-.04Z" })), si = (o) => /* @__PURE__ */ I.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ I.createElement("path", { d: "M18.29,39.57c0-1.03,.23-1.79,.68-2.28,.45-.49,1.06-.74,1.83-.74s1.42,.25,1.87,.74c.45,.49,.68,1.25,.68,2.29s-.23,1.79-.68,2.28c-.45,.5-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.25-.68-2.29Zm1.71-.02c0,.75,.09,1.25,.26,1.5,.13,.19,.31,.28,.54,.28s.42-.09,.55-.28c.17-.25,.25-.75,.25-1.5s-.08-1.24-.25-1.49c-.13-.19-.31-.29-.55-.29s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Zm2.47,9.08h-1.62l6.1-12.09h1.58l-6.05,12.09Zm3.55-3.01c0-1.03,.23-1.79,.68-2.28,.45-.49,1.07-.74,1.85-.74s1.4,.25,1.86,.74c.45,.5,.68,1.26,.68,2.28s-.23,1.79-.68,2.29c-.45,.49-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.26-.68-2.29Zm1.71,0c0,.75,.09,1.24,.26,1.49,.13,.19,.31,.29,.54,.29s.41-.09,.54-.28c.17-.25,.26-.75,.26-1.5s-.08-1.24-.25-1.5c-.13-.19-.31-.28-.55-.28s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Z" }), /* @__PURE__ */ I.createElement("path", { d: "M92.33,52.83v-20.42c0-1.61-1.31-2.93-2.93-2.93H6.65c-1.61,0-2.93,1.31-2.93,2.93v20.42c0,1.61,1.31,2.93,2.93,2.93H89.4c1.61,0,2.93-1.31,2.93-2.93Zm-52.34-2.93H9.58v-14.56h30.41v14.56Zm5.86-14.56h40.63v14.56H45.85v-14.56Z" })), ci = (o) => /* @__PURE__ */ I.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ I.createElement("path", { d: "M89.56,65.41H16.36V8.8c0-1.1-.9-2-2-2h-5.48c-1.1,0-2,.9-2,2V72.89c0,1.1,.9,2,2,2H89.56c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ I.createElement("path", { d: "M54.66,55.34c-17.76,0-33.46-17.8-34.12-18.56l-.98-1.13v-4.55l3.25,3.72c.15,.18,15.47,17.53,31.86,17.53h0c7.31,0,12.37-1.68,17.27-3.3,4.31-1.42,8.77-2.9,14.44-3.05l1.5-.04v3l-1.42,.04c-5.24,.14-9.29,1.48-13.59,2.9-5.13,1.69-10.43,3.45-18.22,3.45h0Z" }), /* @__PURE__ */ I.createElement("path", { d: "M87.84,59.04c-4.73-1.24-7.41-1.66-13.05-1.93-2.82-.14-5.22,.16-8,.5-2.73,.33-5.81,.71-10.06,.79-13.13,.27-23.77-4.63-37.17-17.31v-1.57c13.19,12.48,24.31,18.13,37.15,17.88,4.2-.08,7.26-.46,9.96-.79,2.83-.34,5.27-.64,8.17-.5,5.73,.28,8.2,.62,13,1.88v1.05Z" }), /* @__PURE__ */ I.createElement("path", { d: "M57.02,49.28c-19.55,0-30.91-14.65-37.69-23.41v-1.54c6.67,8.61,18.64,23.95,37.69,23.95,5.87,0,14.11-3.23,18.39-6.23,2.43-1.7,3.84-2.77,4.87-3.55,2.24-1.7,2.7-2.05,7.71-4.44l-.03,1.12c-4.92,2.34-4.91,2.47-7.08,4.12-1.04,.79-2.45,1.86-4.9,3.57-4.4,3.08-12.9,6.41-18.96,6.41Z" })), yi = (o) => /* @__PURE__ */ I.createElement("svg", { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.69", ...o }, /* @__PURE__ */ I.createElement("defs", null, /* @__PURE__ */ I.createElement("style", null, ".cls-1{fill:#231f20;}")), /* @__PURE__ */ I.createElement("rect", { className: "cls-1", x: 46.87, y: 5.79, width: 8.32, height: 67.79, rx: 1 }), /* @__PURE__ */ I.createElement("rect", { className: "cls-1", x: 23.98, y: 17.65, width: 8.32, height: 23.31, rx: 1, transform: "translate(57.44 1.16) rotate(90)" }), /* @__PURE__ */ I.createElement("rect", { className: "cls-1", x: 19.53, y: 25.99, width: 8.32, height: 32.21, rx: 1, transform: "translate(65.79 18.41) rotate(90)" }), /* @__PURE__ */ I.createElement("rect", { className: "cls-1", x: 27.33, y: 60.4, width: 8.32, height: 14.6, rx: 1, transform: "translate(99.19 36.2) rotate(90)" }), /* @__PURE__ */ I.createElement("path", { className: "cls-1", d: "M81,52.74v4.32H64.55V52.74H81m1-2H63.55a1,1,0,0,0-1,1v6.32a1,1,0,0,0,1,1H82a1,1,0,0,0,1-1V51.74a1,1,0,0,0-1-1Z" }), /* @__PURE__ */ I.createElement("path", { className: "cls-1", d: "M90,14.41v4.33H64.55V14.41H90m1-2H63.55a1,1,0,0,0-1,1v6.33a1,1,0,0,0,1,1H91a1,1,0,0,0,1-1V13.41a1,1,0,0,0-1-1Z" }));
function Ci() {
  const { config: o, tempConfig: f } = I.useContext(ct), y = I.useContext(kt);
  I.useEffect(() => {
    f && y({ type: "EDITOR_SAVE", payload: f });
  }, []);
  const C = ({ icon: A, label: P, type: d, subType: F = void 0, orientation: Fn = void 0, stacked: M = !1, generalType: Bn = "data" }) => {
    let w = !1, yn = !1, Nn;
    if (d === "map" && o.general) {
      let Mn = o.general.geoType;
      w = F === Mn;
    }
    d === "chart" && (w = F === o.visualizationType, yn = Fn === o.orientation && M === !0), (d === "dashboard" || d === "data-bite" || d === "markup-include") && (w = !0), d === "chart" && M ? Nn = o.type === d && w && o.visualizationSubType === "stacked" ? "active" : "" : d === "chart" && !M && o.visualizationSubType !== "stacked" && (Nn = o.type === d && w ? "active" : ""), d !== "chart" && (Nn = o.type === d && w && !yn ? "active" : "");
    let cn = () => {
      if (d === o.type)
        F !== o.visualizationType && y({ type: "EDITOR_SET_CONFIG", payload: { ...o, newViz: !0, visualizationType: F } }), y({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      else if (!o.type || window.confirm("Changing visualization type will clear configuration settings. Do you want to continue?")) {
        let qn = {
          newViz: !0,
          datasets: {},
          type: d
        };
        d === "map" ? qn.general = {
          ...qn.general,
          geoType: F,
          type: Bn
        } : qn.visualizationType = F, d === "chart" && (qn.visualizationSubType = M ? "stacked" : "regular", qn.orientation = Fn), y({ type: "EDITOR_SET_CONFIG", payload: qn }), y({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      }
    };
    return /* @__PURE__ */ l.createElement("button", { className: Nn, onClick: () => cn(), "aria-label": P }, A, /* @__PURE__ */ l.createElement("span", { className: "mt-1" }, P));
  };
  return /* @__PURE__ */ l.createElement("div", { className: "choose-vis" }, /* @__PURE__ */ l.createElement("a", { href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/index.html", target: "_blank", rel: "noopener noreferrer", className: "guidance-link", style: { marginTop: 0, marginBottom: "2rem" } }, /* @__PURE__ */ l.createElement("div", null, /* @__PURE__ */ l.createElement("p", null, "For more information on the types of data visualizations in the WCMS, including examples and best practices, ", /* @__PURE__ */ l.createElement("u", null, "see the WCMS Features Gallery"), "."))), /* @__PURE__ */ l.createElement("div", { className: "heading-2" }, "General"), /* @__PURE__ */ l.createElement("ul", { className: "grid cove-temp" }, " ", /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, { position: "right" }, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Dashboard", type: "dashboard", icon: /* @__PURE__ */ l.createElement(oi, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Present multiple data visualizations with shared filter controls."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Data Bite", type: "data-bite", icon: /* @__PURE__ */ l.createElement(Tr, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Highlight a single aggregated value (e.g., sum or median)."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Waffle Chart", type: "waffle-chart", subType: "Waffle", icon: /* @__PURE__ */ l.createElement(Pr, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Highlight a piece of data in relationship to a data set."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Gauge Chart", type: "waffle-chart", subType: "Gauge", icon: /* @__PURE__ */ l.createElement(si, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Specify the calculation of a single data point (such as a percentage value) and present it on a horizontal scale.")))), /* @__PURE__ */ l.createElement("div", { className: "heading-2" }, "Charts"), /* @__PURE__ */ l.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, { position: "right" }, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Bar", type: "chart", subType: "Bar", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(Er, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Use bars to show comparisons between data categories."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Line", type: "chart", subType: "Line", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(Ir, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Present one or more data trends over time."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Pie", type: "chart", subType: "Pie", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(Lr, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Present the numerical proportions of a data series."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Paired Bar", type: "chart", subType: "Paired Bar", orientation: "horizontal", icon: /* @__PURE__ */ l.createElement(ai, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Use paired bars to show comparisons between two different data categories."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Deviation Bar", type: "chart", subType: "Deviation Bar", orientation: "horizontal", stacked: !1, icon: /* @__PURE__ */ l.createElement(yi, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Use deviation bars to display how individual values differ from a target."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Horizontal Bar (Stacked)", type: "chart", subType: "Bar", orientation: "horizontal", stacked: !0, icon: /* @__PURE__ */ l.createElement(ri, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Use bars to show comparisons between data categories.")))), /* @__PURE__ */ l.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Box Plot", type: "chart", subType: "Box Plot", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(ii, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Display a box plot"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Scatter Plot", type: "chart", subType: "Scatter Plot", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(ui, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Display a scatter plot"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Area Chart", type: "chart", subType: "Area Chart", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(li, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Display an area chart"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Forecast Chart", type: "chart", subType: "Forecasting", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(ci, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Display a forecasting chart"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Sankey Diagram", type: "chart", subType: "Sankey", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(kr, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Display a sankey diagram")))), /* @__PURE__ */ l.createElement("div", { className: "heading-2" }, "Maps"), /* @__PURE__ */ l.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, { position: "right" }, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "United States (State- or County-Level)", type: "map", subType: "us", icon: /* @__PURE__ */ l.createElement(Ia, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Present a U.S. choropleth map at state or county level."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, { position: "right" }, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "United States (HHS Regions)", type: "map", subType: "us-region", icon: /* @__PURE__ */ l.createElement(Ar, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Present a U.S. choropleth map at state or county level."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "World", type: "map", subType: "world", icon: /* @__PURE__ */ l.createElement(Or, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Present a choropleth map of the world."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "U.S. State", type: "map", subType: "single-state", icon: /* @__PURE__ */ l.createElement(Br, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Present a choropleth map of an individual U.S. state."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(C, { label: "U.S. Geocode", type: "map", subType: "us-county", generalType: "us-geocode", icon: /* @__PURE__ */ l.createElement(Ia, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "United States GeoCode")))));
}
function di({ containerEl: o }) {
  const { config: f, setTempConfig: y, hostname: C, isDebug: A } = I.useContext(ct);
  let { type: P } = f;
  switch (P) {
    case "map":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcMap" }, /* @__PURE__ */ l.createElement(Sr, { isEditor: !0, isDebug: A, config: f, hostname: C, setConfig: y, containerEl: o }));
    case "waffle-chart":
      if (f.visualizationType === "Waffle" || f.visualizationType === "Gauge")
        return /* @__PURE__ */ l.createElement(lt, { component: "CdcWaffleChart" }, /* @__PURE__ */ l.createElement(hr, { isEditor: !0, isDebug: A, config: f, setConfig: y }));
      break;
    case "chart":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcChart" }, /* @__PURE__ */ l.createElement(vr, { isEditor: !0, isDebug: A, config: f, setConfig: y }));
    case "dashboard":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ l.createElement(mr, { isEditor: !0, isDebug: A, config: f }));
    case "data-bite":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ l.createElement(gr, { isEditor: !0, isDebug: A, config: f, setConfig: y }));
    case "markup-include":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ l.createElement(pr, { isEditor: !0, isDebug: A, config: f, setConfig: y }));
    default:
      return /* @__PURE__ */ l.createElement("p", null, "No visualization type selected.");
  }
}
const cr = (o) => {
  let f = { ...o };
  return f.type === "dashboard" ? (f.datasets && Object.keys(f.datasets).forEach((y) => {
    delete f.datasets[y].formattedData, f.datasets[y].dataUrl && delete f.datasets[y].data;
  }), f.visualizations && Object.keys(f.visualizations).forEach((y) => {
    f.visualizations[y] = Ro.omit(f.visualizations[y], ["runtime", "formattedData", "data"]);
  }), f.rows && f.rows.forEach((y) => {
    y.dataKey && (y = Ro.omit(y, ["data", "formattedData"]));
  })) : (delete f.runtime, delete f.formattedData, f.dataUrl && delete f.data), f;
}, fi = (o) => {
  if (o !== null) {
    let f = cr(o);
    const y = JSON.stringify(f), C = new CustomEvent("updateVizConfig", { detail: y, bubbles: !0 });
    window.dispatchEvent(C);
  }
}, pi = (o) => {
  var f;
  if (o.type === "dashboard") {
    let y = !1, C;
    if (o.data || o.dataUrl) {
      y = !0, C = { ...o };
      const A = o.dataFileName || "dataset-1";
      C.datasets = {}, C.datasets[A] = {
        ...Ro.pick(o, ["data", "dataUrl", "dataFileSourceType"]),
        dataFileName: A
      }, Object.keys(C.visualizations).forEach((d) => {
        const F = { dataKey: A, ...Ro.pick(C, "dataDescription", "formattedData") };
        C.visualizations[d] = { ...C.visualizations[d], ...F };
      }), C = { ...C, ...{ data: [], dataUrl: "", dataFileName: "", dataFileSourceType: "", dataDescription: [], formattedData: [] } };
    }
    if ((f = o.dashboard) != null && f.filters) {
      y = !0, C = { ...o };
      const A = { ...C.dashboard };
      A.sharedFilters || (A.sharedFilters = []);
      const P = A.filters.map((d) => ({ ...d, key: d.label, showDropdown: !0, usedBy: Object.keys(C.visualizations) }));
      A.sharedFilters = [...A.sharedFilters, ...P], C.dashboard = { ...A, filters: void 0 };
    }
    if (y)
      return C;
  }
  return o;
};
const gi = (o, f) => {
  switch (f.type) {
    case "EDITOR_SAVE":
      return { ...o, config: f.payload, tempConfig: null };
    case "EDITOR_SET_CONFIG":
      return { ...o, config: f.payload };
    case "EDITOR_TEMP_SAVE":
      return { ...o, tempConfig: f.payload };
    case "EDITOR_SET_ERRORS":
      return { ...o, errors: f.payload };
    case "EDITOR_SET_VIEWPORT":
      return { ...o, currentViewport: f.payload };
    case "EDITOR_SET_GLOBALACTIVE":
      return { ...o, globalActive: f.payload };
    default:
      return o;
  }
}, mi = wr(gi), vi = ({ config: o, hostname: f, containerEl: y, sharepath: C, isDebug: A }) => {
  const P = I.useMemo(() => {
    let yn = 0;
    return (o != null && o.data || o != null && o.dataUrl) && (o != null && o.type) && (yn = 2), { config: pi(o || { newViz: !0, errors: [], currentViewport: "lg" }), errors: [], currentViewport: "lg", globalActive: yn, sharepath: C, isDebug: A, hostname: f };
  }, [o]);
  I.useEffect(() => {
    var yn;
    Ra && ((yn = Ra) == null || yn.init());
  }, []);
  const [d, F] = I.useReducer(mi, P), Fn = (yn) => {
    fi(JSON.parse(JSON.stringify(yn))), F({ type: "EDITOR_TEMP_SAVE", payload: yn });
  }, M = new dr((yn) => {
    const Nn = yn[0];
    let { width: cn } = Nn.contentRect, Mn = fr(cn);
    F({ type: "EDITOR_SET_VIEWPORT", payload: Mn });
  }), Bn = I.useCallback((yn) => {
    yn !== null && M.observe(yn);
  }, []);
  I.useEffect(() => {
    let yn = cr(d.config);
    const Nn = JSON.stringify(yn), cn = new CustomEvent("updateVizConfig", { detail: Nn });
    window.dispatchEvent(cn);
  }, [d.config]);
  const w = I.useMemo(() => {
    d.config.type !== "dashboard" ? d.config.formattedData : d.config.datasets && Object.keys(d.config.datasets).length > 0;
  }, [d.config.type, d.config.datasets]);
  return /* @__PURE__ */ l.createElement(Mr, null, /* @__PURE__ */ l.createElement(ct.Provider, { value: { ...d, setTempConfig: Fn } }, /* @__PURE__ */ l.createElement(kt.Provider, { value: F }, /* @__PURE__ */ l.createElement("div", { className: `cdc-open-viz-module cdc-editor ${d.currentViewport}`, ref: Bn }, /* @__PURE__ */ l.createElement(Lu, { className: "top-level" }, /* @__PURE__ */ l.createElement(Lt, { title: "1. Choose Visualization Type", className: "choose-type" }, /* @__PURE__ */ l.createElement(Ci, null)), /* @__PURE__ */ l.createElement(Lt, { title: "2. Import Data", className: "data-designer", disableRule: !d.config.type }, /* @__PURE__ */ l.createElement(ti, null)), /* @__PURE__ */ l.createElement(Lt, { title: "3. Configure", className: "configure", disableRule: w }, /* @__PURE__ */ l.createElement(di, { containerEl: y })))))), /* @__PURE__ */ l.createElement(br, null));
}, t0 = {
  title: "Components/Pages/CdcEditor",
  component: vi
}, No = {
  args: {
    config: {}
  }
};
var Ja, $a, Za;
No.parameters = {
  ...No.parameters,
  docs: {
    ...(Ja = No.parameters) == null ? void 0 : Ja.docs,
    source: {
      originalSource: `{
  args: {
    config: {}
  }
}`,
      ...(Za = ($a = No.parameters) == null ? void 0 : $a.docs) == null ? void 0 : Za.source
    }
  }
};
const o0 = ["DefaultEditor"];
export {
  No as DefaultEditor,
  o0 as __namedExportsOrder,
  t0 as default
};
