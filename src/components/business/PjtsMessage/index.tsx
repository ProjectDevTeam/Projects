import { PjtsMessageDestory } from "./Destory";
import { PjtsMessageError } from "./Error";
import { PjtsMessageInfo } from "./Info";
import { PjtsMessageSuccess } from "./Success";
import { PjtsMessageWarning } from "./Warning";
import "./index.less";
export const PjtsMessage = {
  success: PjtsMessageSuccess,
  info: PjtsMessageInfo,
  destory: PjtsMessageDestory,
  error: PjtsMessageError,
  warning: PjtsMessageWarning,
};
