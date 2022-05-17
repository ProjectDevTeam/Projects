import { defineComponent } from "vue";
import { notification } from "ant-design-vue";
import { NotificationArgsProps } from "ant-design-vue/lib/notification";
import "./index.less";
export const PjtsMessageSuccess = (props: NotificationArgsProps) => {
  notification.success({
    ...props,
    class: props.class + " Pjts_MessageSuccess Pjts_Message",
  });
};
