import Vue from "vue";
import App from "./App.vue";

import TheHeader from "@/components/TheHeader";
import TheSearcher from "@/components/TheSearcher";

Vue.config.productionTip = false;

Vue.component("the-header", TheHeader);
Vue.component("the-searcher", TheSearcher);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
