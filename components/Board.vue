<template>
  <table class="table">
    <tr v-for="(row, x) of board.rows" :key="x" class="row">
      <Tile
        v-for="(tile, y) of row"
        :key="tile.id"
        :status="tile.status"
        :selection="selection"
        :pos="{ x, y }"
        v-on:set-tile="setTile"
      />
    </tr>
  </table>
</template>

<script>
export default {
  props: ["board", "selection"],
  methods: {
    setTile(data) {
      this.$emit("set-tile", data);
    }
  }
};
</script>

<style>
.table {
  width: 100%;
  height: 100%;

  border: 1px solid black;
  border-collapse: collapse;
}

.tile {
  border: 1px solid black;
}

.infected {
  background-color: red;
}

.immune {
  background-color: green;
}
</style>
