import Vue from "vue";
import 'ag-grid-enterprise';
import App from "./App.vue";
import "./scss/main.scss";
import "./registerServiceWorker";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes, faTrashAlt, faPencilAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from "./router";
import store from "./store";

library.add(faCheck, faTimes, faTrashAlt, faPencilAlt, faUserPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
