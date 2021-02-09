import Tile from "@/components/Tile.vue";
import { factory } from "@/assets/testUtils";

const tileFactory = factory(Tile);

describe("Tile", () => {
  // Sample data
  const status = "healthy";
  const selection = "infected";
  const setTile = () => {};
  const pos = {
    x: 0,
    y: 0
  };

  const props = {
    status,
    selection,
    setTile,
    pos
  };

  it("should exist", () => {
    const wrapper = tileFactory({ props });

    expect(wrapper.exists()).toBeTruthy();
  });

  it("should accept a status property", () => {
    const wrapper = tileFactory({ props });

    expect(wrapper.props().status).toEqual(status);
  });

  it("should accept a pos property", () => {
    const wrapper = tileFactory({ props });

    expect(wrapper.props().pos).toEqual(pos);
  });

  it("should accept a selection property", () => {
    const wrapper = tileFactory({ props });

    expect(wrapper.props().selection).toEqual(selection);
  });

  it("should add status to className", () => {
    const wrapper = tileFactory({ props });

    expect(wrapper.find(`.${status}`).exists()).toBeTruthy();
  });

  it("should add/remove selection to className on mouseover/mouseout", async () => {
    const wrapper = tileFactory({ props });

    await wrapper.find(".tile").trigger("mouseover");
    expect(wrapper.find(`.${selection}`).exists()).toBeTruthy();

    await wrapper.find(".tile").trigger("mouseout");
    expect(wrapper.find(`.${selection}`).exists()).toBeFalsy();
  });

  it("should remove/add status from className on mouseover/mouseout", async () => {
    const wrapper = tileFactory({ props });

    await wrapper.find(".tile").trigger("mouseover");
    expect(wrapper.find(`.${status}`).exists()).toBeFalsy();

    await wrapper.find(".tile").trigger("mouseout");
    expect(wrapper.find(`.${status}`).exists()).toBeTruthy();
  });
});
