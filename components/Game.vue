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
