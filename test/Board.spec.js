import Board from "@/components/Board.vue";
import GameBoard from "@/assets/GameBoard.js";
import { shallowFactory } from "@/assets/testUtils.js";

const boardFactory = shallowFactory(Board);

describe("Board", () => {
  // Sample data
  const rows = 5;
  const cols = 5;
  const board = new GameBoard(rows, cols);
  const selection = "healthy";
  const setTile = jest.fn(() => {});

  const props = {
    board,
    selection,
    setTile
  };

  it("should exist", () => {
    const wrapper = boardFactory({ props });

    expect(wrapper.exists()).toBeTruthy();
  });

  it("should accept a board property", () => {
    const wrapper = boardFactory({ props });

    expect(wrapper.props().board).toEqual(board);
  });

  it("should accept a setTile property", () => {
    const wrapper = boardFactory({ props });

    expect(wrapper.props().setTile).toEqual(setTile);
  });

  it("should accept a selection property", () => {
    const wrapper = boardFactory({ props });

    expect(wrapper.props().selection).toEqual(selection);
  });

  it("should create a table based on the board property", () => {
    const wrapper = boardFactory({ props });

    expect(wrapper.find("table").exists).toBeTruthy();
  });
});
