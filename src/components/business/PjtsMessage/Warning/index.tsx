import { defineComponent } from "vue";
import { notification } from "ant-design-vue";
import { NotificationArgsProps } from "ant-design-vue/lib/notification";
import "./index.less";
export const PjtsMessageWarning = (props: NotificationArgsProps) => {
  notification.warning({
    ...props,
    class: props.class + " Pjts_MessageWarning Pjts_Message",
  });
};
