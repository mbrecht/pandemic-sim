<template>
  <table class="table">
    <tr v-for="(row, x) of board.rows" :key="x" class="row">
      <th v-for="(tile, y) of row" :key="y" :class="'tile ' + tile.status"></th>
    </tr>
  </table>
</template>

<script>
export default {
  props: ["board"]
};
</script>

<style scoped>
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
