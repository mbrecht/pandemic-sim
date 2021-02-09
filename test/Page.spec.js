import Page from "@/pages/index.vue";
import { factory } from "@/assets/testUtils.js";

const pageFactory = factory(Page);

describe("Page", () => {
  it("should exist", () => {
    const wrapper = pageFactory();

    expect(wrapper.exists()).toBeTruthy();
  });

  it("should contain a title", () => {
    const wrapper = pageFactory();

    expect(wrapper.find(".title").exists()).toBeTruthy();
  });

  it("title should be Pandemic Simulator", () => {
    const wrapper = pageFactory();

    expect(wrapper.find(".title").text()).toEqual("Pandemic Simulator");
  });

  it("should contain an app component", () => {
    const wrapper = pageFactory();

    expect(wrapper.find("#app").exists()).toBeTruthy();
  });
});
