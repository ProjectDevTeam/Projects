import { defineComponent } from "vue";
import "./index.less";
export default defineComponent({
  setup(props, { slots }) {
    return () => (
      <div class="projects">
        <div class="top"></div>
        <div class="projects-content">{slots.content?.()}</div>
      </div>
    );
  },
});
