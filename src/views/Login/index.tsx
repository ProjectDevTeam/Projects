import { loginApi } from "@/api/login/login";
import {
  Pjt_Button,
  Pjt_Form,
  Pjt_FormItem,
  Pjt_Input,
} from "@/components/exports";
import { defineComponent, reactive, ref } from "vue";
const Login = defineComponent({
  name: "Login",
  setup() {
    const loginForm = ref();
    const labelCol = { span: 6 };
    const params = ref<{ userName: string; password: string }>({
      userName: "",
      password: "",
    });
    const handelSubmit = () => {
      // console.log(loginForm.value.validateFields);
      loginForm.value.validateFields().then((res) => {
        loginApi(res).then((res) => {
          console.log(res);
        });
      });
    };
    return () => (
      <Pjt_Form formRef={loginForm} labelCol={labelCol} model={params.value}>
        <Pjt_FormItem
          label="用户名"
          name="userName"
          rules={[{ required: true }]}
        >
          <Pjt_Input
            value={params.value.userName}
            onChange={(e) => {
              console.log(e);
              params.value.userName = e.target.value as string;
            }}
          />
        </Pjt_FormItem>
        <Pjt_FormItem label="密码" name="password" rules={[{ required: true }]}>
          <Pjt_Input
            value={params.value.password}
            onChange={(e) => {
              params.value.password = e.target.value as string;
            }}
          />
        </Pjt_FormItem>
        <Pjt_FormItem>
          <Pjt_Button onClick={handelSubmit}>登录</Pjt_Button>
        </Pjt_FormItem>
      </Pjt_Form>
    );
  },
});

export default Login;
