import { request } from "../request";
const loginApi = (params) => {
  return request.post("/login", params, { baseURL: "auth" });
};

export { loginApi };
