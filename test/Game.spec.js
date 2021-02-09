import Game from "@/components/Game.vue";
import GameBoard from "@/assets/GameBoard.js";
import { factory } from "@/assets/testUtils.js";

const gameFactory = factory(Game);

describe("Game", () => {
  // Sample data
  const rows = 5;
  const cols = 5;

  const board = new GameBoard(rows, cols);
  const status = "idle";
  const round = 0;

  const props = {
    board,
    status,
    round
  };

  const options = { props };

  it("should exist", () => {
    const wrapper = gameFactory(options);

    expect(wrapper.exists()).toBeTruthy();
  });

  it("should contain a selection group", () => {
    const wrapper = gameFactory(options);

    expect(wrapper.find(".selection-group").exists()).toBeTruthy();
  });

  it("should contain a game board", () => {
    const wrapper = gameFactory(options);

    expect(wrapper.find(".game-board").exists()).toBeTruthy();
  });

  it("should contain a sim group", () => {
    const wrapper = gameFactory(options);

    expect(wrapper.find(".sim-group").exists()).toBeTruthy();
  });
});
