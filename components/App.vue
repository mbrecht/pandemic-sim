<template>
  <div id="app">
    <InputGroup v-on:on-click="createBoard" />
    <Game
      v-if="isReady"
      class="game"
      v-bind:board="board"
      v-bind:status="status"
      v-bind:round="round"
      v-on:set-tile="setTile"
      v-on:simulate="startSimulation"
      :key="round"
    />
  </div>
</template>

<script>
import GameBoard from "@/assets/GameBoard.js";
import Game from "@/components/Game.vue";
import InputGroup from "@/components/InputGroup.vue";

export default {
  name: "App",
  components: {
    Game,
    InputGroup
  },
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
      this.board = new GameBoard(height, width);
      this.isReady = true;
      this.round = 0;
    },

    setTile({ x, y, status }) {
      this.board.setTile(x, y, status);
      this.$forceUpdate();
    },

    startSimulation() {
      // Reset game values to initial conditions
      this.round = 0;
      // Begin simulation
      this.simulate();
    },

    simulate() {
      if (this.board.simRound()) {
        this.status = "simulating";
        this.round += 1; // Increment to ensure game component renders

        const delay = 500; // time between rounds in ms
        setTimeout(this.simulate, delay);
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
