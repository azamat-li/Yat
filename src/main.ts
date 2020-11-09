import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import axios from "axios";

Vue.config.productionTip = false;

new Vue({
  store,
  i18n,
  router,
  async created() {
    const userString = localStorage.getItem("user");
    if (userString) {
      const userData = await JSON.parse(userString);
      this.$store.commit("SET_USER_DATA", userData);
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        this.$router.push("/");
        this.$store.dispatch("logout");
        return Promise.reject(error);
      }
    );
  },
  render: h => h(App)
}).$mount("#app");
