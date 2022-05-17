import { Form } from "ant-design-vue";
import { formProps } from "ant-design-vue/lib/form";
import { computed, defineComponent, ref, toRefs } from "vue";

const Pjt_Form = defineComponent({
  name: "Pjt_Form",
  useForm: Form.useForm,
  props: {
    ...formProps(),
    formRef: {
      type: Object,
      default: undefined,
    },
    pjtClass: {
      type: String,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const className = computed(() => {
      return props.pjtClass ? "pjt_button " + props.pjtClass : "pjt_button ";
    });
    const formRef = ref();
    return () => (
      <Form
        {...props}
        class={className.value}
        v-slots={{ default: slots?.default }}
        ref={props.formRef ?? formRef}
      ></Form>
    );
  },
});

const Pjt_FormItem = Form.Item;
export { Pjt_Form, Pjt_FormItem };
