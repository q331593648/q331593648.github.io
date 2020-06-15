(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{178:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fetch"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Fetch API 提供了一个 JavaScript 接口，用于访问和操纵 HTTP 管道的部分，例如请求和响应。它还提供了一个全局 fetch()方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。这种功能以前是使用 XMLHttpRequest 实现的。Fetch 提供了一个更好的替代方法，可以很容易地被其他技术使用，例如 Service Workers。Fetch 还提供了单个逻辑位置来定义其他 HTTP 相关概念，例如 CORS 和 HTTP 的扩展。请注意，fetch 规范与 jQuery.ajax()主要有两种方式的不同，牢记：当接收到一个代表错误的 HTTP 状态码时，从 fetch()返回的 Promise 不会被标记为 reject， 即使该 HTTP 响应的状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。默认情况下，fetch 不会从服务端发送或接收任何 cookies, 如果站点依赖于用户 session，则会导致未经认证的请求（要发送 cookies，必须设置 credentials 选项）。自从 2017 年 8 月 25 日后，默认的 credentials 政策变更为 same-originFirefox 也在 61.0b13 中改变默认值")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch","aria-hidden":"true"}},[this._v("#")]),this._v(" fetch")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"进行-fetch-请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进行-fetch-请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 进行 fetch 请求")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("  fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com/movies.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    .then"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response.json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    .then"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myJson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myJson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"支持的请求参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持的请求参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 支持的请求参数")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("    postData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com/answer'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("answer: 42"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      .then"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(" // JSON from "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("response.json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" call\n      .catch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" console.error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" postData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url, data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url, "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        body: JSON.stringify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", // must match "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),t._v(" header\n        cache: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no-cache'")]),t._v(", // *default, no-cache, reload, force-cache, only-if-cached\n        credentials: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'same-origin'")]),t._v(", // include, same-origin, *omit\n        headers: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user-agent'")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mozilla/4.0 MDN Example'")]),t._v(",\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type'")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n        method: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v(", // *GET, POST, PUT, DELETE, etc.\n        mode: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cors'")]),t._v(", // no-cors, cors, *same-origin\n        redirect: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'follow'")]),t._v(", // manual, *follow, error\n        referrer: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no-referrer'")]),t._v(", // *client, no-referrer\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      .then"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" response.json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(" // parses response to JSON\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("注意 node 中使用：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("安装依赖:\nrequire('es6-promise').polyfill(),\nrequire('isomorphic-fetch')\n")])])])}],!1,null,null,null);s.default=e.exports}}]);