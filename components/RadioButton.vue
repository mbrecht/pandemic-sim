<template>
  <p class="radio">
    <input class="radio-btn" type="radio" v-bind:name="name" />
    {{ label }}
  </p>
</template>

<script>
export default {
  props: ["label", "name"]
};
</script>

<style scoped>
.radio {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  column-gap: 1rem;
  font-size: 2rem;
}

.radio-btn {
  width: 2rem;
  height: 2rem;
}
</style>
