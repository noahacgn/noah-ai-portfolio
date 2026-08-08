function gv(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
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
function Sv() {
  if (Rh) return Au;
  Rh = 1;
  var m = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function s(f, o, g) {
    var A = null;
    if (g !== void 0 && (A = "" + g), o.key !== void 0 && (A = "" + o.key), "key" in o) {
      g = {};
      for (var x in o)
        x !== "key" && (g[x] = o[x]);
    } else g = o;
    return o = g.ref, {
      $$typeof: m,
      type: f,
      key: A,
      ref: o !== void 0 ? o : null,
      props: g
    };
  }
  return Au.Fragment = c, Au.jsx = s, Au.jsxs = s, Au;
}
var Dh;
function bv() {
  return Dh || (Dh = 1, df.exports = Sv()), df.exports;
}
var d = bv(), vf = { exports: {} }, Z = {};
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
function pv() {
  if (_h) return Z;
  _h = 1;
  var m = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), A = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), F = Symbol.iterator;
  function it(y) {
    return y === null || typeof y != "object" ? null : (y = F && y[F] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var St = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Et = Object.assign, Bt = {};
  function I(y, U, C) {
    this.props = y, this.context = U, this.refs = Bt, this.updater = C || St;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(y, U) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, U, "setState");
  }, I.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function X() {
  }
  X.prototype = I.prototype;
  function Q(y, U, C) {
    this.props = y, this.context = U, this.refs = Bt, this.updater = C || St;
  }
  var mt = Q.prototype = new X();
  mt.constructor = Q, Et(mt, I.prototype), mt.isPureReactComponent = !0;
  var k = Array.isArray;
  function P() {
  }
  var V = { H: null, A: null, T: null, S: null }, Yt = Object.prototype.hasOwnProperty;
  function Gt(y, U, C) {
    var H = C.ref;
    return {
      $$typeof: m,
      type: y,
      key: U,
      ref: H !== void 0 ? H : null,
      props: C
    };
  }
  function Me(y, U) {
    return Gt(y.type, U, y.props);
  }
  function ve(y) {
    return typeof y == "object" && y !== null && y.$$typeof === m;
  }
  function Wt(y) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(C) {
      return U[C];
    });
  }
  var Rl = /\/+/g;
  function Ce(y, U) {
    return typeof y == "object" && y !== null && y.key != null ? Wt("" + y.key) : U.toString(36);
  }
  function De(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(P, P) : (y.status = "pending", y.then(
          function(U) {
            y.status === "pending" && (y.status = "fulfilled", y.value = U);
          },
          function(U) {
            y.status === "pending" && (y.status = "rejected", y.reason = U);
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
  function _(y, U, C, H, K) {
    var tt = typeof y;
    (tt === "undefined" || tt === "boolean") && (y = null);
    var rt = !1;
    if (y === null) rt = !0;
    else
      switch (tt) {
        case "bigint":
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case m:
            case c:
              rt = !0;
              break;
            case N:
              return rt = y._init, _(
                rt(y._payload),
                U,
                C,
                H,
                K
              );
          }
      }
    if (rt)
      return K = K(y), rt = H === "" ? "." + Ce(y, 0) : H, k(K) ? (C = "", rt != null && (C = rt.replace(Rl, "$&/") + "/"), _(K, U, C, "", function(Ua) {
        return Ua;
      })) : K != null && (ve(K) && (K = Me(
        K,
        C + (K.key == null || y && y.key === K.key ? "" : ("" + K.key).replace(
          Rl,
          "$&/"
        ) + "/") + rt
      )), U.push(K)), 1;
    rt = 0;
    var Ft = H === "" ? "." : H + ":";
    if (k(y))
      for (var _t = 0; _t < y.length; _t++)
        H = y[_t], tt = Ft + Ce(H, _t), rt += _(
          H,
          U,
          C,
          tt,
          K
        );
    else if (_t = it(y), typeof _t == "function")
      for (y = _t.call(y), _t = 0; !(H = y.next()).done; )
        H = H.value, tt = Ft + Ce(H, _t++), rt += _(
          H,
          U,
          C,
          tt,
          K
        );
    else if (tt === "object") {
      if (typeof y.then == "function")
        return _(
          De(y),
          U,
          C,
          H,
          K
        );
      throw U = String(y), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return rt;
  }
  function B(y, U, C) {
    if (y == null) return y;
    var H = [], K = 0;
    return _(y, H, "", "", function(tt) {
      return U.call(C, tt, K++);
    }), H;
  }
  function w(y) {
    if (y._status === -1) {
      var U = y._result;
      U = U(), U.then(
        function(C) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = C);
        },
        function(C) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = C);
        }
      ), y._status === -1 && (y._status = 0, y._result = U);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var dt = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, bt = {
    map: B,
    forEach: function(y, U, C) {
      B(
        y,
        function() {
          U.apply(this, arguments);
        },
        C
      );
    },
    count: function(y) {
      var U = 0;
      return B(y, function() {
        U++;
      }), U;
    },
    toArray: function(y) {
      return B(y, function(U) {
        return U;
      }) || [];
    },
    only: function(y) {
      if (!ve(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return Z.Activity = j, Z.Children = bt, Z.Component = I, Z.Fragment = s, Z.Profiler = o, Z.PureComponent = Q, Z.StrictMode = f, Z.Suspense = z, Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, Z.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return V.H.useMemoCache(y);
    }
  }, Z.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, Z.cacheSignal = function() {
    return null;
  }, Z.cloneElement = function(y, U, C) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var H = Et({}, y.props), K = y.key;
    if (U != null)
      for (tt in U.key !== void 0 && (K = "" + U.key), U)
        !Yt.call(U, tt) || tt === "key" || tt === "__self" || tt === "__source" || tt === "ref" && U.ref === void 0 || (H[tt] = U[tt]);
    var tt = arguments.length - 2;
    if (tt === 1) H.children = C;
    else if (1 < tt) {
      for (var rt = Array(tt), Ft = 0; Ft < tt; Ft++)
        rt[Ft] = arguments[Ft + 2];
      H.children = rt;
    }
    return Gt(y.type, K, H);
  }, Z.createContext = function(y) {
    return y = {
      $$typeof: A,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: g,
      _context: y
    }, y;
  }, Z.createElement = function(y, U, C) {
    var H, K = {}, tt = null;
    if (U != null)
      for (H in U.key !== void 0 && (tt = "" + U.key), U)
        Yt.call(U, H) && H !== "key" && H !== "__self" && H !== "__source" && (K[H] = U[H]);
    var rt = arguments.length - 2;
    if (rt === 1) K.children = C;
    else if (1 < rt) {
      for (var Ft = Array(rt), _t = 0; _t < rt; _t++)
        Ft[_t] = arguments[_t + 2];
      K.children = Ft;
    }
    if (y && y.defaultProps)
      for (H in rt = y.defaultProps, rt)
        K[H] === void 0 && (K[H] = rt[H]);
    return Gt(y, tt, K);
  }, Z.createRef = function() {
    return { current: null };
  }, Z.forwardRef = function(y) {
    return { $$typeof: x, render: y };
  }, Z.isValidElement = ve, Z.lazy = function(y) {
    return {
      $$typeof: N,
      _payload: { _status: -1, _result: y },
      _init: w
    };
  }, Z.memo = function(y, U) {
    return {
      $$typeof: b,
      type: y,
      compare: U === void 0 ? null : U
    };
  }, Z.startTransition = function(y) {
    var U = V.T, C = {};
    V.T = C;
    try {
      var H = y(), K = V.S;
      K !== null && K(C, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(P, dt);
    } catch (tt) {
      dt(tt);
    } finally {
      U !== null && C.types !== null && (U.types = C.types), V.T = U;
    }
  }, Z.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, Z.use = function(y) {
    return V.H.use(y);
  }, Z.useActionState = function(y, U, C) {
    return V.H.useActionState(y, U, C);
  }, Z.useCallback = function(y, U) {
    return V.H.useCallback(y, U);
  }, Z.useContext = function(y) {
    return V.H.useContext(y);
  }, Z.useDebugValue = function() {
  }, Z.useDeferredValue = function(y, U) {
    return V.H.useDeferredValue(y, U);
  }, Z.useEffect = function(y, U) {
    return V.H.useEffect(y, U);
  }, Z.useEffectEvent = function(y) {
    return V.H.useEffectEvent(y);
  }, Z.useId = function() {
    return V.H.useId();
  }, Z.useImperativeHandle = function(y, U, C) {
    return V.H.useImperativeHandle(y, U, C);
  }, Z.useInsertionEffect = function(y, U) {
    return V.H.useInsertionEffect(y, U);
  }, Z.useLayoutEffect = function(y, U) {
    return V.H.useLayoutEffect(y, U);
  }, Z.useMemo = function(y, U) {
    return V.H.useMemo(y, U);
  }, Z.useOptimistic = function(y, U) {
    return V.H.useOptimistic(y, U);
  }, Z.useReducer = function(y, U, C) {
    return V.H.useReducer(y, U, C);
  }, Z.useRef = function(y) {
    return V.H.useRef(y);
  }, Z.useState = function(y) {
    return V.H.useState(y);
  }, Z.useSyncExternalStore = function(y, U, C) {
    return V.H.useSyncExternalStore(
      y,
      U,
      C
    );
  }, Z.useTransition = function() {
    return V.H.useTransition();
  }, Z.version = "19.2.0", Z;
}
var zh;
function Tf() {
  return zh || (zh = 1, vf.exports = pv()), vf.exports;
}
var $ = Tf();
const Ev = /* @__PURE__ */ gv($);
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
function Tv() {
  return Oh || (Oh = 1, (function(m) {
    function c(_, B) {
      var w = _.length;
      _.push(B);
      t: for (; 0 < w; ) {
        var dt = w - 1 >>> 1, bt = _[dt];
        if (0 < o(bt, B))
          _[dt] = B, _[w] = bt, w = dt;
        else break t;
      }
    }
    function s(_) {
      return _.length === 0 ? null : _[0];
    }
    function f(_) {
      if (_.length === 0) return null;
      var B = _[0], w = _.pop();
      if (w !== B) {
        _[0] = w;
        t: for (var dt = 0, bt = _.length, y = bt >>> 1; dt < y; ) {
          var U = 2 * (dt + 1) - 1, C = _[U], H = U + 1, K = _[H];
          if (0 > o(C, w))
            H < bt && 0 > o(K, C) ? (_[dt] = K, _[H] = w, dt = H) : (_[dt] = C, _[U] = w, dt = U);
          else if (H < bt && 0 > o(K, w))
            _[dt] = K, _[H] = w, dt = H;
          else break t;
        }
      }
      return B;
    }
    function o(_, B) {
      var w = _.sortIndex - B.sortIndex;
      return w !== 0 ? w : _.id - B.id;
    }
    if (m.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var g = performance;
      m.unstable_now = function() {
        return g.now();
      };
    } else {
      var A = Date, x = A.now();
      m.unstable_now = function() {
        return A.now() - x;
      };
    }
    var z = [], b = [], N = 1, j = null, F = 3, it = !1, St = !1, Et = !1, Bt = !1, I = typeof setTimeout == "function" ? setTimeout : null, X = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function mt(_) {
      for (var B = s(b); B !== null; ) {
        if (B.callback === null) f(b);
        else if (B.startTime <= _)
          f(b), B.sortIndex = B.expirationTime, c(z, B);
        else break;
        B = s(b);
      }
    }
    function k(_) {
      if (Et = !1, mt(_), !St)
        if (s(z) !== null)
          St = !0, P || (P = !0, Wt());
        else {
          var B = s(b);
          B !== null && De(k, B.startTime - _);
        }
    }
    var P = !1, V = -1, Yt = 5, Gt = -1;
    function Me() {
      return Bt ? !0 : !(m.unstable_now() - Gt < Yt);
    }
    function ve() {
      if (Bt = !1, P) {
        var _ = m.unstable_now();
        Gt = _;
        var B = !0;
        try {
          t: {
            St = !1, Et && (Et = !1, X(V), V = -1), it = !0;
            var w = F;
            try {
              e: {
                for (mt(_), j = s(z); j !== null && !(j.expirationTime > _ && Me()); ) {
                  var dt = j.callback;
                  if (typeof dt == "function") {
                    j.callback = null, F = j.priorityLevel;
                    var bt = dt(
                      j.expirationTime <= _
                    );
                    if (_ = m.unstable_now(), typeof bt == "function") {
                      j.callback = bt, mt(_), B = !0;
                      break e;
                    }
                    j === s(z) && f(z), mt(_);
                  } else f(z);
                  j = s(z);
                }
                if (j !== null) B = !0;
                else {
                  var y = s(b);
                  y !== null && De(
                    k,
                    y.startTime - _
                  ), B = !1;
                }
              }
              break t;
            } finally {
              j = null, F = w, it = !1;
            }
            B = void 0;
          }
        } finally {
          B ? Wt() : P = !1;
        }
      }
    }
    var Wt;
    if (typeof Q == "function")
      Wt = function() {
        Q(ve);
      };
    else if (typeof MessageChannel < "u") {
      var Rl = new MessageChannel(), Ce = Rl.port2;
      Rl.port1.onmessage = ve, Wt = function() {
        Ce.postMessage(null);
      };
    } else
      Wt = function() {
        I(ve, 0);
      };
    function De(_, B) {
      V = I(function() {
        _(m.unstable_now());
      }, B);
    }
    m.unstable_IdlePriority = 5, m.unstable_ImmediatePriority = 1, m.unstable_LowPriority = 4, m.unstable_NormalPriority = 3, m.unstable_Profiling = null, m.unstable_UserBlockingPriority = 2, m.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, m.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Yt = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, m.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, m.unstable_next = function(_) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = F;
      }
      var w = F;
      F = B;
      try {
        return _();
      } finally {
        F = w;
      }
    }, m.unstable_requestPaint = function() {
      Bt = !0;
    }, m.unstable_runWithPriority = function(_, B) {
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
      var w = F;
      F = _;
      try {
        return B();
      } finally {
        F = w;
      }
    }, m.unstable_scheduleCallback = function(_, B, w) {
      var dt = m.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? dt + w : dt) : w = dt, _) {
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
        id: N++,
        callback: B,
        priorityLevel: _,
        startTime: w,
        expirationTime: bt,
        sortIndex: -1
      }, w > dt ? (_.sortIndex = w, c(b, _), s(z) === null && _ === s(b) && (Et ? (X(V), V = -1) : Et = !0, De(k, w - dt))) : (_.sortIndex = bt, c(z, _), St || it || (St = !0, P || (P = !0, Wt()))), _;
    }, m.unstable_shouldYield = Me, m.unstable_wrapCallback = function(_) {
      var B = F;
      return function() {
        var w = F;
        F = B;
        try {
          return _.apply(this, arguments);
        } finally {
          F = w;
        }
      };
    };
  })(Sf)), Sf;
}
var Mh;
function xv() {
  return Mh || (Mh = 1, gf.exports = Tv()), gf.exports;
}
var bf = { exports: {} }, Kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uh;
function Av() {
  if (Uh) return Kt;
  Uh = 1;
  var m = Tf();
  function c(z) {
    var b = "https://react.dev/errors/" + z;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var N = 2; N < arguments.length; N++)
        b += "&args[]=" + encodeURIComponent(arguments[N]);
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
  function g(z, b, N) {
    var j = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: j == null ? null : "" + j,
      children: z,
      containerInfo: b,
      implementation: N
    };
  }
  var A = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function x(z, b) {
    if (z === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, Kt.createPortal = function(z, b) {
    var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(c(299));
    return g(z, b, null, N);
  }, Kt.flushSync = function(z) {
    var b = A.T, N = f.p;
    try {
      if (A.T = null, f.p = 2, z) return z();
    } finally {
      A.T = b, f.p = N, f.d.f();
    }
  }, Kt.preconnect = function(z, b) {
    typeof z == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, f.d.C(z, b));
  }, Kt.prefetchDNS = function(z) {
    typeof z == "string" && f.d.D(z);
  }, Kt.preinit = function(z, b) {
    if (typeof z == "string" && b && typeof b.as == "string") {
      var N = b.as, j = x(N, b.crossOrigin), F = typeof b.integrity == "string" ? b.integrity : void 0, it = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      N === "style" ? f.d.S(
        z,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: j,
          integrity: F,
          fetchPriority: it
        }
      ) : N === "script" && f.d.X(z, {
        crossOrigin: j,
        integrity: F,
        fetchPriority: it,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, Kt.preinitModule = function(z, b) {
    if (typeof z == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var N = x(
            b.as,
            b.crossOrigin
          );
          f.d.M(z, {
            crossOrigin: N,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && f.d.M(z);
  }, Kt.preload = function(z, b) {
    if (typeof z == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var N = b.as, j = x(N, b.crossOrigin);
      f.d.L(z, N, {
        crossOrigin: j,
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
  }, Kt.preloadModule = function(z, b) {
    if (typeof z == "string")
      if (b) {
        var N = x(b.as, b.crossOrigin);
        f.d.m(z, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: N,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else f.d.m(z);
  }, Kt.requestFormReset = function(z) {
    f.d.r(z);
  }, Kt.unstable_batchedUpdates = function(z, b) {
    return z(b);
  }, Kt.useFormState = function(z, b, N) {
    return A.H.useFormState(z, b, N);
  }, Kt.useFormStatus = function() {
    return A.H.useHostTransitionStatus();
  }, Kt.version = "19.2.0", Kt;
}
var Nh;
function Rv() {
  if (Nh) return bf.exports;
  Nh = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (c) {
        console.error(c);
      }
  }
  return m(), bf.exports = Av(), bf.exports;
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
function Dv() {
  if (jh) return Ru;
  jh = 1;
  var m = xv(), c = Tf(), s = Rv();
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
  function A(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function x(t) {
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
  function N(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = N(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var j = Object.assign, F = Symbol.for("react.element"), it = Symbol.for("react.transitional.element"), St = Symbol.for("react.portal"), Et = Symbol.for("react.fragment"), Bt = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), mt = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), Yt = Symbol.for("react.lazy"), Gt = Symbol.for("react.activity"), Me = Symbol.for("react.memo_cache_sentinel"), ve = Symbol.iterator;
  function Wt(t) {
    return t === null || typeof t != "object" ? null : (t = ve && t[ve] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Rl = Symbol.for("react.client.reference");
  function Ce(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Rl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Et:
        return "Fragment";
      case I:
        return "Profiler";
      case Bt:
        return "StrictMode";
      case k:
        return "Suspense";
      case P:
        return "SuspenseList";
      case Gt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case St:
          return "Portal";
        case Q:
          return t.displayName || "Context";
        case X:
          return (t._context.displayName || "Context") + ".Consumer";
        case mt:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case V:
          return e = t.displayName || null, e !== null ? e : Ce(t.type) || "Memo";
        case Yt:
          e = t._payload, t = t._init;
          try {
            return Ce(t(e));
          } catch {
          }
      }
    return null;
  }
  var De = Array.isArray, _ = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, dt = [], bt = -1;
  function y(t) {
    return { current: t };
  }
  function U(t) {
    0 > bt || (t.current = dt[bt], dt[bt] = null, bt--);
  }
  function C(t, e) {
    bt++, dt[bt] = t.current, t.current = e;
  }
  var H = y(null), K = y(null), tt = y(null), rt = y(null);
  function Ft(t, e) {
    switch (C(tt, e), C(K, t), C(H, null), e.nodeType) {
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
    U(H), C(H, t);
  }
  function _t() {
    U(H), U(K), U(tt);
  }
  function Ua(t) {
    t.memoizedState !== null && C(rt, t);
    var e = H.current, l = ko(e, t.type);
    e !== l && (C(K, t), C(H, l));
  }
  function Du(t) {
    K.current === t && (U(H), U(K)), rt.current === t && (U(rt), pu._currentValue = w);
  }
  var Fi, xf;
  function Dl(t) {
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
              var M = function() {
                throw Error();
              };
              if (Object.defineProperty(M.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(M, []);
                } catch (R) {
                  var T = R;
                }
                Reflect.construct(t, [], M);
              } else {
                try {
                  M.call();
                } catch (R) {
                  T = R;
                }
                t.call(M.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (R) {
                T = R;
              }
              (M = t()) && typeof M.catch == "function" && M.catch(function() {
              });
            }
          } catch (R) {
            if (R && T && typeof R.stack == "string")
              return [R.stack, T.stack];
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
`), E = r.split(`
`);
        for (u = a = 0; a < h.length && !h[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < E.length && !E[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === h.length || u === E.length)
          for (a = h.length - 1, u = E.length - 1; 1 <= a && 0 <= u && h[a] !== E[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (h[a] !== E[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || h[a] !== E[u]) {
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
    return (l = t ? t.displayName || t.name : "") ? Dl(l) : "";
  }
  function Fh(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Dl(t.type);
      case 16:
        return Dl("Lazy");
      case 13:
        return t.child !== e && e !== null ? Dl("Suspense Fallback") : Dl("Suspense");
      case 19:
        return Dl("SuspenseList");
      case 0:
      case 15:
        return Wi(t.type, !1);
      case 11:
        return Wi(t.type.render, !1);
      case 1:
        return Wi(t.type, !0);
      case 31:
        return Dl("Activity");
      default:
        return "";
    }
  }
  function Af(t) {
    try {
      var e = "", l = null;
      do
        e += Fh(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var $i = Object.prototype.hasOwnProperty, Ii = m.unstable_scheduleCallback, Pi = m.unstable_cancelCallback, kh = m.unstable_shouldYield, Wh = m.unstable_requestPaint, ue = m.unstable_now, $h = m.unstable_getCurrentPriorityLevel, Rf = m.unstable_ImmediatePriority, Df = m.unstable_UserBlockingPriority, _u = m.unstable_NormalPriority, Ih = m.unstable_LowPriority, _f = m.unstable_IdlePriority, Ph = m.log, tm = m.unstable_setDisableYieldValue, Na = null, ie = null;
  function tl(t) {
    if (typeof Ph == "function" && tm(t), ie && typeof ie.setStrictMode == "function")
      try {
        ie.setStrictMode(Na, t);
      } catch {
      }
  }
  var ne = Math.clz32 ? Math.clz32 : am, em = Math.log, lm = Math.LN2;
  function am(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (em(t) / lm | 0) | 0;
  }
  var zu = 256, Ou = 262144, Mu = 4194304;
  function _l(t) {
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
  function Uu(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0, i = t.suspendedLanes, n = t.pingedLanes;
    t = t.warmLanes;
    var r = a & 134217727;
    return r !== 0 ? (a = r & ~i, a !== 0 ? u = _l(a) : (n &= r, n !== 0 ? u = _l(n) : l || (l = r & ~t, l !== 0 && (u = _l(l))))) : (r = a & ~i, r !== 0 ? u = _l(r) : n !== 0 ? u = _l(n) : l || (l = a & ~t, l !== 0 && (u = _l(l)))), u === 0 ? 0 : e !== 0 && e !== u && (e & i) === 0 && (i = u & -u, l = e & -e, i >= l || i === 32 && (l & 4194048) !== 0) ? e : u;
  }
  function ja(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function um(t, e) {
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
    var t = Mu;
    return Mu <<= 1, (Mu & 62914560) === 0 && (Mu = 4194304), t;
  }
  function tn(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ba(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function im(t, e, l, a, u, i) {
    var n = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var r = t.entanglements, h = t.expirationTimes, E = t.hiddenUpdates;
    for (l = n & ~l; 0 < l; ) {
      var D = 31 - ne(l), M = 1 << D;
      r[D] = 0, h[D] = -1;
      var T = E[D];
      if (T !== null)
        for (E[D] = null, D = 0; D < T.length; D++) {
          var R = T[D];
          R !== null && (R.lane &= -536870913);
        }
      l &= ~M;
    }
    a !== 0 && Of(t, a, 0), i !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(n & ~e));
  }
  function Of(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - ne(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function Mf(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - ne(l), u = 1 << a;
      u & e | t[a] & e && (t[a] |= e), l &= ~u;
    }
  }
  function Uf(t, e) {
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
    var t = B.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Sh(t.type));
  }
  function jf(t, e) {
    var l = B.p;
    try {
      return B.p = t, e();
    } finally {
      B.p = l;
    }
  }
  var el = Math.random().toString(36).slice(2), qt = "__reactFiber$" + el, $t = "__reactProps$" + el, Kl = "__reactContainer$" + el, an = "__reactEvents$" + el, nm = "__reactListeners$" + el, cm = "__reactHandles$" + el, Bf = "__reactResources$" + el, Ca = "__reactMarker$" + el;
  function un(t) {
    delete t[qt], delete t[$t], delete t[an], delete t[nm], delete t[cm];
  }
  function Jl(t) {
    var e = t[qt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[Kl] || l[qt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = lh(t); t !== null; ) {
            if (l = t[qt]) return l;
            t = lh(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function Fl(t) {
    if (t = t[qt] || t[Kl]) {
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
  function zl(t, e) {
    Wl(t, e), Wl(t + "Capture", e);
  }
  function Wl(t, e) {
    for (Lf[t] = e, t = 0; t < e.length; t++)
      Cf.add(e[t]);
  }
  var fm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Hf = {}, Yf = {};
  function sm(t) {
    return $i.call(Yf, t) ? !0 : $i.call(Hf, t) ? !1 : fm.test(t) ? Yf[t] = !0 : (Hf[t] = !0, !1);
  }
  function Nu(t, e, l) {
    if (sm(e))
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
  function Le(t, e, l, a) {
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
  function ye(t) {
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
  function rm(t, e, l) {
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
      t._valueTracker = rm(
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
  var om = /[\n"\\]/g;
  function ge(t) {
    return t.replace(
      om,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function cn(t, e, l, a, u, i, n, r) {
    t.name = "", n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" ? t.type = n : t.removeAttribute("type"), e != null ? n === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ye(e)) : t.value !== "" + ye(e) && (t.value = "" + ye(e)) : n !== "submit" && n !== "reset" || t.removeAttribute("value"), e != null ? fn(t, n, ye(e)) : l != null ? fn(t, n, ye(l)) : a != null && t.removeAttribute("value"), u == null && i != null && (t.defaultChecked = !!i), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.name = "" + ye(r) : t.removeAttribute("name");
  }
  function Xf(t, e, l, a, u, i, n, r) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        nn(t);
        return;
      }
      l = l != null ? "" + ye(l) : "", e = e != null ? "" + ye(e) : l, r || e === t.value || (t.value = e), t.defaultValue = e;
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
      for (l = "" + ye(l), e = null, u = 0; u < t.length; u++) {
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
    if (e != null && (e = "" + ye(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + ye(l) : "";
  }
  function Qf(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (De(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = ye(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), nn(t);
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
  var hm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Vf(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || hm.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
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
  var mm = /* @__PURE__ */ new Map([
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
  ]), dm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Cu(t) {
    return dm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function He() {
  }
  var rn = null;
  function on(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Pl = null, ta = null;
  function Kf(t) {
    var e = Fl(t);
    if (e && (t = e.stateNode)) {
      var l = t[$t] || null;
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
              'input[name="' + ge(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var u = a[$t] || null;
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
      if (hn = !1, (Pl !== null || ta !== null) && (Ti(), Pl && (e = Pl, t = ta, ta = Pl = null, Kf(e), t)))
        for (e = 0; e < t.length; e++) Kf(t[e]);
    }
  }
  function Ha(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[$t] || null;
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
  var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), mn = !1;
  if (Ye)
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
  var ll = null, dn = null, Lu = null;
  function Ff() {
    if (Lu) return Lu;
    var t, e = dn, l = e.length, a, u = "value" in ll ? ll.value : ll.textContent, i = u.length;
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
  function It(t) {
    function e(l, a, u, i, n) {
      this._reactName = l, this._targetInst = u, this.type = a, this.nativeEvent = i, this.target = n, this.currentTarget = null;
      for (var r in t)
        t.hasOwnProperty(r) && (l = t[r], this[r] = l ? l(i) : i[r]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Yu : kf, this.isPropagationStopped = kf, this;
    }
    return j(e.prototype, {
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
  var Ol = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Gu = It(Ol), Ga = j({}, Ol, { view: 0, detail: 0 }), vm = It(Ga), vn, yn, qa, qu = j({}, Ga, {
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
  }), Wf = It(qu), ym = j({}, qu, { dataTransfer: 0 }), gm = It(ym), Sm = j({}, Ga, { relatedTarget: 0 }), gn = It(Sm), bm = j({}, Ol, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), pm = It(bm), Em = j({}, Ol, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Tm = It(Em), xm = j({}, Ol, { data: 0 }), $f = It(xm), Am = {
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
  }, Rm = {
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
  }, Dm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function _m(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Dm[t]) ? !!e[t] : !1;
  }
  function Sn() {
    return _m;
  }
  var zm = j({}, Ga, {
    key: function(t) {
      if (t.key) {
        var e = Am[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Hu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Rm[t.keyCode] || "Unidentified" : "";
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
  }), Om = It(zm), Mm = j({}, qu, {
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
  }), If = It(Mm), Um = j({}, Ga, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sn
  }), Nm = It(Um), jm = j({}, Ol, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Bm = It(jm), Cm = j({}, qu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Lm = It(Cm), Hm = j({}, Ol, {
    newState: 0,
    oldState: 0
  }), Ym = It(Hm), Gm = [9, 13, 27, 32], bn = Ye && "CompositionEvent" in window, Xa = null;
  Ye && "documentMode" in document && (Xa = document.documentMode);
  var qm = Ye && "TextEvent" in window && !Xa, Pf = Ye && (!bn || Xa && 8 < Xa && 11 >= Xa), ts = " ", es = !1;
  function ls(t, e) {
    switch (t) {
      case "keyup":
        return Gm.indexOf(e.keyCode) !== -1;
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
  function Xm(t, e) {
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
  function wm(t, e) {
    if (ea)
      return t === "compositionend" || !bn && ls(t, e) ? (t = Ff(), Lu = dn = ll = null, ea = !1, t) : null;
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
  var Qm = {
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
    return e === "input" ? !!Qm[t.type] : e === "textarea";
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
  function Vm(t) {
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
  if (Ye) {
    var pn;
    if (Ye) {
      var En = "oninput" in document;
      if (!En) {
        var fs = document.createElement("div");
        fs.setAttribute("oninput", "return;"), En = typeof fs.oninput == "function";
      }
      pn = En;
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
      ), Jf(Vm, e);
    }
  }
  function Zm(t, e, l) {
    t === "focusin" ? (ss(), wa = e, Qa = l, wa.attachEvent("onpropertychange", rs)) : t === "focusout" && ss();
  }
  function Km(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Xu(Qa);
  }
  function Jm(t, e) {
    if (t === "click") return Xu(e);
  }
  function Fm(t, e) {
    if (t === "input" || t === "change")
      return Xu(e);
  }
  function km(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ce = typeof Object.is == "function" ? Object.is : km;
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
  function Tn(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Wm = Ye && "documentMode" in document && 11 >= document.documentMode, la = null, xn = null, Za = null, An = !1;
  function vs(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    An || la == null || la !== Bu(a) || (a = la, "selectionStart" in a && Tn(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
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
  function Ml(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var aa = {
    animationend: Ml("Animation", "AnimationEnd"),
    animationiteration: Ml("Animation", "AnimationIteration"),
    animationstart: Ml("Animation", "AnimationStart"),
    transitionrun: Ml("Transition", "TransitionRun"),
    transitionstart: Ml("Transition", "TransitionStart"),
    transitioncancel: Ml("Transition", "TransitionCancel"),
    transitionend: Ml("Transition", "TransitionEnd")
  }, Rn = {}, ys = {};
  Ye && (ys = document.createElement("div").style, "AnimationEvent" in window || (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation), "TransitionEvent" in window || delete aa.transitionend.transition);
  function Ul(t) {
    if (Rn[t]) return Rn[t];
    if (!aa[t]) return t;
    var e = aa[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in ys)
        return Rn[t] = e[l];
    return t;
  }
  var gs = Ul("animationend"), Ss = Ul("animationiteration"), bs = Ul("animationstart"), $m = Ul("transitionrun"), Im = Ul("transitionstart"), Pm = Ul("transitioncancel"), ps = Ul("transitionend"), Es = /* @__PURE__ */ new Map(), Dn = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Dn.push("scrollEnd");
  function _e(t, e) {
    Es.set(t, e), zl(e, [t]);
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
  }, Se = [], ua = 0, _n = 0;
  function Qu() {
    for (var t = ua, e = _n = ua = 0; e < t; ) {
      var l = Se[e];
      Se[e++] = null;
      var a = Se[e];
      Se[e++] = null;
      var u = Se[e];
      Se[e++] = null;
      var i = Se[e];
      if (Se[e++] = null, a !== null && u !== null) {
        var n = a.pending;
        n === null ? u.next = u : (u.next = n.next, n.next = u), a.pending = u;
      }
      i !== 0 && Ts(l, u, i);
    }
  }
  function Vu(t, e, l, a) {
    Se[ua++] = t, Se[ua++] = e, Se[ua++] = l, Se[ua++] = a, _n |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function zn(t, e, l, a) {
    return Vu(t, e, l, a), Zu(t);
  }
  function Nl(t, e) {
    return Vu(t, null, null, e), Zu(t);
  }
  function Ts(t, e, l) {
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
  function td(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fe(t, e, l, a) {
    return new td(t, e, l, a);
  }
  function On(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Ge(t, e) {
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
      n = iv(
        t,
        l,
        H.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Gt:
          return t = fe(31, l, e, u), t.elementType = Gt, t.lanes = i, t;
        case Et:
          return jl(l.children, u, i, e);
        case Bt:
          n = 8, u |= 24;
          break;
        case I:
          return t = fe(12, l, e, u | 2), t.elementType = I, t.lanes = i, t;
        case k:
          return t = fe(13, l, e, u), t.elementType = k, t.lanes = i, t;
        case P:
          return t = fe(19, l, e, u), t.elementType = P, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Q:
                n = 10;
                break t;
              case X:
                n = 9;
                break t;
              case mt:
                n = 11;
                break t;
              case V:
                n = 14;
                break t;
              case Yt:
                n = 16, a = null;
                break t;
            }
          n = 29, l = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = fe(n, l, e, u), e.elementType = t, e.type = a, e.lanes = i, e;
  }
  function jl(t, e, l, a) {
    return t = fe(7, t, a, e), t.lanes = l, t;
  }
  function Mn(t, e, l) {
    return t = fe(6, t, null, e), t.lanes = l, t;
  }
  function As(t) {
    var e = fe(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Un(t, e, l) {
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
  function be(t, e) {
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
  var na = [], ca = 0, Ju = null, Ka = 0, pe = [], Ee = 0, al = null, Ue = 1, Ne = "";
  function qe(t, e) {
    na[ca++] = Ka, na[ca++] = Ju, Ju = t, Ka = e;
  }
  function Ds(t, e, l) {
    pe[Ee++] = Ue, pe[Ee++] = Ne, pe[Ee++] = al, al = t;
    var a = Ue;
    t = Ne;
    var u = 32 - ne(a) - 1;
    a &= ~(1 << u), l += 1;
    var i = 32 - ne(e) + u;
    if (30 < i) {
      var n = u - u % 5;
      i = (a & (1 << n) - 1).toString(32), a >>= n, u -= n, Ue = 1 << 32 - ne(e) + u | l << u | a, Ne = i + t;
    } else
      Ue = 1 << i | l << u | a, Ne = t;
  }
  function Nn(t) {
    t.return !== null && (qe(t, 1), Ds(t, 1, 0));
  }
  function jn(t) {
    for (; t === Ju; )
      Ju = na[--ca], na[ca] = null, Ka = na[--ca], na[ca] = null;
    for (; t === al; )
      al = pe[--Ee], pe[Ee] = null, Ne = pe[--Ee], pe[Ee] = null, Ue = pe[--Ee], pe[Ee] = null;
  }
  function _s(t, e) {
    pe[Ee++] = Ue, pe[Ee++] = Ne, pe[Ee++] = al, Ue = e.id, Ne = e.overflow, al = t;
  }
  var Xt = null, Tt = null, nt = !1, ul = null, Te = !1, Bn = Error(f(519));
  function il(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ja(be(e, t)), Bn;
  }
  function zs(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[qt] = t, e[$t] = a, l) {
      case "dialog":
        lt("cancel", e), lt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        lt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < vu.length; l++)
          lt(vu[l], e);
        break;
      case "source":
        lt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        lt("error", e), lt("load", e);
        break;
      case "details":
        lt("toggle", e);
        break;
      case "input":
        lt("invalid", e), Xf(
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
        lt("invalid", e);
        break;
      case "textarea":
        lt("invalid", e), Qf(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || Ko(e.textContent, l) ? (a.popover != null && (lt("beforetoggle", e), lt("toggle", e)), a.onScroll != null && lt("scroll", e), a.onScrollEnd != null && lt("scrollend", e), a.onClick != null && (e.onclick = He), e = !0) : e = !1, e || il(t, !0);
  }
  function Os(t) {
    for (Xt = t.return; Xt; )
      switch (Xt.tag) {
        case 5:
        case 31:
        case 13:
          Te = !1;
          return;
        case 27:
        case 3:
          Te = !0;
          return;
        default:
          Xt = Xt.return;
      }
  }
  function fa(t) {
    if (t !== Xt) return !1;
    if (!nt) return Os(t), nt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Ic(t.type, t.memoizedProps)), l = !l), l && Tt && il(t), Os(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Tt = eh(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      Tt = eh(t);
    } else
      e === 27 ? (e = Tt, bl(t.type) ? (t = af, af = null, Tt = t) : Tt = e) : Tt = Xt ? Ae(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Bl() {
    Tt = Xt = null, nt = !1;
  }
  function Cn() {
    var t = ul;
    return t !== null && (le === null ? le = t : le.push.apply(
      le,
      t
    ), ul = null), t;
  }
  function Ja(t) {
    ul === null ? ul = [t] : ul.push(t);
  }
  var Ln = y(null), Cl = null, Xe = null;
  function nl(t, e, l) {
    C(Ln, e._currentValue), e._currentValue = l;
  }
  function we(t) {
    t._currentValue = Ln.current, U(Ln);
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
      } else if (u === rt.current) {
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
  function Ll(t) {
    Cl = t, Xe = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function wt(t) {
    return Ms(Cl, t);
  }
  function ku(t, e) {
    return Cl === null && Ll(t), Ms(t, e);
  }
  function Ms(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Xe === null) {
      if (t === null) throw Error(f(308));
      Xe = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Xe = Xe.next = e;
    return l;
  }
  var ed = typeof AbortController < "u" ? AbortController : function() {
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
  }, ld = m.unstable_scheduleCallback, ad = m.unstable_NormalPriority, Mt = {
    $$typeof: Q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Gn() {
    return {
      controller: new ed(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Fa(t) {
    t.refCount--, t.refCount === 0 && ld(ad, function() {
      t.controller.abort();
    });
  }
  var ka = null, qn = 0, ra = 0, oa = null;
  function ud(t, e) {
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
    return qn++, e.then(Us, Us), e;
  }
  function Us() {
    if (--qn === 0 && ka !== null) {
      oa !== null && (oa.status = "fulfilled");
      var t = ka;
      ka = null, ra = 0, oa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function id(t, e) {
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
    yo = ue(), typeof e == "object" && e !== null && typeof e.then == "function" && ud(t, e), Ns !== null && Ns(t, e);
  };
  var Hl = y(null);
  function Xn() {
    var t = Hl.current;
    return t !== null ? t : pt.pooledCache;
  }
  function Wu(t, e) {
    e === null ? C(Hl, Hl.current) : C(Hl, e.pool);
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
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(He, He), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Hs(t), t;
      default:
        if (typeof e.status == "string") e.then(He, He);
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
        throw Gl = e, ha;
    }
  }
  function Yl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Gl = l, ha) : l;
    }
  }
  var Gl = null;
  function Ls() {
    if (Gl === null) throw Error(f(459));
    var t = Gl;
    return Gl = null, t;
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
    throw e.$$typeof === F ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Ys(t) {
    function e(S, v) {
      if (t) {
        var p = S.deletions;
        p === null ? (S.deletions = [v], S.flags |= 16) : p.push(v);
      }
    }
    function l(S, v) {
      if (!t) return null;
      for (; v !== null; )
        e(S, v), v = v.sibling;
      return null;
    }
    function a(S) {
      for (var v = /* @__PURE__ */ new Map(); S !== null; )
        S.key !== null ? v.set(S.key, S) : v.set(S.index, S), S = S.sibling;
      return v;
    }
    function u(S, v) {
      return S = Ge(S, v), S.index = 0, S.sibling = null, S;
    }
    function i(S, v, p) {
      return S.index = p, t ? (p = S.alternate, p !== null ? (p = p.index, p < v ? (S.flags |= 67108866, v) : p) : (S.flags |= 67108866, v)) : (S.flags |= 1048576, v);
    }
    function n(S) {
      return t && S.alternate === null && (S.flags |= 67108866), S;
    }
    function r(S, v, p, O) {
      return v === null || v.tag !== 6 ? (v = Mn(p, S.mode, O), v.return = S, v) : (v = u(v, p), v.return = S, v);
    }
    function h(S, v, p, O) {
      var G = p.type;
      return G === Et ? D(
        S,
        v,
        p.props.children,
        O,
        p.key
      ) : v !== null && (v.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Yt && Yl(G) === v.type) ? (v = u(v, p.props), $a(v, p), v.return = S, v) : (v = Ku(
        p.type,
        p.key,
        p.props,
        null,
        S.mode,
        O
      ), $a(v, p), v.return = S, v);
    }
    function E(S, v, p, O) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== p.containerInfo || v.stateNode.implementation !== p.implementation ? (v = Un(p, S.mode, O), v.return = S, v) : (v = u(v, p.children || []), v.return = S, v);
    }
    function D(S, v, p, O, G) {
      return v === null || v.tag !== 7 ? (v = jl(
        p,
        S.mode,
        O,
        G
      ), v.return = S, v) : (v = u(v, p), v.return = S, v);
    }
    function M(S, v, p) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = Mn(
          "" + v,
          S.mode,
          p
        ), v.return = S, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case it:
            return p = Ku(
              v.type,
              v.key,
              v.props,
              null,
              S.mode,
              p
            ), $a(p, v), p.return = S, p;
          case St:
            return v = Un(
              v,
              S.mode,
              p
            ), v.return = S, v;
          case Yt:
            return v = Yl(v), M(S, v, p);
        }
        if (De(v) || Wt(v))
          return v = jl(
            v,
            S.mode,
            p,
            null
          ), v.return = S, v;
        if (typeof v.then == "function")
          return M(S, Pu(v), p);
        if (v.$$typeof === Q)
          return M(
            S,
            ku(S, v),
            p
          );
        ti(S, v);
      }
      return null;
    }
    function T(S, v, p, O) {
      var G = v !== null ? v.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return G !== null ? null : r(S, v, "" + p, O);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case it:
            return p.key === G ? h(S, v, p, O) : null;
          case St:
            return p.key === G ? E(S, v, p, O) : null;
          case Yt:
            return p = Yl(p), T(S, v, p, O);
        }
        if (De(p) || Wt(p))
          return G !== null ? null : D(S, v, p, O, null);
        if (typeof p.then == "function")
          return T(
            S,
            v,
            Pu(p),
            O
          );
        if (p.$$typeof === Q)
          return T(
            S,
            v,
            ku(S, p),
            O
          );
        ti(S, p);
      }
      return null;
    }
    function R(S, v, p, O, G) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return S = S.get(p) || null, r(v, S, "" + O, G);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case it:
            return S = S.get(
              O.key === null ? p : O.key
            ) || null, h(v, S, O, G);
          case St:
            return S = S.get(
              O.key === null ? p : O.key
            ) || null, E(v, S, O, G);
          case Yt:
            return O = Yl(O), R(
              S,
              v,
              p,
              O,
              G
            );
        }
        if (De(O) || Wt(O))
          return S = S.get(p) || null, D(v, S, O, G, null);
        if (typeof O.then == "function")
          return R(
            S,
            v,
            p,
            Pu(O),
            G
          );
        if (O.$$typeof === Q)
          return R(
            S,
            v,
            p,
            ku(v, O),
            G
          );
        ti(v, O);
      }
      return null;
    }
    function L(S, v, p, O) {
      for (var G = null, ct = null, Y = v, W = v = 0, ut = null; Y !== null && W < p.length; W++) {
        Y.index > W ? (ut = Y, Y = null) : ut = Y.sibling;
        var ft = T(
          S,
          Y,
          p[W],
          O
        );
        if (ft === null) {
          Y === null && (Y = ut);
          break;
        }
        t && Y && ft.alternate === null && e(S, Y), v = i(ft, v, W), ct === null ? G = ft : ct.sibling = ft, ct = ft, Y = ut;
      }
      if (W === p.length)
        return l(S, Y), nt && qe(S, W), G;
      if (Y === null) {
        for (; W < p.length; W++)
          Y = M(S, p[W], O), Y !== null && (v = i(
            Y,
            v,
            W
          ), ct === null ? G = Y : ct.sibling = Y, ct = Y);
        return nt && qe(S, W), G;
      }
      for (Y = a(Y); W < p.length; W++)
        ut = R(
          Y,
          S,
          W,
          p[W],
          O
        ), ut !== null && (t && ut.alternate !== null && Y.delete(
          ut.key === null ? W : ut.key
        ), v = i(
          ut,
          v,
          W
        ), ct === null ? G = ut : ct.sibling = ut, ct = ut);
      return t && Y.forEach(function(Al) {
        return e(S, Al);
      }), nt && qe(S, W), G;
    }
    function q(S, v, p, O) {
      if (p == null) throw Error(f(151));
      for (var G = null, ct = null, Y = v, W = v = 0, ut = null, ft = p.next(); Y !== null && !ft.done; W++, ft = p.next()) {
        Y.index > W ? (ut = Y, Y = null) : ut = Y.sibling;
        var Al = T(S, Y, ft.value, O);
        if (Al === null) {
          Y === null && (Y = ut);
          break;
        }
        t && Y && Al.alternate === null && e(S, Y), v = i(Al, v, W), ct === null ? G = Al : ct.sibling = Al, ct = Al, Y = ut;
      }
      if (ft.done)
        return l(S, Y), nt && qe(S, W), G;
      if (Y === null) {
        for (; !ft.done; W++, ft = p.next())
          ft = M(S, ft.value, O), ft !== null && (v = i(ft, v, W), ct === null ? G = ft : ct.sibling = ft, ct = ft);
        return nt && qe(S, W), G;
      }
      for (Y = a(Y); !ft.done; W++, ft = p.next())
        ft = R(Y, S, W, ft.value, O), ft !== null && (t && ft.alternate !== null && Y.delete(ft.key === null ? W : ft.key), v = i(ft, v, W), ct === null ? G = ft : ct.sibling = ft, ct = ft);
      return t && Y.forEach(function(yv) {
        return e(S, yv);
      }), nt && qe(S, W), G;
    }
    function gt(S, v, p, O) {
      if (typeof p == "object" && p !== null && p.type === Et && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case it:
            t: {
              for (var G = p.key; v !== null; ) {
                if (v.key === G) {
                  if (G = p.type, G === Et) {
                    if (v.tag === 7) {
                      l(
                        S,
                        v.sibling
                      ), O = u(
                        v,
                        p.props.children
                      ), O.return = S, S = O;
                      break t;
                    }
                  } else if (v.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Yt && Yl(G) === v.type) {
                    l(
                      S,
                      v.sibling
                    ), O = u(v, p.props), $a(O, p), O.return = S, S = O;
                    break t;
                  }
                  l(S, v);
                  break;
                } else e(S, v);
                v = v.sibling;
              }
              p.type === Et ? (O = jl(
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
          case St:
            t: {
              for (G = p.key; v !== null; ) {
                if (v.key === G)
                  if (v.tag === 4 && v.stateNode.containerInfo === p.containerInfo && v.stateNode.implementation === p.implementation) {
                    l(
                      S,
                      v.sibling
                    ), O = u(v, p.children || []), O.return = S, S = O;
                    break t;
                  } else {
                    l(S, v);
                    break;
                  }
                else e(S, v);
                v = v.sibling;
              }
              O = Un(p, S.mode, O), O.return = S, S = O;
            }
            return n(S);
          case Yt:
            return p = Yl(p), gt(
              S,
              v,
              p,
              O
            );
        }
        if (De(p))
          return L(
            S,
            v,
            p,
            O
          );
        if (Wt(p)) {
          if (G = Wt(p), typeof G != "function") throw Error(f(150));
          return p = G.call(p), q(
            S,
            v,
            p,
            O
          );
        }
        if (typeof p.then == "function")
          return gt(
            S,
            v,
            Pu(p),
            O
          );
        if (p.$$typeof === Q)
          return gt(
            S,
            v,
            ku(S, p),
            O
          );
        ti(S, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, v !== null && v.tag === 6 ? (l(S, v.sibling), O = u(v, p), O.return = S, S = O) : (l(S, v), O = Mn(p, S.mode, O), O.return = S, S = O), n(S)) : l(S, v);
    }
    return function(S, v, p, O) {
      try {
        Wa = 0;
        var G = gt(
          S,
          v,
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
  var ql = Ys(!0), Gs = Ys(!1), cl = !1;
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
  function fl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function sl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (st & 2) !== 0) {
      var u = a.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), a.pending = e, e = Zu(t), Ts(t, null, l), e;
    }
    return Vu(t, a, e, l), Zu(t);
  }
  function Ia(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Mf(t, l);
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
    cl = !1;
    var i = u.firstBaseUpdate, n = u.lastBaseUpdate, r = u.shared.pending;
    if (r !== null) {
      u.shared.pending = null;
      var h = r, E = h.next;
      h.next = null, n === null ? i = E : n.next = E, n = h;
      var D = t.alternate;
      D !== null && (D = D.updateQueue, r = D.lastBaseUpdate, r !== n && (r === null ? D.firstBaseUpdate = E : r.next = E, D.lastBaseUpdate = h));
    }
    if (i !== null) {
      var M = u.baseState;
      n = 0, D = E = h = null, r = i;
      do {
        var T = r.lane & -536870913, R = T !== r.lane;
        if (R ? (at & T) === T : (a & T) === T) {
          T !== 0 && T === ra && (Kn = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          });
          t: {
            var L = t, q = r;
            T = e;
            var gt = l;
            switch (q.tag) {
              case 1:
                if (L = q.payload, typeof L == "function") {
                  M = L.call(gt, M, T);
                  break t;
                }
                M = L;
                break t;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = q.payload, T = typeof L == "function" ? L.call(gt, M, T) : L, T == null) break t;
                M = j({}, M, T);
                break t;
              case 2:
                cl = !0;
            }
          }
          T = r.callback, T !== null && (t.flags |= 64, R && (t.flags |= 8192), R = u.callbacks, R === null ? u.callbacks = [T] : R.push(T));
        } else
          R = {
            lane: T,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null
          }, D === null ? (E = D = R, h = M) : D = D.next = R, n |= T;
        if (r = r.next, r === null) {
          if (r = u.shared.pending, r === null)
            break;
          R = r, r = R.next, R.next = null, u.lastBaseUpdate = R, u.shared.pending = null;
        }
      } while (!0);
      D === null && (h = M), u.baseState = h, u.firstBaseUpdate = E, u.lastBaseUpdate = D, i === null && (u.shared.lanes = 0), dl |= n, t.lanes = n, t.memoizedState = M;
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
    t = $e, C(ei, t), C(da, e), $e = t | e.baseLanes;
  }
  function Jn() {
    C(ei, $e), C(da, da.current);
  }
  function Fn() {
    $e = ei.current, U(da), U(ei);
  }
  var se = y(null), xe = null;
  function rl(t) {
    var e = t.alternate;
    C(zt, zt.current & 1), C(se, t), xe === null && (e === null || da.current !== null || e.memoizedState !== null) && (xe = t);
  }
  function kn(t) {
    C(zt, zt.current), C(se, t), xe === null && (xe = t);
  }
  function Qs(t) {
    t.tag === 22 ? (C(zt, zt.current), C(se, t), xe === null && (xe = t)) : ol();
  }
  function ol() {
    C(zt, zt.current), C(se, se.current);
  }
  function re(t) {
    U(se), xe === t && (xe = null), U(zt);
  }
  var zt = y(0);
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
  var Qe = 0, J = null, vt = null, Ut = null, ai = !1, va = !1, Xl = !1, ui = 0, eu = 0, ya = null, nd = 0;
  function Rt() {
    throw Error(f(321));
  }
  function Wn(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ce(t[l], e[l])) return !1;
    return !0;
  }
  function $n(t, e, l, a, u, i) {
    return Qe = i, J = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, _.H = t === null || t.memoizedState === null ? Dr : hc, Xl = !1, i = l(a, u), Xl = !1, va && (i = Zs(
      e,
      l,
      a,
      u
    )), Vs(t), i;
  }
  function Vs(t) {
    _.H = uu;
    var e = vt !== null && vt.next !== null;
    if (Qe = 0, Ut = vt = J = null, ai = !1, eu = 0, ya = null, e) throw Error(f(300));
    t === null || Nt || (t = t.dependencies, t !== null && Fu(t) && (Nt = !0));
  }
  function Zs(t, e, l, a) {
    J = t;
    var u = 0;
    do {
      if (va && (ya = null), eu = 0, va = !1, 25 <= u) throw Error(f(301));
      if (u += 1, Ut = vt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      _.H = _r, i = e(l, a);
    } while (va);
    return i;
  }
  function cd() {
    var t = _.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? lu(e) : e, t = t.useState()[0], (vt !== null ? vt.memoizedState : null) !== t && (J.flags |= 1024), e;
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
    Qe = 0, Ut = vt = J = null, va = !1, eu = ui = 0, ya = null;
  }
  function kt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ut === null ? J.memoizedState = Ut = t : Ut = Ut.next = t, Ut;
  }
  function Ot() {
    if (vt === null) {
      var t = J.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = vt.next;
    var e = Ut === null ? J.memoizedState : Ut.next;
    if (e !== null)
      Ut = e, vt = t;
    else {
      if (t === null)
        throw J.alternate === null ? Error(f(467)) : Error(f(310));
      vt = t, t = {
        memoizedState: vt.memoizedState,
        baseState: vt.baseState,
        baseQueue: vt.baseQueue,
        queue: vt.queue,
        next: null
      }, Ut === null ? J.memoizedState = Ut = t : Ut = Ut.next = t;
    }
    return Ut;
  }
  function ii() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function lu(t) {
    var e = eu;
    return eu += 1, ya === null && (ya = []), t = Cs(ya, t, e), e = J, (Ut === null ? e.memoizedState : Ut.next) === null && (e = e.alternate, _.H = e === null || e.memoizedState === null ? Dr : hc), t;
  }
  function ni(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return lu(t);
      if (t.$$typeof === Q) return wt(t);
    }
    throw Error(f(438, String(t)));
  }
  function ec(t) {
    var e = null, l = J.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = J.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = ii(), J.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = Me;
    return e.index++, l;
  }
  function Ve(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ci(t) {
    var e = Ot();
    return lc(e, vt, t);
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
      var r = n = null, h = null, E = e, D = !1;
      do {
        var M = E.lane & -536870913;
        if (M !== E.lane ? (at & M) === M : (Qe & M) === M) {
          var T = E.revertLane;
          if (T === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }), M === ra && (D = !0);
          else if ((Qe & T) === T) {
            E = E.next, T === ra && (D = !0);
            continue;
          } else
            M = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, h === null ? (r = h = M, n = i) : h = h.next = M, J.lanes |= T, dl |= T;
          M = E.action, Xl && l(i, M), i = E.hasEagerState ? E.eagerState : l(i, M);
        } else
          T = {
            lane: M,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }, h === null ? (r = h = T, n = i) : h = h.next = T, J.lanes |= M, dl |= M;
        E = E.next;
      } while (E !== null && E !== e);
      if (h === null ? n = i : h.next = r, !ce(i, t.memoizedState) && (Nt = !0, D && (l = oa, l !== null)))
        throw l;
      t.memoizedState = i, t.baseState = n, t.baseQueue = h, a.lastRenderedState = i;
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function ac(t) {
    var e = Ot(), l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, u = l.pending, i = e.memoizedState;
    if (u !== null) {
      l.pending = null;
      var n = u = u.next;
      do
        i = t(i, n.action), n = n.next;
      while (n !== u);
      ce(i, e.memoizedState) || (Nt = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
    }
    return [i, a];
  }
  function Ks(t, e, l) {
    var a = J, u = Ot(), i = nt;
    if (i) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var n = !ce(
      (vt || u).memoizedState,
      l
    );
    if (n && (u.memoizedState = l, Nt = !0), u = u.queue, nc(ks.bind(null, a, u, t), [
      t
    ]), u.getSnapshot !== e || n || Ut !== null && Ut.memoizedState.tag & 1) {
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
      i || (Qe & 127) !== 0 || Js(a, e, l);
    }
    return l;
  }
  function Js(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = J.updateQueue, e === null ? (e = ii(), J.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
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
    var e = Nl(t, 2);
    e !== null && ae(e, t, 2);
  }
  function uc(t) {
    var e = kt();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), Xl) {
        tl(!0);
        try {
          l();
        } finally {
          tl(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ve,
      lastRenderedState: t
    }, e;
  }
  function Is(t, e, l, a) {
    return t.baseState = l, lc(
      t,
      vt,
      typeof a == "function" ? a : Ve
    );
  }
  function fd(t, e, l, a, u) {
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
      } catch (E) {
        ic(t, e, E);
      } finally {
        i !== null && n.types !== null && (i.types = n.types), _.T = i;
      }
    } else
      try {
        i = l(u, a), tr(t, e, i);
      } catch (E) {
        ic(t, e, E);
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
    if (nt) {
      var l = pt.formState;
      if (l !== null) {
        t: {
          var a = J;
          if (nt) {
            if (Tt) {
              e: {
                for (var u = Tt, i = Te; u.nodeType !== 8; ) {
                  if (!i) {
                    u = null;
                    break e;
                  }
                  if (u = Ae(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                i = u.data, u = i === "F!" || i === "F" ? u : null;
              }
              if (u) {
                Tt = Ae(
                  u.nextSibling
                ), a = u.data === "F!";
                break t;
              }
            }
            il(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return l = kt(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ar,
      lastRenderedState: e
    }, l.queue = a, l = xr.bind(
      null,
      J,
      a
    ), a.dispatch = l, a = uc(!1), i = oc.bind(
      null,
      J,
      !1,
      a.queue
    ), a = kt(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = u, l = fd.bind(
      null,
      J,
      u,
      i,
      l
    ), u.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function ir(t) {
    var e = Ot();
    return nr(e, vt, t);
  }
  function nr(t, e, l) {
    if (e = lc(
      t,
      e,
      ar
    )[0], t = ci(Ve)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = lu(e);
      } catch (n) {
        throw n === ha ? $u : n;
      }
    else a = e;
    e = Ot();
    var u = e.queue, i = u.dispatch;
    return l !== e.memoizedState && (J.flags |= 2048, ga(
      9,
      { destroy: void 0 },
      sd.bind(null, u, l),
      null
    )), [a, i, t];
  }
  function sd(t, e) {
    t.action = e;
  }
  function cr(t) {
    var e = Ot(), l = vt;
    if (l !== null)
      return nr(e, l, t);
    Ot(), e = e.memoizedState, l = Ot();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function ga(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = J.updateQueue, e === null && (e = ii(), J.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function fr() {
    return Ot().memoizedState;
  }
  function fi(t, e, l, a) {
    var u = kt();
    J.flags |= t, u.memoizedState = ga(
      1 | e,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function si(t, e, l, a) {
    var u = Ot();
    a = a === void 0 ? null : a;
    var i = u.memoizedState.inst;
    vt !== null && a !== null && Wn(a, vt.memoizedState.deps) ? u.memoizedState = ga(e, i, l, a) : (J.flags |= t, u.memoizedState = ga(
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
  function rd(t) {
    J.flags |= 4;
    var e = J.updateQueue;
    if (e === null)
      e = ii(), J.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function rr(t) {
    var e = Ot().memoizedState;
    return rd({ ref: e, nextImpl: t }), function() {
      if ((st & 2) !== 0) throw Error(f(440));
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
    var l = Ot();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Wn(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function yr(t, e) {
    var l = Ot();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Wn(e, a[1]))
      return a[0];
    if (a = t(), Xl) {
      tl(!0);
      try {
        t();
      } finally {
        tl(!1);
      }
    }
    return l.memoizedState = [a, e], a;
  }
  function fc(t, e, l) {
    return l === void 0 || (Qe & 1073741824) !== 0 && (at & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = So(), J.lanes |= t, dl |= t, l);
  }
  function gr(t, e, l, a) {
    return ce(l, e) ? l : da.current !== null ? (t = fc(t, l, a), ce(t, e) || (Nt = !0), t) : (Qe & 42) === 0 || (Qe & 1073741824) !== 0 && (at & 261930) === 0 ? (Nt = !0, t.memoizedState = l) : (t = So(), J.lanes |= t, dl |= t, e);
  }
  function Sr(t, e, l, a, u) {
    var i = B.p;
    B.p = i !== 0 && 8 > i ? i : 8;
    var n = _.T, r = {};
    _.T = r, oc(t, !1, e, l);
    try {
      var h = u(), E = _.S;
      if (E !== null && E(r, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var D = id(
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
    } catch (M) {
      au(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: M },
        me()
      );
    } finally {
      B.p = i, n !== null && r.types !== null && (n.types = r.types), _.T = n;
    }
  }
  function od() {
  }
  function sc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var u = br(t).queue;
    Sr(
      t,
      u,
      e,
      w,
      l === null ? od : function() {
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
        lastRenderedReducer: Ve,
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
        lastRenderedReducer: Ve,
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
    return wt(pu);
  }
  function Er() {
    return Ot().memoizedState;
  }
  function Tr() {
    return Ot().memoizedState;
  }
  function hd(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = me();
          t = fl(l);
          var a = sl(e, t, l);
          a !== null && (ae(a, e, l), Ia(a, e, l)), e = { cache: Gn() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function md(t, e, l) {
    var a = me();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ri(t) ? Ar(e, l) : (l = zn(t, e, l, a), l !== null && (ae(l, t, a), Rr(l, e, a)));
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
        return ae(l, t, a), Rr(l, e, a), !0;
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
      ), e !== null && ae(e, t, 2);
  }
  function ri(t) {
    var e = t.alternate;
    return t === J || e !== null && e === J;
  }
  function Ar(t, e) {
    va = ai = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Rr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Mf(t, l);
    }
  }
  var uu = {
    readContext: wt,
    use: ni,
    useCallback: Rt,
    useContext: Rt,
    useEffect: Rt,
    useImperativeHandle: Rt,
    useLayoutEffect: Rt,
    useInsertionEffect: Rt,
    useMemo: Rt,
    useReducer: Rt,
    useRef: Rt,
    useState: Rt,
    useDebugValue: Rt,
    useDeferredValue: Rt,
    useTransition: Rt,
    useSyncExternalStore: Rt,
    useId: Rt,
    useHostTransitionStatus: Rt,
    useFormState: Rt,
    useActionState: Rt,
    useOptimistic: Rt,
    useMemoCache: Rt,
    useCacheRefresh: Rt
  };
  uu.useEffectEvent = Rt;
  var Dr = {
    readContext: wt,
    use: ni,
    useCallback: function(t, e) {
      return kt().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: wt,
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
      var l = kt();
      e = e === void 0 ? null : e;
      var a = t();
      if (Xl) {
        tl(!0);
        try {
          t();
        } finally {
          tl(!1);
        }
      }
      return l.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, l) {
      var a = kt();
      if (l !== void 0) {
        var u = l(e);
        if (Xl) {
          tl(!0);
          try {
            l(e);
          } finally {
            tl(!1);
          }
        }
      } else u = e;
      return a.memoizedState = a.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, a.queue = t, t = t.dispatch = md.bind(
        null,
        J,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = kt();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = uc(t);
      var e = t.queue, l = xr.bind(null, J, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: cc,
    useDeferredValue: function(t, e) {
      var l = kt();
      return fc(l, t, e);
    },
    useTransition: function() {
      var t = uc(!1);
      return t = Sr.bind(
        null,
        J,
        t.queue,
        !0,
        !1
      ), kt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = J, u = kt();
      if (nt) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = e(), pt === null)
          throw Error(f(349));
        (at & 127) !== 0 || Js(a, e, l);
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
      var t = kt(), e = pt.identifierPrefix;
      if (nt) {
        var l = Ne, a = Ue;
        l = (a & ~(1 << 32 - ne(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = ui++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = nd++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: rc,
    useFormState: ur,
    useActionState: ur,
    useOptimistic: function(t) {
      var e = kt();
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
        J,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: ec,
    useCacheRefresh: function() {
      return kt().memoizedState = hd.bind(
        null,
        J
      );
    },
    useEffectEvent: function(t) {
      var e = kt(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((st & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, hc = {
    readContext: wt,
    use: ni,
    useCallback: vr,
    useContext: wt,
    useEffect: nc,
    useImperativeHandle: dr,
    useInsertionEffect: or,
    useLayoutEffect: hr,
    useMemo: yr,
    useReducer: ci,
    useRef: fr,
    useState: function() {
      return ci(Ve);
    },
    useDebugValue: cc,
    useDeferredValue: function(t, e) {
      var l = Ot();
      return gr(
        l,
        vt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ci(Ve)[0], e = Ot().memoizedState;
      return [
        typeof t == "boolean" ? t : lu(t),
        e
      ];
    },
    useSyncExternalStore: Ks,
    useId: Er,
    useHostTransitionStatus: rc,
    useFormState: ir,
    useActionState: ir,
    useOptimistic: function(t, e) {
      var l = Ot();
      return Is(l, vt, t, e);
    },
    useMemoCache: ec,
    useCacheRefresh: Tr
  };
  hc.useEffectEvent = rr;
  var _r = {
    readContext: wt,
    use: ni,
    useCallback: vr,
    useContext: wt,
    useEffect: nc,
    useImperativeHandle: dr,
    useInsertionEffect: or,
    useLayoutEffect: hr,
    useMemo: yr,
    useReducer: ac,
    useRef: fr,
    useState: function() {
      return ac(Ve);
    },
    useDebugValue: cc,
    useDeferredValue: function(t, e) {
      var l = Ot();
      return vt === null ? fc(l, t, e) : gr(
        l,
        vt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ac(Ve)[0], e = Ot().memoizedState;
      return [
        typeof t == "boolean" ? t : lu(t),
        e
      ];
    },
    useSyncExternalStore: Ks,
    useId: Er,
    useHostTransitionStatus: rc,
    useFormState: cr,
    useActionState: cr,
    useOptimistic: function(t, e) {
      var l = Ot();
      return vt !== null ? Is(l, vt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: ec,
    useCacheRefresh: Tr
  };
  _r.useEffectEvent = rr;
  function mc(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : j({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var dc = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = me(), u = fl(a);
      u.payload = e, l != null && (u.callback = l), e = sl(t, u, a), e !== null && (ae(e, t, a), Ia(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = me(), u = fl(a);
      u.tag = 1, u.payload = e, l != null && (u.callback = l), e = sl(t, u, a), e !== null && (ae(e, t, a), Ia(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = me(), a = fl(l);
      a.tag = 2, e != null && (a.callback = e), e = sl(t, a, l), e !== null && (ae(e, t, l), Ia(e, t, l));
    }
  };
  function zr(t, e, l, a, u, i, n) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, i, n) : e.prototype && e.prototype.isPureReactComponent ? !Va(l, a) || !Va(u, i) : !0;
  }
  function Or(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && dc.enqueueReplaceState(e, e.state, null);
  }
  function wl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = j({}, l));
      for (var u in t)
        l[u] === void 0 && (l[u] = t[u]);
    }
    return l;
  }
  function Mr(t) {
    wu(t);
  }
  function Ur(t) {
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
    return l = fl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      oi(t, e);
    }, l;
  }
  function Br(t) {
    return t = fl(t), t.tag = 3, t;
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
      jr(e, l, a), typeof u != "function" && (vl === null ? vl = /* @__PURE__ */ new Set([this]) : vl.add(this));
      var r = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: r !== null ? r : ""
      });
    });
  }
  function dd(t, e, l, a, u) {
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
            return xe === null ? xi() : l.alternate === null && Dt === 0 && (Dt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = u, a === Iu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), qc(t, a, u)), !1;
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
    if (nt)
      return e = se.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, a !== Bn && (t = Error(f(422), { cause: a }), Ja(be(t, l)))) : (a !== Bn && (e = Error(f(423), {
        cause: a
      }), Ja(
        be(e, l)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = be(a, l), u = vc(
        t.stateNode,
        a,
        u
      ), Zn(t, u), Dt !== 4 && (Dt = 2)), !1;
    var i = Error(f(520), { cause: a });
    if (i = be(i, l), hu === null ? hu = [i] : hu.push(i), Dt !== 4 && (Dt = 2), e === null) return !0;
    a = be(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = u & -u, l.lanes |= t, t = vc(l.stateNode, a, t), Zn(l, t), !1;
        case 1:
          if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (vl === null || !vl.has(i))))
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
  var yc = Error(f(461)), Nt = !1;
  function Qt(t, e, l, a) {
    e.child = t === null ? Gs(e, null, l, a) : ql(
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
    return Ll(e), a = $n(
      t,
      e,
      l,
      n,
      i,
      u
    ), r = In(), t !== null && !Nt ? (Pn(t, e, u), Ze(t, e, u)) : (nt && r && Nn(e), e.flags |= 1, Qt(t, e, a, u), e.child);
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
        return Ze(t, e, u);
    }
    return e.flags |= 1, t = Ge(i, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Yr(t, e, l, a, u) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (Va(i, a) && t.ref === e.ref)
        if (Nt = !1, e.pendingProps = a = i, Ac(t, u))
          (t.flags & 131072) !== 0 && (Nt = !0);
        else
          return e.lanes = t.lanes, Ze(t, e, u);
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
      i !== null ? (Wu(e, i.cachePool), ws(e, i), ol(), e.memoizedState = null) : (t !== null && Wu(e, null), Jn(), ol());
    return Qt(t, e, u, l), e.child;
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
    return ql(e, t.child, null, l), t = hi(e, e.pendingProps), t.flags |= 2, re(e), e.memoizedState = null, t;
  }
  function vd(t, e, l) {
    var a = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (nt) {
        if (a.mode === "hidden")
          return t = hi(e, a), e.lanes = 536870912, iu(null, t);
        if (kn(e), (t = Tt) ? (t = th(
          t,
          Te
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: al !== null ? { id: Ue, overflow: Ne } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = As(t), l.return = e, e.child = l, Xt = e, Tt = null)) : t = null, t === null) throw il(e);
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
      else if (Nt || sa(t, e, l, !1), u = (l & t.childLanes) !== 0, Nt || u) {
        if (a = pt, a !== null && (n = Uf(a, l), n !== 0 && n !== i.retryLane))
          throw i.retryLane = n, Nl(t, n), ae(a, t, n), yc;
        xi(), e = Xr(
          t,
          e,
          l
        );
      } else
        t = i.treeContext, Tt = Ae(n.nextSibling), Xt = e, nt = !0, ul = null, Te = !1, t !== null && _s(e, t), e = hi(e, a), e.flags |= 4096;
      return e;
    }
    return t = Ge(t.child, {
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
    return Ll(e), l = $n(
      t,
      e,
      l,
      a,
      void 0,
      u
    ), a = In(), t !== null && !Nt ? (Pn(t, e, u), Ze(t, e, u)) : (nt && a && Nn(e), e.flags |= 1, Qt(t, e, l, u), e.child);
  }
  function wr(t, e, l, a, u, i) {
    return Ll(e), e.updateQueue = null, l = Zs(
      e,
      a,
      l,
      u
    ), Vs(t), a = In(), t !== null && !Nt ? (Pn(t, e, i), Ze(t, e, i)) : (nt && a && Nn(e), e.flags |= 1, Qt(t, e, l, i), e.child);
  }
  function Qr(t, e, l, a, u) {
    if (Ll(e), e.stateNode === null) {
      var i = ia, n = l.contextType;
      typeof n == "object" && n !== null && (i = wt(n)), i = new l(a, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = dc, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = a, i.state = e.memoizedState, i.refs = {}, Qn(e), n = l.contextType, i.context = typeof n == "object" && n !== null ? wt(n) : ia, i.state = e.memoizedState, n = l.getDerivedStateFromProps, typeof n == "function" && (mc(
        e,
        l,
        n,
        a
      ), i.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (n = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), n !== i.state && dc.enqueueReplaceState(i, i.state, null), tu(e, a, i, u), Pa(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      i = e.stateNode;
      var r = e.memoizedProps, h = wl(l, r);
      i.props = h;
      var E = i.context, D = l.contextType;
      n = ia, typeof D == "object" && D !== null && (n = wt(D));
      var M = l.getDerivedStateFromProps;
      D = typeof M == "function" || typeof i.getSnapshotBeforeUpdate == "function", r = e.pendingProps !== r, D || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (r || E !== n) && Or(
        e,
        i,
        a,
        n
      ), cl = !1;
      var T = e.memoizedState;
      i.state = T, tu(e, a, i, u), Pa(), E = e.memoizedState, r || T !== E || cl ? (typeof M == "function" && (mc(
        e,
        l,
        M,
        a
      ), E = e.memoizedState), (h = cl || zr(
        e,
        l,
        h,
        a,
        T,
        E,
        n
      )) ? (D || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = E), i.props = a, i.state = E, i.context = n, a = h) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      i = e.stateNode, Vn(t, e), n = e.memoizedProps, D = wl(l, n), i.props = D, M = e.pendingProps, T = i.context, E = l.contextType, h = ia, typeof E == "object" && E !== null && (h = wt(E)), r = l.getDerivedStateFromProps, (E = typeof r == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (n !== M || T !== h) && Or(
        e,
        i,
        a,
        h
      ), cl = !1, T = e.memoizedState, i.state = T, tu(e, a, i, u), Pa();
      var R = e.memoizedState;
      n !== M || T !== R || cl || t !== null && t.dependencies !== null && Fu(t.dependencies) ? (typeof r == "function" && (mc(
        e,
        l,
        r,
        a
      ), R = e.memoizedState), (D = cl || zr(
        e,
        l,
        D,
        a,
        T,
        R,
        h
      ) || t !== null && t.dependencies !== null && Fu(t.dependencies)) ? (E || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, R, h), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        R,
        h
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || n === t.memoizedProps && T === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || n === t.memoizedProps && T === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = R), i.props = a, i.state = R, i.context = h, a = D) : (typeof i.componentDidUpdate != "function" || n === t.memoizedProps && T === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || n === t.memoizedProps && T === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return i = a, mi(t, e), a = (e.flags & 128) !== 0, i || a ? (i = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && a ? (e.child = ql(
      e,
      t.child,
      null,
      u
    ), e.child = ql(
      e,
      null,
      l,
      u
    )) : Qt(t, e, l, u), e.memoizedState = i.state, t = e.child) : t = Ze(
      t,
      e,
      u
    ), t;
  }
  function Vr(t, e, l, a) {
    return Bl(), e.flags |= 256, Qt(t, e, l, a), e.child;
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
    if ((n = i) || (n = t !== null && t.memoizedState === null ? !1 : (zt.current & 2) !== 0), n && (u = !0, e.flags &= -129), n = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (nt) {
        if (u ? rl(e) : ol(), (t = Tt) ? (t = th(
          t,
          Te
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: al !== null ? { id: Ue, overflow: Ne } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = As(t), l.return = e, e.child = l, Xt = e, Tt = null)) : t = null, t === null) throw il(e);
        return lf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var r = a.children;
      return a = a.fallback, u ? (ol(), u = e.mode, r = di(
        { mode: "hidden", children: r },
        u
      ), a = jl(
        a,
        u,
        l,
        null
      ), r.return = e, a.return = e, r.sibling = a, e.child = r, a = e.child, a.memoizedState = bc(l), a.childLanes = pc(
        t,
        n,
        l
      ), e.memoizedState = Sc, iu(null, a)) : (rl(e), Ec(e, r));
    }
    var h = t.memoizedState;
    if (h !== null && (r = h.dehydrated, r !== null)) {
      if (i)
        e.flags & 256 ? (rl(e), e.flags &= -257, e = Tc(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (ol(), e.child = t.child, e.flags |= 128, e = null) : (ol(), r = a.fallback, u = e.mode, a = di(
          { mode: "visible", children: a.children },
          u
        ), r = jl(
          r,
          u,
          l,
          null
        ), r.flags |= 2, a.return = e, r.return = e, a.sibling = r, e.child = a, ql(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = bc(l), a.childLanes = pc(
          t,
          n,
          l
        ), e.memoizedState = Sc, e = iu(null, a));
      else if (rl(e), lf(r)) {
        if (n = r.nextSibling && r.nextSibling.dataset, n) var E = n.dgst;
        n = E, a = Error(f(419)), a.stack = "", a.digest = n, Ja({ value: a, source: null, stack: null }), e = Tc(
          t,
          e,
          l
        );
      } else if (Nt || sa(t, e, l, !1), n = (l & t.childLanes) !== 0, Nt || n) {
        if (n = pt, n !== null && (a = Uf(n, l), a !== 0 && a !== h.retryLane))
          throw h.retryLane = a, Nl(t, a), ae(n, t, a), yc;
        ef(r) || xi(), e = Tc(
          t,
          e,
          l
        );
      } else
        ef(r) ? (e.flags |= 192, e.child = t.child, e = null) : (t = h.treeContext, Tt = Ae(
          r.nextSibling
        ), Xt = e, nt = !0, ul = null, Te = !1, t !== null && _s(e, t), e = Ec(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return u ? (ol(), r = a.fallback, u = e.mode, h = t.child, E = h.sibling, a = Ge(h, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = h.subtreeFlags & 65011712, E !== null ? r = Ge(
      E,
      r
    ) : (r = jl(
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
    ), e.memoizedState = Sc, iu(t.child, a)) : (rl(e), l = t.child, t = l.sibling, l = Ge(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function Ec(t, e) {
    return e = di(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function di(t, e) {
    return t = fe(22, t, null, e), t.lanes = 0, t;
  }
  function Tc(t, e, l) {
    return ql(e, t.child, null, l), t = Ec(
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
    var n = zt.current, r = (n & 2) !== 0;
    if (r ? (n = n & 1 | 2, e.flags |= 128) : n &= 1, C(zt, n), Qt(t, e, a, l), a = nt ? Ka : 0, !r && t !== null && (t.flags & 128) !== 0)
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
  function Ze(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), dl |= e.lanes, (l & e.childLanes) === 0)
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
      for (t = e.child, l = Ge(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Ge(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function Ac(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Fu(t)));
  }
  function yd(t, e, l) {
    switch (e.tag) {
      case 3:
        Ft(e, e.stateNode.containerInfo), nl(e, Mt, t.memoizedState.cache), Bl();
        break;
      case 27:
      case 5:
        Ua(e);
        break;
      case 4:
        Ft(e, e.stateNode.containerInfo);
        break;
      case 10:
        nl(
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
          return a.dehydrated !== null ? (rl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Zr(t, e, l) : (rl(e), t = Ze(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        rl(e);
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
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), C(zt, zt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, Gr(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        nl(e, Mt, t.memoizedState.cache);
    }
    return Ze(t, e, l);
  }
  function Fr(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Nt = !0;
      else {
        if (!Ac(t, l) && (e.flags & 128) === 0)
          return Nt = !1, yd(
            t,
            e,
            l
          );
        Nt = (t.flags & 131072) !== 0;
      }
    else
      Nt = !1, nt && (e.flags & 1048576) !== 0 && Ds(e, Ka, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Yl(e.elementType), e.type = t, typeof t == "function")
            On(t) ? (a = wl(t, a), e.tag = 1, e = Qr(
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
              if (u === mt) {
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
            throw e = Ce(t) || t, Error(f(306, e, ""));
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
        return a = e.type, u = wl(
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
          if (Ft(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(f(387));
          a = e.pendingProps;
          var i = e.memoizedState;
          u = i.element, Vn(t, e), tu(e, a, null, l);
          var n = e.memoizedState;
          if (a = n.cache, nl(e, Mt, a), a !== i.cache && Yn(
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
              u = be(
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
              for (Tt = Ae(t.firstChild), Xt = e, nt = !0, ul = null, Te = !0, l = Gs(
                e,
                null,
                a,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Bl(), a === u) {
              e = Ze(
                t,
                e,
                l
              );
              break t;
            }
            Qt(t, e, a, l);
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
        )) ? e.memoizedState = l : nt || (l = e.type, t = e.pendingProps, a = Mi(
          tt.current
        ).createElement(l), a[qt] = e, a[$t] = t, Vt(a, l, t), Lt(a), e.stateNode = a) : e.memoizedState = nh(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ua(e), t === null && nt && (a = e.stateNode = ah(
          e.type,
          e.pendingProps,
          tt.current
        ), Xt = e, Te = !0, u = Tt, bl(e.type) ? (af = u, Tt = Ae(a.firstChild)) : Tt = u), Qt(
          t,
          e,
          e.pendingProps.children,
          l
        ), mi(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && nt && ((u = a = Tt) && (a = Kd(
          a,
          e.type,
          e.pendingProps,
          Te
        ), a !== null ? (e.stateNode = a, Xt = e, Tt = Ae(a.firstChild), Te = !1, u = !0) : u = !1), u || il(e)), Ua(e), u = e.type, i = e.pendingProps, n = t !== null ? t.memoizedProps : null, a = i.children, Ic(u, i) ? a = null : n !== null && Ic(u, n) && (e.flags |= 32), e.memoizedState !== null && (u = $n(
          t,
          e,
          cd,
          null,
          null,
          l
        ), pu._currentValue = u), mi(t, e), Qt(t, e, a, l), e.child;
      case 6:
        return t === null && nt && ((t = l = Tt) && (l = Jd(
          l,
          e.pendingProps,
          Te
        ), l !== null ? (e.stateNode = l, Xt = e, Tt = null, t = !0) : t = !1), t || il(e)), null;
      case 13:
        return Zr(t, e, l);
      case 4:
        return Ft(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = ql(
          e,
          null,
          a,
          l
        ) : Qt(t, e, a, l), e.child;
      case 11:
        return Lr(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return Qt(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return Qt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return Qt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return a = e.pendingProps, nl(e, e.type, a.value), Qt(t, e, a.children, l), e.child;
      case 9:
        return u = e.type._context, a = e.pendingProps.children, Ll(e), u = wt(u), a = a(u), e.flags |= 1, Qt(t, e, a, l), e.child;
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
        return vd(t, e, l);
      case 22:
        return Gr(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return Ll(e), a = wt(Mt), t === null ? (u = Xn(), u === null && (u = pt, i = Gn(), u.pooledCache = i, i.refCount++, i !== null && (u.pooledCacheLanes |= l), u = i), e.memoizedState = { parent: a, cache: u }, Qn(e), nl(e, Mt, u)) : ((t.lanes & l) !== 0 && (Vn(t, e), tu(e, null, null, l), Pa()), u = t.memoizedState, i = e.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), nl(e, Mt, a)) : (a = i.cache, nl(e, Mt, a), a !== u.cache && Yn(
          e,
          [Mt],
          l,
          !0
        ))), Qt(
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
  function Ke(t) {
    t.flags |= 4;
  }
  function Rc(t, e, l, a, u) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (To()) t.flags |= 8192;
        else
          throw Gl = Iu, wn;
    } else t.flags &= -16777217;
  }
  function kr(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !oh(e))
      if (To()) t.flags |= 8192;
      else
        throw Gl = Iu, wn;
  }
  function vi(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? zf() : 536870912, t.lanes |= e, Ea |= e);
  }
  function nu(t, e) {
    if (!nt)
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
  function gd(t, e, l) {
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
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), we(Mt), _t(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (fa(e) ? Ke(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Cn())), xt(e), null;
      case 26:
        var u = e.type, i = e.memoizedState;
        return t === null ? (Ke(e), i !== null ? (xt(e), kr(e, i)) : (xt(e), Rc(
          e,
          u,
          null,
          a,
          l
        ))) : i ? i !== t.memoizedState ? (Ke(e), xt(e), kr(e, i)) : (xt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Ke(e), xt(e), Rc(
          e,
          u,
          t,
          a,
          l
        )), null;
      case 27:
        if (Du(e), l = tt.current, u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Ke(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return xt(e), null;
          }
          t = H.current, fa(e) ? zs(e) : (t = ah(u, a, l), e.stateNode = t, Ke(e));
        }
        return xt(e), null;
      case 5:
        if (Du(e), u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Ke(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return xt(e), null;
          }
          if (i = H.current, fa(e))
            zs(e);
          else {
            var n = Mi(
              tt.current
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
            i[qt] = e, i[$t] = a;
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
            t: switch (Vt(i, u, a), u) {
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
            a && Ke(e);
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
          t.memoizedProps !== a && Ke(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(f(166));
          if (t = tt.current, fa(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, u = Xt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            t[qt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Ko(t.nodeValue, l)), t || il(e, !0);
          } else
            t = Mi(t).createTextNode(
              a
            ), t[qt] = e, e.stateNode = t;
        }
        return xt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = fa(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(557));
              t[qt] = e;
            } else
              Bl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
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
              u[qt] = e;
            } else
              Bl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            xt(e), u = !1;
          } else
            u = Cn(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (re(e), e) : (re(e), null);
        }
        return re(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== u && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), vi(e, e.updateQueue), xt(e), null);
      case 4:
        return _t(), t === null && Jc(e.stateNode.containerInfo), xt(e), null;
      case 10:
        return we(e.type), xt(e), null;
      case 19:
        if (U(zt), a = e.memoizedState, a === null) return xt(e), null;
        if (u = (e.flags & 128) !== 0, i = a.rendering, i === null)
          if (u) nu(a, !1);
          else {
            if (Dt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = li(t), i !== null) {
                  for (e.flags |= 128, nu(a, !1), t = i.updateQueue, e.updateQueue = t, vi(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    xs(l, t), l = l.sibling;
                  return C(
                    zt,
                    zt.current & 1 | 2
                  ), nt && qe(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && ue() > pi && (e.flags |= 128, u = !0, nu(a, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = li(i), t !== null) {
              if (e.flags |= 128, u = !0, t = t.updateQueue, e.updateQueue = t, vi(e, t), nu(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !nt)
                return xt(e), null;
            } else
              2 * ue() - a.renderingStartTime > pi && l !== 536870912 && (e.flags |= 128, u = !0, nu(a, !1), e.lanes = 4194304);
          a.isBackwards ? (i.sibling = e.child, e.child = i) : (t = a.last, t !== null ? t.sibling = i : e.child = i, a.last = i);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ue(), t.sibling = null, l = zt.current, C(
          zt,
          u ? l & 1 | 2 : l & 1
        ), nt && qe(e, a.treeForkCount), t) : (xt(e), null);
      case 22:
      case 23:
        return re(e), Fn(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (xt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : xt(e), l = e.updateQueue, l !== null && vi(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && U(Hl), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), we(Mt), xt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function Sd(t, e) {
    switch (jn(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return we(Mt), _t(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Du(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (re(e), e.alternate === null)
            throw Error(f(340));
          Bl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (re(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(f(340));
          Bl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return U(zt), null;
      case 4:
        return _t(), null;
      case 10:
        return we(e.type), null;
      case 22:
      case 23:
        return re(e), Fn(), t !== null && U(Hl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return we(Mt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Wr(t, e) {
    switch (jn(e), e.tag) {
      case 3:
        we(Mt), _t();
        break;
      case 26:
      case 27:
      case 5:
        Du(e);
        break;
      case 4:
        _t();
        break;
      case 31:
        e.memoizedState !== null && re(e);
        break;
      case 13:
        re(e);
        break;
      case 19:
        U(zt);
        break;
      case 10:
        we(e.type);
        break;
      case 22:
      case 23:
        re(e), Fn(), t !== null && U(Hl);
        break;
      case 24:
        we(Mt);
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
      ht(e, e.return, r);
    }
  }
  function hl(t, e, l) {
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
              var h = l, E = r;
              try {
                E();
              } catch (D) {
                ht(
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
      ht(e, e.return, D);
    }
  }
  function $r(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Xs(e, l);
      } catch (a) {
        ht(t, t.return, a);
      }
    }
  }
  function Ir(t, e, l) {
    l.props = wl(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      ht(t, e, a);
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
      ht(t, e, u);
    }
  }
  function je(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          ht(t, e, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          ht(t, e, u);
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
      ht(t, t.return, u);
    }
  }
  function Dc(t, e, l) {
    try {
      var a = t.stateNode;
      qd(a, t.type, l, e), a[$t] = e;
    } catch (u) {
      ht(t, t.return, u);
    }
  }
  function to(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && bl(t.type) || t.tag === 4;
  }
  function _c(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || to(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && bl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function zc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = He));
    else if (a !== 4 && (a === 27 && bl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (zc(t, e, l), t = t.sibling; t !== null; )
        zc(t, e, l), t = t.sibling;
  }
  function yi(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && bl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (yi(t, e, l), t = t.sibling; t !== null; )
        yi(t, e, l), t = t.sibling;
  }
  function eo(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      Vt(e, a, l), e[qt] = t, e[$t] = l;
    } catch (i) {
      ht(t, t.return, i);
    }
  }
  var Je = !1, jt = !1, Oc = !1, lo = typeof WeakSet == "function" ? WeakSet : Set, Ht = null;
  function bd(t, e) {
    if (t = t.containerInfo, Wc = Hi, t = ds(t), Tn(t)) {
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
            var n = 0, r = -1, h = -1, E = 0, D = 0, M = t, T = null;
            e: for (; ; ) {
              for (var R; M !== l || u !== 0 && M.nodeType !== 3 || (r = n + u), M !== i || a !== 0 && M.nodeType !== 3 || (h = n + a), M.nodeType === 3 && (n += M.nodeValue.length), (R = M.firstChild) !== null; )
                T = M, M = R;
              for (; ; ) {
                if (M === t) break e;
                if (T === l && ++E === u && (r = n), T === i && ++D === a && (h = n), (R = M.nextSibling) !== null) break;
                M = T, T = M.parentNode;
              }
              M = R;
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
                  var L = wl(
                    l.type,
                    u
                  );
                  t = a.getSnapshotBeforeUpdate(
                    L,
                    i
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (q) {
                  ht(
                    l,
                    l.return,
                    q
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
        ke(t, l), a & 4 && cu(5, l);
        break;
      case 1:
        if (ke(t, l), a & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (n) {
              ht(l, l.return, n);
            }
          else {
            var u = wl(
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
              ht(
                l,
                l.return,
                n
              );
            }
          }
        a & 64 && $r(l), a & 512 && fu(l, l.return);
        break;
      case 3:
        if (ke(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
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
            ht(l, l.return, n);
          }
        }
        break;
      case 27:
        e === null && a & 4 && eo(l);
      case 26:
      case 5:
        ke(t, l), e === null && a & 4 && Pr(l), a & 512 && fu(l, l.return);
        break;
      case 12:
        ke(t, l);
        break;
      case 31:
        ke(t, l), a & 4 && no(t, l);
        break;
      case 13:
        ke(t, l), a & 4 && co(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = zd.bind(
          null,
          l
        ), Fd(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Je, !a) {
          e = e !== null && e.memoizedState !== null || jt, u = Je;
          var i = jt;
          Je = a, (jt = e) && !i ? We(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : ke(t, l), Je = u, jt = i;
        }
        break;
      case 30:
        break;
      default:
        ke(t, l);
    }
  }
  function uo(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, uo(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && un(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var At = null, Pt = !1;
  function Fe(t, e, l) {
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
        jt || je(l, e), Fe(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        jt || je(l, e);
        var a = At, u = Pt;
        bl(l.type) && (At = l.stateNode, Pt = !1), Fe(
          t,
          e,
          l
        ), gu(l.stateNode), At = a, Pt = u;
        break;
      case 5:
        jt || je(l, e);
      case 6:
        if (a = At, u = Pt, At = null, Fe(
          t,
          e,
          l
        ), At = a, Pt = u, At !== null)
          if (Pt)
            try {
              (At.nodeType === 9 ? At.body : At.nodeName === "HTML" ? At.ownerDocument.body : At).removeChild(l.stateNode);
            } catch (i) {
              ht(
                l,
                e,
                i
              );
            }
          else
            try {
              At.removeChild(l.stateNode);
            } catch (i) {
              ht(
                l,
                e,
                i
              );
            }
        break;
      case 18:
        At !== null && (Pt ? (t = At, Io(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Oa(t)) : Io(At, l.stateNode));
        break;
      case 4:
        a = At, u = Pt, At = l.stateNode.containerInfo, Pt = !0, Fe(
          t,
          e,
          l
        ), At = a, Pt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        hl(2, l, e), jt || hl(4, l, e), Fe(
          t,
          e,
          l
        );
        break;
      case 1:
        jt || (je(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && Ir(
          l,
          e,
          a
        )), Fe(
          t,
          e,
          l
        );
        break;
      case 21:
        Fe(
          t,
          e,
          l
        );
        break;
      case 22:
        jt = (a = jt) || l.memoizedState !== null, Fe(
          t,
          e,
          l
        ), jt = a;
        break;
      default:
        Fe(
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
        ht(e, e.return, l);
      }
    }
  }
  function co(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Oa(t);
      } catch (l) {
        ht(e, e.return, l);
      }
  }
  function pd(t) {
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
    var l = pd(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var u = Od.bind(null, t, a);
        a.then(u, u);
      }
    });
  }
  function te(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var u = l[a], i = t, n = e, r = n;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (bl(r.type)) {
                At = r.stateNode, Pt = !1;
                break t;
              }
              break;
            case 5:
              At = r.stateNode, Pt = !1;
              break t;
            case 3:
            case 4:
              At = r.stateNode.containerInfo, Pt = !0;
              break t;
          }
          r = r.return;
        }
        if (At === null) throw Error(f(160));
        io(i, n, u), At = null, Pt = !1, i = u.alternate, i !== null && (i.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        fo(e, t), e = e.sibling;
  }
  var ze = null;
  function fo(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        te(e, t), ee(t), a & 4 && (hl(3, t, t.return), cu(3, t), hl(5, t, t.return));
        break;
      case 1:
        te(e, t), ee(t), a & 512 && (jt || l === null || je(l, l.return)), a & 64 && Je && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var u = ze;
        if (te(e, t), ee(t), a & 512 && (jt || l === null || je(l, l.return)), a & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, l = t.memoizedProps, u = u.ownerDocument || u;
                  e: switch (a) {
                    case "title":
                      i = u.getElementsByTagName("title")[0], (!i || i[Ca] || i[qt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = u.createElement(a), u.head.insertBefore(
                        i,
                        u.querySelector("head > title")
                      )), Vt(i, a, l), i[qt] = t, Lt(i), a = i;
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
                      i = u.createElement(a), Vt(i, a, l), u.head.appendChild(i);
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
                      i = u.createElement(a), Vt(i, a, l), u.head.appendChild(i);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  i[qt] = t, Lt(i), a = i;
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
        te(e, t), ee(t), a & 512 && (jt || l === null || je(l, l.return)), l !== null && a & 4 && Dc(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (te(e, t), ee(t), a & 512 && (jt || l === null || je(l, l.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            Il(u, "");
          } catch (L) {
            ht(t, t.return, L);
          }
        }
        a & 4 && t.stateNode != null && (u = t.memoizedProps, Dc(
          t,
          u,
          l !== null ? l.memoizedProps : u
        )), a & 1024 && (Oc = !0);
        break;
      case 6:
        if (te(e, t), ee(t), a & 4) {
          if (t.stateNode === null)
            throw Error(f(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (L) {
            ht(t, t.return, L);
          }
        }
        break;
      case 3:
        if (ji = null, u = ze, ze = Ui(e.containerInfo), te(e, t), ze = u, ee(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Oa(e.containerInfo);
          } catch (L) {
            ht(t, t.return, L);
          }
        Oc && (Oc = !1, so(t));
        break;
      case 4:
        a = ze, ze = Ui(
          t.stateNode.containerInfo
        ), te(e, t), ee(t), ze = a;
        break;
      case 12:
        te(e, t), ee(t);
        break;
      case 31:
        te(e, t), ee(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, gi(t, a)));
        break;
      case 13:
        te(e, t), ee(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (bi = ue()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, gi(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null, E = Je, D = jt;
        if (Je = E || u, jt = D || h, te(e, t), jt = D, Je = E, ee(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (l === null || h || Je || jt || Ql(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (i = h.stateNode, u)
                    n = i.style, typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none";
                  else {
                    r = h.stateNode;
                    var M = h.memoizedProps.style, T = M != null && M.hasOwnProperty("display") ? M.display : null;
                    r.style.display = T == null || typeof T == "boolean" ? "" : ("" + T).trim();
                  }
                } catch (L) {
                  ht(h, h.return, L);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = u ? "" : h.memoizedProps;
                } catch (L) {
                  ht(h, h.return, L);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                h = e;
                try {
                  var R = h.stateNode;
                  u ? Po(R, !0) : Po(h.stateNode, !1);
                } catch (L) {
                  ht(h, h.return, L);
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
        te(e, t), ee(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, gi(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        te(e, t), ee(t);
    }
  }
  function ee(t) {
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
            var h = l.stateNode.containerInfo, E = _c(t);
            zc(
              t,
              E,
              h
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (D) {
        ht(t, t.return, D);
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
  function ke(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        ao(t, e.alternate, e), e = e.sibling;
  }
  function Ql(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          hl(4, e, e.return), Ql(e);
          break;
        case 1:
          je(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Ir(
            e,
            e.return,
            l
          ), Ql(e);
          break;
        case 27:
          gu(e.stateNode);
        case 26:
        case 5:
          je(e, e.return), Ql(e);
          break;
        case 22:
          e.memoizedState === null && Ql(e);
          break;
        case 30:
          Ql(e);
          break;
        default:
          Ql(e);
      }
      t = t.sibling;
    }
  }
  function We(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, u = t, i = e, n = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          We(
            u,
            i,
            l
          ), cu(4, i);
          break;
        case 1:
          if (We(
            u,
            i,
            l
          ), a = i, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (E) {
              ht(a, a.return, E);
            }
          if (a = i, u = a.updateQueue, u !== null) {
            var r = a.stateNode;
            try {
              var h = u.shared.hiddenCallbacks;
              if (h !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < h.length; u++)
                  qs(h[u], r);
            } catch (E) {
              ht(a, a.return, E);
            }
          }
          l && n & 64 && $r(i), fu(i, i.return);
          break;
        case 27:
          eo(i);
        case 26:
        case 5:
          We(
            u,
            i,
            l
          ), l && a === null && n & 4 && Pr(i), fu(i, i.return);
          break;
        case 12:
          We(
            u,
            i,
            l
          );
          break;
        case 31:
          We(
            u,
            i,
            l
          ), l && n & 4 && no(u, i);
          break;
        case 13:
          We(
            u,
            i,
            l
          ), l && n & 4 && co(u, i);
          break;
        case 22:
          i.memoizedState === null && We(
            u,
            i,
            l
          ), fu(i, i.return);
          break;
        case 30:
          break;
        default:
          We(
            u,
            i,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Mc(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Fa(l));
  }
  function Uc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Fa(t));
  }
  function Oe(t, e, l, a) {
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
        Oe(
          t,
          e,
          l,
          a
        ), u & 2048 && cu(9, e);
        break;
      case 1:
        Oe(
          t,
          e,
          l,
          a
        );
        break;
      case 3:
        Oe(
          t,
          e,
          l,
          a
        ), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Fa(t)));
        break;
      case 12:
        if (u & 2048) {
          Oe(
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
            ht(e, e.return, h);
          }
        } else
          Oe(
            t,
            e,
            l,
            a
          );
        break;
      case 31:
        Oe(
          t,
          e,
          l,
          a
        );
        break;
      case 13:
        Oe(
          t,
          e,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, n = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? Oe(
          t,
          e,
          l,
          a
        ) : su(t, e) : i._visibility & 2 ? Oe(
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
        )), u & 2048 && Mc(n, e);
        break;
      case 24:
        Oe(
          t,
          e,
          l,
          a
        ), u & 2048 && Uc(e.alternate, e);
        break;
      default:
        Oe(
          t,
          e,
          l,
          a
        );
    }
  }
  function Sa(t, e, l, a, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, n = e, r = l, h = a, E = n.flags;
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
          )), u && E & 2048 && Mc(
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
          ), u && E & 2048 && Uc(n.alternate, n);
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
            su(l, a), u & 2048 && Mc(
              a.alternate,
              a
            );
            break;
          case 24:
            su(l, a), u & 2048 && Uc(a.alternate, a);
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
        ), t.flags & ru && t.memoizedState !== null && nv(
          l,
          ze,
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
        var a = ze;
        ze = Ui(t.stateNode.containerInfo), ba(
          t,
          e,
          l
        ), ze = a;
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
        ou(t), t.flags & 2048 && hl(9, t, t.return);
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
          hl(8, e, e.return), Si(e);
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
          hl(8, l, e);
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
  var Ed = {
    getCacheForType: function(t) {
      var e = wt(Mt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return wt(Mt).controller.signal;
    }
  }, Td = typeof WeakMap == "function" ? WeakMap : Map, st = 0, pt = null, et = null, at = 0, ot = 0, oe = null, ml = !1, pa = !1, Nc = !1, $e = 0, Dt = 0, dl = 0, Vl = 0, jc = 0, he = 0, Ea = 0, hu = null, le = null, Bc = !1, bi = 0, yo = 0, pi = 1 / 0, Ei = null, vl = null, Ct = 0, yl = null, Ta = null, Ie = 0, Cc = 0, Lc = null, go = null, mu = 0, Hc = null;
  function me() {
    return (st & 2) !== 0 && at !== 0 ? at & -at : _.T !== null ? Qc() : Nf();
  }
  function So() {
    if (he === 0)
      if ((at & 536870912) === 0 || nt) {
        var t = Ou;
        Ou <<= 1, (Ou & 3932160) === 0 && (Ou = 262144), he = t;
      } else he = 536870912;
    return t = se.current, t !== null && (t.flags |= 32), he;
  }
  function ae(t, e, l) {
    (t === pt && (ot === 2 || ot === 9) || t.cancelPendingCommit !== null) && (xa(t, 0), gl(
      t,
      at,
      he,
      !1
    )), Ba(t, l), ((st & 2) === 0 || t !== pt) && (t === pt && ((st & 2) === 0 && (Vl |= l), Dt === 4 && gl(
      t,
      at,
      he,
      !1
    )), Be(t));
  }
  function bo(t, e, l) {
    if ((st & 6) !== 0) throw Error(f(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ja(t, e), u = a ? Rd(t, e) : Gc(t, e, !0), i = a;
    do {
      if (u === 0) {
        pa && !a && gl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, i && !xd(l)) {
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
                  r.errorRecoveryDisabledLanes |= i, Vl |= i, u = 4;
                  break t;
                }
                i = le, le = u, i !== null && (le === null ? le = i : le.push.apply(
                  le,
                  i
                ));
              }
              u = n;
            }
            if (i = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          xa(t, 0), gl(t, e, 0, !0);
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
              gl(
                a,
                e,
                he,
                !ml
              );
              break t;
            case 2:
              le = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (u = bi + 300 - ue(), 10 < u)) {
            if (gl(
              a,
              e,
              he,
              !ml
            ), Uu(a, 0, !0) !== 0) break t;
            Ie = e, a.timeoutHandle = Wo(
              po.bind(
                null,
                a,
                l,
                le,
                Ei,
                Bc,
                e,
                he,
                Vl,
                Ea,
                ml,
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
            le,
            Ei,
            Bc,
            e,
            he,
            Vl,
            Ea,
            ml,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Be(t);
  }
  function po(t, e, l, a, u, i, n, r, h, E, D, M, T, R) {
    if (t.timeoutHandle = -1, M = e.subtreeFlags, M & 8192 || (M & 16785408) === 16785408) {
      M = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: He
      }, oo(
        e,
        i,
        M
      );
      var L = (i & 62914560) === i ? bi - ue() : (i & 4194048) === i ? yo - ue() : 0;
      if (L = cv(
        M,
        L
      ), L !== null) {
        Ie = i, t.cancelPendingCommit = L(
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
            M,
            null,
            T,
            R
          )
        ), gl(t, i, n, !E);
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
  function xd(t) {
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
  function gl(t, e, l, a) {
    e &= ~jc, e &= ~Vl, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var i = 31 - ne(u), n = 1 << i;
      a[i] = -1, u &= ~n;
    }
    l !== 0 && Of(t, l, e);
  }
  function Ti() {
    return (st & 6) === 0 ? (du(0), !1) : !0;
  }
  function Yc() {
    if (et !== null) {
      if (ot === 0)
        var t = et.return;
      else
        t = et, Xe = Cl = null, tc(t), ma = null, Wa = 0, t = et;
      for (; t !== null; )
        Wr(t.alternate, t), t = t.return;
      et = null;
    }
  }
  function xa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Qd(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Ie = 0, Yc(), pt = t, et = l = Ge(t.current, null), at = e, ot = 0, oe = null, ml = !1, pa = ja(t, e), Nc = !1, Ea = he = jc = Vl = dl = Dt = 0, le = hu = null, Bc = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var u = 31 - ne(a), i = 1 << u;
        e |= t[u], a &= ~i;
      }
    return $e = e, Qu(), l;
  }
  function Eo(t, e) {
    J = null, _.H = uu, e === ha || e === $u ? (e = Ls(), ot = 3) : e === wn ? (e = Ls(), ot = 4) : ot = e === yc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, oe = e, et === null && (Dt = 1, oi(
      t,
      be(e, t.current)
    ));
  }
  function To() {
    var t = se.current;
    return t === null ? !0 : (at & 4194048) === at ? xe === null : (at & 62914560) === at || (at & 536870912) !== 0 ? t === xe : !1;
  }
  function xo() {
    var t = _.H;
    return _.H = uu, t === null ? uu : t;
  }
  function Ao() {
    var t = _.A;
    return _.A = Ed, t;
  }
  function xi() {
    Dt = 4, ml || (at & 4194048) !== at && se.current !== null || (pa = !0), (dl & 134217727) === 0 && (Vl & 134217727) === 0 || pt === null || gl(
      pt,
      at,
      he,
      !1
    );
  }
  function Gc(t, e, l) {
    var a = st;
    st |= 2;
    var u = xo(), i = Ao();
    (pt !== t || at !== e) && (Ei = null, xa(t, e)), e = !1;
    var n = Dt;
    t: do
      try {
        if (ot !== 0 && et !== null) {
          var r = et, h = oe;
          switch (ot) {
            case 8:
              Yc(), n = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              se.current === null && (e = !0);
              var E = ot;
              if (ot = 0, oe = null, Aa(t, r, h, E), l && pa) {
                n = 0;
                break t;
              }
              break;
            default:
              E = ot, ot = 0, oe = null, Aa(t, r, h, E);
          }
        }
        Ad(), n = Dt;
        break;
      } catch (D) {
        Eo(t, D);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Xe = Cl = null, st = a, _.H = u, _.A = i, et === null && (pt = null, at = 0, Qu()), n;
  }
  function Ad() {
    for (; et !== null; ) Ro(et);
  }
  function Rd(t, e) {
    var l = st;
    st |= 2;
    var a = xo(), u = Ao();
    pt !== t || at !== e ? (Ei = null, pi = ue() + 500, xa(t, e)) : pa = ja(
      t,
      e
    );
    t: do
      try {
        if (ot !== 0 && et !== null) {
          e = et;
          var i = oe;
          e: switch (ot) {
            case 1:
              ot = 0, oe = null, Aa(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (Bs(i)) {
                ot = 0, oe = null, Do(e);
                break;
              }
              e = function() {
                ot !== 2 && ot !== 9 || pt !== t || (ot = 7), Be(t);
              }, i.then(e, e);
              break t;
            case 3:
              ot = 7;
              break t;
            case 4:
              ot = 5;
              break t;
            case 7:
              Bs(i) ? (ot = 0, oe = null, Do(e)) : (ot = 0, oe = null, Aa(t, e, i, 7));
              break;
            case 5:
              var n = null;
              switch (et.tag) {
                case 26:
                  n = et.memoizedState;
                case 5:
                case 27:
                  var r = et;
                  if (n ? oh(n) : r.stateNode.complete) {
                    ot = 0, oe = null;
                    var h = r.sibling;
                    if (h !== null) et = h;
                    else {
                      var E = r.return;
                      E !== null ? (et = E, Ai(E)) : et = null;
                    }
                    break e;
                  }
              }
              ot = 0, oe = null, Aa(t, e, i, 5);
              break;
            case 6:
              ot = 0, oe = null, Aa(t, e, i, 6);
              break;
            case 8:
              Yc(), Dt = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        Dd();
        break;
      } catch (D) {
        Eo(t, D);
      }
    while (!0);
    return Xe = Cl = null, _.H = a, _.A = u, st = l, et !== null ? 0 : (pt = null, at = 0, Qu(), Dt);
  }
  function Dd() {
    for (; et !== null && !kh(); )
      Ro(et);
  }
  function Ro(t) {
    var e = Fr(t.alternate, t, $e);
    t.memoizedProps = t.pendingProps, e === null ? Ai(t) : et = e;
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
          at
        );
        break;
      case 11:
        e = wr(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          at
        );
        break;
      case 5:
        tc(e);
      default:
        Wr(l, e), e = et = xs(e, $e), e = Fr(l, e, $e);
    }
    t.memoizedProps = t.pendingProps, e === null ? Ai(t) : et = e;
  }
  function Aa(t, e, l, a) {
    Xe = Cl = null, tc(e), ma = null, Wa = 0;
    var u = e.return;
    try {
      if (dd(
        t,
        u,
        e,
        l,
        at
      )) {
        Dt = 1, oi(
          t,
          be(l, t.current)
        ), et = null;
        return;
      }
    } catch (i) {
      if (u !== null) throw et = u, i;
      Dt = 1, oi(
        t,
        be(l, t.current)
      ), et = null;
      return;
    }
    e.flags & 32768 ? (nt || a === 1 ? t = !0 : pa || (at & 536870912) !== 0 ? t = !1 : (ml = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = se.current, a !== null && a.tag === 13 && (a.flags |= 16384))), _o(e, t)) : Ai(e);
  }
  function Ai(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        _o(
          e,
          ml
        );
        return;
      }
      t = e.return;
      var l = gd(
        e.alternate,
        e,
        $e
      );
      if (l !== null) {
        et = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        et = e;
        return;
      }
      et = e = t;
    } while (e !== null);
    Dt === 0 && (Dt = 5);
  }
  function _o(t, e) {
    do {
      var l = Sd(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, et = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        et = t;
        return;
      }
      et = t = l;
    } while (t !== null);
    Dt = 6, et = null;
  }
  function zo(t, e, l, a, u, i, n, r, h) {
    t.cancelPendingCommit = null;
    do
      Ri();
    while (Ct !== 0);
    if ((st & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (i = e.lanes | e.childLanes, i |= _n, im(
        t,
        l,
        i,
        n,
        r,
        h
      ), t === pt && (et = pt = null, at = 0), Ta = e, yl = t, Ie = l, Cc = i, Lc = u, go = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Md(_u, function() {
        return jo(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = _.T, _.T = null, u = B.p, B.p = 2, n = st, st |= 4;
        try {
          bd(t, e, l);
        } finally {
          st = n, B.p = u, _.T = a;
        }
      }
      Ct = 1, Oo(), Mo(), Uo();
    }
  }
  function Oo() {
    if (Ct === 1) {
      Ct = 0;
      var t = yl, e = Ta, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = _.T, _.T = null;
        var a = B.p;
        B.p = 2;
        var u = st;
        st |= 4;
        try {
          fo(e, t);
          var i = $c, n = ds(t.containerInfo), r = i.focusedElem, h = i.selectionRange;
          if (n !== r && r && r.ownerDocument && ms(
            r.ownerDocument.documentElement,
            r
          )) {
            if (h !== null && Tn(r)) {
              var E = h.start, D = h.end;
              if (D === void 0 && (D = E), "selectionStart" in r)
                r.selectionStart = E, r.selectionEnd = Math.min(
                  D,
                  r.value.length
                );
              else {
                var M = r.ownerDocument || document, T = M && M.defaultView || window;
                if (T.getSelection) {
                  var R = T.getSelection(), L = r.textContent.length, q = Math.min(h.start, L), gt = h.end === void 0 ? q : Math.min(h.end, L);
                  !R.extend && q > gt && (n = gt, gt = q, q = n);
                  var S = hs(
                    r,
                    q
                  ), v = hs(
                    r,
                    gt
                  );
                  if (S && v && (R.rangeCount !== 1 || R.anchorNode !== S.node || R.anchorOffset !== S.offset || R.focusNode !== v.node || R.focusOffset !== v.offset)) {
                    var p = M.createRange();
                    p.setStart(S.node, S.offset), R.removeAllRanges(), q > gt ? (R.addRange(p), R.extend(v.node, v.offset)) : (p.setEnd(v.node, v.offset), R.addRange(p));
                  }
                }
              }
            }
            for (M = [], R = r; R = R.parentNode; )
              R.nodeType === 1 && M.push({
                element: R,
                left: R.scrollLeft,
                top: R.scrollTop
              });
            for (typeof r.focus == "function" && r.focus(), r = 0; r < M.length; r++) {
              var O = M[r];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
            }
          }
          Hi = !!Wc, $c = Wc = null;
        } finally {
          st = u, B.p = a, _.T = l;
        }
      }
      t.current = e, Ct = 2;
    }
  }
  function Mo() {
    if (Ct === 2) {
      Ct = 0;
      var t = yl, e = Ta, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = _.T, _.T = null;
        var a = B.p;
        B.p = 2;
        var u = st;
        st |= 4;
        try {
          ao(t, e.alternate, e);
        } finally {
          st = u, B.p = a, _.T = l;
        }
      }
      Ct = 3;
    }
  }
  function Uo() {
    if (Ct === 4 || Ct === 3) {
      Ct = 0, Wh();
      var t = yl, e = Ta, l = Ie, a = go;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Ct = 5 : (Ct = 0, Ta = yl = null, No(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (vl = null), ln(l), e = e.stateNode, ie && typeof ie.onCommitFiberRoot == "function")
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
        e = _.T, u = B.p, B.p = 2, _.T = null;
        try {
          for (var i = t.onRecoverableError, n = 0; n < a.length; n++) {
            var r = a[n];
            i(r.value, {
              componentStack: r.stack
            });
          }
        } finally {
          _.T = e, B.p = u;
        }
      }
      (Ie & 3) !== 0 && Ri(), Be(t), u = t.pendingLanes, (l & 261930) !== 0 && (u & 42) !== 0 ? t === Hc ? mu++ : (mu = 0, Hc = t) : mu = 0, du(0);
    }
  }
  function No(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Fa(e)));
  }
  function Ri() {
    return Oo(), Mo(), Uo(), jo();
  }
  function jo() {
    if (Ct !== 5) return !1;
    var t = yl, e = Cc;
    Cc = 0;
    var l = ln(Ie), a = _.T, u = B.p;
    try {
      B.p = 32 > l ? 32 : l, _.T = null, l = Lc, Lc = null;
      var i = yl, n = Ie;
      if (Ct = 0, Ta = yl = null, Ie = 0, (st & 6) !== 0) throw Error(f(331));
      var r = st;
      if (st |= 4, mo(i.current), ro(
        i,
        i.current,
        n,
        l
      ), st = r, du(0, !1), ie && typeof ie.onPostCommitFiberRoot == "function")
        try {
          ie.onPostCommitFiberRoot(Na, i);
        } catch {
        }
      return !0;
    } finally {
      B.p = u, _.T = a, No(t, e);
    }
  }
  function Bo(t, e, l) {
    e = be(l, e), e = vc(t.stateNode, e, 2), t = sl(t, e, 2), t !== null && (Ba(t, 2), Be(t));
  }
  function ht(t, e, l) {
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
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (vl === null || !vl.has(a))) {
            t = be(l, t), l = Br(2), a = sl(e, l, 2), a !== null && (Cr(
              l,
              a,
              e,
              t
            ), Ba(a, 2), Be(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function qc(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Td();
      var u = /* @__PURE__ */ new Set();
      a.set(e, u);
    } else
      u = a.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(e, u));
    u.has(l) || (Nc = !0, u.add(l), t = _d.bind(null, t, e, l), e.then(t, t));
  }
  function _d(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, pt === t && (at & l) === l && (Dt === 4 || Dt === 3 && (at & 62914560) === at && 300 > ue() - bi ? (st & 2) === 0 && xa(t, 0) : jc |= l, Ea === at && (Ea = 0)), Be(t);
  }
  function Co(t, e) {
    e === 0 && (e = zf()), t = Nl(t, e), t !== null && (Ba(t, e), Be(t));
  }
  function zd(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), Co(t, l);
  }
  function Od(t, e) {
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
  function Md(t, e) {
    return Ii(t, e);
  }
  var Di = null, Ra = null, Xc = !1, _i = !1, wc = !1, Sl = 0;
  function Be(t) {
    t !== Ra && t.next === null && (Ra === null ? Di = Ra = t : Ra = Ra.next = t), _i = !0, Xc || (Xc = !0, Nd());
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
            i = at, i = Uu(
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
  function Ud() {
    Lo();
  }
  function Lo() {
    _i = Xc = !1;
    var t = 0;
    Sl !== 0 && wd() && (t = Sl);
    for (var e = ue(), l = null, a = Di; a !== null; ) {
      var u = a.next, i = Ho(a, e);
      i === 0 ? (a.next = null, l === null ? Di = u : l.next = u, u === null && (Ra = l)) : (l = a, (t !== 0 || (i & 3) !== 0) && (_i = !0)), a = u;
    }
    Ct !== 0 && Ct !== 5 || du(t), Sl !== 0 && (Sl = 0);
  }
  function Ho(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var n = 31 - ne(i), r = 1 << n, h = u[n];
      h === -1 ? ((r & l) === 0 || (r & a) !== 0) && (u[n] = um(r, e)) : h <= e && (t.expiredLanes |= r), i &= ~r;
    }
    if (e = pt, l = at, l = Uu(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (ot === 2 || ot === 9) || t.cancelPendingCommit !== null)
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
    var a = at;
    return a = Uu(
      t,
      t === pt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (bo(t, a, e), Ho(t, ue()), t.callbackNode != null && t.callbackNode === l ? Yo.bind(null, t) : null);
  }
  function Go(t, e) {
    if (Ri()) return null;
    bo(t, e, !0);
  }
  function Nd() {
    Vd(function() {
      (st & 6) !== 0 ? Ii(
        Rf,
        Ud
      ) : Lo();
    });
  }
  function Qc() {
    if (Sl === 0) {
      var t = ra;
      t === 0 && (t = zu, zu <<= 1, (zu & 261888) === 0 && (zu = 256)), Sl = t;
    }
    return Sl;
  }
  function qo(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Cu("" + t);
  }
  function Xo(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function jd(t, e, l, a, u) {
    if (e === "submit" && l && l.stateNode === u) {
      var i = qo(
        (u[$t] || null).action
      ), n = a.submitter;
      n && (e = (e = n[$t] || null) ? qo(e.formAction) : n.getAttribute("formAction"), e !== null && (i = e, n = null));
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
                if (Sl !== 0) {
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
    var Zc = Dn[Vc], Bd = Zc.toLowerCase(), Cd = Zc[0].toUpperCase() + Zc.slice(1);
    _e(
      Bd,
      "on" + Cd
    );
  }
  _e(gs, "onAnimationEnd"), _e(Ss, "onAnimationIteration"), _e(bs, "onAnimationStart"), _e("dblclick", "onDoubleClick"), _e("focusin", "onFocus"), _e("focusout", "onBlur"), _e($m, "onTransitionRun"), _e(Im, "onTransitionStart"), _e(Pm, "onTransitionCancel"), _e(ps, "onTransitionEnd"), Wl("onMouseEnter", ["mouseout", "mouseover"]), Wl("onMouseLeave", ["mouseout", "mouseover"]), Wl("onPointerEnter", ["pointerout", "pointerover"]), Wl("onPointerLeave", ["pointerout", "pointerover"]), zl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), zl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), zl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), zl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), zl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), zl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var vu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ld = new Set(
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
            var r = a[n], h = r.instance, E = r.currentTarget;
            if (r = r.listener, h !== i && u.isPropagationStopped())
              break t;
            i = r, u.currentTarget = E;
            try {
              i(u);
            } catch (D) {
              wu(D);
            }
            u.currentTarget = null, i = h;
          }
        else
          for (n = 0; n < a.length; n++) {
            if (r = a[n], h = r.instance, E = r.currentTarget, r = r.listener, h !== i && u.isPropagationStopped())
              break t;
            i = r, u.currentTarget = E;
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
  function lt(t, e) {
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
        l !== "selectionchange" && (Ld.has(l) || Kc(l, !1, t), Kc(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[zi] || (e[zi] = !0, Kc("selectionchange", !1, e));
    }
  }
  function Qo(t, e, l, a) {
    switch (Sh(e)) {
      case 2:
        var u = rv;
        break;
      case 8:
        u = ov;
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
      var E = i, D = on(l), M = [];
      t: {
        var T = Es.get(t);
        if (T !== void 0) {
          var R = Gu, L = t;
          switch (t) {
            case "keypress":
              if (Hu(l) === 0) break t;
            case "keydown":
            case "keyup":
              R = Om;
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
              R = gm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = Nm;
              break;
            case gs:
            case Ss:
            case bs:
              R = pm;
              break;
            case ps:
              R = Bm;
              break;
            case "scroll":
            case "scrollend":
              R = vm;
              break;
            case "wheel":
              R = Lm;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = Tm;
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
              R = Ym;
          }
          var q = (e & 4) !== 0, gt = !q && (t === "scroll" || t === "scrollend"), S = q ? T !== null ? T + "Capture" : null : T;
          q = [];
          for (var v = E, p; v !== null; ) {
            var O = v;
            if (p = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || p === null || S === null || (O = Ha(v, S), O != null && q.push(
              yu(v, O, p)
            )), gt) break;
            v = v.return;
          }
          0 < q.length && (T = new R(
            T,
            L,
            null,
            l,
            D
          ), M.push({ event: T, listeners: q }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (T = t === "mouseover" || t === "pointerover", R = t === "mouseout" || t === "pointerout", T && l !== rn && (L = l.relatedTarget || l.fromElement) && (Jl(L) || L[Kl]))
            break t;
          if ((R || T) && (T = D.window === D ? D : (T = D.ownerDocument) ? T.defaultView || T.parentWindow : window, R ? (L = l.relatedTarget || l.toElement, R = E, L = L ? Jl(L) : null, L !== null && (gt = g(L), q = L.tag, L !== gt || q !== 5 && q !== 27 && q !== 6) && (L = null)) : (R = null, L = E), R !== L)) {
            if (q = Wf, O = "onMouseLeave", S = "onMouseEnter", v = "mouse", (t === "pointerout" || t === "pointerover") && (q = If, O = "onPointerLeave", S = "onPointerEnter", v = "pointer"), gt = R == null ? T : La(R), p = L == null ? T : La(L), T = new q(
              O,
              v + "leave",
              R,
              l,
              D
            ), T.target = gt, T.relatedTarget = p, O = null, Jl(D) === E && (q = new q(
              S,
              v + "enter",
              L,
              l,
              D
            ), q.target = p, q.relatedTarget = gt, O = q), gt = O, R && L)
              e: {
                for (q = Hd, S = R, v = L, p = 0, O = S; O; O = q(O))
                  p++;
                O = 0;
                for (var G = v; G; G = q(G))
                  O++;
                for (; 0 < p - O; )
                  S = q(S), p--;
                for (; 0 < O - p; )
                  v = q(v), O--;
                for (; p--; ) {
                  if (S === v || v !== null && S === v.alternate) {
                    q = S;
                    break e;
                  }
                  S = q(S), v = q(v);
                }
                q = null;
              }
            else q = null;
            R !== null && Vo(
              M,
              T,
              R,
              q,
              !1
            ), L !== null && gt !== null && Vo(
              M,
              gt,
              L,
              q,
              !0
            );
          }
        }
        t: {
          if (T = E ? La(E) : window, R = T.nodeName && T.nodeName.toLowerCase(), R === "select" || R === "input" && T.type === "file")
            var ct = ns;
          else if (us(T))
            if (cs)
              ct = Fm;
            else {
              ct = Km;
              var Y = Zm;
            }
          else
            R = T.nodeName, !R || R.toLowerCase() !== "input" || T.type !== "checkbox" && T.type !== "radio" ? E && sn(E.elementType) && (ct = ns) : ct = Jm;
          if (ct && (ct = ct(t, E))) {
            is(
              M,
              ct,
              l,
              D
            );
            break t;
          }
          Y && Y(t, T, E), t === "focusout" && E && T.type === "number" && E.memoizedProps.value != null && fn(T, "number", T.value);
        }
        switch (Y = E ? La(E) : window, t) {
          case "focusin":
            (us(Y) || Y.contentEditable === "true") && (la = Y, xn = E, Za = null);
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
            An = !1, vs(M, l, D);
            break;
          case "selectionchange":
            if (Wm) break;
          case "keydown":
          case "keyup":
            vs(M, l, D);
        }
        var W;
        if (bn)
          t: {
            switch (t) {
              case "compositionstart":
                var ut = "onCompositionStart";
                break t;
              case "compositionend":
                ut = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ut = "onCompositionUpdate";
                break t;
            }
            ut = void 0;
          }
        else
          ea ? ls(t, l) && (ut = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ut = "onCompositionStart");
        ut && (Pf && l.locale !== "ko" && (ea || ut !== "onCompositionStart" ? ut === "onCompositionEnd" && ea && (W = Ff()) : (ll = D, dn = "value" in ll ? ll.value : ll.textContent, ea = !0)), Y = Oi(E, ut), 0 < Y.length && (ut = new $f(
          ut,
          t,
          null,
          l,
          D
        ), M.push({ event: ut, listeners: Y }), W ? ut.data = W : (W = as(l), W !== null && (ut.data = W)))), (W = qm ? Xm(t, l) : wm(t, l)) && (ut = Oi(E, "onBeforeInput"), 0 < ut.length && (Y = new $f(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          D
        ), M.push({
          event: Y,
          listeners: ut
        }), Y.data = W)), jd(
          M,
          t,
          E,
          l,
          D
        );
      }
      wo(M, e);
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
  function Hd(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Vo(t, e, l, a, u) {
    for (var i = e._reactName, n = []; l !== null && l !== a; ) {
      var r = l, h = r.alternate, E = r.stateNode;
      if (r = r.tag, h !== null && h === a) break;
      r !== 5 && r !== 26 && r !== 27 || E === null || (h = E, u ? (E = Ha(l, i), E != null && n.unshift(
        yu(l, E, h)
      )) : u || (E = Ha(l, i), E != null && n.push(
        yu(l, E, h)
      ))), l = l.return;
    }
    n.length !== 0 && t.push({ event: e, listeners: n });
  }
  var Yd = /\r\n?/g, Gd = /\u0000|\uFFFD/g;
  function Zo(t) {
    return (typeof t == "string" ? t : "" + t).replace(Yd, `
`).replace(Gd, "");
  }
  function Ko(t, e) {
    return e = Zo(e), Zo(t) === e;
  }
  function yt(t, e, l, a, u, i) {
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
          typeof i == "function" && (l === "formAction" ? (e !== "input" && yt(t, e, "name", u.name, u, null), yt(
            t,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), yt(
            t,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), yt(
            t,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (yt(t, e, "encType", u.encType, u, null), yt(t, e, "method", u.method, u, null), yt(t, e, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = Cu("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = He);
        break;
      case "onScroll":
        a != null && lt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && lt("scrollend", t);
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
        lt("beforetoggle", t), lt("toggle", t), Nu(t, "popover", a);
        break;
      case "xlinkActuate":
        Le(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Le(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Le(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Le(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Le(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Le(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Le(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Le(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Le(
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = mm.get(l) || l, Nu(t, l, a));
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
        a != null && lt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && lt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = He);
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
            if (l[0] === "o" && l[1] === "n" && (u = l.endsWith("Capture"), e = l.slice(2, u ? l.length - 7 : void 0), i = t[$t] || null, i = i != null ? i[l] : null, typeof i == "function" && t.removeEventListener(e, i, u), typeof a == "function")) {
              typeof i != "function" && i !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, u);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Nu(t, l, a);
          }
    }
  }
  function Vt(t, e, l) {
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
        lt("error", t), lt("load", t);
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
                  yt(t, e, i, n, l, null);
              }
          }
        u && yt(t, e, "srcSet", l.srcSet, l, null), a && yt(t, e, "src", l.src, l, null);
        return;
      case "input":
        lt("invalid", t);
        var r = i = n = u = null, h = null, E = null;
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
                  E = D;
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
                  yt(t, e, a, D, l, null);
              }
          }
        Xf(
          t,
          i,
          r,
          h,
          E,
          n,
          u,
          !1
        );
        return;
      case "select":
        lt("invalid", t), a = n = i = null;
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
                yt(t, e, u, r, l, null);
            }
        e = i, l = n, t.multiple = !!a, e != null ? $l(t, !!a, e, !1) : l != null && $l(t, !!a, l, !0);
        return;
      case "textarea":
        lt("invalid", t), i = u = a = null;
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
                yt(t, e, n, r, l, null);
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
                yt(t, e, h, a, l, null);
            }
        return;
      case "dialog":
        lt("beforetoggle", t), lt("toggle", t), lt("cancel", t), lt("close", t);
        break;
      case "iframe":
      case "object":
        lt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < vu.length; a++)
          lt(vu[a], t);
        break;
      case "image":
        lt("error", t), lt("load", t);
        break;
      case "details":
        lt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        lt("error", t), lt("load", t);
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
        for (E in l)
          if (l.hasOwnProperty(E) && (a = l[E], a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                yt(t, e, E, a, l, null);
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
      l.hasOwnProperty(r) && (a = l[r], a != null && yt(t, e, r, a, l, null));
  }
  function qd(t, e, l, a) {
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
        var u = null, i = null, n = null, r = null, h = null, E = null, D = null;
        for (R in l) {
          var M = l[R];
          if (l.hasOwnProperty(R) && M != null)
            switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = M;
              default:
                a.hasOwnProperty(R) || yt(t, e, R, null, a, M);
            }
        }
        for (var T in a) {
          var R = a[T];
          if (M = l[T], a.hasOwnProperty(T) && (R != null || M != null))
            switch (T) {
              case "type":
                i = R;
                break;
              case "name":
                u = R;
                break;
              case "checked":
                E = R;
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
                R !== M && yt(
                  t,
                  e,
                  T,
                  R,
                  a,
                  M
                );
            }
        }
        cn(
          t,
          n,
          r,
          h,
          E,
          D,
          i,
          u
        );
        return;
      case "select":
        R = n = r = T = null;
        for (i in l)
          if (h = l[i], l.hasOwnProperty(i) && h != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                R = h;
              default:
                a.hasOwnProperty(i) || yt(
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
                T = i;
                break;
              case "defaultValue":
                r = i;
                break;
              case "multiple":
                n = i;
              default:
                i !== h && yt(
                  t,
                  e,
                  u,
                  i,
                  a,
                  h
                );
            }
        e = r, l = n, a = R, T != null ? $l(t, !!l, T, !1) : !!a != !!l && (e != null ? $l(t, !!l, e, !0) : $l(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        R = T = null;
        for (r in l)
          if (u = l[r], l.hasOwnProperty(r) && u != null && !a.hasOwnProperty(r))
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                yt(t, e, r, null, a, u);
            }
        for (n in a)
          if (u = a[n], i = l[n], a.hasOwnProperty(n) && (u != null || i != null))
            switch (n) {
              case "value":
                T = u;
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
                u !== i && yt(t, e, n, u, a, i);
            }
        wf(t, T, R);
        return;
      case "option":
        for (var L in l)
          if (T = l[L], l.hasOwnProperty(L) && T != null && !a.hasOwnProperty(L))
            switch (L) {
              case "selected":
                t.selected = !1;
                break;
              default:
                yt(
                  t,
                  e,
                  L,
                  null,
                  a,
                  T
                );
            }
        for (h in a)
          if (T = a[h], R = l[h], a.hasOwnProperty(h) && T !== R && (T != null || R != null))
            switch (h) {
              case "selected":
                t.selected = T && typeof T != "function" && typeof T != "symbol";
                break;
              default:
                yt(
                  t,
                  e,
                  h,
                  T,
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
        for (var q in l)
          T = l[q], l.hasOwnProperty(q) && T != null && !a.hasOwnProperty(q) && yt(t, e, q, null, a, T);
        for (E in a)
          if (T = a[E], R = l[E], a.hasOwnProperty(E) && T !== R && (T != null || R != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(f(137, e));
                break;
              default:
                yt(
                  t,
                  e,
                  E,
                  T,
                  a,
                  R
                );
            }
        return;
      default:
        if (sn(e)) {
          for (var gt in l)
            T = l[gt], l.hasOwnProperty(gt) && T !== void 0 && !a.hasOwnProperty(gt) && kc(
              t,
              e,
              gt,
              void 0,
              a,
              T
            );
          for (D in a)
            T = a[D], R = l[D], !a.hasOwnProperty(D) || T === R || T === void 0 && R === void 0 || kc(
              t,
              e,
              D,
              T,
              a,
              R
            );
          return;
        }
    }
    for (var S in l)
      T = l[S], l.hasOwnProperty(S) && T != null && !a.hasOwnProperty(S) && yt(t, e, S, null, a, T);
    for (M in a)
      T = a[M], R = l[M], !a.hasOwnProperty(M) || T === R || T == null && R == null || yt(t, e, M, T, a, R);
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
  function Xd() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var u = l[a], i = u.transferSize, n = u.initiatorType, r = u.duration;
        if (i && r && Jo(n)) {
          for (n = 0, r = u.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a], E = h.startTime;
            if (E > r) break;
            var D = h.transferSize, M = h.initiatorType;
            D && Jo(M) && (h = h.responseEnd, n += D * (h < r ? 1 : (r - E) / (h - E)));
          }
          if (--a, e += 8 * (i + n) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Wc = null, $c = null;
  function Mi(t) {
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
  function wd() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Pc ? !1 : (Pc = t, !0) : (Pc = null, !1);
  }
  var Wo = typeof setTimeout == "function" ? setTimeout : void 0, Qd = typeof clearTimeout == "function" ? clearTimeout : void 0, $o = typeof Promise == "function" ? Promise : void 0, Vd = typeof queueMicrotask == "function" ? queueMicrotask : typeof $o < "u" ? function(t) {
    return $o.resolve(null).then(t).catch(Zd);
  } : Wo;
  function Zd(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function bl(t) {
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
  function Kd(t, e, l, a) {
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
      if (t = Ae(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Jd(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ae(t.nextSibling), t === null)) return null;
    return t;
  }
  function th(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ae(t.nextSibling), t === null)) return null;
    return t;
  }
  function ef(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function lf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Fd(t, e) {
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
  function Ae(t) {
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
            return Ae(t.nextSibling);
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
    switch (e = Mi(l), t) {
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
  var Re = /* @__PURE__ */ new Map(), uh = /* @__PURE__ */ new Set();
  function Ui(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Pe = B.d;
  B.d = {
    f: kd,
    r: Wd,
    D: $d,
    C: Id,
    L: Pd,
    m: tv,
    X: lv,
    S: ev,
    M: av
  };
  function kd() {
    var t = Pe.f(), e = Ti();
    return t || e;
  }
  function Wd(t) {
    var e = Fl(t);
    e !== null && e.tag === 5 && e.type === "form" ? pr(e) : Pe.r(t);
  }
  var Da = typeof document > "u" ? null : document;
  function ih(t, e, l) {
    var a = Da;
    if (a && typeof e == "string" && e) {
      var u = ge(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof l == "string" && (u += '[crossorigin="' + l + '"]'), uh.has(u) || (uh.add(u), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(u) === null && (e = a.createElement("link"), Vt(e, "link", t), Lt(e), a.head.appendChild(e)));
    }
  }
  function $d(t) {
    Pe.D(t), ih("dns-prefetch", t, null);
  }
  function Id(t, e) {
    Pe.C(t, e), ih("preconnect", t, e);
  }
  function Pd(t, e, l) {
    Pe.L(t, e, l);
    var a = Da;
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + ge(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (u += '[imagesrcset="' + ge(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (u += '[imagesizes="' + ge(
        l.imageSizes
      ) + '"]')) : u += '[href="' + ge(t) + '"]';
      var i = u;
      switch (e) {
        case "style":
          i = _a(t);
          break;
        case "script":
          i = za(t);
      }
      Re.has(i) || (t = j(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Re.set(i, t), a.querySelector(u) !== null || e === "style" && a.querySelector(Su(i)) || e === "script" && a.querySelector(bu(i)) || (e = a.createElement("link"), Vt(e, "link", t), Lt(e), a.head.appendChild(e)));
    }
  }
  function tv(t, e) {
    Pe.m(t, e);
    var l = Da;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + ge(a) + '"][href="' + ge(t) + '"]', i = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = za(t);
      }
      if (!Re.has(i) && (t = j({ rel: "modulepreload", href: t }, e), Re.set(i, t), l.querySelector(u) === null)) {
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
        a = l.createElement("link"), Vt(a, "link", t), Lt(a), l.head.appendChild(a);
      }
    }
  }
  function ev(t, e, l) {
    Pe.S(t, e, l);
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
          t = j(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Re.get(i)) && uf(t, l);
          var h = n = a.createElement("link");
          Lt(h), Vt(h, "link", t), h._p = new Promise(function(E, D) {
            h.onload = E, h.onerror = D;
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
  function lv(t, e) {
    Pe.X(t, e);
    var l = Da;
    if (l && t) {
      var a = kl(l).hoistableScripts, u = za(t), i = a.get(u);
      i || (i = l.querySelector(bu(u)), i || (t = j({ src: t, async: !0 }, e), (e = Re.get(u)) && nf(t, e), i = l.createElement("script"), Lt(i), Vt(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(u, i));
    }
  }
  function av(t, e) {
    Pe.M(t, e);
    var l = Da;
    if (l && t) {
      var a = kl(l).hoistableScripts, u = za(t), i = a.get(u);
      i || (i = l.querySelector(bu(u)), i || (t = j({ src: t, async: !0, type: "module" }, e), (e = Re.get(u)) && nf(t, e), i = l.createElement("script"), Lt(i), Vt(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(u, i));
    }
  }
  function nh(t, e, l, a) {
    var u = (u = tt.current) ? Ui(u) : null;
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
          )) && !i._p && (n.instance = i, n.state.loading = 5), Re.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Re.set(t, l), i || uv(
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
    return 'href="' + ge(t) + '"';
  }
  function Su(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ch(t) {
    return j({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function uv(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), Vt(e, "link", l), Lt(e), t.head.appendChild(e));
  }
  function za(t) {
    return '[src="' + ge(t) + '"]';
  }
  function bu(t) {
    return "script[async]" + t;
  }
  function fh(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + ge(l.href) + '"]'
          );
          if (a)
            return e.instance = a, Lt(a), a;
          var u = j({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Lt(a), Vt(a, "style", u), Ni(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          u = _a(l.href);
          var i = t.querySelector(
            Su(u)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, Lt(i), i;
          a = ch(l), (u = Re.get(u)) && uf(a, u), i = (t.ownerDocument || t).createElement("link"), Lt(i);
          var n = i;
          return n._p = new Promise(function(r, h) {
            n.onload = r, n.onerror = h;
          }), Vt(i, "link", a), e.state.loading |= 4, Ni(i, l.precedence, t), e.instance = i;
        case "script":
          return i = za(l.src), (u = t.querySelector(
            bu(i)
          )) ? (e.instance = u, Lt(u), u) : (a = l, (u = Re.get(i)) && (a = j({}, l), nf(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), Lt(u), Vt(u, "link", a), t.head.appendChild(u), e.instance = u);
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
      if (!(i[Ca] || i[qt] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function iv(t, e, l) {
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
  function nv(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var u = _a(a.href), i = e.querySelector(
          Su(u)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Bi.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = i, Lt(i);
          return;
        }
        i = e.ownerDocument || e, a = ch(a), (u = Re.get(u)) && uf(a, u), i = i.createElement("link"), Lt(i);
        var n = i;
        n._p = new Promise(function(r, h) {
          n.onload = r, n.onerror = h;
        }), Vt(i, "link", a), l.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Bi.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var cf = 0;
  function cv(t, e) {
    return t.stylesheets && t.count === 0 && Li(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && Li(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && cf === 0 && (cf = 62500 * Xd());
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
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Ci = /* @__PURE__ */ new Map(), e.forEach(fv, t), Ci = null, Bi.call(t));
  }
  function fv(t, e) {
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
    $$typeof: Q,
    Provider: null,
    Consumer: null,
    _currentValue: w,
    _currentValue2: w,
    _threadCount: 0
  };
  function sv(t, e, l, a, u, i, n, r, h) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = tn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tn(0), this.hiddenUpdates = tn(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = i, this.onRecoverableError = n, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function hh(t, e, l, a, u, i, n, r, h, E, D, M) {
    return t = new sv(
      t,
      e,
      l,
      n,
      h,
      E,
      D,
      M,
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
    u = mh(u), a.context === null ? a.context = u : a.pendingContext = u, a = fl(e), a.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = sl(t, a, e), l !== null && (ae(l, t, e), Ia(l, t, e));
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
      var e = Nl(t, 67108864);
      e !== null && ae(e, t, 67108864), ff(t, 67108864);
    }
  }
  function gh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = me();
      e = en(e);
      var l = Nl(t, e);
      l !== null && ae(l, t, e), ff(t, e);
    }
  }
  var Hi = !0;
  function rv(t, e, l, a) {
    var u = _.T;
    _.T = null;
    var i = B.p;
    try {
      B.p = 2, sf(t, e, l, a);
    } finally {
      B.p = i, _.T = u;
    }
  }
  function ov(t, e, l, a) {
    var u = _.T;
    _.T = null;
    var i = B.p;
    try {
      B.p = 8, sf(t, e, l, a);
    } finally {
      B.p = i, _.T = u;
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
      else if (mv(
        u,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (bh(t, a), e & 4 && -1 < hv.indexOf(t)) {
        for (; u !== null; ) {
          var i = Fl(u);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var n = _l(i.pendingLanes);
                  if (n !== 0) {
                    var r = i;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; n; ) {
                      var h = 1 << 31 - ne(n);
                      r.entanglements[1] |= h, n &= ~h;
                    }
                    Be(i), (st & 6) === 0 && (pi = ue() + 500, du(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = Nl(i, 2), r !== null && ae(r, i, 2), Ti(), ff(i, 2);
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
          if (t = A(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = x(e), t !== null) return t;
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
        switch ($h()) {
          case Rf:
            return 2;
          case Df:
            return 8;
          case _u:
          case Ih:
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
  var hf = !1, pl = null, El = null, Tl = null, Eu = /* @__PURE__ */ new Map(), Tu = /* @__PURE__ */ new Map(), xl = [], hv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function bh(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        pl = null;
        break;
      case "dragenter":
      case "dragleave":
        El = null;
        break;
      case "mouseover":
      case "mouseout":
        Tl = null;
        break;
      case "pointerover":
      case "pointerout":
        Eu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tu.delete(e.pointerId);
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
  function mv(t, e, l, a, u) {
    switch (e) {
      case "focusin":
        return pl = xu(
          pl,
          t,
          e,
          l,
          a,
          u
        ), !0;
      case "dragenter":
        return El = xu(
          El,
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
        return Eu.set(
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
      case "gotpointercapture":
        return i = u.pointerId, Tu.set(
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
    }
    return !1;
  }
  function ph(t) {
    var e = Jl(t.target);
    if (e !== null) {
      var l = g(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = A(l), e !== null) {
            t.blockedOn = e, jf(t.priority, function() {
              gh(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = x(l), e !== null) {
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
  function Eh(t, e, l) {
    Gi(t) && l.delete(e);
  }
  function dv() {
    hf = !1, pl !== null && Gi(pl) && (pl = null), El !== null && Gi(El) && (El = null), Tl !== null && Gi(Tl) && (Tl = null), Eu.forEach(Eh), Tu.forEach(Eh);
  }
  function qi(t, e) {
    t.blockedOn === e && (t.blockedOn = null, hf || (hf = !0, m.unstable_scheduleCallback(
      m.unstable_NormalPriority,
      dv
    )));
  }
  var Xi = null;
  function Th(t) {
    Xi !== t && (Xi = t, m.unstable_scheduleCallback(
      m.unstable_NormalPriority,
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
    pl !== null && qi(pl, t), El !== null && qi(El, t), Tl !== null && qi(Tl, t), Eu.forEach(e), Tu.forEach(e);
    for (var l = 0; l < xl.length; l++) {
      var a = xl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < xl.length && (l = xl[0], l.blockedOn === null); )
      ph(l), l.blockedOn === null && xl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var u = l[a], i = l[a + 1], n = u[$t] || null;
        if (typeof i == "function")
          n || Th(l);
        else if (n) {
          var r = null;
          if (i && i.hasAttribute("formAction")) {
            if (u = i, n = i[$t] || null)
              r = n.formAction;
            else if (of(u) !== null) continue;
          } else r = n.action;
          typeof r == "function" ? l[a + 1] = r : (l.splice(a, 3), a -= 3), Th(l);
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
      dh(t.current, 2, null, t, null, null), Ti(), e[Kl] = null;
    }
  };
  function wi(t) {
    this._internalRoot = t;
  }
  wi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Nf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < xl.length && e !== 0 && e < xl[l].priority; l++) ;
      xl.splice(l, 0, t), l === 0 && ph(t);
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
  B.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = b(e), t = t !== null ? N(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var vv = {
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
          vv
        ), ie = Qi;
      } catch {
      }
  }
  return Ru.createRoot = function(t, e) {
    if (!o(t)) throw Error(f(299));
    var l = !1, a = "", u = Mr, i = Ur, n = Nr;
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
    var a = !1, u = "", i = Mr, n = Ur, r = Nr, h = null;
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
    ), e.context = mh(null), l = e.current, a = me(), a = en(a), u = fl(a), u.callback = null, sl(l, u, a), l = a, e.current.lanes = l, Ba(e, l), Be(e), t[Kl] = e.current, Jc(t), new wi(e);
  }, Ru.version = "19.2.0", Ru;
}
var Bh;
function _v() {
  if (Bh) return yf.exports;
  Bh = 1;
  function m() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (c) {
        console.error(c);
      }
  }
  return m(), yf.exports = Dv(), yf.exports;
}
var zv = _v();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ov = (m) => m.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Gh = (...m) => m.filter((c, s, f) => !!c && c.trim() !== "" && f.indexOf(c) === s).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Mv = {
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
const Uv = $.forwardRef(
  ({
    color: m = "currentColor",
    size: c = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: f,
    className: o = "",
    children: g,
    iconNode: A,
    ...x
  }, z) => $.createElement(
    "svg",
    {
      ref: z,
      ...Mv,
      width: c,
      height: c,
      stroke: m,
      strokeWidth: f ? Number(s) * 24 / Number(c) : s,
      className: Gh("lucide", o),
      ...x
    },
    [
      ...A.map(([b, N]) => $.createElement(b, N)),
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
const Jt = (m, c) => {
  const s = $.forwardRef(
    ({ className: f, ...o }, g) => $.createElement(Uv, {
      ref: g,
      iconNode: c,
      className: Gh(`lucide-${Ov(m)}`, f),
      ...o
    })
  );
  return s.displayName = `${m}`, s;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nv = Jt("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jv = Jt("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qh = Jt("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xh = Jt("BriefcaseBusiness", [
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
const Bv = Jt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cv = Jt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wh = Jt("CodeXml", [
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
const Qh = Jt("Github", [
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
const Vh = Jt("Layers", [
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
const Zh = Jt("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lv = Jt("Menu", [
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
const Hv = Jt("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yv = Jt("ShieldCheck", [
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
const Kh = Jt("Sparkles", [
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
const Gv = Jt("Workflow", [
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
const qv = Jt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Xv = {
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
class wv {
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
      let A = c.getActiveUniform(s, g).name;
      f[A] = c.getUniformLocation(s, A);
    }
    return f;
  }
}
class Zt {
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
      let A = c.getActiveUniform(s, g).name;
      f[A] = c.getUniformLocation(s, A);
    }
    return f;
  }
}
class Qv {
  constructor(c, s = {}) {
    this.bloomFramebuffers = [], this.pointers = [], this.splatStack = [], this.lastUpdateTime = Date.now(), this.colorUpdateTimer = 0, this.animationId = null, this.update = () => {
      const g = this.calcDeltaTime();
      this.resizeCanvas() && this.initFramebuffers(), this.updateColors(g), this.applyInputs(), this.config.PAUSED || this.step(g), this.render(null), this.animationId = requestAnimationFrame(this.update);
    }, this.handleMouseDown = (g) => {
      let A = this.scaleByPixelRatio(g.offsetX), x = this.scaleByPixelRatio(g.offsetY), z = this.pointers.find((b) => b.id == -1);
      z == null && (z = this.createPointer(), this.pointers.push(z)), this.updatePointerDownData(z, -1, A, x);
    }, this.handleMouseMove = (g) => {
      let A = this.pointers[0];
      if (!A.down)
        return;
      let x = this.scaleByPixelRatio(g.offsetX), z = this.scaleByPixelRatio(g.offsetY);
      this.updatePointerMoveData(A, x, z);
    }, this.handleMouseUp = () => {
      this.updatePointerUpData(this.pointers[0]);
    }, this.handleTouchStart = (g) => {
      g.preventDefault();
      const A = g.targetTouches;
      for (; A.length >= this.pointers.length; )
        this.pointers.push(this.createPointer());
      for (let x = 0; x < A.length; x++) {
        const z = this.canvas.getBoundingClientRect();
        let b = this.scaleByPixelRatio(A[x].clientX - z.left), N = this.scaleByPixelRatio(A[x].clientY - z.top);
        this.updatePointerDownData(this.pointers[x + 1], A[x].identifier, b, N);
      }
    }, this.handleTouchMove = (g) => {
      g.preventDefault();
      const A = g.targetTouches;
      for (let x = 0; x < A.length; x++) {
        let z = this.pointers[x + 1];
        if (!z.down)
          continue;
        const b = this.canvas.getBoundingClientRect();
        let N = this.scaleByPixelRatio(A[x].clientX - b.left), j = this.scaleByPixelRatio(A[x].clientY - b.top);
        this.updatePointerMoveData(z, N, j);
      }
    }, this.handleTouchEnd = (g) => {
      const A = g.changedTouches;
      for (let x = 0; x < A.length; x++) {
        let z = this.pointers.find((b) => b.id == A[x].identifier);
        z != null && this.updatePointerUpData(z);
      }
    }, this.handleKeyDown = (g) => {
      g.code === "KeyP" && (this.config.PAUSED = !this.config.PAUSED), g.key === " " && this.splatStack.push(Math.floor(Math.random() * 20) + 5);
    }, this.canvas = c, this.config = Object.assign(Object.assign({}, Xv), s);
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
    let g, A;
    o ? (f.getExtension("EXT_color_buffer_float"), A = f.getExtension("OES_texture_float_linear")) : (g = f.getExtension("OES_texture_half_float"), A = f.getExtension("OES_texture_half_float_linear")), f.clearColor(0, 0, 0, 1);
    const x = o ? f.HALF_FLOAT : g.HALF_FLOAT_OES;
    let z, b, N;
    return o ? (z = this.getSupportedFormat(f, f.RGBA16F, f.RGBA, x), b = this.getSupportedFormat(f, f.RG16F, f.RG, x), N = this.getSupportedFormat(f, f.R16F, f.RED, x)) : (z = this.getSupportedFormat(f, f.RGBA, f.RGBA, x), b = this.getSupportedFormat(f, f.RGBA, f.RGBA, x), N = this.getSupportedFormat(f, f.RGBA, f.RGBA, x)), {
      gl: f,
      ext: {
        formatRGBA: z,
        formatRG: b,
        formatR: N,
        halfFloatTexType: x,
        supportLinearFiltering: !!A
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
    let A = c.createFramebuffer();
    return c.bindFramebuffer(c.FRAMEBUFFER, A), c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, g, 0), c.checkFramebufferStatus(c.FRAMEBUFFER) == c.FRAMEBUFFER_COMPLETE;
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
    `), A = this.compileShader(c.FRAGMENT_SHADER, `
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
    `), x = `
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
    this.blurProgram = new Zt(c, this.blurVertexShader, s), this.copyProgram = new Zt(c, this.baseVertexShader, f), this.clearProgram = new Zt(c, this.baseVertexShader, o), this.colorProgram = new Zt(c, this.baseVertexShader, g), this.checkerboardProgram = new Zt(c, this.baseVertexShader, A), this.displayMaterial = new wv(this.baseVertexShader, x), this.initRemainingPrograms();
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
    `), A = this.compileShader(c.FRAGMENT_SHADER, `
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
    `), x = this.compileShader(c.FRAGMENT_SHADER, `
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
    `), N = this.compileShader(c.FRAGMENT_SHADER, `
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
    `), j = this.compileShader(c.FRAGMENT_SHADER, `
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
    `), F = this.compileShader(c.FRAGMENT_SHADER, `
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
    `), it = this.compileShader(c.FRAGMENT_SHADER, `
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
    this.bloomPrefilterProgram = new Zt(c, this.baseVertexShader, s), this.bloomBlurProgram = new Zt(c, this.baseVertexShader, f), this.bloomFinalProgram = new Zt(c, this.baseVertexShader, o), this.sunraysMaskProgram = new Zt(c, this.baseVertexShader, g), this.sunraysProgram = new Zt(c, this.baseVertexShader, A), this.splatProgram = new Zt(c, this.baseVertexShader, x), this.advectionProgram = new Zt(c, this.baseVertexShader, z), this.divergenceProgram = new Zt(c, this.baseVertexShader, b), this.curlProgram = new Zt(c, this.baseVertexShader, N), this.vorticityProgram = new Zt(c, this.baseVertexShader, j), this.pressureProgram = new Zt(c, this.baseVertexShader, F), this.gradienSubtractProgram = new Zt(c, this.baseVertexShader, it);
  }
  compileShader(c, s, f) {
    const o = this.gl;
    if (f) {
      let A = "";
      f.forEach((x) => {
        A += "#define " + x + `
`;
      }), s = A + s;
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
    const f = this.ext.halfFloatTexType, o = this.ext.formatRGBA, g = this.ext.formatRG, A = this.ext.formatR, x = this.ext.supportLinearFiltering ? this.gl.LINEAR : this.gl.NEAREST;
    this.gl.disable(this.gl.BLEND), this.dye == null ? this.dye = this.createDoubleFBO(s.width, s.height, o.internalFormat, o.format, f, x) : this.dye = this.resizeDoubleFBO(this.dye, s.width, s.height, o.internalFormat, o.format, f, x), this.velocity == null ? this.velocity = this.createDoubleFBO(c.width, c.height, g.internalFormat, g.format, f, x) : this.velocity = this.resizeDoubleFBO(this.velocity, c.width, c.height, g.internalFormat, g.format, f, x), this.divergence = this.createFBO(c.width, c.height, A.internalFormat, A.format, f, this.gl.NEAREST), this.curl = this.createFBO(c.width, c.height, A.internalFormat, A.format, f, this.gl.NEAREST), this.pressure = this.createDoubleFBO(c.width, c.height, A.internalFormat, A.format, f, this.gl.NEAREST), this.initBloomFramebuffers(), this.initSunraysFramebuffers();
  }
  initBloomFramebuffers() {
    let c = this.getResolution(this.config.BLOOM_RESOLUTION);
    const s = this.ext.halfFloatTexType, f = this.ext.formatRGBA, o = this.ext.supportLinearFiltering ? this.gl.LINEAR : this.gl.NEAREST;
    this.bloom = this.createFBO(c.width, c.height, f.internalFormat, f.format, s, o), this.bloomFramebuffers.length = 0;
    for (let g = 0; g < this.config.BLOOM_ITERATIONS; g++) {
      let A = c.width >> g + 1, x = c.height >> g + 1;
      if (A < 2 || x < 2)
        break;
      let z = this.createFBO(A, x, f.internalFormat, f.format, s, o);
      this.bloomFramebuffers.push(z);
    }
  }
  initSunraysFramebuffers() {
    let c = this.getResolution(this.config.SUNRAYS_RESOLUTION);
    const s = this.ext.halfFloatTexType, f = this.ext.formatR, o = this.ext.supportLinearFiltering ? this.gl.LINEAR : this.gl.NEAREST;
    this.sunrays = this.createFBO(c.width, c.height, f.internalFormat, f.format, s, o), this.sunraysTemp = this.createFBO(c.width, c.height, f.internalFormat, f.format, s, o);
  }
  createFBO(c, s, f, o, g, A) {
    const x = this.gl;
    x.activeTexture(x.TEXTURE0);
    let z = x.createTexture();
    x.bindTexture(x.TEXTURE_2D, z), x.texParameteri(x.TEXTURE_2D, x.TEXTURE_MIN_FILTER, A), x.texParameteri(x.TEXTURE_2D, x.TEXTURE_MAG_FILTER, A), x.texParameteri(x.TEXTURE_2D, x.TEXTURE_WRAP_S, x.CLAMP_TO_EDGE), x.texParameteri(x.TEXTURE_2D, x.TEXTURE_WRAP_T, x.CLAMP_TO_EDGE), x.texImage2D(x.TEXTURE_2D, 0, f, c, s, 0, o, g, null);
    let b = x.createFramebuffer();
    x.bindFramebuffer(x.FRAMEBUFFER, b), x.framebufferTexture2D(x.FRAMEBUFFER, x.COLOR_ATTACHMENT0, x.TEXTURE_2D, z, 0), x.viewport(0, 0, c, s), x.clear(x.COLOR_BUFFER_BIT);
    let N = 1 / c, j = 1 / s;
    return {
      texture: z,
      fbo: b,
      width: c,
      height: s,
      texelSizeX: N,
      texelSizeY: j,
      attach(F) {
        return x.activeTexture(x.TEXTURE0 + F), x.bindTexture(x.TEXTURE_2D, z), F;
      }
    };
  }
  createDoubleFBO(c, s, f, o, g, A) {
    let x = this.createFBO(c, s, f, o, g, A), z = this.createFBO(c, s, f, o, g, A);
    return {
      width: c,
      height: s,
      texelSizeX: x.texelSizeX,
      texelSizeY: x.texelSizeY,
      get read() {
        return x;
      },
      set read(b) {
        x = b;
      },
      get write() {
        return z;
      },
      set write(b) {
        z = b;
      },
      swap() {
        let b = x;
        x = z, z = b;
      }
    };
  }
  resizeFBO(c, s, f, o, g, A, x) {
    let z = this.createFBO(s, f, o, g, A, x);
    return this.copyProgram.bind(this.gl), this.gl.uniform1i(this.copyProgram.uniforms.uTexture, c.attach(0)), this.blit(z), z;
  }
  resizeDoubleFBO(c, s, f, o, g, A, x) {
    return c.width == s && c.height == f || (c.read = this.resizeFBO(c.read, s, f, o, g, A, x), c.write = this.createFBO(s, f, o, g, A, x), c.width = s, c.height = f, c.texelSizeX = 1 / s, c.texelSizeY = 1 / f), c;
  }
  createTextureAsync(c) {
    const s = this.gl;
    let f = s.createTexture();
    s.bindTexture(s.TEXTURE_2D, f), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.REPEAT), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.REPEAT), s.texImage2D(s.TEXTURE_2D, 0, s.RGB, 1, 1, 0, s.RGB, s.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));
    let o = {
      texture: f,
      width: 1,
      height: 1,
      attach(A) {
        return s.activeTexture(s.TEXTURE0 + A), s.bindTexture(s.TEXTURE_2D, f), A;
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
    let g = this.config.BLOOM_THRESHOLD * this.config.BLOOM_SOFT_KNEE + 1e-4, A = this.config.BLOOM_THRESHOLD - g, x = g * 2, z = 0.25 / g;
    f.uniform3f(this.bloomPrefilterProgram.uniforms.curve, A, x, z), f.uniform1f(this.bloomPrefilterProgram.uniforms.threshold, this.config.BLOOM_THRESHOLD), f.uniform1i(this.bloomPrefilterProgram.uniforms.uTexture, c.attach(0)), this.blit(o), this.bloomBlurProgram.bind(f);
    for (let b = 0; b < this.bloomFramebuffers.length; b++) {
      let N = this.bloomFramebuffers[b];
      f.uniform2f(this.bloomBlurProgram.uniforms.texelSize, o.texelSizeX, o.texelSizeY), f.uniform1i(this.bloomBlurProgram.uniforms.uTexture, o.attach(0)), this.blit(N), o = N;
    }
    f.blendFunc(f.ONE, f.ONE), f.enable(f.BLEND);
    for (let b = this.bloomFramebuffers.length - 2; b >= 0; b--) {
      let N = this.bloomFramebuffers[b];
      f.uniform2f(this.bloomBlurProgram.uniforms.texelSize, o.texelSizeX, o.texelSizeY), f.uniform1i(this.bloomBlurProgram.uniforms.uTexture, o.attach(0)), f.viewport(0, 0, N.width, N.height), this.blit(N), o = N;
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
      const o = Math.random(), g = Math.random(), A = 1e3 * (Math.random() - 0.5), x = 1e3 * (Math.random() - 0.5);
      this.splatInternal(o, g, A, x, f);
    }
  }
  splatInternal(c, s, f, o, g) {
    const A = this.gl;
    this.splatProgram.bind(A), A.uniform1i(this.splatProgram.uniforms.uTarget, this.velocity.read.attach(0)), A.uniform1f(this.splatProgram.uniforms.aspectRatio, this.canvas.width / this.canvas.height), A.uniform2f(this.splatProgram.uniforms.point, c, s), A.uniform3f(this.splatProgram.uniforms.color, f, o, 0), A.uniform1f(this.splatProgram.uniforms.radius, this.correctRadius(this.config.SPLAT_RADIUS / 100)), this.blit(this.velocity.write), this.velocity.swap(), A.uniform1i(this.splatProgram.uniforms.uTarget, this.dye.read.attach(0)), A.uniform3f(this.splatProgram.uniforms.color, g.r, g.g, g.b), this.blit(this.dye.write), this.dye.swap();
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
    for (let A = f - 1; A >= 0; A--)
      for (let x = 0; x < s; x++) {
        let z = A * s * 4 + x * 4;
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
    let A = g.createImageData(s, f);
    return A.data.set(c), g.putImageData(A, 0, 0), o;
  }
  generateColor() {
    let c = this.HSVtoRGB(Math.random(), 1, 1);
    return c.r *= 0.15, c.g *= 0.15, c.b *= 0.15, c;
  }
  HSVtoRGB(c, s, f) {
    let o, g, A, x, z, b, N, j;
    switch (x = Math.floor(c * 6), z = c * 6 - x, b = f * (1 - s), N = f * (1 - z * s), j = f * (1 - (1 - z) * s), x % 6) {
      case 0:
        o = f, g = j, A = b;
        break;
      case 1:
        o = N, g = f, A = b;
        break;
      case 2:
        o = b, g = f, A = j;
        break;
      case 3:
        o = b, g = N, A = f;
        break;
      case 4:
        o = j, g = b, A = f;
        break;
      case 5:
        o = f, g = b, A = N;
        break;
      default:
        o = 0, g = 0, A = 0;
    }
    return { r: o, g, b: A };
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
const Ch = "(prefers-reduced-motion: reduce)", Vv = 100, Ef = 6e3, Zv = 260, Ki = {
  SIM_RESOLUTION: 128,
  DENSITY_DISSIPATION: 0.5,
  VELOCITY_DISSIPATION: 3,
  PRESSURE: 0.1,
  PRESSURE_ITERATIONS: 20,
  CURL: 3,
  SPLAT_RADIUS: 0.2,
  SPLAT_FORCE: Ef,
  SHADING: !0,
  COLORFUL: !0,
  COLOR_UPDATE_SPEED: 10,
  BLOOM: !1,
  SUNRAYS: !1,
  TRANSPARENT: !1,
  BACK_COLOR: { r: 255, g: 255, b: 255 },
  PAUSED: !0
};
function Kv() {
  const [m, c] = $.useState(
    () => window.matchMedia(Ch).matches
  );
  return $.useEffect(() => {
    const s = window.matchMedia(Ch), f = () => c(s.matches);
    return s.addEventListener("change", f), () => s.removeEventListener("change", f);
  }, []), m;
}
function Vi(m = 0.15) {
  const c = Math.random() * 6, s = Math.floor(c), f = c - s, o = f * m, g = (1 - f) * m;
  switch (s % 6) {
    case 0:
      return { r: m, g: o, b: 0 };
    case 1:
      return { r: g, g: m, b: 0 };
    case 2:
      return { r: 0, g: m, b: o };
    case 3:
      return { r: 0, g, b: m };
    case 4:
      return { r: o, g: 0, b: m };
    default:
      return { r: m, g: 0, b: g };
  }
}
function Lh(m) {
  const c = Math.max(window.innerWidth, 1), s = Math.max(window.innerHeight, 1);
  return {
    x: m.clientX / c,
    y: 1 - m.clientY / s,
    aspect: c / s
  };
}
function Jv(m, c) {
  let s = m.x - c.x, f = m.y - c.y;
  return m.aspect < 1 && (s *= m.aspect), m.aspect > 1 && (f /= m.aspect), { dx: s, dy: f };
}
function Fv(m, c) {
  c.stop(), c.pause(), c.updateConfig({
    DENSITY_DISSIPATION: Ki.DENSITY_DISSIPATION,
    VELOCITY_DISSIPATION: Ki.VELOCITY_DISSIPATION,
    CURL: Ki.CURL,
    PAUSED: !0
  });
  const s = m.getContext("webgl2") || m.getContext("webgl");
  s && (s.bindFramebuffer(s.FRAMEBUFFER, null), s.viewport(0, 0, s.drawingBufferWidth, s.drawingBufferHeight), s.clearColor(1, 1, 1, 1), s.clear(s.COLOR_BUFFER_BIT));
}
function kv() {
  const m = $.useRef(null), c = Kv();
  return $.useEffect(() => {
    const s = m.current;
    if (!s || c) return;
    let f = !1, o = null, g = 0, A = 0, x = 0, z = !1;
    const b = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map();
    function j() {
      !o || z || (z = !0, o.resume(), o.start(), s.dataset.fluidState = "active");
    }
    function F(X, Q, mt, k) {
      let P = b.get(X);
      P || (P = {
        x: mt === "touch" ? Q.x : 0,
        y: mt === "touch" ? Q.y : 0,
        color: Vi(),
        colorUpdatedAt: k
      }), k - P.colorUpdatedAt >= Vv && (P.color = Vi(), P.colorUpdatedAt = k);
      const V = Jv(Q, P);
      o.splat(
        Q.x,
        Q.y,
        V.dx * Ef,
        V.dy * Ef,
        P.color
      ), b.set(X, { ...P, x: Q.x, y: Q.y });
    }
    function it(X) {
      if (A = 0, !(!o || f)) {
        for (const [Q, mt] of N)
          F(Q, mt.point, mt.pointerType, X);
        N.clear();
      }
    }
    function St(X) {
      o && (j(), N.set(X.pointerId, {
        point: Lh(X),
        pointerType: X.pointerType
      }), A || (A = window.requestAnimationFrame(it)));
    }
    function Et(X) {
      if (!o) return;
      j();
      const Q = Lh(X), mt = Vi();
      if (b.set(X.pointerId, {
        x: Q.x,
        y: Q.y,
        color: mt,
        colorUpdatedAt: performance.now()
      }), X.pointerType !== "mouse") return;
      const k = Vi(1.5);
      o.splat(
        Q.x,
        Q.y,
        10 * (Math.random() - 0.5),
        30 * (Math.random() - 0.5),
        k
      );
    }
    function Bt(X) {
      N.delete(X.pointerId), X.pointerType !== "mouse" && b.delete(X.pointerId);
    }
    function I() {
      !o || !z || (document.hidden ? o.stop() : o.start());
    }
    return g = window.requestAnimationFrame(() => {
      if (!f)
        try {
          const X = window.matchMedia("(pointer: coarse)").matches ? 512 : 1440;
          o = new Qv(s, {
            ...Ki,
            DYE_RESOLUTION: X,
            DENSITY_DISSIPATION: 160,
            VELOCITY_DISSIPATION: 160,
            CURL: 0,
            PAUSED: !1
          }), x = window.setTimeout(() => {
            f || !o || (Fv(s, o), s.dataset.fluidState = "idle", window.addEventListener("pointermove", St, { passive: !0 }), window.addEventListener("pointerdown", Et, { passive: !0 }), window.addEventListener("pointerup", Bt, { passive: !0 }), window.addEventListener("pointercancel", Bt, { passive: !0 }), document.addEventListener("visibilitychange", I));
          }, Zv);
        } catch {
          s.dataset.fluidState = "unsupported", s.hidden = !0;
        }
    }), () => {
      var Q;
      f = !0, window.cancelAnimationFrame(g), window.cancelAnimationFrame(A), window.clearTimeout(x), window.removeEventListener("pointermove", St), window.removeEventListener("pointerdown", Et), window.removeEventListener("pointerup", Bt), window.removeEventListener("pointercancel", Bt), document.removeEventListener("visibilitychange", I), o == null || o.stop();
      const X = s.getContext("webgl2") || s.getContext("webgl");
      (Q = X == null ? void 0 : X.getExtension("WEBGL_lose_context")) == null || Q.loseContext();
    };
  }, [c]), c ? null : /* @__PURE__ */ d.jsx(
    "canvas",
    {
      ref: m,
      className: "fluid-trail",
      "data-fluid-state": "loading",
      "data-fluid-trail": !0,
      "aria-hidden": "true"
    }
  );
}
function Jh(m, c) {
  return new URL(c, m.endsWith("/") ? m : `${m}/`).toString();
}
const Wv = [
  { id: "me", label: "Me", icon: Kh },
  { id: "projects", label: "Projects", icon: Vh },
  { id: "skills", label: "Skills", icon: wh },
  { id: "experience", label: "Experience", icon: Xh },
  { id: "contact", label: "Contact", icon: Hv }
], Hh = [
  "Could Noah build my RAG system?",
  "How does Noah build AI agents?",
  "Does Noah have backend experience?",
  "What project details should I share?"
], Yh = 5e3, $v = 180, Iv = {
  name: "Portfolio",
  githubHandle: "",
  upworkUrl: "#",
  githubUrl: "#",
  email: "",
  projects: [],
  skills: [],
  experience: []
};
function Ji(m) {
  return String(m.name || "").trim().split(/\s+/)[0] || "the portfolio owner";
}
function Pv(m) {
  const [c, s] = $.useState(0), [f, o] = $.useState(!0), [g, A] = $.useState(() => document.visibilityState === "visible"), [x, z] = $.useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  return $.useEffect(() => {
    const b = window.matchMedia("(prefers-reduced-motion: reduce)"), N = () => z(b.matches), j = () => A(document.visibilityState === "visible");
    return b.addEventListener("change", N), document.addEventListener("visibilitychange", j), () => {
      b.removeEventListener("change", N), document.removeEventListener("visibilitychange", j);
    };
  }, []), $.useEffect(() => {
    if (x) {
      s(0), o(!0);
      return;
    }
    if (m || !g) {
      o(!0);
      return;
    }
    const b = window.setTimeout(() => o(!1), Yh), N = window.setTimeout(() => {
      s((j) => (j + 1) % Hh.length), o(!0);
    }, Yh + $v);
    return () => {
      window.clearTimeout(b), window.clearTimeout(N);
    };
  }, [c, g, m, x]), {
    suggestion: Hh[c],
    suggestionVisible: f
  };
}
function Ma({ icon: m, size: c = 18, strokeWidth: s = 1.8 }) {
  return /* @__PURE__ */ d.jsx(m, { "aria-hidden": "true", size: c, strokeWidth: s });
}
function de() {
  return /* @__PURE__ */ d.jsx(Ma, { icon: jv, size: 17, strokeWidth: 1.7 });
}
function t0(m) {
  return String(m).split(/(\*\*[^*\n]+\*\*)/g).map((c, s) => c.startsWith("**") && c.endsWith("**") ? /* @__PURE__ */ d.jsx("strong", { children: c.slice(2, -2) }, `${s}-${c.slice(2, 14)}`) : c);
}
function Zi({ children: m }) {
  return /* @__PURE__ */ d.jsx("div", { className: "message-copy", children: String(m).split(`
`).map((c, s) => /* @__PURE__ */ d.jsx("p", { children: c ? t0(c) : " " }, `${s}-${c.slice(0, 12)}`)) });
}
function Zl({ small: m = !1, assetBase: c, name: s = "portfolio owner" }) {
  return /* @__PURE__ */ d.jsx(
    "img",
    {
      className: m ? "avatar avatar-small" : "avatar",
      src: Jh(c, "noah-avatar.webp"),
      alt: `3D portrait of ${s}`
    }
  );
}
function e0({ project: m, assetBase: c }) {
  return /* @__PURE__ */ d.jsxs(
    "a",
    {
      className: "project-card",
      href: m.href,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": `${m.title}. View on GitHub`,
      children: [
        /* @__PURE__ */ d.jsxs("div", { className: "project-media", children: [
          /* @__PURE__ */ d.jsx("img", { src: Jh(c, m.visual), alt: m.visualAlt, loading: "lazy" }),
          /* @__PURE__ */ d.jsx("span", { className: "project-media-glow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "project-card-body", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "project-card-topline", children: [
            /* @__PURE__ */ d.jsx("span", { className: "status-pill", children: "Source Available" }),
            /* @__PURE__ */ d.jsx(de, {})
          ] }),
          /* @__PURE__ */ d.jsx("h3", { children: m.title }),
          /* @__PURE__ */ d.jsx("p", { children: m.description }),
          /* @__PURE__ */ d.jsxs("span", { className: "project-link-label", children: [
            /* @__PURE__ */ d.jsx(Qh, { "aria-hidden": "true", size: 16 }),
            " View on GitHub"
          ] })
        ] })
      ]
    }
  );
}
function l0({ onAction: m, onAbout: c, onOpenChat: s, assetBase: f, profile: o }) {
  const [g, A] = $.useState(""), [x, z] = $.useState(!1), b = $.useRef(null), N = $.useRef(null), j = $.useRef(null), F = Ji(o), { suggestion: it, suggestionVisible: St } = Pv(
    x || g.length > 0
  );
  $.useEffect(() => {
    const I = b.current, X = N.current;
    if (!I || !X || !("IntersectionObserver" in window))
      return;
    const Q = window.matchMedia("(prefers-reduced-motion: reduce)"), mt = I.getBoundingClientRect().top;
    let k = 0;
    function P(Gt) {
      k = Gt;
      const Me = Math.min(1, Math.max(0, (Gt - 360) / 190)), ve = Q.matches ? 0 : Math.min(123, Gt / 5.04);
      X.style.setProperty("--hero-exit-opacity", Q.matches ? "1" : String(1 - Me)), X.style.setProperty("--hero-exit-offset", `${-ve}px`);
    }
    const V = new window.IntersectionObserver(([Gt]) => {
      P(Math.max(0, mt - Gt.boundingClientRect.top));
    }, {
      root: null,
      threshold: Array.from({ length: 101 }, (Gt, Me) => Me / 100)
    }), Yt = () => P(k);
    return V.observe(I), Q.addEventListener("change", Yt), () => {
      V.disconnect(), Q.removeEventListener("change", Yt);
    };
  }, []), $.useEffect(() => {
    const I = j.current;
    if (!I)
      return;
    const X = [...I.querySelectorAll("[data-scroll-reveal]")];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      X.forEach((k) => k.classList.add("is-visible"));
      return;
    }
    const mt = new window.IntersectionObserver((k) => {
      k.forEach((P) => {
        P.isIntersecting && (P.target.classList.add("is-visible"), mt.unobserve(P.target));
      });
    }, {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12
    });
    return X.forEach((k) => mt.observe(k)), () => mt.disconnect();
  }, [o.projects.length]);
  function Et(I) {
    I.preventDefault();
    const X = g.trim();
    if (!X) {
      s("");
      return;
    }
    s(X), A("");
  }
  function Bt() {
    var X;
    const I = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    (X = j.current) == null || X.scrollIntoView({ behavior: I ? "auto" : "smooth", block: "start" });
  }
  return /* @__PURE__ */ d.jsxs("main", { className: "portfolio-shell home-view", children: [
    /* @__PURE__ */ d.jsxs("header", { className: "site-header", children: [
      /* @__PURE__ */ d.jsxs("button", { type: "button", className: "header-cta header-opportunity", onClick: () => s(`How can ${F} help with my AI project?`), children: [
        /* @__PURE__ */ d.jsx("span", { className: "opportunity-long", children: "Looking for a talent?" }),
        /* @__PURE__ */ d.jsx("span", { className: "opportunity-short", children: "Talent?" })
      ] }),
      /* @__PURE__ */ d.jsx("button", { className: "brand-button header-brand", type: "button", "aria-label": "Portfolio home", onClick: () => m("home"), children: /* @__PURE__ */ d.jsx("span", { className: "brand-mark", children: "NW" }) }),
      /* @__PURE__ */ d.jsx("nav", { className: "header-nav", "aria-label": "Portfolio navigation", children: /* @__PURE__ */ d.jsx("button", { type: "button", className: "header-link", onClick: c, children: "About" }) }),
      /* @__PURE__ */ d.jsx("button", { className: "mobile-menu", type: "button", "aria-label": "Open navigation", onClick: c, children: /* @__PURE__ */ d.jsx(Ma, { icon: Lv, size: 20 }) })
    ] }),
    /* @__PURE__ */ d.jsxs("section", { ref: b, className: "hero-section", "aria-labelledby": "hero-title", children: [
      /* @__PURE__ */ d.jsx("div", { className: "watermark", "aria-hidden": "true", children: /* @__PURE__ */ d.jsx("span", { children: o.name }) }),
      /* @__PURE__ */ d.jsxs("p", { className: "hero-intro", children: [
        "Hey, I'm ",
        o.name,
        " ",
        /* @__PURE__ */ d.jsx("span", { "aria-hidden": "true", children: "👋" })
      ] }),
      /* @__PURE__ */ d.jsx("h1", { id: "hero-title", children: "AI Portfolio" }),
      /* @__PURE__ */ d.jsxs("div", { className: "hero-avatar-wrap", children: [
        /* @__PURE__ */ d.jsx("div", { className: "avatar-orbit orbit-one", "aria-hidden": "true" }),
        /* @__PURE__ */ d.jsx("div", { className: "avatar-orbit orbit-two", "aria-hidden": "true" }),
        /* @__PURE__ */ d.jsx(Zl, { assetBase: f, name: o.name })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "hero-interactions", ref: N, children: [
        /* @__PURE__ */ d.jsxs("form", { className: "question-form hero-question", onSubmit: Et, children: [
          /* @__PURE__ */ d.jsxs("label", { htmlFor: "hero-question", children: [
            "Ask about ",
            F,
            "'s work"
          ] }),
          /* @__PURE__ */ d.jsxs("div", { className: "question-input-row", children: [
            /* @__PURE__ */ d.jsx(
              "input",
              {
                id: "hero-question",
                className: St ? "hero-question-input" : "hero-question-input is-suggestion-hidden",
                value: g,
                maxLength: 2e3,
                onChange: (I) => A(I.target.value),
                onFocus: () => z(!0),
                onBlur: () => z(!1),
                placeholder: it,
                autoComplete: "off"
              }
            ),
            /* @__PURE__ */ d.jsx("button", { type: "submit", className: "send-button", "aria-label": "Ask the AI Portfolio", children: /* @__PURE__ */ d.jsx(Ma, { icon: qh, size: 20, strokeWidth: 1.9 }) })
          ] }),
          g.length >= 1800 && /* @__PURE__ */ d.jsxs("p", { className: "input-counter", children: [
            g.length.toLocaleString(),
            " / 2,000"
          ] }),
          /* @__PURE__ */ d.jsx("p", { className: "privacy-note", children: "AI-generated · Don't share sensitive information" })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "quick-grid", "aria-label": "Quick portfolio views", children: Wv.map(({ id: I, label: X, icon: Q }) => /* @__PURE__ */ d.jsxs("button", { className: "quick-card", type: "button", onClick: () => m(I), children: [
          /* @__PURE__ */ d.jsx(Ma, { icon: Q, size: 19 }),
          /* @__PURE__ */ d.jsx("span", { children: X }),
          /* @__PURE__ */ d.jsx(Cv, { className: "quick-arrow", "aria-hidden": "true", size: 15 })
        ] }, I)) })
      ] }),
      /* @__PURE__ */ d.jsxs("button", { type: "button", className: "explore-projects", onClick: Bt, children: [
        /* @__PURE__ */ d.jsx("span", { children: "Explore Projects" }),
        /* @__PURE__ */ d.jsx("span", { className: "explore-arrow", children: /* @__PURE__ */ d.jsx(Ma, { icon: Bv, size: 20, strokeWidth: 2 }) })
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("section", { ref: j, className: "projects-section", "aria-labelledby": "projects-heading", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "section-heading-row scroll-reveal", "data-scroll-reveal": !0, children: [
        /* @__PURE__ */ d.jsxs("div", { children: [
          /* @__PURE__ */ d.jsx("p", { className: "section-kicker", children: "Selected work" }),
          /* @__PURE__ */ d.jsx("h2", { id: "projects-heading", children: "Production AI Work" })
        ] }),
        /* @__PURE__ */ d.jsxs("button", { type: "button", className: "text-action", onClick: () => m("projects"), children: [
          "Ask about projects ",
          /* @__PURE__ */ d.jsx(de, {})
        ] })
      ] }),
      /* @__PURE__ */ d.jsx("div", { className: "project-grid scroll-reveal", "data-scroll-reveal": !0, children: o.projects.map((I) => /* @__PURE__ */ d.jsx(e0, { project: I, assetBase: f }, I.id)) }),
      /* @__PURE__ */ d.jsxs("button", { type: "button", className: "process-banner scroll-reveal", "data-scroll-reveal": !0, onClick: () => m("process"), children: [
        /* @__PURE__ */ d.jsx("span", { className: "process-icon", children: /* @__PURE__ */ d.jsx(Gv, { "aria-hidden": "true", size: 20 }) }),
        /* @__PURE__ */ d.jsxs("span", { children: [
          /* @__PURE__ */ d.jsx("strong", { children: "Ask About My Process" }),
          /* @__PURE__ */ d.jsx("small", { children: "From requirements and data to deployment and handoff" })
        ] }),
        /* @__PURE__ */ d.jsx(de, {})
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("section", { className: "contact-banner", "aria-labelledby": "contact-heading", children: [
      /* @__PURE__ */ d.jsxs("div", { children: [
        /* @__PURE__ */ d.jsx("p", { className: "section-kicker", children: "Ready when you are" }),
        /* @__PURE__ */ d.jsx("h2", { id: "contact-heading", children: "Bring me the messy AI idea." }),
        /* @__PURE__ */ d.jsx("p", { children: "Share the use case, data shape, current stack, and workflow. We'll find the smallest useful first slice." })
      ] }),
      /* @__PURE__ */ d.jsxs("a", { className: "upwork-button", href: o.upworkUrl, target: "_blank", rel: "noreferrer", children: [
        "Continue on Upwork ",
        /* @__PURE__ */ d.jsx(de, {})
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("footer", { className: "site-footer", children: [
      /* @__PURE__ */ d.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        o.name
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "footer-links", children: [
        /* @__PURE__ */ d.jsxs("a", { href: `mailto:${o.email}`, children: [
          /* @__PURE__ */ d.jsx(Zh, { "aria-hidden": "true", size: 16 }),
          " ",
          o.email
        ] }),
        /* @__PURE__ */ d.jsxs("a", { href: o.githubUrl, target: "_blank", rel: "noreferrer", children: [
          /* @__PURE__ */ d.jsx(Qh, { "aria-hidden": "true", size: 16 }),
          " ",
          o.githubHandle
        ] })
      ] })
    ] })
  ] });
}
function a0({ action: m, profile: c }) {
  const s = Ji(c);
  return m === "skills" ? /* @__PURE__ */ d.jsxs("section", { className: "static-details", "aria-label": `${s}'s grouped skills`, children: [
    /* @__PURE__ */ d.jsxs("div", { className: "details-heading", children: [
      /* @__PURE__ */ d.jsx(wh, { "aria-hidden": "true", size: 17 }),
      /* @__PURE__ */ d.jsx("strong", { children: "Core skills" })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "skill-groups", children: c.skills.map((f) => /* @__PURE__ */ d.jsxs("div", { className: "skill-group", children: [
      /* @__PURE__ */ d.jsx("h2", { children: f.title }),
      /* @__PURE__ */ d.jsx("div", { className: "skill-tags", children: f.items.map((o) => /* @__PURE__ */ d.jsx("span", { children: o }, o)) })
    ] }, f.title)) })
  ] }) : m === "experience" ? /* @__PURE__ */ d.jsxs("section", { className: "static-details", "aria-label": `${s}'s public experience timeline`, children: [
    /* @__PURE__ */ d.jsxs("div", { className: "details-heading", children: [
      /* @__PURE__ */ d.jsx(Xh, { "aria-hidden": "true", size: 17 }),
      /* @__PURE__ */ d.jsx("strong", { children: "Public experience timeline" })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "experience-list", children: c.experience.map((f) => /* @__PURE__ */ d.jsxs("article", { className: "experience-item", children: [
      /* @__PURE__ */ d.jsxs("div", { children: [
        /* @__PURE__ */ d.jsx("h2", { children: f.company }),
        /* @__PURE__ */ d.jsx("p", { children: f.note })
      ] }),
      /* @__PURE__ */ d.jsx("time", { children: f.dates })
    ] }, f.company)) })
  ] }) : m === "contact" ? /* @__PURE__ */ d.jsxs("section", { className: "static-details contact-details", "aria-label": `${s}'s public contact channels`, children: [
    /* @__PURE__ */ d.jsxs("div", { className: "details-heading", children: [
      /* @__PURE__ */ d.jsx(Zh, { "aria-hidden": "true", size: 17 }),
      /* @__PURE__ */ d.jsx("strong", { children: "Public contact channels" })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "contact-detail-links", children: [
      /* @__PURE__ */ d.jsxs("a", { href: c.upworkUrl, target: "_blank", rel: "noreferrer", children: [
        /* @__PURE__ */ d.jsx("span", { children: "Upwork" }),
        /* @__PURE__ */ d.jsx(de, {})
      ] }),
      /* @__PURE__ */ d.jsxs("a", { href: `mailto:${c.email}`, children: [
        /* @__PURE__ */ d.jsx("span", { children: c.email }),
        /* @__PURE__ */ d.jsx(de, {})
      ] }),
      /* @__PURE__ */ d.jsxs("a", { href: c.githubUrl, target: "_blank", rel: "noreferrer", children: [
        /* @__PURE__ */ d.jsxs("span", { children: [
          "GitHub · ",
          c.githubHandle
        ] }),
        /* @__PURE__ */ d.jsx(de, {})
      ] })
    ] })
  ] }) : m === "projects" ? /* @__PURE__ */ d.jsxs("section", { className: "static-details", "aria-label": `${s}'s project links`, children: [
    /* @__PURE__ */ d.jsxs("div", { className: "details-heading", children: [
      /* @__PURE__ */ d.jsx(Vh, { "aria-hidden": "true", size: 17 }),
      /* @__PURE__ */ d.jsx("strong", { children: "Open the source" })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "project-detail-links", children: c.projects.map((f) => /* @__PURE__ */ d.jsxs("a", { href: f.href, target: "_blank", rel: "noreferrer", children: [
      /* @__PURE__ */ d.jsx("span", { children: f.title }),
      /* @__PURE__ */ d.jsx(de, {})
    ] }, f.id)) })
  ] }) : null;
}
function u0({ data: m, onAction: c, onHome: s, onAbout: f, assetBase: o, setTriggerValue: g, profile: A }) {
  const [x, z] = $.useState(""), [b, N] = $.useState([]), [j, F] = $.useState(""), [it, St] = $.useState(!1), Et = $.useRef(null), Bt = Ji(A), I = Array.isArray(m == null ? void 0 : m.messages) ? m.messages : [], X = $.useMemo(() => [...I, ...b], [I, b]), Q = !!(m != null && m.pending || it);
  $.useEffect(() => {
    N([]), F(""), m != null && m.pending || St(!1);
  }, [m == null ? void 0 : m.messageRevision, m == null ? void 0 : m.view, m == null ? void 0 : m.error, m == null ? void 0 : m.pending]), $.useEffect(() => {
    var k;
    (k = Et.current) == null || k.scrollIntoView({
      behavior: "smooth",
      block: m != null && m.staticAction ? "end" : "nearest"
    });
  }, [X.length, m == null ? void 0 : m.pending, m == null ? void 0 : m.staticAction]), $.useEffect(() => {
    if (!(m != null && m.pending)) return;
    const k = window.setInterval(() => {
      g == null || g("heartbeat", Date.now());
    }, 160);
    return () => window.clearInterval(k);
  }, [m == null ? void 0 : m.pending, g]);
  function mt(k) {
    if (k.preventDefault(), Q) return;
    const P = x.trim();
    if (P) {
      if (P.length > 2e3) {
        F("Please keep a question under 2,000 characters.");
        return;
      }
      F(""), N([{ role: "user", content: P }]), St(!0), z(""), c("submit", P);
    }
  }
  return /* @__PURE__ */ d.jsxs("main", { className: "portfolio-shell chat-view", children: [
    /* @__PURE__ */ d.jsxs("header", { className: "chat-header", children: [
      /* @__PURE__ */ d.jsxs("button", { className: "brand-button", type: "button", "aria-label": "Portfolio home", onClick: s, children: [
        /* @__PURE__ */ d.jsx(Nv, { "aria-hidden": "true", size: 18 }),
        /* @__PURE__ */ d.jsx("span", { className: "brand-mark", children: "NW" })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "chat-header-center", children: [
        /* @__PURE__ */ d.jsx("span", { className: "online-dot" }),
        " AI Portfolio chat"
      ] }),
      /* @__PURE__ */ d.jsx("button", { className: "header-link about-chat", type: "button", onClick: f, children: "About" })
    ] }),
    /* @__PURE__ */ d.jsxs("section", { className: m != null && m.staticAction ? "chat-content chat-content-static" : "chat-content", "aria-labelledby": "chat-heading", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "chat-intro", children: [
        /* @__PURE__ */ d.jsx(Zl, { small: !0, assetBase: o, name: A.name }),
        /* @__PURE__ */ d.jsxs("div", { children: [
          /* @__PURE__ */ d.jsx("p", { className: "eyebrow", children: "AI Portfolio" }),
          /* @__PURE__ */ d.jsxs("h1", { id: "chat-heading", children: [
            "Ask me about ",
            Bt,
            "'s work"
          ] }),
          /* @__PURE__ */ d.jsx("p", { children: "I'm an AI-generated portfolio, here to make the useful parts easy to explore." })
        ] })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "message-list", "aria-live": "polite", children: [
        X.length === 0 && /* @__PURE__ */ d.jsxs("div", { className: "assistant-message", children: [
          /* @__PURE__ */ d.jsx(Zl, { small: !0, assetBase: o, name: A.name }),
          /* @__PURE__ */ d.jsx("div", { className: "message-bubble", children: /* @__PURE__ */ d.jsx(Zi, { children: "Hi — I can give you a concise tour of this portfolio's projects, skills, experience, or process. What are you building?" }) })
        ] }),
        X.map((k, P) => {
          var V;
          return /* @__PURE__ */ d.jsxs("div", { className: k.role === "user" ? "user-message" : "assistant-message", children: [
            k.role !== "user" && /* @__PURE__ */ d.jsx(Zl, { small: !0, assetBase: o, name: A.name }),
            /* @__PURE__ */ d.jsxs("div", { className: "message-bubble", children: [
              /* @__PURE__ */ d.jsx(Zi, { children: k.content }),
              k.role !== "user" && (m == null ? void 0 : m.showUpwork) && /* @__PURE__ */ d.jsxs("a", { className: "message-cta", href: A.upworkUrl, target: "_blank", rel: "noreferrer", children: [
                "Continue on Upwork ",
                /* @__PURE__ */ d.jsx(de, {})
              ] })
            ] })
          ] }, `${k.role}-${P}-${(V = k.content) == null ? void 0 : V.slice(0, 10)}`);
        }),
        (m == null ? void 0 : m.staticAction) && /* @__PURE__ */ d.jsx(a0, { action: m.staticAction, profile: A }),
        (m == null ? void 0 : m.streamingText) && /* @__PURE__ */ d.jsxs("div", { className: "assistant-message", children: [
          /* @__PURE__ */ d.jsx(Zl, { small: !0, assetBase: o, name: A.name }),
          /* @__PURE__ */ d.jsxs("div", { className: "message-bubble streaming-bubble", children: [
            /* @__PURE__ */ d.jsx(Zi, { children: m.streamingText }),
            /* @__PURE__ */ d.jsx("span", { className: "streaming-caret", "aria-label": "Generating" })
          ] })
        ] }),
        ((m == null ? void 0 : m.pending) || it) && !(m != null && m.streamingText) && /* @__PURE__ */ d.jsxs("div", { className: "assistant-message", children: [
          /* @__PURE__ */ d.jsx(Zl, { small: !0, assetBase: o, name: A.name }),
          /* @__PURE__ */ d.jsxs("div", { className: "message-bubble typing-bubble", children: [
            /* @__PURE__ */ d.jsx("span", { className: "typing-label", children: "Preparing a response" }),
            /* @__PURE__ */ d.jsxs("span", { className: "typing-dots", "aria-label": "Generating", children: [
              /* @__PURE__ */ d.jsx("i", {}),
              /* @__PURE__ */ d.jsx("i", {}),
              /* @__PURE__ */ d.jsx("i", {})
            ] })
          ] })
        ] }),
        (m == null ? void 0 : m.error) && /* @__PURE__ */ d.jsxs("div", { className: "assistant-message", children: [
          /* @__PURE__ */ d.jsx(Zl, { small: !0, assetBase: o, name: A.name }),
          /* @__PURE__ */ d.jsxs("div", { className: "message-bubble error-bubble", children: [
            /* @__PURE__ */ d.jsx(Zi, { children: m.error }),
            /* @__PURE__ */ d.jsxs("button", { className: "inline-action", type: "button", onClick: s, children: [
              "Browse the static portfolio ",
              /* @__PURE__ */ d.jsx(de, {})
            ] })
          ] })
        ] }),
        j && /* @__PURE__ */ d.jsx("p", { className: "input-notice", role: "alert", children: j }),
        /* @__PURE__ */ d.jsx("div", { ref: Et, className: "message-end" })
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("form", { className: "question-form chat-question", onSubmit: mt, children: [
      /* @__PURE__ */ d.jsx("label", { htmlFor: "chat-question", children: "Ask the AI Portfolio" }),
      /* @__PURE__ */ d.jsxs("div", { className: "question-input-row", children: [
        /* @__PURE__ */ d.jsx("input", { id: "chat-question", value: x, maxLength: 2e3, onChange: (k) => z(k.target.value), placeholder: Q ? "Waiting for this answer…" : "Ask a follow-up…", autoComplete: "off", disabled: Q }),
        /* @__PURE__ */ d.jsx("button", { type: "submit", className: "send-button", "aria-label": "Send question", disabled: Q, children: /* @__PURE__ */ d.jsx(Ma, { icon: qh, size: 20, strokeWidth: 1.9 }) })
      ] }),
      x.length >= 1800 && /* @__PURE__ */ d.jsxs("p", { className: "input-counter", children: [
        x.length.toLocaleString(),
        " / 2,000"
      ] }),
      /* @__PURE__ */ d.jsxs("p", { className: "privacy-note", children: [
        "AI-generated · Don't share secrets · Final scope and terms are confirmed by ",
        Bt,
        " on Upwork"
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("footer", { className: "chat-footer", children: [
      /* @__PURE__ */ d.jsxs("a", { href: A.githubUrl, target: "_blank", rel: "noreferrer", children: [
        A.githubHandle,
        " ",
        /* @__PURE__ */ d.jsx(de, {})
      ] }),
      /* @__PURE__ */ d.jsxs("a", { className: "chat-upwork-link", href: A.upworkUrl, target: "_blank", rel: "noreferrer", children: [
        "Continue on Upwork ",
        /* @__PURE__ */ d.jsx(de, {})
      ] })
    ] })
  ] });
}
function i0({ onClose: m, returnFocusRef: c, profile: s }) {
  const f = $.useRef(null), o = Ji(s);
  return $.useEffect(() => {
    var A;
    (A = f.current) == null || A.focus();
    function g(x) {
      x.key === "Escape" && m();
    }
    return document.addEventListener("keydown", g), () => {
      var x, z;
      document.removeEventListener("keydown", g), (z = (x = c == null ? void 0 : c.current) == null ? void 0 : x.focus) == null || z.call(x);
    };
  }, [m, c]), /* @__PURE__ */ d.jsx("div", { className: "modal-backdrop", role: "presentation", onMouseDown: (g) => {
    g.target === g.currentTarget && m();
  }, children: /* @__PURE__ */ d.jsxs("section", { className: "about-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "about-title", children: [
    /* @__PURE__ */ d.jsx("button", { ref: f, className: "modal-close", type: "button", "aria-label": "Close About", onClick: m, children: /* @__PURE__ */ d.jsx(qv, { size: 20 }) }),
    /* @__PURE__ */ d.jsx("div", { className: "modal-icon", children: /* @__PURE__ */ d.jsx(Kh, { size: 22 }) }),
    /* @__PURE__ */ d.jsx("p", { className: "section-kicker", children: "About this portfolio" }),
    /* @__PURE__ */ d.jsxs("h2", { id: "about-title", children: [
      "A conversational guide to ",
      o,
      "'s work."
    ] }),
    /* @__PURE__ */ d.jsxs("p", { children: [
      "Ask about ",
      o,
      "'s projects, experience, technical decisions, and approach to building AI and backend systems. Answers are generated from a curated set of public information about his work."
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "modal-boundary", children: [
      /* @__PURE__ */ d.jsx(Yv, { size: 18 }),
      /* @__PURE__ */ d.jsxs("span", { children: [
        "AI-generated answers may be incomplete. Confirm availability, scope, rates, and project terms directly with ",
        o,
        "."
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("a", { className: "upwork-button modal-action", href: s.upworkUrl, target: "_blank", rel: "noreferrer", children: [
      "Contact ",
      o,
      " on Upwork ",
      /* @__PURE__ */ d.jsx(de, {})
    ] })
  ] }) });
}
function n0({ data: m = {}, setTriggerValue: c, assetBase: s = "./assets/" }) {
  const f = m.profile || Iv, [o, g] = $.useState(m.view || "home"), [A, x] = $.useState(!1), z = $.useRef(null), b = $.useRef(new URL(window.location.href).searchParams.has("query"));
  $.useEffect(() => {
    g(m.view || "home");
  }, [m.view]), $.useEffect(() => {
    function it() {
      const St = new URL(window.location.href).searchParams.has("query"), Et = b.current;
      b.current = St, Et && !St && (g("home"), c == null || c("reset", !0));
    }
    return window.addEventListener("popstate", it), () => window.removeEventListener("popstate", it);
  }, [c]);
  function N(it, St = null) {
    if (it === "home") {
      b.current = !1, c == null || c("reset", !0);
      return;
    }
    g("chat"), c == null || c("action", { type: it, value: St });
  }
  function j(it) {
    it.trim() && (b.current = !0), g("chat"), c == null || c("submit", { query: it });
  }
  function F(it) {
    z.current = (it == null ? void 0 : it.currentTarget) || null, x(!0);
  }
  return /* @__PURE__ */ d.jsxs("div", { className: "app-root", children: [
    /* @__PURE__ */ d.jsx(kv, {}),
    o === "chat" ? /* @__PURE__ */ d.jsx(u0, { data: m, profile: f, assetBase: s, setTriggerValue: c, onAction: N, onHome: () => N("home"), onAbout: F }) : /* @__PURE__ */ d.jsx(l0, { profile: f, assetBase: s, onAction: N, onAbout: F, onOpenChat: j }),
    A && /* @__PURE__ */ d.jsx(i0, { profile: f, returnFocusRef: z, onClose: () => x(!1) })
  ] });
}
const pf = /* @__PURE__ */ new WeakMap();
function c0(m) {
  const { data: c, parentElement: s, setTriggerValue: f } = m, o = s.querySelector("#portfolio-root"), g = new URL(
    /* @vite-ignore */
    "./assets/",
    import.meta.url
  ).href;
  let A = pf.get(o);
  return A || (A = zv.createRoot(o), pf.set(o, A)), A.render(
    /* @__PURE__ */ d.jsx(Ev.StrictMode, { children: /* @__PURE__ */ d.jsx(
      n0,
      {
        data: c,
        setTriggerValue: f,
        assetBase: g
      }
    ) })
  ), () => {
    A.unmount(), pf.delete(o);
  };
}
export {
  c0 as default
};
