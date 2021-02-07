<template>
  <div id="game">
    <SelectionGroup />
    <Board rows="5" cols="5" />
    <Button content="Simulate Pandemic" class="sim-btn" />
  </div>
</template>

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
