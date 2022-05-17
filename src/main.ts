import { createApp } from "vue";
import "ant-design-vue/dist/antd.less";
import "./index.less";
import route from "./router";
import App from "./App";
import { getTheme, getThemeLists } from "./api/theme";
const app = createApp(App);
app.use(route);
getTheme().then((res) => {
  const { theme } = res.data.data;
  import(`./theme/css/${theme}Theme.css`).then(() => {
    app.mount("#app");
  });
});
