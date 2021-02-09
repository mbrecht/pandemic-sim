import { mount, shallowMount } from "@vue/test-utils";

const createFactory = mountFn => Component => (values = {}) => {
  const { data = {}, props = {} } = values;

  return mountFn(Component, {
    propsData: { ...props },
    data() {
      return {
        ...data
      };
    }
  });
};

export const factory = createFactory(mount);

export const shallowFactory = createFactory(shallowMount);
