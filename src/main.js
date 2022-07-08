import Vue from "vue";
import App from "./App.vue";

import TheHeader from "@/components/TheHeader";
import TheSearcher from "@/components/TheSearcher";
import TheGuests from "@/components/TheGuests";
import TheFilter from "@/components/TheFilter";
import TheCard from "@/components/TheCard.vue";

Vue.config.productionTip = false;

Vue.component("the-header", TheHeader);
Vue.component("the-searcher", TheSearcher);
Vue.component("the-guests", TheGuests);
Vue.component("the-filter", TheFilter);
Vue.component("the-card", TheCard);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
