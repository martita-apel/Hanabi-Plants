import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import RegisterModal from "../components/RegisterModal.vue";
import Inventory from "../views/Inventory.vue";
const Article = () => import("../views/Article");
const PostArticle = () => import("../components/PostArticle");

import firebase from "firebase";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterModal,
      meta: {
        login: true,
      },
    },
    {
      path: "/inventory",
      name: "Inventory",
      component: Inventory,
    },
    {
      path: "/article/:post",
      name: "Article",
      component: Article,
      children: [
        {
          path: "post",
          name: "PostArticle",
          component: PostArticle,
        },
      ],
    },
    {
      path: "*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!user && authRequired) {
    next("/login");
  } else {
    next();
  }
});

export default router;
