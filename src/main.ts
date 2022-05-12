import { createApp } from "vue";
import "./theme/css/index.css";
import "./index.less";
import route from "./router";
import App from "./App";
const app = createApp(App);
app.use(route);
console.log(route);

app.mount("#app");
