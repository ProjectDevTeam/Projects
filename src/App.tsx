import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <>
        <RouterView />
      </>
    );
  },
});
