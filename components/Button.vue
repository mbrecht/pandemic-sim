<template>
  <button @click="handleClick">
    {{ content }}
  </button>
</template>

<script>
export default {
  props: ["content"],
  methods: {
    handleClick(e) {
      e.preventDefault();
      this.$emit("on-click");
    }
  }
};
</script>
