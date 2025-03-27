import { useLaunch } from "@tarojs/taro";
import "./app.css";
function App(_ref) {
  var children = _ref.children;
  useLaunch(function () {
    console.log("App launched.");
  });
  return children;
}
export default App;