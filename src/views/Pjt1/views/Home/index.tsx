import Content from "@/components/business/Content";
import { defineComponent } from "vue";

const Home = defineComponent({
  setup() {
    return () => <Content v-slots={{ content: () => <div>Home</div> }} />;
  },
});

export default Home;
