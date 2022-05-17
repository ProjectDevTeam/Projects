import Pjt1Content from "../../components/bussiness/Pjt1Content";
import { defineComponent } from "vue";

const Home = defineComponent({
  setup() {
    return () => <Pjt1Content v-slots={{ content: () => <div>Home</div> }} />;
  },
});

export default Home;
