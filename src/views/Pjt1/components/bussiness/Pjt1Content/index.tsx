import { defineComponent } from "vue";

export default defineComponent({
  setup(props, { slots }) {
    return () => (
      <div class="pjt1">
        {Object.keys(slots).map((key) => {
          slots[key]?.();
        })}
      </div>
    );
  },
});
