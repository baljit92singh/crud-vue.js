import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";
import Toasted from "vue-toasted";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/nprogress/nprogress.css";

// Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Toasted);
// Vue.use(Toasted, Options);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
