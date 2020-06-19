import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
const Article = () => import("../views/Article");
const PostArticle = () => import("../components/PostArticle");
const RegisterModal = () => import("../components/RegisterModal");

/* import firebase from "firebase";
 */
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
      path: "/register",
      name: "Register",
      component: RegisterModal,
      meta: {
        login: true,
      },
    },
  ],
});

/* router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!user && authRequired) {
    next("/login");
  } else if (user && !authRequired) {
    next("/");
  } else {
    next();
  }
}); */

export default router;
