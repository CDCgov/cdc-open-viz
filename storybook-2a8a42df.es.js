import { r as D, R as c } from "./storybook-e61d95ab.es.js";
import { i as Bu, g as Fu } from "./storybook-a2b11335.es.js";
import { C as Ht, E as Gt, F as xu, g as uu, a as Wu, b as br, c as Hu, i as sa, I as Gu, t as qu, V as Vu, Z as Ku, d as zu, e as Xu, f as ca, G as ju, O as Yu } from "./storybook-d755757b.es.js";
import { P as Qn } from "./storybook-b8c9afe4.es.js";
import "./storybook-9c2b8003.es.js";
import { g as Uu, c as iu } from "./storybook-c5d32002.es.js";
import { D as _u } from "./storybook-b554456e.es.js";
import { a as ya, d as Ca, e as Ju, f as $u, b as Zu, g as Qu, h as ni, i as da, j as ei, k as ti } from "./storybook-60d140a8.es.js";
import { f as Fo } from "./storybook-03c45984.es.js";
import { D as oi } from "./storybook-0d7692d1.es.js";
import { T as cn } from "./storybook-46a89ba7.es.js";
import { S as ri } from "./storybook-ecf3351a.es.js";
import { L as ai, E as dt } from "./storybook-a0c99f4a.es.js";
import { _ as xo } from "./storybook-c757ed74.es.js";
import "./storybook-826feda6.es.js";
import "./storybook-8d78bf52.es.js";
import "./storybook-9dde4f4f.es.js";
import "./storybook-76833471.es.js";
import "./storybook-bedc547d.es.js";
import "./storybook-24623c03.es.js";
import "./storybook-0b963b46.es.js";
import "./storybook-96bcff98.es.js";
import "./storybook-7df1b381.es.js";
import "./storybook-c11e9ca9.es.js";
var fa = {}, Ar = {}, Dr = 34, Ft = 10, Rr = 13;
function lu(n) {
  return new Function("d", "return {" + n.map(function(r, a) {
    return JSON.stringify(r) + ": d[" + a + '] || ""';
  }).join(",") + "}");
}
function ui(n, r) {
  var a = lu(n);
  return function(i, p) {
    return r(a(i), p, n);
  };
}
function pa(n) {
  var r = /* @__PURE__ */ Object.create(null), a = [];
  return n.forEach(function(i) {
    for (var p in i)
      p in r || a.push(r[p] = p);
  }), a;
}
function be(n, r) {
  var a = n + "", i = a.length;
  return i < r ? new Array(r - i + 1).join(0) + a : a;
}
function ii(n) {
  return n < 0 ? "-" + be(-n, 6) : n > 9999 ? "+" + be(n, 6) : be(n, 4);
}
function li(n) {
  var r = n.getUTCHours(), a = n.getUTCMinutes(), i = n.getUTCSeconds(), p = n.getUTCMilliseconds();
  return isNaN(n) ? "Invalid Date" : ii(n.getUTCFullYear()) + "-" + be(n.getUTCMonth() + 1, 2) + "-" + be(n.getUTCDate(), 2) + (p ? "T" + be(r, 2) + ":" + be(a, 2) + ":" + be(i, 2) + "." + be(p, 3) + "Z" : i ? "T" + be(r, 2) + ":" + be(a, 2) + ":" + be(i, 2) + "Z" : a || r ? "T" + be(r, 2) + ":" + be(a, 2) + "Z" : "");
}
function si(n) {
  var r = new RegExp('["' + n + `
\r]`), a = n.charCodeAt(0);
  function i(S, B) {
    var I, j, Q = p(S, function(Y, mn) {
      if (I)
        return I(Y, mn - 1);
      j = Y, I = B ? ui(Y, B) : lu(Y);
    });
    return Q.columns = j || [], Q;
  }
  function p(S, B) {
    var I = [], j = S.length, Q = 0, Y = 0, mn, In = j <= 0, Cn = !1;
    S.charCodeAt(j - 1) === Ft && --j, S.charCodeAt(j - 1) === Rr && --j;
    function Xn() {
      if (In)
        return Ar;
      if (Cn)
        return Cn = !1, fa;
      var hn, Tn = Q, vn;
      if (S.charCodeAt(Tn) === Dr) {
        for (; Q++ < j && S.charCodeAt(Q) !== Dr || S.charCodeAt(++Q) === Dr; )
          ;
        return (hn = Q) >= j ? In = !0 : (vn = S.charCodeAt(Q++)) === Ft ? Cn = !0 : vn === Rr && (Cn = !0, S.charCodeAt(Q) === Ft && ++Q), S.slice(Tn + 1, hn - 1).replace(/""/g, '"');
      }
      for (; Q < j; ) {
        if ((vn = S.charCodeAt(hn = Q++)) === Ft)
          Cn = !0;
        else if (vn === Rr)
          Cn = !0, S.charCodeAt(Q) === Ft && ++Q;
        else if (vn !== a)
          continue;
        return S.slice(Tn, hn);
      }
      return In = !0, S.slice(Tn, j);
    }
    for (; (mn = Xn()) !== Ar; ) {
      for (var kn = []; mn !== fa && mn !== Ar; )
        kn.push(mn), mn = Xn();
      B && (kn = B(kn, Y++)) == null || I.push(kn);
    }
    return I;
  }
  function A(S, B) {
    return S.map(function(I) {
      return B.map(function(j) {
        return Sn(I[j]);
      }).join(n);
    });
  }
  function C(S, B) {
    return B == null && (B = pa(S)), [B.map(Sn).join(n)].concat(A(S, B)).join(`
`);
  }
  function N(S, B) {
    return B == null && (B = pa(S)), A(S, B).join(`
`);
  }
  function _(S) {
    return S.map(m).join(`
`);
  }
  function m(S) {
    return S.map(Sn).join(n);
  }
  function Sn(S) {
    return S == null ? "" : S instanceof Date ? li(S) : r.test(S += "") ? '"' + S.replace(/"/g, '""') + '"' : S;
  }
  return {
    parse: i,
    parseRows: p,
    format: C,
    formatBody: N,
    formatRows: _,
    formatRow: m,
    formatValue: Sn
  };
}
var ci = si(","), yi = ci.parse;
function mt(n, r, a, i) {
  function p(A) {
    return A instanceof a ? A : new a(function(C) {
      C(A);
    });
  }
  return new (a || (a = Promise))(function(A, C) {
    function N(Sn) {
      try {
        m(i.next(Sn));
      } catch (S) {
        C(S);
      }
    }
    function _(Sn) {
      try {
        m(i.throw(Sn));
      } catch (S) {
        C(S);
      }
    }
    function m(Sn) {
      Sn.done ? A(Sn.value) : p(Sn.value).then(N, _);
    }
    m((i = i.apply(n, r || [])).next());
  });
}
function ht(n, r) {
  var a = { label: 0, sent: function() {
    if (A[0] & 1)
      throw A[1];
    return A[1];
  }, trys: [], ops: [] }, i, p, A, C;
  return C = { next: N(0), throw: N(1), return: N(2) }, typeof Symbol == "function" && (C[Symbol.iterator] = function() {
    return this;
  }), C;
  function N(m) {
    return function(Sn) {
      return _([m, Sn]);
    };
  }
  function _(m) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; C && (C = 0, m[0] && (a = 0)), a; )
      try {
        if (i = 1, p && (A = m[0] & 2 ? p.return : m[0] ? p.throw || ((A = p.return) && A.call(p), 0) : p.next) && !(A = A.call(p, m[1])).done)
          return A;
        switch (p = 0, A && (m = [m[0] & 2, A.value]), m[0]) {
          case 0:
          case 1:
            A = m;
            break;
          case 4:
            return a.label++, { value: m[1], done: !1 };
          case 5:
            a.label++, p = m[1], m = [0];
            continue;
          case 7:
            m = a.ops.pop(), a.trys.pop();
            continue;
          default:
            if (A = a.trys, !(A = A.length > 0 && A[A.length - 1]) && (m[0] === 6 || m[0] === 2)) {
              a = 0;
              continue;
            }
            if (m[0] === 3 && (!A || m[1] > A[0] && m[1] < A[3])) {
              a.label = m[1];
              break;
            }
            if (m[0] === 6 && a.label < A[1]) {
              a.label = A[1], A = m;
              break;
            }
            if (A && a.label < A[2]) {
              a.label = A[2], a.ops.push(m);
              break;
            }
            A[2] && a.ops.pop(), a.trys.pop();
            continue;
        }
        m = r.call(n, a);
      } catch (Sn) {
        m = [6, Sn], p = 0;
      } finally {
        i = A = 0;
      }
    if (m[0] & 5)
      throw m[1];
    return { value: m[0] ? m[1] : void 0, done: !0 };
  }
}
function Ci(n, r) {
  var a = typeof Symbol == "function" && n[Symbol.iterator];
  if (!a)
    return n;
  var i = a.call(n), p, A = [], C;
  try {
    for (; (r === void 0 || r-- > 0) && !(p = i.next()).done; )
      A.push(p.value);
  } catch (N) {
    C = { error: N };
  } finally {
    try {
      p && !p.done && (a = i.return) && a.call(i);
    } finally {
      if (C)
        throw C.error;
    }
  }
  return A;
}
function di() {
  for (var n = [], r = 0; r < arguments.length; r++)
    n = n.concat(Ci(arguments[r]));
  return n;
}
var fi = /* @__PURE__ */ new Map([
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
function qt(n, r) {
  var a = pi(n);
  if (typeof a.path != "string") {
    var i = n.webkitRelativePath;
    Object.defineProperty(a, "path", {
      value: typeof r == "string" ? r : typeof i == "string" && i.length > 0 ? i : n.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return a;
}
function pi(n) {
  var r = n.name, a = r && r.lastIndexOf(".") !== -1;
  if (a && !n.type) {
    var i = r.split(".").pop().toLowerCase(), p = fi.get(i);
    p && Object.defineProperty(n, "type", {
      value: p,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return n;
}
var gi = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function mi(n) {
  return mt(this, void 0, void 0, function() {
    return ht(this, function(r) {
      return Wo(n) && hi(n) ? [2, Mi(n.dataTransfer, n.type)] : vi(n) ? [2, Si(n)] : Array.isArray(n) && n.every(function(a) {
        return "getFile" in a && typeof a.getFile == "function";
      }) ? [2, wi(n)] : [2, []];
    });
  });
}
function hi(n) {
  return Wo(n.dataTransfer);
}
function vi(n) {
  return Wo(n) && Wo(n.target);
}
function Wo(n) {
  return typeof n == "object" && n !== null;
}
function Si(n) {
  return zr(n.target.files).map(function(r) {
    return qt(r);
  });
}
function wi(n) {
  return mt(this, void 0, void 0, function() {
    var r;
    return ht(this, function(a) {
      switch (a.label) {
        case 0:
          return [4, Promise.all(n.map(function(i) {
            return i.getFile();
          }))];
        case 1:
          return r = a.sent(), [2, r.map(function(i) {
            return qt(i);
          })];
      }
    });
  });
}
function Mi(n, r) {
  return mt(this, void 0, void 0, function() {
    var a, i;
    return ht(this, function(p) {
      switch (p.label) {
        case 0:
          return n === null ? [2, []] : n.items ? (a = zr(n.items).filter(function(A) {
            return A.kind === "file";
          }), r !== "drop" ? [2, a] : [4, Promise.all(a.map(bi))]) : [3, 2];
        case 1:
          return i = p.sent(), [2, ga(su(i))];
        case 2:
          return [2, ga(zr(n.files).map(function(A) {
            return qt(A);
          }))];
      }
    });
  });
}
function ga(n) {
  return n.filter(function(r) {
    return gi.indexOf(r.name) === -1;
  });
}
function zr(n) {
  if (n === null)
    return [];
  for (var r = [], a = 0; a < n.length; a++) {
    var i = n[a];
    r.push(i);
  }
  return r;
}
function bi(n) {
  if (typeof n.webkitGetAsEntry != "function")
    return ma(n);
  var r = n.webkitGetAsEntry();
  return r && r.isDirectory ? cu(r) : ma(n);
}
function su(n) {
  return n.reduce(function(r, a) {
    return di(r, Array.isArray(a) ? su(a) : [a]);
  }, []);
}
function ma(n) {
  var r = n.getAsFile();
  if (!r)
    return Promise.reject(n + " is not a File");
  var a = qt(r);
  return Promise.resolve(a);
}
function Ai(n) {
  return mt(this, void 0, void 0, function() {
    return ht(this, function(r) {
      return [2, n.isDirectory ? cu(n) : Di(n)];
    });
  });
}
function cu(n) {
  var r = n.createReader();
  return new Promise(function(a, i) {
    var p = [];
    function A() {
      var C = this;
      r.readEntries(function(N) {
        return mt(C, void 0, void 0, function() {
          var _, m, Sn;
          return ht(this, function(S) {
            switch (S.label) {
              case 0:
                if (N.length)
                  return [3, 5];
                S.label = 1;
              case 1:
                return S.trys.push([1, 3, , 4]), [4, Promise.all(p)];
              case 2:
                return _ = S.sent(), a(_), [3, 4];
              case 3:
                return m = S.sent(), i(m), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                Sn = Promise.all(N.map(Ai)), p.push(Sn), A(), S.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(N) {
        i(N);
      });
    }
    A();
  });
}
function Di(n) {
  return mt(this, void 0, void 0, function() {
    return ht(this, function(r) {
      return [2, new Promise(function(a, i) {
        n.file(function(p) {
          var A = qt(p, n.fullPath);
          a(A);
        }, function(p) {
          i(p);
        });
      })];
    });
  });
}
var Ri = function(n, r) {
  if (n && r) {
    var a = Array.isArray(r) ? r : r.split(","), i = n.name || "", p = (n.type || "").toLowerCase(), A = p.replace(/\/.*$/, "");
    return a.some(function(C) {
      var N = C.trim().toLowerCase();
      return N.charAt(0) === "." ? i.toLowerCase().endsWith(N) : N.endsWith("/*") ? A === N.replace(/\/.*$/, "") : p === N;
    });
  }
  return !0;
};
function ha(n, r) {
  var a = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    r && (i = i.filter(function(p) {
      return Object.getOwnPropertyDescriptor(n, p).enumerable;
    })), a.push.apply(a, i);
  }
  return a;
}
function va(n) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ha(Object(a), !0).forEach(function(i) {
      yu(n, i, a[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : ha(Object(a)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(a, i));
    });
  }
  return n;
}
function yu(n, r, a) {
  return r in n ? Object.defineProperty(n, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : n[r] = a, n;
}
function Sa(n, r) {
  return Pi(n) || Ti(n, r) || Ei(n, r) || Ni();
}
function Ni() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ei(n, r) {
  if (n) {
    if (typeof n == "string")
      return wa(n, r);
    var a = Object.prototype.toString.call(n).slice(8, -1);
    if (a === "Object" && n.constructor && (a = n.constructor.name), a === "Map" || a === "Set")
      return Array.from(n);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return wa(n, r);
  }
}
function wa(n, r) {
  (r == null || r > n.length) && (r = n.length);
  for (var a = 0, i = new Array(r); a < r; a++)
    i[a] = n[a];
  return i;
}
function Ti(n, r) {
  var a = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (a != null) {
    var i = [], p = !0, A = !1, C, N;
    try {
      for (a = a.call(n); !(p = (C = a.next()).done) && (i.push(C.value), !(r && i.length === r)); p = !0)
        ;
    } catch (_) {
      A = !0, N = _;
    } finally {
      try {
        !p && a.return != null && a.return();
      } finally {
        if (A)
          throw N;
      }
    }
    return i;
  }
}
function Pi(n) {
  if (Array.isArray(n))
    return n;
}
var Ii = "file-invalid-type", Li = "file-too-large", ki = "file-too-small", Oi = "too-many-files", Bi = function(r) {
  r = Array.isArray(r) && r.length === 1 ? r[0] : r;
  var a = Array.isArray(r) ? "one of ".concat(r.join(", ")) : r;
  return {
    code: Ii,
    message: "File type must be ".concat(a)
  };
}, Ma = function(r) {
  return {
    code: Li,
    message: "File is larger than ".concat(r, " ").concat(r === 1 ? "byte" : "bytes")
  };
}, ba = function(r) {
  return {
    code: ki,
    message: "File is smaller than ".concat(r, " ").concat(r === 1 ? "byte" : "bytes")
  };
}, Fi = {
  code: Oi,
  message: "Too many files"
};
function Cu(n, r) {
  var a = n.type === "application/x-moz-file" || Ri(n, r);
  return [a, a ? null : Bi(r)];
}
function du(n, r, a) {
  if (xt(n.size))
    if (xt(r) && xt(a)) {
      if (n.size > a)
        return [!1, Ma(a)];
      if (n.size < r)
        return [!1, ba(r)];
    } else {
      if (xt(r) && n.size < r)
        return [!1, ba(r)];
      if (xt(a) && n.size > a)
        return [!1, Ma(a)];
    }
  return [!0, null];
}
function xt(n) {
  return n != null;
}
function xi(n) {
  var r = n.files, a = n.accept, i = n.minSize, p = n.maxSize, A = n.multiple, C = n.maxFiles;
  return !A && r.length > 1 || A && C >= 1 && r.length > C ? !1 : r.every(function(N) {
    var _ = Cu(N, a), m = Sa(_, 1), Sn = m[0], S = du(N, i, p), B = Sa(S, 1), I = B[0];
    return Sn && I;
  });
}
function Ho(n) {
  return typeof n.isPropagationStopped == "function" ? n.isPropagationStopped() : typeof n.cancelBubble < "u" ? n.cancelBubble : !1;
}
function Po(n) {
  return n.dataTransfer ? Array.prototype.some.call(n.dataTransfer.types, function(r) {
    return r === "Files" || r === "application/x-moz-file";
  }) : !!n.target && !!n.target.files;
}
function Aa(n) {
  n.preventDefault();
}
function Wi(n) {
  return n.indexOf("MSIE") !== -1 || n.indexOf("Trident/") !== -1;
}
function Hi(n) {
  return n.indexOf("Edge/") !== -1;
}
function Gi() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Wi(n) || Hi(n);
}
function Fe() {
  for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
    r[a] = arguments[a];
  return function(i) {
    for (var p = arguments.length, A = new Array(p > 1 ? p - 1 : 0), C = 1; C < p; C++)
      A[C - 1] = arguments[C];
    return r.some(function(N) {
      return !Ho(i) && N && N.apply(void 0, [i].concat(A)), Ho(i);
    });
  };
}
function Da() {
  return "showOpenFilePicker" in window;
}
function qi(n) {
  return n = typeof n == "string" ? n.split(",") : n, [{
    description: "everything",
    // TODO: Need to handle filtering more elegantly than this!
    accept: Array.isArray(n) ? n.filter(function(r) {
      return r === "audio/*" || r === "video/*" || r === "image/*" || r === "text/*" || /\w+\/[-+.\w]+/g.test(r);
    }).reduce(function(r, a) {
      return va(va({}, r), {}, yu({}, a, []));
    }, {}) : {}
  }];
}
var Vi = ["children"], Ki = ["open"], zi = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Xi = ["refKey", "onChange", "onClick"];
function ji(n) {
  return _i(n) || Ui(n) || fu(n) || Yi();
}
function Yi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ui(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null)
    return Array.from(n);
}
function _i(n) {
  if (Array.isArray(n))
    return Xr(n);
}
function Nr(n, r) {
  return Zi(n) || $i(n, r) || fu(n, r) || Ji();
}
function Ji() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fu(n, r) {
  if (n) {
    if (typeof n == "string")
      return Xr(n, r);
    var a = Object.prototype.toString.call(n).slice(8, -1);
    if (a === "Object" && n.constructor && (a = n.constructor.name), a === "Map" || a === "Set")
      return Array.from(n);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Xr(n, r);
  }
}
function Xr(n, r) {
  (r == null || r > n.length) && (r = n.length);
  for (var a = 0, i = new Array(r); a < r; a++)
    i[a] = n[a];
  return i;
}
function $i(n, r) {
  var a = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (a != null) {
    var i = [], p = !0, A = !1, C, N;
    try {
      for (a = a.call(n); !(p = (C = a.next()).done) && (i.push(C.value), !(r && i.length === r)); p = !0)
        ;
    } catch (_) {
      A = !0, N = _;
    } finally {
      try {
        !p && a.return != null && a.return();
      } finally {
        if (A)
          throw N;
      }
    }
    return i;
  }
}
function Zi(n) {
  if (Array.isArray(n))
    return n;
}
function Ra(n, r) {
  var a = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    r && (i = i.filter(function(p) {
      return Object.getOwnPropertyDescriptor(n, p).enumerable;
    })), a.push.apply(a, i);
  }
  return a;
}
function te(n) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ra(Object(a), !0).forEach(function(i) {
      jr(n, i, a[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : Ra(Object(a)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(a, i));
    });
  }
  return n;
}
function jr(n, r, a) {
  return r in n ? Object.defineProperty(n, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : n[r] = a, n;
}
function Go(n, r) {
  if (n == null)
    return {};
  var a = Qi(n, r), i, p;
  if (Object.getOwnPropertySymbols) {
    var A = Object.getOwnPropertySymbols(n);
    for (p = 0; p < A.length; p++)
      i = A[p], !(r.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(n, i) && (a[i] = n[i]);
  }
  return a;
}
function Qi(n, r) {
  if (n == null)
    return {};
  var a = {}, i = Object.keys(n), p, A;
  for (A = 0; A < i.length; A++)
    p = i[A], !(r.indexOf(p) >= 0) && (a[p] = n[p]);
  return a;
}
var Qr = /* @__PURE__ */ D.forwardRef(function(n, r) {
  var a = n.children, i = Go(n, Vi), p = Ur(i), A = p.open, C = Go(p, Ki);
  return D.useImperativeHandle(r, function() {
    return {
      open: A
    };
  }, [A]), /* @__PURE__ */ c.createElement(D.Fragment, null, a(te(te({}, C), {}, {
    open: A
  })));
});
Qr.displayName = "Dropzone";
var pu = {
  disabled: !1,
  getFilesFromEvent: mi,
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
Qr.defaultProps = pu;
Qr.propTypes = {
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
var Yr = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function Ur() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = te(te({}, pu), n), a = r.accept, i = r.disabled, p = r.getFilesFromEvent, A = r.maxSize, C = r.minSize, N = r.multiple, _ = r.maxFiles, m = r.onDragEnter, Sn = r.onDragLeave, S = r.onDragOver, B = r.onDrop, I = r.onDropAccepted, j = r.onDropRejected, Q = r.onFileDialogCancel, Y = r.onFileDialogOpen, mn = r.useFsAccessApi, In = r.preventDropOnDocument, Cn = r.noClick, Xn = r.noKeyboard, kn = r.noDrag, hn = r.noDragEventsBubbling, Tn = r.validator, vn = D.useMemo(function() {
    return typeof Y == "function" ? Y : Na;
  }, [Y]), le = D.useMemo(function() {
    return typeof Q == "function" ? Q : Na;
  }, [Q]), Jn = D.useRef(null), qn = D.useRef(null), oe = D.useReducer(n0, Yr), se = Nr(oe, 2), ne = se[0], ee = se[1], Le = ne.isFocused, Ee = ne.isFileDialogActive, we = ne.draggedFiles, ke = function() {
    Ee && setTimeout(function() {
      if (qn.current) {
        var On = qn.current.files;
        On.length || (ee({
          type: "closeDialog"
        }), le());
      }
    }, 300);
  };
  D.useEffect(function() {
    return mn && Da() ? function() {
    } : (window.addEventListener("focus", ke, !1), function() {
      window.removeEventListener("focus", ke, !1);
    });
  }, [qn, Ee, le, mn]);
  var me = D.useRef([]), Oe = function(On) {
    Jn.current && Jn.current.contains(On.target) || (On.preventDefault(), me.current = []);
  };
  D.useEffect(function() {
    return In && (document.addEventListener("dragover", Aa, !1), document.addEventListener("drop", Oe, !1)), function() {
      In && (document.removeEventListener("dragover", Aa), document.removeEventListener("drop", Oe));
    };
  }, [Jn, In]);
  var ce = D.useCallback(function(rn) {
    rn.preventDefault(), rn.persist(), xe(rn), me.current = [].concat(ji(me.current), [rn.target]), Po(rn) && Promise.resolve(p(rn)).then(function(On) {
      Ho(rn) && !hn || (ee({
        draggedFiles: On,
        isDragActive: !0,
        type: "setDraggedFiles"
      }), m && m(rn));
    });
  }, [p, m, hn]), Ae = D.useCallback(function(rn) {
    rn.preventDefault(), rn.persist(), xe(rn);
    var On = Po(rn);
    if (On && rn.dataTransfer)
      try {
        rn.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return On && S && S(rn), !1;
  }, [S, hn]), Re = D.useCallback(function(rn) {
    rn.preventDefault(), rn.persist(), xe(rn);
    var On = me.current.filter(function(ye) {
      return Jn.current && Jn.current.contains(ye);
    }), re = On.indexOf(rn.target);
    re !== -1 && On.splice(re, 1), me.current = On, !(On.length > 0) && (ee({
      isDragActive: !1,
      type: "setDraggedFiles",
      draggedFiles: []
    }), Po(rn) && Sn && Sn(rn));
  }, [Jn, Sn, hn]), Te = D.useCallback(function(rn, On) {
    var re = [], ye = [];
    rn.forEach(function(he) {
      var He = Cu(he, a), Pe = Nr(He, 2), $e = Pe[0], Ze = Pe[1], Qe = du(he, C, A), ze = Nr(Qe, 2), nt = ze[0], Xe = ze[1], je = Tn ? Tn(he) : null;
      if ($e && nt && !je)
        re.push(he);
      else {
        var Ge = [Ze, Xe];
        je && (Ge = Ge.concat(je)), ye.push({
          file: he,
          errors: Ge.filter(function(st) {
            return st;
          })
        });
      }
    }), (!N && re.length > 1 || N && _ >= 1 && re.length > _) && (re.forEach(function(he) {
      ye.push({
        file: he,
        errors: [Fi]
      });
    }), re.splice(0)), ee({
      acceptedFiles: re,
      fileRejections: ye,
      type: "setFiles"
    }), B && B(re, ye, On), ye.length > 0 && j && j(ye, On), re.length > 0 && I && I(re, On);
  }, [ee, N, a, C, A, _, B, I, j, Tn]), Me = D.useCallback(function(rn) {
    rn.preventDefault(), rn.persist(), xe(rn), me.current = [], Po(rn) && Promise.resolve(p(rn)).then(function(On) {
      Ho(rn) && !hn || Te(On, rn);
    }), ee({
      type: "reset"
    });
  }, [p, Te, hn]), H = D.useCallback(function() {
    if (mn && Da()) {
      ee({
        type: "openDialog"
      }), vn();
      var rn = {
        multiple: N,
        types: qi(a)
      };
      window.showOpenFilePicker(rn).then(function(On) {
        return p(On);
      }).then(function(On) {
        return Te(On, null);
      }).catch(function(On) {
        return le(On);
      }).finally(function() {
        return ee({
          type: "closeDialog"
        });
      });
      return;
    }
    qn.current && (ee({
      type: "openDialog"
    }), vn(), qn.current.value = null, qn.current.click());
  }, [ee, vn, le, mn, Te, a, N]), K = D.useCallback(function(rn) {
    !Jn.current || !Jn.current.isEqualNode(rn.target) || (rn.keyCode === 32 || rn.keyCode === 13) && (rn.preventDefault(), H());
  }, [Jn, qn, H]), un = D.useCallback(function() {
    ee({
      type: "focus"
    });
  }, []), yn = D.useCallback(function() {
    ee({
      type: "blur"
    });
  }, []), xn = D.useCallback(function() {
    Cn || (Gi() ? setTimeout(H, 0) : H());
  }, [qn, Cn, H]), Yn = function(On) {
    return i ? null : On;
  }, ue = function(On) {
    return Xn ? null : Yn(On);
  }, Ne = function(On) {
    return kn ? null : Yn(On);
  }, xe = function(On) {
    hn && On.stopPropagation();
  }, We = D.useMemo(function() {
    return function() {
      var rn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, On = rn.refKey, re = On === void 0 ? "ref" : On, ye = rn.role, he = rn.onKeyDown, He = rn.onFocus, Pe = rn.onBlur, $e = rn.onClick, Ze = rn.onDragEnter, Qe = rn.onDragOver, ze = rn.onDragLeave, nt = rn.onDrop, Xe = Go(rn, zi);
      return te(te(jr({
        onKeyDown: ue(Fe(he, K)),
        onFocus: ue(Fe(He, un)),
        onBlur: ue(Fe(Pe, yn)),
        onClick: Yn(Fe($e, xn)),
        onDragEnter: Ne(Fe(Ze, ce)),
        onDragOver: Ne(Fe(Qe, Ae)),
        onDragLeave: Ne(Fe(ze, Re)),
        onDrop: Ne(Fe(nt, Me)),
        role: typeof ye == "string" && ye !== "" ? ye : "button"
      }, re, Jn), !i && !Xn ? {
        tabIndex: 0
      } : {}), Xe);
    };
  }, [Jn, K, un, yn, xn, ce, Ae, Re, Me, Xn, kn, i]), qe = D.useCallback(function(rn) {
    rn.stopPropagation();
  }, []), Ve = D.useMemo(function() {
    return function() {
      var rn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, On = rn.refKey, re = On === void 0 ? "ref" : On, ye = rn.onChange, he = rn.onClick, He = Go(rn, Xi), Pe = jr({
        accept: a,
        multiple: N,
        type: "file",
        style: {
          display: "none"
        },
        onChange: Yn(Fe(ye, Me)),
        onClick: Yn(Fe(he, qe)),
        autoComplete: "off",
        tabIndex: -1
      }, re, qn);
      return te(te({}, Pe), He);
    };
  }, [qn, a, N, Me, i]), Ke = we.length, $n = Ke > 0 && xi({
    files: we,
    accept: a,
    minSize: C,
    maxSize: A,
    multiple: N,
    maxFiles: _
  }), jn = Ke > 0 && !$n;
  return te(te({}, ne), {}, {
    isDragAccept: $n,
    isDragReject: jn,
    isFocused: Le && !i,
    getRootProps: We,
    getInputProps: Ve,
    rootRef: Jn,
    inputRef: qn,
    open: Yn(H)
  });
}
function n0(n, r) {
  switch (r.type) {
    case "focus":
      return te(te({}, n), {}, {
        isFocused: !0
      });
    case "blur":
      return te(te({}, n), {}, {
        isFocused: !1
      });
    case "openDialog":
      return te(te({}, Yr), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return te(te({}, n), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      var a = r.isDragActive, i = r.draggedFiles;
      return te(te({}, n), {}, {
        draggedFiles: i,
        isDragActive: a
      });
    case "setFiles":
      return te(te({}, n), {}, {
        acceptedFiles: r.acceptedFiles,
        fileRejections: r.fileRejections
      });
    case "reset":
      return te({}, Yr);
    default:
      return n;
  }
}
function Na() {
}
var na = { exports: {} }, gu = function(r, a) {
  return function() {
    for (var p = new Array(arguments.length), A = 0; A < p.length; A++)
      p[A] = arguments[A];
    return r.apply(a, p);
  };
}, e0 = gu, lt = Object.prototype.toString;
function ea(n) {
  return lt.call(n) === "[object Array]";
}
function _r(n) {
  return typeof n > "u";
}
function t0(n) {
  return n !== null && !_r(n) && n.constructor !== null && !_r(n.constructor) && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
function o0(n) {
  return lt.call(n) === "[object ArrayBuffer]";
}
function r0(n) {
  return typeof FormData < "u" && n instanceof FormData;
}
function a0(n) {
  var r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(n) : r = n && n.buffer && n.buffer instanceof ArrayBuffer, r;
}
function u0(n) {
  return typeof n == "string";
}
function i0(n) {
  return typeof n == "number";
}
function mu(n) {
  return n !== null && typeof n == "object";
}
function Oo(n) {
  if (lt.call(n) !== "[object Object]")
    return !1;
  var r = Object.getPrototypeOf(n);
  return r === null || r === Object.prototype;
}
function l0(n) {
  return lt.call(n) === "[object Date]";
}
function s0(n) {
  return lt.call(n) === "[object File]";
}
function c0(n) {
  return lt.call(n) === "[object Blob]";
}
function hu(n) {
  return lt.call(n) === "[object Function]";
}
function y0(n) {
  return mu(n) && hu(n.pipe);
}
function C0(n) {
  return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
function d0(n) {
  return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
}
function f0() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function ta(n, r) {
  if (!(n === null || typeof n > "u"))
    if (typeof n != "object" && (n = [n]), ea(n))
      for (var a = 0, i = n.length; a < i; a++)
        r.call(null, n[a], a, n);
    else
      for (var p in n)
        Object.prototype.hasOwnProperty.call(n, p) && r.call(null, n[p], p, n);
}
function Jr() {
  var n = {};
  function r(p, A) {
    Oo(n[A]) && Oo(p) ? n[A] = Jr(n[A], p) : Oo(p) ? n[A] = Jr({}, p) : ea(p) ? n[A] = p.slice() : n[A] = p;
  }
  for (var a = 0, i = arguments.length; a < i; a++)
    ta(arguments[a], r);
  return n;
}
function p0(n, r, a) {
  return ta(r, function(p, A) {
    a && typeof p == "function" ? n[A] = e0(p, a) : n[A] = p;
  }), n;
}
function g0(n) {
  return n.charCodeAt(0) === 65279 && (n = n.slice(1)), n;
}
var De = {
  isArray: ea,
  isArrayBuffer: o0,
  isBuffer: t0,
  isFormData: r0,
  isArrayBufferView: a0,
  isString: u0,
  isNumber: i0,
  isObject: mu,
  isPlainObject: Oo,
  isUndefined: _r,
  isDate: l0,
  isFile: s0,
  isBlob: c0,
  isFunction: hu,
  isStream: y0,
  isURLSearchParams: C0,
  isStandardBrowserEnv: f0,
  forEach: ta,
  merge: Jr,
  extend: p0,
  trim: d0,
  stripBOM: g0
}, ft = De;
function Ea(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var vu = function(r, a, i) {
  if (!a)
    return r;
  var p;
  if (i)
    p = i(a);
  else if (ft.isURLSearchParams(a))
    p = a.toString();
  else {
    var A = [];
    ft.forEach(a, function(_, m) {
      _ === null || typeof _ > "u" || (ft.isArray(_) ? m = m + "[]" : _ = [_], ft.forEach(_, function(S) {
        ft.isDate(S) ? S = S.toISOString() : ft.isObject(S) && (S = JSON.stringify(S)), A.push(Ea(m) + "=" + Ea(S));
      }));
    }), p = A.join("&");
  }
  if (p) {
    var C = r.indexOf("#");
    C !== -1 && (r = r.slice(0, C)), r += (r.indexOf("?") === -1 ? "?" : "&") + p;
  }
  return r;
}, m0 = De;
function qo() {
  this.handlers = [];
}
qo.prototype.use = function(r, a, i) {
  return this.handlers.push({
    fulfilled: r,
    rejected: a,
    synchronous: i ? i.synchronous : !1,
    runWhen: i ? i.runWhen : null
  }), this.handlers.length - 1;
};
qo.prototype.eject = function(r) {
  this.handlers[r] && (this.handlers[r] = null);
};
qo.prototype.forEach = function(r) {
  m0.forEach(this.handlers, function(i) {
    i !== null && r(i);
  });
};
var h0 = qo, v0 = De, S0 = function(r, a) {
  v0.forEach(r, function(p, A) {
    A !== a && A.toUpperCase() === a.toUpperCase() && (r[a] = p, delete r[A]);
  });
}, Su = function(r, a, i, p, A) {
  return r.config = a, i && (r.code = i), r.request = p, r.response = A, r.isAxiosError = !0, r.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  }, r;
}, Er, Ta;
function wu() {
  if (Ta)
    return Er;
  Ta = 1;
  var n = Su;
  return Er = function(a, i, p, A, C) {
    var N = new Error(a);
    return n(N, i, p, A, C);
  }, Er;
}
var Tr, Pa;
function w0() {
  if (Pa)
    return Tr;
  Pa = 1;
  var n = wu();
  return Tr = function(a, i, p) {
    var A = p.config.validateStatus;
    !p.status || !A || A(p.status) ? a(p) : i(n(
      "Request failed with status code " + p.status,
      p.config,
      null,
      p.request,
      p
    ));
  }, Tr;
}
var Pr, Ia;
function M0() {
  if (Ia)
    return Pr;
  Ia = 1;
  var n = De;
  return Pr = n.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    function() {
      return {
        write: function(i, p, A, C, N, _) {
          var m = [];
          m.push(i + "=" + encodeURIComponent(p)), n.isNumber(A) && m.push("expires=" + new Date(A).toGMTString()), n.isString(C) && m.push("path=" + C), n.isString(N) && m.push("domain=" + N), _ === !0 && m.push("secure"), document.cookie = m.join("; ");
        },
        read: function(i) {
          var p = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
          return p ? decodeURIComponent(p[3]) : null;
        },
        remove: function(i) {
          this.write(i, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    function() {
      return {
        write: function() {
        },
        read: function() {
          return null;
        },
        remove: function() {
        }
      };
    }()
  ), Pr;
}
var Ir, La;
function b0() {
  return La || (La = 1, Ir = function(r) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(r);
  }), Ir;
}
var Lr, ka;
function A0() {
  return ka || (ka = 1, Lr = function(r, a) {
    return a ? r.replace(/\/+$/, "") + "/" + a.replace(/^\/+/, "") : r;
  }), Lr;
}
var kr, Oa;
function D0() {
  if (Oa)
    return kr;
  Oa = 1;
  var n = b0(), r = A0();
  return kr = function(i, p) {
    return i && !n(p) ? r(i, p) : p;
  }, kr;
}
var Or, Ba;
function R0() {
  if (Ba)
    return Or;
  Ba = 1;
  var n = De, r = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return Or = function(i) {
    var p = {}, A, C, N;
    return i && n.forEach(i.split(`
`), function(m) {
      if (N = m.indexOf(":"), A = n.trim(m.substr(0, N)).toLowerCase(), C = n.trim(m.substr(N + 1)), A) {
        if (p[A] && r.indexOf(A) >= 0)
          return;
        A === "set-cookie" ? p[A] = (p[A] ? p[A] : []).concat([C]) : p[A] = p[A] ? p[A] + ", " + C : C;
      }
    }), p;
  }, Or;
}
var Br, Fa;
function N0() {
  if (Fa)
    return Br;
  Fa = 1;
  var n = De;
  return Br = n.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function() {
      var a = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a"), p;
      function A(C) {
        var N = C;
        return a && (i.setAttribute("href", N), N = i.href), i.setAttribute("href", N), {
          href: i.href,
          protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
          host: i.host,
          search: i.search ? i.search.replace(/^\?/, "") : "",
          hash: i.hash ? i.hash.replace(/^#/, "") : "",
          hostname: i.hostname,
          port: i.port,
          pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
        };
      }
      return p = A(window.location.href), function(N) {
        var _ = n.isString(N) ? A(N) : N;
        return _.protocol === p.protocol && _.host === p.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function() {
      return function() {
        return !0;
      };
    }()
  ), Br;
}
var Fr, xa;
function Wa() {
  if (xa)
    return Fr;
  xa = 1;
  var n = De, r = w0(), a = M0(), i = vu, p = D0(), A = R0(), C = N0(), N = wu();
  return Fr = function(m) {
    return new Promise(function(S, B) {
      var I = m.data, j = m.headers, Q = m.responseType;
      n.isFormData(I) && delete j["Content-Type"];
      var Y = new XMLHttpRequest();
      if (m.auth) {
        var mn = m.auth.username || "", In = m.auth.password ? unescape(encodeURIComponent(m.auth.password)) : "";
        j.Authorization = "Basic " + btoa(mn + ":" + In);
      }
      var Cn = p(m.baseURL, m.url);
      Y.open(m.method.toUpperCase(), i(Cn, m.params, m.paramsSerializer), !0), Y.timeout = m.timeout;
      function Xn() {
        if (Y) {
          var hn = "getAllResponseHeaders" in Y ? A(Y.getAllResponseHeaders()) : null, Tn = !Q || Q === "text" || Q === "json" ? Y.responseText : Y.response, vn = {
            data: Tn,
            status: Y.status,
            statusText: Y.statusText,
            headers: hn,
            config: m,
            request: Y
          };
          r(S, B, vn), Y = null;
        }
      }
      if ("onloadend" in Y ? Y.onloadend = Xn : Y.onreadystatechange = function() {
        !Y || Y.readyState !== 4 || Y.status === 0 && !(Y.responseURL && Y.responseURL.indexOf("file:") === 0) || setTimeout(Xn);
      }, Y.onabort = function() {
        Y && (B(N("Request aborted", m, "ECONNABORTED", Y)), Y = null);
      }, Y.onerror = function() {
        B(N("Network Error", m, null, Y)), Y = null;
      }, Y.ontimeout = function() {
        var Tn = "timeout of " + m.timeout + "ms exceeded";
        m.timeoutErrorMessage && (Tn = m.timeoutErrorMessage), B(N(
          Tn,
          m,
          m.transitional && m.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
          Y
        )), Y = null;
      }, n.isStandardBrowserEnv()) {
        var kn = (m.withCredentials || C(Cn)) && m.xsrfCookieName ? a.read(m.xsrfCookieName) : void 0;
        kn && (j[m.xsrfHeaderName] = kn);
      }
      "setRequestHeader" in Y && n.forEach(j, function(Tn, vn) {
        typeof I > "u" && vn.toLowerCase() === "content-type" ? delete j[vn] : Y.setRequestHeader(vn, Tn);
      }), n.isUndefined(m.withCredentials) || (Y.withCredentials = !!m.withCredentials), Q && Q !== "json" && (Y.responseType = m.responseType), typeof m.onDownloadProgress == "function" && Y.addEventListener("progress", m.onDownloadProgress), typeof m.onUploadProgress == "function" && Y.upload && Y.upload.addEventListener("progress", m.onUploadProgress), m.cancelToken && m.cancelToken.promise.then(function(Tn) {
        Y && (Y.abort(), B(Tn), Y = null);
      }), I || (I = null), Y.send(I);
    });
  }, Fr;
}
var ge = De, Ha = S0, E0 = Su, T0 = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Ga(n, r) {
  !ge.isUndefined(n) && ge.isUndefined(n["Content-Type"]) && (n["Content-Type"] = r);
}
function P0() {
  var n;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (n = Wa()), n;
}
function I0(n, r, a) {
  if (ge.isString(n))
    try {
      return (r || JSON.parse)(n), ge.trim(n);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (a || JSON.stringify)(n);
}
var Vo = {
  transitional: {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  adapter: P0(),
  transformRequest: [function(r, a) {
    return Ha(a, "Accept"), Ha(a, "Content-Type"), ge.isFormData(r) || ge.isArrayBuffer(r) || ge.isBuffer(r) || ge.isStream(r) || ge.isFile(r) || ge.isBlob(r) ? r : ge.isArrayBufferView(r) ? r.buffer : ge.isURLSearchParams(r) ? (Ga(a, "application/x-www-form-urlencoded;charset=utf-8"), r.toString()) : ge.isObject(r) || a && a["Content-Type"] === "application/json" ? (Ga(a, "application/json"), I0(r)) : r;
  }],
  transformResponse: [function(r) {
    var a = this.transitional, i = a && a.silentJSONParsing, p = a && a.forcedJSONParsing, A = !i && this.responseType === "json";
    if (A || p && ge.isString(r) && r.length)
      try {
        return JSON.parse(r);
      } catch (C) {
        if (A)
          throw C.name === "SyntaxError" ? E0(C, this, "E_JSON_PARSE") : C;
      }
    return r;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  }
};
Vo.headers = {
  common: {
    Accept: "application/json, text/plain, */*"
  }
};
ge.forEach(["delete", "get", "head"], function(r) {
  Vo.headers[r] = {};
});
ge.forEach(["post", "put", "patch"], function(r) {
  Vo.headers[r] = ge.merge(T0);
});
var oa = Vo, L0 = De, k0 = oa, O0 = function(r, a, i) {
  var p = this || k0;
  return L0.forEach(i, function(C) {
    r = C.call(p, r, a);
  }), r;
}, xr, qa;
function Mu() {
  return qa || (qa = 1, xr = function(r) {
    return !!(r && r.__CANCEL__);
  }), xr;
}
var Va = De, Wr = O0, B0 = Mu(), F0 = oa;
function Hr(n) {
  n.cancelToken && n.cancelToken.throwIfRequested();
}
var x0 = function(r) {
  Hr(r), r.headers = r.headers || {}, r.data = Wr.call(
    r,
    r.data,
    r.headers,
    r.transformRequest
  ), r.headers = Va.merge(
    r.headers.common || {},
    r.headers[r.method] || {},
    r.headers
  ), Va.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(p) {
      delete r.headers[p];
    }
  );
  var a = r.adapter || F0.adapter;
  return a(r).then(function(p) {
    return Hr(r), p.data = Wr.call(
      r,
      p.data,
      p.headers,
      r.transformResponse
    ), p;
  }, function(p) {
    return B0(p) || (Hr(r), p && p.response && (p.response.data = Wr.call(
      r,
      p.response.data,
      p.response.headers,
      r.transformResponse
    ))), Promise.reject(p);
  });
}, ve = De, bu = function(r, a) {
  a = a || {};
  var i = {}, p = ["url", "method", "data"], A = ["headers", "auth", "proxy", "params"], C = [
    "baseURL",
    "transformRequest",
    "transformResponse",
    "paramsSerializer",
    "timeout",
    "timeoutMessage",
    "withCredentials",
    "adapter",
    "responseType",
    "xsrfCookieName",
    "xsrfHeaderName",
    "onUploadProgress",
    "onDownloadProgress",
    "decompress",
    "maxContentLength",
    "maxBodyLength",
    "maxRedirects",
    "transport",
    "httpAgent",
    "httpsAgent",
    "cancelToken",
    "socketPath",
    "responseEncoding"
  ], N = ["validateStatus"];
  function _(B, I) {
    return ve.isPlainObject(B) && ve.isPlainObject(I) ? ve.merge(B, I) : ve.isPlainObject(I) ? ve.merge({}, I) : ve.isArray(I) ? I.slice() : I;
  }
  function m(B) {
    ve.isUndefined(a[B]) ? ve.isUndefined(r[B]) || (i[B] = _(void 0, r[B])) : i[B] = _(r[B], a[B]);
  }
  ve.forEach(p, function(I) {
    ve.isUndefined(a[I]) || (i[I] = _(void 0, a[I]));
  }), ve.forEach(A, m), ve.forEach(C, function(I) {
    ve.isUndefined(a[I]) ? ve.isUndefined(r[I]) || (i[I] = _(void 0, r[I])) : i[I] = _(void 0, a[I]);
  }), ve.forEach(N, function(I) {
    I in a ? i[I] = _(r[I], a[I]) : I in r && (i[I] = _(void 0, r[I]));
  });
  var Sn = p.concat(A).concat(C).concat(N), S = Object.keys(r).concat(Object.keys(a)).filter(function(I) {
    return Sn.indexOf(I) === -1;
  });
  return ve.forEach(S, m), i;
};
const W0 = "axios", H0 = "0.21.4", G0 = "Promise based HTTP client for the browser and node.js", q0 = "index.js", V0 = {
  test: "grunt test",
  start: "node ./sandbox/server.js",
  build: "NODE_ENV=production grunt build",
  preversion: "npm test",
  version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
  postversion: "git push && git push --tags",
  examples: "node ./examples/server.js",
  coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
  fix: "eslint --fix lib/**/*.js"
}, K0 = {
  type: "git",
  url: "https://github.com/axios/axios.git"
}, z0 = [
  "xhr",
  "http",
  "ajax",
  "promise",
  "node"
], X0 = "Matt Zabriskie", j0 = "MIT", Y0 = {
  url: "https://github.com/axios/axios/issues"
}, U0 = "https://axios-http.com", _0 = {
  coveralls: "^3.0.0",
  "es6-promise": "^4.2.4",
  grunt: "^1.3.0",
  "grunt-banner": "^0.6.0",
  "grunt-cli": "^1.2.0",
  "grunt-contrib-clean": "^1.1.0",
  "grunt-contrib-watch": "^1.0.0",
  "grunt-eslint": "^23.0.0",
  "grunt-karma": "^4.0.0",
  "grunt-mocha-test": "^0.13.3",
  "grunt-ts": "^6.0.0-beta.19",
  "grunt-webpack": "^4.0.2",
  "istanbul-instrumenter-loader": "^1.0.0",
  "jasmine-core": "^2.4.1",
  karma: "^6.3.2",
  "karma-chrome-launcher": "^3.1.0",
  "karma-firefox-launcher": "^2.1.0",
  "karma-jasmine": "^1.1.1",
  "karma-jasmine-ajax": "^0.1.13",
  "karma-safari-launcher": "^1.0.0",
  "karma-sauce-launcher": "^4.3.6",
  "karma-sinon": "^1.0.5",
  "karma-sourcemap-loader": "^0.3.8",
  "karma-webpack": "^4.0.2",
  "load-grunt-tasks": "^3.5.2",
  minimist: "^1.2.0",
  mocha: "^8.2.1",
  sinon: "^4.5.0",
  "terser-webpack-plugin": "^4.2.3",
  typescript: "^4.0.5",
  "url-search-params": "^0.10.0",
  webpack: "^4.44.2",
  "webpack-dev-server": "^3.11.0"
}, J0 = {
  "./lib/adapters/http.js": "./lib/adapters/xhr.js"
}, $0 = "dist/axios.min.js", Z0 = "dist/axios.min.js", Q0 = "./index.d.ts", nl = {
  "follow-redirects": "^1.14.0"
}, el = [
  {
    path: "./dist/axios.min.js",
    threshold: "5kB"
  }
], tl = {
  name: W0,
  version: H0,
  description: G0,
  main: q0,
  scripts: V0,
  repository: K0,
  keywords: z0,
  author: X0,
  license: j0,
  bugs: Y0,
  homepage: U0,
  devDependencies: _0,
  browser: J0,
  jsdelivr: $0,
  unpkg: Z0,
  typings: Q0,
  dependencies: nl,
  bundlesize: el
};
var Au = tl, ra = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(n, r) {
  ra[n] = function(i) {
    return typeof i === n || "a" + (r < 1 ? "n " : " ") + n;
  };
});
var Ka = {}, ol = Au.version.split(".");
function Du(n, r) {
  for (var a = r ? r.split(".") : ol, i = n.split("."), p = 0; p < 3; p++) {
    if (a[p] > i[p])
      return !0;
    if (a[p] < i[p])
      return !1;
  }
  return !1;
}
ra.transitional = function(r, a, i) {
  var p = a && Du(a);
  function A(C, N) {
    return "[Axios v" + Au.version + "] Transitional option '" + C + "'" + N + (i ? ". " + i : "");
  }
  return function(C, N, _) {
    if (r === !1)
      throw new Error(A(N, " has been removed in " + a));
    return p && !Ka[N] && (Ka[N] = !0, console.warn(
      A(
        N,
        " has been deprecated since v" + a + " and will be removed in the near future"
      )
    )), r ? r(C, N, _) : !0;
  };
};
function rl(n, r, a) {
  if (typeof n != "object")
    throw new TypeError("options must be an object");
  for (var i = Object.keys(n), p = i.length; p-- > 0; ) {
    var A = i[p], C = r[A];
    if (C) {
      var N = n[A], _ = N === void 0 || C(N, A, n);
      if (_ !== !0)
        throw new TypeError("option " + A + " must be " + _);
      continue;
    }
    if (a !== !0)
      throw Error("Unknown option " + A);
  }
}
var al = {
  isOlderVersion: Du,
  assertOptions: rl,
  validators: ra
}, Ru = De, ul = vu, za = h0, Xa = x0, Ko = bu, Nu = al, pt = Nu.validators;
function Vt(n) {
  this.defaults = n, this.interceptors = {
    request: new za(),
    response: new za()
  };
}
Vt.prototype.request = function(r) {
  typeof r == "string" ? (r = arguments[1] || {}, r.url = arguments[0]) : r = r || {}, r = Ko(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var a = r.transitional;
  a !== void 0 && Nu.assertOptions(a, {
    silentJSONParsing: pt.transitional(pt.boolean, "1.0.0"),
    forcedJSONParsing: pt.transitional(pt.boolean, "1.0.0"),
    clarifyTimeoutError: pt.transitional(pt.boolean, "1.0.0")
  }, !1);
  var i = [], p = !0;
  this.interceptors.request.forEach(function(B) {
    typeof B.runWhen == "function" && B.runWhen(r) === !1 || (p = p && B.synchronous, i.unshift(B.fulfilled, B.rejected));
  });
  var A = [];
  this.interceptors.response.forEach(function(B) {
    A.push(B.fulfilled, B.rejected);
  });
  var C;
  if (!p) {
    var N = [Xa, void 0];
    for (Array.prototype.unshift.apply(N, i), N = N.concat(A), C = Promise.resolve(r); N.length; )
      C = C.then(N.shift(), N.shift());
    return C;
  }
  for (var _ = r; i.length; ) {
    var m = i.shift(), Sn = i.shift();
    try {
      _ = m(_);
    } catch (S) {
      Sn(S);
      break;
    }
  }
  try {
    C = Xa(_);
  } catch (S) {
    return Promise.reject(S);
  }
  for (; A.length; )
    C = C.then(A.shift(), A.shift());
  return C;
};
Vt.prototype.getUri = function(r) {
  return r = Ko(this.defaults, r), ul(r.url, r.params, r.paramsSerializer).replace(/^\?/, "");
};
Ru.forEach(["delete", "get", "head", "options"], function(r) {
  Vt.prototype[r] = function(a, i) {
    return this.request(Ko(i || {}, {
      method: r,
      url: a,
      data: (i || {}).data
    }));
  };
});
Ru.forEach(["post", "put", "patch"], function(r) {
  Vt.prototype[r] = function(a, i, p) {
    return this.request(Ko(p || {}, {
      method: r,
      url: a,
      data: i
    }));
  };
});
var il = Vt, Gr, ja;
function Eu() {
  if (ja)
    return Gr;
  ja = 1;
  function n(r) {
    this.message = r;
  }
  return n.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, n.prototype.__CANCEL__ = !0, Gr = n, Gr;
}
var qr, Ya;
function ll() {
  if (Ya)
    return qr;
  Ya = 1;
  var n = Eu();
  function r(a) {
    if (typeof a != "function")
      throw new TypeError("executor must be a function.");
    var i;
    this.promise = new Promise(function(C) {
      i = C;
    });
    var p = this;
    a(function(C) {
      p.reason || (p.reason = new n(C), i(p.reason));
    });
  }
  return r.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, r.source = function() {
    var i, p = new r(function(C) {
      i = C;
    });
    return {
      token: p,
      cancel: i
    };
  }, qr = r, qr;
}
var Vr, Ua;
function sl() {
  return Ua || (Ua = 1, Vr = function(r) {
    return function(i) {
      return r.apply(null, i);
    };
  }), Vr;
}
var Kr, _a;
function cl() {
  return _a || (_a = 1, Kr = function(r) {
    return typeof r == "object" && r.isAxiosError === !0;
  }), Kr;
}
var Ja = De, yl = gu, Bo = il, Cl = bu, dl = oa;
function Tu(n) {
  var r = new Bo(n), a = yl(Bo.prototype.request, r);
  return Ja.extend(a, Bo.prototype, r), Ja.extend(a, r), a;
}
var Ie = Tu(dl);
Ie.Axios = Bo;
Ie.create = function(r) {
  return Tu(Cl(Ie.defaults, r));
};
Ie.Cancel = Eu();
Ie.CancelToken = ll();
Ie.isCancel = Mu();
Ie.all = function(r) {
  return Promise.all(r);
};
Ie.spread = sl();
Ie.isAxiosError = cl();
na.exports = Ie;
na.exports.default = Ie;
var fl = na.exports, pl = fl;
const gl = /* @__PURE__ */ Uu(pl), Wt = ({ children: n, className: r = "" }) => /* @__PURE__ */ c.createElement("div", { className: `tab-content ${r}` }, n), ml = (n) => {
  const { globalActive: r } = D.useContext(Ht), a = D.useContext(Gt), i = (p) => {
    a({ type: "EDITOR_SET_GLOBALACTIVE", payload: p });
  };
  return /* @__PURE__ */ c.createElement(Pu, { ...n, setActiveTab: i, activeTab: r });
}, hl = ({ children: n, className: r = void 0, startingTab: a }) => {
  const [i, p] = D.useState(a);
  return /* @__PURE__ */ c.createElement(Pu, { className: r, setActiveTab: p, activeTab: i }, n);
}, Pu = ({ children: n, className: r, activeTab: a, setActiveTab: i }) => {
  const p = (N, _) => {
    N || i(_);
  };
  let A = "tabs";
  r && (A = `tabs ${r}`);
  const C = n.map(({ props: N }, _) => {
    let m = "nav-item", Sn = N.disableRule || !1;
    return Sn && (m += " disabled"), _ === a && (m += " active"), /* @__PURE__ */ c.createElement("li", { onClick: () => p(Sn, _), key: N.title, className: m }, N.icon, N.title);
  });
  return /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("nav", { className: A }, /* @__PURE__ */ c.createElement("ul", { className: "nav nav-fill" }, C)), n[a]);
};
var $r = { exports: {} }, Io = { exports: {} }, $a;
function vl() {
  return $a || ($a = 1, function(n, r) {
    (function(a, i) {
      i(r, D);
    })(iu, function(a, i) {
      function p(e, l, y, d, w, h, M) {
        try {
          var E = e[h](M), P = E.value;
        } catch (L) {
          return void y(L);
        }
        E.done ? l(P) : Promise.resolve(P).then(d, w);
      }
      function A(e) {
        return function() {
          var l = this, y = arguments;
          return new Promise(function(d, w) {
            var h = e.apply(l, y);
            function M(P) {
              p(h, d, w, M, E, "next", P);
            }
            function E(P) {
              p(h, d, w, M, E, "throw", P);
            }
            M(void 0);
          });
        };
      }
      function C() {
        return (C = Object.assign || function(e) {
          for (var l = 1; l < arguments.length; l++) {
            var y = arguments[l];
            for (var d in y)
              Object.prototype.hasOwnProperty.call(y, d) && (e[d] = y[d]);
          }
          return e;
        }).apply(this, arguments);
      }
      function N(e, l) {
        if (e == null)
          return {};
        var y, d, w = {}, h = Object.keys(e);
        for (d = 0; d < h.length; d++)
          y = h[d], l.indexOf(y) >= 0 || (w[y] = e[y]);
        return w;
      }
      function _(e) {
        var l = function(y, d) {
          if (typeof y != "object" || y === null)
            return y;
          var w = y[Symbol.toPrimitive];
          if (w !== void 0) {
            var h = w.call(y, d || "default");
            if (typeof h != "object")
              return h;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (d === "string" ? String : Number)(y);
        }(e, "string");
        return typeof l == "symbol" ? l : String(l);
      }
      i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
      var m = { init: "init" }, Sn = function(e) {
        var l = e.value;
        return l === void 0 ? "" : l;
      }, S = function() {
        return i.createElement(i.Fragment, null, " ");
      }, B = { Cell: Sn, width: 150, minWidth: 0, maxWidth: Number.MAX_SAFE_INTEGER };
      function I() {
        for (var e = arguments.length, l = new Array(e), y = 0; y < e; y++)
          l[y] = arguments[y];
        return l.reduce(function(d, w) {
          var h = w.style, M = w.className;
          return d = C({}, d, {}, N(w, ["style", "className"])), h && (d.style = d.style ? C({}, d.style || {}, {}, h || {}) : h), M && (d.className = d.className ? d.className + " " + M : M), d.className === "" && delete d.className, d;
        }, {});
      }
      var j = function(e, l) {
        return l === void 0 && (l = {}), function(y) {
          return y === void 0 && (y = {}), [].concat(e, [y]).reduce(function(d, w) {
            return function h(M, E, P) {
              return typeof E == "function" ? h({}, E(M, P)) : Array.isArray(E) ? I.apply(void 0, [M].concat(E)) : I(M, E);
            }(d, w, C({}, l, { userProps: y }));
          }, {});
        };
      }, Q = function(e, l, y, d) {
        return y === void 0 && (y = {}), e.reduce(function(w, h) {
          return h(w, y);
        }, l);
      }, Y = function(e, l, y) {
        return y === void 0 && (y = {}), e.forEach(function(d) {
          d(l, y);
        });
      };
      function mn(e, l, y, d) {
        e.findIndex(function(w) {
          return w.pluginName === y;
        }), l.forEach(function(w) {
          e.findIndex(function(h) {
            return h.pluginName === w;
          });
        });
      }
      function In(e, l) {
        return typeof e == "function" ? e(l) : e;
      }
      function Cn(e) {
        var l = i.useRef();
        return l.current = e, i.useCallback(function() {
          return l.current;
        }, []);
      }
      var Xn = typeof document < "u" ? i.useLayoutEffect : i.useEffect;
      function kn(e, l) {
        var y = i.useRef(!1);
        Xn(function() {
          y.current && e(), y.current = !0;
        }, l);
      }
      function hn(e, l, y) {
        return y === void 0 && (y = {}), function(d, w) {
          w === void 0 && (w = {});
          var h = typeof d == "string" ? l[d] : d;
          if (h === void 0)
            throw console.info(l), new Error("Renderer Error ☝️");
          return Tn(h, C({}, e, { column: l }, y, {}, w));
        };
      }
      function Tn(e, l) {
        return function(d) {
          return typeof d == "function" && (w = Object.getPrototypeOf(d)).prototype && w.prototype.isReactComponent;
          var w;
        }(y = e) || typeof y == "function" || function(d) {
          return typeof d == "object" && typeof d.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(d.$$typeof.description);
        }(y) ? i.createElement(e, l) : e;
        var y;
      }
      function vn(e, l, y) {
        return y === void 0 && (y = 0), e.map(function(d) {
          return Jn(d = C({}, d, { parent: l, depth: y })), d.columns && (d.columns = vn(d.columns, d, y + 1)), d;
        });
      }
      function le(e) {
        return Le(e, "columns");
      }
      function Jn(e) {
        var l = e.id, y = e.accessor, d = e.Header;
        if (typeof y == "string") {
          l = l || y;
          var w = y.split(".");
          y = function(h) {
            return function(M, E, P) {
              if (!E)
                return M;
              var L, z = typeof E == "function" ? E : JSON.stringify(E), G = se.get(z) || function() {
                var q = function(O) {
                  return function W($, en) {
                    if (en === void 0 && (en = []), Array.isArray($))
                      for (var dn = 0; dn < $.length; dn += 1)
                        W($[dn], en);
                    else
                      en.push($);
                    return en;
                  }(O).map(function(W) {
                    return String(W).replace(".", "_");
                  }).join(".").replace(ce, ".").replace(Ae, "").split(".");
                }(E);
                return se.set(z, q), q;
              }();
              try {
                L = G.reduce(function(q, O) {
                  return q[O];
                }, M);
              } catch {
              }
              return L !== void 0 ? L : P;
            }(h, w);
          };
        }
        if (!l && typeof d == "string" && d && (l = d), !l && e.columns)
          throw console.error(e), new Error('A column ID (or unique "Header" value) is required!');
        if (!l)
          throw console.error(e), new Error("A column ID (or string accessor) is required!");
        return Object.assign(e, { id: l, accessor: y }), e;
      }
      function qn(e, l) {
        if (!l)
          throw new Error();
        return Object.assign(e, C({ Header: S, Footer: S }, B, {}, l, {}, e)), Object.assign(e, { originalWidth: e.width }), e;
      }
      function oe(e, l, y) {
        y === void 0 && (y = function() {
          return {};
        });
        for (var d = [], w = e, h = 0, M = function() {
          return h++;
        }, E = function() {
          var P = { headers: [] }, L = [], z = w.some(function(G) {
            return G.parent;
          });
          w.forEach(function(G) {
            var q, O = [].concat(L).reverse()[0];
            z && (G.parent ? q = C({}, G.parent, { originalId: G.parent.id, id: G.parent.id + "_" + M(), headers: [G] }, y(G)) : q = qn(C({ originalId: G.id + "_placeholder", id: G.id + "_placeholder_" + M(), placeholderOf: G, headers: [G] }, y(G)), l), O && O.originalId === q.originalId ? O.headers.push(G) : L.push(q)), P.headers.push(G);
          }), d.push(P), w = L;
        }; w.length; )
          E();
        return d.reverse();
      }
      var se = /* @__PURE__ */ new Map();
      function ne() {
        for (var e = arguments.length, l = new Array(e), y = 0; y < e; y++)
          l[y] = arguments[y];
        for (var d = 0; d < l.length; d += 1)
          if (l[d] !== void 0)
            return l[d];
      }
      function ee(e) {
        if (typeof e == "function")
          return e;
      }
      function Le(e, l) {
        var y = [];
        return function d(w) {
          w.forEach(function(h) {
            h[l] ? d(h[l]) : y.push(h);
          });
        }(e), y;
      }
      function Ee(e, l) {
        var y = l.manualExpandedKey, d = l.expanded, w = l.expandSubRows, h = w === void 0 || w, M = [];
        return e.forEach(function(E) {
          return function P(L, z) {
            z === void 0 && (z = !0), L.isExpanded = L.original && L.original[y] || d[L.id], L.canExpand = L.subRows && !!L.subRows.length, z && M.push(L), L.subRows && L.subRows.length && L.isExpanded && L.subRows.forEach(function(G) {
              return P(G, h);
            });
          }(E);
        }), M;
      }
      function we(e, l, y) {
        return ee(e) || l[e] || y[e] || y.text;
      }
      function ke(e, l, y) {
        return e ? e(l, y) : l === void 0;
      }
      function me() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var Oe = null, ce = /\[/g, Ae = /\]/g, Re = function(e) {
        return C({ role: "table" }, e);
      }, Te = function(e) {
        return C({ role: "rowgroup" }, e);
      }, Me = function(e, l) {
        var y = l.column;
        return C({ key: "header_" + y.id, colSpan: y.totalVisibleHeaderCount, role: "columnheader" }, e);
      }, H = function(e, l) {
        var y = l.column;
        return C({ key: "footer_" + y.id, colSpan: y.totalVisibleHeaderCount }, e);
      }, K = function(e, l) {
        return C({ key: "headerGroup_" + l.index, role: "row" }, e);
      }, un = function(e, l) {
        return C({ key: "footerGroup_" + l.index }, e);
      }, yn = function(e, l) {
        return C({ key: "row_" + l.row.id, role: "row" }, e);
      }, xn = function(e, l) {
        var y = l.cell;
        return C({ key: "cell_" + y.row.id + "_" + y.column.id, role: "cell" }, e);
      };
      function Yn() {
        return { useOptions: [], stateReducers: [], useControlledState: [], columns: [], columnsDeps: [], allColumns: [], allColumnsDeps: [], accessValue: [], materializedColumns: [], materializedColumnsDeps: [], useInstanceAfterData: [], visibleColumns: [], visibleColumnsDeps: [], headerGroups: [], headerGroupsDeps: [], useInstanceBeforeDimensions: [], useInstance: [], prepareRow: [], getTableProps: [Re], getTableBodyProps: [Te], getHeaderGroupProps: [K], getFooterGroupProps: [un], getHeaderProps: [Me], getFooterProps: [H], getRowProps: [yn], getCellProps: [xn], useFinalInstance: [] };
      }
      m.resetHiddenColumns = "resetHiddenColumns", m.toggleHideColumn = "toggleHideColumn", m.setHiddenColumns = "setHiddenColumns", m.toggleHideAllColumns = "toggleHideAllColumns";
      var ue = function(e) {
        e.getToggleHiddenProps = [Ne], e.getToggleHideAllColumnsProps = [xe], e.stateReducers.push(We), e.useInstanceBeforeDimensions.push(qe), e.headerGroupsDeps.push(function(l, y) {
          var d = y.instance;
          return [].concat(l, [d.state.hiddenColumns]);
        }), e.useInstance.push(Ve);
      };
      ue.pluginName = "useColumnVisibility";
      var Ne = function(e, l) {
        var y = l.column;
        return [e, { onChange: function(d) {
          y.toggleHidden(!d.target.checked);
        }, style: { cursor: "pointer" }, checked: y.isVisible, title: "Toggle Column Visible" }];
      }, xe = function(e, l) {
        var y = l.instance;
        return [e, { onChange: function(d) {
          y.toggleHideAllColumns(!d.target.checked);
        }, style: { cursor: "pointer" }, checked: !y.allColumnsHidden && !y.state.hiddenColumns.length, title: "Toggle All Columns Hidden", indeterminate: !y.allColumnsHidden && y.state.hiddenColumns.length }];
      };
      function We(e, l, y, d) {
        if (l.type === m.init)
          return C({ hiddenColumns: [] }, e);
        if (l.type === m.resetHiddenColumns)
          return C({}, e, { hiddenColumns: d.initialState.hiddenColumns || [] });
        if (l.type === m.toggleHideColumn) {
          var w = (l.value !== void 0 ? l.value : !e.hiddenColumns.includes(l.columnId)) ? [].concat(e.hiddenColumns, [l.columnId]) : e.hiddenColumns.filter(function(h) {
            return h !== l.columnId;
          });
          return C({}, e, { hiddenColumns: w });
        }
        return l.type === m.setHiddenColumns ? C({}, e, { hiddenColumns: In(l.value, e.hiddenColumns) }) : l.type === m.toggleHideAllColumns ? C({}, e, { hiddenColumns: (l.value !== void 0 ? l.value : !e.hiddenColumns.length) ? d.allColumns.map(function(h) {
          return h.id;
        }) : [] }) : void 0;
      }
      function qe(e) {
        var l = e.headers, y = e.state.hiddenColumns;
        i.useRef(!1).current;
        var d = 0;
        l.forEach(function(w) {
          return d += function h(M, E) {
            M.isVisible = E && !y.includes(M.id);
            var P = 0;
            return M.headers && M.headers.length ? M.headers.forEach(function(L) {
              return P += h(L, M.isVisible);
            }) : P = M.isVisible ? 1 : 0, M.totalVisibleHeaderCount = P, P;
          }(w, !0);
        });
      }
      function Ve(e) {
        var l = e.columns, y = e.flatHeaders, d = e.dispatch, w = e.allColumns, h = e.getHooks, M = e.state.hiddenColumns, E = e.autoResetHiddenColumns, P = E === void 0 || E, L = Cn(e), z = w.length === M.length, G = i.useCallback(function(en, dn) {
          return d({ type: m.toggleHideColumn, columnId: en, value: dn });
        }, [d]), q = i.useCallback(function(en) {
          return d({ type: m.setHiddenColumns, value: en });
        }, [d]), O = i.useCallback(function(en) {
          return d({ type: m.toggleHideAllColumns, value: en });
        }, [d]), W = j(h().getToggleHideAllColumnsProps, { instance: L() });
        y.forEach(function(en) {
          en.toggleHidden = function(dn) {
            d({ type: m.toggleHideColumn, columnId: en.id, value: dn });
          }, en.getToggleHiddenProps = j(h().getToggleHiddenProps, { instance: L(), column: en });
        });
        var $ = Cn(P);
        kn(function() {
          $() && d({ type: m.resetHiddenColumns });
        }, [d, l]), Object.assign(e, { allColumnsHidden: z, toggleHideColumn: G, setHiddenColumns: q, toggleHideAllColumns: O, getToggleHideAllColumnsProps: W });
      }
      var Ke = {}, $n = {}, jn = function(e, l, y) {
        return e;
      }, rn = function(e, l) {
        return e.subRows || [];
      }, On = function(e, l, y) {
        return "" + (y ? [y.id, l].join(".") : l);
      }, re = function(e) {
        return e;
      };
      function ye(e) {
        var l = e.initialState, y = l === void 0 ? Ke : l, d = e.defaultColumn, w = d === void 0 ? $n : d, h = e.getSubRows, M = h === void 0 ? rn : h, E = e.getRowId, P = E === void 0 ? On : E, L = e.stateReducer, z = L === void 0 ? jn : L, G = e.useControlledState, q = G === void 0 ? re : G;
        return C({}, N(e, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]), { initialState: y, defaultColumn: w, getSubRows: M, getRowId: P, stateReducer: z, useControlledState: q });
      }
      function he(e, l) {
        l === void 0 && (l = 0);
        var y = 0, d = 0, w = 0, h = 0;
        return e.forEach(function(M) {
          var E = M.headers;
          if (M.totalLeft = l, E && E.length) {
            var P = he(E, l), L = P[0], z = P[1], G = P[2], q = P[3];
            M.totalMinWidth = L, M.totalWidth = z, M.totalMaxWidth = G, M.totalFlexWidth = q;
          } else
            M.totalMinWidth = M.minWidth, M.totalWidth = Math.min(Math.max(M.minWidth, M.width), M.maxWidth), M.totalMaxWidth = M.maxWidth, M.totalFlexWidth = M.canResize ? M.totalWidth : 0;
          M.isVisible && (l += M.totalWidth, y += M.totalMinWidth, d += M.totalWidth, w += M.totalMaxWidth, h += M.totalFlexWidth);
        }), [y, d, w, h];
      }
      function He(e) {
        var l = e.data, y = e.rows, d = e.flatRows, w = e.rowsById, h = e.column, M = e.getRowId, E = e.getSubRows, P = e.accessValueHooks, L = e.getInstance;
        l.forEach(function(z, G) {
          return function q(O, W, $, en, dn) {
            $ === void 0 && ($ = 0);
            var Bn = O, fn = M(O, W, en), X = w[fn];
            if (X)
              X.subRows && X.originalSubRows.forEach(function(ln, Rn) {
                return q(ln, Rn, $ + 1, X);
              });
            else if ((X = { id: fn, original: Bn, index: W, depth: $, cells: [{}] }).cells.map = me, X.cells.filter = me, X.cells.forEach = me, X.cells[0].getCellProps = me, X.values = {}, dn.push(X), d.push(X), w[fn] = X, X.originalSubRows = E(O, W), X.originalSubRows) {
              var Pn = [];
              X.originalSubRows.forEach(function(ln, Rn) {
                return q(ln, Rn, $ + 1, X, Pn);
              }), X.subRows = Pn;
            }
            h.accessor && (X.values[h.id] = h.accessor(O, W, X, dn, l)), X.values[h.id] = Q(P, X.values[h.id], { row: X, column: h, instance: L() });
          }(z, G, 0, void 0, y);
        });
      }
      m.resetExpanded = "resetExpanded", m.toggleRowExpanded = "toggleRowExpanded", m.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var Pe = function(e) {
        e.getToggleAllRowsExpandedProps = [$e], e.getToggleRowExpandedProps = [Ze], e.stateReducers.push(Qe), e.useInstance.push(ze), e.prepareRow.push(nt);
      };
      Pe.pluginName = "useExpanded";
      var $e = function(e, l) {
        var y = l.instance;
        return [e, { onClick: function(d) {
          y.toggleAllRowsExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle All Rows Expanded" }];
      }, Ze = function(e, l) {
        var y = l.row;
        return [e, { onClick: function() {
          y.toggleRowExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle Row Expanded" }];
      };
      function Qe(e, l, y, d) {
        if (l.type === m.init)
          return C({ expanded: {} }, e);
        if (l.type === m.resetExpanded)
          return C({}, e, { expanded: d.initialState.expanded || {} });
        if (l.type === m.toggleAllRowsExpanded) {
          var w = l.value, h = d.rowsById, M = Object.keys(h).length === Object.keys(e.expanded).length;
          if (w !== void 0 ? w : !M) {
            var E = {};
            return Object.keys(h).forEach(function(W) {
              E[W] = !0;
            }), C({}, e, { expanded: E });
          }
          return C({}, e, { expanded: {} });
        }
        if (l.type === m.toggleRowExpanded) {
          var P, L = l.id, z = l.value, G = e.expanded[L], q = z !== void 0 ? z : !G;
          if (!G && q)
            return C({}, e, { expanded: C({}, e.expanded, (P = {}, P[L] = !0, P)) });
          if (G && !q) {
            var O = e.expanded;
            return O[L], C({}, e, { expanded: N(O, [L].map(_)) });
          }
          return e;
        }
      }
      function ze(e) {
        var l = e.data, y = e.rows, d = e.rowsById, w = e.manualExpandedKey, h = w === void 0 ? "expanded" : w, M = e.paginateExpandedRows, E = M === void 0 || M, P = e.expandSubRows, L = P === void 0 || P, z = e.autoResetExpanded, G = z === void 0 || z, q = e.getHooks, O = e.plugins, W = e.state.expanded, $ = e.dispatch;
        mn(O, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var en = Cn(G), dn = !!(Object.keys(d).length && Object.keys(W).length);
        dn && Object.keys(d).some(function(Vn) {
          return !W[Vn];
        }) && (dn = !1), kn(function() {
          en() && $({ type: m.resetExpanded });
        }, [$, l]);
        var Bn = i.useCallback(function(Vn, wn) {
          $({ type: m.toggleRowExpanded, id: Vn, value: wn });
        }, [$]), fn = i.useCallback(function(Vn) {
          return $({ type: m.toggleAllRowsExpanded, value: Vn });
        }, [$]), X = i.useMemo(function() {
          return E ? Ee(y, { manualExpandedKey: h, expanded: W, expandSubRows: L }) : y;
        }, [E, y, h, W, L]), Pn = i.useMemo(function() {
          return function(Vn) {
            var wn = 0;
            return Object.keys(Vn).forEach(function(An) {
              var zn = An.split(".");
              wn = Math.max(wn, zn.length);
            }), wn;
          }(W);
        }, [W]), ln = Cn(e), Rn = j(q().getToggleAllRowsExpandedProps, { instance: ln() });
        Object.assign(e, { preExpandedRows: y, expandedRows: X, rows: X, expandedDepth: Pn, isAllRowsExpanded: dn, toggleRowExpanded: Bn, toggleAllRowsExpanded: fn, getToggleAllRowsExpandedProps: Rn });
      }
      function nt(e, l) {
        var y = l.instance.getHooks, d = l.instance;
        e.toggleRowExpanded = function(w) {
          return d.toggleRowExpanded(e.id, w);
        }, e.getToggleRowExpandedProps = j(y().getToggleRowExpandedProps, { instance: d, row: e });
      }
      var Xe = function(e, l, y) {
        return e = e.filter(function(d) {
          return l.some(function(w) {
            var h = d.values[w];
            return String(h).toLowerCase().includes(String(y).toLowerCase());
          });
        });
      };
      Xe.autoRemove = function(e) {
        return !e;
      };
      var je = function(e, l, y) {
        return e.filter(function(d) {
          return l.some(function(w) {
            var h = d.values[w];
            return h === void 0 || String(h).toLowerCase() === String(y).toLowerCase();
          });
        });
      };
      je.autoRemove = function(e) {
        return !e;
      };
      var Ge = function(e, l, y) {
        return e.filter(function(d) {
          return l.some(function(w) {
            var h = d.values[w];
            return h === void 0 || String(h) === String(y);
          });
        });
      };
      Ge.autoRemove = function(e) {
        return !e;
      };
      var st = function(e, l, y) {
        return e.filter(function(d) {
          return l.some(function(w) {
            return d.values[w].includes(y);
          });
        });
      };
      st.autoRemove = function(e) {
        return !e || !e.length;
      };
      var vt = function(e, l, y) {
        return e.filter(function(d) {
          return l.some(function(w) {
            var h = d.values[w];
            return h && h.length && y.every(function(M) {
              return h.includes(M);
            });
          });
        });
      };
      vt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var Kt = function(e, l, y) {
        return e.filter(function(d) {
          return l.some(function(w) {
            var h = d.values[w];
            return h && h.length && y.some(function(M) {
              return h.includes(M);
            });
          });
        });
      };
      Kt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var St = function(e, l, y) {
        return e.filter(function(d) {
          return l.some(function(w) {
            var h = d.values[w];
            return y.includes(h);
          });
        });
      };
      St.autoRemove = function(e) {
        return !e || !e.length;
      };
      var zt = function(e, l, y) {
        return e.filter(function(d) {
          return l.some(function(w) {
            return d.values[w] === y;
          });
        });
      };
      zt.autoRemove = function(e) {
        return e === void 0;
      };
      var Xt = function(e, l, y) {
        return e.filter(function(d) {
          return l.some(function(w) {
            return d.values[w] == y;
          });
        });
      };
      Xt.autoRemove = function(e) {
        return e == null;
      };
      var jt = function(e, l, y) {
        var d = y || [], w = d[0], h = d[1];
        if ((w = typeof w == "number" ? w : -1 / 0) > (h = typeof h == "number" ? h : 1 / 0)) {
          var M = w;
          w = h, h = M;
        }
        return e.filter(function(E) {
          return l.some(function(P) {
            var L = E.values[P];
            return L >= w && L <= h;
          });
        });
      };
      jt.autoRemove = function(e) {
        return !e || typeof e[0] != "number" && typeof e[1] != "number";
      };
      var et = Object.freeze({ __proto__: null, text: Xe, exactText: je, exactTextCase: Ge, includes: st, includesAll: vt, includesSome: Kt, includesValue: St, exact: zt, equals: Xt, between: jt });
      m.resetFilters = "resetFilters", m.setFilter = "setFilter", m.setAllFilters = "setAllFilters";
      var Yt = function(e) {
        e.stateReducers.push(Xo), e.useInstance.push(Ut);
      };
      function Xo(e, l, y, d) {
        if (l.type === m.init)
          return C({ filters: [] }, e);
        if (l.type === m.resetFilters)
          return C({}, e, { filters: d.initialState.filters || [] });
        if (l.type === m.setFilter) {
          var w = l.columnId, h = l.filterValue, M = d.allColumns, E = d.filterTypes, P = M.find(function($) {
            return $.id === w;
          });
          if (!P)
            throw new Error("React-Table: Could not find a column with id: " + w);
          var L = we(P.filter, E || {}, et), z = e.filters.find(function($) {
            return $.id === w;
          }), G = In(h, z && z.value);
          return ke(L.autoRemove, G, P) ? C({}, e, { filters: e.filters.filter(function($) {
            return $.id !== w;
          }) }) : C({}, e, z ? { filters: e.filters.map(function($) {
            return $.id === w ? { id: w, value: G } : $;
          }) } : { filters: [].concat(e.filters, [{ id: w, value: G }]) });
        }
        if (l.type === m.setAllFilters) {
          var q = l.filters, O = d.allColumns, W = d.filterTypes;
          return C({}, e, { filters: In(q, e.filters).filter(function($) {
            var en = O.find(function(dn) {
              return dn.id === $.id;
            });
            return !ke(we(en.filter, W || {}, et).autoRemove, $.value, en);
          }) });
        }
      }
      function Ut(e) {
        var l = e.data, y = e.rows, d = e.flatRows, w = e.rowsById, h = e.allColumns, M = e.filterTypes, E = e.manualFilters, P = e.defaultCanFilter, L = P !== void 0 && P, z = e.disableFilters, G = e.state.filters, q = e.dispatch, O = e.autoResetFilters, W = O === void 0 || O, $ = i.useCallback(function(ln, Rn) {
          q({ type: m.setFilter, columnId: ln, filterValue: Rn });
        }, [q]), en = i.useCallback(function(ln) {
          q({ type: m.setAllFilters, filters: ln });
        }, [q]);
        h.forEach(function(ln) {
          var Rn = ln.id, Vn = ln.accessor, wn = ln.defaultCanFilter, An = ln.disableFilters;
          ln.canFilter = Vn ? ne(An !== !0 && void 0, z !== !0 && void 0, !0) : ne(wn, L, !1), ln.setFilter = function(En) {
            return $(ln.id, En);
          };
          var zn = G.find(function(En) {
            return En.id === Rn;
          });
          ln.filterValue = zn && zn.value;
        });
        var dn = i.useMemo(function() {
          if (E || !G.length)
            return [y, d, w];
          var ln = [], Rn = {};
          return [function Vn(wn, An) {
            An === void 0 && (An = 0);
            var zn = wn;
            return (zn = G.reduce(function(En, Kn) {
              var t = Kn.id, o = Kn.value, s = h.find(function(g) {
                return g.id === t;
              });
              if (!s)
                return En;
              An === 0 && (s.preFilteredRows = En);
              var u = we(s.filter, M || {}, et);
              return u ? (s.filteredRows = u(En, [t], o), s.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + s.id + "."), En);
            }, wn)).forEach(function(En) {
              ln.push(En), Rn[En.id] = En, En.subRows && (En.subRows = En.subRows && En.subRows.length > 0 ? Vn(En.subRows, An + 1) : En.subRows);
            }), zn;
          }(y), ln, Rn];
        }, [E, G, y, d, w, h, M]), Bn = dn[0], fn = dn[1], X = dn[2];
        i.useMemo(function() {
          h.filter(function(ln) {
            return !G.find(function(Rn) {
              return Rn.id === ln.id;
            });
          }).forEach(function(ln) {
            ln.preFilteredRows = Bn, ln.filteredRows = Bn;
          });
        }, [Bn, G, h]);
        var Pn = Cn(W);
        kn(function() {
          Pn() && q({ type: m.resetFilters });
        }, [q, E ? null : l]), Object.assign(e, { preFilteredRows: y, preFilteredFlatRows: d, preFilteredRowsById: w, filteredRows: Bn, filteredFlatRows: fn, filteredRowsById: X, rows: Bn, flatRows: fn, rowsById: X, setFilter: $, setAllFilters: en });
      }
      Yt.pluginName = "useFilters", m.resetGlobalFilter = "resetGlobalFilter", m.setGlobalFilter = "setGlobalFilter";
      var wt = function(e) {
        e.stateReducers.push(_t), e.useInstance.push(Jt);
      };
      function _t(e, l, y, d) {
        if (l.type === m.resetGlobalFilter)
          return C({}, e, { globalFilter: d.initialState.globalFilter || void 0 });
        if (l.type === m.setGlobalFilter) {
          var w = l.filterValue, h = d.userFilterTypes, M = we(d.globalFilter, h || {}, et), E = In(w, e.globalFilter);
          return ke(M.autoRemove, E) ? (e.globalFilter, N(e, ["globalFilter"])) : C({}, e, { globalFilter: E });
        }
      }
      function Jt(e) {
        var l = e.data, y = e.rows, d = e.flatRows, w = e.rowsById, h = e.allColumns, M = e.filterTypes, E = e.globalFilter, P = e.manualGlobalFilter, L = e.state.globalFilter, z = e.dispatch, G = e.autoResetGlobalFilter, q = G === void 0 || G, O = e.disableGlobalFilter, W = i.useCallback(function(X) {
          z({ type: m.setGlobalFilter, filterValue: X });
        }, [z]), $ = i.useMemo(function() {
          if (P || L === void 0)
            return [y, d, w];
          var X = [], Pn = {}, ln = we(E, M || {}, et);
          if (!ln)
            return console.warn("Could not find a valid 'globalFilter' option."), y;
          h.forEach(function(Vn) {
            var wn = Vn.disableGlobalFilter;
            Vn.canFilter = ne(wn !== !0 && void 0, O !== !0 && void 0, !0);
          });
          var Rn = h.filter(function(Vn) {
            return Vn.canFilter === !0;
          });
          return [function Vn(wn) {
            return (wn = ln(wn, Rn.map(function(An) {
              return An.id;
            }), L)).forEach(function(An) {
              X.push(An), Pn[An.id] = An, An.subRows = An.subRows && An.subRows.length ? Vn(An.subRows) : An.subRows;
            }), wn;
          }(y), X, Pn];
        }, [P, L, E, M, h, y, d, w, O]), en = $[0], dn = $[1], Bn = $[2], fn = Cn(q);
        kn(function() {
          fn() && z({ type: m.resetGlobalFilter });
        }, [z, P ? null : l]), Object.assign(e, { preGlobalFilteredRows: y, preGlobalFilteredFlatRows: d, preGlobalFilteredRowsById: w, globalFilteredRows: en, globalFilteredFlatRows: dn, globalFilteredRowsById: Bn, rows: en, flatRows: dn, rowsById: Bn, setGlobalFilter: W, disableGlobalFilter: O });
      }
      function Mt(e, l) {
        return l.reduce(function(y, d) {
          return y + (typeof d == "number" ? d : 0);
        }, 0);
      }
      wt.pluginName = "useGlobalFilter";
      var bt = Object.freeze({ __proto__: null, sum: Mt, min: function(e) {
        var l = e[0] || 0;
        return e.forEach(function(y) {
          typeof y == "number" && (l = Math.min(l, y));
        }), l;
      }, max: function(e) {
        var l = e[0] || 0;
        return e.forEach(function(y) {
          typeof y == "number" && (l = Math.max(l, y));
        }), l;
      }, minMax: function(e) {
        var l = e[0] || 0, y = e[0] || 0;
        return e.forEach(function(d) {
          typeof d == "number" && (l = Math.min(l, d), y = Math.max(y, d));
        }), l + ".." + y;
      }, average: function(e) {
        return Mt(0, e) / e.length;
      }, median: function(e) {
        if (!e.length)
          return null;
        var l = Math.floor(e.length / 2), y = [].concat(e).sort(function(d, w) {
          return d - w;
        });
        return e.length % 2 != 0 ? y[l] : (y[l - 1] + y[l]) / 2;
      }, unique: function(e) {
        return Array.from(new Set(e).values());
      }, uniqueCount: function(e) {
        return new Set(e).size;
      }, count: function(e) {
        return e.length;
      } }), $t = [], Zt = {};
      m.resetGroupBy = "resetGroupBy", m.setGroupBy = "setGroupBy", m.toggleGroupBy = "toggleGroupBy";
      var At = function(e) {
        e.getGroupByToggleProps = [Qt], e.stateReducers.push(tt), e.visibleColumnsDeps.push(function(l, y) {
          var d = y.instance;
          return [].concat(l, [d.state.groupBy]);
        }), e.visibleColumns.push(no), e.useInstance.push(Yo), e.prepareRow.push(eo);
      };
      At.pluginName = "useGroupBy";
      var Qt = function(e, l) {
        var y = l.header;
        return [e, { onClick: y.canGroupBy ? function(d) {
          d.persist(), y.toggleGroupBy();
        } : void 0, style: { cursor: y.canGroupBy ? "pointer" : void 0 }, title: "Toggle GroupBy" }];
      };
      function tt(e, l, y, d) {
        if (l.type === m.init)
          return C({ groupBy: [] }, e);
        if (l.type === m.resetGroupBy)
          return C({}, e, { groupBy: d.initialState.groupBy || [] });
        if (l.type === m.setGroupBy)
          return C({}, e, { groupBy: l.value });
        if (l.type === m.toggleGroupBy) {
          var w = l.columnId, h = l.value, M = h !== void 0 ? h : !e.groupBy.includes(w);
          return C({}, e, M ? { groupBy: [].concat(e.groupBy, [w]) } : { groupBy: e.groupBy.filter(function(E) {
            return E !== w;
          }) });
        }
      }
      function no(e, l) {
        var y = l.instance.state.groupBy, d = y.map(function(h) {
          return e.find(function(M) {
            return M.id === h;
          });
        }).filter(Boolean), w = e.filter(function(h) {
          return !y.includes(h.id);
        });
        return (e = [].concat(d, w)).forEach(function(h) {
          h.isGrouped = y.includes(h.id), h.groupedIndex = y.indexOf(h.id);
        }), e;
      }
      var jo = {};
      function Yo(e) {
        var l = e.data, y = e.rows, d = e.flatRows, w = e.rowsById, h = e.allColumns, M = e.flatHeaders, E = e.groupByFn, P = E === void 0 ? to : E, L = e.manualGroupBy, z = e.aggregations, G = z === void 0 ? jo : z, q = e.plugins, O = e.state.groupBy, W = e.dispatch, $ = e.autoResetGroupBy, en = $ === void 0 || $, dn = e.disableGroupBy, Bn = e.defaultCanGroupBy, fn = e.getHooks;
        mn(q, ["useColumnOrder", "useFilters"], "useGroupBy");
        var X = Cn(e);
        h.forEach(function(s) {
          var u = s.accessor, g = s.defaultGroupBy, v = s.disableGroupBy;
          s.canGroupBy = u ? ne(s.canGroupBy, v !== !0 && void 0, dn !== !0 && void 0, !0) : ne(s.canGroupBy, g, Bn, !1), s.canGroupBy && (s.toggleGroupBy = function() {
            return e.toggleGroupBy(s.id);
          }), s.Aggregated = s.Aggregated || s.Cell;
        });
        var Pn = i.useCallback(function(s, u) {
          W({ type: m.toggleGroupBy, columnId: s, value: u });
        }, [W]), ln = i.useCallback(function(s) {
          W({ type: m.setGroupBy, value: s });
        }, [W]);
        M.forEach(function(s) {
          s.getGroupByToggleProps = j(fn().getGroupByToggleProps, { instance: X(), header: s });
        });
        var Rn = i.useMemo(function() {
          if (L || !O.length)
            return [y, d, w, $t, Zt, d, w];
          var s = O.filter(function(k) {
            return h.find(function(U) {
              return U.id === k;
            });
          }), u = [], g = {}, v = [], f = {}, b = [], R = {}, T = function k(U, x, V) {
            if (x === void 0 && (x = 0), x === s.length)
              return U.map(function(an) {
                return C({}, an, { depth: x });
              });
            var J = s[x], F = P(U, J);
            return Object.entries(F).map(function(an, gn) {
              var bn = an[0], nn = an[1], Ln = J + ":" + bn, Gn = k(nn, x + 1, Ln = V ? V + ">" + Ln : Ln), tn = x ? Le(nn, "leafRows") : nn, Z = function(pn, Fn, Wn) {
                var Un = {};
                return h.forEach(function(sn) {
                  if (s.includes(sn.id))
                    Un[sn.id] = Fn[0] ? Fn[0].values[sn.id] : null;
                  else {
                    var Ce = typeof sn.aggregate == "function" ? sn.aggregate : G[sn.aggregate] || bt[sn.aggregate];
                    if (Ce) {
                      var Hn = Fn.map(function(Nn) {
                        return Nn.values[sn.id];
                      }), Dn = pn.map(function(Nn) {
                        var _n = Nn.values[sn.id];
                        if (!Wn && sn.aggregateValue) {
                          var fe = typeof sn.aggregateValue == "function" ? sn.aggregateValue : G[sn.aggregateValue] || bt[sn.aggregateValue];
                          if (!fe)
                            throw console.info({ column: sn }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                          _n = fe(_n, Nn, sn);
                        }
                        return _n;
                      });
                      Un[sn.id] = Ce(Dn, Hn);
                    } else {
                      if (sn.aggregate)
                        throw console.info({ column: sn }), new Error("React Table: Invalid column.aggregate option for column listed above");
                      Un[sn.id] = null;
                    }
                  }
                }), Un;
              }(tn, nn, x), on = { id: Ln, isGrouped: !0, groupByID: J, groupByVal: bn, values: Z, subRows: Gn, leafRows: tn, depth: x, index: gn };
              return Gn.forEach(function(pn) {
                u.push(pn), g[pn.id] = pn, pn.isGrouped ? (v.push(pn), f[pn.id] = pn) : (b.push(pn), R[pn.id] = pn);
              }), on;
            });
          }(y);
          return T.forEach(function(k) {
            u.push(k), g[k.id] = k, k.isGrouped ? (v.push(k), f[k.id] = k) : (b.push(k), R[k.id] = k);
          }), [T, u, g, v, f, b, R];
        }, [L, O, y, d, w, h, G, P]), Vn = Rn[0], wn = Rn[1], An = Rn[2], zn = Rn[3], En = Rn[4], Kn = Rn[5], t = Rn[6], o = Cn(en);
        kn(function() {
          o() && W({ type: m.resetGroupBy });
        }, [W, L ? null : l]), Object.assign(e, { preGroupedRows: y, preGroupedFlatRow: d, preGroupedRowsById: w, groupedRows: Vn, groupedFlatRows: wn, groupedRowsById: An, onlyGroupedFlatRows: zn, onlyGroupedRowsById: En, nonGroupedFlatRows: Kn, nonGroupedRowsById: t, rows: Vn, flatRows: wn, rowsById: An, toggleGroupBy: Pn, setGroupBy: ln });
      }
      function eo(e) {
        e.allCells.forEach(function(l) {
          var y;
          l.isGrouped = l.column.isGrouped && l.column.id === e.groupByID, l.isPlaceholder = !l.isGrouped && l.column.isGrouped, l.isAggregated = !l.isGrouped && !l.isPlaceholder && ((y = e.subRows) == null ? void 0 : y.length);
        });
      }
      function to(e, l) {
        return e.reduce(function(y, d, w) {
          var h = "" + d.values[l];
          return y[h] = Array.isArray(y[h]) ? y[h] : [], y[h].push(d), y;
        }, {});
      }
      var oo = /([0-9]+)/gm;
      function ct(e, l) {
        return e === l ? 0 : e > l ? 1 : -1;
      }
      function ot(e, l, y) {
        return [e.values[y], l.values[y]];
      }
      function ro(e) {
        return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
      }
      var Uo = Object.freeze({ __proto__: null, alphanumeric: function(e, l, y) {
        var d = ot(e, l, y), w = d[0], h = d[1];
        for (w = ro(w), h = ro(h), w = w.split(oo).filter(Boolean), h = h.split(oo).filter(Boolean); w.length && h.length; ) {
          var M = w.shift(), E = h.shift(), P = parseInt(M, 10), L = parseInt(E, 10), z = [P, L].sort();
          if (isNaN(z[0])) {
            if (M > E)
              return 1;
            if (E > M)
              return -1;
          } else {
            if (isNaN(z[1]))
              return isNaN(P) ? -1 : 1;
            if (P > L)
              return 1;
            if (L > P)
              return -1;
          }
        }
        return w.length - h.length;
      }, datetime: function(e, l, y) {
        var d = ot(e, l, y), w = d[0], h = d[1];
        return ct(w = w.getTime(), h = h.getTime());
      }, basic: function(e, l, y) {
        var d = ot(e, l, y);
        return ct(d[0], d[1]);
      }, string: function(e, l, y) {
        var d = ot(e, l, y), w = d[0], h = d[1];
        for (w = w.split("").filter(Boolean), h = h.split("").filter(Boolean); w.length && h.length; ) {
          var M = w.shift(), E = h.shift(), P = M.toLowerCase(), L = E.toLowerCase();
          if (P > L)
            return 1;
          if (L > P)
            return -1;
          if (M > E)
            return 1;
          if (E > M)
            return -1;
        }
        return w.length - h.length;
      }, number: function(e, l, y) {
        var d = ot(e, l, y), w = d[0], h = d[1], M = /[^0-9.]/gi;
        return ct(w = Number(String(w).replace(M, "")), h = Number(String(h).replace(M, "")));
      } });
      m.resetSortBy = "resetSortBy", m.setSortBy = "setSortBy", m.toggleSortBy = "toggleSortBy", m.clearSortBy = "clearSortBy", B.sortType = "alphanumeric", B.sortDescFirst = !1;
      var ao = function(e) {
        e.getSortByToggleProps = [_o], e.stateReducers.push(Jo), e.useInstance.push($o);
      };
      ao.pluginName = "useSortBy";
      var _o = function(e, l) {
        var y = l.instance, d = l.column, w = y.isMultiSortEvent, h = w === void 0 ? function(M) {
          return M.shiftKey;
        } : w;
        return [e, { onClick: d.canSort ? function(M) {
          M.persist(), d.toggleSortBy(void 0, !y.disableMultiSort && h(M));
        } : void 0, style: { cursor: d.canSort ? "pointer" : void 0 }, title: d.canSort ? "Toggle SortBy" : void 0 }];
      };
      function Jo(e, l, y, d) {
        if (l.type === m.init)
          return C({ sortBy: [] }, e);
        if (l.type === m.resetSortBy)
          return C({}, e, { sortBy: d.initialState.sortBy || [] });
        if (l.type === m.clearSortBy)
          return C({}, e, { sortBy: e.sortBy.filter(function(X) {
            return X.id !== l.columnId;
          }) });
        if (l.type === m.setSortBy)
          return C({}, e, { sortBy: l.sortBy });
        if (l.type === m.toggleSortBy) {
          var w, h = l.columnId, M = l.desc, E = l.multi, P = d.allColumns, L = d.disableMultiSort, z = d.disableSortRemove, G = d.disableMultiRemove, q = d.maxMultiSortColCount, O = q === void 0 ? Number.MAX_SAFE_INTEGER : q, W = e.sortBy, $ = P.find(function(X) {
            return X.id === h;
          }).sortDescFirst, en = W.find(function(X) {
            return X.id === h;
          }), dn = W.findIndex(function(X) {
            return X.id === h;
          }), Bn = M != null, fn = [];
          return (w = !L && E ? en ? "toggle" : "add" : dn !== W.length - 1 || W.length !== 1 ? "replace" : en ? "toggle" : "replace") != "toggle" || z || Bn || E && G || !(en && en.desc && !$ || !en.desc && $) || (w = "remove"), w === "replace" ? fn = [{ id: h, desc: Bn ? M : $ }] : w === "add" ? (fn = [].concat(W, [{ id: h, desc: Bn ? M : $ }])).splice(0, fn.length - O) : w === "toggle" ? fn = W.map(function(X) {
            return X.id === h ? C({}, X, { desc: Bn ? M : !en.desc }) : X;
          }) : w === "remove" && (fn = W.filter(function(X) {
            return X.id !== h;
          })), C({}, e, { sortBy: fn });
        }
      }
      function $o(e) {
        var l = e.data, y = e.rows, d = e.flatRows, w = e.allColumns, h = e.orderByFn, M = h === void 0 ? uo : h, E = e.sortTypes, P = e.manualSortBy, L = e.defaultCanSort, z = e.disableSortBy, G = e.flatHeaders, q = e.state.sortBy, O = e.dispatch, W = e.plugins, $ = e.getHooks, en = e.autoResetSortBy, dn = en === void 0 || en;
        mn(W, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var Bn = i.useCallback(function(wn) {
          O({ type: m.setSortBy, sortBy: wn });
        }, [O]), fn = i.useCallback(function(wn, An, zn) {
          O({ type: m.toggleSortBy, columnId: wn, desc: An, multi: zn });
        }, [O]), X = Cn(e);
        G.forEach(function(wn) {
          var An = wn.accessor, zn = wn.canSort, En = wn.disableSortBy, Kn = wn.id, t = An ? ne(En !== !0 && void 0, z !== !0 && void 0, !0) : ne(L, zn, !1);
          wn.canSort = t, wn.canSort && (wn.toggleSortBy = function(s, u) {
            return fn(wn.id, s, u);
          }, wn.clearSortBy = function() {
            O({ type: m.clearSortBy, columnId: wn.id });
          }), wn.getSortByToggleProps = j($().getSortByToggleProps, { instance: X(), column: wn });
          var o = q.find(function(s) {
            return s.id === Kn;
          });
          wn.isSorted = !!o, wn.sortedIndex = q.findIndex(function(s) {
            return s.id === Kn;
          }), wn.isSortedDesc = wn.isSorted ? o.desc : void 0;
        });
        var Pn = i.useMemo(function() {
          if (P || !q.length)
            return [y, d];
          var wn = [], An = q.filter(function(zn) {
            return w.find(function(En) {
              return En.id === zn.id;
            });
          });
          return [function zn(En) {
            var Kn = M(En, An.map(function(t) {
              var o = w.find(function(g) {
                return g.id === t.id;
              });
              if (!o)
                throw new Error("React-Table: Could not find a column with id: " + t.id + " while sorting");
              var s = o.sortType, u = ee(s) || (E || {})[s] || Uo[s];
              if (!u)
                throw new Error("React-Table: Could not find a valid sortType of '" + s + "' for column '" + t.id + "'.");
              return function(g, v) {
                return u(g, v, t.id, t.desc);
              };
            }), An.map(function(t) {
              var o = w.find(function(s) {
                return s.id === t.id;
              });
              return o && o.sortInverted ? t.desc : !t.desc;
            }));
            return Kn.forEach(function(t) {
              wn.push(t), t.subRows && t.subRows.length !== 0 && (t.subRows = zn(t.subRows));
            }), Kn;
          }(y), wn];
        }, [P, q, y, d, w, M, E]), ln = Pn[0], Rn = Pn[1], Vn = Cn(dn);
        kn(function() {
          Vn() && O({ type: m.resetSortBy });
        }, [P ? null : l]), Object.assign(e, { preSortedRows: y, preSortedFlatRows: d, sortedRows: ln, sortedFlatRows: Rn, rows: ln, flatRows: Rn, setSortBy: Bn, toggleSortBy: fn });
      }
      function uo(e, l, y) {
        return [].concat(e).sort(function(d, w) {
          for (var h = 0; h < l.length; h += 1) {
            var M = l[h], E = y[h] === !1 || y[h] === "desc", P = M(d, w);
            if (P !== 0)
              return E ? -P : P;
          }
          return y[0] ? d.index - w.index : w.index - d.index;
        });
      }
      m.resetPage = "resetPage", m.gotoPage = "gotoPage", m.setPageSize = "setPageSize";
      var Dt = function(e) {
        e.stateReducers.push(Zo), e.useInstance.push(Qo);
      };
      function Zo(e, l, y, d) {
        if (l.type === m.init)
          return C({ pageSize: 10, pageIndex: 0 }, e);
        if (l.type === m.resetPage)
          return C({}, e, { pageIndex: d.initialState.pageIndex || 0 });
        if (l.type === m.gotoPage) {
          var w = d.pageCount, h = d.page, M = In(l.pageIndex, e.pageIndex), E = !1;
          return M > e.pageIndex ? E = w === -1 ? h.length >= e.pageSize : M < w : M < e.pageIndex && (E = M > -1), E ? C({}, e, { pageIndex: M }) : e;
        }
        if (l.type === m.setPageSize) {
          var P = l.pageSize, L = e.pageSize * e.pageIndex;
          return C({}, e, { pageIndex: Math.floor(L / P), pageSize: P });
        }
      }
      function Qo(e) {
        var l = e.rows, y = e.autoResetPage, d = y === void 0 || y, w = e.manualExpandedKey, h = w === void 0 ? "expanded" : w, M = e.plugins, E = e.pageCount, P = e.paginateExpandedRows, L = P === void 0 || P, z = e.expandSubRows, G = z === void 0 || z, q = e.state, O = q.pageSize, W = q.pageIndex, $ = q.expanded, en = q.globalFilter, dn = q.filters, Bn = q.groupBy, fn = q.sortBy, X = e.dispatch, Pn = e.data, ln = e.manualPagination;
        mn(M, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var Rn = Cn(d);
        kn(function() {
          Rn() && X({ type: m.resetPage });
        }, [X, ln ? null : Pn, en, dn, Bn, fn]);
        var Vn = ln ? E : Math.ceil(l.length / O), wn = i.useMemo(function() {
          return Vn > 0 ? [].concat(new Array(Vn)).fill(null).map(function(u, g) {
            return g;
          }) : [];
        }, [Vn]), An = i.useMemo(function() {
          var u;
          if (ln)
            u = l;
          else {
            var g = O * W, v = g + O;
            u = l.slice(g, v);
          }
          return L ? u : Ee(u, { manualExpandedKey: h, expanded: $, expandSubRows: G });
        }, [G, $, h, ln, W, O, L, l]), zn = W > 0, En = Vn === -1 ? An.length >= O : W < Vn - 1, Kn = i.useCallback(function(u) {
          X({ type: m.gotoPage, pageIndex: u });
        }, [X]), t = i.useCallback(function() {
          return Kn(function(u) {
            return u - 1;
          });
        }, [Kn]), o = i.useCallback(function() {
          return Kn(function(u) {
            return u + 1;
          });
        }, [Kn]), s = i.useCallback(function(u) {
          X({ type: m.setPageSize, pageSize: u });
        }, [X]);
        Object.assign(e, { pageOptions: wn, pageCount: Vn, page: An, canPreviousPage: zn, canNextPage: En, gotoPage: Kn, previousPage: t, nextPage: o, setPageSize: s });
      }
      Dt.pluginName = "usePagination", m.resetPivot = "resetPivot", m.togglePivot = "togglePivot";
      var Rt = function(e) {
        e.getPivotToggleProps = [nr], e.stateReducers.push(er), e.useInstanceAfterData.push(tr), e.allColumns.push(or), e.accessValue.push(rr), e.materializedColumns.push(lo), e.materializedColumnsDeps.push(so), e.visibleColumns.push(ar), e.visibleColumnsDeps.push(ur), e.useInstance.push(ir), e.prepareRow.push(lr);
      };
      Rt.pluginName = "usePivotColumns";
      var io = [], nr = function(e, l) {
        var y = l.header;
        return [e, { onClick: y.canPivot ? function(d) {
          d.persist(), y.togglePivot();
        } : void 0, style: { cursor: y.canPivot ? "pointer" : void 0 }, title: "Toggle Pivot" }];
      };
      function er(e, l, y, d) {
        if (l.type === m.init)
          return C({ pivotColumns: io }, e);
        if (l.type === m.resetPivot)
          return C({}, e, { pivotColumns: d.initialState.pivotColumns || io });
        if (l.type === m.togglePivot) {
          var w = l.columnId, h = l.value, M = h !== void 0 ? h : !e.pivotColumns.includes(w);
          return C({}, e, M ? { pivotColumns: [].concat(e.pivotColumns, [w]) } : { pivotColumns: e.pivotColumns.filter(function(E) {
            return E !== w;
          }) });
        }
      }
      function tr(e) {
        e.allColumns.forEach(function(l) {
          l.isPivotSource = e.state.pivotColumns.includes(l.id);
        });
      }
      function or(e, l) {
        var y = l.instance;
        return e.forEach(function(d) {
          d.isPivotSource = y.state.pivotColumns.includes(d.id), d.uniqueValues = /* @__PURE__ */ new Set();
        }), e;
      }
      function rr(e, l) {
        var y = l.column;
        return y.uniqueValues && e !== void 0 && y.uniqueValues.add(e), e;
      }
      function lo(e, l) {
        var y = l.instance, d = y.allColumns, w = y.state;
        if (!w.pivotColumns.length || !w.groupBy || !w.groupBy.length)
          return e;
        var h = w.pivotColumns.map(function(P) {
          return d.find(function(L) {
            return L.id === P;
          });
        }).filter(Boolean), M = d.filter(function(P) {
          return !P.isPivotSource && !w.groupBy.includes(P.id) && !w.pivotColumns.includes(P.id);
        }), E = le(function P(L, z, G) {
          L === void 0 && (L = 0), G === void 0 && (G = []);
          var q = h[L];
          return q ? Array.from(q.uniqueValues).sort().map(function(O) {
            var W = C({}, q, { Header: q.PivotHeader || typeof q.header == "string" ? q.Header + ": " + O : O, isPivotGroup: !0, parent: z, depth: L, id: z ? z.id + "." + q.id + "." + O : q.id + "." + O, pivotValue: O });
            return W.columns = P(L + 1, W, [].concat(G, [function($) {
              return $.values[q.id] === O;
            }])), W;
          }) : M.map(function(O) {
            return C({}, O, { canPivot: !1, isPivoted: !0, parent: z, depth: L, id: "" + (z ? z.id + "." + O.id : O.id), accessor: function(W, $, en) {
              if (G.every(function(dn) {
                return dn(en);
              }))
                return en.values[O.id];
            } });
          });
        }());
        return [].concat(e, E);
      }
      function so(e, l) {
        var y = l.instance.state, d = y.pivotColumns, w = y.groupBy;
        return [].concat(e, [d, w]);
      }
      function ar(e, l) {
        var y = l.instance.state;
        return e = e.filter(function(d) {
          return !d.isPivotSource;
        }), y.pivotColumns.length && y.groupBy && y.groupBy.length && (e = e.filter(function(d) {
          return d.isGrouped || d.isPivoted;
        })), e;
      }
      function ur(e, l) {
        var y = l.instance;
        return [].concat(e, [y.state.pivotColumns, y.state.groupBy]);
      }
      function ir(e) {
        var l = e.columns, y = e.allColumns, d = e.flatHeaders, w = e.getHooks, h = e.plugins, M = e.dispatch, E = e.autoResetPivot, P = E === void 0 || E, L = e.manaulPivot, z = e.disablePivot, G = e.defaultCanPivot;
        mn(h, ["useGroupBy"], "usePivotColumns");
        var q = Cn(e);
        y.forEach(function(W) {
          var $ = W.accessor, en = W.defaultPivot, dn = W.disablePivot;
          W.canPivot = $ ? ne(W.canPivot, dn !== !0 && void 0, z !== !0 && void 0, !0) : ne(W.canPivot, en, G, !1), W.canPivot && (W.togglePivot = function() {
            return e.togglePivot(W.id);
          }), W.Aggregated = W.Aggregated || W.Cell;
        }), d.forEach(function(W) {
          W.getPivotToggleProps = j(w().getPivotToggleProps, { instance: q(), header: W });
        });
        var O = Cn(P);
        kn(function() {
          O() && M({ type: m.resetPivot });
        }, [M, L ? null : l]), Object.assign(e, { togglePivot: function(W, $) {
          M({ type: m.togglePivot, columnId: W, value: $ });
        } });
      }
      function lr(e) {
        e.allCells.forEach(function(l) {
          l.isPivoted = l.column.isPivoted;
        });
      }
      m.resetSelectedRows = "resetSelectedRows", m.toggleAllRowsSelected = "toggleAllRowsSelected", m.toggleRowSelected = "toggleRowSelected", m.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var co = function(e) {
        e.getToggleRowSelectedProps = [Nt], e.getToggleAllRowsSelectedProps = [rt], e.getToggleAllPageRowsSelectedProps = [yo], e.stateReducers.push(sr), e.useInstance.push(Co), e.prepareRow.push(cr);
      };
      co.pluginName = "useRowSelect";
      var Nt = function(e, l) {
        var y = l.instance, d = l.row, w = y.manualRowSelectedKey, h = w === void 0 ? "isSelected" : w;
        return [e, { onChange: function(M) {
          d.toggleRowSelected(M.target.checked);
        }, style: { cursor: "pointer" }, checked: !(!d.original || !d.original[h]) || d.isSelected, title: "Toggle Row Selected", indeterminate: d.isSomeSelected }];
      }, rt = function(e, l) {
        var y = l.instance;
        return [e, { onChange: function(d) {
          y.toggleAllRowsSelected(d.target.checked);
        }, style: { cursor: "pointer" }, checked: y.isAllRowsSelected, title: "Toggle All Rows Selected", indeterminate: !!(!y.isAllRowsSelected && Object.keys(y.state.selectedRowIds).length) }];
      }, yo = function(e, l) {
        var y = l.instance;
        return [e, { onChange: function(d) {
          y.toggleAllPageRowsSelected(d.target.checked);
        }, style: { cursor: "pointer" }, checked: y.isAllPageRowsSelected, title: "Toggle All Current Page Rows Selected", indeterminate: !!(!y.isAllPageRowsSelected && y.page.some(function(d) {
          var w = d.id;
          return y.state.selectedRowIds[w];
        })) }];
      };
      function sr(e, l, y, d) {
        if (l.type === m.init)
          return C({ selectedRowIds: {} }, e);
        if (l.type === m.resetSelectedRows)
          return C({}, e, { selectedRowIds: d.initialState.selectedRowIds || {} });
        if (l.type === m.toggleAllRowsSelected) {
          var w = l.value, h = d.isAllRowsSelected, M = d.rowsById, E = d.nonGroupedRowsById, P = E === void 0 ? M : E, L = w !== void 0 ? w : !h, z = Object.assign({}, e.selectedRowIds);
          return L ? Object.keys(P).forEach(function(Kn) {
            z[Kn] = !0;
          }) : Object.keys(P).forEach(function(Kn) {
            delete z[Kn];
          }), C({}, e, { selectedRowIds: z });
        }
        if (l.type === m.toggleRowSelected) {
          var G = l.id, q = l.value, O = d.rowsById, W = d.selectSubRows, $ = W === void 0 || W, en = d.getSubRows, dn = e.selectedRowIds[G], Bn = q !== void 0 ? q : !dn;
          if (dn === Bn)
            return e;
          var fn = C({}, e.selectedRowIds);
          return function Kn(t) {
            var o = O[t];
            if (o && (o.isGrouped || (Bn ? fn[t] = !0 : delete fn[t]), $ && en(o)))
              return en(o).forEach(function(s) {
                return Kn(s.id);
              });
          }(G), C({}, e, { selectedRowIds: fn });
        }
        if (l.type === m.toggleAllPageRowsSelected) {
          var X = l.value, Pn = d.page, ln = d.rowsById, Rn = d.selectSubRows, Vn = Rn === void 0 || Rn, wn = d.isAllPageRowsSelected, An = d.getSubRows, zn = X !== void 0 ? X : !wn, En = C({}, e.selectedRowIds);
          return Pn.forEach(function(Kn) {
            return function t(o) {
              var s = ln[o];
              if (s.isGrouped || (zn ? En[o] = !0 : delete En[o]), Vn && An(s))
                return An(s).forEach(function(u) {
                  return t(u.id);
                });
            }(Kn.id);
          }), C({}, e, { selectedRowIds: En });
        }
        return e;
      }
      function Co(e) {
        var l = e.data, y = e.rows, d = e.getHooks, w = e.plugins, h = e.rowsById, M = e.nonGroupedRowsById, E = M === void 0 ? h : M, P = e.autoResetSelectedRows, L = P === void 0 || P, z = e.state.selectedRowIds, G = e.selectSubRows, q = G === void 0 || G, O = e.dispatch, W = e.page, $ = e.getSubRows;
        mn(w, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var en = i.useMemo(function() {
          var An = [];
          return y.forEach(function(zn) {
            var En = q ? function Kn(t, o, s) {
              if (o[t.id])
                return !0;
              var u = s(t);
              if (u && u.length) {
                var g = !0, v = !1;
                return u.forEach(function(f) {
                  v && !g || (Kn(f, o, s) ? v = !0 : g = !1);
                }), !!g || !!v && null;
              }
              return !1;
            }(zn, z, $) : !!z[zn.id];
            zn.isSelected = !!En, zn.isSomeSelected = En === null, En && An.push(zn);
          }), An;
        }, [y, q, z, $]), dn = !!(Object.keys(E).length && Object.keys(z).length), Bn = dn;
        dn && Object.keys(E).some(function(An) {
          return !z[An];
        }) && (dn = !1), dn || W && W.length && W.some(function(An) {
          var zn = An.id;
          return !z[zn];
        }) && (Bn = !1);
        var fn = Cn(L);
        kn(function() {
          fn() && O({ type: m.resetSelectedRows });
        }, [O, l]);
        var X = i.useCallback(function(An) {
          return O({ type: m.toggleAllRowsSelected, value: An });
        }, [O]), Pn = i.useCallback(function(An) {
          return O({ type: m.toggleAllPageRowsSelected, value: An });
        }, [O]), ln = i.useCallback(function(An, zn) {
          return O({ type: m.toggleRowSelected, id: An, value: zn });
        }, [O]), Rn = Cn(e), Vn = j(d().getToggleAllRowsSelectedProps, { instance: Rn() }), wn = j(d().getToggleAllPageRowsSelectedProps, { instance: Rn() });
        Object.assign(e, { selectedFlatRows: en, isAllRowsSelected: dn, isAllPageRowsSelected: Bn, toggleRowSelected: ln, toggleAllRowsSelected: X, getToggleAllRowsSelectedProps: Vn, getToggleAllPageRowsSelectedProps: wn, toggleAllPageRowsSelected: Pn });
      }
      function cr(e, l) {
        var y = l.instance;
        e.toggleRowSelected = function(d) {
          return y.toggleRowSelected(e.id, d);
        }, e.getToggleRowSelectedProps = j(y.getHooks().getToggleRowSelectedProps, { instance: y, row: e });
      }
      var fo = function(e) {
        return {};
      }, po = function(e) {
        return {};
      };
      m.setRowState = "setRowState", m.setCellState = "setCellState", m.resetRowState = "resetRowState";
      var Et = function(e) {
        e.stateReducers.push(yr), e.useInstance.push(go), e.prepareRow.push(Cr);
      };
      function yr(e, l, y, d) {
        var w = d.initialRowStateAccessor, h = w === void 0 ? fo : w, M = d.initialCellStateAccessor, E = M === void 0 ? po : M, P = d.rowsById;
        if (l.type === m.init)
          return C({ rowState: {} }, e);
        if (l.type === m.resetRowState)
          return C({}, e, { rowState: d.initialState.rowState || {} });
        if (l.type === m.setRowState) {
          var L, z = l.rowId, G = l.value, q = e.rowState[z] !== void 0 ? e.rowState[z] : h(P[z]);
          return C({}, e, { rowState: C({}, e.rowState, (L = {}, L[z] = In(G, q), L)) });
        }
        if (l.type === m.setCellState) {
          var O, W, $, en, dn, Bn = l.rowId, fn = l.columnId, X = l.value, Pn = e.rowState[Bn] !== void 0 ? e.rowState[Bn] : h(P[Bn]), ln = (Pn == null || (O = Pn.cellState) == null ? void 0 : O[fn]) !== void 0 ? Pn.cellState[fn] : E((W = P[Bn]) == null || ($ = W.cells) == null ? void 0 : $.find(function(Rn) {
            return Rn.column.id === fn;
          }));
          return C({}, e, { rowState: C({}, e.rowState, (dn = {}, dn[Bn] = C({}, Pn, { cellState: C({}, Pn.cellState || {}, (en = {}, en[fn] = In(X, ln), en)) }), dn)) });
        }
      }
      function go(e) {
        var l = e.autoResetRowState, y = l === void 0 || l, d = e.data, w = e.dispatch, h = i.useCallback(function(P, L) {
          return w({ type: m.setRowState, rowId: P, value: L });
        }, [w]), M = i.useCallback(function(P, L, z) {
          return w({ type: m.setCellState, rowId: P, columnId: L, value: z });
        }, [w]), E = Cn(y);
        kn(function() {
          E() && w({ type: m.resetRowState });
        }, [d]), Object.assign(e, { setRowState: h, setCellState: M });
      }
      function Cr(e, l) {
        var y = l.instance, d = y.initialRowStateAccessor, w = d === void 0 ? fo : d, h = y.initialCellStateAccessor, M = h === void 0 ? po : h, E = y.state.rowState;
        e && (e.state = E[e.id] !== void 0 ? E[e.id] : w(e), e.setState = function(P) {
          return y.setRowState(e.id, P);
        }, e.cells.forEach(function(P) {
          e.state.cellState || (e.state.cellState = {}), P.state = e.state.cellState[P.column.id] !== void 0 ? e.state.cellState[P.column.id] : M(P), P.setState = function(L) {
            return y.setCellState(e.id, P.column.id, L);
          };
        }));
      }
      Et.pluginName = "useRowState", m.resetColumnOrder = "resetColumnOrder", m.setColumnOrder = "setColumnOrder";
      var mo = function(e) {
        e.stateReducers.push(ho), e.visibleColumnsDeps.push(function(l, y) {
          var d = y.instance;
          return [].concat(l, [d.state.columnOrder]);
        }), e.visibleColumns.push(vo), e.useInstance.push(dr);
      };
      function ho(e, l, y, d) {
        return l.type === m.init ? C({ columnOrder: [] }, e) : l.type === m.resetColumnOrder ? C({}, e, { columnOrder: d.initialState.columnOrder || [] }) : l.type === m.setColumnOrder ? C({}, e, { columnOrder: In(l.columnOrder, e.columnOrder) }) : void 0;
      }
      function vo(e, l) {
        var y = l.instance.state.columnOrder;
        if (!y || !y.length)
          return e;
        for (var d = [].concat(y), w = [].concat(e), h = [], M = function() {
          var E = d.shift(), P = w.findIndex(function(L) {
            return L.id === E;
          });
          P > -1 && h.push(w.splice(P, 1)[0]);
        }; w.length && d.length; )
          M();
        return [].concat(h, w);
      }
      function dr(e) {
        var l = e.dispatch;
        e.setColumnOrder = i.useCallback(function(y) {
          return l({ type: m.setColumnOrder, columnOrder: y });
        }, [l]);
      }
      mo.pluginName = "useColumnOrder", B.canResize = !0, m.columnStartResizing = "columnStartResizing", m.columnResizing = "columnResizing", m.columnDoneResizing = "columnDoneResizing", m.resetResize = "resetResize";
      var So = function(e) {
        e.getResizerProps = [fr], e.getHeaderProps.push({ style: { position: "relative" } }), e.stateReducers.push(pr), e.useInstance.push(mr), e.useInstanceBeforeDimensions.push(gr);
      }, fr = function(e, l) {
        var y = l.instance, d = l.header, w = y.dispatch, h = function(M, E) {
          var P = !1;
          if (M.type === "touchstart") {
            if (M.touches && M.touches.length > 1)
              return;
            P = !0;
          }
          var L, z, G = function(fn) {
            var X = [];
            return function Pn(ln) {
              ln.columns && ln.columns.length && ln.columns.map(Pn), X.push(ln);
            }(fn), X;
          }(E).map(function(fn) {
            return [fn.id, fn.totalWidth];
          }), q = P ? Math.round(M.touches[0].clientX) : M.clientX, O = function() {
            window.cancelAnimationFrame(L), L = null, w({ type: m.columnDoneResizing });
          }, W = function() {
            window.cancelAnimationFrame(L), L = null, w({ type: m.columnResizing, clientX: z });
          }, $ = function(fn) {
            z = fn, L || (L = window.requestAnimationFrame(W));
          }, en = { mouse: { moveEvent: "mousemove", moveHandler: function(fn) {
            return $(fn.clientX);
          }, upEvent: "mouseup", upHandler: function(fn) {
            document.removeEventListener("mousemove", en.mouse.moveHandler), document.removeEventListener("mouseup", en.mouse.upHandler), O();
          } }, touch: { moveEvent: "touchmove", moveHandler: function(fn) {
            return fn.cancelable && (fn.preventDefault(), fn.stopPropagation()), $(fn.touches[0].clientX), !1;
          }, upEvent: "touchend", upHandler: function(fn) {
            document.removeEventListener(en.touch.moveEvent, en.touch.moveHandler), document.removeEventListener(en.touch.upEvent, en.touch.moveHandler), O();
          } } }, dn = P ? en.touch : en.mouse, Bn = !!function() {
            if (typeof Oe == "boolean")
              return Oe;
            var fn = !1;
            try {
              var X = { get passive() {
                return fn = !0, !1;
              } };
              window.addEventListener("test", null, X), window.removeEventListener("test", null, X);
            } catch {
              fn = !1;
            }
            return Oe = fn;
          }() && { passive: !1 };
          document.addEventListener(dn.moveEvent, dn.moveHandler, Bn), document.addEventListener(dn.upEvent, dn.upHandler, Bn), w({ type: m.columnStartResizing, columnId: E.id, columnWidth: E.totalWidth, headerIdWidths: G, clientX: q });
        };
        return [e, { onMouseDown: function(M) {
          return M.persist() || h(M, d);
        }, onTouchStart: function(M) {
          return M.persist() || h(M, d);
        }, style: { cursor: "col-resize" }, draggable: !1, role: "separator" }];
      };
      function pr(e, l) {
        if (l.type === m.init)
          return C({ columnResizing: { columnWidths: {} } }, e);
        if (l.type === m.resetResize)
          return C({}, e, { columnResizing: { columnWidths: {} } });
        if (l.type === m.columnStartResizing) {
          var y = l.clientX, d = l.columnId, w = l.columnWidth, h = l.headerIdWidths;
          return C({}, e, { columnResizing: C({}, e.columnResizing, { startX: y, headerIdWidths: h, columnWidth: w, isResizingColumn: d }) });
        }
        if (l.type === m.columnResizing) {
          var M = l.clientX, E = e.columnResizing, P = E.startX, L = E.columnWidth, z = E.headerIdWidths, G = (M - P) / L, q = {};
          return (z === void 0 ? [] : z).forEach(function(O) {
            var W = O[0], $ = O[1];
            q[W] = Math.max($ + $ * G, 0);
          }), C({}, e, { columnResizing: C({}, e.columnResizing, { columnWidths: C({}, e.columnResizing.columnWidths, {}, q) }) });
        }
        return l.type === m.columnDoneResizing ? C({}, e, { columnResizing: C({}, e.columnResizing, { startX: null, isResizingColumn: null }) }) : void 0;
      }
      So.pluginName = "useResizeColumns";
      var gr = function(e) {
        var l = e.flatHeaders, y = e.disableResizing, d = e.getHooks, w = e.state.columnResizing, h = Cn(e);
        l.forEach(function(M) {
          var E = ne(M.disableResizing !== !0 && void 0, y !== !0 && void 0, !0);
          M.canResize = E, M.width = w.columnWidths[M.id] || M.originalWidth || M.width, M.isResizing = w.isResizingColumn === M.id, E && (M.getResizerProps = j(d().getResizerProps, { instance: h(), header: M }));
        });
      };
      function mr(e) {
        var l = e.plugins, y = e.dispatch, d = e.autoResetResize, w = d === void 0 || d, h = e.columns;
        mn(l, ["useAbsoluteLayout"], "useResizeColumns");
        var M = Cn(w);
        kn(function() {
          M() && y({ type: m.resetResize });
        }, [h]);
        var E = i.useCallback(function() {
          return y({ type: m.resetResize });
        }, [y]);
        Object.assign(e, { resetResizing: E });
      }
      var Tt = { position: "absolute", top: 0 }, wo = function(e) {
        e.getTableBodyProps.push(yt), e.getRowProps.push(yt), e.getHeaderGroupProps.push(yt), e.getFooterGroupProps.push(yt), e.getHeaderProps.push(function(l, y) {
          var d = y.column;
          return [l, { style: C({}, Tt, { left: d.totalLeft + "px", width: d.totalWidth + "px" }) }];
        }), e.getCellProps.push(function(l, y) {
          var d = y.cell;
          return [l, { style: C({}, Tt, { left: d.column.totalLeft + "px", width: d.column.totalWidth + "px" }) }];
        }), e.getFooterProps.push(function(l, y) {
          var d = y.column;
          return [l, { style: C({}, Tt, { left: d.totalLeft + "px", width: d.totalWidth + "px" }) }];
        });
      };
      wo.pluginName = "useAbsoluteLayout";
      var yt = function(e, l) {
        return [e, { style: { position: "relative", width: l.instance.totalColumnsWidth + "px" } }];
      }, Pt = { display: "inline-block", boxSizing: "border-box" }, It = function(e, l) {
        return [e, { style: { display: "flex", width: l.instance.totalColumnsWidth + "px" } }];
      }, Mo = function(e) {
        e.getRowProps.push(It), e.getHeaderGroupProps.push(It), e.getFooterGroupProps.push(It), e.getHeaderProps.push(function(l, y) {
          var d = y.column;
          return [l, { style: C({}, Pt, { width: d.totalWidth + "px" }) }];
        }), e.getCellProps.push(function(l, y) {
          var d = y.cell;
          return [l, { style: C({}, Pt, { width: d.column.totalWidth + "px" }) }];
        }), e.getFooterProps.push(function(l, y) {
          var d = y.column;
          return [l, { style: C({}, Pt, { width: d.totalWidth + "px" }) }];
        });
      };
      function Lt(e) {
        e.getTableProps.push(hr), e.getRowProps.push(kt), e.getHeaderGroupProps.push(kt), e.getFooterGroupProps.push(kt), e.getHeaderProps.push(vr), e.getCellProps.push(Sr), e.getFooterProps.push(wr);
      }
      Mo.pluginName = "useBlockLayout", Lt.pluginName = "useFlexLayout";
      var hr = function(e, l) {
        return [e, { style: { minWidth: l.instance.totalColumnsMinWidth + "px" } }];
      }, kt = function(e, l) {
        return [e, { style: { display: "flex", flex: "1 0 auto", minWidth: l.instance.totalColumnsMinWidth + "px" } }];
      }, vr = function(e, l) {
        var y = l.column;
        return [e, { style: { boxSizing: "border-box", flex: y.totalFlexWidth ? y.totalFlexWidth + " 0 auto" : void 0, minWidth: y.totalMinWidth + "px", width: y.totalWidth + "px" } }];
      }, Sr = function(e, l) {
        var y = l.cell;
        return [e, { style: { boxSizing: "border-box", flex: y.column.totalFlexWidth + " 0 auto", minWidth: y.column.totalMinWidth + "px", width: y.column.totalWidth + "px" } }];
      }, wr = function(e, l) {
        var y = l.column;
        return [e, { style: { boxSizing: "border-box", flex: y.totalFlexWidth ? y.totalFlexWidth + " 0 auto" : void 0, minWidth: y.totalMinWidth + "px", width: y.totalWidth + "px" } }];
      };
      function bo(e) {
        e.stateReducers.push(No), e.getTableProps.push(Ao), e.getHeaderProps.push(Do), e.getRowProps.push(Ro);
      }
      m.columnStartResizing = "columnStartResizing", m.columnResizing = "columnResizing", m.columnDoneResizing = "columnDoneResizing", m.resetResize = "resetResize", bo.pluginName = "useGridLayout";
      var Ao = function(e, l) {
        var y = l.instance;
        return [e, { style: { display: "grid", gridTemplateColumns: y.visibleColumns.map(function(d) {
          var w;
          return y.state.gridLayout.columnWidths[d.id] ? y.state.gridLayout.columnWidths[d.id] + "px" : (w = y.state.columnResizing) != null && w.isResizingColumn ? y.state.gridLayout.startWidths[d.id] + "px" : typeof d.width == "number" ? d.width + "px" : d.width;
        }).join(" ") } }];
      }, Do = function(e, l) {
        var y = l.column;
        return [e, { id: "header-cell-" + y.id, style: { position: "sticky", gridColumn: "span " + y.totalVisibleHeaderCount } }];
      }, Ro = function(e, l) {
        var y = l.row;
        return y.isExpanded ? [e, { style: { gridColumn: "1 / " + (y.cells.length + 1) } }] : [e, {}];
      };
      function No(e, l, y, d) {
        if (l.type === m.init)
          return C({ gridLayout: { columnWidths: {} } }, e);
        if (l.type === m.resetResize)
          return C({}, e, { gridLayout: { columnWidths: {} } });
        if (l.type === m.columnStartResizing) {
          var w = l.columnId, h = l.headerIdWidths, M = Ot(w);
          if (M !== void 0) {
            var E = d.visibleColumns.reduce(function(X, Pn) {
              var ln;
              return C({}, X, ((ln = {})[Pn.id] = Ot(Pn.id), ln));
            }, {}), P = d.visibleColumns.reduce(function(X, Pn) {
              var ln;
              return C({}, X, ((ln = {})[Pn.id] = Pn.minWidth, ln));
            }, {}), L = d.visibleColumns.reduce(function(X, Pn) {
              var ln;
              return C({}, X, ((ln = {})[Pn.id] = Pn.maxWidth, ln));
            }, {}), z = h.map(function(X) {
              var Pn = X[0];
              return [Pn, Ot(Pn)];
            });
            return C({}, e, { gridLayout: C({}, e.gridLayout, { startWidths: E, minWidths: P, maxWidths: L, headerIdGridWidths: z, columnWidth: M }) });
          }
          return e;
        }
        if (l.type === m.columnResizing) {
          var G = l.clientX, q = e.columnResizing.startX, O = e.gridLayout, W = O.columnWidth, $ = O.minWidths, en = O.maxWidths, dn = O.headerIdGridWidths, Bn = (G - q) / W, fn = {};
          return (dn === void 0 ? [] : dn).forEach(function(X) {
            var Pn = X[0], ln = X[1];
            fn[Pn] = Math.min(Math.max($[Pn], ln + ln * Bn), en[Pn]);
          }), C({}, e, { gridLayout: C({}, e.gridLayout, { columnWidths: C({}, e.gridLayout.columnWidths, {}, fn) }) });
        }
        return l.type === m.columnDoneResizing ? C({}, e, { gridLayout: C({}, e.gridLayout, { startWidths: {}, minWidths: {}, maxWidths: {} }) }) : void 0;
      }
      function Ot(e) {
        var l, y = (l = document.getElementById("header-cell-" + e)) == null ? void 0 : l.offsetWidth;
        if (y !== void 0)
          return y;
      }
      a._UNSTABLE_usePivotColumns = Rt, a.actions = m, a.defaultColumn = B, a.defaultGroupByFn = to, a.defaultOrderByFn = uo, a.defaultRenderer = Sn, a.emptyRenderer = S, a.ensurePluginOrder = mn, a.flexRender = Tn, a.functionalUpdate = In, a.loopHooks = Y, a.makePropGetter = j, a.makeRenderer = hn, a.reduceHooks = Q, a.safeUseLayoutEffect = Xn, a.useAbsoluteLayout = wo, a.useAsyncDebounce = function(e, l) {
        l === void 0 && (l = 0);
        var y = i.useRef({}), d = Cn(e), w = Cn(l);
        return i.useCallback(function() {
          var h = A(regeneratorRuntime.mark(function M() {
            var E, P, L, z = arguments;
            return regeneratorRuntime.wrap(function(G) {
              for (; ; )
                switch (G.prev = G.next) {
                  case 0:
                    for (E = z.length, P = new Array(E), L = 0; L < E; L++)
                      P[L] = z[L];
                    return y.current.promise || (y.current.promise = new Promise(function(q, O) {
                      y.current.resolve = q, y.current.reject = O;
                    })), y.current.timeout && clearTimeout(y.current.timeout), y.current.timeout = setTimeout(A(regeneratorRuntime.mark(function q() {
                      return regeneratorRuntime.wrap(function(O) {
                        for (; ; )
                          switch (O.prev = O.next) {
                            case 0:
                              return delete y.current.timeout, O.prev = 1, O.t0 = y.current, O.next = 5, d().apply(void 0, P);
                            case 5:
                              O.t1 = O.sent, O.t0.resolve.call(O.t0, O.t1), O.next = 12;
                              break;
                            case 9:
                              O.prev = 9, O.t2 = O.catch(1), y.current.reject(O.t2);
                            case 12:
                              return O.prev = 12, delete y.current.promise, O.finish(12);
                            case 15:
                            case "end":
                              return O.stop();
                          }
                      }, q, null, [[1, 9, 12, 15]]);
                    })), w()), G.abrupt("return", y.current.promise);
                  case 5:
                  case "end":
                    return G.stop();
                }
            }, M);
          }));
          return function() {
            return h.apply(this, arguments);
          };
        }(), [d, w]);
      }, a.useBlockLayout = Mo, a.useColumnOrder = mo, a.useExpanded = Pe, a.useFilters = Yt, a.useFlexLayout = Lt, a.useGetLatest = Cn, a.useGlobalFilter = wt, a.useGridLayout = bo, a.useGroupBy = At, a.useMountedLayoutEffect = kn, a.usePagination = Dt, a.useResizeColumns = So, a.useRowSelect = co, a.useRowState = Et, a.useSortBy = ao, a.useTable = function(e) {
        for (var l = arguments.length, y = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++)
          y[d - 1] = arguments[d];
        e = ye(e), y = [ue].concat(y);
        var w = i.useRef({}), h = Cn(w.current);
        Object.assign(h(), C({}, e, { plugins: y, hooks: Yn() })), y.filter(Boolean).forEach(function(f) {
          f(h().hooks);
        });
        var M = Cn(h().hooks);
        h().getHooks = M, delete h().hooks, Object.assign(h(), Q(M().useOptions, ye(e)));
        var E = h(), P = E.data, L = E.columns, z = E.initialState, G = E.defaultColumn, q = E.getSubRows, O = E.getRowId, W = E.stateReducer, $ = E.useControlledState, en = Cn(W), dn = i.useCallback(function(f, b) {
          if (!b.type)
            throw console.info({ action: b }), new Error("Unknown Action 👆");
          return [].concat(M().stateReducers, Array.isArray(en()) ? en() : [en()]).reduce(function(R, T) {
            return T(R, b, f, h()) || R;
          }, f);
        }, [M, en, h]), Bn = i.useReducer(dn, void 0, function() {
          return dn(z, { type: m.init });
        }), fn = Bn[0], X = Bn[1], Pn = Q([].concat(M().useControlledState, [$]), fn, { instance: h() });
        Object.assign(h(), { state: Pn, dispatch: X });
        var ln = i.useMemo(function() {
          return vn(Q(M().columns, L, { instance: h() }));
        }, [M, h, L].concat(Q(M().columnsDeps, [], { instance: h() })));
        h().columns = ln;
        var Rn = i.useMemo(function() {
          return Q(M().allColumns, le(ln), { instance: h() }).map(Jn);
        }, [ln, M, h].concat(Q(M().allColumnsDeps, [], { instance: h() })));
        h().allColumns = Rn;
        var Vn = i.useMemo(function() {
          for (var f = [], b = [], R = {}, T = [].concat(Rn); T.length; ) {
            var k = T.shift();
            He({ data: P, rows: f, flatRows: b, rowsById: R, column: k, getRowId: O, getSubRows: q, accessValueHooks: M().accessValue, getInstance: h });
          }
          return [f, b, R];
        }, [Rn, P, O, q, M, h]), wn = Vn[0], An = Vn[1], zn = Vn[2];
        Object.assign(h(), { rows: wn, initialRows: [].concat(wn), flatRows: An, rowsById: zn }), Y(M().useInstanceAfterData, h());
        var En = i.useMemo(function() {
          return Q(M().visibleColumns, Rn, { instance: h() }).map(function(f) {
            return qn(f, G);
          });
        }, [M, Rn, h, G].concat(Q(M().visibleColumnsDeps, [], { instance: h() })));
        Rn = i.useMemo(function() {
          var f = [].concat(En);
          return Rn.forEach(function(b) {
            f.find(function(R) {
              return R.id === b.id;
            }) || f.push(b);
          }), f;
        }, [Rn, En]), h().allColumns = Rn;
        var Kn = i.useMemo(function() {
          return Q(M().headerGroups, oe(En, G), h());
        }, [M, En, G, h].concat(Q(M().headerGroupsDeps, [], { instance: h() })));
        h().headerGroups = Kn;
        var t = i.useMemo(function() {
          return Kn.length ? Kn[0].headers : [];
        }, [Kn]);
        h().headers = t, h().flatHeaders = Kn.reduce(function(f, b) {
          return [].concat(f, b.headers);
        }, []), Y(M().useInstanceBeforeDimensions, h());
        var o = En.filter(function(f) {
          return f.isVisible;
        }).map(function(f) {
          return f.id;
        }).sort().join("_");
        En = i.useMemo(function() {
          return En.filter(function(f) {
            return f.isVisible;
          });
        }, [En, o]), h().visibleColumns = En;
        var s = he(t), u = s[0], g = s[1], v = s[2];
        return h().totalColumnsMinWidth = u, h().totalColumnsWidth = g, h().totalColumnsMaxWidth = v, Y(M().useInstance, h()), [].concat(h().flatHeaders, h().allColumns).forEach(function(f) {
          f.render = hn(h(), f), f.getHeaderProps = j(M().getHeaderProps, { instance: h(), column: f }), f.getFooterProps = j(M().getFooterProps, { instance: h(), column: f });
        }), h().headerGroups = i.useMemo(function() {
          return Kn.filter(function(f, b) {
            return f.headers = f.headers.filter(function(R) {
              return R.headers ? function T(k) {
                return k.filter(function(U) {
                  return U.headers ? T(U.headers) : U.isVisible;
                }).length;
              }(R.headers) : R.isVisible;
            }), !!f.headers.length && (f.getHeaderGroupProps = j(M().getHeaderGroupProps, { instance: h(), headerGroup: f, index: b }), f.getFooterGroupProps = j(M().getFooterGroupProps, { instance: h(), headerGroup: f, index: b }), !0);
          });
        }, [Kn, h, M]), h().footerGroups = [].concat(h().headerGroups).reverse(), h().prepareRow = i.useCallback(function(f) {
          f.getRowProps = j(M().getRowProps, { instance: h(), row: f }), f.allCells = Rn.map(function(b) {
            var R = f.values[b.id], T = { column: b, row: f, value: R };
            return T.getCellProps = j(M().getCellProps, { instance: h(), cell: T }), T.render = hn(h(), b, { row: f, cell: T, value: R }), T;
          }), f.cells = En.map(function(b) {
            return f.allCells.find(function(R) {
              return R.column.id === b.id;
            });
          }), Y(M().prepareRow, f, { instance: h() });
        }, [M, h, Rn, En]), h().getTableProps = j(M().getTableProps, { instance: h() }), h().getTableBodyProps = j(M().getTableBodyProps, { instance: h() }), Y(M().useFinalInstance, h()), h();
      }, Object.defineProperty(a, "__esModule", { value: !0 });
    });
  }(Io, Io.exports)), Io.exports;
}
var Lo = { exports: {} }, Za;
function Sl() {
  return Za || (Za = 1, function(n, r) {
    (function(a, i) {
      i(r, D);
    })(iu, function(a, i) {
      i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
      function p(t, o, s, u, g, v, f) {
        try {
          var b = t[v](f), R = b.value;
        } catch (T) {
          s(T);
          return;
        }
        b.done ? o(R) : Promise.resolve(R).then(u, g);
      }
      function A(t) {
        return function() {
          var o = this, s = arguments;
          return new Promise(function(u, g) {
            var v = t.apply(o, s);
            function f(R) {
              p(v, u, g, f, b, "next", R);
            }
            function b(R) {
              p(v, u, g, f, b, "throw", R);
            }
            f(void 0);
          });
        };
      }
      function C() {
        return C = Object.assign || function(t) {
          for (var o = 1; o < arguments.length; o++) {
            var s = arguments[o];
            for (var u in s)
              Object.prototype.hasOwnProperty.call(s, u) && (t[u] = s[u]);
          }
          return t;
        }, C.apply(this, arguments);
      }
      function N(t, o) {
        if (t == null)
          return {};
        var s = {}, u = Object.keys(t), g, v;
        for (v = 0; v < u.length; v++)
          g = u[v], !(o.indexOf(g) >= 0) && (s[g] = t[g]);
        return s;
      }
      function _(t, o) {
        if (typeof t != "object" || t === null)
          return t;
        var s = t[Symbol.toPrimitive];
        if (s !== void 0) {
          var u = s.call(t, o || "default");
          if (typeof u != "object")
            return u;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (o === "string" ? String : Number)(t);
      }
      function m(t) {
        var o = _(t, "string");
        return typeof o == "symbol" ? o : String(o);
      }
      var Sn = "Renderer Error ☝️", S = {
        init: "init"
      }, B = function(o) {
        var s = o.value, u = s === void 0 ? "" : s;
        return u;
      }, I = function() {
        return i.createElement(i.Fragment, null, " ");
      }, j = {
        Cell: B,
        width: 150,
        minWidth: 0,
        maxWidth: Number.MAX_SAFE_INTEGER
      };
      function Q() {
        for (var t = arguments.length, o = new Array(t), s = 0; s < t; s++)
          o[s] = arguments[s];
        return o.reduce(function(u, g) {
          var v = g.style, f = g.className, b = N(g, ["style", "className"]);
          return u = C({}, u, {}, b), v && (u.style = u.style ? C({}, u.style || {}, {}, v || {}) : v), f && (u.className = u.className ? u.className + " " + f : f), u.className === "" && delete u.className, u;
        }, {});
      }
      function Y(t, o, s) {
        return typeof o == "function" ? Y({}, o(t, s)) : Array.isArray(o) ? Q.apply(void 0, [t].concat(o)) : Q(t, o);
      }
      var mn = function(o, s) {
        return s === void 0 && (s = {}), function(u) {
          return u === void 0 && (u = {}), [].concat(o, [u]).reduce(function(g, v) {
            return Y(g, v, C({}, s, {
              userProps: u
            }));
          }, {});
        };
      }, In = function(o, s, u, g) {
        return u === void 0 && (u = {}), o.reduce(function(v, f) {
          var b = f(v, u);
          if (!g && typeof b > "u")
            throw console.info(f), new Error("React Table: A reducer hook ☝️ just returned undefined! This is not allowed.");
          return b;
        }, s);
      }, Cn = function(o, s, u) {
        return u === void 0 && (u = {}), o.forEach(function(g) {
          var v = g(s, u);
          if (typeof v < "u")
            throw console.info(g, v), new Error("React Table: A loop-type hook ☝️ just returned a value! This is not allowed.");
        });
      };
      function Xn(t, o, s, u) {
        if (u)
          throw new Error('Defining plugins in the "after" section of ensurePluginOrder is no longer supported (see plugin ' + s + ")");
        var g = t.findIndex(function(v) {
          return v.pluginName === s;
        });
        if (g === -1)
          throw new Error('The plugin "' + s + `" was not found in the plugin list!
This usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:

  ` + s + ".pluginName = '" + s + `'
`);
        o.forEach(function(v) {
          var f = t.findIndex(function(b) {
            return b.pluginName === v;
          });
          if (f > -1 && f > g)
            throw new Error("React Table: The " + s + " plugin hook must be placed after the " + v + " plugin hook!");
        });
      }
      function kn(t, o) {
        return typeof t == "function" ? t(o) : t;
      }
      function hn(t) {
        var o = i.useRef();
        return o.current = t, i.useCallback(function() {
          return o.current;
        }, []);
      }
      var Tn = typeof document < "u" ? i.useLayoutEffect : i.useEffect;
      function vn(t, o) {
        var s = i.useRef(!1);
        Tn(function() {
          s.current && t(), s.current = !0;
        }, o);
      }
      function le(t, o) {
        o === void 0 && (o = 0);
        var s = i.useRef({}), u = hn(t), g = hn(o);
        return i.useCallback(
          /* @__PURE__ */ function() {
            var v = A(
              /* @__PURE__ */ regeneratorRuntime.mark(function f() {
                var b, R, T, k = arguments;
                return regeneratorRuntime.wrap(function(x) {
                  for (; ; )
                    switch (x.prev = x.next) {
                      case 0:
                        for (b = k.length, R = new Array(b), T = 0; T < b; T++)
                          R[T] = k[T];
                        return s.current.promise || (s.current.promise = new Promise(function(V, J) {
                          s.current.resolve = V, s.current.reject = J;
                        })), s.current.timeout && clearTimeout(s.current.timeout), s.current.timeout = setTimeout(
                          /* @__PURE__ */ A(
                            /* @__PURE__ */ regeneratorRuntime.mark(function V() {
                              return regeneratorRuntime.wrap(function(F) {
                                for (; ; )
                                  switch (F.prev = F.next) {
                                    case 0:
                                      return delete s.current.timeout, F.prev = 1, F.t0 = s.current, F.next = 5, u().apply(void 0, R);
                                    case 5:
                                      F.t1 = F.sent, F.t0.resolve.call(F.t0, F.t1), F.next = 12;
                                      break;
                                    case 9:
                                      F.prev = 9, F.t2 = F.catch(1), s.current.reject(F.t2);
                                    case 12:
                                      return F.prev = 12, delete s.current.promise, F.finish(12);
                                    case 15:
                                    case "end":
                                      return F.stop();
                                  }
                              }, V, null, [[1, 9, 12, 15]]);
                            })
                          ),
                          g()
                        ), x.abrupt("return", s.current.promise);
                      case 5:
                      case "end":
                        return x.stop();
                    }
                }, f);
              })
            );
            return function() {
              return v.apply(this, arguments);
            };
          }(),
          [u, g]
        );
      }
      function Jn(t, o, s) {
        return s === void 0 && (s = {}), function(u, g) {
          g === void 0 && (g = {});
          var v = typeof u == "string" ? o[u] : u;
          if (typeof v > "u")
            throw console.info(o), new Error(Sn);
          return qn(v, C({}, t, {
            column: o
          }, s, {}, g));
        };
      }
      function qn(t, o) {
        return oe(t) ? i.createElement(t, o) : t;
      }
      function oe(t) {
        return se(t) || typeof t == "function" || ne(t);
      }
      function se(t) {
        return typeof t == "function" && function() {
          var o = Object.getPrototypeOf(t);
          return o.prototype && o.prototype.isReactComponent;
        }();
      }
      function ne(t) {
        return typeof t == "object" && typeof t.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(t.$$typeof.description);
      }
      function ee(t, o, s) {
        return s === void 0 && (s = 0), t.map(function(u) {
          return u = C({}, u, {
            parent: o,
            depth: s
          }), Ee(u), u.columns && (u.columns = ee(u.columns, u, s + 1)), u;
        });
      }
      function Le(t) {
        return Re(t, "columns");
      }
      function Ee(t) {
        var o = t.id, s = t.accessor, u = t.Header;
        if (typeof s == "string") {
          o = o || s;
          var g = s.split(".");
          s = function(f) {
            return Oe(f, g);
          };
        }
        if (!o && typeof u == "string" && u && (o = u), !o && t.columns)
          throw console.error(t), new Error('A column ID (or unique "Header" value) is required!');
        if (!o)
          throw console.error(t), new Error("A column ID (or string accessor) is required!");
        return Object.assign(t, {
          id: o,
          accessor: s
        }), t;
      }
      function we(t, o) {
        if (!o)
          throw new Error();
        return Object.assign(t, C({
          // Make sure there is a fallback header, just in case
          Header: I,
          Footer: I
        }, j, {}, o, {}, t)), Object.assign(t, {
          originalWidth: t.width
        }), t;
      }
      function ke(t, o, s) {
        s === void 0 && (s = function() {
          return {};
        });
        for (var u = [], g = t, v = 0, f = function() {
          return v++;
        }, b = function() {
          var T = {
            headers: []
          }, k = [], U = g.some(function(x) {
            return x.parent;
          });
          g.forEach(function(x) {
            var V = [].concat(k).reverse()[0], J;
            if (U) {
              if (x.parent)
                J = C({}, x.parent, {
                  originalId: x.parent.id,
                  id: x.parent.id + "_" + f(),
                  headers: [x]
                }, s(x));
              else {
                var F = x.id + "_placeholder";
                J = we(C({
                  originalId: F,
                  id: x.id + "_placeholder_" + f(),
                  placeholderOf: x,
                  headers: [x]
                }, s(x)), o);
              }
              V && V.originalId === J.originalId ? V.headers.push(x) : k.push(J);
            }
            T.headers.push(x);
          }), u.push(T), g = k;
        }; g.length; )
          b();
        return u.reverse();
      }
      var me = /* @__PURE__ */ new Map();
      function Oe(t, o, s) {
        if (!o)
          return t;
        var u = typeof o == "function" ? o : JSON.stringify(o), g = me.get(u) || function() {
          var f = ue(o);
          return me.set(u, f), f;
        }(), v;
        try {
          v = g.reduce(function(f, b) {
            return f[b];
          }, t);
        } catch {
        }
        return typeof v < "u" ? v : s;
      }
      function ce() {
        for (var t = arguments.length, o = new Array(t), s = 0; s < t; s++)
          o[s] = arguments[s];
        for (var u = 0; u < o.length; u += 1)
          if (typeof o[u] < "u")
            return o[u];
      }
      function Ae(t) {
        if (typeof t == "function")
          return t;
      }
      function Re(t, o) {
        var s = [], u = function g(v) {
          v.forEach(function(f) {
            f[o] ? g(f[o]) : s.push(f);
          });
        };
        return u(t), s;
      }
      function Te(t, o) {
        var s = o.manualExpandedKey, u = o.expanded, g = o.expandSubRows, v = g === void 0 ? !0 : g, f = [], b = function R(T, k) {
          k === void 0 && (k = !0), T.isExpanded = T.original && T.original[s] || u[T.id], T.canExpand = T.subRows && !!T.subRows.length, k && f.push(T), T.subRows && T.subRows.length && T.isExpanded && T.subRows.forEach(function(U) {
            return R(U, v);
          });
        };
        return t.forEach(function(R) {
          return b(R);
        }), f;
      }
      function Me(t, o, s) {
        return Ae(t) || o[t] || s[t] || s.text;
      }
      function H(t, o, s) {
        return t ? t(o, s) : typeof o > "u";
      }
      function K() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var un = null;
      function yn() {
        if (typeof un == "boolean")
          return un;
        var t = !1;
        try {
          var o = {
            get passive() {
              return t = !0, !1;
            }
          };
          window.addEventListener("test", null, o), window.removeEventListener("test", null, o);
        } catch {
          t = !1;
        }
        return un = t, un;
      }
      var xn = /\[/g, Yn = /\]/g;
      function ue(t) {
        return Ne(t).map(function(o) {
          return String(o).replace(".", "_");
        }).join(".").replace(xn, ".").replace(Yn, "").split(".");
      }
      function Ne(t, o) {
        if (o === void 0 && (o = []), !Array.isArray(t))
          o.push(t);
        else
          for (var s = 0; s < t.length; s += 1)
            Ne(t[s], o);
        return o;
      }
      var xe = function(o) {
        return C({
          role: "table"
        }, o);
      }, We = function(o) {
        return C({
          role: "rowgroup"
        }, o);
      }, qe = function(o, s) {
        var u = s.column;
        return C({
          key: "header_" + u.id,
          colSpan: u.totalVisibleHeaderCount,
          role: "columnheader"
        }, o);
      }, Ve = function(o, s) {
        var u = s.column;
        return C({
          key: "footer_" + u.id,
          colSpan: u.totalVisibleHeaderCount
        }, o);
      }, Ke = function(o, s) {
        var u = s.index;
        return C({
          key: "headerGroup_" + u,
          role: "row"
        }, o);
      }, $n = function(o, s) {
        var u = s.index;
        return C({
          key: "footerGroup_" + u
        }, o);
      }, jn = function(o, s) {
        var u = s.row;
        return C({
          key: "row_" + u.id,
          role: "row"
        }, o);
      }, rn = function(o, s) {
        var u = s.cell;
        return C({
          key: "cell_" + u.row.id + "_" + u.column.id,
          role: "cell"
        }, o);
      };
      function On() {
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
          getTableProps: [xe],
          getTableBodyProps: [We],
          getHeaderGroupProps: [Ke],
          getFooterGroupProps: [$n],
          getHeaderProps: [qe],
          getFooterProps: [Ve],
          getRowProps: [jn],
          getCellProps: [rn],
          useFinalInstance: []
        };
      }
      S.resetHiddenColumns = "resetHiddenColumns", S.toggleHideColumn = "toggleHideColumn", S.setHiddenColumns = "setHiddenColumns", S.toggleHideAllColumns = "toggleHideAllColumns";
      var re = function(o) {
        o.getToggleHiddenProps = [ye], o.getToggleHideAllColumnsProps = [he], o.stateReducers.push(He), o.useInstanceBeforeDimensions.push(Pe), o.headerGroupsDeps.push(function(s, u) {
          var g = u.instance;
          return [].concat(s, [g.state.hiddenColumns]);
        }), o.useInstance.push($e);
      };
      re.pluginName = "useColumnVisibility";
      var ye = function(o, s) {
        var u = s.column;
        return [o, {
          onChange: function(v) {
            u.toggleHidden(!v.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: u.isVisible,
          title: "Toggle Column Visible"
        }];
      }, he = function(o, s) {
        var u = s.instance;
        return [o, {
          onChange: function(v) {
            u.toggleHideAllColumns(!v.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: !u.allColumnsHidden && !u.state.hiddenColumns.length,
          title: "Toggle All Columns Hidden",
          indeterminate: !u.allColumnsHidden && u.state.hiddenColumns.length
        }];
      };
      function He(t, o, s, u) {
        if (o.type === S.init)
          return C({
            hiddenColumns: []
          }, t);
        if (o.type === S.resetHiddenColumns)
          return C({}, t, {
            hiddenColumns: u.initialState.hiddenColumns || []
          });
        if (o.type === S.toggleHideColumn) {
          var g = typeof o.value < "u" ? o.value : !t.hiddenColumns.includes(o.columnId), v = g ? [].concat(t.hiddenColumns, [o.columnId]) : t.hiddenColumns.filter(function(b) {
            return b !== o.columnId;
          });
          return C({}, t, {
            hiddenColumns: v
          });
        }
        if (o.type === S.setHiddenColumns)
          return C({}, t, {
            hiddenColumns: kn(o.value, t.hiddenColumns)
          });
        if (o.type === S.toggleHideAllColumns) {
          var f = typeof o.value < "u" ? o.value : !t.hiddenColumns.length;
          return C({}, t, {
            hiddenColumns: f ? u.allColumns.map(function(b) {
              return b.id;
            }) : []
          });
        }
      }
      function Pe(t) {
        var o = t.headers, s = t.state.hiddenColumns, u = i.useRef(!1);
        u.current;
        var g = function f(b, R) {
          b.isVisible = R && !s.includes(b.id);
          var T = 0;
          return b.headers && b.headers.length ? b.headers.forEach(function(k) {
            return T += f(k, b.isVisible);
          }) : T = b.isVisible ? 1 : 0, b.totalVisibleHeaderCount = T, T;
        }, v = 0;
        o.forEach(function(f) {
          return v += g(f, !0);
        });
      }
      function $e(t) {
        var o = t.columns, s = t.flatHeaders, u = t.dispatch, g = t.allColumns, v = t.getHooks, f = t.state.hiddenColumns, b = t.autoResetHiddenColumns, R = b === void 0 ? !0 : b, T = hn(t), k = g.length === f.length, U = i.useCallback(function(an, gn) {
          return u({
            type: S.toggleHideColumn,
            columnId: an,
            value: gn
          });
        }, [u]), x = i.useCallback(function(an) {
          return u({
            type: S.setHiddenColumns,
            value: an
          });
        }, [u]), V = i.useCallback(function(an) {
          return u({
            type: S.toggleHideAllColumns,
            value: an
          });
        }, [u]), J = mn(v().getToggleHideAllColumnsProps, {
          instance: T()
        });
        s.forEach(function(an) {
          an.toggleHidden = function(gn) {
            u({
              type: S.toggleHideColumn,
              columnId: an.id,
              value: gn
            });
          }, an.getToggleHiddenProps = mn(v().getToggleHiddenProps, {
            instance: T(),
            column: an
          });
        });
        var F = hn(R);
        vn(function() {
          F() && u({
            type: S.resetHiddenColumns
          });
        }, [u, o]), Object.assign(t, {
          allColumnsHidden: k,
          toggleHideColumn: U,
          setHiddenColumns: x,
          toggleHideAllColumns: V,
          getToggleHideAllColumnsProps: J
        });
      }
      var Ze = {}, Qe = {}, ze = function(o, s, u) {
        return o;
      }, nt = function(o, s) {
        return o.subRows || [];
      }, Xe = function(o, s, u) {
        return "" + (u ? [u.id, s].join(".") : s);
      }, je = function(o) {
        return o;
      };
      function Ge(t) {
        var o = t.initialState, s = o === void 0 ? Ze : o, u = t.defaultColumn, g = u === void 0 ? Qe : u, v = t.getSubRows, f = v === void 0 ? nt : v, b = t.getRowId, R = b === void 0 ? Xe : b, T = t.stateReducer, k = T === void 0 ? ze : T, U = t.useControlledState, x = U === void 0 ? je : U, V = N(t, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);
        return C({}, V, {
          initialState: s,
          defaultColumn: g,
          getSubRows: f,
          getRowId: R,
          stateReducer: k,
          useControlledState: x
        });
      }
      var st = function(o) {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), g = 1; g < s; g++)
          u[g - 1] = arguments[g];
        o = Ge(o), u = [re].concat(u);
        var v = i.useRef({}), f = hn(v.current);
        Object.assign(f(), C({}, o, {
          plugins: u,
          hooks: On()
        })), u.filter(Boolean).forEach(function(Mn) {
          Mn(f().hooks);
        });
        var b = hn(f().hooks);
        f().getHooks = b, delete f().hooks, Object.assign(f(), In(b().useOptions, Ge(o)));
        var R = f(), T = R.data, k = R.columns, U = R.initialState, x = R.defaultColumn, V = R.getSubRows, J = R.getRowId, F = R.stateReducer, an = R.useControlledState, gn = hn(F), bn = i.useCallback(function(Mn, Zn) {
          if (!Zn.type)
            throw console.info({
              action: Zn
            }), new Error("Unknown Action 👆");
          return [].concat(b().stateReducers, Array.isArray(gn()) ? gn() : [gn()]).reduce(function(ie, Se) {
            return Se(ie, Zn, Mn, f()) || ie;
          }, Mn);
        }, [b, gn, f]), nn = i.useReducer(bn, void 0, function() {
          return bn(U, {
            type: S.init
          });
        }), Ln = nn[0], Gn = nn[1], tn = In([].concat(b().useControlledState, [an]), Ln, {
          instance: f()
        });
        Object.assign(f(), {
          state: tn,
          dispatch: Gn
        });
        var Z = i.useMemo(function() {
          return ee(In(b().columns, k, {
            instance: f()
          }));
        }, [b, f, k].concat(In(b().columnsDeps, [], {
          instance: f()
        })));
        f().columns = Z;
        var on = i.useMemo(function() {
          return In(b().allColumns, Le(Z), {
            instance: f()
          }).map(Ee);
        }, [Z, b, f].concat(In(b().allColumnsDeps, [], {
          instance: f()
        })));
        f().allColumns = on;
        var pn = i.useMemo(function() {
          for (var Mn = [], Zn = [], ie = {}, Se = [].concat(on); Se.length; ) {
            var de = Se.shift();
            Kt({
              data: T,
              rows: Mn,
              flatRows: Zn,
              rowsById: ie,
              column: de,
              getRowId: J,
              getSubRows: V,
              accessValueHooks: b().accessValue,
              getInstance: f
            });
          }
          return [Mn, Zn, ie];
        }, [on, T, J, V, b, f]), Fn = pn[0], Wn = pn[1], Un = pn[2];
        Object.assign(f(), {
          rows: Fn,
          initialRows: [].concat(Fn),
          flatRows: Wn,
          rowsById: Un
          // materializedColumns,
        }), Cn(b().useInstanceAfterData, f());
        var sn = i.useMemo(function() {
          return In(b().visibleColumns, on, {
            instance: f()
          }).map(function(Mn) {
            return we(Mn, x);
          });
        }, [b, on, f, x].concat(In(b().visibleColumnsDeps, [], {
          instance: f()
        })));
        on = i.useMemo(function() {
          var Mn = [].concat(sn);
          return on.forEach(function(Zn) {
            Mn.find(function(ie) {
              return ie.id === Zn.id;
            }) || Mn.push(Zn);
          }), Mn;
        }, [on, sn]), f().allColumns = on;
        {
          var Ce = on.filter(function(Mn, Zn) {
            return on.findIndex(function(ie) {
              return ie.id === Mn.id;
            }) !== Zn;
          });
          if (Ce.length)
            throw console.info(on), new Error('Duplicate columns were found with ids: "' + Ce.map(function(Mn) {
              return Mn.id;
            }).join(", ") + '" in the columns array above');
        }
        var Hn = i.useMemo(function() {
          return In(b().headerGroups, ke(sn, x), f());
        }, [b, sn, x, f].concat(In(b().headerGroupsDeps, [], {
          instance: f()
        })));
        f().headerGroups = Hn;
        var Dn = i.useMemo(function() {
          return Hn.length ? Hn[0].headers : [];
        }, [Hn]);
        f().headers = Dn, f().flatHeaders = Hn.reduce(function(Mn, Zn) {
          return [].concat(Mn, Zn.headers);
        }, []), Cn(b().useInstanceBeforeDimensions, f());
        var Nn = sn.filter(function(Mn) {
          return Mn.isVisible;
        }).map(function(Mn) {
          return Mn.id;
        }).sort().join("_");
        sn = i.useMemo(
          function() {
            return sn.filter(function(Mn) {
              return Mn.isVisible;
            });
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [sn, Nn]
        ), f().visibleColumns = sn;
        var _n = vt(Dn), fe = _n[0], at = _n[1], Bt = _n[2];
        return f().totalColumnsMinWidth = fe, f().totalColumnsWidth = at, f().totalColumnsMaxWidth = Bt, Cn(b().useInstance, f()), [].concat(f().flatHeaders, f().allColumns).forEach(function(Mn) {
          Mn.render = Jn(f(), Mn), Mn.getHeaderProps = mn(b().getHeaderProps, {
            instance: f(),
            column: Mn
          }), Mn.getFooterProps = mn(b().getFooterProps, {
            instance: f(),
            column: Mn
          });
        }), f().headerGroups = i.useMemo(function() {
          return Hn.filter(function(Mn, Zn) {
            return Mn.headers = Mn.headers.filter(function(ie) {
              var Se = function de(Ye) {
                return Ye.filter(function(pe) {
                  return pe.headers ? de(pe.headers) : pe.isVisible;
                }).length;
              };
              return ie.headers ? Se(ie.headers) : ie.isVisible;
            }), Mn.headers.length ? (Mn.getHeaderGroupProps = mn(b().getHeaderGroupProps, {
              instance: f(),
              headerGroup: Mn,
              index: Zn
            }), Mn.getFooterGroupProps = mn(b().getFooterGroupProps, {
              instance: f(),
              headerGroup: Mn,
              index: Zn
            }), !0) : !1;
          });
        }, [Hn, f, b]), f().footerGroups = [].concat(f().headerGroups).reverse(), f().prepareRow = i.useCallback(function(Mn) {
          Mn.getRowProps = mn(b().getRowProps, {
            instance: f(),
            row: Mn
          }), Mn.allCells = on.map(function(Zn) {
            var ie = Mn.values[Zn.id], Se = {
              column: Zn,
              row: Mn,
              value: ie
            };
            return Se.getCellProps = mn(b().getCellProps, {
              instance: f(),
              cell: Se
            }), Se.render = Jn(f(), Zn, {
              row: Mn,
              cell: Se,
              value: ie
            }), Se;
          }), Mn.cells = sn.map(function(Zn) {
            return Mn.allCells.find(function(ie) {
              return ie.column.id === Zn.id;
            });
          }), Cn(b().prepareRow, Mn, {
            instance: f()
          });
        }, [b, f, on, sn]), f().getTableProps = mn(b().getTableProps, {
          instance: f()
        }), f().getTableBodyProps = mn(b().getTableBodyProps, {
          instance: f()
        }), Cn(b().useFinalInstance, f()), f();
      };
      function vt(t, o) {
        o === void 0 && (o = 0);
        var s = 0, u = 0, g = 0, v = 0;
        return t.forEach(function(f) {
          var b = f.headers;
          if (f.totalLeft = o, b && b.length) {
            var R = vt(b, o), T = R[0], k = R[1], U = R[2], x = R[3];
            f.totalMinWidth = T, f.totalWidth = k, f.totalMaxWidth = U, f.totalFlexWidth = x;
          } else
            f.totalMinWidth = f.minWidth, f.totalWidth = Math.min(Math.max(f.minWidth, f.width), f.maxWidth), f.totalMaxWidth = f.maxWidth, f.totalFlexWidth = f.canResize ? f.totalWidth : 0;
          f.isVisible && (o += f.totalWidth, s += f.totalMinWidth, u += f.totalWidth, g += f.totalMaxWidth, v += f.totalFlexWidth);
        }), [s, u, g, v];
      }
      function Kt(t) {
        var o = t.data, s = t.rows, u = t.flatRows, g = t.rowsById, v = t.column, f = t.getRowId, b = t.getSubRows, R = t.accessValueHooks, T = t.getInstance, k = function U(x, V, J, F, an) {
          J === void 0 && (J = 0);
          var gn = x, bn = f(x, V, F), nn = g[bn];
          if (nn)
            nn.subRows && nn.originalSubRows.forEach(function(Gn, tn) {
              return U(Gn, tn, J + 1, nn);
            });
          else if (nn = {
            id: bn,
            original: gn,
            index: V,
            depth: J,
            cells: [{}]
            // This is a dummy cell
          }, nn.cells.map = K, nn.cells.filter = K, nn.cells.forEach = K, nn.cells[0].getCellProps = K, nn.values = {}, an.push(nn), u.push(nn), g[bn] = nn, nn.originalSubRows = b(x, V), nn.originalSubRows) {
            var Ln = [];
            nn.originalSubRows.forEach(function(Gn, tn) {
              return U(Gn, tn, J + 1, nn, Ln);
            }), nn.subRows = Ln;
          }
          v.accessor && (nn.values[v.id] = v.accessor(x, V, nn, an, o)), nn.values[v.id] = In(R, nn.values[v.id], {
            row: nn,
            column: v,
            instance: T()
          }, !0);
        };
        o.forEach(function(U, x) {
          return k(U, x, 0, void 0, s);
        });
      }
      S.resetExpanded = "resetExpanded", S.toggleRowExpanded = "toggleRowExpanded", S.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var St = function(o) {
        o.getToggleAllRowsExpandedProps = [zt], o.getToggleRowExpandedProps = [Xt], o.stateReducers.push(jt), o.useInstance.push(et), o.prepareRow.push(Yt);
      };
      St.pluginName = "useExpanded";
      var zt = function(o, s) {
        var u = s.instance;
        return [o, {
          onClick: function(v) {
            u.toggleAllRowsExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle All Rows Expanded"
        }];
      }, Xt = function(o, s) {
        var u = s.row;
        return [o, {
          onClick: function() {
            u.toggleRowExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle Row Expanded"
        }];
      };
      function jt(t, o, s, u) {
        if (o.type === S.init)
          return C({
            expanded: {}
          }, t);
        if (o.type === S.resetExpanded)
          return C({}, t, {
            expanded: u.initialState.expanded || {}
          });
        if (o.type === S.toggleAllRowsExpanded) {
          var g = o.value, v = u.rowsById, f = Object.keys(v).length === Object.keys(t.expanded).length, b = typeof g < "u" ? g : !f;
          if (b) {
            var R = {};
            return Object.keys(v).forEach(function(an) {
              R[an] = !0;
            }), C({}, t, {
              expanded: R
            });
          }
          return C({}, t, {
            expanded: {}
          });
        }
        if (o.type === S.toggleRowExpanded) {
          var T = o.id, k = o.value, U = t.expanded[T], x = typeof k < "u" ? k : !U;
          if (!U && x) {
            var V;
            return C({}, t, {
              expanded: C({}, t.expanded, (V = {}, V[T] = !0, V))
            });
          } else if (U && !x) {
            var J = t.expanded;
            J[T];
            var F = N(J, [T].map(m));
            return C({}, t, {
              expanded: F
            });
          } else
            return t;
        }
      }
      function et(t) {
        var o = t.data, s = t.rows, u = t.rowsById, g = t.manualExpandedKey, v = g === void 0 ? "expanded" : g, f = t.paginateExpandedRows, b = f === void 0 ? !0 : f, R = t.expandSubRows, T = R === void 0 ? !0 : R, k = t.autoResetExpanded, U = k === void 0 ? !0 : k, x = t.getHooks, V = t.plugins, J = t.state.expanded, F = t.dispatch;
        Xn(V, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var an = hn(U), gn = !!(Object.keys(u).length && Object.keys(J).length);
        gn && Object.keys(u).some(function(on) {
          return !J[on];
        }) && (gn = !1), vn(function() {
          an() && F({
            type: S.resetExpanded
          });
        }, [F, o]);
        var bn = i.useCallback(function(on, pn) {
          F({
            type: S.toggleRowExpanded,
            id: on,
            value: pn
          });
        }, [F]), nn = i.useCallback(function(on) {
          return F({
            type: S.toggleAllRowsExpanded,
            value: on
          });
        }, [F]), Ln = i.useMemo(function() {
          return b ? Te(s, {
            manualExpandedKey: v,
            expanded: J,
            expandSubRows: T
          }) : s;
        }, [b, s, v, J, T]), Gn = i.useMemo(function() {
          return Xo(J);
        }, [J]), tn = hn(t), Z = mn(x().getToggleAllRowsExpandedProps, {
          instance: tn()
        });
        Object.assign(t, {
          preExpandedRows: s,
          expandedRows: Ln,
          rows: Ln,
          expandedDepth: Gn,
          isAllRowsExpanded: gn,
          toggleRowExpanded: bn,
          toggleAllRowsExpanded: nn,
          getToggleAllRowsExpandedProps: Z
        });
      }
      function Yt(t, o) {
        var s = o.instance.getHooks, u = o.instance;
        t.toggleRowExpanded = function(g) {
          return u.toggleRowExpanded(t.id, g);
        }, t.getToggleRowExpandedProps = mn(s().getToggleRowExpandedProps, {
          instance: u,
          row: t
        });
      }
      function Xo(t) {
        var o = 0;
        return Object.keys(t).forEach(function(s) {
          var u = s.split(".");
          o = Math.max(o, u.length);
        }), o;
      }
      var Ut = function(o, s, u) {
        return o = o.filter(function(g) {
          return s.some(function(v) {
            var f = g.values[v];
            return String(f).toLowerCase().includes(String(u).toLowerCase());
          });
        }), o;
      };
      Ut.autoRemove = function(t) {
        return !t;
      };
      var wt = function(o, s, u) {
        return o.filter(function(g) {
          return s.some(function(v) {
            var f = g.values[v];
            return f !== void 0 ? String(f).toLowerCase() === String(u).toLowerCase() : !0;
          });
        });
      };
      wt.autoRemove = function(t) {
        return !t;
      };
      var _t = function(o, s, u) {
        return o.filter(function(g) {
          return s.some(function(v) {
            var f = g.values[v];
            return f !== void 0 ? String(f) === String(u) : !0;
          });
        });
      };
      _t.autoRemove = function(t) {
        return !t;
      };
      var Jt = function(o, s, u) {
        return o.filter(function(g) {
          return s.some(function(v) {
            var f = g.values[v];
            return f.includes(u);
          });
        });
      };
      Jt.autoRemove = function(t) {
        return !t || !t.length;
      };
      var Mt = function(o, s, u) {
        return o.filter(function(g) {
          return s.some(function(v) {
            var f = g.values[v];
            return f && f.length && u.every(function(b) {
              return f.includes(b);
            });
          });
        });
      };
      Mt.autoRemove = function(t) {
        return !t || !t.length;
      };
      var bt = function(o, s, u) {
        return o.filter(function(g) {
          return s.some(function(v) {
            var f = g.values[v];
            return f && f.length && u.some(function(b) {
              return f.includes(b);
            });
          });
        });
      };
      bt.autoRemove = function(t) {
        return !t || !t.length;
      };
      var $t = function(o, s, u) {
        return o.filter(function(g) {
          return s.some(function(v) {
            var f = g.values[v];
            return u.includes(f);
          });
        });
      };
      $t.autoRemove = function(t) {
        return !t || !t.length;
      };
      var Zt = function(o, s, u) {
        return o.filter(function(g) {
          return s.some(function(v) {
            var f = g.values[v];
            return f === u;
          });
        });
      };
      Zt.autoRemove = function(t) {
        return typeof t > "u";
      };
      var At = function(o, s, u) {
        return o.filter(function(g) {
          return s.some(function(v) {
            var f = g.values[v];
            return f == u;
          });
        });
      };
      At.autoRemove = function(t) {
        return t == null;
      };
      var Qt = function(o, s, u) {
        var g = u || [], v = g[0], f = g[1];
        if (v = typeof v == "number" ? v : -1 / 0, f = typeof f == "number" ? f : 1 / 0, v > f) {
          var b = v;
          v = f, f = b;
        }
        return o.filter(function(R) {
          return s.some(function(T) {
            var k = R.values[T];
            return k >= v && k <= f;
          });
        });
      };
      Qt.autoRemove = function(t) {
        return !t || typeof t[0] != "number" && typeof t[1] != "number";
      };
      var tt = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        text: Ut,
        exactText: wt,
        exactTextCase: _t,
        includes: Jt,
        includesAll: Mt,
        includesSome: bt,
        includesValue: $t,
        exact: Zt,
        equals: At,
        between: Qt
      });
      S.resetFilters = "resetFilters", S.setFilter = "setFilter", S.setAllFilters = "setAllFilters";
      var no = function(o) {
        o.stateReducers.push(jo), o.useInstance.push(Yo);
      };
      no.pluginName = "useFilters";
      function jo(t, o, s, u) {
        if (o.type === S.init)
          return C({
            filters: []
          }, t);
        if (o.type === S.resetFilters)
          return C({}, t, {
            filters: u.initialState.filters || []
          });
        if (o.type === S.setFilter) {
          var g = o.columnId, v = o.filterValue, f = u.allColumns, b = u.filterTypes, R = f.find(function(F) {
            return F.id === g;
          });
          if (!R)
            throw new Error("React-Table: Could not find a column with id: " + g);
          var T = Me(R.filter, b || {}, tt), k = t.filters.find(function(F) {
            return F.id === g;
          }), U = kn(v, k && k.value);
          return H(T.autoRemove, U, R) ? C({}, t, {
            filters: t.filters.filter(function(F) {
              return F.id !== g;
            })
          }) : k ? C({}, t, {
            filters: t.filters.map(function(F) {
              return F.id === g ? {
                id: g,
                value: U
              } : F;
            })
          }) : C({}, t, {
            filters: [].concat(t.filters, [{
              id: g,
              value: U
            }])
          });
        }
        if (o.type === S.setAllFilters) {
          var x = o.filters, V = u.allColumns, J = u.filterTypes;
          return C({}, t, {
            // Filter out undefined values
            filters: kn(x, t.filters).filter(function(F) {
              var an = V.find(function(bn) {
                return bn.id === F.id;
              }), gn = Me(an.filter, J || {}, tt);
              return !H(gn.autoRemove, F.value, an);
            })
          });
        }
      }
      function Yo(t) {
        var o = t.data, s = t.rows, u = t.flatRows, g = t.rowsById, v = t.allColumns, f = t.filterTypes, b = t.manualFilters, R = t.defaultCanFilter, T = R === void 0 ? !1 : R, k = t.disableFilters, U = t.state.filters, x = t.dispatch, V = t.autoResetFilters, J = V === void 0 ? !0 : V, F = i.useCallback(function(tn, Z) {
          x({
            type: S.setFilter,
            columnId: tn,
            filterValue: Z
          });
        }, [x]), an = i.useCallback(function(tn) {
          x({
            type: S.setAllFilters,
            filters: tn
          });
        }, [x]);
        v.forEach(function(tn) {
          var Z = tn.id, on = tn.accessor, pn = tn.defaultCanFilter, Fn = tn.disableFilters;
          tn.canFilter = on ? ce(Fn === !0 ? !1 : void 0, k === !0 ? !1 : void 0, !0) : ce(pn, T, !1), tn.setFilter = function(Un) {
            return F(tn.id, Un);
          };
          var Wn = U.find(function(Un) {
            return Un.id === Z;
          });
          tn.filterValue = Wn && Wn.value;
        });
        var gn = i.useMemo(function() {
          if (b || !U.length)
            return [s, u, g];
          var tn = [], Z = {}, on = function pn(Fn, Wn) {
            Wn === void 0 && (Wn = 0);
            var Un = Fn;
            return Un = U.reduce(function(sn, Ce) {
              var Hn = Ce.id, Dn = Ce.value, Nn = v.find(function(fe) {
                return fe.id === Hn;
              });
              if (!Nn)
                return sn;
              Wn === 0 && (Nn.preFilteredRows = sn);
              var _n = Me(Nn.filter, f || {}, tt);
              return _n ? (Nn.filteredRows = _n(sn, [Hn], Dn), Nn.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + Nn.id + "."), sn);
            }, Fn), Un.forEach(function(sn) {
              tn.push(sn), Z[sn.id] = sn, sn.subRows && (sn.subRows = sn.subRows && sn.subRows.length > 0 ? pn(sn.subRows, Wn + 1) : sn.subRows);
            }), Un;
          };
          return [on(s), tn, Z];
        }, [b, U, s, u, g, v, f]), bn = gn[0], nn = gn[1], Ln = gn[2];
        i.useMemo(function() {
          var tn = v.filter(function(Z) {
            return !U.find(function(on) {
              return on.id === Z.id;
            });
          });
          tn.forEach(function(Z) {
            Z.preFilteredRows = bn, Z.filteredRows = bn;
          });
        }, [bn, U, v]);
        var Gn = hn(J);
        vn(function() {
          Gn() && x({
            type: S.resetFilters
          });
        }, [x, b ? null : o]), Object.assign(t, {
          preFilteredRows: s,
          preFilteredFlatRows: u,
          preFilteredRowsById: g,
          filteredRows: bn,
          filteredFlatRows: nn,
          filteredRowsById: Ln,
          rows: bn,
          flatRows: nn,
          rowsById: Ln,
          setFilter: F,
          setAllFilters: an
        });
      }
      S.resetGlobalFilter = "resetGlobalFilter", S.setGlobalFilter = "setGlobalFilter";
      var eo = function(o) {
        o.stateReducers.push(to), o.useInstance.push(oo);
      };
      eo.pluginName = "useGlobalFilter";
      function to(t, o, s, u) {
        if (o.type === S.resetGlobalFilter)
          return C({}, t, {
            globalFilter: u.initialState.globalFilter || void 0
          });
        if (o.type === S.setGlobalFilter) {
          var g = o.filterValue, v = u.userFilterTypes, f = Me(u.globalFilter, v || {}, tt), b = kn(g, t.globalFilter);
          if (H(f.autoRemove, b)) {
            t.globalFilter;
            var R = N(t, ["globalFilter"]);
            return R;
          }
          return C({}, t, {
            globalFilter: b
          });
        }
      }
      function oo(t) {
        var o = t.data, s = t.rows, u = t.flatRows, g = t.rowsById, v = t.allColumns, f = t.filterTypes, b = t.globalFilter, R = t.manualGlobalFilter, T = t.state.globalFilter, k = t.dispatch, U = t.autoResetGlobalFilter, x = U === void 0 ? !0 : U, V = t.disableGlobalFilter, J = i.useCallback(function(Ln) {
          k({
            type: S.setGlobalFilter,
            filterValue: Ln
          });
        }, [k]), F = i.useMemo(function() {
          if (R || typeof T > "u")
            return [s, u, g];
          var Ln = [], Gn = {}, tn = Me(b, f || {}, tt);
          if (!tn)
            return console.warn("Could not find a valid 'globalFilter' option."), s;
          v.forEach(function(pn) {
            var Fn = pn.disableGlobalFilter;
            pn.canFilter = ce(Fn === !0 ? !1 : void 0, V === !0 ? !1 : void 0, !0);
          });
          var Z = v.filter(function(pn) {
            return pn.canFilter === !0;
          }), on = function pn(Fn) {
            return Fn = tn(Fn, Z.map(function(Wn) {
              return Wn.id;
            }), T), Fn.forEach(function(Wn) {
              Ln.push(Wn), Gn[Wn.id] = Wn, Wn.subRows = Wn.subRows && Wn.subRows.length ? pn(Wn.subRows) : Wn.subRows;
            }), Fn;
          };
          return [on(s), Ln, Gn];
        }, [R, T, b, f, v, s, u, g, V]), an = F[0], gn = F[1], bn = F[2], nn = hn(x);
        vn(function() {
          nn() && k({
            type: S.resetGlobalFilter
          });
        }, [k, R ? null : o]), Object.assign(t, {
          preGlobalFilteredRows: s,
          preGlobalFilteredFlatRows: u,
          preGlobalFilteredRowsById: g,
          globalFilteredRows: an,
          globalFilteredFlatRows: gn,
          globalFilteredRowsById: bn,
          rows: an,
          flatRows: gn,
          rowsById: bn,
          setGlobalFilter: J,
          disableGlobalFilter: V
        });
      }
      function ct(t, o) {
        return o.reduce(function(s, u) {
          return s + (typeof u == "number" ? u : 0);
        }, 0);
      }
      function ot(t) {
        var o = t[0] || 0;
        return t.forEach(function(s) {
          typeof s == "number" && (o = Math.min(o, s));
        }), o;
      }
      function ro(t) {
        var o = t[0] || 0;
        return t.forEach(function(s) {
          typeof s == "number" && (o = Math.max(o, s));
        }), o;
      }
      function Uo(t) {
        var o = t[0] || 0, s = t[0] || 0;
        return t.forEach(function(u) {
          typeof u == "number" && (o = Math.min(o, u), s = Math.max(s, u));
        }), o + ".." + s;
      }
      function ao(t) {
        return ct(null, t) / t.length;
      }
      function _o(t) {
        if (!t.length)
          return null;
        var o = Math.floor(t.length / 2), s = [].concat(t).sort(function(u, g) {
          return u - g;
        });
        return t.length % 2 !== 0 ? s[o] : (s[o - 1] + s[o]) / 2;
      }
      function Jo(t) {
        return Array.from(new Set(t).values());
      }
      function $o(t) {
        return new Set(t).size;
      }
      function uo(t) {
        return t.length;
      }
      var Dt = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        sum: ct,
        min: ot,
        max: ro,
        minMax: Uo,
        average: ao,
        median: _o,
        unique: Jo,
        uniqueCount: $o,
        count: uo
      }), Zo = [], Qo = {};
      S.resetGroupBy = "resetGroupBy", S.setGroupBy = "setGroupBy", S.toggleGroupBy = "toggleGroupBy";
      var Rt = function(o) {
        o.getGroupByToggleProps = [io], o.stateReducers.push(nr), o.visibleColumnsDeps.push(function(s, u) {
          var g = u.instance;
          return [].concat(s, [g.state.groupBy]);
        }), o.visibleColumns.push(er), o.useInstance.push(or), o.prepareRow.push(rr);
      };
      Rt.pluginName = "useGroupBy";
      var io = function(o, s) {
        var u = s.header;
        return [o, {
          onClick: u.canGroupBy ? function(g) {
            g.persist(), u.toggleGroupBy();
          } : void 0,
          style: {
            cursor: u.canGroupBy ? "pointer" : void 0
          },
          title: "Toggle GroupBy"
        }];
      };
      function nr(t, o, s, u) {
        if (o.type === S.init)
          return C({
            groupBy: []
          }, t);
        if (o.type === S.resetGroupBy)
          return C({}, t, {
            groupBy: u.initialState.groupBy || []
          });
        if (o.type === S.setGroupBy) {
          var g = o.value;
          return C({}, t, {
            groupBy: g
          });
        }
        if (o.type === S.toggleGroupBy) {
          var v = o.columnId, f = o.value, b = typeof f < "u" ? f : !t.groupBy.includes(v);
          return b ? C({}, t, {
            groupBy: [].concat(t.groupBy, [v])
          }) : C({}, t, {
            groupBy: t.groupBy.filter(function(R) {
              return R !== v;
            })
          });
        }
      }
      function er(t, o) {
        var s = o.instance.state.groupBy, u = s.map(function(v) {
          return t.find(function(f) {
            return f.id === v;
          });
        }).filter(Boolean), g = t.filter(function(v) {
          return !s.includes(v.id);
        });
        return t = [].concat(u, g), t.forEach(function(v) {
          v.isGrouped = s.includes(v.id), v.groupedIndex = s.indexOf(v.id);
        }), t;
      }
      var tr = {};
      function or(t) {
        var o = t.data, s = t.rows, u = t.flatRows, g = t.rowsById, v = t.allColumns, f = t.flatHeaders, b = t.groupByFn, R = b === void 0 ? lo : b, T = t.manualGroupBy, k = t.aggregations, U = k === void 0 ? tr : k, x = t.plugins, V = t.state.groupBy, J = t.dispatch, F = t.autoResetGroupBy, an = F === void 0 ? !0 : F, gn = t.disableGroupBy, bn = t.defaultCanGroupBy, nn = t.getHooks;
        Xn(x, ["useColumnOrder", "useFilters"], "useGroupBy");
        var Ln = hn(t);
        v.forEach(function(Dn) {
          var Nn = Dn.accessor, _n = Dn.defaultGroupBy, fe = Dn.disableGroupBy;
          Dn.canGroupBy = Nn ? ce(Dn.canGroupBy, fe === !0 ? !1 : void 0, gn === !0 ? !1 : void 0, !0) : ce(Dn.canGroupBy, _n, bn, !1), Dn.canGroupBy && (Dn.toggleGroupBy = function() {
            return t.toggleGroupBy(Dn.id);
          }), Dn.Aggregated = Dn.Aggregated || Dn.Cell;
        });
        var Gn = i.useCallback(function(Dn, Nn) {
          J({
            type: S.toggleGroupBy,
            columnId: Dn,
            value: Nn
          });
        }, [J]), tn = i.useCallback(function(Dn) {
          J({
            type: S.setGroupBy,
            value: Dn
          });
        }, [J]);
        f.forEach(function(Dn) {
          Dn.getGroupByToggleProps = mn(nn().getGroupByToggleProps, {
            instance: Ln(),
            header: Dn
          });
        });
        var Z = i.useMemo(function() {
          if (T || !V.length)
            return [s, u, g, Zo, Qo, u, g];
          var Dn = V.filter(function(de) {
            return v.find(function(Ye) {
              return Ye.id === de;
            });
          }), Nn = function(Ye, pe, Eo) {
            var Ue = {};
            return v.forEach(function(ae) {
              if (Dn.includes(ae.id)) {
                Ue[ae.id] = pe[0] ? pe[0].values[ae.id] : null;
                return;
              }
              var To = typeof ae.aggregate == "function" ? ae.aggregate : U[ae.aggregate] || Dt[ae.aggregate];
              if (To) {
                var Ct = pe.map(function(ut) {
                  return ut.values[ae.id];
                }), Mr = Ye.map(function(ut) {
                  var _e = ut.values[ae.id];
                  if (!Eo && ae.aggregateValue) {
                    var Je = typeof ae.aggregateValue == "function" ? ae.aggregateValue : U[ae.aggregateValue] || Dt[ae.aggregateValue];
                    if (!Je)
                      throw console.info({
                        column: ae
                      }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                    _e = Je(_e, ut, ae);
                  }
                  return _e;
                });
                Ue[ae.id] = To(Mr, Ct);
              } else {
                if (ae.aggregate)
                  throw console.info({
                    column: ae
                  }), new Error("React Table: Invalid column.aggregate option for column listed above");
                Ue[ae.id] = null;
              }
            }), Ue;
          }, _n = [], fe = {}, at = [], Bt = {}, Mn = [], Zn = {}, ie = function de(Ye, pe, Eo) {
            if (pe === void 0 && (pe = 0), pe === Dn.length)
              return Ye.map(function(Ct) {
                return C({}, Ct, {
                  depth: pe
                });
              });
            var Ue = Dn[pe], ae = R(Ye, Ue), To = Object.entries(ae).map(function(Ct, Mr) {
              var ut = Ct[0], _e = Ct[1], Je = Ue + ":" + ut;
              Je = Eo ? Eo + ">" + Je : Je;
              var ia = de(_e, pe + 1, Je), la = pe ? Re(_e, "leafRows") : _e, ku = Nn(la, _e, pe), Ou = {
                id: Je,
                isGrouped: !0,
                groupByID: Ue,
                groupByVal: ut,
                values: ku,
                subRows: ia,
                leafRows: la,
                depth: pe,
                index: Mr
              };
              return ia.forEach(function(Be) {
                _n.push(Be), fe[Be.id] = Be, Be.isGrouped ? (at.push(Be), Bt[Be.id] = Be) : (Mn.push(Be), Zn[Be.id] = Be);
              }), Ou;
            });
            return To;
          }, Se = ie(s);
          return Se.forEach(function(de) {
            _n.push(de), fe[de.id] = de, de.isGrouped ? (at.push(de), Bt[de.id] = de) : (Mn.push(de), Zn[de.id] = de);
          }), [Se, _n, fe, at, Bt, Mn, Zn];
        }, [T, V, s, u, g, v, U, R]), on = Z[0], pn = Z[1], Fn = Z[2], Wn = Z[3], Un = Z[4], sn = Z[5], Ce = Z[6], Hn = hn(an);
        vn(function() {
          Hn() && J({
            type: S.resetGroupBy
          });
        }, [J, T ? null : o]), Object.assign(t, {
          preGroupedRows: s,
          preGroupedFlatRow: u,
          preGroupedRowsById: g,
          groupedRows: on,
          groupedFlatRows: pn,
          groupedRowsById: Fn,
          onlyGroupedFlatRows: Wn,
          onlyGroupedRowsById: Un,
          nonGroupedFlatRows: sn,
          nonGroupedRowsById: Ce,
          rows: on,
          flatRows: pn,
          rowsById: Fn,
          toggleGroupBy: Gn,
          setGroupBy: tn
        });
      }
      function rr(t) {
        t.allCells.forEach(function(o) {
          var s;
          o.isGrouped = o.column.isGrouped && o.column.id === t.groupByID, o.isPlaceholder = !o.isGrouped && o.column.isGrouped, o.isAggregated = !o.isGrouped && !o.isPlaceholder && ((s = t.subRows) == null ? void 0 : s.length);
        });
      }
      function lo(t, o) {
        return t.reduce(function(s, u, g) {
          var v = "" + u.values[o];
          return s[v] = Array.isArray(s[v]) ? s[v] : [], s[v].push(u), s;
        }, {});
      }
      var so = /([0-9]+)/gm, ar = function(o, s, u) {
        var g = rt(o, s, u), v = g[0], f = g[1];
        for (v = yo(v), f = yo(f), v = v.split(so).filter(Boolean), f = f.split(so).filter(Boolean); v.length && f.length; ) {
          var b = v.shift(), R = f.shift(), T = parseInt(b, 10), k = parseInt(R, 10), U = [T, k].sort();
          if (isNaN(U[0])) {
            if (b > R)
              return 1;
            if (R > b)
              return -1;
            continue;
          }
          if (isNaN(U[1]))
            return isNaN(T) ? -1 : 1;
          if (T > k)
            return 1;
          if (k > T)
            return -1;
        }
        return v.length - f.length;
      };
      function ur(t, o, s) {
        var u = rt(t, o, s), g = u[0], v = u[1];
        return g = g.getTime(), v = v.getTime(), Nt(g, v);
      }
      function ir(t, o, s) {
        var u = rt(t, o, s), g = u[0], v = u[1];
        return Nt(g, v);
      }
      function lr(t, o, s) {
        var u = rt(t, o, s), g = u[0], v = u[1];
        for (g = g.split("").filter(Boolean), v = v.split("").filter(Boolean); g.length && v.length; ) {
          var f = g.shift(), b = v.shift(), R = f.toLowerCase(), T = b.toLowerCase();
          if (R > T)
            return 1;
          if (T > R)
            return -1;
          if (f > b)
            return 1;
          if (b > f)
            return -1;
        }
        return g.length - v.length;
      }
      function co(t, o, s) {
        var u = rt(t, o, s), g = u[0], v = u[1], f = /[^0-9.]/gi;
        return g = Number(String(g).replace(f, "")), v = Number(String(v).replace(f, "")), Nt(g, v);
      }
      function Nt(t, o) {
        return t === o ? 0 : t > o ? 1 : -1;
      }
      function rt(t, o, s) {
        return [t.values[s], o.values[s]];
      }
      function yo(t) {
        return typeof t == "number" ? isNaN(t) || t === 1 / 0 || t === -1 / 0 ? "" : String(t) : typeof t == "string" ? t : "";
      }
      var sr = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        alphanumeric: ar,
        datetime: ur,
        basic: ir,
        string: lr,
        number: co
      });
      S.resetSortBy = "resetSortBy", S.setSortBy = "setSortBy", S.toggleSortBy = "toggleSortBy", S.clearSortBy = "clearSortBy", j.sortType = "alphanumeric", j.sortDescFirst = !1;
      var Co = function(o) {
        o.getSortByToggleProps = [cr], o.stateReducers.push(fo), o.useInstance.push(po);
      };
      Co.pluginName = "useSortBy";
      var cr = function(o, s) {
        var u = s.instance, g = s.column, v = u.isMultiSortEvent, f = v === void 0 ? function(b) {
          return b.shiftKey;
        } : v;
        return [o, {
          onClick: g.canSort ? function(b) {
            b.persist(), g.toggleSortBy(void 0, !u.disableMultiSort && f(b));
          } : void 0,
          style: {
            cursor: g.canSort ? "pointer" : void 0
          },
          title: g.canSort ? "Toggle SortBy" : void 0
        }];
      };
      function fo(t, o, s, u) {
        if (o.type === S.init)
          return C({
            sortBy: []
          }, t);
        if (o.type === S.resetSortBy)
          return C({}, t, {
            sortBy: u.initialState.sortBy || []
          });
        if (o.type === S.clearSortBy) {
          var g = t.sortBy, v = g.filter(function(on) {
            return on.id !== o.columnId;
          });
          return C({}, t, {
            sortBy: v
          });
        }
        if (o.type === S.setSortBy) {
          var f = o.sortBy;
          return C({}, t, {
            sortBy: f
          });
        }
        if (o.type === S.toggleSortBy) {
          var b = o.columnId, R = o.desc, T = o.multi, k = u.allColumns, U = u.disableMultiSort, x = u.disableSortRemove, V = u.disableMultiRemove, J = u.maxMultiSortColCount, F = J === void 0 ? Number.MAX_SAFE_INTEGER : J, an = t.sortBy, gn = k.find(function(on) {
            return on.id === b;
          }), bn = gn.sortDescFirst, nn = an.find(function(on) {
            return on.id === b;
          }), Ln = an.findIndex(function(on) {
            return on.id === b;
          }), Gn = typeof R < "u" && R !== null, tn = [], Z;
          return !U && T ? nn ? Z = "toggle" : Z = "add" : Ln !== an.length - 1 || an.length !== 1 ? Z = "replace" : nn ? Z = "toggle" : Z = "replace", Z === "toggle" && // Must be toggling
          !x && // If disableSortRemove, disable in general
          !Gn && // Must not be setting desc
          (!T || !V) && // If multi, don't allow if disableMultiRemove
          (nn && // Finally, detect if it should indeed be removed
          nn.desc && !bn || !nn.desc && bn) && (Z = "remove"), Z === "replace" ? tn = [{
            id: b,
            desc: Gn ? R : bn
          }] : Z === "add" ? (tn = [].concat(an, [{
            id: b,
            desc: Gn ? R : bn
          }]), tn.splice(0, tn.length - F)) : Z === "toggle" ? tn = an.map(function(on) {
            return on.id === b ? C({}, on, {
              desc: Gn ? R : !nn.desc
            }) : on;
          }) : Z === "remove" && (tn = an.filter(function(on) {
            return on.id !== b;
          })), C({}, t, {
            sortBy: tn
          });
        }
      }
      function po(t) {
        var o = t.data, s = t.rows, u = t.flatRows, g = t.allColumns, v = t.orderByFn, f = v === void 0 ? Et : v, b = t.sortTypes, R = t.manualSortBy, T = t.defaultCanSort, k = t.disableSortBy, U = t.flatHeaders, x = t.state.sortBy, V = t.dispatch, J = t.plugins, F = t.getHooks, an = t.autoResetSortBy, gn = an === void 0 ? !0 : an;
        Xn(J, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var bn = i.useCallback(function(pn) {
          V({
            type: S.setSortBy,
            sortBy: pn
          });
        }, [V]), nn = i.useCallback(function(pn, Fn, Wn) {
          V({
            type: S.toggleSortBy,
            columnId: pn,
            desc: Fn,
            multi: Wn
          });
        }, [V]), Ln = hn(t);
        U.forEach(function(pn) {
          var Fn = pn.accessor, Wn = pn.canSort, Un = pn.disableSortBy, sn = pn.id, Ce = Fn ? ce(Un === !0 ? !1 : void 0, k === !0 ? !1 : void 0, !0) : ce(T, Wn, !1);
          pn.canSort = Ce, pn.canSort && (pn.toggleSortBy = function(Dn, Nn) {
            return nn(pn.id, Dn, Nn);
          }, pn.clearSortBy = function() {
            V({
              type: S.clearSortBy,
              columnId: pn.id
            });
          }), pn.getSortByToggleProps = mn(F().getSortByToggleProps, {
            instance: Ln(),
            column: pn
          });
          var Hn = x.find(function(Dn) {
            return Dn.id === sn;
          });
          pn.isSorted = !!Hn, pn.sortedIndex = x.findIndex(function(Dn) {
            return Dn.id === sn;
          }), pn.isSortedDesc = pn.isSorted ? Hn.desc : void 0;
        });
        var Gn = i.useMemo(function() {
          if (R || !x.length)
            return [s, u];
          var pn = [], Fn = x.filter(function(Un) {
            return g.find(function(sn) {
              return sn.id === Un.id;
            });
          }), Wn = function Un(sn) {
            var Ce = f(
              sn,
              Fn.map(function(Hn) {
                var Dn = g.find(function(fe) {
                  return fe.id === Hn.id;
                });
                if (!Dn)
                  throw new Error("React-Table: Could not find a column with id: " + Hn.id + " while sorting");
                var Nn = Dn.sortType, _n = Ae(Nn) || (b || {})[Nn] || sr[Nn];
                if (!_n)
                  throw new Error("React-Table: Could not find a valid sortType of '" + Nn + "' for column '" + Hn.id + "'.");
                return function(fe, at) {
                  return _n(fe, at, Hn.id, Hn.desc);
                };
              }),
              // Map the directions
              Fn.map(function(Hn) {
                var Dn = g.find(function(Nn) {
                  return Nn.id === Hn.id;
                });
                return Dn && Dn.sortInverted ? Hn.desc : !Hn.desc;
              })
            );
            return Ce.forEach(function(Hn) {
              pn.push(Hn), !(!Hn.subRows || Hn.subRows.length === 0) && (Hn.subRows = Un(Hn.subRows));
            }), Ce;
          };
          return [Wn(s), pn];
        }, [R, x, s, u, g, f, b]), tn = Gn[0], Z = Gn[1], on = hn(gn);
        vn(function() {
          on() && V({
            type: S.resetSortBy
          });
        }, [R ? null : o]), Object.assign(t, {
          preSortedRows: s,
          preSortedFlatRows: u,
          sortedRows: tn,
          sortedFlatRows: Z,
          rows: tn,
          flatRows: Z,
          setSortBy: bn,
          toggleSortBy: nn
        });
      }
      function Et(t, o, s) {
        return [].concat(t).sort(function(u, g) {
          for (var v = 0; v < o.length; v += 1) {
            var f = o[v], b = s[v] === !1 || s[v] === "desc", R = f(u, g);
            if (R !== 0)
              return b ? -R : R;
          }
          return s[0] ? u.index - g.index : g.index - u.index;
        });
      }
      var yr = "usePagination";
      S.resetPage = "resetPage", S.gotoPage = "gotoPage", S.setPageSize = "setPageSize";
      var go = function(o) {
        o.stateReducers.push(Cr), o.useInstance.push(mo);
      };
      go.pluginName = yr;
      function Cr(t, o, s, u) {
        if (o.type === S.init)
          return C({
            pageSize: 10,
            pageIndex: 0
          }, t);
        if (o.type === S.resetPage)
          return C({}, t, {
            pageIndex: u.initialState.pageIndex || 0
          });
        if (o.type === S.gotoPage) {
          var g = u.pageCount, v = u.page, f = kn(o.pageIndex, t.pageIndex), b = !1;
          return f > t.pageIndex ? b = g === -1 ? v.length >= t.pageSize : f < g : f < t.pageIndex && (b = f > -1), b ? C({}, t, {
            pageIndex: f
          }) : t;
        }
        if (o.type === S.setPageSize) {
          var R = o.pageSize, T = t.pageSize * t.pageIndex, k = Math.floor(T / R);
          return C({}, t, {
            pageIndex: k,
            pageSize: R
          });
        }
      }
      function mo(t) {
        var o = t.rows, s = t.autoResetPage, u = s === void 0 ? !0 : s, g = t.manualExpandedKey, v = g === void 0 ? "expanded" : g, f = t.plugins, b = t.pageCount, R = t.paginateExpandedRows, T = R === void 0 ? !0 : R, k = t.expandSubRows, U = k === void 0 ? !0 : k, x = t.state, V = x.pageSize, J = x.pageIndex, F = x.expanded, an = x.globalFilter, gn = x.filters, bn = x.groupBy, nn = x.sortBy, Ln = t.dispatch, Gn = t.data, tn = t.manualPagination;
        Xn(f, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var Z = hn(u);
        vn(function() {
          Z() && Ln({
            type: S.resetPage
          });
        }, [Ln, tn ? null : Gn, an, gn, bn, nn]);
        var on = tn ? b : Math.ceil(o.length / V), pn = i.useMemo(function() {
          return on > 0 ? [].concat(new Array(on)).fill(null).map(function(Nn, _n) {
            return _n;
          }) : [];
        }, [on]), Fn = i.useMemo(function() {
          var Nn;
          if (tn)
            Nn = o;
          else {
            var _n = V * J, fe = _n + V;
            Nn = o.slice(_n, fe);
          }
          return T ? Nn : Te(Nn, {
            manualExpandedKey: v,
            expanded: F,
            expandSubRows: U
          });
        }, [U, F, v, tn, J, V, T, o]), Wn = J > 0, Un = on === -1 ? Fn.length >= V : J < on - 1, sn = i.useCallback(function(Nn) {
          Ln({
            type: S.gotoPage,
            pageIndex: Nn
          });
        }, [Ln]), Ce = i.useCallback(function() {
          return sn(function(Nn) {
            return Nn - 1;
          });
        }, [sn]), Hn = i.useCallback(function() {
          return sn(function(Nn) {
            return Nn + 1;
          });
        }, [sn]), Dn = i.useCallback(function(Nn) {
          Ln({
            type: S.setPageSize,
            pageSize: Nn
          });
        }, [Ln]);
        Object.assign(t, {
          pageOptions: pn,
          pageCount: on,
          page: Fn,
          canPreviousPage: Wn,
          canNextPage: Un,
          gotoPage: sn,
          previousPage: Ce,
          nextPage: Hn,
          setPageSize: Dn
        });
      }
      S.resetPivot = "resetPivot", S.togglePivot = "togglePivot";
      var ho = function(o) {
        o.getPivotToggleProps = [dr], o.stateReducers.push(So), o.useInstanceAfterData.push(fr), o.allColumns.push(pr), o.accessValue.push(gr), o.materializedColumns.push(mr), o.materializedColumnsDeps.push(Tt), o.visibleColumns.push(wo), o.visibleColumnsDeps.push(yt), o.useInstance.push(Pt), o.prepareRow.push(It);
      };
      ho.pluginName = "usePivotColumns";
      var vo = [], dr = function(o, s) {
        var u = s.header;
        return [o, {
          onClick: u.canPivot ? function(g) {
            g.persist(), u.togglePivot();
          } : void 0,
          style: {
            cursor: u.canPivot ? "pointer" : void 0
          },
          title: "Toggle Pivot"
        }];
      };
      function So(t, o, s, u) {
        if (o.type === S.init)
          return C({
            pivotColumns: vo
          }, t);
        if (o.type === S.resetPivot)
          return C({}, t, {
            pivotColumns: u.initialState.pivotColumns || vo
          });
        if (o.type === S.togglePivot) {
          var g = o.columnId, v = o.value, f = typeof v < "u" ? v : !t.pivotColumns.includes(g);
          return f ? C({}, t, {
            pivotColumns: [].concat(t.pivotColumns, [g])
          }) : C({}, t, {
            pivotColumns: t.pivotColumns.filter(function(b) {
              return b !== g;
            })
          });
        }
      }
      function fr(t) {
        t.allColumns.forEach(function(o) {
          o.isPivotSource = t.state.pivotColumns.includes(o.id);
        });
      }
      function pr(t, o) {
        var s = o.instance;
        return t.forEach(function(u) {
          u.isPivotSource = s.state.pivotColumns.includes(u.id), u.uniqueValues = /* @__PURE__ */ new Set();
        }), t;
      }
      function gr(t, o) {
        var s = o.column;
        return s.uniqueValues && typeof t < "u" && s.uniqueValues.add(t), t;
      }
      function mr(t, o) {
        var s = o.instance, u = s.allColumns, g = s.state;
        if (!g.pivotColumns.length || !g.groupBy || !g.groupBy.length)
          return t;
        var v = g.pivotColumns.map(function(T) {
          return u.find(function(k) {
            return k.id === T;
          });
        }).filter(Boolean), f = u.filter(function(T) {
          return !T.isPivotSource && !g.groupBy.includes(T.id) && !g.pivotColumns.includes(T.id);
        }), b = function T(k, U, x) {
          k === void 0 && (k = 0), x === void 0 && (x = []);
          var V = v[k];
          if (!V)
            return f.map(function(F) {
              return C({}, F, {
                canPivot: !1,
                isPivoted: !0,
                parent: U,
                depth: k,
                id: "" + (U ? U.id + "." + F.id : F.id),
                accessor: function(gn, bn, nn) {
                  if (x.every(function(Ln) {
                    return Ln(nn);
                  }))
                    return nn.values[F.id];
                }
              });
            });
          var J = Array.from(V.uniqueValues).sort();
          return J.map(function(F) {
            var an = C({}, V, {
              Header: V.PivotHeader || typeof V.header == "string" ? V.Header + ": " + F : F,
              isPivotGroup: !0,
              parent: U,
              depth: k,
              id: U ? U.id + "." + V.id + "." + F : V.id + "." + F,
              pivotValue: F
            });
            return an.columns = T(k + 1, an, [].concat(x, [function(gn) {
              return gn.values[V.id] === F;
            }])), an;
          });
        }, R = Le(b());
        return [].concat(t, R);
      }
      function Tt(t, o) {
        var s = o.instance.state, u = s.pivotColumns, g = s.groupBy;
        return [].concat(t, [u, g]);
      }
      function wo(t, o) {
        var s = o.instance.state;
        return t = t.filter(function(u) {
          return !u.isPivotSource;
        }), s.pivotColumns.length && s.groupBy && s.groupBy.length && (t = t.filter(function(u) {
          return u.isGrouped || u.isPivoted;
        })), t;
      }
      function yt(t, o) {
        var s = o.instance;
        return [].concat(t, [s.state.pivotColumns, s.state.groupBy]);
      }
      function Pt(t) {
        var o = t.columns, s = t.allColumns, u = t.flatHeaders, g = t.getHooks, v = t.plugins, f = t.dispatch, b = t.autoResetPivot, R = b === void 0 ? !0 : b, T = t.manaulPivot, k = t.disablePivot, U = t.defaultCanPivot;
        Xn(v, ["useGroupBy"], "usePivotColumns");
        var x = hn(t);
        s.forEach(function(F) {
          var an = F.accessor, gn = F.defaultPivot, bn = F.disablePivot;
          F.canPivot = an ? ce(F.canPivot, bn === !0 ? !1 : void 0, k === !0 ? !1 : void 0, !0) : ce(F.canPivot, gn, U, !1), F.canPivot && (F.togglePivot = function() {
            return t.togglePivot(F.id);
          }), F.Aggregated = F.Aggregated || F.Cell;
        });
        var V = function(an, gn) {
          f({
            type: S.togglePivot,
            columnId: an,
            value: gn
          });
        };
        u.forEach(function(F) {
          F.getPivotToggleProps = mn(g().getPivotToggleProps, {
            instance: x(),
            header: F
          });
        });
        var J = hn(R);
        vn(function() {
          J() && f({
            type: S.resetPivot
          });
        }, [f, T ? null : o]), Object.assign(t, {
          togglePivot: V
        });
      }
      function It(t) {
        t.allCells.forEach(function(o) {
          o.isPivoted = o.column.isPivoted;
        });
      }
      var Mo = "useRowSelect";
      S.resetSelectedRows = "resetSelectedRows", S.toggleAllRowsSelected = "toggleAllRowsSelected", S.toggleRowSelected = "toggleRowSelected", S.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var Lt = function(o) {
        o.getToggleRowSelectedProps = [hr], o.getToggleAllRowsSelectedProps = [kt], o.getToggleAllPageRowsSelectedProps = [vr], o.stateReducers.push(Sr), o.useInstance.push(wr), o.prepareRow.push(bo);
      };
      Lt.pluginName = Mo;
      var hr = function(o, s) {
        var u = s.instance, g = s.row, v = u.manualRowSelectedKey, f = v === void 0 ? "isSelected" : v, b = !1;
        return g.original && g.original[f] ? b = !0 : b = g.isSelected, [o, {
          onChange: function(T) {
            g.toggleRowSelected(T.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: b,
          title: "Toggle Row Selected",
          indeterminate: g.isSomeSelected
        }];
      }, kt = function(o, s) {
        var u = s.instance;
        return [o, {
          onChange: function(v) {
            u.toggleAllRowsSelected(v.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: u.isAllRowsSelected,
          title: "Toggle All Rows Selected",
          indeterminate: !!(!u.isAllRowsSelected && Object.keys(u.state.selectedRowIds).length)
        }];
      }, vr = function(o, s) {
        var u = s.instance;
        return [o, {
          onChange: function(v) {
            u.toggleAllPageRowsSelected(v.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: u.isAllPageRowsSelected,
          title: "Toggle All Current Page Rows Selected",
          indeterminate: !!(!u.isAllPageRowsSelected && u.page.some(function(g) {
            var v = g.id;
            return u.state.selectedRowIds[v];
          }))
        }];
      };
      function Sr(t, o, s, u) {
        if (o.type === S.init)
          return C({
            selectedRowIds: {}
          }, t);
        if (o.type === S.resetSelectedRows)
          return C({}, t, {
            selectedRowIds: u.initialState.selectedRowIds || {}
          });
        if (o.type === S.toggleAllRowsSelected) {
          var g = o.value, v = u.isAllRowsSelected, f = u.rowsById, b = u.nonGroupedRowsById, R = b === void 0 ? f : b, T = typeof g < "u" ? g : !v, k = Object.assign({}, t.selectedRowIds);
          return T ? Object.keys(R).forEach(function(Hn) {
            k[Hn] = !0;
          }) : Object.keys(R).forEach(function(Hn) {
            delete k[Hn];
          }), C({}, t, {
            selectedRowIds: k
          });
        }
        if (o.type === S.toggleRowSelected) {
          var U = o.id, x = o.value, V = u.rowsById, J = u.selectSubRows, F = J === void 0 ? !0 : J, an = u.getSubRows, gn = t.selectedRowIds[U], bn = typeof x < "u" ? x : !gn;
          if (gn === bn)
            return t;
          var nn = C({}, t.selectedRowIds), Ln = function Hn(Dn) {
            var Nn = V[Dn];
            if (Nn && (Nn.isGrouped || (bn ? nn[Dn] = !0 : delete nn[Dn]), F && an(Nn)))
              return an(Nn).forEach(function(_n) {
                return Hn(_n.id);
              });
          };
          return Ln(U), C({}, t, {
            selectedRowIds: nn
          });
        }
        if (o.type === S.toggleAllPageRowsSelected) {
          var Gn = o.value, tn = u.page, Z = u.rowsById, on = u.selectSubRows, pn = on === void 0 ? !0 : on, Fn = u.isAllPageRowsSelected, Wn = u.getSubRows, Un = typeof Gn < "u" ? Gn : !Fn, sn = C({}, t.selectedRowIds), Ce = function Hn(Dn) {
            var Nn = Z[Dn];
            if (Nn.isGrouped || (Un ? sn[Dn] = !0 : delete sn[Dn]), pn && Wn(Nn))
              return Wn(Nn).forEach(function(_n) {
                return Hn(_n.id);
              });
          };
          return tn.forEach(function(Hn) {
            return Ce(Hn.id);
          }), C({}, t, {
            selectedRowIds: sn
          });
        }
        return t;
      }
      function wr(t) {
        var o = t.data, s = t.rows, u = t.getHooks, g = t.plugins, v = t.rowsById, f = t.nonGroupedRowsById, b = f === void 0 ? v : f, R = t.autoResetSelectedRows, T = R === void 0 ? !0 : R, k = t.state.selectedRowIds, U = t.selectSubRows, x = U === void 0 ? !0 : U, V = t.dispatch, J = t.page, F = t.getSubRows;
        Xn(g, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var an = i.useMemo(function() {
          var Fn = [];
          return s.forEach(function(Wn) {
            var Un = x ? Ao(Wn, k, F) : !!k[Wn.id];
            Wn.isSelected = !!Un, Wn.isSomeSelected = Un === null, Un && Fn.push(Wn);
          }), Fn;
        }, [s, x, k, F]), gn = !!(Object.keys(b).length && Object.keys(k).length), bn = gn;
        gn && Object.keys(b).some(function(Fn) {
          return !k[Fn];
        }) && (gn = !1), gn || J && J.length && J.some(function(Fn) {
          var Wn = Fn.id;
          return !k[Wn];
        }) && (bn = !1);
        var nn = hn(T);
        vn(function() {
          nn() && V({
            type: S.resetSelectedRows
          });
        }, [V, o]);
        var Ln = i.useCallback(function(Fn) {
          return V({
            type: S.toggleAllRowsSelected,
            value: Fn
          });
        }, [V]), Gn = i.useCallback(function(Fn) {
          return V({
            type: S.toggleAllPageRowsSelected,
            value: Fn
          });
        }, [V]), tn = i.useCallback(function(Fn, Wn) {
          return V({
            type: S.toggleRowSelected,
            id: Fn,
            value: Wn
          });
        }, [V]), Z = hn(t), on = mn(u().getToggleAllRowsSelectedProps, {
          instance: Z()
        }), pn = mn(u().getToggleAllPageRowsSelectedProps, {
          instance: Z()
        });
        Object.assign(t, {
          selectedFlatRows: an,
          isAllRowsSelected: gn,
          isAllPageRowsSelected: bn,
          toggleRowSelected: tn,
          toggleAllRowsSelected: Ln,
          getToggleAllRowsSelectedProps: on,
          getToggleAllPageRowsSelectedProps: pn,
          toggleAllPageRowsSelected: Gn
        });
      }
      function bo(t, o) {
        var s = o.instance;
        t.toggleRowSelected = function(u) {
          return s.toggleRowSelected(t.id, u);
        }, t.getToggleRowSelectedProps = mn(s.getHooks().getToggleRowSelectedProps, {
          instance: s,
          row: t
        });
      }
      function Ao(t, o, s) {
        if (o[t.id])
          return !0;
        var u = s(t);
        if (u && u.length) {
          var g = !0, v = !1;
          return u.forEach(function(f) {
            v && !g || (Ao(f, o, s) ? v = !0 : g = !1);
          }), g ? !0 : v ? null : !1;
        }
        return !1;
      }
      var Do = function(o) {
        return {};
      }, Ro = function(o) {
        return {};
      };
      S.setRowState = "setRowState", S.setCellState = "setCellState", S.resetRowState = "resetRowState";
      var No = function(o) {
        o.stateReducers.push(Ot), o.useInstance.push(e), o.prepareRow.push(l);
      };
      No.pluginName = "useRowState";
      function Ot(t, o, s, u) {
        var g = u.initialRowStateAccessor, v = g === void 0 ? Do : g, f = u.initialCellStateAccessor, b = f === void 0 ? Ro : f, R = u.rowsById;
        if (o.type === S.init)
          return C({
            rowState: {}
          }, t);
        if (o.type === S.resetRowState)
          return C({}, t, {
            rowState: u.initialState.rowState || {}
          });
        if (o.type === S.setRowState) {
          var T, k = o.rowId, U = o.value, x = typeof t.rowState[k] < "u" ? t.rowState[k] : v(R[k]);
          return C({}, t, {
            rowState: C({}, t.rowState, (T = {}, T[k] = kn(U, x), T))
          });
        }
        if (o.type === S.setCellState) {
          var V, J, F, an, gn, bn = o.rowId, nn = o.columnId, Ln = o.value, Gn = typeof t.rowState[bn] < "u" ? t.rowState[bn] : v(R[bn]), tn = typeof (Gn == null || (V = Gn.cellState) == null ? void 0 : V[nn]) < "u" ? Gn.cellState[nn] : b((J = R[bn]) == null || (F = J.cells) == null ? void 0 : F.find(function(Z) {
            return Z.column.id === nn;
          }));
          return C({}, t, {
            rowState: C({}, t.rowState, (gn = {}, gn[bn] = C({}, Gn, {
              cellState: C({}, Gn.cellState || {}, (an = {}, an[nn] = kn(Ln, tn), an))
            }), gn))
          });
        }
      }
      function e(t) {
        var o = t.autoResetRowState, s = o === void 0 ? !0 : o, u = t.data, g = t.dispatch, v = i.useCallback(function(R, T) {
          return g({
            type: S.setRowState,
            rowId: R,
            value: T
          });
        }, [g]), f = i.useCallback(function(R, T, k) {
          return g({
            type: S.setCellState,
            rowId: R,
            columnId: T,
            value: k
          });
        }, [g]), b = hn(s);
        vn(function() {
          b() && g({
            type: S.resetRowState
          });
        }, [u]), Object.assign(t, {
          setRowState: v,
          setCellState: f
        });
      }
      function l(t, o) {
        var s = o.instance, u = s.initialRowStateAccessor, g = u === void 0 ? Do : u, v = s.initialCellStateAccessor, f = v === void 0 ? Ro : v, b = s.state.rowState;
        t && (t.state = typeof b[t.id] < "u" ? b[t.id] : g(t), t.setState = function(R) {
          return s.setRowState(t.id, R);
        }, t.cells.forEach(function(R) {
          t.state.cellState || (t.state.cellState = {}), R.state = typeof t.state.cellState[R.column.id] < "u" ? t.state.cellState[R.column.id] : f(R), R.setState = function(T) {
            return s.setCellState(t.id, R.column.id, T);
          };
        }));
      }
      S.resetColumnOrder = "resetColumnOrder", S.setColumnOrder = "setColumnOrder";
      var y = function(o) {
        o.stateReducers.push(d), o.visibleColumnsDeps.push(function(s, u) {
          var g = u.instance;
          return [].concat(s, [g.state.columnOrder]);
        }), o.visibleColumns.push(w), o.useInstance.push(h);
      };
      y.pluginName = "useColumnOrder";
      function d(t, o, s, u) {
        if (o.type === S.init)
          return C({
            columnOrder: []
          }, t);
        if (o.type === S.resetColumnOrder)
          return C({}, t, {
            columnOrder: u.initialState.columnOrder || []
          });
        if (o.type === S.setColumnOrder)
          return C({}, t, {
            columnOrder: kn(o.columnOrder, t.columnOrder)
          });
      }
      function w(t, o) {
        var s = o.instance.state.columnOrder;
        if (!s || !s.length)
          return t;
        for (var u = [].concat(s), g = [].concat(t), v = [], f = function() {
          var R = u.shift(), T = g.findIndex(function(k) {
            return k.id === R;
          });
          T > -1 && v.push(g.splice(T, 1)[0]);
        }; g.length && u.length; )
          f();
        return [].concat(v, g);
      }
      function h(t) {
        var o = t.dispatch;
        t.setColumnOrder = i.useCallback(function(s) {
          return o({
            type: S.setColumnOrder,
            columnOrder: s
          });
        }, [o]);
      }
      j.canResize = !0, S.columnStartResizing = "columnStartResizing", S.columnResizing = "columnResizing", S.columnDoneResizing = "columnDoneResizing", S.resetResize = "resetResize";
      var M = function(o) {
        o.getResizerProps = [E], o.getHeaderProps.push({
          style: {
            position: "relative"
          }
        }), o.stateReducers.push(P), o.useInstance.push(z), o.useInstanceBeforeDimensions.push(L);
      }, E = function(o, s) {
        var u = s.instance, g = s.header, v = u.dispatch, f = function(R, T) {
          var k = !1;
          if (R.type === "touchstart") {
            if (R.touches && R.touches.length > 1)
              return;
            k = !0;
          }
          var U = G(T), x = U.map(function(tn) {
            return [tn.id, tn.totalWidth];
          }), V = k ? Math.round(R.touches[0].clientX) : R.clientX, J, F, an = function() {
            window.cancelAnimationFrame(J), J = null, v({
              type: S.columnDoneResizing
            });
          }, gn = function() {
            window.cancelAnimationFrame(J), J = null, v({
              type: S.columnResizing,
              clientX: F
            });
          }, bn = function(Z) {
            F = Z, J || (J = window.requestAnimationFrame(gn));
          }, nn = {
            mouse: {
              moveEvent: "mousemove",
              moveHandler: function(Z) {
                return bn(Z.clientX);
              },
              upEvent: "mouseup",
              upHandler: function(Z) {
                document.removeEventListener("mousemove", nn.mouse.moveHandler), document.removeEventListener("mouseup", nn.mouse.upHandler), an();
              }
            },
            touch: {
              moveEvent: "touchmove",
              moveHandler: function(Z) {
                return Z.cancelable && (Z.preventDefault(), Z.stopPropagation()), bn(Z.touches[0].clientX), !1;
              },
              upEvent: "touchend",
              upHandler: function(Z) {
                document.removeEventListener(nn.touch.moveEvent, nn.touch.moveHandler), document.removeEventListener(nn.touch.upEvent, nn.touch.moveHandler), an();
              }
            }
          }, Ln = k ? nn.touch : nn.mouse, Gn = yn() ? {
            passive: !1
          } : !1;
          document.addEventListener(Ln.moveEvent, Ln.moveHandler, Gn), document.addEventListener(Ln.upEvent, Ln.upHandler, Gn), v({
            type: S.columnStartResizing,
            columnId: T.id,
            columnWidth: T.totalWidth,
            headerIdWidths: x,
            clientX: V
          });
        };
        return [o, {
          onMouseDown: function(R) {
            return R.persist() || f(R, g);
          },
          onTouchStart: function(R) {
            return R.persist() || f(R, g);
          },
          style: {
            cursor: "col-resize"
          },
          draggable: !1,
          role: "separator"
        }];
      };
      M.pluginName = "useResizeColumns";
      function P(t, o) {
        if (o.type === S.init)
          return C({
            columnResizing: {
              columnWidths: {}
            }
          }, t);
        if (o.type === S.resetResize)
          return C({}, t, {
            columnResizing: {
              columnWidths: {}
            }
          });
        if (o.type === S.columnStartResizing) {
          var s = o.clientX, u = o.columnId, g = o.columnWidth, v = o.headerIdWidths;
          return C({}, t, {
            columnResizing: C({}, t.columnResizing, {
              startX: s,
              headerIdWidths: v,
              columnWidth: g,
              isResizingColumn: u
            })
          });
        }
        if (o.type === S.columnResizing) {
          var f = o.clientX, b = t.columnResizing, R = b.startX, T = b.columnWidth, k = b.headerIdWidths, U = k === void 0 ? [] : k, x = f - R, V = x / T, J = {};
          return U.forEach(function(F) {
            var an = F[0], gn = F[1];
            J[an] = Math.max(gn + gn * V, 0);
          }), C({}, t, {
            columnResizing: C({}, t.columnResizing, {
              columnWidths: C({}, t.columnResizing.columnWidths, {}, J)
            })
          });
        }
        if (o.type === S.columnDoneResizing)
          return C({}, t, {
            columnResizing: C({}, t.columnResizing, {
              startX: null,
              isResizingColumn: null
            })
          });
      }
      var L = function(o) {
        var s = o.flatHeaders, u = o.disableResizing, g = o.getHooks, v = o.state.columnResizing, f = hn(o);
        s.forEach(function(b) {
          var R = ce(b.disableResizing === !0 ? !1 : void 0, u === !0 ? !1 : void 0, !0);
          b.canResize = R, b.width = v.columnWidths[b.id] || b.originalWidth || b.width, b.isResizing = v.isResizingColumn === b.id, R && (b.getResizerProps = mn(g().getResizerProps, {
            instance: f(),
            header: b
          }));
        });
      };
      function z(t) {
        var o = t.plugins, s = t.dispatch, u = t.autoResetResize, g = u === void 0 ? !0 : u, v = t.columns;
        Xn(o, ["useAbsoluteLayout"], "useResizeColumns");
        var f = hn(g);
        vn(function() {
          f() && s({
            type: S.resetResize
          });
        }, [v]);
        var b = i.useCallback(function() {
          return s({
            type: S.resetResize
          });
        }, [s]);
        Object.assign(t, {
          resetResizing: b
        });
      }
      function G(t) {
        var o = [], s = function u(g) {
          g.columns && g.columns.length && g.columns.map(u), o.push(g);
        };
        return s(t), o;
      }
      var q = {
        position: "absolute",
        top: 0
      }, O = function(o) {
        o.getTableBodyProps.push(W), o.getRowProps.push(W), o.getHeaderGroupProps.push(W), o.getFooterGroupProps.push(W), o.getHeaderProps.push(function(s, u) {
          var g = u.column;
          return [s, {
            style: C({}, q, {
              left: g.totalLeft + "px",
              width: g.totalWidth + "px"
            })
          }];
        }), o.getCellProps.push(function(s, u) {
          var g = u.cell;
          return [s, {
            style: C({}, q, {
              left: g.column.totalLeft + "px",
              width: g.column.totalWidth + "px"
            })
          }];
        }), o.getFooterProps.push(function(s, u) {
          var g = u.column;
          return [s, {
            style: C({}, q, {
              left: g.totalLeft + "px",
              width: g.totalWidth + "px"
            })
          }];
        });
      };
      O.pluginName = "useAbsoluteLayout";
      var W = function(o, s) {
        var u = s.instance;
        return [o, {
          style: {
            position: "relative",
            width: u.totalColumnsWidth + "px"
          }
        }];
      }, $ = {
        display: "inline-block",
        boxSizing: "border-box"
      }, en = function(o, s) {
        var u = s.instance;
        return [o, {
          style: {
            display: "flex",
            width: u.totalColumnsWidth + "px"
          }
        }];
      }, dn = function(o) {
        o.getRowProps.push(en), o.getHeaderGroupProps.push(en), o.getFooterGroupProps.push(en), o.getHeaderProps.push(function(s, u) {
          var g = u.column;
          return [s, {
            style: C({}, $, {
              width: g.totalWidth + "px"
            })
          }];
        }), o.getCellProps.push(function(s, u) {
          var g = u.cell;
          return [s, {
            style: C({}, $, {
              width: g.column.totalWidth + "px"
            })
          }];
        }), o.getFooterProps.push(function(s, u) {
          var g = u.column;
          return [s, {
            style: C({}, $, {
              width: g.totalWidth + "px"
            })
          }];
        });
      };
      dn.pluginName = "useBlockLayout";
      function Bn(t) {
        t.getTableProps.push(fn), t.getRowProps.push(X), t.getHeaderGroupProps.push(X), t.getFooterGroupProps.push(X), t.getHeaderProps.push(Pn), t.getCellProps.push(ln), t.getFooterProps.push(Rn);
      }
      Bn.pluginName = "useFlexLayout";
      var fn = function(o, s) {
        var u = s.instance;
        return [o, {
          style: {
            minWidth: u.totalColumnsMinWidth + "px"
          }
        }];
      }, X = function(o, s) {
        var u = s.instance;
        return [o, {
          style: {
            display: "flex",
            flex: "1 0 auto",
            minWidth: u.totalColumnsMinWidth + "px"
          }
        }];
      }, Pn = function(o, s) {
        var u = s.column;
        return [o, {
          style: {
            boxSizing: "border-box",
            flex: u.totalFlexWidth ? u.totalFlexWidth + " 0 auto" : void 0,
            minWidth: u.totalMinWidth + "px",
            width: u.totalWidth + "px"
          }
        }];
      }, ln = function(o, s) {
        var u = s.cell;
        return [o, {
          style: {
            boxSizing: "border-box",
            flex: u.column.totalFlexWidth + " 0 auto",
            minWidth: u.column.totalMinWidth + "px",
            width: u.column.totalWidth + "px"
          }
        }];
      }, Rn = function(o, s) {
        var u = s.column;
        return [o, {
          style: {
            boxSizing: "border-box",
            flex: u.totalFlexWidth ? u.totalFlexWidth + " 0 auto" : void 0,
            minWidth: u.totalMinWidth + "px",
            width: u.totalWidth + "px"
          }
        }];
      };
      S.columnStartResizing = "columnStartResizing", S.columnResizing = "columnResizing", S.columnDoneResizing = "columnDoneResizing", S.resetResize = "resetResize";
      function Vn(t) {
        t.stateReducers.push(En), t.getTableProps.push(wn), t.getHeaderProps.push(An), t.getRowProps.push(zn);
      }
      Vn.pluginName = "useGridLayout";
      var wn = function(o, s) {
        var u = s.instance, g = u.visibleColumns.map(function(v) {
          var f;
          return u.state.gridLayout.columnWidths[v.id] ? u.state.gridLayout.columnWidths[v.id] + "px" : (f = u.state.columnResizing) != null && f.isResizingColumn ? u.state.gridLayout.startWidths[v.id] + "px" : typeof v.width == "number" ? v.width + "px" : v.width;
        });
        return [o, {
          style: {
            display: "grid",
            gridTemplateColumns: g.join(" ")
          }
        }];
      }, An = function(o, s) {
        var u = s.column;
        return [o, {
          id: "header-cell-" + u.id,
          style: {
            position: "sticky",
            //enables a scroll wrapper to be placed around the table and have sticky headers
            gridColumn: "span " + u.totalVisibleHeaderCount
          }
        }];
      }, zn = function(o, s) {
        var u = s.row;
        return u.isExpanded ? [o, {
          style: {
            gridColumn: "1 / " + (u.cells.length + 1)
          }
        }] : [o, {}];
      };
      function En(t, o, s, u) {
        if (o.type === S.init)
          return C({
            gridLayout: {
              columnWidths: {}
            }
          }, t);
        if (o.type === S.resetResize)
          return C({}, t, {
            gridLayout: {
              columnWidths: {}
            }
          });
        if (o.type === S.columnStartResizing) {
          var g = o.columnId, v = o.headerIdWidths, f = Kn(g);
          if (f !== void 0) {
            var b = u.visibleColumns.reduce(function(tn, Z) {
              var on;
              return C({}, tn, (on = {}, on[Z.id] = Kn(Z.id), on));
            }, {}), R = u.visibleColumns.reduce(function(tn, Z) {
              var on;
              return C({}, tn, (on = {}, on[Z.id] = Z.minWidth, on));
            }, {}), T = u.visibleColumns.reduce(function(tn, Z) {
              var on;
              return C({}, tn, (on = {}, on[Z.id] = Z.maxWidth, on));
            }, {}), k = v.map(function(tn) {
              var Z = tn[0];
              return [Z, Kn(Z)];
            });
            return C({}, t, {
              gridLayout: C({}, t.gridLayout, {
                startWidths: b,
                minWidths: R,
                maxWidths: T,
                headerIdGridWidths: k,
                columnWidth: f
              })
            });
          } else
            return t;
        }
        if (o.type === S.columnResizing) {
          var U = o.clientX, x = t.columnResizing.startX, V = t.gridLayout, J = V.columnWidth, F = V.minWidths, an = V.maxWidths, gn = V.headerIdGridWidths, bn = gn === void 0 ? [] : gn, nn = U - x, Ln = nn / J, Gn = {};
          return bn.forEach(function(tn) {
            var Z = tn[0], on = tn[1];
            Gn[Z] = Math.min(Math.max(F[Z], on + on * Ln), an[Z]);
          }), C({}, t, {
            gridLayout: C({}, t.gridLayout, {
              columnWidths: C({}, t.gridLayout.columnWidths, {}, Gn)
            })
          });
        }
        if (o.type === S.columnDoneResizing)
          return C({}, t, {
            gridLayout: C({}, t.gridLayout, {
              startWidths: {},
              minWidths: {},
              maxWidths: {}
            })
          });
      }
      function Kn(t) {
        var o, s = (o = document.getElementById("header-cell-" + t)) == null ? void 0 : o.offsetWidth;
        if (s !== void 0)
          return s;
      }
      a._UNSTABLE_usePivotColumns = ho, a.actions = S, a.defaultColumn = j, a.defaultGroupByFn = lo, a.defaultOrderByFn = Et, a.defaultRenderer = B, a.emptyRenderer = I, a.ensurePluginOrder = Xn, a.flexRender = qn, a.functionalUpdate = kn, a.loopHooks = Cn, a.makePropGetter = mn, a.makeRenderer = Jn, a.reduceHooks = In, a.safeUseLayoutEffect = Tn, a.useAbsoluteLayout = O, a.useAsyncDebounce = le, a.useBlockLayout = dn, a.useColumnOrder = y, a.useExpanded = St, a.useFilters = no, a.useFlexLayout = Bn, a.useGetLatest = hn, a.useGlobalFilter = eo, a.useGridLayout = Vn, a.useGroupBy = Rt, a.useMountedLayoutEffect = vn, a.usePagination = go, a.useResizeColumns = M, a.useRowSelect = Lt, a.useRowState = No, a.useSortBy = Co, a.useTable = st, Object.defineProperty(a, "__esModule", { value: !0 });
    });
  }(Lo, Lo.exports)), Lo.exports;
}
process.env.NODE_ENV === "production" ? $r.exports = vl() : $r.exports = Sl();
var gt = $r.exports;
function wl(n, r, a) {
  var i = this, p = D.useRef(null), A = D.useRef(0), C = D.useRef(null), N = D.useRef([]), _ = D.useRef(), m = D.useRef(), Sn = D.useRef(n), S = D.useRef(!0);
  Sn.current = n;
  var B = !r && r !== 0 && typeof window < "u";
  if (typeof n != "function")
    throw new TypeError("Expected a function");
  r = +r || 0, a = a || {};
  var I = !!a.leading, j = "trailing" in a ? !!a.trailing : !0, Q = "maxWait" in a, Y = Q ? Math.max(+a.maxWait || 0, r) : null, mn = D.useCallback(function(qn) {
    var oe = N.current, se = _.current;
    return N.current = _.current = null, A.current = qn, m.current = Sn.current.apply(se, oe);
  }, []), In = D.useCallback(function(qn, oe) {
    B && cancelAnimationFrame(C.current), C.current = B ? requestAnimationFrame(qn) : setTimeout(qn, oe);
  }, [B]), Cn = D.useCallback(function(qn) {
    if (!S.current)
      return !1;
    var oe = qn - p.current, se = qn - A.current;
    return !p.current || oe >= r || oe < 0 || Q && se >= Y;
  }, [Y, Q, r]), Xn = D.useCallback(function(qn) {
    return C.current = null, j && N.current ? mn(qn) : (N.current = _.current = null, m.current);
  }, [mn, j]), kn = D.useCallback(function() {
    var qn = Date.now();
    if (Cn(qn))
      return Xn(qn);
    if (S.current) {
      var oe = qn - p.current, se = qn - A.current, ne = r - oe, ee = Q ? Math.min(ne, Y - se) : ne;
      In(kn, ee);
    }
  }, [Y, Q, Cn, In, Xn, r]), hn = D.useCallback(function() {
    C.current && (B ? cancelAnimationFrame(C.current) : clearTimeout(C.current)), A.current = 0, N.current = p.current = _.current = C.current = null;
  }, [B]), Tn = D.useCallback(function() {
    return C.current ? Xn(Date.now()) : m.current;
  }, [Xn]);
  D.useEffect(function() {
    return S.current = !0, function() {
      S.current = !1;
    };
  }, []);
  var vn = D.useCallback(function() {
    for (var qn = [], oe = 0; oe < arguments.length; oe++)
      qn[oe] = arguments[oe];
    var se = Date.now(), ne = Cn(se);
    if (N.current = qn, _.current = i, p.current = se, ne) {
      if (!C.current && S.current)
        return A.current = p.current, In(kn, r), I ? mn(p.current) : m.current;
      if (Q)
        return In(kn, r), mn(p.current);
    }
    return C.current || In(kn, r), m.current;
  }, [mn, I, Q, Cn, In, kn, r]), le = D.useCallback(function() {
    return !!C.current;
  }, []), Jn = D.useMemo(function() {
    return {
      callback: vn,
      cancel: hn,
      flush: Tn,
      pending: le
    };
  }, [vn, hn, Tn, le]);
  return Jn;
}
function Ml(n, r) {
  return n === r;
}
function Qa(n) {
  return typeof n == "function" ? function() {
    return n;
  } : n;
}
function bl(n) {
  var r = D.useState(Qa(n)), a = r[0], i = r[1], p = D.useCallback(function(A) {
    return i(Qa(A));
  }, []);
  return [a, p];
}
function Al(n, r, a) {
  var i = a && a.equalityFn || Ml, p = bl(n), A = p[0], C = p[1], N = wl(D.useCallback(function(m) {
    return C(m);
  }, [C]), r, a), _ = D.useRef(n);
  return D.useEffect(function() {
    i(_.current, n) || (N.callback(n), _.current = n);
  }, [n, N, i]), [A, { cancel: N.cancel, pending: N.pending, flush: N.flush }];
}
function Dl(n) {
  if (Array.isArray(n) || (n.general.geoType === "us-county" || n.general.geoType === "single-state" || n.general.geoType === "us" && (n != null && n.data)) && (n == null || n.data.forEach((r) => {
    r[n.columns.geo.name] && (!isNaN(parseInt(r[n.columns.geo.name])) && r[n.columns.geo.name].length === 4 && (r[n.columns.geo.name] = 0 + r[n.columns.geo.name]), r[n.columns.geo.name] = r[n.columns.geo.name].toString());
  })), Array.isArray(n) && n.length > 0) {
    let r = Object.keys(n[0]), a = ["fips", "FIPS", "fips codes", "FIPS CODES", "Fips Codes", "fips Codes", "Fips codes", "FIPS Codes"];
    const i = r.filter((p) => a.includes(p));
    if (!i.length)
      return;
    n == null || n.forEach((p) => {
      p[i] && (!isNaN(parseInt(p[i])) && p[i].length === 4 && (p[i] = 0 + p[i]), p[i] = p[i].toString());
    });
  }
  return n;
}
const Zr = 10, it = {
  emptyCols: "It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.",
  emptyData: "Your data file is empty.",
  dataType: "Your datatype is not supported.",
  fileType: "The file type that you are trying to upload is not supported.",
  formatting: "Please check the formatting of your data file.",
  failedFetch: "Error fetching or parsing data file.",
  urlInvalid: "Please make sure to use a valid URL.",
  cannotReach: "Cannot reach URL, please make sure it's correct.",
  fileTooLarge: `File is too large. Maximum file size is ${Zr}MB.`
}, Rl = D.memo(({ globalFilter: n, setGlobalFilter: r, disabled: a = !1 }) => {
  const [i, p] = D.useState(n), [A] = Al(i, 200);
  D.useEffect(() => {
    typeof A == "string" && A !== n && r(A ?? "");
  }, [A]);
  const C = (N) => {
    p(N.target.value);
  };
  return /* @__PURE__ */ c.createElement("input", { className: "filter", value: i, onChange: C, type: "search", placeholder: "Filter...", disabled: a });
}), nu = D.memo(({ globalFilter: n, data: r, setGlobalFilter: a }) => /* @__PURE__ */ c.createElement("header", { className: "data-table-header" }, /* @__PURE__ */ c.createElement("h2", null, "Data Preview"), /* @__PURE__ */ c.createElement(Rl, { globalFilter: n || "", setGlobalFilter: a, disabled: r === null }))), Nl = D.memo(({ previousPage: n, nextPage: r, canPreviousPage: a, canNextPage: i, pageNumber: p, totalPages: A }) => /* @__PURE__ */ c.createElement("footer", { className: "data-table-pagination" }, /* @__PURE__ */ c.createElement("ul", null, /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement("button", { onClick: () => n(), className: "btn btn-prev", disabled: !a, title: "Previous Page" })), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement("button", { onClick: () => r(), className: "btn btn-next", disabled: !i, title: "Next Page" }))), /* @__PURE__ */ c.createElement("span", null, "Page ", p, " of ", A))), El = ({ data: n }) => {
  const [r, a] = D.useState(n ?? []), i = D.useContext(Gt), p = D.useMemo(() => {
    const Tn = r.columns ?? [];
    return Tn.length > 0 && Tn.includes("") && i({ type: "EDITOR_SET_ERRORS", payload: [it.emptyCols] }), Tn.map((vn, le) => ({
      id: `column-${vn}`,
      accessor: (qn) => qn[vn],
      Header: vn,
      width: 250
    }));
  }, [r]), A = D.useCallback((Tn) => {
    let vn = [];
    Tn.forEach((Jn) => {
      Object.keys(Jn).forEach((qn) => {
        vn.includes(qn) === !1 && vn.push(qn);
      });
    });
    const le = [...Tn];
    if (Array.isArray(le))
      return le.columns = vn, le;
  }, []);
  D.useEffect(() => {
    if (!n)
      return;
    let Tn = [...n];
    Tn = A(Tn), Dl(Tn), a(Tn);
  }, [n, A]);
  const {
    getTableProps: C,
    getTableBodyProps: N,
    headerGroups: _,
    state: { pageIndex: m, globalFilter: Sn },
    prepareRow: S,
    setGlobalFilter: B,
    page: I,
    canPreviousPage: j,
    canNextPage: Q,
    pageOptions: Y,
    nextPage: mn,
    previousPage: In
  } = gt.useTable({ columns: p, data: r, initialState: { pageSize: 25 } }, gt.useBlockLayout, gt.useGlobalFilter, gt.useSortBy, gt.useResizeColumns, gt.usePagination), Cn = () => /* @__PURE__ */ c.createElement("section", { className: "no-data-message" }, /* @__PURE__ */ c.createElement("section", null, /* @__PURE__ */ c.createElement("h3", null, "No Data"), /* @__PURE__ */ c.createElement("p", null, "Import data to preview"))), Xn = () => /* @__PURE__ */ c.createElement("section", { className: "no-data" }, /* @__PURE__ */ c.createElement(Cn, null), /* @__PURE__ */ c.createElement("div", { className: "table-container" }, /* @__PURE__ */ c.createElement("table", { className: "editor data-table", role: "table" }, /* @__PURE__ */ c.createElement("thead", null, /* @__PURE__ */ c.createElement("tr", { role: "row" }, /* @__PURE__ */ c.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ c.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ c.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }))), /* @__PURE__ */ c.createElement("tbody", null, /* @__PURE__ */ c.createElement("tr", { role: "row" }, /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" })), /* @__PURE__ */ c.createElement("tr", { role: "row" }, /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" })), /* @__PURE__ */ c.createElement("tr", { role: "row" }, /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" })), /* @__PURE__ */ c.createElement("tr", { role: "row" }, /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" })), /* @__PURE__ */ c.createElement("tr", { role: "row" }, /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" })), /* @__PURE__ */ c.createElement("tr", { role: "row" }, /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" })), /* @__PURE__ */ c.createElement("tr", { role: "row" }, /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" })), /* @__PURE__ */ c.createElement("tr", { role: "row" }, /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" })), /* @__PURE__ */ c.createElement("tr", { role: "row" }, /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" })), /* @__PURE__ */ c.createElement("tr", { role: "row" }, /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" }), /* @__PURE__ */ c.createElement("td", { role: "cell" }))))));
  if (!n)
    return [/* @__PURE__ */ c.createElement(nu, { key: "header" }), /* @__PURE__ */ c.createElement(Xn, { key: "table" })];
  const kn = { previousPage: In, nextPage: mn, canPreviousPage: j, canNextPage: Q, pageNumber: m + 1, totalPages: Y.length }, hn = () => /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("section", { className: "data-table-container" }, /* @__PURE__ */ c.createElement("div", { className: "table-container" }, /* @__PURE__ */ c.createElement("table", { className: "data-table", ...C(), "aria-hidden": "true" }, /* @__PURE__ */ c.createElement("thead", null, _.map((Tn) => /* @__PURE__ */ c.createElement("tr", { ...Tn.getHeaderGroupProps() }, Tn.headers.map((vn) => /* @__PURE__ */ c.createElement("th", { scope: "col", ...vn.getHeaderProps(vn.getSortByToggleProps()), className: vn.isSorted ? vn.isSortedDesc ? "sort sort-desc" : "sort sort-asc" : "", title: vn.Header }, vn.render("Header"), /* @__PURE__ */ c.createElement("div", { ...vn.getResizerProps(), className: "resizer" })))))), /* @__PURE__ */ c.createElement("tbody", { ...N() }, I.map((Tn) => (S(Tn), /* @__PURE__ */ c.createElement("tr", { ...Tn.getRowProps() }, Tn.cells.map((vn) => /* @__PURE__ */ c.createElement("td", { ...vn.getCellProps(), title: vn.value }, vn.render("Cell")))))))))), /* @__PURE__ */ c.createElement(Nl, { ...kn }));
  return [/* @__PURE__ */ c.createElement(nu, { key: "header", data: n, setGlobalFilter: B, globalFilter: Sn }), /* @__PURE__ */ c.createElement(hn, { key: "table" })];
}, Tl = (n) => /* @__PURE__ */ D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...n }, /* @__PURE__ */ D.createElement("path", { d: "M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z" })), zo = D.createContext();
zo.displayName = "SampleDataContext";
const Pl = `STATE,Rate,Location,URL
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
`, Il = `Race,Age-adjusted rate
Hispanic or Latino,644.2
Non-Hispanic American Indian,636.1
Non-Hispanic Black,563.7
Non-Hispanic Asian or Pacific Islander,202.5
Non-Hispanic White,183.6
`, Ll = `FIPS Codes,County,Public Health Jurisdiction,Percent Vaccinated,Vaccination Coverage Group
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
`, kl = `City,Longitude,Latitude,Value
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
`, Ol = `x,y1,y2,y3,y4
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
`, Bl = `Group_Category,Value
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
`, Fl = `[
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
`, xl = `[
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
]`, Wl = `date,quarter,upper_90,lower_90,random_col
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
`, Hl = `Author(s) and Year,Confidence,Timing,N,Estimate,Lower,Upper,Result
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
`, Gl = `[
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
]`, ql = `[
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
]`, aa = {
  charts: [
    {
      text: "Chart Sample Data",
      fileName: "valid-data-chart.csv",
      data: Il
    },
    {
      text: "Box Plot Sample Data",
      fileName: "valid-boxplot.csv",
      data: Bl
    },
    {
      text: "Scatter Plot Sample Data",
      fileName: "valid-scatterplot.csv",
      data: Ol
    },
    {
      text: "Area Chart Sample Data",
      fileName: "valid-area-chart.json",
      data: Fl
    },
    {
      text: "Forecast Chart Data",
      fileName: "valid-forecast-data.csv",
      data: Wl
    },
    {
      text: "Forest Plot Data",
      fileName: "valid-forest-plot-data.csv",
      data: Hl
    }
  ],
  maps: [
    {
      text: "United States: State Sample Data",
      fileName: "valid-data-map.csv",
      data: Pl
    },
    {
      text: "United States: County Sample Data",
      fileName: "valid-county-data.csv",
      data: Ll
    },
    {
      text: "United States: Geo Point Sample Data",
      fileName: "supported-cities.csv",
      data: kl
    },
    {
      text: "United States: Region",
      fileName: "valid-region-data.json",
      data: ql
    },
    {
      text: "World: Geocode Sample Data",
      fileName: "valid-world-geocode.json",
      data: xl
    },
    {
      text: "World: Default Data",
      fileName: "valid-world-data.json",
      data: Gl
    }
  ]
}, Iu = ({ text: n, fileName: r, data: a }) => {
  const { editingDataset: i, loadData: p } = D.useContext(zo), A = (N) => p(new Blob([a], { type: "text/csv" }), r, i), C = (N) => N.keyCode === 13 && p(new Blob([a], { type: "text/csv" }), r, i);
  return /* @__PURE__ */ c.createElement(
    "button",
    {
      className: "link link-upload",
      onClick: A,
      onKeyDown: C
    },
    n
  );
}, Vl = () => aa.maps.map((n) => /* @__PURE__ */ c.createElement(Iu, { key: n.fileName, text: n.text, fileName: n.fileName, data: n.data })), Kl = () => aa.charts.map((n) => /* @__PURE__ */ c.createElement(Iu, { key: n.fileName, text: n.text, fileName: n.fileName, data: n.data })), zl = () => {
  const { config: n } = D.useContext(zo);
  return /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("h3", { className: "heading-3" }, "Load Sample Data:"), /* @__PURE__ */ c.createElement("ul", { className: "sample-data-list" }, n.type !== "map" && /* @__PURE__ */ c.createElement(Kl, null), n.type !== "chart" && /* @__PURE__ */ c.createElement(Vl, null)));
}, ua = () => null;
ua.data = aa;
ua.Buttons = zl;
const eu = (n) => /* @__PURE__ */ D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", ...n }, /* @__PURE__ */ D.createElement("path", { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" }));
function Xl() {
  const { config: n, errors: r, tempConfig: a, sharepath: i } = D.useContext(Ht), p = (H) => {
    mn({ type: "EDITOR_SET_CONFIG", payload: H });
  }, A = (H) => {
    mn({ type: "EDITOR_SET_ERRORS", payload: H });
  }, C = new _u(), [N, _] = D.useState(n.dataFileSourceType === "url" ? n.dataFileName : n.dataUrl || ""), [m, Sn] = D.useState(!!n.dataUrl), [S, B] = D.useState(n.type === "dashboard" || !n.data), [I, j] = D.useState(void 0), [Q, Y] = D.useState(), mn = D.useContext(Gt), In = {
    ".csv": "text/csv",
    ".json": "application/json"
  }, Cn = (H) => H === void 0 ? "" : H > Math.pow(1024, 3) ? Math.round(H / Math.pow(1024, 3) * 100) / 100 + " GB" : H > Math.pow(1024, 2) ? Math.round(H / Math.pow(1024, 2) * 100) / 100 + " MB" : H > 1024 ? Math.round(H / 1024 * 100) / 100 + " KB" : H + " B", Xn = (H, K, un) => (K.map(function(yn, xn, Yn) {
    if (!Yn.find((ue) => ue.dataKey === yn.dataKey))
      return !1;
  }), !(H.columns.indexOf(un) < 0)), kn = async () => {
    let H;
    try {
      H = new URL(N, window.location.origin);
    } catch {
      throw it.urlInvalid;
    }
    let K = null;
    const un = Object.keys(In).find((yn) => H.pathname.endsWith(yn));
    try {
      await gl.get(H.toString(), {
        responseType: "blob"
      }).then((yn) => {
        K = yn.data, un === ".csv" && K.type === "text/plain" ? K = K.slice(0, K.size, "text/csv") : un === ".json" && K.type === "text/plain" && (K = K.slice(0, K.size, "application/json"));
      });
    } catch (yn) {
      console.error(yn);
      const xn = yn.toString();
      throw Object.values(it).includes(yn) ? xn : it.failedFetch;
    }
    return K;
  }, hn = ([H]) => Tn(H, I, I), Tn = async (H = null, K, un) => {
    let yn = H, xn = (yn == null ? void 0 : yn.path) ?? K ?? null, Yn = "file";
    if (yn === null) {
      Yn = "url";
      try {
        yn = await kn(), xn = N;
      } catch ($n) {
        A([$n]);
        return;
      }
    }
    let ue = yn.size;
    if (ue > Zr * 1048576) {
      A([it.fileTooLarge]);
      return;
    }
    let Ne = (H == null ? void 0 : H.name) || N || K, We = (($n) => {
      let jn;
      if ($n === "file" && (jn = Ne.match(/(?:\.([^.]+))?$/g), jn.length === 0 ? jn = ".csv" : jn = jn[0]), $n === "url") {
        let rn = new URL(Ne, window.location.origin);
        jn = Object.keys(In).find((On) => rn.pathname.endsWith(On));
      }
      return jn;
    })(Yn), qe = In[We], Ve = new FileReader(), Ke = qe === "text/csv" ? "utf-8" : "";
    Ve.onload = function() {
      let $n = this.result;
      switch (qe) {
        case "text/csv":
          $n = yi($n);
          break;
        case "text/plain":
        case "application/json":
          try {
            $n = JSON.parse($n);
          } catch {
            A([it.formatting]);
            return;
          }
          break;
        default:
          A([it.fileType]);
          return;
      }
      try {
        if ($n = C.autoStandardize($n), n.data && n.series)
          if (Xn($n, n.series, n == null ? void 0 : n.xAxis.dataKey))
            if (n.type === "dashboard") {
              let jn = { ...n.datasets };
              Object.keys(jn).forEach((rn) => jn[rn].preview = !1), jn[un || xn] = {
                data: $n,
                // new data
                dataFileSize: ue,
                dataFileName: xn,
                // new file source
                dataFileSourceType: Yn,
                // new file source type
                dataFileFormat: We.replace(".", "").toUpperCase(),
                preview: !0
              }, m && (jn[un || xn].dataUrl = xn), p({
                ...n,
                ...a,
                dataset: jn
              });
            } else {
              let jn = {
                ...n,
                ...a,
                data: $n,
                // new data
                dataFileName: xn,
                // new file source
                dataFileSourceType: Yn,
                // new file source type
                formattedData: C.developerStandardize($n, n.dataDescription)
              };
              m && (jn.dataUrl = xn), p(jn);
            }
          else
            Ee(
              {
                data: $n,
                dataFileName: xn,
                dataFileSourceType: Yn
              },
              "It appears that your data does not contain all of the columns that your last dataset contained. Continuing will reset your configuration. Do you want to continue?"
            );
        else if (n.type === "dashboard") {
          let jn = { ...n.datasets };
          Object.keys(jn).forEach((rn) => jn[rn].preview = !1), jn[un || xn] = {
            data: $n,
            // new data
            dataFileSize: ue,
            dataFileName: xn,
            // new file source
            dataFileSourceType: Yn,
            // new file source type
            dataFileFormat: We.replace(".", "").toUpperCase(),
            preview: !0
          }, m && (jn[un || xn].dataUrl = xn), p({ ...n, datasets: jn });
        } else {
          let jn = {
            ...n,
            ...a,
            data: $n,
            // new data
            dataFileName: xn,
            // new file source
            dataFileSourceType: Yn,
            // new file source type
            formattedData: C.developerStandardize($n, n.dataDescription)
            // new file source type
          };
          m && (jn.dataUrl = xn), p(jn);
        }
        I && j(void 0), B(!1);
      } catch (jn) {
        A(jn);
      }
    }, Ve.readAsText(yn, Ke);
  };
  D.useEffect(() => {
    let H = { ...a || n };
    if (n.formattedData === void 0 && n.dataDescription) {
      const K = C.developerStandardize(n.data, n.dataDescription);
      K && (H.formattedData = K);
    }
    mn({ type: "EDITOR_SAVE", payload: H });
  }, []), D.useEffect(() => {
    (async () => {
      if (n.type === "dashboard")
        Object.keys(n.datasets).forEach(async (K) => {
          if (n.datasets[K].preview)
            if (n.datasets[K].dataUrl) {
              const un = await Fo(n.datasets[K].dataUrl);
              Array.isArray(un) && Y(un);
            } else
              Array.isArray(n.datasets[K].data) && Y(n.datasets[K].data);
        });
      else if (n.dataUrl) {
        const K = await Fo(n.dataUrl);
        Array.isArray(K) && Y(K);
      }
    })();
  }, [n.datasets]);
  const vn = (H, K, un, yn) => {
    if (n.type === "dashboard") {
      let xn = { ...n.datasets[K].dataDescription, [un]: yn }, Yn = C.developerStandardize(n.datasets[K].data, xn), ue = { ...n.datasets };
      ue[K] = { ...ue[K], dataDescription: xn, formattedData: Yn }, p({ ...n, datasets: ue });
    } else {
      let xn = { ...n.dataDescription, [un]: yn }, Yn = C.developerStandardize(n.data, xn);
      p({ ...n, formattedData: Yn, dataDescription: xn });
    }
  }, le = (H, K) => {
    if (K) {
      let un = { ...n.datasets };
      H === !1 ? delete un[K].dataUrl : un[K].dataUrl = un[K].dataFileName, p({ ...n, datasets: un });
    } else if (n.type !== "dashboard") {
      let un = { ...n };
      H === !1 ? delete un.dataUrl : un.dataUrl = un.dataFileName, p(un);
    }
    Sn(H);
  }, { getRootProps: Jn, getInputProps: qn, isDragActive: oe } = Ur({ onDrop: hn }), { getRootProps: se, getInputProps: ne, isDragActive: ee } = Ur({ onDrop: hn }), Le = (H, K) => /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("form", { className: "input-group d-flex", onSubmit: (un) => un.preventDefault() }, /* @__PURE__ */ c.createElement("input", { id: "external-data", type: "text", className: "form-control flex-grow-1 border-right-0", placeholder: "e.g., https://data.cdc.gov/resources/file.json", "aria-label": "Load data from external URL", "aria-describedby": "load-data", value: N, onChange: (un) => _(un.target.value) }), /* @__PURE__ */ c.createElement("button", { className: "input-group-text btn btn-primary px-4", type: "submit", id: "load-data", onClick: () => Tn(null, N, K) }, "Load")), /* @__PURE__ */ c.createElement("label", { htmlFor: "keep-url", className: "mt-1 d-flex keep-url" }, /* @__PURE__ */ c.createElement("input", { type: "checkbox", id: "keep-url", checked: m, onChange: () => le(!m, K) }), " Always load from URL (normally will only pull once)")), Ee = (H = {}, K = "Are you sure you want to do this?") => {
    H.newViz = !0, window.confirm(K) === !0 && (mn({ type: "EDITOR_SAVE", payload: H }), B(!0));
  }, we = () => (
    //todo convert to modal
    /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("button", { className: "btn danger", onClick: () => Ee({ type: n.type, visualizationType: n.visualizationType }, "Resetting will remove your data and settings. Do you want to continue?") }, "Clear", /* @__PURE__ */ c.createElement(Ca, null)), n.dataFileSourceType === "file" && /* @__PURE__ */ c.createElement("div", { className: "link link-replace", ...se() }, /* @__PURE__ */ c.createElement("input", { ...ne() }), /* @__PURE__ */ c.createElement("p", null, /* @__PURE__ */ c.createElement("span", null, "or replace file"))))
  ), ke = (H, K, un) => {
    let yn = { ...n.datasets };
    un === !0 ? Object.keys(yn).forEach((xn) => {
      xn !== H ? yn[xn][K] = !1 : yn[xn][K] = !0;
    }) : yn[H][K] = un, p({ ...n, datasets: yn });
  }, me = (H) => {
    let K = { ...n.datasets }, un = { ...n.visualizations };
    Object.keys(un).forEach((yn) => {
      un[yn].dataKey === H && delete un[yn].dataKey;
    }), delete K[H], p({ ...n, datasets: K, visualizations: un });
  }, Oe = (H, K) => {
    if (H === K)
      return;
    let un = { ...n.datasets }, yn = { ...n.visualizations }, xn = 2, Yn = K;
    for (; un[K]; )
      K = Yn + "-" + xn, xn++;
    un[K] = un[H], delete un[H], Object.keys(yn).forEach((ue) => {
      yn[ue].dataKey === H && (yn[ue].dataKey = K);
    }), p({ ...n, datasets: un, visualizations: yn });
  };
  let ce, Ae, Re = !1;
  n.type === "dashboard" ? (Re = Object.keys(n.datasets).length > 0, Object.keys(n.datasets).forEach((H) => {
    n.datasets[H].preview && Array.isArray(n.datasets[H].data) && (ce = n.datasets[H].data);
  })) : (ce = n.data, Ae = n, Re = !!n.formattedData || n.data && n.dataDescription && C.autoStandardize(n.data)), (n.visualizationType === "Box Plot" && n.data || n.visualizationType === "Scatter Plot") && (Re = !0);
  const Te = /* @__PURE__ */ c.createElement(c.Fragment, null, n.filters && n.filters.map(
    (H, K) => H.type !== "url" ? /* @__PURE__ */ c.createElement(c.Fragment, null) : /* @__PURE__ */ c.createElement("fieldset", { key: H.key, className: "edit-block url-filters-block" }, /* @__PURE__ */ c.createElement(
      "button",
      {
        onClick: (un) => {
          let yn = [...n.filters];
          yn.splice(K, 1), p({ ...n, filters: yn, runtimeDataUrl: void 0 });
        }
      },
      "Remove"
    ), /* @__PURE__ */ c.createElement("label", null, /* @__PURE__ */ c.createElement("span", { className: "edit-label column-heading" }, "Label", /* @__PURE__ */ c.createElement(cn, { style: { textTransform: "none" } }, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(ya, { display: "question" })), /* @__PURE__ */ c.createElement(cn.Content, null, /* @__PURE__ */ c.createElement("p", { style: { padding: "0.5rem" } }, "The label that will appear above the dropdown filter.")))), " ", /* @__PURE__ */ c.createElement(
      "input",
      {
        type: "text",
        defaultValue: H.label,
        onChange: (un) => {
          let yn = [...n.filters];
          yn[K].label = un.target.value, p({ ...n, filters: yn });
        }
      }
    )), /* @__PURE__ */ c.createElement("label", null, /* @__PURE__ */ c.createElement("span", { className: "edit-label column-heading" }, "Query string parameter", /* @__PURE__ */ c.createElement(cn, { style: { textTransform: "none" } }, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(ya, { display: "question" })), /* @__PURE__ */ c.createElement(cn.Content, null, /* @__PURE__ */ c.createElement("p", { style: { padding: "0.5rem" } }, "Name of the query string parameter that will be appended to the URL above with the values provided below.")))), " ", /* @__PURE__ */ c.createElement(
      "input",
      {
        type: "text",
        defaultValue: H.queryParameter,
        onChange: (un) => {
          let yn = [...n.filters];
          yn[K].queryParameter = un.target.value, p({ ...n, filters: yn });
        }
      }
    )), /* @__PURE__ */ c.createElement("label", null, /* @__PURE__ */ c.createElement("span", { className: "edit-label column-heading" }, "Values"), " "), /* @__PURE__ */ c.createElement("ul", { className: "value-list" }, H.orderedValues && H.orderedValues.map((un, yn) => /* @__PURE__ */ c.createElement("li", null, un, /* @__PURE__ */ c.createElement(
      "input",
      {
        type: "text",
        placeholder: "Enter value display name here",
        value: H.labels ? H.labels[un] : void 0,
        className: "url-value-label",
        onChange: (xn) => {
          let Yn = [...n.filters];
          Yn[K].labels = Yn[K].labels || {}, Yn[K].labels[un] = xn.target.value, p({ ...n, filters: Yn });
        }
      }
    ), /* @__PURE__ */ c.createElement(
      "button",
      {
        onClick: () => {
          let xn = [...n.filters];
          xn[K].labels && delete xn[K].labels[xn[K].orderedValues[yn]], xn[K].orderedValues.splice(yn, 1), p({ ...n, filters: xn });
        }
      },
      "X"
    )))), /* @__PURE__ */ c.createElement(
      "form",
      {
        onSubmit: (un) => {
          if (un.preventDefault(), !n.filters[K].orderedValues || n.filters[K].orderedValues.indexOf(un.target[0].value) === -1) {
            let yn = [...n.filters];
            yn[K].orderedValues = yn[K].orderedValues || [], yn[K].orderedValues.push(un.target[0].value), yn[K].values = yn[K].orderedValues, yn[K].active || (yn[K].active = un.target[0].value), un.target[0].value = "", p({ ...n, filters: yn });
          }
        }
      },
      /* @__PURE__ */ c.createElement("input", { type: "text", placeholder: "Enter new value name here" }),
      " ",
      /* @__PURE__ */ c.createElement("button", { type: "submit", style: { marginTop: "1em" } }, "Add New Value")
    ))
  ), /* @__PURE__ */ c.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: () => {
        p({ ...n, filters: n.filters ? [...n.filters, { type: "url", key: Date.now() }] : [{ type: "url", key: Date.now() }] });
      }
    },
    "Add New URL Filter"
  )), Me = n.visualizationType !== "Box Plot" && n.visualizationType !== "Scatter Plot";
  return /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("div", { className: "left-col" }, n.type === "dashboard" && Object.keys(n.datasets).length > 0 && /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("div", { className: "heading-3" }, "Data Sources"), /* @__PURE__ */ c.createElement("table", null, /* @__PURE__ */ c.createElement("thead", null, /* @__PURE__ */ c.createElement("tr", null, /* @__PURE__ */ c.createElement("th", null, "Name"), /* @__PURE__ */ c.createElement("th", null, "Size"), /* @__PURE__ */ c.createElement("th", null, "Type"), /* @__PURE__ */ c.createElement("th", { colSpan: 4 }, "Actions"))), /* @__PURE__ */ c.createElement("tbody", null, Object.keys(n.datasets).map(
    (H) => n.datasets[H].dataFileName && /* @__PURE__ */ c.createElement("tr", { key: `tr-${H}` }, /* @__PURE__ */ c.createElement("td", null, /* @__PURE__ */ c.createElement("input", { className: "dataset-name-input", type: "text", defaultValue: H, onBlur: (K) => Oe(H, K.target.value) })), /* @__PURE__ */ c.createElement("td", null, Cn(n.datasets[H].dataFileSize)), /* @__PURE__ */ c.createElement("td", null, n.datasets[H].dataFileFormat), /* @__PURE__ */ c.createElement("td", null, /* @__PURE__ */ c.createElement("button", { className: "btn btn-primary", onClick: () => ke(H, "preview", !0) }, "Preview Data")), /* @__PURE__ */ c.createElement("td", null, /* @__PURE__ */ c.createElement(
      "button",
      {
        className: "btn btn-primary",
        onClick: () => {
          I === H ? (j(void 0), _(""), Sn(!1)) : (j(H), _(n.datasets[H].dataUrl || n.datasets[H].dataFileName), Sn(!!n.datasets[H].dataUrl));
        }
      },
      "Edit Data"
    )), /* @__PURE__ */ c.createElement("td", null, /* @__PURE__ */ c.createElement("button", { className: "btn btn-primary", onClick: () => me(H) }, "X")))
  )))), Ae && Ae.data && /* @__PURE__ */ c.createElement(c.Fragment, null, n.type !== "dashboard" && /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("div", { className: "heading-3" }, "Data Source"), /* @__PURE__ */ c.createElement("div", { className: "file-loaded-area" }, (n.dataFileSourceType === "file" || !n.dataFileSourceType) && /* @__PURE__ */ c.createElement("div", { className: "data-source-options" }, /* @__PURE__ */ c.createElement("div", { className: ee ? "drag-active cdcdataviz-file-selector loaded-file" : "cdcdataviz-file-selector loaded-file", ...se() }, /* @__PURE__ */ c.createElement("input", { ...ne() }), ee ? /* @__PURE__ */ c.createElement("p", null, "Drop file here") : /* @__PURE__ */ c.createElement("p", null, /* @__PURE__ */ c.createElement(eu, null), " ", /* @__PURE__ */ c.createElement("span", null, n.dataFileName ?? "Replace data file"))), /* @__PURE__ */ c.createElement("div", null, we())), n.dataFileSourceType === "url" && /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("div", { className: "url-source-options" }, /* @__PURE__ */ c.createElement("div", null, Le(N, I)), /* @__PURE__ */ c.createElement("div", null, we())), n.dataUrl && (n.type === "chart" || n.type === "map") && Te))), Me && /* @__PURE__ */ c.createElement(oi, { visualizationKey: null, dataKey: Ae.dataFileName, configureData: Ae, updateDescriptionProp: vn, config: n, setConfig: p })), (I || S) && // dataFileSourceType needs to be checked here since earlier versions did not track this state
  /* @__PURE__ */ c.createElement("div", { className: "load-data-area" }, /* @__PURE__ */ c.createElement("div", { className: "heading-3" }, I ? `Editing ${I}` : "Add Dataset"), /* @__PURE__ */ c.createElement(hl, { startingTab: I && n.datasets[I].dataFileSourceType === "url" ? 1 : 0 }, /* @__PURE__ */ c.createElement(Wt, { title: "Upload File", icon: /* @__PURE__ */ c.createElement(eu, { className: "inline-icon" }) }, i && /* @__PURE__ */ c.createElement("p", { className: "alert--info" }, "The share path set for this website is: ", i), /* @__PURE__ */ c.createElement("div", { className: oe ? "drag-active cdcdataviz-file-selector" : "cdcdataviz-file-selector", ...Jn() }, /* @__PURE__ */ c.createElement("input", { ...qn() }), oe ? /* @__PURE__ */ c.createElement("p", null, "Drop file here") : /* @__PURE__ */ c.createElement("p", null, "Drag file to this area, or ", /* @__PURE__ */ c.createElement("span", null, "select a file"), "."))), /* @__PURE__ */ c.createElement(Wt, { title: "Load from URL", icon: /* @__PURE__ */ c.createElement(Tl, { className: "inline-icon" }) }, Le(I && n.datasets[I].dataFileSourceType === "url" ? n.datasets[I].dataFileName : N, I))), r && (Array.isArray(r) ? r.map((H, K) => /* @__PURE__ */ c.createElement("div", { className: "error-box slim mt-2", key: `error-${H}` }, /* @__PURE__ */ c.createElement("span", null, H), " ", /* @__PURE__ */ c.createElement(Ca, { className: "inline-icon dismiss-error", onClick: () => A(r.filter((un, yn) => yn !== K)) }))) : r.message), /* @__PURE__ */ c.createElement("p", { className: "footnote" }, "Supported file types: ", Object.keys(In).join(", "), ". Maximum file size ", Zr, "MB."), /* @__PURE__ */ c.createElement(zo.Provider, { value: { loadData: Tn, editingDataset: I, config: n } }, /* @__PURE__ */ c.createElement(ua.Buttons, null))), n.type === "dashboard" && !S && /* @__PURE__ */ c.createElement("p", null, /* @__PURE__ */ c.createElement("button", { className: "btn btn-primary", onClick: () => B(!0) }, "+ Add More Files")), Re && /* @__PURE__ */ c.createElement("p", null, /* @__PURE__ */ c.createElement("button", { className: "btn btn-primary", onClick: () => mn({ type: "EDITOR_SET_GLOBALACTIVE", payload: 2 }) }, "Configure your visualization")), /* @__PURE__ */ c.createElement("a", { href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement("h3", null, "Get Help"), /* @__PURE__ */ c.createElement("p", null, "Documentation and examples on formatting data and configuring visualizations.")))), /* @__PURE__ */ c.createElement("div", { className: "right-col" }, /* @__PURE__ */ c.createElement(El, { data: Q || ce })));
}
const jl = (n) => /* @__PURE__ */ D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024", fill: "currentColor", ...n }, /* @__PURE__ */ D.createElement("path", { d: "M489.3,377.8H80.1v-288c0-8.4-6.8-15.2-15.2-15.2H34.7c-8.4,0-15.2,6.8-15.2,15.2v318.3c0,16.7,13.6,30.3,30.3,30.3h439.5 c8.4,0,15.2-6.8,15.2-15.2v-30.3C504.5,384.6,497.7,377.8,489.3,377.8z" }), /* @__PURE__ */ D.createElement("path", { d: "M459,105H347.2c-20.3,0-30.4,24.5-16.1,38.8l30.7,30.7L292.3,244l-69.5-69.5c-11.8-11.8-31-11.8-42.9,0l-65.1,65.1 c-5.9,5.9-5.9,15.5,0,21.4l21.4,21.4c5.9,5.9,15.5,5.9,21.4,0l43.6-43.6l69.5,69.5c11.8,11.8,31,11.8,42.9,0l90.9-90.9l30.7,30.7 c14.3,14.3,38.8,4.2,38.8-16.1V120.1C474.2,111.7,467.4,105,459,105z" }), /* @__PURE__ */ D.createElement("path", { d: "M991.2,280.5h-188l125.2,125.2c4.8,4.8,12.7,5.2,17.6,0.5c30.7-28.9,51.8-67.8,57.9-111.6 C1005,287.2,998.8,280.5,991.2,280.5L991.2,280.5z" }), /* @__PURE__ */ D.createElement("path", { d: "M978.7,229.2c-6.5-94.6-82.2-170.3-176.8-176.8c-7.2-0.5-13.3,5.6-13.3,12.8v177.3h177.3 C973.1,242.5,979.2,236.4,978.7,229.2L978.7,229.2z" }), /* @__PURE__ */ D.createElement("path", { d: "M750.5,280.5v-188c0-7.6-6.6-13.8-14.1-12.7C642,93.1,569.8,175.6,573.2,274.5C576.6,376,664,459.3,765.6,458 c39.9-0.5,76.8-13.4,107.2-34.9c6.3-4.4,6.7-13.7,1.2-19.1L750.5,280.5z" }), /* @__PURE__ */ D.createElement("path", { d: "M130.7,558l1.1,7.2l5.5,11.6l-2.8,12.1l-6.1-7.7l-3.9-8.8l-8.8-1.7L102,569h-3.9l2.2,7.7l7.7,11v11l2.2,12.1l9.9,1.1 l3.9,5.5l-12.1-1.7l-3.9,2.8l1.7,11.6l-2.2,12.7l0.5,14.9l-3.9,9.9l-4.4,14.3l3.3,9.9l2.2,12.7l1.7,9.4l-2.2,12.7l1.7,8.8l3.9,8.8 l3.3,11l2.8,7.2L128,772l5.5-0.6l7.7,1.1l-8.3,2.2l2.2,3.9l-7.2,1.1l6.6,7.2l6.6,7.2l-2.2,6.1l8.8,12.7l9.4,7.7l1.1,9.4l7.7,3.9 l10.5,3.3l8.3,7.2l7.2,4.4l7.7,6.1l4.4,3.3l5,11l28.1-0.6l55.2,19.3h45.8l-1.1-4.4h22.1l8.8,5l5,5l12.7,8.8l4.4,16l12.7,6.6l7.7,3.3 l10.5-12.7l13.8,1.7l5.5,4.4l14.9,24.3l5,6.1l3.9,13.8l29.2,11.6l-1.1-9.9l-1.1-13.8l9.4-11l-1.7-3.3l9.4-7.7l5,2.8l8.3-9.4l5-6.6 h7.2l16-3.3l11.6,5h8.8l3.3-3.9l3.9,2.8l0.6,5l11.6,3.9l11-1.7l9.4,0.6l-7.7-6.1l-0.6-3.3l5-2.8l-0.5-2.8H598l-8.8,1.1l5.5-5 l2.8-3.3l2.8,2.8l16-2.2l2.2,2.8h11l6.1-1.7l8.8-0.5l8.3,3.3l5-0.6l5,7.2l9.9,0.5l5.5-4.4h5.5l11,9.4l6.1,6.6l1.7,8.8l-1.1,11 l3.9,11.6l10.5,13.2l6.1,12.7l2.2,5l11-2.2l2.8-12.1v-18.2l-5.5-14.9l-1.7-3.9l-1.1-11l-9.4-11l-1.7-13.2l0.5-11l4.4-12.1l8.3-6.6 l-0.6-5l9.9-1.7l14.3-16l6.6-5.5l7.2,1.1l6.6-12.7l9.4-5c0,0,7.2,1.1,7.7-1.7c0.5-2.8,7.7-16,7.7-16l-7.7-4.4l4.4-3.9l1.1-2.8 l-4.4-11l-4.4-5l5.5-6.1l-4.4-5.5l-1.1-11l-0.6-9.4l3.3-2.8l2.2,13.8l1.7,6.6l3.9,6.1l-1.1,9.9l6.1-12.1l3.9-9.4l0.6-5.5l-5.5-6.6 l-0.6-2.8l1.7-1.7l8.8,5.5l2.8-6.6l6.1-6.1l1.1-6.6l-1.1-7.7l0.5-3.9l1.1-5.5l4.4,6.1h2.2l6.6-1.1l6.6-0.6l8.8-2.8l-1.7-3.3 l-8.8,0.6l-8.3,2.2l-3.9,2.2l-0.6-3.9l2.8-3.3l7.2-1.7l8.8-1.7l6.1-1.7l5-3.3l11.6,2.8c0,0,5,2.8,5.5,1.1c0.6-1.7,2.2-6.1,2.2-6.1 l-3.9-4.4l-1.7-6.6l1.1-11l1.1-8.8l5-6.6l1.1-2.8l3.3,1.7l10.5-11.6h3.9l8.8-1.1l2.8-5.5h7.7l6.6-5.5l-2.5-3l-3-7.4l-3.3-2.5 l1.4-18.5l-1.7-16.8l-9.9-3l-8.6,3l-4.7-0.6l-19,44.4l-8.8,0.6l-3.9,3.3l-46.9-0.3l-11.6,10.8l-7.2,4.4l-3.3,9.4l-1.7,5l-8.3,5.5 H774l-6.1-2.8l-7.7,1.1l-9.9,3.3l0.6,5l-0.6,8.8l-5,4.4l-9.9,2.2l-15.4,7.7l-11.6,3.9l-11,0.6l-6.6-5l3.3-6.1l1.7-1.7l2.2-6.1 l4.1-2.5l5.2-9.1l-5.5-7.2l-1.1-11.6l-7.2-2.2l-9.4,6.6l3.3-7.7l5.5-7.7l-2.2-7.2l-1.7-8.3l-8.8-3.3l-7.7-6.6l-9.4,3.9l0.6,7.2 l-5.5,6.6l-4.4-2.2l-8.3,9.4v11l1.1,11l5,7.7l-0.6,16.6l-10.5,9.9l-7.7,0.6l-3.9-11.6l-3.9-8.3l1.7-11l-1.7-11l3.9-7.2l2.2-7.2 l3.9-12.1l-8.8,9.9l5-17.1l7.7-6.6l9.4-0.6l7.2-3.3H667h9.4l6.1-1.7l7.2,1.1l3.3,5.5l13.8,5l2.8-7.7l-9.4,1.1l-6.1-0.6l-8.8-6.6 l-5.5-3.3l-6.3-4.7l-6.3,1.9l-6.1-4.4l-14.3,0.6l-7.7,5l-6.1-3.9l-7.2-4.4l-10.5-0.6l10.5-14.9l-12.1,5.5l-9.9,7.7l-9.9,5.5 l-8.8,1.1l-1.1-5.5l-18.2,3.9l15.3-13.4l10.8-7.9l13.4-10.5l-5.5-0.8l-18.2,0.6l-8.3-1.7l-7.4-1.2L558,564l-8.3,0.6l-15.7-3.9 l-4.1-5l-2.2-7.7l-3.9-3.6l0.3,4.1l-3.9,6.1l-387.3,0.3L130.7,558L130.7,558z" })), Yl = (n) => /* @__PURE__ */ D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.7", fill: "currentColor", ...n }, /* @__PURE__ */ D.createElement("path", { d: "M91,18.7H62c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h29c0.6,0,1-0.4,1-1v-6C92,19.1,91.6,18.7,91,18.7z M89.4,24.7H63.6 c-0.3,0-0.6-0.2-0.6-0.6v-2.9c0-0.3,0.2-0.6,0.6-0.6h25.9c0.3,0,0.6,0.2,0.6,0.6v2.9C90,24.4,89.8,24.7,89.4,24.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M75,30.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1v-6C76,31.1,75.6,30.7,75,30.7z M73.7,36.7h-9.3 c-0.2,0-0.3-0.2-0.3-0.3V33c0-0.2,0.2-0.3,0.3-0.3h9.3c0.2,0,0.3,0.2,0.3,0.3v3.3C74,36.5,73.8,36.7,73.7,36.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M81,43.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1v-6C82,44.1,81.6,43.7,81,43.7z M79.6,49.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.1c0-0.2,0.2-0.4,0.4-0.4h15.1c0.2,0,0.4,0.2,0.4,0.4v3.1C80,49.5,79.8,49.7,79.6,49.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M47,12.7h6c0.6,0,1,0.4,1,1v52c0,0.6-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1v-52C46,13.1,46.4,12.7,47,12.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M39,19.7v6c0,0.6-0.4,1-1,1H17c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h21C38.6,18.7,39,19.1,39,19.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M39,31.7v6c0,0.6-0.4,1-1,1H8c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h30C38.6,30.7,39,31.1,39,31.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M39,44.7v6c0,0.6-0.4,1-1,1H20c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h18C38.6,43.7,39,44.1,39,44.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M39,57.7v6c0,0.6-0.4,1-1,1H25c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h13C38.6,56.7,39,57.1,39,57.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M79,56.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v-6C80,57.1,79.6,56.7,79,56.7z M77.6,62.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.2c0-0.2,0.2-0.4,0.4-0.4h13.2c0.2,0,0.4,0.2,0.4,0.4v3.2C78,62.5,77.8,62.7,77.6,62.7z" })), Ul = (n) => /* @__PURE__ */ D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.3 82.6", fill: "currentColor", ...n }, /* @__PURE__ */ D.createElement("path", { d: "M83.9,61.4h-64V12.1c0-1.1-0.9-2-2-2h-5.5c-1.1,0-2,0.9-2,2v56.7c0,1.1,0.9,2,2,2h71.5c1.1,0,2-0.9,2-2v-5.5 C85.9,62.3,85,61.4,83.9,61.4z" }), /* @__PURE__ */ D.createElement("path", { d: "M67.1,47.3H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h40.3c1.1,0,2-0.9,2-2v-6.1C69.1,48.2,68.2,47.3,67.1,47.3L67.1,47.3z  M52,54.6H38.2c-0.7,0-1.3-0.4-1.3-1V51c0-0.5,0.6-1,1.3-1H52c0.7,0,1.3,0.4,1.3,1v2.6C53.3,54.1,52.8,54.6,52,54.6z" }), /* @__PURE__ */ D.createElement("path", { d: "M83.9,31.7H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h57.2c1.1,0,2-0.9,2-2v-6.1C85.9,32.6,85,31.7,83.9,31.7z M68.8,39 H45.2c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h23.7c0.7,0,1.3,0.4,1.3,1V38C70.2,38.5,69.6,39,68.8,39z" }), /* @__PURE__ */ D.createElement("path", { d: "M77,16.1H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2H77c1.1,0,2-0.9,2-2v-6.1C79,17,78.1,16.1,77,16.1z M58.9,23.4H36.6 c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h22.3c0.7,0,1.3,0.4,1.3,1v2.6C60.2,23,59.6,23.4,58.9,23.4z" })), _l = (n) => /* @__PURE__ */ D.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...n }, /* @__PURE__ */ D.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ D.createElement("g", null, /* @__PURE__ */ D.createElement("path", { d: "M30.22,49.19c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ D.createElement("path", { d: "M33.06,35.59c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ D.createElement("path", { d: "M48.12,37.83c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ D.createElement("circle", { cx: 49.64, cy: 22.73, r: 3.24 }), /* @__PURE__ */ D.createElement("path", { d: "M64.53,19.49c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ D.createElement("path", { d: "M57.95,31.11c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ D.createElement("path", { d: "M74.53,11.54c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }))), Jl = (n) => /* @__PURE__ */ D.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...n }, /* @__PURE__ */ D.createElement("path", { d: "M54.68,29.14h-4.1V8.43h2.68c.5,0,.9-.15,1.19-.46,.46-.48,.44-1.11,.42-1.62,0-.11,0-.22,0-.34s0-.24,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-10.2c-.5,0-.9,.15-1.19,.46-.47,.48-.44,1.11-.42,1.62,0,.11,0,.23,0,.34s0,.23,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h2.68V29.14h-4.1c-1.33,0-2.42,1.09-2.42,2.42v31.31c0,1.33,1.09,2.42,2.42,2.42h4.1v7.97h-2.68c-.5,0-.9,.15-1.19,.46-.46,.48-.44,1.11-.42,1.62,0,.11,0,.22,0,.34s0,.24,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h10.2c.5,0,.9-.15,1.19-.46,.47-.48,.44-1.11,.42-1.62,0-.11,0-.23,0-.34s0-.23,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-2.68v-7.97h4.1c1.33,0,2.42-1.09,2.42-2.42V31.56c0-1.33-1.09-2.42-2.42-2.42Zm-2.42,20.5v10.81h-8.2v-10.81h8.2Zm-8.2-4.84v-10.81h8.2v10.81h-8.2Z" })), $l = (n) => /* @__PURE__ */ D.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...n }, /* @__PURE__ */ D.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ D.createElement("path", { d: "M87.91,60.65c-.02-.12-2.46-12.63-5.53-24.97-5.97-23.99-8.8-26-10.99-26-2.54,0-4.17,3.55-7.92,12.31-.67,1.56-1.4,3.27-2.18,5.02-1.66-4.14-3.14-5.9-4.84-5.9-2.39,0-4.05,3.42-7.07,9.64-5.56,11.44-13.97,28.72-29.12,28.72-.8,0-1.46,.65-1.46,1.45s.65,1.45,1.46,1.45H86.48c.43,0,.85-.19,1.12-.53,.28-.34,.39-.78,.31-1.2Zm-46.88-1.25c8.93-4.92,15.3-15.3,19.83-24.54,2.62,8.88,4.97,20.28,5.83,24.58l-25.66-.04Z" })), Zl = (n) => /* @__PURE__ */ D.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...n }, /* @__PURE__ */ D.createElement("path", { d: "M18.29,39.57c0-1.03,.23-1.79,.68-2.28,.45-.49,1.06-.74,1.83-.74s1.42,.25,1.87,.74c.45,.49,.68,1.25,.68,2.29s-.23,1.79-.68,2.28c-.45,.5-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.25-.68-2.29Zm1.71-.02c0,.75,.09,1.25,.26,1.5,.13,.19,.31,.28,.54,.28s.42-.09,.55-.28c.17-.25,.25-.75,.25-1.5s-.08-1.24-.25-1.49c-.13-.19-.31-.29-.55-.29s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Zm2.47,9.08h-1.62l6.1-12.09h1.58l-6.05,12.09Zm3.55-3.01c0-1.03,.23-1.79,.68-2.28,.45-.49,1.07-.74,1.85-.74s1.4,.25,1.86,.74c.45,.5,.68,1.26,.68,2.28s-.23,1.79-.68,2.29c-.45,.49-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.26-.68-2.29Zm1.71,0c0,.75,.09,1.24,.26,1.49,.13,.19,.31,.29,.54,.29s.41-.09,.54-.28c.17-.25,.26-.75,.26-1.5s-.08-1.24-.25-1.5c-.13-.19-.31-.28-.55-.28s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Z" }), /* @__PURE__ */ D.createElement("path", { d: "M92.33,52.83v-20.42c0-1.61-1.31-2.93-2.93-2.93H6.65c-1.61,0-2.93,1.31-2.93,2.93v20.42c0,1.61,1.31,2.93,2.93,2.93H89.4c1.61,0,2.93-1.31,2.93-2.93Zm-52.34-2.93H9.58v-14.56h30.41v14.56Zm5.86-14.56h40.63v14.56H45.85v-14.56Z" })), Ql = (n) => /* @__PURE__ */ D.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...n }, /* @__PURE__ */ D.createElement("defs", null, /* @__PURE__ */ D.createElement("style", null, ".b{stroke-width:3px;}.b,.c,.d{stroke-linecap:round;}.b,.c,.d,.e{stroke:#000;}.c,.d,.e{fill:none;}.d{stroke-dasharray:0 0 0 4.07;}.e{stroke-width:2px;}")), /* @__PURE__ */ D.createElement("path", { d: "M14.15,8.39v63.29c0,.87,.89,1.59,1.98,1.59h5.42c1.09,0,1.98-.72,1.98-1.59l-.13-63.29c0-.87-.89-1.59-1.98-1.59h-5.28c-1.09,0-1.98,.72-1.98,1.59Z" }), /* @__PURE__ */ D.createElement("g", null, /* @__PURE__ */ D.createElement("line", { className: "c", x1: 53.51, y1: 10.09, x2: 53.51, y2: 10.09 }), /* @__PURE__ */ D.createElement("line", { className: "d", x1: 53.51, y1: 14.16, x2: 53.51, y2: 69.05 }), /* @__PURE__ */ D.createElement("line", { className: "c", x1: 53.51, y1: 71.08, x2: 53.51, y2: 71.08 })), /* @__PURE__ */ D.createElement("g", null, /* @__PURE__ */ D.createElement("path", { className: "b", d: "M29.78,16.97h34.43" }), /* @__PURE__ */ D.createElement("path", { className: "b", d: "M29.78,21.48V12.45" }), /* @__PURE__ */ D.createElement("path", { className: "b", d: "M65.64,21.48V12.45" })), /* @__PURE__ */ D.createElement("g", null, /* @__PURE__ */ D.createElement("path", { className: "b", d: "M50.62,33.5h28.85" }), /* @__PURE__ */ D.createElement("path", { className: "b", d: "M50.62,38.02v-9.03" }), /* @__PURE__ */ D.createElement("path", { className: "b", d: "M80.67,38.02v-9.03" })), /* @__PURE__ */ D.createElement("g", null, /* @__PURE__ */ D.createElement("path", { className: "b", d: "M28.21,50.03h19.26" }), /* @__PURE__ */ D.createElement("path", { className: "b", d: "M28.21,54.55v-9.03" }), /* @__PURE__ */ D.createElement("path", { className: "b", d: "M48.27,54.55v-9.03" })), /* @__PURE__ */ D.createElement("g", null, /* @__PURE__ */ D.createElement("path", { className: "b", d: "M40.69,66.57h33.99" }), /* @__PURE__ */ D.createElement("path", { className: "b", d: "M40.69,71.08v-9.03" }), /* @__PURE__ */ D.createElement("path", { className: "b", d: "M76.1,71.08v-9.03" })), /* @__PURE__ */ D.createElement("circle", { className: "e", cx: 47.47, cy: 16.97, r: 2.2 }), /* @__PURE__ */ D.createElement("circle", { className: "e", cx: 65.64, cy: 33.5, r: 2.2 }), /* @__PURE__ */ D.createElement("circle", { className: "e", cx: 38.49, cy: 50.03, r: 2.2 }), /* @__PURE__ */ D.createElement("circle", { className: "e", cx: 58.31, cy: 66.57, r: 2.2 })), ns = (n) => /* @__PURE__ */ D.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...n }, /* @__PURE__ */ D.createElement("path", { d: "M89.56,65.41H16.36V8.8c0-1.1-.9-2-2-2h-5.48c-1.1,0-2,.9-2,2V72.89c0,1.1,.9,2,2,2H89.56c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ D.createElement("path", { d: "M54.66,55.34c-17.76,0-33.46-17.8-34.12-18.56l-.98-1.13v-4.55l3.25,3.72c.15,.18,15.47,17.53,31.86,17.53h0c7.31,0,12.37-1.68,17.27-3.3,4.31-1.42,8.77-2.9,14.44-3.05l1.5-.04v3l-1.42,.04c-5.24,.14-9.29,1.48-13.59,2.9-5.13,1.69-10.43,3.45-18.22,3.45h0Z" }), /* @__PURE__ */ D.createElement("path", { d: "M87.84,59.04c-4.73-1.24-7.41-1.66-13.05-1.93-2.82-.14-5.22,.16-8,.5-2.73,.33-5.81,.71-10.06,.79-13.13,.27-23.77-4.63-37.17-17.31v-1.57c13.19,12.48,24.31,18.13,37.15,17.88,4.2-.08,7.26-.46,9.96-.79,2.83-.34,5.27-.64,8.17-.5,5.73,.28,8.2,.62,13,1.88v1.05Z" }), /* @__PURE__ */ D.createElement("path", { d: "M57.02,49.28c-19.55,0-30.91-14.65-37.69-23.41v-1.54c6.67,8.61,18.64,23.95,37.69,23.95,5.87,0,14.11-3.23,18.39-6.23,2.43-1.7,3.84-2.77,4.87-3.55,2.24-1.7,2.7-2.05,7.71-4.44l-.03,1.12c-4.92,2.34-4.91,2.47-7.08,4.12-1.04,.79-2.45,1.86-4.9,3.57-4.4,3.08-12.9,6.41-18.96,6.41Z" })), es = (n) => /* @__PURE__ */ D.createElement("svg", { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.69", ...n }, /* @__PURE__ */ D.createElement("defs", null, /* @__PURE__ */ D.createElement("style", null, ".cls-1{fill:#231f20;}")), /* @__PURE__ */ D.createElement("rect", { className: "cls-1", x: 46.87, y: 5.79, width: 8.32, height: 67.79, rx: 1 }), /* @__PURE__ */ D.createElement("rect", { className: "cls-1", x: 23.98, y: 17.65, width: 8.32, height: 23.31, rx: 1, transform: "translate(57.44 1.16) rotate(90)" }), /* @__PURE__ */ D.createElement("rect", { className: "cls-1", x: 19.53, y: 25.99, width: 8.32, height: 32.21, rx: 1, transform: "translate(65.79 18.41) rotate(90)" }), /* @__PURE__ */ D.createElement("rect", { className: "cls-1", x: 27.33, y: 60.4, width: 8.32, height: 14.6, rx: 1, transform: "translate(99.19 36.2) rotate(90)" }), /* @__PURE__ */ D.createElement("path", { className: "cls-1", d: "M81,52.74v4.32H64.55V52.74H81m1-2H63.55a1,1,0,0,0-1,1v6.32a1,1,0,0,0,1,1H82a1,1,0,0,0,1-1V51.74a1,1,0,0,0-1-1Z" }), /* @__PURE__ */ D.createElement("path", { className: "cls-1", d: "M90,14.41v4.33H64.55V14.41H90m1-2H63.55a1,1,0,0,0-1,1v6.33a1,1,0,0,0,1,1H91a1,1,0,0,0,1-1V13.41a1,1,0,0,0-1-1Z" }));
function ts() {
  const { config: n, tempConfig: r } = D.useContext(Ht), a = D.useContext(Gt);
  D.useEffect(() => {
    r && a({ type: "EDITOR_SAVE", payload: r });
  }, []);
  const i = ({ icon: p, label: A, type: C, subType: N = void 0, orientation: _ = void 0, stacked: m = !1, generalType: Sn = "data" }) => {
    let S = !1, B = !1, I;
    if (C === "map" && n.general) {
      let Q = n.general.geoType;
      S = N === Q;
    }
    C === "chart" && (S = N === n.visualizationType, B = _ === n.orientation && m === !0), (C === "dashboard" || C === "data-bite" || C === "markup-include") && (S = !0), C === "chart" && m ? I = n.type === C && S && n.visualizationSubType === "stacked" ? "active" : "" : C === "chart" && !m && n.visualizationSubType !== "stacked" && (I = n.type === C && S ? "active" : ""), C !== "chart" && (I = n.type === C && S && !B ? "active" : "");
    let j = () => {
      if (C === n.type)
        N !== n.visualizationType && a({ type: "EDITOR_SET_CONFIG", payload: { ...n, newViz: !0, visualizationType: N } }), a({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      else if (!n.type || window.confirm("Changing visualization type will clear configuration settings. Do you want to continue?")) {
        let Y = {
          newViz: !0,
          datasets: {},
          type: C
        };
        C === "map" ? Y.general = {
          ...Y.general,
          geoType: N,
          type: Sn
        } : Y.visualizationType = N, C === "chart" && (Y.visualizationSubType = m ? "stacked" : "regular", Y.orientation = _), a({ type: "EDITOR_SET_CONFIG", payload: Y }), a({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      }
    };
    return /* @__PURE__ */ c.createElement("button", { className: I, onClick: () => j(), "aria-label": A }, p, /* @__PURE__ */ c.createElement("span", { className: "mt-1" }, A));
  };
  return /* @__PURE__ */ c.createElement("div", { className: "choose-vis" }, /* @__PURE__ */ c.createElement("a", { href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/index.html", target: "_blank", rel: "noopener noreferrer", className: "guidance-link", style: { marginTop: 0, marginBottom: "2rem" } }, /* @__PURE__ */ c.createElement("div", null, /* @__PURE__ */ c.createElement("p", null, "For more information on the types of data visualizations in the WCMS, including examples and best practices, ", /* @__PURE__ */ c.createElement("u", null, "see the WCMS Features Gallery"), "."))), /* @__PURE__ */ c.createElement("div", { className: "heading-2" }, "General"), /* @__PURE__ */ c.createElement("ul", { className: "grid cove-temp" }, " ", /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, { position: "right" }, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Dashboard", type: "dashboard", icon: /* @__PURE__ */ c.createElement(jl, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Present multiple data visualizations with shared filter controls."))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Data Bite", type: "data-bite", icon: /* @__PURE__ */ c.createElement(Ju, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Highlight a single aggregated value (e.g., sum or median)."))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Waffle Chart", type: "waffle-chart", subType: "Waffle", icon: /* @__PURE__ */ c.createElement($u, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Highlight a piece of data in relationship to a data set."))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Gauge Chart", type: "waffle-chart", subType: "Gauge", icon: /* @__PURE__ */ c.createElement(Zl, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Specify the calculation of a single data point (such as a percentage value) and present it on a horizontal scale.")))), /* @__PURE__ */ c.createElement("div", { className: "heading-2" }, "Charts"), /* @__PURE__ */ c.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, { position: "right" }, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Bar", type: "chart", subType: "Bar", orientation: "vertical", icon: /* @__PURE__ */ c.createElement(Zu, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Use bars to show comparisons between data categories."))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Line", type: "chart", subType: "Line", orientation: "vertical", icon: /* @__PURE__ */ c.createElement(Qu, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Present one or more data trends over time."))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Pie", type: "chart", subType: "Pie", orientation: "vertical", icon: /* @__PURE__ */ c.createElement(ni, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Present the numerical proportions of a data series."))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Paired Bar", type: "chart", subType: "Paired Bar", orientation: "horizontal", icon: /* @__PURE__ */ c.createElement(Yl, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Use paired bars to show comparisons between two different data categories."))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Deviation Bar", type: "chart", subType: "Deviation Bar", orientation: "horizontal", stacked: !1, icon: /* @__PURE__ */ c.createElement(es, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Use deviation bars to display how individual values differ from a target."))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Horizontal Bar (Stacked)", type: "chart", subType: "Bar", orientation: "horizontal", stacked: !0, icon: /* @__PURE__ */ c.createElement(Ul, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Use bars to show comparisons between data categories.")))), /* @__PURE__ */ c.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Box Plot", type: "chart", subType: "Box Plot", orientation: "vertical", icon: /* @__PURE__ */ c.createElement(Jl, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Display a box plot"))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Scatter Plot", type: "chart", subType: "Scatter Plot", orientation: "vertical", icon: /* @__PURE__ */ c.createElement(_l, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Display a scatter plot"))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Area Chart", type: "chart", subType: "Area Chart", orientation: "vertical", icon: /* @__PURE__ */ c.createElement($l, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Display an area chart"))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Forecast Chart", type: "chart", subType: "Forecasting", orientation: "vertical", icon: /* @__PURE__ */ c.createElement(ns, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Display a forecasting chart"))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "Forest Plot", type: "chart", subType: "Forest Plot", orientation: "vertical", icon: /* @__PURE__ */ c.createElement(Ql, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Display a forest plot")))), /* @__PURE__ */ c.createElement("div", { className: "heading-2" }, "Maps"), /* @__PURE__ */ c.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, { position: "right" }, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "United States (State- or County-Level)", type: "map", subType: "us", icon: /* @__PURE__ */ c.createElement(da, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Present a U.S. choropleth map at state or county level."))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, { position: "right" }, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "United States (HHS Regions)", type: "map", subType: "us-region", icon: /* @__PURE__ */ c.createElement(ri, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Present a U.S. choropleth map at state or county level."))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "World", type: "map", subType: "world", icon: /* @__PURE__ */ c.createElement(ei, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Present a choropleth map of the world."))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "U.S. State", type: "map", subType: "single-state", icon: /* @__PURE__ */ c.createElement(ti, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "Present a choropleth map of an individual U.S. state."))), /* @__PURE__ */ c.createElement("li", null, /* @__PURE__ */ c.createElement(cn, null, /* @__PURE__ */ c.createElement(cn.Target, null, /* @__PURE__ */ c.createElement(i, { label: "U.S. Geocode", type: "map", subType: "us-county", generalType: "us-geocode", icon: /* @__PURE__ */ c.createElement(da, null) })), /* @__PURE__ */ c.createElement(cn.Content, null, "United States GeoCode")))));
}
const tu = {
  dashboard: {
    theme: "theme-blue"
  },
  rows: [[{ width: 12 }, {}, {}]],
  visualizations: {},
  table: {
    label: "Data Table",
    show: !0,
    showDownloadUrl: !1,
    showVertical: !0
  }
}, os = async (n, r) => {
  if (n.dataUrl && r !== xu.Apply) {
    const a = await Fo(`${n.dataUrl}`);
    return uu(a, n.dataDescription);
  }
  return n.formattedData || n.data;
}, rs = async (n) => {
  let r = n.formattedData || n.data;
  return n.dataUrl && (r = await Fo(`${n.dataUrl}`), r = uu(r, n.dataDescription)), r;
}, as = ({ configUrl: n, config: r, isEditor: a, isDebug: i }) => {
  const [p, A] = D.useState(void 0), C = (B, I) => {
    if (!B.multiDashboards)
      return null;
    if (I) {
      const j = Object.values(B.multiDashboards).findIndex(({ label: Q }) => Q === I);
      if (j > -1)
        return j;
    }
    return 0;
  }, N = (B, I) => {
    const [j, Q] = Hu(sa)(B, I);
    return { ...sa, config: j, filteredData: Q, data: I };
  }, _ = async (B) => {
    const I = r || await (await fetch(n)).json(), j = C(I, B), { newConfig: Q, datasets: Y } = j !== null ? await S(I, j) : await Sn(I);
    A(N(Q, Y));
  };
  D.useEffect(() => {
    _();
  }, []);
  const m = async (B) => {
    let I = { ...B }, j = {};
    return await Promise.all(
      Object.keys(B.datasets).map(async (Q) => {
        j[Q] = await os(B.datasets[Q], B.filterBehavior);
      })
    ), br(I).forEach((Q) => {
      I.visualizations[Q].formattedData = j[I.visualizations[Q].dataKey];
    }), Object.keys(j).forEach((Q) => {
      I.datasets[Q].data = j[Q];
    }), { newConfig: I, datasets: j };
  }, Sn = async (B) => {
    let I = { ...tu, ...B };
    if (B.datasets)
      return await m(I);
    {
      const j = I.dataFileName || "backwards-compatibility", Q = await rs(B), Y = {};
      if (Y[j] = {
        data: Q,
        dataDescription: I.dataDescription
      }, I.datasets = Y, br(I).forEach((Cn) => {
        const Xn = { dataKey: j, ...xo.pick(I, "dataDescription", "formattedData") };
        I.visualizations[Cn] = { ...I.visualizations[Cn], ...Xn };
      }), I = { ...I, ...{ data: [], dataUrl: "", dataFileName: "", dataFileSourceType: "", dataDescription: [], formattedData: [] } }, I.dashboard.filters) {
        const Cn = { ...I.dashboard };
        Cn.sharedFilters || (Cn.sharedFilters = []);
        const Xn = Cn.filters.map((kn) => ({ ...kn, key: kn.label, showDropdown: !0, usedBy: br(I) }));
        Cn.sharedFilters = [...Cn.sharedFilters, ...Xn], I.dashboard = { ...Cn, filters: void 0 };
      }
      const In = { [j]: Q };
      return { newConfig: I, datasets: In };
    }
  }, S = async (B, I) => {
    const j = B.multiDashboards[I];
    let Q = { ...tu, ...B, ...j, multiDashboards: B.multiDashboards, activeDashboard: I };
    return await m(Q);
  };
  return p ? /* @__PURE__ */ c.createElement(Wu, { isEditor: a, isDebug: i, initialState: p }) : /* @__PURE__ */ c.createElement(ai, null);
};
function us({ containerEl: n }) {
  const { config: r, setTempConfig: a, hostname: i, isDebug: p } = D.useContext(Ht);
  let { type: A } = r;
  switch (A) {
    case "map":
      return /* @__PURE__ */ c.createElement(dt, { component: "CdcMap" }, /* @__PURE__ */ c.createElement(zu, { isEditor: !0, isDebug: p, config: r, hostname: i, setConfig: a, containerEl: n }));
    case "waffle-chart":
      if (r.visualizationType === "Waffle" || r.visualizationType === "Gauge")
        return /* @__PURE__ */ c.createElement(dt, { component: "CdcWaffleChart" }, /* @__PURE__ */ c.createElement(Ku, { isEditor: !0, isDebug: p, config: r, setConfig: a }));
      break;
    case "chart":
      return /* @__PURE__ */ c.createElement(dt, { component: "CdcChart" }, /* @__PURE__ */ c.createElement(Vu, { isEditor: !0, isDebug: p, config: r, setConfig: a }));
    case "dashboard":
      return /* @__PURE__ */ c.createElement(dt, { component: "CdcDashboard" }, /* @__PURE__ */ c.createElement(as, { isEditor: !0, isDebug: p, config: r }));
    case "data-bite":
      return /* @__PURE__ */ c.createElement(dt, { component: "CdcDashboard" }, /* @__PURE__ */ c.createElement(qu, { isEditor: !0, isDebug: p, config: r, setConfig: a }));
    case "markup-include":
      return /* @__PURE__ */ c.createElement(dt, { component: "CdcDashboard" }, /* @__PURE__ */ c.createElement(Gu, { isEditor: !0, isDebug: p, config: r, setConfig: a }));
    default:
      return /* @__PURE__ */ c.createElement("p", null, "No visualization type selected.");
  }
}
const Lu = (n) => {
  let r = { ...n };
  return r.type === "dashboard" ? (r.datasets && Object.keys(r.datasets).forEach((a) => {
    delete r.datasets[a].formattedData, r.datasets[a].dataUrl && delete r.datasets[a].data;
  }), r.visualizations && Object.keys(r.visualizations).forEach((a) => {
    r.visualizations[a] = xo.omit(r.visualizations[a], ["runtime", "formattedData", "data"]);
  })) : (delete r.runtime, delete r.formattedData, r.dataUrl && delete r.data), r;
}, is = (n) => {
  if (n !== null) {
    let r = Lu(n);
    const a = JSON.stringify(r), i = new CustomEvent("updateVizConfig", { detail: a, bubbles: !0 });
    window.dispatchEvent(i);
  }
}, ls = (n) => {
  var r;
  if (n.type === "dashboard") {
    let a = !1, i;
    if (n.data || n.dataUrl) {
      a = !0, i = { ...n };
      const p = n.dataFileName || "dataset-1";
      i.datasets = {}, i.datasets[p] = {
        ...xo.pick(n, ["data", "dataUrl", "dataFileSourceType"]),
        dataFileName: p
      }, Object.keys(i.visualizations).forEach((C) => {
        const N = { dataKey: p, ...xo.pick(i, "dataDescription", "formattedData") };
        i.visualizations[C] = { ...i.visualizations[C], ...N };
      }), i = { ...i, ...{ data: [], dataUrl: "", dataFileName: "", dataFileSourceType: "", dataDescription: [], formattedData: [] } };
    }
    if ((r = n.dashboard) != null && r.filters) {
      a = !0, i = { ...n };
      const p = { ...i.dashboard };
      p.sharedFilters || (p.sharedFilters = []);
      const A = p.filters.map((C) => ({ ...C, key: C.label, showDropdown: !0, usedBy: Object.keys(i.visualizations) }));
      p.sharedFilters = [...p.sharedFilters, ...A], i.dashboard = { ...p, filters: void 0 };
    }
    if (a)
      return i;
  }
  return n;
};
const ss = (n, r) => {
  switch (r.type) {
    case "EDITOR_SAVE":
      return { ...n, config: r.payload, tempConfig: null };
    case "EDITOR_SET_CONFIG":
      return { ...n, config: r.payload };
    case "EDITOR_TEMP_SAVE":
      return { ...n, tempConfig: r.payload };
    case "EDITOR_SET_ERRORS":
      return { ...n, errors: r.payload };
    case "EDITOR_SET_VIEWPORT":
      return { ...n, currentViewport: r.payload };
    case "EDITOR_SET_GLOBALACTIVE":
      return { ...n, globalActive: r.payload };
    default:
      return n;
  }
}, cs = Xu(ss), ys = ({ config: n, hostname: r, containerEl: a, sharepath: i, isDebug: p }) => {
  const A = D.useMemo(() => {
    let B = 0;
    return (n != null && n.data || n != null && n.dataUrl) && (n != null && n.type) && (B = 2), { config: ls(n || { newViz: !0, errors: [], currentViewport: "lg" }), errors: [], currentViewport: "lg", globalActive: B, sharepath: i, isDebug: p, hostname: r };
  }, [n]);
  D.useEffect(() => {
    var B;
    ca && ((B = ca) == null || B.init());
  }, []);
  const [C, N] = D.useReducer(cs, A), _ = (B) => {
    is(JSON.parse(JSON.stringify(B))), N({ type: "EDITOR_TEMP_SAVE", payload: B });
  }, m = new Bu((B) => {
    const I = B[0];
    let { width: j } = I.contentRect, Q = Fu(j);
    N({ type: "EDITOR_SET_VIEWPORT", payload: Q });
  }), Sn = D.useCallback((B) => {
    B !== null && m.observe(B);
  }, []);
  D.useEffect(() => {
    let B = Lu(C.config);
    const I = JSON.stringify(B), j = new CustomEvent("updateVizConfig", { detail: I });
    window.dispatchEvent(j);
  }, [C.config]);
  const S = D.useMemo(() => {
    C.config.type !== "dashboard" ? C.config.formattedData : C.config.datasets && Object.keys(C.config.datasets).length > 0;
  }, [C.config.type, C.config.datasets]);
  return /* @__PURE__ */ c.createElement(ju, null, /* @__PURE__ */ c.createElement(Ht.Provider, { value: { ...C, setTempConfig: _ } }, /* @__PURE__ */ c.createElement(Gt.Provider, { value: N }, /* @__PURE__ */ c.createElement("div", { className: `cdc-open-viz-module cdc-editor ${C.currentViewport}`, ref: Sn }, /* @__PURE__ */ c.createElement(ml, { className: "top-level" }, /* @__PURE__ */ c.createElement(Wt, { title: "1. Choose Visualization Type", className: "choose-type" }, /* @__PURE__ */ c.createElement(ts, null)), /* @__PURE__ */ c.createElement(Wt, { title: "2. Import Data", className: "data-designer", disableRule: !C.config.type }, /* @__PURE__ */ c.createElement(Xl, null)), /* @__PURE__ */ c.createElement(Wt, { title: "3. Configure", className: "configure", disableRule: S }, /* @__PURE__ */ c.createElement(us, { containerEl: a })))))), /* @__PURE__ */ c.createElement(Yu, null));
}, xs = {
  title: "Components/Pages/CdcEditor",
  component: ys
}, Cs = {
  dashboard: {
    theme: "theme-blue"
  },
  rows: [[{
    width: 12
  }, {}, {}]],
  visualizations: {},
  table: {
    label: "Data Table",
    show: !0,
    showDownloadUrl: !1,
    showVertical: !0
  },
  newViz: !0,
  datasets: {
    "https://data.cdc.gov/resource/vdgb-f9s3.json": {
      data: [{
        surveyname: "American Indian Adult Tobacco Survey",
        surveynameabbrev: "AI ATS",
        year: "2007",
        e_cigarettes: "No",
        question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
        responses: "Don't know/Not sure"
      }, {
        surveyname: "American Indian Adult Tobacco Survey",
        surveynameabbrev: "AI ATS",
        year: "2007",
        e_cigarettes: "No",
        question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
        responses: "Refused"
      }, {
        surveyname: "American Indian Adult Tobacco Survey",
        surveynameabbrev: "AI ATS",
        year: "2007",
        e_cigarettes: "No",
        question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
        responses: "No"
      }]
    }
  },
  data: [{
    surveyname: "American Indian Adult Tobacco Survey",
    surveynameabbrev: "AI ATS",
    year: "2007",
    e_cigarettes: "No",
    question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
    responses: "Don't know/Not sure"
  }, {
    surveyname: "American Indian Adult Tobacco Survey",
    surveynameabbrev: "AI ATS",
    year: "2007",
    e_cigarettes: "No",
    question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
    responses: "Refused"
  }, {
    surveyname: "American Indian Adult Tobacco Survey",
    surveynameabbrev: "AI ATS",
    year: "2007",
    e_cigarettes: "No",
    question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
    responses: "No"
  }],
  type: "dashboard"
}, ko = {
  args: {
    config: Cs
  }
};
var ou, ru, au;
ko.parameters = {
  ...ko.parameters,
  docs: {
    ...(ou = ko.parameters) == null ? void 0 : ou.docs,
    source: {
      originalSource: `{
  args: {
    config
  }
}`,
      ...(au = (ru = ko.parameters) == null ? void 0 : ru.docs) == null ? void 0 : au.source
    }
  }
};
const Ws = ["DashboardEditor"];
export {
  ko as DashboardEditor,
  Ws as __namedExportsOrder,
  xs as default
};
