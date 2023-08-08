// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "2",

      macros: [
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
      ],
      tags: [
        {
          function: "__gaawc",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendPageView: true,
          vtp_enableSendToServerContainer: false,
          vtp_measurementId: "G-6NQ8DHJ9ZK",
          vtp_enableUserProperties: true,
          vtp_enableEuid: false,
          tag_id: 3,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [],
  };

  /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  var aa,
    da = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ea = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: da(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    fa =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ha;
  if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
  else {
    var ia;
    a: {
      var ja = { a: !0 },
        ka = {};
      try {
        ka.__proto__ = ja;
        ia = ka.a;
        break a;
      } catch (a) {}
      ia = !1;
    }
    ha = ia
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ma = ha,
    na = function (a, b) {
      a.prototype = fa(b.prototype);
      a.prototype.constructor = a;
      if (ma) ma(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.qm = b.prototype;
    },
    oa = this || self,
    pa = function (a) {
      return a;
    };
  var qa = function () {},
    ra = function (a) {
      return "function" === typeof a;
    },
    g = function (a) {
      return "string" === typeof a;
    },
    sa = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    ta = Array.isArray,
    ua = function (a, b) {
      if (a && ta(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    va = function (a, b) {
      if (!sa(a) || !sa(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    za = function (a, b) {
      for (var c = new xa(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    k = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Aa = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Ba = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ca = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Da = function (a) {
      var b = [];
      if (ta(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ea = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Fa = function () {
      return new Date(Date.now());
    },
    Ga = function () {
      return Fa().getTime();
    },
    xa = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  xa.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  xa.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ha = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ia = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ka = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    La = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ma = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Oa = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Pa = /^\w{1,9}$/,
    Qa = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      k(a, function (d, e) {
        Pa.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Ra = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function Sa() {
    for (var a = Ta, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Ua() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Ta, Va;
  function Wa(a) {
    Ta = Ta || Ua();
    Va = Va || Sa();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        h = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (h >> 4),
        p = ((h & 15) << 2) | (l >> 6),
        q = l & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Ta[m], Ta[n], Ta[p], Ta[q]);
    }
    return b.join("");
  }
  function Xa(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Va[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Ta = Ta || Ua();
    Va = Va || Sa();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != h &&
        ((c += String.fromCharCode(((f << 4) & 240) | (h >> 2))),
        64 != l && (c += String.fromCharCode(((h << 6) & 192) | l)));
    }
  }
  var Ya = {},
    Za = function (a, b) {
      Ya[a] = Ya[a] || [];
      Ya[a][b] = !0;
    },
    $a = function () {
      delete Ya.GA4_EVENT;
    },
    ab = function (a) {
      var b = Ya[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return Wa(c.join("")).replace(/\.+$/, "");
    };
  var bb = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var cb,
    db = function () {
      if (void 0 === cb) {
        var a = null,
          b = oa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: pa,
              createScript: pa,
              createScriptURL: pa,
            });
          } catch (c) {
            oa.console && oa.console.error(c.message);
          }
          cb = a;
        } else cb = a;
      }
      return cb;
    };
  var eb = function (a) {
    this.h = a;
  };
  eb.prototype.toString = function () {
    return this.h + "";
  };
  var fb = {};
  var gb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var hb, ib;
  a: {
    for (var jb = ["CLOSURE_FLAGS"], kb = oa, lb = 0; lb < jb.length; lb++)
      if (((kb = kb[jb[lb]]), null == kb)) {
        ib = null;
        break a;
      }
    ib = kb;
  }
  var mb = ib && ib[610401301];
  hb = null != mb ? mb : !1;
  function nb() {
    var a = oa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var ob,
    pb = oa.navigator;
  ob = pb ? pb.userAgentData || null : null;
  function qb(a) {
    return hb
      ? ob
        ? ob.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function rb(a) {
    return -1 != nb().indexOf(a);
  }
  function sb() {
    return hb ? !!ob && 0 < ob.brands.length : !1;
  }
  function tb() {
    return sb() ? !1 : rb("Opera");
  }
  function ub() {
    return rb("Firefox") || rb("FxiOS");
  }
  function vb() {
    return sb()
      ? qb("Chromium")
      : ((rb("Chrome") || rb("CriOS")) && !(sb() ? 0 : rb("Edge"))) ||
          rb("Silk");
  }
  var wb = {},
    xb = function (a) {
      this.h = a;
    };
  xb.prototype.toString = function () {
    return this.h.toString();
  };
  var yb = function (a) {
    return a instanceof xb && a.constructor === xb
      ? a.h
      : "type_error:SafeHtml";
  }; /*
    
     SPDX-License-Identifier: Apache-2.0
    */
  function zb(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  (function () {
    return "";
  })
    .toString()
    .indexOf("`");
  function Ab(a) {
    var b = (a = Bb(a)),
      c = db(),
      d = c ? c.createHTML(b) : b;
    return new xb(d, wb);
  }
  function Bb(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var z = window,
    D = document,
    Cb = navigator,
    Db = D.currentScript && D.currentScript.src,
    Eb = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Fb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Gb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Hb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Ib(a, b, c) {
    b &&
      k(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Jb = function (a, b, c, d, e) {
      var f = D.createElement("script");
      Ib(f, d, Gb);
      f.type = "text/javascript";
      f.async = !0;
      var h,
        l = Bb(a),
        m = db(),
        n = m ? m.createScriptURL(l) : l;
      h = new eb(n, fb);
      f.src =
        h instanceof eb && h.constructor === eb
          ? h.h
          : "type_error:TrustedResourceUrl";
      var p,
        q,
        r,
        t =
          null ==
          (r = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : r.call(q, "script[nonce]");
      (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", p);
      Fb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var u = D.getElementsByTagName("script")[0] || D.body || D.head;
        u.parentNode.insertBefore(f, u);
      }
      return f;
    },
    Kb = function () {
      if (Db) {
        var a = Db.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Lb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var h = e,
        l = !1;
      h || ((h = D.createElement("iframe")), (l = !0));
      Ib(h, c, Hb);
      d &&
        k(d, function (n, p) {
          h.dataset[n] = p;
        });
      f &&
        ((h.height = "0"),
        (h.width = "0"),
        (h.style.display = "none"),
        (h.style.visibility = "hidden"));
      if (l) {
        var m = (D.body && D.body.lastChild) || D.body || D.head;
        m.parentNode.insertBefore(h, m);
      }
      Fb(h, b);
      void 0 !== a && (h.src = a);
      return h;
    },
    Mb = function (a, b, c, d) {
      var e = new Image(1, 1);
      Ib(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    Nb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Ob = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    E = function (a) {
      z.setTimeout(a, 0);
    },
    Pb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Qb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Rb = function (a) {
      var b = D.createElement("div"),
        c = b,
        d = Ab("A<div>" + a + "</div>");
      1 === c.nodeType && zb(c);
      c.innerHTML = yb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Sb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Tb = function (a) {
      var b;
      try {
        b = Cb.sendBeacon && Cb.sendBeacon(a);
      } catch (c) {
        Za("TAGGING", 15);
      }
      b || Mb(a);
    },
    Ub = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Vb = function (a) {
      var b = {
        headers: { "Attribution-Reporting-Eligible": "trigger" },
        keepalive: !0,
        attributionReporting: { eventSourceEligible: !0, triggerEligible: !0 },
      };
      try {
        z.fetch(a, b);
      } catch (c) {}
    },
    Wb = function () {
      var a = z.performance;
      if (a && ra(a.now)) return a.now();
    },
    Xb = function () {
      return z.performance || void 0;
    }; /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Yb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Zb = function (a) {
      if (null == a) return String(a);
      var b = Yb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    $b = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    ac = function (a) {
      if (!a || "object" != Zb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !$b(a, "constructor") &&
          !$b(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || $b(a, b);
    },
    G = function (a, b) {
      var c = b || ("array" == Zb(a) ? [] : {}),
        d;
      for (d in a)
        if ($b(a, d)) {
          var e = a[d];
          "array" == Zb(e)
            ? ("array" != Zb(c[d]) && (c[d] = []), (c[d] = G(e, c[d])))
            : ac(e)
            ? (ac(c[d]) || (c[d] = {}), (c[d] = G(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var bc = function (a) {
    if (void 0 === a || ta(a) || ac(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  function cc(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  function dc(a) {
    switch (a) {
      case 1:
        return "G";
      case 3:
        return "g";
      case 2:
        return "D";
      case 4:
        return "d";
      case 0:
        return "g";
      default:
        return "g";
    }
  }
  function ec(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + cc(c) + cc(d);
      case 1:
        return "G2" + dc(c) + dc(d);
      default:
        return "g1--";
    }
  }
  var fc = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Li: a("consent"),
      Fg: a("convert_case_to"),
      Gg: a("convert_false_to"),
      Hg: a("convert_null_to"),
      Ig: a("convert_true_to"),
      Jg: a("convert_undefined_to"),
      Ql: a("debug_mode_metadata"),
      la: a("function"),
      Jf: a("instance_name"),
      Qj: a("live_only"),
      Rj: a("malware_disabled"),
      Sj: a("metadata"),
      Vj: a("original_activity_id"),
      Yl: a("original_vendor_template_id"),
      Xl: a("once_on_load"),
      Uj: a("once_per_event"),
      Mh: a("once_per_load"),
      dm: a("priority_override"),
      fm: a("respected_consent_types"),
      Qh: a("setup_tags"),
      od: a("tag_id"),
      Vh: a("teardown_tags"),
    };
  })();
  var Cc = [],
    Dc = function (a) {
      return void 0 == Cc[a] ? !1 : Cc[a];
    };
  var Ec;
  var Fc = [],
    Gc = [],
    Hc = [],
    Ic = [],
    Jc = [],
    Kc = {},
    Lc,
    Mc,
    Oc = function () {
      var a = Nc;
      Mc = Mc || a;
    },
    Pc = function (a) {},
    Qc,
    Rc = [],
    Sc = function (a, b) {
      var c = a[fc.la],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Kc[c],
        f = b && 2 === b.type && d.xi && e && -1 !== Rc.indexOf(c),
        h = {},
        l = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf("vtp_") &&
          (e && d && d.ai && d.ai(a[m]), e && (h[m] = a[m]), !e || f) &&
          (l[m.substr(4)] = a[m]);
      e && d && d.Zh && (h.vtp_gtmCachedValues = d.Zh);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";
            else {
              var q;
              switch (b.type) {
                case 2:
                  q = Fc[p];
                  break;
                case 1:
                  q = Ic[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = q && q[fc.Jf];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && ((h.vtp_gtmEntityIndex = b.index), (h.vtp_gtmEntityName = b.name));
      }
      var t, u;
      e && (t = e(h));
      if (!e || f) u = Ec(c, l, b);
      f && t !== u && d && d.xi(d.id, c);
      return e ? t : u;
    },
    Uc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Tc(a[e], b, c));
      return d;
    },
    Tc = function (a, b, c) {
      if (ta(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Tc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var h = Fc[f];
            if (!h || b.ag(h)) return;
            c[f] = !0;
            var l = String(h[fc.Jf]);
            try {
              var m = Uc(h, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Sc(m, { event: b, index: f, type: 2, name: l });
              Qc && (d = Qc.kk(d, m));
            } catch (y) {
              b.mi && b.mi(y, Number(f), l), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[Tc(a[n], b, c)] = Tc(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Tc(a[q], b, c);
              Mc && (p = p || r === Mc.ve);
              d.push(r);
            }
            return Mc && p ? Mc.lk(d) : d.join("");
          case "escape":
            d = Tc(a[1], b, c);
            if (Mc && ta(a[1]) && "macro" === a[1][0] && Mc.Ok(a))
              return Mc.pl(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) gc[a[t]] && (d = gc[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Ic[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { gi: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[fc.la] = a[1];
            var w = Vc(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Vc = function (a, b, c) {
      try {
        return Lc(Uc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    Wc = function (a) {
      var b = a[fc.la];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!Kc[b];
    };
  var Zc = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = Xc(a), f = 0; f < Gc.length; f++) {
        var h = Gc[f],
          l = Yc(h, e);
        if (l) {
          for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(h.block || []);
        } else null === l && b(h.block || []);
      }
      for (var p = [], q = 0; q < Ic.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Yc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], h = 0; h < f.length; h++) {
        var l = b(f[h]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    Xc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Vc(Hc[c], a));
        return b[c];
      };
    };
  var $c = {
    kk: function (a, b) {
      b[fc.Fg] &&
        "string" === typeof a &&
        (a = 1 == b[fc.Fg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(fc.Hg) && null === a && (a = b[fc.Hg]);
      b.hasOwnProperty(fc.Jg) && void 0 === a && (a = b[fc.Jg]);
      b.hasOwnProperty(fc.Ig) && !0 === a && (a = b[fc.Ig]);
      b.hasOwnProperty(fc.Gg) && !1 === a && (a = b[fc.Gg]);
      return a;
    },
  };
  var od = [
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector",
    ],
    pd = new xa();
  var wd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function xd(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      (a << 2) | b
    ];
  }
  var zd = function (a) {
      return yd ? D.querySelectorAll(a) : null;
    },
    Ad = function (a, b) {
      if (!yd) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!D.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Bd = !1;
  if (D.querySelectorAll)
    try {
      var Cd = D.querySelectorAll(":root");
      Cd && 1 == Cd.length && Cd[0] == D.documentElement && (Bd = !0);
    } catch (a) {}
  var yd = Bd;
  var J = function (a) {
    Za("GTM", a);
  };
  var K = {
      g: {
        Bc: "ad_personalization",
        F: "ad_storage",
        Da: "ad_user_data",
        M: "analytics_storage",
        Ub: "region",
        Qd: "consent_updated",
        ef: "wait_for_update",
        Pi: "ads",
        Pl: "all",
        Qi: "android",
        Ri: "chrome",
        Si: "playstore",
        Ti: "search",
        Ui: "shopping",
        Vi: "youtube",
        Wi: "app_remove",
        Xi: "app_store_refund",
        Yi: "app_store_subscription_cancel",
        Zi: "app_store_subscription_convert",
        aj: "app_store_subscription_renew",
        Kg: "add_payment_info",
        Lg: "add_shipping_info",
        Vb: "add_to_cart",
        Wb: "remove_from_cart",
        Mg: "view_cart",
        Db: "begin_checkout",
        Xb: "select_item",
        Ua: "view_item_list",
        lb: "select_promotion",
        Va: "view_promotion",
        na: "purchase",
        Yb: "refund",
        za: "view_item",
        Ng: "add_to_wishlist",
        bj: "exception",
        cj: "first_open",
        dj: "first_visit",
        fa: "gtag.config",
        Ea: "gtag.get",
        ej: "in_app_purchase",
        Zb: "page_view",
        fj: "screen_view",
        gj: "session_start",
        ij: "timing_complete",
        jj: "track_social",
        Sd: "user_engagement",
        nb: "gclid",
        ia: "ads_data_redaction",
        W: "allow_ad_personalization_signals",
        Td: "allow_custom_scripts",
        lf: "allow_display_features",
        Ud: "allow_enhanced_conversions",
        ob: "allow_google_signals",
        Aa: "allow_interest_groups",
        kj: "app_id",
        lj: "app_installer_id",
        mj: "app_name",
        nj: "app_version",
        ac: "auid",
        oj: "auto_detection_enabled",
        Eb: "aw_remarketing",
        nf: "aw_remarketing_only",
        Vd: "discount",
        Wd: "aw_feed_country",
        Xd: "aw_feed_language",
        R: "items",
        Yd: "aw_merchant_id",
        Og: "aw_basket_type",
        Dc: "campaign_content",
        Ec: "campaign_id",
        Fc: "campaign_medium",
        Gc: "campaign_name",
        Hc: "campaign",
        Ic: "campaign_source",
        Jc: "campaign_term",
        Wa: "client_id",
        pj: "content_group",
        qj: "content_type",
        Fa: "conversion_cookie_prefix",
        Kc: "conversion_id",
        sa: "conversion_linker",
        Fb: "conversion_api",
        Ka: "cookie_domain",
        Ba: "cookie_expires",
        La: "cookie_flags",
        bc: "cookie_name",
        Lc: "cookie_path",
        Ga: "cookie_prefix",
        Ya: "cookie_update",
        pb: "country",
        oa: "currency",
        Zd: "customer_lifetime_value",
        fc: "custom_map",
        Pg: "gcldc",
        rj: "debug_mode",
        T: "developer_id",
        sj: "disable_merchant_reported_purchases",
        hc: "dc_custom_params",
        Qg: "dc_natural_search",
        Rg: "dynamic_event_settings",
        Sg: "affiliation",
        ae: "checkout_option",
        pf: "checkout_step",
        Tg: "coupon",
        Mc: "item_list_name",
        qf: "list_name",
        tj: "promotions",
        Nc: "shipping",
        rf: "tax",
        be: "engagement_time_msec",
        Oc: "enhanced_client_id",
        ce: "enhanced_conversions",
        Ug: "enhanced_conversions_automatic_settings",
        de: "estimated_delivery_date",
        tf: "euid_logged_in_state",
        Pc: "event_callback",
        uj: "event_category",
        qb: "event_developer_id_string",
        vj: "event_label",
        Vg: "event",
        ee: "event_settings",
        fe: "event_timeout",
        wj: "description",
        xj: "fatal",
        yj: "experiments",
        uf: "firebase_id",
        he: "first_party_collection",
        ie: "_x_20",
        Gb: "_x_19",
        Wg: "fledge",
        Xg: "flight_error_code",
        Yg: "flight_error_message",
        Zg: "fl_activity_category",
        ah: "fl_activity_group",
        vf: "fl_advertiser_id",
        bh: "fl_ar_dedupe",
        eh: "fl_random_number",
        fh: "tran",
        gh: "u",
        je: "gac_gclid",
        ic: "gac_wbraid",
        hh: "gac_wbraid_multiple_conversions",
        ih: "ga_restrict_domain",
        wf: "ga_temp_client_id",
        ke: "gdpr_applies",
        jh: "geo_granularity",
        Za: "value_callback",
        Ma: "value_key",
        Sl: "google_ono",
        ab: "google_signals",
        kh: "google_tld",
        me: "groups",
        lh: "gsa_experiment_id",
        mh: "iframe_state",
        ne: "ignore_referrer",
        xf: "internal_traffic_results",
        sb: "is_legacy_converted",
        tb: "is_legacy_loaded",
        oe: "is_passthrough",
        wa: "language",
        yf: "legacy_developer_id_string",
        xa: "linker",
        jc: "accept_incoming",
        ub: "decorate_forms",
        N: "domains",
        Hb: "url_position",
        nh: "method",
        zj: "name",
        Qc: "new_customer",
        oh: "non_interaction",
        Aj: "optimize_id",
        Bj: "page_hostname",
        Rc: "page_path",
        Ca: "page_referrer",
        vb: "page_title",
        ph: "passengers",
        qh: "phone_conversion_callback",
        Cj: "phone_conversion_country_code",
        rh: "phone_conversion_css_class",
        Dj: "phone_conversion_ids",
        sh: "phone_conversion_number",
        th: "phone_conversion_options",
        kc: "quantity",
        Sc: "redact_device_info",
        zf: "redact_enhanced_user_id",
        Ej: "redact_ga_client_id",
        Fj: "redact_user_id",
        pe: "referral_exclusion_definition",
        Ib: "restricted_data_processing",
        Gj: "retoken",
        Hj: "sample_rate",
        Af: "screen_name",
        wb: "screen_resolution",
        Ij: "search_term",
        Na: "send_page_view",
        Jb: "send_to",
        Tc: "server_container_url",
        Uc: "session_duration",
        qe: "session_engaged",
        Bf: "session_engaged_time",
        cb: "session_id",
        se: "session_number",
        Vc: "delivery_postal_code",
        uh: "temporary_client_id",
        Cf: "topmost_url",
        Jj: "tracking_id",
        Df: "traffic_type",
        ja: "transaction_id",
        Kb: "transport_url",
        vh: "trip_type",
        mc: "update",
        eb: "url_passthrough",
        Wc: "_user_agent_architecture",
        Xc: "_user_agent_bitness",
        Yc: "_user_agent_full_version_list",
        Zc: "_user_agent_mobile",
        ad: "_user_agent_model",
        bd: "_user_agent_platform",
        dd: "_user_agent_platform_version",
        ed: "_user_agent_wow64",
        ka: "user_data",
        wh: "user_data_auto_latency",
        xh: "user_data_auto_meta",
        yh: "user_data_auto_multi",
        zh: "user_data_auto_selectors",
        Ah: "user_data_auto_status",
        Ef: "user_data_mode",
        ue: "user_data_settings",
        ya: "user_id",
        Oa: "user_properties",
        Bh: "_user_region",
        Ch: "us_privacy_string",
        X: "value",
        nc: "wbraid",
        Dh: "wbraid_multiple_conversions",
        Jh: "_host_name",
        Kh: "_in_page_command",
        Lh: "_is_passthrough_cid",
        jd: "non_personalized_ads",
        nd: "_sst_parameters",
        Xa: "conversion_label",
        qa: "page_location",
        rb: "global_developer_id_string",
        te: "tc_privacy_string",
      },
    },
    $d = {},
    ae = Object.freeze(
      (($d[K.g.W] = 1),
      ($d[K.g.lf] = 1),
      ($d[K.g.Ud] = 1),
      ($d[K.g.ob] = 1),
      ($d[K.g.R] = 1),
      ($d[K.g.Ka] = 1),
      ($d[K.g.Ba] = 1),
      ($d[K.g.La] = 1),
      ($d[K.g.bc] = 1),
      ($d[K.g.Lc] = 1),
      ($d[K.g.Ga] = 1),
      ($d[K.g.Ya] = 1),
      ($d[K.g.fc] = 1),
      ($d[K.g.T] = 1),
      ($d[K.g.Rg] = 1),
      ($d[K.g.Pc] = 1),
      ($d[K.g.ee] = 1),
      ($d[K.g.fe] = 1),
      ($d[K.g.he] = 1),
      ($d[K.g.ih] = 1),
      ($d[K.g.ab] = 1),
      ($d[K.g.kh] = 1),
      ($d[K.g.me] = 1),
      ($d[K.g.xf] = 1),
      ($d[K.g.sb] = 1),
      ($d[K.g.tb] = 1),
      ($d[K.g.xa] = 1),
      ($d[K.g.zf] = 1),
      ($d[K.g.pe] = 1),
      ($d[K.g.Ib] = 1),
      ($d[K.g.Na] = 1),
      ($d[K.g.Jb] = 1),
      ($d[K.g.Tc] = 1),
      ($d[K.g.Uc] = 1),
      ($d[K.g.Bf] = 1),
      ($d[K.g.Vc] = 1),
      ($d[K.g.Kb] = 1),
      ($d[K.g.mc] = 1),
      ($d[K.g.ue] = 1),
      ($d[K.g.Oa] = 1),
      ($d[K.g.nd] = 1),
      $d)
    );
  Object.freeze([
    K.g.qa,
    K.g.Ca,
    K.g.vb,
    K.g.wa,
    K.g.Af,
    K.g.ya,
    K.g.uf,
    K.g.pj,
  ]);
  var be = {},
    ce = Object.freeze(
      ((be[K.g.Wi] = 1),
      (be[K.g.Xi] = 1),
      (be[K.g.Yi] = 1),
      (be[K.g.Zi] = 1),
      (be[K.g.aj] = 1),
      (be[K.g.cj] = 1),
      (be[K.g.dj] = 1),
      (be[K.g.ej] = 1),
      (be[K.g.gj] = 1),
      (be[K.g.Sd] = 1),
      be)
    ),
    de = {},
    ee = Object.freeze(
      ((de[K.g.Kg] = 1),
      (de[K.g.Lg] = 1),
      (de[K.g.Vb] = 1),
      (de[K.g.Wb] = 1),
      (de[K.g.Mg] = 1),
      (de[K.g.Db] = 1),
      (de[K.g.Xb] = 1),
      (de[K.g.Ua] = 1),
      (de[K.g.lb] = 1),
      (de[K.g.Va] = 1),
      (de[K.g.na] = 1),
      (de[K.g.Yb] = 1),
      (de[K.g.za] = 1),
      (de[K.g.Ng] = 1),
      de)
    ),
    fe = Object.freeze([K.g.W, K.g.ob, K.g.Ya]),
    ge = Object.freeze([].concat(fe)),
    he = Object.freeze([K.g.Ba, K.g.fe, K.g.Uc, K.g.Bf, K.g.be]),
    ie = Object.freeze([].concat(he)),
    je = {},
    ke =
      ((je[K.g.F] = "1"),
      (je[K.g.M] = "2"),
      (je[K.g.Da] = "3"),
      (je[K.g.Bc] = "4"),
      je),
    le = {},
    me = Object.freeze(
      ((le[K.g.W] = 1),
      (le[K.g.Ud] = 1),
      (le[K.g.Aa] = 1),
      (le[K.g.Eb] = 1),
      (le[K.g.nf] = 1),
      (le[K.g.Vd] = 1),
      (le[K.g.Wd] = 1),
      (le[K.g.Xd] = 1),
      (le[K.g.R] = 1),
      (le[K.g.Yd] = 1),
      (le[K.g.Fa] = 1),
      (le[K.g.sa] = 1),
      (le[K.g.Ka] = 1),
      (le[K.g.Ba] = 1),
      (le[K.g.La] = 1),
      (le[K.g.Ga] = 1),
      (le[K.g.oa] = 1),
      (le[K.g.Zd] = 1),
      (le[K.g.T] = 1),
      (le[K.g.sj] = 1),
      (le[K.g.ce] = 1),
      (le[K.g.de] = 1),
      (le[K.g.uf] = 1),
      (le[K.g.he] = 1),
      (le[K.g.sb] = 1),
      (le[K.g.tb] = 1),
      (le[K.g.wa] = 1),
      (le[K.g.Qc] = 1),
      (le[K.g.qa] = 1),
      (le[K.g.Ca] = 1),
      (le[K.g.qh] = 1),
      (le[K.g.rh] = 1),
      (le[K.g.sh] = 1),
      (le[K.g.th] = 1),
      (le[K.g.Ib] = 1),
      (le[K.g.Na] = 1),
      (le[K.g.Jb] = 1),
      (le[K.g.Tc] = 1),
      (le[K.g.Vc] = 1),
      (le[K.g.ja] = 1),
      (le[K.g.Kb] = 1),
      (le[K.g.mc] = 1),
      (le[K.g.eb] = 1),
      (le[K.g.ka] = 1),
      (le[K.g.ya] = 1),
      (le[K.g.X] = 1),
      le)
    ),
    ne = {},
    oe = Object.freeze(
      ((ne[K.g.Ti] = "s"),
      (ne[K.g.Vi] = "y"),
      (ne[K.g.Qi] = "n"),
      (ne[K.g.Ri] = "c"),
      (ne[K.g.Si] = "p"),
      (ne[K.g.Ui] = "h"),
      (ne[K.g.Pi] = "a"),
      ne)
    );
  Object.freeze(K.g);
  var pe = {},
    re = (z.google_tag_manager = z.google_tag_manager || {}),
    se = Math.random();
  pe.Lf = "3820";
  pe.md = Number("0") || 0;
  pe.ba = "dataLayer";
  pe.Ni =
    "ChEI8M/HpgYQyaqwzefkyIzYARIlAPP/gI9e+dzhu7Pb9grfNUsDmpWGIOxbbBAuG3mXze93n82zKRoCDBw\x3d";
  var te = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    ue = { __paused: 1, __tg: 1 },
    ve;
  for (ve in te) te.hasOwnProperty(ve) && (ue[ve] = 1);
  var we = Ca(""),
    xe,
    ye = !1;
  xe = ye;
  var ze,
    Ae = !1;
  ze = Ae;
  var Be,
    Ce = !1;
  Be = Ce;
  var De,
    Ee = !1;
  De = Ee;
  pe.Rd = "www.googletagmanager.com";
  var Fe = "" + pe.Rd + (xe ? "/gtag/js" : "/gtm.js"),
    Ge = null,
    He = null,
    Ie = {},
    Je = {},
    Ke = {},
    Le = function () {
      var a = re.sequence || 1;
      re.sequence = a + 1;
      return a;
    };
  pe.Mi = "";
  var Me = "";
  pe.Ae = Me;
  var Ne = new xa(),
    Oe = {},
    Pe = {},
    Se = {
      name: pe.ba,
      set: function (a, b) {
        G(Oa(a, b), Oe);
        Qe();
      },
      get: function (a) {
        return Re(a, 2);
      },
      reset: function () {
        Ne = new xa();
        Oe = {};
        Qe();
      },
    },
    Re = function (a, b) {
      return 2 != b ? Ne.get(a) : Te(a);
    },
    Te = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Oe, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Ue = function (a, b) {
      Pe.hasOwnProperty(a) || (Ne.set(a, b), G(Oa(a, b), Oe), Qe());
    },
    Qe = function (a) {
      k(Pe, function (b, c) {
        Ne.set(b, c);
        G(Oa(b), Oe);
        G(Oa(b, c), Oe);
        a && delete Pe[b];
      });
    },
    Ve = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Te(a) : Ne.get(a);
      "array" === Zb(d) || "object" === Zb(d) ? (c = G(d)) : (c = d);
      return c;
    };
  var N = [];
  N[5] = !0;
  N[6] = !0;
  N[12] = !0;
  N[7] = !0;
  N[8] = !0;
  N[22] = !0;
  N[9] = !0;
  N[10] = !0;
  N[11] = !0;
  N[14] = !0;
  N[15] = !0;
  N[16] = !0;
  N[18] = !0;
  N[24] = !0;
  N[25] = !0;
  N[26] = !0;
  N[28] = !0;
  N[20] = !0;
  N[29] = !0;
  N[32] = !0;
  N[33] = !0;
  N[34] = !0;
  N[35] = !0;
  N[37] = !0;
  N[38] = !0;
  N[40] = !0;
  N[42] = !0;
  N[43] = !0;
  N[44] = !0;
  N[45] = !0;
  N[46] = !0;
  N[57] = !0;
  N[58] = !0;
  N[59] = !0;
  N[60] = !0;
  N[62] = !0;
  N[63] = !0;
  N[68] = !0;
  N[69] = !0;
  N[72] = !0;
  N[74] = !0;
  N[76] = !0;
  N[77] = !0;
  N[79] = !0;
  N[80] = !0;
  N[82] = !0;
  N[83] = !0;
  N[84] = !0;
  a: {
    for (var We = void 0, Xe = void 0, Ye = 0; We === Xe; )
      if (
        ((We = Math.floor(2 * Math.random())),
        (Xe = Math.floor(2 * Math.random())),
        Ye++,
        20 < Ye)
      )
        break a;
    We ? (N[87] = !0) : (N[88] = !0);
  }
  O(88) ? (Cc[6] = !0) : O(87) && (Cc[5] = !0);
  N[91] = !0;
  N[94] = !0;
  function O(a) {
    return !!N[a];
  }
  var Ze = function (a) {
    Za("HEALTH", a);
  };
  var $e;
  try {
    $e = JSON.parse(
      Xa(
        "eyIwIjoiSU4iLCIxIjoiSU4tV0IiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6IiJ9"
      )
    );
  } catch (a) {
    J(123), Ze(2), ($e = {});
  }
  var af = function () {
      return $e["0"] || "";
    },
    bf = function () {
      var a = !1;
      return a;
    },
    cf = function () {
      return !!$e["6"];
    },
    df = function () {
      var a = "";
      return a;
    },
    ef = function () {
      var a = !1;
      return a;
    },
    ff = function () {
      var a = "";
      return a;
    };
  var gf,
    hf = !1,
    jf = function (a) {
      if (!hf) {
        hf = !0;
        gf = gf || {};
      }
      return gf[a];
    };
  var kf = function () {
      var a = z.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    lf = function (a) {
      if (D.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
        return !0;
      var c = z.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          h = e.filter;
        if (h) {
          var l = h.indexOf("opacity(");
          0 <= l &&
            ((h = h.substring(l + 8, h.indexOf(")", l))),
            "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)),
            (f = Math.min(h, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = z.getComputedStyle(d, null));
      }
      return !1;
    };
  var uf = /:[0-9]+$/,
    vf = /^\d+\.fls\.doubleclick\.net$/,
    zf = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var h = f.slice(1).join("=");
          return c ? h : decodeURIComponent(h).replace(/\+/g, " ");
        }
      }
    },
    Cf = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Af(a.protocol) || Af(z.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || z.location.hostname)
            .replace(uf, "")
            .toLowerCase());
      return Bf(a, b, c, d, e);
    },
    Bf = function (a, b, c, d, e) {
      var f,
        h = Af(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Df(a);
          break;
        case "protocol":
          f = h;
          break;
        case "host":
          f = a.hostname.replace(uf, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === h ? 80 : "https" === h ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || Za("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = zf(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Af = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Df = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Ef = function (a) {
      var b = D.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Za("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(uf, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    Ff = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Ef(a),
        f = a.split(/[?#]/)[0],
        h = e.search,
        l = e.hash;
      "?" === h[0] && (h = h.substring(1));
      "#" === l[0] && (l = l.substring(1));
      h = c(h);
      l = c(l);
      "" !== h && (h = "?" + h);
      "" !== l && (l = "#" + l);
      var m = "" + f + h + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    Gf = function (a) {
      var b = Ef(z.location.href),
        c = Cf(b, "host", !1);
      if (c && c.match(vf)) {
        var d = Cf(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  var zg = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Ag = function (a) {
    Ag[" "](a);
    return a;
  };
  Ag[" "] = function () {};
  var Cg = function () {
    var a = Bg,
      b = "Yf";
    if (a.Yf && a.hasOwnProperty(b)) return a.Yf;
    var c = new a();
    return (a.Yf = c);
  };
  var Bg = function () {
    var a = {};
    this.h = function () {
      var b = zg.h,
        c = zg.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.B = function () {
      a[zg.h] = !0;
    };
  };
  var Dg = !1,
    Eg = !1,
    Fg = [],
    Gg = {},
    Hg = { ad_storage: !1, ad_user_data: !1, ad_personalization: !1 };
  function Ig() {
    var a = Eb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        cps: {},
        default: Jg,
        update: Kg,
        declare: Lg,
        implicit: Mg,
        addListener: Ng,
        notifyListeners: Og,
        setCps: Pg,
        active: !1,
        usedDeclare: !1,
        usedDefault: !1,
        usedUpdate: !1,
        usedImplicit: !1,
        usedSetCps: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function Qg(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function Lg(a, b, c, d, e) {
    var f = Ig();
    f.active = !0;
    f.usedDeclare = !0;
    var h = f.entries,
      l = h[a] || {},
      m = l.declare_region,
      n = c && g(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (Qg(n, m, d, e)) {
      var p = {
        region: l.region,
        declare_region: n,
        declare: "granted" === b,
        implicit: l.implicit,
        default: l.default,
        update: l.update,
        quiet: l.quiet,
      };
      if ("" !== d || !1 !== l.declare) h[a] = p;
    }
  }
  function Mg(a, b) {
    var c = Ig();
    c.active = !0;
    c.usedImplicit = !0;
    var d = c.entries,
      e = (d[a] = d[a] || {});
    !1 !== e.implicit && (e.implicit = "granted" === b);
  }
  function Jg(a, b, c, d, e, f) {
    var h = Ig();
    h.usedDefault ||
      (!h.accessedDefault && !h.accessedAny) ||
      (h.wasSetLate = !0);
    h.active = !0;
    h.usedDefault = !0;
    Za("TAGGING", 19);
    if (void 0 == b) Za("TAGGING", 18);
    else {
      var l = h.entries,
        m = l[a] || {},
        n = m.region,
        p = c && g(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if (Qg(p, n, d, e)) {
        var q = !!(f && 0 < f && void 0 === m.update),
          r = {
            region: p,
            declare_region: m.declare_region,
            implicit: m.implicit,
            default: "granted" === b,
            declare: m.declare,
            update: m.update,
            quiet: q,
          };
        if ("" !== d || !1 !== m.default) l[a] = r;
        q &&
          z.setTimeout(function () {
            if (l[a] === r && r.quiet) {
              r.quiet = !1;
              var t = [a];
              if (Dc(4))
                for (var u in Gg)
                  Gg.hasOwnProperty(u) && Gg[u] === a && t.push(u);
              for (var v = 0; v < t.length; v++) Rg(t[v]);
              Og();
              Za("TAGGING", 2);
            }
          }, f);
      }
    }
  }
  function Kg(a, b) {
    var c = Ig();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = Sg(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var h = Sg(c, a),
        l = [a];
      if (Dc(4))
        for (var m in Gg) Gg.hasOwnProperty(m) && Gg[m] === a && l.push(m);
      if (f.quiet) {
        f.quiet = !1;
        for (var n = 0; n < l.length; n++) Rg(l[n]);
      } else if (h !== d) for (var p = 0; p < l.length; p++) Rg(l[p]);
    }
  }
  function Pg(a, b, c, d, e) {
    var f = Ig(),
      h;
    a: {
      var l = f.cps,
        m,
        n = l[a] || {},
        p = n.region,
        q = c && g(c) ? c.toUpperCase() : void 0;
      m = d.toUpperCase();
      if (Qg(q, p, m, e.toUpperCase())) {
        var r = { enabled: "granted" === b, region: q };
        if ("" !== m || !1 !== n.enabled) {
          l[a] = r;
          h = !0;
          break a;
        }
      }
      h = !1;
    }
    h && (f.usedSetCps = !0);
  }
  function Ng(a, b) {
    Fg.push({ consentTypes: a, tk: b });
  }
  function Rg(a) {
    for (var b = 0; b < Fg.length; ++b) {
      var c = Fg[b];
      ta(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.ri = !0);
    }
  }
  function Og(a, b) {
    for (var c = 0; c < Fg.length; ++c) {
      var d = Fg[c];
      if (d.ri) {
        d.ri = !1;
        try {
          d.tk({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function Sg(a, b) {
    var c = a.entries,
      d = c[b] || {},
      e = d.update;
    if (void 0 !== e) return e ? 1 : 2;
    e = d.default;
    if (void 0 !== e) return e ? 1 : 2;
    if (Dc(4) && Gg.hasOwnProperty(b)) {
      var f = c[Gg[b]] || {};
      e = f.update;
      if (void 0 !== e) return e ? 1 : 2;
      e = f.default;
      if (void 0 !== e) return e ? 1 : 2;
    }
    e = d.declare;
    if (void 0 !== e) return e ? 1 : 2;
    if (Dc(3)) {
      e = d.implicit;
      if (void 0 !== e) return e ? 3 : 4;
      if (Hg.hasOwnProperty(b)) return Hg[b] ? 3 : 4;
    }
    return 0;
  }
  var Tg = function (a) {
      var b = Ig();
      b.accessedAny = !0;
      switch (Sg(b, a)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    },
    Ug = function (a) {
      var b = Ig();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Vg = function () {
      if (!Cg().h()) return !1;
      var a = Ig();
      a.accessedAny = !0;
      return a.active;
    },
    Wg = function () {
      var a = Ig();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Xg = function (a, b) {
      Ig().addListener(a, b);
    },
    Yg = function (a, b) {
      Ig().notifyListeners(a, b);
    },
    Zg = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Ug(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Xg(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    $g = function (a, b) {
      function c() {
        for (var f = [], h = 0; h < d.length; h++) {
          var l = d[h];
          Tg(l) && !e[l] && (f.push(l), (e[l] = !0));
        }
        return f;
      }
      var d = g(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Xg(d, function (f) {
          var h = c();
          0 < h.length && ((f.consentTypes = h), a(f));
        });
    };
  function ah() {}
  function bh() {}
  var ch = [K.g.F, K.g.M, K.g.Da, K.g.Bc],
    dh = function (a) {
      for (
        var b = a[K.g.Ub], c = Array.isArray(b) ? b : [b], d = { zd: 0 };
        d.zd < c.length;
        d = { zd: d.zd }, ++d.zd
      )
        k(
          a,
          (function (e) {
            return function (f, h) {
              if (f !== K.g.Ub) {
                var l = c[e.zd],
                  m = af(),
                  n = $e["1"] || "";
                Eg = !0;
                Dg && Za("TAGGING", 20);
                Ig().declare(f, h, l, m, n);
              }
            };
          })(d)
        );
    },
    eh = function (a) {
      var b = a[K.g.Ub];
      b && J(40);
      var c = a[K.g.ef];
      c && J(41);
      for (
        var d = ta(b) ? b : [b], e = { Ad: 0 };
        e.Ad < d.length;
        e = { Ad: e.Ad }, ++e.Ad
      )
        k(
          a,
          (function (f) {
            return function (h, l) {
              if (h !== K.g.Ub && h !== K.g.ef) {
                var m = d[f.Ad],
                  n = Number(c),
                  p = af(),
                  q = $e["1"] || "";
                Dg = !0;
                Eg && Za("TAGGING", 20);
                Ig().default(h, l, m, p, q, n);
              }
            };
          })(e)
        );
    },
    lh = function (a, b) {
      k(a, function (c, d) {
        Dg = !0;
        Eg && Za("TAGGING", 20);
        Ig().update(c, d);
      });
      Yg(b.eventId, b.priorityId);
    },
    mh = function (a) {
      for (
        var b = a[K.g.Ub], c = Array.isArray(b) ? b : [b], d = { Bd: 0 };
        d.Bd < c.length;
        d = { Bd: d.Bd }, ++d.Bd
      )
        k(
          a,
          (function (e) {
            return function (f, h) {
              if (f !== K.g.Ub) {
                var l = c[e.Bd],
                  m = af(),
                  n = $e["1"] || "";
                Ig().setCps(f, h, l, m, n);
              }
            };
          })(d)
        );
    },
    nh = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Tg(b);
      });
    },
    oh = function () {
      return cf() || Ig().usedSetCps || !nh(K.g.Da);
    },
    ph = function (a, b) {
      $g(a, b);
    },
    qh = function (a, b) {
      Zg(a, b);
    };
  var rh = function (a) {
      var b = String(a[fc.la] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    sh =
      0 <= z.location.search.indexOf("?gtm_latency=") ||
      0 <= z.location.search.indexOf("&gtm_latency=");
  var uh = function (a) {
      var b = th();
      b.pending || (b.pending = []);
      ua(b.pending, function (c) {
        return (
          c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
        );
      }) || b.pending.push({ target: a, onLoad: void 0 });
    },
    vh = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    th = function () {
      var a = Eb("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new vh()), (a.tidr = b));
      return b;
    };
  var wh = {},
    xh = !1,
    yh = {
      ctid: "GTM-KPRB495D",
      Rf: "137763619",
      Te: "GTM-KPRB495D",
      oi: "GTM-KPRB495D",
    };
  wh.we = Ca("");
  var Ah = function () {
      var a = yh.Te ? yh.Te.split("|") : [yh.ctid];
      return xh ? a.map(zh) : a;
    },
    Ch = function () {
      var a = Bh();
      return xh ? a.map(zh) : a;
    },
    Eh = function () {
      return Dh(yh.ctid);
    },
    Fh = function () {
      return Dh(yh.Rf || "_" + yh.ctid);
    },
    Bh = function () {
      return yh.oi ? yh.oi.split("|") : [];
    },
    Gh = function (a) {
      var b = th();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    Dh = function (a) {
      return xh ? zh(a) : a;
    },
    zh = function (a) {
      return "siloed_" + a;
    },
    Hh = function (a) {
      a = String(a);
      return xh && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    Ih = function () {
      var a = !1;
      if (a) {
        var b = th();
        if (b.siloed) {
          for (
            var c = [],
              d = yh.Te ? yh.Te.split("|") : [yh.ctid],
              e = Bh(),
              f = {},
              h = 0;
            h < b.siloed.length;
            f = { rd: f.rd }, h++
          )
            (f.rd = b.siloed[h]),
              !xh &&
              ua(
                f.rd.isDestination ? e : d,
                (function (l) {
                  return function (m) {
                    return m === l.rd.ctid;
                  };
                })(f)
              )
                ? (xh = !0)
                : c.push(f.rd);
          b.siloed = c;
        }
      }
    };
  function Jh() {
    var a = th();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = Ah(), f = Ch(), h = {}, l = 0;
        l < a.pending.length;
        h = { xc: h.xc }, l++
      )
        (h.xc = a.pending[l]),
          ua(
            h.xc.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.xc.target.ctid;
              };
            })(h)
          )
            ? d || ((b = h.xc.onLoad), (d = !0))
            : c.push(h.xc);
      a.pending = c;
      if (b)
        try {
          b(Fh());
        } catch (m) {}
    }
  }
  var Kh = function () {
      for (var a = th(), b = Ah(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d
          ? ((d.state = 2), (d.containers = Ah()), (d.destinations = Ch()))
          : (a.container[b[c]] = {
              state: 2,
              containers: Ah(),
              destinations: Ch(),
            });
      }
      for (var e = Ch(), f = 0; f < e.length; f++) {
        var h = a.destination[e[f]];
        h && 0 === h.state && J(93);
        h
          ? ((h.state = 2), (h.containers = Ah()), (h.destinations = Ch()))
          : (a.destination[e[f]] = {
              state: 2,
              containers: Ah(),
              destinations: Ch(),
            });
      }
      a.canonical[Fh()] = {};
      Jh();
    },
    Lh = function (a) {
      return !!th().container[a];
    },
    Mh = function () {
      return { ctid: Eh(), isDestination: wh.we };
    };
  function Nh(a) {
    var b = th();
    (b.siloed = b.siloed || []).push(a);
  }
  var Oh = function () {
      var a = th().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Ph = function () {
      var a = {};
      k(th().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    Qh = function (a) {
      return !!(
        a &&
        a.parent &&
        a.context &&
        1 === a.context.source &&
        0 !== a.parent.ctid.indexOf("GTM-")
      );
    };
  var Rh = { sampleRate: "0.005000", Ii: "", Hi: Number("5"), sm: Number("") },
    Sh = [];
  function Th(a) {
    Sh.push(a);
  }
  var Uh = !1,
    Vh;
  if (!(Vh = sh)) {
    var Wh = Math.random(),
      Xh = Rh.sampleRate;
    Vh = Wh < Number(Xh);
  }
  var Yh = Vh,
    Zh = "https://www.googletagmanager.com/a?id=" + yh.ctid,
    $h = void 0,
    ai = {},
    bi = void 0,
    ci = new (function () {
      var a = 5;
      0 < Rh.Hi && (a = Rh.Hi);
      this.h = 0;
      this.C = [];
      this.B = a;
    })(),
    di = 1e3;
  function ei(a, b) {
    var c = $h;
    if (void 0 === c)
      if (b) c = Le();
      else return "";
    for (var d = [Zh], e = 0; e < Sh.length; e++) {
      var f = Sh[e]({
        eventId: c,
        Bb: !!a,
        Ai: function () {
          Uh = !0;
        },
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function fi() {
    bi && (z.clearTimeout(bi), (bi = void 0));
    if (void 0 !== $h && gi) {
      var a;
      (a = ai[$h]) || (a = ci.h < ci.B ? !1 : 1e3 > Ga() - ci.C[ci.h % ci.B]);
      if (a || 0 >= di--) J(1), (ai[$h] = !0);
      else {
        var b = ci.h++ % ci.B;
        ci.C[b] = Ga();
        var c = ei(!0);
        Mb(c);
        if (Uh) {
          var d = c.replace("/a?", "/td?");
          Mb(d);
        }
        gi = Uh = !1;
      }
    }
  }
  var gi = !1;
  function hi(a) {
    ai[a] ||
      (a !== $h && (fi(), ($h = a)),
      (gi = !0),
      bi || (bi = z.setTimeout(fi, 500)),
      2022 <= ei().length && fi());
  }
  var ii = va();
  function ji() {
    ii = va();
  }
  function ki() {
    return ["&v=3&t=t", "&pid=" + ii].join("");
  }
  var li = function (a, b, c, d, e, f, h, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.K = d;
      this.C = e;
      this.H = f;
      this.U = h;
      this.B = l;
      this.eventMetadata = m;
      this.onSuccess = n;
      this.onFailure = p;
      this.isGtmEvent = q;
    },
    Q = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.K[b]) return a.K[b];
      if (void 0 !== a.C[b]) return a.C[b];
      Yh && mi(a, a.H[b], a.U[b]) && (J(71), J(79));
      return void 0 !== a.H[b] ? a.H[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    ni = function (a) {
      function b(h) {
        for (var l = Object.keys(h), m = 0; m < l.length; ++m) c[l[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.K);
      b(a.C);
      b(a.H);
      if (Yh)
        for (var d = Object.keys(a.U), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            "event" !== f &&
            "gtm" !== f &&
            "tagTypeBlacklist" !== f &&
            !c.hasOwnProperty(f)
          ) {
            J(71);
            J(80);
            break;
          }
        }
      return Object.keys(c);
    },
    oi = function (a, b, c) {
      function d(m) {
        ac(m) &&
          k(m, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.B[b]), d(a.H[b]), d(a.C[b]), d(a.K[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (Yh) {
        var h = f,
          l = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.B[b]), d(a.U[b]), d(a.C[b]), d(a.K[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== h || mi(a, e, l)) J(71), J(81);
        f = h;
        e = l;
      }
      return f ? e : void 0;
    },
    pi = function (a) {
      var b = [K.g.Hc, K.g.Dc, K.g.Ec, K.g.Fc, K.g.Gc, K.g.Ic, K.g.Jc],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++)
            void 0 !== l[b[m]] && ((c[b[m]] = l[b[m]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.K) || e(a.C)) return c;
      e(a.H);
      if (Yh) {
        var f = c,
          h = d;
        c = {};
        d = !1;
        e(a.U);
        mi(a, c, f) && (J(71), J(82));
        c = f;
        d = h;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    mi = function (a, b, c) {
      if (!Yh) return !1;
      try {
        if (b === c) return !1;
        var d = Zb(b);
        if (d !== Zb(c) || !((ac(b) && ac(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (mi(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var h in b)
            if (!c.hasOwnProperty(h) || mi(a, b[h], c[h])) return !0;
        }
      } catch (l) {
        J(72);
      }
      return !1;
    },
    qi = function (a, b) {
      this.Hf = a;
      this.Mj = b;
      this.H = {};
      this.hd = {};
      this.h = {};
      this.K = {};
      this.B = {};
      this.gd = {};
      this.C = {};
      this.Cc = function () {};
      this.Cb = function () {};
      this.U = !1;
    },
    ri = function (a, b) {
      a.H = b;
      return a;
    },
    si = function (a, b) {
      a.hd = b;
      return a;
    },
    ti = function (a, b) {
      a.h = b;
      return a;
    },
    ui = function (a, b) {
      a.K = b;
      return a;
    },
    vi = function (a, b) {
      a.B = b;
      return a;
    },
    wi = function (a, b) {
      a.gd = b;
      return a;
    },
    xi = function (a, b) {
      a.C = b || {};
      return a;
    },
    yi = function (a, b) {
      a.Cc = b;
      return a;
    },
    zi = function (a, b) {
      a.Cb = b;
      return a;
    },
    Ai = function (a, b) {
      a.U = b;
      return a;
    },
    Bi = function (a) {
      return new li(
        a.Hf,
        a.Mj,
        a.H,
        a.hd,
        a.h,
        a.K,
        a.B,
        a.gd,
        a.C,
        a.Cc,
        a.Cb,
        a.U
      );
    };
  var Ci = [K.g.F, K.g.M],
    Di = [K.g.F, K.g.M, K.g.Da, K.g.Bc],
    Ei = {},
    Fi = ((Ei[K.g.F] = 1), (Ei[K.g.M] = 2), Ei);
  function Gi(a) {
    switch (Q(a, K.g.W)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var Hi = function (a) {
      var b = 3 !== Gi(a);
      O(75) && (b = b && Tg(K.g.Bc));
      return b;
    },
    Ii = function () {
      var a = {},
        b;
      for (b in Fi)
        if (Fi.hasOwnProperty(b)) {
          var c = Fi[b],
            d,
            e = Ig();
          e.accessedAny = !0;
          d = Sg(e, b);
          a[c] = d;
        }
      var f = O(54) && Ci.every(Tg),
        h = O(49);
      return f || h ? ec(a, 1) : ec(a, 0);
    },
    Ji = {},
    Ki =
      ((Ji[K.g.F] = 0),
      (Ji[K.g.M] = 1),
      (Ji[K.g.Da] = 2),
      (Ji[K.g.Bc] = 3),
      Ji);
  function Li(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var Mi = function (a) {
      if (O(51)) {
        for (var b = "1", c = 0; c < Di.length; c++) {
          var d = b,
            e,
            f = Di[c],
            h = Gg[f];
          e = void 0 === h ? 0 : Ki.hasOwnProperty(h) ? 12 | Ki[h] : 8;
          var l = Ig();
          l.accessedAny = !0;
          var m = l.entries[f] || {};
          e = (e << 2) | Li(m.implicit);
          b =
            d +
            ("" +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                e
              ] +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                (Li(m.declare) << 4) | (Li(m.default) << 2) | Li(m.update)
              ]);
        }
        void 0 !== a && (b += Gi(a));
        return b;
      }
      for (var n = "G1", p = 0; p < Ci.length; p++) {
        var q;
        a: {
          var r = Ci[p],
            t = Ig();
          t.accessedDefault = !0;
          switch ((t.entries[r] || {}).default) {
            case !0:
              q = 3;
              break a;
            case !1:
              q = 2;
              break a;
            default:
              q = 1;
          }
        }
        switch (q) {
          case 3:
            n += "1";
            break;
          case 2:
            n += "0";
            break;
          case 1:
            n += "-";
        }
      }
      return n;
    },
    Ni = function () {
      if (!Tg(K.g.Da)) return "-";
      var a = [],
        b = Ig().cps,
        c;
      for (c in b) b.hasOwnProperty(c) && b[c].enabled && a.push(c);
      for (var d = "", e = 0; e < a.length; e++) {
        var f = oe[a[e]];
        f && (d += f);
      }
      return "" === d ? "-" : d;
    };
  var Oi = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var Pi = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var h = e[f].split("="),
        l = h[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = h
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var Qi = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Ri = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function Si(a) {
    return "null" !== a.origin;
  }
  var Vi = function (a, b, c, d) {
      return Ti(d) ? Pi(a, String(b || Ui()), c) : [];
    },
    Yi = function (a, b, c, d, e) {
      if (Ti(e)) {
        var f = Wi(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Xi(
            f,
            function (h) {
              return h.Ge;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Xi(
            f,
            function (h) {
              return h.Kd;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Zi(a, b, c, d) {
    var e = Ui(),
      f = window;
    Si(f) && (f.document.cookie = a);
    var h = Ui();
    return e != h || (void 0 != c && 0 <= Vi(b, h, !1, d).indexOf(c));
  }
  var cj = function (a, b, c) {
      function d(t, u, v) {
        if (null == v) return delete h[u], t;
        h[u] = v;
        return t + "; " + u + "=" + v;
      }
      function e(t, u) {
        if (null == u) return delete h[u], t;
        h[u] = !0;
        return t + "; " + u;
      }
      if (!Ti(c.kb)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = $i(b)),
          (f = a + "=" + b));
      var h = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.lm);
      f = d(f, "samesite", c.mm);
      c.om && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = aj(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            r = d(f, "domain", q);
          r = e(r, c.flags);
          if (!bj(q, c.path) && Zi(r, a, b, c.kb)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return bj(m, c.path) ? 1 : Zi(f, a, b, c.kb) ? 0 : 1;
    },
    dj = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return cj(a, b, c);
    };
  function Xi(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var l = a[h],
        m = b(l);
      m === c
        ? d.push(l)
        : void 0 === f || m < f
        ? ((e = [l]), (f = m))
        : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function Wi(a, b, c) {
    for (var d = [], e = Vi(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split("."),
        l = h.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = h.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: h.join("."), Ge: 1 * m[0] || 1, Kd: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var $i = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    ej = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    fj = /(^|\.)doubleclick\.net$/i,
    bj = function (a, b) {
      return (
        fj.test(window.document.location.hostname) || ("/" === b && ej.test(a))
      );
    },
    Ui = function () {
      return Si(window) ? window.document.cookie : "";
    },
    aj = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      fj.test(e) || ej.test(e) || a.push("none");
      return a;
    },
    Ti = function (a) {
      return Cg().h() && a && Vg() ? (Ug(a) ? Tg(a) : !1) : !0;
    };
  var gj = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (Oi(a) & 2147483647)) : String(b);
    },
    hj = function (a) {
      return [gj(a), Math.round(Ga() / 1e3)].join(".");
    },
    kj = function (a, b, c, d, e) {
      var f = ij(b);
      return Yi(a, f, jj(c), d, e);
    },
    lj = function (a, b, c, d) {
      var e = "" + ij(c),
        f = jj(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    ij = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    jj = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var mj = function () {
    re.dedupe_gclid || (re.dedupe_gclid = "" + hj());
    return re.dedupe_gclid;
  };
  var nj = function () {
    var a = !1;
    return a;
  };
  var oj = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    pj = function (a) {
      var b = yh.ctid.split("-")[0].toUpperCase(),
        c = {};
      c.ctid = yh.ctid;
      c.zl = pe.md;
      c.Cl = pe.Lf;
      c.Xk = wh.we ? 2 : 1;
      xe ? ((c.Xe = oj[b]), c.Xe || (c.Xe = 0)) : (c.Xe = De ? 13 : 10);
      Be ? (c.kg = 1) : nj() ? (c.kg = 2) : (c.kg = 3);
      var d;
      var e = c.Xe,
        f = c.kg;
      void 0 === e
        ? (d = "")
        : (f || (f = 0),
          (d =
            "" +
            xd(1, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (e << 2) | f
            ]));
      var h = c.gm,
        l =
          4 +
          d +
          (h
            ? "" +
              xd(2, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                h
              ]
            : ""),
        m,
        n = c.Cl;
      m = n && wd.test(n) ? "" + xd(3, 2) + n : "";
      var p,
        q = c.zl;
      p = q
        ? "" +
          xd(4, 1) +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q]
        : "";
      var r;
      var t = c.ctid;
      if (t && a) {
        var u = t.split("-"),
          v = u[0].toUpperCase();
        if ("GTM" !== v && "OPT" !== v) r = "";
        else {
          var w = u[1];
          r =
            "" +
            xd(5, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              1 + w.length
            ] +
            (c.Xk || 0) +
            w;
        }
      } else r = "";
      return l + m + p + r;
    };
  function qj(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var rj = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function sj() {
    return hb ? !!ob && !!ob.platform : !1;
  }
  function tj() {
    return rb("iPhone") && !rb("iPod") && !rb("iPad");
  }
  function uj() {
    tj() || rb("iPad") || rb("iPod");
  }
  tb();
  sb() || rb("Trident") || rb("MSIE");
  rb("Edge");
  !rb("Gecko") ||
    (-1 != nb().toLowerCase().indexOf("webkit") && !rb("Edge")) ||
    rb("Trident") ||
    rb("MSIE") ||
    rb("Edge");
  -1 != nb().toLowerCase().indexOf("webkit") && !rb("Edge") && rb("Mobile");
  sj() || rb("Macintosh");
  sj() || rb("Windows");
  (sj() ? "Linux" === ob.platform : rb("Linux")) || sj() || rb("CrOS");
  var vj = oa.navigator || null;
  vj && (vj.appVersion || "").indexOf("X11");
  sj() || rb("Android");
  tj();
  rb("iPad");
  rb("iPod");
  uj();
  nb().toLowerCase().indexOf("kaios");
  var wj = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var h = a.charCodeAt(e - 1);
        if (38 == h || 63 == h) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    xj = /#|$/,
    yj = function (a, b) {
      var c = a.search(xj),
        d = wj(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    zj = /[?&]($|#)/,
    Aj = function (a, b, c) {
      for (
        var d, e = a.search(xj), f = 0, h, l = [];
        0 <= (h = wj(a, f, b, e));

      )
        l.push(a.substring(f, h)),
          (f = Math.min(a.indexOf("&", h) + 1 || e, e));
      l.push(a.slice(f));
      d = l.join("").replace(zj, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Bj = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              Ag(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Cj = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Dj(a) {
    if (!a || !D.head) return null;
    var b = Ej("META");
    D.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Fj = function () {
      if (z.top == z) return 0;
      var a = z.location.ancestorOrigins;
      return a
        ? a[a.length - 1] == z.location.origin
          ? 1
          : 2
        : Bj(z.top)
        ? 1
        : 2;
    },
    Ej = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Gj(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Ej("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var h = a.google_image_requests,
            l = bb(h, e);
          0 <= l && Array.prototype.splice.call(h, l, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      rj(e, "load", f);
      rj(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Ij = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Cj(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Hj(c, b);
    },
    Hj = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Gj(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Jj = function () {};
  var Kj = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Lj = function (a, b) {
      b = void 0 === b ? {} : b;
      this.B = a;
      this.h = null;
      this.K = {};
      this.Cb = 0;
      var c;
      this.U = null != (c = b.Jl) ? c : 500;
      var d;
      this.H = null != (d = b.hm) ? d : !1;
      this.C = null;
    };
  na(Lj, Jj);
  var Nj = function (a) {
    return "function" === typeof a.B.__tcfapi || null != Mj(a);
  };
  Lj.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.H },
      d = Ri(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.U &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.U));
    var f = function (h, l) {
      clearTimeout(e);
      h
        ? ((c = h),
          (c.internalErrorState = Kj(c)),
          (c.internalBlockOnErrors = b.H),
          (l && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), l || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Oj(this, "addEventListener", f);
    } catch (h) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Lj.prototype.removeEventListener = function (a) {
    a && a.listenerId && Oj(this, "removeEventListener", null, a.listenerId);
  };
  var Qj = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var h = e;
      if (0 === h) return !1;
      var l = c;
      2 === c
        ? ((l = 0), 2 === h && (l = 1))
        : 3 === c && ((l = 1), 1 === h && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = Pj(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Pj(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? Pj(a.purpose.legitimateInterests, b) &&
                Pj(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Pj = function (a, b) {
      return !(!a || !a[b]);
    },
    Oj = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.B.__tcfapi) {
        var e = a.B.__tcfapi;
        e(b, 2, c, d);
      } else if (Mj(a)) {
        Rj(a);
        var f = ++a.Cb;
        a.K[f] = c;
        if (a.h) {
          var h = {};
          a.h.postMessage(
            ((h.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            h),
            "*"
          );
        }
      } else c({}, !1);
    },
    Mj = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.B, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var h = c.parent;
              if (h && h != c) {
                f = h;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Rj = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.K[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        rj(a.B, "message", a.C));
    },
    Sj = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Kj(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Ij({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var Tj = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Uj = qj("", 500);
  function Vj() {
    var a = re.tcf || {};
    return (re.tcf = a);
  }
  var ak = function () {
    var a = Vj(),
      b = new Lj(z, { Jl: -1 });
    Nj(b) && Wj() && J(124);
    if (!Wj() && !a.active && Nj(b)) {
      a.active = !0;
      a.Ue = {};
      Xj();
      a.tcString = "tcunavailable";
      try {
        b.addEventListener(function (c) {
          if (0 !== c.internalErrorState) Yj(a), Zj(a);
          else {
            var d;
            a.gdprApplies = c.gdprApplies;
            if (!1 === c.gdprApplies) {
              var e = {},
                f;
              for (f in Tj) Tj.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (
              "tcloaded" === c.eventStatus ||
              "useractioncomplete" === c.eventStatus ||
              "cmpuishown" === c.eventStatus
            ) {
              var h = {},
                l;
              for (l in Tj)
                if (Tj.hasOwnProperty(l))
                  if ("1" === l) {
                    var m,
                      n = c,
                      p = !0;
                    p = void 0 === p ? !1 : p;
                    m = Sj(n)
                      ? !1 === n.gdprApplies ||
                        "tcunavailable" === n.tcString ||
                        (void 0 === n.gdprApplies && !p) ||
                        "string" !== typeof n.tcString ||
                        !n.tcString.length
                        ? !0
                        : Qj(n, "1", 0)
                      : !1;
                    h["1"] = m;
                  } else h[l] = Qj(c, l, Tj[l]);
              d = h;
            }
            d && ((a.tcString = c.tcString || "tcempty"), (a.Ue = d), Zj(a));
          }
        });
      } catch (c) {
        Yj(a), Zj(a);
      }
    }
  };
  function Yj(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function Xj() {
    var a = {},
      b = ((a[K.g.F] = "denied"), (a[K.g.ef] = Uj), a);
    eh(b);
  }
  var Wj = function () {
    return !0 !== z.gtag_enable_tcf_support;
  };
  function Zj(a) {
    var b = {},
      c = ((b[K.g.F] = a.Ue["1"] ? "granted" : "denied"), b);
    lh(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: bk() }
    );
  }
  var bk = function () {
      var a = Vj();
      return a.active ? a.tcString || "" : "";
    },
    ck = function () {
      var a = Vj();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    dk = function (a) {
      if (!Tj.hasOwnProperty(String(a))) return !0;
      var b = Vj();
      return b.active && b.Ue ? !!b.Ue[String(a)] : !0;
    };
  var ek = void 0;
  function fk(a) {
    var b = "";
    return b;
  }
  ub();
  tj() || rb("iPod");
  rb("iPad");
  !rb("Android") || vb() || ub() || tb() || rb("Silk");
  vb();
  !rb("Safari") ||
    vb() ||
    (sb() ? 0 : rb("Coast")) ||
    tb() ||
    (sb() ? 0 : rb("Edge")) ||
    (sb() ? qb("Microsoft Edge") : rb("Edg/")) ||
    (sb() ? qb("Opera") : rb("OPR")) ||
    ub() ||
    rb("Silk") ||
    rb("Android") ||
    uj();
  var gk = {},
    hk = null,
    ik = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!hk) {
        hk = {};
        for (
          var h =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            l = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = h.concat(l[m].split(""));
          gk[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === hk[q] && (hk[q] = p);
          }
        }
      }
      for (
        var r = gk[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          C = r[((x & 3) << 4) | (y >> 4)],
          H = r[((y & 15) << 2) | (A >> 6)],
          I = r[A & 63];
        t[w++] = "" + B + C + H + I;
      }
      var F = 0,
        L = u;
      switch (b.length - v) {
        case 2:
          (F = b[v + 1]), (L = r[(F & 15) << 2] || u);
        case 1:
          var M = b[v];
          t[w] = "" + r[M >> 2] + r[((M & 3) << 4) | (F >> 4)] + L + u;
      }
      return t.join("");
    };
  var jk =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function kk() {
    var a;
    return null != (a = z.google_tag_data) ? a : (z.google_tag_data = {});
  }
  function lk() {
    var a = z.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function mk() {
    var a, b;
    return null !=
      (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function nk() {
    var a, b;
    return (
      "function" ===
      typeof (null == (a = z.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    );
  }
  function ok() {
    if (!nk()) return null;
    var a = kk();
    if (a.uach_promise) return a.uach_promise;
    var b = z.navigator.userAgentData
      .getHighEntropyValues(jk)
      .then(function (c) {
        null != a.uach || (a.uach = c);
        return c;
      });
    return (a.uach_promise = b);
  }
  var pk,
    qk = function () {
      if (nk() && ((pk = Ga()), !mk())) {
        var a = ok();
        a &&
          (a.then(function () {
            J(95);
          }),
          a.catch(function () {
            J(96);
          }));
      }
    },
    sk = function (a) {
      var b = rk.Nl,
        c = function (h, l) {
          try {
            a(h, l);
          } catch (m) {}
        },
        d = lk();
      if (d) c(d);
      else {
        var e = mk();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = z.setTimeout(function () {
            c.Gd || ((c.Gd = !0), J(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (h) {
            c.Gd || ((c.Gd = !0), J(104), z.clearTimeout(f), c(h));
          }).catch(function (h) {
            c.Gd || ((c.Gd = !0), J(105), z.clearTimeout(f), c(null, h));
          });
        } else c(null);
      }
    },
    tk = function (a, b) {
      a &&
        ((b.h[K.g.Wc] = a.architecture),
        (b.h[K.g.Xc] = a.bitness),
        a.fullVersionList &&
          (b.h[K.g.Yc] = a.fullVersionList
            .map(function (c) {
              return (
                encodeURIComponent(c.brand || "") +
                ";" +
                encodeURIComponent(c.version || "")
              );
            })
            .join("|")),
        (b.h[K.g.Zc] = a.mobile ? "1" : "0"),
        (b.h[K.g.ad] = a.model),
        (b.h[K.g.bd] = a.platform),
        (b.h[K.g.dd] = a.platformVersion),
        (b.h[K.g.ed] = a.wow64 ? "1" : "0"));
    };
  function uk(a, b, c, d) {
    var e,
      f = Number(null != a.ib ? a.ib : void 0);
    0 !== f && (e = new Date((b || Ga()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      kb: d,
    };
  }
  var Ek;
  var Ik = function () {
      var a = Fk,
        b = Gk,
        c = Hk(),
        d = function (h) {
          a(h.target || h.srcElement || {});
        },
        e = function (h) {
          b(h.target || h.srcElement || {});
        };
      if (!c.init) {
        Nb(D, "mousedown", d);
        Nb(D, "keyup", d);
        Nb(D, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Jk = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Hk().decorators.push(f);
    },
    Kk = function (a, b, c) {
      for (var d = Hk().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h = d[f],
          l;
        if ((l = !c || h.forms))
          a: {
            var m = h.domains,
              n = a,
              p = !!h.sameHost;
            if (m && (p || n !== D.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    l = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  l = !0;
                  break a;
                }
            l = !1;
          }
        if (l) {
          var r = h.placement;
          void 0 == r && (r = h.fragment ? 2 : 1);
          r === b && Ka(e, h.callback());
        }
      }
      return e;
    };
  function Hk() {
    var a = Eb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Lk = /(.*?)\*(.*?)\*(.*)/,
    Mk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Nk = /^(?:www\.|m\.|amp\.)+/,
    Ok = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Pk(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Rk = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString() &&
          (b.push(c), b.push(Wa(String(d))));
      }
    var e = b.join("*");
    return ["1", Qk(e), e].join("*");
  };
  function Qk(a, b) {
    var c = [
        Cb.userAgent,
        new Date().getTimezoneOffset(),
        Cb.userLanguage || Cb.language,
        Math.floor(Ga() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Ek)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var h = f, l = 0; 8 > l; l++)
          h = h & 1 ? (h >>> 1) ^ 3988292384 : h >>> 1;
        e[f] = h;
      }
      d = e;
    }
    Ek = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Ek[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Sk() {
    return function (a) {
      var b = Ef(z.location.href),
        c = b.search.replace("?", ""),
        d = zf(c, "_gl", !0) || "";
      a.query = Tk(d) || {};
      var e = Cf(b, "fragment").match(Pk("_gl"));
      a.fragment = Tk((e && e[3]) || "") || {};
    };
  }
  function Uk(a, b) {
    var c = Pk(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Vk = function (a, b) {
      b || (b = "_gl");
      var c = Ok.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Uk(b, (c[2] || "").slice(1)),
        f = Uk(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Wk = function (a) {
      var b = Sk(),
        c = Hk();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ka(d, e.query), a && Ka(d, e.fragment));
      return d;
    },
    Tk = function (a) {
      try {
        var b = Xk(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              h = Xa(d[e + 1]);
            c[f] = h;
          }
          Za("TAGGING", 6);
          return c;
        }
      } catch (l) {
        Za("TAGGING", 8);
      }
    };
  function Xk(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Lk.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var h = c;
      if (h && "1" === h[1]) {
        var l = h[3],
          m;
        a: {
          for (var n = h[2], p = 0; p < b; ++p)
            if (n === Qk(l, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return l;
        Za("TAGGING", 7);
      }
    }
  }
  function Yk(a, b, c, d) {
    function e(p) {
      p = Uk(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Ok.exec(c);
    if (!f) return "";
    var h = f[1],
      l = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? (m = "#" + e(m.substring(1))) : (l = "?" + e(l.substring(1)));
    return "" + h + l + m;
  }
  function Zk(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Kk(b, 1, c),
      e = Kk(b, 2, c),
      f = Kk(b, 3, c);
    if (La(d)) {
      var h = Rk(d);
      c ? $k("_gl", h, a) : al("_gl", h, a, !1);
    }
    if (!c && La(e)) {
      var l = Rk(e);
      al("_gl", l, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            p = f[m],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              al(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              $k(n, p, q);
              break a;
            }
          }
          "string" == typeof q && Yk(n, p, q);
        }
  }
  function al(a, b, c, d) {
    if (c.href) {
      var e = Yk(a, b, c.href, void 0 === d ? !1 : d);
      gb.test(e) && (c.href = e);
    }
  }
  function $k(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
          var l = e[h];
          if (l.name === a) {
            l.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = D.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = Yk(a, b, c.action);
        gb.test(n) && (c.action = n);
      }
    }
  }
  function Fk(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Zk(e, e.hostname);
      }
    } catch (h) {}
  }
  function Gk(a) {
    try {
      if (a.action) {
        var b = Cf(Ef(a.action), "host");
        Zk(a, b);
      }
    } catch (c) {}
  }
  var bl = function (a, b, c, d) {
      Ik();
      Jk(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    cl = function (a, b) {
      Ik();
      Jk(a, [Bf(z.location, "host", !0)], b, !0, !0);
    },
    dl = function () {
      var a = D.location.hostname,
        b = Mk.exec(D.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          h = f[1];
        e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(Nk, ""),
        m = e.replace(Nk, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    el = function (a, b) {
      return !1 === a ? !1 : a || b || dl();
    };
  var fl = ["1"],
    gl = {},
    hl = {},
    jl = function (a) {
      return gl[il(a)];
    },
    nl = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = il(a.prefix);
      if (!gl[c])
        if (kl(c, a.path, a.domain)) {
          var d = hl[il(a.prefix)];
          ll(a, d ? d.id : void 0, d ? d.hg : void 0);
        } else {
          var e = Gf("auiddc");
          if (e) Za("TAGGING", 17), (gl[c] = e);
          else if (b) {
            var f = il(a.prefix),
              h = hj();
            if (0 === ml(f, h, a)) {
              var l = Eb("google_tag_data", {});
              l._gcl_au || (l._gcl_au = h);
            }
            kl(c, a.path, a.domain);
          }
        }
    };
  function ll(a, b, c) {
    var d = il(a.prefix),
      e = gl[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var h = Number(f[1]) || 0;
        if (h) {
          var l = e;
          b && (l = e + "." + b + "." + (c ? c : Math.floor(Ga() / 1e3)));
          ml(d, l, a, 1e3 * h);
        }
      }
    }
  }
  function ml(a, b, c, d) {
    var e = lj(b, "1", c.domain, c.path),
      f = uk(c, d);
    f.kb = "ad_storage";
    return dj(a, e, f);
  }
  function kl(a, b, c) {
    var d = kj(a, b, c, fl, "ad_storage");
    if (!d) return !1;
    ol(a, d);
    return !0;
  }
  function ol(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((gl[a] = c.slice(0, 2).join(".")),
        (hl[a] = { id: c.slice(2, 4).join("."), hg: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (hl[a] = { id: c.slice(0, 2).join("."), hg: Number(c[2]) || 0 })
      : (gl[a] = b);
  }
  function il(a) {
    return (a || "_gcl") + "_au";
  }
  function pl(a) {
    Vg()
      ? Zg(
          function () {
            Tg("ad_storage") ? a() : $g(a, "ad_storage");
          },
          ["ad_storage"]
        )
      : a();
  }
  function ql(a) {
    var b = Wk(!0),
      c = il(a.prefix);
    pl(function () {
      var d = b[c];
      if (d) {
        ol(c, d);
        var e = 1e3 * Number(gl[c].split(".")[1]);
        if (e) {
          Za("TAGGING", 16);
          var f = uk(a, e);
          f.kb = "ad_storage";
          var h = lj(d, "1", a.domain, a.path);
          dj(c, h, f);
        }
      }
    });
  }
  function rl(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var h = {},
        l = kj(a, e.path, e.domain, fl, "ad_storage");
      l && (h[a] = l);
      return h;
    };
    pl(function () {
      bl(f, b, c, d);
    });
  }
  var sl = function (a) {
    for (
      var b = [],
        c = D.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          xg: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (h, l) {
      return l.timestamp - h.timestamp;
    });
    return b;
  };
  function tl(a, b) {
    var c = sl(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].xg] || (d[c[e].xg] = []);
        var h = { version: f[0], timestamp: 1e3 * Number(f[1]), P: f[2] };
        b && 3 < f.length && (h.labels = f.slice(3));
        d[c[e].xg].push(h);
      }
    }
    return d;
  }
  var ul = /^\w+$/,
    vl = /^[\w-]+$/,
    wl = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    xl = function () {
      return Cg().h() && Vg() ? Tg("ad_storage") : !0;
    },
    yl = function (a, b) {
      Ug("ad_storage")
        ? xl()
          ? a()
          : $g(a, "ad_storage")
        : b
        ? Za("TAGGING", 3)
        : Zg(
            function () {
              yl(a, !0);
            },
            ["ad_storage"]
          );
    },
    Al = function (a) {
      return zl(a).map(function (b) {
        return b.P;
      });
    },
    zl = function (a) {
      var b = [];
      if (!Si(z) || !D.cookie) return b;
      var c = Vi(a, D.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { P: d.P }, e++) {
        var f = Bl(c[e]);
        if (null != f) {
          var h = f,
            l = h.version;
          d.P = h.P;
          var m = h.timestamp,
            n = h.labels,
            p = ua(
              b,
              (function (q) {
                return function (r) {
                  return r.P === q.P;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = Cl(p.labels, n || [])))
            : b.push({ version: l, P: d.P, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Dl(b);
    };
  function Cl(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function El(a) {
    return a && "string" == typeof a && a.match(ul) ? a : "_gcl";
  }
  var Gl = function () {
      var a = Ef(z.location.href),
        b = Cf(a, "query", !1, void 0, "gclid"),
        c = Cf(a, "query", !1, void 0, "gclsrc"),
        d = Cf(a, "query", !1, void 0, "wbraid"),
        e = Cf(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || zf(f, "gclid");
        c = c || zf(f, "gclsrc");
        d = d || zf(f, "wbraid");
      }
      return Fl(b, c, e, d);
    },
    Fl = function (a, b, c, d) {
      var e = {},
        f = function (h, l) {
          e[l] || (e[l] = []);
          e[l].push(h);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && vl.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(vl))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Il = function (a) {
      var b = Gl();
      yl(function () {
        Hl(b, !1, a);
      });
    };
  function Hl(a, b, c, d, e) {
    function f(w, x) {
      var y = Jl(w, h);
      y && (dj(y, x, l), (m = !0));
    }
    c = c || {};
    e = e || [];
    var h = El(c.prefix);
    d = d || Ga();
    var l = uk(c, d, !0);
    l.kb = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        r = Jl("gb", h),
        t = !1;
      if (!b)
        for (var u = zl(r), v = 0; v < u.length; v++)
          u[v].P === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Ll = function (a, b) {
      var c = Wk(!0);
      yl(function () {
        for (var d = El(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== wl[f]) {
            var h = Jl(f, d),
              l = c[h];
            if (l) {
              var m = Math.min(Kl(l), Ga()),
                n;
              b: {
                var p = m;
                if (Si(z))
                  for (
                    var q = Vi(h, D.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (Kl(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = uk(b, m, !0);
                t.kb = "ad_storage";
                dj(h, l, t);
              }
            }
          }
        }
        Hl(Fl(c.gclid, c.gclsrc), !1, b);
      });
    },
    Jl = function (a, b) {
      var c = wl[a];
      if (void 0 !== c) return b + c;
    },
    Kl = function (a) {
      return 0 !== Ml(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Bl(a) {
    var b = Ml(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          P: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Ml(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !vl.test(a[2])
      ? []
      : a;
  }
  var Nl = function (a, b, c, d, e) {
      if (ta(b) && Si(z)) {
        var f = El(e),
          h = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Jl(a[m], f);
              if (n) {
                var p = Vi(n, D.cookie, void 0, "ad_storage");
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        yl(function () {
          bl(h, b, c, d);
        });
      }
    },
    Dl = function (a) {
      return a.filter(function (b) {
        return vl.test(b.P);
      });
    },
    Ol = function (a, b) {
      if (Si(z)) {
        for (var c = El(b.prefix), d = {}, e = 0; e < a.length; e++)
          wl[a[e]] && (d[a[e]] = wl[a[e]]);
        yl(function () {
          k(d, function (f, h) {
            var l = Vi(c + h, D.cookie, void 0, "ad_storage");
            l.sort(function (t, u) {
              return Kl(u) - Kl(t);
            });
            if (l.length) {
              var m = l[0],
                n = Kl(m),
                p = 0 !== Ml(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Ml(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Hl(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Pl(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Ql = function (a) {
      function b(e, f, h) {
        h && (e[f] = h);
      }
      if (Vg()) {
        var c = Gl();
        if (Pl(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          cl(function () {
            return d;
          }, 3);
          cl(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Rl = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!xl()) return e;
      var f = zl(a);
      if (!f.length) return e;
      for (var h = 0; h < f.length; h++)
        -1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1e3), l.P]
            .concat(l.labels || [], [b])
            .join("."),
          p = uk(c, m, !0);
        p.kb = "ad_storage";
        dj(a, n, p);
      }
      return e;
    };
  function Sl(a, b) {
    var c = El(b),
      d = Jl(a, c);
    if (!d) return 0;
    for (var e = zl(d), f = 0, h = 0; h < e.length; h++)
      f = Math.max(f, e[h].timestamp);
    return f;
  }
  function Tl(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Ul = function (a) {
    var b = Math.max(Sl("aw", a), Tl(xl() ? tl() : {}));
    return Math.max(Sl("gb", a), Tl(xl() ? tl("_gac_gb", !0) : {})) > b;
  };
  var Zl = /[A-Z]+/,
    $l = /\s/,
    am = function (a, b) {
      if (g(a)) {
        a = Ea(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (Zl.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var h = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = h(e);
              if ("DC" === d && 2 === f.length) {
                var l = h(f[1]);
                2 === l.length && ((f[1] = l[0]), f.push(l[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++)
                if (!f[m] || ($l.test(f[m]) && ("AW" !== d || 1 !== m))) return;
            }
            return { id: a, prefix: d, Z: d + "-" + f[0], I: f };
          }
        }
      }
    },
    cm = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = am(a[d], b);
        e && (c[e.id] = e);
      }
      bm(c);
      var f = [];
      k(c, function (h, l) {
        f.push(l);
      });
      return f;
    };
  function bm(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.I[1] && b.push(d.Z);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var dm = function (a, b, c, d) {
    var e = Kb(),
      f;
    if (1 === e)
      a: {
        var h = Fe;
        h = h.toLowerCase();
        for (
          var l = "https://" + h,
            m = "http://" + h,
            n = 1,
            p = D.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(l) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != z.location.protocol ? a : b) + c;
  };
  var pm = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.m = c;
    this.h = {};
    this.metadata = G(c.eventMetadata || {});
    this.isAborted = !1;
  };
  pm.prototype.copyToHitData = function (a, b) {
    var c = Q(this.m, a);
    void 0 !== c ? (this.h[a] = c) : void 0 !== b && (this.h[a] = b);
  };
  var qm = function (a, b, c) {
    var d = jf(a.target.Z);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };
  function rm(a) {
    return {
      getDestinationId: function () {
        return a.target.Z;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.h[b];
      },
      setHitData: function (b, c) {
        a.h[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.h[b] && (a.h[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return Q(a.m, b);
      },
      km: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      },
    };
  }
  function Om(a) {
    var b = Q(a.m, K.g.tb),
      c = Q(a.m, K.g.sb);
    b && !c
      ? (a.eventName !== K.g.fa && a.eventName !== K.g.Sd && J(131),
        (a.isAborted = !0))
      : !b && c && (J(132), (a.isAborted = !0));
  }
  function Qm() {
    return "attribution-reporting";
  }
  function Rm(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var Sm = !1;
  function Tm() {
    if (Rm("join-ad-interest-group") && ra(Cb.joinAdInterestGroup)) return !0;
    Sm ||
      (Dj(
        "AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (Sm = !0));
    return Rm("join-ad-interest-group") && ra(Cb.joinAdInterestGroup);
  }
  function Um(a, b) {
    var c = void 0;
    try {
      c = D.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Ga() - d) {
        Za("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          D.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          Za("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Lb(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Ga() },
      c
    );
  }
  function Vm() {
    return "https://td.doubleclick.net";
  }
  var Wm = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    Xm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Ym = /^\d+\.fls\.doubleclick\.net$/,
    Zm = /;gac=([^;?]+)/,
    $m = /;gacgb=([^;?]+)/,
    an = /;gclaw=([^;?]+)/,
    bn = /;gclgb=([^;?]+)/;
  function cn(a, b) {
    if (Ym.test(D.location.host)) {
      var c = D.location.href.match(b);
      return c && 2 == c.length && c[1].match(Wm)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].P);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var dn = function (a, b, c) {
    var d = xl() ? tl("_gac_gb", !0) : {},
      e = [],
      f = !1,
      h;
    for (h in d) {
      var l = Rl("_gac_gb_" + h, a, b, c);
      f =
        f ||
        (0 !== l.length &&
          l.some(function (m) {
            return 1 === m;
          }));
      e.push(h + ":" + l.join(","));
    }
    return { wk: f ? e.join(";") : "", vk: cn(d, $m) };
  };
  function en(a, b, c) {
    if (Ym.test(D.location.host)) {
      var d = D.location.href.match(c);
      if (d && 2 == d.length && d[1].match(Xm)) return [{ P: d[1] }];
    } else return zl((a || "_gcl") + b);
    return [];
  }
  var fn = function (a) {
      return en(a, "_aw", an)
        .map(function (b) {
          return b.P;
        })
        .join(".");
    },
    gn = function (a) {
      return en(a, "_gb", bn)
        .map(function (b) {
          return b.P;
        })
        .join(".");
    },
    hn = function (a, b) {
      var c = Rl(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var jn = function () {
    if (ra(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var T = {
    D: {
      Bg: "ads_conversion_hit",
      ff: "container_execute_start",
      Dg: "container_setup_end",
      hf: "container_setup_start",
      Cg: "container_execute_end",
      Eg: "container_yield_end",
      jf: "container_yield_start",
      Fh: "event_execute_end",
      Eh: "event_evaluation_end",
      Ff: "event_evaluation_start",
      Gh: "event_setup_end",
      fd: "event_setup_start",
      Hh: "ga4_conversion_hit",
      kd: "page_load",
      Zl: "pageview",
      xb: "snippet_load",
      Rh: "tag_callback_error",
      Sh: "tag_callback_failure",
      Th: "tag_callback_success",
      Uh: "tag_execute_end",
      qc: "tag_execute_start",
    },
  };
  function Vn() {
    function a(c, d) {
      var e = ab(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  var Wn = !1,
    Xn = "L S Y E EC TC HTC".split(" "),
    Yn = ["S", "V", "E"],
    Zn = ["TS", "TI", "TE"];
  var Co = function (a) {},
    Do = function (a) {},
    Eo = function () {},
    Fo = function (a, b) {},
    Go = function (a, b) {},
    Ho = function (a, b) {},
    Io = function (a, b) {},
    $n = function (a, b, c, d, e, f) {
      var h;
      h = void 0 === h ? !1 : h;
      var l = {};
      return l;
    },
    ao = function (a) {
      var b = !1;
      return b;
    },
    bo = function (a, b) {},
    Jo = function () {
      var a = {};
      return a;
    },
    vo = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    Ko = function () {},
    Lo = function (a, b) {},
    Mo = function (a, b, c) {};
  var No = function (a, b) {
    var c,
      d = z.GooglebQhCsO;
    d || ((d = {}), (z.GooglebQhCsO = d));
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var Oo = function (a, b, c) {
    var d = yj(a, "fmt");
    if (b) {
      var e = yj(a, "random"),
        f = yj(a, "label") || "";
      if (!e) return !1;
      var h = ik(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!No(h, b)) return !1;
    }
    d && 4 != d && (a = Aj(a, "rfmt", d));
    var l = Aj(a, "fmt", 4);
    Jb(
      l,
      function () {
        z.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((z.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      D.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var dp = function () {
      this.h = {};
    },
    ep = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    fp = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    hp = function (a, b, c, d) {};
  function jp(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var lp = function (a) {
      var b = Fh();
      kp(b).event && kp(b).event.push(a);
    },
    mp = function () {
      var a = kp(Fh());
      return a.event ? a.event : [];
    };
  function kp(a) {
    var b,
      c = re.r;
    c || ((c = { container: {} }), (re.r = c));
    b = c;
    var d = b.container[a];
    d || ((d = { entity: [], event: [] }), (b.container[a] = d));
    return d;
  }
  var np = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    op = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    pp = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    qp =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    tp = function (a) {
      var b = Re("gtm.allowlist") || Re("gtm.whitelist");
      b && J(9);
      xe && (b = ["google", "gtagfl", "lcl", "zone"]);
      rp() &&
        (xe ? J(116) : J(117),
        sp &&
          ((b = []),
          window.console &&
            window.console.log &&
            window.console.log("GTM blocked. See go/13687728.")));
      var c = b && Ma(Da(b), op),
        d = Re("gtm.blocklist") || Re("gtm.blacklist");
      d || ((d = Re("tagTypeBlacklist")) && J(3));
      d ? J(8) : (d = []);
      rp() &&
        ((d = Da(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Da(d).indexOf("google") && J(2);
      var e = d && Ma(Da(d), pp),
        f = {};
      return function (h) {
        var l = h && h[fc.la];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = Je[l] || [],
          n = a(l, m),
          p;
        p = kp(Fh()).entity;
        for (var q = 0; q < p.length; q++)
          try {
            n = n && p[q](l, m);
          } catch (y) {
            n = !1;
          }
        if (b) {
          var r;
          if ((r = n))
            a: {
              if (0 > c.indexOf(l))
                if (m && 0 < m.length)
                  for (var t = 0; t < m.length; t++) {
                    if (0 > c.indexOf(m[t])) {
                      J(11);
                      r = !1;
                      break a;
                    }
                  }
                else {
                  r = !1;
                  break a;
                }
              r = !0;
            }
          n = r;
        }
        var u = !1;
        if (d) {
          var v = 0 <= e.indexOf(l);
          if (v) u = v;
          else {
            var w = za(e, m || []);
            w && J(10);
            u = w;
          }
        }
        var x = !n || u;
        x ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (x = za(e, qp));
        return (f[l] = x);
      };
    },
    sp = !1;
  var rp = function () {
      return np.test(z.location && z.location.hostname);
    },
    up = function () {
      xh &&
        kp(Fh()).entity.push(function (a) {
          var b = {};
          b[fc.la] = "__" + a;
          for (var c in void 0)
            (void 0).hasOwnProperty(c) && (b["vtp_" + c] = (void 0)[c]);
          var d;
          if (Wc(b)) {
            var e = b[fc.la];
            if (!e) throw "Error: No function name given for function call.";
            var f = Kc[e];
            d = !!f && !!f.runInSiloedMode;
          } else d = !!jp(b[fc.la], 4);
          return d;
        });
    };
  function vp(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Ef("" + c + b).href;
    }
  }
  function wp() {
    return !!pe.Ae && "SGTM_TOKEN" !== pe.Ae.split("@@").join("");
  }
  function xp(a) {
    for (var b = ea([K.g.Tc, K.g.Kb]), c = b.next(); !c.done; c = b.next()) {
      var d = Q(a, c.value);
      if (d) return d;
    }
  }
  var zp = function (a, b, c, d) {
      if (!yp() && !Lh(a)) {
        var e = "?id=" + encodeURIComponent(a) + "&l=" + pe.ba,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        O(73) && (e += "&gtm=" + pj());
        var h = wp();
        h && (e += "&sign=" + pe.Ae);
        var l = c ? "/gtag/js" : "/gtm.js",
          m = ze || Be ? vp(b, l + e) : void 0;
        if (!m) {
          var n = pe.Rd + l;
          h &&
            Db &&
            f &&
            (n = Db.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = dm("https://", "http://", n + e);
        }
        var p = a;
        d.siloed && (Nh({ ctid: p, isDestination: !1 }), (p = zh(p)));
        var q = p,
          r = Mh();
        th().container[q] = { state: 1, context: d, parent: r };
        uh({ ctid: q, isDestination: !1 });
        Jb(m);
      }
    },
    Ap = function (a, b, c) {
      var d;
      if ((d = !yp())) {
        var e = th().destination[a];
        d = !(e && e.state);
      }
      if (d)
        if (Oh())
          (th().destination[a] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: Mh(),
          }),
            uh({ ctid: a, isDestination: !0 }),
            J(91);
        else {
          var f =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            pe.ba +
            "&cx=c";
          O(73) && (f += "&gtm=" + pj());
          wp() && (f += "&sign=" + pe.Ae);
          var h = ze || Be ? vp(b, f) : void 0;
          h || (h = dm("https://", "http://", pe.Rd + f));
          var l = a;
          c.siloed && (Nh({ ctid: l, isDestination: !0 }), (l = zh(l)));
          th().destination[l] = { state: 1, context: c, parent: Mh() };
          uh({ ctid: l, isDestination: !0 });
          Jb(h);
        }
    };
  function yp() {
    if (nj()) {
      return !0;
    }
    return !1;
  }
  var Bp = "",
    Cp = [];
  function Dp(a) {
    var b = "";
    Bp && (b = "&dl=" + encodeURIComponent(Bp));
    0 < Cp.length && (b += "&tdp=" + Cp.join("."));
    a.Bb && ((Bp = ""), (Cp.length = 0), b && a.Ai());
    return b;
  }
  var Ep = [];
  function Fp(a) {
    if (!Ep.length) return "";
    var b = "&tdc=" + Ep.join("!");
    a.Bb && (a.Ai(), (Ep.length = 0));
    return b;
  }
  var Gp = { initialized: 11, complete: 12, interactive: 13 },
    Hp = {},
    Ip = Object.freeze(((Hp[K.g.Na] = !0), Hp)),
    Jp =
      0 <= D.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= D.location.search.indexOf("&gtm_diagnostics="),
    Lp = function (a, b, c) {
      if (Yh && "config" === a && !(1 < am(b).I.length)) {
        var d,
          e = Eb("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = G(c.H);
        G(c.h, f);
        var h = [],
          l;
        for (l in d) {
          var m = Kp(d[l], f);
          m.length && (Jp && console.log(m), h.push(l));
        }
        h.length &&
          (h.length && Yh && Ep.push(b + "*" + h.join(".")),
          Za("TAGGING", Gp[D.readyState] || 14));
        d[b] = f;
      }
    };
  function Mp(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Kp(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Ip[q] : t;
      },
      f;
    for (f in Mp(a, b)) {
      var h = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === Zb(l) || "array" === Zb(l),
        p = "object" === Zb(m) || "array" === Zb(m);
      if (n && p) Kp(l, m, c, h);
      else if (n || p || l !== m) c[h] = !0;
    }
    return Object.keys(c);
  }
  var Np = !1,
    Op = 0,
    Pp = [];
  function Qp(a) {
    if (!Np) {
      var b = D.createEventObject,
        c = "complete" == D.readyState,
        d = "interactive" == D.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Np = !0;
        for (var e = 0; e < Pp.length; e++) E(Pp[e]);
      }
      Pp.push = function () {
        for (var f = 0; f < arguments.length; f++) E(arguments[f]);
        return 0;
      };
    }
  }
  function Rp() {
    if (!Np && 140 > Op) {
      Op++;
      try {
        D.documentElement.doScroll("left"), Qp();
      } catch (a) {
        z.setTimeout(Rp, 50);
      }
    }
  }
  var Sp = function (a) {
    Np ? a() : Pp.push(a);
  };
  var Tp = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: Eh(),
    };
  };
  var Vp = function (a, b) {
      this.h = !1;
      this.H = [];
      this.K = { tags: [] };
      this.U = !1;
      this.B = this.C = 0;
      Up(this, a, b);
    },
    Wp = function (a, b, c, d) {
      if (ue.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      ac(d) && (e = G(d, e));
      e.id = c;
      e.status = "timeout";
      return a.K.tags.push(e) - 1;
    },
    Xp = function (a, b, c, d) {
      var e = a.K.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Yp = function (a) {
      if (!a.h) {
        for (var b = a.H, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.H.length = 0;
      }
    },
    Up = function (a, b, c) {
      void 0 !== b && Zp(a, b);
      c &&
        z.setTimeout(function () {
          return Yp(a);
        }, Number(c));
    },
    Zp = function (a, b) {
      var c = Ia(function () {
        return E(function () {
          b(Eh(), a.K);
        });
      });
      a.h ? c() : a.H.push(c);
    },
    $p = function (a) {
      a.C++;
      return Ia(function () {
        a.B++;
        a.U && a.B >= a.C && Yp(a);
      });
    },
    aq = function (a) {
      a.U = !0;
      a.B >= a.C && Yp(a);
    };
  var bq = {},
    dq = function () {
      return z[cq()];
    },
    eq = !1;
  function cq() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var hq = function (a) {},
    iq = function (a, b) {
      return function () {
        var c = dq(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var h = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > h.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", h, !0),
              f.set("hitCallback", l, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var nq = {},
    oq = {};
  function Hq(a, b) {
    if (Yh) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      nq[a] = "&e=" + c + "&eid=" + a;
      hi(a);
    }
  }
  function Nq(a) {
    var b = a.eventId,
      c = a.Bb;
    if (!nq[b]) return "";
    var d = oq[b] ? "" : "&es=1";
    d += nq[b];
    c && (oq[b] = !0);
    return d;
  }
  var Oq = {};
  function Pq(a, b) {
    Yh && ((Oq[a] = Oq[a] || {}), (Oq[a][b] = (Oq[a][b] || 0) + 1));
  }
  function Qq(a) {
    var b = a.eventId,
      c = a.Bb,
      d = Oq[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Oq[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  var Rq = {},
    Sq = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8",
    };
  function Tq(a, b, c) {
    if (Yh) {
      Rq[a] = Rq[a] || [];
      var d = Sq[b] || "0",
        e;
      e =
        c instanceof z.Element
          ? "1"
          : c instanceof z.Event
          ? "2"
          : c instanceof z.RegExp
          ? "3"
          : c === z
          ? "4"
          : c === D
          ? "5"
          : c instanceof z.Promise
          ? "6"
          : c instanceof z.Storage
          ? "7"
          : c instanceof z.Date
          ? "8"
          : c instanceof z.History
          ? "9"
          : c instanceof z.Performance
          ? "a"
          : c === z.crypto
          ? "b"
          : c instanceof z.Location
          ? "c"
          : c instanceof z.Navigator
          ? "d"
          : "object" !== typeof c || ac(c)
          ? "0"
          : "e";
      Rq[a].push("" + d + e);
    }
  }
  function Uq(a) {
    var b = a.eventId,
      c = Rq[b] || [];
    if (!c.length) return "";
    a.Bb && delete Rq[b];
    return "&pcr=" + c.join(".");
  }
  var Vq = {},
    Wq = {};
  function Xq(a, b, c) {
    if (Yh && b) {
      var d = rh(b);
      Vq[a] = Vq[a] || [];
      Vq[a].push(c + d);
      var e = (Wc(b) ? "1" : "2") + d;
      Wq[a] = Wq[a] || [];
      Wq[a].push(e);
      hi(a);
    }
  }
  function Yq(a) {
    var b = a.eventId,
      c = a.Bb,
      d = "",
      e = Vq[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = Wq[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete Vq[b], delete Wq[b]);
    return d;
  }
  function Zq(a, b, c, d) {
    var e = Ic[a],
      f = $q(a, b, c, d);
    if (!f) return null;
    var h = Tc(e[fc.Qh], c, []);
    if (h && h.length) {
      var l = h[0];
      f = Zq(
        l.index,
        {
          onSuccess: f,
          onFailure: 1 === l.gi ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function $q(a, b, c, d) {
    function e() {
      if (f[fc.Rj]) l();
      else {
        var w = Uc(f, c, []),
          x = w[fc.Li];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!nh(x[y])) {
              l();
              return;
            }
        var A = Wp(c.Lb, String(f[fc.la]), Number(f[fc.od]), w[fc.Sj]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var I = Ga() - H;
            Xq(c.id, Ic[a], "5");
            Xp(c.Lb, A, "success", I);
            O(30) && Mo(c, f, T.D.Th);
            h();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var I = Ga() - H;
            Xq(c.id, Ic[a], "6");
            Xp(c.Lb, A, "failure", I);
            O(30) && Mo(c, f, T.D.Sh);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Xq(c.id, f, "1");
        var C = function () {
          Ze(3);
          var I = Ga() - H;
          Xq(c.id, f, "7");
          Xp(c.Lb, A, "exception", I);
          O(30) && Mo(c, f, T.D.Rh);
          B || ((B = !0), l());
        };
        O(30) && Lo(c, f);
        var H = Ga();
        try {
          Sc(w, { event: c, index: a, type: 1 });
        } catch (I) {
          C(I);
        }
        O(30) && Mo(c, f, T.D.Uh);
      }
    }
    var f = Ic[a],
      h = b.onSuccess,
      l = b.onFailure,
      m = b.terminate;
    if (c.ag(f)) return null;
    var n = Tc(f[fc.Vh], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Zq(p.index, { onSuccess: h, onFailure: l, terminate: m }, c, d);
      if (!q) return null;
      h = q;
      l = 2 === p.gi ? m : q;
    }
    if (f[fc.Mh] || f[fc.Uj]) {
      var r = f[fc.Mh] ? Jc : c.Hl,
        t = h,
        u = l;
      if (!r[a]) {
        e = Ia(e);
        var v = ar(a, r, e);
        h = v.onSuccess;
        l = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function ar(a, b, c) {
    var d = [],
      e = [];
    b[a] = br(d, e, c);
    return {
      onSuccess: function () {
        b[a] = cr;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = dr;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function br(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function cr(a) {
    a();
  }
  function dr(a, b) {
    b();
  }
  var fr = function (a, b) {
      return 1 === arguments.length ? er("config", a) : er("config", a, b);
    },
    gr = function (a, b, c) {
      c = c || {};
      c[K.g.Jb] = a;
      return er("event", b, c);
    };
  function er(a) {
    return arguments;
  }
  var hr = function () {
    this.h = [];
    this.B = [];
  };
  hr.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.B.length; f++)
      try {
        this.B[f](e);
      } catch (h) {}
  };
  hr.prototype.listen = function (a) {
    this.B.push(a);
  };
  hr.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  hr.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var jr = function (a, b, c) {
      ir().enqueue(a, b, c);
    },
    lr = function () {
      var a = kr;
      ir().listen(a);
    };
  function ir() {
    var a = re.mb;
    a || ((a = new hr()), (re.mb = a));
    return a;
  }
  var tr = function (a) {
      var b = re.zones;
      return b
        ? b.getIsAllowedFn(Ah(), a)
        : function () {
            return !0;
          };
    },
    ur = function (a) {
      var b = re.zones;
      return b ? b.isActive(Ah(), a) : !0;
    },
    vr = function () {
      lp(function (a, b) {
        return ur(b);
      });
    };
  var yr = function (a, b) {
    for (var c = [], d = 0; d < Ic.length; d++)
      if (a[d]) {
        var e = Ic[d];
        var f = $p(b.Lb);
        try {
          var h = Zq(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (h) {
            var l = e[fc.la];
            if (!l) throw "Error: No function name given for function call.";
            var m = Kc[l];
            c.push({
              Di: d,
              si: (m ? m.priorityOverride || 0 : 0) || jp(e[fc.la], 1) || 0,
              execute: h,
            });
          } else wr(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(xr);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function xr(a, b) {
    var c,
      d = b.si,
      e = a.si;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var h = a.Di,
        l = b.Di;
      f = h > l ? 1 : h < l ? -1 : 0;
    }
    return f;
  }
  function wr(a, b) {
    if (Yh) {
      var c = function (d) {
        var e = b.ag(Ic[d]) ? "3" : "4",
          f = Tc(Ic[d][fc.Qh], b, []);
        f && f.length && c(f[0].index);
        Xq(b.id, Ic[d], e);
        var h = Tc(Ic[d][fc.Vh], b, []);
        h && h.length && c(h[0].index);
      };
      c(a);
    }
  }
  var Br = !1,
    zr;
  var Gr = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    O(30) && Fo(b, d);
    if ("gtm.js" === d) {
      if (Br) return !1;
      Br = !0;
    }
    for (var e, f = !1, h = ur(b), l = mp(), m = 0; h && m < l.length; m++)
      h = (0, l[m])(d, b);
    if (h) e = tr(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      f = !0;
      e = tr(Number.MAX_SAFE_INTEGER);
    }
    Hq(b, d);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = {
        id: b,
        priorityId: c,
        name: d,
        ag: tp(e),
        Hl: [],
        mi: function () {
          J(6);
          Ze(0);
        },
        Zh: Cr(),
        ai: Dr(b),
        Lb: new Vp(function () {
          if (O(30)) {
          }
          n && n.apply(n, [].slice.call(arguments, 0));
        }, p),
      };
    O(59) && (q.xi = Pq);
    O(30) && Ho(q.id, q.name);
    var r = Zc(q);
    O(30) && Io(q.id, q.name);
    f && (r = Er(r));
    O(30) && Go(b, d);
    var t = yr(r, q),
      u = !1;
    aq(q.Lb);
    ("gtm.js" !== d && "gtm.sync" !== d) || hq(Eh());
    return Fr(r, t) || u;
  };
  function Dr(a) {
    return function (b) {
      bc(b) || Tq(a, "input", b);
    };
  }
  function Cr() {
    var a = {};
    a.event = Ve("event", 1);
    a.ecommerce = Ve("ecommerce", 1);
    a.gtm = Ve("gtm");
    a.eventModel = Ve("eventModel");
    return a;
  }
  function Er(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(Ic[c][fc.la]);
        if (te[d] || void 0 !== Ic[c][fc.Vj] || Ke[d] || jp(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Fr(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Ic[c] && !ue[String(Ic[c][fc.la])]) return !0;
    return !1;
  }
  var Hr = {};
  function Ir(a, b, c) {
    Yh && void 0 !== a && ((Hr[a] = Hr[a] || []), Hr[a].push(c + b), hi(a));
  }
  function Jr(a) {
    var b = a.eventId,
      c = a.Bb,
      d = "",
      e = Hr[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete Hr[b];
    return d;
  }
  var Lr = function (a, b, c, d) {
      var e = am(c, d.isGtmEvent);
      e && Kr.push("event", [b, a], e, d);
    },
    Mr = function (a, b, c, d) {
      var e = am(c, d.isGtmEvent);
      e && Kr.push("get", [a, b], e, d);
    },
    Nr = function () {
      this.status = 1;
      this.H = {};
      this.h = {};
      this.K = {};
      this.U = null;
      this.C = {};
      this.B = !1;
    },
    Or = function (a, b, c, d) {
      var e = Ga();
      this.type = a;
      this.C = e;
      this.h = b;
      this.B = c;
      this.messageContext = d;
    },
    Pr = function () {
      this.B = {};
      this.C = {};
      this.h = [];
    },
    Qr = function (a, b) {
      var c = b.Z;
      return (a.B[c] = a.B[c] || new Nr());
    },
    Rr = function (a, b, c, d) {
      if (d.h) {
        var e = Qr(a, d.h),
          f = e.U;
        if (f) {
          var h = G(c),
            l = G(e.H[d.h.id]),
            m = G(e.C),
            n = G(e.h),
            p = G(a.C),
            q = {};
          if (Yh)
            try {
              q = G(Oe);
            } catch (v) {
              J(72);
            }
          var r = d.h.prefix,
            t = function (v) {
              Ir(d.messageContext.eventId, r, v);
            },
            u = Bi(
              Ai(
                zi(
                  yi(
                    xi(
                      vi(
                        ui(
                          wi(
                            ti(
                              si(
                                ri(
                                  new qi(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  h
                                ),
                                l
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            Ir(d.messageContext.eventId, r, "1"),
              Lp(d.type, d.h.id, u),
              f(d.h.id, b, d.C, u);
          } catch (v) {
            Ir(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  Pr.prototype.register = function (a, b, c) {
    var d = Qr(this, a);
    3 !== d.status &&
      ((d.U = b), (d.status = 3), c && (G(d.h, c), (d.h = c)), this.flush());
  };
  Pr.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === Qr(this, c).status &&
        ((Qr(this, c).status = 2), this.push("require", [{}], c, {})),
      Qr(this, c).B && (d.deferrable = !1));
    this.h.push(new Or(a, c, b, d));
    d.deferrable || this.flush();
  };
  Pr.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      e = { yb: e.yb, Ie: e.Ie };
      var f = this.h[0],
        h = f.h;
      if (f.messageContext.deferrable)
        !h || Qr(this, h).B
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== Qr(this, h).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            k(f.B[0], function (r, t) {
              G(Oa(r, t), b.C);
            });
            break;
          case "config":
            var l = Qr(this, h);
            e.yb = {};
            k(
              f.B[0],
              (function (r) {
                return function (t, u) {
                  G(Oa(t, u), r.yb);
                };
              })(e)
            );
            var m = !!e.yb[K.g.mc];
            delete e.yb[K.g.mc];
            var n = h.Z === h.id;
            m || (n ? (l.C = {}) : (l.H[h.id] = {}));
            (l.B && m) || Rr(this, K.g.fa, e.yb, f);
            l.B = !0;
            n ? G(e.yb, l.C) : (G(e.yb, l.H[h.id]), J(70));
            d = !0;
            break;
          case "event":
            e.Ie = {};
            k(
              f.B[0],
              (function (r) {
                return function (t, u) {
                  G(Oa(t, u), r.Ie);
                };
              })(e)
            );
            Rr(this, f.B[1], e.Ie, f);
            break;
          case "get":
            var p = {},
              q = ((p[K.g.Ma] = f.B[0]), (p[K.g.Za] = f.B[1]), p);
            Rr(this, K.g.Ea, q, f);
        }
        this.h.shift();
        Sr(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Sr = function (a, b) {
      if ("require" !== b.type)
        if (b.h)
          for (var c = Qr(a, b.h).K[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.B)
            if (a.B.hasOwnProperty(e)) {
              var f = a.B[e];
              if (f && f.K)
                for (var h = f.K[b.type] || [], l = 0; l < h.length; l++)
                  h[l]();
            }
    },
    Tr = function (a, b) {
      var c = Kr,
        d = G(b);
      G(Qr(c, a).h, d);
      Qr(c, a).h = d;
    },
    Kr = new Pr();
  var Ur = {},
    Vr = {},
    Wr = function (a, b) {
      for (
        var c = [], d = [], e = {}, f = 0;
        f < a.length;
        e = { Se: e.Se, Ne: e.Ne }, f++
      ) {
        var h = a[f];
        if (0 <= h.indexOf("-")) {
          if (((e.Se = am(h, b)), e.Se)) {
            var l = Ch();
            ua(
              l,
              (function (r) {
                return function (t) {
                  return r.Se.Z === t;
                };
              })(e)
            )
              ? c.push(h)
              : d.push(h);
          }
        } else {
          var m = Ur[h] || [];
          e.Ne = {};
          m.forEach(
            (function (r) {
              return function (t) {
                return (r.Ne[t] = !0);
              };
            })(e)
          );
          for (var n = Ah(), p = 0; p < n.length; p++)
            if (e.Ne[n[p]]) {
              c = c.concat(Ch());
              break;
            }
          var q = Vr[h] || [];
          q.length && (c = c.concat(q));
        }
      }
      return { Zk: c, bl: d };
    },
    Xr = function (a) {
      k(Ur, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Yr = function (a) {
      k(Vr, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Zr = "HA GF G UA AW DC MC".split(" "),
    $r = !1,
    as = !1;
  function bs(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Le() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var cs = void 0,
    ds = void 0;
  function es(a, b, c) {
    var d = G(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && J(136);
    var e = G(b);
    G(c, e);
    jr(fr(Ah()[0], e), a.eventId, d);
  }
  function fs(a) {
    for (var b = ea([K.g.Tc, K.g.Kb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || Kr.C[d];
      if (e) return e;
    }
  }
  var gs = {
      config: function (a, b) {
        var c = O(60),
          d = bs(a, b);
        if (!(2 > a.length) && g(a[1])) {
          var e = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !ac(a[2])) || 3 < a.length) return;
            e = a[2];
          }
          var f = am(a[1], b.isGtmEvent);
          if (f) {
            var h, l, m;
            a: {
              if (!wh.we) {
                var n = Gh(Mh());
                if (Qh(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = { il: Gh(p), Yk: q };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && ((h = r.il), (l = r.Yk));
            Hq(d.eventId, "gtag.config");
            var t = f.Z,
              u = f.id !== t;
            if (u ? -1 === Ch().indexOf(t) : -1 === Ah().indexOf(t)) {
              if (!((c && b.inheritParentConfig) || (O(26) && e[K.g.tb]))) {
                var v = fs(e);
                if (u)
                  Ap(t, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (c && void 0 !== h && -1 !== h.containers.indexOf(t)) {
                  var w = e;
                  cs ? es(b, w, cs) : ds || (ds = G(w));
                } else
                  zp(t, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (h && (J(128), l && J(130), c && b.inheritParentConfig)) {
                var x = e;
                ds ? es(b, ds, x) : (!x[K.g.mc] && we && cs) || (cs = G(x));
                return;
              }
              if (we && !u && !e[K.g.mc]) {
                var y = as;
                as = !0;
                if (y) return;
              }
              $r || J(43);
              if (!b.noTargetGroup)
                if (u) {
                  Yr(f.id);
                  var A = f.id,
                    B = e[K.g.me] || "default";
                  B = String(B).split(",");
                  for (var C = 0; C < B.length; C++) {
                    var H = Vr[B[C]] || [];
                    Vr[B[C]] = H;
                    0 > H.indexOf(A) && H.push(A);
                  }
                } else {
                  Xr(f.id);
                  var I = f.id,
                    F = e[K.g.me] || "default";
                  F = F.toString().split(",");
                  for (var L = 0; L < F.length; L++) {
                    var M = Ur[F[L]] || [];
                    Ur[F[L]] = M;
                    0 > M.indexOf(I) && M.push(I);
                  }
                }
              delete e[K.g.me];
              var R = b.eventMetadata || {};
              R.hasOwnProperty("is_external_event") ||
                (R.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = R;
              delete e[K.g.Pc];
              for (var Z = u ? [f.id] : Ch(), S = 0; S < Z.length; S++) {
                var P = e,
                  ba = G(b),
                  ca = am(Z[S], ba.isGtmEvent);
                ca && Kr.push("config", [P], ca, ba);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          J(39);
          var c = bs(a, b),
            d = a[1];
          "default" === d
            ? eh(a[2])
            : "update" === d
            ? lh(a[2], c)
            : "declare" === d
            ? b.fromContainerExecution && dh(a[2])
            : "core_platform_services" === d && mh(a[2]);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && g(c)) {
          var d;
          if (2 < a.length) {
            if ((!ac(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            h = ((f.event = c), f);
          e &&
            ((h.eventModel = G(e)),
            e[K.g.Pc] && (h.eventCallback = e[K.g.Pc]),
            e[K.g.fe] && (h.eventTimeout = e[K.g.fe]));
          var l = bs(a, b),
            m = l.eventId,
            n = l.priorityId;
          h["gtm.uniqueEventId"] = m;
          n && (h["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (h.eventModel = h.eventModel || {}), h;
          var p;
          var q = d,
            r = q && q[K.g.Jb];
          void 0 === r &&
            ((r = Re(K.g.Jb, 2)), void 0 === r && (r = "default"));
          if (g(r) || ta(r)) {
            var t;
            b.isGtmEvent
              ? (t = g(r) ? [r] : r)
              : (t = r.toString().replace(/\s+/g, "").split(","));
            var u = Wr(t, b.isGtmEvent),
              v = u.Zk,
              w = u.bl;
            if (w.length)
              for (var x = fs(q), y = 0; y < w.length; y++) {
                var A = am(w[y], b.isGtmEvent);
                A &&
                  Ap(A.Z, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = cm(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            Hq(m, c);
            for (var C = [], H = 0; H < B.length; H++) {
              var I = B[H],
                F = G(b);
              if (-1 !== Zr.indexOf(Hh(I.prefix))) {
                var L = G(d),
                  M = F.eventMetadata || {};
                M.hasOwnProperty("is_external_event") ||
                  (M.is_external_event = !F.fromContainerExecution);
                F.eventMetadata = M;
                delete L[K.g.Pc];
                Lr(c, L, I.id, F);
              }
              C.push(I.id);
            }
            h.eventModel = h.eventModel || {};
            0 < B.length
              ? (h.eventModel[K.g.Jb] = C.join())
              : delete h.eventModel[K.g.Jb];
            $r || J(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            h.eventModel[K.g.sb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : h;
          }
        }
      },
      get: function (a, b) {
        J(53);
        if (4 === a.length && g(a[1]) && g(a[2]) && ra(a[3])) {
          var c = am(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            $r || J(43);
            var f = fs();
            if (
              !ua(Ch(), function (l) {
                return c.Z === l;
              })
            )
              Ap(c.Z, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Zr.indexOf(Hh(c.prefix))) {
              bs(a, b);
              var h = {};
              ah(G(((h[K.g.Ma] = d), (h[K.g.Za] = e), h)));
              Mr(
                d,
                function (l) {
                  E(function () {
                    return e(l);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          $r = !0;
          var c = bs(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && ac(a[1])
          ? (c = G(a[1]))
          : 3 == a.length &&
            g(a[1]) &&
            ((c = {}),
            ac(a[2]) || ta(a[2]) ? (c[a[1]] = G(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = bs(a, b),
            e = d.eventId,
            f = d.priorityId;
          G(c);
          var h = G(c);
          Kr.push("set", [h], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          O(14) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    hs = { policy: !0 };
  var is = function (a) {
      var b = z[pe.ba].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    js = function (a) {
      var b = z[pe.ba],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var ks = !1,
    ls = [];
  function ms() {
    if (!ks) {
      ks = !0;
      for (var a = 0; a < ls.length; a++) E(ls[a]);
    }
  }
  var ns = function (a) {
    ks ? E(a) : ls.push(a);
  };
  var Es = function (a) {
    if (Ds(a)) return a;
    this.h = a;
  };
  Es.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Ds = function (a) {
    return !a || "object" !== Zb(a) || ac(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Es.prototype.getUntrustedMessageValue = Es.prototype.getUntrustedMessageValue;
  var Fs = 0,
    Gs = {},
    Hs = [],
    Is = [],
    Js = !1,
    Ks = !1;
  function Ls(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Ms = function (a) {
      return z[pe.ba].push(a);
    },
    Ns = function (a, b) {
      if (!sa(b) || 0 > b) b = 0;
      var c = re[pe.ba],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        h = void 0;
      h = z.setTimeout(function () {
        f || ((f = !0), a());
        h = void 0;
      }, b);
      return function () {
        O(83) && (d = c ? c.subscribers : 1);
        ++e === d &&
          (h && (z.clearTimeout(h), (h = void 0)), f || (a(), (f = !0)));
      };
    };
  function Os(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && Ue(e), Ue(e, f));
    });
    Ge || (Ge = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Le()), (a["gtm.uniqueEventId"] = d), Ue("gtm.uniqueEventId", d));
    return Gr(a);
  }
  function Ps(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Aa(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Qs() {
    var a;
    if (Is.length) a = Is.shift();
    else if (Hs.length) a = Hs.shift();
    else return;
    var b;
    var c = a;
    if (Js || !Ps(c.message)) b = c;
    else {
      Js = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Le());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        h = {},
        l = {
          message:
            ((h.event = "gtm.init"), (h["gtm.uniqueEventId"] = d - 1), h),
          messageContext: { eventId: d - 1 },
        };
      Hs.unshift(l, c);
      if (Yh) {
        var m = yh.ctid;
        if (m) {
          var n,
            p = Gh(Mh());
          n = p && p.context;
          var q,
            r = Ef(z.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = yh.Rf,
            w = wh.we;
          Yh &&
            (Bp || (Bp = q),
            Cp.push(
              m +
                ";" +
                v +
                ";" +
                (t ? 1 : 0) +
                ";" +
                (u || 0) +
                ";" +
                (w ? 1 : 0)
            ));
        }
      }
      b = f;
    }
    return b;
  }
  function Rs() {
    for (var a = !1, b; !Ks && (b = Qs()); ) {
      Ks = !0;
      delete Oe.eventModel;
      Qe();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Ks = !1;
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              h = 0;
            h < f.length;
            h++
          ) {
            var l = f[h],
              m = Re(l, 1);
            if (ta(m) || ac(m)) m = G(m);
            Pe[l] = m;
          }
        try {
          if (ra(d))
            try {
              d.call(Se);
            } catch (C) {}
          else if (ta(d)) {
            var n = d;
            if (g(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                r = n.slice(1),
                t = Re(p.join("."), 2);
              if (null != t)
                try {
                  t[q].apply(t, r);
                } catch (C) {}
            }
          } else {
            var u = void 0,
              v = !1;
            if (Aa(d)) {
              a: {
                if (d.length && g(d[0])) {
                  var w = gs[d[0]];
                  if (w && (!e.fromContainerExecution || !hs[d[0]])) {
                    u = w(d, e);
                    break a;
                  }
                }
                u = void 0;
              }
              (v = u && "set" === d[0] && !!u.event) && J(101);
            } else u = d;
            if (u) {
              var x = Os(u, e);
              a = x || a;
              v && x && J(113);
            }
          }
        } finally {
          e.fromContainerExecution && Qe(!0);
          var y = d["gtm.uniqueEventId"];
          if ("number" === typeof y) {
            for (var A = Gs[String(y)] || [], B = 0; B < A.length; B++)
              Is.push(Ss(A[B]));
            A.length && Is.sort(Ls);
            delete Gs[String(y)];
            y > Fs && (Fs = y);
          }
          Ks = !1;
        }
      }
    }
    return !a;
  }
  function Ts() {
    if (O(30)) {
      var a = Us();
    }
    var e = Rs();
    try {
      is(Eh());
    } catch (f) {}
    return e;
  }
  function kr(a) {
    if (Fs < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Gs[b] = Gs[b] || [];
      Gs[b].push(a);
    } else
      Is.push(Ss(a)),
        Is.sort(Ls),
        E(function () {
          Ks || Rs();
        });
  }
  function Ss(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Vs = function () {
      function a(f) {
        var h = {};
        if (Ds(f)) {
          var l = f;
          f = Ds(l) ? l.getUntrustedMessageValue() : void 0;
          h.fromContainerExecution = !0;
        }
        return { message: f, messageContext: h };
      }
      var b = Eb(pe.ba, []),
        c = (re[pe.ba] = re[pe.ba] || {});
      !0 === c.pruned && J(83);
      Gs = ir().get();
      lr();
      Sp(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      ns(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < re.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var h = 0; h < arguments.length; h++)
            f[h] = new Es(arguments[h]);
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q);
        });
        Hs.push.apply(Hs, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (J(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return Rs() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Hs.push.apply(Hs, e);
      Us() && (O(30) && Eo(), E(Ts));
    },
    Us = function () {
      var a = !0;
      return a;
    };
  function Ws(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ga();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Xs(a) {
    return a && 0 === a.indexOf("pending:") ? Ws(a.substr(8)) : !1;
  }
  var rt = function () {};
  var Nc = {};
  Nc.ve = new String("undefined");
  var Ut = z.clearTimeout,
    Vt = z.setTimeout,
    U = function (a, b, c, d) {
      if (nj()) {
        b && E(b);
      } else return Jb(a, b, c, d);
    },
    Wt = function () {
      return new Date();
    },
    Xt = function () {
      return z.location.href;
    },
    Yt = function (a) {
      return Cf(Ef(a), "fragment");
    },
    Zt = function (a) {
      return Df(Ef(a));
    },
    $t = function (a, b) {
      return Re(a, b || 2);
    },
    au = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Ms(a)))
        : (d = Ms(a));
      return d;
    },
    bu = function (a, b) {
      z[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    cu = function (a, b, c) {
      return Vi(a, b, void 0 === c ? !0 : !!c);
    },
    du = function (a, b, c) {
      return 0 === dj(a, b, c);
    },
    eu = function (a, b) {
      if (nj()) {
        b && E(b);
      } else Lb(a, b);
    },
    fu = function (a) {
      return !!At(a, "init", !1);
    },
    gu = function (a) {
      xt(a, "init", !0);
    },
    hu = function (a, b, c) {
      bc(a) || Tq(c, b, a);
    };
  function Fu(a, b) {
    function c(h) {
      var l = Ef(h),
        m = Cf(l, "protocol"),
        n = Cf(l, "host", !0),
        p = Cf(l, "port"),
        q = Cf(l, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Gu(a) {
    return Hu(a) ? 1 : 0;
  }
  function Hu(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = G(a, {});
        G({ arg1: c[d], any_of: void 0 }, e);
        if (Gu(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var h = 0; h < od.length; h++) {
                var l = od[h];
                if (b[l]) {
                  f = b[l](c);
                  break a;
                }
              }
            } catch (v) {}
          f = !1;
        }
        return f;
      case "_ew":
        var m, n;
        m = String(b);
        n = String(c);
        var p = m.length - n.length;
        return 0 <= p && m.indexOf(n, p) === p;
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        var q;
        var r = a.ignore_case ? "i" : void 0;
        try {
          var t = String(c) + r,
            u = pd.get(t);
          u || ((u = new RegExp(c, r)), pd.set(t, u));
          q = u.test(b);
        } catch (v) {
          q = !1;
        }
        return q;
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Fu(b, c);
    }
    return !1;
  }
  function Iu() {
    var a = [
      "&cv=2",
      "&rv=" + pe.Lf,
      "&tc=" +
        Ic.filter(function (b) {
          return b;
        }).length,
    ];
    pe.md && a.push("&x=" + pe.md);
    return a.join("");
  }
  var wv = function () {
      var a = !0;
      (dk(7) && dk(9) && dk(10)) || (a = !1);
      return a;
    },
    xv = function () {
      var a = !0;
      (dk(3) && dk(4)) || (a = !1);
      return a;
    };
  ef();
  function Cw() {
    return (z.gaGlobal = z.gaGlobal || {});
  }
  var Dw = function () {
      var a = Cw();
      a.hid = a.hid || va();
      return a.hid;
    },
    Ew = function (a, b) {
      var c = Cw();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var Ax = window,
    Bx = document,
    Cx = function (a) {
      var b = Ax._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        Bx.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === Ax["ga-disable-" + a])
      )
        return !0;
      try {
        var c = Ax.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Pi("AMP_TOKEN", String(Bx.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return Bx.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function Kx(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[K.g.Oa] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var Tx = function (a, b) {};
  function Sx(a, b) {
    var c = function () {};
    return c;
  }
  function Ux(a, b, c) {}
  var Vx = Sx;
  var Wx = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]));
  };
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  var Xx = encodeURI,
    W = encodeURIComponent,
    Yx = function (a, b, c) {
      Mb(a, b, c);
    },
    Zx = function (a, b) {
      if (!a) return !1;
      var c = Cf(Ef(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    $x = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Y = { o: {} };

  (Y.o.e = ["google"]),
    (function () {
      (function (a) {
        Y.__e = a;
        Y.__e.s = "e";
        Y.__e.isVendorTemplate = !0;
        Y.__e.priorityOverride = 0;
        Y.__e.isInfrastructure = !1;
        Y.__e.runInSiloedMode = !0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Y.o.f = ["google"]),
    (function () {
      (function (a) {
        Y.__f = a;
        Y.__f.s = "f";
        Y.__f.isVendorTemplate = !0;
        Y.__f.priorityOverride = 0;
        Y.__f.isInfrastructure = !1;
        Y.__f.runInSiloedMode = !1;
      })(function (a) {
        var b = $t("gtm.referrer", 1) || D.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? Cf(
                Ef(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : Zt(String(b))
          : String(b);
      });
    })();
  (Y.o.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Y.__u = b;
        Y.__u.s = "u";
        Y.__u.isVendorTemplate = !0;
        Y.__u.priorityOverride = 0;
        Y.__u.isInfrastructure = !1;
        Y.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : $t("gtm.url", 1)) || Xt();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return Zt(String(c));
        var e = Ef(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var h = b[a("vtp_multiQueryKeys").toString()],
              l = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            h
              ? ta(l)
                ? (n = l)
                : (n = String(l).replace(/\s+/g, "").split(","))
              : (n = [String(l)]);
            for (var p = 0; p < n.length; p++) {
              var q = Cf(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!m || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Cf(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();

  (Y.o.gaawc = ["google"]),
    (function () {
      (function (a) {
        Y.__gaawc = a;
        Y.__gaawc.s = "gaawc";
        Y.__gaawc.isVendorTemplate = !0;
        Y.__gaawc.priorityOverride = 10;
        Y.__gaawc.isInfrastructure = !1;
        Y.__gaawc.runInSiloedMode = !1;
      })(function (a) {
        var b = String(a.vtp_measurementId);
        if (!g(b) || 0 >= b.indexOf("-")) E(a.vtp_gtmOnFailure);
        else {
          var c = $x(a.vtp_fieldsToSet, "name", "value") || {};
          if (c.hasOwnProperty(K.g.Oa) || a.vtp_userProperties) {
            var d = c[K.g.Oa] || {};
            G($x(a.vtp_userProperties, "name", "value"), d);
            c[K.g.Oa] = d;
          }
          a.vtp_enableSendToServerContainer &&
            a.vtp_serverContainerUrl &&
            ((c[K.g.Kb] = a.vtp_serverContainerUrl), (c[K.g.he] = !0));
          var e = a.vtp_userDataVariable;
          e && (c[K.g.ka] = e);
          Wx(c, fe, function (f) {
            return Ca(f);
          });
          Wx(c, he, function (f) {
            return Number(f);
          });
          c.send_page_view = a.vtp_sendPageView;
          jr(fr(b, c), a.vtp_gtmEventId, {
            noTargetGroup: !0,
            originatingEntity: Tp(a.vtp_gtmEntityIndex, a.vtp_gtmEntityName),
          });
          E(a.vtp_gtmOnSuccess);
        }
      });
    })();

  var rz = {};
  rz.dataLayer = Se;
  rz.callback = function (a) {
    Ie.hasOwnProperty(a) && ra(Ie[a]) && Ie[a]();
    delete Ie[a];
  };
  rz.bootstrap = 0;
  rz._spx = !1;
  function sz() {
    re[Eh()] = re[Eh()] || rz;
    Kh();
    Oh() ||
      k(Ph(), function (a, b) {
        Ap(a, b.transportUrl, b.context);
        J(92);
      });
    Ka(Je, Y.o);
    Qc = $c;
  }
  (function (a) {
    function b() {
      m = D.documentElement.getAttribute("data-tag-assistant-present");
      Ws(m) && (l = h.Kj);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (D.referrer) {
        var d = Ef(D.referrer);
        c = "cct.google" === Bf(d, "host");
      }
      if (!c) {
        var e = Vi("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((z["__TAGGY_INSTALLED"] = !0),
        Jb("https://cct.google/taggy/agent.js"));
    }
    if (De) a();
    else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          xe ? ((v = "OGT"), (w = "GTAG")) : De && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x ||
            ((x = []),
            (z["google.tagmanager.debugui2.queue"] = x),
            Jb(
              "https://" +
                pe.Rd +
                "/debug/bootstrap?id=" +
                yh.ctid +
                "&src=" +
                w +
                "&cond=" +
                u +
                "&gtm=" +
                pj()
            ));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Db,
              containerProduct: v,
              debug: !1,
              id: yh.ctid,
              destinations: Bh(),
            },
          };
          y.data.resume = function () {
            a();
          };
          pe.Mi && (y.data.initialPublish = !0);
          x.push(y);
        },
        h = { Ul: 1, Lj: 2, Wj: 3, Oi: 4, Kj: 5 },
        l = void 0,
        m = void 0,
        n = Cf(z.location, "query", !1, void 0, "gtm_debug");
      Ws(n) && (l = h.Lj);
      if (!l && D.referrer) {
        var p = Ef(D.referrer);
        "tagassistant.google.com" === Bf(p, "host") && (l = h.Wj);
      }
      if (!l) {
        var q = Vi("__TAG_ASSISTANT");
        q.length && q[0].length && (l = h.Oi);
      }
      l || b();
      if (!l && Xs(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            l && Db ? f(l) : a();
          },
          t = !1;
        Nb(
          D,
          "TADebugSignal",
          function () {
            r();
          },
          !1
        );
        z.setTimeout(function () {
          r();
        }, 200);
      } else l && Db ? f(l) : a();
    }
  })(function () {
    try {
      Ih();
      if (O(30)) {
      }
      Cg().B();
      ak();
      var b = Fh();
      if (th().canonical[b]) {
        var c = re.zones;
        c && c.unregisterChild(Ah());
      } else {
        (O(7) || O(8) || O(22) || O(19)) && qk();
        up();
        for (
          var d = data.resource || {}, e = d.macros || [], f = 0;
          f < e.length;
          f++
        )
          Fc.push(e[f]);
        for (var h = d.tags || [], l = 0; l < h.length; l++) Ic.push(h[l]);
        for (var m = d.predicates || [], n = 0; n < m.length; n++)
          Hc.push(m[n]);
        for (var p = d.rules || [], q = 0; q < p.length; q++) {
          for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
            var v = r[u][0];
            t[v] = Array.prototype.slice.call(r[u], 1);
            Dc(5) || Dc(7)
              ? (("if" !== v && "unless" !== v) || Pc(t[v]), Za("TAGGING", 22))
              : Dc(6) && Za("TAGGING", 23);
          }
          Gc.push(t);
        }
        Kc = Y;
        Lc = Gu;
        sz();
        if (O(47)) {
          for (
            var w = $e["7"], x = w ? w.split("|") : [], y = {}, A = 0;
            A < x.length;
            A++
          )
            y[x[A]] = !0;
          for (var B = 0; B < ch.length; B++) {
            var C = ch[B],
              H = y[C] ? "granted" : "denied";
            Ig().implicit(C, H);
          }
        }
        Vs();
        Np = !1;
        Op = 0;
        if (
          ("interactive" == D.readyState && !D.createEventObject) ||
          "complete" == D.readyState
        )
          Qp();
        else {
          Nb(D, "DOMContentLoaded", Qp);
          Nb(D, "readystatechange", Qp);
          if (D.createEventObject && D.documentElement.doScroll) {
            var I = !0;
            try {
              I = !z.frameElement;
            } catch (P) {}
            I && Rp();
          }
          Nb(z, "load", Qp);
        }
        ks = !1;
        "complete" === D.readyState ? ms() : Nb(z, "load", ms);
        Yh && (Th(ki), z.setInterval(ji, 864e5));
        Th(Iu);
        Th(Nq);
        Th(Vn);
        Th(Jr);
        Th(Yq);
        Th(Fp);
        Th(fk);
        Th(Dp);
        Th(Uq);
        O(59) && Th(Qq);
        rt();
        Ze(1);
        O(68) && vr();
        He = Ga();
        rz.bootstrap = He;
        if (O(30)) {
        }
      }
    } catch (P) {
      if ((Ze(4), Yh)) {
        var S = ei(!0, !0);
        Mb(S);
      }
    }
  });
})();
