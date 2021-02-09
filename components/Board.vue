<template>
  <table class="table">
    <tr v-for="(row, x) of board.rows" :key="x" class="row">
      <Tile
        v-for="(tile, y) of row"
        :status="tile.status"
        :pos="{ x, y }"
        :selection="selection"
        :setTile="setTile"
        :key="y"
      />
    </tr>
  </table>
</template>

<script>
import Tile from "@/components/Tile.vue";

export default {
  name: "Board",
  components: {
    Tile
  },
  props: ["board", "selection", "setTile"]
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
