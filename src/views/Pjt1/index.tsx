import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  setup(props) {
    return () => (
      <dic class="pjt1">
        <RouterView />
      </dic>
    );
  },
});
