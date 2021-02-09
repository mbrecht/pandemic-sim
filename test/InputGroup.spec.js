import InputGroup from "@/components/InputGroup.vue";
import { factory } from "@/assets/testUtils.js";

const inputFactory = factory(InputGroup);

describe("Input Group", () => {
  it("should exist", () => {
    const wrapper = inputFactory();

    expect(wrapper.exists()).toBeTruthy();
  });

  it("should contain an input field for width", () => {
    const wrapper = inputFactory();

    expect(wrapper.find(".input-field-width").exists()).toBeTruthy();
  });

  it("should contain an input field for height", () => {
    const wrapper = inputFactory();

    expect(wrapper.find(".input-field-height").exists()).toBeTruthy();
  });

  it("should contain a submit button", () => {
    const wrapper = inputFactory();

    expect(wrapper.find("button").exists()).toBeTruthy();
  });

  it("should not render an error message by default", () => {
    const wrapper = inputFactory();

    expect(wrapper.find(".error-msg").exists()).toBeFalsy();
  });

  it("should render an error message if validation fails", async () => {
    const wrapper = inputFactory();

    wrapper.find(".input-field-width").setValue(0);
    wrapper.find(".input-field-height").setValue(0);

    await wrapper.find("button").trigger("click");

    expect(wrapper.find(".error-msg").exists()).toBeTruthy();
  });
});
