import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Index() {
  useLoad(function () {
    console.log("Page loaded.");
  });
  return /* @__PURE__ */_jsx(View, {
    className: "index bg-[#123456]",
    children: /* @__PURE__ */_jsx(Text, {
      className: "text-[55rpx] text-[#fff]",
      children: "Hello world!"
    })
  });
}