import { notification } from "ant-design-vue";
import { NotificationArgsProps } from "ant-design-vue/lib/notification";
import "./index.less";
export const PjtsMessageError = (props: NotificationArgsProps) => {
  notification.error({
    ...props,
    class: props.class + " Pjts_MessageError Pjts_Message",
  });
};
