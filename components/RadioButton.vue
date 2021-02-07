<template>
  <p class="radio-button">
    <input type="radio" v-bind:name="name" />
    {{ label }}
  </p>
</template>

<script>
export default {
  props: ["label", "name"]
};
</script>
