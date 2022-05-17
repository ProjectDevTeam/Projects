import { defineComponent } from "vue";
import { notification } from "ant-design-vue";
import { NotificationArgsProps } from "ant-design-vue/lib/notification";
import "./index.less";
export const PjtsMessageInfo = (props: NotificationArgsProps) => {
  notification.info({
    ...props,
    class: props.class + " Pjts_MessageInfo Pjts_Message",
  });
};
