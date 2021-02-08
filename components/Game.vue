<template>
  <div id="game">
    <SelectionGroup />
    <Board v-bind:board="board" />
    <Button content="Simulate Pandemic" class="sim-btn" />
  </div>
</template>

<script>
export default {
  props: ["board"]
};
</script>

<style scoped>
#game {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 2rem 0;
}

.sim-btn {
  height: fit-content;
  margin-top: 2rem;
}
</style>
