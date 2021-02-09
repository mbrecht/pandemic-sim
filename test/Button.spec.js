import Button from "@/components/Button.vue";
import { factory } from "@/assets/testUtils.js";

const buttonFactory = factory(Button);

describe("Button", () => {
  // Sample data
  const content = "test";
  const onClick = jest.fn(() => {});

  const props = { content, onClick };

  it("should exist", () => {
    const wrapper = buttonFactory();

    expect(wrapper.exists()).toBeTruthy();
  });

  it("should accept a content property", () => {
    const wrapper = buttonFactory({ props });

    expect(wrapper.find(".btn").text()).toEqual(content);
  });

  it("should accpet an onClick function", () => {
    const wrapper = buttonFactory({ props });

    expect(wrapper.props().onClick).toEqual(onClick);
  });

  it("should trigger onClick when clicked", async () => {
    const wrapper = buttonFactory({ props });

    await wrapper.find(".btn").trigger("click");

    expect(onClick).toHaveBeenCalled();
  });
});
