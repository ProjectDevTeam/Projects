import { createApp } from "vue";
import "./index.less";
import "./theme/css/darkTheme.css";
import route from "./router";
import App from "./App";
import "ant-design-vue/dist/antd.less";

const app = createApp(App);
app.use(route);
console.log(route);

app.mount("#app");
