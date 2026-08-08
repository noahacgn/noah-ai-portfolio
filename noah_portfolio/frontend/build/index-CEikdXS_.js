function vv(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var df = { exports: {} }, Au = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rh;
function yv() {
  if (Rh) return Au;
  Rh = 1;
  var v = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function s(f, o, g) {
    var x = null;
    if (g !== void 0 && (x = "" + g), o.key !== void 0 && (x = "" + o.key), "key" in o) {
      g = {};
      for (var A in o)
        A !== "key" && (g[A] = o[A]);
    } else g = o;
    return o = g.ref, {
      $$typeof: v,
      type: f,
      key: x,
      ref: o !== void 0 ? o : null,
      props: g
    };
  }
  return Au.Fragment = c, Au.jsx = s, Au.jsxs = s, Au;
}
var Dh;
function gv() {
  return Dh || (Dh = 1, df.exports = yv()), df.exports;
}
var m = gv(), vf = { exports: {} }, Q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _h;
function Sv() {
  if (_h) return Q;
  _h = 1;
  var v = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), x = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), W = Symbol.iterator;
  function q(y) {
    return y === null || typeof y != "object" ? null : (y = W && y[W] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var $ = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, st = Object.assign, Rt = {};
  function dt(y, M, j) {
    this.props = y, this.context = M, this.refs = Rt, this.updater = j || $;
  }
  dt.prototype.isReactComponent = {}, dt.prototype.setState = function(y, M) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, M, "setState");
  }, dt.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = dt.prototype;
  function K(y, M, j) {
    this.props = y, this.context = M, this.refs = Rt, this.updater = j || $;
  }
  var Tt = K.prototype = new Z();
  Tt.constructor = K, st(Tt, dt.prototype), Tt.isPureReactComponent = !0;
  var I = Array.isArray;
  function it() {
  }
  var V = { H: null, A: null, T: null, S: null }, Ft = Object.prototype.hasOwnProperty;
  function ze(y, M, j) {
    var H = j.ref;
    return {
      $$typeof: v,
      type: y,
      key: M,
      ref: H !== void 0 ? H : null,
      props: j
    };
  }
  function Zl(y, M) {
    return ze(y.type, M, y.props);
  }
  function Oe(y) {
    return typeof y == "object" && y !== null && y.$$typeof === v;
  }
  function kt(y) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(j) {
      return M[j];
    });
  }
  var Al = /\/+/g;
  function Be(y, M) {
    return typeof y == "object" && y !== null && y.key != null ? kt("" + y.key) : M.toString(36);
  }
  function Ae(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(it, it) : (y.status = "pending", y.then(
          function(M) {
            y.status === "pending" && (y.status = "fulfilled", y.value = M);
          },
          function(M) {
            y.status === "pending" && (y.status = "rejected", y.reason = M);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function _(y, M, j, H, J) {
    var P = typeof y;
    (P === "undefined" || P === "boolean") && (y = null);
    var ot = !1;
    if (y === null) ot = !0;
    else
      switch (P) {
        case "bigint":
        case "string":
        case "number":
          ot = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case v:
            case c:
              ot = !0;
              break;
            case B:
              return ot = y._init, _(
                ot(y._payload),
                M,
                j,
                H,
                J
              );
          }
      }
    if (ot)
      return J = J(y), ot = H === "" ? "." + Be(y, 0) : H, I(J) ? (j = "", ot != null && (j = ot.replace(Al, "$&/") + "/"), _(J, M, j, "", function(Ma) {
        return Ma;
      })) : J != null && (Oe(J) && (J = Zl(
        J,
        j + (J.key == null || y && y.key === J.key ? "" : ("" + J.key).replace(
          Al,
          "$&/"
        ) + "/") + ot
      )), M.push(J)), 1;
    ot = 0;
    var Kt = H === "" ? "." : H + ":";
    if (I(y))
      for (var zt = 0; zt < y.length; zt++)
        H = y[zt], P = Kt + Be(H, zt), ot += _(
          H,
          M,
          j,
          P,
          J
        );
    else if (zt = q(y), typeof zt == "function")
      for (y = zt.call(y), zt = 0; !(H = y.next()).done; )
        H = H.value, P = Kt + Be(H, zt++), ot += _(
          H,
          M,
          j,
          P,
          J
        );
    else if (P === "object") {
      if (typeof y.then == "function")
        return _(
          Ae(y),
          M,
          j,
          H,
          J
        );
      throw M = String(y), Error(
        "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ot;
  }
  function N(y, M, j) {
    if (y == null) return y;
    var H = [], J = 0;
    return _(y, H, "", "", function(P) {
      return M.call(j, P, J++);
    }), H;
  }
  function w(y) {
    if (y._status === -1) {
      var M = y._result;
      M = M(), M.then(
        function(j) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = j);
        },
        function(j) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = j);
        }
      ), y._status === -1 && (y._status = 0, y._result = M);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var vt = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var M = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(M)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, bt = {
    map: N,
    forEach: function(y, M, j) {
      N(
        y,
        function() {
          M.apply(this, arguments);
        },
        j
      );
    },
    count: function(y) {
      var M = 0;
      return N(y, function() {
        M++;
      }), M;
    },
    toArray: function(y) {
      return N(y, function(M) {
        return M;
      }) || [];
    },
    only: function(y) {
      if (!Oe(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return Q.Activity = C, Q.Children = bt, Q.Component = dt, Q.Fragment = s, Q.Profiler = o, Q.PureComponent = K, Q.StrictMode = f, Q.Suspense = z, Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, Q.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return V.H.useMemoCache(y);
    }
  }, Q.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, Q.cacheSignal = function() {
    return null;
  }, Q.cloneElement = function(y, M, j) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var H = st({}, y.props), J = y.key;
    if (M != null)
      for (P in M.key !== void 0 && (J = "" + M.key), M)
        !Ft.call(M, P) || P === "key" || P === "__self" || P === "__source" || P === "ref" && M.ref === void 0 || (H[P] = M[P]);
    var P = arguments.length - 2;
    if (P === 1) H.children = j;
    else if (1 < P) {
      for (var ot = Array(P), Kt = 0; Kt < P; Kt++)
        ot[Kt] = arguments[Kt + 2];
      H.children = ot;
    }
    return ze(y.type, J, H);
  }, Q.createContext = function(y) {
    return y = {
      $$typeof: x,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: g,
      _context: y
    }, y;
  }, Q.createElement = function(y, M, j) {
    var H, J = {}, P = null;
    if (M != null)
      for (H in M.key !== void 0 && (P = "" + M.key), M)
        Ft.call(M, H) && H !== "key" && H !== "__self" && H !== "__source" && (J[H] = M[H]);
    var ot = arguments.length - 2;
    if (ot === 1) J.children = j;
    else if (1 < ot) {
      for (var Kt = Array(ot), zt = 0; zt < ot; zt++)
        Kt[zt] = arguments[zt + 2];
      J.children = Kt;
    }
    if (y && y.defaultProps)
      for (H in ot = y.defaultProps, ot)
        J[H] === void 0 && (J[H] = ot[H]);
    return ze(y, P, J);
  }, Q.createRef = function() {
    return { current: null };
  }, Q.forwardRef = function(y) {
    return { $$typeof: A, render: y };
  }, Q.isValidElement = Oe, Q.lazy = function(y) {
    return {
      $$typeof: B,
      _payload: { _status: -1, _result: y },
      _init: w
    };
  }, Q.memo = function(y, M) {
    return {
      $$typeof: b,
      type: y,
      compare: M === void 0 ? null : M
    };
  }, Q.startTransition = function(y) {
    var M = V.T, j = {};
    V.T = j;
    try {
      var H = y(), J = V.S;
      J !== null && J(j, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(it, vt);
    } catch (P) {
      vt(P);
    } finally {
      M !== null && j.types !== null && (M.types = j.types), V.T = M;
    }
  }, Q.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, Q.use = function(y) {
    return V.H.use(y);
  }, Q.useActionState = function(y, M, j) {
    return V.H.useActionState(y, M, j);
  }, Q.useCallback = function(y, M) {
    return V.H.useCallback(y, M);
  }, Q.useContext = function(y) {
    return V.H.useContext(y);
  }, Q.useDebugValue = function() {
  }, Q.useDeferredValue = function(y, M) {
    return V.H.useDeferredValue(y, M);
  }, Q.useEffect = function(y, M) {
    return V.H.useEffect(y, M);
  }, Q.useEffectEvent = function(y) {
    return V.H.useEffectEvent(y);
  }, Q.useId = function() {
    return V.H.useId();
  }, Q.useImperativeHandle = function(y, M, j) {
    return V.H.useImperativeHandle(y, M, j);
  }, Q.useInsertionEffect = function(y, M) {
    return V.H.useInsertionEffect(y, M);
  }, Q.useLayoutEffect = function(y, M) {
    return V.H.useLayoutEffect(y, M);
  }, Q.useMemo = function(y, M) {
    return V.H.useMemo(y, M);
  }, Q.useOptimistic = function(y, M) {
    return V.H.useOptimistic(y, M);
  }, Q.useReducer = function(y, M, j) {
    return V.H.useReducer(y, M, j);
  }, Q.useRef = function(y) {
    return V.H.useRef(y);
  }, Q.useState = function(y) {
    return V.H.useState(y);
  }, Q.useSyncExternalStore = function(y, M, j) {
    return V.H.useSyncExternalStore(
      y,
      M,
      j
    );
  }, Q.useTransition = function() {
    return V.H.useTransition();
  }, Q.version = "19.2.0", Q;
}
var zh;
function Ef() {
  return zh || (zh = 1, vf.exports = Sv()), vf.exports;
}
var nt = Ef();
const bv = /* @__PURE__ */ vv(nt);
var yf = { exports: {} }, Ru = {}, gf = { exports: {} }, Sf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oh;
function pv() {
  return Oh || (Oh = 1, (function(v) {
    function c(_, N) {
      var w = _.length;
      _.push(N);
      t: for (; 0 < w; ) {
        var vt = w - 1 >>> 1, bt = _[vt];
        if (0 < o(bt, N))
          _[vt] = N, _[w] = bt, w = vt;
        else break t;
      }
    }
    function s(_) {
      return _.length === 0 ? null : _[0];
    }
    function f(_) {
      if (_.length === 0) return null;
      var N = _[0], w = _.pop();
      if (w !== N) {
        _[0] = w;
        t: for (var vt = 0, bt = _.length, y = bt >>> 1; vt < y; ) {
          var M = 2 * (vt + 1) - 1, j = _[M], H = M + 1, J = _[H];
          if (0 > o(j, w))
            H < bt && 0 > o(J, j) ? (_[vt] = J, _[H] = w, vt = H) : (_[vt] = j, _[M] = w, vt = M);
          else if (H < bt && 0 > o(J, w))
            _[vt] = J, _[H] = w, vt = H;
          else break t;
        }
      }
      return N;
    }
    function o(_, N) {
      var w = _.sortIndex - N.sortIndex;
      return w !== 0 ? w : _.id - N.id;
    }
    if (v.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var g = performance;
      v.unstable_now = function() {
        return g.now();
      };
    } else {
      var x = Date, A = x.now();
      v.unstable_now = function() {
        return x.now() - A;
      };
    }
    var z = [], b = [], B = 1, C = null, W = 3, q = !1, $ = !1, st = !1, Rt = !1, dt = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    function Tt(_) {
      for (var N = s(b); N !== null; ) {
        if (N.callback === null) f(b);
        else if (N.startTime <= _)
          f(b), N.sortIndex = N.expirationTime, c(z, N);
        else break;
        N = s(b);
      }
    }
    function I(_) {
      if (st = !1, Tt(_), !$)
        if (s(z) !== null)
          $ = !0, it || (it = !0, kt());
        else {
          var N = s(b);
          N !== null && Ae(I, N.startTime - _);
        }
    }
    var it = !1, V = -1, Ft = 5, ze = -1;
    function Zl() {
      return Rt ? !0 : !(v.unstable_now() - ze < Ft);
    }
    function Oe() {
      if (Rt = !1, it) {
        var _ = v.unstable_now();
        ze = _;
        var N = !0;
        try {
          t: {
            $ = !1, st && (st = !1, Z(V), V = -1), q = !0;
            var w = W;
            try {
              e: {
                for (Tt(_), C = s(z); C !== null && !(C.expirationTime > _ && Zl()); ) {
                  var vt = C.callback;
                  if (typeof vt == "function") {
                    C.callback = null, W = C.priorityLevel;
                    var bt = vt(
                      C.expirationTime <= _
                    );
                    if (_ = v.unstable_now(), typeof bt == "function") {
                      C.callback = bt, Tt(_), N = !0;
                      break e;
                    }
                    C === s(z) && f(z), Tt(_);
                  } else f(z);
                  C = s(z);
                }
                if (C !== null) N = !0;
                else {
                  var y = s(b);
                  y !== null && Ae(
                    I,
                    y.startTime - _
                  ), N = !1;
                }
              }
              break t;
            } finally {
              C = null, W = w, q = !1;
            }
            N = void 0;
          }
        } finally {
          N ? kt() : it = !1;
        }
      }
    }
    var kt;
    if (typeof K == "function")
      kt = function() {
        K(Oe);
      };
    else if (typeof MessageChannel < "u") {
      var Al = new MessageChannel(), Be = Al.port2;
      Al.port1.onmessage = Oe, kt = function() {
        Be.postMessage(null);
      };
    } else
      kt = function() {
        dt(Oe, 0);
      };
    function Ae(_, N) {
      V = dt(function() {
        _(v.unstable_now());
      }, N);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, v.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ft = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return W;
    }, v.unstable_next = function(_) {
      switch (W) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = W;
      }
      var w = W;
      W = N;
      try {
        return _();
      } finally {
        W = w;
      }
    }, v.unstable_requestPaint = function() {
      Rt = !0;
    }, v.unstable_runWithPriority = function(_, N) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var w = W;
      W = _;
      try {
        return N();
      } finally {
        W = w;
      }
    }, v.unstable_scheduleCallback = function(_, N, w) {
      var vt = v.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? vt + w : vt) : w = vt, _) {
        case 1:
          var bt = -1;
          break;
        case 2:
          bt = 250;
          break;
        case 5:
          bt = 1073741823;
          break;
        case 4:
          bt = 1e4;
          break;
        default:
          bt = 5e3;
      }
      return bt = w + bt, _ = {
        id: B++,
        callback: N,
        priorityLevel: _,
        startTime: w,
        expirationTime: bt,
        sortIndex: -1
      }, w > vt ? (_.sortIndex = w, c(b, _), s(z) === null && _ === s(b) && (st ? (Z(V), V = -1) : st = !0, Ae(I, w - vt))) : (_.sortIndex = bt, c(z, _), $ || q || ($ = !0, it || (it = !0, kt()))), _;
    }, v.unstable_shouldYield = Zl, v.unstable_wrapCallback = function(_) {
      var N = W;
      return function() {
        var w = W;
        W = N;
        try {
          return _.apply(this, arguments);
        } finally {
          W = w;
        }
      };
    };
  })(Sf)), Sf;
}
var Uh;
function Tv() {
  return Uh || (Uh = 1, gf.exports = pv()), gf.exports;
}
var bf = { exports: {} }, Vt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mh;
function Ev() {
  if (Mh) return Vt;
  Mh = 1;
  var v = Ef();
  function c(z) {
    var b = "https://react.dev/errors/" + z;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++)
        b += "&args[]=" + encodeURIComponent(arguments[B]);
    }
    return "Minified React error #" + z + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var f = {
    d: {
      f: s,
      r: function() {
        throw Error(c(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, o = Symbol.for("react.portal");
  function g(z, b, B) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: C == null ? null : "" + C,
      children: z,
      containerInfo: b,
      implementation: B
    };
  }
  var x = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function A(z, b) {
    if (z === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, Vt.createPortal = function(z, b) {
    var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(c(299));
    return g(z, b, null, B);
  }, Vt.flushSync = function(z) {
    var b = x.T, B = f.p;
    try {
      if (x.T = null, f.p = 2, z) return z();
    } finally {
      x.T = b, f.p = B, f.d.f();
    }
  }, Vt.preconnect = function(z, b) {
    typeof z == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, f.d.C(z, b));
  }, Vt.prefetchDNS = function(z) {
    typeof z == "string" && f.d.D(z);
  }, Vt.preinit = function(z, b) {
    if (typeof z == "string" && b && typeof b.as == "string") {
      var B = b.as, C = A(B, b.crossOrigin), W = typeof b.integrity == "string" ? b.integrity : void 0, q = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      B === "style" ? f.d.S(
        z,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: C,
          integrity: W,
          fetchPriority: q
        }
      ) : B === "script" && f.d.X(z, {
        crossOrigin: C,
        integrity: W,
        fetchPriority: q,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, Vt.preinitModule = function(z, b) {
    if (typeof z == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var B = A(
            b.as,
            b.crossOrigin
          );
          f.d.M(z, {
            crossOrigin: B,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && f.d.M(z);
  }, Vt.preload = function(z, b) {
    if (typeof z == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var B = b.as, C = A(B, b.crossOrigin);
      f.d.L(z, B, {
        crossOrigin: C,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, Vt.preloadModule = function(z, b) {
    if (typeof z == "string")
      if (b) {
        var B = A(b.as, b.crossOrigin);
        f.d.m(z, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: B,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else f.d.m(z);
  }, Vt.requestFormReset = function(z) {
    f.d.r(z);
  }, Vt.unstable_batchedUpdates = function(z, b) {
    return z(b);
  }, Vt.useFormState = function(z, b, B) {
    return x.H.useFormState(z, b, B);
  }, Vt.useFormStatus = function() {
    return x.H.useHostTransitionStatus();
  }, Vt.version = "19.2.0", Vt;
}
var Nh;
function xv() {
  if (Nh) return bf.exports;
  Nh = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (c) {
        console.error(c);
      }
  }
  return v(), bf.exports = Ev(), bf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jh;
function Av() {
  if (jh) return Ru;
  jh = 1;
  var v = Tv(), c = Ef(), s = xv();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function g(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function x(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function A(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function z(t) {
    if (g(t) !== t)
      throw Error(f(188));
  }
  function b(t) {
    var e = t.alternate;
    if (!e) {
      if (e = g(t), e === null) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var u = l.return;
      if (u === null) break;
      var i = u.alternate;
      if (i === null) {
        if (a = u.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (u.child === i.child) {
        for (i = u.child; i; ) {
          if (i === l) return z(u), t;
          if (i === a) return z(u), e;
          i = i.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) l = u, a = i;
      else {
        for (var n = !1, r = u.child; r; ) {
          if (r === l) {
            n = !0, l = u, a = i;
            break;
          }
          if (r === a) {
            n = !0, a = u, l = i;
            break;
          }
          r = r.sibling;
        }
        if (!n) {
          for (r = i.child; r; ) {
            if (r === l) {
              n = !0, l = i, a = u;
              break;
            }
            if (r === a) {
              n = !0, a = i, l = u;
              break;
            }
            r = r.sibling;
          }
          if (!n) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function B(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = B(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var C = Object.assign, W = Symbol.for("react.element"), q = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), st = Symbol.for("react.fragment"), Rt = Symbol.for("react.strict_mode"), dt = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), K = Symbol.for("react.context"), Tt = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), it = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), Ft = Symbol.for("react.lazy"), ze = Symbol.for("react.activity"), Zl = Symbol.for("react.memo_cache_sentinel"), Oe = Symbol.iterator;
  function kt(t) {
    return t === null || typeof t != "object" ? null : (t = Oe && t[Oe] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Al = Symbol.for("react.client.reference");
  function Be(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Al ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case st:
        return "Fragment";
      case dt:
        return "Profiler";
      case Rt:
        return "StrictMode";
      case I:
        return "Suspense";
      case it:
        return "SuspenseList";
      case ze:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case $:
          return "Portal";
        case K:
          return t.displayName || "Context";
        case Z:
          return (t._context.displayName || "Context") + ".Consumer";
        case Tt:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case V:
          return e = t.displayName || null, e !== null ? e : Be(t.type) || "Memo";
        case Ft:
          e = t._payload, t = t._init;
          try {
            return Be(t(e));
          } catch {
          }
      }
    return null;
  }
  var Ae = Array.isArray, _ = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, vt = [], bt = -1;
  function y(t) {
    return { current: t };
  }
  function M(t) {
    0 > bt || (t.current = vt[bt], vt[bt] = null, bt--);
  }
  function j(t, e) {
    bt++, vt[bt] = t.current, t.current = e;
  }
  var H = y(null), J = y(null), P = y(null), ot = y(null);
  function Kt(t, e) {
    switch (j(P, e), j(J, t), j(H, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Fo(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Fo(e), t = ko(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    M(H), j(H, t);
  }
  function zt() {
    M(H), M(J), M(P);
  }
  function Ma(t) {
    t.memoizedState !== null && j(ot, t);
    var e = H.current, l = ko(e, t.type);
    e !== l && (j(J, t), j(H, l));
  }
  function Du(t) {
    J.current === t && (M(H), M(J)), ot.current === t && (M(ot), pu._currentValue = w);
  }
  var Fi, xf;
  function Rl(t) {
    if (Fi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Fi = e && e[1] || "", xf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Fi + t + xf;
  }
  var ki = !1;
  function Wi(t, e) {
    if (!t || ki) return "";
    ki = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var U = function() {
                throw Error();
              };
              if (Object.defineProperty(U.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(U, []);
                } catch (R) {
                  var E = R;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (R) {
                  E = R;
                }
                t.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (R) {
                E = R;
              }
              (U = t()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (R) {
            if (R && E && typeof R.stack == "string")
              return [R.stack, E.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = a.DetermineComponentFrameRoot(), n = i[0], r = i[1];
      if (n && r) {
        var h = n.split(`
`), T = r.split(`
`);
        for (u = a = 0; a < h.length && !h[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < T.length && !T[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === h.length || u === T.length)
          for (a = h.length - 1, u = T.length - 1; 1 <= a && 0 <= u && h[a] !== T[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (h[a] !== T[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || h[a] !== T[u]) {
                  var D = `
` + h[a].replace(" at new ", " at ");
                  return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), D;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      ki = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Rl(l) : "";
  }
  function Kh(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Rl(t.type);
      case 16:
        return Rl("Lazy");
      case 13:
        return t.child !== e && e !== null ? Rl("Suspense Fallback") : Rl("Suspense");
      case 19:
        return Rl("SuspenseList");
      case 0:
      case 15:
        return Wi(t.type, !1);
      case 11:
        return Wi(t.type.render, !1);
      case 1:
        return Wi(t.type, !0);
      case 31:
        return Rl("Activity");
      default:
        return "";
    }
  }
  function Af(t) {
    try {
      var e = "", l = null;
      do
        e += Kh(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var $i = Object.prototype.hasOwnProperty, Ii = v.unstable_scheduleCallback, Pi = v.unstable_cancelCallback, Jh = v.unstable_shouldYield, Fh = v.unstable_requestPaint, ue = v.unstable_now, kh = v.unstable_getCurrentPriorityLevel, Rf = v.unstable_ImmediatePriority, Df = v.unstable_UserBlockingPriority, _u = v.unstable_NormalPriority, Wh = v.unstable_LowPriority, _f = v.unstable_IdlePriority, $h = v.log, Ih = v.unstable_setDisableYieldValue, Na = null, ie = null;
  function Pe(t) {
    if (typeof $h == "function" && Ih(t), ie && typeof ie.setStrictMode == "function")
      try {
        ie.setStrictMode(Na, t);
      } catch {
      }
  }
  var ne = Math.clz32 ? Math.clz32 : em, Ph = Math.log, tm = Math.LN2;
  function em(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Ph(t) / tm | 0) | 0;
  }
  var zu = 256, Ou = 262144, Uu = 4194304;
  function Dl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Mu(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0, i = t.suspendedLanes, n = t.pingedLanes;
    t = t.warmLanes;
    var r = a & 134217727;
    return r !== 0 ? (a = r & ~i, a !== 0 ? u = Dl(a) : (n &= r, n !== 0 ? u = Dl(n) : l || (l = r & ~t, l !== 0 && (u = Dl(l))))) : (r = a & ~i, r !== 0 ? u = Dl(r) : n !== 0 ? u = Dl(n) : l || (l = a & ~t, l !== 0 && (u = Dl(l)))), u === 0 ? 0 : e !== 0 && e !== u && (e & i) === 0 && (i = u & -u, l = e & -e, i >= l || i === 32 && (l & 4194048) !== 0) ? e : u;
  }
  function ja(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function lm(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function zf() {
    var t = Uu;
    return Uu <<= 1, (Uu & 62914560) === 0 && (Uu = 4194304), t;
  }
  function tn(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ba(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function am(t, e, l, a, u, i) {
    var n = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var r = t.entanglements, h = t.expirationTimes, T = t.hiddenUpdates;
    for (l = n & ~l; 0 < l; ) {
      var D = 31 - ne(l), U = 1 << D;
      r[D] = 0, h[D] = -1;
      var E = T[D];
      if (E !== null)
        for (T[D] = null, D = 0; D < E.length; D++) {
          var R = E[D];
          R !== null && (R.lane &= -536870913);
        }
      l &= ~U;
    }
    a !== 0 && Of(t, a, 0), i !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(n & ~e));
  }
  function Of(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - ne(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function Uf(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - ne(l), u = 1 << a;
      u & e | t[a] & e && (t[a] |= e), l &= ~u;
    }
  }
  function Mf(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : en(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function en(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ln(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Nf() {
    var t = N.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Sh(t.type));
  }
  function jf(t, e) {
    var l = N.p;
    try {
      return N.p = t, e();
    } finally {
      N.p = l;
    }
  }
  var tl = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + tl, Wt = "__reactProps$" + tl, Kl = "__reactContainer$" + tl, an = "__reactEvents$" + tl, um = "__reactListeners$" + tl, im = "__reactHandles$" + tl, Bf = "__reactResources$" + tl, Ca = "__reactMarker$" + tl;
  function un(t) {
    delete t[Yt], delete t[Wt], delete t[an], delete t[um], delete t[im];
  }
  function Jl(t) {
    var e = t[Yt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[Kl] || l[Yt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = lh(t); t !== null; ) {
            if (l = t[Yt]) return l;
            t = lh(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Fl(t) {
    if (t = t[Yt] || t[Kl]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function La(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function kl(t) {
    var e = t[Bf];
    return e || (e = t[Bf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Lt(t) {
    t[Ca] = !0;
  }
  var Cf = /* @__PURE__ */ new Set(), Lf = {};
  function _l(t, e) {
    Wl(t, e), Wl(t + "Capture", e);
  }
  function Wl(t, e) {
    for (Lf[t] = e, t = 0; t < e.length; t++)
      Cf.add(e[t]);
  }
  var nm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Hf = {}, Yf = {};
  function cm(t) {
    return $i.call(Yf, t) ? !0 : $i.call(Hf, t) ? !1 : nm.test(t) ? Yf[t] = !0 : (Hf[t] = !0, !1);
  }
  function Nu(t, e, l) {
    if (cm(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function ju(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Ce(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function de(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Gf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function fm(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, i = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(n) {
          l = "" + n, i.call(this, n);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(n) {
          l = "" + n;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function nn(t) {
    if (!t._valueTracker) {
      var e = Gf(t) ? "checked" : "value";
      t._valueTracker = fm(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function qf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = Gf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Bu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var sm = /[\n"\\]/g;
  function ve(t) {
    return t.replace(
      sm,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function cn(t, e, l, a, u, i, n, r) {
    t.name = "", n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" ? t.type = n : t.removeAttribute("type"), e != null ? n === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + de(e)) : t.value !== "" + de(e) && (t.value = "" + de(e)) : n !== "submit" && n !== "reset" || t.removeAttribute("value"), e != null ? fn(t, n, de(e)) : l != null ? fn(t, n, de(l)) : a != null && t.removeAttribute("value"), u == null && i != null && (t.defaultChecked = !!i), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.name = "" + de(r) : t.removeAttribute("name");
  }
  function Xf(t, e, l, a, u, i, n, r) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        nn(t);
        return;
      }
      l = l != null ? "" + de(l) : "", e = e != null ? "" + de(e) : l, r || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = r ? t.checked : !!a, t.defaultChecked = !!a, n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.name = n), nn(t);
  }
  function fn(t, e, l) {
    e === "number" && Bu(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function $l(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < l.length; u++)
        e["$" + l[u]] = !0;
      for (l = 0; l < t.length; l++)
        u = e.hasOwnProperty("$" + t[l].value), t[l].selected !== u && (t[l].selected = u), u && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + de(l), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === l) {
          t[u].selected = !0, a && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function wf(t, e, l) {
    if (e != null && (e = "" + de(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + de(l) : "";
  }
  function Qf(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Ae(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = de(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), nn(t);
  }
  function Il(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var rm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Vf(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || rm.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Zf(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(f(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var u in e)
        a = e[u], e.hasOwnProperty(u) && l[u] !== a && Vf(t, u, a);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && Vf(t, i, e[i]);
  }
  function sn(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var om = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), hm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Cu(t) {
    return hm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Le() {
  }
  var rn = null;
  function on(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Pl = null, ta = null;
  function Kf(t) {
    var e = Fl(t);
    if (e && (t = e.stateNode)) {
      var l = t[Wt] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (cn(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + ve(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var u = a[Wt] || null;
                if (!u) throw Error(f(90));
                cn(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              a = l[e], a.form === t.form && qf(a);
          }
          break t;
        case "textarea":
          wf(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && $l(t, !!l.multiple, e, !1);
      }
    }
  }
  var hn = !1;
  function Jf(t, e, l) {
    if (hn) return t(e, l);
    hn = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (hn = !1, (Pl !== null || ta !== null) && (Ei(), Pl && (e = Pl, t = ta, ta = Pl = null, Kf(e), t)))
        for (e = 0; e < t.length; e++) Kf(t[e]);
    }
  }
  function Ha(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Wt] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        f(231, e, typeof l)
      );
    return l;
  }
  var He = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), mn = !1;
  if (He)
    try {
      var Ya = {};
      Object.defineProperty(Ya, "passive", {
        get: function() {
          mn = !0;
        }
      }), window.addEventListener("test", Ya, Ya), window.removeEventListener("test", Ya, Ya);
    } catch {
      mn = !1;
    }
  var el = null, dn = null, Lu = null;
  function Ff() {
    if (Lu) return Lu;
    var t, e = dn, l = e.length, a, u = "value" in el ? el.value : el.textContent, i = u.length;
    for (t = 0; t < l && e[t] === u[t]; t++) ;
    var n = l - t;
    for (a = 1; a <= n && e[l - a] === u[i - a]; a++) ;
    return Lu = u.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Hu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Yu() {
    return !0;
  }
  function kf() {
    return !1;
  }
  function $t(t) {
    function e(l, a, u, i, n) {
      this._reactName = l, this._targetInst = u, this.type = a, this.nativeEvent = i, this.target = n, this.currentTarget = null;
      for (var r in t)
        t.hasOwnProperty(r) && (l = t[r], this[r] = l ? l(i) : i[r]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Yu : kf, this.isPropagationStopped = kf, this;
    }
    return C(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Yu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Yu);
      },
      persist: function() {
      },
      isPersistent: Yu
    }), e;
  }
  var zl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Gu = $t(zl), Ga = C({}, zl, { view: 0, detail: 0 }), mm = $t(Ga), vn, yn, qa, qu = C({}, Ga, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Sn,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== qa && (qa && t.type === "mousemove" ? (vn = t.screenX - qa.screenX, yn = t.screenY - qa.screenY) : yn = vn = 0, qa = t), vn);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : yn;
    }
  }), Wf = $t(qu), dm = C({}, qu, { dataTransfer: 0 }), vm = $t(dm), ym = C({}, Ga, { relatedTarget: 0 }), gn = $t(ym), gm = C({}, zl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Sm = $t(gm), bm = C({}, zl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), pm = $t(bm), Tm = C({}, zl, { data: 0 }), $f = $t(Tm), Em = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, xm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Am = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Rm(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Am[t]) ? !!e[t] : !1;
  }
  function Sn() {
    return Rm;
  }
  var Dm = C({}, Ga, {
    key: function(t) {
      if (t.key) {
        var e = Em[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Hu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? xm[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Sn,
    charCode: function(t) {
      return t.type === "keypress" ? Hu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Hu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), _m = $t(Dm), zm = C({}, qu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), If = $t(zm), Om = C({}, Ga, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sn
  }), Um = $t(Om), Mm = C({}, zl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Nm = $t(Mm), jm = C({}, qu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bm = $t(jm), Cm = C({}, zl, {
    newState: 0,
    oldState: 0
  }), Lm = $t(Cm), Hm = [9, 13, 27, 32], bn = He && "CompositionEvent" in window, Xa = null;
  He && "documentMode" in document && (Xa = document.documentMode);
  var Ym = He && "TextEvent" in window && !Xa, Pf = He && (!bn || Xa && 8 < Xa && 11 >= Xa), ts = " ", es = !1;
  function ls(t, e) {
    switch (t) {
      case "keyup":
        return Hm.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function as(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ea = !1;
  function Gm(t, e) {
    switch (t) {
      case "compositionend":
        return as(e);
      case "keypress":
        return e.which !== 32 ? null : (es = !0, ts);
      case "textInput":
        return t = e.data, t === ts && es ? null : t;
      default:
        return null;
    }
  }
  function qm(t, e) {
    if (ea)
      return t === "compositionend" || !bn && ls(t, e) ? (t = Ff(), Lu = dn = el = null, ea = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Pf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Xm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function us(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Xm[t.type] : e === "textarea";
  }
  function is(t, e, l, a) {
    Pl ? ta ? ta.push(a) : ta = [a] : Pl = a, e = Oi(e, "onChange"), 0 < e.length && (l = new Gu(
      "onChange",
      "change",
      null,
      l,
      a
    ), t.push({ event: l, listeners: e }));
  }
  var wa = null, Qa = null;
  function wm(t) {
    wo(t, 0);
  }
  function Xu(t) {
    var e = La(t);
    if (qf(e)) return t;
  }
  function ns(t, e) {
    if (t === "change") return e;
  }
  var cs = !1;
  if (He) {
    var pn;
    if (He) {
      var Tn = "oninput" in document;
      if (!Tn) {
        var fs = document.createElement("div");
        fs.setAttribute("oninput", "return;"), Tn = typeof fs.oninput == "function";
      }
      pn = Tn;
    } else pn = !1;
    cs = pn && (!document.documentMode || 9 < document.documentMode);
  }
  function ss() {
    wa && (wa.detachEvent("onpropertychange", rs), Qa = wa = null);
  }
  function rs(t) {
    if (t.propertyName === "value" && Xu(Qa)) {
      var e = [];
      is(
        e,
        Qa,
        t,
        on(t)
      ), Jf(wm, e);
    }
  }
  function Qm(t, e, l) {
    t === "focusin" ? (ss(), wa = e, Qa = l, wa.attachEvent("onpropertychange", rs)) : t === "focusout" && ss();
  }
  function Vm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Xu(Qa);
  }
  function Zm(t, e) {
    if (t === "click") return Xu(e);
  }
  function Km(t, e) {
    if (t === "input" || t === "change")
      return Xu(e);
  }
  function Jm(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ce = typeof Object.is == "function" ? Object.is : Jm;
  function Va(t, e) {
    if (ce(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var u = l[a];
      if (!$i.call(e, u) || !ce(t[u], e[u]))
        return !1;
    }
    return !0;
  }
  function os(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function hs(t, e) {
    var l = os(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length, t <= e && a >= e)
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = os(l);
    }
  }
  function ms(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? ms(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function ds(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Bu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Bu(t.document);
    }
    return e;
  }
  function En(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Fm = He && "documentMode" in document && 11 >= document.documentMode, la = null, xn = null, Za = null, An = !1;
  function vs(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    An || la == null || la !== Bu(a) || (a = la, "selectionStart" in a && En(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Za && Va(Za, a) || (Za = a, a = Oi(xn, "onSelect"), 0 < a.length && (e = new Gu(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: a }), e.target = la)));
  }
  function Ol(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var aa = {
    animationend: Ol("Animation", "AnimationEnd"),
    animationiteration: Ol("Animation", "AnimationIteration"),
    animationstart: Ol("Animation", "AnimationStart"),
    transitionrun: Ol("Transition", "TransitionRun"),
    transitionstart: Ol("Transition", "TransitionStart"),
    transitioncancel: Ol("Transition", "TransitionCancel"),
    transitionend: Ol("Transition", "TransitionEnd")
  }, Rn = {}, ys = {};
  He && (ys = document.createElement("div").style, "AnimationEvent" in window || (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation), "TransitionEvent" in window || delete aa.transitionend.transition);
  function Ul(t) {
    if (Rn[t]) return Rn[t];
    if (!aa[t]) return t;
    var e = aa[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in ys)
        return Rn[t] = e[l];
    return t;
  }
  var gs = Ul("animationend"), Ss = Ul("animationiteration"), bs = Ul("animationstart"), km = Ul("transitionrun"), Wm = Ul("transitionstart"), $m = Ul("transitioncancel"), ps = Ul("transitionend"), Ts = /* @__PURE__ */ new Map(), Dn = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Dn.push("scrollEnd");
  function Re(t, e) {
    Ts.set(t, e), _l(e, [t]);
  }
  var wu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, ye = [], ua = 0, _n = 0;
  function Qu() {
    for (var t = ua, e = _n = ua = 0; e < t; ) {
      var l = ye[e];
      ye[e++] = null;
      var a = ye[e];
      ye[e++] = null;
      var u = ye[e];
      ye[e++] = null;
      var i = ye[e];
      if (ye[e++] = null, a !== null && u !== null) {
        var n = a.pending;
        n === null ? u.next = u : (u.next = n.next, n.next = u), a.pending = u;
      }
      i !== 0 && Es(l, u, i);
    }
  }
  function Vu(t, e, l, a) {
    ye[ua++] = t, ye[ua++] = e, ye[ua++] = l, ye[ua++] = a, _n |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function zn(t, e, l, a) {
    return Vu(t, e, l, a), Zu(t);
  }
  function Ml(t, e) {
    return Vu(t, null, null, e), Zu(t);
  }
  function Es(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var u = !1, i = t.return; i !== null; )
      i.childLanes |= l, a = i.alternate, a !== null && (a.childLanes |= l), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (u = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, u && e !== null && (u = 31 - ne(l), t = i.hiddenUpdates, a = t[u], a === null ? t[u] = [e] : a.push(e), e.lane = l | 536870912), i) : null;
  }
  function Zu(t) {
    if (50 < mu)
      throw mu = 0, Hc = null, Error(f(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ia = {};
  function Im(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fe(t, e, l, a) {
    return new Im(t, e, l, a);
  }
  function On(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Ye(t, e) {
    var l = t.alternate;
    return l === null ? (l = fe(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function xs(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Ku(t, e, l, a, u, i) {
    var n = 0;
    if (a = t, typeof t == "function") On(t) && (n = 1);
    else if (typeof t == "string")
      n = av(
        t,
        l,
        H.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case ze:
          return t = fe(31, l, e, u), t.elementType = ze, t.lanes = i, t;
        case st:
          return Nl(l.children, u, i, e);
        case Rt:
          n = 8, u |= 24;
          break;
        case dt:
          return t = fe(12, l, e, u | 2), t.elementType = dt, t.lanes = i, t;
        case I:
          return t = fe(13, l, e, u), t.elementType = I, t.lanes = i, t;
        case it:
          return t = fe(19, l, e, u), t.elementType = it, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case K:
                n = 10;
                break t;
              case Z:
                n = 9;
                break t;
              case Tt:
                n = 11;
                break t;
              case V:
                n = 14;
                break t;
              case Ft:
                n = 16, a = null;
                break t;
            }
          n = 29, l = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = fe(n, l, e, u), e.elementType = t, e.type = a, e.lanes = i, e;
  }
  function Nl(t, e, l, a) {
    return t = fe(7, t, a, e), t.lanes = l, t;
  }
  function Un(t, e, l) {
    return t = fe(6, t, null, e), t.lanes = l, t;
  }
  function As(t) {
    var e = fe(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Mn(t, e, l) {
    return e = fe(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Rs = /* @__PURE__ */ new WeakMap();
  function ge(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Rs.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Af(e)
      }, Rs.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Af(e)
    };
  }
  var na = [], ca = 0, Ju = null, Ka = 0, Se = [], be = 0, ll = null, Ue = 1, Me = "";
  function Ge(t, e) {
    na[ca++] = Ka, na[ca++] = Ju, Ju = t, Ka = e;
  }
  function Ds(t, e, l) {
    Se[be++] = Ue, Se[be++] = Me, Se[be++] = ll, ll = t;
    var a = Ue;
    t = Me;
    var u = 32 - ne(a) - 1;
    a &= ~(1 << u), l += 1;
    var i = 32 - ne(e) + u;
    if (30 < i) {
      var n = u - u % 5;
      i = (a & (1 << n) - 1).toString(32), a >>= n, u -= n, Ue = 1 << 32 - ne(e) + u | l << u | a, Me = i + t;
    } else
      Ue = 1 << i | l << u | a, Me = t;
  }
  function Nn(t) {
    t.return !== null && (Ge(t, 1), Ds(t, 1, 0));
  }
  function jn(t) {
    for (; t === Ju; )
      Ju = na[--ca], na[ca] = null, Ka = na[--ca], na[ca] = null;
    for (; t === ll; )
      ll = Se[--be], Se[be] = null, Me = Se[--be], Se[be] = null, Ue = Se[--be], Se[be] = null;
  }
  function _s(t, e) {
    Se[be++] = Ue, Se[be++] = Me, Se[be++] = ll, Ue = e.id, Me = e.overflow, ll = t;
  }
  var Gt = null, Et = null, ut = !1, al = null, pe = !1, Bn = Error(f(519));
  function ul(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ja(ge(e, t)), Bn;
  }
  function zs(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[Yt] = t, e[Wt] = a, l) {
      case "dialog":
        et("cancel", e), et("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        et("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < vu.length; l++)
          et(vu[l], e);
        break;
      case "source":
        et("error", e);
        break;
      case "img":
      case "image":
      case "link":
        et("error", e), et("load", e);
        break;
      case "details":
        et("toggle", e);
        break;
      case "input":
        et("invalid", e), Xf(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        et("invalid", e);
        break;
      case "textarea":
        et("invalid", e), Qf(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || Ko(e.textContent, l) ? (a.popover != null && (et("beforetoggle", e), et("toggle", e)), a.onScroll != null && et("scroll", e), a.onScrollEnd != null && et("scrollend", e), a.onClick != null && (e.onclick = Le), e = !0) : e = !1, e || ul(t, !0);
  }
  function Os(t) {
    for (Gt = t.return; Gt; )
      switch (Gt.tag) {
        case 5:
        case 31:
        case 13:
          pe = !1;
          return;
        case 27:
        case 3:
          pe = !0;
          return;
        default:
          Gt = Gt.return;
      }
  }
  function fa(t) {
    if (t !== Gt) return !1;
    if (!ut) return Os(t), ut = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Ic(t.type, t.memoizedProps)), l = !l), l && Et && ul(t), Os(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Et = eh(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Et = eh(t);
    } else
      e === 27 ? (e = Et, Sl(t.type) ? (t = af, af = null, Et = t) : Et = e) : Et = Gt ? Ee(t.stateNode.nextSibling) : null;
    return !0;
  }
  function jl() {
    Et = Gt = null, ut = !1;
  }
  function Cn() {
    var t = al;
    return t !== null && (ee === null ? ee = t : ee.push.apply(
      ee,
      t
    ), al = null), t;
  }
  function Ja(t) {
    al === null ? al = [t] : al.push(t);
  }
  var Ln = y(null), Bl = null, qe = null;
  function il(t, e, l) {
    j(Ln, e._currentValue), e._currentValue = l;
  }
  function Xe(t) {
    t._currentValue = Ln.current, M(Ln);
  }
  function Hn(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function Yn(t, e, l, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var i = u.dependencies;
      if (i !== null) {
        var n = u.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var r = i;
          i = u;
          for (var h = 0; h < e.length; h++)
            if (r.context === e[h]) {
              i.lanes |= l, r = i.alternate, r !== null && (r.lanes |= l), Hn(
                i.return,
                l,
                t
              ), a || (n = null);
              break t;
            }
          i = r.next;
        }
      } else if (u.tag === 18) {
        if (n = u.return, n === null) throw Error(f(341));
        n.lanes |= l, i = n.alternate, i !== null && (i.lanes |= l), Hn(n, l, t), n = null;
      } else n = u.child;
      if (n !== null) n.return = u;
      else
        for (n = u; n !== null; ) {
          if (n === t) {
            n = null;
            break;
          }
          if (u = n.sibling, u !== null) {
            u.return = n.return, n = u;
            break;
          }
          n = n.return;
        }
      u = n;
    }
  }
  function sa(t, e, l, a) {
    t = null;
    for (var u = e, i = !1; u !== null; ) {
      if (!i) {
        if ((u.flags & 524288) !== 0) i = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var n = u.alternate;
        if (n === null) throw Error(f(387));
        if (n = n.memoizedProps, n !== null) {
          var r = u.type;
          ce(u.pendingProps.value, n.value) || (t !== null ? t.push(r) : t = [r]);
        }
      } else if (u === ot.current) {
        if (n = u.alternate, n === null) throw Error(f(387));
        n.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(pu) : t = [pu]);
      }
      u = u.return;
    }
    t !== null && Yn(
      e,
      t,
      l,
      a
    ), e.flags |= 262144;
  }
  function Fu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ce(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Cl(t) {
    Bl = t, qe = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function qt(t) {
    return Us(Bl, t);
  }
  function ku(t, e) {
    return Bl === null && Cl(t), Us(t, e);
  }
  function Us(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, qe === null) {
      if (t === null) throw Error(f(308));
      qe = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else qe = qe.next = e;
    return l;
  }
  var Pm = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, td = v.unstable_scheduleCallback, ed = v.unstable_NormalPriority, Mt = {
    $$typeof: K,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Gn() {
    return {
      controller: new Pm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Fa(t) {
    t.refCount--, t.refCount === 0 && td(ed, function() {
      t.controller.abort();
    });
  }
  var ka = null, qn = 0, ra = 0, oa = null;
  function ld(t, e) {
    if (ka === null) {
      var l = ka = [];
      qn = 0, ra = Qc(), oa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return qn++, e.then(Ms, Ms), e;
  }
  function Ms() {
    if (--qn === 0 && ka !== null) {
      oa !== null && (oa.status = "fulfilled");
      var t = ka;
      ka = null, ra = 0, oa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function ad(t, e) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        l.push(u);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var u = 0; u < l.length; u++) (0, l[u])(e);
      },
      function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < l.length; u++)
          (0, l[u])(void 0);
      }
    ), a;
  }
  var Ns = _.S;
  _.S = function(t, e) {
    yo = ue(), typeof e == "object" && e !== null && typeof e.then == "function" && ld(t, e), Ns !== null && Ns(t, e);
  };
  var Ll = y(null);
  function Xn() {
    var t = Ll.current;
    return t !== null ? t : pt.pooledCache;
  }
  function Wu(t, e) {
    e === null ? j(Ll, Ll.current) : j(Ll, e.pool);
  }
  function js() {
    var t = Xn();
    return t === null ? null : { parent: Mt._currentValue, pool: t };
  }
  var ha = Error(f(460)), wn = Error(f(474)), $u = Error(f(542)), Iu = { then: function() {
  } };
  function Bs(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Cs(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Le, Le), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Hs(t), t;
      default:
        if (typeof e.status == "string") e.then(Le, Le);
        else {
          if (t = pt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(f(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var u = e;
                u.status = "fulfilled", u.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var u = e;
                u.status = "rejected", u.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Hs(t), t;
        }
        throw Yl = e, ha;
    }
  }
  function Hl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Yl = l, ha) : l;
    }
  }
  var Yl = null;
  function Ls() {
    if (Yl === null) throw Error(f(459));
    var t = Yl;
    return Yl = null, t;
  }
  function Hs(t) {
    if (t === ha || t === $u)
      throw Error(f(483));
  }
  var ma = null, Wa = 0;
  function Pu(t) {
    var e = Wa;
    return Wa += 1, ma === null && (ma = []), Cs(ma, t, e);
  }
  function $a(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function ti(t, e) {
    throw e.$$typeof === W ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Ys(t) {
    function e(S, d) {
      if (t) {
        var p = S.deletions;
        p === null ? (S.deletions = [d], S.flags |= 16) : p.push(d);
      }
    }
    function l(S, d) {
      if (!t) return null;
      for (; d !== null; )
        e(S, d), d = d.sibling;
      return null;
    }
    function a(S) {
      for (var d = /* @__PURE__ */ new Map(); S !== null; )
        S.key !== null ? d.set(S.key, S) : d.set(S.index, S), S = S.sibling;
      return d;
    }
    function u(S, d) {
      return S = Ye(S, d), S.index = 0, S.sibling = null, S;
    }
    function i(S, d, p) {
      return S.index = p, t ? (p = S.alternate, p !== null ? (p = p.index, p < d ? (S.flags |= 67108866, d) : p) : (S.flags |= 67108866, d)) : (S.flags |= 1048576, d);
    }
    function n(S) {
      return t && S.alternate === null && (S.flags |= 67108866), S;
    }
    function r(S, d, p, O) {
      return d === null || d.tag !== 6 ? (d = Un(p, S.mode, O), d.return = S, d) : (d = u(d, p), d.return = S, d);
    }
    function h(S, d, p, O) {
      var G = p.type;
      return G === st ? D(
        S,
        d,
        p.props.children,
        O,
        p.key
      ) : d !== null && (d.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Ft && Hl(G) === d.type) ? (d = u(d, p.props), $a(d, p), d.return = S, d) : (d = Ku(
        p.type,
        p.key,
        p.props,
        null,
        S.mode,
        O
      ), $a(d, p), d.return = S, d);
    }
    function T(S, d, p, O) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = Mn(p, S.mode, O), d.return = S, d) : (d = u(d, p.children || []), d.return = S, d);
    }
    function D(S, d, p, O, G) {
      return d === null || d.tag !== 7 ? (d = Nl(
        p,
        S.mode,
        O,
        G
      ), d.return = S, d) : (d = u(d, p), d.return = S, d);
    }
    function U(S, d, p) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return d = Un(
          "" + d,
          S.mode,
          p
        ), d.return = S, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case q:
            return p = Ku(
              d.type,
              d.key,
              d.props,
              null,
              S.mode,
              p
            ), $a(p, d), p.return = S, p;
          case $:
            return d = Mn(
              d,
              S.mode,
              p
            ), d.return = S, d;
          case Ft:
            return d = Hl(d), U(S, d, p);
        }
        if (Ae(d) || kt(d))
          return d = Nl(
            d,
            S.mode,
            p,
            null
          ), d.return = S, d;
        if (typeof d.then == "function")
          return U(S, Pu(d), p);
        if (d.$$typeof === K)
          return U(
            S,
            ku(S, d),
            p
          );
        ti(S, d);
      }
      return null;
    }
    function E(S, d, p, O) {
      var G = d !== null ? d.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return G !== null ? null : r(S, d, "" + p, O);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case q:
            return p.key === G ? h(S, d, p, O) : null;
          case $:
            return p.key === G ? T(S, d, p, O) : null;
          case Ft:
            return p = Hl(p), E(S, d, p, O);
        }
        if (Ae(p) || kt(p))
          return G !== null ? null : D(S, d, p, O, null);
        if (typeof p.then == "function")
          return E(
            S,
            d,
            Pu(p),
            O
          );
        if (p.$$typeof === K)
          return E(
            S,
            d,
            ku(S, p),
            O
          );
        ti(S, p);
      }
      return null;
    }
    function R(S, d, p, O, G) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return S = S.get(p) || null, r(d, S, "" + O, G);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case q:
            return S = S.get(
              O.key === null ? p : O.key
            ) || null, h(d, S, O, G);
          case $:
            return S = S.get(
              O.key === null ? p : O.key
            ) || null, T(d, S, O, G);
          case Ft:
            return O = Hl(O), R(
              S,
              d,
              p,
              O,
              G
            );
        }
        if (Ae(O) || kt(O))
          return S = S.get(p) || null, D(d, S, O, G, null);
        if (typeof O.then == "function")
          return R(
            S,
            d,
            p,
            Pu(O),
            G
          );
        if (O.$$typeof === K)
          return R(
            S,
            d,
            p,
            ku(d, O),
            G
          );
        ti(d, O);
      }
      return null;
    }
    function L(S, d, p, O) {
      for (var G = null, ct = null, Y = d, k = d = 0, at = null; Y !== null && k < p.length; k++) {
        Y.index > k ? (at = Y, Y = null) : at = Y.sibling;
        var ft = E(
          S,
          Y,
          p[k],
          O
        );
        if (ft === null) {
          Y === null && (Y = at);
          break;
        }
        t && Y && ft.alternate === null && e(S, Y), d = i(ft, d, k), ct === null ? G = ft : ct.sibling = ft, ct = ft, Y = at;
      }
      if (k === p.length)
        return l(S, Y), ut && Ge(S, k), G;
      if (Y === null) {
        for (; k < p.length; k++)
          Y = U(S, p[k], O), Y !== null && (d = i(
            Y,
            d,
            k
          ), ct === null ? G = Y : ct.sibling = Y, ct = Y);
        return ut && Ge(S, k), G;
      }
      for (Y = a(Y); k < p.length; k++)
        at = R(
          Y,
          S,
          k,
          p[k],
          O
        ), at !== null && (t && at.alternate !== null && Y.delete(
          at.key === null ? k : at.key
        ), d = i(
          at,
          d,
          k
        ), ct === null ? G = at : ct.sibling = at, ct = at);
      return t && Y.forEach(function(xl) {
        return e(S, xl);
      }), ut && Ge(S, k), G;
    }
    function X(S, d, p, O) {
      if (p == null) throw Error(f(151));
      for (var G = null, ct = null, Y = d, k = d = 0, at = null, ft = p.next(); Y !== null && !ft.done; k++, ft = p.next()) {
        Y.index > k ? (at = Y, Y = null) : at = Y.sibling;
        var xl = E(S, Y, ft.value, O);
        if (xl === null) {
          Y === null && (Y = at);
          break;
        }
        t && Y && xl.alternate === null && e(S, Y), d = i(xl, d, k), ct === null ? G = xl : ct.sibling = xl, ct = xl, Y = at;
      }
      if (ft.done)
        return l(S, Y), ut && Ge(S, k), G;
      if (Y === null) {
        for (; !ft.done; k++, ft = p.next())
          ft = U(S, ft.value, O), ft !== null && (d = i(ft, d, k), ct === null ? G = ft : ct.sibling = ft, ct = ft);
        return ut && Ge(S, k), G;
      }
      for (Y = a(Y); !ft.done; k++, ft = p.next())
        ft = R(Y, S, k, ft.value, O), ft !== null && (t && ft.alternate !== null && Y.delete(ft.key === null ? k : ft.key), d = i(ft, d, k), ct === null ? G = ft : ct.sibling = ft, ct = ft);
      return t && Y.forEach(function(dv) {
        return e(S, dv);
      }), ut && Ge(S, k), G;
    }
    function St(S, d, p, O) {
      if (typeof p == "object" && p !== null && p.type === st && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case q:
            t: {
              for (var G = p.key; d !== null; ) {
                if (d.key === G) {
                  if (G = p.type, G === st) {
                    if (d.tag === 7) {
                      l(
                        S,
                        d.sibling
                      ), O = u(
                        d,
                        p.props.children
                      ), O.return = S, S = O;
                      break t;
                    }
                  } else if (d.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Ft && Hl(G) === d.type) {
                    l(
                      S,
                      d.sibling
                    ), O = u(d, p.props), $a(O, p), O.return = S, S = O;
                    break t;
                  }
                  l(S, d);
                  break;
                } else e(S, d);
                d = d.sibling;
              }
              p.type === st ? (O = Nl(
                p.props.children,
                S.mode,
                O,
                p.key
              ), O.return = S, S = O) : (O = Ku(
                p.type,
                p.key,
                p.props,
                null,
                S.mode,
                O
              ), $a(O, p), O.return = S, S = O);
            }
            return n(S);
          case $:
            t: {
              for (G = p.key; d !== null; ) {
                if (d.key === G)
                  if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                    l(
                      S,
                      d.sibling
                    ), O = u(d, p.children || []), O.return = S, S = O;
                    break t;
                  } else {
                    l(S, d);
                    break;
                  }
                else e(S, d);
                d = d.sibling;
              }
              O = Mn(p, S.mode, O), O.return = S, S = O;
            }
            return n(S);
          case Ft:
            return p = Hl(p), St(
              S,
              d,
              p,
              O
            );
        }
        if (Ae(p))
          return L(
            S,
            d,
            p,
            O
          );
        if (kt(p)) {
          if (G = kt(p), typeof G != "function") throw Error(f(150));
          return p = G.call(p), X(
            S,
            d,
            p,
            O
          );
        }
        if (typeof p.then == "function")
          return St(
            S,
            d,
            Pu(p),
            O
          );
        if (p.$$typeof === K)
          return St(
            S,
            d,
            ku(S, p),
            O
          );
        ti(S, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, d !== null && d.tag === 6 ? (l(S, d.sibling), O = u(d, p), O.return = S, S = O) : (l(S, d), O = Un(p, S.mode, O), O.return = S, S = O), n(S)) : l(S, d);
    }
    return function(S, d, p, O) {
      try {
        Wa = 0;
        var G = St(
          S,
          d,
          p,
          O
        );
        return ma = null, G;
      } catch (Y) {
        if (Y === ha || Y === $u) throw Y;
        var ct = fe(29, Y, null, S.mode);
        return ct.lanes = O, ct.return = S, ct;
      } finally {
      }
    };
  }
  var Gl = Ys(!0), Gs = Ys(!1), nl = !1;
  function Qn(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Vn(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function cl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function fl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (rt & 2) !== 0) {
      var u = a.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), a.pending = e, e = Zu(t), Es(t, null, l), e;
    }
    return Vu(t, a, e, l), Zu(t);
  }
  function Ia(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Uf(t, l);
    }
  }
  function Zn(t, e) {
    var l = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var u = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var n = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? u = i = n : i = i.next = n, l = l.next;
        } while (l !== null);
        i === null ? u = i = e : i = i.next = e;
      } else u = i = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var Kn = !1;
  function Pa() {
    if (Kn) {
      var t = oa;
      if (t !== null) throw t;
    }
  }
  function tu(t, e, l, a) {
    Kn = !1;
    var u = t.updateQueue;
    nl = !1;
    var i = u.firstBaseUpdate, n = u.lastBaseUpdate, r = u.shared.pending;
    if (r !== null) {
      u.shared.pending = null;
      var h = r, T = h.next;
      h.next = null, n === null ? i = T : n.next = T, n = h;
      var D = t.alternate;
      D !== null && (D = D.updateQueue, r = D.lastBaseUpdate, r !== n && (r === null ? D.firstBaseUpdate = T : r.next = T, D.lastBaseUpdate = h));
    }
    if (i !== null) {
      var U = u.baseState;
      n = 0, D = T = h = null, r = i;
      do {
        var E = r.lane & -536870913, R = E !== r.lane;
        if (R ? (lt & E) === E : (a & E) === E) {
          E !== 0 && E === ra && (Kn = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          t: {
            var L = t, X = r;
            E = e;
            var St = l;
            switch (X.tag) {
              case 1:
                if (L = X.payload, typeof L == "function") {
                  U = L.call(St, U, E);
                  break t;
                }
                U = L;
                break t;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = X.payload, E = typeof L == "function" ? L.call(St, U, E) : L, E == null) break t;
                U = C({}, U, E);
                break t;
              case 2:
                nl = !0;
            }
          }
          E = r.callback, E !== null && (t.flags |= 64, R && (t.flags |= 8192), R = u.callbacks, R === null ? u.callbacks = [E] : R.push(E));
        } else
          R = {
            lane: E,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null
          }, D === null ? (T = D = R, h = U) : D = D.next = R, n |= E;
        if (r = r.next, r === null) {
          if (r = u.shared.pending, r === null)
            break;
          R = r, r = R.next, R.next = null, u.lastBaseUpdate = R, u.shared.pending = null;
        }
      } while (!0);
      D === null && (h = U), u.baseState = h, u.firstBaseUpdate = T, u.lastBaseUpdate = D, i === null && (u.shared.lanes = 0), ml |= n, t.lanes = n, t.memoizedState = U;
    }
  }
  function qs(t, e) {
    if (typeof t != "function")
      throw Error(f(191, t));
    t.call(e);
  }
  function Xs(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        qs(l[t], e);
  }
  var da = y(null), ei = y(0);
  function ws(t, e) {
    t = We, j(ei, t), j(da, e), We = t | e.baseLanes;
  }
  function Jn() {
    j(ei, We), j(da, da.current);
  }
  function Fn() {
    We = ei.current, M(da), M(ei);
  }
  var se = y(null), Te = null;
  function sl(t) {
    var e = t.alternate;
    j(Ot, Ot.current & 1), j(se, t), Te === null && (e === null || da.current !== null || e.memoizedState !== null) && (Te = t);
  }
  function kn(t) {
    j(Ot, Ot.current), j(se, t), Te === null && (Te = t);
  }
  function Qs(t) {
    t.tag === 22 ? (j(Ot, Ot.current), j(se, t), Te === null && (Te = t)) : rl();
  }
  function rl() {
    j(Ot, Ot.current), j(se, se.current);
  }
  function re(t) {
    M(se), Te === t && (Te = null), M(Ot);
  }
  var Ot = y(0);
  function li(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || ef(l) || lf(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var we = 0, F = null, yt = null, Nt = null, ai = !1, va = !1, ql = !1, ui = 0, eu = 0, ya = null, ud = 0;
  function Dt() {
    throw Error(f(321));
  }
  function Wn(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ce(t[l], e[l])) return !1;
    return !0;
  }
  function $n(t, e, l, a, u, i) {
    return we = i, F = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, _.H = t === null || t.memoizedState === null ? Dr : hc, ql = !1, i = l(a, u), ql = !1, va && (i = Zs(
      e,
      l,
      a,
      u
    )), Vs(t), i;
  }
  function Vs(t) {
    _.H = uu;
    var e = yt !== null && yt.next !== null;
    if (we = 0, Nt = yt = F = null, ai = !1, eu = 0, ya = null, e) throw Error(f(300));
    t === null || jt || (t = t.dependencies, t !== null && Fu(t) && (jt = !0));
  }
  function Zs(t, e, l, a) {
    F = t;
    var u = 0;
    do {
      if (va && (ya = null), eu = 0, va = !1, 25 <= u) throw Error(f(301));
      if (u += 1, Nt = yt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      _.H = _r, i = e(l, a);
    } while (va);
    return i;
  }
  function id() {
    var t = _.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? lu(e) : e, t = t.useState()[0], (yt !== null ? yt.memoizedState : null) !== t && (F.flags |= 1024), e;
  }
  function In() {
    var t = ui !== 0;
    return ui = 0, t;
  }
  function Pn(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function tc(t) {
    if (ai) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      ai = !1;
    }
    we = 0, Nt = yt = F = null, va = !1, eu = ui = 0, ya = null;
  }
  function Jt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Nt === null ? F.memoizedState = Nt = t : Nt = Nt.next = t, Nt;
  }
  function Ut() {
    if (yt === null) {
      var t = F.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = yt.next;
    var e = Nt === null ? F.memoizedState : Nt.next;
    if (e !== null)
      Nt = e, yt = t;
    else {
      if (t === null)
        throw F.alternate === null ? Error(f(467)) : Error(f(310));
      yt = t, t = {
        memoizedState: yt.memoizedState,
        baseState: yt.baseState,
        baseQueue: yt.baseQueue,
        queue: yt.queue,
        next: null
      }, Nt === null ? F.memoizedState = Nt = t : Nt = Nt.next = t;
    }
    return Nt;
  }
  function ii() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function lu(t) {
    var e = eu;
    return eu += 1, ya === null && (ya = []), t = Cs(ya, t, e), e = F, (Nt === null ? e.memoizedState : Nt.next) === null && (e = e.alternate, _.H = e === null || e.memoizedState === null ? Dr : hc), t;
  }
  function ni(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return lu(t);
      if (t.$$typeof === K) return qt(t);
    }
    throw Error(f(438, String(t)));
  }
  function ec(t) {
    var e = null, l = F.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = F.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = ii(), F.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = Zl;
    return e.index++, l;
  }
  function Qe(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ci(t) {
    var e = Ut();
    return lc(e, yt, t);
  }
  function lc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var u = t.baseQueue, i = a.pending;
    if (i !== null) {
      if (u !== null) {
        var n = u.next;
        u.next = i.next, i.next = n;
      }
      e.baseQueue = u = i, a.pending = null;
    }
    if (i = t.baseState, u === null) t.memoizedState = i;
    else {
      e = u.next;
      var r = n = null, h = null, T = e, D = !1;
      do {
        var U = T.lane & -536870913;
        if (U !== T.lane ? (lt & U) === U : (we & U) === U) {
          var E = T.revertLane;
          if (E === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }), U === ra && (D = !0);
          else if ((we & E) === E) {
            T = T.next, E === ra && (D = !0);
            continue;
          } else
            U = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }, h === null ? (r = h = U, n = i) : h = h.next = U, F.lanes |= E, ml |= E;
          U = T.action, ql && l(i, U), i = T.hasEagerState ? T.eagerState : l(i, U);
        } else
          E = {
            lane: U,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, h === null ? (r = h = E, n = i) : h = h.next = E, F.lanes |= U, ml |= U;
        T = T.next;
      } while (T !== null && T !== e);
      if (h === null ? n = i : h.next = r, !ce(i, t.memoizedState) && (jt = !0, D && (l = oa, l !== null)))
        throw l;
      t.memoizedState = i, t.baseState = n, t.baseQueue = h, a.lastRenderedState = i;
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function ac(t) {
    var e = Ut(), l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, u = l.pending, i = e.memoizedState;
    if (u !== null) {
      l.pending = null;
      var n = u = u.next;
      do
        i = t(i, n.action), n = n.next;
      while (n !== u);
      ce(i, e.memoizedState) || (jt = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
    }
    return [i, a];
  }
  function Ks(t, e, l) {
    var a = F, u = Ut(), i = ut;
    if (i) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var n = !ce(
      (yt || u).memoizedState,
      l
    );
    if (n && (u.memoizedState = l, jt = !0), u = u.queue, nc(ks.bind(null, a, u, t), [
      t
    ]), u.getSnapshot !== e || n || Nt !== null && Nt.memoizedState.tag & 1) {
      if (a.flags |= 2048, ga(
        9,
        { destroy: void 0 },
        Fs.bind(
          null,
          a,
          u,
          l,
          e
        ),
        null
      ), pt === null) throw Error(f(349));
      i || (we & 127) !== 0 || Js(a, e, l);
    }
    return l;
  }
  function Js(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = F.updateQueue, e === null ? (e = ii(), F.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function Fs(t, e, l, a) {
    e.value = l, e.getSnapshot = a, Ws(e) && $s(t);
  }
  function ks(t, e, l) {
    return l(function() {
      Ws(e) && $s(t);
    });
  }
  function Ws(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ce(t, l);
    } catch {
      return !0;
    }
  }
  function $s(t) {
    var e = Ml(t, 2);
    e !== null && le(e, t, 2);
  }
  function uc(t) {
    var e = Jt();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), ql) {
        Pe(!0);
        try {
          l();
        } finally {
          Pe(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qe,
      lastRenderedState: t
    }, e;
  }
  function Is(t, e, l, a) {
    return t.baseState = l, lc(
      t,
      yt,
      typeof a == "function" ? a : Qe
    );
  }
  function nd(t, e, l, a, u) {
    if (ri(t)) throw Error(f(485));
    if (t = e.action, t !== null) {
      var i = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(n) {
          i.listeners.push(n);
        }
      };
      _.T !== null ? l(!0) : i.isTransition = !1, a(i), l = e.pending, l === null ? (i.next = e.pending = i, Ps(e, i)) : (i.next = l.next, e.pending = l.next = i);
    }
  }
  function Ps(t, e) {
    var l = e.action, a = e.payload, u = t.state;
    if (e.isTransition) {
      var i = _.T, n = {};
      _.T = n;
      try {
        var r = l(u, a), h = _.S;
        h !== null && h(n, r), tr(t, e, r);
      } catch (T) {
        ic(t, e, T);
      } finally {
        i !== null && n.types !== null && (i.types = n.types), _.T = i;
      }
    } else
      try {
        i = l(u, a), tr(t, e, i);
      } catch (T) {
        ic(t, e, T);
      }
  }
  function tr(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        er(t, e, a);
      },
      function(a) {
        return ic(t, e, a);
      }
    ) : er(t, e, l);
  }
  function er(t, e, l) {
    e.status = "fulfilled", e.value = l, lr(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Ps(t, l)));
  }
  function ic(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, lr(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function lr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ar(t, e) {
    return e;
  }
  function ur(t, e) {
    if (ut) {
      var l = pt.formState;
      if (l !== null) {
        t: {
          var a = F;
          if (ut) {
            if (Et) {
              e: {
                for (var u = Et, i = pe; u.nodeType !== 8; ) {
                  if (!i) {
                    u = null;
                    break e;
                  }
                  if (u = Ee(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                i = u.data, u = i === "F!" || i === "F" ? u : null;
              }
              if (u) {
                Et = Ee(
                  u.nextSibling
                ), a = u.data === "F!";
                break t;
              }
            }
            ul(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return l = Jt(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ar,
      lastRenderedState: e
    }, l.queue = a, l = xr.bind(
      null,
      F,
      a
    ), a.dispatch = l, a = uc(!1), i = oc.bind(
      null,
      F,
      !1,
      a.queue
    ), a = Jt(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = u, l = nd.bind(
      null,
      F,
      u,
      i,
      l
    ), u.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function ir(t) {
    var e = Ut();
    return nr(e, yt, t);
  }
  function nr(t, e, l) {
    if (e = lc(
      t,
      e,
      ar
    )[0], t = ci(Qe)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = lu(e);
      } catch (n) {
        throw n === ha ? $u : n;
      }
    else a = e;
    e = Ut();
    var u = e.queue, i = u.dispatch;
    return l !== e.memoizedState && (F.flags |= 2048, ga(
      9,
      { destroy: void 0 },
      cd.bind(null, u, l),
      null
    )), [a, i, t];
  }
  function cd(t, e) {
    t.action = e;
  }
  function cr(t) {
    var e = Ut(), l = yt;
    if (l !== null)
      return nr(e, l, t);
    Ut(), e = e.memoizedState, l = Ut();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function ga(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = F.updateQueue, e === null && (e = ii(), F.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function fr() {
    return Ut().memoizedState;
  }
  function fi(t, e, l, a) {
    var u = Jt();
    F.flags |= t, u.memoizedState = ga(
      1 | e,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function si(t, e, l, a) {
    var u = Ut();
    a = a === void 0 ? null : a;
    var i = u.memoizedState.inst;
    yt !== null && a !== null && Wn(a, yt.memoizedState.deps) ? u.memoizedState = ga(e, i, l, a) : (F.flags |= t, u.memoizedState = ga(
      1 | e,
      i,
      l,
      a
    ));
  }
  function sr(t, e) {
    fi(8390656, 8, t, e);
  }
  function nc(t, e) {
    si(2048, 8, t, e);
  }
  function fd(t) {
    F.flags |= 4;
    var e = F.updateQueue;
    if (e === null)
      e = ii(), F.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function rr(t) {
    var e = Ut().memoizedState;
    return fd({ ref: e, nextImpl: t }), function() {
      if ((rt & 2) !== 0) throw Error(f(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function or(t, e) {
    return si(4, 2, t, e);
  }
  function hr(t, e) {
    return si(4, 4, t, e);
  }
  function mr(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function dr(t, e, l) {
    l = l != null ? l.concat([t]) : null, si(4, 4, mr.bind(null, e, t), l);
  }
  function cc() {
  }
  function vr(t, e) {
    var l = Ut();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Wn(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function yr(t, e) {
    var l = Ut();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Wn(e, a[1]))
      return a[0];
    if (a = t(), ql) {
      Pe(!0);
      try {
        t();
      } finally {
        Pe(!1);
      }
    }
    return l.memoizedState = [a, e], a;
  }
  function fc(t, e, l) {
    return l === void 0 || (we & 1073741824) !== 0 && (lt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = So(), F.lanes |= t, ml |= t, l);
  }
  function gr(t, e, l, a) {
    return ce(l, e) ? l : da.current !== null ? (t = fc(t, l, a), ce(t, e) || (jt = !0), t) : (we & 42) === 0 || (we & 1073741824) !== 0 && (lt & 261930) === 0 ? (jt = !0, t.memoizedState = l) : (t = So(), F.lanes |= t, ml |= t, e);
  }
  function Sr(t, e, l, a, u) {
    var i = N.p;
    N.p = i !== 0 && 8 > i ? i : 8;
    var n = _.T, r = {};
    _.T = r, oc(t, !1, e, l);
    try {
      var h = u(), T = _.S;
      if (T !== null && T(r, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var D = ad(
          h,
          a
        );
        au(
          t,
          e,
          D,
          me(t)
        );
      } else
        au(
          t,
          e,
          a,
          me(t)
        );
    } catch (U) {
      au(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: U },
        me()
      );
    } finally {
      N.p = i, n !== null && r.types !== null && (n.types = r.types), _.T = n;
    }
  }
  function sd() {
  }
  function sc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var u = br(t).queue;
    Sr(
      t,
      u,
      e,
      w,
      l === null ? sd : function() {
        return pr(t), l(a);
      }
    );
  }
  function br(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: w,
      baseState: w,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qe,
        lastRenderedState: w
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qe,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function pr(t) {
    var e = br(t);
    e.next === null && (e = t.alternate.memoizedState), au(
      t,
      e.next.queue,
      {},
      me()
    );
  }
  function rc() {
    return qt(pu);
  }
  function Tr() {
    return Ut().memoizedState;
  }
  function Er() {
    return Ut().memoizedState;
  }
  function rd(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = me();
          t = cl(l);
          var a = fl(e, t, l);
          a !== null && (le(a, e, l), Ia(a, e, l)), e = { cache: Gn() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function od(t, e, l) {
    var a = me();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ri(t) ? Ar(e, l) : (l = zn(t, e, l, a), l !== null && (le(l, t, a), Rr(l, e, a)));
  }
  function xr(t, e, l) {
    var a = me();
    au(t, e, l, a);
  }
  function au(t, e, l, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ri(t)) Ar(e, u);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var n = e.lastRenderedState, r = i(n, l);
          if (u.hasEagerState = !0, u.eagerState = r, ce(r, n))
            return Vu(t, e, u, 0), pt === null && Qu(), !1;
        } catch {
        } finally {
        }
      if (l = zn(t, e, u, a), l !== null)
        return le(l, t, a), Rr(l, e, a), !0;
    }
    return !1;
  }
  function oc(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: Qc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ri(t)) {
      if (e) throw Error(f(479));
    } else
      e = zn(
        t,
        l,
        a,
        2
      ), e !== null && le(e, t, 2);
  }
  function ri(t) {
    var e = t.alternate;
    return t === F || e !== null && e === F;
  }
  function Ar(t, e) {
    va = ai = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Rr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Uf(t, l);
    }
  }
  var uu = {
    readContext: qt,
    use: ni,
    useCallback: Dt,
    useContext: Dt,
    useEffect: Dt,
    useImperativeHandle: Dt,
    useLayoutEffect: Dt,
    useInsertionEffect: Dt,
    useMemo: Dt,
    useReducer: Dt,
    useRef: Dt,
    useState: Dt,
    useDebugValue: Dt,
    useDeferredValue: Dt,
    useTransition: Dt,
    useSyncExternalStore: Dt,
    useId: Dt,
    useHostTransitionStatus: Dt,
    useFormState: Dt,
    useActionState: Dt,
    useOptimistic: Dt,
    useMemoCache: Dt,
    useCacheRefresh: Dt
  };
  uu.useEffectEvent = Dt;
  var Dr = {
    readContext: qt,
    use: ni,
    useCallback: function(t, e) {
      return Jt().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: qt,
    useEffect: sr,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, fi(
        4194308,
        4,
        mr.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return fi(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      fi(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = Jt();
      e = e === void 0 ? null : e;
      var a = t();
      if (ql) {
        Pe(!0);
        try {
          t();
        } finally {
          Pe(!1);
        }
      }
      return l.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, l) {
      var a = Jt();
      if (l !== void 0) {
        var u = l(e);
        if (ql) {
          Pe(!0);
          try {
            l(e);
          } finally {
            Pe(!1);
          }
        }
      } else u = e;
      return a.memoizedState = a.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, a.queue = t, t = t.dispatch = od.bind(
        null,
        F,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = Jt();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = uc(t);
      var e = t.queue, l = xr.bind(null, F, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: cc,
    useDeferredValue: function(t, e) {
      var l = Jt();
      return fc(l, t, e);
    },
    useTransition: function() {
      var t = uc(!1);
      return t = Sr.bind(
        null,
        F,
        t.queue,
        !0,
        !1
      ), Jt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = F, u = Jt();
      if (ut) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = e(), pt === null)
          throw Error(f(349));
        (lt & 127) !== 0 || Js(a, e, l);
      }
      u.memoizedState = l;
      var i = { value: l, getSnapshot: e };
      return u.queue = i, sr(ks.bind(null, a, i, t), [
        t
      ]), a.flags |= 2048, ga(
        9,
        { destroy: void 0 },
        Fs.bind(
          null,
          a,
          i,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = Jt(), e = pt.identifierPrefix;
      if (ut) {
        var l = Me, a = Ue;
        l = (a & ~(1 << 32 - ne(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = ui++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = ud++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: rc,
    useFormState: ur,
    useActionState: ur,
    useOptimistic: function(t) {
      var e = Jt();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = oc.bind(
        null,
        F,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: ec,
    useCacheRefresh: function() {
      return Jt().memoizedState = rd.bind(
        null,
        F
      );
    },
    useEffectEvent: function(t) {
      var e = Jt(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((rt & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, hc = {
    readContext: qt,
    use: ni,
    useCallback: vr,
    useContext: qt,
    useEffect: nc,
    useImperativeHandle: dr,
    useInsertionEffect: or,
    useLayoutEffect: hr,
    useMemo: yr,
    useReducer: ci,
    useRef: fr,
    useState: function() {
      return ci(Qe);
    },
    useDebugValue: cc,
    useDeferredValue: function(t, e) {
      var l = Ut();
      return gr(
        l,
        yt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ci(Qe)[0], e = Ut().memoizedState;
      return [
        typeof t == "boolean" ? t : lu(t),
        e
      ];
    },
    useSyncExternalStore: Ks,
    useId: Tr,
    useHostTransitionStatus: rc,
    useFormState: ir,
    useActionState: ir,
    useOptimistic: function(t, e) {
      var l = Ut();
      return Is(l, yt, t, e);
    },
    useMemoCache: ec,
    useCacheRefresh: Er
  };
  hc.useEffectEvent = rr;
  var _r = {
    readContext: qt,
    use: ni,
    useCallback: vr,
    useContext: qt,
    useEffect: nc,
    useImperativeHandle: dr,
    useInsertionEffect: or,
    useLayoutEffect: hr,
    useMemo: yr,
    useReducer: ac,
    useRef: fr,
    useState: function() {
      return ac(Qe);
    },
    useDebugValue: cc,
    useDeferredValue: function(t, e) {
      var l = Ut();
      return yt === null ? fc(l, t, e) : gr(
        l,
        yt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ac(Qe)[0], e = Ut().memoizedState;
      return [
        typeof t == "boolean" ? t : lu(t),
        e
      ];
    },
    useSyncExternalStore: Ks,
    useId: Tr,
    useHostTransitionStatus: rc,
    useFormState: cr,
    useActionState: cr,
    useOptimistic: function(t, e) {
      var l = Ut();
      return yt !== null ? Is(l, yt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: ec,
    useCacheRefresh: Er
  };
  _r.useEffectEvent = rr;
  function mc(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : C({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var dc = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = me(), u = cl(a);
      u.payload = e, l != null && (u.callback = l), e = fl(t, u, a), e !== null && (le(e, t, a), Ia(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = me(), u = cl(a);
      u.tag = 1, u.payload = e, l != null && (u.callback = l), e = fl(t, u, a), e !== null && (le(e, t, a), Ia(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = me(), a = cl(l);
      a.tag = 2, e != null && (a.callback = e), e = fl(t, a, l), e !== null && (le(e, t, l), Ia(e, t, l));
    }
  };
  function zr(t, e, l, a, u, i, n) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, i, n) : e.prototype && e.prototype.isPureReactComponent ? !Va(l, a) || !Va(u, i) : !0;
  }
  function Or(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && dc.enqueueReplaceState(e, e.state, null);
  }
  function Xl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = C({}, l));
      for (var u in t)
        l[u] === void 0 && (l[u] = t[u]);
    }
    return l;
  }
  function Ur(t) {
    wu(t);
  }
  function Mr(t) {
    console.error(t);
  }
  function Nr(t) {
    wu(t);
  }
  function oi(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function jr(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function vc(t, e, l) {
    return l = cl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      oi(t, e);
    }, l;
  }
  function Br(t) {
    return t = cl(t), t.tag = 3, t;
  }
  function Cr(t, e, l, a) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var i = a.value;
      t.payload = function() {
        return u(i);
      }, t.callback = function() {
        jr(e, l, a);
      };
    }
    var n = l.stateNode;
    n !== null && typeof n.componentDidCatch == "function" && (t.callback = function() {
      jr(e, l, a), typeof u != "function" && (dl === null ? dl = /* @__PURE__ */ new Set([this]) : dl.add(this));
      var r = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function hd(t, e, l, a, u) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && sa(
        e,
        l,
        u,
        !0
      ), l = se.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Te === null ? xi() : l.alternate === null && _t === 0 && (_t = 3), l.flags &= -257, l.flags |= 65536, l.lanes = u, a === Iu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), qc(t, a, u)), !1;
          case 22:
            return l.flags |= 65536, a === Iu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), qc(t, a, u)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return qc(t, a, u), xi(), !1;
    }
    if (ut)
      return e = se.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, a !== Bn && (t = Error(f(422), { cause: a }), Ja(ge(t, l)))) : (a !== Bn && (e = Error(f(423), {
        cause: a
      }), Ja(
        ge(e, l)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = ge(a, l), u = vc(
        t.stateNode,
        a,
        u
      ), Zn(t, u), _t !== 4 && (_t = 2)), !1;
    var i = Error(f(520), { cause: a });
    if (i = ge(i, l), hu === null ? hu = [i] : hu.push(i), _t !== 4 && (_t = 2), e === null) return !0;
    a = ge(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = u & -u, l.lanes |= t, t = vc(l.stateNode, a, t), Zn(l, t), !1;
        case 1:
          if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (dl === null || !dl.has(i))))
            return l.flags |= 65536, u &= -u, l.lanes |= u, u = Br(u), Cr(
              u,
              t,
              l,
              a
            ), Zn(l, u), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var yc = Error(f(461)), jt = !1;
  function Xt(t, e, l, a) {
    e.child = t === null ? Gs(e, null, l, a) : Gl(
      e,
      t.child,
      l,
      a
    );
  }
  function Lr(t, e, l, a, u) {
    l = l.render;
    var i = e.ref;
    if ("ref" in a) {
      var n = {};
      for (var r in a)
        r !== "ref" && (n[r] = a[r]);
    } else n = a;
    return Cl(e), a = $n(
      t,
      e,
      l,
      n,
      i,
      u
    ), r = In(), t !== null && !jt ? (Pn(t, e, u), Ve(t, e, u)) : (ut && r && Nn(e), e.flags |= 1, Xt(t, e, a, u), e.child);
  }
  function Hr(t, e, l, a, u) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" && !On(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = i, Yr(
        t,
        e,
        i,
        a,
        u
      )) : (t = Ku(
        l.type,
        null,
        a,
        e,
        e.mode,
        u
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !Ac(t, u)) {
      var n = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Va, l(n, a) && t.ref === e.ref)
        return Ve(t, e, u);
    }
    return e.flags |= 1, t = Ye(i, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Yr(t, e, l, a, u) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (Va(i, a) && t.ref === e.ref)
        if (jt = !1, e.pendingProps = a = i, Ac(t, u))
          (t.flags & 131072) !== 0 && (jt = !0);
        else
          return e.lanes = t.lanes, Ve(t, e, u);
    }
    return gc(
      t,
      e,
      l,
      a,
      u
    );
  }
  function Gr(t, e, l, a) {
    var u = a.children, i = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, t !== null) {
          for (a = e.child = t.child, u = 0; a !== null; )
            u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~i;
        } else a = 0, e.child = null;
        return qr(
          t,
          e,
          i,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Wu(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? ws(e, i) : Jn(), Qs(e);
      else
        return a = e.lanes = 536870912, qr(
          t,
          e,
          i !== null ? i.baseLanes | l : l,
          l,
          a
        );
    } else
      i !== null ? (Wu(e, i.cachePool), ws(e, i), rl(), e.memoizedState = null) : (t !== null && Wu(e, null), Jn(), rl());
    return Xt(t, e, u, l), e.child;
  }
  function iu(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function qr(t, e, l, a, u) {
    var i = Xn();
    return i = i === null ? null : { parent: Mt._currentValue, pool: i }, e.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, t !== null && Wu(e, null), Jn(), Qs(e), t !== null && sa(t, e, a, !0), e.childLanes = u, null;
  }
  function hi(t, e) {
    return e = di(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Xr(t, e, l) {
    return Gl(e, t.child, null, l), t = hi(e, e.pendingProps), t.flags |= 2, re(e), e.memoizedState = null, t;
  }
  function md(t, e, l) {
    var a = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (ut) {
        if (a.mode === "hidden")
          return t = hi(e, a), e.lanes = 536870912, iu(null, t);
        if (kn(e), (t = Et) ? (t = th(
          t,
          pe
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ll !== null ? { id: Ue, overflow: Me } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = As(t), l.return = e, e.child = l, Gt = e, Et = null)) : t = null, t === null) throw ul(e);
        return e.lanes = 536870912, null;
      }
      return hi(e, a);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var n = i.dehydrated;
      if (kn(e), u)
        if (e.flags & 256)
          e.flags &= -257, e = Xr(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(f(558));
      else if (jt || sa(t, e, l, !1), u = (l & t.childLanes) !== 0, jt || u) {
        if (a = pt, a !== null && (n = Mf(a, l), n !== 0 && n !== i.retryLane))
          throw i.retryLane = n, Ml(t, n), le(a, t, n), yc;
        xi(), e = Xr(
          t,
          e,
          l
        );
      } else
        t = i.treeContext, Et = Ee(n.nextSibling), Gt = e, ut = !0, al = null, pe = !1, t !== null && _s(e, t), e = hi(e, a), e.flags |= 4096;
      return e;
    }
    return t = Ye(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function mi(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function gc(t, e, l, a, u) {
    return Cl(e), l = $n(
      t,
      e,
      l,
      a,
      void 0,
      u
    ), a = In(), t !== null && !jt ? (Pn(t, e, u), Ve(t, e, u)) : (ut && a && Nn(e), e.flags |= 1, Xt(t, e, l, u), e.child);
  }
  function wr(t, e, l, a, u, i) {
    return Cl(e), e.updateQueue = null, l = Zs(
      e,
      a,
      l,
      u
    ), Vs(t), a = In(), t !== null && !jt ? (Pn(t, e, i), Ve(t, e, i)) : (ut && a && Nn(e), e.flags |= 1, Xt(t, e, l, i), e.child);
  }
  function Qr(t, e, l, a, u) {
    if (Cl(e), e.stateNode === null) {
      var i = ia, n = l.contextType;
      typeof n == "object" && n !== null && (i = qt(n)), i = new l(a, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = dc, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = a, i.state = e.memoizedState, i.refs = {}, Qn(e), n = l.contextType, i.context = typeof n == "object" && n !== null ? qt(n) : ia, i.state = e.memoizedState, n = l.getDerivedStateFromProps, typeof n == "function" && (mc(
        e,
        l,
        n,
        a
      ), i.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (n = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), n !== i.state && dc.enqueueReplaceState(i, i.state, null), tu(e, a, i, u), Pa(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      i = e.stateNode;
      var r = e.memoizedProps, h = Xl(l, r);
      i.props = h;
      var T = i.context, D = l.contextType;
      n = ia, typeof D == "object" && D !== null && (n = qt(D));
      var U = l.getDerivedStateFromProps;
      D = typeof U == "function" || typeof i.getSnapshotBeforeUpdate == "function", r = e.pendingProps !== r, D || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (r || T !== n) && Or(
        e,
        i,
        a,
        n
      ), nl = !1;
      var E = e.memoizedState;
      i.state = E, tu(e, a, i, u), Pa(), T = e.memoizedState, r || E !== T || nl ? (typeof U == "function" && (mc(
        e,
        l,
        U,
        a
      ), T = e.memoizedState), (h = nl || zr(
        e,
        l,
        h,
        a,
        E,
        T,
        n
      )) ? (D || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = T), i.props = a, i.state = T, i.context = n, a = h) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      i = e.stateNode, Vn(t, e), n = e.memoizedProps, D = Xl(l, n), i.props = D, U = e.pendingProps, E = i.context, T = l.contextType, h = ia, typeof T == "object" && T !== null && (h = qt(T)), r = l.getDerivedStateFromProps, (T = typeof r == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (n !== U || E !== h) && Or(
        e,
        i,
        a,
        h
      ), nl = !1, E = e.memoizedState, i.state = E, tu(e, a, i, u), Pa();
      var R = e.memoizedState;
      n !== U || E !== R || nl || t !== null && t.dependencies !== null && Fu(t.dependencies) ? (typeof r == "function" && (mc(
        e,
        l,
        r,
        a
      ), R = e.memoizedState), (D = nl || zr(
        e,
        l,
        D,
        a,
        E,
        R,
        h
      ) || t !== null && t.dependencies !== null && Fu(t.dependencies)) ? (T || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, R, h), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        R,
        h
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || n === t.memoizedProps && E === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || n === t.memoizedProps && E === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = R), i.props = a, i.state = R, i.context = h, a = D) : (typeof i.componentDidUpdate != "function" || n === t.memoizedProps && E === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || n === t.memoizedProps && E === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return i = a, mi(t, e), a = (e.flags & 128) !== 0, i || a ? (i = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && a ? (e.child = Gl(
      e,
      t.child,
      null,
      u
    ), e.child = Gl(
      e,
      null,
      l,
      u
    )) : Xt(t, e, l, u), e.memoizedState = i.state, t = e.child) : t = Ve(
      t,
      e,
      u
    ), t;
  }
  function Vr(t, e, l, a) {
    return jl(), e.flags |= 256, Xt(t, e, l, a), e.child;
  }
  var Sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function bc(t) {
    return { baseLanes: t, cachePool: js() };
  }
  function pc(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= he), t;
  }
  function Zr(t, e, l) {
    var a = e.pendingProps, u = !1, i = (e.flags & 128) !== 0, n;
    if ((n = i) || (n = t !== null && t.memoizedState === null ? !1 : (Ot.current & 2) !== 0), n && (u = !0, e.flags &= -129), n = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (ut) {
        if (u ? sl(e) : rl(), (t = Et) ? (t = th(
          t,
          pe
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ll !== null ? { id: Ue, overflow: Me } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = As(t), l.return = e, e.child = l, Gt = e, Et = null)) : t = null, t === null) throw ul(e);
        return lf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var r = a.children;
      return a = a.fallback, u ? (rl(), u = e.mode, r = di(
        { mode: "hidden", children: r },
        u
      ), a = Nl(
        a,
        u,
        l,
        null
      ), r.return = e, a.return = e, r.sibling = a, e.child = r, a = e.child, a.memoizedState = bc(l), a.childLanes = pc(
        t,
        n,
        l
      ), e.memoizedState = Sc, iu(null, a)) : (sl(e), Tc(e, r));
    }
    var h = t.memoizedState;
    if (h !== null && (r = h.dehydrated, r !== null)) {
      if (i)
        e.flags & 256 ? (sl(e), e.flags &= -257, e = Ec(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (rl(), e.child = t.child, e.flags |= 128, e = null) : (rl(), r = a.fallback, u = e.mode, a = di(
          { mode: "visible", children: a.children },
          u
        ), r = Nl(
          r,
          u,
          l,
          null
        ), r.flags |= 2, a.return = e, r.return = e, a.sibling = r, e.child = a, Gl(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = bc(l), a.childLanes = pc(
          t,
          n,
          l
        ), e.memoizedState = Sc, e = iu(null, a));
      else if (sl(e), lf(r)) {
        if (n = r.nextSibling && r.nextSibling.dataset, n) var T = n.dgst;
        n = T, a = Error(f(419)), a.stack = "", a.digest = n, Ja({ value: a, source: null, stack: null }), e = Ec(
          t,
          e,
          l
        );
      } else if (jt || sa(t, e, l, !1), n = (l & t.childLanes) !== 0, jt || n) {
        if (n = pt, n !== null && (a = Mf(n, l), a !== 0 && a !== h.retryLane))
          throw h.retryLane = a, Ml(t, a), le(n, t, a), yc;
        ef(r) || xi(), e = Ec(
          t,
          e,
          l
        );
      } else
        ef(r) ? (e.flags |= 192, e.child = t.child, e = null) : (t = h.treeContext, Et = Ee(
          r.nextSibling
        ), Gt = e, ut = !0, al = null, pe = !1, t !== null && _s(e, t), e = Tc(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return u ? (rl(), r = a.fallback, u = e.mode, h = t.child, T = h.sibling, a = Ye(h, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = h.subtreeFlags & 65011712, T !== null ? r = Ye(
      T,
      r
    ) : (r = Nl(
      r,
      u,
      l,
      null
    ), r.flags |= 2), r.return = e, a.return = e, a.sibling = r, e.child = a, iu(null, a), a = e.child, r = t.child.memoizedState, r === null ? r = bc(l) : (u = r.cachePool, u !== null ? (h = Mt._currentValue, u = u.parent !== h ? { parent: h, pool: h } : u) : u = js(), r = {
      baseLanes: r.baseLanes | l,
      cachePool: u
    }), a.memoizedState = r, a.childLanes = pc(
      t,
      n,
      l
    ), e.memoizedState = Sc, iu(t.child, a)) : (sl(e), l = t.child, t = l.sibling, l = Ye(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function Tc(t, e) {
    return e = di(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function di(t, e) {
    return t = fe(22, t, null, e), t.lanes = 0, t;
  }
  function Ec(t, e, l) {
    return Gl(e, t.child, null, l), t = Tc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Kr(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Hn(t.return, e, l);
  }
  function xc(t, e, l, a, u, i) {
    var n = t.memoizedState;
    n === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: u,
      treeForkCount: i
    } : (n.isBackwards = e, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = l, n.tailMode = u, n.treeForkCount = i);
  }
  function Jr(t, e, l) {
    var a = e.pendingProps, u = a.revealOrder, i = a.tail;
    a = a.children;
    var n = Ot.current, r = (n & 2) !== 0;
    if (r ? (n = n & 1 | 2, e.flags |= 128) : n &= 1, j(Ot, n), Xt(t, e, a, l), a = ut ? Ka : 0, !r && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Kr(t, l, e);
        else if (t.tag === 19)
          Kr(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (u) {
      case "forwards":
        for (l = e.child, u = null; l !== null; )
          t = l.alternate, t !== null && li(t) === null && (u = l), l = l.sibling;
        l = u, l === null ? (u = e.child, e.child = null) : (u = l.sibling, l.sibling = null), xc(
          e,
          !1,
          u,
          l,
          i,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, u = e.child, e.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && li(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = l, l = u, u = t;
        }
        xc(
          e,
          !0,
          l,
          null,
          i,
          a
        );
        break;
      case "together":
        xc(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ve(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), ml |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (sa(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(f(153));
    if (e.child !== null) {
      for (t = e.child, l = Ye(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Ye(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function Ac(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Fu(t)));
  }
  function dd(t, e, l) {
    switch (e.tag) {
      case 3:
        Kt(e, e.stateNode.containerInfo), il(e, Mt, t.memoizedState.cache), jl();
        break;
      case 27:
      case 5:
        Ma(e);
        break;
      case 4:
        Kt(e, e.stateNode.containerInfo);
        break;
      case 10:
        il(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, kn(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (sl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Zr(t, e, l) : (sl(e), t = Ve(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        sl(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (sa(
          t,
          e,
          l,
          !1
        ), a = (l & e.childLanes) !== 0), u) {
          if (a)
            return Jr(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), j(Ot, Ot.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, Gr(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        il(e, Mt, t.memoizedState.cache);
    }
    return Ve(t, e, l);
  }
  function Fr(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        jt = !0;
      else {
        if (!Ac(t, l) && (e.flags & 128) === 0)
          return jt = !1, dd(
            t,
            e,
            l
          );
        jt = (t.flags & 131072) !== 0;
      }
    else
      jt = !1, ut && (e.flags & 1048576) !== 0 && Ds(e, Ka, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Hl(e.elementType), e.type = t, typeof t == "function")
            On(t) ? (a = Xl(t, a), e.tag = 1, e = Qr(
              null,
              e,
              t,
              a,
              l
            )) : (e.tag = 0, e = gc(
              null,
              e,
              t,
              a,
              l
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === Tt) {
                e.tag = 11, e = Lr(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              } else if (u === V) {
                e.tag = 14, e = Hr(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              }
            }
            throw e = Be(t) || t, Error(f(306, e, ""));
          }
        }
        return e;
      case 0:
        return gc(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return a = e.type, u = Xl(
          a,
          e.pendingProps
        ), Qr(
          t,
          e,
          a,
          u,
          l
        );
      case 3:
        t: {
          if (Kt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(f(387));
          a = e.pendingProps;
          var i = e.memoizedState;
          u = i.element, Vn(t, e), tu(e, a, null, l);
          var n = e.memoizedState;
          if (a = n.cache, il(e, Mt, a), a !== i.cache && Yn(
            e,
            [Mt],
            l,
            !0
          ), Pa(), a = n.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: n.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = Vr(
                t,
                e,
                a,
                l
              );
              break t;
            } else if (a !== u) {
              u = ge(
                Error(f(424)),
                e
              ), Ja(u), e = Vr(
                t,
                e,
                a,
                l
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Et = Ee(t.firstChild), Gt = e, ut = !0, al = null, pe = !0, l = Gs(
                e,
                null,
                a,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (jl(), a === u) {
              e = Ve(
                t,
                e,
                l
              );
              break t;
            }
            Xt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return mi(t, e), t === null ? (l = nh(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : ut || (l = e.type, t = e.pendingProps, a = Ui(
          P.current
        ).createElement(l), a[Yt] = e, a[Wt] = t, wt(a, l, t), Lt(a), e.stateNode = a) : e.memoizedState = nh(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ma(e), t === null && ut && (a = e.stateNode = ah(
          e.type,
          e.pendingProps,
          P.current
        ), Gt = e, pe = !0, u = Et, Sl(e.type) ? (af = u, Et = Ee(a.firstChild)) : Et = u), Xt(
          t,
          e,
          e.pendingProps.children,
          l
        ), mi(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && ut && ((u = a = Et) && (a = Vd(
          a,
          e.type,
          e.pendingProps,
          pe
        ), a !== null ? (e.stateNode = a, Gt = e, Et = Ee(a.firstChild), pe = !1, u = !0) : u = !1), u || ul(e)), Ma(e), u = e.type, i = e.pendingProps, n = t !== null ? t.memoizedProps : null, a = i.children, Ic(u, i) ? a = null : n !== null && Ic(u, n) && (e.flags |= 32), e.memoizedState !== null && (u = $n(
          t,
          e,
          id,
          null,
          null,
          l
        ), pu._currentValue = u), mi(t, e), Xt(t, e, a, l), e.child;
      case 6:
        return t === null && ut && ((t = l = Et) && (l = Zd(
          l,
          e.pendingProps,
          pe
        ), l !== null ? (e.stateNode = l, Gt = e, Et = null, t = !0) : t = !1), t || ul(e)), null;
      case 13:
        return Zr(t, e, l);
      case 4:
        return Kt(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = Gl(
          e,
          null,
          a,
          l
        ) : Xt(t, e, a, l), e.child;
      case 11:
        return Lr(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return Xt(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return Xt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return Xt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return a = e.pendingProps, il(e, e.type, a.value), Xt(t, e, a.children, l), e.child;
      case 9:
        return u = e.type._context, a = e.pendingProps.children, Cl(e), u = qt(u), a = a(u), e.flags |= 1, Xt(t, e, a, l), e.child;
      case 14:
        return Hr(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return Yr(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return Jr(t, e, l);
      case 31:
        return md(t, e, l);
      case 22:
        return Gr(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return Cl(e), a = qt(Mt), t === null ? (u = Xn(), u === null && (u = pt, i = Gn(), u.pooledCache = i, i.refCount++, i !== null && (u.pooledCacheLanes |= l), u = i), e.memoizedState = { parent: a, cache: u }, Qn(e), il(e, Mt, u)) : ((t.lanes & l) !== 0 && (Vn(t, e), tu(e, null, null, l), Pa()), u = t.memoizedState, i = e.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), il(e, Mt, a)) : (a = i.cache, il(e, Mt, a), a !== u.cache && Yn(
          e,
          [Mt],
          l,
          !0
        ))), Xt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function Ze(t) {
    t.flags |= 4;
  }
  function Rc(t, e, l, a, u) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Eo()) t.flags |= 8192;
        else
          throw Yl = Iu, wn;
    } else t.flags &= -16777217;
  }
  function kr(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !oh(e))
      if (Eo()) t.flags |= 8192;
      else
        throw Yl = Iu, wn;
  }
  function vi(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? zf() : 536870912, t.lanes |= e, Ta |= e);
  }
  function nu(t, e) {
    if (!ut)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function xt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
    if (e)
      for (var u = t.child; u !== null; )
        l |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        l |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= a, t.childLanes = l, e;
  }
  function vd(t, e, l) {
    var a = e.pendingProps;
    switch (jn(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return xt(e), null;
      case 1:
        return xt(e), null;
      case 3:
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Xe(Mt), zt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (fa(e) ? Ze(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Cn())), xt(e), null;
      case 26:
        var u = e.type, i = e.memoizedState;
        return t === null ? (Ze(e), i !== null ? (xt(e), kr(e, i)) : (xt(e), Rc(
          e,
          u,
          null,
          a,
          l
        ))) : i ? i !== t.memoizedState ? (Ze(e), xt(e), kr(e, i)) : (xt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Ze(e), xt(e), Rc(
          e,
          u,
          t,
          a,
          l
        )), null;
      case 27:
        if (Du(e), l = P.current, u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Ze(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return xt(e), null;
          }
          t = H.current, fa(e) ? zs(e) : (t = ah(u, a, l), e.stateNode = t, Ze(e));
        }
        return xt(e), null;
      case 5:
        if (Du(e), u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Ze(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return xt(e), null;
          }
          if (i = H.current, fa(e))
            zs(e);
          else {
            var n = Ui(
              P.current
            );
            switch (i) {
              case 1:
                i = n.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                i = n.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    i = n.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    i = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    i = n.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof a.is == "string" ? n.createElement("select", {
                      is: a.is
                    }) : n.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? n.createElement(u, { is: a.is }) : n.createElement(u);
                }
            }
            i[Yt] = e, i[Wt] = a;
            t: for (n = e.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6)
                i.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
              }
              if (n === e) break t;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === e)
                  break t;
                n = n.return;
              }
              n.sibling.return = n.return, n = n.sibling;
            }
            e.stateNode = i;
            t: switch (wt(i, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Ze(e);
          }
        }
        return xt(e), Rc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && Ze(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(f(166));
          if (t = P.current, fa(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, u = Gt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            t[Yt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Ko(t.nodeValue, l)), t || ul(e, !0);
          } else
            t = Ui(t).createTextNode(
              a
            ), t[Yt] = e, e.stateNode = t;
        }
        return xt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = fa(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(557));
              t[Yt] = e;
            } else
              jl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            xt(e), t = !1;
          } else
            l = Cn(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (re(e), e) : (re(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(f(558));
        }
        return xt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = fa(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(f(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(f(317));
              u[Yt] = e;
            } else
              jl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            xt(e), u = !1;
          } else
            u = Cn(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (re(e), e) : (re(e), null);
        }
        return re(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== u && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), vi(e, e.updateQueue), xt(e), null);
      case 4:
        return zt(), t === null && Jc(e.stateNode.containerInfo), xt(e), null;
      case 10:
        return Xe(e.type), xt(e), null;
      case 19:
        if (M(Ot), a = e.memoizedState, a === null) return xt(e), null;
        if (u = (e.flags & 128) !== 0, i = a.rendering, i === null)
          if (u) nu(a, !1);
          else {
            if (_t !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = li(t), i !== null) {
                  for (e.flags |= 128, nu(a, !1), t = i.updateQueue, e.updateQueue = t, vi(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    xs(l, t), l = l.sibling;
                  return j(
                    Ot,
                    Ot.current & 1 | 2
                  ), ut && Ge(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && ue() > pi && (e.flags |= 128, u = !0, nu(a, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = li(i), t !== null) {
              if (e.flags |= 128, u = !0, t = t.updateQueue, e.updateQueue = t, vi(e, t), nu(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ut)
                return xt(e), null;
            } else
              2 * ue() - a.renderingStartTime > pi && l !== 536870912 && (e.flags |= 128, u = !0, nu(a, !1), e.lanes = 4194304);
          a.isBackwards ? (i.sibling = e.child, e.child = i) : (t = a.last, t !== null ? t.sibling = i : e.child = i, a.last = i);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ue(), t.sibling = null, l = Ot.current, j(
          Ot,
          u ? l & 1 | 2 : l & 1
        ), ut && Ge(e, a.treeForkCount), t) : (xt(e), null);
      case 22:
      case 23:
        return re(e), Fn(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (xt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : xt(e), l = e.updateQueue, l !== null && vi(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && M(Ll), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Xe(Mt), xt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function yd(t, e) {
    switch (jn(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Xe(Mt), zt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Du(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (re(e), e.alternate === null)
            throw Error(f(340));
          jl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (re(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(f(340));
          jl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return M(Ot), null;
      case 4:
        return zt(), null;
      case 10:
        return Xe(e.type), null;
      case 22:
      case 23:
        return re(e), Fn(), t !== null && M(Ll), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Xe(Mt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Wr(t, e) {
    switch (jn(e), e.tag) {
      case 3:
        Xe(Mt), zt();
        break;
      case 26:
      case 27:
      case 5:
        Du(e);
        break;
      case 4:
        zt();
        break;
      case 31:
        e.memoizedState !== null && re(e);
        break;
      case 13:
        re(e);
        break;
      case 19:
        M(Ot);
        break;
      case 10:
        Xe(e.type);
        break;
      case 22:
      case 23:
        re(e), Fn(), t !== null && M(Ll);
        break;
      case 24:
        Xe(Mt);
    }
  }
  function cu(t, e) {
    try {
      var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var i = l.create, n = l.inst;
            a = i(), n.destroy = a;
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (r) {
      mt(e, e.return, r);
    }
  }
  function ol(t, e, l) {
    try {
      var a = e.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var i = u.next;
        a = i;
        do {
          if ((a.tag & t) === t) {
            var n = a.inst, r = n.destroy;
            if (r !== void 0) {
              n.destroy = void 0, u = e;
              var h = l, T = r;
              try {
                T();
              } catch (D) {
                mt(
                  u,
                  h,
                  D
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (D) {
      mt(e, e.return, D);
    }
  }
  function $r(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Xs(e, l);
      } catch (a) {
        mt(t, t.return, a);
      }
    }
  }
  function Ir(t, e, l) {
    l.props = Xl(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      mt(t, e, a);
    }
  }
  function fu(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
      }
    } catch (u) {
      mt(t, e, u);
    }
  }
  function Ne(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          mt(t, e, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          mt(t, e, u);
        }
      else l.current = null;
  }
  function Pr(t) {
    var e = t.type, l = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (u) {
      mt(t, t.return, u);
    }
  }
  function Dc(t, e, l) {
    try {
      var a = t.stateNode;
      Yd(a, t.type, l, e), a[Wt] = e;
    } catch (u) {
      mt(t, t.return, u);
    }
  }
  function to(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Sl(t.type) || t.tag === 4;
  }
  function _c(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || to(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Sl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function zc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Le));
    else if (a !== 4 && (a === 27 && Sl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (zc(t, e, l), t = t.sibling; t !== null; )
        zc(t, e, l), t = t.sibling;
  }
  function yi(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && Sl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (yi(t, e, l), t = t.sibling; t !== null; )
        yi(t, e, l), t = t.sibling;
  }
  function eo(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      wt(e, a, l), e[Yt] = t, e[Wt] = l;
    } catch (i) {
      mt(t, t.return, i);
    }
  }
  var Ke = !1, Bt = !1, Oc = !1, lo = typeof WeakSet == "function" ? WeakSet : Set, Ht = null;
  function gd(t, e) {
    if (t = t.containerInfo, Wc = Hi, t = ds(t), En(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var u = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break t;
            }
            var n = 0, r = -1, h = -1, T = 0, D = 0, U = t, E = null;
            e: for (; ; ) {
              for (var R; U !== l || u !== 0 && U.nodeType !== 3 || (r = n + u), U !== i || a !== 0 && U.nodeType !== 3 || (h = n + a), U.nodeType === 3 && (n += U.nodeValue.length), (R = U.firstChild) !== null; )
                E = U, U = R;
              for (; ; ) {
                if (U === t) break e;
                if (E === l && ++T === u && (r = n), E === i && ++D === a && (h = n), (R = U.nextSibling) !== null) break;
                U = E, E = U.parentNode;
              }
              U = R;
            }
            l = r === -1 || h === -1 ? null : { start: r, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for ($c = { focusedElem: t, selectionRange: l }, Hi = !1, Ht = e; Ht !== null; )
      if (e = Ht, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, Ht = t;
      else
        for (; Ht !== null; ) {
          switch (e = Ht, i = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  u = t[l], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                t = void 0, l = e, u = i.memoizedProps, i = i.memoizedState, a = l.stateNode;
                try {
                  var L = Xl(
                    l.type,
                    u
                  );
                  t = a.getSnapshotBeforeUpdate(
                    L,
                    i
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (X) {
                  mt(
                    l,
                    l.return,
                    X
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  tf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      tf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, Ht = t;
            break;
          }
          Ht = e.return;
        }
  }
  function ao(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Fe(t, l), a & 4 && cu(5, l);
        break;
      case 1:
        if (Fe(t, l), a & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (n) {
              mt(l, l.return, n);
            }
          else {
            var u = Xl(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (n) {
              mt(
                l,
                l.return,
                n
              );
            }
          }
        a & 64 && $r(l), a & 512 && fu(l, l.return);
        break;
      case 3:
        if (Fe(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Xs(t, e);
          } catch (n) {
            mt(l, l.return, n);
          }
        }
        break;
      case 27:
        e === null && a & 4 && eo(l);
      case 26:
      case 5:
        Fe(t, l), e === null && a & 4 && Pr(l), a & 512 && fu(l, l.return);
        break;
      case 12:
        Fe(t, l);
        break;
      case 31:
        Fe(t, l), a & 4 && no(t, l);
        break;
      case 13:
        Fe(t, l), a & 4 && co(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = Dd.bind(
          null,
          l
        ), Kd(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Ke, !a) {
          e = e !== null && e.memoizedState !== null || Bt, u = Ke;
          var i = Bt;
          Ke = a, (Bt = e) && !i ? ke(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : Fe(t, l), Ke = u, Bt = i;
        }
        break;
      case 30:
        break;
      default:
        Fe(t, l);
    }
  }
  function uo(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, uo(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && un(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var At = null, It = !1;
  function Je(t, e, l) {
    for (l = l.child; l !== null; )
      io(t, e, l), l = l.sibling;
  }
  function io(t, e, l) {
    if (ie && typeof ie.onCommitFiberUnmount == "function")
      try {
        ie.onCommitFiberUnmount(Na, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Bt || Ne(l, e), Je(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Bt || Ne(l, e);
        var a = At, u = It;
        Sl(l.type) && (At = l.stateNode, It = !1), Je(
          t,
          e,
          l
        ), gu(l.stateNode), At = a, It = u;
        break;
      case 5:
        Bt || Ne(l, e);
      case 6:
        if (a = At, u = It, At = null, Je(
          t,
          e,
          l
        ), At = a, It = u, At !== null)
          if (It)
            try {
              (At.nodeType === 9 ? At.body : At.nodeName === "HTML" ? At.ownerDocument.body : At).removeChild(l.stateNode);
            } catch (i) {
              mt(
                l,
                e,
                i
              );
            }
          else
            try {
              At.removeChild(l.stateNode);
            } catch (i) {
              mt(
                l,
                e,
                i
              );
            }
        break;
      case 18:
        At !== null && (It ? (t = At, Io(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Oa(t)) : Io(At, l.stateNode));
        break;
      case 4:
        a = At, u = It, At = l.stateNode.containerInfo, It = !0, Je(
          t,
          e,
          l
        ), At = a, It = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ol(2, l, e), Bt || ol(4, l, e), Je(
          t,
          e,
          l
        );
        break;
      case 1:
        Bt || (Ne(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && Ir(
          l,
          e,
          a
        )), Je(
          t,
          e,
          l
        );
        break;
      case 21:
        Je(
          t,
          e,
          l
        );
        break;
      case 22:
        Bt = (a = Bt) || l.memoizedState !== null, Je(
          t,
          e,
          l
        ), Bt = a;
        break;
      default:
        Je(
          t,
          e,
          l
        );
    }
  }
  function no(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Oa(t);
      } catch (l) {
        mt(e, e.return, l);
      }
    }
  }
  function co(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Oa(t);
      } catch (l) {
        mt(e, e.return, l);
      }
  }
  function Sd(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new lo()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new lo()), e;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function gi(t, e) {
    var l = Sd(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var u = _d.bind(null, t, a);
        a.then(u, u);
      }
    });
  }
  function Pt(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var u = l[a], i = t, n = e, r = n;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Sl(r.type)) {
                At = r.stateNode, It = !1;
                break t;
              }
              break;
            case 5:
              At = r.stateNode, It = !1;
              break t;
            case 3:
            case 4:
              At = r.stateNode.containerInfo, It = !0;
              break t;
          }
          r = r.return;
        }
        if (At === null) throw Error(f(160));
        io(i, n, u), At = null, It = !1, i = u.alternate, i !== null && (i.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        fo(e, t), e = e.sibling;
  }
  var De = null;
  function fo(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pt(e, t), te(t), a & 4 && (ol(3, t, t.return), cu(3, t), ol(5, t, t.return));
        break;
      case 1:
        Pt(e, t), te(t), a & 512 && (Bt || l === null || Ne(l, l.return)), a & 64 && Ke && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var u = De;
        if (Pt(e, t), te(t), a & 512 && (Bt || l === null || Ne(l, l.return)), a & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, l = t.memoizedProps, u = u.ownerDocument || u;
                  e: switch (a) {
                    case "title":
                      i = u.getElementsByTagName("title")[0], (!i || i[Ca] || i[Yt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = u.createElement(a), u.head.insertBefore(
                        i,
                        u.querySelector("head > title")
                      )), wt(i, a, l), i[Yt] = t, Lt(i), a = i;
                      break t;
                    case "link":
                      var n = sh(
                        "link",
                        "href",
                        u
                      ).get(a + (l.href || ""));
                      if (n) {
                        for (var r = 0; r < n.length; r++)
                          if (i = n[r], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            n.splice(r, 1);
                            break e;
                          }
                      }
                      i = u.createElement(a), wt(i, a, l), u.head.appendChild(i);
                      break;
                    case "meta":
                      if (n = sh(
                        "meta",
                        "content",
                        u
                      ).get(a + (l.content || ""))) {
                        for (r = 0; r < n.length; r++)
                          if (i = n[r], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            n.splice(r, 1);
                            break e;
                          }
                      }
                      i = u.createElement(a), wt(i, a, l), u.head.appendChild(i);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  i[Yt] = t, Lt(i), a = i;
                }
                t.stateNode = a;
              } else
                rh(
                  u,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = fh(
                u,
                a,
                t.memoizedProps
              );
          else
            i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, a === null ? rh(
              u,
              t.type,
              t.stateNode
            ) : fh(
              u,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Dc(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        Pt(e, t), te(t), a & 512 && (Bt || l === null || Ne(l, l.return)), l !== null && a & 4 && Dc(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (Pt(e, t), te(t), a & 512 && (Bt || l === null || Ne(l, l.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            Il(u, "");
          } catch (L) {
            mt(t, t.return, L);
          }
        }
        a & 4 && t.stateNode != null && (u = t.memoizedProps, Dc(
          t,
          u,
          l !== null ? l.memoizedProps : u
        )), a & 1024 && (Oc = !0);
        break;
      case 6:
        if (Pt(e, t), te(t), a & 4) {
          if (t.stateNode === null)
            throw Error(f(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (L) {
            mt(t, t.return, L);
          }
        }
        break;
      case 3:
        if (ji = null, u = De, De = Mi(e.containerInfo), Pt(e, t), De = u, te(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Oa(e.containerInfo);
          } catch (L) {
            mt(t, t.return, L);
          }
        Oc && (Oc = !1, so(t));
        break;
      case 4:
        a = De, De = Mi(
          t.stateNode.containerInfo
        ), Pt(e, t), te(t), De = a;
        break;
      case 12:
        Pt(e, t), te(t);
        break;
      case 31:
        Pt(e, t), te(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, gi(t, a)));
        break;
      case 13:
        Pt(e, t), te(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (bi = ue()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, gi(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null, T = Ke, D = Bt;
        if (Ke = T || u, Bt = D || h, Pt(e, t), Bt = D, Ke = T, te(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (l === null || h || Ke || Bt || wl(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (i = h.stateNode, u)
                    n = i.style, typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none";
                  else {
                    r = h.stateNode;
                    var U = h.memoizedProps.style, E = U != null && U.hasOwnProperty("display") ? U.display : null;
                    r.style.display = E == null || typeof E == "boolean" ? "" : ("" + E).trim();
                  }
                } catch (L) {
                  mt(h, h.return, L);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = u ? "" : h.memoizedProps;
                } catch (L) {
                  mt(h, h.return, L);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                h = e;
                try {
                  var R = h.stateNode;
                  u ? Po(R, !0) : Po(h.stateNode, !1);
                } catch (L) {
                  mt(h, h.return, L);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, gi(t, l))));
        break;
      case 19:
        Pt(e, t), te(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, gi(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pt(e, t), te(t);
    }
  }
  function te(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (to(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var u = l.stateNode, i = _c(t);
            yi(t, i, u);
            break;
          case 5:
            var n = l.stateNode;
            l.flags & 32 && (Il(n, ""), l.flags &= -33);
            var r = _c(t);
            yi(t, r, n);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo, T = _c(t);
            zc(
              t,
              T,
              h
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (D) {
        mt(t, t.return, D);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function so(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        so(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Fe(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        ao(t, e.alternate, e), e = e.sibling;
  }
  function wl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ol(4, e, e.return), wl(e);
          break;
        case 1:
          Ne(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Ir(
            e,
            e.return,
            l
          ), wl(e);
          break;
        case 27:
          gu(e.stateNode);
        case 26:
        case 5:
          Ne(e, e.return), wl(e);
          break;
        case 22:
          e.memoizedState === null && wl(e);
          break;
        case 30:
          wl(e);
          break;
        default:
          wl(e);
      }
      t = t.sibling;
    }
  }
  function ke(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, u = t, i = e, n = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ke(
            u,
            i,
            l
          ), cu(4, i);
          break;
        case 1:
          if (ke(
            u,
            i,
            l
          ), a = i, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (T) {
              mt(a, a.return, T);
            }
          if (a = i, u = a.updateQueue, u !== null) {
            var r = a.stateNode;
            try {
              var h = u.shared.hiddenCallbacks;
              if (h !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < h.length; u++)
                  qs(h[u], r);
            } catch (T) {
              mt(a, a.return, T);
            }
          }
          l && n & 64 && $r(i), fu(i, i.return);
          break;
        case 27:
          eo(i);
        case 26:
        case 5:
          ke(
            u,
            i,
            l
          ), l && a === null && n & 4 && Pr(i), fu(i, i.return);
          break;
        case 12:
          ke(
            u,
            i,
            l
          );
          break;
        case 31:
          ke(
            u,
            i,
            l
          ), l && n & 4 && no(u, i);
          break;
        case 13:
          ke(
            u,
            i,
            l
          ), l && n & 4 && co(u, i);
          break;
        case 22:
          i.memoizedState === null && ke(
            u,
            i,
            l
          ), fu(i, i.return);
          break;
        case 30:
          break;
        default:
          ke(
            u,
            i,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Uc(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Fa(l));
  }
  function Mc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Fa(t));
  }
  function _e(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ro(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function ro(t, e, l, a) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        _e(
          t,
          e,
          l,
          a
        ), u & 2048 && cu(9, e);
        break;
      case 1:
        _e(
          t,
          e,
          l,
          a
        );
        break;
      case 3:
        _e(
          t,
          e,
          l,
          a
        ), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Fa(t)));
        break;
      case 12:
        if (u & 2048) {
          _e(
            t,
            e,
            l,
            a
          ), t = e.stateNode;
          try {
            var i = e.memoizedProps, n = i.id, r = i.onPostCommit;
            typeof r == "function" && r(
              n,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (h) {
            mt(e, e.return, h);
          }
        } else
          _e(
            t,
            e,
            l,
            a
          );
        break;
      case 31:
        _e(
          t,
          e,
          l,
          a
        );
        break;
      case 13:
        _e(
          t,
          e,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, n = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? _e(
          t,
          e,
          l,
          a
        ) : su(t, e) : i._visibility & 2 ? _e(
          t,
          e,
          l,
          a
        ) : (i._visibility |= 2, Sa(
          t,
          e,
          l,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Uc(n, e);
        break;
      case 24:
        _e(
          t,
          e,
          l,
          a
        ), u & 2048 && Mc(e.alternate, e);
        break;
      default:
        _e(
          t,
          e,
          l,
          a
        );
    }
  }
  function Sa(t, e, l, a, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, n = e, r = l, h = a, T = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Sa(
            i,
            n,
            r,
            h,
            u
          ), cu(8, n);
          break;
        case 23:
          break;
        case 22:
          var D = n.stateNode;
          n.memoizedState !== null ? D._visibility & 2 ? Sa(
            i,
            n,
            r,
            h,
            u
          ) : su(
            i,
            n
          ) : (D._visibility |= 2, Sa(
            i,
            n,
            r,
            h,
            u
          )), u && T & 2048 && Uc(
            n.alternate,
            n
          );
          break;
        case 24:
          Sa(
            i,
            n,
            r,
            h,
            u
          ), u && T & 2048 && Mc(n.alternate, n);
          break;
        default:
          Sa(
            i,
            n,
            r,
            h,
            u
          );
      }
      e = e.sibling;
    }
  }
  function su(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, u = a.flags;
        switch (a.tag) {
          case 22:
            su(l, a), u & 2048 && Uc(
              a.alternate,
              a
            );
            break;
          case 24:
            su(l, a), u & 2048 && Mc(a.alternate, a);
            break;
          default:
            su(l, a);
        }
        e = e.sibling;
      }
  }
  var ru = 8192;
  function ba(t, e, l) {
    if (t.subtreeFlags & ru)
      for (t = t.child; t !== null; )
        oo(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function oo(t, e, l) {
    switch (t.tag) {
      case 26:
        ba(
          t,
          e,
          l
        ), t.flags & ru && t.memoizedState !== null && uv(
          l,
          De,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        ba(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var a = De;
        De = Mi(t.stateNode.containerInfo), ba(
          t,
          e,
          l
        ), De = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = ru, ru = 16777216, ba(
          t,
          e,
          l
        ), ru = a) : ba(
          t,
          e,
          l
        ));
        break;
      default:
        ba(
          t,
          e,
          l
        );
    }
  }
  function ho(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ou(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Ht = a, vo(
            a,
            t
          );
        }
      ho(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        mo(t), t = t.sibling;
  }
  function mo(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ou(t), t.flags & 2048 && ol(9, t, t.return);
        break;
      case 3:
        ou(t);
        break;
      case 12:
        ou(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Si(t)) : ou(t);
        break;
      default:
        ou(t);
    }
  }
  function Si(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Ht = a, vo(
            a,
            t
          );
        }
      ho(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          ol(8, e, e.return), Si(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Si(e));
          break;
        default:
          Si(e);
      }
      t = t.sibling;
    }
  }
  function vo(t, e) {
    for (; Ht !== null; ) {
      var l = Ht;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ol(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Fa(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Ht = a;
      else
        t: for (l = t; Ht !== null; ) {
          a = Ht;
          var u = a.sibling, i = a.return;
          if (uo(a), a === l) {
            Ht = null;
            break t;
          }
          if (u !== null) {
            u.return = i, Ht = u;
            break t;
          }
          Ht = i;
        }
    }
  }
  var bd = {
    getCacheForType: function(t) {
      var e = qt(Mt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return qt(Mt).controller.signal;
    }
  }, pd = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, pt = null, tt = null, lt = 0, ht = 0, oe = null, hl = !1, pa = !1, Nc = !1, We = 0, _t = 0, ml = 0, Ql = 0, jc = 0, he = 0, Ta = 0, hu = null, ee = null, Bc = !1, bi = 0, yo = 0, pi = 1 / 0, Ti = null, dl = null, Ct = 0, vl = null, Ea = null, $e = 0, Cc = 0, Lc = null, go = null, mu = 0, Hc = null;
  function me() {
    return (rt & 2) !== 0 && lt !== 0 ? lt & -lt : _.T !== null ? Qc() : Nf();
  }
  function So() {
    if (he === 0)
      if ((lt & 536870912) === 0 || ut) {
        var t = Ou;
        Ou <<= 1, (Ou & 3932160) === 0 && (Ou = 262144), he = t;
      } else he = 536870912;
    return t = se.current, t !== null && (t.flags |= 32), he;
  }
  function le(t, e, l) {
    (t === pt && (ht === 2 || ht === 9) || t.cancelPendingCommit !== null) && (xa(t, 0), yl(
      t,
      lt,
      he,
      !1
    )), Ba(t, l), ((rt & 2) === 0 || t !== pt) && (t === pt && ((rt & 2) === 0 && (Ql |= l), _t === 4 && yl(
      t,
      lt,
      he,
      !1
    )), je(t));
  }
  function bo(t, e, l) {
    if ((rt & 6) !== 0) throw Error(f(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ja(t, e), u = a ? xd(t, e) : Gc(t, e, !0), i = a;
    do {
      if (u === 0) {
        pa && !a && yl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, i && !Td(l)) {
          u = Gc(t, e, !1), i = !1;
          continue;
        }
        if (u === 2) {
          if (i = e, t.errorRecoveryDisabledLanes & i)
            var n = 0;
          else
            n = t.pendingLanes & -536870913, n = n !== 0 ? n : n & 536870912 ? 536870912 : 0;
          if (n !== 0) {
            e = n;
            t: {
              var r = t;
              u = hu;
              var h = r.current.memoizedState.isDehydrated;
              if (h && (xa(r, n).flags |= 256), n = Gc(
                r,
                n,
                !1
              ), n !== 2) {
                if (Nc && !h) {
                  r.errorRecoveryDisabledLanes |= i, Ql |= i, u = 4;
                  break t;
                }
                i = ee, ee = u, i !== null && (ee === null ? ee = i : ee.push.apply(
                  ee,
                  i
                ));
              }
              u = n;
            }
            if (i = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          xa(t, 0), yl(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, i = u, i) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              yl(
                a,
                e,
                he,
                !hl
              );
              break t;
            case 2:
              ee = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (u = bi + 300 - ue(), 10 < u)) {
            if (yl(
              a,
              e,
              he,
              !hl
            ), Mu(a, 0, !0) !== 0) break t;
            $e = e, a.timeoutHandle = Wo(
              po.bind(
                null,
                a,
                l,
                ee,
                Ti,
                Bc,
                e,
                he,
                Ql,
                Ta,
                hl,
                i,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break t;
          }
          po(
            a,
            l,
            ee,
            Ti,
            Bc,
            e,
            he,
            Ql,
            Ta,
            hl,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    je(t);
  }
  function po(t, e, l, a, u, i, n, r, h, T, D, U, E, R) {
    if (t.timeoutHandle = -1, U = e.subtreeFlags, U & 8192 || (U & 16785408) === 16785408) {
      U = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Le
      }, oo(
        e,
        i,
        U
      );
      var L = (i & 62914560) === i ? bi - ue() : (i & 4194048) === i ? yo - ue() : 0;
      if (L = iv(
        U,
        L
      ), L !== null) {
        $e = i, t.cancelPendingCommit = L(
          zo.bind(
            null,
            t,
            e,
            i,
            l,
            a,
            u,
            n,
            r,
            h,
            D,
            U,
            null,
            E,
            R
          )
        ), yl(t, i, n, !T);
        return;
      }
    }
    zo(
      t,
      e,
      i,
      l,
      a,
      u,
      n,
      r,
      h
    );
  }
  function Td(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var u = l[a], i = u.getSnapshot;
          u = u.value;
          try {
            if (!ce(i(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function yl(t, e, l, a) {
    e &= ~jc, e &= ~Ql, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var i = 31 - ne(u), n = 1 << i;
      a[i] = -1, u &= ~n;
    }
    l !== 0 && Of(t, l, e);
  }
  function Ei() {
    return (rt & 6) === 0 ? (du(0), !1) : !0;
  }
  function Yc() {
    if (tt !== null) {
      if (ht === 0)
        var t = tt.return;
      else
        t = tt, qe = Bl = null, tc(t), ma = null, Wa = 0, t = tt;
      for (; t !== null; )
        Wr(t.alternate, t), t = t.return;
      tt = null;
    }
  }
  function xa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Xd(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), $e = 0, Yc(), pt = t, tt = l = Ye(t.current, null), lt = e, ht = 0, oe = null, hl = !1, pa = ja(t, e), Nc = !1, Ta = he = jc = Ql = ml = _t = 0, ee = hu = null, Bc = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var u = 31 - ne(a), i = 1 << u;
        e |= t[u], a &= ~i;
      }
    return We = e, Qu(), l;
  }
  function To(t, e) {
    F = null, _.H = uu, e === ha || e === $u ? (e = Ls(), ht = 3) : e === wn ? (e = Ls(), ht = 4) : ht = e === yc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, oe = e, tt === null && (_t = 1, oi(
      t,
      ge(e, t.current)
    ));
  }
  function Eo() {
    var t = se.current;
    return t === null ? !0 : (lt & 4194048) === lt ? Te === null : (lt & 62914560) === lt || (lt & 536870912) !== 0 ? t === Te : !1;
  }
  function xo() {
    var t = _.H;
    return _.H = uu, t === null ? uu : t;
  }
  function Ao() {
    var t = _.A;
    return _.A = bd, t;
  }
  function xi() {
    _t = 4, hl || (lt & 4194048) !== lt && se.current !== null || (pa = !0), (ml & 134217727) === 0 && (Ql & 134217727) === 0 || pt === null || yl(
      pt,
      lt,
      he,
      !1
    );
  }
  function Gc(t, e, l) {
    var a = rt;
    rt |= 2;
    var u = xo(), i = Ao();
    (pt !== t || lt !== e) && (Ti = null, xa(t, e)), e = !1;
    var n = _t;
    t: do
      try {
        if (ht !== 0 && tt !== null) {
          var r = tt, h = oe;
          switch (ht) {
            case 8:
              Yc(), n = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              se.current === null && (e = !0);
              var T = ht;
              if (ht = 0, oe = null, Aa(t, r, h, T), l && pa) {
                n = 0;
                break t;
              }
              break;
            default:
              T = ht, ht = 0, oe = null, Aa(t, r, h, T);
          }
        }
        Ed(), n = _t;
        break;
      } catch (D) {
        To(t, D);
      }
    while (!0);
    return e && t.shellSuspendCounter++, qe = Bl = null, rt = a, _.H = u, _.A = i, tt === null && (pt = null, lt = 0, Qu()), n;
  }
  function Ed() {
    for (; tt !== null; ) Ro(tt);
  }
  function xd(t, e) {
    var l = rt;
    rt |= 2;
    var a = xo(), u = Ao();
    pt !== t || lt !== e ? (Ti = null, pi = ue() + 500, xa(t, e)) : pa = ja(
      t,
      e
    );
    t: do
      try {
        if (ht !== 0 && tt !== null) {
          e = tt;
          var i = oe;
          e: switch (ht) {
            case 1:
              ht = 0, oe = null, Aa(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (Bs(i)) {
                ht = 0, oe = null, Do(e);
                break;
              }
              e = function() {
                ht !== 2 && ht !== 9 || pt !== t || (ht = 7), je(t);
              }, i.then(e, e);
              break t;
            case 3:
              ht = 7;
              break t;
            case 4:
              ht = 5;
              break t;
            case 7:
              Bs(i) ? (ht = 0, oe = null, Do(e)) : (ht = 0, oe = null, Aa(t, e, i, 7));
              break;
            case 5:
              var n = null;
              switch (tt.tag) {
                case 26:
                  n = tt.memoizedState;
                case 5:
                case 27:
                  var r = tt;
                  if (n ? oh(n) : r.stateNode.complete) {
                    ht = 0, oe = null;
                    var h = r.sibling;
                    if (h !== null) tt = h;
                    else {
                      var T = r.return;
                      T !== null ? (tt = T, Ai(T)) : tt = null;
                    }
                    break e;
                  }
              }
              ht = 0, oe = null, Aa(t, e, i, 5);
              break;
            case 6:
              ht = 0, oe = null, Aa(t, e, i, 6);
              break;
            case 8:
              Yc(), _t = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        Ad();
        break;
      } catch (D) {
        To(t, D);
      }
    while (!0);
    return qe = Bl = null, _.H = a, _.A = u, rt = l, tt !== null ? 0 : (pt = null, lt = 0, Qu(), _t);
  }
  function Ad() {
    for (; tt !== null && !Jh(); )
      Ro(tt);
  }
  function Ro(t) {
    var e = Fr(t.alternate, t, We);
    t.memoizedProps = t.pendingProps, e === null ? Ai(t) : tt = e;
  }
  function Do(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = wr(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          lt
        );
        break;
      case 11:
        e = wr(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          lt
        );
        break;
      case 5:
        tc(e);
      default:
        Wr(l, e), e = tt = xs(e, We), e = Fr(l, e, We);
    }
    t.memoizedProps = t.pendingProps, e === null ? Ai(t) : tt = e;
  }
  function Aa(t, e, l, a) {
    qe = Bl = null, tc(e), ma = null, Wa = 0;
    var u = e.return;
    try {
      if (hd(
        t,
        u,
        e,
        l,
        lt
      )) {
        _t = 1, oi(
          t,
          ge(l, t.current)
        ), tt = null;
        return;
      }
    } catch (i) {
      if (u !== null) throw tt = u, i;
      _t = 1, oi(
        t,
        ge(l, t.current)
      ), tt = null;
      return;
    }
    e.flags & 32768 ? (ut || a === 1 ? t = !0 : pa || (lt & 536870912) !== 0 ? t = !1 : (hl = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = se.current, a !== null && a.tag === 13 && (a.flags |= 16384))), _o(e, t)) : Ai(e);
  }
  function Ai(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        _o(
          e,
          hl
        );
        return;
      }
      t = e.return;
      var l = vd(
        e.alternate,
        e,
        We
      );
      if (l !== null) {
        tt = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        tt = e;
        return;
      }
      tt = e = t;
    } while (e !== null);
    _t === 0 && (_t = 5);
  }
  function _o(t, e) {
    do {
      var l = yd(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, tt = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        tt = t;
        return;
      }
      tt = t = l;
    } while (t !== null);
    _t = 6, tt = null;
  }
  function zo(t, e, l, a, u, i, n, r, h) {
    t.cancelPendingCommit = null;
    do
      Ri();
    while (Ct !== 0);
    if ((rt & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (i = e.lanes | e.childLanes, i |= _n, am(
        t,
        l,
        i,
        n,
        r,
        h
      ), t === pt && (tt = pt = null, lt = 0), Ea = e, vl = t, $e = l, Cc = i, Lc = u, go = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, zd(_u, function() {
        return jo(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = _.T, _.T = null, u = N.p, N.p = 2, n = rt, rt |= 4;
        try {
          gd(t, e, l);
        } finally {
          rt = n, N.p = u, _.T = a;
        }
      }
      Ct = 1, Oo(), Uo(), Mo();
    }
  }
  function Oo() {
    if (Ct === 1) {
      Ct = 0;
      var t = vl, e = Ea, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = _.T, _.T = null;
        var a = N.p;
        N.p = 2;
        var u = rt;
        rt |= 4;
        try {
          fo(e, t);
          var i = $c, n = ds(t.containerInfo), r = i.focusedElem, h = i.selectionRange;
          if (n !== r && r && r.ownerDocument && ms(
            r.ownerDocument.documentElement,
            r
          )) {
            if (h !== null && En(r)) {
              var T = h.start, D = h.end;
              if (D === void 0 && (D = T), "selectionStart" in r)
                r.selectionStart = T, r.selectionEnd = Math.min(
                  D,
                  r.value.length
                );
              else {
                var U = r.ownerDocument || document, E = U && U.defaultView || window;
                if (E.getSelection) {
                  var R = E.getSelection(), L = r.textContent.length, X = Math.min(h.start, L), St = h.end === void 0 ? X : Math.min(h.end, L);
                  !R.extend && X > St && (n = St, St = X, X = n);
                  var S = hs(
                    r,
                    X
                  ), d = hs(
                    r,
                    St
                  );
                  if (S && d && (R.rangeCount !== 1 || R.anchorNode !== S.node || R.anchorOffset !== S.offset || R.focusNode !== d.node || R.focusOffset !== d.offset)) {
                    var p = U.createRange();
                    p.setStart(S.node, S.offset), R.removeAllRanges(), X > St ? (R.addRange(p), R.extend(d.node, d.offset)) : (p.setEnd(d.node, d.offset), R.addRange(p));
                  }
                }
              }
            }
            for (U = [], R = r; R = R.parentNode; )
              R.nodeType === 1 && U.push({
                element: R,
                left: R.scrollLeft,
                top: R.scrollTop
              });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < U.length; r++) {
              var O = U[r];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
            }
          }
          Hi = !!Wc, $c = Wc = null;
        } finally {
          rt = u, N.p = a, _.T = l;
        }
      }
      t.current = e, Ct = 2;
    }
  }
  function Uo() {
    if (Ct === 2) {
      Ct = 0;
      var t = vl, e = Ea, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = _.T, _.T = null;
        var a = N.p;
        N.p = 2;
        var u = rt;
        rt |= 4;
        try {
          ao(t, e.alternate, e);
        } finally {
          rt = u, N.p = a, _.T = l;
        }
      }
      Ct = 3;
    }
  }
  function Mo() {
    if (Ct === 4 || Ct === 3) {
      Ct = 0, Fh();
      var t = vl, e = Ea, l = $e, a = go;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Ct = 5 : (Ct = 0, Ea = vl = null, No(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (dl = null), ln(l), e = e.stateNode, ie && typeof ie.onCommitFiberRoot == "function")
        try {
          ie.onCommitFiberRoot(
            Na,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = _.T, u = N.p, N.p = 2, _.T = null;
        try {
          for (var i = t.onRecoverableError, n = 0; n < a.length; n++) {
            var r = a[n];
            i(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          _.T = e, N.p = u;
        }
      }
      ($e & 3) !== 0 && Ri(), je(t), u = t.pendingLanes, (l & 261930) !== 0 && (u & 42) !== 0 ? t === Hc ? mu++ : (mu = 0, Hc = t) : mu = 0, du(0);
    }
  }
  function No(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Fa(e)));
  }
  function Ri() {
    return Oo(), Uo(), Mo(), jo();
  }
  function jo() {
    if (Ct !== 5) return !1;
    var t = vl, e = Cc;
    Cc = 0;
    var l = ln($e), a = _.T, u = N.p;
    try {
      N.p = 32 > l ? 32 : l, _.T = null, l = Lc, Lc = null;
      var i = vl, n = $e;
      if (Ct = 0, Ea = vl = null, $e = 0, (rt & 6) !== 0) throw Error(f(331));
      var r = rt;
      if (rt |= 4, mo(i.current), ro(
        i,
        i.current,
        n,
        l
      ), rt = r, du(0, !1), ie && typeof ie.onPostCommitFiberRoot == "function")
        try {
          ie.onPostCommitFiberRoot(Na, i);
        } catch {
        }
      return !0;
    } finally {
      N.p = u, _.T = a, No(t, e);
    }
  }
  function Bo(t, e, l) {
    e = ge(l, e), e = vc(t.stateNode, e, 2), t = fl(t, e, 2), t !== null && (Ba(t, 2), je(t));
  }
  function mt(t, e, l) {
    if (t.tag === 3)
      Bo(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Bo(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (dl === null || !dl.has(a))) {
            t = ge(l, t), l = Br(2), a = fl(e, l, 2), a !== null && (Cr(
              l,
              a,
              e,
              t
            ), Ba(a, 2), je(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function qc(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new pd();
      var u = /* @__PURE__ */ new Set();
      a.set(e, u);
    } else
      u = a.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(e, u));
    u.has(l) || (Nc = !0, u.add(l), t = Rd.bind(null, t, e, l), e.then(t, t));
  }
  function Rd(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, pt === t && (lt & l) === l && (_t === 4 || _t === 3 && (lt & 62914560) === lt && 300 > ue() - bi ? (rt & 2) === 0 && xa(t, 0) : jc |= l, Ta === lt && (Ta = 0)), je(t);
  }
  function Co(t, e) {
    e === 0 && (e = zf()), t = Ml(t, e), t !== null && (Ba(t, e), je(t));
  }
  function Dd(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), Co(t, l);
  }
  function _d(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, u = t.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(e), Co(t, l);
  }
  function zd(t, e) {
    return Ii(t, e);
  }
  var Di = null, Ra = null, Xc = !1, _i = !1, wc = !1, gl = 0;
  function je(t) {
    t !== Ra && t.next === null && (Ra === null ? Di = Ra = t : Ra = Ra.next = t), _i = !0, Xc || (Xc = !0, Ud());
  }
  function du(t, e) {
    if (!wc && _i) {
      wc = !0;
      do
        for (var l = !1, a = Di; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var i = 0;
            else {
              var n = a.suspendedLanes, r = a.pingedLanes;
              i = (1 << 31 - ne(42 | t) + 1) - 1, i &= u & ~(n & ~r), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, Go(a, i));
          } else
            i = lt, i = Mu(
              a,
              a === pt ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || ja(a, i) || (l = !0, Go(a, i));
          a = a.next;
        }
      while (l);
      wc = !1;
    }
  }
  function Od() {
    Lo();
  }
  function Lo() {
    _i = Xc = !1;
    var t = 0;
    gl !== 0 && qd() && (t = gl);
    for (var e = ue(), l = null, a = Di; a !== null; ) {
      var u = a.next, i = Ho(a, e);
      i === 0 ? (a.next = null, l === null ? Di = u : l.next = u, u === null && (Ra = l)) : (l = a, (t !== 0 || (i & 3) !== 0) && (_i = !0)), a = u;
    }
    Ct !== 0 && Ct !== 5 || du(t), gl !== 0 && (gl = 0);
  }
  function Ho(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var n = 31 - ne(i), r = 1 << n, h = u[n];
      h === -1 ? ((r & l) === 0 || (r & a) !== 0) && (u[n] = lm(r, e)) : h <= e && (t.expiredLanes |= r), i &= ~r;
    }
    if (e = pt, l = lt, l = Mu(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (ht === 2 || ht === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Pi(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || ja(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && Pi(a), ln(l)) {
        case 2:
        case 8:
          l = Df;
          break;
        case 32:
          l = _u;
          break;
        case 268435456:
          l = _f;
          break;
        default:
          l = _u;
      }
      return a = Yo.bind(null, t), l = Ii(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && Pi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Yo(t, e) {
    if (Ct !== 0 && Ct !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Ri() && t.callbackNode !== l)
      return null;
    var a = lt;
    return a = Mu(
      t,
      t === pt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (bo(t, a, e), Ho(t, ue()), t.callbackNode != null && t.callbackNode === l ? Yo.bind(null, t) : null);
  }
  function Go(t, e) {
    if (Ri()) return null;
    bo(t, e, !0);
  }
  function Ud() {
    wd(function() {
      (rt & 6) !== 0 ? Ii(
        Rf,
        Od
      ) : Lo();
    });
  }
  function Qc() {
    if (gl === 0) {
      var t = ra;
      t === 0 && (t = zu, zu <<= 1, (zu & 261888) === 0 && (zu = 256)), gl = t;
    }
    return gl;
  }
  function qo(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Cu("" + t);
  }
  function Xo(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Md(t, e, l, a, u) {
    if (e === "submit" && l && l.stateNode === u) {
      var i = qo(
        (u[Wt] || null).action
      ), n = a.submitter;
      n && (e = (e = n[Wt] || null) ? qo(e.formAction) : n.getAttribute("formAction"), e !== null && (i = e, n = null));
      var r = new Gu(
        "action",
        "action",
        null,
        a,
        u
      );
      t.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (gl !== 0) {
                  var h = n ? Xo(u, n) : new FormData(u);
                  sc(
                    l,
                    {
                      pending: !0,
                      data: h,
                      method: u.method,
                      action: i
                    },
                    null,
                    h
                  );
                }
              } else
                typeof i == "function" && (r.preventDefault(), h = n ? Xo(u, n) : new FormData(u), sc(
                  l,
                  {
                    pending: !0,
                    data: h,
                    method: u.method,
                    action: i
                  },
                  i,
                  h
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Vc = 0; Vc < Dn.length; Vc++) {
    var Zc = Dn[Vc], Nd = Zc.toLowerCase(), jd = Zc[0].toUpperCase() + Zc.slice(1);
    Re(
      Nd,
      "on" + jd
    );
  }
  Re(gs, "onAnimationEnd"), Re(Ss, "onAnimationIteration"), Re(bs, "onAnimationStart"), Re("dblclick", "onDoubleClick"), Re("focusin", "onFocus"), Re("focusout", "onBlur"), Re(km, "onTransitionRun"), Re(Wm, "onTransitionStart"), Re($m, "onTransitionCancel"), Re(ps, "onTransitionEnd"), Wl("onMouseEnter", ["mouseout", "mouseover"]), Wl("onMouseLeave", ["mouseout", "mouseover"]), Wl("onPointerEnter", ["pointerout", "pointerover"]), Wl("onPointerLeave", ["pointerout", "pointerover"]), _l(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), _l(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), _l("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), _l(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), _l(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), _l(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var vu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Bd = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vu)
  );
  function wo(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], u = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var n = a.length - 1; 0 <= n; n--) {
            var r = a[n], h = r.instance, T = r.currentTarget;
            if (r = r.listener, h !== i && u.isPropagationStopped())
              break t;
            i = r, u.currentTarget = T;
            try {
              i(u);
            } catch (D) {
              wu(D);
            }
            u.currentTarget = null, i = h;
          }
        else
          for (n = 0; n < a.length; n++) {
            if (r = a[n], h = r.instance, T = r.currentTarget, r = r.listener, h !== i && u.isPropagationStopped())
              break t;
            i = r, u.currentTarget = T;
            try {
              i(u);
            } catch (D) {
              wu(D);
            }
            u.currentTarget = null, i = h;
          }
      }
    }
  }
  function et(t, e) {
    var l = e[an];
    l === void 0 && (l = e[an] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (Qo(e, t, 2, !1), l.add(a));
  }
  function Kc(t, e, l) {
    var a = 0;
    e && (a |= 4), Qo(
      l,
      t,
      a,
      e
    );
  }
  var zi = "_reactListening" + Math.random().toString(36).slice(2);
  function Jc(t) {
    if (!t[zi]) {
      t[zi] = !0, Cf.forEach(function(l) {
        l !== "selectionchange" && (Bd.has(l) || Kc(l, !1, t), Kc(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[zi] || (e[zi] = !0, Kc("selectionchange", !1, e));
    }
  }
  function Qo(t, e, l, a) {
    switch (Sh(e)) {
      case 2:
        var u = fv;
        break;
      case 8:
        u = sv;
        break;
      default:
        u = sf;
    }
    l = u.bind(
      null,
      e,
      l,
      t
    ), u = void 0, !mn || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), a ? u !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, l, !0) : u !== void 0 ? t.addEventListener(e, l, {
      passive: u
    }) : t.addEventListener(e, l, !1);
  }
  function Fc(t, e, l, a, u) {
    var i = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var n = a.tag;
        if (n === 3 || n === 4) {
          var r = a.stateNode.containerInfo;
          if (r === u) break;
          if (n === 4)
            for (n = a.return; n !== null; ) {
              var h = n.tag;
              if ((h === 3 || h === 4) && n.stateNode.containerInfo === u)
                return;
              n = n.return;
            }
          for (; r !== null; ) {
            if (n = Jl(r), n === null) return;
            if (h = n.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              a = i = n;
              continue t;
            }
            r = r.parentNode;
          }
        }
        a = a.return;
      }
    Jf(function() {
      var T = i, D = on(l), U = [];
      t: {
        var E = Ts.get(t);
        if (E !== void 0) {
          var R = Gu, L = t;
          switch (t) {
            case "keypress":
              if (Hu(l) === 0) break t;
            case "keydown":
            case "keyup":
              R = _m;
              break;
            case "focusin":
              L = "focus", R = gn;
              break;
            case "focusout":
              L = "blur", R = gn;
              break;
            case "beforeblur":
            case "afterblur":
              R = gn;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              R = Wf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = vm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = Um;
              break;
            case gs:
            case Ss:
            case bs:
              R = Sm;
              break;
            case ps:
              R = Nm;
              break;
            case "scroll":
            case "scrollend":
              R = mm;
              break;
            case "wheel":
              R = Bm;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = pm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = If;
              break;
            case "toggle":
            case "beforetoggle":
              R = Lm;
          }
          var X = (e & 4) !== 0, St = !X && (t === "scroll" || t === "scrollend"), S = X ? E !== null ? E + "Capture" : null : E;
          X = [];
          for (var d = T, p; d !== null; ) {
            var O = d;
            if (p = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || p === null || S === null || (O = Ha(d, S), O != null && X.push(
              yu(d, O, p)
            )), St) break;
            d = d.return;
          }
          0 < X.length && (E = new R(
            E,
            L,
            null,
            l,
            D
          ), U.push({ event: E, listeners: X }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (E = t === "mouseover" || t === "pointerover", R = t === "mouseout" || t === "pointerout", E && l !== rn && (L = l.relatedTarget || l.fromElement) && (Jl(L) || L[Kl]))
            break t;
          if ((R || E) && (E = D.window === D ? D : (E = D.ownerDocument) ? E.defaultView || E.parentWindow : window, R ? (L = l.relatedTarget || l.toElement, R = T, L = L ? Jl(L) : null, L !== null && (St = g(L), X = L.tag, L !== St || X !== 5 && X !== 27 && X !== 6) && (L = null)) : (R = null, L = T), R !== L)) {
            if (X = Wf, O = "onMouseLeave", S = "onMouseEnter", d = "mouse", (t === "pointerout" || t === "pointerover") && (X = If, O = "onPointerLeave", S = "onPointerEnter", d = "pointer"), St = R == null ? E : La(R), p = L == null ? E : La(L), E = new X(
              O,
              d + "leave",
              R,
              l,
              D
            ), E.target = St, E.relatedTarget = p, O = null, Jl(D) === T && (X = new X(
              S,
              d + "enter",
              L,
              l,
              D
            ), X.target = p, X.relatedTarget = St, O = X), St = O, R && L)
              e: {
                for (X = Cd, S = R, d = L, p = 0, O = S; O; O = X(O))
                  p++;
                O = 0;
                for (var G = d; G; G = X(G))
                  O++;
                for (; 0 < p - O; )
                  S = X(S), p--;
                for (; 0 < O - p; )
                  d = X(d), O--;
                for (; p--; ) {
                  if (S === d || d !== null && S === d.alternate) {
                    X = S;
                    break e;
                  }
                  S = X(S), d = X(d);
                }
                X = null;
              }
            else X = null;
            R !== null && Vo(
              U,
              E,
              R,
              X,
              !1
            ), L !== null && St !== null && Vo(
              U,
              St,
              L,
              X,
              !0
            );
          }
        }
        t: {
          if (E = T ? La(T) : window, R = E.nodeName && E.nodeName.toLowerCase(), R === "select" || R === "input" && E.type === "file")
            var ct = ns;
          else if (us(E))
            if (cs)
              ct = Km;
            else {
              ct = Vm;
              var Y = Qm;
            }
          else
            R = E.nodeName, !R || R.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? T && sn(T.elementType) && (ct = ns) : ct = Zm;
          if (ct && (ct = ct(t, T))) {
            is(
              U,
              ct,
              l,
              D
            );
            break t;
          }
          Y && Y(t, E, T), t === "focusout" && T && E.type === "number" && T.memoizedProps.value != null && fn(E, "number", E.value);
        }
        switch (Y = T ? La(T) : window, t) {
          case "focusin":
            (us(Y) || Y.contentEditable === "true") && (la = Y, xn = T, Za = null);
            break;
          case "focusout":
            Za = xn = la = null;
            break;
          case "mousedown":
            An = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            An = !1, vs(U, l, D);
            break;
          case "selectionchange":
            if (Fm) break;
          case "keydown":
          case "keyup":
            vs(U, l, D);
        }
        var k;
        if (bn)
          t: {
            switch (t) {
              case "compositionstart":
                var at = "onCompositionStart";
                break t;
              case "compositionend":
                at = "onCompositionEnd";
                break t;
              case "compositionupdate":
                at = "onCompositionUpdate";
                break t;
            }
            at = void 0;
          }
        else
          ea ? ls(t, l) && (at = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (at = "onCompositionStart");
        at && (Pf && l.locale !== "ko" && (ea || at !== "onCompositionStart" ? at === "onCompositionEnd" && ea && (k = Ff()) : (el = D, dn = "value" in el ? el.value : el.textContent, ea = !0)), Y = Oi(T, at), 0 < Y.length && (at = new $f(
          at,
          t,
          null,
          l,
          D
        ), U.push({ event: at, listeners: Y }), k ? at.data = k : (k = as(l), k !== null && (at.data = k)))), (k = Ym ? Gm(t, l) : qm(t, l)) && (at = Oi(T, "onBeforeInput"), 0 < at.length && (Y = new $f(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          D
        ), U.push({
          event: Y,
          listeners: at
        }), Y.data = k)), Md(
          U,
          t,
          T,
          l,
          D
        );
      }
      wo(U, e);
    });
  }
  function yu(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function Oi(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var u = t, i = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || i === null || (u = Ha(t, l), u != null && a.unshift(
        yu(t, u, i)
      ), u = Ha(t, e), u != null && a.push(
        yu(t, u, i)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Cd(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Vo(t, e, l, a, u) {
    for (var i = e._reactName, n = []; l !== null && l !== a; ) {
      var r = l, h = r.alternate, T = r.stateNode;
      if (r = r.tag, h !== null && h === a) break;
      r !== 5 && r !== 26 && r !== 27 || T === null || (h = T, u ? (T = Ha(l, i), T != null && n.unshift(
        yu(l, T, h)
      )) : u || (T = Ha(l, i), T != null && n.push(
        yu(l, T, h)
      ))), l = l.return;
    }
    n.length !== 0 && t.push({ event: e, listeners: n });
  }
  var Ld = /\r\n?/g, Hd = /\u0000|\uFFFD/g;
  function Zo(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ld, `
`).replace(Hd, "");
  }
  function Ko(t, e) {
    return e = Zo(e), Zo(t) === e;
  }
  function gt(t, e, l, a, u, i) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Il(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Il(t, "" + a);
        break;
      case "className":
        ju(t, "class", a);
        break;
      case "tabIndex":
        ju(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ju(t, l, a);
        break;
      case "style":
        Zf(t, a, i);
        break;
      case "data":
        if (e !== "object") {
          ju(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = Cu("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (l === "formAction" ? (e !== "input" && gt(t, e, "name", u.name, u, null), gt(
            t,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), gt(
            t,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), gt(
            t,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (gt(t, e, "encType", u.encType, u, null), gt(t, e, "method", u.method, u, null), gt(t, e, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = Cu("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Le);
        break;
      case "onScroll":
        a != null && et("scroll", t);
        break;
      case "onScrollEnd":
        a != null && et("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = Cu("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        et("beforetoggle", t), et("toggle", t), Nu(t, "popover", a);
        break;
      case "xlinkActuate":
        Ce(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ce(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ce(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ce(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ce(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ce(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ce(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ce(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ce(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Nu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = om.get(l) || l, Nu(t, l, a));
    }
  }
  function kc(t, e, l, a, u, i) {
    switch (l) {
      case "style":
        Zf(t, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Il(t, a) : (typeof a == "number" || typeof a == "bigint") && Il(t, "" + a);
        break;
      case "onScroll":
        a != null && et("scroll", t);
        break;
      case "onScrollEnd":
        a != null && et("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Le);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Lf.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (u = l.endsWith("Capture"), e = l.slice(2, u ? l.length - 7 : void 0), i = t[Wt] || null, i = i != null ? i[l] : null, typeof i == "function" && t.removeEventListener(e, i, u), typeof a == "function")) {
              typeof i != "function" && i !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, u);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Nu(t, l, a);
          }
    }
  }
  function wt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        et("error", t), et("load", t);
        var a = !1, u = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var n = l[i];
            if (n != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  gt(t, e, i, n, l, null);
              }
          }
        u && gt(t, e, "srcSet", l.srcSet, l, null), a && gt(t, e, "src", l.src, l, null);
        return;
      case "input":
        et("invalid", t);
        var r = i = n = u = null, h = null, T = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var D = l[a];
            if (D != null)
              switch (a) {
                case "name":
                  u = D;
                  break;
                case "type":
                  n = D;
                  break;
                case "checked":
                  h = D;
                  break;
                case "defaultChecked":
                  T = D;
                  break;
                case "value":
                  i = D;
                  break;
                case "defaultValue":
                  r = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null)
                    throw Error(f(137, e));
                  break;
                default:
                  gt(t, e, a, D, l, null);
              }
          }
        Xf(
          t,
          i,
          r,
          h,
          T,
          n,
          u,
          !1
        );
        return;
      case "select":
        et("invalid", t), a = n = i = null;
        for (u in l)
          if (l.hasOwnProperty(u) && (r = l[u], r != null))
            switch (u) {
              case "value":
                i = r;
                break;
              case "defaultValue":
                n = r;
                break;
              case "multiple":
                a = r;
              default:
                gt(t, e, u, r, l, null);
            }
        e = i, l = n, t.multiple = !!a, e != null ? $l(t, !!a, e, !1) : l != null && $l(t, !!a, l, !0);
        return;
      case "textarea":
        et("invalid", t), i = u = a = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (r = l[n], r != null))
            switch (n) {
              case "value":
                a = r;
                break;
              case "defaultValue":
                u = r;
                break;
              case "children":
                i = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(f(91));
                break;
              default:
                gt(t, e, n, r, l, null);
            }
        Qf(t, a, u, i);
        return;
      case "option":
        for (h in l)
          if (l.hasOwnProperty(h) && (a = l[h], a != null))
            switch (h) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                gt(t, e, h, a, l, null);
            }
        return;
      case "dialog":
        et("beforetoggle", t), et("toggle", t), et("cancel", t), et("close", t);
        break;
      case "iframe":
      case "object":
        et("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < vu.length; a++)
          et(vu[a], t);
        break;
      case "image":
        et("error", t), et("load", t);
        break;
      case "details":
        et("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        et("error", t), et("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (T in l)
          if (l.hasOwnProperty(T) && (a = l[T], a != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                gt(t, e, T, a, l, null);
            }
        return;
      default:
        if (sn(e)) {
          for (D in l)
            l.hasOwnProperty(D) && (a = l[D], a !== void 0 && kc(
              t,
              e,
              D,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (r in l)
      l.hasOwnProperty(r) && (a = l[r], a != null && gt(t, e, r, a, l, null));
  }
  function Yd(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, i = null, n = null, r = null, h = null, T = null, D = null;
        for (R in l) {
          var U = l[R];
          if (l.hasOwnProperty(R) && U != null)
            switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = U;
              default:
                a.hasOwnProperty(R) || gt(t, e, R, null, a, U);
            }
        }
        for (var E in a) {
          var R = a[E];
          if (U = l[E], a.hasOwnProperty(E) && (R != null || U != null))
            switch (E) {
              case "type":
                i = R;
                break;
              case "name":
                u = R;
                break;
              case "checked":
                T = R;
                break;
              case "defaultChecked":
                D = R;
                break;
              case "value":
                n = R;
                break;
              case "defaultValue":
                r = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(f(137, e));
                break;
              default:
                R !== U && gt(
                  t,
                  e,
                  E,
                  R,
                  a,
                  U
                );
            }
        }
        cn(
          t,
          n,
          r,
          h,
          T,
          D,
          i,
          u
        );
        return;
      case "select":
        R = n = r = E = null;
        for (i in l)
          if (h = l[i], l.hasOwnProperty(i) && h != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                R = h;
              default:
                a.hasOwnProperty(i) || gt(
                  t,
                  e,
                  i,
                  null,
                  a,
                  h
                );
            }
        for (u in a)
          if (i = a[u], h = l[u], a.hasOwnProperty(u) && (i != null || h != null))
            switch (u) {
              case "value":
                E = i;
                break;
              case "defaultValue":
                r = i;
                break;
              case "multiple":
                n = i;
              default:
                i !== h && gt(
                  t,
                  e,
                  u,
                  i,
                  a,
                  h
                );
            }
        e = r, l = n, a = R, E != null ? $l(t, !!l, E, !1) : !!a != !!l && (e != null ? $l(t, !!l, e, !0) : $l(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        R = E = null;
        for (r in l)
          if (u = l[r], l.hasOwnProperty(r) && u != null && !a.hasOwnProperty(r))
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                gt(t, e, r, null, a, u);
            }
        for (n in a)
          if (u = a[n], i = l[n], a.hasOwnProperty(n) && (u != null || i != null))
            switch (n) {
              case "value":
                E = u;
                break;
              case "defaultValue":
                R = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(f(91));
                break;
              default:
                u !== i && gt(t, e, n, u, a, i);
            }
        wf(t, E, R);
        return;
      case "option":
        for (var L in l)
          if (E = l[L], l.hasOwnProperty(L) && E != null && !a.hasOwnProperty(L))
            switch (L) {
              case "selected":
                t.selected = !1;
                break;
              default:
                gt(
                  t,
                  e,
                  L,
                  null,
                  a,
                  E
                );
            }
        for (h in a)
          if (E = a[h], R = l[h], a.hasOwnProperty(h) && E !== R && (E != null || R != null))
            switch (h) {
              case "selected":
                t.selected = E && typeof E != "function" && typeof E != "symbol";
                break;
              default:
                gt(
                  t,
                  e,
                  h,
                  E,
                  a,
                  R
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var X in l)
          E = l[X], l.hasOwnProperty(X) && E != null && !a.hasOwnProperty(X) && gt(t, e, X, null, a, E);
        for (T in a)
          if (E = a[T], R = l[T], a.hasOwnProperty(T) && E !== R && (E != null || R != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(f(137, e));
                break;
              default:
                gt(
                  t,
                  e,
                  T,
                  E,
                  a,
                  R
                );
            }
        return;
      default:
        if (sn(e)) {
          for (var St in l)
            E = l[St], l.hasOwnProperty(St) && E !== void 0 && !a.hasOwnProperty(St) && kc(
              t,
              e,
              St,
              void 0,
              a,
              E
            );
          for (D in a)
            E = a[D], R = l[D], !a.hasOwnProperty(D) || E === R || E === void 0 && R === void 0 || kc(
              t,
              e,
              D,
              E,
              a,
              R
            );
          return;
        }
    }
    for (var S in l)
      E = l[S], l.hasOwnProperty(S) && E != null && !a.hasOwnProperty(S) && gt(t, e, S, null, a, E);
    for (U in a)
      E = a[U], R = l[U], !a.hasOwnProperty(U) || E === R || E == null && R == null || gt(t, e, U, E, a, R);
  }
  function Jo(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Gd() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var u = l[a], i = u.transferSize, n = u.initiatorType, r = u.duration;
        if (i && r && Jo(n)) {
          for (n = 0, r = u.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a], T = h.startTime;
            if (T > r) break;
            var D = h.transferSize, U = h.initiatorType;
            D && Jo(U) && (h = h.responseEnd, n += D * (h < r ? 1 : (r - T) / (h - T)));
          }
          if (--a, e += 8 * (i + n) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Wc = null, $c = null;
  function Ui(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Fo(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ko(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Ic(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Pc = null;
  function qd() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Pc ? !1 : (Pc = t, !0) : (Pc = null, !1);
  }
  var Wo = typeof setTimeout == "function" ? setTimeout : void 0, Xd = typeof clearTimeout == "function" ? clearTimeout : void 0, $o = typeof Promise == "function" ? Promise : void 0, wd = typeof queueMicrotask == "function" ? queueMicrotask : typeof $o < "u" ? function(t) {
    return $o.resolve(null).then(t).catch(Qd);
  } : Wo;
  function Qd(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Sl(t) {
    return t === "head";
  }
  function Io(t, e) {
    var l = e, a = 0;
    do {
      var u = l.nextSibling;
      if (t.removeChild(l), u && u.nodeType === 8)
        if (l = u.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(u), Oa(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          gu(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, gu(l);
          for (var i = l.firstChild; i; ) {
            var n = i.nextSibling, r = i.nodeName;
            i[Ca] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = n;
          }
        } else
          l === "body" && gu(t.ownerDocument.body);
      l = u;
    } while (l);
    Oa(e);
  }
  function Po(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = a;
    } while (l);
  }
  function tf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          tf(l), un(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Vd(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var u = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Ca])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = Ee(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Zd(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ee(t.nextSibling), t === null)) return null;
    return t;
  }
  function th(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ee(t.nextSibling), t === null)) return null;
    return t;
  }
  function ef(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function lf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Kd(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Ee(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var af = null;
  function eh(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return Ee(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function lh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function ah(t, e, l) {
    switch (e = Ui(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(f(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(f(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function gu(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    un(t);
  }
  var xe = /* @__PURE__ */ new Map(), uh = /* @__PURE__ */ new Set();
  function Mi(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Ie = N.d;
  N.d = {
    f: Jd,
    r: Fd,
    D: kd,
    C: Wd,
    L: $d,
    m: Id,
    X: tv,
    S: Pd,
    M: ev
  };
  function Jd() {
    var t = Ie.f(), e = Ei();
    return t || e;
  }
  function Fd(t) {
    var e = Fl(t);
    e !== null && e.tag === 5 && e.type === "form" ? pr(e) : Ie.r(t);
  }
  var Da = typeof document > "u" ? null : document;
  function ih(t, e, l) {
    var a = Da;
    if (a && typeof e == "string" && e) {
      var u = ve(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof l == "string" && (u += '[crossorigin="' + l + '"]'), uh.has(u) || (uh.add(u), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(u) === null && (e = a.createElement("link"), wt(e, "link", t), Lt(e), a.head.appendChild(e)));
    }
  }
  function kd(t) {
    Ie.D(t), ih("dns-prefetch", t, null);
  }
  function Wd(t, e) {
    Ie.C(t, e), ih("preconnect", t, e);
  }
  function $d(t, e, l) {
    Ie.L(t, e, l);
    var a = Da;
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + ve(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (u += '[imagesrcset="' + ve(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (u += '[imagesizes="' + ve(
        l.imageSizes
      ) + '"]')) : u += '[href="' + ve(t) + '"]';
      var i = u;
      switch (e) {
        case "style":
          i = _a(t);
          break;
        case "script":
          i = za(t);
      }
      xe.has(i) || (t = C(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), xe.set(i, t), a.querySelector(u) !== null || e === "style" && a.querySelector(Su(i)) || e === "script" && a.querySelector(bu(i)) || (e = a.createElement("link"), wt(e, "link", t), Lt(e), a.head.appendChild(e)));
    }
  }
  function Id(t, e) {
    Ie.m(t, e);
    var l = Da;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + ve(a) + '"][href="' + ve(t) + '"]', i = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = za(t);
      }
      if (!xe.has(i) && (t = C({ rel: "modulepreload", href: t }, e), xe.set(i, t), l.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(bu(i)))
              return;
        }
        a = l.createElement("link"), wt(a, "link", t), Lt(a), l.head.appendChild(a);
      }
    }
  }
  function Pd(t, e, l) {
    Ie.S(t, e, l);
    var a = Da;
    if (a && t) {
      var u = kl(a).hoistableStyles, i = _a(t);
      e = e || "default";
      var n = u.get(i);
      if (!n) {
        var r = { loading: 0, preload: null };
        if (n = a.querySelector(
          Su(i)
        ))
          r.loading = 5;
        else {
          t = C(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = xe.get(i)) && uf(t, l);
          var h = n = a.createElement("link");
          Lt(h), wt(h, "link", t), h._p = new Promise(function(T, D) {
            h.onload = T, h.onerror = D;
          }), h.addEventListener("load", function() {
            r.loading |= 1;
          }), h.addEventListener("error", function() {
            r.loading |= 2;
          }), r.loading |= 4, Ni(n, e, a);
        }
        n = {
          type: "stylesheet",
          instance: n,
          count: 1,
          state: r
        }, u.set(i, n);
      }
    }
  }
  function tv(t, e) {
    Ie.X(t, e);
    var l = Da;
    if (l && t) {
      var a = kl(l).hoistableScripts, u = za(t), i = a.get(u);
      i || (i = l.querySelector(bu(u)), i || (t = C({ src: t, async: !0 }, e), (e = xe.get(u)) && nf(t, e), i = l.createElement("script"), Lt(i), wt(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(u, i));
    }
  }
  function ev(t, e) {
    Ie.M(t, e);
    var l = Da;
    if (l && t) {
      var a = kl(l).hoistableScripts, u = za(t), i = a.get(u);
      i || (i = l.querySelector(bu(u)), i || (t = C({ src: t, async: !0, type: "module" }, e), (e = xe.get(u)) && nf(t, e), i = l.createElement("script"), Lt(i), wt(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(u, i));
    }
  }
  function nh(t, e, l, a) {
    var u = (u = P.current) ? Mi(u) : null;
    if (!u) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = _a(l.href), l = kl(
          u
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = _a(l.href);
          var i = kl(
            u
          ).hoistableStyles, n = i.get(t);
          if (n || (u = u.ownerDocument || u, n = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, n), (i = u.querySelector(
            Su(t)
          )) && !i._p && (n.instance = i, n.state.loading = 5), xe.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, xe.set(t, l), i || lv(
            u,
            t,
            l,
            n.state
          ))), e && a === null)
            throw Error(f(528, ""));
          return n;
        }
        if (e && a !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = za(l), l = kl(
          u
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, t));
    }
  }
  function _a(t) {
    return 'href="' + ve(t) + '"';
  }
  function Su(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ch(t) {
    return C({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function lv(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), wt(e, "link", l), Lt(e), t.head.appendChild(e));
  }
  function za(t) {
    return '[src="' + ve(t) + '"]';
  }
  function bu(t) {
    return "script[async]" + t;
  }
  function fh(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + ve(l.href) + '"]'
          );
          if (a)
            return e.instance = a, Lt(a), a;
          var u = C({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Lt(a), wt(a, "style", u), Ni(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          u = _a(l.href);
          var i = t.querySelector(
            Su(u)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, Lt(i), i;
          a = ch(l), (u = xe.get(u)) && uf(a, u), i = (t.ownerDocument || t).createElement("link"), Lt(i);
          var n = i;
          return n._p = new Promise(function(r, h) {
            n.onload = r, n.onerror = h;
          }), wt(i, "link", a), e.state.loading |= 4, Ni(i, l.precedence, t), e.instance = i;
        case "script":
          return i = za(l.src), (u = t.querySelector(
            bu(i)
          )) ? (e.instance = u, Lt(u), u) : (a = l, (u = xe.get(i)) && (a = C({}, l), nf(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), Lt(u), wt(u, "link", a), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Ni(a, l.precedence, t));
    return e.instance;
  }
  function Ni(t, e, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = a.length ? a[a.length - 1] : null, i = u, n = 0; n < a.length; n++) {
      var r = a[n];
      if (r.dataset.precedence === e) i = r;
      else if (i !== u) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function uf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function nf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var ji = null;
  function sh(t, e, l) {
    if (ji === null) {
      var a = /* @__PURE__ */ new Map(), u = ji = /* @__PURE__ */ new Map();
      u.set(l, a);
    } else
      u = ji, a = u.get(l), a || (a = /* @__PURE__ */ new Map(), u.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), u = 0; u < l.length; u++) {
      var i = l[u];
      if (!(i[Ca] || i[Yt] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var n = i.getAttribute(e) || "";
        n = t + n;
        var r = a.get(n);
        r ? r.push(i) : a.set(n, [i]);
      }
    }
    return a;
  }
  function rh(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function av(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function oh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function uv(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var u = _a(a.href), i = e.querySelector(
          Su(u)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Bi.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = i, Lt(i);
          return;
        }
        i = e.ownerDocument || e, a = ch(a), (u = xe.get(u)) && uf(a, u), i = i.createElement("link"), Lt(i);
        var n = i;
        n._p = new Promise(function(r, h) {
          n.onload = r, n.onerror = h;
        }), wt(i, "link", a), l.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Bi.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var cf = 0;
  function iv(t, e) {
    return t.stylesheets && t.count === 0 && Li(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && Li(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && cf === 0 && (cf = 62500 * Gd());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Li(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > cf ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function Bi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Li(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Ci = null;
  function Li(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Ci = /* @__PURE__ */ new Map(), e.forEach(nv, t), Ci = null, Bi.call(t));
  }
  function nv(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Ci.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Ci.set(t, l);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < u.length; i++) {
          var n = u[i];
          (n.nodeName === "LINK" || n.getAttribute("media") !== "not all") && (l.set(n.dataset.precedence, n), a = n);
        }
        a && l.set(null, a);
      }
      u = e.instance, n = u.getAttribute("data-precedence"), i = l.get(n) || a, i === a && l.set(null, u), l.set(n, u), this.count++, a = Bi.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), i ? i.parentNode.insertBefore(u, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var pu = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: w,
    _currentValue2: w,
    _threadCount: 0
  };
  function cv(t, e, l, a, u, i, n, r, h) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = tn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tn(0), this.hiddenUpdates = tn(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = i, this.onRecoverableError = n, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function hh(t, e, l, a, u, i, n, r, h, T, D, U) {
    return t = new cv(
      t,
      e,
      l,
      n,
      h,
      T,
      D,
      U,
      r
    ), e = 1, i === !0 && (e |= 24), i = fe(3, null, null, e), t.current = i, i.stateNode = t, e = Gn(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, Qn(i), t;
  }
  function mh(t) {
    return t ? (t = ia, t) : ia;
  }
  function dh(t, e, l, a, u, i) {
    u = mh(u), a.context === null ? a.context = u : a.pendingContext = u, a = cl(e), a.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = fl(t, a, e), l !== null && (le(l, t, e), Ia(l, t, e));
  }
  function vh(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function ff(t, e) {
    vh(t, e), (t = t.alternate) && vh(t, e);
  }
  function yh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ml(t, 67108864);
      e !== null && le(e, t, 67108864), ff(t, 67108864);
    }
  }
  function gh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = me();
      e = en(e);
      var l = Ml(t, e);
      l !== null && le(l, t, e), ff(t, e);
    }
  }
  var Hi = !0;
  function fv(t, e, l, a) {
    var u = _.T;
    _.T = null;
    var i = N.p;
    try {
      N.p = 2, sf(t, e, l, a);
    } finally {
      N.p = i, _.T = u;
    }
  }
  function sv(t, e, l, a) {
    var u = _.T;
    _.T = null;
    var i = N.p;
    try {
      N.p = 8, sf(t, e, l, a);
    } finally {
      N.p = i, _.T = u;
    }
  }
  function sf(t, e, l, a) {
    if (Hi) {
      var u = rf(a);
      if (u === null)
        Fc(
          t,
          e,
          a,
          Yi,
          l
        ), bh(t, a);
      else if (ov(
        u,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (bh(t, a), e & 4 && -1 < rv.indexOf(t)) {
        for (; u !== null; ) {
          var i = Fl(u);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var n = Dl(i.pendingLanes);
                  if (n !== 0) {
                    var r = i;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; n; ) {
                      var h = 1 << 31 - ne(n);
                      r.entanglements[1] |= h, n &= ~h;
                    }
                    je(i), (rt & 6) === 0 && (pi = ue() + 500, du(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = Ml(i, 2), r !== null && le(r, i, 2), Ei(), ff(i, 2);
            }
          if (i = rf(a), i === null && Fc(
            t,
            e,
            a,
            Yi,
            l
          ), i === u) break;
          u = i;
        }
        u !== null && a.stopPropagation();
      } else
        Fc(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function rf(t) {
    return t = on(t), of(t);
  }
  var Yi = null;
  function of(t) {
    if (Yi = null, t = Jl(t), t !== null) {
      var e = g(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = x(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = A(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Yi = t, null;
  }
  function Sh(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (kh()) {
          case Rf:
            return 2;
          case Df:
            return 8;
          case _u:
          case Wh:
            return 32;
          case _f:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var hf = !1, bl = null, pl = null, Tl = null, Tu = /* @__PURE__ */ new Map(), Eu = /* @__PURE__ */ new Map(), El = [], rv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function bh(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        bl = null;
        break;
      case "dragenter":
      case "dragleave":
        pl = null;
        break;
      case "mouseover":
      case "mouseout":
        Tl = null;
        break;
      case "pointerover":
      case "pointerout":
        Tu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Eu.delete(e.pointerId);
    }
  }
  function xu(t, e, l, a, u, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [u]
    }, e !== null && (e = Fl(e), e !== null && yh(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function ov(t, e, l, a, u) {
    switch (e) {
      case "focusin":
        return bl = xu(
          bl,
          t,
          e,
          l,
          a,
          u
        ), !0;
      case "dragenter":
        return pl = xu(
          pl,
          t,
          e,
          l,
          a,
          u
        ), !0;
      case "mouseover":
        return Tl = xu(
          Tl,
          t,
          e,
          l,
          a,
          u
        ), !0;
      case "pointerover":
        var i = u.pointerId;
        return Tu.set(
          i,
          xu(
            Tu.get(i) || null,
            t,
            e,
            l,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return i = u.pointerId, Eu.set(
          i,
          xu(
            Eu.get(i) || null,
            t,
            e,
            l,
            a,
            u
          )
        ), !0;
    }
    return !1;
  }
  function ph(t) {
    var e = Jl(t.target);
    if (e !== null) {
      var l = g(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = x(l), e !== null) {
            t.blockedOn = e, jf(t.priority, function() {
              gh(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = A(l), e !== null) {
            t.blockedOn = e, jf(t.priority, function() {
              gh(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Gi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = rf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        rn = a, l.target.dispatchEvent(a), rn = null;
      } else
        return e = Fl(l), e !== null && yh(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Th(t, e, l) {
    Gi(t) && l.delete(e);
  }
  function hv() {
    hf = !1, bl !== null && Gi(bl) && (bl = null), pl !== null && Gi(pl) && (pl = null), Tl !== null && Gi(Tl) && (Tl = null), Tu.forEach(Th), Eu.forEach(Th);
  }
  function qi(t, e) {
    t.blockedOn === e && (t.blockedOn = null, hf || (hf = !0, v.unstable_scheduleCallback(
      v.unstable_NormalPriority,
      hv
    )));
  }
  var Xi = null;
  function Eh(t) {
    Xi !== t && (Xi = t, v.unstable_scheduleCallback(
      v.unstable_NormalPriority,
      function() {
        Xi === t && (Xi = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], u = t[e + 2];
          if (typeof a != "function") {
            if (of(a || l) === null)
              continue;
            break;
          }
          var i = Fl(l);
          i !== null && (t.splice(e, 3), e -= 3, sc(
            i,
            {
              pending: !0,
              data: u,
              method: l.method,
              action: a
            },
            a,
            u
          ));
        }
      }
    ));
  }
  function Oa(t) {
    function e(h) {
      return qi(h, t);
    }
    bl !== null && qi(bl, t), pl !== null && qi(pl, t), Tl !== null && qi(Tl, t), Tu.forEach(e), Eu.forEach(e);
    for (var l = 0; l < El.length; l++) {
      var a = El[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < El.length && (l = El[0], l.blockedOn === null); )
      ph(l), l.blockedOn === null && El.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var u = l[a], i = l[a + 1], n = u[Wt] || null;
        if (typeof i == "function")
          n || Eh(l);
        else if (n) {
          var r = null;
          if (i && i.hasAttribute("formAction")) {
            if (u = i, n = i[Wt] || null)
              r = n.formAction;
            else if (of(u) !== null) continue;
          } else r = n.action;
          typeof r == "function" ? l[a + 1] = r : (l.splice(a, 3), a -= 3), Eh(l);
        }
      }
  }
  function xh() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(n) {
            return u = n;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      u !== null && (u(), u = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), u !== null && (u(), u = null);
      };
    }
  }
  function mf(t) {
    this._internalRoot = t;
  }
  wi.prototype.render = mf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var l = e.current, a = me();
    dh(l, a, t, e, null, null);
  }, wi.prototype.unmount = mf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      dh(t.current, 2, null, t, null, null), Ei(), e[Kl] = null;
    }
  };
  function wi(t) {
    this._internalRoot = t;
  }
  wi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Nf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < El.length && e !== 0 && e < El[l].priority; l++) ;
      El.splice(l, 0, t), l === 0 && ph(t);
    }
  };
  var Ah = c.version;
  if (Ah !== "19.2.0")
    throw Error(
      f(
        527,
        Ah,
        "19.2.0"
      )
    );
  N.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = b(e), t = t !== null ? B(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var mv = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qi.isDisabled && Qi.supportsFiber)
      try {
        Na = Qi.inject(
          mv
        ), ie = Qi;
      } catch {
      }
  }
  return Ru.createRoot = function(t, e) {
    if (!o(t)) throw Error(f(299));
    var l = !1, a = "", u = Ur, i = Mr, n = Nr;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (n = e.onRecoverableError)), e = hh(
      t,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      u,
      i,
      n,
      xh
    ), t[Kl] = e.current, Jc(t), new mf(e);
  }, Ru.hydrateRoot = function(t, e, l) {
    if (!o(t)) throw Error(f(299));
    var a = !1, u = "", i = Ur, n = Mr, r = Nr, h = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (r = l.onRecoverableError), l.formState !== void 0 && (h = l.formState)), e = hh(
      t,
      1,
      !0,
      e,
      l ?? null,
      a,
      u,
      h,
      i,
      n,
      r,
      xh
    ), e.context = mh(null), l = e.current, a = me(), a = en(a), u = cl(a), u.callback = null, fl(l, u, a), l = a, e.current.lanes = l, Ba(e, l), je(e), t[Kl] = e.current, Jc(t), new wi(e);
  }, Ru.version = "19.2.0", Ru;
}
var Bh;
function Rv() {
  if (Bh) return yf.exports;
  Bh = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (c) {
        console.error(c);
      }
  }
  return v(), yf.exports = Av(), yf.exports;
}
var Dv = Rv();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _v = (v) => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Hh = (...v) => v.filter((c, s, f) => !!c && c.trim() !== "" && f.indexOf(c) === s).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var zv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ov = nt.forwardRef(
  ({
    color: v = "currentColor",
    size: c = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: f,
    className: o = "",
    children: g,
    iconNode: x,
    ...A
  }, z) => nt.createElement(
    "svg",
    {
      ref: z,
      ...zv,
      width: c,
      height: c,
      stroke: v,
      strokeWidth: f ? Number(s) * 24 / Number(c) : s,
      className: Hh("lucide", o),
      ...A
    },
    [
      ...x.map(([b, B]) => nt.createElement(b, B)),
      ...Array.isArray(g) ? g : [g]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zt = (v, c) => {
  const s = nt.forwardRef(
    ({ className: f, ...o }, g) => nt.createElement(Ov, {
      ref: g,
      iconNode: c,
      className: Hh(`lucide-${_v(v)}`, f),
      ...o
    })
  );
  return s.displayName = `${v}`, s;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uv = Zt("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mv = Zt("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yh = Zt("BriefcaseBusiness", [
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }],
  ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0", key: "12hx5q" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nv = Zt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jv = Zt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gh = Zt("CodeXml", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qh = Zt("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xh = Zt("Layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wh = Zt("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bv = Zt("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cv = Zt("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qh = Zt("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lv = Zt("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vh = Zt("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hv = Zt("Workflow", [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yv = Zt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Gv = {
  SIM_RESOLUTION: 128,
  DYE_RESOLUTION: 1024,
  CAPTURE_RESOLUTION: 512,
  DENSITY_DISSIPATION: 1,
  VELOCITY_DISSIPATION: 0.2,
  PRESSURE: 0.8,
  PRESSURE_ITERATIONS: 20,
  CURL: 30,
  SPLAT_RADIUS: 0.25,
  SPLAT_FORCE: 6e3,
  SHADING: !0,
  COLORFUL: !0,
  COLOR_UPDATE_SPEED: 10,
  PAUSED: !1,
  BACK_COLOR: { r: 0, g: 0, b: 0 },
  TRANSPARENT: !1,
  BLOOM: !0,
  BLOOM_ITERATIONS: 8,
  BLOOM_RESOLUTION: 256,
  BLOOM_INTENSITY: 0.8,
  BLOOM_THRESHOLD: 0.6,
  BLOOM_SOFT_KNEE: 0.7,
  SUNRAYS: !0,
  SUNRAYS_RESOLUTION: 196,
  SUNRAYS_WEIGHT: 1
};
class qv {
  constructor(c, s) {
    this.programs = {}, this.activeProgram = null, this.uniforms = {}, this.vertexShader = c, this.fragmentShaderSource = s;
  }
  setKeywords(c, s) {
    let f = 0;
    for (let g = 0; g < c.length; g++)
      f += this.hashCode(c[g]);
    let o = this.programs[f];
    if (o == null) {
      let g = this.compileShader(s, s.FRAGMENT_SHADER, this.fragmentShaderSource, c);
      o = this.createProgram(s, this.vertexShader, g), this.programs[f] = o;
    }
    o != this.activeProgram && (this.uniforms = this.getUniforms(s, o), this.activeProgram = o);
  }
  bind(c) {
    c.useProgram(this.activeProgram);
  }
  hashCode(c) {
    if (c.length == 0)
      return 0;
    let s = 0;
    for (let f = 0; f < c.length; f++)
      s = (s << 5) - s + c.charCodeAt(f), s |= 0;
    return s;
  }
  compileShader(c, s, f, o) {
    f = this.addKeywords(f, o);
    const g = c.createShader(s);
    return c.shaderSource(g, f), c.compileShader(g), c.getShaderParameter(g, c.COMPILE_STATUS) || console.trace(c.getShaderInfoLog(g)), g;
  }
  addKeywords(c, s) {
    if (s == null)
      return c;
    let f = "";
    return s.forEach((o) => {
      f += "#define " + o + `
`;
    }), f + c;
  }
  createProgram(c, s, f) {
    let o = c.createProgram();
    return c.attachShader(o, s), c.attachShader(o, f), c.linkProgram(o), c.getProgramParameter(o, c.LINK_STATUS) || console.trace(c.getProgramInfoLog(o)), o;
  }
  getUniforms(c, s) {
    let f = {}, o = c.getProgramParameter(s, c.ACTIVE_UNIFORMS);
    for (let g = 0; g < o; g++) {
      let x = c.getActiveUniform(s, g).name;
      f[x] = c.getUniformLocation(s, x);
    }
    return f;
  }
}
class Qt {
  constructor(c, s, f) {
    this.uniforms = {}, this.program = this.createProgram(c, s, f), this.uniforms = this.getUniforms(c, this.program);
  }
  bind(c) {
    c.useProgram(this.program);
  }
  createProgram(c, s, f) {
    let o = c.createProgram();
    return c.attachShader(o, s), c.attachShader(o, f), c.linkProgram(o), c.getProgramParameter(o, c.LINK_STATUS) || console.trace(c.getProgramInfoLog(o)), o;
  }
  getUniforms(c, s) {
    let f = {}, o = c.getProgramParameter(s, c.ACTIVE_UNIFORMS);
    for (let g = 0; g < o; g++) {
      let x = c.getActiveUniform(s, g).name;
      f[x] = c.getUniformLocation(s, x);
    }
    return f;
  }
}
class Xv {
  constructor(c, s = {}) {
    this.bloomFramebuffers = [], this.pointers = [], this.splatStack = [], this.lastUpdateTime = Date.now(), this.colorUpdateTimer = 0, this.animationId = null, this.update = () => {
      const g = this.calcDeltaTime();
      this.resizeCanvas() && this.initFramebuffers(), this.updateColors(g), this.applyInputs(), this.config.PAUSED || this.step(g), this.render(null), this.animationId = requestAnimationFrame(this.update);
    }, this.handleMouseDown = (g) => {
      let x = this.scaleByPixelRatio(g.offsetX), A = this.scaleByPixelRatio(g.offsetY), z = this.pointers.find((b) => b.id == -1);
      z == null && (z = this.createPointer(), this.pointers.push(z)), this.updatePointerDownData(z, -1, x, A);
    }, this.handleMouseMove = (g) => {
      let x = this.pointers[0];
      if (!x.down)
        return;
      let A = this.scaleByPixelRatio(g.offsetX), z = this.scaleByPixelRatio(g.offsetY);
      this.updatePointerMoveData(x, A, z);
    }, this.handleMouseUp = () => {
      this.updatePointerUpData(this.pointers[0]);
    }, this.handleTouchStart = (g) => {
      g.preventDefault();
      const x = g.targetTouches;
      for (; x.length >= this.pointers.length; )
        this.pointers.push(this.createPointer());
      for (let A = 0; A < x.length; A++) {
        const z = this.canvas.getBoundingClientRect();
        let b = this.scaleByPixelRatio(x[A].clientX - z.left), B = this.scaleByPixelRatio(x[A].clientY - z.top);
        this.updatePointerDownData(this.pointers[A + 1], x[A].identifier, b, B);
      }
    }, this.handleTouchMove = (g) => {
      g.preventDefault();
      const x = g.targetTouches;
      for (let A = 0; A < x.length; A++) {
        let z = this.pointers[A + 1];
        if (!z.down)
          continue;
        const b = this.canvas.getBoundingClientRect();
        let B = this.scaleByPixelRatio(x[A].clientX - b.left), C = this.scaleByPixelRatio(x[A].clientY - b.top);
        this.updatePointerMoveData(z, B, C);
      }
    }, this.handleTouchEnd = (g) => {
      const x = g.changedTouches;
      for (let A = 0; A < x.length; A++) {
        let z = this.pointers.find((b) => b.id == x[A].identifier);
        z != null && this.updatePointerUpData(z);
      }
    }, this.handleKeyDown = (g) => {
      g.code === "KeyP" && (this.config.PAUSED = !this.config.PAUSED), g.key === " " && this.splatStack.push(Math.floor(Math.random() * 20) + 5);
    }, this.canvas = c, this.config = Object.assign(Object.assign({}, Gv), s);
    const { gl: f, ext: o } = this.getWebGLContext(c);
    this.gl = f, this.ext = o, this.initPointers(), this.initShaders(), this.initPrograms(), this.initBlit(), this.initFramebuffers(), this.updateKeywords(), this.ditheringTexture = this.createTextureAsync("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="), this.resizeCanvas(), this.randomSplats(Math.floor(Math.random() * 20) + 5), this.start();
  }
  // --- Публичный API ---
  splat(c, s, f, o, g) {
    this.splatInternal(c, s, f, o, g);
  }
  randomSplats(c) {
    this.multipleSplats(c);
  }
  updateConfig(c) {
    this.config = Object.assign(Object.assign({}, this.config), c), this.updateKeywords(), (c.DYE_RESOLUTION || c.SIM_RESOLUTION || c.BLOOM_RESOLUTION || c.SUNRAYS_RESOLUTION) && this.initFramebuffers();
  }
  start() {
    this.animationId === null && this.update();
  }
  stop() {
    this.animationId !== null && (cancelAnimationFrame(this.animationId), this.animationId = null);
  }
  pause() {
    this.config.PAUSED = !0;
  }
  resume() {
    this.config.PAUSED = !1;
  }
  captureScreenshot() {
    let c = this.getResolution(this.config.CAPTURE_RESOLUTION), s = this.createFBO(c.width, c.height, this.ext.formatRGBA.internalFormat, this.ext.formatRGBA.format, this.ext.halfFloatTexType, this.gl.NEAREST);
    this.render(s);
    let f = this.framebufferToTexture(s), o = this.normalizeTexture(f, s.width, s.height);
    return this.textureToCanvas(o, s.width, s.height).toDataURL();
  }
  // --- Приватные методы ---
  getWebGLContext(c) {
    const s = {
      alpha: !0,
      depth: !1,
      stencil: !1,
      antialias: !1,
      preserveDrawingBuffer: !1
    };
    let f = c.getContext("webgl2", s);
    const o = !!f;
    o || (f = c.getContext("webgl", s) || c.getContext("experimental-webgl", s));
    let g, x;
    o ? (f.getExtension("EXT_color_buffer_float"), x = f.getExtension("OES_texture_float_linear")) : (g = f.getExtension("OES_texture_half_float"), x = f.getExtension("OES_texture_half_float_linear")), f.clearColor(0, 0, 0, 1);
    const A = o ? f.HALF_FLOAT : g.HALF_FLOAT_OES;
    let z, b, B;
    return o ? (z = this.getSupportedFormat(f, f.RGBA16F, f.RGBA, A), b = this.getSupportedFormat(f, f.RG16F, f.RG, A), B = this.getSupportedFormat(f, f.R16F, f.RED, A)) : (z = this.getSupportedFormat(f, f.RGBA, f.RGBA, A), b = this.getSupportedFormat(f, f.RGBA, f.RGBA, A), B = this.getSupportedFormat(f, f.RGBA, f.RGBA, A)), {
      gl: f,
      ext: {
        formatRGBA: z,
        formatRG: b,
        formatR: B,
        halfFloatTexType: A,
        supportLinearFiltering: !!x
      }
    };
  }
  getSupportedFormat(c, s, f, o) {
    if (!this.supportRenderTextureFormat(c, s, f, o))
      switch (s) {
        case c.R16F:
          return this.getSupportedFormat(c, c.RG16F, c.RG, o);
        case c.RG16F:
          return this.getSupportedFormat(c, c.RGBA16F, c.RGBA, o);
        default:
          return { internalFormat: c.RGBA, format: c.RGBA };
      }
    return { internalFormat: s, format: f };
  }
  supportRenderTextureFormat(c, s, f, o) {
    let g = c.createTexture();
    c.bindTexture(c.TEXTURE_2D, g), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), c.texImage2D(c.TEXTURE_2D, 0, s, 4, 4, 0, f, o, null);
    let x = c.createFramebuffer();
    return c.bindFramebuffer(c.FRAMEBUFFER, x), c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, g, 0), c.checkFramebufferStatus(c.FRAMEBUFFER) == c.FRAMEBUFFER_COMPLETE;
  }
  initPointers() {
    this.pointers = [], this.pointers.push(this.createPointer());
  }
  createPointer() {
    return {
      id: -1,
      texcoordX: 0,
      texcoordY: 0,
      prevTexcoordX: 0,
      prevTexcoordY: 0,
      deltaX: 0,
      deltaY: 0,
      down: !1,
      moved: !1,
      color: [30, 0, 300]
    };
  }
  initShaders() {
    const c = this.gl;
    this.baseVertexShader = this.compileShader(c.VERTEX_SHADER, `
      precision highp float;

      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;

      void main () {
          vUv = aPosition * 0.5 + 0.5;
          vL = vUv - vec2(texelSize.x, 0.0);
          vR = vUv + vec2(texelSize.x, 0.0);
          vT = vUv + vec2(0.0, texelSize.y);
          vB = vUv - vec2(0.0, texelSize.y);
          gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `), this.blurVertexShader = this.compileShader(c.VERTEX_SHADER, `
      precision highp float;

      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      uniform vec2 texelSize;

      void main () {
          vUv = aPosition * 0.5 + 0.5;
          float offset = 1.33333333;
          vL = vUv - texelSize * offset;
          vR = vUv + texelSize * offset;
          gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `);
  }
  initPrograms() {
    const c = this.gl, s = this.compileShader(c.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;

      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      uniform sampler2D uTexture;

      void main () {
          vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
          sum += texture2D(uTexture, vL) * 0.35294117;
          sum += texture2D(uTexture, vR) * 0.35294117;
          gl_FragColor = sum;
      }
    `), f = this.compileShader(c.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;

      varying highp vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
    `), o = this.compileShader(c.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;

      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;

      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `), g = this.compileShader(c.FRAGMENT_SHADER, `
      precision mediump float;

      uniform vec4 color;

      void main () {
          gl_FragColor = color;
      }
    `), x = this.compileShader(c.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;

      varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform float aspectRatio;

      #define SCALE 25.0

      void main () {
          vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
          float v = mod(uv.x + uv.y, 2.0);
          v = v * 0.1 + 0.8;
          gl_FragColor = vec4(vec3(v), 1.0);
      }
    `), A = `
      precision highp float;
      precision highp sampler2D;

      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uBloom;
      uniform sampler2D uSunrays;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;

      #ifdef SHADING
          vec3 lc = texture2D(uTexture, vL).rgb;
          vec3 rc = texture2D(uTexture, vR).rgb;
          vec3 tc = texture2D(uTexture, vT).rgb;
          vec3 bc = texture2D(uTexture, vB).rgb;

          float dx = length(rc) - length(lc);
          float dy = length(tc) - length(bc);

          vec3 n = normalize(vec3(dx, dy, length(texelSize)));
          vec3 l = vec3(0.0, 0.0, 1.0);

          float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
          c *= diffuse;
      #endif

      #ifdef BLOOM
          vec3 bloom = texture2D(uBloom, vUv).rgb;
      #endif

      #ifdef SUNRAYS
          float sunrays = texture2D(uSunrays, vUv).r;
          c *= sunrays;
      #ifdef BLOOM
          bloom *= sunrays;
      #endif
      #endif

      #ifdef BLOOM
          float noise = texture2D(uDithering, vUv * ditherScale).r;
          noise = noise * 2.0 - 1.0;
          bloom += noise / 255.0;
          bloom = linearToGamma(bloom);
          c += bloom;
      #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `;
    this.blurProgram = new Qt(c, this.blurVertexShader, s), this.copyProgram = new Qt(c, this.baseVertexShader, f), this.clearProgram = new Qt(c, this.baseVertexShader, o), this.colorProgram = new Qt(c, this.baseVertexShader, g), this.checkerboardProgram = new Qt(c, this.baseVertexShader, x), this.displayMaterial = new qv(this.baseVertexShader, A), this.initRemainingPrograms();
  }
  initRemainingPrograms() {
    const c = this.gl, s = this.compileShader(c.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;

      varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform vec3 curve;
      uniform float threshold;

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          float br = max(c.r, max(c.g, c.b));
          float rq = clamp(br - curve.x, 0.0, curve.y);
          rq = curve.z * rq * rq;
          c *= max(rq, br - threshold) / max(br, 0.0001);
          gl_FragColor = vec4(c, 0.0);
      }
    `), f = this.compileShader(c.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;

      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;

      void main () {
          vec4 sum = vec4(0.0);
          sum += texture2D(uTexture, vL);
          sum += texture2D(uTexture, vR);
          sum += texture2D(uTexture, vT);
          sum += texture2D(uTexture, vB);
          sum *= 0.25;
          gl_FragColor = sum;
      }
    `), o = this.compileShader(c.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;

      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform float intensity;

      void main () {
          vec4 sum = vec4(0.0);
          sum += texture2D(uTexture, vL);
          sum += texture2D(uTexture, vR);
          sum += texture2D(uTexture, vT);
          sum += texture2D(uTexture, vB);
          sum *= 0.25;
          gl_FragColor = sum * intensity;
      }
    `), g = this.compileShader(c.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;

      varying vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          vec4 c = texture2D(uTexture, vUv);
          float br = max(c.r, max(c.g, c.b));
          c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
          gl_FragColor = c;
      }
    `), x = this.compileShader(c.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;

      varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform float weight;

      #define ITERATIONS 16

      void main () {
          float Density = 0.3;
          float Decay = 0.95;
          float Exposure = 0.7;

          vec2 coord = vUv;
          vec2 dir = vUv - 0.5;

          dir *= 1.0 / float(ITERATIONS) * Density;
          float illuminationDecay = 1.0;

          float color = texture2D(uTexture, vUv).a;

          for (int i = 0; i < ITERATIONS; i++)
          {
              coord -= dir;
              float col = texture2D(uTexture, coord).a;
              color += col * illuminationDecay * weight;
              illuminationDecay *= Decay;
          }

          gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
      }
    `), A = this.compileShader(c.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;

      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;

      void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
      }
    `), z = this.compileShader(c.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;

      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;

      vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
          vec2 st = uv / tsize - 0.5;

          vec2 iuv = floor(st);
          vec2 fuv = fract(st);

          vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
          vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
          vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
          vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

          return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
      }

      void main () {
      #ifdef MANUAL_FILTERING
          vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
          vec4 result = bilerp(uSource, coord, dyeTexelSize);
      #else
          vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
          vec4 result = texture2D(uSource, coord);
      #endif
          float decay = 1.0 + dissipation * dt;
          gl_FragColor = result / decay;
      }
    `, this.ext.supportLinearFiltering ? void 0 : ["MANUAL_FILTERING"]), b = this.compileShader(c.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;

      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).x;
          float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y;
          float B = texture2D(uVelocity, vB).y;

          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.0) { L = -C.x; }
          if (vR.x > 1.0) { R = -C.x; }
          if (vT.y > 1.0) { T = -C.y; }
          if (vB.y < 0.0) { B = -C.y; }

          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `), B = this.compileShader(c.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;

      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).y;
          float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x;
          float B = texture2D(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `), C = this.compileShader(c.FRAGMENT_SHADER, `
      precision highp float;
      precision highp sampler2D;

      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;

      void main () {
          float L = texture2D(uCurl, vL).x;
          float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x;
          float B = texture2D(uCurl, vB).x;
          float C = texture2D(uCurl, vUv).x;

          vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + 0.0001;
          force *= curl * C;
          force.y *= -1.0;

          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity += force * dt;
          velocity = min(max(velocity, -1000.0), 1000.0);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `), W = this.compileShader(c.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;

      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          float C = texture2D(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `), q = this.compileShader(c.FRAGMENT_SHADER, `
      precision mediump float;
      precision mediump sampler2D;

      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `);
    this.bloomPrefilterProgram = new Qt(c, this.baseVertexShader, s), this.bloomBlurProgram = new Qt(c, this.baseVertexShader, f), this.bloomFinalProgram = new Qt(c, this.baseVertexShader, o), this.sunraysMaskProgram = new Qt(c, this.baseVertexShader, g), this.sunraysProgram = new Qt(c, this.baseVertexShader, x), this.splatProgram = new Qt(c, this.baseVertexShader, A), this.advectionProgram = new Qt(c, this.baseVertexShader, z), this.divergenceProgram = new Qt(c, this.baseVertexShader, b), this.curlProgram = new Qt(c, this.baseVertexShader, B), this.vorticityProgram = new Qt(c, this.baseVertexShader, C), this.pressureProgram = new Qt(c, this.baseVertexShader, W), this.gradienSubtractProgram = new Qt(c, this.baseVertexShader, q);
  }
  compileShader(c, s, f) {
    const o = this.gl;
    if (f) {
      let x = "";
      f.forEach((A) => {
        x += "#define " + A + `
`;
      }), s = x + s;
    }
    const g = o.createShader(c);
    return o.shaderSource(g, s), o.compileShader(g), o.getShaderParameter(g, o.COMPILE_STATUS) || console.trace(o.getShaderInfoLog(g)), g;
  }
  initBlit() {
    const c = this.gl;
    c.bindBuffer(c.ARRAY_BUFFER, c.createBuffer()), c.bufferData(c.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), c.STATIC_DRAW), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, c.createBuffer()), c.bufferData(c.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), c.STATIC_DRAW), c.vertexAttribPointer(0, 2, c.FLOAT, !1, 0, 0), c.enableVertexAttribArray(0), this.blit = (s, f = !1) => {
      s == null ? (c.viewport(0, 0, c.drawingBufferWidth, c.drawingBufferHeight), c.bindFramebuffer(c.FRAMEBUFFER, null)) : (c.viewport(0, 0, s.width, s.height), c.bindFramebuffer(c.FRAMEBUFFER, s.fbo)), f && (c.clearColor(0, 0, 0, 1), c.clear(c.COLOR_BUFFER_BIT)), c.drawElements(c.TRIANGLES, 6, c.UNSIGNED_SHORT, 0);
    };
  }
  initFramebuffers() {
    let c = this.getResolution(this.config.SIM_RESOLUTION), s = this.getResolution(this.config.DYE_RESOLUTION);
    const f = this.ext.halfFloatTexType, o = this.ext.formatRGBA, g = this.ext.formatRG, x = this.ext.formatR, A = this.ext.supportLinearFiltering ? this.gl.LINEAR : this.gl.NEAREST;
    this.gl.disable(this.gl.BLEND), this.dye == null ? this.dye = this.createDoubleFBO(s.width, s.height, o.internalFormat, o.format, f, A) : this.dye = this.resizeDoubleFBO(this.dye, s.width, s.height, o.internalFormat, o.format, f, A), this.velocity == null ? this.velocity = this.createDoubleFBO(c.width, c.height, g.internalFormat, g.format, f, A) : this.velocity = this.resizeDoubleFBO(this.velocity, c.width, c.height, g.internalFormat, g.format, f, A), this.divergence = this.createFBO(c.width, c.height, x.internalFormat, x.format, f, this.gl.NEAREST), this.curl = this.createFBO(c.width, c.height, x.internalFormat, x.format, f, this.gl.NEAREST), this.pressure = this.createDoubleFBO(c.width, c.height, x.internalFormat, x.format, f, this.gl.NEAREST), this.initBloomFramebuffers(), this.initSunraysFramebuffers();
  }
  initBloomFramebuffers() {
    let c = this.getResolution(this.config.BLOOM_RESOLUTION);
    const s = this.ext.halfFloatTexType, f = this.ext.formatRGBA, o = this.ext.supportLinearFiltering ? this.gl.LINEAR : this.gl.NEAREST;
    this.bloom = this.createFBO(c.width, c.height, f.internalFormat, f.format, s, o), this.bloomFramebuffers.length = 0;
    for (let g = 0; g < this.config.BLOOM_ITERATIONS; g++) {
      let x = c.width >> g + 1, A = c.height >> g + 1;
      if (x < 2 || A < 2)
        break;
      let z = this.createFBO(x, A, f.internalFormat, f.format, s, o);
      this.bloomFramebuffers.push(z);
    }
  }
  initSunraysFramebuffers() {
    let c = this.getResolution(this.config.SUNRAYS_RESOLUTION);
    const s = this.ext.halfFloatTexType, f = this.ext.formatR, o = this.ext.supportLinearFiltering ? this.gl.LINEAR : this.gl.NEAREST;
    this.sunrays = this.createFBO(c.width, c.height, f.internalFormat, f.format, s, o), this.sunraysTemp = this.createFBO(c.width, c.height, f.internalFormat, f.format, s, o);
  }
  createFBO(c, s, f, o, g, x) {
    const A = this.gl;
    A.activeTexture(A.TEXTURE0);
    let z = A.createTexture();
    A.bindTexture(A.TEXTURE_2D, z), A.texParameteri(A.TEXTURE_2D, A.TEXTURE_MIN_FILTER, x), A.texParameteri(A.TEXTURE_2D, A.TEXTURE_MAG_FILTER, x), A.texParameteri(A.TEXTURE_2D, A.TEXTURE_WRAP_S, A.CLAMP_TO_EDGE), A.texParameteri(A.TEXTURE_2D, A.TEXTURE_WRAP_T, A.CLAMP_TO_EDGE), A.texImage2D(A.TEXTURE_2D, 0, f, c, s, 0, o, g, null);
    let b = A.createFramebuffer();
    A.bindFramebuffer(A.FRAMEBUFFER, b), A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, z, 0), A.viewport(0, 0, c, s), A.clear(A.COLOR_BUFFER_BIT);
    let B = 1 / c, C = 1 / s;
    return {
      texture: z,
      fbo: b,
      width: c,
      height: s,
      texelSizeX: B,
      texelSizeY: C,
      attach(W) {
        return A.activeTexture(A.TEXTURE0 + W), A.bindTexture(A.TEXTURE_2D, z), W;
      }
    };
  }
  createDoubleFBO(c, s, f, o, g, x) {
    let A = this.createFBO(c, s, f, o, g, x), z = this.createFBO(c, s, f, o, g, x);
    return {
      width: c,
      height: s,
      texelSizeX: A.texelSizeX,
      texelSizeY: A.texelSizeY,
      get read() {
        return A;
      },
      set read(b) {
        A = b;
      },
      get write() {
        return z;
      },
      set write(b) {
        z = b;
      },
      swap() {
        let b = A;
        A = z, z = b;
      }
    };
  }
  resizeFBO(c, s, f, o, g, x, A) {
    let z = this.createFBO(s, f, o, g, x, A);
    return this.copyProgram.bind(this.gl), this.gl.uniform1i(this.copyProgram.uniforms.uTexture, c.attach(0)), this.blit(z), z;
  }
  resizeDoubleFBO(c, s, f, o, g, x, A) {
    return c.width == s && c.height == f || (c.read = this.resizeFBO(c.read, s, f, o, g, x, A), c.write = this.createFBO(s, f, o, g, x, A), c.width = s, c.height = f, c.texelSizeX = 1 / s, c.texelSizeY = 1 / f), c;
  }
  createTextureAsync(c) {
    const s = this.gl;
    let f = s.createTexture();
    s.bindTexture(s.TEXTURE_2D, f), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.REPEAT), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.REPEAT), s.texImage2D(s.TEXTURE_2D, 0, s.RGB, 1, 1, 0, s.RGB, s.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));
    let o = {
      texture: f,
      width: 1,
      height: 1,
      attach(x) {
        return s.activeTexture(s.TEXTURE0 + x), s.bindTexture(s.TEXTURE_2D, f), x;
      }
    }, g = new Image();
    return g.onload = () => {
      o.width = g.width, o.height = g.height, s.bindTexture(s.TEXTURE_2D, f), s.texImage2D(s.TEXTURE_2D, 0, s.RGB, s.RGB, s.UNSIGNED_BYTE, g);
    }, g.src = c, o;
  }
  updateKeywords() {
    let c = [];
    this.config.SHADING && c.push("SHADING"), this.config.BLOOM && c.push("BLOOM"), this.config.SUNRAYS && c.push("SUNRAYS"), this.displayMaterial.setKeywords(c, this.gl);
  }
  calcDeltaTime() {
    let c = Date.now(), s = (c - this.lastUpdateTime) / 1e3;
    return s = Math.min(s, 0.016666), this.lastUpdateTime = c, s;
  }
  resizeCanvas() {
    let c = this.scaleByPixelRatio(this.canvas.clientWidth), s = this.scaleByPixelRatio(this.canvas.clientHeight);
    return this.canvas.width != c || this.canvas.height != s ? (this.canvas.width = c, this.canvas.height = s, !0) : !1;
  }
  updateColors(c) {
    this.config.COLORFUL && (this.colorUpdateTimer += c * this.config.COLOR_UPDATE_SPEED, this.colorUpdateTimer >= 1 && (this.colorUpdateTimer = this.wrap(this.colorUpdateTimer, 0, 1), this.pointers.forEach((s) => {
      const f = this.generateColor();
      s.color = [f.r * 255, f.g * 255, f.b * 255];
    })));
  }
  applyInputs() {
    this.splatStack.length > 0 && this.multipleSplats(this.splatStack.pop()), this.pointers.forEach((c) => {
      c.moved && (c.moved = !1, this.splatPointer(c));
    });
  }
  step(c) {
    const s = this.gl;
    s.disable(s.BLEND), this.curlProgram.bind(s), s.uniform2f(this.curlProgram.uniforms.texelSize, this.velocity.texelSizeX, this.velocity.texelSizeY), s.uniform1i(this.curlProgram.uniforms.uVelocity, this.velocity.read.attach(0)), this.blit(this.curl), this.vorticityProgram.bind(s), s.uniform2f(this.vorticityProgram.uniforms.texelSize, this.velocity.texelSizeX, this.velocity.texelSizeY), s.uniform1i(this.vorticityProgram.uniforms.uVelocity, this.velocity.read.attach(0)), s.uniform1i(this.vorticityProgram.uniforms.uCurl, this.curl.attach(1)), s.uniform1f(this.vorticityProgram.uniforms.curl, this.config.CURL), s.uniform1f(this.vorticityProgram.uniforms.dt, c), this.blit(this.velocity.write), this.velocity.swap(), this.divergenceProgram.bind(s), s.uniform2f(this.divergenceProgram.uniforms.texelSize, this.velocity.texelSizeX, this.velocity.texelSizeY), s.uniform1i(this.divergenceProgram.uniforms.uVelocity, this.velocity.read.attach(0)), this.blit(this.divergence), this.clearProgram.bind(s), s.uniform1i(this.clearProgram.uniforms.uTexture, this.pressure.read.attach(0)), s.uniform1f(this.clearProgram.uniforms.value, this.config.PRESSURE), this.blit(this.pressure.write), this.pressure.swap(), this.pressureProgram.bind(s), s.uniform2f(this.pressureProgram.uniforms.texelSize, this.velocity.texelSizeX, this.velocity.texelSizeY), s.uniform1i(this.pressureProgram.uniforms.uDivergence, this.divergence.attach(0));
    for (let o = 0; o < this.config.PRESSURE_ITERATIONS; o++)
      s.uniform1i(this.pressureProgram.uniforms.uPressure, this.pressure.read.attach(1)), this.blit(this.pressure.write), this.pressure.swap();
    this.gradienSubtractProgram.bind(s), s.uniform2f(this.gradienSubtractProgram.uniforms.texelSize, this.velocity.texelSizeX, this.velocity.texelSizeY), s.uniform1i(this.gradienSubtractProgram.uniforms.uPressure, this.pressure.read.attach(0)), s.uniform1i(this.gradienSubtractProgram.uniforms.uVelocity, this.velocity.read.attach(1)), this.blit(this.velocity.write), this.velocity.swap(), this.advectionProgram.bind(s), s.uniform2f(this.advectionProgram.uniforms.texelSize, this.velocity.texelSizeX, this.velocity.texelSizeY), this.ext.supportLinearFiltering || s.uniform2f(this.advectionProgram.uniforms.dyeTexelSize, this.velocity.texelSizeX, this.velocity.texelSizeY);
    let f = this.velocity.read.attach(0);
    s.uniform1i(this.advectionProgram.uniforms.uVelocity, f), s.uniform1i(this.advectionProgram.uniforms.uSource, f), s.uniform1f(this.advectionProgram.uniforms.dt, c), s.uniform1f(this.advectionProgram.uniforms.dissipation, this.config.VELOCITY_DISSIPATION), this.blit(this.velocity.write), this.velocity.swap(), this.ext.supportLinearFiltering || s.uniform2f(this.advectionProgram.uniforms.dyeTexelSize, this.dye.texelSizeX, this.dye.texelSizeY), s.uniform1i(this.advectionProgram.uniforms.uVelocity, this.velocity.read.attach(0)), s.uniform1i(this.advectionProgram.uniforms.uSource, this.dye.read.attach(1)), s.uniform1f(this.advectionProgram.uniforms.dissipation, this.config.DENSITY_DISSIPATION), this.blit(this.dye.write), this.dye.swap();
  }
  render(c) {
    const s = this.gl;
    this.config.BLOOM && this.applyBloom(this.dye.read, this.bloom), this.config.SUNRAYS && (this.applySunrays(this.dye.read, this.dye.write, this.sunrays), this.blur(this.sunrays, this.sunraysTemp, 1)), c == null || !this.config.TRANSPARENT ? (s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA), s.enable(s.BLEND)) : s.disable(s.BLEND), this.config.TRANSPARENT || this.drawColor(c, this.normalizeColor(this.config.BACK_COLOR)), c == null && this.config.TRANSPARENT && this.drawCheckerboard(c), this.drawDisplay(c);
  }
  drawColor(c, s) {
    this.colorProgram.bind(this.gl), this.gl.uniform4f(this.colorProgram.uniforms.color, s.r, s.g, s.b, 1), this.blit(c);
  }
  drawCheckerboard(c) {
    this.checkerboardProgram.bind(this.gl), this.gl.uniform1f(this.checkerboardProgram.uniforms.aspectRatio, this.canvas.width / this.canvas.height), this.blit(c);
  }
  drawDisplay(c) {
    const s = this.gl;
    let f = c == null ? s.drawingBufferWidth : c.width, o = c == null ? s.drawingBufferHeight : c.height;
    if (this.displayMaterial.bind(s), this.config.SHADING && s.uniform2f(this.displayMaterial.uniforms.texelSize, 1 / f, 1 / o), s.uniform1i(this.displayMaterial.uniforms.uTexture, this.dye.read.attach(0)), this.config.BLOOM) {
      s.uniform1i(this.displayMaterial.uniforms.uBloom, this.bloom.attach(1)), s.uniform1i(this.displayMaterial.uniforms.uDithering, this.ditheringTexture.attach(2));
      let g = this.getTextureScale(this.ditheringTexture, f, o);
      s.uniform2f(this.displayMaterial.uniforms.ditherScale, g.x, g.y);
    }
    this.config.SUNRAYS && s.uniform1i(this.displayMaterial.uniforms.uSunrays, this.sunrays.attach(3)), this.blit(c);
  }
  applyBloom(c, s) {
    if (this.bloomFramebuffers.length < 2)
      return;
    const f = this.gl;
    let o = s;
    f.disable(f.BLEND), this.bloomPrefilterProgram.bind(f);
    let g = this.config.BLOOM_THRESHOLD * this.config.BLOOM_SOFT_KNEE + 1e-4, x = this.config.BLOOM_THRESHOLD - g, A = g * 2, z = 0.25 / g;
    f.uniform3f(this.bloomPrefilterProgram.uniforms.curve, x, A, z), f.uniform1f(this.bloomPrefilterProgram.uniforms.threshold, this.config.BLOOM_THRESHOLD), f.uniform1i(this.bloomPrefilterProgram.uniforms.uTexture, c.attach(0)), this.blit(o), this.bloomBlurProgram.bind(f);
    for (let b = 0; b < this.bloomFramebuffers.length; b++) {
      let B = this.bloomFramebuffers[b];
      f.uniform2f(this.bloomBlurProgram.uniforms.texelSize, o.texelSizeX, o.texelSizeY), f.uniform1i(this.bloomBlurProgram.uniforms.uTexture, o.attach(0)), this.blit(B), o = B;
    }
    f.blendFunc(f.ONE, f.ONE), f.enable(f.BLEND);
    for (let b = this.bloomFramebuffers.length - 2; b >= 0; b--) {
      let B = this.bloomFramebuffers[b];
      f.uniform2f(this.bloomBlurProgram.uniforms.texelSize, o.texelSizeX, o.texelSizeY), f.uniform1i(this.bloomBlurProgram.uniforms.uTexture, o.attach(0)), f.viewport(0, 0, B.width, B.height), this.blit(B), o = B;
    }
    f.disable(f.BLEND), this.bloomFinalProgram.bind(f), f.uniform2f(this.bloomFinalProgram.uniforms.texelSize, o.texelSizeX, o.texelSizeY), f.uniform1i(this.bloomFinalProgram.uniforms.uTexture, o.attach(0)), f.uniform1f(this.bloomFinalProgram.uniforms.intensity, this.config.BLOOM_INTENSITY), this.blit(s);
  }
  applySunrays(c, s, f) {
    const o = this.gl;
    o.disable(o.BLEND), this.sunraysMaskProgram.bind(o), o.uniform1i(this.sunraysMaskProgram.uniforms.uTexture, c.attach(0)), this.blit(s), this.sunraysProgram.bind(o), o.uniform1f(this.sunraysProgram.uniforms.weight, this.config.SUNRAYS_WEIGHT), o.uniform1i(this.sunraysProgram.uniforms.uTexture, s.attach(0)), this.blit(f);
  }
  blur(c, s, f) {
    const o = this.gl;
    this.blurProgram.bind(o);
    for (let g = 0; g < f; g++)
      o.uniform2f(this.blurProgram.uniforms.texelSize, c.texelSizeX, 0), o.uniform1i(this.blurProgram.uniforms.uTexture, c.attach(0)), this.blit(s), o.uniform2f(this.blurProgram.uniforms.texelSize, 0, c.texelSizeY), o.uniform1i(this.blurProgram.uniforms.uTexture, s.attach(0)), this.blit(c);
  }
  splatPointer(c) {
    let s = c.deltaX * this.config.SPLAT_FORCE, f = c.deltaY * this.config.SPLAT_FORCE;
    this.splatInternal(c.texcoordX, c.texcoordY, s, f, {
      r: c.color[0] / 255,
      g: c.color[1] / 255,
      b: c.color[2] / 255
    });
  }
  multipleSplats(c) {
    for (let s = 0; s < c; s++) {
      const f = this.generateColor();
      f.r *= 10, f.g *= 10, f.b *= 10;
      const o = Math.random(), g = Math.random(), x = 1e3 * (Math.random() - 0.5), A = 1e3 * (Math.random() - 0.5);
      this.splatInternal(o, g, x, A, f);
    }
  }
  splatInternal(c, s, f, o, g) {
    const x = this.gl;
    this.splatProgram.bind(x), x.uniform1i(this.splatProgram.uniforms.uTarget, this.velocity.read.attach(0)), x.uniform1f(this.splatProgram.uniforms.aspectRatio, this.canvas.width / this.canvas.height), x.uniform2f(this.splatProgram.uniforms.point, c, s), x.uniform3f(this.splatProgram.uniforms.color, f, o, 0), x.uniform1f(this.splatProgram.uniforms.radius, this.correctRadius(this.config.SPLAT_RADIUS / 100)), this.blit(this.velocity.write), this.velocity.swap(), x.uniform1i(this.splatProgram.uniforms.uTarget, this.dye.read.attach(0)), x.uniform3f(this.splatProgram.uniforms.color, g.r, g.g, g.b), this.blit(this.dye.write), this.dye.swap();
  }
  correctRadius(c) {
    let s = this.canvas.width / this.canvas.height;
    return s > 1 && (c *= s), c;
  }
  framebufferToTexture(c) {
    const s = this.gl;
    s.bindFramebuffer(s.FRAMEBUFFER, c.fbo);
    let f = c.width * c.height * 4, o = new Float32Array(f);
    return s.readPixels(0, 0, c.width, c.height, s.RGBA, s.FLOAT, o), o;
  }
  normalizeTexture(c, s, f) {
    let o = new Uint8Array(c.length), g = 0;
    for (let x = f - 1; x >= 0; x--)
      for (let A = 0; A < s; A++) {
        let z = x * s * 4 + A * 4;
        o[z + 0] = this.clamp01(c[g + 0]) * 255, o[z + 1] = this.clamp01(c[g + 1]) * 255, o[z + 2] = this.clamp01(c[g + 2]) * 255, o[z + 3] = this.clamp01(c[g + 3]) * 255, g += 4;
      }
    return o;
  }
  clamp01(c) {
    return Math.min(Math.max(c, 0), 1);
  }
  textureToCanvas(c, s, f) {
    let o = document.createElement("canvas"), g = o.getContext("2d");
    o.width = s, o.height = f;
    let x = g.createImageData(s, f);
    return x.data.set(c), g.putImageData(x, 0, 0), o;
  }
  generateColor() {
    let c = this.HSVtoRGB(Math.random(), 1, 1);
    return c.r *= 0.15, c.g *= 0.15, c.b *= 0.15, c;
  }
  HSVtoRGB(c, s, f) {
    let o, g, x, A, z, b, B, C;
    switch (A = Math.floor(c * 6), z = c * 6 - A, b = f * (1 - s), B = f * (1 - z * s), C = f * (1 - (1 - z) * s), A % 6) {
      case 0:
        o = f, g = C, x = b;
        break;
      case 1:
        o = B, g = f, x = b;
        break;
      case 2:
        o = b, g = f, x = C;
        break;
      case 3:
        o = b, g = B, x = f;
        break;
      case 4:
        o = C, g = b, x = f;
        break;
      case 5:
        o = f, g = b, x = B;
        break;
      default:
        o = 0, g = 0, x = 0;
    }
    return { r: o, g, b: x };
  }
  normalizeColor(c) {
    return {
      r: c.r / 255,
      g: c.g / 255,
      b: c.b / 255
    };
  }
  wrap(c, s, f) {
    let o = f - s;
    return o == 0 ? s : (c - s) % o + s;
  }
  getResolution(c) {
    const s = this.gl;
    let f = s.drawingBufferWidth / s.drawingBufferHeight;
    f < 1 && (f = 1 / f);
    let o = Math.round(c), g = Math.round(c * f);
    return s.drawingBufferWidth > s.drawingBufferHeight ? { width: g, height: o } : { width: o, height: g };
  }
  getTextureScale(c, s, f) {
    return {
      x: s / c.width,
      y: f / c.height
    };
  }
  scaleByPixelRatio(c) {
    let s = window.devicePixelRatio || 1;
    return Math.floor(c * s);
  }
  // Методы для обработки событий мыши и касаний
  addEventListeners() {
    const c = this.config.TRIGGER_MODE || "click";
    c === "click" && (this.canvas.addEventListener("mousedown", this.handleMouseDown), this.canvas.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleMouseUp)), c === "hover" && (this.canvas.addEventListener("mouseenter", this.handleMouseDown), this.canvas.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseleave", this.handleMouseUp)), this.canvas.addEventListener("touchstart", this.handleTouchStart), this.canvas.addEventListener("touchmove", this.handleTouchMove), window.addEventListener("touchend", this.handleTouchEnd), window.addEventListener("keydown", this.handleKeyDown);
  }
  removeEventListeners() {
    this.canvas.removeEventListener("mousedown", this.handleMouseDown), this.canvas.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp), this.canvas.removeEventListener("touchstart", this.handleTouchStart), this.canvas.removeEventListener("touchmove", this.handleTouchMove), window.removeEventListener("touchend", this.handleTouchEnd), window.removeEventListener("keydown", this.handleKeyDown);
  }
  updatePointerDownData(c, s, f, o) {
    c.id = s, c.down = !0, c.moved = !1, c.texcoordX = f / this.canvas.width, c.texcoordY = 1 - o / this.canvas.height, c.prevTexcoordX = c.texcoordX, c.prevTexcoordY = c.texcoordY, c.deltaX = 0, c.deltaY = 0;
    const g = this.generateColor();
    c.color = [g.r * 255, g.g * 255, g.b * 255];
  }
  updatePointerMoveData(c, s, f) {
    c.prevTexcoordX = c.texcoordX, c.prevTexcoordY = c.texcoordY, c.texcoordX = s / this.canvas.width, c.texcoordY = 1 - f / this.canvas.height, c.deltaX = this.correctDeltaX(c.texcoordX - c.prevTexcoordX), c.deltaY = this.correctDeltaY(c.texcoordY - c.prevTexcoordY), c.moved = Math.abs(c.deltaX) > 0 || Math.abs(c.deltaY) > 0;
  }
  updatePointerUpData(c) {
    c.down = !1;
  }
  correctDeltaX(c) {
    let s = this.canvas.width / this.canvas.height;
    return s < 1 && (c *= s), c;
  }
  correctDeltaY(c) {
    let s = this.canvas.width / this.canvas.height;
    return s > 1 && (c /= s), c;
  }
}
const Ch = "(prefers-reduced-motion: reduce)", wv = 100, Tf = 6e3, Qv = 260, Ki = {
  SIM_RESOLUTION: 128,
  DENSITY_DISSIPATION: 0.5,
  VELOCITY_DISSIPATION: 3,
  PRESSURE: 0.1,
  PRESSURE_ITERATIONS: 20,
  CURL: 3,
  SPLAT_RADIUS: 0.2,
  SPLAT_FORCE: Tf,
  SHADING: !0,
  COLORFUL: !0,
  COLOR_UPDATE_SPEED: 10,
  BLOOM: !1,
  SUNRAYS: !1,
  TRANSPARENT: !1,
  BACK_COLOR: { r: 255, g: 255, b: 255 },
  PAUSED: !0
};
function Vv() {
  const [v, c] = nt.useState(
    () => window.matchMedia(Ch).matches
  );
  return nt.useEffect(() => {
    const s = window.matchMedia(Ch), f = () => c(s.matches);
    return s.addEventListener("change", f), () => s.removeEventListener("change", f);
  }, []), v;
}
function Vi(v = 0.15) {
  const c = Math.random() * 6, s = Math.floor(c), f = c - s, o = f * v, g = (1 - f) * v;
  switch (s % 6) {
    case 0:
      return { r: v, g: o, b: 0 };
    case 1:
      return { r: g, g: v, b: 0 };
    case 2:
      return { r: 0, g: v, b: o };
    case 3:
      return { r: 0, g, b: v };
    case 4:
      return { r: o, g: 0, b: v };
    default:
      return { r: v, g: 0, b: g };
  }
}
function Lh(v) {
  const c = Math.max(window.innerWidth, 1), s = Math.max(window.innerHeight, 1);
  return {
    x: v.clientX / c,
    y: 1 - v.clientY / s,
    aspect: c / s
  };
}
function Zv(v, c) {
  let s = v.x - c.x, f = v.y - c.y;
  return v.aspect < 1 && (s *= v.aspect), v.aspect > 1 && (f /= v.aspect), { dx: s, dy: f };
}
function Kv(v, c) {
  c.stop(), c.pause(), c.updateConfig({
    DENSITY_DISSIPATION: Ki.DENSITY_DISSIPATION,
    VELOCITY_DISSIPATION: Ki.VELOCITY_DISSIPATION,
    CURL: Ki.CURL,
    PAUSED: !0
  });
  const s = v.getContext("webgl2") || v.getContext("webgl");
  s && (s.bindFramebuffer(s.FRAMEBUFFER, null), s.viewport(0, 0, s.drawingBufferWidth, s.drawingBufferHeight), s.clearColor(1, 1, 1, 1), s.clear(s.COLOR_BUFFER_BIT));
}
function Jv() {
  const v = nt.useRef(null), c = Vv();
  return nt.useEffect(() => {
    const s = v.current;
    if (!s || c) return;
    let f = !1, o = null, g = 0, x = 0, A = 0, z = !1;
    const b = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map();
    function C() {
      !o || z || (z = !0, o.resume(), o.start(), s.dataset.fluidState = "active");
    }
    function W(Z, K, Tt, I) {
      let it = b.get(Z);
      it || (it = {
        x: Tt === "touch" ? K.x : 0,
        y: Tt === "touch" ? K.y : 0,
        color: Vi(),
        colorUpdatedAt: I
      }), I - it.colorUpdatedAt >= wv && (it.color = Vi(), it.colorUpdatedAt = I);
      const V = Zv(K, it);
      o.splat(
        K.x,
        K.y,
        V.dx * Tf,
        V.dy * Tf,
        it.color
      ), b.set(Z, { ...it, x: K.x, y: K.y });
    }
    function q(Z) {
      if (x = 0, !(!o || f)) {
        for (const [K, Tt] of B)
          W(K, Tt.point, Tt.pointerType, Z);
        B.clear();
      }
    }
    function $(Z) {
      o && (C(), B.set(Z.pointerId, {
        point: Lh(Z),
        pointerType: Z.pointerType
      }), x || (x = window.requestAnimationFrame(q)));
    }
    function st(Z) {
      if (!o) return;
      C();
      const K = Lh(Z), Tt = Vi();
      if (b.set(Z.pointerId, {
        x: K.x,
        y: K.y,
        color: Tt,
        colorUpdatedAt: performance.now()
      }), Z.pointerType !== "mouse") return;
      const I = Vi(1.5);
      o.splat(
        K.x,
        K.y,
        10 * (Math.random() - 0.5),
        30 * (Math.random() - 0.5),
        I
      );
    }
    function Rt(Z) {
      B.delete(Z.pointerId), Z.pointerType !== "mouse" && b.delete(Z.pointerId);
    }
    function dt() {
      !o || !z || (document.hidden ? o.stop() : o.start());
    }
    return g = window.requestAnimationFrame(() => {
      if (!f)
        try {
          const Z = window.matchMedia("(pointer: coarse)").matches ? 512 : 1440;
          o = new Xv(s, {
            ...Ki,
            DYE_RESOLUTION: Z,
            DENSITY_DISSIPATION: 160,
            VELOCITY_DISSIPATION: 160,
            CURL: 0,
            PAUSED: !1
          }), A = window.setTimeout(() => {
            f || !o || (Kv(s, o), s.dataset.fluidState = "idle", window.addEventListener("pointermove", $, { passive: !0 }), window.addEventListener("pointerdown", st, { passive: !0 }), window.addEventListener("pointerup", Rt, { passive: !0 }), window.addEventListener("pointercancel", Rt, { passive: !0 }), document.addEventListener("visibilitychange", dt));
          }, Qv);
        } catch {
          s.dataset.fluidState = "unsupported", s.hidden = !0;
        }
    }), () => {
      var K;
      f = !0, window.cancelAnimationFrame(g), window.cancelAnimationFrame(x), window.clearTimeout(A), window.removeEventListener("pointermove", $), window.removeEventListener("pointerdown", st), window.removeEventListener("pointerup", Rt), window.removeEventListener("pointercancel", Rt), document.removeEventListener("visibilitychange", dt), o == null || o.stop();
      const Z = s.getContext("webgl2") || s.getContext("webgl");
      (K = Z == null ? void 0 : Z.getExtension("WEBGL_lose_context")) == null || K.loseContext();
    };
  }, [c]), c ? null : /* @__PURE__ */ m.jsx(
    "canvas",
    {
      ref: v,
      className: "fluid-trail",
      "data-fluid-state": "loading",
      "data-fluid-trail": !0,
      "aria-hidden": "true"
    }
  );
}
function Zh(v, c) {
  return new URL(c, v.endsWith("/") ? v : `${v}/`).toString();
}
const Fv = [
  { id: "me", label: "Me", icon: Vh },
  { id: "projects", label: "Projects", icon: Xh },
  { id: "skills", label: "Skills", icon: Gh },
  { id: "experience", label: "Experience", icon: Yh },
  { id: "contact", label: "Contact", icon: Cv }
], kv = {
  name: "Portfolio",
  githubHandle: "",
  focus: "AI Portfolio",
  upworkUrl: "#",
  githubUrl: "#",
  portfolioRepoUrl: "#",
  email: "",
  projects: [],
  skills: [],
  experience: []
};
function Ji(v) {
  return String(v.name || "").trim().split(/\s+/)[0] || "the portfolio owner";
}
function Ua({ icon: v, size: c = 18, strokeWidth: s = 1.8 }) {
  return /* @__PURE__ */ m.jsx(v, { "aria-hidden": "true", size: c, strokeWidth: s });
}
function ae() {
  return /* @__PURE__ */ m.jsx(Ua, { icon: Mv, size: 17, strokeWidth: 1.7 });
}
function Zi({ children: v }) {
  return /* @__PURE__ */ m.jsx("div", { className: "message-copy", children: String(v).split(`
`).map((c, s) => /* @__PURE__ */ m.jsx("p", { children: c || " " }, `${s}-${c.slice(0, 12)}`)) });
}
function Vl({ small: v = !1, assetBase: c, name: s = "portfolio owner" }) {
  return /* @__PURE__ */ m.jsx(
    "img",
    {
      className: v ? "avatar avatar-small" : "avatar",
      src: Zh(c, "noah-avatar.png"),
      alt: `3D portrait of ${s}`
    }
  );
}
function Wv({ project: v, assetBase: c }) {
  return /* @__PURE__ */ m.jsxs(
    "a",
    {
      className: "project-card",
      href: v.href,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": `${v.title}. View on GitHub`,
      children: [
        /* @__PURE__ */ m.jsxs("div", { className: "project-media", children: [
          /* @__PURE__ */ m.jsx("img", { src: Zh(c, v.visual), alt: v.visualAlt, loading: "lazy" }),
          /* @__PURE__ */ m.jsx("span", { className: "project-media-glow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ m.jsxs("div", { className: "project-card-body", children: [
          /* @__PURE__ */ m.jsxs("div", { className: "project-card-topline", children: [
            /* @__PURE__ */ m.jsx("span", { className: "status-pill", children: "Source Available" }),
            /* @__PURE__ */ m.jsx(ae, {})
          ] }),
          /* @__PURE__ */ m.jsx("h3", { children: v.title }),
          /* @__PURE__ */ m.jsx("p", { children: v.description }),
          /* @__PURE__ */ m.jsxs("span", { className: "project-link-label", children: [
            /* @__PURE__ */ m.jsx(qh, { "aria-hidden": "true", size: 16 }),
            " View on GitHub"
          ] })
        ] })
      ]
    }
  );
}
function $v({ onAction: v, onAbout: c, onOpenChat: s, assetBase: f, profile: o }) {
  const [g, x] = nt.useState(""), A = nt.useRef(null), z = nt.useRef(null), b = nt.useRef(null), B = Ji(o);
  nt.useEffect(() => {
    const q = A.current, $ = z.current;
    if (!q || !$ || !("IntersectionObserver" in window))
      return;
    const st = window.matchMedia("(prefers-reduced-motion: reduce)"), Rt = q.getBoundingClientRect().top;
    let dt = 0;
    function Z(I) {
      dt = I;
      const it = Math.min(1, Math.max(0, (I - 360) / 190)), V = st.matches ? 0 : Math.min(123, I / 5.04);
      $.style.setProperty("--hero-exit-opacity", st.matches ? "1" : String(1 - it)), $.style.setProperty("--hero-exit-offset", `${-V}px`);
    }
    const K = new window.IntersectionObserver(([I]) => {
      Z(Math.max(0, Rt - I.boundingClientRect.top));
    }, {
      root: null,
      threshold: Array.from({ length: 101 }, (I, it) => it / 100)
    }), Tt = () => Z(dt);
    return K.observe(q), st.addEventListener("change", Tt), () => {
      K.disconnect(), st.removeEventListener("change", Tt);
    };
  }, []), nt.useEffect(() => {
    const q = b.current;
    if (!q)
      return;
    const $ = [...q.querySelectorAll("[data-scroll-reveal]")];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      $.forEach((dt) => dt.classList.add("is-visible"));
      return;
    }
    const Rt = new window.IntersectionObserver((dt) => {
      dt.forEach((Z) => {
        Z.isIntersecting && (Z.target.classList.add("is-visible"), Rt.unobserve(Z.target));
      });
    }, {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12
    });
    return $.forEach((dt) => Rt.observe(dt)), () => Rt.disconnect();
  }, [o.projects.length]);
  function C(q) {
    q.preventDefault();
    const $ = g.trim();
    if (!$) {
      s("");
      return;
    }
    s($), x("");
  }
  function W() {
    var $;
    const q = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    ($ = b.current) == null || $.scrollIntoView({ behavior: q ? "auto" : "smooth", block: "start" });
  }
  return /* @__PURE__ */ m.jsxs("main", { className: "portfolio-shell home-view", children: [
    /* @__PURE__ */ m.jsxs("header", { className: "site-header", children: [
      /* @__PURE__ */ m.jsxs("button", { type: "button", className: "header-cta header-opportunity", onClick: () => s(`How can ${B} help with my AI project?`), children: [
        /* @__PURE__ */ m.jsx("span", { className: "opportunity-long", children: "Looking for an AI engineer?" }),
        /* @__PURE__ */ m.jsx("span", { className: "opportunity-short", children: "AI work?" })
      ] }),
      /* @__PURE__ */ m.jsxs("button", { className: "brand-button header-brand", type: "button", onClick: () => v("home"), children: [
        /* @__PURE__ */ m.jsx("span", { className: "brand-mark", children: "NW" }),
        /* @__PURE__ */ m.jsx("span", { className: "header-brand-name", children: o.name })
      ] }),
      /* @__PURE__ */ m.jsxs("nav", { className: "header-nav", "aria-label": "Portfolio navigation", children: [
        /* @__PURE__ */ m.jsx("button", { type: "button", className: "header-link", onClick: c, children: "About" }),
        /* @__PURE__ */ m.jsxs("a", { className: "header-link source-button", href: o.portfolioRepoUrl, target: "_blank", rel: "noreferrer", children: [
          "Source ",
          /* @__PURE__ */ m.jsx(ae, {})
        ] })
      ] }),
      /* @__PURE__ */ m.jsx("button", { className: "mobile-menu", type: "button", "aria-label": "Open navigation", onClick: c, children: /* @__PURE__ */ m.jsx(Ua, { icon: Bv, size: 20 }) })
    ] }),
    /* @__PURE__ */ m.jsxs("section", { ref: A, className: "hero-section", "aria-labelledby": "hero-title", children: [
      /* @__PURE__ */ m.jsx("div", { className: "watermark", "aria-hidden": "true", children: /* @__PURE__ */ m.jsx("span", { children: o.name }) }),
      /* @__PURE__ */ m.jsxs("p", { className: "hero-intro", children: [
        "Hey, I'm ",
        o.name,
        " ",
        /* @__PURE__ */ m.jsx("span", { "aria-hidden": "true", children: "👋" })
      ] }),
      /* @__PURE__ */ m.jsx("h1", { id: "hero-title", children: "AI Portfolio" }),
      /* @__PURE__ */ m.jsx("p", { className: "hero-tagline", children: o.focus }),
      /* @__PURE__ */ m.jsxs("div", { className: "hero-avatar-wrap", children: [
        /* @__PURE__ */ m.jsx("div", { className: "avatar-orbit orbit-one", "aria-hidden": "true" }),
        /* @__PURE__ */ m.jsx("div", { className: "avatar-orbit orbit-two", "aria-hidden": "true" }),
        /* @__PURE__ */ m.jsx(Vl, { assetBase: f, name: o.name })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "hero-interactions", ref: z, children: [
        /* @__PURE__ */ m.jsxs("form", { className: "question-form hero-question", onSubmit: C, children: [
          /* @__PURE__ */ m.jsxs("label", { htmlFor: "hero-question", children: [
            "Ask about ",
            B,
            "'s work"
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "question-input-row", children: [
            /* @__PURE__ */ m.jsx(
              "input",
              {
                id: "hero-question",
                value: g,
                maxLength: 2e3,
                onChange: (q) => x(q.target.value),
                placeholder: "Ask about my work…",
                autoComplete: "off"
              }
            ),
            /* @__PURE__ */ m.jsx("button", { type: "submit", className: "send-button", "aria-label": "Ask the AI Portfolio", children: /* @__PURE__ */ m.jsx(Ua, { icon: Qh, size: 18 }) })
          ] }),
          g.length >= 1800 && /* @__PURE__ */ m.jsxs("p", { className: "input-counter", children: [
            g.length.toLocaleString(),
            " / 2,000"
          ] }),
          /* @__PURE__ */ m.jsx("p", { className: "privacy-note", children: "AI-generated · Don't share sensitive information" })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: "quick-grid", "aria-label": "Quick portfolio views", children: Fv.map(({ id: q, label: $, icon: st }) => /* @__PURE__ */ m.jsxs("button", { className: "quick-card", type: "button", onClick: () => v(q), children: [
          /* @__PURE__ */ m.jsx(Ua, { icon: st, size: 19 }),
          /* @__PURE__ */ m.jsx("span", { children: $ }),
          /* @__PURE__ */ m.jsx(jv, { className: "quick-arrow", "aria-hidden": "true", size: 15 })
        ] }, q)) })
      ] }),
      /* @__PURE__ */ m.jsxs("button", { type: "button", className: "explore-projects", onClick: W, children: [
        /* @__PURE__ */ m.jsx("span", { children: "Explore Projects" }),
        /* @__PURE__ */ m.jsx("span", { className: "explore-arrow", children: /* @__PURE__ */ m.jsx(Ua, { icon: Nv, size: 20, strokeWidth: 2 }) })
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("section", { ref: b, className: "projects-section", "aria-labelledby": "projects-heading", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "section-heading-row scroll-reveal", "data-scroll-reveal": !0, children: [
        /* @__PURE__ */ m.jsxs("div", { children: [
          /* @__PURE__ */ m.jsx("p", { className: "section-kicker", children: "Selected work" }),
          /* @__PURE__ */ m.jsx("h2", { id: "projects-heading", children: "Production AI Work" })
        ] }),
        /* @__PURE__ */ m.jsxs("button", { type: "button", className: "text-action", onClick: () => v("projects"), children: [
          "Ask about projects ",
          /* @__PURE__ */ m.jsx(ae, {})
        ] })
      ] }),
      /* @__PURE__ */ m.jsx("div", { className: "project-grid scroll-reveal", "data-scroll-reveal": !0, children: o.projects.map((q) => /* @__PURE__ */ m.jsx(Wv, { project: q, assetBase: f }, q.id)) }),
      /* @__PURE__ */ m.jsxs("button", { type: "button", className: "process-banner scroll-reveal", "data-scroll-reveal": !0, onClick: () => v("process"), children: [
        /* @__PURE__ */ m.jsx("span", { className: "process-icon", children: /* @__PURE__ */ m.jsx(Hv, { "aria-hidden": "true", size: 20 }) }),
        /* @__PURE__ */ m.jsxs("span", { children: [
          /* @__PURE__ */ m.jsx("strong", { children: "Ask About My Process" }),
          /* @__PURE__ */ m.jsx("small", { children: "From requirements and data to deployment and handoff" })
        ] }),
        /* @__PURE__ */ m.jsx(ae, {})
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("section", { className: "contact-banner", "aria-labelledby": "contact-heading", children: [
      /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsx("p", { className: "section-kicker", children: "Ready when you are" }),
        /* @__PURE__ */ m.jsx("h2", { id: "contact-heading", children: "Bring me the messy AI idea." }),
        /* @__PURE__ */ m.jsx("p", { children: "Share the use case, data shape, current stack, and workflow. We'll find the smallest useful first slice." })
      ] }),
      /* @__PURE__ */ m.jsxs("a", { className: "upwork-button", href: o.upworkUrl, target: "_blank", rel: "noreferrer", children: [
        "Continue on Upwork ",
        /* @__PURE__ */ m.jsx(ae, {})
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("footer", { className: "site-footer", children: [
      /* @__PURE__ */ m.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        o.name
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "footer-links", children: [
        /* @__PURE__ */ m.jsxs("a", { href: `mailto:${o.email}`, children: [
          /* @__PURE__ */ m.jsx(wh, { "aria-hidden": "true", size: 16 }),
          " ",
          o.email
        ] }),
        /* @__PURE__ */ m.jsxs("a", { href: o.githubUrl, target: "_blank", rel: "noreferrer", children: [
          /* @__PURE__ */ m.jsx(qh, { "aria-hidden": "true", size: 16 }),
          " ",
          o.githubHandle
        ] })
      ] })
    ] })
  ] });
}
function Iv({ action: v, profile: c }) {
  const s = Ji(c);
  return v === "skills" ? /* @__PURE__ */ m.jsxs("section", { className: "static-details", "aria-label": `${s}'s grouped skills`, children: [
    /* @__PURE__ */ m.jsxs("div", { className: "details-heading", children: [
      /* @__PURE__ */ m.jsx(Gh, { "aria-hidden": "true", size: 17 }),
      /* @__PURE__ */ m.jsx("strong", { children: "Core skills" })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "skill-groups", children: c.skills.map((f) => /* @__PURE__ */ m.jsxs("div", { className: "skill-group", children: [
      /* @__PURE__ */ m.jsx("h2", { children: f.title }),
      /* @__PURE__ */ m.jsx("div", { className: "skill-tags", children: f.items.map((o) => /* @__PURE__ */ m.jsx("span", { children: o }, o)) })
    ] }, f.title)) })
  ] }) : v === "experience" ? /* @__PURE__ */ m.jsxs("section", { className: "static-details", "aria-label": `${s}'s public experience timeline`, children: [
    /* @__PURE__ */ m.jsxs("div", { className: "details-heading", children: [
      /* @__PURE__ */ m.jsx(Yh, { "aria-hidden": "true", size: 17 }),
      /* @__PURE__ */ m.jsx("strong", { children: "Public experience timeline" })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "experience-list", children: c.experience.map((f) => /* @__PURE__ */ m.jsxs("article", { className: "experience-item", children: [
      /* @__PURE__ */ m.jsxs("div", { children: [
        /* @__PURE__ */ m.jsx("h2", { children: f.company }),
        /* @__PURE__ */ m.jsx("p", { children: f.note })
      ] }),
      /* @__PURE__ */ m.jsx("time", { children: f.dates })
    ] }, f.company)) })
  ] }) : v === "contact" ? /* @__PURE__ */ m.jsxs("section", { className: "static-details contact-details", "aria-label": `${s}'s public contact channels`, children: [
    /* @__PURE__ */ m.jsxs("div", { className: "details-heading", children: [
      /* @__PURE__ */ m.jsx(wh, { "aria-hidden": "true", size: 17 }),
      /* @__PURE__ */ m.jsx("strong", { children: "Public contact channels" })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "contact-detail-links", children: [
      /* @__PURE__ */ m.jsxs("a", { href: c.upworkUrl, target: "_blank", rel: "noreferrer", children: [
        /* @__PURE__ */ m.jsx("span", { children: "Upwork" }),
        /* @__PURE__ */ m.jsx(ae, {})
      ] }),
      /* @__PURE__ */ m.jsxs("a", { href: `mailto:${c.email}`, children: [
        /* @__PURE__ */ m.jsx("span", { children: c.email }),
        /* @__PURE__ */ m.jsx(ae, {})
      ] }),
      /* @__PURE__ */ m.jsxs("a", { href: c.githubUrl, target: "_blank", rel: "noreferrer", children: [
        /* @__PURE__ */ m.jsxs("span", { children: [
          "GitHub · ",
          c.githubHandle
        ] }),
        /* @__PURE__ */ m.jsx(ae, {})
      ] })
    ] })
  ] }) : v === "projects" ? /* @__PURE__ */ m.jsxs("section", { className: "static-details", "aria-label": `${s}'s project links`, children: [
    /* @__PURE__ */ m.jsxs("div", { className: "details-heading", children: [
      /* @__PURE__ */ m.jsx(Xh, { "aria-hidden": "true", size: 17 }),
      /* @__PURE__ */ m.jsx("strong", { children: "Open the source" })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "project-detail-links", children: c.projects.map((f) => /* @__PURE__ */ m.jsxs("a", { href: f.href, target: "_blank", rel: "noreferrer", children: [
      /* @__PURE__ */ m.jsx("span", { children: f.title }),
      /* @__PURE__ */ m.jsx(ae, {})
    ] }, f.id)) })
  ] }) : null;
}
function Pv({ data: v, onAction: c, onHome: s, onAbout: f, assetBase: o, setTriggerValue: g, profile: x }) {
  const [A, z] = nt.useState(""), [b, B] = nt.useState([]), [C, W] = nt.useState(""), [q, $] = nt.useState(!1), st = nt.useRef(null), Rt = Ji(x), dt = Array.isArray(v == null ? void 0 : v.messages) ? v.messages : [], Z = nt.useMemo(() => [...dt, ...b], [dt, b]), K = !!(v != null && v.pending || q);
  nt.useEffect(() => {
    B([]), W(""), v != null && v.pending || $(!1);
  }, [v == null ? void 0 : v.messageRevision, v == null ? void 0 : v.view, v == null ? void 0 : v.error, v == null ? void 0 : v.pending]), nt.useEffect(() => {
    var I;
    (I = st.current) == null || I.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [Z.length, v == null ? void 0 : v.pending]), nt.useEffect(() => {
    if (!(v != null && v.pending)) return;
    const I = window.setInterval(() => {
      g == null || g("heartbeat", Date.now());
    }, 160);
    return () => window.clearInterval(I);
  }, [v == null ? void 0 : v.pending, g]);
  function Tt(I) {
    if (I.preventDefault(), K) return;
    const it = A.trim();
    if (it) {
      if (it.length > 2e3) {
        W("Please keep a question under 2,000 characters.");
        return;
      }
      W(""), B([{ role: "user", content: it }]), $(!0), z(""), c("submit", it);
    }
  }
  return /* @__PURE__ */ m.jsxs("main", { className: "portfolio-shell chat-view", children: [
    /* @__PURE__ */ m.jsxs("header", { className: "chat-header", children: [
      /* @__PURE__ */ m.jsxs("button", { className: "brand-button", type: "button", onClick: s, children: [
        /* @__PURE__ */ m.jsx(Uv, { "aria-hidden": "true", size: 18 }),
        /* @__PURE__ */ m.jsx("span", { className: "brand-mark", children: "NW" }),
        /* @__PURE__ */ m.jsx("span", { children: x.name })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "chat-header-center", children: [
        /* @__PURE__ */ m.jsx("span", { className: "online-dot" }),
        " AI Portfolio chat"
      ] }),
      /* @__PURE__ */ m.jsx("button", { className: "header-link about-chat", type: "button", onClick: f, children: "About" })
    ] }),
    /* @__PURE__ */ m.jsxs("section", { className: "chat-content", "aria-labelledby": "chat-heading", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "chat-intro", children: [
        /* @__PURE__ */ m.jsx(Vl, { small: !0, assetBase: o, name: x.name }),
        /* @__PURE__ */ m.jsxs("div", { children: [
          /* @__PURE__ */ m.jsx("p", { className: "eyebrow", children: "AI Portfolio" }),
          /* @__PURE__ */ m.jsxs("h1", { id: "chat-heading", children: [
            "Ask me about ",
            Rt,
            "'s work"
          ] }),
          /* @__PURE__ */ m.jsx("p", { children: "I'm an AI-generated portfolio, here to make the useful parts easy to explore." })
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "message-list", "aria-live": "polite", children: [
        Z.length === 0 && /* @__PURE__ */ m.jsxs("div", { className: "assistant-message", children: [
          /* @__PURE__ */ m.jsx(Vl, { small: !0, assetBase: o, name: x.name }),
          /* @__PURE__ */ m.jsx("div", { className: "message-bubble", children: /* @__PURE__ */ m.jsx(Zi, { children: "Hi — I can give you a concise tour of this portfolio's projects, skills, experience, or process. What are you building?" }) })
        ] }),
        Z.map((I, it) => {
          var V;
          return /* @__PURE__ */ m.jsxs("div", { className: I.role === "user" ? "user-message" : "assistant-message", children: [
            I.role !== "user" && /* @__PURE__ */ m.jsx(Vl, { small: !0, assetBase: o, name: x.name }),
            /* @__PURE__ */ m.jsxs("div", { className: "message-bubble", children: [
              /* @__PURE__ */ m.jsx(Zi, { children: I.content }),
              I.role !== "user" && (v == null ? void 0 : v.showUpwork) && /* @__PURE__ */ m.jsxs("a", { className: "message-cta", href: x.upworkUrl, target: "_blank", rel: "noreferrer", children: [
                "Continue on Upwork ",
                /* @__PURE__ */ m.jsx(ae, {})
              ] })
            ] })
          ] }, `${I.role}-${it}-${(V = I.content) == null ? void 0 : V.slice(0, 10)}`);
        }),
        (v == null ? void 0 : v.staticAction) && /* @__PURE__ */ m.jsx(Iv, { action: v.staticAction, profile: x }),
        (v == null ? void 0 : v.streamingText) && /* @__PURE__ */ m.jsxs("div", { className: "assistant-message", children: [
          /* @__PURE__ */ m.jsx(Vl, { small: !0, assetBase: o, name: x.name }),
          /* @__PURE__ */ m.jsxs("div", { className: "message-bubble streaming-bubble", children: [
            /* @__PURE__ */ m.jsx(Zi, { children: v.streamingText }),
            /* @__PURE__ */ m.jsx("span", { className: "streaming-caret", "aria-label": "Generating" })
          ] })
        ] }),
        ((v == null ? void 0 : v.pending) || q) && !(v != null && v.streamingText) && /* @__PURE__ */ m.jsxs("div", { className: "assistant-message", children: [
          /* @__PURE__ */ m.jsx(Vl, { small: !0, assetBase: o, name: x.name }),
          /* @__PURE__ */ m.jsxs("div", { className: "message-bubble typing-bubble", children: [
            /* @__PURE__ */ m.jsx("span", { className: "typing-label", children: "Thinking with DeepSeek" }),
            /* @__PURE__ */ m.jsxs("span", { className: "typing-dots", "aria-label": "Generating", children: [
              /* @__PURE__ */ m.jsx("i", {}),
              /* @__PURE__ */ m.jsx("i", {}),
              /* @__PURE__ */ m.jsx("i", {})
            ] })
          ] })
        ] }),
        (v == null ? void 0 : v.error) && /* @__PURE__ */ m.jsxs("div", { className: "assistant-message", children: [
          /* @__PURE__ */ m.jsx(Vl, { small: !0, assetBase: o, name: x.name }),
          /* @__PURE__ */ m.jsxs("div", { className: "message-bubble error-bubble", children: [
            /* @__PURE__ */ m.jsx(Zi, { children: v.error }),
            /* @__PURE__ */ m.jsxs("button", { className: "inline-action", type: "button", onClick: s, children: [
              "Browse the static portfolio ",
              /* @__PURE__ */ m.jsx(ae, {})
            ] })
          ] })
        ] }),
        C && /* @__PURE__ */ m.jsx("p", { className: "input-notice", role: "alert", children: C }),
        /* @__PURE__ */ m.jsx("div", { ref: st })
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("form", { className: "question-form chat-question", onSubmit: Tt, children: [
      /* @__PURE__ */ m.jsx("label", { htmlFor: "chat-question", children: "Ask the AI Portfolio" }),
      /* @__PURE__ */ m.jsxs("div", { className: "question-input-row", children: [
        /* @__PURE__ */ m.jsx("input", { id: "chat-question", value: A, maxLength: 2e3, onChange: (I) => z(I.target.value), placeholder: K ? "Waiting for this answer…" : "Ask a follow-up…", autoComplete: "off", disabled: K }),
        /* @__PURE__ */ m.jsx("button", { type: "submit", className: "send-button", "aria-label": "Send question", disabled: K, children: /* @__PURE__ */ m.jsx(Ua, { icon: Qh, size: 18 }) })
      ] }),
      A.length >= 1800 && /* @__PURE__ */ m.jsxs("p", { className: "input-counter", children: [
        A.length.toLocaleString(),
        " / 2,000"
      ] }),
      /* @__PURE__ */ m.jsxs("p", { className: "privacy-note", children: [
        "AI-generated · Don't share secrets · Final scope and terms are confirmed by ",
        Rt,
        " on Upwork"
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("footer", { className: "chat-footer", children: [
      /* @__PURE__ */ m.jsxs("a", { href: x.githubUrl, target: "_blank", rel: "noreferrer", children: [
        x.githubHandle,
        " ",
        /* @__PURE__ */ m.jsx(ae, {})
      ] }),
      /* @__PURE__ */ m.jsxs("a", { className: "chat-upwork-link", href: x.upworkUrl, target: "_blank", rel: "noreferrer", children: [
        "Continue on Upwork ",
        /* @__PURE__ */ m.jsx(ae, {})
      ] })
    ] })
  ] });
}
function t0({ onClose: v, returnFocusRef: c, profile: s }) {
  const f = nt.useRef(null), o = Ji(s);
  return nt.useEffect(() => {
    var x;
    (x = f.current) == null || x.focus();
    function g(A) {
      A.key === "Escape" && v();
    }
    return document.addEventListener("keydown", g), () => {
      var A, z;
      document.removeEventListener("keydown", g), (z = (A = c == null ? void 0 : c.current) == null ? void 0 : A.focus) == null || z.call(A);
    };
  }, [v, c]), /* @__PURE__ */ m.jsx("div", { className: "modal-backdrop", role: "presentation", onMouseDown: (g) => {
    g.target === g.currentTarget && v();
  }, children: /* @__PURE__ */ m.jsxs("section", { className: "about-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "about-title", children: [
    /* @__PURE__ */ m.jsx("button", { ref: f, className: "modal-close", type: "button", "aria-label": "Close About", onClick: v, children: /* @__PURE__ */ m.jsx(Yv, { size: 20 }) }),
    /* @__PURE__ */ m.jsx("div", { className: "modal-icon", children: /* @__PURE__ */ m.jsx(Vh, { size: 22 }) }),
    /* @__PURE__ */ m.jsx("p", { className: "section-kicker", children: "A small note on this site" }),
    /* @__PURE__ */ m.jsxs("h2", { id: "about-title", children: [
      "This is an AI Portfolio, not ",
      o,
      "."
    ] }),
    /* @__PURE__ */ m.jsxs("p", { children: [
      "It uses a hand-curated set of ",
      o,
      "'s public portfolio facts and DeepSeek to generate a conversational introduction. It does not read private resumes, browse a hidden knowledge base, or make commitments on ",
      o,
      "'s behalf."
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "modal-boundary", children: [
      /* @__PURE__ */ m.jsx(Lv, { size: 18 }),
      /* @__PURE__ */ m.jsxs("span", { children: [
        "Use it to get oriented; confirm scope, timing, rate, and terms with ",
        o,
        " on Upwork."
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("a", { className: "upwork-button modal-action", href: s.upworkUrl, target: "_blank", rel: "noreferrer", children: [
      "Open ",
      o,
      "'s Upwork profile ",
      /* @__PURE__ */ m.jsx(ae, {})
    ] })
  ] }) });
}
function e0({ data: v = {}, setTriggerValue: c, assetBase: s = "./assets/" }) {
  const f = v.profile || kv, [o, g] = nt.useState(v.view || "home"), [x, A] = nt.useState(!1), z = nt.useRef(null), b = nt.useRef(new URL(window.location.href).searchParams.has("query"));
  nt.useEffect(() => {
    g(v.view || "home");
  }, [v.view]), nt.useEffect(() => {
    function q() {
      const $ = new URL(window.location.href).searchParams.has("query"), st = b.current;
      b.current = $, st && !$ && (g("home"), c == null || c("reset", !0));
    }
    return window.addEventListener("popstate", q), () => window.removeEventListener("popstate", q);
  }, [c]);
  function B(q, $ = null) {
    if (q === "home") {
      b.current = !1, c == null || c("reset", !0);
      return;
    }
    g("chat"), c == null || c("action", { type: q, value: $ });
  }
  function C(q) {
    q.trim() && (b.current = !0), g("chat"), c == null || c("submit", { query: q });
  }
  function W(q) {
    z.current = (q == null ? void 0 : q.currentTarget) || null, A(!0);
  }
  return /* @__PURE__ */ m.jsxs("div", { className: "app-root", children: [
    /* @__PURE__ */ m.jsx(Jv, {}),
    o === "chat" ? /* @__PURE__ */ m.jsx(Pv, { data: v, profile: f, assetBase: s, setTriggerValue: c, onAction: B, onHome: () => B("home"), onAbout: W }) : /* @__PURE__ */ m.jsx($v, { profile: f, assetBase: s, onAction: B, onAbout: W, onOpenChat: C }),
    x && /* @__PURE__ */ m.jsx(t0, { profile: f, returnFocusRef: z, onClose: () => A(!1) })
  ] });
}
const pf = /* @__PURE__ */ new WeakMap();
function l0(v) {
  const { data: c, parentElement: s, setTriggerValue: f } = v, o = s.querySelector("#portfolio-root"), g = new URL(
    /* @vite-ignore */
    "./assets/",
    import.meta.url
  ).href;
  let x = pf.get(o);
  return x || (x = Dv.createRoot(o), pf.set(o, x)), x.render(
    /* @__PURE__ */ m.jsx(bv.StrictMode, { children: /* @__PURE__ */ m.jsx(
      e0,
      {
        data: c,
        setTriggerValue: f,
        assetBase: g
      }
    ) })
  ), () => {
    x.unmount(), pf.delete(o);
  };
}
export {
  l0 as default
};
