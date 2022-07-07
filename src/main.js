import Vue from "vue";
import App from "./App.vue";

import TheHeader from "@/components/TheHeader";
import TheSearcher from "@/components/TheSearcher";
import TheGuests from "@/components/TheGuests";

Vue.config.productionTip = false;

Vue.component("the-header", TheHeader);
Vue.component("the-searcher", TheSearcher);
Vue.component("the-guests", TheGuests);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
