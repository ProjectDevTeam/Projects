import { Pjt_Button } from "@/components/exports";
import { defineComponent } from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";
const Login = defineComponent({
  name: "Login",
  setup() {
    return () => (
      <Pjt_Button
        icon={<DownloadOutlined />}
        onClick={(e) => {
          console.log(e);
        }}
      >
        Login
      </Pjt_Button>
    );
  },
});

export default Login;
