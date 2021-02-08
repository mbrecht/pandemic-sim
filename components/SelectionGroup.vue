<template>
  <div class="selection-group">
    <RadioButton
      label="Set initial infection point"
      name="selection-group"
      value="infected"
      @change="handleChange"
    />
    <RadioButton
      label="Set immune points"
      name="selection-group"
      value="immune"
      @change="handleChange"
    />
  </div>
</template>

<script>
export default {
  methods: {
    handleChange(e) {
      this.$emit("on-change", e.target.value);
    }
  }
};
</script>

<style scoped>
.selection-group {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
</style>
