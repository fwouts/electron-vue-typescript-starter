import App from "./App.vue";
import Vue from "vue";
import router from "./router";
import store from "./store";

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  render(createElement: any) {
    return createElement(App);
  }
} as any).$mount("#app");
