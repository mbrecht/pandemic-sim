import SelectionGroup from "@/components/SelectionGroup.vue";
import { shallowFactory } from "@/assets/testUtils.js";

const selectionFactory = shallowFactory(SelectionGroup);

describe("Selection Group", () => {
  it("should exist", () => {
    const wrapper = selectionFactory();

    expect(wrapper.exists()).toBeTruthy();
  });
});
