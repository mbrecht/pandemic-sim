<template>
  <div>
    <button class="btn" @click="handleClick">
      {{ content }}
    </button>
  </div>
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

<style>
.btn {
  font-size: 1.5rem;
  padding: 0.5rem;
  height: fit-content;
  width: fit-content;
}
</style>
