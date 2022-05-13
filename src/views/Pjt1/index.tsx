import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  setup(props) {
    return () => (
      <div class="pjt1-panel">
        <RouterView />
      </div>
    );
  },
});
