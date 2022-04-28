import { defineComponent, ref } from "vue";

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
