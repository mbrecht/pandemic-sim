<template>
  <div class="game">
    <div class="game-section">
      <SelectionGroup v-on:on-change="changeSelection" />
    </div>
    <div class="game-section">
      <Board
        v-bind:board="board"
        v-bind:selection="selection"
        v-bind:set-tile="setTile"
        :key="updateKey"
      />
    </div>
    <div class="game-section sim-group">
      <Button content="Simulate Pandemic" class="sim-btn" :onClick="simulate" />
      <p v-show="round > 0 || status === simulating" class="sim-day">
        Day {{ round }}
      </p>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Board from "@/components/Board.vue";
import SelectionGroup from "@/components/SelectionGroup.vue";

export default {
  name: "Game",
  components: {
    Button,
    Board,
    SelectionGroup
  },

  props: ["board", "numInfected", "status", "round"],

  data() {
    return {
      selection: "healthy",
      updateKey: 0
    };
  },

  methods: {
    changeSelection(value) {
      this.selection = value;
    },

    setTile(data) {
      if (this.status === "idle") {
        this.$emit("set-tile", data);
        this.updateKey += 1;
      }
    },

    simulate() {
      if (this.status === "idle") this.$emit("simulate", "");
    }
  }
};
</script>

<style scoped>
.game {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin: 2rem 0;
}

.game-section {
  flex: 1 1 0px;
}

.sim-group {
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
}

.sim-day {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
