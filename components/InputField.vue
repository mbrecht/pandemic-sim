<template>
  <p class="input-container">
    {{ label }}
    <input
      name="input-field"
      :class="className"
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
  props: ["label", "type", "min", "max"],
  data() {
    return {
      value: "",
      className: `input-field input-field-${this.label}`
    };
  },
  methods: {
    handleChange(e) {
      this.$emit("on-change", this.label, e.target.value);
    }
  }
};
</script>

<style scoped>
.input-container {
  font-size: 2rem;
  width: 20rem;
  display: flex;
  justify-content: space-between;
}

.input-field {
  font-size: 1.5rem;
  padding: 0.5rem;
  width: 10rem;
}
</style>
