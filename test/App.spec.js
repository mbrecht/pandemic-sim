import App from "@/components/App.vue";
import { factory } from "@/assets/testUtils.js";

const appFactory = factory(App);

describe("App", () => {
  it("should exist", () => {
    const wrapper = appFactory();

    expect(wrapper.exists()).toBeTruthy();
  });

  /**
   * Todo: add integration tests to ensure entire app is working properly
   */
});
