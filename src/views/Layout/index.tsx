import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import "./index.less";
const Layout = defineComponent({
  props: [],
  setup(props, { slots }) {
    const leftStyle = ref<{ width: number }>({
      width: 0,
    });
    const maxWidth: number = 7; //最大宽度
    let incressNum: number = 0.0002; //递增系数
    let hide: number | undefined = undefined, //隐藏的timer
      display: number | undefined = undefined; //显示的timer
    /**
     * 用来隐藏侧边栏
     * @returns void
     */
    const hideLeft = (): void => {
      if (hide) {
        return;
      }
      hide = setInterval(() => {
        clearInterval(display);
        display = undefined;
        if (leftStyle.value.width === 0) {
          clearInterval(hide);
          hide = undefined;
        } else {
          leftStyle.value.width -= incressNum * 2;
          leftStyle.value.width =
            leftStyle.value.width <= 0 ? 0 : leftStyle.value.width;
          incressNum -= 0.0002;
        }
      }, 0);
    };
    /**
     * 显示左侧的函数
     * @returns void
     */
    const displayLeft = (): void => {
      if (display) {
        return;
      } else {
        display = setInterval(() => {
          if (hide) {
            clearInterval(display);
            display = undefined;
          }
          if (leftStyle.value.width === maxWidth) {
            clearInterval(display);
            display = undefined;
          } else {
            leftStyle.value.width += incressNum * 2;
            leftStyle.value.width =
              leftStyle.value.width >= maxWidth
                ? maxWidth
                : leftStyle.value.width;
            incressNum += 0.0002;
          }
        }, 0);
      }
    };

    return () => (
      <div class="layout">
        <div
          class="left"
          onMouseout={hideLeft}
          style={{ width: leftStyle.value.width + "vw" }}
        ></div>
        <div class="left-hover" onMousemove={displayLeft}></div>
        <div class="content">
          <RouterView />
        </div>
      </div>
    );
  },
});
export default Layout;
