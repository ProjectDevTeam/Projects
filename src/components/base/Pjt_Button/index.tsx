import { computed, defineComponent } from "vue";
import { Button } from "ant-design-vue";
import buttonProps from "ant-design-vue/lib/button/buttonTypes";
import "./index.less";

const Pjt_Button = defineComponent({
  props: {
    ...buttonProps(),
    pjtClass: {
      type: String,
      default: undefined,
    },
  },
  setup(props, { emit, slots, expose }) {
    const className = computed(() => {
      return props.pjtClass ? "pjt_button " + props.pjtClass : "pjt_button ";
    });
    const copyProps = { ...props };
    delete copyProps.pjtClass;
    return () => (
      <Button
        {...copyProps}
        class={className.value}
        v-slots={{ icon: props.icon, default: slots?.default }}
      />
    );
  },
});

export { Pjt_Button };
