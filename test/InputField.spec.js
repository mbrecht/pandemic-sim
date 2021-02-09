import InputField from "@/components/InputField.vue";
import { factory } from "@/assets/testUtils.js";

const inputFactory = factory(InputField);

describe("Input Field", () => {
  // sample data
  const label = "test";
  const type = "number";
  const min = "1";
  const max = "10";
  const props = {
    label,
    type,
    min,
    max
  };

  const className = `.input-field-${label}`;

  it("should exist", () => {
    const wrapper = inputFactory();

    expect(wrapper.exists()).toBeTruthy();
  });

  it("should accept label property", () => {
    const wrapper = inputFactory({ props });

    expect(wrapper.find(`.input-container`).text()).toEqual(label);
  });

  it("should accept a type property", () => {
    const wrapper = inputFactory({ props });

    expect(wrapper.find(className).attributes().type).toEqual(type);
  });

  it("should accept a min property for number inputs", () => {
    const wrapper = inputFactory({ props });

    expect(wrapper.find(className).attributes().min).toEqual(min);
  });

  it("should accept a max property for number inputs", () => {
    const wrapper = inputFactory({ props });

    expect(wrapper.find(className).attributes().max).toEqual(max);
  });
});
