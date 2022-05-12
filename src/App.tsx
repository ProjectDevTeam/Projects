import { defineComponent, ref } from "vue";
import "./app.less";
export default defineComponent({
  name: "App",
  setup() {
    const title = ref<string>("Hello Projects!");
    const auther: string = "Code Wly";
    return () => (
      <>
        <div class="app">{title.value}</div>
        <div class="auth">auther:{auther}</div>
      </>
    );
  },
});
