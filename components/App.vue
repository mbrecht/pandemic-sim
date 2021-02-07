<template>
  <div id="app">
    <InputGroup />
    <Game class="game" />
  </div>
</template>

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
