<template>
  <div class="game-container" v-if="board">
    <div v-for="(row, x) of board.rows" :key="x">
      <p v-for="(tile, y) of row" :key="y">tile</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["board"]
};
</script>

<style scoped></style>
