import { deepClone } from "@/libs/tools";
import { authorize } from "./auth";
import { AxiosResponse } from "axios";
import { PjtsMessage } from "@/components/business/PjtsMessage";
import route from "@/router";
const SUCCESS_CODE = 0;
const interceptorsRules = {
  request: {
    onFulfilled: (req) => {
      if (process.env.NODE_ENV === "development") {
        const { Auth } = authorize();
        req.headers["X-Request-Auth"] = Auth;
      }
      if (!req.headers["Content-Type"]) {
        req.headers["Content-Type"] = "application/json; charset=UTF-8";
      }

      return req;
    },
    onRejected: (error) => {
      Promise.reject(error);
    },
  },
  response: {
    onFulfilled: (res: AxiosResponse) => {
      const cloneRes = deepClone<AxiosResponse>(res);
      if (cloneRes.data.code !== SUCCESS_CODE) {
        let messages = cloneRes.data.messages.join(",");
        PjtsMessage.error({ message: messages });
        return Promise.reject(cloneRes);
      }
      return cloneRes;
    },
    onRejected: (err) => {
      //parse response status. such as 401 500 302..
      const { status } = err;
      if (status === 401) {
        route.replace("/login");
        return Promise.reject(status);
      }
      // const statusApply = STATUSCODE[status];
      // typeof statusApply === "function" && statusApply.call(null, statusText);
      // hiddenLoadding();
      // requestList.shift();
      return Promise.reject(err.message);
    },
  },
};
export { interceptorsRules };
