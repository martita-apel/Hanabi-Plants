import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";

import ListPlants from "@/components/ListPlants.vue";

describe("Products.vue", () => {
  let mockProducts = [{ name: "Suculenta" }];
  it("Muestra las cards", () => {
    const productName = "Suculenta";
    const wrapper = shallowMount(ListPlants, {
      data() {
        return { products: mockProducts };
      },
    });
    expect(wrapper.text()).to.include(productName);
  }),
    it("Filtra los productos", () => {
      const productName = mockProducts.name;
      const productSearch = "Macetero";
      const wrapper = shallowMount(ListPlants, {
        data() {
          return { products: mockProducts };
        },
      });
      const searchBox = wrapper.find("input");
      searchBox.setValue(productSearch);
      expect(wrapper.text()).to.not.include(productName);
    });
});
