"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
// EXTERNAL MODULE: ./store/actions/actionTypes.ts
var actionTypes = __webpack_require__(459);
;// CONCATENATED MODULE: ./store/reducers/data.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const id = `"랭크"    "플레이어"    "길드 역할"    "양"
"1"    "1day1coffeemilk"    "Officer"    "1133667556"
"2"    "MANBOCKDANG"    "멤버"    "759617345"
"3"    "IHIHHIHI"    "멤버"    "701004554"
"4"    "bionkr01"    "멤버"    "694391569"
"5"    "Pohang"    "focus"    "667770380"
"6"    "Midasno"    "멤버"    "655201796"
"7"    "lightlook"    "멤버"    "588116072"
"8"    "DKBruce"    "멤버"    "586232762"
"9"    "YamaYDona"    "focus"    "577956582"
"10"    "KingofSon"    "멤버"    "509594507"
"11"    "Barekin"    "멤버"    "499337141"
"12"    "birdog"    "Master of Coin"    "419052560"`;

function cheuse(id) {
  const re = id.split("\n");
  const ref = re.map(a => {
    const ref = a.split("    ");
    return ref;
  });
  let arr = [];
  const refm = ref.map(a => {
    a = a.filter((a, index) => {
      if (index % 2 == 1) {
        return a;
      }
    });
    return a;
  });
  refm.map(a => {
    let ob = {
      user: a[0].replace('"', "").replace('"', ""),
      count: a[1].replace('"', "").replace('"', "")
    };
    arr.push(ob);
  });
  return arr;
}

const initialState = {
  guild: cheuse(id)
};

const Main = (state = initialState, action) => {
  console.log(action.type == actionTypes/* GUILDGET */.Kl);

  switch (action.type) {
    case actionTypes/* GUILDGET */.Kl:
      return {
        guild: action.payload
      };

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ const data = (Main);
;// CONCATENATED MODULE: ./store/reducers/index.ts


const reducers_data = (0,external_redux_namespaceObject.combineReducers)({
  main: data
});
/* harmony default export */ const reducers = (reducers_data);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux-saga"
const external_redux_saga_namespaceObject = require("redux-saga");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: external "redux-saga/effects"
const effects_namespaceObject = require("redux-saga/effects");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./store/reducers/LoginSaga.ts




const checkdata = async () => {
  const res = await external_axios_default().get("https://raw.githubusercontent.com/qjawns0222/caremaker/next%2Bts-15%EC%9D%BC%EC%B0%A8-Saga-login/login.json");
  return res.data;
};

function* checklogin({
  type,
  payload,
  router
}) {
  try {
    const data = yield (0,effects_namespaceObject.call)(checkdata);
    const result = data.login.find(res => {
      if (payload.id == res.id && payload.password == res.password) {
        return res;
      }
    });

    if (result) {
      yield (0,effects_namespaceObject.put)({
        type: actionTypes/* LOGIN_SUCCESS */.XP,
        payload,
        router
      });
      const history = (0,effects_namespaceObject.getContext)("history");
    } else {
      alert("아이디와 비밀번호 확인해주세요");
    }
  } catch (e) {
    console.log(e);
  }
}

function* watchLogin() {
  yield (0,effects_namespaceObject.takeLatest)(actionTypes/* LOGIN_PENDING */.EM, checklogin);
}
;// CONCATENATED MODULE: ./store/reducers/Sagas/index.ts


function* rootSaga() {
  yield (0,effects_namespaceObject.all)([(0,effects_namespaceObject.call)(watchLogin)]);
}
;// CONCATENATED MODULE: ./store/index.ts







const bindMiddleware = middleware => {
  if (false) {}

  return applyMiddleware(...middleware);
};

const makestore = () => {
  const sagamiddleware = external_redux_saga_default()({});
  const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: reducers,
    middleware: [sagamiddleware],
    devTools: false
  });
  sagamiddleware.run(rootSaga);
  return store;
};

const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makestore, {
  debug: true
});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/_app.tsx


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _app_ownKeys(Object(source), !0).forEach(function (key) { _app_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
      className: "jsx-2483643847" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
    })), /*#__PURE__*/jsx_runtime_.jsx((styled_jsx_default()), {
      id: "2483643847",
      children: ["*{-webkit-text-decoration:none;text-decoration:none;margin:0px;padding:0px;}", "a{color:inherit;-webkit-text-decoration:none;text-decoration:none;}"]
    })]
  });
};

/* harmony default export */ const _app = (wrapper.withRedux(App));

/***/ }),

/***/ 459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EM": () => (/* binding */ LOGIN_PENDING),
/* harmony export */   "Kl": () => (/* binding */ GUILDGET),
/* harmony export */   "XP": () => (/* binding */ LOGIN_SUCCESS)
/* harmony export */ });
/* unused harmony exports Increase, Delete, Update, LOGIN_FAIL, LOGOUT */
const Increase = "caremaker/dataincrease";
const Delete = "caremaker/datadelete";
const Update = "caremaker/dataupdate";
const LOGIN_PENDING = "caremaker/LOGIN_PENDING";
const LOGIN_SUCCESS = "caremaker/LOGIN_SUCCESS";
const LOGIN_FAIL = "caremaker/LOGIN_FAIL";
const LOGOUT = "caremaker/LOGOUT";
const GUILDGET = "caremaker/GUILDGET";

/***/ }),

/***/ 561:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(418));
module.exports = __webpack_exports__;

})();