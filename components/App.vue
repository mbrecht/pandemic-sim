<template>
  <div id="app">
    <InputGroup v-on:on-click="createBoard" />
    <Game v-if="isReady" class="game" v-bind:board="board" />
  </div>
</template>

<script>
import Board from "../assets/Board";

export default {
  data() {
    return {
      board: undefined,
      isReady: false
    };
  },
  methods: {
    createBoard({ width, height }) {
      const board = new Board(width, height);
      console.log(board);
      this.board = board;
      this.isReady = true;
    }
  }
};
</script>

<style scoped>
#app {
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
}

.game {
  flex-grow: 1;
}
</style>
