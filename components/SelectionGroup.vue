<template>
  <div class="selection-group">
    <p class="radio">
      <input
        class="radio-btn"
        type="radio"
        name="selection-group"
        value="infected"
        @change="handleChange"
      />
      Set initial infection point
    </p>
    <p class="radio">
      <input
        class="radio-btn"
        type="radio"
        name="selection-group"
        value="immune"
        @change="handleChange"
      />
      Set immune points
    </p>
  </div>
</template>

<script>
export default {
  name: "SelectionGroup",
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
