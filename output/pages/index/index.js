'use strict';

const taro = require('../../taro.js');
require('../../vendors.js');

const index = '';

function Index() {
  taro.taroExports.useLoad(function () {
    console.log("Page loaded.");
  });
  return /* @__PURE__ */taro.jsxRuntimeExports.jsx(taro.View, {
    className: "index bg-[#123456]",
    children: /* @__PURE__ */taro.jsxRuntimeExports.jsx(taro.Text, {
      className: "text-[55rpx] text-[#fff]",
      children: "Hello world!"
    })
  });
}

var config = {
  "navigationBarTitleText": "首页"
};
Page(taro.createPageConfig(Index, 'pages/index/index', {
  root: {
    cn: []
  }
}, config || {}));