import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import firebaseConfig from "@/firebase";
import firebase from "firebase";

firebase.initializeApp(firebaseConfig);

Vue.use(Vuetify);

Vue.config.productionTip = false;

let app = "";

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      Vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
