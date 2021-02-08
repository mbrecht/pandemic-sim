<template>
  <div id="game">
    <SelectionGroup v-on:on-change="changeSelection" />
    <Board
      v-bind:board="board"
      v-bind:selection="selection"
      v-on:set-tile="setTile"
      :key="updateKey"
    />
    <Button
      content="Simulate Pandemic"
      class="sim-btn"
      v-on:on-click="simulate"
    />
  </div>
</template>

<script>
export default {
  props: ["board", "numInfected", "status"],
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
#game {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin: 2rem 0;
}

#game * {
  flex: 1 1 0px;
}

.sim-btn {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
}
</style>
