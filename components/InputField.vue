<template>
  <p class="input-field">
    {{ label }}
    <input
      name="input-field"
      class="input"
      :type="type"
      :min="min"
      :max="max"
      v-model="value"
      @change="handleChange"
    />
  </p>
</template>

<script>
export default {
  name: "InputField",
  props: ["label", "value", "type", "min", "max"],
  methods: {
    handleChange(e) {
      this.$emit("on-change", this.label, e.target.value);
    }
  }
};
</script>

<style scoped>
.input-field {
  font-size: 2rem;
  width: 20rem;
  display: flex;
  justify-content: space-between;
}

.input {
  font-size: 1.5rem;
  padding: 0.5rem;
  width: 10rem;
}
</style>
