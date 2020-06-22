import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vuetify/dist/vuetify.min.css";
import firebaseConfig from "@/firebase";
import firebase from "firebase";
import vuetify from "./plugins/vuetify";
import VueMasonry from "vue-masonry-css";

firebase.initializeApp(firebaseConfig);

Vue.use(vuetify);
Vue.use(VueMasonry);

Vue.config.productionTip = false;

let app = "";

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      VueMasonry,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
