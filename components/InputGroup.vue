<template>
  <div class="input-group">
    <h3 class="name">Please enter your desired 2D Grid Size</h3>
    <InputField label="height" />
    <InputField label="width" />
    <Button content="Create Grid" />
  </div>
</template>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
}

.name {
  font-size: 3rem;
  font-weight: normal;
}
</style>
