<template>
  <div id="app">
    <InputGroup v-on:on-click="createBoard" />
    <Game
      v-if="isReady"
      class="game"
      v-bind:board="board"
      v-bind:status="status"
      v-on:set-tile="setTile"
      v-on:simulate="simulate"
      :key="round"
    />
  </div>
</template>

<script>
import Board from "../assets/Board";

export default {
  data() {
    return {
      board: undefined,
      isReady: false,
      round: 0,
      status: "idle"
    };
  },
  methods: {
    createBoard({ width, height }) {
      const board = new Board(width, height);
      this.board = board;
      this.isReady = true;
    },

    setTile({ x, y, status }) {
      this.board.setTile(x, y, status);
      this.$forceUpdate();
    },

    simulate() {
      const numInfected = this.board.simRound(); // how many were infected this round
      this.round += 1;

      if (numInfected) {
        this.status = "simulating";
        setTimeout(this.simulate, 500);
      } else {
        this.status = "idle";
      }
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
