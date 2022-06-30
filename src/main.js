import Vue from "vue";
import App from "./App.vue";

import TheHeader from "@/components/TheHeader";
import TheFinder from "@/components/TheFinder";
import TheSearch from "@/components/TheSearch";

Vue.config.productionTip = false;

Vue.component("the-header", TheHeader);
Vue.component("the-finder", TheFinder);
Vue.component("the-search", TheSearch);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
