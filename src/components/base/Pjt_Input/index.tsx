import { computed, defineComponent } from "vue";
import { Input } from "ant-design-vue";
import inputProps from "ant-design-vue/lib/input/inputProps";

const Pjt_Input = defineComponent({
  props: {
    ...inputProps(),
    pjtClass: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    const className = computed(() => {
      return props.pjtClass ? "pjt_button " + props.pjtClass : "pjt_button ";
    });
    const copyProps = { ...props };
    delete copyProps.pjtClass;
    return () => (
      <Input {...copyProps} class={className.value} value={props.value} />
    );
  },
});

export { Pjt_Input };
