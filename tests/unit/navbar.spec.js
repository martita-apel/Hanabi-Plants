import { expect } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";

import Navbar from "@/components/Navbar.vue";
import Vuex from "vuex";
import myStore from "./mocks/store";

import VueRouter from "vue-router";
import myRoutes from "./mocks/routes";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

const store = new Vuex.Store(myStore);
const router = new VueRouter(myRoutes);

describe("Navbar.vue", () => {
  it("muestra menu de login si no hay usuario", () => {
    store.dispatch("updateUser", undefined);
    const wrapper = mount(Navbar, {
      localVue,
      store,
      router,
    });
    expect(wrapper.text()).to.include("registrate");
  });
  it("muestra menu de usuario si está logueado", () => {
    store.dispatch("updateUser", { email: "martita.apel@gmail.com" });
    const wrapper = mount(Navbar, {
      localVue,
      store,
      router,
    });
    expect(wrapper.text()).to.include("cerrar sesion");
  });
});
